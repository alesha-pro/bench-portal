(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const jl="180",Rd=0,$c=1,Cd=2,yu=1,Eu=2,mi=3,Wi=0,fn=1,Le=2,xi=0,Vs=1,qn=2,Kc=3,Jc=4,Pd=5,us=100,Dd=101,Id=102,Ld=103,Ud=104,Nd=200,Fd=201,Od=202,Bd=203,ol=204,al=205,zd=206,kd=207,Hd=208,Gd=209,Vd=210,Wd=211,Xd=212,qd=213,Yd=214,ll=0,cl=1,hl=2,Ys=3,ul=4,dl=5,fl=6,pl=7,Ql=0,$d=1,Kd=2,Hi=0,Tu=1,bu=2,wu=3,tc=4,Au=5,Ru=6,Cu=7,Pu=300,$s=301,Ks=302,ml=303,gl=304,Zo=306,Js=1e3,zi=1001,_l=1002,An=1003,Jd=1004,io=1005,Zn=1006,fa=1007,fs=1008,ei=1009,Du=1010,Iu=1011,Or=1012,ec=1013,ps=1014,jn=1015,Mi=1016,nc=1017,ic=1018,Br=1020,Lu=35902,Uu=35899,Nu=1021,Fu=1022,Yn=1023,zr=1026,kr=1027,sc=1028,rc=1029,Ou=1030,oc=1031,ac=1033,No=33776,Fo=33777,Oo=33778,Bo=33779,vl=35840,xl=35841,Ml=35842,Sl=35843,yl=36196,El=37492,Tl=37496,bl=37808,wl=37809,Al=37810,Rl=37811,Cl=37812,Pl=37813,Dl=37814,Il=37815,Ll=37816,Ul=37817,Nl=37818,Fl=37819,Ol=37820,Bl=37821,zl=36492,kl=36494,Hl=36495,Gl=36283,Vl=36284,Wl=36285,Xl=36286,Zd=3200,jd=3201,lc=0,Qd=1,Bi="",gn="srgb",Zs="srgb-linear",Wo="linear",xe="srgb",Es=7680,Zc=519,tf=512,ef=513,nf=514,Bu=515,sf=516,rf=517,of=518,af=519,jc=35044,Qc="300 es",Qn=2e3,Xo=2001;class er{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let th=1234567;const Dr=Math.PI/180,Hr=180/Math.PI;function nr(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(rn[i&255]+rn[i>>8&255]+rn[i>>16&255]+rn[i>>24&255]+"-"+rn[t&255]+rn[t>>8&255]+"-"+rn[t>>16&15|64]+rn[t>>24&255]+"-"+rn[e&63|128]+rn[e>>8&255]+"-"+rn[e>>16&255]+rn[e>>24&255]+rn[n&255]+rn[n>>8&255]+rn[n>>16&255]+rn[n>>24&255]).toLowerCase()}function ie(i,t,e){return Math.max(t,Math.min(e,i))}function cc(i,t){return(i%t+t)%t}function lf(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function cf(i,t,e){return i!==t?(e-i)/(t-i):0}function Ir(i,t,e){return(1-e)*i+e*t}function hf(i,t,e,n){return Ir(i,t,1-Math.exp(-e*n))}function uf(i,t=1){return t-Math.abs(cc(i,t*2)-t)}function df(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function ff(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function pf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function mf(i,t){return i+Math.random()*(t-i)}function gf(i){return i*(.5-Math.random())}function _f(i){i!==void 0&&(th=i);let t=th+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function vf(i){return i*Dr}function xf(i){return i*Hr}function Mf(i){return(i&i-1)===0&&i!==0}function Sf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function yf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ef(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),p=o((t-n)/2),d=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*u,l*p,a*c);break;case"YZY":i.set(l*p,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*p,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*d,a*c);break;case"YXY":i.set(l*d,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function zs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function hn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const jo={DEG2RAD:Dr,RAD2DEG:Hr,generateUUID:nr,clamp:ie,euclideanModulo:cc,mapLinear:lf,inverseLerp:cf,lerp:Ir,damp:hf,pingpong:uf,smoothstep:df,smootherstep:ff,randInt:pf,randFloat:mf,randFloatSpread:gf,seededRandom:_f,degToRad:vf,radToDeg:xf,isPowerOfTwo:Mf,ceilPowerOfTwo:Sf,floorPowerOfTwo:yf,setQuaternionFromProperEuler:Ef,normalize:hn,denormalize:zs};class At{constructor(t=0,e=0){At.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xi{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const p=r[o+0],d=r[o+1],g=r[o+2],y=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=p,t[e+1]=d,t[e+2]=g,t[e+3]=y;return}if(u!==y||l!==p||c!==d||h!==g){let m=1-a;const f=l*p+c*d+h*g+u*y,w=f>=0?1:-1,T=1-f*f;if(T>Number.EPSILON){const C=Math.sqrt(T),b=Math.atan2(C,f*w);m=Math.sin(m*b)/C,a=Math.sin(a*b)/C}const M=a*w;if(l=l*m+p*M,c=c*m+d*M,h=h*m+g*M,u=u*m+y*M,m===1-a){const C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],p=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*d-c*p,t[e+1]=l*g+h*p+c*u-a*d,t[e+2]=c*g+h*d+a*p-l*u,t[e+3]=h*g-a*u-l*p-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),p=l(n/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=p*h*u+c*d*g,this._y=c*d*u-p*h*g,this._z=c*h*g+p*d*u,this._w=c*h*u-p*d*g;break;case"YXZ":this._x=p*h*u+c*d*g,this._y=c*d*u-p*h*g,this._z=c*h*g-p*d*u,this._w=c*h*u+p*d*g;break;case"ZXY":this._x=p*h*u-c*d*g,this._y=c*d*u+p*h*g,this._z=c*h*g+p*d*u,this._w=c*h*u-p*d*g;break;case"ZYX":this._x=p*h*u-c*d*g,this._y=c*d*u+p*h*g,this._z=c*h*g-p*d*u,this._w=c*h*u+p*d*g;break;case"YZX":this._x=p*h*u+c*d*g,this._y=c*d*u+p*h*g,this._z=c*h*g-p*d*u,this._w=c*h*u-p*d*g;break;case"XZY":this._x=p*h*u-c*d*g,this._y=c*d*u-p*h*g,this._z=c*h*g+p*d*u,this._w=c*h*u+p*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],p=n+a+u;if(p>0){const d=.5/Math.sqrt(p+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ie(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,p=Math.sin(e*h)/c;return this._w=o*u+this._w*p,this._x=n*u+this._x*p,this._y=s*u+this._y*p,this._z=r*u+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(eh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(eh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this.z=ie(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this.z=ie(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return pa.copy(this).projectOnVector(t),this.sub(pa)}reflect(t){return this.sub(pa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const pa=new I,eh=new Xi;class Qt{constructor(t,e,n,s,r,o,a,l,c){Qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],p=n[2],d=n[5],g=n[8],y=s[0],m=s[3],f=s[6],w=s[1],T=s[4],M=s[7],C=s[2],b=s[5],A=s[8];return r[0]=o*y+a*w+l*C,r[3]=o*m+a*T+l*b,r[6]=o*f+a*M+l*A,r[1]=c*y+h*w+u*C,r[4]=c*m+h*T+u*b,r[7]=c*f+h*M+u*A,r[2]=p*y+d*w+g*C,r[5]=p*m+d*T+g*b,r[8]=p*f+d*M+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,p=a*l-h*r,d=c*r-o*l,g=e*u+n*p+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return t[0]=u*y,t[1]=(s*c-h*n)*y,t[2]=(a*n-s*o)*y,t[3]=p*y,t[4]=(h*e-s*l)*y,t[5]=(s*r-a*e)*y,t[6]=d*y,t[7]=(n*l-c*e)*y,t[8]=(o*e-n*r)*y,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ma.makeScale(t,e)),this}rotate(t){return this.premultiply(ma.makeRotation(-t)),this}translate(t,e){return this.premultiply(ma.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ma=new Qt;function zu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function qo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Tf(){const i=qo("canvas");return i.style.display="block",i}const nh={};function Gr(i){i in nh||(nh[i]=!0,console.warn(i))}function bf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const ih=new Qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sh=new Qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function wf(){const i={enabled:!0,workingColorSpace:Zs,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===xe&&(s.r=Si(s.r),s.g=Si(s.g),s.b=Si(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===xe&&(s.r=Ws(s.r),s.g=Ws(s.g),s.b=Ws(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Bi?Wo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Gr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Gr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Zs]:{primaries:t,whitePoint:n,transfer:Wo,toXYZ:ih,fromXYZ:sh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:gn},outputColorSpaceConfig:{drawingBufferColorSpace:gn}},[gn]:{primaries:t,whitePoint:n,transfer:xe,toXYZ:ih,fromXYZ:sh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:gn}}}),i}const fe=wf();function Si(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ws(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ts;class Af{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ts===void 0&&(Ts=qo("canvas")),Ts.width=t.width,Ts.height=t.height;const s=Ts.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ts}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=qo("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Si(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Si(e[n]/255)*255):e[n]=Si(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Rf=0;class hc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Rf++}),this.uuid=nr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ga(s[o].image)):r.push(ga(s[o]))}else r=ga(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function ga(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Af.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Cf=0;const _a=new I;class cn extends er{constructor(t=cn.DEFAULT_IMAGE,e=cn.DEFAULT_MAPPING,n=zi,s=zi,r=Zn,o=fs,a=Yn,l=ei,c=cn.DEFAULT_ANISOTROPY,h=Bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cf++}),this.uuid=nr(),this.name="",this.source=new hc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new At(0,0),this.repeat=new At(1,1),this.center=new At(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(_a).x}get height(){return this.source.getSize(_a).y}get depth(){return this.source.getSize(_a).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Pu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Js:t.x=t.x-Math.floor(t.x);break;case zi:t.x=t.x<0?0:1;break;case _l:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Js:t.y=t.y-Math.floor(t.y);break;case zi:t.y=t.y<0?0:1;break;case _l:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=Pu;cn.DEFAULT_ANISOTROPY=1;class Ne{constructor(t=0,e=0,n=0,s=1){Ne.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],p=l[1],d=l[5],g=l[9],y=l[2],m=l[6],f=l[10];if(Math.abs(h-p)<.01&&Math.abs(u-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+p)<.1&&Math.abs(u+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const T=(c+1)/2,M=(d+1)/2,C=(f+1)/2,b=(h+p)/4,A=(u+y)/4,P=(g+m)/4;return T>M&&T>C?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=b/n,r=A/n):M>C?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=b/s,r=P/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=A/r,s=P/r),this.set(n,s,r,e),this}let w=Math.sqrt((m-g)*(m-g)+(u-y)*(u-y)+(p-h)*(p-h));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(u-y)/w,this.z=(p-h)/w,this.w=Math.acos((c+d+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this.z=ie(this.z,t.z,e.z),this.w=ie(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this.z=ie(this.z,t,e),this.w=ie(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Pf extends er{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ne(0,0,t,e),this.scissorTest=!1,this.viewport=new Ne(0,0,t,e);const s={width:t,height:e,depth:n.depth},r=new cn(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Zn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new hc(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $n extends Pf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ku extends cn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=An,this.minFilter=An,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Df extends cn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=An,this.minFilter=An,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _s{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Hn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Hn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Hn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Hn):Hn.fromBufferAttribute(r,o),Hn.applyMatrix4(t.matrixWorld),this.expandByPoint(Hn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),so.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),so.copy(n.boundingBox)),so.applyMatrix4(t.matrixWorld),this.union(so)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Hn),Hn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(_r),ro.subVectors(this.max,_r),bs.subVectors(t.a,_r),ws.subVectors(t.b,_r),As.subVectors(t.c,_r),wi.subVectors(ws,bs),Ai.subVectors(As,ws),Qi.subVectors(bs,As);let e=[0,-wi.z,wi.y,0,-Ai.z,Ai.y,0,-Qi.z,Qi.y,wi.z,0,-wi.x,Ai.z,0,-Ai.x,Qi.z,0,-Qi.x,-wi.y,wi.x,0,-Ai.y,Ai.x,0,-Qi.y,Qi.x,0];return!va(e,bs,ws,As,ro)||(e=[1,0,0,0,1,0,0,0,1],!va(e,bs,ws,As,ro))?!1:(oo.crossVectors(wi,Ai),e=[oo.x,oo.y,oo.z],va(e,bs,ws,As,ro))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Hn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Hn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ci),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ci=[new I,new I,new I,new I,new I,new I,new I,new I],Hn=new I,so=new _s,bs=new I,ws=new I,As=new I,wi=new I,Ai=new I,Qi=new I,_r=new I,ro=new I,oo=new I,ts=new I;function va(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ts.fromArray(i,r);const a=s.x*Math.abs(ts.x)+s.y*Math.abs(ts.y)+s.z*Math.abs(ts.z),l=t.dot(ts),c=e.dot(ts),h=n.dot(ts);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const If=new _s,vr=new I,xa=new I;class ir{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):If.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;vr.subVectors(t,this.center);const e=vr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(vr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(xa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(vr.copy(t.center).add(xa)),this.expandByPoint(vr.copy(t.center).sub(xa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const hi=new I,Ma=new I,ao=new I,Ri=new I,Sa=new I,lo=new I,ya=new I;class Hu{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,hi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=hi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(hi.copy(this.origin).addScaledVector(this.direction,e),hi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ma.copy(t).add(e).multiplyScalar(.5),ao.copy(e).sub(t).normalize(),Ri.copy(this.origin).sub(Ma);const r=t.distanceTo(e)*.5,o=-this.direction.dot(ao),a=Ri.dot(this.direction),l=-Ri.dot(ao),c=Ri.lengthSq(),h=Math.abs(1-o*o);let u,p,d,g;if(h>0)if(u=o*l-a,p=o*a-l,g=r*h,u>=0)if(p>=-g)if(p<=g){const y=1/h;u*=y,p*=y,d=u*(u+o*p+2*a)+p*(o*u+p+2*l)+c}else p=r,u=Math.max(0,-(o*p+a)),d=-u*u+p*(p+2*l)+c;else p=-r,u=Math.max(0,-(o*p+a)),d=-u*u+p*(p+2*l)+c;else p<=-g?(u=Math.max(0,-(-o*r+a)),p=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+p*(p+2*l)+c):p<=g?(u=0,p=Math.min(Math.max(-r,-l),r),d=p*(p+2*l)+c):(u=Math.max(0,-(o*r+a)),p=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+p*(p+2*l)+c);else p=o>0?-r:r,u=Math.max(0,-(o*p+a)),d=-u*u+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ma).addScaledVector(ao,p),d}intersectSphere(t,e){hi.subVectors(t.center,this.origin);const n=hi.dot(this.direction),s=hi.dot(hi)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,p=this.origin;return c>=0?(n=(t.min.x-p.x)*c,s=(t.max.x-p.x)*c):(n=(t.max.x-p.x)*c,s=(t.min.x-p.x)*c),h>=0?(r=(t.min.y-p.y)*h,o=(t.max.y-p.y)*h):(r=(t.max.y-p.y)*h,o=(t.min.y-p.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-p.z)*u,l=(t.max.z-p.z)*u):(a=(t.max.z-p.z)*u,l=(t.min.z-p.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,hi)!==null}intersectTriangle(t,e,n,s,r){Sa.subVectors(e,t),lo.subVectors(n,t),ya.crossVectors(Sa,lo);let o=this.direction.dot(ya),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ri.subVectors(this.origin,t);const l=a*this.direction.dot(lo.crossVectors(Ri,lo));if(l<0)return null;const c=a*this.direction.dot(Sa.cross(Ri));if(c<0||l+c>o)return null;const h=-a*Ri.dot(ya);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class he{constructor(t,e,n,s,r,o,a,l,c,h,u,p,d,g,y,m){he.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,p,d,g,y,m)}set(t,e,n,s,r,o,a,l,c,h,u,p,d,g,y,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=p,f[3]=d,f[7]=g,f[11]=y,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new he().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Rs.setFromMatrixColumn(t,0).length(),r=1/Rs.setFromMatrixColumn(t,1).length(),o=1/Rs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const p=o*h,d=o*u,g=a*h,y=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+g*c,e[5]=p-y*c,e[9]=-a*l,e[2]=y-p*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){const p=l*h,d=l*u,g=c*h,y=c*u;e[0]=p+y*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=y+p*a,e[10]=o*l}else if(t.order==="ZXY"){const p=l*h,d=l*u,g=c*h,y=c*u;e[0]=p-y*a,e[4]=-o*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=y-p*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const p=o*h,d=o*u,g=a*h,y=a*u;e[0]=l*h,e[4]=g*c-d,e[8]=p*c+y,e[1]=l*u,e[5]=y*c+p,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const p=o*l,d=o*c,g=a*l,y=a*c;e[0]=l*h,e[4]=y-p*u,e[8]=g*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+g,e[10]=p-y*u}else if(t.order==="XZY"){const p=o*l,d=o*c,g=a*l,y=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=p*u+y,e[5]=o*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*h,e[10]=y*u+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Lf,t,Uf)}lookAt(t,e,n){const s=this.elements;return Mn.subVectors(t,e),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),Ci.crossVectors(n,Mn),Ci.lengthSq()===0&&(Math.abs(n.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),Ci.crossVectors(n,Mn)),Ci.normalize(),co.crossVectors(Mn,Ci),s[0]=Ci.x,s[4]=co.x,s[8]=Mn.x,s[1]=Ci.y,s[5]=co.y,s[9]=Mn.y,s[2]=Ci.z,s[6]=co.z,s[10]=Mn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],p=n[9],d=n[13],g=n[2],y=n[6],m=n[10],f=n[14],w=n[3],T=n[7],M=n[11],C=n[15],b=s[0],A=s[4],P=s[8],x=s[12],S=s[1],L=s[5],z=s[9],X=s[13],j=s[2],$=s[6],J=s[10],st=s[14],q=s[3],mt=s[7],Et=s[11],Ot=s[15];return r[0]=o*b+a*S+l*j+c*q,r[4]=o*A+a*L+l*$+c*mt,r[8]=o*P+a*z+l*J+c*Et,r[12]=o*x+a*X+l*st+c*Ot,r[1]=h*b+u*S+p*j+d*q,r[5]=h*A+u*L+p*$+d*mt,r[9]=h*P+u*z+p*J+d*Et,r[13]=h*x+u*X+p*st+d*Ot,r[2]=g*b+y*S+m*j+f*q,r[6]=g*A+y*L+m*$+f*mt,r[10]=g*P+y*z+m*J+f*Et,r[14]=g*x+y*X+m*st+f*Ot,r[3]=w*b+T*S+M*j+C*q,r[7]=w*A+T*L+M*$+C*mt,r[11]=w*P+T*z+M*J+C*Et,r[15]=w*x+T*X+M*st+C*Ot,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],p=t[10],d=t[14],g=t[3],y=t[7],m=t[11],f=t[15];return g*(+r*l*u-s*c*u-r*a*p+n*c*p+s*a*d-n*l*d)+y*(+e*l*d-e*c*p+r*o*p-s*o*d+s*c*h-r*l*h)+m*(+e*c*u-e*a*d-r*o*u+n*o*d+r*a*h-n*c*h)+f*(-s*a*h-e*l*u+e*a*p+s*o*u-n*o*p+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],p=t[10],d=t[11],g=t[12],y=t[13],m=t[14],f=t[15],w=u*m*c-y*p*c+y*l*d-a*m*d-u*l*f+a*p*f,T=g*p*c-h*m*c-g*l*d+o*m*d+h*l*f-o*p*f,M=h*y*c-g*u*c+g*a*d-o*y*d-h*a*f+o*u*f,C=g*u*l-h*y*l-g*a*p+o*y*p+h*a*m-o*u*m,b=e*w+n*T+s*M+r*C;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/b;return t[0]=w*A,t[1]=(y*p*r-u*m*r-y*s*d+n*m*d+u*s*f-n*p*f)*A,t[2]=(a*m*r-y*l*r+y*s*c-n*m*c-a*s*f+n*l*f)*A,t[3]=(u*l*r-a*p*r-u*s*c+n*p*c+a*s*d-n*l*d)*A,t[4]=T*A,t[5]=(h*m*r-g*p*r+g*s*d-e*m*d-h*s*f+e*p*f)*A,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*f-e*l*f)*A,t[7]=(o*p*r-h*l*r+h*s*c-e*p*c-o*s*d+e*l*d)*A,t[8]=M*A,t[9]=(g*u*r-h*y*r-g*n*d+e*y*d+h*n*f-e*u*f)*A,t[10]=(o*y*r-g*a*r+g*n*c-e*y*c-o*n*f+e*a*f)*A,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*d-e*a*d)*A,t[12]=C*A,t[13]=(h*y*s-g*u*s+g*n*p-e*y*p-h*n*m+e*u*m)*A,t[14]=(g*a*s-o*y*s-g*n*l+e*y*l+o*n*m-e*a*m)*A,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*p+e*a*p)*A,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,p=r*c,d=r*h,g=r*u,y=o*h,m=o*u,f=a*u,w=l*c,T=l*h,M=l*u,C=n.x,b=n.y,A=n.z;return s[0]=(1-(y+f))*C,s[1]=(d+M)*C,s[2]=(g-T)*C,s[3]=0,s[4]=(d-M)*b,s[5]=(1-(p+f))*b,s[6]=(m+w)*b,s[7]=0,s[8]=(g+T)*A,s[9]=(m-w)*A,s[10]=(1-(p+y))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Rs.set(s[0],s[1],s[2]).length();const o=Rs.set(s[4],s[5],s[6]).length(),a=Rs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Gn.copy(this);const c=1/r,h=1/o,u=1/a;return Gn.elements[0]*=c,Gn.elements[1]*=c,Gn.elements[2]*=c,Gn.elements[4]*=h,Gn.elements[5]*=h,Gn.elements[6]*=h,Gn.elements[8]*=u,Gn.elements[9]*=u,Gn.elements[10]*=u,e.setFromRotationMatrix(Gn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Qn,l=!1){const c=this.elements,h=2*r/(e-t),u=2*r/(n-s),p=(e+t)/(e-t),d=(n+s)/(n-s);let g,y;if(l)g=r/(o-r),y=o*r/(o-r);else if(a===Qn)g=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===Xo)g=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Qn,l=!1){const c=this.elements,h=2/(e-t),u=2/(n-s),p=-(e+t)/(e-t),d=-(n+s)/(n-s);let g,y;if(l)g=1/(o-r),y=o/(o-r);else if(a===Qn)g=-2/(o-r),y=-(o+r)/(o-r);else if(a===Xo)g=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=p,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Rs=new I,Gn=new he,Lf=new I(0,0,0),Uf=new I(1,1,1),Ci=new I,co=new I,Mn=new I,rh=new he,oh=new Xi;class _n{constructor(t=0,e=0,n=0,s=_n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],p=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(ie(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ie(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ie(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ie(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ie(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ie(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return rh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(rh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return oh.setFromEuler(this),this.setFromQuaternion(oh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_n.DEFAULT_ORDER="XYZ";class Gu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Nf=0;const ah=new I,Cs=new Xi,ui=new he,ho=new I,xr=new I,Ff=new I,Of=new Xi,lh=new I(1,0,0),ch=new I(0,1,0),hh=new I(0,0,1),uh={type:"added"},Bf={type:"removed"},Ps={type:"childadded",child:null},Ea={type:"childremoved",child:null};class Je extends er{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nf++}),this.uuid=nr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Je.DEFAULT_UP.clone();const t=new I,e=new _n,n=new Xi,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new he},normalMatrix:{value:new Qt}}),this.matrix=new he,this.matrixWorld=new he,this.matrixAutoUpdate=Je.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Cs.setFromAxisAngle(t,e),this.quaternion.multiply(Cs),this}rotateOnWorldAxis(t,e){return Cs.setFromAxisAngle(t,e),this.quaternion.premultiply(Cs),this}rotateX(t){return this.rotateOnAxis(lh,t)}rotateY(t){return this.rotateOnAxis(ch,t)}rotateZ(t){return this.rotateOnAxis(hh,t)}translateOnAxis(t,e){return ah.copy(t).applyQuaternion(this.quaternion),this.position.add(ah.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(lh,t)}translateY(t){return this.translateOnAxis(ch,t)}translateZ(t){return this.translateOnAxis(hh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ui.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ho.copy(t):ho.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),xr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ui.lookAt(xr,ho,this.up):ui.lookAt(ho,xr,this.up),this.quaternion.setFromRotationMatrix(ui),s&&(ui.extractRotation(s.matrixWorld),Cs.setFromRotationMatrix(ui),this.quaternion.premultiply(Cs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(uh),Ps.child=t,this.dispatchEvent(Ps),Ps.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Bf),Ea.child=t,this.dispatchEvent(Ea),Ea.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ui.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ui.multiply(t.parent.matrixWorld)),t.applyMatrix4(ui),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(uh),Ps.child=t,this.dispatchEvent(Ps),Ps.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,t,Ff),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,Of,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),p=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),p.length>0&&(n.skeletons=p),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Je.DEFAULT_UP=new I(0,1,0);Je.DEFAULT_MATRIX_AUTO_UPDATE=!0;Je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Vn=new I,di=new I,Ta=new I,fi=new I,Ds=new I,Is=new I,dh=new I,ba=new I,wa=new I,Aa=new I,Ra=new Ne,Ca=new Ne,Pa=new Ne;class Xn{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Vn.subVectors(t,e),s.cross(Vn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Vn.subVectors(s,e),di.subVectors(n,e),Ta.subVectors(t,e);const o=Vn.dot(Vn),a=Vn.dot(di),l=Vn.dot(Ta),c=di.dot(di),h=di.dot(Ta),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const p=1/u,d=(c*l-a*h)*p,g=(o*h-a*l)*p;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,fi)===null?!1:fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,fi.x),l.addScaledVector(o,fi.y),l.addScaledVector(a,fi.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Ra.setScalar(0),Ca.setScalar(0),Pa.setScalar(0),Ra.fromBufferAttribute(t,e),Ca.fromBufferAttribute(t,n),Pa.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Ra,r.x),o.addScaledVector(Ca,r.y),o.addScaledVector(Pa,r.z),o}static isFrontFacing(t,e,n,s){return Vn.subVectors(n,e),di.subVectors(t,e),Vn.cross(di).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Vn.subVectors(this.c,this.b),di.subVectors(this.a,this.b),Vn.cross(di).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Xn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Xn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Xn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Xn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Xn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Ds.subVectors(s,n),Is.subVectors(r,n),ba.subVectors(t,n);const l=Ds.dot(ba),c=Is.dot(ba);if(l<=0&&c<=0)return e.copy(n);wa.subVectors(t,s);const h=Ds.dot(wa),u=Is.dot(wa);if(h>=0&&u<=h)return e.copy(s);const p=l*u-h*c;if(p<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Ds,o);Aa.subVectors(t,r);const d=Ds.dot(Aa),g=Is.dot(Aa);if(g>=0&&d<=g)return e.copy(r);const y=d*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Is,a);const m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return dh.subVectors(r,s),a=(u-h)/(u-h+(d-g)),e.copy(s).addScaledVector(dh,a);const f=1/(m+y+p);return o=y*f,a=p*f,e.copy(n).addScaledVector(Ds,o).addScaledVector(Is,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Vu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pi={h:0,s:0,l:0},uo={h:0,s:0,l:0};function Da(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class dt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=gn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,fe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=fe.workingColorSpace){return this.r=t,this.g=e,this.b=n,fe.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=fe.workingColorSpace){if(t=cc(t,1),e=ie(e,0,1),n=ie(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Da(o,r,t+1/3),this.g=Da(o,r,t),this.b=Da(o,r,t-1/3)}return fe.colorSpaceToWorking(this,s),this}setStyle(t,e=gn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=gn){const n=Vu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Si(t.r),this.g=Si(t.g),this.b=Si(t.b),this}copyLinearToSRGB(t){return this.r=Ws(t.r),this.g=Ws(t.g),this.b=Ws(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=gn){return fe.workingToColorSpace(on.copy(this),t),Math.round(ie(on.r*255,0,255))*65536+Math.round(ie(on.g*255,0,255))*256+Math.round(ie(on.b*255,0,255))}getHexString(t=gn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=fe.workingColorSpace){fe.workingToColorSpace(on.copy(this),e);const n=on.r,s=on.g,r=on.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=fe.workingColorSpace){return fe.workingToColorSpace(on.copy(this),e),t.r=on.r,t.g=on.g,t.b=on.b,t}getStyle(t=gn){fe.workingToColorSpace(on.copy(this),t);const e=on.r,n=on.g,s=on.b;return t!==gn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Pi),this.setHSL(Pi.h+t,Pi.s+e,Pi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Pi),t.getHSL(uo);const n=Ir(Pi.h,uo.h,e),s=Ir(Pi.s,uo.s,e),r=Ir(Pi.l,uo.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const on=new dt;dt.NAMES=Vu;let zf=0;class vs extends er{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zf++}),this.uuid=nr(),this.name="",this.type="Material",this.blending=Vs,this.side=Wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ol,this.blendDst=al,this.blendEquation=us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new dt(0,0,0),this.blendAlpha=0,this.depthFunc=Ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Es,this.stencilZFail=Es,this.stencilZPass=Es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Vs&&(n.blending=this.blending),this.side!==Wi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ol&&(n.blendSrc=this.blendSrc),this.blendDst!==al&&(n.blendDst=this.blendDst),this.blendEquation!==us&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ys&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Es&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Es&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Es&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class He extends vs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.combine=Ql,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ke=new I,fo=new At;let kf=0;class $e{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:kf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=jc,this.updateRanges=[],this.gpuType=jn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)fo.fromBufferAttribute(this,e),fo.applyMatrix3(t),this.setXY(e,fo.x,fo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix3(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix4(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyNormalMatrix(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.transformDirection(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=zs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=hn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=zs(e,this.array)),e}setX(t,e){return this.normalized&&(e=hn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=zs(e,this.array)),e}setY(t,e){return this.normalized&&(e=hn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=zs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=hn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=zs(e,this.array)),e}setW(t,e){return this.normalized&&(e=hn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=hn(e,this.array),n=hn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=hn(e,this.array),n=hn(n,this.array),s=hn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=hn(e,this.array),n=hn(n,this.array),s=hn(s,this.array),r=hn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==jc&&(t.usage=this.usage),t}}class Wu extends $e{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Xu extends $e{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ne extends $e{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Hf=0;const Dn=new he,Ia=new Je,Ls=new I,Sn=new _s,Mr=new _s,Ye=new I;class Fe extends er{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=nr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(zu(t)?Xu:Wu)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Dn.makeRotationFromQuaternion(t),this.applyMatrix4(Dn),this}rotateX(t){return Dn.makeRotationX(t),this.applyMatrix4(Dn),this}rotateY(t){return Dn.makeRotationY(t),this.applyMatrix4(Dn),this}rotateZ(t){return Dn.makeRotationZ(t),this.applyMatrix4(Dn),this}translate(t,e,n){return Dn.makeTranslation(t,e,n),this.applyMatrix4(Dn),this}scale(t,e,n){return Dn.makeScale(t,e,n),this.applyMatrix4(Dn),this}lookAt(t){return Ia.lookAt(t),Ia.updateMatrix(),this.applyMatrix4(Ia.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ls).negate(),this.translate(Ls.x,Ls.y,Ls.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ne(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _s);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ye.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(Ye),Ye.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(Ye)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ir);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(Sn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Mr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ye.addVectors(Sn.min,Mr.min),Sn.expandByPoint(Ye),Ye.addVectors(Sn.max,Mr.max),Sn.expandByPoint(Ye)):(Sn.expandByPoint(Mr.min),Sn.expandByPoint(Mr.max))}Sn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ye.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ye));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ye.fromBufferAttribute(a,c),l&&(Ls.fromBufferAttribute(t,c),Ye.add(Ls)),s=Math.max(s,n.distanceToSquared(Ye))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $e(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new I,l[P]=new I;const c=new I,h=new I,u=new I,p=new At,d=new At,g=new At,y=new I,m=new I;function f(P,x,S){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,x),u.fromBufferAttribute(n,S),p.fromBufferAttribute(r,P),d.fromBufferAttribute(r,x),g.fromBufferAttribute(r,S),h.sub(c),u.sub(c),d.sub(p),g.sub(p);const L=1/(d.x*g.y-g.x*d.y);isFinite(L)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(L),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(L),a[P].add(y),a[x].add(y),a[S].add(y),l[P].add(m),l[x].add(m),l[S].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let P=0,x=w.length;P<x;++P){const S=w[P],L=S.start,z=S.count;for(let X=L,j=L+z;X<j;X+=3)f(t.getX(X+0),t.getX(X+1),t.getX(X+2))}const T=new I,M=new I,C=new I,b=new I;function A(P){C.fromBufferAttribute(s,P),b.copy(C);const x=a[P];T.copy(x),T.sub(C.multiplyScalar(C.dot(x))).normalize(),M.crossVectors(b,x);const L=M.dot(l[P])<0?-1:1;o.setXYZW(P,T.x,T.y,T.z,L)}for(let P=0,x=w.length;P<x;++P){const S=w[P],L=S.start,z=S.count;for(let X=L,j=L+z;X<j;X+=3)A(t.getX(X+0)),A(t.getX(X+1)),A(t.getX(X+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new $e(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,d=n.count;p<d;p++)n.setXYZ(p,0,0,0);const s=new I,r=new I,o=new I,a=new I,l=new I,c=new I,h=new I,u=new I;if(t)for(let p=0,d=t.count;p<d;p+=3){const g=t.getX(p+0),y=t.getX(p+1),m=t.getX(p+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let p=0,d=e.count;p<d;p+=3)s.fromBufferAttribute(e,p+0),r.fromBufferAttribute(e,p+1),o.fromBufferAttribute(e,p+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ye.fromBufferAttribute(t,e),Ye.normalize(),t.setXYZ(e,Ye.x,Ye.y,Ye.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,p=new c.constructor(l.length*h);let d=0,g=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?d=l[y]*a.data.stride+a.offset:d=l[y]*h;for(let f=0;f<h;f++)p[g++]=c[d++]}return new $e(p,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Fe,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const p=c[h],d=t(p,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,p=c.length;u<p;u++){const d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let p=0,d=u.length;p<d;p++)h.push(u[p].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const fh=new he,es=new Hu,po=new ir,ph=new I,mo=new I,go=new I,_o=new I,La=new I,vo=new I,mh=new I,xo=new I;class Mt extends Je{constructor(t=new Fe,e=new He){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){vo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(La.fromBufferAttribute(u,t),o?vo.addScaledVector(La,h):vo.addScaledVector(La.sub(e),h))}e.add(vo)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),po.copy(n.boundingSphere),po.applyMatrix4(r),es.copy(t.ray).recast(t.near),!(po.containsPoint(es.origin)===!1&&(es.intersectSphere(po,ph)===null||es.origin.distanceToSquared(ph)>(t.far-t.near)**2))&&(fh.copy(r).invert(),es.copy(t.ray).applyMatrix4(fh),!(n.boundingBox!==null&&es.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,es)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,p=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=p.length;g<y;g++){const m=p[g],f=o[m.materialIndex],w=Math.max(m.start,d.start),T=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let M=w,C=T;M<C;M+=3){const b=a.getX(M),A=a.getX(M+1),P=a.getX(M+2);s=Mo(this,f,t,n,c,h,u,b,A,P),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),y=Math.min(a.count,d.start+d.count);for(let m=g,f=y;m<f;m+=3){const w=a.getX(m),T=a.getX(m+1),M=a.getX(m+2);s=Mo(this,o,t,n,c,h,u,w,T,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=p.length;g<y;g++){const m=p[g],f=o[m.materialIndex],w=Math.max(m.start,d.start),T=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let M=w,C=T;M<C;M+=3){const b=M,A=M+1,P=M+2;s=Mo(this,f,t,n,c,h,u,b,A,P),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),y=Math.min(l.count,d.start+d.count);for(let m=g,f=y;m<f;m+=3){const w=m,T=m+1,M=m+2;s=Mo(this,o,t,n,c,h,u,w,T,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Gf(i,t,e,n,s,r,o,a){let l;if(t.side===fn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Wi,a),l===null)return null;xo.copy(a),xo.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(xo);return c<e.near||c>e.far?null:{distance:c,point:xo.clone(),object:i}}function Mo(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,mo),i.getVertexPosition(l,go),i.getVertexPosition(c,_o);const h=Gf(i,t,e,n,mo,go,_o,mh);if(h){const u=new I;Xn.getBarycoord(mh,mo,go,_o,u),s&&(h.uv=Xn.getInterpolatedAttribute(s,a,l,c,u,new At)),r&&(h.uv1=Xn.getInterpolatedAttribute(r,a,l,c,u,new At)),o&&(h.normal=Xn.getInterpolatedAttribute(o,a,l,c,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const p={a,b:l,c,normal:new I,materialIndex:0};Xn.getNormal(mo,go,_o,p.normal),h.face=p,h.barycoord=u}return h}class xs extends Fe{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let p=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ne(c,3)),this.setAttribute("normal",new ne(h,3)),this.setAttribute("uv",new ne(u,2));function g(y,m,f,w,T,M,C,b,A,P,x){const S=M/A,L=C/P,z=M/2,X=C/2,j=b/2,$=A+1,J=P+1;let st=0,q=0;const mt=new I;for(let Et=0;Et<J;Et++){const Ot=Et*L-X;for(let Zt=0;Zt<$;Zt++){const me=Zt*S-z;mt[y]=me*w,mt[m]=Ot*T,mt[f]=j,c.push(mt.x,mt.y,mt.z),mt[y]=0,mt[m]=0,mt[f]=b>0?1:-1,h.push(mt.x,mt.y,mt.z),u.push(Zt/A),u.push(1-Et/P),st+=1}}for(let Et=0;Et<P;Et++)for(let Ot=0;Ot<A;Ot++){const Zt=p+Ot+$*Et,me=p+Ot+$*(Et+1),Te=p+(Ot+1)+$*(Et+1),ue=p+(Ot+1)+$*Et;l.push(Zt,me,ue),l.push(me,Te,ue),q+=6}a.addGroup(d,q,x),d+=q,p+=st}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xs(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function js(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function dn(i){const t={};for(let e=0;e<i.length;e++){const n=js(i[e]);for(const s in n)t[s]=n[s]}return t}function Vf(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function qu(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:fe.workingColorSpace}const Qs={clone:js,merge:dn};var Wf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ke extends vs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wf,this.fragmentShader=Xf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=js(t.uniforms),this.uniformsGroups=Vf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Yu extends Je{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new he,this.projectionMatrix=new he,this.projectionMatrixInverse=new he,this.coordinateSystem=Qn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Di=new I,gh=new At,_h=new At;class Nn extends Yu{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Hr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Dr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Hr*2*Math.atan(Math.tan(Dr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Di.x,Di.y).multiplyScalar(-t/Di.z),Di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Di.x,Di.y).multiplyScalar(-t/Di.z)}getViewSize(t,e){return this.getViewBounds(t,gh,_h),e.subVectors(_h,gh)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Dr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Us=-90,Ns=1;class qf extends Je{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Nn(Us,Ns,t,e);s.layers=this.layers,this.add(s);const r=new Nn(Us,Ns,t,e);r.layers=this.layers,this.add(r);const o=new Nn(Us,Ns,t,e);o.layers=this.layers,this.add(o);const a=new Nn(Us,Ns,t,e);a.layers=this.layers,this.add(a);const l=new Nn(Us,Ns,t,e);l.layers=this.layers,this.add(l);const c=new Nn(Us,Ns,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Qn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Xo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),p=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,p,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class $u extends cn{constructor(t=[],e=$s,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Yf extends $n{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new $u(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new xs(5,5,5),r=new Ke({name:"CubemapFromEquirect",uniforms:js(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:fn,blending:xi});r.uniforms.tEquirect.value=e;const o=new Mt(s,r),a=e.minFilter;return e.minFilter===fs&&(e.minFilter=Zn),new qf(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}class Ie extends Je{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $f={type:"move"};class Ua{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ie,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ie,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ie,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const y of t.hand.values()){const m=e.getJointPose(y,n),f=this._getHandJoint(c,y);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],p=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&p>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&p<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent($f)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ie;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class uc{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new dt(t),this.density=e}clone(){return new uc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Kf extends Je{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _n,this.environmentIntensity=1,this.environmentRotation=new _n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Jf extends cn{constructor(t=null,e=1,n=1,s,r,o,a,l,c=An,h=An,u,p){super(null,o,a,l,c,h,s,r,u,p),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vh extends $e{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Fs=new he,xh=new he,So=[],Mh=new _s,Zf=new he,Sr=new Mt,yr=new ir;class Sh extends Mt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new vh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Zf)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new _s),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Fs),Mh.copy(t.boundingBox).applyMatrix4(Fs),this.boundingBox.union(Mh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ir),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Fs),yr.copy(t.boundingSphere).applyMatrix4(Fs),this.boundingSphere.union(yr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Sr.geometry=this.geometry,Sr.material=this.material,Sr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),yr.copy(this.boundingSphere),yr.applyMatrix4(n),t.ray.intersectsSphere(yr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Fs),xh.multiplyMatrices(n,Fs),Sr.matrixWorld=xh,Sr.raycast(t,So);for(let o=0,a=So.length;o<a;o++){const l=So[o];l.instanceId=r,l.object=this,e.push(l)}So.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new vh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Jf(new Float32Array(s*this.count),s,this.count,sc,jn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Na=new I,jf=new I,Qf=new Qt;class ls{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Na.subVectors(n,e).cross(jf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Na),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Qf.getNormalMatrix(t),s=this.coplanarPoint(Na).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ns=new ir,tp=new At(.5,.5),yo=new I;class dc{constructor(t=new ls,e=new ls,n=new ls,s=new ls,r=new ls,o=new ls){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Qn,n=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],p=r[6],d=r[7],g=r[8],y=r[9],m=r[10],f=r[11],w=r[12],T=r[13],M=r[14],C=r[15];if(s[0].setComponents(c-o,d-h,f-g,C-w).normalize(),s[1].setComponents(c+o,d+h,f+g,C+w).normalize(),s[2].setComponents(c+a,d+u,f+y,C+T).normalize(),s[3].setComponents(c-a,d-u,f-y,C-T).normalize(),n)s[4].setComponents(l,p,m,M).normalize(),s[5].setComponents(c-l,d-p,f-m,C-M).normalize();else if(s[4].setComponents(c-l,d-p,f-m,C-M).normalize(),e===Qn)s[5].setComponents(c+l,d+p,f+m,C+M).normalize();else if(e===Xo)s[5].setComponents(l,p,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ns.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ns.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ns)}intersectsSprite(t){ns.center.set(0,0,0);const e=tp.distanceTo(t.center);return ns.radius=.7071067811865476+e,ns.applyMatrix4(t.matrixWorld),this.intersectsSphere(ns)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(yo.x=s.normal.x>0?t.max.x:t.min.x,yo.y=s.normal.y>0?t.max.y:t.min.y,yo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(yo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ku extends vs{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new dt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const yh=new he,ql=new Hu,Eo=new ir,To=new I;class Ju extends Je{constructor(t=new Fe,e=new Ku){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Eo.copy(n.boundingSphere),Eo.applyMatrix4(s),Eo.radius+=r,t.ray.intersectsSphere(Eo)===!1)return;yh.copy(s).invert(),ql.copy(t.ray).applyMatrix4(yh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const p=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=p,y=d;g<y;g++){const m=c.getX(g);To.fromBufferAttribute(u,m),Eh(To,m,l,s,t,e,this)}}else{const p=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=p,y=d;g<y;g++)To.fromBufferAttribute(u,g),Eh(To,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Eh(i,t,e,n,s,r,o){const a=ql.distanceSqToPoint(i);if(a<e){const l=new I;ql.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class ep extends cn{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Zu extends cn{constructor(t,e,n=ps,s,r,o,a=An,l=An,c,h=zr,u=1){if(h!==zr&&h!==kr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:t,height:e,depth:u};super(p,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new hc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class ju extends cn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class sr extends Fe{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],p=[],d=[];let g=0;const y=[],m=n/2;let f=0;w(),o===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new ne(u,3)),this.setAttribute("normal",new ne(p,3)),this.setAttribute("uv",new ne(d,2));function w(){const M=new I,C=new I;let b=0;const A=(e-t)/n;for(let P=0;P<=r;P++){const x=[],S=P/r,L=S*(e-t)+t;for(let z=0;z<=s;z++){const X=z/s,j=X*l+a,$=Math.sin(j),J=Math.cos(j);C.x=L*$,C.y=-S*n+m,C.z=L*J,u.push(C.x,C.y,C.z),M.set($,A,J).normalize(),p.push(M.x,M.y,M.z),d.push(X,1-S),x.push(g++)}y.push(x)}for(let P=0;P<s;P++)for(let x=0;x<r;x++){const S=y[x][P],L=y[x+1][P],z=y[x+1][P+1],X=y[x][P+1];(t>0||x!==0)&&(h.push(S,L,X),b+=3),(e>0||x!==r-1)&&(h.push(L,z,X),b+=3)}c.addGroup(f,b,0),f+=b}function T(M){const C=g,b=new At,A=new I;let P=0;const x=M===!0?t:e,S=M===!0?1:-1;for(let z=1;z<=s;z++)u.push(0,m*S,0),p.push(0,S,0),d.push(.5,.5),g++;const L=g;for(let z=0;z<=s;z++){const j=z/s*l+a,$=Math.cos(j),J=Math.sin(j);A.x=x*J,A.y=m*S,A.z=x*$,u.push(A.x,A.y,A.z),p.push(0,S,0),b.x=$*.5+.5,b.y=J*.5*S+.5,d.push(b.x,b.y),g++}for(let z=0;z<s;z++){const X=C+z,j=L+z;M===!0?h.push(j,j+1,X):h.push(j+1,j,X),P+=3}c.addGroup(f,P,M===!0?1:2),f+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sr(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Xr extends sr{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Xr(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Qo extends Fe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new ne(r,3)),this.setAttribute("normal",new ne(r.slice(),3)),this.setAttribute("uv",new ne(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(w){const T=new I,M=new I,C=new I;for(let b=0;b<e.length;b+=3)d(e[b+0],T),d(e[b+1],M),d(e[b+2],C),l(T,M,C,w)}function l(w,T,M,C){const b=C+1,A=[];for(let P=0;P<=b;P++){A[P]=[];const x=w.clone().lerp(M,P/b),S=T.clone().lerp(M,P/b),L=b-P;for(let z=0;z<=L;z++)z===0&&P===b?A[P][z]=x:A[P][z]=x.clone().lerp(S,z/L)}for(let P=0;P<b;P++)for(let x=0;x<2*(b-P)-1;x++){const S=Math.floor(x/2);x%2===0?(p(A[P][S+1]),p(A[P+1][S]),p(A[P][S])):(p(A[P][S+1]),p(A[P+1][S+1]),p(A[P+1][S]))}}function c(w){const T=new I;for(let M=0;M<r.length;M+=3)T.x=r[M+0],T.y=r[M+1],T.z=r[M+2],T.normalize().multiplyScalar(w),r[M+0]=T.x,r[M+1]=T.y,r[M+2]=T.z}function h(){const w=new I;for(let T=0;T<r.length;T+=3){w.x=r[T+0],w.y=r[T+1],w.z=r[T+2];const M=m(w)/2/Math.PI+.5,C=f(w)/Math.PI+.5;o.push(M,1-C)}g(),u()}function u(){for(let w=0;w<o.length;w+=6){const T=o[w+0],M=o[w+2],C=o[w+4],b=Math.max(T,M,C),A=Math.min(T,M,C);b>.9&&A<.1&&(T<.2&&(o[w+0]+=1),M<.2&&(o[w+2]+=1),C<.2&&(o[w+4]+=1))}}function p(w){r.push(w.x,w.y,w.z)}function d(w,T){const M=w*3;T.x=t[M+0],T.y=t[M+1],T.z=t[M+2]}function g(){const w=new I,T=new I,M=new I,C=new I,b=new At,A=new At,P=new At;for(let x=0,S=0;x<r.length;x+=9,S+=6){w.set(r[x+0],r[x+1],r[x+2]),T.set(r[x+3],r[x+4],r[x+5]),M.set(r[x+6],r[x+7],r[x+8]),b.set(o[S+0],o[S+1]),A.set(o[S+2],o[S+3]),P.set(o[S+4],o[S+5]),C.copy(w).add(T).add(M).divideScalar(3);const L=m(C);y(b,S+0,w,L),y(A,S+2,T,L),y(P,S+4,M,L)}}function y(w,T,M,C){C<0&&w.x===1&&(o[T]=w.x-1),M.x===0&&M.z===0&&(o[T]=C/2/Math.PI+.5)}function m(w){return Math.atan2(w.z,-w.x)}function f(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qo(t.vertices,t.indices,t.radius,t.details)}}class Ei{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const h=n[s],p=n[s+1]-h,d=(o-h)/p;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new At:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new I,s=[],r=[],o=[],a=new I,l=new he;for(let d=0;d<=t;d++){const g=d/t;s[d]=this.getTangentAt(g,new I)}r[0]=new I,o[0]=new I;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),p=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),p<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(ie(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(ie(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Qu extends Ei{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new At){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),p=l-this.aX,d=c-this.aY;l=p*h-d*u+this.aX,c=p*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class np extends Qu{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function fc(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let p=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;p*=h,d*=h,s(o,a,p,d)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const bo=new I,Fa=new fc,Oa=new fc,Ba=new fc;class qr extends Ei{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new I){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(bo.subVectors(s[0],s[1]).add(s[0]),c=bo);const u=s[a%r],p=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(bo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=bo),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),d),y=Math.pow(u.distanceToSquared(p),d),m=Math.pow(p.distanceToSquared(h),d);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),Fa.initNonuniformCatmullRom(c.x,u.x,p.x,h.x,g,y,m),Oa.initNonuniformCatmullRom(c.y,u.y,p.y,h.y,g,y,m),Ba.initNonuniformCatmullRom(c.z,u.z,p.z,h.z,g,y,m)}else this.curveType==="catmullrom"&&(Fa.initCatmullRom(c.x,u.x,p.x,h.x,this.tension),Oa.initCatmullRom(c.y,u.y,p.y,h.y,this.tension),Ba.initCatmullRom(c.z,u.z,p.z,h.z,this.tension));return n.set(Fa.calc(l),Oa.calc(l),Ba.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Th(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function ip(i,t){const e=1-i;return e*e*t}function sp(i,t){return 2*(1-i)*i*t}function rp(i,t){return i*i*t}function Lr(i,t,e,n){return ip(i,t)+sp(i,e)+rp(i,n)}function op(i,t){const e=1-i;return e*e*e*t}function ap(i,t){const e=1-i;return 3*e*e*i*t}function lp(i,t){return 3*(1-i)*i*i*t}function cp(i,t){return i*i*i*t}function Ur(i,t,e,n,s){return op(i,t)+ap(i,e)+lp(i,n)+cp(i,s)}class hp extends Ei{constructor(t=new At,e=new At,n=new At,s=new At){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new At){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ur(t,s.x,r.x,o.x,a.x),Ur(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class up extends Ei{constructor(t=new I,e=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new I){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ur(t,s.x,r.x,o.x,a.x),Ur(t,s.y,r.y,o.y,a.y),Ur(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class dp extends Ei{constructor(t=new At,e=new At){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new At){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new At){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class fp extends Ei{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class pp extends Ei{constructor(t=new At,e=new At,n=new At){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new At){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Lr(t,s.x,r.x,o.x),Lr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class td extends Ei{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Lr(t,s.x,r.x,o.x),Lr(t,s.y,r.y,o.y),Lr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class mp extends Ei{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new At){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Th(a,l.x,c.x,h.x,u.x),Th(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new At().fromArray(s))}return this}}var gp=Object.freeze({__proto__:null,ArcCurve:np,CatmullRomCurve3:qr,CubicBezierCurve:hp,CubicBezierCurve3:up,EllipseCurve:Qu,LineCurve:dp,LineCurve3:fp,QuadraticBezierCurve:pp,QuadraticBezierCurve3:td,SplineCurve:mp});class Yr extends Qo{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Yr(t.radius,t.detail)}}class ta extends Qo{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ta(t.radius,t.detail)}}class Fn extends Fe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,p=e/l,d=[],g=[],y=[],m=[];for(let f=0;f<h;f++){const w=f*p-o;for(let T=0;T<c;T++){const M=T*u-r;g.push(M,-w,0),y.push(0,0,1),m.push(T/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let w=0;w<a;w++){const T=w+c*f,M=w+c*(f+1),C=w+1+c*(f+1),b=w+1+c*f;d.push(T,M,b),d.push(M,C,b)}this.setIndex(d),this.setAttribute("position",new ne(g,3)),this.setAttribute("normal",new ne(y,3)),this.setAttribute("uv",new ne(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fn(t.width,t.height,t.widthSegments,t.heightSegments)}}class rr extends Fe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new I,p=new I,d=[],g=[],y=[],m=[];for(let f=0;f<=n;f++){const w=[],T=f/n;let M=0;f===0&&o===0?M=.5/e:f===n&&l===Math.PI&&(M=-.5/e);for(let C=0;C<=e;C++){const b=C/e;u.x=-t*Math.cos(s+b*r)*Math.sin(o+T*a),u.y=t*Math.cos(o+T*a),u.z=t*Math.sin(s+b*r)*Math.sin(o+T*a),g.push(u.x,u.y,u.z),p.copy(u).normalize(),y.push(p.x,p.y,p.z),m.push(b+M,1-T),w.push(c++)}h.push(w)}for(let f=0;f<n;f++)for(let w=0;w<e;w++){const T=h[f][w+1],M=h[f][w],C=h[f+1][w],b=h[f+1][w+1];(f!==0||o>0)&&d.push(T,M,b),(f!==n-1||l<Math.PI)&&d.push(M,C,b)}this.setIndex(d),this.setAttribute("position",new ne(g,3)),this.setAttribute("normal",new ne(y,3)),this.setAttribute("uv",new ne(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class qi extends Fe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],c=[],h=new I,u=new I,p=new I;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){const y=g/s*r,m=d/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(y),u.y=(t+e*Math.cos(m))*Math.sin(y),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(y),h.y=t*Math.sin(y),p.subVectors(u,h).normalize(),l.push(p.x,p.y,p.z),c.push(g/s),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){const y=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,f=(s+1)*(d-1)+g,w=(s+1)*d+g;o.push(y,m,w),o.push(m,f,w)}this.setIndex(o),this.setAttribute("position",new ne(a,3)),this.setAttribute("normal",new ne(l,3)),this.setAttribute("uv",new ne(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qi(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class $r extends Fe{constructor(t=new td(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new I,l=new I,c=new At;let h=new I;const u=[],p=[],d=[],g=[];y(),this.setIndex(g),this.setAttribute("position",new ne(u,3)),this.setAttribute("normal",new ne(p,3)),this.setAttribute("uv",new ne(d,2));function y(){for(let T=0;T<e;T++)m(T);m(r===!1?e:0),w(),f()}function m(T){h=t.getPointAt(T/e,h);const M=o.normals[T],C=o.binormals[T];for(let b=0;b<=s;b++){const A=b/s*Math.PI*2,P=Math.sin(A),x=-Math.cos(A);l.x=x*M.x+P*C.x,l.y=x*M.y+P*C.y,l.z=x*M.z+P*C.z,l.normalize(),p.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function f(){for(let T=1;T<=e;T++)for(let M=1;M<=s;M++){const C=(s+1)*(T-1)+(M-1),b=(s+1)*T+(M-1),A=(s+1)*T+M,P=(s+1)*(T-1)+M;g.push(C,b,P),g.push(b,A,P)}}function w(){for(let T=0;T<=e;T++)for(let M=0;M<=s;M++)c.x=T/e,c.y=M/s,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new $r(new gp[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class _p extends Ke{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class jt extends vs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new dt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lc,this.normalScale=new At(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class vp extends vs{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lc,this.normalScale=new At(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.combine=Ql,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class xp extends vs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Mp extends vs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class ed extends Je{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new dt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Sp extends ed{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Je.DEFAULT_UP),this.updateMatrix(),this.groundColor=new dt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const za=new he,bh=new I,wh=new I;class yp{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new At(512,512),this.mapType=ei,this.map=null,this.mapPass=null,this.matrix=new he,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new dc,this._frameExtents=new At(1,1),this._viewportCount=1,this._viewports=[new Ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;bh.setFromMatrixPosition(t.matrixWorld),e.position.copy(bh),wh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(wh),e.updateMatrixWorld(),za.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(za,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(za)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class pc extends Yu{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Ep extends yp{constructor(){super(new pc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class nd extends ed{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Je.DEFAULT_UP),this.updateMatrix(),this.target=new Je,this.shadow=new Ep}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Tp extends Nn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class bp{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Ah(i,t,e,n){const s=wp(n);switch(e){case Nu:return i*t;case sc:return i*t/s.components*s.byteLength;case rc:return i*t/s.components*s.byteLength;case Ou:return i*t*2/s.components*s.byteLength;case oc:return i*t*2/s.components*s.byteLength;case Fu:return i*t*3/s.components*s.byteLength;case Yn:return i*t*4/s.components*s.byteLength;case ac:return i*t*4/s.components*s.byteLength;case No:case Fo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Oo:case Bo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case xl:case Sl:return Math.max(i,16)*Math.max(t,8)/4;case vl:case Ml:return Math.max(i,8)*Math.max(t,8)/2;case yl:case El:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Tl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case bl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case wl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Al:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Rl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Cl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Pl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Dl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Il:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ll:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ul:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Nl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Fl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ol:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Bl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case zl:case kl:case Hl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Gl:case Vl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Wl:case Xl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function wp(i){switch(i){case ei:case Du:return{byteLength:1,components:1};case Or:case Iu:case Mi:return{byteLength:2,components:1};case nc:case ic:return{byteLength:2,components:4};case ps:case ec:case jn:return{byteLength:4,components:1};case Lu:case Uu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jl);function id(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Ap(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,p=i.createBuffer();i.bindBuffer(l,p),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let p=0;for(let d=1;d<u.length;d++){const g=u[p],y=u[d];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++p,u[p]=y)}u.length=p+1;for(let d=0,g=u.length;d<g;d++){const y=u[d];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Rp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cp=`#ifdef USE_ALPHAHASH
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
#endif`,Pp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Dp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ip=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Lp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Up=`#ifdef USE_AOMAP
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
#endif`,Np=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fp=`#ifdef USE_BATCHING
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
#endif`,Op=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Hp=`#ifdef USE_IRIDESCENCE
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
#endif`,Gp=`#ifdef USE_BUMPMAP
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
#endif`,Vp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Wp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$p=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Kp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Jp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Zp=`#define PI 3.141592653589793
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
} // validated`,jp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Qp=`vec3 transformedNormal = objectNormal;
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
#endif`,tm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,em=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,im=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sm="gl_FragColor = linearToOutputTexel( gl_FragColor );",rm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,om=`#ifdef USE_ENVMAP
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
#endif`,am=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,lm=`#ifdef USE_ENVMAP
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
#endif`,cm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hm=`#ifdef USE_ENVMAP
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
#endif`,um=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mm=`#ifdef USE_GRADIENTMAP
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
}`,gm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_m=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xm=`uniform bool receiveShadow;
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
#endif`,Mm=`#ifdef USE_ENVMAP
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
#endif`,Sm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ym=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Em=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Tm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bm=`PhysicalMaterial material;
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
#endif`,wm=`struct PhysicalMaterial {
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
}`,Am=`
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
#endif`,Rm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Cm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Pm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Im=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Um=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Nm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Om=`#if defined( USE_POINTS_UV )
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
#endif`,Bm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,km=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vm=`#ifdef USE_MORPHTARGETS
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
#endif`,Wm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,qm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ym=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$m=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Km=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Jm=`#ifdef USE_NORMALMAP
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
#endif`,Zm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,t0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,e0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,n0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,i0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,s0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,r0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,o0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,a0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,l0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,c0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,h0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,u0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,d0=`float getShadowMask() {
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
}`,f0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,p0=`#ifdef USE_SKINNING
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
#endif`,m0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,g0=`#ifdef USE_SKINNING
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
#endif`,_0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,v0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,x0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,M0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,S0=`#ifdef USE_TRANSMISSION
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
#endif`,y0=`#ifdef USE_TRANSMISSION
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
#endif`,E0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,T0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,b0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,w0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const A0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,R0=`uniform sampler2D t2D;
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
}`,C0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,P0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,D0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,I0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,L0=`#include <common>
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
}`,U0=`#if DEPTH_PACKING == 3200
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
}`,N0=`#define DISTANCE
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
}`,F0=`#define DISTANCE
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
}`,O0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,B0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z0=`uniform float scale;
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
}`,k0=`uniform vec3 diffuse;
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
}`,H0=`#include <common>
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
}`,G0=`uniform vec3 diffuse;
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
}`,V0=`#define LAMBERT
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
}`,W0=`#define LAMBERT
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
}`,X0=`#define MATCAP
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
}`,q0=`#define MATCAP
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
}`,Y0=`#define NORMAL
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
}`,$0=`#define NORMAL
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
}`,K0=`#define PHONG
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
}`,J0=`#define PHONG
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
}`,Z0=`#define STANDARD
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
}`,j0=`#define STANDARD
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
}`,Q0=`#define TOON
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
}`,tg=`#define TOON
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
}`,eg=`uniform float size;
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
}`,ng=`uniform vec3 diffuse;
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
}`,ig=`#include <common>
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
}`,sg=`uniform vec3 color;
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
}`,rg=`uniform float rotation;
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
}`,og=`uniform vec3 diffuse;
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
}`,ee={alphahash_fragment:Rp,alphahash_pars_fragment:Cp,alphamap_fragment:Pp,alphamap_pars_fragment:Dp,alphatest_fragment:Ip,alphatest_pars_fragment:Lp,aomap_fragment:Up,aomap_pars_fragment:Np,batching_pars_vertex:Fp,batching_vertex:Op,begin_vertex:Bp,beginnormal_vertex:zp,bsdfs:kp,iridescence_fragment:Hp,bumpmap_pars_fragment:Gp,clipping_planes_fragment:Vp,clipping_planes_pars_fragment:Wp,clipping_planes_pars_vertex:Xp,clipping_planes_vertex:qp,color_fragment:Yp,color_pars_fragment:$p,color_pars_vertex:Kp,color_vertex:Jp,common:Zp,cube_uv_reflection_fragment:jp,defaultnormal_vertex:Qp,displacementmap_pars_vertex:tm,displacementmap_vertex:em,emissivemap_fragment:nm,emissivemap_pars_fragment:im,colorspace_fragment:sm,colorspace_pars_fragment:rm,envmap_fragment:om,envmap_common_pars_fragment:am,envmap_pars_fragment:lm,envmap_pars_vertex:cm,envmap_physical_pars_fragment:Mm,envmap_vertex:hm,fog_vertex:um,fog_pars_vertex:dm,fog_fragment:fm,fog_pars_fragment:pm,gradientmap_pars_fragment:mm,lightmap_pars_fragment:gm,lights_lambert_fragment:_m,lights_lambert_pars_fragment:vm,lights_pars_begin:xm,lights_toon_fragment:Sm,lights_toon_pars_fragment:ym,lights_phong_fragment:Em,lights_phong_pars_fragment:Tm,lights_physical_fragment:bm,lights_physical_pars_fragment:wm,lights_fragment_begin:Am,lights_fragment_maps:Rm,lights_fragment_end:Cm,logdepthbuf_fragment:Pm,logdepthbuf_pars_fragment:Dm,logdepthbuf_pars_vertex:Im,logdepthbuf_vertex:Lm,map_fragment:Um,map_pars_fragment:Nm,map_particle_fragment:Fm,map_particle_pars_fragment:Om,metalnessmap_fragment:Bm,metalnessmap_pars_fragment:zm,morphinstance_vertex:km,morphcolor_vertex:Hm,morphnormal_vertex:Gm,morphtarget_pars_vertex:Vm,morphtarget_vertex:Wm,normal_fragment_begin:Xm,normal_fragment_maps:qm,normal_pars_fragment:Ym,normal_pars_vertex:$m,normal_vertex:Km,normalmap_pars_fragment:Jm,clearcoat_normal_fragment_begin:Zm,clearcoat_normal_fragment_maps:jm,clearcoat_pars_fragment:Qm,iridescence_pars_fragment:t0,opaque_fragment:e0,packing:n0,premultiplied_alpha_fragment:i0,project_vertex:s0,dithering_fragment:r0,dithering_pars_fragment:o0,roughnessmap_fragment:a0,roughnessmap_pars_fragment:l0,shadowmap_pars_fragment:c0,shadowmap_pars_vertex:h0,shadowmap_vertex:u0,shadowmask_pars_fragment:d0,skinbase_vertex:f0,skinning_pars_vertex:p0,skinning_vertex:m0,skinnormal_vertex:g0,specularmap_fragment:_0,specularmap_pars_fragment:v0,tonemapping_fragment:x0,tonemapping_pars_fragment:M0,transmission_fragment:S0,transmission_pars_fragment:y0,uv_pars_fragment:E0,uv_pars_vertex:T0,uv_vertex:b0,worldpos_vertex:w0,background_vert:A0,background_frag:R0,backgroundCube_vert:C0,backgroundCube_frag:P0,cube_vert:D0,cube_frag:I0,depth_vert:L0,depth_frag:U0,distanceRGBA_vert:N0,distanceRGBA_frag:F0,equirect_vert:O0,equirect_frag:B0,linedashed_vert:z0,linedashed_frag:k0,meshbasic_vert:H0,meshbasic_frag:G0,meshlambert_vert:V0,meshlambert_frag:W0,meshmatcap_vert:X0,meshmatcap_frag:q0,meshnormal_vert:Y0,meshnormal_frag:$0,meshphong_vert:K0,meshphong_frag:J0,meshphysical_vert:Z0,meshphysical_frag:j0,meshtoon_vert:Q0,meshtoon_frag:tg,points_vert:eg,points_frag:ng,shadow_vert:ig,shadow_frag:sg,sprite_vert:rg,sprite_frag:og},xt={common:{diffuse:{value:new dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qt}},envmap:{envMap:{value:null},envMapRotation:{value:new Qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qt},normalScale:{value:new At(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0},uvTransform:{value:new Qt}},sprite:{diffuse:{value:new dt(16777215)},opacity:{value:1},center:{value:new At(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}}},Jn={basic:{uniforms:dn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:ee.meshbasic_vert,fragmentShader:ee.meshbasic_frag},lambert:{uniforms:dn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new dt(0)}}]),vertexShader:ee.meshlambert_vert,fragmentShader:ee.meshlambert_frag},phong:{uniforms:dn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new dt(0)},specular:{value:new dt(1118481)},shininess:{value:30}}]),vertexShader:ee.meshphong_vert,fragmentShader:ee.meshphong_frag},standard:{uniforms:dn([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag},toon:{uniforms:dn([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new dt(0)}}]),vertexShader:ee.meshtoon_vert,fragmentShader:ee.meshtoon_frag},matcap:{uniforms:dn([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:ee.meshmatcap_vert,fragmentShader:ee.meshmatcap_frag},points:{uniforms:dn([xt.points,xt.fog]),vertexShader:ee.points_vert,fragmentShader:ee.points_frag},dashed:{uniforms:dn([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ee.linedashed_vert,fragmentShader:ee.linedashed_frag},depth:{uniforms:dn([xt.common,xt.displacementmap]),vertexShader:ee.depth_vert,fragmentShader:ee.depth_frag},normal:{uniforms:dn([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:ee.meshnormal_vert,fragmentShader:ee.meshnormal_frag},sprite:{uniforms:dn([xt.sprite,xt.fog]),vertexShader:ee.sprite_vert,fragmentShader:ee.sprite_frag},background:{uniforms:{uvTransform:{value:new Qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ee.background_vert,fragmentShader:ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qt}},vertexShader:ee.backgroundCube_vert,fragmentShader:ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ee.cube_vert,fragmentShader:ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ee.equirect_vert,fragmentShader:ee.equirect_frag},distanceRGBA:{uniforms:dn([xt.common,xt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ee.distanceRGBA_vert,fragmentShader:ee.distanceRGBA_frag},shadow:{uniforms:dn([xt.lights,xt.fog,{color:{value:new dt(0)},opacity:{value:1}}]),vertexShader:ee.shadow_vert,fragmentShader:ee.shadow_frag}};Jn.physical={uniforms:dn([Jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qt},clearcoatNormalScale:{value:new At(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qt},sheen:{value:0},sheenColor:{value:new dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qt},transmissionSamplerSize:{value:new At},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qt},attenuationDistance:{value:0},attenuationColor:{value:new dt(0)},specularColor:{value:new dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qt},anisotropyVector:{value:new At},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qt}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag};const wo={r:0,b:0,g:0},is=new _n,ag=new he;function lg(i,t,e,n,s,r,o){const a=new dt(0);let l=r===!0?0:1,c,h,u=null,p=0,d=null;function g(T){let M=T.isScene===!0?T.background:null;return M&&M.isTexture&&(M=(T.backgroundBlurriness>0?e:t).get(M)),M}function y(T){let M=!1;const C=g(T);C===null?f(a,l):C&&C.isColor&&(f(C,1),M=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(T,M){const C=g(M);C&&(C.isCubeTexture||C.mapping===Zo)?(h===void 0&&(h=new Mt(new xs(1,1,1),new Ke({name:"BackgroundCubeMaterial",uniforms:js(Jn.backgroundCube.uniforms),vertexShader:Jn.backgroundCube.vertexShader,fragmentShader:Jn.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,A,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),is.copy(M.backgroundRotation),is.x*=-1,is.y*=-1,is.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(is.y*=-1,is.z*=-1),h.material.uniforms.envMap.value=C,h.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(ag.makeRotationFromEuler(is)),h.material.toneMapped=fe.getTransfer(C.colorSpace)!==xe,(u!==C||p!==C.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=C,p=C.version,d=i.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new Mt(new Fn(2,2),new Ke({name:"BackgroundMaterial",uniforms:js(Jn.background.uniforms),vertexShader:Jn.background.vertexShader,fragmentShader:Jn.background.fragmentShader,side:Wi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=fe.getTransfer(C.colorSpace)!==xe,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(u!==C||p!==C.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=C,p=C.version,d=i.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function f(T,M){T.getRGB(wo,qu(i)),n.buffers.color.setClear(wo.r,wo.g,wo.b,M,o)}function w(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,M=1){a.set(T),l=M,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,f(a,l)},render:y,addToRenderList:m,dispose:w}}function cg(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null);let r=s,o=!1;function a(S,L,z,X,j){let $=!1;const J=u(X,z,L);r!==J&&(r=J,c(r.object)),$=d(S,X,z,j),$&&g(S,X,z,j),j!==null&&t.update(j,i.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,M(S,L,z,X),j!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function u(S,L,z){const X=z.wireframe===!0;let j=n[S.id];j===void 0&&(j={},n[S.id]=j);let $=j[L.id];$===void 0&&($={},j[L.id]=$);let J=$[X];return J===void 0&&(J=p(l()),$[X]=J),J}function p(S){const L=[],z=[],X=[];for(let j=0;j<e;j++)L[j]=0,z[j]=0,X[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:z,attributeDivisors:X,object:S,attributes:{},index:null}}function d(S,L,z,X){const j=r.attributes,$=L.attributes;let J=0;const st=z.getAttributes();for(const q in st)if(st[q].location>=0){const Et=j[q];let Ot=$[q];if(Ot===void 0&&(q==="instanceMatrix"&&S.instanceMatrix&&(Ot=S.instanceMatrix),q==="instanceColor"&&S.instanceColor&&(Ot=S.instanceColor)),Et===void 0||Et.attribute!==Ot||Ot&&Et.data!==Ot.data)return!0;J++}return r.attributesNum!==J||r.index!==X}function g(S,L,z,X){const j={},$=L.attributes;let J=0;const st=z.getAttributes();for(const q in st)if(st[q].location>=0){let Et=$[q];Et===void 0&&(q==="instanceMatrix"&&S.instanceMatrix&&(Et=S.instanceMatrix),q==="instanceColor"&&S.instanceColor&&(Et=S.instanceColor));const Ot={};Ot.attribute=Et,Et&&Et.data&&(Ot.data=Et.data),j[q]=Ot,J++}r.attributes=j,r.attributesNum=J,r.index=X}function y(){const S=r.newAttributes;for(let L=0,z=S.length;L<z;L++)S[L]=0}function m(S){f(S,0)}function f(S,L){const z=r.newAttributes,X=r.enabledAttributes,j=r.attributeDivisors;z[S]=1,X[S]===0&&(i.enableVertexAttribArray(S),X[S]=1),j[S]!==L&&(i.vertexAttribDivisor(S,L),j[S]=L)}function w(){const S=r.newAttributes,L=r.enabledAttributes;for(let z=0,X=L.length;z<X;z++)L[z]!==S[z]&&(i.disableVertexAttribArray(z),L[z]=0)}function T(S,L,z,X,j,$,J){J===!0?i.vertexAttribIPointer(S,L,z,j,$):i.vertexAttribPointer(S,L,z,X,j,$)}function M(S,L,z,X){y();const j=X.attributes,$=z.getAttributes(),J=L.defaultAttributeValues;for(const st in $){const q=$[st];if(q.location>=0){let mt=j[st];if(mt===void 0&&(st==="instanceMatrix"&&S.instanceMatrix&&(mt=S.instanceMatrix),st==="instanceColor"&&S.instanceColor&&(mt=S.instanceColor)),mt!==void 0){const Et=mt.normalized,Ot=mt.itemSize,Zt=t.get(mt);if(Zt===void 0)continue;const me=Zt.buffer,Te=Zt.type,ue=Zt.bytesPerElement,Z=Te===i.INT||Te===i.UNSIGNED_INT||mt.gpuType===ec;if(mt.isInterleavedBufferAttribute){const it=mt.data,Rt=it.stride,Ht=mt.offset;if(it.isInstancedInterleavedBuffer){for(let Nt=0;Nt<q.locationSize;Nt++)f(q.location+Nt,it.meshPerAttribute);S.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let Nt=0;Nt<q.locationSize;Nt++)m(q.location+Nt);i.bindBuffer(i.ARRAY_BUFFER,me);for(let Nt=0;Nt<q.locationSize;Nt++)T(q.location+Nt,Ot/q.locationSize,Te,Et,Rt*ue,(Ht+Ot/q.locationSize*Nt)*ue,Z)}else{if(mt.isInstancedBufferAttribute){for(let it=0;it<q.locationSize;it++)f(q.location+it,mt.meshPerAttribute);S.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let it=0;it<q.locationSize;it++)m(q.location+it);i.bindBuffer(i.ARRAY_BUFFER,me);for(let it=0;it<q.locationSize;it++)T(q.location+it,Ot/q.locationSize,Te,Et,Ot*ue,Ot/q.locationSize*it*ue,Z)}}else if(J!==void 0){const Et=J[st];if(Et!==void 0)switch(Et.length){case 2:i.vertexAttrib2fv(q.location,Et);break;case 3:i.vertexAttrib3fv(q.location,Et);break;case 4:i.vertexAttrib4fv(q.location,Et);break;default:i.vertexAttrib1fv(q.location,Et)}}}}w()}function C(){P();for(const S in n){const L=n[S];for(const z in L){const X=L[z];for(const j in X)h(X[j].object),delete X[j];delete L[z]}delete n[S]}}function b(S){if(n[S.id]===void 0)return;const L=n[S.id];for(const z in L){const X=L[z];for(const j in X)h(X[j].object),delete X[j];delete L[z]}delete n[S.id]}function A(S){for(const L in n){const z=n[L];if(z[S.id]===void 0)continue;const X=z[S.id];for(const j in X)h(X[j].object),delete X[j];delete z[S.id]}}function P(){x(),o=!0,r!==s&&(r=s,c(r.object))}function x(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:x,dispose:C,releaseStatesOfGeometry:b,releaseStatesOfProgram:A,initAttributes:y,enableAttribute:m,disableUnusedAttributes:w}}function hg(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];e.update(d,n,1)}function l(c,h,u,p){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],h[g],p[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,p,0,u);let g=0;for(let y=0;y<u;y++)g+=h[y]*p[y];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function ug(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==Yn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const P=A===Mi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==ei&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==jn&&!P)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,p=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,b=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:p,maxTextures:d,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:w,maxVaryings:T,maxFragmentUniforms:M,vertexTextures:C,maxSamples:b}}function dg(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new ls,a=new Qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,p){const d=u.length!==0||p||n!==0||s;return s=p,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,p){e=h(u,p,0)},this.setState=function(u,p,d){const g=u.clippingPlanes,y=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const w=r?0:n,T=w*4;let M=f.clippingState||null;l.value=M,M=h(g,p,T,d);for(let C=0;C!==T;++C)M[C]=e[C];f.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,p,d,g){const y=u!==null?u.length:0;let m=null;if(y!==0){if(m=l.value,g!==!0||m===null){const f=d+y*4,w=p.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<f)&&(m=new Float32Array(f));for(let T=0,M=d;T!==y;++T,M+=4)o.copy(u[T]).applyMatrix4(w,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}function fg(i){let t=new WeakMap;function e(o,a){return a===ml?o.mapping=$s:a===gl&&(o.mapping=Ks),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ml||a===gl)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Yf(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const ks=4,Rh=[.125,.215,.35,.446,.526,.582],ds=20,ka=new pc,Ch=new dt;let Ha=null,Ga=0,Va=0,Wa=!1;const cs=(1+Math.sqrt(5))/2,Os=1/cs,Ph=[new I(-cs,Os,0),new I(cs,Os,0),new I(-Os,0,cs),new I(Os,0,cs),new I(0,cs,-Os),new I(0,cs,Os),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],pg=new I;class Dh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=pg}=r;Ha=this._renderer.getRenderTarget(),Ga=this._renderer.getActiveCubeFace(),Va=this._renderer.getActiveMipmapLevel(),Wa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Uh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ha,Ga,Va),this._renderer.xr.enabled=Wa,t.scissorTest=!1,Ao(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===$s||t.mapping===Ks?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ha=this._renderer.getRenderTarget(),Ga=this._renderer.getActiveCubeFace(),Va=this._renderer.getActiveMipmapLevel(),Wa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Zn,minFilter:Zn,generateMipmaps:!1,type:Mi,format:Yn,colorSpace:Zs,depthBuffer:!1},s=Ih(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ih(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=mg(r)),this._blurMaterial=gg(r,t,e)}return s}_compileMaterial(t){const e=new Mt(this._lodPlanes[0],t);this._renderer.compile(e,ka)}_sceneToCubeUV(t,e,n,s,r){const l=new Nn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,p=u.autoClear,d=u.toneMapping;u.getClearColor(Ch),u.toneMapping=Hi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));const y=new He({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1}),m=new Mt(new xs,y);let f=!1;const w=t.background;w?w.isColor&&(y.color.copy(w),t.background=null,f=!0):(y.color.copy(Ch),f=!0);for(let T=0;T<6;T++){const M=T%3;M===0?(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[T],r.y,r.z)):M===1?(l.up.set(0,0,c[T]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[T],r.z)):(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[T]));const C=this._cubeSize;Ao(s,M*C,T>2?C:0,C,C),u.setRenderTarget(s),f&&u.render(m,l),u.render(t,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=d,u.autoClear=p,t.background=w}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===$s||t.mapping===Ks;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Uh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Mt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Ao(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,ka)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ph[(s-r-1)%Ph.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Mt(this._lodPlanes[s],c),p=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ds-1),y=r/g,m=isFinite(r)?1+Math.floor(h*y):ds;m>ds&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ds}`);const f=[];let w=0;for(let A=0;A<ds;++A){const P=A/y,x=Math.exp(-P*P/2);f.push(x),A===0?w+=x:A<m&&(w+=2*x)}for(let A=0;A<f.length;A++)f[A]=f[A]/w;p.envMap.value=t.texture,p.samples.value=m,p.weights.value=f,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:T}=this;p.dTheta.value=g,p.mipInt.value=T-n;const M=this._sizeLods[s],C=3*M*(s>T-ks?s-T+ks:0),b=4*(this._cubeSize-M);Ao(e,C,b,3*M,2*M),l.setRenderTarget(e),l.render(u,ka)}}function mg(i){const t=[],e=[],n=[];let s=i;const r=i-ks+1+Rh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-ks?l=Rh[o-i+ks-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,p=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,y=3,m=2,f=1,w=new Float32Array(y*g*d),T=new Float32Array(m*g*d),M=new Float32Array(f*g*d);for(let b=0;b<d;b++){const A=b%3*2/3-1,P=b>2?0:-1,x=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];w.set(x,y*g*b),T.set(p,m*g*b);const S=[b,b,b,b,b,b];M.set(S,f*g*b)}const C=new Fe;C.setAttribute("position",new $e(w,y)),C.setAttribute("uv",new $e(T,m)),C.setAttribute("faceIndex",new $e(M,f)),t.push(C),s>ks&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ih(i,t,e){const n=new $n(i,t,e);return n.texture.mapping=Zo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ao(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function gg(i,t,e){const n=new Float32Array(ds),s=new I(0,1,0);return new Ke({name:"SphericalGaussianBlur",defines:{n:ds,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:mc(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function Lh(){return new Ke({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mc(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function Uh(){return new Ke({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function mc(){return`

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
	`}function _g(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===ml||l===gl,h=l===$s||l===Ks;if(c||h){let u=t.get(a);const p=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return e===null&&(e=new Dh(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return c&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new Dh(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function vg(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Gr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function xg(i,t,e,n){const s={},r=new WeakMap;function o(u){const p=u.target;p.index!==null&&t.remove(p.index);for(const g in p.attributes)t.remove(p.attributes[g]);p.removeEventListener("dispose",o),delete s[p.id];const d=r.get(p);d&&(t.remove(d),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function a(u,p){return s[p.id]===!0||(p.addEventListener("dispose",o),s[p.id]=!0,e.memory.geometries++),p}function l(u){const p=u.attributes;for(const d in p)t.update(p[d],i.ARRAY_BUFFER)}function c(u){const p=[],d=u.index,g=u.attributes.position;let y=0;if(d!==null){const w=d.array;y=d.version;for(let T=0,M=w.length;T<M;T+=3){const C=w[T+0],b=w[T+1],A=w[T+2];p.push(C,b,b,A,A,C)}}else if(g!==void 0){const w=g.array;y=g.version;for(let T=0,M=w.length/3-1;T<M;T+=3){const C=T+0,b=T+1,A=T+2;p.push(C,b,b,A,A,C)}}else return;const m=new(zu(p)?Xu:Wu)(p,1);m.version=y;const f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){const p=r.get(u);if(p){const d=u.index;d!==null&&p.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Mg(i,t,e){let n;function s(p){n=p}let r,o;function a(p){r=p.type,o=p.bytesPerElement}function l(p,d){i.drawElements(n,d,r,p*o),e.update(d,n,1)}function c(p,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,p*o,g),e.update(d,n,g))}function h(p,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,p,0,g);let m=0;for(let f=0;f<g;f++)m+=d[f];e.update(m,n,1)}function u(p,d,g,y){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<p.length;f++)c(p[f]/o,d[f],y[f]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,p,0,y,0,g);let f=0;for(let w=0;w<g;w++)f+=d[w]*y[w];e.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Sg(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function yg(i,t,e){const n=new WeakMap,s=new Ne;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let p=n.get(a);if(p===void 0||p.count!==u){let S=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var d=S;p!==void 0&&p.texture.dispose();const g=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let M=0;g===!0&&(M=1),y===!0&&(M=2),m===!0&&(M=3);let C=a.attributes.position.count*M,b=1;C>t.maxTextureSize&&(b=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const A=new Float32Array(C*b*4*u),P=new ku(A,C,b,u);P.type=jn,P.needsUpdate=!0;const x=M*4;for(let L=0;L<u;L++){const z=f[L],X=w[L],j=T[L],$=C*b*4*L;for(let J=0;J<z.count;J++){const st=J*x;g===!0&&(s.fromBufferAttribute(z,J),A[$+st+0]=s.x,A[$+st+1]=s.y,A[$+st+2]=s.z,A[$+st+3]=0),y===!0&&(s.fromBufferAttribute(X,J),A[$+st+4]=s.x,A[$+st+5]=s.y,A[$+st+6]=s.z,A[$+st+7]=0),m===!0&&(s.fromBufferAttribute(j,J),A[$+st+8]=s.x,A[$+st+9]=s.y,A[$+st+10]=s.z,A[$+st+11]=j.itemSize===4?s.w:1)}}p={count:u,texture:P,size:new At(C,b)},n.set(a,p),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const y=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",y),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function Eg(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}const sd=new cn,Nh=new Zu(1,1),rd=new ku,od=new Df,ad=new $u,Fh=[],Oh=[],Bh=new Float32Array(16),zh=new Float32Array(9),kh=new Float32Array(4);function or(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Fh[s];if(r===void 0&&(r=new Float32Array(s),Fh[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ve(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function We(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ea(i,t){let e=Oh[t];e===void 0&&(e=new Int32Array(t),Oh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Tg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function bg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;i.uniform2fv(this.addr,t),We(e,t)}}function wg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ve(e,t))return;i.uniform3fv(this.addr,t),We(e,t)}}function Ag(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;i.uniform4fv(this.addr,t),We(e,t)}}function Rg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),We(e,t)}else{if(Ve(e,n))return;kh.set(n),i.uniformMatrix2fv(this.addr,!1,kh),We(e,n)}}function Cg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),We(e,t)}else{if(Ve(e,n))return;zh.set(n),i.uniformMatrix3fv(this.addr,!1,zh),We(e,n)}}function Pg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),We(e,t)}else{if(Ve(e,n))return;Bh.set(n),i.uniformMatrix4fv(this.addr,!1,Bh),We(e,n)}}function Dg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Ig(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;i.uniform2iv(this.addr,t),We(e,t)}}function Lg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;i.uniform3iv(this.addr,t),We(e,t)}}function Ug(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;i.uniform4iv(this.addr,t),We(e,t)}}function Ng(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Fg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;i.uniform2uiv(this.addr,t),We(e,t)}}function Og(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;i.uniform3uiv(this.addr,t),We(e,t)}}function Bg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;i.uniform4uiv(this.addr,t),We(e,t)}}function zg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Nh.compareFunction=Bu,r=Nh):r=sd,e.setTexture2D(t||r,s)}function kg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||od,s)}function Hg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||ad,s)}function Gg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||rd,s)}function Vg(i){switch(i){case 5126:return Tg;case 35664:return bg;case 35665:return wg;case 35666:return Ag;case 35674:return Rg;case 35675:return Cg;case 35676:return Pg;case 5124:case 35670:return Dg;case 35667:case 35671:return Ig;case 35668:case 35672:return Lg;case 35669:case 35673:return Ug;case 5125:return Ng;case 36294:return Fg;case 36295:return Og;case 36296:return Bg;case 35678:case 36198:case 36298:case 36306:case 35682:return zg;case 35679:case 36299:case 36307:return kg;case 35680:case 36300:case 36308:case 36293:return Hg;case 36289:case 36303:case 36311:case 36292:return Gg}}function Wg(i,t){i.uniform1fv(this.addr,t)}function Xg(i,t){const e=or(t,this.size,2);i.uniform2fv(this.addr,e)}function qg(i,t){const e=or(t,this.size,3);i.uniform3fv(this.addr,e)}function Yg(i,t){const e=or(t,this.size,4);i.uniform4fv(this.addr,e)}function $g(i,t){const e=or(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Kg(i,t){const e=or(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Jg(i,t){const e=or(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Zg(i,t){i.uniform1iv(this.addr,t)}function jg(i,t){i.uniform2iv(this.addr,t)}function Qg(i,t){i.uniform3iv(this.addr,t)}function t_(i,t){i.uniform4iv(this.addr,t)}function e_(i,t){i.uniform1uiv(this.addr,t)}function n_(i,t){i.uniform2uiv(this.addr,t)}function i_(i,t){i.uniform3uiv(this.addr,t)}function s_(i,t){i.uniform4uiv(this.addr,t)}function r_(i,t,e){const n=this.cache,s=t.length,r=ea(e,s);Ve(n,r)||(i.uniform1iv(this.addr,r),We(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||sd,r[o])}function o_(i,t,e){const n=this.cache,s=t.length,r=ea(e,s);Ve(n,r)||(i.uniform1iv(this.addr,r),We(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||od,r[o])}function a_(i,t,e){const n=this.cache,s=t.length,r=ea(e,s);Ve(n,r)||(i.uniform1iv(this.addr,r),We(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||ad,r[o])}function l_(i,t,e){const n=this.cache,s=t.length,r=ea(e,s);Ve(n,r)||(i.uniform1iv(this.addr,r),We(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||rd,r[o])}function c_(i){switch(i){case 5126:return Wg;case 35664:return Xg;case 35665:return qg;case 35666:return Yg;case 35674:return $g;case 35675:return Kg;case 35676:return Jg;case 5124:case 35670:return Zg;case 35667:case 35671:return jg;case 35668:case 35672:return Qg;case 35669:case 35673:return t_;case 5125:return e_;case 36294:return n_;case 36295:return i_;case 36296:return s_;case 35678:case 36198:case 36298:case 36306:case 35682:return r_;case 35679:case 36299:case 36307:return o_;case 35680:case 36300:case 36308:case 36293:return a_;case 36289:case 36303:case 36311:case 36292:return l_}}class h_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Vg(e.type)}}class u_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=c_(e.type)}}class d_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Xa=/(\w+)(\])?(\[|\.)?/g;function Hh(i,t){i.seq.push(t),i.map[t.id]=t}function f_(i,t,e){const n=i.name,s=n.length;for(Xa.lastIndex=0;;){const r=Xa.exec(n),o=Xa.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Hh(e,c===void 0?new h_(a,i,t):new u_(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new d_(a),Hh(e,u)),e=u}}}class zo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);f_(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Gh(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const p_=37297;let m_=0;function g_(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Vh=new Qt;function __(i){fe._getMatrix(Vh,fe.workingColorSpace,i);const t=`mat3( ${Vh.elements.map(e=>e.toFixed(4))} )`;switch(fe.getTransfer(i)){case Wo:return[t,"LinearTransferOETF"];case xe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Wh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+g_(i.getShaderSource(t),a)}else return r}function v_(i,t){const e=__(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function x_(i,t){let e;switch(t){case Tu:e="Linear";break;case bu:e="Reinhard";break;case wu:e="Cineon";break;case tc:e="ACESFilmic";break;case Ru:e="AgX";break;case Cu:e="Neutral";break;case Au:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ro=new I;function M_(){fe.getLuminanceCoefficients(Ro);const i=Ro.x.toFixed(4),t=Ro.y.toFixed(4),e=Ro.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function S_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wr).join(`
`)}function y_(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function E_(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function wr(i){return i!==""}function Xh(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function qh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const T_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yl(i){return i.replace(T_,w_)}const b_=new Map;function w_(i,t){let e=ee[t];if(e===void 0){const n=b_.get(t);if(n!==void 0)e=ee[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Yl(e)}const A_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yh(i){return i.replace(A_,R_)}function R_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function $h(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function C_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===yu?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Eu?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===mi&&(t="SHADOWMAP_TYPE_VSM"),t}function P_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case $s:case Ks:t="ENVMAP_TYPE_CUBE";break;case Zo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function D_(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Ks&&(t="ENVMAP_MODE_REFRACTION"),t}function I_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ql:t="ENVMAP_BLENDING_MULTIPLY";break;case $d:t="ENVMAP_BLENDING_MIX";break;case Kd:t="ENVMAP_BLENDING_ADD";break}return t}function L_(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function U_(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=C_(e),c=P_(e),h=D_(e),u=I_(e),p=L_(e),d=S_(e),g=y_(r),y=s.createProgram();let m,f,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(wr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(wr).join(`
`),f.length>0&&(f+=`
`)):(m=[$h(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wr).join(`
`),f=[$h(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Hi?"#define TONE_MAPPING":"",e.toneMapping!==Hi?ee.tonemapping_pars_fragment:"",e.toneMapping!==Hi?x_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ee.colorspace_pars_fragment,v_("linearToOutputTexel",e.outputColorSpace),M_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(wr).join(`
`)),o=Yl(o),o=Xh(o,e),o=qh(o,e),a=Yl(a),a=Xh(a,e),a=qh(a,e),o=Yh(o),a=Yh(a),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===Qc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Qc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const T=w+m+o,M=w+f+a,C=Gh(s,s.VERTEX_SHADER,T),b=Gh(s,s.FRAGMENT_SHADER,M);s.attachShader(y,C),s.attachShader(y,b),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function A(L){if(i.debug.checkShaderErrors){const z=s.getProgramInfoLog(y)||"",X=s.getShaderInfoLog(C)||"",j=s.getShaderInfoLog(b)||"",$=z.trim(),J=X.trim(),st=j.trim();let q=!0,mt=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,C,b);else{const Et=Wh(s,C,"vertex"),Ot=Wh(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+$+`
`+Et+`
`+Ot)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(J===""||st==="")&&(mt=!1);mt&&(L.diagnostics={runnable:q,programLog:$,vertexShader:{log:J,prefix:m},fragmentShader:{log:st,prefix:f}})}s.deleteShader(C),s.deleteShader(b),P=new zo(s,y),x=E_(s,y)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let x;this.getAttributes=function(){return x===void 0&&A(this),x};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(y,p_)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=m_++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=C,this.fragmentShader=b,this}let N_=0;class F_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new O_(t),e.set(t,n)),n}}class O_{constructor(t){this.id=N_++,this.code=t,this.usedTimes=0}}function B_(i,t,e,n,s,r,o){const a=new Gu,l=new F_,c=new Set,h=[],u=s.logarithmicDepthBuffer,p=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,S,L,z,X){const j=z.fog,$=X.geometry,J=x.isMeshStandardMaterial?z.environment:null,st=(x.isMeshStandardMaterial?e:t).get(x.envMap||J),q=st&&st.mapping===Zo?st.image.height:null,mt=g[x.type];x.precision!==null&&(d=s.getMaxPrecision(x.precision),d!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const Et=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Ot=Et!==void 0?Et.length:0;let Zt=0;$.morphAttributes.position!==void 0&&(Zt=1),$.morphAttributes.normal!==void 0&&(Zt=2),$.morphAttributes.color!==void 0&&(Zt=3);let me,Te,ue,Z;if(mt){const le=Jn[mt];me=le.vertexShader,Te=le.fragmentShader}else me=x.vertexShader,Te=x.fragmentShader,l.update(x),ue=l.getVertexShaderID(x),Z=l.getFragmentShaderID(x);const it=i.getRenderTarget(),Rt=i.state.buffers.depth.getReversed(),Ht=X.isInstancedMesh===!0,Nt=X.isBatchedMesh===!0,se=!!x.map,ze=!!x.matcap,U=!!st,we=!!x.aoMap,Xt=!!x.lightMap,Gt=!!x.bumpMap,Ct=!!x.normalMap,_e=!!x.displacementMap,Dt=!!x.emissiveMap,Wt=!!x.metalnessMap,re=!!x.roughnessMap,Pe=x.anisotropy>0,R=x.clearcoat>0,v=x.dispersion>0,k=x.iridescence>0,K=x.sheen>0,et=x.transmission>0,Y=Pe&&!!x.anisotropyMap,Ft=R&&!!x.clearcoatMap,ft=R&&!!x.clearcoatNormalMap,It=R&&!!x.clearcoatRoughnessMap,Lt=k&&!!x.iridescenceMap,ct=k&&!!x.iridescenceThicknessMap,gt=K&&!!x.sheenColorMap,St=K&&!!x.sheenRoughnessMap,ut=!!x.specularMap,nt=!!x.specularColorMap,Vt=!!x.specularIntensityMap,F=et&&!!x.transmissionMap,rt=et&&!!x.thicknessMap,pt=!!x.gradientMap,Tt=!!x.alphaMap,at=x.alphaTest>0,Q=!!x.alphaHash,bt=!!x.extensions;let qt=Hi;x.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(qt=i.toneMapping);const de={shaderID:mt,shaderType:x.type,shaderName:x.name,vertexShader:me,fragmentShader:Te,defines:x.defines,customVertexShaderID:ue,customFragmentShaderID:Z,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:Nt,batchingColor:Nt&&X._colorsTexture!==null,instancing:Ht,instancingColor:Ht&&X.instanceColor!==null,instancingMorph:Ht&&X.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:it===null?i.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:Zs,alphaToCoverage:!!x.alphaToCoverage,map:se,matcap:ze,envMap:U,envMapMode:U&&st.mapping,envMapCubeUVHeight:q,aoMap:we,lightMap:Xt,bumpMap:Gt,normalMap:Ct,displacementMap:p&&_e,emissiveMap:Dt,normalMapObjectSpace:Ct&&x.normalMapType===Qd,normalMapTangentSpace:Ct&&x.normalMapType===lc,metalnessMap:Wt,roughnessMap:re,anisotropy:Pe,anisotropyMap:Y,clearcoat:R,clearcoatMap:Ft,clearcoatNormalMap:ft,clearcoatRoughnessMap:It,dispersion:v,iridescence:k,iridescenceMap:Lt,iridescenceThicknessMap:ct,sheen:K,sheenColorMap:gt,sheenRoughnessMap:St,specularMap:ut,specularColorMap:nt,specularIntensityMap:Vt,transmission:et,transmissionMap:F,thicknessMap:rt,gradientMap:pt,opaque:x.transparent===!1&&x.blending===Vs&&x.alphaToCoverage===!1,alphaMap:Tt,alphaTest:at,alphaHash:Q,combine:x.combine,mapUv:se&&y(x.map.channel),aoMapUv:we&&y(x.aoMap.channel),lightMapUv:Xt&&y(x.lightMap.channel),bumpMapUv:Gt&&y(x.bumpMap.channel),normalMapUv:Ct&&y(x.normalMap.channel),displacementMapUv:_e&&y(x.displacementMap.channel),emissiveMapUv:Dt&&y(x.emissiveMap.channel),metalnessMapUv:Wt&&y(x.metalnessMap.channel),roughnessMapUv:re&&y(x.roughnessMap.channel),anisotropyMapUv:Y&&y(x.anisotropyMap.channel),clearcoatMapUv:Ft&&y(x.clearcoatMap.channel),clearcoatNormalMapUv:ft&&y(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:It&&y(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Lt&&y(x.iridescenceMap.channel),iridescenceThicknessMapUv:ct&&y(x.iridescenceThicknessMap.channel),sheenColorMapUv:gt&&y(x.sheenColorMap.channel),sheenRoughnessMapUv:St&&y(x.sheenRoughnessMap.channel),specularMapUv:ut&&y(x.specularMap.channel),specularColorMapUv:nt&&y(x.specularColorMap.channel),specularIntensityMapUv:Vt&&y(x.specularIntensityMap.channel),transmissionMapUv:F&&y(x.transmissionMap.channel),thicknessMapUv:rt&&y(x.thicknessMap.channel),alphaMapUv:Tt&&y(x.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Ct||Pe),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!$.attributes.uv&&(se||Tt),fog:!!j,useFog:x.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:x.flatShading===!0&&x.wireframe===!1,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Rt,skinning:X.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:Ot,morphTextureStride:Zt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:qt,decodeVideoTexture:se&&x.map.isVideoTexture===!0&&fe.getTransfer(x.map.colorSpace)===xe,decodeVideoTextureEmissive:Dt&&x.emissiveMap.isVideoTexture===!0&&fe.getTransfer(x.emissiveMap.colorSpace)===xe,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Le,flipSided:x.side===fn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:bt&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(bt&&x.extensions.multiDraw===!0||Nt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return de.vertexUv1s=c.has(1),de.vertexUv2s=c.has(2),de.vertexUv3s=c.has(3),c.clear(),de}function f(x){const S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(const L in x.defines)S.push(L),S.push(x.defines[L]);return x.isRawShaderMaterial===!1&&(w(S,x),T(S,x),S.push(i.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function w(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapCubeUVHeight),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.morphAttributeCount),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function T(x,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),x.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),x.push(a.mask)}function M(x){const S=g[x.type];let L;if(S){const z=Jn[S];L=Qs.clone(z.uniforms)}else L=x.uniforms;return L}function C(x,S){let L;for(let z=0,X=h.length;z<X;z++){const j=h[z];if(j.cacheKey===S){L=j,++L.usedTimes;break}}return L===void 0&&(L=new U_(i,S,x,r),h.push(L)),L}function b(x){if(--x.usedTimes===0){const S=h.indexOf(x);h[S]=h[h.length-1],h.pop(),x.destroy()}}function A(x){l.remove(x)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:M,acquireProgram:C,releaseProgram:b,releaseShaderCache:A,programs:h,dispose:P}}function z_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function k_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Kh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Jh(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,p,d,g,y,m){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:p,material:d,groupOrder:g,renderOrder:u.renderOrder,z:y,group:m},i[t]=f):(f.id=u.id,f.object=u,f.geometry=p,f.material=d,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=y,f.group=m),t++,f}function a(u,p,d,g,y,m){const f=o(u,p,d,g,y,m);d.transmission>0?n.push(f):d.transparent===!0?s.push(f):e.push(f)}function l(u,p,d,g,y,m){const f=o(u,p,d,g,y,m);d.transmission>0?n.unshift(f):d.transparent===!0?s.unshift(f):e.unshift(f)}function c(u,p){e.length>1&&e.sort(u||k_),n.length>1&&n.sort(p||Kh),s.length>1&&s.sort(p||Kh)}function h(){for(let u=t,p=i.length;u<p;u++){const d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function H_(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Jh,i.set(n,[o])):s>=r.length?(o=new Jh,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function G_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new dt};break;case"SpotLight":e={position:new I,direction:new I,color:new dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new dt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new dt,groundColor:new dt};break;case"RectAreaLight":e={color:new dt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function V_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let W_=0;function X_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function q_(i){const t=new G_,e=V_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const s=new I,r=new he,o=new he;function a(c){let h=0,u=0,p=0;for(let x=0;x<9;x++)n.probe[x].set(0,0,0);let d=0,g=0,y=0,m=0,f=0,w=0,T=0,M=0,C=0,b=0,A=0;c.sort(X_);for(let x=0,S=c.length;x<S;x++){const L=c[x],z=L.color,X=L.intensity,j=L.distance,$=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=z.r*X,u+=z.g*X,p+=z.b*X;else if(L.isLightProbe){for(let J=0;J<9;J++)n.probe[J].addScaledVector(L.sh.coefficients[J],X);A++}else if(L.isDirectionalLight){const J=t.get(L);if(J.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const st=L.shadow,q=e.get(L);q.shadowIntensity=st.intensity,q.shadowBias=st.bias,q.shadowNormalBias=st.normalBias,q.shadowRadius=st.radius,q.shadowMapSize=st.mapSize,n.directionalShadow[d]=q,n.directionalShadowMap[d]=$,n.directionalShadowMatrix[d]=L.shadow.matrix,w++}n.directional[d]=J,d++}else if(L.isSpotLight){const J=t.get(L);J.position.setFromMatrixPosition(L.matrixWorld),J.color.copy(z).multiplyScalar(X),J.distance=j,J.coneCos=Math.cos(L.angle),J.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),J.decay=L.decay,n.spot[y]=J;const st=L.shadow;if(L.map&&(n.spotLightMap[C]=L.map,C++,st.updateMatrices(L),L.castShadow&&b++),n.spotLightMatrix[y]=st.matrix,L.castShadow){const q=e.get(L);q.shadowIntensity=st.intensity,q.shadowBias=st.bias,q.shadowNormalBias=st.normalBias,q.shadowRadius=st.radius,q.shadowMapSize=st.mapSize,n.spotShadow[y]=q,n.spotShadowMap[y]=$,M++}y++}else if(L.isRectAreaLight){const J=t.get(L);J.color.copy(z).multiplyScalar(X),J.halfWidth.set(L.width*.5,0,0),J.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=J,m++}else if(L.isPointLight){const J=t.get(L);if(J.color.copy(L.color).multiplyScalar(L.intensity),J.distance=L.distance,J.decay=L.decay,L.castShadow){const st=L.shadow,q=e.get(L);q.shadowIntensity=st.intensity,q.shadowBias=st.bias,q.shadowNormalBias=st.normalBias,q.shadowRadius=st.radius,q.shadowMapSize=st.mapSize,q.shadowCameraNear=st.camera.near,q.shadowCameraFar=st.camera.far,n.pointShadow[g]=q,n.pointShadowMap[g]=$,n.pointShadowMatrix[g]=L.shadow.matrix,T++}n.point[g]=J,g++}else if(L.isHemisphereLight){const J=t.get(L);J.skyColor.copy(L.color).multiplyScalar(X),J.groundColor.copy(L.groundColor).multiplyScalar(X),n.hemi[f]=J,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xt.LTC_FLOAT_1,n.rectAreaLTC2=xt.LTC_FLOAT_2):(n.rectAreaLTC1=xt.LTC_HALF_1,n.rectAreaLTC2=xt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=p;const P=n.hash;(P.directionalLength!==d||P.pointLength!==g||P.spotLength!==y||P.rectAreaLength!==m||P.hemiLength!==f||P.numDirectionalShadows!==w||P.numPointShadows!==T||P.numSpotShadows!==M||P.numSpotMaps!==C||P.numLightProbes!==A)&&(n.directional.length=d,n.spot.length=y,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=M+C-b,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=A,P.directionalLength=d,P.pointLength=g,P.spotLength=y,P.rectAreaLength=m,P.hemiLength=f,P.numDirectionalShadows=w,P.numPointShadows=T,P.numSpotShadows=M,P.numSpotMaps=C,P.numLightProbes=A,n.version=W_++)}function l(c,h){let u=0,p=0,d=0,g=0,y=0;const m=h.matrixWorldInverse;for(let f=0,w=c.length;f<w;f++){const T=c[f];if(T.isDirectionalLight){const M=n.directional[u];M.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),u++}else if(T.isSpotLight){const M=n.spot[d];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),d++}else if(T.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(T.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(T.width*.5,0,0),M.halfHeight.set(0,T.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(T.isPointLight){const M=n.point[p];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(m),p++}else if(T.isHemisphereLight){const M=n.hemi[y];M.direction.setFromMatrixPosition(T.matrixWorld),M.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:n}}function Zh(i){const t=new q_(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Y_(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Zh(i),t.set(s,[a])):r>=o.length?(a=new Zh(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const $_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,K_=`uniform sampler2D shadow_pass;
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
}`;function J_(i,t,e){let n=new dc;const s=new At,r=new At,o=new Ne,a=new xp({depthPacking:jd}),l=new Mp,c={},h=e.maxTextureSize,u={[Wi]:fn,[fn]:Wi,[Le]:Le},p=new Ke({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new At},radius:{value:4}},vertexShader:$_,fragmentShader:K_}),d=p.clone();d.defines.HORIZONTAL_PASS=1;const g=new Fe;g.setAttribute("position",new $e(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Mt(g,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yu;let f=this.type;this.render=function(b,A,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const x=i.getRenderTarget(),S=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),z=i.state;z.setBlending(xi),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const X=f!==mi&&this.type===mi,j=f===mi&&this.type!==mi;for(let $=0,J=b.length;$<J;$++){const st=b[$],q=st.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",st,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);const mt=q.getFrameExtents();if(s.multiply(mt),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/mt.x),s.x=r.x*mt.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/mt.y),s.y=r.y*mt.y,q.mapSize.y=r.y)),q.map===null||X===!0||j===!0){const Ot=this.type!==mi?{minFilter:An,magFilter:An}:{};q.map!==null&&q.map.dispose(),q.map=new $n(s.x,s.y,Ot),q.map.texture.name=st.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();const Et=q.getViewportCount();for(let Ot=0;Ot<Et;Ot++){const Zt=q.getViewport(Ot);o.set(r.x*Zt.x,r.y*Zt.y,r.x*Zt.z,r.y*Zt.w),z.viewport(o),q.updateMatrices(st,Ot),n=q.getFrustum(),M(A,P,q.camera,st,this.type)}q.isPointLightShadow!==!0&&this.type===mi&&w(q,P),q.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(x,S,L)};function w(b,A){const P=t.update(y);p.defines.VSM_SAMPLES!==b.blurSamples&&(p.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,p.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new $n(s.x,s.y)),p.uniforms.shadow_pass.value=b.map.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(A,null,P,p,y,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(A,null,P,d,y,null)}function T(b,A,P,x){let S=null;const L=P.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(L!==void 0)S=L;else if(S=P.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const z=S.uuid,X=A.uuid;let j=c[z];j===void 0&&(j={},c[z]=j);let $=j[X];$===void 0&&($=S.clone(),j[X]=$,A.addEventListener("dispose",C)),S=$}if(S.visible=A.visible,S.wireframe=A.wireframe,x===mi?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:u[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,P.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const z=i.properties.get(S);z.light=P}return S}function M(b,A,P,x,S){if(b.visible===!1)return;if(b.layers.test(A.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&S===mi)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,b.matrixWorld);const X=t.update(b),j=b.material;if(Array.isArray(j)){const $=X.groups;for(let J=0,st=$.length;J<st;J++){const q=$[J],mt=j[q.materialIndex];if(mt&&mt.visible){const Et=T(b,mt,x,S);b.onBeforeShadow(i,b,A,P,X,Et,q),i.renderBufferDirect(P,null,X,Et,b,q),b.onAfterShadow(i,b,A,P,X,Et,q)}}}else if(j.visible){const $=T(b,j,x,S);b.onBeforeShadow(i,b,A,P,X,$,null),i.renderBufferDirect(P,null,X,$,b,null),b.onAfterShadow(i,b,A,P,X,$,null)}}const z=b.children;for(let X=0,j=z.length;X<j;X++)M(z[X],A,P,x,S)}function C(b){b.target.removeEventListener("dispose",C);for(const P in c){const x=c[P],S=b.target.uuid;S in x&&(x[S].dispose(),delete x[S])}}}const Z_={[ll]:cl,[hl]:fl,[ul]:pl,[Ys]:dl,[cl]:ll,[fl]:hl,[pl]:ul,[dl]:Ys};function j_(i,t){function e(){let F=!1;const rt=new Ne;let pt=null;const Tt=new Ne(0,0,0,0);return{setMask:function(at){pt!==at&&!F&&(i.colorMask(at,at,at,at),pt=at)},setLocked:function(at){F=at},setClear:function(at,Q,bt,qt,de){de===!0&&(at*=qt,Q*=qt,bt*=qt),rt.set(at,Q,bt,qt),Tt.equals(rt)===!1&&(i.clearColor(at,Q,bt,qt),Tt.copy(rt))},reset:function(){F=!1,pt=null,Tt.set(-1,0,0,0)}}}function n(){let F=!1,rt=!1,pt=null,Tt=null,at=null;return{setReversed:function(Q){if(rt!==Q){const bt=t.get("EXT_clip_control");Q?bt.clipControlEXT(bt.LOWER_LEFT_EXT,bt.ZERO_TO_ONE_EXT):bt.clipControlEXT(bt.LOWER_LEFT_EXT,bt.NEGATIVE_ONE_TO_ONE_EXT),rt=Q;const qt=at;at=null,this.setClear(qt)}},getReversed:function(){return rt},setTest:function(Q){Q?it(i.DEPTH_TEST):Rt(i.DEPTH_TEST)},setMask:function(Q){pt!==Q&&!F&&(i.depthMask(Q),pt=Q)},setFunc:function(Q){if(rt&&(Q=Z_[Q]),Tt!==Q){switch(Q){case ll:i.depthFunc(i.NEVER);break;case cl:i.depthFunc(i.ALWAYS);break;case hl:i.depthFunc(i.LESS);break;case Ys:i.depthFunc(i.LEQUAL);break;case ul:i.depthFunc(i.EQUAL);break;case dl:i.depthFunc(i.GEQUAL);break;case fl:i.depthFunc(i.GREATER);break;case pl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Tt=Q}},setLocked:function(Q){F=Q},setClear:function(Q){at!==Q&&(rt&&(Q=1-Q),i.clearDepth(Q),at=Q)},reset:function(){F=!1,pt=null,Tt=null,at=null,rt=!1}}}function s(){let F=!1,rt=null,pt=null,Tt=null,at=null,Q=null,bt=null,qt=null,de=null;return{setTest:function(le){F||(le?it(i.STENCIL_TEST):Rt(i.STENCIL_TEST))},setMask:function(le){rt!==le&&!F&&(i.stencilMask(le),rt=le)},setFunc:function(le,Xe,Ze){(pt!==le||Tt!==Xe||at!==Ze)&&(i.stencilFunc(le,Xe,Ze),pt=le,Tt=Xe,at=Ze)},setOp:function(le,Xe,Ze){(Q!==le||bt!==Xe||qt!==Ze)&&(i.stencilOp(le,Xe,Ze),Q=le,bt=Xe,qt=Ze)},setLocked:function(le){F=le},setClear:function(le){de!==le&&(i.clearStencil(le),de=le)},reset:function(){F=!1,rt=null,pt=null,Tt=null,at=null,Q=null,bt=null,qt=null,de=null}}}const r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let h={},u={},p=new WeakMap,d=[],g=null,y=!1,m=null,f=null,w=null,T=null,M=null,C=null,b=null,A=new dt(0,0,0),P=0,x=!1,S=null,L=null,z=null,X=null,j=null;const $=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,st=0;const q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(st=parseFloat(/^WebGL (\d)/.exec(q)[1]),J=st>=1):q.indexOf("OpenGL ES")!==-1&&(st=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),J=st>=2);let mt=null,Et={};const Ot=i.getParameter(i.SCISSOR_BOX),Zt=i.getParameter(i.VIEWPORT),me=new Ne().fromArray(Ot),Te=new Ne().fromArray(Zt);function ue(F,rt,pt,Tt){const at=new Uint8Array(4),Q=i.createTexture();i.bindTexture(F,Q),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let bt=0;bt<pt;bt++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(rt,0,i.RGBA,1,1,Tt,0,i.RGBA,i.UNSIGNED_BYTE,at):i.texImage2D(rt+bt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,at);return Q}const Z={};Z[i.TEXTURE_2D]=ue(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=ue(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=ue(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=ue(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),it(i.DEPTH_TEST),o.setFunc(Ys),Gt(!1),Ct($c),it(i.CULL_FACE),we(xi);function it(F){h[F]!==!0&&(i.enable(F),h[F]=!0)}function Rt(F){h[F]!==!1&&(i.disable(F),h[F]=!1)}function Ht(F,rt){return u[F]!==rt?(i.bindFramebuffer(F,rt),u[F]=rt,F===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=rt),F===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=rt),!0):!1}function Nt(F,rt){let pt=d,Tt=!1;if(F){pt=p.get(rt),pt===void 0&&(pt=[],p.set(rt,pt));const at=F.textures;if(pt.length!==at.length||pt[0]!==i.COLOR_ATTACHMENT0){for(let Q=0,bt=at.length;Q<bt;Q++)pt[Q]=i.COLOR_ATTACHMENT0+Q;pt.length=at.length,Tt=!0}}else pt[0]!==i.BACK&&(pt[0]=i.BACK,Tt=!0);Tt&&i.drawBuffers(pt)}function se(F){return g!==F?(i.useProgram(F),g=F,!0):!1}const ze={[us]:i.FUNC_ADD,[Dd]:i.FUNC_SUBTRACT,[Id]:i.FUNC_REVERSE_SUBTRACT};ze[Ld]=i.MIN,ze[Ud]=i.MAX;const U={[Nd]:i.ZERO,[Fd]:i.ONE,[Od]:i.SRC_COLOR,[ol]:i.SRC_ALPHA,[Vd]:i.SRC_ALPHA_SATURATE,[Hd]:i.DST_COLOR,[zd]:i.DST_ALPHA,[Bd]:i.ONE_MINUS_SRC_COLOR,[al]:i.ONE_MINUS_SRC_ALPHA,[Gd]:i.ONE_MINUS_DST_COLOR,[kd]:i.ONE_MINUS_DST_ALPHA,[Wd]:i.CONSTANT_COLOR,[Xd]:i.ONE_MINUS_CONSTANT_COLOR,[qd]:i.CONSTANT_ALPHA,[Yd]:i.ONE_MINUS_CONSTANT_ALPHA};function we(F,rt,pt,Tt,at,Q,bt,qt,de,le){if(F===xi){y===!0&&(Rt(i.BLEND),y=!1);return}if(y===!1&&(it(i.BLEND),y=!0),F!==Pd){if(F!==m||le!==x){if((f!==us||M!==us)&&(i.blendEquation(i.FUNC_ADD),f=us,M=us),le)switch(F){case Vs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case qn:i.blendFunc(i.ONE,i.ONE);break;case Kc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Jc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Vs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case qn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Kc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Jc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}w=null,T=null,C=null,b=null,A.set(0,0,0),P=0,m=F,x=le}return}at=at||rt,Q=Q||pt,bt=bt||Tt,(rt!==f||at!==M)&&(i.blendEquationSeparate(ze[rt],ze[at]),f=rt,M=at),(pt!==w||Tt!==T||Q!==C||bt!==b)&&(i.blendFuncSeparate(U[pt],U[Tt],U[Q],U[bt]),w=pt,T=Tt,C=Q,b=bt),(qt.equals(A)===!1||de!==P)&&(i.blendColor(qt.r,qt.g,qt.b,de),A.copy(qt),P=de),m=F,x=!1}function Xt(F,rt){F.side===Le?Rt(i.CULL_FACE):it(i.CULL_FACE);let pt=F.side===fn;rt&&(pt=!pt),Gt(pt),F.blending===Vs&&F.transparent===!1?we(xi):we(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);const Tt=F.stencilWrite;a.setTest(Tt),Tt&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Dt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?it(i.SAMPLE_ALPHA_TO_COVERAGE):Rt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Gt(F){S!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),S=F)}function Ct(F){F!==Rd?(it(i.CULL_FACE),F!==L&&(F===$c?i.cullFace(i.BACK):F===Cd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Rt(i.CULL_FACE),L=F}function _e(F){F!==z&&(J&&i.lineWidth(F),z=F)}function Dt(F,rt,pt){F?(it(i.POLYGON_OFFSET_FILL),(X!==rt||j!==pt)&&(i.polygonOffset(rt,pt),X=rt,j=pt)):Rt(i.POLYGON_OFFSET_FILL)}function Wt(F){F?it(i.SCISSOR_TEST):Rt(i.SCISSOR_TEST)}function re(F){F===void 0&&(F=i.TEXTURE0+$-1),mt!==F&&(i.activeTexture(F),mt=F)}function Pe(F,rt,pt){pt===void 0&&(mt===null?pt=i.TEXTURE0+$-1:pt=mt);let Tt=Et[pt];Tt===void 0&&(Tt={type:void 0,texture:void 0},Et[pt]=Tt),(Tt.type!==F||Tt.texture!==rt)&&(mt!==pt&&(i.activeTexture(pt),mt=pt),i.bindTexture(F,rt||Z[F]),Tt.type=F,Tt.texture=rt)}function R(){const F=Et[mt];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function v(){try{i.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function k(){try{i.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function K(){try{i.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function et(){try{i.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Y(){try{i.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ft(){try{i.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ft(){try{i.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function It(){try{i.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Lt(){try{i.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ct(){try{i.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function gt(F){me.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),me.copy(F))}function St(F){Te.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),Te.copy(F))}function ut(F,rt){let pt=c.get(rt);pt===void 0&&(pt=new WeakMap,c.set(rt,pt));let Tt=pt.get(F);Tt===void 0&&(Tt=i.getUniformBlockIndex(rt,F.name),pt.set(F,Tt))}function nt(F,rt){const Tt=c.get(rt).get(F);l.get(rt)!==Tt&&(i.uniformBlockBinding(rt,Tt,F.__bindingPointIndex),l.set(rt,Tt))}function Vt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},mt=null,Et={},u={},p=new WeakMap,d=[],g=null,y=!1,m=null,f=null,w=null,T=null,M=null,C=null,b=null,A=new dt(0,0,0),P=0,x=!1,S=null,L=null,z=null,X=null,j=null,me.set(0,0,i.canvas.width,i.canvas.height),Te.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:it,disable:Rt,bindFramebuffer:Ht,drawBuffers:Nt,useProgram:se,setBlending:we,setMaterial:Xt,setFlipSided:Gt,setCullFace:Ct,setLineWidth:_e,setPolygonOffset:Dt,setScissorTest:Wt,activeTexture:re,bindTexture:Pe,unbindTexture:R,compressedTexImage2D:v,compressedTexImage3D:k,texImage2D:Lt,texImage3D:ct,updateUBOMapping:ut,uniformBlockBinding:nt,texStorage2D:ft,texStorage3D:It,texSubImage2D:K,texSubImage3D:et,compressedTexSubImage2D:Y,compressedTexSubImage3D:Ft,scissor:gt,viewport:St,reset:Vt}}function Q_(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new At,h=new WeakMap;let u;const p=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,v){return d?new OffscreenCanvas(R,v):qo("canvas")}function y(R,v,k){let K=1;const et=Pe(R);if((et.width>k||et.height>k)&&(K=k/Math.max(et.width,et.height)),K<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Y=Math.floor(K*et.width),Ft=Math.floor(K*et.height);u===void 0&&(u=g(Y,Ft));const ft=v?g(Y,Ft):u;return ft.width=Y,ft.height=Ft,ft.getContext("2d").drawImage(R,0,0,Y,Ft),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+Y+"x"+Ft+")."),ft}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),R;return R}function m(R){return R.generateMipmaps}function f(R){i.generateMipmap(R)}function w(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(R,v,k,K,et=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Y=v;if(v===i.RED&&(k===i.FLOAT&&(Y=i.R32F),k===i.HALF_FLOAT&&(Y=i.R16F),k===i.UNSIGNED_BYTE&&(Y=i.R8)),v===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(Y=i.R8UI),k===i.UNSIGNED_SHORT&&(Y=i.R16UI),k===i.UNSIGNED_INT&&(Y=i.R32UI),k===i.BYTE&&(Y=i.R8I),k===i.SHORT&&(Y=i.R16I),k===i.INT&&(Y=i.R32I)),v===i.RG&&(k===i.FLOAT&&(Y=i.RG32F),k===i.HALF_FLOAT&&(Y=i.RG16F),k===i.UNSIGNED_BYTE&&(Y=i.RG8)),v===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(Y=i.RG8UI),k===i.UNSIGNED_SHORT&&(Y=i.RG16UI),k===i.UNSIGNED_INT&&(Y=i.RG32UI),k===i.BYTE&&(Y=i.RG8I),k===i.SHORT&&(Y=i.RG16I),k===i.INT&&(Y=i.RG32I)),v===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),k===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),k===i.UNSIGNED_INT&&(Y=i.RGB32UI),k===i.BYTE&&(Y=i.RGB8I),k===i.SHORT&&(Y=i.RGB16I),k===i.INT&&(Y=i.RGB32I)),v===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),k===i.UNSIGNED_INT&&(Y=i.RGBA32UI),k===i.BYTE&&(Y=i.RGBA8I),k===i.SHORT&&(Y=i.RGBA16I),k===i.INT&&(Y=i.RGBA32I)),v===i.RGB&&(k===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),v===i.RGBA){const Ft=et?Wo:fe.getTransfer(K);k===i.FLOAT&&(Y=i.RGBA32F),k===i.HALF_FLOAT&&(Y=i.RGBA16F),k===i.UNSIGNED_BYTE&&(Y=Ft===xe?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function M(R,v){let k;return R?v===null||v===ps||v===Br?k=i.DEPTH24_STENCIL8:v===jn?k=i.DEPTH32F_STENCIL8:v===Or&&(k=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===ps||v===Br?k=i.DEPTH_COMPONENT24:v===jn?k=i.DEPTH_COMPONENT32F:v===Or&&(k=i.DEPTH_COMPONENT16),k}function C(R,v){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==An&&R.minFilter!==Zn?Math.log2(Math.max(v.width,v.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?v.mipmaps.length:1}function b(R){const v=R.target;v.removeEventListener("dispose",b),P(v),v.isVideoTexture&&h.delete(v)}function A(R){const v=R.target;v.removeEventListener("dispose",A),S(v)}function P(R){const v=n.get(R);if(v.__webglInit===void 0)return;const k=R.source,K=p.get(k);if(K){const et=K[v.__cacheKey];et.usedTimes--,et.usedTimes===0&&x(R),Object.keys(K).length===0&&p.delete(k)}n.remove(R)}function x(R){const v=n.get(R);i.deleteTexture(v.__webglTexture);const k=R.source,K=p.get(k);delete K[v.__cacheKey],o.memory.textures--}function S(R){const v=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(v.__webglFramebuffer[K]))for(let et=0;et<v.__webglFramebuffer[K].length;et++)i.deleteFramebuffer(v.__webglFramebuffer[K][et]);else i.deleteFramebuffer(v.__webglFramebuffer[K]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[K])}else{if(Array.isArray(v.__webglFramebuffer))for(let K=0;K<v.__webglFramebuffer.length;K++)i.deleteFramebuffer(v.__webglFramebuffer[K]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let K=0;K<v.__webglColorRenderbuffer.length;K++)v.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[K]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const k=R.textures;for(let K=0,et=k.length;K<et;K++){const Y=n.get(k[K]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(k[K])}n.remove(R)}let L=0;function z(){L=0}function X(){const R=L;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),L+=1,R}function j(R){const v=[];return v.push(R.wrapS),v.push(R.wrapT),v.push(R.wrapR||0),v.push(R.magFilter),v.push(R.minFilter),v.push(R.anisotropy),v.push(R.internalFormat),v.push(R.format),v.push(R.type),v.push(R.generateMipmaps),v.push(R.premultiplyAlpha),v.push(R.flipY),v.push(R.unpackAlignment),v.push(R.colorSpace),v.join()}function $(R,v){const k=n.get(R);if(R.isVideoTexture&&Wt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&k.__version!==R.version){const K=R.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(k,R,v);return}}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+v)}function J(R,v){const k=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){Z(k,R,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+v)}function st(R,v){const k=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){Z(k,R,v);return}e.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+v)}function q(R,v){const k=n.get(R);if(R.version>0&&k.__version!==R.version){it(k,R,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+v)}const mt={[Js]:i.REPEAT,[zi]:i.CLAMP_TO_EDGE,[_l]:i.MIRRORED_REPEAT},Et={[An]:i.NEAREST,[Jd]:i.NEAREST_MIPMAP_NEAREST,[io]:i.NEAREST_MIPMAP_LINEAR,[Zn]:i.LINEAR,[fa]:i.LINEAR_MIPMAP_NEAREST,[fs]:i.LINEAR_MIPMAP_LINEAR},Ot={[tf]:i.NEVER,[af]:i.ALWAYS,[ef]:i.LESS,[Bu]:i.LEQUAL,[nf]:i.EQUAL,[of]:i.GEQUAL,[sf]:i.GREATER,[rf]:i.NOTEQUAL};function Zt(R,v){if(v.type===jn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Zn||v.magFilter===fa||v.magFilter===io||v.magFilter===fs||v.minFilter===Zn||v.minFilter===fa||v.minFilter===io||v.minFilter===fs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,mt[v.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,mt[v.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,mt[v.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,Et[v.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,Et[v.minFilter]),v.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,Ot[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===An||v.minFilter!==io&&v.minFilter!==fs||v.type===jn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function me(R,v){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,v.addEventListener("dispose",b));const K=v.source;let et=p.get(K);et===void 0&&(et={},p.set(K,et));const Y=j(v);if(Y!==R.__cacheKey){et[Y]===void 0&&(et[Y]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,k=!0),et[Y].usedTimes++;const Ft=et[R.__cacheKey];Ft!==void 0&&(et[R.__cacheKey].usedTimes--,Ft.usedTimes===0&&x(v)),R.__cacheKey=Y,R.__webglTexture=et[Y].texture}return k}function Te(R,v,k){return Math.floor(Math.floor(R/k)/v)}function ue(R,v,k,K){const Y=R.updateRanges;if(Y.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,k,K,v.data);else{Y.sort((ct,gt)=>ct.start-gt.start);let Ft=0;for(let ct=1;ct<Y.length;ct++){const gt=Y[Ft],St=Y[ct],ut=gt.start+gt.count,nt=Te(St.start,v.width,4),Vt=Te(gt.start,v.width,4);St.start<=ut+1&&nt===Vt&&Te(St.start+St.count-1,v.width,4)===nt?gt.count=Math.max(gt.count,St.start+St.count-gt.start):(++Ft,Y[Ft]=St)}Y.length=Ft+1;const ft=i.getParameter(i.UNPACK_ROW_LENGTH),It=i.getParameter(i.UNPACK_SKIP_PIXELS),Lt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let ct=0,gt=Y.length;ct<gt;ct++){const St=Y[ct],ut=Math.floor(St.start/4),nt=Math.ceil(St.count/4),Vt=ut%v.width,F=Math.floor(ut/v.width),rt=nt,pt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Vt),i.pixelStorei(i.UNPACK_SKIP_ROWS,F),e.texSubImage2D(i.TEXTURE_2D,0,Vt,F,rt,pt,k,K,v.data)}R.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ft),i.pixelStorei(i.UNPACK_SKIP_PIXELS,It),i.pixelStorei(i.UNPACK_SKIP_ROWS,Lt)}}function Z(R,v,k){let K=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(K=i.TEXTURE_3D);const et=me(R,v),Y=v.source;e.bindTexture(K,R.__webglTexture,i.TEXTURE0+k);const Ft=n.get(Y);if(Y.version!==Ft.__version||et===!0){e.activeTexture(i.TEXTURE0+k);const ft=fe.getPrimaries(fe.workingColorSpace),It=v.colorSpace===Bi?null:fe.getPrimaries(v.colorSpace),Lt=v.colorSpace===Bi||ft===It?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);let ct=y(v.image,!1,s.maxTextureSize);ct=re(v,ct);const gt=r.convert(v.format,v.colorSpace),St=r.convert(v.type);let ut=T(v.internalFormat,gt,St,v.colorSpace,v.isVideoTexture);Zt(K,v);let nt;const Vt=v.mipmaps,F=v.isVideoTexture!==!0,rt=Ft.__version===void 0||et===!0,pt=Y.dataReady,Tt=C(v,ct);if(v.isDepthTexture)ut=M(v.format===kr,v.type),rt&&(F?e.texStorage2D(i.TEXTURE_2D,1,ut,ct.width,ct.height):e.texImage2D(i.TEXTURE_2D,0,ut,ct.width,ct.height,0,gt,St,null));else if(v.isDataTexture)if(Vt.length>0){F&&rt&&e.texStorage2D(i.TEXTURE_2D,Tt,ut,Vt[0].width,Vt[0].height);for(let at=0,Q=Vt.length;at<Q;at++)nt=Vt[at],F?pt&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,nt.width,nt.height,gt,St,nt.data):e.texImage2D(i.TEXTURE_2D,at,ut,nt.width,nt.height,0,gt,St,nt.data);v.generateMipmaps=!1}else F?(rt&&e.texStorage2D(i.TEXTURE_2D,Tt,ut,ct.width,ct.height),pt&&ue(v,ct,gt,St)):e.texImage2D(i.TEXTURE_2D,0,ut,ct.width,ct.height,0,gt,St,ct.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){F&&rt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Tt,ut,Vt[0].width,Vt[0].height,ct.depth);for(let at=0,Q=Vt.length;at<Q;at++)if(nt=Vt[at],v.format!==Yn)if(gt!==null)if(F){if(pt)if(v.layerUpdates.size>0){const bt=Ah(nt.width,nt.height,v.format,v.type);for(const qt of v.layerUpdates){const de=nt.data.subarray(qt*bt/nt.data.BYTES_PER_ELEMENT,(qt+1)*bt/nt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,qt,nt.width,nt.height,1,gt,de)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,0,nt.width,nt.height,ct.depth,gt,nt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,at,ut,nt.width,nt.height,ct.depth,0,nt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?pt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,0,nt.width,nt.height,ct.depth,gt,St,nt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,at,ut,nt.width,nt.height,ct.depth,0,gt,St,nt.data)}else{F&&rt&&e.texStorage2D(i.TEXTURE_2D,Tt,ut,Vt[0].width,Vt[0].height);for(let at=0,Q=Vt.length;at<Q;at++)nt=Vt[at],v.format!==Yn?gt!==null?F?pt&&e.compressedTexSubImage2D(i.TEXTURE_2D,at,0,0,nt.width,nt.height,gt,nt.data):e.compressedTexImage2D(i.TEXTURE_2D,at,ut,nt.width,nt.height,0,nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?pt&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,nt.width,nt.height,gt,St,nt.data):e.texImage2D(i.TEXTURE_2D,at,ut,nt.width,nt.height,0,gt,St,nt.data)}else if(v.isDataArrayTexture)if(F){if(rt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Tt,ut,ct.width,ct.height,ct.depth),pt)if(v.layerUpdates.size>0){const at=Ah(ct.width,ct.height,v.format,v.type);for(const Q of v.layerUpdates){const bt=ct.data.subarray(Q*at/ct.data.BYTES_PER_ELEMENT,(Q+1)*at/ct.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,ct.width,ct.height,1,gt,St,bt)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,gt,St,ct.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,ut,ct.width,ct.height,ct.depth,0,gt,St,ct.data);else if(v.isData3DTexture)F?(rt&&e.texStorage3D(i.TEXTURE_3D,Tt,ut,ct.width,ct.height,ct.depth),pt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,gt,St,ct.data)):e.texImage3D(i.TEXTURE_3D,0,ut,ct.width,ct.height,ct.depth,0,gt,St,ct.data);else if(v.isFramebufferTexture){if(rt)if(F)e.texStorage2D(i.TEXTURE_2D,Tt,ut,ct.width,ct.height);else{let at=ct.width,Q=ct.height;for(let bt=0;bt<Tt;bt++)e.texImage2D(i.TEXTURE_2D,bt,ut,at,Q,0,gt,St,null),at>>=1,Q>>=1}}else if(Vt.length>0){if(F&&rt){const at=Pe(Vt[0]);e.texStorage2D(i.TEXTURE_2D,Tt,ut,at.width,at.height)}for(let at=0,Q=Vt.length;at<Q;at++)nt=Vt[at],F?pt&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,gt,St,nt):e.texImage2D(i.TEXTURE_2D,at,ut,gt,St,nt);v.generateMipmaps=!1}else if(F){if(rt){const at=Pe(ct);e.texStorage2D(i.TEXTURE_2D,Tt,ut,at.width,at.height)}pt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,gt,St,ct)}else e.texImage2D(i.TEXTURE_2D,0,ut,gt,St,ct);m(v)&&f(K),Ft.__version=Y.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function it(R,v,k){if(v.image.length!==6)return;const K=me(R,v),et=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+k);const Y=n.get(et);if(et.version!==Y.__version||K===!0){e.activeTexture(i.TEXTURE0+k);const Ft=fe.getPrimaries(fe.workingColorSpace),ft=v.colorSpace===Bi?null:fe.getPrimaries(v.colorSpace),It=v.colorSpace===Bi||Ft===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);const Lt=v.isCompressedTexture||v.image[0].isCompressedTexture,ct=v.image[0]&&v.image[0].isDataTexture,gt=[];for(let Q=0;Q<6;Q++)!Lt&&!ct?gt[Q]=y(v.image[Q],!0,s.maxCubemapSize):gt[Q]=ct?v.image[Q].image:v.image[Q],gt[Q]=re(v,gt[Q]);const St=gt[0],ut=r.convert(v.format,v.colorSpace),nt=r.convert(v.type),Vt=T(v.internalFormat,ut,nt,v.colorSpace),F=v.isVideoTexture!==!0,rt=Y.__version===void 0||K===!0,pt=et.dataReady;let Tt=C(v,St);Zt(i.TEXTURE_CUBE_MAP,v);let at;if(Lt){F&&rt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Tt,Vt,St.width,St.height);for(let Q=0;Q<6;Q++){at=gt[Q].mipmaps;for(let bt=0;bt<at.length;bt++){const qt=at[bt];v.format!==Yn?ut!==null?F?pt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,bt,0,0,qt.width,qt.height,ut,qt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,bt,Vt,qt.width,qt.height,0,qt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,bt,0,0,qt.width,qt.height,ut,nt,qt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,bt,Vt,qt.width,qt.height,0,ut,nt,qt.data)}}}else{if(at=v.mipmaps,F&&rt){at.length>0&&Tt++;const Q=Pe(gt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Tt,Vt,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(ct){F?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,gt[Q].width,gt[Q].height,ut,nt,gt[Q].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Vt,gt[Q].width,gt[Q].height,0,ut,nt,gt[Q].data);for(let bt=0;bt<at.length;bt++){const de=at[bt].image[Q].image;F?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,bt+1,0,0,de.width,de.height,ut,nt,de.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,bt+1,Vt,de.width,de.height,0,ut,nt,de.data)}}else{F?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ut,nt,gt[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Vt,ut,nt,gt[Q]);for(let bt=0;bt<at.length;bt++){const qt=at[bt];F?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,bt+1,0,0,ut,nt,qt.image[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,bt+1,Vt,ut,nt,qt.image[Q])}}}m(v)&&f(i.TEXTURE_CUBE_MAP),Y.__version=et.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function Rt(R,v,k,K,et,Y){const Ft=r.convert(k.format,k.colorSpace),ft=r.convert(k.type),It=T(k.internalFormat,Ft,ft,k.colorSpace),Lt=n.get(v),ct=n.get(k);if(ct.__renderTarget=v,!Lt.__hasExternalTextures){const gt=Math.max(1,v.width>>Y),St=Math.max(1,v.height>>Y);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,Y,It,gt,St,v.depth,0,Ft,ft,null):e.texImage2D(et,Y,It,gt,St,0,Ft,ft,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),Dt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,et,ct.__webglTexture,0,_e(v)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,et,ct.__webglTexture,Y),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ht(R,v,k){if(i.bindRenderbuffer(i.RENDERBUFFER,R),v.depthBuffer){const K=v.depthTexture,et=K&&K.isDepthTexture?K.type:null,Y=M(v.stencilBuffer,et),Ft=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=_e(v);Dt(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ft,Y,v.width,v.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,ft,Y,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Y,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ft,i.RENDERBUFFER,R)}else{const K=v.textures;for(let et=0;et<K.length;et++){const Y=K[et],Ft=r.convert(Y.format,Y.colorSpace),ft=r.convert(Y.type),It=T(Y.internalFormat,Ft,ft,Y.colorSpace),Lt=_e(v);k&&Dt(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Lt,It,v.width,v.height):Dt(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Lt,It,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,It,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Nt(R,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(v.depthTexture);K.__renderTarget=v,(!K.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),$(v.depthTexture,0);const et=K.__webglTexture,Y=_e(v);if(v.depthTexture.format===zr)Dt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0);else if(v.depthTexture.format===kr)Dt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function se(R){const v=n.get(R),k=R.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==R.depthTexture){const K=R.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),K){const et=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,K.removeEventListener("dispose",et)};K.addEventListener("dispose",et),v.__depthDisposeCallback=et}v.__boundDepthTexture=K}if(R.depthTexture&&!v.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");const K=R.texture.mipmaps;K&&K.length>0?Nt(v.__webglFramebuffer[0],R):Nt(v.__webglFramebuffer,R)}else if(k){v.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[K]),v.__webglDepthbuffer[K]===void 0)v.__webglDepthbuffer[K]=i.createRenderbuffer(),Ht(v.__webglDepthbuffer[K],R,!1);else{const et=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=v.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,Y)}}else{const K=R.texture.mipmaps;if(K&&K.length>0?e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),Ht(v.__webglDepthbuffer,R,!1);else{const et=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,Y)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ze(R,v,k){const K=n.get(R);v!==void 0&&Rt(K.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&se(R)}function U(R){const v=R.texture,k=n.get(R),K=n.get(v);R.addEventListener("dispose",A);const et=R.textures,Y=R.isWebGLCubeRenderTarget===!0,Ft=et.length>1;if(Ft||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=v.version,o.memory.textures++),Y){k.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer[ft]=[];for(let It=0;It<v.mipmaps.length;It++)k.__webglFramebuffer[ft][It]=i.createFramebuffer()}else k.__webglFramebuffer[ft]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer=[];for(let ft=0;ft<v.mipmaps.length;ft++)k.__webglFramebuffer[ft]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(Ft)for(let ft=0,It=et.length;ft<It;ft++){const Lt=n.get(et[ft]);Lt.__webglTexture===void 0&&(Lt.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&Dt(R)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ft=0;ft<et.length;ft++){const It=et[ft];k.__webglColorRenderbuffer[ft]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[ft]);const Lt=r.convert(It.format,It.colorSpace),ct=r.convert(It.type),gt=T(It.internalFormat,Lt,ct,It.colorSpace,R.isXRRenderTarget===!0),St=_e(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,St,gt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,k.__webglColorRenderbuffer[ft])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),Ht(k.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),Zt(i.TEXTURE_CUBE_MAP,v);for(let ft=0;ft<6;ft++)if(v.mipmaps&&v.mipmaps.length>0)for(let It=0;It<v.mipmaps.length;It++)Rt(k.__webglFramebuffer[ft][It],R,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,It);else Rt(k.__webglFramebuffer[ft],R,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);m(v)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ft){for(let ft=0,It=et.length;ft<It;ft++){const Lt=et[ft],ct=n.get(Lt);let gt=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(gt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(gt,ct.__webglTexture),Zt(gt,Lt),Rt(k.__webglFramebuffer,R,Lt,i.COLOR_ATTACHMENT0+ft,gt,0),m(Lt)&&f(gt)}e.unbindTexture()}else{let ft=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ft=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ft,K.__webglTexture),Zt(ft,v),v.mipmaps&&v.mipmaps.length>0)for(let It=0;It<v.mipmaps.length;It++)Rt(k.__webglFramebuffer[It],R,v,i.COLOR_ATTACHMENT0,ft,It);else Rt(k.__webglFramebuffer,R,v,i.COLOR_ATTACHMENT0,ft,0);m(v)&&f(ft),e.unbindTexture()}R.depthBuffer&&se(R)}function we(R){const v=R.textures;for(let k=0,K=v.length;k<K;k++){const et=v[k];if(m(et)){const Y=w(R),Ft=n.get(et).__webglTexture;e.bindTexture(Y,Ft),f(Y),e.unbindTexture()}}}const Xt=[],Gt=[];function Ct(R){if(R.samples>0){if(Dt(R)===!1){const v=R.textures,k=R.width,K=R.height;let et=i.COLOR_BUFFER_BIT;const Y=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ft=n.get(R),ft=v.length>1;if(ft)for(let Lt=0;Lt<v.length;Lt++)e.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer);const It=R.texture.mipmaps;It&&It.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer);for(let Lt=0;Lt<v.length;Lt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),ft){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ft.__webglColorRenderbuffer[Lt]);const ct=n.get(v[Lt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ct,0)}i.blitFramebuffer(0,0,k,K,0,0,k,K,et,i.NEAREST),l===!0&&(Xt.length=0,Gt.length=0,Xt.push(i.COLOR_ATTACHMENT0+Lt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Xt.push(Y),Gt.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Gt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Xt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ft)for(let Lt=0;Lt<v.length;Lt++){e.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.RENDERBUFFER,Ft.__webglColorRenderbuffer[Lt]);const ct=n.get(v[Lt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.TEXTURE_2D,ct,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const v=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function _e(R){return Math.min(s.maxSamples,R.samples)}function Dt(R){const v=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Wt(R){const v=o.render.frame;h.get(R)!==v&&(h.set(R,v),R.update())}function re(R,v){const k=R.colorSpace,K=R.format,et=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||k!==Zs&&k!==Bi&&(fe.getTransfer(k)===xe?(K!==Yn||et!==ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),v}function Pe(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=z,this.setTexture2D=$,this.setTexture2DArray=J,this.setTexture3D=st,this.setTextureCube=q,this.rebindTextures=ze,this.setupRenderTarget=U,this.updateRenderTargetMipmap=we,this.updateMultisampleRenderTarget=Ct,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=Rt,this.useMultisampledRTT=Dt}function tv(i,t){function e(n,s=Bi){let r;const o=fe.getTransfer(s);if(n===ei)return i.UNSIGNED_BYTE;if(n===nc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ic)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Lu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Uu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Du)return i.BYTE;if(n===Iu)return i.SHORT;if(n===Or)return i.UNSIGNED_SHORT;if(n===ec)return i.INT;if(n===ps)return i.UNSIGNED_INT;if(n===jn)return i.FLOAT;if(n===Mi)return i.HALF_FLOAT;if(n===Nu)return i.ALPHA;if(n===Fu)return i.RGB;if(n===Yn)return i.RGBA;if(n===zr)return i.DEPTH_COMPONENT;if(n===kr)return i.DEPTH_STENCIL;if(n===sc)return i.RED;if(n===rc)return i.RED_INTEGER;if(n===Ou)return i.RG;if(n===oc)return i.RG_INTEGER;if(n===ac)return i.RGBA_INTEGER;if(n===No||n===Fo||n===Oo||n===Bo)if(o===xe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===No)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===No)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Fo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Oo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Bo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===vl||n===xl||n===Ml||n===Sl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===vl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===xl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ml)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Sl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===yl||n===El||n===Tl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===yl||n===El)return o===xe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Tl)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===bl||n===wl||n===Al||n===Rl||n===Cl||n===Pl||n===Dl||n===Il||n===Ll||n===Ul||n===Nl||n===Fl||n===Ol||n===Bl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===bl)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===wl)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Al)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Rl)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Cl)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Pl)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Dl)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Il)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ll)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ul)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Nl)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Fl)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ol)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Bl)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===zl||n===kl||n===Hl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===zl)return o===xe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===kl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Hl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Gl||n===Vl||n===Wl||n===Xl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Gl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Vl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Wl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Xl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Br?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const ev=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nv=`
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

}`;class iv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new ju(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ke({vertexShader:ev,fragmentShader:nv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Mt(new Fn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class sv extends er{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,p=null,d=null,g=null;const y=typeof XRWebGLBinding<"u",m=new iv,f={},w=e.getContextAttributes();let T=null,M=null;const C=[],b=[],A=new At;let P=null;const x=new Nn;x.viewport=new Ne;const S=new Nn;S.viewport=new Ne;const L=[x,S],z=new Tp;let X=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let it=C[Z];return it===void 0&&(it=new Ua,C[Z]=it),it.getTargetRaySpace()},this.getControllerGrip=function(Z){let it=C[Z];return it===void 0&&(it=new Ua,C[Z]=it),it.getGripSpace()},this.getHand=function(Z){let it=C[Z];return it===void 0&&(it=new Ua,C[Z]=it),it.getHandSpace()};function $(Z){const it=b.indexOf(Z.inputSource);if(it===-1)return;const Rt=C[it];Rt!==void 0&&(Rt.update(Z.inputSource,Z.frame,c||o),Rt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function J(){s.removeEventListener("select",$),s.removeEventListener("selectstart",$),s.removeEventListener("selectend",$),s.removeEventListener("squeeze",$),s.removeEventListener("squeezestart",$),s.removeEventListener("squeezeend",$),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",st);for(let Z=0;Z<C.length;Z++){const it=b[Z];it!==null&&(b[Z]=null,C[Z].disconnect(it))}X=null,j=null,m.reset();for(const Z in f)delete f[Z];t.setRenderTarget(T),d=null,p=null,u=null,s=null,M=null,ue.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return p!==null?p:d},this.getBinding=function(){return u===null&&y&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(T=t.getRenderTarget(),s.addEventListener("select",$),s.addEventListener("selectstart",$),s.addEventListener("selectend",$),s.addEventListener("squeeze",$),s.addEventListener("squeezestart",$),s.addEventListener("squeezeend",$),s.addEventListener("end",J),s.addEventListener("inputsourceschange",st),w.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(A),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let Rt=null,Ht=null,Nt=null;w.depth&&(Nt=w.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Rt=w.stencil?kr:zr,Ht=w.stencil?Br:ps);const se={colorFormat:e.RGBA8,depthFormat:Nt,scaleFactor:r};u=this.getBinding(),p=u.createProjectionLayer(se),s.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),M=new $n(p.textureWidth,p.textureHeight,{format:Yn,type:ei,depthTexture:new Zu(p.textureWidth,p.textureHeight,Ht,void 0,void 0,void 0,void 0,void 0,void 0,Rt),stencilBuffer:w.stencil,colorSpace:t.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const Rt={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,Rt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new $n(d.framebufferWidth,d.framebufferHeight,{format:Yn,type:ei,colorSpace:t.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ue.setContext(s),ue.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function st(Z){for(let it=0;it<Z.removed.length;it++){const Rt=Z.removed[it],Ht=b.indexOf(Rt);Ht>=0&&(b[Ht]=null,C[Ht].disconnect(Rt))}for(let it=0;it<Z.added.length;it++){const Rt=Z.added[it];let Ht=b.indexOf(Rt);if(Ht===-1){for(let se=0;se<C.length;se++)if(se>=b.length){b.push(Rt),Ht=se;break}else if(b[se]===null){b[se]=Rt,Ht=se;break}if(Ht===-1)break}const Nt=C[Ht];Nt&&Nt.connect(Rt)}}const q=new I,mt=new I;function Et(Z,it,Rt){q.setFromMatrixPosition(it.matrixWorld),mt.setFromMatrixPosition(Rt.matrixWorld);const Ht=q.distanceTo(mt),Nt=it.projectionMatrix.elements,se=Rt.projectionMatrix.elements,ze=Nt[14]/(Nt[10]-1),U=Nt[14]/(Nt[10]+1),we=(Nt[9]+1)/Nt[5],Xt=(Nt[9]-1)/Nt[5],Gt=(Nt[8]-1)/Nt[0],Ct=(se[8]+1)/se[0],_e=ze*Gt,Dt=ze*Ct,Wt=Ht/(-Gt+Ct),re=Wt*-Gt;if(it.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(re),Z.translateZ(Wt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Nt[10]===-1)Z.projectionMatrix.copy(it.projectionMatrix),Z.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{const Pe=ze+Wt,R=U+Wt,v=_e-re,k=Dt+(Ht-re),K=we*U/R*Pe,et=Xt*U/R*Pe;Z.projectionMatrix.makePerspective(v,k,K,et,Pe,R),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function Ot(Z,it){it===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(it.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let it=Z.near,Rt=Z.far;m.texture!==null&&(m.depthNear>0&&(it=m.depthNear),m.depthFar>0&&(Rt=m.depthFar)),z.near=S.near=x.near=it,z.far=S.far=x.far=Rt,(X!==z.near||j!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),X=z.near,j=z.far),z.layers.mask=Z.layers.mask|6,x.layers.mask=z.layers.mask&3,S.layers.mask=z.layers.mask&5;const Ht=Z.parent,Nt=z.cameras;Ot(z,Ht);for(let se=0;se<Nt.length;se++)Ot(Nt[se],Ht);Nt.length===2?Et(z,x,S):z.projectionMatrix.copy(x.projectionMatrix),Zt(Z,z,Ht)};function Zt(Z,it,Rt){Rt===null?Z.matrix.copy(it.matrixWorld):(Z.matrix.copy(Rt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(it.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(it.projectionMatrix),Z.projectionMatrixInverse.copy(it.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Hr*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(p===null&&d===null))return l},this.setFoveation=function(Z){l=Z,p!==null&&(p.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function(Z){return f[Z]};let me=null;function Te(Z,it){if(h=it.getViewerPose(c||o),g=it,h!==null){const Rt=h.views;d!==null&&(t.setRenderTargetFramebuffer(M,d.framebuffer),t.setRenderTarget(M));let Ht=!1;Rt.length!==z.cameras.length&&(z.cameras.length=0,Ht=!0);for(let U=0;U<Rt.length;U++){const we=Rt[U];let Xt=null;if(d!==null)Xt=d.getViewport(we);else{const Ct=u.getViewSubImage(p,we);Xt=Ct.viewport,U===0&&(t.setRenderTargetTextures(M,Ct.colorTexture,Ct.depthStencilTexture),t.setRenderTarget(M))}let Gt=L[U];Gt===void 0&&(Gt=new Nn,Gt.layers.enable(U),Gt.viewport=new Ne,L[U]=Gt),Gt.matrix.fromArray(we.transform.matrix),Gt.matrix.decompose(Gt.position,Gt.quaternion,Gt.scale),Gt.projectionMatrix.fromArray(we.projectionMatrix),Gt.projectionMatrixInverse.copy(Gt.projectionMatrix).invert(),Gt.viewport.set(Xt.x,Xt.y,Xt.width,Xt.height),U===0&&(z.matrix.copy(Gt.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Ht===!0&&z.cameras.push(Gt)}const Nt=s.enabledFeatures;if(Nt&&Nt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){u=n.getBinding();const U=u.getDepthInformation(Rt[0]);U&&U.isValid&&U.texture&&m.init(U,s.renderState)}if(Nt&&Nt.includes("camera-access")&&y){t.state.unbindTexture(),u=n.getBinding();for(let U=0;U<Rt.length;U++){const we=Rt[U].camera;if(we){let Xt=f[we];Xt||(Xt=new ju,f[we]=Xt);const Gt=u.getCameraImage(we);Xt.sourceTexture=Gt}}}}for(let Rt=0;Rt<C.length;Rt++){const Ht=b[Rt],Nt=C[Rt];Ht!==null&&Nt!==void 0&&Nt.update(Ht,it,c||o)}me&&me(Z,it),it.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:it}),g=null}const ue=new id;ue.setAnimationLoop(Te),this.setAnimationLoop=function(Z){me=Z},this.dispose=function(){}}}const ss=new _n,rv=new he;function ov(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,qu(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,w,T,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),p(m,f),f.isMeshPhysicalMaterial&&d(m,f,M)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),y(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,w,T):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===fn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===fn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const w=t.get(f),T=w.envMap,M=w.envMapRotation;T&&(m.envMap.value=T,ss.copy(M),ss.x*=-1,ss.y*=-1,ss.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(ss.y*=-1,ss.z*=-1),m.envMapRotation.value.setFromMatrix4(rv.makeRotationFromEuler(ss)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,w,T){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*w,m.scale.value=T*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function p(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function d(m,f,w){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===fn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function y(m,f){const w=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function av(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,T){const M=T.program;n.uniformBlockBinding(w,M)}function c(w,T){let M=s[w.id];M===void 0&&(g(w),M=h(w),s[w.id]=M,w.addEventListener("dispose",m));const C=T.program;n.updateUBOMapping(w,C);const b=t.render.frame;r[w.id]!==b&&(p(w),r[w.id]=b)}function h(w){const T=u();w.__bindingPointIndex=T;const M=i.createBuffer(),C=w.__size,b=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,C,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,M),M}function u(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(w){const T=s[w.id],M=w.uniforms,C=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let b=0,A=M.length;b<A;b++){const P=Array.isArray(M[b])?M[b]:[M[b]];for(let x=0,S=P.length;x<S;x++){const L=P[x];if(d(L,b,x,C)===!0){const z=L.__offset,X=Array.isArray(L.value)?L.value:[L.value];let j=0;for(let $=0;$<X.length;$++){const J=X[$],st=y(J);typeof J=="number"||typeof J=="boolean"?(L.__data[0]=J,i.bufferSubData(i.UNIFORM_BUFFER,z+j,L.__data)):J.isMatrix3?(L.__data[0]=J.elements[0],L.__data[1]=J.elements[1],L.__data[2]=J.elements[2],L.__data[3]=0,L.__data[4]=J.elements[3],L.__data[5]=J.elements[4],L.__data[6]=J.elements[5],L.__data[7]=0,L.__data[8]=J.elements[6],L.__data[9]=J.elements[7],L.__data[10]=J.elements[8],L.__data[11]=0):(J.toArray(L.__data,j),j+=st.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(w,T,M,C){const b=w.value,A=T+"_"+M;if(C[A]===void 0)return typeof b=="number"||typeof b=="boolean"?C[A]=b:C[A]=b.clone(),!0;{const P=C[A];if(typeof b=="number"||typeof b=="boolean"){if(P!==b)return C[A]=b,!0}else if(P.equals(b)===!1)return P.copy(b),!0}return!1}function g(w){const T=w.uniforms;let M=0;const C=16;for(let A=0,P=T.length;A<P;A++){const x=Array.isArray(T[A])?T[A]:[T[A]];for(let S=0,L=x.length;S<L;S++){const z=x[S],X=Array.isArray(z.value)?z.value:[z.value];for(let j=0,$=X.length;j<$;j++){const J=X[j],st=y(J),q=M%C,mt=q%st.boundary,Et=q+mt;M+=mt,Et!==0&&C-Et<st.storage&&(M+=C-Et),z.__data=new Float32Array(st.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=M,M+=st.storage}}}const b=M%C;return b>0&&(M+=C-b),w.__size=M,w.__cache={},this}function y(w){const T={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(T.boundary=4,T.storage=4):w.isVector2?(T.boundary=8,T.storage=8):w.isVector3||w.isColor?(T.boundary=16,T.storage=12):w.isVector4?(T.boundary=16,T.storage=16):w.isMatrix3?(T.boundary=48,T.storage=48):w.isMatrix4?(T.boundary=64,T.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),T}function m(w){const T=w.target;T.removeEventListener("dispose",m);const M=o.indexOf(T.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function f(){for(const w in s)i.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}class lv{constructor(t={}){const{canvas:e=Tf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:p=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),y=new Int32Array(4);let m=null,f=null;const w=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let C=!1;this._outputColorSpace=gn;let b=0,A=0,P=null,x=-1,S=null;const L=new Ne,z=new Ne;let X=null;const j=new dt(0);let $=0,J=e.width,st=e.height,q=1,mt=null,Et=null;const Ot=new Ne(0,0,J,st),Zt=new Ne(0,0,J,st);let me=!1;const Te=new dc;let ue=!1,Z=!1;const it=new he,Rt=new I,Ht=new Ne,Nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let se=!1;function ze(){return P===null?q:1}let U=n;function we(E,O){return e.getContext(E,O)}try{const E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${jl}`),e.addEventListener("webglcontextlost",pt,!1),e.addEventListener("webglcontextrestored",Tt,!1),e.addEventListener("webglcontextcreationerror",at,!1),U===null){const O="webgl2";if(U=we(O,E),U===null)throw we(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Xt,Gt,Ct,_e,Dt,Wt,re,Pe,R,v,k,K,et,Y,Ft,ft,It,Lt,ct,gt,St,ut,nt,Vt;function F(){Xt=new vg(U),Xt.init(),ut=new tv(U,Xt),Gt=new ug(U,Xt,t,ut),Ct=new j_(U,Xt),Gt.reversedDepthBuffer&&p&&Ct.buffers.depth.setReversed(!0),_e=new Sg(U),Dt=new z_,Wt=new Q_(U,Xt,Ct,Dt,Gt,ut,_e),re=new fg(M),Pe=new _g(M),R=new Ap(U),nt=new cg(U,R),v=new xg(U,R,_e,nt),k=new Eg(U,v,R,_e),ct=new yg(U,Gt,Wt),ft=new dg(Dt),K=new B_(M,re,Pe,Xt,Gt,nt,ft),et=new ov(M,Dt),Y=new H_,Ft=new Y_(Xt),Lt=new lg(M,re,Pe,Ct,k,d,l),It=new J_(M,k,Gt),Vt=new av(U,_e,Gt,Ct),gt=new hg(U,Xt,_e),St=new Mg(U,Xt,_e),_e.programs=K.programs,M.capabilities=Gt,M.extensions=Xt,M.properties=Dt,M.renderLists=Y,M.shadowMap=It,M.state=Ct,M.info=_e}F();const rt=new sv(M,U);this.xr=rt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const E=Xt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Xt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(E){E!==void 0&&(q=E,this.setSize(J,st,!1))},this.getSize=function(E){return E.set(J,st)},this.setSize=function(E,O,G=!0){if(rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=E,st=O,e.width=Math.floor(E*q),e.height=Math.floor(O*q),G===!0&&(e.style.width=E+"px",e.style.height=O+"px"),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(J*q,st*q).floor()},this.setDrawingBufferSize=function(E,O,G){J=E,st=O,q=G,e.width=Math.floor(E*G),e.height=Math.floor(O*G),this.setViewport(0,0,E,O)},this.getCurrentViewport=function(E){return E.copy(L)},this.getViewport=function(E){return E.copy(Ot)},this.setViewport=function(E,O,G,V){E.isVector4?Ot.set(E.x,E.y,E.z,E.w):Ot.set(E,O,G,V),Ct.viewport(L.copy(Ot).multiplyScalar(q).round())},this.getScissor=function(E){return E.copy(Zt)},this.setScissor=function(E,O,G,V){E.isVector4?Zt.set(E.x,E.y,E.z,E.w):Zt.set(E,O,G,V),Ct.scissor(z.copy(Zt).multiplyScalar(q).round())},this.getScissorTest=function(){return me},this.setScissorTest=function(E){Ct.setScissorTest(me=E)},this.setOpaqueSort=function(E){mt=E},this.setTransparentSort=function(E){Et=E},this.getClearColor=function(E){return E.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor(...arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha(...arguments)},this.clear=function(E=!0,O=!0,G=!0){let V=0;if(E){let B=!1;if(P!==null){const lt=P.texture.format;B=lt===ac||lt===oc||lt===rc}if(B){const lt=P.texture.type,_t=lt===ei||lt===ps||lt===Or||lt===Br||lt===nc||lt===ic,Pt=Lt.getClearColor(),yt=Lt.getClearAlpha(),zt=Pt.r,kt=Pt.g,Ut=Pt.b;_t?(g[0]=zt,g[1]=kt,g[2]=Ut,g[3]=yt,U.clearBufferuiv(U.COLOR,0,g)):(y[0]=zt,y[1]=kt,y[2]=Ut,y[3]=yt,U.clearBufferiv(U.COLOR,0,y))}else V|=U.COLOR_BUFFER_BIT}O&&(V|=U.DEPTH_BUFFER_BIT),G&&(V|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",pt,!1),e.removeEventListener("webglcontextrestored",Tt,!1),e.removeEventListener("webglcontextcreationerror",at,!1),Lt.dispose(),Y.dispose(),Ft.dispose(),Dt.dispose(),re.dispose(),Pe.dispose(),k.dispose(),nt.dispose(),Vt.dispose(),K.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",Ze),rt.removeEventListener("sessionend",si),Ce.stop()};function pt(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function Tt(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const E=_e.autoReset,O=It.enabled,G=It.autoUpdate,V=It.needsUpdate,B=It.type;F(),_e.autoReset=E,It.enabled=O,It.autoUpdate=G,It.needsUpdate=V,It.type=B}function at(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Q(E){const O=E.target;O.removeEventListener("dispose",Q),bt(O)}function bt(E){qt(E),Dt.remove(E)}function qt(E){const O=Dt.get(E).programs;O!==void 0&&(O.forEach(function(G){K.releaseProgram(G)}),E.isShaderMaterial&&K.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,G,V,B,lt){O===null&&(O=Nt);const _t=B.isMesh&&B.matrixWorld.determinant()<0,Pt=dr(E,O,G,V,B);Ct.setMaterial(V,_t);let yt=G.index,zt=1;if(V.wireframe===!0){if(yt=v.getWireframeAttribute(G),yt===void 0)return;zt=2}const kt=G.drawRange,Ut=G.attributes.position;let te=kt.start*zt,ge=(kt.start+kt.count)*zt;lt!==null&&(te=Math.max(te,lt.start*zt),ge=Math.min(ge,(lt.start+lt.count)*zt)),yt!==null?(te=Math.max(te,0),ge=Math.min(ge,yt.count)):Ut!=null&&(te=Math.max(te,0),ge=Math.min(ge,Ut.count));const ve=ge-te;if(ve<0||ve===1/0)return;nt.setup(B,V,Pt,G,yt);let Me,pe=gt;if(yt!==null&&(Me=R.get(yt),pe=St,pe.setIndex(Me)),B.isMesh)V.wireframe===!0?(Ct.setLineWidth(V.wireframeLinewidth*ze()),pe.setMode(U.LINES)):pe.setMode(U.TRIANGLES);else if(B.isLine){let Bt=V.linewidth;Bt===void 0&&(Bt=1),Ct.setLineWidth(Bt*ze()),B.isLineSegments?pe.setMode(U.LINES):B.isLineLoop?pe.setMode(U.LINE_LOOP):pe.setMode(U.LINE_STRIP)}else B.isPoints?pe.setMode(U.POINTS):B.isSprite&&pe.setMode(U.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Gr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),pe.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Xt.get("WEBGL_multi_draw"))pe.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Bt=B._multiDrawStarts,Se=B._multiDrawCounts,oe=B._multiDrawCount,nn=yt?R.get(yt).bytesPerElement:1,oi=Dt.get(V).currentProgram.getUniforms();for(let sn=0;sn<oe;sn++)oi.setValue(U,"_gl_DrawID",sn),pe.render(Bt[sn]/nn,Se[sn])}else if(B.isInstancedMesh)pe.renderInstances(te,ve,B.count);else if(G.isInstancedBufferGeometry){const Bt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Se=Math.min(G.instanceCount,Bt);pe.renderInstances(te,ve,Se)}else pe.render(te,ve)};function de(E,O,G){E.transparent===!0&&E.side===Le&&E.forceSinglePass===!1?(E.side=fn,E.needsUpdate=!0,Ms(E,O,G),E.side=Wi,E.needsUpdate=!0,Ms(E,O,G),E.side=Le):Ms(E,O,G)}this.compile=function(E,O,G=null){G===null&&(G=E),f=Ft.get(G),f.init(O),T.push(f),G.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),E!==G&&E.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),f.setupLights();const V=new Set;return E.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const lt=B.material;if(lt)if(Array.isArray(lt))for(let _t=0;_t<lt.length;_t++){const Pt=lt[_t];de(Pt,G,B),V.add(Pt)}else de(lt,G,B),V.add(lt)}),f=T.pop(),V},this.compileAsync=function(E,O,G=null){const V=this.compile(E,O,G);return new Promise(B=>{function lt(){if(V.forEach(function(_t){Dt.get(_t).currentProgram.isReady()&&V.delete(_t)}),V.size===0){B(E);return}setTimeout(lt,10)}Xt.get("KHR_parallel_shader_compile")!==null?lt():setTimeout(lt,10)})};let le=null;function Xe(E){le&&le(E)}function Ze(){Ce.stop()}function si(){Ce.start()}const Ce=new id;Ce.setAnimationLoop(Xe),typeof self<"u"&&Ce.setContext(self),this.setAnimationLoop=function(E){le=E,rt.setAnimationLoop(E),E===null?Ce.stop():Ce.start()},rt.addEventListener("sessionstart",Ze),rt.addEventListener("sessionend",si),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(O),O=rt.getCamera()),E.isScene===!0&&E.onBeforeRender(M,E,O,P),f=Ft.get(E,T.length),f.init(O),T.push(f),it.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Te.setFromProjectionMatrix(it,Qn,O.reversedDepth),Z=this.localClippingEnabled,ue=ft.init(this.clippingPlanes,Z),m=Y.get(E,w.length),m.init(),w.push(m),rt.enabled===!0&&rt.isPresenting===!0){const lt=M.xr.getDepthSensingMesh();lt!==null&&je(lt,O,-1/0,M.sortObjects)}je(E,O,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(mt,Et),se=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,se&&Lt.addToRenderList(m,E),this.info.render.frame++,ue===!0&&ft.beginShadows();const G=f.state.shadowsArray;It.render(G,E,O),ue===!0&&ft.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=m.opaque,B=m.transmissive;if(f.setupLights(),O.isArrayCamera){const lt=O.cameras;if(B.length>0)for(let _t=0,Pt=lt.length;_t<Pt;_t++){const yt=lt[_t];xn(V,B,E,yt)}se&&Lt.render(E);for(let _t=0,Pt=lt.length;_t<Pt;_t++){const yt=lt[_t];Pn(m,E,yt,yt.viewport)}}else B.length>0&&xn(V,B,E,O),se&&Lt.render(E),Pn(m,E,O);P!==null&&A===0&&(Wt.updateMultisampleRenderTarget(P),Wt.updateRenderTargetMipmap(P)),E.isScene===!0&&E.onAfterRender(M,E,O),nt.resetDefaultState(),x=-1,S=null,T.pop(),T.length>0?(f=T[T.length-1],ue===!0&&ft.setGlobalState(M.clippingPlanes,f.state.camera)):f=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function je(E,O,G,V){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)G=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Te.intersectsSprite(E)){V&&Ht.setFromMatrixPosition(E.matrixWorld).applyMatrix4(it);const _t=k.update(E),Pt=E.material;Pt.visible&&m.push(E,_t,Pt,G,Ht.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Te.intersectsObject(E))){const _t=k.update(E),Pt=E.material;if(V&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ht.copy(E.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),Ht.copy(_t.boundingSphere.center)),Ht.applyMatrix4(E.matrixWorld).applyMatrix4(it)),Array.isArray(Pt)){const yt=_t.groups;for(let zt=0,kt=yt.length;zt<kt;zt++){const Ut=yt[zt],te=Pt[Ut.materialIndex];te&&te.visible&&m.push(E,_t,te,G,Ht.z,Ut)}}else Pt.visible&&m.push(E,_t,Pt,G,Ht.z,null)}}const lt=E.children;for(let _t=0,Pt=lt.length;_t<Pt;_t++)je(lt[_t],O,G,V)}function Pn(E,O,G,V){const B=E.opaque,lt=E.transmissive,_t=E.transparent;f.setupLightsView(G),ue===!0&&ft.setGlobalState(M.clippingPlanes,G),V&&Ct.viewport(L.copy(V)),B.length>0&&ri(B,O,G),lt.length>0&&ri(lt,O,G),_t.length>0&&ri(_t,O,G),Ct.buffers.depth.setTest(!0),Ct.buffers.depth.setMask(!0),Ct.buffers.color.setMask(!0),Ct.setPolygonOffset(!1)}function xn(E,O,G,V){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[V.id]===void 0&&(f.state.transmissionRenderTarget[V.id]=new $n(1,1,{generateMipmaps:!0,type:Xt.has("EXT_color_buffer_half_float")||Xt.has("EXT_color_buffer_float")?Mi:ei,minFilter:fs,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:fe.workingColorSpace}));const lt=f.state.transmissionRenderTarget[V.id],_t=V.viewport||L;lt.setSize(_t.z*M.transmissionResolutionScale,_t.w*M.transmissionResolutionScale);const Pt=M.getRenderTarget(),yt=M.getActiveCubeFace(),zt=M.getActiveMipmapLevel();M.setRenderTarget(lt),M.getClearColor(j),$=M.getClearAlpha(),$<1&&M.setClearColor(16777215,.5),M.clear(),se&&Lt.render(G);const kt=M.toneMapping;M.toneMapping=Hi;const Ut=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),f.setupLightsView(V),ue===!0&&ft.setGlobalState(M.clippingPlanes,V),ri(E,G,V),Wt.updateMultisampleRenderTarget(lt),Wt.updateRenderTargetMipmap(lt),Xt.has("WEBGL_multisampled_render_to_texture")===!1){let te=!1;for(let ge=0,ve=O.length;ge<ve;ge++){const Me=O[ge],pe=Me.object,Bt=Me.geometry,Se=Me.material,oe=Me.group;if(Se.side===Le&&pe.layers.test(V.layers)){const nn=Se.side;Se.side=fn,Se.needsUpdate=!0,hr(pe,G,V,Bt,Se,oe),Se.side=nn,Se.needsUpdate=!0,te=!0}}te===!0&&(Wt.updateMultisampleRenderTarget(lt),Wt.updateRenderTargetMipmap(lt))}M.setRenderTarget(Pt,yt,zt),M.setClearColor(j,$),Ut!==void 0&&(V.viewport=Ut),M.toneMapping=kt}function ri(E,O,G){const V=O.isScene===!0?O.overrideMaterial:null;for(let B=0,lt=E.length;B<lt;B++){const _t=E[B],Pt=_t.object,yt=_t.geometry,zt=_t.group;let kt=_t.material;kt.allowOverride===!0&&V!==null&&(kt=V),Pt.layers.test(G.layers)&&hr(Pt,O,G,yt,kt,zt)}}function hr(E,O,G,V,B,lt){E.onBeforeRender(M,O,G,V,B,lt),E.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),B.onBeforeRender(M,O,G,V,E,lt),B.transparent===!0&&B.side===Le&&B.forceSinglePass===!1?(B.side=fn,B.needsUpdate=!0,M.renderBufferDirect(G,O,V,B,E,lt),B.side=Wi,B.needsUpdate=!0,M.renderBufferDirect(G,O,V,B,E,lt),B.side=Le):M.renderBufferDirect(G,O,V,B,E,lt),E.onAfterRender(M,O,G,V,B,lt)}function Ms(E,O,G){O.isScene!==!0&&(O=Nt);const V=Dt.get(E),B=f.state.lights,lt=f.state.shadowsArray,_t=B.state.version,Pt=K.getParameters(E,B.state,lt,O,G),yt=K.getProgramCacheKey(Pt);let zt=V.programs;V.environment=E.isMeshStandardMaterial?O.environment:null,V.fog=O.fog,V.envMap=(E.isMeshStandardMaterial?Pe:re).get(E.envMap||V.environment),V.envMapRotation=V.environment!==null&&E.envMap===null?O.environmentRotation:E.envMapRotation,zt===void 0&&(E.addEventListener("dispose",Q),zt=new Map,V.programs=zt);let kt=zt.get(yt);if(kt!==void 0){if(V.currentProgram===kt&&V.lightsStateVersion===_t)return ur(E,Pt),kt}else Pt.uniforms=K.getUniforms(E),E.onBeforeCompile(Pt,M),kt=K.acquireProgram(Pt,yt),zt.set(yt,kt),V.uniforms=Pt.uniforms;const Ut=V.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ut.clippingPlanes=ft.uniform),ur(E,Pt),V.needsLights=Jr(E),V.lightsStateVersion=_t,V.needsLights&&(Ut.ambientLightColor.value=B.state.ambient,Ut.lightProbe.value=B.state.probe,Ut.directionalLights.value=B.state.directional,Ut.directionalLightShadows.value=B.state.directionalShadow,Ut.spotLights.value=B.state.spot,Ut.spotLightShadows.value=B.state.spotShadow,Ut.rectAreaLights.value=B.state.rectArea,Ut.ltc_1.value=B.state.rectAreaLTC1,Ut.ltc_2.value=B.state.rectAreaLTC2,Ut.pointLights.value=B.state.point,Ut.pointLightShadows.value=B.state.pointShadow,Ut.hemisphereLights.value=B.state.hemi,Ut.directionalShadowMap.value=B.state.directionalShadowMap,Ut.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ut.spotShadowMap.value=B.state.spotShadowMap,Ut.spotLightMatrix.value=B.state.spotLightMatrix,Ut.spotLightMap.value=B.state.spotLightMap,Ut.pointShadowMap.value=B.state.pointShadowMap,Ut.pointShadowMatrix.value=B.state.pointShadowMatrix),V.currentProgram=kt,V.uniformsList=null,kt}function Ti(E){if(E.uniformsList===null){const O=E.currentProgram.getUniforms();E.uniformsList=zo.seqWithValue(O.seq,E.uniforms)}return E.uniformsList}function ur(E,O){const G=Dt.get(E);G.outputColorSpace=O.outputColorSpace,G.batching=O.batching,G.batchingColor=O.batchingColor,G.instancing=O.instancing,G.instancingColor=O.instancingColor,G.instancingMorph=O.instancingMorph,G.skinning=O.skinning,G.morphTargets=O.morphTargets,G.morphNormals=O.morphNormals,G.morphColors=O.morphColors,G.morphTargetsCount=O.morphTargetsCount,G.numClippingPlanes=O.numClippingPlanes,G.numIntersection=O.numClipIntersection,G.vertexAlphas=O.vertexAlphas,G.vertexTangents=O.vertexTangents,G.toneMapping=O.toneMapping}function dr(E,O,G,V,B){O.isScene!==!0&&(O=Nt),Wt.resetTextureUnits();const lt=O.fog,_t=V.isMeshStandardMaterial?O.environment:null,Pt=P===null?M.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Zs,yt=(V.isMeshStandardMaterial?Pe:re).get(V.envMap||_t),zt=V.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,kt=!!G.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ut=!!G.morphAttributes.position,te=!!G.morphAttributes.normal,ge=!!G.morphAttributes.color;let ve=Hi;V.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ve=M.toneMapping);const Me=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,pe=Me!==void 0?Me.length:0,Bt=Dt.get(V),Se=f.state.lights;if(ue===!0&&(Z===!0||E!==S)){const Qe=E===S&&V.id===x;ft.setState(V,E,Qe)}let oe=!1;V.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==Se.state.version||Bt.outputColorSpace!==Pt||B.isBatchedMesh&&Bt.batching===!1||!B.isBatchedMesh&&Bt.batching===!0||B.isBatchedMesh&&Bt.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Bt.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Bt.instancing===!1||!B.isInstancedMesh&&Bt.instancing===!0||B.isSkinnedMesh&&Bt.skinning===!1||!B.isSkinnedMesh&&Bt.skinning===!0||B.isInstancedMesh&&Bt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Bt.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Bt.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Bt.instancingMorph===!1&&B.morphTexture!==null||Bt.envMap!==yt||V.fog===!0&&Bt.fog!==lt||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==ft.numPlanes||Bt.numIntersection!==ft.numIntersection)||Bt.vertexAlphas!==zt||Bt.vertexTangents!==kt||Bt.morphTargets!==Ut||Bt.morphNormals!==te||Bt.morphColors!==ge||Bt.toneMapping!==ve||Bt.morphTargetsCount!==pe)&&(oe=!0):(oe=!0,Bt.__version=V.version);let nn=Bt.currentProgram;oe===!0&&(nn=Ms(V,O,B));let oi=!1,sn=!1,ai=!1;const Ae=nn.getUniforms(),pn=Bt.uniforms;if(Ct.useProgram(nn.program)&&(oi=!0,sn=!0,ai=!0),V.id!==x&&(x=V.id,sn=!0),oi||S!==E){Ct.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Ae.setValue(U,"projectionMatrix",E.projectionMatrix),Ae.setValue(U,"viewMatrix",E.matrixWorldInverse);const qe=Ae.map.cameraPosition;qe!==void 0&&qe.setValue(U,Rt.setFromMatrixPosition(E.matrixWorld)),Gt.logarithmicDepthBuffer&&Ae.setValue(U,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Ae.setValue(U,"isOrthographic",E.isOrthographicCamera===!0),S!==E&&(S=E,sn=!0,ai=!0)}if(B.isSkinnedMesh){Ae.setOptional(U,B,"bindMatrix"),Ae.setOptional(U,B,"bindMatrixInverse");const Qe=B.skeleton;Qe&&(Qe.boneTexture===null&&Qe.computeBoneTexture(),Ae.setValue(U,"boneTexture",Qe.boneTexture,Wt))}B.isBatchedMesh&&(Ae.setOptional(U,B,"batchingTexture"),Ae.setValue(U,"batchingTexture",B._matricesTexture,Wt),Ae.setOptional(U,B,"batchingIdTexture"),Ae.setValue(U,"batchingIdTexture",B._indirectTexture,Wt),Ae.setOptional(U,B,"batchingColorTexture"),B._colorsTexture!==null&&Ae.setValue(U,"batchingColorTexture",B._colorsTexture,Wt));const mn=G.morphAttributes;if((mn.position!==void 0||mn.normal!==void 0||mn.color!==void 0)&&ct.update(B,G,nn),(sn||Bt.receiveShadow!==B.receiveShadow)&&(Bt.receiveShadow=B.receiveShadow,Ae.setValue(U,"receiveShadow",B.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(pn.envMap.value=yt,pn.flipEnvMap.value=yt.isCubeTexture&&yt.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&O.environment!==null&&(pn.envMapIntensity.value=O.environmentIntensity),sn&&(Ae.setValue(U,"toneMappingExposure",M.toneMappingExposure),Bt.needsLights&&Ss(pn,ai),lt&&V.fog===!0&&et.refreshFogUniforms(pn,lt),et.refreshMaterialUniforms(pn,V,q,st,f.state.transmissionRenderTarget[E.id]),zo.upload(U,Ti(Bt),pn,Wt)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(zo.upload(U,Ti(Bt),pn,Wt),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Ae.setValue(U,"center",B.center),Ae.setValue(U,"modelViewMatrix",B.modelViewMatrix),Ae.setValue(U,"normalMatrix",B.normalMatrix),Ae.setValue(U,"modelMatrix",B.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Qe=V.uniformsGroups;for(let qe=0,li=Qe.length;qe<li;qe++){const Bn=Qe[qe];Vt.update(Bn,nn),Vt.bind(Bn,nn)}}return nn}function Ss(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function Jr(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(E,O,G){const V=Dt.get(E);V.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),Dt.get(E.texture).__webglTexture=O,Dt.get(E.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:G,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,O){const G=Dt.get(E);G.__webglFramebuffer=O,G.__useDefaultFramebuffer=O===void 0};const Zr=U.createFramebuffer();this.setRenderTarget=function(E,O=0,G=0){P=E,b=O,A=G;let V=!0,B=null,lt=!1,_t=!1;if(E){const yt=Dt.get(E);if(yt.__useDefaultFramebuffer!==void 0)Ct.bindFramebuffer(U.FRAMEBUFFER,null),V=!1;else if(yt.__webglFramebuffer===void 0)Wt.setupRenderTarget(E);else if(yt.__hasExternalTextures)Wt.rebindTextures(E,Dt.get(E.texture).__webglTexture,Dt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ut=E.depthTexture;if(yt.__boundDepthTexture!==Ut){if(Ut!==null&&Dt.has(Ut)&&(E.width!==Ut.image.width||E.height!==Ut.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Wt.setupDepthRenderbuffer(E)}}const zt=E.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(_t=!0);const kt=Dt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(kt[O])?B=kt[O][G]:B=kt[O],lt=!0):E.samples>0&&Wt.useMultisampledRTT(E)===!1?B=Dt.get(E).__webglMultisampledFramebuffer:Array.isArray(kt)?B=kt[G]:B=kt,L.copy(E.viewport),z.copy(E.scissor),X=E.scissorTest}else L.copy(Ot).multiplyScalar(q).floor(),z.copy(Zt).multiplyScalar(q).floor(),X=me;if(G!==0&&(B=Zr),Ct.bindFramebuffer(U.FRAMEBUFFER,B)&&V&&Ct.drawBuffers(E,B),Ct.viewport(L),Ct.scissor(z),Ct.setScissorTest(X),lt){const yt=Dt.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+O,yt.__webglTexture,G)}else if(_t){const yt=O;for(let zt=0;zt<E.textures.length;zt++){const kt=Dt.get(E.textures[zt]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+zt,kt.__webglTexture,G,yt)}}else if(E!==null&&G!==0){const yt=Dt.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,yt.__webglTexture,G)}x=-1},this.readRenderTargetPixels=function(E,O,G,V,B,lt,_t,Pt=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=Dt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&_t!==void 0&&(yt=yt[_t]),yt){Ct.bindFramebuffer(U.FRAMEBUFFER,yt);try{const zt=E.textures[Pt],kt=zt.format,Ut=zt.type;if(!Gt.textureFormatReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Gt.textureTypeReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-V&&G>=0&&G<=E.height-B&&(E.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Pt),U.readPixels(O,G,V,B,ut.convert(kt),ut.convert(Ut),lt))}finally{const zt=P!==null?Dt.get(P).__webglFramebuffer:null;Ct.bindFramebuffer(U.FRAMEBUFFER,zt)}}},this.readRenderTargetPixelsAsync=async function(E,O,G,V,B,lt,_t,Pt=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=Dt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&_t!==void 0&&(yt=yt[_t]),yt)if(O>=0&&O<=E.width-V&&G>=0&&G<=E.height-B){Ct.bindFramebuffer(U.FRAMEBUFFER,yt);const zt=E.textures[Pt],kt=zt.format,Ut=zt.type;if(!Gt.textureFormatReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Gt.textureTypeReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const te=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,te),U.bufferData(U.PIXEL_PACK_BUFFER,lt.byteLength,U.STREAM_READ),E.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Pt),U.readPixels(O,G,V,B,ut.convert(kt),ut.convert(Ut),0);const ge=P!==null?Dt.get(P).__webglFramebuffer:null;Ct.bindFramebuffer(U.FRAMEBUFFER,ge);const ve=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await bf(U,ve,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,te),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,lt),U.deleteBuffer(te),U.deleteSync(ve),lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,O=null,G=0){const V=Math.pow(2,-G),B=Math.floor(E.image.width*V),lt=Math.floor(E.image.height*V),_t=O!==null?O.x:0,Pt=O!==null?O.y:0;Wt.setTexture2D(E,0),U.copyTexSubImage2D(U.TEXTURE_2D,G,0,0,_t,Pt,B,lt),Ct.unbindTexture()};const jr=U.createFramebuffer(),sa=U.createFramebuffer();this.copyTextureToTexture=function(E,O,G=null,V=null,B=0,lt=null){lt===null&&(B!==0?(Gr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),lt=B,B=0):lt=0);let _t,Pt,yt,zt,kt,Ut,te,ge,ve;const Me=E.isCompressedTexture?E.mipmaps[lt]:E.image;if(G!==null)_t=G.max.x-G.min.x,Pt=G.max.y-G.min.y,yt=G.isBox3?G.max.z-G.min.z:1,zt=G.min.x,kt=G.min.y,Ut=G.isBox3?G.min.z:0;else{const mn=Math.pow(2,-B);_t=Math.floor(Me.width*mn),Pt=Math.floor(Me.height*mn),E.isDataArrayTexture?yt=Me.depth:E.isData3DTexture?yt=Math.floor(Me.depth*mn):yt=1,zt=0,kt=0,Ut=0}V!==null?(te=V.x,ge=V.y,ve=V.z):(te=0,ge=0,ve=0);const pe=ut.convert(O.format),Bt=ut.convert(O.type);let Se;O.isData3DTexture?(Wt.setTexture3D(O,0),Se=U.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Wt.setTexture2DArray(O,0),Se=U.TEXTURE_2D_ARRAY):(Wt.setTexture2D(O,0),Se=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,O.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,O.unpackAlignment);const oe=U.getParameter(U.UNPACK_ROW_LENGTH),nn=U.getParameter(U.UNPACK_IMAGE_HEIGHT),oi=U.getParameter(U.UNPACK_SKIP_PIXELS),sn=U.getParameter(U.UNPACK_SKIP_ROWS),ai=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,Me.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Me.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,zt),U.pixelStorei(U.UNPACK_SKIP_ROWS,kt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ut);const Ae=E.isDataArrayTexture||E.isData3DTexture,pn=O.isDataArrayTexture||O.isData3DTexture;if(E.isDepthTexture){const mn=Dt.get(E),Qe=Dt.get(O),qe=Dt.get(mn.__renderTarget),li=Dt.get(Qe.__renderTarget);Ct.bindFramebuffer(U.READ_FRAMEBUFFER,qe.__webglFramebuffer),Ct.bindFramebuffer(U.DRAW_FRAMEBUFFER,li.__webglFramebuffer);for(let Bn=0;Bn<yt;Bn++)Ae&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Dt.get(E).__webglTexture,B,Ut+Bn),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Dt.get(O).__webglTexture,lt,ve+Bn)),U.blitFramebuffer(zt,kt,_t,Pt,te,ge,_t,Pt,U.DEPTH_BUFFER_BIT,U.NEAREST);Ct.bindFramebuffer(U.READ_FRAMEBUFFER,null),Ct.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(B!==0||E.isRenderTargetTexture||Dt.has(E)){const mn=Dt.get(E),Qe=Dt.get(O);Ct.bindFramebuffer(U.READ_FRAMEBUFFER,jr),Ct.bindFramebuffer(U.DRAW_FRAMEBUFFER,sa);for(let qe=0;qe<yt;qe++)Ae?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,mn.__webglTexture,B,Ut+qe):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,mn.__webglTexture,B),pn?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Qe.__webglTexture,lt,ve+qe):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Qe.__webglTexture,lt),B!==0?U.blitFramebuffer(zt,kt,_t,Pt,te,ge,_t,Pt,U.COLOR_BUFFER_BIT,U.NEAREST):pn?U.copyTexSubImage3D(Se,lt,te,ge,ve+qe,zt,kt,_t,Pt):U.copyTexSubImage2D(Se,lt,te,ge,zt,kt,_t,Pt);Ct.bindFramebuffer(U.READ_FRAMEBUFFER,null),Ct.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else pn?E.isDataTexture||E.isData3DTexture?U.texSubImage3D(Se,lt,te,ge,ve,_t,Pt,yt,pe,Bt,Me.data):O.isCompressedArrayTexture?U.compressedTexSubImage3D(Se,lt,te,ge,ve,_t,Pt,yt,pe,Me.data):U.texSubImage3D(Se,lt,te,ge,ve,_t,Pt,yt,pe,Bt,Me):E.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,lt,te,ge,_t,Pt,pe,Bt,Me.data):E.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,lt,te,ge,Me.width,Me.height,pe,Me.data):U.texSubImage2D(U.TEXTURE_2D,lt,te,ge,_t,Pt,pe,Bt,Me);U.pixelStorei(U.UNPACK_ROW_LENGTH,oe),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,nn),U.pixelStorei(U.UNPACK_SKIP_PIXELS,oi),U.pixelStorei(U.UNPACK_SKIP_ROWS,sn),U.pixelStorei(U.UNPACK_SKIP_IMAGES,ai),lt===0&&O.generateMipmaps&&U.generateMipmap(Se),Ct.unbindTexture()},this.initRenderTarget=function(E){Dt.get(E).__webglFramebuffer===void 0&&Wt.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Wt.setTextureCube(E,0):E.isData3DTexture?Wt.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Wt.setTexture2DArray(E,0):Wt.setTexture2D(E,0),Ct.unbindTexture()},this.resetState=function(){b=0,A=0,P=null,Ct.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=fe._getDrawingBufferColorSpace(t),e.unpackColorSpace=fe._getUnpackColorSpace()}}const ko={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class ar{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const cv=new pc(-1,1,1,-1,0,1);class hv extends Fe{constructor(){super(),this.setAttribute("position",new ne([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ne([0,2,0,0,2,0],2))}}const uv=new hv;class gc{constructor(t){this._mesh=new Mt(uv,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,cv)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class dv extends ar{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Ke?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Qs.clone(t.uniforms),this.material=new Ke({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new gc(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class jh extends ar{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class fv extends ar{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class pv{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new At);this._width=n.width,this._height=n.height,e=new $n(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Mi}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new dv(ko),this.copyPass.material.blending=xi,this.clock=new bp}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}jh!==void 0&&(o instanceof jh?n=!0:o instanceof fv&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new At);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class mv extends ar{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new dt}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}}const gv={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new dt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class tr extends ar{constructor(t,e=1,n,s){super(),this.strength=e,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new At(t.x,t.y):new At(256,256),this.clearColor=new dt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new $n(r,o,{type:Mi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const u=new $n(r,o,{type:Mi});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const p=new $n(r,o,{type:Mi});p.texture.name="UnrealBloomPass.v"+h,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),o=Math.round(o/2)}const a=gv;this.highPassUniforms=Qs.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ke({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new At(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Qs.clone(ko.uniforms),this.blendMaterial=new Ke({uniforms:this.copyUniforms,vertexShader:ko.vertexShader,fragmentShader:ko.fragmentShader,blending:qn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new dt,this._oldClearAlpha=1,this._basic=new He,this._fsQuad=new gc(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new At(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=tr.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=tr.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Ke({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new At(.5,.5)},direction:{value:new At(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}_getCompositeMaterial(t){return new Ke({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}tr.BlurDirectionX=new At(1,0);tr.BlurDirectionY=new At(0,1);const Co={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class _v extends ar{constructor(){super(),this.uniforms=Qs.clone(Co.uniforms),this.material=new _p({name:Co.name,uniforms:this.uniforms,vertexShader:Co.vertexShader,fragmentShader:Co.fragmentShader}),this._fsQuad=new gc(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},fe.getTransfer(this._outputColorSpace)===xe&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Tu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===bu?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===wu?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===tc?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ru?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Cu?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Au&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const ld=16,ti=[{name:"NOVA",title:"The star courier",color:3794669,accent:16765291,species:"fox"},{name:"BRAMBLE",title:"Garden guardian",color:10809177,accent:16750459,species:"frog"},{name:"VESPER",title:"Midnight mechanic",color:12684543,accent:16047871,species:"cat"},{name:"SUNNY",title:"Solar daydreamer",color:16758333,accent:16737406,species:"bird"},{name:"CORAL",title:"Reef renegade",color:16740763,accent:9043967,species:"fox"},{name:"CIRRUS",title:"Cloud navigator",color:15857663,accent:6659583,species:"cat"}],vv=[[-15,0,105],[55,3,100],[110,8,62],[118,13,-5],[83,17,-66],[20,11,-91],[-29,5,-68],[-32,3,-23],[-78,5,-14],[-116,10,-52],[-148,7,-23],[-145,1,40],[-94,-1,94]],Xs=new qr(vv.map(i=>new I(...i)),!0,"catmullrom",.45);Xs.arcLengthDivisions=1600;Xs.updateArcLengths();const $t=Xs.getLength();function cd(i){return(i%$t+$t)%$t}function Gi(i){const t=cd(i)/$t,e=Xs.getPointAt(t),n=Xs.getTangentAt(t).normalize(),s=new I(n.z,0,-n.x).normalize(),r=Xs.getTangentAt((t+.006)%1),o=n.x*r.z-n.z*r.x,a=jo.clamp(-o*2.4,-.19,.19);return{p:e,tangent:n,right:s,bank:a}}function ce(i,t=0){const e=Gi(i);return e.p.addScaledVector(e.right,t).add(new I(0,Math.sin(e.bank)*t,0))}const hd=[.16,.46,.76],ht={indigoDeep:1182252,indigo:2366034,indigoLit:3746676,plum:4858704,teal:3532760,tealDeep:1146758,tealPale:10484720,pink:16740264,pinkPale:16757974,gold:16762977,goldPale:16771496,coral:16747115,ivory:16643044,stone:2827088,stoneLit:4536952,moss:6545551,lime:10346602,wood:3875909,horizon:16756858,skyMid:13201567,skyZenith:1709125,seaDeep:1182259},Kt=ld/2,Ee=Math.PI*2,Qh=new I(.52,.17,-.84).normalize(),Ii=-16,Li=7,Tn=1.4,In=i=>new dt(i).multiplyScalar(Tn),Ui={goldPale:new dt(ht.goldPale),tealPale:new dt(ht.tealPale),pinkPale:new dt(ht.pinkPale),clear:new dt(16777215)};function Er(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function Po(i,t){const e=Math.sin(i*127.1+t*311.7)*43758.5453;return e-Math.floor(e)}const tu=new Xi,eu=new _n,$l=new I,Ar=new I,Yo=new Map;function Yi(i,t){let e=Yo.get(i);return e||(e=t(),Yo.set(i,e)),e}const rs=(i,t=12,e=9)=>Yi(`s${i.toFixed(3)}|${t}|${e}`,()=>new rr(i,t,e)),yn=(i,t,e)=>Yi(`b${i}|${t}|${e}`,()=>new xs(i,t,e)),En=(i,t,e,n=10)=>Yi(`c${i}|${t}|${e}|${n}`,()=>new sr(i,t,e,n,1,!1)),qa=(i,t,e=8)=>Yi(`k${i}|${t}|${e}`,()=>new Xr(i,t,e)),Ya=(i,t=0)=>Yi(`i${i}|${t}`,()=>new Yr(i,t)),$a=i=>Yi(`o${i}`,()=>new ta(i,0)),Ln=(i,t,e=8,n=40)=>Yi(`t${i}|${t}|${e}|${n}`,()=>new qi(i,t,e,n)),Ka=(i,t=12,e=6)=>Yi(`d${i}|${t}|${e}`,()=>new rr(i,t,e,0,Ee,0,Math.PI*.5));function Jt(i,t=0,e=0,n=0,s=0,r=0,o=0,a=1,l=a,c=a){const h=i.clone();return eu.set(s,r,o),tu.setFromEuler(eu),h.applyMatrix4(new he().compose($l.set(t,e,n),tu,Ar.set(a,l,c))),h}function ye(i){const t=[],e=[],n=[];for(const r of i){const o=r.index?r.toNonIndexed():r,a=o.getAttribute("position"),l=o.getAttribute("normal"),c=o.getAttribute("uv");for(let h=0;h<a.count;h++)t.push(a.getX(h),a.getY(h),a.getZ(h)),l?e.push(l.getX(h),l.getY(h),l.getZ(h)):e.push(0,1,0),c?n.push(c.getX(h),c.getY(h)):n.push(0,0);o!==r&&o.dispose()}const s=new Fe;return s.setAttribute("position",new ne(t,3)),s.setAttribute("normal",new ne(e,3)),s.setAttribute("uv",new ne(n,2)),s.computeBoundingSphere(),s}function pi(i,t,e=24,n=6){return new $r(new qr(i,!1,"catmullrom",.4),e,t,n,!1)}const Ni={p:new I,t:new I,cx:new I,n:new I,bank:0};function un(i){const t=Gi(i);return Ni.p.copy(t.p),Ni.t.copy(t.tangent),Ni.bank=t.bank,Ni.cx.set(t.right.x,Math.sin(t.bank),t.right.z),Ni.n.crossVectors(Ni.t,Ni.cx).normalize(),Ni}function an(i,t,e,n,s={}){const r=n.length,o=e+1,a=new Float32Array(o*r*3),l=new Float32Array(o*r*3),c=new Float32Array(o*r*2),h=s.uRange?s.uRange[0]:0,u=s.uRange?s.uRange[1]:1,p=s.lift??0,d=[],g=[];for(let f=0;f<r;f++){const w=n[Math.max(0,f-1)],T=n[Math.min(r-1,f+1)],M=T[0]-w[0],C=T[1]-w[1],b=Math.hypot(M,C)||1;d.push(M/b),g.push(C/b)}for(let f=0;f<o;f++){const w=i+(t-i)*(f/e),T=un(w);for(let M=0;M<r;M++){const C=n[M][0],b=n[M][1]+p,A=(f*r+M)*3;a[A]=T.p.x+T.cx.x*C+T.n.x*b,a[A+1]=T.p.y+T.cx.y*C+T.n.y*b,a[A+2]=T.p.z+T.cx.z*C+T.n.z*b,$l.set(T.cx.x*d[M]+T.n.x*g[M],T.cx.y*d[M]+T.n.y*g[M],T.cx.z*d[M]+T.n.z*g[M]),Ar.crossVectors(T.t,$l).normalize(),l[A]=Ar.x,l[A+1]=Ar.y,l[A+2]=Ar.z;const P=(f*r+M)*2;c[P]=h+(u-h)*(r>1?M/(r-1):0),c[P+1]=s.vPeriod?(w-i)/s.vPeriod:f/e}}const y=[];for(let f=0;f<o-1;f++)for(let w=0;w<r-1;w++){const T=f*r+w,M=(f+1)*r+w,C=f*r+w+1,b=(f+1)*r+w+1;y.push(T,M,C,M,b,C)}const m=new Fe;return m.setAttribute("position",new ne(a,3)),m.setAttribute("normal",new ne(l,3)),m.setAttribute("uv",new ne(c,2)),m.setIndex(y),m.computeBoundingSphere(),m}function Do(i,t,e=7,n=14){const s=[],r=[],o=[],a=[],l=[];for(let b=0;b<=e;b++){const A=[];for(let P=0;P<n;P++){const x=Po(b*3.3,P*1.7)-.5,S=Po(b*3.3+1,P*1.7+5)-.5,L=Po(b*3.3-1,P*1.7-5)-.5;A.push((x*2+S+L)/4)}l.push(A)}const c=b=>1+.1*Math.exp(-Math.pow((b-.24)/.09,2))+.14*Math.exp(-Math.pow((b-.55)/.12,2)),h=new dt(ht.stone),u=new dt(ht.stoneLit),p=new dt(ht.tealDeep),d=new dt;for(let b=0;b<=e;b++){const A=b/e,P=-t*Math.pow(A,1.15);for(let x=0;x<n;x++){const S=x/n*Ee,z=i*Math.pow(Math.max(0,1-A),.72)*c(A)*(1+.26*l[Math.round(A*e)][x])*(1+.12*Math.sin(4*S+A*6));s.push(Math.cos(S)*z,P,Math.sin(S)*z),r.push(Math.cos(S),.35,Math.sin(S)),o.push(x/n,A),d.copy(h).lerp(u,.5+.35*(1-A)).lerp(p,.16*(.5+.5*Math.sin(S*5+A*9))),a.push(d.r,d.g,d.b)}}const g=4,y=i*.075,m=(e+1)*n,f=new dt(ht.moss),w=new dt(ht.gold),T=new dt(ht.teal);for(let b=0;b<=g;b++){const A=b/g;for(let P=0;P<n;P++){const x=P/n*Ee,S=1+.05*Math.exp(-Math.pow((A-.9)/.07,2)),L=i*A*S*(1+.05*(Po(b*7.7,P*2.1)-.5)),z=y*(1-A*A)*(1-.35*Math.exp(-Math.pow((A-.9)/.1,2)));s.push(Math.cos(x)*L,z,Math.sin(x)*L),r.push(0,1,0),o.push(P/n,A),d.copy(f).lerp(w,A*.45).lerp(T,.25*Math.sin(x*3+1.2)+.25),a.push(d.r,d.g,d.b)}}const M=[];for(let b=0;b<e;b++)for(let A=0;A<n;A++){const P=(A+1)%n,x=b*n+A,S=b*n+P,L=(b+1)*n+A,z=(b+1)*n+P;M.push(x,L,S,S,L,z)}for(let b=0;b<g;b++)for(let A=0;A<n;A++){const P=(A+1)%n,x=m+b*n+A,S=m+b*n+P,L=m+(b+1)*n+A,z=m+(b+1)*n+P;M.push(x,S,L,S,z,L)}const C=new Fe;return C.setAttribute("position",new ne(s,3)),C.setAttribute("normal",new ne(r,3)),C.setAttribute("uv",new ne(o,2)),C.setAttribute("color",new ne(a,3)),C.setIndex(M),C.computeVertexNormals(),C.computeBoundingSphere(),C}function Bs(i,t,e){const n=document.createElement("canvas");n.width=i,n.height=t;const s=n.getContext("2d");e(s,i,t);const r=new ep(n);return r.colorSpace=gn,r.anisotropy=8,r.wrapS=Js,r.wrapT=Js,r}const Ge=i=>"#"+i.toString(16).padStart(6,"0");function xv(i){const t=Er(669664),e=(_,D)=>_+(D-_)*t(),n=new Ie;n.name="aether-atoll",i.add(n);const s=new Set,r=new Set,o=new Set,a=_=>(s.add(_),_),l=_=>(r.add(_),_),c=Bs(512,512,(_,D,N)=>{_.fillStyle=Ge(ht.indigo),_.fillRect(0,0,D,N);const H=Er(7);for(let ot=0;ot<2600;ot++){const vt=H()*D,wt=H()*N,Yt=.6+H()*2.4,Re=H();_.fillStyle=Re<.45?"rgba(120,110,190,0.20)":Re<.7?"rgba(60,50,120,0.30)":Re<.86?"rgba(53,231,216,0.13)":"rgba(255,200,97,0.12)",_.beginPath(),_.arc(vt,wt,Yt,0,Ee),_.fill()}for(let ot=0;ot<40;ot++){const vt=H()*D,wt=H()*N;_.strokeStyle="rgba(20,12,48,0.5)",_.lineWidth=.7+H()*1.4,_.beginPath(),_.moveTo(vt,wt),_.lineTo(vt+(H()-.5)*90,wt+(H()-.5)*90),_.stroke()}const W=_.createLinearGradient(0,0,D,0);W.addColorStop(0,"rgba(255,111,168,0.10)"),W.addColorStop(.5,"rgba(0,0,0,0)"),W.addColorStop(1,"rgba(53,231,216,0.10)"),_.fillStyle=W,_.fillRect(0,0,D,N)});o.add(c);const h=l(new jt({map:c,roughness:.92,metalness:.05})),u=l(new jt({color:ht.goldPale,emissive:ht.gold,emissiveIntensity:.85,roughness:.5})),p=l(new jt({color:ht.tealPale,emissive:ht.teal,emissiveIntensity:.7,roughness:.5})),d=l(new jt({color:ht.pinkPale,emissive:ht.pink,emissiveIntensity:.35,roughness:.6})),g=l(new jt({vertexColors:!0,roughness:.55,metalness:.05,emissive:ht.tealDeep,emissiveIntensity:.25})),y=l(new jt({color:ht.stone,roughness:.78,metalness:.22,flatShading:!0})),m=l(new He({color:In(ht.tealPale),toneMapped:!1})),f=l(new He({color:In(ht.goldPale),toneMapped:!1})),w=l(new He({color:In(ht.pinkPale),toneMapped:!1,side:Le})),T=l(new He({color:In(ht.pinkPale),toneMapped:!1,side:Le})),M=l(new jt({color:ht.tealDeep,roughness:.42,metalness:.45,side:Le})),C=l(new jt({color:ht.tealPale,emissive:new dt(ht.teal).multiplyScalar(Tn),emissiveIntensity:.65,roughness:.35,side:Le})),b=l(new jt({vertexColors:!0,roughness:.95,flatShading:!0})),A=l(new jt({color:ht.stone,roughness:.95,flatShading:!0})),P=l(new jt({color:ht.wood,roughness:.85})),x=l(new jt({roughness:.8,flatShading:!0,emissive:ht.tealDeep,emissiveIntensity:.2})),S=l(new jt({color:ht.ivory,roughness:.7})),L=Bs(128,128,(_,D,N)=>{const H=_.createRadialGradient(D*.5,N*.5,4,D*.5,N*.5,D*.55);H.addColorStop(0,Ge(ht.pinkPale)),H.addColorStop(.6,Ge(ht.coral)),H.addColorStop(1,Ge(ht.plum)),_.fillStyle=H,_.fillRect(0,0,D,N);const W=Er(21);for(let ot=0;ot<26;ot++)_.fillStyle="rgba(255,233,168,0.92)",_.beginPath(),_.arc(W()*D,W()*N,2+W()*6,0,Ee),_.fill()});o.add(L);const z=l(new jt({map:L,emissive:new dt(ht.gold).multiplyScalar(Tn),emissiveMap:L,emissiveIntensity:.75,roughness:.6,flatShading:!0})),X=l(new jt({color:ht.tealPale,emissive:new dt(ht.teal).multiplyScalar(Tn),emissiveIntensity:1.25,roughness:.15,metalness:.1,transparent:!0,opacity:.78,side:Le,flatShading:!0})),j=l(new jt({color:ht.pinkPale,emissive:new dt(ht.pink).multiplyScalar(Tn),emissiveIntensity:1.2,roughness:.15,metalness:.1,transparent:!0,opacity:.74,side:Le,flatShading:!0})),$=Bs(256,64,(_,D,N)=>{const ot=D/16,vt=N/4,wt=Er(5);for(let Yt=0;Yt<16;Yt++)for(let Re=0;Re<4;Re++){const De=(Yt+Re)%2===0;_.fillStyle=Ge(De?ht.ivory:ht.indigo),De&&wt()>.6&&(_.fillStyle=Ge(ht.goldPale)),_.fillRect(Yt*ot,Re*vt,ot+1,vt+1)}_.strokeStyle=Ge(ht.gold),_.lineWidth=4,_.strokeRect(2,2,D-4,N-4)});o.add($);const J=l(new jt({map:$,roughness:.6,emissive:ht.gold,emissiveIntensity:.22})),st=Bs(1024,192,(_,D,N)=>{_.fillStyle=Ge(ht.indigoDeep),_.fillRect(0,0,D,N);for(let H=0;H<3;H++)_.fillStyle=[Ge(ht.teal),Ge(ht.pink),Ge(ht.gold)][H],_.fillRect(0,N-14-H*7,D,5),_.fillRect(0,H*7+6,D,5);_.textAlign="center",_.textBaseline="middle",_.font='700 84px "DejaVu Sans", system-ui, sans-serif',_.fillStyle=Ge(ht.goldPale),_.fillText("LUMEN RALLY",D/2,N*.42),_.font='700 40px "DejaVu Sans", system-ui, sans-serif',_.fillStyle=Ge(ht.tealPale),_.fillText("AETHER ATOLL GRAND PRIX",D/2,N*.79)});o.add(st);const q=l(new jt({map:st,side:Le,roughness:.75,emissive:ht.indigo,emissiveIntensity:.4})),mt=Bs(128,256,(_,D,N)=>{_.clearRect(0,0,D,N);const H=[Ge(ht.gold),Ge(ht.goldPale),Ge(ht.teal)];for(let ot=0;ot<3;ot++){const vt=ot/3*N+8;_.strokeStyle=H[ot],_.lineWidth=16,_.lineJoin="round",_.lineCap="round",_.shadowColor=Ge(ot===2?ht.teal:ht.gold),_.shadowBlur=22,_.beginPath(),_.moveTo(14,vt+26),_.lineTo(D/2,vt+6),_.lineTo(D-14,vt+26),_.stroke()}const W=_.createLinearGradient(0,0,D,0);W.addColorStop(0,"rgba(53,231,216,0.45)"),W.addColorStop(.5,"rgba(255,255,255,0)"),W.addColorStop(1,"rgba(53,231,216,0.45)"),_.fillStyle=W,_.fillRect(0,0,D,N)});o.add(mt);const Et=Bs(64,256,(_,D,N)=>{_.clearRect(0,0,D,N);const H=Er(88);for(let W=0;W<60;W++){const ot=H()*D,vt=_.createLinearGradient(0,0,0,N);vt.addColorStop(0,"rgba(255,255,255,0.55)"),vt.addColorStop(.5,"rgba(159,251,240,0.35)"),vt.addColorStop(1,"rgba(255,255,255,0)"),_.fillStyle=vt,_.fillRect(ot,H()*N*.4,2+H()*5,N*(.4+H()*.6))}});o.add(Et);const Ot=l(new He({map:Et,color:In(12189684),transparent:!0,depthWrite:!1,side:Le,blending:qn,toneMapped:!1})),Zt=l(new jt({color:ht.indigoLit,roughness:.46,metalness:.55})),me=l(new jt({color:ht.indigoDeep,roughness:.6,metalness:.4})),Te=l(new jt({color:ht.indigoLit,emissive:new dt(ht.teal).multiplyScalar(Tn),emissiveIntensity:.3,transparent:!0,opacity:.25,side:Le,depthWrite:!1,roughness:.4,metalness:.2})),ue=l(new jt({color:ht.plum,emissive:new dt(ht.pink).multiplyScalar(Tn),emissiveIntensity:.5,roughness:.4,metalness:.35})),Z=l(new He({color:In(ht.goldPale),toneMapped:!1})),it=l(new He({color:In(ht.goldPale),toneMapped:!1})),Rt=l(new jt({roughness:1,emissive:ht.pink,emissiveIntensity:.3,flatShading:!0})),Ht=l(new He({color:In(ht.goldPale),toneMapped:!1})),Nt=l(new He({color:In(ht.tealPale),toneMapped:!1})),se=l(new He({color:In(ht.pinkPale),toneMapped:!1})),ze=l(new He({color:In(ht.tealPale),transparent:!0,opacity:.5,blending:qn,depthWrite:!1,toneMapped:!1})),U=l(new jt({color:ht.tealPale,emissive:new dt(ht.teal).multiplyScalar(Tn),emissiveIntensity:1.6,roughness:.4})),we=l(new Ke({side:fn,depthWrite:!1,depthTest:!1,fog:!1,uniforms:{uSun:{value:Qh.clone()},uHorizon:{value:new dt(ht.horizon)},uMid:{value:new dt(ht.skyMid)},uZenith:{value:new dt(ht.skyZenith)},uDeep:{value:new dt(ht.indigoDeep)}},vertexShader:`
      varying vec3 vDir;
      void main(){
        vec2 ndc = position.xy;
        float tanY = 1.0 / projectionMatrix[1][1];
        float tanX = 1.0 / projectionMatrix[0][0];
        vec3 d = viewMatrix[0].xyz * (ndc.x * tanX) + viewMatrix[1].xyz * (ndc.y * tanY) - viewMatrix[2].xyz;
        vDir = normalize(d);
        gl_Position = vec4(ndc, 1.0, 1.0);
      }`,fragmentShader:`
      uniform vec3 uSun, uHorizon, uMid, uZenith, uDeep;
      varying vec3 vDir;
      float h21(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float noise(vec2 p){
        vec2 i = floor(p), f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        return mix(mix(h21(i), h21(i + vec2(1.0, 0.0)), f.x),
                   mix(h21(i + vec2(0.0, 1.0)), h21(i + vec2(1.0, 1.0)), f.x), f.y);
      }
      float fbm(vec2 p){
        float v = 0.0, a = 0.5;
        for (int i = 0; i < 4; i++){ v += a * noise(p); p *= 2.03; a *= 0.5; }
        return v;
      }
      void main(){
        vec3 d = normalize(vDir);
        float el = d.y;
        vec3 col = mix(uHorizon, uMid, smoothstep(-0.01, 0.22, el));
        col = mix(col, uZenith, smoothstep(0.16, 0.72, el));
        col = mix(uDeep, col, smoothstep(-0.32, 0.015, el));
        float sd = max(dot(d, normalize(uSun)), 0.0);
        col += vec3(1.0, 0.72, 0.42) * pow(sd, 220.0) * 5.0;
        col += vec3(1.0, 0.62, 0.40) * pow(sd, 8.0) * 0.35;
        col += uHorizon * pow(sd, 2.0) * 0.22;
        float az = atan(d.z, d.x);
        vec2 cp = vec2(az * 2.6 + 1.7, el * 9.0);
        float cl = fbm(cp) * 0.72 + fbm(cp * 2.7) * 0.28;
        float band = smoothstep(0.5, 0.86, cl) * smoothstep(-0.03, 0.30, el) * (1.0 - smoothstep(0.30, 0.62, el));
        col = mix(col, mix(uHorizon, vec3(1.0, 0.86, 0.72), 0.35), band * 0.62);
        float streak = smoothstep(0.62, 0.95, fbm(vec2(az * 4.0, el * 22.0 + 3.0))) * smoothstep(0.28, 0.6, el);
        col = mix(col, vec3(1.0, 0.55, 0.66), streak * 0.28);
        gl_FragColor = vec4(col, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`})),Xt=new Mt(a(new Fn(2,2)),we);Xt.frustumCulled=!1,Xt.renderOrder=-1e3,n.add(Xt);const Gt=l(new Ke({fog:!0,uniforms:Qs.merge([xt.fog,{uTime:{value:0},uSun:{value:Qh.clone()},uDeep:{value:new dt(ht.seaDeep)},uMid:{value:new dt(ht.tealDeep)},uCrest:{value:new dt(ht.teal)},uWarm:{value:new dt(ht.horizon)},uAtoll:{value:new I(Ii,0,Li)}}]),vertexShader:`
      uniform float uTime;
      varying vec3 vWorld;
      varying vec3 vNrm;
      varying float vH;
      #include <fog_pars_vertex>
      vec3 waveOffset(vec2 p, out vec3 nrm){
        vec3 d = vec3(0.0);
        nrm = vec3(0.0);
        float amp = 1.65, k = 0.055, spd = 0.85;
        vec2 dir = normalize(vec2(0.85, 0.53));
        for (int i = 0; i < 4; i++){
          vec2 dd = vec2(dir.x * cos(float(i) * 0.9) - dir.y * sin(float(i) * 0.9),
                        dir.x * sin(float(i) * 0.9) + dir.y * cos(float(i) * 0.9));
          float ph = dot(dd, p) * k + uTime * spd;
          float sn = sin(ph), cs = cos(ph);
          d += vec3(dd.x * cs * amp * k, sn * amp, dd.y * cs * amp * k);
          nrm += vec3(-dd.x * sn * amp * k, 0.0, -dd.y * sn * amp * k);
          amp *= 0.62; k *= 2.05; spd *= 1.22;
        }
        return d;
      }
      void main(){
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vec3 nrm;
        vec3 off = waveOffset(wp.xz, nrm);
        wp.xyz += off;
        vWorld = wp.xyz;
        vH = off.y;
        vNrm = normalize(vec3(nrm.x, 1.0, nrm.z));
        vec4 mvPosition = viewMatrix * wp;
        gl_Position = projectionMatrix * mvPosition;
        #include <fog_vertex>
      }`,fragmentShader:`
      uniform float uTime;
      uniform vec3 uSun, uDeep, uMid, uCrest, uWarm, uAtoll;
      varying vec3 vWorld;
      varying vec3 vNrm;
      varying float vH;
      #include <fog_pars_fragment>
      float h21(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      void main(){
        vec3 N = normalize(vNrm);
        vec3 V = normalize(cameraPosition - vWorld);
        vec3 L = normalize(uSun);
        float fres = pow(1.0 - clamp(dot(N, V), 0.0, 1.0), 3.0);
        float dist = length(vWorld.xz - uAtoll.xz);
        float atollGlow = exp(-dist / 190.0);
        vec3 col = mix(uDeep, uMid, clamp(0.35 + vH * 0.16, 0.0, 1.0));
        col = mix(col, uCrest, pow(clamp(vH * 0.5 + 0.35, 0.0, 1.0), 3.0) * 0.5);
        col = mix(col, uWarm * (0.45 + atollGlow * 0.9), fres * 0.75);
        col += uWarm * atollGlow * 0.35 * (0.6 + 0.4 * sin(uTime * 0.7 + vWorld.x * 0.02));
        vec3 Hv = normalize(L + V);
        col += vec3(1.0, 0.86, 0.66) * pow(max(dot(N, Hv), 0.0), 220.0) * 3.4;
        float sparkle = step(0.987, h21(floor(vWorld.xz * 3.4) + floor(uTime * 5.0)));
        col += vec3(1.0, 0.9, 0.75) * sparkle * 0.5 * (0.4 + fres);
        float foam = smoothstep(0.72, 1.05, vH + 0.35 * h21(floor(vWorld.xz * 1.7)));
        col = mix(col, vec3(0.86, 1.0, 0.98), foam * 0.35);
        float far = smoothstep(320.0, 900.0, length(vWorld.xz - cameraPosition.xz));
        col = mix(col, uWarm * 0.85, far * 0.85);
        gl_FragColor = vec4(col, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
        #include <fog_fragment>
      }`})),Ct=a(new Fn(2600,2600,132,132));Ct.rotateX(-Math.PI/2);const _e=new Mt(Ct,Gt);_e.position.set(Ii,-58,Li);const Dt=_=>Math.round(_/130)*130;_e.onBeforeRender=(_,D,N)=>{_e.position.set(Dt(N.position.x),-58,Dt(N.position.z))},n.add(_e);const Wt=Math.round($t/2.4),re=new Ie;re.name="circuit",n.add(re);const Pe=new Mt(a(an(0,$t,Wt,[[-Kt,0],[-Kt*.4,0],[0,0],[Kt*.4,0],[Kt,0]],{vPeriod:14})),h);Pe.receiveShadow=!0,re.add(Pe);const R=new Mt(a(an(0,$t,Wt,[[-Kt-1.55,.24],[-Kt-1,-.42],[-Kt+2,-2],[0,-2.34],[Kt-2,-2],[Kt+1,-.42],[Kt+1.55,.24]])),y);R.receiveShadow=!0,R.castShadow=!0,re.add(R);const v=new Mt(a(an(0,$t,Wt,[[-.55,-2.32],[0,-2.44],[.55,-2.32]])),m);re.add(v);const k=new dt(ht.coral),K=new dt(ht.ivory);for(const _ of[-1,1]){const D=_<0?[[-Kt-1.55,.26],[-Kt-.6,.2],[-Kt,.06]]:[[Kt,.06],[Kt+.6,.2],[Kt+1.55,.26]],N=an(0,$t,Wt,D,{vPeriod:8.4}),H=N.getAttribute("position").count,W=new Float32Array(H*3),ot=N.getAttribute("uv"),vt=new dt;for(let Yt=0;Yt<H;Yt++)vt.copy(Math.floor(ot.getY(Yt)*8.4/4.2)%2===0?k:K),W[Yt*3]=vt.r,W[Yt*3+1]=vt.g,W[Yt*3+2]=vt.b;N.setAttribute("color",new ne(W,3));const wt=new Mt(a(N),g);wt.receiveShadow=!0,re.add(wt),re.add(new Mt(a(an(0,$t,Wt,[[_*(Kt+1.55),.27],[_*(Kt+1.63),.36]])),C))}const et=(_,D,N)=>new Mt(a(an(0,$t,Math.round($t/3.2),[[_-D/2,.012],[_+D/2,.012]])),N);re.add(et(-Kt+.55,.4,u),et(Kt-.55,.4,u)),re.add(et(-4.1,.26,d),et(4.1,.26,d));const Y=[];for(let _=0;_<$t;_+=9)Y.push(an(_,_+4.2,2,[[-.3,.012],[.3,.012]]));const Ft=new Mt(a(ye(Y)),p);Y.forEach(_=>_.dispose()),re.add(Ft);const ft=[],It=[];for(const _ of[-1,1])ft.push(an(0,$t,Wt,[[_*(Kt+1.8),.3],[_*(Kt+1.8),1.3]],{vPeriod:6})),It.push(an(0,$t,Wt,[[_*(Kt+1.68),1.28],[_*(Kt+1.8),1.52],[_*(Kt+1.92),1.28]],{vPeriod:6}));const Lt=new Mt(a(ye(ft)),M);Lt.castShadow=!0;const ct=new Mt(a(ye(It)),C);re.add(Lt,ct),ft.forEach(_=>_.dispose()),It.forEach(_=>_.dispose());const gt=new Map,St=(_,D,N,H=0)=>{let W=gt.get(_);return W||(W={geo:D,mat:N,list:[],cols:[],shadow:H},gt.set(_,W)),W},ut=(_,D,N,H=0,W=0,ot=0,vt=1,wt=vt,Yt=vt)=>new he().compose(new I(_,D,N),new Xi().setFromEuler(new _n(H,W,ot)),new I(vt,wt,Yt)),nt=(_,D,N=null)=>{const H=gt.get(_);return H.list.push(D),H.cols.push(N),H.list.length-1},Vt=245,F=335,rt=686,pt=786,Tt=380,at=_=>(_<Vt-9||_>F+9)&&(_<rt-10||_>pt+10)&&Math.abs(_-Tt)>13;St("post",a(yn(.26,1.5,.26)),me,1),St("beacon",a(rs(.17,8,6)),it),St("pod",a(En(.55,.3,.9,8)),Zt,1),St("podGlow",a(Ln(.62,.12,6,16)),m),St("lantern",a(rs(.34,10,8)),Z),St("lanternWire",a(En(.035,.035,1.4,5)),me);for(let _=0;_<$t;_+=6){const D=un(_),N=Math.atan2(D.t.x,D.t.z);for(const H of[-1,1]){const W=ce(_,H*(Kt+1.8));nt("post",ut(W.x,W.y+.75,W.z,0,N,H*.03))}}for(let _=0;_<$t;_+=21){const D=un(_);for(const N of[-1,1]){const H=ce(_,N*(Kt+1.8));nt("beacon",ut(H.x+D.n.x*1.62,H.y+D.n.y*1.62,H.z+D.n.z*1.62))}}for(let _=0;_<$t;_+=34){if(!at(_))continue;const D=un(_),N=Math.atan2(D.t.x,D.t.z);for(const H of[-1,1]){const W=ce(_,H*3.6);nt("pod",ut(W.x-D.n.x*3.05,W.y-3.05,W.z-D.n.z*3.05,0,N,0)),nt("podGlow",ut(W.x-D.n.x*3.5,W.y-3.5,W.z-D.n.z*3.5,Math.PI/2,0,0))}}for(let _=0;_<$t;_+=26){const D=Math.floor(_/26)%2===0?-1:1,N=un(_),H=ce(_,D*7);nt("lanternWire",ut(H.x-N.n.x*1.9,H.y-1.9,H.z-N.n.z*1.9)),nt("lantern",ut(H.x-N.n.x*3,H.y-3,H.z-N.n.z*3))}const Q=[],bt=[];for(const _ of hd){const D=_*$t,N=mt.clone();N.needsUpdate=!0,N.repeat.set(1,3.2),N.wrapS=zi,N.wrapT=Js,o.add(N);const H=l(new He({map:N,color:In(16777215),transparent:!0,depthWrite:!1,blending:qn,toneMapped:!1,side:Le})),W=new Mt(a(an(D-8,D+8,12,[[-6.6,.035],[0,.05],[6.6,.035]],{vPeriod:16})),H);W.renderOrder=4,re.add(W),Q.push({mat:H,tex:N}),re.add(new Mt(a(an(D-8,D+8,12,[[-7.45,.03],[-7.05,.14]])),U)),re.add(new Mt(a(an(D-8,D+8,12,[[7.05,.14],[7.45,.03]])),U));for(const ot of[-1,1])for(const vt of[-8.6,8.6]){const wt=ce(D+vt,ot*(Kt+1));bt.push(Jt(qa(.5,2.4,6),wt.x,wt.y+1.2,wt.z)),bt.push(Jt(En(.12,.12,.4,6),wt.x,wt.y+2.6,wt.z))}}const qt=new Mt(a(ye(bt)),f);bt.forEach(_=>_.dispose()),re.add(qt);const de=new Ie;de.name="gantry";const le=un(0),Xe=Math.atan2(le.t.x,le.t.z),Ze=le.cx.x,si=le.cx.z,Ce=ce(0,0),je=Ce.y,Pn=(Kt+3.6)*2+1.6,xn=[],ri=[];for(const _ of[-1,1]){const D=Ce.x+Ze*_*(Kt+3.6),N=Ce.z+si*_*(Kt+3.6);xn.push(Jt(En(.85,1.15,10.4,4),D,je+4.6,N)),xn.push(Jt(En(1.5,1.9,1,8),D,je-.2,N));for(let H=0;H<5;H++)xn.push(Jt(yn(.34,.5,.34),D-Ze*_*.9,je+1.6+H*1.9,N-si*_*.9));ri.push(Jt(yn(.16,8.6,.16),D-Ze*_*.95,je+4.8,N-si*_*.95)),ri.push(Jt(Ln(1.5,.14,6,18),D,je-.1,N,Math.PI/2,0,0))}xn.push(Jt(yn(Pn,.8,.8),Ce.x,je+9.3,Ce.z,0,Xe,0)),xn.push(Jt(yn(Pn,.55,.55),Ce.x,je+8.25,Ce.z,0,Xe,0));for(let _=0;_<=14;_++){const D=-Pn/2+Pn/14*_;if(xn.push(Jt(yn(.22,1.05,.22),Ce.x+Ze*D,je+9.15,Ce.z+si*D,0,Xe,0)),_<14){const N=D+Pn/28,H=Ce.x+Ze*N,W=Ce.z+si*N;xn.push(Jt(yn(.14,2,.14),H,je+8.78,W,0,Xe,.72)),xn.push(Jt(yn(.14,2,.14),H,je+8.78,W,0,Xe,-.72))}}const hr=new Mt(a(ye(xn)),Zt);hr.castShadow=!0;const Ms=new Mt(a(ye(ri)),m);xn.forEach(_=>_.dispose()),ri.forEach(_=>_.dispose()),de.add(hr,Ms);const Ti=new Mt(a(new Fn(Pn*.78,2.4,12,1)),q);Ti.position.set(Ce.x,je+9.2,Ce.z),Ti.rotation.y=Xe,de.add(Ti);const ur=Ti.geometry.getAttribute("position").clone(),dr=new Mt(a(new Fn(Pn*.74,.3)),T);dr.position.set(Ce.x,je+7.6,Ce.z),dr.rotation.y=Xe,de.add(dr);const Ss=a(new Fe);{const _=new Float32Array([0,0,0,1.6,0,0,0,1.05,0,1.6,0,0,0,1.05,0,1.6,1.05,0]);Ss.setAttribute("position",new $e(_,3)),Ss.computeVertexNormals(),Ss.setAttribute("uv",new ne([0,0,1,0,0,1,1,0,0,1,1,1],2))}const Jr=[];for(let _=0;_<7;_++){const D=-Pn*.44+Pn*.88/6*_,N=new Mt(Ss,_%2?m:f);N.position.set(Ce.x+Ze*D,je+9.72,Ce.z+si*D),N.rotation.y=Xe,de.add(N),Jr.push({mesh:N,phase:_*.7})}re.add(new Mt(a(an(-1.9,1.9,6,[[-Kt,.016],[0,.016],[Kt,.016]],{vPeriod:3.8})),J));for(const _ of[-1,1])re.add(new Mt(a(an(-2.4,2.4,6,[[_*(Kt-.1),.02],[_*(Kt+.4),.02]])),f));n.add(de);const Zr=13.4,jr=13.2,sa=_=>{const D=[];for(let N=0;N<=_;N++){const H=-1+2*N/_;D.push([Zr*H,jr*Math.pow(Math.max(0,1-H*H),.72)])}return D},E=new Ie;E.name="tunnel";const O=new Mt(a(an(Vt,F,44,sa(20),{vPeriod:18})),Te);O.renderOrder=3,E.add(O);const G=[],V=[];for(let _=Vt;_<=F+.01;_+=9){const D=un(_),N=[];for(let H=0;H<=16;H++){const W=-1+2*H/16,ot=jr*Math.pow(Math.max(0,1-W*W),.72),vt=ce(_,Zr*W);N.push(new I(vt.x+D.n.x*ot,vt.y+D.n.y*ot,vt.z+D.n.z*ot))}G.push(pi(N,.3,30,6)),(_<Vt+.1||_>F-.1)&&V.push(pi(N,.62,30,8))}const B=new Mt(a(ye(G)),ue);B.castShadow=!0,G.forEach(_=>_.dispose());const lt=new Mt(a(ye(V)),T);V.forEach(_=>_.dispose()),E.add(B,lt);for(const _ of[-1,1])E.add(new Mt(a(an(Vt,F,40,[[_*(Kt+1.2),1.6],[_*(Kt+1.35),2.4]],{vPeriod:10})),f));const _t=[];for(let _=Vt+6;_<F;_+=14){const D=un(_),N=(_-Vt)/14%2===0?-1:1,H=ce(_,N*9.6),W=6.2+1.2*Math.sin(_);_t.push(Jt(rs(.46,10,8),H.x+D.n.x*W,H.y+D.n.y*W,H.z+D.n.z*W)),_t.push(Jt(En(.05,.05,2.4,5),H.x+D.n.x*(W+1.3),H.y+D.n.y*(W+1.3),H.z+D.n.z*(W+1.3)))}const Pt=new Mt(a(ye(_t)),Z);_t.forEach(_=>_.dispose()),E.add(Pt),n.add(E);const yt=new Ie;yt.name="bridge";const zt=[],kt=[],Ut=[],te=[];for(let _=rt;_<pt;_+=4){const D=_+2,N=un(D),H=Math.atan2(N.t.x,N.t.z);for(const ot of[-1,1]){const vt=ce(D,ot*(Kt+2.7));zt.push(Jt(yn(.95,.85,4.4),vt.x,vt.y+.4,vt.z,0,H,0))}const W=ce(D,0);kt.push(Jt(yn(Kt*2+5.4,.6,.55),W.x,W.y-2.9,W.z,0,H,0));for(const ot of[-1,1]){const vt=ce(D,ot*(Kt+1.9));kt.push(Jt(yn(.5,1.5,.5),vt.x,vt.y-2.2,vt.z,0,H,0))}}const ge=[rt+12,rt+35,rt+50,pt-35,pt-12],ve=[];for(const _ of ge){const D=un(_),N=[];for(let H=0;H<=14;H++){const W=-1+2*H/14,ot=11.2*Math.pow(Math.max(0,1-W*W),.62),vt=ce(_,12.6*W);N.push(new I(vt.x+D.n.x*ot,vt.y+D.n.y*ot,vt.z+D.n.z*ot))}ve.push(N),Ut.push(pi(N,.42,28,6)),te.push(pi(N,.14,28,5))}for(let _=0;_<ve.length-1;_++){for(const D of[2,5,7,9,12])Ut.push(pi([ve[_][D],ve[_+1][D]],.16,6,4));for(let D=0;D<3;D++)Ut.push(pi([ve[_][3+D*4],ve[_+1][7+D]],.12,4,4))}for(const _ of ge){const D=un(_);for(const N of[-.62,.62]){const H=11.2*Math.pow(Math.max(0,1-N*N),.62),W=ce(_,12.6*N),ot=ce(_,12.6*N*.55);Ut.push(pi([new I(W.x+D.n.x*H,W.y+D.n.y*H,W.z+D.n.z*H),new I(ot.x,ot.y+.9,ot.z)],.13,3,4))}}const Me=new Mt(a(ye([...zt,...kt,...Ut])),Zt);Me.castShadow=!0,yt.add(Me),yt.add(new Mt(a(ye(te)),m)),zt.forEach(_=>_.dispose()),kt.forEach(_=>_.dispose()),Ut.forEach(_=>_.dispose()),te.forEach(_=>_.dispose());const pe=[],Bt=[],Se=[],oe=[];for(const _ of[rt+18,rt+50,pt-16]){const D=un(_),N=ce(_,0),H=-46,W=new I(N.x+D.cx.x*1.5,H,N.z+D.cx.z*1.5);for(const ot of[-1,1])for(const vt of[-1,1]){const wt=new I(N.x+D.cx.x*ot*7.4+D.t.x*vt*2,N.y-2.9,N.z+D.cx.z*ot*7.4+D.t.z*vt*2),Yt=wt.clone().lerp(W,.5);Yt.y=wt.y-(wt.y-H)*.42,pe.push(pi([wt,Yt,W],.62,10,6))}for(const ot of[-6,-18,-30]){const vt=(N.y-ot)/(N.y-H),wt=new I(N.x+D.cx.x*7,N.y+ot,N.z+D.cx.z*7).lerp(W,vt*.8),Yt=new I(N.x-D.cx.x*7,N.y+ot,N.z-D.cx.z*7).lerp(W,vt*.8);wt.y=Yt.y=N.y+ot,pe.push(pi([wt,Yt],.24,6,5))}Bt.push(Jt(Ln(7.2,.22,6,26),N.x,N.y-3.2,N.z,0,Math.atan2(D.cx.x,D.cx.z),0)),Bt.push(Jt(Ln(2.4,.3,6,22),W.x,H+.6,W.z,Math.PI/2,0,0)),Se.push(Jt(qa(9.5,16,7),W.x,H-7.4,W.z)),Se.push(Jt(qa(15,8,8),W.x,H-3,W.z)),oe.push(Jt(Ln(11.5,1.5,6,26),W.x,H+.35,W.z,Math.PI/2,0,0))}const nn=new Mt(a(ye(pe)),me);nn.castShadow=!0;const oi=new Mt(a(ye(Se)),A);oi.castShadow=!0;const sn=new Mt(a(ye(oe)),ze);sn.renderOrder=2,pe.forEach(_=>_.dispose()),Bt.forEach(_=>_.dispose()),Se.forEach(_=>_.dispose()),oe.forEach(_=>_.dispose()),yt.add(nn,new Mt(a(ye(Bt)),f),oi,sn),Bt.length=0,n.add(yt);const ai=new Ie;ai.name="atoll";const Ae=[];for(let _=rt-24;_<pt+24;_+=8)Ae.push(ce(_,0));const pn=(_,D)=>{for(const N of Ae)if(Math.hypot(N.x-_,N.z-D)<64)return!0;return!1},mn=(_,D)=>{let N=1/0;for(let H=0;H<$t;H+=5){const W=ce(H,0),ot=Math.hypot(W.x-_,W.z-D);ot<N&&(N=ot)}return N},Qe=(_,D,N)=>{let H=1/0;for(let W=0;W<$t;W+=5){const ot=ce(W,0);Math.hypot(ot.x-_,ot.z-D)<N&&(H=Math.min(H,ot.y))}return H},qe=[],li=[],Bn=(_,D,N,H,W)=>{if(pn(_,D))return null;const ot=Qe(_,D,N+10),vt=Math.min(ot===1/0?W:Math.min(ot-H,W),W),wt=-48-e(0,14),Yt=Do(N,vt-wt,7,16);qe.push(Jt(Yt,_,vt,D,0,e(0,Ee),0)),Yt.dispose();const Re={x:_,z:D,r:N,top:vt,dome:N*.075};return li.push(Re),Re};for(let _=8;_<$t;_+=26){const D=un(_),N=ce(_,0),H=e(-46,46);Bn(N.x+D.cx.x*H+e(-12,12),N.z+D.cx.z*H+e(-12,12),e(38,68),e(9,17),6)}for(let _=0;_<12;_++){const D=_/12*Ee+e(-.2,.2),N=e(155,220);Bn(Ii+Math.cos(D)*N,Li+Math.sin(D)*N,e(30,62),e(10,22),e(8,26))}const fr=Bn(Ii+Math.cos(4.6)*130,Li+Math.sin(4.6)*130,62,14,12)??li[li.length-1],ra=new Mt(a(ye(qe)),b);ra.castShadow=!0,ra.receiveShadow=!0,qe.forEach(_=>_.dispose()),ai.add(ra),n.add(ai);const Qr=[],oa=[],aa=[],la=[],bc=[],wc=[],Ac=[],Rc=[],Cc=[];Qr.push(Jt(En(.24,.38,3.2,7),0,1.6,0)),Qr.push(Jt(En(.15,.24,3,7),.16,4.5,.1,0,0,-.07)),Qr.push(Jt(En(.07,.15,2.4,6),.42,7,.2,0,0,-.13));for(let _=0;_<5;_++){const D=_/5*Ee,N=1.15+_%2*.55,H=8.2+_%3*.85;oa.push(Jt(Ya(1.5,1),Math.cos(D)*N+.5,H,Math.sin(D)*N+.25,.3*_,D,0,1.15,.7,1.15))}oa.push(Jt(Ya(1.75,1),.5,10.6,.25,0,1,0,1.3,.62,1.3)),Cc.push(Jt(rs(.2,8,6),1.4,9.4,.9),Jt(rs(.17,8,6),-.35,10.3,1.1),Jt(rs(.19,8,6),.9,11,-.6)),aa.push(Jt(En(.22,.42,5.4,8),0,2.7,0)),aa.push(Jt(En(.12,.2,2.4,6),.2,6.2,.1,0,0,-.18));for(let _=0;_<4;_++){const D=_/4*Ee+.4;la.push(Jt(Ka(2.15,10,6),Math.cos(D)*1.7+.25,7.1,Math.sin(D)*1.7,0,D,0,1,.55,1))}la.push(Jt(Ka(2.6,10,6),.25,7.9,0,0,.6,0,1,.5,1)),bc.push(Jt(En(.19,.28,1.8,8),0,.9,0)),wc.push(Jt(Ka(1.05,12,5),0,1.78,0,0,0,0,1,1.15,1));for(let _=0;_<5;_++){const D=_/5*Ee+.2,N=.9+_%3*.7;Ac.push(Jt($a(.42),Math.cos(D)*.5,N,Math.sin(D)*.5,.22*Math.cos(D),D,.22*Math.sin(D),1,2.6+_%2*1.2,1)),Rc.push(Jt($a(.3),Math.cos(D+1.2)*.8,N*.7,Math.sin(D+1.2)*.8,0,D,.3,1,1.8,1))}St("treeTrunk",a(ye(Qr)),P,1),St("treeCanopy",a(ye(oa)),x,1),St("umbTrunk",a(ye(aa)),P,1),St("umbCanopy",a(ye(la)),x,1),St("mushStem",a(ye(bc)),S),St("mushCap",a(ye(wc)),z,1),St("crystalA",a(ye(Ac)),X),St("crystalB",a(ye(Rc)),j),St("bulb",a(ye(Cc)),it),St("outcrop",a(Do(3.4,11,6,12)),b,1),St("floatRock",a(Do(2.4,7,6,12)),b,1),St("chevron",a(yn(2.6,1.7,.3)),w),St("chevronPost",a(En(.16,.2,2.6,6)),me,1);const bi=[new dt(ht.moss),new dt(ht.teal),new dt(ht.lime),new dt(ht.pink)],Md=(_,D,N,H,W,ot)=>{for(let vt=0;vt<ot;vt++){const wt=e(0,Ee),Yt=Math.sqrt(t())*N*.86,Re=_+Math.cos(wt)*Yt,De=D+Math.sin(wt)*Yt;if(mn(Re,De)<Kt+6)continue;const tn=H+W*(1-Yt/N*(Yt/N)),ji=t(),zn=e(.8,1.35),kn=e(0,Ee);if(ji<.42)nt("treeTrunk",ut(Re,tn,De,0,kn,0,zn)),nt("treeCanopy",ut(Re,tn,De,0,kn,0,zn),bi[Math.floor(t()*bi.length)]),t()<.5&&nt("bulb",ut(Re,tn,De,0,kn,0,zn));else if(ji<.68)nt("umbTrunk",ut(Re,tn,De,0,kn,0,zn)),nt("umbCanopy",ut(Re,tn,De,0,kn,0,zn),bi[Math.floor(t()*bi.length)]);else if(ji<.88){const gr=e(1.1,3.2),Yc=gr*e(.9,1.4);nt("mushStem",ut(Re,tn,De,0,kn,0,gr,Yc,gr)),nt("mushCap",ut(Re,tn,De,0,kn,0,gr,Yc,gr))}else nt(t()<.5?"crystalA":"crystalB",ut(Re,tn,De,0,kn,0,e(1,2.4)))}};for(const _ of li)Md(_.x,_.z,_.r,_.top,_.dome,9+Math.floor(t()*7));for(let _=6;_<$t;_+=17){if(!at(_))continue;const D=Math.floor(_/17)%2===0?-1:1,N=e(.9,2.1),H=3.4*N,W=ce(_,D*(Kt+6.2+H+e(0,3))),ot=W.y-e(.6,3);nt("outcrop",ut(W.x,ot,W.z,0,e(0,Ee),0,N,N*e(1.1,2),N));const vt=1+Math.floor(t()*3);for(let wt=0;wt<vt;wt++){const Yt=e(0,Ee),Re=Math.sqrt(t())*H*.7,De=W.x+Math.cos(Yt)*Re,tn=W.z+Math.sin(Yt)*Re,ji=t(),zn=e(.7,1.1);if(ji<.5)nt("treeTrunk",ut(De,ot,tn,0,e(0,Ee),0,zn)),nt("treeCanopy",ut(De,ot,tn,0,0,0,zn),bi[Math.floor(t()*bi.length)]),nt("bulb",ut(De,ot,tn,0,0,0,zn));else if(ji<.72)nt("umbTrunk",ut(De,ot,tn,0,e(0,Ee),0,zn)),nt("umbCanopy",ut(De,ot,tn,0,0,0,zn),bi[Math.floor(t()*bi.length)]);else if(ji<.86){const kn=e(.9,2);nt("mushStem",ut(De,ot,tn,0,0,0,kn)),nt("mushCap",ut(De,ot,tn,0,0,0,kn))}else nt("crystalA",ut(De,ot,tn,0,e(0,Ee),0,e(.9,1.8)))}}for(const _ of[143,205,348,409,450,553,594,655])for(let D=-1;D<=1;D++){const N=_+D*6,H=un(N),W=ce(N,11.2),ot=Math.atan2(H.t.x,H.t.z);nt("chevronPost",ut(W.x,W.y+1.3,W.z,0,ot,0)),nt("chevron",ut(W.x,W.y+2.9,W.z,0,ot+(D===0?.35:.1),0))}St("cloud",a(Ya(1,1)),Rt),St("skyRock",a(Do(4,14,6,12)),b),St("skyRing",a(Ln(1,.05,5,22)),Ht);const ca=[];for(let _=0;_<30;_++){let D=e(0,$t);for(let vt=0;vt<8&&!at(D);vt++)D=e(0,$t);const N=t()<.5?-1:1,H=ce(D,N*e(18,46)),W=e(.7,2.6),ot=ut(H.x,H.y-e(6,22),H.z,e(0,1),e(0,Ee),e(0,1),W,W*e(.8,1.5),W);ca.push({index:nt("floatRock",ot.clone()),base:ot,phase:e(0,Ee),amp:e(.8,2.6),spin:e(-.12,.12)})}for(let _=0;_<16;_++){const D=_/16*Ee+e(-.15,.15),N=e(380,900),H=Ii+Math.cos(D)*N,W=Li+Math.sin(D)*N,ot=e(20,190),vt=e(2.6,7.5),wt=e(0,Ee),Yt=Math.min(vt*e(1.2,2.4),(ot+50)/14),Re=jo.clamp((N-380)/520,0,1),De=new dt(ht.horizon).lerp(new dt(ht.pinkPale),.4*t()).lerp(Ui.clear,.25);De.lerp(Ui.clear,.35*(1-Re)),nt("skyRock",ut(H,ot,W,0,wt,0,vt,Yt,vt),De),_%3===0&&nt("skyRing",ut(H,ot+Yt*3,W,e(.2,.6),e(0,Ee),e(.1,.5),vt*1.9))}for(let _=0;_<70;_++){const D=e(0,Ee),N=e(240,1e3),H=Ii+Math.cos(D)*N,W=Li+Math.sin(D)*N,ot=e(40,210)+N*.05,vt=e(8,30),wt=new dt().setHSL(.93-t()*.12,.55,.62+t()*.2);nt("cloud",ut(H,ot,W,e(-.2,.2),e(0,Ee),e(-.2,.2),vt*e(1,2.2),vt*e(.35,.6),vt*e(1,2)),wt)}const Sd=un(Tt),Ji=new Ie;Ji.position.copy(ce(Tt,0)),Ji.quaternion.setFromUnitVectors(new I(0,0,1),Sd.t.clone().normalize()),Ji.add(new Mt(a(Ln(17,.85,10,64)),Ht));const Pc=new Mt(a(Ln(13.2,.28,8,56)),Nt);Ji.add(Pc);const ha=[];for(let _=0;_<12;_++){const D=_/12*Ee;ha.push(Jt(yn(.28,4.2,.28),Math.cos(D)*15.2,Math.sin(D)*15.2,0,0,0,D-Math.PI/2))}const yd=new Mt(a(ye(ha)),w);ha.forEach(_=>_.dispose()),Ji.add(yd);const ua=[];for(let _=0;_<8;_++){const D=_/8*Ee+.3;ua.push(Jt(rs(.55,10,8),Math.cos(D)*17,Math.sin(D)*17-1.4,0))}const Dc=new Mt(a(ye(ua)),Z);ua.forEach(_=>_.dispose()),Ji.add(Dc),n.add(Ji);const Zi=new Ie;Zi.position.set(Ii,205,Li),Zi.rotation.set(.32,0,.2);const Ed=new Mt(a(Ln(104,1.6,10,96)),Ht),Ic=new Mt(a(Ln(64,1.5,8,72)),Nt),Lc=new Mt(a(Ln(130,1.1,8,96)),se);Zi.add(Ic,Ed,Lc);const da=[];for(let _=0;_<14;_++){const D=_/14*Ee;da.push(Jt($a(2.1),Math.cos(D)*104,Math.sin(D)*104,0,0,0,D,1,3.2,1))}const Uc=new Mt(a(ye(da)),se);da.forEach(_=>_.dispose()),Zi.add(Uc),n.add(Zi);const to=[],eo=new I(fr.x+fr.r*.62,fr.top+1.2,fr.z+fr.r*.3);for(let _=0;_<=6;_++){const D=_/6;to.push(new I(eo.x+Math.sin(D*2)*4+D*6,eo.y+(-50-eo.y)*Math.pow(D,1.25),eo.z+D*5))}const Nc=a(new $r(new qr(to),26,3.4,6,!1));{const _=Nc.getAttribute("uv");for(let D=0;D<_.count;D++)_.setY(D,_.getY(D)*5)}const Fc=new Mt(Nc,Ot);Fc.renderOrder=3;const no=new Mt(a(Ln(9,2.2,6,24)),ze);no.position.set(to[6].x,-57,to[6].z),no.rotation.x=Math.PI/2,no.renderOrder=3,n.add(Fc,no);const pr=900,mr=a(new Fe);{const _=new Float32Array(pr*3),D=new Float32Array(pr*3),N=new Float32Array(pr),H=new Float32Array(pr),W=new dt;for(let ot=0;ot<pr;ot++){const vt=e(0,Ee),wt=Math.sqrt(t())*210;_[ot*3]=Ii+Math.cos(vt)*wt,_[ot*3+1]=e(-40,74),_[ot*3+2]=Li+Math.sin(vt)*wt;const Yt=t();W.set(Yt<.4?ht.gold:Yt<.7?ht.pink:ht.teal),D[ot*3]=W.r,D[ot*3+1]=W.g,D[ot*3+2]=W.b,N[ot]=e(.7,3.4),H[ot]=e(0,100)}mr.setAttribute("position",new $e(_,3)),mr.setAttribute("color",new $e(D,3)),mr.setAttribute("aSize",new $e(N,1)),mr.setAttribute("aSeed",new $e(H,1))}const Td=typeof window>"u"?1:Math.min(2,Math.max(1,window.devicePixelRatio||1)),Oc=l(new Ke({transparent:!0,depthWrite:!1,blending:qn,vertexColors:!0,uniforms:{uTime:{value:0},uPixel:{value:Td}},vertexShader:`
      uniform float uTime, uPixel;
      attribute float aSize, aSeed;
      varying vec3 vCol;
      varying float vA;
      void main(){
        vCol = color;
        vec3 p = position;
        float t = uTime * 0.24 + aSeed;
        p.y = mod(p.y + uTime * (0.6 + fract(aSeed) * 1.4) + 60.0, 114.0) - 40.0;
        p.x += sin(t * 1.7) * 3.4;
        p.z += cos(t * 1.3) * 3.4;
        vec4 mvPosition = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * mvPosition;
        gl_PointSize = aSize * uPixel * (170.0 / max(1.0, -mvPosition.z));
        vA = (0.35 + 0.65 * abs(sin(t * 0.9))) * clamp(1.0 - (-mvPosition.z) / 420.0, 0.0, 1.0);
      }`,fragmentShader:`
      varying vec3 vCol;
      varying float vA;
      void main(){
        float d = length(gl_PointCoord - 0.5);
        float a = smoothstep(0.5, 0.06, d);
        gl_FragColor = vec4(vCol * a * vA * 1.5, a * vA);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`})),Bc=new Ju(mr,Oc);Bc.frustumCulled=!1,n.add(Bc);const ys=new Map;for(const[_,D]of gt){if(D.list.length===0)continue;const N=new Sh(D.geo,D.mat,D.list.length);N.name=_;const H=D.cols.some(W=>W!==null);for(let W=0;W<D.list.length;W++)N.setMatrixAt(W,D.list[W]),H&&N.setColorAt(W,D.cols[W]??Ui.clear);N.instanceColor&&(N.instanceColor.needsUpdate=!0),N.instanceMatrix.needsUpdate=!0,N.computeBoundingSphere(),D.shadow&&(N.castShadow=!0,N.receiveShadow=!0),n.add(N),ys.set(_,N)}const zc=new he,kc=new he,Hc=new he;let Gc=0;function bd(_,D){Gc+=Math.min(Math.max(D,0),.05),Gt.uniforms.uTime.value=Gc,Oc.uniforms.uTime.value=_,Zi.rotation.z=.2+Math.sin(_*.05)*.06,Zi.position.y=205+Math.sin(_*.11)*2.4,Ic.rotation.z=_*.06,Lc.rotation.z=-_*.035,Uc.rotation.z=-_*.045,Pc.rotation.z=_*.22,Dc.rotation.z=-_*.08;for(let wt=0;wt<Q.length;wt++)Q[wt].tex.offset.y=-(_*1.35)%1,Q[wt].mat.opacity=.82+.18*Math.sin(_*6+wt);U.emissiveIntensity=1.25+.7*(.5+.5*Math.sin(_*3.1)),Te.emissiveIntensity=.25+.12*Math.sin(_*1.4),ue.emissiveIntensity=.5+.2*Math.sin(_*2.2+1.1),X.emissiveIntensity=1.1+.5*Math.sin(_*1.7),j.emissiveIntensity=1+.5*Math.sin(_*1.37+2),ze.opacity=.35+.2*Math.sin(_*1.9),Z.color.copy(Ui.goldPale).offsetHSL(0,0,.05*Math.sin(_*2.6)).multiplyScalar(Tn),it.color.copy(Ui.goldPale).offsetHSL(0,0,.06*Math.sin(_*4.2)).multiplyScalar(Tn),Ht.color.copy(Ui.goldPale).offsetHSL(0,0,.05*Math.sin(_*1.2)).multiplyScalar(Tn),Nt.color.copy(Ui.tealPale).offsetHSL(0,0,.05*Math.sin(_*1.9+1)).multiplyScalar(Tn),w.color.copy(Ui.pinkPale).offsetHSL(0,0,.06*Math.sin(_*5)).multiplyScalar(Tn);const N=Ot.map;N.offset.y=-(_*.85)%1,N.offset.x=Math.sin(_*.4)*.05;for(const wt of Jr)wt.mesh.rotation.z=Math.sin(_*2.4+wt.phase)*.22;const H=Ti.geometry.getAttribute("position");for(let wt=0;wt<H.count;wt++){const Yt=ur.getX(wt);H.setZ(wt,Math.sin(_*1.5+Yt*.35)*.26*Math.cos(ur.getY(wt)/3.2*1.2))}H.needsUpdate=!0;const W=ys.get("floatRock");if(W){for(const wt of ca)zc.makeTranslation(0,Math.sin(_*.55+wt.phase)*wt.amp,0),kc.makeRotationY(_*wt.spin),Hc.copy(wt.base).premultiply(zc).multiply(kc),W.setMatrixAt(wt.index,Hc);W.instanceMatrix.needsUpdate=!0}const ot=ys.get("cloud");ot&&(ot.rotation.y=_*.0032);const vt=ys.get("skyRock");if(vt){const wt=Math.sin(_*.09)*2.2;vt.position.y=wt;const Yt=ys.get("skyRing");Yt&&(Yt.position.y=wt)}}const Vc=a(new Fn(2600,2600,32,32));Vc.rotateX(-Math.PI/2);const Wc=[],Xc=new Map,qc=[];n.traverse(_=>{const D=_;if(D.material instanceof jt){const N=D.material;let H=Xc.get(N);H||(H=l(new vp({color:N.color,emissive:N.emissive,emissiveIntensity:N.emissiveIntensity,map:N.map,emissiveMap:N.emissiveMap,vertexColors:N.vertexColors,transparent:N.transparent,opacity:N.opacity,side:N.side,depthWrite:N.depthWrite,flatShading:N.flatShading})),Xc.set(N,H)),Wc.push({mesh:D,original:N,low:H})}_ instanceof Sh&&/^(tree|umb|mush|cloud|bulb|floatRock)/.test(_.name)&&qc.push({mesh:_,count:_.count})});function wd(_){_e.geometry=_?Ct:Vc;for(const D of Wc)D.mesh.material=_?D.original:D.low;for(const D of qc)D.mesh.count=_?D.count:Math.ceil(D.count*.4)}function Ad(){i.remove(n),n.traverse(_=>{const D=_;D.geometry&&s.add(D.geometry);const N=D.material;Array.isArray(N)?N.forEach(H=>r.add(H)):N&&r.add(N)});for(const _ of s)_.dispose();for(const _ of r)_.dispose();for(const _ of o)_.dispose();gt.clear(),ys.clear(),Q.length=0,ca.length=0,li.length=0,s.clear(),r.clear(),o.clear();for(const _ of Yo.values())_.dispose();Yo.clear()}return{update:bd,dispose:Ad,root:n,setQuality:wd}}const na=Math.PI*2,Kn=jo.clamp,nu=1775158,Mv=12175080,Sv=16645629,Rr=.36,Hs=.42,Ho=1.9,iu=new Map;function $i(i,t){let e=iu.get(i);return e||(e=t(),iu.set(i,e)),e}const Vr=new Map,Be=(i,t,e)=>$i(`b|${i}|${t}|${e}`,()=>new xs(i,t,e)),be=(i,t=12,e=9)=>$i(`s|${i}|${t}|${e}`,()=>new rr(i,t,e)),Wn=(i,t=12,e=5,n=Math.PI*.5)=>$i(`d|${i}|${t}|${e}|${n}`,()=>new rr(i,t,e,0,na,0,n)),en=(i,t,e,n=10)=>$i(`c|${i}|${t}|${e}|${n}`,()=>new sr(i,t,e,n,1,!1)),hs=(i,t,e=8)=>$i(`k|${i}|${t}|${e}`,()=>new Xr(i,t,e)),vi=(i,t,e=6,n=18)=>$i(`t|${i}|${t}|${e}|${n}`,()=>new qi(i,t,e,n));function yv(i,t,e){const n=[],s=[],r=2/e,o=c=>c<0?-1:1;for(const c of i){const h=c.y??0;for(let u=0;u<t;u++){const p=u/t*na,d=Math.cos(p),g=Math.sin(p);n.push(c.w*o(d)*Math.pow(Math.abs(d),r),h+c.h*o(g)*Math.pow(Math.abs(g),r),c.z)}}for(let c=0;c<i.length-1;c++)for(let h=0;h<t;h++){const u=(h+1)%t,p=c*t+h,d=c*t+u,g=(c+1)*t+h,y=(c+1)*t+u;s.push(p,d,g,d,y,g)}const a=(c,h,u)=>{const p=i[c],d=n.length/3;n.push(0,p.y??0,p.z+h);for(let g=0;g<t;g++){const y=(g+1)%t,m=c*t+g,f=c*t+y;u?s.push(m,f,d):s.push(m,d,f)}};a(0,-Math.min(.14,Math.max(.03,i[0].w*.7)),!1),a(i.length-1,Math.min(.14,Math.max(.03,i[i.length-1].w*.7)),!0);const l=new Fe;return l.setAttribute("position",new ne(n,3)),l.setIndex(s),l.computeVertexNormals(),l.computeBoundingSphere(),l}function _i(i,t=14,e=4.4){return $i(`hull|${t}|${e}|${JSON.stringify(i)}`,()=>yv(i,t,e))}function bn(i,t,e=16,n=6){return $i(`tube|${t}|${e}|${n}|${JSON.stringify(i)}`,()=>new $r(new qr(i.map(s=>new I(s[0],s[1],s[2])),!1,"catmullrom",.4),e,t,n,!1))}const Ev=new Xi,su=new _n,Tv=new I,bv=new I;function tt(i=0,t=0,e=0,n=0,s=0,r=0,o=1,a=o,l=o){return su.set(n,s,r),new he().compose(Tv.set(i,t,e),Ev.setFromEuler(su),bv.set(o,a,l))}function _c(i,t,e){let n=Vr.get(t);if(n)return n;const s=e?new he().makeTranslation(-e.x,-e.y,-e.z):null,r=new Map;for(const[a,l,c]of i){const h=a.clone().applyMatrix4(s?s.clone().multiply(c):c),u=r.get(l);u?u.push(h):r.set(l,[h])}const o=new Map;for(const[a,l]of r)o.set(a,wv(l));return Vr.set(t,o),o}function wv(i){const t=[],e=[];for(const s of i){const r=s.index?s.toNonIndexed():s,o=r.getAttribute("position"),a=r.getAttribute("normal");for(let l=0;l<o.count;l++)t.push(o.getX(l),o.getY(l),o.getZ(l)),e.push(a?a.getX(l):0,a?a.getY(l):1,a?a.getZ(l):0);r!==s&&r.dispose(),s.dispose()}const n=new Fe;return n.setAttribute("position",new ne(t,3)),n.setAttribute("normal",new ne(e,3)),n.computeBoundingSphere(),n}function Av(){const i=[],t=(e,n,s)=>i.push([e,n,s]);t(_i([{z:1.5,w:.1,h:.08,y:.42},{z:1.28,w:.3,h:.13,y:.44},{z:.95,w:.44,h:.17,y:.46},{z:.45,w:.56,h:.2,y:.47},{z:-.05,w:.62,h:.21,y:.47},{z:-.55,w:.62,h:.22,y:.48},{z:-1.05,w:.56,h:.2,y:.5},{z:-1.4,w:.34,h:.15,y:.52},{z:-1.56,w:.1,h:.07,y:.54}]),"body",tt()),t(_i([{z:.18,w:.44,h:.09,y:.66},{z:.7,w:.4,h:.1,y:.66},{z:1.16,w:.26,h:.08,y:.62},{z:1.46,w:.1,h:.05,y:.58}]),"accent",tt()),t(_i([{z:-.01,w:.16,h:.05,y:.72},{z:.55,w:.14,h:.05,y:.74},{z:.95,w:.09,h:.04,y:.7}],10),"chrome",tt());for(const e of[-1,1])t(_i([{z:-.42,w:.08,h:.1,y:.44},{z:-.05,w:.18,h:.19,y:.44},{z:.45,w:.19,h:.2,y:.44},{z:.78,w:.1,h:.12,y:.44}]),"accent",tt(e*.7,0,0,0,0,-e*.12)),t(Be(.1,.16,.16),"dark",tt(e*.79,.46,.52)),t(bn([[e*.72,.44,1],[e*.85,.4,.4],[e*.85,.4,-.4],[e*.72,.44,-1.05]],.055),"chrome",tt()),t(_i([{z:-1.24,w:.1,h:.06,y:.72},{z:-.98,w:.3,h:.1,y:.8},{z:-.72,w:.12,h:.06,y:.74}],10),"body",tt(e*.86,0,0));t(Be(1,.06,1.5),"dark",tt(0,.2,.5)),t(Be(.7,.12,.3),"chrome",tt(0,.3,1.28,-.2,0,0)),t(_i([{z:-1,w:.34,h:.28,y:.62},{z:-.6,w:.34,h:.26,y:.56},{z:-.22,w:.26,h:.2,y:.52}],12),"dark",tt()),t(_i([{z:-1.16,w:.3,h:.32,y:.86},{z:-.98,w:.3,h:.34,y:.86}],12,5),"dark",tt(0,0,0,.16,0,0)),t(Be(.62,.07,.1),"accent",tt(0,1.17,-1.08,.16,0,0)),t(Be(.44,.36,.52),"chrome",tt(.6,.72,-.92,0,.12,0));for(let e=0;e<6;e++)t(Be(.46,.025,.54),"dark",tt(.6,.58+e*.055,-.92,0,.12,0));t(en(.14,.14,.14,12),"chrome",tt(.6,.9,-.92,0,0,Math.PI/2)),t(Wn(.16,10,5),"dark",tt(.6,1.02,-.92)),t(bn([[.5,.74,-.7],[.76,.86,-1],[.72,1.06,-1.3],[.46,1.16,-1.46]],.085,18,6),"chrome",tt()),t(bn([[-.44,.74,-.7],[-.7,.9,-1.05],[-.62,1.1,-1.34],[-.36,1.2,-1.5]],.075,18,6),"chrome",tt()),t(en(.1,.085,.16,10),"glow",tt(.44,1.17,-1.5,Math.PI/2-.25,0,0)),t(en(.09,.075,.16,10),"glow",tt(-.34,1.21,-1.54,Math.PI/2-.25,0,0)),t(bn([[-.72,.5,.85],[-.44,.4,1.42],[0,.36,1.62],[.44,.4,1.42],[.72,.5,.85]],.07,20,6),"chrome",tt()),t(bn([[-.8,.56,-1.28],[-.4,.5,-1.62],[.4,.5,-1.62],[.8,.56,-1.28]],.07,20,6),"chrome",tt()),t(Be(1.52,.07,.44),"accent",tt(0,1.3,-1.3,-.16,0,0));for(const e of[-1,1])t(Be(.09,.42,.12),"dark",tt(e*.5,1.12,-1.22,-.16,0,0)),t(Be(.05,.24,.4),"accent",tt(e*.78,1.32,-1.3,-.16,0,0)),t(en(.03,.03,.3,6),"dark",tt(e*.5,.92,.62,0,0,-e*.5)),t(Wn(.12,8,4),"chrome",tt(e*.62,1,.66,Math.PI/2,0,-e*.5)),t(Wn(.16,10,5),"dark",tt(e*.28,.6,1.42,Math.PI/2,0,0)),t(en(.115,.115,.05,12),"lamp",tt(e*.28,.6,1.48,Math.PI/2,0,0)),t(vi(.13,.022,6,16),"glow",tt(e*.28,.6,1.47)),t(Be(.3,.09,.06),"glow",tt(e*.42,.9,-1.5));return t(en(.05,.05,1.64,8),"dark",tt(0,Rr,1.02,0,0,Math.PI/2)),t(en(.07,.07,1.78,8),"dark",tt(0,Hs,-.98,0,0,Math.PI/2)),t(en(.2,.2,.06,14),"chrome",tt(-.74,Hs,-.98,0,0,Math.PI/2)),t(Be(.05,.05,.9),"dark",tt(-.72,.62,-.5,.16,0,0)),i}const Fi=1.36,gi=-.42,Go={x:0,y:Fi,z:gi};function Rv(i,t,e){const n=[],s=(h,u,p,d="body")=>{d===e&&n.push([h,u,p])};if(e==="body"){s(_i([{z:0,w:.3,h:.26},{z:.26,w:.32,h:.26},{z:.5,w:.26,h:.21}],12),"suit",tt(0,.6,-.5,-Math.PI/2)),s(Be(.34,.34,.16),"accent",tt(0,.98,-.44,.12,0,0)),s(Be(.42,.08,.3),"dark",tt(0,.72,-.46)),s(be(.16,10,7),"suit",tt(-.3,1.12,-.44)),s(be(.16,10,7),"suit",tt(.3,1.12,-.44)),s(en(.09,.1,.16,8),"suit",tt(0,1.28,gi));for(const h of[-1,1])s(bn([[h*.3,1.1,-.42],[h*.3,.94,-.05],[h*.2,.86,.3]],.075,12,6),"suit",tt()),s(be(.1,10,7),"dark",tt(h*.18,.85,.33)),s(bn([[h*.2,.78,-.5],[h*.24,.62,.1],[h*.22,.44,.62]],.11,12,6),"suit",tt()),s(Be(.18,.1,.28),"dark",tt(h*.22,.34,.66));if(i==="fox")s(bn([[0,.94,-1.1],[.16,.78,-1.5],[.1,.66,-1.82]],.1,12,6),"fur",tt()),s(be(.17,10,7),"fur",tt(.14,.72,-1.6)),s(be(.13,10,7),"fur",tt(.1,.66,-1.82)),s(be(.085,8,6),"eye",tt(.1,.66,-1.92));else if(i==="cat")s(bn([[0,.94,-1.1],[.2,1,-1.5],[.02,1.14,-1.92]],.07,14,6),"fur",tt()),s(be(.075,8,6),"fur",tt(.02,1.14,-1.92));else if(i==="bird")for(const h of[-1,1])s(Wn(.22,10,5),"accent",tt(h*.4,.96,-.5,0,h*.4,-h*1.35,.55,1.3,.35));switch(t){case 1:for(let h=0;h<5;h++){const u=h/5*na;s(Wn(.19,8,4),"accent",tt(Math.cos(u)*.3,1.14,-.44+Math.sin(u)*.24,0,0,0,.9,.35,.9))}s(vi(.26,.09,6,16),"fur",tt(0,1.26,-.46,Math.PI/2,0,0));break;case 3:s(bn([[.1,1.1,-.66],[.3,1.16,-1.3],[.24,1.02,-1.9]],.055,12,6),"accent",tt()),s(bn([[-.1,1.06,-.66],[-.26,1.12,-1.24],[-.2,.98,-1.8]],.05,12,6),"accent",tt());break;case 4:s(bn([[.19,Fi+.1,gi-.28],[.44,Fi+.02,gi-.62],[.4,Fi-.2,gi-.94]],.05,10,6),"accent",tt()),s(bn([[-.19,Fi+.1,gi-.28],[-.42,Fi+.04,gi-.58],[-.38,Fi-.16,gi-.88]],.045,10,6),"accent",tt());break;case 5:for(const h of[-1,1])s(Wn(.2,8,4),"dark",tt(h*.3,1.1,-.56,.2,0,h*.4,1,1.5,.5));s(vi(.1,.02,5,14),"glow",tt(.02,1.14,-1.82,0,0,1.2));break}return n}const r=Fi,o=gi;if(i==="fox"){s(_i([{z:.2,w:.075,h:.07,y:-.02},{z:.09,w:.15,h:.13},{z:-.02,w:.21,h:.2},{z:-.16,w:.2,h:.19}],12),"fur",tt(0,r,o,.12,0,0),"head"),s(be(.038,8,6),"dark",tt(0,r-.02,o+.24),"head");for(const h of[-1,1])s(hs(.095,.24,6),"fur",tt(h*.14,r+.2,o-.06,.06,0,-h*.22),"head"),s(be(.055,8,6),"eye",tt(h*.085,r+.05,o+.18),"head"),s(be(.026,8,6),"dark",tt(h*.085,r+.05,o+.225),"head"),s(Be(.11,.025,.03),"fur",tt(h*.09,r+.12,o+.18,0,0,h*.2),"head")}else if(i==="frog"){s(be(.24,14,10),"fur",tt(0,r-.01,o,0,0,0,1.16,.86,1),"head"),s(Be(.34,.028,.05),"dark",tt(0,r-.1,o+.2),"head"),s(be(.13,12,8),"accent",tt(0,r-.16,o+.12,0,0,0,1.1,.9,1),"head");for(const h of[-1,1])s(be(.105,12,9),"fur",tt(h*.14,r+.13,o+.06),"head"),s(be(.055,10,8),"eye",tt(h*.15,r+.15,o+.13),"head"),s(be(.028,8,6),"dark",tt(h*.155,r+.15,o+.18),"head"),s(Be(.1,.03,.04),"fur",tt(h*.14,r+.05,o+.18,0,0,h*.3),"head")}else if(i==="cat"){s(be(.22,14,10),"fur",tt(0,r,o,0,0,0,1,.96,1),"head"),s(be(.12,12,8),"eye",tt(0,r-.07,o+.16,0,0,0,1,.8,.9),"head");for(const h of[-1,1]){s(hs(.1,.21,6),"fur",tt(h*.14,r+.18,o-.02,.05,0,-h*.2),"head"),s(hs(.06,.14,6),"accent",tt(h*.135,r+.14,o+.02,.05,0,-h*.2),"head"),s(be(.06,10,8),"eye",tt(h*.09,r+.03,o+.17,0,0,0,1,1.15,.7),"head"),s(be(.024,8,6),"dark",tt(h*.09,r+.03,o+.21,0,0,0,.5,1.3,.6),"head");for(let u=0;u<3;u++)s(en(.008,.008,.24,5),"eye",tt(h*(.2+u*.012),r-.02-u*.035,o+.16,0,h*.5,h*(.5-u*.35)),"head")}}else{s(be(.2,14,10),"fur",tt(0,r,o),"head"),s(hs(.075,.26,7),"accent",tt(0,r-.02,o+.28,-Math.PI/2+.12,0,0),"head"),s(hs(.05,.16,6),"accent",tt(0,r-.08,o+.24,-Math.PI/2+.4,0,0),"head");for(let h=0;h<3;h++)s(hs(.05,.3+h*.06,6),"accent",tt((h-1)*.07,r+.2,o-.12,-.5-h*.15,0,(h-1)*.25),"head");for(const h of[-1,1])s(be(.055,10,8),"eye",tt(h*.1,r+.04,o+.14),"head"),s(be(.026,8,6),"dark",tt(h*.105,r+.04,o+.185),"head")}const a=(h=1,u=.02)=>s(Wn(.27*h,14,7,Math.PI*.62),"accent",tt(0,r-.04,o-u,.08,0,0),"head"),l=(h,u,p)=>s(en(.2,.2,.3,12),"glass",tt(0,r+h,o+u,Math.PI/2+p,0,0,1.05,.55,1),"head"),c=(h,u)=>{for(const p of[-1,1])s(en(.062,.062,.05,10),"dark",tt(p*.09,r+h,o+u,Math.PI/2,0,0),"head"),s(en(.05,.05,.055,10),"glass",tt(p*.09,r+h,o+u+.005,Math.PI/2,0,0),"head");s(Be(.2,.035,.05),"dark",tt(0,r+h,o+u),"head")};switch(t){case 0:a(1,.03),l(0,.16,-.2),s(Be(.06,.3,.16),"accent",tt(0,r+.2,o-.26,.2,0,0),"head"),s(en(.012,.012,.42,5),"chrome",tt(.2,r+.36,o-.2,.1,0,-.12),"head"),s(be(.045,8,6),"glow",tt(.24,r+.56,o-.22),"head");break;case 1:c(.19,.06);break;case 2:s(Wn(.3,12,6,Math.PI*.6),"dark",tt(0,r-.06,o-.05,.1,0,0),"head"),c(.03,.2);for(const h of[-1,1])s(vi(.045,.02,5,12),"glow",tt(h*.145,r+.19,o-.02,0,0,-h*.2),"head");break;case 3:s(Wn(.245,12,6,Math.PI*.7),"dark",tt(0,r-.02,o-.02,.06,0,0),"head"),s(Wn(.14,8,4),"dark",tt(-.22,r-.06,o-.04,0,0,.5),"head"),s(Wn(.14,8,4),"dark",tt(.22,r-.06,o-.04,0,0,-.5),"head"),c(.02,.19);break;case 4:s(vi(.235,.075,6,18),"accent",tt(0,r+.09,o-.02,Math.PI/2,0,0),"head"),s(be(.075,8,6),"accent",tt(.2,r+.12,o-.24),"head"),l(0,.15,-.15),s(vi(.05,.018,5,12),"glow",tt(-.2,r+.06,o-.04,0,0,.3),"head");break;default:a(1.05,.04),l(0,.15,-.15);break}return n}function Cv(i,t){const e=[],n=(s,r,o)=>e.push([s,r,o]);n(en(i,i,t,20),"dark",tt(0,0,0,0,0,Math.PI/2)),n(vi(i-.06,.05,6,18),"dark",tt(t/2,0,0,0,Math.PI/2,0)),n(vi(i-.06,.05,6,18),"dark",tt(-t/2,0,0,0,Math.PI/2,0)),n(en(i*.56,i*.56,t*.75,14),"accent",tt(0,0,0,0,0,Math.PI/2));for(let s=0;s<6;s++){const r=s/6*na;n(Be(t*.5,i*.62,.055),"accent",tt(0,Math.cos(r)*i*.3,Math.sin(r)*i*.3,r,0,0))}return n(be(i*.3,10,7),"chrome",tt(t*.42,0,0)),n(be(i*.3,10,7),"chrome",tt(-t*.42,0,0)),e}function Pv(i){const t=new dt(i.color),e=new dt(i.accent),n=t.clone().lerp(new dt(16777215),.24),s=t.clone().lerp(new dt(nu),.34),r=e.clone().multiplyScalar(Ho);return{body:new jt({color:t,roughness:.32,metalness:.4}),accent:new jt({color:e,roughness:.36,metalness:.3,emissive:e,emissiveIntensity:.14}),dark:new jt({color:nu,roughness:.72,metalness:.15}),chrome:new jt({color:Mv,roughness:.2,metalness:.95}),glass:new jt({color:e,emissive:e,emissiveIntensity:.85,roughness:.1,metalness:.3,transparent:!0,opacity:.58}),lamp:new jt({color:16774879,emissive:16773327,emissiveIntensity:2.1,roughness:.25}),glow:new jt({color:r,emissive:r,emissiveIntensity:1.9,roughness:.3,toneMapped:!1}),fur:new jt({color:n,roughness:.84,metalness:.02}),suit:new jt({color:s,roughness:.55,metalness:.12}),eye:new jt({color:Sv,roughness:.3,metalness:.05})}}const ru="__machine";function Dv(){let i=Vr.get(ru);return i||(i=_c(Av(),ru)),i}function ou(i,t,e){const n=`driver|${i}|${t}|${e}`;let s=Vr.get(n);return s||(s=_c(Rv(i,t,e),n,e==="head"?Go:void 0)),s}function Iv(i,t){const e=`wheel|${i}|${t}`;let n=Vr.get(e);return n||(n=_c(Cv(i,t),e)),n}function Io(i,t,e,n,s=!0){for(const[r,o]of t){const a=e[r];if(!a)continue;const l=new Mt(o,a);s&&r!=="glass"&&(l.castShadow=!0),n.add(a),i.add(l)}}function vc(i){const t=(Math.floor(i)%ti.length+ti.length)%ti.length,e=ti[t],n=Pv(e),s=new Ie;s.name=`kart-${e.name}`;const r=[],o=[],a=[],l=[[-.82,Rr,1.02],[.82,Rr,1.02],[-.88,Hs,-.98],[.88,Hs,-.98]],c=new Set;for(let b=0;b<4;b++){const A=b<2,P=new Ie;P.position.set(l[b][0],l[b][1],l[b][2]);const x=new Ie;P.add(x),Io(x,Iv(A?Rr:Hs,A?.3:.36),n,c),s.add(P),(A?r:o).push(P),a.push(x)}const h=new Ie;h.name="chassis",s.add(h),Io(h,Dv(),n,c);const u=new Ie;u.position.set(0,.84,.1);{const b=new Mt(en(.035,.045,.5,8),n.chrome);b.position.set(0,-.16,-.16),b.rotation.x=-.85,b.castShadow=!0,u.add(b);const A=new Ie;A.position.set(0,.06,.12),A.rotation.x=-.55;const P=new Mt(vi(.24,.045,6,20),n.dark);P.castShadow=!0,A.add(P);for(let x=0;x<3;x++){const S=new Mt(Be(.04,.48,.03),n.accent);S.rotation.z=x/3*Math.PI,A.add(S)}A.add(new Mt(be(.07,10,7),n.glow)),u.add(A),u.userData.wheel=A,c.add(n.chrome),c.add(n.dark),c.add(n.accent),c.add(n.glow)}h.add(u);const p=new Ie;p.name="driver",Io(p,ou(e.species,t,"body"),n,c),h.add(p);const d=new Ie;d.name="head",d.position.set(Go.x,Go.y,Go.z),Io(d,ou(e.species,t,"head"),n,c),p.add(d);const g=[],y=new He({color:new dt(e.accent).multiplyScalar(Ho),transparent:!0,opacity:.75,depthWrite:!1,blending:qn,toneMapped:!1,side:Le});for(const b of[-1,1]){const A=new Mt(hs(.11,.6,8),y);A.position.set(b*.39,1.19,b<0?-1.6:-1.56),A.rotation.x=Math.PI/2-.25,h.add(A),g.push(A)}const m=new He({color:new dt(e.accent).multiplyScalar(Ho*.8),transparent:!0,opacity:.3,depthWrite:!1,blending:qn,toneMapped:!1,side:Le}),f=new He({color:new dt(e.accent).multiplyScalar(Ho),transparent:!0,opacity:0,depthWrite:!1,blending:qn,toneMapped:!1,side:Le}),w=new Fn(1.7,2.5);w.userData.owned=!0;const T=new Mt(w,m);T.rotation.x=-Math.PI/2,T.position.set(0,.06,.1),h.add(T);const M=[];for(const b of[-1,1]){const A=new Fn(.62,1.5);A.userData.owned=!0;const P=new Mt(A,f);P.rotation.x=-Math.PI/2,P.position.set(b*.88,.035,-1.25),h.add(P),M.push(P)}const C=Array.from(c);return C.push(y,m,f),s.userData={driverIndex:t,driver:e,species:e.species,chassis:h,driverGrp:p,head:d,steerCol:u,steerWheel:u.userData.wheel,wheels:a,frontPivots:r,rearPivots:o,flames:g,flameMat:y,driftGlow:M,driftMat:f,underMat:m,materials:C,wheelFront:Rr,wheelRear:Hs,rollFront:0,rollRear:0,lastTime:-1},s}function ud(i,t,e,n,s,r){const o=i.userData;if(!o||!o.chassis)return;const a=o.lastTime<0?1/60:n-o.lastTime,l=Kn(a>0&&a<.25?a:1/60,0,.05);o.lastTime=n;const c=Kn(e,-1.2,1.2),h=Kn(s,0,1),u=Kn(r,0,1),p=Kn(Math.abs(t)/24,0,1.6),d=u*u;o.rollFront+=t*l/o.wheelFront,o.rollRear+=t*l/o.wheelRear;const g=o.wheels??[];for(let x=0;x<g.length;x++)g[x].rotation.x=x<2?o.rollFront:o.rollRear;for(const x of o.frontPivots??[])x.rotation.y=c*.42,x.rotation.z=-Math.abs(c)*.06;for(const x of o.rearPivots??[])x.rotation.y=-h*.16*Math.sign(c||1);const y=o.chassis;y.rotation.z=c*.2+h*.28+Math.sin(n*46)*.05*d,y.rotation.x=-p*.035+Math.sin(n*34)*.03*d,y.rotation.y=-h*.1*c+Math.sin(n*39)*.04*d,y.position.y=Math.sin(n*8.5)*.012*(1-Kn(p,0,1))+Math.sin(n*19)*.006*p,y.position.x=Math.sin(n*41)*.04*d;const m=o.steerWheel;m&&(m.rotation.z=-c*.7);const f=o.driverGrp;f&&(f.rotation.z=c*.16+h*.2+Math.sin(n*46)*.06*d,f.rotation.x=-p*.05,f.position.y=Math.sin(n*12)*.012*(1-Kn(p,0,1))+Math.abs(Math.sin(n*21))*.008*p);const w=o.head;w&&(w.rotation.y=c*.3-h*.2*Math.sign(c||1),w.rotation.x=-p*.12+Math.sin(n*15)*.03*(1-Kn(p,0,1))+Math.sin(n*33)*.08*d,w.rotation.z=-c*.1);const T=o.flameMat,M=.5+.25*Math.sin(n*11),C=.55+p*1.6+.35*Math.sin(n*31)+d*.8;for(const x of o.flames??[])x.scale.set(.8+.3*M,C,.8+.3*M);T&&(T.opacity=Kn(.3+p*.5+M*.25,0,.95));const b=o.driftMat;b&&(b.opacity=Kn(h*.6+d*.25,0,1));for(const x of o.driftGlow??[])x.scale.set(.85+h*.5,1+h*.6,.85+h*.5);const A=o.underMat;A&&(A.opacity=.24+.12*p+.08*M);const P=o.materials??[];for(const x of P){const S=x;if(!S.emissive)continue;const L=S.userData;L.baseHex===void 0&&(L.baseHex=S.emissive.getHex(),L.baseI=S.emissiveIntensity),d>.01?(S.emissive.setHex(16730723),S.emissiveIntensity=(L.baseI??1)*(1-d)+d*2.6):(S.emissive.getHex()!==L.baseHex||S.emissiveIntensity!==L.baseI)&&(S.emissive.setHex(L.baseHex),S.emissiveIntensity=L.baseI??1)}}function dd(i){const t=i.userData,e=t?.materials??[];for(const n of e)n.dispose();i.traverse(n=>{const s=n.geometry;s&&s.userData&&s.userData.owned===!0&&s.dispose()}),t&&(t.materials=[],t.wheels=[],t.flames=[],t.driftGlow=[]),i.removeFromParent()}const Ja=3,au=6,Cr=12,lu=$t/Cr,Un=ld/2,os=5.6,Za=48,Lv=.01,ja=10,Uv=58,Nv=.78,Fv=46,Ov=11,Bv=26,Tr=44,zv=60,kv=9,Hv=7,Gv=7.4,cu=20,Vv=.1,Wv=.55,Xv=8,qv=.68,Yv=.42,$v=.9,Kv=.22,Jv=.5,hu=14,uu=.7,Qa=2.4,Zv=.97,jv=1.32,Qv=2,tx=1.25,ex=3,nx=1.9,tl=1.5,ix=2.4,sx=11,rx=.55,ox=70,ax=3.6,lx=95,cx=8,du=9,hx=2,ux=1.55,dx=14,fx=7,px=1.1,mx=1.4,gx=6,_x=11,fu=.7,vx=1.45,pu=3,mu=2.05,xx=16,Mx=4.8,gu=2.6,Sx=3.8,_u=.05,el=["rocket","mine","boost"],yx={throttle:!1,brake:!1,left:!1,right:!1,drift:!1,fire:!1,reset:!1};function Oe(i,t,e){return i<t?t:i>e?e:i}function Ex(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}class xc{state;rx;kappa;kGrid=4;pads;rnd;clock=0;playerFinish=0;prevFire=!1;prevReset=!1;autopilot=!1;nextPickupId=0;nextShotId=0;order=[];constructor(t){const e=ti.length,n=(Math.floor(t)%e+e)%e;this.rnd=Ex(1592597118^($t|0)),this.kappa=Tx(this.kGrid),this.pads=hd.map(r=>r*$t);const s=[];for(let r=0;r<au;r++){const o=r===0?n:(n+r)%e,a=au-1-r,l=Math.floor(a/2),c=a%2,h=xx-l*Mx;s.push({id:r,driver:o,name:ti[o].name,s:h,lane:c?gu:-gu,speed:0,steer:0,lap:1,place:r+1,coins:0,item:null,boost:0,hit:0,drift:0,drifting:!1,finished:!1,finishTime:0,heading:0,laneVel:0,invuln:0,railCd:0,railEventCd:0,padCd:0,prevS:h,gate:0,driftDir:0,spin:0,spinRate:0,skill:r===0?1:.955+this.rnd()*.05,cornerGuard:r===0?1:.9+this.rnd()*.07,aiHold:0,aiWait:0,aiThrottle:!0,aiTick:-1,dodge:0,dodgeT:0,dodgeCd:0,wander:this.rnd()*Math.PI*2,ctl:{throttle:!1,brake:!1,steer:0,drift:!1}})}this.rx=s,this.state={racers:s,pickups:this.buildPickups(),shots:[],time:0,countdown:Sx,phase:"countdown",events:[]},this.rank()}update(t,e){const n=this.state;if(n.events.length=0,!(t>0))return;t=Math.min(t,.1);const s=e||yx;n.phase!=="countdown"&&(s.reset&&!this.prevReset&&this.resetPlayer(),s.fire&&!this.prevFire&&this.useItem(0)),this.prevFire=!!s.fire,this.prevReset=!!s.reset;const r=Math.max(1,Math.ceil(t/(1/50))),o=t/r;for(let a=0;a<r;a++)this.step(o,s);n.time=n.phase==="finished"?this.playerFinish:this.clock,this.rank()}useItem(t){const e=this.rx[t];if(!e||e.finished||!e.item||e.hit>0||this.state.phase==="countdown")return;const n=e.item;e.item=null,e.aiWait=0,n==="rocket"?this.state.shots.push({id:this.nextShotId++,kind:"rocket",owner:e.id,s:e.s+3,lane:e.lane,life:ax,target:this.targetAhead(e)}):n==="mine"?this.state.shots.push({id:this.nextShotId++,kind:"mine",owner:e.id,s:e.s-fx,lane:Oe(e.lane,-Un+.5,Un-.5),life:dx,target:-1}):this.boost(e,nx,6),this.evt("fire",e)}resetPlayer(){const t=this.rx[0];!t||t.finished||this.state.phase==="finished"||(t.lane=Oe(t.lane,-os+1,os-1),t.laneVel=0,t.speed=Math.max(t.speed,8),t.steer=0,t.drifting=!1,t.drift=0,t.driftDir=0,t.hit=0,t.spin=0,t.spinRate=0,t.invuln=Math.max(t.invuln,1.2))}step(t,e){const n=this.state;if(n.phase==="countdown"){n.countdown-=t,n.countdown<=0&&(n.countdown=0,n.phase="racing",this.clock=0);for(const s of this.rx)s.speed=0,s.steer*=.8,s.laneVel*=.8,s.heading*=.8,s.ctl.steer=0,s.ctl.throttle=!1,s.ctl.brake=!1,s.ctl.drift=!1;return}this.clock+=t;for(const s of this.rx)this.control(s,t,e),this.drive(s,t),this.checkpoints(s,t),this.flags(s,t);this.shots(t),this.collide(),this.pickupTimers(t)}control(t,e,n){const s=t.ctl;if(t.finished){s.throttle=!0,s.brake=!1,s.drift=!1,s.steer=Oe(((t.id%2?2.2:-2.2)-t.lane)*.5-t.laneVel*.08,-1,1);return}if(t.id===0&&!this.autopilot){s.throttle=!!n.throttle,s.brake=!!n.brake,s.drift=!!n.drift,s.steer=(n.left?1:0)-(n.right?1:0);return}const r=Math.floor(this.clock/_u);t.aiTick!==r&&(t.aiTick=r,this.brain(t,_u))}brain(t,e){const n=t.ctl,s=this.vmax(t),r=this.kappaAt(t.s);if(t.hit>0){n.drift=!1,n.brake=!1,n.throttle=!0,n.steer=Oe(-r*t.speed*t.speed/Tr,-.6,.6);return}let o=-Math.sign(r)*Math.min(1.5,Math.abs(r)*16);o+=Math.sin(t.s*.021+t.wander)*.5;const a=t.s-Math.floor(t.s/$t)*$t;let l=1e9,c=0;for(const d of this.state.pickups){if(!d.active||(d.kind==="coin"?t.coins>=ja:t.item))continue;let g=d.s-a;g<0&&(g+=$t),!(g<1||g>55||g>=l)&&(l=g,c=d.lane)}if(l<1e9&&(o=o*.35+c*.65),t.dodgeCd>0&&(t.dodgeCd-=e),t.dodgeT>0)t.dodgeT-=e,o+=t.dodge*3.2;else if(t.dodgeCd<=0)for(const d of this.state.shots){if(d.owner===t.id)continue;const g=d.s-t.s;if(!(g<-6||g>45)&&!(Math.abs(d.lane-t.lane)>2.7)){t.dodgeCd=1.3,this.rnd()<.35+t.skill*.4&&(t.dodge=Math.sign(t.lane-d.lane)||(t.wander>3?1:-1),t.dodgeT=.85,o+=t.dodge*3.2);break}}for(const d of this.rx){if(d===t)continue;const g=d.s-t.s;if(g<.5||g>9)continue;const y=d.lane-t.lane;if(!(Math.abs(y)>2.2)){o-=(y>=0?1:-1)*(2.4-g*.2);break}}o=Oe(o,-os+.6,os-.6);const h=Oe(r*t.speed*t.speed/Tr,-1,1);n.steer=Oe(h*.94+(o-t.lane)*.42-t.laneVel*.11,-1,1);const u=this.cornerSpeed(t.s,Math.max(t.speed,12),t.cornerGuard);t.speed>u*1.02?(n.brake=!0,n.throttle=!1,t.aiThrottle=!1):t.speed<u*.97?(n.brake=!1,n.throttle=!0,t.aiThrottle=!0):(n.brake=!1,n.throttle=t.aiThrottle),t.speed<3&&(n.throttle=!0);const p=this.kappaAt(t.s+Math.max(6,t.speed*.35));t.drifting?n.drift=n.steer*t.driftDir>=.15&&Math.abs(p)>.02&&t.drift<Qa&&t.speed>hu*.7:n.drift=Math.abs(p)>.045&&t.speed>26&&Math.abs(n.steer)>.3,t.item?t.aiHold>0?t.aiHold-=e:(t.aiWait+=e,this.aiUseItem(t,s,u)):(t.aiHold=0,t.aiWait=0)}aiUseItem(t,e,n){const s=t.item;if(s){if(s==="rocket"){(this.targetAhead(t)>=0||t.aiWait>3.5)&&this.useItem(t.id);return}if(s==="mine"){for(const r of this.rx){if(r===t||r.finished)continue;const o=r.s-t.s;if(!(o<-55||o>-4)&&!(Math.abs(r.lane-t.lane)>4)){this.useItem(t.id);return}}t.aiWait>4.5&&this.useItem(t.id);return}t.boost<=0&&n>=t.speed*1.02&&n>=e*.9?this.useItem(t.id):t.aiWait>3.5&&this.useItem(t.id)}}drive(t,e){const n=t.ctl,s=this.kappaAt(t.s),r=this.vmax(t),o=Math.abs(t.lane)>os,a=t.hit>0?.35+.65*(1-t.hit/tl):1;t.steer=Oe(t.steer+(n.steer-t.steer)*Math.min(1,kv*e),-1,1);let l=0;if(n.brake)l-=Fv;else if(n.throttle){const p=t.boost>0?Qv:1;l+=Uv*p*(1-Nv*Oe(t.speed/Math.max(r,1),0,1))}else l-=Ov;o&&(l-=Xv),!n.brake&&t.speed<4&&(Math.abs(t.lane)>os-.5||t.railCd>0)&&(l=Math.max(l,Bv));const c=Tr*(t.drifting?zv/Tr:1),h=Math.abs(s)*t.speed*t.speed;h>c&&(l-=(h-c)*Vv),t.speed=Oe(t.speed+l*e,0,r);const u=t.steer*c*Oe(.35+t.speed/22,.35,1)*(o?qv:1)*a-s*t.speed*t.speed;if(t.laneVel=(t.laneVel+u*e)*Math.exp(-(t.drifting?Gv:Hv)*e),t.laneVel=Oe(t.laneVel,-cu,cu),t.lane+=t.laneVel*e,t.railCd>0&&(t.railCd-=e),t.railEventCd>0&&(t.railEventCd-=e),t.lane>Un||t.lane<-Un){const p=Math.abs(t.laneVel);t.lane=(t.lane>Un?1:-1)*(Un-.04),t.laneVel=-t.laneVel*Yv,t.railCd<=0&&(t.railCd=Kv,t.speed*=$v,p>2.5&&t.railEventCd<=0&&(t.railEventCd=Jv,this.evt("hit",t)))}if(t.prevS=t.s,t.s+=t.speed*e,!t.finished){if(t.padCd>0&&(t.padCd-=e),t.padCd<=0){const p=Math.floor(t.s/$t)*$t;for(const d of this.pads){const g=p+d;if(!(g<t.prevS-1||g>t.s+1)){t.padCd=ex,this.boost(t,tx,5);break}}}this.collect(t)}}flags(t,e){t.boost>0&&(t.boost=Math.max(0,t.boost-e)),t.invuln>0&&(t.invuln=Math.max(0,t.invuln-e));const n=t.ctl.drift&&Math.abs(t.steer)>.22&&t.speed>hu&&t.hit<=0&&!t.finished;if(!t.drifting&&n&&(t.drifting=!0,t.driftDir=Math.sign(t.steer)||1,t.drift=0),t.drifting)if(n)Math.sign(t.steer)!==t.driftDir?(t.driftDir=Math.sign(t.steer)||t.driftDir,t.drift=0):t.drift=Math.min(t.drift+e,Qa);else{const r=t.drift;t.drifting=!1,t.drift=0,r>=uu&&(this.evt("drift",t),this.boost(t,Oe(.5+(r-uu)*.55,.5,1.5),3))}t.hit>0?(t.hit=Math.max(0,t.hit-e),t.spin+=t.spinRate*e,t.spinRate*=Math.exp(-2.4*e),t.drifting&&(t.drifting=!1,t.drift=0)):(t.spin+=(0-t.spin)*Math.min(1,6*e),t.spinRate*=Math.exp(-4*e));let s=t.steer*.15*Oe(t.speed/40,0,1);t.drifting&&(s=t.driftDir*(.28+.22*(t.drift/Qa))*Oe(t.speed/30,.25,1.1),t.hit>0&&(s*=.35)),t.heading+=(s+t.spin-t.heading)*Math.min(1,9*e)}checkpoints(t,e){if(t.finished)return;const n=Ja*Cr;let s=0;for(;t.gate<n&&s++<2;){const r=(t.gate+1)*lu;if(!(t.prevS<r&&t.s>=r))break;if(t.gate++,t.gate>=n){this.finish(t,e);return}t.gate%Cr===0&&(t.lap=t.gate/Cr+1,this.evt("lap",t))}}finish(t,e){const n=Ja*$t,s=t.s-t.prevS,r=s>1e-6?Oe((n-t.prevS)/s,0,1):1;t.finished=!0,t.finishTime=this.clock-e+e*r,t.speed*=.65,t.drifting=!1,t.drift=0,t.boost=0,t.hit=0,this.evt("finish",t),t.id===0&&this.state.phase==="racing"&&(this.state.phase="finished",this.playerFinish=t.finishTime,this.state.time=t.finishTime)}boost(t,e,n){t.boost=Math.max(t.boost,e),t.speed=Math.min(t.speed+n,Za*1.7),this.evt("boost",t)}hit(t,e){t.hit=tl,t.invuln=ix,t.spinRate=e*sx,t.speed*=rx,t.drifting=!1,t.drift=0,this.evt("hit",t)}targetAhead(t){let e=-1,n=lx;for(const s of this.rx){if(s===t||s.finished)continue;const r=s.s-t.s;r<cx||r>n||(n=r,e=s.id)}return e}shots(t){const e=this.state.shots;for(let n=e.length-1;n>=0;n--){const s=e[n];if(s.life-=t,s.kind==="rocket"){s.s+=ox*t;const o=this.rx[s.target];if(o&&!o.finished){const a=o.lane-s.lane;s.lane+=Oe(a,-du*t,du*t)}}s.lane=Oe(s.lane,-Un,Un);let r=s.life<=0;if(!r){const o=s.kind==="rocket"?hx:px,a=s.kind==="rocket"?ux:mx;for(const l of this.rx)if(!(l.id===s.owner||l.finished||l.invuln>0)&&!(s.s<l.prevS-o||s.s>l.s+o)&&!(Math.abs(l.lane-s.lane)>=a)){this.hit(l,l.wander>Math.PI?1:-1),r=!0;break}}r&&e.splice(n,1)}}collide(){const t=this.rx;for(let e=0;e<t.length;e++)for(let n=e+1;n<t.length;n++){const s=t[e],r=t[n],o=r.s-s.s;if(o>pu||o<-pu)continue;const a=r.lane-s.lane,l=Math.abs(a);if(l>=mu)continue;const c=a>=0?1:-1,h=(mu-l)*.5+.05;s.lane-=c*h,r.lane+=c*h,s.laneVel-=c*3.4,r.laneVel+=c*3.4;const u=(s.speed+r.speed)*.5;s.speed=s.speed*.97+u*.03,r.speed=r.speed*.97+u*.03,s.lane=Oe(s.lane,-Un,Un),r.lane=Oe(r.lane,-Un,Un)}}collect(t){const e=Math.floor(t.s/$t)*$t;for(const n of this.state.pickups){if(!n.active)continue;const s=e+n.s;s<t.prevS-fu||s>t.s+fu||Math.abs(n.lane-t.lane)>vx||n.kind==="box"&&t.item||(n.active=!1,n.respawn=n.kind==="coin"?gx:_x,n.kind==="coin"?t.coins=Math.min(t.coins+1,ja):(t.item=el[Math.floor(this.rnd()*el.length)%el.length],t.aiHold=.3+this.rnd()*1,t.aiWait=0),this.evt("pickup",t))}}pickupTimers(t){for(const e of this.state.pickups)e.active||(e.respawn-=t,e.respawn<=0&&(e.respawn=0,e.active=!0))}buildPickups(){const t=[],e=[-4.6,-2.3,0,2.3,4.6];for(let n=0;n<Cr;n++){const s=(n+.55)*lu,r=e[Math.floor(this.rnd()*e.length)%e.length];for(let o=0;o<5;o++){const a=s+o*3.4;this.pads.some(l=>Math.abs(l-a)<3)||t.push({id:this.nextPickupId++,s:a,lane:r,kind:"coin",active:!0,respawn:0})}}for(let n=0;n<4;n++){const s=(n+.72)*($t/4);if(!this.pads.some(r=>Math.abs(r-s)<3))for(const r of[-3.1,0,3.1])t.push({id:this.nextPickupId++,s,lane:r,kind:"box",active:!0,respawn:0})}return t}vmax(t){let e=Za*(1+Lv*Math.min(t.coins,ja))*t.skill*(1+this.band(t));return t.boost>0&&(e*=jv),t.drifting&&(e*=Zv),Math.abs(t.lane)>os&&(e*=Wv),t.hit>0&&(e*=.45+.55*(1-t.hit/tl)),t.finished&&(e*=.42),e}cornerSpeed(t,e,n){const s=20+e*.6;let r=1e9;for(let o=0;o<=s;o+=this.kGrid){const a=Math.abs(this.kappaAt(t+o));if(a<1e-4)continue;const l=Math.sqrt(Tr*n/a);l<r&&(r=l)}return r>1e8?Za*1.35:r}band(t){return t.id===0||t.finished?0:Oe((this.rx[0].s-t.s)*.0011,-.065,.065)}static ahead(t,e){return t.finished!==e.finished?t.finished:t.finished?t.finishTime<e.finishTime:t.s>e.s||t.s===e.s&&t.id<e.id}rank(){const t=this.order;t.length=0;for(const s of this.rx){t.push(s);for(let r=t.length-1;r>0&&xc.ahead(t[r],t[r-1]);r--){const o=t[r];t[r]=t[r-1],t[r-1]=o}}const e=Ja*$t;let n=0;for(let s=0;s<t.length;s++){const r=t[s];if(r.place=s+1,r.finished){n=Math.max(n,r.finishTime);continue}r.finishTime=Math.max(this.clock+(e-r.s)/Math.max(r.speed,12),n+.05),n=r.finishTime}}evt(t,e){this.state.events.push({type:t,racer:e.id,s:e.s,lane:e.lane})}kappaAt(t){const e=this.kappa.length,n=cd(t)/this.kGrid,s=Math.floor(n)%e,r=(s+1)%e,o=n-Math.floor(n);return this.kappa[s]*(1-o)+this.kappa[r]*o}debugAutopilot(t){this.autopilot=!!t}debugSummary(){return{phase:this.state.phase,time:this.state.time,countdown:this.state.countdown,shots:this.state.shots.length,pickupsActive:this.state.pickups.filter(t=>t.active).length,pickupsTotal:this.state.pickups.length,racers:this.rx.map(t=>({id:t.id,name:t.name,s:t.s,lane:t.lane,speed:t.speed,lap:t.lap,gate:t.gate,place:t.place,coins:t.coins,item:t.item,boost:t.boost,hit:t.hit,drift:t.drift,drifting:t.drifting,heading:t.heading,finished:t.finished,finishTime:t.finishTime}))}}}function Tx(i){const t=Math.max(8,Math.round($t/i)),e=new Float32Array(t),n=$t/t,s=2;for(let r=0;r<t;r++){const o=r*n,a=Gi(o),l=Gi(o+s);e[r]=((l.tangent.x-a.tangent.x)*a.right.x+(l.tangent.z-a.tangent.z)*a.right.z)/s}return e}class bx{ctx=null;gain=null;engine=null;engineGain=null;muted=!1;volume=.35;lastBeat=-1;start(){if(!this.ctx){this.ctx=new AudioContext,this.gain=this.ctx.createGain(),this.gain.gain.value=this.volume,this.gain.connect(this.ctx.destination),this.engine=this.ctx.createOscillator(),this.engine.type="sawtooth",this.engineGain=this.ctx.createGain(),this.engineGain.gain.value=.018;const t=this.ctx.createBiquadFilter();t.type="lowpass",t.frequency.value=420,this.engine.connect(t),t.connect(this.engineGain),this.engineGain.connect(this.gain),this.engine.start()}this.ctx.resume()}tone(t,e=.15,n="sine",s=.12,r){if(!this.ctx||!this.gain)return;const o=this.ctx.currentTime,a=this.ctx.createOscillator(),l=this.ctx.createGain();a.type=n,a.frequency.setValueAtTime(t,o),r&&a.frequency.exponentialRampToValueAtTime(r,o+e),l.gain.setValueAtTime(s,o),l.gain.exponentialRampToValueAtTime(.001,o+e),a.connect(l),l.connect(this.gain),a.start(o),a.stop(o+e),a.onended=()=>{a.disconnect(),l.disconnect()}}event(t){t==="hit"?this.tone(110,.4,"sawtooth",.15,30):t==="boost"||t==="drift"?this.tone(160,.5,"triangle",.18,1100):t==="pickup"?(this.tone(880,.12),setTimeout(()=>this.tone(1320,.15),65)):t==="fire"?this.tone(550,.25,"square",.05,80):(t==="lap"||t==="finish")&&[523,659,784,1046].forEach((e,n)=>setTimeout(()=>this.tone(e,.3,"triangle"),n*110))}update(t,e,n){if(!this.ctx)return;this.engine?.frequency.setTargetAtTime(45+t*2.6,this.ctx.currentTime,.12),this.engineGain?.gain.setTargetAtTime(n?.017:0,this.ctx.currentTime,.12);const s=Math.floor(e*2.6);if(n&&s!==this.lastBeat){this.lastBeat=s;const r=[130.81,164.81,196,164.81,110,130.81,164.81,196];this.tone(r[s%8],.18,"triangle",.045),s%2===0&&this.tone(65,.12,"sine",.11,30)}}setVolume(t){this.volume=t,this.gain&&(this.gain.gain.value=this.muted?0:t)}toggle(){return this.muted=!this.muted,this.setVolume(this.volume),this.muted}}const wx=document.querySelector("#app");wx.innerHTML=`
<section id="selection" class="screen"><div class="selection-shade"></div><header class="topbar"><div class="brand"><i></i>LUMEN RALLY</div><div class="toolbar"><span class="pill">THE AETHER CUP • 01</span><button class="icon-button mute">SOUND ON</button><button class="icon-button quality">QUALITY HIGH</button></div></header>
<div class="hero"><div class="eyebrow">Six dreamers. One sky-high showdown.</div><h1>LUMEN<br><span>RALLY</span></h1><div class="tagline">CHASE THE LIGHT</div><p class="description">Drift above the clouds. Bottle a little starlight.<br>Leave your rivals somewhere in the sunset.</p></div><div class="route-note"><div class="eyebrow">Your destination</div><b>AETHER ATOLL</b><small>3 LAPS &nbsp; / &nbsp; 6 RACERS &nbsp; / &nbsp; NO LIMITS</small></div><div class="showcase-label"><span id="driver-title">THE STAR COURIER</span><strong id="driver-name">NOVA / 01</strong></div>
<div class="select-panel"><div class="select-left"><div class="select-label"><span>01 &nbsp; CHOOSE YOUR DRIVER</span><span>ALL HEART. SAME HORSEPOWER.</span></div><div class="drivers">${ti.slice(0,4).map((i,t)=>`<button class="driver ${t===0?"active":""}" data-driver="${t}"><span class="swatch" style="background:#${i.color.toString(16).padStart(6,"0")}"></span><span class="num">0${t+1}</span><b>${i.name}</b><small>${i.title}</small></button>`).join("")}</div></div><div class="start-wrap"><button id="start" class="primary">LET’S RACE &nbsp; ↗</button><small>WASD TO DRIVE &nbsp; · &nbsp; SHIFT TO DRIFT</small></div></div><div class="bottomline"><span>ORIGINAL WORLDS / GOOD-NATURED CHAOS</span><span>DESKTOP EXPERIENCE &nbsp; • &nbsp; WEBGL</span></div></section>
<section id="race-ui" class="screen hidden"><div class="race-vignette"></div><div id="boost-vignette" class="boost-vignette"></div><div class="race-top"><div class="race-stat"><div class="position"><strong id="position">6</strong><span>/ 6</span></div><div class="race-timing"><div><div class="stat-label">LAP</div><b id="lap">1 / 3</b></div><div><div class="stat-label">RACE TIME</div><b id="timer">00:00.00</b></div></div></div><div class="hud-right"><div class="pill">AETHER ATOLL</div><button id="item-slot" class="item-slot"><div id="item-symbol" class="symbol">◇</div><small id="item-name">FIND AN ITEM</small></button></div></div><div id="countdown" class="countdown"></div><div id="toast" class="toast"></div><div class="speedometer"><div><div class="speed-number" id="speed">0</div><div class="speed-unit">KM / H</div></div><div><div class="energy" id="energy">◈ 00 / 10 &nbsp; +0% SPEED</div><div class="charge"><i id="charge"></i></div><div class="charge-label" id="charge-label">HOLD SHIFT + TURN TO CHARGE</div></div></div><div class="minimap-wrap"><canvas id="minimap" width="360" height="270"></canvas><small>THE AETHER CIRCUIT</small></div><div class="race-controls"><span><b class="key">WASD / ↑↓←→</b> DRIVE</span><span><b class="key">SHIFT</b> DRIFT</span><span><b class="key">SPACE</b> ITEM</span><span><b class="key">R</b> RECOVER</span><div class="toolbar"><button class="icon-button mute">SOUND ON</button><button id="pause-button" class="icon-button">ESC &nbsp; PAUSE</button></div></div></section>
<section id="pause" class="screen modal-shade hidden"><div class="modal"><div class="eyebrow">Take a breath</div><h2>SKY BREAK</h2><p>W / ↑ accelerates · S / ↓ brakes<br>A D / ← → steer · Shift + turn charges a drift<br>Release Shift for a mini-turbo · Space fires your item<br>Collect up to 10 energy shards for +10% top speed.</p><button id="resume" class="primary">BACK TO THE LIGHT</button><div class="volume">VOLUME <input id="volume" type="range" min="0" max="1" step="0.01" value="0.35"></div><button id="quit" class="secondary">RETURN TO DRIVER SELECT</button></div></section>
<section id="results" class="screen modal-shade hidden"><div class="modal"><div class="eyebrow">The Aether Cup / Race complete</div><h2 id="result-title">LIGHTS OUT!</h2><p id="result-subtitle"></p><div id="results-list" class="results-list"></div><button id="restart" class="primary">ONE MORE LAP? &nbsp; ↗</button><button id="back" class="secondary">CHANGE DRIVER</button></div></section>`;const ae=i=>document.getElementById(i),On=new Kf;On.background=new dt(14722191);On.fog=new uc(14722191,.0016);const vn=new lv({antialias:!0,powerPreference:"high-performance"});vn.domElement.className="webgl";document.body.prepend(vn.domElement);vn.setPixelRatio(Math.min(devicePixelRatio,1.7));vn.setSize(innerWidth,innerHeight);vn.shadowMap.enabled=!0;vn.shadowMap.type=Eu;vn.toneMapping=tc;vn.toneMappingExposure=1;vn.outputColorSpace=gn;const ln=new Nn(54,innerWidth/innerHeight,.15,1800);On.add(new Sp(14020607,6313860,1.8));const ii=new nd(16766624,2.8);ii.position.set(-70,150,60);ii.castShadow=!0;ii.shadow.mapSize.set(2048,2048);ii.shadow.camera.left=-180;ii.shadow.camera.right=180;ii.shadow.camera.top=180;ii.shadow.camera.bottom=-180;ii.shadow.camera.far=450;ii.shadow.normalBias=.045;On.add(ii);const fd=new nd(10349055,1.2);fd.position.set(100,45,-80);On.add(fd);const ms=new pv(vn);ms.addPass(new mv(On,ln));const pd=new tr(new At(innerWidth,innerHeight),.32,.45,1.15);ms.addPass(pd);ms.addPass(new _v);const md=xv(On);let Oi=0,Rn="select",Ue=null,Cn=!1,wn=0,vu=performance.now(),Mc=0,Kl=0,as=!0;const ni=new bx,yi={throttle:!1,brake:!1,left:!1,right:!1,drift:!1,fire:!1,reset:!1},$o=new Set,Kr=()=>{$o.clear();for(const i of Object.keys(yi))yi[i]=!1},Ki=new Ie;On.add(Ki);let ki=vc(0);Ki.add(ki);const Sc=new Mt(new sr(5.3,5.9,.65,64),new jt({color:1587028,metalness:.55,roughness:.35}));Sc.position.y=-.5;Sc.receiveShadow=!0;Ki.add(Sc);const yc=new Mt(new qi(5.15,.065,8,96),new jt({color:8060896,emissive:4447674,emissiveIntensity:2}));yc.rotation.x=Math.PI/2;yc.position.y=-.15;Ki.add(yc);Ki.position.set(18,38,67);ki.scale.setScalar(2.4);let Ko=[];const gs=new Ie;On.add(gs);const Ec=new Map,Pr=new Map,gd=new jt({color:16766817,emissive:16758062,emissiveIntensity:.9,metalness:.7,roughness:.22}),Ax=new jt({color:9371619,emissive:3660243,emissiveIntensity:1.2,metalness:.3,roughness:.18,transparent:!0,opacity:.82}),Rx=new ta(.58),Cx=new Yr(.9,0),xu=new qi(1.08,.045,5,24),Jl=new He({color:15532031}),Px=new Xr(.36,1.4,8),Dx=new jt({color:16752854,emissive:16730006,emissiveIntensity:1.5}),Ix=new qi(.55,.06,6,20),Lx=new Yr(.72,0),Ux=new jt({color:16734344,emissive:15669597,emissiveIntensity:.9}),Nx=new qi(1,.08,6,24);function _d(){for(const i of Ko)dd(i);for(const i of[...gs.children])gs.remove(i);Ko=[],Ec.clear(),Pr.clear();for(const i of Jo)i.visible=!1;Nr.fill(0),Vi.fill(-999)}function ia(){ni.start(),Kr(),_d(),Ue=new xc(Oi),Rn="race",Cn=!1,Ki.visible=!1,ae("selection").classList.add("hidden"),ae("results").classList.add("hidden"),ae("pause").classList.add("hidden"),ae("race-ui").classList.remove("hidden");for(const e of Ue.state.racers){const n=vc(e.driver);gs.add(n),Ko.push(n)}for(const e of Ue.state.pickups){const n=new Ie,s=new Mt(e.kind==="coin"?Rx:Cx,e.kind==="coin"?gd:Ax);if(n.add(s),e.kind==="box"){const r=new Mt(xu,Jl);r.rotation.x=.8,n.add(r);const o=new Mt(xu,Jl);o.rotation.y=.8,n.add(o)}gs.add(n),Ec.set(e.id,n)}const i=Ue.state.racers[0],t=Gi(i.s);ln.position.copy(ce(i.s,i.lane)).addScaledVector(t.tangent,-12).add(new I(0,7,0)),ln.lookAt(ce(i.s+12,i.lane)),Kl=0,Mc=0}function Tc(){Kr(),Rn="select",Ue=null,Cn=!1,_d(),Ki.visible=!0;for(const i of["race-ui","results","pause"])ae(i).classList.add("hidden");ae("selection").classList.remove("hidden")}function lr(){Rn==="race"&&(Cn=!Cn,Kr(),ae("pause").classList.toggle("hidden",!Cn))}for(const i of document.querySelectorAll("[data-driver]"))i.onclick=()=>{Oi=Number(i.dataset.driver),dd(ki),ki=vc(Oi),ki.scale.setScalar(2.4),Ki.add(ki),document.querySelectorAll(".driver").forEach(t=>t.classList.toggle("active",t===i)),ae("driver-title").textContent=ti[Oi].title.toUpperCase(),ae("driver-name").textContent=`${ti[Oi].name} / 0${Oi+1}`,ni.start(),ni.tone(440+Oi*110,.15)};ae("start").onclick=ia;ae("restart").onclick=ia;ae("back").onclick=Tc;ae("quit").onclick=Tc;ae("resume").onclick=lr;ae("pause-button").onclick=lr;ae("item-slot").onclick=()=>{Cn||(yi.fire=!0)};for(const i of document.querySelectorAll(".mute"))i.onclick=()=>{ni.start();const t=ni.toggle();document.querySelectorAll(".mute").forEach(e=>e.textContent=t?"SOUND OFF":"SOUND ON")};ae("volume").oninput=i=>ni.setVolume(Number(i.target.value));for(const i of document.querySelectorAll(".quality"))i.onclick=()=>{as=!as;const t=Math.min(devicePixelRatio,as?1.7:.6);vn.setPixelRatio(t),ms.setPixelRatio(t),vn.shadowMap.enabled=as,pd.enabled=as,md.setQuality(as),ms.setSize(innerWidth,innerHeight),i.textContent=as?"QUALITY HIGH":"QUALITY LOW"};const Gs={KeyW:"throttle",ArrowUp:"throttle",KeyS:"brake",ArrowDown:"brake",KeyA:"left",ArrowLeft:"left",KeyD:"right",ArrowRight:"right",ShiftLeft:"drift",ShiftRight:"drift",Space:"fire",KeyR:"reset"};window.addEventListener("keydown",i=>{(i.code in Gs||i.code==="Escape")&&i.preventDefault(),i.code==="Escape"&&!i.repeat&&lr(),i.code==="Enter"&&Rn==="select"&&ia(),Rn==="race"&&!Cn&&Gs[i.code]&&(!i.repeat||!["fire","reset"].includes(Gs[i.code]))&&($o.add(i.code),yi[Gs[i.code]]=!0)});window.addEventListener("keyup",i=>{$o.delete(i.code);const t=Gs[i.code];t&&t!=="fire"&&t!=="reset"&&(yi[t]=[...$o].some(e=>Gs[e]===t))});window.addEventListener("blur",()=>{Kr(),Rn==="race"&&!Cn&&lr()});document.addEventListener("visibilitychange",()=>{document.hidden&&Rn==="race"&&!Cn&&lr()});window.addEventListener("resize",()=>{ln.aspect=innerWidth/innerHeight,ln.updateProjectionMatrix(),vn.setSize(innerWidth,innerHeight),ms.setSize(innerWidth,innerHeight)});const cr=550,Vi=new Float32Array(cr*3),Vo=new Float32Array(cr*3),Nr=new Float32Array(cr),Fr=new Float32Array(cr*3);Vi.fill(-999);const Wr=new Fe;Wr.setAttribute("position",new $e(Vi,3));Wr.setAttribute("color",new $e(Vo,3));const vd=new Ju(Wr,new Ku({size:.23,vertexColors:!0,transparent:!0,opacity:.85,blending:qn,depthWrite:!1}));vd.frustumCulled=!1;On.add(vd);let Fx=0;function qs(i,t,e,n=3){const s=new dt(t);for(let r=0;r<e;r++){const o=Fx++%cr;Nr[o]=.3+Math.random()*.65,Vi[o*3]=i.x,Vi[o*3+1]=i.y+.6,Vi[o*3+2]=i.z,Vo[o*3]=s.r,Vo[o*3+1]=s.g,Vo[o*3+2]=s.b,Fr[o*3]=(Math.random()-.5)*n,Fr[o*3+1]=Math.random()*n,Fr[o*3+2]=(Math.random()-.5)*n}}function Ox(i){for(let t=0;t<cr;t++)if(Nr[t]>0){Nr[t]-=i;for(let e=0;e<3;e++)Vi[t*3+e]+=Fr[t*3+e]*i;Fr[t*3+1]-=i*3,Nr[t]<=0&&(Vi[t*3+1]=-999)}Wr.attributes.position.needsUpdate=!0,Wr.attributes.color.needsUpdate=!0}const Bx=new Fn(.16,1.5),zx=new He({color:1515835,transparent:!0,opacity:.48,depthWrite:!1,side:Le}),Jo=[];let kx=0;for(let i=0;i<160;i++){const t=new Mt(Bx,zx);t.visible=!1,On.add(t),Jo.push(t)}let nl=0;function il(i){ae("toast").textContent=i,Mc=wn+1.9}function Hx(i){const t=ce(i.s,i.lane);i.type==="hit"&&qs(t,16747909,28,11),i.type==="pickup"&&qs(t,16767589,12,5),(i.type==="boost"||i.type==="drift")&&qs(t,6619106,18,6),i.racer===0&&(ni.event(i.type),i.type==="hit"&&il("OUCH! BACK IN THE RACE"),i.type==="drift"&&il("MINI-TURBO!"),i.type==="lap"&&il("NEXT LAP • KEEP GLOWING"))}function Zl(i){return`${Math.floor(i/60).toString().padStart(2,"0")}:${(i%60).toFixed(2).padStart(5,"0")}`}const Gx=ae("minimap"),Vx=Gx.getContext("2d"),Mu=Array.from({length:180},(i,t)=>ce(t/180*$t)),Lo=i=>30+(i+153)/280*300,Uo=i=>20+(i+100)/220*220;function Wx(){const i=Vx;i.clearRect(0,0,360,270),i.beginPath(),Mu.forEach((e,n)=>n?i.lineTo(Lo(e.x),Uo(e.z)):i.moveTo(Lo(e.x),Uo(e.z))),i.closePath(),i.strokeStyle="#52657e",i.lineWidth=11,i.lineJoin="round",i.stroke(),i.strokeStyle="#adcfd366",i.lineWidth=2,i.stroke();const t=Mu[0];if(i.fillStyle="#ffd278",i.fillRect(Lo(t.x)-4,Uo(t.z)-7,8,14),Ue)for(const e of[...Ue.state.racers].reverse()){const n=ce(e.s,e.lane);i.beginPath(),i.arc(Lo(n.x),Uo(n.z),e.id===0?7:4.5,0,Math.PI*2),i.fillStyle=e.id===0?"#ffffff":`#${ti[e.driver].color.toString(16).padStart(6,"0")}`,i.fill(),e.id===0&&(i.strokeStyle="#8affdf",i.lineWidth=3,i.stroke())}}function Xx(){if(!Ue||Rn==="results")return;Rn="results",Kr(),ae("results").classList.remove("hidden");const i=Ue.state.racers[0];ae("result-title").textContent=i.place===1?"PURE STARLIGHT!":"WHAT A RIDE!",ae("result-subtitle").textContent=`${i.place===1?"Aether Cup champion":`You placed ${i.place} of 6`} · ${Zl(i.finishTime||Ue.state.time)} · ${i.coins} energy collected`,ae("results-list").innerHTML=[...Ue.state.racers].sort((t,e)=>t.place-e.place).map(t=>`<div class="result-row ${t.id===0?"me":""}"><b>0${t.place}</b><span>${t.name}${t.id===0?" · YOU":""}</span><span>${t.finished?Zl(t.finishTime):"ON TRACK"}</span></div>`).join(""),ni.event("finish")}let sl=0;const Su=new he,br=new I,rl=new I;function qx(i){if(!Ue)return;const t=Ue.state;for(const d of t.racers){const g=Ko[d.id],y=Gi(d.s);g.position.copy(ce(d.s,d.lane)),g.position.y+=.06,br.copy(y.right),br.y=Math.sin(y.bank),rl.crossVectors(y.tangent,br).normalize(),br.crossVectors(rl,y.tangent).normalize(),Su.makeBasis(br,rl,y.tangent),g.quaternion.setFromRotationMatrix(Su),g.rotateY(d.heading||0),ud(g,d.speed,d.steer,wn,d.drift,d.hit),d.hit>0&&g.rotateY(Math.sin(wn*22)*.25)}for(const d of t.pickups){const g=Ec.get(d.id);g&&(g.visible=d.active,d.active&&(g.position.copy(ce(d.s,d.lane)),g.position.y+=1.5+Math.sin(wn*2.5+d.id)*.2,g.rotation.y=wn*1.5+d.id,g.rotation.z=Math.sin(wn+d.id)*.15))}const e=new Set(t.shots.map(d=>d.id));for(const[d,g]of Pr)e.has(d)||(gs.remove(g),Pr.delete(d));for(const d of t.shots){let g=Pr.get(d.id);if(!g){if(g=new Ie,d.kind==="rocket"){const m=new Mt(Px,Dx);m.rotation.x=Math.PI/2,g.add(m),g.add(new Mt(Ix,Jl))}else{const m=new Mt(Lx,Ux);m.scale.y=.6,g.add(m);const f=new Mt(Nx,gd);f.rotation.x=Math.PI/2,g.add(f)}gs.add(g),Pr.set(d.id,g)}const y=Gi(d.s);g.position.copy(ce(d.s,d.lane)),g.position.y+=d.kind==="rocket"?1:.45,g.rotation.y=Math.atan2(y.tangent.x,y.tangent.z),d.kind==="rocket"&&i>0&&qs(g.position,16749004,1,2)}const n=t.racers[0],s=Gi(n.s),r=ce(n.s,n.lane),o=r.clone().addScaledVector(s.tangent,-10.5-n.speed*.045).add(new I(0,5.5+n.speed*.025,0));ln.position.lerp(o,1-Math.exp(-i*6));const a=ce(n.s+13,n.lane*.5).add(new I(0,1.7,0));ln.lookAt(a);const l=55+n.speed*.18+(n.boost>0?4:0);if(ln.fov=jo.lerp(ln.fov,l,1-Math.exp(-i*3)),ln.updateProjectionMatrix(),sl+=i,sl>.035&&n.speed>8){sl=0;const d=r.clone().addScaledVector(s.tangent,-1.7);if(qs(d,n.boost>0?8060892:n.drifting?16763237:10403020,n.boost>0?5:1,n.boost>0?3:1),n.drifting)for(const g of[-.85,.85])qs(ce(n.s-1.1,n.lane+g),n.drift>.7?6684641:16761707,2,3)}if(nl+=i,n.drifting&&n.speed>12&&nl>.055){nl=0;for(const d of[-.85,.85]){const g=Jo[kx++%Jo.length];g.visible=!0,g.position.copy(ce(n.s-1,n.lane+d)),g.position.y+=.035,g.rotation.set(-Math.PI/2,0,-Math.atan2(s.tangent.x,s.tangent.z))}}ae("position").textContent=String(n.place),ae("lap").textContent=`${Math.min(3,Math.max(1,n.lap))} / 3`,ae("timer").textContent=Zl(t.time),ae("speed").textContent=String(Math.round(n.speed*3.6)),ae("energy").textContent=`◈ ${String(n.coins).padStart(2,"0")} / 10  +${n.coins}% SPEED`,ae("charge").style.width=`${Math.min(100,n.drift/1.8*100)}%`,ae("charge-label").textContent=n.boost>0?"TURBO ACTIVE":n.drifting?n.drift>.7?"RELEASE SHIFT → MINI-TURBO":"CHARGING DRIFT":"HOLD SHIFT + TURN TO CHARGE",ae("boost-vignette").style.opacity=n.boost>0?"1":"0";const c=n.item,h={rocket:"➤",mine:"✹",boost:"ϟ"},u={rocket:"SEEKER · SPACE",mine:"STAR MINE · SPACE",boost:"SURGE · SPACE"};ae("item-symbol").textContent=c?h[c]:"◇",ae("item-name").textContent=c?u[c]:"FIND AN ITEM",ae("item-slot").classList.toggle("has-item",!!c);const p=t.countdown>0?Math.ceil(t.countdown):0;ae("countdown").textContent=p>0?p>3?"READY":String(p):t.time<.8?"GO!":"",p!==Kl&&(Kl=p,ni.tone(p?440:880,.15,"triangle",.2)),Wx(),t.phase==="finished"&&Xx()}function xd(i){const t=Math.min((i-vu)/1e3,.25);vu=i;const e=Cn?0:t;if(wn+=e,md.update(wn,e),Rn==="select"){const n=wn*.13;ki.rotation.y=.65+Math.sin(n)*.22,ud(ki,0,Math.sin(wn)*.05,wn,0,0);const s=new I(37,49,89);ln.position.lerp(s,1-Math.exp(-t*3)),ln.fov=50,ln.updateProjectionMatrix(),ln.lookAt(new I(9,39.5,66))}else if(Ue){if(Rn==="race"&&!Cn){let n=e;for(;n>1e-6&&Ue.state.phase!=="finished";){const s=Math.min(n,.016666666666666666);Ue.update(s,yi),yi.fire=!1,yi.reset=!1;for(const r of Ue.state.events)Hx(r);n-=s}}qx(e)}wn>Mc&&(ae("toast").textContent=""),Ox(e),ni.update(Ue?.state.racers[0].speed||0,wn,Rn==="race"&&!Cn&&Ue?.state.phase==="racing"),ms.render(),requestAnimationFrame(xd)}ln.position.set(37,49,89);requestAnimationFrame(xd);Object.assign(window,{__lumen:{get race(){return Ue},get mode(){return Rn},get paused(){return Cn},input:yi,start:ia,select:Tc,pause:lr,trackLength:$t,renderer:vn,scene:On,camera:ln,setDriver:i=>{Oi=i},snapshot:()=>Ue?JSON.parse(JSON.stringify(Ue.state)):null}});
