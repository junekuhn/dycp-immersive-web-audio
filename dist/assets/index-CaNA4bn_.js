(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();window.global||(window.global=window);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const REVISION="168",CullFaceNone=0,CullFaceBack=1,CullFaceFront=2,PCFShadowMap=1,PCFSoftShadowMap=2,VSMShadowMap=3,FrontSide=0,BackSide=1,DoubleSide=2,NoBlending=0,NormalBlending=1,AdditiveBlending=2,SubtractiveBlending=3,MultiplyBlending=4,CustomBlending=5,AddEquation=100,SubtractEquation=101,ReverseSubtractEquation=102,MinEquation=103,MaxEquation=104,ZeroFactor=200,OneFactor=201,SrcColorFactor=202,OneMinusSrcColorFactor=203,SrcAlphaFactor=204,OneMinusSrcAlphaFactor=205,DstAlphaFactor=206,OneMinusDstAlphaFactor=207,DstColorFactor=208,OneMinusDstColorFactor=209,SrcAlphaSaturateFactor=210,ConstantColorFactor=211,OneMinusConstantColorFactor=212,ConstantAlphaFactor=213,OneMinusConstantAlphaFactor=214,NeverDepth=0,AlwaysDepth=1,LessDepth=2,LessEqualDepth=3,EqualDepth=4,GreaterEqualDepth=5,GreaterDepth=6,NotEqualDepth=7,MultiplyOperation=0,MixOperation=1,AddOperation=2,NoToneMapping=0,LinearToneMapping=1,ReinhardToneMapping=2,CineonToneMapping=3,ACESFilmicToneMapping=4,CustomToneMapping=5,AgXToneMapping=6,NeutralToneMapping=7,UVMapping=300,CubeReflectionMapping=301,CubeRefractionMapping=302,EquirectangularReflectionMapping=303,EquirectangularRefractionMapping=304,CubeUVReflectionMapping=306,RepeatWrapping=1e3,ClampToEdgeWrapping=1001,MirroredRepeatWrapping=1002,NearestFilter=1003,NearestMipmapNearestFilter=1004,NearestMipmapLinearFilter=1005,LinearFilter=1006,LinearMipmapNearestFilter=1007,LinearMipmapLinearFilter=1008,UnsignedByteType=1009,ByteType=1010,ShortType=1011,UnsignedShortType=1012,IntType=1013,UnsignedIntType=1014,FloatType=1015,HalfFloatType=1016,UnsignedShort4444Type=1017,UnsignedShort5551Type=1018,UnsignedInt248Type=1020,UnsignedInt5999Type=35902,AlphaFormat=1021,RGBFormat=1022,RGBAFormat=1023,LuminanceFormat=1024,LuminanceAlphaFormat=1025,DepthFormat=1026,DepthStencilFormat=1027,RedFormat=1028,RedIntegerFormat=1029,RGFormat=1030,RGIntegerFormat=1031,RGBAIntegerFormat=1033,RGB_S3TC_DXT1_Format=33776,RGBA_S3TC_DXT1_Format=33777,RGBA_S3TC_DXT3_Format=33778,RGBA_S3TC_DXT5_Format=33779,RGB_PVRTC_4BPPV1_Format=35840,RGB_PVRTC_2BPPV1_Format=35841,RGBA_PVRTC_4BPPV1_Format=35842,RGBA_PVRTC_2BPPV1_Format=35843,RGB_ETC1_Format=36196,RGB_ETC2_Format=37492,RGBA_ETC2_EAC_Format=37496,RGBA_ASTC_4x4_Format=37808,RGBA_ASTC_5x4_Format=37809,RGBA_ASTC_5x5_Format=37810,RGBA_ASTC_6x5_Format=37811,RGBA_ASTC_6x6_Format=37812,RGBA_ASTC_8x5_Format=37813,RGBA_ASTC_8x6_Format=37814,RGBA_ASTC_8x8_Format=37815,RGBA_ASTC_10x5_Format=37816,RGBA_ASTC_10x6_Format=37817,RGBA_ASTC_10x8_Format=37818,RGBA_ASTC_10x10_Format=37819,RGBA_ASTC_12x10_Format=37820,RGBA_ASTC_12x12_Format=37821,RGBA_BPTC_Format=36492,RGB_BPTC_SIGNED_Format=36494,RGB_BPTC_UNSIGNED_Format=36495,RED_RGTC1_Format=36283,SIGNED_RED_RGTC1_Format=36284,RED_GREEN_RGTC2_Format=36285,SIGNED_RED_GREEN_RGTC2_Format=36286,BasicDepthPacking=3200,RGBADepthPacking=3201,TangentSpaceNormalMap=0,ObjectSpaceNormalMap=1,NoColorSpace="",SRGBColorSpace="srgb",LinearSRGBColorSpace="srgb-linear",DisplayP3ColorSpace="display-p3",LinearDisplayP3ColorSpace="display-p3-linear",LinearTransfer="linear",SRGBTransfer="srgb",Rec709Primaries="rec709",P3Primaries="p3",KeepStencilOp=7680,AlwaysStencilFunc=519,NeverCompare=512,LessCompare=513,EqualCompare=514,LessEqualCompare=515,GreaterCompare=516,NotEqualCompare=517,GreaterEqualCompare=518,AlwaysCompare=519,StaticDrawUsage=35044,GLSL3="300 es",WebGLCoordinateSystem=2e3,WebGPUCoordinateSystem=2001;class EventDispatcher{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const _lut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],DEG2RAD=Math.PI/180,RAD2DEG=180/Math.PI;function generateUUID(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(_lut[i&255]+_lut[i>>8&255]+_lut[i>>16&255]+_lut[i>>24&255]+"-"+_lut[e&255]+_lut[e>>8&255]+"-"+_lut[e>>16&15|64]+_lut[e>>24&255]+"-"+_lut[t&63|128]+_lut[t>>8&255]+"-"+_lut[t>>16&255]+_lut[t>>24&255]+_lut[n&255]+_lut[n>>8&255]+_lut[n>>16&255]+_lut[n>>24&255]).toLowerCase()}function clamp(i,e,t){return Math.max(e,Math.min(t,i))}function euclideanModulo(i,e){return(i%e+e)%e}function lerp(i,e,t){return(1-t)*i+t*e}function denormalize(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function normalize$1(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Vector2{constructor(e=0,t=0){Vector2.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(clamp(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Matrix3{constructor(e,t,n,r,s,a,o,c,l){Matrix3.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l)}set(e,t,n,r,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],f=n[5],m=n[8],v=r[0],g=r[3],_=r[6],F=r[1],x=r[4],y=r[7],R=r[2],L=r[5],G=r[8];return s[0]=a*v+o*F+c*R,s[3]=a*g+o*x+c*L,s[6]=a*_+o*y+c*G,s[1]=l*v+u*F+h*R,s[4]=l*g+u*x+h*L,s[7]=l*_+u*y+h*G,s[2]=d*v+f*F+m*R,s[5]=d*g+f*x+m*L,s[8]=d*_+f*y+m*G,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*s*u+n*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,d=o*c-u*s,f=l*s-a*c,m=t*h+n*d+r*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return e[0]=h*v,e[1]=(r*l-u*n)*v,e[2]=(o*n-r*a)*v,e[3]=d*v,e[4]=(u*t-r*c)*v,e[5]=(r*s-o*t)*v,e[6]=f*v,e[7]=(n*c-l*t)*v,e[8]=(a*t-n*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(_m3.makeScale(e,t)),this}rotate(e){return this.premultiply(_m3.makeRotation(-e)),this}translate(e,t){return this.premultiply(_m3.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _m3=new Matrix3;function arrayNeedsUint32(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function createElementNS(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function createCanvasElement(){const i=createElementNS("canvas");return i.style.display="block",i}const _cache={};function warnOnce(i){i in _cache||(_cache[i]=!0,console.warn(i))}function probeAsync(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const LINEAR_SRGB_TO_LINEAR_DISPLAY_P3=new Matrix3().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),LINEAR_DISPLAY_P3_TO_LINEAR_SRGB=new Matrix3().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),COLOR_SPACES={[LinearSRGBColorSpace]:{transfer:LinearTransfer,primaries:Rec709Primaries,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[SRGBColorSpace]:{transfer:SRGBTransfer,primaries:Rec709Primaries,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[LinearDisplayP3ColorSpace]:{transfer:LinearTransfer,primaries:P3Primaries,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(LINEAR_DISPLAY_P3_TO_LINEAR_SRGB),fromReference:i=>i.applyMatrix3(LINEAR_SRGB_TO_LINEAR_DISPLAY_P3)},[DisplayP3ColorSpace]:{transfer:SRGBTransfer,primaries:P3Primaries,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(LINEAR_DISPLAY_P3_TO_LINEAR_SRGB),fromReference:i=>i.applyMatrix3(LINEAR_SRGB_TO_LINEAR_DISPLAY_P3).convertLinearToSRGB()}},SUPPORTED_WORKING_COLOR_SPACES=new Set([LinearSRGBColorSpace,LinearDisplayP3ColorSpace]),ColorManagement={enabled:!0,_workingColorSpace:LinearSRGBColorSpace,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!SUPPORTED_WORKING_COLOR_SPACES.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=COLOR_SPACES[e].toReference,r=COLOR_SPACES[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return COLOR_SPACES[i].primaries},getTransfer:function(i){return i===NoColorSpace?LinearTransfer:COLOR_SPACES[i].transfer},getLuminanceCoefficients:function(i,e=this._workingColorSpace){return i.fromArray(COLOR_SPACES[e].luminanceCoefficients)}};function SRGBToLinear(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function LinearToSRGB(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let _canvas;class ImageUtils{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{_canvas===void 0&&(_canvas=createElementNS("canvas")),_canvas.width=e.width,_canvas.height=e.height;const n=_canvas.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=_canvas}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=createElementNS("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=SRGBToLinear(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(SRGBToLinear(t[n]/255)*255):t[n]=SRGBToLinear(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _sourceId=0;class Source{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_sourceId++}),this.uuid=generateUUID(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(serializeImage(r[a].image)):s.push(serializeImage(r[a]))}else s=serializeImage(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function serializeImage(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ImageUtils.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _textureId=0;class Texture extends EventDispatcher{constructor(e=Texture.DEFAULT_IMAGE,t=Texture.DEFAULT_MAPPING,n=ClampToEdgeWrapping,r=ClampToEdgeWrapping,s=LinearFilter,a=LinearMipmapLinearFilter,o=RGBAFormat,c=UnsignedByteType,l=Texture.DEFAULT_ANISOTROPY,u=NoColorSpace){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_textureId++}),this.uuid=generateUUID(),this.name="",this.source=new Source(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Vector2(0,0),this.repeat=new Vector2(1,1),this.center=new Vector2(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Matrix3,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==UVMapping)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case RepeatWrapping:e.x=e.x-Math.floor(e.x);break;case ClampToEdgeWrapping:e.x=e.x<0?0:1;break;case MirroredRepeatWrapping:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case RepeatWrapping:e.y=e.y-Math.floor(e.y);break;case ClampToEdgeWrapping:e.y=e.y<0?0:1;break;case MirroredRepeatWrapping:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Texture.DEFAULT_IMAGE=null;Texture.DEFAULT_MAPPING=UVMapping;Texture.DEFAULT_ANISOTROPY=1;class Vector4{constructor(e=0,t=0,n=0,r=1){Vector4.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],m=c[9],v=c[2],g=c[6],_=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+v)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(l+1)/2,y=(f+1)/2,R=(_+1)/2,L=(u+d)/4,G=(h+v)/4,M=(m+g)/4;return x>y&&x>R?x<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(x),r=L/n,s=G/n):y>R?y<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),n=L/r,s=M/r):R<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),n=G/s,r=M/s),this.set(n,r,s,t),this}let F=Math.sqrt((g-m)*(g-m)+(h-v)*(h-v)+(d-u)*(d-u));return Math.abs(F)<.001&&(F=1),this.x=(g-m)/F,this.y=(h-v)/F,this.z=(d-u)/F,this.w=Math.acos((l+f+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class RenderTarget extends EventDispatcher{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Vector4(0,0,e,t),this.scissorTest=!1,this.viewport=new Vector4(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:LinearFilter,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Texture(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Source(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class WebGLRenderTarget extends RenderTarget{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class DataArrayTexture extends Texture{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=NearestFilter,this.minFilter=NearestFilter,this.wrapR=ClampToEdgeWrapping,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Data3DTexture extends Texture{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=NearestFilter,this.minFilter=NearestFilter,this.wrapR=ClampToEdgeWrapping,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Quaternion{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],l=n[r+1],u=n[r+2],h=n[r+3];const d=s[a+0],f=s[a+1],m=s[a+2],v=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=v;return}if(h!==v||c!==d||l!==f||u!==m){let g=1-o;const _=c*d+l*f+u*m+h*v,F=_>=0?1:-1,x=1-_*_;if(x>Number.EPSILON){const R=Math.sqrt(x),L=Math.atan2(R,_*F);g=Math.sin(g*L)/R,o=Math.sin(o*L)/R}const y=o*F;if(c=c*g+d*y,l=l*g+f*y,u=u*g+m*y,h=h*g+v*y,g===1-o){const R=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=R,l*=R,u*=R,h*=R}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],c=n[r+1],l=n[r+2],u=n[r+3],h=s[a],d=s[a+1],f=s[a+2],m=s[a+3];return e[t]=o*m+u*h+c*f-l*d,e[t+1]=c*m+u*d+l*h-o*f,e[t+2]=l*m+u*f+o*d-c*h,e[t+3]=u*m-o*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(r/2),h=o(s/2),d=c(n/2),f=c(r/2),m=c(s/2);switch(a){case"XYZ":this._x=d*u*h+l*f*m,this._y=l*f*h-d*u*m,this._z=l*u*m+d*f*h,this._w=l*u*h-d*f*m;break;case"YXZ":this._x=d*u*h+l*f*m,this._y=l*f*h-d*u*m,this._z=l*u*m-d*f*h,this._w=l*u*h+d*f*m;break;case"ZXY":this._x=d*u*h-l*f*m,this._y=l*f*h+d*u*m,this._z=l*u*m+d*f*h,this._w=l*u*h-d*f*m;break;case"ZYX":this._x=d*u*h-l*f*m,this._y=l*f*h+d*u*m,this._z=l*u*m-d*f*h,this._w=l*u*h+d*f*m;break;case"YZX":this._x=d*u*h+l*f*m,this._y=l*f*h+d*u*m,this._z=l*u*m-d*f*h,this._w=l*u*h-d*f*m;break;case"XZY":this._x=d*u*h-l*f*m,this._y=l*f*h-d*u*m,this._z=l*u*m+d*f*h,this._w=l*u*h+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(s-l)*f,this._z=(a-r)*f}else if(n>o&&n>h){const f=2*Math.sqrt(1+n-o-h);this._w=(u-c)/f,this._x=.25*f,this._y=(r+a)/f,this._z=(s+l)/f}else if(o>h){const f=2*Math.sqrt(1+o-n-h);this._w=(s-l)/f,this._x=(r+a)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-n-o);this._w=(a-r)/f,this._x=(s+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(clamp(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-n*l,this._z=s*u+a*l+n*c-r*o,this._w=a*u-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Vector3{constructor(e=0,t=0,n=0){Vector3.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_quaternion$4.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_quaternion$4.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*n),u=2*(o*t-s*r),h=2*(s*n-a*t);return this.x=t+c*l+a*h-o*u,this.y=n+c*u+o*l-s*h,this.z=r+c*h+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return _vector$c.copy(this).projectOnVector(e),this.sub(_vector$c)}reflect(e){return this.sub(_vector$c.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(clamp(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _vector$c=new Vector3,_quaternion$4=new Quaternion;class Box3{constructor(e=new Vector3(1/0,1/0,1/0),t=new Vector3(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(_vector$b.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(_vector$b.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=_vector$b.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,_vector$b):_vector$b.fromBufferAttribute(s,a),_vector$b.applyMatrix4(e.matrixWorld),this.expandByPoint(_vector$b);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_box$4.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),_box$4.copy(n.boundingBox)),_box$4.applyMatrix4(e.matrixWorld),this.union(_box$4)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,_vector$b),_vector$b.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_center),_extents.subVectors(this.max,_center),_v0$3.subVectors(e.a,_center),_v1$7.subVectors(e.b,_center),_v2$4.subVectors(e.c,_center),_f0.subVectors(_v1$7,_v0$3),_f1.subVectors(_v2$4,_v1$7),_f2.subVectors(_v0$3,_v2$4);let t=[0,-_f0.z,_f0.y,0,-_f1.z,_f1.y,0,-_f2.z,_f2.y,_f0.z,0,-_f0.x,_f1.z,0,-_f1.x,_f2.z,0,-_f2.x,-_f0.y,_f0.x,0,-_f1.y,_f1.x,0,-_f2.y,_f2.x,0];return!satForAxes(t,_v0$3,_v1$7,_v2$4,_extents)||(t=[1,0,0,0,1,0,0,0,1],!satForAxes(t,_v0$3,_v1$7,_v2$4,_extents))?!1:(_triangleNormal.crossVectors(_f0,_f1),t=[_triangleNormal.x,_triangleNormal.y,_triangleNormal.z],satForAxes(t,_v0$3,_v1$7,_v2$4,_extents))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_vector$b).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_vector$b).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_points[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_points[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_points[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_points[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_points[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_points[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_points[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_points[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_points),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const _points=[new Vector3,new Vector3,new Vector3,new Vector3,new Vector3,new Vector3,new Vector3,new Vector3],_vector$b=new Vector3,_box$4=new Box3,_v0$3=new Vector3,_v1$7=new Vector3,_v2$4=new Vector3,_f0=new Vector3,_f1=new Vector3,_f2=new Vector3,_center=new Vector3,_extents=new Vector3,_triangleNormal=new Vector3,_testAxis=new Vector3;function satForAxes(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){_testAxis.fromArray(i,s);const o=r.x*Math.abs(_testAxis.x)+r.y*Math.abs(_testAxis.y)+r.z*Math.abs(_testAxis.z),c=e.dot(_testAxis),l=t.dot(_testAxis),u=n.dot(_testAxis);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const _box$3=new Box3,_v1$6=new Vector3,_v2$3=new Vector3;class Sphere{constructor(e=new Vector3,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):_box$3.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_v1$6.subVectors(e,this.center);const t=_v1$6.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(_v1$6,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_v2$3.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_v1$6.copy(e.center).add(_v2$3)),this.expandByPoint(_v1$6.copy(e.center).sub(_v2$3))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _vector$a=new Vector3,_segCenter=new Vector3,_segDir=new Vector3,_diff=new Vector3,_edge1=new Vector3,_edge2=new Vector3,_normal$1=new Vector3;class Ray{constructor(e=new Vector3,t=new Vector3(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_vector$a)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=_vector$a.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_vector$a.copy(this.origin).addScaledVector(this.direction,t),_vector$a.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){_segCenter.copy(e).add(t).multiplyScalar(.5),_segDir.copy(t).sub(e).normalize(),_diff.copy(this.origin).sub(_segCenter);const s=e.distanceTo(t)*.5,a=-this.direction.dot(_segDir),o=_diff.dot(this.direction),c=-_diff.dot(_segDir),l=_diff.lengthSq(),u=Math.abs(1-a*a);let h,d,f,m;if(u>0)if(h=a*c-o,d=a*o-c,m=s*u,h>=0)if(d>=-m)if(d<=m){const v=1/u;h*=v,d*=v,f=h*(h+a*d+2*o)+d*(a*h+d+2*c)+l}else d=s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;else d=-s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;else d<=-m?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-c),s),f=-h*h+d*(d+2*c)+l):d<=m?(h=0,d=Math.min(Math.max(-s,-c),s),f=d*(d+2*c)+l):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-c),s),f=-h*h+d*(d+2*c)+l);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(_segCenter).addScaledVector(_segDir,d),f}intersectSphere(e,t){_vector$a.subVectors(e.center,this.origin);const n=_vector$a.dot(this.direction),r=_vector$a.dot(_vector$a)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,_vector$a)!==null}intersectTriangle(e,t,n,r,s){_edge1.subVectors(t,e),_edge2.subVectors(n,e),_normal$1.crossVectors(_edge1,_edge2);let a=this.direction.dot(_normal$1),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;_diff.subVectors(this.origin,e);const c=o*this.direction.dot(_edge2.crossVectors(_diff,_edge2));if(c<0)return null;const l=o*this.direction.dot(_edge1.cross(_diff));if(l<0||c+l>a)return null;const u=-o*_diff.dot(_normal$1);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Matrix4{constructor(e,t,n,r,s,a,o,c,l,u,h,d,f,m,v,g){Matrix4.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l,u,h,d,f,m,v,g)}set(e,t,n,r,s,a,o,c,l,u,h,d,f,m,v,g){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=r,_[1]=s,_[5]=a,_[9]=o,_[13]=c,_[2]=l,_[6]=u,_[10]=h,_[14]=d,_[3]=f,_[7]=m,_[11]=v,_[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Matrix4().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/_v1$5.setFromMatrixColumn(e,0).length(),s=1/_v1$5.setFromMatrixColumn(e,1).length(),a=1/_v1$5.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*u,f=a*h,m=o*u,v=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+m*l,t[5]=d-v*l,t[9]=-o*c,t[2]=v-d*l,t[6]=m+f*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*u,f=c*h,m=l*u,v=l*h;t[0]=d+v*o,t[4]=m*o-f,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-m,t[6]=v+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*u,f=c*h,m=l*u,v=l*h;t[0]=d-v*o,t[4]=-a*h,t[8]=m+f*o,t[1]=f+m*o,t[5]=a*u,t[9]=v-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*u,f=a*h,m=o*u,v=o*h;t[0]=c*u,t[4]=m*l-f,t[8]=d*l+v,t[1]=c*h,t[5]=v*l+d,t[9]=f*l-m,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,f=a*l,m=o*c,v=o*l;t[0]=c*u,t[4]=v-d*h,t[8]=m*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=f*h+m,t[10]=d-v*h}else if(e.order==="XZY"){const d=a*c,f=a*l,m=o*c,v=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+v,t[5]=a*u,t[9]=f*h-m,t[2]=m*h-f,t[6]=o*u,t[10]=v*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_zero,e,_one)}lookAt(e,t,n){const r=this.elements;return _z.subVectors(e,t),_z.lengthSq()===0&&(_z.z=1),_z.normalize(),_x.crossVectors(n,_z),_x.lengthSq()===0&&(Math.abs(n.z)===1?_z.x+=1e-4:_z.z+=1e-4,_z.normalize(),_x.crossVectors(n,_z)),_x.normalize(),_y.crossVectors(_z,_x),r[0]=_x.x,r[4]=_y.x,r[8]=_z.x,r[1]=_x.y,r[5]=_y.y,r[9]=_z.y,r[2]=_x.z,r[6]=_y.z,r[10]=_z.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],f=n[13],m=n[2],v=n[6],g=n[10],_=n[14],F=n[3],x=n[7],y=n[11],R=n[15],L=r[0],G=r[4],M=r[8],E=r[12],b=r[1],I=r[5],H=r[9],q=r[13],ee=r[2],de=r[6],fe=r[10],pe=r[14],$=r[3],O=r[7],Y=r[11],ae=r[15];return s[0]=a*L+o*b+c*ee+l*$,s[4]=a*G+o*I+c*de+l*O,s[8]=a*M+o*H+c*fe+l*Y,s[12]=a*E+o*q+c*pe+l*ae,s[1]=u*L+h*b+d*ee+f*$,s[5]=u*G+h*I+d*de+f*O,s[9]=u*M+h*H+d*fe+f*Y,s[13]=u*E+h*q+d*pe+f*ae,s[2]=m*L+v*b+g*ee+_*$,s[6]=m*G+v*I+g*de+_*O,s[10]=m*M+v*H+g*fe+_*Y,s[14]=m*E+v*q+g*pe+_*ae,s[3]=F*L+x*b+y*ee+R*$,s[7]=F*G+x*I+y*de+R*O,s[11]=F*M+x*H+y*fe+R*Y,s[15]=F*E+x*q+y*pe+R*ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],m=e[3],v=e[7],g=e[11],_=e[15];return m*(+s*c*h-r*l*h-s*o*d+n*l*d+r*o*f-n*c*f)+v*(+t*c*f-t*l*d+s*a*d-r*a*f+r*l*u-s*c*u)+g*(+t*l*h-t*o*f-s*a*h+n*a*f+s*o*u-n*l*u)+_*(-r*o*u-t*c*h+t*o*d+r*a*h-n*a*d+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],m=e[12],v=e[13],g=e[14],_=e[15],F=h*g*l-v*d*l+v*c*f-o*g*f-h*c*_+o*d*_,x=m*d*l-u*g*l-m*c*f+a*g*f+u*c*_-a*d*_,y=u*v*l-m*h*l+m*o*f-a*v*f-u*o*_+a*h*_,R=m*h*c-u*v*c-m*o*d+a*v*d+u*o*g-a*h*g,L=t*F+n*x+r*y+s*R;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/L;return e[0]=F*G,e[1]=(v*d*s-h*g*s-v*r*f+n*g*f+h*r*_-n*d*_)*G,e[2]=(o*g*s-v*c*s+v*r*l-n*g*l-o*r*_+n*c*_)*G,e[3]=(h*c*s-o*d*s-h*r*l+n*d*l+o*r*f-n*c*f)*G,e[4]=x*G,e[5]=(u*g*s-m*d*s+m*r*f-t*g*f-u*r*_+t*d*_)*G,e[6]=(m*c*s-a*g*s-m*r*l+t*g*l+a*r*_-t*c*_)*G,e[7]=(a*d*s-u*c*s+u*r*l-t*d*l-a*r*f+t*c*f)*G,e[8]=y*G,e[9]=(m*h*s-u*v*s-m*n*f+t*v*f+u*n*_-t*h*_)*G,e[10]=(a*v*s-m*o*s+m*n*l-t*v*l-a*n*_+t*o*_)*G,e[11]=(u*o*s-a*h*s-u*n*l+t*h*l+a*n*f-t*o*f)*G,e[12]=R*G,e[13]=(u*v*r-m*h*r+m*n*d-t*v*d-u*n*g+t*h*g)*G,e[14]=(m*o*r-a*v*r-m*n*c+t*v*c+a*n*g-t*o*g)*G,e[15]=(a*h*r-u*o*r+u*n*c-t*h*c-a*n*d+t*o*d)*G,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+n,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,h=o+o,d=s*l,f=s*u,m=s*h,v=a*u,g=a*h,_=o*h,F=c*l,x=c*u,y=c*h,R=n.x,L=n.y,G=n.z;return r[0]=(1-(v+_))*R,r[1]=(f+y)*R,r[2]=(m-x)*R,r[3]=0,r[4]=(f-y)*L,r[5]=(1-(d+_))*L,r[6]=(g+F)*L,r[7]=0,r[8]=(m+x)*G,r[9]=(g-F)*G,r[10]=(1-(d+v))*G,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=_v1$5.set(r[0],r[1],r[2]).length();const a=_v1$5.set(r[4],r[5],r[6]).length(),o=_v1$5.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],_m1$4.copy(this);const l=1/s,u=1/a,h=1/o;return _m1$4.elements[0]*=l,_m1$4.elements[1]*=l,_m1$4.elements[2]*=l,_m1$4.elements[4]*=u,_m1$4.elements[5]*=u,_m1$4.elements[6]*=u,_m1$4.elements[8]*=h,_m1$4.elements[9]*=h,_m1$4.elements[10]*=h,t.setFromRotationMatrix(_m1$4),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=WebGLCoordinateSystem){const c=this.elements,l=2*s/(t-e),u=2*s/(n-r),h=(t+e)/(t-e),d=(n+r)/(n-r);let f,m;if(o===WebGLCoordinateSystem)f=-(a+s)/(a-s),m=-2*a*s/(a-s);else if(o===WebGPUCoordinateSystem)f=-a/(a-s),m=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=WebGLCoordinateSystem){const c=this.elements,l=1/(t-e),u=1/(n-r),h=1/(a-s),d=(t+e)*l,f=(n+r)*u;let m,v;if(o===WebGLCoordinateSystem)m=(a+s)*h,v=-2*h;else if(o===WebGPUCoordinateSystem)m=s*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=v,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const _v1$5=new Vector3,_m1$4=new Matrix4,_zero=new Vector3(0,0,0),_one=new Vector3(1,1,1),_x=new Vector3,_y=new Vector3,_z=new Vector3,_matrix$2=new Matrix4,_quaternion$3=new Quaternion;class Euler{constructor(e=0,t=0,n=0,r=Euler.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],h=r[2],d=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(clamp(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-clamp(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(clamp(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-clamp(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(clamp(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-clamp(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return _matrix$2.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_matrix$2,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _quaternion$3.setFromEuler(this),this.setFromQuaternion(_quaternion$3,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Euler.DEFAULT_ORDER="XYZ";class Layers{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _object3DId=0;const _v1$4=new Vector3,_q1=new Quaternion,_m1$3=new Matrix4,_target=new Vector3,_position$3=new Vector3,_scale$2=new Vector3,_quaternion$2=new Quaternion,_xAxis=new Vector3(1,0,0),_yAxis=new Vector3(0,1,0),_zAxis=new Vector3(0,0,1),_addedEvent={type:"added"},_removedEvent={type:"removed"},_childaddedEvent={type:"childadded",child:null},_childremovedEvent={type:"childremoved",child:null};class Object3D extends EventDispatcher{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_object3DId++}),this.uuid=generateUUID(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Object3D.DEFAULT_UP.clone();const e=new Vector3,t=new Euler,n=new Quaternion,r=new Vector3(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Matrix4},normalMatrix:{value:new Matrix3}}),this.matrix=new Matrix4,this.matrixWorld=new Matrix4,this.matrixAutoUpdate=Object3D.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Object3D.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Layers,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _q1.setFromAxisAngle(e,t),this.quaternion.multiply(_q1),this}rotateOnWorldAxis(e,t){return _q1.setFromAxisAngle(e,t),this.quaternion.premultiply(_q1),this}rotateX(e){return this.rotateOnAxis(_xAxis,e)}rotateY(e){return this.rotateOnAxis(_yAxis,e)}rotateZ(e){return this.rotateOnAxis(_zAxis,e)}translateOnAxis(e,t){return _v1$4.copy(e).applyQuaternion(this.quaternion),this.position.add(_v1$4.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_xAxis,e)}translateY(e){return this.translateOnAxis(_yAxis,e)}translateZ(e){return this.translateOnAxis(_zAxis,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_m1$3.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?_target.copy(e):_target.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),_position$3.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_m1$3.lookAt(_position$3,_target,this.up):_m1$3.lookAt(_target,_position$3,this.up),this.quaternion.setFromRotationMatrix(_m1$3),r&&(_m1$3.extractRotation(r.matrixWorld),_q1.setFromRotationMatrix(_m1$3),this.quaternion.premultiply(_q1.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_addedEvent),_childaddedEvent.child=e,this.dispatchEvent(_childaddedEvent),_childaddedEvent.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_removedEvent),_childremovedEvent.child=e,this.dispatchEvent(_childremovedEvent),_childremovedEvent.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_m1$3.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_m1$3.multiply(e.parent.matrixWorld)),e.applyMatrix4(_m1$3),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_addedEvent),_childaddedEvent.child=e,this.dispatchEvent(_childaddedEvent),_childaddedEvent.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_position$3,e,_scale$2),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_position$3,_quaternion$2,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=r,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Object3D.DEFAULT_UP=new Vector3(0,1,0);Object3D.DEFAULT_MATRIX_AUTO_UPDATE=!0;Object3D.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _v0$2=new Vector3,_v1$3=new Vector3,_v2$2=new Vector3,_v3$2=new Vector3,_vab=new Vector3,_vac=new Vector3,_vbc=new Vector3,_vap=new Vector3,_vbp=new Vector3,_vcp=new Vector3;class Triangle{constructor(e=new Vector3,t=new Vector3,n=new Vector3){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),_v0$2.subVectors(e,t),r.cross(_v0$2);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){_v0$2.subVectors(r,t),_v1$3.subVectors(n,t),_v2$2.subVectors(e,t);const a=_v0$2.dot(_v0$2),o=_v0$2.dot(_v1$3),c=_v0$2.dot(_v2$2),l=_v1$3.dot(_v1$3),u=_v1$3.dot(_v2$2),h=a*l-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,f=(l*c-o*u)*d,m=(a*u-o*c)*d;return s.set(1-f-m,m,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,_v3$2)===null?!1:_v3$2.x>=0&&_v3$2.y>=0&&_v3$2.x+_v3$2.y<=1}static getInterpolation(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,_v3$2)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,_v3$2.x),c.addScaledVector(a,_v3$2.y),c.addScaledVector(o,_v3$2.z),c)}static isFrontFacing(e,t,n,r){return _v0$2.subVectors(n,t),_v1$3.subVectors(e,t),_v0$2.cross(_v1$3).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _v0$2.subVectors(this.c,this.b),_v1$3.subVectors(this.a,this.b),_v0$2.cross(_v1$3).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Triangle.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Triangle.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Triangle.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Triangle.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Triangle.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;_vab.subVectors(r,n),_vac.subVectors(s,n),_vap.subVectors(e,n);const c=_vab.dot(_vap),l=_vac.dot(_vap);if(c<=0&&l<=0)return t.copy(n);_vbp.subVectors(e,r);const u=_vab.dot(_vbp),h=_vac.dot(_vbp);if(u>=0&&h<=u)return t.copy(r);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(_vab,a);_vcp.subVectors(e,s);const f=_vab.dot(_vcp),m=_vac.dot(_vcp);if(m>=0&&f<=m)return t.copy(s);const v=f*l-c*m;if(v<=0&&l>=0&&m<=0)return o=l/(l-m),t.copy(n).addScaledVector(_vac,o);const g=u*m-f*h;if(g<=0&&h-u>=0&&f-m>=0)return _vbc.subVectors(s,r),o=(h-u)/(h-u+(f-m)),t.copy(r).addScaledVector(_vbc,o);const _=1/(g+v+d);return a=v*_,o=d*_,t.copy(n).addScaledVector(_vab,a).addScaledVector(_vac,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const _colorKeywords={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_hslA={h:0,s:0,l:0},_hslB={h:0,s:0,l:0};function hue2rgb(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Color{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=SRGBColorSpace){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ColorManagement.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=ColorManagement.workingColorSpace){return this.r=e,this.g=t,this.b=n,ColorManagement.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=ColorManagement.workingColorSpace){if(e=euclideanModulo(e,1),t=clamp(t,0,1),n=clamp(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=hue2rgb(a,s,e+1/3),this.g=hue2rgb(a,s,e),this.b=hue2rgb(a,s,e-1/3)}return ColorManagement.toWorkingColorSpace(this,r),this}setStyle(e,t=SRGBColorSpace){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=SRGBColorSpace){const n=_colorKeywords[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=SRGBToLinear(e.r),this.g=SRGBToLinear(e.g),this.b=SRGBToLinear(e.b),this}copyLinearToSRGB(e){return this.r=LinearToSRGB(e.r),this.g=LinearToSRGB(e.g),this.b=LinearToSRGB(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=SRGBColorSpace){return ColorManagement.fromWorkingColorSpace(_color.copy(this),e),Math.round(clamp(_color.r*255,0,255))*65536+Math.round(clamp(_color.g*255,0,255))*256+Math.round(clamp(_color.b*255,0,255))}getHexString(e=SRGBColorSpace){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ColorManagement.workingColorSpace){ColorManagement.fromWorkingColorSpace(_color.copy(this),t);const n=_color.r,r=_color.g,s=_color.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-n)/h+2;break;case s:c=(n-r)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=ColorManagement.workingColorSpace){return ColorManagement.fromWorkingColorSpace(_color.copy(this),t),e.r=_color.r,e.g=_color.g,e.b=_color.b,e}getStyle(e=SRGBColorSpace){ColorManagement.fromWorkingColorSpace(_color.copy(this),e);const t=_color.r,n=_color.g,r=_color.b;return e!==SRGBColorSpace?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(_hslA),this.setHSL(_hslA.h+e,_hslA.s+t,_hslA.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(_hslA),e.getHSL(_hslB);const n=lerp(_hslA.h,_hslB.h,t),r=lerp(_hslA.s,_hslB.s,t),s=lerp(_hslA.l,_hslB.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _color=new Color;Color.NAMES=_colorKeywords;let _materialId=0;class Material extends EventDispatcher{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_materialId++}),this.uuid=generateUUID(),this.name="",this.type="Material",this.blending=NormalBlending,this.side=FrontSide,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=SrcAlphaFactor,this.blendDst=OneMinusSrcAlphaFactor,this.blendEquation=AddEquation,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Color(0,0,0),this.blendAlpha=0,this.depthFunc=LessEqualDepth,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=AlwaysStencilFunc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=KeepStencilOp,this.stencilZFail=KeepStencilOp,this.stencilZPass=KeepStencilOp,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==NormalBlending&&(n.blending=this.blending),this.side!==FrontSide&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==SrcAlphaFactor&&(n.blendSrc=this.blendSrc),this.blendDst!==OneMinusSrcAlphaFactor&&(n.blendDst=this.blendDst),this.blendEquation!==AddEquation&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==LessEqualDepth&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==AlwaysStencilFunc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==KeepStencilOp&&(n.stencilFail=this.stencilFail),this.stencilZFail!==KeepStencilOp&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==KeepStencilOp&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class MeshBasicMaterial extends Material{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Color(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Euler,this.combine=MultiplyOperation,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _vector$9=new Vector3,_vector2$1=new Vector2;class BufferAttribute{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=StaticDrawUsage,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=FloatType,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return warnOnce("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)_vector2$1.fromBufferAttribute(this,t),_vector2$1.applyMatrix3(e),this.setXY(t,_vector2$1.x,_vector2$1.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)_vector$9.fromBufferAttribute(this,t),_vector$9.applyMatrix3(e),this.setXYZ(t,_vector$9.x,_vector$9.y,_vector$9.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)_vector$9.fromBufferAttribute(this,t),_vector$9.applyMatrix4(e),this.setXYZ(t,_vector$9.x,_vector$9.y,_vector$9.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_vector$9.fromBufferAttribute(this,t),_vector$9.applyNormalMatrix(e),this.setXYZ(t,_vector$9.x,_vector$9.y,_vector$9.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_vector$9.fromBufferAttribute(this,t),_vector$9.transformDirection(e),this.setXYZ(t,_vector$9.x,_vector$9.y,_vector$9.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=denormalize(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=normalize$1(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=denormalize(t,this.array)),t}setX(e,t){return this.normalized&&(t=normalize$1(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=denormalize(t,this.array)),t}setY(e,t){return this.normalized&&(t=normalize$1(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=denormalize(t,this.array)),t}setZ(e,t){return this.normalized&&(t=normalize$1(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=denormalize(t,this.array)),t}setW(e,t){return this.normalized&&(t=normalize$1(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=normalize$1(t,this.array),n=normalize$1(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=normalize$1(t,this.array),n=normalize$1(n,this.array),r=normalize$1(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=normalize$1(t,this.array),n=normalize$1(n,this.array),r=normalize$1(r,this.array),s=normalize$1(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==StaticDrawUsage&&(e.usage=this.usage),e}}class Uint16BufferAttribute extends BufferAttribute{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Uint32BufferAttribute extends BufferAttribute{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Float32BufferAttribute extends BufferAttribute{constructor(e,t,n){super(new Float32Array(e),t,n)}}let _id$2=0;const _m1$2=new Matrix4,_obj=new Object3D,_offset=new Vector3,_box$2=new Box3,_boxMorphTargets=new Box3,_vector$8=new Vector3;class BufferGeometry extends EventDispatcher{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_id$2++}),this.uuid=generateUUID(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(arrayNeedsUint32(e)?Uint32BufferAttribute:Uint16BufferAttribute)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Matrix3().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _m1$2.makeRotationFromQuaternion(e),this.applyMatrix4(_m1$2),this}rotateX(e){return _m1$2.makeRotationX(e),this.applyMatrix4(_m1$2),this}rotateY(e){return _m1$2.makeRotationY(e),this.applyMatrix4(_m1$2),this}rotateZ(e){return _m1$2.makeRotationZ(e),this.applyMatrix4(_m1$2),this}translate(e,t,n){return _m1$2.makeTranslation(e,t,n),this.applyMatrix4(_m1$2),this}scale(e,t,n){return _m1$2.makeScale(e,t,n),this.applyMatrix4(_m1$2),this}lookAt(e){return _obj.lookAt(e),_obj.updateMatrix(),this.applyMatrix4(_obj.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_offset).negate(),this.translate(_offset.x,_offset.y,_offset.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Float32BufferAttribute(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Box3);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Vector3(-1/0,-1/0,-1/0),new Vector3(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];_box$2.setFromBufferAttribute(s),this.morphTargetsRelative?(_vector$8.addVectors(this.boundingBox.min,_box$2.min),this.boundingBox.expandByPoint(_vector$8),_vector$8.addVectors(this.boundingBox.max,_box$2.max),this.boundingBox.expandByPoint(_vector$8)):(this.boundingBox.expandByPoint(_box$2.min),this.boundingBox.expandByPoint(_box$2.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sphere);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Vector3,1/0);return}if(e){const n=this.boundingSphere.center;if(_box$2.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];_boxMorphTargets.setFromBufferAttribute(o),this.morphTargetsRelative?(_vector$8.addVectors(_box$2.min,_boxMorphTargets.min),_box$2.expandByPoint(_vector$8),_vector$8.addVectors(_box$2.max,_boxMorphTargets.max),_box$2.expandByPoint(_vector$8)):(_box$2.expandByPoint(_boxMorphTargets.min),_box$2.expandByPoint(_boxMorphTargets.max))}_box$2.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)_vector$8.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(_vector$8));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)_vector$8.fromBufferAttribute(o,l),c&&(_offset.fromBufferAttribute(e,l),_vector$8.add(_offset)),r=Math.max(r,n.distanceToSquared(_vector$8))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new BufferAttribute(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let M=0;M<n.count;M++)o[M]=new Vector3,c[M]=new Vector3;const l=new Vector3,u=new Vector3,h=new Vector3,d=new Vector2,f=new Vector2,m=new Vector2,v=new Vector3,g=new Vector3;function _(M,E,b){l.fromBufferAttribute(n,M),u.fromBufferAttribute(n,E),h.fromBufferAttribute(n,b),d.fromBufferAttribute(s,M),f.fromBufferAttribute(s,E),m.fromBufferAttribute(s,b),u.sub(l),h.sub(l),f.sub(d),m.sub(d);const I=1/(f.x*m.y-m.x*f.y);isFinite(I)&&(v.copy(u).multiplyScalar(m.y).addScaledVector(h,-f.y).multiplyScalar(I),g.copy(h).multiplyScalar(f.x).addScaledVector(u,-m.x).multiplyScalar(I),o[M].add(v),o[E].add(v),o[b].add(v),c[M].add(g),c[E].add(g),c[b].add(g))}let F=this.groups;F.length===0&&(F=[{start:0,count:e.count}]);for(let M=0,E=F.length;M<E;++M){const b=F[M],I=b.start,H=b.count;for(let q=I,ee=I+H;q<ee;q+=3)_(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const x=new Vector3,y=new Vector3,R=new Vector3,L=new Vector3;function G(M){R.fromBufferAttribute(r,M),L.copy(R);const E=o[M];x.copy(E),x.sub(R.multiplyScalar(R.dot(E))).normalize(),y.crossVectors(L,E);const I=y.dot(c[M])<0?-1:1;a.setXYZW(M,x.x,x.y,x.z,I)}for(let M=0,E=F.length;M<E;++M){const b=F[M],I=b.start,H=b.count;for(let q=I,ee=I+H;q<ee;q+=3)G(e.getX(q+0)),G(e.getX(q+1)),G(e.getX(q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new BufferAttribute(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const r=new Vector3,s=new Vector3,a=new Vector3,o=new Vector3,c=new Vector3,l=new Vector3,u=new Vector3,h=new Vector3;if(e)for(let d=0,f=e.count;d<f;d+=3){const m=e.getX(d+0),v=e.getX(d+1),g=e.getX(d+2);r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,g),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),o.add(u),c.add(u),l.add(u),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)_vector$8.fromBufferAttribute(e,t),_vector$8.normalize(),e.setXYZ(t,_vector$8.x,_vector$8.y,_vector$8.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,h=o.normalized,d=new l.constructor(c.length*u);let f=0,m=0;for(let v=0,g=c.length;v<g;v++){o.isInterleavedBufferAttribute?f=c[v]*o.data.stride+o.offset:f=c[v]*u;for(let _=0;_<u;_++)d[m++]=l[f++]}return new BufferAttribute(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new BufferGeometry,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,h=l.length;u<h;u++){const d=l[u],f=e(d,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],h=s[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _inverseMatrix$3=new Matrix4,_ray$3=new Ray,_sphere$6=new Sphere,_sphereHitAt=new Vector3,_vA$1=new Vector3,_vB$1=new Vector3,_vC$1=new Vector3,_tempA=new Vector3,_morphA=new Vector3,_uvA$1=new Vector2,_uvB$1=new Vector2,_uvC$1=new Vector2,_normalA=new Vector3,_normalB=new Vector3,_normalC=new Vector3,_intersectionPoint=new Vector3,_intersectionPointWorld=new Vector3;class Mesh extends Object3D{constructor(e=new BufferGeometry,t=new MeshBasicMaterial){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){_morphA.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],h=s[c];u!==0&&(_tempA.fromBufferAttribute(h,e),a?_morphA.addScaledVector(_tempA,u):_morphA.addScaledVector(_tempA.sub(t),u))}t.add(_morphA)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_sphere$6.copy(n.boundingSphere),_sphere$6.applyMatrix4(s),_ray$3.copy(e.ray).recast(e.near),!(_sphere$6.containsPoint(_ray$3.origin)===!1&&(_ray$3.intersectSphere(_sphere$6,_sphereHitAt)===null||_ray$3.origin.distanceToSquared(_sphereHitAt)>(e.far-e.near)**2))&&(_inverseMatrix$3.copy(s).invert(),_ray$3.copy(e.ray).applyMatrix4(_inverseMatrix$3),!(n.boundingBox!==null&&_ray$3.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,_ray$3)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,v=d.length;m<v;m++){const g=d[m],_=a[g.materialIndex],F=Math.max(g.start,f.start),x=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let y=F,R=x;y<R;y+=3){const L=o.getX(y),G=o.getX(y+1),M=o.getX(y+2);r=checkGeometryIntersection(this,_,e,n,l,u,h,L,G,M),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const m=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let g=m,_=v;g<_;g+=3){const F=o.getX(g),x=o.getX(g+1),y=o.getX(g+2);r=checkGeometryIntersection(this,a,e,n,l,u,h,F,x,y),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,v=d.length;m<v;m++){const g=d[m],_=a[g.materialIndex],F=Math.max(g.start,f.start),x=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let y=F,R=x;y<R;y+=3){const L=y,G=y+1,M=y+2;r=checkGeometryIntersection(this,_,e,n,l,u,h,L,G,M),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const m=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let g=m,_=v;g<_;g+=3){const F=g,x=g+1,y=g+2;r=checkGeometryIntersection(this,a,e,n,l,u,h,F,x,y),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function checkIntersection$1(i,e,t,n,r,s,a,o){let c;if(e.side===BackSide?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,e.side===FrontSide,o),c===null)return null;_intersectionPointWorld.copy(o),_intersectionPointWorld.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(_intersectionPointWorld);return l<t.near||l>t.far?null:{distance:l,point:_intersectionPointWorld.clone(),object:i}}function checkGeometryIntersection(i,e,t,n,r,s,a,o,c,l){i.getVertexPosition(o,_vA$1),i.getVertexPosition(c,_vB$1),i.getVertexPosition(l,_vC$1);const u=checkIntersection$1(i,e,t,n,_vA$1,_vB$1,_vC$1,_intersectionPoint);if(u){r&&(_uvA$1.fromBufferAttribute(r,o),_uvB$1.fromBufferAttribute(r,c),_uvC$1.fromBufferAttribute(r,l),u.uv=Triangle.getInterpolation(_intersectionPoint,_vA$1,_vB$1,_vC$1,_uvA$1,_uvB$1,_uvC$1,new Vector2)),s&&(_uvA$1.fromBufferAttribute(s,o),_uvB$1.fromBufferAttribute(s,c),_uvC$1.fromBufferAttribute(s,l),u.uv1=Triangle.getInterpolation(_intersectionPoint,_vA$1,_vB$1,_vC$1,_uvA$1,_uvB$1,_uvC$1,new Vector2)),a&&(_normalA.fromBufferAttribute(a,o),_normalB.fromBufferAttribute(a,c),_normalC.fromBufferAttribute(a,l),u.normal=Triangle.getInterpolation(_intersectionPoint,_vA$1,_vB$1,_vC$1,_normalA,_normalB,_normalC,new Vector3),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new Vector3,materialIndex:0};Triangle.getNormal(_vA$1,_vB$1,_vC$1,h.normal),u.face=h}return u}class BoxGeometry extends BufferGeometry{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],h=[];let d=0,f=0;m("z","y","x",-1,-1,n,t,e,a,s,0),m("z","y","x",1,-1,n,t,-e,a,s,1),m("x","z","y",1,1,e,n,t,r,a,2),m("x","z","y",1,-1,e,n,-t,r,a,3),m("x","y","z",1,-1,e,t,n,r,s,4),m("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new Float32BufferAttribute(l,3)),this.setAttribute("normal",new Float32BufferAttribute(u,3)),this.setAttribute("uv",new Float32BufferAttribute(h,2));function m(v,g,_,F,x,y,R,L,G,M,E){const b=y/G,I=R/M,H=y/2,q=R/2,ee=L/2,de=G+1,fe=M+1;let pe=0,$=0;const O=new Vector3;for(let Y=0;Y<fe;Y++){const ae=Y*I-q;for(let ue=0;ue<de;ue++){const me=ue*b-H;O[v]=me*F,O[g]=ae*x,O[_]=ee,l.push(O.x,O.y,O.z),O[v]=0,O[g]=0,O[_]=L>0?1:-1,u.push(O.x,O.y,O.z),h.push(ue/G),h.push(1-Y/M),pe+=1}}for(let Y=0;Y<M;Y++)for(let ae=0;ae<G;ae++){const ue=d+ae+de*Y,me=d+ae+de*(Y+1),le=d+(ae+1)+de*(Y+1),N=d+(ae+1)+de*Y;c.push(ue,me,N),c.push(me,le,N),$+=6}o.addGroup(f,$,E),f+=$,d+=pe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new BoxGeometry(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function cloneUniforms(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function mergeUniforms(i){const e={};for(let t=0;t<i.length;t++){const n=cloneUniforms(i[t]);for(const r in n)e[r]=n[r]}return e}function cloneUniformsGroups(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function getUnlitUniformColorSpace(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ColorManagement.workingColorSpace}const UniformsUtils={clone:cloneUniforms,merge:mergeUniforms};var default_vertex=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,default_fragment=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ShaderMaterial extends Material{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=default_vertex,this.fragmentShader=default_fragment,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cloneUniforms(e.uniforms),this.uniformsGroups=cloneUniformsGroups(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Camera extends Object3D{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Matrix4,this.projectionMatrix=new Matrix4,this.projectionMatrixInverse=new Matrix4,this.coordinateSystem=WebGLCoordinateSystem}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _v3$1=new Vector3,_minTarget=new Vector2,_maxTarget=new Vector2;class PerspectiveCamera extends Camera{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=RAD2DEG*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(DEG2RAD*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return RAD2DEG*2*Math.atan(Math.tan(DEG2RAD*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){_v3$1.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(_v3$1.x,_v3$1.y).multiplyScalar(-e/_v3$1.z),_v3$1.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_v3$1.x,_v3$1.y).multiplyScalar(-e/_v3$1.z)}getViewSize(e,t){return this.getViewBounds(e,_minTarget,_maxTarget),t.subVectors(_maxTarget,_minTarget)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(DEG2RAD*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const fov=-90,aspect=1;class CubeCamera extends Object3D{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new PerspectiveCamera(fov,aspect,e,t);r.layers=this.layers,this.add(r);const s=new PerspectiveCamera(fov,aspect,e,t);s.layers=this.layers,this.add(s);const a=new PerspectiveCamera(fov,aspect,e,t);a.layers=this.layers,this.add(a);const o=new PerspectiveCamera(fov,aspect,e,t);o.layers=this.layers,this.add(o);const c=new PerspectiveCamera(fov,aspect,e,t);c.layers=this.layers,this.add(c);const l=new PerspectiveCamera(fov,aspect,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===WebGLCoordinateSystem)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===WebGPUCoordinateSystem)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class CubeTexture extends Texture{constructor(e,t,n,r,s,a,o,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:CubeReflectionMapping,super(e,t,n,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class WebGLCubeRenderTarget extends WebGLRenderTarget{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new CubeTexture(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:LinearFilter}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new BoxGeometry(5,5,5),s=new ShaderMaterial({name:"CubemapFromEquirect",uniforms:cloneUniforms(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:BackSide,blending:NoBlending});s.uniforms.tEquirect.value=t;const a=new Mesh(r,s),o=t.minFilter;return t.minFilter===LinearMipmapLinearFilter&&(t.minFilter=LinearFilter),new CubeCamera(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}const _vector1=new Vector3,_vector2=new Vector3,_normalMatrix=new Matrix3;class Plane{constructor(e=new Vector3(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=_vector1.subVectors(n,t).cross(_vector2.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(_vector1),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||_normalMatrix.getNormalMatrix(e),r=this.coplanarPoint(_vector1).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _sphere$5=new Sphere,_vector$7=new Vector3;class Frustum{constructor(e=new Plane,t=new Plane,n=new Plane,r=new Plane,s=new Plane,a=new Plane){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=WebGLCoordinateSystem){const n=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],c=r[3],l=r[4],u=r[5],h=r[6],d=r[7],f=r[8],m=r[9],v=r[10],g=r[11],_=r[12],F=r[13],x=r[14],y=r[15];if(n[0].setComponents(c-s,d-l,g-f,y-_).normalize(),n[1].setComponents(c+s,d+l,g+f,y+_).normalize(),n[2].setComponents(c+a,d+u,g+m,y+F).normalize(),n[3].setComponents(c-a,d-u,g-m,y-F).normalize(),n[4].setComponents(c-o,d-h,g-v,y-x).normalize(),t===WebGLCoordinateSystem)n[5].setComponents(c+o,d+h,g+v,y+x).normalize();else if(t===WebGPUCoordinateSystem)n[5].setComponents(o,h,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_sphere$5.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_sphere$5.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_sphere$5)}intersectsSprite(e){return _sphere$5.center.set(0,0,0),_sphere$5.radius=.7071067811865476,_sphere$5.applyMatrix4(e.matrixWorld),this.intersectsSphere(_sphere$5)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(_vector$7.x=r.normal.x>0?e.max.x:e.min.x,_vector$7.y=r.normal.y>0?e.max.y:e.min.y,_vector$7.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(_vector$7)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function WebGLAnimation(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function WebGLAttributes(i){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,h=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){const u=c.array,h=c._updateRange,d=c.updateRanges;if(i.bindBuffer(l,o),h.count===-1&&d.length===0&&i.bufferSubData(l,0,u),d.length!==0){for(let f=0,m=d.length;f<m;f++){const v=d[f];i.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}h.count!==-1&&(i.bufferSubData(l,h.offset*u.BYTES_PER_ELEMENT,u,h.offset,h.count),h.count=-1),c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}class PlaneGeometry extends BufferGeometry{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),l=o+1,u=c+1,h=e/o,d=t/c,f=[],m=[],v=[],g=[];for(let _=0;_<u;_++){const F=_*d-a;for(let x=0;x<l;x++){const y=x*h-s;m.push(y,-F,0),v.push(0,0,1),g.push(x/o),g.push(1-_/c)}}for(let _=0;_<c;_++)for(let F=0;F<o;F++){const x=F+l*_,y=F+l*(_+1),R=F+1+l*(_+1),L=F+1+l*_;f.push(x,y,L),f.push(y,R,L)}this.setIndex(f),this.setAttribute("position",new Float32BufferAttribute(m,3)),this.setAttribute("normal",new Float32BufferAttribute(v,3)),this.setAttribute("uv",new Float32BufferAttribute(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new PlaneGeometry(e.width,e.height,e.widthSegments,e.heightSegments)}}var alphahash_fragment=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment=`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment=`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex=`#ifdef USE_BATCHING
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
#endif`,batching_vertex=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment=`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment=`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,clipping_planes_pars_fragment=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex=`#if defined( USE_COLOR_ALPHA )
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
#endif`,common=`#define PI 3.141592653589793
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
} // validated`,cube_uv_reflection_fragment=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,defaultnormal_vertex=`vec3 transformedNormal = objectNormal;
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
#endif`,displacementmap_pars_vertex=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment="gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment=`
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
}`,envmap_fragment=`#ifdef USE_ENVMAP
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
#endif`,envmap_common_pars_fragment=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment=`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_vertex=`#ifdef USE_ENVMAP
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
#endif`,fog_vertex=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment=`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin=`uniform bool receiveShadow;
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
#endif`,envmap_physical_pars_fragment=`#ifdef USE_ENVMAP
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
#endif`,lights_toon_fragment=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment=`PhysicalMaterial material;
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
#endif`,lights_physical_pars_fragment=`struct PhysicalMaterial {
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
}`,lights_fragment_begin=`
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
#endif`,lights_fragment_maps=`#if defined( RE_IndirectDiffuse )
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
#endif`,lights_fragment_end=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment=`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex=`#ifdef USE_MORPHTARGETS
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
#endif`,morphtarget_vertex=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,normal_pars_fragment=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment=`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,premultiplied_alpha_fragment=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,shadowmap_pars_vertex=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,shadowmap_vertex=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,shadowmask_pars_fragment=`float getShadowMask() {
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
}`,skinbase_vertex=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex=`#ifdef USE_SKINNING
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
#endif`,skinning_vertex=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex=`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment=`#ifdef USE_TRANSMISSION
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
#endif`,transmission_pars_fragment=`#ifdef USE_TRANSMISSION
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
#endif`,uv_pars_fragment=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_pars_vertex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_vertex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,worldpos_vertex=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vertex$h=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fragment$h=`uniform sampler2D t2D;
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
}`,vertex$g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fragment$g=`#ifdef ENVMAP_TYPE_CUBE
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
}`,vertex$f=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fragment$f=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vertex$e=`#include <common>
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
}`,fragment$e=`#if DEPTH_PACKING == 3200
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
}`,vertex$d=`#define DISTANCE
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
}`,fragment$d=`#define DISTANCE
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
}`,vertex$c=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fragment$c=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vertex$b=`uniform float scale;
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
}`,fragment$b=`uniform vec3 diffuse;
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
}`,vertex$a=`#include <common>
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
}`,fragment$a=`uniform vec3 diffuse;
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
}`,vertex$9=`#define LAMBERT
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
}`,fragment$9=`#define LAMBERT
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
}`,vertex$8=`#define MATCAP
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
}`,fragment$8=`#define MATCAP
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
}`,vertex$7=`#define NORMAL
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
}`,fragment$7=`#define NORMAL
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
}`,vertex$6=`#define PHONG
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
}`,fragment$6=`#define PHONG
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
}`,vertex$5=`#define STANDARD
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
}`,fragment$5=`#define STANDARD
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
}`,vertex$4=`#define TOON
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
}`,fragment$4=`#define TOON
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
}`,vertex$3=`uniform float size;
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
}`,fragment$3=`uniform vec3 diffuse;
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
}`,vertex$2=`#include <common>
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
}`,fragment$2=`uniform vec3 color;
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
}`,vertex$1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,fragment$1=`uniform vec3 diffuse;
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
}`,ShaderChunk={alphahash_fragment,alphahash_pars_fragment,alphamap_fragment,alphamap_pars_fragment,alphatest_fragment,alphatest_pars_fragment,aomap_fragment,aomap_pars_fragment,batching_pars_vertex,batching_vertex,begin_vertex,beginnormal_vertex,bsdfs,iridescence_fragment,bumpmap_pars_fragment,clipping_planes_fragment,clipping_planes_pars_fragment,clipping_planes_pars_vertex,clipping_planes_vertex,color_fragment,color_pars_fragment,color_pars_vertex,color_vertex,common,cube_uv_reflection_fragment,defaultnormal_vertex,displacementmap_pars_vertex,displacementmap_vertex,emissivemap_fragment,emissivemap_pars_fragment,colorspace_fragment,colorspace_pars_fragment,envmap_fragment,envmap_common_pars_fragment,envmap_pars_fragment,envmap_pars_vertex,envmap_physical_pars_fragment,envmap_vertex,fog_vertex,fog_pars_vertex,fog_fragment,fog_pars_fragment,gradientmap_pars_fragment,lightmap_pars_fragment,lights_lambert_fragment,lights_lambert_pars_fragment,lights_pars_begin,lights_toon_fragment,lights_toon_pars_fragment,lights_phong_fragment,lights_phong_pars_fragment,lights_physical_fragment,lights_physical_pars_fragment,lights_fragment_begin,lights_fragment_maps,lights_fragment_end,logdepthbuf_fragment,logdepthbuf_pars_fragment,logdepthbuf_pars_vertex,logdepthbuf_vertex,map_fragment,map_pars_fragment,map_particle_fragment,map_particle_pars_fragment,metalnessmap_fragment,metalnessmap_pars_fragment,morphinstance_vertex,morphcolor_vertex,morphnormal_vertex,morphtarget_pars_vertex,morphtarget_vertex,normal_fragment_begin,normal_fragment_maps,normal_pars_fragment,normal_pars_vertex,normal_vertex,normalmap_pars_fragment,clearcoat_normal_fragment_begin,clearcoat_normal_fragment_maps,clearcoat_pars_fragment,iridescence_pars_fragment,opaque_fragment,packing,premultiplied_alpha_fragment,project_vertex,dithering_fragment,dithering_pars_fragment,roughnessmap_fragment,roughnessmap_pars_fragment,shadowmap_pars_fragment,shadowmap_pars_vertex,shadowmap_vertex,shadowmask_pars_fragment,skinbase_vertex,skinning_pars_vertex,skinning_vertex,skinnormal_vertex,specularmap_fragment,specularmap_pars_fragment,tonemapping_fragment,tonemapping_pars_fragment,transmission_fragment,transmission_pars_fragment,uv_pars_fragment,uv_pars_vertex,uv_vertex,worldpos_vertex,background_vert:vertex$h,background_frag:fragment$h,backgroundCube_vert:vertex$g,backgroundCube_frag:fragment$g,cube_vert:vertex$f,cube_frag:fragment$f,depth_vert:vertex$e,depth_frag:fragment$e,distanceRGBA_vert:vertex$d,distanceRGBA_frag:fragment$d,equirect_vert:vertex$c,equirect_frag:fragment$c,linedashed_vert:vertex$b,linedashed_frag:fragment$b,meshbasic_vert:vertex$a,meshbasic_frag:fragment$a,meshlambert_vert:vertex$9,meshlambert_frag:fragment$9,meshmatcap_vert:vertex$8,meshmatcap_frag:fragment$8,meshnormal_vert:vertex$7,meshnormal_frag:fragment$7,meshphong_vert:vertex$6,meshphong_frag:fragment$6,meshphysical_vert:vertex$5,meshphysical_frag:fragment$5,meshtoon_vert:vertex$4,meshtoon_frag:fragment$4,points_vert:vertex$3,points_frag:fragment$3,shadow_vert:vertex$2,shadow_frag:fragment$2,sprite_vert:vertex$1,sprite_frag:fragment$1},UniformsLib={common:{diffuse:{value:new Color(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Matrix3},alphaMap:{value:null},alphaMapTransform:{value:new Matrix3},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Matrix3}},envmap:{envMap:{value:null},envMapRotation:{value:new Matrix3},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Matrix3}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Matrix3}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Matrix3},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Matrix3},normalScale:{value:new Vector2(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Matrix3},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Matrix3}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Matrix3}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Matrix3}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Color(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Color(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Matrix3},alphaTest:{value:0},uvTransform:{value:new Matrix3}},sprite:{diffuse:{value:new Color(16777215)},opacity:{value:1},center:{value:new Vector2(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Matrix3},alphaMap:{value:null},alphaMapTransform:{value:new Matrix3},alphaTest:{value:0}}},ShaderLib={basic:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.specularmap,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.fog]),vertexShader:ShaderChunk.meshbasic_vert,fragmentShader:ShaderChunk.meshbasic_frag},lambert:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.specularmap,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color(0)}}]),vertexShader:ShaderChunk.meshlambert_vert,fragmentShader:ShaderChunk.meshlambert_frag},phong:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.specularmap,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color(0)},specular:{value:new Color(1118481)},shininess:{value:30}}]),vertexShader:ShaderChunk.meshphong_vert,fragmentShader:ShaderChunk.meshphong_frag},standard:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.roughnessmap,UniformsLib.metalnessmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ShaderChunk.meshphysical_vert,fragmentShader:ShaderChunk.meshphysical_frag},toon:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.gradientmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color(0)}}]),vertexShader:ShaderChunk.meshtoon_vert,fragmentShader:ShaderChunk.meshtoon_frag},matcap:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.fog,{matcap:{value:null}}]),vertexShader:ShaderChunk.meshmatcap_vert,fragmentShader:ShaderChunk.meshmatcap_frag},points:{uniforms:mergeUniforms([UniformsLib.points,UniformsLib.fog]),vertexShader:ShaderChunk.points_vert,fragmentShader:ShaderChunk.points_frag},dashed:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ShaderChunk.linedashed_vert,fragmentShader:ShaderChunk.linedashed_frag},depth:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.displacementmap]),vertexShader:ShaderChunk.depth_vert,fragmentShader:ShaderChunk.depth_frag},normal:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,{opacity:{value:1}}]),vertexShader:ShaderChunk.meshnormal_vert,fragmentShader:ShaderChunk.meshnormal_frag},sprite:{uniforms:mergeUniforms([UniformsLib.sprite,UniformsLib.fog]),vertexShader:ShaderChunk.sprite_vert,fragmentShader:ShaderChunk.sprite_frag},background:{uniforms:{uvTransform:{value:new Matrix3},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ShaderChunk.background_vert,fragmentShader:ShaderChunk.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Matrix3}},vertexShader:ShaderChunk.backgroundCube_vert,fragmentShader:ShaderChunk.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ShaderChunk.cube_vert,fragmentShader:ShaderChunk.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ShaderChunk.equirect_vert,fragmentShader:ShaderChunk.equirect_frag},distanceRGBA:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.displacementmap,{referencePosition:{value:new Vector3},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ShaderChunk.distanceRGBA_vert,fragmentShader:ShaderChunk.distanceRGBA_frag},shadow:{uniforms:mergeUniforms([UniformsLib.lights,UniformsLib.fog,{color:{value:new Color(0)},opacity:{value:1}}]),vertexShader:ShaderChunk.shadow_vert,fragmentShader:ShaderChunk.shadow_frag}};ShaderLib.physical={uniforms:mergeUniforms([ShaderLib.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Matrix3},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Matrix3},clearcoatNormalScale:{value:new Vector2(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Matrix3},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Matrix3},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Matrix3},sheen:{value:0},sheenColor:{value:new Color(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Matrix3},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Matrix3},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Matrix3},transmissionSamplerSize:{value:new Vector2},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Matrix3},attenuationDistance:{value:0},attenuationColor:{value:new Color(0)},specularColor:{value:new Color(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Matrix3},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Matrix3},anisotropyVector:{value:new Vector2},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Matrix3}}]),vertexShader:ShaderChunk.meshphysical_vert,fragmentShader:ShaderChunk.meshphysical_frag};const _rgb={r:0,b:0,g:0},_e1$1=new Euler,_m1$1=new Matrix4;function WebGLBackground(i,e,t,n,r,s,a){const o=new Color(0);let c=s===!0?0:1,l,u,h=null,d=0,f=null;function m(F){let x=F.isScene===!0?F.background:null;return x&&x.isTexture&&(x=(F.backgroundBlurriness>0?t:e).get(x)),x}function v(F){let x=!1;const y=m(F);y===null?_(o,c):y&&y.isColor&&(_(y,1),x=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(F,x){const y=m(x);y&&(y.isCubeTexture||y.mapping===CubeUVReflectionMapping)?(u===void 0&&(u=new Mesh(new BoxGeometry(1,1,1),new ShaderMaterial({name:"BackgroundCubeMaterial",uniforms:cloneUniforms(ShaderLib.backgroundCube.uniforms),vertexShader:ShaderLib.backgroundCube.vertexShader,fragmentShader:ShaderLib.backgroundCube.fragmentShader,side:BackSide,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,L,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),_e1$1.copy(x.backgroundRotation),_e1$1.x*=-1,_e1$1.y*=-1,_e1$1.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(_e1$1.y*=-1,_e1$1.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(_m1$1.makeRotationFromEuler(_e1$1)),u.material.toneMapped=ColorManagement.getTransfer(y.colorSpace)!==SRGBTransfer,(h!==y||d!==y.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=y,d=y.version,f=i.toneMapping),u.layers.enableAll(),F.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Mesh(new PlaneGeometry(2,2),new ShaderMaterial({name:"BackgroundMaterial",uniforms:cloneUniforms(ShaderLib.background.uniforms),vertexShader:ShaderLib.background.vertexShader,fragmentShader:ShaderLib.background.fragmentShader,side:FrontSide,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=ColorManagement.getTransfer(y.colorSpace)!==SRGBTransfer,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,f=i.toneMapping),l.layers.enableAll(),F.unshift(l,l.geometry,l.material,0,0,null))}function _(F,x){F.getRGB(_rgb,getUnlitUniformColorSpace(i)),n.buffers.color.setClear(_rgb.r,_rgb.g,_rgb.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(F,x=1){o.set(F),c=x,_(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(F){c=F,_(o,c)},render:v,addToRenderList:g}}function WebGLBindingStates(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let s=r,a=!1;function o(b,I,H,q,ee){let de=!1;const fe=h(q,H,I);s!==fe&&(s=fe,l(s.object)),de=f(b,q,H,ee),de&&m(b,q,H,ee),ee!==null&&e.update(ee,i.ELEMENT_ARRAY_BUFFER),(de||a)&&(a=!1,y(b,I,H,q),ee!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(ee).buffer))}function c(){return i.createVertexArray()}function l(b){return i.bindVertexArray(b)}function u(b){return i.deleteVertexArray(b)}function h(b,I,H){const q=H.wireframe===!0;let ee=n[b.id];ee===void 0&&(ee={},n[b.id]=ee);let de=ee[I.id];de===void 0&&(de={},ee[I.id]=de);let fe=de[q];return fe===void 0&&(fe=d(c()),de[q]=fe),fe}function d(b){const I=[],H=[],q=[];for(let ee=0;ee<t;ee++)I[ee]=0,H[ee]=0,q[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:H,attributeDivisors:q,object:b,attributes:{},index:null}}function f(b,I,H,q){const ee=s.attributes,de=I.attributes;let fe=0;const pe=H.getAttributes();for(const $ in pe)if(pe[$].location>=0){const Y=ee[$];let ae=de[$];if(ae===void 0&&($==="instanceMatrix"&&b.instanceMatrix&&(ae=b.instanceMatrix),$==="instanceColor"&&b.instanceColor&&(ae=b.instanceColor)),Y===void 0||Y.attribute!==ae||ae&&Y.data!==ae.data)return!0;fe++}return s.attributesNum!==fe||s.index!==q}function m(b,I,H,q){const ee={},de=I.attributes;let fe=0;const pe=H.getAttributes();for(const $ in pe)if(pe[$].location>=0){let Y=de[$];Y===void 0&&($==="instanceMatrix"&&b.instanceMatrix&&(Y=b.instanceMatrix),$==="instanceColor"&&b.instanceColor&&(Y=b.instanceColor));const ae={};ae.attribute=Y,Y&&Y.data&&(ae.data=Y.data),ee[$]=ae,fe++}s.attributes=ee,s.attributesNum=fe,s.index=q}function v(){const b=s.newAttributes;for(let I=0,H=b.length;I<H;I++)b[I]=0}function g(b){_(b,0)}function _(b,I){const H=s.newAttributes,q=s.enabledAttributes,ee=s.attributeDivisors;H[b]=1,q[b]===0&&(i.enableVertexAttribArray(b),q[b]=1),ee[b]!==I&&(i.vertexAttribDivisor(b,I),ee[b]=I)}function F(){const b=s.newAttributes,I=s.enabledAttributes;for(let H=0,q=I.length;H<q;H++)I[H]!==b[H]&&(i.disableVertexAttribArray(H),I[H]=0)}function x(b,I,H,q,ee,de,fe){fe===!0?i.vertexAttribIPointer(b,I,H,ee,de):i.vertexAttribPointer(b,I,H,q,ee,de)}function y(b,I,H,q){v();const ee=q.attributes,de=H.getAttributes(),fe=I.defaultAttributeValues;for(const pe in de){const $=de[pe];if($.location>=0){let O=ee[pe];if(O===void 0&&(pe==="instanceMatrix"&&b.instanceMatrix&&(O=b.instanceMatrix),pe==="instanceColor"&&b.instanceColor&&(O=b.instanceColor)),O!==void 0){const Y=O.normalized,ae=O.itemSize,ue=e.get(O);if(ue===void 0)continue;const me=ue.buffer,le=ue.type,N=ue.bytesPerElement,w=le===i.INT||le===i.UNSIGNED_INT||O.gpuType===IntType;if(O.isInterleavedBufferAttribute){const z=O.data,te=z.stride,Z=O.offset;if(z.isInstancedInterleavedBuffer){for(let ne=0;ne<$.locationSize;ne++)_($.location+ne,z.meshPerAttribute);b.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let ne=0;ne<$.locationSize;ne++)g($.location+ne);i.bindBuffer(i.ARRAY_BUFFER,me);for(let ne=0;ne<$.locationSize;ne++)x($.location+ne,ae/$.locationSize,le,Y,te*N,(Z+ae/$.locationSize*ne)*N,w)}else{if(O.isInstancedBufferAttribute){for(let z=0;z<$.locationSize;z++)_($.location+z,O.meshPerAttribute);b.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let z=0;z<$.locationSize;z++)g($.location+z);i.bindBuffer(i.ARRAY_BUFFER,me);for(let z=0;z<$.locationSize;z++)x($.location+z,ae/$.locationSize,le,Y,ae*N,ae/$.locationSize*z*N,w)}}else if(fe!==void 0){const Y=fe[pe];if(Y!==void 0)switch(Y.length){case 2:i.vertexAttrib2fv($.location,Y);break;case 3:i.vertexAttrib3fv($.location,Y);break;case 4:i.vertexAttrib4fv($.location,Y);break;default:i.vertexAttrib1fv($.location,Y)}}}}F()}function R(){M();for(const b in n){const I=n[b];for(const H in I){const q=I[H];for(const ee in q)u(q[ee].object),delete q[ee];delete I[H]}delete n[b]}}function L(b){if(n[b.id]===void 0)return;const I=n[b.id];for(const H in I){const q=I[H];for(const ee in q)u(q[ee].object),delete q[ee];delete I[H]}delete n[b.id]}function G(b){for(const I in n){const H=n[I];if(H[b.id]===void 0)continue;const q=H[b.id];for(const ee in q)u(q[ee].object),delete q[ee];delete H[b.id]}}function M(){E(),a=!0,s!==r&&(s=r,l(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:M,resetDefaultState:E,dispose:R,releaseStatesOfGeometry:L,releaseStatesOfProgram:G,initAttributes:v,enableAttribute:g,disableUnusedAttributes:F}}function WebGLBufferRenderer(i,e,t){let n;function r(l){n=l}function s(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function a(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function o(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let f=0;for(let m=0;m<h;m++)f+=u[m];t.update(f,n,1)}function c(l,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<l.length;m++)a(l[m],u[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,h);let m=0;for(let v=0;v<h;v++)m+=u[v];for(let v=0;v<d.length;v++)t.update(m,n,d[v])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function WebGLCapabilities(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(L){return!(L!==RGBAFormat&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){const G=L===HalfFloatType&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==UnsignedByteType&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==FloatType&&!G)}function c(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),F=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=f>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:v,maxAttributes:g,maxVertexUniforms:_,maxVaryings:F,maxFragmentUniforms:x,vertexTextures:y,maxSamples:R}}function WebGLClipping(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new Plane,o=new Matrix3,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||r;return r=d,n=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const m=h.clippingPlanes,v=h.clipIntersection,g=h.clipShadows,_=i.get(h);if(!r||m===null||m.length===0||s&&!g)s?u(null):l();else{const F=s?0:n,x=F*4;let y=_.clippingState||null;c.value=y,y=u(m,d,x,f);for(let R=0;R!==x;++R)y[R]=t[R];_.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=F}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,m){const v=h!==null?h.length:0;let g=null;if(v!==0){if(g=c.value,m!==!0||g===null){const _=f+v*4,F=d.matrixWorldInverse;o.getNormalMatrix(F),(g===null||g.length<_)&&(g=new Float32Array(_));for(let x=0,y=f;x!==v;++x,y+=4)a.copy(h[x]).applyMatrix4(F,o),a.normal.toArray(g,y),g[y+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function WebGLCubeMaps(i){let e=new WeakMap;function t(a,o){return o===EquirectangularReflectionMapping?a.mapping=CubeReflectionMapping:o===EquirectangularRefractionMapping&&(a.mapping=CubeRefractionMapping),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===EquirectangularReflectionMapping||o===EquirectangularRefractionMapping)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new WebGLCubeRenderTarget(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class OrthographicCamera extends Camera{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const LOD_MIN=4,EXTRA_LOD_SIGMA=[.125,.215,.35,.446,.526,.582],MAX_SAMPLES=20,_flatCamera=new OrthographicCamera,_clearColor=new Color;let _oldTarget=null,_oldActiveCubeFace=0,_oldActiveMipmapLevel=0,_oldXrEnabled=!1;const PHI=(1+Math.sqrt(5))/2,INV_PHI=1/PHI,_axisDirections=[new Vector3(-PHI,INV_PHI,0),new Vector3(PHI,INV_PHI,0),new Vector3(-INV_PHI,0,PHI),new Vector3(INV_PHI,0,PHI),new Vector3(0,PHI,-INV_PHI),new Vector3(0,PHI,INV_PHI),new Vector3(-1,1,-1),new Vector3(1,1,-1),new Vector3(-1,1,1),new Vector3(1,1,1)];class PMREMGenerator{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){_oldTarget=this._renderer.getRenderTarget(),_oldActiveCubeFace=this._renderer.getActiveCubeFace(),_oldActiveMipmapLevel=this._renderer.getActiveMipmapLevel(),_oldXrEnabled=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_getCubemapMaterial(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_getEquirectMaterial(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_oldTarget,_oldActiveCubeFace,_oldActiveMipmapLevel),this._renderer.xr.enabled=_oldXrEnabled,e.scissorTest=!1,_setViewport(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===CubeReflectionMapping||e.mapping===CubeRefractionMapping?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_oldTarget=this._renderer.getRenderTarget(),_oldActiveCubeFace=this._renderer.getActiveCubeFace(),_oldActiveMipmapLevel=this._renderer.getActiveMipmapLevel(),_oldXrEnabled=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:LinearFilter,minFilter:LinearFilter,generateMipmaps:!1,type:HalfFloatType,format:RGBAFormat,colorSpace:LinearSRGBColorSpace,depthBuffer:!1},r=_createRenderTarget(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_createRenderTarget(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_createPlanes(s)),this._blurMaterial=_getBlurShader(s,e,t)}return r}_compileMaterial(e){const t=new Mesh(this._lodPlanes[0],e);this._renderer.compile(t,_flatCamera)}_sceneToCubeUV(e,t,n,r){const o=new PerspectiveCamera(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(_clearColor),u.toneMapping=NoToneMapping,u.autoClear=!1;const f=new MeshBasicMaterial({name:"PMREM.Background",side:BackSide,depthWrite:!1,depthTest:!1}),m=new Mesh(new BoxGeometry,f);let v=!1;const g=e.background;g?g.isColor&&(f.color.copy(g),e.background=null,v=!0):(f.color.copy(_clearColor),v=!0);for(let _=0;_<6;_++){const F=_%3;F===0?(o.up.set(0,c[_],0),o.lookAt(l[_],0,0)):F===1?(o.up.set(0,0,c[_]),o.lookAt(0,l[_],0)):(o.up.set(0,c[_],0),o.lookAt(0,0,l[_]));const x=this._cubeSize;_setViewport(r,F*x,_>2?x:0,x,x),u.setRenderTarget(r),v&&u.render(m,o),u.render(e,o)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===CubeReflectionMapping||e.mapping===CubeRefractionMapping;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=_getCubemapMaterial()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_getEquirectMaterial());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Mesh(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;_setViewport(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,_flatCamera)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=_axisDirections[(r-s-1)%_axisDirections.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Mesh(this._lodPlanes[r],l),d=l.uniforms,f=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*MAX_SAMPLES-1),v=s/m,g=isFinite(s)?1+Math.floor(u*v):MAX_SAMPLES;g>MAX_SAMPLES&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${MAX_SAMPLES}`);const _=[];let F=0;for(let G=0;G<MAX_SAMPLES;++G){const M=G/v,E=Math.exp(-M*M/2);_.push(E),G===0?F+=E:G<g&&(F+=2*E)}for(let G=0;G<_.length;G++)_[G]=_[G]/F;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=_,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=m,d.mipInt.value=x-n;const y=this._sizeLods[r],R=3*y*(r>x-LOD_MIN?r-x+LOD_MIN:0),L=4*(this._cubeSize-y);_setViewport(t,R,L,3*y,2*y),c.setRenderTarget(t),c.render(h,_flatCamera)}}function _createPlanes(i){const e=[],t=[],n=[];let r=i;const s=i-LOD_MIN+1+EXTRA_LOD_SIGMA.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let c=1/o;a>i-LOD_MIN?c=EXTRA_LOD_SIGMA[a-i+LOD_MIN-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,m=6,v=3,g=2,_=1,F=new Float32Array(v*m*f),x=new Float32Array(g*m*f),y=new Float32Array(_*m*f);for(let L=0;L<f;L++){const G=L%3*2/3-1,M=L>2?0:-1,E=[G,M,0,G+2/3,M,0,G+2/3,M+1,0,G,M,0,G+2/3,M+1,0,G,M+1,0];F.set(E,v*m*L),x.set(d,g*m*L);const b=[L,L,L,L,L,L];y.set(b,_*m*L)}const R=new BufferGeometry;R.setAttribute("position",new BufferAttribute(F,v)),R.setAttribute("uv",new BufferAttribute(x,g)),R.setAttribute("faceIndex",new BufferAttribute(y,_)),e.push(R),r>LOD_MIN&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function _createRenderTarget(i,e,t){const n=new WebGLRenderTarget(i,e,t);return n.texture.mapping=CubeUVReflectionMapping,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function _setViewport(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function _getBlurShader(i,e,t){const n=new Float32Array(MAX_SAMPLES),r=new Vector3(0,1,0);return new ShaderMaterial({name:"SphericalGaussianBlur",defines:{n:MAX_SAMPLES,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:_getCommonVertexShader(),fragmentShader:`

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
		`,blending:NoBlending,depthTest:!1,depthWrite:!1})}function _getEquirectMaterial(){return new ShaderMaterial({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_getCommonVertexShader(),fragmentShader:`

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
		`,blending:NoBlending,depthTest:!1,depthWrite:!1})}function _getCubemapMaterial(){return new ShaderMaterial({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_getCommonVertexShader(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:NoBlending,depthTest:!1,depthWrite:!1})}function _getCommonVertexShader(){return`

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
	`}function WebGLCubeUVMaps(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===EquirectangularReflectionMapping||c===EquirectangularRefractionMapping,u=c===CubeReflectionMapping||c===CubeRefractionMapping;if(l||u){let h=e.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new PMREMGenerator(i)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const f=o.image;return l&&f&&f.height>0||u&&f&&r(f)?(t===null&&(t=new PMREMGenerator(i)),h=l?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function WebGLExtensions(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&warnOnce("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function WebGLGeometries(i,e,t,n){const r={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);for(const m in d.morphAttributes){const v=d.morphAttributes[m];for(let g=0,_=v.length;g<_;g++)e.remove(v[g])}d.removeEventListener("dispose",a),delete r[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const m in d)e.update(d[m],i.ARRAY_BUFFER);const f=h.morphAttributes;for(const m in f){const v=f[m];for(let g=0,_=v.length;g<_;g++)e.update(v[g],i.ARRAY_BUFFER)}}function l(h){const d=[],f=h.index,m=h.attributes.position;let v=0;if(f!==null){const F=f.array;v=f.version;for(let x=0,y=F.length;x<y;x+=3){const R=F[x+0],L=F[x+1],G=F[x+2];d.push(R,L,L,G,G,R)}}else if(m!==void 0){const F=m.array;v=m.version;for(let x=0,y=F.length/3-1;x<y;x+=3){const R=x+0,L=x+1,G=x+2;d.push(R,L,L,G,G,R)}}else return;const g=new(arrayNeedsUint32(d)?Uint32BufferAttribute:Uint16BufferAttribute)(d,1);g.version=v;const _=s.get(h);_&&e.remove(_),s.set(h,g)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return s.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function WebGLIndexedBufferRenderer(i,e,t){let n;function r(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function c(d,f){i.drawElements(n,f,s,d*a),t.update(f,n,1)}function l(d,f,m){m!==0&&(i.drawElementsInstanced(n,f,s,d*a,m),t.update(f,n,m))}function u(d,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,m);let g=0;for(let _=0;_<m;_++)g+=f[_];t.update(g,n,1)}function h(d,f,m,v){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let _=0;_<d.length;_++)l(d[_]/a,f[_],v[_]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,v,0,m);let _=0;for(let F=0;F<m;F++)_+=f[F];for(let F=0;F<v.length;F++)t.update(_,n,v[F])}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function WebGLInfo(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function WebGLMorphtargets(i,e,t){const n=new WeakMap,r=new Vector4;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==h){let b=function(){M.dispose(),n.delete(o),o.removeEventListener("dispose",b)};var f=b;d!==void 0&&d.texture.dispose();const m=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,_=o.morphAttributes.position||[],F=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let y=0;m===!0&&(y=1),v===!0&&(y=2),g===!0&&(y=3);let R=o.attributes.position.count*y,L=1;R>e.maxTextureSize&&(L=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const G=new Float32Array(R*L*4*h),M=new DataArrayTexture(G,R,L,h);M.type=FloatType,M.needsUpdate=!0;const E=y*4;for(let I=0;I<h;I++){const H=_[I],q=F[I],ee=x[I],de=R*L*4*I;for(let fe=0;fe<H.count;fe++){const pe=fe*E;m===!0&&(r.fromBufferAttribute(H,fe),G[de+pe+0]=r.x,G[de+pe+1]=r.y,G[de+pe+2]=r.z,G[de+pe+3]=0),v===!0&&(r.fromBufferAttribute(q,fe),G[de+pe+4]=r.x,G[de+pe+5]=r.y,G[de+pe+6]=r.z,G[de+pe+7]=0),g===!0&&(r.fromBufferAttribute(ee,fe),G[de+pe+8]=r.x,G[de+pe+9]=r.y,G[de+pe+10]=r.z,G[de+pe+11]=ee.itemSize===4?r.w:1)}}d={count:h,texture:M,size:new Vector2(R,L)},n.set(o,d),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let m=0;for(let g=0;g<l.length;g++)m+=l[g];const v=o.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function WebGLObjects(i,e,t,n){let r=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(r.get(h)!==l&&(e.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return h}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}class DepthTexture extends Texture{constructor(e,t,n,r,s,a,o,c,l,u=DepthFormat){if(u!==DepthFormat&&u!==DepthStencilFormat)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===DepthFormat&&(n=UnsignedIntType),n===void 0&&u===DepthStencilFormat&&(n=UnsignedInt248Type),super(null,r,s,a,o,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:NearestFilter,this.minFilter=c!==void 0?c:NearestFilter,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const emptyTexture=new Texture,emptyShadowTexture=new DepthTexture(1,1),emptyArrayTexture=new DataArrayTexture,empty3dTexture=new Data3DTexture,emptyCubeTexture=new CubeTexture,arrayCacheF32=[],arrayCacheI32=[],mat4array=new Float32Array(16),mat3array=new Float32Array(9),mat2array=new Float32Array(4);function flatten(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=arrayCacheF32[r];if(s===void 0&&(s=new Float32Array(r),arrayCacheF32[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function arraysEqual(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function copyArray(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function allocTexUnits(i,e){let t=arrayCacheI32[e];t===void 0&&(t=new Int32Array(e),arrayCacheI32[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function setValueV1f(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function setValueV2f(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(arraysEqual(t,e))return;i.uniform2fv(this.addr,e),copyArray(t,e)}}function setValueV3f(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(arraysEqual(t,e))return;i.uniform3fv(this.addr,e),copyArray(t,e)}}function setValueV4f(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(arraysEqual(t,e))return;i.uniform4fv(this.addr,e),copyArray(t,e)}}function setValueM2(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(arraysEqual(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),copyArray(t,e)}else{if(arraysEqual(t,n))return;mat2array.set(n),i.uniformMatrix2fv(this.addr,!1,mat2array),copyArray(t,n)}}function setValueM3(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(arraysEqual(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),copyArray(t,e)}else{if(arraysEqual(t,n))return;mat3array.set(n),i.uniformMatrix3fv(this.addr,!1,mat3array),copyArray(t,n)}}function setValueM4(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(arraysEqual(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),copyArray(t,e)}else{if(arraysEqual(t,n))return;mat4array.set(n),i.uniformMatrix4fv(this.addr,!1,mat4array),copyArray(t,n)}}function setValueV1i(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function setValueV2i(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(arraysEqual(t,e))return;i.uniform2iv(this.addr,e),copyArray(t,e)}}function setValueV3i(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(arraysEqual(t,e))return;i.uniform3iv(this.addr,e),copyArray(t,e)}}function setValueV4i(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(arraysEqual(t,e))return;i.uniform4iv(this.addr,e),copyArray(t,e)}}function setValueV1ui(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function setValueV2ui(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(arraysEqual(t,e))return;i.uniform2uiv(this.addr,e),copyArray(t,e)}}function setValueV3ui(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(arraysEqual(t,e))return;i.uniform3uiv(this.addr,e),copyArray(t,e)}}function setValueV4ui(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(arraysEqual(t,e))return;i.uniform4uiv(this.addr,e),copyArray(t,e)}}function setValueT1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(emptyShadowTexture.compareFunction=LessEqualCompare,s=emptyShadowTexture):s=emptyTexture,t.setTexture2D(e||s,r)}function setValueT3D1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||empty3dTexture,r)}function setValueT6(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||emptyCubeTexture,r)}function setValueT2DArray1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||emptyArrayTexture,r)}function getSingularSetter(i){switch(i){case 5126:return setValueV1f;case 35664:return setValueV2f;case 35665:return setValueV3f;case 35666:return setValueV4f;case 35674:return setValueM2;case 35675:return setValueM3;case 35676:return setValueM4;case 5124:case 35670:return setValueV1i;case 35667:case 35671:return setValueV2i;case 35668:case 35672:return setValueV3i;case 35669:case 35673:return setValueV4i;case 5125:return setValueV1ui;case 36294:return setValueV2ui;case 36295:return setValueV3ui;case 36296:return setValueV4ui;case 35678:case 36198:case 36298:case 36306:case 35682:return setValueT1;case 35679:case 36299:case 36307:return setValueT3D1;case 35680:case 36300:case 36308:case 36293:return setValueT6;case 36289:case 36303:case 36311:case 36292:return setValueT2DArray1}}function setValueV1fArray(i,e){i.uniform1fv(this.addr,e)}function setValueV2fArray(i,e){const t=flatten(e,this.size,2);i.uniform2fv(this.addr,t)}function setValueV3fArray(i,e){const t=flatten(e,this.size,3);i.uniform3fv(this.addr,t)}function setValueV4fArray(i,e){const t=flatten(e,this.size,4);i.uniform4fv(this.addr,t)}function setValueM2Array(i,e){const t=flatten(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function setValueM3Array(i,e){const t=flatten(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function setValueM4Array(i,e){const t=flatten(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function setValueV1iArray(i,e){i.uniform1iv(this.addr,e)}function setValueV2iArray(i,e){i.uniform2iv(this.addr,e)}function setValueV3iArray(i,e){i.uniform3iv(this.addr,e)}function setValueV4iArray(i,e){i.uniform4iv(this.addr,e)}function setValueV1uiArray(i,e){i.uniform1uiv(this.addr,e)}function setValueV2uiArray(i,e){i.uniform2uiv(this.addr,e)}function setValueV3uiArray(i,e){i.uniform3uiv(this.addr,e)}function setValueV4uiArray(i,e){i.uniform4uiv(this.addr,e)}function setValueT1Array(i,e,t){const n=this.cache,r=e.length,s=allocTexUnits(t,r);arraysEqual(n,s)||(i.uniform1iv(this.addr,s),copyArray(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||emptyTexture,s[a])}function setValueT3DArray(i,e,t){const n=this.cache,r=e.length,s=allocTexUnits(t,r);arraysEqual(n,s)||(i.uniform1iv(this.addr,s),copyArray(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||empty3dTexture,s[a])}function setValueT6Array(i,e,t){const n=this.cache,r=e.length,s=allocTexUnits(t,r);arraysEqual(n,s)||(i.uniform1iv(this.addr,s),copyArray(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||emptyCubeTexture,s[a])}function setValueT2DArrayArray(i,e,t){const n=this.cache,r=e.length,s=allocTexUnits(t,r);arraysEqual(n,s)||(i.uniform1iv(this.addr,s),copyArray(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||emptyArrayTexture,s[a])}function getPureArraySetter(i){switch(i){case 5126:return setValueV1fArray;case 35664:return setValueV2fArray;case 35665:return setValueV3fArray;case 35666:return setValueV4fArray;case 35674:return setValueM2Array;case 35675:return setValueM3Array;case 35676:return setValueM4Array;case 5124:case 35670:return setValueV1iArray;case 35667:case 35671:return setValueV2iArray;case 35668:case 35672:return setValueV3iArray;case 35669:case 35673:return setValueV4iArray;case 5125:return setValueV1uiArray;case 36294:return setValueV2uiArray;case 36295:return setValueV3uiArray;case 36296:return setValueV4uiArray;case 35678:case 36198:case 36298:case 36306:case 35682:return setValueT1Array;case 35679:case 36299:case 36307:return setValueT3DArray;case 35680:case 36300:case 36308:case 36293:return setValueT6Array;case 36289:case 36303:case 36311:case 36292:return setValueT2DArrayArray}}class SingleUniform{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=getSingularSetter(t.type)}}class PureArrayUniform{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=getPureArraySetter(t.type)}}class StructuredUniform{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const RePathPart=/(\w+)(\])?(\[|\.)?/g;function addUniform(i,e){i.seq.push(e),i.map[e.id]=e}function parseUniform(i,e,t){const n=i.name,r=n.length;for(RePathPart.lastIndex=0;;){const s=RePathPart.exec(n),a=RePathPart.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){addUniform(t,l===void 0?new SingleUniform(o,i,e):new PureArrayUniform(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new StructuredUniform(o),addUniform(t,h)),t=h}}}class WebGLUniforms{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);parseUniform(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function WebGLShader(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const COMPLETION_STATUS_KHR=37297;let programIdCount=0;function handleSource(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function getEncodingComponents(i){const e=ColorManagement.getPrimaries(ColorManagement.workingColorSpace),t=ColorManagement.getPrimaries(i);let n;switch(e===t?n="":e===P3Primaries&&t===Rec709Primaries?n="LinearDisplayP3ToLinearSRGB":e===Rec709Primaries&&t===P3Primaries&&(n="LinearSRGBToLinearDisplayP3"),i){case LinearSRGBColorSpace:case LinearDisplayP3ColorSpace:return[n,"LinearTransferOETF"];case SRGBColorSpace:case DisplayP3ColorSpace:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function getShaderErrors(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+handleSource(i.getShaderSource(e),a)}else return r}function getTexelEncodingFunction(i,e){const t=getEncodingComponents(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function getToneMappingFunction(i,e){let t;switch(e){case LinearToneMapping:t="Linear";break;case ReinhardToneMapping:t="Reinhard";break;case CineonToneMapping:t="Cineon";break;case ACESFilmicToneMapping:t="ACESFilmic";break;case AgXToneMapping:t="AgX";break;case NeutralToneMapping:t="Neutral";break;case CustomToneMapping:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const _v0$1=new Vector3;function getLuminanceFunction(){ColorManagement.getLuminanceCoefficients(_v0$1);const i=_v0$1.x.toFixed(4),e=_v0$1.y.toFixed(4),t=_v0$1.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function generateVertexExtensions(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(filterEmptyLine).join(`
`)}function generateDefines(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function fetchAttributeLocations(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function filterEmptyLine(i){return i!==""}function replaceLightNums(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function replaceClippingPlaneNums(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const includePattern=/^[ \t]*#include +<([\w\d./]+)>/gm;function resolveIncludes(i){return i.replace(includePattern,includeReplacer)}const shaderChunkMap=new Map;function includeReplacer(i,e){let t=ShaderChunk[e];if(t===void 0){const n=shaderChunkMap.get(e);if(n!==void 0)t=ShaderChunk[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return resolveIncludes(t)}const unrollLoopPattern=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function unrollLoops(i){return i.replace(unrollLoopPattern,loopReplacer)}function loopReplacer(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function generatePrecision(i){let e=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function generateShadowMapTypeDefine(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===PCFShadowMap?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===PCFSoftShadowMap?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===VSMShadowMap&&(e="SHADOWMAP_TYPE_VSM"),e}function generateEnvMapTypeDefine(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case CubeReflectionMapping:case CubeRefractionMapping:e="ENVMAP_TYPE_CUBE";break;case CubeUVReflectionMapping:e="ENVMAP_TYPE_CUBE_UV";break}return e}function generateEnvMapModeDefine(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case CubeRefractionMapping:e="ENVMAP_MODE_REFRACTION";break}return e}function generateEnvMapBlendingDefine(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case MultiplyOperation:e="ENVMAP_BLENDING_MULTIPLY";break;case MixOperation:e="ENVMAP_BLENDING_MIX";break;case AddOperation:e="ENVMAP_BLENDING_ADD";break}return e}function generateCubeUVSize(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function WebGLProgram(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=generateShadowMapTypeDefine(t),l=generateEnvMapTypeDefine(t),u=generateEnvMapModeDefine(t),h=generateEnvMapBlendingDefine(t),d=generateCubeUVSize(t),f=generateVertexExtensions(t),m=generateDefines(s),v=r.createProgram();let g,_,F=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(filterEmptyLine).join(`
`),g.length>0&&(g+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(filterEmptyLine).join(`
`),_.length>0&&(_+=`
`)):(g=[generatePrecision(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(filterEmptyLine).join(`
`),_=[generatePrecision(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==NoToneMapping?"#define TONE_MAPPING":"",t.toneMapping!==NoToneMapping?ShaderChunk.tonemapping_pars_fragment:"",t.toneMapping!==NoToneMapping?getToneMappingFunction("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ShaderChunk.colorspace_pars_fragment,getTexelEncodingFunction("linearToOutputTexel",t.outputColorSpace),getLuminanceFunction(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(filterEmptyLine).join(`
`)),a=resolveIncludes(a),a=replaceLightNums(a,t),a=replaceClippingPlaneNums(a,t),o=resolveIncludes(o),o=replaceLightNums(o,t),o=replaceClippingPlaneNums(o,t),a=unrollLoops(a),o=unrollLoops(o),t.isRawShaderMaterial!==!0&&(F=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,_=["#define varying in",t.glslVersion===GLSL3?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===GLSL3?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const x=F+g+a,y=F+_+o,R=WebGLShader(r,r.VERTEX_SHADER,x),L=WebGLShader(r,r.FRAGMENT_SHADER,y);r.attachShader(v,R),r.attachShader(v,L),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function G(I){if(i.debug.checkShaderErrors){const H=r.getProgramInfoLog(v).trim(),q=r.getShaderInfoLog(R).trim(),ee=r.getShaderInfoLog(L).trim();let de=!0,fe=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(de=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,v,R,L);else{const pe=getShaderErrors(r,R,"vertex"),$=getShaderErrors(r,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+H+`
`+pe+`
`+$)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(q===""||ee==="")&&(fe=!1);fe&&(I.diagnostics={runnable:de,programLog:H,vertexShader:{log:q,prefix:g},fragmentShader:{log:ee,prefix:_}})}r.deleteShader(R),r.deleteShader(L),M=new WebGLUniforms(r,v),E=fetchAttributeLocations(r,v)}let M;this.getUniforms=function(){return M===void 0&&G(this),M};let E;this.getAttributes=function(){return E===void 0&&G(this),E};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(v,COMPLETION_STATUS_KHR)),b},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=programIdCount++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=R,this.fragmentShader=L,this}let _id$1=0;class WebGLShaderCache{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new WebGLShaderStage(e),t.set(e,n)),n}}class WebGLShaderStage{constructor(e){this.id=_id$1++,this.code=e,this.usedTimes=0}}function WebGLPrograms(i,e,t,n,r,s,a){const o=new Layers,c=new WebGLShaderCache,l=new Set,u=[],h=r.logarithmicDepthBuffer,d=r.vertexTextures;let f=r.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return l.add(E),E===0?"uv":`uv${E}`}function g(E,b,I,H,q){const ee=H.fog,de=q.geometry,fe=E.isMeshStandardMaterial?H.environment:null,pe=(E.isMeshStandardMaterial?t:e).get(E.envMap||fe),$=pe&&pe.mapping===CubeUVReflectionMapping?pe.image.height:null,O=m[E.type];E.precision!==null&&(f=r.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));const Y=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,ae=Y!==void 0?Y.length:0;let ue=0;de.morphAttributes.position!==void 0&&(ue=1),de.morphAttributes.normal!==void 0&&(ue=2),de.morphAttributes.color!==void 0&&(ue=3);let me,le,N,w;if(O){const Xe=ShaderLib[O];me=Xe.vertexShader,le=Xe.fragmentShader}else me=E.vertexShader,le=E.fragmentShader,c.update(E),N=c.getVertexShaderID(E),w=c.getFragmentShaderID(E);const z=i.getRenderTarget(),te=q.isInstancedMesh===!0,Z=q.isBatchedMesh===!0,ne=!!E.map,he=!!E.matcap,j=!!pe,Le=!!E.aoMap,K=!!E.lightMap,re=!!E.bumpMap,se=!!E.normalMap,Ce=!!E.displacementMap,Se=!!E.emissiveMap,p=!!E.metalnessMap,S=!!E.roughnessMap,D=E.anisotropy>0,X=E.clearcoat>0,J=E.dispersion>0,ie=E.iridescence>0,oe=E.sheen>0,xe=E.transmission>0,ve=D&&!!E.anisotropyMap,ge=X&&!!E.clearcoatMap,Pe=X&&!!E.clearcoatNormalMap,_e=X&&!!E.clearcoatRoughnessMap,Ee=ie&&!!E.iridescenceMap,Ue=ie&&!!E.iridescenceThicknessMap,Ie=oe&&!!E.sheenColorMap,De=oe&&!!E.sheenRoughnessMap,we=!!E.specularMap,Be=!!E.specularColorMap,He=!!E.specularIntensityMap,ce=xe&&!!E.transmissionMap,Fe=xe&&!!E.thicknessMap,Te=!!E.gradientMap,be=!!E.alphaMap,Ne=E.alphaTest>0,ke=!!E.alphaHash,We=!!E.extensions;let Ke=NoToneMapping;E.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Ke=i.toneMapping);const Qe={shaderID:O,shaderType:E.type,shaderName:E.name,vertexShader:me,fragmentShader:le,defines:E.defines,customVertexShaderID:N,customFragmentShaderID:w,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:Z,batchingColor:Z&&q._colorsTexture!==null,instancing:te,instancingColor:te&&q.instanceColor!==null,instancingMorph:te&&q.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:z===null?i.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:LinearSRGBColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:ne,matcap:he,envMap:j,envMapMode:j&&pe.mapping,envMapCubeUVHeight:$,aoMap:Le,lightMap:K,bumpMap:re,normalMap:se,displacementMap:d&&Ce,emissiveMap:Se,normalMapObjectSpace:se&&E.normalMapType===ObjectSpaceNormalMap,normalMapTangentSpace:se&&E.normalMapType===TangentSpaceNormalMap,metalnessMap:p,roughnessMap:S,anisotropy:D,anisotropyMap:ve,clearcoat:X,clearcoatMap:ge,clearcoatNormalMap:Pe,clearcoatRoughnessMap:_e,dispersion:J,iridescence:ie,iridescenceMap:Ee,iridescenceThicknessMap:Ue,sheen:oe,sheenColorMap:Ie,sheenRoughnessMap:De,specularMap:we,specularColorMap:Be,specularIntensityMap:He,transmission:xe,transmissionMap:ce,thicknessMap:Fe,gradientMap:Te,opaque:E.transparent===!1&&E.blending===NormalBlending&&E.alphaToCoverage===!1,alphaMap:be,alphaTest:Ne,alphaHash:ke,combine:E.combine,mapUv:ne&&v(E.map.channel),aoMapUv:Le&&v(E.aoMap.channel),lightMapUv:K&&v(E.lightMap.channel),bumpMapUv:re&&v(E.bumpMap.channel),normalMapUv:se&&v(E.normalMap.channel),displacementMapUv:Ce&&v(E.displacementMap.channel),emissiveMapUv:Se&&v(E.emissiveMap.channel),metalnessMapUv:p&&v(E.metalnessMap.channel),roughnessMapUv:S&&v(E.roughnessMap.channel),anisotropyMapUv:ve&&v(E.anisotropyMap.channel),clearcoatMapUv:ge&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:Pe&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ue&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:De&&v(E.sheenRoughnessMap.channel),specularMapUv:we&&v(E.specularMap.channel),specularColorMapUv:Be&&v(E.specularColorMap.channel),specularIntensityMapUv:He&&v(E.specularIntensityMap.channel),transmissionMapUv:ce&&v(E.transmissionMap.channel),thicknessMapUv:Fe&&v(E.thicknessMap.channel),alphaMapUv:be&&v(E.alphaMap.channel),vertexTangents:!!de.attributes.tangent&&(se||D),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!de.attributes.uv&&(ne||be),fog:!!ee,useFog:E.fog===!0,fogExp2:!!ee&&ee.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:q.isSkinnedMesh===!0,morphTargets:de.morphAttributes.position!==void 0,morphNormals:de.morphAttributes.normal!==void 0,morphColors:de.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:ue,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ke,decodeVideoTexture:ne&&E.map.isVideoTexture===!0&&ColorManagement.getTransfer(E.map.colorSpace)===SRGBTransfer,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===DoubleSide,flipSided:E.side===BackSide,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:We&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(We&&E.extensions.multiDraw===!0||Z)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Qe.vertexUv1s=l.has(1),Qe.vertexUv2s=l.has(2),Qe.vertexUv3s=l.has(3),l.clear(),Qe}function _(E){const b=[];if(E.shaderID?b.push(E.shaderID):(b.push(E.customVertexShaderID),b.push(E.customFragmentShaderID)),E.defines!==void 0)for(const I in E.defines)b.push(I),b.push(E.defines[I]);return E.isRawShaderMaterial===!1&&(F(b,E),x(b,E),b.push(i.outputColorSpace)),b.push(E.customProgramCacheKey),b.join()}function F(E,b){E.push(b.precision),E.push(b.outputColorSpace),E.push(b.envMapMode),E.push(b.envMapCubeUVHeight),E.push(b.mapUv),E.push(b.alphaMapUv),E.push(b.lightMapUv),E.push(b.aoMapUv),E.push(b.bumpMapUv),E.push(b.normalMapUv),E.push(b.displacementMapUv),E.push(b.emissiveMapUv),E.push(b.metalnessMapUv),E.push(b.roughnessMapUv),E.push(b.anisotropyMapUv),E.push(b.clearcoatMapUv),E.push(b.clearcoatNormalMapUv),E.push(b.clearcoatRoughnessMapUv),E.push(b.iridescenceMapUv),E.push(b.iridescenceThicknessMapUv),E.push(b.sheenColorMapUv),E.push(b.sheenRoughnessMapUv),E.push(b.specularMapUv),E.push(b.specularColorMapUv),E.push(b.specularIntensityMapUv),E.push(b.transmissionMapUv),E.push(b.thicknessMapUv),E.push(b.combine),E.push(b.fogExp2),E.push(b.sizeAttenuation),E.push(b.morphTargetsCount),E.push(b.morphAttributeCount),E.push(b.numDirLights),E.push(b.numPointLights),E.push(b.numSpotLights),E.push(b.numSpotLightMaps),E.push(b.numHemiLights),E.push(b.numRectAreaLights),E.push(b.numDirLightShadows),E.push(b.numPointLightShadows),E.push(b.numSpotLightShadows),E.push(b.numSpotLightShadowsWithMaps),E.push(b.numLightProbes),E.push(b.shadowMapType),E.push(b.toneMapping),E.push(b.numClippingPlanes),E.push(b.numClipIntersection),E.push(b.depthPacking)}function x(E,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.skinning&&o.enable(4),b.morphTargets&&o.enable(5),b.morphNormals&&o.enable(6),b.morphColors&&o.enable(7),b.premultipliedAlpha&&o.enable(8),b.shadowMapEnabled&&o.enable(9),b.doubleSided&&o.enable(10),b.flipSided&&o.enable(11),b.useDepthPacking&&o.enable(12),b.dithering&&o.enable(13),b.transmission&&o.enable(14),b.sheen&&o.enable(15),b.opaque&&o.enable(16),b.pointsUvs&&o.enable(17),b.decodeVideoTexture&&o.enable(18),b.alphaToCoverage&&o.enable(19),E.push(o.mask)}function y(E){const b=m[E.type];let I;if(b){const H=ShaderLib[b];I=UniformsUtils.clone(H.uniforms)}else I=E.uniforms;return I}function R(E,b){let I;for(let H=0,q=u.length;H<q;H++){const ee=u[H];if(ee.cacheKey===b){I=ee,++I.usedTimes;break}}return I===void 0&&(I=new WebGLProgram(i,b,E,s),u.push(I)),I}function L(E){if(--E.usedTimes===0){const b=u.indexOf(E);u[b]=u[u.length-1],u.pop(),E.destroy()}}function G(E){c.remove(E)}function M(){c.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:y,acquireProgram:R,releaseProgram:L,releaseShaderCache:G,programs:u,dispose:M}}function WebGLProperties(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,c){i.get(a)[o]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function painterSortStable(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function reversePainterSortStable(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function WebGLRenderList(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(h,d,f,m,v,g){let _=i[e];return _===void 0?(_={id:h.id,object:h,geometry:d,material:f,groupOrder:m,renderOrder:h.renderOrder,z:v,group:g},i[e]=_):(_.id=h.id,_.object=h,_.geometry=d,_.material=f,_.groupOrder=m,_.renderOrder=h.renderOrder,_.z=v,_.group=g),e++,_}function o(h,d,f,m,v,g){const _=a(h,d,f,m,v,g);f.transmission>0?n.push(_):f.transparent===!0?r.push(_):t.push(_)}function c(h,d,f,m,v,g){const _=a(h,d,f,m,v,g);f.transmission>0?n.unshift(_):f.transparent===!0?r.unshift(_):t.unshift(_)}function l(h,d){t.length>1&&t.sort(h||painterSortStable),n.length>1&&n.sort(d||reversePainterSortStable),r.length>1&&r.sort(d||reversePainterSortStable)}function u(){for(let h=e,d=i.length;h<d;h++){const f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:c,finish:u,sort:l}}function WebGLRenderLists(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new WebGLRenderList,i.set(n,[a])):r>=s.length?(a=new WebGLRenderList,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function UniformsCache(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Vector3,color:new Color};break;case"SpotLight":t={position:new Vector3,direction:new Vector3,color:new Color,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Vector3,color:new Color,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Vector3,skyColor:new Color,groundColor:new Color};break;case"RectAreaLight":t={color:new Color,position:new Vector3,halfWidth:new Vector3,halfHeight:new Vector3};break}return i[e.id]=t,t}}}function ShadowUniformsCache(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vector2};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vector2};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vector2,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let nextVersion=0;function shadowCastingAndTexturingLightsFirst(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function WebGLLights(i){const e=new UniformsCache,t=ShadowUniformsCache(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new Vector3);const r=new Vector3,s=new Matrix4,a=new Matrix4;function o(l){let u=0,h=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,m=0,v=0,g=0,_=0,F=0,x=0,y=0,R=0,L=0,G=0;l.sort(shadowCastingAndTexturingLightsFirst);for(let E=0,b=l.length;E<b;E++){const I=l[E],H=I.color,q=I.intensity,ee=I.distance,de=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=H.r*q,h+=H.g*q,d+=H.b*q;else if(I.isLightProbe){for(let fe=0;fe<9;fe++)n.probe[fe].addScaledVector(I.sh.coefficients[fe],q);G++}else if(I.isDirectionalLight){const fe=e.get(I);if(fe.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const pe=I.shadow,$=t.get(I);$.shadowIntensity=pe.intensity,$.shadowBias=pe.bias,$.shadowNormalBias=pe.normalBias,$.shadowRadius=pe.radius,$.shadowMapSize=pe.mapSize,n.directionalShadow[f]=$,n.directionalShadowMap[f]=de,n.directionalShadowMatrix[f]=I.shadow.matrix,F++}n.directional[f]=fe,f++}else if(I.isSpotLight){const fe=e.get(I);fe.position.setFromMatrixPosition(I.matrixWorld),fe.color.copy(H).multiplyScalar(q),fe.distance=ee,fe.coneCos=Math.cos(I.angle),fe.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),fe.decay=I.decay,n.spot[v]=fe;const pe=I.shadow;if(I.map&&(n.spotLightMap[R]=I.map,R++,pe.updateMatrices(I),I.castShadow&&L++),n.spotLightMatrix[v]=pe.matrix,I.castShadow){const $=t.get(I);$.shadowIntensity=pe.intensity,$.shadowBias=pe.bias,$.shadowNormalBias=pe.normalBias,$.shadowRadius=pe.radius,$.shadowMapSize=pe.mapSize,n.spotShadow[v]=$,n.spotShadowMap[v]=de,y++}v++}else if(I.isRectAreaLight){const fe=e.get(I);fe.color.copy(H).multiplyScalar(q),fe.halfWidth.set(I.width*.5,0,0),fe.halfHeight.set(0,I.height*.5,0),n.rectArea[g]=fe,g++}else if(I.isPointLight){const fe=e.get(I);if(fe.color.copy(I.color).multiplyScalar(I.intensity),fe.distance=I.distance,fe.decay=I.decay,I.castShadow){const pe=I.shadow,$=t.get(I);$.shadowIntensity=pe.intensity,$.shadowBias=pe.bias,$.shadowNormalBias=pe.normalBias,$.shadowRadius=pe.radius,$.shadowMapSize=pe.mapSize,$.shadowCameraNear=pe.camera.near,$.shadowCameraFar=pe.camera.far,n.pointShadow[m]=$,n.pointShadowMap[m]=de,n.pointShadowMatrix[m]=I.shadow.matrix,x++}n.point[m]=fe,m++}else if(I.isHemisphereLight){const fe=e.get(I);fe.skyColor.copy(I.color).multiplyScalar(q),fe.groundColor.copy(I.groundColor).multiplyScalar(q),n.hemi[_]=fe,_++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=UniformsLib.LTC_FLOAT_1,n.rectAreaLTC2=UniformsLib.LTC_FLOAT_2):(n.rectAreaLTC1=UniformsLib.LTC_HALF_1,n.rectAreaLTC2=UniformsLib.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const M=n.hash;(M.directionalLength!==f||M.pointLength!==m||M.spotLength!==v||M.rectAreaLength!==g||M.hemiLength!==_||M.numDirectionalShadows!==F||M.numPointShadows!==x||M.numSpotShadows!==y||M.numSpotMaps!==R||M.numLightProbes!==G)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=g,n.point.length=m,n.hemi.length=_,n.directionalShadow.length=F,n.directionalShadowMap.length=F,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=F,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=y+R-L,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=G,M.directionalLength=f,M.pointLength=m,M.spotLength=v,M.rectAreaLength=g,M.hemiLength=_,M.numDirectionalShadows=F,M.numPointShadows=x,M.numSpotShadows=y,M.numSpotMaps=R,M.numLightProbes=G,n.version=nextVersion++)}function c(l,u){let h=0,d=0,f=0,m=0,v=0;const g=u.matrixWorldInverse;for(let _=0,F=l.length;_<F;_++){const x=l[_];if(x.isDirectionalLight){const y=n.directional[h];y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),h++}else if(x.isSpotLight){const y=n.spot[f];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),f++}else if(x.isRectAreaLight){const y=n.rectArea[m];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(g),a.identity(),s.copy(x.matrixWorld),s.premultiply(g),a.extractRotation(s),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),m++}else if(x.isPointLight){const y=n.point[d];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(g),d++}else if(x.isHemisphereLight){const y=n.hemi[v];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(g),v++}}}return{setup:o,setupView:c,state:n}}function WebGLRenderState(i){const e=new WebGLLights(i),t=[],n=[];function r(u){l.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function WebGLRenderStates(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new WebGLRenderState(i),e.set(r,[o])):s>=a.length?(o=new WebGLRenderState(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class MeshDepthMaterial extends Material{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=BasicDepthPacking,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class MeshDistanceMaterial extends Material{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const vertex=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragment=`uniform sampler2D shadow_pass;
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
}`;function WebGLShadowMap(i,e,t){let n=new Frustum;const r=new Vector2,s=new Vector2,a=new Vector4,o=new MeshDepthMaterial({depthPacking:RGBADepthPacking}),c=new MeshDistanceMaterial,l={},u=t.maxTextureSize,h={[FrontSide]:BackSide,[BackSide]:FrontSide,[DoubleSide]:DoubleSide},d=new ShaderMaterial({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Vector2},radius:{value:4}},vertexShader:vertex,fragmentShader:fragment}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new BufferGeometry;m.setAttribute("position",new BufferAttribute(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Mesh(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=PCFShadowMap;let _=this.type;this.render=function(L,G,M){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||L.length===0)return;const E=i.getRenderTarget(),b=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),H=i.state;H.setBlending(NoBlending),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const q=_!==VSMShadowMap&&this.type===VSMShadowMap,ee=_===VSMShadowMap&&this.type!==VSMShadowMap;for(let de=0,fe=L.length;de<fe;de++){const pe=L[de],$=pe.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",pe,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;r.copy($.mapSize);const O=$.getFrameExtents();if(r.multiply(O),s.copy($.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/O.x),r.x=s.x*O.x,$.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/O.y),r.y=s.y*O.y,$.mapSize.y=s.y)),$.map===null||q===!0||ee===!0){const ae=this.type!==VSMShadowMap?{minFilter:NearestFilter,magFilter:NearestFilter}:{};$.map!==null&&$.map.dispose(),$.map=new WebGLRenderTarget(r.x,r.y,ae),$.map.texture.name=pe.name+".shadowMap",$.camera.updateProjectionMatrix()}i.setRenderTarget($.map),i.clear();const Y=$.getViewportCount();for(let ae=0;ae<Y;ae++){const ue=$.getViewport(ae);a.set(s.x*ue.x,s.y*ue.y,s.x*ue.z,s.y*ue.w),H.viewport(a),$.updateMatrices(pe,ae),n=$.getFrustum(),y(G,M,$.camera,pe,this.type)}$.isPointLightShadow!==!0&&this.type===VSMShadowMap&&F($,M),$.needsUpdate=!1}_=this.type,g.needsUpdate=!1,i.setRenderTarget(E,b,I)};function F(L,G){const M=e.update(v);d.defines.VSM_SAMPLES!==L.blurSamples&&(d.defines.VSM_SAMPLES=L.blurSamples,f.defines.VSM_SAMPLES=L.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new WebGLRenderTarget(r.x,r.y)),d.uniforms.shadow_pass.value=L.map.texture,d.uniforms.resolution.value=L.mapSize,d.uniforms.radius.value=L.radius,i.setRenderTarget(L.mapPass),i.clear(),i.renderBufferDirect(G,null,M,d,v,null),f.uniforms.shadow_pass.value=L.mapPass.texture,f.uniforms.resolution.value=L.mapSize,f.uniforms.radius.value=L.radius,i.setRenderTarget(L.map),i.clear(),i.renderBufferDirect(G,null,M,f,v,null)}function x(L,G,M,E){let b=null;const I=M.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(I!==void 0)b=I;else if(b=M.isPointLight===!0?c:o,i.localClippingEnabled&&G.clipShadows===!0&&Array.isArray(G.clippingPlanes)&&G.clippingPlanes.length!==0||G.displacementMap&&G.displacementScale!==0||G.alphaMap&&G.alphaTest>0||G.map&&G.alphaTest>0){const H=b.uuid,q=G.uuid;let ee=l[H];ee===void 0&&(ee={},l[H]=ee);let de=ee[q];de===void 0&&(de=b.clone(),ee[q]=de,G.addEventListener("dispose",R)),b=de}if(b.visible=G.visible,b.wireframe=G.wireframe,E===VSMShadowMap?b.side=G.shadowSide!==null?G.shadowSide:G.side:b.side=G.shadowSide!==null?G.shadowSide:h[G.side],b.alphaMap=G.alphaMap,b.alphaTest=G.alphaTest,b.map=G.map,b.clipShadows=G.clipShadows,b.clippingPlanes=G.clippingPlanes,b.clipIntersection=G.clipIntersection,b.displacementMap=G.displacementMap,b.displacementScale=G.displacementScale,b.displacementBias=G.displacementBias,b.wireframeLinewidth=G.wireframeLinewidth,b.linewidth=G.linewidth,M.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const H=i.properties.get(b);H.light=M}return b}function y(L,G,M,E,b){if(L.visible===!1)return;if(L.layers.test(G.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&b===VSMShadowMap)&&(!L.frustumCulled||n.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,L.matrixWorld);const q=e.update(L),ee=L.material;if(Array.isArray(ee)){const de=q.groups;for(let fe=0,pe=de.length;fe<pe;fe++){const $=de[fe],O=ee[$.materialIndex];if(O&&O.visible){const Y=x(L,O,E,b);L.onBeforeShadow(i,L,G,M,q,Y,$),i.renderBufferDirect(M,null,q,Y,L,$),L.onAfterShadow(i,L,G,M,q,Y,$)}}}else if(ee.visible){const de=x(L,ee,E,b);L.onBeforeShadow(i,L,G,M,q,de,null),i.renderBufferDirect(M,null,q,de,L,null),L.onAfterShadow(i,L,G,M,q,de,null)}}const H=L.children;for(let q=0,ee=H.length;q<ee;q++)y(H[q],G,M,E,b)}function R(L){L.target.removeEventListener("dispose",R);for(const M in l){const E=l[M],b=L.target.uuid;b in E&&(E[b].dispose(),delete E[b])}}}function WebGLState(i){function e(){let ce=!1;const Fe=new Vector4;let Te=null;const be=new Vector4(0,0,0,0);return{setMask:function(Ne){Te!==Ne&&!ce&&(i.colorMask(Ne,Ne,Ne,Ne),Te=Ne)},setLocked:function(Ne){ce=Ne},setClear:function(Ne,ke,We,Ke,Qe){Qe===!0&&(Ne*=Ke,ke*=Ke,We*=Ke),Fe.set(Ne,ke,We,Ke),be.equals(Fe)===!1&&(i.clearColor(Ne,ke,We,Ke),be.copy(Fe))},reset:function(){ce=!1,Te=null,be.set(-1,0,0,0)}}}function t(){let ce=!1,Fe=null,Te=null,be=null;return{setTest:function(Ne){Ne?w(i.DEPTH_TEST):z(i.DEPTH_TEST)},setMask:function(Ne){Fe!==Ne&&!ce&&(i.depthMask(Ne),Fe=Ne)},setFunc:function(Ne){if(Te!==Ne){switch(Ne){case NeverDepth:i.depthFunc(i.NEVER);break;case AlwaysDepth:i.depthFunc(i.ALWAYS);break;case LessDepth:i.depthFunc(i.LESS);break;case LessEqualDepth:i.depthFunc(i.LEQUAL);break;case EqualDepth:i.depthFunc(i.EQUAL);break;case GreaterEqualDepth:i.depthFunc(i.GEQUAL);break;case GreaterDepth:i.depthFunc(i.GREATER);break;case NotEqualDepth:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Te=Ne}},setLocked:function(Ne){ce=Ne},setClear:function(Ne){be!==Ne&&(i.clearDepth(Ne),be=Ne)},reset:function(){ce=!1,Fe=null,Te=null,be=null}}}function n(){let ce=!1,Fe=null,Te=null,be=null,Ne=null,ke=null,We=null,Ke=null,Qe=null;return{setTest:function(Xe){ce||(Xe?w(i.STENCIL_TEST):z(i.STENCIL_TEST))},setMask:function(Xe){Fe!==Xe&&!ce&&(i.stencilMask(Xe),Fe=Xe)},setFunc:function(Xe,nt,Ze){(Te!==Xe||be!==nt||Ne!==Ze)&&(i.stencilFunc(Xe,nt,Ze),Te=Xe,be=nt,Ne=Ze)},setOp:function(Xe,nt,Ze){(ke!==Xe||We!==nt||Ke!==Ze)&&(i.stencilOp(Xe,nt,Ze),ke=Xe,We=nt,Ke=Ze)},setLocked:function(Xe){ce=Xe},setClear:function(Xe){Qe!==Xe&&(i.clearStencil(Xe),Qe=Xe)},reset:function(){ce=!1,Fe=null,Te=null,be=null,Ne=null,ke=null,We=null,Ke=null,Qe=null}}}const r=new e,s=new t,a=new n,o=new WeakMap,c=new WeakMap;let l={},u={},h=new WeakMap,d=[],f=null,m=!1,v=null,g=null,_=null,F=null,x=null,y=null,R=null,L=new Color(0,0,0),G=0,M=!1,E=null,b=null,I=null,H=null,q=null;const ee=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let de=!1,fe=0;const pe=i.getParameter(i.VERSION);pe.indexOf("WebGL")!==-1?(fe=parseFloat(/^WebGL (\d)/.exec(pe)[1]),de=fe>=1):pe.indexOf("OpenGL ES")!==-1&&(fe=parseFloat(/^OpenGL ES (\d)/.exec(pe)[1]),de=fe>=2);let $=null,O={};const Y=i.getParameter(i.SCISSOR_BOX),ae=i.getParameter(i.VIEWPORT),ue=new Vector4().fromArray(Y),me=new Vector4().fromArray(ae);function le(ce,Fe,Te,be){const Ne=new Uint8Array(4),ke=i.createTexture();i.bindTexture(ce,ke),i.texParameteri(ce,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(ce,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let We=0;We<Te;We++)ce===i.TEXTURE_3D||ce===i.TEXTURE_2D_ARRAY?i.texImage3D(Fe,0,i.RGBA,1,1,be,0,i.RGBA,i.UNSIGNED_BYTE,Ne):i.texImage2D(Fe+We,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ne);return ke}const N={};N[i.TEXTURE_2D]=le(i.TEXTURE_2D,i.TEXTURE_2D,1),N[i.TEXTURE_CUBE_MAP]=le(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),N[i.TEXTURE_2D_ARRAY]=le(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),N[i.TEXTURE_3D]=le(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),w(i.DEPTH_TEST),s.setFunc(LessEqualDepth),re(!1),se(CullFaceBack),w(i.CULL_FACE),Le(NoBlending);function w(ce){l[ce]!==!0&&(i.enable(ce),l[ce]=!0)}function z(ce){l[ce]!==!1&&(i.disable(ce),l[ce]=!1)}function te(ce,Fe){return u[ce]!==Fe?(i.bindFramebuffer(ce,Fe),u[ce]=Fe,ce===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Fe),ce===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Fe),!0):!1}function Z(ce,Fe){let Te=d,be=!1;if(ce){Te=h.get(Fe),Te===void 0&&(Te=[],h.set(Fe,Te));const Ne=ce.textures;if(Te.length!==Ne.length||Te[0]!==i.COLOR_ATTACHMENT0){for(let ke=0,We=Ne.length;ke<We;ke++)Te[ke]=i.COLOR_ATTACHMENT0+ke;Te.length=Ne.length,be=!0}}else Te[0]!==i.BACK&&(Te[0]=i.BACK,be=!0);be&&i.drawBuffers(Te)}function ne(ce){return f!==ce?(i.useProgram(ce),f=ce,!0):!1}const he={[AddEquation]:i.FUNC_ADD,[SubtractEquation]:i.FUNC_SUBTRACT,[ReverseSubtractEquation]:i.FUNC_REVERSE_SUBTRACT};he[MinEquation]=i.MIN,he[MaxEquation]=i.MAX;const j={[ZeroFactor]:i.ZERO,[OneFactor]:i.ONE,[SrcColorFactor]:i.SRC_COLOR,[SrcAlphaFactor]:i.SRC_ALPHA,[SrcAlphaSaturateFactor]:i.SRC_ALPHA_SATURATE,[DstColorFactor]:i.DST_COLOR,[DstAlphaFactor]:i.DST_ALPHA,[OneMinusSrcColorFactor]:i.ONE_MINUS_SRC_COLOR,[OneMinusSrcAlphaFactor]:i.ONE_MINUS_SRC_ALPHA,[OneMinusDstColorFactor]:i.ONE_MINUS_DST_COLOR,[OneMinusDstAlphaFactor]:i.ONE_MINUS_DST_ALPHA,[ConstantColorFactor]:i.CONSTANT_COLOR,[OneMinusConstantColorFactor]:i.ONE_MINUS_CONSTANT_COLOR,[ConstantAlphaFactor]:i.CONSTANT_ALPHA,[OneMinusConstantAlphaFactor]:i.ONE_MINUS_CONSTANT_ALPHA};function Le(ce,Fe,Te,be,Ne,ke,We,Ke,Qe,Xe){if(ce===NoBlending){m===!0&&(z(i.BLEND),m=!1);return}if(m===!1&&(w(i.BLEND),m=!0),ce!==CustomBlending){if(ce!==v||Xe!==M){if((g!==AddEquation||x!==AddEquation)&&(i.blendEquation(i.FUNC_ADD),g=AddEquation,x=AddEquation),Xe)switch(ce){case NormalBlending:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case AdditiveBlending:i.blendFunc(i.ONE,i.ONE);break;case SubtractiveBlending:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case MultiplyBlending:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",ce);break}else switch(ce){case NormalBlending:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case AdditiveBlending:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case SubtractiveBlending:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case MultiplyBlending:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",ce);break}_=null,F=null,y=null,R=null,L.set(0,0,0),G=0,v=ce,M=Xe}return}Ne=Ne||Fe,ke=ke||Te,We=We||be,(Fe!==g||Ne!==x)&&(i.blendEquationSeparate(he[Fe],he[Ne]),g=Fe,x=Ne),(Te!==_||be!==F||ke!==y||We!==R)&&(i.blendFuncSeparate(j[Te],j[be],j[ke],j[We]),_=Te,F=be,y=ke,R=We),(Ke.equals(L)===!1||Qe!==G)&&(i.blendColor(Ke.r,Ke.g,Ke.b,Qe),L.copy(Ke),G=Qe),v=ce,M=!1}function K(ce,Fe){ce.side===DoubleSide?z(i.CULL_FACE):w(i.CULL_FACE);let Te=ce.side===BackSide;Fe&&(Te=!Te),re(Te),ce.blending===NormalBlending&&ce.transparent===!1?Le(NoBlending):Le(ce.blending,ce.blendEquation,ce.blendSrc,ce.blendDst,ce.blendEquationAlpha,ce.blendSrcAlpha,ce.blendDstAlpha,ce.blendColor,ce.blendAlpha,ce.premultipliedAlpha),s.setFunc(ce.depthFunc),s.setTest(ce.depthTest),s.setMask(ce.depthWrite),r.setMask(ce.colorWrite);const be=ce.stencilWrite;a.setTest(be),be&&(a.setMask(ce.stencilWriteMask),a.setFunc(ce.stencilFunc,ce.stencilRef,ce.stencilFuncMask),a.setOp(ce.stencilFail,ce.stencilZFail,ce.stencilZPass)),Se(ce.polygonOffset,ce.polygonOffsetFactor,ce.polygonOffsetUnits),ce.alphaToCoverage===!0?w(i.SAMPLE_ALPHA_TO_COVERAGE):z(i.SAMPLE_ALPHA_TO_COVERAGE)}function re(ce){E!==ce&&(ce?i.frontFace(i.CW):i.frontFace(i.CCW),E=ce)}function se(ce){ce!==CullFaceNone?(w(i.CULL_FACE),ce!==b&&(ce===CullFaceBack?i.cullFace(i.BACK):ce===CullFaceFront?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):z(i.CULL_FACE),b=ce}function Ce(ce){ce!==I&&(de&&i.lineWidth(ce),I=ce)}function Se(ce,Fe,Te){ce?(w(i.POLYGON_OFFSET_FILL),(H!==Fe||q!==Te)&&(i.polygonOffset(Fe,Te),H=Fe,q=Te)):z(i.POLYGON_OFFSET_FILL)}function p(ce){ce?w(i.SCISSOR_TEST):z(i.SCISSOR_TEST)}function S(ce){ce===void 0&&(ce=i.TEXTURE0+ee-1),$!==ce&&(i.activeTexture(ce),$=ce)}function D(ce,Fe,Te){Te===void 0&&($===null?Te=i.TEXTURE0+ee-1:Te=$);let be=O[Te];be===void 0&&(be={type:void 0,texture:void 0},O[Te]=be),(be.type!==ce||be.texture!==Fe)&&($!==Te&&(i.activeTexture(Te),$=Te),i.bindTexture(ce,Fe||N[ce]),be.type=ce,be.texture=Fe)}function X(){const ce=O[$];ce!==void 0&&ce.type!==void 0&&(i.bindTexture(ce.type,null),ce.type=void 0,ce.texture=void 0)}function J(){try{i.compressedTexImage2D.apply(i,arguments)}catch(ce){console.error("THREE.WebGLState:",ce)}}function ie(){try{i.compressedTexImage3D.apply(i,arguments)}catch(ce){console.error("THREE.WebGLState:",ce)}}function oe(){try{i.texSubImage2D.apply(i,arguments)}catch(ce){console.error("THREE.WebGLState:",ce)}}function xe(){try{i.texSubImage3D.apply(i,arguments)}catch(ce){console.error("THREE.WebGLState:",ce)}}function ve(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(ce){console.error("THREE.WebGLState:",ce)}}function ge(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(ce){console.error("THREE.WebGLState:",ce)}}function Pe(){try{i.texStorage2D.apply(i,arguments)}catch(ce){console.error("THREE.WebGLState:",ce)}}function _e(){try{i.texStorage3D.apply(i,arguments)}catch(ce){console.error("THREE.WebGLState:",ce)}}function Ee(){try{i.texImage2D.apply(i,arguments)}catch(ce){console.error("THREE.WebGLState:",ce)}}function Ue(){try{i.texImage3D.apply(i,arguments)}catch(ce){console.error("THREE.WebGLState:",ce)}}function Ie(ce){ue.equals(ce)===!1&&(i.scissor(ce.x,ce.y,ce.z,ce.w),ue.copy(ce))}function De(ce){me.equals(ce)===!1&&(i.viewport(ce.x,ce.y,ce.z,ce.w),me.copy(ce))}function we(ce,Fe){let Te=c.get(Fe);Te===void 0&&(Te=new WeakMap,c.set(Fe,Te));let be=Te.get(ce);be===void 0&&(be=i.getUniformBlockIndex(Fe,ce.name),Te.set(ce,be))}function Be(ce,Fe){const be=c.get(Fe).get(ce);o.get(Fe)!==be&&(i.uniformBlockBinding(Fe,be,ce.__bindingPointIndex),o.set(Fe,be))}function He(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},$=null,O={},u={},h=new WeakMap,d=[],f=null,m=!1,v=null,g=null,_=null,F=null,x=null,y=null,R=null,L=new Color(0,0,0),G=0,M=!1,E=null,b=null,I=null,H=null,q=null,ue.set(0,0,i.canvas.width,i.canvas.height),me.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:w,disable:z,bindFramebuffer:te,drawBuffers:Z,useProgram:ne,setBlending:Le,setMaterial:K,setFlipSided:re,setCullFace:se,setLineWidth:Ce,setPolygonOffset:Se,setScissorTest:p,activeTexture:S,bindTexture:D,unbindTexture:X,compressedTexImage2D:J,compressedTexImage3D:ie,texImage2D:Ee,texImage3D:Ue,updateUBOMapping:we,uniformBlockBinding:Be,texStorage2D:Pe,texStorage3D:_e,texSubImage2D:oe,texSubImage3D:xe,compressedTexSubImage2D:ve,compressedTexSubImage3D:ge,scissor:Ie,viewport:De,reset:He}}function getByteLength(i,e,t,n){const r=getTextureTypeByteLength(n);switch(t){case AlphaFormat:return i*e;case LuminanceFormat:return i*e;case LuminanceAlphaFormat:return i*e*2;case RedFormat:return i*e/r.components*r.byteLength;case RedIntegerFormat:return i*e/r.components*r.byteLength;case RGFormat:return i*e*2/r.components*r.byteLength;case RGIntegerFormat:return i*e*2/r.components*r.byteLength;case RGBFormat:return i*e*3/r.components*r.byteLength;case RGBAFormat:return i*e*4/r.components*r.byteLength;case RGBAIntegerFormat:return i*e*4/r.components*r.byteLength;case RGB_S3TC_DXT1_Format:case RGBA_S3TC_DXT1_Format:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case RGBA_S3TC_DXT3_Format:case RGBA_S3TC_DXT5_Format:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case RGB_PVRTC_2BPPV1_Format:case RGBA_PVRTC_2BPPV1_Format:return Math.max(i,16)*Math.max(e,8)/4;case RGB_PVRTC_4BPPV1_Format:case RGBA_PVRTC_4BPPV1_Format:return Math.max(i,8)*Math.max(e,8)/2;case RGB_ETC1_Format:case RGB_ETC2_Format:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case RGBA_ETC2_EAC_Format:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case RGBA_ASTC_4x4_Format:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case RGBA_ASTC_5x4_Format:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case RGBA_ASTC_5x5_Format:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case RGBA_ASTC_6x5_Format:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case RGBA_ASTC_6x6_Format:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case RGBA_ASTC_8x5_Format:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case RGBA_ASTC_8x6_Format:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case RGBA_ASTC_8x8_Format:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case RGBA_ASTC_10x5_Format:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case RGBA_ASTC_10x6_Format:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case RGBA_ASTC_10x8_Format:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case RGBA_ASTC_10x10_Format:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case RGBA_ASTC_12x10_Format:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case RGBA_ASTC_12x12_Format:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case RGBA_BPTC_Format:case RGB_BPTC_SIGNED_Format:case RGB_BPTC_UNSIGNED_Format:return Math.ceil(i/4)*Math.ceil(e/4)*16;case RED_RGTC1_Format:case SIGNED_RED_RGTC1_Format:return Math.ceil(i/4)*Math.ceil(e/4)*8;case RED_GREEN_RGTC2_Format:case SIGNED_RED_GREEN_RGTC2_Format:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function getTextureTypeByteLength(i){switch(i){case UnsignedByteType:case ByteType:return{byteLength:1,components:1};case UnsignedShortType:case ShortType:case HalfFloatType:return{byteLength:2,components:1};case UnsignedShort4444Type:case UnsignedShort5551Type:return{byteLength:2,components:4};case UnsignedIntType:case IntType:case FloatType:return{byteLength:4,components:1};case UnsignedInt5999Type:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function WebGLTextures(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Vector2,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(S,D){return f?new OffscreenCanvas(S,D):createElementNS("canvas")}function v(S,D,X){let J=1;const ie=p(S);if((ie.width>X||ie.height>X)&&(J=X/Math.max(ie.width,ie.height)),J<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const oe=Math.floor(J*ie.width),xe=Math.floor(J*ie.height);h===void 0&&(h=m(oe,xe));const ve=D?m(oe,xe):h;return ve.width=oe,ve.height=xe,ve.getContext("2d").drawImage(S,0,0,oe,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+oe+"x"+xe+")."),ve}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),S;return S}function g(S){return S.generateMipmaps&&S.minFilter!==NearestFilter&&S.minFilter!==LinearFilter}function _(S){i.generateMipmap(S)}function F(S,D,X,J,ie=!1){if(S!==null){if(i[S]!==void 0)return i[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let oe=D;if(D===i.RED&&(X===i.FLOAT&&(oe=i.R32F),X===i.HALF_FLOAT&&(oe=i.R16F),X===i.UNSIGNED_BYTE&&(oe=i.R8)),D===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(oe=i.R8UI),X===i.UNSIGNED_SHORT&&(oe=i.R16UI),X===i.UNSIGNED_INT&&(oe=i.R32UI),X===i.BYTE&&(oe=i.R8I),X===i.SHORT&&(oe=i.R16I),X===i.INT&&(oe=i.R32I)),D===i.RG&&(X===i.FLOAT&&(oe=i.RG32F),X===i.HALF_FLOAT&&(oe=i.RG16F),X===i.UNSIGNED_BYTE&&(oe=i.RG8)),D===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(oe=i.RG8UI),X===i.UNSIGNED_SHORT&&(oe=i.RG16UI),X===i.UNSIGNED_INT&&(oe=i.RG32UI),X===i.BYTE&&(oe=i.RG8I),X===i.SHORT&&(oe=i.RG16I),X===i.INT&&(oe=i.RG32I)),D===i.RGB&&X===i.UNSIGNED_INT_5_9_9_9_REV&&(oe=i.RGB9_E5),D===i.RGBA){const xe=ie?LinearTransfer:ColorManagement.getTransfer(J);X===i.FLOAT&&(oe=i.RGBA32F),X===i.HALF_FLOAT&&(oe=i.RGBA16F),X===i.UNSIGNED_BYTE&&(oe=xe===SRGBTransfer?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT_4_4_4_4&&(oe=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(oe=i.RGB5_A1)}return(oe===i.R16F||oe===i.R32F||oe===i.RG16F||oe===i.RG32F||oe===i.RGBA16F||oe===i.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function x(S,D){let X;return S?D===null||D===UnsignedIntType||D===UnsignedInt248Type?X=i.DEPTH24_STENCIL8:D===FloatType?X=i.DEPTH32F_STENCIL8:D===UnsignedShortType&&(X=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):D===null||D===UnsignedIntType||D===UnsignedInt248Type?X=i.DEPTH_COMPONENT24:D===FloatType?X=i.DEPTH_COMPONENT32F:D===UnsignedShortType&&(X=i.DEPTH_COMPONENT16),X}function y(S,D){return g(S)===!0||S.isFramebufferTexture&&S.minFilter!==NearestFilter&&S.minFilter!==LinearFilter?Math.log2(Math.max(D.width,D.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?D.mipmaps.length:1}function R(S){const D=S.target;D.removeEventListener("dispose",R),G(D),D.isVideoTexture&&u.delete(D)}function L(S){const D=S.target;D.removeEventListener("dispose",L),E(D)}function G(S){const D=n.get(S);if(D.__webglInit===void 0)return;const X=S.source,J=d.get(X);if(J){const ie=J[D.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&M(S),Object.keys(J).length===0&&d.delete(X)}n.remove(S)}function M(S){const D=n.get(S);i.deleteTexture(D.__webglTexture);const X=S.source,J=d.get(X);delete J[D.__cacheKey],a.memory.textures--}function E(S){const D=n.get(S);if(S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(D.__webglFramebuffer[J]))for(let ie=0;ie<D.__webglFramebuffer[J].length;ie++)i.deleteFramebuffer(D.__webglFramebuffer[J][ie]);else i.deleteFramebuffer(D.__webglFramebuffer[J]);D.__webglDepthbuffer&&i.deleteRenderbuffer(D.__webglDepthbuffer[J])}else{if(Array.isArray(D.__webglFramebuffer))for(let J=0;J<D.__webglFramebuffer.length;J++)i.deleteFramebuffer(D.__webglFramebuffer[J]);else i.deleteFramebuffer(D.__webglFramebuffer);if(D.__webglDepthbuffer&&i.deleteRenderbuffer(D.__webglDepthbuffer),D.__webglMultisampledFramebuffer&&i.deleteFramebuffer(D.__webglMultisampledFramebuffer),D.__webglColorRenderbuffer)for(let J=0;J<D.__webglColorRenderbuffer.length;J++)D.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(D.__webglColorRenderbuffer[J]);D.__webglDepthRenderbuffer&&i.deleteRenderbuffer(D.__webglDepthRenderbuffer)}const X=S.textures;for(let J=0,ie=X.length;J<ie;J++){const oe=n.get(X[J]);oe.__webglTexture&&(i.deleteTexture(oe.__webglTexture),a.memory.textures--),n.remove(X[J])}n.remove(S)}let b=0;function I(){b=0}function H(){const S=b;return S>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+r.maxTextures),b+=1,S}function q(S){const D=[];return D.push(S.wrapS),D.push(S.wrapT),D.push(S.wrapR||0),D.push(S.magFilter),D.push(S.minFilter),D.push(S.anisotropy),D.push(S.internalFormat),D.push(S.format),D.push(S.type),D.push(S.generateMipmaps),D.push(S.premultiplyAlpha),D.push(S.flipY),D.push(S.unpackAlignment),D.push(S.colorSpace),D.join()}function ee(S,D){const X=n.get(S);if(S.isVideoTexture&&Ce(S),S.isRenderTargetTexture===!1&&S.version>0&&X.__version!==S.version){const J=S.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{me(X,S,D);return}}t.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+D)}function de(S,D){const X=n.get(S);if(S.version>0&&X.__version!==S.version){me(X,S,D);return}t.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+D)}function fe(S,D){const X=n.get(S);if(S.version>0&&X.__version!==S.version){me(X,S,D);return}t.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+D)}function pe(S,D){const X=n.get(S);if(S.version>0&&X.__version!==S.version){le(X,S,D);return}t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+D)}const $={[RepeatWrapping]:i.REPEAT,[ClampToEdgeWrapping]:i.CLAMP_TO_EDGE,[MirroredRepeatWrapping]:i.MIRRORED_REPEAT},O={[NearestFilter]:i.NEAREST,[NearestMipmapNearestFilter]:i.NEAREST_MIPMAP_NEAREST,[NearestMipmapLinearFilter]:i.NEAREST_MIPMAP_LINEAR,[LinearFilter]:i.LINEAR,[LinearMipmapNearestFilter]:i.LINEAR_MIPMAP_NEAREST,[LinearMipmapLinearFilter]:i.LINEAR_MIPMAP_LINEAR},Y={[NeverCompare]:i.NEVER,[AlwaysCompare]:i.ALWAYS,[LessCompare]:i.LESS,[LessEqualCompare]:i.LEQUAL,[EqualCompare]:i.EQUAL,[GreaterEqualCompare]:i.GEQUAL,[GreaterCompare]:i.GREATER,[NotEqualCompare]:i.NOTEQUAL};function ae(S,D){if(D.type===FloatType&&e.has("OES_texture_float_linear")===!1&&(D.magFilter===LinearFilter||D.magFilter===LinearMipmapNearestFilter||D.magFilter===NearestMipmapLinearFilter||D.magFilter===LinearMipmapLinearFilter||D.minFilter===LinearFilter||D.minFilter===LinearMipmapNearestFilter||D.minFilter===NearestMipmapLinearFilter||D.minFilter===LinearMipmapLinearFilter)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(S,i.TEXTURE_WRAP_S,$[D.wrapS]),i.texParameteri(S,i.TEXTURE_WRAP_T,$[D.wrapT]),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,$[D.wrapR]),i.texParameteri(S,i.TEXTURE_MAG_FILTER,O[D.magFilter]),i.texParameteri(S,i.TEXTURE_MIN_FILTER,O[D.minFilter]),D.compareFunction&&(i.texParameteri(S,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(S,i.TEXTURE_COMPARE_FUNC,Y[D.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(D.magFilter===NearestFilter||D.minFilter!==NearestMipmapLinearFilter&&D.minFilter!==LinearMipmapLinearFilter||D.type===FloatType&&e.has("OES_texture_float_linear")===!1)return;if(D.anisotropy>1||n.get(D).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");i.texParameterf(S,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(D.anisotropy,r.getMaxAnisotropy())),n.get(D).__currentAnisotropy=D.anisotropy}}}function ue(S,D){let X=!1;S.__webglInit===void 0&&(S.__webglInit=!0,D.addEventListener("dispose",R));const J=D.source;let ie=d.get(J);ie===void 0&&(ie={},d.set(J,ie));const oe=q(D);if(oe!==S.__cacheKey){ie[oe]===void 0&&(ie[oe]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,X=!0),ie[oe].usedTimes++;const xe=ie[S.__cacheKey];xe!==void 0&&(ie[S.__cacheKey].usedTimes--,xe.usedTimes===0&&M(D)),S.__cacheKey=oe,S.__webglTexture=ie[oe].texture}return X}function me(S,D,X){let J=i.TEXTURE_2D;(D.isDataArrayTexture||D.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),D.isData3DTexture&&(J=i.TEXTURE_3D);const ie=ue(S,D),oe=D.source;t.bindTexture(J,S.__webglTexture,i.TEXTURE0+X);const xe=n.get(oe);if(oe.version!==xe.__version||ie===!0){t.activeTexture(i.TEXTURE0+X);const ve=ColorManagement.getPrimaries(ColorManagement.workingColorSpace),ge=D.colorSpace===NoColorSpace?null:ColorManagement.getPrimaries(D.colorSpace),Pe=D.colorSpace===NoColorSpace||ve===ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,D.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,D.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let _e=v(D.image,!1,r.maxTextureSize);_e=Se(D,_e);const Ee=s.convert(D.format,D.colorSpace),Ue=s.convert(D.type);let Ie=F(D.internalFormat,Ee,Ue,D.colorSpace,D.isVideoTexture);ae(J,D);let De;const we=D.mipmaps,Be=D.isVideoTexture!==!0,He=xe.__version===void 0||ie===!0,ce=oe.dataReady,Fe=y(D,_e);if(D.isDepthTexture)Ie=x(D.format===DepthStencilFormat,D.type),He&&(Be?t.texStorage2D(i.TEXTURE_2D,1,Ie,_e.width,_e.height):t.texImage2D(i.TEXTURE_2D,0,Ie,_e.width,_e.height,0,Ee,Ue,null));else if(D.isDataTexture)if(we.length>0){Be&&He&&t.texStorage2D(i.TEXTURE_2D,Fe,Ie,we[0].width,we[0].height);for(let Te=0,be=we.length;Te<be;Te++)De=we[Te],Be?ce&&t.texSubImage2D(i.TEXTURE_2D,Te,0,0,De.width,De.height,Ee,Ue,De.data):t.texImage2D(i.TEXTURE_2D,Te,Ie,De.width,De.height,0,Ee,Ue,De.data);D.generateMipmaps=!1}else Be?(He&&t.texStorage2D(i.TEXTURE_2D,Fe,Ie,_e.width,_e.height),ce&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,_e.width,_e.height,Ee,Ue,_e.data)):t.texImage2D(i.TEXTURE_2D,0,Ie,_e.width,_e.height,0,Ee,Ue,_e.data);else if(D.isCompressedTexture)if(D.isCompressedArrayTexture){Be&&He&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Fe,Ie,we[0].width,we[0].height,_e.depth);for(let Te=0,be=we.length;Te<be;Te++)if(De=we[Te],D.format!==RGBAFormat)if(Ee!==null)if(Be){if(ce)if(D.layerUpdates.size>0){const Ne=getByteLength(De.width,De.height,D.format,D.type);for(const ke of D.layerUpdates){const We=De.data.subarray(ke*Ne/De.data.BYTES_PER_ELEMENT,(ke+1)*Ne/De.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Te,0,0,ke,De.width,De.height,1,Ee,We,0,0)}D.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Te,0,0,0,De.width,De.height,_e.depth,Ee,De.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Te,Ie,De.width,De.height,_e.depth,0,De.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?ce&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Te,0,0,0,De.width,De.height,_e.depth,Ee,Ue,De.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Te,Ie,De.width,De.height,_e.depth,0,Ee,Ue,De.data)}else{Be&&He&&t.texStorage2D(i.TEXTURE_2D,Fe,Ie,we[0].width,we[0].height);for(let Te=0,be=we.length;Te<be;Te++)De=we[Te],D.format!==RGBAFormat?Ee!==null?Be?ce&&t.compressedTexSubImage2D(i.TEXTURE_2D,Te,0,0,De.width,De.height,Ee,De.data):t.compressedTexImage2D(i.TEXTURE_2D,Te,Ie,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?ce&&t.texSubImage2D(i.TEXTURE_2D,Te,0,0,De.width,De.height,Ee,Ue,De.data):t.texImage2D(i.TEXTURE_2D,Te,Ie,De.width,De.height,0,Ee,Ue,De.data)}else if(D.isDataArrayTexture)if(Be){if(He&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Fe,Ie,_e.width,_e.height,_e.depth),ce)if(D.layerUpdates.size>0){const Te=getByteLength(_e.width,_e.height,D.format,D.type);for(const be of D.layerUpdates){const Ne=_e.data.subarray(be*Te/_e.data.BYTES_PER_ELEMENT,(be+1)*Te/_e.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,be,_e.width,_e.height,1,Ee,Ue,Ne)}D.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Ee,Ue,_e.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ie,_e.width,_e.height,_e.depth,0,Ee,Ue,_e.data);else if(D.isData3DTexture)Be?(He&&t.texStorage3D(i.TEXTURE_3D,Fe,Ie,_e.width,_e.height,_e.depth),ce&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Ee,Ue,_e.data)):t.texImage3D(i.TEXTURE_3D,0,Ie,_e.width,_e.height,_e.depth,0,Ee,Ue,_e.data);else if(D.isFramebufferTexture){if(He)if(Be)t.texStorage2D(i.TEXTURE_2D,Fe,Ie,_e.width,_e.height);else{let Te=_e.width,be=_e.height;for(let Ne=0;Ne<Fe;Ne++)t.texImage2D(i.TEXTURE_2D,Ne,Ie,Te,be,0,Ee,Ue,null),Te>>=1,be>>=1}}else if(we.length>0){if(Be&&He){const Te=p(we[0]);t.texStorage2D(i.TEXTURE_2D,Fe,Ie,Te.width,Te.height)}for(let Te=0,be=we.length;Te<be;Te++)De=we[Te],Be?ce&&t.texSubImage2D(i.TEXTURE_2D,Te,0,0,Ee,Ue,De):t.texImage2D(i.TEXTURE_2D,Te,Ie,Ee,Ue,De);D.generateMipmaps=!1}else if(Be){if(He){const Te=p(_e);t.texStorage2D(i.TEXTURE_2D,Fe,Ie,Te.width,Te.height)}ce&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ee,Ue,_e)}else t.texImage2D(i.TEXTURE_2D,0,Ie,Ee,Ue,_e);g(D)&&_(J),xe.__version=oe.version,D.onUpdate&&D.onUpdate(D)}S.__version=D.version}function le(S,D,X){if(D.image.length!==6)return;const J=ue(S,D),ie=D.source;t.bindTexture(i.TEXTURE_CUBE_MAP,S.__webglTexture,i.TEXTURE0+X);const oe=n.get(ie);if(ie.version!==oe.__version||J===!0){t.activeTexture(i.TEXTURE0+X);const xe=ColorManagement.getPrimaries(ColorManagement.workingColorSpace),ve=D.colorSpace===NoColorSpace?null:ColorManagement.getPrimaries(D.colorSpace),ge=D.colorSpace===NoColorSpace||xe===ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,D.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,D.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Pe=D.isCompressedTexture||D.image[0].isCompressedTexture,_e=D.image[0]&&D.image[0].isDataTexture,Ee=[];for(let be=0;be<6;be++)!Pe&&!_e?Ee[be]=v(D.image[be],!0,r.maxCubemapSize):Ee[be]=_e?D.image[be].image:D.image[be],Ee[be]=Se(D,Ee[be]);const Ue=Ee[0],Ie=s.convert(D.format,D.colorSpace),De=s.convert(D.type),we=F(D.internalFormat,Ie,De,D.colorSpace),Be=D.isVideoTexture!==!0,He=oe.__version===void 0||J===!0,ce=ie.dataReady;let Fe=y(D,Ue);ae(i.TEXTURE_CUBE_MAP,D);let Te;if(Pe){Be&&He&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Fe,we,Ue.width,Ue.height);for(let be=0;be<6;be++){Te=Ee[be].mipmaps;for(let Ne=0;Ne<Te.length;Ne++){const ke=Te[Ne];D.format!==RGBAFormat?Ie!==null?Be?ce&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ne,0,0,ke.width,ke.height,Ie,ke.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ne,we,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ne,0,0,ke.width,ke.height,Ie,De,ke.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ne,we,ke.width,ke.height,0,Ie,De,ke.data)}}}else{if(Te=D.mipmaps,Be&&He){Te.length>0&&Fe++;const be=p(Ee[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Fe,we,be.width,be.height)}for(let be=0;be<6;be++)if(_e){Be?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,Ee[be].width,Ee[be].height,Ie,De,Ee[be].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,we,Ee[be].width,Ee[be].height,0,Ie,De,Ee[be].data);for(let Ne=0;Ne<Te.length;Ne++){const We=Te[Ne].image[be].image;Be?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ne+1,0,0,We.width,We.height,Ie,De,We.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ne+1,we,We.width,We.height,0,Ie,De,We.data)}}else{Be?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,Ie,De,Ee[be]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,we,Ie,De,Ee[be]);for(let Ne=0;Ne<Te.length;Ne++){const ke=Te[Ne];Be?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ne+1,0,0,Ie,De,ke.image[be]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ne+1,we,Ie,De,ke.image[be])}}}g(D)&&_(i.TEXTURE_CUBE_MAP),oe.__version=ie.version,D.onUpdate&&D.onUpdate(D)}S.__version=D.version}function N(S,D,X,J,ie,oe){const xe=s.convert(X.format,X.colorSpace),ve=s.convert(X.type),ge=F(X.internalFormat,xe,ve,X.colorSpace);if(!n.get(D).__hasExternalTextures){const _e=Math.max(1,D.width>>oe),Ee=Math.max(1,D.height>>oe);ie===i.TEXTURE_3D||ie===i.TEXTURE_2D_ARRAY?t.texImage3D(ie,oe,ge,_e,Ee,D.depth,0,xe,ve,null):t.texImage2D(ie,oe,ge,_e,Ee,0,xe,ve,null)}t.bindFramebuffer(i.FRAMEBUFFER,S),se(D)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,ie,n.get(X).__webglTexture,0,re(D)):(ie===i.TEXTURE_2D||ie>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,ie,n.get(X).__webglTexture,oe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function w(S,D,X){if(i.bindRenderbuffer(i.RENDERBUFFER,S),D.depthBuffer){const J=D.depthTexture,ie=J&&J.isDepthTexture?J.type:null,oe=x(D.stencilBuffer,ie),xe=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=re(D);se(D)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ve,oe,D.width,D.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,ve,oe,D.width,D.height):i.renderbufferStorage(i.RENDERBUFFER,oe,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,xe,i.RENDERBUFFER,S)}else{const J=D.textures;for(let ie=0;ie<J.length;ie++){const oe=J[ie],xe=s.convert(oe.format,oe.colorSpace),ve=s.convert(oe.type),ge=F(oe.internalFormat,xe,ve,oe.colorSpace),Pe=re(D);X&&se(D)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Pe,ge,D.width,D.height):se(D)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Pe,ge,D.width,D.height):i.renderbufferStorage(i.RENDERBUFFER,ge,D.width,D.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function z(S,D){if(D&&D.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,S),!(D.depthTexture&&D.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(D.depthTexture).__webglTexture||D.depthTexture.image.width!==D.width||D.depthTexture.image.height!==D.height)&&(D.depthTexture.image.width=D.width,D.depthTexture.image.height=D.height,D.depthTexture.needsUpdate=!0),ee(D.depthTexture,0);const J=n.get(D.depthTexture).__webglTexture,ie=re(D);if(D.depthTexture.format===DepthFormat)se(D)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(D.depthTexture.format===DepthStencilFormat)se(D)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function te(S){const D=n.get(S),X=S.isWebGLCubeRenderTarget===!0;if(D.__boundDepthTexture!==S.depthTexture){const J=S.depthTexture;if(D.__depthDisposeCallback&&D.__depthDisposeCallback(),J){const ie=()=>{delete D.__boundDepthTexture,delete D.__depthDisposeCallback,J.removeEventListener("dispose",ie)};J.addEventListener("dispose",ie),D.__depthDisposeCallback=ie}D.__boundDepthTexture=J}if(S.depthTexture&&!D.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");z(D.__webglFramebuffer,S)}else if(X){D.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(i.FRAMEBUFFER,D.__webglFramebuffer[J]),D.__webglDepthbuffer[J]===void 0)D.__webglDepthbuffer[J]=i.createRenderbuffer(),w(D.__webglDepthbuffer[J],S,!1);else{const ie=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=D.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,oe),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,oe)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,D.__webglFramebuffer),D.__webglDepthbuffer===void 0)D.__webglDepthbuffer=i.createRenderbuffer(),w(D.__webglDepthbuffer,S,!1);else{const J=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=D.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,ie)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Z(S,D,X){const J=n.get(S);D!==void 0&&N(J.__webglFramebuffer,S,S.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&te(S)}function ne(S){const D=S.texture,X=n.get(S),J=n.get(D);S.addEventListener("dispose",L);const ie=S.textures,oe=S.isWebGLCubeRenderTarget===!0,xe=ie.length>1;if(xe||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=D.version,a.memory.textures++),oe){X.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(D.mipmaps&&D.mipmaps.length>0){X.__webglFramebuffer[ve]=[];for(let ge=0;ge<D.mipmaps.length;ge++)X.__webglFramebuffer[ve][ge]=i.createFramebuffer()}else X.__webglFramebuffer[ve]=i.createFramebuffer()}else{if(D.mipmaps&&D.mipmaps.length>0){X.__webglFramebuffer=[];for(let ve=0;ve<D.mipmaps.length;ve++)X.__webglFramebuffer[ve]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(xe)for(let ve=0,ge=ie.length;ve<ge;ve++){const Pe=n.get(ie[ve]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=i.createTexture(),a.memory.textures++)}if(S.samples>0&&se(S)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let ve=0;ve<ie.length;ve++){const ge=ie[ve];X.__webglColorRenderbuffer[ve]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[ve]);const Pe=s.convert(ge.format,ge.colorSpace),_e=s.convert(ge.type),Ee=F(ge.internalFormat,Pe,_e,ge.colorSpace,S.isXRRenderTarget===!0),Ue=re(S);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ue,Ee,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,X.__webglColorRenderbuffer[ve])}i.bindRenderbuffer(i.RENDERBUFFER,null),S.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),w(X.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(oe){t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),ae(i.TEXTURE_CUBE_MAP,D);for(let ve=0;ve<6;ve++)if(D.mipmaps&&D.mipmaps.length>0)for(let ge=0;ge<D.mipmaps.length;ge++)N(X.__webglFramebuffer[ve][ge],S,D,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,ge);else N(X.__webglFramebuffer[ve],S,D,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);g(D)&&_(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let ve=0,ge=ie.length;ve<ge;ve++){const Pe=ie[ve],_e=n.get(Pe);t.bindTexture(i.TEXTURE_2D,_e.__webglTexture),ae(i.TEXTURE_2D,Pe),N(X.__webglFramebuffer,S,Pe,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,0),g(Pe)&&_(i.TEXTURE_2D)}t.unbindTexture()}else{let ve=i.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(ve=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ve,J.__webglTexture),ae(ve,D),D.mipmaps&&D.mipmaps.length>0)for(let ge=0;ge<D.mipmaps.length;ge++)N(X.__webglFramebuffer[ge],S,D,i.COLOR_ATTACHMENT0,ve,ge);else N(X.__webglFramebuffer,S,D,i.COLOR_ATTACHMENT0,ve,0);g(D)&&_(ve),t.unbindTexture()}S.depthBuffer&&te(S)}function he(S){const D=S.textures;for(let X=0,J=D.length;X<J;X++){const ie=D[X];if(g(ie)){const oe=S.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,xe=n.get(ie).__webglTexture;t.bindTexture(oe,xe),_(oe),t.unbindTexture()}}}const j=[],Le=[];function K(S){if(S.samples>0){if(se(S)===!1){const D=S.textures,X=S.width,J=S.height;let ie=i.COLOR_BUFFER_BIT;const oe=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=n.get(S),ve=D.length>1;if(ve)for(let ge=0;ge<D.length;ge++)t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let ge=0;ge<D.length;ge++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(ie|=i.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(ie|=i.STENCIL_BUFFER_BIT)),ve){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xe.__webglColorRenderbuffer[ge]);const Pe=n.get(D[ge]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Pe,0)}i.blitFramebuffer(0,0,X,J,0,0,X,J,ie,i.NEAREST),c===!0&&(j.length=0,Le.length=0,j.push(i.COLOR_ATTACHMENT0+ge),S.depthBuffer&&S.resolveDepthBuffer===!1&&(j.push(oe),Le.push(oe),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Le)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,j))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ve)for(let ge=0;ge<D.length;ge++){t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,xe.__webglColorRenderbuffer[ge]);const Pe=n.get(D[ge]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,Pe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&c){const D=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[D])}}}function re(S){return Math.min(r.maxSamples,S.samples)}function se(S){const D=n.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&D.__useRenderToTexture!==!1}function Ce(S){const D=a.render.frame;u.get(S)!==D&&(u.set(S,D),S.update())}function Se(S,D){const X=S.colorSpace,J=S.format,ie=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||X!==LinearSRGBColorSpace&&X!==NoColorSpace&&(ColorManagement.getTransfer(X)===SRGBTransfer?(J!==RGBAFormat||ie!==UnsignedByteType)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),D}function p(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(l.width=S.naturalWidth||S.width,l.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(l.width=S.displayWidth,l.height=S.displayHeight):(l.width=S.width,l.height=S.height),l}this.allocateTextureUnit=H,this.resetTextureUnits=I,this.setTexture2D=ee,this.setTexture2DArray=de,this.setTexture3D=fe,this.setTextureCube=pe,this.rebindTextures=Z,this.setupRenderTarget=ne,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=K,this.setupDepthRenderbuffer=te,this.setupFrameBufferTexture=N,this.useMultisampledRTT=se}function WebGLUtils(i,e){function t(n,r=NoColorSpace){let s;const a=ColorManagement.getTransfer(r);if(n===UnsignedByteType)return i.UNSIGNED_BYTE;if(n===UnsignedShort4444Type)return i.UNSIGNED_SHORT_4_4_4_4;if(n===UnsignedShort5551Type)return i.UNSIGNED_SHORT_5_5_5_1;if(n===UnsignedInt5999Type)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ByteType)return i.BYTE;if(n===ShortType)return i.SHORT;if(n===UnsignedShortType)return i.UNSIGNED_SHORT;if(n===IntType)return i.INT;if(n===UnsignedIntType)return i.UNSIGNED_INT;if(n===FloatType)return i.FLOAT;if(n===HalfFloatType)return i.HALF_FLOAT;if(n===AlphaFormat)return i.ALPHA;if(n===RGBFormat)return i.RGB;if(n===RGBAFormat)return i.RGBA;if(n===LuminanceFormat)return i.LUMINANCE;if(n===LuminanceAlphaFormat)return i.LUMINANCE_ALPHA;if(n===DepthFormat)return i.DEPTH_COMPONENT;if(n===DepthStencilFormat)return i.DEPTH_STENCIL;if(n===RedFormat)return i.RED;if(n===RedIntegerFormat)return i.RED_INTEGER;if(n===RGFormat)return i.RG;if(n===RGIntegerFormat)return i.RG_INTEGER;if(n===RGBAIntegerFormat)return i.RGBA_INTEGER;if(n===RGB_S3TC_DXT1_Format||n===RGBA_S3TC_DXT1_Format||n===RGBA_S3TC_DXT3_Format||n===RGBA_S3TC_DXT5_Format)if(a===SRGBTransfer)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===RGB_S3TC_DXT1_Format)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===RGBA_S3TC_DXT1_Format)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===RGBA_S3TC_DXT3_Format)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===RGBA_S3TC_DXT5_Format)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===RGB_S3TC_DXT1_Format)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===RGBA_S3TC_DXT1_Format)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===RGBA_S3TC_DXT3_Format)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===RGBA_S3TC_DXT5_Format)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===RGB_PVRTC_4BPPV1_Format||n===RGB_PVRTC_2BPPV1_Format||n===RGBA_PVRTC_4BPPV1_Format||n===RGBA_PVRTC_2BPPV1_Format)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===RGB_PVRTC_4BPPV1_Format)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===RGB_PVRTC_2BPPV1_Format)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===RGBA_PVRTC_4BPPV1_Format)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===RGBA_PVRTC_2BPPV1_Format)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===RGB_ETC1_Format||n===RGB_ETC2_Format||n===RGBA_ETC2_EAC_Format)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===RGB_ETC1_Format||n===RGB_ETC2_Format)return a===SRGBTransfer?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===RGBA_ETC2_EAC_Format)return a===SRGBTransfer?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===RGBA_ASTC_4x4_Format||n===RGBA_ASTC_5x4_Format||n===RGBA_ASTC_5x5_Format||n===RGBA_ASTC_6x5_Format||n===RGBA_ASTC_6x6_Format||n===RGBA_ASTC_8x5_Format||n===RGBA_ASTC_8x6_Format||n===RGBA_ASTC_8x8_Format||n===RGBA_ASTC_10x5_Format||n===RGBA_ASTC_10x6_Format||n===RGBA_ASTC_10x8_Format||n===RGBA_ASTC_10x10_Format||n===RGBA_ASTC_12x10_Format||n===RGBA_ASTC_12x12_Format)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===RGBA_ASTC_4x4_Format)return a===SRGBTransfer?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===RGBA_ASTC_5x4_Format)return a===SRGBTransfer?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===RGBA_ASTC_5x5_Format)return a===SRGBTransfer?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===RGBA_ASTC_6x5_Format)return a===SRGBTransfer?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===RGBA_ASTC_6x6_Format)return a===SRGBTransfer?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===RGBA_ASTC_8x5_Format)return a===SRGBTransfer?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===RGBA_ASTC_8x6_Format)return a===SRGBTransfer?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===RGBA_ASTC_8x8_Format)return a===SRGBTransfer?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===RGBA_ASTC_10x5_Format)return a===SRGBTransfer?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===RGBA_ASTC_10x6_Format)return a===SRGBTransfer?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===RGBA_ASTC_10x8_Format)return a===SRGBTransfer?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===RGBA_ASTC_10x10_Format)return a===SRGBTransfer?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===RGBA_ASTC_12x10_Format)return a===SRGBTransfer?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===RGBA_ASTC_12x12_Format)return a===SRGBTransfer?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===RGBA_BPTC_Format||n===RGB_BPTC_SIGNED_Format||n===RGB_BPTC_UNSIGNED_Format)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===RGBA_BPTC_Format)return a===SRGBTransfer?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===RGB_BPTC_SIGNED_Format)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===RGB_BPTC_UNSIGNED_Format)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===RED_RGTC1_Format||n===SIGNED_RED_RGTC1_Format||n===RED_GREEN_RGTC2_Format||n===SIGNED_RED_GREEN_RGTC2_Format)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===RGBA_BPTC_Format)return s.COMPRESSED_RED_RGTC1_EXT;if(n===SIGNED_RED_RGTC1_Format)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===RED_GREEN_RGTC2_Format)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===SIGNED_RED_GREEN_RGTC2_Format)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===UnsignedInt248Type?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class ArrayCamera extends PerspectiveCamera{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Group extends Object3D{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _moveEvent={type:"move"};class WebXRController{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Group,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Group,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Vector3,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Vector3),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Group,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Vector3,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Vector3),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const v of e.hand.values()){const g=t.getJointPose(v,n),_=this._getHandJoint(l,v);g!==null&&(_.matrix.fromArray(g.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=g.radius),_.visible=g!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(_moveEvent)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Group;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const _occlusion_vertex=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_occlusion_fragment=`
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

}`;class WebXRDepthSensing{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new Texture,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ShaderMaterial({vertexShader:_occlusion_vertex,fragmentShader:_occlusion_fragment,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Mesh(new PlaneGeometry(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class WebXRManager extends EventDispatcher{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,m=null;const v=new WebXRDepthSensing,g=t.getContextAttributes();let _=null,F=null;const x=[],y=[],R=new Vector2;let L=null;const G=new PerspectiveCamera;G.layers.enable(1),G.viewport=new Vector4;const M=new PerspectiveCamera;M.layers.enable(2),M.viewport=new Vector4;const E=[G,M],b=new ArrayCamera;b.layers.enable(1),b.layers.enable(2);let I=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(le){let N=x[le];return N===void 0&&(N=new WebXRController,x[le]=N),N.getTargetRaySpace()},this.getControllerGrip=function(le){let N=x[le];return N===void 0&&(N=new WebXRController,x[le]=N),N.getGripSpace()},this.getHand=function(le){let N=x[le];return N===void 0&&(N=new WebXRController,x[le]=N),N.getHandSpace()};function q(le){const N=y.indexOf(le.inputSource);if(N===-1)return;const w=x[N];w!==void 0&&(w.update(le.inputSource,le.frame,l||a),w.dispatchEvent({type:le.type,data:le.inputSource}))}function ee(){r.removeEventListener("select",q),r.removeEventListener("selectstart",q),r.removeEventListener("selectend",q),r.removeEventListener("squeeze",q),r.removeEventListener("squeezestart",q),r.removeEventListener("squeezeend",q),r.removeEventListener("end",ee),r.removeEventListener("inputsourceschange",de);for(let le=0;le<x.length;le++){const N=y[le];N!==null&&(y[le]=null,x[le].disconnect(N))}I=null,H=null,v.reset(),e.setRenderTarget(_),f=null,d=null,h=null,r=null,F=null,me.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(le){s=le,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(le){o=le,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(le){l=le},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(le){if(r=le,r!==null){if(_=e.getRenderTarget(),r.addEventListener("select",q),r.addEventListener("selectstart",q),r.addEventListener("selectend",q),r.addEventListener("squeeze",q),r.addEventListener("squeezestart",q),r.addEventListener("squeezeend",q),r.addEventListener("end",ee),r.addEventListener("inputsourceschange",de),g.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(R),r.renderState.layers===void 0){const N={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,N),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),F=new WebGLRenderTarget(f.framebufferWidth,f.framebufferHeight,{format:RGBAFormat,type:UnsignedByteType,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let N=null,w=null,z=null;g.depth&&(z=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,N=g.stencil?DepthStencilFormat:DepthFormat,w=g.stencil?UnsignedInt248Type:UnsignedIntType);const te={colorFormat:t.RGBA8,depthFormat:z,scaleFactor:s};h=new XRWebGLBinding(r,t),d=h.createProjectionLayer(te),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),F=new WebGLRenderTarget(d.textureWidth,d.textureHeight,{format:RGBAFormat,type:UnsignedByteType,depthTexture:new DepthTexture(d.textureWidth,d.textureHeight,w,void 0,void 0,void 0,void 0,void 0,void 0,N),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}F.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),me.setContext(r),me.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function de(le){for(let N=0;N<le.removed.length;N++){const w=le.removed[N],z=y.indexOf(w);z>=0&&(y[z]=null,x[z].disconnect(w))}for(let N=0;N<le.added.length;N++){const w=le.added[N];let z=y.indexOf(w);if(z===-1){for(let Z=0;Z<x.length;Z++)if(Z>=y.length){y.push(w),z=Z;break}else if(y[Z]===null){y[Z]=w,z=Z;break}if(z===-1)break}const te=x[z];te&&te.connect(w)}}const fe=new Vector3,pe=new Vector3;function $(le,N,w){fe.setFromMatrixPosition(N.matrixWorld),pe.setFromMatrixPosition(w.matrixWorld);const z=fe.distanceTo(pe),te=N.projectionMatrix.elements,Z=w.projectionMatrix.elements,ne=te[14]/(te[10]-1),he=te[14]/(te[10]+1),j=(te[9]+1)/te[5],Le=(te[9]-1)/te[5],K=(te[8]-1)/te[0],re=(Z[8]+1)/Z[0],se=ne*K,Ce=ne*re,Se=z/(-K+re),p=Se*-K;if(N.matrixWorld.decompose(le.position,le.quaternion,le.scale),le.translateX(p),le.translateZ(Se),le.matrixWorld.compose(le.position,le.quaternion,le.scale),le.matrixWorldInverse.copy(le.matrixWorld).invert(),te[10]===-1)le.projectionMatrix.copy(N.projectionMatrix),le.projectionMatrixInverse.copy(N.projectionMatrixInverse);else{const S=ne+Se,D=he+Se,X=se-p,J=Ce+(z-p),ie=j*he/D*S,oe=Le*he/D*S;le.projectionMatrix.makePerspective(X,J,ie,oe,S,D),le.projectionMatrixInverse.copy(le.projectionMatrix).invert()}}function O(le,N){N===null?le.matrixWorld.copy(le.matrix):le.matrixWorld.multiplyMatrices(N.matrixWorld,le.matrix),le.matrixWorldInverse.copy(le.matrixWorld).invert()}this.updateCamera=function(le){if(r===null)return;let N=le.near,w=le.far;v.texture!==null&&(v.depthNear>0&&(N=v.depthNear),v.depthFar>0&&(w=v.depthFar)),b.near=M.near=G.near=N,b.far=M.far=G.far=w,(I!==b.near||H!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),I=b.near,H=b.far);const z=le.parent,te=b.cameras;O(b,z);for(let Z=0;Z<te.length;Z++)O(te[Z],z);te.length===2?$(b,G,M):b.projectionMatrix.copy(G.projectionMatrix),Y(le,b,z)};function Y(le,N,w){w===null?le.matrix.copy(N.matrixWorld):(le.matrix.copy(w.matrixWorld),le.matrix.invert(),le.matrix.multiply(N.matrixWorld)),le.matrix.decompose(le.position,le.quaternion,le.scale),le.updateMatrixWorld(!0),le.projectionMatrix.copy(N.projectionMatrix),le.projectionMatrixInverse.copy(N.projectionMatrixInverse),le.isPerspectiveCamera&&(le.fov=RAD2DEG*2*Math.atan(1/le.projectionMatrix.elements[5]),le.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(le){c=le,d!==null&&(d.fixedFoveation=le),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=le)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(b)};let ae=null;function ue(le,N){if(u=N.getViewerPose(l||a),m=N,u!==null){const w=u.views;f!==null&&(e.setRenderTargetFramebuffer(F,f.framebuffer),e.setRenderTarget(F));let z=!1;w.length!==b.cameras.length&&(b.cameras.length=0,z=!0);for(let Z=0;Z<w.length;Z++){const ne=w[Z];let he=null;if(f!==null)he=f.getViewport(ne);else{const Le=h.getViewSubImage(d,ne);he=Le.viewport,Z===0&&(e.setRenderTargetTextures(F,Le.colorTexture,d.ignoreDepthValues?void 0:Le.depthStencilTexture),e.setRenderTarget(F))}let j=E[Z];j===void 0&&(j=new PerspectiveCamera,j.layers.enable(Z),j.viewport=new Vector4,E[Z]=j),j.matrix.fromArray(ne.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(ne.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(he.x,he.y,he.width,he.height),Z===0&&(b.matrix.copy(j.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),z===!0&&b.cameras.push(j)}const te=r.enabledFeatures;if(te&&te.includes("depth-sensing")){const Z=h.getDepthInformation(w[0]);Z&&Z.isValid&&Z.texture&&v.init(e,Z,r.renderState)}}for(let w=0;w<x.length;w++){const z=y[w],te=x[w];z!==null&&te!==void 0&&te.update(z,N,l||a)}ae&&ae(le,N),N.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:N}),m=null}const me=new WebGLAnimation;me.setAnimationLoop(ue),this.setAnimationLoop=function(le){ae=le},this.dispose=function(){}}}const _e1=new Euler,_m1=new Matrix4;function WebGLMaterials(i,e){function t(g,_){g.matrixAutoUpdate===!0&&g.updateMatrix(),_.value.copy(g.matrix)}function n(g,_){_.color.getRGB(g.fogColor.value,getUnlitUniformColorSpace(i)),_.isFog?(g.fogNear.value=_.near,g.fogFar.value=_.far):_.isFogExp2&&(g.fogDensity.value=_.density)}function r(g,_,F,x,y){_.isMeshBasicMaterial||_.isMeshLambertMaterial?s(g,_):_.isMeshToonMaterial?(s(g,_),h(g,_)):_.isMeshPhongMaterial?(s(g,_),u(g,_)):_.isMeshStandardMaterial?(s(g,_),d(g,_),_.isMeshPhysicalMaterial&&f(g,_,y)):_.isMeshMatcapMaterial?(s(g,_),m(g,_)):_.isMeshDepthMaterial?s(g,_):_.isMeshDistanceMaterial?(s(g,_),v(g,_)):_.isMeshNormalMaterial?s(g,_):_.isLineBasicMaterial?(a(g,_),_.isLineDashedMaterial&&o(g,_)):_.isPointsMaterial?c(g,_,F,x):_.isSpriteMaterial?l(g,_):_.isShadowMaterial?(g.color.value.copy(_.color),g.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function s(g,_){g.opacity.value=_.opacity,_.color&&g.diffuse.value.copy(_.color),_.emissive&&g.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(g.map.value=_.map,t(_.map,g.mapTransform)),_.alphaMap&&(g.alphaMap.value=_.alphaMap,t(_.alphaMap,g.alphaMapTransform)),_.bumpMap&&(g.bumpMap.value=_.bumpMap,t(_.bumpMap,g.bumpMapTransform),g.bumpScale.value=_.bumpScale,_.side===BackSide&&(g.bumpScale.value*=-1)),_.normalMap&&(g.normalMap.value=_.normalMap,t(_.normalMap,g.normalMapTransform),g.normalScale.value.copy(_.normalScale),_.side===BackSide&&g.normalScale.value.negate()),_.displacementMap&&(g.displacementMap.value=_.displacementMap,t(_.displacementMap,g.displacementMapTransform),g.displacementScale.value=_.displacementScale,g.displacementBias.value=_.displacementBias),_.emissiveMap&&(g.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,g.emissiveMapTransform)),_.specularMap&&(g.specularMap.value=_.specularMap,t(_.specularMap,g.specularMapTransform)),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest);const F=e.get(_),x=F.envMap,y=F.envMapRotation;x&&(g.envMap.value=x,_e1.copy(y),_e1.x*=-1,_e1.y*=-1,_e1.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(_e1.y*=-1,_e1.z*=-1),g.envMapRotation.value.setFromMatrix4(_m1.makeRotationFromEuler(_e1)),g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=_.reflectivity,g.ior.value=_.ior,g.refractionRatio.value=_.refractionRatio),_.lightMap&&(g.lightMap.value=_.lightMap,g.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,g.lightMapTransform)),_.aoMap&&(g.aoMap.value=_.aoMap,g.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,g.aoMapTransform))}function a(g,_){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,_.map&&(g.map.value=_.map,t(_.map,g.mapTransform))}function o(g,_){g.dashSize.value=_.dashSize,g.totalSize.value=_.dashSize+_.gapSize,g.scale.value=_.scale}function c(g,_,F,x){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,g.size.value=_.size*F,g.scale.value=x*.5,_.map&&(g.map.value=_.map,t(_.map,g.uvTransform)),_.alphaMap&&(g.alphaMap.value=_.alphaMap,t(_.alphaMap,g.alphaMapTransform)),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest)}function l(g,_){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,g.rotation.value=_.rotation,_.map&&(g.map.value=_.map,t(_.map,g.mapTransform)),_.alphaMap&&(g.alphaMap.value=_.alphaMap,t(_.alphaMap,g.alphaMapTransform)),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest)}function u(g,_){g.specular.value.copy(_.specular),g.shininess.value=Math.max(_.shininess,1e-4)}function h(g,_){_.gradientMap&&(g.gradientMap.value=_.gradientMap)}function d(g,_){g.metalness.value=_.metalness,_.metalnessMap&&(g.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,g.metalnessMapTransform)),g.roughness.value=_.roughness,_.roughnessMap&&(g.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,g.roughnessMapTransform)),_.envMap&&(g.envMapIntensity.value=_.envMapIntensity)}function f(g,_,F){g.ior.value=_.ior,_.sheen>0&&(g.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),g.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(g.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,g.sheenColorMapTransform)),_.sheenRoughnessMap&&(g.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,g.sheenRoughnessMapTransform))),_.clearcoat>0&&(g.clearcoat.value=_.clearcoat,g.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(g.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,g.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(g.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===BackSide&&g.clearcoatNormalScale.value.negate())),_.dispersion>0&&(g.dispersion.value=_.dispersion),_.iridescence>0&&(g.iridescence.value=_.iridescence,g.iridescenceIOR.value=_.iridescenceIOR,g.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(g.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,g.iridescenceMapTransform)),_.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),_.transmission>0&&(g.transmission.value=_.transmission,g.transmissionSamplerMap.value=F.texture,g.transmissionSamplerSize.value.set(F.width,F.height),_.transmissionMap&&(g.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,g.transmissionMapTransform)),g.thickness.value=_.thickness,_.thicknessMap&&(g.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=_.attenuationDistance,g.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(g.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(g.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=_.specularIntensity,g.specularColor.value.copy(_.specularColor),_.specularColorMap&&(g.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,g.specularColorMapTransform)),_.specularIntensityMap&&(g.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,_){_.matcap&&(g.matcap.value=_.matcap)}function v(g,_){const F=e.get(_).light;g.referencePosition.value.setFromMatrixPosition(F.matrixWorld),g.nearDistance.value=F.shadow.camera.near,g.farDistance.value=F.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function WebGLUniformsGroups(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(F,x){const y=x.program;n.uniformBlockBinding(F,y)}function l(F,x){let y=r[F.id];y===void 0&&(m(F),y=u(F),r[F.id]=y,F.addEventListener("dispose",g));const R=x.program;n.updateUBOMapping(F,R);const L=e.render.frame;s[F.id]!==L&&(d(F),s[F.id]=L)}function u(F){const x=h();F.__bindingPointIndex=x;const y=i.createBuffer(),R=F.__size,L=F.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,R,L),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,y),y}function h(){for(let F=0;F<o;F++)if(a.indexOf(F)===-1)return a.push(F),F;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(F){const x=r[F.id],y=F.uniforms,R=F.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let L=0,G=y.length;L<G;L++){const M=Array.isArray(y[L])?y[L]:[y[L]];for(let E=0,b=M.length;E<b;E++){const I=M[E];if(f(I,L,E,R)===!0){const H=I.__offset,q=Array.isArray(I.value)?I.value:[I.value];let ee=0;for(let de=0;de<q.length;de++){const fe=q[de],pe=v(fe);typeof fe=="number"||typeof fe=="boolean"?(I.__data[0]=fe,i.bufferSubData(i.UNIFORM_BUFFER,H+ee,I.__data)):fe.isMatrix3?(I.__data[0]=fe.elements[0],I.__data[1]=fe.elements[1],I.__data[2]=fe.elements[2],I.__data[3]=0,I.__data[4]=fe.elements[3],I.__data[5]=fe.elements[4],I.__data[6]=fe.elements[5],I.__data[7]=0,I.__data[8]=fe.elements[6],I.__data[9]=fe.elements[7],I.__data[10]=fe.elements[8],I.__data[11]=0):(fe.toArray(I.__data,ee),ee+=pe.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(F,x,y,R){const L=F.value,G=x+"_"+y;if(R[G]===void 0)return typeof L=="number"||typeof L=="boolean"?R[G]=L:R[G]=L.clone(),!0;{const M=R[G];if(typeof L=="number"||typeof L=="boolean"){if(M!==L)return R[G]=L,!0}else if(M.equals(L)===!1)return M.copy(L),!0}return!1}function m(F){const x=F.uniforms;let y=0;const R=16;for(let G=0,M=x.length;G<M;G++){const E=Array.isArray(x[G])?x[G]:[x[G]];for(let b=0,I=E.length;b<I;b++){const H=E[b],q=Array.isArray(H.value)?H.value:[H.value];for(let ee=0,de=q.length;ee<de;ee++){const fe=q[ee],pe=v(fe),$=y%R,O=$%pe.boundary,Y=$+O;y+=O,Y!==0&&R-Y<pe.storage&&(y+=R-Y),H.__data=new Float32Array(pe.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=y,y+=pe.storage}}}const L=y%R;return L>0&&(y+=R-L),F.__size=y,F.__cache={},this}function v(F){const x={boundary:0,storage:0};return typeof F=="number"||typeof F=="boolean"?(x.boundary=4,x.storage=4):F.isVector2?(x.boundary=8,x.storage=8):F.isVector3||F.isColor?(x.boundary=16,x.storage=12):F.isVector4?(x.boundary=16,x.storage=16):F.isMatrix3?(x.boundary=48,x.storage=48):F.isMatrix4?(x.boundary=64,x.storage=64):F.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",F),x}function g(F){const x=F.target;x.removeEventListener("dispose",g);const y=a.indexOf(x.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function _(){for(const F in r)i.deleteBuffer(r[F]);a=[],r={},s={}}return{bind:c,update:l,dispose:_}}class WebGLRenderer{constructor(e={}){const{canvas:t=createCanvasElement(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const f=new Uint32Array(4),m=new Int32Array(4);let v=null,g=null;const _=[],F=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=SRGBColorSpace,this.toneMapping=NoToneMapping,this.toneMappingExposure=1;const x=this;let y=!1,R=0,L=0,G=null,M=-1,E=null;const b=new Vector4,I=new Vector4;let H=null;const q=new Color(0);let ee=0,de=t.width,fe=t.height,pe=1,$=null,O=null;const Y=new Vector4(0,0,de,fe),ae=new Vector4(0,0,de,fe);let ue=!1;const me=new Frustum;let le=!1,N=!1;const w=new Matrix4,z=new Vector3,te=new Vector4,Z={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ne=!1;function he(){return G===null?pe:1}let j=n;function Le(Q,Me){return t.getContext(Q,Me)}try{const Q={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${REVISION}`),t.addEventListener("webglcontextlost",Te,!1),t.addEventListener("webglcontextrestored",be,!1),t.addEventListener("webglcontextcreationerror",Ne,!1),j===null){const Me="webgl2";if(j=Le(Me,Q),j===null)throw Le(Me)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(Q){throw console.error("THREE.WebGLRenderer: "+Q.message),Q}let K,re,se,Ce,Se,p,S,D,X,J,ie,oe,xe,ve,ge,Pe,_e,Ee,Ue,Ie,De,we,Be,He;function ce(){K=new WebGLExtensions(j),K.init(),we=new WebGLUtils(j,K),re=new WebGLCapabilities(j,K,e,we),se=new WebGLState(j),Ce=new WebGLInfo(j),Se=new WebGLProperties,p=new WebGLTextures(j,K,se,Se,re,we,Ce),S=new WebGLCubeMaps(x),D=new WebGLCubeUVMaps(x),X=new WebGLAttributes(j),Be=new WebGLBindingStates(j,X),J=new WebGLGeometries(j,X,Ce,Be),ie=new WebGLObjects(j,J,X,Ce),Ue=new WebGLMorphtargets(j,re,p),Pe=new WebGLClipping(Se),oe=new WebGLPrograms(x,S,D,K,re,Be,Pe),xe=new WebGLMaterials(x,Se),ve=new WebGLRenderLists,ge=new WebGLRenderStates(K),Ee=new WebGLBackground(x,S,D,se,ie,d,c),_e=new WebGLShadowMap(x,ie,re),He=new WebGLUniformsGroups(j,Ce,re,se),Ie=new WebGLBufferRenderer(j,K,Ce),De=new WebGLIndexedBufferRenderer(j,K,Ce),Ce.programs=oe.programs,x.capabilities=re,x.extensions=K,x.properties=Se,x.renderLists=ve,x.shadowMap=_e,x.state=se,x.info=Ce}ce();const Fe=new WebXRManager(x,j);this.xr=Fe,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const Q=K.get("WEBGL_lose_context");Q&&Q.loseContext()},this.forceContextRestore=function(){const Q=K.get("WEBGL_lose_context");Q&&Q.restoreContext()},this.getPixelRatio=function(){return pe},this.setPixelRatio=function(Q){Q!==void 0&&(pe=Q,this.setSize(de,fe,!1))},this.getSize=function(Q){return Q.set(de,fe)},this.setSize=function(Q,Me,Ae=!0){if(Fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}de=Q,fe=Me,t.width=Math.floor(Q*pe),t.height=Math.floor(Me*pe),Ae===!0&&(t.style.width=Q+"px",t.style.height=Me+"px"),this.setViewport(0,0,Q,Me)},this.getDrawingBufferSize=function(Q){return Q.set(de*pe,fe*pe).floor()},this.setDrawingBufferSize=function(Q,Me,Ae){de=Q,fe=Me,pe=Ae,t.width=Math.floor(Q*Ae),t.height=Math.floor(Me*Ae),this.setViewport(0,0,Q,Me)},this.getCurrentViewport=function(Q){return Q.copy(b)},this.getViewport=function(Q){return Q.copy(Y)},this.setViewport=function(Q,Me,Ae,Re){Q.isVector4?Y.set(Q.x,Q.y,Q.z,Q.w):Y.set(Q,Me,Ae,Re),se.viewport(b.copy(Y).multiplyScalar(pe).round())},this.getScissor=function(Q){return Q.copy(ae)},this.setScissor=function(Q,Me,Ae,Re){Q.isVector4?ae.set(Q.x,Q.y,Q.z,Q.w):ae.set(Q,Me,Ae,Re),se.scissor(I.copy(ae).multiplyScalar(pe).round())},this.getScissorTest=function(){return ue},this.setScissorTest=function(Q){se.setScissorTest(ue=Q)},this.setOpaqueSort=function(Q){$=Q},this.setTransparentSort=function(Q){O=Q},this.getClearColor=function(Q){return Q.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor.apply(Ee,arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha.apply(Ee,arguments)},this.clear=function(Q=!0,Me=!0,Ae=!0){let Re=0;if(Q){let ye=!1;if(G!==null){const Oe=G.texture.format;ye=Oe===RGBAIntegerFormat||Oe===RGIntegerFormat||Oe===RedIntegerFormat}if(ye){const Oe=G.texture.type,Ve=Oe===UnsignedByteType||Oe===UnsignedIntType||Oe===UnsignedShortType||Oe===UnsignedInt248Type||Oe===UnsignedShort4444Type||Oe===UnsignedShort5551Type,Ge=Ee.getClearColor(),ze=Ee.getClearAlpha(),Ye=Ge.r,je=Ge.g,$e=Ge.b;Ve?(f[0]=Ye,f[1]=je,f[2]=$e,f[3]=ze,j.clearBufferuiv(j.COLOR,0,f)):(m[0]=Ye,m[1]=je,m[2]=$e,m[3]=ze,j.clearBufferiv(j.COLOR,0,m))}else Re|=j.COLOR_BUFFER_BIT}Me&&(Re|=j.DEPTH_BUFFER_BIT),Ae&&(Re|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j.clear(Re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Te,!1),t.removeEventListener("webglcontextrestored",be,!1),t.removeEventListener("webglcontextcreationerror",Ne,!1),ve.dispose(),ge.dispose(),Se.dispose(),S.dispose(),D.dispose(),ie.dispose(),Be.dispose(),He.dispose(),oe.dispose(),Fe.dispose(),Fe.removeEventListener("sessionstart",Ze),Fe.removeEventListener("sessionend",ut),ft.stop()};function Te(Q){Q.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function be(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const Q=Ce.autoReset,Me=_e.enabled,Ae=_e.autoUpdate,Re=_e.needsUpdate,ye=_e.type;ce(),Ce.autoReset=Q,_e.enabled=Me,_e.autoUpdate=Ae,_e.needsUpdate=Re,_e.type=ye}function Ne(Q){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",Q.statusMessage)}function ke(Q){const Me=Q.target;Me.removeEventListener("dispose",ke),We(Me)}function We(Q){Ke(Q),Se.remove(Q)}function Ke(Q){const Me=Se.get(Q).programs;Me!==void 0&&(Me.forEach(function(Ae){oe.releaseProgram(Ae)}),Q.isShaderMaterial&&oe.releaseShaderCache(Q))}this.renderBufferDirect=function(Q,Me,Ae,Re,ye,Oe){Me===null&&(Me=Z);const Ve=ye.isMesh&&ye.matrixWorld.determinant()<0,Ge=At(Q,Me,Ae,Re,ye);se.setMaterial(Re,Ve);let ze=Ae.index,Ye=1;if(Re.wireframe===!0){if(ze=J.getWireframeAttribute(Ae),ze===void 0)return;Ye=2}const je=Ae.drawRange,$e=Ae.attributes.position;let Je=je.start*Ye,it=(je.start+je.count)*Ye;Oe!==null&&(Je=Math.max(Je,Oe.start*Ye),it=Math.min(it,(Oe.start+Oe.count)*Ye)),ze!==null?(Je=Math.max(Je,0),it=Math.min(it,ze.count)):$e!=null&&(Je=Math.max(Je,0),it=Math.min(it,$e.count));const rt=it-Je;if(rt<0||rt===1/0)return;Be.setup(ye,Re,Ge,Ae,ze);let ot,et=Ie;if(ze!==null&&(ot=X.get(ze),et=De,et.setIndex(ot)),ye.isMesh)Re.wireframe===!0?(se.setLineWidth(Re.wireframeLinewidth*he()),et.setMode(j.LINES)):et.setMode(j.TRIANGLES);else if(ye.isLine){let qe=Re.linewidth;qe===void 0&&(qe=1),se.setLineWidth(qe*he()),ye.isLineSegments?et.setMode(j.LINES):ye.isLineLoop?et.setMode(j.LINE_LOOP):et.setMode(j.LINE_STRIP)}else ye.isPoints?et.setMode(j.POINTS):ye.isSprite&&et.setMode(j.TRIANGLES);if(ye.isBatchedMesh)if(ye._multiDrawInstances!==null)et.renderMultiDrawInstances(ye._multiDrawStarts,ye._multiDrawCounts,ye._multiDrawCount,ye._multiDrawInstances);else if(K.get("WEBGL_multi_draw"))et.renderMultiDraw(ye._multiDrawStarts,ye._multiDrawCounts,ye._multiDrawCount);else{const qe=ye._multiDrawStarts,st=ye._multiDrawCounts,tt=ye._multiDrawCount,ht=ze?X.get(ze).bytesPerElement:1,mt=Se.get(Re).currentProgram.getUniforms();for(let ct=0;ct<tt;ct++)mt.setValue(j,"_gl_DrawID",ct),et.render(qe[ct]/ht,st[ct])}else if(ye.isInstancedMesh)et.renderInstances(Je,rt,ye.count);else if(Ae.isInstancedBufferGeometry){const qe=Ae._maxInstanceCount!==void 0?Ae._maxInstanceCount:1/0,st=Math.min(Ae.instanceCount,qe);et.renderInstances(Je,rt,st)}else et.render(Je,rt)};function Qe(Q,Me,Ae){Q.transparent===!0&&Q.side===DoubleSide&&Q.forceSinglePass===!1?(Q.side=BackSide,Q.needsUpdate=!0,_t(Q,Me,Ae),Q.side=FrontSide,Q.needsUpdate=!0,_t(Q,Me,Ae),Q.side=DoubleSide):_t(Q,Me,Ae)}this.compile=function(Q,Me,Ae=null){Ae===null&&(Ae=Q),g=ge.get(Ae),g.init(Me),F.push(g),Ae.traverseVisible(function(ye){ye.isLight&&ye.layers.test(Me.layers)&&(g.pushLight(ye),ye.castShadow&&g.pushShadow(ye))}),Q!==Ae&&Q.traverseVisible(function(ye){ye.isLight&&ye.layers.test(Me.layers)&&(g.pushLight(ye),ye.castShadow&&g.pushShadow(ye))}),g.setupLights();const Re=new Set;return Q.traverse(function(ye){const Oe=ye.material;if(Oe)if(Array.isArray(Oe))for(let Ve=0;Ve<Oe.length;Ve++){const Ge=Oe[Ve];Qe(Ge,Ae,ye),Re.add(Ge)}else Qe(Oe,Ae,ye),Re.add(Oe)}),F.pop(),g=null,Re},this.compileAsync=function(Q,Me,Ae=null){const Re=this.compile(Q,Me,Ae);return new Promise(ye=>{function Oe(){if(Re.forEach(function(Ve){Se.get(Ve).currentProgram.isReady()&&Re.delete(Ve)}),Re.size===0){ye(Q);return}setTimeout(Oe,10)}K.get("KHR_parallel_shader_compile")!==null?Oe():setTimeout(Oe,10)})};let Xe=null;function nt(Q){Xe&&Xe(Q)}function Ze(){ft.stop()}function ut(){ft.start()}const ft=new WebGLAnimation;ft.setAnimationLoop(nt),typeof self<"u"&&ft.setContext(self),this.setAnimationLoop=function(Q){Xe=Q,Fe.setAnimationLoop(Q),Q===null?ft.stop():ft.start()},Fe.addEventListener("sessionstart",Ze),Fe.addEventListener("sessionend",ut),this.render=function(Q,Me){if(Me!==void 0&&Me.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),Me.parent===null&&Me.matrixWorldAutoUpdate===!0&&Me.updateMatrixWorld(),Fe.enabled===!0&&Fe.isPresenting===!0&&(Fe.cameraAutoUpdate===!0&&Fe.updateCamera(Me),Me=Fe.getCamera()),Q.isScene===!0&&Q.onBeforeRender(x,Q,Me,G),g=ge.get(Q,F.length),g.init(Me),F.push(g),w.multiplyMatrices(Me.projectionMatrix,Me.matrixWorldInverse),me.setFromProjectionMatrix(w),N=this.localClippingEnabled,le=Pe.init(this.clippingPlanes,N),v=ve.get(Q,_.length),v.init(),_.push(v),Fe.enabled===!0&&Fe.isPresenting===!0){const Oe=x.xr.getDepthSensingMesh();Oe!==null&&pt(Oe,Me,-1/0,x.sortObjects)}pt(Q,Me,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort($,O),ne=Fe.enabled===!1||Fe.isPresenting===!1||Fe.hasDepthSensing()===!1,ne&&Ee.addToRenderList(v,Q),this.info.render.frame++,le===!0&&Pe.beginShadows();const Ae=g.state.shadowsArray;_e.render(Ae,Q,Me),le===!0&&Pe.endShadows(),this.info.autoReset===!0&&this.info.reset();const Re=v.opaque,ye=v.transmissive;if(g.setupLights(),Me.isArrayCamera){const Oe=Me.cameras;if(ye.length>0)for(let Ve=0,Ge=Oe.length;Ve<Ge;Ve++){const ze=Oe[Ve];St(Re,ye,Q,ze)}ne&&Ee.render(Q);for(let Ve=0,Ge=Oe.length;Ve<Ge;Ve++){const ze=Oe[Ve];yt(v,Q,ze,ze.viewport)}}else ye.length>0&&St(Re,ye,Q,Me),ne&&Ee.render(Q),yt(v,Q,Me);G!==null&&(p.updateMultisampleRenderTarget(G),p.updateRenderTargetMipmap(G)),Q.isScene===!0&&Q.onAfterRender(x,Q,Me),Be.resetDefaultState(),M=-1,E=null,F.pop(),F.length>0?(g=F[F.length-1],le===!0&&Pe.setGlobalState(x.clippingPlanes,g.state.camera)):g=null,_.pop(),_.length>0?v=_[_.length-1]:v=null};function pt(Q,Me,Ae,Re){if(Q.visible===!1)return;if(Q.layers.test(Me.layers)){if(Q.isGroup)Ae=Q.renderOrder;else if(Q.isLOD)Q.autoUpdate===!0&&Q.update(Me);else if(Q.isLight)g.pushLight(Q),Q.castShadow&&g.pushShadow(Q);else if(Q.isSprite){if(!Q.frustumCulled||me.intersectsSprite(Q)){Re&&te.setFromMatrixPosition(Q.matrixWorld).applyMatrix4(w);const Ve=ie.update(Q),Ge=Q.material;Ge.visible&&v.push(Q,Ve,Ge,Ae,te.z,null)}}else if((Q.isMesh||Q.isLine||Q.isPoints)&&(!Q.frustumCulled||me.intersectsObject(Q))){const Ve=ie.update(Q),Ge=Q.material;if(Re&&(Q.boundingSphere!==void 0?(Q.boundingSphere===null&&Q.computeBoundingSphere(),te.copy(Q.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),te.copy(Ve.boundingSphere.center)),te.applyMatrix4(Q.matrixWorld).applyMatrix4(w)),Array.isArray(Ge)){const ze=Ve.groups;for(let Ye=0,je=ze.length;Ye<je;Ye++){const $e=ze[Ye],Je=Ge[$e.materialIndex];Je&&Je.visible&&v.push(Q,Ve,Je,Ae,te.z,$e)}}else Ge.visible&&v.push(Q,Ve,Ge,Ae,te.z,null)}}const Oe=Q.children;for(let Ve=0,Ge=Oe.length;Ve<Ge;Ve++)pt(Oe[Ve],Me,Ae,Re)}function yt(Q,Me,Ae,Re){const ye=Q.opaque,Oe=Q.transmissive,Ve=Q.transparent;g.setupLightsView(Ae),le===!0&&Pe.setGlobalState(x.clippingPlanes,Ae),Re&&se.viewport(b.copy(Re)),ye.length>0&&vt(ye,Me,Ae),Oe.length>0&&vt(Oe,Me,Ae),Ve.length>0&&vt(Ve,Me,Ae),se.buffers.depth.setTest(!0),se.buffers.depth.setMask(!0),se.buffers.color.setMask(!0),se.setPolygonOffset(!1)}function St(Q,Me,Ae,Re){if((Ae.isScene===!0?Ae.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[Re.id]===void 0&&(g.state.transmissionRenderTarget[Re.id]=new WebGLRenderTarget(1,1,{generateMipmaps:!0,type:K.has("EXT_color_buffer_half_float")||K.has("EXT_color_buffer_float")?HalfFloatType:UnsignedByteType,minFilter:LinearMipmapLinearFilter,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ColorManagement.workingColorSpace}));const Oe=g.state.transmissionRenderTarget[Re.id],Ve=Re.viewport||b;Oe.setSize(Ve.z,Ve.w);const Ge=x.getRenderTarget();x.setRenderTarget(Oe),x.getClearColor(q),ee=x.getClearAlpha(),ee<1&&x.setClearColor(16777215,.5),x.clear(),ne&&Ee.render(Ae);const ze=x.toneMapping;x.toneMapping=NoToneMapping;const Ye=Re.viewport;if(Re.viewport!==void 0&&(Re.viewport=void 0),g.setupLightsView(Re),le===!0&&Pe.setGlobalState(x.clippingPlanes,Re),vt(Q,Ae,Re),p.updateMultisampleRenderTarget(Oe),p.updateRenderTargetMipmap(Oe),K.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let $e=0,Je=Me.length;$e<Je;$e++){const it=Me[$e],rt=it.object,ot=it.geometry,et=it.material,qe=it.group;if(et.side===DoubleSide&&rt.layers.test(Re.layers)){const st=et.side;et.side=BackSide,et.needsUpdate=!0,Et(rt,Ae,Re,ot,et,qe),et.side=st,et.needsUpdate=!0,je=!0}}je===!0&&(p.updateMultisampleRenderTarget(Oe),p.updateRenderTargetMipmap(Oe))}x.setRenderTarget(Ge),x.setClearColor(q,ee),Ye!==void 0&&(Re.viewport=Ye),x.toneMapping=ze}function vt(Q,Me,Ae){const Re=Me.isScene===!0?Me.overrideMaterial:null;for(let ye=0,Oe=Q.length;ye<Oe;ye++){const Ve=Q[ye],Ge=Ve.object,ze=Ve.geometry,Ye=Re===null?Ve.material:Re,je=Ve.group;Ge.layers.test(Ae.layers)&&Et(Ge,Me,Ae,ze,Ye,je)}}function Et(Q,Me,Ae,Re,ye,Oe){Q.onBeforeRender(x,Me,Ae,Re,ye,Oe),Q.modelViewMatrix.multiplyMatrices(Ae.matrixWorldInverse,Q.matrixWorld),Q.normalMatrix.getNormalMatrix(Q.modelViewMatrix),ye.onBeforeRender(x,Me,Ae,Re,Q,Oe),ye.transparent===!0&&ye.side===DoubleSide&&ye.forceSinglePass===!1?(ye.side=BackSide,ye.needsUpdate=!0,x.renderBufferDirect(Ae,Me,Re,ye,Q,Oe),ye.side=FrontSide,ye.needsUpdate=!0,x.renderBufferDirect(Ae,Me,Re,ye,Q,Oe),ye.side=DoubleSide):x.renderBufferDirect(Ae,Me,Re,ye,Q,Oe),Q.onAfterRender(x,Me,Ae,Re,ye,Oe)}function _t(Q,Me,Ae){Me.isScene!==!0&&(Me=Z);const Re=Se.get(Q),ye=g.state.lights,Oe=g.state.shadowsArray,Ve=ye.state.version,Ge=oe.getParameters(Q,ye.state,Oe,Me,Ae),ze=oe.getProgramCacheKey(Ge);let Ye=Re.programs;Re.environment=Q.isMeshStandardMaterial?Me.environment:null,Re.fog=Me.fog,Re.envMap=(Q.isMeshStandardMaterial?D:S).get(Q.envMap||Re.environment),Re.envMapRotation=Re.environment!==null&&Q.envMap===null?Me.environmentRotation:Q.envMapRotation,Ye===void 0&&(Q.addEventListener("dispose",ke),Ye=new Map,Re.programs=Ye);let je=Ye.get(ze);if(je!==void 0){if(Re.currentProgram===je&&Re.lightsStateVersion===Ve)return bt(Q,Ge),je}else Ge.uniforms=oe.getUniforms(Q),Q.onBeforeCompile(Ge,x),je=oe.acquireProgram(Ge,ze),Ye.set(ze,je),Re.uniforms=Ge.uniforms;const $e=Re.uniforms;return(!Q.isShaderMaterial&&!Q.isRawShaderMaterial||Q.clipping===!0)&&($e.clippingPlanes=Pe.uniform),bt(Q,Ge),Re.needsLights=Rt(Q),Re.lightsStateVersion=Ve,Re.needsLights&&($e.ambientLightColor.value=ye.state.ambient,$e.lightProbe.value=ye.state.probe,$e.directionalLights.value=ye.state.directional,$e.directionalLightShadows.value=ye.state.directionalShadow,$e.spotLights.value=ye.state.spot,$e.spotLightShadows.value=ye.state.spotShadow,$e.rectAreaLights.value=ye.state.rectArea,$e.ltc_1.value=ye.state.rectAreaLTC1,$e.ltc_2.value=ye.state.rectAreaLTC2,$e.pointLights.value=ye.state.point,$e.pointLightShadows.value=ye.state.pointShadow,$e.hemisphereLights.value=ye.state.hemi,$e.directionalShadowMap.value=ye.state.directionalShadowMap,$e.directionalShadowMatrix.value=ye.state.directionalShadowMatrix,$e.spotShadowMap.value=ye.state.spotShadowMap,$e.spotLightMatrix.value=ye.state.spotLightMatrix,$e.spotLightMap.value=ye.state.spotLightMap,$e.pointShadowMap.value=ye.state.pointShadowMap,$e.pointShadowMatrix.value=ye.state.pointShadowMatrix),Re.currentProgram=je,Re.uniformsList=null,je}function Tt(Q){if(Q.uniformsList===null){const Me=Q.currentProgram.getUniforms();Q.uniformsList=WebGLUniforms.seqWithValue(Me.seq,Q.uniforms)}return Q.uniformsList}function bt(Q,Me){const Ae=Se.get(Q);Ae.outputColorSpace=Me.outputColorSpace,Ae.batching=Me.batching,Ae.batchingColor=Me.batchingColor,Ae.instancing=Me.instancing,Ae.instancingColor=Me.instancingColor,Ae.instancingMorph=Me.instancingMorph,Ae.skinning=Me.skinning,Ae.morphTargets=Me.morphTargets,Ae.morphNormals=Me.morphNormals,Ae.morphColors=Me.morphColors,Ae.morphTargetsCount=Me.morphTargetsCount,Ae.numClippingPlanes=Me.numClippingPlanes,Ae.numIntersection=Me.numClipIntersection,Ae.vertexAlphas=Me.vertexAlphas,Ae.vertexTangents=Me.vertexTangents,Ae.toneMapping=Me.toneMapping}function At(Q,Me,Ae,Re,ye){Me.isScene!==!0&&(Me=Z),p.resetTextureUnits();const Oe=Me.fog,Ve=Re.isMeshStandardMaterial?Me.environment:null,Ge=G===null?x.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:LinearSRGBColorSpace,ze=(Re.isMeshStandardMaterial?D:S).get(Re.envMap||Ve),Ye=Re.vertexColors===!0&&!!Ae.attributes.color&&Ae.attributes.color.itemSize===4,je=!!Ae.attributes.tangent&&(!!Re.normalMap||Re.anisotropy>0),$e=!!Ae.morphAttributes.position,Je=!!Ae.morphAttributes.normal,it=!!Ae.morphAttributes.color;let rt=NoToneMapping;Re.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(rt=x.toneMapping);const ot=Ae.morphAttributes.position||Ae.morphAttributes.normal||Ae.morphAttributes.color,et=ot!==void 0?ot.length:0,qe=Se.get(Re),st=g.state.lights;if(le===!0&&(N===!0||Q!==E)){const lt=Q===E&&Re.id===M;Pe.setState(Re,Q,lt)}let tt=!1;Re.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==st.state.version||qe.outputColorSpace!==Ge||ye.isBatchedMesh&&qe.batching===!1||!ye.isBatchedMesh&&qe.batching===!0||ye.isBatchedMesh&&qe.batchingColor===!0&&ye.colorTexture===null||ye.isBatchedMesh&&qe.batchingColor===!1&&ye.colorTexture!==null||ye.isInstancedMesh&&qe.instancing===!1||!ye.isInstancedMesh&&qe.instancing===!0||ye.isSkinnedMesh&&qe.skinning===!1||!ye.isSkinnedMesh&&qe.skinning===!0||ye.isInstancedMesh&&qe.instancingColor===!0&&ye.instanceColor===null||ye.isInstancedMesh&&qe.instancingColor===!1&&ye.instanceColor!==null||ye.isInstancedMesh&&qe.instancingMorph===!0&&ye.morphTexture===null||ye.isInstancedMesh&&qe.instancingMorph===!1&&ye.morphTexture!==null||qe.envMap!==ze||Re.fog===!0&&qe.fog!==Oe||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==Pe.numPlanes||qe.numIntersection!==Pe.numIntersection)||qe.vertexAlphas!==Ye||qe.vertexTangents!==je||qe.morphTargets!==$e||qe.morphNormals!==Je||qe.morphColors!==it||qe.toneMapping!==rt||qe.morphTargetsCount!==et)&&(tt=!0):(tt=!0,qe.__version=Re.version);let ht=qe.currentProgram;tt===!0&&(ht=_t(Re,Me,ye));let mt=!1,ct=!1,gt=!1;const at=ht.getUniforms(),dt=qe.uniforms;if(se.useProgram(ht.program)&&(mt=!0,ct=!0,gt=!0),Re.id!==M&&(M=Re.id,ct=!0),mt||E!==Q){at.setValue(j,"projectionMatrix",Q.projectionMatrix),at.setValue(j,"viewMatrix",Q.matrixWorldInverse);const lt=at.map.cameraPosition;lt!==void 0&&lt.setValue(j,z.setFromMatrixPosition(Q.matrixWorld)),re.logarithmicDepthBuffer&&at.setValue(j,"logDepthBufFC",2/(Math.log(Q.far+1)/Math.LN2)),(Re.isMeshPhongMaterial||Re.isMeshToonMaterial||Re.isMeshLambertMaterial||Re.isMeshBasicMaterial||Re.isMeshStandardMaterial||Re.isShaderMaterial)&&at.setValue(j,"isOrthographic",Q.isOrthographicCamera===!0),E!==Q&&(E=Q,ct=!0,gt=!0)}if(ye.isSkinnedMesh){at.setOptional(j,ye,"bindMatrix"),at.setOptional(j,ye,"bindMatrixInverse");const lt=ye.skeleton;lt&&(lt.boneTexture===null&&lt.computeBoneTexture(),at.setValue(j,"boneTexture",lt.boneTexture,p))}ye.isBatchedMesh&&(at.setOptional(j,ye,"batchingTexture"),at.setValue(j,"batchingTexture",ye._matricesTexture,p),at.setOptional(j,ye,"batchingIdTexture"),at.setValue(j,"batchingIdTexture",ye._indirectTexture,p),at.setOptional(j,ye,"batchingColorTexture"),ye._colorsTexture!==null&&at.setValue(j,"batchingColorTexture",ye._colorsTexture,p));const Mt=Ae.morphAttributes;if((Mt.position!==void 0||Mt.normal!==void 0||Mt.color!==void 0)&&Ue.update(ye,Ae,ht),(ct||qe.receiveShadow!==ye.receiveShadow)&&(qe.receiveShadow=ye.receiveShadow,at.setValue(j,"receiveShadow",ye.receiveShadow)),Re.isMeshGouraudMaterial&&Re.envMap!==null&&(dt.envMap.value=ze,dt.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),Re.isMeshStandardMaterial&&Re.envMap===null&&Me.environment!==null&&(dt.envMapIntensity.value=Me.environmentIntensity),ct&&(at.setValue(j,"toneMappingExposure",x.toneMappingExposure),qe.needsLights&&wt(dt,gt),Oe&&Re.fog===!0&&xe.refreshFogUniforms(dt,Oe),xe.refreshMaterialUniforms(dt,Re,pe,fe,g.state.transmissionRenderTarget[Q.id]),WebGLUniforms.upload(j,Tt(qe),dt,p)),Re.isShaderMaterial&&Re.uniformsNeedUpdate===!0&&(WebGLUniforms.upload(j,Tt(qe),dt,p),Re.uniformsNeedUpdate=!1),Re.isSpriteMaterial&&at.setValue(j,"center",ye.center),at.setValue(j,"modelViewMatrix",ye.modelViewMatrix),at.setValue(j,"normalMatrix",ye.normalMatrix),at.setValue(j,"modelMatrix",ye.matrixWorld),Re.isShaderMaterial||Re.isRawShaderMaterial){const lt=Re.uniformsGroups;for(let xt=0,Pt=lt.length;xt<Pt;xt++){const Ct=lt[xt];He.update(Ct,ht),He.bind(Ct,ht)}}return ht}function wt(Q,Me){Q.ambientLightColor.needsUpdate=Me,Q.lightProbe.needsUpdate=Me,Q.directionalLights.needsUpdate=Me,Q.directionalLightShadows.needsUpdate=Me,Q.pointLights.needsUpdate=Me,Q.pointLightShadows.needsUpdate=Me,Q.spotLights.needsUpdate=Me,Q.spotLightShadows.needsUpdate=Me,Q.rectAreaLights.needsUpdate=Me,Q.hemisphereLights.needsUpdate=Me}function Rt(Q){return Q.isMeshLambertMaterial||Q.isMeshToonMaterial||Q.isMeshPhongMaterial||Q.isMeshStandardMaterial||Q.isShadowMaterial||Q.isShaderMaterial&&Q.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(Q,Me,Ae){Se.get(Q.texture).__webglTexture=Me,Se.get(Q.depthTexture).__webglTexture=Ae;const Re=Se.get(Q);Re.__hasExternalTextures=!0,Re.__autoAllocateDepthBuffer=Ae===void 0,Re.__autoAllocateDepthBuffer||K.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Re.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(Q,Me){const Ae=Se.get(Q);Ae.__webglFramebuffer=Me,Ae.__useDefaultFramebuffer=Me===void 0},this.setRenderTarget=function(Q,Me=0,Ae=0){G=Q,R=Me,L=Ae;let Re=!0,ye=null,Oe=!1,Ve=!1;if(Q){const ze=Se.get(Q);if(ze.__useDefaultFramebuffer!==void 0)se.bindFramebuffer(j.FRAMEBUFFER,null),Re=!1;else if(ze.__webglFramebuffer===void 0)p.setupRenderTarget(Q);else if(ze.__hasExternalTextures)p.rebindTextures(Q,Se.get(Q.texture).__webglTexture,Se.get(Q.depthTexture).__webglTexture);else if(Q.depthBuffer){const $e=Q.depthTexture;if(ze.__boundDepthTexture!==$e){if($e!==null&&Se.has($e)&&(Q.width!==$e.image.width||Q.height!==$e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");p.setupDepthRenderbuffer(Q)}}const Ye=Q.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(Ve=!0);const je=Se.get(Q).__webglFramebuffer;Q.isWebGLCubeRenderTarget?(Array.isArray(je[Me])?ye=je[Me][Ae]:ye=je[Me],Oe=!0):Q.samples>0&&p.useMultisampledRTT(Q)===!1?ye=Se.get(Q).__webglMultisampledFramebuffer:Array.isArray(je)?ye=je[Ae]:ye=je,b.copy(Q.viewport),I.copy(Q.scissor),H=Q.scissorTest}else b.copy(Y).multiplyScalar(pe).floor(),I.copy(ae).multiplyScalar(pe).floor(),H=ue;if(se.bindFramebuffer(j.FRAMEBUFFER,ye)&&Re&&se.drawBuffers(Q,ye),se.viewport(b),se.scissor(I),se.setScissorTest(H),Oe){const ze=Se.get(Q.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+Me,ze.__webglTexture,Ae)}else if(Ve){const ze=Se.get(Q.texture),Ye=Me||0;j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,ze.__webglTexture,Ae||0,Ye)}M=-1},this.readRenderTargetPixels=function(Q,Me,Ae,Re,ye,Oe,Ve){if(!(Q&&Q.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=Se.get(Q).__webglFramebuffer;if(Q.isWebGLCubeRenderTarget&&Ve!==void 0&&(Ge=Ge[Ve]),Ge){se.bindFramebuffer(j.FRAMEBUFFER,Ge);try{const ze=Q.texture,Ye=ze.format,je=ze.type;if(!re.textureFormatReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!re.textureTypeReadable(je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Me>=0&&Me<=Q.width-Re&&Ae>=0&&Ae<=Q.height-ye&&j.readPixels(Me,Ae,Re,ye,we.convert(Ye),we.convert(je),Oe)}finally{const ze=G!==null?Se.get(G).__webglFramebuffer:null;se.bindFramebuffer(j.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(Q,Me,Ae,Re,ye,Oe,Ve){if(!(Q&&Q.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=Se.get(Q).__webglFramebuffer;if(Q.isWebGLCubeRenderTarget&&Ve!==void 0&&(Ge=Ge[Ve]),Ge){se.bindFramebuffer(j.FRAMEBUFFER,Ge);try{const ze=Q.texture,Ye=ze.format,je=ze.type;if(!re.textureFormatReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!re.textureTypeReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Me>=0&&Me<=Q.width-Re&&Ae>=0&&Ae<=Q.height-ye){const $e=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,$e),j.bufferData(j.PIXEL_PACK_BUFFER,Oe.byteLength,j.STREAM_READ),j.readPixels(Me,Ae,Re,ye,we.convert(Ye),we.convert(je),0),j.flush();const Je=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);await probeAsync(j,Je,4);try{j.bindBuffer(j.PIXEL_PACK_BUFFER,$e),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,Oe)}finally{j.deleteBuffer($e),j.deleteSync(Je)}return Oe}}finally{const ze=G!==null?Se.get(G).__webglFramebuffer:null;se.bindFramebuffer(j.FRAMEBUFFER,ze)}}},this.copyFramebufferToTexture=function(Q,Me=null,Ae=0){Q.isTexture!==!0&&(warnOnce("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Me=arguments[0]||null,Q=arguments[1]);const Re=Math.pow(2,-Ae),ye=Math.floor(Q.image.width*Re),Oe=Math.floor(Q.image.height*Re),Ve=Me!==null?Me.x:0,Ge=Me!==null?Me.y:0;p.setTexture2D(Q,0),j.copyTexSubImage2D(j.TEXTURE_2D,Ae,0,0,Ve,Ge,ye,Oe),se.unbindTexture()},this.copyTextureToTexture=function(Q,Me,Ae=null,Re=null,ye=0){Q.isTexture!==!0&&(warnOnce("WebGLRenderer: copyTextureToTexture function signature has changed."),Re=arguments[0]||null,Q=arguments[1],Me=arguments[2],ye=arguments[3]||0,Ae=null);let Oe,Ve,Ge,ze,Ye,je;Ae!==null?(Oe=Ae.max.x-Ae.min.x,Ve=Ae.max.y-Ae.min.y,Ge=Ae.min.x,ze=Ae.min.y):(Oe=Q.image.width,Ve=Q.image.height,Ge=0,ze=0),Re!==null?(Ye=Re.x,je=Re.y):(Ye=0,je=0);const $e=we.convert(Me.format),Je=we.convert(Me.type);p.setTexture2D(Me,0),j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,Me.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Me.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,Me.unpackAlignment);const it=j.getParameter(j.UNPACK_ROW_LENGTH),rt=j.getParameter(j.UNPACK_IMAGE_HEIGHT),ot=j.getParameter(j.UNPACK_SKIP_PIXELS),et=j.getParameter(j.UNPACK_SKIP_ROWS),qe=j.getParameter(j.UNPACK_SKIP_IMAGES),st=Q.isCompressedTexture?Q.mipmaps[ye]:Q.image;j.pixelStorei(j.UNPACK_ROW_LENGTH,st.width),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,st.height),j.pixelStorei(j.UNPACK_SKIP_PIXELS,Ge),j.pixelStorei(j.UNPACK_SKIP_ROWS,ze),Q.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,ye,Ye,je,Oe,Ve,$e,Je,st.data):Q.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,ye,Ye,je,st.width,st.height,$e,st.data):j.texSubImage2D(j.TEXTURE_2D,ye,Ye,je,Oe,Ve,$e,Je,st),j.pixelStorei(j.UNPACK_ROW_LENGTH,it),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,rt),j.pixelStorei(j.UNPACK_SKIP_PIXELS,ot),j.pixelStorei(j.UNPACK_SKIP_ROWS,et),j.pixelStorei(j.UNPACK_SKIP_IMAGES,qe),ye===0&&Me.generateMipmaps&&j.generateMipmap(j.TEXTURE_2D),se.unbindTexture()},this.copyTextureToTexture3D=function(Q,Me,Ae=null,Re=null,ye=0){Q.isTexture!==!0&&(warnOnce("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Ae=arguments[0]||null,Re=arguments[1]||null,Q=arguments[2],Me=arguments[3],ye=arguments[4]||0);let Oe,Ve,Ge,ze,Ye,je,$e,Je,it;const rt=Q.isCompressedTexture?Q.mipmaps[ye]:Q.image;Ae!==null?(Oe=Ae.max.x-Ae.min.x,Ve=Ae.max.y-Ae.min.y,Ge=Ae.max.z-Ae.min.z,ze=Ae.min.x,Ye=Ae.min.y,je=Ae.min.z):(Oe=rt.width,Ve=rt.height,Ge=rt.depth,ze=0,Ye=0,je=0),Re!==null?($e=Re.x,Je=Re.y,it=Re.z):($e=0,Je=0,it=0);const ot=we.convert(Me.format),et=we.convert(Me.type);let qe;if(Me.isData3DTexture)p.setTexture3D(Me,0),qe=j.TEXTURE_3D;else if(Me.isDataArrayTexture||Me.isCompressedArrayTexture)p.setTexture2DArray(Me,0),qe=j.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,Me.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Me.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,Me.unpackAlignment);const st=j.getParameter(j.UNPACK_ROW_LENGTH),tt=j.getParameter(j.UNPACK_IMAGE_HEIGHT),ht=j.getParameter(j.UNPACK_SKIP_PIXELS),mt=j.getParameter(j.UNPACK_SKIP_ROWS),ct=j.getParameter(j.UNPACK_SKIP_IMAGES);j.pixelStorei(j.UNPACK_ROW_LENGTH,rt.width),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,rt.height),j.pixelStorei(j.UNPACK_SKIP_PIXELS,ze),j.pixelStorei(j.UNPACK_SKIP_ROWS,Ye),j.pixelStorei(j.UNPACK_SKIP_IMAGES,je),Q.isDataTexture||Q.isData3DTexture?j.texSubImage3D(qe,ye,$e,Je,it,Oe,Ve,Ge,ot,et,rt.data):Me.isCompressedArrayTexture?j.compressedTexSubImage3D(qe,ye,$e,Je,it,Oe,Ve,Ge,ot,rt.data):j.texSubImage3D(qe,ye,$e,Je,it,Oe,Ve,Ge,ot,et,rt),j.pixelStorei(j.UNPACK_ROW_LENGTH,st),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,tt),j.pixelStorei(j.UNPACK_SKIP_PIXELS,ht),j.pixelStorei(j.UNPACK_SKIP_ROWS,mt),j.pixelStorei(j.UNPACK_SKIP_IMAGES,ct),ye===0&&Me.generateMipmaps&&j.generateMipmap(qe),se.unbindTexture()},this.initRenderTarget=function(Q){Se.get(Q).__webglFramebuffer===void 0&&p.setupRenderTarget(Q)},this.initTexture=function(Q){Q.isCubeTexture?p.setTextureCube(Q,0):Q.isData3DTexture?p.setTexture3D(Q,0):Q.isDataArrayTexture||Q.isCompressedArrayTexture?p.setTexture2DArray(Q,0):p.setTexture2D(Q,0),se.unbindTexture()},this.resetState=function(){R=0,L=0,G=null,se.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return WebGLCoordinateSystem}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===DisplayP3ColorSpace?"display-p3":"srgb",t.unpackColorSpace=ColorManagement.workingColorSpace===LinearDisplayP3ColorSpace?"display-p3":"srgb"}}class Scene extends Object3D{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Euler,this.environmentIntensity=1,this.environmentRotation=new Euler,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class SphereGeometry extends BufferGeometry{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const u=[],h=new Vector3,d=new Vector3,f=[],m=[],v=[],g=[];for(let _=0;_<=n;_++){const F=[],x=_/n;let y=0;_===0&&a===0?y=.5/t:_===n&&c===Math.PI&&(y=-.5/t);for(let R=0;R<=t;R++){const L=R/t;h.x=-e*Math.cos(r+L*s)*Math.sin(a+x*o),h.y=e*Math.cos(a+x*o),h.z=e*Math.sin(r+L*s)*Math.sin(a+x*o),m.push(h.x,h.y,h.z),d.copy(h).normalize(),v.push(d.x,d.y,d.z),g.push(L+y,1-x),F.push(l++)}u.push(F)}for(let _=0;_<n;_++)for(let F=0;F<t;F++){const x=u[_][F+1],y=u[_][F],R=u[_+1][F],L=u[_+1][F+1];(_!==0||a>0)&&f.push(x,y,L),(_!==n-1||c<Math.PI)&&f.push(y,R,L)}this.setIndex(f),this.setAttribute("position",new Float32BufferAttribute(m,3)),this.setAttribute("normal",new Float32BufferAttribute(v,3)),this.setAttribute("uv",new Float32BufferAttribute(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new SphereGeometry(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class MeshStandardMaterial extends Material{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Color(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Color(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=TangentSpaceNormalMap,this.normalScale=new Vector2(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Euler,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Cache={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class LoadingManager{constructor(e,t,n){const r=this;let s=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const f=l[h],m=l[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return m}return null}}}const DefaultLoadingManager=new LoadingManager;class Loader{constructor(e){this.manager=e!==void 0?e:DefaultLoadingManager,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Loader.DEFAULT_MATERIAL_NAME="__DEFAULT";const loading={};class HttpError extends Error{constructor(e,t){super(e),this.response=t}}class FileLoader extends Loader{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Cache.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(loading[e]!==void 0){loading[e].push({onLoad:t,onProgress:n,onError:r});return}loading[e]=[],loading[e].push({onLoad:t,onProgress:n,onError:r});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=loading[e],h=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0;let v=0;const g=new ReadableStream({start(_){F();function F(){h.read().then(({done:x,value:y})=>{if(x)_.close();else{v+=y.byteLength;const R=new ProgressEvent("progress",{lengthComputable:m,loaded:v,total:f});for(let L=0,G=u.length;L<G;L++){const M=u[L];M.onProgress&&M.onProgress(R)}_.enqueue(y),F()}},x=>{_.error(x)})}}});return new Response(g)}else throw new HttpError(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o===void 0)return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(m=>f.decode(m))}}}).then(l=>{Cache.add(e,l);const u=loading[e];delete loading[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(l)}}).catch(l=>{const u=loading[e];if(u===void 0)throw this.manager.itemError(e),l;delete loading[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class ImageLoader extends Loader{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Cache.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=createElementNS("img");function c(){u(),Cache.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(h){u(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class TextureLoader extends Loader{constructor(e){super(e)}load(e,t,n,r){const s=new Texture,a=new ImageLoader(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class Light extends Object3D{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Color(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const _projScreenMatrix$1=new Matrix4,_lightPositionWorld$1=new Vector3,_lookTarget$1=new Vector3;class LightShadow{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Vector2(512,512),this.map=null,this.mapPass=null,this.matrix=new Matrix4,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Frustum,this._frameExtents=new Vector2(1,1),this._viewportCount=1,this._viewports=[new Vector4(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;_lightPositionWorld$1.setFromMatrixPosition(e.matrixWorld),t.position.copy(_lightPositionWorld$1),_lookTarget$1.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(_lookTarget$1),t.updateMatrixWorld(),_projScreenMatrix$1.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_projScreenMatrix$1),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(_projScreenMatrix$1)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class DirectionalLightShadow extends LightShadow{constructor(){super(new OrthographicCamera(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class DirectionalLight extends Light{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Object3D.DEFAULT_UP),this.updateMatrix(),this.target=new Object3D,this.shadow=new DirectionalLightShadow}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class AmbientLight extends Light{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}let _context;class AudioContext{static getContext(){return _context===void 0&&(_context=new(window.AudioContext||window.webkitAudioContext)),_context}static setContext(e){_context=e}}class AudioLoader extends Loader{constructor(e){super(e)}load(e,t,n,r){const s=this,a=new FileLoader(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(c){try{const l=c.slice(0);AudioContext.getContext().decodeAudioData(l,function(h){t(h)}).catch(o)}catch(l){o(l)}},n,r);function o(c){r?r(c):console.error(c),s.manager.itemError(e)}}}class Clock{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function now(){return(typeof performance>"u"?Date:performance).now()}const _position$1=new Vector3,_quaternion$1=new Quaternion,_scale$1=new Vector3,_orientation$1=new Vector3;class AudioListener extends Object3D{constructor(){super(),this.type="AudioListener",this.context=AudioContext.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Clock}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(_position$1,_quaternion$1,_scale$1),_orientation$1.set(0,0,-1).applyQuaternion(_quaternion$1),t.positionX){const r=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(_position$1.x,r),t.positionY.linearRampToValueAtTime(_position$1.y,r),t.positionZ.linearRampToValueAtTime(_position$1.z,r),t.forwardX.linearRampToValueAtTime(_orientation$1.x,r),t.forwardY.linearRampToValueAtTime(_orientation$1.y,r),t.forwardZ.linearRampToValueAtTime(_orientation$1.z,r),t.upX.linearRampToValueAtTime(n.x,r),t.upY.linearRampToValueAtTime(n.y,r),t.upZ.linearRampToValueAtTime(n.z,r)}else t.setPosition(_position$1.x,_position$1.y,_position$1.z),t.setOrientation(_orientation$1.x,_orientation$1.y,_orientation$1.z,n.x,n.y,n.z)}}class Audio extends Object3D{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}const _position=new Vector3,_quaternion=new Quaternion,_scale=new Vector3,_orientation=new Vector3;class PositionalAudio extends Audio{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){super.connect(),this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(_position,_quaternion,_scale),_orientation.set(0,0,1).applyQuaternion(_quaternion);const t=this.panner;if(t.positionX){const n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(_position.x,n),t.positionY.linearRampToValueAtTime(_position.y,n),t.positionZ.linearRampToValueAtTime(_position.z,n),t.orientationX.linearRampToValueAtTime(_orientation.x,n),t.orientationY.linearRampToValueAtTime(_orientation.y,n),t.orientationZ.linearRampToValueAtTime(_orientation.z,n)}else t.setPosition(_position.x,_position.y,_position.z),t.setOrientation(_orientation.x,_orientation.y,_orientation.z)}}class AudioAnalyser{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}}class Controls extends EventDispatcher{constructor(e,t){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:REVISION}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=REVISION);const _euler$3=new Euler(0,0,0,"YXZ"),_vector=new Vector3,_changeEvent={type:"change"},_lockEvent={type:"lock"},_unlockEvent={type:"unlock"},_PI_2=Math.PI/2;class MouseOnlyControls extends Controls{constructor(e,t){super(),this.camera=e,this.domElement=t,this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.rotationSpeed=1,this.movementEnabled=!0,this.movingForward=!1,this.distance=.02,this.domElement.ownerDocument.addEventListener("mousemove",this.onMouseMove.bind(this)),this.domElement.ownerDocument.addEventListener("pointerlockchange",this.onPointerlockChange.bind(this)),this.domElement.ownerDocument.addEventListener("pointerlockerror",this.onPointerlockError.bind(this)),this.domElement.ownerDocument.addEventListener("mousedown",this.onMouseDown.bind(this)),this.domElement.ownerDocument.addEventListener("mouseup",this.onMouseUp.bind(this))}getObject(){return this.camera}getDirection(e){return e.set(0,0,-1).applyQuaternion(this.camera.quaternion)}moveForward(e){_vector.setFromMatrixColumn(this.camera.matrix,0),_vector.crossVectors(this.camera.up,_vector),this.camera.position.addScaledVector(_vector,e)}setDblClick(e){window.addEventListener("dblclick",t=>this.onDblClick(t,e))}lock(){this.domElement.requestPointerLock()}unlock(){this.domElement.ownerDocument.exitPointerLock()}update(){this.movingForward&&this.movementEnabled&&this.moveForward(this.distance)}onDblClick(e,t){this.isLocked&&(e.preventDefault,t())}onMouseDown(){this.isLocked!==!1&&(this.movingForward=!0,this.dispatchEvent(_changeEvent))}onMouseUp(){this.isLocked!==!1&&(this.movingForward=!1,this.dispatchEvent(_changeEvent))}onMouseMove(e){if(this.isLocked===!1)return;const t=e.movementX||e.mozMovementX||e.webkitMovementX||0,n=e.movementY||e.mozMovementY||e.webkitMovementY||0;_euler$3.setFromQuaternion(this.camera.quaternion),_euler$3.y-=t*.002*this.rotationSpeed,_euler$3.x-=n*.002*this.rotationSpeed,_euler$3.x=Math.max(_PI_2-this.maxPolarAngle,Math.min(_PI_2-this.minPolarAngle,_euler$3.x)),this.camera.quaternion.setFromEuler(_euler$3),this.dispatchEvent(_changeEvent)}onPointerlockChange(){this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(_lockEvent),this.isLocked=!0):(this.dispatchEvent(_unlockEvent),this.isLocked=!1)}onPointerlockError(){console.error("THREE.MouseOnlyControls: Unable to use Pointer Lock API")}onContextMenu(e){this.isLocked===!0&&this.unlock()}}new Vector3;new Vector3;const _euler$2=new Euler(0,0,0,"YXZ");new Vector3;class KeyboardAccessControls{constructor(e,t){this.camera=e,this.domElement=t,this.lookSpeed=.01,this.moveSpeed=.01,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.moveDown=!1,this.moveForwardEnabled=!1,this.moveLeft=!1,this.moveRight=!1,this.moveUp=!1,this.tabularMovement=!1,this.sceneActive=!1,this.elevationControls=!0,window.addEventListener("keydown",this.onKeyDown.bind(this)),window.addEventListener("keyup",this.onKeyUp.bind(this))}onKeyDown(e){switch(e.code){case"ArrowUp":case"KeyW":this.elevationControls&&(this.moveUp=!0);break;case"ArrowLeft":case"KeyA":this.moveLeft=!0;break;case"ArrowDown":case"KeyS":this.elevationControls&&(this.moveDown=!0);break;case"ArrowRight":case"KeyD":this.moveRight=!0;break;case"Space":this.moveForwardEnabled=!0;break}}onKeyUp(e){switch(e.code){case"ArrowUp":case"KeyW":this.elevationControls&&(this.moveUp=!1);break;case"ArrowLeft":case"KeyA":this.moveLeft=!1;break;case"ArrowDown":case"KeyS":this.elevationControls&&(this.moveDown=!1);break;case"ArrowRight":case"KeyD":this.moveRight=!1;break;case"Space":this.moveForwardEnabled=!1;break}}dispose(){window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp)}setTab(e){window.addEventListener("keydown",t=>this.onTab(t,e))}onTab(e,t){if(this.sceneActive)switch(e.preventDefault(),e.code){case"Tab":t(e);break}}getDirection(e){return e.set(0,0,-1).applyQuaternion(this.camera.quaternion)}update(){_euler$2.setFromQuaternion(this.camera.quaternion),this.moveUp?(_euler$2.x+=this.lookSpeed,_euler$2.x=Math.max(Math.PI/2-this.maxPolarAngle,Math.min(Math.PI/2-this.minPolarAngle,_euler$2.x))):this.moveDown&&(_euler$2.x-=this.lookSpeed,_euler$2.x=Math.max(Math.PI/2-this.maxPolarAngle,Math.min(Math.PI/2-this.minPolarAngle,_euler$2.x))),this.moveLeft?_euler$2.y+=this.lookSpeed:this.moveRight&&(_euler$2.y-=this.lookSpeed),this.camera.quaternion.setFromEuler(_euler$2),this.moveForwardEnabled&&this.moveForward(this.moveSpeed)}moveForward(e){const t=new Vector3;t.setFromMatrixColumn(this.camera.matrix,0),t.crossVectors(this.camera.up,t),this.camera.position.addScaledVector(t,e)}}const _euler$1=new Euler(0,0,0,"YXZ"),_direction=new Vector3;class GamepadAccessControls{constructor(e){this.supported=navigator.webkitGetGamepads&&navigator.webkitGetGamepads()||!!navigator.webkitGamepads||!!navigator.mozGamepads||!!navigator.msGamepads||!!navigator.gamepads||navigator.getGamepads&&navigator.getGamepads(),this.camera=e,this.gamepadSpeed=.01,this.ticking=!1,this.cameraHeight=0,this.prevCameraHeight=0,this.minPolarAngle=Math.PI*1/4,this.maxPolarAngle=Math.PI*3/4,this.joystickSelect="left",this.left=new Vector2(0,0),this.right=new Vector2(0,0),this.RIGHT_AXIS_THRESHOLD=7849/32767,this.LEFT_AXIS_THRESHOLD=8689/32767,this.TRIGGER_AXIS_THRESHOLD=30/32767,this.SPACEMOUSE_THRESHOLD=5/32767,this.gamepads=[],this.prevRawGamepadTypes=[],this.prevTimestamps=[],this.buttons=new Array(17).fill({pressed:!1}),this.buttonsUp=[],this.bButton,this.previousB=0,this.forwardMovementEnabled=!1,this.forwardSpeed=.04,this.init()}init(){this.supported?(window.addEventListener("MozGamepadConnected",e=>this.onGamepadConnect(e),!1),window.addEventListener("MozGamepadDisconnected",e=>this.onGamepadDisconnect(e),!1),window.addEventListener("gamepadconnected",e=>this.onGamepadConnect(e),!1),window.addEventListener("gamepaddisconnected",e=>this.onGamepadDisconnect(e),!1),navigator.webkitGetGamepads&&navigator.webkitGetGamepads()&&this.startPolling()):console.error("Gamepad API not supported or not detected!")}startPolling(){console.log("Controller Connected!"),this.ticking||(this.ticking=!0,this.update())}stopPolling(){console.log("Controller Disconnected!"),this.ticking=!1}update(){this.pollStatus(),this.camera.getWorldDirection(_direction),this.cameraHeight=_direction.y,this.ticking&&(this.pollJoysticks(),this.pollButtons(),_euler$1.setFromQuaternion(this.camera.quaternion),this.joystickSelect==="left"?(_euler$1.y-=this.left.x*this.gamepadSpeed,_euler$1.x-=this.left.y*this.gamepadSpeed*.5,_euler$1.x=Math.max(Math.PI/2-this.maxPolarAngle,Math.min(Math.PI/2-this.minPolarAngle,_euler$1.x))):this.joystickSelect==="right"&&(_euler$1.y-=this.right.x*this.gamepadSpeed,_euler$1.x-=this.right.y*this.gamepadSpeed*.5,_euler$1.x=Math.max(Math.PI/2-this.maxPolarAngle,Math.min(Math.PI/2-this.minPolarAngle,_euler$1.x))),(this.cameraHeight>0&&this.prevCameraHeight<0||this.cameraHeight<0&&this.prevCameraHeight>0)&&(console.log("vibrate"),console.log(this.gamepads[0].vibrationActuator),this.gamepads[0].vibrationActuator.playEffect("dual-rumble",{startDelay:0,duration:100,weakMagnitude:1,strongMagnitude:1})),this.camera.quaternion.setFromEuler(_euler$1),this.prevCameraHeight=this.cameraHeight)}pollStatus(){this.pollGamepads();for(let e in this.gamepads){let t=this.gamepads[e];t.timestamp&&t.timestamp===this.prevTimestamps[e]||(this.prevTimestamps[e]=t.timestamp)}}pollGamepads(){let e=navigator.webkitGetGamepads&&navigator.webkitGetGamepads()||navigator.webkitGamepads||navigator.mozGamepads||navigator.msGamepads||navigator.gamepads||navigator.getGamepads&&navigator.getGamepads();if(e){this.gamepads=[];for(let t=0,n=e.length;t<n;t++)typeof e[t]!==this.prevRawGamepadTypes[t]&&(this.prevRawGamepadTypes[t]=typeof e[t]),e[t]&&this.gamepads.push(e[t])}}pollJoysticks(){let e=0;if(this.left=new Vector2(0,0),this.right=new Vector2(0,0),this.gamepads[e]){let t=this.gamepads[e].axes[0],n=this.gamepads[e].axes[1],r=this.gamepads[e].axes[2],s=this.gamepads[e].axes[3];(t<-this.SPACEMOUSE_THRESHOLD||t>this.SPACEMOUSE_THRESHOLD)&&(this.left.x=t),(n<-this.SPACEMOUSE_THRESHOLD||n>this.SPACEMOUSE_THRESHOLD)&&(this.left.y=n),(r<-this.SPACEMOUSE_THRESHOLD||r>this.SPACEMOUSE_THRESHOLD)&&(this.right.x=r),(s<-this.SPACEMOUSE_THRESHOLD||s>this.SPACEMOUSE_THRESHOLD)&&(this.right.y=s)}}pollButtons(){const e=this.gamepads[0].buttons,t=12,n=13,r=14,s=15;this.camera.getWorldDirection(_direction),e.map((o,c)=>{(!o||!this.buttons)&&(!o.pressed&&this.buttons[c].pressed?this.buttonsUp[c]=!0:this.buttonsUp[c]=!1)}),this.buttons=e;let a=this.gamepads[0].buttons;this.forwardMovementEnabled&&(a[0].pressed&&this.moveForward(this.forwardSpeed),a[1].pressed&&this.previousB==0?(this.bButton(),this.previousB=1):a[1].pressed||(this.previousB=0),console.log(a),a[t].pressed?this.left.y=-1:a[n].pressed?this.left.y=1:a[r].pressed?this.left.x=-1:a[s].pressed&&(this.left.x=1))}moveForward(e){_direction.setFromMatrixColumn(this.camera.matrix,0),_direction.crossVectors(this.camera.up,_direction),this.camera.position.addScaledVector(_direction,e)}onGamepadConnect(e){let t=e.gamepad;this.gamepads[e.gamepad.id]=t,this.startPolling()}onGamepadDisconnect(e){this.gamepads[e.gamepad.id]=null,this.gamepads.length===0&&this.stopPolling()}}const _euler=new Euler(0,0,0,"YXZ"),_rotTouchCoords=new Vector2(0,0),_prevRotTouchCoords=new Vector2(0,0);class TouchAccessControls{constructor(e,t){this.camera=e,this.domElement=t,this.enabled=!1,this.isLocked=!1,this.inertia=!1,this.elevationControls=!0,this.curTime,this.tapLen,this.lastTap=0,this.timeout,this.cameraHeight=0,this.prevCameraHeight=0,this.moveForwardEnabled=!1,this.navigator=window.navigator,this.rotationTouches=[],this.moveTouches=[],this.touchSpeed=.005,this.forwardSpeed=.01,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.domElement.ownerDocument.addEventListener("touchstart",this.onTouchStart.bind(this)),this.domElement.ownerDocument.addEventListener("touchmove",this.onTouchMove.bind(this)),this.domElement.ownerDocument.addEventListener("touchend",this.onTouchEnd.bind(this)),this.domElement.ownerDocument.addEventListener("touchcancel",this.onTouchEnd.bind(this)),this.divideScreen()}divideScreen(){const e=this.domElement.ownerDocument.createElement("div");e.id="hitbox",this.domElement.ownerDocument.body.appendChild(e)}dispose(){}update(){const e=new Vector3;this.camera.getWorldDirection(e),this.cameraHeight=e.y,(this.cameraHeight>0&&this.prevCameraHeight<0||this.cameraHeight<0&&this.prevCameraHeight>0)&&(console.log("vibrate"),navigator.vibrate(75)),this.prevCameraHeight=this.cameraHeight,this.moveTouches.length>0&&this.moveForward(this.forwardSpeed),_euler.setFromQuaternion(this.camera.quaternion),this.elevationControls&&(_euler.y+=_rotTouchCoords.x*this.touchSpeed),_euler.x+=_rotTouchCoords.y*this.touchSpeed*.5,_euler.x=Math.max(Math.PI/2-this.maxPolarAngle,Math.min(Math.PI/2-this.minPolarAngle,_euler.x)),this.camera.quaternion.setFromEuler(_euler)}onTouchStart(e){let t=0;for(;e.changedTouches.item(t)!=null;){let n=e.changedTouches.item(t);n.target.id=="hitbox"?this.moveTouches.push(n.identifier):n.target.id=="canvas"&&(this.rotationTouches.length==0&&this.rotationTouches.push(n.identifier),_prevRotTouchCoords.y=n.clientY,_prevRotTouchCoords.x=n.clientX),t++}}onTouchEnd(e){let t=0;for(;e.changedTouches.item(t)!=null;){let n=e.changedTouches.item(t);n.identifier==this.rotationTouches[0]&&!this.inertia&&(_rotTouchCoords.x=0,_rotTouchCoords.y=0),this.moveTouches=this.moveTouches.filter(r=>n.identifier!=r),this.rotationTouches=this.rotationTouches.filter(r=>n.identifier!=r),t++}}onTouchMove(e){let n=e.changedTouches.item(0);this.rotationTouches.map((r,s)=>{console.log(s),r==n.identifier&&s==0&&(_rotTouchCoords.x=n.clientX-_prevRotTouchCoords.x,_prevRotTouchCoords.x=n.clientX,_rotTouchCoords.y=n.clientY-_prevRotTouchCoords.y,_prevRotTouchCoords.y=n.clientY)})}onHitBoxEnd(e){this.moveForwardEnabled=!1,this.domElement.ownerDocument.removeEventListener("touchend",this._onHitBoxEnd)}moveForward(e){const t=new Vector3;t.setFromMatrixColumn(this.camera.matrix,0),t.crossVectors(this.camera.up,t),this.camera.position.addScaledVector(t,e)}}var commonjsGlobal=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},dist={},ambiMonoEncoder={},classCallCheck={};classCallCheck.__esModule=!0;classCallCheck.default=function(i,e){if(!(i instanceof e))throw new TypeError("Cannot call a class as a function")};var createClass={},_global={exports:{}},global$2=_global.exports=typeof window<"u"&&window.Math==Math?window:typeof self<"u"&&self.Math==Math?self:Function("return this")();typeof __g=="number"&&(__g=global$2);var _globalExports=_global.exports,_core={exports:{}},core$1=_core.exports={version:"2.6.12"};typeof __e=="number"&&(__e=core$1);var _coreExports=_core.exports,_aFunction=function(i){if(typeof i!="function")throw TypeError(i+" is not a function!");return i},aFunction=_aFunction,_ctx=function(i,e,t){if(aFunction(i),e===void 0)return i;switch(t){case 1:return function(n){return i.call(e,n)};case 2:return function(n,r){return i.call(e,n,r)};case 3:return function(n,r,s){return i.call(e,n,r,s)}}return function(){return i.apply(e,arguments)}},_objectDp={},_isObject,hasRequired_isObject;function require_isObject(){return hasRequired_isObject||(hasRequired_isObject=1,_isObject=function(i){return typeof i=="object"?i!==null:typeof i=="function"}),_isObject}var _anObject,hasRequired_anObject;function require_anObject(){if(hasRequired_anObject)return _anObject;hasRequired_anObject=1;var i=require_isObject();return _anObject=function(e){if(!i(e))throw TypeError(e+" is not an object!");return e},_anObject}var _fails,hasRequired_fails;function require_fails(){return hasRequired_fails||(hasRequired_fails=1,_fails=function(i){try{return!!i()}catch{return!0}}),_fails}var _descriptors,hasRequired_descriptors;function require_descriptors(){return hasRequired_descriptors||(hasRequired_descriptors=1,_descriptors=!require_fails()(function(){return Object.defineProperty({},"a",{get:function(){return 7}}).a!=7})),_descriptors}var _domCreate,hasRequired_domCreate;function require_domCreate(){if(hasRequired_domCreate)return _domCreate;hasRequired_domCreate=1;var i=require_isObject(),e=_globalExports.document,t=i(e)&&i(e.createElement);return _domCreate=function(n){return t?e.createElement(n):{}},_domCreate}var _ie8DomDefine,hasRequired_ie8DomDefine;function require_ie8DomDefine(){return hasRequired_ie8DomDefine||(hasRequired_ie8DomDefine=1,_ie8DomDefine=!require_descriptors()&&!require_fails()(function(){return Object.defineProperty(require_domCreate()("div"),"a",{get:function(){return 7}}).a!=7})),_ie8DomDefine}var _toPrimitive,hasRequired_toPrimitive;function require_toPrimitive(){if(hasRequired_toPrimitive)return _toPrimitive;hasRequired_toPrimitive=1;var i=require_isObject();return _toPrimitive=function(e,t){if(!i(e))return e;var n,r;if(t&&typeof(n=e.toString)=="function"&&!i(r=n.call(e))||typeof(n=e.valueOf)=="function"&&!i(r=n.call(e))||!t&&typeof(n=e.toString)=="function"&&!i(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")},_toPrimitive}var hasRequired_objectDp;function require_objectDp(){if(hasRequired_objectDp)return _objectDp;hasRequired_objectDp=1;var i=require_anObject(),e=require_ie8DomDefine(),t=require_toPrimitive(),n=Object.defineProperty;return _objectDp.f=require_descriptors()?Object.defineProperty:function(s,a,o){if(i(s),a=t(a,!0),i(o),e)try{return n(s,a,o)}catch{}if("get"in o||"set"in o)throw TypeError("Accessors not supported!");return"value"in o&&(s[a]=o.value),s},_objectDp}var _propertyDesc=function(i,e){return{enumerable:!(i&1),configurable:!(i&2),writable:!(i&4),value:e}},dP=require_objectDp(),createDesc=_propertyDesc,_hide=require_descriptors()?function(i,e,t){return dP.f(i,e,createDesc(1,t))}:function(i,e,t){return i[e]=t,i},hasOwnProperty={}.hasOwnProperty,_has=function(i,e){return hasOwnProperty.call(i,e)},global$1=_globalExports,core=_coreExports,ctx=_ctx,hide=_hide,has=_has,PROTOTYPE="prototype",$export$1=function(i,e,t){var n=i&$export$1.F,r=i&$export$1.G,s=i&$export$1.S,a=i&$export$1.P,o=i&$export$1.B,c=i&$export$1.W,l=r?core:core[e]||(core[e]={}),u=l[PROTOTYPE],h=r?global$1:s?global$1[e]:(global$1[e]||{})[PROTOTYPE],d,f,m;r&&(t=e);for(d in t)f=!n&&h&&h[d]!==void 0,!(f&&has(l,d))&&(m=f?h[d]:t[d],l[d]=r&&typeof h[d]!="function"?t[d]:o&&f?ctx(m,global$1):c&&h[d]==m?function(v){var g=function(_,F,x){if(this instanceof v){switch(arguments.length){case 0:return new v;case 1:return new v(_);case 2:return new v(_,F)}return new v(_,F,x)}return v.apply(this,arguments)};return g[PROTOTYPE]=v[PROTOTYPE],g}(m):a&&typeof m=="function"?ctx(Function.call,m):m,a&&((l.virtual||(l.virtual={}))[d]=m,i&$export$1.R&&u&&!u[d]&&hide(u,d,m)))};$export$1.F=1;$export$1.G=2;$export$1.S=4;$export$1.P=8;$export$1.B=16;$export$1.W=32;$export$1.U=64;$export$1.R=128;var _export=$export$1,$export=_export;$export($export.S+$export.F*!require_descriptors(),"Object",{defineProperty:require_objectDp().f});var $Object=_coreExports.Object,defineProperty$1=function(e,t,n){return $Object.defineProperty(e,t,n)},defineProperty={default:defineProperty$1,__esModule:!0};createClass.__esModule=!0;var _defineProperty=defineProperty,_defineProperty2=_interopRequireDefault$n(_defineProperty);function _interopRequireDefault$n(i){return i&&i.__esModule?i:{default:i}}createClass.default=function(){function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,_defineProperty2.default)(e,r.key,r)}}return function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}}();var src={},numeric1_2_6={};(function(exports){var numeric=exports;typeof commonjsGlobal<"u"&&(commonjsGlobal.numeric=numeric),numeric.version="1.2.6",numeric.bench=function(e,t){var n,r,s,a;for(typeof t>"u"&&(t=15),s=.5,n=new Date;;){for(s*=2,a=s;a>3;a-=4)e(),e(),e(),e();for(;a>0;)e(),a--;if(r=new Date,r-n>t)break}for(a=s;a>3;a-=4)e(),e(),e(),e();for(;a>0;)e(),a--;return r=new Date,1e3*(3*s-1)/(r-n)},numeric._myIndexOf=function(e){var t=this.length,n;for(n=0;n<t;++n)if(this[n]===e)return n;return-1},numeric.myIndexOf=Array.prototype.indexOf?Array.prototype.indexOf:numeric._myIndexOf,numeric.Function=Function,numeric.precision=4,numeric.largeArray=50,numeric.prettyPrint=function(e){function t(s){if(s===0)return"0";if(isNaN(s))return"NaN";if(s<0)return"-"+t(-s);if(isFinite(s)){var a=Math.floor(Math.log(s)/Math.log(10)),o=s/Math.pow(10,a),c=o.toPrecision(numeric.precision);return parseFloat(c)===10&&(a++,o=1,c=o.toPrecision(numeric.precision)),parseFloat(c).toString()+"e"+a.toString()}return"Infinity"}var n=[];function r(s){var a;if(typeof s>"u")return n.push(Array(numeric.precision+8).join(" ")),!1;if(typeof s=="string")return n.push('"'+s+'"'),!1;if(typeof s=="boolean")return n.push(s.toString()),!1;if(typeof s=="number"){var o=t(s),c=s.toPrecision(numeric.precision),l=parseFloat(s.toString()).toString(),u=[o,c,l,parseFloat(c).toString(),parseFloat(l).toString()];for(a=1;a<u.length;a++)u[a].length<o.length&&(o=u[a]);return n.push(Array(numeric.precision+8-o.length).join(" ")+o),!1}if(s===null)return n.push("null"),!1;if(typeof s=="function"){n.push(s.toString());var h=!1;for(a in s)s.hasOwnProperty(a)&&(h?n.push(`,
`):n.push(`
{`),h=!0,n.push(a),n.push(`: 
`),r(s[a]));return h&&n.push(`}
`),!0}if(s instanceof Array){if(s.length>numeric.largeArray)return n.push("...Large Array..."),!0;var h=!1;for(n.push("["),a=0;a<s.length;a++)a>0&&(n.push(","),h&&n.push(`
 `)),h=r(s[a]);return n.push("]"),!0}n.push("{");var h=!1;for(a in s)s.hasOwnProperty(a)&&(h&&n.push(`,
`),h=!0,n.push(a),n.push(`: 
`),r(s[a]));return n.push("}"),!0}return r(e),n.join("")},numeric.parseDate=function(e){function t(n){if(typeof n=="string")return Date.parse(n.replace(/-/g,"/"));if(!(n instanceof Array))throw new Error("parseDate: parameter must be arrays of strings");var r=[],s;for(s=0;s<n.length;s++)r[s]=t(n[s]);return r}return t(e)},numeric.parseFloat=function(e){function t(n){if(typeof n=="string")return parseFloat(n);if(!(n instanceof Array))throw new Error("parseFloat: parameter must be arrays of strings");var r=[],s;for(s=0;s<n.length;s++)r[s]=t(n[s]);return r}return t(e)},numeric.parseCSV=function(e){var t=e.split(`
`),n,r,s=[],a=/(([^'",]*)|('[^']*')|("[^"]*")),/g,o=/^\s*(([+-]?[0-9]+(\.[0-9]*)?(e[+-]?[0-9]+)?)|([+-]?[0-9]*(\.[0-9]+)?(e[+-]?[0-9]+)?))\s*$/,c=function(d){return d.substr(0,d.length-1)},l=0;for(r=0;r<t.length;r++){var u=(t[r]+",").match(a),h;if(u.length>0){for(s[l]=[],n=0;n<u.length;n++)h=c(u[n]),o.test(h)?s[l][n]=parseFloat(h):s[l][n]=h;l++}}return s},numeric.toCSV=function(e){var t=numeric.dim(e),n,r,s,a,o;for(s=t[0],t[1],o=[],n=0;n<s;n++){for(a=[],r=0;r<s;r++)a[r]=e[n][r].toString();o[n]=a.join(", ")}return o.join(`
`)+`
`},numeric.getURL=function(e){var t=new XMLHttpRequest;return t.open("GET",e,!1),t.send(),t},numeric.imageURL=function(e){function t(_){var F=_.length,x,y,R,L,G,M,E,b,I="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",H="";for(x=0;x<F;x+=3)y=_[x],R=_[x+1],L=_[x+2],G=y>>2,M=((y&3)<<4)+(R>>4),E=((R&15)<<2)+(L>>6),b=L&63,x+1>=F?E=b=64:x+2>=F&&(b=64),H+=I.charAt(G)+I.charAt(M)+I.charAt(E)+I.charAt(b);return H}function n(_,F,x){typeof F>"u"&&(F=0),typeof x>"u"&&(x=_.length);var y=[0,1996959894,3993919788,2567524794,124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,901097722,1119000684,3686517206,2898065728,853044451,1172266101,3705015759,2882616665,651767980,1373503546,3369554304,3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,4240017532,1658658271,366619977,2362670323,4224994405,1303535960,984961486,2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,225274430,2053790376,3826175755,2466906013,167816743,2097651377,4027552580,2265490386,503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,2998733608,733239954,1555261956,3268935591,3050360625,752459403,1541320221,2607071920,3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,1231636301,1047427035,2932959818,3654703836,1088359270,936918e3,2847714899,3736837829,1202900863,817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117],R=-1,L=0;_.length;var G;for(G=F;G<x;G++)L=(R^_[G])&255,R=R>>>8^y[L];return R^-1}var r=e[0].length,s=e[0][0].length,a,o,c,l,u,h,d,f,m,v,g=[137,80,78,71,13,10,26,10,0,0,0,13,73,72,68,82,s>>24&255,s>>16&255,s>>8&255,s&255,r>>24&255,r>>16&255,r>>8&255,r&255,8,2,0,0,0,-1,-2,-3,-4,-5,-6,-7,-8,73,68,65,84,8,29];for(v=n(g,12,29),g[29]=v>>24&255,g[30]=v>>16&255,g[31]=v>>8&255,g[32]=v&255,a=1,o=0,d=0;d<r;d++){for(d<r-1?g.push(0):g.push(1),u=3*s+1+(d===0)&255,h=3*s+1+(d===0)>>8&255,g.push(u),g.push(h),g.push(~u&255),g.push(~h&255),d===0&&g.push(0),f=0;f<s;f++)for(c=0;c<3;c++)u=e[c][d][f],u>255?u=255:u<0?u=0:u=Math.round(u),a=(a+u)%65521,o=(o+a)%65521,g.push(u);g.push(0)}return m=(o<<16)+a,g.push(m>>24&255),g.push(m>>16&255),g.push(m>>8&255),g.push(m&255),l=g.length-41,g[33]=l>>24&255,g[34]=l>>16&255,g[35]=l>>8&255,g[36]=l&255,v=n(g,37),g.push(v>>24&255),g.push(v>>16&255),g.push(v>>8&255),g.push(v&255),g.push(0),g.push(0),g.push(0),g.push(0),g.push(73),g.push(69),g.push(78),g.push(68),g.push(174),g.push(66),g.push(96),g.push(130),"data:image/png;base64,"+t(g)},numeric._dim=function(e){for(var t=[];typeof e=="object";)t.push(e.length),e=e[0];return t},numeric.dim=function(e){var t,n;return typeof e=="object"?(t=e[0],typeof t=="object"?(n=t[0],typeof n=="object"?numeric._dim(e):[e.length,t.length]):[e.length]):[]},numeric.mapreduce=function(e,t){return Function("x","accum","_s","_k",'if(typeof accum === "undefined") accum = '+t+`;
if(typeof x === "number") { var xi = x; `+e+`; return accum; }
if(typeof _s === "undefined") _s = numeric.dim(x);
if(typeof _k === "undefined") _k = 0;
var _n = _s[_k];
var i,xi;
if(_k < _s.length-1) {
    for(i=_n-1;i>=0;i--) {
        accum = arguments.callee(x[i],accum,_s,_k+1);
    }    return accum;
}
for(i=_n-1;i>=1;i-=2) { 
    xi = x[i];
    `+e+`;
    xi = x[i-1];
    `+e+`;
}
if(i === 0) {
    xi = x[i];
    `+e+`
}
return accum;`)},numeric.mapreduce2=function(e,t){return Function("x",`var n = x.length;
var i,xi;
`+t+`;
for(i=n-1;i!==-1;--i) { 
    xi = x[i];
    `+e+`;
}
return accum;`)},numeric.same=function i(e,t){var n,r;if(!(e instanceof Array)||!(t instanceof Array)||(r=e.length,r!==t.length))return!1;for(n=0;n<r;n++)if(e[n]!==t[n])if(typeof e[n]=="object"){if(!i(e[n],t[n]))return!1}else return!1;return!0},numeric.rep=function(e,t,n){typeof n>"u"&&(n=0);var r=e[n],s=Array(r),a;if(n===e.length-1){for(a=r-2;a>=0;a-=2)s[a+1]=t,s[a]=t;return a===-1&&(s[0]=t),s}for(a=r-1;a>=0;a--)s[a]=numeric.rep(e,t,n+1);return s},numeric.dotMMsmall=function(e,t){var n,r,s,a,o,c,l,u,h,d,f;for(a=e.length,o=t.length,c=t[0].length,l=Array(a),n=a-1;n>=0;n--){for(u=Array(c),h=e[n],s=c-1;s>=0;s--){for(d=h[o-1]*t[o-1][s],r=o-2;r>=1;r-=2)f=r-1,d+=h[r]*t[r][s]+h[f]*t[f][s];r===0&&(d+=h[0]*t[0][s]),u[s]=d}l[n]=u}return l},numeric._getCol=function(e,t,n){var r=e.length,s;for(s=r-1;s>0;--s)n[s]=e[s][t],--s,n[s]=e[s][t];s===0&&(n[0]=e[0][t])},numeric.dotMMbig=function(e,t){var n=numeric._getCol,r=t.length,s=Array(r),a=e.length,o=t[0].length,c=new Array(a),l,u=numeric.dotVV,h,d;for(--r,--a,h=a;h!==-1;--h)c[h]=Array(o);for(--o,h=o;h!==-1;--h)for(n(t,h,s),d=a;d!==-1;--d)l=e[d],c[d][h]=u(l,s);return c},numeric.dotMV=function(e,t){var n=e.length;t.length;var r,s=Array(n),a=numeric.dotVV;for(r=n-1;r>=0;r--)s[r]=a(e[r],t);return s},numeric.dotVM=function(e,t){var n,r,s,a,o,c,l;for(s=e.length,a=t[0].length,o=Array(a),r=a-1;r>=0;r--){for(c=e[s-1]*t[s-1][r],n=s-2;n>=1;n-=2)l=n-1,c+=e[n]*t[n][r]+e[l]*t[l][r];n===0&&(c+=e[0]*t[0][r]),o[r]=c}return o},numeric.dotVV=function(e,t){var n,r=e.length,s,a=e[r-1]*t[r-1];for(n=r-2;n>=1;n-=2)s=n-1,a+=e[n]*t[n]+e[s]*t[s];return n===0&&(a+=e[0]*t[0]),a},numeric.dot=function(e,t){var n=numeric.dim;switch(n(e).length*1e3+n(t).length){case 2002:return t.length<10?numeric.dotMMsmall(e,t):numeric.dotMMbig(e,t);case 2001:return numeric.dotMV(e,t);case 1002:return numeric.dotVM(e,t);case 1001:return numeric.dotVV(e,t);case 1e3:return numeric.mulVS(e,t);case 1:return numeric.mulSV(e,t);case 0:return e*t;default:throw new Error("numeric.dot only works on vectors and matrices")}},numeric.diag=function(e){var t,n,r,s=e.length,a=Array(s),o;for(t=s-1;t>=0;t--){for(o=Array(s),n=t+2,r=s-1;r>=n;r-=2)o[r]=0,o[r-1]=0;for(r>t&&(o[r]=0),o[t]=e[t],r=t-1;r>=1;r-=2)o[r]=0,o[r-1]=0;r===0&&(o[0]=0),a[t]=o}return a},numeric.getDiag=function(i){var e=Math.min(i.length,i[0].length),t,n=Array(e);for(t=e-1;t>=1;--t)n[t]=i[t][t],--t,n[t]=i[t][t];return t===0&&(n[0]=i[0][0]),n},numeric.identity=function(e){return numeric.diag(numeric.rep([e],1))},numeric.pointwise=function(e,t,n){typeof n>"u"&&(n="");var r=[],s,a=/\[i\]$/,o,c="",l=!1;for(s=0;s<e.length;s++)a.test(e[s])?(o=e[s].substring(0,e[s].length-3),c=o):o=e[s],o==="ret"&&(l=!0),r.push(o);return r[e.length]="_s",r[e.length+1]="_k",r[e.length+2]='if(typeof _s === "undefined") _s = numeric.dim('+c+`);
if(typeof _k === "undefined") _k = 0;
var _n = _s[_k];
var i`+(l?"":", ret = Array(_n)")+`;
if(_k < _s.length-1) {
    for(i=_n-1;i>=0;i--) ret[i] = arguments.callee(`+e.join(",")+`,_s,_k+1);
    return ret;
}
`+n+`
for(i=_n-1;i!==-1;--i) {
    `+t+`
}
return ret;`,Function.apply(null,r)},numeric.pointwise2=function(e,t,n){typeof n>"u"&&(n="");var r=[],s,a=/\[i\]$/,o,c="",l=!1;for(s=0;s<e.length;s++)a.test(e[s])?(o=e[s].substring(0,e[s].length-3),c=o):o=e[s],o==="ret"&&(l=!0),r.push(o);return r[e.length]="var _n = "+c+`.length;
var i`+(l?"":", ret = Array(_n)")+`;
`+n+`
for(i=_n-1;i!==-1;--i) {
`+t+`
}
return ret;`,Function.apply(null,r)},numeric._biforeach=function i(e,t,n,r,s){if(r===n.length-1){s(e,t);return}var a,o=n[r];for(a=o-1;a>=0;a--)i(typeof e=="object"?e[a]:e,typeof t=="object"?t[a]:t,n,r+1,s)},numeric._biforeach2=function i(e,t,n,r,s){if(r===n.length-1)return s(e,t);var a,o=n[r],c=Array(o);for(a=o-1;a>=0;--a)c[a]=i(typeof e=="object"?e[a]:e,typeof t=="object"?t[a]:t,n,r+1,s);return c},numeric._foreach=function i(e,t,n,r){if(n===t.length-1){r(e);return}var s,a=t[n];for(s=a-1;s>=0;s--)i(e[s],t,n+1,r)},numeric._foreach2=function i(e,t,n,r){if(n===t.length-1)return r(e);var s,a=t[n],o=Array(a);for(s=a-1;s>=0;s--)o[s]=i(e[s],t,n+1,r);return o},numeric.ops2={add:"+",sub:"-",mul:"*",div:"/",mod:"%",and:"&&",or:"||",eq:"===",neq:"!==",lt:"<",gt:">",leq:"<=",geq:">=",band:"&",bor:"|",bxor:"^",lshift:"<<",rshift:">>",rrshift:">>>"},numeric.opseq={addeq:"+=",subeq:"-=",muleq:"*=",diveq:"/=",modeq:"%=",lshifteq:"<<=",rshifteq:">>=",rrshifteq:">>>=",bandeq:"&=",boreq:"|=",bxoreq:"^="},numeric.mathfuns=["abs","acos","asin","atan","ceil","cos","exp","floor","log","round","sin","sqrt","tan","isNaN","isFinite"],numeric.mathfuns2=["atan2","pow","max","min"],numeric.ops1={neg:"-",not:"!",bnot:"~",clone:""},numeric.mapreducers={any:["if(xi) return true;","var accum = false;"],all:["if(!xi) return false;","var accum = true;"],sum:["accum += xi;","var accum = 0;"],prod:["accum *= xi;","var accum = 1;"],norm2Squared:["accum += xi*xi;","var accum = 0;"],norminf:["accum = max(accum,abs(xi));","var accum = 0, max = Math.max, abs = Math.abs;"],norm1:["accum += abs(xi)","var accum = 0, abs = Math.abs;"],sup:["accum = max(accum,xi);","var accum = -Infinity, max = Math.max;"],inf:["accum = min(accum,xi);","var accum = Infinity, min = Math.min;"]},function(){var i,e;for(i=0;i<numeric.mathfuns2.length;++i)e=numeric.mathfuns2[i],numeric.ops2[e]=e;for(i in numeric.ops2)if(numeric.ops2.hasOwnProperty(i)){e=numeric.ops2[i];var t,n,r="";numeric.myIndexOf.call(numeric.mathfuns2,i)!==-1?(r="var "+e+" = Math."+e+`;
`,t=function(s,a,o){return s+" = "+e+"("+a+","+o+")"},n=function(s,a){return s+" = "+e+"("+s+","+a+")"}):(t=function(s,a,o){return s+" = "+a+" "+e+" "+o},numeric.opseq.hasOwnProperty(i+"eq")?n=function(s,a){return s+" "+e+"= "+a}:n=function(s,a){return s+" = "+s+" "+e+" "+a}),numeric[i+"VV"]=numeric.pointwise2(["x[i]","y[i]"],t("ret[i]","x[i]","y[i]"),r),numeric[i+"SV"]=numeric.pointwise2(["x","y[i]"],t("ret[i]","x","y[i]"),r),numeric[i+"VS"]=numeric.pointwise2(["x[i]","y"],t("ret[i]","x[i]","y"),r),numeric[i]=Function(`var n = arguments.length, i, x = arguments[0], y;
var VV = numeric.`+i+"VV, VS = numeric."+i+"VS, SV = numeric."+i+`SV;
var dim = numeric.dim;
for(i=1;i!==n;++i) { 
  y = arguments[i];
  if(typeof x === "object") {
      if(typeof y === "object") x = numeric._biforeach2(x,y,dim(x),0,VV);
      else x = numeric._biforeach2(x,y,dim(x),0,VS);
  } else if(typeof y === "object") x = numeric._biforeach2(x,y,dim(y),0,SV);
  else `+n("x","y")+`
}
return x;
`),numeric[e]=numeric[i],numeric[i+"eqV"]=numeric.pointwise2(["ret[i]","x[i]"],n("ret[i]","x[i]"),r),numeric[i+"eqS"]=numeric.pointwise2(["ret[i]","x"],n("ret[i]","x"),r),numeric[i+"eq"]=Function(`var n = arguments.length, i, x = arguments[0], y;
var V = numeric.`+i+"eqV, S = numeric."+i+`eqS
var s = numeric.dim(x);
for(i=1;i!==n;++i) { 
  y = arguments[i];
  if(typeof y === "object") numeric._biforeach(x,y,s,0,V);
  else numeric._biforeach(x,y,s,0,S);
}
return x;
`)}for(i=0;i<numeric.mathfuns2.length;++i)e=numeric.mathfuns2[i],delete numeric.ops2[e];for(i=0;i<numeric.mathfuns.length;++i)e=numeric.mathfuns[i],numeric.ops1[e]=e;for(i in numeric.ops1)numeric.ops1.hasOwnProperty(i)&&(r="",e=numeric.ops1[i],numeric.myIndexOf.call(numeric.mathfuns,i)!==-1&&Math.hasOwnProperty(e)&&(r="var "+e+" = Math."+e+`;
`),numeric[i+"eqV"]=numeric.pointwise2(["ret[i]"],"ret[i] = "+e+"(ret[i]);",r),numeric[i+"eq"]=Function("x",'if(typeof x !== "object") return '+e+`x
var i;
var V = numeric.`+i+`eqV;
var s = numeric.dim(x);
numeric._foreach(x,s,0,V);
return x;
`),numeric[i+"V"]=numeric.pointwise2(["x[i]"],"ret[i] = "+e+"(x[i]);",r),numeric[i]=Function("x",'if(typeof x !== "object") return '+e+`(x)
var i;
var V = numeric.`+i+`V;
var s = numeric.dim(x);
return numeric._foreach2(x,s,0,V);
`));for(i=0;i<numeric.mathfuns.length;++i)e=numeric.mathfuns[i],delete numeric.ops1[e];for(i in numeric.mapreducers)numeric.mapreducers.hasOwnProperty(i)&&(e=numeric.mapreducers[i],numeric[i+"V"]=numeric.mapreduce2(e[0],e[1]),numeric[i]=Function("x","s","k",e[1]+`if(typeof x !== "object") {    xi = x;
`+e[0]+`;
    return accum;
}if(typeof s === "undefined") s = numeric.dim(x);
if(typeof k === "undefined") k = 0;
if(k === s.length-1) return numeric.`+i+`V(x);
var xi;
var n = x.length, i;
for(i=n-1;i!==-1;--i) {
   xi = arguments.callee(x[i]);
`+e[0]+`;
}
return accum;
`))}(),numeric.truncVV=numeric.pointwise(["x[i]","y[i]"],"ret[i] = round(x[i]/y[i])*y[i];","var round = Math.round;"),numeric.truncVS=numeric.pointwise(["x[i]","y"],"ret[i] = round(x[i]/y)*y;","var round = Math.round;"),numeric.truncSV=numeric.pointwise(["x","y[i]"],"ret[i] = round(x/y[i])*y[i];","var round = Math.round;"),numeric.trunc=function(e,t){return typeof e=="object"?typeof t=="object"?numeric.truncVV(e,t):numeric.truncVS(e,t):typeof t=="object"?numeric.truncSV(e,t):Math.round(e/t)*t},numeric.inv=function(v){var t=numeric.dim(v),n=Math.abs,r=t[0],s=t[1],a=numeric.clone(v),o,c,l=numeric.identity(r),u,h,d,f,m,v;for(f=0;f<s;++f){var g=-1,_=-1;for(d=f;d!==r;++d)m=n(a[d][f]),m>_&&(g=d,_=m);for(c=a[g],a[g]=a[f],a[f]=c,h=l[g],l[g]=l[f],l[f]=h,v=c[f],m=f;m!==s;++m)c[m]/=v;for(m=s-1;m!==-1;--m)h[m]/=v;for(d=r-1;d!==-1;--d)if(d!==f){for(o=a[d],u=l[d],v=o[f],m=f+1;m!==s;++m)o[m]-=c[m]*v;for(m=s-1;m>0;--m)u[m]-=h[m]*v,--m,u[m]-=h[m]*v;m===0&&(u[0]-=h[0]*v)}}return l},numeric.det=function(e){var t=numeric.dim(e);if(t.length!==2||t[0]!==t[1])throw new Error("numeric: det() only works on square matrices");var n=t[0],r=1,s,a,o,c=numeric.clone(e),l,u,h,d,f;for(a=0;a<n-1;a++){for(o=a,s=a+1;s<n;s++)Math.abs(c[s][a])>Math.abs(c[o][a])&&(o=s);for(o!==a&&(d=c[o],c[o]=c[a],c[a]=d,r*=-1),l=c[a],s=a+1;s<n;s++){for(u=c[s],h=u[a]/l[a],o=a+1;o<n-1;o+=2)f=o+1,u[o]-=l[o]*h,u[f]-=l[f]*h;o!==n&&(u[o]-=l[o]*h)}if(l[a]===0)return 0;r*=l[a]}return r*c[a][a]},numeric.transpose=function(e){var t,n,r=e.length,s=e[0].length,a=Array(s),o,c,l;for(n=0;n<s;n++)a[n]=Array(r);for(t=r-1;t>=1;t-=2){for(c=e[t],o=e[t-1],n=s-1;n>=1;--n)l=a[n],l[t]=c[n],l[t-1]=o[n],--n,l=a[n],l[t]=c[n],l[t-1]=o[n];n===0&&(l=a[0],l[t]=c[0],l[t-1]=o[0])}if(t===0){for(o=e[0],n=s-1;n>=1;--n)a[n][0]=o[n],--n,a[n][0]=o[n];n===0&&(a[0][0]=o[0])}return a},numeric.negtranspose=function(e){var t,n,r=e.length,s=e[0].length,a=Array(s),o,c,l;for(n=0;n<s;n++)a[n]=Array(r);for(t=r-1;t>=1;t-=2){for(c=e[t],o=e[t-1],n=s-1;n>=1;--n)l=a[n],l[t]=-c[n],l[t-1]=-o[n],--n,l=a[n],l[t]=-c[n],l[t-1]=-o[n];n===0&&(l=a[0],l[t]=-c[0],l[t-1]=-o[0])}if(t===0){for(o=e[0],n=s-1;n>=1;--n)a[n][0]=-o[n],--n,a[n][0]=-o[n];n===0&&(a[0][0]=-o[0])}return a},numeric._random=function i(e,t){var n,r=e[t],s=Array(r),a;if(t===e.length-1){for(a=Math.random,n=r-1;n>=1;n-=2)s[n]=a(),s[n-1]=a();return n===0&&(s[0]=a()),s}for(n=r-1;n>=0;n--)s[n]=i(e,t+1);return s},numeric.random=function(e){return numeric._random(e,0)},numeric.norm2=function(e){return Math.sqrt(numeric.norm2Squared(e))},numeric.linspace=function(e,t,n){if(typeof n>"u"&&(n=Math.max(Math.round(t-e)+1,1)),n<2)return n===1?[e]:[];var r,s=Array(n);for(n--,r=n;r>=0;r--)s[r]=(r*t+(n-r)*e)/n;return s},numeric.getBlock=function(e,t,n){var r=numeric.dim(e);function s(a,o){var c,l=t[o],u=n[o]-l,h=Array(u);if(o===r.length-1){for(c=u;c>=0;c--)h[c]=a[c+l];return h}for(c=u;c>=0;c--)h[c]=s(a[c+l],o+1);return h}return s(e,0)},numeric.setBlock=function(e,t,n,r){var s=numeric.dim(e);function a(o,c,l){var u,h=t[l],d=n[l]-h;if(l===s.length-1)for(u=d;u>=0;u--)o[u+h]=c[u];for(u=d;u>=0;u--)a(o[u+h],c[u],l+1)}return a(e,r,0),e},numeric.getRange=function(e,t,n){var r=t.length,s=n.length,a,o,c=Array(r),l,u;for(a=r-1;a!==-1;--a)for(c[a]=Array(s),l=c[a],u=e[t[a]],o=s-1;o!==-1;--o)l[o]=u[n[o]];return c},numeric.blockMatrix=function(e){var t=numeric.dim(e);if(t.length<4)return numeric.blockMatrix([e]);var n=t[0],r=t[1],s,a,o,c,l;for(s=0,a=0,o=0;o<n;++o)s+=e[o][0].length;for(c=0;c<r;++c)a+=e[0][c][0].length;var u=Array(s);for(o=0;o<s;++o)u[o]=Array(a);var h=0,d,f,m,v,g;for(o=0;o<n;++o){for(d=a,c=r-1;c!==-1;--c)for(l=e[o][c],d-=l[0].length,m=l.length-1;m!==-1;--m)for(g=l[m],f=u[h+m],v=g.length-1;v!==-1;--v)f[d+v]=g[v];h+=e[o][0].length}return u},numeric.tensor=function(e,t){if(typeof e=="number"||typeof t=="number")return numeric.mul(e,t);var n=numeric.dim(e),r=numeric.dim(t);if(n.length!==1||r.length!==1)throw new Error("numeric: tensor product is only defined for vectors");var s=n[0],a=r[0],o=Array(s),c,l,u,h;for(l=s-1;l>=0;l--){for(c=Array(a),h=e[l],u=a-1;u>=3;--u)c[u]=h*t[u],--u,c[u]=h*t[u],--u,c[u]=h*t[u],--u,c[u]=h*t[u];for(;u>=0;)c[u]=h*t[u],--u;o[l]=c}return o},numeric.T=function(e,t){this.x=e,this.y=t},numeric.t=function(e,t){return new numeric.T(e,t)},numeric.Tbinop=function(e,t,n,r,s){if(numeric.indexOf,typeof s!="string"){var a;s="";for(a in numeric)numeric.hasOwnProperty(a)&&(e.indexOf(a)>=0||t.indexOf(a)>=0||n.indexOf(a)>=0||r.indexOf(a)>=0)&&a.length>1&&(s+="var "+a+" = numeric."+a+`;
`)}return Function(["y"],`var x = this;
if(!(y instanceof numeric.T)) { y = new numeric.T(y); }
`+s+`
if(x.y) {  if(y.y) {    return new numeric.T(`+r+`);
  }
  return new numeric.T(`+n+`);
}
if(y.y) {
  return new numeric.T(`+t+`);
}
return new numeric.T(`+e+`);
`)},numeric.T.prototype.add=numeric.Tbinop("add(x.x,y.x)","add(x.x,y.x),y.y","add(x.x,y.x),x.y","add(x.x,y.x),add(x.y,y.y)"),numeric.T.prototype.sub=numeric.Tbinop("sub(x.x,y.x)","sub(x.x,y.x),neg(y.y)","sub(x.x,y.x),x.y","sub(x.x,y.x),sub(x.y,y.y)"),numeric.T.prototype.mul=numeric.Tbinop("mul(x.x,y.x)","mul(x.x,y.x),mul(x.x,y.y)","mul(x.x,y.x),mul(x.y,y.x)","sub(mul(x.x,y.x),mul(x.y,y.y)),add(mul(x.x,y.y),mul(x.y,y.x))"),numeric.T.prototype.reciprocal=function(){var e=numeric.mul,t=numeric.div;if(this.y){var n=numeric.add(e(this.x,this.x),e(this.y,this.y));return new numeric.T(t(this.x,n),t(numeric.neg(this.y),n))}return new T(t(1,this.x))},numeric.T.prototype.div=function(e){if(e instanceof numeric.T||(e=new numeric.T(e)),e.y)return this.mul(e.reciprocal());var t=numeric.div;return this.y?new numeric.T(t(this.x,e.x),t(this.y,e.x)):new numeric.T(t(this.x,e.x))},numeric.T.prototype.dot=numeric.Tbinop("dot(x.x,y.x)","dot(x.x,y.x),dot(x.x,y.y)","dot(x.x,y.x),dot(x.y,y.x)","sub(dot(x.x,y.x),dot(x.y,y.y)),add(dot(x.x,y.y),dot(x.y,y.x))"),numeric.T.prototype.transpose=function(){var e=numeric.transpose,t=this.x,n=this.y;return n?new numeric.T(e(t),e(n)):new numeric.T(e(t))},numeric.T.prototype.transjugate=function(){var e=numeric.transpose,t=this.x,n=this.y;return n?new numeric.T(e(t),numeric.negtranspose(n)):new numeric.T(e(t))},numeric.Tunop=function(e,t,n){return typeof n!="string"&&(n=""),Function(`var x = this;
`+n+`
if(x.y) {  `+t+`;
}
`+e+`;
`)},numeric.T.prototype.exp=numeric.Tunop("return new numeric.T(ex)","return new numeric.T(mul(cos(x.y),ex),mul(sin(x.y),ex))","var ex = numeric.exp(x.x), cos = numeric.cos, sin = numeric.sin, mul = numeric.mul;"),numeric.T.prototype.conj=numeric.Tunop("return new numeric.T(x.x);","return new numeric.T(x.x,numeric.neg(x.y));"),numeric.T.prototype.neg=numeric.Tunop("return new numeric.T(neg(x.x));","return new numeric.T(neg(x.x),neg(x.y));","var neg = numeric.neg;"),numeric.T.prototype.sin=numeric.Tunop("return new numeric.T(numeric.sin(x.x))","return x.exp().sub(x.neg().exp()).div(new numeric.T(0,2));"),numeric.T.prototype.cos=numeric.Tunop("return new numeric.T(numeric.cos(x.x))","return x.exp().add(x.neg().exp()).div(2);"),numeric.T.prototype.abs=numeric.Tunop("return new numeric.T(numeric.abs(x.x));","return new numeric.T(numeric.sqrt(numeric.add(mul(x.x,x.x),mul(x.y,x.y))));","var mul = numeric.mul;"),numeric.T.prototype.log=numeric.Tunop("return new numeric.T(numeric.log(x.x));",`var theta = new numeric.T(numeric.atan2(x.y,x.x)), r = x.abs();
return new numeric.T(numeric.log(r.x),theta.x);`),numeric.T.prototype.norm2=numeric.Tunop("return numeric.norm2(x.x);",`var f = numeric.norm2Squared;
return Math.sqrt(f(x.x)+f(x.y));`),numeric.T.prototype.inv=function(){var e=this;if(typeof e.y>"u")return new numeric.T(numeric.inv(e.x));var t=e.x.length,v,g,_,n=numeric.identity(t),r=numeric.rep([t,t],0),s=numeric.clone(e.x),a=numeric.clone(e.y),o,c,l,u,h,d,f,m,v,g,_,F,x,y,R,L,G,M;for(v=0;v<t;v++){for(y=s[v][v],R=a[v][v],F=y*y+R*R,_=v,g=v+1;g<t;g++)y=s[g][v],R=a[g][v],x=y*y+R*R,x>F&&(_=g,F=x);for(_!==v&&(M=s[v],s[v]=s[_],s[_]=M,M=a[v],a[v]=a[_],a[_]=M,M=n[v],n[v]=n[_],n[_]=M,M=r[v],r[v]=r[_],r[_]=M),o=s[v],c=a[v],h=n[v],d=r[v],y=o[v],R=c[v],g=v+1;g<t;g++)L=o[g],G=c[g],o[g]=(L*y+G*R)/F,c[g]=(G*y-L*R)/F;for(g=0;g<t;g++)L=h[g],G=d[g],h[g]=(L*y+G*R)/F,d[g]=(G*y-L*R)/F;for(g=v+1;g<t;g++){for(l=s[g],u=a[g],f=n[g],m=r[g],y=l[v],R=u[v],_=v+1;_<t;_++)L=o[_],G=c[_],l[_]-=L*y-G*R,u[_]-=G*y+L*R;for(_=0;_<t;_++)L=h[_],G=d[_],f[_]-=L*y-G*R,m[_]-=G*y+L*R}}for(v=t-1;v>0;v--)for(h=n[v],d=r[v],g=v-1;g>=0;g--)for(f=n[g],m=r[g],y=s[g][v],R=a[g][v],_=t-1;_>=0;_--)L=h[_],G=d[_],f[_]-=y*L-R*G,m[_]-=y*G+R*L;return new numeric.T(n,r)},numeric.T.prototype.get=function(e){var t=this.x,n=this.y,r=0,s,a=e.length;if(n){for(;r<a;)s=e[r],t=t[s],n=n[s],r++;return new numeric.T(t,n)}for(;r<a;)s=e[r],t=t[s],r++;return new numeric.T(t)},numeric.T.prototype.set=function(e,t){var n=this.x,r=this.y,s=0,a,o=e.length,c=t.x,l=t.y;if(o===0)return l?this.y=l:r&&(this.y=void 0),this.x=n,this;if(l){for(r||(r=numeric.rep(numeric.dim(n),0),this.y=r);s<o-1;)a=e[s],n=n[a],r=r[a],s++;return a=e[s],n[a]=c,r[a]=l,this}if(r){for(;s<o-1;)a=e[s],n=n[a],r=r[a],s++;return a=e[s],n[a]=c,c instanceof Array?r[a]=numeric.rep(numeric.dim(c),0):r[a]=0,this}for(;s<o-1;)a=e[s],n=n[a],s++;return a=e[s],n[a]=c,this},numeric.T.prototype.getRows=function(e,t){var n=t-e+1,r,s=Array(n),a,o=this.x,c=this.y;for(r=e;r<=t;r++)s[r-e]=o[r];if(c){for(a=Array(n),r=e;r<=t;r++)a[r-e]=c[r];return new numeric.T(s,a)}return new numeric.T(s)},numeric.T.prototype.setRows=function(e,t,n){var r,s=this.x,a=this.y,o=n.x,c=n.y;for(r=e;r<=t;r++)s[r]=o[r-e];if(c)for(a||(a=numeric.rep(numeric.dim(s),0),this.y=a),r=e;r<=t;r++)a[r]=c[r-e];else if(a)for(r=e;r<=t;r++)a[r]=numeric.rep([o[r-e].length],0);return this},numeric.T.prototype.getRow=function(e){var t=this.x,n=this.y;return n?new numeric.T(t[e],n[e]):new numeric.T(t[e])},numeric.T.prototype.setRow=function(e,t){var n=this.x,r=this.y,s=t.x,a=t.y;return n[e]=s,a?(r||(r=numeric.rep(numeric.dim(n),0),this.y=r),r[e]=a):r&&(r=numeric.rep([s.length],0)),this},numeric.T.prototype.getBlock=function(e,t){var n=this.x,r=this.y,s=numeric.getBlock;return r?new numeric.T(s(n,e,t),s(r,e,t)):new numeric.T(s(n,e,t))},numeric.T.prototype.setBlock=function(e,t,n){n instanceof numeric.T||(n=new numeric.T(n));var r=this.x,s=this.y,a=numeric.setBlock,o=n.x,c=n.y;if(c)return s||(this.y=numeric.rep(numeric.dim(this),0),s=this.y),a(r,e,t,o),a(s,e,t,c),this;a(r,e,t,o),s&&a(s,e,t,numeric.rep(numeric.dim(o),0))},numeric.T.rep=function(e,t){var n=numeric.T;t instanceof n||(t=new n(t));var r=t.x,s=t.y,a=numeric.rep;return s?new n(a(e,r),a(e,s)):new n(a(e,r))},numeric.T.diag=function(e){e instanceof numeric.T||(e=new numeric.T(e));var t=e.x,n=e.y,r=numeric.diag;return n?new numeric.T(r(t),r(n)):new numeric.T(r(t))},numeric.T.eig=function(){if(this.y)throw new Error("eig: not implemented for complex matrices.");return numeric.eig(this.x)},numeric.T.identity=function(e){return new numeric.T(numeric.identity(e))},numeric.T.prototype.getDiag=function(){var e=numeric,t=this.x,n=this.y;return n?new e.T(e.getDiag(t),e.getDiag(n)):new e.T(e.getDiag(t))},numeric.house=function(e){var t=numeric.clone(e),n=e[0]>=0?1:-1,r=n*numeric.norm2(e);t[0]+=r;var s=numeric.norm2(t);if(s===0)throw new Error("eig: internal error");return numeric.div(t,s)},numeric.toUpperHessenberg=function(e){var t=numeric.dim(e);if(t.length!==2||t[0]!==t[1])throw new Error("numeric: toUpperHessenberg() only works on square matrices");var n=t[0],r,s,a,o,c,l=numeric.clone(e),u,h,d,f,m=numeric.identity(n),v;for(s=0;s<n-2;s++){for(o=Array(n-s-1),r=s+1;r<n;r++)o[r-s-1]=l[r][s];if(numeric.norm2(o)>0){for(c=numeric.house(o),u=numeric.getBlock(l,[s+1,s],[n-1,n-1]),h=numeric.tensor(c,numeric.dot(c,u)),r=s+1;r<n;r++)for(d=l[r],f=h[r-s-1],a=s;a<n;a++)d[a]-=2*f[a-s];for(u=numeric.getBlock(l,[0,s+1],[n-1,n-1]),h=numeric.tensor(numeric.dot(u,c),c),r=0;r<n;r++)for(d=l[r],f=h[r],a=s+1;a<n;a++)d[a]-=2*f[a-s-1];for(u=Array(n-s-1),r=s+1;r<n;r++)u[r-s-1]=m[r];for(h=numeric.tensor(c,numeric.dot(c,u)),r=s+1;r<n;r++)for(v=m[r],f=h[r-s-1],a=0;a<n;a++)v[a]-=2*f[a]}}return{H:l,Q:m}},numeric.epsilon=2220446049250313e-31,numeric.QRFrancis=function(i,e){typeof e>"u"&&(e=1e4),i=numeric.clone(i),numeric.clone(i);var t=numeric.dim(i),n=t[0],r,s,a,o,c,l,u,h,d,f=numeric.identity(n),m,v,g,_,F,x,y,R,L;if(n<3)return{Q:f,B:[[0,n-1]]};var G=numeric.epsilon;for(L=0;L<e;L++){for(y=0;y<n-1;y++)if(Math.abs(i[y+1][y])<G*(Math.abs(i[y][y])+Math.abs(i[y+1][y+1]))){var M=numeric.QRFrancis(numeric.getBlock(i,[0,0],[y,y]),e),E=numeric.QRFrancis(numeric.getBlock(i,[y+1,y+1],[n-1,n-1]),e);for(g=Array(y+1),x=0;x<=y;x++)g[x]=f[x];for(_=numeric.dot(M.Q,g),x=0;x<=y;x++)f[x]=_[x];for(g=Array(n-y-1),x=y+1;x<n;x++)g[x-y-1]=f[x];for(_=numeric.dot(E.Q,g),x=y+1;x<n;x++)f[x]=_[x-y-1];return{Q:f,B:M.B.concat(numeric.add(E.B,y+1))}}if(a=i[n-2][n-2],o=i[n-2][n-1],c=i[n-1][n-2],l=i[n-1][n-1],h=a+l,u=a*l-o*c,d=numeric.getBlock(i,[0,0],[2,2]),h*h>=4*u){var b,I;b=.5*(h+Math.sqrt(h*h-4*u)),I=.5*(h-Math.sqrt(h*h-4*u)),d=numeric.add(numeric.sub(numeric.dot(d,d),numeric.mul(d,b+I)),numeric.diag(numeric.rep([3],b*I)))}else d=numeric.add(numeric.sub(numeric.dot(d,d),numeric.mul(d,h)),numeric.diag(numeric.rep([3],u)));for(r=[d[0][0],d[1][0],d[2][0]],s=numeric.house(r),g=[i[0],i[1],i[2]],_=numeric.tensor(s,numeric.dot(s,g)),x=0;x<3;x++)for(v=i[x],F=_[x],R=0;R<n;R++)v[R]-=2*F[R];for(g=numeric.getBlock(i,[0,0],[n-1,2]),_=numeric.tensor(numeric.dot(g,s),s),x=0;x<n;x++)for(v=i[x],F=_[x],R=0;R<3;R++)v[R]-=2*F[R];for(g=[f[0],f[1],f[2]],_=numeric.tensor(s,numeric.dot(s,g)),x=0;x<3;x++)for(m=f[x],F=_[x],R=0;R<n;R++)m[R]-=2*F[R];var H;for(y=0;y<n-2;y++){for(R=y;R<=y+1;R++)if(Math.abs(i[R+1][R])<G*(Math.abs(i[R][R])+Math.abs(i[R+1][R+1]))){var M=numeric.QRFrancis(numeric.getBlock(i,[0,0],[R,R]),e),E=numeric.QRFrancis(numeric.getBlock(i,[R+1,R+1],[n-1,n-1]),e);for(g=Array(R+1),x=0;x<=R;x++)g[x]=f[x];for(_=numeric.dot(M.Q,g),x=0;x<=R;x++)f[x]=_[x];for(g=Array(n-R-1),x=R+1;x<n;x++)g[x-R-1]=f[x];for(_=numeric.dot(E.Q,g),x=R+1;x<n;x++)f[x]=_[x-R-1];return{Q:f,B:M.B.concat(numeric.add(E.B,R+1))}}for(H=Math.min(n-1,y+3),r=Array(H-y),x=y+1;x<=H;x++)r[x-y-1]=i[x][y];for(s=numeric.house(r),g=numeric.getBlock(i,[y+1,y],[H,n-1]),_=numeric.tensor(s,numeric.dot(s,g)),x=y+1;x<=H;x++)for(v=i[x],F=_[x-y-1],R=y;R<n;R++)v[R]-=2*F[R-y];for(g=numeric.getBlock(i,[0,y+1],[n-1,H]),_=numeric.tensor(numeric.dot(g,s),s),x=0;x<n;x++)for(v=i[x],F=_[x],R=y+1;R<=H;R++)v[R]-=2*F[R-y-1];for(g=Array(H-y),x=y+1;x<=H;x++)g[x-y-1]=f[x];for(_=numeric.tensor(s,numeric.dot(s,g)),x=y+1;x<=H;x++)for(m=f[x],F=_[x-y-1],R=0;R<n;R++)m[R]-=2*F[R]}}throw new Error("numeric: eigenvalue iteration does not converge -- increase maxiter?")},numeric.eig=function(e,t){var n=numeric.toUpperHessenberg(e),r=numeric.QRFrancis(n.H,t),s=numeric.T,q=e.length,a,o,c=r.B,l=numeric.dot(r.Q,numeric.dot(n.H,numeric.transpose(r.Q))),u=new s(numeric.dot(r.Q,n.Q)),h,d=c.length,f,m,v,g,_,F,x,y,R,L,G,M,E,b,I=Math.sqrt;for(o=0;o<d;o++)if(a=c[o][0],a!==c[o][1]){if(f=a+1,m=l[a][a],v=l[a][f],g=l[f][a],_=l[f][f],v===0&&g===0)continue;F=-m-_,x=m*_-v*g,y=F*F-4*x,y>=0?(F<0?R=-.5*(F-I(y)):R=-.5*(F+I(y)),E=(m-R)*(m-R)+v*v,b=g*g+(_-R)*(_-R),E>b?(E=I(E),G=(m-R)/E,M=v/E):(b=I(b),G=g/b,M=(_-R)/b),h=new s([[M,-G],[G,M]]),u.setRows(a,f,h.dot(u.getRows(a,f)))):(R=-.5*F,L=.5*I(-y),E=(m-R)*(m-R)+v*v,b=g*g+(_-R)*(_-R),E>b?(E=I(E+L*L),G=(m-R)/E,M=v/E,R=0,L/=E):(b=I(b+L*L),G=g/b,M=(_-R)/b,R=L/b,L=0),h=new s([[M,-G],[G,M]],[[R,L],[L,-R]]),u.setRows(a,f,h.dot(u.getRows(a,f))))}var H=u.dot(e).dot(u.transjugate()),q=e.length,ee=numeric.T.identity(q);for(f=0;f<q;f++)if(f>0)for(o=f-1;o>=0;o--){var de=H.get([o,o]),fe=H.get([f,f]);if(numeric.neq(de.x,fe.x)||numeric.neq(de.y,fe.y))R=H.getRow(o).getBlock([o],[f-1]),L=ee.getRow(f).getBlock([o],[f-1]),ee.set([f,o],H.get([o,f]).neg().sub(R.dot(L)).div(de.sub(fe)));else{ee.setRow(f,ee.getRow(o));continue}}for(f=0;f<q;f++)R=ee.getRow(f),ee.setRow(f,R.div(R.norm2()));return ee=ee.transpose(),ee=u.transjugate().dot(ee),{lambda:H.getDiag(),E:ee}},numeric.ccsSparse=function(e){var t=e.length,o,n,r,s,a=[];for(r=t-1;r!==-1;--r){n=e[r];for(s in n){for(s=parseInt(s);s>=a.length;)a[a.length]=0;n[s]!==0&&a[s]++}}var o=a.length,c=Array(o+1);for(c[0]=0,r=0;r<o;++r)c[r+1]=c[r]+a[r];var l=Array(c[o]),u=Array(c[o]);for(r=t-1;r!==-1;--r){n=e[r];for(s in n)n[s]!==0&&(a[s]--,l[c[s]+a[s]]=r,u[c[s]+a[s]]=n[s])}return[c,l,u]},numeric.ccsFull=function(e){var t=e[0],n=e[1],r=e[2],s=numeric.ccsDim(e),a=s[0],o=s[1],c,l,u,h,d=numeric.rep([a,o],0);for(c=0;c<o;c++)for(u=t[c],h=t[c+1],l=u;l<h;++l)d[n[l]][c]=r[l];return d},numeric.ccsTSolve=function(e,t,n,r,s){var a=e[0],o=e[1],c=e[2],l=a.length-1,u=Math.max,h=0;typeof r>"u"&&(n=numeric.rep([l],0)),typeof r>"u"&&(r=numeric.linspace(0,n.length-1)),typeof s>"u"&&(s=[]);function d(y){var R;if(n[y]===0){for(n[y]=1,R=a[y];R<a[y+1];++R)d(o[R]);s[h]=y,++h}}var f,m,v,g,_,F,x;for(f=r.length-1;f!==-1;--f)d(r[f]);for(s.length=h,f=s.length-1;f!==-1;--f)n[s[f]]=0;for(f=r.length-1;f!==-1;--f)m=r[f],n[m]=t[m];for(f=s.length-1;f!==-1;--f){for(m=s[f],v=a[m],g=u(a[m+1],v),_=v;_!==g;++_)if(o[_]===m){n[m]/=c[_];break}for(x=n[m],_=v;_!==g;++_)F=o[_],F!==m&&(n[F]-=x*c[_])}return n},numeric.ccsDFS=function(e){this.k=Array(e),this.k1=Array(e),this.j=Array(e)},numeric.ccsDFS.prototype.dfs=function(e,t,n,r,s,a){var o=0,c,l=s.length,u=this.k,h=this.k1,d=this.j,f,m;if(r[e]===0)for(r[e]=1,d[0]=e,u[0]=f=t[e],h[0]=m=t[e+1];;)if(f>=m){if(s[l]=d[o],o===0)return;++l,--o,f=u[o],m=h[o]}else c=a[n[f]],r[c]===0?(r[c]=1,u[o]=f,++o,d[o]=c,f=t[c],h[o]=m=t[c+1]):++f},numeric.ccsLPSolve=function(e,t,n,r,s,a,o){var c=e[0],l=e[1],u=e[2];c.length-1;var h=t[0],d=t[1],f=t[2],m,v,g,_,F,x,y,R,L;for(v=h[s],g=h[s+1],r.length=0,m=v;m<g;++m)o.dfs(a[d[m]],c,l,n,r,a);for(m=r.length-1;m!==-1;--m)n[r[m]]=0;for(m=v;m!==g;++m)_=a[d[m]],n[_]=f[m];for(m=r.length-1;m!==-1;--m){for(_=r[m],F=c[_],x=c[_+1],y=F;y<x;++y)if(a[l[y]]===_){n[_]/=u[y];break}for(L=n[_],y=F;y<x;++y)R=a[l[y]],R!==_&&(n[R]-=L*u[y])}return n},numeric.ccsLUP1=function(e,t){var n=e[0].length-1,r=[numeric.rep([n+1],0),[],[]],s=[numeric.rep([n+1],0),[],[]],a=r[0],o=r[1],c=r[2],l=s[0],u=s[1],h=s[2],d=numeric.rep([n],0),f=numeric.rep([n],0),m,v,g,_,F,x,y,R=numeric.ccsLPSolve,L=Math.abs,G=numeric.linspace(0,n-1),M=numeric.linspace(0,n-1),E=new numeric.ccsDFS(n);for(typeof t>"u"&&(t=1),m=0;m<n;++m){for(R(r,e,d,f,m,M,E),_=-1,F=-1,v=f.length-1;v!==-1;--v)g=f[v],!(g<=m)&&(x=L(d[g]),x>_&&(F=g,_=x));for(L(d[m])<t*_&&(v=G[m],_=G[F],G[m]=_,M[_]=m,G[F]=v,M[v]=F,_=d[m],d[m]=d[F],d[F]=_),_=a[m],F=l[m],y=d[m],o[_]=G[m],c[_]=1,++_,v=f.length-1;v!==-1;--v)g=f[v],x=d[g],f[v]=0,d[g]=0,g<=m?(u[F]=g,h[F]=x,++F):(o[_]=G[g],c[_]=x/y,++_);a[m+1]=_,l[m+1]=F}for(v=o.length-1;v!==-1;--v)o[v]=M[o[v]];return{L:r,U:s,P:G,Pinv:M}},numeric.ccsDFS0=function(e){this.k=Array(e),this.k1=Array(e),this.j=Array(e)},numeric.ccsDFS0.prototype.dfs=function(e,t,n,r,s,a,o){var c=0,l,u=s.length,h=this.k,d=this.k1,f=this.j,m,v;if(r[e]===0)for(r[e]=1,f[0]=e,h[0]=m=t[a[e]],d[0]=v=t[a[e]+1];;){if(isNaN(m))throw new Error("Ow!");if(m>=v){if(s[u]=a[f[c]],c===0)return;++u,--c,m=h[c],v=d[c]}else l=n[m],r[l]===0?(r[l]=1,h[c]=m,++c,f[c]=l,l=a[l],m=t[l],d[c]=v=t[l+1]):++m}},numeric.ccsLPSolve0=function(e,t,n,r,s,a,o,c){var l=e[0],u=e[1],h=e[2];l.length-1;var d=t[0],f=t[1],m=t[2],v,g,_,F,x,y,R,L,G;for(g=d[s],_=d[s+1],r.length=0,v=g;v<_;++v)c.dfs(f[v],l,u,n,r,a,o);for(v=r.length-1;v!==-1;--v)F=r[v],n[o[F]]=0;for(v=g;v!==_;++v)F=f[v],n[F]=m[v];for(v=r.length-1;v!==-1;--v){for(F=r[v],L=o[F],x=l[F],y=l[F+1],R=x;R<y;++R)if(u[R]===L){n[L]/=h[R];break}for(G=n[L],R=x;R<y;++R)n[u[R]]-=G*h[R];n[L]=G}},numeric.ccsLUP0=function(e,t){var n=e[0].length-1,r=[numeric.rep([n+1],0),[],[]],s=[numeric.rep([n+1],0),[],[]],a=r[0],o=r[1],c=r[2],l=s[0],u=s[1],h=s[2],d=numeric.rep([n],0),f=numeric.rep([n],0),m,v,g,_,F,x,y,R=numeric.ccsLPSolve0,L=Math.abs,G=numeric.linspace(0,n-1),M=numeric.linspace(0,n-1),E=new numeric.ccsDFS0(n);for(typeof t>"u"&&(t=1),m=0;m<n;++m){for(R(r,e,d,f,m,M,G,E),_=-1,F=-1,v=f.length-1;v!==-1;--v)g=f[v],!(g<=m)&&(x=L(d[G[g]]),x>_&&(F=g,_=x));for(L(d[G[m]])<t*_&&(v=G[m],_=G[F],G[m]=_,M[_]=m,G[F]=v,M[v]=F),_=a[m],F=l[m],y=d[G[m]],o[_]=G[m],c[_]=1,++_,v=f.length-1;v!==-1;--v)g=f[v],x=d[G[g]],f[v]=0,d[G[g]]=0,g<=m?(u[F]=g,h[F]=x,++F):(o[_]=G[g],c[_]=x/y,++_);a[m+1]=_,l[m+1]=F}for(v=o.length-1;v!==-1;--v)o[v]=M[o[v]];return{L:r,U:s,P:G,Pinv:M}},numeric.ccsLUP=numeric.ccsLUP0,numeric.ccsDim=function(e){return[numeric.sup(e[1])+1,e[0].length-1]},numeric.ccsGetBlock=function(e,t,n){var r=numeric.ccsDim(e),s=r[0],a=r[1];typeof t>"u"?t=numeric.linspace(0,s-1):typeof t=="number"&&(t=[t]),typeof n>"u"?n=numeric.linspace(0,a-1):typeof n=="number"&&(n=[n]);var o,c=t.length,l,u=n.length,h,d,f,m=numeric.rep([a],0),v=[],g=[],_=[m,v,g],F=e[0],x=e[1],y=e[2],R=numeric.rep([s],0),L=0,G=numeric.rep([s],0);for(l=0;l<u;++l){d=n[l];var M=F[d],E=F[d+1];for(o=M;o<E;++o)h=x[o],G[h]=1,R[h]=y[o];for(o=0;o<c;++o)f=t[o],G[f]&&(v[L]=o,g[L]=R[t[o]],++L);for(o=M;o<E;++o)h=x[o],G[h]=0;m[l+1]=L}return _},numeric.ccsDot=function(e,t){var n=e[0],r=e[1],s=e[2],a=t[0],o=t[1],c=t[2],l=numeric.ccsDim(e),u=numeric.ccsDim(t),h=l[0];l[1];var d=u[1],f=numeric.rep([h],0),m=numeric.rep([h],0),v=Array(h),g=numeric.rep([d],0),_=[],F=[],x=[g,_,F],y,R,L,G,M,E,b,I,H,q,ee;for(L=0;L!==d;++L){for(G=a[L],M=a[L+1],H=0,R=G;R<M;++R)for(q=o[R],ee=c[R],E=n[q],b=n[q+1],y=E;y<b;++y)I=r[y],m[I]===0&&(v[H]=I,m[I]=1,H=H+1),f[I]=f[I]+s[y]*ee;for(G=g[L],M=G+H,g[L+1]=M,R=H-1;R!==-1;--R)ee=G+R,y=v[R],_[ee]=y,F[ee]=f[y],m[y]=0,f[y]=0;g[L+1]=g[L]+H}return x},numeric.ccsLUPSolve=function(e,t){var n=e.L,r=e.U;e.P;var s=t[0],a=!1;typeof s!="object"&&(t=[[0,t.length],numeric.linspace(0,t.length-1),t],s=t[0],a=!0);var o=t[1],c=t[2],l=n[0].length-1,u=s.length-1,h=numeric.rep([l],0),d=Array(l),f=numeric.rep([l],0),m=Array(l),v=numeric.rep([u+1],0),g=[],_=[],F=numeric.ccsTSolve,x,y,R,L,G,M,E=0;for(x=0;x<u;++x){for(G=0,R=s[x],L=s[x+1],y=R;y<L;++y)M=e.Pinv[o[y]],m[G]=M,f[M]=c[y],++G;for(m.length=G,F(n,f,h,m,d),y=m.length-1;y!==-1;--y)f[m[y]]=0;if(F(r,h,f,d,m),a)return f;for(y=d.length-1;y!==-1;--y)h[d[y]]=0;for(y=m.length-1;y!==-1;--y)M=m[y],g[E]=M,_[E]=f[M],f[M]=0,++E;v[x+1]=E}return[v,g,_]},numeric.ccsbinop=function(e,t){return typeof t>"u"&&(t=""),Function("X","Y",`var Xi = X[0], Xj = X[1], Xv = X[2];
var Yi = Y[0], Yj = Y[1], Yv = Y[2];
var n = Xi.length-1,m = Math.max(numeric.sup(Xj),numeric.sup(Yj))+1;
var Zi = numeric.rep([n+1],0), Zj = [], Zv = [];
var x = numeric.rep([m],0),y = numeric.rep([m],0);
var xk,yk,zk;
var i,j,j0,j1,k,p=0;
`+t+`for(i=0;i<n;++i) {
  j0 = Xi[i]; j1 = Xi[i+1];
  for(j=j0;j!==j1;++j) {
    k = Xj[j];
    x[k] = 1;
    Zj[p] = k;
    ++p;
  }
  j0 = Yi[i]; j1 = Yi[i+1];
  for(j=j0;j!==j1;++j) {
    k = Yj[j];
    y[k] = Yv[j];
    if(x[k] === 0) {
      Zj[p] = k;
      ++p;
    }
  }
  Zi[i+1] = p;
  j0 = Xi[i]; j1 = Xi[i+1];
  for(j=j0;j!==j1;++j) x[Xj[j]] = Xv[j];
  j0 = Zi[i]; j1 = Zi[i+1];
  for(j=j0;j!==j1;++j) {
    k = Zj[j];
    xk = x[k];
    yk = y[k];
`+e+`
    Zv[j] = zk;
  }
  j0 = Xi[i]; j1 = Xi[i+1];
  for(j=j0;j!==j1;++j) x[Xj[j]] = 0;
  j0 = Yi[i]; j1 = Yi[i+1];
  for(j=j0;j!==j1;++j) y[Yj[j]] = 0;
}
return [Zi,Zj,Zv];`)},function(){var k,A,B,C;for(k in numeric.ops2)isFinite(eval("1"+numeric.ops2[k]+"0"))?A="[Y[0],Y[1],numeric."+k+"(X,Y[2])]":A="NaN",isFinite(eval("0"+numeric.ops2[k]+"1"))?B="[X[0],X[1],numeric."+k+"(X[2],Y)]":B="NaN",isFinite(eval("1"+numeric.ops2[k]+"0"))&&isFinite(eval("0"+numeric.ops2[k]+"1"))?C="numeric.ccs"+k+"MM(X,Y)":C="NaN",numeric["ccs"+k+"MM"]=numeric.ccsbinop("zk = xk "+numeric.ops2[k]+"yk;"),numeric["ccs"+k]=Function("X","Y",'if(typeof X === "number") return '+A+`;
if(typeof Y === "number") return `+B+`;
return `+C+`;
`)}(),numeric.ccsScatter=function i(e){var t=e[0],n=e[1],r=e[2],s=numeric.sup(n)+1,a=t.length,o=numeric.rep([s],0),c=Array(a),l=Array(a),u=numeric.rep([s],0),h;for(h=0;h<a;++h)u[n[h]]++;for(h=0;h<s;++h)o[h+1]=o[h]+u[h];var d=o.slice(0),f,m;for(h=0;h<a;++h)m=n[h],f=d[m],c[f]=t[h],l[f]=r[h],d[m]=d[m]+1;return[o,c,l]},numeric.ccsGather=function i(e){var t=e[0],n=e[1],r=e[2],s=t.length-1,a=n.length,o=Array(a),c=Array(a),l=Array(a),u,h,d,f,m;for(m=0,u=0;u<s;++u)for(d=t[u],f=t[u+1],h=d;h!==f;++h)c[m]=u,o[m]=n[h],l[m]=r[h],++m;return[o,c,l]},numeric.sdim=function i(e,t,n){if(typeof t>"u"&&(t=[]),typeof e!="object")return t;typeof n>"u"&&(n=0),n in t||(t[n]=0),e.length>t[n]&&(t[n]=e.length);var r;for(r in e)e.hasOwnProperty(r)&&i(e[r],t,n+1);return t},numeric.sclone=function i(e,t,n){typeof t>"u"&&(t=0),typeof n>"u"&&(n=numeric.sdim(e).length);var r,s=Array(e.length);if(t===n-1){for(r in e)e.hasOwnProperty(r)&&(s[r]=e[r]);return s}for(r in e)e.hasOwnProperty(r)&&(s[r]=i(e[r],t+1,n));return s},numeric.sdiag=function i(e){var t=e.length,n,r=Array(t),s;for(n=t-1;n>=1;n-=2)s=n-1,r[n]=[],r[n][n]=e[n],r[s]=[],r[s][s]=e[s];return n===0&&(r[0]=[],r[0][0]=e[n]),r},numeric.sidentity=function i(e){return numeric.sdiag(numeric.rep([e],1))},numeric.stranspose=function i(e){var t=[];e.length;var n,r,s;for(n in e)if(e.hasOwnProperty(n)){s=e[n];for(r in s)s.hasOwnProperty(r)&&(typeof t[r]!="object"&&(t[r]=[]),t[r][n]=s[r])}return t},numeric.sLUP=function i(e,t){throw new Error("The function numeric.sLUP had a bug in it and has been removed. Please use the new numeric.ccsLUP function instead.")},numeric.sdotMM=function i(e,t){var n=e.length;t.length;var r=numeric.stranspose(t),s=r.length,a,o,c,l,u,h,d=Array(n),f;for(c=n-1;c>=0;c--){for(f=[],a=e[c],u=s-1;u>=0;u--){h=0,o=r[u];for(l in a)a.hasOwnProperty(l)&&l in o&&(h+=a[l]*o[l]);h&&(f[u]=h)}d[c]=f}return d},numeric.sdotMV=function i(e,t){var n=e.length,r,s,a,o=Array(n),c;for(s=n-1;s>=0;s--){r=e[s],c=0;for(a in r)r.hasOwnProperty(a)&&t[a]&&(c+=r[a]*t[a]);c&&(o[s]=c)}return o},numeric.sdotVM=function i(e,t){var n,r,s,a,o=[];for(n in e)if(e.hasOwnProperty(n)){s=t[n],a=e[n];for(r in s)s.hasOwnProperty(r)&&(o[r]||(o[r]=0),o[r]+=a*s[r])}return o},numeric.sdotVV=function i(e,t){var n,r=0;for(n in e)e[n]&&t[n]&&(r+=e[n]*t[n]);return r},numeric.sdot=function i(e,t){var n=numeric.sdim(e).length,r=numeric.sdim(t).length,s=n*1e3+r;switch(s){case 0:return e*t;case 1001:return numeric.sdotVV(e,t);case 2001:return numeric.sdotMV(e,t);case 1002:return numeric.sdotVM(e,t);case 2002:return numeric.sdotMM(e,t);default:throw new Error("numeric.sdot not implemented for tensors of order "+n+" and "+r)}},numeric.sscatter=function i(e){var t=e[0].length,n,r,s,a=e.length,o=[],c;for(r=t-1;r>=0;--r)if(e[a-1][r]){for(c=o,s=0;s<a-2;s++)n=e[s][r],c[n]||(c[n]=[]),c=c[n];c[e[s][r]]=e[s+1][r]}return o},numeric.sgather=function i(e,t,n){typeof t>"u"&&(t=[]),typeof n>"u"&&(n=[]);var r,s,a;r=n.length;for(s in e)if(e.hasOwnProperty(s))if(n[r]=parseInt(s),a=e[s],typeof a=="number"){if(a){if(t.length===0)for(s=r+1;s>=0;--s)t[s]=[];for(s=r;s>=0;--s)t[s].push(n[s]);t[r+1].push(a)}}else i(a,t,n);return n.length>r&&n.pop(),t},numeric.cLU=function i(e){var t=e[0],n=e[1],r=e[2],E=t.length,s=0,a,o,c,l,u,h;for(a=0;a<E;a++)t[a]>s&&(s=t[a]);s++;var d=Array(s),f=Array(s),m=numeric.rep([s],1/0),v=numeric.rep([s],-1/0),x,y,g;for(c=0;c<E;c++)a=t[c],o=n[c],o<m[a]&&(m[a]=o),o>v[a]&&(v[a]=o);for(a=0;a<s-1;a++)v[a]>v[a+1]&&(v[a+1]=v[a]);for(a=s-1;a>=1;a--)m[a]<m[a-1]&&(m[a-1]=m[a]);var _=0,F=0;for(a=0;a<s;a++)f[a]=numeric.rep([v[a]-m[a]+1],0),d[a]=numeric.rep([a-m[a]],0),_+=a-m[a]+1,F+=v[a]-a+1;for(c=0;c<E;c++)a=t[c],f[a][n[c]-m[a]]=r[c];for(a=0;a<s-1;a++)for(l=a-m[a],x=f[a],o=a+1;m[o]<=a&&o<s;o++)if(u=a-m[o],h=v[a]-a,y=f[o],g=y[u]/x[l],g){for(c=1;c<=h;c++)y[c+u]-=g*x[c+l];d[o][a-m[o]]=g}var x=[],y=[],R=[],L=[],G=[],M=[],E,b,I;for(E=0,b=0,a=0;a<s;a++){for(l=m[a],u=v[a],I=f[a],o=a;o<=u;o++)I[o-l]&&(x[E]=a,y[E]=o,R[E]=I[o-l],E++);for(I=d[a],o=l;o<a;o++)I[o-l]&&(L[b]=a,G[b]=o,M[b]=I[o-l],b++);L[b]=a,G[b]=a,M[b]=1,b++}return{U:[x,y,R],L:[L,G,M]}},numeric.cLUsolve=function i(e,t){var n=e.L,r=e.U,s=numeric.clone(t),a=n[0],o=n[1],c=n[2],l=r[0],u=r[1],h=r[2],d=l.length;a.length;var f=s.length,m,v;for(v=0,m=0;m<f;m++){for(;o[v]<m;)s[m]-=c[v]*s[o[v]],v++;v++}for(v=d-1,m=f-1;m>=0;m--){for(;u[v]>m;)s[m]-=h[v]*s[u[v]],v--;s[m]/=h[v],v--}return s},numeric.cgrid=function i(e,t){typeof e=="number"&&(e=[e,e]);var n=numeric.rep(e,-1),r,s,a;if(typeof t!="function")switch(t){case"L":t=function(o,c){return o>=e[0]/2||c<e[1]/2};break;default:t=function(o,c){return!0};break}for(a=0,r=1;r<e[0]-1;r++)for(s=1;s<e[1]-1;s++)t(r,s)&&(n[r][s]=a,a++);return n},numeric.cdelsq=function i(e){var t=[[-1,0],[0,-1],[0,1],[1,0]],n=numeric.dim(e),r=n[0],s=n[1],a,o,c,l,u,h=[],d=[],f=[];for(a=1;a<r-1;a++)for(o=1;o<s-1;o++)if(!(e[a][o]<0)){for(c=0;c<4;c++)l=a+t[c][0],u=o+t[c][1],!(e[l][u]<0)&&(h.push(e[a][o]),d.push(e[l][u]),f.push(-1));h.push(e[a][o]),d.push(e[a][o]),f.push(4)}return[h,d,f]},numeric.cdotMV=function i(e,t){var n,r=e[0],s=e[1],a=e[2],o,c=r.length,l;for(l=0,o=0;o<c;o++)r[o]>l&&(l=r[o]);for(l++,n=numeric.rep([l],0),o=0;o<c;o++)n[r[o]]+=a[o]*t[s[o]];return n},numeric.Spline=function i(e,t,n,r,s){this.x=e,this.yl=t,this.yr=n,this.kl=r,this.kr=s},numeric.Spline.prototype._at=function i(c,t){var n=this.x,r=this.yl,s=this.yr,a=this.kl,o=this.kr,c,l,u,h,d=numeric.add,f=numeric.sub,m=numeric.mul;l=f(m(a[t],n[t+1]-n[t]),f(s[t+1],r[t])),u=d(m(o[t+1],n[t]-n[t+1]),f(s[t+1],r[t])),h=(c-n[t])/(n[t+1]-n[t]);var v=h*(1-h);return d(d(d(m(1-h,r[t]),m(h,s[t+1])),m(l,v*(1-h))),m(u,v*h))},numeric.Spline.prototype.at=function i(e){if(typeof e=="number"){var t=this.x,o=t.length,n,r,s,a=Math.floor;for(n=0,r=o-1;r-n>1;)s=a((n+r)/2),t[s]<=e?n=s:r=s;return this._at(e,n)}var o=e.length,c,l=Array(o);for(c=o-1;c!==-1;--c)l[c]=this.at(e[c]);return l},numeric.Spline.prototype.diff=function i(){var e=this.x,t=this.yl,n=this.yr,r=this.kl,s=this.kr,a=t.length,o,c,l,u=r,h=s,d=Array(a),f=Array(a),m=numeric.add,v=numeric.mul,g=numeric.div,_=numeric.sub;for(o=a-1;o!==-1;--o)c=e[o+1]-e[o],l=_(n[o+1],t[o]),d[o]=g(m(v(l,6),v(r[o],-4*c),v(s[o+1],-2*c)),c*c),f[o+1]=g(m(v(l,-6),v(r[o],2*c),v(s[o+1],4*c)),c*c);return new numeric.Spline(e,u,h,d,f)},numeric.Spline.prototype.roots=function i(){function e(O){return O*O}var g=[],t=this.x,n=this.yl,r=this.yr,s=this.kl,a=this.kr;typeof n[0]=="number"&&(n=[n],r=[r],s=[s],a=[a]);var o=n.length,c=t.length-1,l,u,h,d,f,m,v,g=Array(o),_,F,x,y,R,L,G,M,E,b,I,H,q,ee,de,fe,pe=Math.sqrt;for(l=0;l!==o;++l){for(d=n[l],f=r[l],m=s[l],v=a[l],_=[],u=0;u!==c;u++){for(u>0&&f[u]*d[u]<0&&_.push(t[u]),E=t[u+1]-t[u],t[u],y=d[u],R=f[u+1],F=m[u]/E,x=v[u+1]/E,M=e(F-x+3*(y-R))+12*x*y,L=x+3*y+2*F-3*R,G=3*(x+F+2*(y-R)),M<=0?(I=L/G,I>t[u]&&I<t[u+1]?b=[t[u],I,t[u+1]]:b=[t[u],t[u+1]]):(I=(L-pe(M))/G,H=(L+pe(M))/G,b=[t[u]],I>t[u]&&I<t[u+1]&&b.push(I),H>t[u]&&H<t[u+1]&&b.push(H),b.push(t[u+1])),ee=b[0],I=this._at(ee,u),h=0;h<b.length-1;h++){if(de=b[h+1],H=this._at(de,u),I===0){_.push(ee),ee=de,I=H;continue}if(H===0||I*H>0){ee=de,I=H;continue}for(var $=0;fe=(I*de-H*ee)/(I-H),!(fe<=ee||fe>=de);)if(q=this._at(fe,u),q*H>0)de=fe,H=q,$===-1&&(I*=.5),$=-1;else if(q*I>0)ee=fe,I=q,$===1&&(H*=.5),$=1;else break;_.push(fe),ee=b[h+1],I=this._at(ee,u)}H===0&&_.push(de)}g[l]=_}return typeof this.yl[0]=="number"?g[0]:g},numeric.spline=function i(e,t,n,r){var s=e.length,a=[],o=[],c=[],l,u=numeric.sub,h=numeric.mul,d=numeric.add;for(l=s-2;l>=0;l--)o[l]=e[l+1]-e[l],c[l]=u(t[l+1],t[l]);(typeof n=="string"||typeof r=="string")&&(n=r="periodic");var f=[[],[],[]];switch(typeof n){case"undefined":a[0]=h(3/(o[0]*o[0]),c[0]),f[0].push(0,0),f[1].push(0,1),f[2].push(2/o[0],1/o[0]);break;case"string":a[0]=d(h(3/(o[s-2]*o[s-2]),c[s-2]),h(3/(o[0]*o[0]),c[0])),f[0].push(0,0,0),f[1].push(s-2,0,1),f[2].push(1/o[s-2],2/o[s-2]+2/o[0],1/o[0]);break;default:a[0]=n,f[0].push(0),f[1].push(0),f[2].push(1);break}for(l=1;l<s-1;l++)a[l]=d(h(3/(o[l-1]*o[l-1]),c[l-1]),h(3/(o[l]*o[l]),c[l])),f[0].push(l,l,l),f[1].push(l-1,l,l+1),f[2].push(1/o[l-1],2/o[l-1]+2/o[l],1/o[l]);switch(typeof r){case"undefined":a[s-1]=h(3/(o[s-2]*o[s-2]),c[s-2]),f[0].push(s-1,s-1),f[1].push(s-2,s-1),f[2].push(1/o[s-2],2/o[s-2]);break;case"string":f[1][f[1].length-1]=0;break;default:a[s-1]=r,f[0].push(s-1),f[1].push(s-1),f[2].push(1);break}typeof a[0]!="number"?a=numeric.transpose(a):a=[a];var m=Array(a.length);if(typeof n=="string")for(l=m.length-1;l!==-1;--l)m[l]=numeric.ccsLUPSolve(numeric.ccsLUP(numeric.ccsScatter(f)),a[l]),m[l][s-1]=m[l][0];else for(l=m.length-1;l!==-1;--l)m[l]=numeric.cLUsolve(numeric.cLU(f),a[l]);return typeof t[0]=="number"?m=m[0]:m=numeric.transpose(m),new numeric.Spline(e,t,t,m,m)},numeric.fftpow2=function i(e,t){var n=e.length;if(n!==1){var r=Math.cos,s=Math.sin,a,o,c=Array(n/2),l=Array(n/2),u=Array(n/2),h=Array(n/2);for(o=n/2,a=n-1;a!==-1;--a)--o,u[o]=e[a],h[o]=t[a],--a,c[o]=e[a],l[o]=t[a];i(c,l),i(u,h),o=n/2;var d,f=-6.283185307179586/n,m,v;for(a=n-1;a!==-1;--a)--o,o===-1&&(o=n/2-1),d=f*a,m=r(d),v=s(d),e[a]=c[o]+m*u[o]-v*h[o],t[a]=l[o]+m*h[o]+v*u[o]}},numeric._ifftpow2=function i(e,t){var n=e.length;if(n!==1){var r=Math.cos,s=Math.sin,a,o,c=Array(n/2),l=Array(n/2),u=Array(n/2),h=Array(n/2);for(o=n/2,a=n-1;a!==-1;--a)--o,u[o]=e[a],h[o]=t[a],--a,c[o]=e[a],l[o]=t[a];i(c,l),i(u,h),o=n/2;var d,f=6.283185307179586/n,m,v;for(a=n-1;a!==-1;--a)--o,o===-1&&(o=n/2-1),d=f*a,m=r(d),v=s(d),e[a]=c[o]+m*u[o]-v*h[o],t[a]=l[o]+m*h[o]+v*u[o]}},numeric.ifftpow2=function i(e,t){numeric._ifftpow2(e,t),numeric.diveq(e,e.length),numeric.diveq(t,t.length)},numeric.convpow2=function i(e,t,n,r){numeric.fftpow2(e,t),numeric.fftpow2(n,r);var s,a=e.length,o,c,l,u;for(s=a-1;s!==-1;--s)o=e[s],l=t[s],c=n[s],u=r[s],e[s]=o*c-l*u,t[s]=o*u+l*c;numeric.ifftpow2(e,t)},numeric.T.prototype.fft=function i(){var e=this.x,t=this.y,n=e.length,r=Math.log,s=r(2),a=Math.ceil(r(2*n-1)/s),o=Math.pow(2,a),c=numeric.rep([o],0),l=numeric.rep([o],0),u=Math.cos,h=Math.sin,d,f=-3.141592653589793/n,m,v=numeric.rep([o],0),g=numeric.rep([o],0);for(d=0;d<n;d++)v[d]=e[d];if(typeof t<"u")for(d=0;d<n;d++)g[d]=t[d];for(c[0]=1,d=1;d<=o/2;d++)m=f*d*d,c[d]=u(m),l[d]=h(m),c[o-d]=u(m),l[o-d]=h(m);var _=new numeric.T(v,g),F=new numeric.T(c,l);return _=_.mul(F),numeric.convpow2(_.x,_.y,numeric.clone(F.x),numeric.neg(F.y)),_=_.mul(F),_.x.length=n,_.y.length=n,_},numeric.T.prototype.ifft=function i(){var e=this.x,t=this.y,n=e.length,r=Math.log,s=r(2),a=Math.ceil(r(2*n-1)/s),o=Math.pow(2,a),c=numeric.rep([o],0),l=numeric.rep([o],0),u=Math.cos,h=Math.sin,d,f=3.141592653589793/n,m,v=numeric.rep([o],0),g=numeric.rep([o],0);for(d=0;d<n;d++)v[d]=e[d];if(typeof t<"u")for(d=0;d<n;d++)g[d]=t[d];for(c[0]=1,d=1;d<=o/2;d++)m=f*d*d,c[d]=u(m),l[d]=h(m),c[o-d]=u(m),l[o-d]=h(m);var _=new numeric.T(v,g),F=new numeric.T(c,l);return _=_.mul(F),numeric.convpow2(_.x,_.y,numeric.clone(F.x),numeric.neg(F.y)),_=_.mul(F),_.x.length=n,_.y.length=n,_.div(n)},numeric.gradient=function i(e,t){var n=t.length,r=e(t);if(isNaN(r))throw new Error("gradient: f(x) is a NaN!");var h=Math.max,s,a=numeric.clone(t),o,c,l=Array(n);numeric.div,numeric.sub;var u,h=Math.max,d=.001,f=Math.abs,m=Math.min,v,g,_,F=0,x,y,R;for(s=0;s<n;s++)for(var L=h(1e-6*r,1e-8);;){if(++F,F>20)throw new Error("Numerical gradient fails");if(a[s]=t[s]+L,o=e(a),a[s]=t[s]-L,c=e(a),a[s]=t[s],isNaN(o)||isNaN(c)){L/=16;continue}if(l[s]=(o-c)/(2*L),v=t[s]-L,g=t[s],_=t[s]+L,x=(o-r)/L,y=(r-c)/L,R=h(f(l[s]),f(r),f(o),f(c),f(v),f(g),f(_),1e-8),u=m(h(f(x-l[s]),f(y-l[s]),f(x-y))/R,L/R),u>d)L/=16;else break}return l},numeric.uncmin=function i(e,t,n,r,s,a,o){var c=numeric.gradient;typeof o>"u"&&(o={}),typeof n>"u"&&(n=1e-8),typeof r>"u"&&(r=function(ae){return c(e,ae)}),typeof s>"u"&&(s=1e3),t=numeric.clone(t);var l=t.length,u=e(t),h,d;if(isNaN(u))throw new Error("uncmin: f(x0) is a NaN!");var f=Math.max,m=numeric.norm2;n=f(n,numeric.epsilon);var v,g,_,F=o.Hinv||numeric.identity(l),x=numeric.dot;numeric.inv;var y=numeric.sub,R=numeric.add,L=numeric.tensor,G=numeric.div,M=numeric.mul,E=numeric.all,b=numeric.isFinite,I=numeric.neg,H=0,q,ee,de,fe,pe,$,O,Y="";for(g=r(t);H<s;){if(typeof a=="function"&&a(H,t,u,g,F)){Y="Callback returned true";break}if(!E(b(g))){Y="Gradient has Infinity or NaN";break}if(v=I(x(F,g)),!E(b(v))){Y="Search direction has Infinity or NaN";break}if(O=m(v),O<n){Y="Newton step smaller than tol";break}for($=1,d=x(g,v),ee=t;H<s&&!($*O<n);){if(q=M(v,$),ee=R(t,q),h=e(ee),h-u>=.1*$*d||isNaN(h)){$*=.5,++H;continue}break}if($*O<n){Y="Line search step size smaller than tol";break}if(H===s){Y="maxit reached during line search";break}_=r(ee),de=y(_,g),pe=x(de,q),fe=x(F,de),F=y(R(F,M((pe+x(de,fe))/(pe*pe),L(q,q))),G(R(L(fe,q),L(q,fe)),pe)),t=ee,u=h,g=_,++H}return{solution:t,f:u,gradient:g,invHessian:F,iterations:H,message:Y}},numeric.Dopri=function i(e,t,n,r,s,a,o){this.x=e,this.y=t,this.f=n,this.ymid=r,this.iterations=s,this.events=o,this.message=a},numeric.Dopri.prototype._at=function i(v,t){function n(M){return M*M}var r=this,s=r.x,a=r.y,o=r.f,c=r.ymid;s.length;var l,u,h,d,f,m,v,g,_=.5,F=numeric.add,x=numeric.mul,y=numeric.sub,R,L,G;return l=s[t],u=s[t+1],d=a[t],f=a[t+1],g=u-l,h=l+_*g,m=c[t],R=y(o[t],x(d,1/(l-h)+2/(l-u))),L=y(o[t+1],x(f,1/(u-h)+2/(u-l))),G=[n(v-u)*(v-h)/n(l-u)/(l-h),n(v-l)*n(v-u)/n(l-h)/n(u-h),n(v-l)*(v-h)/n(u-l)/(u-h),(v-l)*n(v-u)*(v-h)/n(l-u)/(l-h),(v-u)*n(v-l)*(v-h)/n(l-u)/(u-h)],F(F(F(F(x(d,G[0]),x(m,G[1])),x(f,G[2])),x(R,G[3])),x(L,G[4]))},numeric.Dopri.prototype.at=function i(e){var t,n,r,s=Math.floor;if(typeof e!="number"){var a=e.length,o=Array(a);for(t=a-1;t!==-1;--t)o[t]=this.at(e[t]);return o}var c=this.x;for(t=0,n=c.length-1;n-t>1;)r=s(.5*(t+n)),c[r]<=e?t=r:n=r;return this._at(e,t)},numeric.dopri=function i(e,t,n,r,s,a,o){typeof s>"u"&&(s=1e-6),typeof a>"u"&&(a=1e3);var c=[e],l=[n],u=[r(e,n)],h,d,f,m,v,g,_=[],F=1/5,x=[3/40,9/40],y=[44/45,-56/15,32/9],R=[19372/6561,-25360/2187,64448/6561,-212/729],L=[9017/3168,-355/33,46732/5247,49/176,-5103/18656],G=[35/384,0,500/1113,125/192,-2187/6784,11/84],M=[.5*6025192743/30085553152,0,.5*51252292925/65400821598,.5*-2691868925/45128329728,.5*187940372067/1594534317056,.5*-1776094331/19743644256,.5*11237099/235043384],E=[1/5,3/10,4/5,8/9,1,1],b=[-71/57600,0,71/16695,-71/1920,17253/339200,-22/525,1/40],I=0,H,q,ee=(t-e)/10,de=0,fe=numeric.add,pe=numeric.mul,$,O,Y=Math.min,ae=Math.abs,ue=numeric.norminf,me=Math.pow,le=numeric.any,N=numeric.lt,w=numeric.and;numeric.sub;var z,te,Z,ne=new numeric.Dopri(c,l,u,_,-1,"");for(typeof o=="function"&&(z=o(e,n));e<t&&de<a;){if(++de,e+ee>t&&(ee=t-e),h=r(e+E[0]*ee,fe(n,pe(F*ee,u[I]))),d=r(e+E[1]*ee,fe(fe(n,pe(x[0]*ee,u[I])),pe(x[1]*ee,h))),f=r(e+E[2]*ee,fe(fe(fe(n,pe(y[0]*ee,u[I])),pe(y[1]*ee,h)),pe(y[2]*ee,d))),m=r(e+E[3]*ee,fe(fe(fe(fe(n,pe(R[0]*ee,u[I])),pe(R[1]*ee,h)),pe(R[2]*ee,d)),pe(R[3]*ee,f))),v=r(e+E[4]*ee,fe(fe(fe(fe(fe(n,pe(L[0]*ee,u[I])),pe(L[1]*ee,h)),pe(L[2]*ee,d)),pe(L[3]*ee,f)),pe(L[4]*ee,m))),$=fe(fe(fe(fe(fe(n,pe(u[I],ee*G[0])),pe(d,ee*G[2])),pe(f,ee*G[3])),pe(m,ee*G[4])),pe(v,ee*G[5])),g=r(e+ee,$),H=fe(fe(fe(fe(fe(pe(u[I],ee*b[0]),pe(d,ee*b[2])),pe(f,ee*b[3])),pe(m,ee*b[4])),pe(v,ee*b[5])),pe(g,ee*b[6])),typeof H=="number"?O=ae(H):O=ue(H),O>s){if(ee=.2*ee*me(s/O,.25),e+ee===e){ne.msg="Step size became too small";break}continue}if(_[I]=fe(fe(fe(fe(fe(fe(n,pe(u[I],ee*M[0])),pe(d,ee*M[2])),pe(f,ee*M[3])),pe(m,ee*M[4])),pe(v,ee*M[5])),pe(g,ee*M[6])),++I,c[I]=e+ee,l[I]=$,u[I]=g,typeof o=="function"){var he,j=e,Le=e+.5*ee,K;if(te=o(Le,_[I-1]),Z=w(N(z,0),N(0,te)),le(Z)||(j=Le,Le=e+ee,z=te,te=o(Le,$),Z=w(N(z,0),N(0,te))),le(Z)){for(var re,se,Ce=0,Se=1,p=1;;){if(typeof z=="number")K=(p*te*j-Se*z*Le)/(p*te-Se*z);else for(K=Le,q=z.length-1;q!==-1;--q)z[q]<0&&te[q]>0&&(K=Y(K,(p*te[q]*j-Se*z[q]*Le)/(p*te[q]-Se*z[q])));if(K<=j||K>=Le)break;he=ne._at(K,I-1),se=o(K,he),re=w(N(z,0),N(0,se)),le(re)?(Le=K,te=se,Z=re,p=1,Ce===-1?Se*=.5:Se=1,Ce=-1):(j=K,z=se,Se=1,Ce===1?p*=.5:p=1,Ce=1)}return $=ne._at(.5*(e+K),I-1),ne.f[I]=r(K,he),ne.x[I]=K,ne.y[I]=he,ne.ymid[I-1]=$,ne.events=Z,ne.iterations=de,ne}}e+=ee,n=$,z=te,ee=Y(.8*ee*me(s/O,.25),4*ee)}return ne.iterations=de,ne},numeric.LU=function(i,e){e=e||!1;var t=Math.abs,n,r,s,a,o,c,l,u,h,d=i.length,f=d-1,m=new Array(d);for(e||(i=numeric.clone(i)),s=0;s<d;++s){for(l=s,c=i[s],h=t(c[s]),r=s+1;r<d;++r)a=t(i[r][s]),h<a&&(h=a,l=r);for(m[s]=l,l!=s&&(i[s]=i[l],i[l]=c,c=i[s]),o=c[s],n=s+1;n<d;++n)i[n][s]/=o;for(n=s+1;n<d;++n){for(u=i[n],r=s+1;r<f;++r)u[r]-=u[s]*c[r],++r,u[r]-=u[s]*c[r];r===f&&(u[r]-=u[s]*c[r])}}return{LU:i,P:m}},numeric.LUsolve=function i(e,t){var n,r,s=e.LU,a=s.length,o=numeric.clone(t),c=e.P,l,u,h;for(n=a-1;n!==-1;--n)o[n]=t[n];for(n=0;n<a;++n)for(l=c[n],c[n]!==n&&(h=o[n],o[n]=o[l],o[l]=h),u=s[n],r=0;r<n;++r)o[n]-=o[r]*u[r];for(n=a-1;n>=0;--n){for(u=s[n],r=n+1;r<a;++r)o[n]-=o[r]*u[r];o[n]/=u[n]}return o},numeric.solve=function i(e,t,n){return numeric.LUsolve(numeric.LU(e,n),t)},numeric.echelonize=function i(e){var t=numeric.dim(e),n=t[0],r=t[1],s=numeric.identity(n),a=Array(n),o,c,l,u,h,d,f,m,v=Math.abs,g=numeric.diveq;for(e=numeric.clone(e),o=0;o<n;++o){for(l=0,h=e[o],d=s[o],c=1;c<r;++c)v(h[l])<v(h[c])&&(l=c);for(a[o]=l,g(d,h[l]),g(h,h[l]),c=0;c<n;++c)if(c!==o){for(f=e[c],m=f[l],u=r-1;u!==-1;--u)f[u]-=h[u]*m;for(f=s[c],u=n-1;u!==-1;--u)f[u]-=d[u]*m}}return{I:s,A:e,P:a}},numeric.__solveLP=function i(e,t,n,r,s,a,o){var c=numeric.sum;numeric.log;var l=numeric.mul,u=numeric.sub,h=numeric.dot,d=numeric.div,f=numeric.add,m=e.length,v=n.length,g,_=!1,F=0,x=1;numeric.transpose(t),numeric.svd;var y=numeric.transpose;numeric.leq;var R=Math.sqrt,L=Math.abs;numeric.muleq,numeric.norminf,numeric.any;var G=Math.min,M=numeric.all,E=numeric.gt,b=Array(m),I=Array(v);numeric.rep([v],1);var H,q=numeric.solve,ee=u(n,h(t,a)),de,fe=h(e,e),pe;for(de=F;de<s;++de){var $,O;for($=v-1;$!==-1;--$)I[$]=d(t[$],ee[$]);var Y=y(I);for($=m-1;$!==-1;--$)b[$]=c(Y[$]);x=.25*L(fe/h(e,b));var ae=100*R(fe/h(b,b));for((!isFinite(x)||x>ae)&&(x=ae),pe=f(e,l(x,b)),H=h(Y,I),$=m-1;$!==-1;--$)H[$][$]+=1;O=q(H,d(pe,x),!0);var ue=d(ee,h(t,O)),me=1;for($=v-1;$!==-1;--$)ue[$]<0&&(me=G(me,-.999*ue[$]));if(g=u(a,l(O,me)),ee=u(n,h(t,g)),!M(E(ee,0)))return{solution:a,message:"",iterations:de};if(a=g,x<r)return{solution:g,message:"",iterations:de};if(o){var le=h(e,pe),N=h(t,pe);for(_=!0,$=v-1;$!==-1;--$)if(le*N[$]<0){_=!1;break}}else a[m-1]>=0?_=!1:_=!0;if(_)return{solution:g,message:"Unbounded",iterations:de}}return{solution:a,message:"maximum iteration count exceeded",iterations:de}},numeric._solveLP=function i(e,t,n,r,s){var a=e.length,o=n.length,m;numeric.sum,numeric.log,numeric.mul;var c=numeric.sub,l=numeric.dot;numeric.div,numeric.add;var u=numeric.rep([a],0).concat([1]),h=numeric.rep([o,1],-1),d=numeric.blockMatrix([[t,h]]),f=n,m=numeric.rep([a],0).concat(Math.max(0,numeric.sup(numeric.neg(n)))+1),v=numeric.__solveLP(u,d,f,r,s,m,!1),g=numeric.clone(v.solution);g.length=a;var _=numeric.inf(c(n,l(t,g)));if(_<0)return{solution:NaN,message:"Infeasible",iterations:v.iterations};var F=numeric.__solveLP(e,t,n,r,s-v.iterations,g,!0);return F.iterations+=v.iterations,F},numeric.solveLP=function i(e,t,n,r,s,a,o){if(typeof o>"u"&&(o=1e3),typeof a>"u"&&(a=numeric.epsilon),typeof r>"u")return numeric._solveLP(e,t,n,a,o);var c=r.length,l=r[0].length,u=t.length,h=numeric.echelonize(r),d=numeric.rep([l],0),f=h.P,m=[],v;for(v=f.length-1;v!==-1;--v)d[f[v]]=1;for(v=l-1;v!==-1;--v)d[v]===0&&m.push(v);var g=numeric.getRange,_=numeric.linspace(0,c-1),F=numeric.linspace(0,u-1),x=g(r,_,m),y=g(t,F,f),R=g(t,F,m),L=numeric.dot,G=numeric.sub,M=L(y,h.I),E=G(R,L(M,x)),b=G(n,L(M,s)),I=Array(f.length),H=Array(m.length);for(v=f.length-1;v!==-1;--v)I[v]=e[f[v]];for(v=m.length-1;v!==-1;--v)H[v]=e[m[v]];var q=G(H,L(I,L(h.I,x))),ee=numeric._solveLP(q,E,b,a,o),de=ee.solution;if(de!==de)return ee;var fe=L(h.I,G(s,L(x,de))),pe=Array(e.length);for(v=f.length-1;v!==-1;--v)pe[f[v]]=fe[v];for(v=m.length-1;v!==-1;--v)pe[m[v]]=de[v];return{solution:pe,message:ee.message,iterations:ee.iterations}},numeric.MPStoLP=function i(e){e instanceof String&&e.split(`
`);var t=0,n=["Initial state","NAME","ROWS","COLUMNS","RHS","BOUNDS","ENDATA"],r=e.length,s,a,o,c=0,l={},u=[],h=0,d={},f=0,m,v=[],g=[],_=[];function F(G){throw new Error("MPStoLP: "+G+`
Line `+s+": "+e[s]+`
Current state: `+n[t]+`
`)}for(s=0;s<r;++s){o=e[s];var x=o.match(/\S*/g),y=[];for(a=0;a<x.length;++a)x[a]!==""&&y.push(x[a]);if(y.length!==0){for(a=0;a<n.length&&o.substr(0,n[a].length)!==n[a];++a);if(a<n.length){if(t=a,a===1&&(m=y[1]),a===6)return{name:m,c:v,A:numeric.transpose(g),b:_,rows:l,vars:d};continue}switch(t){case 0:case 1:F("Unexpected line");case 2:switch(y[0]){case"N":c===0?c=y[1]:F("Two or more N rows");break;case"L":l[y[1]]=h,u[h]=1,_[h]=0,++h;break;case"G":l[y[1]]=h,u[h]=-1,_[h]=0,++h;break;case"E":l[y[1]]=h,u[h]=0,_[h]=0,++h;break;default:F("Parse error "+numeric.prettyPrint(y))}break;case 3:d.hasOwnProperty(y[0])||(d[y[0]]=f,v[f]=0,g[f]=numeric.rep([h],0),++f);var R=d[y[0]];for(a=1;a<y.length;a+=2){if(y[a]===c){v[R]=parseFloat(y[a+1]);continue}var L=l[y[a]];g[R][L]=(u[L]<0?-1:1)*parseFloat(y[a+1])}break;case 4:for(a=1;a<y.length;a+=2)_[l[y[a]]]=(u[l[y[a]]]<0?-1:1)*parseFloat(y[a+1]);break;case 5:break;case 6:F("Internal error")}}}F("Reached end of file without ENDATA")},numeric.seedrandom={pow:Math.pow,random:Math.random},function(i,e,t,n,r,s,a){e.seedrandom=function(d,f){var m=[],v;return d=l(c(f?[d,i]:arguments.length?d:[new Date().getTime(),i,window],3),m),v=new o(m),l(v.S,i),e.random=function(){for(var _=v.g(n),F=a,x=0;_<r;)_=(_+x)*t,F*=t,x=v.g(1);for(;_>=s;)_/=2,F/=2,x>>>=1;return(_+x)/F},d};function o(h){var d,f,m=this,v=h.length,g=0,_=m.i=m.j=m.m=0;for(m.S=[],m.c=[],v||(h=[v++]);g<t;)m.S[g]=g++;for(g=0;g<t;g++)d=m.S[g],_=u(_+d+h[g%v]),f=m.S[_],m.S[g]=f,m.S[_]=d;m.g=function(x){var y=m.S,R=u(m.i+1),L=y[R],G=u(m.j+L),M=y[G];y[R]=M,y[G]=L;for(var E=y[u(L+M)];--x;)R=u(R+1),L=y[R],G=u(G+L),M=y[G],y[R]=M,y[G]=L,E=E*t+y[u(L+M)];return m.i=R,m.j=G,E},m.g(t)}function c(h,d,f,m,v){if(f=[],v=typeof h,d&&v=="object"){for(m in h)if(m.indexOf("S")<5)try{f.push(c(h[m],d-1))}catch{}}return f.length?f:h+(v!="string"?"\0":"")}function l(h,d,f,m){for(h+="",f=0,m=0;m<h.length;m++)d[u(m)]=u((f^=d[u(m)]*19)+h.charCodeAt(m));h="";for(m in d)h+=String.fromCharCode(d[m]);return h}function u(h){return h&t-1}a=e.pow(t,n),r=e.pow(2,r),s=r*2,l(e.random(),i)}([],numeric.seedrandom,256,6,52),function(i){function e(c){if(typeof c!="object")return c;var l=[],u,h=c.length;for(u=0;u<h;u++)l[u+1]=e(c[u]);return l}function t(c){if(typeof c!="object")return c;var l=[],u,h=c.length;for(u=1;u<h;u++)l[u-1]=t(c[u]);return l}function n(c,l,u){var h,d,f,m,v;for(f=1;f<=u;f=f+1){for(c[f][f]=1/c[f][f],v=-c[f][f],h=1;h<f;h=h+1)c[h][f]=v*c[h][f];if(m=f+1,u<m)break;for(d=m;d<=u;d=d+1)for(v=c[f][d],c[f][d]=0,h=1;h<=f;h=h+1)c[h][d]=c[h][d]+v*c[h][f]}}function r(c,l,u,h){var d,f,m,v;for(f=1;f<=u;f=f+1){for(v=0,d=1;d<f;d=d+1)v=v+c[d][f]*h[d];h[f]=(h[f]-v)/c[f][f]}for(m=1;m<=u;m=m+1)for(f=u+1-m,h[f]=h[f]/c[f][f],v=-h[f],d=1;d<f;d=d+1)h[d]=h[d]+v*c[d][f]}function s(c,l,u,h){var d,f,m,v,g,_;for(f=1;f<=u;f=f+1){if(h[1]=f,_=0,m=f-1,m<1){if(_=c[f][f]-_,_<=0)break;c[f][f]=Math.sqrt(_)}else{for(v=1;v<=m;v=v+1){for(g=c[v][f],d=1;d<v;d=d+1)g=g-c[d][f]*c[d][v];g=g/c[v][v],c[v][f]=g,_=_+g*g}if(_=c[f][f]-_,_<=0)break;c[f][f]=Math.sqrt(_)}h[1]=0}}function a(c,l,u,h,d,f,m,v,g,_,F,x,y,R,L,G){var M,E,b,I,H,q,ee,de,fe,pe,$,O,Y,ae,ue,me,le,N,w,z,te,Z,ne,he,j,Le,K;Y=Math.min(h,_),b=2*h+Y*(Y+5)/2+2*_+1,he=1e-60;do he=he+he,j=1+.1*he,Le=1+.2*he;while(j<=1||Le<=1);for(M=1;M<=h;M=M+1)L[M]=l[M];for(M=h+1;M<=b;M=M+1)L[M]=0;for(M=1;M<=_;M=M+1)x[M]=0;if(H=[],G[1]===0){if(s(c,u,h,H),H[1]!==0){G[1]=2;return}r(c,u,h,l),n(c,u,h)}else{for(E=1;E<=h;E=E+1)for(d[E]=0,M=1;M<=E;M=M+1)d[E]=d[E]+c[M][E]*l[M];for(E=1;E<=h;E=E+1)for(l[E]=0,M=E;M<=h;M=M+1)l[E]=l[E]+c[E][M]*d[M]}for(f[1]=0,E=1;E<=h;E=E+1)for(d[E]=l[E],f[1]=f[1]+L[E]*d[E],L[E]=0,M=E+1;M<=h;M=M+1)c[M][E]=0;for(f[1]=-f[1]/2,G[1]=0,ee=h,de=ee+h,$=de+Y,fe=$+Y+1,pe=fe+Y*(Y+1)/2,ae=pe+_,M=1;M<=_;M=M+1){for(me=0,E=1;E<=h;E=E+1)me=me+m[E][M]*m[E][M];L[ae+M]=Math.sqrt(me)}y=0,R[1]=0,R[2]=0;function re(){for(R[1]=R[1]+1,b=pe,M=1;M<=_;M=M+1){for(b=b+1,me=-v[M],E=1;E<=h;E=E+1)me=me+m[E][M]*d[E];if(Math.abs(me)<he&&(me=0),M>F)L[b]=me;else if(L[b]=-Math.abs(me),me>0){for(E=1;E<=h;E=E+1)m[E][M]=-m[E][M];v[M]=-v[M]}}for(M=1;M<=y;M=M+1)L[pe+x[M]]=0;for(O=0,ue=0,M=1;M<=_;M=M+1)L[pe+M]<ue*L[ae+M]&&(O=M,ue=L[pe+M]/L[ae+M]);return O===0?999:0}function se(){for(M=1;M<=h;M=M+1){for(me=0,E=1;E<=h;E=E+1)me=me+c[E][M]*m[E][O];L[M]=me}for(I=ee,M=1;M<=h;M=M+1)L[I+M]=0;for(E=y+1;E<=h;E=E+1)for(M=1;M<=h;M=M+1)L[I+M]=L[I+M]+c[M][E]*L[E];for(Z=!0,M=y;M>=1;M=M-1){for(me=L[M],b=fe+M*(M+3)/2,I=b-M,E=M+1;E<=y;E=E+1)me=me-L[b]*L[de+E],b=b+E;if(me=me/L[I],L[de+M]=me,x[M]<F||me<0)break;Z=!1,q=M}if(!Z)for(le=L[$+q]/L[de+q],M=1;M<=y&&!(x[M]<F||L[de+M]<0);M=M+1)ue=L[$+M]/L[de+M],ue<le&&(le=ue,q=M);for(me=0,M=ee+1;M<=ee+h;M=M+1)me=me+L[M]*L[M];if(Math.abs(me)<=he){if(Z)return G[1]=1,999;for(M=1;M<=y;M=M+1)L[$+M]=L[$+M]-le*L[de+M];return L[$+y+1]=L[$+y+1]+le,700}else{for(me=0,M=1;M<=h;M=M+1)me=me+L[ee+M]*m[M][O];for(N=-L[pe+O]/me,ne=!0,Z||le<N&&(N=le,ne=!1),M=1;M<=h;M=M+1)d[M]=d[M]+N*L[ee+M],Math.abs(d[M])<he&&(d[M]=0);for(f[1]=f[1]+N*me*(N/2+L[$+y+1]),M=1;M<=y;M=M+1)L[$+M]=L[$+M]-N*L[de+M];if(L[$+y+1]=L[$+y+1]+N,ne){for(y=y+1,x[y]=O,b=fe+(y-1)*y/2+1,M=1;M<=y-1;M=M+1)L[b]=L[M],b=b+1;if(y===h)L[b]=L[h];else{for(M=h;M>=y+1&&!(L[M]===0||(w=Math.max(Math.abs(L[M-1]),Math.abs(L[M])),z=Math.min(Math.abs(L[M-1]),Math.abs(L[M])),L[M-1]>=0?ue=Math.abs(w*Math.sqrt(1+z*z/(w*w))):ue=-Math.abs(w*Math.sqrt(1+z*z/(w*w))),w=L[M-1]/ue,z=L[M]/ue,w===1));M=M-1)if(w===0)for(L[M-1]=z*ue,E=1;E<=h;E=E+1)ue=c[E][M-1],c[E][M-1]=c[E][M],c[E][M]=ue;else for(L[M-1]=ue,te=z/(1+w),E=1;E<=h;E=E+1)ue=w*c[E][M-1]+z*c[E][M],c[E][M]=te*(c[E][M-1]+ue)-c[E][M],c[E][M-1]=ue;L[b]=L[y]}}else{for(me=-v[O],E=1;E<=h;E=E+1)me=me+d[E]*m[E][O];if(O>F)L[pe+O]=me;else if(L[pe+O]=-Math.abs(me),me>0){for(E=1;E<=h;E=E+1)m[E][O]=-m[E][O];v[O]=-v[O]}return 700}}return 0}function Ce(){if(b=fe+q*(q+1)/2+1,I=b+q,L[I]===0||(w=Math.max(Math.abs(L[I-1]),Math.abs(L[I])),z=Math.min(Math.abs(L[I-1]),Math.abs(L[I])),L[I-1]>=0?ue=Math.abs(w*Math.sqrt(1+z*z/(w*w))):ue=-Math.abs(w*Math.sqrt(1+z*z/(w*w))),w=L[I-1]/ue,z=L[I]/ue,w===1))return 798;if(w===0){for(M=q+1;M<=y;M=M+1)ue=L[I-1],L[I-1]=L[I],L[I]=ue,I=I+M;for(M=1;M<=h;M=M+1)ue=c[M][q],c[M][q]=c[M][q+1],c[M][q+1]=ue}else{for(te=z/(1+w),M=q+1;M<=y;M=M+1)ue=w*L[I-1]+z*L[I],L[I]=te*(L[I-1]+ue)-L[I],L[I-1]=ue,I=I+M;for(M=1;M<=h;M=M+1)ue=w*c[M][q]+z*c[M][q+1],c[M][q+1]=te*(c[M][q]+ue)-c[M][q+1],c[M][q]=ue}return 0}function Se(){for(I=b-q,M=1;M<=q;M=M+1)L[I]=L[b],b=b+1,I=I+1;return L[$+q]=L[$+q+1],x[q]=x[q+1],q=q+1,q<y?797:0}function p(){return L[$+y]=L[$+y+1],L[$+y+1]=0,x[y]=0,y=y-1,R[2]=R[2]+1,0}for(K=0;;){if(K=re(),K===999)return;for(;K=se(),K!==0;){if(K===999)return;if(K===700)if(q===y)p();else{for(;Ce(),K=Se(),K===797;);p()}}}}function o(c,l,u,h,d,f){c=e(c),l=e(l),u=e(u);var m,v,g,_,F,x=[],y=[],R=[],L=[],G=[],M;if(d=d||0,f=f?e(f):[void 0,0],h=h?e(h):[],v=c.length-1,g=u[1].length-1,!h)for(m=1;m<=g;m=m+1)h[m]=0;for(m=1;m<=g;m=m+1)y[m]=0;for(_=0,F=Math.min(v,g),m=1;m<=v;m=m+1)R[m]=0;for(x[1]=0,m=1;m<=2*v+F*(F+5)/2+2*g+1;m=m+1)L[m]=0;for(m=1;m<=2;m=m+1)G[m]=0;return a(c,l,v,v,R,x,u,h,v,g,d,y,_,G,L,f),M="",f[1]===1&&(M="constraints are inconsistent, no solution!"),f[1]===2&&(M="matrix D in quadratic function is not positive definite!"),{solution:t(R),value:t(x),unconstrained_solution:t(l),iterations:t(G),iact:t(y),message:M}}i.solveQP=o}(numeric),numeric.svd=function i(e){var t,n=numeric.epsilon,r=1e-64/n,s=50,a=0,o=0,c=0,l=0,u=0,h=numeric.clone(e),d=h.length,f=h[0].length;if(d<f)throw"Need more rows than columns";var m=new Array(f),v=new Array(f);for(o=0;o<f;o++)m[o]=v[o]=0;var g=numeric.rep([f,f],0);function _(H,q){return H=Math.abs(H),q=Math.abs(q),H>q?H*Math.sqrt(1+q*q/H/H):q==0?H:q*Math.sqrt(1+H*H/q/q)}var F=0,x=0,y=0,R=0,L=0,G=0,M=0;for(o=0;o<f;o++){for(m[o]=x,M=0,u=o+1,c=o;c<d;c++)M+=h[c][o]*h[c][o];if(M<=r)x=0;else for(F=h[o][o],x=Math.sqrt(M),F>=0&&(x=-x),y=F*x-M,h[o][o]=F-x,c=u;c<f;c++){for(M=0,l=o;l<d;l++)M+=h[l][o]*h[l][c];for(F=M/y,l=o;l<d;l++)h[l][c]+=F*h[l][o]}for(v[o]=x,M=0,c=u;c<f;c++)M=M+h[o][c]*h[o][c];if(M<=r)x=0;else{for(F=h[o][o+1],x=Math.sqrt(M),F>=0&&(x=-x),y=F*x-M,h[o][o+1]=F-x,c=u;c<f;c++)m[c]=h[o][c]/y;for(c=u;c<d;c++){for(M=0,l=u;l<f;l++)M+=h[c][l]*h[o][l];for(l=u;l<f;l++)h[c][l]+=M*m[l]}}L=Math.abs(v[o])+Math.abs(m[o]),L>R&&(R=L)}for(o=f-1;o!=-1;o+=-1){if(x!=0){for(y=x*h[o][o+1],c=u;c<f;c++)g[c][o]=h[o][c]/y;for(c=u;c<f;c++){for(M=0,l=u;l<f;l++)M+=h[o][l]*g[l][c];for(l=u;l<f;l++)g[l][c]+=M*g[l][o]}}for(c=u;c<f;c++)g[o][c]=0,g[c][o]=0;g[o][o]=1,x=m[o],u=o}for(o=f-1;o!=-1;o+=-1){for(u=o+1,x=v[o],c=u;c<f;c++)h[o][c]=0;if(x!=0){for(y=h[o][o]*x,c=u;c<f;c++){for(M=0,l=u;l<d;l++)M+=h[l][o]*h[l][c];for(F=M/y,l=o;l<d;l++)h[l][c]+=F*h[l][o]}for(c=o;c<d;c++)h[c][o]=h[c][o]/x}else for(c=o;c<d;c++)h[c][o]=0;h[o][o]+=1}for(n=n*R,l=f-1;l!=-1;l+=-1)for(var E=0;E<s;E++){var b=!1;for(u=l;u!=-1;u+=-1){if(Math.abs(m[u])<=n){b=!0;break}if(Math.abs(v[u-1])<=n)break}if(!b){a=0,M=1;var I=u-1;for(o=u;o<l+1&&(F=M*m[o],m[o]=a*m[o],!(Math.abs(F)<=n));o++)for(x=v[o],y=_(F,x),v[o]=y,a=x/y,M=-F/y,c=0;c<d;c++)L=h[c][I],G=h[c][o],h[c][I]=L*a+G*M,h[c][o]=-L*M+G*a}if(G=v[l],u==l){if(G<0)for(v[l]=-G,c=0;c<f;c++)g[c][l]=-g[c][l];break}if(E>=s-1)throw"Error: no convergence.";for(R=v[u],L=v[l-1],x=m[l-1],y=m[l],F=((L-G)*(L+G)+(x-y)*(x+y))/(2*y*L),x=_(F,1),F<0?F=((R-G)*(R+G)+y*(L/(F-x)-y))/R:F=((R-G)*(R+G)+y*(L/(F+x)-y))/R,a=1,M=1,o=u+1;o<l+1;o++){for(x=m[o],L=v[o],y=M*x,x=a*x,G=_(F,y),m[o-1]=G,a=F/G,M=y/G,F=R*a+x*M,x=-R*M+x*a,y=L*M,L=L*a,c=0;c<f;c++)R=g[c][o-1],G=g[c][o],g[c][o-1]=R*a+G*M,g[c][o]=-R*M+G*a;for(G=_(F,y),v[o-1]=G,a=F/G,M=y/G,F=a*x+M*L,R=-M*x+a*L,c=0;c<d;c++)L=h[c][o-1],G=h[c][o],h[c][o-1]=L*a+G*M,h[c][o]=-L*M+G*a}m[u]=0,m[l]=F,v[l]=R}for(o=0;o<v.length;o++)v[o]<n&&(v[o]=0);for(o=0;o<f;o++)for(c=o-1;c>=0;c--)if(v[c]<v[o]){for(a=v[c],v[c]=v[o],v[o]=a,l=0;l<h.length;l++)t=h[l][o],h[l][o]=h[l][c],h[l][c]=t;for(l=0;l<g.length;l++)t=g[l][o],g[l][o]=g[l][c],g[l][c]=t;o=c}return{U:h,S:v,V:g}}})(numeric1_2_6);var numeric$3=numeric1_2_6,forwardSHT=function(i,e,t,n){var r=e.length,s=(i+1)*(i+1),a,o=[,];s>r&&console.log("The SHT degree is too high for the number of data points"),t==0&&(e=convertCart2Sph(e));for(var c=0;c<e.length;c++)o[c]=e[c][2];Y_N=computeRealSH(i,e),n==0?a=numeric$3.mul(1/r,Y_N):a=pinv_direct(numeric$3.transpose(Y_N));var l=numeric$3.dotMV(a,o);return l},inverseSHT=function(i,e){for(var t=e,n=Math.sqrt(i.length)-1,r=computeRealSH(n,e),s=numeric$3.dotVM(i,r),a=0;a<e.length;a++)t[a][2]=s[a];return t},print2Darray=function(i){for(var e=0;e<i.length;e++)console.log(i[e])},convertCart2Sph=function(i,e){for(var t,n,r,s=new Array(i.length),a=0;a<i.length;a++)t=Math.atan2(i[a][1],i[a][0]),n=Math.atan2(i[a][2],Math.sqrt(i[a][0]*i[a][0]+i[a][1]*i[a][1])),e==1?s[a]=[t,n]:(r=Math.sqrt(i[a][0]*i[a][0]+i[a][1]*i[a][1]+i[a][2]*i[a][2]),s[a]=[t,n,r]);return s},convertSph2Cart=function(i){for(var e,t,n,r=new Array(i.length),s=0;s<i.length;s++)e=Math.cos(i[s][0])*Math.cos(i[s][1]),t=Math.sin(i[s][0])*Math.cos(i[s][1]),n=Math.sin(i[s][1]),i[0].length==2?r[s]=[e,t,n]:i[0].length==3&&(r[s]=[i[s][2]*e,i[s][2]*t,i[s][2]*n]);return r},computeRealSH=function(i,e){for(var t=new Array(e.length),n=new Array(e.length),r=0;r<e.length;r++)t[r]=e[r][0],n[r]=e[r][1];var s=new Array(2*i+1);t.length;for(var a=(i+1)*(i+1),o=0,c=0,l,u=numeric$3.sin(n),h=0,d=new Array(a),f,m,v,g,r=0;r<2*i+1;r++)s[r]=factorial(r);for(var _=0;_<i+1;_++){if(_==0){var F=new Array(t.length);F.fill(1),d[_]=F,h=1}else{l=recurseLegendrePoly(_,u,o,c),f=Math.sqrt(2*_+1);for(var x=0;x<_+1;x++)x==0?d[h+_]=numeric$3.mul(f,l[x]):(m=f*Math.sqrt(2*s[_-x]/s[_+x]),v=numeric$3.cos(numeric$3.mul(x,t)),g=numeric$3.sin(numeric$3.mul(x,t)),d[h+_-x]=numeric$3.mul(m,numeric$3.mul(l[x],g)),d[h+_+x]=numeric$3.mul(m,numeric$3.mul(l[x],v)));h=h+2*_+1}c=o,o=l}return d},factorial=function(i){return i===0?1:i*factorial(i-1)},recurseLegendrePoly=function(i,e,t,n){var r=new Array(i+1);switch(i){case 1:var u=numeric$3.mul(e,e),s=e,a=numeric$3.sqrt(numeric$3.sub(1,u));r[0]=s,r[1]=a;break;case 2:var u=numeric$3.mul(e,e),o=numeric$3.mul(3,u);o=numeric$3.sub(o,1),o=numeric$3.div(o,2);var c=numeric$3.sub(1,u);c=numeric$3.sqrt(c),c=numeric$3.mul(3,c),c=numeric$3.mul(c,e);var l=numeric$3.sub(1,u);l=numeric$3.mul(3,l),r[0]=o,r[1]=c,r[2]=l;break;default:var u=numeric$3.mul(e,e),h=numeric$3.sub(1,u),d=2*i-1,f=1;if(d%2==0)for(var m=1;m<d/2+1;m++)f=f*2*m;else for(var m=1;m<(d+1)/2+1;m++)f=f*(2*m-1);r[i]=numeric$3.mul(f,numeric$3.pow(h,i/2)),r[i-1]=numeric$3.mul(2*i-1,numeric$3.mul(e,t[i-1]));for(var v=0;v<i-1;v++){var g=numeric$3.mul(2*i-1,numeric$3.mul(e,t[v])),_=numeric$3.mul(i+v-1,n[v]);r[v]=numeric$3.div(numeric$3.sub(g,_),i-v)}}return r},pinv_svd=function(i){for(var e=numeric$3.svd(i),t=e.S[0],n=e.U,r=e.S,s=e.V,a=i.length,o=i[0].length,c=Math.max(a,o)*numeric$3.epsilon*t,l=r.length,u=new Array(l),h=l-1;h!==-1;h--)r[h]>c?u[h]=1/r[h]:u[h]=0;return numeric$3.dot(numeric$3.dot(s,numeric$3.diag(u)),numeric$3.transpose(n))},pinv_direct=function(i){var e=numeric$3.transpose(i);return numeric$3.dot(numeric$3.inv(numeric$3.dot(e,i)),e)},getSHrotMtx=function(i,e){var t=(e+1)*(e+1),n=numeric$3.rep([t,t],0);n[0][0]=1;var r=numeric$3.rep([3,3],0);r[0][0]=i[1][1],r[0][1]=i[1][2],r[0][2]=i[1][0],r[1][0]=i[2][1],r[1][1]=i[2][2],r[1][2]=i[2][0],r[2][0]=i[0][1],r[2][1]=i[0][2],r[2][2]=i[0][0],n=numeric$3.setBlock(n,[1,1],[3,3],r);for(var s=r,a=3,o=2;o<e+1;o++){for(var c=numeric$3.rep([2*o+1,2*o+1],0),l=-o;l<o+1;l++)for(var u=-o;u<o+1;u++){var h,d,f,m,v;l==0?h=1:h=0,Math.abs(u)==o?d=2*o*(2*o-1):d=o*o-u*u,f=Math.sqrt((o*o-l*l)/d),m=Math.sqrt((1+h)*(o+Math.abs(l)-1)*(o+Math.abs(l))/d)*(1-2*h)*.5,v=Math.sqrt((o-Math.abs(l)-1)*(o-Math.abs(l))/d)*(1-h)*-.5,f!=0&&(f=f*U(o,l,u,r,s)),m!=0&&(m=m*V(o,l,u,r,s)),v!=0&&(v=v*W(o,l,u,r,s)),c[l+o][u+o]=f+m+v}n=numeric$3.setBlock(n,[a+1,a+1],[a+2*o+1,a+2*o+1],c),s=c,a=a+2*o+1}return n};function U(i,e,t,n,r){return P(0,i,e,t,n,r)}function V(i,e,t,n,r){var s,a,o,c;return e==0?(s=P(1,i,1,t,n,r),a=P(-1,i,-1,t,n,r),o=s+a):e>0?(e==1?c=1:c=0,s=P(1,i,e-1,t,n,r),a=P(-1,i,-e+1,t,n,r),o=s*Math.sqrt(1+c)-a*(1-c)):(e==-1?c=1:c=0,s=P(1,i,e+1,t,n,r),a=P(-1,i,-e-1,t,n,r),o=s*(1-c)+a*Math.sqrt(1+c)),o}function W(i,e,t,n,r){var s,a,o;return e==0?console.error("should not be called"):e>0?(s=P(1,i,e+1,t,n,r),a=P(-1,i,-e-1,t,n,r),o=s+a):(s=P(1,i,e-1,t,n,r),a=P(-1,i,-e+1,t,n,r),o=s-a),o}function P(i,e,t,n,r,s){var a,o,c,l;return a=r[i+1][2],o=r[i+1][0],c=r[i+1][1],n==-e?l=a*s[t+e-1][0]+o*s[t+e-1][2*e-2]:n==e?l=a*s[t+e-1][2*e-2]-o*s[t+e-1][0]:l=c*s[t+e-1][n+e-1],l}var yawPitchRoll2Rzyx=function(i,e,t){var n,r,s;t==0?n=[[1,0,0],[0,1,0],[0,0,1]]:n=[[1,0,0],[0,Math.cos(t),Math.sin(t)],[0,-Math.sin(t),Math.cos(t)]],e==0?r=[[1,0,0],[0,1,0],[0,0,1]]:r=[[Math.cos(e),0,-Math.sin(e)],[0,1,0],[Math.sin(e),0,Math.cos(e)]],i==0?s=[[1,0,0],[0,1,0],[0,0,1]]:s=[[Math.cos(i),Math.sin(i),0],[-Math.sin(i),Math.cos(i),0],[0,0,1]];var a=numeric$3.dotMMsmall(r,s);return a=numeric$3.dotMMsmall(n,a),a};src.forwardSHT=forwardSHT;src.inverseSHT=inverseSHT;src.print2Darray=print2Darray;src.convertCart2Sph=convertCart2Sph;src.convertSph2Cart=convertSph2Cart;src.computeRealSH=computeRealSH;src.factorial=factorial;src.recurseLegendrePoly=recurseLegendrePoly;src.pinv_svd=pinv_svd;src.pinv_direct=pinv_direct;src.getSHrotMtx=getSHrotMtx;src.yawPitchRoll2Rzyx=yawPitchRoll2Rzyx;Object.defineProperty(ambiMonoEncoder,"__esModule",{value:!0});var _classCallCheck2$m=classCallCheck,_classCallCheck3$m=_interopRequireDefault$m(_classCallCheck2$m),_createClass2$l=createClass,_createClass3$l=_interopRequireDefault$m(_createClass2$l),_sphericalHarmonicTransform$4=src,jshlib$5=_interopRequireWildcard$5(_sphericalHarmonicTransform$4);function _interopRequireWildcard$5(i){if(i&&i.__esModule)return i;var e={};if(i!=null)for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t]);return e.default=i,e}function _interopRequireDefault$m(i){return i&&i.__esModule?i:{default:i}}var monoEncoder=function(){function i(e,t){(0,_classCallCheck3$m.default)(this,i),this.initialized=!1,this.ctx=e,this.order=t,this.nCh=(t+1)*(t+1),this.azim=0,this.elev=0,this.gains=new Array(this.nCh),this.gainNodes=new Array(this.nCh),this.in=this.ctx.createGain(),this.in.channelCountMode="explicit",this.in.channelCount=1,this.out=this.ctx.createChannelMerger(this.nCh);for(var n=0;n<this.nCh;n++)this.gainNodes[n]=this.ctx.createGain(),this.gainNodes[n].channelCountMode="explicit",this.gainNodes[n].channelCount=1;this.updateGains();for(var n=0;n<this.nCh;n++)this.in.connect(this.gainNodes[n]),this.gainNodes[n].connect(this.out,0,n);this.initialized=!0}return(0,_createClass3$l.default)(i,[{key:"updateGains",value:function(){for(var t=this.order,n=jshlib$5.computeRealSH(t,[[this.azim*Math.PI/180,this.elev*Math.PI/180]]),r=0;r<this.nCh;r++)this.gains[r]=n[r][0],this.gainNodes[r].gain.value=this.gains[r]}}]),i}();ambiMonoEncoder.default=monoEncoder;var ambiMonoEncoder2D={},utils$6={},ch1d=convexHull1d$1;function convexHull1d$1(i){for(var e=0,t=0,n=1;n<i.length;++n)i[n][0]<i[e][0]&&(e=n),i[n][0]>i[t][0]&&(t=n);return e<t?[[e],[t]]:e>t?[[t],[e]]:[[e]]}var orientation={exports:{}},twoProduct_1=twoProduct$1,SPLITTER=+(Math.pow(2,27)+1);function twoProduct$1(i,e,t){var n=i*e,r=SPLITTER*i,s=r-i,a=r-s,o=i-a,c=SPLITTER*e,l=c-e,u=c-l,h=e-u,d=n-a*u,f=d-o*u,m=f-a*h,v=o*h-m;return t?(t[0]=v,t[1]=n,t):[v,n]}var robustSum=linearExpansionSum;function scalarScalar$1(i,e){var t=i+e,n=t-i,r=t-n,s=e-n,a=i-r,o=a+s;return o?[o,t]:[t]}function linearExpansionSum(i,e){var t=i.length|0,n=e.length|0;if(t===1&&n===1)return scalarScalar$1(i[0],e[0]);var r=t+n,s=new Array(r),a=0,o=0,c=0,l=Math.abs,u=i[o],h=l(u),d=e[c],f=l(d),m,v;h<f?(v=u,o+=1,o<t&&(u=i[o],h=l(u))):(v=d,c+=1,c<n&&(d=e[c],f=l(d))),o<t&&h<f||c>=n?(m=u,o+=1,o<t&&(u=i[o],h=l(u))):(m=d,c+=1,c<n&&(d=e[c],f=l(d)));for(var g=m+v,_=g-m,F=v-_,x=F,y=g,R,L,G,M,E;o<t&&c<n;)h<f?(m=u,o+=1,o<t&&(u=i[o],h=l(u))):(m=d,c+=1,c<n&&(d=e[c],f=l(d))),v=x,g=m+v,_=g-m,F=v-_,F&&(s[a++]=F),R=y+g,L=R-y,G=R-L,M=g-L,E=y-G,x=E+M,y=R;for(;o<t;)m=u,v=x,g=m+v,_=g-m,F=v-_,F&&(s[a++]=F),R=y+g,L=R-y,G=R-L,M=g-L,E=y-G,x=E+M,y=R,o+=1,o<t&&(u=i[o]);for(;c<n;)m=d,v=x,g=m+v,_=g-m,F=v-_,F&&(s[a++]=F),R=y+g,L=R-y,G=R-L,M=g-L,E=y-G,x=E+M,y=R,c+=1,c<n&&(d=e[c]);return x&&(s[a++]=x),y&&(s[a++]=y),a||(s[a++]=0),s.length=a,s}var twoSum$1=fastTwoSum;function fastTwoSum(i,e,t){var n=i+e,r=n-i,s=n-r,a=e-r,o=i-s;return t?(t[0]=o+a,t[1]=n,t):[o+a,n]}var twoProduct=twoProduct_1,twoSum=twoSum$1,robustScale=scaleLinearExpansion;function scaleLinearExpansion(i,e){var t=i.length;if(t===1){var n=twoProduct(i[0],e);return n[0]?n:[n[1]]}var r=new Array(2*t),s=[.1,.1],a=[.1,.1],o=0;twoProduct(i[0],e,s),s[0]&&(r[o++]=s[0]);for(var c=1;c<t;++c){twoProduct(i[c],e,a);var l=s[1];twoSum(l,a[0],s),s[0]&&(r[o++]=s[0]);var u=a[1],h=s[1],d=u+h,f=d-u,m=h-f;s[1]=d,m&&(r[o++]=m)}return s[1]&&(r[o++]=s[1]),o===0&&(r[o++]=0),r.length=o,r}var robustDiff=robustSubtract;function scalarScalar(i,e){var t=i+e,n=t-i,r=t-n,s=e-n,a=i-r,o=a+s;return o?[o,t]:[t]}function robustSubtract(i,e){var t=i.length|0,n=e.length|0;if(t===1&&n===1)return scalarScalar(i[0],-e[0]);var r=t+n,s=new Array(r),a=0,o=0,c=0,l=Math.abs,u=i[o],h=l(u),d=-e[c],f=l(d),m,v;h<f?(v=u,o+=1,o<t&&(u=i[o],h=l(u))):(v=d,c+=1,c<n&&(d=-e[c],f=l(d))),o<t&&h<f||c>=n?(m=u,o+=1,o<t&&(u=i[o],h=l(u))):(m=d,c+=1,c<n&&(d=-e[c],f=l(d)));for(var g=m+v,_=g-m,F=v-_,x=F,y=g,R,L,G,M,E;o<t&&c<n;)h<f?(m=u,o+=1,o<t&&(u=i[o],h=l(u))):(m=d,c+=1,c<n&&(d=-e[c],f=l(d))),v=x,g=m+v,_=g-m,F=v-_,F&&(s[a++]=F),R=y+g,L=R-y,G=R-L,M=g-L,E=y-G,x=E+M,y=R;for(;o<t;)m=u,v=x,g=m+v,_=g-m,F=v-_,F&&(s[a++]=F),R=y+g,L=R-y,G=R-L,M=g-L,E=y-G,x=E+M,y=R,o+=1,o<t&&(u=i[o]);for(;c<n;)m=d,v=x,g=m+v,_=g-m,F=v-_,F&&(s[a++]=F),R=y+g,L=R-y,G=R-L,M=g-L,E=y-G,x=E+M,y=R,c+=1,c<n&&(d=-e[c]);return x&&(s[a++]=x),y&&(s[a++]=y),a||(s[a++]=0),s.length=a,s}(function(i){var e=twoProduct_1,t=robustSum,n=robustScale,r=robustDiff,s=5,a=11102230246251565e-32,o=(3+16*a)*a,c=(7+56*a)*a;function l(x,y,R,L){return function(M,E,b){var I=x(x(y(E[1],b[0]),y(-b[1],E[0])),x(y(M[1],E[0]),y(-E[1],M[0]))),H=x(y(M[1],b[0]),y(-b[1],M[0])),q=L(I,H);return q[q.length-1]}}function u(x,y,R,L){return function(M,E,b,I){var H=x(x(R(x(y(b[1],I[0]),y(-I[1],b[0])),E[2]),x(R(x(y(E[1],I[0]),y(-I[1],E[0])),-b[2]),R(x(y(E[1],b[0]),y(-b[1],E[0])),I[2]))),x(R(x(y(E[1],I[0]),y(-I[1],E[0])),M[2]),x(R(x(y(M[1],I[0]),y(-I[1],M[0])),-E[2]),R(x(y(M[1],E[0]),y(-E[1],M[0])),I[2])))),q=x(x(R(x(y(b[1],I[0]),y(-I[1],b[0])),M[2]),x(R(x(y(M[1],I[0]),y(-I[1],M[0])),-b[2]),R(x(y(M[1],b[0]),y(-b[1],M[0])),I[2]))),x(R(x(y(E[1],b[0]),y(-b[1],E[0])),M[2]),x(R(x(y(M[1],b[0]),y(-b[1],M[0])),-E[2]),R(x(y(M[1],E[0]),y(-E[1],M[0])),b[2])))),ee=L(H,q);return ee[ee.length-1]}}function h(x,y,R,L){return function(M,E,b,I,H){var q=x(x(x(R(x(R(x(y(I[1],H[0]),y(-H[1],I[0])),b[2]),x(R(x(y(b[1],H[0]),y(-H[1],b[0])),-I[2]),R(x(y(b[1],I[0]),y(-I[1],b[0])),H[2]))),E[3]),x(R(x(R(x(y(I[1],H[0]),y(-H[1],I[0])),E[2]),x(R(x(y(E[1],H[0]),y(-H[1],E[0])),-I[2]),R(x(y(E[1],I[0]),y(-I[1],E[0])),H[2]))),-b[3]),R(x(R(x(y(b[1],H[0]),y(-H[1],b[0])),E[2]),x(R(x(y(E[1],H[0]),y(-H[1],E[0])),-b[2]),R(x(y(E[1],b[0]),y(-b[1],E[0])),H[2]))),I[3]))),x(R(x(R(x(y(b[1],I[0]),y(-I[1],b[0])),E[2]),x(R(x(y(E[1],I[0]),y(-I[1],E[0])),-b[2]),R(x(y(E[1],b[0]),y(-b[1],E[0])),I[2]))),-H[3]),x(R(x(R(x(y(I[1],H[0]),y(-H[1],I[0])),E[2]),x(R(x(y(E[1],H[0]),y(-H[1],E[0])),-I[2]),R(x(y(E[1],I[0]),y(-I[1],E[0])),H[2]))),M[3]),R(x(R(x(y(I[1],H[0]),y(-H[1],I[0])),M[2]),x(R(x(y(M[1],H[0]),y(-H[1],M[0])),-I[2]),R(x(y(M[1],I[0]),y(-I[1],M[0])),H[2]))),-E[3])))),x(x(R(x(R(x(y(E[1],H[0]),y(-H[1],E[0])),M[2]),x(R(x(y(M[1],H[0]),y(-H[1],M[0])),-E[2]),R(x(y(M[1],E[0]),y(-E[1],M[0])),H[2]))),I[3]),x(R(x(R(x(y(E[1],I[0]),y(-I[1],E[0])),M[2]),x(R(x(y(M[1],I[0]),y(-I[1],M[0])),-E[2]),R(x(y(M[1],E[0]),y(-E[1],M[0])),I[2]))),-H[3]),R(x(R(x(y(b[1],I[0]),y(-I[1],b[0])),E[2]),x(R(x(y(E[1],I[0]),y(-I[1],E[0])),-b[2]),R(x(y(E[1],b[0]),y(-b[1],E[0])),I[2]))),M[3]))),x(R(x(R(x(y(b[1],I[0]),y(-I[1],b[0])),M[2]),x(R(x(y(M[1],I[0]),y(-I[1],M[0])),-b[2]),R(x(y(M[1],b[0]),y(-b[1],M[0])),I[2]))),-E[3]),x(R(x(R(x(y(E[1],I[0]),y(-I[1],E[0])),M[2]),x(R(x(y(M[1],I[0]),y(-I[1],M[0])),-E[2]),R(x(y(M[1],E[0]),y(-E[1],M[0])),I[2]))),b[3]),R(x(R(x(y(E[1],b[0]),y(-b[1],E[0])),M[2]),x(R(x(y(M[1],b[0]),y(-b[1],M[0])),-E[2]),R(x(y(M[1],E[0]),y(-E[1],M[0])),b[2]))),-I[3]))))),ee=x(x(x(R(x(R(x(y(I[1],H[0]),y(-H[1],I[0])),b[2]),x(R(x(y(b[1],H[0]),y(-H[1],b[0])),-I[2]),R(x(y(b[1],I[0]),y(-I[1],b[0])),H[2]))),M[3]),R(x(R(x(y(I[1],H[0]),y(-H[1],I[0])),M[2]),x(R(x(y(M[1],H[0]),y(-H[1],M[0])),-I[2]),R(x(y(M[1],I[0]),y(-I[1],M[0])),H[2]))),-b[3])),x(R(x(R(x(y(b[1],H[0]),y(-H[1],b[0])),M[2]),x(R(x(y(M[1],H[0]),y(-H[1],M[0])),-b[2]),R(x(y(M[1],b[0]),y(-b[1],M[0])),H[2]))),I[3]),R(x(R(x(y(b[1],I[0]),y(-I[1],b[0])),M[2]),x(R(x(y(M[1],I[0]),y(-I[1],M[0])),-b[2]),R(x(y(M[1],b[0]),y(-b[1],M[0])),I[2]))),-H[3]))),x(x(R(x(R(x(y(b[1],H[0]),y(-H[1],b[0])),E[2]),x(R(x(y(E[1],H[0]),y(-H[1],E[0])),-b[2]),R(x(y(E[1],b[0]),y(-b[1],E[0])),H[2]))),M[3]),R(x(R(x(y(b[1],H[0]),y(-H[1],b[0])),M[2]),x(R(x(y(M[1],H[0]),y(-H[1],M[0])),-b[2]),R(x(y(M[1],b[0]),y(-b[1],M[0])),H[2]))),-E[3])),x(R(x(R(x(y(E[1],H[0]),y(-H[1],E[0])),M[2]),x(R(x(y(M[1],H[0]),y(-H[1],M[0])),-E[2]),R(x(y(M[1],E[0]),y(-E[1],M[0])),H[2]))),b[3]),R(x(R(x(y(E[1],b[0]),y(-b[1],E[0])),M[2]),x(R(x(y(M[1],b[0]),y(-b[1],M[0])),-E[2]),R(x(y(M[1],E[0]),y(-E[1],M[0])),b[2]))),-H[3])))),de=L(q,ee);return de[de.length-1]}}function d(x){var y=x===3?l:x===4?u:h;return y(t,e,n,r)}var f=d(3),m=d(4),v=[function(){return 0},function(){return 0},function(y,R){return R[0]-y[0]},function(y,R,L){var G=(y[1]-L[1])*(R[0]-L[0]),M=(y[0]-L[0])*(R[1]-L[1]),E=G-M,b;if(G>0){if(M<=0)return E;b=G+M}else if(G<0){if(M>=0)return E;b=-(G+M)}else return E;var I=o*b;return E>=I||E<=-I?E:f(y,R,L)},function(y,R,L,G){var M=y[0]-G[0],E=R[0]-G[0],b=L[0]-G[0],I=y[1]-G[1],H=R[1]-G[1],q=L[1]-G[1],ee=y[2]-G[2],de=R[2]-G[2],fe=L[2]-G[2],pe=E*q,$=b*H,O=b*I,Y=M*q,ae=M*H,ue=E*I,me=ee*(pe-$)+de*(O-Y)+fe*(ae-ue),le=(Math.abs(pe)+Math.abs($))*Math.abs(ee)+(Math.abs(O)+Math.abs(Y))*Math.abs(de)+(Math.abs(ae)+Math.abs(ue))*Math.abs(fe),N=c*le;return me>N||-me>N?me:m(y,R,L,G)}];function g(x){var y=v[x.length];return y||(y=v[x.length]=d(x.length)),y.apply(void 0,x)}function _(x,y,R,L,G,M,E){return function(I,H,q,ee,de){switch(arguments.length){case 0:case 1:return 0;case 2:return L(I,H);case 3:return G(I,H,q);case 4:return M(I,H,q,ee);case 5:return E(I,H,q,ee,de)}for(var fe=new Array(arguments.length),pe=0;pe<arguments.length;++pe)fe[pe]=arguments[pe];return x(fe)}}function F(){for(;v.length<=s;)v.push(d(v.length));i.exports=_.apply(void 0,[g].concat(v));for(var x=0;x<=s;++x)i.exports[x]=v[x]}F()})(orientation);var orientationExports=orientation.exports,monotoneConvexHull2d=monotoneConvexHull2D,orient$2=orientationExports[3];function monotoneConvexHull2D(i){var e=i.length;if(e<3){for(var l=new Array(e),t=0;t<e;++t)l[t]=t;return e===2&&i[0][0]===i[1][0]&&i[0][1]===i[1][1]?[0]:l}for(var n=new Array(e),t=0;t<e;++t)n[t]=t;n.sort(function(f,m){var v=i[f][0]-i[m][0];return v||i[f][1]-i[m][1]});for(var r=[n[0],n[1]],s=[n[0],n[1]],t=2;t<e;++t){for(var a=n[t],o=i[a],c=r.length;c>1&&orient$2(i[r[c-2]],i[r[c-1]],o)<=0;)c-=1,r.pop();for(r.push(a),c=s.length;c>1&&orient$2(i[s[c-2]],i[s[c-1]],o)>=0;)c-=1,s.pop();s.push(a)}for(var l=new Array(s.length+r.length-2),u=0,t=0,h=r.length;t<h;++t)l[u++]=r[t];for(var d=s.length-2;d>0;--d)l[u++]=s[d];return l}var ch2d=convexHull2D,monotoneHull=monotoneConvexHull2d;function convexHull2D(i){var e=monotoneHull(i),t=e.length;if(t<=2)return[];for(var n=new Array(t),r=e[t-1],s=0;s<t;++s){var a=e[s];n[s]=[r,a],r=a}return n}var topology={},twiddle={},INT_BITS=32;twiddle.INT_BITS=INT_BITS;twiddle.INT_MAX=2147483647;twiddle.INT_MIN=-1<<INT_BITS-1;twiddle.sign=function(i){return(i>0)-(i<0)};twiddle.abs=function(i){var e=i>>INT_BITS-1;return(i^e)-e};twiddle.min=function(i,e){return e^(i^e)&-(i<e)};twiddle.max=function(i,e){return i^(i^e)&-(i<e)};twiddle.isPow2=function(i){return!(i&i-1)&&!!i};twiddle.log2=function(i){var e,t;return e=(i>65535)<<4,i>>>=e,t=(i>255)<<3,i>>>=t,e|=t,t=(i>15)<<2,i>>>=t,e|=t,t=(i>3)<<1,i>>>=t,e|=t,e|i>>1};twiddle.log10=function(i){return i>=1e9?9:i>=1e8?8:i>=1e7?7:i>=1e6?6:i>=1e5?5:i>=1e4?4:i>=1e3?3:i>=100?2:i>=10?1:0};twiddle.popCount=function(i){return i=i-(i>>>1&1431655765),i=(i&858993459)+(i>>>2&858993459),(i+(i>>>4)&252645135)*16843009>>>24};function countTrailingZeros(i){var e=32;return i&=-i,i&&e--,i&65535&&(e-=16),i&16711935&&(e-=8),i&252645135&&(e-=4),i&858993459&&(e-=2),i&1431655765&&(e-=1),e}twiddle.countTrailingZeros=countTrailingZeros;twiddle.nextPow2=function(i){return i+=i===0,--i,i|=i>>>1,i|=i>>>2,i|=i>>>4,i|=i>>>8,i|=i>>>16,i+1};twiddle.prevPow2=function(i){return i|=i>>>1,i|=i>>>2,i|=i>>>4,i|=i>>>8,i|=i>>>16,i-(i>>>1)};twiddle.parity=function(i){return i^=i>>>16,i^=i>>>8,i^=i>>>4,i&=15,27030>>>i&1};var REVERSE_TABLE=new Array(256);(function(i){for(var e=0;e<256;++e){var t=e,n=e,r=7;for(t>>>=1;t;t>>>=1)n<<=1,n|=t&1,--r;i[e]=n<<r&255}})(REVERSE_TABLE);twiddle.reverse=function(i){return REVERSE_TABLE[i&255]<<24|REVERSE_TABLE[i>>>8&255]<<16|REVERSE_TABLE[i>>>16&255]<<8|REVERSE_TABLE[i>>>24&255]};twiddle.interleave2=function(i,e){return i&=65535,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e&=65535,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1};twiddle.deinterleave2=function(i,e){return i=i>>>e&1431655765,i=(i|i>>>1)&858993459,i=(i|i>>>2)&252645135,i=(i|i>>>4)&16711935,i=(i|i>>>16)&65535,i<<16>>16};twiddle.interleave3=function(i,e,t){return i&=1023,i=(i|i<<16)&4278190335,i=(i|i<<8)&251719695,i=(i|i<<4)&3272356035,i=(i|i<<2)&1227133513,e&=1023,e=(e|e<<16)&4278190335,e=(e|e<<8)&251719695,e=(e|e<<4)&3272356035,e=(e|e<<2)&1227133513,i|=e<<1,t&=1023,t=(t|t<<16)&4278190335,t=(t|t<<8)&251719695,t=(t|t<<4)&3272356035,t=(t|t<<2)&1227133513,i|t<<2};twiddle.deinterleave3=function(i,e){return i=i>>>e&1227133513,i=(i|i>>>2)&3272356035,i=(i|i>>>4)&251719695,i=(i|i>>>8)&4278190335,i=(i|i>>>16)&1023,i<<22>>22};twiddle.nextCombination=function(i){var e=i|i-1;return e+1|(~e&-~e)-1>>>countTrailingZeros(i)+1};var unionFind=UnionFind$1;function UnionFind$1(i){this.roots=new Array(i),this.ranks=new Array(i);for(var e=0;e<i;++e)this.roots[e]=e,this.ranks[e]=0}var proto$1=UnionFind$1.prototype;Object.defineProperty(proto$1,"length",{get:function(){return this.roots.length}});proto$1.makeSet=function(){var i=this.roots.length;return this.roots.push(i),this.ranks.push(0),i};proto$1.find=function(i){for(var e=i,t=this.roots;t[i]!==i;)i=t[i];for(;t[e]!==i;){var n=t[e];t[e]=i,e=n}return i};proto$1.link=function(i,e){var t=this.find(i),n=this.find(e);if(t!==n){var r=this.ranks,s=this.roots,a=r[t],o=r[n];a<o?s[t]=n:o<a?s[n]=t:(s[n]=t,++r[t])}};var bits=twiddle,UnionFind=unionFind;function dimension(i){for(var e=0,t=Math.max,n=0,r=i.length;n<r;++n)e=t(e,i[n].length);return e-1}topology.dimension=dimension;function countVertices(i){for(var e=-1,t=Math.max,n=0,r=i.length;n<r;++n)for(var s=i[n],a=0,o=s.length;a<o;++a)e=t(e,s[a]);return e+1}topology.countVertices=countVertices;function cloneCells(i){for(var e=new Array(i.length),t=0,n=i.length;t<n;++t)e[t]=i[t].slice(0);return e}topology.cloneCells=cloneCells;function compareCells(i,e){var t=i.length,n=i.length-e.length,r=Math.min;if(n)return n;switch(t){case 0:return 0;case 1:return i[0]-e[0];case 2:var l=i[0]+i[1]-e[0]-e[1];return l||r(i[0],i[1])-r(e[0],e[1]);case 3:var s=i[0]+i[1],a=e[0]+e[1];if(l=s+i[2]-(a+e[2]),l)return l;var o=r(i[0],i[1]),c=r(e[0],e[1]),l=r(o,i[2])-r(c,e[2]);return l||r(o+i[2],s)-r(c+e[2],a);default:var u=i.slice(0);u.sort();var h=e.slice(0);h.sort();for(var d=0;d<t;++d)if(n=u[d]-h[d],n)return n;return 0}}topology.compareCells=compareCells;function compareZipped(i,e){return compareCells(i[0],e[0])}function normalize(i,e){if(e){for(var t=i.length,n=new Array(t),r=0;r<t;++r)n[r]=[i[r],e[r]];n.sort(compareZipped);for(var r=0;r<t;++r)i[r]=n[r][0],e[r]=n[r][1];return i}else return i.sort(compareCells),i}topology.normalize=normalize;function unique(i){if(i.length===0)return[];for(var e=1,t=i.length,n=1;n<t;++n){var r=i[n];if(compareCells(r,i[n-1])){if(n===e){e++;continue}i[e++]=r}}return i.length=e,i}topology.unique=unique;function findCell(i,e){for(var t=0,n=i.length-1,r=-1;t<=n;){var s=t+n>>1,a=compareCells(i[s],e);a<=0?(a===0&&(r=s),t=s+1):a>0&&(n=s-1)}return r}topology.findCell=findCell;function incidence(i,e){for(var t=new Array(i.length),n=0,r=t.length;n<r;++n)t[n]=[];for(var s=[],n=0,a=e.length;n<a;++n)for(var o=e[n],c=o.length,l=1,u=1<<c;l<u;++l){s.length=bits.popCount(l);for(var h=0,d=0;d<c;++d)l&1<<d&&(s[h++]=o[d]);var f=findCell(i,s);if(!(f<0))for(;t[f++].push(n),!(f>=i.length||compareCells(i[f],s)!==0););}return t}topology.incidence=incidence;function dual(i,e){if(!e)return incidence(unique(skeleton(i,0)),i);for(var t=new Array(e),n=0;n<e;++n)t[n]=[];for(var n=0,r=i.length;n<r;++n)for(var s=i[n],a=0,o=s.length;a<o;++a)t[s[a]].push(n);return t}topology.dual=dual;function explode(i){for(var e=[],t=0,n=i.length;t<n;++t)for(var r=i[t],s=r.length|0,a=1,o=1<<s;a<o;++a){for(var c=[],l=0;l<s;++l)a>>>l&1&&c.push(r[l]);e.push(c)}return normalize(e)}topology.explode=explode;function skeleton(i,e){if(e<0)return[];for(var t=[],n=(1<<e+1)-1,r=0;r<i.length;++r)for(var s=i[r],a=n;a<1<<s.length;a=bits.nextCombination(a)){for(var o=new Array(e+1),c=0,l=0;l<s.length;++l)a&1<<l&&(o[c++]=s[l]);t.push(o)}return normalize(t)}topology.skeleton=skeleton;function boundary(i){for(var e=[],t=0,n=i.length;t<n;++t)for(var r=i[t],s=0,a=r.length;s<a;++s){for(var o=new Array(r.length-1),c=0,l=0;c<a;++c)c!==s&&(o[l++]=r[c]);e.push(o)}return normalize(e)}topology.boundary=boundary;function connectedComponents_dense(i,e){for(var t=new UnionFind(e),n=0;n<i.length;++n)for(var r=i[n],s=0;s<r.length;++s)for(var a=s+1;a<r.length;++a)t.link(r[s],r[a]);for(var o=[],c=t.ranks,n=0;n<c.length;++n)c[n]=-1;for(var n=0;n<i.length;++n){var l=t.find(i[n][0]);c[l]<0?(c[l]=o.length,o.push([i[n].slice(0)])):o[c[l]].push(i[n].slice(0))}return o}function connectedComponents_sparse(i){for(var e=unique(normalize(skeleton(i,0))),t=new UnionFind(e.length),n=0;n<i.length;++n)for(var r=i[n],s=0;s<r.length;++s)for(var a=findCell(e,[r[s]]),o=s+1;o<r.length;++o)t.link(a,findCell(e,[r[o]]));for(var c=[],l=t.ranks,n=0;n<l.length;++n)l[n]=-1;for(var n=0;n<i.length;++n){var u=t.find(findCell(e,[i[n][0]]));l[u]<0?(l[u]=c.length,c.push([i[n].slice(0)])):c[l[u]].push(i[n].slice(0))}return c}function connectedComponents(i,e){return e?connectedComponents_dense(i,e):connectedComponents_sparse(i)}topology.connectedComponents=connectedComponents;var ich$1=incrementalConvexHull,orient$1=orientationExports,compareCell=topology.compareCells;function Simplex(i,e,t){this.vertices=i,this.adjacent=e,this.boundary=t,this.lastVisited=-1}Simplex.prototype.flip=function(){var i=this.vertices[0];this.vertices[0]=this.vertices[1],this.vertices[1]=i;var e=this.adjacent[0];this.adjacent[0]=this.adjacent[1],this.adjacent[1]=e};function GlueFacet(i,e,t){this.vertices=i,this.cell=e,this.index=t}function compareGlue(i,e){return compareCell(i.vertices,e.vertices)}function bakeOrient(i){for(var e=["function orient(){var tuple=this.tuple;return test("],t=0;t<=i;++t)t>0&&e.push(","),e.push("tuple[",t,"]");e.push(")}return orient");var n=new Function("test",e.join("")),r=orient$1[i+1];return r||(r=orient$1),n(r)}var BAKED=[];function Triangulation(i,e,t){this.dimension=i,this.vertices=e,this.simplices=t,this.interior=t.filter(function(s){return!s.boundary}),this.tuple=new Array(i+1);for(var n=0;n<=i;++n)this.tuple[n]=this.vertices[n];var r=BAKED[i];r||(r=BAKED[i]=bakeOrient(i)),this.orient=r}var proto=Triangulation.prototype;proto.handleBoundaryDegeneracy=function(i,e){var t=this.dimension,n=this.vertices.length-1,r=this.tuple,s=this.vertices,a=[i];for(i.lastVisited=-n;a.length>0;){i=a.pop(),i.vertices;for(var o=i.adjacent,c=0;c<=t;++c){var l=o[c];if(!(!l.boundary||l.lastVisited<=-n)){for(var u=l.vertices,h=0;h<=t;++h){var d=u[h];d<0?r[h]=e:r[h]=s[d]}var f=this.orient();if(f>0)return l;l.lastVisited=-n,f===0&&a.push(l)}}}return null};proto.walk=function(i,e){var t=this.vertices.length-1,n=this.dimension,r=this.vertices,s=this.tuple,a=e?this.interior.length*Math.random()|0:this.interior.length-1,o=this.interior[a];e:for(;!o.boundary;){for(var c=o.vertices,l=o.adjacent,u=0;u<=n;++u)s[u]=r[c[u]];o.lastVisited=t;for(var u=0;u<=n;++u){var h=l[u];if(!(h.lastVisited>=t)){var d=s[u];s[u]=i;var f=this.orient();if(s[u]=d,f<0){o=h;continue e}else h.boundary?h.lastVisited=-t:h.lastVisited=t}}return}return o};proto.addPeaks=function(i,e){var t=this.vertices.length-1,n=this.dimension,r=this.vertices,s=this.tuple,a=this.interior,o=this.simplices,c=[e];e.lastVisited=t,e.vertices[e.vertices.indexOf(-1)]=t,e.boundary=!1,a.push(e);for(var l=[];c.length>0;){var e=c.pop(),u=e.vertices,h=e.adjacent,d=u.indexOf(t);if(!(d<0)){for(var f=0;f<=n;++f)if(f!==d){var m=h[f];if(!(!m.boundary||m.lastVisited>=t)){var v=m.vertices;if(m.lastVisited!==-t){for(var g=0,_=0;_<=n;++_)v[_]<0?(g=_,s[_]=i):s[_]=r[v[_]];var F=this.orient();if(F>0){v[g]=t,m.boundary=!1,a.push(m),c.push(m),m.lastVisited=t;continue}else m.lastVisited=-t}var x=m.adjacent,y=u.slice(),R=h.slice(),L=new Simplex(y,R,!0);o.push(L);var G=x.indexOf(e);if(!(G<0)){x[G]=L,R[d]=m,y[f]=-1,R[f]=e,h[f]=L,L.flip();for(var _=0;_<=n;++_){var M=y[_];if(!(M<0||M===t)){for(var E=new Array(n-1),b=0,I=0;I<=n;++I){var H=y[I];H<0||I===_||(E[b++]=H)}l.push(new GlueFacet(E,L,_))}}}}}}}l.sort(compareGlue);for(var f=0;f+1<l.length;f+=2){var q=l[f],ee=l[f+1],de=q.index,fe=ee.index;de<0||fe<0||(q.cell.adjacent[q.index]=ee.cell,ee.cell.adjacent[ee.index]=q.cell)}};proto.insert=function(i,e){var t=this.vertices;t.push(i);var n=this.walk(i,e);if(n){for(var r=this.dimension,s=this.tuple,a=0;a<=r;++a){var o=n.vertices[a];o<0?s[a]=i:s[a]=t[o]}var c=this.orient(s);c<0||c===0&&(n=this.handleBoundaryDegeneracy(n,i),!n)||this.addPeaks(i,n)}};proto.boundary=function(){for(var i=this.dimension,e=[],t=this.simplices,n=t.length,r=0;r<n;++r){var s=t[r];if(s.boundary){for(var a=new Array(i),o=s.vertices,c=0,l=0,u=0;u<=i;++u)o[u]>=0?a[c++]=o[u]:l=u&1;if(l===(i&1)){var h=a[0];a[0]=a[1],a[1]=h}e.push(a)}}return e};function incrementalConvexHull(i,e){var t=i.length;if(t===0)throw new Error("Must have at least d+1 points");var n=i[0].length;if(t<=n)throw new Error("Must input at least d+1 points");var r=i.slice(0,n+1),s=orient$1.apply(void 0,r);if(s===0)throw new Error("Input not in general position");for(var a=new Array(n+1),o=0;o<=n;++o)a[o]=o;s<0&&(a[0]=1,a[1]=0);for(var c=new Simplex(a,new Array(n+1),!1),l=c.adjacent,u=new Array(n+2),o=0;o<=n;++o){for(var h=a.slice(),d=0;d<=n;++d)d===o&&(h[d]=-1);var f=h[0];h[0]=h[1],h[1]=f;var m=new Simplex(h,new Array(n+1),!0);l[o]=m,u[o]=m}u[n+1]=c;for(var o=0;o<=n;++o)for(var h=l[o].vertices,v=l[o].adjacent,d=0;d<=n;++d){var g=h[d];if(g<0){v[d]=c;continue}for(var _=0;_<=n;++_)l[_].vertices.indexOf(g)<0&&(v[d]=l[_])}for(var F=new Triangulation(n,r,u),x=!!e,o=n+1;o<t;++o)F.insert(i[o],x);return F.boundary()}var aff$1=affineHull,orient=orientationExports;function linearlyIndependent(i,e){for(var t=new Array(e+1),n=0;n<i.length;++n)t[n]=i[n];for(var n=0;n<=i.length;++n){for(var r=i.length;r<=e;++r){for(var s=new Array(e),a=0;a<e;++a)s[a]=Math.pow(r+1-n,a);t[r]=s}var o=orient.apply(void 0,t);if(o)return!0}return!1}function affineHull(i){var e=i.length;if(e===0)return[];if(e===1)return[0];for(var t=i[0].length,n=[i[0]],r=[0],s=1;s<e;++s){if(n.push(i[s]),!linearlyIndependent(n,t)){n.pop();continue}if(r.push(s),r.length===t+1)return r}return r}var chnd=convexHullnD,ich=ich$1,aff=aff$1;function permute(i,e){for(var t=i.length,n=new Array(t),r=0;r<e.length;++r)n[r]=i[e[r]];for(var s=e.length,r=0;r<t;++r)e.indexOf(r)<0&&(n[s++]=i[r]);return n}function invPermute(i,e){for(var t=i.length,n=e.length,r=0;r<t;++r)for(var s=i[r],a=0;a<s.length;++a){var o=s[a];if(o<n)s[a]=e[o];else{o=o-n;for(var c=0;c<n;++c)o>=e[c]&&(o+=1);s[a]=o}}return i}function convexHullnD(i,e){try{return ich(i,!0)}catch{var t=aff(i);if(t.length<=e)return[];var n=permute(i,t),r=ich(n,!0);return invPermute(r,t)}}var convexHull1d=ch1d,convexHull2d=ch2d,convexHullnd=chnd,ch=convexHull;function convexHull(i){var e=i.length;if(e===0)return[];if(e===1)return[[0]];var t=i[0].length;return t===0?[]:t===1?convexHull1d(i):t===2?convexHull2d(i):convexHullnd(i,t)}Object.defineProperty(utils$6,"__esModule",{value:!0});utils$6.deg2rad=deg2rad;utils$6.rad2deg=rad2deg;utils$6.getColumn=getColumn;utils$6.sampleCircle=sampleCircle;utils$6.getCircHarmonics=getCircHarmonics;utils$6.getAmbisonicDecMtx=getAmbisonicDecMtx;utils$6.createNearestLookup=createNearestLookup;utils$6.findNearest=findNearest;utils$6.getTdesign=getTdesign;var numeric$2=numeric1_2_6,jshlib$4=src,convexhull=ch;function deg2rad(i){for(var e=[],t=Math.PI/180,n=0;n<i.length;n++)i[0].length==3?e.push([i[n][0]*t,i[n][1]*t,i[n][2]]):i[0].length==2&&e.push([i[n][0]*t,i[n][1]*t]);return e}function rad2deg(i){for(var e=[],t=180/Math.PI,n=0;n<i.length;n++)i[0].length==3?e.push([i[n][0]*t,i[n][1]*t,i[n][2]]):i[0].length==2&&e.push([i[n][0]*t,i[n][1]*t]);return e}function getColumn(i,e){return i.map(function(t){return t[e]})}function sampleCircle(i){for(var e=[],t=360/i,n=0,r=0;r<i;r++)e.push([n,0,1]),n+=t;return e}function getCircHarmonics(i,e){var t=i,n=2*t+1,r=e.length,s=new Array(n),a=new Array(r);e=numeric$2.mul(e,Math.PI/180),a.fill(1/Math.sqrt(2*Math.PI)),s[0]=a;for(var o=0;o<t;o++)s[2*o+1]=numeric$2.div(numeric$2.sin(numeric$2.mul(-(o+1),e)),Math.sqrt(Math.PI)),s[2*o+2]=numeric$2.div(numeric$2.cos(numeric$2.mul(o+1,e)),Math.sqrt(Math.PI));return s}function getAmbisonicDecMtx(i,e){for(var t=deg2rad(i),n=jshlib$4.convertSph2Cart(t),r=convexhull(n),s=r.length,a=t.length,o=new Array(s),c=0;c<s;c++){for(var l=new Array(3),u=0;u<3;u++)l[u]=n[r[c][u]];for(var h=numeric$2.inv(l),d=[],f=0;f<3;f++)for(var m=0;m<3;m++)d.push(h[m][f]);o[c]=d}var v=getTdesign(2*e),g=deg2rad(v),_=vbap3(g,r,o,a);_=numeric$2.transpose(_);var F=jshlib$4.computeRealSH(e,g);F=numeric$2.transpose(F);var x=g.length,y=numeric$2.dotMMsmall(_,F);return y=numeric$2.mul(1/x,y),y}var vbap3=function i(e,t,n,r){var s=e.length,a=r,o=t.length;function c(L){return Math.min.apply(null,L)}for(var l=new Array(s),u=jshlib$4.convertSph2Cart(e),h=0;h<s;h++){var d=u[h],f=new Array(a);f.fill(0);for(var m=0;m<o;m++){var v=[],g=[n[m][0],n[m][1],n[m][2]];if(v[0]=numeric$2.dotVV(g,d),g=[n[m][3],n[m][4],n[m][5]],v[1]=numeric$2.dotVV(g,d),g=[n[m][6],n[m][7],n[m][8]],v[2]=numeric$2.dotVV(g,d),c(v)>-.001){for(var _=Math.sqrt(numeric$2.sum(numeric$2.pow(v,2))),F=numeric$2.div(v,_),x=0;x<3;x++)f[t[m][x]]=F[x];break}}var y=Math.sqrt(numeric$2.sum(numeric$2.pow(f,2))),R=numeric$2.div(f,y);l[h]=R}return l};function createNearestLookup(i,e){var t=i.length,n=jshlib$4.convertSph2Cart(deg2rad(i)),r=Math.round(360/e[0])+1,s=Math.round(180/e[1])+1,a=new Array(r);a[0]=-180;for(var o=1;o<r;o++)a[o]=a[o-1]+e[0];for(var c=r*s,l=new Array(c),u=0;u<c;u++)for(var h=[[u%r*e[0]-180,Math.floor(u/r)*e[1]-90]],d=jshlib$4.convertSph2Cart(deg2rad(h)),f=1e3,m=0;m<t;m++){var v=numeric$2.sum(numeric$2.pow(numeric$2.sub(d[0],n[m]),2));v<f&&(l[u]=m,f=v)}return l}function findNearest(i,e,t){for(var n=i.length,r=[],s=[],a=0;a<n;a++)r.push(i[a][0]+180),s.push(i[a][1]+90);for(var o=Math.round(360/t[0])+1,c=numeric$2.round(numeric$2.div(numeric$2.mod(r,360),t[0])),l=numeric$2.round(numeric$2.div(s,t[1])),u=numeric$2.add(numeric$2.mul(l,o),c,1),h=[],d=0;d<n;d++)h.push(e[u[d]]);return h}function getTdesign(i){if(i>21)throw new Error("Designs of order greater than 21 are not implemented");if(i<1)throw new Error("Order should be at least 1");var e=[[[0,0,1],[180,0,1]],[[45,35.26,1],[-45,-35.26,1],[135,-35.26,1],[-135,35.26,1]],[[0,0,1],[180,0,1],[90,0,1],[-90,0,1],[0,90,1],[0,-90,1]],[[0,-31.72,1],[-58.28,0,1],[-90,58.28,1],[0,31.72,1],[-121.72,0,1],[90,-58.28,1],[180,-31.72,1],[121.72,0,1],[90,58.28,1],[180,31.72,1],[58.28,0,1],[-90,-58.28,1]],[[0,-31.72,1],[-58.28,0,1],[-90,58.28,1],[0,31.72,1],[-121.72,0,1],[90,-58.28,1],[180,-31.72,1],[121.72,0,1],[90,58.28,1],[180,31.72,1],[58.28,0,1],[-90,-58.28,1]],[[26,15.46,1],[-26,-15.46,1],[17.11,-24.99,1],[-17.11,24.99,1],[154,-15.46,1],[-154,15.46,1],[162.89,24.99,1],[-162.89,-24.99,1],[72.89,24.99,1],[107.11,-24.99,1],[116,15.46,1],[64,-15.46,1],[-107.11,24.99,1],[-72.89,-24.99,1],[-64,15.46,1],[-116,-15.46,1],[32.25,60.03,1],[-147.75,60.03,1],[-57.75,60.03,1],[122.25,60.03,1],[-32.25,-60.03,1],[147.75,-60.03,1],[57.75,-60.03,1],[-122.25,-60.03,1]],[[26,15.46,1],[-26,-15.46,1],[17.11,-24.99,1],[-17.11,24.99,1],[154,-15.46,1],[-154,15.46,1],[162.89,24.99,1],[-162.89,-24.99,1],[72.89,24.99,1],[107.11,-24.99,1],[116,15.46,1],[64,-15.46,1],[-107.11,24.99,1],[-72.89,-24.99,1],[-64,15.46,1],[-116,-15.46,1],[32.25,60.03,1],[-147.75,60.03,1],[-57.75,60.03,1],[122.25,60.03,1],[-32.25,-60.03,1],[147.75,-60.03,1],[57.75,-60.03,1],[-122.25,-60.03,1]],[[-31.11,53.65,1],[110.82,30.5,1],[148.89,53.65,1],[32.21,-17.83,1],[69.18,-30.5,1],[-32.21,17.83,1],[-69.18,30.5,1],[-147.79,-17.83,1],[-110.82,-30.5,1],[147.79,17.83,1],[31.11,-53.65,1],[-148.89,-53.65,1],[-21.25,-47.78,1],[-108.2,38.78,1],[158.75,-47.78,1],[139.77,-14.09,1],[-71.8,-38.78,1],[-139.77,14.09,1],[71.8,38.78,1],[-40.23,-14.09,1],[108.2,-38.78,1],[40.23,14.09,1],[21.25,47.78,1],[-158.75,47.78,1],[106.65,-2.55,1],[-2.66,-16.63,1],[-73.35,-2.55,1],[-98.84,73.16,1],[-177.34,16.63,1],[98.84,-73.16,1],[177.34,-16.63,1],[81.16,73.16,1],[2.66,16.63,1],[-81.16,-73.16,1],[-106.65,2.55,1],[73.35,2.55,1]],[[20.75,-3.55,1],[-20.75,3.55,1],[-3.8,-20.7,1],[3.8,20.7,1],[159.25,3.55,1],[-159.25,-3.55,1],[-176.2,20.7,1],[176.2,-20.7,1],[93.8,20.7,1],[86.2,-20.7,1],[110.75,-3.55,1],[69.25,3.55,1],[-86.2,20.7,1],[-93.8,-20.7,1],[-69.25,-3.55,1],[-110.75,3.55,1],[-9.94,68.97,1],[170.06,68.97,1],[-99.94,68.97,1],[80.06,68.97,1],[9.94,-68.97,1],[-170.06,-68.97,1],[99.94,-68.97,1],[-80.06,-68.97,1],[42.15,17.57,1],[-42.15,-17.57,1],[23.12,-39.77,1],[-23.12,39.77,1],[137.85,-17.57,1],[-137.85,17.57,1],[156.88,39.77,1],[-156.88,-39.77,1],[66.88,39.77,1],[113.12,-39.77,1],[132.15,17.57,1],[47.85,-17.57,1],[-113.12,39.77,1],[-66.88,-39.77,1],[-47.85,17.57,1],[-132.15,-17.57,1],[25.26,44.98,1],[-154.74,44.98,1],[-64.74,44.98,1],[115.26,44.98,1],[-25.26,-44.98,1],[154.74,-44.98,1],[64.74,-44.98,1],[-115.26,-44.98,1]],[[144.09,-21.45,1],[-33.81,-48.92,1],[-35.91,-21.45,1],[-115.87,33.09,1],[-146.19,48.92,1],[115.87,-33.09,1],[146.19,-48.92,1],[64.13,33.09,1],[33.81,48.92,1],[-64.13,-33.09,1],[-144.09,21.45,1],[35.91,21.45,1],[-45.53,1.95,1],[177.26,44.44,1],[134.47,1.95,1],[87.21,-45.49,1],[2.74,-44.44,1],[-87.21,45.49,1],[-2.74,44.44,1],[-92.79,-45.49,1],[-177.26,-44.44,1],[92.79,45.49,1],[45.53,-1.95,1],[-134.47,-1.95,1],[15.59,-73.34,1],[-85.4,16.04,1],[-164.41,-73.34,1],[163.92,4.42,1],[-94.6,-16.04,1],[-163.92,-4.42,1],[94.6,16.04,1],[-16.08,4.42,1],[85.4,-16.04,1],[16.08,-4.42,1],[-15.59,73.34,1],[164.41,73.34,1],[-60.02,25.27,1],[151.41,26.86,1],[119.98,25.27,1],[46.63,-51.57,1],[28.59,-26.86,1],[-46.63,51.57,1],[-28.59,26.86,1],[-133.37,-51.57,1],[-151.41,-26.86,1],[133.37,51.57,1],[60.02,-25.27,1],[-119.98,-25.27,1],[-109.94,6.91,1],[172.65,-19.79,1],[70.06,6.91,1],[-70.44,-68.94,1],[7.35,19.79,1],[70.44,68.94,1],[-7.35,-19.79,1],[109.56,-68.94,1],[-172.65,19.79,1],[-109.56,68.94,1],[109.94,-6.91,1],[-70.06,-6.91,1]],[[132.93,7.69,1],[-83.93,-23.73,1],[8.47,23.51,1],[-113.34,70.42,1],[-103.27,-9.9,1],[-33.24,-70.75,1],[21.86,-26.46,1],[-156.54,47.78,1],[-64.26,-7.72,1],[165.78,44.53,1],[-25.2,26.39,1],[-97,-44.66,1],[27.85,9.77,1],[153.21,-47.71,1],[-155.06,7.45,1],[-11.84,-23.59,1],[80.54,23.72,1],[-42.06,70.44,1],[-31.22,-9.84,1],[38.84,-70.5,1],[93.76,-26.29,1],[-84.76,47.61,1],[7.76,-7.52,1],[-122.28,44.29,1],[46.8,26.64,1],[-24.77,-44.57,1],[99.89,9.91,1],[-134.78,-47.96,1],[-83.09,7.3,1],[60.13,-23.34,1],[152.64,23.64,1],[29.76,70.68,1],[40.78,-9.58,1],[110.18,-70.39,1],[165.65,-26.43,1],[-12.99,47.75,1],[79.74,-7.31,1],[-50.52,44.26,1],[118.92,26.71,1],[47.22,-44.31,1],[171.93,9.76,1],[-62.51,-48.04,1],[-11.12,7.44,1],[132.02,-23.33,1],[-135.36,23.39,1],[102.37,70.82,1],[112.74,-9.49,1],[-178.3,-70.58,1],[-122.32,-26.67,1],[59.08,48,1],[151.7,-7.38,1],[21.38,44.5,1],[-169.01,26.5,1],[118.98,-44.25,1],[-116.09,9.52,1],[9.65,-47.83,1],[60.89,7.68,1],[-156.02,-23.57,1],[-63.46,23.31,1],[174.93,70.66,1],[-175.29,-9.68,1],[-105.95,-70.8,1],[-50.19,-26.7,1],[131.36,48.01,1],[-136.3,-7.64,1],[93.56,44.67,1],[-97.08,26.3,1],[-169.16,-44.46,1],[-44.13,9.52,1],[81.48,-47.62,1]],[[-154.47,7.9,1],[162.15,-63.36,1],[25.53,7.9,1],[-81.26,-25.27,1],[17.85,63.36,1],[81.26,25.27,1],[-17.85,-63.36,1],[98.74,-25.27,1],[-162.15,63.36,1],[-98.74,25.27,1],[154.47,-7.9,1],[-25.53,-7.9,1],[1.3,-10.47,1],[-83.01,79.45,1],[-178.7,-10.47,1],[100.48,1.28,1],[-96.99,-79.45,1],[-100.48,-1.28,1],[96.99,79.45,1],[-79.52,1.28,1],[83.01,-79.45,1],[79.52,-1.28,1],[-1.3,10.47,1],[178.7,10.47,1],[157.24,13.15,1],[31.14,-63.89,1],[-22.76,13.15,1],[-75.78,22.13,1],[148.86,63.89,1],[75.78,-22.13,1],[-148.86,-63.89,1],[104.22,22.13,1],[-31.14,63.89,1],[-104.22,-22.13,1],[-157.24,-13.15,1],[22.76,-13.15,1],[110.44,-60.62,1],[-62.18,-9.87,1],[-69.56,-60.62,1],[-168.88,27.37,1],[-117.82,9.87,1],[168.88,-27.37,1],[117.82,-9.87,1],[11.12,27.37,1],[62.18,9.87,1],[-11.12,-27.37,1],[-110.44,60.62,1],[69.56,60.62,1],[-125.93,-47.4,1],[-126.67,-23.4,1],[54.07,-47.4,1],[-151.65,-33.24,1],[-53.33,23.4,1],[151.65,33.24,1],[53.33,-23.4,1],[28.35,-33.24,1],[126.67,23.4,1],[-28.35,33.24,1],[125.93,47.4,1],[-54.07,47.4,1],[61.41,37.54,1],[41.19,22.3,1],[-118.59,37.54,1],[31.92,44.13,1],[138.81,-22.3,1],[-31.92,-44.13,1],[-138.81,22.3,1],[-148.08,44.13,1],[-41.19,-22.3,1],[148.08,-44.13,1],[-61.41,-37.54,1],[118.59,-37.54,1],[132.92,4.73,1],[6.45,-42.74,1],[-47.08,4.73,1],[-83.07,46.87,1],[173.55,42.74,1],[83.07,-46.87,1],[-173.55,-42.74,1],[96.93,46.87,1],[-6.45,42.74,1],[-96.93,-46.87,1],[-132.92,-4.73,1],[47.08,-4.73,1]],[[-40.36,68.7,1],[61.12,65.68,1],[141.73,70.75,1],[-131.25,72.32,1],[-154.88,-12.62,1],[-66.2,-9.78,1],[26.36,-11.97,1],[114.95,-12.58,1],[37.02,51.13,1],[129.77,51.95,1],[-140.63,50.15,1],[-56.5,47.88,1],[-65.05,12.58,1],[25.12,12.62,1],[113.8,9.78,1],[-153.64,11.97,1],[-134.51,-9.73,1],[-46.23,-8.37,1],[47.91,-9.73,1],[141.51,-8.73,1],[-17.84,-44.1,1],[69.37,-43.27,1],[151.22,-42.67,1],[-106.78,-40.18,1],[-50.23,-51.95,1],[39.37,-50.15,1],[123.5,-47.88,1],[-142.98,-51.13,1],[-179.19,-60.75,1],[-84.57,-54.07,1],[5.39,-58.05,1],[89.5,-60.75,1],[-145.98,31.02,1],[-54.39,26.43,1],[28.92,32.51,1],[125.34,30.94,1],[168.71,-7.06,1],[-112.49,-10.38,1],[-21.96,-9.6,1],[73.11,-8.31,1],[95.68,.04,1],[-170.71,2.32,1],[-84.32,-.04,1],[9.29,-2.32,1],[9.19,-34.33,1],[98.21,-37.31,1],[-179.2,-40.48,1],[-77.81,-31.6,1],[-177.08,-21.74,1],[-93.77,-18.83,1],[-2.72,-19.8,1],[90.51,-20.91,1],[-106.89,8.31,1],[-11.29,7.06,1],[67.51,10.38,1],[158.04,9.6,1],[-118.88,-65.68,1],[-38.27,-70.75,1],[48.75,-72.32,1],[139.64,-68.7,1],[-54.66,-30.94,1],[34.02,-31.02,1],[125.61,-26.43,1],[-151.08,-32.51,1],[-170.81,34.33,1],[-81.79,37.31,1],[.8,40.48,1],[102.19,31.6,1],[-28.78,42.67,1],[73.22,40.18,1],[162.16,44.1,1],[-110.63,43.27,1],[-89.49,20.91,1],[2.92,21.74,1],[86.23,18.83,1],[177.28,19.8,1],[133.77,8.37,1],[-132.09,9.73,1],[-38.49,8.73,1],[45.49,9.73,1],[-25.6,24.04,1],[55.12,30.23,1],[149.3,28.05,1],[-118.71,26.06,1],[.81,60.75,1],[95.43,54.07,1],[-174.61,58.05,1],[-90.5,60.75,1],[-124.88,-30.23,1],[-30.7,-28.05,1],[61.29,-26.06,1],[154.4,-24.04,1],[-132.92,-85.6,1],[47.08,85.6,1]],[[-129.19,8.11,1],[169.58,-38.73,1],[50.81,8.12,1],[-77.27,-50.11,1],[10.42,38.73,1],[77.3,50.12,1],[-10.41,-38.72,1],[102.71,-50.11,1],[-169.57,38.72,1],[-102.71,50.11,1],[129.19,-8.11,1],[-50.8,-8.11,1],[-4.59,-56.01,1],[-93.1,33.85,1],[175.39,-56.03,1],[146.11,-2.57,1],[-86.89,-33.86,1],[-146.1,2.56,1],[86.91,33.86,1],[-33.89,-2.57,1],[93.1,-33.85,1],[33.9,2.58,1],[4.6,56.03,1],[-175.38,56.01,1],[106.57,26.1,1],[27.07,-14.82,1],[-73.44,26.09,1],[-30.2,59.41,1],[152.94,14.83,1],[30.2,-59.4,1],[-152.93,-14.84,1],[149.82,59.41,1],[-27.06,14.83,1],[-149.8,-59.42,1],[-106.55,-26.1,1],[73.44,-26.09,1],[-171.42,77.45,1],[91.9,-12.4,1],[8.54,77.46,1],[-12.4,-1.85,1],[88.11,12.41,1],[12.41,1.86,1],[-88.1,-12.41,1],[167.6,-1.86,1],[-91.89,12.4,1],[-167.59,1.84,1],[171.43,-77.46,1],[-8.52,-77.45,1],[-122.73,-10.44,1],[-167.65,-32.13,1],[57.27,-10.43,1],[-108.8,-55.83,1],[-12.35,32.13,1],[108.83,55.83,1],[12.36,-32.12,1],[71.19,-55.82,1],[167.66,32.12,1],[-71.19,55.82,1],[122.74,10.44,1],[-57.27,10.44,1],[-135.84,-23.05,1],[-148.58,-41.32,1],[44.16,-23.04,1],[-120.66,-39.88,1],[-31.41,41.31,1],[120.68,39.87,1],[31.42,-41.3,1],[59.33,-39.86,1],[148.6,41.31,1],[-59.33,39.87,1],[135.85,23.05,1],[-44.16,23.05,1],[-161.55,20.62,1],[130.04,-62.6,1],[18.45,20.64,1],[-68.35,-17.23,1],[49.96,62.61,1],[68.36,17.23,1],[-49.93,-62.6,1],[111.65,-17.22,1],[-130.05,62.59,1],[-111.64,17.22,1],[161.56,-20.63,1],[-18.44,-20.62,1],[-105.23,-3.38,1],[-176.5,-15.21,1],[74.77,-3.37,1],[-102.64,-74.41,1],[-3.5,15.21,1],[102.69,74.41,1],[3.51,-15.2,1],[77.33,-74.4,1],[176.51,15.2,1],[-77.36,74.4,1],[105.24,3.38,1],[-74.76,3.37,1],[-142.39,25.42,1],[142.08,-45.69,1],[37.61,25.43,1],[-59.02,-33.44,1],[37.92,45.69,1],[59.04,33.45,1],[-37.91,-45.68,1],[120.97,-33.44,1],[-142.07,45.68,1],[-120.96,33.44,1],[142.4,-25.43,1],[-37.6,-25.42,1]],[[-30.6,6.94,1],[166.56,58.69,1],[149.4,6.96,1],[81.95,-30.36,1],[13.48,-58.69,1],[-81.93,30.36,1],[-13.46,58.68,1],[-98.06,-30.37,1],[-166.54,-58.68,1],[98.07,30.37,1],[30.62,-6.95,1],[-149.38,-6.95,1],[106.69,-22.68,1],[-23.57,-15.36,1],[-73.31,-22.69,1],[-145.5,62.1,1],[-156.41,15.36,1],[145.53,-62.1,1],[156.43,-15.35,1],[34.47,62.11,1],[23.58,15.36,1],[-34.46,-62.11,1],[-106.67,22.68,1],[73.33,22.69,1],[166.82,1.39,1],[6.09,-76.74,1],[-13.19,1.38,1],[-88.57,13.18,1],[173.99,76.74,1],[88.59,-13.18,1],[-173.97,-76.73,1],[91.43,13.2,1],[-6.07,76.73,1],[-91.42,-13.2,1],[-166.8,-1.38,1],[13.2,-1.39,1],[-74.67,48.11,1],[130.86,10.16,1],[105.32,48.13,1],[13.34,-40.08,1],[49.16,-10.15,1],[-13.32,40.07,1],[-49.14,10.15,1],[-166.67,-40.08,1],[-130.84,-10.16,1],[166.69,40.08,1],[74.7,-48.11,1],[-105.31,-48.13,1],[-126.99,26.55,1],[147.96,-32.57,1],[53,26.56,1],[-50.28,-45.59,1],[32.05,32.58,1],[50.3,45.59,1],[-32.03,-32.58,1],[129.71,-45.58,1],[-147.94,32.57,1],[-129.69,45.58,1],[127.02,-26.55,1],[-52.98,-26.56,1],[-171.93,30.37,1],[103.47,-58.68,1],[8.07,30.36,1],[-59.38,-6.96,1],[76.54,58.69,1],[59.4,6.95,1],[-76.53,-58.69,1],[120.62,-6.94,1],[-103.44,58.68,1],[-120.6,6.95,1],[171.94,-30.36,1],[-8.05,-30.37,1],[40.86,10.16,1],[15.32,48.12,1],[-139.14,10.16,1],[76.68,40.09,1],[164.69,-48.12,1],[-76.67,-40.09,1],[-164.67,48.12,1],[-103.31,40.07,1],[-15.3,-48.13,1],[103.34,-40.07,1],[-40.84,-10.16,1],[139.16,-10.15,1],[103.2,-1.38,1],[-1.41,-13.19,1],[-76.8,-1.39,1],[-96.02,76.73,1],[-178.57,13.19,1],[96.07,-76.73,1],[178.58,-13.19,1],[83.94,76.74,1],[1.43,13.19,1],[-83.95,-76.74,1],[-103.18,1.38,1],[76.81,1.39,1],[37.02,-26.56,1],[-39.7,45.58,1],[-142.99,-26.56,1],[122.05,32.58,1],[-140.29,-45.59,1],[-122.04,-32.58,1],[140.31,45.59,1],[-57.95,32.57,1],[39.72,-45.58,1],[57.97,-32.57,1],[-37,26.55,1],[143,26.56,1],[163.33,22.69,1],[55.55,-62.1,1],[-16.67,22.68,1],[-66.41,15.35,1],[124.49,62.11,1],[66.43,-15.35,1],[-124.48,-62.11,1],[113.58,15.36,1],[-55.52,62.1,1],[-113.57,-15.36,1],[-163.31,-22.68,1],[16.69,-22.69,1]],[[-10.57,-17.35,1],[-120.42,69.76,1],[169.43,-17.35,1],[107.63,-10.08,1],[-59.57,-69.78,1],[-107.63,10.08,1],[59.57,69.78,1],[-72.37,-10.09,1],[120.42,-69.76,1],[72.37,10.09,1],[10.57,17.35,1],[-169.43,17.35,1],[-30.77,68.25,1],[101.53,18.57,1],[149.25,68.26,1],[18.92,-10.92,1],[78.47,-18.56,1],[-18.92,10.92,1],[-78.47,18.56,1],[-161.09,-10.92,1],[-101.53,-18.56,1],[161.09,10.92,1],[30.78,-68.26,1],[-149.26,-68.26,1],[56.46,41.26,1],[46.46,24.54,1],[-123.53,41.26,1],[32.19,38.8,1],[133.53,-24.53,1],[-32.19,-38.8,1],[-133.53,24.53,1],[-147.8,38.8,1],[-46.46,-24.54,1],[147.8,-38.8,1],[-56.46,-41.27,1],[123.53,-41.26,1],[84.74,27.31,1],[27.41,4.68,1],[-95.26,27.3,1],[10.06,62.23,1],[152.59,-4.67,1],[-10.06,-62.23,1],[-152.59,4.67,1],[-169.92,62.23,1],[-27.4,-4.68,1],[169.92,-62.22,1],[-84.74,-27.31,1],[95.26,-27.3,1],[136.27,-.73,1],[-1.05,-46.27,1],[-43.73,-.74,1],[-91.01,43.72,1],[-178.94,46.27,1],[91.01,-43.72,1],[178.94,-46.27,1],[88.99,43.73,1],[1.05,46.27,1],[-88.99,-43.73,1],[-136.27,.73,1],[43.73,.73,1],[55.23,10.82,1],[13.09,34.07,1],[-124.77,10.81,1],[71.48,53.8,1],[166.91,-34.06,1],[-71.48,-53.8,1],[-166.9,34.06,1],[-108.52,53.79,1],[-13.09,-34.06,1],[108.52,-53.79,1],[-55.23,-10.82,1],[124.77,-10.81,1],[-105.49,-68.13,1],[-111.15,-5.71,1],[74.52,-68.12,1],[-173.89,-21.04,1],[-68.85,5.7,1],[173.89,21.04,1],[68.85,-5.7,1],[6.12,-21.04,1],[111.15,5.71,1],[-6.12,21.04,1],[105.49,68.13,1],[-74.52,68.12,1],[35.28,-15.18,1],[-25.17,51.98,1],[-144.72,-15.19,1],[108.39,33.88,1],[-154.84,-51.99,1],[-108.39,-33.88,1],[154.84,51.99,1],[-71.61,33.87,1],[25.17,-51.98,1],[71.61,-33.87,1],[-35.28,15.18,1],[144.72,15.19,1],[-125.28,-28.56,1],[-146.32,-30.49,1],[54.72,-28.55,1],[-133.29,-45.82,1],[-33.69,30.48,1],[133.3,45.82,1],[33.68,-30.48,1],[46.71,-45.81,1],[146.32,30.49,1],[-46.71,45.81,1],[125.28,28.56,1],[-54.72,28.54,1],[-144.4,54.71,1],[112.38,-28.01,1],[35.58,54.72,1],[-29.92,-19.65,1],[67.62,28.02,1],[29.92,19.65,1],[-67.62,-28.02,1],[150.08,-19.64,1],[-112.38,28.01,1],[-150.08,19.64,1],[144.4,-54.71,1],[-35.58,-54.72,1],[68.53,-52.85,1],[-54.82,12.76,1],[-111.46,-52.87,1],[164.51,34.19,1],[-125.18,-12.77,1],[-164.51,-34.19,1],[125.18,12.77,1],[-15.5,34.19,1],[54.82,-12.76,1],[15.49,-34.19,1],[-68.53,52.85,1],[111.47,52.86,1],[91.48,-7.37,1],[-7.38,-1.47,1],[-88.52,-7.38,1],[-168.69,82.47,1],[-172.62,1.47,1],[168.69,-82.47,1],[172.62,-1.46,1],[11.22,82.48,1],[7.38,1.47,1],[-11.21,-82.48,1],[-91.48,7.37,1],[88.52,7.38,1]],[[-110.97,-81.34,1],[-98.09,-3.09,1],[69.03,-81.34,1],[-176.88,-8.08,1],[-81.91,3.09,1],[176.88,8.08,1],[81.91,-3.09,1],[3.12,-8.08,1],[98.09,3.09,1],[-3.12,8.08,1],[110.97,81.34,1],[-69.03,81.34,1],[145.76,30.52,1],[46.33,-45.41,1],[-34.24,30.52,1],[-54.51,28.99,1],[133.67,45.41,1],[54.51,-28.99,1],[-133.67,-45.41,1],[125.49,28.99,1],[-46.33,45.41,1],[-125.49,-28.99,1],[-145.76,-30.52,1],[34.24,-30.52,1],[159.58,41.4,1],[68.4,-44.67,1],[-20.42,41.4,1],[-46.75,15.18,1],[111.6,44.67,1],[46.75,-15.18,1],[-111.6,-44.67,1],[133.25,15.18,1],[-68.4,44.67,1],[-133.25,-15.18,1],[-159.58,-41.4,1],[20.42,-41.4,1],[85.43,-37.93,1],[-38.02,3.6,1],[-94.57,-37.93,1],[174.17,51.83,1],[-141.98,-3.6,1],[-174.17,-51.83,1],[141.98,3.6,1],[-5.83,51.83,1],[38.02,-3.6,1],[5.83,-51.83,1],[-85.43,37.93,1],[94.57,37.93,1],[21.18,27.17,1],[54.86,56.05,1],[-158.82,27.17,1],[61.17,18.75,1],[125.14,-56.05,1],[-61.17,-18.75,1],[-125.14,56.05,1],[-118.83,18.75,1],[-54.86,-56.05,1],[118.83,-18.75,1],[-21.18,-27.17,1],[158.82,-27.17,1],[104.66,-9.56,1],[-9.88,-14.45,1],[-75.34,-9.56,1],[-123.65,72.56,1],[-170.12,14.45,1],[123.65,-72.56,1],[170.12,-14.45,1],[56.35,72.56,1],[9.88,14.45,1],[-56.35,-72.56,1],[-104.66,9.56,1],[75.34,9.56,1],[25.94,-16.83,1],[-34.66,59.4,1],[-154.06,-16.83,1],[108.59,24.75,1],[-145.34,-59.41,1],[-108.59,-24.75,1],[145.34,59.41,1],[-71.41,24.75,1],[34.66,-59.41,1],[71.41,-24.75,1],[-25.94,16.83,1],[154.06,16.83,1],[-100.89,26.49,1],[153.1,-9.74,1],[79.11,26.49,1],[-20.77,-61.51,1],[26.9,9.74,1],[20.77,61.51,1],[-26.9,-9.74,1],[159.23,-61.51,1],[-153.1,9.74,1],[-159.23,61.51,1],[100.89,-26.49,1],[-79.11,-26.49,1],[44.31,12.28,1],[17.3,44.36,1],[-135.69,12.28,1],[73.08,43.05,1],[162.7,-44.36,1],[-73.08,-43.05,1],[-162.7,44.36,1],[-106.92,43.05,1],[-17.3,-44.36,1],[106.92,-43.05,1],[-44.31,-12.28,1],[135.69,-12.28,1],[-169.08,-24.53,1],[-112.54,-63.29,1],[10.92,-24.53,1],[-114.93,-9.92,1],[-67.46,63.28,1],[114.93,9.92,1],[67.46,-63.29,1],[65.07,-9.92,1],[112.54,63.29,1],[-65.07,9.92,1],[169.08,24.53,1],[-10.92,24.53,1],[93.2,-57.39,1],[-57.43,-1.73,1],[-86.8,-57.39,1],[-177.95,32.55,1],[-122.57,1.73,1],[177.95,-32.55,1],[122.57,-1.73,1],[2.05,32.55,1],[57.43,1.73,1],[-2.05,-32.55,1],[-93.2,57.39,1],[86.8,57.39,1],[-17.59,3.04,1],[170.04,72.16,1],[162.41,3.04,1],[86.81,-17.56,1],[9.96,-72.16,1],[-86.81,17.56,1],[-9.96,72.16,1],[-93.19,-17.56,1],[-170.04,-72.16,1],[93.19,17.56,1],[17.59,-3.04,1],[-162.41,-3.04,1],[39.38,44.26,1],[56.93,33.61,1],[-140.62,44.26,1],[38.42,27.03,1],[123.07,-33.61,1],[-38.42,-27.03,1],[-123.07,33.61,1],[-141.58,27.03,1],[-56.93,-33.61,1],[141.58,-27.03,1],[-39.38,-44.26,1],[140.62,-44.26,1]],[[165.52,26.52,1],[63.39,-60.04,1],[-14.48,26.52,1],[-62.74,12.93,1],[116.61,60.04,1],[62.74,-12.93,1],[-116.61,-60.04,1],[117.26,12.93,1],[-63.39,60.04,1],[-117.26,-12.93,1],[-165.52,-26.52,1],[14.48,-26.52,1],[-150.22,-21.62,1],[-141.41,-53.79,1],[29.78,-21.62,1],[-114.55,-27.5,1],[-38.59,53.79,1],[114.55,27.5,1],[38.59,-53.79,1],[65.45,-27.5,1],[141.41,53.79,1],[-65.45,27.5,1],[150.22,21.62,1],[-29.78,21.62,1],[-163.47,81.91,1],[92.31,-7.75,1],[16.53,81.91,1],[-7.76,-2.29,1],[87.69,7.75,1],[7.76,2.29,1],[-87.69,-7.75,1],[172.24,-2.29,1],[-92.31,7.75,1],[-172.24,2.29,1],[163.47,-81.91,1],[-16.53,-81.91,1],[-79.91,-73.49,1],[-106.27,2.85,1],[100.09,-73.49,1],[177.03,-16.24,1],[-73.73,-2.85,1],[-177.03,16.24,1],[73.73,2.85,1],[-2.97,-16.24,1],[106.27,-2.85,1],[2.97,16.24,1],[79.91,73.49,1],[-100.09,73.49,1],[-43.19,73.63,1],[101.37,11.86,1],[136.81,73.63,1],[12.09,-11.12,1],[78.63,-11.86,1],[-12.09,11.12,1],[-78.63,11.86,1],[-167.91,-11.12,1],[-101.37,-11.86,1],[167.91,11.12,1],[43.19,-73.63,1],[-136.81,-73.63,1],[109.86,-34.83,1],[-36.5,-16.19,1],[-70.14,-34.83,1],[-153.97,50.53,1],[-143.5,16.19,1],[153.97,-50.53,1],[143.5,-16.19,1],[26.03,50.53,1],[36.5,16.19,1],[-26.03,-50.53,1],[-109.86,34.83,1],[70.14,34.83,1],[-23.31,-6.54,1],[-163.84,65.83,1],[156.69,-6.54,1],[97.12,-23.15,1],[-16.16,-65.83,1],[-97.12,23.15,1],[16.16,65.83,1],[-82.88,-23.15,1],[163.84,-65.83,1],[82.88,23.15,1],[23.31,6.54,1],[-156.69,6.54,1],[-.87,-31.92,1],[-91.4,58.07,1],[179.13,-31.92,1],[121.93,-.74,1],[-88.6,-58.07,1],[-121.93,.74,1],[88.6,58.07,1],[-58.07,-.74,1],[91.4,-58.07,1],[58.07,.74,1],[.87,31.92,1],[-179.13,31.92,1],[163.12,43.35,1],[72.9,-44.1,1],[-16.88,43.35,1],[-45.39,12.19,1],[107.1,44.1,1],[45.39,-12.19,1],[-107.1,-44.1,1],[134.61,12.19,1],[-72.9,44.1,1],[-134.61,-12.19,1],[-163.12,-43.35,1],[16.88,-43.35,1],[-114.23,50.37,1],[127.06,-15.17,1],[65.77,50.37,1],[-18.77,-35.57,1],[52.94,15.17,1],[18.77,35.57,1],[-52.94,-15.17,1],[161.23,-35.57,1],[-127.06,15.17,1],[-161.23,35.57,1],[114.23,-50.37,1],[-65.77,-50.37,1],[54.17,30.16,1],[35.63,30.41,1],[-125.83,30.16,1],[45.21,44.51,1],[144.37,-30.41,1],[-45.21,-44.51,1],[-144.37,30.41,1],[-134.79,44.51,1],[-35.63,-30.41,1],[134.79,-44.51,1],[-54.17,-30.16,1],[125.83,-30.16,1],[126.2,41.73,1],[47.86,-26.15,1],[-53.8,41.73,1],[-33.51,37.03,1],[132.14,26.15,1],[33.51,-37.03,1],[-132.14,-26.15,1],[146.49,37.03,1],[-47.86,26.15,1],[-146.49,-37.03,1],[-126.2,-41.73,1],[53.8,-41.73,1],[-161.75,20.38,1],[130.12,-62.91,1],[18.25,20.38,1],[-68.63,-17.07,1],[49.88,62.91,1],[68.63,17.07,1],[-49.88,-62.91,1],[111.37,-17.07,1],[-130.12,62.91,1],[-111.37,17.07,1],[161.75,-20.38,1],[-18.25,-20.38,1],[2.71,48.49,1],[87.6,41.45,1],[-177.29,48.49,1],[41.48,1.8,1],[92.4,-41.45,1],[-41.48,-1.8,1],[-92.4,41.45,1],[-138.52,1.8,1],[-87.6,-41.45,1],[138.52,-1.8,1],[-2.71,-48.49,1],[177.29,-48.49,1],[-98.15,-27.54,1],[-152.22,-7.22,1],[81.85,-27.54,1],[-164.79,-61.37,1],[-27.78,7.22,1],[164.79,61.37,1],[27.78,-7.22,1],[15.21,-61.37,1],[152.22,7.22,1],[-15.21,61.37,1],[98.15,27.54,1],[-81.85,27.54,1]],[[-40.48,43.36,1],[124.51,33.58,1],[139.52,43.36,1],[38.85,-28.17,1],[55.49,-33.58,1],[-38.85,28.17,1],[-55.49,33.58,1],[-141.15,-28.17,1],[-124.51,-33.58,1],[141.15,28.17,1],[40.48,-43.36,1],[-139.52,-43.36,1],[56.01,17.18,1],[20.46,32.29,1],[-123.99,17.18,1],[61.05,52.38,1],[159.54,-32.29,1],[-61.05,-52.38,1],[-159.54,32.29,1],[-118.95,52.38,1],[-20.46,-32.29,1],[118.95,-52.38,1],[-56.01,-17.18,1],[123.99,-17.18,1],[-179.51,-8.95,1],[-93.08,-81.04,1],[.49,-8.95,1],[-98.95,-.48,1],[-86.92,81.04,1],[98.95,.48,1],[86.92,-81.04,1],[81.05,-.48,1],[93.08,81.04,1],[-81.05,.48,1],[179.51,8.95,1],[-.49,8.95,1],[12.04,-13.56,1],[-49.15,71.95,1],[-167.96,-13.56,1],[103.85,11.7,1],[-130.85,-71.95,1],[-103.85,-11.7,1],[130.85,71.95,1],[-76.15,11.7,1],[49.15,-71.95,1],[76.15,-11.7,1],[-12.04,13.56,1],[167.96,13.56,1],[-13.62,-58.2,1],[-98.3,30.8,1],[166.38,-58.2,1],[148.93,-7.13,1],[-81.7,-30.8,1],[-148.93,7.13,1],[81.7,30.8,1],[-31.07,-7.13,1],[98.3,-30.8,1],[31.07,7.13,1],[13.62,58.2,1],[-166.38,58.2,1],[65.26,-20.55,1],[-22.43,23.07,1],[-114.74,-20.55,1],[131.85,58.26,1],[-157.57,-23.07,1],[-131.85,-58.26,1],[157.57,23.07,1],[-48.15,58.26,1],[22.43,-23.07,1],[48.15,-58.26,1],[-65.26,20.55,1],[114.74,20.55,1],[-135.39,26.5,1],[144.63,-39.58,1],[44.61,26.5,1],[-55,-38.94,1],[35.37,39.58,1],[55,38.94,1],[-35.37,-39.58,1],[125,-38.94,1],[-144.63,39.58,1],[-125,38.94,1],[135.39,-26.5,1],[-44.61,-26.5,1],[114.95,-4.75,1],[-5.23,-24.86,1],[-65.05,-4.75,1],[-101.14,64.63,1],[-174.77,24.86,1],[101.14,-64.63,1],[174.77,-24.86,1],[78.86,64.63,1],[5.23,24.86,1],[-78.86,-64.63,1],[-114.95,4.75,1],[65.05,4.75,1],[35.85,52.64,1],[65.91,29.46,1],[-144.15,52.64,1],[31.75,20.82,1],[114.09,-29.46,1],[-31.75,-20.82,1],[-114.09,29.46,1],[-148.25,20.82,1],[-65.91,-29.46,1],[148.25,-20.82,1],[-35.85,-52.64,1],[144.15,-52.64,1],[86.45,11.52,1],[11.54,3.48,1],[-93.55,11.52,1],[16.9,77.95,1],[168.46,-3.48,1],[-16.9,-77.95,1],[-168.46,3.48,1],[-163.1,77.95,1],[-11.54,-3.48,1],[163.1,-77.95,1],[-86.45,-11.52,1],[93.55,-11.52,1],[135.24,4.02,1],[5.69,-45.1,1],[-44.76,4.02,1],[-84.35,44.62,1],[174.31,45.1,1],[84.35,-44.62,1],[-174.31,-45.1,1],[95.65,44.62,1],[-5.69,45.1,1],[-95.65,-44.62,1],[-135.24,-4.02,1],[44.76,-4.02,1],[-129.84,-18.16,1],[-156.86,-37.5,1],[50.16,-18.16,1],[-117.12,-46.85,1],[-23.14,37.5,1],[117.12,46.85,1],[23.14,-37.5,1],[62.88,-46.85,1],[156.86,37.5,1],[-62.88,46.85,1],[129.84,18.16,1],[-50.16,18.16,1],[-74.1,32.87,1],[146.1,13.3,1],[105.9,32.87,1],[22.97,-53.88,1],[33.9,-13.3,1],[-22.97,53.88,1],[-33.9,13.3,1],[-157.03,-53.88,1],[-146.1,-13.3,1],[157.03,53.88,1],[74.1,-32.87,1],[-105.9,-32.87,1],[-119.92,-5.64,1],[-173.5,-29.76,1],[60.08,-5.64,1],[-101.2,-59.6,1],[-6.5,29.76,1],[101.2,59.6,1],[6.5,-29.76,1],[78.8,-59.6,1],[173.5,29.76,1],[-78.8,59.6,1],[119.92,5.64,1],[-60.08,5.64,1],[73.14,16.13,1],[16.82,16.18,1],[-106.86,16.13,1],[45.09,66.83,1],[163.18,-16.18,1],[-45.09,-66.83,1],[-163.18,16.18,1],[-134.91,66.83,1],[-16.82,-16.18,1],[134.91,-66.83,1],[-73.14,-16.13,1],[106.86,-16.13,1],[-11.7,-43.38,1],[-102.11,45.38,1],[168.3,-43.38,1],[133.98,-8.47,1],[-77.89,-45.38,1],[-133.98,8.47,1],[77.89,45.38,1],[-46.02,-8.47,1],[102.11,-45.38,1],[46.02,8.47,1],[11.7,43.38,1],[-168.3,43.38,1],[-24.11,3.73,1],[170.94,65.63,1],[155.89,3.73,1],[85.92,-24.05,1],[9.06,-65.63,1],[-85.92,24.05,1],[-9.06,65.63,1],[-94.08,-24.05,1],[-170.94,-65.63,1],[94.08,24.05,1],[24.11,-3.73,1],[-155.89,-3.73,1]],[[104.6,-3.68,1],[-3.81,-14.57,1],[-75.4,-3.68,1],[-104.32,74.95,1],[-176.19,14.57,1],[104.32,-74.95,1],[176.19,-14.57,1],[75.68,74.95,1],[3.81,14.57,1],[-75.68,-74.95,1],[-104.6,3.68,1],[75.4,3.68,1],[153.77,-30.33,1],[-52.93,-50.74,1],[-26.23,-30.33,1],[-123.11,22.43,1],[-127.07,50.74,1],[123.11,-22.43,1],[127.07,-50.74,1],[56.89,22.43,1],[52.93,50.74,1],[-56.89,-22.43,1],[-153.77,30.33,1],[26.23,30.33,1],[35.99,-39.77,1],[-54.77,38.45,1],[-144.01,-39.77,1],[135.81,26.85,1],[-125.23,-38.45,1],[-135.81,-26.85,1],[125.23,38.45,1],[-44.19,26.85,1],[54.77,-38.45,1],[44.19,-26.85,1],[-35.99,39.77,1],[144.01,39.77,1],[71.82,-25.43,1],[-26.58,16.37,1],[-108.18,-25.43,1],[146.72,59.1,1],[-153.42,-16.37,1],[-146.72,-59.1,1],[153.42,16.37,1],[-33.28,59.1,1],[26.58,-16.37,1],[33.28,-59.1,1],[-71.82,25.43,1],[108.18,25.43,1],[-136.55,26.52,1],[144.03,-40.51,1],[43.45,26.52,1],[-55.5,-37.97,1],[35.97,40.51,1],[55.5,37.97,1],[-35.97,-40.51,1],[124.5,-37.97,1],[-144.03,40.51,1],[-124.5,37.97,1],[136.55,-26.52,1],[-43.45,-26.52,1],[-6.52,-1.08,1],[-170.58,83.4,1],[173.48,-1.08,1],[91.09,-6.52,1],[-9.42,-83.4,1],[-91.09,6.52,1],[9.42,83.4,1],[-88.91,-6.52,1],[170.58,-83.4,1],[88.91,6.52,1],[6.52,1.08,1],[-173.48,1.08,1],[-71.13,40.38,1],[138.05,14.26,1],[108.87,40.38,1],[20.82,-46.12,1],[41.95,-14.26,1],[-20.82,46.12,1],[-41.95,14.26,1],[-159.18,-46.12,1],[-138.05,-14.26,1],[159.18,46.12,1],[71.13,-40.38,1],[-108.87,-40.38,1],[-153.97,-27.97,1],[-129.57,-52.52,1],[26.03,-27.97,1],[-120.59,-22.81,1],[-50.43,52.52,1],[120.59,22.81,1],[50.43,-52.52,1],[59.41,-22.81,1],[129.57,52.52,1],[-59.41,22.81,1],[153.97,27.97,1],[-26.03,27.97,1],[-80.23,13.48,1],[166.33,9.49,1],[99.77,13.48,1],[35.29,-73.41,1],[13.67,-9.49,1],[-35.29,73.41,1],[-13.67,9.49,1],[-144.71,-73.41,1],[-166.33,-9.49,1],[144.71,73.41,1],[80.23,-13.48,1],[-99.77,-13.48,1],[55.43,-9,1],[-10.89,34.09,1],[-124.57,-9,1],[105.6,54.41,1],[-169.11,-34.09,1],[-105.6,-54.41,1],[169.11,34.09,1],[-74.4,54.41,1],[10.89,-34.09,1],[74.4,-54.41,1],[-55.43,9,1],[124.57,9,1],[68.32,-7.14,1],[-7.68,21.51,1],[-111.68,-7.14,1],[108.74,67.22,1],[-172.32,-21.51,1],[-108.74,-67.22,1],[172.32,21.51,1],[-71.26,67.22,1],[7.68,-21.51,1],[71.26,-67.22,1],[-68.32,7.14,1],[111.68,7.14,1],[-174.97,36.12,1],[96.85,-53.58,1],[5.03,36.12,1],[-53.77,-4.06,1],[83.15,53.58,1],[53.77,4.06,1],[-83.15,-53.58,1],[126.23,-4.06,1],[-96.85,53.58,1],[-126.23,4.06,1],[174.97,-36.12,1],[-5.03,-36.12,1],[-149.91,16.26,1],[149.81,-56.16,1],[30.09,16.26,1],[-71.37,-28.77,1],[30.19,56.16,1],[71.37,28.77,1],[-30.19,-56.16,1],[108.63,-28.77,1],[-149.81,56.16,1],[-108.63,28.77,1],[149.91,-16.26,1],[-30.09,-16.26,1],[2.52,-51.45,1],[-87.99,38.5,1],[-177.48,-51.45,1],[141.48,1.57,1],[-92.01,-38.5,1],[-141.48,-1.57,1],[92.01,38.5,1],[-38.52,1.57,1],[87.99,-38.5,1],[38.52,-1.57,1],[-2.52,51.45,1],[177.48,51.45,1],[161.12,-9.98,1],[-28.54,-68.73,1],[-18.88,-9.98,1],[-100.54,18.59,1],[-151.46,68.73,1],[100.54,-18.59,1],[151.46,-68.73,1],[79.46,18.59,1],[28.54,68.73,1],[-79.46,-18.59,1],[-161.12,9.98,1],[18.88,9.98,1],[12.84,24.97,1],[64.49,62.11,1],[-167.16,24.97,1],[64.47,11.62,1],[115.51,-62.11,1],[-64.47,-11.62,1],[-115.51,62.11,1],[-115.53,11.62,1],[-64.49,-62.11,1],[115.53,-11.62,1],[-12.84,-24.97,1],[167.16,-24.97,1],[74.13,41.65,1],[42.76,11.79,1],[-105.87,41.65,1],[17.09,45.95,1],[137.24,-11.79,1],[-17.09,-45.95,1],[-137.24,11.79,1],[-162.91,45.95,1],[-42.76,-11.79,1],[162.91,-45.95,1],[-74.13,-41.65,1],[105.87,-41.65,1],[154.04,1.27,1],[2.9,-64.01,1],[-25.96,1.27,1],[-88.59,25.96,1],[177.1,64.01,1],[88.59,-25.96,1],[-177.1,-64.01,1],[91.41,25.96,1],[-2.9,64.01,1],[-91.41,-25.96,1],[-154.04,-1.27,1],[25.96,-1.27,1]],[[24.8,-10.46,1],[-23.76,63.21,1],[-155.2,-10.46,1],[101.5,24.36,1],[-156.24,-63.21,1],[-101.5,-24.36,1],[156.24,63.21,1],[-78.5,24.36,1],[23.76,-63.21,1],[78.5,-24.36,1],[-24.8,10.46,1],[155.2,10.46,1],[-134.64,65.44,1],[108.01,-16.98,1],[45.36,65.44,1],[-17.8,-17.2,1],[71.99,16.98,1],[17.8,17.2,1],[-71.99,-16.98,1],[162.2,-17.2,1],[-108.01,16.98,1],[-162.2,17.2,1],[134.64,-65.44,1],[-45.36,-65.44,1],[177.6,54.85,1],[88.31,-35.12,1],[-2.4,54.85,1],[-35.13,1.38,1],[91.69,35.12,1],[35.13,-1.38,1],[-91.69,-35.12,1],[144.87,1.38,1],[-88.31,35.12,1],[-144.87,-1.38,1],[-177.6,-54.85,1],[2.4,-54.85,1],[157.93,82.01,1],[86.98,-7.4,1],[-22.07,82.01,1],[-7.41,2.99,1],[93.02,7.4,1],[7.41,-2.99,1],[-93.02,-7.4,1],[172.59,2.99,1],[-86.98,7.4,1],[-172.59,-2.99,1],[-157.93,-82.01,1],[22.07,-82.01,1],[42.48,-13.21,1],[-19.17,45.89,1],[-137.52,-13.21,1],[107.66,41.11,1],[-160.83,-45.89,1],[-107.66,-41.11,1],[160.83,45.89,1],[-72.34,41.11,1],[19.17,-45.89,1],[72.34,-41.11,1],[-42.48,13.21,1],[137.52,13.21,1],[28.48,10.9,1],[21.99,59.68,1],[-151.52,10.9,1],[77.65,27.92,1],[158.01,-59.68,1],[-77.65,-27.92,1],[-158.01,59.68,1],[-102.35,27.92,1],[-21.99,-59.68,1],[102.35,-27.92,1],[-28.48,-10.9,1],[151.52,-10.9,1],[-33.79,21.61,1],[144.53,50.59,1],[146.21,21.61,1],[64.51,-31.14,1],[35.47,-50.59,1],[-64.51,31.14,1],[-35.47,50.59,1],[-115.49,-31.14,1],[-144.53,-50.59,1],[115.49,31.14,1],[33.79,-21.61,1],[-146.21,-21.61,1],[-175.53,-31.74,1],[-97.19,-57.98,1],[4.47,-31.74,1],[-121.82,-3.8,1],[-82.81,57.98,1],[121.82,3.8,1],[82.81,-57.98,1],[58.18,-3.8,1],[97.19,57.98,1],[-58.18,3.8,1],[175.53,31.74,1],[-4.47,31.74,1],[89.4,19.43,1],[19.43,.56,1],[-90.6,19.43,1],[1.69,70.56,1],[160.57,-.56,1],[-1.69,-70.56,1],[-160.57,.56,1],[-178.31,70.56,1],[-19.43,-.56,1],[178.31,-70.56,1],[-89.4,-19.43,1],[90.6,-19.43,1],[-27.28,-27.88,1],[-130.91,51.78,1],[152.72,-27.88,1],[120.76,-23.9,1],[-49.09,-51.78,1],[-120.76,23.9,1],[49.09,51.78,1],[-59.24,-23.9,1],[130.91,-51.78,1],[59.24,23.9,1],[27.28,27.88,1],[-152.72,27.88,1],[139.9,-15.44,1],[-23.21,-47.5,1],[-40.1,-15.44,1],[-109.85,38.38,1],[-156.79,47.5,1],[109.85,-38.38,1],[156.79,-47.5,1],[70.15,38.38,1],[23.21,47.5,1],[-70.15,-38.38,1],[-139.9,15.44,1],[40.1,15.44,1],[-2.17,-43.33,1],[-92.29,46.62,1],[177.83,-43.33,1],[133.35,-1.58,1],[-87.71,-46.62,1],[-133.35,1.58,1],[87.71,46.62,1],[-46.65,-1.58,1],[92.29,-46.62,1],[46.65,1.58,1],[2.17,43.33,1],[-177.83,43.33,1],[41.12,27.96,1],[38.91,41.71,1],[-138.88,27.96,1],[54.83,35.51,1],[141.09,-41.71,1],[-54.83,-35.51,1],[-141.09,41.71,1],[-125.17,35.51,1],[-38.91,-41.71,1],[125.17,-35.51,1],[-41.12,-27.96,1],[138.88,-27.96,1],[-126.67,13.75,1],[163.04,-35.46,1],[53.33,13.75,1],[-67.73,-51.18,1],[16.96,35.46,1],[67.73,51.18,1],[-16.96,-35.46,1],[112.27,-51.18,1],[-163.04,35.46,1],[-112.27,51.18,1],[126.67,-13.75,1],[-53.33,-13.75,1],[6.02,-15.42,1],[-69.18,73.47,1],[-173.98,-15.42,1],[105.51,5.8,1],[-110.82,-73.47,1],[-105.51,-5.8,1],[110.82,73.47,1],[-74.49,5.8,1],[69.18,-73.47,1],[74.49,-5.8,1],[-6.02,15.42,1],[173.98,15.42,1],[160.08,33.45,1],[62.71,-51.67,1],[-19.92,33.45,1],[-54.9,16.52,1],[117.29,51.67,1],[54.9,-16.52,1],[-117.29,-51.67,1],[125.1,16.52,1],[-62.71,51.67,1],[-125.1,-16.52,1],[-160.08,-33.45,1],[19.92,-33.45,1],[80.34,6.51,1],[6.61,9.59,1],[-99.66,6.51,1],[55.76,78.37,1],[173.39,-9.59,1],[-55.76,-78.37,1],[-173.39,9.59,1],[-124.24,78.37,1],[-6.61,-9.59,1],[124.24,-78.37,1],[-80.34,-6.51,1],[99.66,-6.51,1],[6.25,24.64,1],[76.64,64.63,1],[-173.75,24.64,1],[65.23,5.68,1],[103.36,-64.63,1],[-65.23,-5.68,1],[-103.36,64.63,1],[-114.77,5.68,1],[-76.64,-64.63,1],[114.77,-5.68,1],[-6.25,-24.64,1],[173.75,-24.64,1],[51.41,-63.45,1],[-68.67,16.19,1],[-128.59,-63.45,1],[162.69,20.45,1],[-111.33,-16.19,1],[-162.69,-20.45,1],[111.33,16.19,1],[-17.31,20.45,1],[68.67,-16.19,1],[17.31,-20.45,1],[-51.41,63.45,1],[128.59,63.45,1],[-50.6,28.85,1],[144.51,33.77,1],[129.4,28.85,1],[49.04,-42.6,1],[35.49,-33.77,1],[-49.04,42.6,1],[-35.49,33.77,1],[-130.96,-42.6,1],[-144.51,-33.77,1],[130.96,42.6,1],[50.6,-28.85,1],[-129.4,-28.85,1]]],t=e[i-1];return t}utils$6.getAmbisonicDecMtx=getAmbisonicDecMtx;utils$6.getTdesign=getTdesign;utils$6.deg2rad=deg2rad;utils$6.rad2deg=rad2deg;utils$6.createNearestLookup=createNearestLookup;utils$6.findNearest=findNearest;Object.defineProperty(ambiMonoEncoder2D,"__esModule",{value:!0});var _classCallCheck2$l=classCallCheck,_classCallCheck3$l=_interopRequireDefault$l(_classCallCheck2$l),_createClass2$k=createClass,_createClass3$k=_interopRequireDefault$l(_createClass2$k);function _interopRequireDefault$l(i){return i&&i.__esModule?i:{default:i}}var utils$5=utils$6,monoEncoder2D=function(){function i(e,t){(0,_classCallCheck3$l.default)(this,i),this.initialized=!1,this.ctx=e,this.order=t,this.nCh=2*t+1,this.azim=0,this.elev=0,this.gains=new Array(this.nCh),this.gainNodes=new Array(this.nCh),this.in=this.ctx.createGain(),this.in.channelCountMode="explicit",this.in.channelCount=1,this.out=this.ctx.createChannelMerger(this.nCh);for(var n=0;n<this.nCh;n++)this.gainNodes[n]=this.ctx.createGain(),this.gainNodes[n].channelCountMode="explicit",this.gainNodes[n].channelCount=1;this.updateGains();for(var n=0;n<this.nCh;n++)this.in.connect(this.gainNodes[n]),this.gainNodes[n].connect(this.out,0,n);this.initialized=!0}return(0,_createClass3$k.default)(i,[{key:"updateGains",value:function(){for(var t=this.order,n=utils$5.getCircHarmonics(t,[this.azim]),r=0;r<this.nCh;r++)this.gainNodes[r].gain.value=n[r][0]}}]),i}();ambiMonoEncoder2D.default=monoEncoder2D;var ambiOrderLimiter={};Object.defineProperty(ambiOrderLimiter,"__esModule",{value:!0});var _classCallCheck2$k=classCallCheck,_classCallCheck3$k=_interopRequireDefault$k(_classCallCheck2$k),_createClass2$j=createClass,_createClass3$j=_interopRequireDefault$k(_createClass2$j);function _interopRequireDefault$k(i){return i&&i.__esModule?i:{default:i}}var orderLimiter=function(){function i(e,t,n){(0,_classCallCheck3$k.default)(this,i),this.ctx=e,this.orderIn=t,n<t?this.orderOut=n:this.orderOut=t,this.nChIn=(this.orderIn+1)*(this.orderIn+1),this.nChOut=(this.orderOut+1)*(this.orderOut+1),this.in=this.ctx.createChannelSplitter(this.nChIn),this.out=this.ctx.createChannelMerger(this.nChOut);for(var r=0;r<this.nChOut;r++)this.in.connect(this.out,r,r)}return(0,_createClass3$j.default)(i,[{key:"updateOrder",value:function(t){if(t<=this.orderIn)this.orderOut=t;else return;this.nChOut=(this.orderOut+1)*(this.orderOut+1),this.out.disconnect(),this.out=this.ctx.createChannelMerger(this.nChOut);for(var n=0;n<this.nChOut;n++)this.in.connect(this.out,n,n)}}]),i}();ambiOrderLimiter.default=orderLimiter;var ambiOrderLimiter2D={};Object.defineProperty(ambiOrderLimiter2D,"__esModule",{value:!0});var _classCallCheck2$j=classCallCheck,_classCallCheck3$j=_interopRequireDefault$j(_classCallCheck2$j),_createClass2$i=createClass,_createClass3$i=_interopRequireDefault$j(_createClass2$i);function _interopRequireDefault$j(i){return i&&i.__esModule?i:{default:i}}var orderLimiter2D=function(){function i(e,t,n){(0,_classCallCheck3$j.default)(this,i),this.ctx=e,this.orderIn=t,n<t?this.orderOut=n:this.orderOut=t,this.nChIn=2*this.orderIn+1,this.nChOut=2*this.orderOut+1,this.in=this.ctx.createChannelSplitter(this.nChIn),this.out=this.ctx.createChannelMerger(this.nChOut);for(var r=0;r<this.nChOut;r++)this.in.connect(this.out,r,r)}return(0,_createClass3$i.default)(i,[{key:"updateOrder",value:function(t){if(t<=this.orderIn)this.orderOut=t;else return;this.nChOut=2*this.orderOut+1,this.out.disconnect(),this.out=this.ctx.createChannelMerger(this.nChOut);for(var n=0;n<this.nChOut;n++)this.in.connect(this.out,n,n)}}]),i}();ambiOrderLimiter2D.default=orderLimiter2D;var ambiOrderWeight={};Object.defineProperty(ambiOrderWeight,"__esModule",{value:!0});var _classCallCheck2$i=classCallCheck,_classCallCheck3$i=_interopRequireDefault$i(_classCallCheck2$i),_createClass2$h=createClass,_createClass3$h=_interopRequireDefault$i(_createClass2$h),_sphericalHarmonicTransform$3=src,jshlib$3=_interopRequireWildcard$4(_sphericalHarmonicTransform$3);function _interopRequireWildcard$4(i){if(i&&i.__esModule)return i;var e={};if(i!=null)for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t]);return e.default=i,e}function _interopRequireDefault$i(i){return i&&i.__esModule?i:{default:i}}var orderWeight=function(){function i(e,t){(0,_classCallCheck3$i.default)(this,i),this.ctx=e,this.order=t,this.nCh=(this.order+1)*(this.order+1),this.in=this.ctx.createChannelSplitter(this.nCh),this.out=this.ctx.createChannelMerger(this.nCh),this.gains=new Array(this.nCh),this.orderGains=new Array(this.order+1),this.orderGains.fill(1);for(var n=0;n<this.nCh;n++)this.gains[n]=this.ctx.createGain(),this.in.connect(this.gains[n],n,0),this.gains[n].connect(this.out,0,n)}return(0,_createClass3$h.default)(i,[{key:"updateOrderGains",value:function(){for(var t,n=0;n<this.nCh;n++)t=Math.floor(Math.sqrt(n)),this.gains[n].gain.value=this.orderGains[t]}},{key:"computeMaxRECoeffs",value:function(){var t=this.order;this.orderGains[0]=1;for(var n=0,r=0,s=0,a=1;a<=t;a++)s=jshlib$3.recurseLegendrePoly(a,[Math.cos(2.406809/(t+1.51))],n,r),this.orderGains[a]=s[0][0],r=n,n=s}}]),i}();ambiOrderWeight.default=orderWeight;var ambiSceneRotator={};Object.defineProperty(ambiSceneRotator,"__esModule",{value:!0});var _classCallCheck2$h=classCallCheck,_classCallCheck3$h=_interopRequireDefault$h(_classCallCheck2$h),_createClass2$g=createClass,_createClass3$g=_interopRequireDefault$h(_createClass2$g),_sphericalHarmonicTransform$2=src,jshlib$2=_interopRequireWildcard$3(_sphericalHarmonicTransform$2);function _interopRequireWildcard$3(i){if(i&&i.__esModule)return i;var e={};if(i!=null)for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t]);return e.default=i,e}function _interopRequireDefault$h(i){return i&&i.__esModule?i:{default:i}}var sceneRotator=function(){function i(e,t){(0,_classCallCheck3$h.default)(this,i),this.ctx=e,this.order=t,this.nCh=(t+1)*(t+1),this.yaw=0,this.pitch=0,this.roll=0,this.rotMtx=numeric.identity(this.nCh),this.rotMtxNodes=new Array(this.order),this.in=this.ctx.createChannelSplitter(this.nCh),this.out=this.ctx.createChannelMerger(this.nCh);for(var n=1;n<=this.order;n++){for(var r=new Array(2*n+1),s=0;s<2*n+1;s++){r[s]=new Array(2*n+1);for(var a=0;a<2*n+1;a++)r[s][a]=this.ctx.createGain(),s==a?r[s][a].gain.value=1:r[s][a].gain.value=0}this.rotMtxNodes[n-1]=r}this.in.connect(this.out,0,0);var o=1;for(n=1;n<=this.order;n++){for(s=0;s<2*n+1;s++)for(a=0;a<2*n+1;a++)this.in.connect(this.rotMtxNodes[n-1][s][a],o+a,0),this.rotMtxNodes[n-1][s][a].connect(this.out,0,o+s);o=o+2*n+1}}return(0,_createClass3$g.default)(i,[{key:"updateRotMtx",value:function(){var t=this.yaw*Math.PI/180,n=this.pitch*Math.PI/180,r=this.roll*Math.PI/180;this.rotMtx=jshlib$2.getSHrotMtx(jshlib$2.yawPitchRoll2Rzyx(t,n,r),this.order);for(var s=1,a=1;a<this.order+1;a++){for(var o=0;o<2*a+1;o++)for(var c=0;c<2*a+1;c++)this.rotMtxNodes[a-1][o][c].gain.value=this.rotMtx[s+o][s+c];s=s+2*a+1}}}]),i}();ambiSceneRotator.default=sceneRotator;var ambiSceneRotator2D={};Object.defineProperty(ambiSceneRotator2D,"__esModule",{value:!0});var _classCallCheck2$g=classCallCheck,_classCallCheck3$g=_interopRequireDefault$g(_classCallCheck2$g),_createClass2$f=createClass,_createClass3$f=_interopRequireDefault$g(_createClass2$f);function _interopRequireDefault$g(i){return i&&i.__esModule?i:{default:i}}var sceneRotator2D=function(){function i(e,t){(0,_classCallCheck3$g.default)(this,i),this.ctx=e,this.order=t,this.nCh=2*t+1,this.yaw=0,this.in=this.ctx.createChannelSplitter(this.nCh),this.out=this.ctx.createChannelMerger(this.nCh),this.rotMtxNodes=new Array(2*this.order),this.in.connect(this.out,0,0);for(var n=0;n<2*this.order;n=n+2){var r=new Array(2);r[0]=this.ctx.createGain(),r[1]=this.ctx.createGain();var s=new Array(2);s[0]=this.ctx.createGain(),s[1]=this.ctx.createGain(),this.rotMtxNodes[n]=r,this.rotMtxNodes[n+1]=s,this.in.connect(this.rotMtxNodes[n][0],n+1,0),this.rotMtxNodes[n][0].connect(this.out,0,n+1),this.in.connect(this.rotMtxNodes[n][1],n+2,0),this.rotMtxNodes[n][1].connect(this.out,0,n+1),this.in.connect(this.rotMtxNodes[n+1][0],n+1,0),this.rotMtxNodes[n+1][0].connect(this.out,0,n+2),this.in.connect(this.rotMtxNodes[n+1][1],n+2,0),this.rotMtxNodes[n+1][1].connect(this.out,0,n+2)}this.updateRotMtx()}return(0,_createClass3$f.default)(i,[{key:"updateRotMtx",value:function(){for(var t=this.yaw*Math.PI/180,n=1,r=0;r<2*this.order;r=r+2)this.rotMtxNodes[r][0].gain.value=Math.cos(n*t),this.rotMtxNodes[r][1].gain.value=Math.sin(n*t),this.rotMtxNodes[r+1][0].gain.value=-Math.sin(n*t),this.rotMtxNodes[r+1][1].gain.value=Math.cos(n*t),n++}}]),i}();ambiSceneRotator2D.default=sceneRotator2D;var ambiSceneMirror={};Object.defineProperty(ambiSceneMirror,"__esModule",{value:!0});var _classCallCheck2$f=classCallCheck,_classCallCheck3$f=_interopRequireDefault$f(_classCallCheck2$f),_createClass2$e=createClass,_createClass3$e=_interopRequireDefault$f(_createClass2$e);function _interopRequireDefault$f(i){return i&&i.__esModule?i:{default:i}}var sceneMirror=function(){function i(e,t){(0,_classCallCheck3$f.default)(this,i),this.ctx=e,this.order=t,this.nCh=(t+1)*(t+1),this.mirrorPlane=0,this.in=this.ctx.createChannelSplitter(this.nCh),this.out=this.ctx.createChannelMerger(this.nCh),this.gains=new Array(this.nCh);for(var n=0;n<this.nCh;n++)this.gains[n]=this.ctx.createGain(),this.gains[n].gain.value=1,this.in.connect(this.gains[n],n,0),this.gains[n].connect(this.out,0,n)}return(0,_createClass3$e.default)(i,[{key:"reset",value:function(){for(var t=0;t<this.nCh;t++)this.gains[t].gain.value=1}},{key:"mirror",value:function(t){switch(t){case 0:this.mirrorPlane=0,this.reset();break;case 1:this.reset(),this.mirrorPlane=1;for(var s,n=0;n<=this.order;n++)for(var r=-n;r<=n;r++)s=n*n+n+r,(r<0&&r%2==0||r>0&&r%2==1)&&(this.gains[s].gain.value=-1);break;case 2:this.reset(),this.mirrorPlane=2;for(var s,n=0;n<=this.order;n++)for(var r=-n;r<=n;r++)s=n*n+n+r,r<0&&(this.gains[s].gain.value=-1);break;case 3:this.reset(),this.mirrorPlane=3;for(var s,n=0;n<=this.order;n++)for(var r=-n;r<=n;r++)s=n*n+n+r,(r+n)%2==1&&(this.gains[s].gain.value=-1);break;default:console.log("The mirroring planes can be either 1 (yz), 2 (xz), 3 (xy), or 0 (no mirroring). Value set to 0."),this.mirrorPlane=0,this.reset()}}}]),i}();ambiSceneMirror.default=sceneMirror;var ambiSceneMirror2D={};Object.defineProperty(ambiSceneMirror2D,"__esModule",{value:!0});var _classCallCheck2$e=classCallCheck,_classCallCheck3$e=_interopRequireDefault$e(_classCallCheck2$e),_createClass2$d=createClass,_createClass3$d=_interopRequireDefault$e(_createClass2$d);function _interopRequireDefault$e(i){return i&&i.__esModule?i:{default:i}}var sceneMirror2D=function(){function i(e,t){(0,_classCallCheck3$e.default)(this,i),this.ctx=e,this.order=t,this.nCh=2*t+1,this.mirrorPlane=0,this.in=this.ctx.createChannelSplitter(this.nCh),this.out=this.ctx.createChannelMerger(this.nCh),this.gains=new Array(this.nCh);for(var n=0;n<this.nCh;n++)this.gains[n]=this.ctx.createGain(),this.gains[n].gain.value=1,this.in.connect(this.gains[n],n,0),this.gains[n].connect(this.out,0,n)}return(0,_createClass3$d.default)(i,[{key:"reset",value:function(){for(var t=0;t<this.nCh;t++)this.gains[t].gain.value=1}},{key:"mirror",value:function(t){switch(t){case 0:this.mirrorPlane=0,this.reset();break;case 1:this.reset(),this.mirrorPlane=1;for(var n=2;n<this.nCh;n++)this.gains[n].gain.value=-1,n%2!=0&&(n=n+2);break;case 2:this.reset(),this.mirrorPlane=2;for(var n=0;n<this.nCh;n++)n%2!=0&&(this.gains[n].gain.value=-1);break;case 3:console.log("up-down mirroring in 2D mode not possible");break;default:console.log("The mirroring planes can be either 1 (yz), 2 (xz) or 0 (no mirroring). Value set to 0."),this.mirrorPlane=0,this.reset()}}}]),i}();ambiSceneMirror2D.default=sceneMirror2D;var ambiBinauralDecoder={};Object.defineProperty(ambiBinauralDecoder,"__esModule",{value:!0});var _classCallCheck2$d=classCallCheck,_classCallCheck3$d=_interopRequireDefault$d(_classCallCheck2$d),_createClass2$c=createClass,_createClass3$c=_interopRequireDefault$d(_createClass2$c);function _interopRequireDefault$d(i){return i&&i.__esModule?i:{default:i}}var binDecoder=function(){function i(e,t){(0,_classCallCheck3$d.default)(this,i),this.initialized=!1,this.ctx=e,this.order=t,this.nCh=(t+1)*(t+1),this.decFilters=new Array(this.nCh),this.decFilterNodes=new Array(this.nCh),this.in=this.ctx.createChannelSplitter(this.nCh),this.out=this.ctx.createChannelMerger(2),this.out.channelCountMode="explicit",this.out.channelCount=1,this.gainMid=this.ctx.createGain(),this.gainSide=this.ctx.createGain(),this.invertSide=this.ctx.createGain(),this.gainMid.gain.value=1,this.gainSide.gain.value=1,this.invertSide.gain.value=-1;for(var n=0;n<this.nCh;n++)this.decFilterNodes[n]=this.ctx.createConvolver(),this.decFilterNodes[n].normalize=!1;this.resetFilters();for(var n=0;n<this.nCh;n++){this.in.connect(this.decFilterNodes[n],n,0);var r=Math.floor(Math.sqrt(n)),s=n-r*r-r;s>=0?this.decFilterNodes[n].connect(this.gainMid):this.decFilterNodes[n].connect(this.gainSide)}this.gainMid.connect(this.out,0,0),this.gainSide.connect(this.out,0,0),this.gainMid.connect(this.out,0,1),this.gainSide.connect(this.invertSide,0,0),this.invertSide.connect(this.out,0,1),this.initialized=!0}return(0,_createClass3$c.default)(i,[{key:"updateFilters",value:function(t){for(var n=0;n<this.nCh;n++)this.decFilters[n]=this.ctx.createBuffer(1,t.length,t.sampleRate),this.decFilters[n].getChannelData(0).set(t.getChannelData(n)),this.decFilterNodes[n].buffer=this.decFilters[n]}},{key:"resetFilters",value:function(){var t=new Array(this.nCh);t.fill(0),t[0]=.5,t[1]=.5/Math.sqrt(3);for(var n=0;n<this.nCh;n++){this.decFilters[n]=this.ctx.createBuffer(1,64,this.ctx.sampleRate);for(var r=0;r<64;r++)this.decFilters[n].getChannelData(0)[r]=0;this.decFilters[n].getChannelData(0)[0]=t[n],this.decFilterNodes[n].buffer=this.decFilters[n]}}}]),i}();ambiBinauralDecoder.default=binDecoder;var ambiBinauralDecoder2D={};Object.defineProperty(ambiBinauralDecoder2D,"__esModule",{value:!0});var _classCallCheck2$c=classCallCheck,_classCallCheck3$c=_interopRequireDefault$c(_classCallCheck2$c),_createClass2$b=createClass,_createClass3$b=_interopRequireDefault$c(_createClass2$b);function _interopRequireDefault$c(i){return i&&i.__esModule?i:{default:i}}var binDecoder2D=function(){function i(e,t){(0,_classCallCheck3$c.default)(this,i),this.initialized=!1,this.ctx=e,this.order=t,this.nCh=2*t+1,this.decFilters=new Array(this.nCh),this.decFilterNodes=new Array(this.nCh),this.in=this.ctx.createChannelSplitter(this.nCh),this.out=this.ctx.createChannelMerger(2),this.out.channelCountMode="explicit",this.out.channelCount=1,this.gainMid=this.ctx.createGain(),this.gainSide=this.ctx.createGain(),this.invertSide=this.ctx.createGain(),this.gainMid.gain.value=1,this.gainSide.gain.value=1,this.invertSide.gain.value=-1;for(var n=0;n<this.nCh;n++)this.decFilterNodes[n]=this.ctx.createConvolver(),this.decFilterNodes[n].normalize=!1;this.resetFilters();for(var n=0;n<this.nCh;n++)this.in.connect(this.decFilterNodes[n],n,0),n%2==0?this.decFilterNodes[n].connect(this.gainMid):this.decFilterNodes[n].connect(this.gainSide);this.gainMid.connect(this.out,0,0),this.gainSide.connect(this.out,0,0),this.gainMid.connect(this.out,0,1),this.gainSide.connect(this.invertSide,0,0),this.invertSide.connect(this.out,0,1),this.initialized=!0}return(0,_createClass3$b.default)(i,[{key:"updateFilters",value:function(t){for(var n=0;n<this.nCh;n++)this.decFilters[n]=this.ctx.createBuffer(1,t.length,t.sampleRate),this.decFilters[n].getChannelData(0).set(t.getChannelData(n)),this.decFilterNodes[n].buffer=this.decFilters[n]}},{key:"resetFilters",value:function(){var t=new Array(this.nCh);t.fill(0),t[0]=.5,t[1]=.5/Math.sqrt(3);for(var n=0;n<this.nCh;n++){this.decFilters[n]=this.ctx.createBuffer(1,64,this.ctx.sampleRate);for(var r=0;r<64;r++)this.decFilters[n].getChannelData(0)[r]=0;this.decFilters[n].getChannelData(0)[0]=t[n],this.decFilterNodes[n].buffer=this.decFilters[n]}}}]),i}();ambiBinauralDecoder2D.default=binDecoder2D;var ambiDecoder={};Object.defineProperty(ambiDecoder,"__esModule",{value:!0});var _classCallCheck2$b=classCallCheck,_classCallCheck3$b=_interopRequireDefault$b(_classCallCheck2$b),_createClass2$a=createClass,_createClass3$a=_interopRequireDefault$b(_createClass2$a);function _interopRequireDefault$b(i){return i&&i.__esModule?i:{default:i}}var utils$4=utils$6,decoder$1=function(){function i(e,t){(0,_classCallCheck3$b.default)(this,i),this.ctx=e,this.order=t,this.nCh=(t+1)*(t+1),this.nSpk=0,this._decodingMatrix=[],this._spkSphPosArray=[],this.in=this.ctx.createChannelSplitter(this.nCh),this.out=this.ctx.createChannelMerger(1),this._spkSphPosArray=this._getDefaultSpkConfig(this.order),this._updateDecodeMtx(this._spkSphPosArray)}return(0,_createClass3$a.default)(i,[{key:"_updateDecodeMtx",value:function(t){this.nSpk=t.length,this.out=this.ctx.createChannelMerger(this.nSpk),this._decodingMatrix=utils$4.getAmbisonicDecMtx(t,this.order),this.mtxGain=new Array(this.nCh);for(var n=0;n<this.nCh;n++){this.mtxGain[n]=new Array(this.nSpk);for(var r=0;r<this.nSpk;r++){var s=this.ctx.createGain();s.gain.value=this._decodingMatrix[r][n],this.in.connect(s,n,0),s.connect(this.out,0,r),this.mtxGain[n][r]=s}}}},{key:"_getDefaultSpkConfig",value:function(t){var n=[];switch(t){case 1:n=[[0,0,1],[90,0,1],[180,0,1],[270,0,1],[0,90,1],[0,-90,1]];break;case 2:n=[[180,-31.7161,.5878],[180,31.7161,.5878],[-121.7161,0,.5878],[121.7161,0,.5878],[-90,-58.2839,.5878],[-90,58.2839,.5878],[90,-58.2839,.5878],[90,58.2839,.5878],[-58.2839,0,.5878],[58.2839,0,.5878],[0,-31.7161,.5878],[0,31.7161,.5878]];break;case 3:n=[[-159.0931,0,.5352],[159.0931,0,.5352],[-135,-35.2644,.5352],[-135,35.2644,.5352],[135,-35.2644,.5352],[135,35.2644,.5352],[180,-69.0931,.5352],[180,69.0931,.5352],[-90,-20.9069,.5352],[-90,20.9069,.5352],[90,-20.9069,.5352],[90,20.9069,.5352],[0,-69.0931,.5352],[0,69.0931,.5352],[-45,-35.2644,.5352],[-45,35.2644,.5352],[45,-35.2644,.5352],[45,35.2644,.5352],[-20.9069,0,.5352],[20.9069,0,.5352]];break;default:console.error("unsupported default order:",t)}return n}},{key:"speakerPos",set:function(t){t===void 0&&(t=this._getDefaultSpkConfig(this.order)),this._spkSphPosArray=t,this.out.disconnect(),this._updateDecodeMtx(t)},get:function(){return this._spkSphPosArray}}]),i}();ambiDecoder.default=decoder$1;var ambiConvolver={};Object.defineProperty(ambiConvolver,"__esModule",{value:!0});var _classCallCheck2$a=classCallCheck,_classCallCheck3$a=_interopRequireDefault$a(_classCallCheck2$a),_createClass2$9=createClass,_createClass3$9=_interopRequireDefault$a(_createClass2$9);function _interopRequireDefault$a(i){return i&&i.__esModule?i:{default:i}}var convolver$1=function(){function i(e,t){(0,_classCallCheck3$a.default)(this,i),this.initialized=!1,this.ctx=e,this.order=t,this.nCh=(t+1)*(t+1),this.encFilters=new Array(this.nCh),this.encFilterNodes=new Array(this.nCh),this.in=this.ctx.createGain(),this.in.channelCountMode="explicit",this.in.channelCount=1,this.out=this.ctx.createChannelMerger(this.nCh);for(var n=0;n<this.nCh;n++)this.encFilterNodes[n]=this.ctx.createConvolver(),this.encFilterNodes[n].normalize=!1;for(var n=0;n<this.nCh;n++)this.in.connect(this.encFilterNodes[n]),this.encFilterNodes[n].connect(this.out,0,n);this.initialized=!0}return(0,_createClass3$9.default)(i,[{key:"updateFilters",value:function(t){for(var n=0;n<this.nCh;n++)this.encFilters[n]=this.ctx.createBuffer(1,t.length,t.sampleRate),this.encFilters[n].getChannelData(0).set(t.getChannelData(n)),this.encFilterNodes[n].buffer=this.encFilters[n]}}]),i}();ambiConvolver.default=convolver$1;var ambiVirtualMic={};Object.defineProperty(ambiVirtualMic,"__esModule",{value:!0});var _classCallCheck2$9=classCallCheck,_classCallCheck3$9=_interopRequireDefault$9(_classCallCheck2$9),_createClass2$8=createClass,_createClass3$8=_interopRequireDefault$9(_createClass2$8),_sphericalHarmonicTransform$1=src,jshlib$1=_interopRequireWildcard$2(_sphericalHarmonicTransform$1);function _interopRequireWildcard$2(i){if(i&&i.__esModule)return i;var e={};if(i!=null)for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t]);return e.default=i,e}function _interopRequireDefault$9(i){return i&&i.__esModule?i:{default:i}}var virtualMic=function(){function i(e,t){(0,_classCallCheck3$9.default)(this,i),this.initialized=!1,this.ctx=e,this.order=t,this.nCh=(t+1)*(t+1),this.azim=0,this.elev=0,this.vmicGains=new Array(this.nCh),this.vmicGainNodes=new Array(this.nCh),this.vmicCoeffs=new Array(this.order+1),this.vmicPattern="hypercardioid",this.in=this.ctx.createChannelSplitter(this.nCh),this.out=this.ctx.createGain();for(var n=0;n<this.nCh;n++)this.vmicGainNodes[n]=this.ctx.createGain();for(this.SHxyz=new Array(this.nCh),this.SHxyz.fill(0),this.updatePattern(),this.updateOrientation(),n=0;n<this.nCh;n++)this.in.connect(this.vmicGainNodes[n],n,0),this.vmicGainNodes[n].connect(this.out);this.initialized=!0}return(0,_createClass3$8.default)(i,[{key:"updatePattern",value:function(){function t(a){for(var o=new Array(a+1),c=0;c<=a;c++)o[c]=jshlib$1.factorial(a)*jshlib$1.factorial(a)/(jshlib$1.factorial(a+c+1)*jshlib$1.factorial(a-c));return o}function n(a){for(var o=new Array(a+1),c=(a+1)*(a+1),l=0;l<=a;l++)o[l]=1/c;return o}function r(a){switch(a){case 1:var o=[.366,.2113];break;case 2:var o=[.2362,.1562,.059];break;case 3:var o=[.1768,.1281,.0633,.0175];break;case 4:var o=[.1414,.1087,.0623,.0247,.0054];break;default:console.error("Orders should be in the range of 1-4 at the moment.");return}return o}function s(a){var o=new Array(a+1);o[0]=1;for(var c=0,l=0,u=0,h=1;h<a+1;h++)u=jshlib$1.recurseLegendrePoly(h,[Math.cos(2.406809/(a+1.51))],c,l),o[h]=u[0][0],l=c,c=u;for(var d=0,h=0;h<=a;h++)d+=o[h]*(2*h+1);for(var h=0;h<=a;h++)o[h]=o[h]/d;return o}switch(this.vmicPattern){case"cardioid":this.vmicCoeffs=t(this.order);break;case"supercardioid":this.vmicCoeffs=r(this.order);break;case"hypercardioid":this.vmicCoeffs=n(this.order);break;case"max_rE":this.vmicCoeffs=s(this.order);break;default:this.vmicPattern="hypercardioid",this.vmicCoeffs=n(this.order)}this.updateGains()}},{key:"updateOrientation",value:function(){for(var t=this.azim*Math.PI/180,n=this.elev*Math.PI/180,r=jshlib$1.computeRealSH(this.order,[[t,n]]),s=0;s<this.nCh;s++)this.SHxyz[s]=r[s][0];this.updateGains()}},{key:"updateGains",value:function(){for(var t,n=0;n<=this.order;n++)for(var r=-n;r<=n;r++)t=n*n+n+r,this.vmicGains[t]=this.vmicCoeffs[n]*this.SHxyz[t];for(var s=0;s<this.nCh;s++)this.vmicGainNodes[s].gain.value=this.vmicGains[s]}}]),i}();ambiVirtualMic.default=virtualMic;var ambiRmsAnalyser={};if(commonjsGlobal.AnalyserNode&&!commonjsGlobal.AnalyserNode.prototype.getFloatTimeDomainData){var uint8=new Uint8Array(2048);commonjsGlobal.AnalyserNode.prototype.getFloatTimeDomainData=function(i){this.getByteTimeDomainData(uint8);for(var e=0,t=i.length;e<t;e++)i[e]=(uint8[e]-128)*.0078125}}Object.defineProperty(ambiRmsAnalyser,"__esModule",{value:!0});var _classCallCheck2$8=classCallCheck,_classCallCheck3$8=_interopRequireDefault$8(_classCallCheck2$8),_createClass2$7=createClass,_createClass3$7=_interopRequireDefault$8(_createClass2$7);function _interopRequireDefault$8(i){return i&&i.__esModule?i:{default:i}}var rmsAnalyser=function(){function i(e,t){(0,_classCallCheck3$8.default)(this,i),this.ctx=e,this.order=t,this.nCh=(t+1)*(t+1),this.fftSize=2048,this.in=this.ctx.createChannelSplitter(this.nCh),this.out=this.ctx.createChannelMerger(this.nCh),this.analysers=new Array(this.nCh),this.analBuffers=new Array(this.nCh);for(var n=0;n<this.nCh;n++)this.analysers[n]=this.ctx.createAnalyser(),this.analysers[n].fftSize=this.fftSize,this.analysers[n].smoothingTimeConstant=0,this.analBuffers[n]=new Float32Array(this.fftSize),this.in.connect(this.analysers[n],n,0),this.analysers[n].connect(this.out,0,n)}return(0,_createClass3$7.default)(i,[{key:"updateBuffers",value:function(){for(var t=0;t<this.nCh;t++)this.analysers[t].getFloatTimeDomainData(this.analBuffers[t])}},{key:"computeRMS",value:function(){var t=new Array(this.nCh);t.fill(0);for(var n=0;n<this.nCh;n++){for(var r=0;r<this.fftSize;r++)t[n]=t[n]+this.analBuffers[n][r]*this.analBuffers[n][r];t[n]=Math.sqrt(t[n]/this.fftSize)}return t}}]),i}();ambiRmsAnalyser.default=rmsAnalyser;var ambiPowermapAnalyser={};Object.defineProperty(ambiPowermapAnalyser,"__esModule",{value:!0});var _classCallCheck2$7=classCallCheck,_classCallCheck3$7=_interopRequireDefault$7(_classCallCheck2$7),_createClass2$6=createClass,_createClass3$6=_interopRequireDefault$7(_createClass2$6),_numeric=numeric1_2_6,numeric$1=_interopRequireWildcard$1(_numeric),_sphericalHarmonicTransform=src,jshlib=_interopRequireWildcard$1(_sphericalHarmonicTransform);function _interopRequireWildcard$1(i){if(i&&i.__esModule)return i;var e={};if(i!=null)for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t]);return e.default=i,e}function _interopRequireDefault$7(i){return i&&i.__esModule?i:{default:i}}var utils$3=utils$6,powermapAnalyser=function(){function i(e,t,n){(0,_classCallCheck3$7.default)(this,i),this.ctx=e,this.order=t,this.nCh=(t+1)*(t+1),this.fftSize=2048,this.analysers=new Array(this.nCh),this.analBuffers=new Array(this.nCh),this.in=this.ctx.createChannelSplitter(this.nCh),this.out=this.ctx.createChannelMerger(this.nCh);for(var r=0;r<this.nCh;r++)this.analysers[r]=this.ctx.createAnalyser(),this.analysers[r].fftSize=this.fftSize,this.analysers[r].smoothingTimeConstant=0,this.analBuffers[r]=new Float32Array(this.fftSize);for(var s=0;s<this.nCh;s++)this.in.connect(this.out,s,s),this.in.connect(this.analysers[s],s,0);var a=utils$3.getTdesign(4*t);this.td_dirs_rad=utils$3.deg2rad(a),this.SHmtx=jshlib.computeRealSH(this.order,this.td_dirs_rad),this.mode=n}return(0,_createClass3$6.default)(i,[{key:"updateBuffers",value:function(){for(var t=0;t<this.nCh;t++)this.analysers[t].getFloatTimeDomainData(this.analBuffers[t])}},{key:"computePowermap",value:function(){for(var t=this.td_dirs_rad.length,n=numeric$1.dot(numeric$1.transpose(this.SHmtx),this.analBuffers),r=new Array(t),s=0;s<t;s++){for(var a=0;a<this.fftSize;a++){var o=0;o=o+n[s][a]*n[s][a]}var o=o/this.fftSize;r[s]=[this.td_dirs_rad[s][0],this.td_dirs_rad[s][1],o]}if(this.mode==0)return r;if(this.mode==1){var c=jshlib.forwardSHT(2*this.order,r);return c}}}]),i}();ambiPowermapAnalyser.default=powermapAnalyser;var ambiIntensityAnalyser={};Object.defineProperty(ambiIntensityAnalyser,"__esModule",{value:!0});var _classCallCheck2$6=classCallCheck,_classCallCheck3$6=_interopRequireDefault$6(_classCallCheck2$6),_createClass2$5=createClass,_createClass3$5=_interopRequireDefault$6(_createClass2$5);function _interopRequireDefault$6(i){return i&&i.__esModule?i:{default:i}}var intensityAnalyser=function(){function i(e){(0,_classCallCheck3$6.default)(this,i),this.ctx=e,this.fftSize=2048,this.in=this.ctx.createChannelSplitter(4),this.out=this.ctx.createChannelMerger(4),this.gains=new Array(3);for(var t=0;t<3;t++)this.gains[t]=this.ctx.createGain(),this.gains[t].gain.value=1/Math.sqrt(3);for(this.analysers=new Array(4),this.analBuffers=new Array(4),t=0;t<4;t++)this.analysers[t]=this.ctx.createAnalyser(),this.analysers[t].fftSize=this.fftSize,this.analysers[t].smoothingTimeConstant=0,this.analBuffers[t]=new Float32Array(this.fftSize);for(this.in.connect(this.out,0,0),this.in.connect(this.analysers[0],0,0),this.in.connect(this.gains[1],1,0),this.in.connect(this.gains[2],2,0),this.in.connect(this.gains[0],3,0),t=0;t<3;t++)this.gains[t].connect(this.analysers[t+1],0,0),this.gains[t].connect(this.out,0,t+1)}return(0,_createClass3$5.default)(i,[{key:"updateBuffers",value:function(){for(var t=0;t<4;t++)this.analysers[t].getFloatTimeDomainData(this.analBuffers[t])}},{key:"computeIntensity",value:function(){for(var t=0,n=0,r=0,s=0,a=0,o=0,c=0,l,u,h,d,f,m,v=0;v<this.fftSize;v++)t=t+this.analBuffers[0][v]*this.analBuffers[1][v],n=n+this.analBuffers[0][v]*this.analBuffers[2][v],r=r+this.analBuffers[0][v]*this.analBuffers[3][v],s=s+this.analBuffers[0][v]*this.analBuffers[0][v],a=a+this.analBuffers[1][v]*this.analBuffers[1][v],o=o+this.analBuffers[2][v]*this.analBuffers[2][v],c=c+this.analBuffers[3][v]*this.analBuffers[3][v];l=[t,n,r],u=Math.sqrt(l[0]*l[0]+l[1]*l[1]+l[2]*l[2]),h=(s+a+o+c)/2,d=1-u/(h+1e-7),f=Math.atan2(n,t)*180/Math.PI,m=Math.atan2(l[2],Math.sqrt(l[0]*l[0]+l[1]*l[1]))*180/Math.PI;var g=[f,m,d,h];return g}}]),i}();ambiIntensityAnalyser.default=intensityAnalyser;var ambiIntensityAnalyser2D={};Object.defineProperty(ambiIntensityAnalyser2D,"__esModule",{value:!0});var _classCallCheck2$5=classCallCheck,_classCallCheck3$5=_interopRequireDefault$5(_classCallCheck2$5),_createClass2$4=createClass,_createClass3$4=_interopRequireDefault$5(_createClass2$4);function _interopRequireDefault$5(i){return i&&i.__esModule?i:{default:i}}var intensityAnalyser2D=function(){function i(e){(0,_classCallCheck3$5.default)(this,i),this.ctx=e,this.fftSize=2048,this.in=this.ctx.createChannelSplitter(3),this.out=this.ctx.createChannelMerger(3),this.gains=new Array(2);for(var t=0;t<2;t++)this.gains[t]=this.ctx.createGain(),this.gains[t].gain.value=1/Math.sqrt(3);for(this.analysers=new Array(3),this.analBuffers=new Array(3),t=0;t<3;t++)this.analysers[t]=this.ctx.createAnalyser(),this.analysers[t].fftSize=this.fftSize,this.analysers[t].smoothingTimeConstant=0,this.analBuffers[t]=new Float32Array(this.fftSize);for(this.in.connect(this.out,0,0),this.in.connect(this.analysers[0],0,0),this.in.connect(this.gains[1],1,0),this.in.connect(this.gains[0],2,0),t=0;t<2;t++)this.gains[t].connect(this.analysers[t+1],0,0),this.gains[t].connect(this.out,0,t+1)}return(0,_createClass3$4.default)(i,[{key:"updateBuffers",value:function(){for(var t=0;t<3;t++)this.analysers[t].getFloatTimeDomainData(this.analBuffers[t])}},{key:"computeIntensity",value:function(){for(var t=0,n=0,r=0,s=0,a=0,o,c,l,u,h,d,f=0;f<this.fftSize;f++)t=t+this.analBuffers[0][f]*this.analBuffers[1][f],n=n+this.analBuffers[0][f]*this.analBuffers[2][f],r=r+this.analBuffers[0][f]*this.analBuffers[0][f],s=s+this.analBuffers[1][f]*this.analBuffers[1][f],a=a+this.analBuffers[2][f]*this.analBuffers[2][f];o=[t,n],c=Math.sqrt(o[0]*o[0]+o[1]*o[1]),l=(r+s+a)/2,u=1-c/(l+1e-7),h=-Math.atan2(n,t)*180/Math.PI,d=0;var m=[h,d,u,l];return m}}]),i}();ambiIntensityAnalyser2D.default=intensityAnalyser2D;var hoaLoader={};Object.defineProperty(hoaLoader,"__esModule",{value:!0});var _classCallCheck2$4=classCallCheck,_classCallCheck3$4=_interopRequireDefault$4(_classCallCheck2$4),_createClass2$3=createClass,_createClass3$3=_interopRequireDefault$4(_createClass2$3);function _interopRequireDefault$4(i){return i&&i.__esModule?i:{default:i}}var HOAloader=function(){function i(e,t,n,r){(0,_classCallCheck3$4.default)(this,i),this.context=e,this.order=t,this.nCh=(t+1)*(t+1),this.nChGroups=Math.ceil(this.nCh/8),this.buffers=new Array,this.loadCount=0,this.loaded=!1,this.onLoad=r,this.urls=new Array(this.nChGroups);var s=n.slice(n.length-3,n.length);this.fileExt=s;for(var a=0;a<this.nChGroups;a++)a==this.nChGroups-1?this.urls[a]=n.slice(0,n.length-4)+"_"+o(a*8+1,2)+"-"+o(this.nCh,2)+"ch."+s:this.urls[a]=n.slice(0,n.length-4)+"_"+o(a*8+1,2)+"-"+o(a*8+8,2)+"ch."+s;function o(c,l){return("000000000"+c).substr(-l)}}return(0,_createClass3$3.default)(i,[{key:"loadBuffers",value:function(t,n){var r=new XMLHttpRequest;r.open("GET",t,!0),r.responseType="arraybuffer";var s=this;r.onload=function(){s.context.decodeAudioData(r.response,function(a){if(!a){alert("error decoding file data: "+t);return}s.buffers[n]=a,s.loadCount++,s.loadCount==s.nChGroups&&(s.loaded=!0,s.concatBuffers(),console.log("HOAloader: all buffers loaded and concatenated"),s.onLoad(s.concatBuffer))},function(a){alert("Browser cannot decode audio data:  "+t+`

Error: `+a+`

(If you re using Safari and get a null error, this is most likely due to Apple's shady plan going on to stop the .ogg format from easing web developer's life :)`)})},r.onerror=function(){alert("HOAloader: XHR error")},r.send()}},{key:"load",value:function(){for(var t=0;t<this.nChGroups;++t)this.loadBuffers(this.urls[t],t)}},{key:"concatBuffers",value:function(){if(this.loaded){var t=this.nCh,n=this.nChGroups,r=this.buffers[0].length;this.buffers.forEach(function(l){r=Math.max(r,l.length)});var s=this.buffers[0].sampleRate,a=[1,2,3,4,5,6,7,8];this.fileExt.toLowerCase()=="ogg"&&(console.log("Loading of 8chan OGG files [Chrome/Firefox]: remap channels to correct order!"),a=[1,3,2,7,8,5,6,4]),this.concatBuffer=this.context.createBuffer(t,r,s);for(var o=0;o<n;o++)for(var c=0;c<this.buffers[o].numberOfChannels;c++)this.concatBuffer.getChannelData(o*8+c).set(this.buffers[o].getChannelData(a[c]-1))}}}]),i}();hoaLoader.default=HOAloader;var hrirLoader_local={};Object.defineProperty(hrirLoader_local,"__esModule",{value:!0});var _classCallCheck2$3=classCallCheck,_classCallCheck3$3=_interopRequireDefault$3(_classCallCheck2$3),_createClass2$2=createClass,_createClass3$2=_interopRequireDefault$3(_createClass2$2);function _interopRequireDefault$3(i){return i&&i.__esModule?i:{default:i}}var utils$2=utils$6,HRIRloader_local=function(){function i(e,t,n){(0,_classCallCheck3$3.default)(this,i),this.context=e,this.order=t,this.nCh=(t+1)*(t+1),this.onLoad=n,this.vls_dirs_deg=utils$2.getTdesign(2*this.order),this.nVLS=this.vls_dirs_deg.length,this.nearestLookupRes=[5,5]}return(0,_createClass3$2.default)(i,[{key:"load",value:function(t){var n=this,r=new XMLHttpRequest;r.open("GET",t,!0),r.responseType="json",r.onload=function(){n.parseHrirFromJSON(r.response),n.nearestLookup=utils$2.createNearestLookup(n.hrir_dirs_deg,n.nearestLookupRes);var s=utils$2.findNearest(n.vls_dirs_deg,n.nearestLookup,n.nearestLookupRes);n.nearest_dirs_deg=n.getClosestDirs(s,n.hrir_dirs_deg),n.vls_hrirs=n.getClosestHrirFilters(s,n.hrirs),n.computeDecFilters()},r.send()}},{key:"parseHrirFromJSON",value:function(t){var n=this;this.fs=t.leaves[6].data[0],this.nHrirs=t.leaves[4].data.length,this.nSamples=t.leaves[8].data[0][1].length,this.hrir_dirs_deg=[],t.leaves[4].data.forEach(function(r){n.hrir_dirs_deg.push([r[0],r[1]])}),this.hrirs=[],t.leaves[8].data.forEach(function(r){var s=new Float64Array(r[0]),a=new Float64Array(r[1]);n.hrirs.push([s,a])})}},{key:"getClosestDirs",value:function(t,n){for(var r=t.length,s=[],a=0;a<r;a++)s.push(n[t[a]]);return s}},{key:"getClosestHrirFilters",value:function(t,n){for(var r=t.length,s=[],a=0;a<r;a++)s.push(n[t[a]]);return s}},{key:"computeDecFilters",value:function(){this.decodingMatrix=utils$2.getAmbiBinauralDecMtx(this.nearest_dirs_deg,this.order),this.hoaBuffer=this.getHoaFilterFromHrirFilter(this.nCh,this.nSamples,this.fs,this.vls_hrirs,this.decodingMatrix),this.onLoad(this.hoaBuffer)}},{key:"getHoaFilterFromHrirFilter",value:function(t,n,r,s,a){n>s[0][0].length&&(n=s[0][0].length);for(var o=this.context.createBuffer(t,n,r),c=0;c<t;c++){for(var l=new Float32Array(n),u=0;u<s.length;u++)for(var h=0;h<n;h++)l[h]+=a[u][c]*s[u][0][h];o.getChannelData(c).set(l)}return o}}]),i}();hrirLoader_local.default=HRIRloader_local;var hrirLoader2D_local={};Object.defineProperty(hrirLoader2D_local,"__esModule",{value:!0});var _classCallCheck2$2=classCallCheck,_classCallCheck3$2=_interopRequireDefault$2(_classCallCheck2$2),_createClass2$1=createClass,_createClass3$1=_interopRequireDefault$2(_createClass2$1);function _interopRequireDefault$2(i){return i&&i.__esModule?i:{default:i}}var utils$1=utils$6,HRIRloader2D_local=function(){function i(e,t,n){(0,_classCallCheck3$2.default)(this,i),this.context=e,this.order=t,this.nCh=2*t+1,this.onLoad=n,this.vls_dirs_deg=utils$1.sampleCircle(2*this.order+2),this.nVLS=this.vls_dirs_deg.length,this.nearestLookupRes=[5,5]}return(0,_createClass3$1.default)(i,[{key:"load",value:function(t){var n=this,r=new XMLHttpRequest;r.open("GET",t,!0),r.responseType="json",r.onload=function(){n.parseHrirFromJSON(r.response),n.nearestLookup=utils$1.createNearestLookup(n.hrir_dirs_deg,n.nearestLookupRes);var s=utils$1.findNearest(n.vls_dirs_deg,n.nearestLookup,n.nearestLookupRes);n.nearest_dirs_deg=n.getClosestDirs(s,n.hrir_dirs_deg),n.vls_hrirs=n.getClosestHrirFilters(s,n.hrirs),n.computeDecFilters()},r.send()}},{key:"parseHrirFromJSON",value:function(t){var n=this;this.fs=t.leaves[6].data[0],this.nHrirs=t.leaves[4].data.length,this.nSamples=t.leaves[8].data[0][1].length,this.hrir_dirs_deg=[],t.leaves[4].data.forEach(function(r){n.hrir_dirs_deg.push([r[0],r[1]])}),this.hrirs=[],t.leaves[8].data.forEach(function(r){var s=new Float64Array(r[0]),a=new Float64Array(r[1]);n.hrirs.push([s,a])})}},{key:"getClosestDirs",value:function(t,n){for(var r=t.length,s=[],a=0;a<r;a++)s.push(n[t[a]]);return s}},{key:"getClosestHrirFilters",value:function(t,n){for(var r=t.length,s=[],a=0;a<r;a++)s.push(n[t[a]]);return s}},{key:"computeDecFilters",value:function(){var t=[];t.push(1);for(var n=1;n<this.order+1;n++)t.push(Math.cos(n*Math.PI/(2*this.order+2))),t.push(Math.cos(n*Math.PI/(2*this.order+2)));var r=numeric.diag(t);this.decodingMatrix=numeric.transpose(utils$1.getCircHarmonics(this.order,utils$1.getColumn(this.vls_dirs_deg,0))),this.decodingMatrix=numeric.dot(this.decodingMatrix,r),this.decodingMatrix=numeric.mul(2*Math.PI/this.vls_dirs_deg.length,this.decodingMatrix),this.hoaBuffer=this.getHoaFilterFromHrirFilter(this.nCh,this.nSamples,this.fs,this.vls_hrirs,this.decodingMatrix),this.onLoad(this.hoaBuffer)}},{key:"getHoaFilterFromHrirFilter",value:function(t,n,r,s,a){n>s[0][0].length&&(n=s[0][0].length);for(var o=this.context.createBuffer(t,n,r),c=0;c<t;c++){for(var l=new Float32Array(n),u=0;u<s.length;u++)for(var h=0;h<n;h++)l[h]+=a[u][c]*s[u][0][h];o.getChannelData(c).set(l)}return o}}]),i}();hrirLoader2D_local.default=HRIRloader2D_local;var hrirLoader_ircam={};function commonjsRequire(i){throw new Error('Could not dynamically require "'+i+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var serveSofaHrir$1={exports:{}};(function(i,e){(function(t){i.exports=t()})(function(){return function t(n,r,s){function a(l,u){if(!r[l]){if(!n[l]){var h=typeof commonjsRequire=="function"&&commonjsRequire;if(!u&&h)return h(l,!0);if(o)return o(l,!0);var d=new Error("Cannot find module '"+l+"'");throw d.code="MODULE_NOT_FOUND",d}var f=r[l]={exports:{}};n[l][0].call(f.exports,function(m){var v=n[l][1][m];return a(v||m)},f,f.exports,t,n,r,s)}return r[l].exports}for(var o=typeof commonjsRequire=="function"&&commonjsRequire,c=0;c<s.length;c++)a(s[c]);return a}({1:[function(t,n,r){n.exports={default:t("core-js/library/fn/object/define-property"),__esModule:!0}},{"core-js/library/fn/object/define-property":4}],2:[function(t,n,r){r.default=function(s,a){if(!(s instanceof a))throw new TypeError("Cannot call a class as a function")},r.__esModule=!0},{}],3:[function(t,n,r){var s=t("babel-runtime/core-js/object/define-property").default;r.default=function(){function a(o,c){for(var l=0;l<c.length;l++){var u=c[l];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),s(o,u.key,u)}}return function(o,c,l){return c&&a(o.prototype,c),l&&a(o,l),o}}(),r.__esModule=!0},{"babel-runtime/core-js/object/define-property":1}],4:[function(t,n,r){var s=t("../../modules/$");n.exports=function(o,c,l){return s.setDesc(o,c,l)}},{"../../modules/$":5}],5:[function(t,n,r){var s=Object;n.exports={create:s.create,getProto:s.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:s.getOwnPropertyDescriptor,setDesc:s.defineProperty,setDescs:s.defineProperties,getKeys:s.keys,getNames:s.getOwnPropertyNames,getSymbols:s.getOwnPropertySymbols,each:[].forEach}},{}],6:[function(t,n,r){var s=t("babel-runtime/helpers/create-class").default,a=t("babel-runtime/helpers/class-call-check").default;Object.defineProperty(r,"__esModule",{value:!0});var o=function(){function c(l,u){a(this,c),this.delayTime=0,this.posRead=0,this.posWrite=0,this.fracXi1=0,this.fracYi1=0,this.intDelay=0,this.fracDelay=0,this.a1=void 0,this.sampleRate=l,this.maxDelayTime=u||1,this.bufferSize=this.maxDelayTime*this.sampleRate,this.bufferSize%1!==0&&(this.bufferSize=parseInt(this.bufferSize)+1),this.buffer=new Float32Array(this.bufferSize)}return s(c,[{key:"setDelay",value:function(u){if(u<this.maxDelayTime){this.delayTime=u;var h=u*this.sampleRate;this.intDelay=parseInt(h),this.fracDelay=h-this.intDelay,this.resample(),this.fracDelay!==0&&this.updateThiranCoefficient()}else throw new Error("delayTime > maxDelayTime")}},{key:"getDelay",value:function(){return this.delayTime}},{key:"process",value:function(u){for(var h=new Float32Array(u.length),d=0;d<u.length;d=d+1)this.buffer[this.posWrite]=u[d],h[d]=this.buffer[this.posRead],this.updatePointers();return this.fracDelay===0||(h=new Float32Array(this.fractionalThiranProcess(h))),h}},{key:"updatePointers",value:function(){this.posWrite===this.buffer.length-1?this.posWrite=0:this.posWrite=this.posWrite+1,this.posRead===this.buffer.length-1?this.posRead=0:this.posRead=this.posRead+1}},{key:"updateThiranCoefficient",value:function(){this.a1=(1-this.fracDelay)/(1+this.fracDelay)}},{key:"resample",value:function(){if(this.posWrite-this.intDelay<0){var u=this.intDelay-this.posWrite;this.posRead=this.buffer.length-u}else this.posRead=this.posWrite-this.intDelay}},{key:"fractionalThiranProcess",value:function(u){for(var h=new Float32Array(u.length),d,f,m=this.fracXi1,v=this.fracYi1,g=0;g<u.length;g=g+1)d=u[g],f=this.a1*d+m-this.a1*v,m=d,v=f,h[g]=f;return this.fracXi1=m,this.fracYi1=v,h}}]),c}();r.default=o,n.exports=r.default},{"babel-runtime/helpers/class-call-check":2,"babel-runtime/helpers/create-class":3}],7:[function(t,n,r){n.exports=t("./dist/fractional-delay")},{"./dist/fractional-delay":6}],8:[function(t,n,r){(function(a,o){if(typeof r=="object"&&typeof n=="object")n.exports=o();else{var c=o();for(var l in c)(typeof r=="object"?r:a)[l]=c[l]}})(this,function(){return function(s){var a={};function o(c){if(a[c])return a[c].exports;var l=a[c]={i:c,l:!1,exports:{}};return s[c].call(l.exports,l,l.exports,o),l.l=!0,l.exports}return o.m=s,o.c=a,o.d=function(c,l,u){o.o(c,l)||Object.defineProperty(c,l,{configurable:!1,enumerable:!0,get:u})},o.n=function(c){var l=c&&c.__esModule?function(){return c.default}:function(){return c};return o.d(l,"a",l),l},o.o=function(c,l){return Object.prototype.hasOwnProperty.call(c,l)},o.p="",o(o.s=4)}([function(s,a,o){Object.defineProperty(a,"__esModule",{value:!0}),a.setMatrixArrayType=l,a.toRadian=h,a.equals=d;var c=a.EPSILON=1e-6;a.ARRAY_TYPE=typeof Float32Array<"u"?Float32Array:Array,a.RANDOM=Math.random;function l(f){a.ARRAY_TYPE=f}var u=Math.PI/180;function h(f){return f*u}function d(f,m){return Math.abs(f-m)<=c*Math.max(1,Math.abs(f),Math.abs(m))}},function(s,a,o){Object.defineProperty(a,"__esModule",{value:!0}),a.sub=a.mul=void 0,a.create=h,a.fromMat4=d,a.clone=f,a.copy=m,a.fromValues=v,a.set=g,a.identity=_,a.transpose=F,a.invert=x,a.adjoint=y,a.determinant=R,a.multiply=L,a.translate=G,a.rotate=M,a.scale=E,a.fromTranslation=b,a.fromRotation=I,a.fromScaling=H,a.fromMat2d=q,a.fromQuat=ee,a.normalFromMat4=de,a.projection=fe,a.str=pe,a.frob=$,a.add=O,a.subtract=Y,a.multiplyScalar=ae,a.multiplyScalarAndAdd=ue,a.exactEquals=me,a.equals=le;var c=o(0),l=u(c);function u(N){if(N&&N.__esModule)return N;var w={};if(N!=null)for(var z in N)Object.prototype.hasOwnProperty.call(N,z)&&(w[z]=N[z]);return w.default=N,w}function h(){var N=new l.ARRAY_TYPE(9);return N[0]=1,N[1]=0,N[2]=0,N[3]=0,N[4]=1,N[5]=0,N[6]=0,N[7]=0,N[8]=1,N}function d(N,w){return N[0]=w[0],N[1]=w[1],N[2]=w[2],N[3]=w[4],N[4]=w[5],N[5]=w[6],N[6]=w[8],N[7]=w[9],N[8]=w[10],N}function f(N){var w=new l.ARRAY_TYPE(9);return w[0]=N[0],w[1]=N[1],w[2]=N[2],w[3]=N[3],w[4]=N[4],w[5]=N[5],w[6]=N[6],w[7]=N[7],w[8]=N[8],w}function m(N,w){return N[0]=w[0],N[1]=w[1],N[2]=w[2],N[3]=w[3],N[4]=w[4],N[5]=w[5],N[6]=w[6],N[7]=w[7],N[8]=w[8],N}function v(N,w,z,te,Z,ne,he,j,Le){var K=new l.ARRAY_TYPE(9);return K[0]=N,K[1]=w,K[2]=z,K[3]=te,K[4]=Z,K[5]=ne,K[6]=he,K[7]=j,K[8]=Le,K}function g(N,w,z,te,Z,ne,he,j,Le,K){return N[0]=w,N[1]=z,N[2]=te,N[3]=Z,N[4]=ne,N[5]=he,N[6]=j,N[7]=Le,N[8]=K,N}function _(N){return N[0]=1,N[1]=0,N[2]=0,N[3]=0,N[4]=1,N[5]=0,N[6]=0,N[7]=0,N[8]=1,N}function F(N,w){if(N===w){var z=w[1],te=w[2],Z=w[5];N[1]=w[3],N[2]=w[6],N[3]=z,N[5]=w[7],N[6]=te,N[7]=Z}else N[0]=w[0],N[1]=w[3],N[2]=w[6],N[3]=w[1],N[4]=w[4],N[5]=w[7],N[6]=w[2],N[7]=w[5],N[8]=w[8];return N}function x(N,w){var z=w[0],te=w[1],Z=w[2],ne=w[3],he=w[4],j=w[5],Le=w[6],K=w[7],re=w[8],se=re*he-j*K,Ce=-re*ne+j*Le,Se=K*ne-he*Le,p=z*se+te*Ce+Z*Se;return p?(p=1/p,N[0]=se*p,N[1]=(-re*te+Z*K)*p,N[2]=(j*te-Z*he)*p,N[3]=Ce*p,N[4]=(re*z-Z*Le)*p,N[5]=(-j*z+Z*ne)*p,N[6]=Se*p,N[7]=(-K*z+te*Le)*p,N[8]=(he*z-te*ne)*p,N):null}function y(N,w){var z=w[0],te=w[1],Z=w[2],ne=w[3],he=w[4],j=w[5],Le=w[6],K=w[7],re=w[8];return N[0]=he*re-j*K,N[1]=Z*K-te*re,N[2]=te*j-Z*he,N[3]=j*Le-ne*re,N[4]=z*re-Z*Le,N[5]=Z*ne-z*j,N[6]=ne*K-he*Le,N[7]=te*Le-z*K,N[8]=z*he-te*ne,N}function R(N){var w=N[0],z=N[1],te=N[2],Z=N[3],ne=N[4],he=N[5],j=N[6],Le=N[7],K=N[8];return w*(K*ne-he*Le)+z*(-K*Z+he*j)+te*(Le*Z-ne*j)}function L(N,w,z){var te=w[0],Z=w[1],ne=w[2],he=w[3],j=w[4],Le=w[5],K=w[6],re=w[7],se=w[8],Ce=z[0],Se=z[1],p=z[2],S=z[3],D=z[4],X=z[5],J=z[6],ie=z[7],oe=z[8];return N[0]=Ce*te+Se*he+p*K,N[1]=Ce*Z+Se*j+p*re,N[2]=Ce*ne+Se*Le+p*se,N[3]=S*te+D*he+X*K,N[4]=S*Z+D*j+X*re,N[5]=S*ne+D*Le+X*se,N[6]=J*te+ie*he+oe*K,N[7]=J*Z+ie*j+oe*re,N[8]=J*ne+ie*Le+oe*se,N}function G(N,w,z){var te=w[0],Z=w[1],ne=w[2],he=w[3],j=w[4],Le=w[5],K=w[6],re=w[7],se=w[8],Ce=z[0],Se=z[1];return N[0]=te,N[1]=Z,N[2]=ne,N[3]=he,N[4]=j,N[5]=Le,N[6]=Ce*te+Se*he+K,N[7]=Ce*Z+Se*j+re,N[8]=Ce*ne+Se*Le+se,N}function M(N,w,z){var te=w[0],Z=w[1],ne=w[2],he=w[3],j=w[4],Le=w[5],K=w[6],re=w[7],se=w[8],Ce=Math.sin(z),Se=Math.cos(z);return N[0]=Se*te+Ce*he,N[1]=Se*Z+Ce*j,N[2]=Se*ne+Ce*Le,N[3]=Se*he-Ce*te,N[4]=Se*j-Ce*Z,N[5]=Se*Le-Ce*ne,N[6]=K,N[7]=re,N[8]=se,N}function E(N,w,z){var te=z[0],Z=z[1];return N[0]=te*w[0],N[1]=te*w[1],N[2]=te*w[2],N[3]=Z*w[3],N[4]=Z*w[4],N[5]=Z*w[5],N[6]=w[6],N[7]=w[7],N[8]=w[8],N}function b(N,w){return N[0]=1,N[1]=0,N[2]=0,N[3]=0,N[4]=1,N[5]=0,N[6]=w[0],N[7]=w[1],N[8]=1,N}function I(N,w){var z=Math.sin(w),te=Math.cos(w);return N[0]=te,N[1]=z,N[2]=0,N[3]=-z,N[4]=te,N[5]=0,N[6]=0,N[7]=0,N[8]=1,N}function H(N,w){return N[0]=w[0],N[1]=0,N[2]=0,N[3]=0,N[4]=w[1],N[5]=0,N[6]=0,N[7]=0,N[8]=1,N}function q(N,w){return N[0]=w[0],N[1]=w[1],N[2]=0,N[3]=w[2],N[4]=w[3],N[5]=0,N[6]=w[4],N[7]=w[5],N[8]=1,N}function ee(N,w){var z=w[0],te=w[1],Z=w[2],ne=w[3],he=z+z,j=te+te,Le=Z+Z,K=z*he,re=te*he,se=te*j,Ce=Z*he,Se=Z*j,p=Z*Le,S=ne*he,D=ne*j,X=ne*Le;return N[0]=1-se-p,N[3]=re-X,N[6]=Ce+D,N[1]=re+X,N[4]=1-K-p,N[7]=Se-S,N[2]=Ce-D,N[5]=Se+S,N[8]=1-K-se,N}function de(N,w){var z=w[0],te=w[1],Z=w[2],ne=w[3],he=w[4],j=w[5],Le=w[6],K=w[7],re=w[8],se=w[9],Ce=w[10],Se=w[11],p=w[12],S=w[13],D=w[14],X=w[15],J=z*j-te*he,ie=z*Le-Z*he,oe=z*K-ne*he,xe=te*Le-Z*j,ve=te*K-ne*j,ge=Z*K-ne*Le,Pe=re*S-se*p,_e=re*D-Ce*p,Ee=re*X-Se*p,Ue=se*D-Ce*S,Ie=se*X-Se*S,De=Ce*X-Se*D,we=J*De-ie*Ie+oe*Ue+xe*Ee-ve*_e+ge*Pe;return we?(we=1/we,N[0]=(j*De-Le*Ie+K*Ue)*we,N[1]=(Le*Ee-he*De-K*_e)*we,N[2]=(he*Ie-j*Ee+K*Pe)*we,N[3]=(Z*Ie-te*De-ne*Ue)*we,N[4]=(z*De-Z*Ee+ne*_e)*we,N[5]=(te*Ee-z*Ie-ne*Pe)*we,N[6]=(S*ge-D*ve+X*xe)*we,N[7]=(D*oe-p*ge-X*ie)*we,N[8]=(p*ve-S*oe+X*J)*we,N):null}function fe(N,w,z){return N[0]=2/w,N[1]=0,N[2]=0,N[3]=0,N[4]=-2/z,N[5]=0,N[6]=-1,N[7]=1,N[8]=1,N}function pe(N){return"mat3("+N[0]+", "+N[1]+", "+N[2]+", "+N[3]+", "+N[4]+", "+N[5]+", "+N[6]+", "+N[7]+", "+N[8]+")"}function $(N){return Math.sqrt(Math.pow(N[0],2)+Math.pow(N[1],2)+Math.pow(N[2],2)+Math.pow(N[3],2)+Math.pow(N[4],2)+Math.pow(N[5],2)+Math.pow(N[6],2)+Math.pow(N[7],2)+Math.pow(N[8],2))}function O(N,w,z){return N[0]=w[0]+z[0],N[1]=w[1]+z[1],N[2]=w[2]+z[2],N[3]=w[3]+z[3],N[4]=w[4]+z[4],N[5]=w[5]+z[5],N[6]=w[6]+z[6],N[7]=w[7]+z[7],N[8]=w[8]+z[8],N}function Y(N,w,z){return N[0]=w[0]-z[0],N[1]=w[1]-z[1],N[2]=w[2]-z[2],N[3]=w[3]-z[3],N[4]=w[4]-z[4],N[5]=w[5]-z[5],N[6]=w[6]-z[6],N[7]=w[7]-z[7],N[8]=w[8]-z[8],N}function ae(N,w,z){return N[0]=w[0]*z,N[1]=w[1]*z,N[2]=w[2]*z,N[3]=w[3]*z,N[4]=w[4]*z,N[5]=w[5]*z,N[6]=w[6]*z,N[7]=w[7]*z,N[8]=w[8]*z,N}function ue(N,w,z,te){return N[0]=w[0]+z[0]*te,N[1]=w[1]+z[1]*te,N[2]=w[2]+z[2]*te,N[3]=w[3]+z[3]*te,N[4]=w[4]+z[4]*te,N[5]=w[5]+z[5]*te,N[6]=w[6]+z[6]*te,N[7]=w[7]+z[7]*te,N[8]=w[8]+z[8]*te,N}function me(N,w){return N[0]===w[0]&&N[1]===w[1]&&N[2]===w[2]&&N[3]===w[3]&&N[4]===w[4]&&N[5]===w[5]&&N[6]===w[6]&&N[7]===w[7]&&N[8]===w[8]}function le(N,w){var z=N[0],te=N[1],Z=N[2],ne=N[3],he=N[4],j=N[5],Le=N[6],K=N[7],re=N[8],se=w[0],Ce=w[1],Se=w[2],p=w[3],S=w[4],D=w[5],X=w[6],J=w[7],ie=w[8];return Math.abs(z-se)<=l.EPSILON*Math.max(1,Math.abs(z),Math.abs(se))&&Math.abs(te-Ce)<=l.EPSILON*Math.max(1,Math.abs(te),Math.abs(Ce))&&Math.abs(Z-Se)<=l.EPSILON*Math.max(1,Math.abs(Z),Math.abs(Se))&&Math.abs(ne-p)<=l.EPSILON*Math.max(1,Math.abs(ne),Math.abs(p))&&Math.abs(he-S)<=l.EPSILON*Math.max(1,Math.abs(he),Math.abs(S))&&Math.abs(j-D)<=l.EPSILON*Math.max(1,Math.abs(j),Math.abs(D))&&Math.abs(Le-X)<=l.EPSILON*Math.max(1,Math.abs(Le),Math.abs(X))&&Math.abs(K-J)<=l.EPSILON*Math.max(1,Math.abs(K),Math.abs(J))&&Math.abs(re-ie)<=l.EPSILON*Math.max(1,Math.abs(re),Math.abs(ie))}a.mul=L,a.sub=Y},function(s,a,o){Object.defineProperty(a,"__esModule",{value:!0}),a.forEach=a.sqrLen=a.len=a.sqrDist=a.dist=a.div=a.mul=a.sub=void 0,a.create=h,a.clone=d,a.length=f,a.fromValues=m,a.copy=v,a.set=g,a.add=_,a.subtract=F,a.multiply=x,a.divide=y,a.ceil=R,a.floor=L,a.min=G,a.max=M,a.round=E,a.scale=b,a.scaleAndAdd=I,a.distance=H,a.squaredDistance=q,a.squaredLength=ee,a.negate=de,a.inverse=fe,a.normalize=pe,a.dot=$,a.cross=O,a.lerp=Y,a.hermite=ae,a.bezier=ue,a.random=me,a.transformMat4=le,a.transformMat3=N,a.transformQuat=w,a.rotateX=z,a.rotateY=te,a.rotateZ=Z,a.angle=ne,a.str=he,a.exactEquals=j,a.equals=Le;var c=o(0),l=u(c);function u(K){if(K&&K.__esModule)return K;var re={};if(K!=null)for(var se in K)Object.prototype.hasOwnProperty.call(K,se)&&(re[se]=K[se]);return re.default=K,re}function h(){var K=new l.ARRAY_TYPE(3);return K[0]=0,K[1]=0,K[2]=0,K}function d(K){var re=new l.ARRAY_TYPE(3);return re[0]=K[0],re[1]=K[1],re[2]=K[2],re}function f(K){var re=K[0],se=K[1],Ce=K[2];return Math.sqrt(re*re+se*se+Ce*Ce)}function m(K,re,se){var Ce=new l.ARRAY_TYPE(3);return Ce[0]=K,Ce[1]=re,Ce[2]=se,Ce}function v(K,re){return K[0]=re[0],K[1]=re[1],K[2]=re[2],K}function g(K,re,se,Ce){return K[0]=re,K[1]=se,K[2]=Ce,K}function _(K,re,se){return K[0]=re[0]+se[0],K[1]=re[1]+se[1],K[2]=re[2]+se[2],K}function F(K,re,se){return K[0]=re[0]-se[0],K[1]=re[1]-se[1],K[2]=re[2]-se[2],K}function x(K,re,se){return K[0]=re[0]*se[0],K[1]=re[1]*se[1],K[2]=re[2]*se[2],K}function y(K,re,se){return K[0]=re[0]/se[0],K[1]=re[1]/se[1],K[2]=re[2]/se[2],K}function R(K,re){return K[0]=Math.ceil(re[0]),K[1]=Math.ceil(re[1]),K[2]=Math.ceil(re[2]),K}function L(K,re){return K[0]=Math.floor(re[0]),K[1]=Math.floor(re[1]),K[2]=Math.floor(re[2]),K}function G(K,re,se){return K[0]=Math.min(re[0],se[0]),K[1]=Math.min(re[1],se[1]),K[2]=Math.min(re[2],se[2]),K}function M(K,re,se){return K[0]=Math.max(re[0],se[0]),K[1]=Math.max(re[1],se[1]),K[2]=Math.max(re[2],se[2]),K}function E(K,re){return K[0]=Math.round(re[0]),K[1]=Math.round(re[1]),K[2]=Math.round(re[2]),K}function b(K,re,se){return K[0]=re[0]*se,K[1]=re[1]*se,K[2]=re[2]*se,K}function I(K,re,se,Ce){return K[0]=re[0]+se[0]*Ce,K[1]=re[1]+se[1]*Ce,K[2]=re[2]+se[2]*Ce,K}function H(K,re){var se=re[0]-K[0],Ce=re[1]-K[1],Se=re[2]-K[2];return Math.sqrt(se*se+Ce*Ce+Se*Se)}function q(K,re){var se=re[0]-K[0],Ce=re[1]-K[1],Se=re[2]-K[2];return se*se+Ce*Ce+Se*Se}function ee(K){var re=K[0],se=K[1],Ce=K[2];return re*re+se*se+Ce*Ce}function de(K,re){return K[0]=-re[0],K[1]=-re[1],K[2]=-re[2],K}function fe(K,re){return K[0]=1/re[0],K[1]=1/re[1],K[2]=1/re[2],K}function pe(K,re){var se=re[0],Ce=re[1],Se=re[2],p=se*se+Ce*Ce+Se*Se;return p>0&&(p=1/Math.sqrt(p),K[0]=re[0]*p,K[1]=re[1]*p,K[2]=re[2]*p),K}function $(K,re){return K[0]*re[0]+K[1]*re[1]+K[2]*re[2]}function O(K,re,se){var Ce=re[0],Se=re[1],p=re[2],S=se[0],D=se[1],X=se[2];return K[0]=Se*X-p*D,K[1]=p*S-Ce*X,K[2]=Ce*D-Se*S,K}function Y(K,re,se,Ce){var Se=re[0],p=re[1],S=re[2];return K[0]=Se+Ce*(se[0]-Se),K[1]=p+Ce*(se[1]-p),K[2]=S+Ce*(se[2]-S),K}function ae(K,re,se,Ce,Se,p){var S=p*p,D=S*(2*p-3)+1,X=S*(p-2)+p,J=S*(p-1),ie=S*(3-2*p);return K[0]=re[0]*D+se[0]*X+Ce[0]*J+Se[0]*ie,K[1]=re[1]*D+se[1]*X+Ce[1]*J+Se[1]*ie,K[2]=re[2]*D+se[2]*X+Ce[2]*J+Se[2]*ie,K}function ue(K,re,se,Ce,Se,p){var S=1-p,D=S*S,X=p*p,J=D*S,ie=3*p*D,oe=3*X*S,xe=X*p;return K[0]=re[0]*J+se[0]*ie+Ce[0]*oe+Se[0]*xe,K[1]=re[1]*J+se[1]*ie+Ce[1]*oe+Se[1]*xe,K[2]=re[2]*J+se[2]*ie+Ce[2]*oe+Se[2]*xe,K}function me(K,re){re=re||1;var se=l.RANDOM()*2*Math.PI,Ce=l.RANDOM()*2-1,Se=Math.sqrt(1-Ce*Ce)*re;return K[0]=Math.cos(se)*Se,K[1]=Math.sin(se)*Se,K[2]=Ce*re,K}function le(K,re,se){var Ce=re[0],Se=re[1],p=re[2],S=se[3]*Ce+se[7]*Se+se[11]*p+se[15];return S=S||1,K[0]=(se[0]*Ce+se[4]*Se+se[8]*p+se[12])/S,K[1]=(se[1]*Ce+se[5]*Se+se[9]*p+se[13])/S,K[2]=(se[2]*Ce+se[6]*Se+se[10]*p+se[14])/S,K}function N(K,re,se){var Ce=re[0],Se=re[1],p=re[2];return K[0]=Ce*se[0]+Se*se[3]+p*se[6],K[1]=Ce*se[1]+Se*se[4]+p*se[7],K[2]=Ce*se[2]+Se*se[5]+p*se[8],K}function w(K,re,se){var Ce=re[0],Se=re[1],p=re[2],S=se[0],D=se[1],X=se[2],J=se[3],ie=J*Ce+D*p-X*Se,oe=J*Se+X*Ce-S*p,xe=J*p+S*Se-D*Ce,ve=-S*Ce-D*Se-X*p;return K[0]=ie*J+ve*-S+oe*-X-xe*-D,K[1]=oe*J+ve*-D+xe*-S-ie*-X,K[2]=xe*J+ve*-X+ie*-D-oe*-S,K}function z(K,re,se,Ce){var Se=[],p=[];return Se[0]=re[0]-se[0],Se[1]=re[1]-se[1],Se[2]=re[2]-se[2],p[0]=Se[0],p[1]=Se[1]*Math.cos(Ce)-Se[2]*Math.sin(Ce),p[2]=Se[1]*Math.sin(Ce)+Se[2]*Math.cos(Ce),K[0]=p[0]+se[0],K[1]=p[1]+se[1],K[2]=p[2]+se[2],K}function te(K,re,se,Ce){var Se=[],p=[];return Se[0]=re[0]-se[0],Se[1]=re[1]-se[1],Se[2]=re[2]-se[2],p[0]=Se[2]*Math.sin(Ce)+Se[0]*Math.cos(Ce),p[1]=Se[1],p[2]=Se[2]*Math.cos(Ce)-Se[0]*Math.sin(Ce),K[0]=p[0]+se[0],K[1]=p[1]+se[1],K[2]=p[2]+se[2],K}function Z(K,re,se,Ce){var Se=[],p=[];return Se[0]=re[0]-se[0],Se[1]=re[1]-se[1],Se[2]=re[2]-se[2],p[0]=Se[0]*Math.cos(Ce)-Se[1]*Math.sin(Ce),p[1]=Se[0]*Math.sin(Ce)+Se[1]*Math.cos(Ce),p[2]=Se[2],K[0]=p[0]+se[0],K[1]=p[1]+se[1],K[2]=p[2]+se[2],K}function ne(K,re){var se=m(K[0],K[1],K[2]),Ce=m(re[0],re[1],re[2]);pe(se,se),pe(Ce,Ce);var Se=$(se,Ce);return Se>1?0:Se<-1?Math.PI:Math.acos(Se)}function he(K){return"vec3("+K[0]+", "+K[1]+", "+K[2]+")"}function j(K,re){return K[0]===re[0]&&K[1]===re[1]&&K[2]===re[2]}function Le(K,re){var se=K[0],Ce=K[1],Se=K[2],p=re[0],S=re[1],D=re[2];return Math.abs(se-p)<=l.EPSILON*Math.max(1,Math.abs(se),Math.abs(p))&&Math.abs(Ce-S)<=l.EPSILON*Math.max(1,Math.abs(Ce),Math.abs(S))&&Math.abs(Se-D)<=l.EPSILON*Math.max(1,Math.abs(Se),Math.abs(D))}a.sub=F,a.mul=x,a.div=y,a.dist=H,a.sqrDist=q,a.len=f,a.sqrLen=ee,a.forEach=function(){var K=h();return function(re,se,Ce,Se,p,S){var D=void 0,X=void 0;for(se||(se=3),Ce||(Ce=0),Se?X=Math.min(Se*se+Ce,re.length):X=re.length,D=Ce;D<X;D+=se)K[0]=re[D],K[1]=re[D+1],K[2]=re[D+2],p(K,K,S),re[D]=K[0],re[D+1]=K[1],re[D+2]=K[2];return re}}()},function(s,a,o){Object.defineProperty(a,"__esModule",{value:!0}),a.forEach=a.sqrLen=a.len=a.sqrDist=a.dist=a.div=a.mul=a.sub=void 0,a.create=h,a.clone=d,a.fromValues=f,a.copy=m,a.set=v,a.add=g,a.subtract=_,a.multiply=F,a.divide=x,a.ceil=y,a.floor=R,a.min=L,a.max=G,a.round=M,a.scale=E,a.scaleAndAdd=b,a.distance=I,a.squaredDistance=H,a.length=q,a.squaredLength=ee,a.negate=de,a.inverse=fe,a.normalize=pe,a.dot=$,a.lerp=O,a.random=Y,a.transformMat4=ae,a.transformQuat=ue,a.str=me,a.exactEquals=le,a.equals=N;var c=o(0),l=u(c);function u(w){if(w&&w.__esModule)return w;var z={};if(w!=null)for(var te in w)Object.prototype.hasOwnProperty.call(w,te)&&(z[te]=w[te]);return z.default=w,z}function h(){var w=new l.ARRAY_TYPE(4);return w[0]=0,w[1]=0,w[2]=0,w[3]=0,w}function d(w){var z=new l.ARRAY_TYPE(4);return z[0]=w[0],z[1]=w[1],z[2]=w[2],z[3]=w[3],z}function f(w,z,te,Z){var ne=new l.ARRAY_TYPE(4);return ne[0]=w,ne[1]=z,ne[2]=te,ne[3]=Z,ne}function m(w,z){return w[0]=z[0],w[1]=z[1],w[2]=z[2],w[3]=z[3],w}function v(w,z,te,Z,ne){return w[0]=z,w[1]=te,w[2]=Z,w[3]=ne,w}function g(w,z,te){return w[0]=z[0]+te[0],w[1]=z[1]+te[1],w[2]=z[2]+te[2],w[3]=z[3]+te[3],w}function _(w,z,te){return w[0]=z[0]-te[0],w[1]=z[1]-te[1],w[2]=z[2]-te[2],w[3]=z[3]-te[3],w}function F(w,z,te){return w[0]=z[0]*te[0],w[1]=z[1]*te[1],w[2]=z[2]*te[2],w[3]=z[3]*te[3],w}function x(w,z,te){return w[0]=z[0]/te[0],w[1]=z[1]/te[1],w[2]=z[2]/te[2],w[3]=z[3]/te[3],w}function y(w,z){return w[0]=Math.ceil(z[0]),w[1]=Math.ceil(z[1]),w[2]=Math.ceil(z[2]),w[3]=Math.ceil(z[3]),w}function R(w,z){return w[0]=Math.floor(z[0]),w[1]=Math.floor(z[1]),w[2]=Math.floor(z[2]),w[3]=Math.floor(z[3]),w}function L(w,z,te){return w[0]=Math.min(z[0],te[0]),w[1]=Math.min(z[1],te[1]),w[2]=Math.min(z[2],te[2]),w[3]=Math.min(z[3],te[3]),w}function G(w,z,te){return w[0]=Math.max(z[0],te[0]),w[1]=Math.max(z[1],te[1]),w[2]=Math.max(z[2],te[2]),w[3]=Math.max(z[3],te[3]),w}function M(w,z){return w[0]=Math.round(z[0]),w[1]=Math.round(z[1]),w[2]=Math.round(z[2]),w[3]=Math.round(z[3]),w}function E(w,z,te){return w[0]=z[0]*te,w[1]=z[1]*te,w[2]=z[2]*te,w[3]=z[3]*te,w}function b(w,z,te,Z){return w[0]=z[0]+te[0]*Z,w[1]=z[1]+te[1]*Z,w[2]=z[2]+te[2]*Z,w[3]=z[3]+te[3]*Z,w}function I(w,z){var te=z[0]-w[0],Z=z[1]-w[1],ne=z[2]-w[2],he=z[3]-w[3];return Math.sqrt(te*te+Z*Z+ne*ne+he*he)}function H(w,z){var te=z[0]-w[0],Z=z[1]-w[1],ne=z[2]-w[2],he=z[3]-w[3];return te*te+Z*Z+ne*ne+he*he}function q(w){var z=w[0],te=w[1],Z=w[2],ne=w[3];return Math.sqrt(z*z+te*te+Z*Z+ne*ne)}function ee(w){var z=w[0],te=w[1],Z=w[2],ne=w[3];return z*z+te*te+Z*Z+ne*ne}function de(w,z){return w[0]=-z[0],w[1]=-z[1],w[2]=-z[2],w[3]=-z[3],w}function fe(w,z){return w[0]=1/z[0],w[1]=1/z[1],w[2]=1/z[2],w[3]=1/z[3],w}function pe(w,z){var te=z[0],Z=z[1],ne=z[2],he=z[3],j=te*te+Z*Z+ne*ne+he*he;return j>0&&(j=1/Math.sqrt(j),w[0]=te*j,w[1]=Z*j,w[2]=ne*j,w[3]=he*j),w}function $(w,z){return w[0]*z[0]+w[1]*z[1]+w[2]*z[2]+w[3]*z[3]}function O(w,z,te,Z){var ne=z[0],he=z[1],j=z[2],Le=z[3];return w[0]=ne+Z*(te[0]-ne),w[1]=he+Z*(te[1]-he),w[2]=j+Z*(te[2]-j),w[3]=Le+Z*(te[3]-Le),w}function Y(w,z){return z=z||1,w[0]=l.RANDOM(),w[1]=l.RANDOM(),w[2]=l.RANDOM(),w[3]=l.RANDOM(),pe(w,w),E(w,w,z),w}function ae(w,z,te){var Z=z[0],ne=z[1],he=z[2],j=z[3];return w[0]=te[0]*Z+te[4]*ne+te[8]*he+te[12]*j,w[1]=te[1]*Z+te[5]*ne+te[9]*he+te[13]*j,w[2]=te[2]*Z+te[6]*ne+te[10]*he+te[14]*j,w[3]=te[3]*Z+te[7]*ne+te[11]*he+te[15]*j,w}function ue(w,z,te){var Z=z[0],ne=z[1],he=z[2],j=te[0],Le=te[1],K=te[2],re=te[3],se=re*Z+Le*he-K*ne,Ce=re*ne+K*Z-j*he,Se=re*he+j*ne-Le*Z,p=-j*Z-Le*ne-K*he;return w[0]=se*re+p*-j+Ce*-K-Se*-Le,w[1]=Ce*re+p*-Le+Se*-j-se*-K,w[2]=Se*re+p*-K+se*-Le-Ce*-j,w[3]=z[3],w}function me(w){return"vec4("+w[0]+", "+w[1]+", "+w[2]+", "+w[3]+")"}function le(w,z){return w[0]===z[0]&&w[1]===z[1]&&w[2]===z[2]&&w[3]===z[3]}function N(w,z){var te=w[0],Z=w[1],ne=w[2],he=w[3],j=z[0],Le=z[1],K=z[2],re=z[3];return Math.abs(te-j)<=l.EPSILON*Math.max(1,Math.abs(te),Math.abs(j))&&Math.abs(Z-Le)<=l.EPSILON*Math.max(1,Math.abs(Z),Math.abs(Le))&&Math.abs(ne-K)<=l.EPSILON*Math.max(1,Math.abs(ne),Math.abs(K))&&Math.abs(he-re)<=l.EPSILON*Math.max(1,Math.abs(he),Math.abs(re))}a.sub=_,a.mul=F,a.div=x,a.dist=I,a.sqrDist=H,a.len=q,a.sqrLen=ee,a.forEach=function(){var w=h();return function(z,te,Z,ne,he,j){var Le=void 0,K=void 0;for(te||(te=4),Z||(Z=0),ne?K=Math.min(ne*te+Z,z.length):K=z.length,Le=Z;Le<K;Le+=te)w[0]=z[Le],w[1]=z[Le+1],w[2]=z[Le+2],w[3]=z[Le+3],he(w,w,j),z[Le]=w[0],z[Le+1]=w[1],z[Le+2]=w[2],z[Le+3]=w[3];return z}}()},function(s,a,o){Object.defineProperty(a,"__esModule",{value:!0}),a.vec4=a.vec3=a.vec2=a.quat=a.mat4=a.mat3=a.mat2d=a.mat2=a.glMatrix=void 0;var c=o(0),l=b(c),u=o(5),h=b(u),d=o(6),f=b(d),m=o(1),v=b(m),g=o(7),_=b(g),F=o(8),x=b(F),y=o(9),R=b(y),L=o(2),G=b(L),M=o(3),E=b(M);function b(I){if(I&&I.__esModule)return I;var H={};if(I!=null)for(var q in I)Object.prototype.hasOwnProperty.call(I,q)&&(H[q]=I[q]);return H.default=I,H}a.glMatrix=l,a.mat2=h,a.mat2d=f,a.mat3=v,a.mat4=_,a.quat=x,a.vec2=R,a.vec3=G,a.vec4=E},function(s,a,o){Object.defineProperty(a,"__esModule",{value:!0}),a.sub=a.mul=void 0,a.create=h,a.clone=d,a.copy=f,a.identity=m,a.fromValues=v,a.set=g,a.transpose=_,a.invert=F,a.adjoint=x,a.determinant=y,a.multiply=R,a.rotate=L,a.scale=G,a.fromRotation=M,a.fromScaling=E,a.str=b,a.frob=I,a.LDU=H,a.add=q,a.subtract=ee,a.exactEquals=de,a.equals=fe,a.multiplyScalar=pe,a.multiplyScalarAndAdd=$;var c=o(0),l=u(c);function u(O){if(O&&O.__esModule)return O;var Y={};if(O!=null)for(var ae in O)Object.prototype.hasOwnProperty.call(O,ae)&&(Y[ae]=O[ae]);return Y.default=O,Y}function h(){var O=new l.ARRAY_TYPE(4);return O[0]=1,O[1]=0,O[2]=0,O[3]=1,O}function d(O){var Y=new l.ARRAY_TYPE(4);return Y[0]=O[0],Y[1]=O[1],Y[2]=O[2],Y[3]=O[3],Y}function f(O,Y){return O[0]=Y[0],O[1]=Y[1],O[2]=Y[2],O[3]=Y[3],O}function m(O){return O[0]=1,O[1]=0,O[2]=0,O[3]=1,O}function v(O,Y,ae,ue){var me=new l.ARRAY_TYPE(4);return me[0]=O,me[1]=Y,me[2]=ae,me[3]=ue,me}function g(O,Y,ae,ue,me){return O[0]=Y,O[1]=ae,O[2]=ue,O[3]=me,O}function _(O,Y){if(O===Y){var ae=Y[1];O[1]=Y[2],O[2]=ae}else O[0]=Y[0],O[1]=Y[2],O[2]=Y[1],O[3]=Y[3];return O}function F(O,Y){var ae=Y[0],ue=Y[1],me=Y[2],le=Y[3],N=ae*le-me*ue;return N?(N=1/N,O[0]=le*N,O[1]=-ue*N,O[2]=-me*N,O[3]=ae*N,O):null}function x(O,Y){var ae=Y[0];return O[0]=Y[3],O[1]=-Y[1],O[2]=-Y[2],O[3]=ae,O}function y(O){return O[0]*O[3]-O[2]*O[1]}function R(O,Y,ae){var ue=Y[0],me=Y[1],le=Y[2],N=Y[3],w=ae[0],z=ae[1],te=ae[2],Z=ae[3];return O[0]=ue*w+le*z,O[1]=me*w+N*z,O[2]=ue*te+le*Z,O[3]=me*te+N*Z,O}function L(O,Y,ae){var ue=Y[0],me=Y[1],le=Y[2],N=Y[3],w=Math.sin(ae),z=Math.cos(ae);return O[0]=ue*z+le*w,O[1]=me*z+N*w,O[2]=ue*-w+le*z,O[3]=me*-w+N*z,O}function G(O,Y,ae){var ue=Y[0],me=Y[1],le=Y[2],N=Y[3],w=ae[0],z=ae[1];return O[0]=ue*w,O[1]=me*w,O[2]=le*z,O[3]=N*z,O}function M(O,Y){var ae=Math.sin(Y),ue=Math.cos(Y);return O[0]=ue,O[1]=ae,O[2]=-ae,O[3]=ue,O}function E(O,Y){return O[0]=Y[0],O[1]=0,O[2]=0,O[3]=Y[1],O}function b(O){return"mat2("+O[0]+", "+O[1]+", "+O[2]+", "+O[3]+")"}function I(O){return Math.sqrt(Math.pow(O[0],2)+Math.pow(O[1],2)+Math.pow(O[2],2)+Math.pow(O[3],2))}function H(O,Y,ae,ue){return O[2]=ue[2]/ue[0],ae[0]=ue[0],ae[1]=ue[1],ae[3]=ue[3]-O[2]*ae[1],[O,Y,ae]}function q(O,Y,ae){return O[0]=Y[0]+ae[0],O[1]=Y[1]+ae[1],O[2]=Y[2]+ae[2],O[3]=Y[3]+ae[3],O}function ee(O,Y,ae){return O[0]=Y[0]-ae[0],O[1]=Y[1]-ae[1],O[2]=Y[2]-ae[2],O[3]=Y[3]-ae[3],O}function de(O,Y){return O[0]===Y[0]&&O[1]===Y[1]&&O[2]===Y[2]&&O[3]===Y[3]}function fe(O,Y){var ae=O[0],ue=O[1],me=O[2],le=O[3],N=Y[0],w=Y[1],z=Y[2],te=Y[3];return Math.abs(ae-N)<=l.EPSILON*Math.max(1,Math.abs(ae),Math.abs(N))&&Math.abs(ue-w)<=l.EPSILON*Math.max(1,Math.abs(ue),Math.abs(w))&&Math.abs(me-z)<=l.EPSILON*Math.max(1,Math.abs(me),Math.abs(z))&&Math.abs(le-te)<=l.EPSILON*Math.max(1,Math.abs(le),Math.abs(te))}function pe(O,Y,ae){return O[0]=Y[0]*ae,O[1]=Y[1]*ae,O[2]=Y[2]*ae,O[3]=Y[3]*ae,O}function $(O,Y,ae,ue){return O[0]=Y[0]+ae[0]*ue,O[1]=Y[1]+ae[1]*ue,O[2]=Y[2]+ae[2]*ue,O[3]=Y[3]+ae[3]*ue,O}a.mul=R,a.sub=ee},function(s,a,o){Object.defineProperty(a,"__esModule",{value:!0}),a.sub=a.mul=void 0,a.create=h,a.clone=d,a.copy=f,a.identity=m,a.fromValues=v,a.set=g,a.invert=_,a.determinant=F,a.multiply=x,a.rotate=y,a.scale=R,a.translate=L,a.fromRotation=G,a.fromScaling=M,a.fromTranslation=E,a.str=b,a.frob=I,a.add=H,a.subtract=q,a.multiplyScalar=ee,a.multiplyScalarAndAdd=de,a.exactEquals=fe,a.equals=pe;var c=o(0),l=u(c);function u($){if($&&$.__esModule)return $;var O={};if($!=null)for(var Y in $)Object.prototype.hasOwnProperty.call($,Y)&&(O[Y]=$[Y]);return O.default=$,O}function h(){var $=new l.ARRAY_TYPE(6);return $[0]=1,$[1]=0,$[2]=0,$[3]=1,$[4]=0,$[5]=0,$}function d($){var O=new l.ARRAY_TYPE(6);return O[0]=$[0],O[1]=$[1],O[2]=$[2],O[3]=$[3],O[4]=$[4],O[5]=$[5],O}function f($,O){return $[0]=O[0],$[1]=O[1],$[2]=O[2],$[3]=O[3],$[4]=O[4],$[5]=O[5],$}function m($){return $[0]=1,$[1]=0,$[2]=0,$[3]=1,$[4]=0,$[5]=0,$}function v($,O,Y,ae,ue,me){var le=new l.ARRAY_TYPE(6);return le[0]=$,le[1]=O,le[2]=Y,le[3]=ae,le[4]=ue,le[5]=me,le}function g($,O,Y,ae,ue,me,le){return $[0]=O,$[1]=Y,$[2]=ae,$[3]=ue,$[4]=me,$[5]=le,$}function _($,O){var Y=O[0],ae=O[1],ue=O[2],me=O[3],le=O[4],N=O[5],w=Y*me-ae*ue;return w?(w=1/w,$[0]=me*w,$[1]=-ae*w,$[2]=-ue*w,$[3]=Y*w,$[4]=(ue*N-me*le)*w,$[5]=(ae*le-Y*N)*w,$):null}function F($){return $[0]*$[3]-$[1]*$[2]}function x($,O,Y){var ae=O[0],ue=O[1],me=O[2],le=O[3],N=O[4],w=O[5],z=Y[0],te=Y[1],Z=Y[2],ne=Y[3],he=Y[4],j=Y[5];return $[0]=ae*z+me*te,$[1]=ue*z+le*te,$[2]=ae*Z+me*ne,$[3]=ue*Z+le*ne,$[4]=ae*he+me*j+N,$[5]=ue*he+le*j+w,$}function y($,O,Y){var ae=O[0],ue=O[1],me=O[2],le=O[3],N=O[4],w=O[5],z=Math.sin(Y),te=Math.cos(Y);return $[0]=ae*te+me*z,$[1]=ue*te+le*z,$[2]=ae*-z+me*te,$[3]=ue*-z+le*te,$[4]=N,$[5]=w,$}function R($,O,Y){var ae=O[0],ue=O[1],me=O[2],le=O[3],N=O[4],w=O[5],z=Y[0],te=Y[1];return $[0]=ae*z,$[1]=ue*z,$[2]=me*te,$[3]=le*te,$[4]=N,$[5]=w,$}function L($,O,Y){var ae=O[0],ue=O[1],me=O[2],le=O[3],N=O[4],w=O[5],z=Y[0],te=Y[1];return $[0]=ae,$[1]=ue,$[2]=me,$[3]=le,$[4]=ae*z+me*te+N,$[5]=ue*z+le*te+w,$}function G($,O){var Y=Math.sin(O),ae=Math.cos(O);return $[0]=ae,$[1]=Y,$[2]=-Y,$[3]=ae,$[4]=0,$[5]=0,$}function M($,O){return $[0]=O[0],$[1]=0,$[2]=0,$[3]=O[1],$[4]=0,$[5]=0,$}function E($,O){return $[0]=1,$[1]=0,$[2]=0,$[3]=1,$[4]=O[0],$[5]=O[1],$}function b($){return"mat2d("+$[0]+", "+$[1]+", "+$[2]+", "+$[3]+", "+$[4]+", "+$[5]+")"}function I($){return Math.sqrt(Math.pow($[0],2)+Math.pow($[1],2)+Math.pow($[2],2)+Math.pow($[3],2)+Math.pow($[4],2)+Math.pow($[5],2)+1)}function H($,O,Y){return $[0]=O[0]+Y[0],$[1]=O[1]+Y[1],$[2]=O[2]+Y[2],$[3]=O[3]+Y[3],$[4]=O[4]+Y[4],$[5]=O[5]+Y[5],$}function q($,O,Y){return $[0]=O[0]-Y[0],$[1]=O[1]-Y[1],$[2]=O[2]-Y[2],$[3]=O[3]-Y[3],$[4]=O[4]-Y[4],$[5]=O[5]-Y[5],$}function ee($,O,Y){return $[0]=O[0]*Y,$[1]=O[1]*Y,$[2]=O[2]*Y,$[3]=O[3]*Y,$[4]=O[4]*Y,$[5]=O[5]*Y,$}function de($,O,Y,ae){return $[0]=O[0]+Y[0]*ae,$[1]=O[1]+Y[1]*ae,$[2]=O[2]+Y[2]*ae,$[3]=O[3]+Y[3]*ae,$[4]=O[4]+Y[4]*ae,$[5]=O[5]+Y[5]*ae,$}function fe($,O){return $[0]===O[0]&&$[1]===O[1]&&$[2]===O[2]&&$[3]===O[3]&&$[4]===O[4]&&$[5]===O[5]}function pe($,O){var Y=$[0],ae=$[1],ue=$[2],me=$[3],le=$[4],N=$[5],w=O[0],z=O[1],te=O[2],Z=O[3],ne=O[4],he=O[5];return Math.abs(Y-w)<=l.EPSILON*Math.max(1,Math.abs(Y),Math.abs(w))&&Math.abs(ae-z)<=l.EPSILON*Math.max(1,Math.abs(ae),Math.abs(z))&&Math.abs(ue-te)<=l.EPSILON*Math.max(1,Math.abs(ue),Math.abs(te))&&Math.abs(me-Z)<=l.EPSILON*Math.max(1,Math.abs(me),Math.abs(Z))&&Math.abs(le-ne)<=l.EPSILON*Math.max(1,Math.abs(le),Math.abs(ne))&&Math.abs(N-he)<=l.EPSILON*Math.max(1,Math.abs(N),Math.abs(he))}a.mul=x,a.sub=q},function(s,a,o){Object.defineProperty(a,"__esModule",{value:!0}),a.sub=a.mul=void 0,a.create=h,a.clone=d,a.copy=f,a.fromValues=m,a.set=v,a.identity=g,a.transpose=_,a.invert=F,a.adjoint=x,a.determinant=y,a.multiply=R,a.translate=L,a.scale=G,a.rotate=M,a.rotateX=E,a.rotateY=b,a.rotateZ=I,a.fromTranslation=H,a.fromScaling=q,a.fromRotation=ee,a.fromXRotation=de,a.fromYRotation=fe,a.fromZRotation=pe,a.fromRotationTranslation=$,a.getTranslation=O,a.getScaling=Y,a.getRotation=ae,a.fromRotationTranslationScale=ue,a.fromRotationTranslationScaleOrigin=me,a.fromQuat=le,a.frustum=N,a.perspective=w,a.perspectiveFromFieldOfView=z,a.ortho=te,a.lookAt=Z,a.targetTo=ne,a.str=he,a.frob=j,a.add=Le,a.subtract=K,a.multiplyScalar=re,a.multiplyScalarAndAdd=se,a.exactEquals=Ce,a.equals=Se;var c=o(0),l=u(c);function u(p){if(p&&p.__esModule)return p;var S={};if(p!=null)for(var D in p)Object.prototype.hasOwnProperty.call(p,D)&&(S[D]=p[D]);return S.default=p,S}function h(){var p=new l.ARRAY_TYPE(16);return p[0]=1,p[1]=0,p[2]=0,p[3]=0,p[4]=0,p[5]=1,p[6]=0,p[7]=0,p[8]=0,p[9]=0,p[10]=1,p[11]=0,p[12]=0,p[13]=0,p[14]=0,p[15]=1,p}function d(p){var S=new l.ARRAY_TYPE(16);return S[0]=p[0],S[1]=p[1],S[2]=p[2],S[3]=p[3],S[4]=p[4],S[5]=p[5],S[6]=p[6],S[7]=p[7],S[8]=p[8],S[9]=p[9],S[10]=p[10],S[11]=p[11],S[12]=p[12],S[13]=p[13],S[14]=p[14],S[15]=p[15],S}function f(p,S){return p[0]=S[0],p[1]=S[1],p[2]=S[2],p[3]=S[3],p[4]=S[4],p[5]=S[5],p[6]=S[6],p[7]=S[7],p[8]=S[8],p[9]=S[9],p[10]=S[10],p[11]=S[11],p[12]=S[12],p[13]=S[13],p[14]=S[14],p[15]=S[15],p}function m(p,S,D,X,J,ie,oe,xe,ve,ge,Pe,_e,Ee,Ue,Ie,De){var we=new l.ARRAY_TYPE(16);return we[0]=p,we[1]=S,we[2]=D,we[3]=X,we[4]=J,we[5]=ie,we[6]=oe,we[7]=xe,we[8]=ve,we[9]=ge,we[10]=Pe,we[11]=_e,we[12]=Ee,we[13]=Ue,we[14]=Ie,we[15]=De,we}function v(p,S,D,X,J,ie,oe,xe,ve,ge,Pe,_e,Ee,Ue,Ie,De,we){return p[0]=S,p[1]=D,p[2]=X,p[3]=J,p[4]=ie,p[5]=oe,p[6]=xe,p[7]=ve,p[8]=ge,p[9]=Pe,p[10]=_e,p[11]=Ee,p[12]=Ue,p[13]=Ie,p[14]=De,p[15]=we,p}function g(p){return p[0]=1,p[1]=0,p[2]=0,p[3]=0,p[4]=0,p[5]=1,p[6]=0,p[7]=0,p[8]=0,p[9]=0,p[10]=1,p[11]=0,p[12]=0,p[13]=0,p[14]=0,p[15]=1,p}function _(p,S){if(p===S){var D=S[1],X=S[2],J=S[3],ie=S[6],oe=S[7],xe=S[11];p[1]=S[4],p[2]=S[8],p[3]=S[12],p[4]=D,p[6]=S[9],p[7]=S[13],p[8]=X,p[9]=ie,p[11]=S[14],p[12]=J,p[13]=oe,p[14]=xe}else p[0]=S[0],p[1]=S[4],p[2]=S[8],p[3]=S[12],p[4]=S[1],p[5]=S[5],p[6]=S[9],p[7]=S[13],p[8]=S[2],p[9]=S[6],p[10]=S[10],p[11]=S[14],p[12]=S[3],p[13]=S[7],p[14]=S[11],p[15]=S[15];return p}function F(p,S){var D=S[0],X=S[1],J=S[2],ie=S[3],oe=S[4],xe=S[5],ve=S[6],ge=S[7],Pe=S[8],_e=S[9],Ee=S[10],Ue=S[11],Ie=S[12],De=S[13],we=S[14],Be=S[15],He=D*xe-X*oe,ce=D*ve-J*oe,Fe=D*ge-ie*oe,Te=X*ve-J*xe,be=X*ge-ie*xe,Ne=J*ge-ie*ve,ke=Pe*De-_e*Ie,We=Pe*we-Ee*Ie,Ke=Pe*Be-Ue*Ie,Qe=_e*we-Ee*De,Xe=_e*Be-Ue*De,nt=Ee*Be-Ue*we,Ze=He*nt-ce*Xe+Fe*Qe+Te*Ke-be*We+Ne*ke;return Ze?(Ze=1/Ze,p[0]=(xe*nt-ve*Xe+ge*Qe)*Ze,p[1]=(J*Xe-X*nt-ie*Qe)*Ze,p[2]=(De*Ne-we*be+Be*Te)*Ze,p[3]=(Ee*be-_e*Ne-Ue*Te)*Ze,p[4]=(ve*Ke-oe*nt-ge*We)*Ze,p[5]=(D*nt-J*Ke+ie*We)*Ze,p[6]=(we*Fe-Ie*Ne-Be*ce)*Ze,p[7]=(Pe*Ne-Ee*Fe+Ue*ce)*Ze,p[8]=(oe*Xe-xe*Ke+ge*ke)*Ze,p[9]=(X*Ke-D*Xe-ie*ke)*Ze,p[10]=(Ie*be-De*Fe+Be*He)*Ze,p[11]=(_e*Fe-Pe*be-Ue*He)*Ze,p[12]=(xe*We-oe*Qe-ve*ke)*Ze,p[13]=(D*Qe-X*We+J*ke)*Ze,p[14]=(De*ce-Ie*Te-we*He)*Ze,p[15]=(Pe*Te-_e*ce+Ee*He)*Ze,p):null}function x(p,S){var D=S[0],X=S[1],J=S[2],ie=S[3],oe=S[4],xe=S[5],ve=S[6],ge=S[7],Pe=S[8],_e=S[9],Ee=S[10],Ue=S[11],Ie=S[12],De=S[13],we=S[14],Be=S[15];return p[0]=xe*(Ee*Be-Ue*we)-_e*(ve*Be-ge*we)+De*(ve*Ue-ge*Ee),p[1]=-(X*(Ee*Be-Ue*we)-_e*(J*Be-ie*we)+De*(J*Ue-ie*Ee)),p[2]=X*(ve*Be-ge*we)-xe*(J*Be-ie*we)+De*(J*ge-ie*ve),p[3]=-(X*(ve*Ue-ge*Ee)-xe*(J*Ue-ie*Ee)+_e*(J*ge-ie*ve)),p[4]=-(oe*(Ee*Be-Ue*we)-Pe*(ve*Be-ge*we)+Ie*(ve*Ue-ge*Ee)),p[5]=D*(Ee*Be-Ue*we)-Pe*(J*Be-ie*we)+Ie*(J*Ue-ie*Ee),p[6]=-(D*(ve*Be-ge*we)-oe*(J*Be-ie*we)+Ie*(J*ge-ie*ve)),p[7]=D*(ve*Ue-ge*Ee)-oe*(J*Ue-ie*Ee)+Pe*(J*ge-ie*ve),p[8]=oe*(_e*Be-Ue*De)-Pe*(xe*Be-ge*De)+Ie*(xe*Ue-ge*_e),p[9]=-(D*(_e*Be-Ue*De)-Pe*(X*Be-ie*De)+Ie*(X*Ue-ie*_e)),p[10]=D*(xe*Be-ge*De)-oe*(X*Be-ie*De)+Ie*(X*ge-ie*xe),p[11]=-(D*(xe*Ue-ge*_e)-oe*(X*Ue-ie*_e)+Pe*(X*ge-ie*xe)),p[12]=-(oe*(_e*we-Ee*De)-Pe*(xe*we-ve*De)+Ie*(xe*Ee-ve*_e)),p[13]=D*(_e*we-Ee*De)-Pe*(X*we-J*De)+Ie*(X*Ee-J*_e),p[14]=-(D*(xe*we-ve*De)-oe*(X*we-J*De)+Ie*(X*ve-J*xe)),p[15]=D*(xe*Ee-ve*_e)-oe*(X*Ee-J*_e)+Pe*(X*ve-J*xe),p}function y(p){var S=p[0],D=p[1],X=p[2],J=p[3],ie=p[4],oe=p[5],xe=p[6],ve=p[7],ge=p[8],Pe=p[9],_e=p[10],Ee=p[11],Ue=p[12],Ie=p[13],De=p[14],we=p[15],Be=S*oe-D*ie,He=S*xe-X*ie,ce=S*ve-J*ie,Fe=D*xe-X*oe,Te=D*ve-J*oe,be=X*ve-J*xe,Ne=ge*Ie-Pe*Ue,ke=ge*De-_e*Ue,We=ge*we-Ee*Ue,Ke=Pe*De-_e*Ie,Qe=Pe*we-Ee*Ie,Xe=_e*we-Ee*De;return Be*Xe-He*Qe+ce*Ke+Fe*We-Te*ke+be*Ne}function R(p,S,D){var X=S[0],J=S[1],ie=S[2],oe=S[3],xe=S[4],ve=S[5],ge=S[6],Pe=S[7],_e=S[8],Ee=S[9],Ue=S[10],Ie=S[11],De=S[12],we=S[13],Be=S[14],He=S[15],ce=D[0],Fe=D[1],Te=D[2],be=D[3];return p[0]=ce*X+Fe*xe+Te*_e+be*De,p[1]=ce*J+Fe*ve+Te*Ee+be*we,p[2]=ce*ie+Fe*ge+Te*Ue+be*Be,p[3]=ce*oe+Fe*Pe+Te*Ie+be*He,ce=D[4],Fe=D[5],Te=D[6],be=D[7],p[4]=ce*X+Fe*xe+Te*_e+be*De,p[5]=ce*J+Fe*ve+Te*Ee+be*we,p[6]=ce*ie+Fe*ge+Te*Ue+be*Be,p[7]=ce*oe+Fe*Pe+Te*Ie+be*He,ce=D[8],Fe=D[9],Te=D[10],be=D[11],p[8]=ce*X+Fe*xe+Te*_e+be*De,p[9]=ce*J+Fe*ve+Te*Ee+be*we,p[10]=ce*ie+Fe*ge+Te*Ue+be*Be,p[11]=ce*oe+Fe*Pe+Te*Ie+be*He,ce=D[12],Fe=D[13],Te=D[14],be=D[15],p[12]=ce*X+Fe*xe+Te*_e+be*De,p[13]=ce*J+Fe*ve+Te*Ee+be*we,p[14]=ce*ie+Fe*ge+Te*Ue+be*Be,p[15]=ce*oe+Fe*Pe+Te*Ie+be*He,p}function L(p,S,D){var X=D[0],J=D[1],ie=D[2],oe=void 0,xe=void 0,ve=void 0,ge=void 0,Pe=void 0,_e=void 0,Ee=void 0,Ue=void 0,Ie=void 0,De=void 0,we=void 0,Be=void 0;return S===p?(p[12]=S[0]*X+S[4]*J+S[8]*ie+S[12],p[13]=S[1]*X+S[5]*J+S[9]*ie+S[13],p[14]=S[2]*X+S[6]*J+S[10]*ie+S[14],p[15]=S[3]*X+S[7]*J+S[11]*ie+S[15]):(oe=S[0],xe=S[1],ve=S[2],ge=S[3],Pe=S[4],_e=S[5],Ee=S[6],Ue=S[7],Ie=S[8],De=S[9],we=S[10],Be=S[11],p[0]=oe,p[1]=xe,p[2]=ve,p[3]=ge,p[4]=Pe,p[5]=_e,p[6]=Ee,p[7]=Ue,p[8]=Ie,p[9]=De,p[10]=we,p[11]=Be,p[12]=oe*X+Pe*J+Ie*ie+S[12],p[13]=xe*X+_e*J+De*ie+S[13],p[14]=ve*X+Ee*J+we*ie+S[14],p[15]=ge*X+Ue*J+Be*ie+S[15]),p}function G(p,S,D){var X=D[0],J=D[1],ie=D[2];return p[0]=S[0]*X,p[1]=S[1]*X,p[2]=S[2]*X,p[3]=S[3]*X,p[4]=S[4]*J,p[5]=S[5]*J,p[6]=S[6]*J,p[7]=S[7]*J,p[8]=S[8]*ie,p[9]=S[9]*ie,p[10]=S[10]*ie,p[11]=S[11]*ie,p[12]=S[12],p[13]=S[13],p[14]=S[14],p[15]=S[15],p}function M(p,S,D,X){var J=X[0],ie=X[1],oe=X[2],xe=Math.sqrt(J*J+ie*ie+oe*oe),ve=void 0,ge=void 0,Pe=void 0,_e=void 0,Ee=void 0,Ue=void 0,Ie=void 0,De=void 0,we=void 0,Be=void 0,He=void 0,ce=void 0,Fe=void 0,Te=void 0,be=void 0,Ne=void 0,ke=void 0,We=void 0,Ke=void 0,Qe=void 0,Xe=void 0,nt=void 0,Ze=void 0,ut=void 0;return Math.abs(xe)<l.EPSILON?null:(xe=1/xe,J*=xe,ie*=xe,oe*=xe,ve=Math.sin(D),ge=Math.cos(D),Pe=1-ge,_e=S[0],Ee=S[1],Ue=S[2],Ie=S[3],De=S[4],we=S[5],Be=S[6],He=S[7],ce=S[8],Fe=S[9],Te=S[10],be=S[11],Ne=J*J*Pe+ge,ke=ie*J*Pe+oe*ve,We=oe*J*Pe-ie*ve,Ke=J*ie*Pe-oe*ve,Qe=ie*ie*Pe+ge,Xe=oe*ie*Pe+J*ve,nt=J*oe*Pe+ie*ve,Ze=ie*oe*Pe-J*ve,ut=oe*oe*Pe+ge,p[0]=_e*Ne+De*ke+ce*We,p[1]=Ee*Ne+we*ke+Fe*We,p[2]=Ue*Ne+Be*ke+Te*We,p[3]=Ie*Ne+He*ke+be*We,p[4]=_e*Ke+De*Qe+ce*Xe,p[5]=Ee*Ke+we*Qe+Fe*Xe,p[6]=Ue*Ke+Be*Qe+Te*Xe,p[7]=Ie*Ke+He*Qe+be*Xe,p[8]=_e*nt+De*Ze+ce*ut,p[9]=Ee*nt+we*Ze+Fe*ut,p[10]=Ue*nt+Be*Ze+Te*ut,p[11]=Ie*nt+He*Ze+be*ut,S!==p&&(p[12]=S[12],p[13]=S[13],p[14]=S[14],p[15]=S[15]),p)}function E(p,S,D){var X=Math.sin(D),J=Math.cos(D),ie=S[4],oe=S[5],xe=S[6],ve=S[7],ge=S[8],Pe=S[9],_e=S[10],Ee=S[11];return S!==p&&(p[0]=S[0],p[1]=S[1],p[2]=S[2],p[3]=S[3],p[12]=S[12],p[13]=S[13],p[14]=S[14],p[15]=S[15]),p[4]=ie*J+ge*X,p[5]=oe*J+Pe*X,p[6]=xe*J+_e*X,p[7]=ve*J+Ee*X,p[8]=ge*J-ie*X,p[9]=Pe*J-oe*X,p[10]=_e*J-xe*X,p[11]=Ee*J-ve*X,p}function b(p,S,D){var X=Math.sin(D),J=Math.cos(D),ie=S[0],oe=S[1],xe=S[2],ve=S[3],ge=S[8],Pe=S[9],_e=S[10],Ee=S[11];return S!==p&&(p[4]=S[4],p[5]=S[5],p[6]=S[6],p[7]=S[7],p[12]=S[12],p[13]=S[13],p[14]=S[14],p[15]=S[15]),p[0]=ie*J-ge*X,p[1]=oe*J-Pe*X,p[2]=xe*J-_e*X,p[3]=ve*J-Ee*X,p[8]=ie*X+ge*J,p[9]=oe*X+Pe*J,p[10]=xe*X+_e*J,p[11]=ve*X+Ee*J,p}function I(p,S,D){var X=Math.sin(D),J=Math.cos(D),ie=S[0],oe=S[1],xe=S[2],ve=S[3],ge=S[4],Pe=S[5],_e=S[6],Ee=S[7];return S!==p&&(p[8]=S[8],p[9]=S[9],p[10]=S[10],p[11]=S[11],p[12]=S[12],p[13]=S[13],p[14]=S[14],p[15]=S[15]),p[0]=ie*J+ge*X,p[1]=oe*J+Pe*X,p[2]=xe*J+_e*X,p[3]=ve*J+Ee*X,p[4]=ge*J-ie*X,p[5]=Pe*J-oe*X,p[6]=_e*J-xe*X,p[7]=Ee*J-ve*X,p}function H(p,S){return p[0]=1,p[1]=0,p[2]=0,p[3]=0,p[4]=0,p[5]=1,p[6]=0,p[7]=0,p[8]=0,p[9]=0,p[10]=1,p[11]=0,p[12]=S[0],p[13]=S[1],p[14]=S[2],p[15]=1,p}function q(p,S){return p[0]=S[0],p[1]=0,p[2]=0,p[3]=0,p[4]=0,p[5]=S[1],p[6]=0,p[7]=0,p[8]=0,p[9]=0,p[10]=S[2],p[11]=0,p[12]=0,p[13]=0,p[14]=0,p[15]=1,p}function ee(p,S,D){var X=D[0],J=D[1],ie=D[2],oe=Math.sqrt(X*X+J*J+ie*ie),xe=void 0,ve=void 0,ge=void 0;return Math.abs(oe)<l.EPSILON?null:(oe=1/oe,X*=oe,J*=oe,ie*=oe,xe=Math.sin(S),ve=Math.cos(S),ge=1-ve,p[0]=X*X*ge+ve,p[1]=J*X*ge+ie*xe,p[2]=ie*X*ge-J*xe,p[3]=0,p[4]=X*J*ge-ie*xe,p[5]=J*J*ge+ve,p[6]=ie*J*ge+X*xe,p[7]=0,p[8]=X*ie*ge+J*xe,p[9]=J*ie*ge-X*xe,p[10]=ie*ie*ge+ve,p[11]=0,p[12]=0,p[13]=0,p[14]=0,p[15]=1,p)}function de(p,S){var D=Math.sin(S),X=Math.cos(S);return p[0]=1,p[1]=0,p[2]=0,p[3]=0,p[4]=0,p[5]=X,p[6]=D,p[7]=0,p[8]=0,p[9]=-D,p[10]=X,p[11]=0,p[12]=0,p[13]=0,p[14]=0,p[15]=1,p}function fe(p,S){var D=Math.sin(S),X=Math.cos(S);return p[0]=X,p[1]=0,p[2]=-D,p[3]=0,p[4]=0,p[5]=1,p[6]=0,p[7]=0,p[8]=D,p[9]=0,p[10]=X,p[11]=0,p[12]=0,p[13]=0,p[14]=0,p[15]=1,p}function pe(p,S){var D=Math.sin(S),X=Math.cos(S);return p[0]=X,p[1]=D,p[2]=0,p[3]=0,p[4]=-D,p[5]=X,p[6]=0,p[7]=0,p[8]=0,p[9]=0,p[10]=1,p[11]=0,p[12]=0,p[13]=0,p[14]=0,p[15]=1,p}function $(p,S,D){var X=S[0],J=S[1],ie=S[2],oe=S[3],xe=X+X,ve=J+J,ge=ie+ie,Pe=X*xe,_e=X*ve,Ee=X*ge,Ue=J*ve,Ie=J*ge,De=ie*ge,we=oe*xe,Be=oe*ve,He=oe*ge;return p[0]=1-(Ue+De),p[1]=_e+He,p[2]=Ee-Be,p[3]=0,p[4]=_e-He,p[5]=1-(Pe+De),p[6]=Ie+we,p[7]=0,p[8]=Ee+Be,p[9]=Ie-we,p[10]=1-(Pe+Ue),p[11]=0,p[12]=D[0],p[13]=D[1],p[14]=D[2],p[15]=1,p}function O(p,S){return p[0]=S[12],p[1]=S[13],p[2]=S[14],p}function Y(p,S){var D=S[0],X=S[1],J=S[2],ie=S[4],oe=S[5],xe=S[6],ve=S[8],ge=S[9],Pe=S[10];return p[0]=Math.sqrt(D*D+X*X+J*J),p[1]=Math.sqrt(ie*ie+oe*oe+xe*xe),p[2]=Math.sqrt(ve*ve+ge*ge+Pe*Pe),p}function ae(p,S){var D=S[0]+S[5]+S[10],X=0;return D>0?(X=Math.sqrt(D+1)*2,p[3]=.25*X,p[0]=(S[6]-S[9])/X,p[1]=(S[8]-S[2])/X,p[2]=(S[1]-S[4])/X):S[0]>S[5]&S[0]>S[10]?(X=Math.sqrt(1+S[0]-S[5]-S[10])*2,p[3]=(S[6]-S[9])/X,p[0]=.25*X,p[1]=(S[1]+S[4])/X,p[2]=(S[8]+S[2])/X):S[5]>S[10]?(X=Math.sqrt(1+S[5]-S[0]-S[10])*2,p[3]=(S[8]-S[2])/X,p[0]=(S[1]+S[4])/X,p[1]=.25*X,p[2]=(S[6]+S[9])/X):(X=Math.sqrt(1+S[10]-S[0]-S[5])*2,p[3]=(S[1]-S[4])/X,p[0]=(S[8]+S[2])/X,p[1]=(S[6]+S[9])/X,p[2]=.25*X),p}function ue(p,S,D,X){var J=S[0],ie=S[1],oe=S[2],xe=S[3],ve=J+J,ge=ie+ie,Pe=oe+oe,_e=J*ve,Ee=J*ge,Ue=J*Pe,Ie=ie*ge,De=ie*Pe,we=oe*Pe,Be=xe*ve,He=xe*ge,ce=xe*Pe,Fe=X[0],Te=X[1],be=X[2];return p[0]=(1-(Ie+we))*Fe,p[1]=(Ee+ce)*Fe,p[2]=(Ue-He)*Fe,p[3]=0,p[4]=(Ee-ce)*Te,p[5]=(1-(_e+we))*Te,p[6]=(De+Be)*Te,p[7]=0,p[8]=(Ue+He)*be,p[9]=(De-Be)*be,p[10]=(1-(_e+Ie))*be,p[11]=0,p[12]=D[0],p[13]=D[1],p[14]=D[2],p[15]=1,p}function me(p,S,D,X,J){var ie=S[0],oe=S[1],xe=S[2],ve=S[3],ge=ie+ie,Pe=oe+oe,_e=xe+xe,Ee=ie*ge,Ue=ie*Pe,Ie=ie*_e,De=oe*Pe,we=oe*_e,Be=xe*_e,He=ve*ge,ce=ve*Pe,Fe=ve*_e,Te=X[0],be=X[1],Ne=X[2],ke=J[0],We=J[1],Ke=J[2];return p[0]=(1-(De+Be))*Te,p[1]=(Ue+Fe)*Te,p[2]=(Ie-ce)*Te,p[3]=0,p[4]=(Ue-Fe)*be,p[5]=(1-(Ee+Be))*be,p[6]=(we+He)*be,p[7]=0,p[8]=(Ie+ce)*Ne,p[9]=(we-He)*Ne,p[10]=(1-(Ee+De))*Ne,p[11]=0,p[12]=D[0]+ke-(p[0]*ke+p[4]*We+p[8]*Ke),p[13]=D[1]+We-(p[1]*ke+p[5]*We+p[9]*Ke),p[14]=D[2]+Ke-(p[2]*ke+p[6]*We+p[10]*Ke),p[15]=1,p}function le(p,S){var D=S[0],X=S[1],J=S[2],ie=S[3],oe=D+D,xe=X+X,ve=J+J,ge=D*oe,Pe=X*oe,_e=X*xe,Ee=J*oe,Ue=J*xe,Ie=J*ve,De=ie*oe,we=ie*xe,Be=ie*ve;return p[0]=1-_e-Ie,p[1]=Pe+Be,p[2]=Ee-we,p[3]=0,p[4]=Pe-Be,p[5]=1-ge-Ie,p[6]=Ue+De,p[7]=0,p[8]=Ee+we,p[9]=Ue-De,p[10]=1-ge-_e,p[11]=0,p[12]=0,p[13]=0,p[14]=0,p[15]=1,p}function N(p,S,D,X,J,ie,oe){var xe=1/(D-S),ve=1/(J-X),ge=1/(ie-oe);return p[0]=ie*2*xe,p[1]=0,p[2]=0,p[3]=0,p[4]=0,p[5]=ie*2*ve,p[6]=0,p[7]=0,p[8]=(D+S)*xe,p[9]=(J+X)*ve,p[10]=(oe+ie)*ge,p[11]=-1,p[12]=0,p[13]=0,p[14]=oe*ie*2*ge,p[15]=0,p}function w(p,S,D,X,J){var ie=1/Math.tan(S/2),oe=1/(X-J);return p[0]=ie/D,p[1]=0,p[2]=0,p[3]=0,p[4]=0,p[5]=ie,p[6]=0,p[7]=0,p[8]=0,p[9]=0,p[10]=(J+X)*oe,p[11]=-1,p[12]=0,p[13]=0,p[14]=2*J*X*oe,p[15]=0,p}function z(p,S,D,X){var J=Math.tan(S.upDegrees*Math.PI/180),ie=Math.tan(S.downDegrees*Math.PI/180),oe=Math.tan(S.leftDegrees*Math.PI/180),xe=Math.tan(S.rightDegrees*Math.PI/180),ve=2/(oe+xe),ge=2/(J+ie);return p[0]=ve,p[1]=0,p[2]=0,p[3]=0,p[4]=0,p[5]=ge,p[6]=0,p[7]=0,p[8]=-((oe-xe)*ve*.5),p[9]=(J-ie)*ge*.5,p[10]=X/(D-X),p[11]=-1,p[12]=0,p[13]=0,p[14]=X*D/(D-X),p[15]=0,p}function te(p,S,D,X,J,ie,oe){var xe=1/(S-D),ve=1/(X-J),ge=1/(ie-oe);return p[0]=-2*xe,p[1]=0,p[2]=0,p[3]=0,p[4]=0,p[5]=-2*ve,p[6]=0,p[7]=0,p[8]=0,p[9]=0,p[10]=2*ge,p[11]=0,p[12]=(S+D)*xe,p[13]=(J+X)*ve,p[14]=(oe+ie)*ge,p[15]=1,p}function Z(p,S,D,X){var J=void 0,ie=void 0,oe=void 0,xe=void 0,ve=void 0,ge=void 0,Pe=void 0,_e=void 0,Ee=void 0,Ue=void 0,Ie=S[0],De=S[1],we=S[2],Be=X[0],He=X[1],ce=X[2],Fe=D[0],Te=D[1],be=D[2];return Math.abs(Ie-Fe)<l.EPSILON&&Math.abs(De-Te)<l.EPSILON&&Math.abs(we-be)<l.EPSILON?mat4.identity(p):(Pe=Ie-Fe,_e=De-Te,Ee=we-be,Ue=1/Math.sqrt(Pe*Pe+_e*_e+Ee*Ee),Pe*=Ue,_e*=Ue,Ee*=Ue,J=He*Ee-ce*_e,ie=ce*Pe-Be*Ee,oe=Be*_e-He*Pe,Ue=Math.sqrt(J*J+ie*ie+oe*oe),Ue?(Ue=1/Ue,J*=Ue,ie*=Ue,oe*=Ue):(J=0,ie=0,oe=0),xe=_e*oe-Ee*ie,ve=Ee*J-Pe*oe,ge=Pe*ie-_e*J,Ue=Math.sqrt(xe*xe+ve*ve+ge*ge),Ue?(Ue=1/Ue,xe*=Ue,ve*=Ue,ge*=Ue):(xe=0,ve=0,ge=0),p[0]=J,p[1]=xe,p[2]=Pe,p[3]=0,p[4]=ie,p[5]=ve,p[6]=_e,p[7]=0,p[8]=oe,p[9]=ge,p[10]=Ee,p[11]=0,p[12]=-(J*Ie+ie*De+oe*we),p[13]=-(xe*Ie+ve*De+ge*we),p[14]=-(Pe*Ie+_e*De+Ee*we),p[15]=1,p)}function ne(p,S,D,X){var J=S[0],ie=S[1],oe=S[2],xe=X[0],ve=X[1],ge=X[2],Pe=J-D[0],_e=ie-D[1],Ee=oe-D[2],Ue=Pe*Pe+_e*_e+Ee*Ee;Ue>0&&(Ue=1/Math.sqrt(Ue),Pe*=Ue,_e*=Ue,Ee*=Ue);var Ie=ve*Ee-ge*_e,De=ge*Pe-xe*Ee,we=xe*_e-ve*Pe;return p[0]=Ie,p[1]=De,p[2]=we,p[3]=0,p[4]=_e*we-Ee*De,p[5]=Ee*Ie-Pe*we,p[6]=Pe*De-_e*Ie,p[7]=0,p[8]=Pe,p[9]=_e,p[10]=Ee,p[11]=0,p[12]=J,p[13]=ie,p[14]=oe,p[15]=1,p}function he(p){return"mat4("+p[0]+", "+p[1]+", "+p[2]+", "+p[3]+", "+p[4]+", "+p[5]+", "+p[6]+", "+p[7]+", "+p[8]+", "+p[9]+", "+p[10]+", "+p[11]+", "+p[12]+", "+p[13]+", "+p[14]+", "+p[15]+")"}function j(p){return Math.sqrt(Math.pow(p[0],2)+Math.pow(p[1],2)+Math.pow(p[2],2)+Math.pow(p[3],2)+Math.pow(p[4],2)+Math.pow(p[5],2)+Math.pow(p[6],2)+Math.pow(p[7],2)+Math.pow(p[8],2)+Math.pow(p[9],2)+Math.pow(p[10],2)+Math.pow(p[11],2)+Math.pow(p[12],2)+Math.pow(p[13],2)+Math.pow(p[14],2)+Math.pow(p[15],2))}function Le(p,S,D){return p[0]=S[0]+D[0],p[1]=S[1]+D[1],p[2]=S[2]+D[2],p[3]=S[3]+D[3],p[4]=S[4]+D[4],p[5]=S[5]+D[5],p[6]=S[6]+D[6],p[7]=S[7]+D[7],p[8]=S[8]+D[8],p[9]=S[9]+D[9],p[10]=S[10]+D[10],p[11]=S[11]+D[11],p[12]=S[12]+D[12],p[13]=S[13]+D[13],p[14]=S[14]+D[14],p[15]=S[15]+D[15],p}function K(p,S,D){return p[0]=S[0]-D[0],p[1]=S[1]-D[1],p[2]=S[2]-D[2],p[3]=S[3]-D[3],p[4]=S[4]-D[4],p[5]=S[5]-D[5],p[6]=S[6]-D[6],p[7]=S[7]-D[7],p[8]=S[8]-D[8],p[9]=S[9]-D[9],p[10]=S[10]-D[10],p[11]=S[11]-D[11],p[12]=S[12]-D[12],p[13]=S[13]-D[13],p[14]=S[14]-D[14],p[15]=S[15]-D[15],p}function re(p,S,D){return p[0]=S[0]*D,p[1]=S[1]*D,p[2]=S[2]*D,p[3]=S[3]*D,p[4]=S[4]*D,p[5]=S[5]*D,p[6]=S[6]*D,p[7]=S[7]*D,p[8]=S[8]*D,p[9]=S[9]*D,p[10]=S[10]*D,p[11]=S[11]*D,p[12]=S[12]*D,p[13]=S[13]*D,p[14]=S[14]*D,p[15]=S[15]*D,p}function se(p,S,D,X){return p[0]=S[0]+D[0]*X,p[1]=S[1]+D[1]*X,p[2]=S[2]+D[2]*X,p[3]=S[3]+D[3]*X,p[4]=S[4]+D[4]*X,p[5]=S[5]+D[5]*X,p[6]=S[6]+D[6]*X,p[7]=S[7]+D[7]*X,p[8]=S[8]+D[8]*X,p[9]=S[9]+D[9]*X,p[10]=S[10]+D[10]*X,p[11]=S[11]+D[11]*X,p[12]=S[12]+D[12]*X,p[13]=S[13]+D[13]*X,p[14]=S[14]+D[14]*X,p[15]=S[15]+D[15]*X,p}function Ce(p,S){return p[0]===S[0]&&p[1]===S[1]&&p[2]===S[2]&&p[3]===S[3]&&p[4]===S[4]&&p[5]===S[5]&&p[6]===S[6]&&p[7]===S[7]&&p[8]===S[8]&&p[9]===S[9]&&p[10]===S[10]&&p[11]===S[11]&&p[12]===S[12]&&p[13]===S[13]&&p[14]===S[14]&&p[15]===S[15]}function Se(p,S){var D=p[0],X=p[1],J=p[2],ie=p[3],oe=p[4],xe=p[5],ve=p[6],ge=p[7],Pe=p[8],_e=p[9],Ee=p[10],Ue=p[11],Ie=p[12],De=p[13],we=p[14],Be=p[15],He=S[0],ce=S[1],Fe=S[2],Te=S[3],be=S[4],Ne=S[5],ke=S[6],We=S[7],Ke=S[8],Qe=S[9],Xe=S[10],nt=S[11],Ze=S[12],ut=S[13],ft=S[14],pt=S[15];return Math.abs(D-He)<=l.EPSILON*Math.max(1,Math.abs(D),Math.abs(He))&&Math.abs(X-ce)<=l.EPSILON*Math.max(1,Math.abs(X),Math.abs(ce))&&Math.abs(J-Fe)<=l.EPSILON*Math.max(1,Math.abs(J),Math.abs(Fe))&&Math.abs(ie-Te)<=l.EPSILON*Math.max(1,Math.abs(ie),Math.abs(Te))&&Math.abs(oe-be)<=l.EPSILON*Math.max(1,Math.abs(oe),Math.abs(be))&&Math.abs(xe-Ne)<=l.EPSILON*Math.max(1,Math.abs(xe),Math.abs(Ne))&&Math.abs(ve-ke)<=l.EPSILON*Math.max(1,Math.abs(ve),Math.abs(ke))&&Math.abs(ge-We)<=l.EPSILON*Math.max(1,Math.abs(ge),Math.abs(We))&&Math.abs(Pe-Ke)<=l.EPSILON*Math.max(1,Math.abs(Pe),Math.abs(Ke))&&Math.abs(_e-Qe)<=l.EPSILON*Math.max(1,Math.abs(_e),Math.abs(Qe))&&Math.abs(Ee-Xe)<=l.EPSILON*Math.max(1,Math.abs(Ee),Math.abs(Xe))&&Math.abs(Ue-nt)<=l.EPSILON*Math.max(1,Math.abs(Ue),Math.abs(nt))&&Math.abs(Ie-Ze)<=l.EPSILON*Math.max(1,Math.abs(Ie),Math.abs(Ze))&&Math.abs(De-ut)<=l.EPSILON*Math.max(1,Math.abs(De),Math.abs(ut))&&Math.abs(we-ft)<=l.EPSILON*Math.max(1,Math.abs(we),Math.abs(ft))&&Math.abs(Be-pt)<=l.EPSILON*Math.max(1,Math.abs(Be),Math.abs(pt))}a.mul=R,a.sub=K},function(s,a,o){Object.defineProperty(a,"__esModule",{value:!0}),a.setAxes=a.sqlerp=a.rotationTo=a.equals=a.exactEquals=a.normalize=a.sqrLen=a.squaredLength=a.len=a.length=a.lerp=a.dot=a.scale=a.mul=a.add=a.set=a.copy=a.fromValues=a.clone=void 0,a.create=_,a.identity=F,a.setAxisAngle=x,a.getAxisAngle=y,a.multiply=R,a.rotateX=L,a.rotateY=G,a.rotateZ=M,a.calculateW=E,a.slerp=b,a.invert=I,a.conjugate=H,a.fromMat3=q,a.fromEuler=ee,a.str=de;var c=o(0),l=g(c),u=o(1),h=g(u),d=o(2),f=g(d),m=o(3),v=g(m);function g(O){if(O&&O.__esModule)return O;var Y={};if(O!=null)for(var ae in O)Object.prototype.hasOwnProperty.call(O,ae)&&(Y[ae]=O[ae]);return Y.default=O,Y}function _(){var O=new l.ARRAY_TYPE(4);return O[0]=0,O[1]=0,O[2]=0,O[3]=1,O}function F(O){return O[0]=0,O[1]=0,O[2]=0,O[3]=1,O}function x(O,Y,ae){ae=ae*.5;var ue=Math.sin(ae);return O[0]=ue*Y[0],O[1]=ue*Y[1],O[2]=ue*Y[2],O[3]=Math.cos(ae),O}function y(O,Y){var ae=Math.acos(Y[3])*2,ue=Math.sin(ae/2);return ue!=0?(O[0]=Y[0]/ue,O[1]=Y[1]/ue,O[2]=Y[2]/ue):(O[0]=1,O[1]=0,O[2]=0),ae}function R(O,Y,ae){var ue=Y[0],me=Y[1],le=Y[2],N=Y[3],w=ae[0],z=ae[1],te=ae[2],Z=ae[3];return O[0]=ue*Z+N*w+me*te-le*z,O[1]=me*Z+N*z+le*w-ue*te,O[2]=le*Z+N*te+ue*z-me*w,O[3]=N*Z-ue*w-me*z-le*te,O}function L(O,Y,ae){ae*=.5;var ue=Y[0],me=Y[1],le=Y[2],N=Y[3],w=Math.sin(ae),z=Math.cos(ae);return O[0]=ue*z+N*w,O[1]=me*z+le*w,O[2]=le*z-me*w,O[3]=N*z-ue*w,O}function G(O,Y,ae){ae*=.5;var ue=Y[0],me=Y[1],le=Y[2],N=Y[3],w=Math.sin(ae),z=Math.cos(ae);return O[0]=ue*z-le*w,O[1]=me*z+N*w,O[2]=le*z+ue*w,O[3]=N*z-me*w,O}function M(O,Y,ae){ae*=.5;var ue=Y[0],me=Y[1],le=Y[2],N=Y[3],w=Math.sin(ae),z=Math.cos(ae);return O[0]=ue*z+me*w,O[1]=me*z-ue*w,O[2]=le*z+N*w,O[3]=N*z-le*w,O}function E(O,Y){var ae=Y[0],ue=Y[1],me=Y[2];return O[0]=ae,O[1]=ue,O[2]=me,O[3]=Math.sqrt(Math.abs(1-ae*ae-ue*ue-me*me)),O}function b(O,Y,ae,ue){var me=Y[0],le=Y[1],N=Y[2],w=Y[3],z=ae[0],te=ae[1],Z=ae[2],ne=ae[3],he=void 0,j=void 0,Le=void 0,K=void 0,re=void 0;return j=me*z+le*te+N*Z+w*ne,j<0&&(j=-j,z=-z,te=-te,Z=-Z,ne=-ne),1-j>1e-6?(he=Math.acos(j),Le=Math.sin(he),K=Math.sin((1-ue)*he)/Le,re=Math.sin(ue*he)/Le):(K=1-ue,re=ue),O[0]=K*me+re*z,O[1]=K*le+re*te,O[2]=K*N+re*Z,O[3]=K*w+re*ne,O}function I(O,Y){var ae=Y[0],ue=Y[1],me=Y[2],le=Y[3],N=ae*ae+ue*ue+me*me+le*le,w=N?1/N:0;return O[0]=-ae*w,O[1]=-ue*w,O[2]=-me*w,O[3]=le*w,O}function H(O,Y){return O[0]=-Y[0],O[1]=-Y[1],O[2]=-Y[2],O[3]=Y[3],O}function q(O,Y){var ae=Y[0]+Y[4]+Y[8],ue=void 0;if(ae>0)ue=Math.sqrt(ae+1),O[3]=.5*ue,ue=.5/ue,O[0]=(Y[5]-Y[7])*ue,O[1]=(Y[6]-Y[2])*ue,O[2]=(Y[1]-Y[3])*ue;else{var me=0;Y[4]>Y[0]&&(me=1),Y[8]>Y[me*3+me]&&(me=2);var le=(me+1)%3,N=(me+2)%3;ue=Math.sqrt(Y[me*3+me]-Y[le*3+le]-Y[N*3+N]+1),O[me]=.5*ue,ue=.5/ue,O[3]=(Y[le*3+N]-Y[N*3+le])*ue,O[le]=(Y[le*3+me]+Y[me*3+le])*ue,O[N]=(Y[N*3+me]+Y[me*3+N])*ue}return O}function ee(O,Y,ae,ue){var me=.5*Math.PI/180;Y*=me,ae*=me,ue*=me;var le=Math.sin(Y),N=Math.cos(Y),w=Math.sin(ae),z=Math.cos(ae),te=Math.sin(ue),Z=Math.cos(ue);return O[0]=le*z*Z-N*w*te,O[1]=N*w*Z+le*z*te,O[2]=N*z*te-le*w*Z,O[3]=N*z*Z+le*w*te,O}function de(O){return"quat("+O[0]+", "+O[1]+", "+O[2]+", "+O[3]+")"}a.clone=v.clone,a.fromValues=v.fromValues,a.copy=v.copy,a.set=v.set,a.add=v.add,a.mul=R,a.scale=v.scale,a.dot=v.dot,a.lerp=v.lerp;var fe=a.length=v.length;a.len=fe;var pe=a.squaredLength=v.squaredLength;a.sqrLen=pe;var $=a.normalize=v.normalize;a.exactEquals=v.exactEquals,a.equals=v.equals,a.rotationTo=function(){var O=f.create(),Y=f.fromValues(1,0,0),ae=f.fromValues(0,1,0);return function(ue,me,le){var N=f.dot(me,le);return N<-.999999?(f.cross(O,Y,me),f.len(O)<1e-6&&f.cross(O,ae,me),f.normalize(O,O),x(ue,O,Math.PI),ue):N>.999999?(ue[0]=0,ue[1]=0,ue[2]=0,ue[3]=1,ue):(f.cross(O,me,le),ue[0]=O[0],ue[1]=O[1],ue[2]=O[2],ue[3]=1+N,$(ue,ue))}}(),a.sqlerp=function(){var O=_(),Y=_();return function(ae,ue,me,le,N,w){return b(O,ue,N,w),b(Y,me,le,w),b(ae,O,Y,2*w*(1-w)),ae}}(),a.setAxes=function(){var O=h.create();return function(Y,ae,ue,me){return O[0]=ue[0],O[3]=ue[1],O[6]=ue[2],O[1]=me[0],O[4]=me[1],O[7]=me[2],O[2]=-ae[0],O[5]=-ae[1],O[8]=-ae[2],$(Y,q(Y,O))}}()},function(s,a,o){Object.defineProperty(a,"__esModule",{value:!0}),a.forEach=a.sqrLen=a.sqrDist=a.dist=a.div=a.mul=a.sub=a.len=void 0,a.create=h,a.clone=d,a.fromValues=f,a.copy=m,a.set=v,a.add=g,a.subtract=_,a.multiply=F,a.divide=x,a.ceil=y,a.floor=R,a.min=L,a.max=G,a.round=M,a.scale=E,a.scaleAndAdd=b,a.distance=I,a.squaredDistance=H,a.length=q,a.squaredLength=ee,a.negate=de,a.inverse=fe,a.normalize=pe,a.dot=$,a.cross=O,a.lerp=Y,a.random=ae,a.transformMat2=ue,a.transformMat2d=me,a.transformMat3=le,a.transformMat4=N,a.str=w,a.exactEquals=z,a.equals=te;var c=o(0),l=u(c);function u(Z){if(Z&&Z.__esModule)return Z;var ne={};if(Z!=null)for(var he in Z)Object.prototype.hasOwnProperty.call(Z,he)&&(ne[he]=Z[he]);return ne.default=Z,ne}function h(){var Z=new l.ARRAY_TYPE(2);return Z[0]=0,Z[1]=0,Z}function d(Z){var ne=new l.ARRAY_TYPE(2);return ne[0]=Z[0],ne[1]=Z[1],ne}function f(Z,ne){var he=new l.ARRAY_TYPE(2);return he[0]=Z,he[1]=ne,he}function m(Z,ne){return Z[0]=ne[0],Z[1]=ne[1],Z}function v(Z,ne,he){return Z[0]=ne,Z[1]=he,Z}function g(Z,ne,he){return Z[0]=ne[0]+he[0],Z[1]=ne[1]+he[1],Z}function _(Z,ne,he){return Z[0]=ne[0]-he[0],Z[1]=ne[1]-he[1],Z}function F(Z,ne,he){return Z[0]=ne[0]*he[0],Z[1]=ne[1]*he[1],Z}function x(Z,ne,he){return Z[0]=ne[0]/he[0],Z[1]=ne[1]/he[1],Z}function y(Z,ne){return Z[0]=Math.ceil(ne[0]),Z[1]=Math.ceil(ne[1]),Z}function R(Z,ne){return Z[0]=Math.floor(ne[0]),Z[1]=Math.floor(ne[1]),Z}function L(Z,ne,he){return Z[0]=Math.min(ne[0],he[0]),Z[1]=Math.min(ne[1],he[1]),Z}function G(Z,ne,he){return Z[0]=Math.max(ne[0],he[0]),Z[1]=Math.max(ne[1],he[1]),Z}function M(Z,ne){return Z[0]=Math.round(ne[0]),Z[1]=Math.round(ne[1]),Z}function E(Z,ne,he){return Z[0]=ne[0]*he,Z[1]=ne[1]*he,Z}function b(Z,ne,he,j){return Z[0]=ne[0]+he[0]*j,Z[1]=ne[1]+he[1]*j,Z}function I(Z,ne){var he=ne[0]-Z[0],j=ne[1]-Z[1];return Math.sqrt(he*he+j*j)}function H(Z,ne){var he=ne[0]-Z[0],j=ne[1]-Z[1];return he*he+j*j}function q(Z){var ne=Z[0],he=Z[1];return Math.sqrt(ne*ne+he*he)}function ee(Z){var ne=Z[0],he=Z[1];return ne*ne+he*he}function de(Z,ne){return Z[0]=-ne[0],Z[1]=-ne[1],Z}function fe(Z,ne){return Z[0]=1/ne[0],Z[1]=1/ne[1],Z}function pe(Z,ne){var he=ne[0],j=ne[1],Le=he*he+j*j;return Le>0&&(Le=1/Math.sqrt(Le),Z[0]=ne[0]*Le,Z[1]=ne[1]*Le),Z}function $(Z,ne){return Z[0]*ne[0]+Z[1]*ne[1]}function O(Z,ne,he){var j=ne[0]*he[1]-ne[1]*he[0];return Z[0]=Z[1]=0,Z[2]=j,Z}function Y(Z,ne,he,j){var Le=ne[0],K=ne[1];return Z[0]=Le+j*(he[0]-Le),Z[1]=K+j*(he[1]-K),Z}function ae(Z,ne){ne=ne||1;var he=l.RANDOM()*2*Math.PI;return Z[0]=Math.cos(he)*ne,Z[1]=Math.sin(he)*ne,Z}function ue(Z,ne,he){var j=ne[0],Le=ne[1];return Z[0]=he[0]*j+he[2]*Le,Z[1]=he[1]*j+he[3]*Le,Z}function me(Z,ne,he){var j=ne[0],Le=ne[1];return Z[0]=he[0]*j+he[2]*Le+he[4],Z[1]=he[1]*j+he[3]*Le+he[5],Z}function le(Z,ne,he){var j=ne[0],Le=ne[1];return Z[0]=he[0]*j+he[3]*Le+he[6],Z[1]=he[1]*j+he[4]*Le+he[7],Z}function N(Z,ne,he){var j=ne[0],Le=ne[1];return Z[0]=he[0]*j+he[4]*Le+he[12],Z[1]=he[1]*j+he[5]*Le+he[13],Z}function w(Z){return"vec2("+Z[0]+", "+Z[1]+")"}function z(Z,ne){return Z[0]===ne[0]&&Z[1]===ne[1]}function te(Z,ne){var he=Z[0],j=Z[1],Le=ne[0],K=ne[1];return Math.abs(he-Le)<=l.EPSILON*Math.max(1,Math.abs(he),Math.abs(Le))&&Math.abs(j-K)<=l.EPSILON*Math.max(1,Math.abs(j),Math.abs(K))}a.len=q,a.sub=_,a.mul=F,a.div=x,a.dist=I,a.sqrDist=H,a.sqrLen=ee,a.forEach=function(){var Z=h();return function(ne,he,j,Le,K,re){var se=void 0,Ce=void 0;for(he||(he=2),j||(j=0),Le?Ce=Math.min(Le*he+j,ne.length):Ce=ne.length,se=j;se<Ce;se+=he)Z[0]=ne[se],Z[1]=ne[se+1],K(Z,Z,re),ne[se]=Z[0],ne[se+1]=Z[1];return ne}}()}])})},{}],9:[function(t,n,r){/**
 * AUTHOR OF INITIAL JS LIBRARY
 * k-d Tree JavaScript - V 1.0
 *
 * https://github.com/ubilabs/kd-tree-javascript
 *
 * @author Mircea Pricop <pricop@ubilabs.net>, 2012
 * @author Martin Kleppe <kleppe@ubilabs.net>, 2012
 * @author Ubilabs http://ubilabs.net, 2012
 * @license MIT License <http://www.opensource.org/licenses/mit-license.php>
 */function s(c,l,u){this.obj=c,this.left=null,this.right=null,this.parent=u,this.dimension=l}function a(c,l,u){var h=this;function d(f,m,v){var g=m%u.length,_,F;return f.length===0?null:f.length===1?new s(f[0],g,v):(f.sort(function(x,y){return x[u[g]]-y[u[g]]}),_=Math.floor(f.length/2),F=new s(f[_],g,v),F.left=d(f.slice(0,_),m+1,F),F.right=d(f.slice(_+1),m+1,F),F)}this.root=d(c,0,null),this.insert=function(f){function m(F,x){if(F===null)return x;var y=u[F.dimension];return f[y]<F.obj[y]?m(F.left,F):m(F.right,F)}var v=m(this.root,null),g,_;if(v===null){this.root=new s(f,0,null);return}g=new s(f,(v.dimension+1)%u.length,v),_=u[v.dimension],f[_]<v.obj[_]?v.left=g:v.right=g},this.remove=function(f){var m;function v(_){if(_===null)return null;if(_.obj===f)return _;var F=u[_.dimension];return f[F]<_.obj[F]?v(_.left):v(_.right)}function g(_){var F,x,y;function R(G,M){var E,b,I,H,q;return G===null?null:(E=u[M],G.dimension===M?G.right!==null?R(G.right,M):G:(b=G.obj[E],I=R(G.left,M),H=R(G.right,M),q=G,I!==null&&I.obj[E]>b&&(q=I),H!==null&&H.obj[E]>q.obj[E]&&(q=H),q))}function L(G,M){var E,b,I,H,q;return G===null?null:(E=u[M],G.dimension===M?G.left!==null?L(G.left,M):G:(b=G.obj[E],I=L(G.left,M),H=L(G.right,M),q=G,I!==null&&I.obj[E]<b&&(q=I),H!==null&&H.obj[E]<q.obj[E]&&(q=H),q))}if(_.left===null&&_.right===null){if(_.parent===null){h.root=null;return}y=u[_.parent.dimension],_.obj[y]<_.parent.obj[y]?_.parent.left=null:_.parent.right=null;return}_.left!==null?F=R(_.left,_.dimension):F=L(_.right,_.dimension),x=F.obj,g(F),_.obj=x}m=v(h.root),m!==null&&g(m)},this.nearest=function(f,m,v){var g,_,F;F=new o(function(y){return-y[1]});function x(y){if(!h.root)return[];var R,L=u[y.dimension],G=l(f,y.obj),M={},E,b,I;function H(q,ee){F.push([q,ee]),F.size()>m&&F.pop()}for(I=0;I<u.length;I+=1)I===y.dimension?M[u[I]]=f[u[I]]:M[u[I]]=y.obj[u[I]];if(E=l(M,y.obj),y.right===null&&y.left===null){(F.size()<m||G<F.peek()[1])&&H(y,G);return}y.right===null?R=y.left:y.left===null?R=y.right:f[L]<y.obj[L]?R=y.left:R=y.right,x(R),(F.size()<m||G<F.peek()[1])&&H(y,G),(F.size()<m||Math.abs(E)<F.peek()[1])&&(R===y.left?b=y.right:b=y.left,b!==null&&x(b))}if(v)for(g=0;g<m;g+=1)F.push([null,v]);for(x(h.root),_=[],g=0;g<m&&g<F.content.length;g+=1)F.content[g][0]&&_.push([F.content[g][0].obj,F.content[g][1]]);return _},this.balanceFactor=function(){function f(v){return v===null?0:Math.max(f(v.left),f(v.right))+1}function m(v){return v===null?0:m(v.left)+m(v.right)+1}return f(h.root)/(Math.log(m(h.root))/Math.log(2))}}function o(c){this.content=[],this.scoreFunction=c}o.prototype={push:function(c){this.content.push(c),this.bubbleUp(this.content.length-1)},pop:function(){var c=this.content[0],l=this.content.pop();return this.content.length>0&&(this.content[0]=l,this.sinkDown(0)),c},peek:function(){return this.content[0]},remove:function(c){for(var l=this.content.length,u=0;u<l;u++)if(this.content[u]==c){var h=this.content.pop();u!=l-1&&(this.content[u]=h,this.scoreFunction(h)<this.scoreFunction(c)?this.bubbleUp(u):this.sinkDown(u));return}throw new Error("Node not found.")},size:function(){return this.content.length},bubbleUp:function(c){for(var l=this.content[c];c>0;){var u=Math.floor((c+1)/2)-1,h=this.content[u];if(this.scoreFunction(l)<this.scoreFunction(h))this.content[u]=l,this.content[c]=h,c=u;else break}},sinkDown:function(c){for(var l=this.content.length,u=this.content[c],h=this.scoreFunction(u);;){var d=(c+1)*2,f=d-1,m=null;if(f<l){var v=this.content[f],g=this.scoreFunction(v);g<h&&(m=f)}if(d<l){var _=this.content[d],F=this.scoreFunction(_);F<(m==null?h:g)&&(m=d)}if(m!=null)this.content[c]=this.content[m],this.content[m]=u,c=m;else break}}},n.exports={createKdTree:function(c,l,u){return new a(c,l,u)}}},{}],10:[function(t,n,r){n.exports={name:"serve-sofa-hrir",exports:"serveSofaHrir",version:"0.4.2",description:"Utility to fetch and shape sofa formated HRIR from server",main:"./dist/",standalone:"serveSofaHrir",scripts:{lint:"eslint ./src/ ./test/ && jscs --verbose ./src/ ./test/","lint-examples":"eslint -c examples/.eslintrc ./examples/*.html",compile:"rm -rf ./dist && babel ./src/ --out-dir ./dist/",browserify:"browserify ./src/index.js -t [ babelify ] --standalone serveSofaHrir > serveSofaHrir.js",bundle:"npm run lint && npm run test && npm run doc && npm run compile && npm run browserify",doc:"esdoc -c esdoc.json",test:"browserify test/*/*.js -t [ babelify ] --exclude 'test/*/*_listen.js*' --exclude 'test/*/*_issues.js' | tape-run","test-browser":"browserify test/*/*.js -t [ babelify ] --exclude 'test/*/*_listen.js*' --exclude 'test/*/*_issues.js' | testling -u","test-listen":"browserify test/*/*_listen.js -t [ babelify ] | tape-run","test-issues":"browserify test/*/*_issues.js -t [ babelify ] | tape-run",watch:"watch 'npm run browserify && echo $( date ): browserified' ./src/"},authors:["Jean-Philippe.Lambert@ircam.fr","Arnau Julià <arnau.julia@gmail.com>","Samuel.Goldszmidt@ircam.fr","David.Poirier-Quinot@ircam.fr"],license:"BSD-3-Clause",dependencies:{"fractional-delay":"git://github.com/Ircam-RnD/fractional-delay#gh-pages","gl-matrix":"^2.4.0","kd.tree":"akshaylive/node-kdt#39bc780704a324393bca68a17cf7bc71be8544c6"},repository:{type:"git",url:"https://github.com/Ircam-RnD/serveSofaHrir"},engines:{node:"0.12 || 4",npm:">=1.0.0 <3.0.0"},devDependencies:{"babel-cli":"^6.5.1","babel-eslint":"^4.1.8","babel-preset-es2015":"^6.5.0",babelify:"^7.2.0","blue-tape":"^0.1.11",browserify:"^12.0.2",esdoc:"^0.4.6",eslint:"^1.10.3","eslint-config-airbnb":"^1.0.2","eslint-plugin-html":"^1.4.0",jscs:"2.11.0","jscs-jsdoc":"^1.3.1",tape:"^4.4.0","tape-run":"^2.1.2",testling:"^1.7.1",watch:"^0.17.1"}}},{}],11:[function(t,n,r){Object.defineProperty(r,"__esModule",{value:!0}),r.resampleFloat32Array=c;var s=t("fractional-delay"),a=o(s);function o(l){return l&&l.__esModule?l:{default:l}}function c(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},u=new Promise(function(h,d){var f=l.inputSamples,m=l.inputSampleRate,v=typeof l.inputDelay<"u"?l.inputDelay:0,g=typeof l.outputSampleRate<"u"?l.outputSampleRate:m;if(m===g&&v===0)h(new Float32Array(f));else try{var _=Math.ceil(f.length*g/m),F=new window.OfflineAudioContext(1,_,g),x=F.createBuffer(1,f.length,m),y=1,R=new a.default(m,y);R.setDelay(v/m),x.getChannelData(0).set(R.process(f));var L=F.createBufferSource();L.buffer=x,L.connect(F.destination),L.start(),F.oncomplete=function(G){var M=G.renderedBuffer.getChannelData(0);h(M)},F.startRendering()}catch(G){d(new Error("Unable to re-sample Float32Array. "+G.message))}});return u}/**
 * @fileOverview Audio utilities
 * @author Jean-Philippe.Lambert@ircam.fr
 * @copyright 2016 IRCAM, Paris, France
 * @license BSD-3-Clause
 */r.default={resampleFloat32Array:c}},{"fractional-delay":7}],12:[function(t,n,r){Object.defineProperty(r,"__esModule",{value:!0}),r.tree=void 0,r.distanceSquared=c,r.distance=l;var s=t("kd.tree"),a=o(s);function o(u){return u&&u.__esModule?u:{default:u}}r.tree=a.default;/**
 * @fileOverview Helpers for k-d tree.
 * @author Jean-Philippe.Lambert@ircam.fr
 * @copyright 2015-2016 IRCAM, Paris, France
 * @license BSD-3-Clause
 */function c(u,h){var d=h.x-u.x,f=h.y-u.y,m=h.z-u.z;return d*d+f*f+m*m}function l(u,h){return Math.sqrt(this.distanceSquared(u,h))}r.default={distance:l,distanceSquared:c,tree:a.default}},{"kd.tree":9}],13:[function(t,n,r){Object.defineProperty(r,"__esModule",{value:!0}),r.sofaCartesianToGl=c,r.glToSofaCartesian=l,r.sofaCartesianToSofaSpherical=u,r.sofaSphericalToSofaCartesian=h,r.sofaSphericalToGl=d,r.glToSofaSpherical=f,r.sofaToSofaCartesian=m,r.spat4CartesianToGl=v,r.glToSpat4Cartesian=g,r.spat4CartesianToSpat4Spherical=_,r.spat4SphericalToSpat4Cartesian=F,r.spat4SphericalToGl=x,r.glToSpat4Spherical=y,r.systemType=R,r.systemToGl=L,r.glToSystem=G;var s=t("./degree"),a=o(s);function o(M){return M&&M.__esModule?M:{default:M}}function c(M,E){var b=E[0],I=E[1],H=E[2];return M[0]=0-I,M[1]=H,M[2]=0-b,M}/**
 * @fileOverview Coordinate systems conversions. openGL, SOFA, and Spat4 (Ircam).
 *
 * @author Jean-Philippe.Lambert@ircam.fr
 * @copyright 2015-2016 IRCAM, Paris, France
 * @license BSD-3-Clause
 */function l(M,E){var b=E[0],I=E[1],H=E[2];return M[0]=0-H,M[1]=0-b,M[2]=I,M}function u(M,E){var b=E[0],I=E[1],H=E[2],q=b*b+I*I;return M[0]=(a.default.atan2(I,b)+360)%360,M[1]=a.default.atan2(H,Math.sqrt(q)),M[2]=Math.sqrt(q+H*H),M}function h(M,E){var b=E[0],I=E[1],H=E[2],q=a.default.cos(I);return M[0]=H*q*a.default.cos(b),M[1]=H*q*a.default.sin(b),M[2]=H*a.default.sin(I),M}function d(M,E){var b=E[0],I=E[1],H=E[2],q=a.default.cos(I);return M[0]=0-H*q*a.default.sin(b),M[1]=H*a.default.sin(I),M[2]=0-H*q*a.default.cos(b),M}function f(M,E){var b=0-E[2],I=0-E[0],H=E[1],q=b*b+I*I;return M[0]=(a.default.atan2(I,b)+360)%360,M[1]=a.default.atan2(H,Math.sqrt(q)),M[2]=Math.sqrt(q+H*H),M}function m(M,E,b){switch(b){case"sofaCartesian":M[0]=E[0],M[1]=E[1],M[2]=E[2];break;case"sofaSpherical":h(M,E);break;default:throw new Error("Bad coordinate system")}return M}function v(M,E){var b=E[0],I=E[1],H=E[2];return M[0]=b,M[1]=H,M[2]=0-I,M}function g(M,E){var b=E[0],I=E[1],H=E[2];return M[0]=b,M[1]=0-H,M[2]=I,M}function _(M,E){var b=E[0],I=E[1],H=E[2],q=b*b+I*I;return M[0]=a.default.atan2(b,I),M[1]=a.default.atan2(H,Math.sqrt(q)),M[2]=Math.sqrt(q+H*H),M}function F(M,E){var b=E[0],I=E[1],H=E[2],q=a.default.cos(I);return M[0]=H*q*a.default.sin(b),M[1]=H*q*a.default.cos(b),M[2]=H*a.default.sin(I),M}function x(M,E){var b=E[0],I=E[1],H=E[2],q=a.default.cos(I);return M[0]=H*q*a.default.sin(b),M[1]=H*a.default.sin(I),M[2]=0-H*q*a.default.cos(b),M}function y(M,E){var b=E[0],I=0-E[2],H=E[1],q=b*b+I*I;return M[0]=a.default.atan2(b,I),M[1]=a.default.atan2(H,Math.sqrt(q)),M[2]=Math.sqrt(q+H*H),M}function R(M){var E=void 0;if(M==="sofaCartesian"||M==="spat4Cartesian"||M==="gl")E="cartesian";else if(M==="sofaSpherical"||M==="spat4Spherical")E="spherical";else throw new Error("Unknown coordinate system type "+M);return E}function L(M,E,b){switch(b){case"gl":M[0]=E[0],M[1]=E[1],M[2]=E[2];break;case"sofaCartesian":c(M,E);break;case"sofaSpherical":d(M,E);break;case"spat4Cartesian":v(M,E);break;case"spat4Spherical":x(M,E);break;default:throw new Error("Bad coordinate system")}return M}function G(M,E,b){switch(b){case"gl":M[0]=E[0],M[1]=E[1],M[2]=E[2];break;case"sofaCartesian":l(M,E);break;case"sofaSpherical":f(M,E);break;case"spat4Cartesian":g(M,E);break;case"spat4Spherical":y(M,E);break;default:throw new Error("Bad coordinate system")}return M}r.default={glToSofaCartesian:l,glToSofaSpherical:f,glToSpat4Cartesian:g,glToSpat4Spherical:y,glToSystem:G,sofaCartesianToGl:c,sofaCartesianToSofaSpherical:u,sofaSphericalToGl:d,sofaSphericalToSofaCartesian:h,sofaToSofaCartesian:m,spat4CartesianToGl:v,spat4CartesianToSpat4Spherical:_,spat4SphericalToGl:x,spat4SphericalToSpat4Cartesian:F,systemToGl:L,systemType:R}},{"./degree":14}],14:[function(t,n,r){Object.defineProperty(r,"__esModule",{value:!0}),r.toRadian=o,r.fromRadian=c,r.cos=l,r.sin=u,r.atan2=h;/**
 * @fileOverview Convert to and from degree
 * @author Jean-Philippe.Lambert@ircam.fr
 * @copyright 2015-2016 IRCAM, Paris, France
 * @license BSD-3-Clause
 */var s=r.toRadianFactor=Math.PI/180,a=r.fromRadianFactor=1/s;function o(d){return d*s}function c(d){return d*a}function l(d){return Math.cos(d*s)}function u(d){return Math.sin(d*s)}function h(d,f){return Math.atan2(d,f)*a}r.default={atan2:h,cos:l,fromRadian:c,fromRadianFactor:a,sin:u,toRadian:o,toRadianFactor:s}},{}],15:[function(t,n,r){Object.defineProperty(r,"__esModule",{value:!0}),r.ServerDataBase=r.HrtfSet=void 0;var s=t("./sofa/HrtfSet"),a=l(s),o=t("./sofa/ServerDataBase"),c=l(o);function l(u){return u&&u.__esModule?u:{default:u}}r.HrtfSet=a.default,r.ServerDataBase=c.default,r.default={HrtfSet:a.default,ServerDataBase:c.default}},{"./sofa/HrtfSet":17,"./sofa/ServerDataBase":18}],16:[function(t,n,r){Object.defineProperty(r,"__esModule",{value:!0}),r.version=r.name=r.license=r.description=void 0;var s=t("../package.json"),a=o(s);function o(d){return d&&d.__esModule?d:{default:d}}var c=a.default.description;/**
 * @fileOverview Information on the library, from the `package.json` file.
 *
 * @author Jean-Philippe.Lambert@ircam.fr
 * @copyright 2016 IRCAM, Paris, France
 * @license BSD-3-Clause
 */r.description=c;var l=a.default.license;r.license=l;var u=a.default.name;r.name=u;var h=a.default.version;r.version=h,r.default={description:c,license:l,name:u,version:h}},{"../package.json":10}],17:[function(t,n,r){Object.defineProperty(r,"__esModule",{value:!0}),r.HrtfSet=void 0;var s=function(){function L(G,M){for(var E=0;E<M.length;E++){var b=M[E];b.enumerable=b.enumerable||!1,b.configurable=!0,"value"in b&&(b.writable=!0),Object.defineProperty(G,b.key,b)}}return function(G,M,E){return M&&L(G.prototype,M),E&&L(G,E),G}}();/**
 * @fileOverview Container for HRTF set: load a set from an URL and get
 * filters from corresponding positions.
 *
 * @author Jean-Philippe.Lambert@ircam.fr
 * @copyright 2015-2016 IRCAM, Paris, France
 * @license BSD-3-Clause
 */var a=t("gl-matrix"),o=F(a),c=t("../info"),l=_(c),u=t("./parseDataSet"),h=t("./parseSofa"),d=t("../geometry/coordinates"),f=_(d),m=t("../geometry/KdTree"),v=_(m),g=t("../audio/utilities");function _(L){return L&&L.__esModule?L:{default:L}}function F(L){if(L&&L.__esModule)return L;var G={};if(L!=null)for(var M in L)Object.prototype.hasOwnProperty.call(L,M)&&(G[M]=L[M]);return G.default=L,G}function x(L){if(Array.isArray(L)){for(var G=0,M=Array(L.length);G<L.length;G++)M[G]=L[G];return M}else return Array.from(L)}function y(L,G){if(!(L instanceof G))throw new TypeError("Cannot call a class as a function")}var R=r.HrtfSet=function(){function L(){var G=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};y(this,L),this._audioContext=G.audioContext,this._ready=!1,this.coordinateSystem=G.coordinateSystem,this.filterCoordinateSystem=G.filterCoordinateSystem,this.filterPositions=G.filterPositions,this.filterAfterLoad=G.filterAfterLoad}return s(L,[{key:"applyFilterPositions",value:function(){var M=this,E=this._filterPositions.map(function(b){return M._kdt.nearest({x:b[0],y:b[1],z:b[2]},1).pop()[0]});E=[].concat(x(new Set(E))),this._kdt=v.default.tree.createKdTree(E,v.default.distanceSquared,["x","y","z"])}},{key:"load",value:function(M){var E=this,b=M.split(".").pop(),I=b==="sofa"?M+".json":M,H=void 0,q=typeof this._filterPositions<"u"&&!this.filterAfterLoad&&b==="sofa";return q?H=Promise.all([this._loadMetaAndPositions(M),this._loadDataSet(M)]).then(function(ee){var de=ee[0],fe=ee[1];return E._loadSofaPartial(M,de,fe).then(function(){return E._ready=!0,E})}).catch(function(){return E._loadSofaFull(I).then(function(){return E.applyFilterPositions(),E._ready=!0,E})}):H=this._loadSofaFull(I).then(function(){return typeof E._filterPositions<"u"&&E.filterAfterLoad&&E.applyFilterPositions(),E._ready=!0,E}),H}},{key:"export",value:function(){var M=this,E=void 0,b=f.default.systemType(this.filterCoordinateSystem);switch(b){case"cartesian":E=this._sofaSourcePosition.map(function(H){return f.default.glToSofaCartesian([],H)});break;case"spherical":E=this._sofaSourcePosition.map(function(H){return f.default.glToSofaSpherical([],H)});break;default:throw new Error("Bad source position type "+b+" for export.")}var I=this._sofaSourcePosition.map(function(H){for(var q=M._kdt.nearest({x:H[0],y:H[1],z:H[2]},1).pop()[0].fir,ee=[],de=0;de<q.numberOfChannels;++de)ee.push([].concat(x(q.getChannelData(de))));return ee});return(0,h.stringifySofa)({name:this._sofaName,metaData:this._sofaMetaData,ListenerPosition:[0,0,0],ListenerPositionType:"cartesian",ListenerUp:[0,0,1],ListenerUpType:"cartesian",ListenerView:[1,0,0],ListenerViewType:"cartesian",SourcePositionType:b,SourcePosition:E,DataSamplingRate:this._audioContext.sampleRate,DataDelay:this._sofaDelay,DataIR:I,RoomVolume:this._sofaRoomVolume})}},{key:"nearest",value:function(M){var E=f.default.systemToGl([],M,this.coordinateSystem),b=this._kdt.nearest({x:E[0],y:E[1],z:E[2]},1).pop(),I=b[0];return f.default.glToSystem(E,[I.x,I.y,I.z],this.coordinateSystem),{distance:b[1],fir:I.fir,index:I.index,position:E}}},{key:"nearestFir",value:function(M){return this.nearest(M).fir}},{key:"_createKdTree",value:function(M){var E=this,b=M.map(function(I){var H=I[2],q=E._audioContext.createBuffer(H.length,H[0].length,E._audioContext.sampleRate);return H.forEach(function(ee,de){q.getChannelData(de).set(ee)}),{index:I[0],x:I[1][0],y:I[1][1],z:I[1][2],fir:q}});return this._sofaSourcePosition=b.map(function(I){return[I.x,I.y,I.z]}),this._kdt=v.default.tree.createKdTree(b,v.default.distanceSquared,["x","y","z"]),this}},{key:"_generateIndicesPositionsFirs",value:function(M,E,b,I){var H=this,q=b.map(function(ee,de){var fe=ee.length;if(fe!==2)throw new Error("Bad number of channels"+(" for IR index "+M[de])+(" ("+fe+" instead of 2)"));if(I[0].length!==2)throw new Error("Bad delay format"+(" for IR index "+M[de])+(" (first element in Data.Delay is "+I[0])+" instead of [[delayL, delayR]] )");var pe=typeof I[de]<"u"?I[de]:I[0],$=ee.map(function(O,Y){if(pe[Y]<0)throw new Error("Negative delay detected (not handled at the moment):"+(" delay index "+M[de])+(" channel "+Y));return(0,g.resampleFloat32Array)({inputSamples:O,inputDelay:pe[Y],inputSampleRate:H._sofaSampleRate,outputSampleRate:H._audioContext.sampleRate})});return Promise.all($).then(function(O){return[M[de],E[de],O]}).catch(function(O){throw new Error("Unable to re-sample impulse response "+de+". "+O.message)})});return Promise.all(q)}},{key:"_loadDataSet",value:function(M){var E=new Promise(function(b,I){var H=M+".dds",q=new window.XMLHttpRequest;q.open("GET",H),q.onerror=function(){I(new Error("Unable to GET "+H+", status "+q.status+" "+(""+q.responseText)))},q.onload=function(){if(q.status<200||q.status>=300){q.onerror();return}try{var ee=(0,u.parseDataSet)(q.response);b(ee)}catch(de){I(new Error("Unable to parse "+H+". "+de.message))}},q.send()});return E}},{key:"_loadMetaAndPositions",value:function(M){var E=this,b=new Promise(function(I,H){var q=M+".json?ListenerPosition,ListenerUp,ListenerView,SourcePosition,Data.Delay,Data.SamplingRate,EmitterPosition,ReceiverPosition,RoomVolume",ee=new window.XMLHttpRequest;ee.open("GET",q),ee.onerror=function(){H(new Error("Unable to GET "+q+", status "+ee.status+" "+(""+ee.responseText)))},ee.onload=function(){if(ee.status<200||ee.status>=300){ee.onerror();return}try{var de=(0,h.parseSofa)(ee.response);E._setMetaData(de,M);var fe=E._sourcePositionsToGl(de),pe=fe.map(function(Y,ae){return{x:Y[0],y:Y[1],z:Y[2],index:ae}}),$=v.default.tree.createKdTree(pe,v.default.distanceSquared,["x","y","z"]),O=E._filterPositions.map(function(Y){return $.nearest({x:Y[0],y:Y[1],z:Y[2]},1).pop()[0].index});O=[].concat(x(new Set(O))),E._sofaUrl=M,I(O)}catch(Y){H(new Error("Unable to parse "+q+". "+Y.message))}},ee.send()});return b}},{key:"_loadSofaFull",value:function(M){var E=this,b=new Promise(function(I,H){var q=new window.XMLHttpRequest;q.open("GET",M),q.onerror=function(){H(new Error("Unable to GET "+M+", status "+q.status+" "+(""+q.responseText)))},q.onload=function(){if(q.status<200||q.status>=300){q.onerror();return}try{var ee=(0,h.parseSofa)(q.response);E._setMetaData(ee,M);var de=E._sourcePositionsToGl(ee);E._generateIndicesPositionsFirs(de.map(function(fe,pe){return pe}),de,ee["Data.IR"].data,ee["Data.Delay"].data).then(function(fe){E._createKdTree(fe),E._sofaUrl=M,I(E)})}catch(fe){H(new Error("Unable to parse "+M+". "+fe.message))}},q.send()});return b}},{key:"_loadSofaPartial",value:function(M,E,b){var I=this,H=E.map(function(q){var ee=new Promise(function(de,fe){var pe=M+".json?"+("SourcePosition["+q+"][0:1:"+(b.SourcePosition.C-1)+"],")+("Data.IR["+q+"][0:1:"+(b["Data.IR"].R-1)+"]")+("[0:1:"+(b["Data.IR"].N-1)+"]"),$=new window.XMLHttpRequest;$.open("GET",pe),$.onerror=function(){fe(new Error("Unable to GET "+pe+", status "+$.status+" "+(""+$.responseText)))},$.onload=function(){($.status<200||$.status>=300)&&$.onerror();try{var O=(0,h.parseSofa)($.response),Y=I._sourcePositionsToGl(O);I._generateIndicesPositionsFirs([q],Y,O["Data.IR"].data,O["Data.Delay"].data).then(function(ae){de(ae[0])})}catch(ae){fe(new Error("Unable to parse "+pe+". "+ae.message))}},$.send()});return ee});return Promise.all(H).then(function(q){return I._createKdTree(q),I})}},{key:"_setMetaData",value:function(M,E){if(typeof M.metaData.DataType<"u"&&M.metaData.DataType!=="FIR")throw new Error("According to meta-data, SOFA data type is not FIR");var b=new Date().toISOString();this._sofaName=typeof M.name<"u"?""+M.name:"HRTF.sofa",this._sofaMetaData=typeof M.metaData<"u"?M.metaData:{},typeof E<"u"&&(this._sofaMetaData.OriginalUrl=E),this._sofaMetaData.Converter="Ircam "+l.default.name+" "+l.default.version+" javascript API ",this._sofaMetaData.DateConverted=b,this._sofaSampleRate=typeof M["Data.SamplingRate"]<"u"?M["Data.SamplingRate"].data[0]:48e3,this._sofaSampleRate!==this._audioContext.sampleRate&&(this._sofaMetaData.OriginalSampleRate=this._sofaSampleRate),this._sofaDelay=typeof M["Data.Delay"]<"u"?M["Data.Delay"].data:[0,0],this._sofaRoomVolume=typeof M.RoomVolume<"u"?M.RoomVolume.data[0]:void 0;var I=f.default.sofaToSofaCartesian([],M.ListenerPosition.data[0],(0,h.conformSofaCoordinateSystem)(M.ListenerPosition.Type||"cartesian")),H=f.default.sofaToSofaCartesian([],M.ListenerView.data[0],(0,h.conformSofaCoordinateSystem)(M.ListenerView.Type||"cartesian")),q=f.default.sofaToSofaCartesian([],M.ListenerUp.data[0],(0,h.conformSofaCoordinateSystem)(M.ListenerUp.Type||"cartesian"));this._sofaToGl=o.mat4.lookAt([],I,H,q)}},{key:"_sourcePositionsToGl",value:function(M){var E=this,b=M.SourcePosition.data,I=typeof M.SourcePosition.Type<"u"?M.SourcePosition.Type:"spherical";switch(I){case"cartesian":b.forEach(function(H){o.vec3.transformMat4(H,H,E._sofaToGl)});break;case"spherical":b.forEach(function(H){f.default.sofaSphericalToSofaCartesian(H,H),o.vec3.transformMat4(H,H,E._sofaToGl)});break;default:throw new Error("Bad source position type")}return b}},{key:"coordinateSystem",set:function(M){this._coordinateSystem=typeof M<"u"?M:"gl"},get:function(){return this._coordinateSystem}},{key:"filterCoordinateSystem",set:function(M){this._filterCoordinateSystem=typeof M<"u"?M:this.coordinateSystem},get:function(){return this._filterCoordinateSystem}},{key:"filterPositions",set:function(M){if(typeof M>"u")this._filterPositions=void 0;else switch(this.filterCoordinateSystem){case"gl":this._filterPositions=M.map(function(E){return E.slice(0)});break;case"sofaCartesian":this._filterPositions=M.map(function(E){return f.default.sofaCartesianToGl([],E)});break;case"sofaSpherical":this._filterPositions=M.map(function(E){return f.default.sofaSphericalToGl([],E)});break;default:throw new Error("Bad filter coordinate system")}},get:function(){var M=void 0;if(typeof this._filterPositions<"u")switch(this.filterCoordinateSystem){case"gl":M=this._filterPositions.map(function(E){return E.slice(0)});break;case"sofaCartesian":M=this._filterPositions.map(function(E){return f.default.glToSofaCartesian([],E)});break;case"sofaSpherical":M=this._filterPositions.map(function(E){return f.default.glToSofaSpherical([],E)});break;default:throw new Error("Bad filter coordinate system")}return M}},{key:"filterAfterLoad",set:function(M){this._filterAfterLoad=typeof M<"u"?M:!1},get:function(){return this._filterAfterLoad}},{key:"isReady",get:function(){return this._ready}},{key:"sofaName",get:function(){return this._sofaName}},{key:"sofaUrl",get:function(){return this._sofaUrl}},{key:"sofaSampleRate",get:function(){return this._sofaSampleRate}},{key:"sofaMetaData",get:function(){return this._sofaMetaData}}]),L}();r.default=R},{"../audio/utilities":11,"../geometry/KdTree":12,"../geometry/coordinates":13,"../info":16,"./parseDataSet":19,"./parseSofa":20,"gl-matrix":8}],18:[function(t,n,r){Object.defineProperty(r,"__esModule",{value:!0}),r.ServerDataBase=void 0;var s=function(){function d(f,m){for(var v=0;v<m.length;v++){var g=m[v];g.enumerable=g.enumerable||!1,g.configurable=!0,"value"in g&&(g.writable=!0),Object.defineProperty(f,g.key,g)}}return function(f,m,v){return m&&d(f.prototype,m),v&&d(f,v),f}}();/**
 * @fileOverview Access a remote catalogue from a SOFA server, and get URLs
 * with filtering.
 *
 * @author Jean-Philippe.Lambert@ircam.fr
 * @copyright 2015-2016 IRCAM, Paris, France
 * @license BSD-3-Clause
 */var a=t("./parseXml"),o=l(a),c=t("./parseDataSet");function l(d){return d&&d.__esModule?d:{default:d}}function u(d,f){if(!(d instanceof f))throw new TypeError("Cannot call a class as a function")}var h=r.ServerDataBase=function(){function d(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(u(this,d),this._server=f.serverUrl,typeof this._server>"u"){var m=window.location.protocol==="https:"?"https:":"http:";this._server=m+"//bili2.ircam.fr"}this._catalogue={},this._urls=[]}return s(d,[{key:"loadCatalogue",value:function(){var m=this,v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this._server+"/catalog.xml",g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this._catalogue,_=new Promise(function(F,x){var y=new window.XMLHttpRequest;y.open("GET",v),y.onerror=function(){x(new Error("Unable to GET "+v+", status "+y.status+" "+(""+y.responseText)))},y.onload=function(){if(y.status<200||y.status>=300){y.onerror();return}var R=(0,o.default)(y.response),L=R.querySelector("dataset"),G=R.querySelectorAll("dataset > catalogRef");if(G.length===0){g.urls=[];for(var M=R.querySelectorAll("dataset > dataset"),E=0;E<M.length;++E){var b=m._server+L.getAttribute("name")+"/"+M[E].getAttribute("name");m._urls.push(b),g.urls.push(b)}F(v)}else{for(var I=[],H=0;H<G.length;++H){var q=G[H].getAttribute("name"),ee=m._server+L.getAttribute("name")+"/"+G[H].getAttribute("xlink:href");g[q]={},I.push(m.loadCatalogue(ee,g[q]))}Promise.all(I).then(function(){m._urls.sort(),F(v)}).catch(function(de){x(de)})}},y.send()});return _}},{key:"getUrls",value:function(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},v=[m.convention,m.dataBase,m.equalisation,m.sampleRate,m.sosOrder],g=typeof m.freePattern=="number"?m.freePattern.toString():m.freePattern,_=v.reduce(function(R,L){return R+"/"+(typeof L<"u"?"[^/]*(?:"+L+")[^/]*":"[^/]*")},""),F=new RegExp(_,"i"),x=this._urls.filter(function(R){return F.test(R)});if(typeof g<"u"){var y=g.split(/\s+/);y.forEach(function(R){F=new RegExp(R,"i"),x=x.filter(function(L){return F.test(L)})})}return x}},{key:"getDataSetDefinitions",value:function(m){var v=new Promise(function(g,_){var F=m+".dds",x=new window.XMLHttpRequest;x.open("GET",F),x.onerror=function(){_(new Error("Unable to GET "+F+", status "+x.status+" "+(""+x.responseText)))},x.onload=function(){if(x.status<200||x.status>=300){x.onerror();return}g((0,c.parseDataSet)(x.response))},x.send()});return v}},{key:"getSourcePositions",value:function(m){var v=new Promise(function(g,_){var F=m+".json?SourcePosition",x=new window.XMLHttpRequest;x.open("GET",F),x.onerror=function(){_(new Error("Unable to GET "+F+", status "+x.status+" "+(""+x.responseText)))},x.onload=function(){if(x.status<200||x.status>=300){x.onerror();return}try{var y=JSON.parse(x.response);if(y.leaves[0].name!=="SourcePosition")throw new Error("SourcePosition not found");g(y.leaves[0].data)}catch(R){_(new Error("Unable to parse response from "+F+". "+R.message))}},x.send()});return v}}]),d}();r.default=h},{"./parseDataSet":19,"./parseXml":21}],19:[function(t,n,r){Object.defineProperty(r,"__esModule",{value:!0}),r._parseDimension=f,r._parseDefinition=m,r.parseDataSet=v;/**
 * @fileOverview Parser for DDS files
 * @author Jean-Philippe.Lambert@ircam.fr
 * @copyright 2015-2016 IRCAM, Paris, France
 * @license BSD-3-Clause
 */var s="\\[\\s*(\\w+)\\s*=\\s*(\\d+)\\s*\\]",a=new RegExp(s,"g"),o=new RegExp(s),c="\\s*(\\w+)\\s*([\\w.]+)\\s*((?:\\[[^\\]]+\\]\\s*)+);\\s*",l=new RegExp(c,"g"),u=new RegExp(c),h="\\s*Dataset\\s*\\{\\s*((?:[^;]+;\\s*)*)\\s*\\}\\s*[\\w.]+\\s*;\\s*",d=new RegExp(h);function f(g){var _=[],F=g.match(a);return F!==null&&F.forEach(function(x){var y=o.exec(x);y!==null&&y.length>2&&_.push([y[1],Number(y[2])])}),_}function m(g){var _=[],F=g.match(l);return F!==null&&F.forEach(function(x){var y=u.exec(x);if(y!==null&&y.length>3){var R=[];R[0]=y[2],R[1]={},R[1].type=y[1],f(y[3]).forEach(function(L){R[1][L[0]]=L[1]}),_.push(R)}}),_}function v(g){var _={},F=d.exec(g);return F!==null&&F.length>1&&m(F[1]).forEach(function(x){_[x[0]]=x[1]}),_}r.default=v},{}],20:[function(t,n,r){Object.defineProperty(r,"__esModule",{value:!0}),r.parseSofa=s,r.stringifySofa=a,r.conformSofaCoordinateSystem=o;/**
 * @fileOverview Parser functions for SOFA files
 * @author Jean-Philippe.Lambert@ircam.fr
 * @copyright 2015 IRCAM, Paris, France
 * @license BSD-3-Clause
 */function s(c){try{var l=JSON.parse(c),u={};if(u.name=l.name,typeof l.attributes<"u"){u.metaData={};var h=l.attributes.find(function(f){return f.name==="NC_GLOBAL"});typeof h<"u"&&h.attributes.forEach(function(f){u.metaData[f.name]=f.value[0]})}if(typeof l.leaves<"u"){var d=l.leaves;d.forEach(function(f){u[f.name]={},f.attributes.forEach(function(m){u[f.name][m.name]=m.value[0]}),u[f.name].shape=f.shape,u[f.name].data=f.data})}return u}catch(f){throw new Error("Unable to parse SOFA string. "+f.message)}}function a(c){var l={};if(typeof c.name<"u"&&(l.name=c.name),typeof c.metaData<"u"){l.attributes=[];var u={name:"NC_GLOBAL",attributes:[]};for(var h in c.metaData)c.metaData.hasOwnProperty(h)&&u.attributes.push({name:h,value:[c.metaData[h]]});l.attributes.push(u)}var d="Float64",f=void 0;if(l.leaves=[],[["ListenerPosition","ListenerPositionType"],["ListenerUp","ListenerUpType"],["ListenerView","ListenerViewType"]].forEach(function(m){var v=m[0],g=c[v],_=c[m[1]];if(typeof g<"u"){switch(_){case"cartesian":f=[{name:"Type",value:["cartesian"]},{name:"Units",value:["metre, metre, metre"]}];break;case"spherical":f=[{name:"Type",value:["spherical"]},{name:"Units",value:["degree, degree, metre"]}];break;default:throw new Error("Unknown coordinate system type "+(_+" for "+g))}l.leaves.push({name:v,type:d,attributes:f,shape:[1,3],data:[g]})}}),typeof c.SourcePosition<"u"){switch(c.SourcePositionType){case"cartesian":f=[{name:"Type",value:["cartesian"]},{name:"Units",value:["metre, metre, metre"]}];break;case"spherical":f=[{name:"Type",value:["spherical"]},{name:"Units",value:["degree, degree, metre"]}];break;default:throw new Error("Unknown coordinate system type "+(""+c.SourcePositionType))}l.leaves.push({name:"SourcePosition",type:d,attributes:f,shape:[c.SourcePosition.length,c.SourcePosition[0].length],data:c.SourcePosition})}if(typeof c.DataSamplingRate<"u")l.leaves.push({name:"Data.SamplingRate",type:d,attributes:[{name:"Unit",value:"hertz"}],shape:[1],data:[c.DataSamplingRate]});else throw new Error("No data sampling-rate");if(typeof c.DataDelay<"u"&&l.leaves.push({name:"Data.Delay",type:d,attributes:[],shape:[1,c.DataDelay.length],data:c.DataDelay}),typeof c.DataIR<"u")l.leaves.push({name:"Data.IR",type:d,attributes:[],shape:[c.DataIR.length,c.DataIR[0].length,c.DataIR[0][0].length],data:c.DataIR});else throw new Error("No data IR");return typeof c.RoomVolume<"u"&&l.leaves.push({name:"RoomVolume",type:d,attributes:[{name:"Units",value:["cubic metre"]}],shape:[1],data:[c.RoomVolume]}),l.nodes=[],JSON.stringify(l)}function o(c){var l=void 0;switch(c){case"cartesian":l="sofaCartesian";break;case"spherical":l="sofaSpherical";break;default:throw new Error("Bad SOFA type "+c)}return l}r.default={parseSofa:s,conformSofaCoordinateSystem:o}},{}],21:[function(t,n,r){Object.defineProperty(r,"__esModule",{value:!0});/**
 * @fileOverview Simple XML parser, as a DOM parser.
 * @author Jean-Philippe.Lambert@ircam.fr
 * @copyright 2015-2016 IRCAM, Paris, France
 * @license BSD-3-Clause
 */var s=r.parseXml=void 0;if(typeof window.DOMParser<"u")r.parseXml=s=function(o){return new window.DOMParser().parseFromString(o,"text/xml")};else if(typeof window.ActiveXObject<"u"&&new window.ActiveXObject("Microsoft.XMLDOM"))r.parseXml=s=function(o){var c=new window.ActiveXObject("Microsoft.XMLDOM");return c.async="false",c.loadXML(o),c};else throw new Error("No XML parser found");r.default=s},{}]},{},[15])(15)})})(serveSofaHrir$1);var serveSofaHrirExports=serveSofaHrir$1.exports;Object.defineProperty(hrirLoader_ircam,"__esModule",{value:!0});var _classCallCheck2$1=classCallCheck,_classCallCheck3$1=_interopRequireDefault$1(_classCallCheck2$1),_createClass2=createClass,_createClass3=_interopRequireDefault$1(_createClass2),_serveSofaHrir=serveSofaHrirExports,serveSofaHrir=_interopRequireWildcard(_serveSofaHrir);function _interopRequireWildcard(i){if(i&&i.__esModule)return i;var e={};if(i!=null)for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t]);return e.default=i,e}function _interopRequireDefault$1(i){return i&&i.__esModule?i:{default:i}}var utils=utils$6,HRIRloader_ircam=function(){function i(e,t,n){(0,_classCallCheck3$1.default)(this,i),this.context=e,this.order=t,this.nCh=(t+1)*(t+1),this.onLoad=n,this.hrtfSet=new serveSofaHrir.HrtfSet({audioContext:this.context,coordinateSystem:"sofaSpherical"}),this.wishedSpeakerPos=utils.getTdesign(2*this.order)}return(0,_createClass3.default)(i,[{key:"load",value:function(t){var n=this;this.hrtfSet.load(t).then(function(){var r=[];n.hrirBuffer=[];for(var s=0;s<n.wishedSpeakerPos.length;s++)r.push(n.hrtfSet.nearest(n.wishedSpeakerPos[s]).position),n.hrirBuffer.push(n.hrtfSet.nearest(n.wishedSpeakerPos[s]).fir);for(var a=0,o=0;o<n.wishedSpeakerPos.length;o++)n.wishedSpeakerPos[o][0]<0&&(n.wishedSpeakerPos[o][0]+=360),a+=Math.sqrt(Math.pow(n.wishedSpeakerPos[o][0]-r[o][0],2)+Math.pow(n.wishedSpeakerPos[o][1]-r[o][1],2));console.log("summed / average angular dist between asked and present pos:",Math.round(a*100)/100,"deg /",Math.round(a/n.wishedSpeakerPos.length*100)/100,"deg"),n.decodingMatrix=utils.getAmbisonicDecMtx(r,n.order),n.hoaBuffer=n.getHoaFilterFromHrirFilter(),n.onLoad(n.hoaBuffer)})}},{key:"getHoaFilterFromHrirFilter",value:function(){for(var t=this.hrirBuffer[0].length,n=this.hrirBuffer[0].sampleRate,r=this.context.createBuffer(this.nCh,t,n),s=0;s<this.nCh;s++){for(var a=new Float32Array(t),o=0;o<this.hrirBuffer.length;o++)for(var c=0;c<t;c++)a[c]+=this.decodingMatrix[o][s]*this.hrirBuffer[o].getChannelData(0)[c];r.getChannelData(s).set(a)}return r}}]),i}();hrirLoader_ircam.default=HRIRloader_ircam;var ambiConverters={};Object.defineProperty(ambiConverters,"__esModule",{value:!0});ambiConverters.fuma2acn=ambiConverters.n3d2sn3d=ambiConverters.sn3d2n3d=ambiConverters.acn2wxyz=ambiConverters.wxyz2acn=void 0;var _classCallCheck2=classCallCheck,_classCallCheck3=_interopRequireDefault(_classCallCheck2);function _interopRequireDefault(i){return i&&i.__esModule?i:{default:i}}ambiConverters.wxyz2acn=function i(e){(0,_classCallCheck3.default)(this,i),this.ctx=e,this.in=this.ctx.createChannelSplitter(4),this.out=this.ctx.createChannelMerger(4),this.gains=new Array(4);for(var t=0;t<4;t++)this.gains[t]=this.ctx.createGain(),t==0?this.gains[t].gain.value=Math.SQRT2:this.gains[t].gain.value=Math.sqrt(3),this.gains[t].connect(this.out,0,t);this.in.connect(this.gains[0],0,0),this.in.connect(this.gains[3],1,0),this.in.connect(this.gains[1],2,0),this.in.connect(this.gains[2],3,0)};ambiConverters.acn2wxyz=function i(e){(0,_classCallCheck3.default)(this,i),this.ctx=e,this.in=this.ctx.createChannelSplitter(4),this.out=this.ctx.createChannelMerger(4),this.gains=new Array(4);for(var t=0;t<4;t++)this.gains[t]=this.ctx.createGain(),t==0?this.gains[t].gain.value=Math.SQRT1_2:this.gains[t].gain.value=1/Math.sqrt(3),this.gains[t].connect(this.out,0,t);this.in.connect(this.gains[0],0,0),this.in.connect(this.gains[2],1,0),this.in.connect(this.gains[3],2,0),this.in.connect(this.gains[1],3,0)};ambiConverters.sn3d2n3d=function i(e,t){(0,_classCallCheck3.default)(this,i),this.ctx=e,this.order=t,this.nCh=(t+1)*(t+1),this.in=this.ctx.createChannelSplitter(this.nCh),this.out=this.ctx.createChannelMerger(this.nCh),this.gains=new Array(this.nCh);for(var n=0;n<this.nCh;n++){var r=Math.floor(Math.sqrt(n));this.gains[n]=this.ctx.createGain(),this.gains[n].gain.value=Math.sqrt(2*r+1),this.in.connect(this.gains[n],n,0),this.gains[n].connect(this.out,0,n)}};ambiConverters.n3d2sn3d=function i(e,t){(0,_classCallCheck3.default)(this,i),this.ctx=e,this.order=t,this.nCh=(t+1)*(t+1),this.in=this.ctx.createChannelSplitter(this.nCh),this.out=this.ctx.createChannelMerger(this.nCh),this.gains=new Array(this.nCh);for(var n=0;n<this.nCh;n++){var r=Math.floor(Math.sqrt(n));this.gains[n]=this.ctx.createGain(),this.gains[n].gain.value=1/Math.sqrt(2*r+1),this.in.connect(this.gains[n],n,0),this.gains[n].connect(this.out,0,n)}};ambiConverters.fuma2acn=function i(e,t){(0,_classCallCheck3.default)(this,i),t>3&&(console.log("FuMa specifiction is supported up to 3rd order"),t=3);var n=[Math.sqrt(2),Math.sqrt(3),Math.sqrt(3),Math.sqrt(3),Math.sqrt(15)/2,Math.sqrt(15)/2,Math.sqrt(5),Math.sqrt(15)/2,Math.sqrt(15)/2,Math.sqrt(35/8),Math.sqrt(35)/3,Math.sqrt(224/45),Math.sqrt(7),Math.sqrt(224/45),Math.sqrt(35)/3,Math.sqrt(35/8)];if(this.ctx=e,this.order=t,this.nCh=(t+1)*(t+1),this.in=this.ctx.createChannelSplitter(this.nCh),this.out=this.ctx.createChannelMerger(this.nCh),this.gains=[],this.remapArray=[],this.remapArray.push(0,2,3,1),t>1){for(var r=0,s,a=0;a<this.nCh;a++)if(s=[],a>=(r+1)*(r+1)){r+=1;for(var o=(r+1)*(r+1);o<(r+2)*(r+2);o++)(o+r%2)%2==0?s.push(o):s.unshift(o);this.remapArray=this.remapArray.concat(s)}}for(var a=0;a<this.nCh;a++)this.gains[a]=this.ctx.createGain(),this.gains[a].gain.value=n[a],this.in.connect(this.gains[a],this.remapArray[a],0),this.gains[a].connect(this.out,0,a)};(function(i){Object.defineProperty(i,"__esModule",{value:!0}),i.utils=i.converters=i.HRIRloader_ircam=i.HRIRloader2D_local=i.HRIRloader_local=i.HOAloader=i.intensityAnalyser2D=i.intensityAnalyser=i.powermapAnalyser=i.rmsAnalyser=i.virtualMic=i.convolver=i.decoder=i.binDecoder2D=i.binDecoder=i.sceneMirror2D=i.sceneMirror=i.sceneRotator2D=i.sceneRotator=i.orderWeight=i.orderLimiter2D=i.orderLimiter=i.monoEncoder2D=i.monoEncoder=void 0;var e=ambiMonoEncoder;Object.defineProperty(i,"monoEncoder",{enumerable:!0,get:function(){return H(e).default}});var t=ambiMonoEncoder2D;Object.defineProperty(i,"monoEncoder2D",{enumerable:!0,get:function(){return H(t).default}});var n=ambiOrderLimiter;Object.defineProperty(i,"orderLimiter",{enumerable:!0,get:function(){return H(n).default}});var r=ambiOrderLimiter2D;Object.defineProperty(i,"orderLimiter2D",{enumerable:!0,get:function(){return H(r).default}});var s=ambiOrderWeight;Object.defineProperty(i,"orderWeight",{enumerable:!0,get:function(){return H(s).default}});var a=ambiSceneRotator;Object.defineProperty(i,"sceneRotator",{enumerable:!0,get:function(){return H(a).default}});var o=ambiSceneRotator2D;Object.defineProperty(i,"sceneRotator2D",{enumerable:!0,get:function(){return H(o).default}});var c=ambiSceneMirror;Object.defineProperty(i,"sceneMirror",{enumerable:!0,get:function(){return H(c).default}});var l=ambiSceneMirror2D;Object.defineProperty(i,"sceneMirror2D",{enumerable:!0,get:function(){return H(l).default}});var u=ambiBinauralDecoder;Object.defineProperty(i,"binDecoder",{enumerable:!0,get:function(){return H(u).default}});var h=ambiBinauralDecoder2D;Object.defineProperty(i,"binDecoder2D",{enumerable:!0,get:function(){return H(h).default}});var d=ambiDecoder;Object.defineProperty(i,"decoder",{enumerable:!0,get:function(){return H(d).default}});var f=ambiConvolver;Object.defineProperty(i,"convolver",{enumerable:!0,get:function(){return H(f).default}});var m=ambiVirtualMic;Object.defineProperty(i,"virtualMic",{enumerable:!0,get:function(){return H(m).default}});var v=ambiRmsAnalyser;Object.defineProperty(i,"rmsAnalyser",{enumerable:!0,get:function(){return H(v).default}});var g=ambiPowermapAnalyser;Object.defineProperty(i,"powermapAnalyser",{enumerable:!0,get:function(){return H(g).default}});var _=ambiIntensityAnalyser;Object.defineProperty(i,"intensityAnalyser",{enumerable:!0,get:function(){return H(_).default}});var F=ambiIntensityAnalyser2D;Object.defineProperty(i,"intensityAnalyser2D",{enumerable:!0,get:function(){return H(F).default}});var x=hoaLoader;Object.defineProperty(i,"HOAloader",{enumerable:!0,get:function(){return H(x).default}});var y=hrirLoader_local;Object.defineProperty(i,"HRIRloader_local",{enumerable:!0,get:function(){return H(y).default}});var R=hrirLoader2D_local;Object.defineProperty(i,"HRIRloader2D_local",{enumerable:!0,get:function(){return H(R).default}});var L=hrirLoader_ircam;Object.defineProperty(i,"HRIRloader_ircam",{enumerable:!0,get:function(){return H(L).default}});var G=ambiConverters,M=I(G),E=utils$6,b=I(E);function I(q){if(q&&q.__esModule)return q;var ee={};if(q!=null)for(var de in q)Object.prototype.hasOwnProperty.call(q,de)&&(ee[de]=q[de]);return ee.default=q,ee}function H(q){return q&&q.__esModule?q:{default:q}}i.converters=M,i.utils=b})(dist);const sizes={width:window.innerWidth,height:window.innerHeight},listenerPositions=[new Vector3(0,0,0),new Vector3(0,0,-3),new Vector3(0,0,-6),new Vector3(0,0,-9),new Vector3(0,0,-12)],audioPositions=[new Vector3(-1,0,-4),new Vector3(1,0,-7),new Vector3(-1,0,-7),new Vector3(-1,0,-3)],desktopDescriptions=["This is AllEars, a playable introduction to screenreader-accessible immersive audio on the web.  You can navigate through the experience using the tab key, just like any other accessible website.  Each 3D position is mapped to an HTML list item. If you’ve never used a screen reader before, I challenge you to turn it on, close your eyes, and find out if you can navigate the 3D space.","To look around, use the left and right arrow keys, and spacebar to move forward. You can optionally use the mouse and mouse click to look around, but that tends to be more difficult if your eyes are closed.","This experience i ncorporates a standard 3D virtual space and spatial audio you might incounter in video games, virtual reality, or other kinds of simulations.  To move forward, press spacebar, or hold a single click.","This special kind of spatial audio, however, is called ambisonics, and it allows you to experience * an entire soundfield * without reference to objects in 3D space. All spatial information is contained within the audio file itself, and you need a special player called a binaural decoder to perceive that information. A helpful metaphor, I find, is thinking of it like listening to the sky, since it’s a spherical audio format.","To change settings, navigate to the menu with the escape key.  If you’re using a screenreader, the menu is just after this position. There you can learn more about this project, change control preferences, or connect a game controller."],mobileDescriptions=[" This is AllEars, a playable introduction to screenreader-accessible immersive audio on the web.  If you’re using a screenreader, you can navigate through the experience by swiping left or right, just like any other accessible website.   Each 3D position is mapped to an HTML list item. Otherwise, you can teleport to the next position with a double tap on the top half of the screen.  If you’ve never used a screen reader before, I challenge you to turn it on, close your eyes, and find out if you can navigate the 3D space.","To look around, use a one-finger drag on the top half of the screen. This will also work if you have Direct Touch enabled on iOS.  If you’re using Talkback on Android, a two-finger drag would be the equivalent.","This experience incorporates the standard 3D virtual space you might incounter in video games, virtual reality, or other kinds of simulations.  To move forward, with a single finger, press and hold in the lower half of the screen.  If you’re using Talkback on Android, use a two-finger hold.","This special kind of spatial audio, however, is called ambisonics, and it allows you to experience * an entire soundfield * without reference to objects in 3D space.  * All spatial information is contained within the audio file itself, and you need a special player called a binaural decoder to perceive that information. A helpful metaphor, I find, is thinking of it like listening to the sky, since it’s a spherical audio format.","To change settings, navigate to the menu with a double tap on the bottom half of the screen.  If you’re using a screenreader, the menu is just after this position. There you can learn more about this project, change control preferences, or connect a game controller."];var volumeFragment_default=`varying vec2 vUv;
uniform float volume;

  void main()
  { 

    gl_FragColor = vec4(vec3(1.-volume), 1.0);
  }`,volumeVertex_default=`varying vec2 vUv;

void main()
{   
    vUv = uv;
    gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
}`;const handler={set:function(i,e,t){return i[e]=t,!0}},state=new Proxy({mode:"tab",slide:"welcome",positionIndex:0,mobile:!1,box:-1,ambisonics:null,needsUpdate:!1,pausedAt:0,isPlaying:!1,preferences:{controls:"",joystick:"",sensitivity:.5}},handler);let scene,camera,renderer,canvas,sound,gamepadControls,sounds=[],playerBounds={min:new Vector3(-2,-.5,-15),max:new Vector3(2,2,1)},boxGroup,mirror,decoder,analyser,gainOut,encoder,convolver,converter,rotator,context,soundBuffer;const maxOrder=1,soundUrl="./sounds/sample2.wav",irUrl="./IRs/ambisonic2binaural_filters/aalto2016_N1.wav",ambiIrUrl="./IRs/ambisonicRIRs/room_1_bf.wav";function initScene(){scene=new Scene,camera=new PerspectiveCamera(75,sizes.width/sizes.height,.1,100),camera.position.set(0,0,0),scene.add(camera),canvas=document.querySelector("canvas.webgl"),boxGroup=new Group;const i=new AudioListener;camera.add(i),initScene.mouseControls=new MouseOnlyControls(camera,document.body),initScene.keyboardControls=new KeyboardAccessControls(camera,document.body),initScene.touchControls=new TouchAccessControls(camera,document.body),gamepadControls=new GamepadAccessControls(camera),renderer=new WebGLRenderer({canvas,antialias:!0}),renderer.setSize(sizes.width,sizes.height),renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),initScene.initAmbisonics=R=>{var L=window.AudioContext||window.webkitAudioContext;context=new L,context.onstatechange=function(){context.state==="suspended"&&context.resume()},F.load(soundUrl,e,void 0,r),F.load(irUrl,t,void 0,r),F.load(ambiIrUrl,n,void 0,r),encoder=new dist.monoEncoder(context,1),console.log(encoder),convolver=new dist.convolver(context,maxOrder),console.log(convolver),converter=new dist.converters.wxyz2acn(context),console.log(converter),rotator=new dist.sceneRotator(context,maxOrder),console.log(rotator),mirror=new dist.sceneMirror(context,1),console.log(mirror),decoder=new dist.binDecoder(context,1),console.log(decoder),analyser=new dist.intensityAnalyser(context),console.log(analyser),gainOut=context.createGain(),convolver.out.connect(converter.in),converter.out.connect(mirror.in),mirror.out.connect(analyser.in),mirror.out.connect(rotator.in),rotator.out.connect(decoder.in),decoder.out.connect(gainOut),gainOut.connect(context.destination)},initScene.createAndStartBuffer=()=>{var R=state.pausedAt;sound=context.createBufferSource(),sound.buffer=soundBuffer,sound.loop=!0,sound.connect(convolver.in),console.log(sound),sound.start(0,R),sound.isPlaying=!0,state.playStart=context.currentTime-R,state.pausedAt=0},initScene.pauseBuffer=()=>{sound.isPlaying=!1;var R=context.currentTime-state.playStart;sound.stop(),state.pausedAt=R,document.getElementById("play").disabled=!1};var e=function(R){soundBuffer=R,state.ambisonics="loaded"},t=function(R){decoder.updateFilters(R)},n=function(R){convolver.updateFilters(R)};function r(R){alert(`Browser cannot decode audio data...

Error: `+R+`

(If you re using Safari and get a null error, this is most likely due to Apple's shady plan going on to stop the .ogg format from easing web developer's life :)`)}const s=document.querySelector("#play");setTimeout(()=>{s.innerHTML="Play",s.addEventListener("click",v)},500),initScene.sceneListElement=document.querySelector("#scene-list");let a=new PlaneGeometry(1,1,4,4);const o=new TextureLoader;let c=new BoxGeometry(1,1,1),l=new MeshStandardMaterial({color:new Color(3342421),side:DoubleSide}),u=new Mesh(c,l);u.position.set(0,playerBounds.min.y,(playerBounds.min.z-playerBounds.max.z)/2+playerBounds.max.z),u.scale.set(playerBounds.max.x-playerBounds.min.x,.01,playerBounds.max.z-playerBounds.min.z),scene.add(u);let h=new Mesh(c,l);h.position.set(playerBounds.min.x,(playerBounds.max.y-playerBounds.min.y)/2+playerBounds.min.y,(playerBounds.min.z-playerBounds.max.z)/2+playerBounds.max.z),h.scale.set(.01,playerBounds.max.y-playerBounds.min.y,playerBounds.max.z-playerBounds.min.z),scene.add(h);let d=new Mesh(c,l);d.position.set(playerBounds.max.x,(playerBounds.max.y-playerBounds.min.y)/2+playerBounds.min.y,(playerBounds.min.z-playerBounds.max.z)/2+playerBounds.max.z),d.scale.set(.01,playerBounds.max.y-playerBounds.min.y,playerBounds.max.z-playerBounds.min.z),scene.add(d);let f=new Mesh(c,l);f.position.set((playerBounds.max.x-playerBounds.min.x)/2+playerBounds.min.x,(playerBounds.max.y-playerBounds.min.y)/2+playerBounds.min.y,playerBounds.min.z),f.scale.set(playerBounds.max.x-playerBounds.min.x,playerBounds.max.y-playerBounds.min.y,.01),scene.add(f);let m=new Mesh(c,l);m.position.set((playerBounds.max.x-playerBounds.min.x)/2+playerBounds.min.x,(playerBounds.max.y-playerBounds.min.y)/2+playerBounds.min.y,playerBounds.max.z),m.scale.set(playerBounds.max.x-playerBounds.min.x,playerBounds.max.y-playerBounds.min.y,.01),scene.add(m),listenerPositions.map((R,L)=>{const G=document.createElement("li");G.tabIndex=0,G.setAttribute("data-index",L),G.role="button",G.addEventListener("focus",ee=>{state.positionIndex!=-1&&_(L),state.positionIndex=L}),state.mobile?G.innerHTML="Position "+L+mobileDescriptions[L]:G.innerHTML=desktopDescriptions[L],initScene.sceneListElement.appendChild(G);const M=new BoxGeometry(2,2,2.1),E=new MeshBasicMaterial({color:new Color(`rgb(${Math.random()*255}, 255, 255)`),transparent:!0,opacity:.3,side:DoubleSide}),b=new Mesh(M,E);b.geometry.computeBoundingBox(),b.position.set(R.x,R.y+.5,R.z),boxGroup.add(b);const I=o.load(`textures/allears${L}.png`);I.wrapS=RepeatWrapping,I.wrapT=RepeatWrapping,I.repeat.set(1,1);let H=new MeshBasicMaterial({map:I,side:DoubleSide}),q=new Mesh(a,H);q.position.set(R.x,R.y,R.z-1),scene.add(q)}),scene.add(boxGroup);const v=()=>{state.mobile||(console.log("locking"),initScene.mouseControls.lock()),document.querySelector("#scene").style.display="none",document.querySelector("#scene-list").style.display="block",sounds.length<1&&audioPositions.map((R,L)=>{const G=new PositionalAudio(i);sounds.push(G),new AudioAnalyser(G);const M=new SphereGeometry(10,32,16),E=new ShaderMaterial({vertexShader:volumeVertex_default,fragmentShader:volumeFragment_default,uniforms:{volume:{value:0}},transparent:!0,side:FrontSide}),b=new Mesh(M,E);b.position.set(R.x,R.y,R.z),b.scale.set(.02,.02,.02),scene.add(b);const I=document.getElementById(`sample${L}`);G.setMediaElementSource(I),G.setRefDistance(.5),b.add(G)})};window.addEventListener("keydown",R=>{R.code==="Escape"&&g()});const g=()=>{document.dispatchEvent(new Event("menu"))},_=R=>{camera.position.copy(listenerPositions[R])},F=new AudioLoader,x=new DirectionalLight(16777215,3);x.position.set(0,.5,1).normalize(),scene.add(x);const y=new AmbientLight(16777215,1);scene.add(y)}const renderScene=()=>{state.mobile?(initScene.keyboardControls.update(),initScene.touchControls.update()):(initScene.mouseControls.update(),initScene.keyboardControls.update(),gamepadControls.update()),camera.position.x<playerBounds.min.x&&(camera.position.x=playerBounds.min.x),camera.position.x>playerBounds.max.x&&(camera.position.x=playerBounds.max.x),camera.position.z<playerBounds.min.z&&(camera.position.z=playerBounds.min.z),camera.position.z>playerBounds.max.z&&(camera.position.z=playerBounds.max.z),state.box=-1,boxGroup.children.map((e,t)=>{const n=new Box3;n.copy(e.geometry.boundingBox).applyMatrix4(e.matrixWorld),n.containsPoint(camera.position)&&(state.box=t)}),state.positionIndex!=state.box&&(console.log("mismatch",state.positionIndex,state.box),state.positionIndex==0&&state.box==4||(state.box==-1?(sounds.map((e,t)=>{audioPositions.map((n,r)=>{document.getElementById(`sample${r}`).play()})}),state.positionIndex=-1):(audioPositions.map((t,n)=>{document.getElementById(`sample${n}`).pause()}),initScene.sceneListElement.querySelector(`li[data-index="${state.box}"]`).focus())),state.positionIndex=state.box),state.positionIndex==3?(state.ambisonics==null&&(initScene.initAmbisonics(),state.ambisonics="loading"),state.ambisonics=="loading"&&console.log("loading"),state.ambisonics=="loaded"&&(initScene.createAndStartBuffer(),state.ambisonics="playing"),state.ambisonics=="paused"&&(initScene.createAndStartBuffer(),state.ambisonics="playing")):state.ambisonics=="playing"&&(initScene.pauseBuffer(),state.ambisonics="paused");let i=new Euler(0,0,0,"YXZ");rotator&&(i.setFromQuaternion(camera.quaternion),rotator.yaw=i.y*180/Math.PI,rotator.pitch=i.x*180/Math.PI,rotator.updateRotMtx()),renderer.render(scene,camera),window.requestAnimationFrame(renderScene)},enterButton=document.querySelector("#enter-button"),infoButton=document.querySelector("#info-button"),continueButton=document.querySelector("#continue-button"),backButton=document.querySelector("#back"),playButton=document.querySelector("#play"),menu=document.querySelector("#menu"),menuResumeButton=document.querySelector("#menu-resume"),menuSettingsButton=document.querySelector("#menu-settings"),menuInfoButton=document.querySelector("#menu-info"),settingsBack=document.querySelector("#settings-back");window.mobileCheck=function(){let i=!1;return function(e){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(i=!0)}(navigator.userAgent||navigator.vendor||window.opera),i};state.mobile=window.mobileCheck();initScene();const changeSlide=i=>{document.querySelector(`#${state.slide}`).style.display="none",state.slide=i,document.querySelector(`#${state.slide}`).style.display="flex"},enterScene=()=>{changeSlide("scene"),state.inScene=!0,playButton.addEventListener("click",()=>{renderScene(),menu.style.display="flex"}),document.addEventListener("menu",()=>{menu.focus()})};enterButton.addEventListener("click",()=>{changeSlide("headphones")});infoButton.addEventListener("click",()=>{changeSlide("info")});backButton.addEventListener("click",()=>{state.inScene?(changeSlide("menu"),menu.focus(),document.querySelector("#scene-list").style.display="block"):changeSlide("welcome")});continueButton.addEventListener("click",enterScene);menuResumeButton.addEventListener("click",()=>{menu.classList.remove("slide"),menu.classList.add("screenreader"),state.mobile||initScene.mouseControls.lock(),document.querySelector(`li[data-index='${state.positionIndex}']`).focus()});menu.addEventListener("focusin",()=>{console.log(state.positionIndex);let i=document.getElementById(`sample${state.positionIndex}`);i!=null&&!i.paused&&i.pause(),menu.classList.remove("screenreader"),menu.classList.add("slide"),changeSlide("menu")});menu.addEventListener("focusout",()=>{menu.classList.remove("slide"),menu.classList.add("screenreader")});menuSettingsButton.addEventListener("click",()=>{changeSlide("settings"),document.querySelector("#scene-list").style.display="none"});menuInfoButton.addEventListener("click",()=>{changeSlide("info"),document.querySelector("#scene-list").style.display="none"});settingsBack.addEventListener("click",()=>{changeSlide("menu"),menu.focus(),document.querySelector("#scene-list").style.display="block"});let pointerRotationSpeed=document.querySelector("#pointerRotationSpeed");pointerRotationSpeed.addEventListener("change",i=>{let e=map(i.target.value,pointerRotationSpeed.min,pointerRotationSpeed.max,.1,5,!0);console.log(e),initScene.mouseControls.rotationSpeed=e});let touchMoveSpeed=document.querySelector("#touchMoveSpeed");touchMoveSpeed.addEventListener("change",i=>{let e=map(i.target.value,touchMoveSpeed.min,touchMoveSpeed.max,.001,.1);console.log(e),initScene.touchControls.forwardSpeed=e});let touchRotationSpeed=document.querySelector("#touchRotationSpeed");touchRotationSpeed.addEventListener("change",i=>{let e=map(i.target.value,touchRotationSpeed.min,touchRotationSpeed.max,.001,.015);console.log(e),initScene.touchControls.touchSpeed=e});let elevationCheckbox=document.querySelector("#elevationCheckbox");elevationCheckbox.addEventListener("change",i=>{initScene.touchControls.elevationControls=i.target.value});let inertiaCheckbox=document.querySelector("#elevationCheckbox");inertiaCheckbox.addEventListener("change",i=>{initScene.touchControls.inertia=i.target.value});let spacebarMoveSpeed=document.querySelector("#spacebarMoveSpeed");spacebarMoveSpeed.addEventListener("change",i=>{let e=map(i.target.value,spacebarMoveSpeed.min,spacebarMoveSpeed.max,.003,.1);initScene.keyboardControls.moveSpeed=e});let arrowKeysSpeed=document.querySelector("#arrowKeysSpeed");arrowKeysSpeed.addEventListener("change",i=>{let e=map(i.target.value,arrowKeysSpeed.min,arrowKeysSpeed.max,.003,.1);initScene.keyboardControls.lookSpeed=e});const map=function(i,e,t,n,r,s){const a=(i-e)/(t-e)*(r-n)+n;return s?n<r?constrain(a,n,r):constrain(a,r,n):a},constrain=function(i,e,t){return Math.max(Math.min(i,t),e)};changeSlide("welcome");
//# sourceMappingURL=index-CaNA4bn_.js.map
