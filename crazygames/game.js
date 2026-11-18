(()=>{var Cc=0,Dl=1,Pc=2;var Cn=1,Ic=2,ls=3,gn=0,Oe=1,ti=2,Pn=0,hs=1,Zi=2,Nl=3,Fl=4,Lc=5;var In=100,Dc=101,Nc=102,Fc=103,kc=104,Uc=200,Oc=201,zc=202,Bc=203,kl=204,Ul=205,Hc=206,Gc=207,Vc=208,Wc=209,Xc=210,qc=211,Yc=212,$c=213,Kc=214,Jr=0,jr=1,Qr=2,Qn=3,to=4,eo=5,io=6,no=7,Ol=0,Zc=1,Jc=2,fi=0,zl=1,Bl=2,Hl=3,Gl=4,Vl=5,Wl=6,Xl=7;var ql=300,Ln=301,cs=302,Po=303,Io=304,so=1e3,Ai=1001,ro=1002,ye=1003,jc=1004;var er=1005;var Se=1006,Lo=1007;var Ji=1008;var qe=1009,Yl=1010,$l=1011,us=1012,Do=1013,Si=1014,pi=1015,ri=1016,No=1017,Fo=1018,Dn=1020,Kl=35902,Zl=35899,Jl=1021,jl=1022,oi=1023,Yi=1026,ji=1027,ko=1028,Uo=1029,xn=1030,Oo=1031;var zo=1033,ir=33776,nr=33777,sr=33778,rr=33779,Bo=35840,Ho=35841,Go=35842,Vo=35843,Wo=36196,Xo=37492,qo=37496,Yo=37488,$o=37489,or=37490,Ko=37491,Zo=37808,Jo=37809,jo=37810,Qo=37811,ta=37812,ea=37813,ia=37814,na=37815,sa=37816,ra=37817,oa=37818,aa=37819,la=37820,ha=37821,ca=36492,ua=36494,da=36495,fa=36283,pa=36284,ar=36285,ma=36286;var Cs=2300,oo=2301,Kr=2302,wl=2303,Tl=2400,El=2401,Al=2402;var Qc=3200;var ga=0,tu=1,Qi="",ni="srgb",Ps="srgb-linear",Is="linear",ie="srgb";var Zr=7680;var eu=519,iu=512,nu=513,su=514,Ql=515,ru=516,ou=517,th=518,eh=519,au=35044;var ih="300 es",di=2e3,ts=2001;function Ed(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Ad(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Ls(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function lu(){let r=Ls("canvas");return r.style.display="block",r}var jh={},es=null;function nh(...r){let t="THREE."+r.shift();es?es("log",t,...r):console.log(t,...r)}function hu(r){let t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=r[1];e&&e.isStackTrace?r[0]+=" "+e.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Pt(...r){r=hu(r);let t="THREE."+r.shift();if(es)es("warn",t,...r);else{let e=r[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...r)}}function Dt(...r){r=hu(r);let t="THREE."+r.shift();if(es)es("error",t,...r);else{let e=r[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...r)}}function Rs(...r){let t=r.join(" ");t in jh||(jh[t]=!0,Pt(...r))}function cu(r,t,e){return new Promise(function(i,n){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:n();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}var uu={[Jr]:Jr,[Qr]:io,[to]:to,[Qn]:eo,[jr]:jr,[io]:Qr,[no]:no,[eo]:Qn},Ri=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let n=i[t];if(n!==void 0){let s=n.indexOf(e);s!==-1&&n.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let n=i.slice(0);for(let s=0,o=n.length;s<o;s++)n[s].call(this,t);t.target=null}}},Ge=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var el=Math.PI/180,Ds=180/Math.PI;function lr(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ge[r&255]+Ge[r>>8&255]+Ge[r>>16&255]+Ge[r>>24&255]+"-"+Ge[t&255]+Ge[t>>8&255]+"-"+Ge[t>>16&15|64]+Ge[t>>24&255]+"-"+Ge[e&63|128]+Ge[e>>8&255]+"-"+Ge[e>>16&255]+Ge[e>>24&255]+Ge[i&255]+Ge[i>>8&255]+Ge[i>>16&255]+Ge[i>>24&255]).toLowerCase()}function Kt(r,t,e){return Math.max(t,Math.min(e,r))}function Rd(r,t){return(r%t+t)%t}function il(r,t,e){return(1-e)*r+e*t}function du(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function sh(r){switch(r.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Cd(r,t){if(t.constructor===Float32Array)return r;let e=sh(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(r/e,-1)}function Pd(r,t){if(t.constructor===Float32Array)return r;let e=sh(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(r*e)}var hh=class hh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Kt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Kt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),n=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*n+t.x,this.y=s*n+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};hh.prototype.isVector2=!0;var Bt=hh,je=class{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,s,o,a){let h=i[n+0],l=i[n+1],c=i[n+2],u=i[n+3],d=s[o+0],f=s[o+1],g=s[o+2],x=s[o+3];if(u!==x||h!==d||l!==f||c!==g){let m=h*d+l*f+c*g+u*x;m<0&&(d=-d,f=-f,g=-g,x=-x,m=-m);let p=1-a;if(m<.9995){let _=Math.acos(m),M=Math.sin(_);p=Math.sin(p*_)/M,a=Math.sin(a*_)/M,h=h*p+d*a,l=l*p+f*a,c=c*p+g*a,u=u*p+x*a}else{h=h*p+d*a,l=l*p+f*a,c=c*p+g*a,u=u*p+x*a;let _=1/Math.sqrt(h*h+l*l+c*c+u*u);h*=_,l*=_,c*=_,u*=_}}t[e]=h,t[e+1]=l,t[e+2]=c,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,n,s,o){let a=i[n],h=i[n+1],l=i[n+2],c=i[n+3],u=s[o],d=s[o+1],f=s[o+2],g=s[o+3];return t[e]=a*g+c*u+h*f-l*d,t[e+1]=h*g+c*d+l*u-a*f,t[e+2]=l*g+c*f+a*d-h*u,t[e+3]=c*g-a*u-h*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,n=t._y,s=t._z,o=t._order,a=Math.cos,h=Math.sin,l=a(i/2),c=a(n/2),u=a(s/2),d=h(i/2),f=h(n/2),g=h(s/2);switch(o){case"XYZ":this._x=d*c*u+l*f*g,this._y=l*f*u-d*c*g,this._z=l*c*g+d*f*u,this._w=l*c*u-d*f*g;break;case"YXZ":this._x=d*c*u+l*f*g,this._y=l*f*u-d*c*g,this._z=l*c*g-d*f*u,this._w=l*c*u+d*f*g;break;case"ZXY":this._x=d*c*u-l*f*g,this._y=l*f*u+d*c*g,this._z=l*c*g+d*f*u,this._w=l*c*u-d*f*g;break;case"ZYX":this._x=d*c*u-l*f*g,this._y=l*f*u+d*c*g,this._z=l*c*g-d*f*u,this._w=l*c*u+d*f*g;break;case"YZX":this._x=d*c*u+l*f*g,this._y=l*f*u+d*c*g,this._z=l*c*g-d*f*u,this._w=l*c*u-d*f*g;break;case"XZY":this._x=d*c*u-l*f*g,this._y=l*f*u-d*c*g,this._z=l*c*g+d*f*u,this._w=l*c*u+d*f*g;break;default:Pt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],n=e[4],s=e[8],o=e[1],a=e[5],h=e[9],l=e[2],c=e[6],u=e[10],d=i+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(c-h)*f,this._y=(s-l)*f,this._z=(o-n)*f}else if(i>a&&i>u){let f=2*Math.sqrt(1+i-a-u);this._w=(c-h)/f,this._x=.25*f,this._y=(n+o)/f,this._z=(s+l)/f}else if(a>u){let f=2*Math.sqrt(1+a-i-u);this._w=(s-l)/f,this._x=(n+o)/f,this._y=.25*f,this._z=(h+c)/f}else{let f=2*Math.sqrt(1+u-i-a);this._w=(o-n)/f,this._x=(s+l)/f,this._y=(h+c)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Kt(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,n=t._y,s=t._z,o=t._w,a=e._x,h=e._y,l=e._z,c=e._w;return this._x=i*c+o*a+n*l-s*h,this._y=n*c+o*h+s*a-i*l,this._z=s*c+o*l+i*h-n*a,this._w=o*c-i*a-n*h-s*l,this._onChangeCallback(),this}slerp(t,e){let i=t._x,n=t._y,s=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,n=-n,s=-s,o=-o,a=-a);let h=1-e;if(a<.9995){let l=Math.acos(a),c=Math.sin(l);h=Math.sin(h*l)/c,e=Math.sin(e*l)/c,this._x=this._x*h+i*e,this._y=this._y*h+n*e,this._z=this._z*h+s*e,this._w=this._w*h+o*e,this._onChangeCallback()}else this._x=this._x*h+i*e,this._y=this._y*h+n*e,this._z=this._z*h+s*e,this._w=this._w*h+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ch=class ch{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Qh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Qh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*n,this.y=s[1]*e+s[4]*i+s[7]*n,this.z=s[2]*e+s[5]*i+s[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*n+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*n+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*n+s[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,n=this.z,s=t.x,o=t.y,a=t.z,h=t.w,l=2*(o*n-a*i),c=2*(a*e-s*n),u=2*(s*i-o*e);return this.x=e+h*l+o*u-a*c,this.y=i+h*c+a*l-s*u,this.z=n+h*u+s*c-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*n,this.y=s[1]*e+s[5]*i+s[9]*n,this.z=s[2]*e+s[6]*i+s[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Kt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,n=t.y,s=t.z,o=e.x,a=e.y,h=e.z;return this.x=n*h-s*a,this.y=s*o-i*h,this.z=i*a-n*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return nl.copy(this).projectOnVector(t),this.sub(nl)}reflect(t){return this.sub(nl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Kt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ch.prototype.isVector3=!0;var D=ch,nl=new D,Qh=new je,uh=class uh{constructor(t,e,i,n,s,o,a,h,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,o,a,h,l)}set(t,e,i,n,s,o,a,h,l){let c=this.elements;return c[0]=t,c[1]=n,c[2]=a,c[3]=e,c[4]=s,c[5]=h,c[6]=i,c[7]=o,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,s=this.elements,o=i[0],a=i[3],h=i[6],l=i[1],c=i[4],u=i[7],d=i[2],f=i[5],g=i[8],x=n[0],m=n[3],p=n[6],_=n[1],M=n[4],v=n[7],T=n[2],S=n[5],y=n[8];return s[0]=o*x+a*_+h*T,s[3]=o*m+a*M+h*S,s[6]=o*p+a*v+h*y,s[1]=l*x+c*_+u*T,s[4]=l*m+c*M+u*S,s[7]=l*p+c*v+u*y,s[2]=d*x+f*_+g*T,s[5]=d*m+f*M+g*S,s[8]=d*p+f*v+g*y,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],o=t[4],a=t[5],h=t[6],l=t[7],c=t[8];return e*o*c-e*a*l-i*s*c+i*a*h+n*s*l-n*o*h}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],o=t[4],a=t[5],h=t[6],l=t[7],c=t[8],u=c*o-a*l,d=a*h-c*s,f=l*s-o*h,g=e*u+i*d+n*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(n*l-c*i)*x,t[2]=(a*i-n*o)*x,t[3]=d*x,t[4]=(c*e-n*h)*x,t[5]=(n*s-a*e)*x,t[6]=f*x,t[7]=(i*h-l*e)*x,t[8]=(o*e-i*s)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,s,o,a){let h=Math.cos(s),l=Math.sin(s);return this.set(i*h,i*l,-i*(h*o+l*a)+o+t,-n*l,n*h,-n*(-l*o+h*a)+a+e,0,0,1),this}scale(t,e){return Rs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(sl.makeScale(t,e)),this}rotate(t){return Rs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(sl.makeRotation(-t)),this}translate(t,e){return Rs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(sl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};uh.prototype.isMatrix3=!0;var Ft=uh,sl=new Ft,tc=new Ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ec=new Ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Id(){let r={enabled:!0,workingColorSpace:Ps,spaces:{},convert:function(n,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ie&&(n.r=qi(n.r),n.g=qi(n.g),n.b=qi(n.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(n.applyMatrix3(this.spaces[s].toXYZ),n.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ie&&(n.r=jn(n.r),n.g=jn(n.g),n.b=jn(n.b))),n},workingToColorSpace:function(n,s){return this.convert(n,this.workingColorSpace,s)},colorSpaceToWorking:function(n,s){return this.convert(n,s,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Qi?Is:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,s=this.workingColorSpace){return n.fromArray(this.spaces[s].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,s,o){return n.copy(this.spaces[o].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return r.define({[Ps]:{primaries:t,whitePoint:i,transfer:Is,toXYZ:tc,fromXYZ:ec,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ni},outputColorSpaceConfig:{drawingBufferColorSpace:ni}},[ni]:{primaries:t,whitePoint:i,transfer:ie,toXYZ:tc,fromXYZ:ec,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ni}}}),r}var $t=Id();function qi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function jn(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var On,ao=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{On===void 0&&(On=Ls("canvas")),On.width=t.width,On.height=t.height;let n=On.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),i=On}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ls("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let n=i.getImageData(0,0,t.width,t.height),s=n.data;for(let o=0;o<s.length;o++)s[o]=qi(s[o]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(qi(e[i]/255)*255):e[i]=qi(e[i]);return{data:e,width:t.width,height:t.height}}else return Pt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Ld=0,is=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Ld++}),this.uuid=lr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let o=0,a=n.length;o<a;o++)n[o].isDataTexture?s.push(rl(n[o].image)):s.push(rl(n[o]))}else s=rl(n);i.url=s}return e||(t.images[this.uuid]=i),i}};function rl(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?ao.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Pt("Texture: Unable to serialize Texture."),{})}var Dd=0,ol=new D,Qe=class r extends Ri{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,i=Ai,n=Ai,s=Se,o=Ji,a=oi,h=qe,l=r.DEFAULT_ANISOTROPY,c=Qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dd++}),this.uuid=lr(),this.name="",this.source=new is(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=h,this.offset=new Bt(0,0),this.repeat=new Bt(1,1),this.center=new Bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ol).x}get height(){return this.source.getSize(ol).y}get depth(){return this.source.getSize(ol).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Pt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){Pt(`Texture.setValues(): property '${e}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ql)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case so:t.x=t.x-Math.floor(t.x);break;case Ai:t.x=t.x<0?0:1;break;case ro:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case so:t.y=t.y-Math.floor(t.y);break;case Ai:t.y=t.y<0?0:1;break;case ro:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Qe.DEFAULT_IMAGE=null;Qe.DEFAULT_MAPPING=ql;Qe.DEFAULT_ANISOTROPY=1;var dh=class dh{constructor(t=0,e=0,i=0,n=1){this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*n+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*n+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*n+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*n+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,s,h=t.elements,l=h[0],c=h[4],u=h[8],d=h[1],f=h[5],g=h[9],x=h[2],m=h[6],p=h[10];if(Math.abs(c-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(l+1)/2,v=(f+1)/2,T=(p+1)/2,S=(c+d)/4,y=(u+x)/4,b=(g+m)/4;return M>v&&M>T?M<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(M),n=S/i,s=y/i):v>T?v<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(v),i=S/n,s=b/n):T<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(T),i=y/s,n=b/s),this.set(i,n,s,e),this}let _=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-c)*(d-c));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(u-x)/_,this.z=(d-c)/_,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this.w=Kt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this.w=Kt(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Kt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};dh.prototype.isVector4=!0;var fe=dh,lo=class extends Ri{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Se,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new fe(0,0,t,e),this.scissorTest=!1,this.viewport=new fe(0,0,t,e),this.textures=[];let n=i.count;for(let s=0;s<n;s++)this.textures[s]=new Qe({width:t,height:e,depth:i.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Se,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let n=Object.assign({},t.textures[e].image);this.textures[e].source=new is(n)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xe=class extends lo{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Ns=class extends Qe{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=ye,this.minFilter=ye,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ho=class extends Qe{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=ye,this.minFilter=ye,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Co=class Co{constructor(t,e,i,n,s,o,a,h,l,c,u,d,f,g,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,o,a,h,l,c,u,d,f,g,x,m)}set(t,e,i,n,s,o,a,h,l,c,u,d,f,g,x,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=n,p[1]=s,p[5]=o,p[9]=a,p[13]=h,p[2]=l,p[6]=c,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Co().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,n=1/zn.setFromMatrixColumn(t,0).length(),s=1/zn.setFromMatrixColumn(t,1).length(),o=1/zn.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,n=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),h=Math.cos(n),l=Math.sin(n),c=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let d=o*c,f=o*u,g=a*c,x=a*u;e[0]=h*c,e[4]=-h*u,e[8]=l,e[1]=f+g*l,e[5]=d-x*l,e[9]=-a*h,e[2]=x-d*l,e[6]=g+f*l,e[10]=o*h}else if(t.order==="YXZ"){let d=h*c,f=h*u,g=l*c,x=l*u;e[0]=d+x*a,e[4]=g*a-f,e[8]=o*l,e[1]=o*u,e[5]=o*c,e[9]=-a,e[2]=f*a-g,e[6]=x+d*a,e[10]=o*h}else if(t.order==="ZXY"){let d=h*c,f=h*u,g=l*c,x=l*u;e[0]=d-x*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*c,e[9]=x-d*a,e[2]=-o*l,e[6]=a,e[10]=o*h}else if(t.order==="ZYX"){let d=o*c,f=o*u,g=a*c,x=a*u;e[0]=h*c,e[4]=g*l-f,e[8]=d*l+x,e[1]=h*u,e[5]=x*l+d,e[9]=f*l-g,e[2]=-l,e[6]=a*h,e[10]=o*h}else if(t.order==="YZX"){let d=o*h,f=o*l,g=a*h,x=a*l;e[0]=h*c,e[4]=x-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*c,e[9]=-a*c,e[2]=-l*c,e[6]=f*u+g,e[10]=d-x*u}else if(t.order==="XZY"){let d=o*h,f=o*l,g=a*h,x=a*l;e[0]=h*c,e[4]=-u,e[8]=l*c,e[1]=d*u+x,e[5]=o*c,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*c,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Nd,t,Fd)}lookAt(t,e,i){let n=this.elements;return ei.subVectors(t,e),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),sn.crossVectors(i,ei),sn.lengthSq()===0&&(Math.abs(i.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),sn.crossVectors(i,ei)),sn.normalize(),wr.crossVectors(ei,sn),n[0]=sn.x,n[4]=wr.x,n[8]=ei.x,n[1]=sn.y,n[5]=wr.y,n[9]=ei.y,n[2]=sn.z,n[6]=wr.z,n[10]=ei.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,s=this.elements,o=i[0],a=i[4],h=i[8],l=i[12],c=i[1],u=i[5],d=i[9],f=i[13],g=i[2],x=i[6],m=i[10],p=i[14],_=i[3],M=i[7],v=i[11],T=i[15],S=n[0],y=n[4],b=n[8],C=n[12],R=n[1],P=n[5],k=n[9],B=n[13],L=n[2],V=n[6],W=n[10],H=n[14],Q=n[3],X=n[7],j=n[11],et=n[15];return s[0]=o*S+a*R+h*L+l*Q,s[4]=o*y+a*P+h*V+l*X,s[8]=o*b+a*k+h*W+l*j,s[12]=o*C+a*B+h*H+l*et,s[1]=c*S+u*R+d*L+f*Q,s[5]=c*y+u*P+d*V+f*X,s[9]=c*b+u*k+d*W+f*j,s[13]=c*C+u*B+d*H+f*et,s[2]=g*S+x*R+m*L+p*Q,s[6]=g*y+x*P+m*V+p*X,s[10]=g*b+x*k+m*W+p*j,s[14]=g*C+x*B+m*H+p*et,s[3]=_*S+M*R+v*L+T*Q,s[7]=_*y+M*P+v*V+T*X,s[11]=_*b+M*k+v*W+T*j,s[15]=_*C+M*B+v*H+T*et,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],n=t[8],s=t[12],o=t[1],a=t[5],h=t[9],l=t[13],c=t[2],u=t[6],d=t[10],f=t[14],g=t[3],x=t[7],m=t[11],p=t[15],_=h*f-l*d,M=a*f-l*u,v=a*d-h*u,T=o*f-l*c,S=o*d-h*c,y=o*u-a*c;return e*(x*_-m*M+p*v)-i*(g*_-m*T+p*S)+n*(g*M-x*T+p*y)-s*(g*v-x*S+m*y)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],n=t[8],s=t[1],o=t[5],a=t[9],h=t[2],l=t[6],c=t[10];return e*(o*c-a*l)-i*(s*c-a*h)+n*(s*l-o*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],o=t[4],a=t[5],h=t[6],l=t[7],c=t[8],u=t[9],d=t[10],f=t[11],g=t[12],x=t[13],m=t[14],p=t[15],_=e*a-i*o,M=e*h-n*o,v=e*l-s*o,T=i*h-n*a,S=i*l-s*a,y=n*l-s*h,b=c*x-u*g,C=c*m-d*g,R=c*p-f*g,P=u*m-d*x,k=u*p-f*x,B=d*p-f*m,L=_*B-M*k+v*P+T*R-S*C+y*b;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/L;return t[0]=(a*B-h*k+l*P)*V,t[1]=(n*k-i*B-s*P)*V,t[2]=(x*y-m*S+p*T)*V,t[3]=(d*S-u*y-f*T)*V,t[4]=(h*R-o*B-l*C)*V,t[5]=(e*B-n*R+s*C)*V,t[6]=(m*v-g*y-p*M)*V,t[7]=(c*y-d*v+f*M)*V,t[8]=(o*k-a*R+l*b)*V,t[9]=(i*R-e*k-s*b)*V,t[10]=(g*S-x*v+p*_)*V,t[11]=(u*v-c*S-f*_)*V,t[12]=(a*C-o*P-h*b)*V,t[13]=(e*P-i*C+n*b)*V,t[14]=(x*M-g*T-m*_)*V,t[15]=(c*T-u*M+d*_)*V,this}scale(t){let e=this.elements,i=t.x,n=t.y,s=t.z;return e[0]*=i,e[4]*=n,e[8]*=s,e[1]*=i,e[5]*=n,e[9]*=s,e[2]*=i,e[6]*=n,e[10]*=s,e[3]*=i,e[7]*=n,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),n=Math.sin(e),s=1-i,o=t.x,a=t.y,h=t.z,l=s*o,c=s*a;return this.set(l*o+i,l*a-n*h,l*h+n*a,0,l*a+n*h,c*a+i,c*h-n*o,0,l*h-n*a,c*h+n*o,s*h*h+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,s,o){return this.set(1,i,s,0,t,1,o,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){let n=this.elements,s=e._x,o=e._y,a=e._z,h=e._w,l=s+s,c=o+o,u=a+a,d=s*l,f=s*c,g=s*u,x=o*c,m=o*u,p=a*u,_=h*l,M=h*c,v=h*u,T=i.x,S=i.y,y=i.z;return n[0]=(1-(x+p))*T,n[1]=(f+v)*T,n[2]=(g-M)*T,n[3]=0,n[4]=(f-v)*S,n[5]=(1-(d+p))*S,n[6]=(m+_)*S,n[7]=0,n[8]=(g+M)*y,n[9]=(m-_)*y,n[10]=(1-(d+x))*y,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){let n=this.elements;t.x=n[12],t.y=n[13],t.z=n[14];let s=this.determinantAffine();if(s===0)return i.set(1,1,1),e.identity(),this;let o=zn.set(n[0],n[1],n[2]).length(),a=zn.set(n[4],n[5],n[6]).length(),h=zn.set(n[8],n[9],n[10]).length();s<0&&(o=-o),yi.copy(this);let l=1/o,c=1/a,u=1/h;return yi.elements[0]*=l,yi.elements[1]*=l,yi.elements[2]*=l,yi.elements[4]*=c,yi.elements[5]*=c,yi.elements[6]*=c,yi.elements[8]*=u,yi.elements[9]*=u,yi.elements[10]*=u,e.setFromRotationMatrix(yi),i.x=o,i.y=a,i.z=h,this}makePerspective(t,e,i,n,s,o,a=di,h=!1){let l=this.elements,c=2*s/(e-t),u=2*s/(i-n),d=(e+t)/(e-t),f=(i+n)/(i-n),g,x;if(h)g=s/(o-s),x=o*s/(o-s);else if(a===di)g=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===ts)g=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,n,s,o,a=di,h=!1){let l=this.elements,c=2/(e-t),u=2/(i-n),d=-(e+t)/(e-t),f=-(i+n)/(i-n),g,x;if(h)g=1/(o-s),x=o/(o-s);else if(a===di)g=-2/(o-s),x=-(o+s)/(o-s);else if(a===ts)g=-1/(o-s),x=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};Co.prototype.isMatrix4=!0;var jt=Co,zn=new D,yi=new jt,Nd=new D(0,0,0),Fd=new D(1,1,1),sn=new D,wr=new D,ei=new D,ic=new jt,nc=new je,Ci=class r{constructor(t=0,e=0,i=0,n=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let n=t.elements,s=n[0],o=n[4],a=n[8],h=n[1],l=n[5],c=n[9],u=n[2],d=n[6],f=n[10];switch(e){case"XYZ":this._y=Math.asin(Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(h,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(h,s));break;case"ZYX":this._y=Math.asin(-Kt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(h,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Kt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-c,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,f),this._y=0);break;default:Pt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return ic.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ic,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return nc.setFromEuler(this),this.setFromQuaternion(nc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ci.DEFAULT_ORDER="XYZ";var Fs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},kd=0,sc=new D,Bn=new je,Hi=new jt,Tr=new D,Ms=new D,Ud=new D,Od=new je,rc=new D(1,0,0),oc=new D(0,1,0),ac=new D(0,0,1),lc={type:"added"},zd={type:"removed"},Hn={type:"childadded",child:null},al={type:"childremoved",child:null},we=class r extends Ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kd++}),this.uuid=lr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new D,e=new Ci,i=new je,n=new D(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new jt},normalMatrix:{value:new Ft}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Bn.setFromAxisAngle(t,e),this.quaternion.multiply(Bn),this}rotateOnWorldAxis(t,e){return Bn.setFromAxisAngle(t,e),this.quaternion.premultiply(Bn),this}rotateX(t){return this.rotateOnAxis(rc,t)}rotateY(t){return this.rotateOnAxis(oc,t)}rotateZ(t){return this.rotateOnAxis(ac,t)}translateOnAxis(t,e){return sc.copy(t).applyQuaternion(this.quaternion),this.position.add(sc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(rc,t)}translateY(t){return this.translateOnAxis(oc,t)}translateZ(t){return this.translateOnAxis(ac,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Hi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Tr.copy(t):Tr.set(t,e,i);let n=this.parent;this.updateWorldMatrix(!0,!1),Ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hi.lookAt(Ms,Tr,this.up):Hi.lookAt(Tr,Ms,this.up),this.quaternion.setFromRotationMatrix(Hi),n&&(Hi.extractRotation(n.matrixWorld),Bn.setFromRotationMatrix(Hi),this.quaternion.premultiply(Bn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Dt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(lc),Hn.child=t,this.dispatchEvent(Hn),Hn.child=null):Dt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(zd),al.child=t,this.dispatchEvent(al),al.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Hi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Hi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Hi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(lc),Hn.child=t,this.dispatchEvent(Hn),Hn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,t,Ud),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,Od,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,n=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*i-s[8]*n,s[13]+=i-s[1]*e-s[5]*i-s[9]*n,s[14]+=n-s[2]*e-s[6]*i-s[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(a=>({...a})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(t),n.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function s(a,h){return a[h.uuid]===void 0&&(a[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let h=a.shapes;if(Array.isArray(h))for(let l=0,c=h.length;l<c;l++){let u=h[l];s(t.shapes,u)}else s(t.shapes,h)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let h=0,l=this.material.length;h<l;h++)a.push(s(t.materials,this.material[h]));n.material=a}else n.material=s(t.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){let h=this.animations[a];n.animations.push(s(t.animations,h))}}if(e){let a=o(t.geometries),h=o(t.materials),l=o(t.textures),c=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),h.length>0&&(i.materials=h),l.length>0&&(i.textures=l),c.length>0&&(i.images=c),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=n,i;function o(a){let h=[];for(let l in a){let c=a[l];delete c.metadata,h.push(c)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let n=t.children[i];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};we.DEFAULT_UP=new D(0,1,0);we.DEFAULT_MATRIX_AUTO_UPDATE=!0;we.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ae=class extends we{constructor(){super(),this.isGroup=!0,this.type="Group"}},Bd={type:"move"},ns=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ae,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ae,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ae,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,s=null,o=null,a=this._targetRay,h=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,i),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let c=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=c.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else h!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(h.matrix.fromArray(s.transform.matrix),h.matrix.decompose(h.position,h.quaternion,h.scale),h.matrixWorldNeedsUpdate=!0,s.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(s.linearVelocity)):h.hasLinearVelocity=!1,s.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(s.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Bd)))}return a!==null&&(a.visible=n!==null),h!==null&&(h.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Ae;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},fu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rn={h:0,s:0,l:0},Er={h:0,s:0,l:0};function ll(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var yt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ni){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,$t.colorSpaceToWorking(this,e),this}setRGB(t,e,i,n=$t.workingColorSpace){return this.r=t,this.g=e,this.b=i,$t.colorSpaceToWorking(this,n),this}setHSL(t,e,i,n=$t.workingColorSpace){if(t=Rd(t,1),e=Kt(e,0,1),i=Kt(i,0,1),e===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=ll(o,s,t+1/3),this.g=ll(o,s,t),this.b=ll(o,s,t-1/3)}return $t.colorSpaceToWorking(this,n),this}setStyle(t,e=ni){function i(s){s!==void 0&&parseFloat(s)<1&&Pt("Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=n[1],a=n[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,e);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Pt("Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=n[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);Pt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ni){let i=fu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Pt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=qi(t.r),this.g=qi(t.g),this.b=qi(t.b),this}copyLinearToSRGB(t){return this.r=jn(t.r),this.g=jn(t.g),this.b=jn(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ni){return $t.workingToColorSpace(Ve.copy(this),t),Math.round(Kt(Ve.r*255,0,255))*65536+Math.round(Kt(Ve.g*255,0,255))*256+Math.round(Kt(Ve.b*255,0,255))}getHexString(t=ni){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=$t.workingColorSpace){$t.workingToColorSpace(Ve.copy(this),e);let i=Ve.r,n=Ve.g,s=Ve.b,o=Math.max(i,n,s),a=Math.min(i,n,s),h,l,c=(a+o)/2;if(a===o)h=0,l=0;else{let u=o-a;switch(l=c<=.5?u/(o+a):u/(2-o-a),o){case i:h=(n-s)/u+(n<s?6:0);break;case n:h=(s-i)/u+2;break;case s:h=(i-n)/u+4;break}h/=6}return t.h=h,t.s=l,t.l=c,t}getRGB(t,e=$t.workingColorSpace){return $t.workingToColorSpace(Ve.copy(this),e),t.r=Ve.r,t.g=Ve.g,t.b=Ve.b,t}getStyle(t=ni){$t.workingToColorSpace(Ve.copy(this),t);let e=Ve.r,i=Ve.g,n=Ve.b;return t!==ni?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(rn),this.setHSL(rn.h+t,rn.s+e,rn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(rn),t.getHSL(Er);let i=il(rn.h,Er.h,e),n=il(rn.s,Er.s,e),s=il(rn.l,Er.l,e);return this.setHSL(i,n,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,n=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*n,this.g=s[1]*e+s[4]*i+s[7]*n,this.b=s[2]*e+s[5]*i+s[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ve=new yt;yt.NAMES=fu;var En=class extends we{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ci,this.environmentIntensity=1,this.environmentRotation=new Ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},_i=new D,Gi=new D,hl=new D,Vi=new D,Gn=new D,Vn=new D,hc=new D,cl=new D,ul=new D,dl=new D,fl=new fe,pl=new fe,ml=new fe,hn=class r{constructor(t=new D,e=new D,i=new D){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),_i.subVectors(t,e),n.cross(_i);let s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(t,e,i,n,s){_i.subVectors(n,e),Gi.subVectors(i,e),hl.subVectors(t,e);let o=_i.dot(_i),a=_i.dot(Gi),h=_i.dot(hl),l=Gi.dot(Gi),c=Gi.dot(hl),u=o*l-a*a;if(u===0)return s.set(0,0,0),null;let d=1/u,f=(l*h-a*c)*d,g=(o*c-a*h)*d;return s.set(1-f-g,g,f)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,Vi)===null?!1:Vi.x>=0&&Vi.y>=0&&Vi.x+Vi.y<=1}static getInterpolation(t,e,i,n,s,o,a,h){return this.getBarycoord(t,e,i,n,Vi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(s,Vi.x),h.addScaledVector(o,Vi.y),h.addScaledVector(a,Vi.z),h)}static getInterpolatedAttribute(t,e,i,n,s,o){return fl.setScalar(0),pl.setScalar(0),ml.setScalar(0),fl.fromBufferAttribute(t,e),pl.fromBufferAttribute(t,i),ml.fromBufferAttribute(t,n),o.setScalar(0),o.addScaledVector(fl,s.x),o.addScaledVector(pl,s.y),o.addScaledVector(ml,s.z),o}static isFrontFacing(t,e,i,n){return _i.subVectors(i,e),Gi.subVectors(t,e),_i.cross(Gi).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return _i.subVectors(this.c,this.b),Gi.subVectors(this.a,this.b),_i.cross(Gi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,s){return r.getInterpolation(t,this.a,this.b,this.c,e,i,n,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,n=this.b,s=this.c,o,a;Gn.subVectors(n,i),Vn.subVectors(s,i),cl.subVectors(t,i);let h=Gn.dot(cl),l=Vn.dot(cl);if(h<=0&&l<=0)return e.copy(i);ul.subVectors(t,n);let c=Gn.dot(ul),u=Vn.dot(ul);if(c>=0&&u<=c)return e.copy(n);let d=h*u-c*l;if(d<=0&&h>=0&&c<=0&&h-c>0)return o=h/(h-c),e.copy(i).addScaledVector(Gn,o);dl.subVectors(t,s);let f=Gn.dot(dl),g=Vn.dot(dl);if(g>=0&&f<=g)return e.copy(s);let x=f*l-h*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(i).addScaledVector(Vn,a);let m=c*g-f*u;if(m<=0&&u-c>=0&&f-g>=0)return hc.subVectors(s,n),a=(u-c)/(u-c+(f-g)),e.copy(n).addScaledVector(hc,a);let p=1/(m+x+d);return o=x*p,a=d*p,e.copy(i).addScaledVector(Gn,o).addScaledVector(Vn,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Pi=class{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(vi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(vi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=vi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,vi):vi.fromBufferAttribute(s,o),vi.applyMatrix4(t.matrixWorld),this.expandByPoint(vi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ar.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ar.copy(i.boundingBox)),Ar.applyMatrix4(t.matrixWorld),this.union(Ar)}let n=t.children;for(let s=0,o=n.length;s<o;s++)this.expandByObject(n[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,vi),vi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(bs),Rr.subVectors(this.max,bs),Wn.subVectors(t.a,bs),Xn.subVectors(t.b,bs),qn.subVectors(t.c,bs),on.subVectors(Xn,Wn),an.subVectors(qn,Xn),bn.subVectors(Wn,qn);let e=[0,-on.z,on.y,0,-an.z,an.y,0,-bn.z,bn.y,on.z,0,-on.x,an.z,0,-an.x,bn.z,0,-bn.x,-on.y,on.x,0,-an.y,an.x,0,-bn.y,bn.x,0];return!gl(e,Wn,Xn,qn,Rr)||(e=[1,0,0,0,1,0,0,0,1],!gl(e,Wn,Xn,qn,Rr))?!1:(Cr.crossVectors(on,an),e=[Cr.x,Cr.y,Cr.z],gl(e,Wn,Xn,qn,Rr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,vi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(vi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Wi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Wi=[new D,new D,new D,new D,new D,new D,new D,new D],vi=new D,Ar=new Pi,Wn=new D,Xn=new D,qn=new D,on=new D,an=new D,bn=new D,bs=new D,Rr=new D,Cr=new D,Sn=new D;function gl(r,t,e,i,n){for(let s=0,o=r.length-3;s<=o;s+=3){Sn.fromArray(r,s);let a=n.x*Math.abs(Sn.x)+n.y*Math.abs(Sn.y)+n.z*Math.abs(Sn.z),h=t.dot(Sn),l=e.dot(Sn),c=i.dot(Sn);if(Math.max(-Math.max(h,l,c),Math.min(h,l,c))>a)return!1}return!0}var be=new D,Pr=new Bt,Hd=0,Ne=class extends Ri{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Hd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=au,this.updateRanges=[],this.gpuType=pi,this.version=0,this._normalizationScale=t!==void 0?sh(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Pr.fromBufferAttribute(this,e),Pr.applyMatrix3(t),this.setXY(e,Pr.x,Pr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.applyMatrix3(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.applyMatrix4(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.applyNormalMatrix(t),this.setXYZ(e,be.x,be.y,be.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.transformDirection(t),this.setXYZ(e,be.x,be.y,be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Cd(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Pd(t,this.array)}};var ks=class extends Ne{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Us=class extends Ne{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Qt=class extends Ne{constructor(t,e,i){super(new Float32Array(t),e,i)}},Gd=new Pi,Ss=new D,xl=new D,Ii=class{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Gd.setFromPoints(t).getCenter(i);let n=0;for(let s=0,o=t.length;s<o;s++)n=Math.max(n,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ss.subVectors(t,this.center);let e=Ss.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(Ss,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(xl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ss.copy(t.center).add(xl)),this.expandByPoint(Ss.copy(t.center).sub(xl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Vd=0,ui=new jt,yl=new we,Yn=new D,ii=new Pi,ws=new Pi,De=new D,ge=class r extends Ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vd++}),this.uuid=lr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ed(t)?Us:ks)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Ft().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return ui.makeRotationFromQuaternion(t),this.applyMatrix4(ui),this}rotateX(t){return ui.makeRotationX(t),this.applyMatrix4(ui),this}rotateY(t){return ui.makeRotationY(t),this.applyMatrix4(ui),this}rotateZ(t){return ui.makeRotationZ(t),this.applyMatrix4(ui),this}translate(t,e,i){return ui.makeTranslation(t,e,i),this.applyMatrix4(ui),this}scale(t,e,i){return ui.makeScale(t,e,i),this.applyMatrix4(ui),this}lookAt(t){return yl.lookAt(t),yl.updateMatrix(),this.applyMatrix4(yl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yn).negate(),this.translate(Yn.x,Yn.y,Yn.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let n=0,s=t.length;n<s;n++){let o=t[n];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Qt(i,3))}else{let i=Math.min(t.length,e.count);for(let n=0;n<i;n++){let s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&Pt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){let s=e[i];ii.setFromBufferAttribute(s),this.morphTargetsRelative?(De.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(De),De.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(De)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Dt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ii);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){let i=this.boundingSphere.center;if(ii.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];ws.setFromBufferAttribute(a),this.morphTargetsRelative?(De.addVectors(ii.min,ws.min),ii.expandByPoint(De),De.addVectors(ii.max,ws.max),ii.expandByPoint(De)):(ii.expandByPoint(ws.min),ii.expandByPoint(ws.max))}ii.getCenter(i);let n=0;for(let s=0,o=t.count;s<o;s++)De.fromBufferAttribute(t,s),n=Math.max(n,i.distanceToSquared(De));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],h=this.morphTargetsRelative;for(let l=0,c=a.count;l<c;l++)De.fromBufferAttribute(a,l),h&&(Yn.fromBufferAttribute(t,l),De.add(Yn)),n=Math.max(n,i.distanceToSquared(De))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&Dt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Dt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,n=e.normal,s=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Ne(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],h=[],l=new Uint8Array(i.count);for(let C=0;C<i.count;C++)a[C]=new D,h[C]=new D;let c=new D,u=new D,d=new D,f=new Bt,g=new Bt,x=new Bt,m=new D,p=new D;function _(C,R,P){l[C]=l[R]=l[P]=1,c.fromBufferAttribute(i,C),u.fromBufferAttribute(i,R),d.fromBufferAttribute(i,P),f.fromBufferAttribute(s,C),g.fromBufferAttribute(s,R),x.fromBufferAttribute(s,P),u.sub(c),d.sub(c),g.sub(f),x.sub(f);let k=1/(g.x*x.y-x.x*g.y);isFinite(k)&&(m.copy(u).multiplyScalar(x.y).addScaledVector(d,-g.y).multiplyScalar(k),p.copy(d).multiplyScalar(g.x).addScaledVector(u,-x.x).multiplyScalar(k),a[C].add(m),a[R].add(m),a[P].add(m),h[C].add(p),h[R].add(p),h[P].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let C=0,R=M.length;C<R;++C){let P=M[C],k=P.start,B=P.count;for(let L=k,V=k+B;L<V;L+=3)_(t.getX(L+0),t.getX(L+1),t.getX(L+2))}let v=new D,T=new D,S=new D,y=new D;function b(C){S.fromBufferAttribute(n,C),y.copy(S);let R=a[C];v.copy(R),v.sub(S.multiplyScalar(S.dot(R))).normalize(),T.crossVectors(y,R);let k=T.dot(h[C])<0?-1:1;o.setXYZW(C,v.x,v.y,v.z,k)}for(let C=0,R=i.count;C<R;++C)l[C]&&b(C);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new Ne(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let n=new D,s=new D,o=new D,a=new D,h=new D,l=new D,c=new D,u=new D;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);n.fromBufferAttribute(e,g),s.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),c.subVectors(o,s),u.subVectors(n,s),c.cross(u),a.fromBufferAttribute(i,g),h.fromBufferAttribute(i,x),l.fromBufferAttribute(i,m),a.add(c),h.add(c),l.add(c),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,h.x,h.y,h.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)n.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),c.subVectors(o,s),u.subVectors(n,s),c.cross(u),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)De.fromBufferAttribute(t,e),De.normalize(),t.setXYZ(e,De.x,De.y,De.z)}toNonIndexed(){function t(a,h){let l=a.array,c=a.itemSize,u=a.normalized,d=new l.constructor(h.length*c),f=0,g=0;for(let x=0,m=h.length;x<m;x++){a.isInterleavedBufferAttribute?f=h[x]*a.data.stride+a.offset:f=h[x]*c;for(let p=0;p<c;p++)d[g++]=l[f++]}return new Ne(d,c,u)}if(this.index===null)return Pt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,i=this.index.array,n=this.attributes;for(let a in n){let h=n[a],l=t(h,i);e.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let h=[],l=s[a];for(let c=0,u=l.length;c<u;c++){let d=l[c],f=t(d,i);h.push(f)}e.morphAttributes[a]=h}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,h=o.length;a<h;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let h=this.parameters;for(let l in h)h[l]!==void 0&&(t[l]=h[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let h in i){let l=i[h];t.data.attributes[h]=l.toJSON(t.data)}let n={},s=!1;for(let h in this.morphAttributes){let l=this.morphAttributes[h],c=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];c.push(f.toJSON(t.data))}c.length>0&&(n[h]=c,s=!0)}s&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let n=t.attributes;for(let l in n){let c=n[l];this.setAttribute(l,c.clone(e))}let s=t.morphAttributes;for(let l in s){let c=[],u=s[l];for(let d=0,f=u.length;d<f;d++)c.push(u[d].clone(e));this.morphAttributes[l]=c}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,c=o.length;l<c;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var _l=new D,Wd=new D,Xd=new Ft,Mi=class{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let n=_l.subVectors(i,e).cross(Wd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let n=t.delta(_l),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Xd.getNormalMatrix(t),n=this.coplanarPoint(_l).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},qd=0,Li=class extends Ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=lr(),this.name="",this.type="Material",this.blending=hs,this.side=gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kl,this.blendDst=Ul,this.blendEquation=In,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new yt(0,0,0),this.blendAlpha=0,this.depthFunc=Qn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=eu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zr,this.stencilZFail=Zr,this.stencilZPass=Zr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Pt(`Material: parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){Pt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector2&&i&&i.isVector2||n&&n.isEuler&&i&&i.isEuler||n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){let o=[];for(let a in s){let h=s[a];delete h.metadata,o.push(h)}return o}if(e){let s=n(t.textures),o=n(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new yt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Mi().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Bt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Bt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let n=e.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Xi=new D,vl=new D,Ir=new D,Lr=new D,ss=class{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Xi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Xi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Xi.copy(this.origin).addScaledVector(this.direction,e),Xi.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){vl.copy(t).add(e).multiplyScalar(.5),Ir.copy(e).sub(t).normalize(),Lr.copy(this.origin).sub(vl);let s=t.distanceTo(e)*.5,o=-this.direction.dot(Ir),a=Lr.dot(this.direction),h=-Lr.dot(Ir),l=Lr.lengthSq(),c=Math.abs(1-o*o),u,d,f,g;if(c>0)if(u=o*h-a,d=o*a-h,g=s*c,u>=0)if(d>=-g)if(d<=g){let x=1/c;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*h)+l}else d=s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*h)+l;else d=-s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*h)+l;else d<=-g?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-h),s),f=-u*u+d*(d+2*h)+l):d<=g?(u=0,d=Math.min(Math.max(-s,-h),s),f=d*(d+2*h)+l):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-h),s),f=-u*u+d*(d+2*h)+l);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*h)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(vl).addScaledVector(Ir,d),f}intersectSphere(t,e){if(t.radius<0)return null;Xi.subVectors(t.center,this.origin);let i=Xi.dot(this.direction),n=Xi.dot(Xi)-i*i,s=t.radius*t.radius;if(n>s)return null;let o=Math.sqrt(s-n),a=i-o,h=i+o;return h<0?null:a<0?this.at(h,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,s,o,a,h,l=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(t.min.x-d.x)*l,n=(t.max.x-d.x)*l):(i=(t.max.x-d.x)*l,n=(t.min.x-d.x)*l),c>=0?(s=(t.min.y-d.y)*c,o=(t.max.y-d.y)*c):(s=(t.max.y-d.y)*c,o=(t.min.y-d.y)*c),i>o||s>n||((s>i||isNaN(i))&&(i=s),(o<n||isNaN(n))&&(n=o),u>=0?(a=(t.min.z-d.z)*u,h=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,h=(t.min.z-d.z)*u),i>h||a>n)||((a>i||i!==i)&&(i=a),(h<n||n!==n)&&(n=h),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,Xi)!==null}intersectTriangle(t,e,i,n,s){let o=this.origin,a=this.direction,h=a.x,l=a.y,c=a.z,u=t.x-o.x,d=t.y-o.y,f=t.z-o.z,g=e.x-o.x,x=e.y-o.y,m=e.z-o.z,p=i.x-o.x,_=i.y-o.y,M=i.z-o.z,v=Math.abs(h),T=Math.abs(l),S=Math.abs(c),y,b,C,R,P,k,B,L,V,W,H,Q;if(v>=T&&v>=S?(C=h,k=u,V=g,Q=p,h>=0?(y=l,b=c,R=d,P=f,B=x,L=m,W=_,H=M):(y=c,b=l,R=f,P=d,B=m,L=x,W=M,H=_)):T>=S?(C=l,k=d,V=x,Q=_,l>=0?(y=c,b=h,R=f,P=u,B=m,L=g,W=M,H=p):(y=h,b=c,R=u,P=f,B=g,L=m,W=p,H=M)):(C=c,k=f,V=m,Q=M,c>=0?(y=h,b=l,R=u,P=d,B=g,L=x,W=p,H=_):(y=l,b=h,R=d,P=u,B=x,L=g,W=_,H=p)),C===0)return null;let X=y/C,j=b/C,et=1/C,wt=R-X*k,Ut=P-j*k,K=B-X*V,mt=L-j*V,vt=W-X*Q,Rt=H-j*Q,gt=vt*mt-Rt*K,zt=wt*Rt-Ut*vt,ve=K*Ut-mt*wt;if(n){if(gt<0||zt<0||ve<0)return null}else if((gt<0||zt<0||ve<0)&&(gt>0||zt>0||ve>0))return null;let Lt=gt+zt+ve;if(Lt===0)return null;let se=et*(gt*k+zt*V+ve*Q);return(Lt>0?se<0:se>0)?null:this.at(se/Lt,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ue=class extends Li{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.combine=Ol,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},cc=new jt,wn=new ss,Dr=new Ii,uc=new D,Nr=new D,Fr=new D,kr=new D,Ml=new D,Ur=new D,dc=new D,Or=new D,Nt=class extends we{constructor(t=new ge,e=new Ue){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=n.length;s<o;s++){let a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(n,t);let a=this.morphTargetInfluences;if(s&&a){Ur.set(0,0,0);for(let h=0,l=s.length;h<l;h++){let c=a[h],u=s[h];c!==0&&(Ml.fromBufferAttribute(u,t),o?Ur.addScaledVector(Ml,c):Ur.addScaledVector(Ml.sub(e),c))}e.add(Ur)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Dr.copy(i.boundingSphere),Dr.applyMatrix4(s),wn.copy(t.ray).recast(t.near),!(Dr.containsPoint(wn.origin)===!1&&(wn.intersectSphere(Dr,uc)===null||wn.origin.distanceToSquared(uc)>(t.far-t.near)**2))&&(cc.copy(s).invert(),wn.copy(t.ray).applyMatrix4(cc),!(i.boundingBox!==null&&wn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,wn)))}_computeIntersections(t,e,i){let n,s=this.geometry,o=this.material,a=s.index,h=s.attributes.position,l=s.attributes.uv,c=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],_=Math.max(m.start,f.start),M=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=_,T=M;v<T;v+=3){let S=a.getX(v),y=a.getX(v+1),b=a.getX(v+2);n=zr(this,p,t,i,l,c,u,S,y,b),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{let g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let _=a.getX(m),M=a.getX(m+1),v=a.getX(m+2);n=zr(this,o,t,i,l,c,u,_,M,v),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}else if(h!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],_=Math.max(m.start,f.start),M=Math.min(h.count,Math.min(m.start+m.count,f.start+f.count));for(let v=_,T=M;v<T;v+=3){let S=v,y=v+1,b=v+2;n=zr(this,p,t,i,l,c,u,S,y,b),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{let g=Math.max(0,f.start),x=Math.min(h.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let _=m,M=m+1,v=m+2;n=zr(this,o,t,i,l,c,u,_,M,v),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}}};function Yd(r,t,e,i,n,s,o,a){let h;if(t.side===Oe?h=i.intersectTriangle(o,s,n,!0,a):h=i.intersectTriangle(n,s,o,t.side===gn,a),h===null)return null;Or.copy(a),Or.applyMatrix4(r.matrixWorld);let l=e.ray.origin.distanceTo(Or);return l<e.near||l>e.far?null:{distance:l,point:Or.clone(),object:r}}function zr(r,t,e,i,n,s,o,a,h,l){r.getVertexPosition(a,Nr),r.getVertexPosition(h,Fr),r.getVertexPosition(l,kr);let c=Yd(r,t,e,i,Nr,Fr,kr,dc);if(c){let u=new D;hn.getBarycoord(dc,Nr,Fr,kr,u),n&&(c.uv=hn.getInterpolatedAttribute(n,a,h,l,u,new Bt)),s&&(c.uv1=hn.getInterpolatedAttribute(s,a,h,l,u,new Bt)),o&&(c.normal=hn.getInterpolatedAttribute(o,a,h,l,u,new D),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));let d={a,b:h,c:l,normal:new D,materialIndex:0};hn.getNormal(Nr,Fr,kr,d.normal),c.face=d,c.barycoord=u}return c}var An=class extends Qe{constructor(t=null,e=1,i=1,n,s,o,a,h,l=ye,c=ye,u,d){super(null,o,a,h,l,c,n,s,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Os=class extends Ne{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},$n=new jt,fc=new jt,Br=[],pc=new Pi,$d=new jt,Ts=new Nt,Es=new Ii,zs=class extends Nt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Os(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,$d)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Pi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,$n),pc.copy(t.boundingBox).applyMatrix4($n),this.boundingBox.union(pc)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ii),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,$n),Es.copy(t.boundingSphere).applyMatrix4($n),this.boundingSphere.union(Es)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,n=this.morphTexture.source.data.data,s=i.length+1,o=t*s+1;for(let a=0;a<i.length;a++)i[a]=n[o+a]}raycast(t,e){let i=this.matrixWorld,n=this.count;if(Ts.geometry=this.geometry,Ts.material=this.material,Ts.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Es.copy(this.boundingSphere),Es.applyMatrix4(i),t.ray.intersectsSphere(Es)!==!1))for(let s=0;s<n;s++){this.getMatrixAt(s,$n),fc.multiplyMatrices(i,$n),Ts.matrixWorld=fc,Ts.raycast(t,Br);for(let o=0,a=Br.length;o<a;o++){let h=Br[o];h.instanceId=s,h.object=this,e.push(h)}Br.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Os(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new An(new Float32Array(n*this.count),n,this.count,ko,pi));let s=this.morphTexture.source.data.data,o=0;for(let l=0;l<i.length;l++)o+=i[l];let a=this.geometry.morphTargetsRelative?1:1-o,h=n*t;return s[h]=a,s.set(i,h+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Tn=new Ii,Kd=new Bt(.5,.5),Hr=new D,cn=class{constructor(t=new Mi,e=new Mi,i=new Mi,n=new Mi,s=new Mi,o=new Mi){this.planes=[t,e,i,n,s,o]}set(t,e,i,n,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(n),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=di,i=!1){let n=this.planes,s=t.elements,o=s[0],a=s[1],h=s[2],l=s[3],c=s[4],u=s[5],d=s[6],f=s[7],g=s[8],x=s[9],m=s[10],p=s[11],_=s[12],M=s[13],v=s[14],T=s[15];if(n[0].setComponents(l-o,f-c,p-g,T-_).normalize(),n[1].setComponents(l+o,f+c,p+g,T+_).normalize(),n[2].setComponents(l+a,f+u,p+x,T+M).normalize(),n[3].setComponents(l-a,f-u,p-x,T-M).normalize(),i)n[4].setComponents(h,d,m,v).normalize(),n[5].setComponents(l-h,f-d,p-m,T-v).normalize();else if(n[4].setComponents(l-h,f-d,p-m,T-v).normalize(),e===di)n[5].setComponents(l+h,f+d,p+m,T+v).normalize();else if(e===ts)n[5].setComponents(h,d,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Tn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Tn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Tn)}intersectsSprite(t){Tn.center.set(0,0,0);let e=Kd.distanceTo(t.center);return Tn.radius=.7071067811865476+e,Tn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Tn)}intersectsSphere(t){let e=this.planes,i=t.center,n=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let n=e[i];if(Hr.x=n.normal.x>0?t.max.x:t.min.x,Hr.y=n.normal.y>0?t.max.y:t.min.y,Hr.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(Hr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},mc=new jt,co=class r{constructor(){this.coordinateSystem=di,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,i=this._frustums;for(let n=0;n<e.length;n++){let s=e[n];mc.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),i[n]===void 0&&(i[n]=new cn),i[n].setFromProjectionMatrix(mc,s.coordinateSystem,s.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,i=t._frustums;for(let n=0;n<t._count;n++)e[n]===void 0&&(e[n]=new cn),e[n].copy(i[n]);return this._count=t._count,this}clone(){return new r().copy(this)}};var rs=class extends Li{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},uo=new D,fo=new D,gc=new jt,As=new ss,Gr=new Ii,bl=new D,xc=new D,po=class extends we{constructor(t=new ge,e=new rs){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let n=1,s=e.count;n<s;n++)uo.fromBufferAttribute(e,n-1),fo.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=uo.distanceTo(fo);t.setAttribute("lineDistance",new Qt(i,1))}else Pt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,n=this.matrixWorld,s=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Gr.copy(i.boundingSphere),Gr.applyMatrix4(n),Gr.radius+=s,t.ray.intersectsSphere(Gr)===!1)return;gc.copy(n).invert(),As.copy(t.ray).applyMatrix4(gc);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),h=a*a,l=this.isLineSegments?2:1,c=i.index,d=i.attributes.position;if(c!==null){let f=Math.max(0,o.start),g=Math.min(c.count,o.start+o.count);for(let x=f,m=g-1;x<m;x+=l){let p=c.getX(x),_=c.getX(x+1),M=Vr(this,t,As,h,p,_,x);M&&e.push(M)}if(this.isLineLoop){let x=c.getX(g-1),m=c.getX(f),p=Vr(this,t,As,h,x,m,g-1);p&&e.push(p)}}else{let f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let x=f,m=g-1;x<m;x+=l){let p=Vr(this,t,As,h,x,x+1,x);p&&e.push(p)}if(this.isLineLoop){let x=Vr(this,t,As,h,g-1,f,g-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=n.length;s<o;s++){let a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Vr(r,t,e,i,n,s,o){let a=r.geometry.attributes.position;if(uo.fromBufferAttribute(a,n),fo.fromBufferAttribute(a,s),e.distanceSqToSegment(uo,fo,bl,xc)>i)return;bl.applyMatrix4(r.matrixWorld);let l=t.ray.origin.distanceTo(bl);if(!(l<t.near||l>t.far))return{distance:l,point:xc.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}var yc=new D,_c=new D,Bs=class extends po{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let n=0,s=e.count;n<s;n+=2)yc.fromBufferAttribute(e,n),_c.fromBufferAttribute(e,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+yc.distanceTo(_c);t.setAttribute("lineDistance",new Qt(i,1))}else Pt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var $i=class extends Li{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new yt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},vc=new jt,Rl=new ss,Wr=new Ii,Xr=new D,un=class extends we{constructor(t=new ge,e=new $i){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,n=this.matrixWorld,s=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Wr.copy(i.boundingSphere),Wr.applyMatrix4(n),Wr.radius+=s,t.ray.intersectsSphere(Wr)===!1)return;vc.copy(n).invert(),Rl.copy(t.ray).applyMatrix4(vc);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),h=a*a,l=i.index,u=i.attributes.position;if(l!==null){let d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,x=f;g<x;g++){let m=l.getX(g);Xr.fromBufferAttribute(u,m),Mc(Xr,m,h,n,t,e,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,x=f;g<x;g++)Xr.fromBufferAttribute(u,g),Mc(Xr,g,h,n,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=n.length;s<o;s++){let a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Mc(r,t,e,i,n,s,o){let a=Rl.distanceSqToPoint(r);if(a<e){let h=new D;Rl.closestPointToPoint(r,h),h.applyMatrix4(i);let l=n.ray.origin.distanceTo(h);if(l<n.near||l>n.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:h,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Hs=class extends Qe{constructor(t=[],e=Ln,i,n,s,o,a,h,l,c){super(t,e,i,n,s,o,a,h,l,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var bi=class extends Qe{constructor(t,e,i=Si,n,s,o,a=ye,h=ye,l,c=Yi,u=1){if(c!==Yi&&c!==ji)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,n,s,o,a,h,c,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new is(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Gs=class extends bi{constructor(t,e=Si,i=Ln,n,s,o=ye,a=ye,h,l=Yi){let c={width:t,height:t,depth:1},u=[c,c,c,c,c,c];super(t,t,e,i,n,s,o,a,h,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Vs=class extends Qe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ke=class r extends ge{constructor(t=1,e=1,i=1,n=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:s,depthSegments:o};let a=this;n=Math.floor(n),s=Math.floor(s),o=Math.floor(o);let h=[],l=[],c=[],u=[],d=0,f=0;g("z","y","x",-1,-1,i,e,t,o,s,0),g("z","y","x",1,-1,i,e,-t,o,s,1),g("x","z","y",1,1,t,i,e,n,o,2),g("x","z","y",1,-1,t,i,-e,n,o,3),g("x","y","z",1,-1,t,e,i,n,s,4),g("x","y","z",-1,-1,t,e,-i,n,s,5),this.setIndex(h),this.setAttribute("position",new Qt(l,3)),this.setAttribute("normal",new Qt(c,3)),this.setAttribute("uv",new Qt(u,2));function g(x,m,p,_,M,v,T,S,y,b,C){let R=v/y,P=T/b,k=v/2,B=T/2,L=S/2,V=y+1,W=b+1,H=0,Q=0,X=new D;for(let j=0;j<W;j++){let et=j*P-B;for(let wt=0;wt<V;wt++){let Ut=wt*R-k;X[x]=Ut*_,X[m]=et*M,X[p]=L,l.push(X.x,X.y,X.z),X[x]=0,X[m]=0,X[p]=S>0?1:-1,c.push(X.x,X.y,X.z),u.push(wt/y),u.push(1-j/b),H+=1}}for(let j=0;j<b;j++)for(let et=0;et<y;et++){let wt=d+et+V*j,Ut=d+et+V*(j+1),K=d+(et+1)+V*(j+1),mt=d+(et+1)+V*j;h.push(wt,Ut,mt),h.push(Ut,K,mt),Q+=6}a.addGroup(f,Q,C),f+=Q,d+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Di=class r extends ge{constructor(t=1,e=1,i=1,n=32,s=1,o=!1,a=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:h};let l=this;n=Math.floor(n),s=Math.floor(s);let c=[],u=[],d=[],f=[],g=0,x=[],m=i/2,p=0;_(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(c),this.setAttribute("position",new Qt(u,3)),this.setAttribute("normal",new Qt(d,3)),this.setAttribute("uv",new Qt(f,2));function _(){let v=new D,T=new D,S=0,y=(e-t)/i;for(let b=0;b<=s;b++){let C=[],R=b/s,P=R*(e-t)+t;for(let k=0;k<=n;k++){let B=k/n,L=B*h+a,V=Math.sin(L),W=Math.cos(L);T.x=P*V,T.y=-R*i+m,T.z=P*W,u.push(T.x,T.y,T.z),v.set(V,y,W).normalize(),d.push(v.x,v.y,v.z),f.push(B,1-R),C.push(g++)}x.push(C)}for(let b=0;b<n;b++)for(let C=0;C<s;C++){let R=x[C][b],P=x[C+1][b],k=x[C+1][b+1],B=x[C][b+1];(t>0||C!==0)&&(c.push(R,P,B),S+=3),(e>0||C!==s-1)&&(c.push(P,k,B),S+=3)}l.addGroup(p,S,0),p+=S}function M(v){let T=g,S=new Bt,y=new D,b=0,C=v===!0?t:e,R=v===!0?1:-1;for(let k=1;k<=n;k++)u.push(0,m*R,0),d.push(0,R,0),f.push(.5,.5),g++;let P=g;for(let k=0;k<=n;k++){let L=k/n*h+a,V=Math.cos(L),W=Math.sin(L);y.x=C*W,y.y=m*R,y.z=C*V,u.push(y.x,y.y,y.z),d.push(0,R,0),S.x=V*.5+.5,S.y=W*.5*R+.5,f.push(S.x,S.y),g++}for(let k=0;k<n;k++){let B=T+k,L=P+k;v===!0?c.push(L,L+1,B):c.push(L+1,L,B),b+=3}l.addGroup(p,b,v===!0?1:2),p+=b}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ws=class r extends Di{constructor(t=1,e=1,i=32,n=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,i,n,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new r(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Xs=class r extends ge{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};let s=[],o=[];a(n),l(i),c(),this.setAttribute("position",new Qt(s,3)),this.setAttribute("normal",new Qt(s.slice(),3)),this.setAttribute("uv",new Qt(o,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let M=new D,v=new D,T=new D;for(let S=0;S<e.length;S+=3)f(e[S+0],M),f(e[S+1],v),f(e[S+2],T),h(M,v,T,_)}function h(_,M,v,T){let S=T+1,y=[];for(let b=0;b<=S;b++){y[b]=[];let C=_.clone().lerp(v,b/S),R=M.clone().lerp(v,b/S),P=S-b;for(let k=0;k<=P;k++)k===0&&b===S?y[b][k]=C:y[b][k]=C.clone().lerp(R,k/P)}for(let b=0;b<S;b++)for(let C=0;C<2*(S-b)-1;C++){let R=Math.floor(C/2);C%2===0?(d(y[b][R+1]),d(y[b+1][R]),d(y[b][R])):(d(y[b][R+1]),d(y[b+1][R+1]),d(y[b+1][R]))}}function l(_){let M=new D;for(let v=0;v<s.length;v+=3)M.x=s[v+0],M.y=s[v+1],M.z=s[v+2],M.normalize().multiplyScalar(_),s[v+0]=M.x,s[v+1]=M.y,s[v+2]=M.z}function c(){let _=new D;for(let M=0;M<s.length;M+=3){_.x=s[M+0],_.y=s[M+1],_.z=s[M+2];let v=m(_)/2/Math.PI+.5,T=p(_)/Math.PI+.5;o.push(v,1-T)}g(),u()}function u(){for(let _=0;_<o.length;_+=6){let M=o[_+0],v=o[_+2],T=o[_+4],S=Math.max(M,v,T),y=Math.min(M,v,T);S>.9&&y<.1&&(M<.2&&(o[_+0]+=1),v<.2&&(o[_+2]+=1),T<.2&&(o[_+4]+=1))}}function d(_){s.push(_.x,_.y,_.z)}function f(_,M){let v=_*3;M.x=t[v+0],M.y=t[v+1],M.z=t[v+2]}function g(){let _=new D,M=new D,v=new D,T=new D,S=new Bt,y=new Bt,b=new Bt;for(let C=0,R=0;C<s.length;C+=9,R+=6){_.set(s[C+0],s[C+1],s[C+2]),M.set(s[C+3],s[C+4],s[C+5]),v.set(s[C+6],s[C+7],s[C+8]),S.set(o[R+0],o[R+1]),y.set(o[R+2],o[R+3]),b.set(o[R+4],o[R+5]),T.copy(_).add(M).add(v).divideScalar(3);let P=m(T);x(S,R+0,_,P),x(y,R+2,M,P),x(b,R+4,v,P)}}function x(_,M,v,T){T<0&&_.x===1&&(o[M]=_.x-1),v.x===0&&v.z===0&&(o[M]=T/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function p(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.vertices,t.indices,t.radius,t.detail)}};var Ki=class r extends Xs{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}};var qs=class r extends Xs{constructor(t=1,e=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,n,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}},Ys=class r extends ge{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};let s=t/2,o=e/2,a=Math.floor(i),h=Math.floor(n),l=a+1,c=h+1,u=t/a,d=e/h,f=[],g=[],x=[],m=[];for(let p=0;p<c;p++){let _=p*d-o;for(let M=0;M<l;M++){let v=M*u-s;g.push(v,-_,0),x.push(0,0,1),m.push(M/a),m.push(1-p/h)}}for(let p=0;p<h;p++)for(let _=0;_<a;_++){let M=_+l*p,v=_+l*(p+1),T=_+1+l*(p+1),S=_+1+l*p;f.push(M,v,S),f.push(v,T,S)}this.setIndex(f),this.setAttribute("position",new Qt(g,3)),this.setAttribute("normal",new Qt(x,3)),this.setAttribute("uv",new Qt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}};var $s=class r extends ge{constructor(t=1,e=32,i=16,n=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let h=Math.min(o+a,Math.PI),l=0,c=[],u=new D,d=new D,f=[],g=[],x=[],m=[];for(let p=0;p<=i;p++){let _=[],M=p/i,v=o+M*a,T=t*Math.cos(v),S=Math.sqrt(t*t-T*T),y=0;p===0&&o===0?y=.5/e:p===i&&h===Math.PI&&(y=-.5/e);for(let b=0;b<=e;b++){let C=b/e,R=n+C*s;u.x=-S*Math.cos(R),u.y=T,u.z=S*Math.sin(R),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(C+y,1-M),_.push(l++)}c.push(_)}for(let p=0;p<i;p++)for(let _=0;_<e;_++){let M=c[p][_+1],v=c[p][_],T=c[p+1][_],S=c[p+1][_+1];(p!==0||o>0)&&f.push(M,v,S),(p!==i-1||h<Math.PI)&&f.push(v,T,S)}this.setIndex(f),this.setAttribute("position",new Qt(g,3)),this.setAttribute("normal",new Qt(x,3)),this.setAttribute("uv",new Qt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function Nn(r){let t={};for(let e in r){t[e]={};for(let i in r[e]){let n=r[e][i];if(bc(n))n.isRenderTargetTexture?(Pt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone();else if(Array.isArray(n))if(bc(n[0])){let s=[];for(let o=0,a=n.length;o<a;o++)s[o]=n[o].clone();t[e][i]=s}else t[e][i]=n.slice();else t[e][i]=n}}return t}function Ye(r){let t={};for(let e=0;e<r.length;e++){let i=Nn(r[e]);for(let n in i)t[n]=i[n]}return t}function bc(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function Zd(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function rh(r){let t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:$t.workingColorSpace}var pu={clone:Nn,merge:Ye},Jd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ze=class extends Li{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jd,this.fragmentShader=jd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Nn(t.uniforms),this.uniformsGroups=Zd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let n in this.uniforms){let o=this.uniforms[n].value;o&&o.isTexture?e.uniforms[n]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[n]={type:"m4",value:o.toArray()}:e.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let n=t.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=e[n.value]||null;break;case"c":this.uniforms[i].value=new yt().setHex(n.value);break;case"v2":this.uniforms[i].value=new Bt().fromArray(n.value);break;case"v3":this.uniforms[i].value=new D().fromArray(n.value);break;case"v4":this.uniforms[i].value=new fe().fromArray(n.value);break;case"m3":this.uniforms[i].value=new Ft().fromArray(n.value);break;case"m4":this.uniforms[i].value=new jt().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},mo=class extends Ze{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var dn=class extends Li{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new yt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ga,this.normalScale=new Bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var go=class extends Li{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},xo=class extends Li{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Kn(r,t){return!r||r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function qr(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}var fn=class{constructor(t,e,i,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,n=e[i],s=e[i-1];i:{t:{let o;e:{n:if(!(t<n)){for(let a=i+2;;){if(n===void 0){if(t<s)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=n,n=e[++i],t<n)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(i=2,s=a);for(let h=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===h)break;if(n=s,s=e[--i-1],t>=s)break t}o=i,i=0;break e}break i}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(n=e[i],s=e[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=t*n;for(let o=0;o!==n;++o)e[o]=i[s+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},yo=class extends fn{constructor(t,e,i,n){super(t,e,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Tl,endingEnd:Tl}}intervalChanged_(t,e,i){let n=this.parameterPositions,s=t-2,o=t+1,a=n[s],h=n[o];if(a===void 0)switch(this.getSettings_().endingStart){case El:s=t,a=2*e-i;break;case Al:s=n.length-2,a=e+n[s]-n[s+1];break;default:s=t,a=i}if(h===void 0)switch(this.getSettings_().endingEnd){case El:o=t,h=2*i-e;break;case Al:o=1,h=i+n[1]-n[0];break;default:o=t-1,h=e}let l=(i-e)*.5,c=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(h-i),this._offsetPrev=s*c,this._offsetNext=o*c}interpolate_(t,e,i,n){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,h=t*a,l=h-a,c=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-e)/(n-e),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,_=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,M=(-1-f)*m+(1.5+f)*x+.5*g,v=f*m-f*x;for(let T=0;T!==a;++T)s[T]=p*o[c+T]+_*o[l+T]+M*o[h+T]+v*o[u+T];return s}},_o=class extends fn{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,h=t*a,l=h-a,c=(i-e)/(n-e),u=1-c;for(let d=0;d!==a;++d)s[d]=o[l+d]*u+o[h+d]*c;return s}},vo=class extends fn{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t){return this.copySampleValue_(t-1)}},Mo=class extends fn{interpolate_(t,e,i,n){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,h=t*a,l=h-a,c=this.inTangents,u=this.outTangents;if(!c||!u){let g=(i-e)/(n-e),x=1-g;for(let m=0;m!==a;++m)s[m]=o[l+m]*x+o[h+m]*g;return s}let d=a*2,f=t-1;for(let g=0;g!==a;++g){let x=o[l+g],m=o[h+g],p=f*d+g*2,_=u[p],M=u[p+1],v=t*d+g*2,T=c[v],S=c[v+1],y=tf(i,e,_,T,n);s[g]=mu(y,x,M,S,m)}return s}};function mu(r,t,e,i,n){let s=1-r;return s*s*s*t+3*s*s*r*e+3*s*r*r*i+r*r*r*n}function Qd(r,t,e,i,n){let s=1-r;return 3*s*s*(e-t)+6*s*r*(i-e)+3*r*r*(n-i)}function tf(r,t,e,i,n){let s=(r-t)/(n-t);for(let o=0;o<8;o++){let a=mu(s,t,e,i,n)-r;if(Math.abs(a)<1e-10)break;let h=Qd(s,t,e,i,n);if(Math.abs(h)<1e-10)break;s=Math.max(0,Math.min(1,s-a/h))}return s}var si=class{constructor(t,e,i,n){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Kn(e,this.TimeBufferType),this.values=Kn(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Kn(t.times,Array),values:Kn(t.values,Array)};let n=t.getInterpolation();n!==t.DefaultInterpolation&&(i.interpolation=n),qr(t.settings)&&(i.settings={inTangents:Kn(t.settings.inTangents,Array),outTangents:Kn(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new vo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new _o(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new yo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Mo(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Cs:e=this.InterpolantFactoryMethodDiscrete;break;case oo:e=this.InterpolantFactoryMethodLinear;break;case Kr:e=this.InterpolantFactoryMethodSmooth;break;case wl:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Pt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Cs;case this.InterpolantFactoryMethodLinear:return oo;case this.InterpolantFactoryMethodSmooth:return Kr;case this.InterpolantFactoryMethodBezier:return wl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]+=t;qr(this.settings)&&(Sc(this.settings.inTangents,t),Sc(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]*=t;qr(this.settings)&&(wc(this.settings.inTangents,t),wc(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,n=i.length,s=0,o=n-1;for(;s!==n&&i[s]<t;)++s;for(;o!==-1&&i[o]>e;)--o;if(++o,s!==0||o!==n){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Dt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,n=this.values,s=i.length;s===0&&(Dt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let h=i[a];if(typeof h=="number"&&isNaN(h)){Dt("KeyframeTrack: Time is not a valid number.",this,a,h),t=!1;break}if(o!==null&&o>h){Dt("KeyframeTrack: Out of order keys.",this,a,h,o),t=!1;break}o=h}if(n!==void 0&&Ad(n))for(let a=0,h=n.length;a!==h;++a){let l=n[a];if(isNaN(l)){Dt("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===Kr,s=t.length-1,o=1;for(let a=1;a<s;++a){let h=!1,l=t[a],c=t[a+1];if(l!==c&&(a!==1||l!==t[0]))if(n)h=!0;else{let u=a*i,d=u-i,f=u+i;for(let g=0;g!==i;++g){let x=e[u+g];if(x!==e[d+g]||x!==e[f+g]){h=!0;break}}}if(h){if(a!==o){t[o]=t[a];let u=a*i,d=o*i;for(let f=0;f!==i;++f)e[d+f]=e[u+f]}++o}}if(s>0){t[o]=t[s];for(let a=s*i,h=o*i,l=0;l!==i;++l)e[h+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,n=new i(this.name,t,e);return n.createInterpolant=this.createInterpolant,qr(this.settings)&&(n.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),n}};function Sc(r,t){for(let e=0,i=r.length;e!==i;e+=2)r[e]+=t}function wc(r,t){for(let e=0,i=r.length;e!==i;e+=2)r[e]*=t}si.prototype.ValueTypeName="";si.prototype.TimeBufferType=Float32Array;si.prototype.ValueBufferType=Float32Array;si.prototype.DefaultInterpolation=oo;var pn=class extends si{constructor(t,e,i){super(t,e,i)}};pn.prototype.ValueTypeName="bool";pn.prototype.ValueBufferType=Array;pn.prototype.DefaultInterpolation=Cs;pn.prototype.InterpolantFactoryMethodLinear=void 0;pn.prototype.InterpolantFactoryMethodSmooth=void 0;var bo=class extends si{constructor(t,e,i,n){super(t,e,i,n)}};bo.prototype.ValueTypeName="color";var So=class extends si{constructor(t,e,i,n){super(t,e,i,n)}};So.prototype.ValueTypeName="number";var wo=class extends fn{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,h=(i-e)/(n-e),l=t*a;for(let c=l+a;l!==c;l+=4)je.slerpFlat(s,0,o,l-a,o,l,h);return s}},Ks=class extends si{constructor(t,e,i,n){super(t,e,i,n)}InterpolantFactoryMethodLinear(t){return new wo(this.times,this.values,this.getValueSize(),t)}};Ks.prototype.ValueTypeName="quaternion";Ks.prototype.InterpolantFactoryMethodSmooth=void 0;var mn=class extends si{constructor(t,e,i){super(t,e,i)}};mn.prototype.ValueTypeName="string";mn.prototype.ValueBufferType=Array;mn.prototype.DefaultInterpolation=Cs;mn.prototype.InterpolantFactoryMethodLinear=void 0;mn.prototype.InterpolantFactoryMethodSmooth=void 0;var To=class extends si{constructor(t,e,i,n){super(t,e,i,n)}};To.prototype.ValueTypeName="vector";var Eo=class{constructor(t,e,i){let n=this,s=!1,o=0,a=0,h,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(c){a++,s===!1&&n.onStart!==void 0&&n.onStart(c,o,a),s=!0},this.itemEnd=function(c){o++,n.onProgress!==void 0&&n.onProgress(c,o,a),o===a&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(c){n.onError!==void 0&&n.onError(c)},this.resolveURL=function(c){return c=c.normalize("NFC"),h?h(c):c},this.setURLModifier=function(c){return h=c,this},this.addHandler=function(c,u){return l.push(c,u),this},this.removeHandler=function(c){let u=l.indexOf(c);return u!==-1&&l.splice(u,2),this},this.getHandler=function(c){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(c))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},gu=new Eo,Ao=class{constructor(t){this.manager=t!==void 0?t:gu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(n,s){i.load(t,n,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Ao.DEFAULT_MATERIAL_NAME="__DEFAULT";var os=class extends we{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new yt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Zs=class extends os{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(we.DEFAULT_UP),this.updateMatrix(),this.groundColor=new yt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Sl=new jt,Tc=new D,Ec=new D,Js=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Bt(512,512),this.mapType=qe,this.map=null,this.mapPass=null,this.matrix=new jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cn,this._frameExtents=new Bt(1,1),this._viewportCount=1,this._viewports=[new fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Tc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Tc),Ec.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ec),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,n){Sl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(Sl,t.coordinateSystem,t.reversedDepth);let s=this._frameExtents,o=n?n.z/s.x:1,a=n?n.w/s.y:1,h=n?n.x/s.x:0,l=n?n.y/s.y:0;t.coordinateSystem===ts||t.reversedDepth?e.set(.5*o,0,0,.5*o+h,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+h,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),e.multiply(Sl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Yr=new D,$r=new je,Ei=new D,js=class extends we{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=di,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Yr,$r,Ei),Ei.x===1&&Ei.y===1&&Ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yr,$r,Ei.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Yr,$r,Ei),Ei.x===1&&Ei.y===1&&Ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yr,$r,Ei.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ln=new D,Ac=new Bt,Rc=new Bt,We=class extends js{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ds*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(el*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ds*2*Math.atan(Math.tan(el*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ln.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ln.x,ln.y).multiplyScalar(-t/ln.z),ln.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ln.x,ln.y).multiplyScalar(-t/ln.z)}getViewSize(t,e){return this.getViewBounds(t,Ac,Rc),e.subVectors(Rc,Ac)}setViewOffset(t,e,i,n,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(el*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,s=-.5*n,o=this.view;if(this.view!==null&&this.view.enabled){let h=o.fullWidth,l=o.fullHeight;s+=o.offsetX*n/h,e-=o.offsetY*i/l,n*=o.width/h,i*=o.height/l}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Cl=class extends Js{constructor(){super(new We(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,i=Ds*2*t.angle*this.focus,n=this.mapSize.width/this.mapSize.height*this.aspect,s=t.distance||e.far;(i!==e.fov||n!==e.aspect||s!==e.far)&&(e.fov=i,e.aspect=n,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){let t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}},Qs=class extends os{constructor(t,e,i=0,n=Math.PI/3,s=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(we.DEFAULT_UP),this.updateMatrix(),this.target=new we,this.distance=i,this.angle=n,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Cl}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}};var Rn=class extends js{constructor(t=-1,e=1,i=1,n=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,s=i-t,o=i+t,a=n+e,h=n-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=c*this.view.offsetY,h=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Pl=class extends Js{constructor(){super(new Rn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},tr=class extends os{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(we.DEFAULT_UP),this.updateMatrix(),this.target=new we,this.shadow=new Pl}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Zn=-90,Jn=1,as=class extends we{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new We(Zn,Jn,t,e);n.layers=this.layers,this.add(n);let s=new We(Zn,Jn,t,e);s.layers=this.layers,this.add(s);let o=new We(Zn,Jn,t,e);o.layers=this.layers,this.add(o);let a=new We(Zn,Jn,t,e);a.layers=this.layers,this.add(a);let h=new We(Zn,Jn,t,e);h.layers=this.layers,this.add(h);let l=new We(Zn,Jn,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,n,s,o,a,h]=e;for(let l of e)this.remove(l);if(t===di)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(t===ts)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,h,l,c]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(i,1,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(i,4,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),i.texture.mipmapsAutoUpdate=x,t.setRenderTarget(i,5,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(u,d,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Ro=class extends We{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var oh="\\[\\]\\.:\\/",ef=new RegExp("["+oh+"]","g"),ah="[^"+oh+"]",nf="[^"+oh.replace("\\.","")+"]",sf=/((?:WC+[\/:])*)/.source.replace("WC",ah),rf=/(WCOD+)?/.source.replace("WCOD",nf),of=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ah),af=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ah),lf=new RegExp("^"+sf+rf+of+af+"$"),hf=["material","materials","bones","map"],Il=class{constructor(t,e,i){let n=i||ce.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,n)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,s=i.length;n!==s;++n)i[n].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},ce=class r{constructor(t,e,i){this.path=e,this.parsedPath=i||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,i):new r(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(ef,"")}static parseTrackName(t){let e=lf.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let s=i.nodeName.substring(n+1);hf.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let h=i(a.children);if(h)return h}return null},n=i(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)t[e++]=i[n]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,n=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Pt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=e.objectIndex;switch(i){case"materials":if(!t.material){Dt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Dt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Dt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let c=0;c<t.length;c++)if(t[c].name===l){l=c;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Dt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Dt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Dt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(l!==void 0){if(t[l]===void 0){Dt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[n];if(o===void 0){let l=e.nodeName;Dt("PropertyBinding: Trying to update property for track: "+l+"."+n+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let h=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!t.geometry){Dt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Dt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}h=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(h=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(h=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=n;this.getValue=this.GetterByBindingType[h],this.setValue=this.SetterByBindingTypeAndVersioning[h][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ce.Composite=Il;ce.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ce.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ce.prototype.GetterByBindingType=[ce.prototype._getValue_direct,ce.prototype._getValue_array,ce.prototype._getValue_arrayElement,ce.prototype._getValue_toArray];ce.prototype.SetterByBindingTypeAndVersioning=[[ce.prototype._setValue_direct,ce.prototype._setValue_direct_setNeedsUpdate,ce.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_array,ce.prototype._setValue_array_setNeedsUpdate,ce.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_arrayElement,ce.prototype._setValue_arrayElement_setNeedsUpdate,ce.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_fromArray,ce.prototype._setValue_fromArray_setNeedsUpdate,ce.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ex=new Float32Array(1);var fh=class fh{constructor(t,e,i,n){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,n)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,n){let s=this.elements;return s[0]=t,s[2]=e,s[1]=i,s[3]=n,this}};fh.prototype.isMatrix2=!0;var Ll=fh;function lh(r,t,e,i){let n=cf(i);switch(e){case Jl:return r*t;case ko:return r*t/n.components*n.byteLength;case Uo:return r*t/n.components*n.byteLength;case xn:return r*t*2/n.components*n.byteLength;case Oo:return r*t*2/n.components*n.byteLength;case jl:return r*t*3/n.components*n.byteLength;case oi:return r*t*4/n.components*n.byteLength;case zo:return r*t*4/n.components*n.byteLength;case ir:case nr:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case sr:case rr:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ho:case Vo:return Math.max(r,16)*Math.max(t,8)/4;case Bo:case Go:return Math.max(r,8)*Math.max(t,8)/2;case Wo:case Xo:case Yo:case $o:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case qo:case or:case Ko:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Zo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Jo:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case jo:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Qo:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case ta:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case ea:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case ia:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case na:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case sa:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case ra:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case oa:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case aa:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case la:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case ha:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case ca:case ua:case da:return Math.ceil(r/4)*Math.ceil(t/4)*16;case fa:case pa:return Math.ceil(r/4)*Math.ceil(t/4)*8;case ar:case ma:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function cf(r){switch(r){case qe:case Yl:return{byteLength:1,components:1};case us:case $l:case ri:return{byteLength:2,components:1};case No:case Fo:return{byteLength:2,components:4};case Si:case Do:case pi:return{byteLength:4,components:1};case Kl:case Zl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Pt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Ou(){let r=null,t=!1,e=null,i=null;function n(s,o){i=r.requestAnimationFrame(n),e(s,o)}return{start:function(){t!==!0&&e!==null&&r!==null&&(i=r.requestAnimationFrame(n),t=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function df(r){let t=new WeakMap;function e(a,h){let l=a.array,c=a.usage,u=l.byteLength,d=r.createBuffer();r.bindBuffer(h,d),r.bufferData(h,l,c),a.onUploadCallback();let f;if(l instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=r.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=r.SHORT;else if(l instanceof Uint32Array)f=r.UNSIGNED_INT;else if(l instanceof Int32Array)f=r.INT;else if(l instanceof Int8Array)f=r.BYTE;else if(l instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,h,l){let c=h.array,u=h.updateRanges;if(r.bindBuffer(l,a),u.length===0)r.bufferSubData(l,0,c);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],x=u[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let x=u[f];r.bufferSubData(l,x.start*c.BYTES_PER_ELEMENT,c,x.start,x.count)}h.clearUpdateRanges()}h.onUploadCallback()}function n(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let h=t.get(a);h&&(r.deleteBuffer(h.buffer),t.delete(a))}function o(a,h){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let c=t.get(a);(!c||c.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,h));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,h),l.version=a.version}}return{get:n,remove:s,update:o}}var ff=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pf=`#ifdef USE_ALPHAHASH
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
#endif`,mf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_f=`#ifdef USE_AOMAP
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
#endif`,vf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Mf=`#ifdef USE_BATCHING
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
#endif`,bf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Sf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Tf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ef=`#ifdef USE_IRIDESCENCE
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
#endif`,Af=`#ifdef USE_BUMPMAP
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
#endif`,Rf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Cf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Pf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,If=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Df=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Nf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ff=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,kf=`#define PI 3.141592653589793
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
} // validated`,Uf=`vec3 transformedNormal = objectNormal;
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
#endif`,Of=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Wf=`#ifdef USE_ENVMAP
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
#endif`,Xf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,qf=`#ifdef USE_ENVMAP
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
#endif`,Yf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$f=`#ifdef USE_ENVMAP
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
#endif`,Kf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qf=`#ifdef USE_GRADIENTMAP
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
}`,tp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ep=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ip=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,np=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,sp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
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
				#ifdef ENVMAP_TYPE_PMREM
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
#endif`,rp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,op=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ap=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
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
#endif`,cp=`uniform sampler2D dfgLUT;
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
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
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
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
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
}`,up=`
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,dp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
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
#endif`,fp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pp=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
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
#endif`,mp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_p=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,bp=`#if defined( USE_POINTS_UV )
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
#endif`,Sp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ep=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ap=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rp=`#ifdef USE_MORPHTARGETS
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
#endif`,Cp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ip=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Lp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Np=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Fp=`#ifdef USE_NORMALMAP
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
#endif`,kp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Up=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Op=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Bp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Gp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$p=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
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
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
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
#endif`,Kp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Jp=`float getShadowMask() {
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
}`,jp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qp=`#ifdef USE_SKINNING
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
#endif`,t0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,e0=`#ifdef USE_SKINNING
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
#endif`,i0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,n0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,s0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,r0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,o0=`#ifdef USE_TRANSMISSION
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
#endif`,a0=`#ifdef USE_TRANSMISSION
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
#endif`,l0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,h0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,c0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
#endif`,u0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,d0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,f0=`uniform sampler2D t2D;
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
}`,p0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,m0=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,x0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,y0=`#include <common>
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
}`,_0=`#if DEPTH_PACKING == 3200
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
}`,v0=`#define DISTANCE
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
}`,M0=`#define DISTANCE
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
}`,b0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,S0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,w0=`uniform float scale;
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
}`,T0=`uniform vec3 diffuse;
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
}`,E0=`#include <common>
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
}`,A0=`uniform vec3 diffuse;
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
}`,R0=`#define LAMBERT
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
}`,C0=`#define LAMBERT
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
}`,P0=`#define MATCAP
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
}`,I0=`#define MATCAP
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
}`,L0=`#define NORMAL
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
}`,D0=`#define NORMAL
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
}`,N0=`#define PHONG
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
}`,F0=`#define PHONG
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
}`,k0=`#define STANDARD
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
}`,U0=`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
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
}`,O0=`#define TOON
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
}`,z0=`#define TOON
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
}`,B0=`uniform float size;
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
}`,H0=`uniform vec3 diffuse;
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
}`,G0=`#include <common>
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
}`,V0=`uniform vec3 color;
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
}`,W0=`uniform float rotation;
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
}`,X0=`uniform vec3 diffuse;
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
}`,Vt={alphahash_fragment:ff,alphahash_pars_fragment:pf,alphamap_fragment:mf,alphamap_pars_fragment:gf,alphatest_fragment:xf,alphatest_pars_fragment:yf,aomap_fragment:_f,aomap_pars_fragment:vf,batching_pars_vertex:Mf,batching_vertex:bf,begin_vertex:Sf,beginnormal_vertex:wf,bsdfs:Tf,iridescence_fragment:Ef,bumpmap_pars_fragment:Af,clipping_planes_fragment:Rf,clipping_planes_pars_fragment:Cf,clipping_planes_pars_vertex:Pf,clipping_planes_vertex:If,color_fragment:Lf,color_pars_fragment:Df,color_pars_vertex:Nf,color_vertex:Ff,common:kf,defaultnormal_vertex:Uf,displacementmap_pars_vertex:Of,displacementmap_vertex:zf,emissivemap_fragment:Bf,emissivemap_pars_fragment:Hf,colorspace_fragment:Gf,colorspace_pars_fragment:Vf,envmap_fragment:Wf,envmap_common_pars_fragment:Xf,envmap_pars_fragment:qf,envmap_pars_vertex:Yf,envmap_physical_pars_fragment:sp,envmap_vertex:$f,fog_vertex:Kf,fog_pars_vertex:Zf,fog_fragment:Jf,fog_pars_fragment:jf,gradientmap_pars_fragment:Qf,lightmap_pars_fragment:tp,lights_lambert_fragment:ep,lights_lambert_pars_fragment:ip,lights_pars_begin:np,lights_toon_fragment:rp,lights_toon_pars_fragment:op,lights_phong_fragment:ap,lights_phong_pars_fragment:lp,lights_physical_fragment:hp,lights_physical_pars_fragment:cp,lights_fragment_begin:up,lights_fragment_maps:dp,lights_fragment_end:fp,lightprobes_pars_fragment:pp,logdepthbuf_fragment:mp,logdepthbuf_pars_fragment:gp,logdepthbuf_pars_vertex:xp,logdepthbuf_vertex:yp,map_fragment:_p,map_pars_fragment:vp,map_particle_fragment:Mp,map_particle_pars_fragment:bp,metalnessmap_fragment:Sp,metalnessmap_pars_fragment:wp,morphinstance_vertex:Tp,morphcolor_vertex:Ep,morphnormal_vertex:Ap,morphtarget_pars_vertex:Rp,morphtarget_vertex:Cp,normal_fragment_begin:Pp,normal_fragment_maps:Ip,normal_pars_fragment:Lp,normal_pars_vertex:Dp,normal_vertex:Np,normalmap_pars_fragment:Fp,clearcoat_normal_fragment_begin:kp,clearcoat_normal_fragment_maps:Up,clearcoat_pars_fragment:Op,iridescence_pars_fragment:zp,opaque_fragment:Bp,packing:Hp,premultiplied_alpha_fragment:Gp,project_vertex:Vp,dithering_fragment:Wp,dithering_pars_fragment:Xp,roughnessmap_fragment:qp,roughnessmap_pars_fragment:Yp,shadowmap_pars_fragment:$p,shadowmap_pars_vertex:Kp,shadowmap_vertex:Zp,shadowmask_pars_fragment:Jp,skinbase_vertex:jp,skinning_pars_vertex:Qp,skinning_vertex:t0,skinnormal_vertex:e0,specularmap_fragment:i0,specularmap_pars_fragment:n0,tonemapping_fragment:s0,tonemapping_pars_fragment:r0,transmission_fragment:o0,transmission_pars_fragment:a0,uv_pars_fragment:l0,uv_pars_vertex:h0,uv_vertex:c0,worldpos_vertex:u0,background_vert:d0,background_frag:f0,backgroundCube_vert:p0,backgroundCube_frag:m0,cube_vert:g0,cube_frag:x0,depth_vert:y0,depth_frag:_0,distance_vert:v0,distance_frag:M0,equirect_vert:b0,equirect_frag:S0,linedashed_vert:w0,linedashed_frag:T0,meshbasic_vert:E0,meshbasic_frag:A0,meshlambert_vert:R0,meshlambert_frag:C0,meshmatcap_vert:P0,meshmatcap_frag:I0,meshnormal_vert:L0,meshnormal_frag:D0,meshphong_vert:N0,meshphong_frag:F0,meshphysical_vert:k0,meshphysical_frag:U0,meshtoon_vert:O0,meshtoon_frag:z0,points_vert:B0,points_frag:H0,shadow_vert:G0,shadow_frag:V0,sprite_vert:W0,sprite_frag:X0},pt={common:{diffuse:{value:new yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new Bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new yt(16777215)},opacity:{value:1},center:{value:new Bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},Fi={basic:{uniforms:Ye([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:Ye([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new yt(0)},envMapIntensity:{value:1}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:Ye([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new yt(0)},specular:{value:new yt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:Ye([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:Ye([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new yt(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:Ye([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:Ye([pt.points,pt.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:Ye([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:Ye([pt.common,pt.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:Ye([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:Ye([pt.sprite,pt.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distance:{uniforms:Ye([pt.common,pt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distance_vert,fragmentShader:Vt.distance_frag},shadow:{uniforms:Ye([pt.lights,pt.fog,{color:{value:new yt(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};Fi.physical={uniforms:Ye([Fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new Bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ft},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new Bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new yt(0)},specularColor:{value:new yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new Bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};var xa={r:0,b:0,g:0},q0=new jt,zu=new Ft;zu.set(-1,0,0,0,1,0,0,0,1);function Y0(r,t,e,i,n,s){let o=new yt(0),a=n===!0?0:1,h,l,c=null,u=0,d=null;function f(_){let M=_.isScene===!0?_.background:null;if(M&&M.isTexture){let v=_.backgroundBlurriness>0;M=t.get(M,v)}return M}function g(_){let M=!1,v=f(_);v===null?m(o,a):v&&v.isColor&&(m(v,1),M=!0);let T=r.xr.getEnvironmentBlendMode();T==="additive"?e.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(r.autoClear||M)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function x(_,M){let v=f(M);v&&v.isCubeTexture?(l===void 0&&(l=new Nt(new Ke(1,1,1),new Ze({name:"BackgroundCubeMaterial",uniforms:Nn(Fi.backgroundCube.uniforms),vertexShader:Fi.backgroundCube.vertexShader,fragmentShader:Fi.backgroundCube.fragmentShader,side:Oe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(T,S,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(q0.makeRotationFromEuler(M.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(zu),l.material.toneMapped=$t.getTransfer(v.colorSpace)!==ie,(c!==v||u!==v.version||d!==r.toneMapping)&&(l.material.needsUpdate=!0,c=v,u=v.version,d=r.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(h===void 0&&(h=new Nt(new Ys(2,2),new Ze({name:"BackgroundMaterial",uniforms:Nn(Fi.background.uniforms),vertexShader:Fi.background.vertexShader,fragmentShader:Fi.background.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=v,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.toneMapped=$t.getTransfer(v.colorSpace)!==ie,v.matrixAutoUpdate===!0&&v.updateMatrix(),h.material.uniforms.uvTransform.value.copy(v.matrix),(c!==v||u!==v.version||d!==r.toneMapping)&&(h.material.needsUpdate=!0,c=v,u=v.version,d=r.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null))}function m(_,M){_.getRGB(xa,rh(r)),e.buffers.color.setClear(xa.r,xa.g,xa.b,M,s)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,M=1){o.set(_),a=M,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,m(o,a)},render:g,addToRenderList:x,dispose:p}}function $0(r,t){let e=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},n=d(null),s=n,o=!1;function a(P,k,B,L,V){let W=!1,H=u(P,L,B,k);s!==H&&(s=H,l(s.object)),W=f(P,L,B,V),W&&g(P,L,B,V),V!==null&&t.update(V,r.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,v(P,k,B,L),V!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function h(){return r.createVertexArray()}function l(P){return r.bindVertexArray(P)}function c(P){return r.deleteVertexArray(P)}function u(P,k,B,L){let V=L.wireframe===!0,W=i[k.id];W===void 0&&(W={},i[k.id]=W);let H=P.isInstancedMesh===!0?P.id:0,Q=W[H];Q===void 0&&(Q={},W[H]=Q);let X=Q[B.id];X===void 0&&(X={},Q[B.id]=X);let j=X[V];return j===void 0&&(j=d(h()),X[V]=j),j}function d(P){let k=[],B=[],L=[];for(let V=0;V<e;V++)k[V]=0,B[V]=0,L[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:B,attributeDivisors:L,object:P,attributes:{},index:null}}function f(P,k,B,L){let V=s.attributes,W=k.attributes,H=0,Q=B.getAttributes();for(let X in Q)if(Q[X].location>=0){let et=V[X],wt=W[X];if(wt===void 0&&(X==="instanceMatrix"&&P.instanceMatrix&&(wt=P.instanceMatrix),X==="instanceColor"&&P.instanceColor&&(wt=P.instanceColor)),et===void 0||et.attribute!==wt||wt&&et.data!==wt.data)return!0;H++}return s.attributesNum!==H||s.index!==L}function g(P,k,B,L){let V={},W=k.attributes,H=0,Q=B.getAttributes();for(let X in Q)if(Q[X].location>=0){let et=W[X];et===void 0&&(X==="instanceMatrix"&&P.instanceMatrix&&(et=P.instanceMatrix),X==="instanceColor"&&P.instanceColor&&(et=P.instanceColor));let wt={};wt.attribute=et,et&&et.data&&(wt.data=et.data),V[X]=wt,H++}s.attributes=V,s.attributesNum=H,s.index=L}function x(){let P=s.newAttributes;for(let k=0,B=P.length;k<B;k++)P[k]=0}function m(P){p(P,0)}function p(P,k){let B=s.newAttributes,L=s.enabledAttributes,V=s.attributeDivisors;B[P]=1,L[P]===0&&(r.enableVertexAttribArray(P),L[P]=1),V[P]!==k&&(r.vertexAttribDivisor(P,k),V[P]=k)}function _(){let P=s.newAttributes,k=s.enabledAttributes;for(let B=0,L=k.length;B<L;B++)k[B]!==P[B]&&(r.disableVertexAttribArray(B),k[B]=0)}function M(P,k,B,L,V,W,H){H===!0?r.vertexAttribIPointer(P,k,B,V,W):r.vertexAttribPointer(P,k,B,L,V,W)}function v(P,k,B,L){x();let V=L.attributes,W=B.getAttributes(),H=k.defaultAttributeValues;for(let Q in W){let X=W[Q];if(X.location>=0){let j=V[Q];if(j===void 0&&(Q==="instanceMatrix"&&P.instanceMatrix&&(j=P.instanceMatrix),Q==="instanceColor"&&P.instanceColor&&(j=P.instanceColor)),j!==void 0){let et=j.normalized,wt=j.itemSize,Ut=t.get(j);if(Ut===void 0)continue;let K=Ut.buffer,mt=Ut.type,vt=Ut.bytesPerElement,Rt=mt===r.INT||mt===r.UNSIGNED_INT||j.gpuType===Do;if(j.isInterleavedBufferAttribute){let gt=j.data,zt=gt.isInterleavedBuffer===!0?gt.stride:gt.itemSize,ve=j.offset;if(gt.isInstancedInterleavedBuffer||gt.isInstancedBufferAttribute){for(let Lt=0;Lt<X.locationSize;Lt++)p(X.location+Lt,gt.meshPerAttribute);P.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let Lt=0;Lt<X.locationSize;Lt++)m(X.location+Lt);r.bindBuffer(r.ARRAY_BUFFER,K);for(let Lt=0;Lt<X.locationSize;Lt++)M(X.location+Lt,wt/X.locationSize,mt,et,zt*vt,(ve+wt/X.locationSize*Lt)*vt,Rt)}else{if(j.isInstancedBufferAttribute){for(let gt=0;gt<X.locationSize;gt++)p(X.location+gt,j.meshPerAttribute);P.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let gt=0;gt<X.locationSize;gt++)m(X.location+gt);r.bindBuffer(r.ARRAY_BUFFER,K);for(let gt=0;gt<X.locationSize;gt++)M(X.location+gt,wt/X.locationSize,mt,et,wt*vt,wt/X.locationSize*gt*vt,Rt)}}else if(H!==void 0){let et=H[Q];if(et!==void 0)switch(et.length){case 2:r.vertexAttrib2fv(X.location,et);break;case 3:r.vertexAttrib3fv(X.location,et);break;case 4:r.vertexAttrib4fv(X.location,et);break;default:r.vertexAttrib1fv(X.location,et)}}}}_()}function T(){C();for(let P in i){let k=i[P];for(let B in k){let L=k[B];for(let V in L){let W=L[V];for(let H in W)c(W[H].object),delete W[H];delete L[V]}}delete i[P]}}function S(P){if(i[P.id]===void 0)return;let k=i[P.id];for(let B in k){let L=k[B];for(let V in L){let W=L[V];for(let H in W)c(W[H].object),delete W[H];delete L[V]}}delete i[P.id]}function y(P){for(let k in i){let B=i[k];for(let L in B){let V=B[L];if(V[P.id]===void 0)continue;let W=V[P.id];for(let H in W)c(W[H].object),delete W[H];delete V[P.id]}}}function b(P){for(let k in i){let B=i[k],L=P.isInstancedMesh===!0?P.id:0,V=B[L];if(V!==void 0){for(let W in V){let H=V[W];for(let Q in H)c(H[Q].object),delete H[Q];delete V[W]}delete B[L],Object.keys(B).length===0&&delete i[k]}}}function C(){R(),o=!0,s!==n&&(s=n,l(s.object))}function R(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:a,reset:C,resetDefaultState:R,dispose:T,releaseStatesOfGeometry:S,releaseStatesOfObject:b,releaseStatesOfProgram:y,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function K0(r,t,e){let i;function n(h){i=h}function s(h,l){r.drawArrays(i,h,l),e.update(l,i,1)}function o(h,l,c){c!==0&&(r.drawArraysInstanced(i,h,l,c),e.update(l,i,c))}function a(h,l,c){if(c===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,l,0,c);let d=0;for(let f=0;f<c;f++)d+=l[f];e.update(d,i,1)}this.setMode=n,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function Z0(r,t,e,i){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let y=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(y){return!(y!==oi&&i.convert(y)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(y){let b=y===ri&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(y!==qe&&y!==pi&&!b&&i.convert(y)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function h(y){if(y==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",c=h(l);c!==l&&(Pt("WebGLRenderer:",l,"not supported, using",c,"instead."),l=c);let u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.logarithmicDepthBuffer===!0&&u===!1;e.reversedDepthBuffer===!0&&u===!1&&Pt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&u===!0&&Pt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),_=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),M=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),T=r.getParameter(r.MAX_SAMPLES),S=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:h,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:_,maxVaryings:M,maxFragmentUniforms:v,maxSamples:T,samples:S}}function J0(r){let t=this,e=null,i=0,n=!1,s=!1,o=new Mi,a=new Ft,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||n;return n=d,i=u.length,f},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=c(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=r.get(u);if(!n||g===null||g.length===0||s&&!m)s?c(null):l();else{let _=s?0:i,M=_*4,v=p.clippingState||null;h.value=v,v=c(g,d,M,f);for(let T=0;T!==M;++T)v[T]=e[T];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function l(){h.value!==e&&(h.value=e,h.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function c(u,d,f,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=h.value,g!==!0||m===null){let p=f+x*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,v=f;M!==x;++M,v+=4)o.copy(u[M]).applyMatrix4(_,a),o.normal.toArray(m,v),m[v+3]=o.constant}h.value=m,h.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}var ur=class extends Xe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new Hs(n),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Ke(5,5,5),s=new Ze({name:"CubemapFromEquirect",uniforms:Nn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Oe,blending:Pn});s.uniforms.tEquirect.value=e;let o=new Nt(n,s),a=e.minFilter;return e.minFilter===Ji&&(e.minFilter=Se),new as(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,n=!0){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,n);t.setRenderTarget(s)}},xu=256,j0=3,Q0=20,Bu=256,Hu=16,tm=3,em=new D,im=new yt,_a=class r{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new as(1,10,null),this._boxMesh=new Nt(new Ke(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,i=.1,n=100,s={}){let{size:o=256,position:a=em}=s,h=this._renderer;this._setSize(o);let l=this._allocateTarget(),c=this._getSourceTarget(!0);e>0&&(c.texture.mipmapsAutoUpdate=!1);let u=h.autoClear,d=h.autoClearColor,f=h.autoClearDepth,g=h.autoClearStencil,x=t.background;h.autoClear=!0,h.autoClearColor=!0,h.autoClearDepth=!0,h.autoClearStencil=!0,x===null&&(t.background=h.getClearColor(im));let m=new as(i,n,c);return m.position.copy(a),m.update(h,t),h.autoClear=u,h.autoClearColor=d,h.autoClearDepth=f,h.autoClearStencil=g,t.background=x,e>0&&(c.texture.mipmapsAutoUpdate=!0,this._blur(l,e)),this._applyPMREM(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_u(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(xu,du(t))}_fromTexture(t,e){t.mapping===Ln||t.mapping===cs?this._setSize(t.image.length===0?xu:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let i=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){let t=this._cubeSize,e=yu(t,!1,!1),i=Math.log2(t)-j0;for(let n=0;n<=i;n++)e.texture.mipmaps.push({width:t>>n,height:t>>n});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==e||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=yu(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,i){let n=this._boxMesh,s=this._cubeCamera;n.material=i,s.renderTarget=t,s.activeMipmapLevel=e;let o=t.width>>e;t.viewport.set(0,0,o,o),s.update(this._renderer,n),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Ln||t.mapping===cs?(this._cubemapMaterial===null&&(this._cubemapMaterial=vu()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=_u()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=nm(),this._integrationMaterial=sm());let e=this._cubeSize,i=t.texture.mipmaps.length-1,n=this._ggxMaterial.uniforms;n.envMap.value=this._sourceTarget.texture;let s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(e/Hu);for(let o=0;o<=i;o++){let a=r.lodToRoughness(o,i);if(o>i-tm)s.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{let h=a>0?Math.log2(e)+.5*Math.log2(6/(Bu*Math.pow(a,4)))+.5:0;n.roughness.value=a,n.lodBias.value=h,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=rm());let i=this._blurMaterial,n=i.uniforms,s=this._sourceTarget;n.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,n.envMap.value=s.texture,this._renderCube(t,0,i),n.envMap.value=t.texture,this._renderCube(s,0,i)}};function yu(r,t,e){return new ur(r,{minFilter:Ji,generateMipmaps:t,type:ri,colorSpace:Ps,depthBuffer:e})}function dr(r,t,e){return new Ze({name:r,uniforms:t,vertexShader:Vt.cube_vert,fragmentShader:e,side:Oe,blending:Pn,depthTest:!1,depthWrite:!1})}function nm(){return dr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Bu}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function sm(){return dr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Hu}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function rm(){return dr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Q0}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

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

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function _u(){return dr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function vu(){return dr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function om(r){let t=new WeakMap,e=new WeakMap,i=null;function n(d,f=!1){return d==null?null:f?o(d):s(d)}function s(d){if(d&&d.isTexture){let f=d.mapping;if(f===Po||f===Io)if(t.has(d)){let g=t.get(d).texture;return a(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let x=new ur(g.height);return x.fromEquirectangularTexture(r,d),t.set(d,x),d.addEventListener("dispose",l),a(x.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,g=f===Po||f===Io,x=f===Ln||f===cs;if(g||x){let m=e.get(d),p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return i===null&&(i=new _a(r)),m=g?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),m.texture;if(m!==void 0)return m.texture;{let _=d.image;return g&&_&&_.height>0||x&&_&&h(_)?(i===null&&(i=new _a(r)),m=g?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),d.addEventListener("dispose",c),m.texture):null}}}return d}function a(d,f){return f===Po?d.mapping=Ln:f===Io&&(d.mapping=cs),d}function h(d){let f=0,g=6;for(let x=0;x<g;x++)d[x]!==void 0&&f++;return f===g}function l(d){let f=d.target;f.removeEventListener("dispose",l);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function c(d){let f=d.target;f.removeEventListener("dispose",c);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function u(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:n,dispose:u}}function am(r){let t={};function e(i){if(t[i]!==void 0)return t[i];let n=r.getExtension(i);return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let n=e(i);return n===null&&Rs("WebGLRenderer: "+i+" extension not supported."),n}}}function lm(r,t,e,i){let n={},s=new WeakMap,o=new FinalizationRegistry(g=>delete n[g]);function a(g){h(g.target)}function h(g){g.index!==null&&t.remove(g.index);for(let m in g.attributes)t.remove(g.attributes[m]);g.removeEventListener("dispose",a),delete n[g.id],o.unregister(g);let x=s.get(g);x&&(t.remove(x),s.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function l(g,x){return n[x.id]!==void 0||(x.addEventListener("dispose",a),n[x.id]=new WeakRef(x),o.register(x,x.id,x),e.memory.geometries++),x}function c(g){let x=g.attributes;for(let m in x)t.update(x[m],r.ARRAY_BUFFER)}function u(g){let x=g.index,m=g.attributes.position,p=0;if(m===void 0)return;let _=x!==null?x.array.length:m.array.length/3-1,M=m.count>=65535?Us:ks,v=new M(Math.ceil(_/3)*6,1),T=v.array;if(x!==null){let y=x.array;p=x.version;for(let b=0,C=0;b<_;b+=3){let R=y[b+0],P=y[b+1],k=y[b+2];T[C++]=R,T[C++]=P,T[C++]=P,T[C++]=k,T[C++]=k,T[C++]=R}}else{p=m.version;for(let y=0,b=0;y<_;y+=3){let C=y+0,R=y+1,P=y+2;T[b++]=C,T[b++]=R,T[b++]=R,T[b++]=P,T[b++]=P,T[b++]=C}}v.version=p;let S=s.get(g);S&&t.remove(S),s.set(g,v)}function d(g){let x=s.get(g);if(x){let m=g.index;m!==null&&x.version<m.version&&u(g)}else u(g);return s.get(g)}function f(){for(let g in n){let x=n[g].deref();x!==void 0&&h(x)}}return{get:l,update:c,getWireframeAttribute:d,dispose:f}}function hm(r,t,e){let i;function n(u){i=u}let s,o;function a(u){s=u.type,o=u.bytesPerElement}function h(u,d){r.drawElements(i,d,s,u*o),e.update(d,i,1)}function l(u,d,f){f!==0&&(r.drawElementsInstanced(i,d,s,u*o,f),e.update(d,i,f))}function c(u,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,u,0,f);let x=0;for(let m=0;m<f;m++)x+=d[m];e.update(x,i,1)}this.setMode=n,this.setIndex=a,this.render=h,this.renderInstances=l,this.renderMultiDraw=c}function cm(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:Dt("WebGLInfo: Unknown draw mode:",o);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function um(r,t,e){let i=new WeakMap,n=new fe;function s(o,a,h){let l=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=c!==void 0?c.length:0,d=i.get(a);if(d===void 0||d.count!==u){let C=function(){y.dispose(),i.delete(a),a.removeEventListener("dispose",C)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],M=0;f===!0&&(M=1),g===!0&&(M=2),x===!0&&(M=3);let v=a.attributes.position.count*M,T=1;v>t.maxTextureSize&&(T=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let S=new Float32Array(v*T*4*u),y=new Ns(S,v,T,u);y.type=pi,y.needsUpdate=!0;let b=M*4;for(let R=0;R<u;R++){let P=m[R],k=p[R],B=_[R],L=v*T*4*R;for(let V=0;V<P.count;V++){let W=V*b;f===!0&&(n.fromBufferAttribute(P,V),S[L+W+0]=n.x,S[L+W+1]=n.y,S[L+W+2]=n.z,S[L+W+3]=0),g===!0&&(n.fromBufferAttribute(k,V),S[L+W+4]=n.x,S[L+W+5]=n.y,S[L+W+6]=n.z,S[L+W+7]=0),x===!0&&(n.fromBufferAttribute(B,V),S[L+W+8]=n.x,S[L+W+9]=n.y,S[L+W+10]=n.z,S[L+W+11]=B.itemSize===4?n.w:1)}}d={count:u,texture:y,size:new Bt(v,T)},i.set(a,d),a.addEventListener("dispose",C)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)h.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];let g=a.morphTargetsRelative?1:1-f;h.getUniforms().setValue(r,"morphTargetBaseInfluence",g),h.getUniforms().setValue(r,"morphTargetInfluences",l)}h.getUniforms().setValue(r,"morphTargetsTexture",d.texture,e),h.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function dm(r,t,e,i,n){let s=new WeakMap;function o(l){let c=n.render.frame,u=l.geometry,d=t.get(l,u);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",h)===!1&&l.addEventListener("dispose",h),s.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function a(){s=new WeakMap}function h(l){let c=l.target;c.removeEventListener("dispose",h),i.releaseStatesOfObject(c),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:o,dispose:a}}var fm={[zl]:"LINEAR_TONE_MAPPING",[Bl]:"REINHARD_TONE_MAPPING",[Hl]:"CINEON_TONE_MAPPING",[Gl]:"ACES_FILMIC_TONE_MAPPING",[Wl]:"AGX_TONE_MAPPING",[Xl]:"NEUTRAL_TONE_MAPPING",[Vl]:"CUSTOM_TONE_MAPPING"};function pm(r,t,e,i,n,s){let o=new Xe(t,e,{type:r,depthBuffer:n,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,h=null,l=null,c=new ge;c.setAttribute("position",new Qt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Qt([0,2,0,0,2,0],2));let u=new mo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Nt(c,u),f=new Rn(-1,1,1,-1,0,1),g=null,x=null,m=!1,p,_=null,M=[],v=!1;this.setSize=function(T,S){o.setSize(T,S),a!==null&&a.setSize(T,S),h!==null&&h.setSize(T,S);for(let y=0;y<M.length;y++){let b=M[y];b.setSize&&b.setSize(T,S)}},this.setEffects=function(T){M=T,v=M.length>0&&M[0].isRenderPass===!0;let S=o.width,y=o.height;M.length>0&&a===null&&(a=new Xe(S,y,{type:ri,depthBuffer:!1,stencilBuffer:!1}),h=new Xe(S,y,{type:ri,depthBuffer:!1,stencilBuffer:!1}));let b=n===!0&&M.some(C=>C.needsDepthTexture===!0);b!==(o.depthTexture!==null)&&(b===!0&&l===null&&(l=new bi(S,y),s===!0&&(l.format=ji,l.type=Dn)),o.dispose(),o.depthTexture=b?l:null,o.resolveDepthBuffer=b,o.storeMultisampledDepthBuffer=b);for(let C=0;C<M.length;C++){let R=M[C];R.setSize&&R.setSize(S,y),b&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(l)}},this.begin=function(T,S){if(m||T.toneMapping===fi&&M.length===0)return!1;if(_=S,S!==null){let y=S.width,b=S.height;(o.width!==y||o.height!==b)&&this.setSize(y,b)}return v===!1&&T.setRenderTarget(o),p=T.toneMapping,T.toneMapping=fi,!0},this.hasRenderPass=function(){return v},this.end=function(T,S){T.toneMapping=p,m=!0;let y=o,b=a;for(let C=0;C<M.length;C++){let R=M[C];R.enabled!==!1&&(R.render(T,b,y,S),R.needsSwap!==!1&&(y=b,b=b===a?h:a))}if(g!==T.outputColorSpace||x!==T.toneMapping){g=T.outputColorSpace,x=T.toneMapping,u.defines={},$t.getTransfer(g)===ie&&(u.defines.SRGB_TRANSFER="");let C=fm[x];C&&(u.defines[C]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=y.texture,T.setRenderTarget(_),T.render(d,f),_=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),h!==null&&h.dispose(),c.dispose(),u.dispose()}}var Gu=new Qe,Vu=new bi(1,1),Wu=new Gs(1),Xu=new Ns,qu=new ho,Yu=new Hs,Mu=[],bu=[],Su=new Float32Array(16),wu=new Float32Array(9),Tu=new Float32Array(4);function fs(r,t,e){let i=r[0];if(i<=0||i>0)return r;let n=t*e,s=Mu[n];if(s===void 0&&(s=new Float32Array(n),Mu[n]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function Re(r,t){if(r.length!==t.length)return!1;for(let e=0,i=r.length;e<i;e++)if(r[e]!==t[e])return!1;return!0}function Ce(r,t){for(let e=0,i=t.length;e<i;e++)r[e]=t[e]}function Ma(r,t){let e=bu[t];e===void 0&&(e=new Int32Array(t),bu[t]=e);for(let i=0;i!==t;++i)e[i]=r.allocateTextureUnit();return e}function mm(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function gm(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;r.uniform2fv(this.addr,t),Ce(e,t)}}function xm(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Re(e,t))return;r.uniform3fv(this.addr,t),Ce(e,t)}}function ym(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;r.uniform4fv(this.addr,t),Ce(e,t)}}function _m(r,t){let e=this.cache,i=t.elements;if(i===void 0){if(Re(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,i))return;Tu.set(i),r.uniformMatrix2fv(this.addr,!1,Tu),Ce(e,i)}}function vm(r,t){let e=this.cache,i=t.elements;if(i===void 0){if(Re(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,i))return;wu.set(i),r.uniformMatrix3fv(this.addr,!1,wu),Ce(e,i)}}function Mm(r,t){let e=this.cache,i=t.elements;if(i===void 0){if(Re(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,i))return;Su.set(i),r.uniformMatrix4fv(this.addr,!1,Su),Ce(e,i)}}function bm(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function Sm(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;r.uniform2iv(this.addr,t),Ce(e,t)}}function wm(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;r.uniform3iv(this.addr,t),Ce(e,t)}}function Tm(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;r.uniform4iv(this.addr,t),Ce(e,t)}}function Em(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function Am(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;r.uniform2uiv(this.addr,t),Ce(e,t)}}function Rm(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;r.uniform3uiv(this.addr,t),Ce(e,t)}}function Cm(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;r.uniform4uiv(this.addr,t),Ce(e,t)}}function ba(r){return r.version===0&&(r.compareFunction=eh,r.needsUpdate=!0),r}function Pm(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let s;this.type===r.SAMPLER_2D_SHADOW?s=ba(Vu):s=Gu,e.setTexture2D(t||s,n)}function Im(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||qu,n)}function Lm(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let s;this.type===r.SAMPLER_CUBE_SHADOW?s=ba(Wu):s=Yu,e.setTextureCube(t||s,n)}function Dm(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||Xu,n)}function Nm(r){switch(r){case 5126:return mm;case 35664:return gm;case 35665:return xm;case 35666:return ym;case 35674:return _m;case 35675:return vm;case 35676:return Mm;case 5124:case 35670:return bm;case 35667:case 35671:return Sm;case 35668:case 35672:return wm;case 35669:case 35673:return Tm;case 5125:return Em;case 36294:return Am;case 36295:return Rm;case 36296:return Cm;case 35678:case 36198:case 36298:case 36306:case 35682:return Pm;case 35679:case 36299:case 36307:return Im;case 35680:case 36300:case 36308:case 36293:return Lm;case 36289:case 36303:case 36311:case 36292:return Dm}}function Fm(r,t){r.uniform1fv(this.addr,t)}function km(r,t){let e=fs(t,this.size,2);r.uniform2fv(this.addr,e)}function Um(r,t){let e=fs(t,this.size,3);r.uniform3fv(this.addr,e)}function Om(r,t){let e=fs(t,this.size,4);r.uniform4fv(this.addr,e)}function zm(r,t){let e=fs(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function Bm(r,t){let e=fs(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function Hm(r,t){let e=fs(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function Gm(r,t){r.uniform1iv(this.addr,t)}function Vm(r,t){r.uniform2iv(this.addr,t)}function Wm(r,t){r.uniform3iv(this.addr,t)}function Xm(r,t){r.uniform4iv(this.addr,t)}function qm(r,t){r.uniform1uiv(this.addr,t)}function Ym(r,t){r.uniform2uiv(this.addr,t)}function $m(r,t){r.uniform3uiv(this.addr,t)}function Km(r,t){r.uniform4uiv(this.addr,t)}function Zm(r,t,e){let i=this.cache,n=t.length,s=Ma(e,n);Re(i,s)||(r.uniform1iv(this.addr,s),Ce(i,s));let o;this.type===r.SAMPLER_2D_SHADOW?o=ba(Vu):o=Gu;for(let a=0;a!==n;++a)e.setTexture2D(t[a]||o,s[a])}function Jm(r,t,e){let i=this.cache,n=t.length,s=Ma(e,n);Re(i,s)||(r.uniform1iv(this.addr,s),Ce(i,s));for(let o=0;o!==n;++o)e.setTexture3D(t[o]||qu,s[o])}function jm(r,t,e){let i=this.cache,n=t.length,s=Ma(e,n);Re(i,s)||(r.uniform1iv(this.addr,s),Ce(i,s));let o;this.type===r.SAMPLER_CUBE_SHADOW?o=ba(Wu):o=Yu;for(let a=0;a!==n;++a)e.setTextureCube(t[a]||o,s[a])}function Qm(r,t,e){let i=this.cache,n=t.length,s=Ma(e,n);Re(i,s)||(r.uniform1iv(this.addr,s),Ce(i,s));for(let o=0;o!==n;++o)e.setTexture2DArray(t[o]||Xu,s[o])}function tg(r){switch(r){case 5126:return Fm;case 35664:return km;case 35665:return Um;case 35666:return Om;case 35674:return zm;case 35675:return Bm;case 35676:return Hm;case 5124:case 35670:return Gm;case 35667:case 35671:return Vm;case 35668:case 35672:return Wm;case 35669:case 35673:return Xm;case 5125:return qm;case 36294:return Ym;case 36295:return $m;case 36296:return Km;case 35678:case 36198:case 36298:case 36306:case 35682:return Zm;case 35679:case 36299:case 36307:return Jm;case 35680:case 36300:case 36308:case 36293:return jm;case 36289:case 36303:case 36311:case 36292:return Qm}}var gh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Nm(e.type)}},xh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=tg(e.type)}},yh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let n=this.seq;for(let s=0,o=n.length;s!==o;++s){let a=n[s];a.setValue(t,e[a.id],i)}}},ph=/(\w+)(\])?(\[|\.)?/g;function Eu(r,t){r.seq.push(t),r.map[t.id]=t}function eg(r,t,e){let i=r.name,n=i.length;for(ph.lastIndex=0;;){let s=ph.exec(i),o=ph.lastIndex,a=s[1],h=s[2]==="]",l=s[3];if(h&&(a=a|0),l===void 0||l==="["&&o+2===n){Eu(e,l===void 0?new gh(a,r,t):new xh(a,r,t));break}else{let u=e.map[a];u===void 0&&(u=new yh(a),Eu(e,u)),e=u}}}var ds=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=t.getActiveUniform(e,o),h=t.getUniformLocation(e,a.name);eg(a,h,this)}let n=[],s=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?n.push(o):s.push(o);n.length>0&&(this.seq=n.concat(s))}setValue(t,e,i,n){let s=this.map[e];s!==void 0&&s.setValue(t,i,n)}setOptional(t,e,i){let n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let s=0,o=e.length;s!==o;++s){let a=e[s],h=i[a.id];h.needsUpdate!==!1&&a.setValue(t,h.value,n)}}static seqWithValue(t,e){let i=[];for(let n=0,s=t.length;n!==s;++n){let o=t[n];o.id in e&&i.push(o)}return i}};function Au(r,t,e){let i=r.createShader(t);return r.shaderSource(i,e),r.compileShader(i),i}var ig=37297,ng=0;function sg(r,t){let e=r.split(`
`),i=[],n=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=n;o<s;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var Ru=new Ft;function rg(r){$t._getMatrix(Ru,$t.workingColorSpace,r);let t=`mat3( ${Ru.elements.map(e=>e.toFixed(4))} )`;switch($t.getTransfer(r)){case Is:return[t,"LinearTransferOETF"];case ie:return[t,"sRGBTransferOETF"];default:return Pt("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Cu(r,t,e){let i=r.getShaderParameter(t,r.COMPILE_STATUS),s=(r.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+sg(r.getShaderSource(t),a)}else return s}function og(r,t){let e=rg(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var ag={[zl]:"Linear",[Bl]:"Reinhard",[Hl]:"Cineon",[Gl]:"ACESFilmic",[Wl]:"AgX",[Xl]:"Neutral",[Vl]:"Custom"};function lg(r,t){let e=ag[t];return e===void 0?(Pt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ya=new D;function hg(){$t.getLuminanceCoefficients(ya);let r=ya.x.toFixed(4),t=ya.y.toFixed(4),e=ya.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cg(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cr).join(`
`)}function ug(r){let t=[];for(let e in r){let i=r[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function dg(r,t){let e={},i=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let s=r.getActiveAttrib(t,n),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function cr(r){return r!==""}function Pu(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Iu(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var fg=/^[ \t]*#include +<([\w\d./]+)>/gm;function _h(r){return r.replace(fg,pg)}function pg(r,t){let e=Vt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return _h(e)}var mg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lu(r){return r.replace(mg,gg)}function gg(r,t,e,i){let n="";for(let s=parseInt(t);s<parseInt(e);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function Du(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}var xg={[Cn]:"SHADOWMAP_TYPE_PCF",[ls]:"SHADOWMAP_TYPE_VSM"};function yg(r){return xg[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var _g={[cs]:"ENVMAP_MODE_REFRACTION"};function vg(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":_g[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Mg={[Ol]:"ENVMAP_BLENDING_MULTIPLY",[Zc]:"ENVMAP_BLENDING_MIX",[Jc]:"ENVMAP_BLENDING_ADD"};function bg(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":Mg[r.combine]||"ENVMAP_BLENDING_NONE"}function Sg(r,t,e,i){let n=r.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,h=yg(e),l=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",c=vg(e),u=bg(e),d=cg(e),f=ug(s),g=n.createProgram(),x,m,p=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(cr).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(cr).join(`
`),m.length>0&&(m+=`
`)):(x=[Du(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cr).join(`
`),m=[Du(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==fi?"#define TONE_MAPPING":"",e.toneMapping!==fi?Vt.tonemapping_pars_fragment:"",e.toneMapping!==fi?lg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,og("linearToOutputTexel",e.outputColorSpace),hg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(cr).join(`
`)),o=_h(o),o=Pu(o,e),o=Iu(o,e),a=_h(a),a=Pu(a,e),a=Iu(a,e),o=Lu(o),a=Lu(a),e.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,x=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",e.glslVersion===ih?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ih?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let _=p+x+o,M=p+m+a,v=Au(n,n.VERTEX_SHADER,_),T=Au(n,n.FRAGMENT_SHADER,M);n.attachShader(g,v),n.attachShader(g,T),e.index0AttributeName!==void 0?n.bindAttribLocation(g,0,e.index0AttributeName):e.hasPositionAttribute===!0&&n.bindAttribLocation(g,0,"position"),n.linkProgram(g);function S(R){if(r.debug.checkShaderErrors){let P=n.getProgramInfoLog(g)||"",k=n.getShaderInfoLog(v)||"",B=n.getShaderInfoLog(T)||"",L=P.trim(),V=k.trim(),W=B.trim(),H=!0,Q=!0;if(n.getProgramParameter(g,n.LINK_STATUS)===!1)if(H=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,g,v,T);else{let X=Cu(n,v,"vertex"),j=Cu(n,T,"fragment");Dt("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(g,n.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+L+`
`+X+`
`+j)}else L!==""?Pt("WebGLProgram: Program Info Log:",L):(V===""||W==="")&&(Q=!1);Q&&(R.diagnostics={runnable:H,programLog:L,vertexShader:{log:V,prefix:x},fragmentShader:{log:W,prefix:m}})}n.deleteShader(v),n.deleteShader(T),y=new ds(n,g),b=dg(n,g)}let y;this.getUniforms=function(){return y===void 0&&S(this),y};let b;this.getAttributes=function(){return b===void 0&&S(this),b};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=n.getProgramParameter(g,ig)),C},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ng++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=v,this.fragmentShader=T,this}var wg=0,vh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let n=this._getShaderCacheForMaterial(t);return n.has(e)===!1&&(n.add(e),e.usedTimes++),n.has(i)===!1&&(n.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Mh(t),e.set(t,i)),i}},Mh=class{constructor(t){this.id=wg++,this.code=t,this.usedTimes=0}};function Tg(r){return r===xn||r===or||r===ar}function Eg(r,t,e,i,n,s){let o=new Fs,a=new vh,h=new Set,l=[],c=new Map,u=i.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(y){return h.add(y),y===0?"uv":`uv${y}`}function g(y,b,C,R,P,k){let B=R.fog,L=P.geometry,V=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?R.environment:null,W=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,H=t.get(y.envMap||V,W),Q=d[y.type],X=i.precision;y.precision!==null&&(X=i.getMaxPrecision(y.precision),X!==y.precision&&Pt("WebGLProgram.getParameters:",y.precision,"not supported, using",X,"instead."));let j=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,et=j!==void 0?j.length:0,wt=0;L.morphAttributes.position!==void 0&&(wt=1),L.morphAttributes.normal!==void 0&&(wt=2),L.morphAttributes.color!==void 0&&(wt=3);let Ut,K,mt,vt;if(Q){let ft=Fi[Q];Ut=ft.vertexShader,K=ft.fragmentShader}else{Ut=y.vertexShader,K=y.fragmentShader;let ft=a.getVertexShaderStage(y),re=a.getFragmentShaderStage(y);a.update(y,ft,re),mt=ft.id,vt=re.id}let Rt=r.getRenderTarget(),gt=r.state.buffers.depth.getReversed(),zt=P.isInstancedMesh===!0,ve=P.isBatchedMesh===!0,Lt=!!y.map,se=!!y.matcap,oe=!!H,Xt=oe&&H.isPMREMTexture===!0,Fe=!!y.aoMap,Te=!!y.lightMap,Je=!!y.bumpMap&&y.wireframe===!1,pe=!!y.normalMap,Ti=!!y.displacementMap,Pe=!!y.emissiveMap,ai=!!y.metalnessMap,li=!!y.roughnessMap,hi=y.anisotropy>0,F=y.clearcoat>0,ci=y.diffuseRoughness>0,ue=y.dispersion>0,de=y.retroreflectivity>0,dt=y.iridescence>0,Ee=y.sheen>0,Ct=y.transmission>0,kt=hi&&!!y.anisotropyMap,A=F&&!!y.clearcoatMap,w=F&&!!y.clearcoatNormalMap,O=F&&!!y.clearcoatRoughnessMap,it=ci&&!!y.diffuseRoughnessMap,J=dt&&!!y.iridescenceMap,rt=dt&&!!y.iridescenceThicknessMap,ct=Ee&&!!y.sheenColorMap,Y=Ee&&!!y.sheenRoughnessMap,$=!!y.specularMap,at=!!y.specularColorMap,I=!!y.specularIntensityMap,Z=Ct&&!!y.transmissionMap,q=Ct&&!!y.thicknessMap,lt=!!y.gradientMap,st=!!y.alphaMap,ot=y.alphaTest>0,Et=!!y.alphaHash,Gt=!!y.extensions,nt=fi;y.toneMapped&&(Rt===null||Rt.isXRRenderTarget===!0)&&(nt=r.toneMapping);let At=Xt?H.isCompressedCubeTexture?H.image[0].mipmaps:H.mipmaps:null,Ht={shaderID:Q,shaderType:y.type,shaderName:y.name,vertexShader:Ut,fragmentShader:K,defines:y.defines,customVertexShaderID:mt,customFragmentShaderID:vt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:X,batching:ve,batchingColor:ve&&P._colorsTexture!==null,instancing:zt,instancingColor:zt&&P.instanceColor!==null,instancingMorph:zt&&P.morphTexture!==null,outputColorSpace:Rt===null?r.outputColorSpace:Rt.isXRRenderTarget===!0?Rt.texture.colorSpace:$t.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Lt,matcap:se,envMap:oe,envMapMode:oe&&H.mapping,envMapPMREM:Xt,envMapMaxLod:Xt?At.length-1:null,envMapSize:Xt?At[0].width:null,aoMap:Fe,lightMap:Te,bumpMap:Je,normalMap:pe,displacementMap:Ti,emissiveMap:Pe,normalMapObjectSpace:pe&&y.normalMapType===tu,normalMapTangentSpace:pe&&y.normalMapType===ga,packedNormalMap:pe&&y.normalMapType===ga&&Tg(y.normalMap.format),metalnessMap:ai,roughnessMap:li,anisotropy:hi,anisotropyMap:kt,clearcoat:F,clearcoatMap:A,clearcoatNormalMap:w,clearcoatRoughnessMap:O,diffuseRoughness:ci,diffuseRoughnessMap:it,dispersion:ue,retroreflection:de,iridescence:dt,iridescenceMap:J,iridescenceThicknessMap:rt,sheen:Ee,sheenColorMap:ct,sheenRoughnessMap:Y,specularMap:$,specularColorMap:at,specularIntensityMap:I,transmission:Ct,transmissionMap:Z,thicknessMap:q,gradientMap:lt,opaque:y.transparent===!1&&y.blending===hs&&y.alphaToCoverage===!1,alphaMap:st,alphaTest:ot,alphaHash:Et,combine:y.combine,mapUv:Lt&&f(y.map.channel),aoMapUv:Fe&&f(y.aoMap.channel),lightMapUv:Te&&f(y.lightMap.channel),bumpMapUv:Je&&f(y.bumpMap.channel),normalMapUv:pe&&f(y.normalMap.channel),displacementMapUv:Ti&&f(y.displacementMap.channel),emissiveMapUv:Pe&&f(y.emissiveMap.channel),metalnessMapUv:ai&&f(y.metalnessMap.channel),roughnessMapUv:li&&f(y.roughnessMap.channel),anisotropyMapUv:kt&&f(y.anisotropyMap.channel),clearcoatMapUv:A&&f(y.clearcoatMap.channel),clearcoatNormalMapUv:w&&f(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:O&&f(y.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:it&&f(y.diffuseRoughnessMap.channel),iridescenceMapUv:J&&f(y.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&f(y.iridescenceThicknessMap.channel),sheenColorMapUv:ct&&f(y.sheenColorMap.channel),sheenRoughnessMapUv:Y&&f(y.sheenRoughnessMap.channel),specularMapUv:$&&f(y.specularMap.channel),specularColorMapUv:at&&f(y.specularColorMap.channel),specularIntensityMapUv:I&&f(y.specularIntensityMap.channel),transmissionMapUv:Z&&f(y.transmissionMap.channel),thicknessMapUv:q&&f(y.thicknessMap.channel),alphaMapUv:st&&f(y.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(pe||hi),vertexNormals:!!L.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!L.attributes.uv&&(Lt||st),fog:!!B,useFog:y.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||L.attributes.normal===void 0&&pe===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:gt,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:wt,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:k.filter(ft=>ft.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&C.length>0,shadowMapType:r.shadowMap.type,toneMapping:nt,decodeVideoTexture:Lt&&y.map.isVideoTexture===!0&&$t.getTransfer(y.map.colorSpace)===ie,decodeVideoTextureEmissive:Pe&&y.emissiveMap.isVideoTexture===!0&&$t.getTransfer(y.emissiveMap.colorSpace)===ie,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ti,flipSided:y.side===Oe,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Gt&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Gt&&y.extensions.multiDraw===!0||ve)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ht.vertexUv1s=h.has(1),Ht.vertexUv2s=h.has(2),Ht.vertexUv3s=h.has(3),h.clear(),Ht}function x(y){let b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(let C in y.defines)b.push(C),b.push(y.defines[C]);return y.isRawShaderMaterial===!1&&(m(b,y),p(b,y),b.push(r.outputColorSpace)),b.push(y.customProgramCacheKey),b.join()}function m(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapPMREM),y.push(b.envMapMaxLod),y.push(b.envMapSize),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.anisotropyMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.diffuseRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.numSunLights),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numSunLightShadows),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.numLightProbes),y.push(b.numLightProbeGrids),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function p(y,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.retroreflection&&o.enable(24),b.diffuseRoughness&&o.enable(25),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function _(y){let b=d[y.type],C;if(b){let R=Fi[b];C=pu.clone(R.uniforms)}else C=y.uniforms;return C}function M(y,b){let C=c.get(b);return C!==void 0?++C.usedTimes:(C=new Sg(r,b,y,n),l.push(C),c.set(b,C)),C}function v(y){if(--y.usedTimes===0){let b=l.indexOf(y);l[b]=l[l.length-1],l.pop(),c.delete(y.cacheKey),y.destroy()}}function T(y){a.remove(y)}function S(){a.dispose()}return{getParameters:g,getProgramCacheKey:x,getUniforms:_,acquireProgram:M,releaseProgram:v,releaseShaderCache:T,programs:l,dispose:S}}function Ag(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function i(o){r.delete(o)}function n(o,a,h){r.get(o)[a]=h}function s(){r=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:s}}function Rg(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function Nu(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Fu(){let r=[],t=0,e=[],i=[],n=[];function s(){t=0,e.length=0,i.length=0,n.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,g,x,m,p){let _=r[t];return _===void 0?(_={id:d.id,object:d,geometry:f,material:g,materialVariant:o(d),groupOrder:x,renderOrder:d.renderOrder,z:m,group:p},r[t]=_):(_.id=d.id,_.object=d,_.geometry=f,_.material=g,_.materialVariant=o(d),_.groupOrder=x,_.renderOrder=d.renderOrder,_.z=m,_.group=p),t++,_}function h(d,f,g,x,m,p,_){_.reversedDepth===!0&&(m=-m);let M=a(d,f,g,x,m,p);g.transmission>0?i.push(M):g.transparent===!0?n.push(M):e.push(M)}function l(d,f,g,x,m,p){let _=a(d,f,g,x,m,p);g.transmission>0?i.unshift(_):g.transparent===!0?n.unshift(_):e.unshift(_)}function c(d,f){e.length>1&&e.sort(d||Rg),i.length>1&&i.sort(f||Nu),n.length>1&&n.sort(f||Nu)}function u(){for(let d=t,f=r.length;d<f;d++){let g=r[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:n,init:s,push:h,unshift:l,finish:u,sort:c}}function Cg(){let r=new WeakMap;function t(i,n){let s=r.get(i),o;return s===void 0?(o=new Fu,r.set(i,[o])):n>=s.length?(o=new Fu,s.push(o)):o=s[n],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function Pg(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new D,color:new yt};break;case"SpotLight":e={position:new D,direction:new D,color:new yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new yt,groundColor:new yt};break;case"RectAreaLight":e={color:new yt,position:new D,halfWidth:new D,halfHeight:new D};break}return r[t.id]=e,e}}}function Ig(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var Lg=0;function Dg(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Ng(r){let t=new Pg,e=Ig(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new D);let n=new D,s=new jt,o=new jt;function a(l){let c=0,u=0,d=0;for(let k=0;k<9;k++)i.probe[k].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,_=0,M=0,v=0,T=0,S=0,y=0,b=0,C=0,R=0;l.sort(Dg);for(let k=0,B=l.length;k<B;k++){let L=l[k],V=L.color,W=L.intensity,H=L.distance,Q=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===xn?Q=L.shadow.map.texture:Q=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)c+=V.r*W,u+=V.g*W,d+=V.b*W;else if(L.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(L.sh.coefficients[X],W);R++}else if(L.isSunLight){let X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let j=L.shadow,et=e.get(L);et.shadowIntensity=j.intensity,et.shadowBias=j.bias,et.shadowNormalBias=j.normalBias,et.shadowRadius=j.radius,et.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),i.sunShadow[g]=et,i.sunShadowMap[g]=Q;let wt=j.getViewportCount();for(let Ut=0;Ut<wt;Ut++)i.sunShadowMatrix[x+Ut]=j.getMatrix(Ut),i.sunShadowCascade[x+Ut]=j._cascadeData[Ut];x+=wt,g++}i.sun[f]=X,f++}else if(L.isDirectionalLight){let X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let j=L.shadow,et=e.get(L);et.shadowIntensity=j.intensity,et.shadowBias=j.bias,et.shadowNormalBias=j.normalBias,et.shadowRadius=j.radius,et.shadowMapSize=j.mapSize,i.directionalShadow[m]=et,i.directionalShadowMap[m]=Q,i.directionalShadowMatrix[m]=L.shadow.matrix,T++}i.directional[m]=X,m++}else if(L.isSpotLight){let X=t.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(V).multiplyScalar(W),X.distance=H,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,i.spot[_]=X;let j=L.shadow;if(L.map&&(i.spotLightMap[b]=L.map,b++,j.updateMatrices(L),L.castShadow&&C++),i.spotLightMatrix[_]=j.matrix,L.castShadow){let et=e.get(L);et.shadowIntensity=j.intensity,et.shadowBias=j.bias,et.shadowNormalBias=j.normalBias,et.shadowRadius=j.radius,et.shadowMapSize=j.mapSize,i.spotShadow[_]=et,i.spotShadowMap[_]=Q,y++}_++}else if(L.isRectAreaLight){let X=t.get(L);X.color.copy(V).multiplyScalar(W),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),i.rectArea[M]=X,M++}else if(L.isPointLight){let X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),X.distance=L.distance,X.decay=L.decay,L.castShadow){let j=L.shadow,et=e.get(L);et.shadowIntensity=j.intensity,et.shadowBias=j.bias,et.shadowNormalBias=j.normalBias,et.shadowRadius=j.radius,et.shadowMapSize=j.mapSize,et.shadowCameraNear=j.camera.near,et.shadowCameraFar=j.camera.far,i.pointShadow[p]=et,i.pointShadowMap[p]=Q,i.pointShadowMatrix[p]=L.shadow.matrix,S++}i.point[p]=X,p++}else if(L.isHemisphereLight){let X=t.get(L);X.skyColor.copy(L.color).multiplyScalar(W),X.groundColor.copy(L.groundColor).multiplyScalar(W),i.hemi[v]=X,v++}}M>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pt.LTC_FLOAT_1,i.rectAreaLTC2=pt.LTC_FLOAT_2):(i.rectAreaLTC1=pt.LTC_HALF_1,i.rectAreaLTC2=pt.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=u,i.ambient[2]=d;let P=i.hash;(P.sunLength!==f||P.directionalLength!==m||P.pointLength!==p||P.spotLength!==_||P.rectAreaLength!==M||P.hemiLength!==v||P.numSunShadows!==g||P.numDirectionalShadows!==T||P.numPointShadows!==S||P.numSpotShadows!==y||P.numSpotMaps!==b||P.numLightProbes!==R)&&(i.sun.length=f,i.directional.length=m,i.spot.length=_,i.rectArea.length=M,i.point.length=p,i.hemi.length=v,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.directionalShadowMatrix.length=T,i.pointShadow.length=S,i.pointShadowMap.length=S,i.pointShadowMatrix.length=S,i.spotShadow.length=y,i.spotShadowMap.length=y,i.spotLightMatrix.length=y+b-C,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=R,P.sunLength=f,P.directionalLength=m,P.pointLength=p,P.spotLength=_,P.rectAreaLength=M,P.hemiLength=v,P.numSunShadows=g,P.numDirectionalShadows=T,P.numPointShadows=S,P.numSpotShadows=y,P.numSpotMaps=b,P.numLightProbes=R,i.version=Lg++)}function h(l,c){let u=0,d=0,f=0,g=0,x=0,m=0,p=c.matrixWorldInverse;for(let _=0,M=l.length;_<M;_++){let v=l[_];if(v.isSunLight){let T=i.sun[u];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(p),u++}else if(v.isDirectionalLight){let T=i.directional[d];T.direction.setFromMatrixPosition(v.matrixWorld),n.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(n),T.direction.transformDirection(p),d++}else if(v.isSpotLight){let T=i.spot[g];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(v.matrixWorld),n.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(n),T.direction.transformDirection(p),g++}else if(v.isRectAreaLight){let T=i.rectArea[x];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(p),o.identity(),s.copy(v.matrixWorld),s.premultiply(p),o.extractRotation(s),T.halfWidth.set(v.width*.5,0,0),T.halfHeight.set(0,v.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),x++}else if(v.isPointLight){let T=i.point[f];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){let T=i.hemi[m];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(p),m++}}}return{setup:a,setupView:h,state:i}}function ku(r){let t=new Ng(r),e=[],i=[],n=[];function s(u){c.camera=u,e.length=0,i.length=0,n.length=0}function o(u){u.isLightProbeGrid?n.push(u):e.push(u)}function a(u){i.push(u)}function h(){t.setup(e),n.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function l(u){t.setupView(e,u)}let c={lightsArray:e,shadowsArray:i,lightProbeGridArray:n,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:c,setupLights:h,setupLightsView:l,pushLight:o,pushShadow:a}}function Fg(r){let t=new WeakMap;function e(n,s=0){let o=t.get(n),a;return o===void 0?(a=new ku(r),t.set(n,[a])):s>=o.length?(a=new ku(r),o.push(a)):a=o[s],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var kg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ug=`uniform sampler2D shadow_pass;
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
}`,Og=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],zg=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],Uu=new jt,hr=new D,mh=new D;function Bg(r,t,e){let i=new cn,n=new Bt,s=new Bt,o=new fe,a=new go,h=new xo,l={},c=e.maxTextureSize,u={[gn]:Oe,[Oe]:gn,[ti]:ti},d=new Ze({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Bt},radius:{value:4}},vertexShader:kg,fragmentShader:Ug}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new ge;g.setAttribute("position",new Ne(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Nt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cn;let p=this.type;this.render=function(S,y,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;this.type===Ic&&(Pt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Cn);let C=r.getRenderTarget(),R=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),k=r.state;k.setBlending(Pn),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let B=p!==this.type;B&&y.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(V=>V.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,V=S.length;L<V;L++){let W=S[L],H=W.shadow;if(H===void 0){Pt("WebGLShadowMap:",W,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;n.copy(H.mapSize);let Q=H.getFrameExtents();n.multiply(Q),s.copy(H.mapSize),(n.x>c||n.y>c)&&(n.x>c&&(s.x=Math.floor(c/Q.x),n.x=s.x*Q.x,H.mapSize.x=s.x),n.y>c&&(s.y=Math.floor(c/Q.y),n.y=s.y*Q.y,H.mapSize.y=s.y));let X=r.state.buffers.depth.getReversed();if(H.camera._reversedDepth=X,H.map===null||B===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===ls){if(W.isPointLight){Pt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Xe(n.x,n.y,{format:xn,type:ri,minFilter:Se,magFilter:Se,generateMipmaps:!1}),H.map.texture.name=W.name+".shadowMap",H.map.depthTexture=new bi(n.x,n.y,pi),H.map.depthTexture.name=W.name+".shadowMapDepth",H.map.depthTexture.format=Yi,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=ye,H.map.depthTexture.magFilter=ye}else W.isPointLight?(H.map=new ur(n.x),H.map.depthTexture=new Gs(n.x,Si)):(H.map=new Xe(n.x,n.y),H.map.depthTexture=new bi(n.x,n.y,Si)),H.map.depthTexture.name=W.name+".shadowMap",H.map.depthTexture.format=Yi,this.type===Cn?(H.map.depthTexture.compareFunction=X?th:Ql,H.map.depthTexture.minFilter=Se,H.map.depthTexture.magFilter=Se):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=ye,H.map.depthTexture.magFilter=ye);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==n.x||H.map.height!==n.y)&&H.map.setSize(n.x,n.y);let j=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();W.isPointLight!==!0&&H.updateMatrices(W,b);let et=(H.camera.layers.mask&4294967294)!==0?H.camera.layers:b.layers;for(let wt=0;wt<j;wt++){let Ut=H.getCamera(wt);if(W.isPointLight){let K=H.camera,mt=H.matrix,vt=W.distance||K.far;vt!==K.far&&(K.far=vt,K.updateProjectionMatrix()),hr.setFromMatrixPosition(W.matrixWorld),K.position.copy(hr),mh.copy(K.position),mh.add(Og[wt]),K.up.copy(zg[wt]),K.lookAt(mh),K.updateMatrixWorld(),mt.makeTranslation(-hr.x,-hr.y,-hr.z),Uu.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Uu,K.coordinateSystem,K.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)r.setRenderTarget(H.map,wt),r.clear();else{wt===0&&(r.setRenderTarget(H.map),r.clear());let K=H.getViewport(wt);o.set(s.x*K.x,s.y*K.y,s.x*K.z,s.y*K.w),k.viewport(o)}i=H.getFrustum(wt),v(y,b,Ut,W,et,this.type)}H.isPointLightShadow!==!0&&this.type===ls&&_(H,b),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(C,R,P)};function _(S,y){let b=t.update(x);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null?S.mapPass=new Xe(n.x,n.y,{format:xn,type:ri}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),d.uniforms.shadow_pass.value=S.map.depthTexture,d.uniforms.resolution.value.set(S.map.width,S.map.height),d.uniforms.radius.value=S.radius,r.setRenderTarget(S.mapPass),r.clear(),r.renderBufferDirect(y,null,b,d,x,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,r.setRenderTarget(S.map),r.clear(),r.renderBufferDirect(y,null,b,f,x,null)}function M(S,y,b,C){let R=null,P=b.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(P!==void 0)R=P;else if(R=b.isPointLight===!0?h:a,r.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0||y.alphaToCoverage===!0){let k=R.uuid,B=y.uuid,L=l[k];L===void 0&&(L={},l[k]=L);let V=L[B];V===void 0&&(V=R.clone(),L[B]=V,y.addEventListener("dispose",T)),R=V}if(R.visible=y.visible,R.wireframe=y.wireframe,C===ls?R.side=y.shadowSide!==null?y.shadowSide:y.side:R.side=y.shadowSide!==null?y.shadowSide:u[y.side],R.alphaMap=y.alphaMap,R.alphaTest=y.alphaToCoverage===!0?.5:y.alphaTest,R.map=y.map,R.clipShadows=y.clipShadows,R.clippingPlanes=y.clippingPlanes,R.clipIntersection=y.clipIntersection,R.displacementMap=y.displacementMap,R.displacementScale=y.displacementScale,R.displacementBias=y.displacementBias,R.wireframeLinewidth=y.wireframeLinewidth,R.linewidth=y.linewidth,b.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let k=r.properties.get(R);k.light=b}return R}function v(S,y,b,C,R,P){if(S.visible===!1)return;if(S.layers.test(R)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&P===ls)&&(!S.frustumCulled||S.intersectsFrustum(i))){S.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,S.matrixWorld);let L=t.update(S),V=S.material;if(Array.isArray(V)){let W=L.groups;for(let H=0,Q=W.length;H<Q;H++){let X=W[H],j=V[X.materialIndex];if(j&&j.visible){let et=M(S,j,C,P);S.onBeforeShadow(r,S,y,b,L,et,X),r.renderBufferDirect(b,null,L,et,S,X),S.onAfterShadow(r,S,y,b,L,et,X)}}}else if(V.visible){let W=M(S,V,C,P);S.onBeforeShadow(r,S,y,b,L,W,null),r.renderBufferDirect(b,null,L,W,S,null),S.onAfterShadow(r,S,y,b,L,W,null)}}let B=S.children;for(let L=0,V=B.length;L<V;L++)v(B[L],y,b,C,R,P)}function T(S){S.target.removeEventListener("dispose",T);for(let b in l){let C=l[b],R=S.target.uuid;R in C&&(C[R].dispose(),delete C[R])}}}function Hg(r,t){function e(){let I=!1,Z=new fe,q=null,lt=new fe(0,0,0,0);return{setMask:function(st){q!==st&&!I&&(r.colorMask(st,st,st,st),q=st)},setLocked:function(st){I=st},setClear:function(st,ot,Et,Gt,nt){nt===!0&&(st*=Gt,ot*=Gt,Et*=Gt),Z.set(st,ot,Et,Gt),lt.equals(Z)===!1&&(r.clearColor(st,ot,Et,Gt),lt.copy(Z))},reset:function(){I=!1,q=null,lt.set(-1,0,0,0)}}}function i(){let I=!1,Z=!1,q=null,lt=null,st=null;return{setReversed:function(ot){if(Z!==ot){let Et=t.get("EXT_clip_control");ot?Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.ZERO_TO_ONE_EXT):Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.NEGATIVE_ONE_TO_ONE_EXT),Z=ot;let Gt=st;st=null,this.setClear(Gt)}},getReversed:function(){return Z},setTest:function(ot){ot?gt(r.DEPTH_TEST):zt(r.DEPTH_TEST)},setMask:function(ot){q!==ot&&!I&&(r.depthMask(ot),q=ot)},setFunc:function(ot){if(Z&&(ot=uu[ot]),lt!==ot){switch(ot){case Jr:r.depthFunc(r.NEVER);break;case jr:r.depthFunc(r.ALWAYS);break;case Qr:r.depthFunc(r.LESS);break;case Qn:r.depthFunc(r.LEQUAL);break;case to:r.depthFunc(r.EQUAL);break;case eo:r.depthFunc(r.GEQUAL);break;case io:r.depthFunc(r.GREATER);break;case no:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}lt=ot}},setLocked:function(ot){I=ot},setClear:function(ot){st!==ot&&(st=ot,Z&&(ot=1-ot),r.clearDepth(ot))},reset:function(){I=!1,q=null,lt=null,st=null,Z=!1}}}function n(){let I=!1,Z=null,q=null,lt=null,st=null,ot=null,Et=null,Gt=null,nt=null;return{setTest:function(At){I||(At?gt(r.STENCIL_TEST):zt(r.STENCIL_TEST))},setMask:function(At){Z!==At&&!I&&(r.stencilMask(At),Z=At)},setFunc:function(At,Ht,ft){(q!==At||lt!==Ht||st!==ft)&&(r.stencilFunc(At,Ht,ft),q=At,lt=Ht,st=ft)},setOp:function(At,Ht,ft){(ot!==At||Et!==Ht||Gt!==ft)&&(r.stencilOp(At,Ht,ft),ot=At,Et=Ht,Gt=ft)},setLocked:function(At){I=At},setClear:function(At){nt!==At&&(r.clearStencil(At),nt=At)},reset:function(){I=!1,Z=null,q=null,lt=null,st=null,ot=null,Et=null,Gt=null,nt=null}}}let s=new e,o=new i,a=new n,h={},l=new WeakMap,c={},u={},d={},f=new WeakMap,g=[],x=null,m=!1,p=null,_=null,M=null,v=null,T=null,S=null,y=null,b=new yt(0,0,0),C=0,R=!1,P=null,k=null,B=null,L=null,V=null,W=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,Q=0,X=r.getParameter(r.VERSION);X.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(X)[1]),H=Q>=1):X.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),H=Q>=2);let j=null,et={},wt=r.getParameter(r.SCISSOR_BOX),Ut=r.getParameter(r.VIEWPORT),K=new fe().fromArray(wt),mt=new fe().fromArray(Ut);function vt(I,Z,q,lt){let st=new Uint8Array(4),ot=r.createTexture();r.bindTexture(I,ot),r.texParameteri(I,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(I,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Et=0;Et<q;Et++)I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY?r.texImage3D(Z,0,r.RGBA,1,1,lt,0,r.RGBA,r.UNSIGNED_BYTE,st):r.texImage2D(Z+Et,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,st);return ot}let Rt={};Rt[r.TEXTURE_2D]=vt(r.TEXTURE_2D,r.TEXTURE_2D,1),Rt[r.TEXTURE_CUBE_MAP]=vt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Rt[r.TEXTURE_2D_ARRAY]=vt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Rt[r.TEXTURE_3D]=vt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),gt(r.DEPTH_TEST),o.setFunc(Qn),Je(!1),pe(Dl),gt(r.CULL_FACE),Fe(Pn);function gt(I){c[I]!==!0&&(r.enable(I),c[I]=!0)}function zt(I){c[I]!==!1&&(r.disable(I),c[I]=!1)}function ve(I,Z){return d[I]!==Z?(r.bindFramebuffer(I,Z),d[I]=Z,I===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=Z),I===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=Z),!0):!1}function Lt(I,Z){let q=g,lt=!1;if(I){q=f.get(Z),q===void 0&&(q=[],f.set(Z,q));let st=I.textures;if(q.length!==st.length||q[0]!==r.COLOR_ATTACHMENT0){for(let ot=0,Et=st.length;ot<Et;ot++)q[ot]=r.COLOR_ATTACHMENT0+ot;q.length=st.length,lt=!0}}else q[0]!==r.BACK&&(q[0]=r.BACK,lt=!0);lt&&r.drawBuffers(q)}function se(I){return x!==I?(r.useProgram(I),x=I,!0):!1}let oe={[In]:r.FUNC_ADD,[Dc]:r.FUNC_SUBTRACT,[Nc]:r.FUNC_REVERSE_SUBTRACT};oe[Fc]=r.MIN,oe[kc]=r.MAX;let Xt={[Uc]:r.ZERO,[Oc]:r.ONE,[zc]:r.SRC_COLOR,[kl]:r.SRC_ALPHA,[Xc]:r.SRC_ALPHA_SATURATE,[Vc]:r.DST_COLOR,[Hc]:r.DST_ALPHA,[Bc]:r.ONE_MINUS_SRC_COLOR,[Ul]:r.ONE_MINUS_SRC_ALPHA,[Wc]:r.ONE_MINUS_DST_COLOR,[Gc]:r.ONE_MINUS_DST_ALPHA,[qc]:r.CONSTANT_COLOR,[Yc]:r.ONE_MINUS_CONSTANT_COLOR,[$c]:r.CONSTANT_ALPHA,[Kc]:r.ONE_MINUS_CONSTANT_ALPHA};function Fe(I,Z,q,lt,st,ot,Et,Gt,nt,At){if(I===Pn){m===!0&&(zt(r.BLEND),m=!1);return}if(m===!1&&(gt(r.BLEND),m=!0),I!==Lc){if(I!==p||At!==R){if((_!==In||T!==In)&&(r.blendEquation(r.FUNC_ADD),_=In,T=In),At)switch(I){case hs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Zi:r.blendFunc(r.ONE,r.ONE);break;case Nl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Fl:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Dt("WebGLState: Invalid blending: ",I);break}else switch(I){case hs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Zi:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Nl:Dt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Fl:Dt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Dt("WebGLState: Invalid blending: ",I);break}M=null,v=null,S=null,y=null,b.set(0,0,0),C=0,p=I,R=At}return}st=st||Z,ot=ot||q,Et=Et||lt,(Z!==_||st!==T)&&(r.blendEquationSeparate(oe[Z],oe[st]),_=Z,T=st),(q!==M||lt!==v||ot!==S||Et!==y)&&(r.blendFuncSeparate(Xt[q],Xt[lt],Xt[ot],Xt[Et]),M=q,v=lt,S=ot,y=Et),(Gt.equals(b)===!1||nt!==C)&&(r.blendColor(Gt.r,Gt.g,Gt.b,nt),b.copy(Gt),C=nt),p=I,R=!1}function Te(I,Z){I.side===ti?zt(r.CULL_FACE):gt(r.CULL_FACE);let q=I.side===Oe;Z&&(q=!q),Je(q),I.blending===hs&&I.transparent===!1?Fe(Pn):Fe(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),s.setMask(I.colorWrite);let lt=I.stencilWrite;a.setTest(lt),lt&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Pe(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?gt(r.SAMPLE_ALPHA_TO_COVERAGE):zt(r.SAMPLE_ALPHA_TO_COVERAGE)}function Je(I){P!==I&&(I?r.frontFace(r.CW):r.frontFace(r.CCW),P=I)}function pe(I){I!==Cc?(gt(r.CULL_FACE),I!==k&&(I===Dl?r.cullFace(r.BACK):I===Pc?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):zt(r.CULL_FACE),k=I}function Ti(I){I!==B&&(H&&r.lineWidth(I),B=I)}function Pe(I,Z,q){I?(gt(r.POLYGON_OFFSET_FILL),(L!==Z||V!==q)&&(L=Z,V=q,o.getReversed()&&(Z=-Z,q=-q),r.polygonOffset(Z,q))):zt(r.POLYGON_OFFSET_FILL)}function ai(I){I?gt(r.SCISSOR_TEST):zt(r.SCISSOR_TEST)}function li(I){I===void 0&&(I=r.TEXTURE0+W-1),j!==I&&(r.activeTexture(I),j=I)}function hi(I,Z,q){q===void 0&&(j===null?q=r.TEXTURE0+W-1:q=j);let lt=et[q];lt===void 0&&(lt={type:void 0,texture:void 0},et[q]=lt),(lt.type!==I||lt.texture!==Z)&&(j!==q&&(r.activeTexture(q),j=q),r.bindTexture(I,Z||Rt[I]),lt.type=I,lt.texture=Z)}function F(){let I=et[j];I!==void 0&&I.type!==void 0&&(r.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function ci(){try{r.compressedTexImage2D(...arguments)}catch(I){Dt("WebGLState:",I)}}function ue(){try{r.compressedTexImage3D(...arguments)}catch(I){Dt("WebGLState:",I)}}function de(){try{r.texSubImage2D(...arguments)}catch(I){Dt("WebGLState:",I)}}function dt(){try{r.texSubImage3D(...arguments)}catch(I){Dt("WebGLState:",I)}}function Ee(){try{r.compressedTexSubImage2D(...arguments)}catch(I){Dt("WebGLState:",I)}}function Ct(){try{r.compressedTexSubImage3D(...arguments)}catch(I){Dt("WebGLState:",I)}}function kt(){try{r.texStorage2D(...arguments)}catch(I){Dt("WebGLState:",I)}}function A(){try{r.texStorage3D(...arguments)}catch(I){Dt("WebGLState:",I)}}function w(){try{r.texImage2D(...arguments)}catch(I){Dt("WebGLState:",I)}}function O(){try{r.texImage3D(...arguments)}catch(I){Dt("WebGLState:",I)}}function it(I){return u[I]!==void 0?u[I]:r.getParameter(I)}function J(I,Z){u[I]!==Z&&(r.pixelStorei(I,Z),u[I]=Z)}function rt(I){K.equals(I)===!1&&(r.scissor(I.x,I.y,I.z,I.w),K.copy(I))}function ct(I){mt.equals(I)===!1&&(r.viewport(I.x,I.y,I.z,I.w),mt.copy(I))}function Y(I,Z){let q=l.get(Z);q===void 0&&(q=new WeakMap,l.set(Z,q));let lt=q.get(I);lt===void 0&&(lt=r.getUniformBlockIndex(Z,I.name),r.uniformBlockBinding(Z,lt,lt),q.set(I,lt))}function $(I,Z,q){let st=l.get(Z).get(I);h[st]!==q&&(r.bindBufferBase(r.UNIFORM_BUFFER,st,q),h[st]=q)}function at(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),c={},u={},j=null,et={},d={},h={},f=new WeakMap,g=[],x=null,m=!1,p=null,_=null,M=null,v=null,T=null,S=null,y=null,b=new yt(0,0,0),C=0,R=!1,P=null,k=null,B=null,L=null,V=null,K.set(0,0,r.canvas.width,r.canvas.height),mt.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:gt,disable:zt,bindFramebuffer:ve,drawBuffers:Lt,useProgram:se,setBlending:Fe,setMaterial:Te,setFlipSided:Je,setCullFace:pe,setLineWidth:Ti,setPolygonOffset:Pe,setScissorTest:ai,activeTexture:li,bindTexture:hi,unbindTexture:F,compressedTexImage2D:ci,compressedTexImage3D:ue,texImage2D:w,texImage3D:O,pixelStorei:J,getParameter:it,updateUBOMapping:Y,uniformBlockBinding:$,texStorage2D:kt,texStorage3D:A,texSubImage2D:de,texSubImage3D:dt,compressedTexSubImage2D:Ee,compressedTexSubImage3D:Ct,scissor:rt,viewport:ct,reset:at}}function Gg(r,t,e,i,n,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Bt,c=new WeakMap,u=new Set,d,f=new WeakMap,g=new Set,x=new FinalizationRegistry(A=>g.delete(A)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(A,w){return m?new OffscreenCanvas(A,w):Ls("canvas")}function _(A,w,O){let it=1,J=kt(A);if((J.width>O||J.height>O)&&(it=O/Math.max(J.width,J.height)),it<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let rt=Math.floor(it*J.width),ct=Math.floor(it*J.height);d===void 0&&(d=p(rt,ct));let Y=w?p(rt,ct):d;return Y.width=rt,Y.height=ct,Y.getContext("2d").drawImage(A,0,0,rt,ct),Pt("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+rt+"x"+ct+")."),Y}else return"data"in A&&Pt("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),A;return A}function M(A){return A.generateMipmaps}function v(A){r.generateMipmap(A)}function T(A){return A.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?r.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function S(A,w,O,it,J,rt=!1){if(A!==null){if(r[A]!==void 0)return r[A];Pt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ct;it&&(ct=t.get("EXT_texture_norm16"),ct||Pt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=w;if(w===r.RED&&(O===r.FLOAT&&(Y=r.R32F),O===r.HALF_FLOAT&&(Y=r.R16F),O===r.UNSIGNED_BYTE&&(Y=r.R8),O===r.UNSIGNED_SHORT&&ct&&(Y=ct.R16_EXT),O===r.SHORT&&ct&&(Y=ct.R16_SNORM_EXT)),w===r.RED_INTEGER&&(O===r.UNSIGNED_BYTE&&(Y=r.R8UI),O===r.UNSIGNED_SHORT&&(Y=r.R16UI),O===r.UNSIGNED_INT&&(Y=r.R32UI),O===r.BYTE&&(Y=r.R8I),O===r.SHORT&&(Y=r.R16I),O===r.INT&&(Y=r.R32I)),w===r.RG&&(O===r.FLOAT&&(Y=r.RG32F),O===r.HALF_FLOAT&&(Y=r.RG16F),O===r.UNSIGNED_BYTE&&(Y=r.RG8),O===r.UNSIGNED_SHORT&&ct&&(Y=ct.RG16_EXT),O===r.SHORT&&ct&&(Y=ct.RG16_SNORM_EXT)),w===r.RG_INTEGER&&(O===r.UNSIGNED_BYTE&&(Y=r.RG8UI),O===r.UNSIGNED_SHORT&&(Y=r.RG16UI),O===r.UNSIGNED_INT&&(Y=r.RG32UI),O===r.BYTE&&(Y=r.RG8I),O===r.SHORT&&(Y=r.RG16I),O===r.INT&&(Y=r.RG32I)),w===r.RGB_INTEGER&&(O===r.UNSIGNED_BYTE&&(Y=r.RGB8UI),O===r.UNSIGNED_SHORT&&(Y=r.RGB16UI),O===r.UNSIGNED_INT&&(Y=r.RGB32UI),O===r.BYTE&&(Y=r.RGB8I),O===r.SHORT&&(Y=r.RGB16I),O===r.INT&&(Y=r.RGB32I)),w===r.RGBA_INTEGER&&(O===r.UNSIGNED_BYTE&&(Y=r.RGBA8UI),O===r.UNSIGNED_SHORT&&(Y=r.RGBA16UI),O===r.UNSIGNED_INT&&(Y=r.RGBA32UI),O===r.BYTE&&(Y=r.RGBA8I),O===r.SHORT&&(Y=r.RGBA16I),O===r.INT&&(Y=r.RGBA32I)),w===r.RGB&&(O===r.UNSIGNED_SHORT&&ct&&(Y=ct.RGB16_EXT),O===r.SHORT&&ct&&(Y=ct.RGB16_SNORM_EXT),O===r.UNSIGNED_INT_5_9_9_9_REV&&(Y=r.RGB9_E5),O===r.UNSIGNED_INT_10F_11F_11F_REV&&(Y=r.R11F_G11F_B10F)),w===r.RGBA){let $=rt?Is:$t.getTransfer(J);O===r.FLOAT&&(Y=r.RGBA32F),O===r.HALF_FLOAT&&(Y=r.RGBA16F),O===r.UNSIGNED_BYTE&&(Y=$===ie?r.SRGB8_ALPHA8:r.RGBA8),O===r.UNSIGNED_SHORT&&ct&&(Y=ct.RGBA16_EXT),O===r.SHORT&&ct&&(Y=ct.RGBA16_SNORM_EXT),O===r.UNSIGNED_SHORT_4_4_4_4&&(Y=r.RGBA4),O===r.UNSIGNED_SHORT_5_5_5_1&&(Y=r.RGB5_A1)}return(Y===r.R16F||Y===r.R32F||Y===r.RG16F||Y===r.RG32F||Y===r.RGBA16F||Y===r.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function y(A,w){let O;return A?w===null||w===Si||w===Dn?O=r.DEPTH24_STENCIL8:w===pi?O=r.DEPTH32F_STENCIL8:w===us&&(O=r.DEPTH24_STENCIL8,Pt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Si||w===Dn?O=r.DEPTH_COMPONENT24:w===pi?O=r.DEPTH_COMPONENT32F:w===us&&(O=r.DEPTH_COMPONENT16),O}function b(A,w){return M(A)===!0||A.isFramebufferTexture&&A.minFilter!==ye&&A.minFilter!==Se?Math.log2(Math.max(w.width,w.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?w.mipmaps.length:1}function C(A){let w=new WeakRef(A);i.get(A).__ref=w,g.add(w),x.register(A,w,w)}function R(A){let w=i.get(A).__ref;w!==void 0&&(g.delete(w),x.unregister(w))}function P(A){B(A.target)}function k(A){L(A.target)}function B(A){A.removeEventListener("dispose",P),R(A),W(A),A.isVideoTexture&&c.delete(A),A.isHTMLTexture&&u.delete(A)}function L(A){A.removeEventListener("dispose",k),R(A),Q(A)}function V(){for(let A of g){let w=A.deref();w!==void 0&&(w.isRenderTarget===!0?L(w):B(w))}g.clear(),u.clear()}function W(A){let w=i.get(A);if(w.__webglInit===void 0)return;let O=A.source,it=f.get(O);if(it){let J=it[w.__cacheKey];J.usedTimes--,J.usedTimes===0&&H(A),Object.keys(it).length===0&&f.delete(O)}i.remove(A)}function H(A){let w=i.get(A);r.deleteTexture(w.__webglTexture);let O=A.source,it=f.get(O);delete it[w.__cacheKey],o.memory.textures--}function Q(A){let w=i.get(A);w.__depthDisposeCallback&&w.__depthDisposeCallback();let O=A.depthTexture;if(O&&O.renderTarget===A&&B(O),A.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(w.__webglFramebuffer[J]))for(let rt=0;rt<w.__webglFramebuffer[J].length;rt++)r.deleteFramebuffer(w.__webglFramebuffer[J][rt]);else r.deleteFramebuffer(w.__webglFramebuffer[J]);w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer[J])}else{if(Array.isArray(w.__webglFramebuffer))for(let J=0;J<w.__webglFramebuffer.length;J++)r.deleteFramebuffer(w.__webglFramebuffer[J]);else r.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&r.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let J=0;J<w.__webglColorRenderbuffer.length;J++)w.__webglColorRenderbuffer[J]&&r.deleteRenderbuffer(w.__webglColorRenderbuffer[J]);w.__webglDepthRenderbuffer&&r.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let it=A.textures;for(let J=0,rt=it.length;J<rt;J++){let ct=i.get(it[J]);ct.__webglTexture&&(r.deleteTexture(ct.__webglTexture),o.memory.textures--),i.remove(it[J])}i.remove(A)}let X=0;function j(){X=0}function et(){return X}function wt(A){X=A}function Ut(){let A=X;return A>=n.maxTextures&&Pt("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+n.maxTextures),X+=1,A}function K(A){let w=[];return w.push(A.wrapS),w.push(A.wrapT),w.push(A.wrapR||0),w.push(A.magFilter),w.push(A.minFilter),w.push(A.anisotropy),w.push(A.internalFormat),w.push(A.format),w.push(A.type),w.push(A.generateMipmaps),w.push(A.mipmapsAutoUpdate),w.push(A.premultiplyAlpha),w.push(A.flipY),w.push(A.unpackAlignment),w.push(A.colorSpace),w.join()}function mt(A,w){let O=i.get(A);if(A.isVideoTexture&&Ee(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&O.__version!==A.version){let it=A.image;if(it===null)Pt("WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)Pt("WebGLRenderer: Texture marked for update but image is incomplete");else{Te(O,A,w);return}}else A.isExternalTexture&&(O.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,O.__webglTexture,r.TEXTURE0+w)}function vt(A,w){let O=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){Te(O,A,w);return}else A.isExternalTexture&&(O.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(r.TEXTURE_2D_ARRAY,O.__webglTexture,r.TEXTURE0+w)}function Rt(A,w){let O=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){Te(O,A,w);return}e.bindTexture(r.TEXTURE_3D,O.__webglTexture,r.TEXTURE0+w)}function gt(A,w){let O=i.get(A);if(A.version>0&&O.__version!==A.version){Je(O,A,w);return}e.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+w)}let zt={[so]:r.REPEAT,[Ai]:r.CLAMP_TO_EDGE,[ro]:r.MIRRORED_REPEAT},ve={[ye]:r.NEAREST,[jc]:r.NEAREST_MIPMAP_NEAREST,[er]:r.NEAREST_MIPMAP_LINEAR,[Se]:r.LINEAR,[Lo]:r.LINEAR_MIPMAP_NEAREST,[Ji]:r.LINEAR_MIPMAP_LINEAR},Lt={[iu]:r.NEVER,[eh]:r.ALWAYS,[nu]:r.LESS,[Ql]:r.LEQUAL,[su]:r.EQUAL,[th]:r.GEQUAL,[ru]:r.GREATER,[ou]:r.NOTEQUAL};function se(A,w){if(w.type===pi&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===Se||w.magFilter===Lo||w.magFilter===er||w.magFilter===Ji||w.minFilter===Se||w.minFilter===Lo||w.minFilter===er||w.minFilter===Ji)&&Pt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(A,r.TEXTURE_WRAP_S,zt[w.wrapS]),r.texParameteri(A,r.TEXTURE_WRAP_T,zt[w.wrapT]),(A===r.TEXTURE_3D||A===r.TEXTURE_2D_ARRAY)&&r.texParameteri(A,r.TEXTURE_WRAP_R,zt[w.wrapR]),r.texParameteri(A,r.TEXTURE_MAG_FILTER,ve[w.magFilter]),r.texParameteri(A,r.TEXTURE_MIN_FILTER,ve[w.minFilter]),w.compareFunction&&(r.texParameteri(A,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(A,r.TEXTURE_COMPARE_FUNC,Lt[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===ye||w.minFilter!==er&&w.minFilter!==Ji||w.type===pi&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){let O=t.get("EXT_texture_filter_anisotropic");r.texParameterf(A,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,n.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function oe(A,w){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,w.addEventListener("dispose",P),C(w));let it=w.source,J=f.get(it);J===void 0&&(J={},f.set(it,J));let rt=K(w);if(rt!==A.__cacheKey){J[rt]===void 0&&(J[rt]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,O=!0),J[rt].usedTimes++;let ct=J[A.__cacheKey];ct!==void 0&&(J[A.__cacheKey].usedTimes--,ct.usedTimes===0&&H(w)),A.__cacheKey=rt,A.__webglTexture=J[rt].texture}return O}function Xt(A,w,O){return Math.floor(Math.floor(A/O)/w)}function Fe(A,w,O,it){let rt=A.updateRanges;if(rt.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,w.width,w.height,O,it,w.data);else{rt.sort((I,Z)=>I.start-Z.start);let ct=0;for(let I=1;I<rt.length;I++){let Z=rt[ct],q=rt[I],lt=Z.start+Z.count,st=Xt(q.start,w.width,4),ot=Xt(Z.start,w.width,4);q.start<=lt+1&&st===ot&&Xt(q.start+q.count-1,w.width,4)===st?Z.count=Math.max(Z.count,q.start+q.count-Z.start):(++ct,rt[ct]=q)}rt.length=ct+1;let Y=e.getParameter(r.UNPACK_ROW_LENGTH),$=e.getParameter(r.UNPACK_SKIP_PIXELS),at=e.getParameter(r.UNPACK_SKIP_ROWS);e.pixelStorei(r.UNPACK_ROW_LENGTH,w.width);for(let I=0,Z=rt.length;I<Z;I++){let q=rt[I],lt=Math.floor(q.start/4),st=Math.ceil(q.count/4),ot=lt%w.width,Et=Math.floor(lt/w.width),Gt=st,nt=1;e.pixelStorei(r.UNPACK_SKIP_PIXELS,ot),e.pixelStorei(r.UNPACK_SKIP_ROWS,Et),e.texSubImage2D(r.TEXTURE_2D,0,ot,Et,Gt,nt,O,it,w.data)}A.clearUpdateRanges(),e.pixelStorei(r.UNPACK_ROW_LENGTH,Y),e.pixelStorei(r.UNPACK_SKIP_PIXELS,$),e.pixelStorei(r.UNPACK_SKIP_ROWS,at)}}function Te(A,w,O){let it=r.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(it=r.TEXTURE_2D_ARRAY),w.isData3DTexture&&(it=r.TEXTURE_3D);let J=oe(A,w),rt=w.source;e.bindTexture(it,A.__webglTexture,r.TEXTURE0+O);let ct=i.get(rt);if(rt.version!==ct.__version||J===!0){if(e.activeTexture(r.TEXTURE0+O),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){let nt=$t.getPrimaries($t.workingColorSpace),At=w.colorSpace===Qi?null:$t.getPrimaries(w.colorSpace),Ht=w.colorSpace===Qi||nt===At?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht)}e.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment);let $=_(w.image,!1,n.maxTextureSize);$=Ct(w,$);let at=s.convert(w.format,w.colorSpace),I=s.convert(w.type),Z=S(w.internalFormat,at,I,w.normalized,w.colorSpace,w.isVideoTexture);se(it,w);let q,lt=w.mipmaps,st=w.isVideoTexture!==!0,ot=ct.__version===void 0||J===!0,Et=rt.dataReady,Gt=b(w,$);if(w.isDepthTexture)Z=y(w.format===ji,w.type),ot&&(st?e.texStorage2D(r.TEXTURE_2D,1,Z,$.width,$.height):e.texImage2D(r.TEXTURE_2D,0,Z,$.width,$.height,0,at,I,null));else if(w.isDataTexture)if(lt.length>0){st&&ot&&e.texStorage2D(r.TEXTURE_2D,Gt,Z,lt[0].width,lt[0].height);for(let nt=0,At=lt.length;nt<At;nt++)q=lt[nt],st?Et&&e.texSubImage2D(r.TEXTURE_2D,nt,0,0,q.width,q.height,at,I,q.data):e.texImage2D(r.TEXTURE_2D,nt,Z,q.width,q.height,0,at,I,q.data);w.generateMipmaps=!1}else st?(ot&&e.texStorage2D(r.TEXTURE_2D,Gt,Z,$.width,$.height),Et&&Fe(w,$,at,I)):e.texImage2D(r.TEXTURE_2D,0,Z,$.width,$.height,0,at,I,$.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){st&&ot&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Gt,Z,lt[0].width,lt[0].height,$.depth);for(let nt=0,At=lt.length;nt<At;nt++)if(q=lt[nt],w.format!==oi)if(at!==null)if(st){if(Et)if(w.layerUpdates.size>0){let Ht=lh(q.width,q.height,w.format,w.type);for(let ft of w.layerUpdates){let re=q.data.subarray(ft*Ht/q.data.BYTES_PER_ELEMENT,(ft+1)*Ht/q.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,nt,0,0,ft,q.width,q.height,1,at,re)}}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,nt,0,0,0,q.width,q.height,$.depth,at,q.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,nt,Z,q.width,q.height,$.depth,0,q.data,0,0);else Pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?Et&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,nt,0,0,0,q.width,q.height,$.depth,at,I,q.data):e.texImage3D(r.TEXTURE_2D_ARRAY,nt,Z,q.width,q.height,$.depth,0,at,I,q.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{st&&ot&&e.texStorage2D(r.TEXTURE_2D,Gt,Z,lt[0].width,lt[0].height);for(let nt=0,At=lt.length;nt<At;nt++)q=lt[nt],w.format!==oi?at!==null?st?Et&&e.compressedTexSubImage2D(r.TEXTURE_2D,nt,0,0,q.width,q.height,at,q.data):e.compressedTexImage2D(r.TEXTURE_2D,nt,Z,q.width,q.height,0,q.data):Pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?Et&&e.texSubImage2D(r.TEXTURE_2D,nt,0,0,q.width,q.height,at,I,q.data):e.texImage2D(r.TEXTURE_2D,nt,Z,q.width,q.height,0,at,I,q.data)}else if(w.isDataArrayTexture)if(st){if(ot&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Gt,Z,$.width,$.height,$.depth),Et)if(w.layerUpdates.size>0){let nt=lh($.width,$.height,w.format,w.type);for(let At of w.layerUpdates){let Ht=$.data.subarray(At*nt/$.data.BYTES_PER_ELEMENT,(At+1)*nt/$.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,At,$.width,$.height,1,at,I,Ht)}w.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,at,I,$.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Z,$.width,$.height,$.depth,0,at,I,$.data);else if(w.isData3DTexture)st?(ot&&e.texStorage3D(r.TEXTURE_3D,Gt,Z,$.width,$.height,$.depth),Et&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,at,I,$.data)):e.texImage3D(r.TEXTURE_3D,0,Z,$.width,$.height,$.depth,0,at,I,$.data);else if(w.isFramebufferTexture){if(ot)if(st)e.texStorage2D(r.TEXTURE_2D,Gt,Z,$.width,$.height);else{let nt=$.width,At=$.height;for(let Ht=0;Ht<Gt;Ht++)e.texImage2D(r.TEXTURE_2D,Ht,Z,nt,At,0,at,I,null),nt>>=1,At>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in r){let nt=r.canvas;if(nt.hasAttribute("layoutsubtree")||nt.setAttribute("layoutsubtree","true"),$.parentNode!==nt){nt.appendChild($),u.add(w),nt.onpaint=At=>{let Ht=At.changedElements;for(let ft of u)Ht.includes(ft.image)&&(ft.needsUpdate=!0)},nt.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,$);else{let Ht=r.RGBA,ft=r.RGBA,re=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,Ht,ft,re,$)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(lt.length>0){if(st&&ot){let nt=kt(lt[0]);e.texStorage2D(r.TEXTURE_2D,Gt,Z,nt.width,nt.height)}for(let nt=0,At=lt.length;nt<At;nt++)q=lt[nt],st?Et&&e.texSubImage2D(r.TEXTURE_2D,nt,0,0,at,I,q):e.texImage2D(r.TEXTURE_2D,nt,Z,at,I,q);w.generateMipmaps=!1}else if(st){if(ot){let nt=kt($);e.texStorage2D(r.TEXTURE_2D,Gt,Z,nt.width,nt.height)}Et&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,at,I,$)}else e.texImage2D(r.TEXTURE_2D,0,Z,at,I,$);M(w)&&w.mipmapsAutoUpdate===!0&&v(it),ct.__version=rt.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function Je(A,w,O){if(w.image.length!==6)return;let it=oe(A,w),J=w.source;e.bindTexture(r.TEXTURE_CUBE_MAP,A.__webglTexture,r.TEXTURE0+O);let rt=i.get(J);if(J.version!==rt.__version||it===!0){e.activeTexture(r.TEXTURE0+O);let ct=$t.getPrimaries($t.workingColorSpace),Y=w.colorSpace===Qi?null:$t.getPrimaries(w.colorSpace),$=w.colorSpace===Qi||ct===Y?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);let at=w.isCompressedTexture||w.image[0].isCompressedTexture,I=w.image[0]&&w.image[0].isDataTexture,Z=[];for(let ft=0;ft<6;ft++)!at&&!I?Z[ft]=_(w.image[ft],!0,n.maxCubemapSize):Z[ft]=I?w.image[ft].image:w.image[ft],Z[ft]=Ct(w,Z[ft]);let q=Z[0],lt=s.convert(w.format,w.colorSpace),st=s.convert(w.type),ot=S(w.internalFormat,lt,st,w.normalized,w.colorSpace),Et=w.isVideoTexture!==!0,Gt=rt.__version===void 0||it===!0,nt=J.dataReady,At=b(w,q);se(r.TEXTURE_CUBE_MAP,w);let Ht;if(w.isDepthTexture){if(ot=y(w.format===ji,w.type),Gt)if(Et)e.texStorage2D(r.TEXTURE_CUBE_MAP,1,ot,q.width,q.height);else for(let ft=0;ft<6;ft++)e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,ot,q.width,q.height,0,lt,st,null)}else if(at){Et&&Gt&&e.texStorage2D(r.TEXTURE_CUBE_MAP,At,ot,q.width,q.height);for(let ft=0;ft<6;ft++){Ht=Z[ft].mipmaps;for(let re=0;re<Ht.length;re++){let Ie=Ht[re];w.format!==oi?lt!==null?Et?nt&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,re,0,0,Ie.width,Ie.height,lt,Ie.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,re,ot,Ie.width,Ie.height,0,Ie.data):Pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Et?nt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,re,0,0,Ie.width,Ie.height,lt,st,Ie.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,re,ot,Ie.width,Ie.height,0,lt,st,Ie.data)}}}else{if(Ht=w.mipmaps,Et&&Gt){Ht.length>0&&At++;let ft=kt(Z[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,At,ot,ft.width,ft.height)}for(let ft=0;ft<6;ft++)if(I){Et?nt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,Z[ft].width,Z[ft].height,lt,st,Z[ft].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,ot,Z[ft].width,Z[ft].height,0,lt,st,Z[ft].data);for(let re=0;re<Ht.length;re++){let en=Ht[re].image[ft].image;Et?nt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,re+1,0,0,en.width,en.height,lt,st,en.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,re+1,ot,en.width,en.height,0,lt,st,en.data)}}else{Et?nt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,lt,st,Z[ft]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,ot,lt,st,Z[ft]);for(let re=0;re<Ht.length;re++){let Ie=Ht[re];Et?nt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,re+1,0,0,lt,st,Ie.image[ft]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,re+1,ot,lt,st,Ie.image[ft])}}}M(w)&&w.mipmapsAutoUpdate===!0&&v(r.TEXTURE_CUBE_MAP),rt.__version=J.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function pe(A,w,O,it,J,rt){let ct=s.convert(O.format,O.colorSpace),Y=s.convert(O.type),$=S(O.internalFormat,ct,Y,O.normalized,O.colorSpace),at=i.get(w),I=i.get(O);if(I.__renderTarget=w,!at.__hasExternalTextures){let Z=Math.max(1,w.width>>rt),q=Math.max(1,w.height>>rt);J===r.TEXTURE_3D||J===r.TEXTURE_2D_ARRAY?e.texImage3D(J,rt,$,Z,q,w.depth,0,ct,Y,null):e.texImage2D(J,rt,$,Z,q,0,ct,Y,null)}e.bindFramebuffer(r.FRAMEBUFFER,A),dt(w)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,it,J,I.__webglTexture,0,de(w)):(J===r.TEXTURE_2D||J>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,it,J,I.__webglTexture,rt),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Ti(A,w,O){if(r.bindRenderbuffer(r.RENDERBUFFER,A),w.depthBuffer){let it=w.depthTexture,J=it&&it.isDepthTexture?it.type:null,rt=y(w.stencilBuffer,J),ct=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;dt(w)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,de(w),rt,w.width,w.height):O?r.renderbufferStorageMultisample(r.RENDERBUFFER,de(w),rt,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,rt,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ct,r.RENDERBUFFER,A)}else{let it=w.textures;for(let J=0;J<it.length;J++){let rt=it[J],ct=s.convert(rt.format,rt.colorSpace),Y=s.convert(rt.type),$=S(rt.internalFormat,ct,Y,rt.normalized,rt.colorSpace);dt(w)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,de(w),$,w.width,w.height):O?r.renderbufferStorageMultisample(r.RENDERBUFFER,de(w),$,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,$,w.width,w.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Pe(A,w,O){let it=w.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(r.FRAMEBUFFER,A),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let J=i.get(w.depthTexture);J.__renderTarget=w;let rt=it?w.depthTexture.image[0]:w.depthTexture.image;(!J.__webglTexture||rt.width!==w.width||rt.height!==w.height)&&(rt.width=w.width,rt.height=w.height,w.depthTexture.needsUpdate=!0),it?gt(w.depthTexture,0):mt(w.depthTexture,0);let ct=J.__webglTexture,Y=de(w),$=it?r.TEXTURE_CUBE_MAP_POSITIVE_X+O:r.TEXTURE_2D,at=w.depthTexture.format===ji?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(w.depthTexture.format===Yi)dt(w)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,at,$,ct,0,Y):r.framebufferTexture2D(r.FRAMEBUFFER,at,$,ct,0);else if(w.depthTexture.format===ji)dt(w)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,at,$,ct,0,Y):r.framebufferTexture2D(r.FRAMEBUFFER,at,$,ct,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ai(A){let w=i.get(A),O=A.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==A.depthTexture){let it=A.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),it){let J=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,it.removeEventListener("dispose",J)};it.addEventListener("dispose",J),w.__depthDisposeCallback=J}w.__boundDepthTexture=it}if(A.depthTexture&&!w.__autoAllocateDepthBuffer)if(O)for(let it=0;it<6;it++)Pe(w.__webglFramebuffer[it],A,it);else A.texture.mipmaps.length>0?Pe(w.__webglFramebuffer[0],A,0):Pe(w.__webglFramebuffer,A,0);else if(O){w.__webglDepthbuffer=[];for(let it=0;it<6;it++)if(e.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[it]),w.__webglDepthbuffer[it]===void 0)w.__webglDepthbuffer[it]=r.createRenderbuffer(),Ti(w.__webglDepthbuffer[it],A,!1);else{let J=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,rt=w.__webglDepthbuffer[it];r.bindRenderbuffer(r.RENDERBUFFER,rt),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,rt)}}else if(A.texture.mipmaps.length>0?e.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=r.createRenderbuffer(),Ti(w.__webglDepthbuffer,A,!1);else{let J=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,rt=w.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,rt),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,rt)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function li(A,w,O){let it=i.get(A);w!==void 0&&pe(it.__webglFramebuffer,A,A.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),O!==void 0&&ai(A)}function hi(A){let w=A.texture,O=i.get(A),it=i.get(w);A.addEventListener("dispose",k),C(A);let J=A.textures,rt=A.isWebGLCubeRenderTarget===!0,ct=J.length>1;if(ct||(it.__webglTexture===void 0&&(it.__webglTexture=r.createTexture()),it.__version=w.version,o.memory.textures++),rt){O.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(w.mipmaps.length>0){O.__webglFramebuffer[Y]=[];for(let $=0;$<w.mipmaps.length;$++)O.__webglFramebuffer[Y][$]=r.createFramebuffer()}else O.__webglFramebuffer[Y]=r.createFramebuffer()}else{if(w.mipmaps.length>0){O.__webglFramebuffer=[];for(let Y=0;Y<w.mipmaps.length;Y++)O.__webglFramebuffer[Y]=r.createFramebuffer()}else O.__webglFramebuffer=r.createFramebuffer();if(ct)for(let Y=0,$=J.length;Y<$;Y++){let at=i.get(J[Y]);at.__webglTexture===void 0&&(at.__webglTexture=r.createTexture(),o.memory.textures++)}if(A.samples>0&&dt(A)===!1){O.__webglMultisampledFramebuffer=r.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let Y=0;Y<J.length;Y++){let $=J[Y];O.__webglColorRenderbuffer[Y]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,O.__webglColorRenderbuffer[Y]);let at=s.convert($.format,$.colorSpace),I=s.convert($.type),Z=S($.internalFormat,at,I,$.normalized,$.colorSpace,A.isXRRenderTarget===!0),q=de(A);r.renderbufferStorageMultisample(r.RENDERBUFFER,q,Z,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Y,r.RENDERBUFFER,O.__webglColorRenderbuffer[Y])}r.bindRenderbuffer(r.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=r.createRenderbuffer(),Ti(O.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(rt){e.bindTexture(r.TEXTURE_CUBE_MAP,it.__webglTexture),se(r.TEXTURE_CUBE_MAP,w);for(let Y=0;Y<6;Y++)if(w.mipmaps.length>0)for(let $=0;$<w.mipmaps.length;$++)pe(O.__webglFramebuffer[Y][$],A,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,$);else pe(O.__webglFramebuffer[Y],A,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);M(w)?v(r.TEXTURE_CUBE_MAP):w.mipmaps.length>0&&r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),e.unbindTexture()}else if(ct){for(let Y=0,$=J.length;Y<$;Y++){let at=J[Y],I=i.get(at),Z=r.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Z=A.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(Z,I.__webglTexture),se(Z,at),pe(O.__webglFramebuffer,A,at,r.COLOR_ATTACHMENT0+Y,Z,0),M(at)&&v(Z)}e.unbindTexture()}else{let Y=r.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Y=A.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(Y,it.__webglTexture),se(Y,w),w.mipmaps.length>0)for(let $=0;$<w.mipmaps.length;$++)pe(O.__webglFramebuffer[$],A,w,r.COLOR_ATTACHMENT0,Y,$);else pe(O.__webglFramebuffer,A,w,r.COLOR_ATTACHMENT0,Y,0);M(w)?v(Y):w.mipmaps.length>0&&r.texParameteri(Y,r.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),e.unbindTexture()}A.depthBuffer&&ai(A)}function F(A){let w=A.textures;for(let O=0,it=w.length;O<it;O++){let J=w[O];if(M(J)&&J.mipmapsAutoUpdate===!0){let rt=T(A),ct=i.get(J).__webglTexture;e.bindTexture(rt,ct),v(rt),e.unbindTexture()}}}let ci=[];function ue(A){if(A.samples>0){if(dt(A)===!1){let w=A.textures,O=A.width,it=A.height,J=r.COLOR_BUFFER_BIT,rt=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ct=i.get(A),Y=w.length>1;if(Y)for(let at=0;at<w.length;at++)e.bindFramebuffer(r.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+at,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,ct.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+at,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,ct.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ct.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let at=0;at<w.length;at++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(J|=r.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(J|=r.STENCIL_BUFFER_BIT)),Y){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ct.__webglColorRenderbuffer[at]);let I=i.get(w[at]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,I,0)}r.blitFramebuffer(0,0,O,it,0,0,O,it,J,r.NEAREST),h===!0&&(ci.length=0,ci.push(r.COLOR_ATTACHMENT0+at),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&ci.push(rt),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ci))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Y)for(let at=0;at<w.length;at++){e.bindFramebuffer(r.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+at,r.RENDERBUFFER,ct.__webglColorRenderbuffer[at]);let I=i.get(w[at]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,ct.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+at,r.TEXTURE_2D,I,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ct.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&h){let w=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[w])}}}function de(A){return Math.min(n.maxSamples,A.samples)}function dt(A){let w=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ee(A){let w=o.render.frame;c.get(A)!==w&&(c.set(A,w),A.update())}function Ct(A,w){let O=A.colorSpace,it=A.format,J=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||O!==Ps&&O!==Qi&&($t.getTransfer(O)===ie?(it!==oi||J!==qe)&&Pt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Dt("WebGLTextures: Unsupported texture color space:",O)),w}function kt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=Ut,this.resetTextureUnits=j,this.getTextureUnits=et,this.setTextureUnits=wt,this.setTexture2D=mt,this.setTexture2DArray=vt,this.setTexture3D=Rt,this.setTextureCube=gt,this.rebindTextures=li,this.setupRenderTarget=hi,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=ue,this.setupDepthRenderbuffer=ai,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=dt,this.dispose=V}function Vg(r,t){function e(i,n=Qi){let s,o=$t.getTransfer(n);if(i===qe)return r.UNSIGNED_BYTE;if(i===No)return r.UNSIGNED_SHORT_4_4_4_4;if(i===Fo)return r.UNSIGNED_SHORT_5_5_5_1;if(i===Kl)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===Zl)return r.UNSIGNED_INT_10F_11F_11F_REV;if(i===Yl)return r.BYTE;if(i===$l)return r.SHORT;if(i===us)return r.UNSIGNED_SHORT;if(i===Do)return r.INT;if(i===Si)return r.UNSIGNED_INT;if(i===pi)return r.FLOAT;if(i===ri)return r.HALF_FLOAT;if(i===Jl)return r.ALPHA;if(i===jl)return r.RGB;if(i===oi)return r.RGBA;if(i===Yi)return r.DEPTH_COMPONENT;if(i===ji)return r.DEPTH_STENCIL;if(i===ko)return r.RED;if(i===Uo)return r.RED_INTEGER;if(i===xn)return r.RG;if(i===Oo)return r.RG_INTEGER;if(i===zo)return r.RGBA_INTEGER;if(i===ir||i===nr||i===sr||i===rr)if(o===ie)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ir)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===nr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===sr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===rr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ir)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===nr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===sr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===rr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Bo||i===Ho||i===Go||i===Vo)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Bo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ho)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Go)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Vo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Wo||i===Xo||i===qo||i===Yo||i===$o||i===or||i===Ko)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Wo||i===Xo)return o===ie?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===qo)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Yo)return s.COMPRESSED_R11_EAC;if(i===$o)return s.COMPRESSED_SIGNED_R11_EAC;if(i===or)return s.COMPRESSED_RG11_EAC;if(i===Ko)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Zo||i===Jo||i===jo||i===Qo||i===ta||i===ea||i===ia||i===na||i===sa||i===ra||i===oa||i===aa||i===la||i===ha)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Zo)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Jo)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===jo)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Qo)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ta)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ea)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ia)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===na)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===sa)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ra)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===oa)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===aa)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===la)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ha)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ca||i===ua||i===da)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===ca)return o===ie?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ua)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===da)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===fa||i===pa||i===ar||i===ma)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===fa)return s.COMPRESSED_RED_RGTC1_EXT;if(i===pa)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ar)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ma)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Dn?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:e}}var Wg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Xg=`
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

}`,bh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Vs(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Ze({vertexShader:Wg,fragmentShader:Xg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Nt(new Ys(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Sh=class extends Ri{constructor(t,e){super();let i=this,n=null,s=1,o=null,a="local-floor",h=1,l=null,c=null,u=null,d=null,f=null,g=null,x=typeof XRWebGLBinding<"u",m=new bh,p={},_=e.getContextAttributes(),M=null,v=null,T=[],S=[],y=new Bt,b=null,C=null,R=new We;R.viewport=new fe;let P=new We;P.viewport=new fe;let k=[R,P],B=new Ro,L=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let mt=T[K];return mt===void 0&&(mt=new ns,T[K]=mt),mt.getTargetRaySpace()},this.getControllerGrip=function(K){let mt=T[K];return mt===void 0&&(mt=new ns,T[K]=mt),mt.getGripSpace()},this.getHand=function(K){let mt=T[K];return mt===void 0&&(mt=new ns,T[K]=mt),mt.getHandSpace()};function W(K){let mt=S.indexOf(K.inputSource);if(mt===-1)return;let vt=T[mt];vt!==void 0&&(vt.update(K.inputSource,K.frame,l||o),vt.dispatchEvent({type:K.type,data:K.inputSource}))}function H(){n.removeEventListener("select",W),n.removeEventListener("selectstart",W),n.removeEventListener("selectend",W),n.removeEventListener("squeeze",W),n.removeEventListener("squeezestart",W),n.removeEventListener("squeezeend",W),n.removeEventListener("end",H),n.removeEventListener("inputsourceschange",Q);for(let K=0;K<T.length;K++){let mt=S[K];mt!==null&&(S[K]=null,T[K].disconnect(mt))}L=null,V=null,m.reset();for(let K in p)delete p[K];if(t.setRenderTarget(M),f=null,d=null,u=null,n=null,v=null,Ut.stop(),i.isPresenting=!1,t.setPixelRatio(b),t.setSize(y.width,y.height,!1),C!==null){let K=C.camera;K.fov=C.fov,K.zoom=C.zoom,K.updateProjectionMatrix(),C=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&Pt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&Pt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(n,e)),u},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(K){if(n=K,n!==null){if(M=t.getRenderTarget(),n.addEventListener("select",W),n.addEventListener("selectstart",W),n.addEventListener("selectend",W),n.addEventListener("squeeze",W),n.addEventListener("squeezestart",W),n.addEventListener("squeezeend",W),n.addEventListener("end",H),n.addEventListener("inputsourceschange",Q),_.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(y),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let vt=null,Rt=null,gt=null;_.depth&&(gt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,vt=_.stencil?ji:Yi,Rt=_.stencil?Dn:Si);let zt={colorFormat:e.RGBA8,depthFormat:gt,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(zt),n.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new Xe(d.textureWidth,d.textureHeight,{format:oi,type:qe,depthTexture:new bi(d.textureWidth,d.textureHeight,Rt,void 0,void 0,void 0,void 0,void 0,void 0,vt),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let vt={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(n,e,vt),n.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Xe(f.framebufferWidth,f.framebufferHeight,{format:oi,type:qe,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(h),l=null,o=await n.requestReferenceSpace(a),Ut.setContext(n),Ut.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Q(K){for(let mt=0;mt<K.removed.length;mt++){let vt=K.removed[mt],Rt=S.indexOf(vt);Rt>=0&&(S[Rt]=null,T[Rt].disconnect(vt))}for(let mt=0;mt<K.added.length;mt++){let vt=K.added[mt],Rt=S.indexOf(vt);if(Rt===-1){for(let zt=0;zt<T.length;zt++)if(zt>=S.length){S.push(vt),Rt=zt;break}else if(S[zt]===null){S[zt]=vt,Rt=zt;break}if(Rt===-1)break}let gt=T[Rt];gt&&gt.connect(vt)}}function X(K,mt){mt===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(mt.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(n===null)return;let mt=K.near,vt=K.far;m.texture!==null&&(m.depthNear>0&&(mt=m.depthNear),m.depthFar>0&&(vt=m.depthFar)),B.near=P.near=R.near=mt,B.far=P.far=R.far=vt,(L!==B.near||V!==B.far)&&(n.updateRenderState({depthNear:B.near,depthFar:B.far}),L=B.near,V=B.far),B.layers.mask=K.layers.mask|6,R.layers.mask=B.layers.mask&-5,P.layers.mask=B.layers.mask&-3;let Rt=K.parent,gt=B.cameras;X(B,Rt);for(let zt=0;zt<gt.length;zt++)X(gt[zt],Rt);B.projectionMatrix.copy(R.projectionMatrix),B.projectionMatrixInverse.copy(R.projectionMatrixInverse),C===null&&K.isPerspectiveCamera&&(C={camera:K,fov:K.fov,zoom:K.zoom}),j(K,B,Rt)};function j(K,mt,vt){vt===null?K.matrix.copy(mt.matrixWorld):(K.matrix.copy(vt.matrixWorld),K.matrix.invert(),K.matrix.multiply(mt.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(mt.projectionMatrix),K.projectionMatrixInverse.copy(mt.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Ds*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(d===null&&f===null))return h},this.setFoveation=function(K){h=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(K){return p[K]};let et=null;function wt(K,mt){if(c=mt.getViewerPose(l||o),g=mt,c!==null){let vt=c.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let Rt=!1;vt.length!==B.cameras.length&&(B.cameras.length=0,Rt=!0);for(let Lt=0;Lt<vt.length;Lt++){let se=vt[Lt],oe=null;if(f!==null)oe=f.getViewport(se);else{let Fe=u.getViewSubImage(d,se);oe=Fe.viewport,Lt===0&&(t.setRenderTargetTextures(v,Fe.colorTexture,Fe.depthStencilTexture),t.setRenderTarget(v))}let Xt=k[Lt];Xt===void 0&&(Xt=new We,Xt.layers.enable(Lt),Xt.viewport=new fe,k[Lt]=Xt),Xt.matrix.fromArray(se.transform.matrix),Xt.matrix.decompose(Xt.position,Xt.quaternion,Xt.scale),Xt.projectionMatrix.fromArray(se.projectionMatrix),Xt.projectionMatrixInverse.copy(Xt.projectionMatrix).invert(),Xt.viewport.set(oe.x,oe.y,oe.width,oe.height),Lt===0&&(B.matrix.copy(Xt.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Rt===!0&&B.cameras.push(Xt)}let gt=n.enabledFeatures;if(gt&&gt.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&x){u=i.getBinding();let Lt=u.getDepthInformation(vt[0]);Lt&&Lt.isValid&&Lt.texture&&m.init(Lt,n.renderState)}if(gt&&gt.includes("camera-access")&&x){t.state.unbindTexture(),u=i.getBinding();for(let Lt=0;Lt<vt.length;Lt++){let se=vt[Lt].camera;if(se){let oe=p[se];oe||(oe=new Vs,p[se]=oe);let Xt=u.getCameraImage(se);oe.sourceTexture=Xt}}}}for(let vt=0;vt<T.length;vt++){let Rt=S[vt],gt=T[vt];Rt!==null&&gt!==void 0&&gt.update(Rt,mt,l||o)}et&&et(K,mt),mt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:mt}),g=null}let Ut=new Ou;Ut.setAnimationLoop(wt),this.setAnimationLoop=function(K){et=K},this.dispose=function(){}}},qg=new jt,$u=new Ft;$u.set(-1,0,0,0,1,0,0,0,1);function Yg(r,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,rh(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,_,M,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(m,p):p.isMeshLambertMaterial?(s(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),c(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),x(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?h(m,p,_,M):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Oe&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Oe&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let _=t.get(p),M=_.envMap,v=_.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(qg.makeRotationFromEuler(v)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply($u),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function h(m,p,_,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=M*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,_){m.ior.value=p.ior,p.diffuseRoughness>0&&(m.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=p.diffuseRoughnessMap,e(p.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Oe&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let _=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function $g(r,t,e,i){let n={},s={};function o(_,M){let v=M.program;i.uniformBlockBinding(_,v,n[_.id])}function a(_,M){let v=n[_.id];v===void 0&&(g(_),v=h(_),n[_.id]=v,_.addEventListener("dispose",m));let T=M.program;i.updateUBOMapping(_,T);let S=t.render.frame;s[_.id]!==S&&(l(_),s[_.id]=S)}function h(_){let M=r.createBuffer(),v=_.__size,T=_.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,v,T),r.bindBuffer(r.UNIFORM_BUFFER,null),M}function l(_){let M=n[_.id],v=_.uniforms,T=_.__cache;r.bindBuffer(r.UNIFORM_BUFFER,M);for(let S=0,y=v.length;S<y;S++){let b=v[S];if(Array.isArray(b))for(let C=0,R=b.length;C<R;C++)c(b[C],S,C,T);else c(b,S,0,T)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function c(_,M,v,T){if(d(_,M,v,T)===!0){let S=_.__offset,y=_.value;if(Array.isArray(y)){let b=0;for(let C=0;C<y.length;C++){let R=y[C],P=x(R,!0);u(R,_.__data,b),b+=P.storage/Float32Array.BYTES_PER_ELEMENT}}else u(y,_.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,S,_.__data)}}function u(_,M,v){typeof _=="number"||typeof _=="boolean"?M[v]=_:_.isMatrix3?(M[v]=_.elements[0],M[v+1]=_.elements[1],M[v+2]=_.elements[2],M[v+3]=0,M[v+4]=_.elements[3],M[v+5]=_.elements[4],M[v+6]=_.elements[5],M[v+7]=0,M[v+8]=_.elements[6],M[v+9]=_.elements[7],M[v+10]=_.elements[8],M[v+11]=0):ArrayBuffer.isView(_)?M.set(_.subarray(0,M.length-v),v):_.toArray(M,v)}function d(_,M,v,T){let S=_.value,y=M+"_"+v;if(Array.isArray(S)){T[y]===void 0&&(T[y]=[]);let b=T[y],C=!1;for(let R=0;R<S.length;R++)f(S[R],b,R)===!0&&(C=!0);return C}return f(S,T,y)}function f(_,M,v){if(M[v]===void 0)return typeof _=="number"||typeof _=="boolean"?M[v]=_:ArrayBuffer.isView(_)?M[v]=_.slice():M[v]=_.clone(),!0;{let T=M[v];if(typeof _=="number"||typeof _=="boolean"){if(T!==_)return M[v]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(T.equals(_)===!1)return T.copy(_),!0}}return!1}function g(_){let M=_.uniforms,v=0,T=16;for(let y=0,b=M.length;y<b;y++){let C=Array.isArray(M[y])?M[y]:[M[y]];for(let R=0,P=C.length;R<P;R++){let k=C[R],B=Array.isArray(k.value)?k.value:[k.value],L=Array.isArray(M[y])||Array.isArray(k.value),V=v;for(let H=0,Q=B.length;H<Q;H++){let X=B[H],j=x(X,L),et=v%T,wt=et%j.boundary,Ut=et+wt;v+=wt,Ut!==0&&T-Ut<j.storage&&(v+=T-Ut),H===0&&(V=v),v+=j.storage}let W=k.type==="int"?Int32Array:k.type==="uint"?Uint32Array:Float32Array;k.__data=new W((v-V)/Float32Array.BYTES_PER_ELEMENT),k.__offset=V}}let S=v%T;return S>0&&(v+=T-S),_.__size=v,_.__cache={},this}function x(_,M){let v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=16,v.storage=48):_.isMatrix4?(v.boundary=16,v.storage=64):_.isTexture?Pt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(v.boundary=16,v.storage=_.byteLength):Pt("WebGLRenderer: Unsupported uniform value type.",_),M===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function m(_){let M=_.target;M.removeEventListener("dispose",m),r.deleteBuffer(n[M.id]),delete n[M.id],delete s[M.id]}function p(){for(let _ in n)r.deleteBuffer(n[_]);n={},s={}}return{bind:o,update:a,dispose:p}}var Kg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ni=null;function Zg(){return Ni===null&&(Ni=new An(Kg,16,16,xn,ri),Ni.name="DFG_LUT",Ni.minFilter=Se,Ni.magFilter=Se,Ni.wrapS=Ai,Ni.wrapT=Ai,Ni.generateMipmaps=!1,Ni.needsUpdate=!0),Ni}var va=class{constructor(t={}){let{canvas:e=lu(),context:i=null,depth:n=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=qe}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;let x=f,m=new Set([zo,Oo,Uo]),p=new Set([qe,Si,us,Dn,No,Fo]),_=new Uint32Array(4),M=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},T=null,S=null,y=[],b=[],C=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,P=!1,k=null,B=null,L=null,V=null;this._outputColorSpace=ni;let W=0,H=0,Q=null,X=-1,j=null,et=new fe,wt=new fe,Ut=null,K=new yt(0),mt=0,vt=e.width,Rt=e.height,gt=1,zt=null,ve=null,Lt=new fe(0,0,vt,Rt),se=new fe(0,0,vt,Rt),oe=!1,Xt=new cn,Fe=new co,Te=!1,Je=!1,pe=new jt,Ti=new D,Pe=new fe,ai={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},li=!1;function hi(){return Q===null?gt:1}let F=i;function ci(E,N){return e.getContext(E,N)}let ue,de,dt,Ee,Ct,kt,A,w,O,it,J,rt,ct,Y,$,at,I,Z,q,lt,st,ot,Et;try{let E={alpha:!0,depth:n,stencil:s,antialias:a,premultipliedAlpha:h,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",At,!1),e.addEventListener("webglcontextrestored",Ht,!1),e.addEventListener("webglcontextcreationerror",ft,!1),F===null){let N="webgl2";if(F=ci(N,E),F===null)throw ci(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Gt()}catch(E){throw e.removeEventListener("webglcontextlost",At,!1),e.removeEventListener("webglcontextrestored",Ht,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),Dt("WebGLRenderer: "+E.message),E}function Gt(){ue=new am(F),ue.init(),st=new Vg(F,ue),de=new Z0(F,ue,t,st),dt=new Hg(F,ue),de.reversedDepthBuffer&&d&&dt.buffers.depth.setReversed(!0),B=F.createFramebuffer(),L=F.createFramebuffer(),V=F.createFramebuffer(),Ee=new cm(F),Ct=new Ag,kt=new Gg(F,ue,dt,Ct,de,st,Ee),A=new om(R),w=new df(F),ot=new $0(F,w),O=new lm(F,w,Ee,ot),it=new dm(F,O,w,ot,Ee),Z=new um(F,de,kt),$=new J0(Ct),J=new Eg(R,A,ue,de,ot,$),rt=new Yg(R,Ct),ct=new Cg,Y=new Fg(ue),I=new Y0(R,A,dt,it,g,h),at=new Bg(R,it,de),Et=new $g(F,Ee,de,dt),q=new K0(F,ue,Ee),lt=new hm(F,ue,Ee),Ee.programs=J.programs,R.capabilities=de,R.extensions=ue,R.properties=Ct,R.renderLists=ct,R.shadowMap=at,R.state=dt,R.info=Ee}x!==qe&&(C=new pm(x,e.width,e.height,a,n,s));let nt=new Sh(R,F);this.xr=nt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let E=ue.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=ue.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return gt},this.setPixelRatio=function(E){E!==void 0&&(gt=E,this.setSize(vt,Rt,!1))},this.getSize=function(E){return E.set(vt,Rt)},this.setSize=function(E,N,G=!0){if(nt.isPresenting){Pt("WebGLRenderer: Can't change size while VR device is presenting.");return}vt=E,Rt=N,e.width=Math.floor(E*gt),e.height=Math.floor(N*gt),G===!0&&(e.style.width=E+"px",e.style.height=N+"px"),C!==null&&C.setSize(e.width,e.height),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(vt*gt,Rt*gt).floor()},this.setDrawingBufferSize=function(E,N,G){vt=E,Rt=N,gt=G,e.width=Math.floor(E*G),e.height=Math.floor(N*G),this.setViewport(0,0,E,N)},this.setEffects=function(E){if(x===qe){Dt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let N=0;N<E.length;N++)if(E[N].isOutputPass===!0){Pt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(et)},this.getViewport=function(E){return E.copy(Lt)},this.setViewport=function(E,N,G,U){E.isVector4?Lt.set(E.x,E.y,E.z,E.w):Lt.set(E,N,G,U),dt.viewport(et.copy(Lt).multiplyScalar(hi()).round())},this.getScissor=function(E){return E.copy(se)},this.setScissor=function(E,N,G,U){E.isVector4?se.set(E.x,E.y,E.z,E.w):se.set(E,N,G,U),dt.scissor(wt.copy(se).multiplyScalar(hi()).round())},this.getScissorTest=function(){return oe},this.setScissorTest=function(E){dt.setScissorTest(oe=E)},this.setOpaqueSort=function(E){zt=E},this.setTransparentSort=function(E){ve=E},this.getClearColor=function(E){return E.copy(I.getClearColor())},this.setClearColor=function(){I.setClearColor(...arguments)},this.getClearAlpha=function(){return I.getClearAlpha()},this.setClearAlpha=function(){I.setClearAlpha(...arguments)},this.clear=function(E=!0,N=!0,G=!0){let U=0;if(E){let z=!1;if(Q!==null){let ut=Q.texture.format;z=m.has(ut)}if(z){let ut=Q.texture.type,_t=p.has(ut),ht=I.getClearColor(),xt=I.getClearAlpha(),Tt=ht.r,Ot=ht.g,qt=ht.b;_t?(_[0]=Tt,_[1]=Ot,_[2]=qt,_[3]=xt,F.clearBufferuiv(F.COLOR,0,_)):(M[0]=Tt,M[1]=Ot,M[2]=qt,M[3]=xt,F.clearBufferiv(F.COLOR,0,M))}else U|=F.COLOR_BUFFER_BIT}N&&(U|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),G&&(U|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U!==0&&F.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),k=E},this.dispose=function(){e.removeEventListener("webglcontextlost",At,!1),e.removeEventListener("webglcontextrestored",Ht,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),I.dispose(),ct.dispose(),Y.dispose(),kt.dispose(),Ct.dispose(),A.dispose(),it.dispose(),O.dispose(),ot.dispose(),Et.dispose(),J.dispose(),nt.dispose(),nt.removeEventListener("sessionstart",Gh),nt.removeEventListener("sessionend",Vh),_n.stop()};function At(E){E.preventDefault(),nh("WebGLRenderer: Context Lost."),P=!0}function Ht(){nh("WebGLRenderer: Context Restored."),P=!1;let E=Ee.autoReset,N=at.enabled,G=at.autoUpdate,U=at.needsUpdate,z=at.type;Gt(),Ee.autoReset=E,at.enabled=N,at.autoUpdate=G,at.needsUpdate=U,at.type=z}function ft(E){Dt("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function re(E){let N=E.target;N.removeEventListener("dispose",re),Ie(N)}function Ie(E){en(E),Ct.remove(E)}function en(E){let N=Ct.get(E).programs;N!==void 0&&(N.forEach(function(G){J.releaseProgram(G)}),E.isShaderMaterial&&J.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,G,U,z,ut){N===null&&(N=ai);let _t=z.isMesh&&z.matrixWorld.determinantAffine()<0,ht=Sd(E,N,G,U,z);dt.setMaterial(U,_t);let xt=G.index,Tt=1;if(U.wireframe===!0){if(xt=O.getWireframeAttribute(G),xt===void 0)return;Tt=2}let Ot=G.drawRange,qt=G.attributes.position,Mt=Ot.start*Tt,Yt=(Ot.start+Ot.count)*Tt;ut!==null&&(Mt=Math.max(Mt,ut.start*Tt),Yt=Math.min(Yt,(ut.start+ut.count)*Tt)),xt!==null?(Mt=Math.max(Mt,0),Yt=Math.min(Yt,xt.count)):qt!=null&&(Mt=Math.max(Mt,0),Yt=Math.min(Yt,qt.count));let Me=Yt-Mt;if(Me<0||Me===1/0)return;ot.setup(z,U,ht,G,xt);let le,ae=q;if(xt!==null&&(le=w.get(xt),ae=lt,ae.setIndex(le)),z.isMesh)U.wireframe===!0?(dt.setLineWidth(U.wireframeLinewidth*hi()),ae.setMode(F.LINES)):ae.setMode(F.TRIANGLES);else if(z.isLine){let Be=U.linewidth;Be===void 0&&(Be=1),dt.setLineWidth(Be*hi()),z.isLineSegments?ae.setMode(F.LINES):z.isLineLoop?ae.setMode(F.LINE_LOOP):ae.setMode(F.LINE_STRIP)}else z.isPoints?ae.setMode(F.POINTS):z.isSprite&&ae.setMode(F.TRIANGLES);if(z.isBatchedMesh)if(ue.get("WEBGL_multi_draw"))ae.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let Be=z._multiDrawStarts,bt=z._multiDrawCounts,$e=z._multiDrawCount,ee=xt?w.get(xt).bytesPerElement:1,vn=Ct.get(U).currentProgram.getUniforms();for(let He=0;He<$e;He++)vn.setValue(F,"_gl_DrawID",He),ae.render(Be[He]/ee,bt[He])}else if(z.isInstancedMesh)ae.renderInstances(Mt,Me,z.count);else if(G.isInstancedBufferGeometry){let Be=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,bt=Math.min(G.instanceCount,Be);ae.renderInstances(Mt,Me,bt)}else ae.render(Mt,Me)};function Hh(E,N,G,U){k!==null&&E.isNodeMaterial&&k.setObject(U,E),Te===!0&&$.setState(E,G,!1),E.transparent===!0&&E.side===ti&&E.forceSinglePass===!1?(E.side=Oe,E.needsUpdate=!0,vs(E,N,U),E.side=gn,E.needsUpdate=!0,vs(E,N,U),E.side=ti):vs(E,N,U)}this.compile=function(E,N,G=null){G===null&&(G=E),k!==null&&k.renderStart(E,N,G),S=Y.get(G),S.init(N),b.push(S),G.traverseVisible(function(z){z.isLight&&z.layers.test(N.layers)&&(S.pushLight(z),z.castShadow&&S.pushShadow(z))}),E!==G&&E.traverseVisible(function(z){z.isLight&&z.layers.test(N.layers)&&(S.pushLight(z),z.castShadow&&S.pushShadow(z))}),S.setupLights(),k!==null&&k.updateLights(S.state.lightsArray),Je=this.localClippingEnabled,Te=$.init(this.clippingPlanes,Je),Te===!0&&$.setGlobalState(this.clippingPlanes,N),k!==null&&at.render(S.state.shadowsArray,G,N);let U=new Set;return E.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let ut=z.material;if(ut)if(Array.isArray(ut))for(let _t=0;_t<ut.length;_t++){let ht=ut[_t];Hh(ht,G,N,z),U.add(ht)}else Hh(ut,G,N,z),U.add(ut)}),S=b.pop(),k!==null&&k.renderEnd(),U},this.compileAsync=function(E,N,G=null){let U=this.compile(E,N,G);return new Promise(z=>{function ut(){if(U.forEach(function(_t){let xt=Ct.get(_t).currentProgram;(xt===void 0||xt.isReady())&&U.delete(_t)}),U.size===0){z(E);return}setTimeout(ut,10)}ue.get("KHR_parallel_shader_compile")!==null?ut():setTimeout(ut,10)})};let Qa=null;function Md(E){Qa&&Qa(E)}function Gh(){_n.stop()}function Vh(){_n.start()}let _n=new Ou;_n.setAnimationLoop(Md),typeof self<"u"&&_n.setContext(self),this.setAnimationLoop=function(E){Qa=E,nt.setAnimationLoop(E),E===null?_n.stop():_n.start()},nt.addEventListener("sessionstart",Gh),nt.addEventListener("sessionend",Vh),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){Dt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;k!==null&&k.renderStart(E,N);let G=nt.enabled===!0&&nt.isPresenting===!0,U=C!==null&&(Q===null||G)&&C.begin(R,Q);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),nt.enabled===!0&&nt.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(nt.cameraAutoUpdate===!0&&nt.updateCamera(N),N=nt.getCamera()),E.isScene===!0&&E.onBeforeRender(R,E,N,Q),S=Y.get(E,b.length),S.init(N),S.state.textureUnits=kt.getTextureUnits(),b.push(S),pe.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),N.isArrayCamera?Fe.setFromArrayCamera(N):Xt.setFromProjectionMatrix(pe,di,N.reversedDepth),Je=this.localClippingEnabled,Te=$.init(this.clippingPlanes,Je),T=ct.get(E,y.length),T.init(),y.push(T),this.info.render.frame++,nt.enabled===!0&&nt.isPresenting===!0){let _t=R.xr.getDepthSensingMesh();_t!==null&&tl(_t,N,-1/0,R.sortObjects)}tl(E,N,0,R.sortObjects),T.finish(),k!==null&&k.updateLights(S.state.lightsArray),R.sortObjects===!0&&T.sort(zt,ve),li=nt.enabled===!1||nt.isPresenting===!1||nt.hasDepthSensing()===!1,li&&I.addToRenderList(T,E),this.info.autoReset===!0&&this.info.reset(),Te===!0&&$.beginShadows();let z=S.state.shadowsArray;if(at.render(z,E,N),Te===!0&&$.endShadows(),(U&&C.hasRenderPass())===!1){let _t=T.opaque,ht=T.transmissive;if(S.setupLights(),N.isArrayCamera){let xt=N.cameras;if(ht.length>0)for(let Tt=0,Ot=xt.length;Tt<Ot;Tt++){let qt=xt[Tt];Xh(_t,ht,E,qt)}li&&I.render(E);for(let Tt=0,Ot=xt.length;Tt<Ot;Tt++){let qt=xt[Tt];Wh(T,E,qt,qt.viewport)}}else ht.length>0&&Xh(_t,ht,E,N),li&&I.render(E),Wh(T,E,N)}Q!==null&&H===0&&(kt.updateMultisampleRenderTarget(Q),kt.updateRenderTargetMipmap(Q)),U&&C.end(R),E.isScene===!0&&E.onAfterRender(R,E,N),ot.resetDefaultState(),X=-1,j=null,b.pop(),b.length>0?(S=b[b.length-1],kt.setTextureUnits(S.state.textureUnits),Te===!0&&$.setGlobalState(R.clippingPlanes,S.state.camera)):S=null,y.pop(),y.length>0?T=y[y.length-1]:T=null,k!==null&&k.renderEnd()};function tl(E,N,G,U){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)G=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)S.pushLight(E),E.castShadow&&S.pushShadow(E);else if(E.isSprite){let _t=N.isArrayCamera?Fe:Xt;if(!E.frustumCulled||E.intersectsFrustum(_t)){U&&Pe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(pe);let ht=it.update(E),xt=E.material;xt.visible&&T.push(E,ht,xt,G,Pe.z,null,N)}}else if(E.isMesh||E.isLine||E.isPoints){let _t=N.isArrayCamera?Fe:Xt;if(!E.frustumCulled||E.intersectsFrustum(_t)){let ht=it.update(E),xt=E.material;if(U&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Pe.copy(E.boundingSphere.center)):(ht.boundingSphere===null&&ht.computeBoundingSphere(),Pe.copy(ht.boundingSphere.center)),Pe.applyMatrix4(E.matrixWorld).applyMatrix4(pe)),Array.isArray(xt)){let Tt=ht.groups;for(let Ot=0,qt=Tt.length;Ot<qt;Ot++){let Mt=Tt[Ot],Yt=xt[Mt.materialIndex];Yt&&Yt.visible&&T.push(E,ht,Yt,G,Pe.z,Mt,N)}}else xt.visible&&T.push(E,ht,xt,G,Pe.z,null,N)}}}let ut=E.children;for(let _t=0,ht=ut.length;_t<ht;_t++)tl(ut[_t],N,G,U)}function Wh(E,N,G,U){let{opaque:z,transmissive:ut,transparent:_t}=E;S.setupLightsView(G),Te===!0&&$.setGlobalState(R.clippingPlanes,G),U&&dt.viewport(et.copy(U)),z.length>0&&br(z,N,G),ut.length>0&&br(ut,N,G),_t.length>0&&br(_t,N,G),dt.buffers.depth.setTest(!0),dt.buffers.depth.setMask(!0),dt.buffers.color.setMask(!0),dt.setPolygonOffset(!1)}function Xh(E,N,G,U){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[U.id]===void 0){let Mt=ue.has("EXT_color_buffer_half_float")||ue.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[U.id]=new Xe(1,1,{generateMipmaps:!0,type:Mt?ri:qe,minFilter:Ji,samples:Math.max(4,de.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:$t.workingColorSpace})}let ut=S.state.transmissionRenderTarget[U.id],_t=U.viewport||et;ut.setSize(_t.z*R.transmissionResolutionScale,_t.w*R.transmissionResolutionScale);let ht=R.getRenderTarget(),xt=R.getActiveCubeFace(),Tt=R.getActiveMipmapLevel();R.setRenderTarget(ut),R.getClearColor(K),mt=R.getClearAlpha(),mt<1&&R.setClearColor(16777215,.5),R.clear(),li&&I.render(G);let Ot=R.toneMapping;R.toneMapping=fi;let qt=U.viewport;if(U.viewport!==void 0&&(U.viewport=void 0),S.setupLightsView(U),Te===!0&&$.setGlobalState(R.clippingPlanes,U),br(E,G,U),kt.updateMultisampleRenderTarget(ut),kt.updateRenderTargetMipmap(ut),ue.has("WEBGL_multisampled_render_to_texture")===!1){let Mt=!1;for(let Yt=0,Me=N.length;Yt<Me;Yt++){let le=N[Yt],{object:ae,geometry:Be,material:bt,group:$e}=le;if(bt.side===ti&&ae.layers.test(U.layers)){let ee=bt.side;bt.side=Oe,bt.needsUpdate=!0,qh(ae,G,U,Be,bt,$e),bt.side=ee,bt.needsUpdate=!0,Mt=!0}}Mt===!0&&(kt.updateMultisampleRenderTarget(ut),kt.updateRenderTargetMipmap(ut))}R.setRenderTarget(ht,xt,Tt),R.setClearColor(K,mt),qt!==void 0&&(U.viewport=qt),R.toneMapping=Ot}function br(E,N,G){let U=N.isScene===!0?N.overrideMaterial:null;for(let z=0,ut=E.length;z<ut;z++){let _t=E[z],{object:ht,geometry:xt,group:Tt}=_t,Ot=_t.material;Ot.allowOverride===!0&&U!==null&&(Ot=U),ht.layers.test(G.layers)&&qh(ht,N,G,xt,Ot,Tt)}}function qh(E,N,G,U,z,ut){k!==null&&z.isNodeMaterial&&k.setObject(E,z),E.onBeforeRender(R,N,G,U,z,ut),E.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),z.onBeforeRender(R,N,G,U,E,ut),z.transparent===!0&&z.side===ti&&z.forceSinglePass===!1?(z.side=Oe,z.needsUpdate=!0,R.renderBufferDirect(G,N,U,z,E,ut),z.side=gn,z.needsUpdate=!0,R.renderBufferDirect(G,N,U,z,E,ut),z.side=ti):R.renderBufferDirect(G,N,U,z,E,ut),E.onAfterRender(R,N,G,U,z,ut)}function Yh(E){let N=0;for(let G of E)G.texture!==null&&N++;return N}function vs(E,N,G){N.isScene!==!0&&(N=ai);let U=Ct.get(E),z=S.state.lights,ut=S.state.shadowsArray,_t=z.state.version,ht=J.getParameters(E,z.state,ut,N,G,S.state.lightProbeGridArray),xt=J.getProgramCacheKey(ht),Tt=U.programs;U.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?N.environment:null,U.fog=N.fog;let Ot=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;U.envMap=A.get(E.envMap||U.environment,Ot),U.envMapRotation=U.environment!==null&&E.envMap===null?N.environmentRotation:E.envMapRotation,Tt===void 0&&(E.addEventListener("dispose",re),Tt=new Map,U.programs=Tt,U.programVariants=new Map);let qt=Tt.get(xt);if(qt!==void 0){if(U.currentProgram===qt&&U.lightsStateVersion===_t)return Kh(E,ht),qt}else ht.uniforms=J.getUniforms(E),k!==null&&E.isNodeMaterial&&k.build(E,G,ht),E.onBeforeCompile(ht,R),qt=J.acquireProgram(ht,xt),Tt.set(xt,qt),U.uniforms=ht.uniforms;let Mt=U.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Mt.clippingPlanes=$.uniform),Kh(E,ht),U.needsLights=Td(E),U.lightsStateVersion=_t,U.needsLights&&(Mt.ambientLightColor.value=z.state.ambient,Mt.lightProbe.value=z.state.probe,Mt.sunLights.value=z.state.sun,Mt.sunLightShadows.value=z.state.sunShadow,Mt.directionalLights.value=z.state.directional,Mt.directionalLightShadows.value=z.state.directionalShadow,Mt.spotLights.value=z.state.spot,Mt.spotLightShadows.value=z.state.spotShadow,Mt.rectAreaLights.value=z.state.rectArea,Mt.ltc_1.value=z.state.rectAreaLTC1,Mt.ltc_2.value=z.state.rectAreaLTC2,Mt.pointLights.value=z.state.point,Mt.pointLightShadows.value=z.state.pointShadow,Mt.hemisphereLights.value=z.state.hemi,Mt.sunShadowMatrix.value=z.state.sunShadowMatrix,Mt.sunShadowCascade.value=z.state.sunShadowCascade,Mt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Mt.spotLightMatrix.value=z.state.spotLightMatrix,Mt.spotLightMap.value=z.state.spotLightMap,Mt.pointShadowMatrix.value=z.state.pointShadowMatrix),U.numLightProbeGrids=Yh(S.state.lightProbeGridArray),U.currentProgram=qt,U.uniformsList=null,qt}function bd(E,N,G,U,z){let ut=Ct.get(E),_t=ut.currentProgram.id+","+U+","+z,ht=ut.programVariants.get(_t);return ht===void 0?(ht=vs(E,N,G),ut.programVariants.set(_t,ht)):(ut.currentProgram=ht,ut.uniformsList=null,ut.outputColorSpace=U,ut.toneMapping=z),ht}function $h(E){if(E.uniformsList===null){let N=E.currentProgram.getUniforms();E.uniformsList=ds.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function Kh(E,N){let G=Ct.get(E);G.outputColorSpace=N.outputColorSpace,G.batching=N.batching,G.batchingColor=N.batchingColor,G.instancing=N.instancing,G.instancingColor=N.instancingColor,G.instancingMorph=N.instancingMorph,G.skinning=N.skinning,G.morphTargets=N.morphTargets,G.morphNormals=N.morphNormals,G.morphColors=N.morphColors,G.morphTargetsCount=N.morphTargetsCount,G.numClippingPlanes=N.numClippingPlanes,G.numIntersection=N.numClipIntersection,G.vertexAlphas=N.vertexAlphas,G.vertexTangents=N.vertexTangents,G.toneMapping=N.toneMapping}function Sd(E,N,G,U,z){N.isScene!==!0&&(N=ai),kt.resetTextureUnits();let ut=N.fog,_t=U.isMeshStandardMaterial||U.isMeshLambertMaterial||U.isMeshPhongMaterial?N.environment:null,ht=Q===null?R.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:$t.workingColorSpace,xt=U.isMeshStandardMaterial||U.isMeshLambertMaterial&&!U.envMap||U.isMeshPhongMaterial&&!U.envMap,Tt=A.get(U.envMap||_t,xt),Ot=U.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,qt=!!G.attributes.tangent&&(!!U.normalMap||U.anisotropy>0),Mt=!!G.morphAttributes.position,Yt=!!G.morphAttributes.normal,Me=!!G.morphAttributes.color,le=fi;U.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(le=R.toneMapping);let ae=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Be=ae!==void 0?ae.length:0,bt=Ct.get(U),$e=S.state.lights;if(Te===!0&&(Je===!0||E!==j)){let me=E===j&&U.id===X;$.setState(U,E,me)}let ee=!1,vn=!1;U.version===bt.__version?bt.needsLights&&bt.lightsStateVersion!==$e.state.version||z.isBatchedMesh&&bt.batching===!1||!z.isBatchedMesh&&bt.batching===!0||z.isBatchedMesh&&bt.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&bt.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&bt.instancing===!1||!z.isInstancedMesh&&bt.instancing===!0||z.isSkinnedMesh&&bt.skinning===!1||!z.isSkinnedMesh&&bt.skinning===!0||z.isInstancedMesh&&bt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&bt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&bt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&bt.instancingMorph===!1&&z.morphTexture!==null||bt.envMap!==Tt||U.fog===!0&&bt.fog!==ut||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==$.numPlanes||bt.numIntersection!==$.numIntersection)||bt.vertexAlphas!==Ot||bt.vertexTangents!==qt||bt.morphTargets!==Mt||bt.morphNormals!==Yt||bt.morphColors!==Me||bt.morphTargetsCount!==Be||bt.numLightProbeGrids!==Yh(S.state.lightProbeGridArray)?ee=!0:(bt.outputColorSpace!==ht||bt.toneMapping!==le)&&(vn=!0):(ee=!0,bt.__version=U.version);let He=bt.currentProgram;(ee===!0||vn===!0)&&(He=vn===!0?bd(U,N,z,ht,le):vs(U,N,z),k&&U.isNodeMaterial&&k.onUpdateProgram(U,He,bt));let Sr=!1,nn=!1,Mn=!1,Jt=He.getUniforms(),ke=bt.uniforms;if(dt.useProgram(He.program)&&(Sr=!0,nn=!0,Mn=!0),U.id!==X&&(X=U.id,nn=!0),Sr||j!==E){dt.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Jt.setValue(F,"projectionMatrix",E.projectionMatrix),Jt.setValue(F,"viewMatrix",E.matrixWorldInverse);let Le=Jt.map.cameraPosition;Le!==void 0&&Le.setValue(F,Ti.setFromMatrixPosition(E.matrixWorld)),de.logarithmicDepthBuffer&&Jt.setValue(F,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&Jt.setValue(F,"isOrthographic",E.isOrthographicCamera===!0),j!==E&&(j=E,nn=!0,Mn=!0)}if(bt.needsLights&&($e.state.sunShadowMap.length>0&&Jt.setValue(F,"sunShadowMap",$e.state.sunShadowMap,kt),$e.state.directionalShadowMap.length>0&&Jt.setValue(F,"directionalShadowMap",$e.state.directionalShadowMap,kt),$e.state.spotShadowMap.length>0&&Jt.setValue(F,"spotShadowMap",$e.state.spotShadowMap,kt),$e.state.pointShadowMap.length>0&&Jt.setValue(F,"pointShadowMap",$e.state.pointShadowMap,kt)),z.isSkinnedMesh){Jt.setOptional(F,z,"bindMatrix"),Jt.setOptional(F,z,"bindMatrixInverse");let me=z.skeleton;me&&(me.boneTexture===null&&me.computeBoneTexture(),Jt.setValue(F,"boneTexture",me.boneTexture,kt))}z.isBatchedMesh&&(Jt.setOptional(F,z,"batchingTexture"),Jt.setValue(F,"batchingTexture",z._matricesTexture,kt),Jt.setOptional(F,z,"batchingIdTexture"),Jt.setValue(F,"batchingIdTexture",z._indirectTexture,kt),Jt.setOptional(F,z,"batchingColorTexture"),z._colorsTexture!==null&&Jt.setValue(F,"batchingColorTexture",z._colorsTexture,kt));let xi=G.morphAttributes;if((xi.position!==void 0||xi.normal!==void 0||xi.color!==void 0)&&Z.update(z,G,He),(nn||bt.receiveShadow!==z.receiveShadow)&&(bt.receiveShadow=z.receiveShadow,Jt.setValue(F,"receiveShadow",z.receiveShadow)),(U.isMeshStandardMaterial||U.isMeshLambertMaterial||U.isMeshPhongMaterial)&&U.envMap===null&&N.environment!==null&&(ke.envMapIntensity.value=N.environmentIntensity),ke.dfgLUT!==void 0&&(ke.dfgLUT.value=Zg()),nn){if(Jt.setValue(F,"toneMappingExposure",R.toneMappingExposure),bt.needsLights&&wd(ke,Mn),ut&&U.fog===!0&&rt.refreshFogUniforms(ke,ut),rt.refreshMaterialUniforms(ke,U,gt,Rt,S.state.transmissionRenderTarget[E.id]),bt.needsLights&&bt.numLightProbeGrids>0){let me=v,Le=0;for(let Bi of S.state.lightProbeGridArray)Bi.texture!==null&&(me.textures[Le]=Bi.texture,me.min[Le]=Bi.boundingBox.min,me.max[Le]=Bi.boundingBox.max,me.resolution[Le]=Bi.resolution,Le++);for(let Bi in me)me[Bi].length=Le;ke.probesSH.value=me.textures,ke.probesMin.value=me.min,ke.probesMax.value=me.max,ke.probesResolution.value=me.resolution}ds.upload(F,$h(bt),ke,kt)}if(U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(ds.upload(F,$h(bt),ke,kt),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&Jt.setValue(F,"center",z.center),Jt.setValue(F,"modelViewMatrix",z.modelViewMatrix),Jt.setValue(F,"normalMatrix",z.normalMatrix),Jt.setValue(F,"modelMatrix",z.matrixWorld),U.uniformsGroups!==void 0){let me=U.uniformsGroups;for(let Le=0,Bi=me.length;Le<Bi;Le++){let Jh=me[Le];Et.update(Jh,He),Et.bind(Jh,He)}}return He}function wd(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.sunLights.needsUpdate=N,E.sunLightShadows.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function Td(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(E,N,G){let U=Ct.get(E);U.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,U.__autoAllocateDepthBuffer===!1&&(U.__useRenderToTexture=!1),Ct.get(E.texture).__webglTexture=N,Ct.get(E.depthTexture).__webglTexture=U.__autoAllocateDepthBuffer?void 0:G,U.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,N){let G=Ct.get(E);G.__webglFramebuffer=N,G.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(E,N=0,G=0){Q=E,W=N,H=G;let U=null,z=!1,ut=!1;if(E){let ht=Ct.get(E);if(ht.__useDefaultFramebuffer!==void 0){dt.bindFramebuffer(F.FRAMEBUFFER,ht.__webglFramebuffer),et.copy(E.viewport),wt.copy(E.scissor),Ut=E.scissorTest,dt.viewport(et),dt.scissor(wt),dt.setScissorTest(Ut),X=-1;return}else if(ht.__webglFramebuffer===void 0)kt.setupRenderTarget(E);else if(ht.__hasExternalTextures)kt.rebindTextures(E,Ct.get(E.texture).__webglTexture,Ct.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Ot=E.depthTexture;if(ht.__boundDepthTexture!==Ot){if(Ot!==null&&Ct.has(Ot)&&(E.width!==Ot.image.width||E.height!==Ot.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");kt.setupDepthRenderbuffer(E)}}let xt=E.texture;(xt.isData3DTexture||xt.isDataArrayTexture||xt.isCompressedArrayTexture)&&(ut=!0);let Tt=Ct.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Tt[N])?U=Tt[N][G]:U=Tt[N],z=!0):E.samples>0&&kt.useMultisampledRTT(E)===!1?U=Ct.get(E).__webglMultisampledFramebuffer:Array.isArray(Tt)?U=Tt[G]:U=Tt,et.copy(E.viewport),wt.copy(E.scissor),Ut=E.scissorTest}else et.copy(Lt).multiplyScalar(gt).floor(),wt.copy(se).multiplyScalar(gt).floor(),Ut=oe;if(G!==0&&(U=B),dt.bindFramebuffer(F.FRAMEBUFFER,U)&&dt.drawBuffers(E,U),dt.viewport(et),dt.scissor(wt),dt.setScissorTest(Ut),z){let ht=Ct.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+N,ht.__webglTexture,G)}else if(ut){let ht=N;for(let xt=0;xt<E.textures.length;xt++){let Tt=Ct.get(E.textures[xt]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+xt,Tt.__webglTexture,G,ht)}}else if(E!==null&&G!==0){let ht=Ct.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ht.__webglTexture,G)}X=-1};function Zh(E){let N=Ct.get(E);return(N.__readFormat!==E.format||N.__readType!==E.type)&&(N.__readFormat=E.format,N.__readType=E.type,N.__formatReadable=de.textureFormatReadable(E.format),N.__typeReadable=de.textureTypeReadable(E.type)),N}this.readRenderTargetPixels=function(E,N,G,U,z,ut,_t,ht=0){if(!(E&&E.isWebGLRenderTarget)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xt=Ct.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&_t!==void 0&&(xt=xt[_t],Array.isArray(xt)&&(xt=xt[0])),xt){dt.bindFramebuffer(F.FRAMEBUFFER,xt);try{let Tt=E.textures[ht],Ot=Tt.format,qt=Tt.type;E.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ht);let Mt=Zh(Tt);if(Mt.__formatReadable===!1){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Mt.__typeReadable===!1){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-U&&G>=0&&G<=E.height-z&&F.readPixels(N,G,U,z,st.convert(Ot),st.convert(qt),ut)}finally{let Tt=Q!==null?Ct.get(Q).__webglFramebuffer:null;dt.bindFramebuffer(F.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=async function(E,N,G,U,z,ut,_t,ht=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xt=Ct.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&_t!==void 0&&(xt=xt[_t],Array.isArray(xt)&&(xt=xt[0])),xt)if(N>=0&&N<=E.width-U&&G>=0&&G<=E.height-z){dt.bindFramebuffer(F.FRAMEBUFFER,xt);let Tt=E.textures[ht],Ot=Tt.format,qt=Tt.type;E.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ht);let Mt=Zh(Tt);if(Mt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Mt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Yt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Yt),F.bufferData(F.PIXEL_PACK_BUFFER,ut.byteLength,F.STREAM_READ),F.readPixels(N,G,U,z,st.convert(Ot),st.convert(qt),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let Me=Q!==null?Ct.get(Q).__webglFramebuffer:null;dt.bindFramebuffer(F.FRAMEBUFFER,Me);let le=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await cu(F,le,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Yt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ut),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(Yt),F.deleteSync(le),ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,N=null,G=0){let U=Math.pow(2,-G),z=Math.floor(E.image.width*U),ut=Math.floor(E.image.height*U),_t=N!==null?N.x:0,ht=N!==null?N.y:0;kt.setTexture2D(E,0),F.copyTexSubImage2D(F.TEXTURE_2D,G,0,0,_t,ht,z,ut),dt.unbindTexture()},this.copyTextureToTexture=function(E,N,G=null,U=null,z=0,ut=0){let _t,ht,xt,Tt,Ot,qt,Mt,Yt,Me,le=E.isCompressedTexture?E.mipmaps[ut]:E.image;if(G!==null)_t=G.max.x-G.min.x,ht=G.max.y-G.min.y,xt=G.isBox3?G.max.z-G.min.z:1,Tt=G.min.x,Ot=G.min.y,qt=G.isBox3?G.min.z:0;else{let Jt=Math.pow(2,-z);_t=Math.floor(le.width*Jt),ht=Math.floor(le.height*Jt),E.isDataArrayTexture?xt=le.depth:E.isData3DTexture?xt=Math.floor(le.depth*Jt):xt=1,Tt=0,Ot=0,qt=0}U!==null?(Mt=U.x,Yt=U.y,Me=U.z):(Mt=0,Yt=0,Me=0);let ae=st.convert(N.format),Be=st.convert(N.type),bt;N.isData3DTexture?(kt.setTexture3D(N,0),bt=F.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(kt.setTexture2DArray(N,0),bt=F.TEXTURE_2D_ARRAY):(kt.setTexture2D(N,0),bt=F.TEXTURE_2D),dt.activeTexture(F.TEXTURE0),dt.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,N.flipY),dt.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),dt.pixelStorei(F.UNPACK_ALIGNMENT,N.unpackAlignment);let $e=dt.getParameter(F.UNPACK_ROW_LENGTH),ee=dt.getParameter(F.UNPACK_IMAGE_HEIGHT),vn=dt.getParameter(F.UNPACK_SKIP_PIXELS),He=dt.getParameter(F.UNPACK_SKIP_ROWS),Sr=dt.getParameter(F.UNPACK_SKIP_IMAGES);dt.pixelStorei(F.UNPACK_ROW_LENGTH,le.width),dt.pixelStorei(F.UNPACK_IMAGE_HEIGHT,le.height),dt.pixelStorei(F.UNPACK_SKIP_PIXELS,Tt),dt.pixelStorei(F.UNPACK_SKIP_ROWS,Ot),dt.pixelStorei(F.UNPACK_SKIP_IMAGES,qt);let nn=E.isDataArrayTexture||E.isData3DTexture,Mn=N.isDataArrayTexture||N.isData3DTexture;if(E.isDepthTexture){let Jt=Ct.get(E),ke=Ct.get(N),xi=Ct.get(Jt.__renderTarget),me=Ct.get(ke.__renderTarget);dt.bindFramebuffer(F.READ_FRAMEBUFFER,xi.__webglFramebuffer),dt.bindFramebuffer(F.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let Le=0;Le<xt;Le++)nn&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ct.get(E).__webglTexture,z,qt+Le),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ct.get(N).__webglTexture,ut,Me+Le)),F.blitFramebuffer(Tt,Ot,Tt+_t,Ot+ht,Mt,Yt,Mt+_t,Yt+ht,F.DEPTH_BUFFER_BIT,F.NEAREST);dt.bindFramebuffer(F.READ_FRAMEBUFFER,null),dt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(z!==0||E.isRenderTargetTexture||Ct.has(E)){let Jt=Ct.get(E),ke=Ct.get(N);dt.bindFramebuffer(F.READ_FRAMEBUFFER,L),dt.bindFramebuffer(F.DRAW_FRAMEBUFFER,V);for(let xi=0;xi<xt;xi++)nn?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Jt.__webglTexture,z,qt+xi):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Jt.__webglTexture,z),Mn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ke.__webglTexture,ut,Me+xi):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ke.__webglTexture,ut),z!==0?F.blitFramebuffer(Tt,Ot,Tt+_t,Ot+ht,Mt,Yt,Mt+_t,Yt+ht,F.COLOR_BUFFER_BIT,F.NEAREST):Mn?F.copyTexSubImage3D(bt,ut,Mt,Yt,Me+xi,Tt,Ot,_t,ht):F.copyTexSubImage2D(bt,ut,Mt,Yt,Tt,Ot,_t,ht);dt.bindFramebuffer(F.READ_FRAMEBUFFER,null),dt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Mn?E.isDataTexture||E.isData3DTexture?F.texSubImage3D(bt,ut,Mt,Yt,Me,_t,ht,xt,ae,Be,le.data):N.isCompressedArrayTexture?F.compressedTexSubImage3D(bt,ut,Mt,Yt,Me,_t,ht,xt,ae,le.data):F.texSubImage3D(bt,ut,Mt,Yt,Me,_t,ht,xt,ae,Be,le):E.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,ut,Mt,Yt,_t,ht,ae,Be,le.data):E.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,ut,Mt,Yt,le.width,le.height,ae,le.data):F.texSubImage2D(F.TEXTURE_2D,ut,Mt,Yt,_t,ht,ae,Be,le);dt.pixelStorei(F.UNPACK_ROW_LENGTH,$e),dt.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ee),dt.pixelStorei(F.UNPACK_SKIP_PIXELS,vn),dt.pixelStorei(F.UNPACK_SKIP_ROWS,He),dt.pixelStorei(F.UNPACK_SKIP_IMAGES,Sr),ut===0&&N.generateMipmaps===!0&&N.mipmapsAutoUpdate===!0&&F.generateMipmap(bt),dt.unbindTexture()},this.initRenderTarget=function(E){Ct.get(E).__webglFramebuffer===void 0&&kt.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?kt.setTextureCube(E,0):E.isData3DTexture?kt.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?kt.setTexture2DArray(E,0):kt.setTexture2D(E,0),dt.unbindTexture()},this.resetState=function(){W=0,H=0,Q=null,dt.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=$t._getDrawingBufferColorSpace(t),e.unpackColorSpace=$t._getUnpackColorSpace()}};var yn=null;function Ku(){if(yn)return yn;let r=new Uint8Array([0,0,0,255,0,0,0,255,150,150,150,255,255,255,255,255]);return yn=new An(r,4,1,oi),yn.minFilter=yn.magFilter=ye,yn.generateMipmaps=!1,yn.needsUpdate=!0,yn}function Zu(){let r=new dn({vertexColors:!0,gradientMap:Ku()});return r.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
attribute vec4 aFx;
varying vec4 vFx;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFx = aFx;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
varying vec4 vFx;`).replace("#include <color_fragment>",`#include <color_fragment>
        float fxGlow = vFx.x;
        if (vFx.z > 0.5 && vFx.z < 1.5) {
          // roof tiles: ribs running down the slope + faint courses
          float w = fwidth(vFx.w) / 0.62;
          float f = abs(fract(vFx.w / 0.62) - 0.5) * 2.0;
          float rib = smoothstep(0.62 - w, 0.62 + w, f);
          float fade = 1.0 - smoothstep(0.25, 0.9, w);
          float w2 = fwidth(vFx.y) / 0.9;
          float c = abs(fract(vFx.y / 0.9) - 0.5) * 2.0;
          float course = smoothstep(0.9 - w2, 0.9 + w2, c) * (1.0 - smoothstep(0.1, 0.4, w2));
          diffuseColor.rgb *= 1.0 - 0.2 * rib * fade - 0.1 * course;
          diffuseColor.rgb *= 1.0 + 0.07 * (1.0 - rib) * fade;
        } else if (vFx.z > 1.5 && vFx.z < 2.5) {
          // shoji paper window: dark wooden grid, glowing panes
          vec2 g = abs(fract(vFx.wy / vec2(0.46, 0.52)) - 0.5) * 2.0;
          vec2 fw = fwidth(vFx.wy) / vec2(0.46, 0.52);
          float line = max(smoothstep(0.84 - fw.x, 0.84 + fw.x, g.x), smoothstep(0.86 - fw.y, 0.86 + fw.y, g.y));
          line *= 1.0 - smoothstep(0.3, 0.9, max(fw.x, fw.y));
          diffuseColor.rgb *= 1.0 - 0.8 * line;
          fxGlow *= 1.0 - 0.9 * line;
        } else if (vFx.z > 3.5) {
          // koshi lattice: dense dark slats over a lit interior
          float w = fwidth(vFx.w) / 0.17;
          float f = abs(fract(vFx.w / 0.17) - 0.5) * 2.0;
          float slat = smoothstep(0.42 - w, 0.42 + w, f);
          slat = mix(slat, 0.55, smoothstep(0.3, 0.9, w));
          float rail = step(0.92, abs(fract(vFx.y / 1.1) - 0.5) * 2.0);
          slat = max(slat, rail);
          diffuseColor.rgb *= 1.0 - 0.82 * slat;
          fxGlow *= 1.0 - 0.95 * slat;
        } else if (vFx.z > 2.5) {
          // vertical wood planks
          float w = fwidth(vFx.w) / 0.3;
          float f = abs(fract(vFx.w / 0.3) - 0.5) * 2.0;
          float line = smoothstep(0.8 - w, 0.8 + w, f) * (1.0 - smoothstep(0.3, 0.9, w));
          diffuseColor.rgb *= 1.0 - 0.28 * line;
        }`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += diffuseColor.rgb * fxGlow;`)},r}function wh(r={}){return new dn({vertexColors:r.vertexColors??!0,gradientMap:Ku(),...r})}function Ju(){let r=new Ze({side:Oe,depthWrite:!1,depthTest:!1,uniforms:{uTop:{value:new yt},uMid:{value:new yt},uHor:{value:new yt},uSunCol:{value:new yt},uCloudA:{value:new yt},uCloudB:{value:new yt},uSunDir:{value:new D(0,.3,-1)},uSunSize:{value:.9994},uStars:{value:0},uFire:{value:0},uTime:{value:0}},vertexShader:`
      varying vec3 vDir;
      void main(){
        vDir = position;
        vec4 p = modelViewMatrix * vec4(position, 0.0);
        gl_Position = projectionMatrix * vec4(p.xyz, 1.0);
        gl_Position.z = gl_Position.w;
      }`,fragmentShader:`
      precision highp float;
      varying vec3 vDir;
      uniform vec3 uTop, uMid, uHor, uSunCol, uCloudA, uCloudB, uSunDir;
      uniform float uSunSize, uStars, uTime, uFire;
      float hash(vec2 p){ p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
      float noise(vec2 p){
        vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
        return mix(mix(hash(i), hash(i+vec2(1,0)), f.x), mix(hash(i+vec2(0,1)), hash(i+vec2(1,1)), f.x), f.y);
      }
      float fbm(vec2 p){ float a = 0.5, s = 0.0; for(int i=0;i<4;i++){ s += a*noise(p); p = p*2.03 + 11.7; a *= 0.5; } return s; }
      void main(){
        vec3 d = normalize(vDir);
        float h = d.y;
        vec3 col = mix(uHor, uMid, smoothstep(0.0, 0.22, h));
        col = mix(col, uTop, smoothstep(0.16, 0.7, h));
        col = mix(col, uHor * 0.92, smoothstep(0.0, -0.25, h));
        float sd = dot(d, normalize(uSunDir));
        // warm wash around the sun, in soft bands
        col += uSunCol * (pow(max(sd, 0.0), 6.0) * 0.22 + pow(max(sd, 0.0), 40.0) * 0.3);
        // stars
        if (uStars > 0.0 && h > 0.02) {
          vec2 sp = d.xz / (h + 0.35) * 90.0;
          vec2 ip = floor(sp);
          float r = hash(ip);
          float tw = 0.6 + 0.4 * sin(uTime * 2.0 + r * 40.0);
          float st = step(0.985, r) * smoothstep(0.35, 0.0, length(fract(sp) - 0.5)) * tw;
          col += vec3(0.9, 0.92, 1.0) * st * uStars * smoothstep(0.02, 0.3, h);
        }
        // stylised streak clouds: hard edged, two tones
        if (h > 0.0) {
          vec2 cp = d.xz / (h + 0.14);
          cp = cp * vec2(0.55, 1.7) + vec2(uTime * 0.006, 0.0);
          float n = fbm(cp);
          float n2 = fbm(cp + normalize(uSunDir).xz * 0.12 + vec2(0.0, 0.05));
          float m = smoothstep(0.56, 0.575, n) * smoothstep(0.02, 0.14, h) * (1.0 - smoothstep(0.55, 0.9, h));
          vec3 cc = mix(uCloudB, uCloudA, smoothstep(0.52, 0.56, n2));
          col = mix(col, cc, m * 0.92);
        }
        // festival fireworks: radial bursts low over the city (HDR, so they bloom)
        if (uFire > 0.0 && h > 0.05) {
          float az = atan(d.x, -d.z), el = asin(clamp(d.y, -1.0, 1.0));
          for (int i = 0; i < 3; i++) {
            float fi = float(i);
            float tt = uTime * 0.31 + fi * 0.37;
            float id = floor(tt), a = fract(tt);
            vec2 c = vec2(hash(vec2(id, fi + 1.0)) * 2.2 - 1.1, 0.2 + hash(vec2(fi + 5.0, id)) * 0.26);
            vec2 q = vec2((az - c.x) * cos(el), el - c.y);
            float r = length(q), R = 0.2 * (1.0 - exp(-a * 5.0));
            float spoke = smoothstep(0.55, 1.0, cos(atan(q.y, q.x) * 14.0 + fi * 1.7));
            float band = smoothstep(R * 1.04, R * 0.9, r) * smoothstep(R * 0.25, R * 0.9, r);
            vec3 fc = mix(vec3(1.0, 0.45, 0.3), vec3(1.0, 0.85, 0.4), hash(vec2(id, fi + 3.0)));
            fc = mix(fc, vec3(0.55, 1.0, 0.85), step(0.7, hash(vec2(id + 7.0, fi))));
            col += fc * (spoke * band + smoothstep(0.02, 0.0, r) * 0.6) * (1.0 - a) * (1.0 - a) * 3.5 * uFire;
          }
        }
        // sun / moon disc (HDR so it blooms)
        float disc = smoothstep(uSunSize, uSunSize + 0.00012, sd);
        col = mix(col, uSunCol * 3.2, disc);
        gl_FragColor = vec4(col, 1.0);
      }`}),t=new Nt(new $s(1,24,12),r);return t.frustumCulled=!1,t.renderOrder=-1e3,t}var Jg="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }";function Sa(r,t){return new Ze({vertexShader:Jg,fragmentShader:r,uniforms:t,depthTest:!1,depthWrite:!1})}var jg=`
  precision highp float; varying vec2 vUv; uniform sampler2D tColor; uniform vec2 uTexel; uniform float uThresh;
  vec3 pick(vec2 uv){ vec3 c = min(texture2D(tColor, uv).rgb, vec3(12.0)); float m = max(c.r, max(c.g, c.b)); return c * smoothstep(uThresh, uThresh + 0.6, m); }
  void main(){
    vec3 c = pick(vUv + uTexel*vec2(-1.0,-1.0)) + pick(vUv + uTexel*vec2(1.0,-1.0)) + pick(vUv + uTexel*vec2(-1.0,1.0)) + pick(vUv + uTexel*vec2(1.0,1.0));
    gl_FragColor = vec4(c * 0.25, 1.0);
  }`,Qg=`
  precision highp float; varying vec2 vUv; uniform sampler2D tColor; uniform vec2 uDir;
  void main(){
    vec3 c = texture2D(tColor, vUv).rgb * 0.227;
    c += (texture2D(tColor, vUv + uDir*1.385).rgb + texture2D(tColor, vUv - uDir*1.385).rgb) * 0.316;
    c += (texture2D(tColor, vUv + uDir*3.231).rgb + texture2D(tColor, vUv - uDir*3.231).rgb) * 0.0703;
    gl_FragColor = vec4(c, 1.0);
  }`,tx="precision highp float; varying vec2 vUv; uniform sampler2D tColor; void main(){ gl_FragColor = vec4(texture2D(tColor, vUv).rgb, 1.0); }",ex=`
  precision highp float;
  varying vec2 vUv;
  uniform sampler2D tColor, tDepth, tBloomA, tBloomB;
  uniform vec2 uRes;
  uniform float uNear, uFar, uTanHalf, uAspect, uTime, uLine;
  uniform vec3 uFogColor, uInk, uTint;
  uniform float uFogDensity, uOutline, uBloom, uSpeed, uDanger, uHurt, uFade, uHidden, uSat, uFlash;
  float linZ(vec2 uv){ float d = texture2D(tDepth, uv).x; return uNear * uFar / (uFar - d * (uFar - uNear)); }
  vec3 vpos(vec2 uv){ float z = linZ(uv); return vec3((uv * 2.0 - 1.0) * vec2(uAspect * uTanHalf, uTanHalf) * z, -z); }
  float hash(float n){ return fract(sin(n) * 43758.5453); }
  void main(){
    vec3 col = texture2D(tColor, vUv).rgb;
    vec2 px = uLine / uRes;
    vec3 c = vpos(vUv);
    vec3 l = vpos(vUv - vec2(px.x, 0.0)), r = vpos(vUv + vec2(px.x, 0.0));
    vec3 u = vpos(vUv + vec2(0.0, px.y)), d = vpos(vUv - vec2(0.0, px.y));
    float z = -c.z;
    float zmin = min(z, min(min(-l.z, -r.z), min(-u.z, -d.z)));
    // distance fog (skipped on the sky dome)
    float sky = step(uFar * 0.98, z);
    float fog = (1.0 - exp(-pow(z * uFogDensity, 1.35))) * (1.0 - sky);
    col = mix(col, uFogColor, fog);
    // ink outline: how far do the neighbours sit off this pixel's surface plane?
    vec3 dx = abs(r.z - c.z) < abs(c.z - l.z) ? r - c : c - l;
    vec3 dy = abs(u.z - c.z) < abs(c.z - d.z) ? u - c : c - d;
    vec3 n = normalize(cross(dx, dy));
    float pd = max(max(abs(dot(n, l - c)), abs(dot(n, r - c))), max(abs(dot(n, u - c)), abs(dot(n, d - c))));
    float pix = 2.0 * uTanHalf / uRes.y * uLine;
    float e = pd / (zmin * pix);
    float edge = smoothstep(0.32, 0.6, e);
    float efade = 1.0 - smoothstep(70.0, 260.0, zmin);
    float fogNear = 1.0 - exp(-pow(zmin * uFogDensity, 1.35));
    col = mix(col, mix(uInk, uFogColor, fogNear * 0.85), edge * uOutline * (0.25 + 0.75 * efade));
    // bloom
    vec3 bl = texture2D(tBloomA, vUv).rgb * 0.6 + texture2D(tBloomB, vUv).rgb * 0.8;
    col += bl * uBloom;
    // grade: soft knee, tint, saturation
    col *= uTint;
    vec3 k = max(col - 0.82, 0.0);
    col = min(col, 0.82) + (1.0 - exp(-k * 2.2)) * 0.18 / 1.0;
    float lum = dot(col, vec3(0.299, 0.587, 0.114));
    col = mix(vec3(lum), col, uSat);
    // screen-space feedback
    vec2 q = vUv - 0.5;
    float rad = length(q * vec2(uAspect, 1.0)) / length(vec2(uAspect, 1.0) * 0.5);
    float vig = smoothstep(0.45, 1.05, rad);
    col *= 1.0 - vig * 0.32;
    col = mix(col, col * vec3(0.55, 0.6, 1.0), vig * uHidden * 0.6);
    col = mix(col, vec3(0.85, 0.06, 0.1), vig * uDanger * 0.55);
    col = mix(col, vec3(0.9, 0.05, 0.08), (0.25 + 0.75 * vig) * uHurt * 0.6);
    // anime speed lines
    if (uSpeed > 0.01) {
      float ang = atan(q.y, q.x * uAspect);
      float seg = floor(ang * 28.6);
      float tt = floor(uTime * 16.0);
      float hh = hash(seg * 13.1 + tt * 7.7);
      float f = abs(fract(ang * 28.6) - 0.5) * 2.0;
      float line = step(0.82, hh) * smoothstep(0.75, 0.2, f) * smoothstep(0.5 + hash(seg + tt) * 0.25, 1.0, rad);
      col += vec3(1.0, 0.97, 0.9) * line * uSpeed * 0.5;
    }
    col = mix(col, vec3(1.0, 0.96, 0.86), uFlash);
    col *= 1.0 - uFade;
    col = pow(max(col, 0.0), vec3(1.0 / 2.2));
    col += (hash(dot(gl_FragCoord.xy, vec2(12.9898, 78.233)) + uTime) - 0.5) / 255.0;
    gl_FragColor = vec4(col, 1.0);
  }`,wa=class{constructor(t){this.canvas=t;let e=this.renderer=new va({canvas:t,antialias:!1,powerPreference:"high-performance",stencil:!1,alpha:!1});e.toneMapping=fi,e.shadowMap.enabled=!0,e.shadowMap.type=Cn,e.autoClear=!0,e.setClearColor(0,1),this.hdr=e.capabilities.isWebGL2&&(e.extensions.has("EXT_color_buffer_float")||e.extensions.has("EXT_color_buffer_half_float")),this.quality=2,this.scale=1,this.w=2,this.h=2,this.fsScene=new En,this.fsCam=new Rn(-1,1,1,-1,0,1);let i=new ge;i.setAttribute("position",new Qt([-1,-1,0,3,-1,0,-1,3,0],3)),i.setAttribute("uv",new Qt([0,0,2,0,0,2],2)),this.fsMesh=new Nt(i,null),this.fsMesh.frustumCulled=!1,this.fsScene.add(this.fsMesh),this.mBright=Sa(jg,{tColor:{value:null},uTexel:{value:new Bt},uThresh:{value:this.hdr?1.05:.86}}),this.mBlur=Sa(Qg,{tColor:{value:null},uDir:{value:new Bt}}),this.mCopy=Sa(tx,{tColor:{value:null}}),this.fx={tColor:{value:null},tDepth:{value:null},tBloomA:{value:null},tBloomB:{value:null},uRes:{value:new Bt},uNear:{value:.1},uFar:{value:1e3},uTanHalf:{value:1},uAspect:{value:1},uTime:{value:0},uLine:{value:1},uFogColor:{value:new yt(13214671)},uInk:{value:new yt(2366013)},uTint:{value:new yt(1,1,1)},uFogDensity:{value:.004},uOutline:{value:.9},uBloom:{value:1},uSpeed:{value:0},uDanger:{value:0},uHurt:{value:0},uFade:{value:0},uHidden:{value:0},uSat:{value:1},uFlash:{value:0}},this.mFinal=Sa(ex,this.fx),this.rtScene=null,this._frameTimes=[],this.autoScale=!0}setQuality(t){this.quality=t,this.renderer.shadowMap.enabled=!0,this.resize(!0)}resize(t=!1){let e=Math.max(2,this.canvas.clientWidth|0),i=Math.max(2,this.canvas.clientHeight|0),n=[1,1.25,1.75][this.quality],s=Math.min(window.devicePixelRatio||1,n)*this.scale,o=Math.max(2,Math.round(e*s)),a=Math.max(2,Math.round(i*s));if(!t&&o===this.w&&a===this.h)return!1;this.w=o,this.h=a,this.renderer.setPixelRatio(1),this.renderer.setSize(o,a,!1);let h=this.hdr?ri:qe,l=d=>d&&d.dispose();l(this.rtScene),[this.q1,this.q2,this.e1,this.e2].forEach(l);let c=new bi(o,a);c.minFilter=c.magFilter=ye,this.rtScene=new Xe(o,a,{type:h,depthTexture:c,depthBuffer:!0,samples:this.quality>=1?4:0,minFilter:Se,magFilter:Se,generateMipmaps:!1});let u=d=>new Xe(Math.max(2,o/d|0),Math.max(2,a/d|0),{type:h,depthBuffer:!1,minFilter:Se,magFilter:Se});return this.q1=u(4),this.q2=u(4),this.e1=u(8),this.e2=u(8),!0}_pass(t,e){this.fsMesh.material=t,this.renderer.setRenderTarget(e),this.renderer.render(this.fsScene,this.fsCam)}render(t,e,i){let n=this.renderer,s=this.fx;n.setRenderTarget(this.rtScene),n.render(t,e),this.mBright.uniforms.tColor.value=this.rtScene.texture,this.mBright.uniforms.uTexel.value.set(1/this.w,1/this.h),this._pass(this.mBright,this.q1);let o=(a,h,l,c)=>{this.mBlur.uniforms.tColor.value=a.texture,this.mBlur.uniforms.uDir.value.set(l,c),this._pass(this.mBlur,h)};o(this.q1,this.q2,1/this.q1.width,0),o(this.q2,this.q1,0,1/this.q1.height),this.mCopy.uniforms.tColor.value=this.q1.texture,this._pass(this.mCopy,this.e1),o(this.e1,this.e2,1/this.e1.width,0),o(this.e2,this.e1,0,1/this.e1.height),s.tColor.value=this.rtScene.texture,s.tDepth.value=this.rtScene.depthTexture,s.tBloomA.value=this.q1.texture,s.tBloomB.value=this.e1.texture,s.uRes.value.set(this.w,this.h),s.uNear.value=e.near,s.uFar.value=e.far,s.uTanHalf.value=Math.tan(e.fov*Math.PI/360),s.uAspect.value=e.aspect,s.uTime.value=i%1e3,s.uLine.value=Math.max(1,this.h/760),this._pass(this.mFinal,null)}trackFrame(t){if(!this.autoScale)return;let e=this._frameTimes;if(e.push(t),e.length<90)return;let i=e.reduce((n,s)=>n+s,0)/e.length;e.length=0,i>1/40&&this.scale>.55?(this.scale=Math.max(.55,this.scale-.12),this.resize(!0)):i<1/58&&this.scale<1&&(this.scale=Math.min(1,this.scale+.06),this.resize(!0))}};var Ta=new yt,ju=new Map;function ix(r){let t=ju.get(r);return t||(Ta.setHex(r),t=[Ta.r,Ta.g,Ta.b],ju.set(r,t)),t}function ze(r,t,e){let i=r>>16&255,n=r>>8&255,s=r&255,o=t>>16&255,a=t>>8&255,h=t&255;return Math.round(i+(o-i)*e)<<16|Math.round(n+(a-n)*e)<<8|Math.round(s+(h-s)*e)}var fr=new D,pr=new jt,Th=new je,Ea=new Ci,Eh=new D,Ah=new D,he=class{constructor(){this.pos=[],this.nor=[],this.col=[],this.fx=[],this.ox=0,this.oy=0,this.oz=0,this.cos=1,this.sin=0}get triCount(){return this.pos.length/9}frame(t=0,e=0,i=0,n=0){return this.ox=t,this.oy=e,this.oz=i,this.cos=Math.cos(n),this.sin=Math.sin(n),this}_push(t,e,i){let n=this.cos,s=this.sin;this.pos.push(this.ox+t*n+i*s,this.oy+e,this.oz-t*s+i*n)}tri(t,e,i,n,s=0,o=0,a=0,h=0,l=0,c=0,u=0,d=0){let f=this.pos.length;this._push(t[0],t[1],t[2]),this._push(e[0],e[1],e[2]),this._push(i[0],i[1],i[2]);let g=this.pos,x=g[f+3]-g[f],m=g[f+4]-g[f+1],p=g[f+5]-g[f+2],_=g[f+6]-g[f],M=g[f+7]-g[f+1],v=g[f+8]-g[f+2],T=m*v-p*M,S=p*_-x*v,y=x*M-m*_,b=Math.hypot(T,S,y)||1;T/=b,S/=b,y/=b;let C=ix(n);for(let R=0;R<3;R++)this.nor.push(T,S,y),this.col.push(C[0],C[1],C[2]);this.fx.push(s,h,o,a,s,c,o,l,s,d,o,u)}quad(t,e,i,n,s,o=0,a=0,h=null){h?(this.tri(t,e,i,s,o,a,h[0],h[1],h[2],h[3],h[4],h[5]),this.tri(t,i,n,s,o,a,h[0],h[1],h[4],h[5],h[6],h[7])):(this.tri(t,e,i,s,o,a),this.tri(t,i,n,s,o,a))}quadDir(t,e,i,n,s,o,a=0,h=0,l=null){let c=e[0]-t[0],u=e[1]-t[1],d=e[2]-t[2],f=i[0]-t[0],g=i[1]-t[1],x=i[2]-t[2],m=u*x-d*g,p=d*f-c*x,_=c*g-u*f;m*s[0]+p*s[1]+_*s[2]>=0?this.quad(t,e,i,n,o,a,h,l):this.quad(t,n,i,e,o,a,h,l?[l[0],l[1],l[6],l[7],l[4],l[5],l[2],l[3]]:null)}triDir(t,e,i,n,s,o=0){let a=e[0]-t[0],h=e[1]-t[1],l=e[2]-t[2],c=i[0]-t[0],u=i[1]-t[1],d=i[2]-t[2],f=h*d-l*u,g=l*c-a*d,x=a*u-h*c;f*n[0]+g*n[1]+x*n[2]>=0?this.tri(t,e,i,s,o):this.tri(t,i,e,s,o)}box(t,e,i,n,s,o,a,h=null){let l=h?.glow||0,c=h?.type||0,u=h?.skip||"",d=h?.top??a,f=(g,x,m,p,_,M,v)=>{c?this.quad(g,x,m,p,_,l,c,[M,g[1],v,x[1],v,m[1],M,p[1]]):this.quad(g,x,m,p,_,l)};u.includes("Z")||f([t,e,o],[n,e,o],[n,s,o],[t,s,o],a,t,n),u.includes("z")||f([n,e,i],[t,e,i],[t,s,i],[n,s,i],a,n,t),u.includes("X")||f([n,e,o],[n,e,i],[n,s,i],[n,s,o],a,o,i),u.includes("x")||f([t,e,i],[t,e,o],[t,s,o],[t,s,i],a,i,o),u.includes("Y")||this.quad([t,s,o],[n,s,o],[n,s,i],[t,s,i],d,l),u.includes("y")||this.quad([t,e,i],[n,e,i],[n,e,o],[t,e,o],a,l)}rbox(t,e,i,n,s,o,a,h,l,c,u=0){Ea.set(a,h,l,"YXZ"),pr.compose(Ah.set(t,e,i),Th.setFromEuler(Ea),Eh.set(n,s,o)),this.mesh(nx,pr,c,u)}mesh(t,e,i,n=0,s=null){let o=t.attributes.position,a=t.index,h=a?a.count:o.count,l=[0,0,0],c=[0,0,0],u=[0,0,0],d=(f,g)=>{let x=a?a.getX(f):f;fr.fromBufferAttribute(o,x),e&&fr.applyMatrix4(e),g[0]=fr.x,g[1]=fr.y,g[2]=fr.z};for(let f=0;f<h;f+=3){d(f,l),d(f+1,c),d(f+2,u);let g=s?s((l[1]+c[1]+u[1])/3,(l[0]+c[0]+u[0])/3,(l[2]+c[2]+u[2])/3):i;this.tri(l,c,u,g,n)}}cyl(t,e,i,n,s,o,a,h,l=0,c=!0){let u=rx(a,c);pr.compose(Ah.set(t,e+o/2,i),Th.identity(),Eh.set(1,o,1));let d=u.attributes.position,f=u.index,g=[0,0,0],x=[0,0,0],m=[0,0,0],p=(_,M)=>{let v=f.getX(_),T=d.getY(v),S=T>0?s:n;M[0]=t+d.getX(v)*S,M[1]=e+(T+.5)*o,M[2]=i+d.getZ(v)*S};for(let _=0;_<f.count;_+=3)p(_,g),p(_+1,x),p(_+2,m),this.tri(g,x,m,h,l)}blob(t,e,i,n,s,o,a,h=0,l=0,c=null){Ea.set(0,l,0),pr.compose(Ah.set(t,e,i),Th.setFromEuler(Ea),Eh.set(n,s,o)),this.mesh(sx,pr,a,h,c?u=>u>e+s*.15?c:a:null)}disc(t,e,i,n,s,o,a=0){for(let h=0;h<s;h++){let l=h/s*Math.PI*2,c=(h+1)/s*Math.PI*2;this.tri([t,e,i],[t+Math.sin(l)*n,e,i+Math.cos(l)*n],[t+Math.sin(c)*n,e,i+Math.cos(c)*n],o,a)}}beam(t,e,i,n,s,o,a,h,l=0){let c=n-t,u=s-e,d=o-i,f=Math.hypot(c,u,d);if(f<1e-4)return;let g=Math.atan2(c,d),x=-Math.asin(u/f);this.rbox((t+n)/2,(e+s)/2,(i+o)/2,a,a,f,x,g,0,h,l)}build(){let t=new ge;return t.setAttribute("position",new Qt(this.pos,3)),t.setAttribute("normal",new Qt(this.nor,3)),t.setAttribute("color",new Qt(this.col,3)),t.setAttribute("aFx",new Qt(this.fx,4)),t.computeBoundingSphere(),t.computeBoundingBox(),t}},nx=new Ke(1,1,1),sx=new Ki(1,0),Qu=new Map;function rx(r,t){let e=r*2+(t?1:0),i=Qu.get(e);return i||(i=new Di(1,1,1,r,1,!t),Qu.set(e,i)),i}var ps=Math.PI*2,St=(r,t,e)=>r<t?t:r>e?e:r,Zt=(r,t,e)=>r+(t-r)*e,Wt=(r,t,e,i)=>r+(t-r)*(1-Math.exp(-e*i)),tn=(r,t,e)=>(e=St((e-r)/(t-r),0,1),e*e*(3-2*e));function ox(r,t){let e=(t-r)%ps;return e>Math.PI&&(e-=ps),e<-Math.PI&&(e+=ps),e}function Rh(r,t,e,i){return r+ox(r,t)*(1-Math.exp(-e*i))}function ms(r){let t=r>>>0,e=()=>{t=t+1831565813|0;let i=Math.imul(t^t>>>15,1|t);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296};return e.range=(i,n)=>i+(n-i)*e(),e.int=(i,n)=>Math.floor(i+(n-i+1)*e()),e.pick=i=>i[Math.floor(e()*i.length)],e.chance=i=>e()<i,e.sign=()=>e()<.5?-1:1,e}function Fn(r){if(!isFinite(r))return"--:--";let t=Math.floor(r/60),e=r-t*60;return`${t}:${e<10?"0":""}${e.toFixed(1)}`}function td(){let r=new Date;return r.getUTCFullYear()*1e4+(r.getUTCMonth()+1)*100+r.getUTCDate()}var wi=.7,Ui=.35,mi=.22;function Ca(r,t,e,i,n,s,o,a=0){let h=t+Ui,l=e+wi,c=i+n*e,u=i-n*wi,d=a>0?[[l,u+a],[l-1.7,u+n*1.7],[0,c]]:[[l,u],[0,c]];for(let f of[1,-1]){let g=0,x=d.reduce((p,_,M)=>M?p+Math.hypot(_[0]-d[M-1][0],_[1]-d[M-1][1]):0,0);for(let p=0;p<d.length-1;p++){let _=d[p],M=d[p+1],v=Math.hypot(_[0]-M[0],_[1]-M[1]),T=x-g,S=x-g-v;g+=v;let y=f*_[0],b=f*M[0];r.quadDir([-h,_[1],y],[h,_[1],y],[h,M[1],b],[-h,M[1],b],[0,1,f*.2],s,0,1,[-h,T,h,T,h,S,-h,S]),r.quadDir([-h,_[1]-mi,y],[h,_[1]-mi,y],[h,M[1]-mi,b],[-h,M[1]-mi,b],[0,-1,0],o.under);for(let C of[1,-1])r.quadDir([C*h,_[1],y],[C*h,_[1]-mi,y],[C*h,M[1]-mi,b],[C*h,M[1],b],[C,0,0],o.ridge)}let m=d[0];r.quadDir([-h,m[1]-mi,f*m[0]],[h,m[1]-mi,f*m[0]],[h,m[1],f*m[0]],[-h,m[1],f*m[0]],[0,0,f],o.ridge)}r.box(-h-.05,c-.12,-.22,h+.05,c+.16,.22,o.ridge);for(let f of[1,-1])r.box(f*h-.28,c-.05,-.3,f*h+.28,c+.42,.3,o.ridge);return{ridgeY:c,eaveY:u}}function gs(r,t,e,i,n,s,o,a=0,h=wi){let l=t+h,c=e+h,u=n/e,d=i-u*h,f=i+n,g=Math.max(0,l-c),x=mi+(a>0?.08:0);if(a>0){let _=d+u*1.6,M=d+a,v=M+.5,T=l-1.6,S=c-1.6,y=(b,C,R,P,k,B,L,V,W)=>{let H=(b+R)/2,Q=(C+P)/2,X=(k+L)/2,j=(B+V)/2;r.quadDir([b,v,C],[H,M,Q],[X,_,j],[k,_,B],W,s,0,1,[0,1.6,4,1.6,4,0,0,0]),r.quadDir([H,M,Q],[R,v,P],[L,_,V],[X,_,j],W,s,0,1,[4,1.6,8,1.6,8,0,4,0]),r.quadDir([b,v,C],[H,M,Q],[H,M-x,Q],[b,v-x,C],[W[0],0,W[2]],o.ridge),r.quadDir([H,M,Q],[R,v,P],[R,v-x,P],[H,M-x,Q],[W[0],0,W[2]],o.ridge),r.quadDir([b,v-x,C],[R,v-x,P],[L,_-x,V],[k,_-x,B],[0,-1,0],o.red)};y(-l,c,l,c,-T,S,T,S,[0,1,1]),y(-l,-c,l,-c,-T,-S,T,-S,[0,1,-1]),y(l,-c,l,c,T,-S,T,S,[1,1,0]),y(-l,-c,-l,c,-T,-S,-T,S,[-1,1,0]),l=T,c=S,d=_}else r.quadDir([-l,d-x,-c],[l,d-x,-c],[l,d-x,c],[-l,d-x,c],[0,-1,0],o.under),r.quadDir([-l,d-x,c],[l,d-x,c],[l,d,c],[-l,d,c],[0,0,1],o.ridge),r.quadDir([-l,d-x,-c],[l,d-x,-c],[l,d,-c],[-l,d,-c],[0,0,-1],o.ridge),r.quadDir([l,d-x,-c],[l,d-x,c],[l,d,c],[l,d,-c],[1,0,0],o.ridge),r.quadDir([-l,d-x,-c],[-l,d-x,c],[-l,d,c],[-l,d,-c],[-1,0,0],o.ridge);let m=Math.hypot(c,f-d);for(let p of[1,-1])r.quadDir([-l,d,p*c],[l,d,p*c],[g,f,0],[-g,f,0],[0,1,p],s,0,1,[-l,m,l,m,g,0,-g,0]),r.quadDir([p*l,d,-c],[p*l,d,c],[p*g,f,0],[p*g,f,0],[p,1,0],s,0,1,[-c,m,c,m,0,0,0,0]);if(g>.3){r.box(-g-.2,f-.1,-.22,g+.2,f+.18,.22,o.ridge);for(let p of[1,-1])r.box(p*g-.26,f,-.28,p*g+.26,f+.5,.28,a>0?o.gold:o.ridge)}else r.cyl(0,f-.1,0,.3,.05,.9,5,a>0?o.gold:o.ridge);return{ridgeY:f,eaveY:i-u*h,rl:g}}function gr(r,t,e,i,n,s,o,a,h,l){let c=a.wood,u=a.glow;if(s==="temple")return ax(r,t,e,i,n,a,h);let d=s==="kura";r.box(-e,0,-i,e,n,i,o,{skip:"yY"});let f=n>5.3?2:1,g=n/f;if(d){let p=Math.min(1.7,n*.22);r.box(-e-.06,0,-i-.06,e+.06,p,i+.06,a.ridge,{skip:"y"}),r.box(-e-.04,n-.5,-i-.04,e+.04,n-.25,i+.04,ze(o,a.ridge,.35),{skip:"yY"});for(let _ of[1,-1]){let M=Math.max(1,Math.round(e/2.4));for(let v=0;v<M;v++){let T=-e+(v+.5)/M*2*e,S=n*.62;r.box(T-.55,S-.6,_*i-.05,T+.55,S+.6,_*i+.1,c);let y=h.chance(.35);r.quadDir([T-.36,S-.42,_*(i+.11)],[T+.36,S-.42,_*(i+.11)],[T+.36,S+.42,_*(i+.11)],[T-.36,S+.42,_*(i+.11)],[0,0,_],y?u:a.under,y?1.7:0)}}return}for(let p of[1,-1])if(r.triDir([p*e,n,i],[p*e,n,-i],[p*e,n+l*i-.04,0],[p,0,0],o),r.box(p*e-.08,0,-.1,p*e+.08,n+l*i-.2,.1,c,{skip:"yY"}),r.box(p*e-.07,0,-i-.07,p*e+.07,n,-i+.09,c,{skip:"yY"}),r.box(p*e-.07,0,i-.09,p*e+.07,n,i+.07,c,{skip:"yY"}),r.box(p*e-.06,n-.2,-i,p*e+.06,n,i,c,{skip:"zZ"}),f===2&&r.box(p*e-.06,g-.1,-i,p*e+.06,g+.1,i,c,{skip:"zZ"}),h.chance(.6)){let _=h.chance(.5),M=n*.72;r.quadDir([p*(e+.03),M-.45,-.6],[p*(e+.03),M-.45,.6],[p*(e+.03),M+.45,.6],[p*(e+.03),M+.45,-.6],[p,0,0],_?u:c,_?1.6:0,_?2:3,[-.6,M-.45,.6,M-.45,.6,M+.45,-.6,M+.45])}let x=Math.max(2,Math.round(2*e/2.5)),m=2*e/x;for(let p of[1,-1]){let _=p*i,M=p*(i+.035);r.box(-e,n-.22,_-.07,e,n,_+.07,c,{skip:"xX"}),f===2&&r.box(-e,g-.1,_-.07,e,g+.1,_+.07,c,{skip:"xX"}),r.box(-e,0,_-.06,e,.22,_+.06,a.stone,{skip:"xXy"});for(let v=0;v<=x;v++){let T=-e+v*m;v>0&&v<x&&r.box(T-.08,0,_-.065,T+.08,n,_+.065,c,{skip:"yY"})}for(let v=0;v<f;v++){let T=v*g+(v?.1:.22),S=(v+1)*g-(v===f-1?.22:.1);for(let y=0;y<x;y++){let b=-e+y*m+.08,C=b+m-.16,R=h(),P=(k,B,L,V,W,H=b,Q=C)=>r.quadDir([H,k,M],[Q,k,M],[Q,B,M],[H,B,M],[0,0,p],L,V,W,[H,k,Q,k,Q,B,H,B]);if(v===0)if(R<.2){P(T,S-.25,ze(u,c,.55),.55,0);let k=h.pick(a.accent);r.box(b+.1,S-1.25,_+p*.1-.02,C-.1,S-.3,_+p*.1+.02,k),r.box(b+.02,S-.34,_+p*.1-.04,C-.02,S-.26,_+p*.1+.04,c),Aa(t,(b+C)/2,_,p,m*.5,3.2,u,.22)}else R<.55?(P(T+.55,S-.2,u,1.25,4),P(T,T+.55,c,0,3),R<.4&&Aa(t,(b+C)/2,_,p,m*.45,2.2,u,.13)):R<.75?(P(T+.7,S-.3,u,1.7,2),P(T,T+.7,c,0,3),Aa(t,(b+C)/2,_,p,m*.45,2.6,u,.16)):P(T,S*.42,c,0,3);else R<.5?P(T+.45,S-.4,u,1.7,2,b+.2,C-.2):R<.7?P(T+.45,S-.4,c,0,3,b+.2,C-.2):R<.8&&P(T+.45,S-.4,u,1,4,b+.2,C-.2)}}}}function ax(r,t,e,i,n,s,o){let a=e-.9,h=i-.9;r.box(-e,0,-i,e,.55,i,s.stone,{skip:"y"}),r.box(-a,.55,-h,a,n,h,s.plaster[3],{skip:"yY"}),r.box(-e,n-.55,-i,e,n,i,s.red,{skip:"y"}),r.box(-e-.15,n-.2,-i-.15,e+.15,n,i+.15,s.gold,{skip:"yY"});let l=Math.max(3,Math.round(2*e/2.6));for(let u of[1,-1])for(let d=0;d<=l;d++){let f=-e+.3+d/l*(2*e-.6);if(r.cyl(f,.55,u*(i-.3),.2,.2,n-1.1,6,s.red,0,!1),d<l){let g=f+.5,x=f+(2*e-.6)/l-.5,m=u*(h+.03),p=Math.abs(d-(l-1)/2)<.6;r.quadDir([g,.9,m],[x,.9,m],[x,n-1,m],[g,n-1,m],[0,0,u],p?s.wood:s.glow,p?0:1.6,p?3:2,[g,.9,x,.9,x,n-1,g,n-1]),p||Aa(t,(g+x)/2,u*i,u,1.2,3,s.glow,.14)}}let c=Math.max(2,Math.round(2*i/2.6));for(let u of[1,-1])for(let d=1;d<c;d++)r.cyl(u*(e-.3),.55,-i+.3+d/c*(2*i-.6),.2,.2,n-1.1,6,s.red,0,!1)}function Aa(r,t,e,i,n,s,o,a){let l=ze(0,o,a*2.2);r.quadDir([t-n,.05,e+i*.1],[t+n,.05,e+i*.1],[t+n*1.9,.05,e+i*s],[t-n*1.9,.05,e+i*s],[0,1,0],l)}function xr(r,t,e,i,n,s,o=.2){r.disc(t,e+.05,i,n,14,ze(0,s,o)),r.disc(t,e+.06,i,n*.55,12,ze(0,s,o*1.1))}function Ch(r,t,e,i,n,s=1){r.box(e-.07,0,i-.07,e+.07,2.7,i+.07,n.wood),r.box(e-.05,2.55,i-.05,e+.05+s*.5,2.65,i+.05,n.wood);let o=e+s*.45;r.box(o-.17,2,i-.17,o+.17,2.5,i+.17,n.glow,{glow:2.6}),r.box(o-.2,2.5,i-.2,o+.2,2.56,i+.2,n.wood),r.box(o-.2,1.95,i-.2,o+.2,2,i+.2,n.wood),xr(t,o,0,i,3.4,n.glow,.2)}function mr(r,t,e,i,n,s,o=2.4,a=2759726){r.blob(t,e,i,n,n*1.25,n,s,o),r.box(t-n*.45,e+n*1.1,i-n*.45,t+n*.45,e+n*1.3,i+n*.45,a),r.box(t-n*.45,e-n*1.3,i-n*.45,t+n*.45,e-n*1.1,i+n*.45,a)}function Ph(r,t,e,i,n,s){r.box(t-.3,e,i-.3,t+.3,e+.18,i+.3,n.stone),r.box(t-.12,e+.18,i-.12,t+.12,e+.8,i+.12,n.stone),r.box(t-.26,e+.8,i-.26,t+.26,e+.9,i+.26,n.stone),r.box(t-.2,e+.9,i-.2,t+.2,e+1.25,i+.2,s,{glow:3.2}),r.cyl(t,e+1.25,i,.42,.06,.34,4,n.stone)}function xs(r,t,e,i,n,s,o){let a=o.range(-.25,.25),h=o.range(-.25,.25),l=2.6*n;r.beam(t,e,i,t+a,e+l*.55,i+h,.34*n,s.trunk),r.beam(t+a,e+l*.5,i+h,t+a*2.2,e+l,i+h*2.2,.26*n,s.trunk);let c=t+a*2.2,u=i+h*2.2,d=e+l,f=4+o.int(0,2);for(let g=0;g<f;g++){let x=g/f*6.283+o.range(-.4,.4),m=(g?1.3:0)*n*o.range(.8,1.2),p=n*o.range(1.2,1.75);g&&r.beam(c,d-.3,u,c+Math.cos(x)*m,d+.2,u+Math.sin(x)*m,.16*n,s.trunk),r.blob(c+Math.cos(x)*m,d+(g?o.range(0,.7):1)*n,u+Math.sin(x)*m,p,p*.78,p,s.blossom[g%3===2?2:0],0,o.range(0,3),s.blossom[1])}}function Ih(r,t,e,i,n,s,o){let a=o.range(-.5,.5),h=4.2*n;r.beam(t,e,i,t+a,e+h,i+a*.4,.3*n,s.trunk);let l=3;for(let c=0;c<l;c++){let u=.45+c/l*.6,d=t+a*u+o.range(-.6,.6)*n,f=i+a*.4*u+o.range(-.6,.6)*n,g=n*(2-c*.45);r.cyl(d,e+h*u,f,g,g*.55,.55*n,7,s.pine[c%2])}}function Oi(r,t,e,i,n,s,o,a,h){let l=h.pick([a.woodMid,a.woodLight,ze(a.woodMid,a.wood,.4)]);r.box(t-n/2,e,i-o/2,t+n/2,e+s,i+o/2,l,{type:3,skip:"y"}),r.box(t-n/2-.03,e+s-.12,i-o/2-.03,t+n/2+.03,e+s,i+o/2+.03,a.wood,{skip:"y"})}function Lh(r,t,e,i,n,s,o){r.cyl(t,e,i,n*.88,n,s,8,o.woodLight),r.cyl(t,e+s*.25,i,n*.96,n*.98,.07,8,o.wood,0,!1),r.cyl(t,e+s*.7,i,n*1.02,n*1.02,.07,8,o.wood,0,!1)}function ed(r,t,e,i,n,s,o,a,h){let l=h.pick(a.accent);for(let c of[-1,1])for(let u of[-1,1])r.box(e+c*(n/2-.1)-.06,0,i+u*(s/2-.1)-.06,e+c*(n/2-.1)+.06,o-.1,i+u*(s/2-.1)+.06,a.wood,{skip:"yY"});r.box(e-n/2,.75,i-s/2+.15,e+n/2,.9,i+s/2-.15,a.woodLight),r.box(e-n/2-.2,o-.14,i-s/2-.2,e+n/2+.2,o,i+s/2+.2,l),r.box(e-n/2-.2,o-.5,i+s/2+.16,e+n/2+.2,o-.14,i+s/2+.2,a.plaster[0]),mr(r,e-n/2+.3,o-.55,i+s/2+.3,.2,a.lantern,2.4),mr(r,e+n/2-.3,o-.55,i+s/2+.3,.2,a.lantern,2.4),xr(t,e,0,i+s/2+.8,2.4,a.lantern,.16)}function id(r,t,e,i,n,s,o){r.box(t-.03,e,i-.03,t+.03,e+1.9,i+.03,o.wood,{skip:"y"}),r.cyl(t,e+1.7,i,n,.06,.4,10,s)}function nd(r,t,e,i,n,s){for(let o of[-1,1])r.cyl(t+o*i/2,0,e,.24,.2,n,7,s.red,0,!1);r.box(t-i/2-.9,n-.05,e-.22,t+i/2+.9,n+.3,e+.22,s.red),r.box(t-i/2-1.1,n+.3,e-.28,t+i/2+1.1,n+.5,e+.28,s.under),r.box(t-i/2-.3,n-.95,e-.14,t+i/2+.3,n-.7,e+.14,s.red)}function Dh(r,t,e,i,n,s,o){let a=4.2*n,h=e;for(let l=0;l<s;l++){let c=2.6*n;r.box(t-a/2,h,i-a/2,t+a/2,h+c,i+a/2,l%2?o.plaster[0]:o.red,{skip:"y"}),Ra(r,t,h+c,i,a*1.05,a*.42,.95*n,o.farRoof),h+=c+.7*n,a*=.84}r.box(t-.1*n,h,i-.1*n,t+.1*n,h+3.2*n,i+.1*n,o.gold,{glow:.6})}function Ra(r,t,e,i,n,s,o,a,h=0){let l=[[-1,1],[1,1],[1,-1],[-1,-1]];for(let c=0;c<4;c++){let u=l[c],d=l[(c+1)%4];r.quad([t+u[0]*n,e,i+u[1]*n],[t+d[0]*n,e,i+d[1]*n],[t+d[0]*s,e+o,i+d[1]*s],[t+u[0]*s,e+o,i+u[1]*s],a,h)}r.quad([t-s,e+o,i+s],[t+s,e+o,i+s],[t+s,e+o,i-s],[t-s,e+o,i-s],a,h)}function sd(r,t,e,i){r.cyl(t,-4,e,170,62,44,9,i.hill),r.cyl(t-60,-4,e+30,110,30,26,7,ze(i.hill,i.far,.3));let n=40,s=26;Ra(r,t,n,e,s*1.25,s,12,i.stone),n+=12;for(let o=0;o<4;o++){let a=9-o*1.2;r.box(t-s,n,e-s,t+s,n+a,e+s,i.snow,{skip:"y"}),Ra(r,t,n+a,e,s*1.22,s*.7,3.4,i.farRoof),n+=a+3.2,s*=.74}Ra(r,t,n-.4,e,s*1.5,.4,5,i.farRoof),r.box(t-.5,n+4,e-.5,t+.5,n+7,e+.5,i.gold,{glow:.8})}function rd(r,t,e,i,n,s,o,a){let h=a.pick(o.plaster);r.box(t-i/2,0,e-n/2,t+i/2,s,e+n/2,ze(h,o.far,.25),{skip:"y"});let l=n*.24,c=.6,u=ze(a.pick(o.tile),o.farRoof,.5);r.quad([t-i/2-c,s-.2,e+n/2+c],[t+i/2+c,s-.2,e+n/2+c],[t+i/2+c,s+l,e],[t-i/2-c,s+l,e],u),r.quad([t+i/2+c,s-.2,e-n/2-c],[t-i/2-c,s-.2,e-n/2-c],[t-i/2-c,s+l,e],[t+i/2+c,s+l,e],u),a.chance(.3)&&r.box(t-.6,s*.5,e+n/2,t+.6,s*.5+1,e+n/2+.06,o.glow,{glow:1.8})}var ys=8,gi=.55,It=34,Pa=48,ne=0,Nh=1,od=2,Ia=3,ad=5,La=class{constructor(t,e,i){this.def=t,this.pal=e,this.mats=i,this.solids=[],this.grid=new Map,this.ropes=[],this.pickups=[],this.guardDefs=[],this.towerDefs=[],this.anchors=[],this.checkpoints=[],this.waters=[],this.group=new Ae,this.chunks=new Map,this.decals=new Map,this.sunDir=new D(Math.sin(e.sunAz)*Math.cos(e.sunEl),Math.sin(e.sunEl),-Math.cos(e.sunAz)*Math.cos(e.sunEl)).normalize(),this.hit=null,this.generate()}addSolid(t,e,i,n,s,o,a,h=a,l=null){let c={x0:t,z0:e,x1:i,z1:n,y0:s,t:o,a,b:h,cx:(t+i)/2,cz:(e+n)/2,hw:(i-t)/2,hd:(n-e)/2,rlx:0,rlz:0,ceil:!1,soft:!1,tag:null};l&&Object.assign(c,l),this.solids.push(c);let u=Math.floor((t-1)/ys),d=Math.floor((i+1)/ys),f=Math.floor((e-1)/ys),g=Math.floor((n+1)/ys);for(let x=u;x<=d;x++)for(let m=f;m<=g;m++){let p=x+256<<12|m+2048,_=this.grid.get(p);_||this.grid.set(p,_=[]),_.push(c)}return c}cell(t,e){return this.grid.get(Math.floor(t/ys)+256<<12|Math.floor(e/ys)+2048)}top(t,e,i){switch(t.t){case ne:return t.a;case Nh:return t.b-(t.b-t.a)*Math.min(1,Math.abs(i-t.cz)/t.hd);case od:return t.b-(t.b-t.a)*Math.min(1,Math.abs(e-t.cx)/t.hw);case Ia:{let n=(t.hd-Math.abs(i-t.cz))/(t.hd-t.rlz),s=(t.hw-Math.abs(e-t.cx))/(t.hw-t.rlx);return t.a+(t.b-t.a)*St(Math.min(n,s),0,1)}case ad:return t.a+(t.b-t.a)*St((i-t.z0)/(t.z1-t.z0),0,1)}return t.a}isWater(t,e){for(let i of this.waters)if(e>i.z0&&e<i.z1&&t>i.x0&&t<i.x1)return!0;return!1}groundAt(t,e,i,n=gi){let s=this.waters.length&&this.isWater(t,e)?-3:0;this.hit=null;let o=this.cell(t,e);if(o)for(let a=0;a<o.length;a++){let h=o[a];if(t<h.x0||t>h.x1||e<h.z0||e>h.z1)continue;let l=this.top(h,t,e);l<=i+n&&l>s&&(s=l,this.hit=h)}return s}highest(t,e){return this.groundAt(t,e,1e4,0)}ceilAt(t,e,i){let n=1e4,s=this.cell(t,e);if(s)for(let o=0;o<s.length;o++){let a=s[o];!a.ceil||t<a.x0||t>a.x1||e<a.z0||e>a.z1||a.y0>=i&&a.y0<n&&(n=a.y0)}return n}collide(t,e,i,n){let s=!1,o=this.cell(t.x,t.z);if(!o)return!1;for(let a=0;a<o.length;a++){let h=o[a],l=St(t.x,h.x0,h.x1),c=St(t.z,h.z0,h.z1),u=t.x-l,d=t.z-c,f=u*u+d*d;if(f>=e*e)continue;let g=this.top(h,l,c);if(t.y+gi>=g||t.y+i<=h.y0)continue;let x,m;if(f>1e-9){let p=Math.sqrt(f),_=e-p;x=u/p,m=d/p,t.x+=x*_,t.z+=m*_}else{let p=t.x-h.x0,_=h.x1-t.x,M=t.z-h.z0,v=h.z1-t.z,T=Math.min(p,_,M,v);x=0,m=0,T===p?(t.x=h.x0-e,x=-1):T===_?(t.x=h.x1+e,x=1):T===M?(t.z=h.z0-e,m=-1):(t.z=h.z1+e,m=1)}s=!0,n&&(n.nx=x,n.nz=m,n.solid=h,n.top=g)}return s}solidAt(t,e,i){let n=this.cell(t,i);if(!n)return!1;for(let s=0;s<n.length;s++){let o=n[s];if(!(t<o.x0||t>o.x1||i<o.z0||i>o.z1||e<o.y0)&&e<this.top(o,t,i))return!0}return!1}wallAt(t,e,i){let n=this.cell(t,e);if(!n)return!1;for(let s=0;s<n.length;s++){let o=n[s];if(!(o.soft||t<o.x0||t>o.x1||e<o.z0||e>o.z1)&&o.y0<i+.6&&this.top(o,t,e)>i+1.3)return!0}return!1}ray(t,e,i,n,s,o,a,h=.3){for(let l=h;l<a;l+=h){let c=t+n*l,u=e+s*l,d=i+o*l;if(u<0||this.solidAt(c,u,d))return l}return-1}los(t,e,i,n,s,o){let a=n-t,h=s-e,l=o-i,c=Math.hypot(a,h,l);if(c<.01)return!0;let u=Math.ceil(c/.35);for(let d=1;d<u;d++){let f=d/u;if(this.solidAt(t+a*f,e+h*f,i+l*f))return!1}return!0}inShadow(t,e,i){let n=this.sunDir;return this.ray(t,e,i,n.x,n.y,n.z,45,.45)>0}ropeAt(t,e,i,n=gi,s=.4){let o=null,a=-1e9;for(let h of this.ropes){let l=((t-h.ax)*h.dx+(e-h.az)*h.dz)/h.len2;if(l<0||l>1)continue;let c=h.ax+h.dx*l,u=h.az+h.dz*l;if(Math.hypot(t-c,e-u)>.5)continue;let d=h.ay+(h.by-h.ay)*l;d<=i+n&&d>=i-s&&d>a&&(a=d,o=h,h._t=l,h._y=d)}return o}G(t){let e=Math.floor(-t/Pa),i=this.chunks.get(e);return i||this.chunks.set(e,i=new he),i}D(t){let e=Math.floor(-t/Pa),i=this.decals.get(e);return i||this.decals.set(e,i=new he),i}addRope(t,e,i,n,s,o,a=!0){let h=this.pal,l=this.R,c=n-t,u=o-i,d=c*c+u*u,f=Math.sqrt(d),g={ax:t,ay:e,az:i,bx:n,by:s,bz:o,dx:c,dz:u,len2:d,len:f,slope:(s-e)/f,ux:c/f,uz:u/f};this.ropes.push(g);let x=this.G((i+o)/2);x.beam(t,e-.04,i,n,s-.04,o,.09,h.gold);for(let m of[[t,e,i],[n,s,o]]){let p=this.highest(m[0],m[2]);x.box(m[0]-.09,p-.2,m[2]-.09,m[0]+.09,m[1]+.02,m[2]+.09,h.red)}if(a){let m=Math.floor(f/2.4);for(let p=1;p<m;p++){let _=p/m,M=t+c*_,v=e+(s-e)*_,T=i+u*_;p%2?mr(x,M,v-.42,T,.17,p%4===1?h.lantern:h.glow,2.3):x.box(M-.02-Math.abs(g.uz)*.16,v-.42,T-.02-Math.abs(g.ux)*.16,M+.02+Math.abs(g.uz)*.16,v-.06,T+.02+Math.abs(g.ux)*.16,l.pick(h.accent))}}return g}generate(){let t=this.def,e=this.pal,i=this.R=ms(t.seed),n=this.rows=[],s=t.rows+1,o=15;for(let x=0;x<s;x++){let m=x===0?13:i.range(11,15.5),p="street";if(x>0&&x<s-1){let M=i();M<t.feats.c?p="canal":M<t.feats.c+t.feats.b&&(p="boulevard"),p!=="street"&&n[x-1].gapKind!=="street"&&(p="street")}let _=p==="canal"?14:p==="boulevard"?i.range(9,10.5):i.range(4.1,5.3);n.push({i:x,z1:o,z0:o-m,gapKind:p,gap:_,b:[]}),o-=m+_}let a=o,h=(x,m,p)=>{let _=m,M=i.range(4.5,7);for(;_<p-.01;){let v=i.range(8,14.5);p-(_+v)<8&&(v=p-_);let T=_+v<p-.01&&i.chance(.3)?i.range(1.5,2.2):0,S=St(M+i.range(-2.2,2.2),3.5,8.3),y="machiya";i.chance(t.feats.k)?(y="kura",S=i.range(9.6,11.4)):v>=12.5&&x.i>0&&i.chance(.1)?(y="temple",S=i.range(5.6,6.4)):x.i>0&&i.chance(.07)?y="yard":M=S,x.b.push({row:x,x0:_,x1:_+v-T,z0:x.z0+i.range(0,.7),z1:x.z1-i.range(0,.7),h:S,kind:y,axis:i.chance(.22)?"z":"x",slope:i.range(.42,.54),path:!1,tile:i.pick(e.tile),plaster:i.pick(e.plaster)}),_+=v}};for(let x of n)x.i===0?(h(x,-It,-8),x.b.push({row:x,x0:-8,x1:8,z0:x.z0,z1:x.z1,h:6.4,kind:"machiya",axis:"x",slope:.46,path:!0,tile:e.tile[0],plaster:e.plaster[0]}),h(x,8,It)):h(x,-It,It);let l=t.profile||"rolling",c=x=>{let m=x/Math.max(1,s-1);return l==="ascent"?4.6+m*3.8:l==="descent"?8.3-m*3.8:l==="valley"?4.5+Math.abs(m-.5)*7.6:l==="peaks"?6.2+Math.sin(m*Math.PI*3.2)*2:6.1},u=n[0].b.find(x=>x.path),d=this.path=[{b:u,enter:0}];for(let x=0;x<s-1;x++){let m=n[x+1],p=n[x],_=C=>Math.min(u.x1,C.x1)-Math.max(u.x0,C.x0),M=m.b.filter(C=>C.kind!=="yard"&&C.kind!=="kura"&&_(C)>=5);if(!M.length){let C=m.b.reduce((R,P)=>_(P)>_(R)?P:R);C.kind="machiya",M=[C]}let v=i.pick(M),T=Math.max(u.x0,v.x0)+1.6,S=Math.min(u.x1,v.x1)-1.6,y=T<S?i.range(T,S):(T+S)/2,b=p.gapKind!=="street";v.path=!0,v.axis="x",v.kind==="temple"?u.h=Math.max(u.h,v.h-.6):v.h=b?St(u.h-i.range(.2,1.8),4.2,8):St(u.h+i.range(-1.3,1.3)+(c(x+1)-u.h)*.5,Math.max(4.2,u.h-2.6),Math.min(8.6,u.h+2)),v.z1=m.z1,u.z0=p.z0,d[x].cross=y,d.push({b:v,enter:y}),u=v}for(let x of n)for(let m=0;m<x.b.length;m++){let p=x.b[m];if(p.path)for(let _ of[x.b[m-1],x.b[m+1]])_&&!_.path&&_.kind==="machiya"&&_.h>p.h+2.3&&(_.h=p.h+i.range(.6,2.3))}let f=Fh(i,t.towers,2,s-1);for(let x of f){let m=n[x],p=m.b.findIndex(v=>v.path),_=[m.b[p-1],m.b[p+1],m.b[p-2],m.b[p+2]].filter(v=>v&&!v.path&&v.x1-v.x0>6);if(!_.length)continue;let M=_[0|i()*Math.min(2,_.length)];M.kind="yard",M.tower=!0}this.planMission();for(let x of n){for(let m of x.b)this.emitLot(m);this.emitBoundary(x)}this.emitGoal(a,d[d.length-1]);for(let x=0;x<s;x++)this.emitStreet(n[x],n[x+1],x===s-1?a:n[x+1].z1);this.emitGround(a),this.emitRopes(),this.emitRoofClutter(),this.emitSetPieces(),this.placePickups(),this.placeGuards(),this.placeMission(),this.emitBackdrop(a);let g=n[0].b.find(x=>x.path);this.start={x:0,y:this.highest(0,g.cz)+.05,z:g.cz,yaw:0},this.checkpoints.unshift({x:this.start.x,y:this.start.y,z:this.start.z,yaw:0,start:!0}),this.bounds={x0:-It-.4,x1:It+.4,z0:a-17.5,z1:14.4},this.length=Math.abs(this.goal.z-this.start.z),this.finish()}emitLot(t){let e=this.pal,i=this.R;t.cx=(t.x0+t.x1)/2,t.cz=(t.z0+t.z1)/2;let n=t.x1-t.x0,s=t.z1-t.z0,o=this.G(t.cz),a=this.D(t.cz);if(t.kind==="yard")return this.emitYard(t,o,a);let h=t.axis==="x"?0:Math.PI/2,l=t.axis==="x"?n/2:s/2,c=t.axis==="x"?s/2:n/2;if(t.kind==="machiya"&&(t.slope=Math.min(t.slope,3.4/c)),o.frame(t.cx,0,t.cz,h),a.frame(t.cx,0,t.cz,h),this.addSolid(t.x0,t.z0,t.x1,t.z1,0,ne,t.h,t.h,{tag:t}),t.kind==="machiya"){gr(o,a,l,c,t.h,"machiya",t.plaster,e,i,t.slope);let u=Ca(o,l,c,t.h,t.slope,t.tile,e);t.ridgeY=u.ridgeY,t.eaveY=u.eaveY,t.axis==="x"?(t.roof=this.addSolid(t.x0-Ui,t.z0-wi,t.x1+Ui,t.z1+wi,u.eaveY-mi,Nh,u.eaveY,u.ridgeY,{tag:t}),this.addSolid(t.x0-Ui,t.cz-.24,t.x1+Ui,t.cz+.24,u.ridgeY-.3,ne,u.ridgeY+.16)):(t.roof=this.addSolid(t.x0-wi,t.z0-Ui,t.x1+wi,t.z1+Ui,u.eaveY-mi,od,u.eaveY,u.ridgeY,{tag:t}),this.addSolid(t.cx-.24,t.z0-Ui,t.cx+.24,t.z1+Ui,u.ridgeY-.3,ne,u.ridgeY+.16))}else{let u=t.kind==="temple",d=u?2.1:Math.min(2.6,c*.5),f=u?1.5:.55;gr(o,a,l,c,t.h,t.kind,e.plaster[3],e,i,0);let g=gs(o,l,c,t.h,d,u?ze(t.tile,e.ridge,.25):t.tile,e,u?.3:0,f);t.ridgeY=g.ridgeY,t.eaveY=g.eaveY+(u?.3:0);let x=(t.axis==="x"?l:c)+f,m=(t.axis==="x"?c:l)+f;t.roof=this.addSolid(t.cx-x,t.cz-m,t.cx+x,t.cz+m,t.eaveY-.3,Ia,t.eaveY,g.ridgeY,{tag:t,rlx:t.axis==="x"?g.rl:0,rlz:t.axis==="x"?0:g.rl}),t.kind==="kura"&&this.anchors.push({x:t.cx,y:g.ridgeY+1.5,z:t.cz,base:g.ridgeY})}if(o.frame(),a.frame(),t.kind==="kura"&&this.anchorPole(o,t.cx,t.ridgeY,t.cz),t.kind==="machiya"&&t.h>=5.3)for(let u of[1,-1])this.awning(o,t,u,2.95,1.05),t.h>=6.3&&this.awning(o,t,u,t.h-2.45,.8)}anchorPole(t,e,i,n){let s=this.pal;t.box(e-.05,i,n-.05,e+.05,i+1.5,n+.05,s.woodLight,{skip:"y"}),t.box(e-.24,i+1.3,n-.07,e+.24,i+1.74,n+.07,s.gold,{glow:1.6}),t.box(e-.14,i+1.4,n-.08,e+.14,i+1.64,n+.08,s.under),t.box(e+.05,i+.5,n-.01,e+.6,i+1.2,n+.01,s.red)}awning(t,e,i,n,s){let o=this.pal,a=i>0?e.z1:e.z0,h=a+i*s,l=e.x0+.1,c=e.x1-.1;t.quadDir([l,n-.32,h],[c,n-.32,h],[c,n,a],[l,n,a],[0,1,i],e.tile,0,1,[l,1.1,c,1.1,c,0,l,0]),t.quadDir([l,n-.5,h],[c,n-.5,h],[c,n-.18,a],[l,n-.18,a],[0,-1,0],o.under),t.quadDir([l,n-.5,h],[c,n-.5,h],[c,n-.32,h],[l,n-.32,h],[0,0,i],o.ridge);for(let u of[l,c])t.triDir([u,n-.5,h],[u,n-.18,a],[u,n,a],[u===l?-1:1,0,0],o.ridge);for(let u=l+.4;u<c;u+=2.6)t.beam(u,n-.5,h-i*.1,u,n-1.1,a,.09,o.wood);this.addSolid(l,Math.min(a,h),c,Math.max(a,h),n-.5,ne,n-.16,n-.16,{soft:!0})}emitYard(t,e,i){let n=this.pal,s=this.R,o=t.x1-t.x0,a=2.5,h=(l,c,u,d)=>{e.box(l,0,c,u,a,d,n.plaster[1],{skip:"y"}),e.box(l-.12,a,c-.12,u+.12,a+.16,d+.12,n.ridge),e.box(l,0,c,u,.5,d,n.stone,{skip:"yY"}),this.addSolid(l-.12,c-.12,u+.12,d+.12,0,ne,a+.16)};if(h(t.x0,t.z1-.4,t.x1,t.z1),h(t.x0,t.z0,t.x1,t.z0+.4),t.tower){let l=s.range(11.5,13);this.emitTower(e,i,t.cx,t.cz,l);let c=this.path.find(u=>u.b.row===t.row);this.towerDefs.push({x:t.cx,z:t.cz,y:l,aimX:(c.b.x0+c.b.x1)/2,aimZ:(c.b.z0+c.b.z1)/2-4,range:46});for(let u=0;u<2;u++)Ih(e,t.cx+(u?1:-1)*(o/2-1.8),0,t.cz+s.range(-3,3),s.range(.8,1.1),n,s)}else{let l=1+s.int(0,1);for(let c=0;c<l;c++){let u=Zt(t.x0+2.4,t.x1-2.4,l===1?.5:c),d=t.cz+s.range(-2,2);s.chance(.7)?xs(e,u,0,d,s.range(1.05,1.5),n,s):Ih(e,u,0,d,s.range(.9,1.2),n,s),this.addSolid(u-.25,d-.25,u+.25,d+.25,0,ne,2.6)}Ph(e,t.cx+s.range(-1,1),0,t.cz+3,n,n.glow),xr(i,t.cx,0,t.cz+3,2.6,n.glow,.16),s.chance(.5)&&nd(e,t.cx,t.z1-1.6,2.6,3.3,n)}}emitTower(t,e,i,n,s){let o=this.pal,a=1.5;for(let l of[-1,1])for(let c of[-1,1])t.beam(i+l*(a+.5),0,n+c*(a+.5),i+l*a,s,n+c*a,.28,o.wood),this.addSolid(i+l*a-.2,n+c*a-.2,i+l*a+.2,n+c*a+.2,0,ne,s-.2);for(let l=0;l<3;l++){let c=l/3*(s-.4)+.3,u=(l+1)/3*(s-.4),d=a+.5*(1-c/s),f=a+.5*(1-u/s);for(let g of[-1,1])t.beam(i-d,c,n+g*d,i+f,u,n+g*f,.13,o.woodMid),t.beam(i+d,c,n+g*d,i-f,u,n+g*f,.13,o.woodMid),t.beam(i+g*d,c,n-d,i+g*f,u,n+f,.13,o.woodMid),t.beam(i+g*d,c,n+d,i+g*f,u,n-f,.13,o.woodMid),t.beam(i-f,u,n+g*f,i+f,u,n+g*f,.16,o.wood),t.beam(i+g*f,u,n-f,i+g*f,u,n+f,.16,o.wood)}let h=a+.45;t.box(i-h,s-.22,n-h,i+h,s,n+h,o.woodMid),this.addSolid(i-h,n-h,i+h,n+h,s-.22,ne,s,s,{ceil:!0});for(let l of[-1,1])for(let c of[-1,1])t.box(i+l*(h-.12)-.07,s,n+c*(h-.12)-.07,i+l*(h-.12)+.07,s+2.5,n+c*(h-.12)+.07,o.wood,{skip:"yY"});for(let l of[-1,1])t.box(i-h,s+.85,n+l*(h-.1)-.05,i+h,s+.95,n+l*(h-.1)+.05,o.red),t.box(i+l*(h-.1)-.05,s+.85,n-h,i+l*(h-.1)+.05,s+.95,n+h,o.red);t.frame(i,0,n,0),gs(t,h-.1,h-.1,s+2.5,1.1,o.tile[1],o,0,.6),t.frame(),t.cyl(i+.6,s+1.5,n+.6,.22,.3,.5,6,o.gold),xr(e,i,0,n,3.5,o.glow,.1)}emitBoundary(t){let e=this.pal,i=this.R;for(let n of[-1,1]){let s=t.z1;for(;s>t.z0+.01;){let o=i.range(8,13);s-o-t.z0<6&&(o=s-t.z0);let a=i.range(10,13),h=i.range(11.5,15),l=n<0?-It-a:It,c=n<0?-It:It+a,u=s,d=s-o,f=(l+c)/2,g=(d+u)/2,x=this.G(g),m=this.D(g),p=i.chance(.5),_=p?(c-l)/2:o/2,M=p?o/2:(c-l)/2,v=Math.min(.5,3.2/M);x.frame(f,0,g,p?0:Math.PI/2),m.frame(f,0,g,p?0:Math.PI/2),gr(x,m,_,M,h,"machiya",i.pick(e.plaster),e,i,v),Ca(x,_,M,h,v,i.pick(e.tile),e),x.frame(),m.frame(),this.addSolid(l,d,c,u,0,ne,h+6),s-=o}}}emitGoal(t,e){let i=this.pal,n=this.R,s=e.b,o=St(e.enter,-It+12,It-12);e.cross=o;let a=10.5,h=7.5,l=t-h-.5,c=St(s.h-.6,4.4,5.6),u=this.G(l),d=this.D(l);u.frame(o,0,l,0),d.frame(o,0,l,0),gr(u,d,a,h,c,"temple",0,i,n,0);let f=gs(u,a,h,c,1.8,ze(i.tile[0],i.ridge,.3),i,.3,1.5),g=c+3.9,x=5.2,m=3.4;u.box(-x,c+.5,-m,x,g,m,i.plaster[3],{skip:"y"}),u.box(-x-.1,g-.5,-m-.1,x+.1,g,m+.1,i.red,{skip:"y"});for(let y of[1,-1])for(let b=0;b<4;b++){let C=-x+1+b*((2*x-2.8)/3);u.quadDir([C,c+1.9,y*(m+.03)],[C+.8,c+1.9,y*(m+.03)],[C+.8,g-.8,y*(m+.03)],[C,g-.8,y*(m+.03)],[0,0,y],i.glow,1.8,2,[C,0,C+.8,0,C+.8,1.3,C,1.3])}let p=gs(u,x,m,g,1.5,ze(i.tile[0],i.ridge,.3),i,.3,1.3);u.frame(),d.frame(),this.addSolid(o-a,l-h,o+a,l+h,0,ne,c);let _=f.eaveY+.3;this.addSolid(o-a-1.5,l-h-1.5,o+a+1.5,l+h+1.5,_-.3,Ia,_,f.ridgeY,{rlx:f.rl}),this.addSolid(o-x,l-m,o+x,l+m,c,ne,g);let M=p.eaveY+.3;this.addSolid(o-x-1.3,l-m-1.3,o+x+1.3,l+m+1.3,M-.3,Ia,M,p.ridgeY,{rlx:p.rl});for(let y of[-1,1]){let b=o+y*(a-3),C=t-.5+2.05;for(let R=0;R<3;R++){let P=b+y*R*1.2,k=1.15*(3-R);for(let B=0;B<3-R;B++)Oi(u,P,B*1.15,C,1.15,1.15,1.15,i,n);this.addSolid(P-.6,C-.58,P+.6,C+.58,0,ne,k)}}{let y=t-.5+2.05;for(let b=-2;b<=2;b++){let C=3-Math.abs(b),R=o+b*1.2;for(let P=0;P<C;P++)Oi(u,R,P*1.15,y,1.15,1.15,1.15,i,n);this.addSolid(R-.6,y-.58,R+.6,y+.58,0,ne,1.15*C)}}let v=p.ridgeY;this.goal={x:o,y:v,z:l,r:2.6},u.beam(o-.9,v,l,o,v+2.4,l,.08,i.woodLight),u.beam(o+.9,v,l,o,v+2.4,l,.08,i.woodLight);let T=l+.1;u.quad([o,v+.7,T],[o+1.3,v+2.2,T],[o,v+3.7,T],[o-1.3,v+2.2,T],i.plaster[3],.5),u.box(o-.5,v+1.9,T+.01,o+.5,v+2.5,T+.03,i.red,{glow:.9});for(let y=0;y<2;y++){let b=y?.5:1.3,C=y?.2:.09,R=ze(0,i.gold,C*2);d.quad([o-b,v,l],[o+b,v,l],[o+b,v+70,l],[o-b,v+70,l],R),d.quad([o,v,l-b],[o,v,l+b],[o,v+70,l+b],[o,v+70,l-b],R),d.quad([o+b,v,l],[o-b,v,l],[o-b,v+70,l],[o+b,v+70,l],R),d.quad([o,v,l+b],[o,v,l-b],[o,v+70,l-b],[o,v+70,l+b],R)}let S={i:999,z1:t,z0:t-16,b:[]};for(let y of[-1,1]){let b=o+y*(a+4.5);xs(u,o+y*(a+2.6),0,l+3,1.4,i,n),xs(u,o+y*(a+2.9),0,l-4,1.2,i,n);let C=y<0?-It:b,R=y<0?b:It,P=C;for(;R-P>6;){let k=Math.min(R-P,n.range(8,13)),B=R-(P+k)<6?R-P:k,L={row:S,x0:P,x1:P+B-.01,z0:S.z0+1,z1:S.z1-n.range(0,1),h:n.range(4.5,8),kind:"machiya",axis:"x",slope:n.range(.42,.52),tile:n.pick(i.tile),plaster:n.pick(i.plaster)};S.b.push(L),this.emitLot(L),P+=B}}this.goalRow=S,this.emitBoundary(S)}emitStreet(t,e,i){let n=this.pal,s=this.R,o=t.z0,a=i,h=(o+a)/2,l=this.G(h),c=this.D(h),u=t.gapKind;if(t.zc=h,u!=="canal")for(let x of[-1,1]){let m=x*(It+.5);l.box(m-.14,0,a,m+.14,3.3,o,n.wood,{type:3}),l.box(m-.3,3.3,a-.2,m+.3,3.55,o+.2,n.ridge),this.addSolid(m-.3,a,m+.3,o,0,ne,30)}if(u==="canal"){let x=a+2.6,m=o-2.6;this.waters.push({x0:-It-16,x1:It+16,z0:x,z1:m});for(let v of[x,m]){let T=v===x?1:-1;l.box(-It-16,-1.7,Math.min(v,v-T*.5),It+16,.02,Math.max(v,v-T*.5),n.stone,{skip:"y"})}for(let v of[-1,1])l.box(v*(It+16)-.5,-1.7,x,v*(It+16)+.5,4,m,n.stone);let p=2+s.int(0,1);for(let v=0;v<p;v++){let T=Zt(-It+8,It-8,(v+s.range(.2,.8))/p);for(let S of[h-2.1,h+2.1]){let y=T+(S>h?0:s.range(-1.5,1.5));l.box(y-2.4,-.95,S-.75,y+2.4,-.25,S+.75,n.woodMid,{type:3}),l.box(y-2.9,-.7,S-.5,y-2.4,-.15,S+.5,n.wood),l.box(y+2.4,-.7,S-.5,y+2.9,-.15,S+.5,n.wood),s.chance(.5)&&Oi(l,y+s.range(-1,1),-.25,S,.8,.6,.8,n,s),this.addSolid(y-2.9,S-.75,y+2.9,S+.75,-1.2,ne,-.2)}}let _=this.path[t.i].cross,M=St(_+(_>0?-1:1)*s.range(14,22),-It+5,It-5);this.emitBridge(l,M,a+1.2,o-1.2,h),t.bridgeX=M;for(let v=0;v<5;v++){let T=Zt(-It+3,It-3,(v+s.range(.1,.9))/5),S=s.chance(.5)?o-1.3:a+1.3;Math.abs(T-M)<3.5||(s.chance(.5)?xs(l,T,0,S,s.range(1,1.3),n,s):Ch(l,c,T,S,n,s.sign()))}return}let d=u==="boulevard",f=d?5:3;for(let x=0;x<f;x++){let m=Zt(-It+4,It-4,(x+s.range(.25,.75))/f);Ch(l,c,m,x%2?o-.45:a+.45,n,s.sign())}if(d){let x=3+s.int(0,2);for(let m=0;m<x;m++){let p=Zt(-It+6,It-6,(m+s.range(.2,.8))/x),_=h+s.range(-1.6,1.6),M=s();if(M<.55){let v=s.range(2.6,3.4),T=2.2,S=s.range(2.4,2.8);ed(l,c,p,_,v,T,S,n,s),this.addSolid(p-v/2-.2,_-T/2-.2,p+v/2+.2,_+T/2+.2,S-.14,ne,S,S,{soft:!0})}else M<.8?(xs(l,p,0,_,s.range(1.1,1.4),n,s),this.addSolid(p-.25,_-.25,p+.25,_+.25,0,ne,2.6)):(id(l,p,0,_,1.3,s.pick(n.accent),n),l.box(p-.9,0,_+.5,p+.9,.42,_+1.1,n.red))}for(let m=0;m<3;m++){let p=Zt(-It+5,It-5,(m+s.range(.1,.9))/3),_=Math.min(this.highest(p,o+.5),7)+.1,M=Math.min(this.highest(p,a-.5),7)+.1;if(_<3||M<3)continue;let v=6;l.beam(p,_,o,p,M,a,.04,n.wood);for(let T=1;T<v;T++)mr(l,p,Zt(_,M,T/v)-.3-Math.sin(T/v*Math.PI)*.25,Zt(o,a,T/v),.15,T%2?n.lantern:n.plaster[3],2.2)}}let g=[[t,o,-1],[e||this.goalRow,a,1]];for(let[x,m,p]of g)if(x)for(let _ of x.b){if(_.kind==="yard"||!(_.kind!=="machiya"||_.h<5.3)&&!s.chance(.35))continue;let v=s.range(_.x0+1.5,_.x1-3.4),T=p<0?_.z0:_.z1,S=_.kind==="temple",y=T+(p<0?-1:1)*(S?2.05:.62);S&&(Oi(l,v+2.4,0,y,1.15,1.15,1.15,n,s),Oi(l,v+2.4,1.15,y,1.1,1.1,1.1,n,s),Oi(l,v+2.4,2.25,y,1,1,1,n,s),this.addSolid(v+1.82,y-.58,v+2.98,y+.58,0,ne,3.25)),Oi(l,v,0,y,1.15,1.15,1.15,n,s),this.addSolid(v-.58,y-.58,v+.58,y+.58,0,ne,1.15),(_.h>4.3||_.kind!=="machiya")&&(Oi(l,v+1.2,0,y,1.15,1.15,1.15,n,s),Oi(l,v+1.2,1.15,y,1.05,1.05,1.05,n,s),this.addSolid(v+.62,y-.58,v+1.78,y+.58,0,ne,2.2)),s.chance(.6)&&Lh(l,v-1.1,0,y-(p<0?-1:1)*.1,.4,.95,n)}}emitBridge(t,e,i,n,s){let o=this.pal,a=1.7,h=1.25;for(let[l,c,u,d]of[[i,s,0,h],[s,n,h,0]]){t.quadDir([e-a,u,l],[e+a,u,l],[e+a,d,c],[e-a,d,c],[0,1,0],o.woodLight,0,3,[0,l,.2,l,.2,c,0,c]),t.quadDir([e-a,u-.3,l],[e+a,u-.3,l],[e+a,d-.3,c],[e-a,d-.3,c],[0,-1,0],o.wood);for(let f of[-1,1]){t.quadDir([e+f*a,u-.3,l],[e+f*a,u,l],[e+f*a,d,c],[e+f*a,d-.3,c],[f,0,0],o.red),t.beam(e+f*a,u+.9,l,e+f*a,d+.9,c,.12,o.red);for(let g=0;g<=3;g++){let x=g/3,m=Zt(l,c,x),p=Zt(u,d,x);t.box(e+f*a-.07,p-.3,m-.07,e+f*a+.07,p+1.05,m+.07,o.red)}}this.addSolid(e-a,l,e+a,c,-1.5,ad,u,d)}for(let l of[i+2.6,n-2.6])for(let c of[-1,1])t.box(e+c*(a-.2)-.15,-1.7,l-.15,e+c*(a-.2)+.15,.6,l+.15,o.wood)}emitGround(t){let e=this.pal,i=this.rows,n=It+16,s=60,o=(a,h)=>{for(let l=a;l>h;l-=Pa/2){let c=Math.max(h,l-Pa/2);this.G((l+c)/2).quad([-n,0,l],[n,0,l],[n,0,c],[-n,0,c],e.ground)}};for(let a of i)a.gapKind==="canal"&&(o(s,a.z0-2.6),s=a.z0-a.gap+2.6);o(s,t-60)}emitRopes(){let t=this.R,e=this.rows;for(let i=0;i<this.path.length-1;i++){let n=e[i];if(n.gapKind==="street")continue;let s=this.path[i].b,o=this.path[i+1].b,a=this.path[i].cross,h=s.z0+1.1,l=o.z1-1.1;this.addRope(a,this.highest(a,h)+.1,h,a,this.highest(a,l)+.1,l),this.anchorPole(this.G(o.cz),a+2.2,this.highest(a+2.2,o.cz),o.cz),this.anchors.push({x:a+2.2,y:this.highest(a+2.2,o.cz)+1.5,z:o.cz,base:this.highest(a+2.2,o.cz)});let c=0;for(let u of n.b){if(c>=2||u.path||u.kind==="yard")continue;let d=e[i+1].b.filter(p=>p.kind!=="yard"&&Math.min(u.x1,p.x1)-Math.max(u.x0,p.x0)>3);if(!d.length||!t.chance(.6))continue;let f=t.pick(d),g=(Math.max(u.x0,f.x0)+Math.min(u.x1,f.x1))/2;if(Math.abs(g-a)<5)continue;let x=this.highest(g,u.z0+1.1)+.1,m=this.highest(g,f.z1-1.1)+.1;m>x+.4||x-m>7||(this.addRope(g,x,u.z0+1.1,g,m,f.z1-1.1),c++)}}for(let i=1;i<e.length-1;i++)for(let n of e[i].b){if(n.kind!=="kura"||!t.chance(.8))continue;let s=this.path[i+1].b,o=St(n.cx,s.x0+1.5,s.x1-1.5),a=s.cz+.6,h=St(o,n.x0+1,n.x1-1),l=n.z0-.2,c=this.highest(h,l)+.1,u=this.highest(o,a)+.12;if(c-u<1.5||Math.hypot(h-o,l-a)>34)continue;let d=!0;for(let f=.08;f<.93;f+=.04)if(this.highest(Zt(h,o,f),Zt(l,a,f))>Zt(c,u,f)-.25){d=!1;break}d&&this.addRope(h,c,l,o,u,a)}}emitRoofClutter(){let t=this.pal,e=this.R;for(let i of this.rows)for(let n of i.b){if(n.kind!=="machiya"||n.axis!=="x"||i.i===0||n.noClutter)continue;let s=this.path.find(l=>l.b===n),o=l=>s&&(Math.abs(l-s.enter)<2.2||Math.abs(l-(s.cross??99))<2.2),a=this.G(n.cz),h=n.x1-n.x0;if(e.chance(.55)){let l=e.range(n.x0+1.5,n.x1-1.5);if(!o(l)){let c=n.ridgeY+.16;a.box(l-.55,c-.3,n.cz-.55,l+.55,c+.06,n.cz+.55,t.woodMid),Lh(a,l,c+.06,n.cz,.42,.85,t),a.cyl(l,c+.91,n.cz,.2,.26,.24,6,t.woodMid),this.addSolid(l-.5,n.cz-.5,l+.5,n.cz+.5,c-.3,ne,c+.92)}}if(h>9&&e.chance(.4)){let l=e.range(n.x0+2.2,n.x1-2.2);if(!o(l)){let c=n.ridgeY+.1;a.frame(l,c,n.cz,0),a.box(-.8,-.3,-.55,.8,.5,.55,t.wood,{type:3,skip:"y"}),Ca(a,.8,.55,.5,.5,n.tile,t),a.frame(),this.addSolid(l-1.15,n.cz-1.25,l+1.15,n.cz+1.25,c-.3,Nh,c+.2,c+.82)}}if(h>10&&e.chance(.35)){let l=e.sign(),c=e.range(n.x0+2.4,n.x1-2.4);if(!o(c)){let u=n.cz+l*2.3,d=n.ridgeY-.25;a.box(c-1.5,d-.14,u-1.1,c+1.5,d,u+1.1,t.woodLight,{type:3});for(let g of[-1,1])for(let x of[-1,1]){let m=c+g*1.4,p=u+x*1;a.box(m-.06,this.highest(m,p)-.1,p-.06,m+.06,d+(x===l?1.9:0),p+.06,t.wood,{skip:"yY"})}let f=u+l*1;a.box(c-1.45,d+1.82,f-.04,c+1.45,d+1.9,f+.04,t.wood);for(let g=0;g<3;g++)a.box(c-1.3+g*.9,d+.45+g%2*.25,f-.02,c-.55+g*.9,d+1.82,f+.02,e.pick(t.accent));this.addSolid(c-1.5,u-1.1,c+1.5,u+1.1,d-.14,ne,d,d,{soft:!0}),this.addSolid(c-1.4,f-.08,c+1.4,f+.08,d+.4,ne,d+1.9,d+1.9,{soft:!0})}}if(e.chance(.3)){let l=e.sign(),c=e.range(n.x0+2,n.x1-2);if(!o(c)&&!(s&&l<0)){let u=(l>0?n.z1:n.z0)+l*.2,d=this.highest(c,u);a.box(c-1.1,d,u-.07,c+1.1,d+1.5,u+.07,t.woodMid,{type:3}),a.box(c-.9,d+.3,u-.09,c+.9,d+1.3,u+.09,e.pick(t.accent)),a.box(c-1.2,d+1.5,u-.12,c+1.2,d+1.62,u+.12,t.ridge),this.addSolid(c-1.1,u-.09,c+1.1,u+.09,d-.2,ne,d+1.62,d+1.62,{soft:!0})}}}}placePickups(){let t=this.R,e=this.path,i=this.rows,n=(l,c,u,d,f=1)=>this.pickups.push({type:l,x:c,y:u,z:d,value:f,taken:!1});for(let l=0;l<e.length;l++){let c=e[l],u=c.b,d=c.cross,f=c.enter,g=d,x=Math.max(1,Math.round(Math.abs(g-f)/2.8));l>0;for(let m=0;m<=x;m++){let p=Zt(f,g,m/x);l===0&&m===0||n("koban",p,this.highest(p,u.cz)+.95,u.cz)}if(l<e.length-1){let m=e[l+1].b,p=this.ropes.find(_=>Math.abs(_.ax-g)<.01&&Math.abs(_.az-(u.z0+1.1))<.01);if(p){let _=Math.floor(p.len/2.6);for(let M=1;M<_;M++)n("koban",Zt(p.ax,p.bx,M/_),Zt(p.ay,p.by,M/_)+1,Zt(p.az,p.bz,M/_))}else if(l%2===0){let _=u.z0-wi,M=m.z1+wi,v=this.highest(g,_+.2),T=this.highest(g,M-.2);for(let S=1;S<=3;S++){let y=S/4;n("koban",g,Zt(v,T,y)+1+Math.sin(y*Math.PI)*1.2,Zt(_,M,y))}}if(l>0&&l%4===0){let _=this.highest(c.enter,u.cz);this.checkpoints.push({x:c.enter,y:_,z:u.cz,yaw:0}),Ph(this.G(u.cz),c.enter+1.4,this.highest(c.enter+1.4,u.cz+.9)-.05,u.cz+.9,this.pal,9306072)}}if(l>1&&l%3===0){let m=St(f+t.sign()*3,u.x0+1,u.x1-1),p=u.cz+t.sign()*2.5;n(l%6===0?"onigiri":"shuriken",m,this.highest(m,p)+.8,p)}}let s=[];for(let l of i)for(let c of l.b)!c.path&&c.kind!=="yard"&&l.i>0&&s.push(c);let o=Math.min(s.length,4+Math.floor(this.def.rows/3));for(let l=0;l<o;l++){let c=s.splice(Math.floor(t()*s.length),1)[0];n(c.kind==="kura"&&t.chance(.3)?"smoke":"stack",c.cx+t.range(-2,2),this.highest(c.cx,c.cz)+1,c.cz,5)}for(let l of i)l.gapKind==="boulevard"&&t.chance(.8)&&n("stack",t.range(-It+6,It-6),1,l.zc,5);let a=s.filter(l=>l.row.i>1&&Math.abs(l.cx)>14),h=a.length?t.pick(a):s.length?t.pick(s):null;h&&n("cat",h.cx,this.highest(h.cx,h.cz+2)+.55,h.cz+2,25)}jobRoof(t,e=!0){let i=this.R,n=this.rows[t],s=n.b.findIndex(l=>l.path),o=n.b[s],a=e?[n.b[s-1],n.b[s+1]].filter(l=>l&&l.kind!=="yard"&&!l.tower&&!l.job&&l.x1-l.x0>7):[],h=a.length?i.pick(a):o;return h!==o&&(h.kind="machiya",h.axis="x",h.h=St(o.h+i.range(-.5,1),4.2,8.6)),h.noClutter=!0,h.job=!0,h}planMission(){let t=this.def,e=this.rows.length,i=t.mission||"steal",n=St(Math.round(e*.45),2,e-3),s=this.mission={type:i,row:n,roofs:[]};if(i==="signal")for(let o of[.2,.33,.46])s.roofs.push(this.jobRoof(St(Math.round(e*o),1,e-3)));else i==="pickpocket"?s.roofs.push(this.jobRoof(n,!1)):s.roofs.push(this.jobRoof(n))}placeMission(){let t=this.mission;t.spots=t.roofs.map(n=>{let s=n.cx+(t.type==="signal"?this.R.range(-2,2):0);return{x:s,y:this.highest(s,n.cz),z:n.cz,b:n}});let e=t.roofs[0],i=[[e.x0+1.6,e.cz],[e.x1-1.6,e.cz]];t.type==="assassinate"?(this.guardDefs.push({kind:"sentry",role:"target",pts:i,facing:Math.PI}),this.guardDefs.push({kind:"sentry",pts:[[e.x1-1.2,e.cz],[e.x0+1.2,e.cz]],facing:0})):t.type==="pickpocket"?this.guardDefs.push({kind:"sentry",role:"courier",pts:i,facing:Math.PI}):t.type==="steal"&&(this.guardDefs.push({kind:"sentry",pts:[[e.x0+1.4,e.cz],[e.cx-1.6,e.cz]],facing:Math.PI}),this.guardDefs.push({kind:"sentry",pts:[[e.x1-1.4,e.cz],[e.cx+1.6,e.cz]],facing:0}))}emitSetPieces(){let t=this.pal,e=ms(this.def.seed^625341585),i=this.rows,n=this.def.pieces||{hay:.4,slide:.25,wall:.7};this.hayCount=0;for(let s=1;s<i.length-1;s++){let o=i[s],a=i[s+1];if(o.gapKind==="street"&&e.chance(n.hay)){let h=[];for(let c of o.b)c.kind!=="yard"&&c.kind!=="temple"&&!c.job&&h.push({b:c,z:c.z0,s:-1});for(let c of a.b)c.kind!=="yard"&&c.kind!=="temple"&&!c.job&&h.push({b:c,z:c.z1,s:1});let l=h.filter(c=>c.b.h>=6).sort((c,u)=>u.b.h-c.b.h)[0];if(l){let c=l.b,u=St(c.cx+e.range(-2.5,2.5),c.x0+1.4,c.x1-1.4),d=l.z+l.s*(c.kind==="machiya"?wi:.5),f=this.highest(u,l.z+l.s*.2),g=d+l.s*1.7,x=this.G(g);x.box(u-.14,f-.18,Math.min(l.z,g),u+.14,f+.02,Math.max(l.z,g),t.woodLight),x.box(u-.03,f+.02,g-.03,u+.03,f+1.3,g+.03,t.wood),x.box(u+.03,f+.75,g-.02,u+.55,f+1.25,g+.02,t.gold,{glow:.6}),this.addSolid(u-.16,Math.min(l.z,g),u+.16,Math.max(l.z,g),f-.2,ne,f+.02);let m=g,p=u;x.box(p-1.25,.25,m-.8,p+1.25,.85,m+.8,t.woodMid,{type:3});for(let _ of[-1,1])x.cyl(p+_*.8,0,m+.86,.38,.38,.12,8,t.wood);x.blob(p,.95,m,1.25,.55,.8,14857818,0,.3,15979130),x.blob(p-.5,1.15,m+.1,.7,.35,.55,15979130),this.addSolid(p-1.25,m-.8,p+1.25,m+.8,0,ne,1.35,1.35,{hay:!0}),this.hayCount++}}if(o.gapKind==="boulevard"&&e.chance(n.wall)){let h=this.path[s],l=e.sign(),c=St(h.cross+l*2.4,-It+2,It-2),u=o.z0-1.4,d=a.z1+1.4,f=Math.max(this.highest(h.cross,o.z0+1),this.highest(h.cross,a.z1-1))+3.2,g=this.G((u+d)/2);g.box(c-.12,2.6,d,c+.12,f,u,t.woodMid,{type:3}),g.box(c-.16,f-.2,d-.1,c+.16,f+.05,u+.1,t.ridge);for(let x of[-1,1]){let m=c+x*.13;g.quadDir([m,f-2.6,d+1.2],[m,f-2.6,u-1.2],[m,f-.6,u-1.2],[m,f-.6,d+1.2],[x,0,0],e.pick([t.red,t.accent[0],t.plaster[3]]),.15)}for(let x of[u-.4,d+.4,(u+d)/2])g.box(c-.1,0,x-.1,c+.1,2.7,x+.1,t.wood);this.addSolid(c-.12,d,c+.12,u,2.6,ne,f)}}for(let s=2;s<this.path.length-2;s++){let o=this.path[s],a=o.b;if(a.job||a.kind!=="machiya"||a.axis!=="x"||!e.chance(n.slide))continue;let h=St(Math.min(o.enter,o.cross)-2.6,a.x0+.3,a.x1-.3),l=St(Math.max(o.enter,o.cross)+2.6,a.x0+.3,a.x1-.3),c=a.ridgeY+.16+1.08,u=this.G(a.cz);u.box(h,c,a.cz-.14,l,c+.28,a.cz+.14,14271626);for(let d=h+.4;d<l-.2;d+=.7)u.quadDir([d-.1,c-.45,a.cz+.15],[d+.1,c-.45,a.cz+.15],[d+.1,c,a.cz+.15],[d-.1,c,a.cz+.15],[0,0,1],16777215,.3);for(let d of[h,l])u.box(d-.1,a.ridgeY-.2,a.cz-.1,d+.1,c+.5,a.cz+.1,t.red),this.addSolid(d-.1,a.cz-.1,d+.1,a.cz+.1,a.ridgeY-.2,ne,c+.5);this.addSolid(h,a.cz-.15,l,a.cz+.15,c,ne,c+.28)}}placeGuards(){let t=this.R,e=this.def,i=this.rows,n=i.length,s=e.id===1?4:2,o=Fh(t,e.sentries,s,n-1),a=new Set;for(let l of o){let c=i[l],u=c.b.findIndex(m=>m.path),d=c.b.filter((m,p)=>!a.has(m)&&m.kind==="machiya"&&Math.abs(p-u)<=2&&(p!==u||e.id>1));if(!d.length)continue;let g=e.id>2&&t.chance(.3)&&d.includes(c.b[u])?c.b[u]:t.pick(d.filter(m=>!m.path).length?d.filter(m=>!m.path):d);a.add(g);let x=g.axis==="x"?[[g.x0+1.6,g.cz],[g.x1-1.6,g.cz]]:[[g.cx,g.z0+1.6],[g.cx,g.z1-1.6]];this.guardDefs.push({kind:"sentry",pts:x,facing:Math.PI})}let h=Fh(t,e.patrols,1,n-1);for(let l of h){let c=i[l];if(c.zc===void 0)continue;let u=c.gapKind==="canal"?c.z0-1.3:c.zc,d=t.range(-It+4,-6),f=t.range(6,It-4);this.guardDefs.push({kind:"patrol",pts:[[d,u],[f,u]],facing:0})}}emitBackdrop(t){let e=this.pal,i=ms(this.def.seed^1540483477),n=new he,s=t-17;for(let h=70;h>s-320;h-=17)for(let l=-260;l<=260;l+=17)Math.abs(l)<It+22&&h<44&&h>s-6||i.chance(.16)||Math.hypot(l,h-(s-380))<150||rd(n,l+i.range(-3,3),h+i.range(-3,3),i.range(9,14),i.range(8,12),i.range(4,9),e,i);n.box(-It-14,0,15.2,It+14,12,18,e.plaster[1],{skip:"y"}),n.box(-It-14,12,14.9,It+14,12.5,18.3,e.ridge),n.frame(0,0,33,0),n.box(-16,0,-9,16,15,9,e.plaster[3],{skip:"y"}),gs(n,16,9,15,4.5,e.tile[1],e,.4,1.8),n.frame();for(let h=0;h<6;h++)n.box(-13+h*5,6,23.9,-10.4+h*5,9,24,e.glow,{glow:1.8,type:2});sd(n,St(this.goal.x*.5,-20,20),s-400,e);let o=3;for(let h=0;h<o;h++){let l=h%2?1:-1;Dh(n,l*i.range(70,150),0,Zt(-40,s-120,(h+i.range(.2,.8))/o),i.range(1.8,2.6),5,e)}Dh(n,this.goal.x+i.sign()*i.range(34,48),0,s-i.range(40,70),2.2,5,e),n.cyl(-360,-10,s-1e3,330,46,230,8,e.far),n.cyl(-360,220,s-1e3,46,0,34,8,e.snow),n.cyl(-360,150,s-1e3,120,46.5,70.5,8,ze(e.far,e.snow,.55),0,!1),n.quad([-1500,-.06,500],[1500,-.06,500],[1500,-.06,s-1500],[-1500,-.06,s-1500],ze(e.ground,e.far,.35));let a=new Nt(n.build(),this.mats.world);a.receiveShadow=!1,a.castShadow=!1,a.frustumCulled=!1,this.group.add(a)}finish(){for(let[,t]of this.chunks){if(!t.triCount)continue;let e=new Nt(t.build(),this.mats.world);e.castShadow=!0,e.receiveShadow=!0,this.group.add(e)}for(let[,t]of this.decals){if(!t.triCount)continue;let e=new Nt(t.build(),this.mats.decal);e.renderOrder=5,this.group.add(e)}if(this.waters.length){let t=new he;for(let i of this.waters)t.quad([i.x0,-.75,i.z1],[i.x1,-.75,i.z1],[i.x1,-.75,i.z0],[i.x0,-.75,i.z0],this.pal.water);let e=new Nt(t.build(),this.mats.water);this.group.add(e)}this.triCount=0;for(let[,t]of this.chunks)this.triCount+=t.triCount;this.chunks=null,this.decals=null}dispose(){this.group.traverse(t=>{t.geometry&&t.geometry.dispose()}),this.group.removeFromParent()}};function Fh(r,t,e,i){let n=[];if(i<=e||t<=0)return n;for(let s=0;s<t;s++){let o=(s+r.range(.15,.85))/t;n.push(St(Math.floor(e+o*(i-e)),e,i-1))}return n}function ld(){return new Ue({vertexColors:!0,blending:Zi,depthWrite:!1,transparent:!0,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2,side:ti,fog:!1})}function hd(r){return new Ze({uniforms:{uTime:{value:0},uA:{value:new yt(r.water)},uB:{value:new yt(r.waterHi)},uC:{value:new yt(r.skyMid)}},vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`
      precision highp float; varying vec3 vW; uniform float uTime; uniform vec3 uA, uB, uC;
      void main(){
        vec2 p = vW.xz;
        float a = sin(p.x * 0.55 + sin(p.y * 1.7 + uTime * 0.6) * 1.3 + uTime * 0.5);
        float b = sin(p.y * 2.3 - uTime * 0.8 + sin(p.x * 0.4 + uTime * 0.2) * 1.6);
        float w = a * b;
        vec3 col = mix(uA, uC, 0.22 + 0.12 * step(0.1, sin(p.y * 0.9 + a)));
        col = mix(col, uB, step(0.78, w) * 0.85);
        col = mix(col, uA * 0.7, step(0.86, -w) * 0.6);
        gl_FragColor = vec4(col, 1.0);
      }`})}var yr=24,cd=7.9,Da=8.7,hx=3.3,_s=.35,ud=1.75,cx=1,dd=1.62,ux=.92,fd=2.8,Na=class{constructor(t){this.game=t,this.pos=new D,this.vel=new D,this.yaw=0,this.pitch=0,this.camera=new We(80,1,.08,1500),this.camera.rotation.order="YXZ",this.out={nx:0,nz:0,solid:null,top:0},this.buildArms(),this.reset({x:0,y:0,z:0,yaw:0})}reset(t){this.pos.set(t.x,t.y,t.z),this.vel.set(0,0,0),this.yaw=t.yaw||0,this.pitch=-.08,this.state="ground",this.grounded=!0,this.crouch=!1,this.sliding=!1,this.coyote=0,this.jumpBuf=0,this.rollBuf=0,this.slideT=0,this.wallT=0,this.wallCd=0,this.wallN=[0,0],this.wallSide=0,this.lastWall=null,this.mantle=null,this.rope=null,this.ropeS=0,this.ropeV=0,this.hook=null,this.hookCd=0,this.flow=0,this.style=0,this.yVis=t.y,this.eye=dd,this.bob=0,this.bobAmt=0,this.dip=0,this.dipV=0,this.roll=0,this.rollAnim=0,this.fov=80,this.shake=0,this.airStart=null,this.stepAcc=0,this.throwT=0,this.inShadow=!1,this.shadowT=0,this.speed=0,this.noiseT=0,this.dead=!1,this.frozen=!1,this.lastSafe={x:t.x,y:t.y,z:t.z},this.flip=null,this.airFlips=0,this.flipKind="front",this.underCd=0,this.speedT=0}get height(){return this.crouch||this.sliding?cx:ud}get chestY(){return this.pos.y+(this.crouch||this.sliding?.6:1.15)}addFlow(t,e=0,i=null){this.flow=St(this.flow+t,0,1),e&&i&&this.game.onTrick(i,Math.round(e*(1+this.flow)))}update(t,e){let i=this.game,n=i.world;if(this.frozen){this.updateCamera(t,0,0);return}this.yaw-=e.lookX,this.pitch=St(this.pitch-e.lookY,-1.5,1.5);let s=Math.sin(this.yaw),o=Math.cos(this.yaw),a=-s,h=-o,l=o,c=-s,u=e.moveX,d=e.moveZ,f=Math.hypot(u,d);f>1&&(u/=f,d/=f);let g=a*d+l*u,x=h*d+c*u,m=Math.hypot(g,x);this.jumpBuf=e.jumpPressed?.13:Math.max(0,this.jumpBuf-t),this.rollBuf=e.crouchPressed?.32:Math.max(0,this.rollBuf-t),this.wallCd=Math.max(0,this.wallCd-t),this.hookCd=Math.max(0,this.hookCd-t),this.throwT=Math.max(0,this.throwT-t),this.underCd-=t;let p=Da*(1+this.flow*i.stats.flowBonus);if(e.hookPressed&&this.tryHook(),this.state==="mantle")this.updateMantle(t);else if(this.state==="rope")this.updateRope(t,e,g,x,a,h);else if(this.state==="hook")this.updateHook(t,e);else{let M=this.vel,v=Math.hypot(M.x,M.z);if(this.grounded){if(e.crouchPressed&&v>6.2&&!this.sliding){this.sliding=!0,this.slideT=0,this.crouch=!1;let T=Math.min(v+2.2,15)/v;M.x*=T,M.z*=T,this.addFlow(.05,20,"Slide"),i.audio.slide(!0)}if(this.sliding){this.slideT+=t;let T=.25,S=this.pos.y,y=(n.groundAt(this.pos.x+T,this.pos.z,S+.3,.6)-n.groundAt(this.pos.x-T,this.pos.z,S+.3,.6))/(2*T),b=(n.groundAt(this.pos.x,this.pos.z+T,S+.3,.6)-n.groundAt(this.pos.x,this.pos.z-T,S+.3,.6))/(2*T);if(Math.abs(y)<1.5&&Math.abs(b)<1.5){let R=yr*.9/(1+y*y+b*b);M.x-=y*R*t,M.z-=b*R*t}v=Math.hypot(M.x,M.z);let C=4.2*t;v>C&&(M.x-=M.x/v*C,M.z-=M.z/v*C),M.x+=g*5*t,M.z+=x*5*t,v=Math.hypot(M.x,M.z),v>17&&(M.x*=17/v,M.z*=17/v),(v<3.4||!e.crouch&&this.slideT>.3||this.slideT>2.6)&&(this.sliding=!1,this.crouch=e.crouch,i.audio.slide(!1)),this.underCd<=0&&n.solidAt(this.pos.x,this.pos.y+1.4,this.pos.z)&&(this.underCd=1.2,this.addFlow(.08,60,"Slide Under"))}else{this.crouch=e.crouch;let T=this.crouch?hx:p,S=g*T,y=x*T,b=(m>.05?46:40)*t,C=S-M.x,R=y-M.z,P=Math.hypot(C,R);P<=b?(M.x=S,M.z=y):(M.x+=C/P*b,M.z+=R/P*b)}M.y=0,this.coyote=.13,this.jumpBuf>0&&this.jump(1)}else if(this.coyote=Math.max(0,this.coyote-t),this.jumpBuf>0&&this.coyote>0?this.jump(1):e.jumpPressed&&this.state==="air"&&!this.flip&&this.tryFlip(e),this.flip&&(this.flip.t+=t,this.flip.t>=this.flip.dur&&(this.airFlips++,this.flip=null)),this.state==="wallrun")this.updateWallrun(t,e,g,x);else{M.y-=yr*(M.y>0&&!e.jump?1.9:1)*t,M.y<-42&&(M.y=-42);let T=Math.hypot(M.x,M.z);M.x+=g*17*t,M.z+=x*17*t;let S=Math.hypot(M.x,M.z),y=Math.max(T,p*.85);S>y&&(M.x*=y/S,M.z*=y/S)}this.move(t,e,g,x,a,h)}let _=n.bounds;if(this.pos.x=St(this.pos.x,_.x0,_.x1),this.pos.z=St(this.pos.z,_.z0,_.z1),this.pos.y<-.55&&n.isWater(this.pos.x,this.pos.z)&&i.onSplash(),this.speed=Math.hypot(this.vel.x,this.vel.z),this.speed>10.3&&this.state!=="hook"?(this.speedT+=t,this.speedT>2.2&&(this.speedT=-5,this.addFlow(.05,70,"Speed Demon"))):this.speedT>0?this.speedT=0:this.speedT=Math.min(0,this.speedT+t),this.flow=Math.max(0,this.flow-t*(this.speed<4?.3:.04*i.stats.flowDecay)),this.grounded&&!this.sliding&&this.speed>1){this.stepAcc+=this.speed*t;let M=this.crouch?1.5:2.3;this.stepAcc>M&&(this.stepAcc=0,i.audio.step(this.pos.y>1.2,this.crouch?.25:.7),this.crouch||i.noise(this.pos.x,this.pos.y,this.pos.z,5.2*i.stats.noise,.35))}this.shadowT-=t,this.shadowT<=0&&(this.shadowT=.14,this.inShadow=n.inShadow(this.pos.x,this.chestY,this.pos.z)),this.grounded&&this.state==="ground"&&!this.sliding&&(this.lastSafe={x:this.pos.x,y:this.pos.y,z:this.pos.z}),this.updateCamera(t,u,d)}jump(t){let e=this.vel;e.y=cd*t,this.sliding&&(this.sliding=!1,this.game.audio.slide(!1)),this.grounded=!1,this.coyote=0,this.jumpBuf=0,this.crouch=!1,this.state="air",this.airStart={x:this.pos.x,z:this.pos.z,y:this.pos.y},this.game.audio.jump(),this.dipV-=1.2}move(t,e,i,n,s,o){let a=this.game.world,h=this.vel,l=this.pos,c=this.out,u=Math.hypot(h.x,h.y,h.z)*t,d=Math.max(1,Math.ceil(u/.2)),f=t/d;for(let g=0;g<d;g++){if(l.x+=h.x*f,l.y+=h.y*f,l.z+=h.z*f,c.solid=null,a.collide(l,_s,this.height,c)){let _=h.x*c.nx+h.z*c.nz,M=Math.hypot(h.x,h.z);if(this.grounded&&!this.sliding&&c.top-l.y<=1.3&&M>4.5&&_<-3&&this.tryMantle(-c.nx,-c.nz,!0))return;!this.grounded&&this.state==="air"&&this.wallCd<=0&&M>5.5&&_<0&&-_/M<.8&&l.y-a.groundAt(l.x,l.z,l.y,.2)>.9&&a.wallAt(l.x-c.nx*(_s+.25),l.z-c.nz*(_s+.25),l.y)&&(this.lastWall!==c.solid||this.wallCdSame<=0)&&this.startWallrun(c),_<0&&(h.x-=c.nx*_,h.z-=c.nz*_)}let x=a.groundAt(l.x,l.z,l.y,this.grounded?gi:.4),m=a.hit,p=h.y<=.5?a.ropeAt(l.x,l.z,l.y,this.grounded?gi:.35,this.grounded?.3:.25-h.y*f):null;if(p&&p._y>x+.02){this.enterRope(p);return}if(this.grounded)x>=l.y-.5?l.y=x:(this.grounded=!1,this.state="air",this.airStart={x:l.x,z:l.z,y:l.y},this.sliding&&(this.sliding=!1,this.game.audio.slide(!1)));else if(l.y<=x&&h.y<=.01||l.y<x&&x-l.y<=.4)this.land(x,m);else{let _=a.ceilAt(l.x,l.z,l.y+.4);h.y>0&&l.y+this.height>_&&(l.y=_-this.height,h.y=0)}}this.wallCdSame=Math.max(0,(this.wallCdSame||0)-t),!this.grounded&&this.state==="air"&&(e.moveZ>.2||e.jump)&&h.y<6.5&&this.tryMantle(s,o,!1)}land(t,e){let i=this.game,n=this.vel,s=this.pos,o=-n.y;s.y=t,n.y=0,this.grounded=!0,this.state="ground",this.lastWall=null;let a=Math.hypot(n.x,n.z),h=o*o/(2*yr),l=o>4&&i.tryAirKill(s,h),c=e&&e.hay;if(this.endAir(!l&&!c),this.airStart){let g=Math.hypot(s.x-this.airStart.x,s.z-this.airStart.z);g>8.5?this.addFlow(.2,Math.round(g*9),"Huge Gap"):g>4.2&&this.addFlow(.1+Math.min(.1,g*.01),Math.round(g*6),g>6.5?"Rooftop Gap":"Leap")}if(this.airStart=null,c){this.dipV-=5,this.shake=.2,i.onHayLanding(h);return}if(l){this.dipV-=3,n.x*=.6,n.z*=.6;return}e&&(e.x1-e.x0<.8||e.z1-e.z0<.8)&&a>2&&h>.6&&this.addFlow(.05,45,"Precision");let u=this.rollBuf>0&&o>9;if(u&&(this.rollAnim=1,this.addFlow(.1,40,"Roll"),i.audio.roll(),a>5&&(this.sliding=!1)),o>(u?19:13)){let g=u?.85:.5;n.x*=g,n.z*=g,this.flow*=u?.9:.55,this.shake=Math.min(1,this.shake+.5)}let f=u?24:18.5;o>f&&i.damage((o-f)*5.5+5,"fall"),this.dipV-=Math.min(7,o*.32),i.audio.land(St(o/16,.15,1),s.y>1.2),o>6&&i.noise(s.x,s.y,s.z,(u?5:4+o*.55)*i.stats.noise,.5),i.onLand(o,s)}tryFlip(t){let e=this.game.world,i=this.pos,n=this.vel,s=i.y-e.groundAt(i.x,i.z,i.y,0);if((n.y+Math.sqrt(Math.max(0,n.y*n.y+2*yr*s)))/yr<.42)return;let a="front";t.moveZ<-.4?a="back":Math.abs(t.moveX)>.55&&(a=t.moveX>0?"right":"left"),this.airFlips||(this.flipKind=a),this.flip={t:0,dur:.44,kind:a},this.jumpBuf=0,n.y=Math.max(n.y,2.4),this.game.audio.flip()}endAir(t){let e=this.airFlips;if(this.flip){if(this.flip.t/this.flip.dur>.75)e++;else if(t){this.flip=null,this.airFlips=0,this.bail();return}this.flip=null}if(this.airFlips=0,!e)return;let i={front:"Front Flip",back:"Backflip",left:"Aerial",right:"Aerial"}[this.flipKind];this.game.tally.flips+=e,this.game.onTrick(e===1?i:e===2?"Double "+i:"Triple "+i,90*e*e,e>=2)}bail(){this.vel.x*=.25,this.vel.z*=.25,this.shake=1,this.dipV-=6,this.flow*=.3,this.game.onBail()}tryMantle(t,e,i){let n=this.game.world,s=this.pos;for(let o of i?[.6,.9]:[.6,.9,.3,0]){let a=s.x+t*o,h=s.z+e*o,l=n.groundAt(a,h,s.y+(i?1.3:fd),0),c=l-s.y;if(c<(i?gi+.01:.55)||c>(i?1.3:fd)||o<.5&&c<this.height||n.solidAt(a,l+.5,h)||n.solidAt(a,l+1.1,h))continue;let u=Math.hypot(this.vel.x,this.vel.z),d=c<1.35;return this.mantle={x0:s.x,y0:s.y,z0:s.z,x1:a,y1:l+.02,z1:h,t:0,dur:d?.2+c*.06:.26+c*.15,dx:t,dz:e,speed:d?Math.max(u*.92,5):Math.max(4.4,u*.5),quick:d},this.endAir(!1),this.state="mantle",this.grounded=!1,this.sliding=!1,this.crouch=!1,this.vel.set(0,0,0),this.game.audio.mantle(d),this.addFlow(d?.08:.06,d?30:25,d?"Vault":"Climb"),this.game.noise(s.x,s.y,s.z,3.5*this.game.stats.noise,.3),!0}return!1}updateMantle(t){let e=this.mantle,i=this.pos;e.t+=t/e.dur;let n=Math.min(1,e.t),s=tn(0,.7,n),o=tn(.45,1,n);i.x=Zt(e.x0,e.x1,o),i.z=Zt(e.z0,e.z1,o),i.y=Zt(e.y0,e.y1,s)+(e.quick?Math.sin(n*Math.PI)*.25:0),n>=1&&(this.state="ground",this.grounded=!0,this.mantle=null,this.vel.set(e.dx*e.speed,0,e.dz*e.speed),this.yVis=i.y)}startWallrun(t){let e=this.vel,i=e.x*t.nx+e.z*t.nz,n=e.x-t.nx*i,s=e.z-t.nz*i,o=Math.hypot(n,s);if(o<3)return;n/=o,s/=o,this.endAir(!1),this.state="wallrun",this.wallT=0,this.wallN=[t.nx,t.nz],this.wallDir=[n,s],this.wallSpeed=Math.max(o,8.4),this.lastWall=t.solid,e.y=St(e.y,2.4,4.6);let a=Math.cos(this.yaw),h=-Math.sin(this.yaw);this.wallSide=t.nx*a+t.nz*h<0?1:-1,this.game.audio.wallrun(!0),this.addFlow(.08,35,"Wall Run")}updateWallrun(t,e,i,n){let s=this.game.world,o=this.vel,a=this.pos;this.wallT+=t;let[h,l]=this.wallN,[c,u]=this.wallDir;o.x=c*this.wallSpeed-h*1.5,o.z=u*this.wallSpeed-l*1.5,o.y-=8.5*t,this.flow=Math.min(1,this.flow+t*.15);let d=s.wallAt(a.x-h*(_s+.3),a.z-l*(_s+.3),a.y),f=g=>{this.state="air",this.wallCd=.25,this.wallCdSame=.9,this.game.audio.wallrun(!1),g?(o.x=c*this.wallSpeed*.95+h*5.4,o.z=u*this.wallSpeed*.95+l*5.4,o.y=7.6,this.game.audio.jump(),this.addFlow(.1,30,"Wall Jump"),this.airStart={x:a.x,z:a.z,y:a.y}):(o.x+=h*1.5,o.z+=l*1.5)};this.jumpBuf>0?(this.jumpBuf=0,f(!0)):(!d||this.wallT>1.3||i*c+n*u<-.3)&&f(!1)}enterRope(t){let e=this.pos,i=this.vel;this.endAir(!1),this.state="rope",this.rope=t,this.grounded=!1,this.sliding=!1,this.crouch=!1,this.ropeS=t._t*t.len,this.ropeV=i.x*t.ux+i.z*t.uz,e.x=t.ax+t.ux*this.ropeS,e.z=t.az+t.uz*this.ropeS,e.y=t._y,i.y=0,this.game.audio.rope(),this.addFlow(.05,20,Math.abs(t.slope)>.1?"Zip Line":"Tightrope")}updateRope(t,e,i,n,s,o){let a=this.rope,h=this.pos,l=this.vel,c=this.game,u=i*a.ux+n*a.uz,d=Math.abs(a.slope)>.1;if(d){let x=a.slope<0?1:-1;this.ropeV+=x*(4+Math.abs(a.slope)*26)*t,this.ropeV=St(this.ropeV,-17,17),this.flow=Math.min(1,this.flow+t*.12)}else{let x=u*6.2*(1+this.flow*.3);this.ropeV+=St(x-this.ropeV,-26*t,26*t),Math.abs(this.ropeV)>2&&(this.flow=Math.min(1,this.flow+t*.07))}this.ropeS+=this.ropeV*t;let f=this.ropeS/a.len;h.x=a.ax+a.dx*f,h.z=a.az+a.dz*f,h.y=a.ay+(a.by-a.ay)*f,l.x=a.ux*this.ropeV,l.z=a.uz*this.ropeV,l.y=0;let g=x=>{this.state="air",this.rope=null,this.grounded=!1,this.airStart={x:h.x,z:h.z,y:h.y},x&&(l.y=cd,c.audio.jump(),this.jumpBuf=0,l.x+=s*1.5,l.z+=o*1.5),h.y+=.05};this.jumpBuf>0?g(!0):(f<0||f>1)&&(this.state="ground",this.grounded=!0,this.rope=null),this.stepAcc+=Math.abs(this.ropeV)*t,this.stepAcc>1.6&&!d&&(this.stepAcc=0,c.audio.step(!0,.2))}tryHook(){let t=this.game;if(t.stats.hookRange<=0||this.hookCd>0||this.state==="hook"||this.state==="mantle")return;let e=this.camera.position,i=new D;this.camera.getWorldDirection(i);let n=null,s=Math.cos(.3);for(let o of t.world.anchors){let a=o.x-e.x,h=o.y-e.y,l=o.z-e.z,c=Math.hypot(a,h,l);if(c>t.stats.hookRange||c<3)continue;let u=(a*i.x+h*i.y+l*i.z)/c;u>s&&t.world.los(e.x,e.y,e.z,o.x,o.y,o.z)&&(s=u,n=o)}if(!n){t.audio.deny();return}this.endAir(!1),this.hook={a:n,t:0},this.state="hook",this.grounded=!1,this.sliding=!1,this.crouch=!1,this.rope=null,this.airStart={x:this.pos.x,z:this.pos.z,y:this.pos.y},t.audio.hook(),this.addFlow(.1,40,"Kaginawa")}updateHook(t,e){let i=this.hook,n=this.pos,s=this.vel,o=this.game.world;i.t+=t;let a=i.a.x-n.x,h=i.a.y-(n.y+1.3),l=i.a.z-n.z,c=Math.hypot(a,h,l)||1,u=Math.min(26,8+i.t*60);s.x=Wt(s.x,a/c*u,10,t),s.y=Wt(s.y,h/c*u,10,t),s.z=Wt(s.z,l/c*u,10,t);let d=Math.max(1,Math.ceil(u*t/.2));for(let f=0;f<d;f++){n.x+=s.x*t/d,n.y+=s.y*t/d,n.z+=s.z*t/d,o.collide(n,_s,ud,this.out);let g=o.groundAt(n.x,n.z,n.y,.3);n.y<g&&(n.y=g)}if(this.flow=Math.min(1,this.flow+t*.2),c<2||i.t>2.4||this.jumpBuf>0){let f=Math.hypot(a,l)||1;s.x=a/f*5.5,s.z=l/f*5.5,s.y=this.jumpBuf>0?Math.max(s.y,6.5):5.2,this.jumpBuf=0,this.state="air",this.hook=null,this.hookCd=.7}}updateCamera(t,e,i){let n=this.camera,s=this.pos,o=this.crouch||this.sliding;this.eye=Wt(this.eye,o?ux:dd,14,t),this.grounded&&this.state==="ground"?this.yVis=Math.abs(s.y-this.yVis)>1.2?s.y:Wt(this.yVis,s.y,22,t):this.yVis=s.y,this.dipV+=(-this.dip*130-this.dipV*16)*t,this.dip+=this.dipV*t,this.dip=St(this.dip,-.5,.2);let a=this.grounded&&!this.sliding&&this.speed>1.5;this.bobAmt=Wt(this.bobAmt,a?Math.min(1,this.speed/Da):0,8,t),this.bob+=t*(this.crouch?7:11.5)*(.5+.5*Math.min(1.3,this.speed/Da));let h=Math.sin(this.bob*2)*.035*this.bobAmt,l=Math.cos(this.bob)*.022*this.bobAmt,c=-e*.02*(this.grounded?1:.5);this.state==="wallrun"&&(c=this.wallSide*.2),this.sliding&&(c+=.06),this.state==="rope"&&(c=Math.sin(this.bob*.5)*.03),this.roll=Wt(this.roll,c,9,t);let u=0;if(this.rollAnim>0){this.rollAnim=Math.max(0,this.rollAnim-t*2.6);let p=1-this.rollAnim;u=-Math.sin(p*Math.PI)*.55,this.dip=Math.min(this.dip,-.25*Math.sin(p*Math.PI))}this.state==="mantle"&&this.mantle&&(u-=Math.sin(Math.min(1,this.mantle.t)*Math.PI)*.16),this.shake=Math.max(0,this.shake-t*2.4);let d=this.shake*this.shake*.05;n.position.set(s.x+Math.cos(this.yaw)*l+(Math.random()-.5)*d,this.yVis+this.eye+h+this.dip+(Math.random()-.5)*d,s.z-Math.sin(this.yaw)*l);let f=0,g=0;if(this.flip){let p=tn(0,1,this.flip.t/this.flip.dur)*Math.PI*2;this.flip.kind==="front"?f=-p:this.flip.kind==="back"?f=p:g=this.flip.kind==="right"?-p:p}n.rotation.set(this.pitch+u+f,this.yaw,this.roll+g);let x=Math.hypot(this.vel.x,this.vel.y*.5,this.vel.z),m=this.game.settings.fov+tn(7,17,x)*13+(this.state==="hook"?8:0)+(this.sliding?4:0)+(this.flip?10:0)+this.game.fovKick;this.fov=Wt(this.fov,m,5,t),this.applyFov(this.fov),this.updateArms(t)}applyFov(t){let e=this.camera,i=e.aspect,n=1.45,s=t;i<n&&(s=Math.min(106,2*Math.atan(Math.tan(t*Math.PI/360)*Math.min(2.4,n/i))*180/Math.PI)),Math.abs(e.fov-s)>.01&&(e.fov=s,e.updateProjectionMatrix());let o=Math.max(.62,Math.min(1,i/n));this.arms.scale.x!==o&&this.arms.scale.setScalar(o)}buildArms(){let t=e=>{let i=new he,n=2764629,s=2367534,o=15327176,a=15250838;i.box(-.046,-.046,-.2,.046,.046,.16,n),i.box(-.052,-.052,-.245,.052,.052,-.2,o),i.box(-.05,-.05,-.17,.05,.05,-.145,o),i.box(-.05,-.03,-.345,.05,.03,-.245,s);for(let c=0;c<4;c++){let u=-.05+c*.026;i.box(u,-.034,-.42+(c===0||c===3?.012:0),u+.022,.012,-.345,a),i.box(u,-.034,-.375,u+.022,.016,-.345,s)}i.box(e*-.082,-.03,-.33,e*-.05,.012,-.26,a);let h=i.build(),l=new Nt(h,this.game.mats.toon);return l.frustumCulled=!1,l.castShadow=!1,l.receiveShadow=!0,l};this.armR=t(1),this.armL=t(-1),this.arms=new Ae,this.arms.add(this.armR,this.armL),this.arms.position.set(0,0,-.22),this.camera.add(this.arms),this.armP={r:new D(.3,-.5,-.1),l:new D(-.3,-.5,-.1),rr:new D,lr:new D},this.wrapColor=new yt(15327176),this.hookLine=new Nt(new Ke(.03,.03,1),new Ue({color:15915424})),this.hookLine.frustumCulled=!1,this.hookLine.visible=!1}setWrapColor(t){let e=new yt(t),i=new yt(15327176);for(let n of[this.armR,this.armL]){let s=n.geometry.attributes.color;n.userData.base||(n.userData.base=s.array.slice());let o=n.userData.base;for(let a=0;a<s.count;a++){let h=o[a*3],l=o[a*3+1],c=o[a*3+2];Math.abs(h-i.r)+Math.abs(l-i.g)+Math.abs(c-i.b)<.01&&s.setXYZ(a,e.r,e.g,e.b)}s.needsUpdate=!0}}updateArms(t){let e=this.armP,i=[.36,-.62,.05],n=[.7,.3,0],s=[-.36,-.62,.05],o=[.7,-.3,0],a=St(this.speed/Da,0,1.3),h=this.state;if(h==="mantle"&&this.mantle){let c=Math.min(1,this.mantle.t),u=tn(.15,.9,c);i=[.24,Zt(-.3,-.62,u),-.1],s=[-.24,Zt(-.3,-.62,u),-.1],n=[Zt(.35,-.35,u),.3,0],o=[Zt(.35,-.35,u),-.3,0]}else if(h==="wallrun"){let c=this.wallSide,u=[c*.44,-.3,-.02],d=[.9,-c*.55,-c*.5],f=[-c*.36,-.5,.04],g=[.9,c*.3,0];c>0?(i=u,n=d,s=f,o=g):(s=u,o=d,i=f,n=g)}else if(h==="rope"){let c=Math.sin(this.bob*.5)*.06;i=[.46,-.44+c,.1],n=[.45,-.95,0],s=[-.46,-.44-c,.1],o=[.45,.95,0],Math.abs(this.rope?.slope||0)>.1&&(i=[.2,-.28,.02],n=[1.35,.12,0],s=[-.2,-.28,.02],o=[1.35,-.12,0])}else if(h==="hook")i=[.24,-.36,-.04],n=[1.08,.2,0],s=[-.36,-.56,.05],o=[.8,-.3,0];else if(this.sliding)i=[.38,-.5,.02],n=[.6,.5,.2],s=[-.46,-.62,.14],o=[.15,-.9,0];else if(this.flip)i=[.24,-.26,-.08],n=[1.35,.4,.3],s=[-.24,-.26,-.08],o=[1.35,-.4,-.3];else if(this.grounded){if(this.crouch)i=[.3,-.52,0],n=[.9,.45,0],s=[-.3,-.52,0],o=[.9,-.45,0];else if(a>.2){let c=Math.sin(this.bob),u=a;i=[.35,-.58+Math.max(0,c)*.13*u,.05-c*.1*u],n=[.72+c*.42*u,.3,0],s=[-.35,-.58+Math.max(0,-c)*.13*u,.05+c*.1*u],o=[.72-c*.42*u,-.3,0]}}else{let c=St(this.vel.y/8,-1,1);i=[.4,-.46+c*.05,0],n=[.95+c*.2,.12,-.2],s=[-.4,-.46+c*.05,0],o=[.95+c*.2,-.12,.2]}if(this.throwT>0){let c=1-this.throwT/.3;i=[.3-c*.2,-.36-c*.12,-.05-Math.sin(c*Math.PI)*.12],n=[1.1-c*.9,.5+c*.7,.3]}let l=h==="mantle"?22:13;if(e.r.set(Wt(e.r.x,i[0],l,t),Wt(e.r.y,i[1],l,t),Wt(e.r.z,i[2],l,t)),e.l.set(Wt(e.l.x,s[0],l,t),Wt(e.l.y,s[1],l,t),Wt(e.l.z,s[2],l,t)),e.rr.set(Wt(e.rr.x,n[0],l,t),Wt(e.rr.y,n[1],l,t),Wt(e.rr.z,n[2],l,t)),e.lr.set(Wt(e.lr.x,o[0],l,t),Wt(e.lr.y,o[1],l,t),Wt(e.lr.z,o[2],l,t)),this.armR.position.copy(e.r),this.armR.rotation.set(e.rr.x,e.rr.y,e.rr.z,"YXZ"),this.armL.position.copy(e.l),this.armL.rotation.set(e.lr.x,e.lr.y,e.lr.z,"YXZ"),this.hook){let c=this.hook.a,u=this.camera,d=new D(.2,-.12,-.6).applyMatrix4(u.matrixWorld);u.updateMatrixWorld();let f=new D(c.x,c.y,c.z),g=d.distanceTo(f);this.hookLine.position.copy(d).lerp(f,.5),this.hookLine.scale.set(1,1,g),this.hookLine.lookAt(f),this.hookLine.visible=!0}else this.hookLine.visible=!1}};var Fa="nezumi-save-v1",ka=[{key:"dusk",name:"Merchant Quarter",jp:"\u65E5\u672C\u6A4B",time:"Dusk",skyTop:3487103,skyMid:9071808,skyHor:16099764,sun:16765594,cloudA:16763328,cloudB:12159684,sunAz:1,sunEl:.5,sunInt:3.3,stars:.15,hemiSky:9406184,hemiGround:12946822,hemiInt:2.05,fog:13608655,fogDensity:.0042,ink:2234424,tint:[1.02,1,1],tile:[9278392,8357549,10067904],ridge:5593730,under:4010832,plaster:[15984070,15390642,14470061,16248024],wood:4928323,woodMid:8148812,woodLight:10845020,ground:13215086,stone:10130600,glow:16762734,lantern:16747082,accent:[2898552,12071994,15327951,3828572],red:13124911,gold:15906106,blossom:[16234959,16765919,15177143],pine:[3889746,3033672],trunk:5914439,water:5924792,waterHi:12167654,hill:7309930,snow:16050930,far:12034763,farRoof:9408437},{key:"moon",name:"Fukagawa Canals",jp:"\u6DF1\u5DDD",time:"Moonrise",skyTop:790582,skyMid:2305140,skyHor:5926856,sun:14083327,cloudA:7308504,cloudB:2963584,sunAz:-.9,sunEl:.62,sunInt:2.5,stars:1,hemiSky:5927128,hemiGround:4867456,hemiInt:2.2,fog:3951254,fogDensity:.0048,ink:657954,tint:[.98,1,1.06],tile:[6451883,5662112,7175606],ridge:3555188,under:2040392,plaster:[13422826,12567778,11646678,14343408],wood:2959948,woodMid:5129832,woodLight:8023172,ground:7632028,stone:6975384,glow:16760418,lantern:16751178,accent:[2042470,11022910,14672626,3107448],red:11680314,gold:15906106,blossom:[12167398,14076150,10128080],pine:[2375770,1782608],trunk:3682382,water:2437244,waterHi:10466047,hill:3097712,snow:13621494,far:4543134,farRoof:4872086},{key:"festival",name:"Asakusa Festival",jp:"\u6D45\u8349",time:"Festival Night",skyTop:1707838,skyMid:5974650,skyHor:15227004,sun:16756852,cloudA:16747148,cloudB:8010378,sunAz:.78,sunEl:.55,sunInt:2.9,stars:.6,fire:1,hemiSky:9066184,hemiGround:11555946,hemiInt:2.1,fog:9785487,fogDensity:.0046,ink:1707050,tint:[1.04,.99,1],tile:[7298970,6443916,8088230],ridge:4207198,under:2759742,plaster:[15785154,15125936,14204582,16180946],wood:4531770,woodMid:8013124,woodLight:11037266,ground:12027742,stone:9075352,glow:16757850,lantern:16734780,accent:[12071994,14178094,15918799,5910392],red:14172463,gold:16237130,blossom:[16752576,16761558,15233180],pine:[3820122,2898510],trunk:4861757,water:4864650,waterHi:16751284,hill:5917304,snow:15914726,far:9067160,farRoof:6967178},{key:"dawn",name:"Castle Town",jp:"\u57CE\u4E0B\u753A",time:"First Light",skyTop:4158392,skyMid:15774876,skyHor:16769700,sun:16773316,cloudA:16773336,cloudB:15247002,sunAz:-.95,sunEl:.45,sunInt:3.5,stars:0,hemiSky:9614570,hemiGround:14857358,hemiInt:2.15,fog:15912366,fogDensity:.004,ink:2760760,tint:[1.02,1,.98],tile:[7636127,6846610,8425642],ridge:4608878,under:3814728,plaster:[16774626,16181452,15523008,16775920],wood:4864576,woodMid:8806474,woodLight:11831906,ground:14466188,stone:11051688,glow:16765562,lantern:16747082,accent:[2902664,12071994,16051416,3832418],red:13124911,gold:15906106,blossom:[16762066,16768998,15900856],pine:[4286042,3364430],trunk:6047294,water:7314128,waterHi:16773320,hill:8822904,snow:16775924,far:14729138,farRoof:10986164}],zi=[{id:1,name:"The Rat Runs",jp:"\u9F20\u8D70\u308B",d:0,seed:1101,rows:8,sentries:1,patrols:1,towers:0,feats:{b:0,c:0,k:.04},par:0,intro:"The magistrate's strongbox is lighter tonight. Cross the rooftops and reach the kite.",hints:["move","jump","mantle"]},{id:2,name:"Lantern Light",jp:"\u63D0\u706F",d:0,seed:2207,rows:10,sentries:4,patrols:2,towers:0,feats:{b:.12,c:0,k:.06},par:0,intro:"The night watch carries lanterns. Stay out of their light \u2014 the shadows are yours.",hints:["sneak","shadow","slide"]},{id:3,name:"The Fire Tower",jp:"\u706B\u306E\u898B\u6AD3",d:0,seed:3319,rows:12,sentries:5,patrols:2,towers:2,feats:{b:.15,c:0,k:.1},par:0,intro:"Lookouts sweep the tiles from the fire towers. Time your run between the beams.",hints:["tower","shuriken","rope"]},{id:4,name:"Low Water",jp:"\u5F15\u304D\u6F6E",d:1,seed:4421,rows:12,sentries:5,patrols:3,towers:1,feats:{b:.1,c:.22,k:.1},par:0,intro:"Fukagawa. Canals cut the district apart \u2014 ride the lantern lines across.",hints:["rope","smoke"]},{id:5,name:"Hook and Line",jp:"\u9264\u7E04",d:1,seed:5531,rows:14,sentries:7,patrols:3,towers:2,feats:{b:.14,c:.22,k:.16},par:0,intro:"Gold rings hang from the tall storehouses. A kaginawa hook would make short work of them.",hints:["hook","wallrun"]},{id:6,name:"Moon Over Fukagawa",jp:"\u6DF1\u5DDD\u306E\u6708",d:1,seed:6647,rows:15,sentries:8,patrols:4,towers:3,feats:{b:.16,c:.26,k:.14},par:0,intro:"A full moon and a full garrison. Every roof casts a shadow; use them all.",hints:[]},{id:7,name:"Festival Crowd",jp:"\u796D\u308A",d:2,seed:7753,rows:15,sentries:8,patrols:5,towers:2,feats:{b:.3,c:.08,k:.12},par:0,intro:"Asakusa is strung with lanterns for the festival. Bright streets, long ropes.",hints:[]},{id:8,name:"Red Gate",jp:"\u8D64\u9580",d:2,seed:8861,rows:16,sentries:10,patrols:5,towers:3,feats:{b:.26,c:.12,k:.16},par:0,intro:"They have doubled the watch around the temple. Do not let them corner you.",hints:[]},{id:9,name:"Fireworks",jp:"\u82B1\u706B",d:2,seed:9973,rows:18,sentries:11,patrols:6,towers:4,feats:{b:.28,c:.14,k:.18},par:0,intro:"When the sky burns, nobody looks at the tiles. Almost nobody.",hints:[]},{id:10,name:"Under the Keep",jp:"\u57CE\u4E0B",d:3,seed:10091,rows:18,sentries:12,patrols:6,towers:4,feats:{b:.18,c:.16,k:.22},par:0,intro:"The castle town wakes early. The shadows are long, but they are leaving.",hints:[]},{id:11,name:"The Long Chase",jp:"\u8FFD\u8DE1",d:3,seed:11117,rows:20,sentries:14,patrols:7,towers:5,feats:{b:.2,c:.18,k:.22},par:0,intro:"Every constable in Edo knows your name now. Run.",hints:[]},{id:12,name:"First Light",jp:"\u591C\u660E\u3051",d:3,seed:12241,rows:22,sentries:16,patrols:8,towers:6,feats:{b:.22,c:.2,k:.24},par:0,intro:"One last roofline between you and the harbour. Make it a legend.",hints:[]}],dx=[["steal","rolling","clear",["move","job","jump","takedown","flip","combo"]],["pickpocket","ascent","mist",["sneak","shadow","slide","hay"]],["assassinate","peaks","clear",["tower","shuriken"]],["signal","descent","rain",["rope","smoke"]],["steal","valley","snow",["hook","wallrun"]],["assassinate","rolling","clear",[]],["signal","peaks","blossom",[]],["assassinate","ascent","rain",[]],["steal","valley","blossom",[]],["pickpocket","descent","mist",[]],["assassinate","peaks","rain",[]],["steal","ascent","snow",[]]];zi.forEach((r,t)=>{[r.mission,r.profile,r.weather,r.hints]=dx[t],r.hound=6.9+t*.13,r.par=Math.round(r.rows*5.6+22)});var fx=["steal","assassinate","pickpocket","signal"],px=["rolling","ascent","descent","valley","peaks"],mx=["clear","clear","rain","snow","mist","blossom"];function pd(r,t){return r.mission=fx[t%4],r.profile=px[(t>>>3)%5],r.weather=mx[(t>>>7)%6],r.par=Math.round(r.rows*5.6+22),r}function md(r,t){let e=Math.min(r,14),i={id:100+r,endless:!0,name:`Endless Night ${r}`,jp:"\u7121\u9650",d:(r-1+t%4)%4,seed:t*7919+r*104729>>>0,rows:10+Math.min(12,e),sentries:4+e,patrols:2+Math.floor(e/2),towers:1+Math.floor(e/3),feats:{b:.2,c:.18,k:.2},par:0,intro:"No gate, no dawn. How far can the Rat run?",hints:[],hound:7.4+Math.min(1.4,e*.1)};return pd(i,t*7919+r*104729>>>0)}function gd(r){let t={id:99,daily:!0,name:"Daily Night",jp:"\u4ECA\u5BB5",d:r%4,seed:r*2654435761>>>0,rows:16,sentries:10,patrols:5,towers:3,feats:{b:.22,c:.18,k:.18},par:0,hound:7.9,intro:"Tonight's rooftops, the same for every thief in the city. One night, one best run.",hints:[]};return pd(t,r*2654435761>>>0)}var Ua=[{key:"tabi",name:"Silent Tabi",jp:"\u8DB3\u888B",desc:"Softer soles. Your footsteps carry less far.",costs:[60,150,300]},{key:"cloak",name:"Shadow Cloak",jp:"\u5F71\u8863",desc:"Dyed in ink. Watchmen take longer to make you out.",costs:[80,190,360]},{key:"vigor",name:"Iron Body",jp:"\u9244\u8EAB",desc:"Take more punishment before the cuffs go on.",costs:[70,170,320]},{key:"pouch",name:"Shuriken Pouch",jp:"\u624B\u88CF\u5263",desc:"Carry more throwing stars.",costs:[50,130,260]},{key:"smoke",name:"Smoke Bombs",jp:"\u7159\u7389",desc:"Carry more smoke bombs to vanish mid-chase.",costs:[90,230]},{key:"hook",name:"Kaginawa",jp:"\u9264\u7E04",desc:"Grappling hook. Latch onto gold rings and fly.",costs:[120,220,340]},{key:"charm",name:"Lucky Charm",jp:"\u304A\u5B88\u308A",desc:"Koban leap into your hands from further away.",costs:[60,160]},{key:"wind",name:"Wind Step",jp:"\u98A8\u8DB3",desc:"Flow carries you faster and lasts longer.",costs:[100,240]}],_r=[{key:"cream",name:"Undyed",color:15327176,need:0},{key:"vermilion",name:"Vermilion",color:14172463,need:6},{key:"jade",name:"Jade",color:4170631,need:12},{key:"gold",name:"Koban Gold",color:15906106,need:20},{key:"violet",name:"Wisteria",color:10121184,need:28},{key:"white",name:"Ghost White",color:16777215,need:36}],kh={suspicious:[["\u4F55\u5974\u3060?","Who goes there?"],["\u3093? \u5C4B\u6839\u306E\u4E0A\u304B?","Hm? Up on the roof?"],["\u7269\u97F3\u304C\u3057\u305F\u305E\u3002","I heard something."]],spotted:[["\u66F2\u8005\u3060! \u5C4B\u6839\u306E\u4E0A\u3060!","Intruder! On the rooftops!"],["\u5FA1\u7528\u3060! \u5FA1\u7528\u3060!","Halt! In the name of the law!"],["\u3042\u305D\u3053\u3060! \u9003\u304C\u3059\u306A!","There! Don't let them escape!"]],chase:[["\u5F85\u3066!","Stop!"],["\u56F2\u3081!","Surround them!"],["\u9003\u304C\u3059\u306A!","Don't let them get away!"],["\u56DE\u308A\u8FBC\u3081!","Cut them off!"]],lost:[["\u898B\u5931\u3063\u305F\u2026","Lost them..."],["\u3069\u3053\u3078\u6D88\u3048\u305F\u2026?","Where did they vanish to...?"],["\u307E\u3060\u8FD1\u304F\u306B\u3044\u308B\u306F\u305A\u3060\u3002","They must still be close."]],calm:[["\u6C17\u306E\u305B\u3044\u304B\u2026","Must be my imagination..."],["\u306D\u305A\u307F\u304B\u3002","Just a rat."],["\u7570\u5E38\u306A\u3057\u3002","All clear."]],blind:[["\u706F\u308A\u304C\u6D88\u3048\u305F!","My light's gone out!"],["\u76EE\u304C!","My eyes!"]],smoke:[["\u7159\u3060!","Smoke!"],["\u4F55\u3082\u898B\u3048\u3093!","I can't see a thing!"]],noise:[["\u4F55\u306E\u97F3\u3060?","What was that sound?"],["\u3042\u3063\u3061\u304B?","Over there?"]],body:[["\u4F55\u4E8B\u3060!?","What happened?!"],["\u3084\u3089\u308C\u305F! \u66F2\u8005\u3060!","Man down! Intruder!"],["\u8AB0\u306E\u4ED5\u696D\u3060!","Who did this?!"]],pickpocket:[["\u8CA1\u5E03\u304C\u2026\u306A\u3044!","My purse... it's gone!"],["\u5E33\u7C3F\u304C! \u6CE5\u68D2\u3060!","The ledger! Thief!"]]};var gx=.35,xx=1.75,Uh=new D,Oa={nx:0,nz:0,solid:null,top:0},za=null;function vr(){if(za)return za;let r=2304597,t=1711938,e=14855564,i=5068152,n=1512746,s=15260864,o=12174038,a=15906106,h=13124911,l=new he;l.box(-.25,.85,-.15,.25,1.45,.15,r),l.box(-.27,.58,-.17,.27,.9,.17,t),l.box(-.26,.86,-.165,.26,.99,.165,s),l.box(-.11,1.45,-.11,.11,1.72,.11,e),l.box(-.1,1.1,.15,.1,1.32,.165,h),l.cyl(0,1.66,0,.4,.06,.2,8,n),l.box(-.05,1.7,-.33,.05,1.78,-.27,a);let c=new he;c.box(-.28,.5,-.19,.28,1.47,.19,5910392),c.box(-.3,.4,-.21,.3,.62,.21,4005717),c.box(-.29,.92,-.2,.29,1.04,.2,a),c.box(-.12,1.47,-.12,.12,1.74,.12,e),c.box(-.09,1.72,-.14,.09,2.12,.1,n),c.box(-.31,1.18,-.21,.31,1.42,.21,7092878);let u=new he;u.box(-.24,.6,-.15,.24,1.44,.15,7031354),u.box(-.11,1.44,-.11,.11,1.72,.11,e),u.cyl(0,1.64,0,.36,.05,.18,8,13214570),u.box(-.17,.82,.15,.17,1.2,.33,3811882),u.box(-.12,1.2,.18,.12,1.28,.3,a,{glow:1.6});let d=new he;d.box(-.105,-.6,-.115,.105,.02,.115,i),d.box(-.1,-.7,-.22,.1,-.6,.1,n);let f=new he;f.box(-.07,-.52,-.08,.07,.04,.08,r),f.box(-.055,-.64,-.06,.055,-.52,.06,e),f.box(-.016,-.62,-.5,.016,-.585,-.02,o),f.box(-.016,-.62,-.2,.06,-.585,-.17,o);let g=new he;g.box(-.07,-.52,-.08,.07,.04,.08,r),g.box(-.055,-.64,-.06,.055,-.52,.06,e);let x=new he;x.box(-.012,-.05,-.012,.012,0,.012,n),x.box(-.14,-.1,-.14,.14,-.05,.14,n),x.box(-.14,-.5,-.14,.14,-.45,.14,n);let m=new Ws(1,1,22,1,!0);m.translate(0,-.5,0),m.rotateX(Math.PI/2);let p=[],_=m.attributes.position;for(let S=0;S<_.count;S++){let y=.22+.78*Math.pow(1-St(-_.getZ(S),0,1),1.4);p.push(y,y,y)}m.setAttribute("color",new Qt(p,3));let M=new he;M.box(-.16,-.008,-.035,.16,.008,.035,14212332),M.box(-.035,-.008,-.16,.035,.008,.16,14212332);let v=new he;v.box(-.012,-.012,-.45,.012,.012,.45,14272416),v.box(-.03,-.03,-.55,.03,.03,-.45,4475494),v.box(-.05,-.002,.3,.05,.002,.45,13124911);let T=new Di(.15,.15,.04,10);return T.scale(1.35,1,.85),T.rotateX(Math.PI/2),za={body:l.build(),vip:c.build(),courier:u.build(),leg:d.build(),armR:f.build(),armL:g.build(),lanFrame:x.build(),lanGlow:new Ke(.25,.35,.25).translate(0,-.275,0),cone:m,star:M.build(),arrow:v.build(),koban:T,ico:new Ki(1,0)},za}var Mr=class{constructor(t,e,i=null){this.A=t,this.def=e,this.tower=i;let n=vr(),s=t.game.mats,o=this.group=new Ae;if(this.role=e&&e.role||null,this.body=new Nt(this.role==="target"?n.vip:this.role==="courier"?n.courier:n.body,s.toon),this.legL=new Nt(n.leg,s.toon),this.legL.position.set(-.13,.7,0),this.legR=new Nt(n.leg,s.toon),this.legR.position.set(.13,.7,0),this.armL=new Nt(n.armL,s.toon),this.armL.position.set(-.33,1.4,0),this.armR=new Nt(n.armR,s.toon),this.armR.position.set(.33,1.4,0),this.lan=new Ae,this.lan.position.set(0,-.6,0),this.lanFrame=new Nt(n.lanFrame,s.toon),this.lanGlow=new Nt(n.lanGlow,t.lanternMat),this.lan.add(this.lanFrame,this.lanGlow),this.armL.add(this.lan),o.add(this.body,this.legL,this.legR,this.armL,this.armR),(this.role==="target"||this.role==="courier")&&(this.mark=new Nt(new qs(.28,0),t.markMat),this.mark.scale.set(.8,1.3,.8),this.mark.position.y=2.75,o.add(this.mark),this.lan.visible=this.role!=="target"),this.downT=-1,o.traverse(a=>{a.isMesh&&(a.castShadow=a!==this.lanGlow,a.receiveShadow=!1)}),this.coneMat=new Ue({vertexColors:!0,color:16761962,blending:Zi,transparent:!0,depthWrite:!1,side:ti,opacity:.1,fog:!1}),this.cone=new Nt(n.cone,this.coneMat),this.cone.frustumCulled=!1,this.cone.renderOrder=6,t.group.add(o,this.cone),this.pos=new D,this.vel=new D,this.yaw=0,this.lookYaw=0,this.lookPitch=0,this.grounded=!0,this.state="patrol",this.aware=0,this.wp=0,this.wait=0,this.t=Math.random()*10,this.anim=0,this.attackT=0,this.attackCd=0,this.stun=0,this.climb=null,this.jumpCd=0,this.stuck=0,this.barkCd=0,this.target=null,this.sees=!1,this.extra=!1,this.dead=!1,this.lit=!0,this.side=0,this.sideT=0,i)this.range=i.range,this.half=.17,this.pos.set(i.x,i.y,i.z),this.sweep=Math.random()*6,this.aim=new D(i.aimX,6,i.aimZ),this.aimCur=this.aim.clone(),this.fireT=2,this.lampOff=0,this.lamp=new Nt(new Ke(.5,.5,.6),t.lanternMat),this.lamp.position.set(i.x,i.y+1.35,i.z),t.group.add(this.lamp),this.coneMat.opacity=.3;else{this.range=e.kind==="patrol"?15:17,this.half=.56;let a=e.pts[0];this.pos.set(a[0],t.game.world.highest(a[0],a[1]),a[1]),this.home=e.pts.map(h=>[h[0],h[1]]),this.yaw=e.facing||0}this.eye=new D,this.dir=new D(0,0,-1),this.sync(0)}get speedPatrol(){return this.def&&this.def.kind==="patrol"?1.9:1.5}perceive(t,e){let i=this.A,n=i.game.world;if(this.stun>0||this.tower&&this.lampOff>0)return 0;let s=t.pos.x,o=t.chestY,a=t.pos.z,h=s-this.eye.x,l=o-this.eye.y,c=a-this.eye.z,u=Math.hypot(h,l,c),d=t.inShadow,f=t.crouch||t.sliding,g=this.range*(e?1.5:1)*(d&&!this.tower?.72:1)*(f?.85:1);if(u>g)return 0;let x=(h*this.dir.x+l*this.dir.y+c*this.dir.z)/(u||1),m=Math.cos(this.half*(e?1.8:1)),p=u<2.4&&!f;if(x<m&&!p&&!(e&&u<9)||!n.los(this.eye.x,this.eye.y,this.eye.z,s,o,a)||i.smokeBlocks(this.eye,s,o,a))return 0;let _=1;f&&(_*=.55),d&&!this.tower&&(_*=.5),t.speed>7&&!f&&(_*=1.25),t.speed<.6&&(_*=.8),_*=i.game.stats.detect;let M=1-u/g;return _*(this.tower?1.3+M:.4+M*1.8)}update(t,e){let i=this.A,n=i.game,s=n.world;if(this.t+=t,this.barkCd-=t,this.attackCd-=t,this.jumpCd-=t,this.tower)return this.updateTower(t,e);if(this.downT>=0)return this.updateDown(t);let o=i.alert;if(this.role&&this.state==="chase"&&(this.state="search",this.wait=4),this.stun>0)return this.stun-=t,this.aware=0,this.lit=!1,this.stun<=0&&(this.lit=!0,this.state=o==="alert"?"chase":"suspicious",this.wait=3,this.target={x:e.pos.x,z:e.pos.z}),this.physics(t,0,0,0),this.sync(t);let a=this.perceive(e,this.state==="chase");this.sees=a>0,this.state!=="chase"&&(a>0?this.aware=Math.min(1,this.aware+a*t*(o==="search"?1.6:1)):this.aware=Math.max(0,this.aware-t*.3),this.aware>=1?i.raiseAlert(this):this.aware>.35&&this.state==="patrol"&&(this.state="suspicious",this.wait=2.2,this.target={x:e.pos.x,z:e.pos.z},this.bark("suspicious"),n.audio.suspicious()));let h=0,l=0,c=0,u=(d,f,g)=>{let x=d-this.pos.x,m=f-this.pos.z,p=Math.hypot(x,m);return p>.3&&(h=x/p,l=m/p,c=g),p};switch(this.state){case"patrol":{if(this.wait>0)this.wait-=t,this.lookYaw=Math.sin(this.t*.9)*.9;else{let d=this.home[this.wp];this.lookYaw=Wt(this.lookYaw,Math.sin(this.t*.6)*.35,3,t),u(d[0],d[1],this.speedPatrol)<.5&&(this.wp=(this.wp+1)%this.home.length,this.wait=1.5+Math.random()*2.5)}break}case"suspicious":{this.wait-=t,a>0&&(this.target={x:e.pos.x,z:e.pos.z}),this.face(this.target.x,this.target.z,t,5),this.lookYaw=Wt(this.lookYaw,0,6,t),this.wait<=0&&(this.aware>.5?(this.state="investigate",this.wait=5):(this.state="patrol",this.wait=.5,this.aware<.2&&this.bark("calm")));break}case"investigate":{this.wait-=t,(u(this.target.x,this.target.z,2.6)<1.2||this.wait<=0||this.blocked)&&(this.state="search",this.wait=3.5);break}case"search":{this.wait-=t,this.lookYaw=Math.sin(this.t*1.7)*1.2,this.target&&this.wait>2.5&&u(this.target.x,this.target.z,3),this.wait<=0&&o!=="alert"&&o!=="search"&&(this.state="patrol",this.wait=.5);break}case"chase":{this.lookYaw=Wt(this.lookYaw,0,8,t);let d=i.lastKnown,f=d.x-this.pos.x,g=d.z-this.pos.z,x=Math.hypot(f,g),m=e.pos.y-this.pos.y,p=Math.hypot(e.pos.x-this.pos.x,e.pos.z-this.pos.z);if(this.attackT>0)this.attackT-=t,this.face(e.pos.x,e.pos.z,t,10),this.attackT<=0&&(this.attackCd=1.3,p<2.4&&Math.abs(m)<1.7&&this.sees&&(n.damage(34,"guard",this),n.audio.thunk()));else if(p<1.9&&Math.abs(m)<1.5&&this.attackCd<=0&&this.sees)this.attackT=.42;else if(x>1){let _=f/x,M=g/x;if(this.sideT>0){this.sideT-=t;let v=-M*this.side,T=_*this.side;_=_*.3+v,M=M*.3+T;let S=Math.hypot(_,M);_/=S,M/=S}h=_,l=M,c=this.def.kind==="patrol"?6.6:7.3,this.progT=(this.progT||0)+t,this.progT>3.5&&((this.progD||1e9)-x<2.5&&!this.sees&&x>6&&i.relocate(this),this.progD=x,this.progT=0),this.barkCd<=0&&Math.random()<t*.25&&this.bark("chase")}else i.alert==="search"&&(this.state="search",this.wait=4,this.target={x:d.x,z:d.z});break}}this.physics(t,h,l,c),this.sync(t)}updateDown(t){this.downT+=t,this.sees=!1,this.aware=0,this.lit=!1;let e=Math.min(1,this.downT/.35);this.group.position.copy(this.pos),this.group.position.y-=Math.max(0,this.downT-2.2)*.9,this.group.rotation.set(-e*1.45,this.yaw,0,"YXZ"),this.cone.visible=!1,this.lanGlow.visible=!1,this.mark&&(this.mark.visible=!1),this.downT>3.4&&(this.dead=!0)}face(t,e,i,n){let s=Math.atan2(-(t-this.pos.x),-(e-this.pos.z));this.yaw=Rh(this.yaw,s,n,i)}physics(t,e,i,n){let s=this.A.game.world,o=this.pos,a=this.vel;if(this.blocked=!1,this.climb){let u=this.climb;u.t+=t/u.dur;let d=Math.min(1,u.t);o.y=Zt(u.y0,u.y1,Math.min(1,d*1.4)),o.x=Zt(u.x0,u.x1,St(d*2-1,0,1)),o.z=Zt(u.z0,u.z1,St(d*2-1,0,1)),d>=1&&(this.climb=null,this.grounded=!0);return}let h=this.state==="chase";if(this.grounded){if(n>0){this.yaw=Rh(this.yaw,Math.atan2(-e,-i),h?9:4,t);let u=o.x+e*.9,d=o.z+i*.9,f=s.groundAt(u,d,o.y,gi);if(f<o.y-1.1){let g=!1;if(h&&this.jumpCd<=0){for(let x=2.5;x<=7;x+=.75){let m=s.groundAt(o.x+e*x,o.z+i*x,o.y+1,0);if(m>o.y-4.5&&(m>.5||o.y<4)){let p=m-o.y,_=7.6,M=(_+Math.sqrt(Math.max(0,_*_-48*p)))/24,v=St((x+.6)/M,4,10.5);a.x=e*v,a.z=i*v,a.y=_,this.grounded=!1,this.jumpCd=.6,g=!0;break}}!g&&o.y-f<8&&this.A.game.player.pos.y<o.y-2.5&&(a.x=e*4,a.z=i*4,a.y=2,this.grounded=!1,g=!0)}g||(n=0,this.blocked=!0,h&&this.sideT<=0?(this.side=Math.random()<.5?-1:1,this.sideT=1.2):this.state==="patrol"&&(this.wp=(this.wp+1)%this.home.length,this.wait=1.5))}}if(this.grounded){let u=e*n,d=i*n;a.x=Wt(a.x,u,10,t),a.z=Wt(a.z,d,10,t),a.y=0}}else a.y-=24*t;let l=Math.hypot(a.x,a.y,a.z)*t,c=Math.max(1,Math.ceil(l/.25));for(let u=0;u<c;u++){if(o.x+=a.x*t/c,o.y+=a.y*t/c,o.z+=a.z*t/c,s.collide(o,gx,xx,Oa)){let f=Oa.top-o.y;if(h&&this.grounded&&f>gi&&f<3.3&&n>0){let g=o.x-Oa.nx*.8,x=o.z-Oa.nz*.8,m=s.groundAt(g,x,o.y+3.3,0);if(m>o.y+gi&&!s.solidAt(g,m+1,x)){this.climb={t:0,dur:.35+(m-o.y)*.28,x0:o.x,y0:o.y,z0:o.z,x1:g,y1:m,z1:x},a.set(0,0,0);return}}this.grounded&&n>0&&(this.stuck+=t,h&&this.sideT<=0&&this.stuck>.3&&(this.side=Math.random()<.5?-1:1,this.sideT=1,this.stuck=0),this.blocked=!0)}let d=s.groundAt(o.x,o.z,o.y,this.grounded?gi:.4);this.grounded?d>=o.y-.6?o.y=d:this.grounded=!1:o.y<=d&&a.y<=0&&(o.y=d,a.y=0,this.grounded=!0)}if(o.x=St(o.x,-It,It),o.y<-.5&&(o.y=0,this.dead=this.extra,!this.extra)){let u=this.home[0];o.set(u[0],s.highest(u[0],u[1]),u[1]),this.grounded=!0,a.set(0,0,0)}}updateTower(t,e){let i=this.A,n=i.game,s=n.world,o=this.tower;this.lampOff>0&&(this.lampOff-=t,this.lampOff<=0&&this.bark("calm"));let a=this.lampOff<=0;this.lamp.visible=a,this.cone.visible=a,this.lit=a,this.sweep+=t*.42;let h=i.alert==="alert",l,c,u;h&&i.seenT<2.5?(l=i.lastKnown.x,c=i.lastKnown.y+1,u=i.lastKnown.z):(l=this.aim.x+Math.sin(this.sweep)*17,c=this.aim.y,u=this.aim.z+Math.sin(this.sweep*.63+1.3)*11),this.aimCur.x=Wt(this.aimCur.x,l,h?3.5:6,t),this.aimCur.y=Wt(this.aimCur.y,c,4,t),this.aimCur.z=Wt(this.aimCur.z,u,h?3.5:6,t),this.eye.set(o.x,o.y+1.35,o.z),this.dir.copy(this.aimCur).sub(this.eye).normalize(),this.yaw=Math.atan2(-this.dir.x,-this.dir.z);let d=a?this.perceive(e,!1):0;if(this.sees=d>0,!h)d>0?this.aware=Math.min(1,this.aware+d*t):this.aware=Math.max(0,this.aware-t*.4),this.aware>=1&&i.raiseAlert(this);else{this.fireT-=t;let m=this.eye.distanceTo(e.pos);this.fireT<=0&&m<60&&s.los(this.eye.x,this.eye.y,this.eye.z,e.pos.x,e.chestY,e.pos.z)&&!i.smokeBlocks(this.eye,e.pos.x,e.chestY,e.pos.z)&&(this.fireT=2.3+Math.random()*1.2,i.fireArrow(this.eye,e))}this.group.position.set(o.x,o.y,o.z),this.group.rotation.y=this.yaw,this.armR.rotation.x=h?1.4:.2,this.armL.rotation.x=1.2,this.lan.visible=!1;let f=this.range;this.cone.position.copy(this.eye),this.cone.lookAt(Uh.copy(this.eye).add(this.dir)),this.cone.rotateY(Math.PI);let g=s.ray(this.eye.x,this.eye.y,this.eye.z,this.dir.x,this.dir.y,this.dir.z,f,.6),x=g>0?Math.min(f,g+1.5):f;this.cone.scale.set(x*Math.tan(this.half),x*Math.tan(this.half),x),this.lightHex=h?16734778:this.aware>.3?16752704:16769696,this.coneMat.color.setHex(this.lightHex).multiplyScalar(2.4)}bark(t){if(this.barkCd>0)return;this.barkCd=3;let e=this.A;if(e.barkT>0)return;e.barkT=2.4;let i=kh[t][Math.floor(Math.random()*kh[t].length)];e.game.ui.subtitle(i[0],i[1])}sync(t){let e=this.group,i=this.pos;e.position.copy(i),e.rotation.y=this.yaw;let n=Math.hypot(this.vel.x,this.vel.z);this.anim+=t*(3+n*1.6);let s=Math.sin(this.anim)*St(n/4,0,1)*.75;this.legL.rotation.x=s,this.legR.rotation.x=-s;let o=-s*.8,a=1.05;this.attackT>0?o=2.6*(1-Math.abs(this.attackT/.42-.3)):this.state==="chase"&&(o=1.3+s*.3),this.stun>0&&(o=2.2,a=2.3),this.climb&&(o=2.7,a=2.7),this.grounded||(this.legL.rotation.x=.5,this.legR.rotation.x=-.4),this.armR.rotation.x=Wt(this.armR.rotation.x,o,14,t||.016),this.armL.rotation.x=Wt(this.armL.rotation.x,a,10,t||.016),this.lan.rotation.x=-this.armL.rotation.x,this.lanGlow.visible=this.lit,this.body.rotation.y=this.lookYaw*.5,this.mark&&(this.mark.rotation.y+=(t||.016)*2.5,this.mark.position.y=2.75+Math.sin(this.t*3)*.08);let h=this.yaw+this.lookYaw;this.eye.set(i.x,i.y+1.6,i.z),this.dir.set(-Math.sin(h),-.12,-Math.cos(h)).normalize();let l=this.range*.62;this.cone.visible=this.lit,this.cone.position.set(i.x-Math.sin(h)*.4,i.y+.95,i.z-Math.cos(h)*.4),this.cone.rotation.set(-.12,h,0,"YXZ"),this.cone.scale.set(l*Math.tan(this.half),l*Math.tan(this.half)*.75,l);let c=this.state==="chase"?16730676:this.aware>.35||this.state==="search"||this.state==="investigate"?16752704:16767370;this.lightHex=c,this.coneMat.color.setHex(c).multiplyScalar(1.5)}remove(){this.group.removeFromParent(),this.cone.removeFromParent(),this.coneMat.dispose(),this.lamp&&(this.lamp.removeFromParent(),this.lamp.geometry.dispose())}},Ba=class{constructor(t){this.game=t,this.group=new Ae,this.lanternMat=new Ue({color:new yt(16761962).multiplyScalar(2.6),fog:!1}),this.guards=[],this.shots=[],this.smokes=[],this.pops=[],this.alert="calm",this.lastKnown=new D,this.seenT=99,this.searchT=0,this.alertT=0,this.spawnT=0,this.barkT=0,this.detect=0,this.threat=null,this.hbT=0,this.spots=[];for(let e=0;e<4;e++){let i=new Qs(16763e3,0,30,.5,.22,0);i.castShadow=!1,this.group.add(i,i.target),this.spots.push(i)}this.markMat=new Ue({color:new yt(16726831).multiplyScalar(2.2),fog:!1}),this.smokeMat=new dn({color:13616870,gradientMap:t.mats.toon.gradientMap}),this.starMat=t.mats.toon,this.initParticles()}build(t){this.clear();let e=vr(),i=this.game;for(let s of t.guardDefs)this.guards.push(new Mr(this,s));for(let s of t.towerDefs)this.guards.push(new Mr(this,null,s));this.pickups=t.pickups;let n=this.pickups.filter(s=>s.type==="koban");this.kobanMesh=new zs(e.koban,i.mats.gold,Math.max(1,n.length)),this.kobanMesh.frustumCulled=!1,this.kobanMesh.castShadow=!1,n.forEach((s,o)=>{s.idx=o}),this.group.add(this.kobanMesh),this.pickMeshes=[];for(let s of this.pickups){if(s.type==="koban")continue;let o=yx(s.type,i.mats);o.position.set(s.x,s.y,s.z),s.mesh=o,this.group.add(o),this.pickMeshes.push(o)}this.kobanT=0,this.updateKoban(0,!0),this.cps=t.checkpoints.map(s=>({...s,on:!!s.start})),this.alert="calm",this.detect=0,this.seenT=99,this.barkT=0}clear(){for(let t of this.guards)t.remove();this.guards.length=0;for(let t of this.shots)t.mesh.removeFromParent();this.shots.length=0;for(let t of this.smokes)t.meshes.forEach(e=>e.removeFromParent());if(this.smokes.length=0,this.kobanMesh&&(this.kobanMesh.removeFromParent(),this.kobanMesh.dispose(),this.kobanMesh=null),this.pickMeshes)for(let t of this.pickMeshes)t.removeFromParent();this.pickMeshes=[];for(let t of this.spots)t.intensity=0}resetAlert(){this.alert="calm",this.seenT=99,this.detect=0,this.guards=this.guards.filter(t=>t.extra?(t.remove(),!1):!0);for(let t of this.guards)if(!(t.downT>=0))if(t.aware=0,t.stun=0,t.lit=!0,t.attackT=0,t.climb=null,t.tower)t.lampOff=0,t.fireT=2;else{t.state="patrol",t.wait=1;let e=t.home[0];t.pos.set(e[0],this.game.world.highest(e[0],e[1]),e[1]),t.vel.set(0,0,0),t.grounded=!0,t.sync(0)}for(let t of this.shots)t.mesh.removeFromParent();this.shots.length=0}loseTrail(t){this.alert="search",this.searchT=t,this.seenT=99;for(let e of this.guards)!e.tower&&e.state==="chase"&&(e.state="search",e.wait=5+Math.random()*2,e.target={x:this.lastKnown.x,z:this.lastKnown.z},e.aware=.3)}manhunt(){let t=this.game.player;this.alert="alert",this.alertT=0,this.seenT=0,this.spawnT=2.5,this.lastKnown.copy(t.pos);for(let e of this.guards)if(!(e.downT>=0)){if(e.tower){e.aware=1;continue}!e.role&&Math.hypot(e.pos.x-t.pos.x,e.pos.z-t.pos.z)<40&&(e.state="chase",e.aware=1,e.sideT=0)}}raiseAlert(t){let e=this.game,i=e.player;if(this.alert==="alert")return;let n=this.alert!=="search";this.alert="alert",this.alertT=0,this.seenT=0,this.spawnT=3.5,this.lastKnown.copy(i.pos),t.barkCd=0,this.barkT=0,t.bark("spotted"),e.audio.alert(),e.onAlert(n);for(let s of this.guards){if(s.tower){s.aware=1;continue}let o=s.pos.distanceTo(i.pos);(s===t||o<42)&&(s.state="chase",s.aware=1,s.sideT=0)}}smokeBlocks(t,e,i,n){for(let s of this.smokes){if(s.t>s.life-.8)continue;let o=e-t.x,a=i-t.y,h=n-t.z,l=o*o+a*a+h*h,c=St(((s.x-t.x)*o+(s.y-t.y)*a+(s.z-t.z)*h)/l,0,1);if(Math.hypot(t.x+o*c-s.x,t.y+a*c-s.y,t.z+h*c-s.z)<s.r)return!0}return!1}hear(t,e,i,n,s){if(this.alert!=="alert")for(let o of this.guards){if(o.tower||o.stun>0||o.state==="chase")continue;let a=Math.hypot(o.pos.x-t,(o.pos.y-e)*.6,o.pos.z-i);a>n||(o.aware=Math.min(.9,o.aware+s*(1-a/n)*.7),o.state==="patrol"&&(s>=.5||o.aware>.3)&&(o.target={x:t,z:i},o.state=s>=.8?"investigate":"suspicious",o.wait=s>=.8?6:2.4,o.bark("noise")))}}takedownTarget(t){let e=null,i=2.5,n=-Math.sin(t.yaw),s=-Math.cos(t.yaw);for(let o of this.guards){if(o.tower||o.downT>=0||!o.group.visible)continue;let a=o.pos.x-t.pos.x,h=o.pos.z-t.pos.z,l=Math.hypot(a,h);l>i||Math.abs(o.pos.y-t.pos.y)>1.7||l>.4&&(a*n+h*s)/l<.3||o.state==="chase"&&o.stun<=0&&!o.role||(e=o,i=l)}return e}takedown(t,e){let i=this.game,n=i.world;t.downT=0,t.vel.set(0,0,0),t.attackT=0,t.stun=0,this.burst({x:t.pos.x,y:t.pos.y+1.2,z:t.pos.z},14172463,26,5,3),i.onTakedown(t,e);for(let s of this.guards)s===t||s.tower||s.downT>=0||Math.hypot(s.pos.x-t.pos.x,s.pos.z-t.pos.z)>14||!n.los(s.eye.x,s.eye.y,s.eye.z,t.pos.x,t.pos.y+1,t.pos.z)||(s.aware=Math.min(1,s.aware+.75),s.target={x:t.pos.x,z:t.pos.z},s.state==="patrol"&&(s.state="investigate",s.wait=7),s.barkCd=0,this.barkT=0,s.bark("body"))}tryAirKill(t,e){if(e<1.4)return!1;for(let i of this.guards)if(!(i.tower||i.downT>=0||!i.group.visible)&&Math.hypot(i.pos.x-t.x,i.pos.z-t.z)<1.5&&Math.abs(i.pos.y-t.y)<1.3)return this.takedown(i,!0),!0;return!1}throwShuriken(t){let e=vr(),i=new D;t.getWorldDirection(i);let n=new Nt(e.star,this.game.mats.toon),s=new D(.22,-.12,-.4).applyMatrix4(t.matrixWorld);n.position.copy(s),this.group.add(n),this.shots.push({kind:"star",mesh:n,pos:s,vel:i.multiplyScalar(48),life:1.6}),this.game.audio.throwS()}fireArrow(t,e,i="arrow"){let n=vr(),s=new Nt(i==="kunai"?n.star:n.arrow,this.game.mats.toon);i==="kunai"&&s.scale.set(1.3,1.3,1.3);let o=t.clone(),a=new D(e.pos.x,e.chestY,e.pos.z),h=o.distanceTo(a),l=i==="kunai"?30:36,c=h/l;a.x+=e.vel.x*c*.75,a.z+=e.vel.z*c*.75,a.y+=.5*5*c*c;let u=a.sub(o).normalize().multiplyScalar(l);s.position.copy(o),this.group.add(s),this.shots.push({kind:i,mesh:s,pos:o,vel:u,life:3,minD:99}),i==="kunai"?this.game.audio.throwS():this.game.audio.bow(),this.game.ui.arrowWarn(t)}dropSmoke(t,e,i){let n=vr(),s=[];for(let o=0;o<9;o++){let a=new Nt(n.ico,this.smokeMat),h=o/9*ps;a.userData={ox:Math.cos(h)*(o?2.2:0),oz:Math.sin(h)*(o?2.2:0),oy:.8+o%3*.9,s:1.5+o%4*.35,r:Math.random()*6},a.position.set(t,e,i),a.castShadow=!1,this.group.add(a),s.push(a)}this.smokes.push({x:t,y:e+1.2,z:i,t:0,life:7,r:5.2,meshes:s}),this.game.audio.smoke(),this.game.hunter&&this.game.hunter.blind(t,i),this.alert==="alert"&&(this.loseTrail(11),this.guards.find(o=>!o.tower&&o.downT<0)?.bark("smoke"),this.game.onEscapeAlert(!0));for(let o of this.guards)!o.tower&&Math.hypot(o.pos.x-t,o.pos.z-i)<8&&(o.aware=Math.min(o.aware,.2))}updateShots(t){let e=this.game,i=e.world,n=e.player;for(let s=this.shots.length-1;s>=0;s--){let o=this.shots[s];o.life-=t;let a=o.life<=0,h=Math.ceil(o.vel.length()*t/.45);for(let l=0;l<h&&!a;l++)if(o.vel.y-=(o.kind==="star",5*(t/h)),o.pos.addScaledVector(o.vel,t/h),o.kind==="star"){let c=e.hunter;if(c&&c.hitTest(o.pos)&&(c.stagger(),this.burst(o.pos,16777215,12),a=!0),!a){for(let u of this.guards)if(u.tower?u.lampOff<=0&&o.pos.distanceTo(u.lamp.position)<.9?(u.lampOff=14,u.aware=0,e.audio.snuff(),u.barkCd=0,this.barkT=0,u.bark("blind"),e.onStyle("Lights Out",60),this.burst(o.pos,16761962,10),a=!0):Math.hypot(o.pos.x-u.pos.x,o.pos.z-u.pos.z)<.6&&o.pos.y>u.pos.y&&o.pos.y<u.pos.y+1.9&&(a=!0,e.audio.thunk()):u.stun<=0&&Math.hypot(o.pos.x-u.pos.x,o.pos.z-u.pos.z)<.55&&o.pos.y>u.pos.y-.1&&o.pos.y<u.pos.y+1.9&&(u.stun=u.state==="chase"?3.2:6,u.vel.set(0,0,0),u.attackT=0,e.audio.snuff(),e.audio.thunk(),u.barkCd=0,this.barkT=0,u.bark("blind"),e.onStyle("Lantern Snuffed",50),this.burst(o.pos,16761962,10),a=!0),a)break}!a&&(o.pos.y<0||i.solidAt(o.pos.x,o.pos.y,o.pos.z))&&(a=!0,e.audio.clink(),this.burst(o.pos,16777215,5),this.hear(o.pos.x,o.pos.y,o.pos.z,15,.85))}else{let c=o.pos.x-n.pos.x,u=o.pos.z-n.pos.z,d=o.pos.y-n.pos.y;o.minD=Math.min(o.minD,Math.hypot(c,u,d-1.1)),Math.hypot(c,u)<.5&&d>-.1&&d<n.height+.1?(a=!0,o.hit=!0,e.damage(o.kind==="kunai"?18:22,o.kind,null,o.vel)):(o.pos.y<0||i.solidAt(o.pos.x,o.pos.y,o.pos.z))&&(a=!0,e.audio.thunk(),this.burst(o.pos,14272416,4))}o.mesh.position.copy(o.pos),o.kind==="star"?o.mesh.rotation.y+=t*40:o.kind==="arrow"&&o.mesh.lookAt(Uh.copy(o.pos).sub(o.vel)),o.kind==="kunai"&&(o.mesh.rotation.y+=t*30),a&&(o.kind!=="star"&&!o.hit&&o.minD<1.4&&!e.over&&e.onCloseCall(),o.mesh.removeFromParent(),this.shots.splice(s,1))}for(let s=this.smokes.length-1;s>=0;s--){let o=this.smokes[s];o.t+=t;let a=Math.min(1,o.t/.5),h=St((o.life-o.t)/1.2,0,1);for(let l of o.meshes){let c=l.userData;l.position.set(o.x+c.ox*a,o.y-1.2+c.oy*a+o.t*.12,o.z+c.oz*a),l.scale.setScalar(c.s*a*h+.001),l.rotation.set(c.r+o.t*.2,c.r*2+o.t*.15,0)}o.t>=o.life&&(o.meshes.forEach(l=>l.removeFromParent()),this.smokes.splice(s,1))}}updateKoban(t,e=!1){let i=this.game,n=i.player,s=new jt,o=new je,a=new D,h=new D;this.kobanT+=t;let l=i.stats.magnet,c=e;for(let u of this.pickups){if(u.taken&&!u.fly&&!e)continue;let d=n.pos.x-u.x,f=n.pos.y+1-u.y,g=n.pos.z-u.z,x=d*d+f*f+g*g;if(!u.taken&&x<l*l&&!i.over&&(u.type==="onigiri"&&i.hp>=i.stats.maxHp-1||(u.taken=!0,u.fly=1e-4)),u.fly){u.fly+=t*5;let m=Math.min(1,u.fly);u.x+=d*m*.4,u.y+=f*m*.4,u.z+=g*m*.4,(x<.8||u.fly>1.6)&&(u.fly=0,u.gone=!0,i.onPickup(u))}if(u.type==="koban"){if(x>6400&&!e&&!u.gone)continue;let m=u.gone?1e-4:u.fly?Math.max(.15,1-u.fly):1;o.setFromAxisAngle(Uh.set(0,1,0),this.kobanT*3+u.idx),s.compose(h.set(u.x,u.y+Math.sin(this.kobanT*2.4+u.idx)*.1,u.z),o,a.set(m,m,m)),this.kobanMesh.setMatrixAt(u.idx,s),c=!0}else u.mesh&&(u.mesh.visible=!u.gone,u.mesh.position.set(u.x,u.y+Math.sin(this.kobanT*2+u.x)*.12,u.z),u.mesh.rotation.y=this.kobanT*1.6)}c&&(this.kobanMesh.instanceMatrix.needsUpdate=!0)}initParticles(){let e=new ge;this.petalPos=new Float32Array(260*3),this.petalData=[];for(let s=0;s<260;s++)this.petalData.push({x:(Math.random()-.5)*50,y:Math.random()*22,z:(Math.random()-.5)*50,p:Math.random()*6,s:.5+Math.random()});e.setAttribute("position",new Ne(this.petalPos,3)),this.petalMat=new $i({color:16763356,size:.11,sizeAttenuation:!0,fog:!1,transparent:!0,depthWrite:!1}),this.petals=new un(e,this.petalMat),this.petals.frustumCulled=!1,this.group.add(this.petals);let i=160,n=new ge;this.popPos=new Float32Array(i*3),this.popCol=new Float32Array(i*3),this.popData=[];for(let s=0;s<i;s++)this.popData.push({life:0,vx:0,vy:0,vz:0}),this.popPos[s*3+1]=-999;n.setAttribute("position",new Ne(this.popPos,3)),n.setAttribute("color",new Ne(this.popCol,3)),this.popsMesh=new un(n,new $i({vertexColors:!0,size:.13,sizeAttenuation:!0,fog:!1,transparent:!0,depthWrite:!1})),this.popsMesh.frustumCulled=!1,this.group.add(this.popsMesh),this.popI=0}burst(t,e,i,n=3.5,s=2.5){let o=new yt(e);for(let a=0;a<i;a++){let h=this.popI=(this.popI+1)%this.popData.length,l=this.popData[h];l.life=.5+Math.random()*.4,l.vx=(Math.random()-.5)*n,l.vy=Math.random()*s+.5,l.vz=(Math.random()-.5)*n,this.popPos[h*3]=t.x,this.popPos[h*3+1]=t.y,this.popPos[h*3+2]=t.z,this.popCol[h*3]=o.r*1.6,this.popCol[h*3+1]=o.g*1.6,this.popCol[h*3+2]=o.b*1.6}}updateParticles(t,e){let i=this.petalPos,n=e.position;for(let o=0;o<this.petalData.length;o++){let a=this.petalData[o];a.p+=t*2,a.y-=t*(.7+a.s*.5),a.x+=t*(1.1+Math.sin(a.p)*.9),a.z+=t*Math.cos(a.p*.7)*.8;let h=a.x-n.x,l=a.z-n.z,c=a.y-n.y;h>25?a.x-=50:h<-25&&(a.x+=50),l>25?a.z-=50:l<-25&&(a.z+=50),c<-9?a.y+=22:c>13&&(a.y-=22),i[o*3]=a.x,i[o*3+1]=a.y,i[o*3+2]=a.z}this.petals.geometry.attributes.position.needsUpdate=!0;let s=this.popPos;for(let o=0;o<this.popData.length;o++){let a=this.popData[o];a.life<=0||(a.life-=t,a.vy-=9*t,s[o*3]+=a.vx*t,s[o*3+1]+=a.vy*t,s[o*3+2]+=a.vz*t,a.life<=0&&(s[o*3+1]=-999))}this.popsMesh.geometry.attributes.position.needsUpdate=!0}update(t){let e=this.game,i=e.player;this.barkT-=t;let n=0,s=null,o=!1;for(let a=this.guards.length-1;a>=0;a--){let h=this.guards[a];if(Math.abs(h.pos.z-i.pos.z)>75&&this.alert==="calm"&&!h.tower){h.cone.visible=!1,h.group.visible=!1;continue}if(h.group.visible=!0,h.update(t,i),h.dead){h.remove(),this.guards.splice(a,1);continue}h.sees&&(o=!0),h.aware>n&&(n=h.aware,s=h)}if(this.alert==="alert"){if(this.alertT+=t,o?(this.seenT=0,this.lastKnown.copy(i.pos)):this.seenT+=t,this.seenT>5.5){this.alert="search",this.searchT=12;for(let a of this.guards)!a.tower&&a.state==="chase"&&(a.state="search",a.wait=5+Math.random()*3,a.target={x:this.lastKnown.x,z:this.lastKnown.z},a.aware=.4);this.guards.find(a=>!a.tower)?.bark("lost"),e.onEscapeAlert(!1)}else this.spawnT-=t,this.spawnT<=0&&(this.spawnT=7,this.reinforce());this.detect=1}else{if(this.alert==="search"&&(this.searchT-=t,this.searchT<=0)){this.alert="calm";for(let a of this.guards)a.tower?a.aware=0:a.extra&&(a.leaving=!0);this.guards.find(a=>!a.tower)?.bark("calm")}this.detect=n;for(let a=this.guards.length-1;a>=0;a--){let h=this.guards[a];h.leaving&&h.pos.distanceTo(i.pos)>26&&!e.world.los(h.eye.x,h.eye.y,h.eye.z,i.pos.x,i.chestY,i.pos.z)&&(h.remove(),this.guards.splice(a,1))}}this.threat=s,this.alert!=="alert"&&this.detect>.2&&(this.hbT-=t,this.hbT<=0&&(this.hbT=Zt(.9,.32,this.detect),e.audio.heartbeat(this.detect))),this.assignSpots(i),this.updateShots(t),this.updateKoban(t);for(let a of this.cps)!a.on&&Math.hypot(a.x-i.pos.x,a.z-i.pos.z)<5&&Math.abs(a.y-i.pos.y)<3&&this.alert!=="alert"&&(a.on=!0,e.onCheckpoint(a))}ambushSpot(){let t=this.game,e=t.player,i=t.world;for(let n=0;n<14;n++){let s=Math.random()*ps,o=20+Math.random()*14,a=St(e.pos.x+Math.sin(s)*o,-It+2,It-2),h=St(e.pos.z+Math.cos(s)*o-6,i.bounds.z0+4,i.bounds.z1-2),l=i.highest(a,h);if(!(l<3||l>12||i.isWater(a,h))&&!i.los(a,l+1.6,h,e.pos.x,e.chestY,e.pos.z))return{x:a,y:l,z:h}}return null}relocate(t){let e=this.game.player;if(this.game.world.los(t.eye.x,t.eye.y,t.eye.z,e.pos.x,e.chestY,e.pos.z))return;let i=this.ambushSpot();i&&(t.pos.set(i.x,i.y,i.z),t.vel.set(0,0,0),t.grounded=!0,t.climb=null,t.progD=1e9,this.game.audio.whistle())}reinforce(){let t=this.game,e=t.player,i=t.world,n=this.guards.filter(h=>!h.tower&&h.state==="chase").length,s=St(2+Math.floor(t.def.sentries/4),2,5);if(n>=s)return;let o=this.ambushSpot();if(!o)return;let a=new Mr(this,{kind:"sentry",pts:[[o.x,o.z]],facing:0});a.extra=!0,a.state="chase",a.aware=1,this.guards.push(a),t.audio.whistle()}assignSpots(t){let e=[];for(let i of this.guards){if(!i.lit||!i.group.visible)continue;let n=i.pos.distanceTo(t.pos);n<(i.tower?90:55)&&e.push([i.tower?n*.5:n,i])}e.sort((i,n)=>i[0]-n[0]);for(let i=0;i<this.spots.length;i++){let n=this.spots[i],s=e[i];if(!s){n.intensity=0;continue}let o=s[1];n.position.copy(o.eye),n.target.position.copy(o.eye).addScaledVector(o.dir,10),n.angle=o.tower?o.half*1.05:o.half*.95,n.distance=o.tower?o.range*1.15:o.range*.95,n.penumbra=o.tower?.12:.3,n.intensity=o.tower?11:5,n.color.setHex(o.lightHex||16767370)}}};function yx(r,t){let e=new he;if(r==="stack"){for(let n=0;n<4;n++)e.box(-.2+n%2*.03,n*.07-.14,-.13,.2+n%2*.03,n*.07-.08,.13,15906106,{glow:.7});e.box(-.03,-.15,-.14,.03,.15,.14,13124911)}else r==="shuriken"?(e.box(-.3,-.02,-.07,.3,.02,.07,14673140,{glow:.5}),e.box(-.07,-.02,-.3,.07,.02,.3,14673140,{glow:.5}),e.box(-.06,-.03,-.06,.06,.03,.06,2764629)):r==="onigiri"?(e.cyl(0,-.16,0,.26,.06,.36,3,16775406,.45),e.box(-.14,-.17,-.2,.14,0,.2,2502714)):r==="smoke"?(e.blob(0,0,0,.2,.2,.2,4867680,.2),e.box(-.02,.18,-.02,.02,.32,.02,15260864),e.box(-.21,-.04,-.21,.21,.04,.21,13124911)):(e.box(-.2,-.3,-.16,.2,.08,.16,16774886,{glow:.5}),e.box(-.18,.08,-.15,.18,.38,.15,16774886,{glow:.5}),e.box(-.18,.38,-.05,-.08,.5,.05,16774886,{glow:.5}),e.box(.08,.38,-.05,.18,.5,.05,16774886,{glow:.5}),e.box(.2,.05,-.06,.3,.45,.06,16774886,{glow:.5}),e.box(-.2,.04,-.17,.2,.1,.17,13124911),e.box(-.07,-.08,-.2,.07,.06,-.16,15906106,{glow:1}),e.box(-.1,.2,-.16,-.04,.26,-.15,2234424),e.box(.04,.2,-.16,.1,.26,-.15,2234424));let i=new Nt(e.build(),t.world);return i.castShadow=!1,i}var Ha=class{constructor(t){this.input=t,this.zone=document.getElementById("touch-zone"),this.stickEl=document.getElementById("stick"),this.knobEl=document.getElementById("knob"),this.stick=null,this.look=null,this.mx=0,this.mz=0,this.presses=[],this.cutShort=0,this.warned=!1;let e=this.zone;if(window.PointerEvent)e.addEventListener("pointerdown",i=>{if(i.pointerType!=="mouse"){i.preventDefault();try{e.setPointerCapture(i.pointerId)}catch{}this.down(i.pointerId,i.clientX,i.clientY,"pointer")}}),e.addEventListener("pointermove",i=>this.move(i.pointerId,i.clientX,i.clientY)),e.addEventListener("pointerup",i=>this.up(i.pointerId,"up")),e.addEventListener("pointercancel",i=>this.up(i.pointerId,"cancel")),e.addEventListener("touchstart",i=>{i.cancelable&&i.preventDefault()},{passive:!1}),e.addEventListener("touchmove",i=>{i.cancelable&&i.preventDefault()},{passive:!1});else{let i=(n,s)=>{for(let o=0;o<n.changedTouches.length;o++)s(n.changedTouches[o])};e.addEventListener("touchstart",n=>{n.cancelable&&n.preventDefault(),i(n,s=>this.down(s.identifier,s.clientX,s.clientY,"touch"))},{passive:!1}),e.addEventListener("touchmove",n=>{n.cancelable&&n.preventDefault(),i(n,s=>this.move(s.identifier,s.clientX,s.clientY))},{passive:!1}),e.addEventListener("touchend",n=>i(n,s=>this.up(s.identifier,"up"))),e.addEventListener("touchcancel",n=>i(n,s=>this.up(s.identifier,"cancel")))}e.addEventListener("contextmenu",i=>i.preventDefault()),addEventListener("resize",()=>this.render())}down(t,e,i,n){let s=e<innerWidth*.45,o={id:t,x:e,y:i,ox:e,oy:i,t0:performance.now(),moves:0,dist:0,side:s?"L":"R",src:n};if(s&&!this.stick)this.stick=o;else if(!this.look)this.look=o;else return;this.update()}move(t,e,i){let n=this.stick,s=this.look;if(n&&n.id===t){n.moves++,n.dist+=Math.hypot(e-n.x,i-n.y),n.x=e,n.y=i;let o=e-n.ox,a=i-n.oy,h=Math.hypot(o,a);h>56&&(n.ox=e-o/h*56,n.oy=i-a/h*56),this.update()}else if(s&&s.id===t){if(s.moves++,s.dist+=Math.hypot(e-s.x,i-s.y),this.input.enabled){let o=.0055*this.input.sens;this.input.lookX+=(e-s.x)*o,this.input.lookY+=(i-s.y)*o*(this.input.invertY?-1:1)}s.x=e,s.y=i}}up(t,e){let i=null;if(this.stick&&this.stick.id===t?(i=this.stick,this.stick=null):this.look&&this.look.id===t&&(i=this.look,this.look=null),!i)return;let n=performance.now()-i.t0;this.presses.push({side:i.side,src:i.src,ms:Math.round(n),moves:i.moves,px:Math.round(i.dist),end:e}),this.presses.length>40&&this.presses.shift(),e==="cancel"&&i.moves===0&&this.cutShort++,this.cutShort>=3&&!this.warned&&this.input.enabled&&(this.warned=!0,this.input.game.ui.toast("This app is taking over finger drags. Open the game in Safari to use the joystick.")),this.update()}release(){this.stick=null,this.look=null,this.update()}update(){let t=this.stick;if(t){let e=t.x-t.ox,i=t.y-t.oy,n=Math.hypot(e,i),s=n>0?Math.min(1,Math.max(0,(n/56-.12)/(.88-.12))):0,o=s*s*(3-2*s)*.35+s*.65;this.mx=s?e/n*o:0,this.mz=s?-i/n*o:0}else this.mx=0,this.mz=0;this.render()}home(){let t=this.zone.getBoundingClientRect();return{x:t.left+Math.min(112,t.width*.2),y:t.bottom-Math.min(112,t.height*.3),r:t}}render(){if(!this.stickEl)return;let t=this.stick,e=this.home(),i=t?t.ox:e.x,n=t?t.oy:e.y;this.stickEl.style.opacity=t?1:.45,this.stickEl.style.transform=`translate(${(i-e.r.left).toFixed(1)}px, ${(n-e.r.top).toFixed(1)}px)`,this.knobEl.style.transform=t?`translate(${(t.x-t.ox).toFixed(1)}px, ${(t.y-t.oy).toFixed(1)}px)`:"translate(0px, 0px)"}};var Ga=class{constructor(t,e){this.canvas=t,this.game=e,this.keys=new Set,this.moveX=0,this.moveZ=0,this.lookX=0,this.lookY=0,this.jump=!1,this.crouch=!1,this.jumpPressed=!1,this.crouchPressed=!1,this.throwPressed=!1,this.hookPressed=!1,this.smokePressed=!1,this.sens=1,this.invertY=!1,this.touch=!1,this.locked=!1,this.enabled=!1,this.crouchToggle=!1,this.tc=null,this._lockAt=0,this.lockFailed=!1,addEventListener("keydown",i=>this.onKey(i,!0)),addEventListener("keyup",i=>this.onKey(i,!1)),addEventListener("blur",()=>{this.keys.clear(),this.jump=!1}),document.addEventListener("pointerlockchange",()=>{this.locked=document.pointerLockElement===t,this.locked||(this._lockAt=performance.now(),e.onPointerUnlock())}),document.addEventListener("pointerlockerror",()=>this.lockFail()),t.addEventListener("mousedown",i=>{if(!this.touch){if(!this.locked&&!this.lockFailed){this.enabled&&this.lock();return}this.enabled&&(i.button===0&&this.locked&&(this.throwPressed=!0),i.button===2&&(this.hookPressed=!0))}}),addEventListener("mousemove",i=>{if(!this.enabled||!this.locked&&!(this.lockFailed&&i.buttons&1))return;let n=Math.max(-200,Math.min(200,i.movementX||0)),s=Math.max(-200,Math.min(200,i.movementY||0));this.lookX+=n*.0021*this.sens,this.lookY+=s*.0021*this.sens*(this.invertY?-1:1)}),addEventListener("contextmenu",i=>i.preventDefault()),addEventListener("wheel",i=>{this.enabled&&i.preventDefault()},{passive:!1}),this.setupTouch()}lock(){if(!(this.touch||this.locked||this.lockFailed))try{let t=this.canvas.requestPointerLock();t&&t.catch&&t.catch(()=>this.lockFail())}catch{this.lockFail()}}lockFail(){this.locked=!1,!this.lockFailed&&(this.lockFailed=!0,this.game.onLockFailed&&this.game.onLockFailed())}unlock(){document.pointerLockElement&&document.exitPointerLock()}onKey(t,e){let i=t.code;if(this.enabled&&["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Tab"].includes(i)&&t.preventDefault(),e){if(t.repeat||(this.keys.add(i),(i==="Escape"||i==="KeyP")&&this.game.onPauseKey(),!this.enabled))return;i==="Space"&&(this.jumpPressed=!0,this.jump=!0),(i==="ShiftLeft"||i==="ShiftRight")&&(this.crouchPressed=!0),i==="KeyC"&&(this.crouchPressed=!0,this.crouchToggle=!this.crouchToggle),i==="KeyE"&&(this.hookPressed=!0),i==="KeyF"&&(this.throwPressed=!0),i==="KeyQ"&&(this.smokePressed=!0),i==="KeyR"&&this.game.onRestartKey()}else this.keys.delete(i),i==="Space"&&(this.jump=!1)}poll(){let t=this.keys;this.touch?(this.moveX=this.tc?this.tc.mx:0,this.moveZ=this.tc?this.tc.mz:0,this.crouch=this.crouchToggle):(this.moveX=(t.has("KeyD")||t.has("ArrowRight")?1:0)-(t.has("KeyA")||t.has("ArrowLeft")?1:0),this.moveZ=(t.has("KeyW")||t.has("ArrowUp")?1:0)-(t.has("KeyS")||t.has("ArrowDown")?1:0),this.crouch=t.has("ShiftLeft")||t.has("ShiftRight")||this.crouchToggle)}endFrame(){this.lookX=0,this.lookY=0,this.jumpPressed=this.crouchPressed=this.throwPressed=this.hookPressed=this.smokePressed=!1}reset(){this.keys.clear(),this.jump=!1,this.crouchToggle=!1,this.endFrame(),this.tc&&this.tc.release(),document.querySelectorAll(".tb.held").forEach(t=>t.classList.remove("held"))}setupTouch(){let t=document.getElementById("touch");if(!t)return;this.tc=new Ha(this);let e=()=>{this.touch||(this.touch=!0,document.body.classList.add("touch"),this.game.onTouchMode&&this.game.onTouchMode(),this.tc.render())};try{matchMedia("(pointer: coarse)").matches&&!matchMedia("(any-pointer: fine)").matches&&e()}catch{}addEventListener("touchstart",e,{passive:!0,capture:!0}),addEventListener("pointerdown",n=>{(n.pointerType==="touch"||n.pointerType==="pen")&&e()},{passive:!0,capture:!0}),document.addEventListener("touchmove",n=>{this.enabled&&n.cancelable&&n.preventDefault()},{passive:!1});let i=(n,s)=>{!this.enabled&&n!=="pause"||(n==="jump"&&(this.jumpPressed=!0),n==="crouch"&&(this.crouchPressed=!0,this.crouchToggle=!this.crouchToggle,s.classList.toggle("held",this.crouchToggle)),n==="throw"&&(this.throwPressed=!0),n==="hook"&&(this.hookPressed=!0),n==="smoke"&&(this.smokePressed=!0),n==="pause"&&this.game.onPauseKey())};t.querySelectorAll("[data-btn]").forEach(n=>{let s=n.dataset.btn,o=-1e9;n.addEventListener("pointerdown",h=>{h.preventDefault(),h.stopPropagation(),e(),o=performance.now(),n.classList.add("on");try{n.setPointerCapture(h.pointerId)}catch{}i(s,n),s==="jump"&&this.enabled&&(this.jump=!0)});let a=()=>{n.classList.remove("on"),s==="jump"&&(this.jump=!1)};for(let h of["pointerup","pointercancel","lostpointercapture"])n.addEventListener(h,a);n.addEventListener("click",h=>{h.preventDefault(),h.stopPropagation(),!(performance.now()-o<1500)&&(e(),i(s,n))}),n.addEventListener("contextmenu",h=>h.preventDefault())})}};var _x=[0,1,5,7,8],_e=(r,t=0)=>146.83*Math.pow(2,(_x[(r%5+5)%5]+12*(Math.floor(r/5)+t))/12),Va=class{constructor(){this.ctx=null,this.sfxVol=.8,this.musicVol=.6,this.muted=!1,this.ducked=!1,this.tension=0,this.mode="menu",this.step16=0,this.nextT=0,this.phrase=0,this.lastDeg=5,this.loops={}}init(){if(this.ctx){this.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;this.master=e.createGain();let i=e.createDynamicsCompressor();i.threshold.value=-14,i.ratio.value=4,i.attack.value=.004,i.release.value=.2,this.lp=e.createBiquadFilter(),this.lp.type="lowpass",this.lp.frequency.value=2e4,this.master.connect(this.lp),this.lp.connect(i),i.connect(e.destination),this.sfx=e.createGain(),this.music=e.createGain(),this.sfx.connect(this.master),this.music.connect(this.master);let n=Math.floor(e.sampleRate*1.7),s=e.createBuffer(2,n,e.sampleRate);for(let c=0;c<2;c++){let u=s.getChannelData(c);for(let d=0;d<n;d++)u[d]=(Math.random()*2-1)*Math.pow(1-d/n,2.6)}this.rev=e.createConvolver(),this.rev.buffer=s;let o=e.createGain();o.gain.value=.5,this.rev.connect(o),o.connect(this.master);let a=e.sampleRate*2,h=e.createBuffer(1,a,e.sampleRate),l=h.getChannelData(0);for(let c=0;c<a;c++)l[c]=Math.random()*2-1;this.noiseBuf=h,this.loops.wind=this.loop("bandpass",520,.6,0),this.loops.slide=this.loop("bandpass",1900,1.2,0),this.loops.wall=this.loop("highpass",2600,.7,0),this.loops.rain=this.loop("highpass",3200,.4,this.rainOn?.05:0),this.applyVolume(),this.nextT=e.currentTime+.1}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{})}applyVolume(){if(!this.ctx)return;let t=this.muted||this.ducked?0:1,e=this.ctx.currentTime;this.master.gain.setTargetAtTime(t,e,.05),this.sfx.gain.setTargetAtTime(this.sfxVol,e,.05),this.music.gain.setTargetAtTime(this.musicVol*.75,e,.05)}setVolumes(t,e){this.sfxVol=t,this.musicVol=e,this.applyVolume()}setMuted(t){this.muted=t,this.applyVolume()}setDucked(t){this.ducked=t,this.applyVolume()}loop(t,e,i,n){let s=this.ctx,o=s.createBufferSource();o.buffer=this.noiseBuf,o.loop=!0;let a=s.createBiquadFilter();a.type=t,a.frequency.value=e,a.Q.value=i;let h=s.createGain();return h.gain.value=n,o.connect(a),a.connect(h),h.connect(this.sfx),o.start(),{f:a,g:h}}tone(t,e,i={}){let n=this.ctx;if(!n)return;let s=(i.when??n.currentTime)+.001,o=n.createOscillator(),a=n.createGain();o.type=i.type||"sine",o.frequency.setValueAtTime(t,s),i.to&&o.frequency.exponentialRampToValueAtTime(Math.max(20,i.to),s+(i.slide??e));let h=i.vol??.3,l=i.attack??.004;a.gain.setValueAtTime(1e-4,s),a.gain.exponentialRampToValueAtTime(h,s+l),a.gain.exponentialRampToValueAtTime(1e-4,s+e);let c=o;if(i.lp){let u=n.createBiquadFilter();u.type="lowpass",u.frequency.setValueAtTime(i.lp,s),i.lpTo&&u.frequency.exponentialRampToValueAtTime(i.lpTo,s+e),c.connect(u),c=u}if(c.connect(a),a.connect(i.dest||this.sfx),i.rev){let u=n.createGain();u.gain.value=i.rev,a.connect(u),u.connect(this.rev)}return o.start(s),o.stop(s+e+.05),o}noise(t,e={}){let i=this.ctx;if(!i)return;let n=(e.when??i.currentTime)+.001,s=i.createBufferSource();s.buffer=this.noiseBuf,s.playbackRate.value=e.rate||1;let o=i.createBiquadFilter();o.type=e.type||"bandpass",o.frequency.setValueAtTime(e.freq||1e3,n),o.Q.value=e.q??1,e.to&&o.frequency.exponentialRampToValueAtTime(e.to,n+t);let a=i.createGain(),h=e.vol??.3;if(a.gain.setValueAtTime(1e-4,n),a.gain.exponentialRampToValueAtTime(h,n+(e.attack??.003)),a.gain.exponentialRampToValueAtTime(1e-4,n+t),s.connect(o),o.connect(a),a.connect(e.dest||this.sfx),e.rev){let l=i.createGain();l.gain.value=e.rev,a.connect(l),l.connect(this.rev)}s.start(n,Math.random()*1.5,t+.05)}step(t,e=.6){this.ctx&&(t?(this.noise(.05,{freq:1500+Math.random()*900,q:5,vol:.2*e}),this.tone(170+Math.random()*40,.06,{vol:.14*e,to:90})):this.noise(.07,{type:"lowpass",freq:520,vol:.22*e}))}jump(){this.noise(.16,{freq:500,to:1500,q:.8,vol:.14})}land(t,e){if(this.ctx&&(this.tone(110,.14,{to:45,vol:.38*t}),this.noise(.12,{type:"lowpass",freq:900,vol:.3*t}),e&&t>.3))for(let i=0;i<3;i++)this.noise(.04,{freq:2200+Math.random()*1600,q:7,vol:.12*t,when:this.ctx.currentTime+.03+i*.035})}slide(t){this.ctx&&this.loops.slide.g.gain.setTargetAtTime(t?.2:0,this.ctx.currentTime,.04)}wallrun(t){this.ctx&&this.loops.wall.g.gain.setTargetAtTime(t?.1:0,this.ctx.currentTime,.04)}setWind(t){if(!this.ctx)return;let e=this.ctx.currentTime;this.loops.wind.g.gain.setTargetAtTime(.03+t*.22,e,.15),this.loops.wind.f.frequency.setTargetAtTime(380+t*900,e,.15)}stopLoops(){if(this.ctx)for(let t of["slide","wall"])this.loops[t].g.gain.setTargetAtTime(0,this.ctx.currentTime,.03)}mantle(t){this.noise(t?.12:.22,{type:"lowpass",freq:700,vol:.2}),this.tone(140,.07,{vol:.14,to:80})}roll(){this.noise(.3,{type:"lowpass",freq:600,to:250,vol:.28})}rope(){this.tone(300,.25,{type:"triangle",to:180,vol:.14}),this.noise(.1,{freq:900,vol:.1})}hook(){this.noise(.25,{freq:900,to:3600,q:2,vol:.2}),this.tone(980,.12,{type:"square",vol:.06,when:this.ctx?this.ctx.currentTime+.18:0})}deny(){this.tone(160,.12,{type:"square",vol:.07})}coin(t=0){let e=_e(5+t%5,2);this.tone(e,.28,{type:"triangle",vol:.17,rev:.3}),this.tone(e*2.01,.2,{vol:.07})}pickup(){[0,2,4].forEach((t,e)=>this.tone(_e(5+t,1),.3,{type:"triangle",vol:.16,rev:.3,when:this.ctx?this.ctx.currentTime+e*.06:0}))}cat(){[0,2,4,7,9].forEach((t,e)=>this.tone(_e(5+t,1),.5,{type:"triangle",vol:.18,rev:.5,when:this.ctx?this.ctx.currentTime+e*.08:0}))}checkpoint(){[0,3].forEach((t,e)=>this.tone(_e(10+t,1),.9,{vol:.14,rev:.6,when:this.ctx?this.ctx.currentTime+e*.14:0}))}whistle(){if(!this.ctx)return;let t=this.ctx.currentTime;for(let e=0;e<2;e++){let i=this.tone(2350,.38,{vol:.13,when:t+e*.46,attack:.02,rev:.4});if(i){let n=this.ctx.createOscillator(),s=this.ctx.createGain();n.frequency.value=26,s.gain.value=110,n.connect(s),s.connect(i.frequency),n.start(t+e*.46),n.stop(t+e*.46+.45)}}}alert(){this.taiko(0,.9),this.taiko(this.ctx?this.ctx.currentTime+.16:0,.7),this.whistle()}suspicious(){this.tone(_e(7,1),.5,{type:"triangle",vol:.12,rev:.5}),this.tone(_e(8,1),.6,{type:"triangle",vol:.1,rev:.5,when:this.ctx?this.ctx.currentTime+.12:0})}throwS(){this.noise(.14,{freq:2600,to:5200,q:3,vol:.16})}clink(){this.tone(3100,.12,{type:"triangle",vol:.14,rev:.3}),this.noise(.03,{freq:4500,q:4,vol:.2})}thunk(){this.tone(180,.1,{to:70,vol:.3}),this.noise(.05,{type:"lowpass",freq:1200,vol:.25})}snuff(){this.noise(.3,{type:"lowpass",freq:1800,to:200,vol:.25})}smoke(){this.noise(.9,{type:"lowpass",freq:2400,to:180,vol:.4,rev:.4}),this.tone(90,.3,{to:40,vol:.35})}arrow(){this.noise(.22,{freq:1500,to:600,q:4,vol:.14})}bow(){this.tone(220,.12,{type:"triangle",to:120,vol:.12})}hurt(){this.tone(150,.25,{type:"sawtooth",to:60,vol:.28,lp:900}),this.noise(.12,{type:"lowpass",freq:800,vol:.35})}splash(){this.noise(.7,{type:"lowpass",freq:2600,to:300,vol:.4,rev:.3})}ui(){this.noise(.03,{freq:1700,q:6,vol:.2}),this.tone(720,.05,{type:"triangle",vol:.08})}buy(){this.pickup(),this.taiko(0,.4)}taiko(t,e=.8,i=null){if(!this.ctx)return;let n=t||this.ctx.currentTime;this.tone(118,.42,{to:46,slide:.16,vol:.6*e,when:n,dest:i||this.sfx,rev:.35}),this.noise(.09,{type:"lowpass",freq:800,vol:.4*e,when:n,dest:i||this.sfx})}rim(t,e=.5,i=null){this.noise(.04,{freq:2100,q:3.5,vol:.35*e,when:t,dest:i||this.sfx}),this.tone(820,.03,{type:"square",vol:.05*e,when:t,dest:i||this.sfx})}koto(t,e,i=.2,n=1.5){this.ctx&&(this.tone(t,n,{type:"sawtooth",vol:i,when:e,lp:3200,lpTo:500,dest:this.music,rev:.5,attack:.002}),this.tone(t*2.003,n*.5,{type:"triangle",vol:i*.4,when:e,dest:this.music}),this.noise(.012,{freq:3e3,q:1,vol:i*.5,when:e,dest:this.music}))}shamisen(t,e,i=.14){this.tone(t*1.015,.22,{type:"sawtooth",to:t,slide:.03,vol:i,when:e,lp:2600,lpTo:700,dest:this.music,rev:.2,attack:.002}),this.noise(.02,{freq:1800,q:2,vol:i*.7,when:e,dest:this.music})}flute(t,e,i,n=.07){if(!this.ctx)return;let s=this.tone(t*.97,i,{vol:n,when:e,attack:i*.3,to:t,slide:i*.25,dest:this.music,rev:.8});if(s){let o=this.ctx.createOscillator(),a=this.ctx.createGain();o.frequency.value=5,a.gain.value=t*.012,o.connect(a),a.connect(s.frequency),o.start(e),o.stop(e+i+.1)}this.noise(i,{freq:t*2,q:6,vol:n*.6,when:e,attack:i*.3,dest:this.music,rev:.5})}win(){if(!this.ctx)return;let t=this.ctx.currentTime;[5,7,9,10,12,14].forEach((e,i)=>this.koto(_e(e,0),t+i*.11,.24,1.8)),this.taiko(t+.7,.8)}caught(){if(!this.ctx)return;let t=this.ctx.currentTime;this.taiko(t,1),this.taiko(t+.28,.8),[9,8,6,5].forEach((e,i)=>this.koto(_e(e,-1),t+.1+i*.2,.22,1.4))}trick(t,e){if(!this.ctx)return;let i=this.ctx.currentTime,n=Math.min(14,4+t);this.tone(_e(n,1),.22,{type:"triangle",vol:.13+(e?.05:0),when:i,rev:.25}),e&&this.tone(_e(n+2,1),.3,{type:"triangle",vol:.1,when:i+.06,rev:.4}),this.noise(.05,{freq:3e3+t*120,q:4,vol:.06,when:i})}tier(t){if(!this.ctx)return;let e=this.ctx.currentTime;this.taiko(e,.7),this.taiko(e+.12,.6),[0,2,4].forEach((i,n)=>this.koto(_e(5+i+t,0),e+.05+n*.07,.2,1.2))}bank(t){if(!this.ctx)return;let e=this.ctx.currentTime,i=Math.min(8,2+Math.floor(t/2));for(let n=0;n<i;n++)this.tone(_e(5+n*2,1),.25,{type:"triangle",vol:.12,when:e+n*.045,rev:.3})}drop(){this.tone(220,.35,{type:"sawtooth",to:70,vol:.12,lp:900}),this.noise(.2,{type:"lowpass",freq:500,vol:.15})}slash(){this.ctx&&(this.noise(.18,{freq:5200,to:1800,q:3,vol:.32}),this.tone(2900,.5,{type:"triangle",vol:.09,rev:.6}),this.taiko(this.ctx.currentTime+.04,.9))}flip(){this.noise(.32,{freq:700,to:2600,q:1.2,vol:.16})}hay(){this.noise(.45,{type:"lowpass",freq:1600,to:300,vol:.32}),this.noise(.25,{freq:2600,q:1,vol:.1})}ignite(){this.noise(.6,{freq:900,to:3e3,q:.7,vol:.25,rev:.3}),this.tone(110,.4,{to:60,vol:.2})}bell(){if(!this.ctx)return;let t=this.ctx.currentTime;for(let e=0;e<3;e++)this.tone(196,2.6,{vol:.2,when:t+e*.9,rev:.8}),this.tone(196*2.76,1.6,{vol:.07,when:t+e*.9,rev:.8}),this.tone(196*5.4,.8,{vol:.04,when:t+e*.9})}thunder(){this.noise(2.4,{type:"lowpass",freq:380,to:60,vol:.5,attack:.08,rev:.6})}rain(t){this.rainOn=t,this.ctx&&this.loops.rain.g.gain.setTargetAtTime(t?.05:0,this.ctx.currentTime,.5)}slow(t){this.ctx&&this.lp.frequency.setTargetAtTime(t?900:2e4,this.ctx.currentTime,.06)}heartbeat(t){this.tone(58,.16,{to:38,vol:.3*t})}setMode(t){this.mode=t}update(t){let e=this.ctx;if(!(!e||e.state!=="running"))for(this.nextT<e.currentTime-.3&&(this.nextT=e.currentTime+.05);this.nextT<e.currentTime+.16;){this.tick(this.nextT,this.step16);let i=this.mode==="chase"?152:this.mode==="tense"?104:80;this.nextT+=60/i/4,this.step16=(this.step16+1)%64}}tick(t,e){let i=this.mode;if(i==="off")return;let n=e%16;if(i==="chase"){[0,3,6,8,11,14].includes(n)&&this.taiko(t,n===0||n===8?.75:.5,this.music),[2,5,10,13,15].includes(n)&&this.rim(t,.5,this.music);let o=[0,0,2,0,3,0,2,1,0,0,4,0,3,2,1,0];(n%2===0||n%8===7)&&this.shamisen(_e(o[n]+(e>=32?2:0),0),t,.13),e%32===0&&this.koto(_e(0,-1),t,.2,1.2);return}if(i==="tense"){n%4===0&&this.tone(55,.3,{to:42,vol:.2,when:t,dest:this.music}),n%8===4&&this.rim(t,.25,this.music),(n===0||n===10&&Math.random()<.6)&&this.koto(_e(this.lastDeg=St(this.lastDeg+(Math.random()<.5?-1:1),1,8),0),t,.13,1.6),e===0&&this.flute(_e(6,0),t,2.4,.045);return}if(e%32===0&&(this.tone(_e(0,-2),5.5,{vol:.09,when:t,attack:1.6,dest:this.music}),this.tone(_e(3,-2),5.5,{vol:.05,when:t,attack:2,dest:this.music})),[1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0][n]&&Math.random()<(i==="menu"?.85:.7)){let o=[-2,-1,-1,1,1,2,3][Math.floor(Math.random()*7)];this.lastDeg=St(this.lastDeg+o,0,12),this.koto(_e(this.lastDeg,0),t,.17,2.2),Math.random()<.25&&this.koto(_e(this.lastDeg+2,0),t+.09,.1,1.8)}e===16&&Math.random()<.8&&this.flute(_e(5+Math.floor(Math.random()*4),0),t,3.2,.05),n===0&&i==="menu"&&this.taiko(t,.25,this.music)}};var vx=[["\u7FE1\u7FE0\u306E\u5370","the Jade Seal"],["\u5C06\u8ECD\u306E\u5DFB\u7269","the Shogun's Scroll"],["\u9EC4\u91D1\u306E\u9234","the Golden Bell"],["\u9B3C\u306E\u9762","the Red Oni Mask"],["\u5357\u86EE\u6642\u8A08","the Dutch Clock"],["\u9F8D\u306E\u9999\u7089","the Dragon Censer"]],Mx=[["\u7530\u6CBC\u5949\u884C","Magistrate Tanuma"],["\u9ED2\u7530\u4EE3\u5B98","Intendant Kuroda"],["\u9B3C\u74E6\u7D44\u982D","Captain Onigawara"],["\u8D8A\u5F8C\u5C4B","Echigoya the Merchant"],["\u5927\u5CA1\u4E0E\u529B","Inspector Ooka"]],bx=[["\u5E74\u8CA2\u5E33","the tax ledger"],["\u5BC6\u66F8","the secret letter"],["\u8535\u306E\u9375","the storehouse key"]],kn={takedowns:{text:"Take down 2 guards",ok:r=>r.takedowns>=2},air:{text:"Assassinate from above",ok:r=>r.airKills>=1},flips:{text:"Land 3 flips",ok:r=>r.flips>=3},combo:{text:"Chain a 6-trick combo",ok:r=>r.bestCombo>=6},leap:{text:"Make a Leap of Faith",ok:r=>r.leaps>=1,needs:"hay"},snuff:{text:"Snuff 3 lanterns",ok:r=>r.snuffs>=3},koban:{text:"Carry out 40 koban",ok:(r,t)=>t.run.koban>=40},clean:{text:"Escape without a scratch",ok:r=>r.escapeHits===0,atEnd:!0},lead:{text:"Finish 25 m ahead of the Hound",ok:(r,t)=>t.hunter.lead>=25,atEnd:!0},wall:{text:"Wall run 3 times",ok:r=>r.wallruns>=3},close:{text:"Survive 2 close calls",ok:r=>r.closeCalls>=2}},Wa=class{constructor(t){this.game=t,this.group=new Ae,t.actors.group.add(this.group),this.beamMat=new Ue({color:new yt(16734784).multiplyScalar(1.6),transparent:!0,opacity:.35,blending:Zi,depthWrite:!1,fog:!1}),this.fireMat=new Ue({color:new yt(16752704).multiplyScalar(3),fog:!1}),this.t=0}clear(){for(let t of[...this.group.children])t.removeFromParent(),t.geometry&&t.userData.own&&t.geometry.dispose()}setup(t,e){this.clear();let i=ms((e.seed^2654435769)>>>0),n=t.mission,s=this.game.mats;if(this.type=n.type,this.done=!1,this.spots=n.spots,this.lit=0,this.vip=null,this.howDone="",this.marks=[],this.type==="steal"){this.item=i.pick(vx);let a=this.spots[0],h=new he;h.box(-.55,0,-.38,.55,.55,.38,8006443),h.box(-.58,.55,-.41,.58,.7,.41,4857638),h.box(-.6,.18,-.42,.6,.28,.42,15906106,{glow:.5}),h.box(-.18,.7,-.14,.18,1.02,.14,8840904,{glow:2.2});let l=new Nt(h.build(),s.world);l.userData.own=!0,l.position.set(a.x,a.y,a.z),this.group.add(l),this.chest=l,this.addBeam(a.x,a.y,a.z)}else this.type==="signal"?this.beacons=this.spots.map(a=>{let h=new he;h.box(-.08,0,-.08,.08,1.6,.08,4928323),h.cyl(0,1.6,0,.18,.42,.3,8,2763322);let l=new Nt(h.build(),s.world);l.userData.own=!0,l.position.set(a.x,a.y,a.z);let c=new Nt(new Ki(.42,0),this.fireMat);return c.userData.own=!0,c.position.set(a.x,a.y+2.1,a.z),c.visible=!1,this.group.add(l,c),{s:a,fire:c,lit:!1,beam:this.addBeam(a.x,a.y,a.z)}}):this.item=i.pick(this.type==="assassinate"?Mx:bx);this.vip=this.game.actors.guards.find(a=>a.role)||null;let o=Object.keys(kn).filter(a=>!(kn[a].needs==="hay"&&!t.hayCount));for(this.contracts=[];this.contracts.length<2&&o.length;)this.contracts.push(o.splice(Math.floor(i()*o.length),1)[0])}addBeam(t,e,i){let n=new Nt(new Di(.5,.5,60,8,1,!0),this.beamMat);return n.userData.own=!0,n.position.set(t,e+30,i),this.group.add(n),n}get verb(){return{steal:"STEAL",assassinate:"ASSASSINATE",pickpocket:"PICKPOCKET",signal:"SIGNAL"}[this.type]}get objective(){return this.done?"Escape! Reach the kite":this.type==="steal"?`Steal ${this.item[1]}`:this.type==="assassinate"?`Assassinate ${this.item[1]}`:this.type==="pickpocket"?`Lift ${this.item[1]} from the courier`:`Light the signal beacons (${this.lit}/3)`}get brief(){return this.type==="steal"?`Steal ${this.item[1]} from the rooftops, then get out alive.`:this.type==="assassinate"?`${this.item[1]} walks the roofs tonight with a bodyguard. Take him down unseen, or drop on him from above.`:this.type==="pickpocket"?`A courier carries ${this.item[1]}. Get behind him and take it without a sound.`:"The rebels wait for a signal. Light three beacons across the city."}markerPos(t){if(this.done){let i=this.game.world.goal;return t.set(i.x,i.y+3,i.z)}if(this.vip)return t.set(this.vip.pos.x,this.vip.pos.y+3,this.vip.pos.z);if(this.type==="signal"){let i=this.game.player.pos,n=null,s=1e9;for(let o of this.beacons)if(!o.lit){let a=Math.hypot(o.s.x-i.x,o.s.z-i.z);a<s&&(s=a,n=o)}if(n)return t.set(n.s.x,n.s.y+2.5,n.s.z)}let e=this.spots[0];return t.set(e.x,e.y+2,e.z)}contractState(){let t=this.game;return this.contracts.map(e=>({key:e,text:kn[e].text,ok:!!kn[e].ok(t.tally,t),atEnd:!!kn[e].atEnd}))}update(t){this.t+=t;let e=this.game,i=e.player;if(this.chest&&(this.chest.rotation.y=Math.sin(this.t*.8)*.15),this.beacons)for(let s of this.beacons)s.lit&&s.fire.scale.setScalar(1+Math.sin(this.t*14+s.s.x)*.15);if(this.done||e.over)return;let n=(s,o)=>Math.hypot(s.x-i.pos.x,s.z-i.pos.z)<o&&Math.abs(s.y-i.pos.y)<2;if(this.type==="steal"&&n(this.spots[0],1.7))this.chest.visible=!1,e.actors.burst({x:this.spots[0].x,y:this.spots[0].y+.8,z:this.spots[0].z},8840904,24),this.complete("steal");else if(this.type==="signal")for(let s of this.beacons)s.lit||!n(s.s,2)||(s.lit=!0,s.fire.visible=!0,s.beam.visible=!1,this.lit++,e.audio.ignite(),e.actors.burst({x:s.s.x,y:s.s.y+2.1,z:s.s.z},16752704,20),e.noise(s.s.x,s.s.y,s.s.z,14,.7),this.lit>=3?this.complete("signal"):e.onTrick("Beacon Lit",120,!0));else if(this.vip){let s=this.vip;if(s.downT>=0){this.complete(this.type==="assassinate"?"kill":"courier-down");return}if(this.type==="pickpocket"){let o=i.pos.x-s.pos.x,a=i.pos.z-s.pos.z,h=Math.hypot(o,a),l=-Math.sin(s.yaw),c=-Math.cos(s.yaw);h<1.7&&Math.abs(i.pos.y-s.pos.y)<1.4&&(o*l+a*c)/(h||1)<.15&&s.state!=="chase"&&s.aware<.8&&(s.mark.visible=!1,this.vip=null,e.onTrick("Pickpocket",220,!0),setTimeout(()=>{s.barkCd=0,e.actors.barkT=0,s.bark("pickpocket"),s.aware=1},1300),this.complete("pickpocket"))}}}complete(t){if(!this.done){this.done=!0,this.howDone=t;for(let e of this.group.children)e.geometry&&e.geometry.type==="CylinderGeometry"&&(e.visible=!1);this.game.startEscape(t)}}};var xe={sdk:null,env:"disabled",playing:!1,adActive:!1,onAdState:null,settingsListeners:[],async init(){try{let r=window.CrazyGames&&window.CrazyGames.SDK;if(!r)return;await r.init(),this.sdk=r,this.env=r.environment||"disabled";try{r.game.addSettingsChangeListener(t=>this.settingsListeners.forEach(e=>e(t)))}catch{}}catch(r){console.warn("[sdk] init failed, running without CrazyGames services",r),this.sdk=null}},get available(){return!!this.sdk&&this.env!=="disabled"},_game(r){if(this.available)try{this.sdk.game[r]()}catch{}},loadingStart(){this._game("loadingStart")},loadingStop(){this._game("loadingStop")},gameplayStart(){this.playing||(this.playing=!0,this._game("gameplayStart"))},gameplayStop(){this.playing&&(this.playing=!1,this._game("gameplayStop"))},happytime(){this._game("happytime")},get muted(){try{return!!(this.available&&this.sdk.game.settings&&this.sdk.game.settings.muteAudio)}catch{return!1}},onSettings(r){this.settingsListeners.push(r)},get isMobile(){try{if(this.available){let r=this.sdk.user.systemInfo.device.type;if(r)return r!=="desktop"}}catch{}return matchMedia("(pointer: coarse)").matches&&"ontouchstart"in window},_ad(r){return new Promise(t=>{if(!this.available)return t(r==="rewarded"&&!this.sdk);if(this.adActive)return t(!1);let e=!1,i=n=>{e||(e=!0,this.adActive&&(this.adActive=!1,this.onAdState&&this.onAdState(!1)),t(n))};try{this.sdk.ad.requestAd(r,{adStarted:()=>{this.adActive=!0,this.onAdState&&this.onAdState(!0)},adFinished:()=>i(!0),adError:()=>i(!1)})}catch{i(!1)}setTimeout(()=>{this.adActive||i(!1)},6e3)})},midgame(){return this._ad("midgame")},rewarded(){return this._ad("rewarded")},get dataModule(){if(this._locked)return this._data;try{return this.available&&this.sdk.data&&typeof this.sdk.data.getItem=="function"?this.sdk.data:null}catch{return null}},lockStorage(){this._data=this.dataModule,this._locked=!0},get storage(){return this.dataModule?"crazygames":"local"},getItem(r){let t=this.dataModule;if(t)try{return t.getItem(r)}catch(e){console.warn("[sdk] data.getItem failed",e)}return this.localGet(r)},setItem(r,t){let e=this.dataModule;if(e)try{return e.setItem(r,t),!0}catch(i){console.warn("[sdk] data.setItem failed",i)}return this.localSet(r,t)},removeItem(r){let t=this.dataModule;if(t)try{t.removeItem(r)}catch{}try{localStorage.removeItem(r)}catch{}},localGet(r){try{return localStorage.getItem(r)}catch{return null}},localSet(r,t){try{return localStorage.setItem(r,t),!0}catch{return!1}}};var Xa=()=>({v:1,koban:0,unlocked:1,levels:{},upgrades:{},wrap:"cream",endlessBest:0,daily:{seed:0,best:0,score:0},seenIntro:!1,totals:{runs:0,caught:0,koban:0,cats:0},settings:{sens:1,sfx:.8,music:.6,quality:-1,invertY:!1,fov:80}});function Sx(r){if(!r)return null;try{let t=JSON.parse(r);if(!t||typeof t!="object")return null;let e=Xa();return{...e,...t,settings:{...e.settings,...t.settings||{}},totals:{...e.totals,...t.totals||{}},daily:{...e.daily,...t.daily||{}},levels:t.levels||{},upgrades:t.upgrades||{}}}catch{return null}}typeof addEventListener=="function"&&(addEventListener("pagehide",()=>te.flush()),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&te.flush()}));var te={data:Xa(),_timer:0,_last:"",load(){xe.lockStorage();let r=null;try{r=xe.getItem(Fa)}catch{r=null}let t=!1;return!r&&xe.dataModule&&(r=xe.localGet(Fa),t=!!r),this.data=Sx(r)||Xa(),this._last=r&&!t?r:"",t&&this.flush(),this.data},save(){clearTimeout(this._timer),this._timer=setTimeout(()=>this.flush(),250)},flush(){clearTimeout(this._timer);let r;try{r=JSON.stringify(this.data)}catch{return}r!==this._last&&xe.setItem(Fa,r)&&(this._last=r)},reset(){this.data=Xa(),this.flush()},up(r){return this.data.upgrades[r]||0},seals(){let r=0;for(let t in this.data.levels)r+=(this.data.levels[t].seals||[]).filter(Boolean).length;return r},cats(){let r=0;for(let t in this.data.levels)this.data.levels[t].cat&&r++;return r},canBuy(r){let t=this.up(r.key);return t<r.costs.length&&this.data.koban>=r.costs[t]},buy(r){let t=Ua.find(e=>e.key===r);return!t||!this.canBuy(t)?!1:(this.data.koban-=t.costs[this.up(r)],this.data.upgrades[r]=this.up(r)+1,this.save(),!0)}};var tt=r=>document.getElementById(r),Un=new D,qa=new D,Ya=class{constructor(t){this.game=t,this.cache={},this.screens=["loading","menu","nights","shop","settings","pause","failed","results"],this.current="loading",this.backTo="menu",this.subT=0,this.hintT=0,this.bannerT=0,this.arrowT=0,this.toastT=0,this.bind()}set(t,e){this.cache[t]!==e&&(this.cache[t]=e,tt(t).textContent=e)}cls(t,e,i){t.classList.contains(e)!==i&&t.classList.toggle(e,i)}show(t){this.current=t;for(let e of this.screens)tt("s-"+e).classList.toggle("show",e===t);t==="menu"&&this.refreshMenu(),t==="nights"&&this.renderNights(),t==="shop"&&this.renderShop()}hideScreens(){this.show(null)}hud(t){tt("hud").classList.toggle("hidden",!t),document.body.classList.toggle("playing",t)}bind(){let t=this.game,e=(s,o)=>tt(s).addEventListener("click",()=>{t.audio.init(),t.audio.ui(),o()});e("b-play",()=>t.startRun(t.nextCampaignLevel())),e("b-nights",()=>{this.backTo="menu",this.show("nights")}),e("b-shop",()=>{this.backTo="menu",this.show("shop")}),e("b-settings",()=>{this.backTo="menu",this.show("settings")}),e("b-daily",()=>t.startRun(t.dailyDef())),e("b-endless",()=>t.startRun(t.endlessDef(1))),document.querySelectorAll("[data-back]").forEach(s=>s.addEventListener("click",()=>{t.audio.ui(),this.show(this.backTo)})),e("p-resume",()=>t.resume()),e("p-checkpoint",()=>t.respawn(!1)),e("p-restart",()=>t.restartRun(!1)),e("p-settings",()=>{this.backTo="pause",this.show("settings")}),e("p-quit",()=>t.toMenu()),e("f-checkpoint",()=>t.respawn(!0)),e("f-revive",()=>t.reviveWithAd()),e("f-restart",()=>t.restartRun(!0)),e("f-quit",()=>t.toMenu()),e("r-next",()=>t.nextRun()),e("r-retry",()=>t.restartRun(!0)),e("r-shop",()=>{this.backTo="results",this.show("shop")}),e("r-menu",()=>t.toMenu()),e("r-double",()=>t.doubleReward());let i=()=>te.data.settings,n=(s,o,a)=>{let h=tt(s);h.addEventListener("input",()=>{i()[o]=parseFloat(h.value),a&&a(),te.save()})};n("set-sens","sens",()=>t.applySettings()),n("set-sfx","sfx",()=>t.applySettings()),n("set-music","music",()=>t.applySettings()),n("set-fov","fov",()=>t.applySettings()),tt("set-quality").addEventListener("change",s=>{i().quality=parseInt(s.target.value,10),t.applySettings(!0),te.save()}),tt("set-invert").addEventListener("change",s=>{i().invertY=s.target.checked,t.applySettings(),te.save()})}syncSettings(){let t=te.data.settings;tt("set-sens").value=t.sens,tt("set-sfx").value=t.sfx,tt("set-music").value=t.music,tt("set-fov").value=t.fov,tt("set-quality").value=t.quality,tt("set-invert").checked=t.invertY}refreshMenu(){let t=this.game,e=te.data,i=t.nextCampaignLevel();tt("b-play-sub").textContent=`Night ${i.id} \xB7 ${i.name}`,tt("m-koban").textContent=e.koban,tt("m-seals").textContent=`${te.seals()}/36`,tt("m-cats").textContent=`${te.cats()}/12`;let n=e.unlocked>4;tt("b-endless").classList.toggle("locked",!n),tt("b-endless-sub").textContent=n?e.endlessBest?`Best: night ${e.endlessBest}`:"How far can you run?":"Clear Night 4 to unlock";let s=t.dailyDef();tt("b-daily-sub").textContent=e.daily.seed===s.dailySeed&&e.daily.best?`Today: ${Fn(e.daily.best)}`:"New rooftops every day"}renderNights(){let t=tt("nights-grid"),e=te.data;t.innerHTML="";for(let i of zi){let n=e.levels[i.id],s=i.id>e.unlocked,o=document.createElement("button");o.className=`night d${i.d}${s?" locked":""}${i.id===e.unlocked?" next":""}`;let a=(n?.seals||[!1,!1,!1]).map(h=>`<b class="seal${h?" on":""}"></b>`).join("");o.innerHTML=`<span class="num">NIGHT ${i.id} \xB7 ${ka[i.d].time.toUpperCase()}</span><span class="jp">${i.jp}</span><span class="nm">${i.name}</span>
        <span class="meta">${a}${n?.cat?'<span class="jp">\u62DB</span>':""}<span>${n?.best?Fn(n.best):s?"LOCKED":"\u2014"}</span><span class="rk">${n?.rank||""}</span></span>`,o.addEventListener("click",()=>{this.game.audio.ui(),this.game.startRun(i)}),t.appendChild(o)}}renderShop(){let t=tt("shop-grid"),e=te.data,i=this.game;tt("shop-koban").textContent=e.koban,t.innerHTML="";for(let o of Ua){let a=te.up(o.key),h=a>=o.costs.length,l=o.costs[a],c=document.createElement("div");c.className="up";let u=o.costs.map((f,g)=>`<i class="${g<a?"on":""}"></i>`).join("");c.innerHTML=`<span class="jp">${o.jp}</span><span class="nm">${o.name}</span><span class="ds">${o.desc}</span><span class="pips">${u}</span>`;let d=document.createElement("button");d.className="buy"+(h?" max":e.koban<l?" no":""),d.innerHTML=h?"MASTERED":`<b class="coin"></b>${l}`,d.addEventListener("click",()=>{te.buy(o.key)&&(i.audio.buy(),i.refreshStats(),this.renderShop())}),c.appendChild(d),t.appendChild(c)}let n=tt("wraps"),s=te.seals();n.innerHTML="";for(let o of _r){let a=document.createElement("button"),h=s<o.need;a.className="wrap"+(e.wrap===o.key?" sel":"")+(h?" locked":""),a.innerHTML=`<i style="background:#${o.color.toString(16).padStart(6,"0")}"></i>${o.name}${h?` \xB7 ${o.need} seals`:""}`,a.addEventListener("click",()=>{e.wrap=o.key,te.save(),i.audio.ui(),i.refreshStats(),this.renderShop()}),n.appendChild(a)}}showFailed(t,e){tt("fail-text").textContent=e,tt("f-revive").classList.toggle("hidden",!t),this.show("failed")}showResults(t){let e=t.def;tt("r-jp").textContent=e.jp,tt("r-sub").textContent=`${e.endless||e.daily?e.name:`Night ${e.id} \xB7 ${e.name}`} \xB7 ${t.verb}`;let i=tt("r-rank");i.textContent=t.rank,i.className="rank "+t.rank,tt("r-time").textContent=Fn(t.time);let n=tt("r-par");n.textContent=`par ${Fn(e.par)}`,n.className=t.time<=e.par?"good":"",tt("r-koban").textContent=t.koban,tt("r-koban-x").textContent=`of ${t.kobanMax}`,tt("r-style").textContent=t.style.toLocaleString(),tt("r-flow").textContent=`best combo ${t.tally.bestCombo} \xB7 ${t.tally.takedowns} takedowns \xB7 ${t.tally.flips} flips`,tt("r-alerts").textContent=t.alerts,tt("r-caught").textContent=t.deaths?`captured ${t.deaths}\xD7`:"never caught",tt("r-score").textContent=t.score.toLocaleString();let s=tt("r-best");s.textContent=t.newBest?"NEW BEST":`best ${Fn(t.best)}`,s.className=t.newBest?"good":"",t.seals.forEach((o,a)=>{let h=tt("seal-"+a);h.classList.toggle("on",o),h.classList.toggle("new",t.newSeals[a])}),tt("seal-par").innerHTML=t.contracts.map(o=>`${o.ok?"\u25C6":"\u25C7"} ${o.text}`).join("<br>"),tt("seal-cat").classList.toggle("on",t.cat),tt("seal-cat").classList.toggle("new",t.newCat),tt("r-earn").textContent=t.earn,tt("r-double").classList.toggle("hidden",t.earn<=0),tt("r-next").classList.toggle("hidden",!t.hasNext),tt("r-next").querySelector("span").textContent=e.endless?"DEEPER":"NEXT NIGHT",this.show("results")}setEarn(t){tt("r-earn").textContent=t,tt("r-double").classList.add("hidden")}loading(t,e){tt("load-fill").style.transform=`scaleX(${t})`,e&&(tt("load-text").textContent=e)}stylePop(t,e,i=!1){let n=tt("pops"),s=document.createElement("div");for(s.className="pop"+(i?" gold":""),s.innerHTML=e?`${t}<b>+${e}</b>`:t,n.appendChild(s);n.children.length>5;)n.removeChild(n.firstChild);setTimeout(()=>s.remove(),1500)}banner(t,e,i=""){let n=tt("banner");n.className=i,n.querySelector(".jp").textContent=t,n.querySelector(".en").textContent=e,n.style.animation="none",n.offsetWidth,n.style.animation="",this.bannerT=2.2}hint(t,e=6){let i=tt("hint");i.innerHTML=t,i.classList.remove("hidden"),this.hintT=e}subtitle(t,e){let i=tt("subs");i.querySelector(".jp").textContent=t,i.querySelector(".en").textContent=e,i.classList.remove("hidden"),i.style.animation="none",i.offsetWidth,i.style.animation="",this.subT=2.6}intro(t,e,i){let n=tt("intro");n.querySelector(".jp").textContent=t.jp,n.querySelector(".t").textContent=t.name;let s={rain:"RAIN",snow:"SNOW",mist:"MIST",blossom:"BLOSSOM STORM"}[t.weather];n.querySelector(".d").textContent=`${i.verb} \xB7 ${e.name.toUpperCase()} \xB7 ${e.time.toUpperCase()}${s?" \xB7 "+s:""}`,n.querySelector(".x").textContent=i.brief,n.querySelector(".c").innerHTML=i.contracts.map(o=>`<span>\u25C7 ${kn[o].text}</span>`).join(""),n.classList.remove("hidden"),n.style.animation="none",n.offsetWidth,n.style.animation="",this.introT=6.2}combo(t){let e=tt("combo");clearTimeout(this._comboT),e.classList.remove("hidden","banked","dropped"),tt("combo-n").textContent=t.n,tt("combo-m").textContent="\xD7"+t.mult.toFixed(1),tt("combo-pts").textContent=Math.round(t.pts*t.mult).toLocaleString(),tt("combo-list").innerHTML=t.list.slice(-3).reverse().map((n,s)=>`<div style="opacity:${1-s*.28}">${n.label} <b>+${n.pts}</b></div>`).join("");let i=tt("combo-n");i.style.animation="none",i.offsetWidth,i.style.animation="",e.dataset.tier=t.tier}comboTimer(t){tt("combo-bar").style.transform=`scaleX(${Math.max(0,t).toFixed(3)})`}comboTier(t){let e=tt("tier");e.querySelector(".jp").textContent=t.jp,e.querySelector(".en").textContent=t.en,e.classList.remove("hidden"),e.style.animation="none",e.offsetWidth,e.style.animation="",clearTimeout(this._tierT),this._tierT=setTimeout(()=>e.classList.add("hidden"),1300)}comboBank(t,e,i){let n=tt("combo");tt("combo-pts").textContent="+"+t.toLocaleString(),tt("combo-list").innerHTML=`<div class="bank">${i} TRICKS BANKED${e?` \xB7 <span class="koban"><b class="coin"></b>${e}</span>`:""}</div>`,n.classList.add("banked"),clearTimeout(this._comboT),this._comboT=setTimeout(()=>n.classList.add("hidden"),1500)}comboDrop(t){let e=tt("combo");tt("combo-list").innerHTML=`<div class="drop">COMBO LOST \xB7 ${t}</div>`,e.classList.add("dropped"),clearTimeout(this._comboT),this._comboT=setTimeout(()=>e.classList.add("hidden"),1100)}slash(t,e=!1){let i=tt("slash");i.className=e?"hurt":t?"air":"",i.querySelector(".jp").textContent=e?"\u65AC":t?"\u5929\u8A85":"\u65AC",i.style.animation="none",i.offsetWidth,i.style.animation="",clearTimeout(this._slashT),this._slashT=setTimeout(()=>i.classList.add("hidden"),900)}arrowWarn(t){this.arrowFrom=t.clone(),this.arrowT=.8;let e=tt("arrow-warn");e.classList.remove("hidden");let i=e.firstElementChild;i.style.animation="none",i.offsetWidth,i.style.animation=""}toast(t){let e=tt("toast");e.textContent=t,e.classList.remove("hidden"),this.toastT=2.6}flashTool(t){let e=tt(t);e.classList.remove("flash"),e.offsetWidth,e.classList.add("flash")}clearTransient(){for(let t of["banner","hint","subs","intro","arrow-warn","ring","lockhint","combo","tier","slash","prompt","hound"])tt(t).classList.add("hidden");tt("pops").innerHTML="",tt("toast").classList.add("hidden"),this.subT=this.hintT=this.bannerT=this.arrowT=this.introT=this.toastT=0}bearing(t,e){let i=this.game.player;return(Math.atan2(t-i.pos.x,-(e-i.pos.z))+i.yaw)*180/Math.PI}update(t){let e=this.game,i=e.player,n=e.actors,s=tt("hud");if(this.subT>0&&(this.subT-=t)<=0&&tt("subs").classList.add("hidden"),this.hintT>0&&(this.hintT-=t)<=0&&tt("hint").classList.add("hidden"),this.bannerT>0&&(this.bannerT-=t)<=0&&tt("banner").classList.add("hidden"),this.introT>0&&(this.introT-=t)<=0&&tt("intro").classList.add("hidden"),this.toastT>0&&(this.toastT-=t)<=0&&tt("toast").classList.add("hidden"),s.classList.contains("hidden"))return;this.cls(tt("lockhint"),"hidden",!(e.state==="playing"&&!e.input.locked&&!e.input.lockFailed&&!e.input.touch&&!e.headless)),tt("hp-fill").style.transform=`scaleX(${St(e.hp/e.stats.maxHp,0,1)})`,tt("flow-fill").style.transform=`scaleX(${i.flow.toFixed(3)})`,this.set("flow-label",i.flow>.08?`FLOW \xD7${(1+i.flow*2).toFixed(1)}`:"FLOW"),this.cls(tt("flow-label"),"hot",i.flow>.5),this.set("koban-n",e.run.koban),this.set("timer",Fn(e.run.time));let o=e.world.goal,a=Math.hypot(o.x-i.pos.x,o.z-i.pos.z,o.y-i.pos.y);this.set("dist",`${Math.round(a)} m`),this.set("star-n",e.stars),this.set("smoke-n",e.smokes),this.cls(tt("tool-star"),"empty",e.stars<=0),this.cls(tt("tool-smoke"),"empty",e.smokes<=0),this.cls(tt("tool-hook"),"hidden",e.stats.hookRange<=0);let h=n.detect,l=n.alert,c="calm",u="UNSEEN",d=.4;if(l==="alert"?(c="alert",u="SPOTTED",d=1):l==="search"?(c="search",u="SEARCHING",d=.7):h>.04?(c="sus",u=h>.6?"ALMOST SEEN":"SUSPICIOUS",d=.4+h*.6):i.inShadow&&(c="hidden",u="IN SHADOW",d=0),this.eyeState!==c){this.eyeState=c;for(let C of["alert","search","sus","hidden"])s.classList.toggle("s-"+C,C===c)}this.set("eye-label",u),tt("eye-open").style.transform=`scaleY(${d.toFixed(2)})`,tt("eye-open").style.opacity=d>.02?1:0,tt("eye-shut").style.opacity=d>.02?0:1,tt("eye-fill").style.transform=`scaleX(${l==="alert"?1:h.toFixed(3)})`;let f=tt("threat");n.threat&&h>.04&&l!=="alert"?(f.style.opacity=St(h*1.5,.25,1),f.style.transform=`rotate(${this.bearing(n.threat.pos.x,n.threat.pos.z).toFixed(1)}deg)`):f.style.opacity=0,this.arrowT>0&&(this.arrowT-=t,tt("arrow-warn").style.transform=`rotate(${this.bearing(this.arrowFrom.x,this.arrowFrom.z).toFixed(1)}deg)`,this.arrowT<=0&&tt("arrow-warn").classList.add("hidden"));let g=innerWidth,x=innerHeight,m=i.camera;e.mission.markerPos(qa);let p=Math.hypot(qa.x-i.pos.x,qa.z-i.pos.z);tt("marker").classList.toggle("job",!e.mission.done),Un.copy(qa).project(m);let _=(Un.x*.5+.5)*g,M=(-Un.y*.5+.5)*x;if(Un.z>1&&(_=g-_,M=x*.9),_=St(_,g*.06,g*.94),M=St(M,x*.13,x*.86),tt("marker").style.transform=`translate(${_.toFixed(0)}px, ${M.toFixed(0)}px) translate(-50%, -50%)`,this.set("marker-d",`${Math.round(p)} m`),this._cT=(this._cT||0)-t,this._cT<=0){this._cT=.3;let R=e.mission.contractState().map(P=>`<div class="${P.ok&&!P.atEnd?"ok":""}">${P.ok&&!P.atEnd?"\u25C6":"\u25C7"} ${P.text}</div>`).join("");R!==this._cHtml&&(this._cHtml=R,tt("contracts").innerHTML=R)}let v=e.hunter,T=tt("hound");if(this.cls(T,"hidden",!v.active),v.active){let C=Math.max(0,v.lead);tt("hound-fill").style.transform=`scaleX(${St(1-C/40,0,1).toFixed(3)})`,this.set("hound-d",v.stun>0?"STUNNED":`${Math.round(C)} m`),this.cls(T,"near",C<9)}let S=e.tdTarget;this.cls(tt("prompt"),"hidden",!S),S&&this.set("prompt",S.role==="target"?e.input.touch?"STRIKE \xB7 THE MARK":"CLICK \xB7 ASSASSINATE":e.input.touch?"STRIKE":"CLICK \xB7 TAKEDOWN");let y=document.querySelector(".tb.throw");if(y){let C=S?"STRIKE":"STAR";y.textContent!==C&&(y.textContent=C,y.classList.toggle("strike",!!S))}let b=tt("ring");e.hookTarget?(Un.set(e.hookTarget.x,e.hookTarget.y,e.hookTarget.z).project(m),b.classList.remove("hidden"),b.style.transform=`translate(${((Un.x*.5+.5)*g).toFixed(0)}px, ${((-Un.y*.5+.5)*x).toFixed(0)}px)`):b.classList.add("hidden")}};var $a=class{constructor(){this.id=Date.now().toString(36)+Math.random().toString(36).slice(2,7),this.counts={},this.errors=[],this.samples=[],this.writes=0,this.busy=!1,this.dirty=!0,this.db=null;let t=e=>{let i=e.type+(e.pointerType?":"+e.pointerType:"");this.counts[i]=(this.counts[i]||0)+1,this.dirty=!0};for(let e of["touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointercancel","click"])addEventListener(e,t,{capture:!0,passive:!0});addEventListener("error",e=>this.err(e.message+" @"+(e.filename||"").split("/").pop()+":"+e.lineno)),addEventListener("unhandledrejection",e=>this.err("promise: "+(e.reason&&(e.reason.message||e.reason.code)||e.reason)));try{let e=window.claude;e&&e.use&&e.use("db").then(i=>{this.db=i,this.flush()}).catch(()=>{})}catch{}}err(t){this.errors.length<20&&this.errors.push(String(t).slice(0,300)),this.dirty=!0}sample(t){this.samples.length<40&&(this.samples.push(t),this.dirty=!0)}report(t){let e=t&&t.input&&t.input.tc,i=null,n=null;try{i=matchMedia("(pointer: coarse)").matches,n=matchMedia("(any-pointer: fine)").matches}catch{}return{v:7,at:new Date().toISOString(),ua:navigator.userAgent.slice(0,200),screen:`${innerWidth}x${innerHeight}@${devicePixelRatio}`,coarse:i,fine:n,touchPoints:navigator.maxTouchPoints||0,pointerEvents:!!window.PointerEvent,touchMode:!!(t&&t.input&&t.input.touch),state:t?t.state:"boot",counts:this.counts,presses:e?e.presses.slice(-30):[],cutShort:e?e.cutShort:0,samples:this.samples,errors:this.errors}}async flush(t){if(!(!this.db||this.busy||!this.dirty||this.writes>=8)){this.busy=!0,this.dirty=!1,this.writes++;try{await this.db.doc("diag/"+this.id).set(this.report(t||this.game))}catch{}this.busy=!1}}};var xd=22,Ka=class{constructor(t){this.game=t,this.trail=[],this.len=0,this.active=!1,this.s=0,this.group=this.build(),this.group.visible=!1,t.actors.group.add(this.group),this.pos=new D,this.reset()}build(){let t=new he,e=1709606,i=2761792,n=14172463;t.box(-.24,.85,-.14,.24,1.45,.14,e),t.box(-.25,.6,-.16,.25,.9,.16,i),t.box(-.26,.98,-.15,.26,1.06,.15,n),t.box(-.12,1.45,-.12,.12,1.74,.12,e),t.box(-.09,1.58,-.125,.09,1.62,-.11,16771496,{glow:4}),t.box(-.04,.9,.14,.04,1.5,.2,10134720),t.box(-.12,-.6,-.11,-.02,.02,.11,i),t.box(.02,-.6,-.11,.12,.02,.11,i);let s=new Nt(t.build(),this.game.mats.toon),o=new he;o.box(-.1,-.68,-.11,.1,.02,.11,i),this.legL=new Nt(o.build(),this.game.mats.toon),this.legL.position.set(-.12,.68,0),this.legR=this.legL.clone(),this.legR.position.x=.12,this.scarf=[];let a=new Ke(.16,.05,.42),h=new Ue({color:new yt(14172463).multiplyScalar(1.4),fog:!1}),l=new Ae;l.add(s,this.legL,this.legR);for(let c=0;c<5;c++){let u=new Nt(a,h);u.frustumCulled=!1,this.scarf.push(u),this.game.actors.group.add(u),u.visible=!1}return l.traverse(c=>{c.isMesh&&(c.castShadow=!0)}),l}reset(){this.trail.length=0,this.len=0,this.active=!1,this.s=0,this.stun=0,this.strikeCd=0,this.kunaiCd=3,this.t=0,this.warned=!1,this.shook=!1,this.lead=99,this.anim=0,this.group.visible=!1;for(let t of this.scarf)t.visible=!1}record(t){let e=this.trail,i=e[e.length-1];if(!i){e.push({x:t.x,y:t.y,z:t.z,d:0});return}let n=Math.hypot(t.x-i.x,t.y-i.y,t.z-i.z);if(!(n<.3)){if(n>6){this.len+=0,e.length=0,e.push({x:t.x,y:t.y,z:t.z,d:this.len}),this.s=this.len-xd-8;return}this.len+=n,e.push({x:t.x,y:t.y,z:t.z,d:this.len}),e.length>4e3&&e.splice(0,1e3)}}start(){this.active=!0,this.s=this.len-xd,this.t=0}at(t,e){let i=this.trail;if(!i.length)return e.set(0,-100,0);if(t<=i[0].d)return e.set(i[0].x,i[0].y,i[0].z);let n=0,s=i.length-1;if(t>=i[s].d)return e.set(i[s].x,i[s].y,i[s].z);for(;s-n>1;){let l=n+s>>1;i[l].d<t?n=l:s=l}let o=i[n],a=i[s],h=(t-o.d)/Math.max(1e-6,a.d-o.d);return e.set(o.x+(a.x-o.x)*h,o.y+(a.y-o.y)*h,o.z+(a.z-o.z)*h)}hitTest(t){return!this.active||!this.group.visible?!1:Math.hypot(t.x-this.pos.x,t.z-this.pos.z)<.7&&t.y>this.pos.y&&t.y<this.pos.y+1.9}stagger(){this.stun=Math.max(this.stun,1.6),this.s-=3,this.game.audio.thunk(),this.game.onTrick("Hit the Hound",120)}blind(t,e){!this.active||Math.hypot(t-this.pos.x,e-this.pos.z)>14||(this.stun=Math.max(this.stun,3.2),this.game.onTrick("Smoke Screen",100))}update(t){if(!this.active)return;let e=this.game,i=e.player,n=e.def;this.t+=t,this.strikeCd-=t,this.kunaiCd-=t,this.lead=this.len-this.s;let o=(n.hound||7.4)+Math.min(2,this.t*.035);this.lead>16&&(o+=(this.lead-16)*.28),this.lead<7&&(o*=.9),this.stun>0&&(this.stun-=t,o=0),this.s=Math.min(this.s+o*t,this.len-.6),this.at(this.s,this.pos);let a=this.s>=(this.trail[0]?this.trail[0].d:0);if(this.group.visible=a,!a)return;let h=this.at(Math.min(this.len,this.s+1.2),new D),l=Math.atan2(-(h.x-this.pos.x),-(h.z-this.pos.z));this.group.position.copy(this.pos),this.group.rotation.y=l,this.anim+=t*(o*1.7+2);let c=Math.sin(this.anim)*(this.stun>0?0:.9);this.legL.rotation.x=c,this.legR.rotation.x=-c,this.group.rotation.x=this.stun>0?.3:-.18;for(let d=0;d<this.scarf.length;d++){let f=this.scarf[d],g=this.at(this.s-.35*(d+1),new D);f.position.set(g.x,g.y+1.55+Math.sin(this.t*9+d)*.06,g.z),f.lookAt(this.pos.x,this.pos.y+1.55,this.pos.z),f.visible=!0}if(this.stun>0)return;let u=this.len-this.s;if(u<2.6&&this.strikeCd<=0&&!e.over&&(this.strikeCd=1.3,this.s-=3.5,e.onHoundStrike()),u>8&&u<30&&this.kunaiCd<=0&&!e.over){let d=new D(this.pos.x,this.pos.y+1.5,this.pos.z);e.world.los(d.x,d.y,d.z,i.pos.x,i.chestY,i.pos.z)?(this.kunaiCd=St(4.2-this.t*.02,2.4,4.2),e.actors.fireArrow(d,i,"kunai")):this.kunaiCd=.6}u>38&&!this.shook&&(this.shook=!0,e.onTrick("Shook the Hound",200,!0)),u<25&&(this.shook=!1)}};var Za=900,Ja=class{constructor(t){this.game=t,this.kind="clear";let e=new ge;this.rainPos=new Float32Array(Za*6),e.setAttribute("position",new Ne(this.rainPos,3)),this.rain=new Bs(e,new rs({color:13161215,transparent:!0,opacity:.42,fog:!1,depthWrite:!1})),this.rain.frustumCulled=!1;let i=new ge;this.snowPos=new Float32Array(Za*3),i.setAttribute("position",new Ne(this.snowPos,3)),this.snow=new un(i,new $i({color:16777215,size:.09,transparent:!0,opacity:.9,fog:!1,depthWrite:!1})),this.snow.frustumCulled=!1,this.drops=[];for(let n=0;n<Za;n++)this.drops.push({x:(Math.random()-.5)*44,y:Math.random()*26-6,z:(Math.random()-.5)*44,p:Math.random()*6});t.scene.add(this.rain,this.snow),this.boltT=8,this.thunderT=-1}set(t){this.kind=t,this.rain.visible=t==="rain",this.snow.visible=t==="snow";let e=this.game.actors;e.petals.visible=t!=="rain"&&t!=="snow",e.petalMat.size=t==="blossom"?.16:.11,this.game.audio.rain(t==="rain"),this.boltT=5+Math.random()*6}get fogMul(){return{mist:1.9,rain:1.35,snow:1.25}[this.kind]||1}get tintMul(){return{rain:.86,mist:.95,snow:1.03}[this.kind]||1}update(t,e){let i=e.position,n=this.kind;if(n==="rain"||n==="snow"){let s=n==="rain"?this.rainPos:this.snowPos;for(let o=0;o<Za;o++){let a=this.drops[o];n==="rain"?(a.y-=t*28,a.x+=t*3):(a.p+=t,a.y-=t*1.6,a.x+=Math.sin(a.p)*t*.8,a.z+=Math.cos(a.p*.7)*t*.6);let h=a.x-i.x,l=a.z-i.z;if(h>22?a.x-=44:h<-22&&(a.x+=44),l>22?a.z-=44:l<-22&&(a.z+=44),a.y-i.y<-8&&(a.y+=26),n==="rain"){let c=o*6;s[c]=a.x,s[c+1]=a.y,s[c+2]=a.z,s[c+3]=a.x-.1,s[c+4]=a.y+.75,s[c+5]=a.z}else s[o*3]=a.x,s[o*3+1]=a.y,s[o*3+2]=a.z}(n==="rain"?this.rain:this.snow).geometry.attributes.position.needsUpdate=!0}n==="rain"&&(this.boltT-=t,this.boltT<=0&&(this.boltT=7+Math.random()*9,this.game.fxFlash=Math.max(this.game.fxFlash,.55),this.thunderT=.3+Math.random()*1.2),this.thunderT>0&&(this.thunderT-=t,this.thunderT<=0&&this.game.audio.thunder()))}};var Oh=[{n:3,jp:"\u826F",en:"NICE"},{n:5,jp:"\u5DE7",en:"SLICK"},{n:8,jp:"\u51C4",en:"SAVAGE"},{n:12,jp:"\u795E",en:"GODLIKE"},{n:17,jp:"\u4F1D\u8AAC",en:"LEGENDARY"}],ja=class{constructor(t){this.game=t,this.reset()}reset(){this.n=0,this.pts=0,this.t=0,this.tmax=1,this.tier=-1,this.list=[]}get mult(){return Math.min(6,1+Math.floor(this.n/2)*.5)}add(t,e,i=!1){let n=this.game;this.n++,this.pts+=e,this.tmax=this.t=Math.max(this.t,2.6+(i?.9:0)),this.list.push({label:t,pts:e}),this.list.length>4&&this.list.shift();let s=-1;for(let o=0;o<Oh.length;o++)this.n>=Oh[o].n&&(s=o);s>this.tier&&(this.tier=s,n.ui.comboTier(Oh[s],s),n.audio.tier(s),n.fovKick=Math.max(n.fovKick,5+s*1.5),n.fxFlash=Math.max(n.fxFlash,.08+s*.03)),n.audio.trick(this.n,i),n.tally.bestCombo=Math.max(n.tally.bestCombo,this.n),n.ui.combo(this)}update(t){if(!this.n)return;let e=this.game.player,i=e.state==="ground"&&e.speed<2.5;this.t-=t*(i?3:1-e.flow*.35),this.t<=0?this.bank():this.game.ui.comboTimer(this.t/this.tmax)}bank(){if(!this.n)return;let t=this.game,e=Math.round(this.pts*this.mult);t.player.style+=e;let i=this.n>=3?Math.floor(e/140):0;i&&(t.run.koban+=i),t.ui.comboBank(e,i,this.n),t.audio.bank(this.n),this.reset()}drop(){this.n&&(this.game.ui.comboDrop(this.n),this.game.audio.drop(),this.reset())}};var yd={move:["<kbd>W A S D</kbd> run &nbsp;\xB7&nbsp; <kbd>MOUSE</kbd> look &nbsp;\xB7&nbsp; follow the gold light","Left thumb: move \xB7 right thumb: drag to look around"],jump:["<kbd>SPACE</kbd> to leap. Keep <kbd>W</kbd> held into a ledge and you will climb it","<b>LEAP</b> across the gaps. Push into a ledge to climb it"],mantle:["Fell to the street? Crates and awnings are the way back up to the tiles","Fell to the street? Crates and awnings are the way back up"],sneak:["Hold <kbd>SHIFT</kbd> to sneak: silent, and much harder to see","<b>SNEAK</b> toggles a silent crouch that is much harder to see"],shadow:["Stand in a roof's shadow and the eye closes. Lanterns reach less far into the dark","Stand in a roof's shadow and the eye closes"],slide:["Tap <kbd>SHIFT</kbd> at a run to slide \xB7 tap it just before a long drop lands to roll","Tap <b>SNEAK</b> at a run to slide, or just before landing to roll"],tower:["Fire towers sweep the roofs with a bright beam. Cross behind it, or behind cover","Fire towers sweep the roofs. Cross behind the beam"],shuriken:["<kbd>LEFT CLICK</kbd> throws a shuriken: snuff a lantern, or make a noise somewhere else","<b>STAR</b> throws a shuriken: snuff a lantern or make a distraction"],rope:["Golden lantern lines can be walked. Steep ones are zip lines","Golden lantern lines can be walked. Steep ones are zip lines"],smoke:["<kbd>Q</kbd> drops a smoke bomb. The watch loses you at once","<b>SMOKE</b> drops a smoke bomb. The watch loses you at once"],hook:["Buy the Kaginawa in the Hideout, then press <kbd>E</kbd> while looking at a gold ring","Buy the Kaginawa in the Hideout, then tap <b>HOOK</b> near a gold ring"],wallrun:["Jump along a tall wall to run on it \xB7 <kbd>SPACE</kbd> again to kick off","Jump along a tall wall to run on it \xB7 <b>LEAP</b> again to kick off"],job:["Tonight's job is top right. Follow the red light to it, then run for the kite","Tonight's job is top right. Follow the red light, then run for the kite"],takedown:["Get behind a guard and <kbd>LEFT CLICK</kbd> to take him down \xB7 or drop on one from above","Get behind a guard and tap <b>STRIKE</b> \xB7 or drop on one from above"],flip:["Press <kbd>SPACE</kbd> again in mid-air to flip \xB7 hold <kbd>S</kbd> or <kbd>A</kbd>/<kbd>D</kbd> for back and side flips","Tap <b>LEAP</b> again in mid-air to flip"],combo:["Every trick feeds the combo. Keep moving to keep it alive, and bank it for koban","Every trick feeds the combo. Keep moving to keep it alive"],hay:["See a straw cart below a perch? Jump. Straw breaks any fall and hides you","Straw carts break any fall, and hide you"]},wx={S:40,A:25,B:15,C:8,D:4},Bh=class{constructor(){this.canvas=document.getElementById("game"),this.state="loading",this.over=!0,this.time=0,this.settings=te.data.settings,this.stats={},this.run={time:0,koban:0,alerts:0,deaths:0,cat:!1,revived:!1,maxFlow:0,checkpoint:null,started:!1},this.hp=100,this.stars=0,this.smokes=0,this.invuln=0,this.calmT=0,this.hookTarget=null,this.hookScanT=0,this.hintQ=[],this.hintT=0,this.coinStreak=0,this.coinT=0,this.fxHurt=0,this.fxFlash=0,this.fade=1,this.fadeTarget=0,this.fxHidden=0,this.sat=1,this.endlessDepth=1,this.adCount=0,this.diag=new $a,this.diag.game=this,this.diagT=0,this.tally={},this.ts=1,this.slowT=0,this.slowK=1,this.freezeT=0,this.fovKick=0,this.alarmK=0,this.baseFog=new yt,this.baseTint=new D(1,1,1),this.baseHor=new yt}async boot(){let t=(n,s)=>{document.getElementById("load-fill").style.transform=`scaleX(${n})`,s&&(document.getElementById("load-text").textContent=s)};t(.1),await Promise.race([xe.init(),new Promise(n=>setTimeout(n,8e3))]),xe.loadingStart(),te.load(),this.settings=te.data.settings,t(.3,"Sharpening shuriken\u2026");try{await Promise.race([document.fonts.ready,new Promise(n=>setTimeout(n,1500))])}catch{}this.gfx=new wa(this.canvas),this.mats={world:Zu(),toon:wh(),decal:ld(),gold:wh({vertexColors:!1,color:16765024,emissive:16758832,emissiveIntensity:.7}),water:null},this.scene=new En,this.sky=Ju(),this.scene.add(this.sky),this.hemi=new Zs(16777215,16777215,1),this.sun=new tr(16777215,1),this.sun.castShadow=!0;let e=this.sun.shadow.camera;e.left=-70,e.right=70,e.top=70,e.bottom=-70,e.near=1,e.far=420,this.sun.shadow.bias=-6e-4,this.sun.shadow.normalBias=.05,this.scene.add(this.hemi,this.sun,this.sun.target),this.audio=new Va,this.ui=new Ya(this),this.input=new Ga(this.canvas,this),this.player=new Na(this),this.scene.add(this.player.camera,this.player.hookLine),this.actors=new Ba(this),this.hunter=new Ka(this),this.mission=new Wa(this),this.combo=new ja(this),this.scene.add(this.actors.group),this.weather=new Ja(this),this.applySettings(!0),this.refreshStats(),this.ui.syncSettings(),xe.sdk||(document.querySelector("#f-revive small").textContent="Once per run",document.querySelector("#r-double small").textContent="Bonus"),xe.onAdState=n=>{this.audio.setDucked(n)},xe.onSettings(()=>this.audio.setMuted(xe.muted)),this.audio.setMuted(xe.muted),addEventListener("resize",()=>this.resize()),document.addEventListener("visibilitychange",()=>{document.hidden?(this.state==="playing"&&this.pause(),this.audio.setDucked(!0)):xe.adActive||this.audio.setDucked(!1)});let i=()=>{this.audio.init()};addEventListener("pointerdown",i,{passive:!0}),addEventListener("keydown",i),t(.6,"Raising the rooftops\u2026"),await new Promise(n=>setTimeout(n,30)),this.loadWorld(this.nextCampaignLevel()),t(1,"Ready"),this.resize(),this.last=performance.now(),this.frame(this.last),this.toMenu(!0),xe.loadingStop(),requestAnimationFrame(n=>this.loop(n))}applySettings(t=!1){let e=this.settings;if(this.input.sens=e.sens,this.input.invertY=e.invertY,this.audio.setVolumes(e.sfx,e.music),t){let i=e.quality<0?xe.isMobile?1:2:e.quality;this.gfx.setQuality(i);let n=i===0?1024:2048;this.sun.shadow.mapSize.x!==n&&(this.sun.shadow.mapSize.set(n,n),this.sun.shadow.map&&(this.sun.shadow.map.dispose(),this.sun.shadow.map=null)),this.gfx.fx.uBloom.value=i===0?.8:1}}refreshStats(){let t=i=>te.up(i);this.stats={noise:1-.2*t("tabi"),detect:1-.13*t("cloak"),maxHp:100+25*t("vigor"),starMax:4+2*t("pouch"),smokeMax:1+t("smoke"),hookRange:t("hook")?18+7*t("hook"):0,magnet:2.3+1.4*t("charm"),flowBonus:.12+.045*t("wind"),flowDecay:1-.25*t("wind")},document.body.classList.toggle("nohook",this.stats.hookRange<=0);let e=_r.find(i=>i.key===te.data.wrap)||_r[0];this.player.setWrapColor(e.color)}resize(){this.gfx.resize();let t=this.player.camera;t.aspect=this.canvas.clientWidth/Math.max(1,this.canvas.clientHeight),t.updateProjectionMatrix()}nextCampaignLevel(){return zi[St(te.data.unlocked,1,zi.length)-1]}dailyDef(){let t=td(),e=gd(t);return e.dailySeed=t,e}endlessDef(t){this.endlessDepth=t,t===1&&(this.endlessSeed=Math.random()*1e9|0);let e=md(t,this.endlessSeed);return e.depth=t,e}loadWorld(t){this.world&&(this.world.dispose(),this.mats.water&&this.mats.water.dispose()),this.def=t;let e=this.pal=ka[t.d];this.mats.water=hd(e),this.world=new La(t,e,this.mats),this.scene.add(this.world.group);let i=this.sky.material.uniforms;i.uTop.value.setHex(e.skyTop),i.uMid.value.setHex(e.skyMid),i.uHor.value.setHex(e.skyHor),i.uSunCol.value.setHex(e.sun),i.uCloudA.value.setHex(e.cloudA),i.uCloudB.value.setHex(e.cloudB),i.uSunDir.value.copy(this.world.sunDir),i.uStars.value=e.stars,i.uFire.value=e.fire||0,i.uSunSize.value=e.key==="moon"||e.key==="festival"?.9984:.9991,this.hemi.color.setHex(e.hemiSky),this.hemi.groundColor.setHex(e.hemiGround),this.hemi.intensity=e.hemiInt,this.sun.color.setHex(e.sun),this.sun.intensity=e.sunInt;let n=this.gfx.fx;this.actors.petalMat.color.setHex(e.blossom[1]),this.weather.set(t.weather||"clear");let s=this.weather.tintMul;this.baseFog.setHex(e.fog),this.baseHor.setHex(e.skyHor),this.baseTint.set(e.tint[0]*s,e.tint[1]*s,e.tint[2]*s),n.uFogColor.value.copy(this.baseFog),n.uFogDensity.value=e.fogDensity*this.weather.fogMul,n.uInk.value.setHex(e.ink),n.uTint.value.set(this.baseTint.x,this.baseTint.y,this.baseTint.z),this.actors.build(this.world),this.player.reset(this.world.start),this.kobanMax=this.world.pickups.filter(o=>o.type==="koban").length+this.world.pickups.filter(o=>o.type==="stack").length*5}resetRun(){this.run={time:0,koban:0,alerts:0,deaths:0,cat:!1,revived:!1,maxFlow:0,checkpoint:this.world.checkpoints[0],started:!1},this.hp=this.stats.maxHp,this.stars=this.stats.starMax,this.smokes=this.stats.smokeMax,this.over=!1,this.invuln=0,this.calmT=0,this.sat=1,this.fxHurt=0,this.coinStreak=0,this.player.style=0,this.run.jobAlerts=0,this.tally={takedowns:0,airKills:0,flips:0,bestCombo:0,leaps:0,snuffs:0,wallruns:0,closeCalls:0,escapeHits:0},this.combo.reset(),this.hunter.reset(),this.ts=1,this.slowT=0,this.freezeT=0,this.fovKick=0,this.alarmK=0,this.hayFall=!1,this.escapeT=0,this.mission.setup(this.world,this.def);let t=this.input.touch?1:0;this.hintQ=(this.def.hints||[]).map(e=>yd[e][t]),this.hintT=5.6}async startRun(t,e=!1){if(this.busy)return;if(this.busy=!0,this.audio.init(),this.fadeTarget=1,await zh(360),e&&await this.showMidgame(),!(this.def&&this.def.id===t.id&&this.def.seed===t.seed))this.loadWorld(t);else{for(let s of this.world.pickups)s.taken=!1,s.gone=!1,s.fly=0;let n=this.world;this.actors.build(n),this.player.reset(n.start)}this.refreshStats(),this.resetRun(),this.ui.clearTransient(),this.ui.hideScreens(),this.ui.hud(!0),this.set("playing"),this.ui.intro(this.def,this.pal,this.mission),this.ui.set("obj-title",`${this.def.endless||this.def.daily?this.def.name.toUpperCase():"NIGHT "+this.def.id} \xB7 ${this.mission.verb}`),this.ui.set("obj-text",this.mission.objective),this.audio.setMode("calm"),te.data.totals.runs++,te.save(),this.fadeTarget=0,this.busy=!1}set(t){this.state=t;let e=t==="playing";this.input.enabled=e,e&&(this.input.lock(),xe.gameplayStart(),this.audio.resume()),e?(xe.gameplayStop(),this.audio.stopLoops(),this.audio.setWind(0)):(this.audio.slow(!1),this.ts=1,this.slowT=0,this.freezeT=0),t!=="playing"&&t!=="finale"&&this.input.unlock(),this.player.arms.visible=t==="playing"||t==="paused"||t==="failed",document.getElementById("kite").classList.toggle("hidden",t!=="finale"),document.getElementById("hud").classList.toggle("cine",t==="finale")}pause(){if(this.state!=="playing")return;this.input.touch&&this.diag.flush(this),this.set("paused"),this.ui.show("pause");let t=document.getElementById("p-contracts");t&&(t.innerHTML=`<div class="job">${this.mission.objective}</div>`+this.mission.contractState().map(n=>`<div class="${n.ok&&!n.atEnd?"ok":""}">${n.ok&&!n.atEnd?"\u25C6":"\u25C7"} ${n.text}</div>`).join(""));let e=document.getElementById("p-diag"),i=this.input.tc;if(e&&(e.classList.toggle("hidden",!this.input.touch||!i),i)){let n=this.diag.counts,s=i.presses.slice(-3).map(o=>`${o.side}${o.ms}ms/${o.moves}mv/${o.end}`).join(" ");e.textContent=`Touch check: start ${n["pointerdown:touch"]||n.touchstart||0} \xB7 drag ${n["pointermove:touch"]||n.touchmove||0} \xB7 end ${n["pointerup:touch"]||n.touchend||0} \xB7 cancelled ${n["pointercancel:touch"]||n.touchcancel||0} \xB7 ${s}`}}resume(){this.state==="paused"&&(this.ui.hideScreens(),this.input.reset(),this.set("playing"))}onLockFailed(){this.state==="playing"&&this.ui.hint("Hold the left mouse button and drag to look &nbsp;\xB7&nbsp; <kbd>F</kbd> throws a shuriken",9)}onTouchMode(){this.def&&this.state==="playing"&&(this.hintQ=this.hintQ.map(t=>{let e=Object.values(yd).find(i=>i[0]===t);return e?e[1]:t}))}onPointerUnlock(){this.state==="playing"&&!this.input.touch&&this.pause()}onPauseKey(){this.state==="playing"?this.pause():this.state==="paused"&&this.ui.current==="pause"?this.resume():["settings","shop","nights"].includes(this.ui.current)&&this.ui.show(this.ui.backTo)}onRestartKey(){this.state==="playing"&&this.run.started&&this.respawn(!1)}async toMenu(t=!1){t||(this.fadeTarget=1,await zh(300)),this.over=!0,this.set("menu"),this.ui.hud(!1),this.ui.clearTransient(),this.actors.resetAlert(),this.audio.setMode("menu"),this.ui.show("menu"),this.fadeTarget=0}async restartRun(t){await this.startRun(this.def,t)}async nextRun(){let t;this.def.endless?t=this.endlessDef(this.endlessDepth+1):t=zi[Math.min(zi.length,this.def.id+1)-1],await this.startRun(t,!0)}async showMidgame(){this.adCount++,!(this.adCount<2)&&await xe.midgame()}async respawn(t){if(this.busy)return;this.busy=!0,this.fadeTarget=1,await zh(280);let e=this.run.checkpoint||this.world.checkpoints[0];this.player.reset(e),this.actors.resetAlert(),this.run.deaths++,this.hp=this.stats.maxHp,this.over=!1,this.sat=1,this.invuln=1.5,this.stars=Math.max(this.stars,2),this.ui.clearTransient(),this.ui.hideScreens(),this.input.reset(),this.set("playing"),this.fadeTarget=0,this.busy=!1}async reviveWithAd(){if(this.busy||this.run.revived)return;this.busy=!0;let t=await xe.rewarded();if(this.busy=!1,!t){this.ui.toast("No ad available right now");return}this.run.revived=!0,this.actors.resetAlert(),this.actors.dropSmoke(this.player.pos.x,this.player.pos.y,this.player.pos.z),this.hp=this.stats.maxHp,this.over=!1,this.sat=1,this.invuln=2.5,this.smokes=Math.max(this.smokes,1),this.player.frozen=!1,this.player.vel.set(0,0,0),this.ui.hideScreens(),this.input.reset(),this.set("playing")}async doubleReward(){if(this.busy||!this.lastResult||this.lastResult.doubled)return;this.busy=!0;let t=await xe.rewarded();if(this.busy=!1,!t){this.ui.toast("No ad available right now");return}this.lastResult.doubled=!0,te.data.koban+=this.lastResult.earn,te.save(),this.audio.buy(),this.ui.setEarn(this.lastResult.earn*2)}noise(t,e,i,n,s){this.actors.hear(t,e,i,n,s)}onStyle(t,e){this.onTrick(t,e)}onTrick(t,e,i=!1){this.over||this.state!=="playing"||(t==="Wall Run"&&this.tally.wallruns++,(t==="Lantern Snuffed"||t==="Lights Out")&&this.tally.snuffs++,this.combo.add(t,e,i))}slowmo(t,e){this.slowK=Math.min(this.slowT>0?this.slowK:1,t),this.slowT=Math.max(this.slowT,e)}tryAirKill(t,e){return this.actors.tryAirKill(t,e)}onTakedown(t,e){this.tally.takedowns++,e&&this.tally.airKills++;let i=t.role==="target";this.onTrick(e?"Death From Above":i?"Assassination":"Takedown",e?320:i?260:150,!0),this.freezeT=.07,this.slowmo(.28,e?.75:.5),this.fovKick=9,this.player.shake=Math.max(this.player.shake,.5),this.ui.slash(e),this.audio.slash(),this.noise(t.pos.x,t.pos.y,t.pos.z,6,.4)}onHayLanding(t){this.audio.hay(),this.actors.burst({x:this.player.pos.x,y:this.player.pos.y+.6,z:this.player.pos.z},15979130,22,4,3),t>4.5&&(this.tally.leaps++,this.onTrick("Leap of Faith",280,!0)),this.actors.alert==="alert"&&(this.actors.loseTrail(9),this.onEscapeAlert(!1)),this.hunter.active&&(this.hunter.stun=Math.max(this.hunter.stun,2.2))}onCloseCall(){this.tally.closeCalls++,this.onTrick("Close Call",70),this.slowmo(.35,.3)}onBail(){this.combo.drop(),this.ui.stylePop("Bail!",0),this.audio.land(.8,!0)}onHoundStrike(){this.ui.slash(!1,!0),this.audio.slash(),this.damage(26,"hound",{pos:this.hunter.pos})}startEscape(t){let e={steal:["\u76D7","STOLEN"],kill:["\u6697\u6BBA","ASSASSINATED"],pickpocket:["\u638F","LIFTED"],"courier-down":["\u596A","TAKEN"],signal:["\u72FC\u7159","SIGNAL LIT"]}[t]||["\u5B8C","DONE"];this.ui.banner(e[0],e[1],"gold"),(t==="steal"||t==="signal")&&this.onTrick(t==="steal"?"The Heist":"Beacon Lit",250,!0),this.slowmo(.3,.9),this.fovKick=10,this.audio.bell(),this.ui.set("obj-text",this.mission.objective),this.ui.toast("The city wakes. Run for the kite!"),this.escapeT=1.6}releaseHound(){this.hunter.start(),this.actors.manhunt(),this.ui.banner("\u8FFD\u624B","THE HOUND IS ON YOUR TRAIL","red"),this.audio.whistle()}onLand(t,e){t>7&&this.actors.burst({x:e.x,y:e.y+.1,z:e.z},this.pal.tile[2],Math.min(10,Math.round(t*.6)),3,1.5)}onAlert(t){this.run.alerts++,this.mission.done||this.run.jobAlerts++,this.ui.banner("\u767A\u898B","SPOTTED","red"),this.fxFlash=.2}onEscapeAlert(t){this.hunter.active&&!t||(this.ui.banner("\u96A0\u5BC6","VANISHED","jade"),this.player.addFlow(.2,t?80:150,"Gave Them The Slip"))}onCheckpoint(t){this.run.checkpoint=t,this.hp=Math.min(this.stats.maxHp,this.hp+30),this.audio.checkpoint(),this.ui.banner("\u706F","CHECKPOINT","jade")}onPickup(t){let e=this.actors;t.type==="koban"||t.type==="stack"?(this.run.koban+=t.value,this.coinStreak=this.coinT>0?this.coinStreak+1:0,this.coinT=1.2,this.audio.coin(this.coinStreak),this.player.addFlow(.012,0),t.type==="stack"?(this.ui.stylePop("Koban Stack",5,!0),e.burst(t,15906106,12)):e.burst(t,15906106,3,2,2)):t.type==="shuriken"?(this.stars=Math.min(this.stats.starMax,this.stars+3),this.audio.pickup(),this.ui.stylePop("Shuriken",3,!0),this.ui.flashTool("tool-star")):t.type==="smoke"?(this.smokes=Math.min(this.stats.smokeMax,this.smokes+1),this.run.koban+=3,this.audio.pickup(),this.ui.stylePop("Smoke Bomb",1,!0),this.ui.flashTool("tool-smoke")):t.type==="onigiri"?(this.hp=Math.min(this.stats.maxHp,this.hp+40),this.audio.pickup(),this.ui.stylePop("Onigiri",40,!0)):t.type==="cat"&&(this.run.cat=!0,this.audio.cat(),this.ui.banner("\u62DB\u304D\u732B","LUCKY CAT FOUND","gold"),e.burst(t,16774886,20))}damage(t,e,i,n){if(this.over||this.invuln>0)return;this.hp-=t,this.combo.drop(),this.mission.done&&this.tally.escapeHits++,this.invuln=.45,this.calmT=0,this.fxHurt=1,this.player.shake=1,this.player.flow*=.5,this.audio.hurt();let s=this.player;if(i){let o=s.pos.x-i.pos.x,a=s.pos.z-i.pos.z,h=Math.hypot(o,a)||1;s.vel.x=o/h*7,s.vel.z=a/h*7,s.vel.y=3.5,(s.state==="ground"||s.state==="rope")&&(s.grounded=!1,s.state="air",s.rope=null,s.sliding=!1)}this.hp<=0&&(this.hp=0,this.fail(e==="fall"?"You hit the street hard. The watch found you where you lay.":e==="arrow"?"An arrow from the fire tower brought you down.":e==="hound"||e==="kunai"?"The Hound caught you on the tiles. Nobody outruns him by standing still.":"The night watch has you. Edo will hear of this by morning."))}onSplash(){if(this.over)return;this.audio.splash(),this.actors.burst(this.player.pos,13623551,16,4,4);let t=this.player.lastSafe,e=this.world.isWater(t.x,t.z)?this.run.checkpoint:{x:t.x,y:t.y,z:t.z,yaw:this.player.yaw};this.fxFlash=.5,this.hp=Math.max(1,this.hp-12);let i=this.player.flow*.3;this.player.reset(e),this.player.flow=i,this.ui.toast("The canal is cold. Mind the lantern lines.")}fail(t){this.over=!0,this.player.frozen=!0,this.audio.caught(),te.data.totals.caught++,te.save(),this.set("failed"),this.ui.showFailed(!this.run.revived,t)}finish(){if(this.over)return;this.over=!0,this.combo.bank();let t=this.def,e=this.run,i=te.data,n=e.time,s=this.mission.contractState(),o=s.every(M=>M.ok),a=[!0,e.jobAlerts===0,o],h="D";o&&e.jobAlerts===0&&e.deaths===0&&n<=t.par?h="S":e.deaths===0&&(o||e.jobAlerts===0)&&n<=t.par*1.3?h="A":n<=t.par*1.7&&e.deaths<=1?h="B":e.deaths<=2&&(h="C");let l=this.player.style,c=Math.max(0,Math.round(l+e.koban*20+Math.max(0,t.par*1.6-n)*25+(e.jobAlerts===0?1500:0)+s.filter(M=>M.ok).length*1e3-e.deaths*400)),u=t.daily?"daily":t.endless?"endless":String(t.id),d=i.levels[u]||{best:0,rank:"",seals:[!1,!1,!1],cat:!1,score:0},f="SABCD",g=a.map((M,v)=>M&&!d.seals[v]),x=e.cat&&!d.cat,m=!t.daily&&!t.endless,p=e.koban+wx[h]+(m?g.filter(Boolean).length*15:0)+(x&&m?25:0)+s.filter(M=>M.ok).length*20;t.endless&&(p+=t.depth*6);let _=!d.best||n<d.best;m?(d.best=_?n:d.best,d.rank=!d.rank||f.indexOf(h)<f.indexOf(d.rank)?h:d.rank,d.seals=d.seals.map((M,v)=>M||a[v]),d.cat=d.cat||e.cat,d.score=Math.max(d.score||0,c),i.levels[u]=d,i.unlocked=Math.max(i.unlocked,Math.min(zi.length,t.id+1)),x&&i.totals.cats++):t.daily?(i.daily.seed!==t.dailySeed||!i.daily.best||n<i.daily.best)&&(i.daily={seed:t.dailySeed,best:n,score:c}):i.endlessBest=Math.max(i.endlessBest,t.depth),i.koban+=p,i.totals.koban+=p,te.save(),this.lastResult={def:t,time:n,rank:h,seals:a,newSeals:m?g:[!1,!1,!1],cat:e.cat,newCat:x&&m,koban:e.koban,kobanMax:this.kobanMax,style:l,maxFlow:e.maxFlow,alerts:e.alerts,deaths:e.deaths,score:c,earn:p,newBest:m?_:!0,best:d.best||n,hasNext:t.endless||m&&t.id<zi.length,doubled:!1,contracts:s,tally:{...this.tally},verb:this.mission.verb},this.set("finale"),this.player.frozen=!0,this.finaleT=0,this.finaleFrom=this.player.camera.position.clone(),this.audio.win(),this.ui.clearTransient(),this.ui.banner("\u8131\u51FA","ESCAPED","gold"),(h==="S"||g.some(Boolean))&&xe.happytime()}loop(t){requestAnimationFrame(e=>this.loop(e)),this.frame(t)}frame(t){let e=(t-this.last)/1e3;this.last=t;let i=St(e,.001,.05);this.time+=i,e<.25&&this.gfx.trackFrame(e);let n=this.player,s=this.actors,o=this.gfx.fx;if(this.state==="playing"){this.freezeT>0?(this.freezeT-=i,this.ts=.03):(this.slowT>0&&(this.slowT-=i),this.ts=Wt(this.ts,this.slowT>0?this.slowK:1,this.slowT>0?30:6,i)),this.audio.slow(this.ts<.7);let c=i*this.ts;this.input.poll();let u=c>1/50?2:1;for(let d=0;d<u;d++)this.step(c/u),this.input.endFrame()}else this.state==="menu"?this.menuCam(i):this.state==="finale"?this.finale(i):n.updateCamera(i,0,0);if(s.updateParticles(i*this.ts,n.camera),this.weather.update(i,n.camera),this.fovKick=Math.max(0,this.fovKick-i*14),this.alarmK=Wt(this.alarmK,this.mission.done&&Tx(this.state)?1:0,1.2,i),this.alarmK>.001||this._alarmOn){this._alarmOn=this.alarmK>.001;let c=this.alarmK,u=.5+.5*Math.sin(this.time*2.2);o.uFogColor.value.copy(this.baseFog).lerp(_d,.28*c),o.uTint.value.set(this.baseTint.x*(1+.1*c),this.baseTint.y*(1-.06*c),this.baseTint.z*(1-.08*c)),this.sky.material.uniforms.uHor.value.copy(this.baseHor).lerp(_d,(.3+.1*u)*c)}this.audio.update(i),this.ui.update(i),this.fxHurt=Math.max(0,this.fxHurt-i*2.2),this.fxFlash=Math.max(0,this.fxFlash-i*1.6),this.fade=Wt(this.fade,this.fadeTarget,12,i);let a=this.state==="playing",h=a&&n.inShadow&&s.detect<.04&&s.alert==="calm";this.fxHidden=Wt(this.fxHidden,h?1:0,4,i),this.sat=Wt(this.sat,this.state==="failed"?.15:this.ts<.7?.7:1,3,i),o.uHurt.value=this.fxHurt,o.uFlash.value=this.fxFlash,o.uFade.value=this.fade,o.uHidden.value=this.fxHidden,o.uSat.value=this.sat,o.uDanger.value=a?s.alert==="alert"?.55+Math.sin(this.time*9)*.15:s.detect*.75:0,o.uSpeed.value=a?tn(9.6,15,Math.hypot(n.vel.x,n.vel.y*.6,n.vel.z))*(.5+n.flow*.5)+(n.state==="hook"?.6:0)+(n.flip?.5:0)+(this.ts<.7?.4:0):this.state==="finale"?.7:0;let l=n.camera;this.sky.position.copy(l.position),this.sky.material.uniforms.uTime.value=this.time,this.mats.water&&(this.mats.water.uniforms.uTime.value=this.time),this.updateSun(l),this.gfx.render(this.scene,l,this.time)}step(t){let e=this.player,i=this.actors,n=this.input,s=this.run;if(!s.started&&(n.moveX||n.moveZ||n.jumpPressed)&&(s.started=!0),s.started&&!this.over&&(s.time+=t),this.invuln=Math.max(0,this.invuln-t),this.coinT-=t,this.input.touch){this.diagT+=t;let a=this.input.tc;a&&a.stick&&this.diagT>.5&&(this.diagT=0,this.diag.sample({t:+this.run.time.toFixed(1),mz:+n.moveZ.toFixed(2),mx:+n.moveX.toFixed(2),v:+e.speed.toFixed(1),st:e.state})),this.run.time>12&&this.diag.writes<2&&this.diag.flush(this)}if(this.tdTarget=this.over?null:i.takedownTarget(e),n.throwPressed&&!this.over&&this.tdTarget?(e.throwT=.3,i.takedown(this.tdTarget,!1)):n.throwPressed&&!this.over&&(this.stars>0?(this.stars--,e.throwT=.3,e.camera.updateMatrixWorld(),i.throwShuriken(e.camera),this.ui.flashTool("tool-star")):this.audio.deny()),n.smokePressed&&!this.over&&(this.smokes>0?(this.smokes--,i.dropSmoke(e.pos.x,e.pos.y,e.pos.z),this.ui.flashTool("tool-smoke")):this.audio.deny()),e.update(t,n),this.hunter.record(e.pos),i.update(t),this.mission.update(t),this.escapeT>0&&(this.escapeT-=t,this.escapeT<=0&&!this.over&&this.releaseHound()),this.hunter.update(t),this.combo.update(t),this.mission.type==="signal"&&!this.mission.done&&this.ui.set("obj-text",this.mission.objective),e.state==="air"&&e.vel.y<-5&&!this.hayFall){let a=this.world.groundAt(e.pos.x,e.pos.z,e.pos.y,0);this.world.hit&&this.world.hit.hay&&e.pos.y-a>4&&(this.hayFall=!0,this.slowmo(.4,.55),this.audio.flip())}e.grounded&&(this.hayFall=!1),s.maxFlow=Math.max(s.maxFlow,e.flow),this.calmT=i.alert==="calm"?this.calmT+t:0,this.calmT>6&&this.hp<this.stats.maxHp&&!this.over&&(this.hp=Math.min(this.stats.maxHp,this.hp+t*4)),this.audio.setMode(i.alert==="alert"?"chase":i.alert==="search"||i.detect>.3?"tense":"calm"),this.audio.setWind(St((Math.hypot(e.vel.x,e.vel.y,e.vel.z)-3)/14,0,1)),this.hintQ.length&&(this.hintT-=t,this.hintT<=0&&(this.ui.hint(this.hintQ.shift(),6.5),this.hintT=9)),this.stats.hookRange>0?(this.hookScanT-=t,this.hookScanT<=0&&(this.hookScanT=.12,this.hookTarget=this.findHookTarget())):this.hookTarget=null;let o=this.world.goal;!this.over&&Math.hypot(o.x-e.pos.x,o.z-e.pos.z)<o.r&&Math.abs(e.pos.y-o.y)<2.5&&(this.mission.done?this.finish():this.goalNag||(this.goalNag=!0,this.ui.toast(`The kite waits for the job: ${this.mission.objective}`),setTimeout(()=>{this.goalNag=!1},4e3)))}findHookTarget(){let t=this.player;if(t.state==="hook"||t.hookCd>0)return null;let e=t.camera.position,i=new D;t.camera.getWorldDirection(i);let n=null,s=Math.cos(.3);for(let o of this.world.anchors){let a=o.x-e.x,h=o.y-e.y,l=o.z-e.z,c=Math.hypot(a,h,l);if(c>this.stats.hookRange||c<3)continue;let u=(a*i.x+h*i.y+l*i.z)/c;u>s&&(s=u,n=o)}return n}finale(t){let e=this.player.camera,i=this.world.goal;this.finaleT+=t;let n=this.finaleT,s=tn(0,3.2,n);e.position.set(this.finaleFrom.x+(i.x-this.finaleFrom.x)*Math.min(1,n*2),this.finaleFrom.y+2+s*16-n*n*.6,this.finaleFrom.z-s*70-n*6),e.rotation.set(-.22-s*.12,Wt(e.rotation.y,0,3,t),Math.sin(n*1.3)*.05),this.player.fov=Wt(this.player.fov,96,3,t),this.player.applyFov(this.player.fov),this.player.arms.visible=!1,n>3.4&&this.state==="finale"&&(this.set("results"),this.ui.hud(!1),this.ui.showResults(this.lastResult))}menuCam(t){let e=this.player.camera,i=this.world,n=this.time*.6,s=Math.max(40,i.length*.7),o=10-n*2.4%s;e.position.set(Math.sin(n*.11)*13,15.5+Math.sin(n*.17)*2.2,o),e.rotation.set(-.2+Math.sin(n*.13)*.04,Math.sin(n*.09)*.4,0),this.player.fov=68,this.player.applyFov(68)}updateSun(t){let e=this.world.sunDir,i=this.sun,n=new D;t.getWorldDirection(n);let s=t.position.x+n.x*34,o=t.position.z+n.z*34,a=4,h=new D().crossVectors(new D(0,1,0),e).normalize(),l=new D().crossVectors(e,h).normalize(),c=140/i.shadow.mapSize.x,u=new D(s,a,o),d=Math.round(u.dot(h)/c)*c,f=Math.round(u.dot(l)/c)*c,g=u.dot(e);u.copy(h).multiplyScalar(d).addScaledVector(l,f).addScaledVector(e,g),i.target.position.copy(u),i.position.copy(u).addScaledVector(e,200)}},zh=r=>new Promise(t=>setTimeout(t,r)),_d=new yt(16730672),Tx=r=>r==="playing"||r==="paused"||r==="failed",vd=new Bh;window.__game=vd;vd.boot().catch(r=>{console.error(r);let t=document.getElementById("load-text");t&&(t.textContent="Could not start: "+(r&&r.message?r.message:r))});})();
