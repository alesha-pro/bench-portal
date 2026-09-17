(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const ol="180",$u=0,Wl=1,Ku=2,Ah=1,Ch=2,jn=3,ni=0,en=1,ye=2,Qn=0,Fi=1,Ne=2,Xl=3,ql=4,Ju=5,Pi=100,ju=101,Qu=102,tf=103,ef=104,nf=200,sf=201,rf=202,of=203,ha=204,ua=205,af=206,lf=207,cf=208,hf=209,uf=210,ff=211,df=212,pf=213,mf=214,fa=0,da=1,pa=2,gs=3,ma=4,ga=5,va=6,_a=7,Rh=0,gf=1,vf=2,mi=0,Ph=1,Dh=2,Lh=3,al=4,Ih=5,Uh=6,Nh=7,Fh=300,vs=301,_s=302,xa=303,Ma=304,co=306,no=1e3,fi=1001,ya=1002,$e=1003,_f=1004,vr=1005,wn=1006,_o=1007,di=1008,Vn=1009,zh=1010,Oh=1011,er=1012,ll=1013,Oi=1014,In=1015,ti=1016,cl=1017,hl=1018,nr=1020,Bh=35902,kh=35899,Hh=1021,Gh=1022,Un=1023,ir=1026,sr=1027,ho=1028,ul=1029,Vh=1030,fl=1031,dl=1033,$r=33776,Kr=33777,Jr=33778,jr=33779,Sa=35840,ba=35841,wa=35842,Ea=35843,Ta=36196,Aa=37492,Ca=37496,Ra=37808,Pa=37809,Da=37810,La=37811,Ia=37812,Ua=37813,Na=37814,Fa=37815,za=37816,Oa=37817,Ba=37818,ka=37819,Ha=37820,Ga=37821,Va=36492,Wa=36494,Xa=36495,qa=36283,Ya=36284,Za=36285,$a=36286,xf=3200,Mf=3201,Wh=0,yf=1,ui="",Ge="srgb",xs="srgb-linear",io="linear",oe="srgb",qi=7680,Yl=519,Sf=512,bf=513,wf=514,Xh=515,Ef=516,Tf=517,Af=518,Cf=519,Zl=35044,_r=35048,$l="300 es",kn=2e3,so=2001;class Ts{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Xe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xo=Math.PI/180,Ka=180/Math.PI;function As(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xe[i&255]+Xe[i>>8&255]+Xe[i>>16&255]+Xe[i>>24&255]+"-"+Xe[t&255]+Xe[t>>8&255]+"-"+Xe[t>>16&15|64]+Xe[t>>24&255]+"-"+Xe[e&63|128]+Xe[e>>8&255]+"-"+Xe[e>>16&255]+Xe[e>>24&255]+Xe[n&255]+Xe[n>>8&255]+Xe[n>>16&255]+Xe[n>>24&255]).toLowerCase()}function Kt(i,t,e){return Math.max(t,Math.min(e,i))}function Rf(i,t){return(i%t+t)%t}function Mo(i,t,e){return(1-e)*i+e*t}function Ls(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function an(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class pt{constructor(t=0,e=0){pt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class _i{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],f=n[s+3];const p=r[o+0],h=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f;return}if(a===1){t[e+0]=p,t[e+1]=h,t[e+2]=g,t[e+3]=x;return}if(f!==x||l!==p||c!==h||u!==g){let m=1-a;const d=l*p+c*h+u*g+f*x,M=d>=0?1:-1,_=1-d*d;if(_>Number.EPSILON){const w=Math.sqrt(_),b=Math.atan2(w,d*M);m=Math.sin(m*b)/w,a=Math.sin(a*b)/w}const v=a*M;if(l=l*m+p*v,c=c*m+h*v,u=u*m+g*v,f=f*m+x*v,m===1-a){const w=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=w,c*=w,u*=w,f*=w}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],f=r[o],p=r[o+1],h=r[o+2],g=r[o+3];return t[e]=a*g+u*f+l*h-c*p,t[e+1]=l*g+u*p+c*f-a*h,t[e+2]=c*g+u*h+a*p-l*f,t[e+3]=u*g-a*f-l*p-c*h,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),f=a(r/2),p=l(n/2),h=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=p*u*f+c*h*g,this._y=c*h*f-p*u*g,this._z=c*u*g+p*h*f,this._w=c*u*f-p*h*g;break;case"YXZ":this._x=p*u*f+c*h*g,this._y=c*h*f-p*u*g,this._z=c*u*g-p*h*f,this._w=c*u*f+p*h*g;break;case"ZXY":this._x=p*u*f-c*h*g,this._y=c*h*f+p*u*g,this._z=c*u*g+p*h*f,this._w=c*u*f-p*h*g;break;case"ZYX":this._x=p*u*f-c*h*g,this._y=c*h*f+p*u*g,this._z=c*u*g-p*h*f,this._w=c*u*f+p*h*g;break;case"YZX":this._x=p*u*f+c*h*g,this._y=c*h*f+p*u*g,this._z=c*u*g-p*h*f,this._w=c*u*f-p*h*g;break;case"XZY":this._x=p*u*f-c*h*g,this._y=c*h*f-p*u*g,this._z=c*u*g+p*h*f,this._w=c*u*f+p*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],f=e[10],p=n+a+f;if(p>0){const h=.5/Math.sqrt(p+1);this._w=.25/h,this._x=(u-l)*h,this._y=(r-c)*h,this._z=(o-s)*h}else if(n>a&&n>f){const h=2*Math.sqrt(1+n-a-f);this._w=(u-l)/h,this._x=.25*h,this._y=(s+o)/h,this._z=(r+c)/h}else if(a>f){const h=2*Math.sqrt(1+a-n-f);this._w=(r-c)/h,this._x=(s+o)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+f-n-a);this._w=(o-s)/h,this._x=(r+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Kt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const h=1-e;return this._w=h*o+e*this._w,this._x=h*n+e*this._x,this._y=h*s+e*this._y,this._z=h*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-e)*u)/c,p=Math.sin(e*u)/c;return this._w=o*f+this._w*p,this._x=n*f+this._x*p,this._y=s*f+this._y*p,this._z=r*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,e=0,n=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Kl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Kl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),u=2*(a*e-r*s),f=2*(r*n-o*e);return this.x=e+l*c+o*f-a*u,this.y=n+l*u+a*c-r*f,this.z=s+l*f+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return yo.copy(this).projectOnVector(t),this.sub(yo)}reflect(t){return this.sub(yo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const yo=new U,Kl=new _i;class Xt{constructor(t,e,n,s,r,o,a,l,c){Xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],p=n[2],h=n[5],g=n[8],x=s[0],m=s[3],d=s[6],M=s[1],_=s[4],v=s[7],w=s[2],b=s[5],T=s[8];return r[0]=o*x+a*M+l*w,r[3]=o*m+a*_+l*b,r[6]=o*d+a*v+l*T,r[1]=c*x+u*M+f*w,r[4]=c*m+u*_+f*b,r[7]=c*d+u*v+f*T,r[2]=p*x+h*M+g*w,r[5]=p*m+h*_+g*b,r[8]=p*d+h*v+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=u*o-a*c,p=a*l-u*r,h=c*r-o*l,g=e*f+n*p+s*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=f*x,t[1]=(s*c-u*n)*x,t[2]=(a*n-s*o)*x,t[3]=p*x,t[4]=(u*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=h*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(So.makeScale(t,e)),this}rotate(t){return this.premultiply(So.makeRotation(-t)),this}translate(t,e){return this.premultiply(So.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const So=new Xt;function qh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ro(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Pf(){const i=ro("canvas");return i.style.display="block",i}const Jl={};function rr(i){i in Jl||(Jl[i]=!0,console.warn(i))}function Df(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const jl=new Xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ql=new Xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Lf(){const i={enabled:!0,workingColorSpace:xs,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===oe&&(s.r=ei(s.r),s.g=ei(s.g),s.b=ei(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===oe&&(s.r=us(s.r),s.g=us(s.g),s.b=us(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ui?io:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return rr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return rr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[xs]:{primaries:t,whitePoint:n,transfer:io,toXYZ:jl,fromXYZ:Ql,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ge},outputColorSpaceConfig:{drawingBufferColorSpace:Ge}},[Ge]:{primaries:t,whitePoint:n,transfer:oe,toXYZ:jl,fromXYZ:Ql,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ge}}}),i}const te=Lf();function ei(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function us(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Yi;class If{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Yi===void 0&&(Yi=ro("canvas")),Yi.width=t.width,Yi.height=t.height;const s=Yi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Yi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ro("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ei(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ei(e[n]/255)*255):e[n]=ei(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Uf=0;class pl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Uf++}),this.uuid=As(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(bo(s[o].image)):r.push(bo(s[o]))}else r=bo(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function bo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?If.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Nf=0;const wo=new U;class Ke extends Ts{constructor(t=Ke.DEFAULT_IMAGE,e=Ke.DEFAULT_MAPPING,n=fi,s=fi,r=wn,o=di,a=Un,l=Vn,c=Ke.DEFAULT_ANISOTROPY,u=ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nf++}),this.uuid=As(),this.name="",this.source=new pl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(wo).x}get height(){return this.source.getSize(wo).y}get depth(){return this.source.getSize(wo).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Fh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case no:t.x=t.x-Math.floor(t.x);break;case fi:t.x=t.x<0?0:1;break;case ya:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case no:t.y=t.y-Math.floor(t.y);break;case fi:t.y=t.y<0?0:1;break;case ya:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ke.DEFAULT_IMAGE=null;Ke.DEFAULT_MAPPING=Fh;Ke.DEFAULT_ANISOTROPY=1;class le{constructor(t=0,e=0,n=0,s=1){le.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],u=l[4],f=l[8],p=l[1],h=l[5],g=l[9],x=l[2],m=l[6],d=l[10];if(Math.abs(u-p)<.01&&Math.abs(f-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+p)<.1&&Math.abs(f+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+h+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(c+1)/2,v=(h+1)/2,w=(d+1)/2,b=(u+p)/4,T=(f+x)/4,P=(g+m)/4;return _>v&&_>w?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=b/n,r=T/n):v>w?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=b/s,r=P/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=T/r,s=P/r),this.set(n,s,r,e),this}let M=Math.sqrt((m-g)*(m-g)+(f-x)*(f-x)+(p-u)*(p-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(f-x)/M,this.z=(p-u)/M,this.w=Math.acos((c+h+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this.w=Kt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this.w=Kt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ff extends Ts{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new le(0,0,t,e),this.scissorTest=!1,this.viewport=new le(0,0,t,e);const s={width:t,height:e,depth:n.depth},r=new Ke(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:wn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new pl(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Nn extends Ff{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Yh extends Ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=$e,this.minFilter=$e,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class zf extends Ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=$e,this.minFilter=$e,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vi{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(An.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(An.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=An.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,An):An.fromBufferAttribute(r,o),An.applyMatrix4(t.matrixWorld),this.expandByPoint(An);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),xr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),xr.copy(n.boundingBox)),xr.applyMatrix4(t.matrixWorld),this.union(xr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,An),An.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Is),Mr.subVectors(this.max,Is),Zi.subVectors(t.a,Is),$i.subVectors(t.b,Is),Ki.subVectors(t.c,Is),si.subVectors($i,Zi),ri.subVectors(Ki,$i),yi.subVectors(Zi,Ki);let e=[0,-si.z,si.y,0,-ri.z,ri.y,0,-yi.z,yi.y,si.z,0,-si.x,ri.z,0,-ri.x,yi.z,0,-yi.x,-si.y,si.x,0,-ri.y,ri.x,0,-yi.y,yi.x,0];return!Eo(e,Zi,$i,Ki,Mr)||(e=[1,0,0,0,1,0,0,0,1],!Eo(e,Zi,$i,Ki,Mr))?!1:(yr.crossVectors(si,ri),e=[yr.x,yr.y,yr.z],Eo(e,Zi,$i,Ki,Mr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,An).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(An).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Yn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Yn=[new U,new U,new U,new U,new U,new U,new U,new U],An=new U,xr=new Vi,Zi=new U,$i=new U,Ki=new U,si=new U,ri=new U,yi=new U,Is=new U,Mr=new U,yr=new U,Si=new U;function Eo(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Si.fromArray(i,r);const a=s.x*Math.abs(Si.x)+s.y*Math.abs(Si.y)+s.z*Math.abs(Si.z),l=t.dot(Si),c=e.dot(Si),u=n.dot(Si);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Of=new Vi,Us=new U,To=new U;class Wi{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Of.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Us.subVectors(t,this.center);const e=Us.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Us,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(To.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Us.copy(t.center).add(To)),this.expandByPoint(Us.copy(t.center).sub(To))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Zn=new U,Ao=new U,Sr=new U,oi=new U,Co=new U,br=new U,Ro=new U;class Zh{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Zn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Zn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Zn.copy(this.origin).addScaledVector(this.direction,e),Zn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ao.copy(t).add(e).multiplyScalar(.5),Sr.copy(e).sub(t).normalize(),oi.copy(this.origin).sub(Ao);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Sr),a=oi.dot(this.direction),l=-oi.dot(Sr),c=oi.lengthSq(),u=Math.abs(1-o*o);let f,p,h,g;if(u>0)if(f=o*l-a,p=o*a-l,g=r*u,f>=0)if(p>=-g)if(p<=g){const x=1/u;f*=x,p*=x,h=f*(f+o*p+2*a)+p*(o*f+p+2*l)+c}else p=r,f=Math.max(0,-(o*p+a)),h=-f*f+p*(p+2*l)+c;else p=-r,f=Math.max(0,-(o*p+a)),h=-f*f+p*(p+2*l)+c;else p<=-g?(f=Math.max(0,-(-o*r+a)),p=f>0?-r:Math.min(Math.max(-r,-l),r),h=-f*f+p*(p+2*l)+c):p<=g?(f=0,p=Math.min(Math.max(-r,-l),r),h=p*(p+2*l)+c):(f=Math.max(0,-(o*r+a)),p=f>0?r:Math.min(Math.max(-r,-l),r),h=-f*f+p*(p+2*l)+c);else p=o>0?-r:r,f=Math.max(0,-(o*p+a)),h=-f*f+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Ao).addScaledVector(Sr,p),h}intersectSphere(t,e){Zn.subVectors(t.center,this.origin);const n=Zn.dot(this.direction),s=Zn.dot(Zn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,p=this.origin;return c>=0?(n=(t.min.x-p.x)*c,s=(t.max.x-p.x)*c):(n=(t.max.x-p.x)*c,s=(t.min.x-p.x)*c),u>=0?(r=(t.min.y-p.y)*u,o=(t.max.y-p.y)*u):(r=(t.max.y-p.y)*u,o=(t.min.y-p.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-p.z)*f,l=(t.max.z-p.z)*f):(a=(t.max.z-p.z)*f,l=(t.min.z-p.z)*f),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Zn)!==null}intersectTriangle(t,e,n,s,r){Co.subVectors(e,t),br.subVectors(n,t),Ro.crossVectors(Co,br);let o=this.direction.dot(Ro),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;oi.subVectors(this.origin,t);const l=a*this.direction.dot(br.crossVectors(oi,br));if(l<0)return null;const c=a*this.direction.dot(Co.cross(oi));if(c<0||l+c>o)return null;const u=-a*oi.dot(Ro);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class se{constructor(t,e,n,s,r,o,a,l,c,u,f,p,h,g,x,m){se.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,u,f,p,h,g,x,m)}set(t,e,n,s,r,o,a,l,c,u,f,p,h,g,x,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=p,d[3]=h,d[7]=g,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new se().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Ji.setFromMatrixColumn(t,0).length(),r=1/Ji.setFromMatrixColumn(t,1).length(),o=1/Ji.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const p=o*u,h=o*f,g=a*u,x=a*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=h+g*c,e[5]=p-x*c,e[9]=-a*l,e[2]=x-p*c,e[6]=g+h*c,e[10]=o*l}else if(t.order==="YXZ"){const p=l*u,h=l*f,g=c*u,x=c*f;e[0]=p+x*a,e[4]=g*a-h,e[8]=o*c,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=h*a-g,e[6]=x+p*a,e[10]=o*l}else if(t.order==="ZXY"){const p=l*u,h=l*f,g=c*u,x=c*f;e[0]=p-x*a,e[4]=-o*f,e[8]=g+h*a,e[1]=h+g*a,e[5]=o*u,e[9]=x-p*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const p=o*u,h=o*f,g=a*u,x=a*f;e[0]=l*u,e[4]=g*c-h,e[8]=p*c+x,e[1]=l*f,e[5]=x*c+p,e[9]=h*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const p=o*l,h=o*c,g=a*l,x=a*c;e[0]=l*u,e[4]=x-p*f,e[8]=g*f+h,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=h*f+g,e[10]=p-x*f}else if(t.order==="XZY"){const p=o*l,h=o*c,g=a*l,x=a*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=p*f+x,e[5]=o*u,e[9]=h*f-g,e[2]=g*f-h,e[6]=a*u,e[10]=x*f+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Bf,t,kf)}lookAt(t,e,n){const s=this.elements;return hn.subVectors(t,e),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),ai.crossVectors(n,hn),ai.lengthSq()===0&&(Math.abs(n.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),ai.crossVectors(n,hn)),ai.normalize(),wr.crossVectors(hn,ai),s[0]=ai.x,s[4]=wr.x,s[8]=hn.x,s[1]=ai.y,s[5]=wr.y,s[9]=hn.y,s[2]=ai.z,s[6]=wr.z,s[10]=hn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],p=n[9],h=n[13],g=n[2],x=n[6],m=n[10],d=n[14],M=n[3],_=n[7],v=n[11],w=n[15],b=s[0],T=s[4],P=s[8],y=s[12],S=s[1],D=s[5],C=s[9],F=s[13],O=s[2],q=s[6],B=s[10],Q=s[14],L=s[3],G=s[7],X=s[11],tt=s[15];return r[0]=o*b+a*S+l*O+c*L,r[4]=o*T+a*D+l*q+c*G,r[8]=o*P+a*C+l*B+c*X,r[12]=o*y+a*F+l*Q+c*tt,r[1]=u*b+f*S+p*O+h*L,r[5]=u*T+f*D+p*q+h*G,r[9]=u*P+f*C+p*B+h*X,r[13]=u*y+f*F+p*Q+h*tt,r[2]=g*b+x*S+m*O+d*L,r[6]=g*T+x*D+m*q+d*G,r[10]=g*P+x*C+m*B+d*X,r[14]=g*y+x*F+m*Q+d*tt,r[3]=M*b+_*S+v*O+w*L,r[7]=M*T+_*D+v*q+w*G,r[11]=M*P+_*C+v*B+w*X,r[15]=M*y+_*F+v*Q+w*tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],f=t[6],p=t[10],h=t[14],g=t[3],x=t[7],m=t[11],d=t[15];return g*(+r*l*f-s*c*f-r*a*p+n*c*p+s*a*h-n*l*h)+x*(+e*l*h-e*c*p+r*o*p-s*o*h+s*c*u-r*l*u)+m*(+e*c*f-e*a*h-r*o*f+n*o*h+r*a*u-n*c*u)+d*(-s*a*u-e*l*f+e*a*p+s*o*f-n*o*p+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=t[9],p=t[10],h=t[11],g=t[12],x=t[13],m=t[14],d=t[15],M=f*m*c-x*p*c+x*l*h-a*m*h-f*l*d+a*p*d,_=g*p*c-u*m*c-g*l*h+o*m*h+u*l*d-o*p*d,v=u*x*c-g*f*c+g*a*h-o*x*h-u*a*d+o*f*d,w=g*f*l-u*x*l-g*a*p+o*x*p+u*a*m-o*f*m,b=e*M+n*_+s*v+r*w;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/b;return t[0]=M*T,t[1]=(x*p*r-f*m*r-x*s*h+n*m*h+f*s*d-n*p*d)*T,t[2]=(a*m*r-x*l*r+x*s*c-n*m*c-a*s*d+n*l*d)*T,t[3]=(f*l*r-a*p*r-f*s*c+n*p*c+a*s*h-n*l*h)*T,t[4]=_*T,t[5]=(u*m*r-g*p*r+g*s*h-e*m*h-u*s*d+e*p*d)*T,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*d-e*l*d)*T,t[7]=(o*p*r-u*l*r+u*s*c-e*p*c-o*s*h+e*l*h)*T,t[8]=v*T,t[9]=(g*f*r-u*x*r-g*n*h+e*x*h+u*n*d-e*f*d)*T,t[10]=(o*x*r-g*a*r+g*n*c-e*x*c-o*n*d+e*a*d)*T,t[11]=(u*a*r-o*f*r-u*n*c+e*f*c+o*n*h-e*a*h)*T,t[12]=w*T,t[13]=(u*x*s-g*f*s+g*n*p-e*x*p-u*n*m+e*f*m)*T,t[14]=(g*a*s-o*x*s-g*n*l+e*x*l+o*n*m-e*a*m)*T,t[15]=(o*f*s-u*a*s+u*n*l-e*f*l-o*n*p+e*a*p)*T,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,f=a+a,p=r*c,h=r*u,g=r*f,x=o*u,m=o*f,d=a*f,M=l*c,_=l*u,v=l*f,w=n.x,b=n.y,T=n.z;return s[0]=(1-(x+d))*w,s[1]=(h+v)*w,s[2]=(g-_)*w,s[3]=0,s[4]=(h-v)*b,s[5]=(1-(p+d))*b,s[6]=(m+M)*b,s[7]=0,s[8]=(g+_)*T,s[9]=(m-M)*T,s[10]=(1-(p+x))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Ji.set(s[0],s[1],s[2]).length();const o=Ji.set(s[4],s[5],s[6]).length(),a=Ji.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Cn.copy(this);const c=1/r,u=1/o,f=1/a;return Cn.elements[0]*=c,Cn.elements[1]*=c,Cn.elements[2]*=c,Cn.elements[4]*=u,Cn.elements[5]*=u,Cn.elements[6]*=u,Cn.elements[8]*=f,Cn.elements[9]*=f,Cn.elements[10]*=f,e.setFromRotationMatrix(Cn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=kn,l=!1){const c=this.elements,u=2*r/(e-t),f=2*r/(n-s),p=(e+t)/(e-t),h=(n+s)/(n-s);let g,x;if(l)g=r/(o-r),x=o*r/(o-r);else if(a===kn)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===so)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=f,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=kn,l=!1){const c=this.elements,u=2/(e-t),f=2/(n-s),p=-(e+t)/(e-t),h=-(n+s)/(n-s);let g,x;if(l)g=1/(o-r),x=o/(o-r);else if(a===kn)g=-2/(o-r),x=-(o+r)/(o-r);else if(a===so)g=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=p,c[1]=0,c[5]=f,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ji=new U,Cn=new se,Bf=new U(0,0,0),kf=new U(1,1,1),ai=new U,wr=new U,hn=new U,tc=new se,ec=new _i;class pn{constructor(t=0,e=0,n=0,s=pn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],p=s[6],h=s[10];switch(e){case"XYZ":this._y=Math.asin(Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Kt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,h),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return tc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(tc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ec.setFromEuler(this),this.setFromQuaternion(ec,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pn.DEFAULT_ORDER="XYZ";class $h{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Hf=0;const nc=new U,ji=new _i,$n=new se,Er=new U,Ns=new U,Gf=new U,Vf=new _i,ic=new U(1,0,0),sc=new U(0,1,0),rc=new U(0,0,1),oc={type:"added"},Wf={type:"removed"},Qi={type:"childadded",child:null},Po={type:"childremoved",child:null};class _e extends Ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=As(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_e.DEFAULT_UP.clone();const t=new U,e=new pn,n=new _i,s=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new se},normalMatrix:{value:new Xt}}),this.matrix=new se,this.matrixWorld=new se,this.matrixAutoUpdate=_e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $h,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ji.setFromAxisAngle(t,e),this.quaternion.multiply(ji),this}rotateOnWorldAxis(t,e){return ji.setFromAxisAngle(t,e),this.quaternion.premultiply(ji),this}rotateX(t){return this.rotateOnAxis(ic,t)}rotateY(t){return this.rotateOnAxis(sc,t)}rotateZ(t){return this.rotateOnAxis(rc,t)}translateOnAxis(t,e){return nc.copy(t).applyQuaternion(this.quaternion),this.position.add(nc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ic,t)}translateY(t){return this.translateOnAxis(sc,t)}translateZ(t){return this.translateOnAxis(rc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Er.copy(t):Er.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ns.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(Ns,Er,this.up):$n.lookAt(Er,Ns,this.up),this.quaternion.setFromRotationMatrix($n),s&&($n.extractRotation(s.matrixWorld),ji.setFromRotationMatrix($n),this.quaternion.premultiply(ji.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(oc),Qi.child=t,this.dispatchEvent(Qi),Qi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Wf),Po.child=t,this.dispatchEvent(Po),Po.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),$n.multiply(t.parent.matrixWorld)),t.applyMatrix4($n),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(oc),Qi.child=t,this.dispatchEvent(Qi),Qi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,t,Gf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,Vf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),f=o(t.shapes),p=o(t.skeletons),h=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),p.length>0&&(n.skeletons=p),h.length>0&&(n.animations=h),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}_e.DEFAULT_UP=new U(0,1,0);_e.DEFAULT_MATRIX_AUTO_UPDATE=!0;_e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Rn=new U,Kn=new U,Do=new U,Jn=new U,ts=new U,es=new U,ac=new U,Lo=new U,Io=new U,Uo=new U,No=new le,Fo=new le,zo=new le;class Dn{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Rn.subVectors(t,e),s.cross(Rn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Rn.subVectors(s,e),Kn.subVectors(n,e),Do.subVectors(t,e);const o=Rn.dot(Rn),a=Rn.dot(Kn),l=Rn.dot(Do),c=Kn.dot(Kn),u=Kn.dot(Do),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const p=1/f,h=(c*l-a*u)*p,g=(o*u-a*l)*p;return r.set(1-h-g,g,h)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Jn)===null?!1:Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Jn.x),l.addScaledVector(o,Jn.y),l.addScaledVector(a,Jn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return No.setScalar(0),Fo.setScalar(0),zo.setScalar(0),No.fromBufferAttribute(t,e),Fo.fromBufferAttribute(t,n),zo.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(No,r.x),o.addScaledVector(Fo,r.y),o.addScaledVector(zo,r.z),o}static isFrontFacing(t,e,n,s){return Rn.subVectors(n,e),Kn.subVectors(t,e),Rn.cross(Kn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Rn.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),Rn.cross(Kn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Dn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Dn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Dn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Dn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Dn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;ts.subVectors(s,n),es.subVectors(r,n),Lo.subVectors(t,n);const l=ts.dot(Lo),c=es.dot(Lo);if(l<=0&&c<=0)return e.copy(n);Io.subVectors(t,s);const u=ts.dot(Io),f=es.dot(Io);if(u>=0&&f<=u)return e.copy(s);const p=l*f-u*c;if(p<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(ts,o);Uo.subVectors(t,r);const h=ts.dot(Uo),g=es.dot(Uo);if(g>=0&&h<=g)return e.copy(r);const x=h*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(es,a);const m=u*g-h*f;if(m<=0&&f-u>=0&&h-g>=0)return ac.subVectors(r,s),a=(f-u)/(f-u+(h-g)),e.copy(s).addScaledVector(ac,a);const d=1/(m+x+p);return o=x*d,a=p*d,e.copy(n).addScaledVector(ts,o).addScaledVector(es,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Kh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},li={h:0,s:0,l:0},Tr={h:0,s:0,l:0};function Oo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Dt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ge){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=te.workingColorSpace){if(t=Rf(t,1),e=Kt(e,0,1),n=Kt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Oo(o,r,t+1/3),this.g=Oo(o,r,t),this.b=Oo(o,r,t-1/3)}return te.colorSpaceToWorking(this,s),this}setStyle(t,e=Ge){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ge){const n=Kh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ei(t.r),this.g=ei(t.g),this.b=ei(t.b),this}copyLinearToSRGB(t){return this.r=us(t.r),this.g=us(t.g),this.b=us(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ge){return te.workingToColorSpace(qe.copy(this),t),Math.round(Kt(qe.r*255,0,255))*65536+Math.round(Kt(qe.g*255,0,255))*256+Math.round(Kt(qe.b*255,0,255))}getHexString(t=Ge){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.workingToColorSpace(qe.copy(this),e);const n=qe.r,s=qe.g,r=qe.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=te.workingColorSpace){return te.workingToColorSpace(qe.copy(this),e),t.r=qe.r,t.g=qe.g,t.b=qe.b,t}getStyle(t=Ge){te.workingToColorSpace(qe.copy(this),t);const e=qe.r,n=qe.g,s=qe.b;return t!==Ge?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(li),this.setHSL(li.h+t,li.s+e,li.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(li),t.getHSL(Tr);const n=Mo(li.h,Tr.h,e),s=Mo(li.s,Tr.s,e),r=Mo(li.l,Tr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qe=new Dt;Dt.NAMES=Kh;let Xf=0;class Cs extends Ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xf++}),this.uuid=As(),this.name="",this.type="Material",this.blending=Fi,this.side=ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ha,this.blendDst=ua,this.blendEquation=Pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Dt(0,0,0),this.blendAlpha=0,this.depthFunc=gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qi,this.stencilZFail=qi,this.stencilZPass=qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Fi&&(n.blending=this.blending),this.side!==ni&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ha&&(n.blendSrc=this.blendSrc),this.blendDst!==ua&&(n.blendDst=this.blendDst),this.blendEquation!==Pi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==gs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==qi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==qi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class me extends Cs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=Rh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ie=new U,Ar=new pt;let qf=0;class ce{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Zl,this.updateRanges=[],this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ar.fromBufferAttribute(this,e),Ar.applyMatrix3(t),this.setXY(e,Ar.x,Ar.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix3(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix4(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyNormalMatrix(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.transformDirection(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ls(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=an(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ls(e,this.array)),e}setX(t,e){return this.normalized&&(e=an(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ls(e,this.array)),e}setY(t,e){return this.normalized&&(e=an(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ls(e,this.array)),e}setZ(t,e){return this.normalized&&(e=an(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ls(e,this.array)),e}setW(t,e){return this.normalized&&(e=an(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=an(e,this.array),n=an(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=an(e,this.array),n=an(n,this.array),s=an(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=an(e,this.array),n=an(n,this.array),s=an(s,this.array),r=an(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Zl&&(t.usage=this.usage),t}}class Jh extends ce{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class jh extends ce{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Vt extends ce{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Yf=0;const vn=new se,Bo=new _e,ns=new U,un=new Vi,Fs=new Vi,ke=new U;class xe extends Ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yf++}),this.uuid=As(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(qh(t)?jh:Jh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Xt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return vn.makeRotationFromQuaternion(t),this.applyMatrix4(vn),this}rotateX(t){return vn.makeRotationX(t),this.applyMatrix4(vn),this}rotateY(t){return vn.makeRotationY(t),this.applyMatrix4(vn),this}rotateZ(t){return vn.makeRotationZ(t),this.applyMatrix4(vn),this}translate(t,e,n){return vn.makeTranslation(t,e,n),this.applyMatrix4(vn),this}scale(t,e,n){return vn.makeScale(t,e,n),this.applyMatrix4(vn),this}lookAt(t){return Bo.lookAt(t),Bo.updateMatrix(),this.applyMatrix4(Bo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ns).negate(),this.translate(ns.x,ns.y,ns.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Vt(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];un.setFromBufferAttribute(r),this.morphTargetsRelative?(ke.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(ke),ke.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(ke)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){const n=this.boundingSphere.center;if(un.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Fs.setFromBufferAttribute(a),this.morphTargetsRelative?(ke.addVectors(un.min,Fs.min),un.expandByPoint(ke),ke.addVectors(un.max,Fs.max),un.expandByPoint(ke)):(un.expandByPoint(Fs.min),un.expandByPoint(Fs.max))}un.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)ke.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ke));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)ke.fromBufferAttribute(a,c),l&&(ns.fromBufferAttribute(t,c),ke.add(ns)),s=Math.max(s,n.distanceToSquared(ke))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ce(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new U,l[P]=new U;const c=new U,u=new U,f=new U,p=new pt,h=new pt,g=new pt,x=new U,m=new U;function d(P,y,S){c.fromBufferAttribute(n,P),u.fromBufferAttribute(n,y),f.fromBufferAttribute(n,S),p.fromBufferAttribute(r,P),h.fromBufferAttribute(r,y),g.fromBufferAttribute(r,S),u.sub(c),f.sub(c),h.sub(p),g.sub(p);const D=1/(h.x*g.y-g.x*h.y);isFinite(D)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(f,-h.y).multiplyScalar(D),m.copy(f).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(D),a[P].add(x),a[y].add(x),a[S].add(x),l[P].add(m),l[y].add(m),l[S].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let P=0,y=M.length;P<y;++P){const S=M[P],D=S.start,C=S.count;for(let F=D,O=D+C;F<O;F+=3)d(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const _=new U,v=new U,w=new U,b=new U;function T(P){w.fromBufferAttribute(s,P),b.copy(w);const y=a[P];_.copy(y),_.sub(w.multiplyScalar(w.dot(y))).normalize(),v.crossVectors(b,y);const D=v.dot(l[P])<0?-1:1;o.setXYZW(P,_.x,_.y,_.z,D)}for(let P=0,y=M.length;P<y;++P){const S=M[P],D=S.start,C=S.count;for(let F=D,O=D+C;F<O;F+=3)T(t.getX(F+0)),T(t.getX(F+1)),T(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ce(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,h=n.count;p<h;p++)n.setXYZ(p,0,0,0);const s=new U,r=new U,o=new U,a=new U,l=new U,c=new U,u=new U,f=new U;if(t)for(let p=0,h=t.count;p<h;p+=3){const g=t.getX(p+0),x=t.getX(p+1),m=t.getX(p+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let p=0,h=e.count;p<h;p+=3)s.fromBufferAttribute(e,p+0),r.fromBufferAttribute(e,p+1),o.fromBufferAttribute(e,p+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),n.setXYZ(p+0,u.x,u.y,u.z),n.setXYZ(p+1,u.x,u.y,u.z),n.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ke.fromBufferAttribute(t,e),ke.normalize(),t.setXYZ(e,ke.x,ke.y,ke.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,f=a.normalized,p=new c.constructor(l.length*u);let h=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?h=l[x]*a.data.stride+a.offset:h=l[x]*u;for(let d=0;d<u;d++)p[g++]=c[h++]}return new ce(p,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new xe,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){const p=c[u],h=t(p,n);l.push(h)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,p=c.length;f<p;f++){const h=c[f];u.push(h.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],f=r[c];for(let p=0,h=f.length;p<h;p++)u.push(f[p].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lc=new se,bi=new Zh,Cr=new Wi,cc=new U,Rr=new U,Pr=new U,Dr=new U,ko=new U,Lr=new U,hc=new U,Ir=new U;class St extends _e{constructor(t=new xe,e=new me){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Lr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],f=r[l];u!==0&&(ko.fromBufferAttribute(f,t),o?Lr.addScaledVector(ko,u):Lr.addScaledVector(ko.sub(e),u))}e.add(Lr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Cr.copy(n.boundingSphere),Cr.applyMatrix4(r),bi.copy(t.ray).recast(t.near),!(Cr.containsPoint(bi.origin)===!1&&(bi.intersectSphere(Cr,cc)===null||bi.origin.distanceToSquared(cc)>(t.far-t.near)**2))&&(lc.copy(r).invert(),bi.copy(t.ray).applyMatrix4(lc),!(n.boundingBox!==null&&bi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,bi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,p=r.groups,h=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=p.length;g<x;g++){const m=p[g],d=o[m.materialIndex],M=Math.max(m.start,h.start),_=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let v=M,w=_;v<w;v+=3){const b=a.getX(v),T=a.getX(v+1),P=a.getX(v+2);s=Ur(this,d,t,n,c,u,f,b,T,P),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,h.start),x=Math.min(a.count,h.start+h.count);for(let m=g,d=x;m<d;m+=3){const M=a.getX(m),_=a.getX(m+1),v=a.getX(m+2);s=Ur(this,o,t,n,c,u,f,M,_,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=p.length;g<x;g++){const m=p[g],d=o[m.materialIndex],M=Math.max(m.start,h.start),_=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let v=M,w=_;v<w;v+=3){const b=v,T=v+1,P=v+2;s=Ur(this,d,t,n,c,u,f,b,T,P),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,h.start),x=Math.min(l.count,h.start+h.count);for(let m=g,d=x;m<d;m+=3){const M=m,_=m+1,v=m+2;s=Ur(this,o,t,n,c,u,f,M,_,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Zf(i,t,e,n,s,r,o,a){let l;if(t.side===en?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===ni,a),l===null)return null;Ir.copy(a),Ir.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Ir);return c<e.near||c>e.far?null:{distance:c,point:Ir.clone(),object:i}}function Ur(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Rr),i.getVertexPosition(l,Pr),i.getVertexPosition(c,Dr);const u=Zf(i,t,e,n,Rr,Pr,Dr,hc);if(u){const f=new U;Dn.getBarycoord(hc,Rr,Pr,Dr,f),s&&(u.uv=Dn.getInterpolatedAttribute(s,a,l,c,f,new pt)),r&&(u.uv1=Dn.getInterpolatedAttribute(r,a,l,c,f,new pt)),o&&(u.normal=Dn.getInterpolatedAttribute(o,a,l,c,f,new U),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const p={a,b:l,c,normal:new U,materialIndex:0};Dn.getNormal(Rr,Pr,Dr,p.normal),u.face=p,u.barycoord=f}return u}class Ze extends xe{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],f=[];let p=0,h=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Vt(c,3)),this.setAttribute("normal",new Vt(u,3)),this.setAttribute("uv",new Vt(f,2));function g(x,m,d,M,_,v,w,b,T,P,y){const S=v/T,D=w/P,C=v/2,F=w/2,O=b/2,q=T+1,B=P+1;let Q=0,L=0;const G=new U;for(let X=0;X<B;X++){const tt=X*D-F;for(let ut=0;ut<q;ut++){const J=ut*S-C;G[x]=J*M,G[m]=tt*_,G[d]=O,c.push(G.x,G.y,G.z),G[x]=0,G[m]=0,G[d]=b>0?1:-1,u.push(G.x,G.y,G.z),f.push(ut/T),f.push(1-X/P),Q+=1}}for(let X=0;X<P;X++)for(let tt=0;tt<T;tt++){const ut=p+tt+q*X,J=p+tt+q*(X+1),Tt=p+(tt+1)+q*(X+1),st=p+(tt+1)+q*X;l.push(ut,J,st),l.push(J,Tt,st),L+=6}a.addGroup(h,L,y),h+=L,p+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ze(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ms(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Qe(i){const t={};for(let e=0;e<i.length;e++){const n=Ms(i[e]);for(const s in n)t[s]=n[s]}return t}function $f(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Qh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}const or={clone:Ms,merge:Qe};var Kf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Se extends Cs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kf,this.fragmentShader=Jf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ms(t.uniforms),this.uniformsGroups=$f(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class tu extends _e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new se,this.projectionMatrix=new se,this.projectionMatrixInverse=new se,this.coordinateSystem=kn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ci=new U,uc=new pt,fc=new pt;class fn extends tu{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ka*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(xo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ka*2*Math.atan(Math.tan(xo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ci.x,ci.y).multiplyScalar(-t/ci.z),ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ci.x,ci.y).multiplyScalar(-t/ci.z)}getViewSize(t,e){return this.getViewBounds(t,uc,fc),e.subVectors(fc,uc)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(xo*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const is=-90,ss=1;class jf extends _e{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new fn(is,ss,t,e);s.layers=this.layers,this.add(s);const r=new fn(is,ss,t,e);r.layers=this.layers,this.add(r);const o=new fn(is,ss,t,e);o.layers=this.layers,this.add(o);const a=new fn(is,ss,t,e);a.layers=this.layers,this.add(a);const l=new fn(is,ss,t,e);l.layers=this.layers,this.add(l);const c=new fn(is,ss,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===kn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===so)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,f=t.getRenderTarget(),p=t.getActiveCubeFace(),h=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(f,p,h),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class eu extends Ke{constructor(t=[],e=vs,n,s,r,o,a,l,c,u){super(t,e,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Qf extends Nn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new eu(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ze(5,5,5),r=new Se({name:"CubemapFromEquirect",uniforms:Ms(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:en,blending:Qn});r.uniforms.tEquirect.value=e;const o=new St(s,r),a=e.minFilter;return e.minFilter===di&&(e.minFilter=wn),new jf(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}class ne extends _e{constructor(){super(),this.isGroup=!0,this.type="Group"}}const td={type:"move"};class Ho{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ne,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ne,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ne,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),d=this._getHandJoint(c,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],p=u.position.distanceTo(f.position),h=.02,g=.005;c.inputState.pinching&&p>h+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&p<=h-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(td)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ne;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class ml{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Dt(t),this.near=e,this.far=n}clone(){return new ml(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class ed extends _e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pn,this.environmentIntensity=1,this.environmentRotation=new pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class gl extends Ke{constructor(t=null,e=1,n=1,s,r,o,a,l,c=$e,u=$e,f,p){super(null,o,a,l,c,u,s,r,f,p),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class dc extends ce{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const rs=new se,pc=new se,Nr=[],mc=new Vi,nd=new se,zs=new St,Os=new Wi;class Fn extends St{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new dc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,nd)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Vi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,rs),mc.copy(t.boundingBox).applyMatrix4(rs),this.boundingBox.union(mc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Wi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,rs),Os.copy(t.boundingSphere).applyMatrix4(rs),this.boundingSphere.union(Os)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(zs.geometry=this.geometry,zs.material=this.material,zs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Os.copy(this.boundingSphere),Os.applyMatrix4(n),t.ray.intersectsSphere(Os)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,rs),pc.multiplyMatrices(n,rs),zs.matrixWorld=pc,zs.raycast(t,Nr);for(let o=0,a=Nr.length;o<a;o++){const l=Nr[o];l.instanceId=r,l.object=this,e.push(l)}Nr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new dc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new gl(new Float32Array(s*this.count),s,this.count,ho,In));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Go=new U,id=new U,sd=new Xt;class Ci{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Go.subVectors(n,e).cross(id.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Go),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||sd.getNormalMatrix(t),s=this.coplanarPoint(Go).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wi=new Wi,rd=new pt(.5,.5),Fr=new U;class vl{constructor(t=new Ci,e=new Ci,n=new Ci,s=new Ci,r=new Ci,o=new Ci){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=kn,n=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],f=r[5],p=r[6],h=r[7],g=r[8],x=r[9],m=r[10],d=r[11],M=r[12],_=r[13],v=r[14],w=r[15];if(s[0].setComponents(c-o,h-u,d-g,w-M).normalize(),s[1].setComponents(c+o,h+u,d+g,w+M).normalize(),s[2].setComponents(c+a,h+f,d+x,w+_).normalize(),s[3].setComponents(c-a,h-f,d-x,w-_).normalize(),n)s[4].setComponents(l,p,m,v).normalize(),s[5].setComponents(c-l,h-p,d-m,w-v).normalize();else if(s[4].setComponents(c-l,h-p,d-m,w-v).normalize(),e===kn)s[5].setComponents(c+l,h+p,d+m,w+v).normalize();else if(e===so)s[5].setComponents(l,p,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),wi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),wi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(wi)}intersectsSprite(t){wi.center.set(0,0,0);const e=rd.distanceTo(t.center);return wi.radius=.7071067811865476+e,wi.applyMatrix4(t.matrixWorld),this.intersectsSphere(wi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Fr.x=s.normal.x>0?t.max.x:t.min.x,Fr.y=s.normal.y>0?t.max.y:t.min.y,Fr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Fr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class od extends Cs{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Dt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const gc=new se,Ja=new Zh,zr=new Wi,Or=new U;class ja extends _e{constructor(t=new xe,e=new od){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),zr.copy(n.boundingSphere),zr.applyMatrix4(s),zr.radius+=r,t.ray.intersectsSphere(zr)===!1)return;gc.copy(s).invert(),Ja.copy(t.ray).applyMatrix4(gc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){const p=Math.max(0,o.start),h=Math.min(c.count,o.start+o.count);for(let g=p,x=h;g<x;g++){const m=c.getX(g);Or.fromBufferAttribute(f,m),vc(Or,m,l,s,t,e,this)}}else{const p=Math.max(0,o.start),h=Math.min(f.count,o.start+o.count);for(let g=p,x=h;g<x;g++)Or.fromBufferAttribute(f,g),vc(Or,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function vc(i,t,e,n,s,r,o){const a=Ja.distanceSqToPoint(i);if(a<e){const l=new U;Ja.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class _l extends Ke{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class nu extends Ke{constructor(t,e,n=Oi,s,r,o,a=$e,l=$e,c,u=ir,f=1){if(u!==ir&&u!==sr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:t,height:e,depth:f};super(p,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new pl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class iu extends Ke{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class zi extends xe{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const o=[],a=[],l=[],c=[],u=e/2,f=Math.PI/2*t,p=e,h=2*f+p,g=n*2+r,x=s+1,m=new U,d=new U;for(let M=0;M<=g;M++){let _=0,v=0,w=0,b=0;if(M<=n){const y=M/n,S=y*Math.PI/2;v=-u-t*Math.cos(S),w=t*Math.sin(S),b=-t*Math.cos(S),_=y*f}else if(M<=n+r){const y=(M-n)/r;v=-u+y*e,w=t,b=0,_=f+y*p}else{const y=(M-n-r)/n,S=y*Math.PI/2;v=u+t*Math.sin(S),w=t*Math.cos(S),b=t*Math.sin(S),_=f+p+y*f}const T=Math.max(0,Math.min(1,_/h));let P=0;M===0?P=.5/s:M===g&&(P=-.5/s);for(let y=0;y<=s;y++){const S=y/s,D=S*Math.PI*2,C=Math.sin(D),F=Math.cos(D);d.x=-w*F,d.y=v,d.z=w*C,a.push(d.x,d.y,d.z),m.set(-w*F,b,w*C),m.normalize(),l.push(m.x,m.y,m.z),c.push(S+P,T)}if(M>0){const y=(M-1)*x;for(let S=0;S<s;S++){const D=y+S,C=y+S+1,F=M*x+S,O=M*x+S+1;o.push(D,C,F),o.push(C,O,F)}}}this.setIndex(o),this.setAttribute("position",new Vt(a,3)),this.setAttribute("normal",new Vt(l,3)),this.setAttribute("uv",new Vt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zi(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class xl extends xe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new U,u=new pt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,p=3;f<=e;f++,p+=3){const h=n+f/e*s;c.x=t*Math.cos(h),c.y=t*Math.sin(h),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[p]/t+1)/2,u.y=(o[p+1]/t+1)/2,l.push(u.x,u.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new Vt(o,3)),this.setAttribute("normal",new Vt(a,3)),this.setAttribute("uv",new Vt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xl(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Re extends xe{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],f=[],p=[],h=[];let g=0;const x=[],m=n/2;let d=0;M(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new Vt(f,3)),this.setAttribute("normal",new Vt(p,3)),this.setAttribute("uv",new Vt(h,2));function M(){const v=new U,w=new U;let b=0;const T=(e-t)/n;for(let P=0;P<=r;P++){const y=[],S=P/r,D=S*(e-t)+t;for(let C=0;C<=s;C++){const F=C/s,O=F*l+a,q=Math.sin(O),B=Math.cos(O);w.x=D*q,w.y=-S*n+m,w.z=D*B,f.push(w.x,w.y,w.z),v.set(q,T,B).normalize(),p.push(v.x,v.y,v.z),h.push(F,1-S),y.push(g++)}x.push(y)}for(let P=0;P<s;P++)for(let y=0;y<r;y++){const S=x[y][P],D=x[y+1][P],C=x[y+1][P+1],F=x[y][P+1];(t>0||y!==0)&&(u.push(S,D,F),b+=3),(e>0||y!==r-1)&&(u.push(D,C,F),b+=3)}c.addGroup(d,b,0),d+=b}function _(v){const w=g,b=new pt,T=new U;let P=0;const y=v===!0?t:e,S=v===!0?1:-1;for(let C=1;C<=s;C++)f.push(0,m*S,0),p.push(0,S,0),h.push(.5,.5),g++;const D=g;for(let C=0;C<=s;C++){const O=C/s*l+a,q=Math.cos(O),B=Math.sin(O);T.x=y*B,T.y=m*S,T.z=y*q,f.push(T.x,T.y,T.z),p.push(0,S,0),b.x=q*.5+.5,b.y=B*.5*S+.5,h.push(b.x,b.y),g++}for(let C=0;C<s;C++){const F=w+C,O=D+C;v===!0?u.push(O,O+1,F):u.push(O+1,O,F),P+=3}c.addGroup(d,P,v===!0?1:2),d+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Re(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class nn extends Re{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new nn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class fr extends xe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),c(n),u(),this.setAttribute("position",new Vt(r,3)),this.setAttribute("normal",new Vt(r.slice(),3)),this.setAttribute("uv",new Vt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const _=new U,v=new U,w=new U;for(let b=0;b<e.length;b+=3)h(e[b+0],_),h(e[b+1],v),h(e[b+2],w),l(_,v,w,M)}function l(M,_,v,w){const b=w+1,T=[];for(let P=0;P<=b;P++){T[P]=[];const y=M.clone().lerp(v,P/b),S=_.clone().lerp(v,P/b),D=b-P;for(let C=0;C<=D;C++)C===0&&P===b?T[P][C]=y:T[P][C]=y.clone().lerp(S,C/D)}for(let P=0;P<b;P++)for(let y=0;y<2*(b-P)-1;y++){const S=Math.floor(y/2);y%2===0?(p(T[P][S+1]),p(T[P+1][S]),p(T[P][S])):(p(T[P][S+1]),p(T[P+1][S+1]),p(T[P+1][S]))}}function c(M){const _=new U;for(let v=0;v<r.length;v+=3)_.x=r[v+0],_.y=r[v+1],_.z=r[v+2],_.normalize().multiplyScalar(M),r[v+0]=_.x,r[v+1]=_.y,r[v+2]=_.z}function u(){const M=new U;for(let _=0;_<r.length;_+=3){M.x=r[_+0],M.y=r[_+1],M.z=r[_+2];const v=m(M)/2/Math.PI+.5,w=d(M)/Math.PI+.5;o.push(v,1-w)}g(),f()}function f(){for(let M=0;M<o.length;M+=6){const _=o[M+0],v=o[M+2],w=o[M+4],b=Math.max(_,v,w),T=Math.min(_,v,w);b>.9&&T<.1&&(_<.2&&(o[M+0]+=1),v<.2&&(o[M+2]+=1),w<.2&&(o[M+4]+=1))}}function p(M){r.push(M.x,M.y,M.z)}function h(M,_){const v=M*3;_.x=t[v+0],_.y=t[v+1],_.z=t[v+2]}function g(){const M=new U,_=new U,v=new U,w=new U,b=new pt,T=new pt,P=new pt;for(let y=0,S=0;y<r.length;y+=9,S+=6){M.set(r[y+0],r[y+1],r[y+2]),_.set(r[y+3],r[y+4],r[y+5]),v.set(r[y+6],r[y+7],r[y+8]),b.set(o[S+0],o[S+1]),T.set(o[S+2],o[S+3]),P.set(o[S+4],o[S+5]),w.copy(M).add(_).add(v).divideScalar(3);const D=m(w);x(b,S+0,M,D),x(T,S+2,_,D),x(P,S+4,v,D)}}function x(M,_,v,w){w<0&&M.x===1&&(o[_]=M.x-1),v.x===0&&v.z===0&&(o[_]=w/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function d(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fr(t.vertices,t.indices,t.radius,t.details)}}class Ml extends fr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ml(t.radius,t.detail)}}class Xn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const u=n[s],p=n[s+1]-u,h=(o-u)/p;return(s+h)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new pt:new U);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new U,s=[],r=[],o=[],a=new U,l=new se;for(let h=0;h<=t;h++){const g=h/t;s[h]=this.getTangentAt(g,new U)}r[0]=new U,o[0]=new U;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),f=Math.abs(s[0].y),p=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),p<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let h=1;h<=t;h++){if(r[h]=r[h-1].clone(),o[h]=o[h-1].clone(),a.crossVectors(s[h-1],s[h]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Kt(s[h-1].dot(s[h]),-1,1));r[h].applyMatrix4(l.makeRotationAxis(a,g))}o[h].crossVectors(s[h],r[h])}if(e===!0){let h=Math.acos(Kt(r[0].dot(r[t]),-1,1));h/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(h=-h);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],h*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class yl extends Xn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new pt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),p=l-this.aX,h=c-this.aY;l=p*u-h*f+this.aX,c=p*f+h*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class ad extends yl{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Sl(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,f){let p=(o-r)/c-(a-r)/(c+u)+(a-o)/u,h=(a-o)/u-(l-o)/(u+f)+(l-a)/f;p*=u,h*=u,s(o,a,p,h)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const Br=new U,Vo=new Sl,Wo=new Sl,Xo=new Sl;class ld extends Xn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new U){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(Br.subVectors(s[0],s[1]).add(s[0]),c=Br);const f=s[a%r],p=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Br.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Br),this.curveType==="centripetal"||this.curveType==="chordal"){const h=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(f),h),x=Math.pow(f.distanceToSquared(p),h),m=Math.pow(p.distanceToSquared(u),h);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Vo.initNonuniformCatmullRom(c.x,f.x,p.x,u.x,g,x,m),Wo.initNonuniformCatmullRom(c.y,f.y,p.y,u.y,g,x,m),Xo.initNonuniformCatmullRom(c.z,f.z,p.z,u.z,g,x,m)}else this.curveType==="catmullrom"&&(Vo.initCatmullRom(c.x,f.x,p.x,u.x,this.tension),Wo.initCatmullRom(c.y,f.y,p.y,u.y,this.tension),Xo.initCatmullRom(c.z,f.z,p.z,u.z,this.tension));return n.set(Vo.calc(l),Wo.calc(l),Xo.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new U().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function _c(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function cd(i,t){const e=1-i;return e*e*t}function hd(i,t){return 2*(1-i)*i*t}function ud(i,t){return i*i*t}function Js(i,t,e,n){return cd(i,t)+hd(i,e)+ud(i,n)}function fd(i,t){const e=1-i;return e*e*e*t}function dd(i,t){const e=1-i;return 3*e*e*i*t}function pd(i,t){return 3*(1-i)*i*i*t}function md(i,t){return i*i*i*t}function js(i,t,e,n,s){return fd(i,t)+dd(i,e)+pd(i,n)+md(i,s)}class su extends Xn{constructor(t=new pt,e=new pt,n=new pt,s=new pt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new pt){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(js(t,s.x,r.x,o.x,a.x),js(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class gd extends Xn{constructor(t=new U,e=new U,n=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new U){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(js(t,s.x,r.x,o.x,a.x),js(t,s.y,r.y,o.y,a.y),js(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ru extends Xn{constructor(t=new pt,e=new pt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new pt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new pt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class vd extends Xn{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ou extends Xn{constructor(t=new pt,e=new pt,n=new pt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new pt){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Js(t,s.x,r.x,o.x),Js(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class _d extends Xn{constructor(t=new U,e=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new U){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Js(t,s.x,r.x,o.x),Js(t,s.y,r.y,o.y),Js(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class au extends Xn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new pt){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return n.set(_c(a,l.x,c.x,u.x,f.x),_c(a,l.y,c.y,u.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new pt().fromArray(s))}return this}}var xc=Object.freeze({__proto__:null,ArcCurve:ad,CatmullRomCurve3:ld,CubicBezierCurve:su,CubicBezierCurve3:gd,EllipseCurve:yl,LineCurve:ru,LineCurve3:vd,QuadraticBezierCurve:ou,QuadraticBezierCurve3:_d,SplineCurve:au});class xd extends Xn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new xc[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new xc[s.type]().fromJSON(s))}return this}}class Qa extends xd{constructor(t){super(),this.type="Path",this.currentPoint=new pt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new ru(this.currentPoint.clone(),new pt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new ou(this.currentPoint.clone(),new pt(t,e),new pt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new su(this.currentPoint.clone(),new pt(t,e),new pt(n,s),new pt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new au(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){const c=new yl(t,e,n,s,r,o,a,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class lu extends Qa{constructor(t){super(t),this.uuid=As(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Qa().fromJSON(s))}return this}}function Md(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=cu(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Ed(i,t,r,e)),i.length>80*e){a=1/0,l=1/0;let u=-1/0,f=-1/0;for(let p=e;p<s;p+=e){const h=i[p],g=i[p+1];h<a&&(a=h),g<l&&(l=g),h>u&&(u=h),g>f&&(f=g)}c=Math.max(u-a,f-l),c=c!==0?32767/c:0}return ar(r,o,e,a,l,c,0),o}function cu(i,t,e,n,s){let r;if(s===Fd(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=Mc(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Mc(o/n|0,i[o],i[o+1],r);return r&&ys(r,r.next)&&(cr(r),r=r.next),r}function Bi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ys(e,e.next)||Pe(e.prev,e,e.next)===0)){if(cr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ar(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Pd(i,n,s,r);let a=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?Sd(i,n,s,r):yd(i)){t.push(l.i,i.i,c.i),cr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=bd(Bi(i),t),ar(i,t,e,n,s,r,2)):o===2&&wd(i,t,e,n,s,r):ar(Bi(i),t,e,n,s,r,1);break}}}function yd(i){const t=i.prev,e=i,n=i.next;if(Pe(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,u=Math.min(s,r,o),f=Math.min(a,l,c),p=Math.max(s,r,o),h=Math.max(a,l,c);let g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=p&&g.y>=f&&g.y<=h&&Ws(s,a,r,l,o,c,g.x,g.y)&&Pe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Sd(i,t,e,n){const s=i.prev,r=i,o=i.next;if(Pe(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,u=s.y,f=r.y,p=o.y,h=Math.min(a,l,c),g=Math.min(u,f,p),x=Math.max(a,l,c),m=Math.max(u,f,p),d=tl(h,g,t,e,n),M=tl(x,m,t,e,n);let _=i.prevZ,v=i.nextZ;for(;_&&_.z>=d&&v&&v.z<=M;){if(_.x>=h&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&Ws(a,u,l,f,c,p,_.x,_.y)&&Pe(_.prev,_,_.next)>=0||(_=_.prevZ,v.x>=h&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&Ws(a,u,l,f,c,p,v.x,v.y)&&Pe(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;_&&_.z>=d;){if(_.x>=h&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&Ws(a,u,l,f,c,p,_.x,_.y)&&Pe(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;v&&v.z<=M;){if(v.x>=h&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&Ws(a,u,l,f,c,p,v.x,v.y)&&Pe(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function bd(i,t){let e=i;do{const n=e.prev,s=e.next.next;!ys(n,s)&&uu(n,e,e.next,s)&&lr(n,s)&&lr(s,n)&&(t.push(n.i,e.i,s.i),cr(e),cr(e.next),e=i=s),e=e.next}while(e!==i);return Bi(e)}function wd(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Id(o,a)){let l=fu(o,a);o=Bi(o,o.next),l=Bi(l,l.next),ar(o,t,e,n,s,r,0),ar(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Ed(i,t,e,n){const s=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=cu(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Ld(c))}s.sort(Td);for(let r=0;r<s.length;r++)e=Ad(s[r],e);return e}function Td(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Ad(i,t){const e=Cd(i,t);if(!e)return t;const n=fu(e,i);return Bi(n,n.next),Bi(e,e.next)}function Cd(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,o;if(ys(i,e))return e;do{if(ys(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const f=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>r&&(r=f,o=e.x<e.next.x?e:e.next,f===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,c=o.y;let u=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&hu(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){const f=Math.abs(s-e.y)/(n-e.x);lr(e,i)&&(f<u||f===u&&(e.x>o.x||e.x===o.x&&Rd(o,e)))&&(o=e,u=f)}e=e.next}while(e!==a);return o}function Rd(i,t){return Pe(i.prev,i,t.prev)<0&&Pe(t.next,i,i.next)<0}function Pd(i,t,e,n){let s=i;do s.z===0&&(s.z=tl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Dd(s)}function Dd(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function tl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Ld(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function hu(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Ws(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&hu(i,t,e,n,s,r,o,a)}function Id(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Ud(i,t)&&(lr(i,t)&&lr(t,i)&&Nd(i,t)&&(Pe(i.prev,i,t.prev)||Pe(i,t.prev,t))||ys(i,t)&&Pe(i.prev,i,i.next)>0&&Pe(t.prev,t,t.next)>0)}function Pe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ys(i,t){return i.x===t.x&&i.y===t.y}function uu(i,t,e,n){const s=Hr(Pe(i,t,e)),r=Hr(Pe(i,t,n)),o=Hr(Pe(e,n,i)),a=Hr(Pe(e,n,t));return!!(s!==r&&o!==a||s===0&&kr(i,e,t)||r===0&&kr(i,n,t)||o===0&&kr(e,i,n)||a===0&&kr(e,t,n))}function kr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Hr(i){return i>0?1:i<0?-1:0}function Ud(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&uu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function lr(i,t){return Pe(i.prev,i,i.next)<0?Pe(i,t,i.next)>=0&&Pe(i,i.prev,t)>=0:Pe(i,t,i.prev)<0||Pe(i,i.next,t)<0}function Nd(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function fu(i,t){const e=el(i.i,i.x,i.y),n=el(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Mc(i,t,e,n){const s=el(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function cr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function el(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Fd(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class zd{static triangulate(t,e,n=2){return Md(t,e,n)}}class Qs{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Qs.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];yc(t),Sc(n,t);let o=t.length;e.forEach(yc);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Sc(n,e[l]);const a=zd.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function yc(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Sc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Ss extends fr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ss(t.radius,t.detail)}}class bl extends fr{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new bl(t.radius,t.detail)}}class Ve extends xe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,f=t/a,p=e/l,h=[],g=[],x=[],m=[];for(let d=0;d<u;d++){const M=d*p-o;for(let _=0;_<c;_++){const v=_*f-r;g.push(v,-M,0),x.push(0,0,1),m.push(_/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let M=0;M<a;M++){const _=M+c*d,v=M+c*(d+1),w=M+1+c*(d+1),b=M+1+c*d;h.push(_,v,b),h.push(v,w,b)}this.setIndex(h),this.setAttribute("position",new Vt(g,3)),this.setAttribute("normal",new Vt(x,3)),this.setAttribute("uv",new Vt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ve(t.width,t.height,t.widthSegments,t.heightSegments)}}class uo extends xe{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],c=[],u=[];let f=t;const p=(e-t)/s,h=new U,g=new pt;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){const d=r+m/n*o;h.x=f*Math.cos(d),h.y=f*Math.sin(d),l.push(h.x,h.y,h.z),c.push(0,0,1),g.x=(h.x/e+1)/2,g.y=(h.y/e+1)/2,u.push(g.x,g.y)}f+=p}for(let x=0;x<s;x++){const m=x*(n+1);for(let d=0;d<n;d++){const M=d+m,_=M,v=M+n+1,w=M+n+2,b=M+1;a.push(_,v,b),a.push(v,w,b)}}this.setIndex(a),this.setAttribute("position",new Vt(l,3)),this.setAttribute("normal",new Vt(c,3)),this.setAttribute("uv",new Vt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new uo(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class wl extends xe{constructor(t=new lu([new pt(0,.5),new pt(-.5,-.5),new pt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let u=0;u<t.length;u++)c(t[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Vt(s,3)),this.setAttribute("normal",new Vt(r,3)),this.setAttribute("uv",new Vt(o,2));function c(u){const f=s.length/3,p=u.extractPoints(e);let h=p.shape;const g=p.holes;Qs.isClockWise(h)===!1&&(h=h.reverse());for(let m=0,d=g.length;m<d;m++){const M=g[m];Qs.isClockWise(M)===!0&&(g[m]=M.reverse())}const x=Qs.triangulateShape(h,g);for(let m=0,d=g.length;m<d;m++){const M=g[m];h=h.concat(M)}for(let m=0,d=h.length;m<d;m++){const M=h[m];s.push(M.x,M.y,0),r.push(0,0,1),o.push(M.x,M.y)}for(let m=0,d=x.length;m<d;m++){const M=x[m],_=M[0]+f,v=M[1]+f,w=M[2]+f;n.push(_,v,w),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Od(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];n.push(o)}return new wl(n,t.curveSegments)}}function Od(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class Le extends xe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new U,p=new U,h=[],g=[],x=[],m=[];for(let d=0;d<=n;d++){const M=[],_=d/n;let v=0;d===0&&o===0?v=.5/e:d===n&&l===Math.PI&&(v=-.5/e);for(let w=0;w<=e;w++){const b=w/e;f.x=-t*Math.cos(s+b*r)*Math.sin(o+_*a),f.y=t*Math.cos(o+_*a),f.z=t*Math.sin(s+b*r)*Math.sin(o+_*a),g.push(f.x,f.y,f.z),p.copy(f).normalize(),x.push(p.x,p.y,p.z),m.push(b+v,1-_),M.push(c++)}u.push(M)}for(let d=0;d<n;d++)for(let M=0;M<e;M++){const _=u[d][M+1],v=u[d][M],w=u[d+1][M],b=u[d+1][M+1];(d!==0||o>0)&&h.push(_,v,b),(d!==n-1||l<Math.PI)&&h.push(v,w,b)}this.setIndex(h),this.setAttribute("position",new Vt(g,3)),this.setAttribute("normal",new Vt(x,3)),this.setAttribute("uv",new Vt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Le(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ii extends xe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],c=[],u=new U,f=new U,p=new U;for(let h=0;h<=n;h++)for(let g=0;g<=s;g++){const x=g/s*r,m=h/n*Math.PI*2;f.x=(t+e*Math.cos(m))*Math.cos(x),f.y=(t+e*Math.cos(m))*Math.sin(x),f.z=e*Math.sin(m),a.push(f.x,f.y,f.z),u.x=t*Math.cos(x),u.y=t*Math.sin(x),p.subVectors(f,u).normalize(),l.push(p.x,p.y,p.z),c.push(g/s),c.push(h/n)}for(let h=1;h<=n;h++)for(let g=1;g<=s;g++){const x=(s+1)*h+g-1,m=(s+1)*(h-1)+g-1,d=(s+1)*(h-1)+g,M=(s+1)*h+g;o.push(x,m,M),o.push(m,d,M)}this.setIndex(o),this.setAttribute("position",new Vt(a,3)),this.setAttribute("normal",new Vt(l,3)),this.setAttribute("uv",new Vt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ii(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Bd extends Se{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class be extends Cs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Dt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wh,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class kd extends Cs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Hd extends Cs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class El extends _e{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Dt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Gd extends El{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Dt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const qo=new se,bc=new U,wc=new U;class du{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.mapType=Vn,this.map=null,this.mapPass=null,this.matrix=new se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vl,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;bc.setFromMatrixPosition(t.matrixWorld),e.position.copy(bc),wc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(wc),e.updateMatrixWorld(),qo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qo,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(qo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Ec=new se,Bs=new U,Yo=new U;class Vd extends du{constructor(){super(new fn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new pt(4,2),this._viewportCount=6,this._viewports=[new le(2,1,1,1),new le(0,1,1,1),new le(3,1,1,1),new le(1,1,1,1),new le(3,0,1,1),new le(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Bs.setFromMatrixPosition(t.matrixWorld),n.position.copy(Bs),Yo.copy(n.position),Yo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Yo),n.updateMatrixWorld(),s.makeTranslation(-Bs.x,-Bs.y,-Bs.z),Ec.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ec,n.coordinateSystem,n.reversedDepth)}}class Tc extends El{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Vd}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Tl extends tu{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Wd extends du{constructor(){super(new Tl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Xd extends El{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.target=new _e,this.shadow=new Wd}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class qd extends fn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class pu{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Ac(i,t,e,n){const s=Yd(n);switch(e){case Hh:return i*t;case ho:return i*t/s.components*s.byteLength;case ul:return i*t/s.components*s.byteLength;case Vh:return i*t*2/s.components*s.byteLength;case fl:return i*t*2/s.components*s.byteLength;case Gh:return i*t*3/s.components*s.byteLength;case Un:return i*t*4/s.components*s.byteLength;case dl:return i*t*4/s.components*s.byteLength;case $r:case Kr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Jr:case jr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ba:case Ea:return Math.max(i,16)*Math.max(t,8)/4;case Sa:case wa:return Math.max(i,8)*Math.max(t,8)/2;case Ta:case Aa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ca:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ra:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Pa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Da:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case La:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ia:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ua:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Na:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Fa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case za:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Oa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ba:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ka:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ha:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ga:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Va:case Wa:case Xa:return Math.ceil(i/4)*Math.ceil(t/4)*16;case qa:case Ya:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Za:case $a:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Yd(i){switch(i){case Vn:case zh:return{byteLength:1,components:1};case er:case Oh:case ti:return{byteLength:2,components:1};case cl:case hl:return{byteLength:2,components:4};case Oi:case ll:case In:return{byteLength:4,components:1};case Bh:case kh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ol}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ol);function mu(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Zd(i){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,f=c.byteLength,p=i.createBuffer();i.bindBuffer(l,p),i.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=i.HALF_FLOAT:h=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=i.SHORT;else if(c instanceof Uint32Array)h=i.UNSIGNED_INT;else if(c instanceof Int32Array)h=i.INT;else if(c instanceof Int8Array)h=i.BYTE;else if(c instanceof Uint8Array)h=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){const u=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,u);else{f.sort((h,g)=>h.start-g.start);let p=0;for(let h=1;h<f.length;h++){const g=f[p],x=f[h];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++p,f[p]=x)}f.length=p+1;for(let h=0,g=f.length;h<g;h++){const x=f[h];i.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var $d=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Kd=`#ifdef USE_ALPHAHASH
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
#endif`,Jd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ep=`#ifdef USE_AOMAP
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
#endif`,np=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ip=`#ifdef USE_BATCHING
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
#endif`,sp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,op=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ap=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,lp=`#ifdef USE_IRIDESCENCE
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
#endif`,cp=`#ifdef USE_BUMPMAP
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
#endif`,hp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,up=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,mp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,vp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,_p=`#define PI 3.141592653589793
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
} // validated`,xp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Mp=`vec3 transformedNormal = objectNormal;
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
#endif`,yp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ep="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ap=`#ifdef USE_ENVMAP
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
#endif`,Cp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Rp=`#ifdef USE_ENVMAP
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
#endif`,Pp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dp=`#ifdef USE_ENVMAP
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
#endif`,Lp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ip=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Up=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Np=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fp=`#ifdef USE_GRADIENTMAP
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
}`,zp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Op=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kp=`uniform bool receiveShadow;
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
#endif`,Hp=`#ifdef USE_ENVMAP
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
#endif`,Gp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qp=`PhysicalMaterial material;
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
#endif`,Yp=`struct PhysicalMaterial {
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
}`,Zp=`
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
#endif`,$p=`#if defined( RE_IndirectDiffuse )
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
#endif`,Kp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,em=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,im=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,sm=`#if defined( USE_POINTS_UV )
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
#endif`,rm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,om=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,am=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hm=`#ifdef USE_MORPHTARGETS
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
#endif`,um=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,dm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,pm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vm=`#ifdef USE_NORMALMAP
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
#endif`,_m=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Mm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ym=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,wm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Em=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Tm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Am=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Pm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Lm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Im=`float getShadowMask() {
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
}`,Um=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Nm=`#ifdef USE_SKINNING
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
#endif`,Fm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zm=`#ifdef USE_SKINNING
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
#endif`,Om=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,km=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gm=`#ifdef USE_TRANSMISSION
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
#endif`,Vm=`#ifdef USE_TRANSMISSION
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
#endif`,Wm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ym=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Zm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$m=`uniform sampler2D t2D;
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
}`,Km=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t0=`#include <common>
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
}`,e0=`#if DEPTH_PACKING == 3200
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
}`,n0=`#define DISTANCE
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
}`,i0=`#define DISTANCE
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
}`,s0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,r0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o0=`uniform float scale;
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
}`,a0=`uniform vec3 diffuse;
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
}`,l0=`#include <common>
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
}`,c0=`uniform vec3 diffuse;
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
}`,h0=`#define LAMBERT
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
}`,u0=`#define LAMBERT
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
}`,f0=`#define MATCAP
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
}`,d0=`#define MATCAP
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
}`,p0=`#define NORMAL
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
}`,m0=`#define NORMAL
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
}`,g0=`#define PHONG
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
}`,v0=`#define PHONG
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
}`,_0=`#define STANDARD
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
}`,x0=`#define STANDARD
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
}`,M0=`#define TOON
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
}`,y0=`#define TOON
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
}`,S0=`uniform float size;
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
}`,b0=`uniform vec3 diffuse;
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
}`,w0=`#include <common>
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
}`,E0=`uniform vec3 color;
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
}`,T0=`uniform float rotation;
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
}`,A0=`uniform vec3 diffuse;
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
}`,Yt={alphahash_fragment:$d,alphahash_pars_fragment:Kd,alphamap_fragment:Jd,alphamap_pars_fragment:jd,alphatest_fragment:Qd,alphatest_pars_fragment:tp,aomap_fragment:ep,aomap_pars_fragment:np,batching_pars_vertex:ip,batching_vertex:sp,begin_vertex:rp,beginnormal_vertex:op,bsdfs:ap,iridescence_fragment:lp,bumpmap_pars_fragment:cp,clipping_planes_fragment:hp,clipping_planes_pars_fragment:up,clipping_planes_pars_vertex:fp,clipping_planes_vertex:dp,color_fragment:pp,color_pars_fragment:mp,color_pars_vertex:gp,color_vertex:vp,common:_p,cube_uv_reflection_fragment:xp,defaultnormal_vertex:Mp,displacementmap_pars_vertex:yp,displacementmap_vertex:Sp,emissivemap_fragment:bp,emissivemap_pars_fragment:wp,colorspace_fragment:Ep,colorspace_pars_fragment:Tp,envmap_fragment:Ap,envmap_common_pars_fragment:Cp,envmap_pars_fragment:Rp,envmap_pars_vertex:Pp,envmap_physical_pars_fragment:Hp,envmap_vertex:Dp,fog_vertex:Lp,fog_pars_vertex:Ip,fog_fragment:Up,fog_pars_fragment:Np,gradientmap_pars_fragment:Fp,lightmap_pars_fragment:zp,lights_lambert_fragment:Op,lights_lambert_pars_fragment:Bp,lights_pars_begin:kp,lights_toon_fragment:Gp,lights_toon_pars_fragment:Vp,lights_phong_fragment:Wp,lights_phong_pars_fragment:Xp,lights_physical_fragment:qp,lights_physical_pars_fragment:Yp,lights_fragment_begin:Zp,lights_fragment_maps:$p,lights_fragment_end:Kp,logdepthbuf_fragment:Jp,logdepthbuf_pars_fragment:jp,logdepthbuf_pars_vertex:Qp,logdepthbuf_vertex:tm,map_fragment:em,map_pars_fragment:nm,map_particle_fragment:im,map_particle_pars_fragment:sm,metalnessmap_fragment:rm,metalnessmap_pars_fragment:om,morphinstance_vertex:am,morphcolor_vertex:lm,morphnormal_vertex:cm,morphtarget_pars_vertex:hm,morphtarget_vertex:um,normal_fragment_begin:fm,normal_fragment_maps:dm,normal_pars_fragment:pm,normal_pars_vertex:mm,normal_vertex:gm,normalmap_pars_fragment:vm,clearcoat_normal_fragment_begin:_m,clearcoat_normal_fragment_maps:xm,clearcoat_pars_fragment:Mm,iridescence_pars_fragment:ym,opaque_fragment:Sm,packing:bm,premultiplied_alpha_fragment:wm,project_vertex:Em,dithering_fragment:Tm,dithering_pars_fragment:Am,roughnessmap_fragment:Cm,roughnessmap_pars_fragment:Rm,shadowmap_pars_fragment:Pm,shadowmap_pars_vertex:Dm,shadowmap_vertex:Lm,shadowmask_pars_fragment:Im,skinbase_vertex:Um,skinning_pars_vertex:Nm,skinning_vertex:Fm,skinnormal_vertex:zm,specularmap_fragment:Om,specularmap_pars_fragment:Bm,tonemapping_fragment:km,tonemapping_pars_fragment:Hm,transmission_fragment:Gm,transmission_pars_fragment:Vm,uv_pars_fragment:Wm,uv_pars_vertex:Xm,uv_vertex:qm,worldpos_vertex:Ym,background_vert:Zm,background_frag:$m,backgroundCube_vert:Km,backgroundCube_frag:Jm,cube_vert:jm,cube_frag:Qm,depth_vert:t0,depth_frag:e0,distanceRGBA_vert:n0,distanceRGBA_frag:i0,equirect_vert:s0,equirect_frag:r0,linedashed_vert:o0,linedashed_frag:a0,meshbasic_vert:l0,meshbasic_frag:c0,meshlambert_vert:h0,meshlambert_frag:u0,meshmatcap_vert:f0,meshmatcap_frag:d0,meshnormal_vert:p0,meshnormal_frag:m0,meshphong_vert:g0,meshphong_frag:v0,meshphysical_vert:_0,meshphysical_frag:x0,meshtoon_vert:M0,meshtoon_frag:y0,points_vert:S0,points_frag:b0,shadow_vert:w0,shadow_frag:E0,sprite_vert:T0,sprite_frag:A0},mt={common:{diffuse:{value:new Dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new Dt(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},Bn={basic:{uniforms:Qe([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:Qe([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Dt(0)}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:Qe([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Dt(0)},specular:{value:new Dt(1118481)},shininess:{value:30}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:Qe([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new Dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:Qe([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new Dt(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:Qe([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:Qe([mt.points,mt.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:Qe([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:Qe([mt.common,mt.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:Qe([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:Qe([mt.sprite,mt.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distanceRGBA:{uniforms:Qe([mt.common,mt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distanceRGBA_vert,fragmentShader:Yt.distanceRGBA_frag},shadow:{uniforms:Qe([mt.lights,mt.fog,{color:{value:new Dt(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};Bn.physical={uniforms:Qe([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new Dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new Dt(0)},specularColor:{value:new Dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};const Gr={r:0,b:0,g:0},Ei=new pn,C0=new se;function R0(i,t,e,n,s,r,o){const a=new Dt(0);let l=r===!0?0:1,c,u,f=null,p=0,h=null;function g(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?e:t).get(v)),v}function x(_){let v=!1;const w=g(_);w===null?d(a,l):w&&w.isColor&&(d(w,1),v=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(_,v){const w=g(v);w&&(w.isCubeTexture||w.mapping===co)?(u===void 0&&(u=new St(new Ze(1,1,1),new Se({name:"BackgroundCubeMaterial",uniforms:Ms(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,T,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Ei.copy(v.backgroundRotation),Ei.x*=-1,Ei.y*=-1,Ei.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Ei.y*=-1,Ei.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(C0.makeRotationFromEuler(Ei)),u.material.toneMapped=te.getTransfer(w.colorSpace)!==oe,(f!==w||p!==w.version||h!==i.toneMapping)&&(u.material.needsUpdate=!0,f=w,p=w.version,h=i.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new St(new Ve(2,2),new Se({name:"BackgroundMaterial",uniforms:Ms(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=te.getTransfer(w.colorSpace)!==oe,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(f!==w||p!==w.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,f=w,p=w.version,h=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function d(_,v){_.getRGB(Gr,Qh(i)),n.buffers.color.setClear(Gr.r,Gr.g,Gr.b,v,o)}function M(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,v=1){a.set(_),l=v,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,d(a,l)},render:x,addToRenderList:m,dispose:M}}function P0(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null);let r=s,o=!1;function a(S,D,C,F,O){let q=!1;const B=f(F,C,D);r!==B&&(r=B,c(r.object)),q=h(S,F,C,O),q&&g(S,F,C,O),O!==null&&t.update(O,i.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,v(S,D,C,F),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function u(S){return i.deleteVertexArray(S)}function f(S,D,C){const F=C.wireframe===!0;let O=n[S.id];O===void 0&&(O={},n[S.id]=O);let q=O[D.id];q===void 0&&(q={},O[D.id]=q);let B=q[F];return B===void 0&&(B=p(l()),q[F]=B),B}function p(S){const D=[],C=[],F=[];for(let O=0;O<e;O++)D[O]=0,C[O]=0,F[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:C,attributeDivisors:F,object:S,attributes:{},index:null}}function h(S,D,C,F){const O=r.attributes,q=D.attributes;let B=0;const Q=C.getAttributes();for(const L in Q)if(Q[L].location>=0){const X=O[L];let tt=q[L];if(tt===void 0&&(L==="instanceMatrix"&&S.instanceMatrix&&(tt=S.instanceMatrix),L==="instanceColor"&&S.instanceColor&&(tt=S.instanceColor)),X===void 0||X.attribute!==tt||tt&&X.data!==tt.data)return!0;B++}return r.attributesNum!==B||r.index!==F}function g(S,D,C,F){const O={},q=D.attributes;let B=0;const Q=C.getAttributes();for(const L in Q)if(Q[L].location>=0){let X=q[L];X===void 0&&(L==="instanceMatrix"&&S.instanceMatrix&&(X=S.instanceMatrix),L==="instanceColor"&&S.instanceColor&&(X=S.instanceColor));const tt={};tt.attribute=X,X&&X.data&&(tt.data=X.data),O[L]=tt,B++}r.attributes=O,r.attributesNum=B,r.index=F}function x(){const S=r.newAttributes;for(let D=0,C=S.length;D<C;D++)S[D]=0}function m(S){d(S,0)}function d(S,D){const C=r.newAttributes,F=r.enabledAttributes,O=r.attributeDivisors;C[S]=1,F[S]===0&&(i.enableVertexAttribArray(S),F[S]=1),O[S]!==D&&(i.vertexAttribDivisor(S,D),O[S]=D)}function M(){const S=r.newAttributes,D=r.enabledAttributes;for(let C=0,F=D.length;C<F;C++)D[C]!==S[C]&&(i.disableVertexAttribArray(C),D[C]=0)}function _(S,D,C,F,O,q,B){B===!0?i.vertexAttribIPointer(S,D,C,O,q):i.vertexAttribPointer(S,D,C,F,O,q)}function v(S,D,C,F){x();const O=F.attributes,q=C.getAttributes(),B=D.defaultAttributeValues;for(const Q in q){const L=q[Q];if(L.location>=0){let G=O[Q];if(G===void 0&&(Q==="instanceMatrix"&&S.instanceMatrix&&(G=S.instanceMatrix),Q==="instanceColor"&&S.instanceColor&&(G=S.instanceColor)),G!==void 0){const X=G.normalized,tt=G.itemSize,ut=t.get(G);if(ut===void 0)continue;const J=ut.buffer,Tt=ut.type,st=ut.bytesPerElement,V=Tt===i.INT||Tt===i.UNSIGNED_INT||G.gpuType===ll;if(G.isInterleavedBufferAttribute){const R=G.data,Y=R.stride,ct=G.offset;if(R.isInstancedInterleavedBuffer){for(let it=0;it<L.locationSize;it++)d(L.location+it,R.meshPerAttribute);S.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=R.meshPerAttribute*R.count)}else for(let it=0;it<L.locationSize;it++)m(L.location+it);i.bindBuffer(i.ARRAY_BUFFER,J);for(let it=0;it<L.locationSize;it++)_(L.location+it,tt/L.locationSize,Tt,X,Y*st,(ct+tt/L.locationSize*it)*st,V)}else{if(G.isInstancedBufferAttribute){for(let R=0;R<L.locationSize;R++)d(L.location+R,G.meshPerAttribute);S.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let R=0;R<L.locationSize;R++)m(L.location+R);i.bindBuffer(i.ARRAY_BUFFER,J);for(let R=0;R<L.locationSize;R++)_(L.location+R,tt/L.locationSize,Tt,X,tt*st,tt/L.locationSize*R*st,V)}}else if(B!==void 0){const X=B[Q];if(X!==void 0)switch(X.length){case 2:i.vertexAttrib2fv(L.location,X);break;case 3:i.vertexAttrib3fv(L.location,X);break;case 4:i.vertexAttrib4fv(L.location,X);break;default:i.vertexAttrib1fv(L.location,X)}}}}M()}function w(){P();for(const S in n){const D=n[S];for(const C in D){const F=D[C];for(const O in F)u(F[O].object),delete F[O];delete D[C]}delete n[S]}}function b(S){if(n[S.id]===void 0)return;const D=n[S.id];for(const C in D){const F=D[C];for(const O in F)u(F[O].object),delete F[O];delete D[C]}delete n[S.id]}function T(S){for(const D in n){const C=n[D];if(C[S.id]===void 0)continue;const F=C[S.id];for(const O in F)u(F[O].object),delete F[O];delete C[S.id]}}function P(){y(),o=!0,r!==s&&(r=s,c(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:y,dispose:w,releaseStatesOfGeometry:b,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:m,disableUnusedAttributes:M}}function D0(i,t,e){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function o(c,u,f){f!==0&&(i.drawArraysInstanced(n,c,u,f),e.update(u,n,f))}function a(c,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,f);let h=0;for(let g=0;g<f;g++)h+=u[g];e.update(h,n,1)}function l(c,u,f,p){if(f===0)return;const h=t.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<c.length;g++)o(c[g],u[g],p[g]);else{h.multiDrawArraysInstancedWEBGL(n,c,0,u,0,p,0,f);let g=0;for(let x=0;x<f;x++)g+=u[x]*p[x];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function L0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==Un&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const P=T===ti&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Vn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==In&&!P)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=e.logarithmicDepthBuffer===!0,p=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=g>0,b=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:p,maxTextures:h,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:M,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:w,maxSamples:b}}function I0(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Ci,a=new Xt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){const h=f.length!==0||p||n!==0||s;return s=p,n=f.length,h},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,p){e=u(f,p,0)},this.setState=function(f,p,h){const g=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,d=i.get(f);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const M=r?0:n,_=M*4;let v=d.clippingState||null;l.value=v,v=u(g,p,_,h);for(let w=0;w!==_;++w)v[w]=e[w];d.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,p,h,g){const x=f!==null?f.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const d=h+x*4,M=p.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<d)&&(m=new Float32Array(d));for(let _=0,v=h;_!==x;++_,v+=4)o.copy(f[_]).applyMatrix4(M,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function U0(i){let t=new WeakMap;function e(o,a){return a===xa?o.mapping=vs:a===Ma&&(o.mapping=_s),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===xa||a===Ma)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Qf(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const cs=4,Cc=[.125,.215,.35,.446,.526,.582],Di=20,Zo=new Tl,Rc=new Dt;let $o=null,Ko=0,Jo=0,jo=!1;const Ri=(1+Math.sqrt(5))/2,os=1/Ri,Pc=[new U(-Ri,os,0),new U(Ri,os,0),new U(-os,0,Ri),new U(os,0,Ri),new U(0,Ri,-os),new U(0,Ri,os),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],N0=new U;class Dc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=N0}=r;$o=this._renderer.getRenderTarget(),Ko=this._renderer.getActiveCubeFace(),Jo=this._renderer.getActiveMipmapLevel(),jo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Uc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ic(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget($o,Ko,Jo),this._renderer.xr.enabled=jo,t.scissorTest=!1,Vr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===vs||t.mapping===_s?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),$o=this._renderer.getRenderTarget(),Ko=this._renderer.getActiveCubeFace(),Jo=this._renderer.getActiveMipmapLevel(),jo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:wn,minFilter:wn,generateMipmaps:!1,type:ti,format:Un,colorSpace:xs,depthBuffer:!1},s=Lc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=F0(r)),this._blurMaterial=z0(r,t,e)}return s}_compileMaterial(t){const e=new St(this._lodPlanes[0],t);this._renderer.compile(e,Zo)}_sceneToCubeUV(t,e,n,s,r){const l=new fn(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,p=f.autoClear,h=f.toneMapping;f.getClearColor(Rc),f.toneMapping=mi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null));const x=new me({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),m=new St(new Ze,x);let d=!1;const M=t.background;M?M.isColor&&(x.color.copy(M),t.background=null,d=!0):(x.color.copy(Rc),d=!0);for(let _=0;_<6;_++){const v=_%3;v===0?(l.up.set(0,c[_],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[_],r.y,r.z)):v===1?(l.up.set(0,0,c[_]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[_],r.z)):(l.up.set(0,c[_],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[_]));const w=this._cubeSize;Vr(s,v*w,_>2?w:0,w,w),f.setRenderTarget(s),d&&f.render(m,l),f.render(t,l)}m.geometry.dispose(),m.material.dispose(),f.toneMapping=h,f.autoClear=p,t.background=M}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===vs||t.mapping===_s;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Uc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ic());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new St(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Vr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Zo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Pc[(s-r-1)%Pc.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new St(this._lodPlanes[s],c),p=c.uniforms,h=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*h):2*Math.PI/(2*Di-1),x=r/g,m=isFinite(r)?1+Math.floor(u*x):Di;m>Di&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Di}`);const d=[];let M=0;for(let T=0;T<Di;++T){const P=T/x,y=Math.exp(-P*P/2);d.push(y),T===0?M+=y:T<m&&(M+=2*y)}for(let T=0;T<d.length;T++)d[T]=d[T]/M;p.envMap.value=t.texture,p.samples.value=m,p.weights.value=d,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:_}=this;p.dTheta.value=g,p.mipInt.value=_-n;const v=this._sizeLods[s],w=3*v*(s>_-cs?s-_+cs:0),b=4*(this._cubeSize-v);Vr(e,w,b,3*v,2*v),l.setRenderTarget(e),l.render(f,Zo)}}function F0(i){const t=[],e=[],n=[];let s=i;const r=i-cs+1+Cc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-cs?l=Cc[o-i+cs-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,p=[u,u,f,u,f,f,u,u,f,f,u,f],h=6,g=6,x=3,m=2,d=1,M=new Float32Array(x*g*h),_=new Float32Array(m*g*h),v=new Float32Array(d*g*h);for(let b=0;b<h;b++){const T=b%3*2/3-1,P=b>2?0:-1,y=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];M.set(y,x*g*b),_.set(p,m*g*b);const S=[b,b,b,b,b,b];v.set(S,d*g*b)}const w=new xe;w.setAttribute("position",new ce(M,x)),w.setAttribute("uv",new ce(_,m)),w.setAttribute("faceIndex",new ce(v,d)),t.push(w),s>cs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Lc(i,t,e){const n=new Nn(i,t,e);return n.texture.mapping=co,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Vr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function z0(i,t,e){const n=new Float32Array(Di),s=new U(0,1,0);return new Se({name:"SphericalGaussianBlur",defines:{n:Di,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Al(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Ic(){return new Se({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Al(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Uc(){return new Se({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Al(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Al(){return`

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
	`}function O0(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===xa||l===Ma,u=l===vs||l===_s;if(c||u){let f=t.get(a);const p=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return e===null&&(e=new Dc(i)),f=c?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const h=a.image;return c&&h&&h.height>0||u&&h&&s(h)?(e===null&&(e=new Dc(i)),f=c?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function B0(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&rr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function k0(i,t,e,n){const s={},r=new WeakMap;function o(f){const p=f.target;p.index!==null&&t.remove(p.index);for(const g in p.attributes)t.remove(p.attributes[g]);p.removeEventListener("dispose",o),delete s[p.id];const h=r.get(p);h&&(t.remove(h),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function a(f,p){return s[p.id]===!0||(p.addEventListener("dispose",o),s[p.id]=!0,e.memory.geometries++),p}function l(f){const p=f.attributes;for(const h in p)t.update(p[h],i.ARRAY_BUFFER)}function c(f){const p=[],h=f.index,g=f.attributes.position;let x=0;if(h!==null){const M=h.array;x=h.version;for(let _=0,v=M.length;_<v;_+=3){const w=M[_+0],b=M[_+1],T=M[_+2];p.push(w,b,b,T,T,w)}}else if(g!==void 0){const M=g.array;x=g.version;for(let _=0,v=M.length/3-1;_<v;_+=3){const w=_+0,b=_+1,T=_+2;p.push(w,b,b,T,T,w)}}else return;const m=new(qh(p)?jh:Jh)(p,1);m.version=x;const d=r.get(f);d&&t.remove(d),r.set(f,m)}function u(f){const p=r.get(f);if(p){const h=f.index;h!==null&&p.version<h.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function H0(i,t,e){let n;function s(p){n=p}let r,o;function a(p){r=p.type,o=p.bytesPerElement}function l(p,h){i.drawElements(n,h,r,p*o),e.update(h,n,1)}function c(p,h,g){g!==0&&(i.drawElementsInstanced(n,h,r,p*o,g),e.update(h,n,g))}function u(p,h,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,p,0,g);let m=0;for(let d=0;d<g;d++)m+=h[d];e.update(m,n,1)}function f(p,h,g,x){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<p.length;d++)c(p[d]/o,h[d],x[d]);else{m.multiDrawElementsInstancedWEBGL(n,h,0,r,p,0,x,0,g);let d=0;for(let M=0;M<g;M++)d+=h[M]*x[M];e.update(d,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function G0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function V0(i,t,e){const n=new WeakMap,s=new le;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let p=n.get(a);if(p===void 0||p.count!==f){let y=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",y)};p!==void 0&&p.texture.dispose();const h=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let _=0;h===!0&&(_=1),g===!0&&(_=2),x===!0&&(_=3);let v=a.attributes.position.count*_,w=1;v>t.maxTextureSize&&(w=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);const b=new Float32Array(v*w*4*f),T=new Yh(b,v,w,f);T.type=In,T.needsUpdate=!0;const P=_*4;for(let S=0;S<f;S++){const D=m[S],C=d[S],F=M[S],O=v*w*4*S;for(let q=0;q<D.count;q++){const B=q*P;h===!0&&(s.fromBufferAttribute(D,q),b[O+B+0]=s.x,b[O+B+1]=s.y,b[O+B+2]=s.z,b[O+B+3]=0),g===!0&&(s.fromBufferAttribute(C,q),b[O+B+4]=s.x,b[O+B+5]=s.y,b[O+B+6]=s.z,b[O+B+7]=0),x===!0&&(s.fromBufferAttribute(F,q),b[O+B+8]=s.x,b[O+B+9]=s.y,b[O+B+10]=s.z,b[O+B+11]=F.itemSize===4?s.w:1)}}p={count:f,texture:T,size:new pt(v,w)},n.set(a,p),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let h=0;for(let x=0;x<c.length;x++)h+=c[x];const g=a.morphTargetsRelative?1:1-h;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function W0(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,f=t.get(l,u);if(s.get(f)!==c&&(t.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return f}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}const gu=new Ke,Nc=new nu(1,1),vu=new Yh,_u=new zf,xu=new eu,Fc=[],zc=[],Oc=new Float32Array(16),Bc=new Float32Array(9),kc=new Float32Array(4);function Rs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Fc[s];if(r===void 0&&(r=new Float32Array(s),Fc[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Oe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Be(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function fo(i,t){let e=zc[t];e===void 0&&(e=new Int32Array(t),zc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function X0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function q0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2fv(this.addr,t),Be(e,t)}}function Y0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Oe(e,t))return;i.uniform3fv(this.addr,t),Be(e,t)}}function Z0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4fv(this.addr,t),Be(e,t)}}function $0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,n))return;kc.set(n),i.uniformMatrix2fv(this.addr,!1,kc),Be(e,n)}}function K0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,n))return;Bc.set(n),i.uniformMatrix3fv(this.addr,!1,Bc),Be(e,n)}}function J0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,n))return;Oc.set(n),i.uniformMatrix4fv(this.addr,!1,Oc),Be(e,n)}}function j0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Q0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2iv(this.addr,t),Be(e,t)}}function tg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;i.uniform3iv(this.addr,t),Be(e,t)}}function eg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4iv(this.addr,t),Be(e,t)}}function ng(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function ig(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2uiv(this.addr,t),Be(e,t)}}function sg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;i.uniform3uiv(this.addr,t),Be(e,t)}}function rg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4uiv(this.addr,t),Be(e,t)}}function og(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Nc.compareFunction=Xh,r=Nc):r=gu,e.setTexture2D(t||r,s)}function ag(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||_u,s)}function lg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||xu,s)}function cg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||vu,s)}function hg(i){switch(i){case 5126:return X0;case 35664:return q0;case 35665:return Y0;case 35666:return Z0;case 35674:return $0;case 35675:return K0;case 35676:return J0;case 5124:case 35670:return j0;case 35667:case 35671:return Q0;case 35668:case 35672:return tg;case 35669:case 35673:return eg;case 5125:return ng;case 36294:return ig;case 36295:return sg;case 36296:return rg;case 35678:case 36198:case 36298:case 36306:case 35682:return og;case 35679:case 36299:case 36307:return ag;case 35680:case 36300:case 36308:case 36293:return lg;case 36289:case 36303:case 36311:case 36292:return cg}}function ug(i,t){i.uniform1fv(this.addr,t)}function fg(i,t){const e=Rs(t,this.size,2);i.uniform2fv(this.addr,e)}function dg(i,t){const e=Rs(t,this.size,3);i.uniform3fv(this.addr,e)}function pg(i,t){const e=Rs(t,this.size,4);i.uniform4fv(this.addr,e)}function mg(i,t){const e=Rs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function gg(i,t){const e=Rs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function vg(i,t){const e=Rs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function _g(i,t){i.uniform1iv(this.addr,t)}function xg(i,t){i.uniform2iv(this.addr,t)}function Mg(i,t){i.uniform3iv(this.addr,t)}function yg(i,t){i.uniform4iv(this.addr,t)}function Sg(i,t){i.uniform1uiv(this.addr,t)}function bg(i,t){i.uniform2uiv(this.addr,t)}function wg(i,t){i.uniform3uiv(this.addr,t)}function Eg(i,t){i.uniform4uiv(this.addr,t)}function Tg(i,t,e){const n=this.cache,s=t.length,r=fo(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||gu,r[o])}function Ag(i,t,e){const n=this.cache,s=t.length,r=fo(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||_u,r[o])}function Cg(i,t,e){const n=this.cache,s=t.length,r=fo(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||xu,r[o])}function Rg(i,t,e){const n=this.cache,s=t.length,r=fo(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||vu,r[o])}function Pg(i){switch(i){case 5126:return ug;case 35664:return fg;case 35665:return dg;case 35666:return pg;case 35674:return mg;case 35675:return gg;case 35676:return vg;case 5124:case 35670:return _g;case 35667:case 35671:return xg;case 35668:case 35672:return Mg;case 35669:case 35673:return yg;case 5125:return Sg;case 36294:return bg;case 36295:return wg;case 36296:return Eg;case 35678:case 36198:case 36298:case 36306:case 35682:return Tg;case 35679:case 36299:case 36307:return Ag;case 35680:case 36300:case 36308:case 36293:return Cg;case 36289:case 36303:case 36311:case 36292:return Rg}}class Dg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=hg(e.type)}}class Lg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Pg(e.type)}}class Ig{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Qo=/(\w+)(\])?(\[|\.)?/g;function Hc(i,t){i.seq.push(t),i.map[t.id]=t}function Ug(i,t,e){const n=i.name,s=n.length;for(Qo.lastIndex=0;;){const r=Qo.exec(n),o=Qo.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Hc(e,c===void 0?new Dg(a,i,t):new Lg(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new Ig(a),Hc(e,f)),e=f}}}class Qr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Ug(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Gc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Ng=37297;let Fg=0;function zg(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Vc=new Xt;function Og(i){te._getMatrix(Vc,te.workingColorSpace,i);const t=`mat3( ${Vc.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(i)){case io:return[t,"LinearTransferOETF"];case oe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Wc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+zg(i.getShaderSource(t),a)}else return r}function Bg(i,t){const e=Og(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function kg(i,t){let e;switch(t){case Ph:e="Linear";break;case Dh:e="Reinhard";break;case Lh:e="Cineon";break;case al:e="ACESFilmic";break;case Uh:e="AgX";break;case Nh:e="Neutral";break;case Ih:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Wr=new U;function Hg(){te.getLuminanceCoefficients(Wr);const i=Wr.x.toFixed(4),t=Wr.y.toFixed(4),e=Wr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Gg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xs).join(`
`)}function Vg(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Wg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Xs(i){return i!==""}function Xc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function qc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Xg=/^[ \t]*#include +<([\w\d./]+)>/gm;function nl(i){return i.replace(Xg,Yg)}const qg=new Map;function Yg(i,t){let e=Yt[t];if(e===void 0){const n=qg.get(t);if(n!==void 0)e=Yt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return nl(e)}const Zg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yc(i){return i.replace(Zg,$g)}function $g(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Zc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Kg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ah?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ch?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===jn&&(t="SHADOWMAP_TYPE_VSM"),t}function Jg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case vs:case _s:t="ENVMAP_TYPE_CUBE";break;case co:t="ENVMAP_TYPE_CUBE_UV";break}return t}function jg(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===_s&&(t="ENVMAP_MODE_REFRACTION"),t}function Qg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Rh:t="ENVMAP_BLENDING_MULTIPLY";break;case gf:t="ENVMAP_BLENDING_MIX";break;case vf:t="ENVMAP_BLENDING_ADD";break}return t}function tv(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function ev(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Kg(e),c=Jg(e),u=jg(e),f=Qg(e),p=tv(e),h=Gg(e),g=Vg(r),x=s.createProgram();let m,d,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Xs).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Xs).join(`
`),d.length>0&&(d+=`
`)):(m=[Zc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xs).join(`
`),d=[Zc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==mi?"#define TONE_MAPPING":"",e.toneMapping!==mi?Yt.tonemapping_pars_fragment:"",e.toneMapping!==mi?kg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,Bg("linearToOutputTexel",e.outputColorSpace),Hg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Xs).join(`
`)),o=nl(o),o=Xc(o,e),o=qc(o,e),a=nl(a),a=Xc(a,e),a=qc(a,e),o=Yc(o),a=Yc(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===$l?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===$l?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const _=M+m+o,v=M+d+a,w=Gc(s,s.VERTEX_SHADER,_),b=Gc(s,s.FRAGMENT_SHADER,v);s.attachShader(x,w),s.attachShader(x,b),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function T(D){if(i.debug.checkShaderErrors){const C=s.getProgramInfoLog(x)||"",F=s.getShaderInfoLog(w)||"",O=s.getShaderInfoLog(b)||"",q=C.trim(),B=F.trim(),Q=O.trim();let L=!0,G=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(L=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,w,b);else{const X=Wc(s,w,"vertex"),tt=Wc(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+q+`
`+X+`
`+tt)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(B===""||Q==="")&&(G=!1);G&&(D.diagnostics={runnable:L,programLog:q,vertexShader:{log:B,prefix:m},fragmentShader:{log:Q,prefix:d}})}s.deleteShader(w),s.deleteShader(b),P=new Qr(s,x),y=Wg(s,x)}let P;this.getUniforms=function(){return P===void 0&&T(this),P};let y;this.getAttributes=function(){return y===void 0&&T(this),y};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(x,Ng)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Fg++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=w,this.fragmentShader=b,this}let nv=0;class iv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new sv(t),e.set(t,n)),n}}class sv{constructor(t){this.id=nv++,this.code=t,this.usedTimes=0}}function rv(i,t,e,n,s,r,o){const a=new $h,l=new iv,c=new Set,u=[],f=s.logarithmicDepthBuffer,p=s.vertexTextures;let h=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,S,D,C,F){const O=C.fog,q=F.geometry,B=y.isMeshStandardMaterial?C.environment:null,Q=(y.isMeshStandardMaterial?e:t).get(y.envMap||B),L=Q&&Q.mapping===co?Q.image.height:null,G=g[y.type];y.precision!==null&&(h=s.getMaxPrecision(y.precision),h!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",h,"instead."));const X=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,tt=X!==void 0?X.length:0;let ut=0;q.morphAttributes.position!==void 0&&(ut=1),q.morphAttributes.normal!==void 0&&(ut=2),q.morphAttributes.color!==void 0&&(ut=3);let J,Tt,st,V;if(G){const ie=Bn[G];J=ie.vertexShader,Tt=ie.fragmentShader}else J=y.vertexShader,Tt=y.fragmentShader,l.update(y),st=l.getVertexShaderID(y),V=l.getFragmentShaderID(y);const R=i.getRenderTarget(),Y=i.state.buffers.depth.getReversed(),ct=F.isInstancedMesh===!0,it=F.isBatchedMesh===!0,Et=!!y.map,Jt=!!y.matcap,N=!!Q,Nt=!!y.aoMap,At=!!y.lightMap,_t=!!y.bumpMap,ft=!!y.normalMap,Zt=!!y.displacementMap,Mt=!!y.emissiveMap,zt=!!y.metalnessMap,jt=!!y.roughnessMap,re=y.anisotropy>0,I=y.clearcoat>0,E=y.dispersion>0,W=y.iridescence>0,j=y.sheen>0,nt=y.transmission>0,K=re&&!!y.anisotropyMap,Ut=I&&!!y.clearcoatMap,ht=I&&!!y.clearcoatNormalMap,Pt=I&&!!y.clearcoatRoughnessMap,Lt=W&&!!y.iridescenceMap,at=W&&!!y.iridescenceThicknessMap,xt=j&&!!y.sheenColorMap,kt=j&&!!y.sheenRoughnessMap,It=!!y.specularMap,gt=!!y.specularColorMap,Wt=!!y.specularIntensityMap,z=nt&&!!y.transmissionMap,lt=nt&&!!y.thicknessMap,dt=!!y.gradientMap,wt=!!y.alphaMap,rt=y.alphaTest>0,et=!!y.alphaHash,Rt=!!y.extensions;let Gt=mi;y.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Gt=i.toneMapping);const pe={shaderID:G,shaderType:y.type,shaderName:y.name,vertexShader:J,fragmentShader:Tt,defines:y.defines,customVertexShaderID:st,customFragmentShaderID:V,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:h,batching:it,batchingColor:it&&F._colorsTexture!==null,instancing:ct,instancingColor:ct&&F.instanceColor!==null,instancingMorph:ct&&F.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:R===null?i.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:xs,alphaToCoverage:!!y.alphaToCoverage,map:Et,matcap:Jt,envMap:N,envMapMode:N&&Q.mapping,envMapCubeUVHeight:L,aoMap:Nt,lightMap:At,bumpMap:_t,normalMap:ft,displacementMap:p&&Zt,emissiveMap:Mt,normalMapObjectSpace:ft&&y.normalMapType===yf,normalMapTangentSpace:ft&&y.normalMapType===Wh,metalnessMap:zt,roughnessMap:jt,anisotropy:re,anisotropyMap:K,clearcoat:I,clearcoatMap:Ut,clearcoatNormalMap:ht,clearcoatRoughnessMap:Pt,dispersion:E,iridescence:W,iridescenceMap:Lt,iridescenceThicknessMap:at,sheen:j,sheenColorMap:xt,sheenRoughnessMap:kt,specularMap:It,specularColorMap:gt,specularIntensityMap:Wt,transmission:nt,transmissionMap:z,thicknessMap:lt,gradientMap:dt,opaque:y.transparent===!1&&y.blending===Fi&&y.alphaToCoverage===!1,alphaMap:wt,alphaTest:rt,alphaHash:et,combine:y.combine,mapUv:Et&&x(y.map.channel),aoMapUv:Nt&&x(y.aoMap.channel),lightMapUv:At&&x(y.lightMap.channel),bumpMapUv:_t&&x(y.bumpMap.channel),normalMapUv:ft&&x(y.normalMap.channel),displacementMapUv:Zt&&x(y.displacementMap.channel),emissiveMapUv:Mt&&x(y.emissiveMap.channel),metalnessMapUv:zt&&x(y.metalnessMap.channel),roughnessMapUv:jt&&x(y.roughnessMap.channel),anisotropyMapUv:K&&x(y.anisotropyMap.channel),clearcoatMapUv:Ut&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:ht&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pt&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Lt&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:at&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:xt&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:kt&&x(y.sheenRoughnessMap.channel),specularMapUv:It&&x(y.specularMap.channel),specularColorMapUv:gt&&x(y.specularColorMap.channel),specularIntensityMapUv:Wt&&x(y.specularIntensityMap.channel),transmissionMapUv:z&&x(y.transmissionMap.channel),thicknessMapUv:lt&&x(y.thicknessMap.channel),alphaMapUv:wt&&x(y.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(ft||re),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!q.attributes.uv&&(Et||wt),fog:!!O,useFog:y.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Y,skinning:F.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:ut,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:Gt,decodeVideoTexture:Et&&y.map.isVideoTexture===!0&&te.getTransfer(y.map.colorSpace)===oe,decodeVideoTextureEmissive:Mt&&y.emissiveMap.isVideoTexture===!0&&te.getTransfer(y.emissiveMap.colorSpace)===oe,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ye,flipSided:y.side===en,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Rt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Rt&&y.extensions.multiDraw===!0||it)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return pe.vertexUv1s=c.has(1),pe.vertexUv2s=c.has(2),pe.vertexUv3s=c.has(3),c.clear(),pe}function d(y){const S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(const D in y.defines)S.push(D),S.push(y.defines[D]);return y.isRawShaderMaterial===!1&&(M(S,y),_(S,y),S.push(i.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function M(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function _(y,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),y.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),y.push(a.mask)}function v(y){const S=g[y.type];let D;if(S){const C=Bn[S];D=or.clone(C.uniforms)}else D=y.uniforms;return D}function w(y,S){let D;for(let C=0,F=u.length;C<F;C++){const O=u[C];if(O.cacheKey===S){D=O,++D.usedTimes;break}}return D===void 0&&(D=new ev(i,S,y,r),u.push(D)),D}function b(y){if(--y.usedTimes===0){const S=u.indexOf(y);u[S]=u[u.length-1],u.pop(),y.destroy()}}function T(y){l.remove(y)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:v,acquireProgram:w,releaseProgram:b,releaseShaderCache:T,programs:u,dispose:P}}function ov(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function av(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function $c(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Kc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(f,p,h,g,x,m){let d=i[t];return d===void 0?(d={id:f.id,object:f,geometry:p,material:h,groupOrder:g,renderOrder:f.renderOrder,z:x,group:m},i[t]=d):(d.id=f.id,d.object=f,d.geometry=p,d.material=h,d.groupOrder=g,d.renderOrder=f.renderOrder,d.z=x,d.group=m),t++,d}function a(f,p,h,g,x,m){const d=o(f,p,h,g,x,m);h.transmission>0?n.push(d):h.transparent===!0?s.push(d):e.push(d)}function l(f,p,h,g,x,m){const d=o(f,p,h,g,x,m);h.transmission>0?n.unshift(d):h.transparent===!0?s.unshift(d):e.unshift(d)}function c(f,p){e.length>1&&e.sort(f||av),n.length>1&&n.sort(p||$c),s.length>1&&s.sort(p||$c)}function u(){for(let f=t,p=i.length;f<p;f++){const h=i[f];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function lv(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Kc,i.set(n,[o])):s>=r.length?(o=new Kc,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function cv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new Dt};break;case"SpotLight":e={position:new U,direction:new U,color:new Dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Dt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Dt,groundColor:new Dt};break;case"RectAreaLight":e={color:new Dt,position:new U,halfWidth:new U,halfHeight:new U};break}return i[t.id]=e,e}}}function hv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let uv=0;function fv(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function dv(i){const t=new cv,e=hv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);const s=new U,r=new se,o=new se;function a(c){let u=0,f=0,p=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let h=0,g=0,x=0,m=0,d=0,M=0,_=0,v=0,w=0,b=0,T=0;c.sort(fv);for(let y=0,S=c.length;y<S;y++){const D=c[y],C=D.color,F=D.intensity,O=D.distance,q=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=C.r*F,f+=C.g*F,p+=C.b*F;else if(D.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(D.sh.coefficients[B],F);T++}else if(D.isDirectionalLight){const B=t.get(D);if(B.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const Q=D.shadow,L=e.get(D);L.shadowIntensity=Q.intensity,L.shadowBias=Q.bias,L.shadowNormalBias=Q.normalBias,L.shadowRadius=Q.radius,L.shadowMapSize=Q.mapSize,n.directionalShadow[h]=L,n.directionalShadowMap[h]=q,n.directionalShadowMatrix[h]=D.shadow.matrix,M++}n.directional[h]=B,h++}else if(D.isSpotLight){const B=t.get(D);B.position.setFromMatrixPosition(D.matrixWorld),B.color.copy(C).multiplyScalar(F),B.distance=O,B.coneCos=Math.cos(D.angle),B.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),B.decay=D.decay,n.spot[x]=B;const Q=D.shadow;if(D.map&&(n.spotLightMap[w]=D.map,w++,Q.updateMatrices(D),D.castShadow&&b++),n.spotLightMatrix[x]=Q.matrix,D.castShadow){const L=e.get(D);L.shadowIntensity=Q.intensity,L.shadowBias=Q.bias,L.shadowNormalBias=Q.normalBias,L.shadowRadius=Q.radius,L.shadowMapSize=Q.mapSize,n.spotShadow[x]=L,n.spotShadowMap[x]=q,v++}x++}else if(D.isRectAreaLight){const B=t.get(D);B.color.copy(C).multiplyScalar(F),B.halfWidth.set(D.width*.5,0,0),B.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=B,m++}else if(D.isPointLight){const B=t.get(D);if(B.color.copy(D.color).multiplyScalar(D.intensity),B.distance=D.distance,B.decay=D.decay,D.castShadow){const Q=D.shadow,L=e.get(D);L.shadowIntensity=Q.intensity,L.shadowBias=Q.bias,L.shadowNormalBias=Q.normalBias,L.shadowRadius=Q.radius,L.shadowMapSize=Q.mapSize,L.shadowCameraNear=Q.camera.near,L.shadowCameraFar=Q.camera.far,n.pointShadow[g]=L,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=D.shadow.matrix,_++}n.point[g]=B,g++}else if(D.isHemisphereLight){const B=t.get(D);B.skyColor.copy(D.color).multiplyScalar(F),B.groundColor.copy(D.groundColor).multiplyScalar(F),n.hemi[d]=B,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=mt.LTC_FLOAT_1,n.rectAreaLTC2=mt.LTC_FLOAT_2):(n.rectAreaLTC1=mt.LTC_HALF_1,n.rectAreaLTC2=mt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=p;const P=n.hash;(P.directionalLength!==h||P.pointLength!==g||P.spotLength!==x||P.rectAreaLength!==m||P.hemiLength!==d||P.numDirectionalShadows!==M||P.numPointShadows!==_||P.numSpotShadows!==v||P.numSpotMaps!==w||P.numLightProbes!==T)&&(n.directional.length=h,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=v+w-b,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=T,P.directionalLength=h,P.pointLength=g,P.spotLength=x,P.rectAreaLength=m,P.hemiLength=d,P.numDirectionalShadows=M,P.numPointShadows=_,P.numSpotShadows=v,P.numSpotMaps=w,P.numLightProbes=T,n.version=uv++)}function l(c,u){let f=0,p=0,h=0,g=0,x=0;const m=u.matrixWorldInverse;for(let d=0,M=c.length;d<M;d++){const _=c[d];if(_.isDirectionalLight){const v=n.directional[f];v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),f++}else if(_.isSpotLight){const v=n.spot[h];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),h++}else if(_.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(_.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(_.width*.5,0,0),v.halfHeight.set(0,_.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){const v=n.point[p];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),p++}else if(_.isHemisphereLight){const v=n.hemi[x];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:n}}function Jc(i){const t=new dv(i),e=[],n=[];function s(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function pv(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Jc(i),t.set(s,[a])):r>=o.length?(a=new Jc(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const mv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gv=`uniform sampler2D shadow_pass;
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
}`;function vv(i,t,e){let n=new vl;const s=new pt,r=new pt,o=new le,a=new kd({depthPacking:Mf}),l=new Hd,c={},u=e.maxTextureSize,f={[ni]:en,[en]:ni,[ye]:ye},p=new Se({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:mv,fragmentShader:gv}),h=p.clone();h.defines.HORIZONTAL_PASS=1;const g=new xe;g.setAttribute("position",new ce(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new St(g,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ah;let d=this.type;this.render=function(b,T,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const y=i.getRenderTarget(),S=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),C=i.state;C.setBlending(Qn),C.buffers.depth.getReversed()===!0?C.buffers.color.setClear(0,0,0,0):C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);const F=d!==jn&&this.type===jn,O=d===jn&&this.type!==jn;for(let q=0,B=b.length;q<B;q++){const Q=b[q],L=Q.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;s.copy(L.mapSize);const G=L.getFrameExtents();if(s.multiply(G),r.copy(L.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/G.x),s.x=r.x*G.x,L.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/G.y),s.y=r.y*G.y,L.mapSize.y=r.y)),L.map===null||F===!0||O===!0){const tt=this.type!==jn?{minFilter:$e,magFilter:$e}:{};L.map!==null&&L.map.dispose(),L.map=new Nn(s.x,s.y,tt),L.map.texture.name=Q.name+".shadowMap",L.camera.updateProjectionMatrix()}i.setRenderTarget(L.map),i.clear();const X=L.getViewportCount();for(let tt=0;tt<X;tt++){const ut=L.getViewport(tt);o.set(r.x*ut.x,r.y*ut.y,r.x*ut.z,r.y*ut.w),C.viewport(o),L.updateMatrices(Q,tt),n=L.getFrustum(),v(T,P,L.camera,Q,this.type)}L.isPointLightShadow!==!0&&this.type===jn&&M(L,P),L.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(y,S,D)};function M(b,T){const P=t.update(x);p.defines.VSM_SAMPLES!==b.blurSamples&&(p.defines.VSM_SAMPLES=b.blurSamples,h.defines.VSM_SAMPLES=b.blurSamples,p.needsUpdate=!0,h.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Nn(s.x,s.y)),p.uniforms.shadow_pass.value=b.map.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(T,null,P,p,x,null),h.uniforms.shadow_pass.value=b.mapPass.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(T,null,P,h,x,null)}function _(b,T,P,y){let S=null;const D=P.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(D!==void 0)S=D;else if(S=P.isPointLight===!0?l:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const C=S.uuid,F=T.uuid;let O=c[C];O===void 0&&(O={},c[C]=O);let q=O[F];q===void 0&&(q=S.clone(),O[F]=q,T.addEventListener("dispose",w)),S=q}if(S.visible=T.visible,S.wireframe=T.wireframe,y===jn?S.side=T.shadowSide!==null?T.shadowSide:T.side:S.side=T.shadowSide!==null?T.shadowSide:f[T.side],S.alphaMap=T.alphaMap,S.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,S.map=T.map,S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.displacementMap=T.displacementMap,S.displacementScale=T.displacementScale,S.displacementBias=T.displacementBias,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,P.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const C=i.properties.get(S);C.light=P}return S}function v(b,T,P,y,S){if(b.visible===!1)return;if(b.layers.test(T.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&S===jn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,b.matrixWorld);const F=t.update(b),O=b.material;if(Array.isArray(O)){const q=F.groups;for(let B=0,Q=q.length;B<Q;B++){const L=q[B],G=O[L.materialIndex];if(G&&G.visible){const X=_(b,G,y,S);b.onBeforeShadow(i,b,T,P,F,X,L),i.renderBufferDirect(P,null,F,X,b,L),b.onAfterShadow(i,b,T,P,F,X,L)}}}else if(O.visible){const q=_(b,O,y,S);b.onBeforeShadow(i,b,T,P,F,q,null),i.renderBufferDirect(P,null,F,q,b,null),b.onAfterShadow(i,b,T,P,F,q,null)}}const C=b.children;for(let F=0,O=C.length;F<O;F++)v(C[F],T,P,y,S)}function w(b){b.target.removeEventListener("dispose",w);for(const P in c){const y=c[P],S=b.target.uuid;S in y&&(y[S].dispose(),delete y[S])}}}const _v={[fa]:da,[pa]:va,[ma]:_a,[gs]:ga,[da]:fa,[va]:pa,[_a]:ma,[ga]:gs};function xv(i,t){function e(){let z=!1;const lt=new le;let dt=null;const wt=new le(0,0,0,0);return{setMask:function(rt){dt!==rt&&!z&&(i.colorMask(rt,rt,rt,rt),dt=rt)},setLocked:function(rt){z=rt},setClear:function(rt,et,Rt,Gt,pe){pe===!0&&(rt*=Gt,et*=Gt,Rt*=Gt),lt.set(rt,et,Rt,Gt),wt.equals(lt)===!1&&(i.clearColor(rt,et,Rt,Gt),wt.copy(lt))},reset:function(){z=!1,dt=null,wt.set(-1,0,0,0)}}}function n(){let z=!1,lt=!1,dt=null,wt=null,rt=null;return{setReversed:function(et){if(lt!==et){const Rt=t.get("EXT_clip_control");et?Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.ZERO_TO_ONE_EXT):Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.NEGATIVE_ONE_TO_ONE_EXT),lt=et;const Gt=rt;rt=null,this.setClear(Gt)}},getReversed:function(){return lt},setTest:function(et){et?R(i.DEPTH_TEST):Y(i.DEPTH_TEST)},setMask:function(et){dt!==et&&!z&&(i.depthMask(et),dt=et)},setFunc:function(et){if(lt&&(et=_v[et]),wt!==et){switch(et){case fa:i.depthFunc(i.NEVER);break;case da:i.depthFunc(i.ALWAYS);break;case pa:i.depthFunc(i.LESS);break;case gs:i.depthFunc(i.LEQUAL);break;case ma:i.depthFunc(i.EQUAL);break;case ga:i.depthFunc(i.GEQUAL);break;case va:i.depthFunc(i.GREATER);break;case _a:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}wt=et}},setLocked:function(et){z=et},setClear:function(et){rt!==et&&(lt&&(et=1-et),i.clearDepth(et),rt=et)},reset:function(){z=!1,dt=null,wt=null,rt=null,lt=!1}}}function s(){let z=!1,lt=null,dt=null,wt=null,rt=null,et=null,Rt=null,Gt=null,pe=null;return{setTest:function(ie){z||(ie?R(i.STENCIL_TEST):Y(i.STENCIL_TEST))},setMask:function(ie){lt!==ie&&!z&&(i.stencilMask(ie),lt=ie)},setFunc:function(ie,qn,zn){(dt!==ie||wt!==qn||rt!==zn)&&(i.stencilFunc(ie,qn,zn),dt=ie,wt=qn,rt=zn)},setOp:function(ie,qn,zn){(et!==ie||Rt!==qn||Gt!==zn)&&(i.stencilOp(ie,qn,zn),et=ie,Rt=qn,Gt=zn)},setLocked:function(ie){z=ie},setClear:function(ie){pe!==ie&&(i.clearStencil(ie),pe=ie)},reset:function(){z=!1,lt=null,dt=null,wt=null,rt=null,et=null,Rt=null,Gt=null,pe=null}}}const r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let u={},f={},p=new WeakMap,h=[],g=null,x=!1,m=null,d=null,M=null,_=null,v=null,w=null,b=null,T=new Dt(0,0,0),P=0,y=!1,S=null,D=null,C=null,F=null,O=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,Q=0;const L=i.getParameter(i.VERSION);L.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(L)[1]),B=Q>=1):L.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(L)[1]),B=Q>=2);let G=null,X={};const tt=i.getParameter(i.SCISSOR_BOX),ut=i.getParameter(i.VIEWPORT),J=new le().fromArray(tt),Tt=new le().fromArray(ut);function st(z,lt,dt,wt){const rt=new Uint8Array(4),et=i.createTexture();i.bindTexture(z,et),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Rt=0;Rt<dt;Rt++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(lt,0,i.RGBA,1,1,wt,0,i.RGBA,i.UNSIGNED_BYTE,rt):i.texImage2D(lt+Rt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,rt);return et}const V={};V[i.TEXTURE_2D]=st(i.TEXTURE_2D,i.TEXTURE_2D,1),V[i.TEXTURE_CUBE_MAP]=st(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),V[i.TEXTURE_2D_ARRAY]=st(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),V[i.TEXTURE_3D]=st(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),R(i.DEPTH_TEST),o.setFunc(gs),_t(!1),ft(Wl),R(i.CULL_FACE),Nt(Qn);function R(z){u[z]!==!0&&(i.enable(z),u[z]=!0)}function Y(z){u[z]!==!1&&(i.disable(z),u[z]=!1)}function ct(z,lt){return f[z]!==lt?(i.bindFramebuffer(z,lt),f[z]=lt,z===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=lt),z===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=lt),!0):!1}function it(z,lt){let dt=h,wt=!1;if(z){dt=p.get(lt),dt===void 0&&(dt=[],p.set(lt,dt));const rt=z.textures;if(dt.length!==rt.length||dt[0]!==i.COLOR_ATTACHMENT0){for(let et=0,Rt=rt.length;et<Rt;et++)dt[et]=i.COLOR_ATTACHMENT0+et;dt.length=rt.length,wt=!0}}else dt[0]!==i.BACK&&(dt[0]=i.BACK,wt=!0);wt&&i.drawBuffers(dt)}function Et(z){return g!==z?(i.useProgram(z),g=z,!0):!1}const Jt={[Pi]:i.FUNC_ADD,[ju]:i.FUNC_SUBTRACT,[Qu]:i.FUNC_REVERSE_SUBTRACT};Jt[tf]=i.MIN,Jt[ef]=i.MAX;const N={[nf]:i.ZERO,[sf]:i.ONE,[rf]:i.SRC_COLOR,[ha]:i.SRC_ALPHA,[uf]:i.SRC_ALPHA_SATURATE,[cf]:i.DST_COLOR,[af]:i.DST_ALPHA,[of]:i.ONE_MINUS_SRC_COLOR,[ua]:i.ONE_MINUS_SRC_ALPHA,[hf]:i.ONE_MINUS_DST_COLOR,[lf]:i.ONE_MINUS_DST_ALPHA,[ff]:i.CONSTANT_COLOR,[df]:i.ONE_MINUS_CONSTANT_COLOR,[pf]:i.CONSTANT_ALPHA,[mf]:i.ONE_MINUS_CONSTANT_ALPHA};function Nt(z,lt,dt,wt,rt,et,Rt,Gt,pe,ie){if(z===Qn){x===!0&&(Y(i.BLEND),x=!1);return}if(x===!1&&(R(i.BLEND),x=!0),z!==Ju){if(z!==m||ie!==y){if((d!==Pi||v!==Pi)&&(i.blendEquation(i.FUNC_ADD),d=Pi,v=Pi),ie)switch(z){case Fi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ne:i.blendFunc(i.ONE,i.ONE);break;case Xl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ql:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Fi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ne:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Xl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ql:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}M=null,_=null,w=null,b=null,T.set(0,0,0),P=0,m=z,y=ie}return}rt=rt||lt,et=et||dt,Rt=Rt||wt,(lt!==d||rt!==v)&&(i.blendEquationSeparate(Jt[lt],Jt[rt]),d=lt,v=rt),(dt!==M||wt!==_||et!==w||Rt!==b)&&(i.blendFuncSeparate(N[dt],N[wt],N[et],N[Rt]),M=dt,_=wt,w=et,b=Rt),(Gt.equals(T)===!1||pe!==P)&&(i.blendColor(Gt.r,Gt.g,Gt.b,pe),T.copy(Gt),P=pe),m=z,y=!1}function At(z,lt){z.side===ye?Y(i.CULL_FACE):R(i.CULL_FACE);let dt=z.side===en;lt&&(dt=!dt),_t(dt),z.blending===Fi&&z.transparent===!1?Nt(Qn):Nt(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),r.setMask(z.colorWrite);const wt=z.stencilWrite;a.setTest(wt),wt&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Mt(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?R(i.SAMPLE_ALPHA_TO_COVERAGE):Y(i.SAMPLE_ALPHA_TO_COVERAGE)}function _t(z){S!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),S=z)}function ft(z){z!==$u?(R(i.CULL_FACE),z!==D&&(z===Wl?i.cullFace(i.BACK):z===Ku?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Y(i.CULL_FACE),D=z}function Zt(z){z!==C&&(B&&i.lineWidth(z),C=z)}function Mt(z,lt,dt){z?(R(i.POLYGON_OFFSET_FILL),(F!==lt||O!==dt)&&(i.polygonOffset(lt,dt),F=lt,O=dt)):Y(i.POLYGON_OFFSET_FILL)}function zt(z){z?R(i.SCISSOR_TEST):Y(i.SCISSOR_TEST)}function jt(z){z===void 0&&(z=i.TEXTURE0+q-1),G!==z&&(i.activeTexture(z),G=z)}function re(z,lt,dt){dt===void 0&&(G===null?dt=i.TEXTURE0+q-1:dt=G);let wt=X[dt];wt===void 0&&(wt={type:void 0,texture:void 0},X[dt]=wt),(wt.type!==z||wt.texture!==lt)&&(G!==dt&&(i.activeTexture(dt),G=dt),i.bindTexture(z,lt||V[z]),wt.type=z,wt.texture=lt)}function I(){const z=X[G];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function E(){try{i.compressedTexImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function W(){try{i.compressedTexImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function j(){try{i.texSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function nt(){try{i.texSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function K(){try{i.compressedTexSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ut(){try{i.compressedTexSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ht(){try{i.texStorage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Pt(){try{i.texStorage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Lt(){try{i.texImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function at(){try{i.texImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function xt(z){J.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),J.copy(z))}function kt(z){Tt.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),Tt.copy(z))}function It(z,lt){let dt=c.get(lt);dt===void 0&&(dt=new WeakMap,c.set(lt,dt));let wt=dt.get(z);wt===void 0&&(wt=i.getUniformBlockIndex(lt,z.name),dt.set(z,wt))}function gt(z,lt){const wt=c.get(lt).get(z);l.get(lt)!==wt&&(i.uniformBlockBinding(lt,wt,z.__bindingPointIndex),l.set(lt,wt))}function Wt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},G=null,X={},f={},p=new WeakMap,h=[],g=null,x=!1,m=null,d=null,M=null,_=null,v=null,w=null,b=null,T=new Dt(0,0,0),P=0,y=!1,S=null,D=null,C=null,F=null,O=null,J.set(0,0,i.canvas.width,i.canvas.height),Tt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:R,disable:Y,bindFramebuffer:ct,drawBuffers:it,useProgram:Et,setBlending:Nt,setMaterial:At,setFlipSided:_t,setCullFace:ft,setLineWidth:Zt,setPolygonOffset:Mt,setScissorTest:zt,activeTexture:jt,bindTexture:re,unbindTexture:I,compressedTexImage2D:E,compressedTexImage3D:W,texImage2D:Lt,texImage3D:at,updateUBOMapping:It,uniformBlockBinding:gt,texStorage2D:ht,texStorage3D:Pt,texSubImage2D:j,texSubImage3D:nt,compressedTexSubImage2D:K,compressedTexSubImage3D:Ut,scissor:xt,viewport:kt,reset:Wt}}function Mv(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new pt,u=new WeakMap;let f;const p=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,E){return h?new OffscreenCanvas(I,E):ro("canvas")}function x(I,E,W){let j=1;const nt=re(I);if((nt.width>W||nt.height>W)&&(j=W/Math.max(nt.width,nt.height)),j<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const K=Math.floor(j*nt.width),Ut=Math.floor(j*nt.height);f===void 0&&(f=g(K,Ut));const ht=E?g(K,Ut):f;return ht.width=K,ht.height=Ut,ht.getContext("2d").drawImage(I,0,0,K,Ut),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+K+"x"+Ut+")."),ht}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),I;return I}function m(I){return I.generateMipmaps}function d(I){i.generateMipmap(I)}function M(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(I,E,W,j,nt=!1){if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let K=E;if(E===i.RED&&(W===i.FLOAT&&(K=i.R32F),W===i.HALF_FLOAT&&(K=i.R16F),W===i.UNSIGNED_BYTE&&(K=i.R8)),E===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(K=i.R8UI),W===i.UNSIGNED_SHORT&&(K=i.R16UI),W===i.UNSIGNED_INT&&(K=i.R32UI),W===i.BYTE&&(K=i.R8I),W===i.SHORT&&(K=i.R16I),W===i.INT&&(K=i.R32I)),E===i.RG&&(W===i.FLOAT&&(K=i.RG32F),W===i.HALF_FLOAT&&(K=i.RG16F),W===i.UNSIGNED_BYTE&&(K=i.RG8)),E===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(K=i.RG8UI),W===i.UNSIGNED_SHORT&&(K=i.RG16UI),W===i.UNSIGNED_INT&&(K=i.RG32UI),W===i.BYTE&&(K=i.RG8I),W===i.SHORT&&(K=i.RG16I),W===i.INT&&(K=i.RG32I)),E===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(K=i.RGB8UI),W===i.UNSIGNED_SHORT&&(K=i.RGB16UI),W===i.UNSIGNED_INT&&(K=i.RGB32UI),W===i.BYTE&&(K=i.RGB8I),W===i.SHORT&&(K=i.RGB16I),W===i.INT&&(K=i.RGB32I)),E===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),W===i.UNSIGNED_INT&&(K=i.RGBA32UI),W===i.BYTE&&(K=i.RGBA8I),W===i.SHORT&&(K=i.RGBA16I),W===i.INT&&(K=i.RGBA32I)),E===i.RGB&&(W===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),W===i.UNSIGNED_INT_10F_11F_11F_REV&&(K=i.R11F_G11F_B10F)),E===i.RGBA){const Ut=nt?io:te.getTransfer(j);W===i.FLOAT&&(K=i.RGBA32F),W===i.HALF_FLOAT&&(K=i.RGBA16F),W===i.UNSIGNED_BYTE&&(K=Ut===oe?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function v(I,E){let W;return I?E===null||E===Oi||E===nr?W=i.DEPTH24_STENCIL8:E===In?W=i.DEPTH32F_STENCIL8:E===er&&(W=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Oi||E===nr?W=i.DEPTH_COMPONENT24:E===In?W=i.DEPTH_COMPONENT32F:E===er&&(W=i.DEPTH_COMPONENT16),W}function w(I,E){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==$e&&I.minFilter!==wn?Math.log2(Math.max(E.width,E.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?E.mipmaps.length:1}function b(I){const E=I.target;E.removeEventListener("dispose",b),P(E),E.isVideoTexture&&u.delete(E)}function T(I){const E=I.target;E.removeEventListener("dispose",T),S(E)}function P(I){const E=n.get(I);if(E.__webglInit===void 0)return;const W=I.source,j=p.get(W);if(j){const nt=j[E.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&y(I),Object.keys(j).length===0&&p.delete(W)}n.remove(I)}function y(I){const E=n.get(I);i.deleteTexture(E.__webglTexture);const W=I.source,j=p.get(W);delete j[E.__cacheKey],o.memory.textures--}function S(I){const E=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(E.__webglFramebuffer[j]))for(let nt=0;nt<E.__webglFramebuffer[j].length;nt++)i.deleteFramebuffer(E.__webglFramebuffer[j][nt]);else i.deleteFramebuffer(E.__webglFramebuffer[j]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[j])}else{if(Array.isArray(E.__webglFramebuffer))for(let j=0;j<E.__webglFramebuffer.length;j++)i.deleteFramebuffer(E.__webglFramebuffer[j]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let j=0;j<E.__webglColorRenderbuffer.length;j++)E.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[j]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const W=I.textures;for(let j=0,nt=W.length;j<nt;j++){const K=n.get(W[j]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),o.memory.textures--),n.remove(W[j])}n.remove(I)}let D=0;function C(){D=0}function F(){const I=D;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),D+=1,I}function O(I){const E=[];return E.push(I.wrapS),E.push(I.wrapT),E.push(I.wrapR||0),E.push(I.magFilter),E.push(I.minFilter),E.push(I.anisotropy),E.push(I.internalFormat),E.push(I.format),E.push(I.type),E.push(I.generateMipmaps),E.push(I.premultiplyAlpha),E.push(I.flipY),E.push(I.unpackAlignment),E.push(I.colorSpace),E.join()}function q(I,E){const W=n.get(I);if(I.isVideoTexture&&zt(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&W.__version!==I.version){const j=I.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{V(W,I,E);return}}else I.isExternalTexture&&(W.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+E)}function B(I,E){const W=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&W.__version!==I.version){V(W,I,E);return}e.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+E)}function Q(I,E){const W=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&W.__version!==I.version){V(W,I,E);return}e.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+E)}function L(I,E){const W=n.get(I);if(I.version>0&&W.__version!==I.version){R(W,I,E);return}e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+E)}const G={[no]:i.REPEAT,[fi]:i.CLAMP_TO_EDGE,[ya]:i.MIRRORED_REPEAT},X={[$e]:i.NEAREST,[_f]:i.NEAREST_MIPMAP_NEAREST,[vr]:i.NEAREST_MIPMAP_LINEAR,[wn]:i.LINEAR,[_o]:i.LINEAR_MIPMAP_NEAREST,[di]:i.LINEAR_MIPMAP_LINEAR},tt={[Sf]:i.NEVER,[Cf]:i.ALWAYS,[bf]:i.LESS,[Xh]:i.LEQUAL,[wf]:i.EQUAL,[Af]:i.GEQUAL,[Ef]:i.GREATER,[Tf]:i.NOTEQUAL};function ut(I,E){if(E.type===In&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===wn||E.magFilter===_o||E.magFilter===vr||E.magFilter===di||E.minFilter===wn||E.minFilter===_o||E.minFilter===vr||E.minFilter===di)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,G[E.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,G[E.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,G[E.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,X[E.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,X[E.minFilter]),E.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,tt[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===$e||E.minFilter!==vr&&E.minFilter!==di||E.type===In&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const W=t.get("EXT_texture_filter_anisotropic");i.texParameterf(I,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function J(I,E){let W=!1;I.__webglInit===void 0&&(I.__webglInit=!0,E.addEventListener("dispose",b));const j=E.source;let nt=p.get(j);nt===void 0&&(nt={},p.set(j,nt));const K=O(E);if(K!==I.__cacheKey){nt[K]===void 0&&(nt[K]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,W=!0),nt[K].usedTimes++;const Ut=nt[I.__cacheKey];Ut!==void 0&&(nt[I.__cacheKey].usedTimes--,Ut.usedTimes===0&&y(E)),I.__cacheKey=K,I.__webglTexture=nt[K].texture}return W}function Tt(I,E,W){return Math.floor(Math.floor(I/W)/E)}function st(I,E,W,j){const K=I.updateRanges;if(K.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,E.width,E.height,W,j,E.data);else{K.sort((at,xt)=>at.start-xt.start);let Ut=0;for(let at=1;at<K.length;at++){const xt=K[Ut],kt=K[at],It=xt.start+xt.count,gt=Tt(kt.start,E.width,4),Wt=Tt(xt.start,E.width,4);kt.start<=It+1&&gt===Wt&&Tt(kt.start+kt.count-1,E.width,4)===gt?xt.count=Math.max(xt.count,kt.start+kt.count-xt.start):(++Ut,K[Ut]=kt)}K.length=Ut+1;const ht=i.getParameter(i.UNPACK_ROW_LENGTH),Pt=i.getParameter(i.UNPACK_SKIP_PIXELS),Lt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,E.width);for(let at=0,xt=K.length;at<xt;at++){const kt=K[at],It=Math.floor(kt.start/4),gt=Math.ceil(kt.count/4),Wt=It%E.width,z=Math.floor(It/E.width),lt=gt,dt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Wt),i.pixelStorei(i.UNPACK_SKIP_ROWS,z),e.texSubImage2D(i.TEXTURE_2D,0,Wt,z,lt,dt,W,j,E.data)}I.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ht),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Pt),i.pixelStorei(i.UNPACK_SKIP_ROWS,Lt)}}function V(I,E,W){let j=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(j=i.TEXTURE_3D);const nt=J(I,E),K=E.source;e.bindTexture(j,I.__webglTexture,i.TEXTURE0+W);const Ut=n.get(K);if(K.version!==Ut.__version||nt===!0){e.activeTexture(i.TEXTURE0+W);const ht=te.getPrimaries(te.workingColorSpace),Pt=E.colorSpace===ui?null:te.getPrimaries(E.colorSpace),Lt=E.colorSpace===ui||ht===Pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);let at=x(E.image,!1,s.maxTextureSize);at=jt(E,at);const xt=r.convert(E.format,E.colorSpace),kt=r.convert(E.type);let It=_(E.internalFormat,xt,kt,E.colorSpace,E.isVideoTexture);ut(j,E);let gt;const Wt=E.mipmaps,z=E.isVideoTexture!==!0,lt=Ut.__version===void 0||nt===!0,dt=K.dataReady,wt=w(E,at);if(E.isDepthTexture)It=v(E.format===sr,E.type),lt&&(z?e.texStorage2D(i.TEXTURE_2D,1,It,at.width,at.height):e.texImage2D(i.TEXTURE_2D,0,It,at.width,at.height,0,xt,kt,null));else if(E.isDataTexture)if(Wt.length>0){z&&lt&&e.texStorage2D(i.TEXTURE_2D,wt,It,Wt[0].width,Wt[0].height);for(let rt=0,et=Wt.length;rt<et;rt++)gt=Wt[rt],z?dt&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,gt.width,gt.height,xt,kt,gt.data):e.texImage2D(i.TEXTURE_2D,rt,It,gt.width,gt.height,0,xt,kt,gt.data);E.generateMipmaps=!1}else z?(lt&&e.texStorage2D(i.TEXTURE_2D,wt,It,at.width,at.height),dt&&st(E,at,xt,kt)):e.texImage2D(i.TEXTURE_2D,0,It,at.width,at.height,0,xt,kt,at.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){z&&lt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,wt,It,Wt[0].width,Wt[0].height,at.depth);for(let rt=0,et=Wt.length;rt<et;rt++)if(gt=Wt[rt],E.format!==Un)if(xt!==null)if(z){if(dt)if(E.layerUpdates.size>0){const Rt=Ac(gt.width,gt.height,E.format,E.type);for(const Gt of E.layerUpdates){const pe=gt.data.subarray(Gt*Rt/gt.data.BYTES_PER_ELEMENT,(Gt+1)*Rt/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,Gt,gt.width,gt.height,1,xt,pe)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,gt.width,gt.height,at.depth,xt,gt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,rt,It,gt.width,gt.height,at.depth,0,gt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?dt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,gt.width,gt.height,at.depth,xt,kt,gt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,rt,It,gt.width,gt.height,at.depth,0,xt,kt,gt.data)}else{z&&lt&&e.texStorage2D(i.TEXTURE_2D,wt,It,Wt[0].width,Wt[0].height);for(let rt=0,et=Wt.length;rt<et;rt++)gt=Wt[rt],E.format!==Un?xt!==null?z?dt&&e.compressedTexSubImage2D(i.TEXTURE_2D,rt,0,0,gt.width,gt.height,xt,gt.data):e.compressedTexImage2D(i.TEXTURE_2D,rt,It,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?dt&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,gt.width,gt.height,xt,kt,gt.data):e.texImage2D(i.TEXTURE_2D,rt,It,gt.width,gt.height,0,xt,kt,gt.data)}else if(E.isDataArrayTexture)if(z){if(lt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,wt,It,at.width,at.height,at.depth),dt)if(E.layerUpdates.size>0){const rt=Ac(at.width,at.height,E.format,E.type);for(const et of E.layerUpdates){const Rt=at.data.subarray(et*rt/at.data.BYTES_PER_ELEMENT,(et+1)*rt/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,et,at.width,at.height,1,xt,kt,Rt)}E.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,xt,kt,at.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,It,at.width,at.height,at.depth,0,xt,kt,at.data);else if(E.isData3DTexture)z?(lt&&e.texStorage3D(i.TEXTURE_3D,wt,It,at.width,at.height,at.depth),dt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,xt,kt,at.data)):e.texImage3D(i.TEXTURE_3D,0,It,at.width,at.height,at.depth,0,xt,kt,at.data);else if(E.isFramebufferTexture){if(lt)if(z)e.texStorage2D(i.TEXTURE_2D,wt,It,at.width,at.height);else{let rt=at.width,et=at.height;for(let Rt=0;Rt<wt;Rt++)e.texImage2D(i.TEXTURE_2D,Rt,It,rt,et,0,xt,kt,null),rt>>=1,et>>=1}}else if(Wt.length>0){if(z&&lt){const rt=re(Wt[0]);e.texStorage2D(i.TEXTURE_2D,wt,It,rt.width,rt.height)}for(let rt=0,et=Wt.length;rt<et;rt++)gt=Wt[rt],z?dt&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,xt,kt,gt):e.texImage2D(i.TEXTURE_2D,rt,It,xt,kt,gt);E.generateMipmaps=!1}else if(z){if(lt){const rt=re(at);e.texStorage2D(i.TEXTURE_2D,wt,It,rt.width,rt.height)}dt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,xt,kt,at)}else e.texImage2D(i.TEXTURE_2D,0,It,xt,kt,at);m(E)&&d(j),Ut.__version=K.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function R(I,E,W){if(E.image.length!==6)return;const j=J(I,E),nt=E.source;e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+W);const K=n.get(nt);if(nt.version!==K.__version||j===!0){e.activeTexture(i.TEXTURE0+W);const Ut=te.getPrimaries(te.workingColorSpace),ht=E.colorSpace===ui?null:te.getPrimaries(E.colorSpace),Pt=E.colorSpace===ui||Ut===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);const Lt=E.isCompressedTexture||E.image[0].isCompressedTexture,at=E.image[0]&&E.image[0].isDataTexture,xt=[];for(let et=0;et<6;et++)!Lt&&!at?xt[et]=x(E.image[et],!0,s.maxCubemapSize):xt[et]=at?E.image[et].image:E.image[et],xt[et]=jt(E,xt[et]);const kt=xt[0],It=r.convert(E.format,E.colorSpace),gt=r.convert(E.type),Wt=_(E.internalFormat,It,gt,E.colorSpace),z=E.isVideoTexture!==!0,lt=K.__version===void 0||j===!0,dt=nt.dataReady;let wt=w(E,kt);ut(i.TEXTURE_CUBE_MAP,E);let rt;if(Lt){z&&lt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,Wt,kt.width,kt.height);for(let et=0;et<6;et++){rt=xt[et].mipmaps;for(let Rt=0;Rt<rt.length;Rt++){const Gt=rt[Rt];E.format!==Un?It!==null?z?dt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Rt,0,0,Gt.width,Gt.height,It,Gt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Rt,Wt,Gt.width,Gt.height,0,Gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Rt,0,0,Gt.width,Gt.height,It,gt,Gt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Rt,Wt,Gt.width,Gt.height,0,It,gt,Gt.data)}}}else{if(rt=E.mipmaps,z&&lt){rt.length>0&&wt++;const et=re(xt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,Wt,et.width,et.height)}for(let et=0;et<6;et++)if(at){z?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,xt[et].width,xt[et].height,It,gt,xt[et].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Wt,xt[et].width,xt[et].height,0,It,gt,xt[et].data);for(let Rt=0;Rt<rt.length;Rt++){const pe=rt[Rt].image[et].image;z?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Rt+1,0,0,pe.width,pe.height,It,gt,pe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Rt+1,Wt,pe.width,pe.height,0,It,gt,pe.data)}}else{z?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,It,gt,xt[et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Wt,It,gt,xt[et]);for(let Rt=0;Rt<rt.length;Rt++){const Gt=rt[Rt];z?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Rt+1,0,0,It,gt,Gt.image[et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Rt+1,Wt,It,gt,Gt.image[et])}}}m(E)&&d(i.TEXTURE_CUBE_MAP),K.__version=nt.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function Y(I,E,W,j,nt,K){const Ut=r.convert(W.format,W.colorSpace),ht=r.convert(W.type),Pt=_(W.internalFormat,Ut,ht,W.colorSpace),Lt=n.get(E),at=n.get(W);if(at.__renderTarget=E,!Lt.__hasExternalTextures){const xt=Math.max(1,E.width>>K),kt=Math.max(1,E.height>>K);nt===i.TEXTURE_3D||nt===i.TEXTURE_2D_ARRAY?e.texImage3D(nt,K,Pt,xt,kt,E.depth,0,Ut,ht,null):e.texImage2D(nt,K,Pt,xt,kt,0,Ut,ht,null)}e.bindFramebuffer(i.FRAMEBUFFER,I),Mt(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,nt,at.__webglTexture,0,Zt(E)):(nt===i.TEXTURE_2D||nt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,nt,at.__webglTexture,K),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ct(I,E,W){if(i.bindRenderbuffer(i.RENDERBUFFER,I),E.depthBuffer){const j=E.depthTexture,nt=j&&j.isDepthTexture?j.type:null,K=v(E.stencilBuffer,nt),Ut=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=Zt(E);Mt(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ht,K,E.width,E.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,ht,K,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,K,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ut,i.RENDERBUFFER,I)}else{const j=E.textures;for(let nt=0;nt<j.length;nt++){const K=j[nt],Ut=r.convert(K.format,K.colorSpace),ht=r.convert(K.type),Pt=_(K.internalFormat,Ut,ht,K.colorSpace),Lt=Zt(E);W&&Mt(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Lt,Pt,E.width,E.height):Mt(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Lt,Pt,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Pt,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function it(I,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,I),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(E.depthTexture);j.__renderTarget=E,(!j.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),q(E.depthTexture,0);const nt=j.__webglTexture,K=Zt(E);if(E.depthTexture.format===ir)Mt(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,nt,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,nt,0);else if(E.depthTexture.format===sr)Mt(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,nt,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function Et(I){const E=n.get(I),W=I.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==I.depthTexture){const j=I.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),j){const nt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,j.removeEventListener("dispose",nt)};j.addEventListener("dispose",nt),E.__depthDisposeCallback=nt}E.__boundDepthTexture=j}if(I.depthTexture&&!E.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");const j=I.texture.mipmaps;j&&j.length>0?it(E.__webglFramebuffer[0],I):it(E.__webglFramebuffer,I)}else if(W){E.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[j]),E.__webglDepthbuffer[j]===void 0)E.__webglDepthbuffer[j]=i.createRenderbuffer(),ct(E.__webglDepthbuffer[j],I,!1);else{const nt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=E.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,K)}}else{const j=I.texture.mipmaps;if(j&&j.length>0?e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),ct(E.__webglDepthbuffer,I,!1);else{const nt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,K)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Jt(I,E,W){const j=n.get(I);E!==void 0&&Y(j.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&Et(I)}function N(I){const E=I.texture,W=n.get(I),j=n.get(E);I.addEventListener("dispose",T);const nt=I.textures,K=I.isWebGLCubeRenderTarget===!0,Ut=nt.length>1;if(Ut||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=E.version,o.memory.textures++),K){W.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer[ht]=[];for(let Pt=0;Pt<E.mipmaps.length;Pt++)W.__webglFramebuffer[ht][Pt]=i.createFramebuffer()}else W.__webglFramebuffer[ht]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer=[];for(let ht=0;ht<E.mipmaps.length;ht++)W.__webglFramebuffer[ht]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(Ut)for(let ht=0,Pt=nt.length;ht<Pt;ht++){const Lt=n.get(nt[ht]);Lt.__webglTexture===void 0&&(Lt.__webglTexture=i.createTexture(),o.memory.textures++)}if(I.samples>0&&Mt(I)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let ht=0;ht<nt.length;ht++){const Pt=nt[ht];W.__webglColorRenderbuffer[ht]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[ht]);const Lt=r.convert(Pt.format,Pt.colorSpace),at=r.convert(Pt.type),xt=_(Pt.internalFormat,Lt,at,Pt.colorSpace,I.isXRRenderTarget===!0),kt=Zt(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,kt,xt,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,W.__webglColorRenderbuffer[ht])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),ct(W.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),ut(i.TEXTURE_CUBE_MAP,E);for(let ht=0;ht<6;ht++)if(E.mipmaps&&E.mipmaps.length>0)for(let Pt=0;Pt<E.mipmaps.length;Pt++)Y(W.__webglFramebuffer[ht][Pt],I,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Pt);else Y(W.__webglFramebuffer[ht],I,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);m(E)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ut){for(let ht=0,Pt=nt.length;ht<Pt;ht++){const Lt=nt[ht],at=n.get(Lt);let xt=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(xt=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(xt,at.__webglTexture),ut(xt,Lt),Y(W.__webglFramebuffer,I,Lt,i.COLOR_ATTACHMENT0+ht,xt,0),m(Lt)&&d(xt)}e.unbindTexture()}else{let ht=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ht=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ht,j.__webglTexture),ut(ht,E),E.mipmaps&&E.mipmaps.length>0)for(let Pt=0;Pt<E.mipmaps.length;Pt++)Y(W.__webglFramebuffer[Pt],I,E,i.COLOR_ATTACHMENT0,ht,Pt);else Y(W.__webglFramebuffer,I,E,i.COLOR_ATTACHMENT0,ht,0);m(E)&&d(ht),e.unbindTexture()}I.depthBuffer&&Et(I)}function Nt(I){const E=I.textures;for(let W=0,j=E.length;W<j;W++){const nt=E[W];if(m(nt)){const K=M(I),Ut=n.get(nt).__webglTexture;e.bindTexture(K,Ut),d(K),e.unbindTexture()}}}const At=[],_t=[];function ft(I){if(I.samples>0){if(Mt(I)===!1){const E=I.textures,W=I.width,j=I.height;let nt=i.COLOR_BUFFER_BIT;const K=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ut=n.get(I),ht=E.length>1;if(ht)for(let Lt=0;Lt<E.length;Lt++)e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer);const Pt=I.texture.mipmaps;Pt&&Pt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer);for(let Lt=0;Lt<E.length;Lt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(nt|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(nt|=i.STENCIL_BUFFER_BIT)),ht){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ut.__webglColorRenderbuffer[Lt]);const at=n.get(E[Lt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,at,0)}i.blitFramebuffer(0,0,W,j,0,0,W,j,nt,i.NEAREST),l===!0&&(At.length=0,_t.length=0,At.push(i.COLOR_ATTACHMENT0+Lt),I.depthBuffer&&I.resolveDepthBuffer===!1&&(At.push(K),_t.push(K),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,_t)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,At))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ht)for(let Lt=0;Lt<E.length;Lt++){e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.RENDERBUFFER,Ut.__webglColorRenderbuffer[Lt]);const at=n.get(E[Lt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.TEXTURE_2D,at,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){const E=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function Zt(I){return Math.min(s.maxSamples,I.samples)}function Mt(I){const E=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function zt(I){const E=o.render.frame;u.get(I)!==E&&(u.set(I,E),I.update())}function jt(I,E){const W=I.colorSpace,j=I.format,nt=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||W!==xs&&W!==ui&&(te.getTransfer(W)===oe?(j!==Un||nt!==Vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),E}function re(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=C,this.setTexture2D=q,this.setTexture2DArray=B,this.setTexture3D=Q,this.setTextureCube=L,this.rebindTextures=Jt,this.setupRenderTarget=N,this.updateRenderTargetMipmap=Nt,this.updateMultisampleRenderTarget=ft,this.setupDepthRenderbuffer=Et,this.setupFrameBufferTexture=Y,this.useMultisampledRTT=Mt}function yv(i,t){function e(n,s=ui){let r;const o=te.getTransfer(s);if(n===Vn)return i.UNSIGNED_BYTE;if(n===cl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===hl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Bh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===kh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===zh)return i.BYTE;if(n===Oh)return i.SHORT;if(n===er)return i.UNSIGNED_SHORT;if(n===ll)return i.INT;if(n===Oi)return i.UNSIGNED_INT;if(n===In)return i.FLOAT;if(n===ti)return i.HALF_FLOAT;if(n===Hh)return i.ALPHA;if(n===Gh)return i.RGB;if(n===Un)return i.RGBA;if(n===ir)return i.DEPTH_COMPONENT;if(n===sr)return i.DEPTH_STENCIL;if(n===ho)return i.RED;if(n===ul)return i.RED_INTEGER;if(n===Vh)return i.RG;if(n===fl)return i.RG_INTEGER;if(n===dl)return i.RGBA_INTEGER;if(n===$r||n===Kr||n===Jr||n===jr)if(o===oe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===$r)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===$r)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Kr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Jr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===jr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Sa||n===ba||n===wa||n===Ea)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Sa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ba)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===wa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ea)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ta||n===Aa||n===Ca)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ta||n===Aa)return o===oe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ca)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ra||n===Pa||n===Da||n===La||n===Ia||n===Ua||n===Na||n===Fa||n===za||n===Oa||n===Ba||n===ka||n===Ha||n===Ga)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ra)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Pa)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Da)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===La)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ia)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ua)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Na)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Fa)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===za)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Oa)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ba)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ka)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ha)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ga)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Va||n===Wa||n===Xa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Va)return o===oe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Wa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Xa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===qa||n===Ya||n===Za||n===$a)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===qa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ya)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Za)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===$a)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===nr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Sv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bv=`
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

}`;class wv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new iu(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Se({vertexShader:Sv,fragmentShader:bv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new St(new Ve(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ev extends Ts{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,p=null,h=null,g=null;const x=typeof XRWebGLBinding<"u",m=new wv,d={},M=e.getContextAttributes();let _=null,v=null;const w=[],b=[],T=new pt;let P=null;const y=new fn;y.viewport=new le;const S=new fn;S.viewport=new le;const D=[y,S],C=new qd;let F=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let R=w[V];return R===void 0&&(R=new Ho,w[V]=R),R.getTargetRaySpace()},this.getControllerGrip=function(V){let R=w[V];return R===void 0&&(R=new Ho,w[V]=R),R.getGripSpace()},this.getHand=function(V){let R=w[V];return R===void 0&&(R=new Ho,w[V]=R),R.getHandSpace()};function q(V){const R=b.indexOf(V.inputSource);if(R===-1)return;const Y=w[R];Y!==void 0&&(Y.update(V.inputSource,V.frame,c||o),Y.dispatchEvent({type:V.type,data:V.inputSource}))}function B(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",Q);for(let V=0;V<w.length;V++){const R=b[V];R!==null&&(b[V]=null,w[V].disconnect(R))}F=null,O=null,m.reset();for(const V in d)delete d[V];t.setRenderTarget(_),h=null,p=null,f=null,s=null,v=null,st.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return p!==null?p:h},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(_=t.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",B),s.addEventListener("inputsourceschange",Q),M.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(T),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Y=null,ct=null,it=null;M.depth&&(it=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Y=M.stencil?sr:ir,ct=M.stencil?nr:Oi);const Et={colorFormat:e.RGBA8,depthFormat:it,scaleFactor:r};f=this.getBinding(),p=f.createProjectionLayer(Et),s.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),v=new Nn(p.textureWidth,p.textureHeight,{format:Un,type:Vn,depthTexture:new nu(p.textureWidth,p.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const Y={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,e,Y),s.updateRenderState({baseLayer:h}),t.setPixelRatio(1),t.setSize(h.framebufferWidth,h.framebufferHeight,!1),v=new Nn(h.framebufferWidth,h.framebufferHeight,{format:Un,type:Vn,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),st.setContext(s),st.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Q(V){for(let R=0;R<V.removed.length;R++){const Y=V.removed[R],ct=b.indexOf(Y);ct>=0&&(b[ct]=null,w[ct].disconnect(Y))}for(let R=0;R<V.added.length;R++){const Y=V.added[R];let ct=b.indexOf(Y);if(ct===-1){for(let Et=0;Et<w.length;Et++)if(Et>=b.length){b.push(Y),ct=Et;break}else if(b[Et]===null){b[Et]=Y,ct=Et;break}if(ct===-1)break}const it=w[ct];it&&it.connect(Y)}}const L=new U,G=new U;function X(V,R,Y){L.setFromMatrixPosition(R.matrixWorld),G.setFromMatrixPosition(Y.matrixWorld);const ct=L.distanceTo(G),it=R.projectionMatrix.elements,Et=Y.projectionMatrix.elements,Jt=it[14]/(it[10]-1),N=it[14]/(it[10]+1),Nt=(it[9]+1)/it[5],At=(it[9]-1)/it[5],_t=(it[8]-1)/it[0],ft=(Et[8]+1)/Et[0],Zt=Jt*_t,Mt=Jt*ft,zt=ct/(-_t+ft),jt=zt*-_t;if(R.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(jt),V.translateZ(zt),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),it[10]===-1)V.projectionMatrix.copy(R.projectionMatrix),V.projectionMatrixInverse.copy(R.projectionMatrixInverse);else{const re=Jt+zt,I=N+zt,E=Zt-jt,W=Mt+(ct-jt),j=Nt*N/I*re,nt=At*N/I*re;V.projectionMatrix.makePerspective(E,W,j,nt,re,I),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function tt(V,R){R===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(R.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;let R=V.near,Y=V.far;m.texture!==null&&(m.depthNear>0&&(R=m.depthNear),m.depthFar>0&&(Y=m.depthFar)),C.near=S.near=y.near=R,C.far=S.far=y.far=Y,(F!==C.near||O!==C.far)&&(s.updateRenderState({depthNear:C.near,depthFar:C.far}),F=C.near,O=C.far),C.layers.mask=V.layers.mask|6,y.layers.mask=C.layers.mask&3,S.layers.mask=C.layers.mask&5;const ct=V.parent,it=C.cameras;tt(C,ct);for(let Et=0;Et<it.length;Et++)tt(it[Et],ct);it.length===2?X(C,y,S):C.projectionMatrix.copy(y.projectionMatrix),ut(V,C,ct)};function ut(V,R,Y){Y===null?V.matrix.copy(R.matrixWorld):(V.matrix.copy(Y.matrixWorld),V.matrix.invert(),V.matrix.multiply(R.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(R.projectionMatrix),V.projectionMatrixInverse.copy(R.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Ka*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(p===null&&h===null))return l},this.setFoveation=function(V){l=V,p!==null&&(p.fixedFoveation=V),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=V)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(C)},this.getCameraTexture=function(V){return d[V]};let J=null;function Tt(V,R){if(u=R.getViewerPose(c||o),g=R,u!==null){const Y=u.views;h!==null&&(t.setRenderTargetFramebuffer(v,h.framebuffer),t.setRenderTarget(v));let ct=!1;Y.length!==C.cameras.length&&(C.cameras.length=0,ct=!0);for(let N=0;N<Y.length;N++){const Nt=Y[N];let At=null;if(h!==null)At=h.getViewport(Nt);else{const ft=f.getViewSubImage(p,Nt);At=ft.viewport,N===0&&(t.setRenderTargetTextures(v,ft.colorTexture,ft.depthStencilTexture),t.setRenderTarget(v))}let _t=D[N];_t===void 0&&(_t=new fn,_t.layers.enable(N),_t.viewport=new le,D[N]=_t),_t.matrix.fromArray(Nt.transform.matrix),_t.matrix.decompose(_t.position,_t.quaternion,_t.scale),_t.projectionMatrix.fromArray(Nt.projectionMatrix),_t.projectionMatrixInverse.copy(_t.projectionMatrix).invert(),_t.viewport.set(At.x,At.y,At.width,At.height),N===0&&(C.matrix.copy(_t.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),ct===!0&&C.cameras.push(_t)}const it=s.enabledFeatures;if(it&&it.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){f=n.getBinding();const N=f.getDepthInformation(Y[0]);N&&N.isValid&&N.texture&&m.init(N,s.renderState)}if(it&&it.includes("camera-access")&&x){t.state.unbindTexture(),f=n.getBinding();for(let N=0;N<Y.length;N++){const Nt=Y[N].camera;if(Nt){let At=d[Nt];At||(At=new iu,d[Nt]=At);const _t=f.getCameraImage(Nt);At.sourceTexture=_t}}}}for(let Y=0;Y<w.length;Y++){const ct=b[Y],it=w[Y];ct!==null&&it!==void 0&&it.update(ct,R,c||o)}J&&J(V,R),R.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:R}),g=null}const st=new mu;st.setAnimationLoop(Tt),this.setAnimationLoop=function(V){J=V},this.dispose=function(){}}}const Ti=new pn,Tv=new se;function Av(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Qh(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,M,_,v){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),f(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d)):d.isMeshStandardMaterial?(r(m,d),p(m,d),d.isMeshPhysicalMaterial&&h(m,d,v)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),x(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,M,_):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===en&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===en&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const M=t.get(d),_=M.envMap,v=M.envMapRotation;_&&(m.envMap.value=_,Ti.copy(v),Ti.x*=-1,Ti.y*=-1,Ti.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ti.y*=-1,Ti.z*=-1),m.envMapRotation.value.setFromMatrix4(Tv.makeRotationFromEuler(Ti)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,M,_){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*M,m.scale.value=_*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function p(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function h(m,d,M){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===en&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){const M=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Cv(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,_){const v=_.program;n.uniformBlockBinding(M,v)}function c(M,_){let v=s[M.id];v===void 0&&(g(M),v=u(M),s[M.id]=v,M.addEventListener("dispose",m));const w=_.program;n.updateUBOMapping(M,w);const b=t.render.frame;r[M.id]!==b&&(p(M),r[M.id]=b)}function u(M){const _=f();M.__bindingPointIndex=_;const v=i.createBuffer(),w=M.__size,b=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,w,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,v),v}function f(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(M){const _=s[M.id],v=M.uniforms,w=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let b=0,T=v.length;b<T;b++){const P=Array.isArray(v[b])?v[b]:[v[b]];for(let y=0,S=P.length;y<S;y++){const D=P[y];if(h(D,b,y,w)===!0){const C=D.__offset,F=Array.isArray(D.value)?D.value:[D.value];let O=0;for(let q=0;q<F.length;q++){const B=F[q],Q=x(B);typeof B=="number"||typeof B=="boolean"?(D.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,C+O,D.__data)):B.isMatrix3?(D.__data[0]=B.elements[0],D.__data[1]=B.elements[1],D.__data[2]=B.elements[2],D.__data[3]=0,D.__data[4]=B.elements[3],D.__data[5]=B.elements[4],D.__data[6]=B.elements[5],D.__data[7]=0,D.__data[8]=B.elements[6],D.__data[9]=B.elements[7],D.__data[10]=B.elements[8],D.__data[11]=0):(B.toArray(D.__data,O),O+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,C,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(M,_,v,w){const b=M.value,T=_+"_"+v;if(w[T]===void 0)return typeof b=="number"||typeof b=="boolean"?w[T]=b:w[T]=b.clone(),!0;{const P=w[T];if(typeof b=="number"||typeof b=="boolean"){if(P!==b)return w[T]=b,!0}else if(P.equals(b)===!1)return P.copy(b),!0}return!1}function g(M){const _=M.uniforms;let v=0;const w=16;for(let T=0,P=_.length;T<P;T++){const y=Array.isArray(_[T])?_[T]:[_[T]];for(let S=0,D=y.length;S<D;S++){const C=y[S],F=Array.isArray(C.value)?C.value:[C.value];for(let O=0,q=F.length;O<q;O++){const B=F[O],Q=x(B),L=v%w,G=L%Q.boundary,X=L+G;v+=G,X!==0&&w-X<Q.storage&&(v+=w-X),C.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=v,v+=Q.storage}}}const b=v%w;return b>0&&(v+=w-b),M.__size=v,M.__cache={},this}function x(M){const _={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(_.boundary=4,_.storage=4):M.isVector2?(_.boundary=8,_.storage=8):M.isVector3||M.isColor?(_.boundary=16,_.storage=12):M.isVector4?(_.boundary=16,_.storage=16):M.isMatrix3?(_.boundary=48,_.storage=48):M.isMatrix4?(_.boundary=64,_.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),_}function m(M){const _=M.target;_.removeEventListener("dispose",m);const v=o.indexOf(_.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function d(){for(const M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}class Rv{constructor(t={}){const{canvas:e=Pf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:p=!1}=t;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=o;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,d=null;const M=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let w=!1;this._outputColorSpace=Ge;let b=0,T=0,P=null,y=-1,S=null;const D=new le,C=new le;let F=null;const O=new Dt(0);let q=0,B=e.width,Q=e.height,L=1,G=null,X=null;const tt=new le(0,0,B,Q),ut=new le(0,0,B,Q);let J=!1;const Tt=new vl;let st=!1,V=!1;const R=new se,Y=new U,ct=new le,it={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Et=!1;function Jt(){return P===null?L:1}let N=n;function Nt(A,k){return e.getContext(A,k)}try{const A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ol}`),e.addEventListener("webglcontextlost",dt,!1),e.addEventListener("webglcontextrestored",wt,!1),e.addEventListener("webglcontextcreationerror",rt,!1),N===null){const k="webgl2";if(N=Nt(k,A),N===null)throw Nt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let At,_t,ft,Zt,Mt,zt,jt,re,I,E,W,j,nt,K,Ut,ht,Pt,Lt,at,xt,kt,It,gt,Wt;function z(){At=new B0(N),At.init(),It=new yv(N,At),_t=new L0(N,At,t,It),ft=new xv(N,At),_t.reversedDepthBuffer&&p&&ft.buffers.depth.setReversed(!0),Zt=new G0(N),Mt=new ov,zt=new Mv(N,At,ft,Mt,_t,It,Zt),jt=new U0(v),re=new O0(v),I=new Zd(N),gt=new P0(N,I),E=new k0(N,I,Zt,gt),W=new W0(N,E,I,Zt),at=new V0(N,_t,zt),ht=new I0(Mt),j=new rv(v,jt,re,At,_t,gt,ht),nt=new Av(v,Mt),K=new lv,Ut=new pv(At),Lt=new R0(v,jt,re,ft,W,h,l),Pt=new vv(v,W,_t),Wt=new Cv(N,Zt,_t,ft),xt=new D0(N,At,Zt),kt=new H0(N,At,Zt),Zt.programs=j.programs,v.capabilities=_t,v.extensions=At,v.properties=Mt,v.renderLists=K,v.shadowMap=Pt,v.state=ft,v.info=Zt}z();const lt=new Ev(v,N);this.xr=lt,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const A=At.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=At.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return L},this.setPixelRatio=function(A){A!==void 0&&(L=A,this.setSize(B,Q,!1))},this.getSize=function(A){return A.set(B,Q)},this.setSize=function(A,k,Z=!0){if(lt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=A,Q=k,e.width=Math.floor(A*L),e.height=Math.floor(k*L),Z===!0&&(e.style.width=A+"px",e.style.height=k+"px"),this.setViewport(0,0,A,k)},this.getDrawingBufferSize=function(A){return A.set(B*L,Q*L).floor()},this.setDrawingBufferSize=function(A,k,Z){B=A,Q=k,L=Z,e.width=Math.floor(A*Z),e.height=Math.floor(k*Z),this.setViewport(0,0,A,k)},this.getCurrentViewport=function(A){return A.copy(D)},this.getViewport=function(A){return A.copy(tt)},this.setViewport=function(A,k,Z,$){A.isVector4?tt.set(A.x,A.y,A.z,A.w):tt.set(A,k,Z,$),ft.viewport(D.copy(tt).multiplyScalar(L).round())},this.getScissor=function(A){return A.copy(ut)},this.setScissor=function(A,k,Z,$){A.isVector4?ut.set(A.x,A.y,A.z,A.w):ut.set(A,k,Z,$),ft.scissor(C.copy(ut).multiplyScalar(L).round())},this.getScissorTest=function(){return J},this.setScissorTest=function(A){ft.setScissorTest(J=A)},this.setOpaqueSort=function(A){G=A},this.setTransparentSort=function(A){X=A},this.getClearColor=function(A){return A.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor(...arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha(...arguments)},this.clear=function(A=!0,k=!0,Z=!0){let $=0;if(A){let H=!1;if(P!==null){const ot=P.texture.format;H=ot===dl||ot===fl||ot===ul}if(H){const ot=P.texture.type,vt=ot===Vn||ot===Oi||ot===er||ot===nr||ot===cl||ot===hl,Ct=Lt.getClearColor(),bt=Lt.getClearAlpha(),Bt=Ct.r,Ht=Ct.g,Ft=Ct.b;vt?(g[0]=Bt,g[1]=Ht,g[2]=Ft,g[3]=bt,N.clearBufferuiv(N.COLOR,0,g)):(x[0]=Bt,x[1]=Ht,x[2]=Ft,x[3]=bt,N.clearBufferiv(N.COLOR,0,x))}else $|=N.COLOR_BUFFER_BIT}k&&($|=N.DEPTH_BUFFER_BIT),Z&&($|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",dt,!1),e.removeEventListener("webglcontextrestored",wt,!1),e.removeEventListener("webglcontextcreationerror",rt,!1),Lt.dispose(),K.dispose(),Ut.dispose(),Mt.dispose(),jt.dispose(),re.dispose(),W.dispose(),gt.dispose(),Wt.dispose(),j.dispose(),lt.dispose(),lt.removeEventListener("sessionstart",zn),lt.removeEventListener("sessionend",Ol),xi.stop()};function dt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function wt(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const A=Zt.autoReset,k=Pt.enabled,Z=Pt.autoUpdate,$=Pt.needsUpdate,H=Pt.type;z(),Zt.autoReset=A,Pt.enabled=k,Pt.autoUpdate=Z,Pt.needsUpdate=$,Pt.type=H}function rt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function et(A){const k=A.target;k.removeEventListener("dispose",et),Rt(k)}function Rt(A){Gt(A),Mt.remove(A)}function Gt(A){const k=Mt.get(A).programs;k!==void 0&&(k.forEach(function(Z){j.releaseProgram(Z)}),A.isShaderMaterial&&j.releaseShaderCache(A))}this.renderBufferDirect=function(A,k,Z,$,H,ot){k===null&&(k=it);const vt=H.isMesh&&H.matrixWorld.determinant()<0,Ct=Vu(A,k,Z,$,H);ft.setMaterial($,vt);let bt=Z.index,Bt=1;if($.wireframe===!0){if(bt=E.getWireframeAttribute(Z),bt===void 0)return;Bt=2}const Ht=Z.drawRange,Ft=Z.attributes.position;let Qt=Ht.start*Bt,he=(Ht.start+Ht.count)*Bt;ot!==null&&(Qt=Math.max(Qt,ot.start*Bt),he=Math.min(he,(ot.start+ot.count)*Bt)),bt!==null?(Qt=Math.max(Qt,0),he=Math.min(he,bt.count)):Ft!=null&&(Qt=Math.max(Qt,0),he=Math.min(he,Ft.count));const De=he-Qt;if(De<0||De===1/0)return;gt.setup(H,$,Ct,Z,bt);let ge,ue=xt;if(bt!==null&&(ge=I.get(bt),ue=kt,ue.setIndex(ge)),H.isMesh)$.wireframe===!0?(ft.setLineWidth($.wireframeLinewidth*Jt()),ue.setMode(N.LINES)):ue.setMode(N.TRIANGLES);else if(H.isLine){let Ot=$.linewidth;Ot===void 0&&(Ot=1),ft.setLineWidth(Ot*Jt()),H.isLineSegments?ue.setMode(N.LINES):H.isLineLoop?ue.setMode(N.LINE_LOOP):ue.setMode(N.LINE_STRIP)}else H.isPoints?ue.setMode(N.POINTS):H.isSprite&&ue.setMode(N.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)rr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ue.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(At.get("WEBGL_multi_draw"))ue.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Ot=H._multiDrawStarts,we=H._multiDrawCounts,ee=H._multiDrawCount,ln=bt?I.get(bt).bytesPerElement:1,Xi=Mt.get($).currentProgram.getUniforms();for(let cn=0;cn<ee;cn++)Xi.setValue(N,"_gl_DrawID",cn),ue.render(Ot[cn]/ln,we[cn])}else if(H.isInstancedMesh)ue.renderInstances(Qt,De,H.count);else if(Z.isInstancedBufferGeometry){const Ot=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,we=Math.min(Z.instanceCount,Ot);ue.renderInstances(Qt,De,we)}else ue.render(Qt,De)};function pe(A,k,Z){A.transparent===!0&&A.side===ye&&A.forceSinglePass===!1?(A.side=en,A.needsUpdate=!0,gr(A,k,Z),A.side=ni,A.needsUpdate=!0,gr(A,k,Z),A.side=ye):gr(A,k,Z)}this.compile=function(A,k,Z=null){Z===null&&(Z=A),d=Ut.get(Z),d.init(k),_.push(d),Z.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(d.pushLight(H),H.castShadow&&d.pushShadow(H))}),A!==Z&&A.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(d.pushLight(H),H.castShadow&&d.pushShadow(H))}),d.setupLights();const $=new Set;return A.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const ot=H.material;if(ot)if(Array.isArray(ot))for(let vt=0;vt<ot.length;vt++){const Ct=ot[vt];pe(Ct,Z,H),$.add(Ct)}else pe(ot,Z,H),$.add(ot)}),d=_.pop(),$},this.compileAsync=function(A,k,Z=null){const $=this.compile(A,k,Z);return new Promise(H=>{function ot(){if($.forEach(function(vt){Mt.get(vt).currentProgram.isReady()&&$.delete(vt)}),$.size===0){H(A);return}setTimeout(ot,10)}At.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let ie=null;function qn(A){ie&&ie(A)}function zn(){xi.stop()}function Ol(){xi.start()}const xi=new mu;xi.setAnimationLoop(qn),typeof self<"u"&&xi.setContext(self),this.setAnimationLoop=function(A){ie=A,lt.setAnimationLoop(A),A===null?xi.stop():xi.start()},lt.addEventListener("sessionstart",zn),lt.addEventListener("sessionend",Ol),this.render=function(A,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(k),k=lt.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,k,P),d=Ut.get(A,_.length),d.init(k),_.push(d),R.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Tt.setFromProjectionMatrix(R,kn,k.reversedDepth),V=this.localClippingEnabled,st=ht.init(this.clippingPlanes,V),m=K.get(A,M.length),m.init(),M.push(m),lt.enabled===!0&&lt.isPresenting===!0){const ot=v.xr.getDepthSensingMesh();ot!==null&&go(ot,k,-1/0,v.sortObjects)}go(A,k,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(G,X),Et=lt.enabled===!1||lt.isPresenting===!1||lt.hasDepthSensing()===!1,Et&&Lt.addToRenderList(m,A),this.info.render.frame++,st===!0&&ht.beginShadows();const Z=d.state.shadowsArray;Pt.render(Z,A,k),st===!0&&ht.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=m.opaque,H=m.transmissive;if(d.setupLights(),k.isArrayCamera){const ot=k.cameras;if(H.length>0)for(let vt=0,Ct=ot.length;vt<Ct;vt++){const bt=ot[vt];kl($,H,A,bt)}Et&&Lt.render(A);for(let vt=0,Ct=ot.length;vt<Ct;vt++){const bt=ot[vt];Bl(m,A,bt,bt.viewport)}}else H.length>0&&kl($,H,A,k),Et&&Lt.render(A),Bl(m,A,k);P!==null&&T===0&&(zt.updateMultisampleRenderTarget(P),zt.updateRenderTargetMipmap(P)),A.isScene===!0&&A.onAfterRender(v,A,k),gt.resetDefaultState(),y=-1,S=null,_.pop(),_.length>0?(d=_[_.length-1],st===!0&&ht.setGlobalState(v.clippingPlanes,d.state.camera)):d=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function go(A,k,Z,$){if(A.visible===!1)return;if(A.layers.test(k.layers)){if(A.isGroup)Z=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(k);else if(A.isLight)d.pushLight(A),A.castShadow&&d.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Tt.intersectsSprite(A)){$&&ct.setFromMatrixPosition(A.matrixWorld).applyMatrix4(R);const vt=W.update(A),Ct=A.material;Ct.visible&&m.push(A,vt,Ct,Z,ct.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Tt.intersectsObject(A))){const vt=W.update(A),Ct=A.material;if($&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ct.copy(A.boundingSphere.center)):(vt.boundingSphere===null&&vt.computeBoundingSphere(),ct.copy(vt.boundingSphere.center)),ct.applyMatrix4(A.matrixWorld).applyMatrix4(R)),Array.isArray(Ct)){const bt=vt.groups;for(let Bt=0,Ht=bt.length;Bt<Ht;Bt++){const Ft=bt[Bt],Qt=Ct[Ft.materialIndex];Qt&&Qt.visible&&m.push(A,vt,Qt,Z,ct.z,Ft)}}else Ct.visible&&m.push(A,vt,Ct,Z,ct.z,null)}}const ot=A.children;for(let vt=0,Ct=ot.length;vt<Ct;vt++)go(ot[vt],k,Z,$)}function Bl(A,k,Z,$){const H=A.opaque,ot=A.transmissive,vt=A.transparent;d.setupLightsView(Z),st===!0&&ht.setGlobalState(v.clippingPlanes,Z),$&&ft.viewport(D.copy($)),H.length>0&&mr(H,k,Z),ot.length>0&&mr(ot,k,Z),vt.length>0&&mr(vt,k,Z),ft.buffers.depth.setTest(!0),ft.buffers.depth.setMask(!0),ft.buffers.color.setMask(!0),ft.setPolygonOffset(!1)}function kl(A,k,Z,$){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[$.id]===void 0&&(d.state.transmissionRenderTarget[$.id]=new Nn(1,1,{generateMipmaps:!0,type:At.has("EXT_color_buffer_half_float")||At.has("EXT_color_buffer_float")?ti:Vn,minFilter:di,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace}));const ot=d.state.transmissionRenderTarget[$.id],vt=$.viewport||D;ot.setSize(vt.z*v.transmissionResolutionScale,vt.w*v.transmissionResolutionScale);const Ct=v.getRenderTarget(),bt=v.getActiveCubeFace(),Bt=v.getActiveMipmapLevel();v.setRenderTarget(ot),v.getClearColor(O),q=v.getClearAlpha(),q<1&&v.setClearColor(16777215,.5),v.clear(),Et&&Lt.render(Z);const Ht=v.toneMapping;v.toneMapping=mi;const Ft=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),d.setupLightsView($),st===!0&&ht.setGlobalState(v.clippingPlanes,$),mr(A,Z,$),zt.updateMultisampleRenderTarget(ot),zt.updateRenderTargetMipmap(ot),At.has("WEBGL_multisampled_render_to_texture")===!1){let Qt=!1;for(let he=0,De=k.length;he<De;he++){const ge=k[he],ue=ge.object,Ot=ge.geometry,we=ge.material,ee=ge.group;if(we.side===ye&&ue.layers.test($.layers)){const ln=we.side;we.side=en,we.needsUpdate=!0,Hl(ue,Z,$,Ot,we,ee),we.side=ln,we.needsUpdate=!0,Qt=!0}}Qt===!0&&(zt.updateMultisampleRenderTarget(ot),zt.updateRenderTargetMipmap(ot))}v.setRenderTarget(Ct,bt,Bt),v.setClearColor(O,q),Ft!==void 0&&($.viewport=Ft),v.toneMapping=Ht}function mr(A,k,Z){const $=k.isScene===!0?k.overrideMaterial:null;for(let H=0,ot=A.length;H<ot;H++){const vt=A[H],Ct=vt.object,bt=vt.geometry,Bt=vt.group;let Ht=vt.material;Ht.allowOverride===!0&&$!==null&&(Ht=$),Ct.layers.test(Z.layers)&&Hl(Ct,k,Z,bt,Ht,Bt)}}function Hl(A,k,Z,$,H,ot){A.onBeforeRender(v,k,Z,$,H,ot),A.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),H.onBeforeRender(v,k,Z,$,A,ot),H.transparent===!0&&H.side===ye&&H.forceSinglePass===!1?(H.side=en,H.needsUpdate=!0,v.renderBufferDirect(Z,k,$,H,A,ot),H.side=ni,H.needsUpdate=!0,v.renderBufferDirect(Z,k,$,H,A,ot),H.side=ye):v.renderBufferDirect(Z,k,$,H,A,ot),A.onAfterRender(v,k,Z,$,H,ot)}function gr(A,k,Z){k.isScene!==!0&&(k=it);const $=Mt.get(A),H=d.state.lights,ot=d.state.shadowsArray,vt=H.state.version,Ct=j.getParameters(A,H.state,ot,k,Z),bt=j.getProgramCacheKey(Ct);let Bt=$.programs;$.environment=A.isMeshStandardMaterial?k.environment:null,$.fog=k.fog,$.envMap=(A.isMeshStandardMaterial?re:jt).get(A.envMap||$.environment),$.envMapRotation=$.environment!==null&&A.envMap===null?k.environmentRotation:A.envMapRotation,Bt===void 0&&(A.addEventListener("dispose",et),Bt=new Map,$.programs=Bt);let Ht=Bt.get(bt);if(Ht!==void 0){if($.currentProgram===Ht&&$.lightsStateVersion===vt)return Vl(A,Ct),Ht}else Ct.uniforms=j.getUniforms(A),A.onBeforeCompile(Ct,v),Ht=j.acquireProgram(Ct,bt),Bt.set(bt,Ht),$.uniforms=Ct.uniforms;const Ft=$.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ft.clippingPlanes=ht.uniform),Vl(A,Ct),$.needsLights=Xu(A),$.lightsStateVersion=vt,$.needsLights&&(Ft.ambientLightColor.value=H.state.ambient,Ft.lightProbe.value=H.state.probe,Ft.directionalLights.value=H.state.directional,Ft.directionalLightShadows.value=H.state.directionalShadow,Ft.spotLights.value=H.state.spot,Ft.spotLightShadows.value=H.state.spotShadow,Ft.rectAreaLights.value=H.state.rectArea,Ft.ltc_1.value=H.state.rectAreaLTC1,Ft.ltc_2.value=H.state.rectAreaLTC2,Ft.pointLights.value=H.state.point,Ft.pointLightShadows.value=H.state.pointShadow,Ft.hemisphereLights.value=H.state.hemi,Ft.directionalShadowMap.value=H.state.directionalShadowMap,Ft.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ft.spotShadowMap.value=H.state.spotShadowMap,Ft.spotLightMatrix.value=H.state.spotLightMatrix,Ft.spotLightMap.value=H.state.spotLightMap,Ft.pointShadowMap.value=H.state.pointShadowMap,Ft.pointShadowMatrix.value=H.state.pointShadowMatrix),$.currentProgram=Ht,$.uniformsList=null,Ht}function Gl(A){if(A.uniformsList===null){const k=A.currentProgram.getUniforms();A.uniformsList=Qr.seqWithValue(k.seq,A.uniforms)}return A.uniformsList}function Vl(A,k){const Z=Mt.get(A);Z.outputColorSpace=k.outputColorSpace,Z.batching=k.batching,Z.batchingColor=k.batchingColor,Z.instancing=k.instancing,Z.instancingColor=k.instancingColor,Z.instancingMorph=k.instancingMorph,Z.skinning=k.skinning,Z.morphTargets=k.morphTargets,Z.morphNormals=k.morphNormals,Z.morphColors=k.morphColors,Z.morphTargetsCount=k.morphTargetsCount,Z.numClippingPlanes=k.numClippingPlanes,Z.numIntersection=k.numClipIntersection,Z.vertexAlphas=k.vertexAlphas,Z.vertexTangents=k.vertexTangents,Z.toneMapping=k.toneMapping}function Vu(A,k,Z,$,H){k.isScene!==!0&&(k=it),zt.resetTextureUnits();const ot=k.fog,vt=$.isMeshStandardMaterial?k.environment:null,Ct=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:xs,bt=($.isMeshStandardMaterial?re:jt).get($.envMap||vt),Bt=$.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Ht=!!Z.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ft=!!Z.morphAttributes.position,Qt=!!Z.morphAttributes.normal,he=!!Z.morphAttributes.color;let De=mi;$.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(De=v.toneMapping);const ge=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,ue=ge!==void 0?ge.length:0,Ot=Mt.get($),we=d.state.lights;if(st===!0&&(V===!0||A!==S)){const Je=A===S&&$.id===y;ht.setState($,A,Je)}let ee=!1;$.version===Ot.__version?(Ot.needsLights&&Ot.lightsStateVersion!==we.state.version||Ot.outputColorSpace!==Ct||H.isBatchedMesh&&Ot.batching===!1||!H.isBatchedMesh&&Ot.batching===!0||H.isBatchedMesh&&Ot.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Ot.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Ot.instancing===!1||!H.isInstancedMesh&&Ot.instancing===!0||H.isSkinnedMesh&&Ot.skinning===!1||!H.isSkinnedMesh&&Ot.skinning===!0||H.isInstancedMesh&&Ot.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ot.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ot.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ot.instancingMorph===!1&&H.morphTexture!==null||Ot.envMap!==bt||$.fog===!0&&Ot.fog!==ot||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==ht.numPlanes||Ot.numIntersection!==ht.numIntersection)||Ot.vertexAlphas!==Bt||Ot.vertexTangents!==Ht||Ot.morphTargets!==Ft||Ot.morphNormals!==Qt||Ot.morphColors!==he||Ot.toneMapping!==De||Ot.morphTargetsCount!==ue)&&(ee=!0):(ee=!0,Ot.__version=$.version);let ln=Ot.currentProgram;ee===!0&&(ln=gr($,k,H));let Xi=!1,cn=!1,Ds=!1;const Ee=ln.getUniforms(),mn=Ot.uniforms;if(ft.useProgram(ln.program)&&(Xi=!0,cn=!0,Ds=!0),$.id!==y&&(y=$.id,cn=!0),Xi||S!==A){ft.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Ee.setValue(N,"projectionMatrix",A.projectionMatrix),Ee.setValue(N,"viewMatrix",A.matrixWorldInverse);const on=Ee.map.cameraPosition;on!==void 0&&on.setValue(N,Y.setFromMatrixPosition(A.matrixWorld)),_t.logarithmicDepthBuffer&&Ee.setValue(N,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Ee.setValue(N,"isOrthographic",A.isOrthographicCamera===!0),S!==A&&(S=A,cn=!0,Ds=!0)}if(H.isSkinnedMesh){Ee.setOptional(N,H,"bindMatrix"),Ee.setOptional(N,H,"bindMatrixInverse");const Je=H.skeleton;Je&&(Je.boneTexture===null&&Je.computeBoneTexture(),Ee.setValue(N,"boneTexture",Je.boneTexture,zt))}H.isBatchedMesh&&(Ee.setOptional(N,H,"batchingTexture"),Ee.setValue(N,"batchingTexture",H._matricesTexture,zt),Ee.setOptional(N,H,"batchingIdTexture"),Ee.setValue(N,"batchingIdTexture",H._indirectTexture,zt),Ee.setOptional(N,H,"batchingColorTexture"),H._colorsTexture!==null&&Ee.setValue(N,"batchingColorTexture",H._colorsTexture,zt));const gn=Z.morphAttributes;if((gn.position!==void 0||gn.normal!==void 0||gn.color!==void 0)&&at.update(H,Z,ln),(cn||Ot.receiveShadow!==H.receiveShadow)&&(Ot.receiveShadow=H.receiveShadow,Ee.setValue(N,"receiveShadow",H.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(mn.envMap.value=bt,mn.flipEnvMap.value=bt.isCubeTexture&&bt.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&k.environment!==null&&(mn.envMapIntensity.value=k.environmentIntensity),cn&&(Ee.setValue(N,"toneMappingExposure",v.toneMappingExposure),Ot.needsLights&&Wu(mn,Ds),ot&&$.fog===!0&&nt.refreshFogUniforms(mn,ot),nt.refreshMaterialUniforms(mn,$,L,Q,d.state.transmissionRenderTarget[A.id]),Qr.upload(N,Gl(Ot),mn,zt)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Qr.upload(N,Gl(Ot),mn,zt),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Ee.setValue(N,"center",H.center),Ee.setValue(N,"modelViewMatrix",H.modelViewMatrix),Ee.setValue(N,"normalMatrix",H.normalMatrix),Ee.setValue(N,"modelMatrix",H.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Je=$.uniformsGroups;for(let on=0,vo=Je.length;on<vo;on++){const Mi=Je[on];Wt.update(Mi,ln),Wt.bind(Mi,ln)}}return ln}function Wu(A,k){A.ambientLightColor.needsUpdate=k,A.lightProbe.needsUpdate=k,A.directionalLights.needsUpdate=k,A.directionalLightShadows.needsUpdate=k,A.pointLights.needsUpdate=k,A.pointLightShadows.needsUpdate=k,A.spotLights.needsUpdate=k,A.spotLightShadows.needsUpdate=k,A.rectAreaLights.needsUpdate=k,A.hemisphereLights.needsUpdate=k}function Xu(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(A,k,Z){const $=Mt.get(A);$.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),Mt.get(A.texture).__webglTexture=k,Mt.get(A.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:Z,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,k){const Z=Mt.get(A);Z.__webglFramebuffer=k,Z.__useDefaultFramebuffer=k===void 0};const qu=N.createFramebuffer();this.setRenderTarget=function(A,k=0,Z=0){P=A,b=k,T=Z;let $=!0,H=null,ot=!1,vt=!1;if(A){const bt=Mt.get(A);if(bt.__useDefaultFramebuffer!==void 0)ft.bindFramebuffer(N.FRAMEBUFFER,null),$=!1;else if(bt.__webglFramebuffer===void 0)zt.setupRenderTarget(A);else if(bt.__hasExternalTextures)zt.rebindTextures(A,Mt.get(A.texture).__webglTexture,Mt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ft=A.depthTexture;if(bt.__boundDepthTexture!==Ft){if(Ft!==null&&Mt.has(Ft)&&(A.width!==Ft.image.width||A.height!==Ft.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");zt.setupDepthRenderbuffer(A)}}const Bt=A.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(vt=!0);const Ht=Mt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ht[k])?H=Ht[k][Z]:H=Ht[k],ot=!0):A.samples>0&&zt.useMultisampledRTT(A)===!1?H=Mt.get(A).__webglMultisampledFramebuffer:Array.isArray(Ht)?H=Ht[Z]:H=Ht,D.copy(A.viewport),C.copy(A.scissor),F=A.scissorTest}else D.copy(tt).multiplyScalar(L).floor(),C.copy(ut).multiplyScalar(L).floor(),F=J;if(Z!==0&&(H=qu),ft.bindFramebuffer(N.FRAMEBUFFER,H)&&$&&ft.drawBuffers(A,H),ft.viewport(D),ft.scissor(C),ft.setScissorTest(F),ot){const bt=Mt.get(A.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+k,bt.__webglTexture,Z)}else if(vt){const bt=k;for(let Bt=0;Bt<A.textures.length;Bt++){const Ht=Mt.get(A.textures[Bt]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Bt,Ht.__webglTexture,Z,bt)}}else if(A!==null&&Z!==0){const bt=Mt.get(A.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,bt.__webglTexture,Z)}y=-1},this.readRenderTargetPixels=function(A,k,Z,$,H,ot,vt,Ct=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=Mt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&vt!==void 0&&(bt=bt[vt]),bt){ft.bindFramebuffer(N.FRAMEBUFFER,bt);try{const Bt=A.textures[Ct],Ht=Bt.format,Ft=Bt.type;if(!_t.textureFormatReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!_t.textureTypeReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=A.width-$&&Z>=0&&Z<=A.height-H&&(A.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Ct),N.readPixels(k,Z,$,H,It.convert(Ht),It.convert(Ft),ot))}finally{const Bt=P!==null?Mt.get(P).__webglFramebuffer:null;ft.bindFramebuffer(N.FRAMEBUFFER,Bt)}}},this.readRenderTargetPixelsAsync=async function(A,k,Z,$,H,ot,vt,Ct=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=Mt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&vt!==void 0&&(bt=bt[vt]),bt)if(k>=0&&k<=A.width-$&&Z>=0&&Z<=A.height-H){ft.bindFramebuffer(N.FRAMEBUFFER,bt);const Bt=A.textures[Ct],Ht=Bt.format,Ft=Bt.type;if(!_t.textureFormatReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!_t.textureTypeReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Qt),N.bufferData(N.PIXEL_PACK_BUFFER,ot.byteLength,N.STREAM_READ),A.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Ct),N.readPixels(k,Z,$,H,It.convert(Ht),It.convert(Ft),0);const he=P!==null?Mt.get(P).__webglFramebuffer:null;ft.bindFramebuffer(N.FRAMEBUFFER,he);const De=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Df(N,De,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Qt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ot),N.deleteBuffer(Qt),N.deleteSync(De),ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,k=null,Z=0){const $=Math.pow(2,-Z),H=Math.floor(A.image.width*$),ot=Math.floor(A.image.height*$),vt=k!==null?k.x:0,Ct=k!==null?k.y:0;zt.setTexture2D(A,0),N.copyTexSubImage2D(N.TEXTURE_2D,Z,0,0,vt,Ct,H,ot),ft.unbindTexture()};const Yu=N.createFramebuffer(),Zu=N.createFramebuffer();this.copyTextureToTexture=function(A,k,Z=null,$=null,H=0,ot=null){ot===null&&(H!==0?(rr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ot=H,H=0):ot=0);let vt,Ct,bt,Bt,Ht,Ft,Qt,he,De;const ge=A.isCompressedTexture?A.mipmaps[ot]:A.image;if(Z!==null)vt=Z.max.x-Z.min.x,Ct=Z.max.y-Z.min.y,bt=Z.isBox3?Z.max.z-Z.min.z:1,Bt=Z.min.x,Ht=Z.min.y,Ft=Z.isBox3?Z.min.z:0;else{const gn=Math.pow(2,-H);vt=Math.floor(ge.width*gn),Ct=Math.floor(ge.height*gn),A.isDataArrayTexture?bt=ge.depth:A.isData3DTexture?bt=Math.floor(ge.depth*gn):bt=1,Bt=0,Ht=0,Ft=0}$!==null?(Qt=$.x,he=$.y,De=$.z):(Qt=0,he=0,De=0);const ue=It.convert(k.format),Ot=It.convert(k.type);let we;k.isData3DTexture?(zt.setTexture3D(k,0),we=N.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(zt.setTexture2DArray(k,0),we=N.TEXTURE_2D_ARRAY):(zt.setTexture2D(k,0),we=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,k.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,k.unpackAlignment);const ee=N.getParameter(N.UNPACK_ROW_LENGTH),ln=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Xi=N.getParameter(N.UNPACK_SKIP_PIXELS),cn=N.getParameter(N.UNPACK_SKIP_ROWS),Ds=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,ge.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ge.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Bt),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ht),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ft);const Ee=A.isDataArrayTexture||A.isData3DTexture,mn=k.isDataArrayTexture||k.isData3DTexture;if(A.isDepthTexture){const gn=Mt.get(A),Je=Mt.get(k),on=Mt.get(gn.__renderTarget),vo=Mt.get(Je.__renderTarget);ft.bindFramebuffer(N.READ_FRAMEBUFFER,on.__webglFramebuffer),ft.bindFramebuffer(N.DRAW_FRAMEBUFFER,vo.__webglFramebuffer);for(let Mi=0;Mi<bt;Mi++)Ee&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Mt.get(A).__webglTexture,H,Ft+Mi),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Mt.get(k).__webglTexture,ot,De+Mi)),N.blitFramebuffer(Bt,Ht,vt,Ct,Qt,he,vt,Ct,N.DEPTH_BUFFER_BIT,N.NEAREST);ft.bindFramebuffer(N.READ_FRAMEBUFFER,null),ft.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(H!==0||A.isRenderTargetTexture||Mt.has(A)){const gn=Mt.get(A),Je=Mt.get(k);ft.bindFramebuffer(N.READ_FRAMEBUFFER,Yu),ft.bindFramebuffer(N.DRAW_FRAMEBUFFER,Zu);for(let on=0;on<bt;on++)Ee?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,gn.__webglTexture,H,Ft+on):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,gn.__webglTexture,H),mn?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Je.__webglTexture,ot,De+on):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Je.__webglTexture,ot),H!==0?N.blitFramebuffer(Bt,Ht,vt,Ct,Qt,he,vt,Ct,N.COLOR_BUFFER_BIT,N.NEAREST):mn?N.copyTexSubImage3D(we,ot,Qt,he,De+on,Bt,Ht,vt,Ct):N.copyTexSubImage2D(we,ot,Qt,he,Bt,Ht,vt,Ct);ft.bindFramebuffer(N.READ_FRAMEBUFFER,null),ft.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else mn?A.isDataTexture||A.isData3DTexture?N.texSubImage3D(we,ot,Qt,he,De,vt,Ct,bt,ue,Ot,ge.data):k.isCompressedArrayTexture?N.compressedTexSubImage3D(we,ot,Qt,he,De,vt,Ct,bt,ue,ge.data):N.texSubImage3D(we,ot,Qt,he,De,vt,Ct,bt,ue,Ot,ge):A.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,ot,Qt,he,vt,Ct,ue,Ot,ge.data):A.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,ot,Qt,he,ge.width,ge.height,ue,ge.data):N.texSubImage2D(N.TEXTURE_2D,ot,Qt,he,vt,Ct,ue,Ot,ge);N.pixelStorei(N.UNPACK_ROW_LENGTH,ee),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ln),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Xi),N.pixelStorei(N.UNPACK_SKIP_ROWS,cn),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ds),ot===0&&k.generateMipmaps&&N.generateMipmap(we),ft.unbindTexture()},this.initRenderTarget=function(A){Mt.get(A).__webglFramebuffer===void 0&&zt.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?zt.setTextureCube(A,0):A.isData3DTexture?zt.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?zt.setTexture2DArray(A,0):zt.setTexture2D(A,0),ft.unbindTexture()},this.resetState=function(){b=0,T=0,P=null,ft.reset(),gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}}const to={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Ps{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Pv=new Tl(-1,1,1,-1,0,1);class Dv extends xe{constructor(){super(),this.setAttribute("position",new Vt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Vt([0,2,0,0,2,0],2))}}const Lv=new Dv;class Cl{constructor(t){this._mesh=new St(Lv,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Pv)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Mu extends Ps{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Se?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=or.clone(t.uniforms),this.material=new Se({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Cl(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class jc extends Ps{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class Iv extends Ps{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class Uv{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new pt);this._width=n.width,this._height=n.height,e=new Nn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ti}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Mu(to),this.copyPass.material.blending=Qn,this.clock=new pu}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}jc!==void 0&&(o instanceof jc?n=!0:o instanceof Iv&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new pt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Nv extends Ps{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Dt}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}}const Fv={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Dt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class bs extends Ps{constructor(t,e=1,n,s){super(),this.strength=e,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new pt(t.x,t.y):new pt(256,256),this.clearColor=new Dt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Nn(r,o,{type:ti}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const f=new Nn(r,o,{type:ti});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const p=new Nn(r,o,{type:ti});p.texture.name="UnrealBloomPass.v"+u,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),o=Math.round(o/2)}const a=Fv;this.highPassUniforms=or.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Se({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new pt(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=or.clone(to.uniforms),this.blendMaterial=new Se({uniforms:this.copyUniforms,vertexShader:to.vertexShader,fragmentShader:to.fragmentShader,blending:Ne,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Dt,this._oldClearAlpha=1,this._basic=new me,this._fsQuad=new Cl(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new pt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=bs.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=bs.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Se({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new pt(.5,.5)},direction:{value:new pt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}_getCompositeMaterial(t){return new Se({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}bs.BlurDirectionX=new pt(1,0);bs.BlurDirectionY=new pt(0,1);const Xr={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class zv extends Ps{constructor(){super(),this.uniforms=or.clone(Xr.uniforms),this.material=new Bd({name:Xr.name,uniforms:this.uniforms,vertexShader:Xr.vertexShader,fragmentShader:Xr.fragmentShader}),this._fsQuad=new Cl(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},te.getTransfer(this._outputColorSpace)===oe&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ph?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Dh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Lh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===al?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Uh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Nh?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Ih&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const yt=(i,t,e)=>new U(i,t,e),oo={terrain:{minX:-950,maxX:550,minZ:-2400,maxZ:350},ocean:{center:[-200,-1050],size:6e3}},We={pos:yt(0,0,-20),yaw:Math.PI},hr=[{id:"haven",x:0,z:140,r:150,h:15,profile:"sandy",rot:0,sq:1},{id:"sandbar",x:150,z:30,r:48,h:3.4,profile:"sandy",rot:0,sq:1},{id:"reefA",x:-30,z:-520,r:150,h:-1.1,profile:"reef",rot:-.4,sq:1.5},{id:"reefB",x:85,z:-680,r:120,h:-1.5,profile:"reef",rot:.5,sq:1.3},{id:"wreck",x:245,z:-800,r:85,h:8,profile:"sandy",rot:0,sq:1},{id:"spire1",x:100,z:-872,r:17,h:10,profile:"spire",rot:0,sq:1},{id:"spire2",x:38,z:-938,r:15,h:12,profile:"spire",rot:0,sq:1},{id:"spire3",x:108,z:-962,r:14,h:9,profile:"spire",rot:0,sq:1},{id:"spire4",x:-18,z:-1006,r:16,h:11,profile:"spire",rot:0,sq:1},{id:"spire5",x:-62,z:-1046,r:15,h:8,profile:"spire",rot:0,sq:1},{id:"spire6",x:14,z:-1096,r:12,h:7,profile:"spire",rot:0,sq:1},{id:"fang",x:-170,z:-1238,r:175,h:62,profile:"cliff",rot:.3,sq:1},{id:"fangW",x:-285,z:-1160,r:75,h:26,profile:"cliff",rot:0,sq:1},{id:"fangE",x:-80,z:-1330,r:70,h:22,profile:"cliff",rot:0,sq:1},{id:"lagE",x:-200,z:-1390,r:60,h:24,profile:"cliff",rot:0,sq:1},{id:"lagS",x:-300,z:-1255,r:60,h:30,profile:"cliff",rot:0,sq:1},{id:"lagSW",x:-390,z:-1290,r:70,h:38,profile:"cliff",rot:0,sq:1},{id:"lagNW",x:-430,z:-1480,r:78,h:44,profile:"cliff",rot:0,sq:1},{id:"lagS2",x:-318,z:-1560,r:72,h:32,profile:"cliff",rot:0,sq:1},{id:"spillway",x:-432,z:-1408,r:60,h:2.7,profile:"ridge",rot:Math.PI/2-.45,sq:.22},{id:"coveW",x:-660,z:-1560,r:95,h:28,profile:"cliff",rot:0,sq:1},{id:"coveN",x:-640,z:-1830,r:90,h:24,profile:"cliff",rot:0,sq:1},{id:"finishI",x:-10,z:-2110,r:160,h:14,profile:"sandy",rot:0,sq:1},{id:"far1",x:380,z:-1500,r:220,h:34,profile:"cliff",rot:0,sq:1},{id:"far2",x:300,z:-2180,r:180,h:22,profile:"sandy",rot:0,sq:1},{id:"far3",x:-820,z:-1180,r:200,h:40,profile:"cliff",rot:0,sq:1}],Te={entrance:yt(-135,0,-1205),exit:yt(-205,0,-1270),width:26,floor:-4.5,roof:9.5},ur={pos:yt(-392,0,-1452),topY:34,width:26},Ae=[{pos:yt(0,0,-140),r:18,kind:"gate"},{pos:yt(-30,0,-280),r:18,kind:"gate"},{pos:yt(30,0,-410),r:16,kind:"gate"},{pos:yt(-60,0,-520),r:15,kind:"gate"},{pos:yt(0,0,-615),r:14,kind:"gate"},{pos:yt(70,0,-700),r:14,kind:"gate"},{pos:yt(150,0,-820),r:18,kind:"gate"},{pos:yt(60,0,-905),r:12,kind:"gate"},{pos:yt(0,0,-980),r:12,kind:"gate"},{pos:yt(-75,0,-1050),r:15,kind:"gate"},{pos:yt(-135,0,-1205),r:15,kind:"cave"},{pos:yt(-205,0,-1270),r:17,kind:"cave"},{pos:yt(-415,0,-1395),r:17,kind:"gate"},{pos:yt(-520,0,-1560),r:24,kind:"gate"},{pos:yt(-560,0,-1680),r:16,kind:"gate"},{pos:yt(-460,0,-1800),r:16,kind:"gate"},{pos:yt(-330,0,-1900),r:18,kind:"gate"}],Ue={pos:yt(-150,0,-2e3),r:18},po={docks:[{x:0,z:28,len:42,yaw:0,kind:"start"},{x:-55,z:-2040,len:34,yaw:1.35,kind:"finish"}],wreck:{x:228,z:-818,yaw:.7},flags:[{x:12,z:34},{x:-12,z:38},{x:-48,z:-2028}]},hi={enemyBoats:[{pos:yt(215,0,-838),patrol:[yt(215,0,-838),yt(255,0,-780),yt(180,0,-770)],zone:"combatA"},{pos:yt(268,0,-786),patrol:[yt(268,0,-786),yt(230,0,-752),yt(285,0,-828)],zone:"combatA"},{pos:yt(-478,0,-1588),patrol:[yt(-478,0,-1588),yt(-545,0,-1542),yt(-462,0,-1530)],zone:"duel"},{pos:yt(-562,0,-1546),patrol:[yt(-562,0,-1546),yt(-540,0,-1608),yt(-600,0,-1580)],zone:"duel"}],drones:[{pos:yt(236,0,-876),zone:"combatA"},{pos:yt(-522,0,-1642),zone:"duel"}],mines:[yt(-15,0,-470),yt(25,0,-545),yt(-42,0,-592),yt(8,0,-660),yt(55,0,-608),yt(30,0,-905),yt(-42,0,-975),yt(-100,0,-1160),yt(-575,0,-1630),yt(-390,0,-1930)],pickups:[{kind:"boost",pos:yt(20,0,-300)},{kind:"boost",pos:yt(-45,0,-565)},{kind:"double",pos:yt(95,0,-690)},{kind:"shield",pos:yt(112,0,-768)},{kind:"boost",pos:yt(85,0,-882)},{kind:"boost",pos:yt(-15,0,-952)},{kind:"boost",pos:yt(-55,0,-1035)},{kind:"shield",pos:yt(-95,0,-1112)},{kind:"boost",pos:yt(-262,0,-1312)},{kind:"boost",pos:yt(-362,0,-1385)},{kind:"shield",pos:yt(-472,0,-1502)},{kind:"boost",pos:yt(-505,0,-1612)},{kind:"double",pos:yt(-505,0,-1702)},{kind:"boost",pos:yt(-395,0,-1955)}]},il={combatA:{pos:yt(95,0,-700),yaw:2.71,gate:5,boost:1},cave:{pos:yt(-90,0,-1120),yaw:3.63,gate:9,boost:1},lagoon:{pos:yt(-215,0,-1285),yaw:4.21,gate:11,boost:1},spillway:{pos:yt(-330,0,-1360),yaw:4.32,gate:11,boost:1},duel:{pos:yt(-475,0,-1495),yaw:3.75,gate:12,boost:.5}},mo=1337;function rn(i=mo){let t=i>>>0||1;const e=()=>{t|=0,t=t+1831565813|0;let n=Math.imul(t^t>>>15,1|t);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296};return{seed:i,next:e,range:(n,s)=>n+(s-n)*e(),int:(n,s)=>Math.floor(n+(s-n+1)*e()),pick:n=>n[Math.floor(e()*n.length)],fork(n){return rn((i^2654435769)+Math.imul(n|0,2246822507)>>>0)}}}function Ui(i=mo){const t=new Uint8Array(512),e=rn(i^1374496513),n=new Uint8Array(256);for(let l=0;l<256;l++)n[l]=l;for(let l=255;l>0;l--){const c=Math.floor(e.next()*(l+1)),u=n[l];n[l]=n[c],n[c]=u}for(let l=0;l<512;l++)t[l]=n[l&255];const s=(l,c,u)=>{switch(l&7){case 0:return c+u;case 1:return c-u;case 2:return-c+u;case 3:return-c-u;case 4:return c;case 5:return-c;case 6:return u;default:return-u}},r=l=>l*l*l*(l*(l*6-15)+10),o=(l,c,u)=>l+(c-l)*u;function a(l,c){const u=Math.floor(l)&255,f=Math.floor(c)&255;l-=Math.floor(l),c-=Math.floor(c);const p=r(l),h=r(c),g=t[u]+f,x=t[u+1]+f;return o(o(s(t[g],l,c),s(t[x],l-1,c),p),o(s(t[g+1],l,c-1),s(t[x+1],l-1,c-1),p),h)}return{noise:a,fbm(l,c,u=4,f=2,p=.5){let h=1,g=1,x=0,m=0;for(let d=0;d<u;d++)x+=h*a(l*g,c*g),m+=h,h*=p,g*=f;return x/m}}}const $t=(i,t,e)=>Math.max(t,Math.min(e,i)),On=(i,t,e)=>i+(t-i)*e,qt=(i,t,e)=>{const n=$t((e-i)/(t-i),0,1);return n*n*(3-2*n)},qs=(i,t,e,n)=>On(i,t,1-Math.exp(-e*n)),sn=Math.PI*2;function Ov(i,t){let e=(t-i)%sn;return e>Math.PI&&(e-=sn),e<-Math.PI&&(e+=sn),e}const Sn=oo.terrain,ta=-12.5,Qc=-4.3,Bv=14,th={sandy:{rIn:.25,rOut:1.32,p:1.35},cliff:{rIn:.35,rOut:1.18,p:.8},spire:{rIn:.15,rOut:1.05,p:.55},reef:{rIn:.75,rOut:1.35,p:2.2},ridge:{rIn:.3,rOut:1.25,p:1.1}},gi=hr.map(i=>{const t=th[i.profile]||th.sandy,e=i.r*t.rOut+4;return{...i,pr:t,idx:0,c:Math.cos(i.rot),s:Math.sin(i.rot),r2:i.r*i.r,rq2:i.r*i.r*i.sq*i.sq,minX:i.x-e,maxX:i.x+e,minZ:i.z-e,maxZ:i.z+e}});for(let i=0;i<gi.length;i++)gi[i].idx=i;function yu(i,t,e,n){const s=t-i.x,r=e-i.z,o=s*i.c+r*i.s,a=-s*i.s+r*i.c,l=Math.sqrt(o*o/i.r2+a*a/i.rq2);if(l>=i.pr.rOut)return n.q=l,n.f=0,n;const c=$t((i.pr.rOut-l)/(i.pr.rOut-i.pr.rIn),0,1);return n.q=l,n.f=Math.pow(c*c*(3-2*c),i.pr.p),n}let Rl=null,Su=null,_n=null,bu=null;function kv(i){Rl=Ui(i^3201302529),Su=Ui(i^3550552337),_n=Ui(i^1908473838),bu=Ui(i^3399352327)}const ws=Te.entrance,wu=Te.exit,Eu=wu.x-ws.x,Tu=wu.z-ws.z,Hn=Math.hypot(Eu,Tu),Pl=Eu/Hn,Dl=Tu/Hn,Au=-Dl,Cu=Pl;function Hv(i){return $t(i.r,13,26)+7}const ea=[{x:We.pos.x,z:We.pos.z,hw:20},...Ae.map(i=>({x:i.pos.x,z:i.pos.z,hw:Hv(i)})),{x:Ue.pos.x,z:Ue.pos.z,hw:20}],fs=[];for(let i=0;i<ea.length-1;i++){const t=ea[i],e=ea[i+1];fs.push({ax:t.x,az:t.z,bx:e.x,bz:e.z,hw:Math.min(t.hw,e.hw),dx:e.x-t.x,dz:e.z-t.z,l2:0})}for(const i of fs)i.l2=i.dx*i.dx+i.dz*i.dz;{const i=po.docks[1],t={ax:Ue.pos.x,az:Ue.pos.z,bx:i.x-12,bz:i.z+2,hw:12};t.dx=t.bx-t.ax,t.dz=t.bz-t.az,t.l2=t.dx*t.dx+t.dz*t.dz,fs.push(t)}const eh=[{x:238,z:-800,rIn:10,fIn:8,rOut:104,fOut:12},{x:-520,z:-1575,rIn:0,fOut:14,rOut:102,fIn:1}],nh=hr.find(i=>i.id==="spillway"),ih=Ae.reduce((i,t)=>{const e=(t.pos.x-nh.x)**2+(t.pos.z-nh.z)**2;return!i||e<i.d?{d:e,g:t}:i},null).g,sh=gi.filter(i=>i.profile==="reef"),eo={q:0,f:0};function Gv(i,t){for(let e=0;e<sh.length;e++)if(yu(sh[e],i,t,eo).f>.5)return!0;return!1}const rh=[{ax:-76,az:-2035,bx:-40,bz:-2044,hw:15,floor:-4.2,fade:12}],oh=ur.pos,as={x:oh.x,z:oh.z,rx:30,rz:22,floor:-5,fade:13},ae={x0:-426,x1:-399,z0:-1466,z1:-1438,floor:-5,fade:8};function ah(i,t,e,n,s){const r=i-e.ax,o=t-e.az;let a=(r*e.dx+o*e.dz)/e.l2;a=a<0?0:a>1?1:a;const l=e.ax+e.dx*a,c=e.az+e.dz*a,u=Math.hypot(i-l,t-c);return qt(n+s,n,u)}const Ni={domIdx:-1};function Ll(i,t){let e=ta+Rl.fbm(i*.0042,t*.0042,3)*3.4;Ni.domIdx=-1;for(let o=0;o<gi.length;o++){const a=gi[o];if(i<a.minX||i>a.maxX||t<a.minZ||t>a.maxZ||(yu(a,i,t,eo),eo.f<=0))continue;const l=ta+(a.h-ta)*eo.f;l>e&&(e=l,Ni.domIdx=o)}const n=Ni.domIdx>=0?gi[Ni.domIdx]:null,s=n&&n.profile==="reef"?.22:n&&n.profile==="ridge"?.35:1,r=On(.8,3.2,qt(-6,8,e))*s;return e+=Su.fbm(i*.021,t*.021,4)*r,e}function Il(i,t,e){const n=i-We.pos.x,s=t-We.pos.z,r=Math.hypot(n,s);if(r<104){const u=qt(50,62,r)*qt(100,84,r);if(u>0){const f=8-2.5*qt(58,92,r)+.9*Rl.fbm(i*.028,t*.028,2);e=Math.min(e,On(e,f,u))}}{const u=i-ws.x,f=t-ws.z,p=u*Pl+f*Dl;if(p>-8&&p<Hn+8){const h=u*Au+f*Cu,g=$t(p/Hn,0,1),x=13+6*Math.sin(Math.PI*g),m=qt(x+7,x,Math.abs(h)),d=qt(-8,4,p)*qt(Hn+8,Hn-4,p);if(m>0&&d>0){const M=Te.floor+.4*bu.fbm(i*.09,t*.09,2);e=Math.min(e,On(e,M,m*d))}}}{const u=(i-as.x)/as.rx,f=(t-as.z)/as.rz,p=Math.sqrt(u*u+f*f);if(p<1.6){const h=qt(1+as.fade/24,1,p);h>0&&(e=Math.min(e,On(e,as.floor,h)))}if(i>ae.x0-10&&i<ae.x1+10&&t>ae.z0-10&&t<ae.z1+10){const h=qt(ae.x1+ae.fade,ae.x1-2,i)*qt(ae.x0-ae.fade,ae.x0+2,i),g=qt(ae.z1+ae.fade,ae.z1-2,t)*qt(ae.z0-ae.fade,ae.z0+2,t),x=h*g;x>0&&(e=Math.min(e,On(e,ae.floor,x)))}}for(let u=0;u<rh.length;u++){const f=rh[u],p=ah(i,t,f,f.hw,f.fade);p>0&&(e=Math.min(e,On(e,f.floor,p)))}let o=0;for(let u=0;u<fs.length;u++){const f=ah(i,t,fs[u],fs[u].hw,Bv);f>o&&(o=f)}for(let u=0;u<eh.length;u++){const f=eh[u],p=Math.hypot(i-f.x,t-f.z),h=qt(f.rIn-f.fIn,f.rIn+f.fIn,p)*qt(f.rOut+f.fOut,f.rOut-f.fOut,p);h>o&&(o=h)}if(o>0&&!Gv(i,t)){const u=Math.hypot(i-ih.pos.x,t-ih.pos.z),f=u<64?On(3,Qc,qt(30,60,u)):Qc;e=Math.min(e,On(e,f,o))}const a=Math.min(i-Sn.minX,Sn.maxX-i),l=Math.min(t-Sn.minZ,Sn.maxZ-t),c=Math.min(a,l);return c<46&&(e=On(-26,e,qt(0,46,c))),e}function Gn(i,t){return Il(i,t,Ll(i,t))}function Ul(i,t){const e=Ll(i,t);return{h:Il(i,t,e),dom:Ni.domIdx>=0?gi[Ni.domIdx]:null}}function Vv(i,t,e=new U){const s=Gn(i-.65,t),r=Gn(i+.65,t),o=Gn(i,t-.65),a=Gn(i,t+.65);return e.set(s-r,2*.65,o-a).normalize()}const Ye=i=>new Dt(i),Fe={abyss:Ye("#0d2f42"),seabed:Ye("#184457"),sand:Ye("#ecd9a8"),sandWet:Ye("#c9b184"),rock:Ye("#a39083"),rockLo:Ye("#7d6a5e"),rockHi:Ye("#c2af98"),rockWet:Ye("#5d4f46"),caveRock:Ye("#3e352d"),caveRockHi:Ye("#5a4c42"),caveCyan:Ye("#16323a"),grass:Ye("#2f9e4f"),grassDark:Ye("#1e7a3e"),grassDry:Ye("#8fae52"),coral:Ye("#ef476f"),cyan:Ye("#06d6c2")};function Wv(i,t){let e=0;const n=i-ws.x,s=t-ws.z,r=n*Pl+s*Dl;if(r>-66&&r<Hn+12){const o=n*Au+s*Cu,a=$t(r/Hn,0,1),l=13+6*Math.sin(Math.PI*a);e=qt(l+17,l+4,Math.abs(o))*qt(-64,-38,r)*qt(Hn+10,Hn-8,r)}if(i>ae.x0-18&&i<ae.x1+18&&t>ae.z0-18&&t<ae.z1+18){const o=qt(ae.x1+15,ae.x1+5,i)*qt(ae.x0-15,ae.x0-5,i),a=qt(ae.z1+15,ae.z1+5,t)*qt(ae.z0-15,ae.z0-5,t);e=Math.max(e,o*a)}return e}function Xv(i){const[t,e]=i.terrainRes,n=Sn.maxX-Sn.minX,s=Sn.maxZ-Sn.minZ,r=(Sn.minX+Sn.maxX)/2,o=(Sn.minZ+Sn.maxZ)/2,a=new Ve(n,s,t-1,e-1);a.rotateX(-Math.PI/2);const l=a.attributes.position,c=l.count,u=new Uint8Array(c);for(let M=0;M<c;M++){const _=l.getX(M)+r,v=l.getZ(M)+o,w=Ll(_,v);u[M]=Ni.domIdx+1,l.setY(M,Il(_,v,w))}a.computeVertexNormals();const f=a.attributes.normal,p=new Dt,h=new Dt,g=new Dt,x=new Float32Array(c*3);for(let M=0;M<c;M++){const _=l.getX(M)+r,v=l.getZ(M)+o,w=l.getY(M),b=f.getY(M),T=u[M]>0?gi[u[M]-1]:null;h.copy(Fe.abyss).lerp(Fe.seabed,qt(-14,-8,w)),h.lerp(Fe.sand,qt(-7.5,-1.2,w));const P=1-$t(Math.abs(w-.12)/.75,0,1);h.lerp(Fe.sandWet,P*.85);const y=1-b,S=qt(.22,.58,y),C=T&&(T.profile==="cliff"||T.profile==="spire"||T.profile==="ridge")?$t(.34+S*.62,0,.95):S*.82;_n.fbm(_*.026,v*.026,2)*3.1,T&&T.profile==="ridge"&&w>.4&&g.lerp(Fe.rockHi,.3);const F=_n.fbm(_*.17+13,v*.17-8,2);g.lerp(F>0?Fe.rockHi:Fe.rockLo,Math.min(.44,Math.abs(F)*.68));const O=T&&T.profile==="ridge"?.18:.7;g.lerp(Fe.rockWet,qt(1.1,-.3,w)*O);const q=_n.fbm(_*.013+7,v*.013-3,2)+.16*_n.fbm(_*.045-31,v*.045+12,1),B=(1-C)*qt(.2,.42,q)*qt(.46,.7,b)*qt(.8,2.2,w),Q=_n.fbm(_*.035+55,v*.035-19,2)*.5+.5,L=Fe.grassDark.clone().lerp(Fe.grass,_n.fbm(_*.06,v*.06,1)*.5+.5);L.lerp(Fe.grassDry,Q*.45),g.lerp(L,$t(B*1.45,0,1));const G=_n.fbm(_*.06-20,v*.06+9,2);if(G>.3&&g.lerp(Fe.rockLo,Math.min(.85,(G-.3)*2.4)*$t(B,0,1)),h.lerp(g,qt(.3,1.3,w)),T&&T.profile==="reef"&&w>-3.6){const tt=_n.fbm(_*.11,v*.11,2);h.lerp(tt>.14?Fe.coral:Fe.cyan,qt(.14,.4,Math.abs(tt))*.55)}const X=Wv(_,v);if(X>0){const tt=_n.fbm(_*.09,v*.09,2)*.5+.5;p.copy(Fe.caveRock).lerp(Fe.caveRockHi,tt);const ut=_n.fbm(_*.24,v*.24,2);p.lerp(ut>0?Fe.caveRockHi:Fe.caveRock,Math.min(.4,Math.abs(ut)*.6)),_n.fbm(_*.08+41,v*.08,2)>.25&&p.lerp(Fe.caveCyan,.4),h.lerp(p,X*.97)}x[M*3]=h.r,x[M*3+1]=h.g,x[M*3+2]=h.b}a.setAttribute("color",new ce(x,3));const m=new be({vertexColors:!0,roughness:.96,metalness:0}),d=new St(a,m);return d.position.set(r,0,o),d.updateMatrix(),d.matrixAutoUpdate=!1,d.receiveShadow=!0,{mesh:d}}const Ce={cx:-200,cz:-1025,hx:1050,hz:1675},Es=170,qv=[{dir:[.86,-.5],len:64,amp:.32,phase:0},{dir:[.94,.34],len:34,amp:.3,phase:1.7},{dir:[.43,.9],len:21,amp:.2,phase:3.1}],Yv=[{dir:[-.6,.8],len:11.5,amp:.11,phase:.6},{dir:[.9,-.44],len:7,amp:.07,phase:2.4},{dir:[.2,.98],len:4.6,amp:.045,phase:4.2},{dir:[.75,.66],len:8,amp:.12,phase:5.1},{dir:[-.45,-.89],len:6.2,amp:.08,phase:.9}],Zv=9.81;function Ru(i){return i.map(t=>{const e=Math.hypot(t.dir[0],t.dir[1]),n=Math.PI*2/t.len;return{...t,k:n,dx:t.dir[0]/e,dz:t.dir[1]/e,omega:Math.sqrt(Zv*n)}})}const ao=Ru(qv),$v=Ru(Yv),lh=(i,t,e)=>{const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)};function Kv(i,t){const e=lh(0,Es,Ce.hx-Math.abs(i-Ce.cx)),n=lh(0,Es,Ce.hz-Math.abs(t-Ce.cz));return e*n}function Li(i,t,e=0){const n=Kv(i,t);if(n<=0)return 0;let s=0;for(let r=0;r<ao.length;r++){const o=ao[r];s+=o.amp*Math.sin((o.dx*i+o.dz*t)*o.k+o.omega*e+o.phase)}return s*n}const fe=i=>{const t=i.toFixed(6);return t.includes(".")?t:t+".0"};function Jv(){const i=ao.map(t=>`h += ${fe(t.amp)} * sin((${fe(t.dx)} * p.x + ${fe(t.dz)} * p.y) * ${fe(t.k)} + ${fe(t.omega)} * t + ${fe(t.phase)});`).join(`
  `);return`
float oceanFade(vec2 p) {
  float fx = smoothstep(0.0, ${fe(Es)}, ${fe(Ce.hx)} - abs(p.x - ${fe(Ce.cx)}));
  float fz = smoothstep(0.0, ${fe(Es)}, ${fe(Ce.hz)} - abs(p.y - ${fe(Ce.cz)}));
  return fx * fz;
}
float waveH(vec2 p, float t) {
  float fade = oceanFade(p);
  if (fade <= 0.0) return 0.0;
  float h = 0.0;
  ${i}
  return h * fade;
}`}function jv(){const i=t=>t.map(e=>`ph = (${fe(e.dx)} * p.x + ${fe(e.dz)} * p.y) * ${fe(e.k)} + ${fe(e.omega)} * t + ${fe(e.phase)};
  c = ${fe(e.amp)} * ${fe(e.k)} * cos(ph);
  gx += c * ${fe(e.dx)}; gz += c * ${fe(e.dz)};`).join(`
  `);return`
float oceanFade(vec2 p) {
  float fx = smoothstep(0.0, ${fe(Es)}, ${fe(Ce.hx)} - abs(p.x - ${fe(Ce.cx)}));
  float fz = smoothstep(0.0, ${fe(Es)}, ${fe(Ce.hz)} - abs(p.y - ${fe(Ce.cz)}));
  return fx * fz;
}
vec3 waveNormal(vec2 p, float t) {
  float fade = oceanFade(p);
  float gx = 0.0; float gz = 0.0; float ph; float c;
  ${i(ao)}
  ${i($v)}
  return normalize(vec3(-gx * fade, 1.0, -gz * fade));
}`}function Pu(i,t,{srgb:e=!0}={}){const n=document.createElement("canvas");n.width=n.height=i;const s=n.getContext("2d"),r=s.createImageData(i,i);t(r.data,i),s.putImageData(r,0,0);const o=new _l(n);return o.wrapS=o.wrapT=no,o.minFilter=di,o.magFilter=wn,e&&(o.colorSpace=Ge),o.needsUpdate=!0,o}function Nl(i,t=256,e=4,n=1){const s=Ui(i^8299549),r=256;return Pu(t,(o,a)=>{for(let l=0;l<a;l++)for(let c=0;c<a;c++){const u=c/a*r,f=l/a*r;let p=s.fbm(u,f,e)*.5+.5;p=Math.min(1,Math.max(0,(p-.5)*n+.5));const h=p*255|0,g=(l*a+c)*4;o[g]=o[g+1]=o[g+2]=h,o[g+3]=255}})}function Qv(i,t=128){const e=Ui(i^4172225),n=256;return Pu(t,(s,r)=>{const o=(r-1)*.5;for(let a=0;a<r;a++)for(let l=0;l<r;l++){const c=l/r*n,u=a/r*n,f=e.fbm(c,u,4)*.5+.5,p=(l-o)/o,h=(a-o)/o,g=Math.sqrt(p*p+h*h),x=Math.max(0,1-g*g);let m=Math.max(0,f*1.5-.26)*x*x;m=Math.min(1,m*2.3);const d=(a*r+l)*4;s[d]=245,s[d+1]=252,s[d+2]=255,s[d+3]=m*255|0}})}function t_(i=64){const t=document.createElement("canvas");t.width=t.height=i;const e=t.getContext("2d"),n=e.createRadialGradient(i/2,i/2,0,i/2,i/2,i/2);n.addColorStop(0,"rgba(255,255,255,0.9)"),n.addColorStop(.4,"rgba(240,250,255,0.45)"),n.addColorStop(1,"rgba(240,250,255,0)"),e.fillStyle=n,e.fillRect(0,0,i,i);const s=new _l(t);return s.colorSpace=Ge,s}function e_(i=128,t=8){const e=document.createElement("canvas");e.width=e.height=i;const n=e.getContext("2d"),s=i/t;for(let o=0;o<t;o++)for(let a=0;a<t;a++)n.fillStyle=(a+o)%2?"#101418":"#f4f7f9",n.fillRect(a*s,o*s,s,s);n.strokeStyle="#ef476f",n.lineWidth=i/16,n.strokeRect(0,0,i,i);const r=new _l(e);return r.colorSpace=Ge,r}const qr=new U(.48,.46,-.74).normalize(),ds={color:"#d8edf0",near:1e3,far:5200},tr={horizon:"#e2f4ef",zenith:"#1d6fc0",sun:"#fff3d6"},ls=i=>new Dt(i);function n_(i,t,e){const n=new ne;i.fog=new ml(new Dt(ds.color),ds.near,ds.far);const s=Nl(e^49421,256,5,1.4),r=new Se({side:en,depthWrite:!1,depthTest:!1,fog:!1,uniforms:{uTime:{value:0},uClouds:{value:s},uSunDir:{value:qr.clone()},uHorizon:{value:ls(tr.horizon)},uZenith:{value:ls(tr.zenith)},uSunCol:{value:ls(tr.sun)},uWarm:{value:ls("#ffe3b8")},uCloudCol:{value:ls("#ffffff")},uCloudShade:{value:ls("#8fb3c9")}},vertexShader:`
      varying vec3 vDir;
      void main() {
        vDir = position;
        // dome is centred on the camera's xz; keep it at a fixed world radius
        vec4 wp = modelMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * viewMatrix * wp;
      }
    `,fragmentShader:`
      uniform sampler2D uClouds;
      uniform float uTime;
      uniform vec3 uSunDir, uHorizon, uZenith, uSunCol, uWarm, uCloudCol, uCloudShade;
      varying vec3 vDir;
      void main() {
        vec3 d = normalize(vDir);
        float h = clamp(d.y, -0.08, 1.0);
        vec3 col = mix(uHorizon, uZenith, pow(clamp(h, 0.0, 1.0), 0.85));
        // warm band hugging the horizon, strongest toward the sun
        float sunSide = 0.5 + 0.5 * clamp(dot(normalize(vec3(d.x, 0.0, d.z)), normalize(vec3(uSunDir.x, 0.0, uSunDir.z))), -1.0, 1.0);
        col = mix(col, uWarm, (1.0 - smoothstep(0.0, 0.22, h)) * (0.24 + 0.34 * sunSide));

        // procedural clouds: two parallax fbm layers projected on a dome plane
        if (d.y > 0.015) {
          vec2 p = d.xz / (d.y + 0.22);
          float c1 = texture2D(uClouds, p * 0.42 + vec2(uTime * 0.004, uTime * 0.0016)).r;
          float c2 = texture2D(uClouds, p * 0.9 - vec2(uTime * 0.006, uTime * 0.002)).r;
          float dens = smoothstep(0.48, 0.74, c1 * 0.68 + c2 * 0.32);
          dens *= smoothstep(0.015, 0.16, d.y);           // thin out at horizon
          float lit = 0.45 + 0.55 * clamp(dot(normalize(vec3(d.x, 0.35, d.z)), uSunDir), 0.0, 1.0);
          float base = smoothstep(0.3, 0.75, c2);         // cloud underside shading
          vec3 cc = mix(uCloudShade, uCloudCol, clamp(lit * 0.7 + base * 0.45, 0.0, 1.0));
          col = mix(col, cc, dens * 0.9);
        }

        // sun disc + warm glow
        float sd = dot(d, normalize(uSunDir));
        col += uSunCol * smoothstep(0.99900, 0.99960, sd) * 5.0;
        col += uSunCol * pow(max(sd, 0.0), 600.0) * 1.1;
        col += uWarm * pow(max(sd, 0.0), 40.0) * 0.10;

        gl_FragColor = vec4(col, 1.0);
      }
    `}),o=new St(new Le(6900,40,24),r);o.renderOrder=-1e3,o.frustumCulled=!1,n.add(o);const a=new Xd(16774102,2.9);a.castShadow=!!t.shadows,a.shadow.mapSize.set(t.shadowSize,t.shadowSize);const l=250;a.shadow.camera.left=-l,a.shadow.camera.right=l,a.shadow.camera.top=l,a.shadow.camera.bottom=-l,a.shadow.camera.near=40,a.shadow.camera.far=1400,a.shadow.bias=-6e-4,a.shadow.normalBias=1.5,n.add(a),n.add(a.target);const c=new Gd(12577279,1327694,.78);n.add(c);const u=new U;function f(p,h,g){r.uniforms.uTime.value=h,o.position.set(g.position.x,0,g.position.z),u.set(Math.round(g.position.x/8)*8,0,Math.round(g.position.z/8)*8),a.position.set(u.x+qr.x*620,qr.y*620,u.z+qr.z*620),a.target.position.set(u.x,0,u.z)}return{group:n,update:f,sun:a,dome:o}}const i_=[320,588],bn=oo.terrain;function s_(i){const[t,e]=i_,n=new Float32Array(t*e),s=bn.maxX-bn.minX,r=bn.maxZ-bn.minZ;for(let a=0;a<e;a++){const l=bn.minZ+(a+.5)/e*r;for(let c=0;c<t;c++)n[a*t+c]=Gn(bn.minX+(c+.5)/t*s,l)}const o=new gl(n,t,e,ho,In);return o.magFilter=o.minFilter=wn,i&&!i.extensions.get("OES_texture_float_linear")&&(o.magFilter=o.minFilter=$e),o.wrapS=o.wrapT=fi,o.needsUpdate=!0,o}const Ai=i=>new Dt(i);function r_(i,t,e){return new Se({transparent:!0,depthWrite:!0,uniforms:{uTime:{value:0},uDepth:{value:t},uNoise:{value:e},uTerr:{value:new le(bn.minX,bn.minZ,1/(bn.maxX-bn.minX),1/(bn.maxZ-bn.minZ))},uCam:{value:new U},uHorizon:{value:Ai(tr.horizon)},uZenith:{value:Ai(tr.zenith)},uFogCol:{value:Ai(ds.color)},uFogNear:{value:ds.near},uFogFar:{value:ds.far},uShallow:{value:Ai("#5ff2df")},uMid:{value:Ai("#0fc4c9")},uDeep:{value:Ai("#075a8f")},uAbyss:{value:Ai("#05335e")},uCaveA:{value:new U(Te.entrance.x,0,Te.entrance.z)},uCaveB:{value:new U(Te.exit.x,0,Te.exit.z)}},vertexShader:`
      uniform float uTime;
      varying vec3 vW;
      varying float vH;
      ${Jv()}
      void main() {
        vec3 wp = (modelMatrix * vec4(position, 1.0)).xyz;
        float h = waveH(wp.xz, uTime);
        vW = vec3(wp.x, h, wp.z);
        vH = h;
        gl_Position = projectionMatrix * viewMatrix * vec4(vW, 1.0);
      }
    `,fragmentShader:`
      uniform sampler2D uDepth;
      uniform sampler2D uNoise;
      uniform float uTime;
      uniform vec4 uTerr;
      uniform vec3 uCam;
      uniform vec3 uSunDir, uSunCol, uHorizon, uZenith, uFogCol;
      uniform float uFogNear, uFogFar;
      uniform vec3 uShallow, uMid, uDeep, uAbyss;
      uniform vec3 uCaveA, uCaveB;
      varying vec3 vW;
      varying float vH;
      ${jv()}

      float groundH(vec2 p) {
        vec2 uv = vec2((p.x - uTerr.x) * uTerr.z, (p.y - uTerr.y) * uTerr.w);
        float inr = step(0.0, uv.x) * step(uv.x, 1.0) * step(0.0, uv.y) * step(uv.y, 1.0);
        vec2 cuv = clamp(uv, 0.004, 0.996);
        return mix(-13.0, texture2D(uDepth, cuv).r, inr);
      }

      void main() {
        vec3 N = waveNormal(vW.xz, uTime);
        vec2 micro = texture2D(uNoise, vW.xz * 0.11 + uTime * 0.025).rg - 0.5;
        N = normalize(N + vec3(micro.x, 0.0, micro.y) * 0.22);
        vec3 V = normalize(uCam - vW);

        float g = groundH(vW.xz);
        float depth = max(-g, 0.0);

        // saturated depth colour ramp — turquoise shelf, rich blue abyss
        vec3 col = mix(uShallow, uMid, smoothstep(1.1, 6.0, depth));
        col = mix(col, uDeep, smoothstep(5.0, 12.0, depth));
        col = mix(col, uAbyss, smoothstep(11.0, 22.0, depth));
        col *= 0.9 + 0.18 * smoothstep(0.05, 0.8, vH);
        float lum = dot(col, vec3(0.299, 0.587, 0.114));
        col = mix(vec3(lum), col, 1.24);                  // saturation punch

        // fresnel sky reflection — only near grazing angles, never dominant
        vec3 R = reflect(-V, N);
        vec3 sky = mix(uHorizon * 0.85, uZenith, clamp(R.y, 0.0, 1.0) * 0.9);
        float fres = 0.03 + 0.5 * pow(1.0 - max(dot(N, V), 0.0), 7.0);
        col = mix(col, sky, clamp(fres, 0.0, 0.5));

        // sun glint — tight sparkle only
        float sd = max(dot(R, uSunDir), 0.0);
        col += uSunCol * (pow(sd, 900.0) * 1.5 + pow(sd, 130.0) * 0.05);

        // dark interior through the sea cave — applied AFTER reflections so the
        // tunnel water stays ink-dark instead of picking up sky/fresnel
        vec2 ab = uCaveB.xz - uCaveA.xz;
        float L = length(ab);
        float tt = clamp(dot(vW.xz - uCaveA.xz, ab) / (L * L) * L, -0.35 * L, 1.35 * L);
        float cd = distance(vW.xz, uCaveA.xz + ab / L * tt);
        float along = clamp(tt / L, -0.35, 1.35);
        float cave = smoothstep(30.0, 15.0, cd) * smoothstep(-0.5, -0.04, along) * smoothstep(1.28, 0.92, along);
        col = mix(col, col * 0.16 + vec3(0.004, 0.014, 0.022), cave);

        // foam: narrow shore band with noisy edge, edge lace, crest sparkle
        float fn1 = texture2D(uNoise, vW.xz * 0.055 + uTime * 0.014).r;
        float fn2 = texture2D(uNoise, vW.xz * 0.16 - uTime * 0.021).r;
        float shoreBand = smoothstep(1.5, 0.2, depth);
        float shore = shoreBand * smoothstep(0.6, 0.85, fn1 * 0.7 + fn2 * 0.3 + 0.16 * sin(depth * 7.0 - uTime * 2.0));
        float edge = smoothstep(0.5, 0.1, depth) * smoothstep(0.38, 0.72, fn2);
        float crest = smoothstep(0.5, 0.78, vH) * smoothstep(0.58, 0.82, fn2);
        float foam = clamp(shore + edge + crest * 0.35, 0.0, 1.0) * (1.0 - cave * 0.85);
        col = mix(col, vec3(0.95, 0.99, 1.0), foam * 0.9);

        float alpha = mix(0.62, 0.95, smoothstep(0.0, 2.5, depth));
        alpha = max(alpha, foam * 0.95);
        alpha = mix(alpha, 1.0, cave * 0.8);

        float fogF = smoothstep(uFogNear, uFogFar, distance(uCam, vW)) * (1.0 - cave);
        col = mix(col, uFogCol, fogF);
        gl_FragColor = vec4(col, alpha);
      }
    `})}function o_(i,t,e){const n=Math.max(160,Math.round(1300*t.particles)),s=new xe,r=new Float32Array(n*4*3),o=new Float32Array(n*3),a=new Float32Array(n*2),l=new Float32Array(n*3),c=new Uint32Array(n*6);for(let _=0;_<n;_++){const v=_*4;r.set([-.5,0,-.5,.5,0,-.5,.5,0,.5,-.5,0,.5],v*3);const w=_*6;c[w]=v,c[w+1]=v+1,c[w+2]=v+2,c[w+3]=v,c[w+4]=v+2,c[w+5]=v+3,l[_*3]=-1e3}s.setAttribute("position",new ce(r,3)),s.setAttribute("aCenter",new ce(o,3)),s.setAttribute("aDir",new ce(a,2)),s.setAttribute("aParams",new ce(l,3)),s.setIndex(new ce(c,1));const u=new Se({transparent:!0,depthWrite:!1,depthTest:!1,uniforms:{uTime:{value:0},uMap:{value:e}},vertexShader:`
      attribute vec3 aCenter;
      attribute vec2 aDir;
      attribute vec3 aParams; // birth, strength, size
      uniform float uTime;
      varying vec2 vUv;
      varying float vA;
      void main() {
        float age = uTime - aParams.x;
        float life = 8.0;
        float t = clamp(age / life, 0.0, 1.0);
        float grow = 1.0 + age * 0.22;
        vec2 perp = vec2(-aDir.y, aDir.x);
        vec2 off = (position.x * aDir + position.z * perp) * aParams.z * grow;
        vec3 wp = vec3(aCenter.x + off.x, aCenter.y + 0.12, aCenter.z + off.y);
        vUv = position.xz + 0.5;
        vA = aParams.y * pow(1.0 - t, 1.05) * step(age, life) * step(0.0, age);
        gl_Position = projectionMatrix * viewMatrix * vec4(wp, 1.0);
      }
    `,fragmentShader:`
      uniform sampler2D uMap;
      varying vec2 vUv;
      varying float vA;
      void main() {
        vec4 t = texture2D(uMap, vUv);
        float a = clamp(t.a * vA * 1.9, 0.0, 1.0);
        if (a < 0.012) discard;
        gl_FragColor = vec4(vec3(1.0, 1.0, 1.0), a);
      }
    `}),f=new St(s,u);f.frustumCulled=!1,f.renderOrder=4;const p={head:0,time:0,aCenter:s.attributes.aCenter,aDir:s.attributes.aDir,aParams:s.attributes.aParams,aPos:s.attributes.position},h=[],g=new U,x=new U;function m(_,v,w,b,T,P){const y=p.head%n;p.head++,o[y*3]=_,o[y*3+1]=0,o[y*3+2]=v,a[y*2]=w,a[y*2+1]=b,l[y*3]=p.time,l[y*3+1]=T,l[y*3+2]=P}function d(_,v){p.time=v,u.uniforms.uTime.value=v;for(let b=0;b<h.length;b++){const T=h[b],P=T.src;let y,S,D,C,F;if(P.object3D)y=P.object3D.position.x,P.object3D.position.y,S=P.object3D.position.z,P.object3D.getWorldDirection(x),D=x.x,C=x.z;else{const B=P.getPos?P.getPos(g):g.set(y=0,0,0);if(y=B.x,B.y,S=B.z,P.getDir){const Q=P.getDir(x);D=Q.x,C=Q.z}else D=0,C=-1}const O=Math.hypot(D,C)||1;D/=O,C/=O,F=P.getSpeed?P.getSpeed():0;const q=Math.hypot(y-T.lx,S-T.lz);if(T.travel+=q,F>1.5&&T.travel>1){T.travel=0;const B=(P.width||3)*.5,Q=Math.min(1,F/14)*(P.strength??1)*(F>15?1.35:1),L=-C,G=D,X=B*3.2+F*.32;m(y-D*B*.4+L*B*1.15,S-C*B*.4+G*B*1.15,D-L*.35,C-G*.35,Q,X),m(y-D*B*.4-L*B*1.15,S-C*B*.4-G*B*1.15,D+L*.35,C+G*.35,Q,X),F>4&&m(y-D*B*1.2,S-C*B*1.2,D,C,Q*.9,B*2.4+F*.12),F>10&&m(y-D*B*2.4,S-C*B*2.4,D,C,Q*.7,B*3+F*.18)}}let w=!1;for(let b=0;b<n;b++){const T=v-l[b*3];if(T>=0&&T<8.3){const P=o[b*3],y=o[b*3+2],S=a[b*2],D=a[b*2+1],C=-D,F=S,O=l[b*3+2]*(1+T*.22)*.5;let q=Li(P,y,v);q=Math.min(q,Li(P+(S+C)*O,y+(D+F)*O,v)),q=Math.min(q,Li(P-(S+C)*O,y-(D+F)*O,v)),q=Math.min(q,Li(P+(S-C)*O,y+(D-F)*O,v)),q=Math.min(q,Li(P-(S-C)*O,y-(D-F)*O,v)),o[b*3+1]=q,w=!0}}(w||p.head>0)&&(p.aCenter.needsUpdate=!0,p.aDir.needsUpdate=!0,p.aParams.needsUpdate=!0)}function M(_){const v={src:_,lx:1e9,lz:1e9,travel:0};return h.push(v),{release(){const w=h.indexOf(v);w>=0&&h.splice(w,1)}}}return{mesh:f,updateWakes:d,register:M}}function a_(){const[i,t]=oo.ocean.center,e=oo.ocean.size/2,n=new lu;n.moveTo(i-e,-(t-e)),n.lineTo(i+e,-(t-e)),n.lineTo(i+e,-(t+e)),n.lineTo(i-e,-(t+e)),n.closePath();const s=Ce.hx,r=new Qa;r.moveTo(Ce.cx-s,2700),r.lineTo(Ce.cx-s,-650),r.lineTo(Ce.cx+s,-650),r.lineTo(Ce.cx+s,2700),r.closePath(),n.holes.push(r);const o=new wl(n,1);return o.rotateX(-Math.PI/2),o}function l_(i,t,e){const n=new ne,s=s_(t),r=Nl(e^387601,256,4,1.25),o=Qv(e^61607),a=r_(e,s,r),l=i.oceanSeg,c=Math.round(l*(Ce.hz*2)/(Ce.hx*2)),u=new Ve(Ce.hx*2,Ce.hz*2,l,c);u.rotateX(-Math.PI/2);const f=new St(u,a);f.position.set(Ce.cx,0,Ce.cz),f.frustumCulled=!1,f.renderOrder=2,n.add(f);const p=new St(a_(),a);p.frustumCulled=!1,p.renderOrder=1,n.add(p);const h=o_(e,i,o);return n.add(h.mesh),{group:n,waterHeightAt:Li,registerWakeSource:h.register,update(g,x,m){a.uniforms.uTime.value=x,a.uniforms.uCam.value.copy(m.position),h.updateWakes(g,x)}}}const He=Te.entrance,Du=Te.exit,xn=Du.x-He.x,Mn=Du.z-He.z,Fl=Math.hypot(xn,Mn),Lu=xn/Fl,Iu=Mn/Fl,Ys=-Iu,Zs=Lu,ks=Ui(3399356980);function c_(i,t){const e=i-He.x,n=t-He.z,s=e*Lu+n*Iu,r=e*Ys+n*Zs,o=$t(s/Fl,-.45,1.45),a=13+6*Math.sin(Math.PI*$t(o,0,1)),l=qt(a+8,a-3,Math.abs(r)),c=qt(-.28,.06,o)*qt(1.28,.94,o);return $t(l*c,0,1)}function ch(i){return 13+6*Math.sin(Math.PI*$t(i,0,1))}function h_(i,t){const e=new ne,n=rn(t^3397279469),s=34,r=16,o=Te.roof+3.5,a=-.55,l=1.15,c=[],u=[],f=[],p=new Dt("#4a4038"),h=new Dt("#443a30"),g=new Dt("#6a5b4c"),x=new Dt("#233c42"),m=new Dt("#16323a"),d=new Dt;function M(R){return R<0?9+(o-9)*qt(a,0,R):R>1?o-2.5*qt(1,l,R):o}function _(R){return R<0?18.5+7.5*(1-qt(a,0,R)):R>1?18.5+2.5*qt(1,l,R):(Te.width*.5+5.5)*(1+.14*Math.sin(Math.PI*R))}for(let R=0;R<=s;R++){const Y=a+(l-a)*(R/s),ct=M(Y),it=_(Y),Et=Math.sin($t(Y,0,1)*Math.PI)*3.2*Math.sin(t%7+.9),Jt=He.x+xn*Y+Ys*Et,N=He.z+Mn*Y+Zs*Et;for(let Nt=0;Nt<=r;Nt++){const At=Math.PI*(Nt/r),_t=-6.2+Math.sin(At)*(ct+6.2),ft=-Math.cos(At)*it,Zt=1+.1*ks.noise(R*.55,Nt*.8),Mt=1+.1*ks.noise(Nt*1.1+31.7,R*.62),zt=Jt+Ys*ft*Zt,jt=N+Zs*ft*Zt,re=_t*Mt;c.push(zt,re,jt);const I=.5+.5*Math.sin(_t*.5+ks.noise(zt*.05,jt*.05)*2.2);d.copy(p).lerp(I>.5?g:h,Math.abs(I-.5)*1.5);const E=ks.noise(zt*.22,jt*.22+_t*.3);d.lerp(E>0?g:h,Math.min(.35,Math.abs(E)*.55));const W=ks.noise(zt*.09+77,jt*.09);W>.25&&d.lerp(m,(W-.25)*.8),_t<.2&&d.lerp(x,qt(.2,-4,_t)*.7),u.push(d.r,d.g,d.b)}}for(let R=0;R<s;R++)for(let Y=0;Y<r;Y++){const ct=R*(r+1)+Y,it=ct+r+1;f.push(ct,it,ct+1,it,it+1,ct+1)}const v=new xe;v.setAttribute("position",new Vt(c,3)),v.setAttribute("color",new Vt(u,3)),v.setIndex(f),v.computeVertexNormals();const w=new St(v,new be({vertexColors:!0,roughness:1,metalness:0,side:ni,flatShading:!0}));w.receiveShadow=!0,e.add(w);const b=new bl(1,0);b.scale(.5,1.7,.5);const T=new be({color:736580,emissive:new Dt("#19f2dc"),emissiveIntensity:2.3,roughness:.25,metalness:.1,flatShading:!0}),P=16,y=[3,6],S=[];for(let R=0;R<P;R++){const Y=n.range(.06,.94),ct=n.next()<.5?-1:1,it=ch(Y),Et=He.x+xn*Y,Jt=He.z+Mn*Y,N=ct*n.range(it*.6,it*.95),Nt=Et+Ys*N,At=Jt+Zs*N,_t=n.range(.3,4.2),ft=y[0]+Math.floor(n.next()*(y[1]-y[0]+1));for(let Zt=0;Zt<ft;Zt++)S.push({x:Nt+n.range(-1.6,1.6),y:_t+n.range(-.4,.9),z:At+n.range(-1.6,1.6),tilt:n.range(-.45,.45)-ct*.3,spin:n.range(0,6.28),roll:n.range(-.45,.45),s:n.range(.5,1.35)})}const D=new Fn(b,T,S.length),C=new _e;S.forEach((R,Y)=>{C.position.set(R.x,R.y,R.z),C.rotation.set(R.tilt,R.spin,R.roll),C.scale.set(R.s*n.range(.6,1),R.s*n.range(1.3,3.2),R.s*n.range(.6,1)),C.updateMatrix(),D.setMatrixAt(Y,C.matrix)}),e.add(D);const F=34,O=new Fn(new nn(.5,3.4,5,1),new be({color:5391932,emissive:2103314,emissiveIntensity:1,roughness:1,flatShading:!0}),F);for(let R=0;R<F;R++){const Y=n.range(.05,.95),ct=ch(Y),it=He.x+xn*Y,Et=He.z+Mn*Y,N=(n.next()<.5?-1:1)*n.range(ct*.45,ct*.72);C.position.set(it+Ys*N,n.range(5.5,Te.roof+2.2),Et+Zs*N),C.rotation.set(n.range(-.16,.16),n.range(0,6.28),n.range(-.16,.16));const Nt=n.range(.4,1.6);C.scale.set(Nt,Nt*n.range(1,2.2),Nt),C.updateMatrix(),O.setMatrixAt(R,C.matrix)}e.add(O);const q=new U(0,0,1).applyEuler(new pn(.3,Math.atan2(xn,-Mn),0)),B=new U(xn,0,Mn).normalize(),Q=new Se({transparent:!0,depthWrite:!1,side:ye,blending:Ne,uniforms:{uTime:{value:0},uN:{value:q},uAxis:{value:B},uExit:{value:new U(He.x+xn,0,He.z+Mn)}},vertexShader:`varying vec2 vUv; varying vec3 vWp;
      void main() { vUv = uv; vec4 wp = modelMatrix * vec4(position, 1.0); vWp = wp.xyz; gl_Position = projectionMatrix * viewMatrix * wp; }`,fragmentShader:`
      uniform float uTime; uniform vec3 uN; uniform vec3 uAxis; uniform vec3 uExit;
      varying vec2 vUv; varying vec3 vWp;
      void main() {
        float edge = smoothstep(0.0, 0.42, vUv.x) * smoothstep(1.0, 0.58, vUv.x);
        float top = pow(vUv.y, 1.15);
        float flicker = 0.9 + 0.1 * sin(uTime * 1.4 + vUv.x * 3.0);
        // seen end-on / face-on from OUTSIDE the cave the beam reads as a
        // floating glow-ball: fade it there, keep the in-tunnel burst view
        vec3 vd = normalize(cameraPosition - vWp);
        float outside = smoothstep(2.0, 14.0, dot(cameraPosition - uExit, uAxis));
        float faceOn = abs(dot(vd, uN));
        float fade = 1.0 - outside * smoothstep(0.45, 0.85, faceOn);
        float a = clamp(edge * top * 0.45 * flicker * fade, 0.0, 1.0);
        gl_FragColor = vec4(vec3(1.0, 0.93, 0.78), a);
      }
    `}),L=new ne,G=.9,X=He.x+xn*G,tt=He.z+Mn*G,ut=Math.atan2(xn,-Mn),J=new St(new Ve(22,22),Q);J.position.set(X,5.4,tt),J.rotation.set(.3,ut,0),J.renderOrder=8,L.add(J),e.add(L);const Tt=new Tc(16769200,150,95,2);Tt.position.set(He.x+xn*1.06,5.5,He.z+Mn*1.06),e.add(Tt);const st=[];for(const[R,Y,ct]of[[.28,448194,240],[.62,448194,240],[.85,10467268,170],[-.3,9413532,150]]){const it=new Tc(Y,ct,110,2);it.position.set(He.x+xn*R,4.2,He.z+Mn*R),e.add(it),st.push(it)}const V=[240,240,170,150];return{group:e,caveFactor:c_,update(R,Y){const ct=1+.18*Math.sin(Y*2.1)+.08*Math.sin(Y*5.3);T.emissiveIntensity=2.3*ct,st[0].intensity=V[0]*(1+.14*Math.sin(Y*1.7)),st[1].intensity=V[1]*(1+.14*Math.sin(Y*2.3+1.6)),Tt.intensity=150*(1+.1*Math.sin(Y*1.3))}}}function tn(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new xe;let c=0;for(let u=0;u<i.length;++u){const f=i[u];let p=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const h in f.attributes){if(!n.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+h+'" attribute exists among all geometries, or in none of them.'),null;r[h]===void 0&&(r[h]=[]),r[h].push(f.attributes[h]),p++}if(p!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const h in f.morphAttributes){if(!s.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[h]===void 0&&(o[h]=[]),o[h].push(f.morphAttributes[h])}if(t){let h;if(e)h=f.index.count;else if(f.attributes.position!==void 0)h=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,h,u),c+=h}}if(e){let u=0;const f=[];for(let p=0;p<i.length;++p){const h=i[p].index;for(let g=0;g<h.count;++g)f.push(h.getX(g)+u);u+=i[p].attributes.position.count}l.setIndex(f)}for(const u in r){const f=hh(r[u]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,f)}for(const u in o){const f=o[u][0].length;if(f===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let p=0;p<f;++p){const h=[];for(let x=0;x<o[u].length;++x)h.push(o[u][x][p]);const g=hh(h);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function hh(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){const u=i[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}const o=new t(r),a=new ce(o,e,n);let l=0;for(let c=0;c<i.length;++c){const u=i[c];if(u.isInterleavedBufferAttribute){const f=l/e;for(let p=0,h=u.count;p<h;p++)for(let g=0;g<e;g++){const x=u.getComponent(p,g);a.setComponent(p+f,g,x)}}else o.set(u.array,l);l+=u.count*e}return s!==void 0&&(a.gpuType=s),a}const ve=i=>new Dt(i),u_=new Dt;function de(i,t,e=null){const n=i;e&&n.applyMatrix4(e);const s=n.attributes.position.count,r=new Float32Array(s*3),o=t instanceof Dt?t:ve(t);for(let a=0;a<s;a++)r[a*3]=o.r,r[a*3+1]=o.g,r[a*3+2]=o.b;return n.setAttribute("color",new ce(r,3)),n.attributes.uv&&n.deleteAttribute("uv"),n}const Me=(i=0,t=0,e=0,n=0,s=0,r=0,o=1,a=null)=>new se().compose(new U(i,t,e),new _i().setFromEuler(new pn(n,s,r)),new U(o,a??o,o));function f_(i,t){const e=new ne,n=rn(t^1024279),{topY:s,width:r}=ur,o=-411.5,a=ur.pos.z,l=18,c=14,u=[],f=[],p=[];for(let L=0;L<=c;L++){const G=L/c,X=G*s,tt=Math.pow(1-G,1.55)*5.2;for(let ut=0;ut<=l;ut++){const J=ut/l,Tt=(J-.5)*r,st=Math.sin(J*5.2+1.2)*(1-G)*.8;u.push(o+tt,X,a+Tt+st),f.push(J,G)}}for(let L=0;L<c;L++)for(let G=0;G<l;G++){const X=L*(l+1)+G,tt=X+l+1;p.push(X,X+1,tt,X+1,tt+1,tt)}const h=new xe;h.setAttribute("position",new Vt(u,3)),h.setAttribute("uv",new Vt(f,2)),h.setIndex(p),h.computeVertexNormals();const g=Nl(t^490110,256,4,1.3),x=new Se({transparent:!0,depthWrite:!1,side:ye,uniforms:{uTime:{value:0},uNoise:{value:g}},vertexShader:`
      varying vec2 vUv; varying float vY;
      void main() { vUv = uv; vY = position.y; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
    `,fragmentShader:`
      uniform sampler2D uNoise; uniform float uTime;
      varying vec2 vUv; varying float vY;
      void main() {
        float v = vUv.y * 3.0 - uTime * 1.9;
        float s1 = texture2D(uNoise, vec2(vUv.x * 2.6, v)).r;
        float s2 = texture2D(uNoise, vec2(vUv.x * 5.0 + 0.37, v * 1.7 - uTime * 0.6)).r;
        float streak = s1 * 0.72 + s2 * 0.28;
        float dens = smoothstep(0.24, 0.46, streak);
        dens *= 0.62 + 0.38 * smoothstep(0.0, 0.25, vUv.y);      // fuller at top
        dens *= smoothstep(0.0, 0.06, vUv.x) * smoothstep(1.0, 0.94, vUv.x);
        dens *= 0.85 + 0.25 * smoothstep(0.0, 6.0, vY);          // churn at base
        vec3 col = mix(vec3(0.78, 0.9, 0.95), vec3(1.0, 1.0, 1.0), dens * 1.2);
        float a = clamp(dens * 1.6, 0.0, 0.96);
        if (a < 0.02) discard;
        gl_FragColor = vec4(col, a);
      }
    `}),m=new St(h,x);m.frustumCulled=!1,m.renderOrder=5,e.add(m);const d=[];for(let L=0;L<7;L++){const G=L/6*2-1;d.push(de(new Ml(1,0),ve("#6b5a4c"),Me(o+1.4-Math.abs(G)*2.4+n.range(-.6,.6),s-.4+n.range(-.5,.9),a+G*(r*.52),n.range(0,3),n.range(0,3),n.range(0,3),n.range(2.2,3.6),n.range(1.4,2.4))))}const M=new St(tn(d),new be({vertexColors:!0,roughness:1,flatShading:!0}));M.castShadow=!0,e.add(M);const _=new Se({transparent:!0,depthWrite:!1,uniforms:{uTime:{value:0},uNoise:{value:g}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
      uniform sampler2D uNoise; uniform float uTime;
      varying vec2 vUv;
      void main() {
        vec2 c = vUv - 0.5;
        float r = length(c) * 2.0;
        float a = atan(c.y, c.x);
        float n = texture2D(uNoise, vec2(r * 1.6 - uTime * 0.5, a * 0.8 + r * 2.0 - uTime * 0.35)).r;
        float n2 = texture2D(uNoise, vec2(r * 3.1 + uTime * 0.22, -a * 1.3 + uTime * 0.5)).r;
        float f = smoothstep(0.35, 0.75, n * 0.6 + n2 * 0.4) * (1.0 - smoothstep(0.55, 1.0, r));
        f += smoothstep(0.62, 1.0, r) * 0.0;
        float a2 = clamp(f * 1.3, 0.0, 0.95);
        if (a2 < 0.02) discard;
        gl_FragColor = vec4(vec3(0.95, 0.99, 1.0), a2);
      }
    `}),v=new St(new xl(r*.62,28),_);v.rotation.x=-Math.PI/2,v.position.set(o+r*.42,.28,a),v.renderOrder=6,e.add(v);const w=Math.max(24,Math.round(130*i.particles)),b=new Float32Array(w*3),T=new Float32Array(w),P=new Float32Array(w),y=new Float32Array(w),S=new Float32Array(w),D=new Float32Array(w),C=new Float32Array(w),F=new Float32Array(w);for(let L=0;L<w;L++)y[L]=n.range(0,sn),S[L]=n.range(.15,1),D[L]=n.range(.28,.55),C[L]=n.range(7,15),F[L]=n.range(.5,2.2),T[L]=n.next();const O=new xe;O.setAttribute("position",new ce(b,3)),O.setAttribute("aLife",new ce(T,1)),O.setAttribute("aSize",new ce(P,1));const q=new Se({transparent:!0,depthWrite:!1,uniforms:{uMap:{value:t_()}},vertexShader:`
      attribute float aLife; attribute float aSize;
      varying float vA;
      void main() {
        vA = smoothstep(0.0, 0.18, aLife) * smoothstep(1.0, 0.55, aLife);
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = aSize * (240.0 / max(1.0, -mv.z));
        gl_Position = projectionMatrix * mv;
      }
    `,fragmentShader:`
      uniform sampler2D uMap; varying float vA;
      void main() {
        vec4 t = texture2D(uMap, gl_PointCoord);
        gl_FragColor = vec4(vec3(0.88, 0.96, 1.0), t.a * vA * 0.4);
      }
    `}),B=new ja(O,q);B.frustumCulled=!1,B.renderOrder=7,e.add(B);function Q(L,G){x.uniforms.uTime.value=G,_.uniforms.uTime.value=G;const X=o+r*.42;for(let tt=0;tt<w;tt++){T[tt]+=L*D[tt],T[tt]>1&&(T[tt]-=1);const ut=T[tt],J=S[tt]*r*.55*(.5+ut*.8);b[tt*3]=X+Math.cos(y[tt])*J+Math.sin(G*.8+y[tt]*3)*F[tt],b[tt*3+1]=.6+ut*16,b[tt*3+2]=a+Math.sin(y[tt])*J*.7,P[tt]=C[tt]*(.6+ut)}O.attributes.position.needsUpdate=!0,O.attributes.aLife.needsUpdate=!0,O.attributes.aSize.needsUpdate=!0}return{group:e,update:Q}}function d_(i){const t=rn(i^12197093),e=[],n=[["haven",62],["sandbar",12],["wreck",9],["finishI",52],["far2",14],["fang",8]],s=new U;for(const[g,x]of n){const m=hr.find(_=>_.id===g);let d=0,M=0;for(;d<x&&M<x*40;){M++;const _=t.range(0,sn),v=t.range(.25,.95),w=m.x+Math.cos(_)*m.r*v,b=m.z+Math.sin(_)*m.r*v,{h:T}=Ul(w,b);T<1.3||T>13||(Vv(w,b,s),!(s.y<.8)&&(Math.hypot(w-We.pos.x,b-We.pos.z)<95||(e.push({x:w,z:b,y:T,lean:t.range(.08,.3),dir:t.range(0,sn),s:t.range(1.05,1.75)}),d++)))}}const r=new Re(.16,.34,7,6,4,!0);{const g=r.attributes.position;for(let x=0;x<g.count;x++){const d=(g.getY(x)+3.5)/7;g.setX(x,g.getX(x)+Math.sin(d*Math.PI)*.9)}r.translate(.9,3.5,0),r.computeVertexNormals()}const o=[];{const g=r.attributes.position.count;for(let x=0;x<g;x++)o.push(.45,.33,.23);r.setAttribute("color",new Vt(o,3))}const a=new Ve(3.6,.75,5,1);{const g=a.attributes.position;for(let x=0;x<g.count;x++){const m=g.getX(x)+1.8;g.setY(x,g.getY(x)*(1-m/5.2)),g.setZ(x,-Math.pow(m/3.6,2)*1.15)}a.computeVertexNormals()}const l=[];for(let g=0;g<7;g++){const x=a.clone(),m=g%2?[.12,.42,.2]:[.075,.3,.16],d=x.attributes.position.count,M=new Float32Array(d*3);for(let _=0;_<d;_++)M[_*3]=m[0],M[_*3+1]=m[1],M[_*3+2]=m[2];x.setAttribute("color",new ce(M,3)),x.rotateY(g/7*sn+.3),l.push(x)}const c=tn(l);c.rotateX(-.25);const u=new Fn(r,new be({vertexColors:!0,roughness:1,flatShading:!0}),e.length),f=new Fn(c,new be({vertexColors:!0,roughness:.9,side:ye,flatShading:!0}),e.length),p=new _e;e.forEach((g,x)=>{p.position.set(g.x,g.y-.25,g.z),p.rotation.set(0,g.dir,0),p.scale.setScalar(g.s),p.updateMatrix(),u.setMatrixAt(x,p.matrix),p.position.set(g.x,g.y-.25+7*g.s,g.z),p.rotateX(g.lean),p.updateMatrix(),f.setMatrixAt(x,p.matrix)}),u.castShadow=f.castShadow=!0,u.receiveShadow=f.receiveShadow=!0;const h=new ne;return h.add(u,f),{group:h}}function p_(i){const t=rn(i^855116),e=new ne,n=ve("#8a6a4a"),s=ve("#6e5238"),r=ve("#5f4630"),o=ve("#a3814f"),a=ve("#d9c9a8");for(const l of po.docks){const c=l.yaw,u=Math.sin(c),f=-Math.cos(c),p=1.4,h=l.len/2,g=[],x=Math.floor(l.len/1.35);for(let b=0;b<x;b++){const T=(b+.5)/x-.5,P=l.x+u*T*l.len,y=l.z+f*T*l.len;g.push(de(new Ze(5,.14,1.12),b%3?n:s,Me(P,p+t.range(-.02,.02),y,0,-c+Math.PI/2,0)))}const m=Math.max(3,Math.floor(l.len/3.6));for(let b=0;b<=m;b++){const T=b/m-.5;for(const P of[-1,1]){const y=l.x+u*T*l.len-f*P*2.1,S=l.z+f*T*l.len+u*P*2.1,D=Gn(y,S),C=p-.1,F=D-.6,O=Math.max(1.2,C-F);g.push(de(new Re(.17,.2,O,6),r,Me(y,F+O/2,S)))}}const d=l.x-u*h,M=l.z-f*h;for(let b=0;b<(l.kind==="start"?3:2);b++){const T=t.range(.7,1.1);g.push(de(new Ze(1.1,1.1,1.1),o,Me(d+u*t.range(1,4)+f*t.range(-1.6,1.6),p+.55*T,M+f*t.range(1,4)-u*t.range(-1.6,1.6),0,t.range(0,1.5),0,T)))}g.push(de(new ii(.28,.06,5,10),a,Me(l.x+u*(h-1),p+.06,l.z+f*(h-1),Math.PI/2)));const _=l.x+u*h,v=l.z+f*h;for(const b of[-1,1]){const T=_-f*b*2,P=v+u*b*2;g.push(de(new Re(.06,.09,3.4,5),r,Me(T,p+1.7,P))),g.push(de(new Le(.3,8,6),ve("#ffd166"),Me(T,p+3.5,P)))}const w=new St(tn(g),new be({vertexColors:!0,roughness:.85,flatShading:!0}));w.castShadow=!0,w.receiveShadow=!0,e.add(w)}return{group:e}}function m_(i){const t=new ne,e=ve("#4a3527"),n=ve("#38271d"),s=ve("#7a4a33"),r=ve("#c9beab"),o=[];o.push(de(new Ze(24,4.2,6.4),e,Me(0,0,0))),o.push(de(new Ze(7,5.6,5.6),n,Me(-9.5,.6,0))),o.push(de(new Re(.9,2.6,6,4,1),n,Me(11.5,.4,0,0,Math.PI/2,0,1))),o.push(de(new Ze(5,2.6,4.2),n,Me(-4,2.9,.4)));for(let p=0;p<5;p++)o.push(de(new Ze(.5,4.6,.5),s,Me(3+p*2.1,1.4,-3,.1*p,0,.06*p)));o.push(de(new Re(.22,.34,15,6),e,Me(2,7,1.2,0,0,.5))),o.push(de(new Re(.12,.12,7,5),n,Me(5.4,10.4,1.2,0,0,Math.PI/2-.1))),o.push(de(new Re(1,.8,1.1,7),n,Me(5,12.6,1.4)));const a=tn(o),l=new St(a,new be({vertexColors:!0,roughness:.95,flatShading:!0})),c=po.wreck;l.position.set(c.x,-.6,c.z),l.rotation.set(.1,c.yaw,.32),l.castShadow=!0,l.receiveShadow=!0,t.add(l);const u=de(new Ve(5.4,4.4,4,3),r,null),f=new St(u,new be({vertexColors:!0,side:ye,roughness:1}));return f.position.copy(l.position).add(new U(4.4,8.4,1)),f.rotation.set(.2,c.yaw+.5,.35),t.add(f),{group:t}}function g_(i){const t=new ne,e=rn(i^723879),n=[de(new nn(.75,1.7,7),ve("#ef476f"),Me(0,.95,0)),de(new ii(.85,.22,6,12),ve("#f4f7f9"),Me(0,.35,0,Math.PI/2)),de(new Re(.06,.06,1.4,5),ve("#e8e2d4"),Me(0,2.1,0)),de(new Le(.22,8,6),ve("#ffd166"),Me(0,2.9,0))],s=tn(n),r=new Fn(s,new be({vertexColors:!0,roughness:.6,flatShading:!0}),Ae.length*2);r.castShadow=!0;function o(P,y){const S=Te.exit.x-Te.entrance.x,D=Te.exit.z-Te.entrance.z,C=S*S+D*D;let F=((P-Te.entrance.x)*S+(y-Te.entrance.z)*D)/C;F=Math.max(.12,Math.min(.95,F));const O=Te.entrance.x+S*F,q=Te.entrance.z+D*F;return Math.hypot(P-O,y-q)<Te.width+14}const a=[];let l=0;const c=Ae.map(P=>P.pos);for(let P=0;P<Ae.length;P++){if(o(c[P].x,c[P].z))continue;const y=c[Math.max(0,P-1)],S=c[Math.min(c.length-1,P+1)];let D=S.x-y.x,C=S.z-y.z;const F=Math.hypot(D,C)||1;D/=F,C/=F;const O=-C,q=D;for(const B of[-1,1])a.push({x:c[P].x+O*B*(Ae[P].r+5),z:c[P].z+q*B*(Ae[P].r+5),ph:e.range(0,sn)}),l++}r.count=l;const u=new _e;function f(P){for(let y=0;y<l;y++){const S=a[y];u.position.set(S.x,.1+Math.sin(P*1.35+S.ph)*.14,S.z),u.rotation.set(Math.sin(P*.9+S.ph)*.09,S.ph,Math.cos(P*1.1+S.ph)*.09),u.scale.setScalar(1),u.updateMatrix(),r.setMatrixAt(y,u.matrix)}r.instanceMatrix.needsUpdate=!0}f(0),t.add(r);const p=Ue,h=Ae[Ae.length-1].pos;let g=p.pos.x-h.x,x=p.pos.z-h.z;const m=Math.hypot(g,x)||1;g/=m,x/=m;const d=Math.atan2(g,-x),M=-x,_=g,v=p.r+9,w=[];for(const P of[-1,1]){const y=p.pos.x+M*P*v,S=p.pos.z+_*P*v,D=Gn(y,S);w.push(de(new Ze(2.2,12,2.2),ve("#e8e2d4"),Me(y,D+5.4,S,0,d,0))),w.push(de(new Ze(2.8,1.1,2.8),ve("#ef476f"),Me(y,D+11.2,S,0,d,0)))}const b=new St(tn(w),new be({vertexColors:!0,roughness:.7,flatShading:!0}));b.castShadow=!0,t.add(b);const T=new St(new Ve(v*2-3,3.2),new me({map:e_(),side:ye}));return T.position.set(p.pos.x,Gn(p.pos.x,p.pos.z)+10.4,p.pos.z),T.rotation.y=d,t.add(T),{group:t,writeMatrices:f,mesh:r}}function v_(i){const t=rn(i^989797),e=new ne,n=new be({color:14275784,roughness:.6,metalness:.3,flatShading:!0}),s=[],r=[],o=["#06d6c2","#ffd166","#ef476f"];po.flags.forEach((f,p)=>{const h=Gn(f.x,f.z),g=new Re(.09,.12,8.5,5);g.translate(f.x,h+4.25,f.z),r.push(g);const x=3.4,m=2.1,d=8,M=5,_=[],v=[],w=[],b=[],T=t.range(0,sn),P=ve(o[p%o.length]);for(let S=0;S<=M;S++)for(let D=0;D<=d;D++){const C=D/d,F=1-S/M;v.push(f.x+C*x*Math.cos(T),h+8.1-(1-F)*m,f.z+C*x*Math.sin(T)),_.push(C),w.push(P.r,P.g,P.b)}for(let S=0;S<M;S++)for(let D=0;D<d;D++){const C=S*(d+1)+D,F=C+d+1;b.push(C,C+1,F,C+1,F+1,F)}const y=new xe;y.setAttribute("position",new Vt(v,3)),y.setAttribute("aFlex",new Vt(_,1)),y.setAttribute("color",new Vt(w,3)),y.setIndex(b),s.push(y)});const a=new St(tn(r),n);a.castShadow=!0,e.add(a);const l=tn(s),c=new Se({side:ye,vertexColors:!0,uniforms:{uTime:{value:0}},vertexShader:`
      attribute float aFlex;
      uniform float uTime;
      varying vec3 vCol;
      void main() {
        vCol = color;
        vec3 p = position;
        float f = aFlex;
        p.y += sin(f * 3.4 - uTime * 5.2) * 0.34 * f - f * f * 0.5;
        p.x += sin(f * 2.1 - uTime * 3.1) * 0.42 * f;
        p.z += cos(f * 4.7 - uTime * 6.4) * 0.3 * f;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
      }
    `,fragmentShader:"varying vec3 vCol; void main() { gl_FragColor = vec4(vCol, 1.0); }"}),u=new St(l,c);return u.frustumCulled=!1,e.add(u),{group:e,clothMat:c}}function __(i){const t=rn(i^245956),e=new Ss(1,1);{const u=e.attributes.position;for(let f=0;f<u.count;f++){const p=.78+t.next()*.44;u.setXYZ(f,u.getX(f)*p,u.getY(f)*p,u.getZ(f)*p)}e.computeVertexNormals()}const n=240,s=new Fn(e,new be({color:9141616,roughness:1,flatShading:!0}),n),r=new _e,o=new Dt;let a=0,l=0;for(;a<n&&l<3e4;){l++;let u,f;if(a<26){const g=(a<13?0:1)?Te.exit:Te.entrance,x=t.range(0,sn),m=t.range(14,26);u=g.x+Math.cos(x)*m,f=g.z+Math.sin(x)*m}else u=t.range(-900,500),f=t.range(-2350,330);const{h:p}=Ul(u,f);p<-3.2||p>2.6||(r.position.set(u,p-.3,f),r.rotation.set(t.range(0,3),t.range(0,6),t.range(0,3)),r.scale.set(t.range(.8,3.4),t.range(.7,2.6),t.range(.8,3.4)),r.updateMatrix(),s.setMatrixAt(a,r.matrix),o.setHSL(.09,t.range(.04,.12),t.range(.32,.52)),s.setColorAt(a,o),a++)}s.count=a,s.castShadow=!0,s.receiveShadow=!0;const c=new ne;return c.add(s),{group:c}}function x_(i){const t=rn(i^789057),e=tn([de(new Le(.5,6,5),ve("#ef476f"),Me(0,.3,0,0,0,0,1)),de(new Le(.34,6,5),ve("#06d6c2"),Me(.5,.2,.2,0,.7,0,1)),de(new nn(.16,.9,5),ve("#ffd166"),Me(-.35,.45,.3,.3,0,.2,1))]),n=130,s=new Fn(e,new be({vertexColors:!0,roughness:.8,flatShading:!0}),n),r=new _e;let o=0,a=0;for(;o<n&&a<2e4;){a++;const c=t.next()<.6?hr.find(m=>m.id==="reefA"):hr.find(m=>m.id==="reefB"),u=t.range(0,sn),f=Math.sqrt(t.next())*c.r*.9,p=c.x+Math.cos(u)*f,h=c.z+Math.sin(u)*f,{h:g,dom:x}=Ul(p,h);g<-3.4||g>-.7||!x||x.profile!=="reef"||(r.position.set(p,g,h),r.rotation.set(0,t.range(0,sn),0),r.scale.setScalar(t.range(.8,2.4)),r.updateMatrix(),s.setMatrixAt(o,r.matrix),o++)}s.count=o;const l=new ne;return l.add(s),{group:l}}function M_(i){const t=rn(i^725581),e=ve("#e8f4ff"),n=ve("#c2d4e4"),s=ve("#8fa8c0"),r=[],o=new nn(.14,1.5,5);o.rotateX(Math.PI/2),r.push(de(o,e));const a=new Ve(.5,.28);a.translate(0,.02,.8),r.push(de(a,n));for(const m of[-1,1]){const d=new Ve(2,.55,2,1),M=d.attributes.position;for(let v=0;v<M.count;v++){const w=(M.getX(v)+1)/2;M.setY(v,M.getY(v)*(1-w*.45)),M.setZ(v,M.getZ(v)+w*w*.9),M.setX(v,M.getX(v)*(1-w*.12))}d.rotateZ(-m*.14),d.translate(m*1.05,.1,.05);const _=new Float32Array(d.attributes.position.count*3);for(let v=0;v<d.attributes.position.count;v++){const w=(d.attributes.position.getX(v)*m+1.05)/2.1,b=u_.copy(e).lerp(s,Math.max(0,w-.45)*1.4);_[v*3]=b.r,_[v*3+1]=b.g,_[v*3+2]=b.b}d.setAttribute("color",new ce(_,3)),d.deleteAttribute("uv"),r.push(d)}const l=tn(r),c=12,u=new Fn(l,new me({vertexColors:!0,side:ye}),c),f=[],p=[{cx:90,cz:90,r:45,y:36},{cx:330,cz:-760,r:50,y:34},{cx:380,cz:-1500,r:60,y:40},{cx:-10,cz:-1900,r:55,y:36},{cx:-650,cz:-1380,r:55,y:40}];for(let m=0;m<c;m++){const d=p[m%p.length];f.push({cx:d.cx+t.range(-20,20),cz:d.cz+t.range(-20,20),r:d.r*t.range(.5,1.2),y:d.y+t.range(-6,10),w:t.range(.1,.28)*(t.next()<.5?1:-1),ph:t.range(0,sn)})}const h=new _e;function g(m,d){for(let M=0;M<c;M++){const _=f[M],v=d*_.w+_.ph;h.position.set(_.cx+Math.cos(v)*_.r,_.y+Math.sin(d*.7+_.ph)*2.5,_.cz+Math.sin(v)*_.r);const w=-v+(_.w>0?-Math.PI/2:Math.PI/2);h.rotation.set(Math.sin(d*5.5+_.ph)*.22,w,Math.cos(d*5.5+_.ph)*.28),h.scale.setScalar(1.7),h.updateMatrix(),u.setMatrixAt(M,h.matrix)}u.instanceMatrix.needsUpdate=!0}g(0,0);const x=new ne;return x.add(u),{group:x,update:g}}function y_(i){const t=rn(i^1024545),e=7,n=new Fn(new nn(1,1,6),new me({color:3894142,fog:!0}),e),s=new _e;for(let o=0;o<e;o++){const a=o/e*sn+t.range(-.3,.3),l=t.range(2500,3200);s.position.set(-200+Math.cos(a)*l,0,-1050+Math.sin(a)*l),s.scale.set(t.range(180,380),t.range(40,90),t.range(180,380)),s.rotation.y=t.range(0,sn),s.updateMatrix(),n.setMatrixAt(o,s.matrix)}const r=new ne;return r.add(n),{group:r}}function S_(i,t){const e=new ne,n=f_(i,t),s=d_(t),r=p_(t),o=m_(),a=g_(t),l=v_(t),c=__(t),u=x_(t),f=M_(t),p=y_(t);return e.add(n.group,s.group,r.group,o.group,a.group,l.group,c.group,u.group,f.group,p.group),{group:e,update(h,g,x){n.update(h,g),f.update(h,g),a.writeMatrices(g),l.clothMat.uniforms.uTime.value=g}}}async function b_({scene:i,renderer:t,seed:e=mo,quality:n}){const s=new ne;s.name="world",i.add(s),kv(e);const r=Xv(n);s.add(r.mesh);const o=n_(i,n,e);s.add(o.group);const a=l_(n,t,e);s.add(a.group);const l=h_(n,e);s.add(l.group);const c=S_(n,e);s.add(c.group);const u={group:s,waterHeightAt:Li,groundHeightAt:Gn,caveFactor:l.caveFactor,registerWakeSource:a.registerWakeSource,quality:n,update(f,p,h){o.update(f,p,h),a.update(f,p,h),l.update(f,p),c.update(f,p,h),typeof window<"u"&&(window.__world={scene:i,renderer:t,camera:h,update:u.update,registerWakeSource:a.registerWakeSource})}};return u}const Wn=new EventTarget;function yn(i,t={}){Wn.dispatchEvent(new CustomEvent(i,{detail:t}))}function Pn(i,t){return Wn.addEventListener(i,e=>t(e.detail)),()=>Wn.removeEventListener(i,t)}const w_=1.94384,uh=100,na=1.85,ia=1.55,Hs=.85,fh=.34,dh=.42;class E_{constructor({world:t,model:e,fx:n,audio:s,emit:r,addShake:o}){this.world=t,this.model=e,this.fx=n,this.audio=s,this.emit=r,this.addShake=o,this.pos=new U,this.vel=new U,this.yaw=We.yaw,this.vy=0,this.throttle=0,this.steerCur=0,this.pitch=0,this.roll=0,this.hp=uh,this.boostMeter=.5,this.boosting=!1,this.shieldT=0,this.shieldHits=0,this.weapon="single",this.weaponT=0,this.airborne=!1,this.airT=0,this.grounded=!1,this.wasAirborne=!1,this.alive=!0,this.sinkT=0,this.speed=0,this.vLatAbs=0,this.landCooldown=0,this.groundDmgCd=0,this.impactCd=0,this.scrapeBatchCd=0,this.scrapePool=0,this.scrapePool=0,this._t=new U,this.lastLaunchVy=0}fwdX(){return Math.sin(this.yaw)}fwdZ(){return Math.cos(this.yaw)}reset(t,e,n=.5){this.pos.copy(t),this.yaw=e,this.vel.set(0,0,0),this.vy=0,this.throttle=0,this.steerCur=0,this.pitch=0,this.roll=0,this.hp=uh,this.boostMeter=n,this.boosting=!1,this.shieldT=0,this.shieldHits=0,this.weapon="single",this.weaponT=0,this.airborne=!1,this.grounded=!1,this.wasAirborne=!1,this.alive=!0,this.sinkT=0,this.landCooldown=0,this.groundDmgCd=0,this.scrapePool=0,this.impactCd=0,this.scrapeBatchCd=0;const s=this.world.waterHeightAt(this.pos.x,this.pos.z,0);this.pos.y=(Number.isFinite(s)?s:0)+fh}damage(t,e,n=0,s="combat"){if(this.alive){if(this.shieldT>0){this.shieldHits++,this.shieldFlash=1,this.shieldHits>=3&&this.popShield();return}if(this.hp=Math.max(0,this.hp-t),this.emit("playerHit",{amount:t,source:s}),this.audio.hitPlayer(),n>0&&e){const r=this.pos.x-e.x,o=this.pos.z-e.z,a=Math.hypot(r,o)||1;this.vel.x+=r/a*n,this.vel.z+=o/a*n,this.vy+=n*.28}this.hp<=0&&(this.alive=!1)}}popShield(){this.shieldT=0,this.shieldHits=0,this.audio.shieldBreak(),this.emit("shieldBreak",{})}fixedUpdate(t,e,n){const s=this.world,r=this.alive,o=this.fx,a=r?e.throttle:0,l=r?e.brake:0,c=r?e.steer:0;this.throttle=qs(this.throttle,a,6,t),this.steerCur=qs(this.steerCur,c,9,t);const u=this.boosting,f=r&&e.boostHeld&&this.boostMeter>.02&&this.throttle>.12&&!this.airborne;this.boosting=f,this.boosting&&!u&&this.emit("boostStart",{}),this.boosting?this.boostMeter=Math.max(0,this.boostMeter-t/3.4):this.boostMeter=Math.min(1,this.boostMeter+t*.016);const p=Math.sin(this.yaw),h=Math.cos(this.yaw),g=Math.cos(this.yaw),x=-Math.sin(this.yaw);let m=this.vel.x*p+this.vel.z*h,d=this.vel.x*g+this.vel.z*x,M=0;this.throttle>.02&&(M+=17.5*this.throttle*(this.boosting?1.65:1)),l>0&&(m>.4?M-=26*l:M-=8*l);const _=(this.airborne?.06:this.boosting?.86:.72)+(this.grounded?1.4:0);M-=m*_+m*Math.abs(m)*.006,m+=M*t,a<.02&&l<.02&&!this.airborne&&(m-=Math.sign(m)*Math.min(Math.abs(m),1.4*t)),m=$t(m,-7,36);const v=Math.abs(m),w=Math.pow($t(v/7,0,1),.65),b=1-.3*$t((v-18)/16,0,1);let T=-this.steerCur*1.25*w*b;m<-.5&&(T=-T*.7),this.airborne&&(T*=.3),r||(T*=.2),this.yaw+=T*t,this.yawRate=T;const P=this.airborne?.25:this.boosting?3:4.3;d*=Math.exp(-P*t),d=$t(d,-14,14),this.vLatAbs=Math.abs(d),this.vel.x=p*m+g*d,this.vel.z=h*m+x*d,this.speed=Math.hypot(this.vel.x,this.vel.z),this.pos.x+=this.vel.x*t,this.pos.z+=this.vel.z*t;const y=s.waterHeightAt(this.pos.x,this.pos.z,n),S=s.waterHeightAt(this.pos.x+p*na,this.pos.z+h*na,n),D=s.waterHeightAt(this.pos.x-p*ia,this.pos.z-h*ia,n),C=s.waterHeightAt(this.pos.x+g*Hs,this.pos.z+x*Hs,n),F=s.waterHeightAt(this.pos.x-g*Hs,this.pos.z-x*Hs,n),O=(y*1.6+S+D+C+F)/6+fh,q=Math.atan2(D-S,na+ia),B=Math.atan2(C-F,Hs*2);if(this.pos.y<=O+.28?(this.vy+=((O-this.pos.y)*46-this.vy*8.5)*t,this.airborne=!1):(this.vy-=13.5*t,this.airborne=!0),this.wasAirborne&&!this.airborne&&this.vy<-3&&this.landCooldown<=0){const X=$t((-this.vy-2.5)/7,.15,1);this.emit("landing",{intensity:X}),o.splash(this._t.copy(this.pos).setY(O-.1),X*1.6),this.audio.land(X),this.addShake(.25+X*.55),this.vy*=.12,this.landCooldown=.4}this.landCooldown=Math.max(0,this.landCooldown-t),this.wasAirborne=this.airborne,this.airT=this.airborne?this.airT+t:0,this.pos.y+=this.vy*t;const L=this.groundAt(this.pos.x,this.pos.z),G=this.pos.y-dh;if(G<L&&this.alive){const X=L-G,ut=(this.groundAt(this.pos.x+p*2.2,this.pos.z+h*2.2)-L)/2.2,J=this.groundAt(this.pos.x+g*1.6,this.pos.z+x*1.6),Tt=this.groundAt(this.pos.x-g*1.6,this.pos.z-x*1.6),st=(J-Tt)/3.2;this.pos.y=L+dh;const V=this.groundAt(this.pos.x+1.5,this.pos.z),R=this.groundAt(this.pos.x-1.5,this.pos.z),Y=this.groundAt(this.pos.x,this.pos.z+1.5),ct=this.groundAt(this.pos.x,this.pos.z-1.5),it=(V-R)/3,Et=(Y-ct)/3,Jt=Math.hypot(it,Et)||1e-6,N=(this.vel.x*it+this.vel.z*Et)/Jt,Nt=$t((Jt-.55)/.9,0,1);let At=Nt*$t(N-1,0,30)*3.2;if(N>4&&Nt>.1&&(At+=1.5),At=Math.min(At,45),this.scrapePool+=At*t,!this.grounded&&N>4&&Nt>.15&&this.impactCd<=0&&(this.scrapePool+=(N-4)*1.6*Nt,this.impactCd=1,this.addShake($t((N-4)*.045,.15,.5)),o.spray(this._t.copy(this.pos).setY(this.pos.y-.2),{x:p,z:h},1.4,.8),this.audio.splash(.9)),this.impactCd=Math.max(0,this.impactCd-t),this.scrapePool>=1&&this.scrapeBatchCd<=0){const zt=this.scrapePool;this.scrapePool=0,this.scrapeBatchCd=.4,this.damage(zt,null,0,"ground")}this.grounded=!0;const _t=Math.max(this.vF,0)*Math.max(0,ut);if(_t>this.vy&&(this.vy=_t),ut>.1&&m>17){const zt=$t(6.6+(m-17)*.16,6.6,9.8);this.vy<zt&&(this.vy=zt),this.lastLaunchVy=this.vy}const ft=$t((Math.abs(ut)-.35)/1.3,0,1),Zt=$t(Math.abs(ut)*.35+ft*(Math.abs(ut)*2+X*.55),0,2.6);m*=Math.exp(-Zt*.85*t),this.vel.x=p*m+g*d,this.vel.z=h*m+x*d;const Mt=5+11*Nt;this.pos.x-=it/Jt*Mt*t,this.pos.z-=Et/Jt*Mt*t,d-=st*7*t,this.vel.x=p*m+g*d,this.vel.z=h*m+x*d}else this.grounded=!1,this.scrapePool=0;this.shieldT>0&&(this.shieldT-=t,this.shieldT<=0&&this.popShield()),this.weaponT>0&&(this.weaponT-=t,this.weaponT<=0&&(this.weapon="single")),this.shieldFlash=Math.max(0,(this.shieldFlash||0)-t*3),this.alive||(this.sinkT+=t,this.pos.y-=t*Math.min(.5,this.sinkT*.35),this.pitch+=t*.3,this.vel.multiplyScalar(Math.exp(-1.5*t))),this._pitchWat=q,this._rollWat=B,this._targetY=O}groundAt(t,e){const n=this.world.groundHeightAt?this.world.groundHeightAt(t,e):-30;return Number.isFinite(n)?n:-30}syncVisual(t,e){const n=this.model,s=n.group;s.position.copy(this.pos);const r=this.steerCur*.38*$t(this.speed/12,0,1)*(this.airborne?.5:1),o=$t(this._pitchWat||0,-.45,.45)+(this.boosting?-.05:0)-$t(this.vy*.022,-.3,.3),a=$t((this._rollWat||0)*.6+r,-.6,.6);this.alive&&(this.pitch=qs(this.pitch,o,7,t),this.roll=qs(this.roll,a,7,t)),s.rotation.set(this.pitch,this.yaw,this.roll,"YXZ"),n.update(t,e,{throttle:this.alive?this.throttle:0,boosting:this.boosting&&this.alive,steer:this.steerCur,airborne:this.airborne,shieldOn:this.shieldT>0,shieldFlash:this.shieldFlash||0}),s.visible=this.alive||this.sinkT<3}}const T_={main:47308,bottom:279388,stripe:732730,accent:16763213,deck:16317433,trim:732730,suit:15923188,helmet:1894616,visor:726040,metal:10465976},A_={main:1910830,bottom:1053977,stripe:16732013,accent:16732013,deck:3752779,trim:790804,suit:2765624,helmet:16732013,visor:2229516,metal:7240320},pi=new Dt;function Uu(i,t){pi.setHex(t);const e=i.attributes.position.count,n=new Float32Array(e*3);for(let s=0;s<e;s++)n[s*3]=pi.r,n[s*3+1]=pi.g,n[s*3+2]=pi.b;return i.setAttribute("color",new ce(n,3)),i}function C_(){const i=[];for(let e=0;e<13;e++){const n=e/12,s=-1.95+n*4.1,r=Math.max(0,(n-.35)/.65),o=.78*Math.sin(Math.min(1,n/.35)*Math.PI*.5*.98+.06)*(1-Math.pow(r,1.7))+(n>.97?0:.04*(1-n));let a=.3+Math.sin(n*Math.PI)*.24-Math.pow(n,3)*.42;n>.58&&(a-=.05);const l=.5+Math.pow(n,2.4)*.34,c=o*(.94-.4*Math.pow(n,2));i.push({z:s,w:o,d:a,g:l,chine:c})}return i}function R_(i){const e=C_().map(c=>[[0,-c.d,c.z],[c.chine,-c.d*.28,c.z],[c.w,c.g,c.z],[-c.w,c.g,c.z],[-c.chine,-c.d*.28,c.z]]),n=[],s=[],r=[],o=c=>c>.44?i.deck:c>.28&&c<=.44?i.accent:c<-.06?i.bottom:c>.06&&c<=.24?i.stripe:i.main;for(const c of e)for(const u of c)n.push(u[0],u[1],u[2]),pi.setHex(o(u[1])),s.push(pi.r,pi.g,pi.b);const a=(c,u,f,p)=>{r.push(c,u,f,c,f,p)};for(let c=0;c<e.length-1;c++){const u=c*5,f=(c+1)*5;a(u,u+1,f+1,f),a(u+1,u+2,f+2,f+1),a(f+4,u+4,u+3,f+3),a(f,u,u+4,f+4)}r.push(0,4,3,0,3,2,0,2,1);const l=new xe;return l.setAttribute("position",new Vt(n,3)),l.setAttribute("color",new Vt(s,3)),l.setIndex(r),l.computeVertexNormals(),l}function P_(i,t){const e=[],n=(_,v,w=0,b=0,T=0,P=0,y=0,S=0,D=1,C=1,F=1)=>{P&&_.rotateX(P),y&&_.rotateY(y),S&&_.rotateZ(S),_.scale(D,C,F),_.translate(w,b,T),_.deleteAttribute("uv"),Uu(_,v),e.push(_.toNonIndexed())},s=new Re(.66,.12,1.5,5,1);n(s,i.deck,0,.56,1.35,Math.PI/2,0,0,1,.42,1);const r=new Re(.55,.55,1.05,7,1);n(r,i.main,0,.5,-1.45,Math.PI/2,0,0,1,.3,1);const o=new Ze(1.24,.1,1.75);n(o,i.trim,0,.16,-.1);const a=new Re(.2,.24,.32,6);n(a,i.trim,0,.52,.62,.5,0,0,1.6,1,1);const l=new zi(.15,.24,4,8);n(l,i.suit,0,.5,-.18,.16,0,0);const c=new zi(.05,.34,3,6);n(c,i.suit,-.17,.52,.08,1.15,0,-.35),n(c,i.suit,.17,.52,.08,1.15,0,.35);const u=new Le(.135,12,10);n(u,i.helmet,0,.82,-.16);const f=new Le(.115,10,8);n(f,i.visor,0,.81,-.07,0,0,0,.85,.8,.62);const p=new ii(.09,.02,6,14);n(p,i.trim,0,.62,.3,1.1,0,0);const h=new ii(.35,.042,6,16,Math.PI);n(h,i.accent,0,.62,-.42,0,0,0);const g=new Re(.03,.03,.24,6);n(g,i.accent,-.33,.6,-.42,0,0,1.35),n(g,i.accent,.33,.6,-.42,0,0,-1.35);const x=new zi(.34,.46,6,12);n(x,t?i.stripe:i.main,0,.52,-.95,Math.PI/2,0,0,1.1,.72,1);const m=new Ze(.3,.1,.42);n(m,i.stripe,0,.72,-.95,0,0,0);const d=new Ze(.05,.34,.3);n(d,i.metal,0,-.3,-1.62,.25,0,0);const M=new nn(.09,.3,6);if(n(M,i.stripe,0,.72,2.02,Math.PI/2,0,0),t){const _=new nn(.05,.28,5);n(_,i.trim,-.3,.78,-.8,-.5,0,.25),n(_,i.trim,.3,.78,-.8,-.5,0,-.25),n(_,i.trim,-.62,.6,.8,.4,0,.9),n(_,i.trim,.62,.6,.8,.4,0,-.9);const v=new nn(.07,.4,4);n(v,i.stripe,0,.94,-.95,-.15,0,0)}else{const _=new Re(.045,.055,.5,8);n(_,i.metal,-.34,.36,1.7,Math.PI/2-.06,0,0),n(_,i.metal,.34,.36,1.7,Math.PI/2-.06,0,0)}return e}function Nu(i="player"){const t=i==="enemy",e=t?A_:T_,n=new ne,s=R_(e).toNonIndexed(),r=P_(e,t),o=tn([s,...r],!1),a=new be({vertexColors:!0,roughness:.3,metalness:.28,side:ye}),l=new St(o,a);l.castShadow=!0,n.add(l);const c=[],u=[[t?15681391:16726832,-.68,.56,1],[t?15681391:2883464,.68,.56,1],[16774880,0,.6,-1.86],[t?16740419:448194,0,.86,-.16]];for(const[P,y,S,D]of u){const C=new Le(t?.07:.045,8,6);C.deleteAttribute("uv"),Uu(C,P),c.push(C.toNonIndexed())}const f=new St(tn(c,!1),new me({vertexColors:!0,toneMapped:!1}));n.add(f);let p=null;t||(p=new St(new Ve(.86,.34),new be({color:12577279,transparent:!0,opacity:.34,roughness:.08,metalness:.6,side:ye})),p.position.set(0,.78,.5),p.rotation.x=-.55,n.add(p));const h=new Re(.05,.06,.34,8),g=new be({color:e.metal,roughness:.35,metalness:.8}),x=[];for(const P of[-1,1]){const y=new St(h,g);y.position.set(P*.26,.52,-1.62),y.rotation.x=Math.PI/2-.35,n.add(y);const S=new St(new nn(.09,.7,8,1,!0),new me({color:6744319,transparent:!0,opacity:.85,blending:Ne,depthWrite:!1,toneMapped:!1}));S.rotation.x=-Math.PI/2,S.position.set(P*.32,.56,-2.05),S.visible=!1,n.add(S),x.push(S)}const m=new ne;m.position.set(0,-.16,-2.02);const d=new nn(.055,.16,8),M=new St(d,g);M.rotation.x=-Math.PI/2,m.add(M);const _=[];for(let P=0;P<3;P++){const y=new Le(.115,8,6);y.scale(.28,1,.16),y.translate(0,.11,0),y.rotateZ(P/3*Math.PI*2),_.push(y)}const v=new St(tn(_,!1),new be({color:14279396,roughness:.3,metalness:.9}));m.add(v),n.add(m);const w=[];for(let P=0;P<7;P++){const y=new Le(.05+P%3*.028,6,5),S=P*2.4;y.translate(Math.cos(S)*.14,P%3*.08-.05,-.2-P%4*.16),w.push(y)}const b=new St(tn(w,!1),new me({color:15400191,transparent:!0,opacity:0,blending:Ne,depthWrite:!1,toneMapped:!1}));b.position.set(0,-.1,-2.1),n.add(b);let T=null;if(!t){T=new ne;const P=new St(new Le(2.05,20,14),new me({color:448194,transparent:!0,opacity:.1,blending:Ne,depthWrite:!1,toneMapped:!1})),y=new St(new Ss(2.1,1),new me({color:10485495,wireframe:!0,transparent:!0,opacity:.22,blending:Ne,depthWrite:!1,toneMapped:!1}));T.add(P,y),T.visible=!1,n.add(T)}return{group:n,propMesh:v,flames:x,bubbles:b,shield:T,body:l,update(P,y,S){const{throttle:D=0,boosting:C=!1,steer:F=0,airborne:O=!1}=S;v.rotation.z+=P*(8+D*58+(C?26:0));for(let B=0;B<x.length;B++){const Q=x[B];if(Q.visible=C,C){const L=1+Math.sin(y*43+B*2.1)*.22;Q.scale.set(L,1+Math.sin(y*57+B)*.35,L),Q.material.opacity=.7+Math.sin(y*31+B)*.2}}const q=D>.2&&!O;if(b.visible=q,q&&(b.material.opacity=Math.min(.5,D*.5),b.scale.setScalar(.8+D*.5+Math.sin(y*21)*.08)),T){const B=S.shieldOn||!1;if(T.visible=B,B){const Q=1+Math.sin(y*6)*.045;T.scale.setScalar(Q),T.children[0].material.opacity=.08+Math.sin(y*6)*.03+(S.shieldFlash||0)*.3}}}}}function D_(i){let t=null;const e=new U(0,8,20),n=new U,s=new U,r=new U;let o=62,a=0,l=0,c=!1;function u(h){a=Math.min(1.4,a+h)}function f(h){e.set(h.pos.x-Math.sin(h.yaw)*9,h.pos.y+3.5,h.pos.z-Math.cos(h.yaw)*9),n.copy(h.pos),c=!0}function p(h,g,x,m,d,M,_){const v=_||t;c||f(x);const w=Math.sin(x.yaw),b=Math.cos(x.yaw),T=Math.cos(x.yaw),P=-Math.sin(x.yaw),y=x.speed||0;let S=62,D=2.6;if(m==="won"||m==="lost"){l+=h*.32;const F=13.5;s.set(x.pos.x+Math.sin(l)*F,x.pos.y+5.4,x.pos.z+Math.cos(l)*F),r.set(x.pos.x,x.pos.y+.8,x.pos.z),S=56,e.lerp(s,1-Math.exp(-2.2*h)),n.lerp(r,1-Math.exp(-3*h))}else{const F=$t((y-12)/6,0,1),O=9,q=.192,B=3.4+F*.85;s.set(x.pos.x-w*O+-T*x.steerCur*.9+x.vel.x*q,x.pos.y+B,x.pos.z-b*O+-P*x.steerCur*.9+x.vel.z*q),r.set(x.pos.x+w*(5.5+y*.28)+x.vel.x*.14,x.pos.y+1.15+$t(x.vy,-3,3)*.06,x.pos.z+b*(5.5+y*.28)+x.vel.z*.14);const Q=1-Math.exp(-5.2*h),L=1-Math.exp(-(2.8+Math.min(2.2,y*.09))*h);e.x+=(s.x-e.x)*Q,e.y+=(s.y-e.y)*L,e.z+=(s.z-e.z)*Q,n.lerp(r,1-Math.exp(-6.5*h)),S=62+(M?8:0)+$t(y-22,0,14)*.16,D=2.6+F*.85}a*=Math.exp(-4.6*h);const C=Math.min(.6,a)*.4;if(v.position.set(e.x+Math.sin(g*37.1)*C,e.y+Math.sin(g*47.3+1.3)*C*.8,e.z+Math.sin(g*53.7+2.6)*C),d&&d.waterHeightAt){const F=d.waterHeightAt(v.position.x,v.position.z,g);if(Number.isFinite(F)){const O=F+D;v.position.y<O&&(v.position.y=O),e.y<O&&(e.y=O),n.y<F-1.5&&(n.y=F-1.5)}}v.lookAt(n),o=qs(o,S,4,h),Math.abs(v.fov-o)>.02&&(v.fov=o,v.updateProjectionMatrix())}return{update:p,snap:f,addShake:u,get shakeAmount(){return a}}}const ph=30,mh=15,gh={combatA:5,duel:12};function L_({scene:i,world:t,fx:e,audio:n,emit:s,seed:r,wakeRegister:o}){const a=rn(r).fork(57005),l=new ne;l.name="tb_enemies",i.add(l);const c=hi.enemyBoats.map(L=>{const G=Nu("enemy");G.group.visible=!1,l.add(G.group);const X={model:G,group:G.group,home:L.patrol.map(tt=>new U(tt.x,0,tt.z)),pos:new U(L.pos.x,0,L.pos.z),yaw:a.range(0,Math.PI*2),speed:0,hp:ph,wp:0,zone:L.zone,active:!1,engaged:!1,fireCd:a.range(1,2.5),burstLeft:0,burstCd:0,orbitDir:a.next()>.5?1:-1,orbitA:a.range(0,Math.PI*2),flipT:a.range(4,9),ramCd:0,sinkT:-1,alive:!0,pitch:0,roll:0,wakeDir:new U(0,0,1)};return o&&(X.wake=o(X)),X}),u=hi.drones.map(L=>{const G=new ne,X=new St(new Le(.55,12,10),new be({color:2765881,roughness:.4,metalness:.6,emissive:15681391,emissiveIntensity:.25})),tt=new St(new ii(.85,.09,6,18),new be({color:1712678,roughness:.5,metalness:.5}));tt.rotation.x=Math.PI/2;const ut=new St(new Le(.18,8,6),new me({color:16740419,toneMapped:!1}));return ut.position.set(0,-.1,.5),G.add(X,tt,ut),G.position.set(L.pos.x,8,L.pos.z),G.visible=!1,l.add(G),{group:G,ring:tt,pos:G.position,zone:L.zone,hp:mh,active:!1,alive:!0,phase:a.range(0,Math.PI*2),fireCd:a.range(1.2,2.4),yaw:0}}),f=[];for(let L=0;L<8;L++){const G=new nn(.09,.42,5),X=L/8*Math.PI*2,tt=L%2?.55:-.55,ut=new U(Math.cos(X)*Math.cos(tt),Math.sin(tt),Math.sin(X)*Math.cos(tt)).normalize();G.translate(0,.34,0),G.applyQuaternion(new _i().setFromUnitVectors(new U(0,1,0),ut)),f.push(G.toNonIndexed())}const p=tn([new Ss(.55,0),...f],!1),h=new Fn(p,new be({color:2304816,roughness:.55,metalness:.5}),hi.mines.length);h.castShadow=!0;const g=new Fn(new Ss(.22,0),new me({color:16731501,toneMapped:!1}),hi.mines.length);l.add(h,g);const x=new se().makeScale(0,0,0);function m(){for(let L=0;L<h.count;L++)h.setMatrixAt(L,x);for(let L=0;L<g.count;L++)g.setMatrixAt(L,x);h.instanceMatrix.needsUpdate=!0,g.instanceMatrix.needsUpdate=!0}m();const d=hi.mines.map((L,G)=>({pos:new U(L.x,.1,L.z),alive:!0,phase:G*1.7%(Math.PI*2)})),M=new se,_=new _i,v=new U(1,1,1),w=new pn,b=new U,T=new U;function P(L){for(let G=0;G<d.length;G++){const X=d[G];if(!X.alive){h.setMatrixAt(G,x),g.setMatrixAt(G,x);continue}const tt=Math.sin(L*1.3+X.phase)*.14,ut=t.waterHeightAt(X.pos.x,X.pos.z,L);X.pos.y=(Number.isFinite(ut)?ut:0)+.12+tt,w.set(0,L*.5+X.phase,Math.sin(L+X.phase)*.2),_.setFromEuler(w),M.compose(X.pos,_,v),h.setMatrixAt(G,M);const J=.8+.4*Math.sin(L*6+X.phase);v.setScalar(J),M.compose(X.pos,_,v),g.setMatrixAt(G,M),v.setScalar(1)}h.instanceMatrix.needsUpdate=!0,g.instanceMatrix.needsUpdate=!0}let y={pos:new U,vel:new U},S={spawn(){}},D=()=>{};function C(L,G){e.explosion(L,G);const X=L.distanceTo(y.pos);n.explosion(X,G),s("explosion",{pos:L.clone()})}function F(L,G,X,tt,ut,J){const st=L.distanceTo(G)/tt;b.copy(G).addScaledVector(X,st).sub(L).normalize();const V=a.range(-J,J),R=a.range(-J,J);b.x+=Math.sin(V)*.05,b.y+=Math.sin(R)*.025+.014,b.normalize(),S.spawn(L,b,tt,ut,"enemy"),n.enemyFire(L.distanceTo(y.pos))}function O(L,G){L.alive&&(L.hp-=G,n.hitEnemy(),L.hp<=0&&(L.alive=!1,L.sinkT=0,C(L.pos,1.5),s("enemyKilled",{kind:"boat"})))}function q(L,G){L.alive&&(L.hp-=G,n.hitEnemy(),L.hp<=0&&(L.alive=!1,L.group.visible=!1,C(L.pos,1),s("enemyKilled",{kind:"drone"})))}function B(L,G,X){y=X.player,S=X.projectiles,D=X.damagePlayer;const{gateIndex:tt,racing:ut,playerAlive:J,damagePlayer:Tt}=X,st=y.pos,V=y.vel;for(const R of c){if(!R.alive){R.sinkT>=0&&R.sinkT<4&&(R.sinkT+=L,R.pos.y-=L*.55,R.pitch+=L*.28,R.roll+=L*.1,R.group.position.copy(R.pos),R.group.rotation.set(R.pitch,R.yaw,R.roll,"YXZ"),R.sinkT>1&&a.next()<L*3&&e.spray(R.pos,T.set(0,1,0),.6,.5),R.sinkT>=4&&(R.group.visible=!1));continue}if(!R.active){const jt=st.distanceTo(R.pos)<300,re=ut&&tt>=(gh[R.zone]??99);if(jt&&ut||re)R.active=!0,R.group.visible=!0;else continue}const Y=st.distanceTo(R.pos);R.engaged=ut&&J&&Y<130;let ct,it,Et;if(R.engaged&&Y>78)ct=st.x,it=st.z,Et=20;else if(R.engaged)R.orbitA+=L*.55*R.orbitDir,R.flipT-=L,R.flipT<=0&&(R.orbitDir*=-1,R.flipT=a.range(5,9)),ct=st.x+Math.cos(R.orbitA)*55,it=st.z+Math.sin(R.orbitA)*55,Et=15;else{const jt=R.home[R.wp];ct=jt.x,it=jt.z,Et=11,R.pos.distanceToSquared(jt)<100&&(R.wp=(R.wp+1)%R.home.length)}const Jt=Math.atan2(ct-R.pos.x,it-R.pos.z),N=Ov(R.yaw,Jt),Nt=1.1*L,At=$t(N,-Nt,Nt);R.yaw+=At,R.speed+=(Et-R.speed)*Math.min(1,1.6*L);const _t=Math.sin(R.yaw),ft=Math.cos(R.yaw);R.pos.x+=_t*R.speed*L,R.pos.z+=ft*R.speed*L,t.groundHeightAt&&t.groundHeightAt(R.pos.x+_t*9,R.pos.z+ft*9)>-.5&&(R.yaw+=L*1.2*(R.turnSign??(R.turnSign=a.next()>.5?1:-1)));const Zt=t.waterHeightAt(R.pos.x,R.pos.z,G),Mt=t.waterHeightAt(R.pos.x+_t*1.8,R.pos.z+ft*1.8,G),zt=t.waterHeightAt(R.pos.x-_t*1.5,R.pos.z-ft*1.5,G);R.pos.y=(Number.isFinite(Zt)?Zt:0)+.34,R.pitch=Math.atan2(zt-Mt,3.3),R.roll=-(At/Math.max(Nt,1e-4))*.16,R.group.position.copy(R.pos),R.group.rotation.set(R.pitch,R.yaw,R.roll,"YXZ"),R.wakeDir.set(_t,0,ft),R.model.update(L,G,{throttle:R.speed/20,boosting:!1,steer:0});for(const jt of c){if(jt===R||!jt.alive||!jt.active)continue;const re=R.pos.x-jt.pos.x,I=R.pos.z-jt.pos.z,E=re*re+I*I;if(E<49&&E>.01){const W=Math.sqrt(E);R.pos.x+=re/W*(7-W)*.5,R.pos.z+=I/W*(7-W)*.5}}R.ramCd=Math.max(0,R.ramCd-L),J&&R.ramCd<=0&&R.pos.distanceTo(st)<3.6&&(R.ramCd=.7,Tt(9,R.pos,7,"ram"),O(R,16),e.hitSpark(b.copy(st).setY(st.y+.6),16765066)),R.engaged&&J&&Y<98&&(R.fireCd-=L,R.fireCd<=0&&R.burstLeft<=0&&(R.burstLeft=3,R.burstCd=0,R.fireCd=2.3+a.range(0,1.1))),R.burstLeft>0&&(R.burstCd-=L,R.burstCd<=0&&(R.burstCd=.15,R.burstLeft--,T.set(R.pos.x+_t*1.9,R.pos.y+.7,R.pos.z+ft*1.9),F(T,b.set(st.x,st.y+.5,st.z),V,55,8,.05)))}for(const R of u){if(!R.alive)continue;if(!R.active){const N=st.distanceTo(R.pos)<300,Nt=ut&&tt>=(gh[R.zone]??99);if(N&&ut||Nt)R.active=!0;else continue}R.group.visible=!0;const Y=R.pos.distanceTo(st);R.phase+=L*.6;const ct=24,it=st.x+Math.cos(R.phase)*ct,Et=st.z+Math.sin(R.phase)*ct,Jt=t.waterHeightAt(it,Et,G)+7+Math.sin(G*.9+R.phase)*1.2;if(R.pos.x+=(it-R.pos.x)*Math.min(1,1.1*L),R.pos.y+=(Jt-R.pos.y)*Math.min(1,1.6*L),R.pos.z+=(Et-R.pos.z)*Math.min(1,1.1*L),Y<12){const N=R.pos.x-st.x,Nt=R.pos.z-st.z,At=Math.hypot(N,Nt)||1,_t=(12-Y)*Math.min(1,3*L);R.pos.x+=N/At*_t,R.pos.z+=Nt/At*_t}R.vx=(it-R.pos.x)*1.1,R.vz=(Et-R.pos.z)*1.1,R.group.rotation.y=Math.atan2(st.x-R.pos.x,st.z-R.pos.z),R.ring.rotation.z+=L*9,ut&&J&&Y<85&&(R.fireCd-=L,R.fireCd<=0&&(R.fireCd=1.75+a.range(0,.6),T.copy(R.pos),F(T,b.set(st.x,st.y+.5,st.z),V,42,5,.06)))}for(const R of d)if(R.alive&&J&&ut){const Y=st.x-R.pos.x,ct=st.z-R.pos.z;Y*Y+ct*ct<49&&(R.alive=!1,C(R.pos,1.5),Tt(30,R.pos,13,"mine"))}P(G)}function Q(L,G){for(const X of c)if(!(!X.alive||!X.active)&&L.distanceToSquared(X.pos)<2.7*2.7)return O(X,G),"boat";for(const X of u)if(!(!X.alive||!X.active)&&L.distanceToSquared(X.pos)<2.6*2.6)return q(X,G),"drone";for(const X of d){if(!X.alive)continue;const tt=L.x-X.pos.x,ut=L.y-X.pos.y,J=L.z-X.pos.z;if(tt*tt+ut*ut+J*J<1.5*1.5)return X.alive=!1,C(X.pos,1.3),y.pos.distanceTo(X.pos)<7&&D(30,X.pos,13,"mine"),"mine"}return null}return{boats:c,drones:u,mines:d,reset(){for(let L=0;L<c.length;L++){const G=hi.enemyBoats[L],X=c[L];X.pos.set(G.pos.x,0,G.pos.z),X.hp=ph,X.alive=!0,X.active=!1,X.engaged=!1,X.sinkT=-1,X.wp=0,X.speed=0,X.ramCd=0,X.burstLeft=0,X.fireCd=1.5+L*.7,X.group.visible=!1,X.pitch=0,X.roll=0}for(let L=0;L<u.length;L++){const G=u[L],X=hi.drones[L];G.pos.set(X.pos.x,8,X.pos.z),G.hp=mh,G.alive=!0,G.active=!1,G.group.visible=!1,G.fireCd=1.5+L}for(const L of d)L.alive=!0;m(),P(0)},fixedUpdate:B,tryHitBolt:Q}}const Gs={boost:16765286,shield:448194,double:16736208},vh=3.6;function I_({scene:i,world:t,fx:e,audio:n,emit:s,seed:r}){const o=rn(r).fork(37326),a=[],l=new ne;l.name="tb_pickups",i.add(l);const c=new Re(.5,.7,26,10,1,!0),u=new me({transparent:!0,opacity:.085,side:ye,blending:Ne,depthWrite:!1,toneMapped:!1});function f(p){const h=new ne,g=new be({color:Gs[p],roughness:.3,metalness:.45,emissive:Gs[p],emissiveIntensity:.55});if(p==="boost"){const x=new St(new zi(.32,.42,4,10),g),m=new St(new nn(.22,.5,8),g);m.position.y=.72,h.add(x,m)}else if(p==="shield"){const x=new St(new ii(.42,.12,8,20),g),m=new St(new Le(.34,12,10),new me({color:Gs.shield,transparent:!0,opacity:.3,blending:Ne,depthWrite:!1,toneMapped:!1}));h.add(x,m)}else{const x=new Re(.13,.16,.62,8),m=new St(x,g);m.position.x=-.17;const d=new St(x,g);d.position.x=.17;const M=new St(new ii(.24,.05,6,16),g);M.rotation.x=Math.PI/2,M.position.y=-.18,h.add(m,d,M)}return h}for(const p of hi.pickups){const h=new ne;h.position.set(p.pos.x,.9,p.pos.z);const g=f(p.kind);h.add(g);const x=new St(c,u.clone());x.material.color.setHex(Gs[p.kind]),x.position.y=13,h.add(x);const m=new St(new uo(.9,1.7,24),new me({color:Gs[p.kind],transparent:!0,opacity:.4,blending:Ne,depthWrite:!1,side:ye,toneMapped:!1}));m.rotation.x=-Math.PI/2,m.position.y=.12,h.add(m),l.add(h),a.push({kind:p.kind,grp:h,icon:g,beacon:x,halo:m,alive:!0,phase:o.range(0,Math.PI*2),pos:new U(p.pos.x,0,p.pos.z)})}return{items:a,reset(){for(const p of a)p.alive=!0,p.grp.visible=!0},fixedUpdate(p,h,g,x){for(const m of a){if(!m.alive)continue;const d=.9+Math.sin(h*1.7+m.phase)*.28,M=t.waterHeightAt(m.pos.x,m.pos.z,h);m.grp.position.y=(Number.isFinite(M)?M:0)+d,m.icon.rotation.y=h*1.4+m.phase,m.icon.rotation.z=Math.sin(h+m.phase)*.12,m.beacon.material.opacity=.06+.05*(.5+.5*Math.sin(h*2.4+m.phase)),m.halo.scale.setScalar(1+.18*Math.sin(h*2.4+m.phase));const _=m.pos.x-g.x,v=m.pos.z-g.z;m.grp.visible=_*_+v*v<700*700,_*_+v*v<vh*vh&&(m.alive=!1,m.grp.visible=!1,x(m))}}}}const Vs=448194,_h=3529099,xh=683895;function U_(){const t=new Uint8Array(400);for(let n=0;n<10;n++)for(let s=0;s<10;s++){const r=(s>>1)+(n>>1)&1,o=(n*10+s)*4,a=r?242:26;t[o]=a,t[o+1]=r?250:34,t[o+2]=r?252:40,t[o+3]=255}const e=new gl(t,10,10);return e.magFilter=$e,e.minFilter=$e,e.colorSpace=Ge,e.needsUpdate=!0,e}function N_({scene:i}){const t=new Re(.46,.62,7.8,10),e=new be({color:671052,emissive:448194,emissiveIntensity:.62,roughness:.4,metalness:.3}),n=new Le(.52,10,8),s=new nn(1.15,2.5,4),r=new Re(.5,.75,9.4,10,1,!0),o=new Le(.34,10,8),a=new me({color:10485495,transparent:!0,opacity:.9,blending:Ne,depthWrite:!1,toneMapped:!1}),l=[We.pos,...Ae.map(d=>d.pos),Ue.pos],c=d=>{const M=l[Math.max(0,d)],_=l[Math.min(l.length-1,d+2)],v=new U(_.x-M.x,0,_.z-M.z);return v.lengthSq()<1e-6&&v.set(0,0,-1),v.normalize()},u=[],f=new ne;f.name="tb_gates",i.add(f);const p=()=>new me({color:Vs,transparent:!0,opacity:.3,side:ye,blending:Ne,depthWrite:!1,toneMapped:!1}),h=()=>new me({color:Vs,toneMapped:!1});for(let d=0;d<Ae.length;d++){const M=Ae[d],_=new ne;_.position.set(M.pos.x,0,M.pos.z);const v=c(d);_.rotation.y=Math.atan2(v.x,v.z);const w=Math.max(5,M.r-1),b={banner:p(),orbs:[]};if(M.kind==="cave"){const y=Math.min(w,11);for(const S of[-1,1]){const D=new me({color:Vs,transparent:!0,opacity:.34,side:ye,blending:Ne,depthWrite:!1,toneMapped:!1}),C=new St(r,D);C.position.set(S*y,4.6,0),_.add(C),b.orbs.push(D);const F=new St(o,a);F.position.set(S*y*.8,.55,0),_.add(F)}}else for(const y of[-1,1]){const S=new St(t,e);S.position.set(y*w,3.9,0),S.castShadow=!0,_.add(S);const D=h(),C=new St(n,D);C.position.set(y*w,8.1,0),_.add(C),b.orbs.push(D)}const T=new St(new Ve(w*2,3.4),b.banner);T.position.set(0,5.7,0),_.add(T);const P=new St(new Ve(w*2,.42),b.banner);P.position.set(0,8.1,0),_.add(P),f.add(_),u.push({grp:_,mats:b,banner:T,pos:M.pos,r:M.r,kind:M.kind,index:d,dir:v})}{const d=new ne;d.position.set(Ue.pos.x,0,Ue.pos.z);const M=c(Ae.length);d.rotation.y=Math.atan2(M.x,M.z);const _={banner:null,orbs:[]},v=Ue.r+4;for(const T of[-1,1]){const P=new St(new Re(.55,.8,11,8),e);P.position.set(T*v,5,0),P.castShadow=!0,d.add(P);const y=h(),S=new St(new Le(.6,10,8),y);S.position.set(T*v,11,0),d.add(S),_.orbs.push(y)}const w=new St(new Ve(v*2,4.6),new me({map:U_(),side:ye,transparent:!0,opacity:.96,toneMapped:!1}));w.position.set(0,8.2,0),d.add(w);const b=new St(new Ve(v*2,.55),p());b.position.set(0,10.6,0),d.add(b),_.banner=b.material,f.add(d),u.push({grp:d,mats:_,pos:Ue.pos,r:Ue.r,kind:"finish",index:Ae.length,dir:M})}const g=new St(s,new me({color:10485495,toneMapped:!1,transparent:!0,opacity:.95,blending:Ne,depthWrite:!1}));g.visible=!1,i.add(g);let x=!1;function m(d,M,_){for(const v of u){const w=v.kind==="finish",b=w?x:v.index<_,T=!b&&v.index===_;if(M){const y=v.pos.x-M.x,S=v.pos.z-M.z;v.grp.visible=y*y+S*S<620*620}const P=T?.5+.3*(.5+.5*Math.sin(d*4.2)):0;v.mats.banner&&(b?(v.mats.banner.color.setHex(_h),v.mats.banner.opacity=.1):T?(v.mats.banner.color.setHex(Vs),v.mats.banner.opacity=P+.1):(v.mats.banner.color.setHex(xh),v.mats.banner.opacity=.28));for(const y of v.mats.orbs)b?y.color.setHex(_h):T?y.color.setHex(Vs):w?y.color.setHex(16765286):y.color.setHex(xh);if(T){const y=Math.sin(d*2.6)*.5,S=w?v.r+9:v.r+7;g.position.set(v.pos.x-v.dir.x*S,(w?8:6.4)+y,v.pos.z-v.dir.z*S),g.rotation.set(0,Math.atan2(v.dir.x,v.dir.z),0),g.rotateX(Math.PI/2),g.scale.setScalar((w?2.6:2.3)*(1+.15*Math.sin(d*4.2))),g.visible=!0}}}return{items:u,reset(d=0){x=!1,m(0,null,d)},markFinish(){x=!0},frameUpdate(d,M,_,v){m(M,_,v)},distToNext(d,M){const _=u[Math.min(M,u.length-1)],v=_.pos.x-d.x,w=_.pos.z-d.z;return Math.hypot(v,w)}}}const sa=96;function F_({scene:i}){const t=new zi(.1,1.05,3,8);t.rotateX(Math.PI/2);const e={player:new me({color:13172724,toneMapped:!1,transparent:!0,opacity:.95,blending:Ne,depthWrite:!1}),enemy:new me({color:16751196,toneMapped:!1,transparent:!0,opacity:.95,blending:Ne,depthWrite:!1})},n=new Le(.34,8,6),s=[],r=new ne;r.name="tb_bolts",i.add(r);for(let f=0;f<sa;f++){const p=new St(t,e.player),h=new St(n,e.player);p.name="tb_boltCore",h.name="tb_boltGlow",p.frustumCulled=!1,h.frustumCulled=!1,p.visible=!1,h.visible=!1,r.add(p,h),s.push({alive:!1,pos:new U,vel:new U,dmg:0,from:"player",life:0,core:p,glow:h,dir:new U})}const o=new U;function a(f,p,h,g,x,m=2.2){let d=null;for(let _=0;_<sa;_++)if(!s[_].alive){d=s[_];break}d||(d=s[0]),d.alive=!0,d.pos.copy(f),d.vel.copy(p).multiplyScalar(h),d.dmg=g,d.from=x,d.life=m,d.dir.copy(p);const M=e[x]||e.player;d.core.material=M,d.glow.material=M,d.core.visible=!0,d.glow.visible=!0,d.core.position.copy(f),d.glow.position.copy(f),d.core.lookAt(o.copy(f).add(p))}function l(){for(const f of s)f.alive=!1,f.core.visible=!1,f.glow.visible=!1}function c(f){for(let p=0;p<sa;p++){const h=s[p];h.alive&&(h.life-=f,h.vel.y-=2.2*f,h.pos.addScaledVector(h.vel,f),h.core.position.copy(h.pos),h.glow.position.copy(h.pos),h.core.lookAt(o.copy(h.pos).add(h.vel)),h.life<=0&&u(h))}}function u(f){f.alive=!1,f.core.visible=!1,f.glow.visible=!1}return{bolts:s,spawn:a,fixedUpdate:c,reset:l,kill:u}}const z_={throttle:0,brake:0,steer:0,boostHeld:!1},O_=Math.cos(.489),B_=220;function k_({scene:i,world:t,input:e,audio:n,fx:s,seed:r,startMode:o}){const a=rn(r).fork(40465),l=Ae.length+1,c={hp:100,maxHp:100,boost:.5,shieldT:0,weapon:"single",weaponT:0,gateIndex:0,gatesTotal:l,speedKts:0,raceTime:0,enemiesDown:0,phase:"idle",pos:null,heading:We.yaw},u=Nu("player");i.add(u.group);let f=null;const p=J=>{f&&f.addShake(J)},h=new E_({world:t,model:u,fx:s,audio:n,emit:yn,addShake:p});c.pos=h.pos,f=D_();const g=F_({scene:i}),x=N_({scene:i}),m=I_({scene:i,world:t,fx:s,audio:n,emit:yn,seed:r}),d=L_({scene:i,world:t,fx:s,audio:n,emit:yn,seed:r,wakeRegister:J=>t.registerWakeSource({object3D:J.group,getDir:()=>J.wakeDir,getSpeed:()=>J.speed,width:2.4,strength:.7})}),M=new U(0,0,1);t.registerWakeSource&&t.registerWakeSource({object3D:u.group,getDir:()=>M.set(Math.sin(h.yaw),0,Math.cos(h.yaw)),getSpeed:()=>h.speed,width:2.6,strength:1}),Pn("enemyKilled",()=>{c.enemiesDown++});let _=0,v=0,w=0,b=1,T=0,P=!1,y=!1;const S=new U;new U;const D=new U,C=new U;function F(){const J=Math.sin(h.yaw),Tt=Math.cos(h.yaw);let st=null,V=1/0;const R=(Y,ct,it,Et,Jt,N,Nt)=>{const At=Y-h.pos.x,_t=it-h.pos.z,ft=Math.hypot(At,_t);if(ft>B_||ft<.5)return;const Zt=At/ft*J+_t/ft*Tt;if(Zt<O_)return;const Mt=ft*(2.2-Zt)+Nt;Mt<V&&(V=Mt,st={x:Y,y:ct,z:it,vx:Et,vz:Jt,kind:N})};for(const Y of d.boats)!Y.alive||!Y.active||R(Y.pos.x,Y.pos.y+.7,Y.pos.z,Math.sin(Y.yaw)*Y.speed,Math.cos(Y.yaw)*Y.speed,"boat",0);for(const Y of d.drones)!Y.alive||!Y.active||R(Y.pos.x,Y.pos.y,Y.pos.z,Y.vx||0,Y.vz||0,"drone",0);if(!st)for(const Y of d.mines)Y.alive&&R(Y.pos.x,Y.pos.y+.2,Y.pos.z,0,0,"mine",60);return st}function O(J){const Tt=h.weapon==="double";if(w-=J,w>0)return;w=Tt?.11:.16;const st=F(),V=Math.sin(h.yaw),R=Math.cos(h.yaw),Y=-Math.cos(h.yaw),ct=Math.sin(h.yaw),it=Tt?[-1,1]:[b=-b];for(const Et of it){if(D.set(h.pos.x+V*1.9+Y*Et*.34,h.pos.y+.5,h.pos.z+R*1.9+ct*Et*.34),st){const N=Math.hypot(st.x-D.x,st.z-D.z)/85;C.set(st.x+st.vx*N-D.x,st.y+.25*N-D.y,st.z+st.vz*N-D.z).normalize();const Nt=a.range(-.012,.012);C.x+=Nt,C.y+=a.range(-.008,.012),C.normalize()}else C.set(V,.045,R).normalize();g.spawn(D,C,85,6,"player",1.7),s.muzzle(D,C)}n.fire()}function q(J,Tt,st=0,V="combat"){if(y)return;const R=h.shieldT>0;h.damage(J,Tt,st,V),R||p($t(J/26,.12,.6))}function B(J,Tt){s.explosion(J,Tt),n.explosion(J.distanceTo(h.pos),Tt),yn("explosion",{pos:J.clone()})}function Q(){P||(P=!0,c.phase="won",x.markFinish(),yn("finish",{time:c.raceTime}),n.finishFanfare(),s.confetti(S.set(Ue.pos.x,t.waterHeightAt(Ue.pos.x,Ue.pos.z,_)+2,Ue.pos.z)))}function L(){y||(y=!0,c.phase="lost",B(S.copy(h.pos).setY(h.pos.y+.5),2.2),yn("playerDied",{}),n.failSting())}function G(J){yn("pickup",{kind:J.kind}),n.pickup(J.kind),s.pickupBurst(J.grp.position,{boost:16765286,shield:448194,double:16736208}[J.kind]),J.kind==="boost"?h.boostMeter=Math.min(1,h.boostMeter+.5):J.kind==="shield"?(h.shieldT=8,h.shieldHits=0,n.shieldUp()):J.kind==="double"&&(h.weapon="double",h.weaponT=20,yn("weapon",{kind:"double"}))}function X(J,Tt=!1){const st=J&&il[J]?il[J]:null;h.reset(st?st.pos:We.pos,st?st.yaw:We.yaw,st?st.boost:.5),v=st?st.gate+1:0,c.gateIndex=v,g.reset(),d.reset(),m.reset(),x.reset(v),_=0,w=0,T=0,P=!1,y=!1,c.phase="idle",c.raceTime=0,c.enemiesDown=0,c.speedKts=0,c.heading=h.yaw,f.snap(h)}function tt(J,Tt){(P||y)&&(Tt=!1),Tt&&c.phase==="idle"&&(c.phase="racing"),_+=J,Tt&&(c.raceTime+=J);const st=Tt&&h.alive?{throttle:e.throttle,brake:e.brake,steer:e.steer,boostHeld:e.boostHeld}:z_;if(h.fixedUpdate(J,st,_),Tt&&h.alive&&e.fireHeld?O(J):w=Math.min(w,.05),Tt&&h.alive)if(v<Ae.length){const V=Ae[v],R=h.pos.x-V.pos.x,Y=h.pos.z-V.pos.z;R*R+Y*Y<(V.r+3)*(V.r+3)&&(v++,c.gateIndex=v,yn("gate",{index:v,total:l}),n.gatePass())}else{const V=h.pos.x-Ue.pos.x,R=h.pos.z-Ue.pos.z;V*V+R*R<(Ue.r+4)*(Ue.r+4)&&Q()}m.fixedUpdate(J,_,h.pos,G),d.fixedUpdate(J,_,{player:h,projectiles:g,racing:Tt,playerAlive:h.alive,gateIndex:v,damagePlayer:q}),g.fixedUpdate(J);for(const V of g.bolts){if(!V.alive)continue;if(V.from==="player"){const Y=d.tryHitBolt(V.pos,V.dmg);if(Y){s.hitSpark(V.pos,Y==="mine"?16765066:10485495),yn("enemyHit",{kind:Y}),g.kill(V);continue}}else if(h.alive&&!y){const Y=V.pos.x-h.pos.x,ct=V.pos.y-(h.pos.y+.45),it=V.pos.z-h.pos.z;if(Y*Y+ct*ct+it*it<1.8*1.8){q(V.dmg,V.pos,2.2,"bolt"),s.hitSpark(V.pos,16745042),g.kill(V);continue}}const R=t.waterHeightAt(V.pos.x,V.pos.z,_);if(V.pos.y<R-.2){s.splash(V.pos,.25),g.kill(V);continue}t.groundHeightAt&&V.pos.y<t.groundHeightAt(V.pos.x,V.pos.z)&&(s.hitSpark(V.pos,14207400),g.kill(V))}!h.alive&&!y&&L(),c.hp=h.hp,c.boost=h.boostMeter,c.shieldT=h.shieldT,c.weapon=h.weapon,c.weaponT=h.weaponT,c.speedKts=h.speed*w_,c.heading=h.yaw}function ut(J,Tt,st,V){h.syncVisual(J,_);const R=Math.sin(h.yaw),Y=Math.cos(h.yaw);if(h.alive&&!h.airborne){if(h.vLatAbs>2.2&&h.speed>6){T+=J;const it=h.steerCur>=0?1:-1;for(;T>.05;){T-=.05;const Et=-Math.cos(h.yaw)*it,Jt=Math.sin(h.yaw)*it;S.set(h.pos.x-R*1.2+Et*.8,h.pos.y+.1,h.pos.z-Y*1.2+Jt*.8),C.set(Et*.7+R*.3,0,Jt*.7+Y*.3),s.spray(S,C,Math.min(2,h.vLatAbs*.32),.45)}}else T=0;h.boosting&&(S.set(h.pos.x-R*2.1,h.pos.y+.45,h.pos.z-Y*2.1),C.set(-R,.2,-Y),s.boostFlame(S,C,1))}x.frameUpdate(J,Tt,h.pos,v),st&&V!=="menu"&&V!=="boot"&&f.update(J,Tt,h,V,t,h.boosting&&h.alive,st);const ct=$t(h.speed/34,0,1)*.75+h.throttle*.25;if(n.setEngine(ct,h.alive?h.throttle:0,h.boosting&&h.alive),t.caveFactor&&n.setCave($t(t.caveFactor(h.pos.x,h.pos.z),0,1)),n.setWaterfall){const it=Math.hypot(h.pos.x-ur.pos.x,h.pos.z-ur.pos.z);n.setWaterfall($t(1-it/170,0,1))}}return X(o||null),u.group.name="tb_playerBoat",{state:c,boat:u.group,player:h,enemies:d,projectiles:g,pickups:m,gates:x,fixedUpdate:tt,frameUpdate:ut,reset:X,addShake(J){p(J)},get enemiesAlive(){return d.boats.filter(J=>J.alive).length+d.drones.filter(J=>J.alive).length+d.mines.filter(J=>J.alive).length},enemyStatus(){return[...d.boats.map(J=>({kind:"boat",alive:J.alive,active:J.active,hp:J.hp,pos:J.pos.toArray()})),...d.drones.map(J=>({kind:"drone",alive:J.alive,active:J.active,hp:J.hp,pos:J.pos.toArray()}))]},get boltsAlive(){return g.bolts.filter(J=>J.alive).length},get boltsTotal(){return g.bolts.length}}}const Mh=2600,yh=900,ra=14,oa=10,H_=`
  attribute vec3 aColor;
  attribute float aSize;
  attribute float aAlpha;
  varying vec3 vColor;
  varying float vAlpha;
  void main() {
    vColor = aColor; vAlpha = aAlpha;
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    float dist = max(1.0, -mv.z);
    gl_PointSize = min(aSize * (330.0 / dist), 110.0);
    // particles drifting into the camera become giant discs: fade them out close-up
    vAlpha *= smoothstep(1.2, 3.5, dist);
    gl_Position = projectionMatrix * mv;
  }`,G_=`
  uniform float uSoft;
  varying vec3 vColor;
  varying float vAlpha;
  void main() {
    float d = length(gl_PointCoord - vec2(0.5));
    float edge = mix(0.5, 0.18, uSoft);           // hard sparks vs soft puff
    float a = smoothstep(0.5, edge, d) * vAlpha;
    if (a < 0.01) discard;
    gl_FragColor = vec4(vColor, a);
  }`;function Sh(i,t,e){const n=new xe,s=new Float32Array(i*3),r=new Float32Array(i*3),o=new Float32Array(i),a=new Float32Array(i);for(let c=0;c<i;c++)s[c*3+1]=-9999;n.setAttribute("position",new ce(s,3).setUsage(_r)),n.setAttribute("aColor",new ce(r,3).setUsage(_r)),n.setAttribute("aSize",new ce(o,1).setUsage(_r)),n.setAttribute("aAlpha",new ce(a,1).setUsage(_r)),n.boundingSphere=new Wi(new U(0,0,-1e3),1e6);const l=new Se({uniforms:{uSoft:{value:t}},vertexShader:H_,fragmentShader:G_,transparent:!0,depthWrite:!1,blending:e});return{geo:n,mat:l,pos:s,col:r,size:o,alpha:a,count:0,max:i}}function je(i,t,e,n,s,r,o,a,l,c,u,f,p,h,g){i.count>=i.max&&(i.count=i.max-1);const x=i.count++;i.pos[x*3]=t,i.pos[x*3+1]=e,i.pos[x*3+2]=n,i.col[x*3]=c,i.col[x*3+1]=u,i.col[x*3+2]=f,i.size[x]=l,i.alpha[x]=1;const m=i.dyn;m[x*10+0]=s,m[x*10+1]=r,m[x*10+2]=o,m[x*10+3]=a,m[x*10+4]=a,m[x*10+5]=p,m[x*10+6]=h,m[x*10+7]=l,m[x*10+8]=g,m[x*10+9]=0}function bh(i,t){const e=i.dyn;let n=i.count;for(let s=0;s<n;){const r=s*10;if(e[r+3]-=t,e[r+3]<=0){if(n--,s!==n){i.pos[s*3]=i.pos[n*3],i.pos[s*3+1]=i.pos[n*3+1],i.pos[s*3+2]=i.pos[n*3+2],i.col[s*3]=i.col[n*3],i.col[s*3+1]=i.col[n*3+1],i.col[s*3+2]=i.col[n*3+2];for(let l=0;l<10;l++)e[r+l]=e[n*10+l];i.size[s]=i.size[n],i.alpha[s]=i.alpha[n]}continue}const o=Math.exp(-e[r+6]*t);e[r]*=o,e[r+2]*=o,e[r+1]=e[r+1]*o-e[r+5]*t,i.pos[s*3]+=e[r]*t,i.pos[s*3+1]+=e[r+1]*t,i.pos[s*3+2]+=e[r+2]*t;const a=e[r+3]/e[r+4];i.alpha[s]=a>.75?(1-a)*4:a*1.33,i.size[s]=e[r+7]*(1+(1-a)*e[r+8]),s++}i.count=n,i.geo.attributes.position.needsUpdate=!0,i.geo.attributes.aSize.needsUpdate=!0,i.geo.attributes.aAlpha.needsUpdate=!0,i.geo.attributes.aColor.needsUpdate=!0,i.geo.setDrawRange(0,n)}function V_({scene:i}){const t=Sh(Mh,0,Ne),e=Sh(yh,1,Fi);t.dyn=new Float32Array(Mh*10),e.dyn=new Float32Array(yh*10);const n=new ja(t.geo,t.mat),s=new ja(e.geo,e.mat);n.frustumCulled=!1,s.frustumCulled=!1,i.add(n,s);const r=[],o=new uo(.62,1,42);for(let m=0;m<ra;m++){const d=new St(o,new me({color:14679286,transparent:!0,opacity:0,side:ye,blending:Ne,depthWrite:!1}));d.rotation.x=-Math.PI/2,d.visible=!1,i.add(d),r.push({m:d,t:0,dur:0,from:0,to:1})}const a=[],l=new Le(1,10,8);for(let m=0;m<oa;m++){const d=new St(l,new me({color:16773832,transparent:!0,opacity:0,blending:Ne,depthWrite:!1}));d.visible=!1,i.add(d),a.push({m:d,t:0,dur:0,from:0,to:1})}let c=0,u=0;function f(m,d,M,_,v,w){const b=r[c++%ra];b.m.position.set(m,d+.06,M),b.m.material.color.setHex(w),b.t=0,b.dur=v,b.from=.4,b.to=_,b.m.visible=!0}function p(m,d,M,_,v,w){const b=a[u++%oa];b.m.position.set(m,d,M),b.m.material.color.setHex(w),b.t=0,b.dur=v,b.from=_*.3,b.to=_,b.m.visible=!0}const h={spray(m,d,M=1,_=.4){const v=Math.min(16,Math.round(5*M)+2);for(let w=0;w<v;w++){const b=Math.sin(w*12.9898+m.x)*43758.5453%1,T=Math.sin(w*78.233+m.z)*12543.221%1,P=Math.sin(w*39.425+m.y*3.1)*2621.447%1,y=2.5+Math.abs(T)*4.5*M;je(t,m.x,m.y,m.z,d.x*y+b*_*y,1.4+Math.abs(T)*2.6*M,d.z*y+P*_*y,.35+Math.abs(P)*.4,.5+Math.abs(b)*.5,.82,.96,.98,9,.6,.4)}},splash(m,d=1){const M=Math.min(2.4,d),_=Math.min(48,Math.round(11*M)+8);for(let v=0;v<_;v++){const w=v/_*Math.PI*2+m.x,b=2+v%5*.9*M;je(t,m.x+Math.cos(w)*.5,m.y+.1,m.z+Math.sin(w)*.5,Math.cos(w)*b,2.2+v%4*1.2*M,Math.sin(w)*b,.5+v%3*.2,.7+v%3*.35,.92,.99,1,10,.8,.6)}if(M>1.05){const v=(M-1.05)/1.35,w=Math.min(34,Math.round(16+18*v));for(let b=0;b<w;b++){const T=b*2.399963+m.z,P=b%4*.34*(.5+v),y=5.5+b%7*1.15*(.45+v);je(t,m.x+Math.cos(T)*P,m.y+.15,m.z+Math.sin(T)*P,Math.cos(T)*(.8+b%3*.5),y,Math.sin(T)*(.8+b%3*.5),.7+b%4*.18,.9+b%3*.5+v*.6,.97,.995,1,11,.35,.5)}for(let b=0;b<Math.min(12,4+6*v);b++){const T=b*1.9+m.x;je(e,m.x+Math.cos(T)*(.7+b%3*.5),m.y,m.z+Math.sin(T)*(.7+b%3*.5),Math.cos(T)*1.1,1.6+v*1.6,Math.sin(T)*1.1,1.1+b%4*.3,2.6+v*2.4,.95,.97,.98,.3,1.3,2.6)}}for(let v=0;v<Math.min(10,Math.round(3.2*M));v++){const w=v*2.4+m.z;je(e,m.x+Math.cos(w)*.8,m.y,m.z+Math.sin(w)*.8,Math.cos(w)*.8,.7,Math.sin(w)*.8,.9+v%3*.3,2.2+M,.94,.97,.98,.4,1.6,2.2)}f(m.x,m.y,m.z,1.9*M+1.7,.55+.35*M,15400954)},explosion(m,d=1){p(m.x,m.y+.4,m.z,2.6*d,.28,16771496),f(m.x,m.y,m.z,5.5*d+2,.9,16767392);const M=Math.round(26*Math.min(1.6,d));for(let _=0;_<M;_++){const v=_*2.399963,w=_%7/7,b=(4+_%6*2.4)*d,T=_%3===0;je(t,m.x,m.y+.3,m.z,Math.cos(v)*b,1.5+w*7*d,Math.sin(v)*b,.5+w*.5,.8+_%3*.5,T?1:.98,T?.75:.45,T?.3:.12,7,1.2,.3)}for(let _=0;_<Math.round(9*Math.min(1.6,d));_++){const v=_*1.7+m.x;je(e,m.x+Math.cos(v)*.6,m.y+.5,m.z+Math.sin(v)*.6,Math.cos(v)*1.2,1.6+_%3,Math.sin(v)*1.2,1.3+_%4*.4,2.6*d+1,.16,.15,.16,-.6,1.2,2.4)}for(let _=0;_<8;_++){const v=_*.785+m.z*.1;je(t,m.x,m.y+.2,m.z,Math.cos(v)*(6+_%4*3),5+_%5*2,Math.sin(v)*(6+_%4*3),1.1,.55,.32,.3,.28,12,.25,.1)}},muzzle(m,d){p(m.x,m.y,m.z,1.05,.13,15400953);for(let M=0;M<6;M++){const _=(M+1)*.37;je(t,m.x,m.y,m.z,d.x*(9+M*3.4)+Math.sin(_*91)*1.4,.4+Math.sin(_*47)*.8,d.z*(9+M*3.4)+Math.cos(_*63)*1.4,.2,.55+M%2*.25,.82,1,.97,2,2.2,0)}},hitSpark(m,d=16765066){const M=g.setHex(d);p(m.x,m.y,m.z,.55,.1,d);for(let _=0;_<9;_++){const v=_*.7+m.y,w=3+_%4*2.2;je(t,m.x,m.y,m.z,Math.cos(v)*w,1+_%3*1.6,Math.sin(v)*w,.24+_%3*.08,.45,M.r,M.g,M.b,8,1.5,.1)}},pickupBurst(m,d=448194){const M=g.setHex(d);p(m.x,m.y,m.z,1,.22,d),f(m.x,m.y,m.z,3.2,.7,d);for(let _=0;_<16;_++){const v=_/16*Math.PI*2,w=2.5+_%4*1.4;je(t,m.x,m.y+.2,m.z,Math.cos(v)*w,2.4+_%5*.9,Math.sin(v)*w,.55,.55,M.r,M.g,M.b,5,1.1,.2)}for(let _=0;_<4;_++)je(e,m.x,m.y+.3,m.z,0,1.1,0,.8,1.6,M.r*.7+.3,M.g*.7+.3,M.b*.7+.3,-.3,1.2,2)},boostFlame(m,d,M=1){for(let _=0;_<2;_++){const v=_*.5+m.x*.1;je(t,m.x,m.y,m.z,d.x*(7+Math.sin(v*97)*2),.6+Math.sin(v*53)*.5,d.z*(7+Math.cos(v*71)*2),.2+.1*M,.7*M+.3,_?1:.45,_?.8:.95,_?.35:.9,0,2.5,.4)}x&&je(e,m.x,m.y,m.z,d.x*2.5,.5,d.z*2.5,.5,1.3,.5,.42,.4,-.4,1.4,2.4),x=!x},confetti(m){const d=[[.06,.9,.8],[1,.82,.4],[1,1,1],[.95,.28,.44]];for(let M=0;M<70;M++){const _=M*.4488,v=d[M&3],w=3+M%7*2.2;je(t,m.x,m.y+1,m.z,Math.cos(_)*w,5+M%9*1.3,Math.sin(_)*w,1.5+M%5*.3,.5,v[0],v[1],v[2],4.5,.5,.2)}},update(m,d){bh(t,m),bh(e,m);for(let M=0;M<ra;M++){const _=r[M];if(!_.m.visible)continue;_.t+=m;const v=_.t/_.dur;if(v>=1){_.m.visible=!1,_.m.material.opacity=0;continue}const w=_.from+(_.to-_.from)*(1-Math.pow(1-v,2.2));_.m.scale.setScalar(w),_.m.material.opacity=.55*(1-v)*(1-v)}for(let M=0;M<oa;M++){const _=a[M];if(!_.m.visible)continue;_.t+=m;const v=_.t/_.dur;if(v>=1){_.m.visible=!1,_.m.material.opacity=0;continue}const w=_.from+(_.to-_.from)*Math.sin(Math.min(1,v*1.25)*Math.PI*.5);_.m.scale.setScalar(w),_.m.material.opacity=(1-v)*.9}}},g=new Dt;let x=!1;return h}const wh=2*Math.PI*26;function W_(i){const t=Math.floor(i/60),e=Math.floor(i%60),n=Math.floor(i*10%10);return`${t}:${String(e).padStart(2,"0")}.${n}`}function X_(i){const t=document.createElement("div");t.className="tb-hud",t.innerHTML=`
    <div class="tb-vignette"></div>
    <div class="tb-pickupflash"></div>
    <div class="tb-hitmarker"><i></i><i></i><i></i><i></i></div>

    <div class="tb-top">
      <div class="tb-panel tb-gatebox">
        <div class="tb-gate-label">GATE <span class="tb-gate-n">1</span>/<span class="tb-gate-t">18</span></div>
        <div class="tb-routebar"><div class="tb-routefill"></div></div>
        <div class="tb-gate-dist">NEXT <span class="tb-dist">120</span> M</div>
      </div>
    </div>

    <div class="tb-tr">
      <div class="tb-panel tb-timer">
        <div class="tb-time">0:00.0</div>
        <div class="tb-kills">KILLS <span class="tb-kills-n">00</span></div>
      </div>
    </div>

    <div class="tb-bl">
      <div class="tb-panel tb-boat">
        <div class="tb-speedbox">
          <div class="tb-speed">0</div>
          <div class="tb-kts">KTS</div>
          <svg class="tb-shieldring" viewBox="0 0 64 64">
            <circle class="sbg" cx="32" cy="32" r="26"/>
            <circle class="sfg" cx="32" cy="32" r="26"/>
          </svg>
        </div>
        <div class="tb-bars">
          <div class="tb-barlabel">BOOST</div>
          <div class="tb-bar tb-boost"><div class="tb-boostfill"></div></div>
          <div class="tb-barlabel">HULL</div>
          <div class="tb-bar tb-hp"><div class="tb-hpfill"></div></div>
        </div>
        <div class="tb-weapon">SINGLE SHOT</div>
      </div>
    </div>

    <div class="tb-br">
      <div class="tb-hint">
        <b>W/S</b> throttle &nbsp;<b>A/D</b> steer &nbsp;<b>SPACE</b> fire &nbsp;<b>SHIFT</b> boost
        &nbsp;<b>R</b> restart &nbsp;<b>P</b> pause &nbsp;<b>H</b> hud &nbsp;<b>M</b> mute
      </div>
    </div>

    <div class="tb-countdown"></div>
    <div class="tb-banner"><div class="tb-banner-main"></div><div class="tb-banner-sub"></div></div>
  `,i.appendChild(t);const e=C=>t.querySelector(C),n={gateN:e(".tb-gate-n"),gateT:e(".tb-gate-t"),dist:e(".tb-dist"),routeFill:e(".tb-routefill"),time:e(".tb-time"),kills:e(".tb-kills-n"),speed:e(".tb-speed"),boostFill:e(".tb-boostfill"),hpFill:e(".tb-hpfill"),hpBar:e(".tb-hp"),weapon:e(".tb-weapon"),shieldRing:t.querySelector(".tb-shieldring"),shieldFg:e(".sfg"),banner:e(".tb-banner"),bannerMain:e(".tb-banner-main"),bannerSub:e(".tb-banner-sub"),countdown:e(".tb-countdown"),vignette:e(".tb-vignette"),hitmarker:e(".tb-hitmarker"),pickupflash:e(".tb-pickupflash"),hint:e(".tb-hint")};n.gateT.textContent=Ae.length+1,n.shieldFg.style.strokeDasharray=wh;const s={},r=(C,F,O)=>{s[F]!==O&&(s[F]=O,C.textContent=O)};let o=0,a=0,l="",c=!1,u=!1,f=new URLSearchParams(location.search).get("hud")!=="0";const p=!f;let h=!1;const g=[];let x=!1;function m(){if(x||g.length===0)return;const C=g.shift();x=!0,n.bannerMain.textContent=C.text,n.bannerSub.textContent=C.sub||"",n.banner.classList.remove("on"),n.banner.offsetWidth,n.banner.classList.add("on"),clearTimeout(a),a=setTimeout(()=>{n.banner.classList.remove("on"),x=!1,m()},C.ms||2e3)}function d(C,F="",O=2e3){g.length=0,clearTimeout(a),x=!1,g.push({text:C,sub:F,ms:O}),m()}function M(C){n.countdown.textContent=C===0?"GO":String(C),n.countdown.classList.toggle("go",C===0),n.countdown.classList.remove("on"),n.countdown.offsetWidth,n.countdown.classList.add("on")}let _=0,v=0,w=0;function b(){n.vignette.classList.remove("on"),n.vignette.offsetWidth,n.vignette.classList.add("on"),clearTimeout(_),_=setTimeout(()=>n.vignette.classList.remove("on"),380)}function T(){n.hitmarker.classList.remove("on"),n.hitmarker.offsetWidth,n.hitmarker.classList.add("on"),clearTimeout(v),v=setTimeout(()=>n.hitmarker.classList.remove("on"),220)}function P(C){const F={boost:"#ffd166",shield:"#06d6c2",double:"#ff5fd0"}[C]||"#06d6c2";n.pickupflash.style.setProperty("--pk",F),n.pickupflash.classList.remove("on"),n.pickupflash.offsetWidth,n.pickupflash.classList.add("on"),clearTimeout(w),w=setTimeout(()=>n.pickupflash.classList.remove("on"),520)}Pn("gate",C=>{const F=C.total||Ae.length+1;C.index===F-1?d("FINAL GATE","finish arch ahead",2400):d(`GATE ${C.index}/${F}`,"",1500)}),Pn("pickup",C=>{P(C.kind),C.kind==="shield"&&d("SHIELD UP","absorbs everything — 8 s",1800),C.kind==="double"&&d("DOUBLE SHOT","twin bolts — 20 s",1800),C.kind==="boost"&&d("BOOST +50%","",1100)}),Pn("playerHit",b),Pn("shieldBreak",()=>P("shield")),Pn("enemyHit",T),Pn("enemyKilled",T);function y(C,F){if(t.classList.toggle("tb-off",!f),t.classList.toggle("tb-menu",F==="menu"||F==="boot"),F!==l&&(F==="race"&&l!=="countdown"&&(o=performance.now()),F==="countdown"&&(o=performance.now()),F==="menu"&&(c=!1,u=!1),l=F),!f)return;r(n.speed,"spd",String(Math.round(C.speedKts)));const O=Math.max(0,Math.min(1,C.boost));s.boost!==O&&(s.boost=O,n.boostFill.style.width=`${(O*100).toFixed(1)}%`),n.boostFill.classList.toggle("low",O<.15);const q=Math.max(0,Math.min(1,C.hp/C.maxHp));s.hp!==q&&(s.hp=q,n.hpFill.style.width=`${(q*100).toFixed(1)}%`,n.hpBar.classList.toggle("crit",q<.3),n.hpBar.classList.toggle("warn",q>=.3&&q<.6));const B=Math.max(0,Math.min(1,C.shieldT/8));s.sh!==B&&(s.sh=B,n.shieldRing.classList.toggle("on",B>0),n.shieldFg.style.strokeDashoffset=wh*(1-B));const Q=C.weapon==="double"?C.weaponT>0?`DOUBLE ×${Math.ceil(C.weaponT)}s`:"DOUBLE":"SINGLE SHOT";r(n.weapon,"w",Q),n.weapon.classList.toggle("dbl",C.weapon==="double");const L=Math.min(C.gateIndex+1,C.gatesTotal);r(n.gateN,"gn",String(L)),s.route!==C.gateIndex&&(s.route=C.gateIndex,n.routeFill.style.width=`${C.gateIndex/C.gatesTotal*100}%`);const G=C.gateIndex<Ae.length?Ae[C.gateIndex].pos:Ue.pos,X=G.x-C.pos.x,tt=G.z-C.pos.z;r(n.dist,"dist",String(Math.round(Math.hypot(X,tt)/10)*10)),r(n.time,"time",W_(C.raceTime)),r(n.kills,"kills",String(C.enemiesDown).padStart(2,"0"));const ut=o?(performance.now()-o)/1e3:0;if(n.hint.classList.toggle("faded",ut>12),F==="race"&&C.phase==="racing"){const J=Tt=>Math.hypot(Tt.x-C.pos.x,Tt.z-C.pos.z);!c&&C.gateIndex===10&&J(Ae[10].pos)<230&&(c=!0,d("CAVE AHEAD — HOLD THROTTLE","through The Fang",2600)),!u&&C.gateIndex===12&&J(Ae[12].pos)<260&&(u=!0,d("THE SPILLWAY — FULL BOOST!","send it",2600))}}function S(C){p&&!h&&C||(f=C)}function D(){h=!0,f=!f}return{update:y,banner:d,countdown:M,flashDamage:b,hitmarker:T,flashPickup:P,setVisibility:S,toggleVisibility:D,get _visible(){return f},set _visible(C){f=C}}}const ki={high:{pixelRatioCap:2,shadows:!0,shadowSize:2048,bloom:!0,oceanSeg:384,terrainRes:[640,1024],particles:1},medium:{pixelRatioCap:1.5,shadows:!0,shadowSize:1024,bloom:!0,oceanSeg:256,terrainRes:[448,768],particles:.7},low:{pixelRatioCap:1,shadows:!1,shadowSize:512,bloom:!1,oceanSeg:160,terrainRes:[320,512],particles:.4}};function q_(){const i=document.createElement("canvas").getContext("webgl2");if(!i)return"low";const t=i.getExtension("WEBGL_debug_renderer_info"),e=t?i.getParameter(t.UNMASKED_RENDERER_WEBGL):"";return/swiftshader|software|llvmpipe/i.test(String(e))?"low":"high"}function Y_(i){const t=Math.floor(i/60),e=Math.floor(i%60),n=Math.floor(i*10%10);return`${t}:${String(e).padStart(2,"0")}.${n}`}const Z_=`
<svg class="tb-wavesvg" viewBox="0 0 360 34" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
  <path d="M4 22 C 40 6, 70 30, 110 16 S 180 4, 220 20 S 300 30, 356 10"
        stroke="url(#tb-wgrad)" stroke-width="5" stroke-linecap="round"/>
  <path d="M14 30 C 60 18, 100 34, 150 24 S 260 14, 346 26"
        stroke="#06d6c2" stroke-opacity="0.45" stroke-width="3" stroke-linecap="round"/>
  <defs><linearGradient id="tb-wgrad" x1="0" x2="360" y1="0" y2="0">
    <stop stop-color="#9ffef7"/><stop offset="0.55" stop-color="#06d6c2"/>
    <stop offset="1" stop-color="#ffd166"/>
  </linearGradient></defs>
</svg>`;function $_(i,t){let e="high",n=null;const s=document.createElement("div");s.className="tb-screens",s.innerHTML=`
    <div class="tb-screen tb-start" hidden>
      <div class="tb-panel tb-startpanel">
        <div class="tb-logo">
          <div class="tb-logo-word">TIDEBREAKER</div>
          ${Z_}
          <div class="tb-logo-sub">CORAL RUN</div>
        </div>
        <div class="tb-controls">
          <span><b>W / S</b> throttle</span><span><b>A / D</b> steer</span>
          <span><b>SPACE</b> fire</span><span><b>SHIFT</b> boost</span>
          <span><b>R</b> restart</span><span><b>P</b> pause</span>
          <span><b>H</b> hud</span><span><b>M</b> mute</span>
        </div>
        <button class="tb-btn tb-primary tb-startrun">START RUN<span class="tb-enter">ENTER</span></button>
        <div class="tb-row">
          <div class="tb-quality" data-q="start"></div>
          <div class="tb-seed"></div>
        </div>
        <div class="tb-shortcut" hidden></div>
      </div>
    </div>

    <div class="tb-screen tb-pause" hidden>
      <div class="tb-panel tb-pausepanel">
        <div class="tb-title">PAUSED</div>
        <button class="tb-btn tb-primary tb-resume">RESUME</button>
        <div class="tb-row tb-prow">
          <button class="tb-btn tb-restart">RESTART</button>
          <button class="tb-btn tb-menu-btn">MENU</button>
        </div>
        <div class="tb-row">
          <div class="tb-quality" data-q="pause"></div>
          <button class="tb-btn tb-mute"></button>
          <div class="tb-seed tb-pauseseed"></div>
        </div>
      </div>
    </div>

    <div class="tb-screen tb-win" hidden>
      <div class="tb-panel tb-winpanel">
        <div class="tb-title tb-good">RUN COMPLETE</div>
        <div class="tb-stats">
          <div class="tb-stat"><span class="tb-stat-v tb-timev">0:00.0</span><span class="tb-stat-l">TIME</span></div>
          <div class="tb-stat"><span class="tb-stat-v tb-killv">0</span><span class="tb-stat-l">ENEMIES DOWN</span></div>
          <div class="tb-stat"><span class="tb-stat-v tb-gatev">18/18</span><span class="tb-stat-l">GATES</span></div>
        </div>
        <button class="tb-btn tb-primary tb-restart">RESTART<span class="tb-enter">R</span></button>
        <div class="tb-seed"></div>
      </div>
    </div>

    <div class="tb-screen tb-lose" hidden>
      <div class="tb-panel tb-losepanel">
        <div class="tb-title tb-bad">BOAT DOWN</div>
        <div class="tb-stats">
          <div class="tb-stat"><span class="tb-stat-v tb-gatev">0/18</span><span class="tb-stat-l">GATES REACHED</span></div>
          <div class="tb-stat"><span class="tb-stat-v tb-killv">0</span><span class="tb-stat-l">ENEMIES DOWN</span></div>
        </div>
        <button class="tb-btn tb-primary tb-restart">RETRY<span class="tb-enter">R</span></button>
        <div class="tb-seed"></div>
      </div>
    </div>
  `,i.appendChild(s);const r=p=>s.querySelector(p),o={start:r(".tb-start"),pause:r(".tb-pause"),win:r(".tb-win"),lose:r(".tb-lose"),startBtn:r(".tb-startrun"),resume:r(".tb-resume"),restarts:s.querySelectorAll(".tb-restart"),menuBtn:r(".tb-menu-btn"),muteBtn:r(".tb-mute"),qualityBlocks:s.querySelectorAll(".tb-quality"),seeds:s.querySelectorAll(".tb-seed"),shortcut:r(".tb-shortcut"),timev:r(".tb-win .tb-timev"),killvs:s.querySelectorAll(".tb-killv"),gatevs:s.querySelectorAll(".tb-gatev")},a=p=>h=>{yn("uiClick",{}),p(h)};o.startBtn.addEventListener("click",a(()=>t.onStart())),o.resume.addEventListener("click",a(()=>t.onResume())),o.menuBtn.addEventListener("click",a(()=>t.onQuitToMenu())),o.restarts.forEach(p=>p.addEventListener("click",a(()=>t.onRestart()))),o.muteBtn.addEventListener("click",a(()=>t.onToggleMute()));function l(p){p.innerHTML="";for(const h of Object.keys(ki)){const g=document.createElement("button");g.className="tb-qopt tb-clickable",g.dataset.name=h,g.textContent=h.toUpperCase(),g.addEventListener("click",a(()=>{e=h,c(),t.onQualityChange(h)})),p.appendChild(g)}}o.qualityBlocks.forEach(l);function c(){o.qualityBlocks.forEach(p=>{p.querySelectorAll(".tb-qopt").forEach(h=>{h.classList.toggle("active",h.dataset.name===e)})})}function u(p){o.muteBtn.textContent=p?"SOUND: OFF":"SOUND: ON",o.muteBtn.classList.toggle("off",p)}window.addEventListener("keydown",p=>{p.code==="Enter"&&n==="start"&&(yn("uiClick",{}),t.onStart())});function f(p,h={}){n=p,o.start.hidden=p!=="start",o.pause.hidden=p!=="pause",o.win.hidden=p!=="win",o.lose.hidden=p!=="lose",s.classList.toggle("any",!!p),p&&(h.seed!==void 0&&o.seeds.forEach(g=>{g.textContent=`SEED ${h.seed}`}),p==="start"?(o.shortcut.hidden=!h.startMode,h.startMode&&(o.shortcut.textContent=`SHORTCUT ?start=${h.startMode} — run will begin from ${h.startMode.toUpperCase()}`),h.muted!==void 0&&u(h.muted),h.qualityName&&(e=h.qualityName),c()):p==="pause"?(u(!!h.muted),h.qualityName&&(e=h.qualityName),c()):p==="win"?(o.timev.textContent=Y_(h.time||0),o.killvs.forEach(g=>{g.textContent=String(h.enemiesDown||0)}),o.win.querySelector(".tb-gatev").textContent=`${h.gates||18}/${h.gates||18}`):p==="lose"&&(o.lose.querySelector(".tb-gatev").textContent=`${h.gates||0}/${h.gatesTotal||18}`,o.lose.querySelector(".tb-killv").textContent=String(h.enemiesDown||0)))}return{show:f,setQualityOptions(p){p&&ki[p]&&(e=p),c()}}}const Eh=i=>()=>(i=Math.imul(i,1664525)+1013904223>>>0)/4294967296;class K_{constructor(){this.ready=!1,this.muted=!1,this.ctx=null,this._unsubClick=null,this._eng={rpm01:0,load:0,boost:!1,on:!1},this._cave=0}unlock(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}const t=typeof globalThis.AudioContext<"u"&&globalThis.AudioContext||typeof window<"u"&&window.webkitAudioContext;if(!t)return;const e=this.ctx=new t;this.rand=Eh(6221057),this._limiter=e.createDynamicsCompressor(),this._limiter.threshold.value=-10,this._limiter.knee.value=18,this._limiter.ratio.value=12,this._limiter.attack.value=.003,this._limiter.release.value=.2,this._limiter.connect(e.destination),this.master=e.createGain(),this.master.gain.value=this.muted?0:.85,this.master.connect(this._limiter),this._caveLP=e.createBiquadFilter(),this._caveLP.type="lowpass",this._caveLP.frequency.value=2e4,this._caveLP.Q.value=.3,this._caveLP.connect(this.master),this.bus=e.createGain(),this.bus.connect(this._caveLP),this._delay=e.createDelay(.6),this._delay.delayTime.value=.14,this._fb=e.createGain(),this._fb.gain.value=.32,this._echoWet=e.createGain(),this._echoWet.gain.value=0,this.bus.connect(this._delay),this._delay.connect(this._fb),this._fb.connect(this._delay),this._delay.connect(this._echoWet),this._echoWet.connect(this._caveLP);const n=e.sampleRate*2,s=e.createBuffer(1,n,e.sampleRate),r=s.getChannelData(0),o=Eh(659918);for(let a=0;a<n;a++)r[a]=o()*2-1;this._noiseBuf=s,this._eng.on&&this.startEngine(),this._amb&&this.startAmbience(),this._applyCave(),this.ready=!0,this._unsubClick||(this._unsubClick=Pn("uiClick",()=>this.uiClick()))}setMuted(t){this.muted=t,this.master&&this.master.gain.setTargetAtTime(t?0:.85,this.now(),.02)}now(){return this.ctx?this.ctx.currentTime:0}_src(t){const e=this.ctx.createBufferSource();return e.buffer=t||this._noiseBuf,e.loop=!0,e}startEngine(){if(!this.ctx){this._eng.on=!0;return}if(this._engNodes){this._engNodes.gain.gain.setTargetAtTime(.5,this.now(),.1);return}const t=this.ctx,e=this.now(),n={};n.oscA=t.createOscillator(),n.oscA.type="sawtooth",n.oscA.frequency.value=55,n.oscB=t.createOscillator(),n.oscB.type="square",n.oscB.frequency.value=84,n.oscB.detune.value=6,n.filter=t.createBiquadFilter(),n.filter.type="lowpass",n.filter.frequency.value=500,n.filter.Q.value=1.1,n.gain=t.createGain(),n.gain.gain.value=0,n.oscA.connect(n.filter),n.oscB.connect(n.filter),n.filter.connect(n.gain),n.gain.connect(this.bus),n.noise=this._src(),n.noiseF=t.createBiquadFilter(),n.noiseF.type="bandpass",n.noiseF.frequency.value=900,n.noiseF.Q.value=.8,n.noiseG=t.createGain(),n.noiseG.gain.value=0,n.noise.connect(n.noiseF),n.noiseF.connect(n.noiseG),n.noiseG.connect(n.gain),n.boostOsc=t.createOscillator(),n.boostOsc.type="sawtooth",n.boostOsc.frequency.value=190,n.boostG=t.createGain(),n.boostG.gain.value=0,n.boostOsc.connect(n.boostG),n.boostG.connect(n.gain),n.boostNoise=this._src(),n.bnf=t.createBiquadFilter(),n.bnf.type="highpass",n.bnf.frequency.value=2600,n.bnG=t.createGain(),n.bnG.gain.value=0,n.boostNoise.connect(n.bnf),n.bnf.connect(n.bnG),n.bnG.connect(n.gain),n.gain.gain.setTargetAtTime(.5,e,.15),this._engNodes=n,this.setEngine(this._eng.rpm01,this._eng.load,this._eng.boost)}stopEngine(){this._eng.on=!1;const t=this._engNodes;if(!t)return;const e=this.now();t.gain.gain.setTargetAtTime(0,e,.12),setTimeout(()=>{try{t.oscA.stop(),t.oscB.stop(),t.noise.stop(),t.boostOsc.stop(),t.boostNoise.stop()}catch{}this._engNodes===t&&(this._engNodes=null)},700)}setEngine(t,e,n){const s=this._eng;s.rpm01=t,s.load=e,s.boost=n;const r=this._engNodes;if(!r)return;const o=this.now(),a=.06,l=48+t*135;r.oscA.frequency.setTargetAtTime(l,o,a),r.oscB.frequency.setTargetAtTime(l*1.503,o,a),r.boostOsc.frequency.setTargetAtTime(150+t*210,o,a),r.filter.frequency.setTargetAtTime(320+e*1100+t*900,o,a),r.noiseF.frequency.setTargetAtTime(600+t*1500,o,a),r.noiseG.gain.setTargetAtTime(.025+e*.1+t*.05,o,a),r.boostG.gain.setTargetAtTime(n?.16:0,o,.08),r.bnG.gain.setTargetAtTime(n?.09:0,o,.08)}startAmbience(){if(!this.ctx){this._amb=!0;return}if(this._ambNodes)return;const t=this.ctx,e=this.now(),n={};n.waves=this._src(),n.wf=t.createBiquadFilter(),n.wf.type="lowpass",n.wf.frequency.value=420,n.wg=t.createGain(),n.wg.gain.value=.05,n.lfo=t.createOscillator(),n.lfo.frequency.value=.11,n.lfoG=t.createGain(),n.lfoG.gain.value=.03,n.lfo.connect(n.lfoG),n.lfoG.connect(n.wg.gain),n.waves.connect(n.wf),n.wf.connect(n.wg),n.wg.connect(this.bus),n.wind=this._src(),n.nf=t.createBiquadFilter(),n.nf.type="bandpass",n.nf.frequency.value=1500,n.nf.Q.value=.5,n.ng=t.createGain(),n.ng.gain.value=.016,n.wind.connect(n.nf),n.nf.connect(n.ng),n.ng.connect(this.bus),n.waves.start(e),n.wind.start(e),n.lfo.start(e),this._ambNodes=n}setWaterfall(t){const e=Math.max(0,Math.min(1,t));if(this._wf=e,!!this.ctx){if(!this._wfNodes&&e>0){const n=this.ctx,s={};s.src=this._src(),s.lp=n.createBiquadFilter(),s.lp.type="lowpass",s.lp.frequency.value=750,s.lp.Q.value=.4,s.g=n.createGain(),s.g.gain.value=0,s.src.connect(s.lp),s.lp.connect(s.g),s.g.connect(this.bus),s.src.start(this.now()),this._wfNodes=s}this._wfNodes&&this._wfNodes.g.gain.setTargetAtTime(e*.22,this.now(),.25)}}setCave(t){this._cave=t,this._applyCave()}_applyCave(){if(!this.ctx)return;const t=Math.max(0,Math.min(1,this._cave)),e=this.now();this._caveLP.frequency.setTargetAtTime(2e4-t*19e3,e,.1),this._echoWet.gain.setTargetAtTime(t*.35,e,.1)}_blip(t,e,n,s,r,o,a){const l=this.ctx,c=l.createOscillator(),u=l.createGain();c.type=t,c.frequency.setValueAtTime(e,s),n!==e&&c.frequency.exponentialRampToValueAtTime(Math.max(1,n),s+r),u.gain.setValueAtTime(1e-4,s),u.gain.linearRampToValueAtTime(o,s+Math.min(.02,r*.3)),u.gain.exponentialRampToValueAtTime(1e-4,s+r),c.connect(u),u.connect(a||this.bus),c.start(s),c.stop(s+r+.05),c.onended=()=>{u.disconnect()}}_noiseShot(t,e,n,s,r,o,a=1){const l=this.ctx,c=l.createBufferSource();c.buffer=this._noiseBuf,c.loop=!0;const u=l.createBiquadFilter();u.type=n,u.Q.value=a,u.frequency.setValueAtTime(s,t),r&&r!==s&&u.frequency.exponentialRampToValueAtTime(Math.max(20,r),t+e);const f=l.createGain();f.gain.setValueAtTime(1e-4,t),f.gain.linearRampToValueAtTime(o,t+Math.min(.015,e*.25)),f.gain.exponentialRampToValueAtTime(1e-4,t+e),c.connect(u),u.connect(f),f.connect(this.bus),c.start(t),c.stop(t+e+.05),c.onended=()=>{f.disconnect()}}fire(){if(!this.ready)return;const t=this.now();this._blip("square",220,70,t,.09,.16),this._noiseShot(t,.07,"bandpass",2400,900,.14,.9)}enemyFire(t){if(!this.ready)return;const e=Math.max(0,1-t/300)*.7;if(e<=.02)return;const n=this.now();this._blip("square",150,55,n,.1,.1*e),this._noiseShot(n,.08,"bandpass",1300,500,.08*e,1)}explosion(t,e=1){if(!this.ready)return;const n=Math.max(.05,1-t/420)*Math.min(1.4,.8+e*.4),s=this.now(),r=this.rand;this._blip("sine",110*e,26,s,.5,.5*n),this._noiseShot(s,.45,"lowpass",900,160,.4*n);for(let o=0;o<4;o++){const a=.06+r()*.3;this._noiseShot(s+a,.05,"bandpass",1800+r()*2500,800,.09*n,2)}}pickup(t){if(!this.ready)return;const e=this.now(),n={boost:{f:[523,659,784,1046],type:"triangle",g:.12},shield:{f:[392,494,587,784],type:"sine",g:.13},double:{f:[440,554,659,880],type:"square",g:.07}}[t]||{f:[523,784],type:"sine",g:.1};n.f.forEach((s,r)=>this._blip(n.type,s,s,e+r*.07,.16,n.g))}shieldUp(){if(!this.ready)return;const t=this.now();this._blip("sine",300,900,t,.3,.14),this._blip("triangle",600,1800,t+.05,.25,.08)}shieldBreak(){if(!this.ready)return;const t=this.now();this._noiseShot(t,.3,"bandpass",3200,600,.2,1.4),this._blip("sawtooth",700,180,t,.28,.1)}hitPlayer(){if(!this.ready)return;const t=this.now();this._blip("sine",105,48,t,.14,.3),this._noiseShot(t,.05,"bandpass",700,300,.12)}hitEnemy(){if(!this.ready)return;const t=this.now();this._blip("triangle",1350,900,t,.05,.09),this._noiseShot(t,.03,"highpass",4e3,4e3,.05)}gatePass(){if(!this.ready)return;const t=this.now();this._noiseShot(t,.35,"bandpass",500,3200,.1,.8),this._blip("sine",880,880,t+.05,.18,.1),this._blip("sine",1320,1320,t+.12,.22,.09)}finishFanfare(){if(!this.ready)return;const t=this.now();[523,659,784,1046,1318].forEach((n,s)=>{this._blip("triangle",n,n,t+s*.11,.3,.13),this._blip("sawtooth",n/2,n/2,t+s*.11,.3,.045)}),this._blip("sine",1046,1046,t+.6,.9,.11)}failSting(){if(!this.ready)return;const t=this.now();[392,311,262,196].forEach((e,n)=>this._blip("sawtooth",e,e*.97,t+n*.17,.34,.11)),this._blip("sine",90,30,t,.8,.3)}countdownBeep(t){if(!this.ready)return;const e=this.now();this._blip("square",(t>0,480),t>0?480:460,e,t>0?.09:.12,.09)}go(){if(!this.ready)return;const t=this.now();this._blip("square",720,720,t,.22,.13),this._blip("square",960,960,t+.02,.2,.07),this._noiseShot(t,.2,"bandpass",800,3e3,.08)}splash(t=1){if(!this.ready)return;const e=Math.min(1.6,t),n=this.now();this._noiseShot(n,.3+e*.2,"lowpass",1400,300,.16*e)}land(t=1){if(!this.ready)return;const e=Math.min(1.6,t),n=this.now();this._blip("sine",90,38,n,.22,.3*e),this.splash(e)}uiClick(){if(!this.ready||this.muted)return;const t=this.now();this._blip("sine",1700,1400,t,.04,.06)}}class J_{constructor(t){this.bus=t,this.throttle=0,this.brake=0,this.steer=0,this.fireHeld=!1,this.firePressed=!1,this.boostHeld=!1,this.boostPressed=!1,this._down=new Set,this._enabled=!1,this._onKeyDown=e=>{if(e.repeat){e.preventDefault();return}const n=e.code;this._enabled,this._down.add(n),n==="Space"&&(this.firePressed=!0,e.preventDefault()),(n==="ShiftLeft"||n==="ShiftRight")&&(this.boostPressed=!0),n==="KeyH"&&this.bus.dispatchEvent(new CustomEvent("toggleHud")),n==="KeyR"&&this.bus.dispatchEvent(new CustomEvent("restart")),(n==="Escape"||n==="KeyP")&&this.bus.dispatchEvent(new CustomEvent("pauseToggle")),n==="KeyM"&&this.bus.dispatchEvent(new CustomEvent("toggleMute")),["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(n)&&e.preventDefault()},this._onKeyUp=e=>{this._down.delete(e.code)},this._onBlur=()=>{this._down.clear()}}attach(){window.addEventListener("keydown",this._onKeyDown),window.addEventListener("keyup",this._onKeyUp),window.addEventListener("blur",this._onBlur),this._enabled=!0}detach(){window.removeEventListener("keydown",this._onKeyDown),window.removeEventListener("keyup",this._onKeyUp),window.removeEventListener("blur",this._onBlur),this._enabled=!1}sample(){const t=this._down;this.throttle=t.has("KeyW")||t.has("ArrowUp")?1:0,this.brake=t.has("KeyS")||t.has("ArrowDown")?1:0;const e=t.has("KeyA")||t.has("ArrowLeft")?1:0,n=t.has("KeyD")||t.has("ArrowRight")?1:0;this.steer=n-e,this.fireHeld=t.has("Space"),this.boostHeld=t.has("ShiftLeft")||t.has("ShiftRight")}consumeFire(){const t=this.firePressed;return this.firePressed=!1,t}consumeBoost(){const t=this.boostPressed;return this.boostPressed=!1,t}postFrame(){this.firePressed=!1,this.boostPressed=!1}}function j_(){const i=new Mu({uniforms:{tDiffuse:{value:null},uVignette:{value:.32},uSaturation:{value:1.12},uContrast:{value:1.045},uLift:{value:[0,.004,.012]},uGain:{value:[1.02,1,.975]}},vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,fragmentShader:`
      uniform sampler2D tDiffuse;
      uniform float uVignette;
      uniform float uSaturation;
      uniform float uContrast;
      uniform vec3 uLift;
      uniform vec3 uGain;
      varying vec2 vUv;
      void main() {
        vec4 c = texture2D(tDiffuse, vUv);
        vec3 col = c.rgb * uGain + uLift;
        col = (col - 0.5) * uContrast + 0.5;
        float l = dot(col, vec3(0.2126, 0.7152, 0.0722));
        col = mix(vec3(l), col, uSaturation);
        vec2 d = vUv - 0.5;
        float vig = smoothstep(0.85, 0.32, length(d) * 1.35);
        col *= mix(1.0 - uVignette, 1.0, vig);
        gl_FragColor = vec4(clamp(col, 0.0, 1.0), c.a);
      }`});return i.name="Grade",i}const vi=new URLSearchParams(location.search),dr=Number(vi.get("seed"))||mo,hs=vi.get("start")&&il[vi.get("start")]?vi.get("start"):null;let Hi=vi.get("quality")&&ki[vi.get("quality")]?vi.get("quality"):q_(),ps=vi.get("mute")==="1";const Q_=document.getElementById("app"),En=new Rv({antialias:!0,powerPreference:"high-performance"});En.outputColorSpace=Ge;En.toneMapping=al;En.toneMappingExposure=1.05;En.shadowMap.enabled=!0;En.shadowMap.type=Ch;Q_.appendChild(En.domElement);const pr=new ed,Ln=new fn(62,16/9,.5,9e3);Ln.position.set(We.pos.x+40,20,We.pos.z+60);const Tn=new K_;Tn.setMuted(ps);const lo=new J_(Wn);lo.attach();const ms=X_(document.getElementById("ui")),Gi=$_(document.getElementById("ui"),{onStart:()=>sl(),onRestart:()=>sl(),onResume:()=>rl("race"),onQuitToMenu:()=>Hu(),onQualityChange:i=>ku(i),onToggleMute:()=>{ps=!ps,Tn.setMuted(ps)}}),Fu=()=>Tn.unlock();window.addEventListener("pointerdown",Fu,{once:!1});window.addEventListener("keydown",Fu,{once:!1});function zu(i){let t=document.getElementById("err-overlay");t||(t=document.createElement("div"),t.id="err-overlay",t.style.cssText="position:fixed;left:8px;bottom:8px;max-width:60vw;z-index:9999;background:#2b0d12;color:#ff9aa5;font:12px monospace;padding:8px 10px;border:1px solid #7d2b36;border-radius:6px;white-space:pre-wrap;pointer-events:none;",document.body.appendChild(t)),t.textContent="ERROR: "+i}window.addEventListener("error",i=>zu(i.message));window.addEventListener("unhandledrejection",i=>zu(String(i.reason&&i.reason.stack||i.reason)));const Ou=await b_({scene:pr,renderer:En,seed:dr,quality:ki[Hi]}),Bu=V_({scene:pr}),dn=k_({scene:pr,world:Ou,input:lo,audio:Tn,fx:Bu,seed:dr,startMode:hs});let Ii,aa,Th;function tx(){const i=ki[Hi],t=new pt;En.getSize(t),Ii=new Uv(En),Ii.addPass(new Nv(pr,Ln)),i.bloom?(aa=new bs(t.clone(),.32,.65,.92),Ii.addPass(aa)):aa=null,Th=j_(),Ii.addPass(Th),Ii.addPass(new zv)}function ku(i){Hi=i;const t=ki[i];En.shadowMap.enabled=t.shadows,pr.traverse(e=>{e.isMesh&&e.material&&(e.material.needsUpdate=!0)}),tx(),zl(),Gi.setQualityOptions(Hi)}function ex(){const i=ki[Hi];En.setPixelRatio(Math.min(window.devicePixelRatio||1,i.pixelRatioCap))}function zl(){const i=window.innerWidth,t=window.innerHeight;ex(),En.setSize(i,t),Ii.setSize(i,t),Ln.aspect=i/t,Ln.updateProjectionMatrix()}window.addEventListener("resize",zl);ku(Hi);typeof window<"u"&&(window.__game=dn);let ze="boot",$s=0,Ks=0;function Hu(){ze="menu",Ks=0,dn.reset(null,!0),Gi.show("start",{seed:dr,startMode:hs,muted:ps}),Tn.stopEngine()}function sl(){Tn.unlock(),dn.reset(hs),ze="countdown",$s=3.6,ms.setVisibility(!0),Gi.show(null),ms.banner(hs?`FILMING START — ${hs.toUpperCase()}`:"THE CORAL RUN",hs?"seeded shortcut":"reach the finish arch",2200),Tn.startAmbience();const i=dn.state.pos,t=dn.state.heading;Ln.position.set(i.x-Math.sin(t)*11,i.y+4.6,i.z-Math.cos(t)*11),Ln.lookAt(i.x,i.y+1.2,i.z)}function rl(i){i==="race"?(Gi.show(null),ze="race"):i==="paused"&&(Gi.show("pause",{qualityName:Hi,muted:ps,seed:dr}),ze="paused")}Pn("restart",()=>{ze!=="menu"&&ze!=="boot"&&sl()});Pn("pauseToggle",()=>{ze==="race"?rl("paused"):ze==="paused"&&rl("race")});Pn("toggleHud",()=>ms.toggleVisibility());Wn.addEventListener("finish",()=>{ze="won",Tn.stopEngine();const i=dn.state;Gi.show("win",{time:i.raceTime,enemiesDown:i.enemiesDown,gates:i.gatesTotal,seed:dr})});Wn.addEventListener("playerDied",()=>{ze="lost",Tn.stopEngine(),Gi.show("lose",{gates:dn.state.gateIndex,gatesTotal:dn.state.gatesTotal,enemiesDown:dn.state.enemiesDown})});Wn.addEventListener("countdown",i=>{Tn.countdownBeep(i.detail.n)});Wn.addEventListener("go",()=>{Tn.go()});const nx=new pu,la=1/120;let ca=0,Yr=0,Zr=4;function Gu(){requestAnimationFrame(Gu);const i=Math.min(nx.getDelta(),1/20);if(Yr+=i,lo.sample(),ze==="countdown"){$s-=i;const e=Math.ceil($s-.6);e!==Zr&&e>=1&&e<=3&&(Zr=e,ms.countdown(e),Wn.dispatchEvent(new CustomEvent("countdown",{detail:{n:e}}))),$s<=.6&&Zr!==0&&(Zr=0,ms.countdown(0),Wn.dispatchEvent(new CustomEvent("go"))),$s<=0&&(ze="race",Tn.startEngine())}const t=ze==="race";if(ze!=="paused"){ca+=i;let e=0;for(;ca>=la&&e<10;)dn.fixedUpdate(la,t&&ze==="race"),ca-=la,e++;dn.frameUpdate(i,Yr,Ln,ze),Bu.update(i,Yr,Ln)}if(Ou.update(i,Yr,Ln),ze==="menu"){Ks+=i;const e=Ks*.12,n=70+Math.sin(Ks*.2)*14;Ln.position.set(We.pos.x+Math.sin(e)*n,16+Math.sin(Ks*.35)*5,We.pos.z+Math.cos(e)*n),Ln.lookAt(We.pos.x,2.5,We.pos.z-30)}ms.update(dn.state,ze),Ii.render(),lo.postFrame()}dn.state.phase="boot";Hu();zl();Gu();
