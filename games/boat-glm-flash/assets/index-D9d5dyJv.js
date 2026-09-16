(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xl="180",Xu=0,Ql=1,qu=2,Th=1,Ah=2,$n=3,pi=0,tn=1,Ie=2,Zn=0,zi=1,jn=2,tc=3,ec=4,Yu=5,Ii=100,Ku=101,$u=102,Zu=103,ju=104,Ju=200,Qu=201,tf=202,ef=203,go=204,xo=205,nf=206,sf=207,rf=208,af=209,of=210,lf=211,cf=212,hf=213,uf=214,vo=0,_o=1,Mo=2,xs=3,yo=4,So=5,bo=6,wo=7,vl=0,ff=1,df=2,fi=0,Rh=1,Ch=2,Ph=3,_l=4,Dh=5,Ih=6,Lh=7,zh=300,vs=301,_s=302,Eo=303,To=304,ha=306,ia=1e3,hi=1001,Ao=1002,un=1003,pf=1004,cr=1005,an=1006,Ma=1007,ui=1008,kn=1009,Uh=1010,Nh=1011,Ys=1012,Ml=1013,Ui=1014,Rn=1015,Jn=1016,yl=1017,Sl=1018,Ks=1020,Fh=35902,Oh=35899,Bh=1021,kh=1022,Sn=1023,$s=1026,Zs=1027,ua=1028,bl=1029,Hh=1030,wl=1031,El=1033,Vr=33776,Wr=33777,Xr=33778,qr=33779,Ro=35840,Co=35841,Po=35842,Do=35843,Io=36196,Lo=37492,zo=37496,Uo=37808,No=37809,Fo=37810,Oo=37811,Bo=37812,ko=37813,Ho=37814,Go=37815,Vo=37816,Wo=37817,Xo=37818,qo=37819,Yo=37820,Ko=37821,$o=36492,Zo=36494,jo=36495,Jo=36283,Qo=36284,tl=36285,el=36286,mf=3200,gf=3201,Tl=0,xf=1,ci="",je="srgb",Ms="srgb-linear",sa="linear",ce="srgb",ki=7680,nc=519,vf=512,_f=513,Mf=514,Gh=515,yf=516,Sf=517,bf=518,wf=519,nl=35044,Yr=35048,ic="300 es",On=2e3,ra=2001;class Ts{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ya=Math.PI/180,il=180/Math.PI;function di(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ve[i&255]+Ve[i>>8&255]+Ve[i>>16&255]+Ve[i>>24&255]+"-"+Ve[t&255]+Ve[t>>8&255]+"-"+Ve[t>>16&15|64]+Ve[t>>24&255]+"-"+Ve[e&63|128]+Ve[e>>8&255]+"-"+Ve[e>>16&255]+Ve[e>>24&255]+Ve[n&255]+Ve[n>>8&255]+Ve[n>>16&255]+Ve[n>>24&255]).toLowerCase()}function Zt(i,t,e){return Math.max(t,Math.min(e,i))}function Ef(i,t){return(i%t+t)%t}function Sa(i,t,e){return(1-e)*i+e*t}function Nn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ue(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class ft{constructor(t=0,e=0){ft.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ni{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const f=r[a+0],p=r[a+1],x=r[a+2],g=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=p,t[e+2]=x,t[e+3]=g;return}if(u!==g||l!==f||c!==p||h!==x){let m=1-o;const d=l*f+c*p+h*x+u*g,M=d>=0?1:-1,_=1-d*d;if(_>Number.EPSILON){const y=Math.sqrt(_),w=Math.atan2(y,d*M);m=Math.sin(m*w)/y,o=Math.sin(o*w)/y}const v=o*M;if(l=l*m+f*v,c=c*m+p*v,h=h*m+x*v,u=u*m+g*v,m===1-o){const y=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=y,c*=y,h*=y,u*=y}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],f=r[a+1],p=r[a+2],x=r[a+3];return t[e]=o*x+h*u+l*p-c*f,t[e+1]=l*x+h*f+c*u-o*p,t[e+2]=c*x+h*p+o*f-l*u,t[e+3]=h*x-o*u-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),f=l(n/2),p=l(s/2),x=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*p*x,this._y=c*p*u-f*h*x,this._z=c*h*x+f*p*u,this._w=c*h*u-f*p*x;break;case"YXZ":this._x=f*h*u+c*p*x,this._y=c*p*u-f*h*x,this._z=c*h*x-f*p*u,this._w=c*h*u+f*p*x;break;case"ZXY":this._x=f*h*u-c*p*x,this._y=c*p*u+f*h*x,this._z=c*h*x+f*p*u,this._w=c*h*u-f*p*x;break;case"ZYX":this._x=f*h*u-c*p*x,this._y=c*p*u+f*h*x,this._z=c*h*x-f*p*u,this._w=c*h*u+f*p*x;break;case"YZX":this._x=f*h*u+c*p*x,this._y=c*p*u+f*h*x,this._z=c*h*x-f*p*u,this._w=c*h*u-f*p*x;break;case"XZY":this._x=f*h*u-c*p*x,this._y=c*p*u-f*h*x,this._z=c*h*x+f*p*u,this._w=c*h*u+f*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Zt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(sc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(sc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ba.copy(this).projectOnVector(t),this.sub(ba)}reflect(t){return this.sub(ba.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ba=new I,sc=new Ni;class qt{constructor(t,e,n,s,r,a,o,l,c){qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],p=n[5],x=n[8],g=s[0],m=s[3],d=s[6],M=s[1],_=s[4],v=s[7],y=s[2],w=s[5],T=s[8];return r[0]=a*g+o*M+l*y,r[3]=a*m+o*_+l*w,r[6]=a*d+o*v+l*T,r[1]=c*g+h*M+u*y,r[4]=c*m+h*_+u*w,r[7]=c*d+h*v+u*T,r[2]=f*g+p*M+x*y,r[5]=f*m+p*_+x*w,r[8]=f*d+p*v+x*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,f=o*l-h*r,p=c*r-a*l,x=e*u+n*f+s*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/x;return t[0]=u*g,t[1]=(s*c-h*n)*g,t[2]=(o*n-s*a)*g,t[3]=f*g,t[4]=(h*e-s*l)*g,t[5]=(s*r-o*e)*g,t[6]=p*g,t[7]=(n*l-c*e)*g,t[8]=(a*e-n*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(wa.makeScale(t,e)),this}rotate(t){return this.premultiply(wa.makeRotation(-t)),this}translate(t,e){return this.premultiply(wa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const wa=new qt;function Vh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function aa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Tf(){const i=aa("canvas");return i.style.display="block",i}const rc={};function js(i){i in rc||(rc[i]=!0,console.warn(i))}function Af(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const ac=new qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),oc=new qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Rf(){const i={enabled:!0,workingColorSpace:Ms,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ce&&(s.r=Qn(s.r),s.g=Qn(s.g),s.b=Qn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ce&&(s.r=ps(s.r),s.g=ps(s.g),s.b=ps(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ci?sa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return js("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return js("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ms]:{primaries:t,whitePoint:n,transfer:sa,toXYZ:ac,fromXYZ:oc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:je},outputColorSpaceConfig:{drawingBufferColorSpace:je}},[je]:{primaries:t,whitePoint:n,transfer:ce,toXYZ:ac,fromXYZ:oc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:je}}}),i}const ie=Rf();function Qn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ps(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Hi;class Cf{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Hi===void 0&&(Hi=aa("canvas")),Hi.width=t.width,Hi.height=t.height;const s=Hi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Hi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=aa("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Qn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Qn(e[n]/255)*255):e[n]=Qn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Pf=0;class Al{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Pf++}),this.uuid=di(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ea(s[a].image)):r.push(Ea(s[a]))}else r=Ea(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Ea(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Cf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Df=0;const Ta=new I;class qe extends Ts{constructor(t=qe.DEFAULT_IMAGE,e=qe.DEFAULT_MAPPING,n=hi,s=hi,r=an,a=ui,o=Sn,l=kn,c=qe.DEFAULT_ANISOTROPY,h=ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Df++}),this.uuid=di(),this.name="",this.source=new Al(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ta).x}get height(){return this.source.getSize(Ta).y}get depth(){return this.source.getSize(Ta).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==zh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ia:t.x=t.x-Math.floor(t.x);break;case hi:t.x=t.x<0?0:1;break;case Ao:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ia:t.y=t.y-Math.floor(t.y);break;case hi:t.y=t.y<0?0:1;break;case Ao:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}qe.DEFAULT_IMAGE=null;qe.DEFAULT_MAPPING=zh;qe.DEFAULT_ANISOTROPY=1;class Ce{constructor(t=0,e=0,n=0,s=1){Ce.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],x=l[9],g=l[2],m=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-g)<.01&&Math.abs(x-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+g)<.1&&Math.abs(x+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(c+1)/2,v=(p+1)/2,y=(d+1)/2,w=(h+f)/4,T=(u+g)/4,R=(x+m)/4;return _>v&&_>y?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=w/n,r=T/n):v>y?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=w/s,r=R/s):y<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(y),n=T/r,s=R/r),this.set(n,s,r,e),this}let M=Math.sqrt((m-x)*(m-x)+(u-g)*(u-g)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(m-x)/M,this.y=(u-g)/M,this.z=(f-h)/M,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this.w=Zt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this.w=Zt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class If extends Ts{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ce(0,0,t,e),this.scissorTest=!1,this.viewport=new Ce(0,0,t,e);const s={width:t,height:e,depth:n.depth},r=new qe(s);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:an,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Al(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cn extends If{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Wh extends qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=un,this.minFilter=un,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Lf extends qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=un,this.minFilter=un,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fi{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(wn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(wn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=wn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,wn):wn.fromBufferAttribute(r,a),wn.applyMatrix4(t.matrixWorld),this.expandByPoint(wn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),hr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),hr.copy(n.boundingBox)),hr.applyMatrix4(t.matrixWorld),this.union(hr)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,wn),wn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ps),ur.subVectors(this.max,Ps),Gi.subVectors(t.a,Ps),Vi.subVectors(t.b,Ps),Wi.subVectors(t.c,Ps),ni.subVectors(Vi,Gi),ii.subVectors(Wi,Vi),xi.subVectors(Gi,Wi);let e=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-xi.z,xi.y,ni.z,0,-ni.x,ii.z,0,-ii.x,xi.z,0,-xi.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-xi.y,xi.x,0];return!Aa(e,Gi,Vi,Wi,ur)||(e=[1,0,0,0,1,0,0,0,1],!Aa(e,Gi,Vi,Wi,ur))?!1:(fr.crossVectors(ni,ii),e=[fr.x,fr.y,fr.z],Aa(e,Gi,Vi,Wi,ur))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,wn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(wn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Vn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Vn=[new I,new I,new I,new I,new I,new I,new I,new I],wn=new I,hr=new Fi,Gi=new I,Vi=new I,Wi=new I,ni=new I,ii=new I,xi=new I,Ps=new I,ur=new I,fr=new I,vi=new I;function Aa(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){vi.fromArray(i,r);const o=s.x*Math.abs(vi.x)+s.y*Math.abs(vi.y)+s.z*Math.abs(vi.z),l=t.dot(vi),c=e.dot(vi),h=n.dot(vi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const zf=new Fi,Ds=new I,Ra=new I;class sr{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):zf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ds.subVectors(t,this.center);const e=Ds.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ds,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ra.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ds.copy(t.center).add(Ra)),this.expandByPoint(Ds.copy(t.center).sub(Ra))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Wn=new I,Ca=new I,dr=new I,si=new I,Pa=new I,pr=new I,Da=new I;class Uf{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Wn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Wn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Wn.copy(this.origin).addScaledVector(this.direction,e),Wn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ca.copy(t).add(e).multiplyScalar(.5),dr.copy(e).sub(t).normalize(),si.copy(this.origin).sub(Ca);const r=t.distanceTo(e)*.5,a=-this.direction.dot(dr),o=si.dot(this.direction),l=-si.dot(dr),c=si.lengthSq(),h=Math.abs(1-a*a);let u,f,p,x;if(h>0)if(u=a*l-o,f=a*o-l,x=r*h,u>=0)if(f>=-x)if(f<=x){const g=1/h;u*=g,f*=g,p=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f<=-x?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c):f<=x?(u=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ca).addScaledVector(dr,f),p}intersectSphere(t,e){Wn.subVectors(t.center,this.origin);const n=Wn.dot(this.direction),s=Wn.dot(Wn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Wn)!==null}intersectTriangle(t,e,n,s,r){Pa.subVectors(e,t),pr.subVectors(n,t),Da.crossVectors(Pa,pr);let a=this.direction.dot(Da),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;si.subVectors(this.origin,t);const l=o*this.direction.dot(pr.crossVectors(si,pr));if(l<0)return null;const c=o*this.direction.dot(Pa.cross(si));if(c<0||l+c>a)return null;const h=-o*si.dot(Da);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class de{constructor(t,e,n,s,r,a,o,l,c,h,u,f,p,x,g,m){de.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,f,p,x,g,m)}set(t,e,n,s,r,a,o,l,c,h,u,f,p,x,g,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=x,d[11]=g,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new de().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Xi.setFromMatrixColumn(t,0).length(),r=1/Xi.setFromMatrixColumn(t,1).length(),a=1/Xi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=a*h,p=a*u,x=o*h,g=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+x*c,e[5]=f-g*c,e[9]=-o*l,e[2]=g-f*c,e[6]=x+p*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*h,p=l*u,x=c*h,g=c*u;e[0]=f+g*o,e[4]=x*o-p,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-x,e[6]=g+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*h,p=l*u,x=c*h,g=c*u;e[0]=f-g*o,e[4]=-a*u,e[8]=x+p*o,e[1]=p+x*o,e[5]=a*h,e[9]=g-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*h,p=a*u,x=o*h,g=o*u;e[0]=l*h,e[4]=x*c-p,e[8]=f*c+g,e[1]=l*u,e[5]=g*c+f,e[9]=p*c-x,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,p=a*c,x=o*l,g=o*c;e[0]=l*h,e[4]=g-f*u,e[8]=x*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*u+x,e[10]=f-g*u}else if(t.order==="XZY"){const f=a*l,p=a*c,x=o*l,g=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+g,e[5]=a*h,e[9]=p*u-x,e[2]=x*u-p,e[6]=o*h,e[10]=g*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Nf,t,Ff)}lookAt(t,e,n){const s=this.elements;return cn.subVectors(t,e),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),ri.crossVectors(n,cn),ri.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),ri.crossVectors(n,cn)),ri.normalize(),mr.crossVectors(cn,ri),s[0]=ri.x,s[4]=mr.x,s[8]=cn.x,s[1]=ri.y,s[5]=mr.y,s[9]=cn.y,s[2]=ri.z,s[6]=mr.z,s[10]=cn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],p=n[13],x=n[2],g=n[6],m=n[10],d=n[14],M=n[3],_=n[7],v=n[11],y=n[15],w=s[0],T=s[4],R=s[8],S=s[12],b=s[1],D=s[5],z=s[9],N=s[13],k=s[2],H=s[6],W=s[10],j=s[14],X=s[3],nt=s[7],ht=s[11],vt=s[15];return r[0]=a*w+o*b+l*k+c*X,r[4]=a*T+o*D+l*H+c*nt,r[8]=a*R+o*z+l*W+c*ht,r[12]=a*S+o*N+l*j+c*vt,r[1]=h*w+u*b+f*k+p*X,r[5]=h*T+u*D+f*H+p*nt,r[9]=h*R+u*z+f*W+p*ht,r[13]=h*S+u*N+f*j+p*vt,r[2]=x*w+g*b+m*k+d*X,r[6]=x*T+g*D+m*H+d*nt,r[10]=x*R+g*z+m*W+d*ht,r[14]=x*S+g*N+m*j+d*vt,r[3]=M*w+_*b+v*k+y*X,r[7]=M*T+_*D+v*H+y*nt,r[11]=M*R+_*z+v*W+y*ht,r[15]=M*S+_*N+v*j+y*vt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],p=t[14],x=t[3],g=t[7],m=t[11],d=t[15];return x*(+r*l*u-s*c*u-r*o*f+n*c*f+s*o*p-n*l*p)+g*(+e*l*p-e*c*f+r*a*f-s*a*p+s*c*h-r*l*h)+m*(+e*c*u-e*o*p-r*a*u+n*a*p+r*o*h-n*c*h)+d*(-s*o*h-e*l*u+e*o*f+s*a*u-n*a*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],p=t[11],x=t[12],g=t[13],m=t[14],d=t[15],M=u*m*c-g*f*c+g*l*p-o*m*p-u*l*d+o*f*d,_=x*f*c-h*m*c-x*l*p+a*m*p+h*l*d-a*f*d,v=h*g*c-x*u*c+x*o*p-a*g*p-h*o*d+a*u*d,y=x*u*l-h*g*l-x*o*f+a*g*f+h*o*m-a*u*m,w=e*M+n*_+s*v+r*y;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/w;return t[0]=M*T,t[1]=(g*f*r-u*m*r-g*s*p+n*m*p+u*s*d-n*f*d)*T,t[2]=(o*m*r-g*l*r+g*s*c-n*m*c-o*s*d+n*l*d)*T,t[3]=(u*l*r-o*f*r-u*s*c+n*f*c+o*s*p-n*l*p)*T,t[4]=_*T,t[5]=(h*m*r-x*f*r+x*s*p-e*m*p-h*s*d+e*f*d)*T,t[6]=(x*l*r-a*m*r-x*s*c+e*m*c+a*s*d-e*l*d)*T,t[7]=(a*f*r-h*l*r+h*s*c-e*f*c-a*s*p+e*l*p)*T,t[8]=v*T,t[9]=(x*u*r-h*g*r-x*n*p+e*g*p+h*n*d-e*u*d)*T,t[10]=(a*g*r-x*o*r+x*n*c-e*g*c-a*n*d+e*o*d)*T,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*p-e*o*p)*T,t[12]=y*T,t[13]=(h*g*s-x*u*s+x*n*f-e*g*f-h*n*m+e*u*m)*T,t[14]=(x*o*s-a*g*s-x*n*l+e*g*l+a*n*m-e*o*m)*T,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*f+e*o*f)*T,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,f=r*c,p=r*h,x=r*u,g=a*h,m=a*u,d=o*u,M=l*c,_=l*h,v=l*u,y=n.x,w=n.y,T=n.z;return s[0]=(1-(g+d))*y,s[1]=(p+v)*y,s[2]=(x-_)*y,s[3]=0,s[4]=(p-v)*w,s[5]=(1-(f+d))*w,s[6]=(m+M)*w,s[7]=0,s[8]=(x+_)*T,s[9]=(m-M)*T,s[10]=(1-(f+g))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Xi.set(s[0],s[1],s[2]).length();const a=Xi.set(s[4],s[5],s[6]).length(),o=Xi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],En.copy(this);const c=1/r,h=1/a,u=1/o;return En.elements[0]*=c,En.elements[1]*=c,En.elements[2]*=c,En.elements[4]*=h,En.elements[5]*=h,En.elements[6]*=h,En.elements[8]*=u,En.elements[9]*=u,En.elements[10]*=u,e.setFromRotationMatrix(En),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=On,l=!1){const c=this.elements,h=2*r/(e-t),u=2*r/(n-s),f=(e+t)/(e-t),p=(n+s)/(n-s);let x,g;if(l)x=r/(a-r),g=a*r/(a-r);else if(o===On)x=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===ra)x=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=On,l=!1){const c=this.elements,h=2/(e-t),u=2/(n-s),f=-(e+t)/(e-t),p=-(n+s)/(n-s);let x,g;if(l)x=1/(a-r),g=a/(a-r);else if(o===On)x=-2/(a-r),g=-(a+r)/(a-r);else if(o===ra)x=-1/(a-r),g=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=x,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Xi=new I,En=new de,Nf=new I(0,0,0),Ff=new I(1,1,1),ri=new I,mr=new I,cn=new I,lc=new de,cc=new Ni;class fn{constructor(t=0,e=0,n=0,s=fn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Zt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return lc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(lc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return cc.setFromEuler(this),this.setFromQuaternion(cc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fn.DEFAULT_ORDER="XYZ";class Xh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Of=0;const hc=new I,qi=new Ni,Xn=new de,gr=new I,Is=new I,Bf=new I,kf=new Ni,uc=new I(1,0,0),fc=new I(0,1,0),dc=new I(0,0,1),pc={type:"added"},Hf={type:"removed"},Yi={type:"childadded",child:null},Ia={type:"childremoved",child:null};class Le extends Ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Of++}),this.uuid=di(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Le.DEFAULT_UP.clone();const t=new I,e=new fn,n=new Ni,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new de},normalMatrix:{value:new qt}}),this.matrix=new de,this.matrixWorld=new de,this.matrixAutoUpdate=Le.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return qi.setFromAxisAngle(t,e),this.quaternion.multiply(qi),this}rotateOnWorldAxis(t,e){return qi.setFromAxisAngle(t,e),this.quaternion.premultiply(qi),this}rotateX(t){return this.rotateOnAxis(uc,t)}rotateY(t){return this.rotateOnAxis(fc,t)}rotateZ(t){return this.rotateOnAxis(dc,t)}translateOnAxis(t,e){return hc.copy(t).applyQuaternion(this.quaternion),this.position.add(hc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(uc,t)}translateY(t){return this.translateOnAxis(fc,t)}translateZ(t){return this.translateOnAxis(dc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Xn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?gr.copy(t):gr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xn.lookAt(Is,gr,this.up):Xn.lookAt(gr,Is,this.up),this.quaternion.setFromRotationMatrix(Xn),s&&(Xn.extractRotation(s.matrixWorld),qi.setFromRotationMatrix(Xn),this.quaternion.premultiply(qi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(pc),Yi.child=t,this.dispatchEvent(Yi),Yi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Hf),Ia.child=t,this.dispatchEvent(Ia),Ia.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Xn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Xn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Xn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(pc),Yi.child=t,this.dispatchEvent(Yi),Yi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,t,Bf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,kf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),p=a(t.animations),x=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Le.DEFAULT_UP=new I(0,1,0);Le.DEFAULT_MATRIX_AUTO_UPDATE=!0;Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Tn=new I,qn=new I,La=new I,Yn=new I,Ki=new I,$i=new I,mc=new I,za=new I,Ua=new I,Na=new I,Fa=new Ce,Oa=new Ce,Ba=new Ce;class yn{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Tn.subVectors(t,e),s.cross(Tn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Tn.subVectors(s,e),qn.subVectors(n,e),La.subVectors(t,e);const a=Tn.dot(Tn),o=Tn.dot(qn),l=Tn.dot(La),c=qn.dot(qn),h=qn.dot(La),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const f=1/u,p=(c*l-o*h)*f,x=(a*h-o*l)*f;return r.set(1-p-x,x,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Yn)===null?!1:Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Yn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Yn.x),l.addScaledVector(a,Yn.y),l.addScaledVector(o,Yn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Fa.setScalar(0),Oa.setScalar(0),Ba.setScalar(0),Fa.fromBufferAttribute(t,e),Oa.fromBufferAttribute(t,n),Ba.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Fa,r.x),a.addScaledVector(Oa,r.y),a.addScaledVector(Ba,r.z),a}static isFrontFacing(t,e,n,s){return Tn.subVectors(n,e),qn.subVectors(t,e),Tn.cross(qn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Tn.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),Tn.cross(qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return yn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return yn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return yn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return yn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return yn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Ki.subVectors(s,n),$i.subVectors(r,n),za.subVectors(t,n);const l=Ki.dot(za),c=$i.dot(za);if(l<=0&&c<=0)return e.copy(n);Ua.subVectors(t,s);const h=Ki.dot(Ua),u=$i.dot(Ua);if(h>=0&&u<=h)return e.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Ki,a);Na.subVectors(t,r);const p=Ki.dot(Na),x=$i.dot(Na);if(x>=0&&p<=x)return e.copy(r);const g=p*c-l*x;if(g<=0&&c>=0&&x<=0)return o=c/(c-x),e.copy(n).addScaledVector($i,o);const m=h*x-p*u;if(m<=0&&u-h>=0&&p-x>=0)return mc.subVectors(r,s),o=(u-h)/(u-h+(p-x)),e.copy(s).addScaledVector(mc,o);const d=1/(m+g+f);return a=g*d,o=f*d,e.copy(n).addScaledVector(Ki,a).addScaledVector($i,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const qh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ai={h:0,s:0,l:0},xr={h:0,s:0,l:0};function ka(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class rt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=je){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ie.workingColorSpace){return this.r=t,this.g=e,this.b=n,ie.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ie.workingColorSpace){if(t=Ef(t,1),e=Zt(e,0,1),n=Zt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=ka(a,r,t+1/3),this.g=ka(a,r,t),this.b=ka(a,r,t-1/3)}return ie.colorSpaceToWorking(this,s),this}setStyle(t,e=je){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=je){const n=qh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Qn(t.r),this.g=Qn(t.g),this.b=Qn(t.b),this}copyLinearToSRGB(t){return this.r=ps(t.r),this.g=ps(t.g),this.b=ps(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=je){return ie.workingToColorSpace(We.copy(this),t),Math.round(Zt(We.r*255,0,255))*65536+Math.round(Zt(We.g*255,0,255))*256+Math.round(Zt(We.b*255,0,255))}getHexString(t=je){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.workingToColorSpace(We.copy(this),e);const n=We.r,s=We.g,r=We.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ie.workingColorSpace){return ie.workingToColorSpace(We.copy(this),e),t.r=We.r,t.g=We.g,t.b=We.b,t}getStyle(t=je){ie.workingToColorSpace(We.copy(this),t);const e=We.r,n=We.g,s=We.b;return t!==je?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ai),this.setHSL(ai.h+t,ai.s+e,ai.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ai),t.getHSL(xr);const n=Sa(ai.h,xr.h,e),s=Sa(ai.s,xr.s,e),r=Sa(ai.l,xr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const We=new rt;rt.NAMES=qh;let Gf=0;class Oi extends Ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gf++}),this.uuid=di(),this.name="",this.type="Material",this.blending=zi,this.side=pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=go,this.blendDst=xo,this.blendEquation=Ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ki,this.stencilZFail=ki,this.stencilZPass=ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==zi&&(n.blending=this.blending),this.side!==pi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==go&&(n.blendSrc=this.blendSrc),this.blendDst!==xo&&(n.blendDst=this.blendDst),this.blendEquation!==Ii&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==xs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==nc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ki&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ki&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ki&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Qe extends Oi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.combine=vl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ze=new I,vr=new ft;let Vf=0;class Te{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Vf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=nl,this.updateRanges=[],this.gpuType=Rn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)vr.fromBufferAttribute(this,e),vr.applyMatrix3(t),this.setXY(e,vr.x,vr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix3(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix4(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyNormalMatrix(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.transformDirection(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Nn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ue(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Nn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Nn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Nn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Nn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),s=ue(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),s=ue(s,this.array),r=ue(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==nl&&(t.usage=this.usage),t}}class Yh extends Te{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Kh extends Te{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ht extends Te{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Wf=0;const gn=new de,Ha=new Le,Zi=new I,hn=new Fi,Ls=new Fi,ke=new I;class pe extends Ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wf++}),this.uuid=di(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Vh(t)?Kh:Yh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return gn.makeRotationFromQuaternion(t),this.applyMatrix4(gn),this}rotateX(t){return gn.makeRotationX(t),this.applyMatrix4(gn),this}rotateY(t){return gn.makeRotationY(t),this.applyMatrix4(gn),this}rotateZ(t){return gn.makeRotationZ(t),this.applyMatrix4(gn),this}translate(t,e,n){return gn.makeTranslation(t,e,n),this.applyMatrix4(gn),this}scale(t,e,n){return gn.makeScale(t,e,n),this.applyMatrix4(gn),this}lookAt(t){return Ha.lookAt(t),Ha.updateMatrix(),this.applyMatrix4(Ha.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zi).negate(),this.translate(Zi.x,Zi.y,Zi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ht(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];hn.setFromBufferAttribute(r),this.morphTargetsRelative?(ke.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(ke),ke.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(ke)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(hn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Ls.setFromBufferAttribute(o),this.morphTargetsRelative?(ke.addVectors(hn.min,Ls.min),hn.expandByPoint(ke),ke.addVectors(hn.max,Ls.max),hn.expandByPoint(ke)):(hn.expandByPoint(Ls.min),hn.expandByPoint(Ls.max))}hn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)ke.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ke));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)ke.fromBufferAttribute(o,c),l&&(Zi.fromBufferAttribute(t,c),ke.add(Zi)),s=Math.max(s,n.distanceToSquared(ke))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Te(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<n.count;R++)o[R]=new I,l[R]=new I;const c=new I,h=new I,u=new I,f=new ft,p=new ft,x=new ft,g=new I,m=new I;function d(R,S,b){c.fromBufferAttribute(n,R),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,b),f.fromBufferAttribute(r,R),p.fromBufferAttribute(r,S),x.fromBufferAttribute(r,b),h.sub(c),u.sub(c),p.sub(f),x.sub(f);const D=1/(p.x*x.y-x.x*p.y);isFinite(D)&&(g.copy(h).multiplyScalar(x.y).addScaledVector(u,-p.y).multiplyScalar(D),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-x.x).multiplyScalar(D),o[R].add(g),o[S].add(g),o[b].add(g),l[R].add(m),l[S].add(m),l[b].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let R=0,S=M.length;R<S;++R){const b=M[R],D=b.start,z=b.count;for(let N=D,k=D+z;N<k;N+=3)d(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const _=new I,v=new I,y=new I,w=new I;function T(R){y.fromBufferAttribute(s,R),w.copy(y);const S=o[R];_.copy(S),_.sub(y.multiplyScalar(y.dot(S))).normalize(),v.crossVectors(w,S);const D=v.dot(l[R])<0?-1:1;a.setXYZW(R,_.x,_.y,_.z,D)}for(let R=0,S=M.length;R<S;++R){const b=M[R],D=b.start,z=b.count;for(let N=D,k=D+z;N<k;N+=3)T(t.getX(N+0)),T(t.getX(N+1)),T(t.getX(N+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Te(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const s=new I,r=new I,a=new I,o=new I,l=new I,c=new I,h=new I,u=new I;if(t)for(let f=0,p=t.count;f<p;f+=3){const x=t.getX(f+0),g=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,g),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ke.fromBufferAttribute(t,e),ke.normalize(),t.setXYZ(e,ke.x,ke.y,ke.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let p=0,x=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?p=l[g]*o.data.stride+o.offset:p=l[g]*h;for(let d=0;d<h;d++)f[x++]=c[p++]}return new Te(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new pe,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],p=t(f,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const gc=new de,_i=new Uf,_r=new sr,xc=new I,Mr=new I,yr=new I,Sr=new I,Ga=new I,br=new I,vc=new I,wr=new I;class tt extends Le{constructor(t=new pe,e=new Qe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){br.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(Ga.fromBufferAttribute(u,t),a?br.addScaledVector(Ga,h):br.addScaledVector(Ga.sub(e),h))}e.add(br)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_r.copy(n.boundingSphere),_r.applyMatrix4(r),_i.copy(t.ray).recast(t.near),!(_r.containsPoint(_i.origin)===!1&&(_i.intersectSphere(_r,xc)===null||_i.origin.distanceToSquared(xc)>(t.far-t.near)**2))&&(gc.copy(r).invert(),_i.copy(t.ray).applyMatrix4(gc),!(n.boundingBox!==null&&_i.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,_i)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,g=f.length;x<g;x++){const m=f[x],d=a[m.materialIndex],M=Math.max(m.start,p.start),_=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let v=M,y=_;v<y;v+=3){const w=o.getX(v),T=o.getX(v+1),R=o.getX(v+2);s=Er(this,d,t,n,c,h,u,w,T,R),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const x=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);for(let m=x,d=g;m<d;m+=3){const M=o.getX(m),_=o.getX(m+1),v=o.getX(m+2);s=Er(this,a,t,n,c,h,u,M,_,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,g=f.length;x<g;x++){const m=f[x],d=a[m.materialIndex],M=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=M,y=_;v<y;v+=3){const w=v,T=v+1,R=v+2;s=Er(this,d,t,n,c,h,u,w,T,R),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const x=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=x,d=g;m<d;m+=3){const M=m,_=m+1,v=m+2;s=Er(this,a,t,n,c,h,u,M,_,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Xf(i,t,e,n,s,r,a,o){let l;if(t.side===tn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===pi,o),l===null)return null;wr.copy(o),wr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(wr);return c<e.near||c>e.far?null:{distance:c,point:wr.clone(),object:i}}function Er(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Mr),i.getVertexPosition(l,yr),i.getVertexPosition(c,Sr);const h=Xf(i,t,e,n,Mr,yr,Sr,vc);if(h){const u=new I;yn.getBarycoord(vc,Mr,yr,Sr,u),s&&(h.uv=yn.getInterpolatedAttribute(s,o,l,c,u,new ft)),r&&(h.uv1=yn.getInterpolatedAttribute(r,o,l,c,u,new ft)),a&&(h.normal=yn.getInterpolatedAttribute(a,o,l,c,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new I,materialIndex:0};yn.getNormal(Mr,yr,Sr,f.normal),h.face=f,h.barycoord=u}return h}class te extends pe{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let f=0,p=0;x("z","y","x",-1,-1,n,e,t,a,r,0),x("z","y","x",1,-1,n,e,-t,a,r,1),x("x","z","y",1,1,t,n,e,s,a,2),x("x","z","y",1,-1,t,n,-e,s,a,3),x("x","y","z",1,-1,t,e,n,s,r,4),x("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ht(c,3)),this.setAttribute("normal",new Ht(h,3)),this.setAttribute("uv",new Ht(u,2));function x(g,m,d,M,_,v,y,w,T,R,S){const b=v/T,D=y/R,z=v/2,N=y/2,k=w/2,H=T+1,W=R+1;let j=0,X=0;const nt=new I;for(let ht=0;ht<W;ht++){const vt=ht*D-N;for(let Gt=0;Gt<H;Gt++){const se=Gt*b-z;nt[g]=se*M,nt[m]=vt*_,nt[d]=k,c.push(nt.x,nt.y,nt.z),nt[g]=0,nt[m]=0,nt[d]=w>0?1:-1,h.push(nt.x,nt.y,nt.z),u.push(Gt/T),u.push(1-ht/R),j+=1}}for(let ht=0;ht<R;ht++)for(let vt=0;vt<T;vt++){const Gt=f+vt+H*ht,se=f+vt+H*(ht+1),re=f+(vt+1)+H*(ht+1),ne=f+(vt+1)+H*ht;l.push(Gt,se,ne),l.push(se,re,ne),X+=6}o.addGroup(p,X,S),p+=X,f+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new te(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ys(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ze(i){const t={};for(let e=0;e<i.length;e++){const n=ys(i[e]);for(const s in n)t[s]=n[s]}return t}function qf(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function $h(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}const Js={clone:ys,merge:Ze};var Yf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Kf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pe extends Oi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yf,this.fragmentShader=Kf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ys(t.uniforms),this.uniformsGroups=qf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Zh extends Le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new de,this.projectionMatrix=new de,this.projectionMatrixInverse=new de,this.coordinateSystem=On,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const oi=new I,_c=new ft,Mc=new ft;class Mn extends Zh{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=il*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ya*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return il*2*Math.atan(Math.tan(ya*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(oi.x,oi.y).multiplyScalar(-t/oi.z),oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(oi.x,oi.y).multiplyScalar(-t/oi.z)}getViewSize(t,e){return this.getViewBounds(t,_c,Mc),e.subVectors(Mc,_c)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ya*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ji=-90,Ji=1;class $f extends Le{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Mn(ji,Ji,t,e);s.layers=this.layers,this.add(s);const r=new Mn(ji,Ji,t,e);r.layers=this.layers,this.add(r);const a=new Mn(ji,Ji,t,e);a.layers=this.layers,this.add(a);const o=new Mn(ji,Ji,t,e);o.layers=this.layers,this.add(o);const l=new Mn(ji,Ji,t,e);l.layers=this.layers,this.add(l);const c=new Mn(ji,Ji,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===On)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ra)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,p),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class jh extends qe{constructor(t=[],e=vs,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Zf extends Cn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new jh(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new te(5,5,5),r=new Pe({name:"CubemapFromEquirect",uniforms:ys(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:tn,blending:Zn});r.uniforms.tEquirect.value=e;const a=new tt(s,r),o=e.minFilter;return e.minFilter===ui&&(e.minFilter=an),new $f(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}class xe extends Le{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jf={type:"move"};class Va{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,n),d=this._getHandJoint(c,g);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,x=.005;c.inputState.pinching&&f>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(jf)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new xe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Rl{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new rt(t),this.near=e,this.far=n}clone(){return new Rl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Jf extends Le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fn,this.environmentIntensity=1,this.environmentRotation=new fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Qf{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=nl,this.updateRanges=[],this.version=0,this.uuid=di()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=di()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=di()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ke=new I;class oa{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.applyMatrix4(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.applyNormalMatrix(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.transformDirection(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Nn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ue(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Nn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Nn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Nn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Nn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),s=ue(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),s=ue(s,this.array),r=ue(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Te(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new oa(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Jh extends Oi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new rt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Qi;const zs=new I,ts=new I,es=new I,ns=new ft,Us=new ft,Qh=new de,Tr=new I,Ns=new I,Ar=new I,yc=new ft,Wa=new ft,Sc=new ft;class td extends Le{constructor(t=new Jh){if(super(),this.isSprite=!0,this.type="Sprite",Qi===void 0){Qi=new pe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Qf(e,5);Qi.setIndex([0,1,2,0,2,3]),Qi.setAttribute("position",new oa(n,3,0,!1)),Qi.setAttribute("uv",new oa(n,2,3,!1))}this.geometry=Qi,this.material=t,this.center=new ft(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ts.setFromMatrixScale(this.matrixWorld),Qh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),es.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ts.multiplyScalar(-es.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;Rr(Tr.set(-.5,-.5,0),es,a,ts,s,r),Rr(Ns.set(.5,-.5,0),es,a,ts,s,r),Rr(Ar.set(.5,.5,0),es,a,ts,s,r),yc.set(0,0),Wa.set(1,0),Sc.set(1,1);let o=t.ray.intersectTriangle(Tr,Ns,Ar,!1,zs);if(o===null&&(Rr(Ns.set(-.5,.5,0),es,a,ts,s,r),Wa.set(0,1),o=t.ray.intersectTriangle(Tr,Ar,Ns,!1,zs),o===null))return;const l=t.ray.origin.distanceTo(zs);l<t.near||l>t.far||e.push({distance:l,point:zs.clone(),uv:yn.getInterpolation(zs,Tr,Ns,Ar,yc,Wa,Sc,new ft),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Rr(i,t,e,n,s,r){ns.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Us.x=r*ns.x-s*ns.y,Us.y=s*ns.x+r*ns.y):Us.copy(ns),i.copy(t),i.x+=Us.x,i.y+=Us.y,i.applyMatrix4(Qh)}class Cl extends qe{constructor(t=null,e=1,n=1,s,r,a,o,l,c=un,h=un,u,f){super(null,a,o,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zn extends Te{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const is=new de,bc=new de,Cr=[],wc=new Fi,ed=new de,Fs=new tt,Os=new sr;class Ec extends tt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new zn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,ed)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Fi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,is),wc.copy(t.boundingBox).applyMatrix4(is),this.boundingBox.union(wc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new sr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,is),Os.copy(t.boundingSphere).applyMatrix4(is),this.boundingSphere.union(Os)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Fs.geometry=this.geometry,Fs.material=this.material,Fs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Os.copy(this.boundingSphere),Os.applyMatrix4(n),t.ray.intersectsSphere(Os)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,is),bc.multiplyMatrices(n,is),Fs.matrixWorld=bc,Fs.raycast(t,Cr);for(let a=0,o=Cr.length;a<o;a++){const l=Cr[a];l.instanceId=r,l.object=this,e.push(l)}Cr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new zn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Cl(new Float32Array(s*this.count),s,this.count,ua,Rn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Xa=new I,nd=new I,id=new qt;class Ai{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Xa.subVectors(n,e).cross(nd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Xa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||id.getNormalMatrix(t),s=this.coplanarPoint(Xa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Mi=new sr,sd=new ft(.5,.5),Pr=new I;class Pl{constructor(t=new Ai,e=new Ai,n=new Ai,s=new Ai,r=new Ai,a=new Ai){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=On,n=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],p=r[7],x=r[8],g=r[9],m=r[10],d=r[11],M=r[12],_=r[13],v=r[14],y=r[15];if(s[0].setComponents(c-a,p-h,d-x,y-M).normalize(),s[1].setComponents(c+a,p+h,d+x,y+M).normalize(),s[2].setComponents(c+o,p+u,d+g,y+_).normalize(),s[3].setComponents(c-o,p-u,d-g,y-_).normalize(),n)s[4].setComponents(l,f,m,v).normalize(),s[5].setComponents(c-l,p-f,d-m,y-v).normalize();else if(s[4].setComponents(c-l,p-f,d-m,y-v).normalize(),e===On)s[5].setComponents(c+l,p+f,d+m,y+v).normalize();else if(e===ra)s[5].setComponents(l,f,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Mi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Mi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Mi)}intersectsSprite(t){Mi.center.set(0,0,0);const e=sd.distanceTo(t.center);return Mi.radius=.7071067811865476+e,Mi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Mi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Pr.x=s.normal.x>0?t.max.x:t.min.x,Pr.y=s.normal.y>0?t.max.y:t.min.y,Pr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Pr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class fa extends qe{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class tu extends qe{constructor(t,e,n=Ui,s,r,a,o=un,l=un,c,h=$s,u=1){if(h!==$s&&h!==Zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:u};super(f,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Al(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class eu extends qe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class la extends pe{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const a=[],o=[],l=[],c=[],h=e/2,u=Math.PI/2*t,f=e,p=2*u+f,x=n*2+r,g=s+1,m=new I,d=new I;for(let M=0;M<=x;M++){let _=0,v=0,y=0,w=0;if(M<=n){const S=M/n,b=S*Math.PI/2;v=-h-t*Math.cos(b),y=t*Math.sin(b),w=-t*Math.cos(b),_=S*u}else if(M<=n+r){const S=(M-n)/r;v=-h+S*e,y=t,w=0,_=u+S*f}else{const S=(M-n-r)/n,b=S*Math.PI/2;v=h+t*Math.sin(b),y=t*Math.cos(b),w=t*Math.sin(b),_=u+f+S*u}const T=Math.max(0,Math.min(1,_/p));let R=0;M===0?R=.5/s:M===x&&(R=-.5/s);for(let S=0;S<=s;S++){const b=S/s,D=b*Math.PI*2,z=Math.sin(D),N=Math.cos(D);d.x=-y*N,d.y=v,d.z=y*z,o.push(d.x,d.y,d.z),m.set(-y*N,w,y*z),m.normalize(),l.push(m.x,m.y,m.z),c.push(b+R,T)}if(M>0){const S=(M-1)*g;for(let b=0;b<s;b++){const D=S+b,z=S+b+1,N=M*g+b,k=M*g+b+1;a.push(D,z,N),a.push(z,k,N)}}}this.setIndex(a),this.setAttribute("position",new Ht(o,3)),this.setAttribute("normal",new Ht(l,3)),this.setAttribute("uv",new Ht(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new la(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class rr extends pe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new I,h=new ft;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const p=n+u/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/t+1)/2,h.y=(a[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ht(a,3)),this.setAttribute("normal",new Ht(o,3)),this.setAttribute("uv",new Ht(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rr(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class we extends pe{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],p=[];let x=0;const g=[],m=n/2;let d=0;M(),a===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Ht(u,3)),this.setAttribute("normal",new Ht(f,3)),this.setAttribute("uv",new Ht(p,2));function M(){const v=new I,y=new I;let w=0;const T=(e-t)/n;for(let R=0;R<=r;R++){const S=[],b=R/r,D=b*(e-t)+t;for(let z=0;z<=s;z++){const N=z/s,k=N*l+o,H=Math.sin(k),W=Math.cos(k);y.x=D*H,y.y=-b*n+m,y.z=D*W,u.push(y.x,y.y,y.z),v.set(H,T,W).normalize(),f.push(v.x,v.y,v.z),p.push(N,1-b),S.push(x++)}g.push(S)}for(let R=0;R<s;R++)for(let S=0;S<r;S++){const b=g[S][R],D=g[S+1][R],z=g[S+1][R+1],N=g[S][R+1];(t>0||S!==0)&&(h.push(b,D,N),w+=3),(e>0||S!==r-1)&&(h.push(D,z,N),w+=3)}c.addGroup(d,w,0),d+=w}function _(v){const y=x,w=new ft,T=new I;let R=0;const S=v===!0?t:e,b=v===!0?1:-1;for(let z=1;z<=s;z++)u.push(0,m*b,0),f.push(0,b,0),p.push(.5,.5),x++;const D=x;for(let z=0;z<=s;z++){const k=z/s*l+o,H=Math.cos(k),W=Math.sin(k);T.x=S*W,T.y=m*b,T.z=S*H,u.push(T.x,T.y,T.z),f.push(0,b,0),w.x=H*.5+.5,w.y=W*.5*b+.5,p.push(w.x,w.y),x++}for(let z=0;z<s;z++){const N=y+z,k=D+z;v===!0?h.push(k,k+1,N):h.push(k+1,k,N),R+=3}c.addGroup(d,R,v===!0?1:2),d+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new we(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ms extends we{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new ms(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class da extends pe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new Ht(r,3)),this.setAttribute("normal",new Ht(r.slice(),3)),this.setAttribute("uv",new Ht(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const _=new I,v=new I,y=new I;for(let w=0;w<e.length;w+=3)p(e[w+0],_),p(e[w+1],v),p(e[w+2],y),l(_,v,y,M)}function l(M,_,v,y){const w=y+1,T=[];for(let R=0;R<=w;R++){T[R]=[];const S=M.clone().lerp(v,R/w),b=_.clone().lerp(v,R/w),D=w-R;for(let z=0;z<=D;z++)z===0&&R===w?T[R][z]=S:T[R][z]=S.clone().lerp(b,z/D)}for(let R=0;R<w;R++)for(let S=0;S<2*(w-R)-1;S++){const b=Math.floor(S/2);S%2===0?(f(T[R][b+1]),f(T[R+1][b]),f(T[R][b])):(f(T[R][b+1]),f(T[R+1][b+1]),f(T[R+1][b]))}}function c(M){const _=new I;for(let v=0;v<r.length;v+=3)_.x=r[v+0],_.y=r[v+1],_.z=r[v+2],_.normalize().multiplyScalar(M),r[v+0]=_.x,r[v+1]=_.y,r[v+2]=_.z}function h(){const M=new I;for(let _=0;_<r.length;_+=3){M.x=r[_+0],M.y=r[_+1],M.z=r[_+2];const v=m(M)/2/Math.PI+.5,y=d(M)/Math.PI+.5;a.push(v,1-y)}x(),u()}function u(){for(let M=0;M<a.length;M+=6){const _=a[M+0],v=a[M+2],y=a[M+4],w=Math.max(_,v,y),T=Math.min(_,v,y);w>.9&&T<.1&&(_<.2&&(a[M+0]+=1),v<.2&&(a[M+2]+=1),y<.2&&(a[M+4]+=1))}}function f(M){r.push(M.x,M.y,M.z)}function p(M,_){const v=M*3;_.x=t[v+0],_.y=t[v+1],_.z=t[v+2]}function x(){const M=new I,_=new I,v=new I,y=new I,w=new ft,T=new ft,R=new ft;for(let S=0,b=0;S<r.length;S+=9,b+=6){M.set(r[S+0],r[S+1],r[S+2]),_.set(r[S+3],r[S+4],r[S+5]),v.set(r[S+6],r[S+7],r[S+8]),w.set(a[b+0],a[b+1]),T.set(a[b+2],a[b+3]),R.set(a[b+4],a[b+5]),y.copy(M).add(_).add(v).divideScalar(3);const D=m(y);g(w,b+0,M,D),g(T,b+2,_,D),g(R,b+4,v,D)}}function g(M,_,v,y){y<0&&M.x===1&&(a[_]=M.x-1),v.x===0&&v.z===0&&(a[_]=y/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function d(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new da(t.vertices,t.indices,t.radius,t.details)}}class ei{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const h=n[s],f=n[s+1]-h,p=(a-h)/f;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new ft:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new I,s=[],r=[],a=[],o=new I,l=new de;for(let p=0;p<=t;p++){const x=p/t;s[p]=this.getTangentAt(x,new I)}r[0]=new I,a[0]=new I;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();const x=Math.acos(Zt(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,x))}a[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(Zt(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let x=1;x<=t;x++)r[x].applyMatrix4(l.makeRotationAxis(s[x],p*x)),a[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class nu extends ei{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new ft){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*h-p*u+this.aX,c=f*u+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class rd extends nu{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Dl(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,p*=h,s(a,o,f,p)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const Dr=new I,qa=new Dl,Ya=new Dl,Ka=new Dl;class iu extends ei{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new I){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Dr.subVectors(s[0],s[1]).add(s[0]),c=Dr);const u=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Dr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Dr),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let x=Math.pow(c.distanceToSquared(u),p),g=Math.pow(u.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(h),p);g<1e-4&&(g=1),x<1e-4&&(x=g),m<1e-4&&(m=g),qa.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,x,g,m),Ya.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,x,g,m),Ka.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,x,g,m)}else this.curveType==="catmullrom"&&(qa.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Ya.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Ka.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(qa.calc(l),Ya.calc(l),Ka.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Tc(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function ad(i,t){const e=1-i;return e*e*t}function od(i,t){return 2*(1-i)*i*t}function ld(i,t){return i*i*t}function Ws(i,t,e,n){return ad(i,t)+od(i,e)+ld(i,n)}function cd(i,t){const e=1-i;return e*e*e*t}function hd(i,t){const e=1-i;return 3*e*e*i*t}function ud(i,t){return 3*(1-i)*i*i*t}function fd(i,t){return i*i*i*t}function Xs(i,t,e,n,s){return cd(i,t)+hd(i,e)+ud(i,n)+fd(i,s)}class dd extends ei{constructor(t=new ft,e=new ft,n=new ft,s=new ft){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ft){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Xs(t,s.x,r.x,a.x,o.x),Xs(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class pd extends ei{constructor(t=new I,e=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new I){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Xs(t,s.x,r.x,a.x,o.x),Xs(t,s.y,r.y,a.y,o.y),Xs(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class md extends ei{constructor(t=new ft,e=new ft){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ft){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ft){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class gd extends ei{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class xd extends ei{constructor(t=new ft,e=new ft,n=new ft){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ft){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ws(t,s.x,r.x,a.x),Ws(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class su extends ei{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ws(t,s.x,r.x,a.x),Ws(t,s.y,r.y,a.y),Ws(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class vd extends ei{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ft){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(Tc(o,l.x,c.x,h.x,u.x),Tc(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new ft().fromArray(s))}return this}}var _d=Object.freeze({__proto__:null,ArcCurve:rd,CatmullRomCurve3:iu,CubicBezierCurve:dd,CubicBezierCurve3:pd,EllipseCurve:nu,LineCurve:md,LineCurve3:gd,QuadraticBezierCurve:xd,QuadraticBezierCurve3:su,SplineCurve:vd});class Il extends da{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Il(t.radius,t.detail)}}class Ll extends da{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ll(t.radius,t.detail)}}class dn extends pe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,f=e/l,p=[],x=[],g=[],m=[];for(let d=0;d<h;d++){const M=d*f-a;for(let _=0;_<c;_++){const v=_*u-r;x.push(v,-M,0),g.push(0,0,1),m.push(_/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let M=0;M<o;M++){const _=M+c*d,v=M+c*(d+1),y=M+1+c*(d+1),w=M+1+c*d;p.push(_,v,w),p.push(v,y,w)}this.setIndex(p),this.setAttribute("position",new Ht(x,3)),this.setAttribute("normal",new Ht(g,3)),this.setAttribute("uv",new Ht(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dn(t.width,t.height,t.widthSegments,t.heightSegments)}}class pa extends pe{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],h=[];let u=t;const f=(e-t)/s,p=new I,x=new ft;for(let g=0;g<=s;g++){for(let m=0;m<=n;m++){const d=r+m/n*a;p.x=u*Math.cos(d),p.y=u*Math.sin(d),l.push(p.x,p.y,p.z),c.push(0,0,1),x.x=(p.x/e+1)/2,x.y=(p.y/e+1)/2,h.push(x.x,x.y)}u+=f}for(let g=0;g<s;g++){const m=g*(n+1);for(let d=0;d<n;d++){const M=d+m,_=M,v=M+n+1,y=M+n+2,w=M+1;o.push(_,v,w),o.push(v,y,w)}}this.setIndex(o),this.setAttribute("position",new Ht(l,3)),this.setAttribute("normal",new Ht(c,3)),this.setAttribute("uv",new Ht(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pa(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class sn extends pe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new I,f=new I,p=[],x=[],g=[],m=[];for(let d=0;d<=n;d++){const M=[],_=d/n;let v=0;d===0&&a===0?v=.5/e:d===n&&l===Math.PI&&(v=-.5/e);for(let y=0;y<=e;y++){const w=y/e;u.x=-t*Math.cos(s+w*r)*Math.sin(a+_*o),u.y=t*Math.cos(a+_*o),u.z=t*Math.sin(s+w*r)*Math.sin(a+_*o),x.push(u.x,u.y,u.z),f.copy(u).normalize(),g.push(f.x,f.y,f.z),m.push(w+v,1-_),M.push(c++)}h.push(M)}for(let d=0;d<n;d++)for(let M=0;M<e;M++){const _=h[d][M+1],v=h[d][M],y=h[d+1][M],w=h[d+1][M+1];(d!==0||a>0)&&p.push(_,v,w),(d!==n-1||l<Math.PI)&&p.push(v,y,w)}this.setIndex(p),this.setAttribute("position",new Ht(x,3)),this.setAttribute("normal",new Ht(g,3)),this.setAttribute("uv",new Ht(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Qs extends pe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],l=[],c=[],h=new I,u=new I,f=new I;for(let p=0;p<=n;p++)for(let x=0;x<=s;x++){const g=x/s*r,m=p/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(g),u.y=(t+e*Math.cos(m))*Math.sin(g),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(g),h.y=t*Math.sin(g),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(x/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let x=1;x<=s;x++){const g=(s+1)*p+x-1,m=(s+1)*(p-1)+x-1,d=(s+1)*(p-1)+x,M=(s+1)*p+x;a.push(g,m,M),a.push(m,d,M)}this.setIndex(a),this.setAttribute("position",new Ht(o,3)),this.setAttribute("normal",new Ht(l,3)),this.setAttribute("uv",new Ht(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qs(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class zl extends pe{constructor(t=new su(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new I,l=new I,c=new ft;let h=new I;const u=[],f=[],p=[],x=[];g(),this.setIndex(x),this.setAttribute("position",new Ht(u,3)),this.setAttribute("normal",new Ht(f,3)),this.setAttribute("uv",new Ht(p,2));function g(){for(let _=0;_<e;_++)m(_);m(r===!1?e:0),M(),d()}function m(_){h=t.getPointAt(_/e,h);const v=a.normals[_],y=a.binormals[_];for(let w=0;w<=s;w++){const T=w/s*Math.PI*2,R=Math.sin(T),S=-Math.cos(T);l.x=S*v.x+R*y.x,l.y=S*v.y+R*y.y,l.z=S*v.z+R*y.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function d(){for(let _=1;_<=e;_++)for(let v=1;v<=s;v++){const y=(s+1)*(_-1)+(v-1),w=(s+1)*_+(v-1),T=(s+1)*_+v,R=(s+1)*(_-1)+v;x.push(y,w,R),x.push(w,T,R)}}function M(){for(let _=0;_<=e;_++)for(let v=0;v<=s;v++)c.x=_/e,c.y=v/s,p.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new zl(new _d[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Md extends Pe{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class He extends Oi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tl,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class An extends Oi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tl,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.combine=vl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class yd extends Oi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Sd extends Oi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Ul extends Le{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new rt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class bd extends Ul{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.groundColor=new rt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const $a=new de,Ac=new I,Rc=new I;class wd{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ft(512,512),this.mapType=kn,this.map=null,this.mapPass=null,this.matrix=new de,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pl,this._frameExtents=new ft(1,1),this._viewportCount=1,this._viewports=[new Ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Ac.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ac),Rc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Rc),e.updateMatrixWorld(),$a.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix($a,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply($a)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Nl extends Zh{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Ed extends wd{constructor(){super(new Nl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Td extends Ul{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.target=new Le,this.shadow=new Ed}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Ad extends Ul{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Rd extends pe{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class Cd extends Mn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Pd{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Cc(i,t,e,n){const s=Dd(n);switch(e){case Bh:return i*t;case ua:return i*t/s.components*s.byteLength;case bl:return i*t/s.components*s.byteLength;case Hh:return i*t*2/s.components*s.byteLength;case wl:return i*t*2/s.components*s.byteLength;case kh:return i*t*3/s.components*s.byteLength;case Sn:return i*t*4/s.components*s.byteLength;case El:return i*t*4/s.components*s.byteLength;case Vr:case Wr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Xr:case qr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Co:case Do:return Math.max(i,16)*Math.max(t,8)/4;case Ro:case Po:return Math.max(i,8)*Math.max(t,8)/2;case Io:case Lo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case zo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Uo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case No:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Fo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Oo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Bo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ko:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ho:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Go:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Vo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Wo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Xo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case qo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Yo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ko:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case $o:case Zo:case jo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Jo:case Qo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case tl:case el:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Dd(i){switch(i){case kn:case Uh:return{byteLength:1,components:1};case Ys:case Nh:case Jn:return{byteLength:2,components:1};case yl:case Sl:return{byteLength:2,components:4};case Ui:case Ml:case Rn:return{byteLength:4,components:1};case Fh:case Oh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xl);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ru(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Id(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,x)=>p.start-x.start);let f=0;for(let p=1;p<u.length;p++){const x=u[f],g=u[p];g.start<=x.start+x.count+1?x.count=Math.max(x.count,g.start+g.count-x.start):(++f,u[f]=g)}u.length=f+1;for(let p=0,x=u.length;p<x;p++){const g=u[p];i.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Ld=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zd=`#ifdef USE_ALPHAHASH
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
#endif`,Ud=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Nd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Od=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bd=`#ifdef USE_AOMAP
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
#endif`,kd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hd=`#ifdef USE_BATCHING
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
#endif`,Gd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Vd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qd=`#ifdef USE_IRIDESCENCE
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
#endif`,Yd=`#ifdef USE_BUMPMAP
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
#endif`,Kd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$d=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ep=`#if defined( USE_COLOR_ALPHA )
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
#endif`,np=`#define PI 3.141592653589793
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
} // validated`,ip=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,sp=`vec3 transformedNormal = objectNormal;
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
#endif`,rp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ap=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,op=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cp="gl_FragColor = linearToOutputTexel( gl_FragColor );",hp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,up=`#ifdef USE_ENVMAP
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
#endif`,fp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,dp=`#ifdef USE_ENVMAP
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
#endif`,pp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mp=`#ifdef USE_ENVMAP
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
#endif`,gp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_p=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Mp=`#ifdef USE_GRADIENTMAP
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
}`,yp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wp=`uniform bool receiveShadow;
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
#endif`,Ep=`#ifdef USE_ENVMAP
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
#endif`,Tp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ap=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pp=`PhysicalMaterial material;
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
#endif`,Dp=`struct PhysicalMaterial {
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
}`,Ip=`
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
#endif`,Lp=`#if defined( RE_IndirectDiffuse )
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
#endif`,zp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Up=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Np=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Op=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Bp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Gp=`#if defined( USE_POINTS_UV )
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
#endif`,Vp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kp=`#ifdef USE_MORPHTARGETS
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
#endif`,$p=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,jp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Jp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,em=`#ifdef USE_NORMALMAP
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
#endif`,nm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,im=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,am=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,om=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,lm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,um=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
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
#endif`,mm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,xm=`float getShadowMask() {
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
}`,vm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_m=`#ifdef USE_SKINNING
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
#endif`,Mm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ym=`#ifdef USE_SKINNING
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
#endif`,Sm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Em=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Tm=`#ifdef USE_TRANSMISSION
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
#endif`,Am=`#ifdef USE_TRANSMISSION
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
#endif`,Rm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Im=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Lm=`uniform sampler2D t2D;
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
}`,zm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Um=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Nm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Om=`#include <common>
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
}`,Bm=`#if DEPTH_PACKING == 3200
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
}`,km=`#define DISTANCE
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
}`,Hm=`#define DISTANCE
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
}`,Gm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wm=`uniform float scale;
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
}`,Xm=`uniform vec3 diffuse;
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
}`,qm=`#include <common>
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
}`,Ym=`uniform vec3 diffuse;
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
}`,Km=`#define LAMBERT
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
}`,$m=`#define LAMBERT
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
}`,Zm=`#define MATCAP
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
}`,jm=`#define MATCAP
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
}`,Jm=`#define NORMAL
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
}`,Qm=`#define NORMAL
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
}`,t0=`#define PHONG
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
}`,e0=`#define PHONG
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
}`,n0=`#define STANDARD
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
}`,i0=`#define STANDARD
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
}`,s0=`#define TOON
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
}`,r0=`#define TOON
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
}`,a0=`uniform float size;
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
}`,o0=`uniform vec3 diffuse;
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
}`,l0=`#include <common>
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
}`,c0=`uniform vec3 color;
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
}`,h0=`uniform float rotation;
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
}`,u0=`uniform vec3 diffuse;
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
}`,Yt={alphahash_fragment:Ld,alphahash_pars_fragment:zd,alphamap_fragment:Ud,alphamap_pars_fragment:Nd,alphatest_fragment:Fd,alphatest_pars_fragment:Od,aomap_fragment:Bd,aomap_pars_fragment:kd,batching_pars_vertex:Hd,batching_vertex:Gd,begin_vertex:Vd,beginnormal_vertex:Wd,bsdfs:Xd,iridescence_fragment:qd,bumpmap_pars_fragment:Yd,clipping_planes_fragment:Kd,clipping_planes_pars_fragment:$d,clipping_planes_pars_vertex:Zd,clipping_planes_vertex:jd,color_fragment:Jd,color_pars_fragment:Qd,color_pars_vertex:tp,color_vertex:ep,common:np,cube_uv_reflection_fragment:ip,defaultnormal_vertex:sp,displacementmap_pars_vertex:rp,displacementmap_vertex:ap,emissivemap_fragment:op,emissivemap_pars_fragment:lp,colorspace_fragment:cp,colorspace_pars_fragment:hp,envmap_fragment:up,envmap_common_pars_fragment:fp,envmap_pars_fragment:dp,envmap_pars_vertex:pp,envmap_physical_pars_fragment:Ep,envmap_vertex:mp,fog_vertex:gp,fog_pars_vertex:xp,fog_fragment:vp,fog_pars_fragment:_p,gradientmap_pars_fragment:Mp,lightmap_pars_fragment:yp,lights_lambert_fragment:Sp,lights_lambert_pars_fragment:bp,lights_pars_begin:wp,lights_toon_fragment:Tp,lights_toon_pars_fragment:Ap,lights_phong_fragment:Rp,lights_phong_pars_fragment:Cp,lights_physical_fragment:Pp,lights_physical_pars_fragment:Dp,lights_fragment_begin:Ip,lights_fragment_maps:Lp,lights_fragment_end:zp,logdepthbuf_fragment:Up,logdepthbuf_pars_fragment:Np,logdepthbuf_pars_vertex:Fp,logdepthbuf_vertex:Op,map_fragment:Bp,map_pars_fragment:kp,map_particle_fragment:Hp,map_particle_pars_fragment:Gp,metalnessmap_fragment:Vp,metalnessmap_pars_fragment:Wp,morphinstance_vertex:Xp,morphcolor_vertex:qp,morphnormal_vertex:Yp,morphtarget_pars_vertex:Kp,morphtarget_vertex:$p,normal_fragment_begin:Zp,normal_fragment_maps:jp,normal_pars_fragment:Jp,normal_pars_vertex:Qp,normal_vertex:tm,normalmap_pars_fragment:em,clearcoat_normal_fragment_begin:nm,clearcoat_normal_fragment_maps:im,clearcoat_pars_fragment:sm,iridescence_pars_fragment:rm,opaque_fragment:am,packing:om,premultiplied_alpha_fragment:lm,project_vertex:cm,dithering_fragment:hm,dithering_pars_fragment:um,roughnessmap_fragment:fm,roughnessmap_pars_fragment:dm,shadowmap_pars_fragment:pm,shadowmap_pars_vertex:mm,shadowmap_vertex:gm,shadowmask_pars_fragment:xm,skinbase_vertex:vm,skinning_pars_vertex:_m,skinning_vertex:Mm,skinnormal_vertex:ym,specularmap_fragment:Sm,specularmap_pars_fragment:bm,tonemapping_fragment:wm,tonemapping_pars_fragment:Em,transmission_fragment:Tm,transmission_pars_fragment:Am,uv_pars_fragment:Rm,uv_pars_vertex:Cm,uv_vertex:Pm,worldpos_vertex:Dm,background_vert:Im,background_frag:Lm,backgroundCube_vert:zm,backgroundCube_frag:Um,cube_vert:Nm,cube_frag:Fm,depth_vert:Om,depth_frag:Bm,distanceRGBA_vert:km,distanceRGBA_frag:Hm,equirect_vert:Gm,equirect_frag:Vm,linedashed_vert:Wm,linedashed_frag:Xm,meshbasic_vert:qm,meshbasic_frag:Ym,meshlambert_vert:Km,meshlambert_frag:$m,meshmatcap_vert:Zm,meshmatcap_frag:jm,meshnormal_vert:Jm,meshnormal_frag:Qm,meshphong_vert:t0,meshphong_frag:e0,meshphysical_vert:n0,meshphysical_frag:i0,meshtoon_vert:s0,meshtoon_frag:r0,points_vert:a0,points_frag:o0,shadow_vert:l0,shadow_frag:c0,sprite_vert:h0,sprite_frag:u0},ut={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},Un={basic:{uniforms:Ze([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:Ze([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new rt(0)}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:Ze([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:Ze([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:Ze([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new rt(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:Ze([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:Ze([ut.points,ut.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:Ze([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:Ze([ut.common,ut.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:Ze([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:Ze([ut.sprite,ut.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distanceRGBA:{uniforms:Ze([ut.common,ut.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distanceRGBA_vert,fragmentShader:Yt.distanceRGBA_frag},shadow:{uniforms:Ze([ut.lights,ut.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};Un.physical={uniforms:Ze([Un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};const Ir={r:0,b:0,g:0},yi=new fn,f0=new de;function d0(i,t,e,n,s,r,a){const o=new rt(0);let l=r===!0?0:1,c,h,u=null,f=0,p=null;function x(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?e:t).get(v)),v}function g(_){let v=!1;const y=x(_);y===null?d(o,l):y&&y.isColor&&(d(y,1),v=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(_,v){const y=x(v);y&&(y.isCubeTexture||y.mapping===ha)?(h===void 0&&(h=new tt(new te(1,1,1),new Pe({name:"BackgroundCubeMaterial",uniforms:ys(Un.backgroundCube.uniforms),vertexShader:Un.backgroundCube.vertexShader,fragmentShader:Un.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),yi.copy(v.backgroundRotation),yi.x*=-1,yi.y*=-1,yi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(yi.y*=-1,yi.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(f0.makeRotationFromEuler(yi)),h.material.toneMapped=ie.getTransfer(y.colorSpace)!==ce,(u!==y||f!==y.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=y,f=y.version,p=i.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new tt(new dn(2,2),new Pe({name:"BackgroundMaterial",uniforms:ys(Un.background.uniforms),vertexShader:Un.background.vertexShader,fragmentShader:Un.background.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=ie.getTransfer(y.colorSpace)!==ce,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,f=y.version,p=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function d(_,v){_.getRGB(Ir,$h(i)),n.buffers.color.setClear(Ir.r,Ir.g,Ir.b,v,a)}function M(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,v=1){o.set(_),l=v,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,d(o,l)},render:g,addToRenderList:m,dispose:M}}function p0(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(b,D,z,N,k){let H=!1;const W=u(N,z,D);r!==W&&(r=W,c(r.object)),H=p(b,N,z,k),H&&x(b,N,z,k),k!==null&&t.update(k,i.ELEMENT_ARRAY_BUFFER),(H||a)&&(a=!1,v(b,D,z,N),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return i.createVertexArray()}function c(b){return i.bindVertexArray(b)}function h(b){return i.deleteVertexArray(b)}function u(b,D,z){const N=z.wireframe===!0;let k=n[b.id];k===void 0&&(k={},n[b.id]=k);let H=k[D.id];H===void 0&&(H={},k[D.id]=H);let W=H[N];return W===void 0&&(W=f(l()),H[N]=W),W}function f(b){const D=[],z=[],N=[];for(let k=0;k<e;k++)D[k]=0,z[k]=0,N[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:z,attributeDivisors:N,object:b,attributes:{},index:null}}function p(b,D,z,N){const k=r.attributes,H=D.attributes;let W=0;const j=z.getAttributes();for(const X in j)if(j[X].location>=0){const ht=k[X];let vt=H[X];if(vt===void 0&&(X==="instanceMatrix"&&b.instanceMatrix&&(vt=b.instanceMatrix),X==="instanceColor"&&b.instanceColor&&(vt=b.instanceColor)),ht===void 0||ht.attribute!==vt||vt&&ht.data!==vt.data)return!0;W++}return r.attributesNum!==W||r.index!==N}function x(b,D,z,N){const k={},H=D.attributes;let W=0;const j=z.getAttributes();for(const X in j)if(j[X].location>=0){let ht=H[X];ht===void 0&&(X==="instanceMatrix"&&b.instanceMatrix&&(ht=b.instanceMatrix),X==="instanceColor"&&b.instanceColor&&(ht=b.instanceColor));const vt={};vt.attribute=ht,ht&&ht.data&&(vt.data=ht.data),k[X]=vt,W++}r.attributes=k,r.attributesNum=W,r.index=N}function g(){const b=r.newAttributes;for(let D=0,z=b.length;D<z;D++)b[D]=0}function m(b){d(b,0)}function d(b,D){const z=r.newAttributes,N=r.enabledAttributes,k=r.attributeDivisors;z[b]=1,N[b]===0&&(i.enableVertexAttribArray(b),N[b]=1),k[b]!==D&&(i.vertexAttribDivisor(b,D),k[b]=D)}function M(){const b=r.newAttributes,D=r.enabledAttributes;for(let z=0,N=D.length;z<N;z++)D[z]!==b[z]&&(i.disableVertexAttribArray(z),D[z]=0)}function _(b,D,z,N,k,H,W){W===!0?i.vertexAttribIPointer(b,D,z,k,H):i.vertexAttribPointer(b,D,z,N,k,H)}function v(b,D,z,N){g();const k=N.attributes,H=z.getAttributes(),W=D.defaultAttributeValues;for(const j in H){const X=H[j];if(X.location>=0){let nt=k[j];if(nt===void 0&&(j==="instanceMatrix"&&b.instanceMatrix&&(nt=b.instanceMatrix),j==="instanceColor"&&b.instanceColor&&(nt=b.instanceColor)),nt!==void 0){const ht=nt.normalized,vt=nt.itemSize,Gt=t.get(nt);if(Gt===void 0)continue;const se=Gt.buffer,re=Gt.type,ne=Gt.bytesPerElement,$=re===i.INT||re===i.UNSIGNED_INT||nt.gpuType===Ml;if(nt.isInterleavedBufferAttribute){const Q=nt.data,gt=Q.stride,It=nt.offset;if(Q.isInstancedInterleavedBuffer){for(let Et=0;Et<X.locationSize;Et++)d(X.location+Et,Q.meshPerAttribute);b.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Et=0;Et<X.locationSize;Et++)m(X.location+Et);i.bindBuffer(i.ARRAY_BUFFER,se);for(let Et=0;Et<X.locationSize;Et++)_(X.location+Et,vt/X.locationSize,re,ht,gt*ne,(It+vt/X.locationSize*Et)*ne,$)}else{if(nt.isInstancedBufferAttribute){for(let Q=0;Q<X.locationSize;Q++)d(X.location+Q,nt.meshPerAttribute);b.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let Q=0;Q<X.locationSize;Q++)m(X.location+Q);i.bindBuffer(i.ARRAY_BUFFER,se);for(let Q=0;Q<X.locationSize;Q++)_(X.location+Q,vt/X.locationSize,re,ht,vt*ne,vt/X.locationSize*Q*ne,$)}}else if(W!==void 0){const ht=W[j];if(ht!==void 0)switch(ht.length){case 2:i.vertexAttrib2fv(X.location,ht);break;case 3:i.vertexAttrib3fv(X.location,ht);break;case 4:i.vertexAttrib4fv(X.location,ht);break;default:i.vertexAttrib1fv(X.location,ht)}}}}M()}function y(){R();for(const b in n){const D=n[b];for(const z in D){const N=D[z];for(const k in N)h(N[k].object),delete N[k];delete D[z]}delete n[b]}}function w(b){if(n[b.id]===void 0)return;const D=n[b.id];for(const z in D){const N=D[z];for(const k in N)h(N[k].object),delete N[k];delete D[z]}delete n[b.id]}function T(b){for(const D in n){const z=n[D];if(z[b.id]===void 0)continue;const N=z[b.id];for(const k in N)h(N[k].object),delete N[k];delete z[b.id]}}function R(){S(),a=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:R,resetDefaultState:S,dispose:y,releaseStatesOfGeometry:w,releaseStatesOfProgram:T,initAttributes:g,enableAttribute:m,disableUnusedAttributes:M}}function m0(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let x=0;x<u;x++)p+=h[x];e.update(p,n,1)}function l(c,h,u,f){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<c.length;x++)a(c[x],h[x],f[x]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let x=0;for(let g=0;g<u;g++)x+=h[g]*f[g];e.update(x,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function g0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(T){return!(T!==Sn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const R=T===Jn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==kn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Rn&&!R)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=x>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:x,maxTextureSize:g,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:M,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:y,maxSamples:w}}function x0(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Ai,o=new qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const p=u.length!==0||f||n!==0||s;return s=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,p){const x=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,d=i.get(u);if(!s||x===null||x.length===0||r&&!m)r?h(null):c();else{const M=r?0:n,_=M*4;let v=d.clippingState||null;l.value=v,v=h(x,f,_,p);for(let y=0;y!==_;++y)v[y]=e[y];d.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,p,x){const g=u!==null?u.length:0;let m=null;if(g!==0){if(m=l.value,x!==!0||m===null){const d=p+g*4,M=f.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<d)&&(m=new Float32Array(d));for(let _=0,v=p;_!==g;++_,v+=4)a.copy(u[_]).applyMatrix4(M,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function v0(i){let t=new WeakMap;function e(a,o){return o===Eo?a.mapping=vs:o===To&&(a.mapping=_s),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Eo||o===To)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Zf(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const fs=4,Pc=[.125,.215,.35,.446,.526,.582],Li=20,Za=new Nl,Dc=new rt;let ja=null,Ja=0,Qa=0,to=!1;const Ri=(1+Math.sqrt(5))/2,ss=1/Ri,Ic=[new I(-Ri,ss,0),new I(Ri,ss,0),new I(-ss,0,Ri),new I(ss,0,Ri),new I(0,Ri,-ss),new I(0,Ri,ss),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],_0=new I;class Lc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){const{size:a=256,position:o=_0}=r;ja=this._renderer.getRenderTarget(),Ja=this._renderer.getActiveCubeFace(),Qa=this._renderer.getActiveMipmapLevel(),to=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ja,Ja,Qa),this._renderer.xr.enabled=to,t.scissorTest=!1,Lr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===vs||t.mapping===_s?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ja=this._renderer.getRenderTarget(),Ja=this._renderer.getActiveCubeFace(),Qa=this._renderer.getActiveMipmapLevel(),to=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:an,minFilter:an,generateMipmaps:!1,type:Jn,format:Sn,colorSpace:Ms,depthBuffer:!1},s=zc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=M0(r)),this._blurMaterial=y0(r,t,e)}return s}_compileMaterial(t){const e=new tt(this._lodPlanes[0],t);this._renderer.compile(e,Za)}_sceneToCubeUV(t,e,n,s,r){const l=new Mn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,p=u.toneMapping;u.getClearColor(Dc),u.toneMapping=fi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));const g=new Qe({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),m=new tt(new te,g);let d=!1;const M=t.background;M?M.isColor&&(g.color.copy(M),t.background=null,d=!0):(g.color.copy(Dc),d=!0);for(let _=0;_<6;_++){const v=_%3;v===0?(l.up.set(0,c[_],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[_],r.y,r.z)):v===1?(l.up.set(0,0,c[_]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[_],r.z)):(l.up.set(0,c[_],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[_]));const y=this._cubeSize;Lr(s,v*y,_>2?y:0,y,y),u.setRenderTarget(s),d&&u.render(m,l),u.render(t,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=p,u.autoClear=f,t.background=M}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===vs||t.mapping===_s;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Uc());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new tt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Lr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Za)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ic[(s-r-1)%Ic.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new tt(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Li-1),g=r/x,m=isFinite(r)?1+Math.floor(h*g):Li;m>Li&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Li}`);const d=[];let M=0;for(let T=0;T<Li;++T){const R=T/g,S=Math.exp(-R*R/2);d.push(S),T===0?M+=S:T<m&&(M+=2*S)}for(let T=0;T<d.length;T++)d[T]=d[T]/M;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:_}=this;f.dTheta.value=x,f.mipInt.value=_-n;const v=this._sizeLods[s],y=3*v*(s>_-fs?s-_+fs:0),w=4*(this._cubeSize-v);Lr(e,y,w,3*v,2*v),l.setRenderTarget(e),l.render(u,Za)}}function M0(i){const t=[],e=[],n=[];let s=i;const r=i-fs+1+Pc.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-fs?l=Pc[a-i+fs-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,x=6,g=3,m=2,d=1,M=new Float32Array(g*x*p),_=new Float32Array(m*x*p),v=new Float32Array(d*x*p);for(let w=0;w<p;w++){const T=w%3*2/3-1,R=w>2?0:-1,S=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];M.set(S,g*x*w),_.set(f,m*x*w);const b=[w,w,w,w,w,w];v.set(b,d*x*w)}const y=new pe;y.setAttribute("position",new Te(M,g)),y.setAttribute("uv",new Te(_,m)),y.setAttribute("faceIndex",new Te(v,d)),t.push(y),s>fs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function zc(i,t,e){const n=new Cn(i,t,e);return n.texture.mapping=ha,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Lr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function y0(i,t,e){const n=new Float32Array(Li),s=new I(0,1,0);return new Pe({name:"SphericalGaussianBlur",defines:{n:Li,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Fl(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Uc(){return new Pe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fl(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Nc(){return new Pe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Fl(){return`

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
	`}function S0(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Eo||l===To,h=l===vs||l===_s;if(c||h){let u=t.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new Lc(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new Lc(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function b0(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&js("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function w0(i,t,e,n){const s={},r=new WeakMap;function a(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const x in f.attributes)t.remove(f.attributes[x]);f.removeEventListener("dispose",a),delete s[f.id];const p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const p in f)t.update(f[p],i.ARRAY_BUFFER)}function c(u){const f=[],p=u.index,x=u.attributes.position;let g=0;if(p!==null){const M=p.array;g=p.version;for(let _=0,v=M.length;_<v;_+=3){const y=M[_+0],w=M[_+1],T=M[_+2];f.push(y,w,w,T,T,y)}}else if(x!==void 0){const M=x.array;g=x.version;for(let _=0,v=M.length/3-1;_<v;_+=3){const y=_+0,w=_+1,T=_+2;f.push(y,w,w,T,T,y)}}else return;const m=new(Vh(f)?Kh:Yh)(f,1);m.version=g;const d=r.get(u);d&&t.remove(d),r.set(u,m)}function h(u){const f=r.get(u);if(f){const p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function E0(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,p){i.drawElements(n,p,r,f*a),e.update(p,n,1)}function c(f,p,x){x!==0&&(i.drawElementsInstanced(n,p,r,f*a,x),e.update(p,n,x))}function h(f,p,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,x);let m=0;for(let d=0;d<x;d++)m+=p[d];e.update(m,n,1)}function u(f,p,x,g){if(x===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/a,p[d],g[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,g,0,x);let d=0;for(let M=0;M<x;M++)d+=p[M]*g[M];e.update(d,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function T0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function A0(i,t,e){const n=new WeakMap,s=new Ce;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let b=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",b)};var p=b;f!==void 0&&f.texture.dispose();const x=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],_=o.morphAttributes.color||[];let v=0;x===!0&&(v=1),g===!0&&(v=2),m===!0&&(v=3);let y=o.attributes.position.count*v,w=1;y>t.maxTextureSize&&(w=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);const T=new Float32Array(y*w*4*u),R=new Wh(T,y,w,u);R.type=Rn,R.needsUpdate=!0;const S=v*4;for(let D=0;D<u;D++){const z=d[D],N=M[D],k=_[D],H=y*w*4*D;for(let W=0;W<z.count;W++){const j=W*S;x===!0&&(s.fromBufferAttribute(z,W),T[H+j+0]=s.x,T[H+j+1]=s.y,T[H+j+2]=s.z,T[H+j+3]=0),g===!0&&(s.fromBufferAttribute(N,W),T[H+j+4]=s.x,T[H+j+5]=s.y,T[H+j+6]=s.z,T[H+j+7]=0),m===!0&&(s.fromBufferAttribute(k,W),T[H+j+8]=s.x,T[H+j+9]=s.y,T[H+j+10]=s.z,T[H+j+11]=k.itemSize===4?s.w:1)}}f={count:u,texture:R,size:new ft(y,w)},n.set(o,f),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let x=0;for(let m=0;m<c.length;m++)x+=c[m];const g=o.morphTargetsRelative?1:1-x;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function R0(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}const au=new qe,Fc=new tu(1,1),ou=new Wh,lu=new Lf,cu=new jh,Oc=[],Bc=[],kc=new Float32Array(16),Hc=new Float32Array(9),Gc=new Float32Array(4);function As(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Oc[s];if(r===void 0&&(r=new Float32Array(s),Oc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Oe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Be(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ma(i,t){let e=Bc[t];e===void 0&&(e=new Int32Array(t),Bc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function C0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function P0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2fv(this.addr,t),Be(e,t)}}function D0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Oe(e,t))return;i.uniform3fv(this.addr,t),Be(e,t)}}function I0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4fv(this.addr,t),Be(e,t)}}function L0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,n))return;Gc.set(n),i.uniformMatrix2fv(this.addr,!1,Gc),Be(e,n)}}function z0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,n))return;Hc.set(n),i.uniformMatrix3fv(this.addr,!1,Hc),Be(e,n)}}function U0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,n))return;kc.set(n),i.uniformMatrix4fv(this.addr,!1,kc),Be(e,n)}}function N0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function F0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2iv(this.addr,t),Be(e,t)}}function O0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;i.uniform3iv(this.addr,t),Be(e,t)}}function B0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4iv(this.addr,t),Be(e,t)}}function k0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function H0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2uiv(this.addr,t),Be(e,t)}}function G0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;i.uniform3uiv(this.addr,t),Be(e,t)}}function V0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4uiv(this.addr,t),Be(e,t)}}function W0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Fc.compareFunction=Gh,r=Fc):r=au,e.setTexture2D(t||r,s)}function X0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||lu,s)}function q0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||cu,s)}function Y0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||ou,s)}function K0(i){switch(i){case 5126:return C0;case 35664:return P0;case 35665:return D0;case 35666:return I0;case 35674:return L0;case 35675:return z0;case 35676:return U0;case 5124:case 35670:return N0;case 35667:case 35671:return F0;case 35668:case 35672:return O0;case 35669:case 35673:return B0;case 5125:return k0;case 36294:return H0;case 36295:return G0;case 36296:return V0;case 35678:case 36198:case 36298:case 36306:case 35682:return W0;case 35679:case 36299:case 36307:return X0;case 35680:case 36300:case 36308:case 36293:return q0;case 36289:case 36303:case 36311:case 36292:return Y0}}function $0(i,t){i.uniform1fv(this.addr,t)}function Z0(i,t){const e=As(t,this.size,2);i.uniform2fv(this.addr,e)}function j0(i,t){const e=As(t,this.size,3);i.uniform3fv(this.addr,e)}function J0(i,t){const e=As(t,this.size,4);i.uniform4fv(this.addr,e)}function Q0(i,t){const e=As(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function tg(i,t){const e=As(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function eg(i,t){const e=As(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function ng(i,t){i.uniform1iv(this.addr,t)}function ig(i,t){i.uniform2iv(this.addr,t)}function sg(i,t){i.uniform3iv(this.addr,t)}function rg(i,t){i.uniform4iv(this.addr,t)}function ag(i,t){i.uniform1uiv(this.addr,t)}function og(i,t){i.uniform2uiv(this.addr,t)}function lg(i,t){i.uniform3uiv(this.addr,t)}function cg(i,t){i.uniform4uiv(this.addr,t)}function hg(i,t,e){const n=this.cache,s=t.length,r=ma(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||au,r[a])}function ug(i,t,e){const n=this.cache,s=t.length,r=ma(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||lu,r[a])}function fg(i,t,e){const n=this.cache,s=t.length,r=ma(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||cu,r[a])}function dg(i,t,e){const n=this.cache,s=t.length,r=ma(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||ou,r[a])}function pg(i){switch(i){case 5126:return $0;case 35664:return Z0;case 35665:return j0;case 35666:return J0;case 35674:return Q0;case 35675:return tg;case 35676:return eg;case 5124:case 35670:return ng;case 35667:case 35671:return ig;case 35668:case 35672:return sg;case 35669:case 35673:return rg;case 5125:return ag;case 36294:return og;case 36295:return lg;case 36296:return cg;case 35678:case 36198:case 36298:case 36306:case 35682:return hg;case 35679:case 36299:case 36307:return ug;case 35680:case 36300:case 36308:case 36293:return fg;case 36289:case 36303:case 36311:case 36292:return dg}}class mg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=K0(e.type)}}class gg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=pg(e.type)}}class xg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const eo=/(\w+)(\])?(\[|\.)?/g;function Vc(i,t){i.seq.push(t),i.map[t.id]=t}function vg(i,t,e){const n=i.name,s=n.length;for(eo.lastIndex=0;;){const r=eo.exec(n),a=eo.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Vc(e,c===void 0?new mg(o,i,t):new gg(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new xg(o),Vc(e,u)),e=u}}}class Kr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);vg(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Wc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const _g=37297;let Mg=0;function yg(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Xc=new qt;function Sg(i){ie._getMatrix(Xc,ie.workingColorSpace,i);const t=`mat3( ${Xc.elements.map(e=>e.toFixed(4))} )`;switch(ie.getTransfer(i)){case sa:return[t,"LinearTransferOETF"];case ce:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function qc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+yg(i.getShaderSource(t),o)}else return r}function bg(i,t){const e=Sg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function wg(i,t){let e;switch(t){case Rh:e="Linear";break;case Ch:e="Reinhard";break;case Ph:e="Cineon";break;case _l:e="ACESFilmic";break;case Ih:e="AgX";break;case Lh:e="Neutral";break;case Dh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const zr=new I;function Eg(){ie.getLuminanceCoefficients(zr);const i=zr.x.toFixed(4),t=zr.y.toFixed(4),e=zr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Tg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vs).join(`
`)}function Ag(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Rg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Vs(i){return i!==""}function Yc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Kc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Cg=/^[ \t]*#include +<([\w\d./]+)>/gm;function sl(i){return i.replace(Cg,Dg)}const Pg=new Map;function Dg(i,t){let e=Yt[t];if(e===void 0){const n=Pg.get(t);if(n!==void 0)e=Yt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return sl(e)}const Ig=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $c(i){return i.replace(Ig,Lg)}function Lg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Zc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function zg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Th?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ah?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===$n&&(t="SHADOWMAP_TYPE_VSM"),t}function Ug(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case vs:case _s:t="ENVMAP_TYPE_CUBE";break;case ha:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Ng(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case _s:t="ENVMAP_MODE_REFRACTION";break}return t}function Fg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case vl:t="ENVMAP_BLENDING_MULTIPLY";break;case ff:t="ENVMAP_BLENDING_MIX";break;case df:t="ENVMAP_BLENDING_ADD";break}return t}function Og(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Bg(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=zg(e),c=Ug(e),h=Ng(e),u=Fg(e),f=Og(e),p=Tg(e),x=Ag(r),g=s.createProgram();let m,d,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Vs).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Vs).join(`
`),d.length>0&&(d+=`
`)):(m=[Zc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vs).join(`
`),d=[Zc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==fi?"#define TONE_MAPPING":"",e.toneMapping!==fi?Yt.tonemapping_pars_fragment:"",e.toneMapping!==fi?wg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,bg("linearToOutputTexel",e.outputColorSpace),Eg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Vs).join(`
`)),a=sl(a),a=Yc(a,e),a=Kc(a,e),o=sl(o),o=Yc(o,e),o=Kc(o,e),a=$c(a),o=$c(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===ic?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ic?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const _=M+m+a,v=M+d+o,y=Wc(s,s.VERTEX_SHADER,_),w=Wc(s,s.FRAGMENT_SHADER,v);s.attachShader(g,y),s.attachShader(g,w),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function T(D){if(i.debug.checkShaderErrors){const z=s.getProgramInfoLog(g)||"",N=s.getShaderInfoLog(y)||"",k=s.getShaderInfoLog(w)||"",H=z.trim(),W=N.trim(),j=k.trim();let X=!0,nt=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,y,w);else{const ht=qc(s,y,"vertex"),vt=qc(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+H+`
`+ht+`
`+vt)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(W===""||j==="")&&(nt=!1);nt&&(D.diagnostics={runnable:X,programLog:H,vertexShader:{log:W,prefix:m},fragmentShader:{log:j,prefix:d}})}s.deleteShader(y),s.deleteShader(w),R=new Kr(s,g),S=Rg(s,g)}let R;this.getUniforms=function(){return R===void 0&&T(this),R};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(g,_g)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Mg++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=y,this.fragmentShader=w,this}let kg=0;class Hg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Gg(t),e.set(t,n)),n}}class Gg{constructor(t){this.id=kg++,this.code=t,this.usedTimes=0}}function Vg(i,t,e,n,s,r,a){const o=new Xh,l=new Hg,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,b,D,z,N){const k=z.fog,H=N.geometry,W=S.isMeshStandardMaterial?z.environment:null,j=(S.isMeshStandardMaterial?e:t).get(S.envMap||W),X=j&&j.mapping===ha?j.image.height:null,nt=x[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const ht=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,vt=ht!==void 0?ht.length:0;let Gt=0;H.morphAttributes.position!==void 0&&(Gt=1),H.morphAttributes.normal!==void 0&&(Gt=2),H.morphAttributes.color!==void 0&&(Gt=3);let se,re,ne,$;if(nt){const le=Un[nt];se=le.vertexShader,re=le.fragmentShader}else se=S.vertexShader,re=S.fragmentShader,l.update(S),ne=l.getVertexShaderID(S),$=l.getFragmentShaderID(S);const Q=i.getRenderTarget(),gt=i.state.buffers.depth.getReversed(),It=N.isInstancedMesh===!0,Et=N.isBatchedMesh===!0,jt=!!S.map,Ne=!!S.matcap,L=!!j,Qt=!!S.aoMap,kt=!!S.lightMap,zt=!!S.bumpMap,yt=!!S.normalMap,me=!!S.displacementMap,St=!!S.emissiveMap,Vt=!!S.metalnessMap,ye=!!S.roughnessMap,Me=S.anisotropy>0,C=S.clearcoat>0,E=S.dispersion>0,O=S.iridescence>0,Y=S.sheen>0,et=S.transmission>0,q=Me&&!!S.anisotropyMap,Pt=C&&!!S.clearcoatMap,lt=C&&!!S.clearcoatNormalMap,Tt=C&&!!S.clearcoatRoughnessMap,Rt=O&&!!S.iridescenceMap,at=O&&!!S.iridescenceThicknessMap,mt=Y&&!!S.sheenColorMap,Ot=Y&&!!S.sheenRoughnessMap,Ct=!!S.specularMap,dt=!!S.specularColorMap,Xt=!!S.specularIntensityMap,U=et&&!!S.transmissionMap,ot=et&&!!S.thicknessMap,ct=!!S.gradientMap,Mt=!!S.alphaMap,it=S.alphaTest>0,J=!!S.alphaHash,wt=!!S.extensions;let Wt=fi;S.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Wt=i.toneMapping);const ve={shaderID:nt,shaderType:S.type,shaderName:S.name,vertexShader:se,fragmentShader:re,defines:S.defines,customVertexShaderID:ne,customFragmentShaderID:$,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Et,batchingColor:Et&&N._colorsTexture!==null,instancing:It,instancingColor:It&&N.instanceColor!==null,instancingMorph:It&&N.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Q===null?i.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Ms,alphaToCoverage:!!S.alphaToCoverage,map:jt,matcap:Ne,envMap:L,envMapMode:L&&j.mapping,envMapCubeUVHeight:X,aoMap:Qt,lightMap:kt,bumpMap:zt,normalMap:yt,displacementMap:f&&me,emissiveMap:St,normalMapObjectSpace:yt&&S.normalMapType===xf,normalMapTangentSpace:yt&&S.normalMapType===Tl,metalnessMap:Vt,roughnessMap:ye,anisotropy:Me,anisotropyMap:q,clearcoat:C,clearcoatMap:Pt,clearcoatNormalMap:lt,clearcoatRoughnessMap:Tt,dispersion:E,iridescence:O,iridescenceMap:Rt,iridescenceThicknessMap:at,sheen:Y,sheenColorMap:mt,sheenRoughnessMap:Ot,specularMap:Ct,specularColorMap:dt,specularIntensityMap:Xt,transmission:et,transmissionMap:U,thicknessMap:ot,gradientMap:ct,opaque:S.transparent===!1&&S.blending===zi&&S.alphaToCoverage===!1,alphaMap:Mt,alphaTest:it,alphaHash:J,combine:S.combine,mapUv:jt&&g(S.map.channel),aoMapUv:Qt&&g(S.aoMap.channel),lightMapUv:kt&&g(S.lightMap.channel),bumpMapUv:zt&&g(S.bumpMap.channel),normalMapUv:yt&&g(S.normalMap.channel),displacementMapUv:me&&g(S.displacementMap.channel),emissiveMapUv:St&&g(S.emissiveMap.channel),metalnessMapUv:Vt&&g(S.metalnessMap.channel),roughnessMapUv:ye&&g(S.roughnessMap.channel),anisotropyMapUv:q&&g(S.anisotropyMap.channel),clearcoatMapUv:Pt&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:lt&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Tt&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Rt&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:at&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:mt&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&g(S.sheenRoughnessMap.channel),specularMapUv:Ct&&g(S.specularMap.channel),specularColorMapUv:dt&&g(S.specularColorMap.channel),specularIntensityMapUv:Xt&&g(S.specularIntensityMap.channel),transmissionMapUv:U&&g(S.transmissionMap.channel),thicknessMapUv:ot&&g(S.thicknessMap.channel),alphaMapUv:Mt&&g(S.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(yt||Me),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!H.attributes.uv&&(jt||Mt),fog:!!k,useFog:S.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:gt,skinning:N.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:vt,morphTextureStride:Gt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:Wt,decodeVideoTexture:jt&&S.map.isVideoTexture===!0&&ie.getTransfer(S.map.colorSpace)===ce,decodeVideoTextureEmissive:St&&S.emissiveMap.isVideoTexture===!0&&ie.getTransfer(S.emissiveMap.colorSpace)===ce,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ie,flipSided:S.side===tn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:wt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(wt&&S.extensions.multiDraw===!0||Et)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ve.vertexUv1s=c.has(1),ve.vertexUv2s=c.has(2),ve.vertexUv3s=c.has(3),c.clear(),ve}function d(S){const b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(const D in S.defines)b.push(D),b.push(S.defines[D]);return S.isRawShaderMaterial===!1&&(M(b,S),_(b,S),b.push(i.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function M(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function _(S,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),b.gradientMap&&o.enable(22),S.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),S.push(o.mask)}function v(S){const b=x[S.type];let D;if(b){const z=Un[b];D=Js.clone(z.uniforms)}else D=S.uniforms;return D}function y(S,b){let D;for(let z=0,N=h.length;z<N;z++){const k=h[z];if(k.cacheKey===b){D=k,++D.usedTimes;break}}return D===void 0&&(D=new Bg(i,b,S,r),h.push(D)),D}function w(S){if(--S.usedTimes===0){const b=h.indexOf(S);h[b]=h[h.length-1],h.pop(),S.destroy()}}function T(S){l.remove(S)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:v,acquireProgram:y,releaseProgram:w,releaseShaderCache:T,programs:h,dispose:R}}function Wg(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Xg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function jc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Jc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,f,p,x,g,m){let d=i[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:x,renderOrder:u.renderOrder,z:g,group:m},i[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=x,d.renderOrder=u.renderOrder,d.z=g,d.group=m),t++,d}function o(u,f,p,x,g,m){const d=a(u,f,p,x,g,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):e.push(d)}function l(u,f,p,x,g,m){const d=a(u,f,p,x,g,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):e.unshift(d)}function c(u,f){e.length>1&&e.sort(u||Xg),n.length>1&&n.sort(f||jc),s.length>1&&s.sort(f||jc)}function h(){for(let u=t,f=i.length;u<f;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function qg(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Jc,i.set(n,[a])):s>=r.length?(a=new Jc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Yg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new rt};break;case"SpotLight":e={position:new I,direction:new I,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new rt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":e={color:new rt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function Kg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let $g=0;function Zg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function jg(i){const t=new Yg,e=Kg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const s=new I,r=new de,a=new de;function o(c){let h=0,u=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,x=0,g=0,m=0,d=0,M=0,_=0,v=0,y=0,w=0,T=0;c.sort(Zg);for(let S=0,b=c.length;S<b;S++){const D=c[S],z=D.color,N=D.intensity,k=D.distance,H=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=z.r*N,u+=z.g*N,f+=z.b*N;else if(D.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(D.sh.coefficients[W],N);T++}else if(D.isDirectionalLight){const W=t.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const j=D.shadow,X=e.get(D);X.shadowIntensity=j.intensity,X.shadowBias=j.bias,X.shadowNormalBias=j.normalBias,X.shadowRadius=j.radius,X.shadowMapSize=j.mapSize,n.directionalShadow[p]=X,n.directionalShadowMap[p]=H,n.directionalShadowMatrix[p]=D.shadow.matrix,M++}n.directional[p]=W,p++}else if(D.isSpotLight){const W=t.get(D);W.position.setFromMatrixPosition(D.matrixWorld),W.color.copy(z).multiplyScalar(N),W.distance=k,W.coneCos=Math.cos(D.angle),W.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),W.decay=D.decay,n.spot[g]=W;const j=D.shadow;if(D.map&&(n.spotLightMap[y]=D.map,y++,j.updateMatrices(D),D.castShadow&&w++),n.spotLightMatrix[g]=j.matrix,D.castShadow){const X=e.get(D);X.shadowIntensity=j.intensity,X.shadowBias=j.bias,X.shadowNormalBias=j.normalBias,X.shadowRadius=j.radius,X.shadowMapSize=j.mapSize,n.spotShadow[g]=X,n.spotShadowMap[g]=H,v++}g++}else if(D.isRectAreaLight){const W=t.get(D);W.color.copy(z).multiplyScalar(N),W.halfWidth.set(D.width*.5,0,0),W.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=W,m++}else if(D.isPointLight){const W=t.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),W.distance=D.distance,W.decay=D.decay,D.castShadow){const j=D.shadow,X=e.get(D);X.shadowIntensity=j.intensity,X.shadowBias=j.bias,X.shadowNormalBias=j.normalBias,X.shadowRadius=j.radius,X.shadowMapSize=j.mapSize,X.shadowCameraNear=j.camera.near,X.shadowCameraFar=j.camera.far,n.pointShadow[x]=X,n.pointShadowMap[x]=H,n.pointShadowMatrix[x]=D.shadow.matrix,_++}n.point[x]=W,x++}else if(D.isHemisphereLight){const W=t.get(D);W.skyColor.copy(D.color).multiplyScalar(N),W.groundColor.copy(D.groundColor).multiplyScalar(N),n.hemi[d]=W,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ut.LTC_FLOAT_1,n.rectAreaLTC2=ut.LTC_FLOAT_2):(n.rectAreaLTC1=ut.LTC_HALF_1,n.rectAreaLTC2=ut.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const R=n.hash;(R.directionalLength!==p||R.pointLength!==x||R.spotLength!==g||R.rectAreaLength!==m||R.hemiLength!==d||R.numDirectionalShadows!==M||R.numPointShadows!==_||R.numSpotShadows!==v||R.numSpotMaps!==y||R.numLightProbes!==T)&&(n.directional.length=p,n.spot.length=g,n.rectArea.length=m,n.point.length=x,n.hemi.length=d,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=v+y-w,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=T,R.directionalLength=p,R.pointLength=x,R.spotLength=g,R.rectAreaLength=m,R.hemiLength=d,R.numDirectionalShadows=M,R.numPointShadows=_,R.numSpotShadows=v,R.numSpotMaps=y,R.numLightProbes=T,n.version=$g++)}function l(c,h){let u=0,f=0,p=0,x=0,g=0;const m=h.matrixWorldInverse;for(let d=0,M=c.length;d<M;d++){const _=c[d];if(_.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),u++}else if(_.isSpotLight){const v=n.spot[p];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),p++}else if(_.isRectAreaLight){const v=n.rectArea[x];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),a.identity(),r.copy(_.matrixWorld),r.premultiply(m),a.extractRotation(r),v.halfWidth.set(_.width*.5,0,0),v.halfHeight.set(0,_.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),x++}else if(_.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),f++}else if(_.isHemisphereLight){const v=n.hemi[g];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:n}}function Qc(i){const t=new jg(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Jg(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Qc(i),t.set(s,[o])):r>=a.length?(o=new Qc(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const Qg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tx=`uniform sampler2D shadow_pass;
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
}`;function ex(i,t,e){let n=new Pl;const s=new ft,r=new ft,a=new Ce,o=new yd({depthPacking:gf}),l=new Sd,c={},h=e.maxTextureSize,u={[pi]:tn,[tn]:pi,[Ie]:Ie},f=new Pe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:Qg,fragmentShader:tx}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const x=new pe;x.setAttribute("position",new Te(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new tt(x,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Th;let d=this.type;this.render=function(w,T,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const S=i.getRenderTarget(),b=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),z=i.state;z.setBlending(Zn),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const N=d!==$n&&this.type===$n,k=d===$n&&this.type!==$n;for(let H=0,W=w.length;H<W;H++){const j=w[H],X=j.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);const nt=X.getFrameExtents();if(s.multiply(nt),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/nt.x),s.x=r.x*nt.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/nt.y),s.y=r.y*nt.y,X.mapSize.y=r.y)),X.map===null||N===!0||k===!0){const vt=this.type!==$n?{minFilter:un,magFilter:un}:{};X.map!==null&&X.map.dispose(),X.map=new Cn(s.x,s.y,vt),X.map.texture.name=j.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();const ht=X.getViewportCount();for(let vt=0;vt<ht;vt++){const Gt=X.getViewport(vt);a.set(r.x*Gt.x,r.y*Gt.y,r.x*Gt.z,r.y*Gt.w),z.viewport(a),X.updateMatrices(j,vt),n=X.getFrustum(),v(T,R,X.camera,j,this.type)}X.isPointLightShadow!==!0&&this.type===$n&&M(X,R),X.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(S,b,D)};function M(w,T){const R=t.update(g);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Cn(s.x,s.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(T,null,R,f,g,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(T,null,R,p,g,null)}function _(w,T,R,S){let b=null;const D=R.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)b=D;else if(b=R.isPointLight===!0?l:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const z=b.uuid,N=T.uuid;let k=c[z];k===void 0&&(k={},c[z]=k);let H=k[N];H===void 0&&(H=b.clone(),k[N]=H,T.addEventListener("dispose",y)),b=H}if(b.visible=T.visible,b.wireframe=T.wireframe,S===$n?b.side=T.shadowSide!==null?T.shadowSide:T.side:b.side=T.shadowSide!==null?T.shadowSide:u[T.side],b.alphaMap=T.alphaMap,b.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,b.map=T.map,b.clipShadows=T.clipShadows,b.clippingPlanes=T.clippingPlanes,b.clipIntersection=T.clipIntersection,b.displacementMap=T.displacementMap,b.displacementScale=T.displacementScale,b.displacementBias=T.displacementBias,b.wireframeLinewidth=T.wireframeLinewidth,b.linewidth=T.linewidth,R.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const z=i.properties.get(b);z.light=R}return b}function v(w,T,R,S,b){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&b===$n)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,w.matrixWorld);const N=t.update(w),k=w.material;if(Array.isArray(k)){const H=N.groups;for(let W=0,j=H.length;W<j;W++){const X=H[W],nt=k[X.materialIndex];if(nt&&nt.visible){const ht=_(w,nt,S,b);w.onBeforeShadow(i,w,T,R,N,ht,X),i.renderBufferDirect(R,null,N,ht,w,X),w.onAfterShadow(i,w,T,R,N,ht,X)}}}else if(k.visible){const H=_(w,k,S,b);w.onBeforeShadow(i,w,T,R,N,H,null),i.renderBufferDirect(R,null,N,H,w,null),w.onAfterShadow(i,w,T,R,N,H,null)}}const z=w.children;for(let N=0,k=z.length;N<k;N++)v(z[N],T,R,S,b)}function y(w){w.target.removeEventListener("dispose",y);for(const R in c){const S=c[R],b=w.target.uuid;b in S&&(S[b].dispose(),delete S[b])}}}const nx={[vo]:_o,[Mo]:bo,[yo]:wo,[xs]:So,[_o]:vo,[bo]:Mo,[wo]:yo,[So]:xs};function ix(i,t){function e(){let U=!1;const ot=new Ce;let ct=null;const Mt=new Ce(0,0,0,0);return{setMask:function(it){ct!==it&&!U&&(i.colorMask(it,it,it,it),ct=it)},setLocked:function(it){U=it},setClear:function(it,J,wt,Wt,ve){ve===!0&&(it*=Wt,J*=Wt,wt*=Wt),ot.set(it,J,wt,Wt),Mt.equals(ot)===!1&&(i.clearColor(it,J,wt,Wt),Mt.copy(ot))},reset:function(){U=!1,ct=null,Mt.set(-1,0,0,0)}}}function n(){let U=!1,ot=!1,ct=null,Mt=null,it=null;return{setReversed:function(J){if(ot!==J){const wt=t.get("EXT_clip_control");J?wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.ZERO_TO_ONE_EXT):wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.NEGATIVE_ONE_TO_ONE_EXT),ot=J;const Wt=it;it=null,this.setClear(Wt)}},getReversed:function(){return ot},setTest:function(J){J?Q(i.DEPTH_TEST):gt(i.DEPTH_TEST)},setMask:function(J){ct!==J&&!U&&(i.depthMask(J),ct=J)},setFunc:function(J){if(ot&&(J=nx[J]),Mt!==J){switch(J){case vo:i.depthFunc(i.NEVER);break;case _o:i.depthFunc(i.ALWAYS);break;case Mo:i.depthFunc(i.LESS);break;case xs:i.depthFunc(i.LEQUAL);break;case yo:i.depthFunc(i.EQUAL);break;case So:i.depthFunc(i.GEQUAL);break;case bo:i.depthFunc(i.GREATER);break;case wo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Mt=J}},setLocked:function(J){U=J},setClear:function(J){it!==J&&(ot&&(J=1-J),i.clearDepth(J),it=J)},reset:function(){U=!1,ct=null,Mt=null,it=null,ot=!1}}}function s(){let U=!1,ot=null,ct=null,Mt=null,it=null,J=null,wt=null,Wt=null,ve=null;return{setTest:function(le){U||(le?Q(i.STENCIL_TEST):gt(i.STENCIL_TEST))},setMask:function(le){ot!==le&&!U&&(i.stencilMask(le),ot=le)},setFunc:function(le,Gn,Pn){(ct!==le||Mt!==Gn||it!==Pn)&&(i.stencilFunc(le,Gn,Pn),ct=le,Mt=Gn,it=Pn)},setOp:function(le,Gn,Pn){(J!==le||wt!==Gn||Wt!==Pn)&&(i.stencilOp(le,Gn,Pn),J=le,wt=Gn,Wt=Pn)},setLocked:function(le){U=le},setClear:function(le){ve!==le&&(i.clearStencil(le),ve=le)},reset:function(){U=!1,ot=null,ct=null,Mt=null,it=null,J=null,wt=null,Wt=null,ve=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,p=[],x=null,g=!1,m=null,d=null,M=null,_=null,v=null,y=null,w=null,T=new rt(0,0,0),R=0,S=!1,b=null,D=null,z=null,N=null,k=null;const H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,j=0;const X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(X)[1]),W=j>=1):X.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),W=j>=2);let nt=null,ht={};const vt=i.getParameter(i.SCISSOR_BOX),Gt=i.getParameter(i.VIEWPORT),se=new Ce().fromArray(vt),re=new Ce().fromArray(Gt);function ne(U,ot,ct,Mt){const it=new Uint8Array(4),J=i.createTexture();i.bindTexture(U,J),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let wt=0;wt<ct;wt++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(ot,0,i.RGBA,1,1,Mt,0,i.RGBA,i.UNSIGNED_BYTE,it):i.texImage2D(ot+wt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,it);return J}const $={};$[i.TEXTURE_2D]=ne(i.TEXTURE_2D,i.TEXTURE_2D,1),$[i.TEXTURE_CUBE_MAP]=ne(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[i.TEXTURE_2D_ARRAY]=ne(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$[i.TEXTURE_3D]=ne(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Q(i.DEPTH_TEST),a.setFunc(xs),zt(!1),yt(Ql),Q(i.CULL_FACE),Qt(Zn);function Q(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function gt(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function It(U,ot){return u[U]!==ot?(i.bindFramebuffer(U,ot),u[U]=ot,U===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ot),U===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ot),!0):!1}function Et(U,ot){let ct=p,Mt=!1;if(U){ct=f.get(ot),ct===void 0&&(ct=[],f.set(ot,ct));const it=U.textures;if(ct.length!==it.length||ct[0]!==i.COLOR_ATTACHMENT0){for(let J=0,wt=it.length;J<wt;J++)ct[J]=i.COLOR_ATTACHMENT0+J;ct.length=it.length,Mt=!0}}else ct[0]!==i.BACK&&(ct[0]=i.BACK,Mt=!0);Mt&&i.drawBuffers(ct)}function jt(U){return x!==U?(i.useProgram(U),x=U,!0):!1}const Ne={[Ii]:i.FUNC_ADD,[Ku]:i.FUNC_SUBTRACT,[$u]:i.FUNC_REVERSE_SUBTRACT};Ne[Zu]=i.MIN,Ne[ju]=i.MAX;const L={[Ju]:i.ZERO,[Qu]:i.ONE,[tf]:i.SRC_COLOR,[go]:i.SRC_ALPHA,[of]:i.SRC_ALPHA_SATURATE,[rf]:i.DST_COLOR,[nf]:i.DST_ALPHA,[ef]:i.ONE_MINUS_SRC_COLOR,[xo]:i.ONE_MINUS_SRC_ALPHA,[af]:i.ONE_MINUS_DST_COLOR,[sf]:i.ONE_MINUS_DST_ALPHA,[lf]:i.CONSTANT_COLOR,[cf]:i.ONE_MINUS_CONSTANT_COLOR,[hf]:i.CONSTANT_ALPHA,[uf]:i.ONE_MINUS_CONSTANT_ALPHA};function Qt(U,ot,ct,Mt,it,J,wt,Wt,ve,le){if(U===Zn){g===!0&&(gt(i.BLEND),g=!1);return}if(g===!1&&(Q(i.BLEND),g=!0),U!==Yu){if(U!==m||le!==S){if((d!==Ii||v!==Ii)&&(i.blendEquation(i.FUNC_ADD),d=Ii,v=Ii),le)switch(U){case zi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case jn:i.blendFunc(i.ONE,i.ONE);break;case tc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ec:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case zi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case jn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case tc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ec:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}M=null,_=null,y=null,w=null,T.set(0,0,0),R=0,m=U,S=le}return}it=it||ot,J=J||ct,wt=wt||Mt,(ot!==d||it!==v)&&(i.blendEquationSeparate(Ne[ot],Ne[it]),d=ot,v=it),(ct!==M||Mt!==_||J!==y||wt!==w)&&(i.blendFuncSeparate(L[ct],L[Mt],L[J],L[wt]),M=ct,_=Mt,y=J,w=wt),(Wt.equals(T)===!1||ve!==R)&&(i.blendColor(Wt.r,Wt.g,Wt.b,ve),T.copy(Wt),R=ve),m=U,S=!1}function kt(U,ot){U.side===Ie?gt(i.CULL_FACE):Q(i.CULL_FACE);let ct=U.side===tn;ot&&(ct=!ct),zt(ct),U.blending===zi&&U.transparent===!1?Qt(Zn):Qt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);const Mt=U.stencilWrite;o.setTest(Mt),Mt&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),St(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Q(i.SAMPLE_ALPHA_TO_COVERAGE):gt(i.SAMPLE_ALPHA_TO_COVERAGE)}function zt(U){b!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),b=U)}function yt(U){U!==Xu?(Q(i.CULL_FACE),U!==D&&(U===Ql?i.cullFace(i.BACK):U===qu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):gt(i.CULL_FACE),D=U}function me(U){U!==z&&(W&&i.lineWidth(U),z=U)}function St(U,ot,ct){U?(Q(i.POLYGON_OFFSET_FILL),(N!==ot||k!==ct)&&(i.polygonOffset(ot,ct),N=ot,k=ct)):gt(i.POLYGON_OFFSET_FILL)}function Vt(U){U?Q(i.SCISSOR_TEST):gt(i.SCISSOR_TEST)}function ye(U){U===void 0&&(U=i.TEXTURE0+H-1),nt!==U&&(i.activeTexture(U),nt=U)}function Me(U,ot,ct){ct===void 0&&(nt===null?ct=i.TEXTURE0+H-1:ct=nt);let Mt=ht[ct];Mt===void 0&&(Mt={type:void 0,texture:void 0},ht[ct]=Mt),(Mt.type!==U||Mt.texture!==ot)&&(nt!==ct&&(i.activeTexture(ct),nt=ct),i.bindTexture(U,ot||$[U]),Mt.type=U,Mt.texture=ot)}function C(){const U=ht[nt];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function E(){try{i.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function O(){try{i.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Y(){try{i.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function et(){try{i.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function q(){try{i.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Pt(){try{i.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function lt(){try{i.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Tt(){try{i.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Rt(){try{i.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function at(){try{i.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function mt(U){se.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),se.copy(U))}function Ot(U){re.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),re.copy(U))}function Ct(U,ot){let ct=c.get(ot);ct===void 0&&(ct=new WeakMap,c.set(ot,ct));let Mt=ct.get(U);Mt===void 0&&(Mt=i.getUniformBlockIndex(ot,U.name),ct.set(U,Mt))}function dt(U,ot){const Mt=c.get(ot).get(U);l.get(ot)!==Mt&&(i.uniformBlockBinding(ot,Mt,U.__bindingPointIndex),l.set(ot,Mt))}function Xt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},nt=null,ht={},u={},f=new WeakMap,p=[],x=null,g=!1,m=null,d=null,M=null,_=null,v=null,y=null,w=null,T=new rt(0,0,0),R=0,S=!1,b=null,D=null,z=null,N=null,k=null,se.set(0,0,i.canvas.width,i.canvas.height),re.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Q,disable:gt,bindFramebuffer:It,drawBuffers:Et,useProgram:jt,setBlending:Qt,setMaterial:kt,setFlipSided:zt,setCullFace:yt,setLineWidth:me,setPolygonOffset:St,setScissorTest:Vt,activeTexture:ye,bindTexture:Me,unbindTexture:C,compressedTexImage2D:E,compressedTexImage3D:O,texImage2D:Rt,texImage3D:at,updateUBOMapping:Ct,uniformBlockBinding:dt,texStorage2D:lt,texStorage3D:Tt,texSubImage2D:Y,texSubImage3D:et,compressedTexSubImage2D:q,compressedTexSubImage3D:Pt,scissor:mt,viewport:Ot,reset:Xt}}function sx(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ft,h=new WeakMap;let u;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,E){return p?new OffscreenCanvas(C,E):aa("canvas")}function g(C,E,O){let Y=1;const et=Me(C);if((et.width>O||et.height>O)&&(Y=O/Math.max(et.width,et.height)),Y<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const q=Math.floor(Y*et.width),Pt=Math.floor(Y*et.height);u===void 0&&(u=x(q,Pt));const lt=E?x(q,Pt):u;return lt.width=q,lt.height=Pt,lt.getContext("2d").drawImage(C,0,0,q,Pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+q+"x"+Pt+")."),lt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),C;return C}function m(C){return C.generateMipmaps}function d(C){i.generateMipmap(C)}function M(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(C,E,O,Y,et=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let q=E;if(E===i.RED&&(O===i.FLOAT&&(q=i.R32F),O===i.HALF_FLOAT&&(q=i.R16F),O===i.UNSIGNED_BYTE&&(q=i.R8)),E===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(q=i.R8UI),O===i.UNSIGNED_SHORT&&(q=i.R16UI),O===i.UNSIGNED_INT&&(q=i.R32UI),O===i.BYTE&&(q=i.R8I),O===i.SHORT&&(q=i.R16I),O===i.INT&&(q=i.R32I)),E===i.RG&&(O===i.FLOAT&&(q=i.RG32F),O===i.HALF_FLOAT&&(q=i.RG16F),O===i.UNSIGNED_BYTE&&(q=i.RG8)),E===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(q=i.RG8UI),O===i.UNSIGNED_SHORT&&(q=i.RG16UI),O===i.UNSIGNED_INT&&(q=i.RG32UI),O===i.BYTE&&(q=i.RG8I),O===i.SHORT&&(q=i.RG16I),O===i.INT&&(q=i.RG32I)),E===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(q=i.RGB8UI),O===i.UNSIGNED_SHORT&&(q=i.RGB16UI),O===i.UNSIGNED_INT&&(q=i.RGB32UI),O===i.BYTE&&(q=i.RGB8I),O===i.SHORT&&(q=i.RGB16I),O===i.INT&&(q=i.RGB32I)),E===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),O===i.UNSIGNED_INT&&(q=i.RGBA32UI),O===i.BYTE&&(q=i.RGBA8I),O===i.SHORT&&(q=i.RGBA16I),O===i.INT&&(q=i.RGBA32I)),E===i.RGB&&(O===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(q=i.R11F_G11F_B10F)),E===i.RGBA){const Pt=et?sa:ie.getTransfer(Y);O===i.FLOAT&&(q=i.RGBA32F),O===i.HALF_FLOAT&&(q=i.RGBA16F),O===i.UNSIGNED_BYTE&&(q=Pt===ce?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function v(C,E){let O;return C?E===null||E===Ui||E===Ks?O=i.DEPTH24_STENCIL8:E===Rn?O=i.DEPTH32F_STENCIL8:E===Ys&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ui||E===Ks?O=i.DEPTH_COMPONENT24:E===Rn?O=i.DEPTH_COMPONENT32F:E===Ys&&(O=i.DEPTH_COMPONENT16),O}function y(C,E){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==un&&C.minFilter!==an?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function w(C){const E=C.target;E.removeEventListener("dispose",w),R(E),E.isVideoTexture&&h.delete(E)}function T(C){const E=C.target;E.removeEventListener("dispose",T),b(E)}function R(C){const E=n.get(C);if(E.__webglInit===void 0)return;const O=C.source,Y=f.get(O);if(Y){const et=Y[E.__cacheKey];et.usedTimes--,et.usedTimes===0&&S(C),Object.keys(Y).length===0&&f.delete(O)}n.remove(C)}function S(C){const E=n.get(C);i.deleteTexture(E.__webglTexture);const O=C.source,Y=f.get(O);delete Y[E.__cacheKey],a.memory.textures--}function b(C){const E=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(E.__webglFramebuffer[Y]))for(let et=0;et<E.__webglFramebuffer[Y].length;et++)i.deleteFramebuffer(E.__webglFramebuffer[Y][et]);else i.deleteFramebuffer(E.__webglFramebuffer[Y]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[Y])}else{if(Array.isArray(E.__webglFramebuffer))for(let Y=0;Y<E.__webglFramebuffer.length;Y++)i.deleteFramebuffer(E.__webglFramebuffer[Y]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Y=0;Y<E.__webglColorRenderbuffer.length;Y++)E.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[Y]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const O=C.textures;for(let Y=0,et=O.length;Y<et;Y++){const q=n.get(O[Y]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),a.memory.textures--),n.remove(O[Y])}n.remove(C)}let D=0;function z(){D=0}function N(){const C=D;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),D+=1,C}function k(C){const E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function H(C,E){const O=n.get(C);if(C.isVideoTexture&&Vt(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&O.__version!==C.version){const Y=C.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(O,C,E);return}}else C.isExternalTexture&&(O.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+E)}function W(C,E){const O=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){$(O,C,E);return}e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+E)}function j(C,E){const O=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){$(O,C,E);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+E)}function X(C,E){const O=n.get(C);if(C.version>0&&O.__version!==C.version){Q(O,C,E);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+E)}const nt={[ia]:i.REPEAT,[hi]:i.CLAMP_TO_EDGE,[Ao]:i.MIRRORED_REPEAT},ht={[un]:i.NEAREST,[pf]:i.NEAREST_MIPMAP_NEAREST,[cr]:i.NEAREST_MIPMAP_LINEAR,[an]:i.LINEAR,[Ma]:i.LINEAR_MIPMAP_NEAREST,[ui]:i.LINEAR_MIPMAP_LINEAR},vt={[vf]:i.NEVER,[wf]:i.ALWAYS,[_f]:i.LESS,[Gh]:i.LEQUAL,[Mf]:i.EQUAL,[bf]:i.GEQUAL,[yf]:i.GREATER,[Sf]:i.NOTEQUAL};function Gt(C,E){if(E.type===Rn&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===an||E.magFilter===Ma||E.magFilter===cr||E.magFilter===ui||E.minFilter===an||E.minFilter===Ma||E.minFilter===cr||E.minFilter===ui)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,nt[E.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,nt[E.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,nt[E.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,ht[E.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,ht[E.minFilter]),E.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,vt[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===un||E.minFilter!==cr&&E.minFilter!==ui||E.type===Rn&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function se(C,E){let O=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",w));const Y=E.source;let et=f.get(Y);et===void 0&&(et={},f.set(Y,et));const q=k(E);if(q!==C.__cacheKey){et[q]===void 0&&(et[q]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),et[q].usedTimes++;const Pt=et[C.__cacheKey];Pt!==void 0&&(et[C.__cacheKey].usedTimes--,Pt.usedTimes===0&&S(E)),C.__cacheKey=q,C.__webglTexture=et[q].texture}return O}function re(C,E,O){return Math.floor(Math.floor(C/O)/E)}function ne(C,E,O,Y){const q=C.updateRanges;if(q.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,E.width,E.height,O,Y,E.data);else{q.sort((at,mt)=>at.start-mt.start);let Pt=0;for(let at=1;at<q.length;at++){const mt=q[Pt],Ot=q[at],Ct=mt.start+mt.count,dt=re(Ot.start,E.width,4),Xt=re(mt.start,E.width,4);Ot.start<=Ct+1&&dt===Xt&&re(Ot.start+Ot.count-1,E.width,4)===dt?mt.count=Math.max(mt.count,Ot.start+Ot.count-mt.start):(++Pt,q[Pt]=Ot)}q.length=Pt+1;const lt=i.getParameter(i.UNPACK_ROW_LENGTH),Tt=i.getParameter(i.UNPACK_SKIP_PIXELS),Rt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,E.width);for(let at=0,mt=q.length;at<mt;at++){const Ot=q[at],Ct=Math.floor(Ot.start/4),dt=Math.ceil(Ot.count/4),Xt=Ct%E.width,U=Math.floor(Ct/E.width),ot=dt,ct=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Xt),i.pixelStorei(i.UNPACK_SKIP_ROWS,U),e.texSubImage2D(i.TEXTURE_2D,0,Xt,U,ot,ct,O,Y,E.data)}C.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,lt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Tt),i.pixelStorei(i.UNPACK_SKIP_ROWS,Rt)}}function $(C,E,O){let Y=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Y=i.TEXTURE_3D);const et=se(C,E),q=E.source;e.bindTexture(Y,C.__webglTexture,i.TEXTURE0+O);const Pt=n.get(q);if(q.version!==Pt.__version||et===!0){e.activeTexture(i.TEXTURE0+O);const lt=ie.getPrimaries(ie.workingColorSpace),Tt=E.colorSpace===ci?null:ie.getPrimaries(E.colorSpace),Rt=E.colorSpace===ci||lt===Tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);let at=g(E.image,!1,s.maxTextureSize);at=ye(E,at);const mt=r.convert(E.format,E.colorSpace),Ot=r.convert(E.type);let Ct=_(E.internalFormat,mt,Ot,E.colorSpace,E.isVideoTexture);Gt(Y,E);let dt;const Xt=E.mipmaps,U=E.isVideoTexture!==!0,ot=Pt.__version===void 0||et===!0,ct=q.dataReady,Mt=y(E,at);if(E.isDepthTexture)Ct=v(E.format===Zs,E.type),ot&&(U?e.texStorage2D(i.TEXTURE_2D,1,Ct,at.width,at.height):e.texImage2D(i.TEXTURE_2D,0,Ct,at.width,at.height,0,mt,Ot,null));else if(E.isDataTexture)if(Xt.length>0){U&&ot&&e.texStorage2D(i.TEXTURE_2D,Mt,Ct,Xt[0].width,Xt[0].height);for(let it=0,J=Xt.length;it<J;it++)dt=Xt[it],U?ct&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,dt.width,dt.height,mt,Ot,dt.data):e.texImage2D(i.TEXTURE_2D,it,Ct,dt.width,dt.height,0,mt,Ot,dt.data);E.generateMipmaps=!1}else U?(ot&&e.texStorage2D(i.TEXTURE_2D,Mt,Ct,at.width,at.height),ct&&ne(E,at,mt,Ot)):e.texImage2D(i.TEXTURE_2D,0,Ct,at.width,at.height,0,mt,Ot,at.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){U&&ot&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Mt,Ct,Xt[0].width,Xt[0].height,at.depth);for(let it=0,J=Xt.length;it<J;it++)if(dt=Xt[it],E.format!==Sn)if(mt!==null)if(U){if(ct)if(E.layerUpdates.size>0){const wt=Cc(dt.width,dt.height,E.format,E.type);for(const Wt of E.layerUpdates){const ve=dt.data.subarray(Wt*wt/dt.data.BYTES_PER_ELEMENT,(Wt+1)*wt/dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,Wt,dt.width,dt.height,1,mt,ve)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,dt.width,dt.height,at.depth,mt,dt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,it,Ct,dt.width,dt.height,at.depth,0,dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?ct&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,dt.width,dt.height,at.depth,mt,Ot,dt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,it,Ct,dt.width,dt.height,at.depth,0,mt,Ot,dt.data)}else{U&&ot&&e.texStorage2D(i.TEXTURE_2D,Mt,Ct,Xt[0].width,Xt[0].height);for(let it=0,J=Xt.length;it<J;it++)dt=Xt[it],E.format!==Sn?mt!==null?U?ct&&e.compressedTexSubImage2D(i.TEXTURE_2D,it,0,0,dt.width,dt.height,mt,dt.data):e.compressedTexImage2D(i.TEXTURE_2D,it,Ct,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?ct&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,dt.width,dt.height,mt,Ot,dt.data):e.texImage2D(i.TEXTURE_2D,it,Ct,dt.width,dt.height,0,mt,Ot,dt.data)}else if(E.isDataArrayTexture)if(U){if(ot&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Mt,Ct,at.width,at.height,at.depth),ct)if(E.layerUpdates.size>0){const it=Cc(at.width,at.height,E.format,E.type);for(const J of E.layerUpdates){const wt=at.data.subarray(J*it/at.data.BYTES_PER_ELEMENT,(J+1)*it/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,at.width,at.height,1,mt,Ot,wt)}E.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,mt,Ot,at.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ct,at.width,at.height,at.depth,0,mt,Ot,at.data);else if(E.isData3DTexture)U?(ot&&e.texStorage3D(i.TEXTURE_3D,Mt,Ct,at.width,at.height,at.depth),ct&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,mt,Ot,at.data)):e.texImage3D(i.TEXTURE_3D,0,Ct,at.width,at.height,at.depth,0,mt,Ot,at.data);else if(E.isFramebufferTexture){if(ot)if(U)e.texStorage2D(i.TEXTURE_2D,Mt,Ct,at.width,at.height);else{let it=at.width,J=at.height;for(let wt=0;wt<Mt;wt++)e.texImage2D(i.TEXTURE_2D,wt,Ct,it,J,0,mt,Ot,null),it>>=1,J>>=1}}else if(Xt.length>0){if(U&&ot){const it=Me(Xt[0]);e.texStorage2D(i.TEXTURE_2D,Mt,Ct,it.width,it.height)}for(let it=0,J=Xt.length;it<J;it++)dt=Xt[it],U?ct&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,mt,Ot,dt):e.texImage2D(i.TEXTURE_2D,it,Ct,mt,Ot,dt);E.generateMipmaps=!1}else if(U){if(ot){const it=Me(at);e.texStorage2D(i.TEXTURE_2D,Mt,Ct,it.width,it.height)}ct&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,mt,Ot,at)}else e.texImage2D(i.TEXTURE_2D,0,Ct,mt,Ot,at);m(E)&&d(Y),Pt.__version=q.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function Q(C,E,O){if(E.image.length!==6)return;const Y=se(C,E),et=E.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+O);const q=n.get(et);if(et.version!==q.__version||Y===!0){e.activeTexture(i.TEXTURE0+O);const Pt=ie.getPrimaries(ie.workingColorSpace),lt=E.colorSpace===ci?null:ie.getPrimaries(E.colorSpace),Tt=E.colorSpace===ci||Pt===lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);const Rt=E.isCompressedTexture||E.image[0].isCompressedTexture,at=E.image[0]&&E.image[0].isDataTexture,mt=[];for(let J=0;J<6;J++)!Rt&&!at?mt[J]=g(E.image[J],!0,s.maxCubemapSize):mt[J]=at?E.image[J].image:E.image[J],mt[J]=ye(E,mt[J]);const Ot=mt[0],Ct=r.convert(E.format,E.colorSpace),dt=r.convert(E.type),Xt=_(E.internalFormat,Ct,dt,E.colorSpace),U=E.isVideoTexture!==!0,ot=q.__version===void 0||Y===!0,ct=et.dataReady;let Mt=y(E,Ot);Gt(i.TEXTURE_CUBE_MAP,E);let it;if(Rt){U&&ot&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Mt,Xt,Ot.width,Ot.height);for(let J=0;J<6;J++){it=mt[J].mipmaps;for(let wt=0;wt<it.length;wt++){const Wt=it[wt];E.format!==Sn?Ct!==null?U?ct&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,wt,0,0,Wt.width,Wt.height,Ct,Wt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,wt,Xt,Wt.width,Wt.height,0,Wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,wt,0,0,Wt.width,Wt.height,Ct,dt,Wt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,wt,Xt,Wt.width,Wt.height,0,Ct,dt,Wt.data)}}}else{if(it=E.mipmaps,U&&ot){it.length>0&&Mt++;const J=Me(mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Mt,Xt,J.width,J.height)}for(let J=0;J<6;J++)if(at){U?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,mt[J].width,mt[J].height,Ct,dt,mt[J].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Xt,mt[J].width,mt[J].height,0,Ct,dt,mt[J].data);for(let wt=0;wt<it.length;wt++){const ve=it[wt].image[J].image;U?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,wt+1,0,0,ve.width,ve.height,Ct,dt,ve.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,wt+1,Xt,ve.width,ve.height,0,Ct,dt,ve.data)}}else{U?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ct,dt,mt[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Xt,Ct,dt,mt[J]);for(let wt=0;wt<it.length;wt++){const Wt=it[wt];U?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,wt+1,0,0,Ct,dt,Wt.image[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,wt+1,Xt,Ct,dt,Wt.image[J])}}}m(E)&&d(i.TEXTURE_CUBE_MAP),q.__version=et.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function gt(C,E,O,Y,et,q){const Pt=r.convert(O.format,O.colorSpace),lt=r.convert(O.type),Tt=_(O.internalFormat,Pt,lt,O.colorSpace),Rt=n.get(E),at=n.get(O);if(at.__renderTarget=E,!Rt.__hasExternalTextures){const mt=Math.max(1,E.width>>q),Ot=Math.max(1,E.height>>q);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,q,Tt,mt,Ot,E.depth,0,Pt,lt,null):e.texImage2D(et,q,Tt,mt,Ot,0,Pt,lt,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),St(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,et,at.__webglTexture,0,me(E)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,et,at.__webglTexture,q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function It(C,E,O){if(i.bindRenderbuffer(i.RENDERBUFFER,C),E.depthBuffer){const Y=E.depthTexture,et=Y&&Y.isDepthTexture?Y.type:null,q=v(E.stencilBuffer,et),Pt=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=me(E);St(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,lt,q,E.width,E.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,lt,q,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,q,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Pt,i.RENDERBUFFER,C)}else{const Y=E.textures;for(let et=0;et<Y.length;et++){const q=Y[et],Pt=r.convert(q.format,q.colorSpace),lt=r.convert(q.type),Tt=_(q.internalFormat,Pt,lt,q.colorSpace),Rt=me(E);O&&St(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Rt,Tt,E.width,E.height):St(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Rt,Tt,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Tt,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Et(C,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(E.depthTexture);Y.__renderTarget=E,(!Y.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),H(E.depthTexture,0);const et=Y.__webglTexture,q=me(E);if(E.depthTexture.format===$s)St(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0);else if(E.depthTexture.format===Zs)St(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function jt(C){const E=n.get(C),O=C.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==C.depthTexture){const Y=C.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Y){const et=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Y.removeEventListener("dispose",et)};Y.addEventListener("dispose",et),E.__depthDisposeCallback=et}E.__boundDepthTexture=Y}if(C.depthTexture&&!E.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const Y=C.texture.mipmaps;Y&&Y.length>0?Et(E.__webglFramebuffer[0],C):Et(E.__webglFramebuffer,C)}else if(O){E.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[Y]),E.__webglDepthbuffer[Y]===void 0)E.__webglDepthbuffer[Y]=i.createRenderbuffer(),It(E.__webglDepthbuffer[Y],C,!1);else{const et=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=E.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,q)}}else{const Y=C.texture.mipmaps;if(Y&&Y.length>0?e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),It(E.__webglDepthbuffer,C,!1);else{const et=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,q)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ne(C,E,O){const Y=n.get(C);E!==void 0&&gt(Y.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&jt(C)}function L(C){const E=C.texture,O=n.get(C),Y=n.get(E);C.addEventListener("dispose",T);const et=C.textures,q=C.isWebGLCubeRenderTarget===!0,Pt=et.length>1;if(Pt||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=E.version,a.memory.textures++),q){O.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(E.mipmaps&&E.mipmaps.length>0){O.__webglFramebuffer[lt]=[];for(let Tt=0;Tt<E.mipmaps.length;Tt++)O.__webglFramebuffer[lt][Tt]=i.createFramebuffer()}else O.__webglFramebuffer[lt]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){O.__webglFramebuffer=[];for(let lt=0;lt<E.mipmaps.length;lt++)O.__webglFramebuffer[lt]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(Pt)for(let lt=0,Tt=et.length;lt<Tt;lt++){const Rt=n.get(et[lt]);Rt.__webglTexture===void 0&&(Rt.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&St(C)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let lt=0;lt<et.length;lt++){const Tt=et[lt];O.__webglColorRenderbuffer[lt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[lt]);const Rt=r.convert(Tt.format,Tt.colorSpace),at=r.convert(Tt.type),mt=_(Tt.internalFormat,Rt,at,Tt.colorSpace,C.isXRRenderTarget===!0),Ot=me(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ot,mt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,O.__webglColorRenderbuffer[lt])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),It(O.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Gt(i.TEXTURE_CUBE_MAP,E);for(let lt=0;lt<6;lt++)if(E.mipmaps&&E.mipmaps.length>0)for(let Tt=0;Tt<E.mipmaps.length;Tt++)gt(O.__webglFramebuffer[lt][Tt],C,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Tt);else gt(O.__webglFramebuffer[lt],C,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);m(E)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Pt){for(let lt=0,Tt=et.length;lt<Tt;lt++){const Rt=et[lt],at=n.get(Rt);let mt=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(mt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(mt,at.__webglTexture),Gt(mt,Rt),gt(O.__webglFramebuffer,C,Rt,i.COLOR_ATTACHMENT0+lt,mt,0),m(Rt)&&d(mt)}e.unbindTexture()}else{let lt=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(lt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(lt,Y.__webglTexture),Gt(lt,E),E.mipmaps&&E.mipmaps.length>0)for(let Tt=0;Tt<E.mipmaps.length;Tt++)gt(O.__webglFramebuffer[Tt],C,E,i.COLOR_ATTACHMENT0,lt,Tt);else gt(O.__webglFramebuffer,C,E,i.COLOR_ATTACHMENT0,lt,0);m(E)&&d(lt),e.unbindTexture()}C.depthBuffer&&jt(C)}function Qt(C){const E=C.textures;for(let O=0,Y=E.length;O<Y;O++){const et=E[O];if(m(et)){const q=M(C),Pt=n.get(et).__webglTexture;e.bindTexture(q,Pt),d(q),e.unbindTexture()}}}const kt=[],zt=[];function yt(C){if(C.samples>0){if(St(C)===!1){const E=C.textures,O=C.width,Y=C.height;let et=i.COLOR_BUFFER_BIT;const q=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pt=n.get(C),lt=E.length>1;if(lt)for(let Rt=0;Rt<E.length;Rt++)e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer);const Tt=C.texture.mipmaps;Tt&&Tt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let Rt=0;Rt<E.length;Rt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),lt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Pt.__webglColorRenderbuffer[Rt]);const at=n.get(E[Rt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,at,0)}i.blitFramebuffer(0,0,O,Y,0,0,O,Y,et,i.NEAREST),l===!0&&(kt.length=0,zt.length=0,kt.push(i.COLOR_ATTACHMENT0+Rt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(kt.push(q),zt.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,zt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,kt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),lt)for(let Rt=0;Rt<E.length;Rt++){e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.RENDERBUFFER,Pt.__webglColorRenderbuffer[Rt]);const at=n.get(E[Rt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.TEXTURE_2D,at,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const E=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function me(C){return Math.min(s.maxSamples,C.samples)}function St(C){const E=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Vt(C){const E=a.render.frame;h.get(C)!==E&&(h.set(C,E),C.update())}function ye(C,E){const O=C.colorSpace,Y=C.format,et=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||O!==Ms&&O!==ci&&(ie.getTransfer(O)===ce?(Y!==Sn||et!==kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),E}function Me(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=z,this.setTexture2D=H,this.setTexture2DArray=W,this.setTexture3D=j,this.setTextureCube=X,this.rebindTextures=Ne,this.setupRenderTarget=L,this.updateRenderTargetMipmap=Qt,this.updateMultisampleRenderTarget=yt,this.setupDepthRenderbuffer=jt,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=St}function rx(i,t){function e(n,s=ci){let r;const a=ie.getTransfer(s);if(n===kn)return i.UNSIGNED_BYTE;if(n===yl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Sl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Fh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Oh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Uh)return i.BYTE;if(n===Nh)return i.SHORT;if(n===Ys)return i.UNSIGNED_SHORT;if(n===Ml)return i.INT;if(n===Ui)return i.UNSIGNED_INT;if(n===Rn)return i.FLOAT;if(n===Jn)return i.HALF_FLOAT;if(n===Bh)return i.ALPHA;if(n===kh)return i.RGB;if(n===Sn)return i.RGBA;if(n===$s)return i.DEPTH_COMPONENT;if(n===Zs)return i.DEPTH_STENCIL;if(n===ua)return i.RED;if(n===bl)return i.RED_INTEGER;if(n===Hh)return i.RG;if(n===wl)return i.RG_INTEGER;if(n===El)return i.RGBA_INTEGER;if(n===Vr||n===Wr||n===Xr||n===qr)if(a===ce)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Vr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Vr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Wr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Xr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===qr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ro||n===Co||n===Po||n===Do)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ro)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Co)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Po)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Do)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Io||n===Lo||n===zo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Io||n===Lo)return a===ce?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===zo)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Uo||n===No||n===Fo||n===Oo||n===Bo||n===ko||n===Ho||n===Go||n===Vo||n===Wo||n===Xo||n===qo||n===Yo||n===Ko)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Uo)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===No)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Fo)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Oo)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Bo)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ko)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ho)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Go)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Vo)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Wo)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Xo)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===qo)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Yo)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ko)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===$o||n===Zo||n===jo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===$o)return a===ce?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Zo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===jo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Jo||n===Qo||n===tl||n===el)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Jo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Qo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===tl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===el)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ks?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const ax=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ox=`
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

}`;class lx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new eu(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Pe({vertexShader:ax,fragmentShader:ox,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new tt(new dn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class cx extends Ts{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,p=null,x=null;const g=typeof XRWebGLBinding<"u",m=new lx,d={},M=e.getContextAttributes();let _=null,v=null;const y=[],w=[],T=new ft;let R=null;const S=new Mn;S.viewport=new Ce;const b=new Mn;b.viewport=new Ce;const D=[S,b],z=new Cd;let N=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let Q=y[$];return Q===void 0&&(Q=new Va,y[$]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function($){let Q=y[$];return Q===void 0&&(Q=new Va,y[$]=Q),Q.getGripSpace()},this.getHand=function($){let Q=y[$];return Q===void 0&&(Q=new Va,y[$]=Q),Q.getHandSpace()};function H($){const Q=w.indexOf($.inputSource);if(Q===-1)return;const gt=y[Q];gt!==void 0&&(gt.update($.inputSource,$.frame,c||a),gt.dispatchEvent({type:$.type,data:$.inputSource}))}function W(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",j);for(let $=0;$<y.length;$++){const Q=w[$];Q!==null&&(w[$]=null,y[$].disconnect(Q))}N=null,k=null,m.reset();for(const $ in d)delete d[$];t.setRenderTarget(_),p=null,f=null,u=null,s=null,v=null,ne.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u===null&&g&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(_=t.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",W),s.addEventListener("inputsourceschange",j),M.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(T),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let gt=null,It=null,Et=null;M.depth&&(Et=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,gt=M.stencil?Zs:$s,It=M.stencil?Ks:Ui);const jt={colorFormat:e.RGBA8,depthFormat:Et,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(jt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new Cn(f.textureWidth,f.textureHeight,{format:Sn,type:kn,depthTexture:new tu(f.textureWidth,f.textureHeight,It,void 0,void 0,void 0,void 0,void 0,void 0,gt),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const gt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,gt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Cn(p.framebufferWidth,p.framebufferHeight,{format:Sn,type:kn,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ne.setContext(s),ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function j($){for(let Q=0;Q<$.removed.length;Q++){const gt=$.removed[Q],It=w.indexOf(gt);It>=0&&(w[It]=null,y[It].disconnect(gt))}for(let Q=0;Q<$.added.length;Q++){const gt=$.added[Q];let It=w.indexOf(gt);if(It===-1){for(let jt=0;jt<y.length;jt++)if(jt>=w.length){w.push(gt),It=jt;break}else if(w[jt]===null){w[jt]=gt,It=jt;break}if(It===-1)break}const Et=y[It];Et&&Et.connect(gt)}}const X=new I,nt=new I;function ht($,Q,gt){X.setFromMatrixPosition(Q.matrixWorld),nt.setFromMatrixPosition(gt.matrixWorld);const It=X.distanceTo(nt),Et=Q.projectionMatrix.elements,jt=gt.projectionMatrix.elements,Ne=Et[14]/(Et[10]-1),L=Et[14]/(Et[10]+1),Qt=(Et[9]+1)/Et[5],kt=(Et[9]-1)/Et[5],zt=(Et[8]-1)/Et[0],yt=(jt[8]+1)/jt[0],me=Ne*zt,St=Ne*yt,Vt=It/(-zt+yt),ye=Vt*-zt;if(Q.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(ye),$.translateZ(Vt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Et[10]===-1)$.projectionMatrix.copy(Q.projectionMatrix),$.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const Me=Ne+Vt,C=L+Vt,E=me-ye,O=St+(It-ye),Y=Qt*L/C*Me,et=kt*L/C*Me;$.projectionMatrix.makePerspective(E,O,Y,et,Me,C),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function vt($,Q){Q===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(Q.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let Q=$.near,gt=$.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(gt=m.depthFar)),z.near=b.near=S.near=Q,z.far=b.far=S.far=gt,(N!==z.near||k!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),N=z.near,k=z.far),z.layers.mask=$.layers.mask|6,S.layers.mask=z.layers.mask&3,b.layers.mask=z.layers.mask&5;const It=$.parent,Et=z.cameras;vt(z,It);for(let jt=0;jt<Et.length;jt++)vt(Et[jt],It);Et.length===2?ht(z,S,b):z.projectionMatrix.copy(S.projectionMatrix),Gt($,z,It)};function Gt($,Q,gt){gt===null?$.matrix.copy(Q.matrixWorld):($.matrix.copy(gt.matrixWorld),$.matrix.invert(),$.matrix.multiply(Q.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(Q.projectionMatrix),$.projectionMatrixInverse.copy(Q.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=il*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function($){l=$,f!==null&&(f.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function($){return d[$]};let se=null;function re($,Q){if(h=Q.getViewerPose(c||a),x=Q,h!==null){const gt=h.views;p!==null&&(t.setRenderTargetFramebuffer(v,p.framebuffer),t.setRenderTarget(v));let It=!1;gt.length!==z.cameras.length&&(z.cameras.length=0,It=!0);for(let L=0;L<gt.length;L++){const Qt=gt[L];let kt=null;if(p!==null)kt=p.getViewport(Qt);else{const yt=u.getViewSubImage(f,Qt);kt=yt.viewport,L===0&&(t.setRenderTargetTextures(v,yt.colorTexture,yt.depthStencilTexture),t.setRenderTarget(v))}let zt=D[L];zt===void 0&&(zt=new Mn,zt.layers.enable(L),zt.viewport=new Ce,D[L]=zt),zt.matrix.fromArray(Qt.transform.matrix),zt.matrix.decompose(zt.position,zt.quaternion,zt.scale),zt.projectionMatrix.fromArray(Qt.projectionMatrix),zt.projectionMatrixInverse.copy(zt.projectionMatrix).invert(),zt.viewport.set(kt.x,kt.y,kt.width,kt.height),L===0&&(z.matrix.copy(zt.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),It===!0&&z.cameras.push(zt)}const Et=s.enabledFeatures;if(Et&&Et.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&g){u=n.getBinding();const L=u.getDepthInformation(gt[0]);L&&L.isValid&&L.texture&&m.init(L,s.renderState)}if(Et&&Et.includes("camera-access")&&g){t.state.unbindTexture(),u=n.getBinding();for(let L=0;L<gt.length;L++){const Qt=gt[L].camera;if(Qt){let kt=d[Qt];kt||(kt=new eu,d[Qt]=kt);const zt=u.getCameraImage(Qt);kt.sourceTexture=zt}}}}for(let gt=0;gt<y.length;gt++){const It=w[gt],Et=y[gt];It!==null&&Et!==void 0&&Et.update(It,Q,c||a)}se&&se($,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),x=null}const ne=new ru;ne.setAnimationLoop(re),this.setAnimationLoop=function($){se=$},this.dispose=function(){}}}const Si=new fn,hx=new de;function ux(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,$h(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,M,_,v){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,v)):d.isMeshMatcapMaterial?(r(m,d),x(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),g(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,M,_):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===tn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===tn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const M=t.get(d),_=M.envMap,v=M.envMapRotation;_&&(m.envMap.value=_,Si.copy(v),Si.x*=-1,Si.y*=-1,Si.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Si.y*=-1,Si.z*=-1),m.envMapRotation.value.setFromMatrix4(hx.makeRotationFromEuler(Si)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,M,_){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*M,m.scale.value=_*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,M){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===tn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,d){d.matcap&&(m.matcap.value=d.matcap)}function g(m,d){const M=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function fx(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,_){const v=_.program;n.uniformBlockBinding(M,v)}function c(M,_){let v=s[M.id];v===void 0&&(x(M),v=h(M),s[M.id]=v,M.addEventListener("dispose",m));const y=_.program;n.updateUBOMapping(M,y);const w=t.render.frame;r[M.id]!==w&&(f(M),r[M.id]=w)}function h(M){const _=u();M.__bindingPointIndex=_;const v=i.createBuffer(),y=M.__size,w=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,y,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,v),v}function u(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const _=s[M.id],v=M.uniforms,y=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let w=0,T=v.length;w<T;w++){const R=Array.isArray(v[w])?v[w]:[v[w]];for(let S=0,b=R.length;S<b;S++){const D=R[S];if(p(D,w,S,y)===!0){const z=D.__offset,N=Array.isArray(D.value)?D.value:[D.value];let k=0;for(let H=0;H<N.length;H++){const W=N[H],j=g(W);typeof W=="number"||typeof W=="boolean"?(D.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,z+k,D.__data)):W.isMatrix3?(D.__data[0]=W.elements[0],D.__data[1]=W.elements[1],D.__data[2]=W.elements[2],D.__data[3]=0,D.__data[4]=W.elements[3],D.__data[5]=W.elements[4],D.__data[6]=W.elements[5],D.__data[7]=0,D.__data[8]=W.elements[6],D.__data[9]=W.elements[7],D.__data[10]=W.elements[8],D.__data[11]=0):(W.toArray(D.__data,k),k+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(M,_,v,y){const w=M.value,T=_+"_"+v;if(y[T]===void 0)return typeof w=="number"||typeof w=="boolean"?y[T]=w:y[T]=w.clone(),!0;{const R=y[T];if(typeof w=="number"||typeof w=="boolean"){if(R!==w)return y[T]=w,!0}else if(R.equals(w)===!1)return R.copy(w),!0}return!1}function x(M){const _=M.uniforms;let v=0;const y=16;for(let T=0,R=_.length;T<R;T++){const S=Array.isArray(_[T])?_[T]:[_[T]];for(let b=0,D=S.length;b<D;b++){const z=S[b],N=Array.isArray(z.value)?z.value:[z.value];for(let k=0,H=N.length;k<H;k++){const W=N[k],j=g(W),X=v%y,nt=X%j.boundary,ht=X+nt;v+=nt,ht!==0&&y-ht<j.storage&&(v+=y-ht),z.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=v,v+=j.storage}}}const w=v%y;return w>0&&(v+=y-w),M.__size=v,M.__cache={},this}function g(M){const _={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(_.boundary=4,_.storage=4):M.isVector2?(_.boundary=8,_.storage=8):M.isVector3||M.isColor?(_.boundary=16,_.storage=12):M.isVector4?(_.boundary=16,_.storage=16):M.isMatrix3?(_.boundary=48,_.storage=48):M.isMatrix4?(_.boundary=64,_.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),_}function m(M){const _=M.target;_.removeEventListener("dispose",m);const v=a.indexOf(_.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function d(){for(const M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:d}}class dx{constructor(t={}){const{canvas:e=Tf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const x=new Uint32Array(4),g=new Int32Array(4);let m=null,d=null;const M=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let y=!1;this._outputColorSpace=je;let w=0,T=0,R=null,S=-1,b=null;const D=new Ce,z=new Ce;let N=null;const k=new rt(0);let H=0,W=e.width,j=e.height,X=1,nt=null,ht=null;const vt=new Ce(0,0,W,j),Gt=new Ce(0,0,W,j);let se=!1;const re=new Pl;let ne=!1,$=!1;const Q=new de,gt=new I,It=new Ce,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let jt=!1;function Ne(){return R===null?X:1}let L=n;function Qt(A,F){return e.getContext(A,F)}try{const A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${xl}`),e.addEventListener("webglcontextlost",ct,!1),e.addEventListener("webglcontextrestored",Mt,!1),e.addEventListener("webglcontextcreationerror",it,!1),L===null){const F="webgl2";if(L=Qt(F,A),L===null)throw Qt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let kt,zt,yt,me,St,Vt,ye,Me,C,E,O,Y,et,q,Pt,lt,Tt,Rt,at,mt,Ot,Ct,dt,Xt;function U(){kt=new b0(L),kt.init(),Ct=new rx(L,kt),zt=new g0(L,kt,t,Ct),yt=new ix(L,kt),zt.reversedDepthBuffer&&f&&yt.buffers.depth.setReversed(!0),me=new T0(L),St=new Wg,Vt=new sx(L,kt,yt,St,zt,Ct,me),ye=new v0(v),Me=new S0(v),C=new Id(L),dt=new p0(L,C),E=new w0(L,C,me,dt),O=new R0(L,E,C,me),at=new A0(L,zt,Vt),lt=new x0(St),Y=new Vg(v,ye,Me,kt,zt,dt,lt),et=new ux(v,St),q=new qg,Pt=new Jg(kt),Rt=new d0(v,ye,Me,yt,O,p,l),Tt=new ex(v,O,zt),Xt=new fx(L,me,zt,yt),mt=new m0(L,kt,me),Ot=new E0(L,kt,me),me.programs=Y.programs,v.capabilities=zt,v.extensions=kt,v.properties=St,v.renderLists=q,v.shadowMap=Tt,v.state=yt,v.info=me}U();const ot=new cx(v,L);this.xr=ot,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const A=kt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=kt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(A){A!==void 0&&(X=A,this.setSize(W,j,!1))},this.getSize=function(A){return A.set(W,j)},this.setSize=function(A,F,G=!0){if(ot.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=A,j=F,e.width=Math.floor(A*X),e.height=Math.floor(F*X),G===!0&&(e.style.width=A+"px",e.style.height=F+"px"),this.setViewport(0,0,A,F)},this.getDrawingBufferSize=function(A){return A.set(W*X,j*X).floor()},this.setDrawingBufferSize=function(A,F,G){W=A,j=F,X=G,e.width=Math.floor(A*G),e.height=Math.floor(F*G),this.setViewport(0,0,A,F)},this.getCurrentViewport=function(A){return A.copy(D)},this.getViewport=function(A){return A.copy(vt)},this.setViewport=function(A,F,G,V){A.isVector4?vt.set(A.x,A.y,A.z,A.w):vt.set(A,F,G,V),yt.viewport(D.copy(vt).multiplyScalar(X).round())},this.getScissor=function(A){return A.copy(Gt)},this.setScissor=function(A,F,G,V){A.isVector4?Gt.set(A.x,A.y,A.z,A.w):Gt.set(A,F,G,V),yt.scissor(z.copy(Gt).multiplyScalar(X).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(A){yt.setScissorTest(se=A)},this.setOpaqueSort=function(A){nt=A},this.setTransparentSort=function(A){ht=A},this.getClearColor=function(A){return A.copy(Rt.getClearColor())},this.setClearColor=function(){Rt.setClearColor(...arguments)},this.getClearAlpha=function(){return Rt.getClearAlpha()},this.setClearAlpha=function(){Rt.setClearAlpha(...arguments)},this.clear=function(A=!0,F=!0,G=!0){let V=0;if(A){let B=!1;if(R!==null){const st=R.texture.format;B=st===El||st===wl||st===bl}if(B){const st=R.texture.type,pt=st===kn||st===Ui||st===Ys||st===Ks||st===yl||st===Sl,bt=Rt.getClearColor(),_t=Rt.getClearAlpha(),Nt=bt.r,Bt=bt.g,Dt=bt.b;pt?(x[0]=Nt,x[1]=Bt,x[2]=Dt,x[3]=_t,L.clearBufferuiv(L.COLOR,0,x)):(g[0]=Nt,g[1]=Bt,g[2]=Dt,g[3]=_t,L.clearBufferiv(L.COLOR,0,g))}else V|=L.COLOR_BUFFER_BIT}F&&(V|=L.DEPTH_BUFFER_BIT),G&&(V|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ct,!1),e.removeEventListener("webglcontextrestored",Mt,!1),e.removeEventListener("webglcontextcreationerror",it,!1),Rt.dispose(),q.dispose(),Pt.dispose(),St.dispose(),ye.dispose(),Me.dispose(),O.dispose(),dt.dispose(),Xt.dispose(),Y.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",Pn),ot.removeEventListener("sessionend",Yl),mi.stop()};function ct(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function Mt(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const A=me.autoReset,F=Tt.enabled,G=Tt.autoUpdate,V=Tt.needsUpdate,B=Tt.type;U(),me.autoReset=A,Tt.enabled=F,Tt.autoUpdate=G,Tt.needsUpdate=V,Tt.type=B}function it(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function J(A){const F=A.target;F.removeEventListener("dispose",J),wt(F)}function wt(A){Wt(A),St.remove(A)}function Wt(A){const F=St.get(A).programs;F!==void 0&&(F.forEach(function(G){Y.releaseProgram(G)}),A.isShaderMaterial&&Y.releaseShaderCache(A))}this.renderBufferDirect=function(A,F,G,V,B,st){F===null&&(F=Et);const pt=B.isMesh&&B.matrixWorld.determinant()<0,bt=Bu(A,F,G,V,B);yt.setMaterial(V,pt);let _t=G.index,Nt=1;if(V.wireframe===!0){if(_t=E.getWireframeAttribute(G),_t===void 0)return;Nt=2}const Bt=G.drawRange,Dt=G.attributes.position;let Jt=Bt.start*Nt,he=(Bt.start+Bt.count)*Nt;st!==null&&(Jt=Math.max(Jt,st.start*Nt),he=Math.min(he,(st.start+st.count)*Nt)),_t!==null?(Jt=Math.max(Jt,0),he=Math.min(he,_t.count)):Dt!=null&&(Jt=Math.max(Jt,0),he=Math.min(he,Dt.count));const Ae=he-Jt;if(Ae<0||Ae===1/0)return;dt.setup(B,V,bt,G,_t);let _e,ge=mt;if(_t!==null&&(_e=C.get(_t),ge=Ot,ge.setIndex(_e)),B.isMesh)V.wireframe===!0?(yt.setLineWidth(V.wireframeLinewidth*Ne()),ge.setMode(L.LINES)):ge.setMode(L.TRIANGLES);else if(B.isLine){let Ut=V.linewidth;Ut===void 0&&(Ut=1),yt.setLineWidth(Ut*Ne()),B.isLineSegments?ge.setMode(L.LINES):B.isLineLoop?ge.setMode(L.LINE_LOOP):ge.setMode(L.LINE_STRIP)}else B.isPoints?ge.setMode(L.POINTS):B.isSprite&&ge.setMode(L.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)js("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ge.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(kt.get("WEBGL_multi_draw"))ge.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Ut=B._multiDrawStarts,Se=B._multiDrawCounts,ae=B._multiDrawCount,on=_t?C.get(_t).bytesPerElement:1,Bi=St.get(V).currentProgram.getUniforms();for(let ln=0;ln<ae;ln++)Bi.setValue(L,"_gl_DrawID",ln),ge.render(Ut[ln]/on,Se[ln])}else if(B.isInstancedMesh)ge.renderInstances(Jt,Ae,B.count);else if(G.isInstancedBufferGeometry){const Ut=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Se=Math.min(G.instanceCount,Ut);ge.renderInstances(Jt,Ae,Se)}else ge.render(Jt,Ae)};function ve(A,F,G){A.transparent===!0&&A.side===Ie&&A.forceSinglePass===!1?(A.side=tn,A.needsUpdate=!0,lr(A,F,G),A.side=pi,A.needsUpdate=!0,lr(A,F,G),A.side=Ie):lr(A,F,G)}this.compile=function(A,F,G=null){G===null&&(G=A),d=Pt.get(G),d.init(F),_.push(d),G.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(d.pushLight(B),B.castShadow&&d.pushShadow(B))}),A!==G&&A.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(d.pushLight(B),B.castShadow&&d.pushShadow(B))}),d.setupLights();const V=new Set;return A.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const st=B.material;if(st)if(Array.isArray(st))for(let pt=0;pt<st.length;pt++){const bt=st[pt];ve(bt,G,B),V.add(bt)}else ve(st,G,B),V.add(st)}),d=_.pop(),V},this.compileAsync=function(A,F,G=null){const V=this.compile(A,F,G);return new Promise(B=>{function st(){if(V.forEach(function(pt){St.get(pt).currentProgram.isReady()&&V.delete(pt)}),V.size===0){B(A);return}setTimeout(st,10)}kt.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let le=null;function Gn(A){le&&le(A)}function Pn(){mi.stop()}function Yl(){mi.start()}const mi=new ru;mi.setAnimationLoop(Gn),typeof self<"u"&&mi.setContext(self),this.setAnimationLoop=function(A){le=A,ot.setAnimationLoop(A),A===null?mi.stop():mi.start()},ot.addEventListener("sessionstart",Pn),ot.addEventListener("sessionend",Yl),this.render=function(A,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(F),F=ot.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,F,R),d=Pt.get(A,_.length),d.init(F),_.push(d),Q.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),re.setFromProjectionMatrix(Q,On,F.reversedDepth),$=this.localClippingEnabled,ne=lt.init(this.clippingPlanes,$),m=q.get(A,M.length),m.init(),M.push(m),ot.enabled===!0&&ot.isPresenting===!0){const st=v.xr.getDepthSensingMesh();st!==null&&va(st,F,-1/0,v.sortObjects)}va(A,F,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(nt,ht),jt=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,jt&&Rt.addToRenderList(m,A),this.info.render.frame++,ne===!0&&lt.beginShadows();const G=d.state.shadowsArray;Tt.render(G,A,F),ne===!0&&lt.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=m.opaque,B=m.transmissive;if(d.setupLights(),F.isArrayCamera){const st=F.cameras;if(B.length>0)for(let pt=0,bt=st.length;pt<bt;pt++){const _t=st[pt];$l(V,B,A,_t)}jt&&Rt.render(A);for(let pt=0,bt=st.length;pt<bt;pt++){const _t=st[pt];Kl(m,A,_t,_t.viewport)}}else B.length>0&&$l(V,B,A,F),jt&&Rt.render(A),Kl(m,A,F);R!==null&&T===0&&(Vt.updateMultisampleRenderTarget(R),Vt.updateRenderTargetMipmap(R)),A.isScene===!0&&A.onAfterRender(v,A,F),dt.resetDefaultState(),S=-1,b=null,_.pop(),_.length>0?(d=_[_.length-1],ne===!0&&lt.setGlobalState(v.clippingPlanes,d.state.camera)):d=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function va(A,F,G,V){if(A.visible===!1)return;if(A.layers.test(F.layers)){if(A.isGroup)G=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(F);else if(A.isLight)d.pushLight(A),A.castShadow&&d.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||re.intersectsSprite(A)){V&&It.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Q);const pt=O.update(A),bt=A.material;bt.visible&&m.push(A,pt,bt,G,It.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||re.intersectsObject(A))){const pt=O.update(A),bt=A.material;if(V&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),It.copy(A.boundingSphere.center)):(pt.boundingSphere===null&&pt.computeBoundingSphere(),It.copy(pt.boundingSphere.center)),It.applyMatrix4(A.matrixWorld).applyMatrix4(Q)),Array.isArray(bt)){const _t=pt.groups;for(let Nt=0,Bt=_t.length;Nt<Bt;Nt++){const Dt=_t[Nt],Jt=bt[Dt.materialIndex];Jt&&Jt.visible&&m.push(A,pt,Jt,G,It.z,Dt)}}else bt.visible&&m.push(A,pt,bt,G,It.z,null)}}const st=A.children;for(let pt=0,bt=st.length;pt<bt;pt++)va(st[pt],F,G,V)}function Kl(A,F,G,V){const B=A.opaque,st=A.transmissive,pt=A.transparent;d.setupLightsView(G),ne===!0&&lt.setGlobalState(v.clippingPlanes,G),V&&yt.viewport(D.copy(V)),B.length>0&&or(B,F,G),st.length>0&&or(st,F,G),pt.length>0&&or(pt,F,G),yt.buffers.depth.setTest(!0),yt.buffers.depth.setMask(!0),yt.buffers.color.setMask(!0),yt.setPolygonOffset(!1)}function $l(A,F,G,V){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[V.id]===void 0&&(d.state.transmissionRenderTarget[V.id]=new Cn(1,1,{generateMipmaps:!0,type:kt.has("EXT_color_buffer_half_float")||kt.has("EXT_color_buffer_float")?Jn:kn,minFilter:ui,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ie.workingColorSpace}));const st=d.state.transmissionRenderTarget[V.id],pt=V.viewport||D;st.setSize(pt.z*v.transmissionResolutionScale,pt.w*v.transmissionResolutionScale);const bt=v.getRenderTarget(),_t=v.getActiveCubeFace(),Nt=v.getActiveMipmapLevel();v.setRenderTarget(st),v.getClearColor(k),H=v.getClearAlpha(),H<1&&v.setClearColor(16777215,.5),v.clear(),jt&&Rt.render(G);const Bt=v.toneMapping;v.toneMapping=fi;const Dt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),d.setupLightsView(V),ne===!0&&lt.setGlobalState(v.clippingPlanes,V),or(A,G,V),Vt.updateMultisampleRenderTarget(st),Vt.updateRenderTargetMipmap(st),kt.has("WEBGL_multisampled_render_to_texture")===!1){let Jt=!1;for(let he=0,Ae=F.length;he<Ae;he++){const _e=F[he],ge=_e.object,Ut=_e.geometry,Se=_e.material,ae=_e.group;if(Se.side===Ie&&ge.layers.test(V.layers)){const on=Se.side;Se.side=tn,Se.needsUpdate=!0,Zl(ge,G,V,Ut,Se,ae),Se.side=on,Se.needsUpdate=!0,Jt=!0}}Jt===!0&&(Vt.updateMultisampleRenderTarget(st),Vt.updateRenderTargetMipmap(st))}v.setRenderTarget(bt,_t,Nt),v.setClearColor(k,H),Dt!==void 0&&(V.viewport=Dt),v.toneMapping=Bt}function or(A,F,G){const V=F.isScene===!0?F.overrideMaterial:null;for(let B=0,st=A.length;B<st;B++){const pt=A[B],bt=pt.object,_t=pt.geometry,Nt=pt.group;let Bt=pt.material;Bt.allowOverride===!0&&V!==null&&(Bt=V),bt.layers.test(G.layers)&&Zl(bt,F,G,_t,Bt,Nt)}}function Zl(A,F,G,V,B,st){A.onBeforeRender(v,F,G,V,B,st),A.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),B.onBeforeRender(v,F,G,V,A,st),B.transparent===!0&&B.side===Ie&&B.forceSinglePass===!1?(B.side=tn,B.needsUpdate=!0,v.renderBufferDirect(G,F,V,B,A,st),B.side=pi,B.needsUpdate=!0,v.renderBufferDirect(G,F,V,B,A,st),B.side=Ie):v.renderBufferDirect(G,F,V,B,A,st),A.onAfterRender(v,F,G,V,B,st)}function lr(A,F,G){F.isScene!==!0&&(F=Et);const V=St.get(A),B=d.state.lights,st=d.state.shadowsArray,pt=B.state.version,bt=Y.getParameters(A,B.state,st,F,G),_t=Y.getProgramCacheKey(bt);let Nt=V.programs;V.environment=A.isMeshStandardMaterial?F.environment:null,V.fog=F.fog,V.envMap=(A.isMeshStandardMaterial?Me:ye).get(A.envMap||V.environment),V.envMapRotation=V.environment!==null&&A.envMap===null?F.environmentRotation:A.envMapRotation,Nt===void 0&&(A.addEventListener("dispose",J),Nt=new Map,V.programs=Nt);let Bt=Nt.get(_t);if(Bt!==void 0){if(V.currentProgram===Bt&&V.lightsStateVersion===pt)return Jl(A,bt),Bt}else bt.uniforms=Y.getUniforms(A),A.onBeforeCompile(bt,v),Bt=Y.acquireProgram(bt,_t),Nt.set(_t,Bt),V.uniforms=bt.uniforms;const Dt=V.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Dt.clippingPlanes=lt.uniform),Jl(A,bt),V.needsLights=Hu(A),V.lightsStateVersion=pt,V.needsLights&&(Dt.ambientLightColor.value=B.state.ambient,Dt.lightProbe.value=B.state.probe,Dt.directionalLights.value=B.state.directional,Dt.directionalLightShadows.value=B.state.directionalShadow,Dt.spotLights.value=B.state.spot,Dt.spotLightShadows.value=B.state.spotShadow,Dt.rectAreaLights.value=B.state.rectArea,Dt.ltc_1.value=B.state.rectAreaLTC1,Dt.ltc_2.value=B.state.rectAreaLTC2,Dt.pointLights.value=B.state.point,Dt.pointLightShadows.value=B.state.pointShadow,Dt.hemisphereLights.value=B.state.hemi,Dt.directionalShadowMap.value=B.state.directionalShadowMap,Dt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Dt.spotShadowMap.value=B.state.spotShadowMap,Dt.spotLightMatrix.value=B.state.spotLightMatrix,Dt.spotLightMap.value=B.state.spotLightMap,Dt.pointShadowMap.value=B.state.pointShadowMap,Dt.pointShadowMatrix.value=B.state.pointShadowMatrix),V.currentProgram=Bt,V.uniformsList=null,Bt}function jl(A){if(A.uniformsList===null){const F=A.currentProgram.getUniforms();A.uniformsList=Kr.seqWithValue(F.seq,A.uniforms)}return A.uniformsList}function Jl(A,F){const G=St.get(A);G.outputColorSpace=F.outputColorSpace,G.batching=F.batching,G.batchingColor=F.batchingColor,G.instancing=F.instancing,G.instancingColor=F.instancingColor,G.instancingMorph=F.instancingMorph,G.skinning=F.skinning,G.morphTargets=F.morphTargets,G.morphNormals=F.morphNormals,G.morphColors=F.morphColors,G.morphTargetsCount=F.morphTargetsCount,G.numClippingPlanes=F.numClippingPlanes,G.numIntersection=F.numClipIntersection,G.vertexAlphas=F.vertexAlphas,G.vertexTangents=F.vertexTangents,G.toneMapping=F.toneMapping}function Bu(A,F,G,V,B){F.isScene!==!0&&(F=Et),Vt.resetTextureUnits();const st=F.fog,pt=V.isMeshStandardMaterial?F.environment:null,bt=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Ms,_t=(V.isMeshStandardMaterial?Me:ye).get(V.envMap||pt),Nt=V.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Bt=!!G.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Dt=!!G.morphAttributes.position,Jt=!!G.morphAttributes.normal,he=!!G.morphAttributes.color;let Ae=fi;V.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Ae=v.toneMapping);const _e=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ge=_e!==void 0?_e.length:0,Ut=St.get(V),Se=d.state.lights;if(ne===!0&&($===!0||A!==b)){const Ye=A===b&&V.id===S;lt.setState(V,A,Ye)}let ae=!1;V.version===Ut.__version?(Ut.needsLights&&Ut.lightsStateVersion!==Se.state.version||Ut.outputColorSpace!==bt||B.isBatchedMesh&&Ut.batching===!1||!B.isBatchedMesh&&Ut.batching===!0||B.isBatchedMesh&&Ut.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Ut.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Ut.instancing===!1||!B.isInstancedMesh&&Ut.instancing===!0||B.isSkinnedMesh&&Ut.skinning===!1||!B.isSkinnedMesh&&Ut.skinning===!0||B.isInstancedMesh&&Ut.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ut.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Ut.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Ut.instancingMorph===!1&&B.morphTexture!==null||Ut.envMap!==_t||V.fog===!0&&Ut.fog!==st||Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==lt.numPlanes||Ut.numIntersection!==lt.numIntersection)||Ut.vertexAlphas!==Nt||Ut.vertexTangents!==Bt||Ut.morphTargets!==Dt||Ut.morphNormals!==Jt||Ut.morphColors!==he||Ut.toneMapping!==Ae||Ut.morphTargetsCount!==ge)&&(ae=!0):(ae=!0,Ut.__version=V.version);let on=Ut.currentProgram;ae===!0&&(on=lr(V,F,B));let Bi=!1,ln=!1,Cs=!1;const be=on.getUniforms(),pn=Ut.uniforms;if(yt.useProgram(on.program)&&(Bi=!0,ln=!0,Cs=!0),V.id!==S&&(S=V.id,ln=!0),Bi||b!==A){yt.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),be.setValue(L,"projectionMatrix",A.projectionMatrix),be.setValue(L,"viewMatrix",A.matrixWorldInverse);const en=be.map.cameraPosition;en!==void 0&&en.setValue(L,gt.setFromMatrixPosition(A.matrixWorld)),zt.logarithmicDepthBuffer&&be.setValue(L,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&be.setValue(L,"isOrthographic",A.isOrthographicCamera===!0),b!==A&&(b=A,ln=!0,Cs=!0)}if(B.isSkinnedMesh){be.setOptional(L,B,"bindMatrix"),be.setOptional(L,B,"bindMatrixInverse");const Ye=B.skeleton;Ye&&(Ye.boneTexture===null&&Ye.computeBoneTexture(),be.setValue(L,"boneTexture",Ye.boneTexture,Vt))}B.isBatchedMesh&&(be.setOptional(L,B,"batchingTexture"),be.setValue(L,"batchingTexture",B._matricesTexture,Vt),be.setOptional(L,B,"batchingIdTexture"),be.setValue(L,"batchingIdTexture",B._indirectTexture,Vt),be.setOptional(L,B,"batchingColorTexture"),B._colorsTexture!==null&&be.setValue(L,"batchingColorTexture",B._colorsTexture,Vt));const mn=G.morphAttributes;if((mn.position!==void 0||mn.normal!==void 0||mn.color!==void 0)&&at.update(B,G,on),(ln||Ut.receiveShadow!==B.receiveShadow)&&(Ut.receiveShadow=B.receiveShadow,be.setValue(L,"receiveShadow",B.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(pn.envMap.value=_t,pn.flipEnvMap.value=_t.isCubeTexture&&_t.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&F.environment!==null&&(pn.envMapIntensity.value=F.environmentIntensity),ln&&(be.setValue(L,"toneMappingExposure",v.toneMappingExposure),Ut.needsLights&&ku(pn,Cs),st&&V.fog===!0&&et.refreshFogUniforms(pn,st),et.refreshMaterialUniforms(pn,V,X,j,d.state.transmissionRenderTarget[A.id]),Kr.upload(L,jl(Ut),pn,Vt)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Kr.upload(L,jl(Ut),pn,Vt),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&be.setValue(L,"center",B.center),be.setValue(L,"modelViewMatrix",B.modelViewMatrix),be.setValue(L,"normalMatrix",B.normalMatrix),be.setValue(L,"modelMatrix",B.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Ye=V.uniformsGroups;for(let en=0,_a=Ye.length;en<_a;en++){const gi=Ye[en];Xt.update(gi,on),Xt.bind(gi,on)}}return on}function ku(A,F){A.ambientLightColor.needsUpdate=F,A.lightProbe.needsUpdate=F,A.directionalLights.needsUpdate=F,A.directionalLightShadows.needsUpdate=F,A.pointLights.needsUpdate=F,A.pointLightShadows.needsUpdate=F,A.spotLights.needsUpdate=F,A.spotLightShadows.needsUpdate=F,A.rectAreaLights.needsUpdate=F,A.hemisphereLights.needsUpdate=F}function Hu(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(A,F,G){const V=St.get(A);V.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),St.get(A.texture).__webglTexture=F,St.get(A.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:G,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,F){const G=St.get(A);G.__webglFramebuffer=F,G.__useDefaultFramebuffer=F===void 0};const Gu=L.createFramebuffer();this.setRenderTarget=function(A,F=0,G=0){R=A,w=F,T=G;let V=!0,B=null,st=!1,pt=!1;if(A){const _t=St.get(A);if(_t.__useDefaultFramebuffer!==void 0)yt.bindFramebuffer(L.FRAMEBUFFER,null),V=!1;else if(_t.__webglFramebuffer===void 0)Vt.setupRenderTarget(A);else if(_t.__hasExternalTextures)Vt.rebindTextures(A,St.get(A.texture).__webglTexture,St.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Dt=A.depthTexture;if(_t.__boundDepthTexture!==Dt){if(Dt!==null&&St.has(Dt)&&(A.width!==Dt.image.width||A.height!==Dt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Vt.setupDepthRenderbuffer(A)}}const Nt=A.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(pt=!0);const Bt=St.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Bt[F])?B=Bt[F][G]:B=Bt[F],st=!0):A.samples>0&&Vt.useMultisampledRTT(A)===!1?B=St.get(A).__webglMultisampledFramebuffer:Array.isArray(Bt)?B=Bt[G]:B=Bt,D.copy(A.viewport),z.copy(A.scissor),N=A.scissorTest}else D.copy(vt).multiplyScalar(X).floor(),z.copy(Gt).multiplyScalar(X).floor(),N=se;if(G!==0&&(B=Gu),yt.bindFramebuffer(L.FRAMEBUFFER,B)&&V&&yt.drawBuffers(A,B),yt.viewport(D),yt.scissor(z),yt.setScissorTest(N),st){const _t=St.get(A.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+F,_t.__webglTexture,G)}else if(pt){const _t=F;for(let Nt=0;Nt<A.textures.length;Nt++){const Bt=St.get(A.textures[Nt]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Nt,Bt.__webglTexture,G,_t)}}else if(A!==null&&G!==0){const _t=St.get(A.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,_t.__webglTexture,G)}S=-1},this.readRenderTargetPixels=function(A,F,G,V,B,st,pt,bt=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _t=St.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&pt!==void 0&&(_t=_t[pt]),_t){yt.bindFramebuffer(L.FRAMEBUFFER,_t);try{const Nt=A.textures[bt],Bt=Nt.format,Dt=Nt.type;if(!zt.textureFormatReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!zt.textureTypeReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=A.width-V&&G>=0&&G<=A.height-B&&(A.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+bt),L.readPixels(F,G,V,B,Ct.convert(Bt),Ct.convert(Dt),st))}finally{const Nt=R!==null?St.get(R).__webglFramebuffer:null;yt.bindFramebuffer(L.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(A,F,G,V,B,st,pt,bt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _t=St.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&pt!==void 0&&(_t=_t[pt]),_t)if(F>=0&&F<=A.width-V&&G>=0&&G<=A.height-B){yt.bindFramebuffer(L.FRAMEBUFFER,_t);const Nt=A.textures[bt],Bt=Nt.format,Dt=Nt.type;if(!zt.textureFormatReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!zt.textureTypeReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Jt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Jt),L.bufferData(L.PIXEL_PACK_BUFFER,st.byteLength,L.STREAM_READ),A.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+bt),L.readPixels(F,G,V,B,Ct.convert(Bt),Ct.convert(Dt),0);const he=R!==null?St.get(R).__webglFramebuffer:null;yt.bindFramebuffer(L.FRAMEBUFFER,he);const Ae=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Af(L,Ae,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Jt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,st),L.deleteBuffer(Jt),L.deleteSync(Ae),st}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,F=null,G=0){const V=Math.pow(2,-G),B=Math.floor(A.image.width*V),st=Math.floor(A.image.height*V),pt=F!==null?F.x:0,bt=F!==null?F.y:0;Vt.setTexture2D(A,0),L.copyTexSubImage2D(L.TEXTURE_2D,G,0,0,pt,bt,B,st),yt.unbindTexture()};const Vu=L.createFramebuffer(),Wu=L.createFramebuffer();this.copyTextureToTexture=function(A,F,G=null,V=null,B=0,st=null){st===null&&(B!==0?(js("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),st=B,B=0):st=0);let pt,bt,_t,Nt,Bt,Dt,Jt,he,Ae;const _e=A.isCompressedTexture?A.mipmaps[st]:A.image;if(G!==null)pt=G.max.x-G.min.x,bt=G.max.y-G.min.y,_t=G.isBox3?G.max.z-G.min.z:1,Nt=G.min.x,Bt=G.min.y,Dt=G.isBox3?G.min.z:0;else{const mn=Math.pow(2,-B);pt=Math.floor(_e.width*mn),bt=Math.floor(_e.height*mn),A.isDataArrayTexture?_t=_e.depth:A.isData3DTexture?_t=Math.floor(_e.depth*mn):_t=1,Nt=0,Bt=0,Dt=0}V!==null?(Jt=V.x,he=V.y,Ae=V.z):(Jt=0,he=0,Ae=0);const ge=Ct.convert(F.format),Ut=Ct.convert(F.type);let Se;F.isData3DTexture?(Vt.setTexture3D(F,0),Se=L.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Vt.setTexture2DArray(F,0),Se=L.TEXTURE_2D_ARRAY):(Vt.setTexture2D(F,0),Se=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,F.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,F.unpackAlignment);const ae=L.getParameter(L.UNPACK_ROW_LENGTH),on=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Bi=L.getParameter(L.UNPACK_SKIP_PIXELS),ln=L.getParameter(L.UNPACK_SKIP_ROWS),Cs=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,_e.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,_e.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Nt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Bt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Dt);const be=A.isDataArrayTexture||A.isData3DTexture,pn=F.isDataArrayTexture||F.isData3DTexture;if(A.isDepthTexture){const mn=St.get(A),Ye=St.get(F),en=St.get(mn.__renderTarget),_a=St.get(Ye.__renderTarget);yt.bindFramebuffer(L.READ_FRAMEBUFFER,en.__webglFramebuffer),yt.bindFramebuffer(L.DRAW_FRAMEBUFFER,_a.__webglFramebuffer);for(let gi=0;gi<_t;gi++)be&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,St.get(A).__webglTexture,B,Dt+gi),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,St.get(F).__webglTexture,st,Ae+gi)),L.blitFramebuffer(Nt,Bt,pt,bt,Jt,he,pt,bt,L.DEPTH_BUFFER_BIT,L.NEAREST);yt.bindFramebuffer(L.READ_FRAMEBUFFER,null),yt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(B!==0||A.isRenderTargetTexture||St.has(A)){const mn=St.get(A),Ye=St.get(F);yt.bindFramebuffer(L.READ_FRAMEBUFFER,Vu),yt.bindFramebuffer(L.DRAW_FRAMEBUFFER,Wu);for(let en=0;en<_t;en++)be?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,mn.__webglTexture,B,Dt+en):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,mn.__webglTexture,B),pn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ye.__webglTexture,st,Ae+en):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ye.__webglTexture,st),B!==0?L.blitFramebuffer(Nt,Bt,pt,bt,Jt,he,pt,bt,L.COLOR_BUFFER_BIT,L.NEAREST):pn?L.copyTexSubImage3D(Se,st,Jt,he,Ae+en,Nt,Bt,pt,bt):L.copyTexSubImage2D(Se,st,Jt,he,Nt,Bt,pt,bt);yt.bindFramebuffer(L.READ_FRAMEBUFFER,null),yt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else pn?A.isDataTexture||A.isData3DTexture?L.texSubImage3D(Se,st,Jt,he,Ae,pt,bt,_t,ge,Ut,_e.data):F.isCompressedArrayTexture?L.compressedTexSubImage3D(Se,st,Jt,he,Ae,pt,bt,_t,ge,_e.data):L.texSubImage3D(Se,st,Jt,he,Ae,pt,bt,_t,ge,Ut,_e):A.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,st,Jt,he,pt,bt,ge,Ut,_e.data):A.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,st,Jt,he,_e.width,_e.height,ge,_e.data):L.texSubImage2D(L.TEXTURE_2D,st,Jt,he,pt,bt,ge,Ut,_e);L.pixelStorei(L.UNPACK_ROW_LENGTH,ae),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,on),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Bi),L.pixelStorei(L.UNPACK_SKIP_ROWS,ln),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Cs),st===0&&F.generateMipmaps&&L.generateMipmap(Se),yt.unbindTexture()},this.initRenderTarget=function(A){St.get(A).__webglFramebuffer===void 0&&Vt.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Vt.setTextureCube(A,0):A.isData3DTexture?Vt.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Vt.setTexture2DArray(A,0):Vt.setTexture2D(A,0),yt.unbindTexture()},this.resetState=function(){w=0,T=0,R=null,yt.reset(),dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return On}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=ie._getUnpackColorSpace()}}class px{constructor(){this.keys=new Set,this.pressed=new Set,this.blocked=!1,window.addEventListener("keydown",t=>{if(t.repeat)return;const e=t.code;this.keys.add(e),this.pressed.add(e),["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ShiftLeft","Tab"].includes(e)&&t.preventDefault()}),window.addEventListener("keyup",t=>this.keys.delete(t.code)),window.addEventListener("blur",()=>this.keys.clear())}down(t){return!this.blocked&&this.keys.has(t)}hit(t){return!this.blocked&&this.pressed.has(t)}get throttle(){let t=0;return(this.down("KeyW")||this.down("ArrowUp"))&&(t+=1),(this.down("KeyS")||this.down("ArrowDown"))&&(t-=1),t}get steer(){let t=0;return(this.down("KeyA")||this.down("ArrowLeft"))&&(t-=1),(this.down("KeyD")||this.down("ArrowRight"))&&(t+=1),t}get boosting(){return this.down("ShiftLeft")||this.down("ShiftRight")}get firing(){return this.down("Space")||this.down("KeyJ")}endFrame(){this.pressed.clear()}}const no={x:0,z:900,heading:Math.PI},Re=[{x:20,z:760},{x:-70,z:618},{x:55,z:468},{x:75,z:318},{x:195,z:175},{x:285,z:55},{x:265,z:-165},{x:205,z:-345},{x:195,z:-455},{x:132,z:-640},{x:105,z:-802},{x:130,z:-985},{x:185,z:-1140},{x:505,z:-1208},{x:690,z:-1085},{x:765,z:-880},{x:815,z:-640},{x:735,z:-490}],Ci=26,th=Re.length-1,mx=[{id:"reef-skiff",when:{gate:4},enemies:[{type:"skiff",x:245,z:130,heading:-2.2},{type:"skiff",x:335,z:40,heading:-.6}]},{id:"dock-patrol",when:{gate:6},enemies:[{type:"gunboat",x:300,z:-120,heading:2.4},{type:"drone",x:360,z:-180,y:9}]},{id:"cave-guard",when:{gate:8},enemies:[{type:"skiff",x:150,z:-568,heading:.3}]},{id:"landing-ambush",when:{trigger:"landing"},enemies:[{type:"gunboat",x:95,z:-1005,heading:3},{type:"gunboat",x:45,z:-930,heading:2.7},{type:"drone",x:75,z:-955,y:11}],toast:"AMBUSH!"},{id:"final-gauntlet",when:{gate:13},enemies:[{type:"skiff",x:560,z:-1160,heading:-1.2},{type:"skiff",x:610,z:-1090,heading:-1.6},{type:"gunboat",x:705,z:-1055,heading:-1.9},{type:"drone",x:660,z:-1080,y:10}]}],gx=[{kind:"boost",x:40,z:520},{kind:"shield",x:-20,z:380},{kind:"double",x:60,z:430},{kind:"boost",x:250,z:120},{kind:"boost",x:320,z:-20},{kind:"shield",x:285,z:-160},{kind:"boost",x:215,z:-330},{kind:"boost",x:150,z:-470},{kind:"double",x:132,z:-620},{kind:"shield",x:108,z:-870},{kind:"boost",x:128,z:-1e3},{kind:"double",x:430,z:-1185},{kind:"boost",x:640,z:-1100},{kind:"shield",x:715,z:-1005},{kind:"boost",x:770,z:-830},{kind:"double",x:800,z:-660}],$r=[{x:232,z:105},{x:268,z:78},{x:310,z:130},{x:350,z:88},{x:155,z:55},{x:122,z:130},{x:322,z:-60},{x:350,z:-110},{x:141,z:-516},{x:172,z:-524},{x:60,z:-905},{x:170,z:-935},{x:118,z:-1095},{x:585,z:-1145},{x:705,z:-1148},{x:748,z:-985},{x:800,z:-590},{x:760,z:-500}],Pi={launchZ:-756,launchMinSpeed:16,launchUpVel:11.5,launchFwdBonus:7,landingZ:-870},io={cave:{x:195,z:-420,heading:-2.72,gate:8,label:"Cave approach"},jump:{x:145,z:-560,heading:-2.93,gate:9,label:"Sea cave → waterfall jump"},combat:{x:300,z:0,heading:-1.9,gate:5,label:"Reef combat"},finale:{x:640,z:-1130,heading:-1.2,gate:13,label:"Final gauntlet"}};function eh(i){const t=Re[Math.max(0,i-1)],e=Re[Math.min(Re.length-1,i+1)];return Math.atan2(e.x-t.x,e.z-t.z)}function xx(i,t,e,n,s,r){const a=Math.sin(t),o=Math.cos(t),l=(e-i.x)*a+(n-i.z)*o;if(!((s-i.x)*a+(r-i.z)*o<0&&l>=0))return!1;const h=(e-i.x)*o-(n-i.z)*a;return Math.abs(h)<Ci*.95}const tr=[{dx:.96,dz:.28,amp:.26,len:42,speed:1.05},{dx:-.55,dz:.84,amp:.16,len:23,speed:1.35},{dx:.72,dz:-.69,amp:.09,len:11,speed:1.9},{dx:-.18,dz:-.98,amp:.055,len:5.2,speed:2.6}];for(const i of tr)i.k=Math.PI*2/i.len;const nh=tr.reduce((i,t)=>i+t.amp,0);function Ee(i,t,e){let n=0;for(let s=0;s<tr.length;s++){const r=tr[s];n+=r.amp*Math.sin((i*r.dx+t*r.dz)*r.k+e*r.speed)}return n}function Ol(i,t,e,n){const r=Ee(i-1.4,t,e),a=Ee(i+1.4,t,e),o=Ee(i,t-1.4,e),l=Ee(i,t+1.4,e);n=n||{x:0,y:1,z:0},n.x=(r-a)/(2*1.4),n.y=1,n.z=(o-l)/(2*1.4);const c=1/Math.hypot(n.x,n.y,n.z);return n.x*=c,n.y*=c,n.z*=c,n}function hu(){let i=`float waveH(vec2 p, float t){ float h=0.0;
`;for(const t of tr)i+=`h += ${t.amp.toFixed(4)} * sin(dot(p, vec2(${t.dx.toFixed(4)}, ${t.dz.toFixed(4)})) * ${t.k.toFixed(6)} + t * ${t.speed.toFixed(4)});
`;return i+=`return h; }
`,i}function ar(i){let t=i>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function bn(i){const t=ar(i);return{rand:t,range:(e,n)=>e+(n-e)*t(),int:(e,n)=>Math.floor(e+(n-e+1)*t()),pick:e=>e[Math.floor(t()*e.length)],chance:e=>t()<e,ring:(e,n,s,r)=>{const a=t()*Math.PI*2,o=s+(r-s)*Math.sqrt(t());return[e+Math.cos(a)*o,n+Math.sin(a)*o]}}}const ee=(i,t,e)=>i<t?t:i>e?e:i,Ss=(i,t,e)=>i+(t-i)*e,Kt=(i,t,e)=>{const n=ee((e-i)/(t-i),0,1);return n*n*(3-2*n)},_n=(i,t,e,n)=>Ss(i,t,1-Math.exp(-e*n)),Bl=(i,t,e)=>{let n=(t-i)%(Math.PI*2);return n>Math.PI&&(n-=Math.PI*2),n<-Math.PI&&(n+=Math.PI*2),i+n*e},Bn=Math.PI*2,ti={size:2600,texSize:1024,seabed:-9.5},Hn=[{name:"westward",x:-470,z:350,r:320,peak:24,seed:11},{name:"startlet",x:205,z:1035,r:115,peak:9,seed:12},{name:"reefkey",x:500,z:80,r:145,peak:13,seed:13},{name:"dockisle",x:545,z:-285,r:240,peak:21,seed:14},{name:"cliffholm",x:125,z:-650,r:205,peak:66,seed:15},{name:"bayaleaf",x:395,z:-1035,r:125,peak:17,seed:16},{name:"baybread",x:600,z:-985,r:95,peak:11,seed:17},{name:"fallsrock",x:185,z:-800,r:62,peak:40,seed:23},{name:"harbornine",x:1020,z:-320,r:235,peak:19,seed:18},{name:"swwatch",x:-170,z:-1180,r:195,peak:28,seed:19},{name:"eastspur",x:860,z:720,r:160,peak:14,seed:20},{name:"farwest",x:-850,z:-230,r:210,peak:22,seed:21},{name:"northcut",x:180,z:-1330,r:150,peak:30,seed:22}],rl=[{x:240,z:160,r:60},{x:315,z:95,r:48},{x:180,z:80,r:40},{x:380,z:190,r:52},{x:260,z:40,r:44},{x:120,z:-940,r:46},{x:210,z:-1080,r:40},{x:-40,z:-900,r:55},{x:470,z:-1125,r:44},{x:620,z:-1120,r:40},{x:730,z:-1020,r:44},{x:640,z:-350,r:58},{x:760,z:-430,r:44},{x:820,z:-560,r:40},{x:100,z:560,r:50},{x:-40,z:640,r:44}],De={points:[{x:218,z:-380},{x:162,z:-498},{x:140,z:-590},{x:118,z:-690},{x:106,z:-790},{x:100,z:-845}],halfWidth:23,mouthFlare:19,floor:-5.4,lipZ:-777,lipHeight:-.55,sillStartZ:-757},uu=new Map;for(const i of Hn){const t=ar(i.seed*7919+13),e=[];for(let n=0;n<3;n++)e.push({k:2+Math.floor(t()*4),a:.015+t()*.03,ph:t()*Math.PI*2});uu.set(i,e)}function vx(i,t){let e=1;for(const n of uu.get(i))e+=n.a*Math.sin(n.k*t+n.ph);return i.r*e}function _x(i){return i-.46*2.6*Math.tanh(i/2.6)}const Ur={d:1e9,strength:0,endDist:1e9};function Mx(i,t){let e=1e9,n=1e9;const s=De.points;for(let c=0;c<s.length-1;c++){const h=s[c],u=s[c+1],f=u.x-h.x,p=u.z-h.z,x=i-h.x,g=t-h.z,m=f*f+p*p;let d=ee((x*f+g*p)/m,0,1);const M=x-f*d,_=g-p*d,v=Math.sqrt(M*M+_*_);v<e&&(e=v)}const r=s[0],a=s[s.length-1];n=Math.min(Math.hypot(i-r.x,t-r.z),Math.hypot(i-a.x,t-a.z));const o=De.halfWidth+De.mouthFlare*Kt(130,8,n),l=1-Kt(o*.62,o*1.5,e);return Ur.d=e,Ur.strength=l,Ur.endDist=n,Ur}function $t(i,t){let e=ti.seabed;for(let s=0;s<Hn.length;s++){const r=Hn[s],a=i-r.x,o=t-r.z,l=Math.sqrt(a*a+o*o);if(l>r.r*1.35)continue;const c=Math.atan2(o,a),h=vx(r,c);if(l>=h)continue;const u=1-Kt(0,1,l/h),f=r.peak*Math.pow(u,1.55);f>e&&(e=f)}for(let s=0;s<rl.length;s++){const r=rl[s],a=i-r.x,o=t-r.z,l=Math.sqrt(a*a+o*o);if(l>=r.r)continue;const c=Math.pow(1-Kt(0,1,l/r.r),1.3),h=ti.seabed+(-1.55-ti.seabed)*c;h>e&&(e=h)}e=_x(e);const n=Mx(i,t);if(n.strength>0){let s=e+(De.floor-e)*n.strength;if(t<=De.sillStartZ&&t>=De.lipZ&&n.strength>.45){const r=De.lipHeight-(De.floor-De.lipHeight)*Kt(De.lipZ,De.sillStartZ,t);r>s&&(s=r)}e=s}return e}function Zr(i,t){return-$t(i,t)}const Dn={x:0,y:1,z:0};function kl(i,t){const n=$t(i-2.5,t),s=$t(i+2.5,t),r=$t(i,t-2.5),a=$t(i,t+2.5);Dn.x=n-s,Dn.y=2*2.5,Dn.z=r-a;const o=1/Math.hypot(Dn.x,Dn.y,Dn.z);return Dn.x*=o,Dn.y*=o,Dn.z*=o,Dn}let so=null;function yx(){if(so)return so;const i=ti.texSize,t=new Float32Array(i*i);for(let n=0;n<i;n++){const s=-1300+(n+.5)/i*ti.size;for(let r=0;r<i;r++){const a=-1300+(r+.5)/i*ti.size;t[n*i+r]=$t(a,s)}}const e=new Cl(t,i,i,ua,Rn);return e.magFilter=an,e.minFilter=an,e.wrapS=e.wrapT=hi,e.needsUpdate=!0,so=e,e}const hs=new I(-.55,.58,.3).normalize(),al=new rt("#ffd9a0"),fu=new rt("#9fd0c8"),Sx=`
varying vec3 vDir;
void main() {
  vDir = normalize(position);
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_Position.z = gl_Position.w; // push to far plane
}`,bx=`
varying vec3 vDir;
uniform vec3 uSunDir;
uniform vec3 uZenith;
uniform vec3 uHorizon;
uniform vec3 uSunTint;
uniform float uTime;

float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float noise(vec2 p){
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
             mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
}
float fbm(vec2 p){
  float v = 0.0, a = 0.5;
  for (int i = 0; i < 4; i++) { v += a * noise(p); p *= 2.03; a *= 0.5; }
  return v;
}

void main() {
  vec3 d = normalize(vDir);
  float h = clamp(d.y, -0.08, 1.0);
  // gradient: warm horizon → teal-blue zenith
  vec3 sky = mix(uHorizon, uZenith, pow(clamp(h * 1.25, 0.0, 1.0), 0.62));
  // warm band hugging the horizon
  float band = exp(-abs(h) * 9.0);
  sky = mix(sky, uSunTint * 0.5, band * 0.30);
  // sun disc + glow
  float sd = dot(d, normalize(uSunDir));
  float disc = smoothstep(0.9993, 0.9997, sd);
  float glow = pow(clamp(sd, 0.0, 1.0), 18.0);
  float wideGlow = pow(clamp(sd, 0.0, 1.0), 3.0);
  sky += uSunTint * (disc * 1.6 + glow * 0.5 + wideGlow * 0.14);
  // procedural clouds — flat, stylized, drifting
  if (d.y > 0.015) {
    vec2 uv = d.xz / (d.y + 0.14);
    vec2 drift = vec2(uTime * 0.006, uTime * 0.0022);
    float c = fbm(uv * 0.42 + drift);
    c = smoothstep(0.52, 0.78, c);
    float fade = smoothstep(0.015, 0.14, d.y);           // fade at horizon
    float sunSide = clamp(dot(d, normalize(uSunDir)) * 0.5 + 0.5, 0.0, 1.0);
    vec3 cloudCol = mix(vec3(0.86, 0.90, 0.92), uSunTint * 1.06, pow(sunSide, 2.5));
    cloudCol = mix(cloudCol, vec3(0.72, 0.77, 0.80), c * 0.35); // shading in thick parts
    sky = mix(sky, cloudCol, c * fade * 0.85);
  }
  gl_FragColor = vec4(sky, 1.0);
}`;function wx(i,t,e){const n={uSunDir:{value:hs.clone()},uZenith:{value:new rt("#2a78a8")},uHorizon:{value:new rt("#b9ddd2")},uSunTint:{value:al.clone()},uTime:{value:0}},s=new tt(new sn(4e3,32,16),new Pe({vertexShader:Sx,fragmentShader:bx,uniforms:n,side:tn,depthWrite:!1,fog:!1}));s.frustumCulled=!1,s.renderOrder=-100,i.add(s),i.fog=new Rl(fu,460,2900);const r=new bd("#cfeaf0","#4a5c50",1);i.add(r);const a=new Td(al,2.9);a.position.copy(hs).multiplyScalar(300);const o=e==="high"?2048:1024;if(e!=="low"){a.castShadow=!0,a.shadow.mapSize.set(o,o),a.shadow.camera.near=50,a.shadow.camera.far=700;const c=150;a.shadow.camera.left=-c,a.shadow.camera.right=c,a.shadow.camera.top=c,a.shadow.camera.bottom=-c,a.shadow.bias=-6e-4,a.shadow.normalBias=1.2}i.add(a),i.add(a.target);const l=new Ad("#9db8c8",.3);return i.add(l),{sky:s,sun:a,uniforms:n,update(c,h,u){n.uTime.value=h;const f=Math.round(u.x/4)*4,p=Math.round(u.z/4)*4;a.position.set(f+hs.x*300,hs.y*300,p+hs.z*300),a.target.position.set(f,0,p)}}}const du=`
vec4 textureBilinear(sampler2D tex, vec2 uv, vec2 texSize) {
  vec2 coord = uv * texSize - 0.5;
  vec2 f = fract(coord);
  vec2 base = (floor(coord) + 0.5) / texSize;
  vec4 t00 = texture2D(tex, base);
  vec4 t10 = texture2D(tex, base + vec2(1.0 / texSize.x, 0.0));
  vec4 t01 = texture2D(tex, base + vec2(0.0, 1.0 / texSize.y));
  vec4 t11 = texture2D(tex, base + vec2(1.0 / texSize.x, 1.0 / texSize.y));
  return mix(mix(t00, t10, f.x), mix(t01, t11, f.x), f.y);
}`,Ex=`
uniform sampler2D uHeightTex;
uniform float uTime;
uniform float uWorldSize;
varying vec3 vWorld;
varying float vTerrainH;
varying float vWaveH;
${hu()}
${du}
float terrainAt(vec2 p) {
  vec2 uv = p / uWorldSize + 0.5;
  vec2 ts = vec2(1024.0);
  return textureBilinear(uHeightTex, uv, ts).r;
}
void main() {
  vec3 wp = (modelMatrix * vec4(position, 1.0)).xyz;
  vTerrainH = terrainAt(wp.xz);
  float depth = max(0.0, -vTerrainH);
  float shallowAtten = smoothstep(0.15, 1.8, depth);   // waves flatten onto shore
  float wh = waveH(wp.xz, uTime) * shallowAtten;
  vWaveH = wh;
  wp.y += wh;
  vWorld = wp;
  gl_Position = projectionMatrix * viewMatrix * vec4(wp, 1.0);
}`,Tx=`
precision highp float;
uniform sampler2D uHeightTex;
uniform float uTime;
uniform float uWorldSize;
uniform vec3 uSunDir;
uniform vec3 uSunColor;
uniform vec3 uFogColor;
uniform vec3 uCamPos;
uniform vec3 uSkyHorizon;
uniform vec3 uSkyZenith;
uniform float uDetail;      // 0..1 quality knob
varying vec3 vWorld;
varying float vTerrainH;
varying float vWaveH;

${hu()}
${du}
float terrainAt(vec2 p) {
  vec2 uv = p / uWorldSize + 0.5;
  vec2 ts = vec2(1024.0);
  return textureBilinear(uHeightTex, uv, ts).r;
}
float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float vnoise(vec2 p){
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
             mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
}
float fbm(vec2 p){
  float v = 0.0, a = 0.5;
  for (int i = 0; i < 4; i++) { v += a * vnoise(p); p = p * 2.13 + 17.1; a *= 0.5; }
  return v;
}
// detail normal via fbm derivatives
vec3 detailNormal(vec2 p, float t, float scale, float freq) {
  float e = 0.35;
  vec2 q = p * freq + vec2(t * 0.55, t * 0.31);
  float h0 = fbm(q);
  float hx = fbm(q + vec2(e, 0.0));
  float hz = fbm(q + vec2(0.0, e));
  return normalize(vec3(-(hx - h0) * scale / e, 1.0, -(hz - h0) * scale / e));
}

void main() {
  vec2 p = vWorld.xz;
  float depth = -vTerrainH;
  float dist = distance(uCamPos, vWorld);
  vec3 V = normalize(uCamPos - vWorld);
  // Detail normals stretch into horizontal bands at grazing angles: fade them
  // out with BOTH distance and grazing, and compensate with view-adaptive
  // frequency so near water stays lively without far-field striping.
  float grazing = clamp(dot(V, vec3(0.0, 1.0, 0.0)), 0.0, 1.0);
  float detailFade = uDetail * smoothstep(340.0, 45.0, dist) * smoothstep(0.12, 0.55, grazing);
  // ---- base normal: wave slope (finite diff, matches vertex displacement)
  float e = 1.2;
  float wh0 = waveH(p, uTime);
  float whx = waveH(p + vec2(e, 0.0), uTime);
  float whz = waveH(p + vec2(0.0, e), uTime);
  float shallowAtten = smoothstep(0.15, 1.8, max(depth, 0.0));
  vec3 N = normalize(vec3((wh0 - whx) / e * shallowAtten, 1.0, (wh0 - whz) / e * shallowAtten));
  if (detailFade > 0.001) {
    // two rotated noise fields (sheared coords) — rotation breaks the axis
    // alignment that produced parallel streak bands
    vec2 q1 = mat2(0.94, -0.34, 0.34, 0.94) * p;
    vec2 q2 = mat2(0.62, 0.78, -0.78, 0.62) * p;
    vec3 dn = detailNormal(q1, uTime, 0.05, 0.5);
    vec3 dn2 = detailNormal(q2.yx, uTime * 1.16, 0.034, 1.15);
    vec3 dn3 = detailNormal(q2 * 2.7 + q1 * 0.3, uTime * 1.5, 0.02, 2.9);
    N = normalize(N + vec3(dn.x, 0.0, dn.z) * 0.55 * detailFade
                     + vec3(dn2.x, 0.0, dn2.z) * 0.4 * detailFade
                     + vec3(dn3.x, 0.0, dn3.z) * 0.3 * detailFade * smoothstep(0.35, 0.8, grazing));
  }


  // ---- depth color ramp (layered turquoise)
  float d1 = smoothstep(0.0, 1.4, depth);
  float d2 = smoothstep(1.0, 4.5, depth);
  float d3 = smoothstep(4.0, 12.0, depth);
  float d4 = smoothstep(10.0, 26.0, depth);
  vec3 col = vec3(0.72, 0.85, 0.82);            // shore foam-tinted (kept off pure-white)
  col = mix(col, vec3(0.376, 0.847, 0.776), d1); // very shallow aqua  #60d8c6
  col = mix(col, vec3(0.086, 0.627, 0.702), d2); // shallow teal       #16a0b3
  col = mix(col, vec3(0.043, 0.373, 0.525), d3); // mid ocean          #0b5f86
  col = mix(col, vec3(0.027, 0.243, 0.373), d4); // deep               #073e5f
  // large patchy variation: two overlapping low-freq swirls (rotated) so the
  // sea reads as moving masses, not a flat colored plane
  float patchNoise = fbm(p * 0.011 + 3.7) * 0.65 + fbm(mat2(0.71, -0.71, 0.71, 0.71) * p * 0.019 + 9.1) * 0.35;
  col *= 0.90 + patchNoise * 0.17;
  // sun-side warm drift: water toward the sun picks up warmth
  float sunSide = clamp(dot(normalize(vec3(V.x, 0.0, V.z)), -normalize(vec3(uSunDir.x, 0.0, uSunDir.z))) * 0.5 + 0.5, 0.0, 1.0);
  col = mix(col, col * vec3(1.10, 1.03, 0.92), pow(sunSide, 2.0) * 0.35);
  // reef shelves: extra saturated turquoise over shallow bumps
  col = mix(col, vec3(0.22, 0.82, 0.72), (1.0 - d2) * 0.35 * smoothstep(0.3, 1.2, depth));

  vec3 L = normalize(uSunDir);

  // ---- fresnel sky reflection
  float fres = pow(clamp(1.0 - dot(N, V), 0.0, 1.0), 5.0);
  fres = 0.045 + fres * 0.85;
  vec3 R = reflect(-V, N);
  float skyMix = clamp(R.y * 1.4, 0.0, 1.0);
  vec3 skyRef = mix(uSkyHorizon, uSkyZenith, pow(skyMix, 0.8));
  float sunFace = pow(clamp(dot(R, L), 0.0, 1.0), 6.0);
  skyRef += uSunColor * sunFace * 0.5;
  col = mix(col, skyRef, fres * 0.75);

  // ---- sun specular glitter
  vec3 H = normalize(L + V);
  float spec = pow(max(dot(N, H), 0.0), 300.0);
  float glitter = pow(max(dot(N, H), 0.0), 44.0);
  // sharp animated sparkles riding the glitter lobe
  float sp1 = pow(vnoise(p * 8.0 + uTime * 2.0), 2.2);
  float sp2 = pow(vnoise(p.yx * 11.0 - uTime * 2.6), 2.2);
  float sparkle = clamp(sp1 + sp2 * 0.7, 0.0, 1.0);
  // glitter lobe kept tight + noise-gated so it never paints a solid band
  col += uSunColor * (spec * 1.7 + sparkle * glitter * 0.62 * detailFade);

  // ---- subsurface glow: waves between sun and camera glow green-teal
  float sss = pow(clamp(dot(V, -L) * 0.5 + 0.5, 0.0, 1.0), 3.0) *
              smoothstep(0.05, 0.42, vWaveH) * (1.0 - d4) * 0.22;
  col += vec3(0.10, 0.42, 0.38) * sss;

  // ---- foam
  // shore foam: two animated noise bands scaled by depth proximity
  float shoreBand = 1.0 - smoothstep(0.0, 1.45, depth);
  float fn1 = fbm(p * 0.55 + vec2(uTime * 0.22, uTime * 0.13));
  float fn2 = fbm(p * 1.35 - vec2(uTime * 0.33, uTime * 0.21));
  float fn3 = fbm(mat2(0.62, 0.78, -0.78, 0.62) * p * 2.6 + uTime * 0.17);
  float shoreFoam = smoothstep(0.42, 0.72, shoreBand * (0.72 + fn1 * 0.5));
  shoreFoam += smoothstep(0.62, 0.88, shoreBand * (0.55 + (fn2 * 0.6 + fn3 * 0.4) * 0.62)) * 0.7;
  shoreFoam = clamp(shoreFoam, 0.0, 1.0);
  // crest foam on wave tops
  float crest = smoothstep(${(nh*.42).toFixed(3)}, ${(nh*.8).toFixed(3)}, vWaveH);
  float crestFoam = crest * smoothstep(0.45, 0.75, fn2 * 0.6 + fn3 * 0.4) * 0.65;
  // white water over the launch sill & ultra shallow
  float whiteWater = smoothstep(0.7, 0.2, depth) * smoothstep(0.38, 0.68, fn1 * 0.6 + fn2 * 0.4) * 0.8;
  float foam = clamp(shoreFoam + crestFoam + whiteWater, 0.0, 1.0);
  vec3 foamCol = vec3(0.88, 0.94, 0.94) * (0.7 + 0.25 * fn2);
  col = mix(col, foamCol, foam * 0.92);
  // foam softens normals visually — pre-brighten spec handled above

  // ---- fog
  float fogF = smoothstep(460.0, 2900.0, dist);
  col = mix(col, uFogColor, fogF);

  gl_FragColor = vec4(col, 1.0);
}`;function Ax(i,t){const e=yx(),n=t==="low"?160:280,s=new dn(ti.size,ti.size,n,n);s.rotateX(-Math.PI/2);const r={uHeightTex:{value:e},uTime:{value:0},uWorldSize:{value:ti.size},uSunDir:{value:hs.clone()},uSunColor:{value:al.clone()},uFogColor:{value:fu.clone()},uCamPos:{value:new I},uSkyHorizon:{value:new rt("#b9ddd2")},uSkyZenith:{value:new rt("#2e7fa6")},uDetail:{value:t==="low"?.5:1}},a=new Pe({vertexShader:Ex,fragmentShader:Tx,uniforms:r}),o=new tt(s,a);return o.frustumCulled=!1,o.renderOrder=-10,i.add(o),{mesh:o,uniforms:r,update(l,c,h){r.uTime.value=c,r.uCamPos.value.copy(h)}}}function pu(i=44,t=1.6){const n=document.createElement("canvas");n.width=256,n.height=256;const s=n.getContext("2d");let r=1234;const a=()=>(r=r*16807%2147483647)/2147483647,o=[];for(let u=0;u<i;u++)o.push([a()*256,a()*256,16+a()*26]);const l=s.createImageData(256,256),c=l.data;for(let u=0;u<256;u++)for(let f=0;f<256;f++){let p=1e9,x=1e9;for(const[_,v,y]of o)for(let w=-256;w<=256;w+=256)for(let T=-256;T<=256;T+=256){const R=(f-_-w)**2+(u-v-T)**2,S=y*y;R<p?(x=p,p=R/S):R<x&&(x=R/S)}const g=Math.sqrt(x)-Math.sqrt(p);let m=Math.max(0,Math.min(1,(g-.04)*2.2));m=Math.pow(m,t);const d=Math.abs(Math.sin(f*12.9898+u*78.233)*43758.5453%1);m*=.78+d*.22;const M=(u*256+f)*4;c[M]=c[M+1]=c[M+2]=255,c[M+3]=Math.round(m*255)}s.putImageData(l,0,0);const h=new fa(n);return h.wrapS=h.wrapT=ia,h}const Rx=`
attribute float aAge;
varying float vAge;
varying vec2 vUv;
void main() {
  vAge = aAge; vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,Cx=`
precision highp float;
uniform sampler2D uFoam;
uniform float uTime;
uniform float uMaxA;
varying float vAge;
varying vec2 vUv;
void main() {
  // two foam samples at different scales/scrolls, coarse clumps
  float f = texture2D(uFoam, vec2(vUv.x * 3.2 - uTime * 0.28, vUv.y * 0.85)).a * 0.6
          + texture2D(uFoam, vec2(vUv.x * 6.5 + uTime * 0.16, vUv.y * 1.7 + 0.35)).a * 0.4;
  float clump = pow(f, 1.45);
  float fade = (1.0 - vAge) * (1.0 - vAge);
  float a = clump * fade * uMaxA;
  if (a < 0.30) discard;                 // hard foam edges — no smoke
  a = smoothstep(0.30, 0.85, a);
  // bright foam core, dimmer clump edges
  float across = 1.0 - abs(vUv.y * 2.0 - 1.0);
  vec3 col = mix(vec3(0.66, 0.82, 0.83), vec3(0.99, 1.0, 1.0), across * clump);
  gl_FragColor = vec4(col, a * 0.95);
}`;class ro{constructor(t,e,{maxPoints:n,baseWidth:s,widthGrow:r,life:a,spread0:o,spreadRate:l,maxA:c,uvScale:h}){this.points=[],this.maxPoints=n,this.baseWidth=s,this.widthGrow=r,this.life=a,this.spread0=o,this.spreadRate=l,this.emitAcc=0;const u=n*2;this.positions=new Float32Array(u*3),this.ages=new Float32Array(u),this.uvs=new Float32Array(u*2);const f=new pe;this.posAttr=new Te(this.positions,3),this.posAttr.setUsage(Yr),this.ageAttr=new Te(this.ages,1),this.ageAttr.setUsage(Yr),this.uvAttr=new Te(this.uvs,2),this.uvAttr.setUsage(Yr),f.setAttribute("position",this.posAttr),f.setAttribute("aAge",this.ageAttr),f.setAttribute("uv",this.uvAttr);const p=[];for(let x=0;x<n-1;x++){const g=x*2,m=(x+1)*2;p.push(g,g+1,m,g+1,m+1,m)}f.setIndex(p),f.setDrawRange(0,0),this.uniforms={uTime:{value:0},uFoam:{value:e},uMaxA:{value:c}},this.mesh=new tt(f,new Pe({vertexShader:Rx,fragmentShader:Cx,uniforms:this.uniforms,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})),this.mesh.frustumCulled=!1,this.mesh.renderOrder=2,t.add(this.mesh),this.scene=t,this.uvScale=h||1}emit(t,e,n,s){const r=Math.sin(e),a=Math.cos(e),o=t.x-r*3.3,l=t.z-a*3.3,c=a,h=-r,u=this.spread0;this.points.push({x:o+c*u,z:l+h*u,age:0}),this.points.push({x:o-c*u,z:l-h*u,age:0})}update(t,e){this.uniforms.uTime.value=e;for(const s of this.points)s.age+=t/this.life;for(;this.points.length&&(this.points[0].age>=1||this.points.length>this.maxPoints*2);)this.points.shift();const n=Math.min(this.points.length/2,this.maxPoints);for(let s=0;s<n;s++){const r=this.points[this.points.length-2-s*2],a=this.points[this.points.length-1-s*2];if(!r||!a)break;const o=s*2,l=this.baseWidth+r.age*this.widthGrow,c=a.x-r.x,h=a.z-r.z,u=Math.hypot(c,h)||1,f=-h/u,p=c/u;(r.x+a.x)/2,(r.z+a.z)/2;const x=r.x+f*l,g=r.z+p*l,m=a.x-f*l,d=a.z-p*l;this.positions[o*3]=x,this.positions[o*3+1]=Ee(x,g,e)+.045,this.positions[o*3+2]=g,this.positions[(o+1)*3]=m,this.positions[(o+1)*3+1]=Ee(m,d,e)+.045,this.positions[(o+1)*3+2]=d,this.ages[o]=r.age,this.ages[o+1]=a.age;const M=s/this.maxPoints*this.uvScale;this.uvs[o*2]=M,this.uvs[o*2+1]=.1,this.uvs[(o+1)*2]=M,this.uvs[(o+1)*2+1]=.9}this.mesh.geometry.setDrawRange(0,Math.max(0,(n-1)*6)),this.posAttr.needsUpdate=!0,this.ageAttr.needsUpdate=!0,this.uvAttr.needsUpdate=!0}dispose(){this.mesh.parent&&(this.scene.remove(this.mesh),this.mesh.geometry.dispose(),this.mesh.material.dispose(),this.mesh=null)}}class mu{constructor(t){this.scene=t;const e=pu();this.port=new ro(t,e,{maxPoints:60,baseWidth:.42,widthGrow:.5,life:8,spread0:.55,spreadRate:0,maxA:1,uvScale:2.2}),this.stbd=new ro(t,e,{maxPoints:60,baseWidth:.42,widthGrow:.5,life:8,spread0:-.55,spreadRate:0,maxA:1,uvScale:2.2}),this.wash=new ro(t,e,{maxPoints:26,baseWidth:1.15,widthGrow:.55,life:2.4,spread0:0,spreadRate:0,maxA:.62,uvScale:.9}),this.emitAcc=0,this.dead=!1}update(t,e,n,s,r){const a=r>3;if(this.emitAcc+=t,a&&this.emitAcc>.055){this.emitAcc=0;const o=Math.sin(s),l=Math.cos(s),c=n.x-o*3.3,h=n.z-l*3.3,u=l,f=-o,p=.55+r*.01;this.port.points.push({x:c+u*p,z:h+f*p,age:0}),this.port.points.push({x:c+u*(p+.28),z:h+f*(p+.28),age:.02}),this.stbd.points.push({x:c-u*p,z:h-f*p,age:0}),this.stbd.points.push({x:c-u*(p+.28),z:h-f*(p+.28),age:.02}),this.wash.points.push({x:c-u*.9,z:h-f*.9,age:0}),this.wash.points.push({x:c+u*.9,z:h+f*.9,age:0})}this.port.update(t,e),this.stbd.update(t,e),this.wash.update(t,e),!a&&this.port.points.length===0&&this.dead&&this.dispose()}dispose(){this.port.dispose(),this.stbd.dispose(),this.wash.dispose()}}class Px{constructor(t){this.uniforms={uFoam:{value:pu(36,1.8)},uTime:{value:0},uStrength:{value:0}};const e=new Pe({uniforms:this.uniforms,transparent:!0,depthWrite:!1,side:Ie,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
        uniform sampler2D uFoam; uniform float uTime; uniform float uStrength;
        varying vec2 vUv;
        void main(){
          float f = texture2D(uFoam, vec2(vUv.x * 2.4 - uTime * 0.9, vUv.y * 0.8)).a;
          float grad = smoothstep(0.0, 0.2, vUv.y) * (1.0 - smoothstep(0.5, 1.0, vUv.y));
          float a = pow(f, 1.3) * grad * uStrength;
          if (a < 0.22) discard;
          a = smoothstep(0.22, 0.7, a);
          gl_FragColor = vec4(vec3(0.93, 0.98, 1.0), a);
        }`});this.group=new xe;const n=new dn(2.8,2.4,1,4),s=new dn(5.2,.8,6,1);for(const r of[-1,1]){const a=new tt(n,e);a.rotation.x=-Math.PI/2,a.rotation.z=r*-.52,a.position.set(r*1,0,2.1),this.group.add(a);const o=new tt(s,e);o.rotation.x=-Math.PI/2,o.rotation.z=r*-.38,o.position.set(r*1.6,0,3.4),this.group.add(o)}t.add(this.group)}update(t,e,n,s,r){this.uniforms.uTime.value=e;const a=Math.min(1,Math.max(0,(r-6)/14));this.uniforms.uStrength.value=a*.95,this.group.visible=a>.02,this.group.position.set(n.x,Ee(n.x,n.z,e)+.05,n.z),this.group.rotation.y=s;const o=1+a*1.1;this.group.scale.set(1,1,o)}dispose(){this.group.parent&&(this.scene?.remove(this.group),this.group.parent.remove(this.group))}}const K={wetDeep:new rt("#4f6a66"),wetRock:new rt("#6e6157"),wetSand:new rt("#c9b489"),sand:new rt("#e6d5a3"),grassA:new rt("#5d9450"),grassB:new rt("#79ab60"),grassDry:new rt("#8fae5e"),rockWarm:new rt("#8a7767"),rockOchre:new rt("#b08a52"),rockDark:new rt("#5c5048"),strataA:new rt("#6b5a4c"),strataB:new rt("#9a8468"),wood:new rt("#7c6a58"),woodDark:new rt("#5f5044"),woodLight:new rt("#96826c"),tin:new rt("#9aa3a6"),rust:new rt("#a83a2a"),charcoal:new rt("#2e2c2e"),warn:new rt("#e8c23a"),cream:new rt("#efe3c8"),white:new rt("#f2ede2"),sail:new rt("#ff9040"),lamp:new rt("#ffe9b0"),foam:new rt("#f2fffb"),waterWhite:new rt("#f4fffc"),waterTurq:new rt("#7fded0"),fog:new rt("#bfe3e0"),distSil:new rt("#9fb4bc")},ga=new Set(["cliffholm","fallsrock","swwatch","northcut"]),li=new rt,bi=new rt,Bs=new rt,Nr=[0,0,0];function Ue(i,t){const e=Math.sin(i*127.1+t*311.7)*43758.5453;return e-Math.floor(e)}function Dx(i,t,e=0){const n=Math.floor(i),s=Math.floor(t),r=i-n,a=t-s,o=r*r*(3-2*r),l=a*a*(3-2*a),c=e*57.31,h=Ue(n+c,s),u=Ue(n+1+c,s),f=Ue(n+c,s+1),p=Ue(n+1+c,s+1);return h+(u-h)*o+(f+(p-f)*o-(h+(u-h)*o))*l}function rn(i,t,e=3,n=0){let s=0,r=.5,a=0,o=i,l=t;for(let c=0;c<e;c++)s+=r*Dx(o,l,n+c*13),a+=r,r*=.52,o=o*2.03+9.4,l=l*2.11-7.3;return s/a}function Ix(i,t){return .155*(.86+.28*rn(i*.017+9.4,t*.017-6.2,2,61))}function gu(i,t,e){const n=rn(t*.021+3.7,e*.021-1.3,2,6);return i*Ix(t,e)+n*1.15}function Lx(i,t,e){const n=gu(i,t,e);return Kt(.1,.7,n-Math.floor(n))}function Hl(i,t,e,n){const s=gu(t,e,n),r=s-Math.floor(s),a=Kt(.1,.7,r);if(Bs.copy(K.strataA).lerp(K.strataB,a),(Math.floor(s)%2+2)%2===0){const l=Kt(.5,.76,r)*(1-Kt(.78,.98,r));Bs.lerp(K.rockOchre,l*.42)}const o=.94+.12*rn(e*.05-8.1,n*.05+4.4,2,7);return i[0]=Math.min(1,Bs.r*o),i[1]=Math.min(1,Bs.g*o),i[2]=Math.min(1,Bs.b*o),i}function zx(i,t,e,n,s,r){const a=1-Math.max(0,Math.min(1,n)),o=ga.has(s),l=.42+.55*rn(i*.045,e*.045,2,1),c=1.9+1.2*rn(i*.03+11.2,e*.03+5.6,2,2),h=7.2+5.5*rn(i*.021+23.7,e*.021+17.3,2,3);li.copy(K.wetDeep).lerp(K.wetSand,Kt(-3.2,l,t)),o&&li.lerp(K.wetRock,Kt(-.5,.5,t)*.85),bi.copy(K.wetSand).lerp(K.sand,Kt(l,l+2,t)),li.lerp(bi,Kt(l-.2,l+1.6,t)),li.lerp(bi,Kt(c,c+2,t));let u=Math.max(Kt(h,h+3.5,t),Kt(.42,.58,a));o&&(u=Math.max(u,Kt(.3,.5,a)*.92,Kt(h*.72,h*1.15,t))),u>0&&(Hl(Nr,t,i,e),bi.r=Nr[0],bi.g=Nr[1],bi.b=Nr[2],li.lerp(bi,u));const f=.92+.13*rn(i*.09-4.4,e*.09+8.8,2,5),p=.96+.05*Ue(i*.83,e*.83),x=f*p;r[0]=Math.min(1,li.r*x),r[1]=Math.min(1,li.g*x),r[2]=Math.min(1,li.b*x)}function xu(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new pe;let c=0;for(let h=0;h<i.length;++h){const u=i[h];let f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in u.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in u.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[p]===void 0&&(a[p]=[]),a[p].push(u.morphAttributes[p])}if(t){let p;if(e)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(e){let h=0;const u=[];for(let f=0;f<i.length;++f){const p=i[f].index;for(let x=0;x<p.count;++x)u.push(p.getX(x)+h);h+=i[f].attributes.position.count}l.setIndex(u)}for(const h in r){const u=ih(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in a){const u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){const p=[];for(let g=0;g<a[h].length;++g)p.push(a[h][g][f]);const x=ih(p);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(x)}}return l}function ih(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){const h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const a=new t(r),o=new Te(a,e,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const u=l/e;for(let f=0,p=h.count;f<p;f++)for(let x=0;x<e;x++){const g=h.getComponent(f,x);o.setComponent(f+u,x,g)}}else a.set(h.array,l);l+=h.count*e}return s!==void 0&&(o.gpuType=s),o}const sh={};function vu(i){let t=sh[i];if(t)return t;switch(i){case"box":t=new te(1,1,1);break;case"cyl5":t=new we(1,1,1,5);break;case"cyl6":t=new we(1,1,1,6);break;case"cyl8":t=new we(1,1,1,8);break;case"cyl10":t=new we(1,1,1,10);break;case"cone5":t=new ms(1,1,5);break;case"cone6":t=new ms(1,1,6);break;case"cone8":t=new ms(1,1,8);break;case"sph6x4":t=new sn(1,6,4);break;case"sph8x5":t=new sn(1,8,5);break;case"hemi8x4":t=new sn(1,8,4,0,Math.PI*2,0,Math.PI*.5);break;case"bowl10x5":t=new sn(1,10,5,0,Math.PI*2,Math.PI*.55,Math.PI*.45);break;case"taper10":t=new we(.74,1,1,10);break;case"ico1":t=new Il(1,0);break;case"rock":t=new sn(1,10,7);break;case"ring24":t=new pa(.55,1,24);break;case"circle24":t=new rr(1,24);break;case"plane":t=new dn(1,1);break;default:throw new Error("unknown proto "+i)}return sh[i]=t,t}const Ux=new de,rh=new Ni,ah=new fn,oh=new I,lh=new I,Fr=new rt;function At(i,t,e,n={}){return ah.set(n.rx||0,n.ry||0,n.rz||0,"YXZ"),rh.setFromEuler(ah),oh.set(i,t,e),lh.set(n.sx??1,n.sy??1,n.sz??1),Ux.compose(oh,rh,lh).clone()}function Lt(i,t,e){const n=vu(i),s=n.index?n.toNonIndexed():n.clone();t&&s.applyMatrix4(t);const r=s.getAttribute("position"),a=r.count,o=new Float32Array(a*3),l=[0,0,0];if(e&&e.isColor)for(let h=0;h<a;h++)o[h*3]=e.r,o[h*3+1]=e.g,o[h*3+2]=e.b;else if(e==null||typeof e=="number"){Fr.set(e===void 0?16777215:e);for(let h=0;h<a;h++)o[h*3]=Fr.r,o[h*3+1]=Fr.g,o[h*3+2]=Fr.b}else{const h=new I,u=new I,f=new I;for(let p=0;p<a;p+=3){h.fromBufferAttribute(r,p),u.fromBufferAttribute(r,p+1),f.fromBufferAttribute(r,p+2);const x=(h.x+u.x+f.x)/3,g=(h.y+u.y+f.y)/3,m=(h.z+u.z+f.z)/3,d=u.x-h.x,M=u.y-h.y,_=u.z-h.z,v=f.x-h.x,y=f.y-h.y,w=f.z-h.z;let T=M*w-_*y,R=_*v-d*w,S=d*y-M*v;const b=1/(Math.hypot(T,R,S)||1);T*=b,R*=b,S*=b,e(x,g,m,T,R,S,l);for(let D=0;D<3;D++)o[(p+D)*3]=l[0],o[(p+D)*3+1]=l[1],o[(p+D)*3+2]=l[2]}}const c=new pe;return c.setAttribute("position",new Te(r.array,3)),c.setAttribute("color",new Te(o,3)),c}function ol(i,t,e,n,s,r,a){if(i.push(e[0],e[1],e[2],n[0],n[1],n[2],s[0],s[1],s[2]),!r){t.push(1,1,1,1,1,1,1,1,1);return}const o=(e[0]+n[0]+s[0])/3,l=(e[1]+n[1]+s[1])/3,c=(e[2]+n[2]+s[2])/3,h=n[0]-e[0],u=n[1]-e[1],f=n[2]-e[2],p=s[0]-e[0],x=s[1]-e[1],g=s[2]-e[2];let m=u*g-f*x,d=f*p-h*g,M=h*x-u*p;const _=1/(Math.hypot(m,d,M)||1);r(o,l,c,m*_,d*_,M*_,a),t.push(a[0],a[1],a[2],a[0],a[1],a[2],a[0],a[1],a[2])}function Gl(i,t){const e=new pe;return e.setAttribute("position",new Ht(i,3)),e.setAttribute("color",new Ht(t,3)),e}function Je(i){if(i.length===1)return i[0];const t=xu(i,!1);if(!t)throw new Error("mergeGeometries failed ("+i.length+" parts)");for(const e of i)e.dispose();return t}function ao(i,t,e){const n=new pe;return n.setAttribute("position",new Ht(i,3)),n.setAttribute("color",new Ht(t,3)),n.setIndex(e),n}function ch(i,t,e){const n=vu(i).clone();t&&n.applyMatrix4(t),n.deleteAttribute("normal"),n.deleteAttribute("uv");const s=n.getAttribute("position"),r=s.count,a=new Float32Array(r*3),o=[0,0,0];for(let l=0;l<r;l++)e(s.getX(l),s.getY(l),s.getZ(l),o),a[l*3]=o[0],a[l*3+1]=o[1],a[l*3+2]=o[2];return n.setAttribute("color",new Te(a,3)),n}function Nx(i,t,e){let n=1/0;for(let s=0;s<e.length-1;s++){const r=e[s],a=e[s+1],o=a.x-r.x,l=a.z-r.z,c=o*o+l*l||1;let h=((i-r.x)*o+(t-r.z)*l)/c;h=h<0?0:h>1?1:h;const u=i-(r.x+o*h),f=t-(r.z+l*h),p=Math.sqrt(u*u+f*f);p<n&&(n=p)}return n}function _u(i,t,e,n,s){const r=i/2,a=e/2,o=[-r,0,-a],l=[r,0,-a],c=[r,0,a],h=[-r,0,a],u=[-r,t,0],f=[r,t,0],p=[[h,c,f],[h,f,u],[l,o,u],[l,u,f],[o,h,u],[c,l,f]],x=[],g=[],m=[0,0,0],d=new I;for(const M of p){const _=M.map(v=>(d.set(v[0],v[1],v[2]).applyMatrix4(n),[d.x,d.y,d.z]));ol(x,g,_[0],_[1],_[2],s,m)}return Gl(x,g)}const Mu=new Map;for(const i of Hn){const t=ar(i.seed*7919+13),e=[];for(let n=0;n<3;n++)e.push({k:2+Math.floor(t()*4),a:.015+t()*.03,ph:t()*Math.PI*2});Mu.set(i,e)}function Fx(i,t){let e=1;for(const n of Mu.get(i))e+=n.a*Math.sin(n.k*t+n.ph);return i.r*e}const ll=new Map;for(const i of Hn){const t=ar(i.seed*6121+5);if(ga.has(i.name)){const s=[];for(let r=0;r<5;r++)s.push({ang:r/5*Math.PI*2+(t()-.5)*(Math.PI*2/5)*.7,w:.2+t()*.12,amp:i.peak*(.26+t()*.22)});ll.set(i,{lobes:s})}else{const n=i.r<110?8:i.r<130?7:8,s=t()*Math.PI*2,r=ee((16-i.peak)/7,0,1),a=ee((200-i.r)/105,0,1),o=ee((170-i.r)/75,0,1),l=.44-.06*a,c=[],h=[];for(let g=0;g<n;g++)c.push(g/n*Math.PI*2+(t()-.5)*(Math.PI*2/n)*.4);c.sort((g,m)=>Math.abs(Math.atan2(Math.sin(g-s),Math.cos(g-s)))-Math.abs(Math.atan2(Math.sin(m-s),Math.cos(m-s))));const u=i.r<110?[1,.7,.9,.62,.86,.6,.8,.58]:i.r<130?[1,.68,.9,.62,.86,.6,.8]:[1,.7,.88,.64,.94,.68,.82,.58];for(let g=0;g<n;g++){const m=c[g],d=l+(g%2?.04:-.04)+(t()-.5)*.03,M=i.peak*Math.min(1.06,(u[g]+.08*t())*(.9+.16*Math.cos(m-s))+.1*r*(1-g/(n-1))),_=i.peak*Math.pow(1-Kt(0,1,d),1.55),v=i.peak*(.25+.14*o)*(1-Kt(.32,.55,d));h.push({ang:m,w:Math.min((i.r<130?.3:.2)+t()*.08,44/(d*i.r)),dPk:d,wR:Math.min(.09+t()*.05,26/i.r),amp:ee(M-_+v,i.peak*.1,i.peak*.95)})}const f=[];for(let g=0;g<n;g++){let m=c[(g+1)%n]-c[g];m=Math.atan2(Math.sin(m),Math.cos(m)),f.push({ang:c[g]+m*.5+(t()-.5)*.1,w:(i.r<130?.16:.13)+t()*.07,dIn:.12+t()*.05,dOut:.72+t()*.1})}const p=[],x=2+Math.floor(t()*2);for(let g=0;g<x;g++){const m=(g+.5)/x*Math.PI*2+(t()-.5)*1.2;p.push({d:.46+t()*.06,wA:.3+t()*.16,wR:.16+t()*.08,amp:i.peak*(.16+t()*.09)*(1+.4*Math.cos(m-s))})}ll.set(i,{lobes:h,ravines:f,knolls:p,bold:s,sf2:o})}}const yu=new Map;{const i=Hn.find(e=>e.name==="cliffholm"),t=ar(1519);yu.set(i,De.points.filter((e,n)=>n===1||n===De.points.length-2).map(e=>({ang:Math.atan2(e.z-i.z,e.x-i.x),w:.42+t()*.14})))}const Ox={high:18,medium:13,low:9},Bx={high:1,medium:.72,low:.5},kx=1.17;function Hx(i){const t=[];for(const e of Hn)t.push(Gx(e,i));return t}function Gx(i,t){const e=Ox[t]||18,n=Bx[t]||1,s=Math.max(36,Math.min(192,2*Math.round((40+i.r*.42)*n/2))),r=new Float32Array(e+1);for(let g=1;g<=e;g++){const m=g/e;r[g]=kx*(.52*m+.48*(1-Math.pow(1-m,1.65)))}const a=1+e*s,o=new Float32Array(a*3),l=new Float32Array(a);{const g=$t(i.x,i.z);o[0]=i.x,o[1]=g,o[2]=i.z,l[0]=g}for(let g=1;g<=e;g++)for(let m=0;m<s;m++){const d=m/s*Math.PI*2,M=r[g]*Fx(i,d),_=i.x+Math.cos(d)*M,v=i.z+Math.sin(d)*M,y=$t(_,v),w=(g-1)*s+1+m;o[w*3]=_,o[w*3+2]=v,l[w]=y,o[w*3+1]=y}const c=ga.has(i.name);for(let g=0;g<a;g++){const m=l[g],d=c?Kt(2.5,10.5,m):Kt(2.5,3.6,m);d<=0||(o[g*3+1]=m+d*Vx(i,o[g*3],o[g*3+2],m))}const h=[];for(let g=0;g<s;g++)h.push(0,1+(g+1)%s,1+g);for(let g=1;g<e;g++)for(let m=0;m<s;m++){const d=(m+1)%s,M=(g-1)*s+1+m,_=(g-1)*s+1+d,v=g*s+1+m,y=g*s+1+d;h.push(M,_,y,M,y,v)}const u=new pe;u.setAttribute("position",new Te(o,3)),u.setIndex(h),u.computeVertexNormals();const f=u.getAttribute("normal"),p=new Float32Array(a*3),x=[0,0,0];for(let g=0;g<a;g++)zx(o[g*3],o[g*3+1],o[g*3+2],f.getY(g),i.name,x),p[g*3]=x[0],p[g*3+1]=x[1],p[g*3+2]=x[2];return u.setAttribute("color",new Te(p,3)),u}function Vx(i,t,e,n){let s=.12+.88*Kt(30,55,Nx(t,e,De.points));if(i.name==="fallsrock"){const M=Math.exp(-Math.pow((e+803)/13,2)),_=Kt(112,128,t)*(1-Kt(166,184,t));s*=1-.92*M*_}else i.name==="swwatch"&&(s*=.1+.9*Kt(20,42,Math.hypot(t+170,e+1180)));const r=ga.has(i.name),a=r?4.5+.05*i.peak:1.6,o=t+22*(rn(t*.014+7.1,e*.014-3.3,2,11)-.5),l=e+22*(rn(t*.014-5.9,e*.014+2.7,2,12)-.5);let c=0,h=.5,u=0,f=o*.016,p=l*.016;for(let M=0;M<4;M++)c+=h*(1-Math.abs(2*rn(f,p,1,21+M*7)-1)),u+=h,h*=.52,f*=2.07,p*=2.07;c/=u;let x=a*(1.15*c-.35);const g=Math.hypot(t-i.x,e-i.z),m=Math.atan2(e-i.z,t-i.x),d=ll.get(i);if(r){const M=Kt(i.r*.1,i.r*.4,g);if(M>0){let _=0;for(const v of d.lobes){let y=m-v.ang;if(y=Math.atan2(Math.sin(y),Math.cos(y)),y>-v.w&&y<v.w){const w=Math.cos(y/v.w*Math.PI*.5),T=w*w;T>_&&(_=T)}}x+=M*(_*(i.peak*.52)-i.peak*.06);for(const v of yu.get(i)||[]){let y=m-v.ang;if(y=Math.atan2(Math.sin(y),Math.cos(y)),y>-v.w&&y<v.w){const w=Math.cos(y/v.w*Math.PI*.5);x-=i.peak*.2*M*w*w}}}}else{const M=Kt(i.r*.1,i.r*.22,g);if(M>0){let _=0;for(const y of d.lobes){let w=m-y.ang;if(w=Math.atan2(Math.sin(w),Math.cos(w)),w>-y.w&&w<y.w){const T=(g/i.r-y.dPk)/y.wR;if(T>-1&&T<1){const R=Math.cos(w/y.w*Math.PI*.5)*Math.cos(T*Math.PI*.5),S=R*R*y.amp;S>_&&(_=S)}}}let v=0;for(const y of d.ravines){let w=m-y.ang;if(w=Math.atan2(Math.sin(w),Math.cos(w)),w>-y.w&&w<y.w){const T=Math.cos(w/y.w*Math.PI*.5),R=Kt(y.dIn*i.r,(y.dIn+.14)*i.r,g)*(1-Kt((y.dOut-.14)*i.r,y.dOut*i.r,g)),S=T*T*R*Math.min(y.amp,n*.55);S>v&&(v=S)}}x+=M*(_-v);for(const y of d.knolls){let w=m-y.ang;if(w=Math.atan2(Math.sin(w),Math.cos(w)),w>-y.wA&&w<y.wA){const T=(g/i.r-y.d)/y.wR;if(T>-1&&T<1){const R=Math.cos(w/y.wA*Math.PI*.5)*Math.cos(T*Math.PI*.5);x+=M*y.amp*R*R}}}}x-=i.peak*(.25+.14*d.sf2)*(1-Kt(i.r*.32,i.r*.55,g)),x+=i.peak*.12*(1-.45*d.sf2)*Math.cos(m-d.bold)*(1-Kt(i.r*.15,i.r*.5,g))}if(r){const M=9.5+3.5*rn(t*.008-9.3,e*.008+4.1,1,31),_=.16*(rn(t*.031+31.7,e*.031-17.4,2,32)-.5),v=n/M+_,y=Math.floor(v),w=v-y,T=(y+Kt(.52,.86,w))*M,R=Kt(3.5,12,n);x+=ee(T-n,-5.5,4.5)*R}return s*x}const us=24,jr=28,Di=3,ds=2,Wx=5,Su=new rt("#ffe6bd"),oo=new rt("#9c8670"),rs=K.strataA.clone().lerp(Su,.66),lo=K.strataB.clone().lerp(Su,.66);function Xx(){const i=bn(4451),t=De.points,e=t[0],n=t[t.length-1],s=[];for(let M=0;M<t.length-1;M++){const _=t[M],v=t[M+1],y=Math.hypot(v.x-_.x,v.z-_.z),w=Math.max(1,Math.round(y/Wx));for(let T=0;T<w;T++){const R=T/w;s.push({x:_.x+(v.x-_.x)*R,z:_.z+(v.z-_.z)*R,tx:(v.x-_.x)/y,tz:(v.z-_.z)/y})}}const r=t[t.length-1],a=t[t.length-2],o=Math.hypot(r.x-a.x,r.z-a.z);s.push({x:r.x,z:r.z,tx:(r.x-a.x)/o,tz:(r.z-a.z)/o});const l=[];for(const M of s){const _=M.tz,v=-M.tx,y=$t(M.x+_*(us-3),M.z+v*(us-3)),w=$t(M.x-_*(us-3),M.z-v*(us-3));Math.min(y,w)>-.4&&l.push(M)}if(l.length<2)return[];const c=l.map((M,_)=>Kx(M,qx(l,_))),h=jr+1+2*Di,u=h+2*ds,f=co();for(let M=0;M<l.length;M++){const _=c[M].prof;for(let v=0;v<h;v++)Yx(f,l[M],c[M],_[v][0],_[v][1])}for(let M=0;M<l.length-1;M++)for(let _=0;_<h-1;_++){const v=M*h+_,y=v+1,w=(M+1)*h+_,T=w+1;f.idx.push(v,y,T,v,T,w)}const p=$x(f),x=co();for(let M=0;M<l.length;M++){const _=c[M].outer;for(let v=0;v<u;v++)ho(x,l[M],_[v][0],_[v][1],"mass",0)}for(let M=0;M<l.length-1;M++)for(let _=0;_<u-1;_++){const v=M*u+_,y=v+1,w=(M+1)*u+_,T=w+1;x.idx.push(v,y,T,v,T,w)}const g=hh(x),m=[ao(f.pos,p,f.idx),ao(x.pos,g,x.idx)];for(const M of[0,l.length-1]){const _=co(),v=c[M];for(let y=0;y<h;y++){const w=v.prof[y],T=v.outer[y+ds];ho(_,l[M],w[0],w[1],"cap",y/(h-1)),ho(_,l[M],T[0],T[1],"cap",y/(h-1))}for(let y=0;y<h-1;y++){const w=y*2,T=w+1,R=w+2,S=w+3;M===0?_.idx.push(w,S,T,T,S,R):_.idx.push(w,T,S,T,R,S)}m.push(ao(_.pos,hh(_),_.idx))}for(const M of[0,l.length-1]){const _=l[M],v=Math.min(Math.hypot(_.x-e.x,_.z-e.z),Math.hypot(_.x-n.x,_.z-n.z)),y=us+10*Kt(130,8,v),w=6+Math.floor(i.rand()*2);for(let T=0;T<w;T++){const R=T%2===0?1:-1,S=y*(1.06+i.rand()*.22),b=(i.rand()-.5)*12,D=_.x+_.tz*S*R+_.tx*b,z=_.z-_.tx*S*R+_.tz*b,N=2.2+i.rand()*2.8,k=$t(D,z);if(!(k<.25)&&(m.push(ch("rock",At(D,k+N*.12,z,{ry:i.rand()*6.28,sx:N*(.85+i.rand()*.4),sy:N*(.5+i.rand()*.25),sz:N*(.85+i.rand()*.4)}),uh)),i.rand()<.6)){const H=N*(.4+i.rand()*.3),W=D+(i.rand()-.5)*N*1.4,j=z+(i.rand()-.5)*N*1.4,X=$t(W,j);X>.25&&m.push(ch("rock",At(W,X+H*.14,j,{ry:i.rand()*6.28,sx:H,sy:H*.7,sz:H}),uh))}}}const d=Je(m);return d.computeVertexNormals(),[d]}function qx(i,t){let e=0;for(let n=1;n<=t;n++)e+=Math.hypot(i[n].x-i[n-1].x,i[n].z-i[n-1].z);return e}function co(){return{pos:[],idx:[],aux:[]}}function Yx(i,t,e,n,s){const r=t.tz,a=-t.tx;i.pos.push(t.x+r*n,s,t.z+a*n),i.aux.push({px:n,R:e.R,mouthDist:e.mouthDist})}function ho(i,t,e,n,s,r){const a=t.tz,o=-t.tx;i.pos.push(t.x+a*e,n,t.z+o*e),i.aux.push({px:e,py:n,kind:s,a1:r})}function Kx(i,t){const e=Math.min(Math.hypot(i.x-De.points[0].x,i.z-De.points[0].z),Math.hypot(i.x-De.points[De.points.length-1].x,i.z-De.points[De.points.length-1].z)),n=us+10,s=16.6,r=2.1,a=r-(s-r),o=_=>rn(t*.055,_*.45,2,41),l=[],c=_=>{const v=i.tz,y=-i.tx,w=$t(i.x+v*(n+6)*_,i.z+y*(n+6)*_);return ee(w-1,-7,-1.4)},h=c(-1),u=c(1);for(let _=Di;_>=1;_--){const v=1-_/(Di+1);l.push([-(n+_*2.6),h+(r-h)*v])}for(let _=0;_<=jr;_++){const v=-Math.PI/2+Math.PI*_/jr,y=o(v),w=Math.sin(v)*n*(1+.05*y),T=r+(s-r)*Math.cos(v)+.65*y*Math.pow(Math.cos(v),2);l.push([w,T])}for(let _=1;_<=Di;_++){const v=1-_/(Di+1);l.push([n+_*2.6,u+(r-u)*v])}const f=i.tz,p=-i.tx,x=(_,v)=>3.8+2.8*rn(t*.13+_*.05,v*.06,2,43)+4.5,g=_=>$t(i.x+f*_,i.z+p*_)-1.5,m=[],d=l[0];for(let _=ds;_>=1;_--){const v=d[0]-(1.8+_*2.2);m.push([v,d[1]+(g(v)-d[1])*(1-_/(ds+1))])}for(let _=0;_<l.length;_++){const[v,y]=l[_];if(_>=Di&&_<=Di+jr){const w=y-a,T=1+x(v,y)/Math.max(1,Math.hypot(v,w));m.push([v*T,a+w*T])}else{const w=v<0?-1:1;m.push([v+w*(1.8+x(v,y)*.5),y])}}const M=l[l.length-1];for(let _=1;_<=ds;_++){const v=M[0]+(1.8+_*2.2);m.push([v,M[1]+(g(v)-M[1])*(_/(ds+1))])}return{prof:l,outer:m,endDist:e,mouthDist:e,R:n}}function Vl(i,t){const e=Kt(.7,-.6,t)*.8;i[0]=i[0]*(1-e)+oo.r*e,i[1]=i[1]*(1-e)+oo.g*e,i[2]=i[2]*(1-e)+oo.b*e}function $x(i){const t=new Float32Array(i.pos.length);for(let e=0;e<i.aux.length;e++){const n=i.aux[e],s=i.pos[e*3],r=i.pos[e*3+1],a=i.pos[e*3+2],o=Lx(r,s*.3,a*.3);let l=rs.r+(lo.r-rs.r)*o,c=rs.g+(lo.g-rs.g)*o,h=rs.b+(lo.b-rs.b)*o;const u=.8+.28*o;l*=u,c*=u,h*=u;const f=[l,c,h];Vl(f,r);let x=1-.22*Kt(n.R*.72,n.R*.18,Math.abs(n.px));x*=.18+.82*Kt(110,35,n.mouthDist),f[0]*=x,f[1]*=x,f[2]*=x,t[e*3]=f[0],t[e*3+1]=f[1],t[e*3+2]=f[2]}return t}function hh(i){const t=.5*(K.strataA.r+K.strataB.r),e=.5*(K.strataA.g+K.strataB.g),n=.5*(K.strataA.b+K.strataB.b),s=new Float32Array(i.pos.length);for(let r=0;r<i.aux.length;r++){const a=i.aux[r],o=i.pos[r*3],l=i.pos[r*3+1],c=i.pos[r*3+2],h=[0,0,0];Hl(h,l,o,c),h[0]+=(t-h[0])*.22,h[1]+=(e-h[1])*.22,h[2]+=(n-h[2])*.22,Vl(h,l);let f=.92+.16*Ue(o*.7,c*.7);a.kind==="cap"&&(f*=.5+.5*Kt(0,.45,a.a1)),s[r*3]=Math.min(1,h[0]*f),s[r*3+1]=Math.min(1,h[1]*f),s[r*3+2]=Math.min(1,h[2]*f)}return s}function uh(i,t,e,n){Hl(n,t,i*.5,e*.5),Vl(n,t);const s=.92+.16*Ue(i,e);n[0]*=s,n[1]*=s,n[2]*=s}const Zx=`
attribute float aMist;
uniform float uTime;
varying vec2 vUv;
varying float vMist;
void main() {
  vUv = uv;
  vMist = aMist;
  vec3 p = position;
  if (aMist < 0.5) {
    p.z += sin(uv.y * 9.0 - uTime * 3.1) * 0.22 * uv.y;
  } else {
    p.y += sin(uv.x * 3.4 + uTime * 1.15) * 0.55;
  }
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
}`,jx=`
uniform float uTime;
uniform vec3 uColA;
uniform vec3 uColB;
varying vec2 vUv;
varying float vMist;
float vhash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123); }
float vnoise(vec2 p){
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(vhash(i), vhash(i + vec2(1.0, 0.0)), u.x),
             mix(vhash(i + vec2(0.0, 1.0)), vhash(i + vec2(1.0, 1.0)), u.x), u.y);
}
void main() {
  float a;
  vec3 col;
  if (vMist < 0.5) {
    float flow = vUv.y * 6.5 + uTime * 2.7;
    float n = vnoise(vec2(vUv.x * 5.0, flow));
    n = 0.62 * n + 0.38 * vnoise(vec2(vUv.x * 13.0, flow * 1.9 + 31.7));
    float edge = smoothstep(0.0, 0.14, vUv.x) * smoothstep(1.0, 0.86, vUv.x);
    a = (0.55 + 0.5 * n) * edge * mix(1.0, 0.7, vUv.y);
    col = mix(uColA, uColB, clamp(n * 0.95 - 0.12, 0.0, 1.0));
  } else {
    float m = vnoise(vec2(vUv.x * 2.6 + uTime * 0.13, vUv.y * 1.8 - uTime * 0.42));
    a = smoothstep(0.38, 0.95, m) * sin(vUv.y * 3.14159) * 0.3;
    col = mix(uColA, uColB, 0.45);
  }
  gl_FragColor = vec4(col, a);
}`;function Jx(){const i=bn(8821),t=-803,e=$t(185,t);let n=175;for(let _=184;_>=120;_--)if($t(_,t)<e*.76){n=_;break}const s=$t(n,t)+1.4;let r=n-6;for(let _=n;_>=110;_--)if($t(_,t)<.7){r=_-1.5;break}const a=10,o=[];for(let _=0;_<=a;_++){const v=_/a,y=n+(r-n)*v-Math.sin(v*Math.PI)*1.4-.7,w=s+(-.5-s)*Math.pow(v,1.06),T=4.4+3.4*Math.pow(v,.75),R=t+Math.sin(v*Math.PI)*.6;o.push({x:y,y:w,zl:R-T,zr:R+T,t:v})}const l=[],c=[],h=[];for(let _=0;_<a;_++){const v=o[_],y=o[_+1];l.push(v.x,v.y,v.zl,y.x,y.y,y.zl,v.x,v.y,v.zr),l.push(v.x,v.y,v.zr,y.x,y.y,y.zl,y.x,y.y,y.zr);for(let w=0;w<2;w++)c.push(0,v.t,0,y.t,1,v.t,1,v.t,0,y.t,1,y.t),h.push(0,0,0,0,0,0)}const u=4;for(let _=0;_<u;_++){const v=9+i.rand()*6,y=5+i.rand()*3,w=new dn(v,y).toNonIndexed();w.applyMatrix4(At(r-1.5-i.rand()*3,.9+i.rand()*2.2,t+(i.rand()-.5)*9,{ry:i.rand()*Math.PI,rz:(i.rand()-.5)*.3}));const T=w.getAttribute("position"),R=T.count;for(let S=0;S<R;S++)l.push(T.getX(S),T.getY(S),T.getZ(S)),c.push(w.getAttribute("uv").getX(S),w.getAttribute("uv").getY(S)),h.push(1);w.dispose()}const f=new pe;f.setAttribute("position",new Ht(l,3)),f.setAttribute("uv",new Ht(c,2)),f.setAttribute("aMist",new Ht(h,1));const p=new Pe({vertexShader:Zx,fragmentShader:jx,uniforms:{uTime:{value:0},uColA:{value:K.waterWhite.clone()},uColB:{value:K.waterTurq.clone()}},transparent:!0,depthWrite:!1,side:Ie}),x=new tt(f,p);x.renderOrder=3,x.frustumCulled=!1;const g=[Lt("ring24",At(r-1,.42,t,{rx:-Math.PI/2,sx:21,sy:12,sz:1}),K.foam),Lt("circle24",At(r-6,.4,t+5,{rx:-Math.PI/2,sx:6,sy:3.6,sz:1}),K.foam),Lt("circle24",At(r+2,.4,t-6,{rx:-Math.PI/2,sx:5,sy:3.2,sz:1}),K.foam)],m=new Qe({color:16777215,transparent:!0,opacity:.55,depthWrite:!1}),d=new tt(Je(g),m);return d.renderOrder=2,{mesh:x,foam:d,update:(_,v)=>{p.uniforms.uTime.value=v,m.opacity=.4+.18*Math.sin(v*1.7);const y=1+Math.sin(v*1.3)*.035;d.scale.set(y,1,y)},crest:{x:n,y:s},base:{x:r,z:t}}}const xa=(i,t,e)=>.9+.2*Ue(i*e,t*e),ks=(i,t,e,n,s,r,a)=>{const l=Math.sin(i*2.1+e*.9)>.55?K.woodLight:K.wood,c=xa(i,e,3.1);a[0]=Math.min(1,l.r*c),a[1]=Math.min(1,l.g*c),a[2]=Math.min(1,l.b*c)},uo=(i,t,e,n,s,r,a)=>{const o=t<.15?K.wetRock:K.woodDark,l=xa(i,e,5.7);a[0]=Math.min(1,o.r*l),a[1]=Math.min(1,o.g*l),a[2]=Math.min(1,o.b*l)},fh=(i,t,e,n,s,r,a)=>{const o=Math.sin(i*4.3+e*3.7)>.3?K.woodLight:K.wood,l=xa(i,e,7.3);a[0]=Math.min(1,o.r*l),a[1]=Math.min(1,o.g*l),a[2]=Math.min(1,o.b*l)},Qx=(i,t,e,n,s,r,a)=>{const o=Math.abs(t/1.15%1)-.5,l=Math.abs(o)<.09?K.woodDark:K.wood,c=xa(i,e,4.9);a[0]=Math.min(1,l.r*c),a[1]=Math.min(1,l.g*c),a[2]=Math.min(1,l.b*c)},tv=(i,t,e,n,s,r,a)=>{const o=Math.sin((i+e)*7)*.07;a[0]=Math.min(1,K.tin.r*(1+o)),a[1]=Math.min(1,K.tin.g*(1+o)),a[2]=Math.min(1,K.tin.b*(1+o))};function Or(i,t,e){const n=Math.cos(i),s=Math.sin(i);return[t*n+e*s,-t*s+e*n]}function fo(i,t,e,n){let s=e-i,r=n-t;const a=Math.hypot(s,r)||1;s/=a,r/=a;let o=i+s*20,l=t+r*20;for(let c=20;c<420&&!($t(i+s*c,t+r*c)<.5);c+=3)o=i+s*c,l=t+r*c;return{x:o,z:l,dx:s,dz:r}}function ev(i,t){const e=bn(7001),n=[],s=[],r=[],a={},o=g=>n.push(g),l=(g,m,d,M,_,v,y,w)=>o(Lt("box",At(M,_,v,{ry:y,sx:g,sy:m,sz:d}),w)),c=(g,m,d,M,_,v,y=0)=>o(Lt("cyl8",At(d,M,_,{ry:y,sx:g,sy:m,sz:g}),v));function h(g,m,d,M,_,v){const y=Math.sin(d),w=Math.cos(d);o(Lt("box",At(g,v-.28,m,{ry:d,sx:M,sy:.55,sz:_}),(b,D,z,N,k,H,W)=>{if(ks(b,D,z,N,k,H,W),k<.6)return;(((b-g)*y+(z-m)*w)%.62+.62)%.62<.07&&(W[0]*=.72,W[1]*=.72,W[2]*=.72)}));const T=M/2-1.1,R=_/2-1.6,S=T>2?[-T,0,T]:[-T,T];for(const b of S)for(const D of[-R,0,R]){const[z,N]=Or(d,b,D),k=$t(g+z,m+N);if(k>v-.6)continue;const H=Math.min(k-1,v-3),W=v-.5-H;c(.34,W,g+z,H+W/2,m+N,uo)}}function u(g,m,d,M,_=1.15){l(_,_,_,g,m+_/2,d,M,fh)}function f(g,m,d){c(.55,1.15,g,m+.575,d,Qx)}function p(g,m,d){o(Lt("bowl10x5",At(g,.3,m,{ry:d,sx:.95,sy:.62,sz:2.35}),ks)),o(Lt("bowl10x5",At(g,.26,m,{ry:d,sx:.74,sy:.5,sz:2}),K.woodDark));for(const M of[-.75,.7]){const[_,v]=Or(d,0,M);l(1.75,.09,.38,g+_,.62,m+v,d,ks)}}function x(g,m,d,M,_){c(.09,M,g,m+M/2,d,uo),s.push(nv(g,m+M-.5,d,_+.4,i.flag,e))}{const g=fo(1020,-320,735,-490),m=Math.atan2(g.dx,g.dz),d=g.x+g.dx*22,M=g.z+g.dz*22;h(d,M,m,18,32,2.35);const _=(nt,ht)=>{const[vt,Gt]=Or(m,nt,ht);return[d+vt,M+Gt]},[v,y]=_(-7,-2);l(5.6,3,4.6,v,2.35+1.5,y,m,ks),o(_u(6.8,1.6,5.8,At(v,2.35+3,y,{ry:m}),tv));const[w,T]=_(-4.5,-.2);l(1.15,2.05,.18,w,2.35+1.02,T,m,K.charcoal);const[R,S]=_(-8.7,-1.2);l(.14,.85,1.1,R,2.35+1.7,S,m,K.cream);const[b,D]=_(1.5,11);c(.28,8.6,b,2.35+4.3,D,uo);const z=2.35+8.6;o(Lt("box",At(b,z+1.1,D+2.9,{rx:-.38,sx:.3,sy:.3,sz:7.4}),ks));const N=b+Math.sin(.38)*5.9,k=D+Math.cos(.38)*5.9;c(.05,2.7,N,z+.05,k,K.charcoal),l(1.4,1.4,1.4,N,z-1.7,k,.4,fh);for(const nt of[-2.2,-.6]){const[ht,vt]=_(-6.4,nt);o(Lt("box",At(ht,2.35+.75,vt,{ry:m,sx:.85,sy:1.5,sz:.62}),(Gt,se,re,ne,$,Q,gt)=>{const It=se>3.55?K.warn:K.rust;gt[0]=It.r,gt[1]=It.g,gt[2]=It.b}))}const[H,W]=_(-7.6,8.5);x(H,2.35,W,7.2,m);for(let nt=0;nt<5;nt++){const[ht,vt]=_(-8+e.rand()*6,-12+e.rand()*20);u(ht,2.35,vt,e.rand()*1.2,.9+e.rand()*.5)}for(const nt of[[-4.5,-12],[-3.2,-13.2],[-5.4,-13.6]]){const[ht,vt]=_(nt[0],nt[1]);f(ht,2.35,vt)}const[j,X]=_(5.5,21.5);p(j,X,m+1.2),r.push({x:d,z:M,r:30}),a.harbor={x:d,z:M,dx:g.dx,dz:g.dz,ry:m}}{const g=fo(545,-285,265,-165),m=Math.atan2(g.dx,g.dz),d=g.x+g.dx*6.5,M=g.z+g.dz*6.5;h(d,M,m,3.4,17,2.05);const _=g.x+g.dx*13.5,v=g.z+g.dz*13.5,y=m+Math.PI/2;h(_,v,y,9.5,3.4,2.05);const w=(N,k)=>{const[H,W]=Or(y,N,k);return[_+H,v+W]};for(const N of[[-3,.4],[2.4,-.8],[3.2,.9]]){const[k,H]=w(N[0],N[1]);u(k,2.05,H,e.rand()*1.5,.9+e.rand()*.4)}const[T,R]=w(-1.2,-.6);f(T,2.05,R);const[S,b]=[g.x+g.dx*17+g.dz*4,g.z+g.dz*17-g.dx*4];p(S,b,m-.9);const[D,z]=[g.x-g.dx*2.5,g.z-g.dz*2.5];x(D,$t(D,z),z,5.4,m),r.push({x:d,z:M,r:18}),a.dockisle={x:d,z:M,dx:g.dx,dz:g.dz,ry:m}}{const g=fo(-470,350,0,900),m=Math.atan2(g.dx,g.dz),d=g.x+g.dx*5,M=g.z+g.dz*5;h(d,M,m,3.2,13,2);const _=g.x+g.dx*10.5,v=g.z+g.dz*10.5;h(_,v,m+Math.PI/2,6.5,3.2,2),f(_+Math.cos(m)*1.6,2,v+Math.sin(m)*1.6),u(_-Math.cos(m)*1.8,2,v-Math.sin(m)*1.8,.4);const[y,w]=[g.x+g.dx*14+g.dz*3.5,g.z+g.dz*14-g.dx*3.5];p(y,w,m+1.4),r.push({x:d,z:M,r:14}),a.westward={x:d,z:M,dx:g.dx,dz:g.dz,ry:m}}return{geoms:n,flags:s,zones:r,anchors:a}}function nv(i,t,e,n,s,r){const a=new dn(2.5,1.5,8,4);a.translate(1.25,-.75,0);const o=a.getAttribute("position"),l=a.getAttribute("uv"),c=new Float32Array(o.count*3);for(let u=0;u<o.count;u++){const f=l.getY(u)<.34?K.cream:K.sail;c[u*3]=f.r,c[u*3+1]=f.g,c[u*3+2]=f.b}a.setAttribute("color",new Te(c,3));const h=new tt(a,s);return h.position.set(i,t,e),h.rotation.y=n,h.userData.dynamic=!0,{mesh:h,phase:r.rand()*6.28,base:o.array.slice(0)}}function iv(i){const t=i.mesh.geometry.getAttribute("position");return(e,n)=>{const s=t.array,r=i.base;for(let a=0;a<s.length;a+=3){const o=r[a],l=o/2.5;s[a+2]=Math.sin(o*2.1-n*6.3+i.phase)*.24*l+Math.sin(o*3.9-n*4.1+i.phase*2)*.07*l}t.needsUpdate=!0}}function sv(i){const t=bn(3311),e=$r.length,n=[Lt("sph8x5",null,(g,m,d,M,_,v,y)=>{const T=Ue(g*2.3,d*2.3)>.62?K.rust:K.charcoal,R=.85+.3*Ue(g*5.1,d*5.1);y[0]=Math.min(1,T.r*R),y[1]=Math.min(1,T.g*R),y[2]=Math.min(1,T.b*R)})];for(let g=0;g<8;g++){const m=g/8*Math.PI*2+t.rand()*.3;n.push(Lt("cone5",At(Math.sin(m)*1.28,(t.rand()-.5)*.5,Math.cos(m)*1.28,{rz:-m,sx:.26,sy:1.05,sz:.26}),K.charcoal))}const s=new Ec(Je(n),i.mine,e);s.castShadow=!0,s.frustumCulled=!1;const r=new Ec(new sn(.32,8,6),i.blink,e);r.frustumCulled=!1,r.instanceColor=new zn(new Float32Array(e*3).fill(.2),3);const a=[];for(let g=0;g<e;g++){const m=$r[g],d=$t(m.x,m.z),M=-.4,_=Math.min(d-.4,-1.6),v=Math.max(.8,M-_);a.push(Lt("cyl6",At(m.x,_+v/2,m.z,{sx:.09,sy:v,sz:.09}),(y,w,T,R,S,b,D)=>{const z=w<-1.2?K.rust:K.woodDark;D[0]=z.r,D[1]=z.g,D[2]=z.b}))}const o=new tt(Je(a),i.props);o.castShadow=!0;const l=new de,c=new Ni,h=new fn,u=new I,f=new I(1,1,1),p=new rt,x=(g,m)=>{for(let d=0;d<e;d++){const M=$r[d],_=Ee(M.x,M.z,m),v=Ee(M.x+1.4,M.z,m)-Ee(M.x-1.4,M.z,m),y=Ee(M.x,M.z+1.4,m)-Ee(M.x,M.z-1.4,m);u.set(M.x,.1+_*.85,M.z),h.set(y*.16,0,-v*.16,"YXZ"),c.setFromEuler(h),l.compose(u,c,f),s.setMatrixAt(d,l),u.y+=1.62,l.compose(u,c,f),r.setMatrixAt(d,l);const w=Math.sin(m*2.3+d*1.71)*4-2.6,T=w<0?0:w>1?1:w;p.setRGB(.15+.85*T,.03+.1*(1-T),.02+.06*(1-T)),r.setColorAt(d,p)}s.instanceMatrix.needsUpdate=!0,r.instanceMatrix.needsUpdate=!0,r.instanceColor&&(r.instanceColor.needsUpdate=!0)};return x(0,0),{objects:[s,r,o],update:x}}const dh=["#c98a7a","#c9a15e","#5fa8a0","#8a7f9e","#b0655a"].map(i=>new rt(i));function rv(i){const t=i==="low"?.55:i==="medium"?.8:1,e=[];for(const n of rl){const s=bn(n.x*73+n.z*131|0),r=Math.max(3,Math.round((6+s.int(0,4))*t));for(let a=0;a<r;a++){const o=s.rand()*Math.PI*2,l=n.r*.72*Math.sqrt(s.rand()),c=n.x+Math.cos(o)*l,h=n.z+Math.sin(o)*l,u=$t(c,h);if(u>-.6)continue;const f=dh[s.int(0,dh.length-1)],p=s.rand();p<.4?av(e,s,c,u,h,f):p<.72?ov(e,s,c,u,h,f):lv(e,s,c,u,h,f)}}return[Je(e)]}function gs(i,t=1){return(e,n,s,r,a,o,l)=>{const c=(.86+.28*Ue(e*6.1,s*6.1))*t;l[0]=Math.min(1,i.r*c),l[1]=Math.min(1,i.g*c),l[2]=Math.min(1,i.b*c)}}function av(i,t,e,n,s,r){const a=.5+t.rand()*.55;i.push(Lt("hemi8x4",At(e,n+.04,s,{ry:t.rand()*6.28,sx:a,sy:a*.55,sz:a*(.8+t.rand()*.3)}),gs(r)))}function ov(i,t,e,n,s,r){i.push(Lt("cyl5",At(e,n+.28,s,{sx:.16,sy:.56,sz:.16}),gs(r,.8)));const a=3+t.int(0,2);for(let o=0;o<a;o++){const l=o/a*Math.PI*2+t.rand(),c=.5+t.rand()*.5,h=.4+t.rand()*.35;i.push(Lt("cyl5",At(e+Math.sin(l)*.16,n+.5+h*.32,s+Math.cos(l)*.16,{ry:l,rx:c,sx:.1,sy:h,sz:.1}),gs(r))),i.push(Lt("cone5",At(e+Math.sin(l)*.34,n+.5+h*.75,s+Math.cos(l)*.34,{ry:l,rx:c,sx:.09,sy:.28,sz:.09}),gs(r,1.12)))}}function lv(i,t,e,n,s,r){i.push(Lt("cyl6",At(e,n+.25,s,{sx:.15,sy:.5,sz:.15}),gs(r,.8)));const a=.7+t.rand()*.6;i.push(Lt("cyl8",At(e,n+.52,s,{ry:t.rand()*6.28,sx:a,sy:.12,sz:a*(.75+t.rand()*.35)}),gs(r)))}const Br=-4;function cv(i){const t=i==="low"?6:8;let e=null;for(let n=0;n<8&&!e;n++){const s=bn(99173+n*7919),r=[],a=[];let o=!0;for(let l=0;l<t;l++){const c=l/t*Math.PI*2+s.range(-.2,.2);let h=0,u=0,f=0,p=0,x=-1e9;for(let R=0;R<96;R++){const S=1080+s.rand()*150,b=c+R*(Math.PI*2/96),D=Math.cos(b)*S,z=Math.sin(b)*S;let N=1e9;for(const k of Hn)N=Math.min(N,Math.hypot(D-k.x,z-k.z)-k.r-240);for(const k of a)N=Math.min(N,Math.hypot(D-k.x,z-k.z)-480);if(N>x&&(x=N,f=D,p=z),N>=0){f=D,p=z;break}}h=f,u=p,x<0&&(o=!1),a.push({x:h,z:u});const g=.55+s.rand()*.2,m=new rt(0).copy(K.distSil).lerp(K.fog,g),d=34+s.rand()*30,M=95+s.rand()*65,_=s.rand()*Math.PI*2,v=[],y=R=>(S,b,D,z,N,k,H)=>{const W=(b-Br)/d,j=(.86+.16*Math.max(0,Math.min(1,W)))*(.96+.07*Math.sin(S*.37+D*.41+l*2.3));H[0]=Math.min(1,m.r*j*R),H[1]=Math.min(1,m.g*j*R),H[2]=Math.min(1,m.b*j*R)};v.push(Lt("hemi8x4",At(h,Br,u,{ry:s.rand()*6.28,sx:M*.72,sy:.1*d,sz:M*.72*(.85+s.rand()*.3)}),y(1)));const w=8+(s.rand()<.5?1:0),T=["sph6x4","hemi8x4","ico1"];for(let R=0;R<w;R++){const S=R===0?d:d*(R%2?.52+s.rand()*.12:.7+s.rand()*.13),b=_+R/w*Math.PI*2+(s.rand()-.5)*.7,D=M*(R%2?.62+s.rand()*.2:.42+s.rand()*.16),z=h+Math.cos(b)*D,N=u+Math.sin(b)*D,k=R===0?"sph6x4":T[1+R%2],H=M*(.1+s.rand()*.04),W=k==="hemi8x4"?Br:Br+S/2,j=k==="hemi8x4"?S:S/2;v.push(Lt(k,At(z,W,N,{ry:s.rand()*6.28,sx:H,sy:j,sz:H*(.78+s.rand()*.3)}),y(R===0?1.04:.97+s.rand()*.06)))}r.push(Je(v))}(o||n===7)&&(e=Je(r))}return[e]}const hv={westward:38,farwest:24,dockisle:20,harbornine:26,eastspur:15,bayaleaf:12,baybread:8,startlet:12,reefkey:14};function uv(i,t){const e=i==="high"?1:i==="medium"?.66:.38,n=[];for(const s of Hn){const r=hv[s.name];if(!r)continue;const a=Math.max(4,Math.round(r*e)),o=bn(s.seed*7717+3);let l=0;for(let c=0;c<a*14&&l<a;c++){const[h,u]=o.ring(s.x,s.z,s.r*.1,s.r*.8),f=$t(h,u);if(f<2.4||f>10.5||kl(h,u).y<.86)continue;let p=!1;for(const x of t)if(Math.hypot(h-x.x,u-x.z)<x.r){p=!0;break}p||(n.push(dv(h,f,u,o)),l++)}}return n.length?[Je(n)]:[]}const fv={r:0,g:0,b:0};function dv(i,t,e,n){const s=[],r=[],a=4.6+n.rand()*2.8,o=.14+n.rand()*.22,l=n.rand()*Math.PI*2,c=Math.sin(l),h=Math.cos(l),u=l;let f=i,p=t-1.2,x=e;const g=4,m=a/g;for(let _=0;_<g;_++){const v=o*((_+.7)/g),y=.26-.11*(_/g);s.push(...ph("cyl5",At(f,p+m*.5*Math.cos(v),x,{ry:u,rx:v,sx:y,sy:m+.25,sz:y}))),f+=c*m*Math.sin(v),x+=h*m*Math.sin(v),p+=m*Math.cos(v)}pv(s,r,t,p);const d=7;for(let _=0;_<d;_++){const v=_/d*Math.PI*2+n.rand()*.5;gv(s,r,f,p,x,v,2.3+n.rand()*1.1,.5+n.rand()*.35)}const M=s.length;for(let _=0;_<3;_++){const v=n.rand()*Math.PI*2;s.push(...ph("sph6x4",At(f+Math.sin(v)*.3,p-.25,x+Math.cos(v)*.3,{sx:.2,sy:.2,sz:.2})))}return mv(s,r,M/3,K.woodDark.r,K.woodDark.g*.9,K.woodDark.b*.7),Gl(s,r)}function ph(i,t){const e=Lt(i,t,16777215),n=Array.from(e.getAttribute("position").array);return e.dispose(),n}function pv(i,t,e,n){const s=i.length/3;for(let r=0;r<s;r++){const a=(i[r*3+1]-e)/Math.max(.01,n-e);t.push(K.woodDark.r+(K.woodLight.r-K.woodDark.r)*a,K.woodDark.g+(K.woodLight.g-K.woodDark.g)*a,K.woodDark.b+(K.woodLight.b-K.woodDark.b)*a)}}function mv(i,t,e,n,s,r){const a=i.length/3;for(let o=Math.max(0,Math.floor(e));o<a;o++)t.push(n,s,r)}function gv(i,t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r),h=(x,g,m)=>[e+x*l+m*c,n+g,s-x*c+m*l],u=4;let f=null,p=null;for(let x=0;x<=u;x++){const g=x/u,m=a*g,d=-o*a*g*g,M=.4*(1-g*.82)+.05,_=h(m,d,-M),v=h(m,d,M);if(x>0){const y=fv;y.r=K.grassB.r+(K.grassDry.r-K.grassB.r)*g*.7,y.g=K.grassB.g+(K.grassDry.g-K.grassB.g)*g*.7,y.b=K.grassB.b+(K.grassDry.b-K.grassB.b)*g*.7,i.push(f[0],f[1],f[2],p[0],p[1],p[2],_[0],_[1],_[2]),i.push(p[0],p[1],p[2],v[0],v[1],v[2],_[0],_[1],_[2]);for(let w=0;w<6;w++)t.push(y.r,y.g,y.b)}f=_,p=v}}function xv(i,t,e,n){const s=bn(515),r=[],a=[],o=[],l={sailboats:[],markers:[],umbrellas:0,towels:0,rockClusters:0,floats:0,gullCircles:0};return vv(r,a,o,t),t!=="low"&&(_v(r,s,e,n),yv(a,o,i.gull),l.gullCircles=cl.length,Ev(r,s,t,l),Rv(r,l),Pv(r,s,l),Uv(r,s,n,l)),{geoms:r,objects:a,updaters:o,meta:l}}function vv(i,t,e,n){let s=-170,r=-1180,a=-1e9;for(let f=-35;f<=35;f+=3)for(let p=-35;p<=35;p+=3){const x=$t(-170+f,-1180+p);x>a&&(a=x,s=-170+f,r=-1180+p)}const o=a-1,l=f=>i.push(f);if(l(Lt("taper10",At(s,o+6.5,r,{sx:2.7,sy:13,sz:2.7}),(f,p,x,g,m,d,M)=>{const _=Math.floor((p-o)/2.6)%2===0?K.cream:K.rust,v=.94+.12*Ue(f*3,x*3);M[0]=Math.min(1,_.r*v),M[1]=Math.min(1,_.g*v),M[2]=Math.min(1,_.b*v)})),l(Lt("cyl10",At(s,o+13.2,r,{sx:3,sy:.5,sz:3}),K.charcoal)),l(Lt("cyl8",At(s,o+14.4,r,{sx:1.55,sy:1.9,sz:1.55}),(f,p,x,g,m,d,M)=>{const _=Math.atan2(f-s,x-r),y=Math.abs(Math.sin(_*4))<.22?K.charcoal:K.lamp;M[0]=y.r,M[1]=y.g,M[2]=y.b})),l(Lt("cone8",At(s,o+16.1,r,{sx:2,sy:1.5,sz:2}),K.rust)),l(Lt("box",At(s,o+1.1,r+2.62,{sx:1.1,sy:2.2,sz:.2}),K.charcoal)),n==="low")return;const c=Je([Lt("cone6",At(-20,0,0,{rz:-Math.PI/2,sx:4.2,sy:40,sz:4.2}),16773840),Lt("cone6",At(20,0,0,{rz:Math.PI/2,sx:4.2,sy:40,sz:4.2}),16773840),Lt("sph8x5",null,16771494)]),h=new Qe({color:16772548,transparent:!0,opacity:.16,blending:jn,depthWrite:!1,side:Ie,fog:!1}),u=new tt(c,h);u.position.set(s,o+14.4,r),u.renderOrder=4,t.push(u),e.push((f,p)=>{u.rotation.y=p*.5})}function _v(i,t,e,n){const s=[],r=n.harbor||{x:880,z:-430,dx:-.86,dz:-.51};for(const o of[-1,1])s.push({x:r.x-r.dx*26+r.dz*o*22,z:r.z-r.dz*26-r.dx*o*22});const a=n.dockisle;a&&s.push({x:a.x-a.dx*9+a.dz*8,z:a.z-a.dz*9-a.dx*8});for(const o of s){const l=$t(o.x,o.z);l<1.5||(Mv(i,o.x,l,o.z,t.rand()*Math.PI*2),e.push({x:o.x,z:o.z,r:9}))}}function Mv(i,t,e,n,s){const r=h=>i.push(h),a=(h,u,f,p,x,g,m)=>{const M=Math.sin(h*2.4+f*1.8)>.4?K.woodLight:K.wood,_=.9+.2*Ue(h*3.7,f*3.7);m[0]=Math.min(1,M.r*_),m[1]=Math.min(1,M.g*_),m[2]=Math.min(1,M.b*_)},o=(h,u,f,p,x,g,m)=>{const d=Math.sin((h+f)*6.5)*.08;m[0]=Math.min(1,K.tin.r*(1+d)),m[1]=Math.min(1,K.tin.g*(1+d)),m[2]=Math.min(1,K.tin.b*(1+d))},l=Math.cos(s),c=Math.sin(s);for(const[h,u]of[[-1.6,-1.3],[1.6,-1.3],[-1.6,1.3],[1.6,1.3]]){const f=t+h*l+u*c,p=n-h*c+u*l,x=$t(f,p),g=Math.max(2,e-x+2.1);r(Lt("cyl5",At(f,x-1.5+g/2,p,{sx:.18,sy:g,sz:.18}),K.woodDark))}r(Lt("box",At(t,e+1.55,n,{ry:s,sx:4,sy:2.7,sz:3.4}),a)),r(_u(5,1.5,4.4,At(t,e+2.9,n,{ry:s}),o)),r(Lt("box",At(t+c*1.76,e+1,n+l*1.76,{ry:s,sx:.9,sy:1.8,sz:.14}),K.charcoal)),r(Lt("box",At(t-c*1.76+l*.8,e+1.7,n-l*1.76-c*.8,{ry:s,sx:.1,sy:.7,sz:.9}),K.cream))}const cl=[{x:860,z:-440,r:55,y:17},{x:125,z:-890,r:65,y:15},{x:350,z:-210,r:48,y:12},{x:0,z:830,r:42,y:11},{x:172,z:-468,r:46,y:17},{x:250,z:120,r:58,y:13}];function yv(i,t,e){for(let n=0;n<cl.length;n++){const s=cl[n],r=Sv(e);i.push(r);const a={cx:s.x,cz:s.z,r:s.r,y:s.y,sp:.22+n*.05,ph:n*2.1,tips:bv(r)};t.push((o,l)=>{const c=l*a.sp+a.ph;r.position.set(a.cx+Math.cos(c)*a.r,a.y+Math.sin(l*.37+a.ph)*3.5,a.cz+Math.sin(c)*a.r*.75),r.rotation.y=Math.atan2(-Math.sin(c)*a.r,Math.cos(c)*a.r*.75),r.rotation.z=.32;const h=Math.sin(l*6.2+a.ph*3)*.55,u=r.geometry.getAttribute("position");for(const f of a.tips)u.setY(f,h);u.needsUpdate=!0})}}function Sv(i){const t=[],e=[],n=Lt("sph6x4",At(0,0,0,{sx:.4,sy:.3,sz:.95}),K.white),s=n.getAttribute("position");for(let c=0;c<s.count;c++)t.push(s.getX(c),s.getY(c),s.getZ(c)),e.push(K.white.r,K.white.g,K.white.b);n.dispose();const r=.06,a=[[[.3,r,.26],[.3,r,-.26],[1.45,0,-.42],[1.45,0,.02]],[[-.3,r,.26],[-.3,r,-.26],[-1.45,0,.02],[-1.45,0,-.42]]];for(const c of a)for(const h of[c[0],c[1],c[2],c[1],c[3],c[2]])t.push(h[0],h[1],h[2]),e.push(K.white.r*.92,K.white.g*.92,K.white.b*.92);const o=new pe;o.setAttribute("position",new Ht(t,3)),o.setAttribute("color",new Ht(e,3));const l=new tt(o,i);return l.userData.dynamic=!0,l}function bv(i){const t=i.geometry.getAttribute("position"),e=[];for(let n=0;n<t.count;n++)Math.abs(t.getX(n))>1&&e.push(n);return e}const wv=[{x:-180,z:640,ry:.7},{x:300,z:-315,ry:2.4},{x:430,z:-1190,ry:-1.2}];function Ev(i,t,e,n){const s=e==="high"?3:2;for(let r=0;r<s;r++){const a=wv[r];$t(a.x,a.z)>-2.5||(Tv(i,t,a.x,a.z,a.ry,r),n.sailboats.push({x:a.x,z:a.z}))}}function Tv(i,t,e,n,s,r){const a=v=>i.push(v),o=Math.cos(s),l=Math.sin(s),c=(v,y)=>[e+v*o+y*l,n-v*l+y*o],h=(v,y,w,T,R,S,b)=>{const D=.92+.12*Ue(v*2.3,w*2.3),z=y<.05?K.rust:K.white;b[0]=Math.min(1,z.r*D),b[1]=Math.min(1,z.g*D),b[2]=Math.min(1,z.b*D)};a(Lt("bowl10x5",At(e,.34,n,{ry:s,sx:1.5,sy:1,sz:4.7}),h)),a(Lt("bowl10x5",At(e,.28,n,{ry:s,sx:1.18,sy:.85,sz:4}),K.woodDark)),a(Lt("box",At(e,.68,n,{ry:s,sx:1.25,sy:.1,sz:4.2}),(v,y,w,T,R,S,b)=>{const D=K.woodLight,z=.9+.16*Ue(v*3.1,w*3.1);b[0]=Math.min(1,D.r*z),b[1]=Math.min(1,D.g*z),b[2]=Math.min(1,D.b*z)}));const[u,f]=c(0,-1.3);a(Lt("box",At(u,1.12,f,{ry:s,sx:1.15,sy:.85,sz:1.8}),K.cream)),a(Lt("cyl8",At(e,5.2,n,{sx:.09,sy:9.6,sz:.09}),K.woodLight));const[p,x]=c(0,-1.7);a(Lt("box",At(p,1.62,x,{ry:s,sx:.07,sy:.07,sz:3.2}),K.woodLight));const g=r===2?K.sail:K.cream,m=mh(3,7.2,.55,g);m.applyMatrix4(At(e,1.7,n,{ry:s+Math.PI/2})),a(m);const d=mh(2.1,5,-.4,K.cream);d.applyMatrix4(At(e,.8,n,{ry:s-Math.PI/2})),a(d);const[M,_]=c(3.4,-.5);a(Lt("sph8x5",At(M,.16,_,{sx:.38,sy:.3,sz:.38}),K.rust))}function mh(i,t,e,n){const s=[],r=[],a=[0,0,0],o=(u,f,p,x,g,m,d)=>{const M=.94+.1*Ue(u*6.1,p*2.3);d[0]=Math.min(1,n.r*M),d[1]=Math.min(1,n.g*M),d[2]=Math.min(1,n.b*M)},l=[0,0,0],c=[i,0,e],h=[0,t,e*.55];return ol(s,r,l,c,h,o,a),ol(s,r,l,h,[0,t*.9,e*.5],o,a),Gl(s,r)}const Av=[{x:258,z:128},{x:222,z:102},{x:302,z:71},{x:268,z:39}];function Rv(i,t){Av.forEach((e,n)=>{const r=$t(e.x,e.z),a=2.9-(r-.5),o=n%2===0?K.rust:K.cream;i.push(Lt("cyl5",At(e.x,r-.5+a/2,e.z,{sx:.14,sy:a,sz:.14}),K.woodDark)),i.push(Lt("cyl5",At(e.x,2.9-.35,e.z,{sx:.2,sy:.7,sz:.2}),o)),i.push(Lt("box",At(e.x+.42,2.9-.18,e.z,{sx:.84,sy:.5,sz:.04}),o)),i.push(Lt("box",At(e.x,2.9+.12,e.z,{sx:.06,sy:.5,sz:.06}),K.charcoal)),t.markers.push({x:e.x,z:e.z})})}const Cv=[{cx:-470,cz:350,tx:-70,tz:618},{cx:545,cz:-285,tx:265,tz:-165},{cx:395,cz:-1035,tx:185,tz:-1140}];function Pv(i,t,e){for(const n of Cv){const s=Dv(n.cx,n.cz,n.tx,n.tz);if(!s)continue;const[r,a]=po(s,(t.rand()-.5)*8,2+t.rand()*3);if(gh(r,a)){Iv(i,t,r,$t(r,a),a),e.umbrellas++;for(let c=0;c<2;c++){const[h,u]=po(s,(t.rand()-.5)*12,4+t.rand()*5);gh(h,u)&&(Lv(i,t,h,$t(h,u),u),e.towels++)}}const[o,l]=po(s,-6-t.rand()*5,1+t.rand()*6);$t(o,l)>.4&&(zv(i,t,o,l),e.rockClusters++)}}function Dv(i,t,e,n){let s=e-i,r=n-t;const a=Math.hypot(s,r)||1;s/=a,r/=a;let o=-1;for(let l=30;l<460;l+=4)if($t(i+s*l,t+r*l)<=2){o=l;break}if(o<0)return null;for(let l=o;l>o-40;l-=1)if($t(i+s*l,t+r*l)>=.9)return{x:i+s*l,z:t+r*l,dx:s,dz:r};return null}const gh=(i,t)=>{const e=$t(i,t);return e>.5&&e<2.4};function po(i,t,e){return[i.x-i.dz*t+i.dx*e,i.z+i.dx*t+i.dz*e]}function Iv(i,t,e,n,s){const r=[K.rust,K.sail,K.cream],a=r[Math.floor(t.rand()*r.length)];i.push(Lt("cyl5",At(e,n+1.2,s,{sx:.07,sy:2.4,sz:.07}),K.woodLight)),i.push(Lt("cone8",At(e,n+2.45,s,{rx:.1,rz:-.14,sx:1.75,sy:.75,sz:1.75}),(o,l,c,h,u,f,p)=>{const x=.9+.18*Ue(o*4.1,c*4.1);p[0]=Math.min(1,a.r*x),p[1]=Math.min(1,a.g*x),p[2]=Math.min(1,a.b*x)}))}function Lv(i,t,e,n,s){const r=[K.sail,K.cream,K.waterTurq],a=r[Math.floor(t.rand()*r.length)];i.push(Lt("box",At(e,n+.07,s,{ry:t.rand()*3.14,sx:1.4,sy:.05,sz:2.2}),(o,l,c,h,u,f,p)=>{const g=Math.sin((o+c)*5.2)>.55?K.cream:a;p[0]=g.r,p[1]=g.g,p[2]=g.b}))}function zv(i,t,e,n){const s=3+Math.floor(t.rand()*2);for(let r=0;r<s;r++){const a=.5+t.rand()*.8,o=e+(t.rand()-.5)*3.4,l=n+(t.rand()-.5)*3.4,c=$t(o,l);c<.2||i.push(Lt("ico1",At(o,c+a*.3,l,{ry:t.rand()*6.28,sx:a,sy:a*.65,sz:a*(.8+t.rand()*.4)}),(h,u,f,p,x,g,m)=>{const d=u<.35?K.wetRock:K.rockWarm,M=.88+.2*Ue(h*5.3,f*5.3);m[0]=Math.min(1,d.r*M),m[1]=Math.min(1,d.g*M),m[2]=Math.min(1,d.b*M)}))}}function Uv(i,t,e,n){for(const s of["harbor","dockisle","westward"]){const r=e[s];if(!r)continue;const a=2+Math.floor(t.rand()*2);for(let o=0;o<a;o++){const l=t.rand()<.5?-1:1,c=r.x+r.dx*(6+t.rand()*10)+r.dz*l*(3+t.rand()*6),h=r.z+r.dz*(6+t.rand()*10)-r.dx*l*(3+t.rand()*6);$t(c,h)>.25||(t.rand()<.5?i.push(Lt("cyl8",At(c,-.06,h,{sx:.55,sy:1.05,sz:.55}),Nv)):i.push(Lt("box",At(c,-.02,h,{ry:t.rand()*1.5,sx:1,sy:.85,sz:1}),Fv)),n.floats++)}}}const Nv=(i,t,e,n,s,r,a)=>{const o=t>.02?K.woodLight:K.woodDark,l=.9+.16*Ue(i*4.7,e*4.7);a[0]=Math.min(1,o.r*l),a[1]=Math.min(1,o.g*l),a[2]=Math.min(1,o.b*l)},Fv=(i,t,e,n,s,r,a)=>{const o=t>-.1?K.wood:K.woodDark,l=.9+.16*Ue(i*4.7,e*4.7);a[0]=Math.min(1,o.r*l),a[1]=Math.min(1,o.g*l),a[2]=Math.min(1,o.b*l)};function Ov(i,t,e){t&&typeof t=="object"&&typeof t.Scene=="function"&&(e=arguments[3],t=arguments[2]),t!=="low"&&t!=="medium"&&t!=="high"&&(t="high");const n=t!=="low",s=new xe;s.name="worldStatic";const r=[],a={},o={island:new An({vertexColors:!0,flatShading:!1}),cave:new An({vertexColors:!0,flatShading:!1,side:Ie}),props:new An({vertexColors:!0,flatShading:!0,side:Ie}),palm:new An({vertexColors:!0,flatShading:!0,side:Ie}),coral:new An({vertexColors:!0,flatShading:!0}),mine:new An({vertexColors:!0,flatShading:!0}),blink:new Qe({color:16777215}),distant:new An({vertexColors:!0,flatShading:!0,fog:!0}),gull:new An({vertexColors:!0,flatShading:!0,side:Ie}),flag:new An({vertexColors:!0,side:Ie})},l=d=>{d.onBeforeCompile=M=>{M.uniforms.uHazeColor={value:K.fog},M.vertexShader=M.vertexShader.replace("#include <common>",`varying vec3 vHazePos;
#include <common>`).replace("#include <fog_vertex>",`#include <fog_vertex>
 vHazePos = (modelMatrix * vec4(position, 1.0)).xyz;`),M.fragmentShader=M.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vHazePos;
uniform vec3 uHazeColor;`).replace("#include <fog_fragment>",`#include <fog_fragment>
  float hazeDist = distance(vHazePos, cameraPosition);
  float hazeAmt = smoothstep(300.0, 1400.0, hazeDist) * 0.75;
  gl_FragColor.rgb = mix(gl_FragColor.rgb, uHazeColor, hazeAmt);`)}};l(o.island),l(o.palm),(d=>{d.onBeforeCompile=M=>{M.fragmentShader=M.fragmentShader.replace("#include <fog_fragment>",`#include <fog_fragment>
  gl_FragColor.rgb += diffuseColor.rgb * vec3(0.125, 0.115, 0.105);`)}})(o.cave);{const d=new tt(Je(Hx(t)),o.island);d.name="islands",d.receiveShadow=!0,s.add(d)}{const d=new tt(Je(Xx()),o.cave);d.name="cave",d.castShadow=n,d.receiveShadow=!0,d.userData.cave=!0,s.add(d)}{const d=Jx();d.mesh.name="waterfall",s.add(d.mesh),s.add(d.foam),r.push(d.update)}const h=[];let u=[],f=[];{const d=ev(o);f.push(...d.geoms),h.push(...d.zones);for(const M of d.flags)s.add(M.mesh),u.push(iv(M));Object.assign(a,d.anchors)}{const d=sv(o);for(const M of d.objects)s.add(M);r.push(d.update)}{const d=new tt(Je(rv(t)),o.coral);d.name="coral",s.add(d)}{const d=new tt(Je(cv(t)),o.distant);d.name="distant",s.add(d)}{const d=uv(t,h);if(d.length){const M=new tt(Je(d),o.palm);M.name="palms",M.castShadow=n,s.add(M)}}let p=null;{const d=xv(o,t,h,a);f.push(...d.geoms);for(const M of d.objects)s.add(M);r.push(...d.updaters),p=d.meta}{const d=new tt(Je(f),o.props);d.name="props",d.castShadow=n,d.receiveShadow=!0,s.add(d)}r.push(...u),n||s.traverse(d=>{d.castShadow=!1}),i.add(s);let x=0,g=0,m=0;return s.traverse(d=>{if(!d.isMesh)return;x++;const M=d.geometry;g+=Math.round((M.index?M.index.count:M.getAttribute("position").count)/3),d.isInstancedMesh&&(m+=d.count)}),{group:s,update(d,M,_){for(const v of r)v(d,M,_)},stats:{meshes:x,triangles:g,instances:m,quality:t},dressing:p}}const Hs=i=>i<0?0:i>1?1:i;let Ft=null,vn=null,er=null,xn=null,wi=null,Kn=null,as=null;function nn(){return Ft.currentTime}function os(i,t,e=.08){i.setTargetAtTime(t,nn(),e)}function Bv(i=2){const t=Math.floor(Ft.sampleRate*i),e=Ft.createBuffer(1,t,Ft.sampleRate),n=e.getChannelData(0);for(let s=0;s<t;s++)n[s]=Math.random()*2-1;return e}function mo(){const i=Ft.createBufferSource();return i.buffer=er,i.loop=!0,i}const kv={init(){if(Ft){Ft.state==="suspended"&&Ft.resume().catch(()=>{});return}const i=globalThis.AudioContext||globalThis.webkitAudioContext;if(!i)return;try{Ft=new i}catch{Ft=null;return}vn=Ft.createGain(),vn.gain.value=.8;const t=Ft.createDynamicsCompressor();t.threshold.value=-14,t.ratio.value=6,vn.connect(t),t.connect(Ft.destination),er=Bv(2);const e=Ft.createGain();e.gain.value=0;const n=Ft.createGain();n.gain.value=1;const s=Ft.createBiquadFilter();s.type="lowpass",s.frequency.value=260,s.Q.value=.8;const r=Ft.createOscillator();r.type="sawtooth",r.frequency.value=46;const a=Ft.createOscillator();a.type="square",a.frequency.value=92;const o=Ft.createGain();o.gain.value=.35,r.connect(s),a.connect(o),o.connect(s),s.connect(e),e.connect(n),n.connect(vn);const l=Ft.createOscillator();l.type="sine",l.frequency.value=22;const c=Ft.createGain();c.gain.value=.14,l.connect(c),c.connect(n.gain),r.start(),a.start(),l.start(),xn={g:e,filt:s,oA:r,oB:a,lfo:l,trem:n,lfoG:c};const h=mo(),u=Ft.createBiquadFilter();u.type="bandpass",u.frequency.value=950,u.Q.value=.7;const f=Ft.createGain();f.gain.value=0,h.connect(u),u.connect(f),f.connect(vn),h.start(),wi={g:f,filt:u};const p=mo(),x=Ft.createBiquadFilter();x.type="lowpass",x.frequency.value=400;const g=Ft.createGain();g.gain.value=0,p.connect(x),x.connect(g),g.connect(vn),p.start(),Kn={g,filt:x};const m=mo(),d=Ft.createBiquadFilter();d.type="bandpass",d.frequency.value=750,d.Q.value=.5;const M=Ft.createGain();M.gain.value=0,m.connect(d),d.connect(M),M.connect(vn),m.start(),as={g:M,filt:d},Ft.state==="suspended"&&Ft.resume().catch(()=>{})},startRun(){if(Ft)try{xn&&os(xn.g.gain,.1,.4),Kn&&os(Kn.g.gain,.055,.6),Ft.state==="suspended"&&Ft.resume().catch(()=>{})}catch{}},stopRun(){if(Ft)try{xn&&os(xn.g.gain,0,.25),wi&&os(wi.g.gain,0,.15),Kn&&os(Kn.g.gain,0,.4),as&&os(as.g.gain,0,.3)}catch{}},setEngine({speed01:i=0,throttle01:t=0,boosting:e=!1}={}){if(!(!Ft||!xn))try{const n=Hs(i),s=Hs(t),r=42+n*68+s*10;xn.oA.frequency.setTargetAtTime(r,nn(),.08),xn.oB.frequency.setTargetAtTime(r*2.02,nn(),.08),xn.filt.frequency.setTargetAtTime(240+n*1500+s*700,nn(),.1),xn.g.gain.setTargetAtTime(.09+.11*s+.05*n,nn(),.12),xn.lfo.frequency.setTargetAtTime(16+n*26,nn(),.2),wi&&(wi.g.gain.setTargetAtTime(e?.24:0,nn(),e?.05:.22),e&&wi.filt.frequency.setTargetAtTime(700+n*1400,nn(),.15))}catch{}},setWaterfall(i){if(!(!Ft||!as))try{const t=Hs(1-Math.max(0,i)/220);as.g.gain.setTargetAtTime(.55*Math.pow(t,1.35),nn(),.18)}catch{}},setAmbience(i=0){if(!(!Ft||!Kn))try{const t=Hs(i);Kn.g.gain.setTargetAtTime(.045+.075*t,nn(),.3),Kn.filt.frequency.setTargetAtTime(380+520*t,nn(),.3)}catch{}},setMasterVolume(i){if(!(!Ft||!vn))try{vn.gain.setTargetAtTime(Hs(i),nn(),.05)}catch{}},get ready(){return!!Ft},sfx(i){if(Ft)try{switch(i){case"shoot":Xe("square",780,170,.11,.22),In("highpass",2500,2500,.05,.12);break;case"enemyShoot":Xe("sawtooth",380,95,.16,.18),In("bandpass",900,500,.08,.1);break;case"hit":Xe("triangle",1150,320,.09,.22),In("bandpass",2600,1400,.05,.15);break;case"playerHit":Xe("sine",130,55,.3,.45),In("lowpass",700,250,.22,.35);break;case"explosion":In("lowpass",2800,60,1,.7),Xe("sine",75,26,.8,.5),In("highpass",3e3,1800,.12,.25);break;case"pickup":Xe("sine",880,880,.18,.2),Xe("sine",1318.5,1318.5,.2,.16,.08),Xe("sine",1760,1760,.14,.08,.16);break;case"gate":Xe("triangle",659.25,659.25,.22,.2),Xe("triangle",987.77,987.77,.3,.18,.09),In("bandpass",1200,2400,.25,.06);break;case"boost":In("bandpass",300,2400,.55,.35),Xe("sawtooth",90,240,.4,.12);break;case"landSplash":In("bandpass",1600,250,.8,.5),In("lowpass",300,120,.5,.3),Xe("sine",90,40,.35,.3);break;case"warning":for(let t=0;t<3;t++)Xe("square",640-t*25,600-t*25,.11,.2,t*.15);break;case"win":{[523.25,659.25,783.99,1046.5].forEach((e,n)=>Xe("triangle",e,e,.32,.2,n*.13));break}case"lose":{[415.3,349.23,261.63].forEach((e,n)=>Xe("sine",e,e*.98,.5,.22,n*.22));break}case"ui":Xe("sine",1320,980,.05,.12);break;default:break}}catch{}},dispose(){try{Ft&&Ft.close()}catch{}Ft=null,vn=null,er=null,xn=wi=Kn=as=null}};function Xe(i,t,e,n,s,r=0){if(!Ft)return;const a=nn()+r,o=Ft.createOscillator();o.type=i,o.frequency.setValueAtTime(Math.max(20,t),a),o.frequency.exponentialRampToValueAtTime(Math.max(20,e),a+n);const l=Ft.createGain();l.gain.setValueAtTime(1e-4,a),l.gain.exponentialRampToValueAtTime(s,a+.008),l.gain.exponentialRampToValueAtTime(1e-4,a+n),o.connect(l),l.connect(vn),o.start(a),o.stop(a+n+.05),o.onended=()=>{try{l.disconnect()}catch{}}}function In(i,t,e,n,s,r=0){if(!Ft||!er)return;const a=nn()+r,o=Ft.createBufferSource();o.buffer=er,o.loop=!0;const l=Ft.createBiquadFilter();l.type=i,l.frequency.setValueAtTime(Math.max(30,t),a),l.frequency.exponentialRampToValueAtTime(Math.max(30,e),a+n),l.Q.value=i==="bandpass"?.9:.7;const c=Ft.createGain();c.gain.setValueAtTime(1e-4,a),c.gain.exponentialRampToValueAtTime(s,a+.012),c.gain.exponentialRampToValueAtTime(1e-4,a+n),o.connect(l),l.connect(c),c.connect(vn),o.start(a),o.stop(a+n+.05),o.onended=()=>{try{c.disconnect(),l.disconnect()}catch{}}}const xh={high:1,medium:.6,low:.3},Hv=`
attribute vec3 iPos;
attribute vec3 iVel;
attribute float iSize;
attribute vec3 iColor;
attribute float iAlpha;
attribute float iRot;
attribute float iStretch;
uniform float uStretch;
varying vec2 vUv;
varying vec3 vColor;
varying float vAlpha;
varying float vRot;
void main() {
  vUv = uv; vColor = iColor; vAlpha = iAlpha; vRot = iRot;
  vec4 mv = modelViewMatrix * vec4(iPos, 1.0);
  vec2 dir = vec2(1.0, 0.0);
  float sMul = 1.0;
  float vlen = length(iVel);
  if (vlen > 0.0001) {
    vec3 vv = (viewMatrix * vec4(iVel / vlen, 0.0)).xyz;
    float sl = length(vv.xy);
    if (sl > 0.001) dir = vv.xy / sl;
    // stretch up to ~3.5x at 40 m/s; clamps so slow puffs stay round
    sMul = 1.0 + uStretch * iStretch * min(vlen, 40.0) * 0.065;
  }
  vec2 nrm = vec2(-dir.y, dir.x);
  vec2 c = position.xy; // -0.5..0.5 quad corner
  mv.xy += (dir * (c.x * 2.0 * sMul) + nrm * (c.y * 2.0)) * iSize * 0.5;
  gl_Position = projectionMatrix * mv;
}`,Gv=`
uniform sampler2D uMap;
varying vec2 vUv;
varying vec3 vColor;
varying float vAlpha;
varying float vRot;
void main() {
  vec2 p = vUv - 0.5;
  float c = cos(vRot), s = sin(vRot);
  p = vec2(c * p.x - s * p.y, s * p.x + c * p.y) + 0.5;
  vec4 tex = texture2D(uMap, p);
  float a = tex.a * vAlpha;
  if (a < 0.012) discard;
  gl_FragColor = vec4(vColor, a);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`,hl=.72,Vv=96,Wv=`
uniform float uSeed;   // per-ring random phase, set once at spawn
uniform float uAge;    // normalized ring life 0..1 — slow noise drift
varying float vRadial; // 0 trailing (inner) edge .. 1 leading (outer) edge
varying float vAng;    // 0..1 around the circumference, seam-continuous
float hash1(float n) {
  vec3 p = fract(vec3(n) * 0.1031);
  p += dot(p, p.yzx + 33.33);
  return fract((p.x + p.y) * p.z);
}
// 1D value noise, periodic in x with 'period' lattice cells, so the outline
// stays closed (no seam) at any phase — the domain wraps exactly once.
float pnoise(float x, float period) {
  float i = floor(x);
  float f = fract(x);
  float u = f * f * (3.0 - 2.0 * f);
  return mix(hash1(mod(i, period)), hash1(mod(i + 1.0, period)), u) * 2.0 - 1.0;
}
// 3 octaves of periodic noise -> ~-1..1 shoreline
float ringOutline(float ang, float seed, float age) {
  return pnoise(ang * 8.0 + seed + age * 0.7, 8.0) * 0.55
       + pnoise(ang * 16.0 + seed * 1.7 - age * 0.5, 16.0) * 0.30
       + pnoise(ang * 32.0 + seed * 2.9 + age * 1.1, 32.0) * 0.15;
}
void main() {
  float r = length(position.xy);
  float theta = atan(position.y, position.x); // -PI..PI
  vAng = theta * ${(1/(2*Math.PI)).toFixed(8)} + 0.5;
  vRadial = (r - ${hl.toFixed(2)}) / ${(1-hl).toFixed(2)};
  float wobble = ringOutline(vAng, uSeed, uAge);
  float rs = max(r, 1e-4);
  vec2 p = position.xy / rs * (r * (1.0 + wobble * 0.16)); // ±16% radial breakup
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 0.0, 1.0);
}`,Xv=`
uniform vec3 uColor;
uniform float uOpacity;
uniform float uSeed;
uniform float uAge;
varying float vRadial;
varying float vAng;
float hash1(float n) {
  vec3 p = fract(vec3(n) * 0.1031);
  p += dot(p, p.yzx + 33.33);
  return fract((p.x + p.y) * p.z);
}
float pnoise(float x, float period) {
  float i = floor(x);
  float f = fract(x);
  float u = f * f * (3.0 - 2.0 * f);
  return mix(hash1(mod(i, period)), hash1(mod(i + 1.0, period)), u) * 2.0 - 1.0;
}
void main() {
  // gate the circumference into 2-4 bright foam arcs with dim gaps between
  float arc = pnoise(vAng * 4.0 + uSeed * 0.63 + uAge * 0.35, 4.0);
  float gate = mix(0.14, 1.0, smoothstep(-0.45, 0.55, arc));
  // band profile: long soft trail on the inner edge, bright crest at the
  // leading (outer) edge, slightly lifted tip so the rim never reads vector-crisp
  float trail = smoothstep(0.02, 0.75, vRadial);
  float crest = 1.0 - 0.38 * smoothstep(0.78, 1.0, vRadial);
  // mottle the band so it reads as uneven water, not a painted gradient
  float mottle = 0.78 + 0.28 * pnoise(vAng * 24.0 + vRadial * 5.0 + uSeed * 1.31 + uAge * 0.9, 24.0);
  float a = uOpacity * gate * trail * crest * mottle;
  if (a < 0.012) discard;
  gl_FragColor = vec4(uColor, a);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`;function qv(i,t){const e=i-.5,n=t-.5,s=Math.sqrt(e*e+n*n)*2,r=Math.max(0,1-s*2.4),a=Math.pow(Math.max(0,1-s),2.4);return[1,1,1,Math.min(1,r*1.25+a*.65)]}function Yv(i,t){const e=i-.5,n=t-.5,s=Math.sqrt(e*e+n*n)*2,r=Math.sin(i*9.3+1.7)*Math.cos(t*7.9-.6)*Math.sin((i+t)*4.1+.9),a=Math.max(0,1-s*1.12+r*.1);return[1,1,1,Math.pow(Math.min(1,a),1.55)*.95]}function nr(i,t){const e=new Uint8Array(i*i*4);for(let s=0;s<i;s++)for(let r=0;r<i;r++){const[a,o,l,c]=t((r+.5)/i,(s+.5)/i),h=(s*i+r)*4;e[h]=Math.min(255,a*255),e[h+1]=Math.min(255,o*255),e[h+2]=Math.min(255,l*255),e[h+3]=Math.min(255,c*255)}let n;if(typeof document<"u"&&document.createElement){const s=document.createElement("canvas");s.width=s.height=i;const r=s.getContext("2d"),a=r.createImageData(i,i);a.data.set(e),r.putImageData(a,0,0),n=new fa(s),n.minFilter=ui}else n=new Cl(e,i,i,Sn),n.minFilter=an,n.needsUpdate=!0;return n.magFilter=an,n.colorSpace=je,n.flipY=!1,n}function vh(i,t,e,n){const s=new dn(1,1),r=new Rd;r.setIndex(s.index),r.setAttribute("position",s.attributes.position),r.setAttribute("uv",s.attributes.uv);const a=h=>new Float32Array(h),o={pos:new zn(a(i*3),3),vel:new zn(a(i*3),3),size:new zn(a(i),1),color:new zn(a(i*3),3),alpha:new zn(a(i),1),rot:new zn(a(i),1),stretch:new zn(a(i),1)};for(const h in o)o[h].setUsage(Yr),r.setAttribute("i"+h[0].toUpperCase()+h.slice(1),o[h]);const l=new Pe({uniforms:{uMap:{value:t},uStretch:{value:1}},vertexShader:Hv,fragmentShader:Gv,transparent:!0,depthWrite:!1,blending:e}),c=new tt(r,l);return c.frustumCulled=!1,c.renderOrder=n,r.instanceCount=0,{cap:i,geo:r,mat:l,attr:o,mesh:c,count:0,lastCount:0,life:a(i),max:a(i),s0:a(i),s1:a(i),grav:a(i),drag:a(i),fadeIn:a(i),rotV:a(i),a0:a(i),env:a(i),hold:a(i)}}const xt={ready:!1,scene:null,quality:"medium",add:null,soft:null,rings:null,ringGeo:null,ringFree:[],glowTex:null,puffTex:null,t:0,forward:null};function Ge(i,t){let e;i.count<i.cap?e=i.count++:e=Math.random()*i.cap|0;const n=e*3,s=i.attr;s.pos.array[n]=t.x,s.pos.array[n+1]=t.y,s.pos.array[n+2]=t.z,s.vel.array[n]=t.vx,s.vel.array[n+1]=t.vy,s.vel.array[n+2]=t.vz,s.color.array[n]=t.r,s.color.array[n+1]=t.g,s.color.array[n+2]=t.b,s.stretch.array[e]=t.stretch||0,i.life[e]=t.life,i.max[e]=t.life,i.s0[e]=t.s0,i.s1[e]=t.s1,i.grav[e]=t.grav||0,i.drag[e]=t.drag||0,i.fadeIn[e]=t.fadeIn??.04,i.rotV[e]=t.rotV||0,i.a0[e]=t.alpha??1,i.env[e]=t.env??1.3,i.hold[e]=t.hold||0,i.attr.rot.array[e]=t.rot||0}function Kv(i,t,e){if(t===e)return;const n=i.attr,s=t*3,r=e*3;for(const a of["pos","vel","color"]){const o=n[a].array;o[s]=o[r],o[s+1]=o[r+1],o[s+2]=o[r+2]}n.stretch.array[t]=n.stretch.array[e],n.rot.array[t]=n.rot.array[e];for(const a of["life","max","s0","s1","grav","drag","fadeIn","rotV","a0","env","hold"])i[a][t]=i[a][e]}function Ln(i){let t=null;for(const e of xt.ringFree)if(!e.active){t=e;break}t||(t=xt.ringFree[Math.random()*xt.ringFree.length|0]),t.active=!0,t.t=0,t.dur=i.life,t.r0=i.r0,t.r1=i.r1,t.o0=i.opacity??.8,t.mesh.position.set(i.x,i.y,i.z),i.upright?t.mesh.rotation.set(0,i.yaw||0,0):t.mesh.rotation.set(-Math.PI/2,0,0),t.mesh.scale.setScalar(Math.max(.01,i.r0)),t.mesh.visible=!0,t.mat.uniforms.uSeed.value=Math.random()*61.7,t.mat.uniforms.uColor.value.setHex(i.color??16777215),t.mat.uniforms.uOpacity.value=t.o0,t.mat.uniforms.uAge.value=0}function Fe(i){const t=new rt(i);return[t.r,t.g,t.b]}const $e=Math.random,Z=(i,t)=>i+(t-i)*$e(),$v={splash(i,t){const e=t.scale??1,[n,s,r]=Fe(15400182),a=Math.round(16*e);for(let o=0;o<a;o++){const l=$e()*Math.PI*2,c=Z(1.2,3.4)*e;Ge(xt.soft,{x:i.x,y:i.y,z:i.z,vx:Math.cos(l)*c,vy:Z(3.4,7.2)*e,vz:Math.sin(l)*c,r:n,g:s,b:r,alpha:Z(.55,.85),s0:Z(.4,.8)*e,s1:Z(.9,1.5)*e,life:Z(.45,.85),grav:-9.8,drag:.35,stretch:.8,env:1.2})}t.ring!==!1&&Ln({x:i.x,y:i.y+.1,z:i.z,r0:.4,r1:4.2*e,life:.55,color:14679026,opacity:.5})},spray(i,t){const e=t.scale??1,[n,s,r]=Fe(15925243);let a=0,o=.3,l=-1;if(t.dir){const h=Math.hypot(t.dir.x,t.dir.y,t.dir.z)||1;a=t.dir.x/h,o=t.dir.y/h,l=t.dir.z/h}else t.heading!==void 0&&(a=-Math.sin(t.heading),o=.3,l=-Math.cos(t.heading));const c=Math.round(ee(t.strength??1,.3,1.6)*10*e);for(let h=0;h<c;h++){const u=()=>Z(-1.2,1.2)*e;Ge(xt.soft,{x:i.x+u()*.3,y:i.y+Z(0,.3),z:i.z+u()*.3,vx:a*Z(6,13)*e+u(),vy:o*Z(6,13)*e+Z(.5,2.2),vz:l*Z(6,13)*e+u(),r:n,g:s,b:r,alpha:Z(.4,.7),s0:Z(.25,.5)*e,s1:Z(.7,1.3)*e,life:Z(.25,.55),grav:-8.5,drag:.5,stretch:Z(2.2,3.4),env:1.1})}},roostertail(i,t){const e=ee(t.speed??0,0,42);if(e<6)return;const n=t.scale??1,s=ee(e/30,0,1.15),r=t.heading??0,a=-Math.sin(r),o=-Math.cos(r),l=Math.max(1,Math.round((1.5+5*s)*n*(t.rate??1))),[c,h,u]=Fe(15661048);for(let f=0;f<l;f++){const p=Z(-.5,.5),x=Math.cos(p),g=Math.sin(p),m=a*x-o*g,d=a*g+o*x,M=Z(2,6)*(.55+.55*s),_=Z(1.5,4),v=Math.max(2.5,Math.hypot(M,_));Ge(xt.soft,{x:i.x+Z(-.35,.35)*n,y:i.y+Z(0,.3),z:i.z+Z(-.35,.35)*n,vx:m*M,vy:_,vz:d*M,r:c,g:h,b:u,alpha:Z(.32,.58),s0:Z(.3,.55)*n,s1:Z(.9,1.7)*n,life:Z(.25,.5),grav:-7,drag:.55,stretch:Z(2.5,5.5)/(v*.065),fadeIn:.02,env:1.15})}},landingPlume(i,t){const e=t.scale??1,n=t.dir,s=n?Math.hypot(n.x,n.z):0,r=s>1e-4?n.x/s:xt.forward?xt.forward.x:0,a=s>1e-4?n.z/s:xt.forward?xt.forward.z:-1,[o,l,c]=Fe(15925242),[h,u,f]=Fe(14480364),p=Math.round(70*e);for(let x=0;x<p;x++){const g=Z(-1,1),m=Math.sign(g)*(.35+Math.abs(g)*1.05),d=Z(.9,4.8)*e,M=Math.cos(m),_=Math.sin(m),v=(-r*M-a*_)*d,y=(r*_-a*M)*d,w=Z(2.2,6.2)*e,T=Z(1.2,3.6)*e;Ge(xt.soft,{x:i.x+v,y:i.y,z:i.z+y,vx:v/d*w-r*T,vy:Z(8.2,14.7)*e,vz:y/d*w-a*T,r:o,g:l,b:c,alpha:Z(.52,.76),s0:Z(1.1,2.6)*e,s1:Z(2.2,3.8)*e,life:Z(1.1,1.9),grav:-7.4,drag:.5,stretch:1.1,fadeIn:.03,env:1.25})}for(let x=0;x<Math.round(14*e);x++){const g=$e()*Math.PI*2,m=Z(.4,1.6);Ge(xt.soft,{x:i.x,y:i.y+Z(.5,2),z:i.z,vx:Math.cos(g)*m,vy:Z(.8,2.2),vz:Math.sin(g)*m,r:h,g:u,b:f,alpha:Z(.1,.16),s0:Z(3.5,6)*e,s1:Z(6,9)*e,life:Z(2.2,3.4),grav:.25,drag:.85,fadeIn:.5,env:1.1})}Ln({x:i.x,y:i.y+.12,z:i.z,r0:2,r1:11*e,life:.9,color:16777215,opacity:.75}),Ln({x:i.x,y:i.y+.14,z:i.z,r0:4,r1:17*e,life:1.5,color:14219246,opacity:.4})},explosion(i,t){const e=t.scale??1,[n,s,r]=Fe(16754755),[a,o,l]=Fe(16774088);Fe(16732976);for(let c=0;c<Math.round(8*e);c++)Ge(xt.add,{x:i.x,y:i.y,z:i.z,vx:Z(-2,2),vy:Z(.5,3),vz:Z(-2,2),r:a,g:o,b:l,alpha:1,s0:Z(2,3.6)*e,s1:Z(4,6)*e,life:Z(.12,.26),grav:1.5,drag:2,fadeIn:.01,env:1.6});for(let c=0;c<Math.round(26*e);c++){const h=$e()*Math.PI*2,u=Z(-.3,1),f=Z(3.5,10)*e,p=$e()<.45;Ge(xt.add,{x:i.x,y:i.y,z:i.z,vx:Math.cos(h)*f*Math.sqrt(1-u*u*.5),vy:f*u+Z(0,3),vz:Math.sin(h)*f*Math.sqrt(1-u*u*.5),r:p?a:n,g:p?o:s,b:p?l:r,alpha:Z(.75,1),s0:Z(.8,1.8)*e,s1:Z(.2,.5),life:p?Z(.47,1.08):Z(.35,.8),grav:2.5,drag:1.6,stretch:.5,fadeIn:.01,env:1.5,hold:p?.1:0})}for(let c=0;c<Math.round(16*e);c++){const h=$e()*Math.PI*2,u=Z(-.4,.9),f=Z(8,18)*e;Ge(xt.add,{x:i.x,y:i.y,z:i.z,vx:Math.cos(h)*f,vy:f*u+4,vz:Math.sin(h)*f,r:1,g:Z(.75,.95),b:Z(.35,.6),alpha:1,s0:Z(.14,.3),s1:.05,life:Z(.4,.95),grav:-9.8,drag:.25,stretch:1.6,env:1.2})}for(let c=0;c<Math.round(9*e);c++){const h=$e()*Math.PI*2,u=Z(.6,2.2);Ge(xt.soft,{x:i.x,y:i.y+Z(0,.8),z:i.z,vx:Math.cos(h)*u,vy:Z(1.6,3.4),vz:Math.sin(h)*u,r:.24,g:.22,b:.22,alpha:Z(.4,.6),s0:Z(1.2,2.2)*e,s1:Z(3.6,5.5)*e,life:Z(1.1,2),grav:.6,drag:.9,rotV:Z(-1.5,1.5),fadeIn:.12,env:1.35})}Ln({x:i.x,y:i.y+.3,z:i.z,r0:1.5,r1:14*e,life:.5,color:16764826,opacity:.85,upright:t.upright,yaw:t.yaw}),i.y<1.6&&Ln({x:i.x,y:.12,z:i.z,r0:2,r1:12*e,life:.9,color:15269878,opacity:.55})},muzzleFlash(i,t){const e=t.dir||{x:0,y:0,z:1},n=Math.hypot(e.x,e.y,e.z)||1,s=t.scale??1,[r,a,o]=Fe(t.color??16769696),[l,c,h]=Fe(16777215),u=r+(l-r)*.55,f=a+(c-a)*.55,p=o+(h-o)*.55;for(let x=0;x<6;x++){const g=()=>Z(-.12,.12);Ge(xt.add,{x:i.x,y:i.y,z:i.z,vx:e.x/n*Z(8,15)*s+g()*10,vy:e.y/n*Z(8,15)*s+g()*10,vz:e.z/n*Z(8,15)*s+g()*10,r,g:a,b:o,alpha:1,s0:Z(.6,1.05)*s,s1:.1,life:Z(.07,.15),drag:1,stretch:1.8,env:1.4})}Ge(xt.add,{x:i.x,y:i.y,z:i.z,vx:0,vy:.5,vz:0,r:u,g:f,b:p,alpha:1,s0:1.9*s,s1:3*s,life:.085,fadeIn:.005,env:1.6})},sparks(i,t){const e=t.scale??1,[n,s,r]=Fe(t.color??16765562),a=Math.round(12*e);for(let o=0;o<a;o++){const l=$e()*Math.PI*2,c=Z(-.5,1),h=Z(5,14)*e;Ge(xt.add,{x:i.x,y:i.y,z:i.z,vx:Math.cos(l)*h,vy:h*c+2,vz:Math.sin(l)*h,r:n,g:s,b:r,alpha:1,s0:Z(.12,.26)*e,s1:.04,life:Z(.3,.7),grav:-9.8,drag:.3,stretch:1.6,env:1.1})}},pickupBurst(i,t){const e=t.scale??1,[n,s,r]=Fe(t.color??16767311);for(let a=0;a<Math.round(20*e);a++){const o=$e()*Math.PI*2,l=Z(.8,2.4)*e;Ge(xt.add,{x:i.x,y:i.y,z:i.z,vx:Math.cos(o)*l,vy:Z(2,5.5),vz:Math.sin(o)*l,r:n,g:s,b:r,alpha:Z(.7,1),s0:Z(.3,.7),s1:.08,life:Z(.5,1),grav:.5,drag:.6,stretch:.4,env:1.3})}Ln({x:i.x,y:i.y+.1,z:i.z,r0:.3,r1:5*e,life:.55,color:t.color??16767311,opacity:.6})},gatePulse(i,t){const e=t.color??5887688;Ln({x:i.x,y:i.y+.15,z:i.z,r0:2,r1:16,life:.9,color:e,opacity:.7}),Ln({x:i.x,y:i.y+.15,z:i.z,r0:1,r1:12,life:1.3,color:e,opacity:.45}),t.yaw!==void 0&&Ln({x:i.x,y:i.y+1.5,z:i.z,r0:2,r1:13,life:.9,color:e,opacity:.5,upright:!0,yaw:t.yaw});const[n,s,r]=Fe(e);for(let a=0;a<16;a++){const o=$e()*Math.PI*2,l=Z(1,3.2);Ge(xt.add,{x:i.x,y:i.y+.3,z:i.z,vx:Math.cos(o)*l,vy:Z(2,6),vz:Math.sin(o)*l,r:n,g:s,b:r,alpha:Z(.6,1),s0:Z(.25,.55),s1:.06,life:Z(.4,.9),grav:-2,drag:.5,stretch:.5,env:1.2})}},ringWave(i,t){Ln({x:i.x,y:i.y+.12,z:i.z,r0:t.r0??1,r1:(t.r1??8)*(t.scale??1),life:t.life??.8,color:t.color??13627110,opacity:t.opacity??.6,upright:t.upright,yaw:t.yaw})},boostFlame(i,t){const e=t.dir||{x:0,y:0,z:-1},n=Math.hypot(e.x,e.y,e.z)||1;for(let s=0;s<3;s++){const r=$e()<.5,[a,o,l]=Fe(r?16757844:16732976),c=Z(-.5,.5),h=Z(-.3,.5),u=Z(-.5,.5);Ge(xt.add,{vx:e.x/n*Z(6,10)+c,vy:e.y/n*Z(6,10)+h,vz:e.z/n*Z(6,10)+u,r:a,g:o,b:l,alpha:Z(.8,1),s0:Z(.7,1.3),s1:.15,life:Z(.2,.38),drag:1.2,stretch:1.3,fadeIn:.01,env:1.4})}},smoke(i,t){const e=t.scale??1,[n,s,r]=Fe(t.color??7235682),a=Math.round(6*e);for(let o=0;o<a;o++){const l=$e()*Math.PI*2,c=Z(.3,1.2);Ge(xt.soft,{x:i.x,y:i.y,z:i.z,vx:Math.cos(l)*c,vy:Z(1.2,2.6),vz:Math.sin(l)*c,r:n,g:s,b:r,alpha:Z(.3,.5),s0:Z(.8,1.6)*e,s1:Z(2.6,4.4)*e,life:Z(1,2.2),grav:.5,drag:.8,rotV:Z(-1.2,1.2),fadeIn:.2,env:1.3})}},debris(i,t){const e=t.scale??1,n=Fe(3814706),s=Fe(11024938),r=Fe(15254074),a=Math.round(14*e);for(let o=0;o<a;o++){const l=$e()<.55?n:$e()<.7?s:r,c=$e()*Math.PI*2,h=Z(.2,1),u=Z(5,13)*e;Ge(xt.soft,{x:i.x,y:i.y+.3,z:i.z,vx:Math.cos(c)*u,vy:u*h,vz:Math.sin(c)*u,r:l[0],g:l[1],b:l[2],alpha:1,s0:Z(.22,.5)*e,s1:Z(.15,.3)*e,life:Z(.8,1.7),grav:-14,drag:.15,rotV:Z(-9,9),env:.9})}}};function Zv(i,t="medium"){wu(),xt.scene=i,xt.quality=t in xh?t:"medium";const e=xh[xt.quality];xt.glowTex=nr(64,qv),xt.puffTex=nr(96,Yv),xt.add=vh(Math.round(2600*e),xt.glowTex,jn,30),xt.soft=vh(Math.round(3800*e),xt.puffTex,zi,29),i.add(xt.soft.mesh,xt.add.mesh),xt.ringGeo=new pa(hl,1,Vv,1),xt.ringFree=[];const n=Math.max(10,Math.round(36*e));for(let s=0;s<n;s++){const r=new Pe({uniforms:{uColor:{value:new rt(16777215)},uOpacity:{value:0},uSeed:{value:0},uAge:{value:0}},vertexShader:Wv,fragmentShader:Xv,transparent:!0,depthWrite:!1,blending:jn,side:Ie}),a=new tt(xt.ringGeo,r);a.visible=!1,a.renderOrder=28,i.add(a),xt.ringFree.push({mesh:a,mat:r,active:!1,t:0,dur:1,r0:0,r1:1,o0:1})}xt.ready=!0}function _h(i,t){const e=i.attr;for(let n=0;n<i.count;){if(i.life[n]-=t,i.life[n]<=0){i.count--,Kv(i,n,i.count);continue}const s=n*3,r=e.vel.array,a=e.pos.array;r[s+1]+=i.grav[n]*t;const o=Math.exp(-i.drag[n]*t);r[s]*=o,r[s+1]*=o,r[s+2]*=o,a[s]+=r[s]*t,a[s+1]+=r[s+1]*t,a[s+2]+=r[s+2]*t,e.rot.array[n]+=i.rotV[n]*t,n++}for(let n=0;n<i.count;n++){const s=i.max[n]-i.life[n],r=ee(s/i.max[n],0,1);e.size.array[n]=Ss(i.s0[n],i.s1[n],r);const a=Math.min(1,s/Math.max(.001,i.fadeIn[n]));let o=r;if(i.hold[n]>0){const l=Math.min(i.hold[n],i.max[n]*.8);o=s<l?0:ee((s-l)/(i.max[n]-l),0,1)}e.alpha.array[n]=i.a0[n]*a*Math.pow(1-o,i.env[n])}i.geo.instanceCount=i.count}function jv(i,t){if(xt.ready){xt.t=t,_h(xt.add,i),_h(xt.soft,i);for(const e of xt.ringFree){if(!e.active)continue;e.t+=i;const n=e.t/e.dur;if(n>=1){e.active=!1,e.mesh.visible=!1;continue}const s=1-(1-n)*(1-n);e.mesh.scale.setScalar(Math.max(.01,Ss(e.r0,e.r1,s))),e.mat.uniforms.uAge.value=n;const r=Math.min(1,e.t/.07);e.mat.uniforms.uOpacity.value=e.o0*r*(1-n)}}}function bu(i,t,e={}){if(!xt.ready)return;const n=$v[i];if(!n)return;const s={x:t.x,y:t.y,z:t.z};n(s,e)}function Jv(i,t,e={}){for(const n of t)bu(i,n,e)}function Qv(i){const t=Math.hypot(i.x,i.z);t>1e-4&&(xt.forward={x:i.x/t,z:i.z/t})}function wu(){if(xt.ready){xt.scene.remove(xt.add.mesh),xt.scene.remove(xt.soft.mesh);for(const i of[xt.add,xt.soft])i.geo.dispose(),i.mat.dispose();for(const i of xt.ringFree)xt.scene.remove(i.mesh),i.mat.dispose();xt.ringGeo.dispose(),xt.glowTex.dispose(),xt.puffTex.dispose(),xt.ready=!1,xt.scene=null,xt.add=xt.soft=xt.rings=xt.ringFree=null}}const t_={init:Zv,update:jv,play:bu,burst:Jv,setForward:Qv,dispose:wu,get ready(){return!!xt.ready},_pools:()=>xt.ready?{add:xt.add.count,soft:xt.soft.count}:null},oe={hull:11024938,dark:3025966,warn:15254074},ca={boost:16751407,shield:5820671,double:16767311},Eu=["boost","shield","double"],Tu=15919312,e_=1.4,n_={skiff:{hp:18,radius:2.2,speedMin:24,speedMax:28,dmg:7,cd:1,shotSpeed:55,range:95,keepMin:45,keepMax:65,turn:2.2,wake:!0},gunboat:{hp:40,radius:3,speedMin:15,speedMax:18,dmg:12,cd:1.5,shotSpeed:48,range:115,keepMin:55,keepMax:85,turn:1.1,wake:!0},drone:{hp:12,radius:1.7,speedMin:11,speedMax:16,dmg:5,cd:.7,shotSpeed:42,range:85,keepMin:25,keepMax:45,hoverMin:8,hoverMax:12}},Mh={high:1,medium:.6,low:.3},yh=new I(0,1,0),i_=.7,s_=3,kr=4.5,r_=8,a_=9,o_=.15;function Wl(i,t,e){const n=new rt(t),s=i.attributes.position.count,r=new Float32Array(s*3);for(let a=0;a<s;a++){const o=.94+e.rand()*.12;r[a*3]=ee(n.r*o,0,1),r[a*3+1]=ee(n.g*o,0,1),r[a*3+2]=ee(n.b*o,0,1)}return i.setAttribute("color",new Te(r,3)),i}function fe(i,t,e,n,s=0,r=0,a=0,o=0,l=0,c=0,h=null){const u=new te(i,t,e);return o&&u.rotateX(o),l&&u.rotateY(l),c&&u.rotateZ(c),u.translate(s,r,a),Wl(u,n,h)}function ir(i,t,e,n,s,r=0,a=0,o=0,l=0,c=0,h=0,u=null){const f=new we(i,t,e,n);return l&&f.rotateX(l),c&&f.rotateY(c),h&&f.rotateZ(h),f.translate(r,a,o),Wl(f,s,u)}function Au(i,t,e,n,s,r,a){const o=new ms(i,t,4);return o.rotateY(Math.PI/4),o.rotateX(Math.PI/2),o.translate(n,s,r),Wl(o,e,a)}function bs(i){const t=xu(i,!1);for(const e of i)e.dispose();return t}function ul(i,t,e){const n=[];for(const s of[-1,1])n.push(fe(.06,.16,.55,oe.warn,s*i.x,t,i.z-.5,0,0,s*.5,e)),n.push(fe(.06,.16,.55,oe.warn,s*i.x,t,i.z+.5,0,0,s*-.5,e));return n}function l_(i){const t=[fe(1.5,.5,3.4,oe.hull,0,.25,0,0,0,0,i),fe(.22,.55,3.8,9187618,-.8,.45,-.1,0,0,0,i),fe(.22,.55,3.8,9187618,.8,.45,-.1,0,0,0,i),Au(1,1.7,oe.hull,0,.42,2.4,i),fe(1.55,.5,.75,oe.dark,0,.5,-2,0,0,0,i),fe(1.3,.12,3.1,oe.dark,0,.68,-.1,0,0,0,i),fe(.95,.38,.75,oe.dark,0,.92,-.7,0,0,0,i),fe(.9,.34,.07,1711138,0,1.12,-.28,-.55,0,0,i),fe(.3,.22,.35,oe.dark,0,.82,1.35,0,0,0,i),fe(.12,.12,1.15,oe.dark,0,.9,1.9,0,0,0,i),fe(.32,.5,.26,oe.dark,0,.45,-2.5,0,0,0,i),...ul({x:.92,z:-.2},.62,i)],e=new tt(bs(t),P.matEnemy),n=new tt(P.geoProp,P.matEnemy);n.position.set(0,.42,-2.68);const s=new Le;s.position.set(0,.9,2.5);const r=new xe;return r.add(e,n,s),r.userData.anim={prop:n,turret:null,rotors:null,gimbal:null,muzzle:s},r}function c_(i){const t=[fe(2.2,.7,4.6,oe.hull,0,.35,-.2,0,0,0,i),Au(1.5,2.3,oe.hull,0,.35,3.2,i),fe(.26,.52,5.2,oe.dark,-1.12,.55,-.2,0,0,0,i),fe(.26,.52,5.2,oe.dark,1.12,.55,-.2,0,0,0,i),fe(1.9,.14,4.9,oe.dark,0,.8,-.2,0,0,0,i),fe(1.6,.85,1.8,oe.hull,0,1.3,-.7,0,0,0,i),fe(1.15,.6,1.25,oe.dark,0,2,-.7,0,0,0,i),fe(.95,.28,.08,1711138,0,2.05,-.05,0,0,0,i),ir(.06,.09,1.7,6,oe.dark,0,3,-1.4,0,0,0,i),fe(.95,.09,.14,oe.dark,0,3.75,-1.4,0,0,0,i),fe(1.7,.4,.5,oe.dark,0,.5,-2.9,0,0,0,i),...ul({x:1.26,z:.4},.72,i),...ul({x:1.26,z:-1.4},.72,i)],e=new tt(bs(t),P.matEnemy),n=new tt(P.geoWarnLight,P.matWarn);n.position.set(0,3.15,-1.4);const s=new xe;s.position.set(0,1,1.5);const r=bs([ir(.5,.62,.34,10,oe.dark,0,.05,0,0,0,0,i),fe(.85,.42,.95,oe.hull,0,.4,-.05,0,0,0,i),fe(.5,.18,.5,oe.warn,0,.66,-.05,0,0,0,i)]),a=new tt(r,P.matEnemy),o=new tt(P.geoBarrel,P.matEnemy);o.position.set(0,.42,1.15);const l=new Le;l.position.set(0,.44,2.2),s.add(a,o,l);const c=new xe;return c.add(e,n,s),c.userData.anim={prop:null,turret:s,barrel:o,rotors:null,gimbal:null,muzzle:l},c}function h_(i){const t=[fe(.95,.36,.95,oe.dark,0,0,0,0,0,0,i),fe(.72,.14,.72,oe.hull,0,.25,0,0,0,0,i),fe(.95,.1,.25,oe.warn,0,-.2,.4,0,0,0,i)];for(const[u,f]of[[-1,-1],[1,-1],[-1,1],[1,1]])t.push(fe(.15,.09,1.15,oe.hull,u*.52,.02,f*.52,0,u*f>0?-Math.PI/4:Math.PI/4,0,i));const e=new tt(bs(t),P.matEnemy),n=new tt(P.geoWarnLight,P.matWarn);n.position.set(0,.4,0),n.scale.setScalar(.7);const s=[],r=[];for(const[u,f]of[[-1,-1],[1,-1],[-1,1],[1,1]]){new tt(P.geoRotorHub,P.matEnemy).position.set(u*1.02,.12,f*1.02);const x=new tt(P.geoRotorDisc,P.matRotor);x.position.set(u*1.02,.22,f*1.02);const g=new tt(P.geoRotorTip,P.matWarn);g.position.set(u*1.02+.42,.245,f*1.02);const m=new tt(P.geoRotorTip,P.matWarn);m.position.set(u*1.02-.42,.245,f*1.02);const d=new xe;d.add(x,g,m),s.push(d)}const a=new xe;a.position.set(0,-.3,.1);const o=bs([fe(.26,.2,.3,oe.dark,0,0,0,0,0,0,i),ir(.05,.05,.55,6,oe.dark,0,0,.32,Math.PI/2,0,0,i)]),l=new tt(o,P.matEnemy),c=new Le;c.position.set(0,0,.62),a.add(l,c);const h=new xe;h.add(e,n,a);for(const u of s)h.add(u);for(const u of r)h.add(u);return h.userData.anim={prop:null,turret:null,rotors:s,gimbal:a,muzzle:c},h}function u_(i){const t=new xe;t.add(new tt(P.geoPickBody,P.matPickWrap[i]),new tt(P.geoPickTop,P.matPickTop));const e=new td(P.matPickGlint);e.scale.set(.35,.35,1),e.position.y=.62;const n=new tt(P.geoPickContact,P.matPickContact);return n.rotation.x=-Math.PI/2,{canister:t,glint:e,contact:n}}const P={ready:!1,scene:null,quality:"medium",q:1,rng:bn(32315),fx:null,audio:null,opts:{},playerState:null,player:null,t:0,matEnemy:null,matWarn:null,matRotor:null,matShotP:null,matShotE:null,matPickWrap:null,matPickTop:null,matPickContact:null,matPickGlint:null,geoProp:null,geoBarrel:null,geoWarnLight:null,geoRotorHub:null,geoRotorDisc:null,geoRotorTip:null,geoPickBody:null,geoPickTop:null,geoPickContact:null,geoTracer:null,glintTex:null,contactTex:null,enemies:[],sinks:[],falls:[],shots:[],pickups:[],mines:[],chains:[],encounters:[],stats:{kills:0,shotsFired:0,shotsHit:0},playerCd:0,trailCount:0},fl=new I,Ru=new I,dl=new I,Cu=new I,Fn={x:0,y:1,z:0},Jr=new I(0,4.8,0),f_=new I(0,0,1);function d_(){return{play(){},burst(){}}}function p_(){return{sfx(){},setEngine(){},init(){},startRun(){},stopRun(){},setWaterfall(){},setAmbience(){},setMasterVolume(){}}}function m_(i,t,e,n,s,r=0){const a=Ee(t,e,n);Ol(t,e,n,Fn);const o=Math.sin(s),l=Math.cos(s),c=o*Fn.x+l*Fn.z,h=l*Fn.x-o*Fn.z;return i.position.y=a,i.rotation.order="YXZ",i.rotation.y=s,i.rotation.x=-Math.atan(c)+r,i.rotation.z=Math.atan(h),a}const Pu={init:g_,reset:x_,update:F_,onGatePassed:S_,trigger:b_,tryFire:D_,setPlayerState:v_,stats:P.stats,enemiesAlive:__,eachEnemy:M_,eachPickup:y_,_debug:{enemies:()=>P.enemies.map(i=>({type:i.type,x:i.pos.x,y:i.pos.y,z:i.pos.z,heading:i.heading,speed:i.speed,hp:i.hp,state:i.state,alive:i.alive})),activeShots:()=>P.shots.filter(i=>i.active).map(i=>({x:i.mesh.position.x,y:i.mesh.position.y,z:i.mesh.position.z,friendly:i.friendly})),pickups:()=>P.pickups.length,minesArmed:()=>P.mines.filter(i=>i.armed).length,trailCount:()=>P.trailCount},dispose:Du};function g_(i,t={}){Du(),P.ready=!0,P.scene=i,P.quality=t.quality in Mh?t.quality:"medium",P.q=Mh[P.quality],P.opts=t,P.fx=t.fx||d_(),P.audio=t.audio||p_(),P.rng=bn(32315),P.playerState=t.playerState||null,P.stats={kills:0,shotsFired:0,shotsHit:0},Pu.stats=P.stats,P.matEnemy=new An({vertexColors:!0}),P.matWarn=new Qe({color:oe.warn}),P.matRotor=new An({color:1776157,transparent:!0,opacity:.85}),P.matShotP=new Qe({color:16757844,blending:jn,transparent:!0,opacity:.95,depthWrite:!1}),P.matShotE=new Qe({color:16732992,blending:jn,transparent:!0,opacity:.95,depthWrite:!1}),P.matPickWrap={};for(const s of Eu)P.matPickWrap[s]=new He({map:k_(s),roughness:.38,metalness:.2});P.matPickTop=new He({vertexColors:!0,roughness:.55,metalness:.1}),P.matPickContact=new Qe({map:B_(),color:858913,transparent:!0,opacity:.25,depthWrite:!1}),P.matPickGlint=new Jh({map:O_(),color:16777215,blending:jn,transparent:!0,opacity:.45,depthWrite:!1}),P.geoProp=new we(.22,.22,.06,8),P.geoProp.rotateX(Math.PI/2),P.geoBarrel=new we(.09,.11,1.9,8),P.geoBarrel.rotateX(Math.PI/2),P.geoWarnLight=new te(.16,.16,.16),P.geoRotorHub=new we(.09,.09,.18,6),P.geoRotorDisc=new we(.55,.55,.035,10),P.geoPickBody=new we(.28,.28,.9,14);const e=bn(20934);P.geoPickTop=bs([ir(.3,.3,.14,14,Tu,0,.45,0,0,0,0,e),ir(.305,.305,.09,14,oe.dark,0,.335,0,0,0,0,e)]),P.geoPickContact=new rr(e_,24),P.geoRotorTip=new te(.16,.03,.06),P.geoTracer=new te(.32,.32,2.3);const n=Math.round(96*P.q);P.shots=[];for(let s=0;s<n;s++){const r=new tt(P.geoTracer,P.matShotP);r.visible=!1,r.renderOrder=25,P.scene.add(r),P.shots.push({active:!1,mesh:r,vel:new I,life:0,dmg:0,radius:0,friendly:!0})}P.mines=$r.map(s=>({x:s.x,z:s.z,armed:!0})),P.encounters=mx.map(s=>({src:s,armed:!0}))}function x_(i={}){if(!P.ready)return;P.rng=bn(32315+(i.seed|0));for(const e of P.enemies)Iu(e);P.enemies.length=0;for(const e of P.sinks)P.scene.remove(e.group);P.sinks.length=0;for(const e of P.falls)P.scene.remove(e.group);P.falls.length=0;for(const e of P.shots)e.active=!1,e.mesh.visible=!1;for(const e of P.pickups)P.scene.remove(e.group);P.pickups.length=0;for(const e of gx)Uu(e.kind,e.x,e.z);for(const e of P.mines)e.armed=!0;P.chains.length=0;for(const e of P.encounters)e.armed=!0;const t=i.gate|0;if(t>0)for(const e of P.encounters)e.armed&&e.src.when.gate!==void 0&&e.src.when.gate<t&&(e.armed=!1,Xl(e.src));P.stats.kills=0,P.stats.shotsFired=0,P.stats.shotsHit=0,P.playerCd=0}function v_(i){P.playerState=i}function __(){let i=0;for(const t of P.enemies)t.alive&&i++;return i}function M_(i){if(!(!P.ready||typeof i!="function"))for(const t of P.enemies)t.alive&&i({pos:{x:t.pos.x,z:t.pos.z},type:t.type,alive:!0})}function y_(i){if(!(!P.ready||typeof i!="function"))for(const t of P.pickups)i({pos:{x:t.group.position.x,z:t.group.position.z},kind:t.kind})}function Du(){if(P.ready){for(const i of P.enemies)Iu(i);for(const i of P.sinks)P.scene.remove(i.group);for(const i of P.falls)P.scene.remove(i.group);for(const i of P.pickups)P.scene.remove(i.group);for(const i of P.shots)P.scene.remove(i.mesh);P.enemies.length=P.sinks.length=P.falls.length=0,P.pickups.length=0,P.shots.length=0,P.chains.length=0;for(const i of["matEnemy","matWarn","matRotor","matShotP","matShotE","matPickTop","matPickContact","matPickGlint"])P[i]&&P[i].dispose();for(const i in P.matPickWrap??{})P.matPickWrap[i].map?.dispose(),P.matPickWrap[i].dispose();for(const i of["geoProp","geoBarrel","geoWarnLight","geoRotorHub","geoRotorDisc","geoRotorTip","geoPickBody","geoPickTop","geoPickContact","geoTracer"])P[i]&&P[i].dispose();P.ready=!1,P.scene=null}}function S_(i){if(P.ready)for(const t of P.encounters)t.armed&&t.src.when.gate===i&&(t.armed=!1,Xl(t.src))}function b_(i){if(P.ready)for(const t of P.encounters)t.armed&&t.src.when.trigger===i&&(t.armed=!1,Xl(t.src))}function Xl(i){for(const t of i.enemies)w_(t.type,t.x,t.z,{heading:t.heading,y:t.y});P.opts.toast&&P.opts.toast(i.toast||"HOSTILES INBOUND","warning"),P.audio.sfx("warning")}function w_(i,t,e,n={}){const s=n_[i];if(!s)return;const r=i==="skiff"?l_(P.rng):i==="gunboat"?c_(P.rng):h_(P.rng);r.position.set(t,n.y??0,e),r.rotation.order="YXZ",n.heading!==void 0&&(r.rotation.y=n.heading),r.scale.setScalar(.05),P.scene.add(r);const a={type:i,def:s,group:r,pos:r.position,vel:new I,heading:n.heading??P.rng.range(0,Bn),speed:0,targetSpeed:0,hp:s.hp,alive:!0,state:"spawn",spawnT:0,cd:P.rng.range(.4,1),strafeDir:P.rng.chance(.5)?1:-1,strafeT:P.rng.range(3,8),phase:P.rng.range(0,Bn),hover:P.rng.range(s.hoverMin??8,s.hoverMax??12),radius:s.radius,trail:null};if(s.wake&&P.opts.WakeTrail)try{a.trail=new P.opts.WakeTrail(P.scene),P.trailCount++}catch{a.trail=null}P.fx.play("ringWave",{x:t,y:.2,z:e},{color:16732992,r1:6,opacity:.5}),P.enemies.push(a)}function Iu(i){if(i.trail){try{i.trail.dispose()}catch{}i.trail=null,P.trailCount=Math.max(0,P.trailCount-1)}P.scene.remove(i.group)}function E_(i,t,e){for(let n=P.enemies.length-1;n>=0;n--){const s=P.enemies[n];if(!s.alive){P.enemies.splice(n,1);continue}if(s.state==="spawn"){s.spawnT+=i;const r=Math.min(1,s.spawnT/i_),a=1-Math.pow(1-r,3);s.group.scale.setScalar(.05+.95*a),r>=1&&(s.state="engage",s.group.scale.setScalar(1))}if(s.cd-=i,s.strafeT-=i,s.strafeT<=0&&(P.rng.chance(.6)&&(s.strafeDir*=-1),s.strafeT=P.rng.range(3.5,8)),s.type==="drone"?A_(s,i,t,e):T_(s,i,t,e),R_(s,i,t,e),s.trail)try{s.trail.update(i,t,s.pos,s.heading,s.speed)}catch{try{s.trail.dispose()}catch{}s.trail=null}if(s.state==="engage"&&e.alive&&s.cd<=0){const r=Math.hypot(e.pos.x-s.pos.x,e.pos.z-s.pos.z);let a=r<s.def.range;if(a&&s.type==="skiff"){let l=(Math.atan2(e.pos.x-s.pos.x,e.pos.z-s.pos.z)-s.heading)%Bn;l>Math.PI&&(l-=Bn),l<-Math.PI&&(l+=Bn),a=Math.abs(l)<.55}a&&(s.cd=s.def.cd*P.rng.range(.85,1.2),C_(s,e,r))}}}function T_(i,t,e,n){const s=i.def,r=n.pos.x-i.pos.x,a=n.pos.z-i.pos.z,o=Math.hypot(r,a)||1,l=r/o,c=a/o,h=-c*i.strafeDir,u=l*i.strafeDir;let f=0;n.alive?o>s.keepMax?f=1:o<s.keepMin&&(f=-1):f=0;let p=l*f+h*(1.25-Math.abs(f)*.75),x=c*f+u*(1.25-Math.abs(f)*.75);for(const T of P.enemies){if(T===i||T.type==="drone")continue;const R=i.pos.x-T.pos.x,S=i.pos.z-T.pos.z,b=Math.hypot(R,S);b>.01&&b<12&&(p+=R/b*(12-b)*.12,x+=S/b*(12-b)*.12)}let g=!1;const m=6+i.speed*.55,d=Math.sin(i.heading),M=Math.cos(i.heading);if(Zr(i.pos.x+d*m,i.pos.z+M*m)<2.2){const T=i.pos.x+Math.sin(i.heading-.8)*m,R=i.pos.z+Math.cos(i.heading-.8)*m,S=i.pos.x+Math.sin(i.heading+.8)*m,b=i.pos.z+Math.cos(i.heading+.8)*m,D=Zr(T,R),z=Zr(S,b),N=D>z?-1.5:1.5;p=Math.sin(i.heading+N),x=Math.cos(i.heading+N),g=!0}const _=Math.hypot(p,x)||1,v=Math.atan2(p/_,x/_);i.heading=Bl(i.heading,v,1-Math.exp(-s.turn*t)),i.targetSpeed=g?s.speedMin*.45:Ss(s.speedMin,s.speedMax,f>0?1:.7),i.speed=_n(i.speed,i.targetSpeed,1.6,t);const y=Math.sin(i.heading),w=Math.cos(i.heading);i.pos.x+=y*i.speed*t,i.pos.z+=w*i.speed*t,i.vel.set(y*i.speed,0,w*i.speed),m_(i.group,i.pos.x,i.pos.z,e,i.heading,-i.speed*.005)}function A_(i,t,e,n){const s=i.def,r=n.pos.x-i.pos.x,a=n.pos.z-i.pos.z,o=Math.hypot(r,a)||1,l=r/o,c=a/o,h=-c*i.strafeDir,u=l*i.strafeDir;let f=0;n.alive&&(o>s.keepMax?f=1:o<s.keepMin&&(f=-1));let p=l*f+h*(1.1-Math.abs(f)*.5),x=c*f+u*(1.1-Math.abs(f)*.5);const g=Math.hypot(p,x)||1,m=Ss(s.speedMin,s.speedMax,.5+.5*Math.sin(e*.5+i.phase)*.5+.25);i.vel.set(p/g*m,0,x/g*m),i.pos.x+=i.vel.x*t,i.pos.z+=i.vel.z*t,i.hover=Ss(s.hoverMin,s.hoverMax,.5+.5*Math.sin(e*.35+i.phase));const d=Ee(i.pos.x,i.pos.z,e)+i.hover+Math.sin(e*1.7+i.phase)*.25;i.pos.y=d,i.heading=Bl(i.heading,Math.atan2(r,a),1-Math.exp(-3*t)),i.group.rotation.order="YXZ",i.group.rotation.y=i.heading,i.group.rotation.x=-.1,i.group.rotation.z=-i.strafeDir*.28,i.speed=m}function R_(i,t,e,n){const s=i.group.userData.anim;if(!s)return;if(s.prop&&(s.prop.rotation.z+=(4+i.speed*1.2)*t),s.rotors)for(let a=0;a<s.rotors.length;a++)s.rotors[a].rotation.y+=(a%2?1:-1)*42*t;const r=s.turret||s.gimbal;if(r&&n){let o=Math.atan2(n.pos.x-i.pos.x,n.pos.z-i.pos.z)-i.heading;if(o=(o%Bn+Bn)%Bn,o>Math.PI&&(o-=Bn),r.rotation.y=Bl(r.rotation.y,o,1-Math.exp(-4*t)),s.gimbal){const l=Math.hypot(n.pos.x-i.pos.x,n.pos.z-i.pos.z),c=n.pos.y+.5-i.pos.y;r.rotation.x=ee(-Math.atan2(c,Math.max(1,l)),-.6,.6)}}}function C_(i,t,e){const n=i.def,s=fl;i.group.userData.anim.muzzle?i.group.userData.anim.muzzle.getWorldPosition(s):s.set(i.pos.x,i.pos.y+.8,i.pos.z);const r=e/n.shotSpeed,a=Ru.copy(t.pos);a.y+=.5,a.addScaledVector(t.vel,r*.6);const o=dl.subVectors(a,s).normalize();o.applyAxisAngle(yh,P.rng.range(-.052,.052));const l=Cu.crossVectors(o,yh).normalize().multiplyScalar(-1);o.applyAxisAngle(l,P.rng.range(-.03,.03)).normalize(),Lu(s,o,n.shotSpeed,{dmg:n.dmg,friendly:!1,radius:.6,life:2.4}),P.fx.play("muzzleFlash",s,{dir:o,scale:.7,color:16747098}),P.audio.sfx("enemyShoot")}function P_(i){let t=null,e=140;const n=i.forward?i.forward.x:Math.sin(i.heading),s=i.forward?i.forward.z:Math.cos(i.heading);for(const r of P.enemies){if(!r.alive)continue;const a=r.pos.x-i.pos.x,o=r.pos.z-i.pos.z,l=Math.hypot(a,o);l>e||(a*n+o*s)/(l||1)<Math.cos(.8729)||(t=r,e=l)}return t}function D_(i){if(!P.ready||!i||i.alive===!1||P.playerCd>0)return!1;const t=P.t,e=P.playerState,n=!!(e&&e.doubleUntil>t),s=P_(i),r=i.heading,a=i.forward?i.forward.x:Math.sin(r),o=i.forward?i.forward.z:Math.cos(r),l=o,c=-a,h=2.4;let u=null;if(s){u=Ru.set(s.pos.x,s.pos.y+.4,s.pos.z);const p=fl.set(i.pos.x+a*h,i.pos.y+.7,i.pos.z+o*h);for(let x=0;x<2;x++){const g=p.distanceTo(u)/115;u.set(s.pos.x+s.vel.x*g,s.pos.y+.4,s.pos.z+s.vel.z*g)}}const f=n?[-.9,.9]:[0];for(const p of f){const x=i.pos.x+a*h+l*p,g=i.pos.z+o*h+c*p,m=i.pos.y+.7,d=u?dl.set(u.x-x,u.y-m,u.z-g).normalize():dl.set(a,.02,o).normalize();Lu(fl.set(x,m,g),d,115,{dmg:10,friendly:!0,radius:2.8,life:1.15}),P.fx.play("muzzleFlash",{x,y:m,z:g},{dir:d,scale:1}),P.stats.shotsFired++}return P.playerCd=n?.12:.16,P.audio.sfx("shoot"),!0}function Lu(i,t,e,{dmg:n,friendly:s,radius:r,life:a}){let o=null;for(const l of P.shots)if(!l.active){o=l;break}o||(o=P.shots[Math.random()*P.shots.length|0]),o.active=!0,o.mesh.visible=!0,o.mesh.position.copy(i),o.mesh.material=s?P.matShotP:P.matShotE,o.mesh.scale.setScalar(s?1:.85),o.mesh.quaternion.setFromUnitVectors(f_,t),o.vel.copy(t).multiplyScalar(e),o.life=a,o.dmg=n,o.radius=r,o.friendly=s}function I_(i,t,e){for(const n of P.shots){if(!n.active)continue;n.life-=i;const s=n.mesh.position;if(s.addScaledVector(n.vel,i),n.life<=0){ls(n,null);continue}if(s.y<Ee(s.x,s.z,t)){ls(n,"splash");continue}const r=$t(s.x,s.z);if(s.y<r){ls(n,"ground");continue}if(n.friendly){for(const u of P.enemies)if(u.alive&&s.distanceTo(u.pos)<u.radius+n.radius){P.stats.shotsHit++,pl(u,n.dmg,s),ls(n,null);break}if(!n.active)continue}else if(e.alive&&s.distanceTo(e.pos)<e.boatRadius+n.radius){zu(n.dmg,s),ls(n,null);continue}for(const u of P.mines){if(!u.armed)continue;const f=s.x-u.x,p=s.z-u.z;if(f*f+p*p<2.2*2.2&&s.y<4){Qr(u,t),ls(n,null);break}}const a=s.x-Jr.x,o=s.y-Jr.y,l=s.z-Jr.z,c=Math.sqrt(a*a+o*o+l*l),h=c>=13?1:c<=6?0:(c-6)/7;n.mesh.scale.setScalar((n.friendly?1:.85)*h)}}function ls(i,t){if(i.active=!1,i.mesh.visible=!1,!t)return;const e=i.mesh.position;t==="splash"?P.fx.play("splash",e,{scale:.7}):t==="ground"&&(P.fx.play("sparks",e,{color:14206106,scale:.8}),P.fx.play("smoke",e,{scale:.5}))}function zu(i,t){const e=P.player;if(!e||e.alive===!1)return;let n=i;const s=P.playerState;if(s&&s.shield>0&&(s.shieldUntil===void 0||s.shieldUntil>P.t)){const r=Math.min(s.shield,n);s.shield-=r,n-=r,P.fx.play("ringWave",e.pos,{color:ca.shield,r1:5,opacity:.6})}P.fx.play("sparks",t,{color:16753236,scale:.8}),P.audio.sfx("playerHit"),n>0&&P.opts.onPlayerDamage&&P.opts.onPlayerDamage(n,t)}function pl(i,t,e){i.alive&&(i.hp-=t,P.fx.play("sparks",e,{scale:.9}),P.audio.sfx("hit"),i.hp<=0&&L_(i))}function L_(i){i.alive=!1,P.stats.kills++;const t={x:i.pos.x,y:Math.max(.5,i.pos.y),z:i.pos.z};if(P.fx.play("explosion",t,{scale:i.type==="gunboat"?1.4:1}),P.fx.play("debris",t,{scale:i.type==="gunboat"?1.3:1}),P.fx.play("smoke",t,{scale:i.type==="gunboat"?1.4:1}),P.audio.sfx("explosion"),P.opts.onEnemyKilled&&P.opts.onEnemyKilled(i.type,new I(i.pos.x,i.pos.y,i.pos.z)),P.rng.chance(.3)&&Uu(Eu[P.rng.rand()*3|0],i.pos.x,i.pos.z),i.trail){try{i.trail.dispose()}catch{}i.trail=null,P.trailCount=Math.max(0,P.trailCount-1)}i.type==="drone"?P.falls.push({group:i.group,vel:new I(P.rng.range(-3,3),-2,P.rng.range(-3,3)),spin:P.rng.range(-4,4),t:0}):P.sinks.push({group:i.group,t:0,heading:i.heading,roll0:i.group.rotation.z,type:i.type,smokeT:0})}function z_(i,t){for(let e=P.sinks.length-1;e>=0;e--){const n=P.sinks[e];n.t+=i;const s=n.t/s_;n.group.position.y=Ee(n.group.position.x,n.group.position.z,t)-s*s*2.4,n.group.rotation.z=n.roll0+s*.55,n.group.rotation.x=s*.3,n.smokeT-=i,n.smokeT<=0&&s<.8&&(n.smokeT=.4,P.fx.play("smoke",n.group.position,{scale:.6}),P.fx.play("spray",n.group.position,{scale:.5})),s>=1&&(P.scene.remove(n.group),P.sinks.splice(e,1))}for(let e=P.falls.length-1;e>=0;e--){const n=P.falls[e];n.t+=i,n.vel.y-=22*i,n.group.position.addScaledVector(n.vel,i),n.group.rotation.y+=n.spin*i,n.group.rotation.x+=n.spin*.5*i;const s=Ee(n.group.position.x,n.group.position.z,t);(n.group.position.y<=s+.3||n.t>4)&&(P.fx.play("explosion",{x:n.group.position.x,y:.6,z:n.group.position.z},{scale:1.1}),P.fx.play("splash",n.group.position,{scale:1.6}),P.audio.sfx("explosion"),P.scene.remove(n.group),P.falls.splice(e,1))}}function Qr(i,t){if(!i.armed)return;i.armed=!1;const e={x:i.x,y:.5,z:i.z};P.fx.play("explosion",e,{scale:1.7}),P.fx.play("splash",e,{scale:2.2}),P.fx.play("ringWave",e,{color:16769200,r1:14,opacity:.7}),P.audio.sfx("explosion");const n=P.player;if(n&&n.alive!==!1&&n.pos.y<5){const s=Math.hypot(n.pos.x-i.x,n.pos.z-i.z);if(s<16){const r=30*(s<=5?1:ee(1-(s-5)/11,.25,1));zu(r,new I(i.x,.5,i.z))}}for(const s of P.enemies){if(!s.alive)continue;const r=Math.hypot(s.pos.x-i.x,s.pos.z-i.z);r<r_?pl(s,35,s.pos):r<10&&pl(s,35*(10-r)/2,s.pos)}for(const s of P.mines){if(!s.armed||s===i)continue;Math.hypot(s.x-i.x,s.z-i.z)<=a_&&P.chains.push({m:s,t:t+o_})}}function U_(i,t,e){if(e&&e.alive!==!1&&e.pos.y<4)for(const n of P.mines){if(!n.armed)continue;const s=e.pos.x-n.x,r=e.pos.z-n.z;s*s+r*r<kr*kr&&Qr(n,t)}for(const n of P.enemies)if(!(!n.alive||n.type==="drone"||n.state!=="engage"))for(const s of P.mines){if(!s.armed)continue;const r=n.pos.x-s.x,a=n.pos.z-s.z;r*r+a*a<kr*kr&&Qr(s,t)}for(let n=P.chains.length-1;n>=0;n--)if(t>=P.chains[n].t){const s=P.chains[n].m;P.chains.splice(n,1),Qr(s,t)}}function Uu(i,t,e){const{canister:n,glint:s,contact:r}=u_(i),a=new xe;a.add(n,s);const o=new xe;o.add(a);const l=new xe;l.add(o,r),l.scale.setScalar(1.35),l.position.set(t,0,e),P.scene.add(l),P.pickups.push({kind:i,group:l,tilt:o,spin:a,glint:s,contact:r,x:t,z:e,phase:P.rng.range(0,Bn),spinRate:P.rng.range(.6,1.1)})}function N_(i,t,e){for(let n=P.pickups.length-1;n>=0;n--){const s=P.pickups[n];if(Ol(s.x,s.z,t,Fn),s.group.position.y=Ee(s.x,s.z,t),s.tilt.rotation.x=-Math.atan(Fn.z)*.75,s.tilt.rotation.z=Math.atan(Fn.x)*.75,s.spin.position.y=.15+Math.sin(t*1.3+s.phase)*.05,s.spin.rotation.y+=s.spinRate*i,s.contact.position.y=.02+Math.sin(t*1.3+s.phase)*.012,s.contact.rotation.x=-Math.PI/2+ee(Fn.z,-.3,.3),s.contact.rotation.z=ee(Fn.x,-.3,.3),s.glint.scale.set(.35+Math.sin(t*2.4+s.phase)*.04,.35+Math.sin(t*2.4+s.phase)*.04,1),!e||e.alive===!1)continue;const r=e.pos.x-s.group.position.x,a=e.pos.z-s.group.position.z,o=Math.hypot(r,a);if(o<7&&o>.01){const l=(7-o)*2.4+2;s.group.position.x+=r/o*l*i,s.group.position.z+=a/o*l*i,s.x=s.group.position.x,s.z=s.group.position.z}s.group.position.distanceTo(e.pos)<3&&(P.fx.play("pickupBurst",s.group.position,{color:ca[s.kind]}),P.audio.sfx("pickup"),P.opts.onPickup&&P.opts.onPickup(s.kind),P.scene.remove(s.group),P.pickups.splice(n,1))}}function F_(i,t,e){if(P.ready){if(i=Math.min(i,.1),P.t=t,P.player=e,P.playerCd>0&&(P.playerCd-=i),e){const n=e.forward||Cu.set(Math.sin(e.heading),0,Math.cos(e.heading));Jr.set(e.pos.x-n.x*13,e.pos.y+4.8,e.pos.z-n.z*13),P.fx.setForward?.(n)}E_(i,t,e),I_(i,t,e),N_(i,t,e),U_(i,t,e),z_(i,t)}}const Sh={boost:(i,t)=>t<=.055&&t>=-.05&&Math.abs(i)<=.06*((.055-t)/.105),shield:(i,t)=>{const e=Math.hypot(i,t);return e<.062&&e>.034},double:(i,t)=>Math.abs(i)+Math.abs(t)<.062};function O_(){return nr(64,(i,t)=>{const e=i-.5,n=t-.5,s=Math.sqrt(e*e+n*n)*2;return[1,1,1,Math.pow(Math.max(0,1-s),2.6)]})}function B_(){return nr(64,(i,t)=>{const e=i-.5,n=t-.5,s=Math.sqrt(e*e+n*n)*2;return[1,1,1,Math.pow(Math.max(0,1-s),1.7)*.95]})}function k_(i){const t=new rt(ca[i]??ca.boost),e=new rt(oe.dark),n=new rt(Tu),s=Sh[i]??Sh.boost;return nr(256,(r,a)=>{const o=.82+.3*a;let l=t.r*o,c=t.g*o,h=t.b*o;const u=Math.abs(a-.47),f=ee((.115-u)/.035,0,1);return l+=(e.r-l)*f,c+=(e.g-c)*f,h+=(e.b-h)*f,f>.55&&s(r-.5,a-.47)&&(l=n.r,c=n.g,h=n.b),[l,c,h,1]})}function H_(){const i=document.createElement("canvas");i.width=1024,i.height=512;const t=i.getContext("2d"),e=t.createLinearGradient(0,512,0,0);e.addColorStop(0,"#20242a"),e.addColorStop(.4,"#2b3038"),e.addColorStop(.435,"#d8452b"),e.addColorStop(.475,"#ff7a3d"),e.addColorStop(.485,"#ff8c42"),e.addColorStop(.9,"#f76b1c"),e.addColorStop(.965,"#f2e9d8"),e.addColorStop(1,"#e8dcc4"),t.fillStyle=e,t.fillRect(0,0,1024,512);for(let r=0;r<2600;r++)t.fillStyle=`rgba(255,235,200,${Math.random()*.06})`,t.fillRect(Math.random()*1024,Math.random()*512,2,2);const n=(r,a)=>{t.save(),t.translate(r,300),a&&t.scale(-1,1),t.fillStyle="#20242a",t.font='900 120px "Arial Black", sans-serif',t.textAlign="center",t.fillText("07",0,0),t.fillStyle="#f2e9d8",t.fillRect(-70,16,140,8),t.font="700 26px Arial",t.fillText("PATROL DIV · 07",0,60),t.restore()};n(300,!0),n(724,!1),t.save(),t.globalAlpha=.85,t.fillStyle="#f2e9d8",t.beginPath(),t.moveTo(120,210),t.lineTo(210,210),t.lineTo(160,330),t.lineTo(70,330),t.closePath(),t.fill(),t.beginPath(),t.moveTo(854,210),t.lineTo(944,210),t.lineTo(918,330),t.lineTo(828,330),t.closePath(),t.fill(),t.restore(),t.fillStyle="#f2e9d8",t.fillRect(600,80,108,380),t.fillStyle="#ff6a2a",t.beginPath(),t.moveTo(610,200),t.lineTo(654,170),t.lineTo(698,200),t.lineTo(698,230),t.lineTo(654,200),t.lineTo(610,230),t.closePath(),t.fill(),t.fillStyle="#20242a",t.font='900 34px "Arial Black", sans-serif',t.textAlign="center",t.fillText("TIDE",654,330),t.fillText("BREAKER",654,366),t.globalAlpha=.1;for(let r=0;r<90;r++){t.fillStyle="#3a3f47";const a=620+Math.random()*404;t.fillRect(a,60+Math.random()*180,1.5+Math.random()*3,40+Math.random()*120)}t.globalAlpha=1;const s=new fa(i);return s.colorSpace=je,s.anisotropy=4,s}const Hr=[{z:3.82,hw:.05,keel:.3,deck:.98},{z:3.35,hw:.42,keel:-.1,deck:.95},{z:2.6,hw:.86,keel:-.32,deck:.92},{z:1.6,hw:1.14,keel:-.45,deck:.89},{z:.6,hw:1.26,keel:-.52,deck:.86},{z:-.5,hw:1.25,keel:-.51,deck:.84},{z:-1.6,hw:1.19,keel:-.46,deck:.83},{z:-2.6,hw:1.1,keel:-.38,deck:.81},{z:-3.35,hw:1.02,keel:-.31,deck:.8}],cs=[0,.16,.34,.55,.78,1];function bh(i,t,e){const n=i.hw*Math.pow(Math.sin(t*Math.PI/2),.78),s=i.keel+(i.deck-i.keel)*Math.pow(1-Math.cos(t*Math.PI/2),1.25);return[n*e,s,i.z]}function G_(){const i=[],t=[],e=[],n=Hr.length,s=cs.length,r=(o,l,c,h,u)=>{i.push(o,l,c),t.push(h,u)};for(let o of[1,-1]){const l=i.length/3;for(let c=0;c<n;c++)for(let h=0;h<s;h++){const[u,f,p]=bh(Hr[c],cs[h],o),x=o===1?.52+.48*(1-c/(n-1)):.48*(c/(n-1));r(u,f,p,x,cs[h])}for(let c=0;c<n-1;c++)for(let h=0;h<s-1;h++){const u=l+c*s+h,f=u+s;o===1?e.push(u,f,u+1,u+1,f,f+1):e.push(u,u+1,f,u+1,f+1,f)}}{const o=i.length/3;for(let c=0;c<n;c++){const h=Hr[c];r(-h.hw,h.deck,h.z,.3,.995),r(-h.hw*.55,h.deck+.075,h.z,.36,1),r(0,h.deck+.1,h.z,.42,1),r(h.hw*.55,h.deck+.075,h.z,.48,1),r(h.hw,h.deck,h.z,.54,.995)}const l=5;for(let c=0;c<n-1;c++)for(let h=0;h<l-1;h++){const u=o+c*l+h,f=u+l;e.push(u,f,u+1,u+1,f,f+1)}}{const o=i.length/3,l=Hr[n-1];for(let f=0;f<s;f++){const[p,x]=bh(l,cs[f],1);r(p,x,l.z-.02,.62,cs[f]),r(-p,x,l.z-.02,.68,cs[f])}for(let f=0;f<s-1;f++){const p=o+f*2;e.push(p,p+1,p+2,p+2,p+1,p+3)}r(-l.hw,l.deck,l.z-.02,.3,.995),r(l.hw,l.deck,l.z-.02,.54,.995);const c=o+s*2,h=o+(s-1)*2,u=h+1;e.push(h,u,c,c,u,c+1)}const a=new pe;return a.setAttribute("position",new Ht(i,3)),a.setAttribute("uv",new Ht(t,2)),a.setIndex(e),a.computeVertexNormals(),a}function V_(){const i=new xe,t=new He({map:H_(),roughness:.22,metalness:.35}),e=new tt(G_(),t);e.castShadow=!0,i.add(e);const n=new He({color:"#efe6d2",roughness:.55,metalness:.08}),s=new He({color:"#26292f",roughness:.6,metalness:.35}),r=new He({color:"#ff8c42",roughness:.4,metalness:.2}),a=new He({color:"#16303c",roughness:.05,metalness:.95,transparent:!0,opacity:.6}),o=new He({color:"#c98863",roughness:.85}),l=new He({color:"#f2e9d8",roughness:.7}),c=new He({color:"#ff8c42",roughness:.3,metalness:.15}),h=new He({color:"#0c1418",roughness:.15,metalness:.8}),u=new te(1.5,.52,.06),f=new tt(u,a);f.position.set(0,1.16,1.05),f.rotation.x=-.5,f.rotation.y=Math.PI,i.add(f);const p=new tt(new te(1.58,.07,.09),s);p.position.set(0,1.4,.92),p.rotation.x=-.5,i.add(p);for(const E of[-1,1]){const O=new tt(new we(.035,.045,.62,8),s);O.position.set(E*.72,1.14,1.18),O.rotation.x=.42,O.rotation.z=E*-.12,i.add(O)}const x=new tt(new te(.05,.5,.05),s);x.position.set(0,1.18,1.28),x.rotation.x=.42,i.add(x);const g=n,m=new xe,d=new tt(new te(.1,.16,2.5),g);d.position.set(-.72,.92,.15),m.add(d);const M=d.clone();M.position.x=.72,m.add(M);const _=new tt(new te(1.44,.16,.12),g);_.position.set(0,.92,1.32),m.add(_);const v=_.clone();v.position.z=-1,m.add(v),i.add(m);const y=new tt(new te(1.3,.05,2.2),s);y.position.set(0,.845,.15),i.add(y);const w=new tt(new te(1.1,.36,.55),s);w.position.set(0,1.02,.62),i.add(w);const T=new tt(new we(.11,.11,.05,16),h);T.rotation.x=Math.PI/2-.35,T.position.set(-.22,1.24,.55),i.add(T);const R=T.clone();R.position.x=.05,i.add(R);const S=new tt(new Qs(.16,.025,8,20),s);S.rotation.x=-.35,S.position.set(0,1.26,.42),i.add(S);const b=new tt(new te(.66,.5,.16),s);b.position.set(0,.98,.05),i.add(b);const D=new tt(new te(.66,.34,.14),s);D.position.set(0,1.2,-.12),D.rotation.x=.18,i.add(D);const z=new tt(new te(.09,.34,1.15),s);z.position.set(-.62,.86,-2.72),i.add(z);const N=z.clone();N.position.x=.62,i.add(N);const k=new tt(new te(1.32,.34,.1),n);k.position.set(0,.86,-3.26),i.add(k);const H=new tt(new we(1.02,1.02,.34,18,1,!1,-.62,1.24),t);H.rotation.y=-Math.PI/2,H.position.set(0,.86,-3.42),i.add(H);const W=new tt(new te(1.3,.06,1.1),s);W.position.set(0,.68,-2.72),i.add(W);const j=new tt(new te(1.3,.14,.7),n);j.position.set(0,.9,-1.7),i.add(j);const X=new tt(new te(1.24,.07,.6),s);X.position.set(0,.99,-1.7),i.add(X);const nt=new xe,ht=new tt(new la(.19,.34,4,10),l);ht.position.y=1.22,nt.add(ht);const vt=new tt(new te(.4,.3,.3),r);vt.position.y=1.24,nt.add(vt);const Gt=new tt(new sn(.145,14,12),c);Gt.position.y=1.62,nt.add(Gt);const se=new tt(new sn(.15,14,8,0,Math.PI*2,.9,.55),h);se.position.y=1.62,se.rotation.y=Math.PI,nt.add(se);for(const E of[-1,1]){const O=new tt(new la(.055,.3,3,8),o);O.position.set(E*.17,1.25,.22),O.rotation.x=1.15,nt.add(O)}nt.position.set(0,0,.08),i.add(nt);const re=new xe,ne=new tt(new we(.16,.2,.22,12),s);re.add(ne);const $=new tt(new te(.34,.14,.4),s);$.position.y=.16,re.add($);const Q=new xe,gt=new tt(new we(.035,.045,.75,8),s);gt.rotation.x=Math.PI/2,gt.position.set(-.07,.18,.38);const It=gt.clone();It.position.x=.07,Q.add(gt,It);const Et=new tt(new Qs(.06,.015,6,12),r);Et.position.set(0,.18,.74),Q.add(Et),re.add(Q),re.position.set(0,.92,2.3),i.add(re);const jt=new iu([new I(-.95,.86,-2.9),new I(-1.05,1.06,-2.7),new I(-1.05,1.06,-1.4),new I(-.7,1.1,-.9)]),Ne=new tt(new zl(jt,20,.028,6),s);i.add(Ne);const L=Ne.clone();L.scale.x=-1,i.add(L);for(const E of[-1,1]){const O=new tt(new te(.1,.05,.22),n);O.position.set(E*.75,.86,-2.95),i.add(O)}const Qt=new xe,kt=new tt(new te(.42,.34,.62),s);kt.position.y=.85,Qt.add(kt);const zt=new tt(new sn(.24,12,8),s);zt.scale.set(.92,.6,1.4),zt.position.set(0,1,.04),Qt.add(zt);const yt=new tt(new te(.06,.16,.5),r);yt.position.set(0,1.12,-.08),Qt.add(yt);const me=new tt(new te(.44,.09,.5),r);me.position.y=.93,Qt.add(me);const St=new tt(new we(.05,.05,.9,8),s);St.position.y=.2,Qt.add(St);const Vt=new tt(new te(.06,.5,.2),s);Vt.position.set(0,-.12,-.16),Qt.add(Vt);const ye=new xe;for(let E=0;E<3;E++){const O=new tt(new te(.055,.26,.015),r);O.position.y=.12;const Y=new xe;Y.rotation.x=E/3*Math.PI*2,O.rotation.z=.5,Y.add(O),ye.add(Y)}ye.position.y=-.28,Qt.add(ye),Qt.position.set(0,-.1,-3.55),i.add(Qt);const Me=new tt(new sn(.045,8,6),new Qe({color:"#ff3b3b"}));Me.position.set(1.16,.9,-1),i.add(Me);const C=new tt(new sn(.045,8,6),new Qe({color:"#3bff6e"}));return C.position.set(-1.16,.9,-1),i.add(C),{group:i,prop:ye,turretGroup:re,driver:nt,motor:Qt}}const Gs=34,W_=46,X_=15,q_=1.65,wh=.55;class Y_{constructor(t){this.scene=t;const e=V_();this.model=e.group,this.prop=e.prop,this.turret=e.turretGroup,this.driver=e.driver,this.motor=e.motor,t.add(this.model),this.wake=new mu(t),this.bowWave=new Px(t),this.blobShadow=new tt(new rr(1,24),new Qe({color:"#06222c",transparent:!0,opacity:.3,depthWrite:!1})),this.blobShadow.rotation.x=-Math.PI/2,this.blobShadow.scale.set(2.6,4.2,1),this.blobShadow.renderOrder=1,t.add(this.blobShadow),this.pos=new I,this.vel=new I,this.forward=new I(0,0,-1),this.heading=Math.PI,this.speed=0,this.airborne=!1,this.airTime=0,this.launchedThisRun=!1,this.groundTimer=0,this.hurtCooldown=0,this.roll=0,this.pitch=0,this.visualYaw=0,this.propSpin=0,this.boatRadius=2.4,this.alive=!0,this.state={hull:100,maxHull:100,shield:0,shieldUntil:0,doubleUntil:0,boostMeter:100},this.events=null,this.time=0,this.lastGrindFx=0,this.sinkT=0}reset(t){this.pos.set(t.x,.4,t.z),this.heading=t.heading,this.vel.set(0,0,0),this.speed=0,this.airborne=!1,this.airTime=0,this.launchedThisRun=!1,this.alive=!0,this.roll=this.pitch=0,Object.assign(this.state,{hull:100,shield:0,shieldUntil:0,doubleUntil:0,boostMeter:100})}applyDamage(t,e){if(!this.alive)return;const n=this.time;let s=t;if(n<this.state.shieldUntil&&this.state.shield>0){const r=Math.min(this.state.shield,s);this.state.shield-=r,s-=r,this.events?.onEvent("shieldHit",{absorbed:r})}s>0&&(this.state.hull=Math.max(0,this.state.hull-s),this.events?.onEvent("playerHit",{dmg:s,kind:e}),this.state.hull<=0&&(this.alive=!1,this.events?.onEvent("playerDead",{})))}update(t,e,n){this.time+=t;const s=this.time,r=this.state;if(!this.alive){this.sinkT=Math.min(2.6,this.sinkT+t),this.pos.y=Math.max(Ee(this.pos.x,this.pos.z,s)-this.sinkT*.55,-1.6),this.vel.multiplyScalar(Math.exp(-1.5*t)),this.updateVisual(t,s,0,0,!0),this.wake.update(t,s,this.pos,this.heading,0);return}const a=this.forward.set(Math.sin(this.heading),0,Math.cos(this.heading)),o=Math.cos(this.heading),l=-Math.sin(this.heading),c=n.hold===!0,h=e.ap||null,u=c?0:h?h.throttle:n.noControls?.8:e.throttle,f=c||n.noControls?0:h?h.steer:e.steer,p=!c&&!n.noControls&&(h?h.boost&&r.boostMeter>25:e.boosting&&r.boostMeter>1)&&u>0;r.boosting=p,p?r.boostMeter=Math.max(0,r.boostMeter-27*t):r.boostMeter=Math.min(100,r.boostMeter+5.5*t);const x=Ee(this.pos.x,this.pos.z,s);if(this.airborne){if(this.airTime+=t,this.vel.y-=12.5*t,this.pos.addScaledVector(this.vel,t),this.heading-=f*.45*t,this.pos.y<=x+.12){this.pos.y=x+.12,this.airborne=!1;const y=Math.abs(this.vel.y);this.vel.y=0,this.vel.x*=.9,this.vel.z*=.9,this.events?.onEvent(this.airTime>.7?"landing":"smallLanding",{airTime:this.airTime,impactSpeed:y}),this.airTime=0}}else{const y=p?W_:Gs,w=u>0?X_*u*(p?1.85:1)*(1-.72*Math.max(0,this.speed/y)):u<0?11*u*(this.speed>1?.15:1):0;let T=this.vel.x*a.x+this.vel.z*a.z,R=this.vel.x*o+this.vel.z*l;T+=w*t,T*=Math.exp(-.18*t),T=Math.min(T,y*1.02),R*=Math.exp(-6.2*t),this.vel.x=a.x*T+o*R,this.vel.z=a.z*T+l*R,this.speed=Math.hypot(this.vel.x,this.vel.z);const S=ee(Math.abs(T)/7,0,1),b=1-.34*ee(Math.abs(T)/Gs,0,1),D=1+Math.min(.5,Math.abs(R)*.05),z=T<-.5?-1:1;this.heading-=f*q_*S*b*D*z*t;const N=.12+ee(this.speed/Gs,0,1)*.22,H=x+N-this.pos.y;this.vel.y=H*9,this.pos.y+=this.vel.y*t}this.pos.x+=this.vel.x*t,this.pos.z+=this.vel.z*t;const g=this.pos.z-this.vel.z*t;!this.launchedThisRun&&!this.airborne&&g>Pi.launchZ&&this.pos.z<=Pi.launchZ&&Math.abs(this.pos.x-106)<26&&this.speed>Pi.launchMinSpeed&&(this.launchedThisRun=!0,this.airborne=!0,this.airTime=0,this.vel.y=Pi.launchUpVel,this.vel.x+=a.x*Pi.launchFwdBonus,this.vel.z+=a.z*Pi.launchFwdBonus,this.events?.onEvent("launch",{}));const d=-$t(this.pos.x,this.pos.z),M=this.pos.z<-748&&this.pos.z>-800&&Math.abs(this.pos.x-110)<30;if(d<wh&&!M){const y=kl(this.pos.x,this.pos.z),w=wh-d;this.pos.x+=y.x*w*8*t*10,this.pos.z+=y.z*w*8*t*10;const T=this.vel.x*y.x+this.vel.z*y.z;T<0&&(this.vel.x-=y.x*T*(d<.05?1.6:1.05),this.vel.z-=y.z*T*(d<.05?1.6:1.05)),this.vel.x*=Math.exp(-2.6*t),this.vel.z*=Math.exp(-2.6*t),this.groundTimer+=t,this.hurtCooldown-=t,s-this.lastGrindFx>.08&&(this.lastGrindFx=s,this.events?.onEvent("grind",{})),d<.02&&this.hurtCooldown<=0&&this.speed>6&&!M&&(this.hurtCooldown=.75,this.applyDamage(8,"collision"))}else this.groundTimer=0;this.speed=Math.hypot(this.vel.x,this.vel.z),this.updateVisual(t,s,f,u),this.wake.update(t,s,this.pos,this.heading,this.speed),this.bowWave.update(t,s,this.pos,this.heading,this.speed);const _=Ee(this.pos.x,this.pos.z,s)+.025;this.blobShadow.position.set(this.pos.x,_,this.pos.z),this.blobShadow.rotation.z=-this.heading;const v=ee(this.speed/Gs,0,1);this.blobShadow.material.opacity=this.airborne?.08:.3-v*.14,this.blobShadow.scale.set(2.6-v*.5,4.2-v*.8,1)}updateVisual(t,e,n,s,r=!1){const a=this.model;if(a.position.copy(this.pos),r){this.pitch=_n(this.pitch,.9,1.2,t),this.roll=_n(this.roll,.5,.8,t),a.rotation.set(this.pitch,this.heading,this.roll,"YXZ");return}const o=n*(.3+.16*ee(this.speed/Gs,0,1))*(this.airborne?.4:1);this.roll=_n(this.roll,o,7,t);let l;if(this.airborne)l=ee(-this.vel.y*.045,-.34,.3);else{const c=Ol(this.pos.x,this.pos.z,e),h=-(c.x*Math.sin(this.heading)+c.z*Math.cos(this.heading)),u=(this.state.boosting?-.045:0)-s*.02;l=h*.8+u+(this.speed>20?-.03:0)}this.pitch=_n(this.pitch,l,6,t),a.rotation.set(this.pitch,this.heading,this.roll,"YXZ"),this.propSpin+=(2+this.speed*1.4+(s>0?8:0))*t*6,this.prop.rotation.y=this.propSpin,this.motor.rotation.y=n*.35,this.driver.rotation.z=n*.12,this.turret&&(this.turret.rotation.x=0)}}class K_{constructor(t){this.cam=t,this.pos=new I(0,8,920),this.look=new I,this.trauma=0,this.fov=62,this.shakeTime=0,this._tmp=new I,this._lookTmp=new I}shake(t){this.trauma=Math.min(1,this.trauma+t)}update(t,e,n,s,r){const a=n.pos,o=n.forward,l=ee(n.speed/34,0,1.4),c=10.2+l*4.5,h=4.3+l*.8+(n.airborne?1.6:0),u=this._tmp.set(a.x-o.x*c,a.y+h,a.z-o.z*c),f=s?7.5:5.2;this.pos.x=_n(this.pos.x,u.x,f,t),this.pos.y=_n(this.pos.y,u.y,f*.9,t),this.pos.z=_n(this.pos.z,u.z,f,t);const p=Ee(this.pos.x,this.pos.z,e);this.pos.y<p+1.1&&(this.pos.y=p+1.1);const x=n.vel.x,g=n.vel.z,m=Math.hypot(x,g)||1;this._lookTmp.set(a.x+o.x*7+x/m*l*6,a.y+1.6,a.z+o.z*7+g/m*l*6),this.look.x=_n(this.look.x,this._lookTmp.x,9,t),this.look.y=_n(this.look.y,this._lookTmp.y,9,t),this.look.z=_n(this.look.z,this._lookTmp.z,9,t),this.trauma=Math.max(0,this.trauma-t*1.6);const d=this.trauma*this.trauma;this.shakeTime+=t*34;const M=Math.sin(this.shakeTime*1.13)*d*.55,_=Math.sin(this.shakeTime*.97+2.1)*d*.4;this.cam.position.set(this.pos.x+M,this.pos.y+_,this.pos.z),this.cam.lookAt(this.look),this.cam.rotation.z+=n.roll*.22+M*.03;const v=s?74:62+l*3;this.fov=_n(this.fov,v,4,t),this.cam.fov!==this.fov&&(this.cam.fov=this.fov,this.cam.updateProjectionMatrix())}}class $_{constructor(){this.el={root:document.getElementById("hud"),gate:document.getElementById("hud-gate"),timer:document.getElementById("hud-timer"),speed:document.getElementById("hud-speed"),boost:document.getElementById("boost-bar"),hull:document.getElementById("hull-bar"),shield:document.getElementById("shield-bar"),shieldRow:null,wpn:document.getElementById("wpn-state"),kills:document.getElementById("hud-kills"),hint:document.getElementById("hud-hint"),toasts:document.getElementById("toasts"),dmgFlash:document.getElementById("dmg-flash"),boostVig:document.getElementById("boost-vignette"),countdown:document.getElementById("countdown"),countNum:document.getElementById("countdown-num"),countSub:document.getElementById("countdown-sub")},this.visible=!0,this._flashT=0,this._hintT=0}setVisible(t){this.visible=t,this.el.root.classList.toggle("hidden",!t)}toast(t,e=""){if(!this.visible)return;const n=performance.now();for(const r of this.el.toasts.children)if(r.textContent===t&&n-(r._t||0)<2600)return;for(;this.el.toasts.children.length>=3;)this.el.toasts.firstChild.remove();const s=document.createElement("div");s.className="toast"+(e?" "+e:""),s.textContent=t,s._t=n,this.el.toasts.appendChild(s),setTimeout(()=>s.remove(),2200)}hint(t,e=3.4){this.el.hint.textContent=t,this._hintT=e}flashDamage(t=1){this._flashT=Math.max(this._flashT,.35*t)}update(t,e,n,s){const r=n.state;this.el.speed.textContent=Math.round(n.speed*1.944*1.35),this.el.boost.style.width=`${r.boostMeter}%`,this.el.hull.style.width=`${r.hull/r.maxHull*100}%`;const a=e.time,o=a<r.shieldUntil&&r.shield>0;this.el.shield.style.width=o?`${r.shield/50*100}%`:"0%";const l=a<r.doubleUntil;this.el.wpn.textContent=l?"DOUBLE SHOT":"SINGLE SHOT",this.el.wpn.style.color=l?"#ffe14d":"#9db8b6",this.el.gate.innerHTML=e.finished?"FINISH":`GATE <b>${Math.min(e.gate+1,Re.length)}</b>/${Re.length}`;const c=Math.floor(e.time/60),h=e.time%60;this.el.timer.textContent=`${c}:${h.toFixed(1).padStart(4,"0")}`,this.el.kills.textContent=`KILLS ${s?s.stats.kills:0}`+(s&&s.enemiesAlive()>0?` · ${s.enemiesAlive()} HOSTILE`:""),this._flashT=Math.max(0,this._flashT-t),this.el.dmgFlash.style.opacity=ee(this._flashT*2.4,0,.85),this.el.boostVig.style.opacity=r.boosting?.5:0,this._hintT>0&&(this._hintT-=t,this._hintT<=0&&(this.el.hint.textContent=""))}countdown(t,e){this.el.countdown.classList.remove("hidden"),this.el.countNum.textContent=t,this.el.countSub.textContent=e||""}hideCountdown(){this.el.countdown.classList.add("hidden")}}const ta=196,qs=236,ws=16,ml=-700,Nu=1180,gl=-1420,Fu=1100,Ei=i=>ws+(i-ml)/(Nu-ml)*(ta-ws*2),Ti=i=>qs-ws-(i-gl)/(Fu-gl)*(qs-ws*2);class Z_{constructor(t){this.cv=t,this.g=t.getContext("2d"),this.blink=0}draw(t,e,n,s){const r=this.g;this.blink+=t,r.clearRect(0,0,ta,qs),r.fillStyle="rgba(8, 42, 54, 0.0)",r.fillRect(0,0,ta,qs),r.fillStyle="rgba(94, 138, 108, 0.55)";for(const c of Hn)r.beginPath(),r.ellipse(Ei(c.x),Ti(c.z),c.r/(Nu-ml)*(ta-ws*2)*1.02,c.r/(Fu-gl)*(qs-ws*2)*1.02,0,0,Math.PI*2),r.fill();r.strokeStyle="rgba(47, 214, 195, 0.35)",r.lineWidth=2,r.setLineDash([4,4]),r.beginPath(),r.moveTo(Ei(n.pos.x),Ti(n.pos.z));for(let c=0;c<Re.length;c++)r.lineTo(Ei(Re[c].x),Ti(Re[c].z));r.stroke(),r.setLineDash([]);const a=n.nextGate??0;for(let c=0;c<Re.length;c++){const h=c===a,u=c===Re.length-1;r.fillStyle=c<a?"rgba(120, 200, 190, 0.35)":h?Math.sin(this.blink*6)>0?"#ffd166":"#ffb347":u?"#ff6a4d":"rgba(47, 214, 195, 0.8)";const f=h?4.5:u?4:2.6;r.beginPath(),r.arc(Ei(Re[c].x),Ti(Re[c].z),f,0,Math.PI*2),r.fill()}s&&s.eachEnemy&&s.eachEnemy(c=>{r.fillStyle="#ff4747",r.beginPath(),r.arc(Ei(c.pos.x),Ti(c.pos.z),3,0,Math.PI*2),r.fill()}),s&&s.eachPickup&&s.eachPickup(c=>{r.fillStyle={boost:"#ffb347",shield:"#59b7ff",double:"#ffe14d"}[c.kind],r.fillRect(Ei(c.pos.x)-1.5,Ti(c.pos.z)-1.5,3,3)});const o=Ei(n.pos.x),l=Ti(n.pos.z);r.save(),r.translate(o,l),r.rotate(Math.atan2(-Math.cos(n.heading),Math.sin(n.heading))+Math.PI/2),r.fillStyle="#ffffff",r.strokeStyle="rgba(0,0,0,0.5)",r.lineWidth=1,r.beginPath(),r.moveTo(0,-6),r.lineTo(4.2,5),r.lineTo(0,2.6),r.lineTo(-4.2,5),r.closePath(),r.fill(),r.stroke(),r.restore()}}const ea={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Rs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const j_=new Nl(-1,1,1,-1,0,1);class J_ extends pe{constructor(){super(),this.setAttribute("position",new Ht([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ht([0,2,0,0,2,0],2))}}const Q_=new J_;class ql{constructor(t){this._mesh=new tt(Q_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,j_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Ou extends Rs{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Pe?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Js.clone(t.uniforms),this.material=new Pe({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new ql(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Eh extends Rs{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class t1 extends Rs{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class e1{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new ft);this._width=n.width,this._height=n.height,e=new Cn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Jn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ou(ea),this.copyPass.material.blending=Zn,this.clock=new Pd}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Eh!==void 0&&(a instanceof Eh?n=!0:a instanceof t1&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new ft);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class n1 extends Rs{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new rt}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}}const i1={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new rt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Es extends Rs{constructor(t,e=1,n,s){super(),this.strength=e,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new ft(t.x,t.y):new ft(256,256),this.clearColor=new rt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Cn(r,a,{type:Jn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const u=new Cn(r,a,{type:Jn});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const f=new Cn(r,a,{type:Jn});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}const o=i1;this.highPassUniforms=Js.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Pe({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ft(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Js.clone(ea.uniforms),this.blendMaterial=new Pe({uniforms:this.copyUniforms,vertexShader:ea.vertexShader,fragmentShader:ea.fragmentShader,blending:jn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new rt,this._oldClearAlpha=1,this._basic=new Qe,this._fsQuad=new ql(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ft(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Es.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Es.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Pe({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new ft(.5,.5)},direction:{value:new ft(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}_getCompositeMaterial(t){return new Pe({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Es.BlurDirectionX=new ft(1,0);Es.BlurDirectionY=new ft(0,1);const Gr={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class s1 extends Rs{constructor(){super(),this.uniforms=Js.clone(Gr.uniforms),this.material=new Md({name:Gr.name,uniforms:this.uniforms,vertexShader:Gr.vertexShader,fragmentShader:Gr.fragmentShader}),this._fsQuad=new ql(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ie.getTransfer(this._outputColorSpace)===ce&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Rh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Ch?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Ph?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===_l?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ih?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Lh?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Dh&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const r1={uniforms:{tDiffuse:{value:null},uVignette:{value:.42},uSat:{value:1.3},uWarm:{value:.075},uTealShadows:{value:.08},uDamage:{value:0}},vertexShader:`
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float uVignette, uSat, uWarm, uTealShadows, uDamage;
    varying vec2 vUv;
    void main() {
      vec4 c = texture2D(tDiffuse, vUv);
      // contrast + gentle S-curve
      c.rgb = clamp((c.rgb - 0.5) * 1.055 + 0.5, 0.0, 1.0);
      // saturation
      float l = dot(c.rgb, vec3(0.2126, 0.7152, 0.0722));
      c.rgb = mix(vec3(l), c.rgb, uSat);
      // warm highlights, teal shadows (split-tone)
      float hi = smoothstep(0.55, 1.0, l);
      float lo = 1.0 - smoothstep(0.0, 0.5, l);
      c.rgb += vec3(uWarm, uWarm * 0.55, 0.0) * hi;
      c.rgb += vec3(0.0, uTealShadows * 0.5, uTealShadows) * lo;
      // damage desaturation pulse
      if (uDamage > 0.001) {
        c.rgb = mix(c.rgb, vec3(l) * vec3(1.15, 0.5, 0.45), uDamage * 0.7);
      }
      // vignette
      vec2 d = vUv - 0.5;
      float vig = 1.0 - dot(d, d) * uVignette * 2.2;
      c.rgb *= clamp(vig, 0.0, 1.0);
      gl_FragColor = c;
    }`};function a1(i,t,e,n){const s=new e1(i);s.addPass(new n1(t,e));let r=null;n!=="low"&&(r=new Es(new ft(1920,1080),.2,.5,.93),s.addPass(r));const a=new Ou(r1);s.addPass(a);const o=new s1;return s.addPass(o),{composer:s,bloom:r,grade:a,setSize(l,c){s.setSize(l,c)},setDamageFlash(l){a.uniforms.uDamage.value=l},render(l){s.render(l)}}}const o1={low:"low",medium:"medium",high:"high"};class l1{constructor(){const t=new URLSearchParams(location.search);this.quality=o1[t.get("quality")]||(navigator.hardwareConcurrency>=8?"high":"medium"),this.filmMode=t.get("film")||null,this.demoMode=t.get("demo")==="1",this.seed=parseInt(t.get("seed")||"7",10)||7,this.timeScale=Math.min(1,Math.max(.1,parseFloat(t.get("slowmo")||"1")||1)),this.renderer=new dx({canvas:document.getElementById("gl"),antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,this.quality==="high"?2:1.5)),this.renderer.outputColorSpace=je,this.renderer.toneMapping=_l,this.renderer.toneMappingExposure=1.02,this.quality!=="low"&&(this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Ah),this.scene=new Jf,this.camera=new Mn(62,innerWidth/innerHeight,.3,4200),this.camera.position.set(0,14,960),this.sky=wx(this.scene,this.renderer,this.quality),this.water=Ax(this.scene,this.quality),this.input=new px,this.player=new Y_(this.scene),this.player.events={onEvent:(e,n)=>this.onPlayerEvent(e,n)},this.chase=new K_(this.camera),this.hud=new $_,this.minimap=new Z_(document.getElementById("minimap")),this.buildGates(),this.world=null,this.combat=null,this.fx=null,this.audio=null,this.post=a1(this.renderer,this.scene,this.camera,this.quality),this.state="menu",this.run={gate:0,time:0,finished:!1,film:!!this.filmMode},this.t=0,this.wallT=0,this.menuAngle=0,this.accumulator=0,this.sprayAcc=0,this.ambushDone=!1,this.deadTimer=0,this.endShown=!1,this._last=performance.now(),this._rafId=null,window.addEventListener("resize",()=>this.onResize()),this.onResize(),this.wireUI(),this.loadModules(),this.startLoop()}loadModules(){this.world=Ov(this.scene,this.quality,null),this.audio=kv,this.audio.init(),this.fx=t_,this.fx.init(this.scene,this.quality),this.combat=Pu,this.combat.init(this.scene,{playerState:this.player.state,onPlayerDamage:(t,e)=>this.player.applyDamage(t,"enemy"),onEnemyKilled:(t,e)=>{this.hud.toast("HOSTILE DOWN","warn")},onPickup:t=>this.applyPickup(t),toast:(t,e)=>this.hud.toast(t,e),fx:this.fx,audio:this.audio,quality:this.quality,WakeTrail:mu})}buildGates(){this.gateMeshes=[];const t=new we(.42,.55,1.5,10),e=new we(.06,.06,2.6,6),n=new pe;n.setAttribute("position",new Ht([0,0,0,1.5,.35,0,0,.7,0],3)),n.computeVertexNormals();for(let s=0;s<Re.length;s++){const r=Re[s],a=eh(s),o=s===th,l=new xe,c={buoy:new He({color:o?"#ff6a4d":"#2fd6c3",roughness:.5}),pole:new He({color:"#e8dcc4",roughness:.6}),flag:new He({color:o?"#ffd166":"#ffb347",side:Ie,roughness:.8})},h=Math.cos(a),u=-Math.sin(a),f=[];for(const p of[-1,1]){const x=new xe,g=new tt(t,c.buoy);g.castShadow=!0;const m=new tt(e,c.pole);m.position.y=1.9;const d=new tt(n,c.flag);d.position.y=2.6,p<0&&(d.scale.x=-1),x.add(g,m,d),x.position.set(r.x+h*p*Ci/2,0,r.z+u*p*Ci/2),l.add(x),f.push(x)}if(o){const p=new we(.16,.22,9,8),x=new He({color:"#3d4750",roughness:.5,metalness:.4});for(const v of[-1,1]){const y=new tt(p,x);y.position.set(r.x+h*v*Ci/2,4.2,r.z+u*v*Ci/2),y.castShadow=!0,l.add(y);const w=new tt(new te(1.6,1.2,1.6),new He({color:"#5a6672",roughness:.8}));w.position.set(y.position.x,.4,y.position.z),l.add(w);const T=new tt(new dn(1.1,.7),new Qe({color:"#ff6a4d",side:Ie}));T.position.set(y.position.x,8.2,y.position.z),l.add(T)}const g=new tt(new te(Ci+5,.5,.5),x);g.position.set(r.x,8.9,r.z),g.rotation.y=-a,l.add(g);const m=document.createElement("canvas");m.width=512,m.height=96;const d=m.getContext("2d");for(let v=0;v<16;v++)for(let y=0;y<3;y++)d.fillStyle=(v+y)%2?"#101418":"#f2e9d8",d.fillRect(v*32,y*32,32,32);d.fillStyle="#ff6a4d",d.fillRect(0,40,512,16);const M=new fa(m),_=new tt(new dn(Ci+4,2.4),new Qe({map:M,side:Ie}));_.position.set(r.x,7.4,r.z),_.rotation.y=-a,l.add(_)}this.scene.add(l),this.gateMeshes.push({group:l,pair:f,baseAngles:f.map(()=>0),mats:c})}{const s=new xe,r=new He({color:"#ffc94d",roughness:.35,metalness:.45,emissive:"#7a5210",emissiveIntensity:.5}),a=new He({color:"#26292f",roughness:.6}),o=new tt(new Ll(.34),r);o.scale.set(.8,.55,2.6),s.add(o);for(const c of[-1,1]){const h=new tt(new te(.9,.06,.5),r);h.position.set(c*.5,0,-.55),h.rotation.y=c*.5,s.add(h)}const l=new tt(new Qs(.3,.05,8,18),a);l.position.z=-.9,s.add(l),this.gateArrow=s,this.gateArrow.visible=!1,this.scene.add(this.gateArrow)}}updateGates(t,e){for(let n=0;n<this.gateMeshes.length;n++){const s=this.gateMeshes[n],r=n===this.run.gate;for(let o=0;o<s.pair.length;o++){const l=s.pair[o];l.position.y=Ee(l.position.x,l.position.z,e)*.85-.35,l.rotation.z=Math.sin(e*1.4+o*2.1+n)*.05,l.rotation.x=Math.cos(e*1.1+o*1.7+n)*.05;const c=l.children[2];c&&(c.rotation.y=Math.sin(e*3.1+n+o*2)*(r?.55:.3))}const a=r?1+Math.sin(e*4)*.12:1;s.pair[0].scale.setScalar(a),s.pair[1].scale.setScalar(2-a)}}wireUI(){const t=n=>document.getElementById(n);this.ui={start:t("screen-start"),pause:t("screen-pause"),end:t("screen-end"),endTitle:t("end-title"),endSub:t("end-sub"),endStats:t("end-stats"),btnStart:t("btn-start"),btnResume:t("btn-resume"),btnRestart:t("btn-restart"),btnQuit:t("btn-quit"),btnAgain:t("btn-again")};const e=n=>{n.querySelectorAll("button").forEach(s=>{s.dataset.q===this.quality?s.classList.add("sel"):s.classList.remove("sel"),s.addEventListener("click",()=>this.setQuality(s.dataset.q))})};e(t("quality-opts")),e(t("quality-opts-pause")),this.ui.btnStart.addEventListener("click",()=>this.startRun()),this.ui.btnAgain.addEventListener("click",()=>this.startRun()),this.ui.btnResume.addEventListener("click",()=>this.setPaused(!1)),this.ui.btnRestart.addEventListener("click",()=>this.startRun()),this.ui.btnQuit.addEventListener("click",()=>this.quitToTitle())}setQuality(t){this.quality=t,this.renderer.shadowMap.enabled=t!=="low",this.sky.sun.castShadow=t!=="low",this.water&&(this.water.uniforms.uDetail.value=t==="low"?.5:1),document.querySelectorAll(".quality-opts button").forEach(e=>{e.classList.toggle("sel",e.dataset.q===t)}),this.audio?.sfx("ui")}startRun(){this.audio?.init(),this.audio?.startRun(),this.resetRun(),this.state="countdown",this.countT=this.run.film?.8:3.2,this.ui.start.classList.add("hidden"),this.ui.end.classList.add("hidden"),this.ui.pause.classList.add("hidden"),this.hud.setVisible(!0),this.hud.hideCountdown(),this.hud.toast(this.run.film?`FILM MODE · ${io[this.filmMode].label.toUpperCase()}`:"PATROL 07 · GO!","warn"),this.input.blocked=!1}resetRun(){const t=this.filmMode&&io[this.filmMode];t?(this.player.reset(t),this.run.gate=t.gate,this.run.film=!0):(this.player.reset(no),this.run.gate=0,this.run.film=!1),this.run.time=0,this.run.finished=!1,this.ambushDone=!1,this.deadTimer=0,this.endShown=!1,this.combat?.reset({gate:this.run.gate,film:!!t})}setPaused(t){this.state!=="playing"&&this.state!=="paused"||(this.state=t?"paused":"playing",this.ui.pause.classList.toggle("hidden",!t),t&&this.audio?.setEngine({speed01:0,throttle01:0,boosting:!1}))}quitToTitle(){this.state="menu",this.ui.pause.classList.add("hidden"),this.ui.end.classList.add("hidden"),this.ui.start.classList.remove("hidden"),this.hud.setVisible(!1),this.audio?.stopRun(),this.resetRun()}applyPickup(t){const e=this.player.state;t==="boost"&&(e.boostMeter=Math.min(100,e.boostMeter+45),this.hud.toast("BOOST CELLS +45","warn")),t==="shield"&&(e.shield=50,e.shieldUntil=this.t+12,this.hud.toast("SHIELD ONLINE")),t==="double"&&(e.doubleUntil=this.t+12,this.hud.toast("DOUBLE SHOT","warn")),this.audio?.sfx("pickup")}onPlayerEvent(t,e){switch(t){case"launch":this.hud.toast("WATERFALL LAUNCH!","warn"),this.audio?.sfx("boost"),this.chase.shake(.35);break;case"landing":{this.fx?.play("landingPlume",this.player.pos,{speed:this.player.speed}),this.audio?.sfx("landSplash"),this.chase.shake(.55);break}case"smallLanding":this.fx?.play("splash",this.player.pos,{strength:e.impactSpeed*.2}),this.chase.shake(Math.min(.3,e.impactSpeed*.03));break;case"grind":this.fx?.play("spray",this.player.pos,{sand:!0,rate:1});break;case"playerHit":this.hud.flashDamage(1),this.chase.shake(.4),this.audio?.sfx("playerHit");break;case"shieldHit":this.hud.flashDamage(.3),this.audio?.sfx("hit");break;case"playerDead":this.fx?.play("explosion",this.player.pos,{big:!0}),this.audio?.sfx("explosion"),this.audio?.sfx("lose"),this.state="failed",this.deadTimer=2.4,this.chase.shake(1);break}}showEnd(t){this.state=t?"failed":"finished";const e=this.combat?this.combat.stats:{kills:0,shotsFired:0,shotsHit:0},n=e.shotsFired>0?Math.round(100*e.shotsHit/e.shotsFired):0,s=Math.floor(this.run.time/60),r=(this.run.time%60).toFixed(1);this.ui.endTitle.textContent=t?"HULL LOST":"MISSION COMPLETE",this.ui.endTitle.className=t?"bad":"good",this.ui.endSub.textContent=t?"THE SEA CLAIMS ANOTHER — PATROL 07 SIGNAL LOST":"HARBOR NINE SECURED · PATROL 07 DELIVERED";let a="B";t||(this.run.time<150&&n>40?a="S":this.run.time<210?a="A":this.run.time>320&&(a="C")),this.ui.endStats.innerHTML=`
      <div class="end-stat"><span class="k">TIME</span><span class="v gold">${s}:${r.padStart(4,"0")}</span></div>
      <div class="end-stat"><span class="k">RANK</span><span class="v gold">${t?"—":a}</span></div>
      <div class="end-stat"><span class="k">KILLS</span><span class="v">${e.kills}</span></div>
      <div class="end-stat"><span class="k">ACCURACY</span><span class="v">${n}%</span></div>`,this.ui.end.classList.remove("hidden"),this.hud.setVisible(!1),t||this.audio?.sfx("win")}onResize(){this.camera.aspect=innerWidth/innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(innerWidth,innerHeight),this.post?.setSize(innerWidth,innerHeight)}autopilot(){const t=this.player,e=Re[Math.min(this.run.gate,Re.length-1)],n=e.x-t.pos.x,s=e.z-t.pos.z;let a=Math.atan2(n,s)-t.heading;for(;a>Math.PI;)a-=Math.PI*2;for(;a<-Math.PI;)a+=Math.PI*2;let o=ee(-a*2.4,-1,1);const l=t.pos.x+Math.sin(t.heading)*26,c=t.pos.z+Math.cos(t.heading)*26;if(Zr(l,c)<1.4){const h=kl(l,c);o=ee(o-(h.x*Math.cos(t.heading)-h.z*Math.sin(t.heading))*3.2,-1,1)}this.ap={throttle:1,steer:o,boost:Math.abs(a)<.12&&this.run.gate>0}}step(t){const e=this.player,n=e.pos.x,s=e.pos.z;if(this.demoMode&&(this.autopilot(),this.input.ap=this.ap),e.update(t,this.input,{noControls:this.state!=="playing"}),!this.run.finished&&this.run.gate<Re.length){const o=this.run.gate,l=Re[o];xx(l,eh(o),e.pos.x,e.pos.z,n,s)&&(this.run.gate++,this.combat?.onGatePassed(o),o===th?(this.run.finished=!0,this.fx?.play("gatePulse",new I(l.x,1,l.z),{finish:!0}),this.audio?.sfx("win"),this.endShown=!0,setTimeout(()=>this.showEnd(!1),900)):(this.hud.toast(`GATE ${o+1} CLEAR · ${Re.length-o-1} TO GO`,""),this.fx?.play("gatePulse",new I(l.x,1,l.z),{}),this.audio?.sfx("gate"),o+1===8&&this.hud.hint("SEA CAVE AHEAD — RIDE THE SILL, JUMP THE FALLS",5),o+1===11&&this.hud.hint("THE BAY",3),o+1===17&&this.hud.hint("HARBOR NINE IN SIGHT",4)))}if(e.launchedThisRun&&!this.ambushDone&&e.pos.z<Pi.landingZ&&(this.ambushDone=!0,this.combat?.trigger("landing"),this.hud.toast("AMBUSH!","bad"),this.audio?.sfx("warning")),(this.demoMode?this.combat?this.combat.enemiesAlive()>0:!1:this.input.firing)&&this.combat){const o=this.combat.tryFire(e)||{};o.fired&&this.audio?.sfx("shoot");const l=o.target;if(e.turret)if(l){const c=l.pos.x-e.pos.x,h=l.pos.z-e.pos.z;let f=Math.atan2(c,h)-e.heading;for(;f>Math.PI;)f-=Math.PI*2;for(;f<-Math.PI;)f+=Math.PI*2;e.turret.rotation.y=ee(f,-1.1,1.1)}else e.turret.rotation.y*=.85}else e.turret&&(e.turret.rotation.y*=.9);const a=e.speed>9&&!e.airborne;for(this.sprayAcc+=t*(a?6+e.speed*.55:0);this.sprayAcc>1;){this.sprayAcc-=1;const o=new I(e.pos.x-e.forward.x*3.2,.1,e.pos.z-e.forward.z*3.2);this.fx?.play("spray",o,{strength:.35+e.speed*.02+Math.abs(this.input.steer)*e.speed*.02,heading:e.heading})}if(e.state.boosting&&this.fx&&this.fx.play("boostFlame",new I(e.pos.x-e.forward.x*3.7,.35,e.pos.z-e.forward.z*3.7),{heading:e.heading}),e.speed>12&&!e.airborne&&this.fx&&this.fx.play("roostertail",new I(e.pos.x-e.forward.x*3.5,.15,e.pos.z-e.forward.z*3.5),{speed:e.speed,heading:e.heading}),e.state.boosting&&this.fx){const o=Math.cos(e.heading),l=-Math.sin(e.heading);for(const c of[-1,1])this.fx.play("spray",new I(e.pos.x+o*c*1.9,.25,e.pos.z+l*c*1.9),{strength:.5,heading:e.heading})}if(this.combat?.update(t,this.t,e),this.fx?.update(t,this.t),this.audio?.setEngine({speed01:ee(e.speed/34,0,1.3),throttle01:ee(Math.max(0,this.input.throttle),0,1),boosting:!!e.state.boosting}),e.alive&&e.pos.z<-500&&e.pos.z>-1e3&&Math.abs(e.pos.x-130)<220){const o=Math.hypot(e.pos.x-165,e.pos.z+800);this.audio?.setWaterfall(o)}else this.audio?.setWaterfall(9999);this.audio?.setAmbience(ee(e.speed/34,0,1))}updateGateArrow(){if(this.run.finished||this.run.gate>=Re.length||this.state!=="playing"){this.gateArrow.visible=!1;return}const t=Re[this.run.gate],e=this.player,n=t.x-e.pos.x,s=t.z-e.pos.z,r=Math.hypot(n,s),a=e.forward.x*n+e.forward.z*s;if(r<55&&a>0){this.gateArrow.visible=!1;return}const o=6.5;this.gateArrow.position.set(e.pos.x+e.forward.x*o,e.pos.y+3.1+Math.sin(this.t*3)*.15,e.pos.z+e.forward.z*o),this.gateArrow.rotation.y=Math.atan2(n,s),this.gateArrow.rotation.z=Math.sin(this.t*2.2)*.08,this.gateArrow.scale.setScalar(1+Math.sin(this.t*3.1)*.06),this.gateArrow.visible=!0}frame(t){this._rafId=requestAnimationFrame(n=>this.frame(n));let e=Math.min(.1,(t-this._last)/1e3);if(this.timeScale<1&&(e*=this.timeScale),this._last=t,this.wallT+=e,this.input.hit("KeyR")&&this.startRun(),this.input.hit("KeyH")&&(this.state==="playing"||this.state==="paused")&&this.hud.setVisible(!this.hud.visible),(this.input.hit("KeyP")||this.input.hit("Escape"))&&(this.state==="playing"?this.setPaused(!0):this.state==="paused"&&this.setPaused(!1)),this.state==="menu"){this.menuAngle+=e*.05;const n=120,s=no.x,r=no.z-40;this.camera.position.set(s+Math.sin(this.menuAngle)*n,26+Math.sin(this.wallT*.3)*3,r+Math.cos(this.menuAngle)*n),this.camera.lookAt(s,2,r-30),this.camera.fov=55,this.camera.updateProjectionMatrix(),this.player.update(e,this.input,{noControls:!0,hold:!0}),this.player.wake.update(e,this.wallT,this.player.pos,this.player.heading,0),this.combat?.update(e,this.wallT,this.player),this.fx?.update(e,this.wallT),this.world?.update(e,this.wallT,this.player.pos),this.updateGates(e,this.wallT),this.water.update(e,this.wallT,this.camera.position),this.sky.update(e,this.wallT,this.player.pos)}else if(this.state==="countdown"){this.countT-=e;const n=Math.ceil(this.countT-.2);this.countT>.25?this.hud.countdown(this.run.film||n<=0?"GO":String(n),this.run.film?io[this.filmMode].label.toUpperCase():"WARM UP YOUR ENGINES"):this.hud.hideCountdown(),this.player.update(e,this.input,{noControls:!0,hold:!0}),this.player.wake.update(e,this.wallT,this.player.pos,this.player.heading,0),this.combat?.update(e,this.t,this.player),this.fx?.update(e,this.t),this.world?.update(e,this.wallT,this.player.pos),this.updateGates(e,this.t),this.water.update(e,this.t,this.camera.position),this.sky.update(e,this.t,this.player.pos),this.chase.update(e,this.t,this.player,!1),this.hud.update(e,this.run,this.player,this.combat),this.countT<=0&&(this.state="playing",this.hud.hideCountdown())}else if(this.state==="playing"||this.state==="failed"||this.state==="finished"){if(this.state==="playing"){this.run.time+=e,this.accumulator+=e;const n=1/120;let s=0;for(;this.accumulator>=n&&s++<10;)this.t+=n,this.step(n),this.accumulator-=n;this.state==="failed"&&!this.endShown&&(this.deadTimer-=e,this.deadTimer<=0&&(this.endShown=!0,this.showEnd(!0)))}else this.t+=e,this.state==="finished"&&(this.player.roll*=Math.exp(-3*e),this.player.model.rotation.z=this.player.roll),this.state==="failed"&&!this.endShown&&(this.deadTimer-=e,this.deadTimer<=0&&(this.endShown=!0,this.showEnd(!0))),this.combat?.update(e,this.t,this.player),this.fx?.update(e,this.t);this.world?.update(e,this.t,this.player.pos),this.updateGates(e,this.t),this.water.update(e,this.t,this.camera.position),this.sky.update(e,this.t,this.player.pos),this.chase.update(e,this.t,this.player,this.player.state.boosting),this.updateGateArrow(),this.hud.update(e,this.run,this.player,this.combat),this.minimap.draw(e,this.t,{pos:this.player.pos,heading:this.player.heading,nextGate:this.run.gate},this.combat)}this.post.render(e),this.input.endFrame()}startLoop(){this._last=performance.now(),this._rafId=requestAnimationFrame(t=>this.frame(t))}}const na=new l1;window.__game=na;console.log("[TIDEBREAKER] booted",na.quality,na.filmMode?`film=${na.filmMode}`:"");
