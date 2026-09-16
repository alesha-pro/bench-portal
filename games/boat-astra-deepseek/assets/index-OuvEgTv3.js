(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const Hc="180",hf=0,wl=1,uf=2,kc=1,ff=2,li=3,vi=0,mn=1,Ue=2,Bi=0,Vs=1,bn=2,Al=3,Tl=4,df=5,Qi=100,pf=101,mf=102,gf=103,_f=104,xf=200,vf=201,Mf=202,yf=203,Wa=204,Xa=205,Sf=206,Ef=207,bf=208,wf=209,Af=210,Tf=211,Rf=212,Cf=213,Pf=214,qa=0,Ya=1,$a=2,$s=3,Ka=4,Za=5,Ja=6,ja=7,Qh=0,Lf=1,Df=2,Hi=0,If=1,Uf=2,Nf=3,tu=4,Ff=5,Of=6,zf=7,eu=300,Ks=301,Zs=302,Qa=303,tc=304,qo=306,ec=1e3,is=1001,nc=1002,An=1003,Bf=1004,$r=1005,jn=1006,ia=1007,ss=1008,ei=1009,nu=1010,iu=1011,Cr=1012,Gc=1013,ls=1014,Qn=1015,Vr=1016,Vc=1017,Wc=1018,Pr=1020,su=35902,ru=35899,ou=1021,au=1022,Vn=1023,Lr=1026,Dr=1027,Xc=1028,qc=1029,cu=1030,Yc=1031,$c=1033,bo=33776,wo=33777,Ao=33778,To=33779,ic=35840,sc=35841,rc=35842,oc=35843,ac=36196,cc=37492,lc=37496,hc=37808,uc=37809,fc=37810,dc=37811,pc=37812,mc=37813,gc=37814,_c=37815,xc=37816,vc=37817,Mc=37818,yc=37819,Sc=37820,Ec=37821,bc=36492,wc=36494,Ac=36495,Tc=36283,Rc=36284,Cc=36285,Pc=36286,Hf=3200,kf=3201,lu=0,Gf=1,Ii="",on="srgb",Js="srgb-linear",Lo="linear",ye="srgb",_s=7680,Rl=519,Vf=512,Wf=513,Xf=514,hu=515,qf=516,Yf=517,$f=518,Kf=519,Lc=35044,Ws=35048,Cl="300 es",ti=2e3,Do=2001;class er{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Pl=1234567;const vr=Math.PI/180,Ir=180/Math.PI;function gi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]+"-"+nn[t&255]+nn[t>>8&255]+"-"+nn[t>>16&15|64]+nn[t>>24&255]+"-"+nn[e&63|128]+nn[e>>8&255]+"-"+nn[e>>16&255]+nn[e>>24&255]+nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]).toLowerCase()}function se(i,t,e){return Math.max(t,Math.min(e,i))}function Kc(i,t){return(i%t+t)%t}function Zf(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Jf(i,t,e){return i!==t?(e-i)/(t-i):0}function Mr(i,t,e){return(1-e)*i+e*t}function jf(i,t,e,n){return Mr(i,t,1-Math.exp(-e*n))}function Qf(i,t=1){return t-Math.abs(Kc(i,t*2)-t)}function td(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function ed(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function nd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function id(i,t){return i+Math.random()*(t-i)}function sd(i){return i*(.5-Math.random())}function rd(i){i!==void 0&&(Pl=i);let t=Pl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function od(i){return i*vr}function ad(i){return i*Ir}function cd(i){return(i&i-1)===0&&i!==0}function ld(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function hd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ud(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),u=o((t+n)/2),h=r((t-n)/2),f=o((t-n)/2),p=r((n-t)/2),m=o((n-t)/2);switch(s){case"XYX":i.set(a*u,l*h,l*f,a*c);break;case"YZY":i.set(l*f,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*f,a*u,a*c);break;case"XZX":i.set(a*u,l*m,l*p,a*c);break;case"YXY":i.set(l*p,a*u,l*m,a*c);break;case"ZYZ":i.set(l*m,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Gn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ve(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const yr={DEG2RAD:vr,RAD2DEG:Ir,generateUUID:gi,clamp:se,euclideanModulo:Kc,mapLinear:Zf,inverseLerp:Jf,lerp:Mr,damp:jf,pingpong:Qf,smoothstep:td,smootherstep:ed,randInt:nd,randFloat:id,randFloatSpread:sd,seededRandom:rd,degToRad:od,radToDeg:ad,isPowerOfTwo:cd,ceilPowerOfTwo:ld,floorPowerOfTwo:hd,setQuaternionFromProperEuler:ud,normalize:ve,denormalize:Gn};class vt{constructor(t=0,e=0){vt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class nr{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3];const f=r[o+0],p=r[o+1],m=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=m,t[e+3]=_;return}if(h!==_||l!==f||c!==p||u!==m){let g=1-a;const d=l*f+c*p+u*m+h*_,v=d>=0?1:-1,M=1-d*d;if(M>Number.EPSILON){const y=Math.sqrt(M),w=Math.atan2(y,d*v);g=Math.sin(g*w)/y,a=Math.sin(a*w)/y}const x=a*v;if(l=l*g+f*x,c=c*g+p*x,u=u*g+m*x,h=h*g+_*x,g===1-a){const y=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=y,c*=y,u*=y,h*=y}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[o],f=r[o+1],p=r[o+2],m=r[o+3];return t[e]=a*m+u*h+l*p-c*f,t[e+1]=l*m+u*f+c*h-a*p,t[e+2]=c*m+u*p+a*f-l*h,t[e+3]=u*m-a*h-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(r/2),f=l(n/2),p=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*p*m,this._y=c*p*h-f*u*m,this._z=c*u*m+f*p*h,this._w=c*u*h-f*p*m;break;case"YXZ":this._x=f*u*h+c*p*m,this._y=c*p*h-f*u*m,this._z=c*u*m-f*p*h,this._w=c*u*h+f*p*m;break;case"ZXY":this._x=f*u*h-c*p*m,this._y=c*p*h+f*u*m,this._z=c*u*m+f*p*h,this._w=c*u*h-f*p*m;break;case"ZYX":this._x=f*u*h-c*p*m,this._y=c*p*h+f*u*m,this._z=c*u*m-f*p*h,this._w=c*u*h+f*p*m;break;case"YZX":this._x=f*u*h+c*p*m,this._y=c*p*h+f*u*m,this._z=c*u*m-f*p*h,this._w=c*u*h-f*p*m;break;case"XZY":this._x=f*u*h-c*p*m,this._y=c*p*h-f*u*m,this._z=c*u*m+f*p*h,this._w=c*u*h+f*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=n+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>h){const p=2*Math.sqrt(1+n-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-n-h);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(se(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ll.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ll.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),u=2*(a*e-r*s),h=2*(r*n-o*e);return this.x=e+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this.z=se(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this.z=se(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return sa.copy(this).projectOnVector(t),this.sub(sa)}reflect(t){return this.sub(sa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const sa=new I,Ll=new nr;class Jt{constructor(t,e,n,s,r,o,a,l,c){Jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],p=n[5],m=n[8],_=s[0],g=s[3],d=s[6],v=s[1],M=s[4],x=s[7],y=s[2],w=s[5],T=s[8];return r[0]=o*_+a*v+l*y,r[3]=o*g+a*M+l*w,r[6]=o*d+a*x+l*T,r[1]=c*_+u*v+h*y,r[4]=c*g+u*M+h*w,r[7]=c*d+u*x+h*T,r[2]=f*_+p*v+m*y,r[5]=f*g+p*M+m*w,r[8]=f*d+p*x+m*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,f=a*l-u*r,p=c*r-o*l,m=e*h+n*f+s*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return t[0]=h*_,t[1]=(s*c-u*n)*_,t[2]=(a*n-s*o)*_,t[3]=f*_,t[4]=(u*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=p*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ra.makeScale(t,e)),this}rotate(t){return this.premultiply(ra.makeRotation(-t)),this}translate(t,e){return this.premultiply(ra.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ra=new Jt;function uu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Io(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function fd(){const i=Io("canvas");return i.style.display="block",i}const Dl={};function Ur(i){i in Dl||(Dl[i]=!0,console.warn(i))}function dd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Il=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ul=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function pd(){const i={enabled:!0,workingColorSpace:Js,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ye&&(s.r=_i(s.r),s.g=_i(s.g),s.b=_i(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ye&&(s.r=Xs(s.r),s.g=Xs(s.g),s.b=Xs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ii?Lo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ur("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ur("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Js]:{primaries:t,whitePoint:n,transfer:Lo,toXYZ:Il,fromXYZ:Ul,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:on},outputColorSpaceConfig:{drawingBufferColorSpace:on}},[on]:{primaries:t,whitePoint:n,transfer:ye,toXYZ:Il,fromXYZ:Ul,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:on}}}),i}const de=pd();function _i(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Xs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let xs;class md{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{xs===void 0&&(xs=Io("canvas")),xs.width=t.width,xs.height=t.height;const s=xs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=xs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Io("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=_i(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(_i(e[n]/255)*255):e[n]=_i(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let gd=0;class Zc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gd++}),this.uuid=gi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(oa(s[o].image)):r.push(oa(s[o]))}else r=oa(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function oa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?md.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _d=0;const aa=new I;class an extends er{constructor(t=an.DEFAULT_IMAGE,e=an.DEFAULT_MAPPING,n=is,s=is,r=jn,o=ss,a=Vn,l=ei,c=an.DEFAULT_ANISOTROPY,u=Ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_d++}),this.uuid=gi(),this.name="",this.source=new Zc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(aa).x}get height(){return this.source.getSize(aa).y}get depth(){return this.source.getSize(aa).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==eu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ec:t.x=t.x-Math.floor(t.x);break;case is:t.x=t.x<0?0:1;break;case nc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ec:t.y=t.y-Math.floor(t.y);break;case is:t.y=t.y<0?0:1;break;case nc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=eu;an.DEFAULT_ANISOTROPY=1;class he{constructor(t=0,e=0,n=0,s=1){he.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],m=l[9],_=l[2],g=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(m+g)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,x=(p+1)/2,y=(d+1)/2,w=(u+f)/4,T=(h+_)/4,R=(m+g)/4;return M>x&&M>y?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=w/n,r=T/n):x>y?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=w/s,r=R/s):y<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(y),n=T/r,s=R/r),this.set(n,s,r,e),this}let v=Math.sqrt((g-m)*(g-m)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(h-_)/v,this.z=(f-u)/v,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this.z=se(this.z,t.z,e.z),this.w=se(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this.z=se(this.z,t,e),this.w=se(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xd extends er{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new he(0,0,t,e),this.scissorTest=!1,this.viewport=new he(0,0,t,e);const s={width:t,height:e,depth:n.depth},r=new an(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:jn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Zc(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hs extends xd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class fu extends an{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=An,this.minFilter=An,this.wrapR=is,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class vd extends an{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=An,this.minFilter=An,this.wrapR=is,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fs{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(zn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(zn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=zn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,zn):zn.fromBufferAttribute(r,o),zn.applyMatrix4(t.matrixWorld),this.expandByPoint(zn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Kr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Kr.copy(n.boundingBox)),Kr.applyMatrix4(t.matrixWorld),this.union(Kr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,zn),zn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(or),Zr.subVectors(this.max,or),vs.subVectors(t.a,or),Ms.subVectors(t.b,or),ys.subVectors(t.c,or),wi.subVectors(Ms,vs),Ai.subVectors(ys,Ms),Wi.subVectors(vs,ys);let e=[0,-wi.z,wi.y,0,-Ai.z,Ai.y,0,-Wi.z,Wi.y,wi.z,0,-wi.x,Ai.z,0,-Ai.x,Wi.z,0,-Wi.x,-wi.y,wi.x,0,-Ai.y,Ai.x,0,-Wi.y,Wi.x,0];return!ca(e,vs,Ms,ys,Zr)||(e=[1,0,0,0,1,0,0,0,1],!ca(e,vs,Ms,ys,Zr))?!1:(Jr.crossVectors(wi,Ai),e=[Jr.x,Jr.y,Jr.z],ca(e,vs,Ms,ys,Zr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,zn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(zn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(si),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const si=[new I,new I,new I,new I,new I,new I,new I,new I],zn=new I,Kr=new fs,vs=new I,Ms=new I,ys=new I,wi=new I,Ai=new I,Wi=new I,or=new I,Zr=new I,Jr=new I,Xi=new I;function ca(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Xi.fromArray(i,r);const a=s.x*Math.abs(Xi.x)+s.y*Math.abs(Xi.y)+s.z*Math.abs(Xi.z),l=t.dot(Xi),c=e.dot(Xi),u=n.dot(Xi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Md=new fs,ar=new I,la=new I;class ir{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Md.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ar.subVectors(t,this.center);const e=ar.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ar,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(la.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ar.copy(t.center).add(la)),this.expandByPoint(ar.copy(t.center).sub(la))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ri=new I,ha=new I,jr=new I,Ti=new I,ua=new I,Qr=new I,fa=new I;class du{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ri)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ri.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ri.copy(this.origin).addScaledVector(this.direction,e),ri.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ha.copy(t).add(e).multiplyScalar(.5),jr.copy(e).sub(t).normalize(),Ti.copy(this.origin).sub(ha);const r=t.distanceTo(e)*.5,o=-this.direction.dot(jr),a=Ti.dot(this.direction),l=-Ti.dot(jr),c=Ti.lengthSq(),u=Math.abs(1-o*o);let h,f,p,m;if(u>0)if(h=o*l-a,f=o*a-l,m=r*u,h>=0)if(f>=-m)if(f<=m){const _=1/u;h*=_,f*=_,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f<=-m?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c):f<=m?(h=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(ha).addScaledVector(jr,f),p}intersectSphere(t,e){ri.subVectors(t.center,this.origin);const n=ri.dot(this.direction),s=ri.dot(ri)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ri)!==null}intersectTriangle(t,e,n,s,r){ua.subVectors(e,t),Qr.subVectors(n,t),fa.crossVectors(ua,Qr);let o=this.direction.dot(fa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ti.subVectors(this.origin,t);const l=a*this.direction.dot(Qr.crossVectors(Ti,Qr));if(l<0)return null;const c=a*this.direction.dot(ua.cross(Ti));if(c<0||l+c>o)return null;const u=-a*Ti.dot(fa);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _e{constructor(t,e,n,s,r,o,a,l,c,u,h,f,p,m,_,g){_e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,u,h,f,p,m,_,g)}set(t,e,n,s,r,o,a,l,c,u,h,f,p,m,_,g){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=m,d[11]=_,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _e().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Ss.setFromMatrixColumn(t,0).length(),r=1/Ss.setFromMatrixColumn(t,1).length(),o=1/Ss.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const f=o*u,p=o*h,m=a*u,_=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=p+m*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=m+p*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*u,p=l*h,m=c*u,_=c*h;e[0]=f+_*a,e[4]=m*a-p,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=p*a-m,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*u,p=l*h,m=c*u,_=c*h;e[0]=f-_*a,e[4]=-o*h,e[8]=m+p*a,e[1]=p+m*a,e[5]=o*u,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*u,p=o*h,m=a*u,_=a*h;e[0]=l*u,e[4]=m*c-p,e[8]=f*c+_,e[1]=l*h,e[5]=_*c+f,e[9]=p*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,p=o*c,m=a*l,_=a*c;e[0]=l*u,e[4]=_-f*h,e[8]=m*h+p,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=p*h+m,e[10]=f-_*h}else if(t.order==="XZY"){const f=o*l,p=o*c,m=a*l,_=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+_,e[5]=o*u,e[9]=p*h-m,e[2]=m*h-p,e[6]=a*u,e[10]=_*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(yd,t,Sd)}lookAt(t,e,n){const s=this.elements;return yn.subVectors(t,e),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),Ri.crossVectors(n,yn),Ri.lengthSq()===0&&(Math.abs(n.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),Ri.crossVectors(n,yn)),Ri.normalize(),to.crossVectors(yn,Ri),s[0]=Ri.x,s[4]=to.x,s[8]=yn.x,s[1]=Ri.y,s[5]=to.y,s[9]=yn.y,s[2]=Ri.z,s[6]=to.z,s[10]=yn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],p=n[13],m=n[2],_=n[6],g=n[10],d=n[14],v=n[3],M=n[7],x=n[11],y=n[15],w=s[0],T=s[4],R=s[8],S=s[12],E=s[1],C=s[5],L=s[9],U=s[13],z=s[2],O=s[6],D=s[10],G=s[14],B=s[3],nt=s[7],st=s[11],tt=s[15];return r[0]=o*w+a*E+l*z+c*B,r[4]=o*T+a*C+l*O+c*nt,r[8]=o*R+a*L+l*D+c*st,r[12]=o*S+a*U+l*G+c*tt,r[1]=u*w+h*E+f*z+p*B,r[5]=u*T+h*C+f*O+p*nt,r[9]=u*R+h*L+f*D+p*st,r[13]=u*S+h*U+f*G+p*tt,r[2]=m*w+_*E+g*z+d*B,r[6]=m*T+_*C+g*O+d*nt,r[10]=m*R+_*L+g*D+d*st,r[14]=m*S+_*U+g*G+d*tt,r[3]=v*w+M*E+x*z+y*B,r[7]=v*T+M*C+x*O+y*nt,r[11]=v*R+M*L+x*D+y*st,r[15]=v*S+M*U+x*G+y*tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],p=t[14],m=t[3],_=t[7],g=t[11],d=t[15];return m*(+r*l*h-s*c*h-r*a*f+n*c*f+s*a*p-n*l*p)+_*(+e*l*p-e*c*f+r*o*f-s*o*p+s*c*u-r*l*u)+g*(+e*c*h-e*a*p-r*o*h+n*o*p+r*a*u-n*c*u)+d*(-s*a*u-e*l*h+e*a*f+s*o*h-n*o*f+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],p=t[11],m=t[12],_=t[13],g=t[14],d=t[15],v=h*g*c-_*f*c+_*l*p-a*g*p-h*l*d+a*f*d,M=m*f*c-u*g*c-m*l*p+o*g*p+u*l*d-o*f*d,x=u*_*c-m*h*c+m*a*p-o*_*p-u*a*d+o*h*d,y=m*h*l-u*_*l-m*a*f+o*_*f+u*a*g-o*h*g,w=e*v+n*M+s*x+r*y;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/w;return t[0]=v*T,t[1]=(_*f*r-h*g*r-_*s*p+n*g*p+h*s*d-n*f*d)*T,t[2]=(a*g*r-_*l*r+_*s*c-n*g*c-a*s*d+n*l*d)*T,t[3]=(h*l*r-a*f*r-h*s*c+n*f*c+a*s*p-n*l*p)*T,t[4]=M*T,t[5]=(u*g*r-m*f*r+m*s*p-e*g*p-u*s*d+e*f*d)*T,t[6]=(m*l*r-o*g*r-m*s*c+e*g*c+o*s*d-e*l*d)*T,t[7]=(o*f*r-u*l*r+u*s*c-e*f*c-o*s*p+e*l*p)*T,t[8]=x*T,t[9]=(m*h*r-u*_*r-m*n*p+e*_*p+u*n*d-e*h*d)*T,t[10]=(o*_*r-m*a*r+m*n*c-e*_*c-o*n*d+e*a*d)*T,t[11]=(u*a*r-o*h*r-u*n*c+e*h*c+o*n*p-e*a*p)*T,t[12]=y*T,t[13]=(u*_*s-m*h*s+m*n*f-e*_*f-u*n*g+e*h*g)*T,t[14]=(m*a*s-o*_*s-m*n*l+e*_*l+o*n*g-e*a*g)*T,t[15]=(o*h*s-u*a*s+u*n*l-e*h*l-o*n*f+e*a*f)*T,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,h=a+a,f=r*c,p=r*u,m=r*h,_=o*u,g=o*h,d=a*h,v=l*c,M=l*u,x=l*h,y=n.x,w=n.y,T=n.z;return s[0]=(1-(_+d))*y,s[1]=(p+x)*y,s[2]=(m-M)*y,s[3]=0,s[4]=(p-x)*w,s[5]=(1-(f+d))*w,s[6]=(g+v)*w,s[7]=0,s[8]=(m+M)*T,s[9]=(g-v)*T,s[10]=(1-(f+_))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Ss.set(s[0],s[1],s[2]).length();const o=Ss.set(s[4],s[5],s[6]).length(),a=Ss.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Bn.copy(this);const c=1/r,u=1/o,h=1/a;return Bn.elements[0]*=c,Bn.elements[1]*=c,Bn.elements[2]*=c,Bn.elements[4]*=u,Bn.elements[5]*=u,Bn.elements[6]*=u,Bn.elements[8]*=h,Bn.elements[9]*=h,Bn.elements[10]*=h,e.setFromRotationMatrix(Bn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=ti,l=!1){const c=this.elements,u=2*r/(e-t),h=2*r/(n-s),f=(e+t)/(e-t),p=(n+s)/(n-s);let m,_;if(l)m=r/(o-r),_=o*r/(o-r);else if(a===ti)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Do)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=ti,l=!1){const c=this.elements,u=2/(e-t),h=2/(n-s),f=-(e+t)/(e-t),p=-(n+s)/(n-s);let m,_;if(l)m=1/(o-r),_=o/(o-r);else if(a===ti)m=-2/(o-r),_=-(o+r)/(o-r);else if(a===Do)m=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ss=new I,Bn=new _e,yd=new I(0,0,0),Sd=new I(1,1,1),Ri=new I,to=new I,yn=new I,Nl=new _e,Fl=new nr;class Yn{constructor(t=0,e=0,n=0,s=Yn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(se(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-se(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(se(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-se(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(se(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-se(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Nl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Nl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Fl.setFromEuler(this),this.setFromQuaternion(Fl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yn.DEFAULT_ORDER="XYZ";class pu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ed=0;const Ol=new I,Es=new nr,oi=new _e,eo=new I,cr=new I,bd=new I,wd=new nr,zl=new I(1,0,0),Bl=new I(0,1,0),Hl=new I(0,0,1),kl={type:"added"},Ad={type:"removed"},bs={type:"childadded",child:null},da={type:"childremoved",child:null};class Ve extends er{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ed++}),this.uuid=gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ve.DEFAULT_UP.clone();const t=new I,e=new Yn,n=new nr,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _e},normalMatrix:{value:new Jt}}),this.matrix=new _e,this.matrixWorld=new _e,this.matrixAutoUpdate=Ve.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Es.setFromAxisAngle(t,e),this.quaternion.multiply(Es),this}rotateOnWorldAxis(t,e){return Es.setFromAxisAngle(t,e),this.quaternion.premultiply(Es),this}rotateX(t){return this.rotateOnAxis(zl,t)}rotateY(t){return this.rotateOnAxis(Bl,t)}rotateZ(t){return this.rotateOnAxis(Hl,t)}translateOnAxis(t,e){return Ol.copy(t).applyQuaternion(this.quaternion),this.position.add(Ol.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(zl,t)}translateY(t){return this.translateOnAxis(Bl,t)}translateZ(t){return this.translateOnAxis(Hl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(oi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?eo.copy(t):eo.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),cr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oi.lookAt(cr,eo,this.up):oi.lookAt(eo,cr,this.up),this.quaternion.setFromRotationMatrix(oi),s&&(oi.extractRotation(s.matrixWorld),Es.setFromRotationMatrix(oi),this.quaternion.premultiply(Es.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(kl),bs.child=t,this.dispatchEvent(bs),bs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ad),da.child=t,this.dispatchEvent(da),da.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),oi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),oi.multiply(t.parent.matrixWorld)),t.applyMatrix4(oi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(kl),bs.child=t,this.dispatchEvent(bs),bs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cr,t,bd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cr,wd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),p=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ve.DEFAULT_UP=new I(0,1,0);Ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Hn=new I,ai=new I,pa=new I,ci=new I,ws=new I,As=new I,Gl=new I,ma=new I,ga=new I,_a=new I,xa=new he,va=new he,Ma=new he;class Nn{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Hn.subVectors(t,e),s.cross(Hn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Hn.subVectors(s,e),ai.subVectors(n,e),pa.subVectors(t,e);const o=Hn.dot(Hn),a=Hn.dot(ai),l=Hn.dot(pa),c=ai.dot(ai),u=ai.dot(pa),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,p=(c*l-a*u)*f,m=(o*u-a*l)*f;return r.set(1-p-m,m,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ci)===null?!1:ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ci.x),l.addScaledVector(o,ci.y),l.addScaledVector(a,ci.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return xa.setScalar(0),va.setScalar(0),Ma.setScalar(0),xa.fromBufferAttribute(t,e),va.fromBufferAttribute(t,n),Ma.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(xa,r.x),o.addScaledVector(va,r.y),o.addScaledVector(Ma,r.z),o}static isFrontFacing(t,e,n,s){return Hn.subVectors(n,e),ai.subVectors(t,e),Hn.cross(ai).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Hn.subVectors(this.c,this.b),ai.subVectors(this.a,this.b),Hn.cross(ai).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Nn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Nn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Nn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Nn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Nn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;ws.subVectors(s,n),As.subVectors(r,n),ma.subVectors(t,n);const l=ws.dot(ma),c=As.dot(ma);if(l<=0&&c<=0)return e.copy(n);ga.subVectors(t,s);const u=ws.dot(ga),h=As.dot(ga);if(u>=0&&h<=u)return e.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(ws,o);_a.subVectors(t,r);const p=ws.dot(_a),m=As.dot(_a);if(m>=0&&p<=m)return e.copy(r);const _=p*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(As,a);const g=u*m-p*h;if(g<=0&&h-u>=0&&p-m>=0)return Gl.subVectors(r,s),a=(h-u)/(h-u+(p-m)),e.copy(s).addScaledVector(Gl,a);const d=1/(g+_+f);return o=_*d,a=f*d,e.copy(n).addScaledVector(ws,o).addScaledVector(As,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const mu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ci={h:0,s:0,l:0},no={h:0,s:0,l:0};function ya(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class ${constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=on){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,de.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=de.workingColorSpace){return this.r=t,this.g=e,this.b=n,de.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=de.workingColorSpace){if(t=Kc(t,1),e=se(e,0,1),n=se(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ya(o,r,t+1/3),this.g=ya(o,r,t),this.b=ya(o,r,t-1/3)}return de.colorSpaceToWorking(this,s),this}setStyle(t,e=on){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=on){const n=mu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=_i(t.r),this.g=_i(t.g),this.b=_i(t.b),this}copyLinearToSRGB(t){return this.r=Xs(t.r),this.g=Xs(t.g),this.b=Xs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=on){return de.workingToColorSpace(sn.copy(this),t),Math.round(se(sn.r*255,0,255))*65536+Math.round(se(sn.g*255,0,255))*256+Math.round(se(sn.b*255,0,255))}getHexString(t=on){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=de.workingColorSpace){de.workingToColorSpace(sn.copy(this),e);const n=sn.r,s=sn.g,r=sn.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=de.workingColorSpace){return de.workingToColorSpace(sn.copy(this),e),t.r=sn.r,t.g=sn.g,t.b=sn.b,t}getStyle(t=on){de.workingToColorSpace(sn.copy(this),t);const e=sn.r,n=sn.g,s=sn.b;return t!==on?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ci),this.setHSL(Ci.h+t,Ci.s+e,Ci.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ci),t.getHSL(no);const n=Mr(Ci.h,no.h,e),s=Mr(Ci.s,no.s,e),r=Mr(Ci.l,no.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const sn=new $;$.NAMES=mu;let Td=0;class ds extends er{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Td++}),this.uuid=gi(),this.name="",this.type="Material",this.blending=Vs,this.side=vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wa,this.blendDst=Xa,this.blendEquation=Qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $(0,0,0),this.blendAlpha=0,this.depthFunc=$s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_s,this.stencilZFail=_s,this.stencilZPass=_s,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Vs&&(n.blending=this.blending),this.side!==vi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Wa&&(n.blendSrc=this.blendSrc),this.blendDst!==Xa&&(n.blendDst=this.blendDst),this.blendEquation!==Qi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==$s&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_s&&(n.stencilFail=this.stencilFail),this.stencilZFail!==_s&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==_s&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class tn extends ds{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.combine=Qh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ke=new I,io=new vt;let Rd=0;class ae{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Rd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Lc,this.updateRanges=[],this.gpuType=Qn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)io.fromBufferAttribute(this,e),io.applyMatrix3(t),this.setXY(e,io.x,io.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix3(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix4(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyNormalMatrix(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.transformDirection(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Gn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ve(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Gn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Gn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Gn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Gn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array),s=ve(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array),s=ve(s,this.array),r=ve(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Lc&&(t.usage=this.usage),t}}class gu extends ae{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class _u extends ae{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class pe extends ae{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Cd=0;const In=new _e,Sa=new Ve,Ts=new I,Sn=new fs,lr=new fs,Je=new I;class Re extends er{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cd++}),this.uuid=gi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(uu(t)?_u:gu)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return In.makeRotationFromQuaternion(t),this.applyMatrix4(In),this}rotateX(t){return In.makeRotationX(t),this.applyMatrix4(In),this}rotateY(t){return In.makeRotationY(t),this.applyMatrix4(In),this}rotateZ(t){return In.makeRotationZ(t),this.applyMatrix4(In),this}translate(t,e,n){return In.makeTranslation(t,e,n),this.applyMatrix4(In),this}scale(t,e,n){return In.makeScale(t,e,n),this.applyMatrix4(In),this}lookAt(t){return Sa.lookAt(t),Sa.updateMatrix(),this.applyMatrix4(Sa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ts).negate(),this.translate(Ts.x,Ts.y,Ts.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new pe(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Je.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(Je),Je.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(Je)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ir);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(Sn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];lr.setFromBufferAttribute(a),this.morphTargetsRelative?(Je.addVectors(Sn.min,lr.min),Sn.expandByPoint(Je),Je.addVectors(Sn.max,lr.max),Sn.expandByPoint(Je)):(Sn.expandByPoint(lr.min),Sn.expandByPoint(lr.max))}Sn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Je.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Je));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Je.fromBufferAttribute(a,c),l&&(Ts.fromBufferAttribute(t,c),Je.add(Ts)),s=Math.max(s,n.distanceToSquared(Je))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ae(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<n.count;R++)a[R]=new I,l[R]=new I;const c=new I,u=new I,h=new I,f=new vt,p=new vt,m=new vt,_=new I,g=new I;function d(R,S,E){c.fromBufferAttribute(n,R),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,E),f.fromBufferAttribute(r,R),p.fromBufferAttribute(r,S),m.fromBufferAttribute(r,E),u.sub(c),h.sub(c),p.sub(f),m.sub(f);const C=1/(p.x*m.y-m.x*p.y);isFinite(C)&&(_.copy(u).multiplyScalar(m.y).addScaledVector(h,-p.y).multiplyScalar(C),g.copy(h).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(C),a[R].add(_),a[S].add(_),a[E].add(_),l[R].add(g),l[S].add(g),l[E].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let R=0,S=v.length;R<S;++R){const E=v[R],C=E.start,L=E.count;for(let U=C,z=C+L;U<z;U+=3)d(t.getX(U+0),t.getX(U+1),t.getX(U+2))}const M=new I,x=new I,y=new I,w=new I;function T(R){y.fromBufferAttribute(s,R),w.copy(y);const S=a[R];M.copy(S),M.sub(y.multiplyScalar(y.dot(S))).normalize(),x.crossVectors(w,S);const C=x.dot(l[R])<0?-1:1;o.setXYZW(R,M.x,M.y,M.z,C)}for(let R=0,S=v.length;R<S;++R){const E=v[R],C=E.start,L=E.count;for(let U=C,z=C+L;U<z;U+=3)T(t.getX(U+0)),T(t.getX(U+1)),T(t.getX(U+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ae(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const s=new I,r=new I,o=new I,a=new I,l=new I,c=new I,u=new I,h=new I;if(t)for(let f=0,p=t.count;f<p;f+=3){const m=t.getX(f+0),_=t.getX(f+1),g=t.getX(f+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,g),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),a.add(u),l.add(u),c.add(u),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Je.fromBufferAttribute(t,e),Je.normalize(),t.setXYZ(e,Je.x,Je.y,Je.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let p=0,m=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*u;for(let d=0;d<u;d++)f[m++]=c[p++]}return new ae(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Re,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=t(f,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vl=new _e,qi=new du,so=new ir,Wl=new I,ro=new I,oo=new I,ao=new I,Ea=new I,co=new I,Xl=new I,lo=new I;class Kt extends Ve{constructor(t=new Re,e=new tn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){co.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(Ea.fromBufferAttribute(h,t),o?co.addScaledVector(Ea,u):co.addScaledVector(Ea.sub(e),u))}e.add(co)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),so.copy(n.boundingSphere),so.applyMatrix4(r),qi.copy(t.ray).recast(t.near),!(so.containsPoint(qi.origin)===!1&&(qi.intersectSphere(so,Wl)===null||qi.origin.distanceToSquared(Wl)>(t.far-t.near)**2))&&(Vl.copy(r).invert(),qi.copy(t.ray).applyMatrix4(Vl),!(n.boundingBox!==null&&qi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,qi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=f.length;m<_;m++){const g=f[m],d=o[g.materialIndex],v=Math.max(g.start,p.start),M=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let x=v,y=M;x<y;x+=3){const w=a.getX(x),T=a.getX(x+1),R=a.getX(x+2);s=ho(this,d,t,n,c,u,h,w,T,R),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let g=m,d=_;g<d;g+=3){const v=a.getX(g),M=a.getX(g+1),x=a.getX(g+2);s=ho(this,o,t,n,c,u,h,v,M,x),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,_=f.length;m<_;m++){const g=f[m],d=o[g.materialIndex],v=Math.max(g.start,p.start),M=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let x=v,y=M;x<y;x+=3){const w=x,T=x+1,R=x+2;s=ho(this,d,t,n,c,u,h,w,T,R),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let g=m,d=_;g<d;g+=3){const v=g,M=g+1,x=g+2;s=ho(this,o,t,n,c,u,h,v,M,x),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function Pd(i,t,e,n,s,r,o,a){let l;if(t.side===mn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===vi,a),l===null)return null;lo.copy(a),lo.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(lo);return c<e.near||c>e.far?null:{distance:c,point:lo.clone(),object:i}}function ho(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,ro),i.getVertexPosition(l,oo),i.getVertexPosition(c,ao);const u=Pd(i,t,e,n,ro,oo,ao,Xl);if(u){const h=new I;Nn.getBarycoord(Xl,ro,oo,ao,h),s&&(u.uv=Nn.getInterpolatedAttribute(s,a,l,c,h,new vt)),r&&(u.uv1=Nn.getInterpolatedAttribute(r,a,l,c,h,new vt)),o&&(u.normal=Nn.getInterpolatedAttribute(o,a,l,c,h,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new I,materialIndex:0};Nn.getNormal(ro,oo,ao,f.normal),u.face=f,u.barycoord=h}return u}class dn extends Re{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,p=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,s,o,2),m("x","z","y",1,-1,t,n,-e,s,o,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new pe(c,3)),this.setAttribute("normal",new pe(u,3)),this.setAttribute("uv",new pe(h,2));function m(_,g,d,v,M,x,y,w,T,R,S){const E=x/T,C=y/R,L=x/2,U=y/2,z=w/2,O=T+1,D=R+1;let G=0,B=0;const nt=new I;for(let st=0;st<D;st++){const tt=st*C-U;for(let ht=0;ht<O;ht++){const St=ht*E-L;nt[_]=St*v,nt[g]=tt*M,nt[d]=z,c.push(nt.x,nt.y,nt.z),nt[_]=0,nt[g]=0,nt[d]=w>0?1:-1,u.push(nt.x,nt.y,nt.z),h.push(ht/T),h.push(1-st/R),G+=1}}for(let st=0;st<R;st++)for(let tt=0;tt<T;tt++){const ht=f+tt+O*st,St=f+tt+O*(st+1),Tt=f+(tt+1)+O*(st+1),Ut=f+(tt+1)+O*st;l.push(ht,St,Ut),l.push(St,Tt,Ut),B+=6}a.addGroup(p,B,S),p+=B,f+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function js(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function fn(i){const t={};for(let e=0;e<i.length;e++){const n=js(i[e]);for(const s in n)t[s]=n[s]}return t}function Ld(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function xu(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:de.workingColorSpace}const Jc={clone:js,merge:fn};var Dd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Id=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class cn extends ds{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Dd,this.fragmentShader=Id,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=js(t.uniforms),this.uniformsGroups=Ld(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class vu extends Ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _e,this.projectionMatrix=new _e,this.projectionMatrixInverse=new _e,this.coordinateSystem=ti,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Pi=new I,ql=new vt,Yl=new vt;class En extends vu{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ir*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(vr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ir*2*Math.atan(Math.tan(vr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Pi.x,Pi.y).multiplyScalar(-t/Pi.z),Pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Pi.x,Pi.y).multiplyScalar(-t/Pi.z)}getViewSize(t,e){return this.getViewBounds(t,ql,Yl),e.subVectors(Yl,ql)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(vr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Rs=-90,Cs=1;class Ud extends Ve{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new En(Rs,Cs,t,e);s.layers=this.layers,this.add(s);const r=new En(Rs,Cs,t,e);r.layers=this.layers,this.add(r);const o=new En(Rs,Cs,t,e);o.layers=this.layers,this.add(o);const a=new En(Rs,Cs,t,e);a.layers=this.layers,this.add(a);const l=new En(Rs,Cs,t,e);l.layers=this.layers,this.add(l);const c=new En(Rs,Cs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===ti)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Do)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(h,f,p),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Mu extends an{constructor(t=[],e=Ks,n,s,r,o,a,l,c,u){super(t,e,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Nd extends hs{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Mu(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new dn(5,5,5),r=new cn({name:"CubemapFromEquirect",uniforms:js(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:mn,blending:Bi});r.uniforms.tEquirect.value=e;const o=new Kt(s,r),a=e.minFilter;return e.minFilter===ss&&(e.minFilter=jn),new Ud(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}class xn extends Ve{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Fd={type:"move"};class ba{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const g=e.getJointPose(_,n),d=this._getHandJoint(c,_);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,m=.005;c.inputState.pinching&&f>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Fd)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new xn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class jc{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new $(t),this.density=e}clone(){return new jc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Od extends Ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yn,this.environmentIntensity=1,this.environmentRotation=new Yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class zd{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Lc,this.updateRanges=[],this.version=0,this.uuid=gi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const hn=new I;class Uo{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)hn.fromBufferAttribute(this,e),hn.applyMatrix4(t),this.setXYZ(e,hn.x,hn.y,hn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)hn.fromBufferAttribute(this,e),hn.applyNormalMatrix(t),this.setXYZ(e,hn.x,hn.y,hn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)hn.fromBufferAttribute(this,e),hn.transformDirection(t),this.setXYZ(e,hn.x,hn.y,hn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Gn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ve(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ve(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Gn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Gn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Gn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Gn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array),s=ve(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array),s=ve(s,this.array),r=ve(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new ae(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Uo(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Qc extends ds{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new $(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ps;const hr=new I,Ls=new I,Ds=new I,Is=new vt,ur=new vt,yu=new _e,uo=new I,fr=new I,fo=new I,$l=new vt,wa=new vt,Kl=new vt;class Su extends Ve{constructor(t=new Qc){if(super(),this.isSprite=!0,this.type="Sprite",Ps===void 0){Ps=new Re;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new zd(e,5);Ps.setIndex([0,1,2,0,2,3]),Ps.setAttribute("position",new Uo(n,3,0,!1)),Ps.setAttribute("uv",new Uo(n,2,3,!1))}this.geometry=Ps,this.material=t,this.center=new vt(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ls.setFromMatrixScale(this.matrixWorld),yu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ds.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ls.multiplyScalar(-Ds.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;po(uo.set(-.5,-.5,0),Ds,o,Ls,s,r),po(fr.set(.5,-.5,0),Ds,o,Ls,s,r),po(fo.set(.5,.5,0),Ds,o,Ls,s,r),$l.set(0,0),wa.set(1,0),Kl.set(1,1);let a=t.ray.intersectTriangle(uo,fr,fo,!1,hr);if(a===null&&(po(fr.set(-.5,.5,0),Ds,o,Ls,s,r),wa.set(0,1),a=t.ray.intersectTriangle(uo,fo,fr,!1,hr),a===null))return;const l=t.ray.origin.distanceTo(hr);l<t.near||l>t.far||e.push({distance:l,point:hr.clone(),uv:Nn.getInterpolation(hr,uo,fr,fo,$l,wa,Kl,new vt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function po(i,t,e,n,s,r){Is.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(ur.x=r*Is.x-s*Is.y,ur.y=s*Is.x+r*Is.y):ur.copy(Is),i.copy(t),i.x+=ur.x,i.y+=ur.y,i.applyMatrix4(yu)}class Bd extends an{constructor(t=null,e=1,n=1,s,r,o,a,l,c=An,u=An,h,f){super(null,o,a,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zs extends ae{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Us=new _e,Zl=new _e,mo=[],Jl=new fs,Hd=new _e,dr=new Kt,pr=new ir;class Nr extends Kt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new zs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Hd)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new fs),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Us),Jl.copy(t.boundingBox).applyMatrix4(Us),this.boundingBox.union(Jl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ir),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Us),pr.copy(t.boundingSphere).applyMatrix4(Us),this.boundingSphere.union(pr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(dr.geometry=this.geometry,dr.material=this.material,dr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),pr.copy(this.boundingSphere),pr.applyMatrix4(n),t.ray.intersectsSphere(pr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Us),Zl.multiplyMatrices(n,Us),dr.matrixWorld=Zl,dr.raycast(t,mo);for(let o=0,a=mo.length;o<a;o++){const l=mo[o];l.instanceId=r,l.object=this,e.push(l)}mo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new zs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Bd(new Float32Array(s*this.count),s,this.count,Xc,Qn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Aa=new I,kd=new I,Gd=new Jt;class Zi{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Aa.subVectors(n,e).cross(kd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Aa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Gd.getNormalMatrix(t),s=this.coplanarPoint(Aa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yi=new ir,Vd=new vt(.5,.5),go=new I;class tl{constructor(t=new Zi,e=new Zi,n=new Zi,s=new Zi,r=new Zi,o=new Zi){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ti,n=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],f=r[6],p=r[7],m=r[8],_=r[9],g=r[10],d=r[11],v=r[12],M=r[13],x=r[14],y=r[15];if(s[0].setComponents(c-o,p-u,d-m,y-v).normalize(),s[1].setComponents(c+o,p+u,d+m,y+v).normalize(),s[2].setComponents(c+a,p+h,d+_,y+M).normalize(),s[3].setComponents(c-a,p-h,d-_,y-M).normalize(),n)s[4].setComponents(l,f,g,x).normalize(),s[5].setComponents(c-l,p-f,d-g,y-x).normalize();else if(s[4].setComponents(c-l,p-f,d-g,y-x).normalize(),e===ti)s[5].setComponents(c+l,p+f,d+g,y+x).normalize();else if(e===Do)s[5].setComponents(l,f,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Yi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Yi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Yi)}intersectsSprite(t){Yi.center.set(0,0,0);const e=Vd.distanceTo(t.center);return Yi.radius=.7071067811865476+e,Yi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Yi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(go.x=s.normal.x>0?t.max.x:t.min.x,go.y=s.normal.y>0?t.max.y:t.min.y,go.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(go)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Wd extends ds{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new $(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const jl=new _e,Dc=new du,_o=new ir,xo=new I;class el extends Ve{constructor(t=new Re,e=new Wd){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_o.copy(n.boundingSphere),_o.applyMatrix4(s),_o.radius+=r,t.ray.intersectsSphere(_o)===!1)return;jl.copy(s).invert(),Dc.copy(t.ray).applyMatrix4(jl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let m=f,_=p;m<_;m++){const g=c.getX(m);xo.fromBufferAttribute(h,g),Ql(xo,g,l,s,t,e,this)}}else{const f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let m=f,_=p;m<_;m++)xo.fromBufferAttribute(h,m),Ql(xo,m,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ql(i,t,e,n,s,r,o){const a=Dc.distanceSqToPoint(i);if(a<e){const l=new I;Dc.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Yo extends an{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Eu extends an{constructor(t,e,n=ls,s,r,o,a=An,l=An,c,u=Lr,h=1){if(u!==Lr&&u!==Dr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:h};super(f,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Zc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class bu extends an{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class $o extends Re{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new I,u=new vt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){const p=n+h/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/t+1)/2,u.y=(o[f+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new pe(o,3)),this.setAttribute("normal",new pe(a,3)),this.setAttribute("uv",new pe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $o(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Ye extends Re{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],f=[],p=[];let m=0;const _=[],g=n/2;let d=0;v(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new pe(h,3)),this.setAttribute("normal",new pe(f,3)),this.setAttribute("uv",new pe(p,2));function v(){const x=new I,y=new I;let w=0;const T=(e-t)/n;for(let R=0;R<=r;R++){const S=[],E=R/r,C=E*(e-t)+t;for(let L=0;L<=s;L++){const U=L/s,z=U*l+a,O=Math.sin(z),D=Math.cos(z);y.x=C*O,y.y=-E*n+g,y.z=C*D,h.push(y.x,y.y,y.z),x.set(O,T,D).normalize(),f.push(x.x,x.y,x.z),p.push(U,1-E),S.push(m++)}_.push(S)}for(let R=0;R<s;R++)for(let S=0;S<r;S++){const E=_[S][R],C=_[S+1][R],L=_[S+1][R+1],U=_[S][R+1];(t>0||S!==0)&&(u.push(E,C,U),w+=3),(e>0||S!==r-1)&&(u.push(C,L,U),w+=3)}c.addGroup(d,w,0),d+=w}function M(x){const y=m,w=new vt,T=new I;let R=0;const S=x===!0?t:e,E=x===!0?1:-1;for(let L=1;L<=s;L++)h.push(0,g*E,0),f.push(0,E,0),p.push(.5,.5),m++;const C=m;for(let L=0;L<=s;L++){const z=L/s*l+a,O=Math.cos(z),D=Math.sin(z);T.x=S*D,T.y=g*E,T.z=S*O,h.push(T.x,T.y,T.z),f.push(0,E,0),w.x=O*.5+.5,w.y=D*.5*E+.5,p.push(w.x,w.y),m++}for(let L=0;L<s;L++){const U=y+L,z=C+L;x===!0?u.push(z,z+1,U):u.push(z+1,z,U),R+=3}c.addGroup(d,R,x===!0?1:2),d+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ye(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ko extends Ye{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Ko(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Zo extends Re{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),c(n),u(),this.setAttribute("position",new pe(r,3)),this.setAttribute("normal",new pe(r.slice(),3)),this.setAttribute("uv",new pe(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const M=new I,x=new I,y=new I;for(let w=0;w<e.length;w+=3)p(e[w+0],M),p(e[w+1],x),p(e[w+2],y),l(M,x,y,v)}function l(v,M,x,y){const w=y+1,T=[];for(let R=0;R<=w;R++){T[R]=[];const S=v.clone().lerp(x,R/w),E=M.clone().lerp(x,R/w),C=w-R;for(let L=0;L<=C;L++)L===0&&R===w?T[R][L]=S:T[R][L]=S.clone().lerp(E,L/C)}for(let R=0;R<w;R++)for(let S=0;S<2*(w-R)-1;S++){const E=Math.floor(S/2);S%2===0?(f(T[R][E+1]),f(T[R+1][E]),f(T[R][E])):(f(T[R][E+1]),f(T[R+1][E+1]),f(T[R+1][E]))}}function c(v){const M=new I;for(let x=0;x<r.length;x+=3)M.x=r[x+0],M.y=r[x+1],M.z=r[x+2],M.normalize().multiplyScalar(v),r[x+0]=M.x,r[x+1]=M.y,r[x+2]=M.z}function u(){const v=new I;for(let M=0;M<r.length;M+=3){v.x=r[M+0],v.y=r[M+1],v.z=r[M+2];const x=g(v)/2/Math.PI+.5,y=d(v)/Math.PI+.5;o.push(x,1-y)}m(),h()}function h(){for(let v=0;v<o.length;v+=6){const M=o[v+0],x=o[v+2],y=o[v+4],w=Math.max(M,x,y),T=Math.min(M,x,y);w>.9&&T<.1&&(M<.2&&(o[v+0]+=1),x<.2&&(o[v+2]+=1),y<.2&&(o[v+4]+=1))}}function f(v){r.push(v.x,v.y,v.z)}function p(v,M){const x=v*3;M.x=t[x+0],M.y=t[x+1],M.z=t[x+2]}function m(){const v=new I,M=new I,x=new I,y=new I,w=new vt,T=new vt,R=new vt;for(let S=0,E=0;S<r.length;S+=9,E+=6){v.set(r[S+0],r[S+1],r[S+2]),M.set(r[S+3],r[S+4],r[S+5]),x.set(r[S+6],r[S+7],r[S+8]),w.set(o[E+0],o[E+1]),T.set(o[E+2],o[E+3]),R.set(o[E+4],o[E+5]),y.copy(v).add(M).add(x).divideScalar(3);const C=g(y);_(w,E+0,v,C),_(T,E+2,M,C),_(R,E+4,x,C)}}function _(v,M,x,y){y<0&&v.x===1&&(o[M]=v.x-1),x.x===0&&x.z===0&&(o[M]=y/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function d(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zo(t.vertices,t.indices,t.radius,t.details)}}class bi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const u=n[s],f=n[s+1]-u,p=(o-u)/f;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new vt:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new I,s=[],r=[],o=[],a=new I,l=new _e;for(let p=0;p<=t;p++){const m=p/t;s[p]=this.getTangentAt(m,new I)}r[0]=new I,o[0]=new I;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(se(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,m))}o[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(se(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],p*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class wu extends bi{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new vt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*u-p*h+this.aX,c=f*h+p*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Xd extends wu{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function nl(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let f=(o-r)/c-(a-r)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,p*=u,s(o,a,f,p)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const vo=new I,Ta=new nl,Ra=new nl,Ca=new nl;class Au extends bi{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new I){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(vo.subVectors(s[0],s[1]).add(s[0]),c=vo);const h=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(vo.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=vo),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(h),p),_=Math.pow(h.distanceToSquared(f),p),g=Math.pow(f.distanceToSquared(u),p);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),Ta.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,m,_,g),Ra.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,m,_,g),Ca.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,m,_,g)}else this.curveType==="catmullrom"&&(Ta.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),Ra.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),Ca.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(Ta.calc(l),Ra.calc(l),Ca.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function th(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function qd(i,t){const e=1-i;return e*e*t}function Yd(i,t){return 2*(1-i)*i*t}function $d(i,t){return i*i*t}function Sr(i,t,e,n){return qd(i,t)+Yd(i,e)+$d(i,n)}function Kd(i,t){const e=1-i;return e*e*e*t}function Zd(i,t){const e=1-i;return 3*e*e*i*t}function Jd(i,t){return 3*(1-i)*i*i*t}function jd(i,t){return i*i*i*t}function Er(i,t,e,n,s){return Kd(i,t)+Zd(i,e)+Jd(i,n)+jd(i,s)}class Qd extends bi{constructor(t=new vt,e=new vt,n=new vt,s=new vt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new vt){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Er(t,s.x,r.x,o.x,a.x),Er(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class tp extends bi{constructor(t=new I,e=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new I){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Er(t,s.x,r.x,o.x,a.x),Er(t,s.y,r.y,o.y,a.y),Er(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ep extends bi{constructor(t=new vt,e=new vt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new vt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new vt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class np extends bi{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ip extends bi{constructor(t=new vt,e=new vt,n=new vt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new vt){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Sr(t,s.x,r.x,o.x),Sr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Tu extends bi{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Sr(t,s.x,r.x,o.x),Sr(t,s.y,r.y,o.y),Sr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class sp extends bi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new vt){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(th(a,l.x,c.x,u.x,h.x),th(a,l.y,c.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new vt().fromArray(s))}return this}}var rp=Object.freeze({__proto__:null,ArcCurve:Xd,CatmullRomCurve3:Au,CubicBezierCurve:Qd,CubicBezierCurve3:tp,EllipseCurve:wu,LineCurve:ep,LineCurve3:np,QuadraticBezierCurve:ip,QuadraticBezierCurve3:Tu,SplineCurve:sp});class ps extends Zo{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ps(t.radius,t.detail)}}class Jo extends Zo{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Jo(t.radius,t.detail)}}class Tn extends Re{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=t/a,f=e/l,p=[],m=[],_=[],g=[];for(let d=0;d<u;d++){const v=d*f-o;for(let M=0;M<c;M++){const x=M*h-r;m.push(x,-v,0),_.push(0,0,1),g.push(M/a),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let v=0;v<a;v++){const M=v+c*d,x=v+c*(d+1),y=v+1+c*(d+1),w=v+1+c*d;p.push(M,x,w),p.push(x,y,w)}this.setIndex(p),this.setAttribute("position",new pe(m,3)),this.setAttribute("normal",new pe(_,3)),this.setAttribute("uv",new pe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tn(t.width,t.height,t.widthSegments,t.heightSegments)}}class On extends Re{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new I,f=new I,p=[],m=[],_=[],g=[];for(let d=0;d<=n;d++){const v=[],M=d/n;let x=0;d===0&&o===0?x=.5/e:d===n&&l===Math.PI&&(x=-.5/e);for(let y=0;y<=e;y++){const w=y/e;h.x=-t*Math.cos(s+w*r)*Math.sin(o+M*a),h.y=t*Math.cos(o+M*a),h.z=t*Math.sin(s+w*r)*Math.sin(o+M*a),m.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),g.push(w+x,1-M),v.push(c++)}u.push(v)}for(let d=0;d<n;d++)for(let v=0;v<e;v++){const M=u[d][v+1],x=u[d][v],y=u[d+1][v],w=u[d+1][v+1];(d!==0||o>0)&&p.push(M,x,w),(d!==n-1||l<Math.PI)&&p.push(x,y,w)}this.setIndex(p),this.setAttribute("position",new pe(m,3)),this.setAttribute("normal",new pe(_,3)),this.setAttribute("uv",new pe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new On(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Qs extends Re{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],c=[],u=new I,h=new I,f=new I;for(let p=0;p<=n;p++)for(let m=0;m<=s;m++){const _=m/s*r,g=p/n*Math.PI*2;h.x=(t+e*Math.cos(g))*Math.cos(_),h.y=(t+e*Math.cos(g))*Math.sin(_),h.z=e*Math.sin(g),a.push(h.x,h.y,h.z),u.x=t*Math.cos(_),u.y=t*Math.sin(_),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(m/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let m=1;m<=s;m++){const _=(s+1)*p+m-1,g=(s+1)*(p-1)+m-1,d=(s+1)*(p-1)+m,v=(s+1)*p+m;o.push(_,g,v),o.push(g,d,v)}this.setIndex(o),this.setAttribute("position",new pe(a,3)),this.setAttribute("normal",new pe(l,3)),this.setAttribute("uv",new pe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qs(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class il extends Re{constructor(t=new Tu(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new I,l=new I,c=new vt;let u=new I;const h=[],f=[],p=[],m=[];_(),this.setIndex(m),this.setAttribute("position",new pe(h,3)),this.setAttribute("normal",new pe(f,3)),this.setAttribute("uv",new pe(p,2));function _(){for(let M=0;M<e;M++)g(M);g(r===!1?e:0),v(),d()}function g(M){u=t.getPointAt(M/e,u);const x=o.normals[M],y=o.binormals[M];for(let w=0;w<=s;w++){const T=w/s*Math.PI*2,R=Math.sin(T),S=-Math.cos(T);l.x=S*x.x+R*y.x,l.y=S*x.y+R*y.y,l.z=S*x.z+R*y.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,h.push(a.x,a.y,a.z)}}function d(){for(let M=1;M<=e;M++)for(let x=1;x<=s;x++){const y=(s+1)*(M-1)+(x-1),w=(s+1)*M+(x-1),T=(s+1)*M+x,R=(s+1)*(M-1)+x;m.push(y,w,R),m.push(w,T,R)}}function v(){for(let M=0;M<=e;M++)for(let x=0;x<=s;x++)c.x=M/e,c.y=x/s,p.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new il(new rp[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Ge extends ds{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new $(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lu,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class op extends ds{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ap extends ds{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class sl extends Ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new $(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class cp extends sl{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Pa=new _e,eh=new I,nh=new I;class Ru{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new vt(512,512),this.mapType=ei,this.map=null,this.mapPass=null,this.matrix=new _e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new tl,this._frameExtents=new vt(1,1),this._viewportCount=1,this._viewports=[new he(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;eh.setFromMatrixPosition(t.matrixWorld),e.position.copy(eh),nh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(nh),e.updateMatrixWorld(),Pa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pa,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Pa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const ih=new _e,mr=new I,La=new I;class lp extends Ru{constructor(){super(new En(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new vt(4,2),this._viewportCount=6,this._viewports=[new he(2,1,1,1),new he(0,1,1,1),new he(3,1,1,1),new he(1,1,1,1),new he(3,0,1,1),new he(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),mr.setFromMatrixPosition(t.matrixWorld),n.position.copy(mr),La.copy(n.position),La.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(La),n.updateMatrixWorld(),s.makeTranslation(-mr.x,-mr.y,-mr.z),ih.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ih,n.coordinateSystem,n.reversedDepth)}}class hp extends sl{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new lp}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Cu extends vu{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class up extends Ru{constructor(){super(new Cu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class fp extends sl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.target=new Ve,this.shadow=new up}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class dp extends Re{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class pp extends En{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function sh(i,t,e,n){const s=mp(n);switch(e){case ou:return i*t;case Xc:return i*t/s.components*s.byteLength;case qc:return i*t/s.components*s.byteLength;case cu:return i*t*2/s.components*s.byteLength;case Yc:return i*t*2/s.components*s.byteLength;case au:return i*t*3/s.components*s.byteLength;case Vn:return i*t*4/s.components*s.byteLength;case $c:return i*t*4/s.components*s.byteLength;case bo:case wo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ao:case To:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case sc:case oc:return Math.max(i,16)*Math.max(t,8)/4;case ic:case rc:return Math.max(i,8)*Math.max(t,8)/2;case ac:case cc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case lc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case hc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case uc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case fc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case dc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case pc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case mc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case gc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case _c:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case xc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case vc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Mc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case yc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Sc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ec:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case bc:case wc:case Ac:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Tc:case Rc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Cc:case Pc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function mp(i){switch(i){case ei:case nu:return{byteLength:1,components:1};case Cr:case iu:case Vr:return{byteLength:2,components:1};case Vc:case Wc:return{byteLength:2,components:4};case ls:case Gc:case Qn:return{byteLength:4,components:1};case su:case ru:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hc);function Pu(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function gp(i){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((p,m)=>p.start-m.start);let f=0;for(let p=1;p<h.length;p++){const m=h[f],_=h[p];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++f,h[f]=_)}h.length=f+1;for(let p=0,m=h.length;p<m;p++){const _=h[p];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var _p=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xp=`#ifdef USE_ALPHAHASH
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
#endif`,vp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ep=`#ifdef USE_AOMAP
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
#endif`,bp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wp=`#ifdef USE_BATCHING
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
#endif`,Ap=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Tp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Pp=`#ifdef USE_IRIDESCENCE
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
#endif`,Lp=`#ifdef USE_BUMPMAP
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
#endif`,Dp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ip=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Up=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Np=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Op=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Bp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Hp=`#define PI 3.141592653589793
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
} // validated`,kp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Gp=`vec3 transformedNormal = objectNormal;
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
#endif`,Vp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yp="gl_FragColor = linearToOutputTexel( gl_FragColor );",$p=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Kp=`#ifdef USE_ENVMAP
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
#endif`,Zp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Jp=`#ifdef USE_ENVMAP
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
#endif`,jp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qp=`#ifdef USE_ENVMAP
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
#endif`,t0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,e0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,n0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,i0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,s0=`#ifdef USE_GRADIENTMAP
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
}`,r0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,o0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,a0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,c0=`uniform bool receiveShadow;
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
#endif`,l0=`#ifdef USE_ENVMAP
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
#endif`,h0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,u0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,f0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,d0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,p0=`PhysicalMaterial material;
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
#endif`,m0=`struct PhysicalMaterial {
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
}`,g0=`
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
#endif`,_0=`#if defined( RE_IndirectDiffuse )
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
#endif`,x0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,v0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,M0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,y0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,S0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,E0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,b0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,w0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,A0=`#if defined( USE_POINTS_UV )
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
#endif`,T0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,R0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,C0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,P0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,L0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,D0=`#ifdef USE_MORPHTARGETS
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
#endif`,I0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,U0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,N0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,F0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,O0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,z0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,B0=`#ifdef USE_NORMALMAP
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
#endif`,H0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,k0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,G0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,V0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,W0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,X0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,q0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Y0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,K0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Z0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,J0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,j0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Q0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,em=`float getShadowMask() {
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
}`,nm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,im=`#ifdef USE_SKINNING
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
#endif`,sm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rm=`#ifdef USE_SKINNING
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
#endif`,om=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,am=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hm=`#ifdef USE_TRANSMISSION
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
#endif`,um=`#ifdef USE_TRANSMISSION
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
#endif`,fm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_m=`uniform sampler2D t2D;
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
}`,xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ym=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sm=`#include <common>
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
}`,Em=`#if DEPTH_PACKING == 3200
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
}`,bm=`#define DISTANCE
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
}`,wm=`#define DISTANCE
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
}`,Am=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Tm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rm=`uniform float scale;
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
}`,Cm=`uniform vec3 diffuse;
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
}`,Pm=`#include <common>
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
}`,Lm=`uniform vec3 diffuse;
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
}`,Dm=`#define LAMBERT
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
}`,Im=`#define LAMBERT
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
}`,Um=`#define MATCAP
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
}`,Nm=`#define MATCAP
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
}`,Fm=`#define NORMAL
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
}`,Om=`#define NORMAL
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
}`,zm=`#define PHONG
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
}`,Bm=`#define PHONG
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
}`,Hm=`#define STANDARD
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
}`,km=`#define STANDARD
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
}`,Gm=`#define TOON
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
}`,Vm=`#define TOON
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
}`,Wm=`uniform float size;
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
}`,Xm=`uniform vec3 diffuse;
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
}`,qm=`#include <common>
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
}`,Ym=`uniform vec3 color;
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
}`,$m=`uniform float rotation;
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
}`,Km=`uniform vec3 diffuse;
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
}`,Qt={alphahash_fragment:_p,alphahash_pars_fragment:xp,alphamap_fragment:vp,alphamap_pars_fragment:Mp,alphatest_fragment:yp,alphatest_pars_fragment:Sp,aomap_fragment:Ep,aomap_pars_fragment:bp,batching_pars_vertex:wp,batching_vertex:Ap,begin_vertex:Tp,beginnormal_vertex:Rp,bsdfs:Cp,iridescence_fragment:Pp,bumpmap_pars_fragment:Lp,clipping_planes_fragment:Dp,clipping_planes_pars_fragment:Ip,clipping_planes_pars_vertex:Up,clipping_planes_vertex:Np,color_fragment:Fp,color_pars_fragment:Op,color_pars_vertex:zp,color_vertex:Bp,common:Hp,cube_uv_reflection_fragment:kp,defaultnormal_vertex:Gp,displacementmap_pars_vertex:Vp,displacementmap_vertex:Wp,emissivemap_fragment:Xp,emissivemap_pars_fragment:qp,colorspace_fragment:Yp,colorspace_pars_fragment:$p,envmap_fragment:Kp,envmap_common_pars_fragment:Zp,envmap_pars_fragment:Jp,envmap_pars_vertex:jp,envmap_physical_pars_fragment:l0,envmap_vertex:Qp,fog_vertex:t0,fog_pars_vertex:e0,fog_fragment:n0,fog_pars_fragment:i0,gradientmap_pars_fragment:s0,lightmap_pars_fragment:r0,lights_lambert_fragment:o0,lights_lambert_pars_fragment:a0,lights_pars_begin:c0,lights_toon_fragment:h0,lights_toon_pars_fragment:u0,lights_phong_fragment:f0,lights_phong_pars_fragment:d0,lights_physical_fragment:p0,lights_physical_pars_fragment:m0,lights_fragment_begin:g0,lights_fragment_maps:_0,lights_fragment_end:x0,logdepthbuf_fragment:v0,logdepthbuf_pars_fragment:M0,logdepthbuf_pars_vertex:y0,logdepthbuf_vertex:S0,map_fragment:E0,map_pars_fragment:b0,map_particle_fragment:w0,map_particle_pars_fragment:A0,metalnessmap_fragment:T0,metalnessmap_pars_fragment:R0,morphinstance_vertex:C0,morphcolor_vertex:P0,morphnormal_vertex:L0,morphtarget_pars_vertex:D0,morphtarget_vertex:I0,normal_fragment_begin:U0,normal_fragment_maps:N0,normal_pars_fragment:F0,normal_pars_vertex:O0,normal_vertex:z0,normalmap_pars_fragment:B0,clearcoat_normal_fragment_begin:H0,clearcoat_normal_fragment_maps:k0,clearcoat_pars_fragment:G0,iridescence_pars_fragment:V0,opaque_fragment:W0,packing:X0,premultiplied_alpha_fragment:q0,project_vertex:Y0,dithering_fragment:$0,dithering_pars_fragment:K0,roughnessmap_fragment:Z0,roughnessmap_pars_fragment:J0,shadowmap_pars_fragment:j0,shadowmap_pars_vertex:Q0,shadowmap_vertex:tm,shadowmask_pars_fragment:em,skinbase_vertex:nm,skinning_pars_vertex:im,skinning_vertex:sm,skinnormal_vertex:rm,specularmap_fragment:om,specularmap_pars_fragment:am,tonemapping_fragment:cm,tonemapping_pars_fragment:lm,transmission_fragment:hm,transmission_pars_fragment:um,uv_pars_fragment:fm,uv_pars_vertex:dm,uv_vertex:pm,worldpos_vertex:mm,background_vert:gm,background_frag:_m,backgroundCube_vert:xm,backgroundCube_frag:vm,cube_vert:Mm,cube_frag:ym,depth_vert:Sm,depth_frag:Em,distanceRGBA_vert:bm,distanceRGBA_frag:wm,equirect_vert:Am,equirect_frag:Tm,linedashed_vert:Rm,linedashed_frag:Cm,meshbasic_vert:Pm,meshbasic_frag:Lm,meshlambert_vert:Dm,meshlambert_frag:Im,meshmatcap_vert:Um,meshmatcap_frag:Nm,meshnormal_vert:Fm,meshnormal_frag:Om,meshphong_vert:zm,meshphong_frag:Bm,meshphysical_vert:Hm,meshphysical_frag:km,meshtoon_vert:Gm,meshtoon_frag:Vm,points_vert:Wm,points_frag:Xm,shadow_vert:qm,shadow_frag:Ym,sprite_vert:$m,sprite_frag:Km},dt={common:{diffuse:{value:new $(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new $(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},Kn={basic:{uniforms:fn([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:fn([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new $(0)}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:fn([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new $(0)},specular:{value:new $(1118481)},shininess:{value:30}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:fn([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new $(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:fn([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new $(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:fn([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:fn([dt.points,dt.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:fn([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:fn([dt.common,dt.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:fn([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:fn([dt.sprite,dt.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distanceRGBA:{uniforms:fn([dt.common,dt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distanceRGBA_vert,fragmentShader:Qt.distanceRGBA_frag},shadow:{uniforms:fn([dt.lights,dt.fog,{color:{value:new $(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};Kn.physical={uniforms:fn([Kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new $(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new $(0)},specularColor:{value:new $(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};const Mo={r:0,b:0,g:0},$i=new Yn,Zm=new _e;function Jm(i,t,e,n,s,r,o){const a=new $(0);let l=r===!0?0:1,c,u,h=null,f=0,p=null;function m(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?e:t).get(x)),x}function _(M){let x=!1;const y=m(M);y===null?d(a,l):y&&y.isColor&&(d(y,1),x=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(M,x){const y=m(x);y&&(y.isCubeTexture||y.mapping===qo)?(u===void 0&&(u=new Kt(new dn(1,1,1),new cn({name:"BackgroundCubeMaterial",uniforms:js(Kn.backgroundCube.uniforms),vertexShader:Kn.backgroundCube.vertexShader,fragmentShader:Kn.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),$i.copy(x.backgroundRotation),$i.x*=-1,$i.y*=-1,$i.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&($i.y*=-1,$i.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Zm.makeRotationFromEuler($i)),u.material.toneMapped=de.getTransfer(y.colorSpace)!==ye,(h!==y||f!==y.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=y,f=y.version,p=i.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Kt(new Tn(2,2),new cn({name:"BackgroundMaterial",uniforms:js(Kn.background.uniforms),vertexShader:Kn.background.vertexShader,fragmentShader:Kn.background.fragmentShader,side:vi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=de.getTransfer(y.colorSpace)!==ye,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,f=y.version,p=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function d(M,x){M.getRGB(Mo,xu(i)),n.buffers.color.setClear(Mo.r,Mo.g,Mo.b,x,o)}function v(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,x=1){a.set(M),l=x,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,d(a,l)},render:_,addToRenderList:g,dispose:v}}function jm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(E,C,L,U,z){let O=!1;const D=h(U,L,C);r!==D&&(r=D,c(r.object)),O=p(E,U,L,z),O&&m(E,U,L,z),z!==null&&t.update(z,i.ELEMENT_ARRAY_BUFFER),(O||o)&&(o=!1,x(E,C,L,U),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return i.createVertexArray()}function c(E){return i.bindVertexArray(E)}function u(E){return i.deleteVertexArray(E)}function h(E,C,L){const U=L.wireframe===!0;let z=n[E.id];z===void 0&&(z={},n[E.id]=z);let O=z[C.id];O===void 0&&(O={},z[C.id]=O);let D=O[U];return D===void 0&&(D=f(l()),O[U]=D),D}function f(E){const C=[],L=[],U=[];for(let z=0;z<e;z++)C[z]=0,L[z]=0,U[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:L,attributeDivisors:U,object:E,attributes:{},index:null}}function p(E,C,L,U){const z=r.attributes,O=C.attributes;let D=0;const G=L.getAttributes();for(const B in G)if(G[B].location>=0){const st=z[B];let tt=O[B];if(tt===void 0&&(B==="instanceMatrix"&&E.instanceMatrix&&(tt=E.instanceMatrix),B==="instanceColor"&&E.instanceColor&&(tt=E.instanceColor)),st===void 0||st.attribute!==tt||tt&&st.data!==tt.data)return!0;D++}return r.attributesNum!==D||r.index!==U}function m(E,C,L,U){const z={},O=C.attributes;let D=0;const G=L.getAttributes();for(const B in G)if(G[B].location>=0){let st=O[B];st===void 0&&(B==="instanceMatrix"&&E.instanceMatrix&&(st=E.instanceMatrix),B==="instanceColor"&&E.instanceColor&&(st=E.instanceColor));const tt={};tt.attribute=st,st&&st.data&&(tt.data=st.data),z[B]=tt,D++}r.attributes=z,r.attributesNum=D,r.index=U}function _(){const E=r.newAttributes;for(let C=0,L=E.length;C<L;C++)E[C]=0}function g(E){d(E,0)}function d(E,C){const L=r.newAttributes,U=r.enabledAttributes,z=r.attributeDivisors;L[E]=1,U[E]===0&&(i.enableVertexAttribArray(E),U[E]=1),z[E]!==C&&(i.vertexAttribDivisor(E,C),z[E]=C)}function v(){const E=r.newAttributes,C=r.enabledAttributes;for(let L=0,U=C.length;L<U;L++)C[L]!==E[L]&&(i.disableVertexAttribArray(L),C[L]=0)}function M(E,C,L,U,z,O,D){D===!0?i.vertexAttribIPointer(E,C,L,z,O):i.vertexAttribPointer(E,C,L,U,z,O)}function x(E,C,L,U){_();const z=U.attributes,O=L.getAttributes(),D=C.defaultAttributeValues;for(const G in O){const B=O[G];if(B.location>=0){let nt=z[G];if(nt===void 0&&(G==="instanceMatrix"&&E.instanceMatrix&&(nt=E.instanceMatrix),G==="instanceColor"&&E.instanceColor&&(nt=E.instanceColor)),nt!==void 0){const st=nt.normalized,tt=nt.itemSize,ht=t.get(nt);if(ht===void 0)continue;const St=ht.buffer,Tt=ht.type,Ut=ht.bytesPerElement,q=Tt===i.INT||Tt===i.UNSIGNED_INT||nt.gpuType===Gc;if(nt.isInterleavedBufferAttribute){const Z=nt.data,lt=Z.stride,Bt=nt.offset;if(Z.isInstancedInterleavedBuffer){for(let Dt=0;Dt<B.locationSize;Dt++)d(B.location+Dt,Z.meshPerAttribute);E.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let Dt=0;Dt<B.locationSize;Dt++)g(B.location+Dt);i.bindBuffer(i.ARRAY_BUFFER,St);for(let Dt=0;Dt<B.locationSize;Dt++)M(B.location+Dt,tt/B.locationSize,Tt,st,lt*Ut,(Bt+tt/B.locationSize*Dt)*Ut,q)}else{if(nt.isInstancedBufferAttribute){for(let Z=0;Z<B.locationSize;Z++)d(B.location+Z,nt.meshPerAttribute);E.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let Z=0;Z<B.locationSize;Z++)g(B.location+Z);i.bindBuffer(i.ARRAY_BUFFER,St);for(let Z=0;Z<B.locationSize;Z++)M(B.location+Z,tt/B.locationSize,Tt,st,tt*Ut,tt/B.locationSize*Z*Ut,q)}}else if(D!==void 0){const st=D[G];if(st!==void 0)switch(st.length){case 2:i.vertexAttrib2fv(B.location,st);break;case 3:i.vertexAttrib3fv(B.location,st);break;case 4:i.vertexAttrib4fv(B.location,st);break;default:i.vertexAttrib1fv(B.location,st)}}}}v()}function y(){R();for(const E in n){const C=n[E];for(const L in C){const U=C[L];for(const z in U)u(U[z].object),delete U[z];delete C[L]}delete n[E]}}function w(E){if(n[E.id]===void 0)return;const C=n[E.id];for(const L in C){const U=C[L];for(const z in U)u(U[z].object),delete U[z];delete C[L]}delete n[E.id]}function T(E){for(const C in n){const L=n[C];if(L[E.id]===void 0)continue;const U=L[E.id];for(const z in U)u(U[z].object),delete U[z];delete L[E.id]}}function R(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:S,dispose:y,releaseStatesOfGeometry:w,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:g,disableUnusedAttributes:v}}function Qm(i,t,e){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function a(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let p=0;for(let m=0;m<h;m++)p+=u[m];e.update(p,n,1)}function l(c,u,h,f){if(h===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<c.length;m++)o(c[m],u[m],f[m]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let m=0;for(let _=0;_<h;_++)m+=u[_]*f[_];e.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function tg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==Vn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const R=T===Vr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==ei&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Qn&&!R)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=m>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:x,vertexTextures:y,maxSamples:w}}function eg(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Zi,a=new Jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||n!==0||s;return s=f,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,p){const m=h.clippingPlanes,_=h.clipIntersection,g=h.clipShadows,d=i.get(h);if(!s||m===null||m.length===0||r&&!g)r?u(null):c();else{const v=r?0:n,M=v*4;let x=d.clippingState||null;l.value=x,x=u(m,f,M,p);for(let y=0;y!==M;++y)x[y]=e[y];d.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,p,m){const _=h!==null?h.length:0;let g=null;if(_!==0){if(g=l.value,m!==!0||g===null){const d=p+_*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<d)&&(g=new Float32Array(d));for(let M=0,x=p;M!==_;++M,x+=4)o.copy(h[M]).applyMatrix4(v,a),o.normal.toArray(g,x),g[x+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function ng(i){let t=new WeakMap;function e(o,a){return a===Qa?o.mapping=Ks:a===tc&&(o.mapping=Zs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Qa||a===tc)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Nd(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const Bs=4,rh=[.125,.215,.35,.446,.526,.582],ts=20,Da=new Cu,oh=new $;let Ia=null,Ua=0,Na=0,Fa=!1;const Ji=(1+Math.sqrt(5))/2,Ns=1/Ji,ah=[new I(-Ji,Ns,0),new I(Ji,Ns,0),new I(-Ns,0,Ji),new I(Ns,0,Ji),new I(0,Ji,-Ns),new I(0,Ji,Ns),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],ig=new I;class ch{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=ig}=r;Ia=this._renderer.getRenderTarget(),Ua=this._renderer.getActiveCubeFace(),Na=this._renderer.getActiveMipmapLevel(),Fa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ia,Ua,Na),this._renderer.xr.enabled=Fa,t.scissorTest=!1,yo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ks||t.mapping===Zs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ia=this._renderer.getRenderTarget(),Ua=this._renderer.getActiveCubeFace(),Na=this._renderer.getActiveMipmapLevel(),Fa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:jn,minFilter:jn,generateMipmaps:!1,type:Vr,format:Vn,colorSpace:Js,depthBuffer:!1},s=lh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lh(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sg(r)),this._blurMaterial=rg(r,t,e)}return s}_compileMaterial(t){const e=new Kt(this._lodPlanes[0],t);this._renderer.compile(e,Da)}_sceneToCubeUV(t,e,n,s,r){const l=new En(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(oh),h.toneMapping=Hi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null));const _=new tn({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1}),g=new Kt(new dn,_);let d=!1;const v=t.background;v?v.isColor&&(_.color.copy(v),t.background=null,d=!0):(_.color.copy(oh),d=!0);for(let M=0;M<6;M++){const x=M%3;x===0?(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[M],r.y,r.z)):x===1?(l.up.set(0,0,c[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[M],r.z)):(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[M]));const y=this._cubeSize;yo(s,x*y,M>2?y:0,y,y),h.setRenderTarget(s),d&&h.render(g,l),h.render(t,l)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=p,h.autoClear=f,t.background=v}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ks||t.mapping===Zs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=uh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Kt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;yo(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Da)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=ah[(s-r-1)%ah.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Kt(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ts-1),_=r/m,g=isFinite(r)?1+Math.floor(u*_):ts;g>ts&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ts}`);const d=[];let v=0;for(let T=0;T<ts;++T){const R=T/_,S=Math.exp(-R*R/2);d.push(S),T===0?v+=S:T<g&&(v+=2*S)}for(let T=0;T<d.length;T++)d[T]=d[T]/v;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:M}=this;f.dTheta.value=m,f.mipInt.value=M-n;const x=this._sizeLods[s],y=3*x*(s>M-Bs?s-M+Bs:0),w=4*(this._cubeSize-x);yo(e,y,w,3*x,2*x),l.setRenderTarget(e),l.render(h,Da)}}function sg(i){const t=[],e=[],n=[];let s=i;const r=i-Bs+1+rh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Bs?l=rh[o-i+Bs-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,m=6,_=3,g=2,d=1,v=new Float32Array(_*m*p),M=new Float32Array(g*m*p),x=new Float32Array(d*m*p);for(let w=0;w<p;w++){const T=w%3*2/3-1,R=w>2?0:-1,S=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];v.set(S,_*m*w),M.set(f,g*m*w);const E=[w,w,w,w,w,w];x.set(E,d*m*w)}const y=new Re;y.setAttribute("position",new ae(v,_)),y.setAttribute("uv",new ae(M,g)),y.setAttribute("faceIndex",new ae(x,d)),t.push(y),s>Bs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function lh(i,t,e){const n=new hs(i,t,e);return n.texture.mapping=qo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function yo(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function rg(i,t,e){const n=new Float32Array(ts),s=new I(0,1,0);return new cn({name:"SphericalGaussianBlur",defines:{n:ts,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:rl(),fragmentShader:`

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
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function hh(){return new cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rl(),fragmentShader:`

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
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function uh(){return new cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function rl(){return`

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
	`}function og(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Qa||l===tc,u=l===Ks||l===Zs;if(c||u){let h=t.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new ch(i)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&s(p)?(e===null&&(e=new ch(i)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function ag(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Ur("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function cg(i,t,e,n){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const m in f.attributes)t.remove(f.attributes[m]);f.removeEventListener("dispose",o),delete s[f.id];const p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const p in f)t.update(f[p],i.ARRAY_BUFFER)}function c(h){const f=[],p=h.index,m=h.attributes.position;let _=0;if(p!==null){const v=p.array;_=p.version;for(let M=0,x=v.length;M<x;M+=3){const y=v[M+0],w=v[M+1],T=v[M+2];f.push(y,w,w,T,T,y)}}else if(m!==void 0){const v=m.array;_=m.version;for(let M=0,x=v.length/3-1;M<x;M+=3){const y=M+0,w=M+1,T=M+2;f.push(y,w,w,T,T,y)}}else return;const g=new(uu(f)?_u:gu)(f,1);g.version=_;const d=r.get(h);d&&t.remove(d),r.set(h,g)}function u(h){const f=r.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function lg(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,p){i.drawElements(n,p,r,f*o),e.update(p,n,1)}function c(f,p,m){m!==0&&(i.drawElementsInstanced(n,p,r,f*o,m),e.update(p,n,m))}function u(f,p,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,m);let g=0;for(let d=0;d<m;d++)g+=p[d];e.update(g,n,1)}function h(f,p,m,_){if(m===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let d=0;d<f.length;d++)c(f[d]/o,p[d],_[d]);else{g.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,_,0,m);let d=0;for(let v=0;v<m;v++)d+=p[v]*_[v];e.update(d,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function hg(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function ug(i,t,e){const n=new WeakMap,s=new he;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let E=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",E)};var p=E;f!==void 0&&f.texture.dispose();const m=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let x=0;m===!0&&(x=1),_===!0&&(x=2),g===!0&&(x=3);let y=a.attributes.position.count*x,w=1;y>t.maxTextureSize&&(w=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);const T=new Float32Array(y*w*4*h),R=new fu(T,y,w,h);R.type=Qn,R.needsUpdate=!0;const S=x*4;for(let C=0;C<h;C++){const L=d[C],U=v[C],z=M[C],O=y*w*4*C;for(let D=0;D<L.count;D++){const G=D*S;m===!0&&(s.fromBufferAttribute(L,D),T[O+G+0]=s.x,T[O+G+1]=s.y,T[O+G+2]=s.z,T[O+G+3]=0),_===!0&&(s.fromBufferAttribute(U,D),T[O+G+4]=s.x,T[O+G+5]=s.y,T[O+G+6]=s.z,T[O+G+7]=0),g===!0&&(s.fromBufferAttribute(z,D),T[O+G+8]=s.x,T[O+G+9]=s.y,T[O+G+10]=s.z,T[O+G+11]=z.itemSize===4?s.w:1)}}f={count:h,texture:R,size:new vt(y,w)},n.set(a,f),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];const _=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function fg(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}const Lu=new an,fh=new Eu(1,1),Du=new fu,Iu=new vd,Uu=new Mu,dh=[],ph=[],mh=new Float32Array(16),gh=new Float32Array(9),_h=new Float32Array(4);function sr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=dh[s];if(r===void 0&&(r=new Float32Array(s),dh[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function $e(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ke(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function jo(i,t){let e=ph[t];e===void 0&&(e=new Int32Array(t),ph[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function dg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function pg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;i.uniform2fv(this.addr,t),Ke(e,t)}}function mg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if($e(e,t))return;i.uniform3fv(this.addr,t),Ke(e,t)}}function gg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;i.uniform4fv(this.addr,t),Ke(e,t)}}function _g(i,t){const e=this.cache,n=t.elements;if(n===void 0){if($e(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ke(e,t)}else{if($e(e,n))return;_h.set(n),i.uniformMatrix2fv(this.addr,!1,_h),Ke(e,n)}}function xg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if($e(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ke(e,t)}else{if($e(e,n))return;gh.set(n),i.uniformMatrix3fv(this.addr,!1,gh),Ke(e,n)}}function vg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if($e(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ke(e,t)}else{if($e(e,n))return;mh.set(n),i.uniformMatrix4fv(this.addr,!1,mh),Ke(e,n)}}function Mg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function yg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;i.uniform2iv(this.addr,t),Ke(e,t)}}function Sg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if($e(e,t))return;i.uniform3iv(this.addr,t),Ke(e,t)}}function Eg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;i.uniform4iv(this.addr,t),Ke(e,t)}}function bg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function wg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;i.uniform2uiv(this.addr,t),Ke(e,t)}}function Ag(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if($e(e,t))return;i.uniform3uiv(this.addr,t),Ke(e,t)}}function Tg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;i.uniform4uiv(this.addr,t),Ke(e,t)}}function Rg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(fh.compareFunction=hu,r=fh):r=Lu,e.setTexture2D(t||r,s)}function Cg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Iu,s)}function Pg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Uu,s)}function Lg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Du,s)}function Dg(i){switch(i){case 5126:return dg;case 35664:return pg;case 35665:return mg;case 35666:return gg;case 35674:return _g;case 35675:return xg;case 35676:return vg;case 5124:case 35670:return Mg;case 35667:case 35671:return yg;case 35668:case 35672:return Sg;case 35669:case 35673:return Eg;case 5125:return bg;case 36294:return wg;case 36295:return Ag;case 36296:return Tg;case 35678:case 36198:case 36298:case 36306:case 35682:return Rg;case 35679:case 36299:case 36307:return Cg;case 35680:case 36300:case 36308:case 36293:return Pg;case 36289:case 36303:case 36311:case 36292:return Lg}}function Ig(i,t){i.uniform1fv(this.addr,t)}function Ug(i,t){const e=sr(t,this.size,2);i.uniform2fv(this.addr,e)}function Ng(i,t){const e=sr(t,this.size,3);i.uniform3fv(this.addr,e)}function Fg(i,t){const e=sr(t,this.size,4);i.uniform4fv(this.addr,e)}function Og(i,t){const e=sr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function zg(i,t){const e=sr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Bg(i,t){const e=sr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Hg(i,t){i.uniform1iv(this.addr,t)}function kg(i,t){i.uniform2iv(this.addr,t)}function Gg(i,t){i.uniform3iv(this.addr,t)}function Vg(i,t){i.uniform4iv(this.addr,t)}function Wg(i,t){i.uniform1uiv(this.addr,t)}function Xg(i,t){i.uniform2uiv(this.addr,t)}function qg(i,t){i.uniform3uiv(this.addr,t)}function Yg(i,t){i.uniform4uiv(this.addr,t)}function $g(i,t,e){const n=this.cache,s=t.length,r=jo(e,s);$e(n,r)||(i.uniform1iv(this.addr,r),Ke(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Lu,r[o])}function Kg(i,t,e){const n=this.cache,s=t.length,r=jo(e,s);$e(n,r)||(i.uniform1iv(this.addr,r),Ke(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Iu,r[o])}function Zg(i,t,e){const n=this.cache,s=t.length,r=jo(e,s);$e(n,r)||(i.uniform1iv(this.addr,r),Ke(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Uu,r[o])}function Jg(i,t,e){const n=this.cache,s=t.length,r=jo(e,s);$e(n,r)||(i.uniform1iv(this.addr,r),Ke(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Du,r[o])}function jg(i){switch(i){case 5126:return Ig;case 35664:return Ug;case 35665:return Ng;case 35666:return Fg;case 35674:return Og;case 35675:return zg;case 35676:return Bg;case 5124:case 35670:return Hg;case 35667:case 35671:return kg;case 35668:case 35672:return Gg;case 35669:case 35673:return Vg;case 5125:return Wg;case 36294:return Xg;case 36295:return qg;case 36296:return Yg;case 35678:case 36198:case 36298:case 36306:case 35682:return $g;case 35679:case 36299:case 36307:return Kg;case 35680:case 36300:case 36308:case 36293:return Zg;case 36289:case 36303:case 36311:case 36292:return Jg}}class Qg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Dg(e.type)}}class t_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=jg(e.type)}}class e_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Oa=/(\w+)(\])?(\[|\.)?/g;function xh(i,t){i.seq.push(t),i.map[t.id]=t}function n_(i,t,e){const n=i.name,s=n.length;for(Oa.lastIndex=0;;){const r=Oa.exec(n),o=Oa.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){xh(e,c===void 0?new Qg(a,i,t):new t_(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new e_(a),xh(e,h)),e=h}}}class Ro{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);n_(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function vh(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const i_=37297;let s_=0;function r_(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Mh=new Jt;function o_(i){de._getMatrix(Mh,de.workingColorSpace,i);const t=`mat3( ${Mh.elements.map(e=>e.toFixed(4))} )`;switch(de.getTransfer(i)){case Lo:return[t,"LinearTransferOETF"];case ye:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function yh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+r_(i.getShaderSource(t),a)}else return r}function a_(i,t){const e=o_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function c_(i,t){let e;switch(t){case If:e="Linear";break;case Uf:e="Reinhard";break;case Nf:e="Cineon";break;case tu:e="ACESFilmic";break;case Of:e="AgX";break;case zf:e="Neutral";break;case Ff:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const So=new I;function l_(){de.getLuminanceCoefficients(So);const i=So.x.toFixed(4),t=So.y.toFixed(4),e=So.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function h_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gr).join(`
`)}function u_(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function f_(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function gr(i){return i!==""}function Sh(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Eh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const d_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ic(i){return i.replace(d_,m_)}const p_=new Map;function m_(i,t){let e=Qt[t];if(e===void 0){const n=p_.get(t);if(n!==void 0)e=Qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ic(e)}const g_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bh(i){return i.replace(g_,__)}function __(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function wh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function x_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===kc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===ff?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===li&&(t="SHADOWMAP_TYPE_VSM"),t}function v_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ks:case Zs:t="ENVMAP_TYPE_CUBE";break;case qo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function M_(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Zs&&(t="ENVMAP_MODE_REFRACTION"),t}function y_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Qh:t="ENVMAP_BLENDING_MULTIPLY";break;case Lf:t="ENVMAP_BLENDING_MIX";break;case Df:t="ENVMAP_BLENDING_ADD";break}return t}function S_(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function E_(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=x_(e),c=v_(e),u=M_(e),h=y_(e),f=S_(e),p=h_(e),m=u_(r),_=s.createProgram();let g,d,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(gr).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(gr).join(`
`),d.length>0&&(d+=`
`)):(g=[wh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gr).join(`
`),d=[wh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Hi?"#define TONE_MAPPING":"",e.toneMapping!==Hi?Qt.tonemapping_pars_fragment:"",e.toneMapping!==Hi?c_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,a_("linearToOutputTexel",e.outputColorSpace),l_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(gr).join(`
`)),o=Ic(o),o=Sh(o,e),o=Eh(o,e),a=Ic(a),a=Sh(a,e),a=Eh(a,e),o=bh(o),a=bh(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",e.glslVersion===Cl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Cl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const M=v+g+o,x=v+d+a,y=vh(s,s.VERTEX_SHADER,M),w=vh(s,s.FRAGMENT_SHADER,x);s.attachShader(_,y),s.attachShader(_,w),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function T(C){if(i.debug.checkShaderErrors){const L=s.getProgramInfoLog(_)||"",U=s.getShaderInfoLog(y)||"",z=s.getShaderInfoLog(w)||"",O=L.trim(),D=U.trim(),G=z.trim();let B=!0,nt=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,y,w);else{const st=yh(s,y,"vertex"),tt=yh(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+O+`
`+st+`
`+tt)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(D===""||G==="")&&(nt=!1);nt&&(C.diagnostics={runnable:B,programLog:O,vertexShader:{log:D,prefix:g},fragmentShader:{log:G,prefix:d}})}s.deleteShader(y),s.deleteShader(w),R=new Ro(s,_),S=f_(s,_)}let R;this.getUniforms=function(){return R===void 0&&T(this),R};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let E=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(_,i_)),E},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=s_++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=y,this.fragmentShader=w,this}let b_=0;class w_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new A_(t),e.set(t,n)),n}}class A_{constructor(t){this.id=b_++,this.code=t,this.usedTimes=0}}function T_(i,t,e,n,s,r,o){const a=new pu,l=new w_,c=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function g(S,E,C,L,U){const z=L.fog,O=U.geometry,D=S.isMeshStandardMaterial?L.environment:null,G=(S.isMeshStandardMaterial?e:t).get(S.envMap||D),B=G&&G.mapping===qo?G.image.height:null,nt=m[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const st=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,tt=st!==void 0?st.length:0;let ht=0;O.morphAttributes.position!==void 0&&(ht=1),O.morphAttributes.normal!==void 0&&(ht=2),O.morphAttributes.color!==void 0&&(ht=3);let St,Tt,Ut,q;if(nt){const ge=Kn[nt];St=ge.vertexShader,Tt=ge.fragmentShader}else St=S.vertexShader,Tt=S.fragmentShader,l.update(S),Ut=l.getVertexShaderID(S),q=l.getFragmentShaderID(S);const Z=i.getRenderTarget(),lt=i.state.buffers.depth.getReversed(),Bt=U.isInstancedMesh===!0,Dt=U.isBatchedMesh===!0,le=!!S.map,en=!!S.matcap,N=!!G,Le=!!S.aoMap,$t=!!S.lightMap,Wt=!!S.bumpMap,bt=!!S.normalMap,De=!!S.displacementMap,wt=!!S.emissiveMap,jt=!!S.metalnessMap,Ze=!!S.roughnessMap,Be=S.anisotropy>0,P=S.clearcoat>0,b=S.dispersion>0,V=S.iridescence>0,j=S.sheen>0,it=S.transmission>0,J=Be&&!!S.anisotropyMap,Pt=P&&!!S.clearcoatMap,ut=P&&!!S.clearcoatNormalMap,At=P&&!!S.clearcoatRoughnessMap,Rt=V&&!!S.iridescenceMap,at=V&&!!S.iridescenceThicknessMap,_t=j&&!!S.sheenColorMap,Gt=j&&!!S.sheenRoughnessMap,Ct=!!S.specularMap,pt=!!S.specularColorMap,Zt=!!S.specularIntensityMap,F=it&&!!S.transmissionMap,ct=it&&!!S.thicknessMap,ft=!!S.gradientMap,Mt=!!S.alphaMap,rt=S.alphaTest>0,et=!!S.alphaHash,Et=!!S.extensions;let Yt=Hi;S.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Yt=i.toneMapping);const Ae={shaderID:nt,shaderType:S.type,shaderName:S.name,vertexShader:St,fragmentShader:Tt,defines:S.defines,customVertexShaderID:Ut,customFragmentShaderID:q,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Dt,batchingColor:Dt&&U._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&U.instanceColor!==null,instancingMorph:Bt&&U.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Z===null?i.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Js,alphaToCoverage:!!S.alphaToCoverage,map:le,matcap:en,envMap:N,envMapMode:N&&G.mapping,envMapCubeUVHeight:B,aoMap:Le,lightMap:$t,bumpMap:Wt,normalMap:bt,displacementMap:f&&De,emissiveMap:wt,normalMapObjectSpace:bt&&S.normalMapType===Gf,normalMapTangentSpace:bt&&S.normalMapType===lu,metalnessMap:jt,roughnessMap:Ze,anisotropy:Be,anisotropyMap:J,clearcoat:P,clearcoatMap:Pt,clearcoatNormalMap:ut,clearcoatRoughnessMap:At,dispersion:b,iridescence:V,iridescenceMap:Rt,iridescenceThicknessMap:at,sheen:j,sheenColorMap:_t,sheenRoughnessMap:Gt,specularMap:Ct,specularColorMap:pt,specularIntensityMap:Zt,transmission:it,transmissionMap:F,thicknessMap:ct,gradientMap:ft,opaque:S.transparent===!1&&S.blending===Vs&&S.alphaToCoverage===!1,alphaMap:Mt,alphaTest:rt,alphaHash:et,combine:S.combine,mapUv:le&&_(S.map.channel),aoMapUv:Le&&_(S.aoMap.channel),lightMapUv:$t&&_(S.lightMap.channel),bumpMapUv:Wt&&_(S.bumpMap.channel),normalMapUv:bt&&_(S.normalMap.channel),displacementMapUv:De&&_(S.displacementMap.channel),emissiveMapUv:wt&&_(S.emissiveMap.channel),metalnessMapUv:jt&&_(S.metalnessMap.channel),roughnessMapUv:Ze&&_(S.roughnessMap.channel),anisotropyMapUv:J&&_(S.anisotropyMap.channel),clearcoatMapUv:Pt&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:ut&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:At&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Rt&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:at&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:_t&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Gt&&_(S.sheenRoughnessMap.channel),specularMapUv:Ct&&_(S.specularMap.channel),specularColorMapUv:pt&&_(S.specularColorMap.channel),specularIntensityMapUv:Zt&&_(S.specularIntensityMap.channel),transmissionMapUv:F&&_(S.transmissionMap.channel),thicknessMapUv:ct&&_(S.thicknessMap.channel),alphaMapUv:Mt&&_(S.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(bt||Be),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!O.attributes.uv&&(le||Mt),fog:!!z,useFog:S.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:lt,skinning:U.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:ht,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Yt,decodeVideoTexture:le&&S.map.isVideoTexture===!0&&de.getTransfer(S.map.colorSpace)===ye,decodeVideoTextureEmissive:wt&&S.emissiveMap.isVideoTexture===!0&&de.getTransfer(S.emissiveMap.colorSpace)===ye,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ue,flipSided:S.side===mn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Et&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Et&&S.extensions.multiDraw===!0||Dt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ae.vertexUv1s=c.has(1),Ae.vertexUv2s=c.has(2),Ae.vertexUv3s=c.has(3),c.clear(),Ae}function d(S){const E=[];if(S.shaderID?E.push(S.shaderID):(E.push(S.customVertexShaderID),E.push(S.customFragmentShaderID)),S.defines!==void 0)for(const C in S.defines)E.push(C),E.push(S.defines[C]);return S.isRawShaderMaterial===!1&&(v(E,S),M(E,S),E.push(i.outputColorSpace)),E.push(S.customProgramCacheKey),E.join()}function v(S,E){S.push(E.precision),S.push(E.outputColorSpace),S.push(E.envMapMode),S.push(E.envMapCubeUVHeight),S.push(E.mapUv),S.push(E.alphaMapUv),S.push(E.lightMapUv),S.push(E.aoMapUv),S.push(E.bumpMapUv),S.push(E.normalMapUv),S.push(E.displacementMapUv),S.push(E.emissiveMapUv),S.push(E.metalnessMapUv),S.push(E.roughnessMapUv),S.push(E.anisotropyMapUv),S.push(E.clearcoatMapUv),S.push(E.clearcoatNormalMapUv),S.push(E.clearcoatRoughnessMapUv),S.push(E.iridescenceMapUv),S.push(E.iridescenceThicknessMapUv),S.push(E.sheenColorMapUv),S.push(E.sheenRoughnessMapUv),S.push(E.specularMapUv),S.push(E.specularColorMapUv),S.push(E.specularIntensityMapUv),S.push(E.transmissionMapUv),S.push(E.thicknessMapUv),S.push(E.combine),S.push(E.fogExp2),S.push(E.sizeAttenuation),S.push(E.morphTargetsCount),S.push(E.morphAttributeCount),S.push(E.numDirLights),S.push(E.numPointLights),S.push(E.numSpotLights),S.push(E.numSpotLightMaps),S.push(E.numHemiLights),S.push(E.numRectAreaLights),S.push(E.numDirLightShadows),S.push(E.numPointLightShadows),S.push(E.numSpotLightShadows),S.push(E.numSpotLightShadowsWithMaps),S.push(E.numLightProbes),S.push(E.shadowMapType),S.push(E.toneMapping),S.push(E.numClippingPlanes),S.push(E.numClipIntersection),S.push(E.depthPacking)}function M(S,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),E.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),S.push(a.mask)}function x(S){const E=m[S.type];let C;if(E){const L=Kn[E];C=Jc.clone(L.uniforms)}else C=S.uniforms;return C}function y(S,E){let C;for(let L=0,U=u.length;L<U;L++){const z=u[L];if(z.cacheKey===E){C=z,++C.usedTimes;break}}return C===void 0&&(C=new E_(i,E,S,r),u.push(C)),C}function w(S){if(--S.usedTimes===0){const E=u.indexOf(S);u[E]=u[u.length-1],u.pop(),S.destroy()}}function T(S){l.remove(S)}function R(){l.dispose()}return{getParameters:g,getProgramCacheKey:d,getUniforms:x,acquireProgram:y,releaseProgram:w,releaseShaderCache:T,programs:u,dispose:R}}function R_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function C_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Ah(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Th(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(h,f,p,m,_,g){let d=i[t];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:m,renderOrder:h.renderOrder,z:_,group:g},i[t]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=m,d.renderOrder=h.renderOrder,d.z=_,d.group=g),t++,d}function a(h,f,p,m,_,g){const d=o(h,f,p,m,_,g);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):e.push(d)}function l(h,f,p,m,_,g){const d=o(h,f,p,m,_,g);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):e.unshift(d)}function c(h,f){e.length>1&&e.sort(h||C_),n.length>1&&n.sort(f||Ah),s.length>1&&s.sort(f||Ah)}function u(){for(let h=t,f=i.length;h<f;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function P_(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Th,i.set(n,[o])):s>=r.length?(o=new Th,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function L_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new $};break;case"SpotLight":e={position:new I,direction:new I,color:new $,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new $,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new $,groundColor:new $};break;case"RectAreaLight":e={color:new $,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function D_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let I_=0;function U_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function N_(i){const t=new L_,e=D_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const s=new I,r=new _e,o=new _e;function a(c){let u=0,h=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,m=0,_=0,g=0,d=0,v=0,M=0,x=0,y=0,w=0,T=0;c.sort(U_);for(let S=0,E=c.length;S<E;S++){const C=c[S],L=C.color,U=C.intensity,z=C.distance,O=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=L.r*U,h+=L.g*U,f+=L.b*U;else if(C.isLightProbe){for(let D=0;D<9;D++)n.probe[D].addScaledVector(C.sh.coefficients[D],U);T++}else if(C.isDirectionalLight){const D=t.get(C);if(D.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const G=C.shadow,B=e.get(C);B.shadowIntensity=G.intensity,B.shadowBias=G.bias,B.shadowNormalBias=G.normalBias,B.shadowRadius=G.radius,B.shadowMapSize=G.mapSize,n.directionalShadow[p]=B,n.directionalShadowMap[p]=O,n.directionalShadowMatrix[p]=C.shadow.matrix,v++}n.directional[p]=D,p++}else if(C.isSpotLight){const D=t.get(C);D.position.setFromMatrixPosition(C.matrixWorld),D.color.copy(L).multiplyScalar(U),D.distance=z,D.coneCos=Math.cos(C.angle),D.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),D.decay=C.decay,n.spot[_]=D;const G=C.shadow;if(C.map&&(n.spotLightMap[y]=C.map,y++,G.updateMatrices(C),C.castShadow&&w++),n.spotLightMatrix[_]=G.matrix,C.castShadow){const B=e.get(C);B.shadowIntensity=G.intensity,B.shadowBias=G.bias,B.shadowNormalBias=G.normalBias,B.shadowRadius=G.radius,B.shadowMapSize=G.mapSize,n.spotShadow[_]=B,n.spotShadowMap[_]=O,x++}_++}else if(C.isRectAreaLight){const D=t.get(C);D.color.copy(L).multiplyScalar(U),D.halfWidth.set(C.width*.5,0,0),D.halfHeight.set(0,C.height*.5,0),n.rectArea[g]=D,g++}else if(C.isPointLight){const D=t.get(C);if(D.color.copy(C.color).multiplyScalar(C.intensity),D.distance=C.distance,D.decay=C.decay,C.castShadow){const G=C.shadow,B=e.get(C);B.shadowIntensity=G.intensity,B.shadowBias=G.bias,B.shadowNormalBias=G.normalBias,B.shadowRadius=G.radius,B.shadowMapSize=G.mapSize,B.shadowCameraNear=G.camera.near,B.shadowCameraFar=G.camera.far,n.pointShadow[m]=B,n.pointShadowMap[m]=O,n.pointShadowMatrix[m]=C.shadow.matrix,M++}n.point[m]=D,m++}else if(C.isHemisphereLight){const D=t.get(C);D.skyColor.copy(C.color).multiplyScalar(U),D.groundColor.copy(C.groundColor).multiplyScalar(U),n.hemi[d]=D,d++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=dt.LTC_FLOAT_1,n.rectAreaLTC2=dt.LTC_FLOAT_2):(n.rectAreaLTC1=dt.LTC_HALF_1,n.rectAreaLTC2=dt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const R=n.hash;(R.directionalLength!==p||R.pointLength!==m||R.spotLength!==_||R.rectAreaLength!==g||R.hemiLength!==d||R.numDirectionalShadows!==v||R.numPointShadows!==M||R.numSpotShadows!==x||R.numSpotMaps!==y||R.numLightProbes!==T)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=g,n.point.length=m,n.hemi.length=d,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=x+y-w,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=T,R.directionalLength=p,R.pointLength=m,R.spotLength=_,R.rectAreaLength=g,R.hemiLength=d,R.numDirectionalShadows=v,R.numPointShadows=M,R.numSpotShadows=x,R.numSpotMaps=y,R.numLightProbes=T,n.version=I_++)}function l(c,u){let h=0,f=0,p=0,m=0,_=0;const g=u.matrixWorldInverse;for(let d=0,v=c.length;d<v;d++){const M=c[d];if(M.isDirectionalLight){const x=n.directional[h];x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),h++}else if(M.isSpotLight){const x=n.spot[p];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),p++}else if(M.isRectAreaLight){const x=n.rectArea[m];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(g),o.identity(),r.copy(M.matrixWorld),r.premultiply(g),o.extractRotation(r),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),m++}else if(M.isPointLight){const x=n.point[f];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(g),f++}else if(M.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(g),_++}}}return{setup:a,setupView:l,state:n}}function Rh(i){const t=new N_(i),e=[],n=[];function s(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function F_(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Rh(i),t.set(s,[a])):r>=o.length?(a=new Rh(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const O_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,z_=`uniform sampler2D shadow_pass;
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
}`;function B_(i,t,e){let n=new tl;const s=new vt,r=new vt,o=new he,a=new op({depthPacking:kf}),l=new ap,c={},u=e.maxTextureSize,h={[vi]:mn,[mn]:vi,[Ue]:Ue},f=new cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:O_,fragmentShader:z_}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const m=new Re;m.setAttribute("position",new ae(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Kt(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kc;let d=this.type;this.render=function(w,T,R){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;const S=i.getRenderTarget(),E=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),L=i.state;L.setBlending(Bi),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const U=d!==li&&this.type===li,z=d===li&&this.type!==li;for(let O=0,D=w.length;O<D;O++){const G=w[O],B=G.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const nt=B.getFrameExtents();if(s.multiply(nt),r.copy(B.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/nt.x),s.x=r.x*nt.x,B.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/nt.y),s.y=r.y*nt.y,B.mapSize.y=r.y)),B.map===null||U===!0||z===!0){const tt=this.type!==li?{minFilter:An,magFilter:An}:{};B.map!==null&&B.map.dispose(),B.map=new hs(s.x,s.y,tt),B.map.texture.name=G.name+".shadowMap",B.camera.updateProjectionMatrix()}i.setRenderTarget(B.map),i.clear();const st=B.getViewportCount();for(let tt=0;tt<st;tt++){const ht=B.getViewport(tt);o.set(r.x*ht.x,r.y*ht.y,r.x*ht.z,r.y*ht.w),L.viewport(o),B.updateMatrices(G,tt),n=B.getFrustum(),x(T,R,B.camera,G,this.type)}B.isPointLightShadow!==!0&&this.type===li&&v(B,R),B.needsUpdate=!1}d=this.type,g.needsUpdate=!1,i.setRenderTarget(S,E,C)};function v(w,T){const R=t.update(_);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new hs(s.x,s.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(T,null,R,f,_,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(T,null,R,p,_,null)}function M(w,T,R,S){let E=null;const C=R.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(C!==void 0)E=C;else if(E=R.isPointLight===!0?l:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const L=E.uuid,U=T.uuid;let z=c[L];z===void 0&&(z={},c[L]=z);let O=z[U];O===void 0&&(O=E.clone(),z[U]=O,T.addEventListener("dispose",y)),E=O}if(E.visible=T.visible,E.wireframe=T.wireframe,S===li?E.side=T.shadowSide!==null?T.shadowSide:T.side:E.side=T.shadowSide!==null?T.shadowSide:h[T.side],E.alphaMap=T.alphaMap,E.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,E.map=T.map,E.clipShadows=T.clipShadows,E.clippingPlanes=T.clippingPlanes,E.clipIntersection=T.clipIntersection,E.displacementMap=T.displacementMap,E.displacementScale=T.displacementScale,E.displacementBias=T.displacementBias,E.wireframeLinewidth=T.wireframeLinewidth,E.linewidth=T.linewidth,R.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const L=i.properties.get(E);L.light=R}return E}function x(w,T,R,S,E){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&E===li)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,w.matrixWorld);const U=t.update(w),z=w.material;if(Array.isArray(z)){const O=U.groups;for(let D=0,G=O.length;D<G;D++){const B=O[D],nt=z[B.materialIndex];if(nt&&nt.visible){const st=M(w,nt,S,E);w.onBeforeShadow(i,w,T,R,U,st,B),i.renderBufferDirect(R,null,U,st,w,B),w.onAfterShadow(i,w,T,R,U,st,B)}}}else if(z.visible){const O=M(w,z,S,E);w.onBeforeShadow(i,w,T,R,U,O,null),i.renderBufferDirect(R,null,U,O,w,null),w.onAfterShadow(i,w,T,R,U,O,null)}}const L=w.children;for(let U=0,z=L.length;U<z;U++)x(L[U],T,R,S,E)}function y(w){w.target.removeEventListener("dispose",y);for(const R in c){const S=c[R],E=w.target.uuid;E in S&&(S[E].dispose(),delete S[E])}}}const H_={[qa]:Ya,[$a]:Ja,[Ka]:ja,[$s]:Za,[Ya]:qa,[Ja]:$a,[ja]:Ka,[Za]:$s};function k_(i,t){function e(){let F=!1;const ct=new he;let ft=null;const Mt=new he(0,0,0,0);return{setMask:function(rt){ft!==rt&&!F&&(i.colorMask(rt,rt,rt,rt),ft=rt)},setLocked:function(rt){F=rt},setClear:function(rt,et,Et,Yt,Ae){Ae===!0&&(rt*=Yt,et*=Yt,Et*=Yt),ct.set(rt,et,Et,Yt),Mt.equals(ct)===!1&&(i.clearColor(rt,et,Et,Yt),Mt.copy(ct))},reset:function(){F=!1,ft=null,Mt.set(-1,0,0,0)}}}function n(){let F=!1,ct=!1,ft=null,Mt=null,rt=null;return{setReversed:function(et){if(ct!==et){const Et=t.get("EXT_clip_control");et?Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.ZERO_TO_ONE_EXT):Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.NEGATIVE_ONE_TO_ONE_EXT),ct=et;const Yt=rt;rt=null,this.setClear(Yt)}},getReversed:function(){return ct},setTest:function(et){et?Z(i.DEPTH_TEST):lt(i.DEPTH_TEST)},setMask:function(et){ft!==et&&!F&&(i.depthMask(et),ft=et)},setFunc:function(et){if(ct&&(et=H_[et]),Mt!==et){switch(et){case qa:i.depthFunc(i.NEVER);break;case Ya:i.depthFunc(i.ALWAYS);break;case $a:i.depthFunc(i.LESS);break;case $s:i.depthFunc(i.LEQUAL);break;case Ka:i.depthFunc(i.EQUAL);break;case Za:i.depthFunc(i.GEQUAL);break;case Ja:i.depthFunc(i.GREATER);break;case ja:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Mt=et}},setLocked:function(et){F=et},setClear:function(et){rt!==et&&(ct&&(et=1-et),i.clearDepth(et),rt=et)},reset:function(){F=!1,ft=null,Mt=null,rt=null,ct=!1}}}function s(){let F=!1,ct=null,ft=null,Mt=null,rt=null,et=null,Et=null,Yt=null,Ae=null;return{setTest:function(ge){F||(ge?Z(i.STENCIL_TEST):lt(i.STENCIL_TEST))},setMask:function(ge){ct!==ge&&!F&&(i.stencilMask(ge),ct=ge)},setFunc:function(ge,ii,$n){(ft!==ge||Mt!==ii||rt!==$n)&&(i.stencilFunc(ge,ii,$n),ft=ge,Mt=ii,rt=$n)},setOp:function(ge,ii,$n){(et!==ge||Et!==ii||Yt!==$n)&&(i.stencilOp(ge,ii,$n),et=ge,Et=ii,Yt=$n)},setLocked:function(ge){F=ge},setClear:function(ge){Ae!==ge&&(i.clearStencil(ge),Ae=ge)},reset:function(){F=!1,ct=null,ft=null,Mt=null,rt=null,et=null,Et=null,Yt=null,Ae=null}}}const r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,p=[],m=null,_=!1,g=null,d=null,v=null,M=null,x=null,y=null,w=null,T=new $(0,0,0),R=0,S=!1,E=null,C=null,L=null,U=null,z=null;const O=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,G=0;const B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(B)[1]),D=G>=1):B.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),D=G>=2);let nt=null,st={};const tt=i.getParameter(i.SCISSOR_BOX),ht=i.getParameter(i.VIEWPORT),St=new he().fromArray(tt),Tt=new he().fromArray(ht);function Ut(F,ct,ft,Mt){const rt=new Uint8Array(4),et=i.createTexture();i.bindTexture(F,et),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Et=0;Et<ft;Et++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(ct,0,i.RGBA,1,1,Mt,0,i.RGBA,i.UNSIGNED_BYTE,rt):i.texImage2D(ct+Et,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,rt);return et}const q={};q[i.TEXTURE_2D]=Ut(i.TEXTURE_2D,i.TEXTURE_2D,1),q[i.TEXTURE_CUBE_MAP]=Ut(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[i.TEXTURE_2D_ARRAY]=Ut(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),q[i.TEXTURE_3D]=Ut(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Z(i.DEPTH_TEST),o.setFunc($s),Wt(!1),bt(wl),Z(i.CULL_FACE),Le(Bi);function Z(F){u[F]!==!0&&(i.enable(F),u[F]=!0)}function lt(F){u[F]!==!1&&(i.disable(F),u[F]=!1)}function Bt(F,ct){return h[F]!==ct?(i.bindFramebuffer(F,ct),h[F]=ct,F===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ct),F===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ct),!0):!1}function Dt(F,ct){let ft=p,Mt=!1;if(F){ft=f.get(ct),ft===void 0&&(ft=[],f.set(ct,ft));const rt=F.textures;if(ft.length!==rt.length||ft[0]!==i.COLOR_ATTACHMENT0){for(let et=0,Et=rt.length;et<Et;et++)ft[et]=i.COLOR_ATTACHMENT0+et;ft.length=rt.length,Mt=!0}}else ft[0]!==i.BACK&&(ft[0]=i.BACK,Mt=!0);Mt&&i.drawBuffers(ft)}function le(F){return m!==F?(i.useProgram(F),m=F,!0):!1}const en={[Qi]:i.FUNC_ADD,[pf]:i.FUNC_SUBTRACT,[mf]:i.FUNC_REVERSE_SUBTRACT};en[gf]=i.MIN,en[_f]=i.MAX;const N={[xf]:i.ZERO,[vf]:i.ONE,[Mf]:i.SRC_COLOR,[Wa]:i.SRC_ALPHA,[Af]:i.SRC_ALPHA_SATURATE,[bf]:i.DST_COLOR,[Sf]:i.DST_ALPHA,[yf]:i.ONE_MINUS_SRC_COLOR,[Xa]:i.ONE_MINUS_SRC_ALPHA,[wf]:i.ONE_MINUS_DST_COLOR,[Ef]:i.ONE_MINUS_DST_ALPHA,[Tf]:i.CONSTANT_COLOR,[Rf]:i.ONE_MINUS_CONSTANT_COLOR,[Cf]:i.CONSTANT_ALPHA,[Pf]:i.ONE_MINUS_CONSTANT_ALPHA};function Le(F,ct,ft,Mt,rt,et,Et,Yt,Ae,ge){if(F===Bi){_===!0&&(lt(i.BLEND),_=!1);return}if(_===!1&&(Z(i.BLEND),_=!0),F!==df){if(F!==g||ge!==S){if((d!==Qi||x!==Qi)&&(i.blendEquation(i.FUNC_ADD),d=Qi,x=Qi),ge)switch(F){case Vs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case bn:i.blendFunc(i.ONE,i.ONE);break;case Al:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Tl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Vs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case bn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Al:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Tl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}v=null,M=null,y=null,w=null,T.set(0,0,0),R=0,g=F,S=ge}return}rt=rt||ct,et=et||ft,Et=Et||Mt,(ct!==d||rt!==x)&&(i.blendEquationSeparate(en[ct],en[rt]),d=ct,x=rt),(ft!==v||Mt!==M||et!==y||Et!==w)&&(i.blendFuncSeparate(N[ft],N[Mt],N[et],N[Et]),v=ft,M=Mt,y=et,w=Et),(Yt.equals(T)===!1||Ae!==R)&&(i.blendColor(Yt.r,Yt.g,Yt.b,Ae),T.copy(Yt),R=Ae),g=F,S=!1}function $t(F,ct){F.side===Ue?lt(i.CULL_FACE):Z(i.CULL_FACE);let ft=F.side===mn;ct&&(ft=!ft),Wt(ft),F.blending===Vs&&F.transparent===!1?Le(Bi):Le(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);const Mt=F.stencilWrite;a.setTest(Mt),Mt&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),wt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?Z(i.SAMPLE_ALPHA_TO_COVERAGE):lt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Wt(F){E!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),E=F)}function bt(F){F!==hf?(Z(i.CULL_FACE),F!==C&&(F===wl?i.cullFace(i.BACK):F===uf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):lt(i.CULL_FACE),C=F}function De(F){F!==L&&(D&&i.lineWidth(F),L=F)}function wt(F,ct,ft){F?(Z(i.POLYGON_OFFSET_FILL),(U!==ct||z!==ft)&&(i.polygonOffset(ct,ft),U=ct,z=ft)):lt(i.POLYGON_OFFSET_FILL)}function jt(F){F?Z(i.SCISSOR_TEST):lt(i.SCISSOR_TEST)}function Ze(F){F===void 0&&(F=i.TEXTURE0+O-1),nt!==F&&(i.activeTexture(F),nt=F)}function Be(F,ct,ft){ft===void 0&&(nt===null?ft=i.TEXTURE0+O-1:ft=nt);let Mt=st[ft];Mt===void 0&&(Mt={type:void 0,texture:void 0},st[ft]=Mt),(Mt.type!==F||Mt.texture!==ct)&&(nt!==ft&&(i.activeTexture(ft),nt=ft),i.bindTexture(F,ct||q[F]),Mt.type=F,Mt.texture=ct)}function P(){const F=st[nt];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function b(){try{i.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function V(){try{i.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function j(){try{i.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function it(){try{i.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function J(){try{i.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Pt(){try{i.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ut(){try{i.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function At(){try{i.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Rt(){try{i.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function at(){try{i.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function _t(F){St.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),St.copy(F))}function Gt(F){Tt.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),Tt.copy(F))}function Ct(F,ct){let ft=c.get(ct);ft===void 0&&(ft=new WeakMap,c.set(ct,ft));let Mt=ft.get(F);Mt===void 0&&(Mt=i.getUniformBlockIndex(ct,F.name),ft.set(F,Mt))}function pt(F,ct){const Mt=c.get(ct).get(F);l.get(ct)!==Mt&&(i.uniformBlockBinding(ct,Mt,F.__bindingPointIndex),l.set(ct,Mt))}function Zt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},nt=null,st={},h={},f=new WeakMap,p=[],m=null,_=!1,g=null,d=null,v=null,M=null,x=null,y=null,w=null,T=new $(0,0,0),R=0,S=!1,E=null,C=null,L=null,U=null,z=null,St.set(0,0,i.canvas.width,i.canvas.height),Tt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Z,disable:lt,bindFramebuffer:Bt,drawBuffers:Dt,useProgram:le,setBlending:Le,setMaterial:$t,setFlipSided:Wt,setCullFace:bt,setLineWidth:De,setPolygonOffset:wt,setScissorTest:jt,activeTexture:Ze,bindTexture:Be,unbindTexture:P,compressedTexImage2D:b,compressedTexImage3D:V,texImage2D:Rt,texImage3D:at,updateUBOMapping:Ct,uniformBlockBinding:pt,texStorage2D:ut,texStorage3D:At,texSubImage2D:j,texSubImage3D:it,compressedTexSubImage2D:J,compressedTexSubImage3D:Pt,scissor:_t,viewport:Gt,reset:Zt}}function G_(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new vt,u=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(P,b){return p?new OffscreenCanvas(P,b):Io("canvas")}function _(P,b,V){let j=1;const it=Be(P);if((it.width>V||it.height>V)&&(j=V/Math.max(it.width,it.height)),j<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const J=Math.floor(j*it.width),Pt=Math.floor(j*it.height);h===void 0&&(h=m(J,Pt));const ut=b?m(J,Pt):h;return ut.width=J,ut.height=Pt,ut.getContext("2d").drawImage(P,0,0,J,Pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+J+"x"+Pt+")."),ut}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),P;return P}function g(P){return P.generateMipmaps}function d(P){i.generateMipmap(P)}function v(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(P,b,V,j,it=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let J=b;if(b===i.RED&&(V===i.FLOAT&&(J=i.R32F),V===i.HALF_FLOAT&&(J=i.R16F),V===i.UNSIGNED_BYTE&&(J=i.R8)),b===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(J=i.R8UI),V===i.UNSIGNED_SHORT&&(J=i.R16UI),V===i.UNSIGNED_INT&&(J=i.R32UI),V===i.BYTE&&(J=i.R8I),V===i.SHORT&&(J=i.R16I),V===i.INT&&(J=i.R32I)),b===i.RG&&(V===i.FLOAT&&(J=i.RG32F),V===i.HALF_FLOAT&&(J=i.RG16F),V===i.UNSIGNED_BYTE&&(J=i.RG8)),b===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(J=i.RG8UI),V===i.UNSIGNED_SHORT&&(J=i.RG16UI),V===i.UNSIGNED_INT&&(J=i.RG32UI),V===i.BYTE&&(J=i.RG8I),V===i.SHORT&&(J=i.RG16I),V===i.INT&&(J=i.RG32I)),b===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(J=i.RGB8UI),V===i.UNSIGNED_SHORT&&(J=i.RGB16UI),V===i.UNSIGNED_INT&&(J=i.RGB32UI),V===i.BYTE&&(J=i.RGB8I),V===i.SHORT&&(J=i.RGB16I),V===i.INT&&(J=i.RGB32I)),b===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),V===i.UNSIGNED_INT&&(J=i.RGBA32UI),V===i.BYTE&&(J=i.RGBA8I),V===i.SHORT&&(J=i.RGBA16I),V===i.INT&&(J=i.RGBA32I)),b===i.RGB&&(V===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),V===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),b===i.RGBA){const Pt=it?Lo:de.getTransfer(j);V===i.FLOAT&&(J=i.RGBA32F),V===i.HALF_FLOAT&&(J=i.RGBA16F),V===i.UNSIGNED_BYTE&&(J=Pt===ye?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function x(P,b){let V;return P?b===null||b===ls||b===Pr?V=i.DEPTH24_STENCIL8:b===Qn?V=i.DEPTH32F_STENCIL8:b===Cr&&(V=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ls||b===Pr?V=i.DEPTH_COMPONENT24:b===Qn?V=i.DEPTH_COMPONENT32F:b===Cr&&(V=i.DEPTH_COMPONENT16),V}function y(P,b){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==An&&P.minFilter!==jn?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function w(P){const b=P.target;b.removeEventListener("dispose",w),R(b),b.isVideoTexture&&u.delete(b)}function T(P){const b=P.target;b.removeEventListener("dispose",T),E(b)}function R(P){const b=n.get(P);if(b.__webglInit===void 0)return;const V=P.source,j=f.get(V);if(j){const it=j[b.__cacheKey];it.usedTimes--,it.usedTimes===0&&S(P),Object.keys(j).length===0&&f.delete(V)}n.remove(P)}function S(P){const b=n.get(P);i.deleteTexture(b.__webglTexture);const V=P.source,j=f.get(V);delete j[b.__cacheKey],o.memory.textures--}function E(P){const b=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(b.__webglFramebuffer[j]))for(let it=0;it<b.__webglFramebuffer[j].length;it++)i.deleteFramebuffer(b.__webglFramebuffer[j][it]);else i.deleteFramebuffer(b.__webglFramebuffer[j]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[j])}else{if(Array.isArray(b.__webglFramebuffer))for(let j=0;j<b.__webglFramebuffer.length;j++)i.deleteFramebuffer(b.__webglFramebuffer[j]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let j=0;j<b.__webglColorRenderbuffer.length;j++)b.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[j]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const V=P.textures;for(let j=0,it=V.length;j<it;j++){const J=n.get(V[j]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),o.memory.textures--),n.remove(V[j])}n.remove(P)}let C=0;function L(){C=0}function U(){const P=C;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),C+=1,P}function z(P){const b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function O(P,b){const V=n.get(P);if(P.isVideoTexture&&jt(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&V.__version!==P.version){const j=P.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(V,P,b);return}}else P.isExternalTexture&&(V.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+b)}function D(P,b){const V=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&V.__version!==P.version){q(V,P,b);return}e.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+b)}function G(P,b){const V=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&V.__version!==P.version){q(V,P,b);return}e.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+b)}function B(P,b){const V=n.get(P);if(P.version>0&&V.__version!==P.version){Z(V,P,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+b)}const nt={[ec]:i.REPEAT,[is]:i.CLAMP_TO_EDGE,[nc]:i.MIRRORED_REPEAT},st={[An]:i.NEAREST,[Bf]:i.NEAREST_MIPMAP_NEAREST,[$r]:i.NEAREST_MIPMAP_LINEAR,[jn]:i.LINEAR,[ia]:i.LINEAR_MIPMAP_NEAREST,[ss]:i.LINEAR_MIPMAP_LINEAR},tt={[Vf]:i.NEVER,[Kf]:i.ALWAYS,[Wf]:i.LESS,[hu]:i.LEQUAL,[Xf]:i.EQUAL,[$f]:i.GEQUAL,[qf]:i.GREATER,[Yf]:i.NOTEQUAL};function ht(P,b){if(b.type===Qn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===jn||b.magFilter===ia||b.magFilter===$r||b.magFilter===ss||b.minFilter===jn||b.minFilter===ia||b.minFilter===$r||b.minFilter===ss)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,nt[b.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,nt[b.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,nt[b.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,st[b.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,st[b.minFilter]),b.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,tt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===An||b.minFilter!==$r&&b.minFilter!==ss||b.type===Qn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");i.texParameterf(P,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function St(P,b){let V=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",w));const j=b.source;let it=f.get(j);it===void 0&&(it={},f.set(j,it));const J=z(b);if(J!==P.__cacheKey){it[J]===void 0&&(it[J]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,V=!0),it[J].usedTimes++;const Pt=it[P.__cacheKey];Pt!==void 0&&(it[P.__cacheKey].usedTimes--,Pt.usedTimes===0&&S(b)),P.__cacheKey=J,P.__webglTexture=it[J].texture}return V}function Tt(P,b,V){return Math.floor(Math.floor(P/V)/b)}function Ut(P,b,V,j){const J=P.updateRanges;if(J.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,V,j,b.data);else{J.sort((at,_t)=>at.start-_t.start);let Pt=0;for(let at=1;at<J.length;at++){const _t=J[Pt],Gt=J[at],Ct=_t.start+_t.count,pt=Tt(Gt.start,b.width,4),Zt=Tt(_t.start,b.width,4);Gt.start<=Ct+1&&pt===Zt&&Tt(Gt.start+Gt.count-1,b.width,4)===pt?_t.count=Math.max(_t.count,Gt.start+Gt.count-_t.start):(++Pt,J[Pt]=Gt)}J.length=Pt+1;const ut=i.getParameter(i.UNPACK_ROW_LENGTH),At=i.getParameter(i.UNPACK_SKIP_PIXELS),Rt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let at=0,_t=J.length;at<_t;at++){const Gt=J[at],Ct=Math.floor(Gt.start/4),pt=Math.ceil(Gt.count/4),Zt=Ct%b.width,F=Math.floor(Ct/b.width),ct=pt,ft=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Zt),i.pixelStorei(i.UNPACK_SKIP_ROWS,F),e.texSubImage2D(i.TEXTURE_2D,0,Zt,F,ct,ft,V,j,b.data)}P.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ut),i.pixelStorei(i.UNPACK_SKIP_PIXELS,At),i.pixelStorei(i.UNPACK_SKIP_ROWS,Rt)}}function q(P,b,V){let j=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(j=i.TEXTURE_3D);const it=St(P,b),J=b.source;e.bindTexture(j,P.__webglTexture,i.TEXTURE0+V);const Pt=n.get(J);if(J.version!==Pt.__version||it===!0){e.activeTexture(i.TEXTURE0+V);const ut=de.getPrimaries(de.workingColorSpace),At=b.colorSpace===Ii?null:de.getPrimaries(b.colorSpace),Rt=b.colorSpace===Ii||ut===At?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);let at=_(b.image,!1,s.maxTextureSize);at=Ze(b,at);const _t=r.convert(b.format,b.colorSpace),Gt=r.convert(b.type);let Ct=M(b.internalFormat,_t,Gt,b.colorSpace,b.isVideoTexture);ht(j,b);let pt;const Zt=b.mipmaps,F=b.isVideoTexture!==!0,ct=Pt.__version===void 0||it===!0,ft=J.dataReady,Mt=y(b,at);if(b.isDepthTexture)Ct=x(b.format===Dr,b.type),ct&&(F?e.texStorage2D(i.TEXTURE_2D,1,Ct,at.width,at.height):e.texImage2D(i.TEXTURE_2D,0,Ct,at.width,at.height,0,_t,Gt,null));else if(b.isDataTexture)if(Zt.length>0){F&&ct&&e.texStorage2D(i.TEXTURE_2D,Mt,Ct,Zt[0].width,Zt[0].height);for(let rt=0,et=Zt.length;rt<et;rt++)pt=Zt[rt],F?ft&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,pt.width,pt.height,_t,Gt,pt.data):e.texImage2D(i.TEXTURE_2D,rt,Ct,pt.width,pt.height,0,_t,Gt,pt.data);b.generateMipmaps=!1}else F?(ct&&e.texStorage2D(i.TEXTURE_2D,Mt,Ct,at.width,at.height),ft&&Ut(b,at,_t,Gt)):e.texImage2D(i.TEXTURE_2D,0,Ct,at.width,at.height,0,_t,Gt,at.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){F&&ct&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Mt,Ct,Zt[0].width,Zt[0].height,at.depth);for(let rt=0,et=Zt.length;rt<et;rt++)if(pt=Zt[rt],b.format!==Vn)if(_t!==null)if(F){if(ft)if(b.layerUpdates.size>0){const Et=sh(pt.width,pt.height,b.format,b.type);for(const Yt of b.layerUpdates){const Ae=pt.data.subarray(Yt*Et/pt.data.BYTES_PER_ELEMENT,(Yt+1)*Et/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,Yt,pt.width,pt.height,1,_t,Ae)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,pt.width,pt.height,at.depth,_t,pt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,rt,Ct,pt.width,pt.height,at.depth,0,pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?ft&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,pt.width,pt.height,at.depth,_t,Gt,pt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,rt,Ct,pt.width,pt.height,at.depth,0,_t,Gt,pt.data)}else{F&&ct&&e.texStorage2D(i.TEXTURE_2D,Mt,Ct,Zt[0].width,Zt[0].height);for(let rt=0,et=Zt.length;rt<et;rt++)pt=Zt[rt],b.format!==Vn?_t!==null?F?ft&&e.compressedTexSubImage2D(i.TEXTURE_2D,rt,0,0,pt.width,pt.height,_t,pt.data):e.compressedTexImage2D(i.TEXTURE_2D,rt,Ct,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?ft&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,pt.width,pt.height,_t,Gt,pt.data):e.texImage2D(i.TEXTURE_2D,rt,Ct,pt.width,pt.height,0,_t,Gt,pt.data)}else if(b.isDataArrayTexture)if(F){if(ct&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Mt,Ct,at.width,at.height,at.depth),ft)if(b.layerUpdates.size>0){const rt=sh(at.width,at.height,b.format,b.type);for(const et of b.layerUpdates){const Et=at.data.subarray(et*rt/at.data.BYTES_PER_ELEMENT,(et+1)*rt/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,et,at.width,at.height,1,_t,Gt,Et)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,_t,Gt,at.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ct,at.width,at.height,at.depth,0,_t,Gt,at.data);else if(b.isData3DTexture)F?(ct&&e.texStorage3D(i.TEXTURE_3D,Mt,Ct,at.width,at.height,at.depth),ft&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,_t,Gt,at.data)):e.texImage3D(i.TEXTURE_3D,0,Ct,at.width,at.height,at.depth,0,_t,Gt,at.data);else if(b.isFramebufferTexture){if(ct)if(F)e.texStorage2D(i.TEXTURE_2D,Mt,Ct,at.width,at.height);else{let rt=at.width,et=at.height;for(let Et=0;Et<Mt;Et++)e.texImage2D(i.TEXTURE_2D,Et,Ct,rt,et,0,_t,Gt,null),rt>>=1,et>>=1}}else if(Zt.length>0){if(F&&ct){const rt=Be(Zt[0]);e.texStorage2D(i.TEXTURE_2D,Mt,Ct,rt.width,rt.height)}for(let rt=0,et=Zt.length;rt<et;rt++)pt=Zt[rt],F?ft&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,_t,Gt,pt):e.texImage2D(i.TEXTURE_2D,rt,Ct,_t,Gt,pt);b.generateMipmaps=!1}else if(F){if(ct){const rt=Be(at);e.texStorage2D(i.TEXTURE_2D,Mt,Ct,rt.width,rt.height)}ft&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,_t,Gt,at)}else e.texImage2D(i.TEXTURE_2D,0,Ct,_t,Gt,at);g(b)&&d(j),Pt.__version=J.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function Z(P,b,V){if(b.image.length!==6)return;const j=St(P,b),it=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+V);const J=n.get(it);if(it.version!==J.__version||j===!0){e.activeTexture(i.TEXTURE0+V);const Pt=de.getPrimaries(de.workingColorSpace),ut=b.colorSpace===Ii?null:de.getPrimaries(b.colorSpace),At=b.colorSpace===Ii||Pt===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);const Rt=b.isCompressedTexture||b.image[0].isCompressedTexture,at=b.image[0]&&b.image[0].isDataTexture,_t=[];for(let et=0;et<6;et++)!Rt&&!at?_t[et]=_(b.image[et],!0,s.maxCubemapSize):_t[et]=at?b.image[et].image:b.image[et],_t[et]=Ze(b,_t[et]);const Gt=_t[0],Ct=r.convert(b.format,b.colorSpace),pt=r.convert(b.type),Zt=M(b.internalFormat,Ct,pt,b.colorSpace),F=b.isVideoTexture!==!0,ct=J.__version===void 0||j===!0,ft=it.dataReady;let Mt=y(b,Gt);ht(i.TEXTURE_CUBE_MAP,b);let rt;if(Rt){F&&ct&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Mt,Zt,Gt.width,Gt.height);for(let et=0;et<6;et++){rt=_t[et].mipmaps;for(let Et=0;Et<rt.length;Et++){const Yt=rt[Et];b.format!==Vn?Ct!==null?F?ft&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Et,0,0,Yt.width,Yt.height,Ct,Yt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Et,Zt,Yt.width,Yt.height,0,Yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Et,0,0,Yt.width,Yt.height,Ct,pt,Yt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Et,Zt,Yt.width,Yt.height,0,Ct,pt,Yt.data)}}}else{if(rt=b.mipmaps,F&&ct){rt.length>0&&Mt++;const et=Be(_t[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Mt,Zt,et.width,et.height)}for(let et=0;et<6;et++)if(at){F?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,_t[et].width,_t[et].height,Ct,pt,_t[et].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Zt,_t[et].width,_t[et].height,0,Ct,pt,_t[et].data);for(let Et=0;Et<rt.length;Et++){const Ae=rt[Et].image[et].image;F?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Et+1,0,0,Ae.width,Ae.height,Ct,pt,Ae.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Et+1,Zt,Ae.width,Ae.height,0,Ct,pt,Ae.data)}}else{F?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Ct,pt,_t[et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Zt,Ct,pt,_t[et]);for(let Et=0;Et<rt.length;Et++){const Yt=rt[Et];F?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Et+1,0,0,Ct,pt,Yt.image[et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Et+1,Zt,Ct,pt,Yt.image[et])}}}g(b)&&d(i.TEXTURE_CUBE_MAP),J.__version=it.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function lt(P,b,V,j,it,J){const Pt=r.convert(V.format,V.colorSpace),ut=r.convert(V.type),At=M(V.internalFormat,Pt,ut,V.colorSpace),Rt=n.get(b),at=n.get(V);if(at.__renderTarget=b,!Rt.__hasExternalTextures){const _t=Math.max(1,b.width>>J),Gt=Math.max(1,b.height>>J);it===i.TEXTURE_3D||it===i.TEXTURE_2D_ARRAY?e.texImage3D(it,J,At,_t,Gt,b.depth,0,Pt,ut,null):e.texImage2D(it,J,At,_t,Gt,0,Pt,ut,null)}e.bindFramebuffer(i.FRAMEBUFFER,P),wt(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,it,at.__webglTexture,0,De(b)):(it===i.TEXTURE_2D||it>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,it,at.__webglTexture,J),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Bt(P,b,V){if(i.bindRenderbuffer(i.RENDERBUFFER,P),b.depthBuffer){const j=b.depthTexture,it=j&&j.isDepthTexture?j.type:null,J=x(b.stencilBuffer,it),Pt=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=De(b);wt(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ut,J,b.width,b.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,ut,J,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,J,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Pt,i.RENDERBUFFER,P)}else{const j=b.textures;for(let it=0;it<j.length;it++){const J=j[it],Pt=r.convert(J.format,J.colorSpace),ut=r.convert(J.type),At=M(J.internalFormat,Pt,ut,J.colorSpace),Rt=De(b);V&&wt(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Rt,At,b.width,b.height):wt(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Rt,At,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,At,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Dt(P,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(b.depthTexture);j.__renderTarget=b,(!j.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),O(b.depthTexture,0);const it=j.__webglTexture,J=De(b);if(b.depthTexture.format===Lr)wt(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0);else if(b.depthTexture.format===Dr)wt(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function le(P){const b=n.get(P),V=P.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==P.depthTexture){const j=P.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),j){const it=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,j.removeEventListener("dispose",it)};j.addEventListener("dispose",it),b.__depthDisposeCallback=it}b.__boundDepthTexture=j}if(P.depthTexture&&!b.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");const j=P.texture.mipmaps;j&&j.length>0?Dt(b.__webglFramebuffer[0],P):Dt(b.__webglFramebuffer,P)}else if(V){b.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[j]),b.__webglDepthbuffer[j]===void 0)b.__webglDepthbuffer[j]=i.createRenderbuffer(),Bt(b.__webglDepthbuffer[j],P,!1);else{const it=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=b.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,J)}}else{const j=P.texture.mipmaps;if(j&&j.length>0?e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),Bt(b.__webglDepthbuffer,P,!1);else{const it=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,J)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function en(P,b,V){const j=n.get(P);b!==void 0&&lt(j.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&le(P)}function N(P){const b=P.texture,V=n.get(P),j=n.get(b);P.addEventListener("dispose",T);const it=P.textures,J=P.isWebGLCubeRenderTarget===!0,Pt=it.length>1;if(Pt||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=b.version,o.memory.textures++),J){V.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(b.mipmaps&&b.mipmaps.length>0){V.__webglFramebuffer[ut]=[];for(let At=0;At<b.mipmaps.length;At++)V.__webglFramebuffer[ut][At]=i.createFramebuffer()}else V.__webglFramebuffer[ut]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){V.__webglFramebuffer=[];for(let ut=0;ut<b.mipmaps.length;ut++)V.__webglFramebuffer[ut]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(Pt)for(let ut=0,At=it.length;ut<At;ut++){const Rt=n.get(it[ut]);Rt.__webglTexture===void 0&&(Rt.__webglTexture=i.createTexture(),o.memory.textures++)}if(P.samples>0&&wt(P)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let ut=0;ut<it.length;ut++){const At=it[ut];V.__webglColorRenderbuffer[ut]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[ut]);const Rt=r.convert(At.format,At.colorSpace),at=r.convert(At.type),_t=M(At.internalFormat,Rt,at,At.colorSpace,P.isXRRenderTarget===!0),Gt=De(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt,_t,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,V.__webglColorRenderbuffer[ut])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),Bt(V.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),ht(i.TEXTURE_CUBE_MAP,b);for(let ut=0;ut<6;ut++)if(b.mipmaps&&b.mipmaps.length>0)for(let At=0;At<b.mipmaps.length;At++)lt(V.__webglFramebuffer[ut][At],P,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,At);else lt(V.__webglFramebuffer[ut],P,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);g(b)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Pt){for(let ut=0,At=it.length;ut<At;ut++){const Rt=it[ut],at=n.get(Rt);let _t=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(_t=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(_t,at.__webglTexture),ht(_t,Rt),lt(V.__webglFramebuffer,P,Rt,i.COLOR_ATTACHMENT0+ut,_t,0),g(Rt)&&d(_t)}e.unbindTexture()}else{let ut=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ut=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ut,j.__webglTexture),ht(ut,b),b.mipmaps&&b.mipmaps.length>0)for(let At=0;At<b.mipmaps.length;At++)lt(V.__webglFramebuffer[At],P,b,i.COLOR_ATTACHMENT0,ut,At);else lt(V.__webglFramebuffer,P,b,i.COLOR_ATTACHMENT0,ut,0);g(b)&&d(ut),e.unbindTexture()}P.depthBuffer&&le(P)}function Le(P){const b=P.textures;for(let V=0,j=b.length;V<j;V++){const it=b[V];if(g(it)){const J=v(P),Pt=n.get(it).__webglTexture;e.bindTexture(J,Pt),d(J),e.unbindTexture()}}}const $t=[],Wt=[];function bt(P){if(P.samples>0){if(wt(P)===!1){const b=P.textures,V=P.width,j=P.height;let it=i.COLOR_BUFFER_BIT;const J=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pt=n.get(P),ut=b.length>1;if(ut)for(let Rt=0;Rt<b.length;Rt++)e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer);const At=P.texture.mipmaps;At&&At.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let Rt=0;Rt<b.length;Rt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(it|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(it|=i.STENCIL_BUFFER_BIT)),ut){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Pt.__webglColorRenderbuffer[Rt]);const at=n.get(b[Rt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,at,0)}i.blitFramebuffer(0,0,V,j,0,0,V,j,it,i.NEAREST),l===!0&&($t.length=0,Wt.length=0,$t.push(i.COLOR_ATTACHMENT0+Rt),P.depthBuffer&&P.resolveDepthBuffer===!1&&($t.push(J),Wt.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Wt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,$t))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ut)for(let Rt=0;Rt<b.length;Rt++){e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.RENDERBUFFER,Pt.__webglColorRenderbuffer[Rt]);const at=n.get(b[Rt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.TEXTURE_2D,at,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const b=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function De(P){return Math.min(s.maxSamples,P.samples)}function wt(P){const b=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function jt(P){const b=o.render.frame;u.get(P)!==b&&(u.set(P,b),P.update())}function Ze(P,b){const V=P.colorSpace,j=P.format,it=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||V!==Js&&V!==Ii&&(de.getTransfer(V)===ye?(j!==Vn||it!==ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),b}function Be(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=L,this.setTexture2D=O,this.setTexture2DArray=D,this.setTexture3D=G,this.setTextureCube=B,this.rebindTextures=en,this.setupRenderTarget=N,this.updateRenderTargetMipmap=Le,this.updateMultisampleRenderTarget=bt,this.setupDepthRenderbuffer=le,this.setupFrameBufferTexture=lt,this.useMultisampledRTT=wt}function V_(i,t){function e(n,s=Ii){let r;const o=de.getTransfer(s);if(n===ei)return i.UNSIGNED_BYTE;if(n===Vc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Wc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===su)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ru)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===nu)return i.BYTE;if(n===iu)return i.SHORT;if(n===Cr)return i.UNSIGNED_SHORT;if(n===Gc)return i.INT;if(n===ls)return i.UNSIGNED_INT;if(n===Qn)return i.FLOAT;if(n===Vr)return i.HALF_FLOAT;if(n===ou)return i.ALPHA;if(n===au)return i.RGB;if(n===Vn)return i.RGBA;if(n===Lr)return i.DEPTH_COMPONENT;if(n===Dr)return i.DEPTH_STENCIL;if(n===Xc)return i.RED;if(n===qc)return i.RED_INTEGER;if(n===cu)return i.RG;if(n===Yc)return i.RG_INTEGER;if(n===$c)return i.RGBA_INTEGER;if(n===bo||n===wo||n===Ao||n===To)if(o===ye)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===bo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===To)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===bo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===wo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ao)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===To)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ic||n===sc||n===rc||n===oc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ic)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===sc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===rc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===oc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ac||n===cc||n===lc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ac||n===cc)return o===ye?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===lc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===hc||n===uc||n===fc||n===dc||n===pc||n===mc||n===gc||n===_c||n===xc||n===vc||n===Mc||n===yc||n===Sc||n===Ec)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===hc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===uc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===fc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===dc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===pc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===mc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===gc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===_c)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===xc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===vc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Mc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===yc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Sc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ec)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===bc||n===wc||n===Ac)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===bc)return o===ye?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===wc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ac)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Tc||n===Rc||n===Cc||n===Pc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Tc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Rc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Cc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Pc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Pr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const W_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,X_=`
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

}`;class q_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new bu(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new cn({vertexShader:W_,fragmentShader:X_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Kt(new Tn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Y_ extends er{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,m=null;const _=typeof XRWebGLBinding<"u",g=new q_,d={},v=e.getContextAttributes();let M=null,x=null;const y=[],w=[],T=new vt;let R=null;const S=new En;S.viewport=new he;const E=new En;E.viewport=new he;const C=[S,E],L=new pp;let U=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Z=y[q];return Z===void 0&&(Z=new ba,y[q]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(q){let Z=y[q];return Z===void 0&&(Z=new ba,y[q]=Z),Z.getGripSpace()},this.getHand=function(q){let Z=y[q];return Z===void 0&&(Z=new ba,y[q]=Z),Z.getHandSpace()};function O(q){const Z=w.indexOf(q.inputSource);if(Z===-1)return;const lt=y[Z];lt!==void 0&&(lt.update(q.inputSource,q.frame,c||o),lt.dispatchEvent({type:q.type,data:q.inputSource}))}function D(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",D),s.removeEventListener("inputsourceschange",G);for(let q=0;q<y.length;q++){const Z=w[q];Z!==null&&(w[q]=null,y[q].disconnect(Z))}U=null,z=null,g.reset();for(const q in d)delete d[q];t.setRenderTarget(M),p=null,f=null,h=null,s=null,x=null,Ut.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(s,e)),h},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(M=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",D),s.addEventListener("inputsourceschange",G),v.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(T),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let lt=null,Bt=null,Dt=null;v.depth&&(Dt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,lt=v.stencil?Dr:Lr,Bt=v.stencil?Pr:ls);const le={colorFormat:e.RGBA8,depthFormat:Dt,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(le),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),x=new hs(f.textureWidth,f.textureHeight,{format:Vn,type:ei,depthTexture:new Eu(f.textureWidth,f.textureHeight,Bt,void 0,void 0,void 0,void 0,void 0,void 0,lt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const lt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,lt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new hs(p.framebufferWidth,p.framebufferHeight,{format:Vn,type:ei,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ut.setContext(s),Ut.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function G(q){for(let Z=0;Z<q.removed.length;Z++){const lt=q.removed[Z],Bt=w.indexOf(lt);Bt>=0&&(w[Bt]=null,y[Bt].disconnect(lt))}for(let Z=0;Z<q.added.length;Z++){const lt=q.added[Z];let Bt=w.indexOf(lt);if(Bt===-1){for(let le=0;le<y.length;le++)if(le>=w.length){w.push(lt),Bt=le;break}else if(w[le]===null){w[le]=lt,Bt=le;break}if(Bt===-1)break}const Dt=y[Bt];Dt&&Dt.connect(lt)}}const B=new I,nt=new I;function st(q,Z,lt){B.setFromMatrixPosition(Z.matrixWorld),nt.setFromMatrixPosition(lt.matrixWorld);const Bt=B.distanceTo(nt),Dt=Z.projectionMatrix.elements,le=lt.projectionMatrix.elements,en=Dt[14]/(Dt[10]-1),N=Dt[14]/(Dt[10]+1),Le=(Dt[9]+1)/Dt[5],$t=(Dt[9]-1)/Dt[5],Wt=(Dt[8]-1)/Dt[0],bt=(le[8]+1)/le[0],De=en*Wt,wt=en*bt,jt=Bt/(-Wt+bt),Ze=jt*-Wt;if(Z.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Ze),q.translateZ(jt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Dt[10]===-1)q.projectionMatrix.copy(Z.projectionMatrix),q.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const Be=en+jt,P=N+jt,b=De-Ze,V=wt+(Bt-Ze),j=Le*N/P*Be,it=$t*N/P*Be;q.projectionMatrix.makePerspective(b,V,j,it,Be,P),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function tt(q,Z){Z===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Z.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let Z=q.near,lt=q.far;g.texture!==null&&(g.depthNear>0&&(Z=g.depthNear),g.depthFar>0&&(lt=g.depthFar)),L.near=E.near=S.near=Z,L.far=E.far=S.far=lt,(U!==L.near||z!==L.far)&&(s.updateRenderState({depthNear:L.near,depthFar:L.far}),U=L.near,z=L.far),L.layers.mask=q.layers.mask|6,S.layers.mask=L.layers.mask&3,E.layers.mask=L.layers.mask&5;const Bt=q.parent,Dt=L.cameras;tt(L,Bt);for(let le=0;le<Dt.length;le++)tt(Dt[le],Bt);Dt.length===2?st(L,S,E):L.projectionMatrix.copy(S.projectionMatrix),ht(q,L,Bt)};function ht(q,Z,lt){lt===null?q.matrix.copy(Z.matrixWorld):(q.matrix.copy(lt.matrixWorld),q.matrix.invert(),q.matrix.multiply(Z.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Z.projectionMatrix),q.projectionMatrixInverse.copy(Z.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Ir*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(L)},this.getCameraTexture=function(q){return d[q]};let St=null;function Tt(q,Z){if(u=Z.getViewerPose(c||o),m=Z,u!==null){const lt=u.views;p!==null&&(t.setRenderTargetFramebuffer(x,p.framebuffer),t.setRenderTarget(x));let Bt=!1;lt.length!==L.cameras.length&&(L.cameras.length=0,Bt=!0);for(let N=0;N<lt.length;N++){const Le=lt[N];let $t=null;if(p!==null)$t=p.getViewport(Le);else{const bt=h.getViewSubImage(f,Le);$t=bt.viewport,N===0&&(t.setRenderTargetTextures(x,bt.colorTexture,bt.depthStencilTexture),t.setRenderTarget(x))}let Wt=C[N];Wt===void 0&&(Wt=new En,Wt.layers.enable(N),Wt.viewport=new he,C[N]=Wt),Wt.matrix.fromArray(Le.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(Le.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set($t.x,$t.y,$t.width,$t.height),N===0&&(L.matrix.copy(Wt.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Bt===!0&&L.cameras.push(Wt)}const Dt=s.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){h=n.getBinding();const N=h.getDepthInformation(lt[0]);N&&N.isValid&&N.texture&&g.init(N,s.renderState)}if(Dt&&Dt.includes("camera-access")&&_){t.state.unbindTexture(),h=n.getBinding();for(let N=0;N<lt.length;N++){const Le=lt[N].camera;if(Le){let $t=d[Le];$t||($t=new bu,d[Le]=$t);const Wt=h.getCameraImage(Le);$t.sourceTexture=Wt}}}}for(let lt=0;lt<y.length;lt++){const Bt=w[lt],Dt=y[lt];Bt!==null&&Dt!==void 0&&Dt.update(Bt,Z,c||o)}St&&St(q,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),m=null}const Ut=new Pu;Ut.setAnimationLoop(Tt),this.setAnimationLoop=function(q){St=q},this.dispose=function(){}}}const Ki=new Yn,$_=new _e;function K_(i,t){function e(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function n(g,d){d.color.getRGB(g.fogColor.value,xu(i)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function s(g,d,v,M,x){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(g,d):d.isMeshToonMaterial?(r(g,d),h(g,d)):d.isMeshPhongMaterial?(r(g,d),u(g,d)):d.isMeshStandardMaterial?(r(g,d),f(g,d),d.isMeshPhysicalMaterial&&p(g,d,x)):d.isMeshMatcapMaterial?(r(g,d),m(g,d)):d.isMeshDepthMaterial?r(g,d):d.isMeshDistanceMaterial?(r(g,d),_(g,d)):d.isMeshNormalMaterial?r(g,d):d.isLineBasicMaterial?(o(g,d),d.isLineDashedMaterial&&a(g,d)):d.isPointsMaterial?l(g,d,v,M):d.isSpriteMaterial?c(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,e(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,e(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,e(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===mn&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,e(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===mn&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,e(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,e(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);const v=t.get(d),M=v.envMap,x=v.envMapRotation;M&&(g.envMap.value=M,Ki.copy(x),Ki.x*=-1,Ki.y*=-1,Ki.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ki.y*=-1,Ki.z*=-1),g.envMapRotation.value.setFromMatrix4($_.makeRotationFromEuler(Ki)),g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,g.aoMapTransform))}function o(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,e(d.map,g.mapTransform))}function a(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,v,M){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*v,g.scale.value=M*.5,d.map&&(g.map.value=d.map,e(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,e(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function c(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,e(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,e(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function u(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function h(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function f(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function p(g,d,v){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===mn&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,d){d.matcap&&(g.matcap.value=d.matcap)}function _(g,d){const v=t.get(d).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Z_(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,M){const x=M.program;n.uniformBlockBinding(v,x)}function c(v,M){let x=s[v.id];x===void 0&&(m(v),x=u(v),s[v.id]=x,v.addEventListener("dispose",g));const y=M.program;n.updateUBOMapping(v,y);const w=t.render.frame;r[v.id]!==w&&(f(v),r[v.id]=w)}function u(v){const M=h();v.__bindingPointIndex=M;const x=i.createBuffer(),y=v.__size,w=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,y,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,x),x}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const M=s[v.id],x=v.uniforms,y=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let w=0,T=x.length;w<T;w++){const R=Array.isArray(x[w])?x[w]:[x[w]];for(let S=0,E=R.length;S<E;S++){const C=R[S];if(p(C,w,S,y)===!0){const L=C.__offset,U=Array.isArray(C.value)?C.value:[C.value];let z=0;for(let O=0;O<U.length;O++){const D=U[O],G=_(D);typeof D=="number"||typeof D=="boolean"?(C.__data[0]=D,i.bufferSubData(i.UNIFORM_BUFFER,L+z,C.__data)):D.isMatrix3?(C.__data[0]=D.elements[0],C.__data[1]=D.elements[1],C.__data[2]=D.elements[2],C.__data[3]=0,C.__data[4]=D.elements[3],C.__data[5]=D.elements[4],C.__data[6]=D.elements[5],C.__data[7]=0,C.__data[8]=D.elements[6],C.__data[9]=D.elements[7],C.__data[10]=D.elements[8],C.__data[11]=0):(D.toArray(C.__data,z),z+=G.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,L,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(v,M,x,y){const w=v.value,T=M+"_"+x;if(y[T]===void 0)return typeof w=="number"||typeof w=="boolean"?y[T]=w:y[T]=w.clone(),!0;{const R=y[T];if(typeof w=="number"||typeof w=="boolean"){if(R!==w)return y[T]=w,!0}else if(R.equals(w)===!1)return R.copy(w),!0}return!1}function m(v){const M=v.uniforms;let x=0;const y=16;for(let T=0,R=M.length;T<R;T++){const S=Array.isArray(M[T])?M[T]:[M[T]];for(let E=0,C=S.length;E<C;E++){const L=S[E],U=Array.isArray(L.value)?L.value:[L.value];for(let z=0,O=U.length;z<O;z++){const D=U[z],G=_(D),B=x%y,nt=B%G.boundary,st=B+nt;x+=nt,st!==0&&y-st<G.storage&&(x+=y-st),L.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=x,x+=G.storage}}}const w=x%y;return w>0&&(x+=y-w),v.__size=x,v.__cache={},this}function _(v){const M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),M}function g(v){const M=v.target;M.removeEventListener("dispose",g);const x=o.indexOf(M.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function d(){for(const v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}class J_{constructor(t={}){const{canvas:e=fd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,d=null;const v=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let y=!1;this._outputColorSpace=on;let w=0,T=0,R=null,S=-1,E=null;const C=new he,L=new he;let U=null;const z=new $(0);let O=0,D=e.width,G=e.height,B=1,nt=null,st=null;const tt=new he(0,0,D,G),ht=new he(0,0,D,G);let St=!1;const Tt=new tl;let Ut=!1,q=!1;const Z=new _e,lt=new I,Bt=new he,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let le=!1;function en(){return R===null?B:1}let N=n;function Le(A,H){return e.getContext(A,H)}try{const A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Hc}`),e.addEventListener("webglcontextlost",ft,!1),e.addEventListener("webglcontextrestored",Mt,!1),e.addEventListener("webglcontextcreationerror",rt,!1),N===null){const H="webgl2";if(N=Le(H,A),N===null)throw Le(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let $t,Wt,bt,De,wt,jt,Ze,Be,P,b,V,j,it,J,Pt,ut,At,Rt,at,_t,Gt,Ct,pt,Zt;function F(){$t=new ag(N),$t.init(),Ct=new V_(N,$t),Wt=new tg(N,$t,t,Ct),bt=new k_(N,$t),Wt.reversedDepthBuffer&&f&&bt.buffers.depth.setReversed(!0),De=new hg(N),wt=new R_,jt=new G_(N,$t,bt,wt,Wt,Ct,De),Ze=new ng(x),Be=new og(x),P=new gp(N),pt=new jm(N,P),b=new cg(N,P,De,pt),V=new fg(N,b,P,De),at=new ug(N,Wt,jt),ut=new eg(wt),j=new T_(x,Ze,Be,$t,Wt,pt,ut),it=new K_(x,wt),J=new P_,Pt=new F_($t),Rt=new Jm(x,Ze,Be,bt,V,p,l),At=new B_(x,V,Wt),Zt=new Z_(N,De,Wt,bt),_t=new Qm(N,$t,De),Gt=new lg(N,$t,De),De.programs=j.programs,x.capabilities=Wt,x.extensions=$t,x.properties=wt,x.renderLists=J,x.shadowMap=At,x.state=bt,x.info=De}F();const ct=new Y_(x,N);this.xr=ct,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const A=$t.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=$t.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(A){A!==void 0&&(B=A,this.setSize(D,G,!1))},this.getSize=function(A){return A.set(D,G)},this.setSize=function(A,H,W=!0){if(ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=A,G=H,e.width=Math.floor(A*B),e.height=Math.floor(H*B),W===!0&&(e.style.width=A+"px",e.style.height=H+"px"),this.setViewport(0,0,A,H)},this.getDrawingBufferSize=function(A){return A.set(D*B,G*B).floor()},this.setDrawingBufferSize=function(A,H,W){D=A,G=H,B=W,e.width=Math.floor(A*W),e.height=Math.floor(H*W),this.setViewport(0,0,A,H)},this.getCurrentViewport=function(A){return A.copy(C)},this.getViewport=function(A){return A.copy(tt)},this.setViewport=function(A,H,W,X){A.isVector4?tt.set(A.x,A.y,A.z,A.w):tt.set(A,H,W,X),bt.viewport(C.copy(tt).multiplyScalar(B).round())},this.getScissor=function(A){return A.copy(ht)},this.setScissor=function(A,H,W,X){A.isVector4?ht.set(A.x,A.y,A.z,A.w):ht.set(A,H,W,X),bt.scissor(L.copy(ht).multiplyScalar(B).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(A){bt.setScissorTest(St=A)},this.setOpaqueSort=function(A){nt=A},this.setTransparentSort=function(A){st=A},this.getClearColor=function(A){return A.copy(Rt.getClearColor())},this.setClearColor=function(){Rt.setClearColor(...arguments)},this.getClearAlpha=function(){return Rt.getClearAlpha()},this.setClearAlpha=function(){Rt.setClearAlpha(...arguments)},this.clear=function(A=!0,H=!0,W=!0){let X=0;if(A){let k=!1;if(R!==null){const ot=R.texture.format;k=ot===$c||ot===Yc||ot===qc}if(k){const ot=R.texture.type,mt=ot===ei||ot===ls||ot===Cr||ot===Pr||ot===Vc||ot===Wc,yt=Rt.getClearColor(),xt=Rt.getClearAlpha(),Ht=yt.r,Xt=yt.g,Nt=yt.b;mt?(m[0]=Ht,m[1]=Xt,m[2]=Nt,m[3]=xt,N.clearBufferuiv(N.COLOR,0,m)):(_[0]=Ht,_[1]=Xt,_[2]=Nt,_[3]=xt,N.clearBufferiv(N.COLOR,0,_))}else X|=N.COLOR_BUFFER_BIT}H&&(X|=N.DEPTH_BUFFER_BIT),W&&(X|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ft,!1),e.removeEventListener("webglcontextrestored",Mt,!1),e.removeEventListener("webglcontextcreationerror",rt,!1),Rt.dispose(),J.dispose(),Pt.dispose(),wt.dispose(),Ze.dispose(),Be.dispose(),V.dispose(),pt.dispose(),Zt.dispose(),j.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",$n),ct.removeEventListener("sessionend",vl),Gi.stop()};function ft(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function Mt(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const A=De.autoReset,H=At.enabled,W=At.autoUpdate,X=At.needsUpdate,k=At.type;F(),De.autoReset=A,At.enabled=H,At.autoUpdate=W,At.needsUpdate=X,At.type=k}function rt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function et(A){const H=A.target;H.removeEventListener("dispose",et),Et(H)}function Et(A){Yt(A),wt.remove(A)}function Yt(A){const H=wt.get(A).programs;H!==void 0&&(H.forEach(function(W){j.releaseProgram(W)}),A.isShaderMaterial&&j.releaseShaderCache(A))}this.renderBufferDirect=function(A,H,W,X,k,ot){H===null&&(H=Dt);const mt=k.isMesh&&k.matrixWorld.determinant()<0,yt=sf(A,H,W,X,k);bt.setMaterial(X,mt);let xt=W.index,Ht=1;if(X.wireframe===!0){if(xt=b.getWireframeAttribute(W),xt===void 0)return;Ht=2}const Xt=W.drawRange,Nt=W.attributes.position;let oe=Xt.start*Ht,Me=(Xt.start+Xt.count)*Ht;ot!==null&&(oe=Math.max(oe,ot.start*Ht),Me=Math.min(Me,(ot.start+ot.count)*Ht)),xt!==null?(oe=Math.max(oe,0),Me=Math.min(Me,xt.count)):Nt!=null&&(oe=Math.max(oe,0),Me=Math.min(Me,Nt.count));const Oe=Me-oe;if(Oe<0||Oe===1/0)return;pt.setup(k,X,yt,W,xt);let Ce,be=_t;if(xt!==null&&(Ce=P.get(xt),be=Gt,be.setIndex(Ce)),k.isMesh)X.wireframe===!0?(bt.setLineWidth(X.wireframeLinewidth*en()),be.setMode(N.LINES)):be.setMode(N.TRIANGLES);else if(k.isLine){let Ot=X.linewidth;Ot===void 0&&(Ot=1),bt.setLineWidth(Ot*en()),k.isLineSegments?be.setMode(N.LINES):k.isLineLoop?be.setMode(N.LINE_LOOP):be.setMode(N.LINE_STRIP)}else k.isPoints?be.setMode(N.POINTS):k.isSprite&&be.setMode(N.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)Ur("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),be.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if($t.get("WEBGL_multi_draw"))be.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Ot=k._multiDrawStarts,Ne=k._multiDrawCounts,fe=k._multiDrawCount,vn=xt?P.get(xt).bytesPerElement:1,gs=wt.get(X).currentProgram.getUniforms();for(let Mn=0;Mn<fe;Mn++)gs.setValue(N,"_gl_DrawID",Mn),be.render(Ot[Mn]/vn,Ne[Mn])}else if(k.isInstancedMesh)be.renderInstances(oe,Oe,k.count);else if(W.isInstancedBufferGeometry){const Ot=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Ne=Math.min(W.instanceCount,Ot);be.renderInstances(oe,Oe,Ne)}else be.render(oe,Oe)};function Ae(A,H,W){A.transparent===!0&&A.side===Ue&&A.forceSinglePass===!1?(A.side=mn,A.needsUpdate=!0,Yr(A,H,W),A.side=vi,A.needsUpdate=!0,Yr(A,H,W),A.side=Ue):Yr(A,H,W)}this.compile=function(A,H,W=null){W===null&&(W=A),d=Pt.get(W),d.init(H),M.push(d),W.traverseVisible(function(k){k.isLight&&k.layers.test(H.layers)&&(d.pushLight(k),k.castShadow&&d.pushShadow(k))}),A!==W&&A.traverseVisible(function(k){k.isLight&&k.layers.test(H.layers)&&(d.pushLight(k),k.castShadow&&d.pushShadow(k))}),d.setupLights();const X=new Set;return A.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const ot=k.material;if(ot)if(Array.isArray(ot))for(let mt=0;mt<ot.length;mt++){const yt=ot[mt];Ae(yt,W,k),X.add(yt)}else Ae(ot,W,k),X.add(ot)}),d=M.pop(),X},this.compileAsync=function(A,H,W=null){const X=this.compile(A,H,W);return new Promise(k=>{function ot(){if(X.forEach(function(mt){wt.get(mt).currentProgram.isReady()&&X.delete(mt)}),X.size===0){k(A);return}setTimeout(ot,10)}$t.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let ge=null;function ii(A){ge&&ge(A)}function $n(){Gi.stop()}function vl(){Gi.start()}const Gi=new Pu;Gi.setAnimationLoop(ii),typeof self<"u"&&Gi.setContext(self),this.setAnimationLoop=function(A){ge=A,ct.setAnimationLoop(A),A===null?Gi.stop():Gi.start()},ct.addEventListener("sessionstart",$n),ct.addEventListener("sessionend",vl),this.render=function(A,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(H),H=ct.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,H,R),d=Pt.get(A,M.length),d.init(H),M.push(d),Z.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Tt.setFromProjectionMatrix(Z,ti,H.reversedDepth),q=this.localClippingEnabled,Ut=ut.init(this.clippingPlanes,q),g=J.get(A,v.length),g.init(),v.push(g),ct.enabled===!0&&ct.isPresenting===!0){const ot=x.xr.getDepthSensingMesh();ot!==null&&ea(ot,H,-1/0,x.sortObjects)}ea(A,H,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(nt,st),le=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,le&&Rt.addToRenderList(g,A),this.info.render.frame++,Ut===!0&&ut.beginShadows();const W=d.state.shadowsArray;At.render(W,A,H),Ut===!0&&ut.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=g.opaque,k=g.transmissive;if(d.setupLights(),H.isArrayCamera){const ot=H.cameras;if(k.length>0)for(let mt=0,yt=ot.length;mt<yt;mt++){const xt=ot[mt];yl(X,k,A,xt)}le&&Rt.render(A);for(let mt=0,yt=ot.length;mt<yt;mt++){const xt=ot[mt];Ml(g,A,xt,xt.viewport)}}else k.length>0&&yl(X,k,A,H),le&&Rt.render(A),Ml(g,A,H);R!==null&&T===0&&(jt.updateMultisampleRenderTarget(R),jt.updateRenderTargetMipmap(R)),A.isScene===!0&&A.onAfterRender(x,A,H),pt.resetDefaultState(),S=-1,E=null,M.pop(),M.length>0?(d=M[M.length-1],Ut===!0&&ut.setGlobalState(x.clippingPlanes,d.state.camera)):d=null,v.pop(),v.length>0?g=v[v.length-1]:g=null};function ea(A,H,W,X){if(A.visible===!1)return;if(A.layers.test(H.layers)){if(A.isGroup)W=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(H);else if(A.isLight)d.pushLight(A),A.castShadow&&d.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Tt.intersectsSprite(A)){X&&Bt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Z);const mt=V.update(A),yt=A.material;yt.visible&&g.push(A,mt,yt,W,Bt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Tt.intersectsObject(A))){const mt=V.update(A),yt=A.material;if(X&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Bt.copy(A.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),Bt.copy(mt.boundingSphere.center)),Bt.applyMatrix4(A.matrixWorld).applyMatrix4(Z)),Array.isArray(yt)){const xt=mt.groups;for(let Ht=0,Xt=xt.length;Ht<Xt;Ht++){const Nt=xt[Ht],oe=yt[Nt.materialIndex];oe&&oe.visible&&g.push(A,mt,oe,W,Bt.z,Nt)}}else yt.visible&&g.push(A,mt,yt,W,Bt.z,null)}}const ot=A.children;for(let mt=0,yt=ot.length;mt<yt;mt++)ea(ot[mt],H,W,X)}function Ml(A,H,W,X){const k=A.opaque,ot=A.transmissive,mt=A.transparent;d.setupLightsView(W),Ut===!0&&ut.setGlobalState(x.clippingPlanes,W),X&&bt.viewport(C.copy(X)),k.length>0&&qr(k,H,W),ot.length>0&&qr(ot,H,W),mt.length>0&&qr(mt,H,W),bt.buffers.depth.setTest(!0),bt.buffers.depth.setMask(!0),bt.buffers.color.setMask(!0),bt.setPolygonOffset(!1)}function yl(A,H,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[X.id]===void 0&&(d.state.transmissionRenderTarget[X.id]=new hs(1,1,{generateMipmaps:!0,type:$t.has("EXT_color_buffer_half_float")||$t.has("EXT_color_buffer_float")?Vr:ei,minFilter:ss,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:de.workingColorSpace}));const ot=d.state.transmissionRenderTarget[X.id],mt=X.viewport||C;ot.setSize(mt.z*x.transmissionResolutionScale,mt.w*x.transmissionResolutionScale);const yt=x.getRenderTarget(),xt=x.getActiveCubeFace(),Ht=x.getActiveMipmapLevel();x.setRenderTarget(ot),x.getClearColor(z),O=x.getClearAlpha(),O<1&&x.setClearColor(16777215,.5),x.clear(),le&&Rt.render(W);const Xt=x.toneMapping;x.toneMapping=Hi;const Nt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),d.setupLightsView(X),Ut===!0&&ut.setGlobalState(x.clippingPlanes,X),qr(A,W,X),jt.updateMultisampleRenderTarget(ot),jt.updateRenderTargetMipmap(ot),$t.has("WEBGL_multisampled_render_to_texture")===!1){let oe=!1;for(let Me=0,Oe=H.length;Me<Oe;Me++){const Ce=H[Me],be=Ce.object,Ot=Ce.geometry,Ne=Ce.material,fe=Ce.group;if(Ne.side===Ue&&be.layers.test(X.layers)){const vn=Ne.side;Ne.side=mn,Ne.needsUpdate=!0,Sl(be,W,X,Ot,Ne,fe),Ne.side=vn,Ne.needsUpdate=!0,oe=!0}}oe===!0&&(jt.updateMultisampleRenderTarget(ot),jt.updateRenderTargetMipmap(ot))}x.setRenderTarget(yt,xt,Ht),x.setClearColor(z,O),Nt!==void 0&&(X.viewport=Nt),x.toneMapping=Xt}function qr(A,H,W){const X=H.isScene===!0?H.overrideMaterial:null;for(let k=0,ot=A.length;k<ot;k++){const mt=A[k],yt=mt.object,xt=mt.geometry,Ht=mt.group;let Xt=mt.material;Xt.allowOverride===!0&&X!==null&&(Xt=X),yt.layers.test(W.layers)&&Sl(yt,H,W,xt,Xt,Ht)}}function Sl(A,H,W,X,k,ot){A.onBeforeRender(x,H,W,X,k,ot),A.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),k.onBeforeRender(x,H,W,X,A,ot),k.transparent===!0&&k.side===Ue&&k.forceSinglePass===!1?(k.side=mn,k.needsUpdate=!0,x.renderBufferDirect(W,H,X,k,A,ot),k.side=vi,k.needsUpdate=!0,x.renderBufferDirect(W,H,X,k,A,ot),k.side=Ue):x.renderBufferDirect(W,H,X,k,A,ot),A.onAfterRender(x,H,W,X,k,ot)}function Yr(A,H,W){H.isScene!==!0&&(H=Dt);const X=wt.get(A),k=d.state.lights,ot=d.state.shadowsArray,mt=k.state.version,yt=j.getParameters(A,k.state,ot,H,W),xt=j.getProgramCacheKey(yt);let Ht=X.programs;X.environment=A.isMeshStandardMaterial?H.environment:null,X.fog=H.fog,X.envMap=(A.isMeshStandardMaterial?Be:Ze).get(A.envMap||X.environment),X.envMapRotation=X.environment!==null&&A.envMap===null?H.environmentRotation:A.envMapRotation,Ht===void 0&&(A.addEventListener("dispose",et),Ht=new Map,X.programs=Ht);let Xt=Ht.get(xt);if(Xt!==void 0){if(X.currentProgram===Xt&&X.lightsStateVersion===mt)return bl(A,yt),Xt}else yt.uniforms=j.getUniforms(A),A.onBeforeCompile(yt,x),Xt=j.acquireProgram(yt,xt),Ht.set(xt,Xt),X.uniforms=yt.uniforms;const Nt=X.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Nt.clippingPlanes=ut.uniform),bl(A,yt),X.needsLights=of(A),X.lightsStateVersion=mt,X.needsLights&&(Nt.ambientLightColor.value=k.state.ambient,Nt.lightProbe.value=k.state.probe,Nt.directionalLights.value=k.state.directional,Nt.directionalLightShadows.value=k.state.directionalShadow,Nt.spotLights.value=k.state.spot,Nt.spotLightShadows.value=k.state.spotShadow,Nt.rectAreaLights.value=k.state.rectArea,Nt.ltc_1.value=k.state.rectAreaLTC1,Nt.ltc_2.value=k.state.rectAreaLTC2,Nt.pointLights.value=k.state.point,Nt.pointLightShadows.value=k.state.pointShadow,Nt.hemisphereLights.value=k.state.hemi,Nt.directionalShadowMap.value=k.state.directionalShadowMap,Nt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Nt.spotShadowMap.value=k.state.spotShadowMap,Nt.spotLightMatrix.value=k.state.spotLightMatrix,Nt.spotLightMap.value=k.state.spotLightMap,Nt.pointShadowMap.value=k.state.pointShadowMap,Nt.pointShadowMatrix.value=k.state.pointShadowMatrix),X.currentProgram=Xt,X.uniformsList=null,Xt}function El(A){if(A.uniformsList===null){const H=A.currentProgram.getUniforms();A.uniformsList=Ro.seqWithValue(H.seq,A.uniforms)}return A.uniformsList}function bl(A,H){const W=wt.get(A);W.outputColorSpace=H.outputColorSpace,W.batching=H.batching,W.batchingColor=H.batchingColor,W.instancing=H.instancing,W.instancingColor=H.instancingColor,W.instancingMorph=H.instancingMorph,W.skinning=H.skinning,W.morphTargets=H.morphTargets,W.morphNormals=H.morphNormals,W.morphColors=H.morphColors,W.morphTargetsCount=H.morphTargetsCount,W.numClippingPlanes=H.numClippingPlanes,W.numIntersection=H.numClipIntersection,W.vertexAlphas=H.vertexAlphas,W.vertexTangents=H.vertexTangents,W.toneMapping=H.toneMapping}function sf(A,H,W,X,k){H.isScene!==!0&&(H=Dt),jt.resetTextureUnits();const ot=H.fog,mt=X.isMeshStandardMaterial?H.environment:null,yt=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Js,xt=(X.isMeshStandardMaterial?Be:Ze).get(X.envMap||mt),Ht=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Xt=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Nt=!!W.morphAttributes.position,oe=!!W.morphAttributes.normal,Me=!!W.morphAttributes.color;let Oe=Hi;X.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Oe=x.toneMapping);const Ce=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,be=Ce!==void 0?Ce.length:0,Ot=wt.get(X),Ne=d.state.lights;if(Ut===!0&&(q===!0||A!==E)){const ln=A===E&&X.id===S;ut.setState(X,A,ln)}let fe=!1;X.version===Ot.__version?(Ot.needsLights&&Ot.lightsStateVersion!==Ne.state.version||Ot.outputColorSpace!==yt||k.isBatchedMesh&&Ot.batching===!1||!k.isBatchedMesh&&Ot.batching===!0||k.isBatchedMesh&&Ot.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Ot.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Ot.instancing===!1||!k.isInstancedMesh&&Ot.instancing===!0||k.isSkinnedMesh&&Ot.skinning===!1||!k.isSkinnedMesh&&Ot.skinning===!0||k.isInstancedMesh&&Ot.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ot.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ot.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ot.instancingMorph===!1&&k.morphTexture!==null||Ot.envMap!==xt||X.fog===!0&&Ot.fog!==ot||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==ut.numPlanes||Ot.numIntersection!==ut.numIntersection)||Ot.vertexAlphas!==Ht||Ot.vertexTangents!==Xt||Ot.morphTargets!==Nt||Ot.morphNormals!==oe||Ot.morphColors!==Me||Ot.toneMapping!==Oe||Ot.morphTargetsCount!==be)&&(fe=!0):(fe=!0,Ot.__version=X.version);let vn=Ot.currentProgram;fe===!0&&(vn=Yr(X,H,k));let gs=!1,Mn=!1,rr=!1;const Fe=vn.getUniforms(),Ln=Ot.uniforms;if(bt.useProgram(vn.program)&&(gs=!0,Mn=!0,rr=!0),X.id!==S&&(S=X.id,Mn=!0),gs||E!==A){bt.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Fe.setValue(N,"projectionMatrix",A.projectionMatrix),Fe.setValue(N,"viewMatrix",A.matrixWorldInverse);const gn=Fe.map.cameraPosition;gn!==void 0&&gn.setValue(N,lt.setFromMatrixPosition(A.matrixWorld)),Wt.logarithmicDepthBuffer&&Fe.setValue(N,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Fe.setValue(N,"isOrthographic",A.isOrthographicCamera===!0),E!==A&&(E=A,Mn=!0,rr=!0)}if(k.isSkinnedMesh){Fe.setOptional(N,k,"bindMatrix"),Fe.setOptional(N,k,"bindMatrixInverse");const ln=k.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),Fe.setValue(N,"boneTexture",ln.boneTexture,jt))}k.isBatchedMesh&&(Fe.setOptional(N,k,"batchingTexture"),Fe.setValue(N,"batchingTexture",k._matricesTexture,jt),Fe.setOptional(N,k,"batchingIdTexture"),Fe.setValue(N,"batchingIdTexture",k._indirectTexture,jt),Fe.setOptional(N,k,"batchingColorTexture"),k._colorsTexture!==null&&Fe.setValue(N,"batchingColorTexture",k._colorsTexture,jt));const Dn=W.morphAttributes;if((Dn.position!==void 0||Dn.normal!==void 0||Dn.color!==void 0)&&at.update(k,W,vn),(Mn||Ot.receiveShadow!==k.receiveShadow)&&(Ot.receiveShadow=k.receiveShadow,Fe.setValue(N,"receiveShadow",k.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Ln.envMap.value=xt,Ln.flipEnvMap.value=xt.isCubeTexture&&xt.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&H.environment!==null&&(Ln.envMapIntensity.value=H.environmentIntensity),Mn&&(Fe.setValue(N,"toneMappingExposure",x.toneMappingExposure),Ot.needsLights&&rf(Ln,rr),ot&&X.fog===!0&&it.refreshFogUniforms(Ln,ot),it.refreshMaterialUniforms(Ln,X,B,G,d.state.transmissionRenderTarget[A.id]),Ro.upload(N,El(Ot),Ln,jt)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Ro.upload(N,El(Ot),Ln,jt),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Fe.setValue(N,"center",k.center),Fe.setValue(N,"modelViewMatrix",k.modelViewMatrix),Fe.setValue(N,"normalMatrix",k.normalMatrix),Fe.setValue(N,"modelMatrix",k.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const ln=X.uniformsGroups;for(let gn=0,na=ln.length;gn<na;gn++){const Vi=ln[gn];Zt.update(Vi,vn),Zt.bind(Vi,vn)}}return vn}function rf(A,H){A.ambientLightColor.needsUpdate=H,A.lightProbe.needsUpdate=H,A.directionalLights.needsUpdate=H,A.directionalLightShadows.needsUpdate=H,A.pointLights.needsUpdate=H,A.pointLightShadows.needsUpdate=H,A.spotLights.needsUpdate=H,A.spotLightShadows.needsUpdate=H,A.rectAreaLights.needsUpdate=H,A.hemisphereLights.needsUpdate=H}function of(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(A,H,W){const X=wt.get(A);X.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),wt.get(A.texture).__webglTexture=H,wt.get(A.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:W,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,H){const W=wt.get(A);W.__webglFramebuffer=H,W.__useDefaultFramebuffer=H===void 0};const af=N.createFramebuffer();this.setRenderTarget=function(A,H=0,W=0){R=A,w=H,T=W;let X=!0,k=null,ot=!1,mt=!1;if(A){const xt=wt.get(A);if(xt.__useDefaultFramebuffer!==void 0)bt.bindFramebuffer(N.FRAMEBUFFER,null),X=!1;else if(xt.__webglFramebuffer===void 0)jt.setupRenderTarget(A);else if(xt.__hasExternalTextures)jt.rebindTextures(A,wt.get(A.texture).__webglTexture,wt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Nt=A.depthTexture;if(xt.__boundDepthTexture!==Nt){if(Nt!==null&&wt.has(Nt)&&(A.width!==Nt.image.width||A.height!==Nt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");jt.setupDepthRenderbuffer(A)}}const Ht=A.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(mt=!0);const Xt=wt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Xt[H])?k=Xt[H][W]:k=Xt[H],ot=!0):A.samples>0&&jt.useMultisampledRTT(A)===!1?k=wt.get(A).__webglMultisampledFramebuffer:Array.isArray(Xt)?k=Xt[W]:k=Xt,C.copy(A.viewport),L.copy(A.scissor),U=A.scissorTest}else C.copy(tt).multiplyScalar(B).floor(),L.copy(ht).multiplyScalar(B).floor(),U=St;if(W!==0&&(k=af),bt.bindFramebuffer(N.FRAMEBUFFER,k)&&X&&bt.drawBuffers(A,k),bt.viewport(C),bt.scissor(L),bt.setScissorTest(U),ot){const xt=wt.get(A.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+H,xt.__webglTexture,W)}else if(mt){const xt=H;for(let Ht=0;Ht<A.textures.length;Ht++){const Xt=wt.get(A.textures[Ht]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Ht,Xt.__webglTexture,W,xt)}}else if(A!==null&&W!==0){const xt=wt.get(A.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,xt.__webglTexture,W)}S=-1},this.readRenderTargetPixels=function(A,H,W,X,k,ot,mt,yt=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xt=wt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&mt!==void 0&&(xt=xt[mt]),xt){bt.bindFramebuffer(N.FRAMEBUFFER,xt);try{const Ht=A.textures[yt],Xt=Ht.format,Nt=Ht.type;if(!Wt.textureFormatReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Wt.textureTypeReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=A.width-X&&W>=0&&W<=A.height-k&&(A.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+yt),N.readPixels(H,W,X,k,Ct.convert(Xt),Ct.convert(Nt),ot))}finally{const Ht=R!==null?wt.get(R).__webglFramebuffer:null;bt.bindFramebuffer(N.FRAMEBUFFER,Ht)}}},this.readRenderTargetPixelsAsync=async function(A,H,W,X,k,ot,mt,yt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xt=wt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&mt!==void 0&&(xt=xt[mt]),xt)if(H>=0&&H<=A.width-X&&W>=0&&W<=A.height-k){bt.bindFramebuffer(N.FRAMEBUFFER,xt);const Ht=A.textures[yt],Xt=Ht.format,Nt=Ht.type;if(!Wt.textureFormatReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Wt.textureTypeReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const oe=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,oe),N.bufferData(N.PIXEL_PACK_BUFFER,ot.byteLength,N.STREAM_READ),A.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+yt),N.readPixels(H,W,X,k,Ct.convert(Xt),Ct.convert(Nt),0);const Me=R!==null?wt.get(R).__webglFramebuffer:null;bt.bindFramebuffer(N.FRAMEBUFFER,Me);const Oe=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await dd(N,Oe,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,oe),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ot),N.deleteBuffer(oe),N.deleteSync(Oe),ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,H=null,W=0){const X=Math.pow(2,-W),k=Math.floor(A.image.width*X),ot=Math.floor(A.image.height*X),mt=H!==null?H.x:0,yt=H!==null?H.y:0;jt.setTexture2D(A,0),N.copyTexSubImage2D(N.TEXTURE_2D,W,0,0,mt,yt,k,ot),bt.unbindTexture()};const cf=N.createFramebuffer(),lf=N.createFramebuffer();this.copyTextureToTexture=function(A,H,W=null,X=null,k=0,ot=null){ot===null&&(k!==0?(Ur("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ot=k,k=0):ot=0);let mt,yt,xt,Ht,Xt,Nt,oe,Me,Oe;const Ce=A.isCompressedTexture?A.mipmaps[ot]:A.image;if(W!==null)mt=W.max.x-W.min.x,yt=W.max.y-W.min.y,xt=W.isBox3?W.max.z-W.min.z:1,Ht=W.min.x,Xt=W.min.y,Nt=W.isBox3?W.min.z:0;else{const Dn=Math.pow(2,-k);mt=Math.floor(Ce.width*Dn),yt=Math.floor(Ce.height*Dn),A.isDataArrayTexture?xt=Ce.depth:A.isData3DTexture?xt=Math.floor(Ce.depth*Dn):xt=1,Ht=0,Xt=0,Nt=0}X!==null?(oe=X.x,Me=X.y,Oe=X.z):(oe=0,Me=0,Oe=0);const be=Ct.convert(H.format),Ot=Ct.convert(H.type);let Ne;H.isData3DTexture?(jt.setTexture3D(H,0),Ne=N.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(jt.setTexture2DArray(H,0),Ne=N.TEXTURE_2D_ARRAY):(jt.setTexture2D(H,0),Ne=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,H.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,H.unpackAlignment);const fe=N.getParameter(N.UNPACK_ROW_LENGTH),vn=N.getParameter(N.UNPACK_IMAGE_HEIGHT),gs=N.getParameter(N.UNPACK_SKIP_PIXELS),Mn=N.getParameter(N.UNPACK_SKIP_ROWS),rr=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,Ce.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ce.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ht),N.pixelStorei(N.UNPACK_SKIP_ROWS,Xt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Nt);const Fe=A.isDataArrayTexture||A.isData3DTexture,Ln=H.isDataArrayTexture||H.isData3DTexture;if(A.isDepthTexture){const Dn=wt.get(A),ln=wt.get(H),gn=wt.get(Dn.__renderTarget),na=wt.get(ln.__renderTarget);bt.bindFramebuffer(N.READ_FRAMEBUFFER,gn.__webglFramebuffer),bt.bindFramebuffer(N.DRAW_FRAMEBUFFER,na.__webglFramebuffer);for(let Vi=0;Vi<xt;Vi++)Fe&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,wt.get(A).__webglTexture,k,Nt+Vi),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,wt.get(H).__webglTexture,ot,Oe+Vi)),N.blitFramebuffer(Ht,Xt,mt,yt,oe,Me,mt,yt,N.DEPTH_BUFFER_BIT,N.NEAREST);bt.bindFramebuffer(N.READ_FRAMEBUFFER,null),bt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(k!==0||A.isRenderTargetTexture||wt.has(A)){const Dn=wt.get(A),ln=wt.get(H);bt.bindFramebuffer(N.READ_FRAMEBUFFER,cf),bt.bindFramebuffer(N.DRAW_FRAMEBUFFER,lf);for(let gn=0;gn<xt;gn++)Fe?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Dn.__webglTexture,k,Nt+gn):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Dn.__webglTexture,k),Ln?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ln.__webglTexture,ot,Oe+gn):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ln.__webglTexture,ot),k!==0?N.blitFramebuffer(Ht,Xt,mt,yt,oe,Me,mt,yt,N.COLOR_BUFFER_BIT,N.NEAREST):Ln?N.copyTexSubImage3D(Ne,ot,oe,Me,Oe+gn,Ht,Xt,mt,yt):N.copyTexSubImage2D(Ne,ot,oe,Me,Ht,Xt,mt,yt);bt.bindFramebuffer(N.READ_FRAMEBUFFER,null),bt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Ln?A.isDataTexture||A.isData3DTexture?N.texSubImage3D(Ne,ot,oe,Me,Oe,mt,yt,xt,be,Ot,Ce.data):H.isCompressedArrayTexture?N.compressedTexSubImage3D(Ne,ot,oe,Me,Oe,mt,yt,xt,be,Ce.data):N.texSubImage3D(Ne,ot,oe,Me,Oe,mt,yt,xt,be,Ot,Ce):A.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,ot,oe,Me,mt,yt,be,Ot,Ce.data):A.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,ot,oe,Me,Ce.width,Ce.height,be,Ce.data):N.texSubImage2D(N.TEXTURE_2D,ot,oe,Me,mt,yt,be,Ot,Ce);N.pixelStorei(N.UNPACK_ROW_LENGTH,fe),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,vn),N.pixelStorei(N.UNPACK_SKIP_PIXELS,gs),N.pixelStorei(N.UNPACK_SKIP_ROWS,Mn),N.pixelStorei(N.UNPACK_SKIP_IMAGES,rr),ot===0&&H.generateMipmaps&&N.generateMipmap(Ne),bt.unbindTexture()},this.initRenderTarget=function(A){wt.get(A).__webglFramebuffer===void 0&&jt.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?jt.setTextureCube(A,0):A.isData3DTexture?jt.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?jt.setTexture2DArray(A,0):jt.setTexture2D(A,0),bt.unbindTexture()},this.resetState=function(){w=0,T=0,R=null,bt.reset(),pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=de._getDrawingBufferColorSpace(t),e.unpackColorSpace=de._getUnpackColorSpace()}}const me=18,Wn=0,Xn=-860,pn=-600,Mi=-820,Nu=70,j_=-1450,ol=6,No=me-3.8,We=8036115,ie=Math.PI*2;function xe(i,t,e){return i<t?t:i>e?e:i}function ue(i,t,e){return i+(t-i)*e}function re(i,t,e){const n=xe((e-i)/(t-i||1e-6),0,1);return n*n*(3-2*n)}function al(i){const t=xe(i,0,1);return t*t*t*(t*(t*6-15)+10)}function ze(i){let t=i>>>0;return function(){t=t+1831565813>>>0;let n=t;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}}function K(i,t,e){return t+(e-t)*i()}function cl(i,t){return t[Math.min(t.length-1,i()*t.length|0)]}function Eo(i,t){const e=Math.sin(i*127.1+t*311.7)*43758.5453123;return e-Math.floor(e)}function Fu(i,t){const e=Math.floor(i),n=Math.floor(t),s=i-e,r=t-n,o=s*s*(3-2*s),a=r*r*(3-2*r),l=Eo(e,n),c=Eo(e+1,n),u=Eo(e,n+1),h=Eo(e+1,n+1);return(l*(1-o)+c*o)*(1-a)+(u*(1-o)+h*o)*a}function qt(i,t,e=4){let n=0,s=.5,r=1;for(let o=0;o<e;o++)n+=s*Fu(i*r,t*r),r*=2.03,s*=.5;return n}function yi(i,t,e=3){let n=0,s=.5,r=1;for(let o=0;o<e;o++)n+=s*(1-Math.abs(Fu(i*r,t*r)*2-1)),r*=2.11,s*=.5;return n}const es=[[900,150],[300,138],[140,128],[60,122],[-120,136],[-300,108],[-460,124],[-540,96],[-580,72],[-600,64],[-700,65],[-812,67],[-834,86],[-856,90],[-940,105],[-1060,172],[-1200,380],[-1600,470],[-2600,500],[-4600,540]];function qs(i){for(let t=0;t<es.length-1;t++){const e=es[t],n=es[t+1];if(i>=n[0]){const s=xe((i-n[0])/Math.max(e[0]-n[0],1e-4),0,1),r=s*s*(3-2*s);return n[1]+(e[1]-n[1])*r}}return es[es.length-1][1]}function Si(i){return i>Xn?me:Wn}function Ou(i){return re(-560,-625,i)*(1-re(-800,-856,i))}function ll(i,t,e){const n=Si(i),s=Ou(i);if(e<0)return n-1.7+e*.3;const r=s,o=re(-835,-930,i)*(1-re(-1020,-1160,i)),a=re(-1080,-1210,i),l=re(130,230,i),c=ue(ue(13,30,r),16,a)+l*7-o*4,u=ue(ue(2.3,.1,r),2,a)-o,h=ue(ue(26,24,r),34,a)-o*8,f=ue(ue(2.7,3.4,r),2.4,a)+o*1.3,p=ue(ue(.08,.12,r),.07,a)+o*.18,m=n+u;let _,g;if(e<c)_=ue(n-1.7,m,al(e/c)),_+=(qt(i*.055+t*3.1,e*.09+t,3)-.5)*Math.min(e,c+4)*.3,_+=(qt(i*.19,e*.3+t*2.2,2)-.5)*Math.min(e,c)*.09,g=0;else{g=e-c;const T=g/h,R=Math.floor(T),S=T-R;_=m+R*f+f*re(.6,1,S)+g*p}_===void 0&&(_=m);const d=Math.min(g*.8,22)+e*.03,v=t*13.7,M=(qt(i*.0075+v,e*.01+v,4)-.5)*2*d*.55+(qt(i*.028+v*2.1,e*.05+v,3)-.5)*2*d*.16+(yi(i*.0032+v,t*3.3+e*.004,3)-.55)*2*d*.7;_+=M*(s>.35?.55:1);const x=qs(i)-ol+e,y=Math.pow(Math.max(0,Math.sin(i*.055+qt(x*.011+t,i*.011,2)*4)),6);_-=y*6.5*Math.min(1,e/70);const w=Math.min(1,e/90);return _+=(qt(i*.0022+t*21.1,t*7.7,3)-.45)*26*w,_+=(qt(i*.0055+t*7.3,1.7,3)-.5)*16*Math.min(1,e/55),_+=Math.pow(Math.max(0,Math.sin(i*.0208+t*1.7)),3)*11*Math.min(1,e/45),_+=Math.pow(Math.max(0,Math.sin(i*.0071-t*.9)),2)*22*Math.min(1,e/150),_=n+(_-n)*(1-re(175,340,e)*.88),Math.max(_,n-1.7)}function Q_(i,t){return t*(qs(i)-ol)}function zu(i,t,e){return e*i-(qs(t)-ol)}function tx(i,t){const e=i<0?-1:1,n=zu(i,t,e);return ll(t,e,n)}const Fi=new _e,Fr=new nr,Uc=new I,Or=new Yn;function Rn(i,t){const e=i.getAttribute("position"),n=new Float32Array(e.count*3),s=new $;for(let r=0;r<e.count;r++)t(e.getX(r),e.getY(r),e.getZ(r),s,r),n[r*3]=s.r,n[r*3+1]=s.g,n[r*3+2]=s.b;return i.setAttribute("color",new ae(n,3)),i}function Fo(i,t){const e=i.getAttribute("position").count,n=t.isColor?t:new $(t),s=new Float32Array(e*3);for(let r=0;r<e;r++)s[r*3]=n.r,s[r*3+1]=n.g,s[r*3+2]=n.b;return i.setAttribute("color",new ae(s,3)),i}function Qe(i){const t=[];let e=0;for(const c of i){if(!c||!c.geom)continue;let u=c.geom.index?c.geom.toNonIndexed():c.geom.clone();if(c.matrix&&u.applyMatrix4(c.matrix),u.getAttribute("normal")||u.computeVertexNormals(),!u.getAttribute("uv")){const h=u.getAttribute("position").count;u.setAttribute("uv",new ae(new Float32Array(h*2),2))}c.paint?Rn(u,c.paint):c.color?Fo(u,c.color):u.getAttribute("color")||Fo(u,16777215),t.push(u),e+=u.getAttribute("position").count}const n=new Float32Array(e*3),s=new Float32Array(e*3),r=new Float32Array(e*3),o=new Float32Array(e*2);let a=0;for(const c of t){const u=c.getAttribute("position"),h=c.getAttribute("normal"),f=c.getAttribute("color"),p=c.getAttribute("uv");n.set(u.array.subarray(0,u.count*3),a*3),s.set(h.array.subarray(0,h.count*3),a*3),r.set(f.array.subarray(0,f.count*3),a*3),o.set(p.array.subarray(0,p.count*2),a*2),a+=u.count}const l=new Re;return l.setAttribute("position",new ae(n,3)),l.setAttribute("normal",new ae(s,3)),l.setAttribute("color",new ae(r,3)),l.setAttribute("uv",new ae(o,2)),l.computeBoundingSphere(),l}function zt(i,t,e,n=0,s=0,r=0,o=1,a=o,l=o){return Or.set(n,s,r),Fr.setFromEuler(Or),new _e().compose(new I(i,t,e),Fr,new I(o,a,l))}const Bu=new I(0,1,0);function xi(i,t,e,n){const s=i*t,r=new Float32Array(s*3),o=new Float32Array(s*2);let a=0;for(let y=0;y<i;y++)for(let w=0;w<t;w++){const T=e(y,w);r[a*3]=T.x,r[a*3+1]=T.y,r[a*3+2]=T.z,o[a*2]=w/(t-1),o[a*2+1]=y/(i-1),a++}const l=r[3]-r[0],c=r[4]-r[1],u=r[5]-r[2],h=r[t*3]-r[0],f=r[t*3+1]-r[1],p=r[t*3+2]-r[2],m=c*p-u*f,_=u*h-l*p,g=l*f-c*h,d=n||Bu,v=m*d.x+_*d.y+g*d.z<0,M=[];for(let y=0;y<i-1;y++)for(let w=0;w<t-1;w++){const T=y*t+w,R=T+1,S=T+t,E=S+1;v?M.push(T,S,R,R,S,E):M.push(T,R,S,R,E,S)}const x=new Re;return x.setAttribute("position",new ae(r,3)),x.setAttribute("uv",new ae(o,2)),x.setIndex(M),x.computeVertexNormals(),x}function ex(i,t,e){const n=[];for(let s=0;s<=e;s++)n.push(ue(i,t,s/e));return n}const ne=[new $(9072722),new $(10650207),new $(7166020),new $(11901554),new $(5985095),new $(9730394),new $(8219218),new $(12624762)],Oo=new $(15522214),zo=new $(16182473),ms=new $(5012024),ni=new $(7314502),Wr=new $(3496236),Ei=new $(3946032),Bo={uTime:{value:0},uWind:{value:new vt(.35,.22)}};function Ch(i,t=1){return i.onBeforeCompile=e=>{e.uniforms.uTime=Bo.uTime,e.uniforms.uWind=Bo.uWind,e.vertexShader=`uniform float uTime;
uniform vec2 uWind;
`+e.vertexShader,e.vertexShader=e.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
       #ifdef USE_INSTANCING
         vec3 iOff = vec3(instanceMatrix[3].x, instanceMatrix[3].y, instanceMatrix[3].z);
       #else
         vec3 iOff = vec3(modelMatrix[3].x, modelMatrix[3].y, modelMatrix[3].z);
       #endif
       float swayH = clamp((transformed.y - 0.25) * 0.10, 0.0, 1.0);
       swayH *= swayH;
       float ph = uTime * 1.15 + iOff.x * 0.31 + iOff.z * 0.27;
       transformed.x += sin(ph) * swayH * uWind.x * ${t.toFixed(3)};
       transformed.z += cos(ph * 0.81 + 1.7) * swayH * uWind.y * ${t.toFixed(3)};`)},i.customProgramCacheKey=()=>"tidebreak-wind",i}const Ft={};function nx(){return Ft.terrain||(Ft.terrain=new Ge({vertexColors:!0,roughness:.96,metalness:0,flatShading:!1}),Ft.rock=new Ge({vertexColors:!0,roughness:.9,metalness:0,flatShading:!0}),Ft.rockSmooth=new Ge({vertexColors:!0,roughness:.82,metalness:0}),Ft.caveRock=new Ge({vertexColors:!0,roughness:.88,metalness:0,side:Ue,flatShading:!0}),Ft.foliage=Ch(new Ge({vertexColors:!0,roughness:.85,metalness:0,side:Ue}),1),Ft.foliageStiff=Ch(new Ge({vertexColors:!0,roughness:.9,metalness:0}),.35),Ft.wood=new Ge({vertexColors:!0,roughness:.78,metalness:0}),Ft.buoy=new Ge({vertexColors:!0,roughness:.55,metalness:.05}),Ft.metal=new Ge({vertexColors:!0,roughness:.42,metalness:.45}),Ft.glow=new tn({vertexColors:!0,toneMapped:!1}),Ft.cloth=new Ge({vertexColors:!0,roughness:.85,metalness:0,side:Ue}),Ft.sprite=null),Ft}function hl(i,t){const e=document.createElement("canvas");return e.width=i,e.height=t,e}function ul(i=128,t="rgba(255,255,255,1)",e="rgba(190,245,255,0.45)"){const n=hl(i,i),s=n.getContext("2d"),r=s.createRadialGradient(i/2,i/2,0,i/2,i/2,i/2);r.addColorStop(0,t),r.addColorStop(.32,e),r.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=r,s.fillRect(0,0,i,i);const o=new Yo(n);return o.colorSpace=on,o}function ix(){const i=hl(64,256),t=i.getContext("2d"),e=t.createLinearGradient(0,0,0,256);e.addColorStop(0,"rgba(210,255,250,0.85)"),e.addColorStop(.55,"rgba(160,240,235,0.28)"),e.addColorStop(1,"rgba(120,220,220,0.0)"),t.fillStyle=e,t.fillRect(0,0,64,256);const n=t.createLinearGradient(0,0,64,0);n.addColorStop(0,"rgba(0,0,0,1)"),n.addColorStop(.5,"rgba(0,0,0,0)"),n.addColorStop(1,"rgba(0,0,0,1)"),t.globalCompositeOperation="destination-out",t.fillStyle=n,t.fillRect(0,0,64,256);const s=new Yo(i);return s.colorSpace=on,s}function sx(i,t={}){const{bg:e="#12303a",fg:n="#ffe9a8",edge:s="#f6f1e2",accent:r="#e0472f",font:o=800,sub:a=null,w:l=512,h:c=512,radius:u=64}=t,h=hl(l,c),f=h.getContext("2d");f.clearRect(0,0,l,c);const p=u;f.beginPath(),f.moveTo(p,0),f.lineTo(l-p,0),f.quadraticCurveTo(l,0,l,p),f.lineTo(l,c-p),f.quadraticCurveTo(l,c,l-p,c),f.lineTo(p,c),f.quadraticCurveTo(0,c,0,c-p),f.lineTo(0,p),f.quadraticCurveTo(0,0,p,0),f.closePath(),f.fillStyle=e,f.fill(),f.lineWidth=Math.max(8,l*.045),f.strokeStyle=s,f.stroke(),f.fillStyle=r,f.fillRect(l*.06,c*.06,l*.88,c*.045),f.fillRect(l*.06,c*.895,l*.88,c*.045),f.fillStyle=n,f.textAlign="center",f.textBaseline="middle";const m=Math.round(c*(a?.46:.56));f.font=`${o} ${m}px system-ui, "Segoe UI", "Helvetica Neue", Arial, sans-serif`,f.fillText(i,l/2,c*(a?.44:.5)),a&&(f.font=`700 ${Math.round(c*.13)}px system-ui, "Segoe UI", Arial, sans-serif`,f.fillStyle=s,f.fillText(a,l/2,c*.76));const _=new Yo(h);return _.colorSpace=on,_.anisotropy=4,_}function Ph(i,t){const e=ze(t),n=[];for(let m=360;m>-2560;m-=m>-560?10:m>-900?6:m>-1500?18:38)n.push(m);n.push(-2560);const s=[];for(let m=-16;m<0;m+=6)s.push(m);for(let m=0;m<=40;m+=5)s.push(m);for(let m=47;m<=150;m+=13)s.push(m);for(let m=168;m<=340;m+=34)s.push(m);const r=n.length,o=s.length,a=new Float32Array(r*o),l=new Float32Array(r*o);for(let m=0;m<r;m++){const _=n[m],g=Q_(_,i);for(let d=0;d<o;d++){const v=s[d];l[m*o+d]=g+i*v,a[m*o+d]=ll(_,i,v)}}const c=(m,_)=>{const g=Math.max(0,m-1),d=Math.min(r-1,m+1),v=Math.max(0,_-1),M=Math.min(o-1,_+1),x=Math.abs(a[d*o+_]-a[g*o+_])/Math.max(1,Math.abs(n[d]-n[g])),y=Math.abs(a[m*o+M]-a[m*o+v])/Math.max(1,Math.abs(l[m*o+M]-l[m*o+v]));return Math.max(x,y)},u=new $,h=(m,_)=>{const g=_-m+1,d=xi(g,o,(M,x)=>{const y=m+M;return{x:l[y*o+x],y:a[y*o+x],z:n[y]}});Rn(d,(M,x,y,w,T)=>{const R=m+(T/o|0),S=T%o,E=s[S],C=Si(y),L=c(R,S),U=qt(M*.09+4.1,y*.09,3);if(E<0){w.copy(Oo).lerp(zo,U*.6).multiplyScalar(.72);return}const z=qt(M*.07+2.7,y*.07,2)*2.6,O=C+3+z;if(x<O&&E<30){const St=xe((x-(C-1.6))/(O-C+1.6),0,1);w.copy(Oo).lerp(zo,.35+U*.5).lerp(ne[1],St*.25);const Tt=re(.62,1,St)*(.4+U*.6);w.lerp(ni.clone().multiplyScalar(.85),xe(Tt,0,.7)),x<C+.4&&w.lerp(Ei,re(C+.4,C-1.4,x)*.65);return}const D=x*.32+qt(M*.02,y*.02,2)*1.4,G=Math.floor(Math.abs(D))%ne.length,B=D-Math.floor(D);u.copy(ne[G]).lerp(ne[(G+2)%ne.length],re(.5,1,B)),w.copy(u).lerp(ne[(G+5)%ne.length],U*.3),B<.14&&w.multiplyScalar(.66);const nt=re(.35,1.5,L);w.multiplyScalar(1-nt*.22-(1-U)*.12),x<C+.9&&w.lerp(Ei,re(C+.9,C-.6,x)*.55);const tt=(1-re(.25,.9,L))*re(C+4,C+7.5,x)*(.55+U*.6),ht=ms.clone().lerp(ni,qt(M*.05,y*.05,2)).lerp(Wr,qt(M*.013+9.3,y*.013,2)*.55);w.lerp(ht,xe(tt,0,.92))});const v=new Kt(d,Ft.terrain);return v.name=`bank-${i>0?"east":"west"}-${m}`,v.receiveShadow=!0,v.castShadow=!1,v.matrixAutoUpdate=!1,v.updateMatrix(),v},f=[];let p=0;for(let m=1;m<r;m++)(n[p]-n[m]>=240||m-p>=34)&&(f.push(h(p,m)),p=m);return p<r-1&&f.push(h(p,r-1)),{meshes:f,slopeAt:c,zs:n,ds:s,xs:l,heights:a,rng:e,side:i,cols:o}}function Hu(i,t){const e=me;if(t<110)return e-2.4;const n=al((t-116)/150);let s=ue(e-1.8,e+9.2,n);s+=(qt(i*.012+3.3,t*.012,4)-.5)*9*n,s+=(qt(i*.05,t*.05+7.1,3)-.5)*2.4*n;const r=re(120,330,Math.abs(i));return s+=r*(16+22*qt(i*.006+1.7,t*.004,3)),s}function rx(){const i=ex(-560,560,46),t=[-40,20,70,110,140,168,200,250,320,400],e=xi(t.length,i.length,(s,r)=>{const o=t[s],a=i[r];return{x:a,y:Hu(a,o),z:o}});Rn(e,(s,r,o,a)=>{const l=qt(s*.08+2.2,o*.08,3),c=re(me-1.4,me+5.5,r);a.copy(Oo).lerp(zo,.3+l*.55);const u=re(me+5,me+11,r)*(.6+l*.5),h=ms.clone().lerp(ni,qt(s*.05,o*.05,2));a.lerp(h,xe(u,0,.85)),a.lerp(Ei,(1-c)*.55)});const n=new Kt(e,Ft.terrain);return n.name="back-shore",n.receiveShadow=!0,n.matrixAutoUpdate=!1,n.updateMatrix(),n}const zr=30;function ox(){const n=xi(9,74,(r,o)=>{const a=ue(-104,104,o/73),l=r/8,c=1-re(zr-4,zr+16,Math.abs(a)),u=ue(me+.85,me-.35,c),h=qt(a*.06+11.3,l*3.1,3)-.5,f=ue(u,-2.6,al(l))+h*(.5+2.6*l)*(1-c*.5),p=Xn+1.4-c*4.4+l*(2.4+c*3)+h*1.6;return{x:a,y:f,z:p}});Rn(n,(r,o,a,l)=>{const c=qt(r*.09,o*.09,3),u=Math.abs(o*.34+c*1.2),h=Math.floor(u)%ne.length;l.copy(ne[h]).lerp(ne[(h+3)%ne.length],c),l.multiplyScalar(.9+c*.2),l.lerp(Ei,re(me+1.2,me-2.4,o)*.62)});const s=new Kt(n,Ft.terrain);return s.name="lip-wall",s.receiveShadow=!0,s.castShadow=!1,s}function Br(i,t,e){const n=Mi-pn,s=(i-pn)/n,r=re(.18,0,s),o=re(.82,1,s),l=62+(qt(i*.03,5.5,3)-.5)*8+r*13+o*11,c=28+(qt(i*.026+3.1,8.2,3)-.5)*8+r*7+o*5;return e.x=Math.cos(t)*l,e.y=No+Math.sin(t)*c,e.rx=l,e.ry=c,e}function Ho(i,t,e){const n=Br(i,t,{}),s=1.34+qt(t*2.1+3.7,i*.014,3)*.42,r=yi(t*1.3+1.2,i*.012,4),o=n.rx*s+9,a=n.ry*(s*.92)+12+r*24,l=(i-pn)/(Mi-pn),c=re(0,.16,l)*re(1,.84,l),u=ue(.55,1,c);return e.x=Math.cos(t)*o,e.y=No+Math.sin(t)*a*u+(qt(i*.06,t*2,3)-.5)*6*c,e.z=i+(qt(t*1.7,i*.05+4.4,3)-.5)*5*c,e}function ax(){const i=[];for(let p=pn+2;p>Mi-4;p-=5.5)i.push(p);const t=22,e=i.length,n=xi(e,t+1,(p,m)=>{const _=i[p],g=ue(.045,Math.PI-.045,m/t),d=Br(_,g,{}),v=(qt(_*.08,g*1.6,3)-.5)*2.2;return{x:d.x+Math.cos(g)*v,y:d.y+Math.sin(g)*v*.7,z:_+(qt(g*2.3+5.5,_*.07,2)-.5)*1.6}}),s=new $(4176296),r=new $(12624988),o=new $(9403478),a=new $(2367259);Rn(n,(p,m,_,g)=>{const d=qt(p*.07+3.3,_*.07,3),v=yi(p*.045,_*.045+1.1,3),M=yi(m*.062+2.2,_*.05,3),x=Math.abs(m*.34+d*1.6),y=Math.floor(x)%ne.length,w=x-Math.floor(x);g.copy(ne[y]).lerp(ne[(y+4)%ne.length],d*.8),g.multiplyScalar(.7+v*.62),w<.15&&g.lerp(a,.55),g.lerp(s,re(.6,.92,M)*.55),g.lerp(r,re(.7,.95,v)*.26);const T=Ou(_);g.lerp(o,(1-T)*re(34,10,m)*.42),g.multiplyScalar(1+re(No+18,No+40,m)*.22),g.lerp(Ei,xe(re(me+7.5,me-1.5,m)*.5+T*.26,0,.8)),v>.8&&g.lerp(Wr,(v-.8)*1.1)});const l=new Kt(n,Ft.caveRock);l.name="cave-inner",l.receiveShadow=!0;const c=xi(e,t+1,(p,m)=>{const _=i[p],g=ue(.02,Math.PI-.02,m/t);return Ho(_,g,{})});Rn(c,(p,m,_,g)=>{const d=qt(p*.06+8.8,_*.06,3),v=Math.abs(m*.3+d*1.5),M=Math.floor(v)%ne.length;g.copy(ne[M]).lerp(ne[(M+3)%ne.length],d),g.multiplyScalar(.95+d*.18);const x=re(16,34,m)*(.5+d*.7);g.lerp(ms.clone().lerp(ni,qt(p*.04,_*.04,2)),xe(x,0,.9)),m<me+2&&g.lerp(Ei,.5)});const u=new Kt(c,Ft.caveRock);u.name="cave-shell",u.receiveShadow=!0;const h=[];for(const[p,m]of[[pn+2,-1],[Mi-3.2,1]]){const g=xi(2,31,(d,v)=>{const M=ue(.03,Math.PI-.03,v/30),x=Br(p,M,{});if(d===0)return{x:x.x,y:x.y,z:p};const y=Ho(p,M,{});return{x:y.x,y:y.y,z:p+m*2.5}});h.push({geom:g,paint:(d,v,M,x)=>{const y=qt(d*.08,v*.08+M*.01,3);x.copy(ne[Math.floor(Math.abs(v*.3+y*1.5))%ne.length]).multiplyScalar(.85+y*.25)}})}const f=new Kt(Qe(h),Ft.caveRock);return f.name="cave-collar",f.receiveShadow=!0,{innerMesh:l,outerMesh:u,collarMesh:f,zRows:i}}function cx(i){const t=ze(i),e=new xn;e.name="cave-interior";const n=pn+6,s=Mi-6,r=s-n,o=new Ko(1,1,6,1,!1);o.translate(0,-.5,0),Fo(o,new $(7168597));const a=90,l=new Nr(o,Ft.rock,a);l.name="stalactites";const c=new $;for(let tt=0;tt<a;tt++){const ht=ue(n,s,t()),St=ue(.35,Math.PI-.35,Math.pow(t(),.7)),Tt=Br(ht,St,{}),Ut=K(t,2.6,8.5),q=K(t,.35,1.15);Fi.compose(Uc.set(Tt.x*.94,Tt.y-.6,ht+K(t,-1.5,1.5)),Fr.setFromEuler(Or.set(K(t,-.22,.22),t()*ie,K(t,-.22,.22))),new I(q,Ut,q)),l.setMatrixAt(tt,Fi),c.setHSL(.09,.14,K(t,.24,.42)),l.setColorAt(tt,c)}l.instanceMatrix.needsUpdate=!0,l.instanceColor&&(l.instanceColor.needsUpdate=!0),e.add(l);const u=new Jo(1,0);u.scale(.55,1.5,.55);const h=170,f=new Nr(u,Ft.glow,h);f.name="cave-crystals";const p=[],m=[new $(5564671),new $(8319183),new $(11111423),new $(6488032),new $(5884159)];for(let tt=0;tt<h;tt++){const ht=ue(n+4,s-4,t()),St=t()<.5?K(t,.06,.5):K(t,Math.PI-.5,Math.PI-.06),Tt=Br(ht,St,{}),Ut=t()<.62,q=Tt.x*K(t,.86,1.02),Z=Ut?me+1.2+t()*3.6:Tt.y*K(t,.86,.98),lt=K(t,.45,1.15);Fi.compose(Uc.set(q,Z,ht+K(t,-2,2)),Fr.setFromEuler(Or.set(K(t,-.5,.5),t()*ie,K(t,-.5,.5))),new I(lt,lt*K(t,.8,1.9),lt)),f.setMatrixAt(tt,Fi),f.setColorAt(tt,cl(t,m)),t()<.2&&p.push(q,Z,ht,K(t,2.5,6))}f.instanceMatrix.needsUpdate=!0,f.instanceColor&&(f.instanceColor.needsUpdate=!0),e.add(f);const _=ul(128,"rgba(255,255,255,1)","rgba(150,255,240,0.5)"),g=new Qc({map:_,color:10483199,blending:bn,transparent:!0,depthWrite:!1,opacity:.5,toneMapped:!1}),d=[],v=p.length>=4?p:[0,12,ue(n,s,.5),5];for(let tt=0;tt<24;tt++){const ht=tt*4%v.length,St=new Su(g);St.position.set((v[ht]??0)*K(t,.8,1.06),(v[ht+1]??12)+K(t,-.5,1.5),(v[ht+2]??ue(n,s,.5))+K(t,-3,3));const Tt=K(t,4,11);St.scale.set(Tt,Tt,Tt),St.renderOrder=7,e.add(St),d.push({sprite:St,base:Tt,phase:t()*ie})}const M=ix(),x=new tn({map:M,transparent:!0,blending:bn,depthWrite:!1,side:Ue,opacity:.45,toneMapped:!1,color:14679286}),y=[],w=[pn-26,pn-88,pn-140,pn-188],T=[];for(let tt=0;tt<w.length;tt++){const ht=w[tt],St=tt%2===0?-18:22,Tt=new Tn(K(t,14,22),34,1,1),Ut=zt(St,me+12,ht,K(t,-.22,.22),K(t,-.3,.3),K(t,-.13,.13));y.push({geom:Tt,matrix:Ut,color:14679286}),T.push({mat:Ut,phase:t()*ie})}const R=new Kt(Qe(y),x);R.name="cave-shafts",R.renderOrder=6,R.matrixAutoUpdate=!1,e.add(R);const S=130,E=new Re,C=new Float32Array(S*3),L=new Float32Array(S),U=new Float32Array(S),z=new Float32Array(S);for(let tt=0;tt<S;tt++)C[tt*3]=K(t,-46,46),C[tt*3+1]=me+K(t,1.5,18),C[tt*3+2]=ue(pn-8,Mi+8,t()),L[tt]=t()*ie,U[tt]=K(t,.08,.3),z[tt]=K(t,1.2,4.2);E.setAttribute("position",new ae(C,3)),E.setAttribute("aSeed",new ae(L,1)),E.setAttribute("aSpeed",new ae(U,1)),E.setAttribute("aSize",new ae(z,1));const O={uTime:{value:0},uColor:{value:new $(10483430)},uPixelRatio:{value:Math.min(2,(typeof window<"u"?window.devicePixelRatio:1)||1)}},D=new cn({uniforms:O,transparent:!0,depthWrite:!1,blending:bn,vertexShader:`
      attribute float aSeed;
      attribute float aSpeed;
      attribute float aSize;
      uniform float uTime;
      uniform float uPixelRatio;
      varying float vFade;
      void main() {
        vec3 p = position;
        float t = uTime * aSpeed + aSeed;
        p.x += sin(t * 1.3 + aSeed) * 5.0;
        p.y += sin(t * 0.9 + aSeed * 2.1) * 2.4 + t * 0.4;
        p.z += cos(t * 1.1 + aSeed) * 4.0;
        vFade = 0.45 + 0.4 * sin(uTime * 1.6 + aSeed * 3.0);
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_PointSize = aSize * uPixelRatio * 34.0 / max(-mv.z, 1.0);
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`
      uniform vec3 uColor;
      varying float vFade;
      void main() {
        float d = length(gl_PointCoord - vec2(0.5));
        float a = smoothstep(0.5, 0.04, d) * vFade;
        if (a <= 0.004) discard;
        gl_FragColor = vec4(uColor * a, a);
      }`}),G=new el(E,D);G.name="cave-motes",e.add(G);const B=new tn({map:_,transparent:!0,blending:bn,depthWrite:!1,opacity:.26,toneMapped:!1,color:8382975}),nt=[];for(let tt=0;tt<12;tt++){const ht=ue(n,s,t()),St=K(t,-44,44),Tt=K(t,8,20),Ut=new Tn(Tt,Tt*.6);Ut.rotateX(-Math.PI/2),nt.push({geom:Ut,matrix:zt(St,me+.08,ht),color:8382975})}const st=new Kt(Qe(nt),B);return st.name="cave-light-pools",st.renderOrder=5,e.add(st),{group:e,sprites:d,moteUniforms:O,zA:n,zB:s,span:r,spikes:l,crystals:f,shaftMat:x,shafts:T,poolMat:B,pools:st,spriteMat:g}}const ko=8,Ys=3,ku=`
float tbHash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}
float tbNoise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = tbHash(i), b = tbHash(i + vec2(1.0, 0.0));
  float c = tbHash(i + vec2(0.0, 1.0)), d = tbHash(i + vec2(1.0, 1.0));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}
float tbWave(vec2 p, float t, float scale) {
  float h = 0.0;
  h += sin(p.x * 0.085 + p.y * 0.035 + t * 0.85) * 0.055;
  h += sin(p.x * -0.047 + p.y * 0.108 + t * 1.25) * 0.042;
  h += sin(p.x * 0.195 + p.y * 0.170 + t * 2.10) * 0.022;
  h += sin(p.x * 0.330 - p.y * 0.270 + t * 2.95) * 0.011;
  h += sin(p.x * 0.62 + p.y * 0.41 + t * 4.1) * 0.006;
  h += sin(p.x * -0.44 + p.y * 0.75 + t * 5.2) * 0.004;
  return h * scale;
}
`,lx=`
uniform vec2 uShore[SHORE_COUNT];
float tbShoreHalf(float z) {
  for (int i = 0; i < SHORE_COUNT - 1; i++) {
    vec2 a = uShore[i];
    vec2 b = uShore[i + 1];
    if (z >= b.x) {
      float t = clamp((z - b.x) / max(a.x - b.x, 0.0001), 0.0, 1.0);
      float s = t * t * (3.0 - 2.0 * t);
      return mix(b.y, a.y, s);
    }
  }
  return uShore[SHORE_COUNT - 1].y;
}
`,hx=`
#include <fog_pars_vertex>
uniform float uTime;
uniform float uSwell;
varying vec3 vWorld;
varying float vWaveH;
${ku}
void main() {
  vec3 transformed = position;
  float h = tbWave(transformed.xz, uTime, 1.0) * uSwell;
  transformed.y += h;
  vWaveH = h;
  vec4 wp = modelMatrix * vec4(transformed, 1.0);
  vWorld = wp.xyz;
  vec4 mvPosition = viewMatrix * wp;
  gl_Position = projectionMatrix * mvPosition;
  #include <fog_vertex>
}
`,ux=`
#include <fog_pars_fragment>
uniform float uTime;
uniform vec3 uDeep, uMid, uShallow, uSandCol, uReef, uFoamCol, uSkyCol, uSunCol, uSunDir, uCaveTint;
uniform float uShine, uFoamAmt, uCrestAmt, uSpecAmt, uWaveScale, uDepthScale;
uniform vec4 uImpact;
uniform vec4 uRings[${ko}];
uniform vec3 uGlow[${Ys}];
uniform vec4 uGlowInfo[${Ys}];
varying vec3 vWorld;
varying float vWaveH;
${ku}
${lx}

void main() {
  vec2 p = vWorld.xz;
  float t = uTime;
  float ws = uWaveScale;

  // analytic multi-sine normal (no noise taps)
  float h0 = tbWave(p, t, ws);
  float hx = tbWave(p + vec2(0.85, 0.0), t, ws);
  float hz = tbWave(p + vec2(0.0, 0.85), t, ws);
  vec3 N = normalize(vec3((h0 - hx) * 7.0, 1.0, (h0 - hz) * 7.0));
  N.x += sin((p.x + p.y * .7) * 2.8 + t * 2.0) * .07;
  N.z += cos((p.y - p.x * .2) * 3.2 + t * 1.8) * .055;
  N = normalize(N);

  // shoreline distance: channel banks + islet rings
  float shoreW = tbShoreHalf(p.y);
  float dist = (shoreW - 1.5) - abs(p.x);
  for (int i = 0; i < ${ko}; i++) {
    vec4 r = uRings[i];
    if (r.w > 0.0) dist = min(dist, distance(p, r.xy) - r.z);
  }
  float inland = dist;

  // two noise taps drive seabed shading, reef mask and foam texture
  float nA = tbNoise(p * 0.021);
  float nB = tbNoise(p * 0.085 + 13.7);
  float nC = tbNoise(p * 0.34 - 4.3);

  // large smooth depth variation from crossed sines (no noise cell structure)
  float swell = sin(p.x * 0.0131 + p.y * 0.0072) * 15.0 + sin(p.y * 0.0212 - 3.1) * 10.0;
  float depth = clamp((inland * 0.55 + swell - 4.0) / uDepthScale, 0.0, 1.0);

  vec3 col = mix(uSandCol, uShallow, smoothstep(0.0, 0.15, depth));
  col = mix(col, uMid, smoothstep(0.12, 0.56, depth));
  col = mix(col, uDeep, smoothstep(0.52, 1.0, depth));
  col *= 0.94 + 0.10 * nB;
  float reef = smoothstep(0.62, 0.82, nB) * smoothstep(0.10, 0.34, depth) * (1.0 - smoothstep(0.52, 0.90, depth));
  col = mix(col, uReef, reef * 0.55);
  col = mix(col, uShallow, smoothstep(0.74, 0.97, nC) * (1.0 - depth) * 0.16);   // sand banks

  // foam: shoreline band (animated wash), crest froth, plunge pool, hull wash
  float band = 1.0 - smoothstep(0.4, 6.0, abs(dist));
  float wash = 0.55 + 0.45 * sin(p.y * 0.30 + p.x * 0.22 - t * 1.5);
  float lace = smoothstep(0.34, 0.72, nB * 0.62 + nC * 0.55);   // broken foam lace
  float foam = band * wash * uFoamAmt + band * lace * 0.75 * uFoamAmt;
  foam += smoothstep(0.30, 0.95, h0 / max(ws, 0.001)) * uCrestAmt;
  if (uImpact.w > 0.0) {
    float ri = length(p - uImpact.xy);
    foam += exp(-(ri * ri) / (uImpact.z * uImpact.z)) * uImpact.w * (0.62 + 0.3 * sin(ri * 0.45 - t * 2.6));
  }

  vec3 V = normalize(cameraPosition - vWorld);
  float fres = pow(1.0 - clamp(dot(N, V), 0.0, 1.0), 5.0);
  col = mix(col, uSkyCol, fres * 0.42);

  vec3 H = normalize(normalize(uSunDir) + V);
  float nh = max(dot(N, H), 0.0);
  float spec = pow(nh, uShine) + pow(nh, uShine * 3.5) * (0.3 + 0.8 * smoothstep(0.45, 0.80, nB));
  col += uSunCol * spec * uSpecAmt;

  col = mix(col, uFoamCol * (0.92 + 0.16 * nB), clamp(foam, 0.0, 0.92));

  // cave mood + crystal light pools
  float cave = smoothstep(-556.0, -620.0, p.y) * (1.0 - smoothstep(-806.0, -858.0, p.y));
  col = mix(col, col * 0.20 + uCaveTint * 0.06, cave * 0.90);
  for (int i = 0; i < ${Ys}; i++) {
    vec4 info = uGlowInfo[i];
    if (info.w > 0.0) {
      float rr = length(p - info.xy);
      col += uGlow[i] * exp(-(rr * rr) / (info.z * info.z)) * info.w * (0.85 + 0.15 * sin(uTime * 1.7 + float(i)));
    }
  }

  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
}
`,Nc=[];function Lh(i){const t=[];for(let o=0;o<ko;o++){const a=i.rings&&i.rings[o];t.push(a?new he(a.x,a.z,a.r,1):new he(0,0,1,0))}const e=[],n=[];for(let o=0;o<Ys;o++){const a=i.glow&&i.glow[o];e.push(a?a.color:new $(0)),n.push(a?new he(a.x,a.z,a.r,a.strength):new he(0,0,1,0))}const s=Jc.merge([dt.fog,{uTime:{value:0},uSwell:{value:i.swell??.5},uWaveScale:{value:i.waveScale??1},uDeep:{value:new $(i.deep??674659)},uMid:{value:new $(i.mid??1221560)},uShallow:{value:new $(i.shallow??6544598)},uSandCol:{value:new $(i.sand??14280622)},uReef:{value:new $(i.reef??3108701)},uFoamCol:{value:new $(i.foam??15399935)},uSkyCol:{value:new $(i.sky??11134194)},uSunCol:{value:new $(i.sun??16773839)},uSunDir:{value:(i.sunDir||new I(-.42,.76,-.5)).clone().normalize()},uCaveTint:{value:new $(i.caveTint??1924976)},uShine:{value:i.shine??220},uFoamAmt:{value:i.foamAmt??1},uCrestAmt:{value:i.crestAmt??.25},uDepthScale:{value:i.depthScale??88},uSpecAmt:{value:i.specAmt??1},uImpact:{value:i.impact?new he(i.impact.x,i.impact.z,i.impact.r,i.impact.strength):new he(0,0,1,0)},uRings:{value:t},uGlow:{value:e},uGlowInfo:{value:n},uShore:{value:es.map(o=>new vt(o[0],o[1]))}}]),r=new cn({uniforms:s,vertexShader:hx,fragmentShader:ux.replaceAll("SHORE_COUNT",String(es.length)),fog:!0,side:vi});return r.transparent=!1,Nc.push(r),r}function fx(i,t,e){const n=t.length,s=i.length;return xi(n,s,(r,o)=>({x:i[o],y:e,z:t[r]}),Bu)}function Dh(i,t,e,n,s){const r=[];let o=0;const a=l=>{const c=new Kt(fx(i,t.slice(o,l+1),e),n);c.name=`${s}-${o}`,c.receiveShadow=!1,c.castShadow=!1,c.matrixAutoUpdate=!1,c.updateMatrix(),r.push(c)};for(let l=1;l<t.length;l++)t[o]-t[l]>=260&&(a(l),o=l);return o<t.length-1&&a(t.length-1),r}function dx(i){const t=ze(i.seed),e=[];for(let m=-560;m<-240;m+=80)e.push(m);for(let m=-240;m<-156;m+=21)e.push(m);for(let m=-156;m<=156;m+=9)e.push(m);for(let m=177;m<=240;m+=21)e.push(m);for(let m=320;m<=560;m+=80)e.push(m);const n=[];for(let m=250;m>-556;m-=14)n.push(m);for(let m=-566;m>-860;m-=8)n.push(m);n.push(-860);const s=Oi.upper,r=[],o=[5564671,8319183,11111423,6488032,5884159,5564671];for(let m=0;m<Ys;m++){const _=ue(pn-20,Mi+10,(m+.5)/Ys);r.push({x:(m%2===0?-1:1)*K(t,8,42),z:_,r:K(t,9,17),strength:.32,color:new $(o[m])})}const a=Lh({rings:s,glow:r,swell:.42,waveScale:1,deep:408402,mid:1023160,shallow:5429453,sand:11131304,reef:3107674,foam:15137791,sky:8176861,caveTint:1924976,shine:180,foamAmt:1,crestAmt:.18,specAmt:.55,depthScale:88}),l=Dh(e,n,me,a,"water-upper"),c=[];for(let m=-4200;m<-1400;m+=350)c.push(m);for(let m=-1400;m<-520;m+=120)c.push(m);for(let m=-520;m<=520;m+=32)c.push(m);for(let m=640;m<=1400;m+=120)c.push(m);for(let m=1750;m<=4200;m+=350)c.push(m);const u=[];for(let m=-850;m>-1300;m-=18)u.push(m);for(let m=-1320;m>-2200;m-=60)u.push(m);for(let m=-2260;m>=-4200;m-=140)u.push(m);const h=Oi.lower,f=Lh({rings:h,glow:[],swell:.62,waveScale:1.15,deep:340298,mid:820900,shallow:4639944,sand:10473636,reef:2777171,foam:15006463,sky:7651032,caveTint:735821,shine:150,foamAmt:.9,crestAmt:.3,specAmt:.5,depthScale:112,impact:{x:0,z:Xn-4,r:26,strength:1}}),p=Dh(c,u,Wn,f,"water-lower");return{meshes:[...l,...p],upperMeshes:l,lowerMeshes:p,upperMat:a,lowerMat:f}}const px=`
#include <fog_pars_vertex>
varying vec2 vUv;
varying vec3 vWorld;
void main() {
  vUv = uv;
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorld = wp.xyz;
  vec4 mvPosition = viewMatrix * wp;
  gl_Position = projectionMatrix * mvPosition;
  #include <fog_vertex>
}
`,mx=`
#include <fog_pars_fragment>
uniform float uTime;
uniform vec3 uTopCol, uBotCol;
varying vec2 vUv;
varying vec3 vWorld;
float fbHash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}
float fbNoise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = fbHash(i), b = fbHash(i + vec2(1.0, 0.0));
  float c = fbHash(i + vec2(0.0, 1.0)), d = fbHash(i + vec2(1.0, 1.0));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}
void main() {
  float v = 1.0 - vUv.y;                       // 0 crest -> 1 plunge pool
  float streak = fbNoise(vec2(vUv.x * 24.0, v * 2.2 - uTime * 2.1));
  float streak2 = fbNoise(vec2(vUv.x * 58.0 + 5.0, v * 5.0 - uTime * 3.4));
  float body = 0.72 + streak * 0.34 + streak2 * 0.24;
  vec3 col = mix(uTopCol, uBotCol, smoothstep(0.0, 0.75, v)) * (0.8 + 0.4 * body);
  col += vec3(0.16, 0.22, 0.22) * smoothstep(0.55, 1.0, v) * (0.5 + 0.5 * streak2);
  float edge = smoothstep(0.0, 0.10, vUv.x) * smoothstep(1.0, 0.90, vUv.x);
  float alpha = edge * smoothstep(0.0, 0.05, v) * smoothstep(1.0, 0.72, v) * (0.72 + 0.3 * streak);
  gl_FragColor = vec4(col, alpha);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
}
`;function gx(i){const t=ze(i),e=new xn;e.name="waterfall";const n=zr*2,s=me-Wn+1.6,r=(me+Wn)*.5-.8,o=new Kt(new Tn(n,s,26,22),new cn({uniforms:Jc.merge([dt.fog,{uTime:{value:0},uTopCol:{value:new $(10480111)},uBotCol:{value:new $(15924991)}}]),vertexShader:px,fragmentShader:mx,transparent:!0,depthWrite:!1,side:Ue,fog:!0}));o.position.set(0,r,Xn-.9),o.renderOrder=4,e.add(o);const a=ul(128,"rgba(255,255,255,0.95)","rgba(190,250,255,0.35)"),l=new tn({map:a,transparent:!0,blending:bn,depthWrite:!1,opacity:.32,toneMapped:!1,color:14285823}),c=new Kt(new Tn(n*1.25,s*1.3,1,1),l);c.position.set(0,r-1,Xn-1.2),c.renderOrder=5,e.add(c);const u=[];for(let w=0;w<5;w++){const T=K(t,22,46),R=new Tn(T,T*.55);R.rotateX(-Math.PI/2),u.push({geom:R,matrix:zt(K(t,-14,14),Wn+.09,Xn-6-t()*16),color:15137791})}const h=new Kt(Qe(u),new tn({map:a,transparent:!0,blending:bn,depthWrite:!1,opacity:.3,toneMapped:!1,color:15137791}));h.name="falls-churn",h.renderOrder=4,e.add(h);const f=260,p=new Re,m=new Float32Array(f*3),_=new Float32Array(f),g=new Float32Array(f),d=new Float32Array(f),v=new Float32Array(f);for(let w=0;w<f;w++){const T=t()<.5?-1:1;m[w*3]=T*K(t,0,1)*zr*.98,m[w*3+1]=K(t,Wn+.2,me-1),m[w*3+2]=Xn-K(t,0,6),_[w]=t()*ie,g[w]=t(),d[w]=K(t,.1,.26),v[w]=K(t,5,20)}p.setAttribute("position",new ae(m,3)),p.setAttribute("aSeed",new ae(_,1)),p.setAttribute("aPhase",new ae(g,1)),p.setAttribute("aSpeed",new ae(d,1)),p.setAttribute("aSize",new ae(v,1));const M={uTime:{value:0},uColor:{value:new $(14482431)},uPixelRatio:{value:Math.min(2,(typeof window<"u"?window.devicePixelRatio:1)||1)}},x=new cn({uniforms:M,transparent:!0,depthWrite:!1,blending:bn,vertexShader:`
      attribute float aSeed;
      attribute float aPhase;
      attribute float aSpeed;
      attribute float aSize;
      uniform float uTime;
      uniform float uPixelRatio;
      varying float vAlpha;
      void main() {
        vec3 p = position;
        float life = fract(uTime * aSpeed + aPhase);
        p.y += life * 14.0;
        p.x += sin(uTime * 0.9 + aSeed) * (0.6 + life * 4.0);
        p.z += cos(uTime * 0.75 + aSeed * 1.7) * (0.4 + life * 2.2) - life * 5.5;
        vAlpha = (1.0 - life) * smoothstep(0.0, 0.12, life) * 0.85;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_PointSize = aSize * uPixelRatio * (1.0 + life * 1.8) * 26.0 / max(-mv.z, 1.0);
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`
      uniform vec3 uColor;
      varying float vAlpha;
      void main() {
        float d = length(gl_PointCoord - vec2(0.5));
        float a = smoothstep(0.5, 0.02, d) * vAlpha;
        if (a <= 0.004) discard;
        gl_FragColor = vec4(uColor * a, a);
      }`}),y=new el(p,x);return y.name="falls-plume",y.renderOrder=6,e.add(y),{group:e,uniforms:M,sheetMat:o.material,washMat:l,churnMat:h.material,halo:a,sheet:o,wash:c,churn:h}}function di(i,t=1,e=.34,n=.82,s=!1){const r=ze(i),o=new ps(1,t),a=o.getAttribute("position"),l=new I,c=r()*40,u=r()*40;for(let p=0;p<a.count;p++){l.fromBufferAttribute(a,p).normalize();const m=qt(l.x*1.6+c,l.z*1.6+l.y*1.15+u,3),_=yi(l.x*2.4+l.y+c,l.z*2.4-l.y*.7+u,2),g=1+(m-.5)*2*e+(_-.5)*e*.9;a.setXYZ(p,l.x*g,l.y*g*n+(m-.5)*e*.3,l.z*g)}o.computeVertexNormals();const h=new $(3813929),f=new $(4877107);return Rn(o,(p,m,_,g)=>{const d=qt(p*1.4+c,_*1.4+m*.9,3),v=Math.abs(m*1.15+d*.9),M=Math.floor(v*3)%ne.length;g.copy(ne[M]).lerp(ne[(M+3)%ne.length],d*.8),g.multiplyScalar(.72+d*.42),g.lerp(h,xe((.25-m)*.8,0,.5)),!s&&m>.35&&d>.5&&g.lerp(f,(d-.5)*1.1)}),o}function _x(i,t,e,n){const s=i.length,r=[],o=[],a=new I(0,1,0),l=new I,c=new I,u=new I,h=new I;for(let p=0;p<s;p++){const m=i[Math.max(0,p-1)],_=i[Math.min(s-1,p+1)];l.set(_.x-m.x,_.y-m.y,_.z-m.z).normalize(),c.copy(a).cross(l),c.lengthSq()<1e-5&&c.set(1,0,0),c.normalize(),u.copy(l).cross(c).normalize();for(let g=0;g<e;g++){const d=g/e*ie,v=Math.cos(d),M=Math.sin(d);h.set(i[p].x+(c.x*v+u.x*M)*t[p],i[p].y+(c.y*v+u.y*M)*t[p],i[p].z+(c.z*v+u.z*M)*t[p]),r.push(h.x,h.y,h.z)}}for(let p=0;p<s-1;p++)for(let m=0;m<e;m++){const _=(m+1)%e,g=p*e+m,d=p*e+_,v=(p+1)*e+m,M=(p+1)*e+_;o.push(g,v,d,d,v,M)}const f=new Re;return f.setAttribute("position",new pe(r,3)),f.setIndex(o),f.computeVertexNormals(),n&&Rn(f,n),f}function Fc(i,t,e,n,s){const r=[],o=[];for(let l=0;l<=n;l++){const c=l/n,u=c*i,h=-e*c*c*i*.42+Math.sin(c*Math.PI)*i*.09,f=Math.sin(Math.min(1,c*1.18)*Math.PI*.92)*(1-c*.55),p=t*Math.max(.06,f);r.push(u,h,-p,u,h+p*.62,0,u,h,p)}for(let l=0;l<n;l++){const c=l*3,u=(l+1)*3;o.push(c,u,c+1,c+1,u,u+1),o.push(c+1,u+1,c+2,c+2,u+1,u+2)}const a=new Re;return a.setAttribute("position",new pe(r,3)),a.setIndex(o),a.computeVertexNormals(),Rn(a,s),a}const za=[new $(6967608),new $(8610632),new $(5982258)],Ih=[new $(3107630),new $(4164152),new $(5874500),new $(7780174),new $(9079354)];function Ba(i,t={}){const e=ze(i),{height:n=12,lean:s=.16,fronds:r=20,decayed:o=1}=t,a=[],l=6,c=[],u=[],h=e()*ie,f=Math.cos(h),p=Math.sin(h),m=K(e,-.35,.35);for(let d=0;d<=l;d++){const v=d/l,M=s*n*v*v;c.push({x:f*M+Math.sin(v*Math.PI*.9)*m*n*.05,y:n*v,z:p*M+Math.cos(v*Math.PI*1.1)*m*n*.05}),u.push(ue(.64,.3,v)*(1+Math.sin(v*9)*.09))}a.push({geom:_x(c,u,5,(d,v,M,x)=>{const y=qt(d*2.4+v*1.8,M*2.4,3);x.copy(za[0]).lerp(za[1],y).lerp(za[2],xe(Math.sin(v*3.1)*.5+.5,0,1)*.4)})});const _=c[l],g=r;for(let d=0;d<g;d++){const v=d/g*ie+K(e,-.16,.16),M=K(e,3.6,5.8),x=K(e,1.2,1.8),y=K(e,.55,1.05),w=K(e,-.12,.5),T=Fc(M,x,y,3,(R,S,E,C)=>{const L=xe(R/M,0,1);C.copy(cl(e,Ih)),C.lerp(Ih[4],L*L*.5),C.multiplyScalar(.82+.3*(1-L)),S<-.15&&C.multiplyScalar(.78)});a.push({geom:T,matrix:zt(_.x,_.y-.15,_.z,w,v,K(e,-.3,.3))})}a.push({geom:new ps(1.05,0),matrix:zt(_.x,_.y+.05,_.z,K(e,-.2,.2),e()*ie,K(e,-.2,.2),1.35,.72,1.35),color:4028980});for(let d=0;d<o;d++){const v=K(e,0,ie),M=Fc(K(e,1.6,2.6),.4,1.5,3,(x,y,w,T)=>{T.setHex(9071157).multiplyScalar(.7+.4*(1-xe(x/3,0,1)))});a.push({geom:M,matrix:zt(_.x,_.y-.5,_.z,-.9,v,0)})}return Qe(a)}function Uh(i,t=3,e=1){const n=ze(i),s=[];for(let r=0;r<t;r++){const o=new ps(K(n,.5,.95)*e,0),a=o.getAttribute("position"),l=new I;for(let c=0;c<a.count;c++){l.fromBufferAttribute(a,c).normalize();const h=1+(qt(l.x*2.2+r*3.1,l.z*2.2+l.y,3)-.5)*.7;a.setXYZ(c,l.x*h,l.y*h*.72+.6,l.z*h)}o.computeVertexNormals(),s.push({geom:o,matrix:zt(K(n,-.6,.6)*e,K(n,0,.35)*e,K(n,-.6,.6)*e,0,K(n,0,ie),0),paint:(c,u,h,f)=>{const p=qt(c*2.6+r,h*2.6,3);f.copy(ms).lerp(ni,p).lerp(Wr,xe(.6-u*.4,0,.7)),f.multiplyScalar(.85+.35*xe(u,0,1))}})}return Qe(s)}function Nh(i,t=4,e=.9){const n=ze(i),s=[],r=[];let o=0;for(let l=0;l<t;l++){const c=K(n,0,ie),u=e*K(n,.6,1.25),h=K(n,.045,.1),f=K(n,.1,.42),p=Math.cos(c),m=Math.sin(c);s.push(-h*m,0,h*p,h*m,0,-h*p,p*f*u*.5,u*.55,m*f*u*.5,p*f*u,u,m*f*u),r.push(o,o+1,o+2,o+1,o+3,o+2),o+=4}const a=new Re;return a.setAttribute("position",new pe(s,3)),a.setIndex(r),a.computeVertexNormals(),Rn(a,(l,c,u,h)=>{h.copy(ni).lerp(Wr,xe(1-c/(e*1.1),0,1)*.7),h.lerp(new $(11055189),xe(c/(e*1.2),0,1)*.55)}),a}function xx(i){const t=ze(i),e=[],n=6+(t()*4|0);for(let s=0;s<n;s++){const r=s/n*ie+K(t,-.2,.2),o=Fc(K(t,.9,1.7),K(t,.22,.4),K(t,.5,1),3,(a,l,c,u)=>{u.copy(ms).lerp(ni,.35+.5*(a/1.6))});e.push({geom:o,matrix:zt(0,.25,0,K(t,.1,.5),r,0)})}return Qe(e)}function Ha(i,t){const e=ze(i),n=[],s=new Ye(.02,.03,.5,4);n.push({geom:s,matrix:zt(0,.25,0),color:5143092});for(let r=0;r<5;r++){const o=new On(K(e,.07,.12),5,4);n.push({geom:o,color:t,matrix:zt(K(e,-.14,.14),K(e,.45,.62),K(e,-.14,.14))})}return Qe(n)}function Fh(i){const t=new ps(1,0),e=t.getAttribute("position"),n=new I;for(let s=0;s<e.count;s++){n.fromBufferAttribute(e,s).normalize();const o=1+(qt(n.x*1.7+3.3,n.z*1.7+n.y*1.3,3)-.5)*.85;e.setXYZ(s,n.x*o,n.y*o*.62,n.z*o)}return t.computeVertexNormals(),Rn(t,(s,r,o,a)=>{const l=qt(s*1.5,o*1.5+r,3);a.copy(Wr).lerp(ni,l*.9).multiplyScalar(.78+.4*xe(r,0,1))}),t}function vx(){const i=new Map,t=new Map,e=95;let n={};return{setCaps(s){n={};for(const[r,o]of Object.entries(s))n[r]=o.cap??1/0},tryAdd(s,r,o){const a=n[s]??1/0,l=t.get(s)||0;if(l>=a)return!1;const c=`${s}|${Math.floor(r.elements[14]/e)}`;let u=i.get(c);return u||(u=[],i.set(c,u)),u.push(r.clone(),o||null),t.set(s,l+1),!0},add(s,r,o){return this.tryAdd(s,r,o)},build(s,r,o){let a=0,l=0;const c=new $;for(const[u,h]of i){const f=u.slice(0,u.indexOf("|")),p=s[f];if(!p||!h.length)continue;const m=h.length>>1,_=new Nr(p.geom,p.material,m);_.name=`${o}:${f}:${u.slice(u.indexOf("|")+1)}`,_.castShadow=p.shadow===!0,_.receiveShadow=p.shadow===!0,_.frustumCulled=!0;for(let g=0;g<m;g++)_.setMatrixAt(g,h[g*2]),h[g*2+1]&&(c.copy(h[g*2+1]),_.setColorAt(g,c));_.instanceMatrix.needsUpdate=!0,_.instanceColor&&(_.instanceColor.needsUpdate=!0),_.computeBoundingSphere(),r.add(_),a+=m,l++}return{total:a,meshes:l}}}}const Oi={upper:[],lower:[]};function Gu(i,t,e,n,s){i.push({x:t,z:e,r:n,weight:s})}function Oh(i,t=ko){return i.sort((e,n)=>n.r*n.weight-e.r*e.weight),i.slice(0,t)}const zh=[{x:118,z:-430,r:24,h:48},{x:-134,z:-470,r:26,h:42},{x:104,z:-560,r:20,h:56},{x:-140,z:-640,r:22,h:50},{x:124,z:-700,r:20,h:44},{x:104,z:-845,r:18,h:40},{x:-104,z:-856,r:19,h:34},{x:168,z:-1100,r:36,h:54,lower:!0},{x:-196,z:-1140,r:42,h:64,lower:!0}];function Mx(i,t){const{x:e,z:n,r:s,h:r}=i,o=i.lower?Wn:me,a=t()*ie,l=t()*30,c=f=>s*(1+(qt(Math.cos(f)*1.4+Math.sin(f)*1.9+l,Math.sin(f)*1.4,3)-.5)*.44+(yi(Math.cos(f)*2.6+l,Math.sin(f)*2.6,2)-.55)*.3),u=(f,p,m,_)=>{let g=o+r*(.34+.66*Math.pow(Math.max(0,1-m),.72));const d=m*5,v=Math.floor(d),M=d-v;return g-=v*r*.115+r*.115*re(.38,1,M),g+=Math.pow(Math.max(0,Math.cos(_*3+a)),2)*r*.07*(1-m),g+=(qt(f*.05+l,p*.05,4)-.5)*r*.3*(1-m*.5),g+=(yi(f*.11+l,p*.11,3)-.55)*r*.17*(1-m),g-=Math.pow(m,5)*16,g};return{raw:u,heights:(f,p)=>{const m=f-e,_=p-n,g=Math.atan2(_,m),d=Math.min(1,Math.hypot(m,_)/Math.max(c(g),.001));return u(f,p,d,g)},radiusAt:c,phase:a,noiseSeed:l,level:o,height:r,r:s,cx:e,cz:n}}function yx(i,t){const{cx:e,cz:n,r:s,level:r}=i,o=xe(Math.round(s*.8),14,30),a=xe(Math.round(s*1.7),26,56),l=xi(o,a,(h,f)=>{const p=h/(o-1),m=f/(a-1)*ie+i.phase,_=i.radiusAt(m)*p,g=e+Math.cos(m)*_,d=n+Math.sin(m)*_;return{x:g,y:i.raw(g,d,p,m),z:d}}),c=i.noiseSeed,u=new $(4864554);return Rn(l,(h,f,p,m)=>{const _=qt(h*.06+c,p*.06,3),g=qt(h*.18+c,p*.18,3),d=Math.abs(f*.3+_*1.3),v=Math.floor(d)%ne.length,M=d-Math.floor(d);m.copy(ne[v]).lerp(ne[(v+2)%ne.length],_*.75),m.multiplyScalar(.86+g*.3),M<.16&&m.lerp(u,.6);const x=re(.55,.95,g)*re(r+6,r+18,f);m.lerp(ms.clone().lerp(ni,qt(h*.05,p*.05,2)),xe(x*.75,0,.8)),m.lerp(new $(14205846),re(r+i.height*.72,r+i.height*.95,f)*.35),m.lerp(Ei,re(r+2.2,r-2,f)*.6)}),l}function Sx(i,t){const e=ze(i),n=[],s=[];for(let r=0;r<zh.length;r++){const o=zh[r],a=Mx(o,e);n.push({geom:yx(a),matrix:zt(0,0,0)}),s.push({spec:o,surf:a})}for(const r of s){const{spec:o,surf:a}=r;Qo(t,e,{x0:o.x-o.r*1.1,x1:o.x+o.r*1.1,z0:o.z-o.r*1.1,z1:o.z+o.r*1.1,step:Math.max(3.2,o.r*.16),sample:(l,c)=>{const u=a.heights(l,c),h=Math.hypot(l-o.x,c-o.z)<a.radiusAt(Math.atan2(c-o.z,l-o.x))*.86;return{y:u,ok:h&&u>a.level+3}},table:[["palmA",1.7,1.25,1.9],["palmB",1.5,1.25,1.9],["palmC",1.1,1.15,1.7],["canopyA",1.5,.85,1.5],["canopyB",1.3,.85,1.5],["bushA",1.4,.95,1.7],["fern",.6,.85,1.3],["grassA",1.3,1,1.7],["ledge",.9,1.3,2.8],["rockA",.5,.8,1.6]],skip:.26})}return{geom:Qe(n),entries:s}}function Ex(i,t){const e=ze(i),{x:n,z:s,side:r,length:o=16,huts:a=2,big:l=!1}=t,c=Si(s),u=[],h=new $(8016947),f=new $(9793610),p=new $(6111528),m=new $(10257218),_=new $(7298092),g=Math.round(o/1.1);for(let M=0;M<g;M++){const x=M/(g-1),y=n+r*(x*o),w=c+1.35+x*.9,T=new dn(1,.22,2.9+(l?1.4:0));u.push({geom:T,matrix:zt(y,w,s,0,K(e,-.02,.02),0),paint:(R,S,E,C)=>{C.copy(h).lerp(f,e()),e()<.18&&C.copy(p)}})}for(let M=0;M<g;M+=3)for(const x of[-1.35,1.35]){const y=M/(g-1),w=n+r*(y*o),T=c+1.35+y*.9,R=T-(c-2.4);u.push({geom:new Ye(.19,.23,R,6),matrix:zt(w,T-R/2,s+x,0,0,0),paint:(S,E,C,L)=>{L.copy(f).lerp(p,xe((c-E)*.4,0,.7))}})}for(const M of[-1.35,1.35]){u.push({geom:new dn(.14,.14,2.7),matrix:zt(n+r*o*.62,c+2.5,s+M,0,0,0),color:f});for(const x of[.4,.62,.84])u.push({geom:new Ye(.1,.1,1.2,5),matrix:zt(n+r*o*x,c+1.95,s+M),color:f})}const d=l?7:4;for(let M=0;M<d;M++){const x=K(e,.1,.95),y=n+r*x*o,w=c+1.46+x*.9,T=e()<.5,R=K(e,.45,.75);u.push({geom:T?new dn(R,R*.8,R):new Ye(R*.42,R*.36,R*.9,8),matrix:zt(y,w+R*.4,s+K(e,-1.1,1.1),0,K(e,0,ie),0),paint:(S,E,C,L)=>{L.copy(h).lerp(new $(9398847),e()),T||L.lerp(new $(4868682),xe(Math.abs(E-w)/R,0,1)*.35)}})}const v=l?4:2;for(let M=0;M<v;M++){const x=(M+.6)/v,y=n+r*x*o,w=c+1.35+x*.9;u.push({geom:new Ye(.1,.12,3,6),matrix:zt(y,w+1.5,s+1.35),color:p}),u.push({geom:new dn(.18,.18,1),matrix:zt(y,w+3,s+1.35),color:p})}for(let M=0;M<a;M++){const x=s+(M-(a-1)/2)*9+K(e,-1.6,1.6),y=n+r*(o+K(e,5,13)),w=tx(y,x),T=Math.max(w,c+.4),R=K(e,3.4,4.6),S=K(e,3,4.2),E=K(e,2.2,2.8);for(const C of[-R*.36,R*.36])for(const L of[-S*.36,S*.36])u.push({geom:new Ye(.16,.19,2.2,5),matrix:zt(y+C,T-1.1,x+L),color:p});u.push({geom:new dn(R,.26,S),matrix:zt(y,T,x),color:f}),u.push({geom:new dn(R*.94,E,S*.94),matrix:zt(y,T+E/2+.13,x),paint:(C,L,U,z)=>{z.copy(h).lerp(f,.4).multiplyScalar(.85+.3*e())}}),u.push({geom:new Ko(Math.max(R,S)*.82,2.3,7,1,!1),matrix:zt(y,T+E+1.15,x,0,K(e,0,ie),0),paint:(C,L,U,z)=>{z.copy(m).lerp(_,K(e,.2,.9))}}),u.push({geom:new On(.24,6,5),matrix:zt(y,T+E+2.3,x),color:14206071})}return{geom:Qe(u),lanterns:[]}}function bx(i){const t=ze(i),e=[],n=new $(4863268),s=new $(7032628),r=new $(3493978),o=12;for(let l=0;l<o;l++){const c=l/(o-1),u=26,h=ue(-u/2,u/2,c),f=Math.sin(Math.PI*(.12+c*.8))*4.4+.6,p=3.6*Math.pow(c,2.2),m=new Ye(f,f*.94,2.1,9,1,!0,0,Math.PI);m.rotateZ(Math.PI/2),m.rotateY(Math.PI/2),e.push({geom:m,matrix:zt(h,.4+p*.4,0,0,0,-.18),paint:(_,g,d,v)=>{v.copy(r).lerp(n,xe(-g,0,1.4)*.5),v.multiplyScalar(.85+.3*t())}})}e.push({geom:new dn(27,.5,.7),matrix:zt(0,-.5,0,0,0,0),color:n});for(let l=0;l<7;l++)e.push({geom:new dn(.35,.35,6.6),matrix:zt(K(t,-10,11),2.6+K(t,-.4,.6),0,0,K(t,-.1,.1),K(t,-.2,.2)),color:s});e.push({geom:new Ye(.42,.5,12,7),matrix:zt(-1,7,0,.28,0,.34),color:s}),e.push({geom:new Ye(.34,.4,7.5,7),matrix:zt(6.5,5.4,0,-.2,0,.85),color:s}),e.push({geom:new Ye(1.5,1.5,.4,8),matrix:zt(-2.1,12.4,.2,.28,0,.34),color:n});for(let l=0;l<3;l++)e.push({geom:new dn(.16,K(t,4,7),.16),matrix:zt(-2+l*1.4,9.6-l*.5,.3,.3,0,.34),color:n});for(let l=0;l<14;l++){const c=di(i+100+l,0,.4,.8);e.push({geom:c,matrix:zt(K(t,-16,16),K(t,-1.6,1.2),K(t,-4,4),K(t,-.3,.3),K(t,0,ie),K(t,-.3,.3),K(t,.6,1.8)),paint:(u,h,f,p)=>{p.copy(ne[2]).lerp(new $(3104586),t()*.7),p.multiplyScalar(.8+t()*.4)}})}const a=new Kt(Qe(e),Ft.wood);return a.name="shipwreck",a.castShadow=!0,a.receiveShadow=!0,a.position.set(-96,me-1.2,-498),a.rotation.set(.06,.62,.17),a}const Bh=[{x:0,z:-80,label:"1",style:"pile",name:"PALM CHANNEL"},{x:8,z:-260,label:"2",style:"buoy",name:"SUNKEN WRECK"},{x:-9,z:-460,label:"3",style:"pile",name:"CORAL MAZE"},{x:6,z:-660,label:"4",style:"crystal",name:"SEA CAVE"},{x:-5,z:-825,label:"5",style:"buoy",name:"THUNDER LIP"},{x:10,z:-1050,label:"6",style:"pile",name:"FALLS BASIN"},{x:-7,z:-1250,label:"7",style:"buoy",name:"SMUGGLER REACH"},{x:0,z:-1430,label:"8",style:"finish",name:"HARBOR FINISH"}],Hs=15,Hh=[{a:new $(14173487),b:new $(16182484),c:new $(1867660)},{a:new $(14715434),b:new $(2832970),c:new $(5224137)},{a:new $(2060143),b:new $(15918786),c:new $(14177327)}];function wx(i,t,e,n=18){const s=[];for(let r=0;r<=n;r++){const o=r/n,a=ue(i.x,t.x,o),l=ue(i.z,t.z,o),c=ue(i.y,t.y,o)-Math.sin(o*Math.PI)*e;s.push(new I(a,c,l))}return s}function Vu(i,t,e){const n=ze(i),s=Si(t.z),r=Hh[e%Hh.length],o=new xn;o.name=`gate-${t.label}`;const a=[],l=[],c=[],u=[],h=[],f=[t.x-Hs,t.x+Hs],p=s+16.4;for(let D=0;D<2;D++){const G=f[D];if(t.style==="crystal"){a.push({geom:di(i+D*7,0,.42,.7),matrix:zt(G,s+.4,t.z,0,K(n,0,ie),0,2.6,3.4,2.6),paint:(B,nt,st,tt)=>{tt.copy(ne[3]).lerp(ne[5],n()).multiplyScalar(.6+n()*.3)}});for(let B=0;B<4;B++){const nt=K(n,3.2,7.4);l.push({geom:new Jo(1,0),matrix:zt(G+K(n,-1.2,1.2),s+1.6+B*1.5,t.z+K(n,-1.2,1.2),K(n,-.3,.3),K(n,0,ie),K(n,-.3,.3),.55,nt*.5,.55),color:cl(n,[8319231,10350800,12625151])})}h.push({x:G,y:s+8,z:t.z,s:9,color:9433855})}else if(t.style==="pile"){const B=p-s+1.6;a.push({geom:new Ye(.42,.52,B,8),matrix:zt(G,s+B/2-1.4,t.z),paint:(nt,st,tt,ht)=>{ht.copy(new $(8215096)).lerp(new $(5322784),xe((s-st)*.25,0,.8)),st>s+.6&&st<s+1.5&&ht.lerp(r.a,.5)}}),a.push({geom:new Ye(.6,.7,1.5,8),matrix:zt(G,s-.2,t.z),paint:(nt,st,tt,ht)=>{ht.copy(r.b),Math.sin(st*12)>0&&ht.copy(r.a)}}),a.push({geom:new dn(.5,.4,3.4),matrix:zt(G,s+5.4,t.z),color:7031340}),l.push({geom:new On(.36,8,6),matrix:zt(G,p-.4,t.z),color:16765066}),h.push({x:G,y:p-.4,z:t.z,s:5.5,color:16764810})}else a.push({geom:new Ye(1.65,1.5,1.5,12),matrix:zt(G,s-.25,t.z),paint:(B,nt,st,tt)=>{const ht=Math.sin(Math.atan2(st-t.z,B-G)*6)>0;tt.copy(ht?r.a:r.b)}}),a.push({geom:new Ye(.17,.22,p-s-.6,6),matrix:zt(G,s+(p-s-.6)/2+.4,t.z),color:14275524}),a.push({geom:new Qs(.75,.13,5,12),matrix:zt(G,p-.7,t.z,Math.PI/2,0,0),color:r.c}),l.push({geom:new On(.3,8,6),matrix:zt(G,p+.1,t.z),color:16771496}),h.push({x:G,y:p,z:t.z,s:6,color:16770208}),u.push({x:G,y:p-1.7,z:t.z,color:r.a})}{const D=wx(new I(f[0],p-.9,t.z),new I(f[1],p-.9,t.z),1.8,20),G=new Au(D);a.push({geom:new il(G,26,.075,5,!1),color:t.style==="crystal"?9433343:14998728})}const m=t.style==="finish"?22:16,_=t.style==="finish"?4.4:3.6,g=22,d=5,v=new Tn(m,_,g,d),M=[],x=v.getAttribute("position"),y=new $;for(let D=0;D<x.count;D++){const G=x.getX(D)/m+.5,B=x.getY(D)/_+.5,nt=Math.floor(G*8+(t.style==="finish"?.5:0))%2===0;if(y.copy(nt?r.b:r.a),t.style==="finish"){const st=(Math.floor(G*10)+Math.floor(B*4))%2===0;y.copy(st?r.b:new $(2240570))}y.multiplyScalar(.82+.28*(1-B)),M.push(y.r,y.g,y.b)}v.setAttribute("color",new pe(M,3));const w=t.style==="crystal"?new tn({vertexColors:!0,side:Ue,toneMapped:!1,transparent:!0}):Ft.cloth,T=new Kt(v,w);T.position.set(t.x,s+13.2,t.z),T.castShadow=!1,o.add(T),c.push({mesh:T,base:Float32Array.from(v.getAttribute("position").array),w:m,h:_,phase:n()*ie});const R=t.label.length>2,S=sx(t.label,{w:R?1024:512,h:512,bg:t.style==="finish"?"#12303a":"#0f2b34",fg:"#ffe9a8",edge:t.style==="finish"?"#ffd76a":"#f6f1e2",accent:`#${r.a.getHexString()}`,sub:t.style==="finish"?"FINISH":null}),E=R?7.6:t.style==="finish"?4.6:3.4,C=new Kt(new Tn(E,E*.5),new tn({map:S,transparent:!0,toneMapped:!1,side:Ue}));C.position.set(t.x,s+(R?12.2:11.9),t.z+.45),C.name=`gate-board-${t.label}`,o.add(C),h.push({x:t.x,y:s+11.9,z:t.z-.4,s:8.5,color:10479359,soft:!0});const L=[];for(const D of u){const G=new Tn(1.5,.9,6,2);Fo(G,D.color);const B=new Kt(G,Ft.cloth);B.position.set(D.x,D.y,D.z),B.userData.spin=K(n,-1.4,1.4),o.add(B),L.push({mesh:B,base:Float32Array.from(G.getAttribute("position").array),phase:n()*ie})}const U=new Kt(Qe(a),Ft.wood);if(U.name=`gate-static-${t.label}`,U.castShadow=!0,U.receiveShadow=!0,o.add(U),l.length){const D=new Kt(Qe(l),Ft.glow);D.name=`gate-glow-${t.label}`,o.add(D)}const z=ul(128,"rgba(255,255,255,0.95)","rgba(190,240,255,0.35)"),O=[];for(const D of h){const G=new Qc({map:z,color:D.color,blending:bn,transparent:!0,depthWrite:!1,toneMapped:!1,opacity:D.soft?.35:.5}),B=new Su(G);B.position.set(D.x,D.y,D.z),B.scale.setScalar(D.s),B.renderOrder=8,o.add(B),O.push({sprite:B,base:D.s,phase:n()*ie})}return{group:o,banners:c,flags:L,sprites:O,bobPhase:n()*ie}}const Oc=[{x:18,z:-180,r:3},{x:-22,z:-330,r:3.5},{x:24,z:-520,r:4},{x:-19,z:-700,r:3.2},{x:21,z:-778,r:3.6},{x:-24,z:-1090,r:4.2},{x:-20,z:-1215,r:3.6},{x:17,z:-1330,r:3.4}];function Ax(i){const t=[];return t.push({geom:new Ye(.72,.62,.9,10),matrix:zt(0,.1,0),color:16777215}),t.push({geom:new Ye(.1,.12,1.7,6),matrix:zt(0,1.25,0),color:15788760}),t.push({geom:new On(.2,7,6),matrix:zt(0,2.2,0),color:16765562}),Qe(t)}function Tx(i){const t=ze(i),e=[],n=44;for(let s=n;s>-1450;s-=46){if(s<-580&&s>-840)continue;const r=Si(s);for(const o of[-1,1]){const a=o*(46+6*qt(s*.02,o*3.3,2));e.push({x:a,y:r-.15,z:s+K(t,-6,6),ry:K(t,0,ie),scale:K(t,.9,1.15),color:o>0?14698287:3120747,phase:t()*ie})}}for(let s=-610;s>-816;s-=34)for(const r of[-1,1])e.push({x:r*K(t,38,46),y:me-.15,z:s,ry:K(t,0,ie),scale:K(t,1,1.3),color:6549720,phase:t()*ie});return e}function Rx(i,t,e){return{geom:i,material:t,name:e,items:[],mesh:null,add(n){this.items.push(n)},build(n){const s=new Nr(this.geom,this.material,this.items.length);s.name=this.name,s.castShadow=!0,s.receiveShadow=!1;const r=new $;for(let o=0;o<this.items.length;o++){const a=this.items[o];r.set(a.color??16777215),s.setColorAt(o,r)}return s.instanceColor&&(s.instanceColor.needsUpdate=!0),this.mesh=s,n.add(s),this.update(0),s},update(n){if(!this.mesh)return;const s=this.mesh;for(let r=0;r<this.items.length;r++){const o=this.items[r],a=Math.sin(n*1.1+o.phase)*.18,l=Math.sin(n*.9+o.phase*1.3)*.11;Fi.compose(Uc.set(o.x,o.y+a,o.z),Fr.setFromEuler(Or.set(l*.7,o.ry+Math.sin(n*.35+o.phase)*.08,l)),new I(o.scale,o.scale,o.scale)),s.setMatrixAt(r,Fi)}s.instanceMatrix.needsUpdate=!0}}}function Cx(i){const t=ze(i),e=[],n=[],s=[];for(let c=0;c<Oc.length;c++){const u=Oc[c],h=Si(u.z),f=K(t,2.4,3.4)*u.r,p=di(i+c*13,1,.3,.9);e.push({geom:p,matrix:zt(u.x,h-.6,u.z,0,K(t,0,ie),0,u.r*1.1,f*.5,u.r*1.1),paint:(_,g,d,v)=>{const M=Math.sin((g-h)*2.6)>0;g<h+2.6?v.copy(M?new $(14698287):new $(15920352)):v.copy(ne[2]).lerp(ne[5],t()*.8).multiplyScalar(.75+t()*.3)}});for(let _=0;_<5;_++){const g=K(t,0,ie);e.push({geom:di(i+500+c*5+_,0,.4,.75),matrix:zt(u.x+Math.cos(g)*u.r*K(t,.8,1.5),h-.9,u.z+Math.sin(g)*u.r*K(t,.8,1.5),0,K(t,0,ie),0,K(t,.8,1.6)),paint:(d,v,M,x)=>x.copy(ne[2]).lerp(new $(3103306),t()*.5)})}const m=K(t,0,ie);for(let _=0;_<3;_++){const g=m+_/3*ie,d=u.x+Math.cos(g)*(u.r+3.2),v=u.z+Math.sin(g)*(u.r+3.2);s.push({x:d,y:h-.15,z:v,ry:K(t,0,ie),scale:1,color:14698287,phase:t()*ie}),n.push({x:d,y:h+2.05,z:v})}}const r=new Kt(Qe(e),Ft.rock);r.name="hazard-rocks",r.castShadow=!0,r.receiveShadow=!0;const o=new On(.22,7,6),a=new tn({color:16734780,toneMapped:!1}),l=new Nr(o,a,n.length);l.name="hazard-lamps";for(let c=0;c<n.length;c++)Fi.makeTranslation(n[c].x,n[c].y,n[c].z),l.setMatrixAt(c,Fi);return l.instanceMatrix.needsUpdate=!0,{mesh:r,lampMesh:l,lampMat:a,markers:s}}function Px(i){return{palmA:{geom:Ba(i+1,{height:13.5,lean:.2,fronds:15}),material:Ft.foliage,cap:420,shadow:!0},palmB:{geom:Ba(i+2,{height:9,lean:.13,fronds:13}),material:Ft.foliage,cap:420,shadow:!0},palmC:{geom:Ba(i+3,{height:18,lean:.26,fronds:17}),material:Ft.foliage,cap:250,shadow:!0},bushA:{geom:Uh(i+4,4,1.25),material:Ft.foliage,cap:600,shadow:!1},bushB:{geom:Uh(i+5,3,.85),material:Ft.foliage,cap:600,shadow:!1},fern:{geom:xx(i+6),material:Ft.foliage,cap:180,shadow:!1},grassA:{geom:Nh(i+7,5,1),material:Ft.foliage,cap:520,shadow:!1},grassB:{geom:Nh(i+8,4,1.5),material:Ft.foliage,cap:300,shadow:!1},flowerA:{geom:Ha(i+9,14965370),material:Ft.foliageStiff,cap:130,shadow:!1},flowerB:{geom:Ha(i+10,15909195),material:Ft.foliageStiff,cap:130,shadow:!1},flowerC:{geom:Ha(i+11,11041504),material:Ft.foliageStiff,cap:100,shadow:!1},canopyA:{geom:Fh(),material:Ft.foliageStiff,cap:1200,shadow:!1},canopyB:{geom:Fh(),material:Ft.foliageStiff,cap:1200,shadow:!1},rockA:{geom:di(i+14,0,.3,.66),material:Ft.rock,cap:220,shadow:!0},rockB:{geom:di(i+15,0,.34,.6),material:Ft.rock,cap:220,shadow:!0},rockC:{geom:di(i+16,0,.26,.72),material:Ft.rockSmooth,cap:160,shadow:!0},drift:{geom:di(i+17,0,.42,.45),material:Ft.rockSmooth,cap:140,shadow:!1},ledge:{geom:di(i+18,1,.34,.3),material:Ft.rock,cap:340,shadow:!0}}}function fl(i,t,e,n,s,r,o=1){let a=0;for(const c of e)a+=c[1];let l=t()*a;for(const c of e)if(l-=c[1]*o,l<=0){const u=c[0],h=K(t,c[2],c[3]),f=new $().setHSL(.3+K(t,-.05,.05)*(u.startsWith("rock")?-1:1),u.startsWith("rock")?.08:.35,.5+K(t,-.08,.12));return i.tryAdd(u,zt(n,s-.22*h,r,0,t()*ie,0,h,h,h),f),u}return null}function Qo(i,t,e){const{x0:n,x1:s,z0:r,z1:o,step:a,sample:l,table:c,skip:u=.35}=e;for(let h=r;h<=o;h+=a)for(let f=n;f<=s;f+=a){const p=f+K(t,-a*.45,a*.45),m=h+K(t,-a*.45,a*.45);if(t()<u)continue;const _=l(p,m);!_||!_.ok||fl(i,t,c,p,_.y,m)}}function Wu(i,t){const{x:e,z:n,r:s=60,height:r=18,level:o=me,peaks:a=1,beach:l=5.5,jitter:c=1}=i,u=t()*ie,h=t()*30,f=g=>s*(1+(qt(Math.cos(g)*1.3+Math.sin(g)*1.7+h,Math.sin(g)*1.3,3)-.5)*.52*c+(yi(Math.cos(g)*2.4+h,Math.sin(g)*2.4,2)-.55)*.26*c),p=(g,d,v,M)=>{let x=o+r*(.62+.38*Math.pow(1-v,2.6));const y=v*3,w=Math.floor(y),T=y-w;return x-=w*r*.15+r*.15*re(.42,1,T),x+=Math.pow(Math.max(0,Math.cos(M*a+u)),2)*r*.13*(1-v*v),x+=(qt(g*.035+h,d*.035,4)-.5)*r*.5*(1-v*.5),x+=(yi(g*.135+h,d*.135,3)-.55)*r*.34*(1-v),x-=Math.pow(v,4)*l*3.4,v>.86&&(x=Math.min(x,o-.4-(v-.86)*30)),x},m=(g,d)=>{const v=g-e,M=d-n,x=Math.atan2(M,v),y=Math.hypot(v,M),w=Math.pow(xe(y/Math.max(f(x),.001),0,1),1/.86);return p(g,d,w,x)};let _=s*.6;for(let g=1;g<=48;g++){const d=g/48;if(p(e,n,d,0)<=o){_=s*Math.pow(d,.86)*.96;break}}return{heights:m,radiusAt:f,crossR:_,raw:p,phase:u,noiseSeed:h,level:o,height:r,r:s,cx:e,cz:n}}function Xu(i,t){const e=xe(Math.round(i.r/14),14,30),n=xe(Math.round(i.r/7),34,72),{cx:s,cz:r,r:o,height:a,level:l}=i,c=xi(e,n,(h,f)=>{const p=h/(e-1),m=f/(n-1)*ie+i.phase,_=i.radiusAt(m)*Math.pow(p,.86),g=s+Math.cos(m)*_,d=r+Math.sin(m)*_;return{x:g,y:i.raw(g,d,p,m),z:d}}),u=i.noiseSeed;return Rn(c,(h,f,p,m)=>{const _=qt(h*.06+u,p*.06,3),g=l+3+_*2.2;if(f<g){m.copy(Oo).lerp(zo,.3+_*.6),f<l+.3&&m.lerp(Ei,re(l+.3,l-2.4,f)*.6);return}const d=Math.abs(f*.34+_*1.2),v=Math.floor(d)%ne.length,x=d-Math.floor(d)<.16?.62:1;m.copy(ne[v]).lerp(ne[(v+3)%ne.length],_*.7),m.multiplyScalar((.84+_*.3)*x);const y=re(l+10,l+26,f)*(.35+_*.75);m.lerp(ms.clone().lerp(ni,qt(h*.04,p*.04,2)),xe(y,0,.88)),f<l+1.4&&m.lerp(Ei,.5)}),c}function Lx(i,t){const e=ze(i),n=[],s=[],r=[{z:20,x:-74,r:26,h:14},{z:-20,x:88,r:20,h:10},{z:-118,x:72,r:16,h:9},{z:-150,x:-104,r:30,h:18},{z:-242,x:66,r:13,h:8},{z:-300,x:-78,r:21,h:12},{z:-378,x:96,r:27,h:16},{z:-430,x:-68,r:14,h:9},{z:-486,x:74,r:18,h:11},{z:-556,x:-92,r:23,h:15},{z:-96,x:112,r:34,h:24},{z:-404,x:-112,r:36,h:26}],o=[{z:-66,x:68,r:17,h:11},{z:-206,x:-72,r:16,h:9},{z:-350,x:64,r:18,h:12},{z:-512,x:-66,r:17,h:10},{z:-540,x:70,r:16,h:8}];for(const a of[...r,...o]){const l=Math.sign(a.x)||1,c=48+a.r*.8,u=l*Math.max(Math.abs(a.x),c),h=Wu({x:u,z:a.z,r:a.r,height:a.h,level:me,peaks:a.r>12?2:1,jitter:1.15},e),f=Xu(h,i+Math.abs(Math.round(a.z)));n.push({geom:f,matrix:zt(0,0,0)}),s.push({x:u,z:a.z,r:a.r,surf:h}),h.crossR>4&&Gu(Oi.upper,u,a.z,h.crossR,h.crossR)}for(const a of s){const l=a.surf;Qo(t,e,{x0:a.x-a.r*1.05,x1:a.x+a.r*1.05,z0:a.z-a.r*1.05,z1:a.z+a.r*1.05,step:Math.max(3.5,a.r*.22),sample:(c,u)=>{const h=l.heights(c,u),f=h>me+2.6&&Math.hypot(c-a.x,u-a.z)<l.radiusAt(Math.atan2(u-a.z,c-a.x))*.84;return{y:h,ok:f}},table:[["palmA",1.3,1.1,1.6],["palmB",1,1.1,1.6],["palmC",.7,1,1.4],["bushA",1.6,.9,1.6],["bushB",1.3,.9,1.6],["canopyA",1.1,.7,1.3],["grassA",1.4,1,1.7],["fern",.6,.8,1.2],["rockA",.9,.5,1.3],["ledge",1.5,1.1,3],["rockB",.9,.7,1.6]],skip:.24})}return{geom:Qe(n),entries:s}}function Dx(i,t){const e=ze(i),n=[],s=[{x:-430,z:-1330,r:150,h:46,peaks:3},{x:470,z:-1500,r:190,h:58,peaks:2},{x:-880,z:-1620,r:240,h:74,peaks:3},{x:900,z:-1860,r:260,h:82,peaks:2},{x:-1180,z:-2100,r:300,h:96,peaks:4},{x:1180,z:-2360,r:280,h:88,peaks:3},{x:-260,z:-1980,r:120,h:38,peaks:2},{x:320,z:-2150,r:165,h:52,peaks:3},{x:-620,z:-2680,r:340,h:110,peaks:4},{x:640,z:-2900,r:360,h:120,peaks:3},{x:-1520,z:-3050,r:420,h:130,peaks:5},{x:1560,z:-3300,r:440,h:140,peaks:4},{x:40,z:-3120,r:210,h:66,peaks:3},{x:-240,z:-3620,r:520,h:160,peaks:5},{x:400,z:-3900,r:560,h:170,peaks:4},{x:-700,z:-1500,r:130,h:34,peaks:2}];for(let r=0;r<s.length;r++){const o=s[r],a=Wu({x:o.x,z:o.z,r:o.r,height:o.h,level:Wn,peaks:o.peaks,beach:7,jitter:1.25},e);n.push({geom:Xu(a),matrix:zt(0,0,0)}),a.crossR>6&&Gu(Oi.lower,o.x,o.z,a.crossR,a.crossR*.7),o.z>-2400&&o.r<320&&Qo(t,e,{x0:o.x-o.r*1.05,x1:o.x+o.r*1.05,z0:o.z-o.r*1.05,z1:o.z+o.r*1.05,step:Math.max(9,o.r*.3),sample:(l,c)=>{const u=a.heights(l,c),h=u>Wn+5&&Math.hypot(l-o.x,c-o.z)<a.radiusAt(Math.atan2(c-o.z,l-o.x))*.86;return{y:u,ok:h}},table:[["palmA",1,1,1.6],["palmC",.7,1,1.5],["canopyA",2.2,1.2,2.6],["canopyB",2,1.2,2.6],["bushA",.8,1.1,1.9]],skip:.4})}return{geom:Qe(n)}}function kh(i,t,e){const{zs:n,ds:s,xs:r,heights:o,cols:a}=i,l=[["palmA",1.4,1.1,1.6],["palmB",1.2,1.15,1.7],["drift",.7,.5,1.2],["grassA",1.6,.9,1.6],["rockA",.8,.6,1.3],["ledge",.9,1,2.4]],c=[["palmA",1.2,1.15,1.7],["palmB",1.1,1.15,1.7],["palmC",.8,1.05,1.5],["bushA",1.6,.7,1.3],["bushB",1.4,.7,1.3],["fern",1,.8,1.2],["flowerA",.5,.8,1.2],["flowerB",.5,.8,1.2],["flowerC",.4,.8,1.2],["canopyA",1.2,.7,1.2],["rockA",.5,.6,1.2],["grassA",.8,.9,1.4],["ledge",1.1,1.4,3.4]],u=[["canopyA",2.2,1.1,2],["canopyB",2,1.1,2],["bushA",1.1,.9,1.6],["palmC",.7,1,1.5],["fern",.5,.8,1.2],["rockB",.6,.7,1.4],["ledge",.7,1.6,3.8]],h=[["rockA",1.2,.7,1.5],["rockB",1.1,.6,1.4],["ledge",1.7,1.3,3.6],["bushB",.5,.7,1.2],["grassB",.6,.8,1.4]];for(let f=0;f<n.length;f+=2){const p=n[f],m=Si(p);for(let _=0;_<s.length;_+=2){const g=s[_];if(g<7||g>250)continue;const d=f*a+_,v=o[d];if(v<m+2.3||e()<(g<70?.16:.34))continue;const M=i.slopeAt(f,_),x=r[d]+K(e,-3.4,3.4),y=p+K(e,-3.4,3.4);if(p>Xn!=y>Xn)continue;const w=ll(y,i.side,zu(x,y,i.side));if(w<Si(y)+2.3||Math.abs(w-v)>3.5)continue;let T;M>.85?T=h:g<22?T=l:g<74?T=M>.6||e()<.55?c:u:T=u,fl(t,e,T,x,w,y)}}}function Ix(i,t){Qo(i,t,{x0:-420,x1:420,z0:118,z1:400,step:7,sample:(e,n)=>{const s=Hu(e,n);return{y:s,ok:s>me+2.6}},table:[["palmA",1.4,.8,1.2],["palmB",1.2,.85,1.25],["palmC",.6,.8,1.1],["bushA",1.3,.7,1.3],["bushB",1.1,.7,1.3],["canopyA",1.4,.8,1.5],["grassA",1.2,.9,1.5],["fern",.7,.8,1.2],["flowerB",.5,.8,1.2],["rockA",.4,.6,1.2],["drift",.5,.6,1.3]],skip:.42})}function Ux(i,t){for(let e=pn-4;e>Mi+6;e-=6)for(let n=.12;n<Math.PI-.1;n+=.14){if(t()<.5)continue;const s=Ho(e,n,{x:0,y:0,z:0}),r=Ho(e,n+.12,{x:0,y:0,z:0}),o=Math.abs(r.y-s.y)/Math.max(.5,Math.abs(r.x-s.x)+1);if(s.y<26||o>.9)continue;const a=o>.5?[["rockA",1.2,.8,1.6],["rockB",1,.7,1.5],["bushB",.6,.8,1.2]]:[["canopyA",2.4,.9,1.7],["canopyB",2,.9,1.7],["palmC",.7,.8,1.2],["bushA",1.2,.8,1.4],["palmA",.5,.85,1.2]];fl(i,t,a,s.x+K(t,-2,2),s.y-.3,s.z+K(t,-2,2))}}function Nx(i){const t=Vu(i,{x:0,z:Nu,label:"START",style:"buoy"},2);return t.group.name="start-line",t}function Fx(i){nx();const t=new xn;t.name="tidebreak-world",i&&i.add(t),Nc.length=0;const e=Ph(-1,We+11),n=Ph(1,We+29),s=rx(),r=ox();t.add(...e.meshes,...n.meshes,s,r);const o=ax();t.add(o.innerMesh,o.outerMesh,o.collarMesh);const a=cx(We+41);t.add(a.group);const l=vx(),c=Px(We+200);l.setCaps(c),kh(e,l,ze(We+101)),kh(n,l,ze(We+103)),Ix(l,ze(We+105)),Ux(l,ze(We+107));const u=Lx(We+121,l),h=Dx(We+131,l),f=Sx(We+141,l),p=new Kt(f.geom,Ft.terrain);p.name="headlands",p.receiveShadow=!0,p.castShadow=!0,t.add(p);const m=new Kt(u.geom,Ft.terrain);m.name="islets",m.receiveShadow=!0,m.castShadow=!0,t.add(m);const _=new Kt(h.geom,Ft.terrain);_.name="distant-islands",_.receiveShadow=!1,t.add(_),l.build(c,t,"props");const g=[];t.traverse(D=>{if(D.isInstancedMesh&&D.name.startsWith("props:")){const G=D.name.split(":");g.push({mesh:D,cz:(parseInt(G[2],10)+.5)*95})}}),Oi.upper=Oh(Oi.upper),Oi.lower=Oh(Oi.lower);const d=dx({seed:We+7});t.add(...d.meshes);const v=gx(We+53);t.add(v.group);const M=[],x=[{z:34,side:-1,length:20,huts:3,big:!0},{z:-186,side:1,length:15,huts:2,big:!1},{z:-470,side:-1,length:14,huts:2,big:!1},{z:-1392,side:1,length:22,huts:3,big:!0}];for(let D=0;D<x.length;D++){const G=x[D],B=qs(G.z)-3,nt=Ex(We+300+D*7,{x:G.side*B,z:G.z,side:-G.side,length:G.length,huts:G.huts,big:G.big});M.push({geom:nt.geom,matrix:zt(0,0,0)})}const y=new Kt(Qe(M),Ft.wood);y.name="harbors",y.castShadow=!0,y.receiveShadow=!0,t.add(y);const w=bx(We+77);t.add(w);const T=new xn;T.name="gates",t.add(T);const R=[],S=[];for(let D=0;D<Bh.length;D++){const G=Bh[D],B=Vu(We+400+D*13,G,D);T.add(B.group),R.push(B),S.push({x:G.x,z:G.z,label:G.label,name:G.name,y:Si(G.z),halfWidth:Hs,radius:1.8,pylonL:G.x-Hs,pylonR:G.x+Hs})}const E=Nx(We+500);T.add(E.group),R.push(E);const C=Cx(We+61);t.add(C.mesh,C.lampMesh);const L=Ax(),U=Rx(L,Ft.buoy,"course-buoys");for(const D of Tx(We+83))U.add(D);for(const D of C.markers)U.add(D);U.build(t);const z=Oc.map(D=>({x:D.x,z:D.z,r:D.r,kind:"spire"}));for(const D of u.entries){const G=D.surf.crossR;G>=4&&Math.abs(D.x)<=96&&z.push({x:D.x,z:D.z,r:G,kind:"islet"})}function O(D,G,B){Bo.uTime.value=D,Bo.uWind.value.set(.26+Math.sin(D*.23)*.16,.15+Math.cos(D*.19)*.11);const nt=B?.z||0;for(const tt of Nc)tt.uniforms.uTime.value=D,tt.uniforms.uImpact.value.w=tt.uniforms.uImpact.value.z>1?.72+Math.sin(D*1.7)*.06:0;v.uniforms.uTime.value=D,v.sheetMat.uniforms.uTime.value=D,v.washMat.opacity=.28+Math.sin(D*2.3)*.05,v.churnMat.opacity=.24+Math.sin(D*3.1+1.2)*.07,a.moteUniforms.uTime.value=D,a.shaftMat.opacity=.38+Math.sin(D*.8)*.09+Math.sin(D*2.7)*.03,a.poolMat.opacity=.2+Math.sin(D*1.6)*.06;for(const tt of a.sprites){const ht=1+Math.sin(D*1.4+tt.phase)*.14;tt.sprite.scale.setScalar(tt.base*ht)}for(const tt of R){tt.group.position.y=Math.sin(D*.85+tt.bobPhase)*.14,tt.group.rotation.z=Math.sin(D*.62+tt.bobPhase*1.7)*.006;for(const ht of tt.banners)Gh(ht,D);for(const ht of tt.flags)ht.mesh&&(ht.mesh.rotation.y=D*(ht.mesh.userData.spin||1.2)+ht.phase,Gh({mesh:ht.mesh,base:ht.base,h:.9,phase:ht.phase},D,.35));for(const ht of tt.sprites){const St=1+Math.sin(D*1.9+ht.phase)*.1;ht.sprite.scale.setScalar(ht.base*St)}}if(g.length){const tt=nt;for(let ht=0;ht<g.length;ht++){const St=g[ht];St.mesh.visible=Math.abs(St.cz-tt)<520}}U.update(D);const st=.42+.3*(.5+.5*Math.sin(D*3.6));C.lampMat.color.setRGB(st*1.5,st*.36,st*.24)}return{update:O,heightAt:(D,G)=>G>Xn?me:Wn,channelHalfWidthAt:D=>Math.max(6,qs(D)-5),shorelineHalfWidthAt:D=>Math.max(6,qs(D)-1.5),gates:S,obstacles:z,caveStart:pn,caveEnd:Mi,dropZ:Xn,finishZ:j_,startZ:Nu,waterLevel:me,lowerWaterLevel:Wn,routeHalfWidth:45,gateHalfWidth:Hs,fallsHalfWidth:zr,root:t}}function Gh(i,t,e=1){const n=i.mesh.geometry,s=n.getAttribute("position"),r=s.array,o=i.base,a=i.h/2;for(let l=0;l<r.length;l+=3){const c=o[l],u=o[l+1],h=xe((a-u)/i.h,0,1),f=h*h*e;r[l]=c*(1+f*.015),r[l+1]=u-f*.34,r[l+2]=Math.sin(c*.72+t*2.3+i.phase)*.44*f+Math.sin(c*.27-t*1.35+i.phase*.6)*.3*f}s.needsUpdate=!0,n.computeVertexNormals()}const qn=Math.PI*2,Ox=(i,t,e)=>i<t?t:i>e?e:i,te=(i,t)=>i+Math.random()*(t-i),Q=i=>new $(i),Y={navyDeep:660774,navy:1385792,navyL:2111065,orange:15691035,orangeL:16748608,cream:16248796,creamL:16776177,creamD:14931639,teak:12159573,trim:1514532,chrome:14542319,bronze:13674831,steel:4739679,glass:10476784,skin:14920060,cap:2240848,vest:15682849,eHullD:462619,eHull:1187638,eHullL:2175311,eRed:11608861,eRedL:14824740,eSteel:5002336,eGlass:9313308,lampR:16726564,lampG:3532172,lampW:16774104,fxCyan:5234943};class we{constructor(){this.pos=[],this.col=[],this.idx=[],this.n=0}vert(t,e,n,s){return this.pos.push(t,e,n),s?this.col.push(s.r,s.g,s.b):this.col.push(1,1,1),this.n++}tri(t,e,n){this.idx.push(t,e,n)}quad(t,e,n,s){this.idx.push(t,e,n,t,n,s)}face(t,e,n){const s=t[1][0]-t[0][0],r=t[1][1]-t[0][1],o=t[1][2]-t[0][2],a=t[2][0]-t[0][0],l=t[2][1]-t[0][1],c=t[2][2]-t[0][2],u=r*c-o*l,h=o*a-s*c,f=s*l-r*a,m=u*(t[0][0]-n[0])+h*(t[0][1]-n[1])+f*(t[0][2]-n[2])>=0?t:[t[3],t[2],t[1],t[0]],_=this.vert(m[0][0],m[0][1],m[0][2],e),g=this.vert(m[1][0],m[1][1],m[1][2],e),d=this.vert(m[2][0],m[2][1],m[2][2],e),v=this.vert(m[3][0],m[3][1],m[3][2],e);this.quad(_,g,d,v)}plate(t,e){this.face(t,e,[0,-1e5,0]);const n=[t[3],t[2],t[1],t[0]],s=this.vert(n[0][0],n[0][1],n[0][2],e),r=this.vert(n[1][0],n[1][1],n[1][2],e),o=this.vert(n[2][0],n[2][1],n[2][2],e),a=this.vert(n[3][0],n[3][1],n[3][2],e);this.quad(s,r,o,a)}tri3(t,e,n){const s=t[1][0]-t[0][0],r=t[1][1]-t[0][1],o=t[1][2]-t[0][2],a=t[2][0]-t[0][0],l=t[2][1]-t[0][1],c=t[2][2]-t[0][2],u=r*c-o*l,h=o*a-s*c,f=s*l-r*a,m=u*(t[0][0]-n[0])+h*(t[0][1]-n[1])+f*(t[0][2]-n[2])>=0?t:[t[2],t[1],t[0]],_=this.vert(m[0][0],m[0][1],m[0][2],e),g=this.vert(m[1][0],m[1][1],m[1][2],e),d=this.vert(m[2][0],m[2][1],m[2][2],e);this.tri(_,g,d)}geom(){const t=new Re;return t.setAttribute("position",new pe(this.pos,3)),t.setAttribute("color",new pe(this.col,3)),t.setIndex(this.idx),t.computeVertexNormals(),this.pos.length&&t.computeBoundingSphere(),t}}function pi(i,t){const e=i.n;for(let n=0;n<t.pos.length;n++)i.pos.push(t.pos[n]);for(let n=0;n<t.col.length;n++)i.col.push(t.col[n]);for(let n=0;n<t.idx.length;n++)i.idx.push(t.idx[n]+e);return i.n+=t.n,i}function kt(i,t,e,n,s,r,o,a,l=0,c=0){const u=[t+c,s,r+l],h=[e-c,s,r+l],f=[e-c,s,o+l],p=[t+c,s,o+l],m=[t,n,r],_=[e,n,r],g=[e,n,o],d=[t,n,o],v=x=>i.vert(x[0],x[1],x[2],a),M=(x,y,w,T)=>{const R=v(x),S=v(y),E=v(w),C=v(T);i.quad(R,S,E,C)};M(d,m,_,g),M(u,p,f,h),M(d,g,f,p),M(_,m,u,h),M(_,h,f,g),M(m,u,p,d)}function ce(i,t,e,n,s,r,o=6){const a=e[0]-t[0],l=e[1]-t[1],c=e[2]-t[2],u=Math.hypot(a,l,c)||1e-5,h=a/u,f=l/u,p=c/u;let m=0,_=0,g=1;Math.abs(p)>.85&&(m=1,g=0);let d=f*g-p*_,v=p*m-h*g,M=h*_-f*m;const x=Math.hypot(d,v,M)||1e-5;d/=x,v/=x,M/=x;const y=f*M-p*v,w=p*d-h*M,T=h*v-f*d,R=[(t[0]+e[0])/2,(t[1]+e[1])/2,(t[2]+e[2])/2],S=[],E=[];for(let C=0;C<o;C++){const L=C/o*qn,U=Math.cos(L),z=Math.sin(L),O=d*U+y*z,D=v*U+w*z,G=M*U+T*z;S.push([t[0]+O*n,t[1]+D*n,t[2]+G*n]),E.push([e[0]+O*s,e[1]+D*s,e[2]+G*s])}for(let C=0;C<o;C++){const L=(C+1)%o;i.face([S[C],S[L],E[L],E[C]],r,R),i.tri3([E[L],E[C],[e[0],e[1],e[2]]],r,R),i.tri3([S[C],S[L],[t[0],t[1],t[2]]],r,R)}}function tr(i,t,e,n,s,r,o=10,a=6,l=1){const c=[];for(let u=0;u<=a;u++){const h=u/a*Math.PI*l,f=[];for(let p=0;p<o;p++){const m=p/o*qn;f.push(i.vert(t+Math.sin(h)*Math.cos(m)*s,e+Math.cos(h)*s,n+Math.sin(h)*Math.sin(m)*s,r))}c.push(f)}for(let u=0;u<a;u++)for(let h=0;h<o;h++){const f=(h+1)%o;i.quad(c[u][h],c[u+1][h],c[u+1][f],c[u][f])}}function dl(i,t,e,n,s){for(let r=0;r<t.length-1;r++)i.face([t[r],t[r+1],e[r+1],e[r]],n,s)}function Li(i,t,e,n,s){dl(i,t.map(r=>[r[0],r[1]+e,r[2]]),t,n,s)}function Di(i,t,e,n,s,r){const o=[];for(let x=0;x<t.length;x++){const y=[];for(let w=0;w<e.length;w++){const T=n(t[x],e[w]);y.push(i.vert(T[0],T[1],T[2],s?s(t[x],e[w]):null))}o.push(y)}const a=n(t[0],e[0]),l=n(t[0],e[1]),c=n(t[1],e[1]),u=l[0]-a[0],h=l[1]-a[1],f=l[2]-a[2],p=c[0]-a[0],m=c[1]-a[1],_=c[2]-a[2],g=h*_-f*m,d=f*p-u*_,v=u*m-h*p,M=g*(a[0]-r[0])+d*(a[1]-r[1])+v*(a[2]-r[2])<0;for(let x=0;x<t.length-1;x++)for(let y=0;y<e.length-1;y++){const w=o[x][y],T=o[x+1][y],R=o[x+1][y+1],S=o[x][y+1];M?i.quad(w,T,R,S):i.quad(w,S,R,T)}return o}function qu(i){const t=i.map(s=>({z:s[0],hb:s[1],keel:s[2],sheer:s[3]})),e=s=>{if(s<=t[0].z)return t[0];const r=t[t.length-1];if(s>=r.z)return r;for(let o=0;o<t.length-1;o++){const a=t[o],l=t[o+1];if(s>=a.z&&s<=l.z){const c=(s-a.z)/(l.z-a.z);return{z:s,hb:a.hb+(l.hb-a.hb)*c,keel:a.keel+(l.keel-a.keel)*c,sheer:a.sheer+(l.sheer-a.sheer)*c}}}return r};return{stations:t,at:e,hb:s=>e(s).hb,sheer:s=>e(s).sheer,keel:s=>e(s).keel,spans:(s,r,o)=>{const a=[];for(let l=0;l<=o;l++)a.push(s+(r-s)*l/o);return a}}}function Vh(i,t){const e=new we,n=[],s=i.stations;for(let o=0;o<s.length;o++){const a=s[o],l=[],c=(u,h)=>[u.x*a.hb*h,a.keel+u.t*(a.sheer-a.keel)+(u.dy||0)];for(let u=0;u<t.length;u++){const h=c(t[u],1);l.push(e.vert(h[0],h[1],a.z,t[u].c))}for(let u=t.length-2;u>=1;u--){const h=c(t[u],-1);l.push(e.vert(h[0],h[1],a.z,t[u].c))}n.push(l)}const r=n[0].length;for(let o=0;o<n.length-1;o++){const a=n[o],l=n[o+1];for(let c=0;c<r;c++){const u=(c+1)%r;e.quad(a[c],a[u],l[u],l[c])}}return e}function Wh(i,t){const e=new we,n=i.stations[i.stations.length-1],s=[],r=[],o=(u,h)=>[u.x*n.hb*h,n.keel+u.t*(n.sheer-n.keel)+(u.dy||0)];for(let u=0;u<t.length;u++)s.push(o(t[u],1)),r.push(t[u].c);for(let u=t.length-2;u>=1;u--)s.push(o(t[u],-1)),r.push(t[u].c);let a=0,l=0;for(const u of s)a+=u[0],l+=u[1];a/=s.length,l/=s.length;const c=[0,l,n.z-3];for(let u=0;u<s.length;u++){const h=s[u],f=s[(u+1)%s.length];e.tri3([[h[0],h[1],n.z],[f[0],f[1],n.z],[a,l,n.z]],r[u],c)}return e}function Go(i,t,e,n,s,r){const o=new we,a=[],l=[];for(const c of t){const u=i.at(c),h=e(u),f=n(u);a.push([h[0]*s,h[1],c]),l.push([f[0]*s,f[1],c])}for(let c=0;c<t.length-1;c++)o.face([a[c],a[c+1],l[c+1],l[c]],r,[0,(a[c][1]+l[c][1])/2,t[c]]);return o}const zx=[[-3.25,.02,-.03,.66],[-3.02,.22,-.13,.64],[-2.68,.52,-.244,.6],[-2.24,.86,-.3,.562],[-1.7,1.14,-.34,.526],[-1.1,1.34,-.356,.5],[-.45,1.45,-.36,.482],[.2,1.49,-.358,.472],[.9,1.5,-.35,.466],[1.6,1.5,-.34,.464],[2.25,1.46,-.322,.468],[2.72,1.4,-.3,.478],[3.08,1.32,-.268,.492]],It=qu(zx),Xh=[{x:0,t:0,c:Q(Y.navyDeep)},{x:.32,t:.175,c:Q(Y.navyDeep)},{x:.64,t:.365,c:Q(Y.navy)},{x:.88,t:.6,c:Q(Y.navy)},{x:.94,t:.622,c:Q(Y.orange)},{x:.99,t:.716,c:Q(Y.orange)},{x:1,t:.748,c:Q(Y.cream)},{x:1,t:.9,c:Q(Y.cream)},{x:1,t:1,c:Q(Y.creamL)}],Lt={z0:-.36,z1:1.22,half:.92,floor:.055,rim:.5},Yu=(i,t)=>{const e=It.at(i),n=Ox(t/(e.hb+.016),-1,1);return e.sheer+.03+.05*(1-n*n)},Bx=[[-3.06,.06,-.1,.44],[-2.78,.44,-.205,.418],[-2.36,.8,-.264,.398],[-1.8,1.12,-.3,.382],[-1.1,1.34,-.32,.372],[-.35,1.47,-.33,.364],[.45,1.5,-.33,.362],[1.25,1.5,-.32,.368],[2,1.45,-.3,.382],[2.6,1.36,-.272,.402],[3.02,1.24,-.224,.424]],Ie=qu(Bx),qh=[{x:0,t:0,c:Q(Y.eHullD)},{x:.5,t:.3,c:Q(Y.eHullD)},{x:.9,t:.58,c:Q(Y.eHull)},{x:.965,t:.604,c:Q(Y.eRed)},{x:1,t:.66,c:Q(Y.eRed)},{x:1,t:.712,c:Q(Y.eHullL)},{x:1,t:1,c:Q(Y.eHullL)}];function Hx(){const i=new we,t=It.spans(-3.16,3.06,12);for(const e of[1,-1])pi(i,Go(It,t,n=>[n.hb*1.004,n.sheer-.055],n=>[n.hb*1.004,n.sheer+.028],e,Q(Y.trim))),pi(i,Go(It,t,n=>[n.hb*1.006+.006,n.sheer-.235],n=>[n.hb*1.006+.006,n.sheer-.078],e,Q(Y.orange)));return i}function kx(){const i=new we,t=g=>[0,-3,g],e=Q(Y.orange),n=Q(Y.cream),s=Q(Y.creamL),r=It.spans(-3.2,Lt.z0-.02,8);Di(i,r,[-1,-.95,-.6,-.45,-.3,-.12,.12,.3,.45,.6,.95,1],(g,d)=>{const v=It.at(g);return[d*(v.hb+.016),v.sheer+.03+.05*(1-d*d),g]},(g,d)=>{const v=Math.abs(d);return v>.95?s:v>.45||v<.3?e:n},t(Lt.z0));for(const g of[1,-1])Li(i,r.map(d=>[g*(It.hb(d)+.016),It.sheer(d)+.03,d]),-.09,n,[0,.5,-1.8]);const l=It.spans(-1.34,Lt.z0-.02,3);Di(i,l,[-1,0,1],(g,d)=>{const v=It.at(g);return[d*Math.min(.76,v.hb),v.sheer+.105+.022*(1-d*d),g]},()=>Q(Y.orange),t(Lt.z0)),Li(i,l.map(g=>[-Math.min(.76,It.hb(g)),It.sheer(g)+.105,g]),-.11,Q(Y.creamD),[0,.5,-2.2]),kt(i,-.36,.36,It.sheer(-2.2)+.082,It.sheer(-2.2)+.118,-2.54,-1.88,Q(Y.creamD),0,.02),kt(i,-.22,.22,It.sheer(-2.2)+.115,It.sheer(-2.2)+.132,-2.46,-1.96,e,0,.01),kt(i,-.13,.13,It.sheer(-2.86)+.05,It.sheer(-2.86)+.15,-3.02,-2.74,Q(Y.steel),0,.03);for(const g of[1,-1]){const d=It.spans(Lt.z0-.02,Lt.z1,7);Di(i,d,[0,.38,.46,1],(M,x)=>{const y=It.at(M),w=Lt.half,T=y.hb+.016;return[g>0?w+(T-w)*x:-(w+(T-w)*x),y.sheer-.015+.07*x*x+.02*x,M]},(M,x)=>x>.42?e:n,t(.4)),Li(i,d.map(M=>[g*(It.hb(M)+.016),It.sheer(M)+.075,M]),-.1,n,[0,.5,.4])}Di(i,It.spans(Lt.z0,Lt.z1,6),[-1,-.45,.15,.65,1],(g,d)=>[d*Lt.half,Lt.floor,g],()=>Q(Y.teak),[0,-1,0]);const c=It.spans(Lt.z0,Lt.z1,6);for(const g of[1,-1])Li(i,c.map(d=>[g*Lt.half,Lt.rim,d]),-.445,Q(Y.navyL),[g*4,.3,(Lt.z0+Lt.z1)/2]);Li(i,It.spans(-.92,Lt.half,6).map(g=>[g,Lt.rim+.045,Lt.z0]),-.49000000000000005,Q(Y.navy),[0,.3,Lt.z0-3]),Li(i,It.spans(-.92,Lt.half,6).map(g=>[g,Lt.rim+.06,Lt.z1]),-.505,Q(Y.navy),[0,.3,Lt.z1+3]);const u=It.spans(Lt.z1,3.05,7);Di(i,u,[-1,-.95,-.62,-.45,.45,.62,.95,1],(g,d)=>{const v=It.at(g);return[d*(v.hb+.014),v.sheer+.05+.035*(1-d*d),g]},(g,d)=>{const v=Math.abs(d);return v>.45&&v<.95?e:n},t(2));for(const g of[1,-1])Li(i,u.map(d=>[g*(It.hb(d)+.014),It.sheer(d)+.05,d]),-.08,n,[0,.5,2.2]);const f=(g,d)=>{const v=It.at(g);return[d*(v.hb-.2),v.sheer+.15+.03*(1-d*d),g]};Di(i,It.spans(1.36,2.76,5),[-1,-.92,-.2,0,.2,.92,1],f,(g,d)=>{const v=Math.abs(d);return v>.2&&v<.92?e:s},t(2));for(const g of[1,-1])Li(i,It.spans(1.36,2.76,5).map(d=>[g*(It.hb(d)-.2),It.sheer(d)+.15,d]),-.135,Q(Y.creamD),[g*4,.4,2]);for(const g of[1,-1])for(const d of[1.66,2.2])kt(i,g*.3-.11,g*.3+.11,It.sheer(d)+.178,It.sheer(d)+.2,d-.18,d+.18,Q(Y.trim),0,0);const p=.46;kt(i,p-.42,p+.38,Lt.floor,Lt.floor+.5,-.32,.06,Q(Y.navy),.1,.05),kt(i,p-.4,p+.36,Lt.floor+.5,Lt.floor+.57,-.3,.04,Q(Y.creamD),.06,.04);for(const g of[-.22,0,.22])ce(i,[p+g,Lt.floor+.572,-.18],[p+g,Lt.floor+.578,-.18],.055,.048,Q(Y.trim),8),ce(i,[p+g,Lt.floor+.578,-.18],[p+g,Lt.floor+.584,-.18],.04,.034,Q(Y.creamL),8);for(const g of[1,-1]){const d=g*.46,v=Yu(-2.16,.46);kt(i,d-.22,d+.22,v-.14,v-.01,-2.48,-1.92,Q(Y.navy),0,.04),kt(i,d-.16,d+.16,v-.01,v+.04,-2.36,-2.02,Q(Y.steel),0,.03)}kt(i,-p-.38,-p+.4,Lt.floor,Lt.floor+.36,-.3,.1,Q(Y.creamD),.06,.04),kt(i,-p-.32,-p+.34,Lt.floor+.36,Lt.floor+.4,-.24,.04,Q(Y.navy),.02,.03);for(const g of[p,-p])kt(i,g-.18,g+.18,Lt.floor,Lt.floor+.24,.56-.18,.56+.18,Q(Y.steel)),kt(i,g-.32,g+.32,Lt.floor+.24,Lt.floor+.44,.56-.34,.56+.3,Q(Y.navy),.04,.02),kt(i,g-.32,g+.32,Lt.floor+.44,Lt.floor+.5,.56-.34,.56-.26,Q(Y.orangeL),.01,0),kt(i,g-.34,g-.24,Lt.floor+.44,Lt.floor+.68,.56-.32,.56+.26,Q(Y.navy),.02,0),kt(i,g+.24,g+.34,Lt.floor+.44,Lt.floor+.68,.56-.32,.56+.26,Q(Y.navy),.02,0),kt(i,g-.32,g+.32,Lt.floor+.44,Lt.floor+.96,.56+.14,.56+.38,Q(Y.navy),.09,.03),kt(i,g-.32,g+.32,Lt.floor+.88,Lt.floor+.97,.56+.26,.56+.46,Q(Y.orangeL),.02,0);const m=.44,_=Lt.floor+.41;return ce(i,[p,_+.05,m-.05],[p-.02,_+.12,m-.52],.13,.11,Q(Y.navy),6),kt(i,p-.21,p+.21,_+.1,_+.6,m-.2,m+.14,Q(Y.creamD),.02,.03),kt(i,p-.24,p+.24,_+.2,_+.52,m-.23,m+.17,Q(Y.vest),.02,.02),kt(i,p-.24,p+.24,_+.5,_+.6,m-.23,m+.15,Q(Y.orangeL),.01,.03),kt(i,p-.23,p+.23,_+.58,_+.68,m-.19,m+.13,Q(Y.vest),.02,.05),ce(i,[p-.19,_+.6,m-.12],[p-.17,_+.44,m-.74],.075,.06,Q(Y.skin),6),ce(i,[p+.18,_+.6,m-.12],[p+.16,_+.46,m-.72],.075,.06,Q(Y.skin),6),ce(i,[p,_+.6,m-.02],[p,_+.66,m-.02],.085,.085,Q(Y.skin),8),tr(i,p,_+.75,m-.03,.135,Q(Y.skin),10,7),tr(i,p,_+.8,m-.05,.142,Q(Y.cap),10,5,.55),kt(i,p-.155,p+.155,_+.75,_+.775,m-.26,m-.06,Q(Y.cap)),i}function Gx(){const i=new we;for(const t of[1,-1]){const e=[-2.74,-1.92,-1.1].map(o=>[t*(It.hb(o)-.06),It.sheer(o)+.18,o]);for(let o=0;o<e.length-1;o++)ce(i,e[o],e[o+1],.022,.022,Q(Y.chrome),5);for(const o of e)ce(i,[o[0],Yu(o[2],Math.abs(o[0]))-.04,o[2]],o,.024,.02,Q(Y.chrome),5);for(const o of[1.95,2.62]){const a=t*(It.hb(o)-.18);ce(i,[a,It.sheer(o)+.06,o-.1],[a,It.sheer(o)+.06,o+.1],.026,.026,Q(Y.chrome),6),ce(i,[a,It.sheer(o)+.05,o],[a,It.sheer(o)+.11,o],.02,.02,Q(Y.chrome),6)}const n=t*.46,s=.88;ce(i,[n,s-.26,-2.16],[n,s-.05,-2.16],.135,.105,Q(Y.steel),8),ce(i,[n,s,-2.02],[n,s+.012,-2.94],.055,.046,Q(Y.steel),8),ce(i,[n,s+.016,-2.86],[n,s+.018,-3.02],.07,.06,Q(Y.chrome),8),ce(i,[n,s-.02,-2.08],[n,s+.035,-2.62],.028,.022,Q(Y.chrome),5);for(const o of[-1,1])i.tri3([[n+o*.05,s-.18,-2.34],[n+o*.05,s+.02,-2.34],[n+o*.19,s-.08,-2.42]],Q(Y.orange),[n,s-.4,-2.3]);t<0&&(ce(i,[-.98,It.sheer(2.9)+.17,2.9],[-.98,It.sheer(2.9)+.68,2.86],.022,.016,Q(Y.chrome),5),ce(i,[-.98,It.sheer(2.9)+.6,2.86],[-1.3,It.sheer(2.9)+.58,2.84],.02,.02,Q(Y.chrome),5));const r=t*.62;ce(i,[r,.02,3.22],[r,.36,3.22],.1,.11,Q(Y.steel),6),tr(i,r,-.1,3.2,.125,Q(Y.navyDeep),10,6),kt(i,r-.115,r+.115,-.22,-.06,3.06,3.34,Q(Y.navyDeep),0,.04),kt(i,r-.022,r+.022,-.4,-.12,3.06,3.28,Q(Y.navyDeep))}return i}function Vx(){const i=new we;for(const t of[1,-1]){const e=t*.62;kt(i,e-.1,e+.1,.04,.46,2.88,3.06,Q(Y.navy),0,.02),ce(i,[e-.16,.46,2.98],[e+.16,.46,2.98],.035,.035,Q(Y.chrome),8),kt(i,e-.22,e+.22,.3,.6,2.86,3.36,Q(Y.cream),.05,.06),kt(i,e-.22,e+.22,.6,.9,2.86,3.36,Q(Y.orange),.05,.06),kt(i,e-.22,e+.22,.9,.99,2.92,3.34,Q(Y.orangeL),.02,.05),kt(i,e-.225,e+.225,.46,.58,2.85,3.37,Q(Y.navy),0,0),kt(i,e-.12,e+.12,.24,.32,2.86,3.06,Q(Y.steel),0,.02)}return i}function Wx(){const i=new we;for(let t=0;t<3;t++){const e=t/3*qn+.5;ce(i,[0,0,0],[Math.cos(e)*.185,Math.sin(e)*.185,0],.019,.014,Q(Y.chrome),5)}return ce(i,[0,0,-.04],[0,0,.05],.055,.045,Q(Y.navyDeep),8),i}function Xx(){const i=new we,t=[],e=[];for(const n of[-.94,-.48,0,.48,.94]){const s=Math.abs(n)/.94;t.push([n,Lt.rim+.03,-.42+.16*s]),e.push([n*.99,Lt.rim+.56-.05*s,-.16+.2*s])}return dl(i,t,e,Q(Y.glass),[0,.5,-2]),i}function Yh(i,t,e,n){const s=new we;ce(s,[0,0,e+.1],[0,0,e-.02],.062,.05,Q(Y.steel),8);for(let r=0;r<i;r++){const o=r/i*qn+(i===3?.3:0),a=Math.cos(o),l=Math.sin(o),c=(m,_,g)=>[a*m,l*m,e+(g||0)+_],u=c(.055,-.055),h=c(.055,.055),f=c(t,.085,.035),p=c(t,-.025,.035);s.plate([u,h,f,p],n)}return ce(s,[0,0,e-.02],[0,0,e-.14],.05,.008,Q(Y.chrome),8),s}function qx(){const i=new we,t=Ie.spans(-3,3,10);for(const e of[1,-1]){pi(i,Go(Ie,t,n=>[n.hb*1.008,n.sheer-.075],n=>[n.hb*1.008,n.sheer+.02],e,Q(Y.eRedL))),pi(i,Go(Ie,t,n=>[n.hb*1.01,n.sheer+.02],n=>[n.hb*1.01,n.sheer+.1],e,Q(Y.eSteel)));for(let n=0;n<5;n++){const s=-1.72+n*.88,r=Ie.hb(s),o=Ie.sheer(s);i.tri3([[e*r,o+.09,s],[e*r,o+.09,s+.36],[e*(r+.2),o-.22,s+.2]],Q(Y.eHullD),[e*-2,o,s])}}return i.tri3([[.1,-.1,-3.16],[.12,.26,-3.1],[0,.16,-2.92]],Q(Y.eSteel),[0,0,-2]),i.tri3([[-.1,-.1,-3.16],[-.12,.26,-3.1],[0,.16,-2.92]],Q(Y.eSteel),[0,0,-2]),i.tri3([[0,-.1,-3.16],[0,.26,-3.1],[0,.16,-2.92]],Q(Y.eRed),[0,-1,-3.4]),i}function Yx(){const i=new we,t=s=>[0,-3,s];for(const s of[1,-1]){const r=Ie.spans(-2.94,2.98,8);Di(i,r,[0,.5,1],(o,a)=>{const l=Ie.at(o),c=l.hb+.01,h=c+(.44-c)*a;return[s>0?h:-h,l.sheer-.02+.2*a,o]},()=>Q(Y.eHull),t(0))}Di(i,Ie.spans(-2.9,2.98,7),[-.44,0,.44],(s,r)=>[r,Ie.sheer(s)+.185,s],()=>Q(Y.eHullL),t(0));const e=Ie.sheer(0)+.185;kt(i,-.68,.68,e,e+.6,-.88,.8,Q(Y.eHullL),0,.22),kt(i,-.5,.5,e+.58,e+.7,-.72,.64,Q(Y.eHullD),.02,.06),kt(i,-.48,.48,e+.48,e+.6,-.94,-.8,Q(Y.eHullD),.02,.03);const n=Ie.sheer(-1.3)+.185;ce(i,[0,n,-1.24],[0,n,-1.4],.1,.082,Q(Y.eHullD),8);for(const s of[1,-1])i.tri3([[s*.72,Ie.sheer(2.4)+.22,2.3],[s*.72,Ie.sheer(2.4)+.62,2.6],[s*.72,Ie.sheer(2.4)+.2,2.86]],Q(Y.eRed),[s*-2,.5,2.5]),i.tri3([[s*.74,Ie.sheer(-2)+.16,-2.3],[s*.74,Ie.sheer(-2)+.5,-1.9],[s*.74,Ie.sheer(-2)+.14,-1.5]],Q(Y.eHullD),[s*-2,.4,-1.9]);return kt(i,-.36,.36,.02,.86,2.84,3.44,Q(Y.eHull),.06,.08),kt(i,-.36,.36,.86,.96,2.9,3.4,Q(Y.eHullD),.02,.05),kt(i,-.375,.375,.46,.58,2.82,3.46,Q(Y.eRed),0,0),i}function $x(){const i=new we;for(const t of[1,-1]){const e=t*.5,n=.94;kt(i,e-.22,e+.22,.5,.8,-2.2,-1.7,Q(Y.eSteel),0,.03),ce(i,[e,n,-1.78],[e,n+.01,-2.8],.052,.044,Q(Y.eSteel),8),ce(i,[e,n+.014,-2.72],[e,n+.016,-2.92],.068,.058,Q(Y.eHullD),8),i.tri3([[e-.08,n-.12,-2.06],[e-.08,n+.06,-2.06],[e-.28,n-.02,-2.14]],Q(Y.eRed),[e,n-.5,-2]),i.tri3([[e+.08,n-.12,-2.06],[e+.08,n+.06,-2.06],[e+.28,n-.02,-2.14]],Q(Y.eRed),[e,n-.5,-2])}return ce(i,[0,-.06,3.3],[0,.3,3.3],.1,.11,Q(Y.eSteel),6),tr(i,0,-.17,3.28,.14,Q(Y.eHullD),10,6),kt(i,-.13,.13,-.28,-.13,3.1,3.46,Q(Y.eHullD),0,.04),kt(i,-.024,.024,-.44,-.18,3.1,3.4,Q(Y.eHullD)),i}function Kx(){const i=new we,t=Ie.sheer(0)+.185,e=[],n=[];for(const s of[-.6,-.3,0,.3,.6]){const r=Math.abs(s)/.6;e.push([s,t+.22-.01*r,-.906+.02*r]),n.push([s*.86,t+.46-.01*r,-.906+.02*r])}return dl(i,e,n,Q(Y.eGlass),[0,t+.3,1]),i}function $h(i){const t=i==="enemy",e=n=>new Ge(n);return{hull:e({vertexColors:!0,roughness:.3,metalness:.07,flatShading:t}),dress:e({vertexColors:!0,roughness:.52,metalness:.05,flatShading:t}),metal:e({vertexColors:!0,roughness:.3,metalness:.4,flatShading:t}),glass:e({color:t?Y.eGlass:Y.glass,roughness:.08,metalness:.12,transparent:!0,opacity:t?.66:.42,depthWrite:!1,side:Ue,emissive:t?5901576:662050,emissiveIntensity:t?.6:.2}),lampR:e({color:Y.lampR,emissive:Y.lampR,emissiveIntensity:2,roughness:.4}),lampG:e({color:Y.lampG,emissive:Y.lampG,emissiveIntensity:1.8,roughness:.4}),lampW:e({color:Y.lampW,emissive:Y.lampW,emissiveIntensity:1.4,roughness:.4})}}const Kh={hero:$h("hero"),enemy:$h("enemy")},Zh=new Map;function He(i,t){let e=Zh.get(i);return e||(e=t(),Zh.set(i,e)),e}function ee(i,t,e,n=!0){const s=new Kt(i,t);return s.name=e,s.castShadow=n,s.receiveShadow=!0,s}function Zx(i){return He("boat."+i,()=>{if(i==="hero"){const s=Vh(It,Xh);pi(s,Wh(It,Xh));const r=kx();pi(r,Hx()),pi(r,Vx());const o=Gx();return{hull:s.geom(),dress:r.geom(),metal:o.geom(),glass:Xx().geom(),prop:Yh(3,.24,3.3,Q(Y.bronze)).geom(),wheelSpokes:Wx().geom()}}const t=Vh(Ie,qh);pi(t,Wh(Ie,qh));const e=Yx();pi(e,qx());const n=$x();return{hull:t.geom(!0),dress:e.geom(!0),metal:n.geom(!0),glass:Kx().geom(!0),prop:Yh(4,.26,3.5,Q(Y.eRedL)).geom()}})}function $u({enemy:i=!1}={}){const t=i?"enemy":"hero",e=Zx(t),n={};for(const c in Kh[t])n[c]=Kh[t][c].clone();const s=new xn;s.name=i?"enemyBoat":"heroBoat",s.add(ee(e.hull,n.hull,"hull")),s.add(ee(e.dress,n.dress,"dress")),s.add(ee(e.metal,n.metal,"metal")),e.glass&&e.glass.attributes.position.count>0&&s.add(ee(e.glass,n.glass,"glass",!1));const r=[];if(i){const c=ee(e.prop,n.metal,"propeller");c.position.set(0,-.17,0),r.push(c),s.add(c);const u=ee(Fn(.075,8,5),n.lampR,"eye",!1);u.position.set(0,Ie.sheer(-1.3)+.185,-1.42),s.add(u)}else{for(const u of[1,-1]){const h=ee(e.prop,n.metal,"propeller");h.position.set(u*.62,-.1,0),r.push(h),s.add(h)}const c=new xn;c.name="wheel",c.add(ee(He("hero.wheelRim",()=>new Qs(.19,.03,6,16)),n.metal,"wheelRim",!1)),c.add(ee(e.wheelSpokes,n.metal,"wheelSpokes",!1)),c.position.set(.46,Lt.floor+.805,-.24),c.rotation.x=-.42,s.add(c)}const o=i?[.5,.955,-2.92]:[.46,.895,-3];for(const c of[1,-1]){const u=new Ve;u.name=c>0?"muzzleR":"muzzleL",u.position.set(c*o[0],o[1],o[2]),s.add(u)}const a=i?[[-.13,Ie.sheer(-2.95)+.14,-2.95,"lampR"],[.13,Ie.sheer(-2.95)+.14,-2.95,"lampG"]]:[[-(It.hb(-2.62)-.11),It.sheer(-2.62)+.1,-2.62,"lampR"],[It.hb(-2.62)-.11,It.sheer(-2.62)+.1,-2.62,"lampG"]];for(const[c,u,h,f]of a){const p=ee(Fn(.055,8,5),n[f],"lamp",!1);p.position.set(c,u,h),s.add(p)}const l=ee(Fn(.048,8,5),n.lampW,"sternLamp",!1);return l.position.set(i?0:-.98,i?Ie.sheer(2.8)+.25:It.sheer(2.9)+.69,i?2.8:2.86),s.add(l),s.userData={type:"boat",enemy:i,length:i?6.67:6.62,width:3,propellers:r,prop:r[0],muzzles:[s.getObjectByName("muzzleL"),s.getObjectByName("muzzleR")]},s}function Fn(i,t,e){return He(`sph.${i}.${t}.${e}`,()=>{const n=new we;return tr(n,0,0,0,i,null,t,e),n.geom()})}function Jx(){const i=new we,t=Q(Y.navy),e=Q(Y.navyDeep),n=Q(Y.cream),s=Q(Y.orange),r=Q(Y.steel);kt(i,-.24,.24,-.07,.09,-.4,.34,n,0,.03),kt(i,-.24,.24,.09,.16,-.3,.26,t,.02,.08),kt(i,-.245,.245,.005,.055,-.34,.3,s,0,0),kt(i,-.2,.2,-.13,-.07,-.32,.28,e,.02,.03),kt(i,-.14,.14,-.02,.09,-.5,-.38,t,0,.03),ce(i,[0,.02,-.5],[0,.02,-.585],.075,.06,e,8);for(const _ of[1,-1])for(const g of[1,-1])ce(i,[_*.15,.02,g*.15],[_*.46,.1,g*.46],.048,.034,r,4),ce(i,[_*.46,0,g*.46],[_*.46,.15,g*.46],.06,.046,t,8);for(const _ of[1,-1])ce(i,[_*.15,-.12,-.22],[_*.15,-.23,-.1],.03,.026,e,4),ce(i,[_*.15,-.23,-.1],[_*.15,-.23,.22],.026,.026,r,4),ce(i,[_*.15,-.12,.16],[_*.15,-.23,.22],.028,.024,e,4);ce(i,[-.13,.16,.22],[-.19,.42,.32],.012,.008,r,4);const o=new xn;o.name="drone";const a=new Ge({vertexColors:!0,roughness:.42,metalness:.18,flatShading:!0}),l=new Ge({color:727586,emissive:Y.fxCyan,emissiveIntensity:2.2,roughness:.25,metalness:.2}),c=new Ge({color:1712947,roughness:.55,metalness:.1,side:Ue,transparent:!0,opacity:.85});o.add(ee(i.geom(!0),a,"body"));const u=ee(Fn(.062,8,5),l,"eye",!1);u.position.set(0,.02,-.58),o.add(u);const h=ee(Fn(.028,6,4),l,"antennaTip",!1);h.position.set(-.19,.42,.32),o.add(h);const f=He("drone.rotor",()=>{const _=new we;for(let g=0;g<2;g++){const d=g*Math.PI,v=Math.cos(d),M=Math.sin(d),x=(y,w)=>[v*y-M*w,0,M*y+v*w];_.plate([x(.03,-.035),x(.03,.035),x(.26,.05),x(.26,-.05)],null)}return _.geom()}),p=[];for(const _ of[1,-1])for(const g of[1,-1]){const d=ee(f,c,"rotor",!1);d.position.set(_*.46,.155,g*.46),d.rotation.y=te(0,qn),p.push(d),o.add(d);const v=ee(Fn(.038,6,4),l,"hub",!1);v.position.set(_*.46,.16,g*.46),o.add(v)}const m=ee(Fn(.03,6,4),l,"strobe",!1);return m.position.set(0,.17,.2),o.add(m),o.userData={type:"drone",rotors:p,radius:.62},o}const Jh={boost:{main:16751658,glow:16767091},shield:{main:1741782,glow:14481663},double:{main:5109146,glow:14090216}};function jx(i="boost"){const t=Jh[i]?i:"boost",e=Jh[t],n=new xn;n.name="pickup_"+t;const s=new Ge({color:e.main,emissive:e.main,emissiveIntensity:.45,roughness:.32,metalness:.35}),r=new Ge({color:e.glow,emissive:e.glow,emissiveIntensity:1.7,roughness:.3,metalness:.2}),o=new tn({color:e.glow,transparent:!0,opacity:.32,blending:bn,depthWrite:!1,side:Ue}),a=ee(He("pk.ring",()=>new Qs(.6,.052,6,20)),s,"ring",!1);a.rotation.x=Math.PI/2,a.position.y=-.36,n.add(a);const l=ee(He("pk.ringIn",()=>new Qs(.4,.026,6,16)),r,"ringInner",!1);l.rotation.x=Math.PI/2,l.position.y=-.36,n.add(l);const c=ee(He("pk.pool",()=>new $o(.8,20).rotateX(-Math.PI/2)),o,"pool",!1);c.position.y=-.34,n.add(c);for(let h=0;h<4;h++){const f=h/4*qn+Math.PI/4,p=ee(Fn(.055,6,4),r,"stud",!1);p.position.set(Math.cos(f)*.6,-.3,Math.sin(f)*.6),n.add(p)}const u=ee(Fn(.12,10,6),r,"core",!1);if(u.position.set(0,.1,-.2),n.add(u),t==="boost"){const h=He("pk.arm",()=>{const p=new we;return kt(p,-.062,.062,-.15,.15,-.055,.055,null),p.geom()});for(const p of[0,.26])for(const m of[1,-1]){const _=ee(h,s,"chevron",!1);_.position.set(m*.085,p,0),_.rotation.z=m*-.5,n.add(_)}const f=ee(Fn(.075,8,5),r,"chevronHub",!1);f.position.set(0,.1,-.18),n.add(f)}else if(t==="shield"){const h=He("pk.hex",()=>{const g=new we,d=.34,v=.065,M=[],x=[];for(let y=0;y<6;y++){const w=y/6*qn+Math.PI/6;M.push([Math.cos(w)*d,Math.sin(w)*d,-v]),x.push([Math.cos(w)*d,Math.sin(w)*d,v])}for(let y=0;y<6;y++){const w=(y+1)%6;g.face([M[y],M[w],x[w],x[y]],null,[0,0,0]),g.tri3([M[y],M[w],[0,0,-v]],null,[0,0,1]),g.tri3([x[y],x[w],[0,0,v]],null,[0,0,-1])}return g.geom(!0)}),f=ee(h,s,"shield",!1);f.position.y=.1,n.add(f);const p=ee(Fn(.095,10,6),r,"boss",!1);p.position.y=.1,n.add(p);const m=He("pk.rib",()=>{const g=new we;return kt(g,-.032,.032,-.27,.27,-.02,.02,null),kt(g,-.19,.19,-.032,.032,-.02,.02,null),g.geom()}),_=ee(m,r,"rib",!1);_.position.y=.1,n.add(_)}else{const h=He("pk.diamond",()=>{const p=new we,m=.165,_=.19,g=[];for(let d=0;d<4;d++){const v=d/4*qn+Math.PI/4;g.push([Math.cos(v)*m,0,Math.sin(v)*m])}for(let d=0;d<4;d++){const v=(d+1)%4;p.tri3([g[d],g[v],[0,_,0]],null,[0,0,0]),p.tri3([g[v],g[d],[0,-_,0]],null,[0,0,0])}return p.geom(!0)});for(let p=0;p<2;p++){const m=ee(h,s,"diamond",!1);m.position.y=.06+p*.26,n.add(m)}const f=ee(He("pk.link",()=>{const p=new we;return kt(p,-.05,.05,-.1,.1,-.05,.05,null),p.geom()}),r,"link",!1);f.position.y=.19,n.add(f)}return n.userData={type:"pickup",kind:t,radius:.62},n}function Qx(){const i=new xn;i.name="mine";const t=new Ge({color:3093308,roughness:.7,metalness:.38,flatShading:!0}),e=new Ge({color:7028784,roughness:.86,metalness:.18,flatShading:!0}),n=new Ge({color:Y.cream,roughness:.7,metalness:.05,flatShading:!0,side:Ue}),s=new Ge({color:16060932,emissive:12585474,emissiveIntensity:1.1,roughness:.3,side:Ue}),r=.4,o=ee(He("mine.shell",()=>new ps(r,0)),t,"shell");i.add(o);const a=(1+Math.sqrt(5))/2,l=[];for(const M of[1,-1])for(const x of[1,-1])l.push([0,M,x*a],[M,x*a,0],[x*a,0,M]);const c=He("mine.spikes",()=>{const M=new we;for(const x of l){const y=Math.hypot(x[0],x[1],x[2]),w=[x[0]/y,x[1]/y,x[2]/y];ce(M,[w[0]*r*.86,w[1]*r*.86,w[2]*r*.86],[w[0]*(r+.32),w[1]*(r+.32),w[2]*(r+.32)],.068,.012,null,4)}return M.geom(!0)});i.add(ee(c,t,"spikes",!1));const u=(M,x,y,w,T)=>{const R=new we,S=[],E=[],C=[],L=[];for(let U=0;U<T;U++){const z=U/T*qn,O=Math.cos(z),D=Math.sin(z);S.push([O*M,y,D*M]),E.push([O*M,w,D*M]),C.push([O*x,y,D*x]),L.push([O*x,w,D*x])}for(let U=0;U<T;U++){const z=(U+1)%T;R.face([S[U],S[z],E[z],E[U]],null,[0,(y+w)/2,0]),R.face([L[U],L[z],E[z],E[U]],null,[0,(y+w)/2-2,0]),R.face([C[U],C[z],S[z],S[U]],null,[0,(y+w)/2+2,0])}return R.geom()},h=ee(He("mine.band",()=>u(.442,.28,-.085,.085,12)),n,"band",!1);i.add(h);const f=ee(He("mine.bandR",()=>u(.362,.22,-.225,-.135,12)),s,"warnLow",!1);i.add(f);const p=ee(He("mine.bandR2",()=>u(.362,.22,.135,.225,12)),s,"warnHigh",!1);i.add(p);const m=He("mine.tether",()=>{const M=new we,x=10,y=.16;for(let w=0;w<x;w++){const T=w/x*qn,R=(w+1)/x*qn;ce(M,[Math.cos(T)*y,-.5,Math.sin(T)*y],[Math.cos(R)*y,-.5,Math.sin(R)*y],.034,.034,null,4)}return M.geom(!0)});i.add(ee(m,e,"tether",!1));const _=ee(He("mine.housing",()=>{const M=new we;return kt(M,-.09,.09,.33,.45,-.09,.09,null),M.geom(!0)}),e,"housing",!1);i.add(_);const g=ee(Fn(.095,10,6),s,"signal",!1);g.position.y=.52,i.add(g);const d=ee(He("mine.halo",()=>new $o(.26,16).rotateX(-Math.PI/2)),new tn({color:Y.lampR,transparent:!0,opacity:.26,blending:bn,depthWrite:!1,side:Ue}),"signalHalo",!1);d.position.y=.56,i.add(d);const v=ee(He("mine.growth",()=>{const M=new we;for(const x of[[.3,-.24,.16],[-.26,-.26,-.18],[.05,-.36,.1],[-.16,-.2,.28]])tr(M,x[0],x[1],x[2],.062,null,6,4);return M.geom(!0)}),e,"growth",!1);return i.add(v),i.userData={type:"mine",radius:.8,signal:g},i}function tv(i){const e=new dp;e.setAttribute("position",new pe([-.5,-.5,0,.5,-.5,0,.5,.5,0,-.5,.5,0],3)),e.setIndex([0,1,2,0,2,3]);const n=new zs(new Float32Array(2200*3),3),s=new zs(new Float32Array(2200*3),3),r=new zs(new Float32Array(2200),1),o=new zs(new Float32Array(2200),1);for(const L of[n,s,r,o])L.setUsage(Ws);e.setAttribute("iPos",n),e.setAttribute("iCol",s),e.setAttribute("iSize",r),e.setAttribute("iAlpha",o),e.instanceCount=0;const a=new cn({transparent:!0,depthWrite:!1,blending:bn,side:Ue,vertexShader:["attribute vec3 iPos;","attribute vec3 iCol;","attribute float iSize;","attribute float iAlpha;","varying vec2 vC;","varying vec3 vCol;","varying float vA;","void main() {","  vC = position.xy;","  vCol = iCol;","  vA = iAlpha;","  vec4 mv = modelViewMatrix * vec4(iPos, 1.0);","  mv.xy += position.xy * iSize;","  gl_Position = projectionMatrix * mv;","}"].join(`
`),fragmentShader:["varying vec2 vC;","varying vec3 vCol;","varying float vA;","void main() {","  float r = length(vC) * 2.0;","  if (r > 1.0) discard;","  float halo = smoothstep(1.0, 0.05, r);","  float core = smoothstep(0.42, 0.0, r);","  vec3 c = vCol * (0.85 + 0.95 * core);","  float a = (halo * 0.80 + core * 0.40) * vA;","  gl_FragColor = vec4(c, a);","  #include <colorspace_fragment>","}"].join(`
`)}),l=new Kt(e,a);l.name="effects",l.frustumCulled=!1,l.renderOrder=6,l.matrixAutoUpdate=!1,i.add(l);const c=new Float32Array(2200*3),u=new Float32Array(2200),h=new Float32Array(2200),f=new Float32Array(2200),p=new Float32Array(2200),m=new Float32Array(2200),_=new Float32Array(2200),g=new Float32Array(2200);let d=0;function v(L,U){if(L===U)return;for(let O=0;O<3;O++){let D=c[L*3+O];c[L*3+O]=c[U*3+O],c[U*3+O]=D,D=n.array[L*3+O],n.array[L*3+O]=n.array[U*3+O],n.array[U*3+O]=D,D=s.array[L*3+O],s.array[L*3+O]=s.array[U*3+O],s.array[U*3+O]=D}let z=u[L];u[L]=u[U],u[U]=z,z=h[L],h[L]=h[U],h[U]=z,z=f[L],f[L]=f[U],f[U]=z,z=p[L],p[L]=p[U],p[U]=z,z=m[L],m[L]=m[U],m[U]=z,z=_[L],_[L]=_[U],_[U]=z,z=g[L],g[L]=g[U],g[U]=z,z=r.array[L],r.array[L]=r.array[U],r.array[U]=z,z=o.array[L],o.array[L]=o.array[U],o.array[U]=z}function M(L,U,z,O,D,G,B,nt,st,tt,ht,St,Tt,Ut,q){d>=2200&&(v(0,2199),d=2199);const Z=d++,lt=Z*3;n.array[lt]=L,n.array[lt+1]=U,n.array[lt+2]=z,c[lt]=O,c[lt+1]=D,c[lt+2]=G,s.array[lt]=st,s.array[lt+1]=tt,s.array[lt+2]=ht,r.array[Z]=B,o.array[Z]=St,u[Z]=Tt,h[Z]=Tt,f[Z]=B,p[Z]=nt,m[Z]=Ut,_[Z]=q,g[Z]=St}const x=new $,y=new $,w=new $(1,1,1);function T(L,U,z=24,O=1){const D=x.set(U);y.copy(D).lerp(w,.42);const G=L.x,B=L.y,nt=L.z,st=Math.max(1,Math.round(z));for(let St=0;St<st;St++){let Tt=te(-1,1),Ut=te(-.2,1),q=te(-1,1);const Z=Math.hypot(Tt,Ut,q)||1;Tt/=Z,Ut/=Z,q/=Z;const lt=te(2.2,6.4)*O,Bt=te(0,1);M(G+te(-.12,.12)*O,B+te(-.06,.18)*O,nt+te(-.12,.12)*O,Tt*lt,Ut*lt+te(.6,1.8)*O,q*lt,te(.26,.62)*O,1.7,D.r+(y.r-D.r)*Bt,D.g+(y.g-D.g)*Bt,D.b+(y.b-D.b)*Bt,te(.5,.95),te(.38,.8),2,1.3)}const tt=Math.max(2,Math.round(st/3));for(let St=0;St<tt;St++){let Tt=te(-1,1),Ut=te(-.2,1),q=te(-1,1);const Z=Math.hypot(Tt,Ut,q)||1;Tt/=Z,Ut/=Z,q/=Z;const lt=te(.5,1.7)*O;M(G+te(-.2,.2)*O,B+te(0,.3)*O,nt+te(-.2,.2)*O,Tt*lt,Ut*lt*.6+te(.2,.7)*O,q*lt,te(.7,1.5)*O,1,D.r*.5+.28,D.g*.5+.26,D.b*.5+.22,te(.14,.3),te(.8,1.5),1.5,-.6)}const ht=Math.max(3,Math.round(st/5));for(let St=0;St<ht;St++){let Tt=te(-1,1),Ut=te(0,1),q=te(-1,1);const Z=Math.hypot(Tt,Ut,q)||1;Tt/=Z,Ut/=Z,q/=Z;const lt=te(6,12)*O;M(G,B+.1*O,nt,Tt*lt,Ut*lt*.7+2.2*O,q*lt,te(.05,.1)*O,.2,1,.86,.55,1,te(.45,.85),.5,9)}}function R(L,U,z=1){const O=x.set(U);M(L.x+te(-.32,.32)*z,L.y+te(-.04,.1)*z,L.z+te(-.32,.32)*z,te(-.35,.35)*z,te(.1,.5)*z,te(-.35,.35)*z,te(.3,.66)*z,1.6,O.r,O.g,O.b,te(.16,.34),te(.9,1.6),1.25,-.35)}function S(L,U){U<=0||(L.addUpdateRange&&L.clearUpdateRanges&&(L.clearUpdateRanges(),L.addUpdateRange(0,U*L.itemSize)),L.needsUpdate=!0)}function E(L){if(!(L>0))return;L>.05&&(L=.05);let U=0;for(;U<d;){const z=u[U]-L;if(z<=0){v(U,d-1),d--;continue}u[U]=z;const O=z/h[U],D=U*3,G=m[U]*L,B=G>1?0:1-G;c[D]*=B,c[D+1]=c[D+1]*B-_[U]*L,c[D+2]*=B,n.array[D]+=c[D]*L,n.array[D+1]+=c[D+1]*L,n.array[D+2]+=c[D+2]*L,r.array[U]=f[U]*(1+p[U]*(1-O));const nt=O>.9?(1-O)/.1:1;o.array[U]=g[U]*(.4*O+.6*O*O)*nt,U++}e.instanceCount=d,d>0&&(S(n,d),S(s,d),S(r,d),S(o,d))}function C(){d=0,e.instanceCount=0}return{burst:T,trail:R,update:E,clear:C}}function Ku(i){const e=Array.from({length:90},()=>({x:0,y:0,z:0,yaw:0,age:10})),n=new Float32Array(360*3),s=new Float32Array(360),r=new Float32Array(360*2),o=[];for(let f=0;f<90;f++){for(let p=0;p<4;p++)r[(f*4+p)*2]=p%2,r[(f*4+p)*2+1]=f;if(f<89)for(let p=0;p<2;p++){const m=f*4+p*2,_=m+4;o.push(m,_,m+1,m+1,_,_+1)}}const a=new Re;a.setAttribute("position",new ae(n,3).setUsage(Ws)),a.setAttribute("opacity",new ae(s,1).setUsage(Ws)),a.setAttribute("uv",new ae(r,2)),a.setIndex(o);const l=new cn({transparent:!0,depthWrite:!1,side:Ue,vertexShader:"attribute float opacity; varying float a; varying vec2 v; void main(){a=opacity;v=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying float a; varying vec2 v; void main(){float edge=sin(v.x*3.14159);float foam=.65+.35*sin(v.y*8.0+v.x*10.);gl_FragColor=vec4(.82,1.,.94,a*edge*foam);}"}),c=new Kt(a,l);c.frustumCulled=!1,c.renderOrder=2,i.add(c);let u=0,h=0;return{reset(){u=0,h=0,a.setDrawRange(0,0)},update(f,p,m,_,g){for(let d=0;d<u;d++)e[d].age+=f;if(h-=f,g&&_>5&&h<=0){h=.035,u=Math.min(90,u+1);for(let d=u-1;d>0;d--)Object.assign(e[d],e[d-1]);Object.assign(e[0],{x:p.x+Math.sin(m)*3,y:p.y+.16,z:p.z+Math.cos(m)*3,yaw:m,age:0})}for(let d=0;d<u;d++){const v=e[d],M=1+v.age*2.5,x=.35+v.age*.85;for(let y=0;y<4;y++){const w=y<2?-1:1,T=w*(M+(y%2?x:0)),R=(d*4+y)*3;n[R]=v.x+Math.cos(v.yaw)*T,n[R+1]=v.y+Math.sin(v.age*5)*.025,n[R+2]=v.z-Math.sin(v.yaw)*T,s[d*4+y]=Math.max(0,1-v.age/3.2)*.75}}a.setDrawRange(0,Math.max(0,u-1)*12),a.attributes.position.needsUpdate=!0,a.attributes.opacity.needsUpdate=!0}}}function ev(i){const e=new Float32Array(1440),n=new Float32Array(480),s=new Float32Array(480),r=Array.from({length:480},()=>({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:1,floor:0,size:1})),o=new Re;o.setAttribute("position",new ae(e,3).setUsage(Ws)),o.setAttribute("size",new ae(n,1).setUsage(Ws)),o.setAttribute("fade",new ae(s,1).setUsage(Ws));const a=new cn({transparent:!0,depthWrite:!1,vertexShader:"attribute float size;attribute float fade;varying float a;void main(){a=fade;vec4 p=modelViewMatrix*vec4(position,1.);gl_Position=projectionMatrix*p;gl_PointSize=clamp(size*650./-p.z,1.,70.);}",fragmentShader:"varying float a;void main(){float r=length(gl_PointCoord-.5)*2.;if(r>1.)discard;float k=1.-smoothstep(.2,1.,r);gl_FragColor=vec4(.80,.96,.98,k*a*.55);}"}),l=new el(o,a);l.frustumCulled=!1,i.add(l);let c=0;return{clear(){for(const u of r)u.life=0;s.fill(0),o.attributes.fade.needsUpdate=!0},burst(u,h=80,f=1,p=0){for(let m=0;m<h;m++){const _=r[c++%480],g=Math.random()*Math.PI*2,d=(3+Math.random()*8)*f;_.x=u.x+(Math.random()-.5)*2,_.y=u.y+.3,_.z=u.z+(Math.random()-.5)*4,_.vx=Math.cos(g)*d,_.vz=Math.sin(g)*d*.65-p*.4,_.vy=(4+Math.random()*8)*f,_.life=_.max=.5+Math.random()*1.1,_.floor=u.y,_.size=.12+Math.random()*.6*f}},update(u){for(let h=0;h<480;h++){const f=r[h];f.life-=u,f.life>0&&(f.vy-=18*u,f.x+=f.vx*u,f.y+=f.vy*u,f.z+=f.vz*u,f.y<f.floor&&(f.life=0)),e[h*3]=f.x,e[h*3+1]=f.y,e[h*3+2]=f.z,n[h]=f.size,s[h]=Math.max(0,f.life/f.max)}o.attributes.position.needsUpdate=!0,o.attributes.size.needsUpdate=!0,o.attributes.fade.needsUpdate=!0}}}const Vt=i=>document.getElementById(i),ji=yr.clamp,Ee=new Od;Ee.background=new $("#83cbd3");Ee.fog=new jc("#a4d9dd",.0017);const Cn=new J_({canvas:Vt("game"),antialias:!0,powerPreference:"high-performance"});Cn.setPixelRatio(Math.min(devicePixelRatio,1.65));Cn.setSize(innerWidth,innerHeight);Cn.shadowMap.enabled=!0;Cn.shadowMap.type=kc;Cn.outputColorSpace=on;Cn.toneMapping=tu;Cn.toneMappingExposure=1.15;const _n=new En(58,innerWidth/innerHeight,.2,2400);Ee.add(new cp("#c1f5ff","#528572",1.8));const Pn=new fp("#fff0c7",2.8);Pn.position.set(-100,170,-90);Pn.castShadow=!0;Pn.shadow.mapSize.set(2048,2048);Pn.shadow.camera.left=-95;Pn.shadow.camera.right=95;Pn.shadow.camera.top=95;Pn.shadow.camera.bottom=-95;Pn.shadow.camera.far=420;Pn.shadow.bias=-.001;Ee.add(Pn,Pn.target);const Zu=new Kt(new On(1900,32,20),new cn({side:mn,depthWrite:!1,uniforms:{},vertexShader:"varying vec3 v;void main(){v=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`varying vec3 v;void main(){vec3 d=normalize(v);float h=max(d.y,0.);vec3 c=mix(vec3(.65,.84,.81),vec3(.07,.36,.61),pow(h,.55));float s=pow(max(dot(d,normalize(vec3(-.6,.55,-.55))),0.),180.);c+=vec3(1.,.76,.39)*s*.75;gl_FragColor=vec4(c,1.);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
      }`}));Ee.add(Zu);const nv=new On(1,12,8),iv=new tn({color:"#f8f3e3",fog:!1});for(let i=0;i<9;i++)for(let t=0;t<5;t++){const e=new Kt(nv,iv);e.position.set((i%2?-1:1)*(240+i*67)+t*33,160+Math.sin(t*2)*12,150-i*280),e.scale.set(42+t*4,13+Math.sin(t*2)*5,25),Ee.add(e)}const Se=Fx(Ee),ui=tv(Ee),mi=$u();Ee.add(mi);mi.scale.setScalar(1.12);const rs=Se.heightAt(0,70);for(const[i,t,e]of[[-28,-640,4050157],[26,-720,7597529],[-20,-795,16762231]]){const n=new hp(e,150,80,1.5);n.position.set(i,rs+8,t),Ee.add(n)}const Ju=Ku(Ee),Vo=ev(Ee),Hr=new Kt(new On(4.1,24,16),new tn({color:"#79efff",transparent:!0,opacity:.12,wireframe:!0,depthWrite:!1}));mi.add(Hr);Hr.visible=!1;const Wo=document.createElement("canvas");Wo.width=Wo.height=64;const pl=Wo.getContext("2d"),ml=pl.createRadialGradient(32,32,4,32,32,32);ml.addColorStop(0,"rgba(0,30,38,.6)");ml.addColorStop(1,"rgba(0,30,38,0)");pl.fillStyle=ml;pl.fillRect(0,0,64,64);const br=new Kt(new Tn(6,9),new tn({map:new Yo(Wo),transparent:!0,depthWrite:!1}));br.rotation.x=-Math.PI/2;Ee.add(br);const os=[],kr=[],Gr=[],as=[],sv=new On(.22,6,4),rv=new tn({color:"#fff2ae"}),ov=new tn({color:"#ff6b36"});let qe="menu",Xe=0,us=0,Te=0,je=0,cs=100,kn=100,wn=0,Jn=0,Un=0,zi=0,ta=0,Os=0,Zn=!1,Xo=!1,gl=!1,Co=0,wr=0,Ui=0,zc=0,ka=0,Ni=0,Ar=0,_r=!1,_l="high";const rn=new Set,gt=new I(0,rs,70),Bc=new I(0,rs+14,98),jh=new I,fi=new I;let ns=null,ju=0;const av=new I,cv=new I,lv=new I;let Pe,ks,xr,Tr,ki=!0;function hv(){if(!Pe){Pe=new(window.AudioContext||window.webkitAudioContext),ks=Pe.createGain(),ks.gain.value=.25,ks.connect(Pe.destination),xr=Pe.createOscillator(),xr.type="sawtooth",Tr=Pe.createGain();const i=Pe.createBiquadFilter();i.type="lowpass",i.frequency.value=210,xr.connect(i),i.connect(Tr),Tr.connect(ks),xr.start()}Pe.resume()}function Gs(i,t=.12,e="sine",n=.2,s=0){if(!Pe||!ki)return;const r=Pe.createOscillator(),o=Pe.createGain();r.type=e,r.frequency.setValueAtTime(i,Pe.currentTime),r.frequency.exponentialRampToValueAtTime(Math.max(20,i+s),Pe.currentTime+t),o.gain.setValueAtTime(n,Pe.currentTime),o.gain.exponentialRampToValueAtTime(.001,Pe.currentTime+t),r.connect(o),o.connect(ks),r.start(),r.stop(Pe.currentTime+t)}function Po(i=.4,t=.3){if(!Pe||!ki)return;const e=Pe.createBuffer(1,Pe.sampleRate*i,Pe.sampleRate),n=e.getChannelData(0);for(let o=0;o<n.length;o++)n[o]=(Math.random()*2-1)*(1-o/n.length);const s=Pe.createBufferSource(),r=Pe.createGain();s.buffer=e,r.gain.value=t,s.connect(r),r.connect(ks),s.start()}function hi(i){Vt("toast").textContent=i,zc=3}function Qu(){for(const i of[os,kr,Gr,as])for(const t of i)Ee.remove(t.mesh);for(const i of os)i.wake?.reset();as.length=0,ns=null,ui.clear(),Ju.reset(),Vo.clear()}function uv(){if(os.length){os.forEach((e,n)=>{e.x=e.baseX,e.z=e.initialZ,e.hp=e.type==="drone"?3:5,e.alive=!0,e.fire=2+n*.2,Ee.add(e.mesh)});for(const e of kr)e.active=!0,Ee.add(e.mesh);for(const e of Gr)e.active=!0,Ee.add(e.mesh);return}[[-12,-180,"boat"],[16,-370,"boat"],[-14,-535,"drone"],[10,-990,"boat"],[-18,-1150,"boat"],[13,-1310,"drone"]].forEach(([e,n,s],r)=>{const o=s==="drone"?Jx():$u({enemy:!0});s==="drone"&&o.scale.setScalar(1.8),Ee.add(o),os.push({mesh:o,x:e,z:n,baseX:e,initialZ:n,hp:s==="drone"?3:5,type:s,phase:r*1.8,fire:2+r*.2,alive:!0,wake:s==="boat"?Ku(Ee):null})}),[[0,-125,"boost"],[-8,-310,"shield"],[7,-480,"double"],[0,-715,"boost"],[0,-1030,"shield"],[8,-1080,"double"],[-5,-1220,"boost"]].forEach(([e,n,s])=>{const r=jx(s);r.scale.setScalar(2),r.position.set(e,Se.heightAt(e,n)+2,n),Ee.add(r),kr.push({mesh:r,x:e,z:n,type:s,active:!0})}),[[17,-220],[-19,-280],[22,-410],[-18,-500],[-22,-730],[19,-1100],[0,-1190],[23,-1340]].forEach(([e,n])=>{const s=Qx();s.position.set(e,Se.heightAt(e,n)+.6,n),Ee.add(s),Gr.push({mesh:s,x:e,z:n,active:!0})})}function Xr(i=!1){hv(),Qu(),uv(),qe="playing",us=0,Xe=0,Te=i?30:0,je=0,cs=100,kn=100,wn=0,Jn=0,zi=0,ta=0,Os=0,Zn=!1,Xo=!1,gl=!1,Un=i?Se.gates.filter(t=>t.z>-690).length:0,gt.set(0,Se.heightAt(0,i?-690:70),i?-690:70),Bc.set(gt.x,gt.y+12,gt.z+24),Co=0,wr=0,Ui=0,Ni=0,Ar=0,rn.clear(),Vt("start").classList.add("hidden"),Vt("end").classList.add("hidden"),Vt("pause").classList.add("hidden"),Vt("hud").classList.toggle("hidden",_r),document.body.classList.remove("menu"),hi(i?"THE NEEDLE / HOLD W + SHIFT":"FOLLOW THE AMBER GATES")}function tf(i){qe=i?"win":"lost",Vt("end").classList.remove("hidden"),Vt("endKicker").textContent=i?"OPERATION COMPLETE / ROUTE SECURED":"SIGNAL LOST / VESSEL DISABLED",Vt("endTitle").innerHTML=i?"CLEAR<br><span>WATER.</span>":"DEEP<br><span>TROUBLE.</span>",Vt("endCopy").textContent=i?"You broke the blockade. The Sunken Crown passage is open.":"The archipelago claimed another hull. Your next run starts with a clean slate.",Vt("endStats").textContent=`${Math.floor(us/60)}:${String(Math.floor(us%60)).padStart(2,"0")} RUN TIME   /   ${ta} TAKEDOWNS   /   ${zi} PTS`,Gs(i?660:100,.7,"triangle",.4,i?300:-60)}function Fs(i){if(!(qe!=="playing"||Ui>0)){if(Ui=.6,wn>0){wn=Math.max(0,wn-2),ui.burst(gt,9565439,12,1),Gs(850,.15,"sine",.12,-400);return}cs=Math.max(0,cs-i),wr=.6,Ni=.45,Po(.2,.22),cs<=0&&tf(!1)}}function Ga(i,t,e=!1){const n=new Kt(sv,e?ov:rv);n.scale.set(e?1.6:1,1,4),n.position.copy(i);const s=t.clone().sub(i).normalize().multiplyScalar(e?48:180);n.quaternion.setFromUnitVectors(new I(0,0,1),s.clone().normalize()),Ee.add(n),as.push({mesh:n,velocity:s,hostile:e,life:2.8})}function ef(i){_l=i,Cn.setPixelRatio(i==="low"?1:Math.min(devicePixelRatio,1.65)),Cn.shadowMap.enabled=i!=="low",Ee.traverse(t=>{const e=t.material?Array.isArray(t.material)?t.material:[t.material]:[];for(const n of e)n.needsUpdate=!0}),Vt("quality").value=i}function xl(){qe==="playing"?(qe="paused",Vt("pause").classList.remove("hidden")):qe==="paused"&&(qe="playing",Vt("pause").classList.add("hidden")),rn.clear()}window.addEventListener("keydown",i=>{if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(i.code)&&i.preventDefault(),!i.repeat){if(i.code==="Escape"){xl();return}if(i.code==="KeyR"){Xr();return}if(i.code==="KeyH"){_r=!_r,Vt("hud").classList.toggle("hidden",_r||qe==="menu"),Vt("brand").classList.toggle("hidden",_r);return}i.code==="KeyM"&&(ki=!ki,Vt("sound").checked=ki),i.code==="KeyQ"&&ef(_l==="high"?"low":"high"),rn.add(i.code)}});window.addEventListener("keyup",i=>rn.delete(i.code));window.addEventListener("blur",()=>{rn.clear(),qe==="playing"&&xl()});Vt("launch").onclick=()=>Xr();Vt("signature").onclick=()=>Xr(!0);Vt("again").onclick=()=>Xr();Vt("resume").onclick=xl;Vt("home").onclick=()=>{qe="menu",Qu(),gt.set(0,rs,70),Te=0,wn=0,Jn=0,Vt("end").classList.add("hidden"),Vt("hud").classList.add("hidden"),Vt("start").classList.remove("hidden"),document.body.classList.add("menu")};Vt("sound").onchange=i=>ki=i.target.checked;Vt("quality").onchange=i=>ef(i.target.value);window.addEventListener("resize",()=>{_n.aspect=innerWidth/innerHeight,_n.updateProjectionMatrix(),Cn.setSize(innerWidth,innerHeight)});function fv(i){us+=i,Co-=i,Ui=Math.max(0,Ui-i),wn=Math.max(0,wn-i),Jn=Math.max(0,Jn-i);const t=rn.has("KeyW")||rn.has("ArrowUp"),e=rn.has("KeyS")||rn.has("ArrowDown"),n=(rn.has("ShiftLeft")||rn.has("ShiftRight"))&&kn>1&&t,s=(rn.has("KeyA")||rn.has("ArrowLeft")?1:0)-(rn.has("KeyD")||rn.has("ArrowRight")?1:0),r=t?n?66:42:e?-12:0;Te=yr.damp(Te,r,e?2.2:t?.7:.35,i),n?kn=Math.max(0,kn-24*i):kn=Math.min(100,kn+8*i),je+=s*i*1.03*ji(Math.abs(Te)/18,0,1)*(Te<0?-1:1),je=ji(je,-1.12,1.12),s||(je=yr.damp(je,0,.55,i));const o=gt.z;gt.x-=Math.sin(je)*Te*i,gt.z-=Math.cos(je)*Te*i;const a=Se.channelHalfWidthAt(gt.z);Math.abs(gt.x)>a&&(gt.x=ji(gt.x,-a,a),Te*=.97,Ui<=0&&(Fs(8),hi("REEF EDGE / STEER TO THE CHANNEL"))),o>Se.dropZ&&gt.z<=Se.dropZ&&Math.abs(gt.x)>Se.fallsHalfWidth-3&&(gt.z=Se.dropZ+2,Te*=-.3,Fs(18),hi("ROCK LIP / AIM FOR THE WATERFALL CHANNEL"));const l=Se.heightAt(gt.x,gt.z);o>Se.dropZ&&gt.z<=Se.dropZ&&!Xo&&(Zn=!0,Xo=!0,Os=7+Math.max(0,Te-35)*.12,hi("SUNLIGHT / TAKE THE DROP"),Gs(180,.7,"sawtooth",.12,600)),Zn?(Os-=20*i,gt.y+=Os*i,gt.y<=l+.15&&(gt.y=l,Zn=!1,gl=!0,Os=0,Ni=.75,Ar=1,Vo.burst(gt,280,1.5,Te),Po(.8,.7),zi+=500,hi("CLEAN LANDING +500 / HOSTILE AHEAD"))):gt.y=yr.damp(gt.y,l,10,i),mi.position.copy(gt),mi.position.y+=Math.sin(Xe*3+gt.z*.08)*.13,br.position.set(gt.x,l+.12,gt.z),br.material.opacity=Zn?.35:.6,br.rotation.z=je,mi.rotation.set(Zn?ji(Os*.025,-.4,.32):Math.sin(Xe*4)*.012+Math.max(0,Te)*6e-4,je,-s*ji(Te/42,0,1)*.16),Hr.visible=wn>0,Hr.rotation.y=Xe;for(const h of mi.userData.propellers||[])h.rotation.z+=Te*i*3;if(ka-=i,ka<=0&&Math.abs(Te)>4&&!Zn&&(ka=.045,fi.set(Math.sin(je)*3,0,Math.cos(je)*3).add(gt),fi.y=l+.08,n&&ui.trail(fi,7064806,1),(s||n)&&(fi.x+=s?s*1.8:1.7,Vo.burst(fi,3,.45))),Un<Se.gates.length){const h=Se.gates[Un];Math.abs(gt.z-h.z)<10&&Math.abs(gt.x-h.x)<h.halfWidth+3&&(Un++,zi+=250,kn=Math.min(100,kn+12),Gs(650,.15,"triangle",.2,200),hi(Un===Se.gates.length?"EXTRACTION SECURED":`GATE ${String(Un).padStart(2,"0")} CLEARED +250`)),o>=h.z-12&&gt.z<h.z-12&&Se.gates[Un]===h&&hi("GATE MISSED / BRAKE AND REVERSE TO THE MARKER")}gt.z<Se.finishZ&&Un>=Se.gates.length&&tf(!0);let c=null,u=145;for(const h of os){if(h.wake?.update(i,h.mesh.position,h.mesh.rotation.y,16,h.alive&&Math.abs(h.z-gt.z)<170),!h.alive)continue;const f=h.z-gt.z;Math.abs(f)<170&&(h.z-=i*(h.type==="drone"?12:16),h.x=h.baseX+Math.sin(Xe*.7+h.phase)*8),h.mesh.position.set(h.x,Se.heightAt(h.x,h.z)+(h.type==="drone"?7+Math.sin(Xe*2+h.phase):.2),h.z);for(const m of h.mesh.userData.rotors||[])m.rotation.y+=i*55;for(const m of h.mesh.userData.propellers||[])m.rotation.z+=i*80;h.mesh.rotation.set(0,Math.sin(Xe*.7+h.phase)*.15,h.type==="drone"?Math.sin(Xe*2)*.1:Math.sin(Xe*3)*.025);const p=h.mesh.position.distanceTo(gt);p<u&&h.z<gt.z+10&&(h.type==="drone"||Math.abs(h.mesh.position.y-gt.y)<2.5)&&(u=p,c=h),p<125&&p>12&&(h.fire-=i,h.fire<0&&(h.fire=2.8,Ga(h.mesh.position.clone().add(new I(0,1,0)),gt.clone().add(new I(0,.8,0)),!0))),p<5&&Ui<=0&&(Fs(22),Te*=.5)}if(ns=c,ju=u,rn.has("Space")&&Co<=0){Co=Jn>0?.14:.22;const h=gt.clone().add(new I(0,1.3,-3)),f=c?c.mesh.position.clone().add(new I(0,.7,0)):gt.clone().add(new I(-Math.sin(je)*110,1,-Math.cos(je)*110));Ga(h,f),Jn>0&&Ga(h.clone().add(new I(1.3,0,0)),f),Gs(180,.08,"sawtooth",.13,-100),ui.burst(h,16765815,2,.2)}for(let h=as.length-1;h>=0;h--){const f=as[h];f.life-=i;const p=av.copy(f.mesh.position);if(f.mesh.position.addScaledVector(f.velocity,i),f.hostile)f.mesh.position.distanceTo(gt)<3.5&&(Fs(9),f.life=0);else for(const m of os){if(!m.alive)continue;const _=p,g=f.mesh.position,d=m.mesh.position,v=fi.copy(g).sub(_),M=v.lengthSq(),x=M>1e-9?ji(cv.copy(d).sub(_).dot(v)/M,0,1):0;if(lv.copy(_).addScaledVector(v,x).distanceTo(d)<3.7){m.hp--,f.life=0,ui.burst(d.clone(),16756818,9,.6),m.hp<=0&&(m.alive=!1,Ee.remove(m.mesh),zi+=750,ta++,ui.burst(d.clone(),16745016,40,2.5),Po(.5,.45),hi("HOSTILE NEUTRALIZED +750"));break}}f.life<=0&&(Ee.remove(f.mesh),as.splice(h,1))}for(const h of kr)h.active&&(h.mesh.rotation.y=Xe*1.3,h.mesh.position.y=Se.heightAt(h.x,h.z)+1.7+Math.sin(Xe*2+h.z)*.4,h.mesh.position.distanceTo(gt)<6.5&&(h.active=!1,Ee.remove(h.mesh),zi+=100,h.type==="boost"&&(kn=100),h.type==="shield"&&(wn=16),h.type==="double"&&(Jn=18),Gs(450,.3,"triangle",.3,650),ui.burst(h.mesh.position.clone(),9699276,20,1),hi(`${h.type==="double"?"DOUBLE SHOT":h.type.toUpperCase()} ONLINE +100`)));for(const h of Gr)h.active&&(h.mesh.rotation.y=Xe*.25,h.mesh.position.distanceTo(gt)<4.3&&(h.active=!1,Ee.remove(h.mesh),Fs(28),ui.burst(h.mesh.position.clone(),16749890,40,2),Po(.55,.5),Te*=.6));for(const h of Se.obstacles||[])Math.hypot(gt.x-h.x,gt.z-h.z)<h.r+2&&Ui<=0&&(Fs(18),Te*=-.25,gt.x+=gt.x>h.x?3:-3)}const un=Vt("map").getContext("2d");function dv(){const i=ns?fi.copy(ns.mesh.position).project(_n):null,t=ns?.alive&&i.z>=-1&&i.z<=1;Vt("lock").classList.toggle("hidden",!t),Vt("targetHint").textContent=t?`TARGET LOCK / ${Math.round(ju)} M  ·  SPACE TO FIRE`:"",t&&(Vt("lock").style.left=`${(i.x*.5+.5)*innerWidth}px`,Vt("lock").style.top=`${(-i.y*.5+.5)*innerHeight}px`,Vt("lock").firstElementChild.style.width=`${ns.hp/(ns.type==="drone"?3:5)*100}%`);const e=Math.round(Math.abs(Te)*3.6);Vt("speed").textContent=e,Vt("healthText").textContent=Math.ceil(cs),Vt("healthFill").style.width=cs+"%",Vt("boostFill").style.width=kn+"%",Vt("score").textContent=String(zi).padStart(5,"0"),Vt("clock").textContent=`${String(Math.floor(us/60)).padStart(2,"0")}:${String(Math.floor(us%60)).padStart(2,"0")}`,Vt("gate").textContent=`GATE ${String(Math.min(Un+1,Se.gates.length)).padStart(2,"0")} / ${String(Se.gates.length).padStart(2,"0")}`,Vt("routeFill").style.width=Un/Se.gates.length*100+"%",Vt("sector").textContent=gt.z>-280?"01 — PALM CHANNEL":gt.z>-590?"02 — CORSAIR REEF":gt.z>-850?"03 — THE NEEDLE":gt.z>-1040?"04 — SKYFALL":"05 — OPEN WATER",Vt("powerups").textContent=[wn>0?`SHIELD ${Math.ceil(wn)}S`:"",Jn>0?`2× SHOT ${Math.ceil(Jn)}S`:""].filter(Boolean).join(" / ")||"SYSTEMS ONLINE",un.clearRect(0,0,120,180),un.strokeStyle="#91d9cc55",un.lineWidth=15,un.beginPath(),un.moveTo(60,15),un.lineTo(60,165),un.stroke();for(let s=0;s<Se.gates.length;s++){const r=Se.gates[s],o=20+-r.z/1500*140;un.fillStyle=s<Un?"#8be0be":"#ffb65f",un.fillRect(48+r.x*.3,o,24,2)}un.fillStyle="#fff7d4";const n=20+ji(-gt.z/1500,0,1)*140;un.beginPath(),un.moveTo(60+gt.x*.6,n+5),un.lineTo(56+gt.x*.6,n-4),un.lineTo(64+gt.x*.6,n-4),un.fill()}let Va=null,Rr=[];function nf(i){requestAnimationFrame(nf);const t=Va===null?1/60:Math.max(0,(i-Va)/1e3),e=Math.min(t,.1);if(Va=i,Rr.push(t*1e3),Rr.length>180&&Rr.shift(),qe!=="paused"){if(Xe+=e,Se.update(Xe,e,gt),ui.update(e),Vo.update(e),Ju.update(e,gt,je,Te,qe==="playing"&&!Zn),qe==="playing"){const n=Math.max(1,Math.ceil(e/.016666666666666666));for(let s=0;s<n&&qe==="playing";s++)fv(e/n)}else qe==="menu"&&(mi.position.set(0,rs+Math.sin(Xe*2)*.12,70),mi.rotation.set(0,-.25,Math.sin(Xe)*.015),_n.position.set(19+Math.sin(Xe*.1)*3,rs+10,93),_n.lookAt(-8,rs+1,50));if(qe!=="menu"){const n=(Te>45?19:15)+Ar*8;fi.set(gt.x+Math.sin(je)*8,gt.y+9.5+(Zn?1:0),gt.z+n),Bc.lerp(fi,1-Math.exp(-e*4)),_n.position.copy(Bc),jh.set(gt.x-Math.sin(je)*10,gt.y+1.8,gt.z-14),Ni>0&&(_n.position.x+=Math.sin(Xe*63)*Ni*.25,_n.position.y+=Math.cos(Xe*51)*Ni*.18),_n.lookAt(jh),_n.fov=yr.damp(_n.fov,Te>45?65:58,2,e),_n.updateProjectionMatrix()}Pn.position.set(gt.x-85,gt.y+150,gt.z-75),Pn.target.position.copy(gt),Zu.position.copy(_n.position)}Hr.visible=wn>0,wr=Math.max(0,wr-e),Ni=Math.max(0,Ni-e),qe==="playing"&&(Ar=Math.max(0,Ar-e*.75)),zc-=e,Vt("toast").style.opacity=zc>0?1:0,Vt("damage").style.opacity=wr,Tr&&(Tr.gain.setTargetAtTime(ki&&qe==="playing"?.025+Math.abs(Te)*.0015:0,Pe.currentTime,.1),xr.frequency.setTargetAtTime(45+Math.abs(Te)*2.5,Pe.currentTime,.1)),dv(),Cn.render(Ee,_n)}document.body.classList.add("menu");Vt("loading").remove();requestAnimationFrame(nf);window.tidebreak={get state(){return{mode:qe,x:gt.x,y:gt.y,z:gt.z,speed:Te,yaw:je,health:cs,boost:kn,shield:wn,double:Jn,gateIndex:Un,score:zi,kills:ta,airborne:Zn,jumped:Xo,landed:gl,elapsed:us,frameMs:Rr.reduce((i,t)=>i+t,0)/Rr.length,shots:as.length,quality:_l,drawCalls:Cn.info.render.calls,triangles:Cn.info.render.triangles,audioState:Pe?.state||"inactive",soundOn:ki,activeMines:Gr.filter(i=>i.active).length,collectedPickups:kr.filter(i=>!i.active).map(i=>i.type)}}};new URLSearchParams(location.search).get("section")==="waterfall"&&(Vt("signature").textContent="LAUNCH WATERFALL RUN ↗",Vt("launch").onclick=()=>Xr(!0));
