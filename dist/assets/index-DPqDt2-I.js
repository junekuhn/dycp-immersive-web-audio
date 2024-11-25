(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();window.global||(window.global=window);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const REVISION="170",CullFaceNone=0,CullFaceBack=1,CullFaceFront=2,PCFShadowMap=1,PCFSoftShadowMap=2,VSMShadowMap=3,FrontSide=0,BackSide=1,DoubleSide=2,NoBlending=0,NormalBlending=1,AdditiveBlending=2,SubtractiveBlending=3,MultiplyBlending=4,CustomBlending=5,AddEquation=100,SubtractEquation=101,ReverseSubtractEquation=102,MinEquation=103,MaxEquation=104,ZeroFactor=200,OneFactor=201,SrcColorFactor=202,OneMinusSrcColorFactor=203,SrcAlphaFactor=204,OneMinusSrcAlphaFactor=205,DstAlphaFactor=206,OneMinusDstAlphaFactor=207,DstColorFactor=208,OneMinusDstColorFactor=209,SrcAlphaSaturateFactor=210,ConstantColorFactor=211,OneMinusConstantColorFactor=212,ConstantAlphaFactor=213,OneMinusConstantAlphaFactor=214,NeverDepth=0,AlwaysDepth=1,LessDepth=2,LessEqualDepth=3,EqualDepth=4,GreaterEqualDepth=5,GreaterDepth=6,NotEqualDepth=7,MultiplyOperation=0,MixOperation=1,AddOperation=2,NoToneMapping=0,LinearToneMapping=1,ReinhardToneMapping=2,CineonToneMapping=3,ACESFilmicToneMapping=4,CustomToneMapping=5,AgXToneMapping=6,NeutralToneMapping=7,UVMapping=300,CubeReflectionMapping=301,CubeRefractionMapping=302,EquirectangularReflectionMapping=303,EquirectangularRefractionMapping=304,CubeUVReflectionMapping=306,RepeatWrapping=1e3,ClampToEdgeWrapping=1001,MirroredRepeatWrapping=1002,NearestFilter=1003,NearestMipmapNearestFilter=1004,NearestMipmapLinearFilter=1005,LinearFilter=1006,LinearMipmapNearestFilter=1007,LinearMipmapLinearFilter=1008,UnsignedByteType=1009,ByteType=1010,ShortType=1011,UnsignedShortType=1012,IntType=1013,UnsignedIntType=1014,FloatType=1015,HalfFloatType=1016,UnsignedShort4444Type=1017,UnsignedShort5551Type=1018,UnsignedInt248Type=1020,UnsignedInt5999Type=35902,AlphaFormat=1021,RGBFormat=1022,RGBAFormat=1023,LuminanceFormat=1024,LuminanceAlphaFormat=1025,DepthFormat=1026,DepthStencilFormat=1027,RedFormat=1028,RedIntegerFormat=1029,RGFormat=1030,RGIntegerFormat=1031,RGBAIntegerFormat=1033,RGB_S3TC_DXT1_Format=33776,RGBA_S3TC_DXT1_Format=33777,RGBA_S3TC_DXT3_Format=33778,RGBA_S3TC_DXT5_Format=33779,RGB_PVRTC_4BPPV1_Format=35840,RGB_PVRTC_2BPPV1_Format=35841,RGBA_PVRTC_4BPPV1_Format=35842,RGBA_PVRTC_2BPPV1_Format=35843,RGB_ETC1_Format=36196,RGB_ETC2_Format=37492,RGBA_ETC2_EAC_Format=37496,RGBA_ASTC_4x4_Format=37808,RGBA_ASTC_5x4_Format=37809,RGBA_ASTC_5x5_Format=37810,RGBA_ASTC_6x5_Format=37811,RGBA_ASTC_6x6_Format=37812,RGBA_ASTC_8x5_Format=37813,RGBA_ASTC_8x6_Format=37814,RGBA_ASTC_8x8_Format=37815,RGBA_ASTC_10x5_Format=37816,RGBA_ASTC_10x6_Format=37817,RGBA_ASTC_10x8_Format=37818,RGBA_ASTC_10x10_Format=37819,RGBA_ASTC_12x10_Format=37820,RGBA_ASTC_12x12_Format=37821,RGBA_BPTC_Format=36492,RGB_BPTC_SIGNED_Format=36494,RGB_BPTC_UNSIGNED_Format=36495,RED_RGTC1_Format=36283,SIGNED_RED_RGTC1_Format=36284,RED_GREEN_RGTC2_Format=36285,SIGNED_RED_GREEN_RGTC2_Format=36286,BasicDepthPacking=3200,RGBADepthPacking=3201,TangentSpaceNormalMap=0,ObjectSpaceNormalMap=1,NoColorSpace="",SRGBColorSpace="srgb",LinearSRGBColorSpace="srgb-linear",LinearTransfer="linear",SRGBTransfer="srgb",KeepStencilOp=7680,AlwaysStencilFunc=519,NeverCompare=512,LessCompare=513,EqualCompare=514,LessEqualCompare=515,GreaterCompare=516,NotEqualCompare=517,GreaterEqualCompare=518,AlwaysCompare=519,StaticDrawUsage=35044,GLSL3="300 es",WebGLCoordinateSystem=2e3,WebGPUCoordinateSystem=2001;class EventDispatcher{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const _lut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],DEG2RAD=Math.PI/180,RAD2DEG=180/Math.PI;function generateUUID(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(_lut[r&255]+_lut[r>>8&255]+_lut[r>>16&255]+_lut[r>>24&255]+"-"+_lut[e&255]+_lut[e>>8&255]+"-"+_lut[e>>16&15|64]+_lut[e>>24&255]+"-"+_lut[t&63|128]+_lut[t>>8&255]+"-"+_lut[t>>16&255]+_lut[t>>24&255]+_lut[n&255]+_lut[n>>8&255]+_lut[n>>16&255]+_lut[n>>24&255]).toLowerCase()}function clamp(r,e,t){return Math.max(e,Math.min(t,r))}function euclideanModulo(r,e){return(r%e+e)%e}function lerp(r,e,t){return(1-t)*r+t*e}function denormalize(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function normalize$1(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Vector2{constructor(e=0,t=0){Vector2.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(clamp(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Matrix3{constructor(e,t,n,i,s,a,o,c,l){Matrix3.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,l)}set(e,t,n,i,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],f=n[5],p=n[8],_=i[0],g=i[3],v=i[6],F=i[1],y=i[4],x=i[7],b=i[2],L=i[5],G=i[8];return s[0]=a*_+o*F+c*b,s[3]=a*g+o*y+c*L,s[6]=a*v+o*x+c*G,s[1]=l*_+u*F+h*b,s[4]=l*g+u*y+h*L,s[7]=l*v+u*x+h*G,s[2]=d*_+f*F+p*b,s[5]=d*g+f*y+p*L,s[8]=d*v+f*x+p*G,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*s*u+n*o*c+i*s*l-i*a*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,d=o*c-u*s,f=l*s-a*c,p=t*h+n*d+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return e[0]=h*_,e[1]=(i*l-u*n)*_,e[2]=(o*n-i*a)*_,e[3]=d*_,e[4]=(u*t-i*c)*_,e[5]=(i*s-o*t)*_,e[6]=f*_,e[7]=(n*c-l*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(_m3.makeScale(e,t)),this}rotate(e){return this.premultiply(_m3.makeRotation(-e)),this}translate(e,t){return this.premultiply(_m3.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _m3=new Matrix3;function arrayNeedsUint32(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function createElementNS(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function createCanvasElement(){const r=createElementNS("canvas");return r.style.display="block",r}const _cache={};function warnOnce(r){r in _cache||(_cache[r]=!0,console.warn(r))}function probeAsync(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function toNormalizedProjectionMatrix(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function toReversedProjectionMatrix(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const ColorManagement={enabled:!0,workingColorSpace:LinearSRGBColorSpace,spaces:{},convert:function(r,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===SRGBTransfer&&(r.r=SRGBToLinear(r.r),r.g=SRGBToLinear(r.g),r.b=SRGBToLinear(r.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(r.applyMatrix3(this.spaces[e].toXYZ),r.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===SRGBTransfer&&(r.r=LinearToSRGB(r.r),r.g=LinearToSRGB(r.g),r.b=LinearToSRGB(r.b))),r},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===NoColorSpace?LinearTransfer:this.spaces[r].transfer},getLuminanceCoefficients:function(r,e=this.workingColorSpace){return r.fromArray(this.spaces[e].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,e,t){return r.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function SRGBToLinear(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function LinearToSRGB(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const REC709_PRIMARIES=[.64,.33,.3,.6,.15,.06],REC709_LUMINANCE_COEFFICIENTS=[.2126,.7152,.0722],D65=[.3127,.329],LINEAR_REC709_TO_XYZ=new Matrix3().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),XYZ_TO_LINEAR_REC709=new Matrix3().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ColorManagement.define({[LinearSRGBColorSpace]:{primaries:REC709_PRIMARIES,whitePoint:D65,transfer:LinearTransfer,toXYZ:LINEAR_REC709_TO_XYZ,fromXYZ:XYZ_TO_LINEAR_REC709,luminanceCoefficients:REC709_LUMINANCE_COEFFICIENTS,workingColorSpaceConfig:{unpackColorSpace:SRGBColorSpace},outputColorSpaceConfig:{drawingBufferColorSpace:SRGBColorSpace}},[SRGBColorSpace]:{primaries:REC709_PRIMARIES,whitePoint:D65,transfer:SRGBTransfer,toXYZ:LINEAR_REC709_TO_XYZ,fromXYZ:XYZ_TO_LINEAR_REC709,luminanceCoefficients:REC709_LUMINANCE_COEFFICIENTS,outputColorSpaceConfig:{drawingBufferColorSpace:SRGBColorSpace}}});let _canvas;class ImageUtils{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{_canvas===void 0&&(_canvas=createElementNS("canvas")),_canvas.width=e.width,_canvas.height=e.height;const n=_canvas.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=_canvas}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=createElementNS("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=SRGBToLinear(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(SRGBToLinear(t[n]/255)*255):t[n]=SRGBToLinear(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _sourceId=0;class Source{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_sourceId++}),this.uuid=generateUUID(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(serializeImage(i[a].image)):s.push(serializeImage(i[a]))}else s=serializeImage(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function serializeImage(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?ImageUtils.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _textureId=0;class Texture extends EventDispatcher{constructor(e=Texture.DEFAULT_IMAGE,t=Texture.DEFAULT_MAPPING,n=ClampToEdgeWrapping,i=ClampToEdgeWrapping,s=LinearFilter,a=LinearMipmapLinearFilter,o=RGBAFormat,c=UnsignedByteType,l=Texture.DEFAULT_ANISOTROPY,u=NoColorSpace){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_textureId++}),this.uuid=generateUUID(),this.name="",this.source=new Source(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Vector2(0,0),this.repeat=new Vector2(1,1),this.center=new Vector2(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Matrix3,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==UVMapping)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case RepeatWrapping:e.x=e.x-Math.floor(e.x);break;case ClampToEdgeWrapping:e.x=e.x<0?0:1;break;case MirroredRepeatWrapping:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case RepeatWrapping:e.y=e.y-Math.floor(e.y);break;case ClampToEdgeWrapping:e.y=e.y<0?0:1;break;case MirroredRepeatWrapping:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Texture.DEFAULT_IMAGE=null;Texture.DEFAULT_MAPPING=UVMapping;Texture.DEFAULT_ANISOTROPY=1;class Vector4{constructor(e=0,t=0,n=0,i=1){Vector4.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],p=c[9],_=c[2],g=c[6],v=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(p+g)<.1&&Math.abs(l+f+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,x=(f+1)/2,b=(v+1)/2,L=(u+d)/4,G=(h+_)/4,M=(p+g)/4;return y>x&&y>b?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=L/n,s=G/n):x>b?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=L/i,s=M/i):b<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(b),n=G/s,i=M/s),this.set(n,i,s,t),this}let F=Math.sqrt((g-p)*(g-p)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(F)<.001&&(F=1),this.x=(g-p)/F,this.y=(h-_)/F,this.z=(d-u)/F,this.w=Math.acos((l+f+v-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class RenderTarget extends EventDispatcher{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Vector4(0,0,e,t),this.scissorTest=!1,this.viewport=new Vector4(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:LinearFilter,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Texture(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Source(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class WebGLRenderTarget extends RenderTarget{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class DataArrayTexture extends Texture{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=NearestFilter,this.minFilter=NearestFilter,this.wrapR=ClampToEdgeWrapping,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Data3DTexture extends Texture{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=NearestFilter,this.minFilter=NearestFilter,this.wrapR=ClampToEdgeWrapping,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Quaternion{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3];const d=s[a+0],f=s[a+1],p=s[a+2],_=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=_;return}if(h!==_||c!==d||l!==f||u!==p){let g=1-o;const v=c*d+l*f+u*p+h*_,F=v>=0?1:-1,y=1-v*v;if(y>Number.EPSILON){const b=Math.sqrt(y),L=Math.atan2(b,v*F);g=Math.sin(g*L)/b,o=Math.sin(o*L)/b}const x=o*F;if(c=c*g+d*x,l=l*g+f*x,u=u*g+p*x,h=h*g+_*x,g===1-o){const b=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=b,l*=b,u*=b,h*=b}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=s[a],d=s[a+1],f=s[a+2],p=s[a+3];return e[t]=o*p+u*h+c*f-l*d,e[t+1]=c*p+u*d+l*h-o*f,e[t+2]=l*p+u*f+o*d-c*h,e[t+3]=u*p-o*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(i/2),h=o(s/2),d=c(n/2),f=c(i/2),p=c(s/2);switch(a){case"XYZ":this._x=d*u*h+l*f*p,this._y=l*f*h-d*u*p,this._z=l*u*p+d*f*h,this._w=l*u*h-d*f*p;break;case"YXZ":this._x=d*u*h+l*f*p,this._y=l*f*h-d*u*p,this._z=l*u*p-d*f*h,this._w=l*u*h+d*f*p;break;case"ZXY":this._x=d*u*h-l*f*p,this._y=l*f*h+d*u*p,this._z=l*u*p+d*f*h,this._w=l*u*h-d*f*p;break;case"ZYX":this._x=d*u*h-l*f*p,this._y=l*f*h+d*u*p,this._z=l*u*p-d*f*h,this._w=l*u*h+d*f*p;break;case"YZX":this._x=d*u*h+l*f*p,this._y=l*f*h+d*u*p,this._z=l*u*p-d*f*h,this._w=l*u*h-d*f*p;break;case"XZY":this._x=d*u*h-l*f*p,this._y=l*f*h-d*u*p,this._z=l*u*p+d*f*h,this._w=l*u*h+d*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(s-l)*f,this._z=(a-i)*f}else if(n>o&&n>h){const f=2*Math.sqrt(1+n-o-h);this._w=(u-c)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+l)/f}else if(o>h){const f=2*Math.sqrt(1+o-n-h);this._w=(s-l)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-n-o);this._w=(a-i)/f,this._x=(s+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(clamp(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+i*l-s*c,this._y=i*u+a*c+s*o-n*l,this._z=s*u+a*l+n*c-i*o,this._w=a*u-n*o-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Vector3{constructor(e=0,t=0,n=0){Vector3.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_quaternion$4.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_quaternion$4.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),u=2*(o*t-s*i),h=2*(s*n-a*t);return this.x=t+c*l+a*h-o*u,this.y=n+c*u+o*l-s*h,this.z=i+c*h+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-s*o,this.y=s*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return _vector$c.copy(this).projectOnVector(e),this.sub(_vector$c)}reflect(e){return this.sub(_vector$c.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(clamp(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _vector$c=new Vector3,_quaternion$4=new Quaternion;class Box3{constructor(e=new Vector3(1/0,1/0,1/0),t=new Vector3(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(_vector$b.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(_vector$b.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=_vector$b.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,_vector$b):_vector$b.fromBufferAttribute(s,a),_vector$b.applyMatrix4(e.matrixWorld),this.expandByPoint(_vector$b);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_box$4.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),_box$4.copy(n.boundingBox)),_box$4.applyMatrix4(e.matrixWorld),this.union(_box$4)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,_vector$b),_vector$b.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_center),_extents.subVectors(this.max,_center),_v0$3.subVectors(e.a,_center),_v1$7.subVectors(e.b,_center),_v2$4.subVectors(e.c,_center),_f0.subVectors(_v1$7,_v0$3),_f1.subVectors(_v2$4,_v1$7),_f2.subVectors(_v0$3,_v2$4);let t=[0,-_f0.z,_f0.y,0,-_f1.z,_f1.y,0,-_f2.z,_f2.y,_f0.z,0,-_f0.x,_f1.z,0,-_f1.x,_f2.z,0,-_f2.x,-_f0.y,_f0.x,0,-_f1.y,_f1.x,0,-_f2.y,_f2.x,0];return!satForAxes(t,_v0$3,_v1$7,_v2$4,_extents)||(t=[1,0,0,0,1,0,0,0,1],!satForAxes(t,_v0$3,_v1$7,_v2$4,_extents))?!1:(_triangleNormal.crossVectors(_f0,_f1),t=[_triangleNormal.x,_triangleNormal.y,_triangleNormal.z],satForAxes(t,_v0$3,_v1$7,_v2$4,_extents))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_vector$b).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_vector$b).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_points[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_points[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_points[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_points[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_points[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_points[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_points[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_points[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_points),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const _points=[new Vector3,new Vector3,new Vector3,new Vector3,new Vector3,new Vector3,new Vector3,new Vector3],_vector$b=new Vector3,_box$4=new Box3,_v0$3=new Vector3,_v1$7=new Vector3,_v2$4=new Vector3,_f0=new Vector3,_f1=new Vector3,_f2=new Vector3,_center=new Vector3,_extents=new Vector3,_triangleNormal=new Vector3,_testAxis=new Vector3;function satForAxes(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){_testAxis.fromArray(r,s);const o=i.x*Math.abs(_testAxis.x)+i.y*Math.abs(_testAxis.y)+i.z*Math.abs(_testAxis.z),c=e.dot(_testAxis),l=t.dot(_testAxis),u=n.dot(_testAxis);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const _box$3=new Box3,_v1$6=new Vector3,_v2$3=new Vector3;class Sphere{constructor(e=new Vector3,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):_box$3.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_v1$6.subVectors(e,this.center);const t=_v1$6.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(_v1$6,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_v2$3.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_v1$6.copy(e.center).add(_v2$3)),this.expandByPoint(_v1$6.copy(e.center).sub(_v2$3))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _vector$a=new Vector3,_segCenter=new Vector3,_segDir=new Vector3,_diff=new Vector3,_edge1=new Vector3,_edge2=new Vector3,_normal$1=new Vector3;class Ray{constructor(e=new Vector3,t=new Vector3(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_vector$a)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=_vector$a.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_vector$a.copy(this.origin).addScaledVector(this.direction,t),_vector$a.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){_segCenter.copy(e).add(t).multiplyScalar(.5),_segDir.copy(t).sub(e).normalize(),_diff.copy(this.origin).sub(_segCenter);const s=e.distanceTo(t)*.5,a=-this.direction.dot(_segDir),o=_diff.dot(this.direction),c=-_diff.dot(_segDir),l=_diff.lengthSq(),u=Math.abs(1-a*a);let h,d,f,p;if(u>0)if(h=a*c-o,d=a*o-c,p=s*u,h>=0)if(d>=-p)if(d<=p){const _=1/u;h*=_,d*=_,f=h*(h+a*d+2*o)+d*(a*h+d+2*c)+l}else d=s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;else d=-s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;else d<=-p?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-c),s),f=-h*h+d*(d+2*c)+l):d<=p?(h=0,d=Math.min(Math.max(-s,-c),s),f=d*(d+2*c)+l):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-c),s),f=-h*h+d*(d+2*c)+l);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(_segCenter).addScaledVector(_segDir,d),f}intersectSphere(e,t){_vector$a.subVectors(e.center,this.origin);const n=_vector$a.dot(this.direction),i=_vector$a.dot(_vector$a)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,_vector$a)!==null}intersectTriangle(e,t,n,i,s){_edge1.subVectors(t,e),_edge2.subVectors(n,e),_normal$1.crossVectors(_edge1,_edge2);let a=this.direction.dot(_normal$1),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;_diff.subVectors(this.origin,e);const c=o*this.direction.dot(_edge2.crossVectors(_diff,_edge2));if(c<0)return null;const l=o*this.direction.dot(_edge1.cross(_diff));if(l<0||c+l>a)return null;const u=-o*_diff.dot(_normal$1);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Matrix4{constructor(e,t,n,i,s,a,o,c,l,u,h,d,f,p,_,g){Matrix4.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,l,u,h,d,f,p,_,g)}set(e,t,n,i,s,a,o,c,l,u,h,d,f,p,_,g){const v=this.elements;return v[0]=e,v[4]=t,v[8]=n,v[12]=i,v[1]=s,v[5]=a,v[9]=o,v[13]=c,v[2]=l,v[6]=u,v[10]=h,v[14]=d,v[3]=f,v[7]=p,v[11]=_,v[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Matrix4().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/_v1$5.setFromMatrixColumn(e,0).length(),s=1/_v1$5.setFromMatrixColumn(e,1).length(),a=1/_v1$5.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*u,f=a*h,p=o*u,_=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+p*l,t[5]=d-_*l,t[9]=-o*c,t[2]=_-d*l,t[6]=p+f*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*u,f=c*h,p=l*u,_=l*h;t[0]=d+_*o,t[4]=p*o-f,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-p,t[6]=_+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*u,f=c*h,p=l*u,_=l*h;t[0]=d-_*o,t[4]=-a*h,t[8]=p+f*o,t[1]=f+p*o,t[5]=a*u,t[9]=_-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*u,f=a*h,p=o*u,_=o*h;t[0]=c*u,t[4]=p*l-f,t[8]=d*l+_,t[1]=c*h,t[5]=_*l+d,t[9]=f*l-p,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,f=a*l,p=o*c,_=o*l;t[0]=c*u,t[4]=_-d*h,t[8]=p*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=f*h+p,t[10]=d-_*h}else if(e.order==="XZY"){const d=a*c,f=a*l,p=o*c,_=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+_,t[5]=a*u,t[9]=f*h-p,t[2]=p*h-f,t[6]=o*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_zero,e,_one)}lookAt(e,t,n){const i=this.elements;return _z.subVectors(e,t),_z.lengthSq()===0&&(_z.z=1),_z.normalize(),_x.crossVectors(n,_z),_x.lengthSq()===0&&(Math.abs(n.z)===1?_z.x+=1e-4:_z.z+=1e-4,_z.normalize(),_x.crossVectors(n,_z)),_x.normalize(),_y.crossVectors(_z,_x),i[0]=_x.x,i[4]=_y.x,i[8]=_z.x,i[1]=_x.y,i[5]=_y.y,i[9]=_z.y,i[2]=_x.z,i[6]=_y.z,i[10]=_z.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],f=n[13],p=n[2],_=n[6],g=n[10],v=n[14],F=n[3],y=n[7],x=n[11],b=n[15],L=i[0],G=i[4],M=i[8],S=i[12],E=i[1],I=i[5],q=i[9],Y=i[13],J=i[2],de=i[6],fe=i[10],pe=i[14],X=i[3],O=i[7],j=i[11],re=i[15];return s[0]=a*L+o*E+c*J+l*X,s[4]=a*G+o*I+c*de+l*O,s[8]=a*M+o*q+c*fe+l*j,s[12]=a*S+o*Y+c*pe+l*re,s[1]=u*L+h*E+d*J+f*X,s[5]=u*G+h*I+d*de+f*O,s[9]=u*M+h*q+d*fe+f*j,s[13]=u*S+h*Y+d*pe+f*re,s[2]=p*L+_*E+g*J+v*X,s[6]=p*G+_*I+g*de+v*O,s[10]=p*M+_*q+g*fe+v*j,s[14]=p*S+_*Y+g*pe+v*re,s[3]=F*L+y*E+x*J+b*X,s[7]=F*G+y*I+x*de+b*O,s[11]=F*M+y*q+x*fe+b*j,s[15]=F*S+y*Y+x*pe+b*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],p=e[3],_=e[7],g=e[11],v=e[15];return p*(+s*c*h-i*l*h-s*o*d+n*l*d+i*o*f-n*c*f)+_*(+t*c*f-t*l*d+s*a*d-i*a*f+i*l*u-s*c*u)+g*(+t*l*h-t*o*f-s*a*h+n*a*f+s*o*u-n*l*u)+v*(-i*o*u-t*c*h+t*o*d+i*a*h-n*a*d+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],p=e[12],_=e[13],g=e[14],v=e[15],F=h*g*l-_*d*l+_*c*f-o*g*f-h*c*v+o*d*v,y=p*d*l-u*g*l-p*c*f+a*g*f+u*c*v-a*d*v,x=u*_*l-p*h*l+p*o*f-a*_*f-u*o*v+a*h*v,b=p*h*c-u*_*c-p*o*d+a*_*d+u*o*g-a*h*g,L=t*F+n*y+i*x+s*b;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/L;return e[0]=F*G,e[1]=(_*d*s-h*g*s-_*i*f+n*g*f+h*i*v-n*d*v)*G,e[2]=(o*g*s-_*c*s+_*i*l-n*g*l-o*i*v+n*c*v)*G,e[3]=(h*c*s-o*d*s-h*i*l+n*d*l+o*i*f-n*c*f)*G,e[4]=y*G,e[5]=(u*g*s-p*d*s+p*i*f-t*g*f-u*i*v+t*d*v)*G,e[6]=(p*c*s-a*g*s-p*i*l+t*g*l+a*i*v-t*c*v)*G,e[7]=(a*d*s-u*c*s+u*i*l-t*d*l-a*i*f+t*c*f)*G,e[8]=x*G,e[9]=(p*h*s-u*_*s-p*n*f+t*_*f+u*n*v-t*h*v)*G,e[10]=(a*_*s-p*o*s+p*n*l-t*_*l-a*n*v+t*o*v)*G,e[11]=(u*o*s-a*h*s-u*n*l+t*h*l+a*n*f-t*o*f)*G,e[12]=b*G,e[13]=(u*_*i-p*h*i+p*n*d-t*_*d-u*n*g+t*h*g)*G,e[14]=(p*o*i-a*_*i-p*n*c+t*_*c+a*n*g-t*o*g)*G,e[15]=(a*h*i-u*o*i+u*n*c-t*h*c-a*n*d+t*o*d)*G,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,u*o+n,u*c-i*a,0,l*c-i*o,u*c+i*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,h=o+o,d=s*l,f=s*u,p=s*h,_=a*u,g=a*h,v=o*h,F=c*l,y=c*u,x=c*h,b=n.x,L=n.y,G=n.z;return i[0]=(1-(_+v))*b,i[1]=(f+x)*b,i[2]=(p-y)*b,i[3]=0,i[4]=(f-x)*L,i[5]=(1-(d+v))*L,i[6]=(g+F)*L,i[7]=0,i[8]=(p+y)*G,i[9]=(g-F)*G,i[10]=(1-(d+_))*G,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=_v1$5.set(i[0],i[1],i[2]).length();const a=_v1$5.set(i[4],i[5],i[6]).length(),o=_v1$5.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],_m1$4.copy(this);const l=1/s,u=1/a,h=1/o;return _m1$4.elements[0]*=l,_m1$4.elements[1]*=l,_m1$4.elements[2]*=l,_m1$4.elements[4]*=u,_m1$4.elements[5]*=u,_m1$4.elements[6]*=u,_m1$4.elements[8]*=h,_m1$4.elements[9]*=h,_m1$4.elements[10]*=h,t.setFromRotationMatrix(_m1$4),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=WebGLCoordinateSystem){const c=this.elements,l=2*s/(t-e),u=2*s/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i);let f,p;if(o===WebGLCoordinateSystem)f=-(a+s)/(a-s),p=-2*a*s/(a-s);else if(o===WebGPUCoordinateSystem)f=-a/(a-s),p=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=p,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=WebGLCoordinateSystem){const c=this.elements,l=1/(t-e),u=1/(n-i),h=1/(a-s),d=(t+e)*l,f=(n+i)*u;let p,_;if(o===WebGLCoordinateSystem)p=(a+s)*h,_=-2*h;else if(o===WebGPUCoordinateSystem)p=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-p,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const _v1$5=new Vector3,_m1$4=new Matrix4,_zero=new Vector3(0,0,0),_one=new Vector3(1,1,1),_x=new Vector3,_y=new Vector3,_z=new Vector3,_matrix$2=new Matrix4,_quaternion$3=new Quaternion;class Euler{constructor(e=0,t=0,n=0,i=Euler.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],c=i[1],l=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(clamp(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-clamp(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(clamp(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-clamp(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(clamp(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-clamp(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return _matrix$2.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_matrix$2,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _quaternion$3.setFromEuler(this),this.setFromQuaternion(_quaternion$3,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Euler.DEFAULT_ORDER="XYZ";class Layers{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _object3DId=0;const _v1$4=new Vector3,_q1=new Quaternion,_m1$3=new Matrix4,_target=new Vector3,_position$3=new Vector3,_scale$2=new Vector3,_quaternion$2=new Quaternion,_xAxis=new Vector3(1,0,0),_yAxis=new Vector3(0,1,0),_zAxis=new Vector3(0,0,1),_addedEvent={type:"added"},_removedEvent={type:"removed"},_childaddedEvent={type:"childadded",child:null},_childremovedEvent={type:"childremoved",child:null};class Object3D extends EventDispatcher{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_object3DId++}),this.uuid=generateUUID(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Object3D.DEFAULT_UP.clone();const e=new Vector3,t=new Euler,n=new Quaternion,i=new Vector3(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Matrix4},normalMatrix:{value:new Matrix3}}),this.matrix=new Matrix4,this.matrixWorld=new Matrix4,this.matrixAutoUpdate=Object3D.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Object3D.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Layers,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _q1.setFromAxisAngle(e,t),this.quaternion.multiply(_q1),this}rotateOnWorldAxis(e,t){return _q1.setFromAxisAngle(e,t),this.quaternion.premultiply(_q1),this}rotateX(e){return this.rotateOnAxis(_xAxis,e)}rotateY(e){return this.rotateOnAxis(_yAxis,e)}rotateZ(e){return this.rotateOnAxis(_zAxis,e)}translateOnAxis(e,t){return _v1$4.copy(e).applyQuaternion(this.quaternion),this.position.add(_v1$4.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_xAxis,e)}translateY(e){return this.translateOnAxis(_yAxis,e)}translateZ(e){return this.translateOnAxis(_zAxis,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_m1$3.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?_target.copy(e):_target.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),_position$3.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_m1$3.lookAt(_position$3,_target,this.up):_m1$3.lookAt(_target,_position$3,this.up),this.quaternion.setFromRotationMatrix(_m1$3),i&&(_m1$3.extractRotation(i.matrixWorld),_q1.setFromRotationMatrix(_m1$3),this.quaternion.premultiply(_q1.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_addedEvent),_childaddedEvent.child=e,this.dispatchEvent(_childaddedEvent),_childaddedEvent.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_removedEvent),_childremovedEvent.child=e,this.dispatchEvent(_childremovedEvent),_childremovedEvent.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_m1$3.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_m1$3.multiply(e.parent.matrixWorld)),e.applyMatrix4(_m1$3),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_addedEvent),_childaddedEvent.child=e,this.dispatchEvent(_childaddedEvent),_childaddedEvent.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_position$3,e,_scale$2),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_position$3,_quaternion$2,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),p=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Object3D.DEFAULT_UP=new Vector3(0,1,0);Object3D.DEFAULT_MATRIX_AUTO_UPDATE=!0;Object3D.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _v0$2=new Vector3,_v1$3=new Vector3,_v2$2=new Vector3,_v3$2=new Vector3,_vab=new Vector3,_vac=new Vector3,_vbc=new Vector3,_vap=new Vector3,_vbp=new Vector3,_vcp=new Vector3,_v40=new Vector4,_v41=new Vector4,_v42=new Vector4;class Triangle{constructor(e=new Vector3,t=new Vector3,n=new Vector3){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),_v0$2.subVectors(e,t),i.cross(_v0$2);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){_v0$2.subVectors(i,t),_v1$3.subVectors(n,t),_v2$2.subVectors(e,t);const a=_v0$2.dot(_v0$2),o=_v0$2.dot(_v1$3),c=_v0$2.dot(_v2$2),l=_v1$3.dot(_v1$3),u=_v1$3.dot(_v2$2),h=a*l-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,f=(l*c-o*u)*d,p=(a*u-o*c)*d;return s.set(1-f-p,p,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,_v3$2)===null?!1:_v3$2.x>=0&&_v3$2.y>=0&&_v3$2.x+_v3$2.y<=1}static getInterpolation(e,t,n,i,s,a,o,c){return this.getBarycoord(e,t,n,i,_v3$2)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,_v3$2.x),c.addScaledVector(a,_v3$2.y),c.addScaledVector(o,_v3$2.z),c)}static getInterpolatedAttribute(e,t,n,i,s,a){return _v40.setScalar(0),_v41.setScalar(0),_v42.setScalar(0),_v40.fromBufferAttribute(e,t),_v41.fromBufferAttribute(e,n),_v42.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(_v40,s.x),a.addScaledVector(_v41,s.y),a.addScaledVector(_v42,s.z),a}static isFrontFacing(e,t,n,i){return _v0$2.subVectors(n,t),_v1$3.subVectors(e,t),_v0$2.cross(_v1$3).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _v0$2.subVectors(this.c,this.b),_v1$3.subVectors(this.a,this.b),_v0$2.cross(_v1$3).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Triangle.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Triangle.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Triangle.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Triangle.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Triangle.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;_vab.subVectors(i,n),_vac.subVectors(s,n),_vap.subVectors(e,n);const c=_vab.dot(_vap),l=_vac.dot(_vap);if(c<=0&&l<=0)return t.copy(n);_vbp.subVectors(e,i);const u=_vab.dot(_vbp),h=_vac.dot(_vbp);if(u>=0&&h<=u)return t.copy(i);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(_vab,a);_vcp.subVectors(e,s);const f=_vab.dot(_vcp),p=_vac.dot(_vcp);if(p>=0&&f<=p)return t.copy(s);const _=f*l-c*p;if(_<=0&&l>=0&&p<=0)return o=l/(l-p),t.copy(n).addScaledVector(_vac,o);const g=u*p-f*h;if(g<=0&&h-u>=0&&f-p>=0)return _vbc.subVectors(s,i),o=(h-u)/(h-u+(f-p)),t.copy(i).addScaledVector(_vbc,o);const v=1/(g+_+d);return a=_*v,o=d*v,t.copy(n).addScaledVector(_vab,a).addScaledVector(_vac,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const _colorKeywords={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_hslA={h:0,s:0,l:0},_hslB={h:0,s:0,l:0};function hue2rgb(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Color{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=SRGBColorSpace){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ColorManagement.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=ColorManagement.workingColorSpace){return this.r=e,this.g=t,this.b=n,ColorManagement.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=ColorManagement.workingColorSpace){if(e=euclideanModulo(e,1),t=clamp(t,0,1),n=clamp(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=hue2rgb(a,s,e+1/3),this.g=hue2rgb(a,s,e),this.b=hue2rgb(a,s,e-1/3)}return ColorManagement.toWorkingColorSpace(this,i),this}setStyle(e,t=SRGBColorSpace){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=SRGBColorSpace){const n=_colorKeywords[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=SRGBToLinear(e.r),this.g=SRGBToLinear(e.g),this.b=SRGBToLinear(e.b),this}copyLinearToSRGB(e){return this.r=LinearToSRGB(e.r),this.g=LinearToSRGB(e.g),this.b=LinearToSRGB(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=SRGBColorSpace){return ColorManagement.fromWorkingColorSpace(_color.copy(this),e),Math.round(clamp(_color.r*255,0,255))*65536+Math.round(clamp(_color.g*255,0,255))*256+Math.round(clamp(_color.b*255,0,255))}getHexString(e=SRGBColorSpace){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ColorManagement.workingColorSpace){ColorManagement.fromWorkingColorSpace(_color.copy(this),t);const n=_color.r,i=_color.g,s=_color.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(i-s)/h+(i<s?6:0);break;case i:c=(s-n)/h+2;break;case s:c=(n-i)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=ColorManagement.workingColorSpace){return ColorManagement.fromWorkingColorSpace(_color.copy(this),t),e.r=_color.r,e.g=_color.g,e.b=_color.b,e}getStyle(e=SRGBColorSpace){ColorManagement.fromWorkingColorSpace(_color.copy(this),e);const t=_color.r,n=_color.g,i=_color.b;return e!==SRGBColorSpace?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(_hslA),this.setHSL(_hslA.h+e,_hslA.s+t,_hslA.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(_hslA),e.getHSL(_hslB);const n=lerp(_hslA.h,_hslB.h,t),i=lerp(_hslA.s,_hslB.s,t),s=lerp(_hslA.l,_hslB.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _color=new Color;Color.NAMES=_colorKeywords;let _materialId=0;class Material extends EventDispatcher{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_materialId++}),this.uuid=generateUUID(),this.name="",this.blending=NormalBlending,this.side=FrontSide,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=SrcAlphaFactor,this.blendDst=OneMinusSrcAlphaFactor,this.blendEquation=AddEquation,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Color(0,0,0),this.blendAlpha=0,this.depthFunc=LessEqualDepth,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=AlwaysStencilFunc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=KeepStencilOp,this.stencilZFail=KeepStencilOp,this.stencilZPass=KeepStencilOp,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==NormalBlending&&(n.blending=this.blending),this.side!==FrontSide&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==SrcAlphaFactor&&(n.blendSrc=this.blendSrc),this.blendDst!==OneMinusSrcAlphaFactor&&(n.blendDst=this.blendDst),this.blendEquation!==AddEquation&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==LessEqualDepth&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==AlwaysStencilFunc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==KeepStencilOp&&(n.stencilFail=this.stencilFail),this.stencilZFail!==KeepStencilOp&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==KeepStencilOp&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class MeshBasicMaterial extends Material{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Color(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Euler,this.combine=MultiplyOperation,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _vector$9=new Vector3,_vector2$1=new Vector2;class BufferAttribute{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=StaticDrawUsage,this.updateRanges=[],this.gpuType=FloatType,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)_vector2$1.fromBufferAttribute(this,t),_vector2$1.applyMatrix3(e),this.setXY(t,_vector2$1.x,_vector2$1.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)_vector$9.fromBufferAttribute(this,t),_vector$9.applyMatrix3(e),this.setXYZ(t,_vector$9.x,_vector$9.y,_vector$9.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)_vector$9.fromBufferAttribute(this,t),_vector$9.applyMatrix4(e),this.setXYZ(t,_vector$9.x,_vector$9.y,_vector$9.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_vector$9.fromBufferAttribute(this,t),_vector$9.applyNormalMatrix(e),this.setXYZ(t,_vector$9.x,_vector$9.y,_vector$9.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_vector$9.fromBufferAttribute(this,t),_vector$9.transformDirection(e),this.setXYZ(t,_vector$9.x,_vector$9.y,_vector$9.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=denormalize(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=normalize$1(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=denormalize(t,this.array)),t}setX(e,t){return this.normalized&&(t=normalize$1(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=denormalize(t,this.array)),t}setY(e,t){return this.normalized&&(t=normalize$1(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=denormalize(t,this.array)),t}setZ(e,t){return this.normalized&&(t=normalize$1(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=denormalize(t,this.array)),t}setW(e,t){return this.normalized&&(t=normalize$1(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=normalize$1(t,this.array),n=normalize$1(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=normalize$1(t,this.array),n=normalize$1(n,this.array),i=normalize$1(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=normalize$1(t,this.array),n=normalize$1(n,this.array),i=normalize$1(i,this.array),s=normalize$1(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==StaticDrawUsage&&(e.usage=this.usage),e}}class Uint16BufferAttribute extends BufferAttribute{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Uint32BufferAttribute extends BufferAttribute{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Float32BufferAttribute extends BufferAttribute{constructor(e,t,n){super(new Float32Array(e),t,n)}}let _id$2=0;const _m1$2=new Matrix4,_obj=new Object3D,_offset=new Vector3,_box$2=new Box3,_boxMorphTargets=new Box3,_vector$8=new Vector3;class BufferGeometry extends EventDispatcher{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_id$2++}),this.uuid=generateUUID(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(arrayNeedsUint32(e)?Uint32BufferAttribute:Uint16BufferAttribute)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Matrix3().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _m1$2.makeRotationFromQuaternion(e),this.applyMatrix4(_m1$2),this}rotateX(e){return _m1$2.makeRotationX(e),this.applyMatrix4(_m1$2),this}rotateY(e){return _m1$2.makeRotationY(e),this.applyMatrix4(_m1$2),this}rotateZ(e){return _m1$2.makeRotationZ(e),this.applyMatrix4(_m1$2),this}translate(e,t,n){return _m1$2.makeTranslation(e,t,n),this.applyMatrix4(_m1$2),this}scale(e,t,n){return _m1$2.makeScale(e,t,n),this.applyMatrix4(_m1$2),this}lookAt(e){return _obj.lookAt(e),_obj.updateMatrix(),this.applyMatrix4(_obj.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_offset).negate(),this.translate(_offset.x,_offset.y,_offset.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Float32BufferAttribute(n,3))}else{for(let n=0,i=t.count;n<i;n++){const s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Box3);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Vector3(-1/0,-1/0,-1/0),new Vector3(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];_box$2.setFromBufferAttribute(s),this.morphTargetsRelative?(_vector$8.addVectors(this.boundingBox.min,_box$2.min),this.boundingBox.expandByPoint(_vector$8),_vector$8.addVectors(this.boundingBox.max,_box$2.max),this.boundingBox.expandByPoint(_vector$8)):(this.boundingBox.expandByPoint(_box$2.min),this.boundingBox.expandByPoint(_box$2.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sphere);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Vector3,1/0);return}if(e){const n=this.boundingSphere.center;if(_box$2.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];_boxMorphTargets.setFromBufferAttribute(o),this.morphTargetsRelative?(_vector$8.addVectors(_box$2.min,_boxMorphTargets.min),_box$2.expandByPoint(_vector$8),_vector$8.addVectors(_box$2.max,_boxMorphTargets.max),_box$2.expandByPoint(_vector$8)):(_box$2.expandByPoint(_boxMorphTargets.min),_box$2.expandByPoint(_boxMorphTargets.max))}_box$2.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)_vector$8.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(_vector$8));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)_vector$8.fromBufferAttribute(o,l),c&&(_offset.fromBufferAttribute(e,l),_vector$8.add(_offset)),i=Math.max(i,n.distanceToSquared(_vector$8))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new BufferAttribute(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let M=0;M<n.count;M++)o[M]=new Vector3,c[M]=new Vector3;const l=new Vector3,u=new Vector3,h=new Vector3,d=new Vector2,f=new Vector2,p=new Vector2,_=new Vector3,g=new Vector3;function v(M,S,E){l.fromBufferAttribute(n,M),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,E),d.fromBufferAttribute(s,M),f.fromBufferAttribute(s,S),p.fromBufferAttribute(s,E),u.sub(l),h.sub(l),f.sub(d),p.sub(d);const I=1/(f.x*p.y-p.x*f.y);isFinite(I)&&(_.copy(u).multiplyScalar(p.y).addScaledVector(h,-f.y).multiplyScalar(I),g.copy(h).multiplyScalar(f.x).addScaledVector(u,-p.x).multiplyScalar(I),o[M].add(_),o[S].add(_),o[E].add(_),c[M].add(g),c[S].add(g),c[E].add(g))}let F=this.groups;F.length===0&&(F=[{start:0,count:e.count}]);for(let M=0,S=F.length;M<S;++M){const E=F[M],I=E.start,q=E.count;for(let Y=I,J=I+q;Y<J;Y+=3)v(e.getX(Y+0),e.getX(Y+1),e.getX(Y+2))}const y=new Vector3,x=new Vector3,b=new Vector3,L=new Vector3;function G(M){b.fromBufferAttribute(i,M),L.copy(b);const S=o[M];y.copy(S),y.sub(b.multiplyScalar(b.dot(S))).normalize(),x.crossVectors(L,S);const I=x.dot(c[M])<0?-1:1;a.setXYZW(M,y.x,y.y,y.z,I)}for(let M=0,S=F.length;M<S;++M){const E=F[M],I=E.start,q=E.count;for(let Y=I,J=I+q;Y<J;Y+=3)G(e.getX(Y+0)),G(e.getX(Y+1)),G(e.getX(Y+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new BufferAttribute(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new Vector3,s=new Vector3,a=new Vector3,o=new Vector3,c=new Vector3,l=new Vector3,u=new Vector3,h=new Vector3;if(e)for(let d=0,f=e.count;d<f;d+=3){const p=e.getX(d+0),_=e.getX(d+1),g=e.getX(d+2);i.fromBufferAttribute(t,p),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,g),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),o.fromBufferAttribute(n,p),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),o.add(u),c.add(u),l.add(u),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)_vector$8.fromBufferAttribute(e,t),_vector$8.normalize(),e.setXYZ(t,_vector$8.x,_vector$8.y,_vector$8.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,h=o.normalized,d=new l.constructor(c.length*u);let f=0,p=0;for(let _=0,g=c.length;_<g;_++){o.isInterleavedBufferAttribute?f=c[_]*o.data.stride+o.offset:f=c[_]*u;for(let v=0;v<u;v++)d[p++]=l[f++]}return new BufferAttribute(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new BufferGeometry,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,h=l.length;u<h;u++){const d=l[u],f=e(d,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(i[c]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],h=s[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _inverseMatrix$3=new Matrix4,_ray$3=new Ray,_sphere$6=new Sphere,_sphereHitAt=new Vector3,_vA$1=new Vector3,_vB$1=new Vector3,_vC$1=new Vector3,_tempA=new Vector3,_morphA=new Vector3,_intersectionPoint=new Vector3,_intersectionPointWorld=new Vector3;class Mesh extends Object3D{constructor(e=new BufferGeometry,t=new MeshBasicMaterial){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){_morphA.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],h=s[c];u!==0&&(_tempA.fromBufferAttribute(h,e),a?_morphA.addScaledVector(_tempA,u):_morphA.addScaledVector(_tempA.sub(t),u))}t.add(_morphA)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_sphere$6.copy(n.boundingSphere),_sphere$6.applyMatrix4(s),_ray$3.copy(e.ray).recast(e.near),!(_sphere$6.containsPoint(_ray$3.origin)===!1&&(_ray$3.intersectSphere(_sphere$6,_sphereHitAt)===null||_ray$3.origin.distanceToSquared(_sphereHitAt)>(e.far-e.near)**2))&&(_inverseMatrix$3.copy(s).invert(),_ray$3.copy(e.ray).applyMatrix4(_inverseMatrix$3),!(n.boundingBox!==null&&_ray$3.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,_ray$3)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,_=d.length;p<_;p++){const g=d[p],v=a[g.materialIndex],F=Math.max(g.start,f.start),y=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let x=F,b=y;x<b;x+=3){const L=o.getX(x),G=o.getX(x+1),M=o.getX(x+2);i=checkGeometryIntersection(this,v,e,n,l,u,h,L,G,M),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const p=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let g=p,v=_;g<v;g+=3){const F=o.getX(g),y=o.getX(g+1),x=o.getX(g+2);i=checkGeometryIntersection(this,a,e,n,l,u,h,F,y,x),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let p=0,_=d.length;p<_;p++){const g=d[p],v=a[g.materialIndex],F=Math.max(g.start,f.start),y=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let x=F,b=y;x<b;x+=3){const L=x,G=x+1,M=x+2;i=checkGeometryIntersection(this,v,e,n,l,u,h,L,G,M),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const p=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let g=p,v=_;g<v;g+=3){const F=g,y=g+1,x=g+2;i=checkGeometryIntersection(this,a,e,n,l,u,h,F,y,x),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}}function checkIntersection$1(r,e,t,n,i,s,a,o){let c;if(e.side===BackSide?c=n.intersectTriangle(a,s,i,!0,o):c=n.intersectTriangle(i,s,a,e.side===FrontSide,o),c===null)return null;_intersectionPointWorld.copy(o),_intersectionPointWorld.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(_intersectionPointWorld);return l<t.near||l>t.far?null:{distance:l,point:_intersectionPointWorld.clone(),object:r}}function checkGeometryIntersection(r,e,t,n,i,s,a,o,c,l){r.getVertexPosition(o,_vA$1),r.getVertexPosition(c,_vB$1),r.getVertexPosition(l,_vC$1);const u=checkIntersection$1(r,e,t,n,_vA$1,_vB$1,_vC$1,_intersectionPoint);if(u){const h=new Vector3;Triangle.getBarycoord(_intersectionPoint,_vA$1,_vB$1,_vC$1,h),i&&(u.uv=Triangle.getInterpolatedAttribute(i,o,c,l,h,new Vector2)),s&&(u.uv1=Triangle.getInterpolatedAttribute(s,o,c,l,h,new Vector2)),a&&(u.normal=Triangle.getInterpolatedAttribute(a,o,c,l,h,new Vector3),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new Vector3,materialIndex:0};Triangle.getNormal(_vA$1,_vB$1,_vC$1,d.normal),u.face=d,u.barycoord=h}return u}class BoxGeometry extends BufferGeometry{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],h=[];let d=0,f=0;p("z","y","x",-1,-1,n,t,e,a,s,0),p("z","y","x",1,-1,n,t,-e,a,s,1),p("x","z","y",1,1,e,n,t,i,a,2),p("x","z","y",1,-1,e,n,-t,i,a,3),p("x","y","z",1,-1,e,t,n,i,s,4),p("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new Float32BufferAttribute(l,3)),this.setAttribute("normal",new Float32BufferAttribute(u,3)),this.setAttribute("uv",new Float32BufferAttribute(h,2));function p(_,g,v,F,y,x,b,L,G,M,S){const E=x/G,I=b/M,q=x/2,Y=b/2,J=L/2,de=G+1,fe=M+1;let pe=0,X=0;const O=new Vector3;for(let j=0;j<fe;j++){const re=j*I-Y;for(let le=0;le<de;le++){const me=le*E-q;O[_]=me*F,O[g]=re*y,O[v]=J,l.push(O.x,O.y,O.z),O[_]=0,O[g]=0,O[v]=L>0?1:-1,u.push(O.x,O.y,O.z),h.push(le/G),h.push(1-j/M),pe+=1}}for(let j=0;j<M;j++)for(let re=0;re<G;re++){const le=d+re+de*j,me=d+re+de*(j+1),ce=d+(re+1)+de*(j+1),N=d+(re+1)+de*j;c.push(le,me,N),c.push(me,ce,N),X+=6}o.addGroup(f,X,S),f+=X,d+=pe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new BoxGeometry(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function cloneUniforms(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function mergeUniforms(r){const e={};for(let t=0;t<r.length;t++){const n=cloneUniforms(r[t]);for(const i in n)e[i]=n[i]}return e}function cloneUniformsGroups(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function getUnlitUniformColorSpace(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ColorManagement.workingColorSpace}const UniformsUtils={clone:cloneUniforms,merge:mergeUniforms};var default_vertex=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,default_fragment=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ShaderMaterial extends Material{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=default_vertex,this.fragmentShader=default_fragment,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cloneUniforms(e.uniforms),this.uniformsGroups=cloneUniformsGroups(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Camera extends Object3D{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Matrix4,this.projectionMatrix=new Matrix4,this.projectionMatrixInverse=new Matrix4,this.coordinateSystem=WebGLCoordinateSystem}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _v3$1=new Vector3,_minTarget=new Vector2,_maxTarget=new Vector2;class PerspectiveCamera extends Camera{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=RAD2DEG*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(DEG2RAD*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return RAD2DEG*2*Math.atan(Math.tan(DEG2RAD*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){_v3$1.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(_v3$1.x,_v3$1.y).multiplyScalar(-e/_v3$1.z),_v3$1.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_v3$1.x,_v3$1.y).multiplyScalar(-e/_v3$1.z)}getViewSize(e,t){return this.getViewBounds(e,_minTarget,_maxTarget),t.subVectors(_maxTarget,_minTarget)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(DEG2RAD*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const fov=-90,aspect=1;class CubeCamera extends Object3D{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new PerspectiveCamera(fov,aspect,e,t);i.layers=this.layers,this.add(i);const s=new PerspectiveCamera(fov,aspect,e,t);s.layers=this.layers,this.add(s);const a=new PerspectiveCamera(fov,aspect,e,t);a.layers=this.layers,this.add(a);const o=new PerspectiveCamera(fov,aspect,e,t);o.layers=this.layers,this.add(o);const c=new PerspectiveCamera(fov,aspect,e,t);c.layers=this.layers,this.add(c);const l=new PerspectiveCamera(fov,aspect,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===WebGLCoordinateSystem)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===WebGPUCoordinateSystem)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class CubeTexture extends Texture{constructor(e,t,n,i,s,a,o,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:CubeReflectionMapping,super(e,t,n,i,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class WebGLCubeRenderTarget extends WebGLRenderTarget{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new CubeTexture(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:LinearFilter}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new BoxGeometry(5,5,5),s=new ShaderMaterial({name:"CubemapFromEquirect",uniforms:cloneUniforms(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:BackSide,blending:NoBlending});s.uniforms.tEquirect.value=t;const a=new Mesh(i,s),o=t.minFilter;return t.minFilter===LinearMipmapLinearFilter&&(t.minFilter=LinearFilter),new CubeCamera(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}const _vector1=new Vector3,_vector2=new Vector3,_normalMatrix=new Matrix3;class Plane{constructor(e=new Vector3(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=_vector1.subVectors(n,t).cross(_vector2.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(_vector1),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||_normalMatrix.getNormalMatrix(e),i=this.coplanarPoint(_vector1).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _sphere$5=new Sphere,_vector$7=new Vector3;class Frustum{constructor(e=new Plane,t=new Plane,n=new Plane,i=new Plane,s=new Plane,a=new Plane){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=WebGLCoordinateSystem){const n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],c=i[3],l=i[4],u=i[5],h=i[6],d=i[7],f=i[8],p=i[9],_=i[10],g=i[11],v=i[12],F=i[13],y=i[14],x=i[15];if(n[0].setComponents(c-s,d-l,g-f,x-v).normalize(),n[1].setComponents(c+s,d+l,g+f,x+v).normalize(),n[2].setComponents(c+a,d+u,g+p,x+F).normalize(),n[3].setComponents(c-a,d-u,g-p,x-F).normalize(),n[4].setComponents(c-o,d-h,g-_,x-y).normalize(),t===WebGLCoordinateSystem)n[5].setComponents(c+o,d+h,g+_,x+y).normalize();else if(t===WebGPUCoordinateSystem)n[5].setComponents(o,h,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_sphere$5.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_sphere$5.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_sphere$5)}intersectsSprite(e){return _sphere$5.center.set(0,0,0),_sphere$5.radius=.7071067811865476,_sphere$5.applyMatrix4(e.matrixWorld),this.intersectsSphere(_sphere$5)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(_vector$7.x=i.normal.x>0?e.max.x:e.min.x,_vector$7.y=i.normal.y>0?e.max.y:e.min.y,_vector$7.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(_vector$7)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function WebGLAnimation(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function WebGLAttributes(r){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,h=l.byteLength,d=r.createBuffer();r.bindBuffer(c,d),r.bufferData(c,l,u),o.onUploadCallback();let f;if(l instanceof Float32Array)f=r.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=r.SHORT;else if(l instanceof Uint32Array)f=r.UNSIGNED_INT;else if(l instanceof Int32Array)f=r.INT;else if(l instanceof Int8Array)f=r.BYTE;else if(l instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){const u=c.array,h=c.updateRanges;if(r.bindBuffer(l,o),h.length===0)r.bufferSubData(l,0,u);else{h.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<h.length;f++){const p=h[d],_=h[f];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,p=h.length;f<p;f++){const _=h[f];r.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(r.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:s,update:a}}class PlaneGeometry extends BufferGeometry{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,u=c+1,h=e/o,d=t/c,f=[],p=[],_=[],g=[];for(let v=0;v<u;v++){const F=v*d-a;for(let y=0;y<l;y++){const x=y*h-s;p.push(x,-F,0),_.push(0,0,1),g.push(y/o),g.push(1-v/c)}}for(let v=0;v<c;v++)for(let F=0;F<o;F++){const y=F+l*v,x=F+l*(v+1),b=F+1+l*(v+1),L=F+1+l*v;f.push(y,x,L),f.push(x,b,L)}this.setIndex(f),this.setAttribute("position",new Float32BufferAttribute(p,3)),this.setAttribute("normal",new Float32BufferAttribute(_,3)),this.setAttribute("uv",new Float32BufferAttribute(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new PlaneGeometry(e.width,e.height,e.widthSegments,e.heightSegments)}}var alphahash_fragment=`#ifdef USE_ALPHAHASH
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
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment="gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
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
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
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
}`,ShaderChunk={alphahash_fragment,alphahash_pars_fragment,alphamap_fragment,alphamap_pars_fragment,alphatest_fragment,alphatest_pars_fragment,aomap_fragment,aomap_pars_fragment,batching_pars_vertex,batching_vertex,begin_vertex,beginnormal_vertex,bsdfs,iridescence_fragment,bumpmap_pars_fragment,clipping_planes_fragment,clipping_planes_pars_fragment,clipping_planes_pars_vertex,clipping_planes_vertex,color_fragment,color_pars_fragment,color_pars_vertex,color_vertex,common,cube_uv_reflection_fragment,defaultnormal_vertex,displacementmap_pars_vertex,displacementmap_vertex,emissivemap_fragment,emissivemap_pars_fragment,colorspace_fragment,colorspace_pars_fragment,envmap_fragment,envmap_common_pars_fragment,envmap_pars_fragment,envmap_pars_vertex,envmap_physical_pars_fragment,envmap_vertex,fog_vertex,fog_pars_vertex,fog_fragment,fog_pars_fragment,gradientmap_pars_fragment,lightmap_pars_fragment,lights_lambert_fragment,lights_lambert_pars_fragment,lights_pars_begin,lights_toon_fragment,lights_toon_pars_fragment,lights_phong_fragment,lights_phong_pars_fragment,lights_physical_fragment,lights_physical_pars_fragment,lights_fragment_begin,lights_fragment_maps,lights_fragment_end,logdepthbuf_fragment,logdepthbuf_pars_fragment,logdepthbuf_pars_vertex,logdepthbuf_vertex,map_fragment,map_pars_fragment,map_particle_fragment,map_particle_pars_fragment,metalnessmap_fragment,metalnessmap_pars_fragment,morphinstance_vertex,morphcolor_vertex,morphnormal_vertex,morphtarget_pars_vertex,morphtarget_vertex,normal_fragment_begin,normal_fragment_maps,normal_pars_fragment,normal_pars_vertex,normal_vertex,normalmap_pars_fragment,clearcoat_normal_fragment_begin,clearcoat_normal_fragment_maps,clearcoat_pars_fragment,iridescence_pars_fragment,opaque_fragment,packing,premultiplied_alpha_fragment,project_vertex,dithering_fragment,dithering_pars_fragment,roughnessmap_fragment,roughnessmap_pars_fragment,shadowmap_pars_fragment,shadowmap_pars_vertex,shadowmap_vertex,shadowmask_pars_fragment,skinbase_vertex,skinning_pars_vertex,skinning_vertex,skinnormal_vertex,specularmap_fragment,specularmap_pars_fragment,tonemapping_fragment,tonemapping_pars_fragment,transmission_fragment,transmission_pars_fragment,uv_pars_fragment,uv_pars_vertex,uv_vertex,worldpos_vertex,background_vert:vertex$h,background_frag:fragment$h,backgroundCube_vert:vertex$g,backgroundCube_frag:fragment$g,cube_vert:vertex$f,cube_frag:fragment$f,depth_vert:vertex$e,depth_frag:fragment$e,distanceRGBA_vert:vertex$d,distanceRGBA_frag:fragment$d,equirect_vert:vertex$c,equirect_frag:fragment$c,linedashed_vert:vertex$b,linedashed_frag:fragment$b,meshbasic_vert:vertex$a,meshbasic_frag:fragment$a,meshlambert_vert:vertex$9,meshlambert_frag:fragment$9,meshmatcap_vert:vertex$8,meshmatcap_frag:fragment$8,meshnormal_vert:vertex$7,meshnormal_frag:fragment$7,meshphong_vert:vertex$6,meshphong_frag:fragment$6,meshphysical_vert:vertex$5,meshphysical_frag:fragment$5,meshtoon_vert:vertex$4,meshtoon_frag:fragment$4,points_vert:vertex$3,points_frag:fragment$3,shadow_vert:vertex$2,shadow_frag:fragment$2,sprite_vert:vertex$1,sprite_frag:fragment$1},UniformsLib={common:{diffuse:{value:new Color(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Matrix3},alphaMap:{value:null},alphaMapTransform:{value:new Matrix3},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Matrix3}},envmap:{envMap:{value:null},envMapRotation:{value:new Matrix3},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Matrix3}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Matrix3}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Matrix3},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Matrix3},normalScale:{value:new Vector2(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Matrix3},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Matrix3}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Matrix3}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Matrix3}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Color(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Color(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Matrix3},alphaTest:{value:0},uvTransform:{value:new Matrix3}},sprite:{diffuse:{value:new Color(16777215)},opacity:{value:1},center:{value:new Vector2(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Matrix3},alphaMap:{value:null},alphaMapTransform:{value:new Matrix3},alphaTest:{value:0}}},ShaderLib={basic:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.specularmap,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.fog]),vertexShader:ShaderChunk.meshbasic_vert,fragmentShader:ShaderChunk.meshbasic_frag},lambert:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.specularmap,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color(0)}}]),vertexShader:ShaderChunk.meshlambert_vert,fragmentShader:ShaderChunk.meshlambert_frag},phong:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.specularmap,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color(0)},specular:{value:new Color(1118481)},shininess:{value:30}}]),vertexShader:ShaderChunk.meshphong_vert,fragmentShader:ShaderChunk.meshphong_frag},standard:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.roughnessmap,UniformsLib.metalnessmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ShaderChunk.meshphysical_vert,fragmentShader:ShaderChunk.meshphysical_frag},toon:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.gradientmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color(0)}}]),vertexShader:ShaderChunk.meshtoon_vert,fragmentShader:ShaderChunk.meshtoon_frag},matcap:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.fog,{matcap:{value:null}}]),vertexShader:ShaderChunk.meshmatcap_vert,fragmentShader:ShaderChunk.meshmatcap_frag},points:{uniforms:mergeUniforms([UniformsLib.points,UniformsLib.fog]),vertexShader:ShaderChunk.points_vert,fragmentShader:ShaderChunk.points_frag},dashed:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ShaderChunk.linedashed_vert,fragmentShader:ShaderChunk.linedashed_frag},depth:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.displacementmap]),vertexShader:ShaderChunk.depth_vert,fragmentShader:ShaderChunk.depth_frag},normal:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,{opacity:{value:1}}]),vertexShader:ShaderChunk.meshnormal_vert,fragmentShader:ShaderChunk.meshnormal_frag},sprite:{uniforms:mergeUniforms([UniformsLib.sprite,UniformsLib.fog]),vertexShader:ShaderChunk.sprite_vert,fragmentShader:ShaderChunk.sprite_frag},background:{uniforms:{uvTransform:{value:new Matrix3},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ShaderChunk.background_vert,fragmentShader:ShaderChunk.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Matrix3}},vertexShader:ShaderChunk.backgroundCube_vert,fragmentShader:ShaderChunk.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ShaderChunk.cube_vert,fragmentShader:ShaderChunk.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ShaderChunk.equirect_vert,fragmentShader:ShaderChunk.equirect_frag},distanceRGBA:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.displacementmap,{referencePosition:{value:new Vector3},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ShaderChunk.distanceRGBA_vert,fragmentShader:ShaderChunk.distanceRGBA_frag},shadow:{uniforms:mergeUniforms([UniformsLib.lights,UniformsLib.fog,{color:{value:new Color(0)},opacity:{value:1}}]),vertexShader:ShaderChunk.shadow_vert,fragmentShader:ShaderChunk.shadow_frag}};ShaderLib.physical={uniforms:mergeUniforms([ShaderLib.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Matrix3},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Matrix3},clearcoatNormalScale:{value:new Vector2(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Matrix3},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Matrix3},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Matrix3},sheen:{value:0},sheenColor:{value:new Color(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Matrix3},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Matrix3},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Matrix3},transmissionSamplerSize:{value:new Vector2},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Matrix3},attenuationDistance:{value:0},attenuationColor:{value:new Color(0)},specularColor:{value:new Color(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Matrix3},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Matrix3},anisotropyVector:{value:new Vector2},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Matrix3}}]),vertexShader:ShaderChunk.meshphysical_vert,fragmentShader:ShaderChunk.meshphysical_frag};const _rgb={r:0,b:0,g:0},_e1$1=new Euler,_m1$1=new Matrix4;function WebGLBackground(r,e,t,n,i,s,a){const o=new Color(0);let c=s===!0?0:1,l,u,h=null,d=0,f=null;function p(F){let y=F.isScene===!0?F.background:null;return y&&y.isTexture&&(y=(F.backgroundBlurriness>0?t:e).get(y)),y}function _(F){let y=!1;const x=p(F);x===null?v(o,c):x&&x.isColor&&(v(x,1),y=!0);const b=r.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,a):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function g(F,y){const x=p(y);x&&(x.isCubeTexture||x.mapping===CubeUVReflectionMapping)?(u===void 0&&(u=new Mesh(new BoxGeometry(1,1,1),new ShaderMaterial({name:"BackgroundCubeMaterial",uniforms:cloneUniforms(ShaderLib.backgroundCube.uniforms),vertexShader:ShaderLib.backgroundCube.vertexShader,fragmentShader:ShaderLib.backgroundCube.fragmentShader,side:BackSide,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,L,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),_e1$1.copy(y.backgroundRotation),_e1$1.x*=-1,_e1$1.y*=-1,_e1$1.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(_e1$1.y*=-1,_e1$1.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(_m1$1.makeRotationFromEuler(_e1$1)),u.material.toneMapped=ColorManagement.getTransfer(x.colorSpace)!==SRGBTransfer,(h!==x||d!==x.version||f!==r.toneMapping)&&(u.material.needsUpdate=!0,h=x,d=x.version,f=r.toneMapping),u.layers.enableAll(),F.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Mesh(new PlaneGeometry(2,2),new ShaderMaterial({name:"BackgroundMaterial",uniforms:cloneUniforms(ShaderLib.background.uniforms),vertexShader:ShaderLib.background.vertexShader,fragmentShader:ShaderLib.background.fragmentShader,side:FrontSide,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=ColorManagement.getTransfer(x.colorSpace)!==SRGBTransfer,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||f!==r.toneMapping)&&(l.material.needsUpdate=!0,h=x,d=x.version,f=r.toneMapping),l.layers.enableAll(),F.unshift(l,l.geometry,l.material,0,0,null))}function v(F,y){F.getRGB(_rgb,getUnlitUniformColorSpace(r)),n.buffers.color.setClear(_rgb.r,_rgb.g,_rgb.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(F,y=1){o.set(F),c=y,v(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(F){c=F,v(o,c)},render:_,addToRenderList:g}}function WebGLBindingStates(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,a=!1;function o(E,I,q,Y,J){let de=!1;const fe=h(Y,q,I);s!==fe&&(s=fe,l(s.object)),de=f(E,Y,q,J),de&&p(E,Y,q,J),J!==null&&e.update(J,r.ELEMENT_ARRAY_BUFFER),(de||a)&&(a=!1,x(E,I,q,Y),J!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function c(){return r.createVertexArray()}function l(E){return r.bindVertexArray(E)}function u(E){return r.deleteVertexArray(E)}function h(E,I,q){const Y=q.wireframe===!0;let J=n[E.id];J===void 0&&(J={},n[E.id]=J);let de=J[I.id];de===void 0&&(de={},J[I.id]=de);let fe=de[Y];return fe===void 0&&(fe=d(c()),de[Y]=fe),fe}function d(E){const I=[],q=[],Y=[];for(let J=0;J<t;J++)I[J]=0,q[J]=0,Y[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:q,attributeDivisors:Y,object:E,attributes:{},index:null}}function f(E,I,q,Y){const J=s.attributes,de=I.attributes;let fe=0;const pe=q.getAttributes();for(const X in pe)if(pe[X].location>=0){const j=J[X];let re=de[X];if(re===void 0&&(X==="instanceMatrix"&&E.instanceMatrix&&(re=E.instanceMatrix),X==="instanceColor"&&E.instanceColor&&(re=E.instanceColor)),j===void 0||j.attribute!==re||re&&j.data!==re.data)return!0;fe++}return s.attributesNum!==fe||s.index!==Y}function p(E,I,q,Y){const J={},de=I.attributes;let fe=0;const pe=q.getAttributes();for(const X in pe)if(pe[X].location>=0){let j=de[X];j===void 0&&(X==="instanceMatrix"&&E.instanceMatrix&&(j=E.instanceMatrix),X==="instanceColor"&&E.instanceColor&&(j=E.instanceColor));const re={};re.attribute=j,j&&j.data&&(re.data=j.data),J[X]=re,fe++}s.attributes=J,s.attributesNum=fe,s.index=Y}function _(){const E=s.newAttributes;for(let I=0,q=E.length;I<q;I++)E[I]=0}function g(E){v(E,0)}function v(E,I){const q=s.newAttributes,Y=s.enabledAttributes,J=s.attributeDivisors;q[E]=1,Y[E]===0&&(r.enableVertexAttribArray(E),Y[E]=1),J[E]!==I&&(r.vertexAttribDivisor(E,I),J[E]=I)}function F(){const E=s.newAttributes,I=s.enabledAttributes;for(let q=0,Y=I.length;q<Y;q++)I[q]!==E[q]&&(r.disableVertexAttribArray(q),I[q]=0)}function y(E,I,q,Y,J,de,fe){fe===!0?r.vertexAttribIPointer(E,I,q,J,de):r.vertexAttribPointer(E,I,q,Y,J,de)}function x(E,I,q,Y){_();const J=Y.attributes,de=q.getAttributes(),fe=I.defaultAttributeValues;for(const pe in de){const X=de[pe];if(X.location>=0){let O=J[pe];if(O===void 0&&(pe==="instanceMatrix"&&E.instanceMatrix&&(O=E.instanceMatrix),pe==="instanceColor"&&E.instanceColor&&(O=E.instanceColor)),O!==void 0){const j=O.normalized,re=O.itemSize,le=e.get(O);if(le===void 0)continue;const me=le.buffer,ce=le.type,N=le.bytesPerElement,w=ce===r.INT||ce===r.UNSIGNED_INT||O.gpuType===IntType;if(O.isInterleavedBufferAttribute){const $=O.data,ee=$.stride,Z=O.offset;if($.isInstancedInterleavedBuffer){for(let ne=0;ne<X.locationSize;ne++)v(X.location+ne,$.meshPerAttribute);E.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let ne=0;ne<X.locationSize;ne++)g(X.location+ne);r.bindBuffer(r.ARRAY_BUFFER,me);for(let ne=0;ne<X.locationSize;ne++)y(X.location+ne,re/X.locationSize,ce,j,ee*N,(Z+re/X.locationSize*ne)*N,w)}else{if(O.isInstancedBufferAttribute){for(let $=0;$<X.locationSize;$++)v(X.location+$,O.meshPerAttribute);E.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let $=0;$<X.locationSize;$++)g(X.location+$);r.bindBuffer(r.ARRAY_BUFFER,me);for(let $=0;$<X.locationSize;$++)y(X.location+$,re/X.locationSize,ce,j,re*N,re/X.locationSize*$*N,w)}}else if(fe!==void 0){const j=fe[pe];if(j!==void 0)switch(j.length){case 2:r.vertexAttrib2fv(X.location,j);break;case 3:r.vertexAttrib3fv(X.location,j);break;case 4:r.vertexAttrib4fv(X.location,j);break;default:r.vertexAttrib1fv(X.location,j)}}}}F()}function b(){M();for(const E in n){const I=n[E];for(const q in I){const Y=I[q];for(const J in Y)u(Y[J].object),delete Y[J];delete I[q]}delete n[E]}}function L(E){if(n[E.id]===void 0)return;const I=n[E.id];for(const q in I){const Y=I[q];for(const J in Y)u(Y[J].object),delete Y[J];delete I[q]}delete n[E.id]}function G(E){for(const I in n){const q=n[I];if(q[E.id]===void 0)continue;const Y=q[E.id];for(const J in Y)u(Y[J].object),delete Y[J];delete q[E.id]}}function M(){S(),a=!0,s!==i&&(s=i,l(s.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:M,resetDefaultState:S,dispose:b,releaseStatesOfGeometry:L,releaseStatesOfProgram:G,initAttributes:_,enableAttribute:g,disableUnusedAttributes:F}}function WebGLBufferRenderer(r,e,t){let n;function i(l){n=l}function s(l,u){r.drawArrays(n,l,u),t.update(u,n,1)}function a(l,u,h){h!==0&&(r.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function o(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let f=0;for(let p=0;p<h;p++)f+=u[p];t.update(f,n,1)}function c(l,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<l.length;p++)a(l[p],u[p],d[p]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,h);let p=0;for(let _=0;_<h;_++)p+=u[_]*d[_];t.update(p,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function WebGLCapabilities(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const G=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(G.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(G){return!(G!==RGBAFormat&&n.convert(G)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(G){const M=G===HalfFloatType&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(G!==UnsignedByteType&&n.convert(G)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&G!==FloatType&&!M)}function c(G){if(G==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";G="mediump"}return G==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),F=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),y=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),b=p>0,L=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:F,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:b,maxSamples:L}}function WebGLClipping(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new Plane,o=new Matrix3,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const p=h.clippingPlanes,_=h.clipIntersection,g=h.clipShadows,v=r.get(h);if(!i||p===null||p.length===0||s&&!g)s?u(null):l();else{const F=s?0:n,y=F*4;let x=v.clippingState||null;c.value=x,x=u(p,d,y,f);for(let b=0;b!==y;++b)x[b]=t[b];v.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=F}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,p){const _=h!==null?h.length:0;let g=null;if(_!==0){if(g=c.value,p!==!0||g===null){const v=f+_*4,F=d.matrixWorldInverse;o.getNormalMatrix(F),(g===null||g.length<v)&&(g=new Float32Array(v));for(let y=0,x=f;y!==_;++y,x+=4)a.copy(h[y]).applyMatrix4(F,o),a.normal.toArray(g,x),g[x+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function WebGLCubeMaps(r){let e=new WeakMap;function t(a,o){return o===EquirectangularReflectionMapping?a.mapping=CubeReflectionMapping:o===EquirectangularRefractionMapping&&(a.mapping=CubeRefractionMapping),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===EquirectangularReflectionMapping||o===EquirectangularRefractionMapping)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new WebGLCubeRenderTarget(c.height);return l.fromEquirectangularTexture(r,a),e.set(a,l),a.addEventListener("dispose",i),t(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class OrthographicCamera extends Camera{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const LOD_MIN=4,EXTRA_LOD_SIGMA=[.125,.215,.35,.446,.526,.582],MAX_SAMPLES=20,_flatCamera=new OrthographicCamera,_clearColor=new Color;let _oldTarget=null,_oldActiveCubeFace=0,_oldActiveMipmapLevel=0,_oldXrEnabled=!1;const PHI=(1+Math.sqrt(5))/2,INV_PHI=1/PHI,_axisDirections=[new Vector3(-PHI,INV_PHI,0),new Vector3(PHI,INV_PHI,0),new Vector3(-INV_PHI,0,PHI),new Vector3(INV_PHI,0,PHI),new Vector3(0,PHI,-INV_PHI),new Vector3(0,PHI,INV_PHI),new Vector3(-1,1,-1),new Vector3(1,1,-1),new Vector3(-1,1,1),new Vector3(1,1,1)];class PMREMGenerator{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){_oldTarget=this._renderer.getRenderTarget(),_oldActiveCubeFace=this._renderer.getActiveCubeFace(),_oldActiveMipmapLevel=this._renderer.getActiveMipmapLevel(),_oldXrEnabled=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_getCubemapMaterial(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_getEquirectMaterial(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_oldTarget,_oldActiveCubeFace,_oldActiveMipmapLevel),this._renderer.xr.enabled=_oldXrEnabled,e.scissorTest=!1,_setViewport(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===CubeReflectionMapping||e.mapping===CubeRefractionMapping?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_oldTarget=this._renderer.getRenderTarget(),_oldActiveCubeFace=this._renderer.getActiveCubeFace(),_oldActiveMipmapLevel=this._renderer.getActiveMipmapLevel(),_oldXrEnabled=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:LinearFilter,minFilter:LinearFilter,generateMipmaps:!1,type:HalfFloatType,format:RGBAFormat,colorSpace:LinearSRGBColorSpace,depthBuffer:!1},i=_createRenderTarget(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_createRenderTarget(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_createPlanes(s)),this._blurMaterial=_getBlurShader(s,e,t)}return i}_compileMaterial(e){const t=new Mesh(this._lodPlanes[0],e);this._renderer.compile(t,_flatCamera)}_sceneToCubeUV(e,t,n,i){const o=new PerspectiveCamera(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(_clearColor),u.toneMapping=NoToneMapping,u.autoClear=!1;const f=new MeshBasicMaterial({name:"PMREM.Background",side:BackSide,depthWrite:!1,depthTest:!1}),p=new Mesh(new BoxGeometry,f);let _=!1;const g=e.background;g?g.isColor&&(f.color.copy(g),e.background=null,_=!0):(f.color.copy(_clearColor),_=!0);for(let v=0;v<6;v++){const F=v%3;F===0?(o.up.set(0,c[v],0),o.lookAt(l[v],0,0)):F===1?(o.up.set(0,0,c[v]),o.lookAt(0,l[v],0)):(o.up.set(0,c[v],0),o.lookAt(0,0,l[v]));const y=this._cubeSize;_setViewport(i,F*y,v>2?y:0,y,y),u.setRenderTarget(i),_&&u.render(p,o),u.render(e,o)}p.geometry.dispose(),p.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===CubeReflectionMapping||e.mapping===CubeRefractionMapping;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=_getCubemapMaterial()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_getEquirectMaterial());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new Mesh(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;_setViewport(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,_flatCamera)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=_axisDirections[(i-s-1)%_axisDirections.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Mesh(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*MAX_SAMPLES-1),_=s/p,g=isFinite(s)?1+Math.floor(u*_):MAX_SAMPLES;g>MAX_SAMPLES&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${MAX_SAMPLES}`);const v=[];let F=0;for(let G=0;G<MAX_SAMPLES;++G){const M=G/_,S=Math.exp(-M*M/2);v.push(S),G===0?F+=S:G<g&&(F+=2*S)}for(let G=0;G<v.length;G++)v[G]=v[G]/F;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=v,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:y}=this;d.dTheta.value=p,d.mipInt.value=y-n;const x=this._sizeLods[i],b=3*x*(i>y-LOD_MIN?i-y+LOD_MIN:0),L=4*(this._cubeSize-x);_setViewport(t,b,L,3*x,2*x),c.setRenderTarget(t),c.render(h,_flatCamera)}}function _createPlanes(r){const e=[],t=[],n=[];let i=r;const s=r-LOD_MIN+1+EXTRA_LOD_SIGMA.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let c=1/o;a>r-LOD_MIN?c=EXTRA_LOD_SIGMA[a-r+LOD_MIN-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,p=6,_=3,g=2,v=1,F=new Float32Array(_*p*f),y=new Float32Array(g*p*f),x=new Float32Array(v*p*f);for(let L=0;L<f;L++){const G=L%3*2/3-1,M=L>2?0:-1,S=[G,M,0,G+2/3,M,0,G+2/3,M+1,0,G,M,0,G+2/3,M+1,0,G,M+1,0];F.set(S,_*p*L),y.set(d,g*p*L);const E=[L,L,L,L,L,L];x.set(E,v*p*L)}const b=new BufferGeometry;b.setAttribute("position",new BufferAttribute(F,_)),b.setAttribute("uv",new BufferAttribute(y,g)),b.setAttribute("faceIndex",new BufferAttribute(x,v)),e.push(b),i>LOD_MIN&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function _createRenderTarget(r,e,t){const n=new WebGLRenderTarget(r,e,t);return n.texture.mapping=CubeUVReflectionMapping,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function _setViewport(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function _getBlurShader(r,e,t){const n=new Float32Array(MAX_SAMPLES),i=new Vector3(0,1,0);return new ShaderMaterial({name:"SphericalGaussianBlur",defines:{n:MAX_SAMPLES,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:_getCommonVertexShader(),fragmentShader:`

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
	`}function WebGLCubeUVMaps(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===EquirectangularReflectionMapping||c===EquirectangularRefractionMapping,u=c===CubeReflectionMapping||c===CubeRefractionMapping;if(l||u){let h=e.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new PMREMGenerator(r)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const f=o.image;return l&&f&&f.height>0||u&&f&&i(f)?(t===null&&(t=new PMREMGenerator(r)),h=l?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function i(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function WebGLExtensions(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&warnOnce("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function WebGLGeometries(r,e,t,n){const i={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const p in d.attributes)e.remove(d.attributes[p]);for(const p in d.morphAttributes){const _=d.morphAttributes[p];for(let g=0,v=_.length;g<v;g++)e.remove(_[g])}d.removeEventListener("dispose",a),delete i[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const p in d)e.update(d[p],r.ARRAY_BUFFER);const f=h.morphAttributes;for(const p in f){const _=f[p];for(let g=0,v=_.length;g<v;g++)e.update(_[g],r.ARRAY_BUFFER)}}function l(h){const d=[],f=h.index,p=h.attributes.position;let _=0;if(f!==null){const F=f.array;_=f.version;for(let y=0,x=F.length;y<x;y+=3){const b=F[y+0],L=F[y+1],G=F[y+2];d.push(b,L,L,G,G,b)}}else if(p!==void 0){const F=p.array;_=p.version;for(let y=0,x=F.length/3-1;y<x;y+=3){const b=y+0,L=y+1,G=y+2;d.push(b,L,L,G,G,b)}}else return;const g=new(arrayNeedsUint32(d)?Uint32BufferAttribute:Uint16BufferAttribute)(d,1);g.version=_;const v=s.get(h);v&&e.remove(v),s.set(h,g)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return s.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function WebGLIndexedBufferRenderer(r,e,t){let n;function i(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function c(d,f){r.drawElements(n,f,s,d*a),t.update(f,n,1)}function l(d,f,p){p!==0&&(r.drawElementsInstanced(n,f,s,d*a,p),t.update(f,n,p))}function u(d,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,p);let g=0;for(let v=0;v<p;v++)g+=f[v];t.update(g,n,1)}function h(d,f,p,_){if(p===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let v=0;v<d.length;v++)l(d[v]/a,f[v],_[v]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,_,0,p);let v=0;for(let F=0;F<p;F++)v+=f[F]*_[F];t.update(v,n,1)}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function WebGLInfo(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function WebGLMorphtargets(r,e,t){const n=new WeakMap,i=new Vector4;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==h){let E=function(){M.dispose(),n.delete(o),o.removeEventListener("dispose",E)};var f=E;d!==void 0&&d.texture.dispose();const p=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,v=o.morphAttributes.position||[],F=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let x=0;p===!0&&(x=1),_===!0&&(x=2),g===!0&&(x=3);let b=o.attributes.position.count*x,L=1;b>e.maxTextureSize&&(L=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const G=new Float32Array(b*L*4*h),M=new DataArrayTexture(G,b,L,h);M.type=FloatType,M.needsUpdate=!0;const S=x*4;for(let I=0;I<h;I++){const q=v[I],Y=F[I],J=y[I],de=b*L*4*I;for(let fe=0;fe<q.count;fe++){const pe=fe*S;p===!0&&(i.fromBufferAttribute(q,fe),G[de+pe+0]=i.x,G[de+pe+1]=i.y,G[de+pe+2]=i.z,G[de+pe+3]=0),_===!0&&(i.fromBufferAttribute(Y,fe),G[de+pe+4]=i.x,G[de+pe+5]=i.y,G[de+pe+6]=i.z,G[de+pe+7]=0),g===!0&&(i.fromBufferAttribute(J,fe),G[de+pe+8]=i.x,G[de+pe+9]=i.y,G[de+pe+10]=i.z,G[de+pe+11]=J.itemSize===4?i.w:1)}}d={count:h,texture:M,size:new Vector2(b,L)},n.set(o,d),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let p=0;for(let g=0;g<l.length;g++)p+=l[g];const _=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(r,"morphTargetBaseInfluence",_),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function WebGLObjects(r,e,t,n){let i=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(i.get(h)!==l&&(e.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return h}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}class DepthTexture extends Texture{constructor(e,t,n,i,s,a,o,c,l,u=DepthFormat){if(u!==DepthFormat&&u!==DepthStencilFormat)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===DepthFormat&&(n=UnsignedIntType),n===void 0&&u===DepthStencilFormat&&(n=UnsignedInt248Type),super(null,i,s,a,o,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:NearestFilter,this.minFilter=c!==void 0?c:NearestFilter,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const emptyTexture=new Texture,emptyShadowTexture=new DepthTexture(1,1),emptyArrayTexture=new DataArrayTexture,empty3dTexture=new Data3DTexture,emptyCubeTexture=new CubeTexture,arrayCacheF32=[],arrayCacheI32=[],mat4array=new Float32Array(16),mat3array=new Float32Array(9),mat2array=new Float32Array(4);function flatten(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=arrayCacheF32[i];if(s===void 0&&(s=new Float32Array(i),arrayCacheF32[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function arraysEqual(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function copyArray(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function allocTexUnits(r,e){let t=arrayCacheI32[e];t===void 0&&(t=new Int32Array(e),arrayCacheI32[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function setValueV1f(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function setValueV2f(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(arraysEqual(t,e))return;r.uniform2fv(this.addr,e),copyArray(t,e)}}function setValueV3f(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(arraysEqual(t,e))return;r.uniform3fv(this.addr,e),copyArray(t,e)}}function setValueV4f(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(arraysEqual(t,e))return;r.uniform4fv(this.addr,e),copyArray(t,e)}}function setValueM2(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(arraysEqual(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),copyArray(t,e)}else{if(arraysEqual(t,n))return;mat2array.set(n),r.uniformMatrix2fv(this.addr,!1,mat2array),copyArray(t,n)}}function setValueM3(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(arraysEqual(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),copyArray(t,e)}else{if(arraysEqual(t,n))return;mat3array.set(n),r.uniformMatrix3fv(this.addr,!1,mat3array),copyArray(t,n)}}function setValueM4(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(arraysEqual(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),copyArray(t,e)}else{if(arraysEqual(t,n))return;mat4array.set(n),r.uniformMatrix4fv(this.addr,!1,mat4array),copyArray(t,n)}}function setValueV1i(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function setValueV2i(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(arraysEqual(t,e))return;r.uniform2iv(this.addr,e),copyArray(t,e)}}function setValueV3i(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(arraysEqual(t,e))return;r.uniform3iv(this.addr,e),copyArray(t,e)}}function setValueV4i(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(arraysEqual(t,e))return;r.uniform4iv(this.addr,e),copyArray(t,e)}}function setValueV1ui(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function setValueV2ui(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(arraysEqual(t,e))return;r.uniform2uiv(this.addr,e),copyArray(t,e)}}function setValueV3ui(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(arraysEqual(t,e))return;r.uniform3uiv(this.addr,e),copyArray(t,e)}}function setValueV4ui(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(arraysEqual(t,e))return;r.uniform4uiv(this.addr,e),copyArray(t,e)}}function setValueT1(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(emptyShadowTexture.compareFunction=LessEqualCompare,s=emptyShadowTexture):s=emptyTexture,t.setTexture2D(e||s,i)}function setValueT3D1(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||empty3dTexture,i)}function setValueT6(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||emptyCubeTexture,i)}function setValueT2DArray1(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||emptyArrayTexture,i)}function getSingularSetter(r){switch(r){case 5126:return setValueV1f;case 35664:return setValueV2f;case 35665:return setValueV3f;case 35666:return setValueV4f;case 35674:return setValueM2;case 35675:return setValueM3;case 35676:return setValueM4;case 5124:case 35670:return setValueV1i;case 35667:case 35671:return setValueV2i;case 35668:case 35672:return setValueV3i;case 35669:case 35673:return setValueV4i;case 5125:return setValueV1ui;case 36294:return setValueV2ui;case 36295:return setValueV3ui;case 36296:return setValueV4ui;case 35678:case 36198:case 36298:case 36306:case 35682:return setValueT1;case 35679:case 36299:case 36307:return setValueT3D1;case 35680:case 36300:case 36308:case 36293:return setValueT6;case 36289:case 36303:case 36311:case 36292:return setValueT2DArray1}}function setValueV1fArray(r,e){r.uniform1fv(this.addr,e)}function setValueV2fArray(r,e){const t=flatten(e,this.size,2);r.uniform2fv(this.addr,t)}function setValueV3fArray(r,e){const t=flatten(e,this.size,3);r.uniform3fv(this.addr,t)}function setValueV4fArray(r,e){const t=flatten(e,this.size,4);r.uniform4fv(this.addr,t)}function setValueM2Array(r,e){const t=flatten(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function setValueM3Array(r,e){const t=flatten(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function setValueM4Array(r,e){const t=flatten(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function setValueV1iArray(r,e){r.uniform1iv(this.addr,e)}function setValueV2iArray(r,e){r.uniform2iv(this.addr,e)}function setValueV3iArray(r,e){r.uniform3iv(this.addr,e)}function setValueV4iArray(r,e){r.uniform4iv(this.addr,e)}function setValueV1uiArray(r,e){r.uniform1uiv(this.addr,e)}function setValueV2uiArray(r,e){r.uniform2uiv(this.addr,e)}function setValueV3uiArray(r,e){r.uniform3uiv(this.addr,e)}function setValueV4uiArray(r,e){r.uniform4uiv(this.addr,e)}function setValueT1Array(r,e,t){const n=this.cache,i=e.length,s=allocTexUnits(t,i);arraysEqual(n,s)||(r.uniform1iv(this.addr,s),copyArray(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||emptyTexture,s[a])}function setValueT3DArray(r,e,t){const n=this.cache,i=e.length,s=allocTexUnits(t,i);arraysEqual(n,s)||(r.uniform1iv(this.addr,s),copyArray(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||empty3dTexture,s[a])}function setValueT6Array(r,e,t){const n=this.cache,i=e.length,s=allocTexUnits(t,i);arraysEqual(n,s)||(r.uniform1iv(this.addr,s),copyArray(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||emptyCubeTexture,s[a])}function setValueT2DArrayArray(r,e,t){const n=this.cache,i=e.length,s=allocTexUnits(t,i);arraysEqual(n,s)||(r.uniform1iv(this.addr,s),copyArray(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||emptyArrayTexture,s[a])}function getPureArraySetter(r){switch(r){case 5126:return setValueV1fArray;case 35664:return setValueV2fArray;case 35665:return setValueV3fArray;case 35666:return setValueV4fArray;case 35674:return setValueM2Array;case 35675:return setValueM3Array;case 35676:return setValueM4Array;case 5124:case 35670:return setValueV1iArray;case 35667:case 35671:return setValueV2iArray;case 35668:case 35672:return setValueV3iArray;case 35669:case 35673:return setValueV4iArray;case 5125:return setValueV1uiArray;case 36294:return setValueV2uiArray;case 36295:return setValueV3uiArray;case 36296:return setValueV4uiArray;case 35678:case 36198:case 36298:case 36306:case 35682:return setValueT1Array;case 35679:case 36299:case 36307:return setValueT3DArray;case 35680:case 36300:case 36308:case 36293:return setValueT6Array;case 36289:case 36303:case 36311:case 36292:return setValueT2DArrayArray}}class SingleUniform{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=getSingularSetter(t.type)}}class PureArrayUniform{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=getPureArraySetter(t.type)}}class StructuredUniform{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const RePathPart=/(\w+)(\])?(\[|\.)?/g;function addUniform(r,e){r.seq.push(e),r.map[e.id]=e}function parseUniform(r,e,t){const n=r.name,i=n.length;for(RePathPart.lastIndex=0;;){const s=RePathPart.exec(n),a=RePathPart.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){addUniform(t,l===void 0?new SingleUniform(o,r,e):new PureArrayUniform(o,r,e));break}else{let h=t.map[o];h===void 0&&(h=new StructuredUniform(o),addUniform(t,h)),t=h}}}class WebGLUniforms{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);parseUniform(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function WebGLShader(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const COMPLETION_STATUS_KHR=37297;let programIdCount=0;function handleSource(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const _m0=new Matrix3;function getEncodingComponents(r){ColorManagement._getMatrix(_m0,ColorManagement.workingColorSpace,r);const e=`mat3( ${_m0.elements.map(t=>t.toFixed(4))} )`;switch(ColorManagement.getTransfer(r)){case LinearTransfer:return[e,"LinearTransferOETF"];case SRGBTransfer:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function getShaderErrors(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+handleSource(r.getShaderSource(e),a)}else return i}function getTexelEncodingFunction(r,e){const t=getEncodingComponents(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function getToneMappingFunction(r,e){let t;switch(e){case LinearToneMapping:t="Linear";break;case ReinhardToneMapping:t="Reinhard";break;case CineonToneMapping:t="Cineon";break;case ACESFilmicToneMapping:t="ACESFilmic";break;case AgXToneMapping:t="AgX";break;case NeutralToneMapping:t="Neutral";break;case CustomToneMapping:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const _v0$1=new Vector3;function getLuminanceFunction(){ColorManagement.getLuminanceCoefficients(_v0$1);const r=_v0$1.x.toFixed(4),e=_v0$1.y.toFixed(4),t=_v0$1.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function generateVertexExtensions(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(filterEmptyLine).join(`
`)}function generateDefines(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function fetchAttributeLocations(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function filterEmptyLine(r){return r!==""}function replaceLightNums(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function replaceClippingPlaneNums(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const includePattern=/^[ \t]*#include +<([\w\d./]+)>/gm;function resolveIncludes(r){return r.replace(includePattern,includeReplacer)}const shaderChunkMap=new Map;function includeReplacer(r,e){let t=ShaderChunk[e];if(t===void 0){const n=shaderChunkMap.get(e);if(n!==void 0)t=ShaderChunk[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return resolveIncludes(t)}const unrollLoopPattern=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function unrollLoops(r){return r.replace(unrollLoopPattern,loopReplacer)}function loopReplacer(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function generatePrecision(r){let e=`precision ${r.precision} float;
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
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function generateShadowMapTypeDefine(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===PCFShadowMap?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===PCFSoftShadowMap?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===VSMShadowMap&&(e="SHADOWMAP_TYPE_VSM"),e}function generateEnvMapTypeDefine(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case CubeReflectionMapping:case CubeRefractionMapping:e="ENVMAP_TYPE_CUBE";break;case CubeUVReflectionMapping:e="ENVMAP_TYPE_CUBE_UV";break}return e}function generateEnvMapModeDefine(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case CubeRefractionMapping:e="ENVMAP_MODE_REFRACTION";break}return e}function generateEnvMapBlendingDefine(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case MultiplyOperation:e="ENVMAP_BLENDING_MULTIPLY";break;case MixOperation:e="ENVMAP_BLENDING_MIX";break;case AddOperation:e="ENVMAP_BLENDING_ADD";break}return e}function generateCubeUVSize(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function WebGLProgram(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=generateShadowMapTypeDefine(t),l=generateEnvMapTypeDefine(t),u=generateEnvMapModeDefine(t),h=generateEnvMapBlendingDefine(t),d=generateCubeUVSize(t),f=generateVertexExtensions(t),p=generateDefines(s),_=i.createProgram();let g,v,F=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(filterEmptyLine).join(`
`),g.length>0&&(g+=`
`),v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(filterEmptyLine).join(`
`),v.length>0&&(v+=`
`)):(g=[generatePrecision(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(filterEmptyLine).join(`
`),v=[generatePrecision(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==NoToneMapping?"#define TONE_MAPPING":"",t.toneMapping!==NoToneMapping?ShaderChunk.tonemapping_pars_fragment:"",t.toneMapping!==NoToneMapping?getToneMappingFunction("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ShaderChunk.colorspace_pars_fragment,getTexelEncodingFunction("linearToOutputTexel",t.outputColorSpace),getLuminanceFunction(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(filterEmptyLine).join(`
`)),a=resolveIncludes(a),a=replaceLightNums(a,t),a=replaceClippingPlaneNums(a,t),o=resolveIncludes(o),o=replaceLightNums(o,t),o=replaceClippingPlaneNums(o,t),a=unrollLoops(a),o=unrollLoops(o),t.isRawShaderMaterial!==!0&&(F=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,v=["#define varying in",t.glslVersion===GLSL3?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===GLSL3?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const y=F+g+a,x=F+v+o,b=WebGLShader(i,i.VERTEX_SHADER,y),L=WebGLShader(i,i.FRAGMENT_SHADER,x);i.attachShader(_,b),i.attachShader(_,L),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function G(I){if(r.debug.checkShaderErrors){const q=i.getProgramInfoLog(_).trim(),Y=i.getShaderInfoLog(b).trim(),J=i.getShaderInfoLog(L).trim();let de=!0,fe=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(de=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,b,L);else{const pe=getShaderErrors(i,b,"vertex"),X=getShaderErrors(i,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+q+`
`+pe+`
`+X)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(Y===""||J==="")&&(fe=!1);fe&&(I.diagnostics={runnable:de,programLog:q,vertexShader:{log:Y,prefix:g},fragmentShader:{log:J,prefix:v}})}i.deleteShader(b),i.deleteShader(L),M=new WebGLUniforms(i,_),S=fetchAttributeLocations(i,_)}let M;this.getUniforms=function(){return M===void 0&&G(this),M};let S;this.getAttributes=function(){return S===void 0&&G(this),S};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(_,COMPLETION_STATUS_KHR)),E},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=programIdCount++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=L,this}let _id$1=0;class WebGLShaderCache{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new WebGLShaderStage(e),t.set(e,n)),n}}class WebGLShaderStage{constructor(e){this.id=_id$1++,this.code=e,this.usedTimes=0}}function WebGLPrograms(r,e,t,n,i,s,a){const o=new Layers,c=new WebGLShaderCache,l=new Set,u=[],h=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return l.add(S),S===0?"uv":`uv${S}`}function g(S,E,I,q,Y){const J=q.fog,de=Y.geometry,fe=S.isMeshStandardMaterial?q.environment:null,pe=(S.isMeshStandardMaterial?t:e).get(S.envMap||fe),X=pe&&pe.mapping===CubeUVReflectionMapping?pe.image.height:null,O=p[S.type];S.precision!==null&&(f=i.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const j=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,re=j!==void 0?j.length:0;let le=0;de.morphAttributes.position!==void 0&&(le=1),de.morphAttributes.normal!==void 0&&(le=2),de.morphAttributes.color!==void 0&&(le=3);let me,ce,N,w;if(O){const Ye=ShaderLib[O];me=Ye.vertexShader,ce=Ye.fragmentShader}else me=S.vertexShader,ce=S.fragmentShader,c.update(S),N=c.getVertexShaderID(S),w=c.getFragmentShaderID(S);const $=r.getRenderTarget(),ee=r.state.buffers.depth.getReversed(),Z=Y.isInstancedMesh===!0,ne=Y.isBatchedMesh===!0,he=!!S.map,Ce=!!S.matcap,De=!!pe,H=!!S.aoMap,ae=!!S.lightMap,ue=!!S.bumpMap,Ee=!!S.normalMap,ye=!!S.displacementMap,m=!!S.emissiveMap,R=!!S.metalnessMap,z=!!S.roughnessMap,D=S.anisotropy>0,K=S.clearcoat>0,te=S.dispersion>0,se=S.iridescence>0,ie=S.sheen>0,Se=S.transmission>0,ve=D&&!!S.anisotropyMap,be=K&&!!S.clearcoatMap,Pe=K&&!!S.clearcoatNormalMap,_e=K&&!!S.clearcoatRoughnessMap,Ae=se&&!!S.iridescenceMap,Ie=se&&!!S.iridescenceThicknessMap,Fe=ie&&!!S.sheenColorMap,Te=ie&&!!S.sheenRoughnessMap,Be=!!S.specularMap,Ve=!!S.specularColorMap,Ge=!!S.specularIntensityMap,oe=Se&&!!S.transmissionMap,Ue=Se&&!!S.thicknessMap,xe=!!S.gradientMap,Le=!!S.alphaMap,Oe=S.alphaTest>0,Ne=!!S.alphaHash,He=!!S.extensions;let Qe=NoToneMapping;S.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Qe=r.toneMapping);const Je={shaderID:O,shaderType:S.type,shaderName:S.name,vertexShader:me,fragmentShader:ce,defines:S.defines,customVertexShaderID:N,customFragmentShaderID:w,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:ne,batchingColor:ne&&Y._colorsTexture!==null,instancing:Z,instancingColor:Z&&Y.instanceColor!==null,instancingMorph:Z&&Y.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:$===null?r.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:LinearSRGBColorSpace,alphaToCoverage:!!S.alphaToCoverage,map:he,matcap:Ce,envMap:De,envMapMode:De&&pe.mapping,envMapCubeUVHeight:X,aoMap:H,lightMap:ae,bumpMap:ue,normalMap:Ee,displacementMap:d&&ye,emissiveMap:m,normalMapObjectSpace:Ee&&S.normalMapType===ObjectSpaceNormalMap,normalMapTangentSpace:Ee&&S.normalMapType===TangentSpaceNormalMap,metalnessMap:R,roughnessMap:z,anisotropy:D,anisotropyMap:ve,clearcoat:K,clearcoatMap:be,clearcoatNormalMap:Pe,clearcoatRoughnessMap:_e,dispersion:te,iridescence:se,iridescenceMap:Ae,iridescenceThicknessMap:Ie,sheen:ie,sheenColorMap:Fe,sheenRoughnessMap:Te,specularMap:Be,specularColorMap:Ve,specularIntensityMap:Ge,transmission:Se,transmissionMap:oe,thicknessMap:Ue,gradientMap:xe,opaque:S.transparent===!1&&S.blending===NormalBlending&&S.alphaToCoverage===!1,alphaMap:Le,alphaTest:Oe,alphaHash:Ne,combine:S.combine,mapUv:he&&_(S.map.channel),aoMapUv:H&&_(S.aoMap.channel),lightMapUv:ae&&_(S.lightMap.channel),bumpMapUv:ue&&_(S.bumpMap.channel),normalMapUv:Ee&&_(S.normalMap.channel),displacementMapUv:ye&&_(S.displacementMap.channel),emissiveMapUv:m&&_(S.emissiveMap.channel),metalnessMapUv:R&&_(S.metalnessMap.channel),roughnessMapUv:z&&_(S.roughnessMap.channel),anisotropyMapUv:ve&&_(S.anisotropyMap.channel),clearcoatMapUv:be&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Pe&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Te&&_(S.sheenRoughnessMap.channel),specularMapUv:Be&&_(S.specularMap.channel),specularColorMapUv:Ve&&_(S.specularColorMap.channel),specularIntensityMapUv:Ge&&_(S.specularIntensityMap.channel),transmissionMapUv:oe&&_(S.transmissionMap.channel),thicknessMapUv:Ue&&_(S.thicknessMap.channel),alphaMapUv:Le&&_(S.alphaMap.channel),vertexTangents:!!de.attributes.tangent&&(Ee||D),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!de.attributes.uv&&(he||Le),fog:!!J,useFog:S.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:ee,skinning:Y.isSkinnedMesh===!0,morphTargets:de.morphAttributes.position!==void 0,morphNormals:de.morphAttributes.normal!==void 0,morphColors:de.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:le,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:Qe,decodeVideoTexture:he&&S.map.isVideoTexture===!0&&ColorManagement.getTransfer(S.map.colorSpace)===SRGBTransfer,decodeVideoTextureEmissive:m&&S.emissiveMap.isVideoTexture===!0&&ColorManagement.getTransfer(S.emissiveMap.colorSpace)===SRGBTransfer,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===DoubleSide,flipSided:S.side===BackSide,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:He&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&S.extensions.multiDraw===!0||ne)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Je.vertexUv1s=l.has(1),Je.vertexUv2s=l.has(2),Je.vertexUv3s=l.has(3),l.clear(),Je}function v(S){const E=[];if(S.shaderID?E.push(S.shaderID):(E.push(S.customVertexShaderID),E.push(S.customFragmentShaderID)),S.defines!==void 0)for(const I in S.defines)E.push(I),E.push(S.defines[I]);return S.isRawShaderMaterial===!1&&(F(E,S),y(E,S),E.push(r.outputColorSpace)),E.push(S.customProgramCacheKey),E.join()}function F(S,E){S.push(E.precision),S.push(E.outputColorSpace),S.push(E.envMapMode),S.push(E.envMapCubeUVHeight),S.push(E.mapUv),S.push(E.alphaMapUv),S.push(E.lightMapUv),S.push(E.aoMapUv),S.push(E.bumpMapUv),S.push(E.normalMapUv),S.push(E.displacementMapUv),S.push(E.emissiveMapUv),S.push(E.metalnessMapUv),S.push(E.roughnessMapUv),S.push(E.anisotropyMapUv),S.push(E.clearcoatMapUv),S.push(E.clearcoatNormalMapUv),S.push(E.clearcoatRoughnessMapUv),S.push(E.iridescenceMapUv),S.push(E.iridescenceThicknessMapUv),S.push(E.sheenColorMapUv),S.push(E.sheenRoughnessMapUv),S.push(E.specularMapUv),S.push(E.specularColorMapUv),S.push(E.specularIntensityMapUv),S.push(E.transmissionMapUv),S.push(E.thicknessMapUv),S.push(E.combine),S.push(E.fogExp2),S.push(E.sizeAttenuation),S.push(E.morphTargetsCount),S.push(E.morphAttributeCount),S.push(E.numDirLights),S.push(E.numPointLights),S.push(E.numSpotLights),S.push(E.numSpotLightMaps),S.push(E.numHemiLights),S.push(E.numRectAreaLights),S.push(E.numDirLightShadows),S.push(E.numPointLightShadows),S.push(E.numSpotLightShadows),S.push(E.numSpotLightShadowsWithMaps),S.push(E.numLightProbes),S.push(E.shadowMapType),S.push(E.toneMapping),S.push(E.numClippingPlanes),S.push(E.numClipIntersection),S.push(E.depthPacking)}function y(S,E){o.disableAll(),E.supportsVertexTextures&&o.enable(0),E.instancing&&o.enable(1),E.instancingColor&&o.enable(2),E.instancingMorph&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),E.dispersion&&o.enable(20),E.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reverseDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),S.push(o.mask)}function x(S){const E=p[S.type];let I;if(E){const q=ShaderLib[E];I=UniformsUtils.clone(q.uniforms)}else I=S.uniforms;return I}function b(S,E){let I;for(let q=0,Y=u.length;q<Y;q++){const J=u[q];if(J.cacheKey===E){I=J,++I.usedTimes;break}}return I===void 0&&(I=new WebGLProgram(r,E,S,s),u.push(I)),I}function L(S){if(--S.usedTimes===0){const E=u.indexOf(S);u[E]=u[u.length-1],u.pop(),S.destroy()}}function G(S){c.remove(S)}function M(){c.dispose()}return{getParameters:g,getProgramCacheKey:v,getUniforms:x,acquireProgram:b,releaseProgram:L,releaseShaderCache:G,programs:u,dispose:M}}function WebGLProperties(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,c){r.get(a)[o]=c}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function painterSortStable(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function reversePainterSortStable(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function WebGLRenderList(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(h,d,f,p,_,g){let v=r[e];return v===void 0?(v={id:h.id,object:h,geometry:d,material:f,groupOrder:p,renderOrder:h.renderOrder,z:_,group:g},r[e]=v):(v.id=h.id,v.object=h,v.geometry=d,v.material=f,v.groupOrder=p,v.renderOrder=h.renderOrder,v.z=_,v.group=g),e++,v}function o(h,d,f,p,_,g){const v=a(h,d,f,p,_,g);f.transmission>0?n.push(v):f.transparent===!0?i.push(v):t.push(v)}function c(h,d,f,p,_,g){const v=a(h,d,f,p,_,g);f.transmission>0?n.unshift(v):f.transparent===!0?i.unshift(v):t.unshift(v)}function l(h,d){t.length>1&&t.sort(h||painterSortStable),n.length>1&&n.sort(d||reversePainterSortStable),i.length>1&&i.sort(d||reversePainterSortStable)}function u(){for(let h=e,d=r.length;h<d;h++){const f=r[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:c,finish:u,sort:l}}function WebGLRenderLists(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new WebGLRenderList,r.set(n,[a])):i>=s.length?(a=new WebGLRenderList,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function UniformsCache(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Vector3,color:new Color};break;case"SpotLight":t={position:new Vector3,direction:new Vector3,color:new Color,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Vector3,color:new Color,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Vector3,skyColor:new Color,groundColor:new Color};break;case"RectAreaLight":t={color:new Color,position:new Vector3,halfWidth:new Vector3,halfHeight:new Vector3};break}return r[e.id]=t,t}}}function ShadowUniformsCache(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vector2};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vector2};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vector2,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let nextVersion=0;function shadowCastingAndTexturingLightsFirst(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function WebGLLights(r){const e=new UniformsCache,t=ShadowUniformsCache(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new Vector3);const i=new Vector3,s=new Matrix4,a=new Matrix4;function o(l){let u=0,h=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,p=0,_=0,g=0,v=0,F=0,y=0,x=0,b=0,L=0,G=0;l.sort(shadowCastingAndTexturingLightsFirst);for(let S=0,E=l.length;S<E;S++){const I=l[S],q=I.color,Y=I.intensity,J=I.distance,de=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=q.r*Y,h+=q.g*Y,d+=q.b*Y;else if(I.isLightProbe){for(let fe=0;fe<9;fe++)n.probe[fe].addScaledVector(I.sh.coefficients[fe],Y);G++}else if(I.isDirectionalLight){const fe=e.get(I);if(fe.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const pe=I.shadow,X=t.get(I);X.shadowIntensity=pe.intensity,X.shadowBias=pe.bias,X.shadowNormalBias=pe.normalBias,X.shadowRadius=pe.radius,X.shadowMapSize=pe.mapSize,n.directionalShadow[f]=X,n.directionalShadowMap[f]=de,n.directionalShadowMatrix[f]=I.shadow.matrix,F++}n.directional[f]=fe,f++}else if(I.isSpotLight){const fe=e.get(I);fe.position.setFromMatrixPosition(I.matrixWorld),fe.color.copy(q).multiplyScalar(Y),fe.distance=J,fe.coneCos=Math.cos(I.angle),fe.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),fe.decay=I.decay,n.spot[_]=fe;const pe=I.shadow;if(I.map&&(n.spotLightMap[b]=I.map,b++,pe.updateMatrices(I),I.castShadow&&L++),n.spotLightMatrix[_]=pe.matrix,I.castShadow){const X=t.get(I);X.shadowIntensity=pe.intensity,X.shadowBias=pe.bias,X.shadowNormalBias=pe.normalBias,X.shadowRadius=pe.radius,X.shadowMapSize=pe.mapSize,n.spotShadow[_]=X,n.spotShadowMap[_]=de,x++}_++}else if(I.isRectAreaLight){const fe=e.get(I);fe.color.copy(q).multiplyScalar(Y),fe.halfWidth.set(I.width*.5,0,0),fe.halfHeight.set(0,I.height*.5,0),n.rectArea[g]=fe,g++}else if(I.isPointLight){const fe=e.get(I);if(fe.color.copy(I.color).multiplyScalar(I.intensity),fe.distance=I.distance,fe.decay=I.decay,I.castShadow){const pe=I.shadow,X=t.get(I);X.shadowIntensity=pe.intensity,X.shadowBias=pe.bias,X.shadowNormalBias=pe.normalBias,X.shadowRadius=pe.radius,X.shadowMapSize=pe.mapSize,X.shadowCameraNear=pe.camera.near,X.shadowCameraFar=pe.camera.far,n.pointShadow[p]=X,n.pointShadowMap[p]=de,n.pointShadowMatrix[p]=I.shadow.matrix,y++}n.point[p]=fe,p++}else if(I.isHemisphereLight){const fe=e.get(I);fe.skyColor.copy(I.color).multiplyScalar(Y),fe.groundColor.copy(I.groundColor).multiplyScalar(Y),n.hemi[v]=fe,v++}}g>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=UniformsLib.LTC_FLOAT_1,n.rectAreaLTC2=UniformsLib.LTC_FLOAT_2):(n.rectAreaLTC1=UniformsLib.LTC_HALF_1,n.rectAreaLTC2=UniformsLib.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const M=n.hash;(M.directionalLength!==f||M.pointLength!==p||M.spotLength!==_||M.rectAreaLength!==g||M.hemiLength!==v||M.numDirectionalShadows!==F||M.numPointShadows!==y||M.numSpotShadows!==x||M.numSpotMaps!==b||M.numLightProbes!==G)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=g,n.point.length=p,n.hemi.length=v,n.directionalShadow.length=F,n.directionalShadowMap.length=F,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=F,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+b-L,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=G,M.directionalLength=f,M.pointLength=p,M.spotLength=_,M.rectAreaLength=g,M.hemiLength=v,M.numDirectionalShadows=F,M.numPointShadows=y,M.numSpotShadows=x,M.numSpotMaps=b,M.numLightProbes=G,n.version=nextVersion++)}function c(l,u){let h=0,d=0,f=0,p=0,_=0;const g=u.matrixWorldInverse;for(let v=0,F=l.length;v<F;v++){const y=l[v];if(y.isDirectionalLight){const x=n.directional[h];x.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(g),h++}else if(y.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(g),f++}else if(y.isRectAreaLight){const x=n.rectArea[p];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),a.identity(),s.copy(y.matrixWorld),s.premultiply(g),a.extractRotation(s),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),p++}else if(y.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),d++}else if(y.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(g),_++}}}return{setup:o,setupView:c,state:n}}function WebGLRenderState(r){const e=new WebGLLights(r),t=[],n=[];function i(u){l.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function WebGLRenderStates(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new WebGLRenderState(r),e.set(i,[o])):s>=a.length?(o=new WebGLRenderState(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class MeshDepthMaterial extends Material{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=BasicDepthPacking,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class MeshDistanceMaterial extends Material{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const vertex=`void main() {
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
}`;function WebGLShadowMap(r,e,t){let n=new Frustum;const i=new Vector2,s=new Vector2,a=new Vector4,o=new MeshDepthMaterial({depthPacking:RGBADepthPacking}),c=new MeshDistanceMaterial,l={},u=t.maxTextureSize,h={[FrontSide]:BackSide,[BackSide]:FrontSide,[DoubleSide]:DoubleSide},d=new ShaderMaterial({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Vector2},radius:{value:4}},vertexShader:vertex,fragmentShader:fragment}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const p=new BufferGeometry;p.setAttribute("position",new BufferAttribute(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Mesh(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=PCFShadowMap;let v=this.type;this.render=function(L,G,M){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||L.length===0)return;const S=r.getRenderTarget(),E=r.getActiveCubeFace(),I=r.getActiveMipmapLevel(),q=r.state;q.setBlending(NoBlending),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const Y=v!==VSMShadowMap&&this.type===VSMShadowMap,J=v===VSMShadowMap&&this.type!==VSMShadowMap;for(let de=0,fe=L.length;de<fe;de++){const pe=L[de],X=pe.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",pe,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;i.copy(X.mapSize);const O=X.getFrameExtents();if(i.multiply(O),s.copy(X.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/O.x),i.x=s.x*O.x,X.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/O.y),i.y=s.y*O.y,X.mapSize.y=s.y)),X.map===null||Y===!0||J===!0){const re=this.type!==VSMShadowMap?{minFilter:NearestFilter,magFilter:NearestFilter}:{};X.map!==null&&X.map.dispose(),X.map=new WebGLRenderTarget(i.x,i.y,re),X.map.texture.name=pe.name+".shadowMap",X.camera.updateProjectionMatrix()}r.setRenderTarget(X.map),r.clear();const j=X.getViewportCount();for(let re=0;re<j;re++){const le=X.getViewport(re);a.set(s.x*le.x,s.y*le.y,s.x*le.z,s.y*le.w),q.viewport(a),X.updateMatrices(pe,re),n=X.getFrustum(),x(G,M,X.camera,pe,this.type)}X.isPointLightShadow!==!0&&this.type===VSMShadowMap&&F(X,M),X.needsUpdate=!1}v=this.type,g.needsUpdate=!1,r.setRenderTarget(S,E,I)};function F(L,G){const M=e.update(_);d.defines.VSM_SAMPLES!==L.blurSamples&&(d.defines.VSM_SAMPLES=L.blurSamples,f.defines.VSM_SAMPLES=L.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new WebGLRenderTarget(i.x,i.y)),d.uniforms.shadow_pass.value=L.map.texture,d.uniforms.resolution.value=L.mapSize,d.uniforms.radius.value=L.radius,r.setRenderTarget(L.mapPass),r.clear(),r.renderBufferDirect(G,null,M,d,_,null),f.uniforms.shadow_pass.value=L.mapPass.texture,f.uniforms.resolution.value=L.mapSize,f.uniforms.radius.value=L.radius,r.setRenderTarget(L.map),r.clear(),r.renderBufferDirect(G,null,M,f,_,null)}function y(L,G,M,S){let E=null;const I=M.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(I!==void 0)E=I;else if(E=M.isPointLight===!0?c:o,r.localClippingEnabled&&G.clipShadows===!0&&Array.isArray(G.clippingPlanes)&&G.clippingPlanes.length!==0||G.displacementMap&&G.displacementScale!==0||G.alphaMap&&G.alphaTest>0||G.map&&G.alphaTest>0){const q=E.uuid,Y=G.uuid;let J=l[q];J===void 0&&(J={},l[q]=J);let de=J[Y];de===void 0&&(de=E.clone(),J[Y]=de,G.addEventListener("dispose",b)),E=de}if(E.visible=G.visible,E.wireframe=G.wireframe,S===VSMShadowMap?E.side=G.shadowSide!==null?G.shadowSide:G.side:E.side=G.shadowSide!==null?G.shadowSide:h[G.side],E.alphaMap=G.alphaMap,E.alphaTest=G.alphaTest,E.map=G.map,E.clipShadows=G.clipShadows,E.clippingPlanes=G.clippingPlanes,E.clipIntersection=G.clipIntersection,E.displacementMap=G.displacementMap,E.displacementScale=G.displacementScale,E.displacementBias=G.displacementBias,E.wireframeLinewidth=G.wireframeLinewidth,E.linewidth=G.linewidth,M.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const q=r.properties.get(E);q.light=M}return E}function x(L,G,M,S,E){if(L.visible===!1)return;if(L.layers.test(G.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&E===VSMShadowMap)&&(!L.frustumCulled||n.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,L.matrixWorld);const Y=e.update(L),J=L.material;if(Array.isArray(J)){const de=Y.groups;for(let fe=0,pe=de.length;fe<pe;fe++){const X=de[fe],O=J[X.materialIndex];if(O&&O.visible){const j=y(L,O,S,E);L.onBeforeShadow(r,L,G,M,Y,j,X),r.renderBufferDirect(M,null,Y,j,L,X),L.onAfterShadow(r,L,G,M,Y,j,X)}}}else if(J.visible){const de=y(L,J,S,E);L.onBeforeShadow(r,L,G,M,Y,de,null),r.renderBufferDirect(M,null,Y,de,L,null),L.onAfterShadow(r,L,G,M,Y,de,null)}}const q=L.children;for(let Y=0,J=q.length;Y<J;Y++)x(q[Y],G,M,S,E)}function b(L){L.target.removeEventListener("dispose",b);for(const M in l){const S=l[M],E=L.target.uuid;E in S&&(S[E].dispose(),delete S[E])}}}const reversedFuncs={[NeverDepth]:AlwaysDepth,[LessDepth]:GreaterDepth,[EqualDepth]:NotEqualDepth,[LessEqualDepth]:GreaterEqualDepth,[AlwaysDepth]:NeverDepth,[GreaterDepth]:LessDepth,[NotEqualDepth]:EqualDepth,[GreaterEqualDepth]:LessEqualDepth};function WebGLState(r,e){function t(){let oe=!1;const Ue=new Vector4;let xe=null;const Le=new Vector4(0,0,0,0);return{setMask:function(Oe){xe!==Oe&&!oe&&(r.colorMask(Oe,Oe,Oe,Oe),xe=Oe)},setLocked:function(Oe){oe=Oe},setClear:function(Oe,Ne,He,Qe,Je){Je===!0&&(Oe*=Qe,Ne*=Qe,He*=Qe),Ue.set(Oe,Ne,He,Qe),Le.equals(Ue)===!1&&(r.clearColor(Oe,Ne,He,Qe),Le.copy(Ue))},reset:function(){oe=!1,xe=null,Le.set(-1,0,0,0)}}}function n(){let oe=!1,Ue=!1,xe=null,Le=null,Oe=null;return{setReversed:function(Ne){if(Ue!==Ne){const He=e.get("EXT_clip_control");Ue?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT);const Qe=Oe;Oe=null,this.setClear(Qe)}Ue=Ne},getReversed:function(){return Ue},setTest:function(Ne){Ne?$(r.DEPTH_TEST):ee(r.DEPTH_TEST)},setMask:function(Ne){xe!==Ne&&!oe&&(r.depthMask(Ne),xe=Ne)},setFunc:function(Ne){if(Ue&&(Ne=reversedFuncs[Ne]),Le!==Ne){switch(Ne){case NeverDepth:r.depthFunc(r.NEVER);break;case AlwaysDepth:r.depthFunc(r.ALWAYS);break;case LessDepth:r.depthFunc(r.LESS);break;case LessEqualDepth:r.depthFunc(r.LEQUAL);break;case EqualDepth:r.depthFunc(r.EQUAL);break;case GreaterEqualDepth:r.depthFunc(r.GEQUAL);break;case GreaterDepth:r.depthFunc(r.GREATER);break;case NotEqualDepth:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Le=Ne}},setLocked:function(Ne){oe=Ne},setClear:function(Ne){Oe!==Ne&&(Ue&&(Ne=1-Ne),r.clearDepth(Ne),Oe=Ne)},reset:function(){oe=!1,xe=null,Le=null,Oe=null,Ue=!1}}}function i(){let oe=!1,Ue=null,xe=null,Le=null,Oe=null,Ne=null,He=null,Qe=null,Je=null;return{setTest:function(Ye){oe||(Ye?$(r.STENCIL_TEST):ee(r.STENCIL_TEST))},setMask:function(Ye){Ue!==Ye&&!oe&&(r.stencilMask(Ye),Ue=Ye)},setFunc:function(Ye,Ze,st){(xe!==Ye||Le!==Ze||Oe!==st)&&(r.stencilFunc(Ye,Ze,st),xe=Ye,Le=Ze,Oe=st)},setOp:function(Ye,Ze,st){(Ne!==Ye||He!==Ze||Qe!==st)&&(r.stencilOp(Ye,Ze,st),Ne=Ye,He=Ze,Qe=st)},setLocked:function(Ye){oe=Ye},setClear:function(Ye){Je!==Ye&&(r.clearStencil(Ye),Je=Ye)},reset:function(){oe=!1,Ue=null,xe=null,Le=null,Oe=null,Ne=null,He=null,Qe=null,Je=null}}}const s=new t,a=new n,o=new i,c=new WeakMap,l=new WeakMap;let u={},h={},d=new WeakMap,f=[],p=null,_=!1,g=null,v=null,F=null,y=null,x=null,b=null,L=null,G=new Color(0,0,0),M=0,S=!1,E=null,I=null,q=null,Y=null,J=null;const de=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let fe=!1,pe=0;const X=r.getParameter(r.VERSION);X.indexOf("WebGL")!==-1?(pe=parseFloat(/^WebGL (\d)/.exec(X)[1]),fe=pe>=1):X.indexOf("OpenGL ES")!==-1&&(pe=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),fe=pe>=2);let O=null,j={};const re=r.getParameter(r.SCISSOR_BOX),le=r.getParameter(r.VIEWPORT),me=new Vector4().fromArray(re),ce=new Vector4().fromArray(le);function N(oe,Ue,xe,Le){const Oe=new Uint8Array(4),Ne=r.createTexture();r.bindTexture(oe,Ne),r.texParameteri(oe,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(oe,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let He=0;He<xe;He++)oe===r.TEXTURE_3D||oe===r.TEXTURE_2D_ARRAY?r.texImage3D(Ue,0,r.RGBA,1,1,Le,0,r.RGBA,r.UNSIGNED_BYTE,Oe):r.texImage2D(Ue+He,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Oe);return Ne}const w={};w[r.TEXTURE_2D]=N(r.TEXTURE_2D,r.TEXTURE_2D,1),w[r.TEXTURE_CUBE_MAP]=N(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),w[r.TEXTURE_2D_ARRAY]=N(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),w[r.TEXTURE_3D]=N(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),$(r.DEPTH_TEST),a.setFunc(LessEqualDepth),ue(!1),Ee(CullFaceBack),$(r.CULL_FACE),H(NoBlending);function $(oe){u[oe]!==!0&&(r.enable(oe),u[oe]=!0)}function ee(oe){u[oe]!==!1&&(r.disable(oe),u[oe]=!1)}function Z(oe,Ue){return h[oe]!==Ue?(r.bindFramebuffer(oe,Ue),h[oe]=Ue,oe===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=Ue),oe===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=Ue),!0):!1}function ne(oe,Ue){let xe=f,Le=!1;if(oe){xe=d.get(Ue),xe===void 0&&(xe=[],d.set(Ue,xe));const Oe=oe.textures;if(xe.length!==Oe.length||xe[0]!==r.COLOR_ATTACHMENT0){for(let Ne=0,He=Oe.length;Ne<He;Ne++)xe[Ne]=r.COLOR_ATTACHMENT0+Ne;xe.length=Oe.length,Le=!0}}else xe[0]!==r.BACK&&(xe[0]=r.BACK,Le=!0);Le&&r.drawBuffers(xe)}function he(oe){return p!==oe?(r.useProgram(oe),p=oe,!0):!1}const Ce={[AddEquation]:r.FUNC_ADD,[SubtractEquation]:r.FUNC_SUBTRACT,[ReverseSubtractEquation]:r.FUNC_REVERSE_SUBTRACT};Ce[MinEquation]=r.MIN,Ce[MaxEquation]=r.MAX;const De={[ZeroFactor]:r.ZERO,[OneFactor]:r.ONE,[SrcColorFactor]:r.SRC_COLOR,[SrcAlphaFactor]:r.SRC_ALPHA,[SrcAlphaSaturateFactor]:r.SRC_ALPHA_SATURATE,[DstColorFactor]:r.DST_COLOR,[DstAlphaFactor]:r.DST_ALPHA,[OneMinusSrcColorFactor]:r.ONE_MINUS_SRC_COLOR,[OneMinusSrcAlphaFactor]:r.ONE_MINUS_SRC_ALPHA,[OneMinusDstColorFactor]:r.ONE_MINUS_DST_COLOR,[OneMinusDstAlphaFactor]:r.ONE_MINUS_DST_ALPHA,[ConstantColorFactor]:r.CONSTANT_COLOR,[OneMinusConstantColorFactor]:r.ONE_MINUS_CONSTANT_COLOR,[ConstantAlphaFactor]:r.CONSTANT_ALPHA,[OneMinusConstantAlphaFactor]:r.ONE_MINUS_CONSTANT_ALPHA};function H(oe,Ue,xe,Le,Oe,Ne,He,Qe,Je,Ye){if(oe===NoBlending){_===!0&&(ee(r.BLEND),_=!1);return}if(_===!1&&($(r.BLEND),_=!0),oe!==CustomBlending){if(oe!==g||Ye!==S){if((v!==AddEquation||x!==AddEquation)&&(r.blendEquation(r.FUNC_ADD),v=AddEquation,x=AddEquation),Ye)switch(oe){case NormalBlending:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case AdditiveBlending:r.blendFunc(r.ONE,r.ONE);break;case SubtractiveBlending:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case MultiplyBlending:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",oe);break}else switch(oe){case NormalBlending:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case AdditiveBlending:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case SubtractiveBlending:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case MultiplyBlending:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",oe);break}F=null,y=null,b=null,L=null,G.set(0,0,0),M=0,g=oe,S=Ye}return}Oe=Oe||Ue,Ne=Ne||xe,He=He||Le,(Ue!==v||Oe!==x)&&(r.blendEquationSeparate(Ce[Ue],Ce[Oe]),v=Ue,x=Oe),(xe!==F||Le!==y||Ne!==b||He!==L)&&(r.blendFuncSeparate(De[xe],De[Le],De[Ne],De[He]),F=xe,y=Le,b=Ne,L=He),(Qe.equals(G)===!1||Je!==M)&&(r.blendColor(Qe.r,Qe.g,Qe.b,Je),G.copy(Qe),M=Je),g=oe,S=!1}function ae(oe,Ue){oe.side===DoubleSide?ee(r.CULL_FACE):$(r.CULL_FACE);let xe=oe.side===BackSide;Ue&&(xe=!xe),ue(xe),oe.blending===NormalBlending&&oe.transparent===!1?H(NoBlending):H(oe.blending,oe.blendEquation,oe.blendSrc,oe.blendDst,oe.blendEquationAlpha,oe.blendSrcAlpha,oe.blendDstAlpha,oe.blendColor,oe.blendAlpha,oe.premultipliedAlpha),a.setFunc(oe.depthFunc),a.setTest(oe.depthTest),a.setMask(oe.depthWrite),s.setMask(oe.colorWrite);const Le=oe.stencilWrite;o.setTest(Le),Le&&(o.setMask(oe.stencilWriteMask),o.setFunc(oe.stencilFunc,oe.stencilRef,oe.stencilFuncMask),o.setOp(oe.stencilFail,oe.stencilZFail,oe.stencilZPass)),m(oe.polygonOffset,oe.polygonOffsetFactor,oe.polygonOffsetUnits),oe.alphaToCoverage===!0?$(r.SAMPLE_ALPHA_TO_COVERAGE):ee(r.SAMPLE_ALPHA_TO_COVERAGE)}function ue(oe){E!==oe&&(oe?r.frontFace(r.CW):r.frontFace(r.CCW),E=oe)}function Ee(oe){oe!==CullFaceNone?($(r.CULL_FACE),oe!==I&&(oe===CullFaceBack?r.cullFace(r.BACK):oe===CullFaceFront?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ee(r.CULL_FACE),I=oe}function ye(oe){oe!==q&&(fe&&r.lineWidth(oe),q=oe)}function m(oe,Ue,xe){oe?($(r.POLYGON_OFFSET_FILL),(Y!==Ue||J!==xe)&&(r.polygonOffset(Ue,xe),Y=Ue,J=xe)):ee(r.POLYGON_OFFSET_FILL)}function R(oe){oe?$(r.SCISSOR_TEST):ee(r.SCISSOR_TEST)}function z(oe){oe===void 0&&(oe=r.TEXTURE0+de-1),O!==oe&&(r.activeTexture(oe),O=oe)}function D(oe,Ue,xe){xe===void 0&&(O===null?xe=r.TEXTURE0+de-1:xe=O);let Le=j[xe];Le===void 0&&(Le={type:void 0,texture:void 0},j[xe]=Le),(Le.type!==oe||Le.texture!==Ue)&&(O!==xe&&(r.activeTexture(xe),O=xe),r.bindTexture(oe,Ue||w[oe]),Le.type=oe,Le.texture=Ue)}function K(){const oe=j[O];oe!==void 0&&oe.type!==void 0&&(r.bindTexture(oe.type,null),oe.type=void 0,oe.texture=void 0)}function te(){try{r.compressedTexImage2D.apply(r,arguments)}catch(oe){console.error("THREE.WebGLState:",oe)}}function se(){try{r.compressedTexImage3D.apply(r,arguments)}catch(oe){console.error("THREE.WebGLState:",oe)}}function ie(){try{r.texSubImage2D.apply(r,arguments)}catch(oe){console.error("THREE.WebGLState:",oe)}}function Se(){try{r.texSubImage3D.apply(r,arguments)}catch(oe){console.error("THREE.WebGLState:",oe)}}function ve(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(oe){console.error("THREE.WebGLState:",oe)}}function be(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(oe){console.error("THREE.WebGLState:",oe)}}function Pe(){try{r.texStorage2D.apply(r,arguments)}catch(oe){console.error("THREE.WebGLState:",oe)}}function _e(){try{r.texStorage3D.apply(r,arguments)}catch(oe){console.error("THREE.WebGLState:",oe)}}function Ae(){try{r.texImage2D.apply(r,arguments)}catch(oe){console.error("THREE.WebGLState:",oe)}}function Ie(){try{r.texImage3D.apply(r,arguments)}catch(oe){console.error("THREE.WebGLState:",oe)}}function Fe(oe){me.equals(oe)===!1&&(r.scissor(oe.x,oe.y,oe.z,oe.w),me.copy(oe))}function Te(oe){ce.equals(oe)===!1&&(r.viewport(oe.x,oe.y,oe.z,oe.w),ce.copy(oe))}function Be(oe,Ue){let xe=l.get(Ue);xe===void 0&&(xe=new WeakMap,l.set(Ue,xe));let Le=xe.get(oe);Le===void 0&&(Le=r.getUniformBlockIndex(Ue,oe.name),xe.set(oe,Le))}function Ve(oe,Ue){const Le=l.get(Ue).get(oe);c.get(Ue)!==Le&&(r.uniformBlockBinding(Ue,Le,oe.__bindingPointIndex),c.set(Ue,Le))}function Ge(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},O=null,j={},h={},d=new WeakMap,f=[],p=null,_=!1,g=null,v=null,F=null,y=null,x=null,b=null,L=null,G=new Color(0,0,0),M=0,S=!1,E=null,I=null,q=null,Y=null,J=null,me.set(0,0,r.canvas.width,r.canvas.height),ce.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:$,disable:ee,bindFramebuffer:Z,drawBuffers:ne,useProgram:he,setBlending:H,setMaterial:ae,setFlipSided:ue,setCullFace:Ee,setLineWidth:ye,setPolygonOffset:m,setScissorTest:R,activeTexture:z,bindTexture:D,unbindTexture:K,compressedTexImage2D:te,compressedTexImage3D:se,texImage2D:Ae,texImage3D:Ie,updateUBOMapping:Be,uniformBlockBinding:Ve,texStorage2D:Pe,texStorage3D:_e,texSubImage2D:ie,texSubImage3D:Se,compressedTexSubImage2D:ve,compressedTexSubImage3D:be,scissor:Fe,viewport:Te,reset:Ge}}function getByteLength(r,e,t,n){const i=getTextureTypeByteLength(n);switch(t){case AlphaFormat:return r*e;case LuminanceFormat:return r*e;case LuminanceAlphaFormat:return r*e*2;case RedFormat:return r*e/i.components*i.byteLength;case RedIntegerFormat:return r*e/i.components*i.byteLength;case RGFormat:return r*e*2/i.components*i.byteLength;case RGIntegerFormat:return r*e*2/i.components*i.byteLength;case RGBFormat:return r*e*3/i.components*i.byteLength;case RGBAFormat:return r*e*4/i.components*i.byteLength;case RGBAIntegerFormat:return r*e*4/i.components*i.byteLength;case RGB_S3TC_DXT1_Format:case RGBA_S3TC_DXT1_Format:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case RGBA_S3TC_DXT3_Format:case RGBA_S3TC_DXT5_Format:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case RGB_PVRTC_2BPPV1_Format:case RGBA_PVRTC_2BPPV1_Format:return Math.max(r,16)*Math.max(e,8)/4;case RGB_PVRTC_4BPPV1_Format:case RGBA_PVRTC_4BPPV1_Format:return Math.max(r,8)*Math.max(e,8)/2;case RGB_ETC1_Format:case RGB_ETC2_Format:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case RGBA_ETC2_EAC_Format:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case RGBA_ASTC_4x4_Format:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case RGBA_ASTC_5x4_Format:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case RGBA_ASTC_5x5_Format:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case RGBA_ASTC_6x5_Format:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case RGBA_ASTC_6x6_Format:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case RGBA_ASTC_8x5_Format:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case RGBA_ASTC_8x6_Format:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case RGBA_ASTC_8x8_Format:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case RGBA_ASTC_10x5_Format:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case RGBA_ASTC_10x6_Format:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case RGBA_ASTC_10x8_Format:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case RGBA_ASTC_10x10_Format:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case RGBA_ASTC_12x10_Format:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case RGBA_ASTC_12x12_Format:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case RGBA_BPTC_Format:case RGB_BPTC_SIGNED_Format:case RGB_BPTC_UNSIGNED_Format:return Math.ceil(r/4)*Math.ceil(e/4)*16;case RED_RGTC1_Format:case SIGNED_RED_RGTC1_Format:return Math.ceil(r/4)*Math.ceil(e/4)*8;case RED_GREEN_RGTC2_Format:case SIGNED_RED_GREEN_RGTC2_Format:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function getTextureTypeByteLength(r){switch(r){case UnsignedByteType:case ByteType:return{byteLength:1,components:1};case UnsignedShortType:case ShortType:case HalfFloatType:return{byteLength:2,components:1};case UnsignedShort4444Type:case UnsignedShort5551Type:return{byteLength:2,components:4};case UnsignedIntType:case IntType:case FloatType:return{byteLength:4,components:1};case UnsignedInt5999Type:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function WebGLTextures(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Vector2,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(z,D){return f?new OffscreenCanvas(z,D):createElementNS("canvas")}function _(z,D,K){let te=1;const se=R(z);if((se.width>K||se.height>K)&&(te=K/Math.max(se.width,se.height)),te<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){const ie=Math.floor(te*se.width),Se=Math.floor(te*se.height);h===void 0&&(h=p(ie,Se));const ve=D?p(ie,Se):h;return ve.width=ie,ve.height=Se,ve.getContext("2d").drawImage(z,0,0,ie,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+ie+"x"+Se+")."),ve}else return"data"in z&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),z;return z}function g(z){return z.generateMipmaps}function v(z){r.generateMipmap(z)}function F(z){return z.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?r.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(z,D,K,te,se=!1){if(z!==null){if(r[z]!==void 0)return r[z];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let ie=D;if(D===r.RED&&(K===r.FLOAT&&(ie=r.R32F),K===r.HALF_FLOAT&&(ie=r.R16F),K===r.UNSIGNED_BYTE&&(ie=r.R8)),D===r.RED_INTEGER&&(K===r.UNSIGNED_BYTE&&(ie=r.R8UI),K===r.UNSIGNED_SHORT&&(ie=r.R16UI),K===r.UNSIGNED_INT&&(ie=r.R32UI),K===r.BYTE&&(ie=r.R8I),K===r.SHORT&&(ie=r.R16I),K===r.INT&&(ie=r.R32I)),D===r.RG&&(K===r.FLOAT&&(ie=r.RG32F),K===r.HALF_FLOAT&&(ie=r.RG16F),K===r.UNSIGNED_BYTE&&(ie=r.RG8)),D===r.RG_INTEGER&&(K===r.UNSIGNED_BYTE&&(ie=r.RG8UI),K===r.UNSIGNED_SHORT&&(ie=r.RG16UI),K===r.UNSIGNED_INT&&(ie=r.RG32UI),K===r.BYTE&&(ie=r.RG8I),K===r.SHORT&&(ie=r.RG16I),K===r.INT&&(ie=r.RG32I)),D===r.RGB_INTEGER&&(K===r.UNSIGNED_BYTE&&(ie=r.RGB8UI),K===r.UNSIGNED_SHORT&&(ie=r.RGB16UI),K===r.UNSIGNED_INT&&(ie=r.RGB32UI),K===r.BYTE&&(ie=r.RGB8I),K===r.SHORT&&(ie=r.RGB16I),K===r.INT&&(ie=r.RGB32I)),D===r.RGBA_INTEGER&&(K===r.UNSIGNED_BYTE&&(ie=r.RGBA8UI),K===r.UNSIGNED_SHORT&&(ie=r.RGBA16UI),K===r.UNSIGNED_INT&&(ie=r.RGBA32UI),K===r.BYTE&&(ie=r.RGBA8I),K===r.SHORT&&(ie=r.RGBA16I),K===r.INT&&(ie=r.RGBA32I)),D===r.RGB&&K===r.UNSIGNED_INT_5_9_9_9_REV&&(ie=r.RGB9_E5),D===r.RGBA){const Se=se?LinearTransfer:ColorManagement.getTransfer(te);K===r.FLOAT&&(ie=r.RGBA32F),K===r.HALF_FLOAT&&(ie=r.RGBA16F),K===r.UNSIGNED_BYTE&&(ie=Se===SRGBTransfer?r.SRGB8_ALPHA8:r.RGBA8),K===r.UNSIGNED_SHORT_4_4_4_4&&(ie=r.RGBA4),K===r.UNSIGNED_SHORT_5_5_5_1&&(ie=r.RGB5_A1)}return(ie===r.R16F||ie===r.R32F||ie===r.RG16F||ie===r.RG32F||ie===r.RGBA16F||ie===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function x(z,D){let K;return z?D===null||D===UnsignedIntType||D===UnsignedInt248Type?K=r.DEPTH24_STENCIL8:D===FloatType?K=r.DEPTH32F_STENCIL8:D===UnsignedShortType&&(K=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):D===null||D===UnsignedIntType||D===UnsignedInt248Type?K=r.DEPTH_COMPONENT24:D===FloatType?K=r.DEPTH_COMPONENT32F:D===UnsignedShortType&&(K=r.DEPTH_COMPONENT16),K}function b(z,D){return g(z)===!0||z.isFramebufferTexture&&z.minFilter!==NearestFilter&&z.minFilter!==LinearFilter?Math.log2(Math.max(D.width,D.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?D.mipmaps.length:1}function L(z){const D=z.target;D.removeEventListener("dispose",L),M(D),D.isVideoTexture&&u.delete(D)}function G(z){const D=z.target;D.removeEventListener("dispose",G),E(D)}function M(z){const D=n.get(z);if(D.__webglInit===void 0)return;const K=z.source,te=d.get(K);if(te){const se=te[D.__cacheKey];se.usedTimes--,se.usedTimes===0&&S(z),Object.keys(te).length===0&&d.delete(K)}n.remove(z)}function S(z){const D=n.get(z);r.deleteTexture(D.__webglTexture);const K=z.source,te=d.get(K);delete te[D.__cacheKey],a.memory.textures--}function E(z){const D=n.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),n.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(D.__webglFramebuffer[te]))for(let se=0;se<D.__webglFramebuffer[te].length;se++)r.deleteFramebuffer(D.__webglFramebuffer[te][se]);else r.deleteFramebuffer(D.__webglFramebuffer[te]);D.__webglDepthbuffer&&r.deleteRenderbuffer(D.__webglDepthbuffer[te])}else{if(Array.isArray(D.__webglFramebuffer))for(let te=0;te<D.__webglFramebuffer.length;te++)r.deleteFramebuffer(D.__webglFramebuffer[te]);else r.deleteFramebuffer(D.__webglFramebuffer);if(D.__webglDepthbuffer&&r.deleteRenderbuffer(D.__webglDepthbuffer),D.__webglMultisampledFramebuffer&&r.deleteFramebuffer(D.__webglMultisampledFramebuffer),D.__webglColorRenderbuffer)for(let te=0;te<D.__webglColorRenderbuffer.length;te++)D.__webglColorRenderbuffer[te]&&r.deleteRenderbuffer(D.__webglColorRenderbuffer[te]);D.__webglDepthRenderbuffer&&r.deleteRenderbuffer(D.__webglDepthRenderbuffer)}const K=z.textures;for(let te=0,se=K.length;te<se;te++){const ie=n.get(K[te]);ie.__webglTexture&&(r.deleteTexture(ie.__webglTexture),a.memory.textures--),n.remove(K[te])}n.remove(z)}let I=0;function q(){I=0}function Y(){const z=I;return z>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+z+" texture units while this GPU supports only "+i.maxTextures),I+=1,z}function J(z){const D=[];return D.push(z.wrapS),D.push(z.wrapT),D.push(z.wrapR||0),D.push(z.magFilter),D.push(z.minFilter),D.push(z.anisotropy),D.push(z.internalFormat),D.push(z.format),D.push(z.type),D.push(z.generateMipmaps),D.push(z.premultiplyAlpha),D.push(z.flipY),D.push(z.unpackAlignment),D.push(z.colorSpace),D.join()}function de(z,D){const K=n.get(z);if(z.isVideoTexture&&ye(z),z.isRenderTargetTexture===!1&&z.version>0&&K.__version!==z.version){const te=z.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(K,z,D);return}}t.bindTexture(r.TEXTURE_2D,K.__webglTexture,r.TEXTURE0+D)}function fe(z,D){const K=n.get(z);if(z.version>0&&K.__version!==z.version){ce(K,z,D);return}t.bindTexture(r.TEXTURE_2D_ARRAY,K.__webglTexture,r.TEXTURE0+D)}function pe(z,D){const K=n.get(z);if(z.version>0&&K.__version!==z.version){ce(K,z,D);return}t.bindTexture(r.TEXTURE_3D,K.__webglTexture,r.TEXTURE0+D)}function X(z,D){const K=n.get(z);if(z.version>0&&K.__version!==z.version){N(K,z,D);return}t.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture,r.TEXTURE0+D)}const O={[RepeatWrapping]:r.REPEAT,[ClampToEdgeWrapping]:r.CLAMP_TO_EDGE,[MirroredRepeatWrapping]:r.MIRRORED_REPEAT},j={[NearestFilter]:r.NEAREST,[NearestMipmapNearestFilter]:r.NEAREST_MIPMAP_NEAREST,[NearestMipmapLinearFilter]:r.NEAREST_MIPMAP_LINEAR,[LinearFilter]:r.LINEAR,[LinearMipmapNearestFilter]:r.LINEAR_MIPMAP_NEAREST,[LinearMipmapLinearFilter]:r.LINEAR_MIPMAP_LINEAR},re={[NeverCompare]:r.NEVER,[AlwaysCompare]:r.ALWAYS,[LessCompare]:r.LESS,[LessEqualCompare]:r.LEQUAL,[EqualCompare]:r.EQUAL,[GreaterEqualCompare]:r.GEQUAL,[GreaterCompare]:r.GREATER,[NotEqualCompare]:r.NOTEQUAL};function le(z,D){if(D.type===FloatType&&e.has("OES_texture_float_linear")===!1&&(D.magFilter===LinearFilter||D.magFilter===LinearMipmapNearestFilter||D.magFilter===NearestMipmapLinearFilter||D.magFilter===LinearMipmapLinearFilter||D.minFilter===LinearFilter||D.minFilter===LinearMipmapNearestFilter||D.minFilter===NearestMipmapLinearFilter||D.minFilter===LinearMipmapLinearFilter)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(z,r.TEXTURE_WRAP_S,O[D.wrapS]),r.texParameteri(z,r.TEXTURE_WRAP_T,O[D.wrapT]),(z===r.TEXTURE_3D||z===r.TEXTURE_2D_ARRAY)&&r.texParameteri(z,r.TEXTURE_WRAP_R,O[D.wrapR]),r.texParameteri(z,r.TEXTURE_MAG_FILTER,j[D.magFilter]),r.texParameteri(z,r.TEXTURE_MIN_FILTER,j[D.minFilter]),D.compareFunction&&(r.texParameteri(z,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(z,r.TEXTURE_COMPARE_FUNC,re[D.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(D.magFilter===NearestFilter||D.minFilter!==NearestMipmapLinearFilter&&D.minFilter!==LinearMipmapLinearFilter||D.type===FloatType&&e.has("OES_texture_float_linear")===!1)return;if(D.anisotropy>1||n.get(D).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");r.texParameterf(z,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(D.anisotropy,i.getMaxAnisotropy())),n.get(D).__currentAnisotropy=D.anisotropy}}}function me(z,D){let K=!1;z.__webglInit===void 0&&(z.__webglInit=!0,D.addEventListener("dispose",L));const te=D.source;let se=d.get(te);se===void 0&&(se={},d.set(te,se));const ie=J(D);if(ie!==z.__cacheKey){se[ie]===void 0&&(se[ie]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,K=!0),se[ie].usedTimes++;const Se=se[z.__cacheKey];Se!==void 0&&(se[z.__cacheKey].usedTimes--,Se.usedTimes===0&&S(D)),z.__cacheKey=ie,z.__webglTexture=se[ie].texture}return K}function ce(z,D,K){let te=r.TEXTURE_2D;(D.isDataArrayTexture||D.isCompressedArrayTexture)&&(te=r.TEXTURE_2D_ARRAY),D.isData3DTexture&&(te=r.TEXTURE_3D);const se=me(z,D),ie=D.source;t.bindTexture(te,z.__webglTexture,r.TEXTURE0+K);const Se=n.get(ie);if(ie.version!==Se.__version||se===!0){t.activeTexture(r.TEXTURE0+K);const ve=ColorManagement.getPrimaries(ColorManagement.workingColorSpace),be=D.colorSpace===NoColorSpace?null:ColorManagement.getPrimaries(D.colorSpace),Pe=D.colorSpace===NoColorSpace||ve===be?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,D.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,D.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let _e=_(D.image,!1,i.maxTextureSize);_e=m(D,_e);const Ae=s.convert(D.format,D.colorSpace),Ie=s.convert(D.type);let Fe=y(D.internalFormat,Ae,Ie,D.colorSpace,D.isVideoTexture);le(te,D);let Te;const Be=D.mipmaps,Ve=D.isVideoTexture!==!0,Ge=Se.__version===void 0||se===!0,oe=ie.dataReady,Ue=b(D,_e);if(D.isDepthTexture)Fe=x(D.format===DepthStencilFormat,D.type),Ge&&(Ve?t.texStorage2D(r.TEXTURE_2D,1,Fe,_e.width,_e.height):t.texImage2D(r.TEXTURE_2D,0,Fe,_e.width,_e.height,0,Ae,Ie,null));else if(D.isDataTexture)if(Be.length>0){Ve&&Ge&&t.texStorage2D(r.TEXTURE_2D,Ue,Fe,Be[0].width,Be[0].height);for(let xe=0,Le=Be.length;xe<Le;xe++)Te=Be[xe],Ve?oe&&t.texSubImage2D(r.TEXTURE_2D,xe,0,0,Te.width,Te.height,Ae,Ie,Te.data):t.texImage2D(r.TEXTURE_2D,xe,Fe,Te.width,Te.height,0,Ae,Ie,Te.data);D.generateMipmaps=!1}else Ve?(Ge&&t.texStorage2D(r.TEXTURE_2D,Ue,Fe,_e.width,_e.height),oe&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,_e.width,_e.height,Ae,Ie,_e.data)):t.texImage2D(r.TEXTURE_2D,0,Fe,_e.width,_e.height,0,Ae,Ie,_e.data);else if(D.isCompressedTexture)if(D.isCompressedArrayTexture){Ve&&Ge&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ue,Fe,Be[0].width,Be[0].height,_e.depth);for(let xe=0,Le=Be.length;xe<Le;xe++)if(Te=Be[xe],D.format!==RGBAFormat)if(Ae!==null)if(Ve){if(oe)if(D.layerUpdates.size>0){const Oe=getByteLength(Te.width,Te.height,D.format,D.type);for(const Ne of D.layerUpdates){const He=Te.data.subarray(Ne*Oe/Te.data.BYTES_PER_ELEMENT,(Ne+1)*Oe/Te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,xe,0,0,Ne,Te.width,Te.height,1,Ae,He)}D.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,xe,0,0,0,Te.width,Te.height,_e.depth,Ae,Te.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,xe,Fe,Te.width,Te.height,_e.depth,0,Te.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?oe&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,xe,0,0,0,Te.width,Te.height,_e.depth,Ae,Ie,Te.data):t.texImage3D(r.TEXTURE_2D_ARRAY,xe,Fe,Te.width,Te.height,_e.depth,0,Ae,Ie,Te.data)}else{Ve&&Ge&&t.texStorage2D(r.TEXTURE_2D,Ue,Fe,Be[0].width,Be[0].height);for(let xe=0,Le=Be.length;xe<Le;xe++)Te=Be[xe],D.format!==RGBAFormat?Ae!==null?Ve?oe&&t.compressedTexSubImage2D(r.TEXTURE_2D,xe,0,0,Te.width,Te.height,Ae,Te.data):t.compressedTexImage2D(r.TEXTURE_2D,xe,Fe,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?oe&&t.texSubImage2D(r.TEXTURE_2D,xe,0,0,Te.width,Te.height,Ae,Ie,Te.data):t.texImage2D(r.TEXTURE_2D,xe,Fe,Te.width,Te.height,0,Ae,Ie,Te.data)}else if(D.isDataArrayTexture)if(Ve){if(Ge&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ue,Fe,_e.width,_e.height,_e.depth),oe)if(D.layerUpdates.size>0){const xe=getByteLength(_e.width,_e.height,D.format,D.type);for(const Le of D.layerUpdates){const Oe=_e.data.subarray(Le*xe/_e.data.BYTES_PER_ELEMENT,(Le+1)*xe/_e.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Le,_e.width,_e.height,1,Ae,Ie,Oe)}D.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Ae,Ie,_e.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Fe,_e.width,_e.height,_e.depth,0,Ae,Ie,_e.data);else if(D.isData3DTexture)Ve?(Ge&&t.texStorage3D(r.TEXTURE_3D,Ue,Fe,_e.width,_e.height,_e.depth),oe&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Ae,Ie,_e.data)):t.texImage3D(r.TEXTURE_3D,0,Fe,_e.width,_e.height,_e.depth,0,Ae,Ie,_e.data);else if(D.isFramebufferTexture){if(Ge)if(Ve)t.texStorage2D(r.TEXTURE_2D,Ue,Fe,_e.width,_e.height);else{let xe=_e.width,Le=_e.height;for(let Oe=0;Oe<Ue;Oe++)t.texImage2D(r.TEXTURE_2D,Oe,Fe,xe,Le,0,Ae,Ie,null),xe>>=1,Le>>=1}}else if(Be.length>0){if(Ve&&Ge){const xe=R(Be[0]);t.texStorage2D(r.TEXTURE_2D,Ue,Fe,xe.width,xe.height)}for(let xe=0,Le=Be.length;xe<Le;xe++)Te=Be[xe],Ve?oe&&t.texSubImage2D(r.TEXTURE_2D,xe,0,0,Ae,Ie,Te):t.texImage2D(r.TEXTURE_2D,xe,Fe,Ae,Ie,Te);D.generateMipmaps=!1}else if(Ve){if(Ge){const xe=R(_e);t.texStorage2D(r.TEXTURE_2D,Ue,Fe,xe.width,xe.height)}oe&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ae,Ie,_e)}else t.texImage2D(r.TEXTURE_2D,0,Fe,Ae,Ie,_e);g(D)&&v(te),Se.__version=ie.version,D.onUpdate&&D.onUpdate(D)}z.__version=D.version}function N(z,D,K){if(D.image.length!==6)return;const te=me(z,D),se=D.source;t.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture,r.TEXTURE0+K);const ie=n.get(se);if(se.version!==ie.__version||te===!0){t.activeTexture(r.TEXTURE0+K);const Se=ColorManagement.getPrimaries(ColorManagement.workingColorSpace),ve=D.colorSpace===NoColorSpace?null:ColorManagement.getPrimaries(D.colorSpace),be=D.colorSpace===NoColorSpace||Se===ve?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,D.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,D.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const Pe=D.isCompressedTexture||D.image[0].isCompressedTexture,_e=D.image[0]&&D.image[0].isDataTexture,Ae=[];for(let Le=0;Le<6;Le++)!Pe&&!_e?Ae[Le]=_(D.image[Le],!0,i.maxCubemapSize):Ae[Le]=_e?D.image[Le].image:D.image[Le],Ae[Le]=m(D,Ae[Le]);const Ie=Ae[0],Fe=s.convert(D.format,D.colorSpace),Te=s.convert(D.type),Be=y(D.internalFormat,Fe,Te,D.colorSpace),Ve=D.isVideoTexture!==!0,Ge=ie.__version===void 0||te===!0,oe=se.dataReady;let Ue=b(D,Ie);le(r.TEXTURE_CUBE_MAP,D);let xe;if(Pe){Ve&&Ge&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Ue,Be,Ie.width,Ie.height);for(let Le=0;Le<6;Le++){xe=Ae[Le].mipmaps;for(let Oe=0;Oe<xe.length;Oe++){const Ne=xe[Oe];D.format!==RGBAFormat?Fe!==null?Ve?oe&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Le,Oe,0,0,Ne.width,Ne.height,Fe,Ne.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Le,Oe,Be,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?oe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Le,Oe,0,0,Ne.width,Ne.height,Fe,Te,Ne.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Le,Oe,Be,Ne.width,Ne.height,0,Fe,Te,Ne.data)}}}else{if(xe=D.mipmaps,Ve&&Ge){xe.length>0&&Ue++;const Le=R(Ae[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Ue,Be,Le.width,Le.height)}for(let Le=0;Le<6;Le++)if(_e){Ve?oe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,0,0,Ae[Le].width,Ae[Le].height,Fe,Te,Ae[Le].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,Be,Ae[Le].width,Ae[Le].height,0,Fe,Te,Ae[Le].data);for(let Oe=0;Oe<xe.length;Oe++){const He=xe[Oe].image[Le].image;Ve?oe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Le,Oe+1,0,0,He.width,He.height,Fe,Te,He.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Le,Oe+1,Be,He.width,He.height,0,Fe,Te,He.data)}}else{Ve?oe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,0,0,Fe,Te,Ae[Le]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,Be,Fe,Te,Ae[Le]);for(let Oe=0;Oe<xe.length;Oe++){const Ne=xe[Oe];Ve?oe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Le,Oe+1,0,0,Fe,Te,Ne.image[Le]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Le,Oe+1,Be,Fe,Te,Ne.image[Le])}}}g(D)&&v(r.TEXTURE_CUBE_MAP),ie.__version=se.version,D.onUpdate&&D.onUpdate(D)}z.__version=D.version}function w(z,D,K,te,se,ie){const Se=s.convert(K.format,K.colorSpace),ve=s.convert(K.type),be=y(K.internalFormat,Se,ve,K.colorSpace),Pe=n.get(D),_e=n.get(K);if(_e.__renderTarget=D,!Pe.__hasExternalTextures){const Ae=Math.max(1,D.width>>ie),Ie=Math.max(1,D.height>>ie);se===r.TEXTURE_3D||se===r.TEXTURE_2D_ARRAY?t.texImage3D(se,ie,be,Ae,Ie,D.depth,0,Se,ve,null):t.texImage2D(se,ie,be,Ae,Ie,0,Se,ve,null)}t.bindFramebuffer(r.FRAMEBUFFER,z),Ee(D)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,te,se,_e.__webglTexture,0,ue(D)):(se===r.TEXTURE_2D||se>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,te,se,_e.__webglTexture,ie),t.bindFramebuffer(r.FRAMEBUFFER,null)}function $(z,D,K){if(r.bindRenderbuffer(r.RENDERBUFFER,z),D.depthBuffer){const te=D.depthTexture,se=te&&te.isDepthTexture?te.type:null,ie=x(D.stencilBuffer,se),Se=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ve=ue(D);Ee(D)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ve,ie,D.width,D.height):K?r.renderbufferStorageMultisample(r.RENDERBUFFER,ve,ie,D.width,D.height):r.renderbufferStorage(r.RENDERBUFFER,ie,D.width,D.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Se,r.RENDERBUFFER,z)}else{const te=D.textures;for(let se=0;se<te.length;se++){const ie=te[se],Se=s.convert(ie.format,ie.colorSpace),ve=s.convert(ie.type),be=y(ie.internalFormat,Se,ve,ie.colorSpace),Pe=ue(D);K&&Ee(D)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Pe,be,D.width,D.height):Ee(D)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Pe,be,D.width,D.height):r.renderbufferStorage(r.RENDERBUFFER,be,D.width,D.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ee(z,D){if(D&&D.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,z),!(D.depthTexture&&D.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const te=n.get(D.depthTexture);te.__renderTarget=D,(!te.__webglTexture||D.depthTexture.image.width!==D.width||D.depthTexture.image.height!==D.height)&&(D.depthTexture.image.width=D.width,D.depthTexture.image.height=D.height,D.depthTexture.needsUpdate=!0),de(D.depthTexture,0);const se=te.__webglTexture,ie=ue(D);if(D.depthTexture.format===DepthFormat)Ee(D)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,se,0,ie):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,se,0);else if(D.depthTexture.format===DepthStencilFormat)Ee(D)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,se,0,ie):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function Z(z){const D=n.get(z),K=z.isWebGLCubeRenderTarget===!0;if(D.__boundDepthTexture!==z.depthTexture){const te=z.depthTexture;if(D.__depthDisposeCallback&&D.__depthDisposeCallback(),te){const se=()=>{delete D.__boundDepthTexture,delete D.__depthDisposeCallback,te.removeEventListener("dispose",se)};te.addEventListener("dispose",se),D.__depthDisposeCallback=se}D.__boundDepthTexture=te}if(z.depthTexture&&!D.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");ee(D.__webglFramebuffer,z)}else if(K){D.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(t.bindFramebuffer(r.FRAMEBUFFER,D.__webglFramebuffer[te]),D.__webglDepthbuffer[te]===void 0)D.__webglDepthbuffer[te]=r.createRenderbuffer(),$(D.__webglDepthbuffer[te],z,!1);else{const se=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ie=D.__webglDepthbuffer[te];r.bindRenderbuffer(r.RENDERBUFFER,ie),r.framebufferRenderbuffer(r.FRAMEBUFFER,se,r.RENDERBUFFER,ie)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,D.__webglFramebuffer),D.__webglDepthbuffer===void 0)D.__webglDepthbuffer=r.createRenderbuffer(),$(D.__webglDepthbuffer,z,!1);else{const te=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,se=D.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,se),r.framebufferRenderbuffer(r.FRAMEBUFFER,te,r.RENDERBUFFER,se)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function ne(z,D,K){const te=n.get(z);D!==void 0&&w(te.__webglFramebuffer,z,z.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),K!==void 0&&Z(z)}function he(z){const D=z.texture,K=n.get(z),te=n.get(D);z.addEventListener("dispose",G);const se=z.textures,ie=z.isWebGLCubeRenderTarget===!0,Se=se.length>1;if(Se||(te.__webglTexture===void 0&&(te.__webglTexture=r.createTexture()),te.__version=D.version,a.memory.textures++),ie){K.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(D.mipmaps&&D.mipmaps.length>0){K.__webglFramebuffer[ve]=[];for(let be=0;be<D.mipmaps.length;be++)K.__webglFramebuffer[ve][be]=r.createFramebuffer()}else K.__webglFramebuffer[ve]=r.createFramebuffer()}else{if(D.mipmaps&&D.mipmaps.length>0){K.__webglFramebuffer=[];for(let ve=0;ve<D.mipmaps.length;ve++)K.__webglFramebuffer[ve]=r.createFramebuffer()}else K.__webglFramebuffer=r.createFramebuffer();if(Se)for(let ve=0,be=se.length;ve<be;ve++){const Pe=n.get(se[ve]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=r.createTexture(),a.memory.textures++)}if(z.samples>0&&Ee(z)===!1){K.__webglMultisampledFramebuffer=r.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let ve=0;ve<se.length;ve++){const be=se[ve];K.__webglColorRenderbuffer[ve]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,K.__webglColorRenderbuffer[ve]);const Pe=s.convert(be.format,be.colorSpace),_e=s.convert(be.type),Ae=y(be.internalFormat,Pe,_e,be.colorSpace,z.isXRRenderTarget===!0),Ie=ue(z);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ie,Ae,z.width,z.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ve,r.RENDERBUFFER,K.__webglColorRenderbuffer[ve])}r.bindRenderbuffer(r.RENDERBUFFER,null),z.depthBuffer&&(K.__webglDepthRenderbuffer=r.createRenderbuffer(),$(K.__webglDepthRenderbuffer,z,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ie){t.bindTexture(r.TEXTURE_CUBE_MAP,te.__webglTexture),le(r.TEXTURE_CUBE_MAP,D);for(let ve=0;ve<6;ve++)if(D.mipmaps&&D.mipmaps.length>0)for(let be=0;be<D.mipmaps.length;be++)w(K.__webglFramebuffer[ve][be],z,D,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,be);else w(K.__webglFramebuffer[ve],z,D,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);g(D)&&v(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let ve=0,be=se.length;ve<be;ve++){const Pe=se[ve],_e=n.get(Pe);t.bindTexture(r.TEXTURE_2D,_e.__webglTexture),le(r.TEXTURE_2D,Pe),w(K.__webglFramebuffer,z,Pe,r.COLOR_ATTACHMENT0+ve,r.TEXTURE_2D,0),g(Pe)&&v(r.TEXTURE_2D)}t.unbindTexture()}else{let ve=r.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(ve=z.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ve,te.__webglTexture),le(ve,D),D.mipmaps&&D.mipmaps.length>0)for(let be=0;be<D.mipmaps.length;be++)w(K.__webglFramebuffer[be],z,D,r.COLOR_ATTACHMENT0,ve,be);else w(K.__webglFramebuffer,z,D,r.COLOR_ATTACHMENT0,ve,0);g(D)&&v(ve),t.unbindTexture()}z.depthBuffer&&Z(z)}function Ce(z){const D=z.textures;for(let K=0,te=D.length;K<te;K++){const se=D[K];if(g(se)){const ie=F(z),Se=n.get(se).__webglTexture;t.bindTexture(ie,Se),v(ie),t.unbindTexture()}}}const De=[],H=[];function ae(z){if(z.samples>0){if(Ee(z)===!1){const D=z.textures,K=z.width,te=z.height;let se=r.COLOR_BUFFER_BIT;const ie=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Se=n.get(z),ve=D.length>1;if(ve)for(let be=0;be<D.length;be++)t.bindFramebuffer(r.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Se.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let be=0;be<D.length;be++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(se|=r.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(se|=r.STENCIL_BUFFER_BIT)),ve){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Se.__webglColorRenderbuffer[be]);const Pe=n.get(D[be]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Pe,0)}r.blitFramebuffer(0,0,K,te,0,0,K,te,se,r.NEAREST),c===!0&&(De.length=0,H.length=0,De.push(r.COLOR_ATTACHMENT0+be),z.depthBuffer&&z.resolveDepthBuffer===!1&&(De.push(ie),H.push(ie),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,H)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,De))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ve)for(let be=0;be<D.length;be++){t.bindFramebuffer(r.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.RENDERBUFFER,Se.__webglColorRenderbuffer[be]);const Pe=n.get(D[be]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Se.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.TEXTURE_2D,Pe,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.resolveDepthBuffer===!1&&c){const D=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[D])}}}function ue(z){return Math.min(i.maxSamples,z.samples)}function Ee(z){const D=n.get(z);return z.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&D.__useRenderToTexture!==!1}function ye(z){const D=a.render.frame;u.get(z)!==D&&(u.set(z,D),z.update())}function m(z,D){const K=z.colorSpace,te=z.format,se=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||K!==LinearSRGBColorSpace&&K!==NoColorSpace&&(ColorManagement.getTransfer(K)===SRGBTransfer?(te!==RGBAFormat||se!==UnsignedByteType)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),D}function R(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(l.width=z.naturalWidth||z.width,l.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(l.width=z.displayWidth,l.height=z.displayHeight):(l.width=z.width,l.height=z.height),l}this.allocateTextureUnit=Y,this.resetTextureUnits=q,this.setTexture2D=de,this.setTexture2DArray=fe,this.setTexture3D=pe,this.setTextureCube=X,this.rebindTextures=ne,this.setupRenderTarget=he,this.updateRenderTargetMipmap=Ce,this.updateMultisampleRenderTarget=ae,this.setupDepthRenderbuffer=Z,this.setupFrameBufferTexture=w,this.useMultisampledRTT=Ee}function WebGLUtils(r,e){function t(n,i=NoColorSpace){let s;const a=ColorManagement.getTransfer(i);if(n===UnsignedByteType)return r.UNSIGNED_BYTE;if(n===UnsignedShort4444Type)return r.UNSIGNED_SHORT_4_4_4_4;if(n===UnsignedShort5551Type)return r.UNSIGNED_SHORT_5_5_5_1;if(n===UnsignedInt5999Type)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===ByteType)return r.BYTE;if(n===ShortType)return r.SHORT;if(n===UnsignedShortType)return r.UNSIGNED_SHORT;if(n===IntType)return r.INT;if(n===UnsignedIntType)return r.UNSIGNED_INT;if(n===FloatType)return r.FLOAT;if(n===HalfFloatType)return r.HALF_FLOAT;if(n===AlphaFormat)return r.ALPHA;if(n===RGBFormat)return r.RGB;if(n===RGBAFormat)return r.RGBA;if(n===LuminanceFormat)return r.LUMINANCE;if(n===LuminanceAlphaFormat)return r.LUMINANCE_ALPHA;if(n===DepthFormat)return r.DEPTH_COMPONENT;if(n===DepthStencilFormat)return r.DEPTH_STENCIL;if(n===RedFormat)return r.RED;if(n===RedIntegerFormat)return r.RED_INTEGER;if(n===RGFormat)return r.RG;if(n===RGIntegerFormat)return r.RG_INTEGER;if(n===RGBAIntegerFormat)return r.RGBA_INTEGER;if(n===RGB_S3TC_DXT1_Format||n===RGBA_S3TC_DXT1_Format||n===RGBA_S3TC_DXT3_Format||n===RGBA_S3TC_DXT5_Format)if(a===SRGBTransfer)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===RGB_S3TC_DXT1_Format)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===RGBA_S3TC_DXT1_Format)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===RGBA_S3TC_DXT3_Format)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===RGBA_S3TC_DXT5_Format)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===RGB_S3TC_DXT1_Format)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===RGBA_S3TC_DXT1_Format)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===RGBA_S3TC_DXT3_Format)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===RGBA_S3TC_DXT5_Format)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===RGB_PVRTC_4BPPV1_Format||n===RGB_PVRTC_2BPPV1_Format||n===RGBA_PVRTC_4BPPV1_Format||n===RGBA_PVRTC_2BPPV1_Format)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===RGB_PVRTC_4BPPV1_Format)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===RGB_PVRTC_2BPPV1_Format)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===RGBA_PVRTC_4BPPV1_Format)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===RGBA_PVRTC_2BPPV1_Format)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===RGB_ETC1_Format||n===RGB_ETC2_Format||n===RGBA_ETC2_EAC_Format)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===RGB_ETC1_Format||n===RGB_ETC2_Format)return a===SRGBTransfer?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===RGBA_ETC2_EAC_Format)return a===SRGBTransfer?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===RGBA_ASTC_4x4_Format||n===RGBA_ASTC_5x4_Format||n===RGBA_ASTC_5x5_Format||n===RGBA_ASTC_6x5_Format||n===RGBA_ASTC_6x6_Format||n===RGBA_ASTC_8x5_Format||n===RGBA_ASTC_8x6_Format||n===RGBA_ASTC_8x8_Format||n===RGBA_ASTC_10x5_Format||n===RGBA_ASTC_10x6_Format||n===RGBA_ASTC_10x8_Format||n===RGBA_ASTC_10x10_Format||n===RGBA_ASTC_12x10_Format||n===RGBA_ASTC_12x12_Format)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===RGBA_ASTC_4x4_Format)return a===SRGBTransfer?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===RGBA_ASTC_5x4_Format)return a===SRGBTransfer?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===RGBA_ASTC_5x5_Format)return a===SRGBTransfer?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===RGBA_ASTC_6x5_Format)return a===SRGBTransfer?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===RGBA_ASTC_6x6_Format)return a===SRGBTransfer?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===RGBA_ASTC_8x5_Format)return a===SRGBTransfer?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===RGBA_ASTC_8x6_Format)return a===SRGBTransfer?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===RGBA_ASTC_8x8_Format)return a===SRGBTransfer?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===RGBA_ASTC_10x5_Format)return a===SRGBTransfer?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===RGBA_ASTC_10x6_Format)return a===SRGBTransfer?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===RGBA_ASTC_10x8_Format)return a===SRGBTransfer?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===RGBA_ASTC_10x10_Format)return a===SRGBTransfer?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===RGBA_ASTC_12x10_Format)return a===SRGBTransfer?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===RGBA_ASTC_12x12_Format)return a===SRGBTransfer?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===RGBA_BPTC_Format||n===RGB_BPTC_SIGNED_Format||n===RGB_BPTC_UNSIGNED_Format)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===RGBA_BPTC_Format)return a===SRGBTransfer?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===RGB_BPTC_SIGNED_Format)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===RGB_BPTC_UNSIGNED_Format)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===RED_RGTC1_Format||n===SIGNED_RED_RGTC1_Format||n===RED_GREEN_RGTC2_Format||n===SIGNED_RED_GREEN_RGTC2_Format)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===RGBA_BPTC_Format)return s.COMPRESSED_RED_RGTC1_EXT;if(n===SIGNED_RED_RGTC1_Format)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===RED_GREEN_RGTC2_Format)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===SIGNED_RED_GREEN_RGTC2_Format)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===UnsignedInt248Type?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}class ArrayCamera extends PerspectiveCamera{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Group extends Object3D{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _moveEvent={type:"move"};class WebXRController{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Group,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Group,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Vector3,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Vector3),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Group,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Vector3,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Vector3),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,n),v=this._getHandJoint(l,_);g!==null&&(v.matrix.fromArray(g.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=g.radius),v.visible=g!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,p=.005;l.inputState.pinching&&d>f+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(_moveEvent)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Group;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const _occlusion_vertex=`
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

}`;class WebXRDepthSensing{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Texture,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ShaderMaterial({vertexShader:_occlusion_vertex,fragmentShader:_occlusion_fragment,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Mesh(new PlaneGeometry(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class WebXRManager extends EventDispatcher{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,p=null;const _=new WebXRDepthSensing,g=t.getContextAttributes();let v=null,F=null;const y=[],x=[],b=new Vector2;let L=null;const G=new PerspectiveCamera;G.viewport=new Vector4;const M=new PerspectiveCamera;M.viewport=new Vector4;const S=[G,M],E=new ArrayCamera;let I=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ce){let N=y[ce];return N===void 0&&(N=new WebXRController,y[ce]=N),N.getTargetRaySpace()},this.getControllerGrip=function(ce){let N=y[ce];return N===void 0&&(N=new WebXRController,y[ce]=N),N.getGripSpace()},this.getHand=function(ce){let N=y[ce];return N===void 0&&(N=new WebXRController,y[ce]=N),N.getHandSpace()};function Y(ce){const N=x.indexOf(ce.inputSource);if(N===-1)return;const w=y[N];w!==void 0&&(w.update(ce.inputSource,ce.frame,l||a),w.dispatchEvent({type:ce.type,data:ce.inputSource}))}function J(){i.removeEventListener("select",Y),i.removeEventListener("selectstart",Y),i.removeEventListener("selectend",Y),i.removeEventListener("squeeze",Y),i.removeEventListener("squeezestart",Y),i.removeEventListener("squeezeend",Y),i.removeEventListener("end",J),i.removeEventListener("inputsourceschange",de);for(let ce=0;ce<y.length;ce++){const N=x[ce];N!==null&&(x[ce]=null,y[ce].disconnect(N))}I=null,q=null,_.reset(),e.setRenderTarget(v),f=null,d=null,h=null,i=null,F=null,me.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ce){s=ce,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ce){o=ce,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(ce){l=ce},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(ce){if(i=ce,i!==null){if(v=e.getRenderTarget(),i.addEventListener("select",Y),i.addEventListener("selectstart",Y),i.addEventListener("selectend",Y),i.addEventListener("squeeze",Y),i.addEventListener("squeezestart",Y),i.addEventListener("squeezeend",Y),i.addEventListener("end",J),i.addEventListener("inputsourceschange",de),g.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(b),i.renderState.layers===void 0){const N={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,N),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),F=new WebGLRenderTarget(f.framebufferWidth,f.framebufferHeight,{format:RGBAFormat,type:UnsignedByteType,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let N=null,w=null,$=null;g.depth&&($=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,N=g.stencil?DepthStencilFormat:DepthFormat,w=g.stencil?UnsignedInt248Type:UnsignedIntType);const ee={colorFormat:t.RGBA8,depthFormat:$,scaleFactor:s};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(ee),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),F=new WebGLRenderTarget(d.textureWidth,d.textureHeight,{format:RGBAFormat,type:UnsignedByteType,depthTexture:new DepthTexture(d.textureWidth,d.textureHeight,w,void 0,void 0,void 0,void 0,void 0,void 0,N),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}F.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),me.setContext(i),me.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function de(ce){for(let N=0;N<ce.removed.length;N++){const w=ce.removed[N],$=x.indexOf(w);$>=0&&(x[$]=null,y[$].disconnect(w))}for(let N=0;N<ce.added.length;N++){const w=ce.added[N];let $=x.indexOf(w);if($===-1){for(let Z=0;Z<y.length;Z++)if(Z>=x.length){x.push(w),$=Z;break}else if(x[Z]===null){x[Z]=w,$=Z;break}if($===-1)break}const ee=y[$];ee&&ee.connect(w)}}const fe=new Vector3,pe=new Vector3;function X(ce,N,w){fe.setFromMatrixPosition(N.matrixWorld),pe.setFromMatrixPosition(w.matrixWorld);const $=fe.distanceTo(pe),ee=N.projectionMatrix.elements,Z=w.projectionMatrix.elements,ne=ee[14]/(ee[10]-1),he=ee[14]/(ee[10]+1),Ce=(ee[9]+1)/ee[5],De=(ee[9]-1)/ee[5],H=(ee[8]-1)/ee[0],ae=(Z[8]+1)/Z[0],ue=ne*H,Ee=ne*ae,ye=$/(-H+ae),m=ye*-H;if(N.matrixWorld.decompose(ce.position,ce.quaternion,ce.scale),ce.translateX(m),ce.translateZ(ye),ce.matrixWorld.compose(ce.position,ce.quaternion,ce.scale),ce.matrixWorldInverse.copy(ce.matrixWorld).invert(),ee[10]===-1)ce.projectionMatrix.copy(N.projectionMatrix),ce.projectionMatrixInverse.copy(N.projectionMatrixInverse);else{const R=ne+ye,z=he+ye,D=ue-m,K=Ee+($-m),te=Ce*he/z*R,se=De*he/z*R;ce.projectionMatrix.makePerspective(D,K,te,se,R,z),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert()}}function O(ce,N){N===null?ce.matrixWorld.copy(ce.matrix):ce.matrixWorld.multiplyMatrices(N.matrixWorld,ce.matrix),ce.matrixWorldInverse.copy(ce.matrixWorld).invert()}this.updateCamera=function(ce){if(i===null)return;let N=ce.near,w=ce.far;_.texture!==null&&(_.depthNear>0&&(N=_.depthNear),_.depthFar>0&&(w=_.depthFar)),E.near=M.near=G.near=N,E.far=M.far=G.far=w,(I!==E.near||q!==E.far)&&(i.updateRenderState({depthNear:E.near,depthFar:E.far}),I=E.near,q=E.far),G.layers.mask=ce.layers.mask|2,M.layers.mask=ce.layers.mask|4,E.layers.mask=G.layers.mask|M.layers.mask;const $=ce.parent,ee=E.cameras;O(E,$);for(let Z=0;Z<ee.length;Z++)O(ee[Z],$);ee.length===2?X(E,G,M):E.projectionMatrix.copy(G.projectionMatrix),j(ce,E,$)};function j(ce,N,w){w===null?ce.matrix.copy(N.matrixWorld):(ce.matrix.copy(w.matrixWorld),ce.matrix.invert(),ce.matrix.multiply(N.matrixWorld)),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.updateMatrixWorld(!0),ce.projectionMatrix.copy(N.projectionMatrix),ce.projectionMatrixInverse.copy(N.projectionMatrixInverse),ce.isPerspectiveCamera&&(ce.fov=RAD2DEG*2*Math.atan(1/ce.projectionMatrix.elements[5]),ce.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(ce){c=ce,d!==null&&(d.fixedFoveation=ce),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ce)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(E)};let re=null;function le(ce,N){if(u=N.getViewerPose(l||a),p=N,u!==null){const w=u.views;f!==null&&(e.setRenderTargetFramebuffer(F,f.framebuffer),e.setRenderTarget(F));let $=!1;w.length!==E.cameras.length&&(E.cameras.length=0,$=!0);for(let Z=0;Z<w.length;Z++){const ne=w[Z];let he=null;if(f!==null)he=f.getViewport(ne);else{const De=h.getViewSubImage(d,ne);he=De.viewport,Z===0&&(e.setRenderTargetTextures(F,De.colorTexture,d.ignoreDepthValues?void 0:De.depthStencilTexture),e.setRenderTarget(F))}let Ce=S[Z];Ce===void 0&&(Ce=new PerspectiveCamera,Ce.layers.enable(Z),Ce.viewport=new Vector4,S[Z]=Ce),Ce.matrix.fromArray(ne.transform.matrix),Ce.matrix.decompose(Ce.position,Ce.quaternion,Ce.scale),Ce.projectionMatrix.fromArray(ne.projectionMatrix),Ce.projectionMatrixInverse.copy(Ce.projectionMatrix).invert(),Ce.viewport.set(he.x,he.y,he.width,he.height),Z===0&&(E.matrix.copy(Ce.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),$===!0&&E.cameras.push(Ce)}const ee=i.enabledFeatures;if(ee&&ee.includes("depth-sensing")){const Z=h.getDepthInformation(w[0]);Z&&Z.isValid&&Z.texture&&_.init(e,Z,i.renderState)}}for(let w=0;w<y.length;w++){const $=x[w],ee=y[w];$!==null&&ee!==void 0&&ee.update($,N,l||a)}re&&re(ce,N),N.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:N}),p=null}const me=new WebGLAnimation;me.setAnimationLoop(le),this.setAnimationLoop=function(ce){re=ce},this.dispose=function(){}}}const _e1=new Euler,_m1=new Matrix4;function WebGLMaterials(r,e){function t(g,v){g.matrixAutoUpdate===!0&&g.updateMatrix(),v.value.copy(g.matrix)}function n(g,v){v.color.getRGB(g.fogColor.value,getUnlitUniformColorSpace(r)),v.isFog?(g.fogNear.value=v.near,g.fogFar.value=v.far):v.isFogExp2&&(g.fogDensity.value=v.density)}function i(g,v,F,y,x){v.isMeshBasicMaterial||v.isMeshLambertMaterial?s(g,v):v.isMeshToonMaterial?(s(g,v),h(g,v)):v.isMeshPhongMaterial?(s(g,v),u(g,v)):v.isMeshStandardMaterial?(s(g,v),d(g,v),v.isMeshPhysicalMaterial&&f(g,v,x)):v.isMeshMatcapMaterial?(s(g,v),p(g,v)):v.isMeshDepthMaterial?s(g,v):v.isMeshDistanceMaterial?(s(g,v),_(g,v)):v.isMeshNormalMaterial?s(g,v):v.isLineBasicMaterial?(a(g,v),v.isLineDashedMaterial&&o(g,v)):v.isPointsMaterial?c(g,v,F,y):v.isSpriteMaterial?l(g,v):v.isShadowMaterial?(g.color.value.copy(v.color),g.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function s(g,v){g.opacity.value=v.opacity,v.color&&g.diffuse.value.copy(v.color),v.emissive&&g.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(g.map.value=v.map,t(v.map,g.mapTransform)),v.alphaMap&&(g.alphaMap.value=v.alphaMap,t(v.alphaMap,g.alphaMapTransform)),v.bumpMap&&(g.bumpMap.value=v.bumpMap,t(v.bumpMap,g.bumpMapTransform),g.bumpScale.value=v.bumpScale,v.side===BackSide&&(g.bumpScale.value*=-1)),v.normalMap&&(g.normalMap.value=v.normalMap,t(v.normalMap,g.normalMapTransform),g.normalScale.value.copy(v.normalScale),v.side===BackSide&&g.normalScale.value.negate()),v.displacementMap&&(g.displacementMap.value=v.displacementMap,t(v.displacementMap,g.displacementMapTransform),g.displacementScale.value=v.displacementScale,g.displacementBias.value=v.displacementBias),v.emissiveMap&&(g.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,g.emissiveMapTransform)),v.specularMap&&(g.specularMap.value=v.specularMap,t(v.specularMap,g.specularMapTransform)),v.alphaTest>0&&(g.alphaTest.value=v.alphaTest);const F=e.get(v),y=F.envMap,x=F.envMapRotation;y&&(g.envMap.value=y,_e1.copy(x),_e1.x*=-1,_e1.y*=-1,_e1.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(_e1.y*=-1,_e1.z*=-1),g.envMapRotation.value.setFromMatrix4(_m1.makeRotationFromEuler(_e1)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=v.reflectivity,g.ior.value=v.ior,g.refractionRatio.value=v.refractionRatio),v.lightMap&&(g.lightMap.value=v.lightMap,g.lightMapIntensity.value=v.lightMapIntensity,t(v.lightMap,g.lightMapTransform)),v.aoMap&&(g.aoMap.value=v.aoMap,g.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,g.aoMapTransform))}function a(g,v){g.diffuse.value.copy(v.color),g.opacity.value=v.opacity,v.map&&(g.map.value=v.map,t(v.map,g.mapTransform))}function o(g,v){g.dashSize.value=v.dashSize,g.totalSize.value=v.dashSize+v.gapSize,g.scale.value=v.scale}function c(g,v,F,y){g.diffuse.value.copy(v.color),g.opacity.value=v.opacity,g.size.value=v.size*F,g.scale.value=y*.5,v.map&&(g.map.value=v.map,t(v.map,g.uvTransform)),v.alphaMap&&(g.alphaMap.value=v.alphaMap,t(v.alphaMap,g.alphaMapTransform)),v.alphaTest>0&&(g.alphaTest.value=v.alphaTest)}function l(g,v){g.diffuse.value.copy(v.color),g.opacity.value=v.opacity,g.rotation.value=v.rotation,v.map&&(g.map.value=v.map,t(v.map,g.mapTransform)),v.alphaMap&&(g.alphaMap.value=v.alphaMap,t(v.alphaMap,g.alphaMapTransform)),v.alphaTest>0&&(g.alphaTest.value=v.alphaTest)}function u(g,v){g.specular.value.copy(v.specular),g.shininess.value=Math.max(v.shininess,1e-4)}function h(g,v){v.gradientMap&&(g.gradientMap.value=v.gradientMap)}function d(g,v){g.metalness.value=v.metalness,v.metalnessMap&&(g.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,g.metalnessMapTransform)),g.roughness.value=v.roughness,v.roughnessMap&&(g.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,g.roughnessMapTransform)),v.envMap&&(g.envMapIntensity.value=v.envMapIntensity)}function f(g,v,F){g.ior.value=v.ior,v.sheen>0&&(g.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),g.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(g.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,g.sheenColorMapTransform)),v.sheenRoughnessMap&&(g.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,g.sheenRoughnessMapTransform))),v.clearcoat>0&&(g.clearcoat.value=v.clearcoat,g.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(g.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,g.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(g.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===BackSide&&g.clearcoatNormalScale.value.negate())),v.dispersion>0&&(g.dispersion.value=v.dispersion),v.iridescence>0&&(g.iridescence.value=v.iridescence,g.iridescenceIOR.value=v.iridescenceIOR,g.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(g.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,g.iridescenceMapTransform)),v.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),v.transmission>0&&(g.transmission.value=v.transmission,g.transmissionSamplerMap.value=F.texture,g.transmissionSamplerSize.value.set(F.width,F.height),v.transmissionMap&&(g.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,g.transmissionMapTransform)),g.thickness.value=v.thickness,v.thicknessMap&&(g.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=v.attenuationDistance,g.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(g.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(g.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=v.specularIntensity,g.specularColor.value.copy(v.specularColor),v.specularColorMap&&(g.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,g.specularColorMapTransform)),v.specularIntensityMap&&(g.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,v){v.matcap&&(g.matcap.value=v.matcap)}function _(g,v){const F=e.get(v).light;g.referencePosition.value.setFromMatrixPosition(F.matrixWorld),g.nearDistance.value=F.shadow.camera.near,g.farDistance.value=F.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function WebGLUniformsGroups(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(F,y){const x=y.program;n.uniformBlockBinding(F,x)}function l(F,y){let x=i[F.id];x===void 0&&(p(F),x=u(F),i[F.id]=x,F.addEventListener("dispose",g));const b=y.program;n.updateUBOMapping(F,b);const L=e.render.frame;s[F.id]!==L&&(d(F),s[F.id]=L)}function u(F){const y=h();F.__bindingPointIndex=y;const x=r.createBuffer(),b=F.__size,L=F.usage;return r.bindBuffer(r.UNIFORM_BUFFER,x),r.bufferData(r.UNIFORM_BUFFER,b,L),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,x),x}function h(){for(let F=0;F<o;F++)if(a.indexOf(F)===-1)return a.push(F),F;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(F){const y=i[F.id],x=F.uniforms,b=F.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let L=0,G=x.length;L<G;L++){const M=Array.isArray(x[L])?x[L]:[x[L]];for(let S=0,E=M.length;S<E;S++){const I=M[S];if(f(I,L,S,b)===!0){const q=I.__offset,Y=Array.isArray(I.value)?I.value:[I.value];let J=0;for(let de=0;de<Y.length;de++){const fe=Y[de],pe=_(fe);typeof fe=="number"||typeof fe=="boolean"?(I.__data[0]=fe,r.bufferSubData(r.UNIFORM_BUFFER,q+J,I.__data)):fe.isMatrix3?(I.__data[0]=fe.elements[0],I.__data[1]=fe.elements[1],I.__data[2]=fe.elements[2],I.__data[3]=0,I.__data[4]=fe.elements[3],I.__data[5]=fe.elements[4],I.__data[6]=fe.elements[5],I.__data[7]=0,I.__data[8]=fe.elements[6],I.__data[9]=fe.elements[7],I.__data[10]=fe.elements[8],I.__data[11]=0):(fe.toArray(I.__data,J),J+=pe.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,q,I.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(F,y,x,b){const L=F.value,G=y+"_"+x;if(b[G]===void 0)return typeof L=="number"||typeof L=="boolean"?b[G]=L:b[G]=L.clone(),!0;{const M=b[G];if(typeof L=="number"||typeof L=="boolean"){if(M!==L)return b[G]=L,!0}else if(M.equals(L)===!1)return M.copy(L),!0}return!1}function p(F){const y=F.uniforms;let x=0;const b=16;for(let G=0,M=y.length;G<M;G++){const S=Array.isArray(y[G])?y[G]:[y[G]];for(let E=0,I=S.length;E<I;E++){const q=S[E],Y=Array.isArray(q.value)?q.value:[q.value];for(let J=0,de=Y.length;J<de;J++){const fe=Y[J],pe=_(fe),X=x%b,O=X%pe.boundary,j=X+O;x+=O,j!==0&&b-j<pe.storage&&(x+=b-j),q.__data=new Float32Array(pe.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=x,x+=pe.storage}}}const L=x%b;return L>0&&(x+=b-L),F.__size=x,F.__cache={},this}function _(F){const y={boundary:0,storage:0};return typeof F=="number"||typeof F=="boolean"?(y.boundary=4,y.storage=4):F.isVector2?(y.boundary=8,y.storage=8):F.isVector3||F.isColor?(y.boundary=16,y.storage=12):F.isVector4?(y.boundary=16,y.storage=16):F.isMatrix3?(y.boundary=48,y.storage=48):F.isMatrix4?(y.boundary=64,y.storage=64):F.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",F),y}function g(F){const y=F.target;y.removeEventListener("dispose",g);const x=a.indexOf(y.__bindingPointIndex);a.splice(x,1),r.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function v(){for(const F in i)r.deleteBuffer(i[F]);a=[],i={},s={}}return{bind:c,update:l,dispose:v}}class WebGLRenderer{constructor(e={}){const{canvas:t=createCanvasElement(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const p=new Uint32Array(4),_=new Int32Array(4);let g=null,v=null;const F=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=SRGBColorSpace,this.toneMapping=NoToneMapping,this.toneMappingExposure=1;const x=this;let b=!1,L=0,G=0,M=null,S=-1,E=null;const I=new Vector4,q=new Vector4;let Y=null;const J=new Color(0);let de=0,fe=t.width,pe=t.height,X=1,O=null,j=null;const re=new Vector4(0,0,fe,pe),le=new Vector4(0,0,fe,pe);let me=!1;const ce=new Frustum;let N=!1,w=!1;const $=new Matrix4,ee=new Matrix4,Z=new Vector3,ne=new Vector4,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ce=!1;function De(){return M===null?X:1}let H=n;function ae(Q,ge){return t.getContext(Q,ge)}try{const Q={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${REVISION}`),t.addEventListener("webglcontextlost",Le,!1),t.addEventListener("webglcontextrestored",Oe,!1),t.addEventListener("webglcontextcreationerror",Ne,!1),H===null){const ge="webgl2";if(H=ae(ge,Q),H===null)throw ae(ge)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(Q){throw console.error("THREE.WebGLRenderer: "+Q.message),Q}let ue,Ee,ye,m,R,z,D,K,te,se,ie,Se,ve,be,Pe,_e,Ae,Ie,Fe,Te,Be,Ve,Ge,oe;function Ue(){ue=new WebGLExtensions(H),ue.init(),Ve=new WebGLUtils(H,ue),Ee=new WebGLCapabilities(H,ue,e,Ve),ye=new WebGLState(H,ue),Ee.reverseDepthBuffer&&d&&ye.buffers.depth.setReversed(!0),m=new WebGLInfo(H),R=new WebGLProperties,z=new WebGLTextures(H,ue,ye,R,Ee,Ve,m),D=new WebGLCubeMaps(x),K=new WebGLCubeUVMaps(x),te=new WebGLAttributes(H),Ge=new WebGLBindingStates(H,te),se=new WebGLGeometries(H,te,m,Ge),ie=new WebGLObjects(H,se,te,m),Fe=new WebGLMorphtargets(H,Ee,z),_e=new WebGLClipping(R),Se=new WebGLPrograms(x,D,K,ue,Ee,Ge,_e),ve=new WebGLMaterials(x,R),be=new WebGLRenderLists,Pe=new WebGLRenderStates(ue),Ie=new WebGLBackground(x,D,K,ye,ie,f,c),Ae=new WebGLShadowMap(x,ie,Ee),oe=new WebGLUniformsGroups(H,m,Ee,ye),Te=new WebGLBufferRenderer(H,ue,m),Be=new WebGLIndexedBufferRenderer(H,ue,m),m.programs=Se.programs,x.capabilities=Ee,x.extensions=ue,x.properties=R,x.renderLists=be,x.shadowMap=Ae,x.state=ye,x.info=m}Ue();const xe=new WebXRManager(x,H);this.xr=xe,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const Q=ue.get("WEBGL_lose_context");Q&&Q.loseContext()},this.forceContextRestore=function(){const Q=ue.get("WEBGL_lose_context");Q&&Q.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(Q){Q!==void 0&&(X=Q,this.setSize(fe,pe,!1))},this.getSize=function(Q){return Q.set(fe,pe)},this.setSize=function(Q,ge,we=!0){if(xe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}fe=Q,pe=ge,t.width=Math.floor(Q*X),t.height=Math.floor(ge*X),we===!0&&(t.style.width=Q+"px",t.style.height=ge+"px"),this.setViewport(0,0,Q,ge)},this.getDrawingBufferSize=function(Q){return Q.set(fe*X,pe*X).floor()},this.setDrawingBufferSize=function(Q,ge,we){fe=Q,pe=ge,X=we,t.width=Math.floor(Q*we),t.height=Math.floor(ge*we),this.setViewport(0,0,Q,ge)},this.getCurrentViewport=function(Q){return Q.copy(I)},this.getViewport=function(Q){return Q.copy(re)},this.setViewport=function(Q,ge,we,Re){Q.isVector4?re.set(Q.x,Q.y,Q.z,Q.w):re.set(Q,ge,we,Re),ye.viewport(I.copy(re).multiplyScalar(X).round())},this.getScissor=function(Q){return Q.copy(le)},this.setScissor=function(Q,ge,we,Re){Q.isVector4?le.set(Q.x,Q.y,Q.z,Q.w):le.set(Q,ge,we,Re),ye.scissor(q.copy(le).multiplyScalar(X).round())},this.getScissorTest=function(){return me},this.setScissorTest=function(Q){ye.setScissorTest(me=Q)},this.setOpaqueSort=function(Q){O=Q},this.setTransparentSort=function(Q){j=Q},this.getClearColor=function(Q){return Q.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor.apply(Ie,arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha.apply(Ie,arguments)},this.clear=function(Q=!0,ge=!0,we=!0){let Re=0;if(Q){let Me=!1;if(M!==null){const ke=M.texture.format;Me=ke===RGBAIntegerFormat||ke===RGIntegerFormat||ke===RedIntegerFormat}if(Me){const ke=M.texture.type,ze=ke===UnsignedByteType||ke===UnsignedIntType||ke===UnsignedShortType||ke===UnsignedInt248Type||ke===UnsignedShort4444Type||ke===UnsignedShort5551Type,$e=Ie.getClearColor(),We=Ie.getClearAlpha(),je=$e.r,Ke=$e.g,qe=$e.b;ze?(p[0]=je,p[1]=Ke,p[2]=qe,p[3]=We,H.clearBufferuiv(H.COLOR,0,p)):(_[0]=je,_[1]=Ke,_[2]=qe,_[3]=We,H.clearBufferiv(H.COLOR,0,_))}else Re|=H.COLOR_BUFFER_BIT}ge&&(Re|=H.DEPTH_BUFFER_BIT),we&&(Re|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(Re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Le,!1),t.removeEventListener("webglcontextrestored",Oe,!1),t.removeEventListener("webglcontextcreationerror",Ne,!1),be.dispose(),Pe.dispose(),R.dispose(),D.dispose(),K.dispose(),ie.dispose(),Ge.dispose(),oe.dispose(),Se.dispose(),xe.dispose(),xe.removeEventListener("sessionstart",_t),xe.removeEventListener("sessionend",gt),mt.stop()};function Le(Q){Q.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function Oe(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const Q=m.autoReset,ge=Ae.enabled,we=Ae.autoUpdate,Re=Ae.needsUpdate,Me=Ae.type;Ue(),m.autoReset=Q,Ae.enabled=ge,Ae.autoUpdate=we,Ae.needsUpdate=Re,Ae.type=Me}function Ne(Q){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",Q.statusMessage)}function He(Q){const ge=Q.target;ge.removeEventListener("dispose",He),Qe(ge)}function Qe(Q){Je(Q),R.remove(Q)}function Je(Q){const ge=R.get(Q).programs;ge!==void 0&&(ge.forEach(function(we){Se.releaseProgram(we)}),Q.isShaderMaterial&&Se.releaseShaderCache(Q))}this.renderBufferDirect=function(Q,ge,we,Re,Me,ke){ge===null&&(ge=he);const ze=Me.isMesh&&Me.matrixWorld.determinant()<0,$e=Dt(Q,ge,we,Re,Me);ye.setMaterial(Re,ze);let We=we.index,je=1;if(Re.wireframe===!0){if(We=se.getWireframeAttribute(we),We===void 0)return;je=2}const Ke=we.drawRange,qe=we.attributes.position;let et=Ke.start*je,rt=(Ke.start+Ke.count)*je;ke!==null&&(et=Math.max(et,ke.start*je),rt=Math.min(rt,(ke.start+ke.count)*je)),We!==null?(et=Math.max(et,0),rt=Math.min(rt,We.count)):qe!=null&&(et=Math.max(et,0),rt=Math.min(rt,qe.count));const it=rt-et;if(it<0||it===1/0)return;Ge.setup(Me,Re,$e,we,We);let ot,tt=Te;if(We!==null&&(ot=te.get(We),tt=Be,tt.setIndex(ot)),Me.isMesh)Re.wireframe===!0?(ye.setLineWidth(Re.wireframeLinewidth*De()),tt.setMode(H.LINES)):tt.setMode(H.TRIANGLES);else if(Me.isLine){let Xe=Re.linewidth;Xe===void 0&&(Xe=1),ye.setLineWidth(Xe*De()),Me.isLineSegments?tt.setMode(H.LINES):Me.isLineLoop?tt.setMode(H.LINE_LOOP):tt.setMode(H.LINE_STRIP)}else Me.isPoints?tt.setMode(H.POINTS):Me.isSprite&&tt.setMode(H.TRIANGLES);if(Me.isBatchedMesh)if(Me._multiDrawInstances!==null)tt.renderMultiDrawInstances(Me._multiDrawStarts,Me._multiDrawCounts,Me._multiDrawCount,Me._multiDrawInstances);else if(ue.get("WEBGL_multi_draw"))tt.renderMultiDraw(Me._multiDrawStarts,Me._multiDrawCounts,Me._multiDrawCount);else{const Xe=Me._multiDrawStarts,ft=Me._multiDrawCounts,nt=Me._multiDrawCount,ut=We?te.get(We).bytesPerElement:1,vt=R.get(Re).currentProgram.getUniforms();for(let ct=0;ct<nt;ct++)vt.setValue(H,"_gl_DrawID",ct),tt.render(Xe[ct]/ut,ft[ct])}else if(Me.isInstancedMesh)tt.renderInstances(et,it,Me.count);else if(we.isInstancedBufferGeometry){const Xe=we._maxInstanceCount!==void 0?we._maxInstanceCount:1/0,ft=Math.min(we.instanceCount,Xe);tt.renderInstances(et,it,ft)}else tt.render(et,it)};function Ye(Q,ge,we){Q.transparent===!0&&Q.side===DoubleSide&&Q.forceSinglePass===!1?(Q.side=BackSide,Q.needsUpdate=!0,St(Q,ge,we),Q.side=FrontSide,Q.needsUpdate=!0,St(Q,ge,we),Q.side=DoubleSide):St(Q,ge,we)}this.compile=function(Q,ge,we=null){we===null&&(we=Q),v=Pe.get(we),v.init(ge),y.push(v),we.traverseVisible(function(Me){Me.isLight&&Me.layers.test(ge.layers)&&(v.pushLight(Me),Me.castShadow&&v.pushShadow(Me))}),Q!==we&&Q.traverseVisible(function(Me){Me.isLight&&Me.layers.test(ge.layers)&&(v.pushLight(Me),Me.castShadow&&v.pushShadow(Me))}),v.setupLights();const Re=new Set;return Q.traverse(function(Me){if(!(Me.isMesh||Me.isPoints||Me.isLine||Me.isSprite))return;const ke=Me.material;if(ke)if(Array.isArray(ke))for(let ze=0;ze<ke.length;ze++){const $e=ke[ze];Ye($e,we,Me),Re.add($e)}else Ye(ke,we,Me),Re.add(ke)}),y.pop(),v=null,Re},this.compileAsync=function(Q,ge,we=null){const Re=this.compile(Q,ge,we);return new Promise(Me=>{function ke(){if(Re.forEach(function(ze){R.get(ze).currentProgram.isReady()&&Re.delete(ze)}),Re.size===0){Me(Q);return}setTimeout(ke,10)}ue.get("KHR_parallel_shader_compile")!==null?ke():setTimeout(ke,10)})};let Ze=null;function st(Q){Ze&&Ze(Q)}function _t(){mt.stop()}function gt(){mt.start()}const mt=new WebGLAnimation;mt.setAnimationLoop(st),typeof self<"u"&&mt.setContext(self),this.setAnimationLoop=function(Q){Ze=Q,xe.setAnimationLoop(Q),Q===null?mt.stop():mt.start()},xe.addEventListener("sessionstart",_t),xe.addEventListener("sessionend",gt),this.render=function(Q,ge){if(ge!==void 0&&ge.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),ge.parent===null&&ge.matrixWorldAutoUpdate===!0&&ge.updateMatrixWorld(),xe.enabled===!0&&xe.isPresenting===!0&&(xe.cameraAutoUpdate===!0&&xe.updateCamera(ge),ge=xe.getCamera()),Q.isScene===!0&&Q.onBeforeRender(x,Q,ge,M),v=Pe.get(Q,y.length),v.init(ge),y.push(v),ee.multiplyMatrices(ge.projectionMatrix,ge.matrixWorldInverse),ce.setFromProjectionMatrix(ee),w=this.localClippingEnabled,N=_e.init(this.clippingPlanes,w),g=be.get(Q,F.length),g.init(),F.push(g),xe.enabled===!0&&xe.isPresenting===!0){const ke=x.xr.getDepthSensingMesh();ke!==null&&Et(ke,ge,-1/0,x.sortObjects)}Et(Q,ge,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(O,j),Ce=xe.enabled===!1||xe.isPresenting===!1||xe.hasDepthSensing()===!1,Ce&&Ie.addToRenderList(g,Q),this.info.render.frame++,N===!0&&_e.beginShadows();const we=v.state.shadowsArray;Ae.render(we,Q,ge),N===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset();const Re=g.opaque,Me=g.transmissive;if(v.setupLights(),ge.isArrayCamera){const ke=ge.cameras;if(Me.length>0)for(let ze=0,$e=ke.length;ze<$e;ze++){const We=ke[ze];bt(Re,Me,Q,We)}Ce&&Ie.render(Q);for(let ze=0,$e=ke.length;ze<$e;ze++){const We=ke[ze];Tt(g,Q,We,We.viewport)}}else Me.length>0&&bt(Re,Me,Q,ge),Ce&&Ie.render(Q),Tt(g,Q,ge);M!==null&&(z.updateMultisampleRenderTarget(M),z.updateRenderTargetMipmap(M)),Q.isScene===!0&&Q.onAfterRender(x,Q,ge),Ge.resetDefaultState(),S=-1,E=null,y.pop(),y.length>0?(v=y[y.length-1],N===!0&&_e.setGlobalState(x.clippingPlanes,v.state.camera)):v=null,F.pop(),F.length>0?g=F[F.length-1]:g=null};function Et(Q,ge,we,Re){if(Q.visible===!1)return;if(Q.layers.test(ge.layers)){if(Q.isGroup)we=Q.renderOrder;else if(Q.isLOD)Q.autoUpdate===!0&&Q.update(ge);else if(Q.isLight)v.pushLight(Q),Q.castShadow&&v.pushShadow(Q);else if(Q.isSprite){if(!Q.frustumCulled||ce.intersectsSprite(Q)){Re&&ne.setFromMatrixPosition(Q.matrixWorld).applyMatrix4(ee);const ze=ie.update(Q),$e=Q.material;$e.visible&&g.push(Q,ze,$e,we,ne.z,null)}}else if((Q.isMesh||Q.isLine||Q.isPoints)&&(!Q.frustumCulled||ce.intersectsObject(Q))){const ze=ie.update(Q),$e=Q.material;if(Re&&(Q.boundingSphere!==void 0?(Q.boundingSphere===null&&Q.computeBoundingSphere(),ne.copy(Q.boundingSphere.center)):(ze.boundingSphere===null&&ze.computeBoundingSphere(),ne.copy(ze.boundingSphere.center)),ne.applyMatrix4(Q.matrixWorld).applyMatrix4(ee)),Array.isArray($e)){const We=ze.groups;for(let je=0,Ke=We.length;je<Ke;je++){const qe=We[je],et=$e[qe.materialIndex];et&&et.visible&&g.push(Q,ze,et,we,ne.z,qe)}}else $e.visible&&g.push(Q,ze,$e,we,ne.z,null)}}const ke=Q.children;for(let ze=0,$e=ke.length;ze<$e;ze++)Et(ke[ze],ge,we,Re)}function Tt(Q,ge,we,Re){const Me=Q.opaque,ke=Q.transmissive,ze=Q.transparent;v.setupLightsView(we),N===!0&&_e.setGlobalState(x.clippingPlanes,we),Re&&ye.viewport(I.copy(Re)),Me.length>0&&yt(Me,ge,we),ke.length>0&&yt(ke,ge,we),ze.length>0&&yt(ze,ge,we),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function bt(Q,ge,we,Re){if((we.isScene===!0?we.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[Re.id]===void 0&&(v.state.transmissionRenderTarget[Re.id]=new WebGLRenderTarget(1,1,{generateMipmaps:!0,type:ue.has("EXT_color_buffer_half_float")||ue.has("EXT_color_buffer_float")?HalfFloatType:UnsignedByteType,minFilter:LinearMipmapLinearFilter,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ColorManagement.workingColorSpace}));const ke=v.state.transmissionRenderTarget[Re.id],ze=Re.viewport||I;ke.setSize(ze.z,ze.w);const $e=x.getRenderTarget();x.setRenderTarget(ke),x.getClearColor(J),de=x.getClearAlpha(),de<1&&x.setClearColor(16777215,.5),x.clear(),Ce&&Ie.render(we);const We=x.toneMapping;x.toneMapping=NoToneMapping;const je=Re.viewport;if(Re.viewport!==void 0&&(Re.viewport=void 0),v.setupLightsView(Re),N===!0&&_e.setGlobalState(x.clippingPlanes,Re),yt(Q,we,Re),z.updateMultisampleRenderTarget(ke),z.updateRenderTargetMipmap(ke),ue.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let qe=0,et=ge.length;qe<et;qe++){const rt=ge[qe],it=rt.object,ot=rt.geometry,tt=rt.material,Xe=rt.group;if(tt.side===DoubleSide&&it.layers.test(Re.layers)){const ft=tt.side;tt.side=BackSide,tt.needsUpdate=!0,Ct(it,we,Re,ot,tt,Xe),tt.side=ft,tt.needsUpdate=!0,Ke=!0}}Ke===!0&&(z.updateMultisampleRenderTarget(ke),z.updateRenderTargetMipmap(ke))}x.setRenderTarget($e),x.setClearColor(J,de),je!==void 0&&(Re.viewport=je),x.toneMapping=We}function yt(Q,ge,we){const Re=ge.isScene===!0?ge.overrideMaterial:null;for(let Me=0,ke=Q.length;Me<ke;Me++){const ze=Q[Me],$e=ze.object,We=ze.geometry,je=Re===null?ze.material:Re,Ke=ze.group;$e.layers.test(we.layers)&&Ct($e,ge,we,We,je,Ke)}}function Ct(Q,ge,we,Re,Me,ke){Q.onBeforeRender(x,ge,we,Re,Me,ke),Q.modelViewMatrix.multiplyMatrices(we.matrixWorldInverse,Q.matrixWorld),Q.normalMatrix.getNormalMatrix(Q.modelViewMatrix),Me.onBeforeRender(x,ge,we,Re,Q,ke),Me.transparent===!0&&Me.side===DoubleSide&&Me.forceSinglePass===!1?(Me.side=BackSide,Me.needsUpdate=!0,x.renderBufferDirect(we,ge,Re,Me,Q,ke),Me.side=FrontSide,Me.needsUpdate=!0,x.renderBufferDirect(we,ge,Re,Me,Q,ke),Me.side=DoubleSide):x.renderBufferDirect(we,ge,Re,Me,Q,ke),Q.onAfterRender(x,ge,we,Re,Me,ke)}function St(Q,ge,we){ge.isScene!==!0&&(ge=he);const Re=R.get(Q),Me=v.state.lights,ke=v.state.shadowsArray,ze=Me.state.version,$e=Se.getParameters(Q,Me.state,ke,ge,we),We=Se.getProgramCacheKey($e);let je=Re.programs;Re.environment=Q.isMeshStandardMaterial?ge.environment:null,Re.fog=ge.fog,Re.envMap=(Q.isMeshStandardMaterial?K:D).get(Q.envMap||Re.environment),Re.envMapRotation=Re.environment!==null&&Q.envMap===null?ge.environmentRotation:Q.envMapRotation,je===void 0&&(Q.addEventListener("dispose",He),je=new Map,Re.programs=je);let Ke=je.get(We);if(Ke!==void 0){if(Re.currentProgram===Ke&&Re.lightsStateVersion===ze)return wt(Q,$e),Ke}else $e.uniforms=Se.getUniforms(Q),Q.onBeforeCompile($e,x),Ke=Se.acquireProgram($e,We),je.set(We,Ke),Re.uniforms=$e.uniforms;const qe=Re.uniforms;return(!Q.isShaderMaterial&&!Q.isRawShaderMaterial||Q.clipping===!0)&&(qe.clippingPlanes=_e.uniform),wt(Q,$e),Re.needsLights=Lt(Q),Re.lightsStateVersion=ze,Re.needsLights&&(qe.ambientLightColor.value=Me.state.ambient,qe.lightProbe.value=Me.state.probe,qe.directionalLights.value=Me.state.directional,qe.directionalLightShadows.value=Me.state.directionalShadow,qe.spotLights.value=Me.state.spot,qe.spotLightShadows.value=Me.state.spotShadow,qe.rectAreaLights.value=Me.state.rectArea,qe.ltc_1.value=Me.state.rectAreaLTC1,qe.ltc_2.value=Me.state.rectAreaLTC2,qe.pointLights.value=Me.state.point,qe.pointLightShadows.value=Me.state.pointShadow,qe.hemisphereLights.value=Me.state.hemi,qe.directionalShadowMap.value=Me.state.directionalShadowMap,qe.directionalShadowMatrix.value=Me.state.directionalShadowMatrix,qe.spotShadowMap.value=Me.state.spotShadowMap,qe.spotLightMatrix.value=Me.state.spotLightMatrix,qe.spotLightMap.value=Me.state.spotLightMap,qe.pointShadowMap.value=Me.state.pointShadowMap,qe.pointShadowMatrix.value=Me.state.pointShadowMatrix),Re.currentProgram=Ke,Re.uniformsList=null,Ke}function At(Q){if(Q.uniformsList===null){const ge=Q.currentProgram.getUniforms();Q.uniformsList=WebGLUniforms.seqWithValue(ge.seq,Q.uniforms)}return Q.uniformsList}function wt(Q,ge){const we=R.get(Q);we.outputColorSpace=ge.outputColorSpace,we.batching=ge.batching,we.batchingColor=ge.batchingColor,we.instancing=ge.instancing,we.instancingColor=ge.instancingColor,we.instancingMorph=ge.instancingMorph,we.skinning=ge.skinning,we.morphTargets=ge.morphTargets,we.morphNormals=ge.morphNormals,we.morphColors=ge.morphColors,we.morphTargetsCount=ge.morphTargetsCount,we.numClippingPlanes=ge.numClippingPlanes,we.numIntersection=ge.numClipIntersection,we.vertexAlphas=ge.vertexAlphas,we.vertexTangents=ge.vertexTangents,we.toneMapping=ge.toneMapping}function Dt(Q,ge,we,Re,Me){ge.isScene!==!0&&(ge=he),z.resetTextureUnits();const ke=ge.fog,ze=Re.isMeshStandardMaterial?ge.environment:null,$e=M===null?x.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:LinearSRGBColorSpace,We=(Re.isMeshStandardMaterial?K:D).get(Re.envMap||ze),je=Re.vertexColors===!0&&!!we.attributes.color&&we.attributes.color.itemSize===4,Ke=!!we.attributes.tangent&&(!!Re.normalMap||Re.anisotropy>0),qe=!!we.morphAttributes.position,et=!!we.morphAttributes.normal,rt=!!we.morphAttributes.color;let it=NoToneMapping;Re.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(it=x.toneMapping);const ot=we.morphAttributes.position||we.morphAttributes.normal||we.morphAttributes.color,tt=ot!==void 0?ot.length:0,Xe=R.get(Re),ft=v.state.lights;if(N===!0&&(w===!0||Q!==E)){const lt=Q===E&&Re.id===S;_e.setState(Re,Q,lt)}let nt=!1;Re.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==ft.state.version||Xe.outputColorSpace!==$e||Me.isBatchedMesh&&Xe.batching===!1||!Me.isBatchedMesh&&Xe.batching===!0||Me.isBatchedMesh&&Xe.batchingColor===!0&&Me.colorTexture===null||Me.isBatchedMesh&&Xe.batchingColor===!1&&Me.colorTexture!==null||Me.isInstancedMesh&&Xe.instancing===!1||!Me.isInstancedMesh&&Xe.instancing===!0||Me.isSkinnedMesh&&Xe.skinning===!1||!Me.isSkinnedMesh&&Xe.skinning===!0||Me.isInstancedMesh&&Xe.instancingColor===!0&&Me.instanceColor===null||Me.isInstancedMesh&&Xe.instancingColor===!1&&Me.instanceColor!==null||Me.isInstancedMesh&&Xe.instancingMorph===!0&&Me.morphTexture===null||Me.isInstancedMesh&&Xe.instancingMorph===!1&&Me.morphTexture!==null||Xe.envMap!==We||Re.fog===!0&&Xe.fog!==ke||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==_e.numPlanes||Xe.numIntersection!==_e.numIntersection)||Xe.vertexAlphas!==je||Xe.vertexTangents!==Ke||Xe.morphTargets!==qe||Xe.morphNormals!==et||Xe.morphColors!==rt||Xe.toneMapping!==it||Xe.morphTargetsCount!==tt)&&(nt=!0):(nt=!0,Xe.__version=Re.version);let ut=Xe.currentProgram;nt===!0&&(ut=St(Re,ge,Me));let vt=!1,ct=!1,Mt=!1;const at=ut.getUniforms(),ht=Xe.uniforms;if(ye.useProgram(ut.program)&&(vt=!0,ct=!0,Mt=!0),Re.id!==S&&(S=Re.id,ct=!0),vt||E!==Q){ye.buffers.depth.getReversed()?($.copy(Q.projectionMatrix),toNormalizedProjectionMatrix($),toReversedProjectionMatrix($),at.setValue(H,"projectionMatrix",$)):at.setValue(H,"projectionMatrix",Q.projectionMatrix),at.setValue(H,"viewMatrix",Q.matrixWorldInverse);const dt=at.map.cameraPosition;dt!==void 0&&dt.setValue(H,Z.setFromMatrixPosition(Q.matrixWorld)),Ee.logarithmicDepthBuffer&&at.setValue(H,"logDepthBufFC",2/(Math.log(Q.far+1)/Math.LN2)),(Re.isMeshPhongMaterial||Re.isMeshToonMaterial||Re.isMeshLambertMaterial||Re.isMeshBasicMaterial||Re.isMeshStandardMaterial||Re.isShaderMaterial)&&at.setValue(H,"isOrthographic",Q.isOrthographicCamera===!0),E!==Q&&(E=Q,ct=!0,Mt=!0)}if(Me.isSkinnedMesh){at.setOptional(H,Me,"bindMatrix"),at.setOptional(H,Me,"bindMatrixInverse");const lt=Me.skeleton;lt&&(lt.boneTexture===null&&lt.computeBoneTexture(),at.setValue(H,"boneTexture",lt.boneTexture,z))}Me.isBatchedMesh&&(at.setOptional(H,Me,"batchingTexture"),at.setValue(H,"batchingTexture",Me._matricesTexture,z),at.setOptional(H,Me,"batchingIdTexture"),at.setValue(H,"batchingIdTexture",Me._indirectTexture,z),at.setOptional(H,Me,"batchingColorTexture"),Me._colorsTexture!==null&&at.setValue(H,"batchingColorTexture",Me._colorsTexture,z));const xt=we.morphAttributes;if((xt.position!==void 0||xt.normal!==void 0||xt.color!==void 0)&&Fe.update(Me,we,ut),(ct||Xe.receiveShadow!==Me.receiveShadow)&&(Xe.receiveShadow=Me.receiveShadow,at.setValue(H,"receiveShadow",Me.receiveShadow)),Re.isMeshGouraudMaterial&&Re.envMap!==null&&(ht.envMap.value=We,ht.flipEnvMap.value=We.isCubeTexture&&We.isRenderTargetTexture===!1?-1:1),Re.isMeshStandardMaterial&&Re.envMap===null&&ge.environment!==null&&(ht.envMapIntensity.value=ge.environmentIntensity),ct&&(at.setValue(H,"toneMappingExposure",x.toneMappingExposure),Xe.needsLights&&Pt(ht,Mt),ke&&Re.fog===!0&&ve.refreshFogUniforms(ht,ke),ve.refreshMaterialUniforms(ht,Re,X,pe,v.state.transmissionRenderTarget[Q.id]),WebGLUniforms.upload(H,At(Xe),ht,z)),Re.isShaderMaterial&&Re.uniformsNeedUpdate===!0&&(WebGLUniforms.upload(H,At(Xe),ht,z),Re.uniformsNeedUpdate=!1),Re.isSpriteMaterial&&at.setValue(H,"center",Me.center),at.setValue(H,"modelViewMatrix",Me.modelViewMatrix),at.setValue(H,"normalMatrix",Me.normalMatrix),at.setValue(H,"modelMatrix",Me.matrixWorld),Re.isShaderMaterial||Re.isRawShaderMaterial){const lt=Re.uniformsGroups;for(let dt=0,pt=lt.length;dt<pt;dt++){const Rt=lt[dt];oe.update(Rt,ut),oe.bind(Rt,ut)}}return ut}function Pt(Q,ge){Q.ambientLightColor.needsUpdate=ge,Q.lightProbe.needsUpdate=ge,Q.directionalLights.needsUpdate=ge,Q.directionalLightShadows.needsUpdate=ge,Q.pointLights.needsUpdate=ge,Q.pointLightShadows.needsUpdate=ge,Q.spotLights.needsUpdate=ge,Q.spotLightShadows.needsUpdate=ge,Q.rectAreaLights.needsUpdate=ge,Q.hemisphereLights.needsUpdate=ge}function Lt(Q){return Q.isMeshLambertMaterial||Q.isMeshToonMaterial||Q.isMeshPhongMaterial||Q.isMeshStandardMaterial||Q.isShadowMaterial||Q.isShaderMaterial&&Q.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(Q,ge,we){R.get(Q.texture).__webglTexture=ge,R.get(Q.depthTexture).__webglTexture=we;const Re=R.get(Q);Re.__hasExternalTextures=!0,Re.__autoAllocateDepthBuffer=we===void 0,Re.__autoAllocateDepthBuffer||ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Re.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(Q,ge){const we=R.get(Q);we.__webglFramebuffer=ge,we.__useDefaultFramebuffer=ge===void 0},this.setRenderTarget=function(Q,ge=0,we=0){M=Q,L=ge,G=we;let Re=!0,Me=null,ke=!1,ze=!1;if(Q){const We=R.get(Q);if(We.__useDefaultFramebuffer!==void 0)ye.bindFramebuffer(H.FRAMEBUFFER,null),Re=!1;else if(We.__webglFramebuffer===void 0)z.setupRenderTarget(Q);else if(We.__hasExternalTextures)z.rebindTextures(Q,R.get(Q.texture).__webglTexture,R.get(Q.depthTexture).__webglTexture);else if(Q.depthBuffer){const qe=Q.depthTexture;if(We.__boundDepthTexture!==qe){if(qe!==null&&R.has(qe)&&(Q.width!==qe.image.width||Q.height!==qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");z.setupDepthRenderbuffer(Q)}}const je=Q.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(ze=!0);const Ke=R.get(Q).__webglFramebuffer;Q.isWebGLCubeRenderTarget?(Array.isArray(Ke[ge])?Me=Ke[ge][we]:Me=Ke[ge],ke=!0):Q.samples>0&&z.useMultisampledRTT(Q)===!1?Me=R.get(Q).__webglMultisampledFramebuffer:Array.isArray(Ke)?Me=Ke[we]:Me=Ke,I.copy(Q.viewport),q.copy(Q.scissor),Y=Q.scissorTest}else I.copy(re).multiplyScalar(X).floor(),q.copy(le).multiplyScalar(X).floor(),Y=me;if(ye.bindFramebuffer(H.FRAMEBUFFER,Me)&&Re&&ye.drawBuffers(Q,Me),ye.viewport(I),ye.scissor(q),ye.setScissorTest(Y),ke){const We=R.get(Q.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+ge,We.__webglTexture,we)}else if(ze){const We=R.get(Q.texture),je=ge||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,We.__webglTexture,we||0,je)}S=-1},this.readRenderTargetPixels=function(Q,ge,we,Re,Me,ke,ze){if(!(Q&&Q.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $e=R.get(Q).__webglFramebuffer;if(Q.isWebGLCubeRenderTarget&&ze!==void 0&&($e=$e[ze]),$e){ye.bindFramebuffer(H.FRAMEBUFFER,$e);try{const We=Q.texture,je=We.format,Ke=We.type;if(!Ee.textureFormatReadable(je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ee.textureTypeReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ge>=0&&ge<=Q.width-Re&&we>=0&&we<=Q.height-Me&&H.readPixels(ge,we,Re,Me,Ve.convert(je),Ve.convert(Ke),ke)}finally{const We=M!==null?R.get(M).__webglFramebuffer:null;ye.bindFramebuffer(H.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(Q,ge,we,Re,Me,ke,ze){if(!(Q&&Q.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let $e=R.get(Q).__webglFramebuffer;if(Q.isWebGLCubeRenderTarget&&ze!==void 0&&($e=$e[ze]),$e){const We=Q.texture,je=We.format,Ke=We.type;if(!Ee.textureFormatReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ee.textureTypeReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(ge>=0&&ge<=Q.width-Re&&we>=0&&we<=Q.height-Me){ye.bindFramebuffer(H.FRAMEBUFFER,$e);const qe=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,qe),H.bufferData(H.PIXEL_PACK_BUFFER,ke.byteLength,H.STREAM_READ),H.readPixels(ge,we,Re,Me,Ve.convert(je),Ve.convert(Ke),0);const et=M!==null?R.get(M).__webglFramebuffer:null;ye.bindFramebuffer(H.FRAMEBUFFER,et);const rt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await probeAsync(H,rt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,qe),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,ke),H.deleteBuffer(qe),H.deleteSync(rt),ke}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(Q,ge=null,we=0){Q.isTexture!==!0&&(warnOnce("WebGLRenderer: copyFramebufferToTexture function signature has changed."),ge=arguments[0]||null,Q=arguments[1]);const Re=Math.pow(2,-we),Me=Math.floor(Q.image.width*Re),ke=Math.floor(Q.image.height*Re),ze=ge!==null?ge.x:0,$e=ge!==null?ge.y:0;z.setTexture2D(Q,0),H.copyTexSubImage2D(H.TEXTURE_2D,we,0,0,ze,$e,Me,ke),ye.unbindTexture()},this.copyTextureToTexture=function(Q,ge,we=null,Re=null,Me=0){Q.isTexture!==!0&&(warnOnce("WebGLRenderer: copyTextureToTexture function signature has changed."),Re=arguments[0]||null,Q=arguments[1],ge=arguments[2],Me=arguments[3]||0,we=null);let ke,ze,$e,We,je,Ke,qe,et,rt;const it=Q.isCompressedTexture?Q.mipmaps[Me]:Q.image;we!==null?(ke=we.max.x-we.min.x,ze=we.max.y-we.min.y,$e=we.isBox3?we.max.z-we.min.z:1,We=we.min.x,je=we.min.y,Ke=we.isBox3?we.min.z:0):(ke=it.width,ze=it.height,$e=it.depth||1,We=0,je=0,Ke=0),Re!==null?(qe=Re.x,et=Re.y,rt=Re.z):(qe=0,et=0,rt=0);const ot=Ve.convert(ge.format),tt=Ve.convert(ge.type);let Xe;ge.isData3DTexture?(z.setTexture3D(ge,0),Xe=H.TEXTURE_3D):ge.isDataArrayTexture||ge.isCompressedArrayTexture?(z.setTexture2DArray(ge,0),Xe=H.TEXTURE_2D_ARRAY):(z.setTexture2D(ge,0),Xe=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,ge.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ge.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,ge.unpackAlignment);const ft=H.getParameter(H.UNPACK_ROW_LENGTH),nt=H.getParameter(H.UNPACK_IMAGE_HEIGHT),ut=H.getParameter(H.UNPACK_SKIP_PIXELS),vt=H.getParameter(H.UNPACK_SKIP_ROWS),ct=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,it.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,it.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,We),H.pixelStorei(H.UNPACK_SKIP_ROWS,je),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Ke);const Mt=Q.isDataArrayTexture||Q.isData3DTexture,at=ge.isDataArrayTexture||ge.isData3DTexture;if(Q.isRenderTargetTexture||Q.isDepthTexture){const ht=R.get(Q),xt=R.get(ge),lt=R.get(ht.__renderTarget),dt=R.get(xt.__renderTarget);ye.bindFramebuffer(H.READ_FRAMEBUFFER,lt.__webglFramebuffer),ye.bindFramebuffer(H.DRAW_FRAMEBUFFER,dt.__webglFramebuffer);for(let pt=0;pt<$e;pt++)Mt&&H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,R.get(Q).__webglTexture,Me,Ke+pt),Q.isDepthTexture?(at&&H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,R.get(ge).__webglTexture,Me,rt+pt),H.blitFramebuffer(We,je,ke,ze,qe,et,ke,ze,H.DEPTH_BUFFER_BIT,H.NEAREST)):at?H.copyTexSubImage3D(Xe,Me,qe,et,rt+pt,We,je,ke,ze):H.copyTexSubImage2D(Xe,Me,qe,et,rt+pt,We,je,ke,ze);ye.bindFramebuffer(H.READ_FRAMEBUFFER,null),ye.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else at?Q.isDataTexture||Q.isData3DTexture?H.texSubImage3D(Xe,Me,qe,et,rt,ke,ze,$e,ot,tt,it.data):ge.isCompressedArrayTexture?H.compressedTexSubImage3D(Xe,Me,qe,et,rt,ke,ze,$e,ot,it.data):H.texSubImage3D(Xe,Me,qe,et,rt,ke,ze,$e,ot,tt,it):Q.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Me,qe,et,ke,ze,ot,tt,it.data):Q.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Me,qe,et,it.width,it.height,ot,it.data):H.texSubImage2D(H.TEXTURE_2D,Me,qe,et,ke,ze,ot,tt,it);H.pixelStorei(H.UNPACK_ROW_LENGTH,ft),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,nt),H.pixelStorei(H.UNPACK_SKIP_PIXELS,ut),H.pixelStorei(H.UNPACK_SKIP_ROWS,vt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,ct),Me===0&&ge.generateMipmaps&&H.generateMipmap(Xe),ye.unbindTexture()},this.copyTextureToTexture3D=function(Q,ge,we=null,Re=null,Me=0){return Q.isTexture!==!0&&(warnOnce("WebGLRenderer: copyTextureToTexture3D function signature has changed."),we=arguments[0]||null,Re=arguments[1]||null,Q=arguments[2],ge=arguments[3],Me=arguments[4]||0),warnOnce('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(Q,ge,we,Re,Me)},this.initRenderTarget=function(Q){R.get(Q).__webglFramebuffer===void 0&&z.setupRenderTarget(Q)},this.initTexture=function(Q){Q.isCubeTexture?z.setTextureCube(Q,0):Q.isData3DTexture?z.setTexture3D(Q,0):Q.isDataArrayTexture||Q.isCompressedArrayTexture?z.setTexture2DArray(Q,0):z.setTexture2D(Q,0),ye.unbindTexture()},this.resetState=function(){L=0,G=0,M=null,ye.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return WebGLCoordinateSystem}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=ColorManagement._getDrawingBufferColorSpace(e),t.unpackColorSpace=ColorManagement._getUnpackColorSpace()}}class Scene extends Object3D{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Euler,this.environmentIntensity=1,this.environmentRotation=new Euler,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class SphereGeometry extends BufferGeometry{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const u=[],h=new Vector3,d=new Vector3,f=[],p=[],_=[],g=[];for(let v=0;v<=n;v++){const F=[],y=v/n;let x=0;v===0&&a===0?x=.5/t:v===n&&c===Math.PI&&(x=-.5/t);for(let b=0;b<=t;b++){const L=b/t;h.x=-e*Math.cos(i+L*s)*Math.sin(a+y*o),h.y=e*Math.cos(a+y*o),h.z=e*Math.sin(i+L*s)*Math.sin(a+y*o),p.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),g.push(L+x,1-y),F.push(l++)}u.push(F)}for(let v=0;v<n;v++)for(let F=0;F<t;F++){const y=u[v][F+1],x=u[v][F],b=u[v+1][F],L=u[v+1][F+1];(v!==0||a>0)&&f.push(y,x,L),(v!==n-1||c<Math.PI)&&f.push(x,b,L)}this.setIndex(f),this.setAttribute("position",new Float32BufferAttribute(p,3)),this.setAttribute("normal",new Float32BufferAttribute(_,3)),this.setAttribute("uv",new Float32BufferAttribute(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new SphereGeometry(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class MeshStandardMaterial extends Material{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Color(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Color(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=TangentSpaceNormalMap,this.normalScale=new Vector2(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Euler,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Cache={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class LoadingManager{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,s===!1&&i.onStart!==void 0&&i.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const f=l[h],p=l[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return p}return null}}}const DefaultLoadingManager=new LoadingManager;class Loader{constructor(e){this.manager=e!==void 0?e:DefaultLoadingManager,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Loader.DEFAULT_MATERIAL_NAME="__DEFAULT";const loading={};class HttpError extends Error{constructor(e,t){super(e),this.response=t}}class FileLoader extends Loader{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Cache.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(loading[e]!==void 0){loading[e].push({onLoad:t,onProgress:n,onError:i});return}loading[e]=[],loading[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=loading[e],h=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,p=f!==0;let _=0;const g=new ReadableStream({start(v){F();function F(){h.read().then(({done:y,value:x})=>{if(y)v.close();else{_+=x.byteLength;const b=new ProgressEvent("progress",{lengthComputable:p,loaded:_,total:f});for(let L=0,G=u.length;L<G;L++){const M=u[L];M.onProgress&&M.onProgress(b)}v.enqueue(x),F()}},y=>{v.error(y)})}}});return new Response(g)}else throw new HttpError(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o===void 0)return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(p=>f.decode(p))}}}).then(l=>{Cache.add(e,l);const u=loading[e];delete loading[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(l)}}).catch(l=>{const u=loading[e];if(u===void 0)throw this.manager.itemError(e),l;delete loading[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class ImageLoader extends Loader{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Cache.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=createElementNS("img");function c(){u(),Cache.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(h){u(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class TextureLoader extends Loader{constructor(e){super(e)}load(e,t,n,i){const s=new Texture,a=new ImageLoader(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Light extends Object3D{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Color(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const _projScreenMatrix$1=new Matrix4,_lightPositionWorld$1=new Vector3,_lookTarget$1=new Vector3;class LightShadow{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Vector2(512,512),this.map=null,this.mapPass=null,this.matrix=new Matrix4,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Frustum,this._frameExtents=new Vector2(1,1),this._viewportCount=1,this._viewports=[new Vector4(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;_lightPositionWorld$1.setFromMatrixPosition(e.matrixWorld),t.position.copy(_lightPositionWorld$1),_lookTarget$1.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(_lookTarget$1),t.updateMatrixWorld(),_projScreenMatrix$1.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_projScreenMatrix$1),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(_projScreenMatrix$1)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class DirectionalLightShadow extends LightShadow{constructor(){super(new OrthographicCamera(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class DirectionalLight extends Light{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Object3D.DEFAULT_UP),this.updateMatrix(),this.target=new Object3D,this.shadow=new DirectionalLightShadow}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class AmbientLight extends Light{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}let _context;class AudioContext{static getContext(){return _context===void 0&&(_context=new(window.AudioContext||window.webkitAudioContext)),_context}static setContext(e){_context=e}}class AudioLoader extends Loader{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new FileLoader(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(c){try{const l=c.slice(0);AudioContext.getContext().decodeAudioData(l,function(h){t(h)}).catch(o)}catch(l){o(l)}},n,i);function o(c){i?i(c):console.error(c),s.manager.itemError(e)}}}class Clock{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function now(){return performance.now()}const _position$1=new Vector3,_quaternion$1=new Quaternion,_scale$1=new Vector3,_orientation$1=new Vector3;class AudioListener extends Object3D{constructor(){super(),this.type="AudioListener",this.context=AudioContext.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Clock}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(_position$1,_quaternion$1,_scale$1),_orientation$1.set(0,0,-1).applyQuaternion(_quaternion$1),t.positionX){const i=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(_position$1.x,i),t.positionY.linearRampToValueAtTime(_position$1.y,i),t.positionZ.linearRampToValueAtTime(_position$1.z,i),t.forwardX.linearRampToValueAtTime(_orientation$1.x,i),t.forwardY.linearRampToValueAtTime(_orientation$1.y,i),t.forwardZ.linearRampToValueAtTime(_orientation$1.z,i),t.upX.linearRampToValueAtTime(n.x,i),t.upY.linearRampToValueAtTime(n.y,i),t.upZ.linearRampToValueAtTime(n.z,i)}else t.setPosition(_position$1.x,_position$1.y,_position$1.z),t.setOrientation(_orientation$1.x,_orientation$1.y,_orientation$1.z,n.x,n.y,n.z)}}class Audio extends Object3D{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}const _position=new Vector3,_quaternion=new Quaternion,_scale=new Vector3,_orientation=new Vector3;class PositionalAudio extends Audio{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){super.connect(),this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(_position,_quaternion,_scale),_orientation.set(0,0,1).applyQuaternion(_quaternion);const t=this.panner;if(t.positionX){const n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(_position.x,n),t.positionY.linearRampToValueAtTime(_position.y,n),t.positionZ.linearRampToValueAtTime(_position.z,n),t.orientationX.linearRampToValueAtTime(_orientation.x,n),t.orientationY.linearRampToValueAtTime(_orientation.y,n),t.orientationZ.linearRampToValueAtTime(_orientation.z,n)}else t.setPosition(_position.x,_position.y,_position.z),t.setOrientation(_orientation.x,_orientation.y,_orientation.z)}}class AudioAnalyser{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}}class Controls extends EventDispatcher{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:REVISION}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=REVISION);const _euler$3=new Euler(0,0,0,"YXZ"),_vector=new Vector3,_changeEvent={type:"change"},_lockEvent={type:"lock"},_unlockEvent={type:"unlock"},_PI_2=Math.PI/2;class MouseOnlyControls extends Controls{constructor(e,t){super(),this.camera=e,this.domElement=t,this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.rotationSpeed=1,this.movementEnabled=!0,this.movingForward=!1,this.distance=.02,this.domElement.ownerDocument.addEventListener("mousemove",this.onMouseMove.bind(this)),this.domElement.ownerDocument.addEventListener("pointerlockchange",this.onPointerlockChange.bind(this)),this.domElement.ownerDocument.addEventListener("pointerlockerror",this.onPointerlockError.bind(this)),this.domElement.ownerDocument.addEventListener("mousedown",this.onMouseDown.bind(this)),this.domElement.ownerDocument.addEventListener("mouseup",this.onMouseUp.bind(this))}getObject(){return this.camera}getDirection(e){return e.set(0,0,-1).applyQuaternion(this.camera.quaternion)}moveForward(e){_vector.setFromMatrixColumn(this.camera.matrix,0),_vector.crossVectors(this.camera.up,_vector),this.camera.position.addScaledVector(_vector,e)}setDblClick(e){window.addEventListener("dblclick",t=>this.onDblClick(t,e))}lock(){this.domElement.requestPointerLock()}unlock(){this.domElement.ownerDocument.exitPointerLock()}update(){this.movingForward&&this.movementEnabled&&this.moveForward(this.distance)}onDblClick(e,t){this.isLocked&&(e.preventDefault,t())}onMouseDown(){this.isLocked!==!1&&(this.movingForward=!0,this.dispatchEvent(_changeEvent))}onMouseUp(){this.isLocked!==!1&&(this.movingForward=!1,this.dispatchEvent(_changeEvent))}onMouseMove(e){if(this.isLocked===!1)return;const t=e.movementX||e.mozMovementX||e.webkitMovementX||0,n=e.movementY||e.mozMovementY||e.webkitMovementY||0;_euler$3.setFromQuaternion(this.camera.quaternion),_euler$3.y-=t*.002*this.rotationSpeed,_euler$3.x-=n*.002*this.rotationSpeed,_euler$3.x=Math.max(_PI_2-this.maxPolarAngle,Math.min(_PI_2-this.minPolarAngle,_euler$3.x)),this.camera.quaternion.setFromEuler(_euler$3),this.dispatchEvent(_changeEvent)}onPointerlockChange(){this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(_lockEvent),this.isLocked=!0):(this.dispatchEvent(_unlockEvent),this.isLocked=!1)}onPointerlockError(){console.error("THREE.MouseOnlyControls: Unable to use Pointer Lock API")}onContextMenu(e){this.isLocked===!0&&this.unlock()}}new Vector3;new Vector3;const _euler$2=new Euler(0,0,0,"YXZ");new Vector3;class KeyboardAccessControls{constructor(e,t){this.camera=e,this.domElement=t,this.lookSpeed=.01,this.moveSpeed=.01,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.moveDown=!1,this.moveForwardEnabled=!1,this.moveLeft=!1,this.moveRight=!1,this.moveUp=!1,this.tabularMovement=!1,this.sceneActive=!1,this.elevationControls=!0,window.addEventListener("keydown",this.onKeyDown.bind(this)),window.addEventListener("keyup",this.onKeyUp.bind(this))}onKeyDown(e){switch(e.code){case"ArrowUp":case"KeyW":this.elevationControls&&(this.moveUp=!0);break;case"ArrowLeft":case"KeyA":this.moveLeft=!0;break;case"ArrowDown":case"KeyS":this.elevationControls&&(this.moveDown=!0);break;case"ArrowRight":case"KeyD":this.moveRight=!0;break;case"Space":this.moveForwardEnabled=!0;break}}onKeyUp(e){switch(e.code){case"ArrowUp":case"KeyW":this.elevationControls&&(this.moveUp=!1);break;case"ArrowLeft":case"KeyA":this.moveLeft=!1;break;case"ArrowDown":case"KeyS":this.elevationControls&&(this.moveDown=!1);break;case"ArrowRight":case"KeyD":this.moveRight=!1;break;case"Space":this.moveForwardEnabled=!1;break}}dispose(){window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp)}setTab(e){window.addEventListener("keydown",t=>this.onTab(t,e))}onTab(e,t){if(this.sceneActive)switch(e.preventDefault(),e.code){case"Tab":t(e);break}}getDirection(e){return e.set(0,0,-1).applyQuaternion(this.camera.quaternion)}update(){_euler$2.setFromQuaternion(this.camera.quaternion),this.moveUp?(_euler$2.x+=this.lookSpeed,_euler$2.x=Math.max(Math.PI/2-this.maxPolarAngle,Math.min(Math.PI/2-this.minPolarAngle,_euler$2.x))):this.moveDown&&(_euler$2.x-=this.lookSpeed,_euler$2.x=Math.max(Math.PI/2-this.maxPolarAngle,Math.min(Math.PI/2-this.minPolarAngle,_euler$2.x))),this.moveLeft?_euler$2.y+=this.lookSpeed:this.moveRight&&(_euler$2.y-=this.lookSpeed),this.camera.quaternion.setFromEuler(_euler$2),this.moveForwardEnabled&&this.moveForward(this.moveSpeed)}moveForward(e){const t=new Vector3;t.setFromMatrixColumn(this.camera.matrix,0),t.crossVectors(this.camera.up,t),this.camera.position.addScaledVector(t,e)}}const _euler$1=new Euler(0,0,0,"YXZ"),_direction=new Vector3;class GamepadAccessControls{constructor(e){this.supported=navigator.webkitGetGamepads&&navigator.webkitGetGamepads()||!!navigator.webkitGamepads||!!navigator.mozGamepads||!!navigator.msGamepads||!!navigator.gamepads||navigator.getGamepads&&navigator.getGamepads(),this.camera=e,this.gamepadSpeed=.01,this.ticking=!1,this.cameraHeight=0,this.prevCameraHeight=0,this.minPolarAngle=Math.PI*1/4,this.maxPolarAngle=Math.PI*3/4,this.joystickSelect="left",this.left=new Vector2(0,0),this.right=new Vector2(0,0),this.RIGHT_AXIS_THRESHOLD=7849/32767,this.LEFT_AXIS_THRESHOLD=8689/32767,this.TRIGGER_AXIS_THRESHOLD=30/32767,this.SPACEMOUSE_THRESHOLD=5/32767,this.gamepads=[],this.prevRawGamepadTypes=[],this.prevTimestamps=[],this.buttons=new Array(17).fill({pressed:!1}),this.buttonsUp=[],this.bButton,this.previousB=0,this.forwardMovementEnabled=!1,this.forwardSpeed=.04,this.init()}init(){this.supported?(window.addEventListener("MozGamepadConnected",e=>this.onGamepadConnect(e),!1),window.addEventListener("MozGamepadDisconnected",e=>this.onGamepadDisconnect(e),!1),window.addEventListener("gamepadconnected",e=>this.onGamepadConnect(e),!1),window.addEventListener("gamepaddisconnected",e=>this.onGamepadDisconnect(e),!1),navigator.webkitGetGamepads&&navigator.webkitGetGamepads()&&this.startPolling()):console.error("Gamepad API not supported or not detected!")}startPolling(){console.log("Controller Connected!"),this.ticking||(this.ticking=!0,this.update())}stopPolling(){console.log("Controller Disconnected!"),this.ticking=!1}update(){this.pollStatus(),this.camera.getWorldDirection(_direction),this.cameraHeight=_direction.y,this.ticking&&(this.pollJoysticks(),this.pollButtons(),_euler$1.setFromQuaternion(this.camera.quaternion),this.joystickSelect==="left"?(_euler$1.y-=this.left.x*this.gamepadSpeed,_euler$1.x-=this.left.y*this.gamepadSpeed*.5,_euler$1.x=Math.max(Math.PI/2-this.maxPolarAngle,Math.min(Math.PI/2-this.minPolarAngle,_euler$1.x))):this.joystickSelect==="right"&&(_euler$1.y-=this.right.x*this.gamepadSpeed,_euler$1.x-=this.right.y*this.gamepadSpeed*.5,_euler$1.x=Math.max(Math.PI/2-this.maxPolarAngle,Math.min(Math.PI/2-this.minPolarAngle,_euler$1.x))),(this.cameraHeight>0&&this.prevCameraHeight<0||this.cameraHeight<0&&this.prevCameraHeight>0)&&(console.log("vibrate"),console.log(this.gamepads[0].vibrationActuator),this.gamepads[0].vibrationActuator.playEffect("dual-rumble",{startDelay:0,duration:100,weakMagnitude:1,strongMagnitude:1})),this.camera.quaternion.setFromEuler(_euler$1),this.prevCameraHeight=this.cameraHeight)}pollStatus(){this.pollGamepads();for(let e in this.gamepads){let t=this.gamepads[e];t.timestamp&&t.timestamp===this.prevTimestamps[e]||(this.prevTimestamps[e]=t.timestamp)}}pollGamepads(){let e=navigator.webkitGetGamepads&&navigator.webkitGetGamepads()||navigator.webkitGamepads||navigator.mozGamepads||navigator.msGamepads||navigator.gamepads||navigator.getGamepads&&navigator.getGamepads();if(e){this.gamepads=[];for(let t=0,n=e.length;t<n;t++)typeof e[t]!==this.prevRawGamepadTypes[t]&&(this.prevRawGamepadTypes[t]=typeof e[t]),e[t]&&this.gamepads.push(e[t])}}pollJoysticks(){let e=0;if(this.left=new Vector2(0,0),this.right=new Vector2(0,0),this.gamepads[e]){let t=this.gamepads[e].axes[0],n=this.gamepads[e].axes[1],i=this.gamepads[e].axes[2],s=this.gamepads[e].axes[3];(t<-this.SPACEMOUSE_THRESHOLD||t>this.SPACEMOUSE_THRESHOLD)&&(this.left.x=t),(n<-this.SPACEMOUSE_THRESHOLD||n>this.SPACEMOUSE_THRESHOLD)&&(this.left.y=n),(i<-this.SPACEMOUSE_THRESHOLD||i>this.SPACEMOUSE_THRESHOLD)&&(this.right.x=i),(s<-this.SPACEMOUSE_THRESHOLD||s>this.SPACEMOUSE_THRESHOLD)&&(this.right.y=s)}}pollButtons(){const e=this.gamepads[0].buttons,t=12,n=13,i=14,s=15;this.camera.getWorldDirection(_direction),e.map((o,c)=>{(!o||!this.buttons)&&(!o.pressed&&this.buttons[c].pressed?this.buttonsUp[c]=!0:this.buttonsUp[c]=!1)}),this.buttons=e;let a=this.gamepads[0].buttons;this.forwardMovementEnabled&&(a[0].pressed&&this.moveForward(this.forwardSpeed),a[1].pressed&&this.previousB==0?(this.bButton(),this.previousB=1):a[1].pressed||(this.previousB=0),console.log(a),a[t].pressed?this.left.y=-1:a[n].pressed?this.left.y=1:a[i].pressed?this.left.x=-1:a[s].pressed&&(this.left.x=1))}moveForward(e){_direction.setFromMatrixColumn(this.camera.matrix,0),_direction.crossVectors(this.camera.up,_direction),this.camera.position.addScaledVector(_direction,e)}onGamepadConnect(e){let t=e.gamepad;this.gamepads[e.gamepad.id]=t,this.startPolling()}onGamepadDisconnect(e){this.gamepads[e.gamepad.id]=null,this.gamepads.length===0&&this.stopPolling()}}const _euler=new Euler(0,0,0,"YXZ"),_rotTouchCoords=new Vector2(0,0),_prevRotTouchCoords=new Vector2(0,0);class TouchAccessControls{constructor(e,t){this.camera=e,this.domElement=t,this.enabled=!1,this.isLocked=!1,this.inertia=!1,this.elevationControls=!0,this.curTime,this.tapLen,this.lastTap=0,this.timeout,this.cameraHeight=0,this.prevCameraHeight=0,this.moveForwardEnabled=!1,this.navigator=window.navigator,this.rotationTouches=[],this.moveTouches=[],this.touchSpeed=.005,this.forwardSpeed=.01,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.domElement.ownerDocument.addEventListener("touchstart",this.onTouchStart.bind(this)),this.domElement.ownerDocument.addEventListener("touchmove",this.onTouchMove.bind(this)),this.domElement.ownerDocument.addEventListener("touchend",this.onTouchEnd.bind(this)),this.domElement.ownerDocument.addEventListener("touchcancel",this.onTouchEnd.bind(this)),this.divideScreen()}divideScreen(){const e=this.domElement.ownerDocument.createElement("div");e.id="hitbox",this.domElement.ownerDocument.body.appendChild(e)}dispose(){}update(){const e=new Vector3;this.camera.getWorldDirection(e),this.cameraHeight=e.y,(this.cameraHeight>0&&this.prevCameraHeight<0||this.cameraHeight<0&&this.prevCameraHeight>0)&&(console.log("vibrate"),navigator.vibrate(75)),this.prevCameraHeight=this.cameraHeight,this.moveTouches.length>0&&this.moveForward(this.forwardSpeed),_euler.setFromQuaternion(this.camera.quaternion),this.elevationControls&&(_euler.y+=_rotTouchCoords.x*this.touchSpeed),_euler.x+=_rotTouchCoords.y*this.touchSpeed*.5,_euler.x=Math.max(Math.PI/2-this.maxPolarAngle,Math.min(Math.PI/2-this.minPolarAngle,_euler.x)),this.camera.quaternion.setFromEuler(_euler)}onTouchStart(e){let t=0;for(;e.changedTouches.item(t)!=null;){let n=e.changedTouches.item(t);n.target.id=="hitbox"?this.moveTouches.push(n.identifier):n.target.id=="canvas"&&(this.rotationTouches.length==0&&this.rotationTouches.push(n.identifier),_prevRotTouchCoords.y=n.clientY,_prevRotTouchCoords.x=n.clientX),t++}}onTouchEnd(e){let t=0;for(;e.changedTouches.item(t)!=null;){let n=e.changedTouches.item(t);n.identifier==this.rotationTouches[0]&&!this.inertia&&(_rotTouchCoords.x=0,_rotTouchCoords.y=0),this.moveTouches=this.moveTouches.filter(i=>n.identifier!=i),this.rotationTouches=this.rotationTouches.filter(i=>n.identifier!=i),t++}}onTouchMove(e){let n=e.changedTouches.item(0);this.rotationTouches.map((i,s)=>{console.log(s),i==n.identifier&&s==0&&(_rotTouchCoords.x=n.clientX-_prevRotTouchCoords.x,_prevRotTouchCoords.x=n.clientX,_rotTouchCoords.y=n.clientY-_prevRotTouchCoords.y,_prevRotTouchCoords.y=n.clientY)})}onHitBoxEnd(e){this.moveForwardEnabled=!1,this.domElement.ownerDocument.removeEventListener("touchend",this._onHitBoxEnd)}moveForward(e){const t=new Vector3;t.setFromMatrixColumn(this.camera.matrix,0),t.crossVectors(this.camera.up,t),this.camera.position.addScaledVector(t,e)}}var commonjsGlobal=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},dist={},ambiMonoEncoder={},classCallCheck={};classCallCheck.__esModule=!0;classCallCheck.default=function(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")};var createClass={},_global={exports:{}},global$2=_global.exports=typeof window<"u"&&window.Math==Math?window:typeof self<"u"&&self.Math==Math?self:Function("return this")();typeof __g=="number"&&(__g=global$2);var _globalExports=_global.exports,_core={exports:{}},core$1=_core.exports={version:"2.6.12"};typeof __e=="number"&&(__e=core$1);var _coreExports=_core.exports,_aFunction=function(r){if(typeof r!="function")throw TypeError(r+" is not a function!");return r},aFunction=_aFunction,_ctx=function(r,e,t){if(aFunction(r),e===void 0)return r;switch(t){case 1:return function(n){return r.call(e,n)};case 2:return function(n,i){return r.call(e,n,i)};case 3:return function(n,i,s){return r.call(e,n,i,s)}}return function(){return r.apply(e,arguments)}},_objectDp={},_isObject,hasRequired_isObject;function require_isObject(){return hasRequired_isObject||(hasRequired_isObject=1,_isObject=function(r){return typeof r=="object"?r!==null:typeof r=="function"}),_isObject}var _anObject,hasRequired_anObject;function require_anObject(){if(hasRequired_anObject)return _anObject;hasRequired_anObject=1;var r=require_isObject();return _anObject=function(e){if(!r(e))throw TypeError(e+" is not an object!");return e},_anObject}var _fails,hasRequired_fails;function require_fails(){return hasRequired_fails||(hasRequired_fails=1,_fails=function(r){try{return!!r()}catch{return!0}}),_fails}var _descriptors,hasRequired_descriptors;function require_descriptors(){return hasRequired_descriptors||(hasRequired_descriptors=1,_descriptors=!require_fails()(function(){return Object.defineProperty({},"a",{get:function(){return 7}}).a!=7})),_descriptors}var _domCreate,hasRequired_domCreate;function require_domCreate(){if(hasRequired_domCreate)return _domCreate;hasRequired_domCreate=1;var r=require_isObject(),e=_globalExports.document,t=r(e)&&r(e.createElement);return _domCreate=function(n){return t?e.createElement(n):{}},_domCreate}var _ie8DomDefine,hasRequired_ie8DomDefine;function require_ie8DomDefine(){return hasRequired_ie8DomDefine||(hasRequired_ie8DomDefine=1,_ie8DomDefine=!require_descriptors()&&!require_fails()(function(){return Object.defineProperty(require_domCreate()("div"),"a",{get:function(){return 7}}).a!=7})),_ie8DomDefine}var _toPrimitive,hasRequired_toPrimitive;function require_toPrimitive(){if(hasRequired_toPrimitive)return _toPrimitive;hasRequired_toPrimitive=1;var r=require_isObject();return _toPrimitive=function(e,t){if(!r(e))return e;var n,i;if(t&&typeof(n=e.toString)=="function"&&!r(i=n.call(e))||typeof(n=e.valueOf)=="function"&&!r(i=n.call(e))||!t&&typeof(n=e.toString)=="function"&&!r(i=n.call(e)))return i;throw TypeError("Can't convert object to primitive value")},_toPrimitive}var hasRequired_objectDp;function require_objectDp(){if(hasRequired_objectDp)return _objectDp;hasRequired_objectDp=1;var r=require_anObject(),e=require_ie8DomDefine(),t=require_toPrimitive(),n=Object.defineProperty;return _objectDp.f=require_descriptors()?Object.defineProperty:function(s,a,o){if(r(s),a=t(a,!0),r(o),e)try{return n(s,a,o)}catch{}if("get"in o||"set"in o)throw TypeError("Accessors not supported!");return"value"in o&&(s[a]=o.value),s},_objectDp}var _propertyDesc=function(r,e){return{enumerable:!(r&1),configurable:!(r&2),writable:!(r&4),value:e}},dP=require_objectDp(),createDesc=_propertyDesc,_hide=require_descriptors()?function(r,e,t){return dP.f(r,e,createDesc(1,t))}:function(r,e,t){return r[e]=t,r},hasOwnProperty={}.hasOwnProperty,_has=function(r,e){return hasOwnProperty.call(r,e)},global$1=_globalExports,core=_coreExports,ctx=_ctx,hide=_hide,has=_has,PROTOTYPE="prototype",$export$1=function(r,e,t){var n=r&$export$1.F,i=r&$export$1.G,s=r&$export$1.S,a=r&$export$1.P,o=r&$export$1.B,c=r&$export$1.W,l=i?core:core[e]||(core[e]={}),u=l[PROTOTYPE],h=i?global$1:s?global$1[e]:(global$1[e]||{})[PROTOTYPE],d,f,p;i&&(t=e);for(d in t)f=!n&&h&&h[d]!==void 0,!(f&&has(l,d))&&(p=f?h[d]:t[d],l[d]=i&&typeof h[d]!="function"?t[d]:o&&f?ctx(p,global$1):c&&h[d]==p?function(_){var g=function(v,F,y){if(this instanceof _){switch(arguments.length){case 0:return new _;case 1:return new _(v);case 2:return new _(v,F)}return new _(v,F,y)}return _.apply(this,arguments)};return g[PROTOTYPE]=_[PROTOTYPE],g}(p):a&&typeof p=="function"?ctx(Function.call,p):p,a&&((l.virtual||(l.virtual={}))[d]=p,r&$export$1.R&&u&&!u[d]&&hide(u,d,p)))};$export$1.F=1;$export$1.G=2;$export$1.S=4;$export$1.P=8;$export$1.B=16;$export$1.W=32;$export$1.U=64;$export$1.R=128;var _export=$export$1,$export=_export;$export($export.S+$export.F*!require_descriptors(),"Object",{defineProperty:require_objectDp().f});var $Object=_coreExports.Object,defineProperty$1=function(e,t,n){return $Object.defineProperty(e,t,n)},defineProperty={default:defineProperty$1,__esModule:!0};createClass.__esModule=!0;var _defineProperty=defineProperty,_defineProperty2=_interopRequireDefault$n(_defineProperty);function _interopRequireDefault$n(r){return r&&r.__esModule?r:{default:r}}createClass.default=function(){function r(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),(0,_defineProperty2.default)(e,i.key,i)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}();var src={},numeric1_2_6={};(function(exports){var numeric=exports;typeof commonjsGlobal<"u"&&(commonjsGlobal.numeric=numeric),numeric.version="1.2.6",numeric.bench=function(e,t){var n,i,s,a;for(typeof t>"u"&&(t=15),s=.5,n=new Date;;){for(s*=2,a=s;a>3;a-=4)e(),e(),e(),e();for(;a>0;)e(),a--;if(i=new Date,i-n>t)break}for(a=s;a>3;a-=4)e(),e(),e(),e();for(;a>0;)e(),a--;return i=new Date,1e3*(3*s-1)/(i-n)},numeric._myIndexOf=function(e){var t=this.length,n;for(n=0;n<t;++n)if(this[n]===e)return n;return-1},numeric.myIndexOf=Array.prototype.indexOf?Array.prototype.indexOf:numeric._myIndexOf,numeric.Function=Function,numeric.precision=4,numeric.largeArray=50,numeric.prettyPrint=function(e){function t(s){if(s===0)return"0";if(isNaN(s))return"NaN";if(s<0)return"-"+t(-s);if(isFinite(s)){var a=Math.floor(Math.log(s)/Math.log(10)),o=s/Math.pow(10,a),c=o.toPrecision(numeric.precision);return parseFloat(c)===10&&(a++,o=1,c=o.toPrecision(numeric.precision)),parseFloat(c).toString()+"e"+a.toString()}return"Infinity"}var n=[];function i(s){var a;if(typeof s>"u")return n.push(Array(numeric.precision+8).join(" ")),!1;if(typeof s=="string")return n.push('"'+s+'"'),!1;if(typeof s=="boolean")return n.push(s.toString()),!1;if(typeof s=="number"){var o=t(s),c=s.toPrecision(numeric.precision),l=parseFloat(s.toString()).toString(),u=[o,c,l,parseFloat(c).toString(),parseFloat(l).toString()];for(a=1;a<u.length;a++)u[a].length<o.length&&(o=u[a]);return n.push(Array(numeric.precision+8-o.length).join(" ")+o),!1}if(s===null)return n.push("null"),!1;if(typeof s=="function"){n.push(s.toString());var h=!1;for(a in s)s.hasOwnProperty(a)&&(h?n.push(`,
`):n.push(`
{`),h=!0,n.push(a),n.push(`: 
`),i(s[a]));return h&&n.push(`}
`),!0}if(s instanceof Array){if(s.length>numeric.largeArray)return n.push("...Large Array..."),!0;var h=!1;for(n.push("["),a=0;a<s.length;a++)a>0&&(n.push(","),h&&n.push(`
 `)),h=i(s[a]);return n.push("]"),!0}n.push("{");var h=!1;for(a in s)s.hasOwnProperty(a)&&(h&&n.push(`,
`),h=!0,n.push(a),n.push(`: 
`),i(s[a]));return n.push("}"),!0}return i(e),n.join("")},numeric.parseDate=function(e){function t(n){if(typeof n=="string")return Date.parse(n.replace(/-/g,"/"));if(!(n instanceof Array))throw new Error("parseDate: parameter must be arrays of strings");var i=[],s;for(s=0;s<n.length;s++)i[s]=t(n[s]);return i}return t(e)},numeric.parseFloat=function(e){function t(n){if(typeof n=="string")return parseFloat(n);if(!(n instanceof Array))throw new Error("parseFloat: parameter must be arrays of strings");var i=[],s;for(s=0;s<n.length;s++)i[s]=t(n[s]);return i}return t(e)},numeric.parseCSV=function(e){var t=e.split(`
`),n,i,s=[],a=/(([^'",]*)|('[^']*')|("[^"]*")),/g,o=/^\s*(([+-]?[0-9]+(\.[0-9]*)?(e[+-]?[0-9]+)?)|([+-]?[0-9]*(\.[0-9]+)?(e[+-]?[0-9]+)?))\s*$/,c=function(d){return d.substr(0,d.length-1)},l=0;for(i=0;i<t.length;i++){var u=(t[i]+",").match(a),h;if(u.length>0){for(s[l]=[],n=0;n<u.length;n++)h=c(u[n]),o.test(h)?s[l][n]=parseFloat(h):s[l][n]=h;l++}}return s},numeric.toCSV=function(e){var t=numeric.dim(e),n,i,s,a,o;for(s=t[0],t[1],o=[],n=0;n<s;n++){for(a=[],i=0;i<s;i++)a[i]=e[n][i].toString();o[n]=a.join(", ")}return o.join(`
`)+`
`},numeric.getURL=function(e){var t=new XMLHttpRequest;return t.open("GET",e,!1),t.send(),t},numeric.imageURL=function(e){function t(v){var F=v.length,y,x,b,L,G,M,S,E,I="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",q="";for(y=0;y<F;y+=3)x=v[y],b=v[y+1],L=v[y+2],G=x>>2,M=((x&3)<<4)+(b>>4),S=((b&15)<<2)+(L>>6),E=L&63,y+1>=F?S=E=64:y+2>=F&&(E=64),q+=I.charAt(G)+I.charAt(M)+I.charAt(S)+I.charAt(E);return q}function n(v,F,y){typeof F>"u"&&(F=0),typeof y>"u"&&(y=v.length);var x=[0,1996959894,3993919788,2567524794,124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,901097722,1119000684,3686517206,2898065728,853044451,1172266101,3705015759,2882616665,651767980,1373503546,3369554304,3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,4240017532,1658658271,366619977,2362670323,4224994405,1303535960,984961486,2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,225274430,2053790376,3826175755,2466906013,167816743,2097651377,4027552580,2265490386,503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,2998733608,733239954,1555261956,3268935591,3050360625,752459403,1541320221,2607071920,3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,1231636301,1047427035,2932959818,3654703836,1088359270,936918e3,2847714899,3736837829,1202900863,817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117],b=-1,L=0;v.length;var G;for(G=F;G<y;G++)L=(b^v[G])&255,b=b>>>8^x[L];return b^-1}var i=e[0].length,s=e[0][0].length,a,o,c,l,u,h,d,f,p,_,g=[137,80,78,71,13,10,26,10,0,0,0,13,73,72,68,82,s>>24&255,s>>16&255,s>>8&255,s&255,i>>24&255,i>>16&255,i>>8&255,i&255,8,2,0,0,0,-1,-2,-3,-4,-5,-6,-7,-8,73,68,65,84,8,29];for(_=n(g,12,29),g[29]=_>>24&255,g[30]=_>>16&255,g[31]=_>>8&255,g[32]=_&255,a=1,o=0,d=0;d<i;d++){for(d<i-1?g.push(0):g.push(1),u=3*s+1+(d===0)&255,h=3*s+1+(d===0)>>8&255,g.push(u),g.push(h),g.push(~u&255),g.push(~h&255),d===0&&g.push(0),f=0;f<s;f++)for(c=0;c<3;c++)u=e[c][d][f],u>255?u=255:u<0?u=0:u=Math.round(u),a=(a+u)%65521,o=(o+a)%65521,g.push(u);g.push(0)}return p=(o<<16)+a,g.push(p>>24&255),g.push(p>>16&255),g.push(p>>8&255),g.push(p&255),l=g.length-41,g[33]=l>>24&255,g[34]=l>>16&255,g[35]=l>>8&255,g[36]=l&255,_=n(g,37),g.push(_>>24&255),g.push(_>>16&255),g.push(_>>8&255),g.push(_&255),g.push(0),g.push(0),g.push(0),g.push(0),g.push(73),g.push(69),g.push(78),g.push(68),g.push(174),g.push(66),g.push(96),g.push(130),"data:image/png;base64,"+t(g)},numeric._dim=function(e){for(var t=[];typeof e=="object";)t.push(e.length),e=e[0];return t},numeric.dim=function(e){var t,n;return typeof e=="object"?(t=e[0],typeof t=="object"?(n=t[0],typeof n=="object"?numeric._dim(e):[e.length,t.length]):[e.length]):[]},numeric.mapreduce=function(e,t){return Function("x","accum","_s","_k",'if(typeof accum === "undefined") accum = '+t+`;
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
return accum;`)},numeric.same=function r(e,t){var n,i;if(!(e instanceof Array)||!(t instanceof Array)||(i=e.length,i!==t.length))return!1;for(n=0;n<i;n++)if(e[n]!==t[n])if(typeof e[n]=="object"){if(!r(e[n],t[n]))return!1}else return!1;return!0},numeric.rep=function(e,t,n){typeof n>"u"&&(n=0);var i=e[n],s=Array(i),a;if(n===e.length-1){for(a=i-2;a>=0;a-=2)s[a+1]=t,s[a]=t;return a===-1&&(s[0]=t),s}for(a=i-1;a>=0;a--)s[a]=numeric.rep(e,t,n+1);return s},numeric.dotMMsmall=function(e,t){var n,i,s,a,o,c,l,u,h,d,f;for(a=e.length,o=t.length,c=t[0].length,l=Array(a),n=a-1;n>=0;n--){for(u=Array(c),h=e[n],s=c-1;s>=0;s--){for(d=h[o-1]*t[o-1][s],i=o-2;i>=1;i-=2)f=i-1,d+=h[i]*t[i][s]+h[f]*t[f][s];i===0&&(d+=h[0]*t[0][s]),u[s]=d}l[n]=u}return l},numeric._getCol=function(e,t,n){var i=e.length,s;for(s=i-1;s>0;--s)n[s]=e[s][t],--s,n[s]=e[s][t];s===0&&(n[0]=e[0][t])},numeric.dotMMbig=function(e,t){var n=numeric._getCol,i=t.length,s=Array(i),a=e.length,o=t[0].length,c=new Array(a),l,u=numeric.dotVV,h,d;for(--i,--a,h=a;h!==-1;--h)c[h]=Array(o);for(--o,h=o;h!==-1;--h)for(n(t,h,s),d=a;d!==-1;--d)l=e[d],c[d][h]=u(l,s);return c},numeric.dotMV=function(e,t){var n=e.length;t.length;var i,s=Array(n),a=numeric.dotVV;for(i=n-1;i>=0;i--)s[i]=a(e[i],t);return s},numeric.dotVM=function(e,t){var n,i,s,a,o,c,l;for(s=e.length,a=t[0].length,o=Array(a),i=a-1;i>=0;i--){for(c=e[s-1]*t[s-1][i],n=s-2;n>=1;n-=2)l=n-1,c+=e[n]*t[n][i]+e[l]*t[l][i];n===0&&(c+=e[0]*t[0][i]),o[i]=c}return o},numeric.dotVV=function(e,t){var n,i=e.length,s,a=e[i-1]*t[i-1];for(n=i-2;n>=1;n-=2)s=n-1,a+=e[n]*t[n]+e[s]*t[s];return n===0&&(a+=e[0]*t[0]),a},numeric.dot=function(e,t){var n=numeric.dim;switch(n(e).length*1e3+n(t).length){case 2002:return t.length<10?numeric.dotMMsmall(e,t):numeric.dotMMbig(e,t);case 2001:return numeric.dotMV(e,t);case 1002:return numeric.dotVM(e,t);case 1001:return numeric.dotVV(e,t);case 1e3:return numeric.mulVS(e,t);case 1:return numeric.mulSV(e,t);case 0:return e*t;default:throw new Error("numeric.dot only works on vectors and matrices")}},numeric.diag=function(e){var t,n,i,s=e.length,a=Array(s),o;for(t=s-1;t>=0;t--){for(o=Array(s),n=t+2,i=s-1;i>=n;i-=2)o[i]=0,o[i-1]=0;for(i>t&&(o[i]=0),o[t]=e[t],i=t-1;i>=1;i-=2)o[i]=0,o[i-1]=0;i===0&&(o[0]=0),a[t]=o}return a},numeric.getDiag=function(r){var e=Math.min(r.length,r[0].length),t,n=Array(e);for(t=e-1;t>=1;--t)n[t]=r[t][t],--t,n[t]=r[t][t];return t===0&&(n[0]=r[0][0]),n},numeric.identity=function(e){return numeric.diag(numeric.rep([e],1))},numeric.pointwise=function(e,t,n){typeof n>"u"&&(n="");var i=[],s,a=/\[i\]$/,o,c="",l=!1;for(s=0;s<e.length;s++)a.test(e[s])?(o=e[s].substring(0,e[s].length-3),c=o):o=e[s],o==="ret"&&(l=!0),i.push(o);return i[e.length]="_s",i[e.length+1]="_k",i[e.length+2]='if(typeof _s === "undefined") _s = numeric.dim('+c+`);
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
return ret;`,Function.apply(null,i)},numeric.pointwise2=function(e,t,n){typeof n>"u"&&(n="");var i=[],s,a=/\[i\]$/,o,c="",l=!1;for(s=0;s<e.length;s++)a.test(e[s])?(o=e[s].substring(0,e[s].length-3),c=o):o=e[s],o==="ret"&&(l=!0),i.push(o);return i[e.length]="var _n = "+c+`.length;
var i`+(l?"":", ret = Array(_n)")+`;
`+n+`
for(i=_n-1;i!==-1;--i) {
`+t+`
}
return ret;`,Function.apply(null,i)},numeric._biforeach=function r(e,t,n,i,s){if(i===n.length-1){s(e,t);return}var a,o=n[i];for(a=o-1;a>=0;a--)r(typeof e=="object"?e[a]:e,typeof t=="object"?t[a]:t,n,i+1,s)},numeric._biforeach2=function r(e,t,n,i,s){if(i===n.length-1)return s(e,t);var a,o=n[i],c=Array(o);for(a=o-1;a>=0;--a)c[a]=r(typeof e=="object"?e[a]:e,typeof t=="object"?t[a]:t,n,i+1,s);return c},numeric._foreach=function r(e,t,n,i){if(n===t.length-1){i(e);return}var s,a=t[n];for(s=a-1;s>=0;s--)r(e[s],t,n+1,i)},numeric._foreach2=function r(e,t,n,i){if(n===t.length-1)return i(e);var s,a=t[n],o=Array(a);for(s=a-1;s>=0;s--)o[s]=r(e[s],t,n+1,i);return o},numeric.ops2={add:"+",sub:"-",mul:"*",div:"/",mod:"%",and:"&&",or:"||",eq:"===",neq:"!==",lt:"<",gt:">",leq:"<=",geq:">=",band:"&",bor:"|",bxor:"^",lshift:"<<",rshift:">>",rrshift:">>>"},numeric.opseq={addeq:"+=",subeq:"-=",muleq:"*=",diveq:"/=",modeq:"%=",lshifteq:"<<=",rshifteq:">>=",rrshifteq:">>>=",bandeq:"&=",boreq:"|=",bxoreq:"^="},numeric.mathfuns=["abs","acos","asin","atan","ceil","cos","exp","floor","log","round","sin","sqrt","tan","isNaN","isFinite"],numeric.mathfuns2=["atan2","pow","max","min"],numeric.ops1={neg:"-",not:"!",bnot:"~",clone:""},numeric.mapreducers={any:["if(xi) return true;","var accum = false;"],all:["if(!xi) return false;","var accum = true;"],sum:["accum += xi;","var accum = 0;"],prod:["accum *= xi;","var accum = 1;"],norm2Squared:["accum += xi*xi;","var accum = 0;"],norminf:["accum = max(accum,abs(xi));","var accum = 0, max = Math.max, abs = Math.abs;"],norm1:["accum += abs(xi)","var accum = 0, abs = Math.abs;"],sup:["accum = max(accum,xi);","var accum = -Infinity, max = Math.max;"],inf:["accum = min(accum,xi);","var accum = Infinity, min = Math.min;"]},function(){var r,e;for(r=0;r<numeric.mathfuns2.length;++r)e=numeric.mathfuns2[r],numeric.ops2[e]=e;for(r in numeric.ops2)if(numeric.ops2.hasOwnProperty(r)){e=numeric.ops2[r];var t,n,i="";numeric.myIndexOf.call(numeric.mathfuns2,r)!==-1?(i="var "+e+" = Math."+e+`;
`,t=function(s,a,o){return s+" = "+e+"("+a+","+o+")"},n=function(s,a){return s+" = "+e+"("+s+","+a+")"}):(t=function(s,a,o){return s+" = "+a+" "+e+" "+o},numeric.opseq.hasOwnProperty(r+"eq")?n=function(s,a){return s+" "+e+"= "+a}:n=function(s,a){return s+" = "+s+" "+e+" "+a}),numeric[r+"VV"]=numeric.pointwise2(["x[i]","y[i]"],t("ret[i]","x[i]","y[i]"),i),numeric[r+"SV"]=numeric.pointwise2(["x","y[i]"],t("ret[i]","x","y[i]"),i),numeric[r+"VS"]=numeric.pointwise2(["x[i]","y"],t("ret[i]","x[i]","y"),i),numeric[r]=Function(`var n = arguments.length, i, x = arguments[0], y;
var VV = numeric.`+r+"VV, VS = numeric."+r+"VS, SV = numeric."+r+`SV;
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
`),numeric[e]=numeric[r],numeric[r+"eqV"]=numeric.pointwise2(["ret[i]","x[i]"],n("ret[i]","x[i]"),i),numeric[r+"eqS"]=numeric.pointwise2(["ret[i]","x"],n("ret[i]","x"),i),numeric[r+"eq"]=Function(`var n = arguments.length, i, x = arguments[0], y;
var V = numeric.`+r+"eqV, S = numeric."+r+`eqS
var s = numeric.dim(x);
for(i=1;i!==n;++i) { 
  y = arguments[i];
  if(typeof y === "object") numeric._biforeach(x,y,s,0,V);
  else numeric._biforeach(x,y,s,0,S);
}
return x;
`)}for(r=0;r<numeric.mathfuns2.length;++r)e=numeric.mathfuns2[r],delete numeric.ops2[e];for(r=0;r<numeric.mathfuns.length;++r)e=numeric.mathfuns[r],numeric.ops1[e]=e;for(r in numeric.ops1)numeric.ops1.hasOwnProperty(r)&&(i="",e=numeric.ops1[r],numeric.myIndexOf.call(numeric.mathfuns,r)!==-1&&Math.hasOwnProperty(e)&&(i="var "+e+" = Math."+e+`;
`),numeric[r+"eqV"]=numeric.pointwise2(["ret[i]"],"ret[i] = "+e+"(ret[i]);",i),numeric[r+"eq"]=Function("x",'if(typeof x !== "object") return '+e+`x
var i;
var V = numeric.`+r+`eqV;
var s = numeric.dim(x);
numeric._foreach(x,s,0,V);
return x;
`),numeric[r+"V"]=numeric.pointwise2(["x[i]"],"ret[i] = "+e+"(x[i]);",i),numeric[r]=Function("x",'if(typeof x !== "object") return '+e+`(x)
var i;
var V = numeric.`+r+`V;
var s = numeric.dim(x);
return numeric._foreach2(x,s,0,V);
`));for(r=0;r<numeric.mathfuns.length;++r)e=numeric.mathfuns[r],delete numeric.ops1[e];for(r in numeric.mapreducers)numeric.mapreducers.hasOwnProperty(r)&&(e=numeric.mapreducers[r],numeric[r+"V"]=numeric.mapreduce2(e[0],e[1]),numeric[r]=Function("x","s","k",e[1]+`if(typeof x !== "object") {    xi = x;
`+e[0]+`;
    return accum;
}if(typeof s === "undefined") s = numeric.dim(x);
if(typeof k === "undefined") k = 0;
if(k === s.length-1) return numeric.`+r+`V(x);
var xi;
var n = x.length, i;
for(i=n-1;i!==-1;--i) {
   xi = arguments.callee(x[i]);
`+e[0]+`;
}
return accum;
`))}(),numeric.truncVV=numeric.pointwise(["x[i]","y[i]"],"ret[i] = round(x[i]/y[i])*y[i];","var round = Math.round;"),numeric.truncVS=numeric.pointwise(["x[i]","y"],"ret[i] = round(x[i]/y)*y;","var round = Math.round;"),numeric.truncSV=numeric.pointwise(["x","y[i]"],"ret[i] = round(x/y[i])*y[i];","var round = Math.round;"),numeric.trunc=function(e,t){return typeof e=="object"?typeof t=="object"?numeric.truncVV(e,t):numeric.truncVS(e,t):typeof t=="object"?numeric.truncSV(e,t):Math.round(e/t)*t},numeric.inv=function(_){var t=numeric.dim(_),n=Math.abs,i=t[0],s=t[1],a=numeric.clone(_),o,c,l=numeric.identity(i),u,h,d,f,p,_;for(f=0;f<s;++f){var g=-1,v=-1;for(d=f;d!==i;++d)p=n(a[d][f]),p>v&&(g=d,v=p);for(c=a[g],a[g]=a[f],a[f]=c,h=l[g],l[g]=l[f],l[f]=h,_=c[f],p=f;p!==s;++p)c[p]/=_;for(p=s-1;p!==-1;--p)h[p]/=_;for(d=i-1;d!==-1;--d)if(d!==f){for(o=a[d],u=l[d],_=o[f],p=f+1;p!==s;++p)o[p]-=c[p]*_;for(p=s-1;p>0;--p)u[p]-=h[p]*_,--p,u[p]-=h[p]*_;p===0&&(u[0]-=h[0]*_)}}return l},numeric.det=function(e){var t=numeric.dim(e);if(t.length!==2||t[0]!==t[1])throw new Error("numeric: det() only works on square matrices");var n=t[0],i=1,s,a,o,c=numeric.clone(e),l,u,h,d,f;for(a=0;a<n-1;a++){for(o=a,s=a+1;s<n;s++)Math.abs(c[s][a])>Math.abs(c[o][a])&&(o=s);for(o!==a&&(d=c[o],c[o]=c[a],c[a]=d,i*=-1),l=c[a],s=a+1;s<n;s++){for(u=c[s],h=u[a]/l[a],o=a+1;o<n-1;o+=2)f=o+1,u[o]-=l[o]*h,u[f]-=l[f]*h;o!==n&&(u[o]-=l[o]*h)}if(l[a]===0)return 0;i*=l[a]}return i*c[a][a]},numeric.transpose=function(e){var t,n,i=e.length,s=e[0].length,a=Array(s),o,c,l;for(n=0;n<s;n++)a[n]=Array(i);for(t=i-1;t>=1;t-=2){for(c=e[t],o=e[t-1],n=s-1;n>=1;--n)l=a[n],l[t]=c[n],l[t-1]=o[n],--n,l=a[n],l[t]=c[n],l[t-1]=o[n];n===0&&(l=a[0],l[t]=c[0],l[t-1]=o[0])}if(t===0){for(o=e[0],n=s-1;n>=1;--n)a[n][0]=o[n],--n,a[n][0]=o[n];n===0&&(a[0][0]=o[0])}return a},numeric.negtranspose=function(e){var t,n,i=e.length,s=e[0].length,a=Array(s),o,c,l;for(n=0;n<s;n++)a[n]=Array(i);for(t=i-1;t>=1;t-=2){for(c=e[t],o=e[t-1],n=s-1;n>=1;--n)l=a[n],l[t]=-c[n],l[t-1]=-o[n],--n,l=a[n],l[t]=-c[n],l[t-1]=-o[n];n===0&&(l=a[0],l[t]=-c[0],l[t-1]=-o[0])}if(t===0){for(o=e[0],n=s-1;n>=1;--n)a[n][0]=-o[n],--n,a[n][0]=-o[n];n===0&&(a[0][0]=-o[0])}return a},numeric._random=function r(e,t){var n,i=e[t],s=Array(i),a;if(t===e.length-1){for(a=Math.random,n=i-1;n>=1;n-=2)s[n]=a(),s[n-1]=a();return n===0&&(s[0]=a()),s}for(n=i-1;n>=0;n--)s[n]=r(e,t+1);return s},numeric.random=function(e){return numeric._random(e,0)},numeric.norm2=function(e){return Math.sqrt(numeric.norm2Squared(e))},numeric.linspace=function(e,t,n){if(typeof n>"u"&&(n=Math.max(Math.round(t-e)+1,1)),n<2)return n===1?[e]:[];var i,s=Array(n);for(n--,i=n;i>=0;i--)s[i]=(i*t+(n-i)*e)/n;return s},numeric.getBlock=function(e,t,n){var i=numeric.dim(e);function s(a,o){var c,l=t[o],u=n[o]-l,h=Array(u);if(o===i.length-1){for(c=u;c>=0;c--)h[c]=a[c+l];return h}for(c=u;c>=0;c--)h[c]=s(a[c+l],o+1);return h}return s(e,0)},numeric.setBlock=function(e,t,n,i){var s=numeric.dim(e);function a(o,c,l){var u,h=t[l],d=n[l]-h;if(l===s.length-1)for(u=d;u>=0;u--)o[u+h]=c[u];for(u=d;u>=0;u--)a(o[u+h],c[u],l+1)}return a(e,i,0),e},numeric.getRange=function(e,t,n){var i=t.length,s=n.length,a,o,c=Array(i),l,u;for(a=i-1;a!==-1;--a)for(c[a]=Array(s),l=c[a],u=e[t[a]],o=s-1;o!==-1;--o)l[o]=u[n[o]];return c},numeric.blockMatrix=function(e){var t=numeric.dim(e);if(t.length<4)return numeric.blockMatrix([e]);var n=t[0],i=t[1],s,a,o,c,l;for(s=0,a=0,o=0;o<n;++o)s+=e[o][0].length;for(c=0;c<i;++c)a+=e[0][c][0].length;var u=Array(s);for(o=0;o<s;++o)u[o]=Array(a);var h=0,d,f,p,_,g;for(o=0;o<n;++o){for(d=a,c=i-1;c!==-1;--c)for(l=e[o][c],d-=l[0].length,p=l.length-1;p!==-1;--p)for(g=l[p],f=u[h+p],_=g.length-1;_!==-1;--_)f[d+_]=g[_];h+=e[o][0].length}return u},numeric.tensor=function(e,t){if(typeof e=="number"||typeof t=="number")return numeric.mul(e,t);var n=numeric.dim(e),i=numeric.dim(t);if(n.length!==1||i.length!==1)throw new Error("numeric: tensor product is only defined for vectors");var s=n[0],a=i[0],o=Array(s),c,l,u,h;for(l=s-1;l>=0;l--){for(c=Array(a),h=e[l],u=a-1;u>=3;--u)c[u]=h*t[u],--u,c[u]=h*t[u],--u,c[u]=h*t[u],--u,c[u]=h*t[u];for(;u>=0;)c[u]=h*t[u],--u;o[l]=c}return o},numeric.T=function(e,t){this.x=e,this.y=t},numeric.t=function(e,t){return new numeric.T(e,t)},numeric.Tbinop=function(e,t,n,i,s){if(numeric.indexOf,typeof s!="string"){var a;s="";for(a in numeric)numeric.hasOwnProperty(a)&&(e.indexOf(a)>=0||t.indexOf(a)>=0||n.indexOf(a)>=0||i.indexOf(a)>=0)&&a.length>1&&(s+="var "+a+" = numeric."+a+`;
`)}return Function(["y"],`var x = this;
if(!(y instanceof numeric.T)) { y = new numeric.T(y); }
`+s+`
if(x.y) {  if(y.y) {    return new numeric.T(`+i+`);
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
return Math.sqrt(f(x.x)+f(x.y));`),numeric.T.prototype.inv=function(){var e=this;if(typeof e.y>"u")return new numeric.T(numeric.inv(e.x));var t=e.x.length,_,g,v,n=numeric.identity(t),i=numeric.rep([t,t],0),s=numeric.clone(e.x),a=numeric.clone(e.y),o,c,l,u,h,d,f,p,_,g,v,F,y,x,b,L,G,M;for(_=0;_<t;_++){for(x=s[_][_],b=a[_][_],F=x*x+b*b,v=_,g=_+1;g<t;g++)x=s[g][_],b=a[g][_],y=x*x+b*b,y>F&&(v=g,F=y);for(v!==_&&(M=s[_],s[_]=s[v],s[v]=M,M=a[_],a[_]=a[v],a[v]=M,M=n[_],n[_]=n[v],n[v]=M,M=i[_],i[_]=i[v],i[v]=M),o=s[_],c=a[_],h=n[_],d=i[_],x=o[_],b=c[_],g=_+1;g<t;g++)L=o[g],G=c[g],o[g]=(L*x+G*b)/F,c[g]=(G*x-L*b)/F;for(g=0;g<t;g++)L=h[g],G=d[g],h[g]=(L*x+G*b)/F,d[g]=(G*x-L*b)/F;for(g=_+1;g<t;g++){for(l=s[g],u=a[g],f=n[g],p=i[g],x=l[_],b=u[_],v=_+1;v<t;v++)L=o[v],G=c[v],l[v]-=L*x-G*b,u[v]-=G*x+L*b;for(v=0;v<t;v++)L=h[v],G=d[v],f[v]-=L*x-G*b,p[v]-=G*x+L*b}}for(_=t-1;_>0;_--)for(h=n[_],d=i[_],g=_-1;g>=0;g--)for(f=n[g],p=i[g],x=s[g][_],b=a[g][_],v=t-1;v>=0;v--)L=h[v],G=d[v],f[v]-=x*L-b*G,p[v]-=x*G+b*L;return new numeric.T(n,i)},numeric.T.prototype.get=function(e){var t=this.x,n=this.y,i=0,s,a=e.length;if(n){for(;i<a;)s=e[i],t=t[s],n=n[s],i++;return new numeric.T(t,n)}for(;i<a;)s=e[i],t=t[s],i++;return new numeric.T(t)},numeric.T.prototype.set=function(e,t){var n=this.x,i=this.y,s=0,a,o=e.length,c=t.x,l=t.y;if(o===0)return l?this.y=l:i&&(this.y=void 0),this.x=n,this;if(l){for(i||(i=numeric.rep(numeric.dim(n),0),this.y=i);s<o-1;)a=e[s],n=n[a],i=i[a],s++;return a=e[s],n[a]=c,i[a]=l,this}if(i){for(;s<o-1;)a=e[s],n=n[a],i=i[a],s++;return a=e[s],n[a]=c,c instanceof Array?i[a]=numeric.rep(numeric.dim(c),0):i[a]=0,this}for(;s<o-1;)a=e[s],n=n[a],s++;return a=e[s],n[a]=c,this},numeric.T.prototype.getRows=function(e,t){var n=t-e+1,i,s=Array(n),a,o=this.x,c=this.y;for(i=e;i<=t;i++)s[i-e]=o[i];if(c){for(a=Array(n),i=e;i<=t;i++)a[i-e]=c[i];return new numeric.T(s,a)}return new numeric.T(s)},numeric.T.prototype.setRows=function(e,t,n){var i,s=this.x,a=this.y,o=n.x,c=n.y;for(i=e;i<=t;i++)s[i]=o[i-e];if(c)for(a||(a=numeric.rep(numeric.dim(s),0),this.y=a),i=e;i<=t;i++)a[i]=c[i-e];else if(a)for(i=e;i<=t;i++)a[i]=numeric.rep([o[i-e].length],0);return this},numeric.T.prototype.getRow=function(e){var t=this.x,n=this.y;return n?new numeric.T(t[e],n[e]):new numeric.T(t[e])},numeric.T.prototype.setRow=function(e,t){var n=this.x,i=this.y,s=t.x,a=t.y;return n[e]=s,a?(i||(i=numeric.rep(numeric.dim(n),0),this.y=i),i[e]=a):i&&(i=numeric.rep([s.length],0)),this},numeric.T.prototype.getBlock=function(e,t){var n=this.x,i=this.y,s=numeric.getBlock;return i?new numeric.T(s(n,e,t),s(i,e,t)):new numeric.T(s(n,e,t))},numeric.T.prototype.setBlock=function(e,t,n){n instanceof numeric.T||(n=new numeric.T(n));var i=this.x,s=this.y,a=numeric.setBlock,o=n.x,c=n.y;if(c)return s||(this.y=numeric.rep(numeric.dim(this),0),s=this.y),a(i,e,t,o),a(s,e,t,c),this;a(i,e,t,o),s&&a(s,e,t,numeric.rep(numeric.dim(o),0))},numeric.T.rep=function(e,t){var n=numeric.T;t instanceof n||(t=new n(t));var i=t.x,s=t.y,a=numeric.rep;return s?new n(a(e,i),a(e,s)):new n(a(e,i))},numeric.T.diag=function(e){e instanceof numeric.T||(e=new numeric.T(e));var t=e.x,n=e.y,i=numeric.diag;return n?new numeric.T(i(t),i(n)):new numeric.T(i(t))},numeric.T.eig=function(){if(this.y)throw new Error("eig: not implemented for complex matrices.");return numeric.eig(this.x)},numeric.T.identity=function(e){return new numeric.T(numeric.identity(e))},numeric.T.prototype.getDiag=function(){var e=numeric,t=this.x,n=this.y;return n?new e.T(e.getDiag(t),e.getDiag(n)):new e.T(e.getDiag(t))},numeric.house=function(e){var t=numeric.clone(e),n=e[0]>=0?1:-1,i=n*numeric.norm2(e);t[0]+=i;var s=numeric.norm2(t);if(s===0)throw new Error("eig: internal error");return numeric.div(t,s)},numeric.toUpperHessenberg=function(e){var t=numeric.dim(e);if(t.length!==2||t[0]!==t[1])throw new Error("numeric: toUpperHessenberg() only works on square matrices");var n=t[0],i,s,a,o,c,l=numeric.clone(e),u,h,d,f,p=numeric.identity(n),_;for(s=0;s<n-2;s++){for(o=Array(n-s-1),i=s+1;i<n;i++)o[i-s-1]=l[i][s];if(numeric.norm2(o)>0){for(c=numeric.house(o),u=numeric.getBlock(l,[s+1,s],[n-1,n-1]),h=numeric.tensor(c,numeric.dot(c,u)),i=s+1;i<n;i++)for(d=l[i],f=h[i-s-1],a=s;a<n;a++)d[a]-=2*f[a-s];for(u=numeric.getBlock(l,[0,s+1],[n-1,n-1]),h=numeric.tensor(numeric.dot(u,c),c),i=0;i<n;i++)for(d=l[i],f=h[i],a=s+1;a<n;a++)d[a]-=2*f[a-s-1];for(u=Array(n-s-1),i=s+1;i<n;i++)u[i-s-1]=p[i];for(h=numeric.tensor(c,numeric.dot(c,u)),i=s+1;i<n;i++)for(_=p[i],f=h[i-s-1],a=0;a<n;a++)_[a]-=2*f[a]}}return{H:l,Q:p}},numeric.epsilon=2220446049250313e-31,numeric.QRFrancis=function(r,e){typeof e>"u"&&(e=1e4),r=numeric.clone(r),numeric.clone(r);var t=numeric.dim(r),n=t[0],i,s,a,o,c,l,u,h,d,f=numeric.identity(n),p,_,g,v,F,y,x,b,L;if(n<3)return{Q:f,B:[[0,n-1]]};var G=numeric.epsilon;for(L=0;L<e;L++){for(x=0;x<n-1;x++)if(Math.abs(r[x+1][x])<G*(Math.abs(r[x][x])+Math.abs(r[x+1][x+1]))){var M=numeric.QRFrancis(numeric.getBlock(r,[0,0],[x,x]),e),S=numeric.QRFrancis(numeric.getBlock(r,[x+1,x+1],[n-1,n-1]),e);for(g=Array(x+1),y=0;y<=x;y++)g[y]=f[y];for(v=numeric.dot(M.Q,g),y=0;y<=x;y++)f[y]=v[y];for(g=Array(n-x-1),y=x+1;y<n;y++)g[y-x-1]=f[y];for(v=numeric.dot(S.Q,g),y=x+1;y<n;y++)f[y]=v[y-x-1];return{Q:f,B:M.B.concat(numeric.add(S.B,x+1))}}if(a=r[n-2][n-2],o=r[n-2][n-1],c=r[n-1][n-2],l=r[n-1][n-1],h=a+l,u=a*l-o*c,d=numeric.getBlock(r,[0,0],[2,2]),h*h>=4*u){var E,I;E=.5*(h+Math.sqrt(h*h-4*u)),I=.5*(h-Math.sqrt(h*h-4*u)),d=numeric.add(numeric.sub(numeric.dot(d,d),numeric.mul(d,E+I)),numeric.diag(numeric.rep([3],E*I)))}else d=numeric.add(numeric.sub(numeric.dot(d,d),numeric.mul(d,h)),numeric.diag(numeric.rep([3],u)));for(i=[d[0][0],d[1][0],d[2][0]],s=numeric.house(i),g=[r[0],r[1],r[2]],v=numeric.tensor(s,numeric.dot(s,g)),y=0;y<3;y++)for(_=r[y],F=v[y],b=0;b<n;b++)_[b]-=2*F[b];for(g=numeric.getBlock(r,[0,0],[n-1,2]),v=numeric.tensor(numeric.dot(g,s),s),y=0;y<n;y++)for(_=r[y],F=v[y],b=0;b<3;b++)_[b]-=2*F[b];for(g=[f[0],f[1],f[2]],v=numeric.tensor(s,numeric.dot(s,g)),y=0;y<3;y++)for(p=f[y],F=v[y],b=0;b<n;b++)p[b]-=2*F[b];var q;for(x=0;x<n-2;x++){for(b=x;b<=x+1;b++)if(Math.abs(r[b+1][b])<G*(Math.abs(r[b][b])+Math.abs(r[b+1][b+1]))){var M=numeric.QRFrancis(numeric.getBlock(r,[0,0],[b,b]),e),S=numeric.QRFrancis(numeric.getBlock(r,[b+1,b+1],[n-1,n-1]),e);for(g=Array(b+1),y=0;y<=b;y++)g[y]=f[y];for(v=numeric.dot(M.Q,g),y=0;y<=b;y++)f[y]=v[y];for(g=Array(n-b-1),y=b+1;y<n;y++)g[y-b-1]=f[y];for(v=numeric.dot(S.Q,g),y=b+1;y<n;y++)f[y]=v[y-b-1];return{Q:f,B:M.B.concat(numeric.add(S.B,b+1))}}for(q=Math.min(n-1,x+3),i=Array(q-x),y=x+1;y<=q;y++)i[y-x-1]=r[y][x];for(s=numeric.house(i),g=numeric.getBlock(r,[x+1,x],[q,n-1]),v=numeric.tensor(s,numeric.dot(s,g)),y=x+1;y<=q;y++)for(_=r[y],F=v[y-x-1],b=x;b<n;b++)_[b]-=2*F[b-x];for(g=numeric.getBlock(r,[0,x+1],[n-1,q]),v=numeric.tensor(numeric.dot(g,s),s),y=0;y<n;y++)for(_=r[y],F=v[y],b=x+1;b<=q;b++)_[b]-=2*F[b-x-1];for(g=Array(q-x),y=x+1;y<=q;y++)g[y-x-1]=f[y];for(v=numeric.tensor(s,numeric.dot(s,g)),y=x+1;y<=q;y++)for(p=f[y],F=v[y-x-1],b=0;b<n;b++)p[b]-=2*F[b]}}throw new Error("numeric: eigenvalue iteration does not converge -- increase maxiter?")},numeric.eig=function(e,t){var n=numeric.toUpperHessenberg(e),i=numeric.QRFrancis(n.H,t),s=numeric.T,Y=e.length,a,o,c=i.B,l=numeric.dot(i.Q,numeric.dot(n.H,numeric.transpose(i.Q))),u=new s(numeric.dot(i.Q,n.Q)),h,d=c.length,f,p,_,g,v,F,y,x,b,L,G,M,S,E,I=Math.sqrt;for(o=0;o<d;o++)if(a=c[o][0],a!==c[o][1]){if(f=a+1,p=l[a][a],_=l[a][f],g=l[f][a],v=l[f][f],_===0&&g===0)continue;F=-p-v,y=p*v-_*g,x=F*F-4*y,x>=0?(F<0?b=-.5*(F-I(x)):b=-.5*(F+I(x)),S=(p-b)*(p-b)+_*_,E=g*g+(v-b)*(v-b),S>E?(S=I(S),G=(p-b)/S,M=_/S):(E=I(E),G=g/E,M=(v-b)/E),h=new s([[M,-G],[G,M]]),u.setRows(a,f,h.dot(u.getRows(a,f)))):(b=-.5*F,L=.5*I(-x),S=(p-b)*(p-b)+_*_,E=g*g+(v-b)*(v-b),S>E?(S=I(S+L*L),G=(p-b)/S,M=_/S,b=0,L/=S):(E=I(E+L*L),G=g/E,M=(v-b)/E,b=L/E,L=0),h=new s([[M,-G],[G,M]],[[b,L],[L,-b]]),u.setRows(a,f,h.dot(u.getRows(a,f))))}var q=u.dot(e).dot(u.transjugate()),Y=e.length,J=numeric.T.identity(Y);for(f=0;f<Y;f++)if(f>0)for(o=f-1;o>=0;o--){var de=q.get([o,o]),fe=q.get([f,f]);if(numeric.neq(de.x,fe.x)||numeric.neq(de.y,fe.y))b=q.getRow(o).getBlock([o],[f-1]),L=J.getRow(f).getBlock([o],[f-1]),J.set([f,o],q.get([o,f]).neg().sub(b.dot(L)).div(de.sub(fe)));else{J.setRow(f,J.getRow(o));continue}}for(f=0;f<Y;f++)b=J.getRow(f),J.setRow(f,b.div(b.norm2()));return J=J.transpose(),J=u.transjugate().dot(J),{lambda:q.getDiag(),E:J}},numeric.ccsSparse=function(e){var t=e.length,o,n,i,s,a=[];for(i=t-1;i!==-1;--i){n=e[i];for(s in n){for(s=parseInt(s);s>=a.length;)a[a.length]=0;n[s]!==0&&a[s]++}}var o=a.length,c=Array(o+1);for(c[0]=0,i=0;i<o;++i)c[i+1]=c[i]+a[i];var l=Array(c[o]),u=Array(c[o]);for(i=t-1;i!==-1;--i){n=e[i];for(s in n)n[s]!==0&&(a[s]--,l[c[s]+a[s]]=i,u[c[s]+a[s]]=n[s])}return[c,l,u]},numeric.ccsFull=function(e){var t=e[0],n=e[1],i=e[2],s=numeric.ccsDim(e),a=s[0],o=s[1],c,l,u,h,d=numeric.rep([a,o],0);for(c=0;c<o;c++)for(u=t[c],h=t[c+1],l=u;l<h;++l)d[n[l]][c]=i[l];return d},numeric.ccsTSolve=function(e,t,n,i,s){var a=e[0],o=e[1],c=e[2],l=a.length-1,u=Math.max,h=0;typeof i>"u"&&(n=numeric.rep([l],0)),typeof i>"u"&&(i=numeric.linspace(0,n.length-1)),typeof s>"u"&&(s=[]);function d(x){var b;if(n[x]===0){for(n[x]=1,b=a[x];b<a[x+1];++b)d(o[b]);s[h]=x,++h}}var f,p,_,g,v,F,y;for(f=i.length-1;f!==-1;--f)d(i[f]);for(s.length=h,f=s.length-1;f!==-1;--f)n[s[f]]=0;for(f=i.length-1;f!==-1;--f)p=i[f],n[p]=t[p];for(f=s.length-1;f!==-1;--f){for(p=s[f],_=a[p],g=u(a[p+1],_),v=_;v!==g;++v)if(o[v]===p){n[p]/=c[v];break}for(y=n[p],v=_;v!==g;++v)F=o[v],F!==p&&(n[F]-=y*c[v])}return n},numeric.ccsDFS=function(e){this.k=Array(e),this.k1=Array(e),this.j=Array(e)},numeric.ccsDFS.prototype.dfs=function(e,t,n,i,s,a){var o=0,c,l=s.length,u=this.k,h=this.k1,d=this.j,f,p;if(i[e]===0)for(i[e]=1,d[0]=e,u[0]=f=t[e],h[0]=p=t[e+1];;)if(f>=p){if(s[l]=d[o],o===0)return;++l,--o,f=u[o],p=h[o]}else c=a[n[f]],i[c]===0?(i[c]=1,u[o]=f,++o,d[o]=c,f=t[c],h[o]=p=t[c+1]):++f},numeric.ccsLPSolve=function(e,t,n,i,s,a,o){var c=e[0],l=e[1],u=e[2];c.length-1;var h=t[0],d=t[1],f=t[2],p,_,g,v,F,y,x,b,L;for(_=h[s],g=h[s+1],i.length=0,p=_;p<g;++p)o.dfs(a[d[p]],c,l,n,i,a);for(p=i.length-1;p!==-1;--p)n[i[p]]=0;for(p=_;p!==g;++p)v=a[d[p]],n[v]=f[p];for(p=i.length-1;p!==-1;--p){for(v=i[p],F=c[v],y=c[v+1],x=F;x<y;++x)if(a[l[x]]===v){n[v]/=u[x];break}for(L=n[v],x=F;x<y;++x)b=a[l[x]],b!==v&&(n[b]-=L*u[x])}return n},numeric.ccsLUP1=function(e,t){var n=e[0].length-1,i=[numeric.rep([n+1],0),[],[]],s=[numeric.rep([n+1],0),[],[]],a=i[0],o=i[1],c=i[2],l=s[0],u=s[1],h=s[2],d=numeric.rep([n],0),f=numeric.rep([n],0),p,_,g,v,F,y,x,b=numeric.ccsLPSolve,L=Math.abs,G=numeric.linspace(0,n-1),M=numeric.linspace(0,n-1),S=new numeric.ccsDFS(n);for(typeof t>"u"&&(t=1),p=0;p<n;++p){for(b(i,e,d,f,p,M,S),v=-1,F=-1,_=f.length-1;_!==-1;--_)g=f[_],!(g<=p)&&(y=L(d[g]),y>v&&(F=g,v=y));for(L(d[p])<t*v&&(_=G[p],v=G[F],G[p]=v,M[v]=p,G[F]=_,M[_]=F,v=d[p],d[p]=d[F],d[F]=v),v=a[p],F=l[p],x=d[p],o[v]=G[p],c[v]=1,++v,_=f.length-1;_!==-1;--_)g=f[_],y=d[g],f[_]=0,d[g]=0,g<=p?(u[F]=g,h[F]=y,++F):(o[v]=G[g],c[v]=y/x,++v);a[p+1]=v,l[p+1]=F}for(_=o.length-1;_!==-1;--_)o[_]=M[o[_]];return{L:i,U:s,P:G,Pinv:M}},numeric.ccsDFS0=function(e){this.k=Array(e),this.k1=Array(e),this.j=Array(e)},numeric.ccsDFS0.prototype.dfs=function(e,t,n,i,s,a,o){var c=0,l,u=s.length,h=this.k,d=this.k1,f=this.j,p,_;if(i[e]===0)for(i[e]=1,f[0]=e,h[0]=p=t[a[e]],d[0]=_=t[a[e]+1];;){if(isNaN(p))throw new Error("Ow!");if(p>=_){if(s[u]=a[f[c]],c===0)return;++u,--c,p=h[c],_=d[c]}else l=n[p],i[l]===0?(i[l]=1,h[c]=p,++c,f[c]=l,l=a[l],p=t[l],d[c]=_=t[l+1]):++p}},numeric.ccsLPSolve0=function(e,t,n,i,s,a,o,c){var l=e[0],u=e[1],h=e[2];l.length-1;var d=t[0],f=t[1],p=t[2],_,g,v,F,y,x,b,L,G;for(g=d[s],v=d[s+1],i.length=0,_=g;_<v;++_)c.dfs(f[_],l,u,n,i,a,o);for(_=i.length-1;_!==-1;--_)F=i[_],n[o[F]]=0;for(_=g;_!==v;++_)F=f[_],n[F]=p[_];for(_=i.length-1;_!==-1;--_){for(F=i[_],L=o[F],y=l[F],x=l[F+1],b=y;b<x;++b)if(u[b]===L){n[L]/=h[b];break}for(G=n[L],b=y;b<x;++b)n[u[b]]-=G*h[b];n[L]=G}},numeric.ccsLUP0=function(e,t){var n=e[0].length-1,i=[numeric.rep([n+1],0),[],[]],s=[numeric.rep([n+1],0),[],[]],a=i[0],o=i[1],c=i[2],l=s[0],u=s[1],h=s[2],d=numeric.rep([n],0),f=numeric.rep([n],0),p,_,g,v,F,y,x,b=numeric.ccsLPSolve0,L=Math.abs,G=numeric.linspace(0,n-1),M=numeric.linspace(0,n-1),S=new numeric.ccsDFS0(n);for(typeof t>"u"&&(t=1),p=0;p<n;++p){for(b(i,e,d,f,p,M,G,S),v=-1,F=-1,_=f.length-1;_!==-1;--_)g=f[_],!(g<=p)&&(y=L(d[G[g]]),y>v&&(F=g,v=y));for(L(d[G[p]])<t*v&&(_=G[p],v=G[F],G[p]=v,M[v]=p,G[F]=_,M[_]=F),v=a[p],F=l[p],x=d[G[p]],o[v]=G[p],c[v]=1,++v,_=f.length-1;_!==-1;--_)g=f[_],y=d[G[g]],f[_]=0,d[G[g]]=0,g<=p?(u[F]=g,h[F]=y,++F):(o[v]=G[g],c[v]=y/x,++v);a[p+1]=v,l[p+1]=F}for(_=o.length-1;_!==-1;--_)o[_]=M[o[_]];return{L:i,U:s,P:G,Pinv:M}},numeric.ccsLUP=numeric.ccsLUP0,numeric.ccsDim=function(e){return[numeric.sup(e[1])+1,e[0].length-1]},numeric.ccsGetBlock=function(e,t,n){var i=numeric.ccsDim(e),s=i[0],a=i[1];typeof t>"u"?t=numeric.linspace(0,s-1):typeof t=="number"&&(t=[t]),typeof n>"u"?n=numeric.linspace(0,a-1):typeof n=="number"&&(n=[n]);var o,c=t.length,l,u=n.length,h,d,f,p=numeric.rep([a],0),_=[],g=[],v=[p,_,g],F=e[0],y=e[1],x=e[2],b=numeric.rep([s],0),L=0,G=numeric.rep([s],0);for(l=0;l<u;++l){d=n[l];var M=F[d],S=F[d+1];for(o=M;o<S;++o)h=y[o],G[h]=1,b[h]=x[o];for(o=0;o<c;++o)f=t[o],G[f]&&(_[L]=o,g[L]=b[t[o]],++L);for(o=M;o<S;++o)h=y[o],G[h]=0;p[l+1]=L}return v},numeric.ccsDot=function(e,t){var n=e[0],i=e[1],s=e[2],a=t[0],o=t[1],c=t[2],l=numeric.ccsDim(e),u=numeric.ccsDim(t),h=l[0];l[1];var d=u[1],f=numeric.rep([h],0),p=numeric.rep([h],0),_=Array(h),g=numeric.rep([d],0),v=[],F=[],y=[g,v,F],x,b,L,G,M,S,E,I,q,Y,J;for(L=0;L!==d;++L){for(G=a[L],M=a[L+1],q=0,b=G;b<M;++b)for(Y=o[b],J=c[b],S=n[Y],E=n[Y+1],x=S;x<E;++x)I=i[x],p[I]===0&&(_[q]=I,p[I]=1,q=q+1),f[I]=f[I]+s[x]*J;for(G=g[L],M=G+q,g[L+1]=M,b=q-1;b!==-1;--b)J=G+b,x=_[b],v[J]=x,F[J]=f[x],p[x]=0,f[x]=0;g[L+1]=g[L]+q}return y},numeric.ccsLUPSolve=function(e,t){var n=e.L,i=e.U;e.P;var s=t[0],a=!1;typeof s!="object"&&(t=[[0,t.length],numeric.linspace(0,t.length-1),t],s=t[0],a=!0);var o=t[1],c=t[2],l=n[0].length-1,u=s.length-1,h=numeric.rep([l],0),d=Array(l),f=numeric.rep([l],0),p=Array(l),_=numeric.rep([u+1],0),g=[],v=[],F=numeric.ccsTSolve,y,x,b,L,G,M,S=0;for(y=0;y<u;++y){for(G=0,b=s[y],L=s[y+1],x=b;x<L;++x)M=e.Pinv[o[x]],p[G]=M,f[M]=c[x],++G;for(p.length=G,F(n,f,h,p,d),x=p.length-1;x!==-1;--x)f[p[x]]=0;if(F(i,h,f,d,p),a)return f;for(x=d.length-1;x!==-1;--x)h[d[x]]=0;for(x=p.length-1;x!==-1;--x)M=p[x],g[S]=M,v[S]=f[M],f[M]=0,++S;_[y+1]=S}return[_,g,v]},numeric.ccsbinop=function(e,t){return typeof t>"u"&&(t=""),Function("X","Y",`var Xi = X[0], Xj = X[1], Xv = X[2];
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
`)}(),numeric.ccsScatter=function r(e){var t=e[0],n=e[1],i=e[2],s=numeric.sup(n)+1,a=t.length,o=numeric.rep([s],0),c=Array(a),l=Array(a),u=numeric.rep([s],0),h;for(h=0;h<a;++h)u[n[h]]++;for(h=0;h<s;++h)o[h+1]=o[h]+u[h];var d=o.slice(0),f,p;for(h=0;h<a;++h)p=n[h],f=d[p],c[f]=t[h],l[f]=i[h],d[p]=d[p]+1;return[o,c,l]},numeric.ccsGather=function r(e){var t=e[0],n=e[1],i=e[2],s=t.length-1,a=n.length,o=Array(a),c=Array(a),l=Array(a),u,h,d,f,p;for(p=0,u=0;u<s;++u)for(d=t[u],f=t[u+1],h=d;h!==f;++h)c[p]=u,o[p]=n[h],l[p]=i[h],++p;return[o,c,l]},numeric.sdim=function r(e,t,n){if(typeof t>"u"&&(t=[]),typeof e!="object")return t;typeof n>"u"&&(n=0),n in t||(t[n]=0),e.length>t[n]&&(t[n]=e.length);var i;for(i in e)e.hasOwnProperty(i)&&r(e[i],t,n+1);return t},numeric.sclone=function r(e,t,n){typeof t>"u"&&(t=0),typeof n>"u"&&(n=numeric.sdim(e).length);var i,s=Array(e.length);if(t===n-1){for(i in e)e.hasOwnProperty(i)&&(s[i]=e[i]);return s}for(i in e)e.hasOwnProperty(i)&&(s[i]=r(e[i],t+1,n));return s},numeric.sdiag=function r(e){var t=e.length,n,i=Array(t),s;for(n=t-1;n>=1;n-=2)s=n-1,i[n]=[],i[n][n]=e[n],i[s]=[],i[s][s]=e[s];return n===0&&(i[0]=[],i[0][0]=e[n]),i},numeric.sidentity=function r(e){return numeric.sdiag(numeric.rep([e],1))},numeric.stranspose=function r(e){var t=[];e.length;var n,i,s;for(n in e)if(e.hasOwnProperty(n)){s=e[n];for(i in s)s.hasOwnProperty(i)&&(typeof t[i]!="object"&&(t[i]=[]),t[i][n]=s[i])}return t},numeric.sLUP=function r(e,t){throw new Error("The function numeric.sLUP had a bug in it and has been removed. Please use the new numeric.ccsLUP function instead.")},numeric.sdotMM=function r(e,t){var n=e.length;t.length;var i=numeric.stranspose(t),s=i.length,a,o,c,l,u,h,d=Array(n),f;for(c=n-1;c>=0;c--){for(f=[],a=e[c],u=s-1;u>=0;u--){h=0,o=i[u];for(l in a)a.hasOwnProperty(l)&&l in o&&(h+=a[l]*o[l]);h&&(f[u]=h)}d[c]=f}return d},numeric.sdotMV=function r(e,t){var n=e.length,i,s,a,o=Array(n),c;for(s=n-1;s>=0;s--){i=e[s],c=0;for(a in i)i.hasOwnProperty(a)&&t[a]&&(c+=i[a]*t[a]);c&&(o[s]=c)}return o},numeric.sdotVM=function r(e,t){var n,i,s,a,o=[];for(n in e)if(e.hasOwnProperty(n)){s=t[n],a=e[n];for(i in s)s.hasOwnProperty(i)&&(o[i]||(o[i]=0),o[i]+=a*s[i])}return o},numeric.sdotVV=function r(e,t){var n,i=0;for(n in e)e[n]&&t[n]&&(i+=e[n]*t[n]);return i},numeric.sdot=function r(e,t){var n=numeric.sdim(e).length,i=numeric.sdim(t).length,s=n*1e3+i;switch(s){case 0:return e*t;case 1001:return numeric.sdotVV(e,t);case 2001:return numeric.sdotMV(e,t);case 1002:return numeric.sdotVM(e,t);case 2002:return numeric.sdotMM(e,t);default:throw new Error("numeric.sdot not implemented for tensors of order "+n+" and "+i)}},numeric.sscatter=function r(e){var t=e[0].length,n,i,s,a=e.length,o=[],c;for(i=t-1;i>=0;--i)if(e[a-1][i]){for(c=o,s=0;s<a-2;s++)n=e[s][i],c[n]||(c[n]=[]),c=c[n];c[e[s][i]]=e[s+1][i]}return o},numeric.sgather=function r(e,t,n){typeof t>"u"&&(t=[]),typeof n>"u"&&(n=[]);var i,s,a;i=n.length;for(s in e)if(e.hasOwnProperty(s))if(n[i]=parseInt(s),a=e[s],typeof a=="number"){if(a){if(t.length===0)for(s=i+1;s>=0;--s)t[s]=[];for(s=i;s>=0;--s)t[s].push(n[s]);t[i+1].push(a)}}else r(a,t,n);return n.length>i&&n.pop(),t},numeric.cLU=function r(e){var t=e[0],n=e[1],i=e[2],S=t.length,s=0,a,o,c,l,u,h;for(a=0;a<S;a++)t[a]>s&&(s=t[a]);s++;var d=Array(s),f=Array(s),p=numeric.rep([s],1/0),_=numeric.rep([s],-1/0),y,x,g;for(c=0;c<S;c++)a=t[c],o=n[c],o<p[a]&&(p[a]=o),o>_[a]&&(_[a]=o);for(a=0;a<s-1;a++)_[a]>_[a+1]&&(_[a+1]=_[a]);for(a=s-1;a>=1;a--)p[a]<p[a-1]&&(p[a-1]=p[a]);var v=0,F=0;for(a=0;a<s;a++)f[a]=numeric.rep([_[a]-p[a]+1],0),d[a]=numeric.rep([a-p[a]],0),v+=a-p[a]+1,F+=_[a]-a+1;for(c=0;c<S;c++)a=t[c],f[a][n[c]-p[a]]=i[c];for(a=0;a<s-1;a++)for(l=a-p[a],y=f[a],o=a+1;p[o]<=a&&o<s;o++)if(u=a-p[o],h=_[a]-a,x=f[o],g=x[u]/y[l],g){for(c=1;c<=h;c++)x[c+u]-=g*y[c+l];d[o][a-p[o]]=g}var y=[],x=[],b=[],L=[],G=[],M=[],S,E,I;for(S=0,E=0,a=0;a<s;a++){for(l=p[a],u=_[a],I=f[a],o=a;o<=u;o++)I[o-l]&&(y[S]=a,x[S]=o,b[S]=I[o-l],S++);for(I=d[a],o=l;o<a;o++)I[o-l]&&(L[E]=a,G[E]=o,M[E]=I[o-l],E++);L[E]=a,G[E]=a,M[E]=1,E++}return{U:[y,x,b],L:[L,G,M]}},numeric.cLUsolve=function r(e,t){var n=e.L,i=e.U,s=numeric.clone(t),a=n[0],o=n[1],c=n[2],l=i[0],u=i[1],h=i[2],d=l.length;a.length;var f=s.length,p,_;for(_=0,p=0;p<f;p++){for(;o[_]<p;)s[p]-=c[_]*s[o[_]],_++;_++}for(_=d-1,p=f-1;p>=0;p--){for(;u[_]>p;)s[p]-=h[_]*s[u[_]],_--;s[p]/=h[_],_--}return s},numeric.cgrid=function r(e,t){typeof e=="number"&&(e=[e,e]);var n=numeric.rep(e,-1),i,s,a;if(typeof t!="function")switch(t){case"L":t=function(o,c){return o>=e[0]/2||c<e[1]/2};break;default:t=function(o,c){return!0};break}for(a=0,i=1;i<e[0]-1;i++)for(s=1;s<e[1]-1;s++)t(i,s)&&(n[i][s]=a,a++);return n},numeric.cdelsq=function r(e){var t=[[-1,0],[0,-1],[0,1],[1,0]],n=numeric.dim(e),i=n[0],s=n[1],a,o,c,l,u,h=[],d=[],f=[];for(a=1;a<i-1;a++)for(o=1;o<s-1;o++)if(!(e[a][o]<0)){for(c=0;c<4;c++)l=a+t[c][0],u=o+t[c][1],!(e[l][u]<0)&&(h.push(e[a][o]),d.push(e[l][u]),f.push(-1));h.push(e[a][o]),d.push(e[a][o]),f.push(4)}return[h,d,f]},numeric.cdotMV=function r(e,t){var n,i=e[0],s=e[1],a=e[2],o,c=i.length,l;for(l=0,o=0;o<c;o++)i[o]>l&&(l=i[o]);for(l++,n=numeric.rep([l],0),o=0;o<c;o++)n[i[o]]+=a[o]*t[s[o]];return n},numeric.Spline=function r(e,t,n,i,s){this.x=e,this.yl=t,this.yr=n,this.kl=i,this.kr=s},numeric.Spline.prototype._at=function r(c,t){var n=this.x,i=this.yl,s=this.yr,a=this.kl,o=this.kr,c,l,u,h,d=numeric.add,f=numeric.sub,p=numeric.mul;l=f(p(a[t],n[t+1]-n[t]),f(s[t+1],i[t])),u=d(p(o[t+1],n[t]-n[t+1]),f(s[t+1],i[t])),h=(c-n[t])/(n[t+1]-n[t]);var _=h*(1-h);return d(d(d(p(1-h,i[t]),p(h,s[t+1])),p(l,_*(1-h))),p(u,_*h))},numeric.Spline.prototype.at=function r(e){if(typeof e=="number"){var t=this.x,o=t.length,n,i,s,a=Math.floor;for(n=0,i=o-1;i-n>1;)s=a((n+i)/2),t[s]<=e?n=s:i=s;return this._at(e,n)}var o=e.length,c,l=Array(o);for(c=o-1;c!==-1;--c)l[c]=this.at(e[c]);return l},numeric.Spline.prototype.diff=function r(){var e=this.x,t=this.yl,n=this.yr,i=this.kl,s=this.kr,a=t.length,o,c,l,u=i,h=s,d=Array(a),f=Array(a),p=numeric.add,_=numeric.mul,g=numeric.div,v=numeric.sub;for(o=a-1;o!==-1;--o)c=e[o+1]-e[o],l=v(n[o+1],t[o]),d[o]=g(p(_(l,6),_(i[o],-4*c),_(s[o+1],-2*c)),c*c),f[o+1]=g(p(_(l,-6),_(i[o],2*c),_(s[o+1],4*c)),c*c);return new numeric.Spline(e,u,h,d,f)},numeric.Spline.prototype.roots=function r(){function e(O){return O*O}var g=[],t=this.x,n=this.yl,i=this.yr,s=this.kl,a=this.kr;typeof n[0]=="number"&&(n=[n],i=[i],s=[s],a=[a]);var o=n.length,c=t.length-1,l,u,h,d,f,p,_,g=Array(o),v,F,y,x,b,L,G,M,S,E,I,q,Y,J,de,fe,pe=Math.sqrt;for(l=0;l!==o;++l){for(d=n[l],f=i[l],p=s[l],_=a[l],v=[],u=0;u!==c;u++){for(u>0&&f[u]*d[u]<0&&v.push(t[u]),S=t[u+1]-t[u],t[u],x=d[u],b=f[u+1],F=p[u]/S,y=_[u+1]/S,M=e(F-y+3*(x-b))+12*y*x,L=y+3*x+2*F-3*b,G=3*(y+F+2*(x-b)),M<=0?(I=L/G,I>t[u]&&I<t[u+1]?E=[t[u],I,t[u+1]]:E=[t[u],t[u+1]]):(I=(L-pe(M))/G,q=(L+pe(M))/G,E=[t[u]],I>t[u]&&I<t[u+1]&&E.push(I),q>t[u]&&q<t[u+1]&&E.push(q),E.push(t[u+1])),J=E[0],I=this._at(J,u),h=0;h<E.length-1;h++){if(de=E[h+1],q=this._at(de,u),I===0){v.push(J),J=de,I=q;continue}if(q===0||I*q>0){J=de,I=q;continue}for(var X=0;fe=(I*de-q*J)/(I-q),!(fe<=J||fe>=de);)if(Y=this._at(fe,u),Y*q>0)de=fe,q=Y,X===-1&&(I*=.5),X=-1;else if(Y*I>0)J=fe,I=Y,X===1&&(q*=.5),X=1;else break;v.push(fe),J=E[h+1],I=this._at(J,u)}q===0&&v.push(de)}g[l]=v}return typeof this.yl[0]=="number"?g[0]:g},numeric.spline=function r(e,t,n,i){var s=e.length,a=[],o=[],c=[],l,u=numeric.sub,h=numeric.mul,d=numeric.add;for(l=s-2;l>=0;l--)o[l]=e[l+1]-e[l],c[l]=u(t[l+1],t[l]);(typeof n=="string"||typeof i=="string")&&(n=i="periodic");var f=[[],[],[]];switch(typeof n){case"undefined":a[0]=h(3/(o[0]*o[0]),c[0]),f[0].push(0,0),f[1].push(0,1),f[2].push(2/o[0],1/o[0]);break;case"string":a[0]=d(h(3/(o[s-2]*o[s-2]),c[s-2]),h(3/(o[0]*o[0]),c[0])),f[0].push(0,0,0),f[1].push(s-2,0,1),f[2].push(1/o[s-2],2/o[s-2]+2/o[0],1/o[0]);break;default:a[0]=n,f[0].push(0),f[1].push(0),f[2].push(1);break}for(l=1;l<s-1;l++)a[l]=d(h(3/(o[l-1]*o[l-1]),c[l-1]),h(3/(o[l]*o[l]),c[l])),f[0].push(l,l,l),f[1].push(l-1,l,l+1),f[2].push(1/o[l-1],2/o[l-1]+2/o[l],1/o[l]);switch(typeof i){case"undefined":a[s-1]=h(3/(o[s-2]*o[s-2]),c[s-2]),f[0].push(s-1,s-1),f[1].push(s-2,s-1),f[2].push(1/o[s-2],2/o[s-2]);break;case"string":f[1][f[1].length-1]=0;break;default:a[s-1]=i,f[0].push(s-1),f[1].push(s-1),f[2].push(1);break}typeof a[0]!="number"?a=numeric.transpose(a):a=[a];var p=Array(a.length);if(typeof n=="string")for(l=p.length-1;l!==-1;--l)p[l]=numeric.ccsLUPSolve(numeric.ccsLUP(numeric.ccsScatter(f)),a[l]),p[l][s-1]=p[l][0];else for(l=p.length-1;l!==-1;--l)p[l]=numeric.cLUsolve(numeric.cLU(f),a[l]);return typeof t[0]=="number"?p=p[0]:p=numeric.transpose(p),new numeric.Spline(e,t,t,p,p)},numeric.fftpow2=function r(e,t){var n=e.length;if(n!==1){var i=Math.cos,s=Math.sin,a,o,c=Array(n/2),l=Array(n/2),u=Array(n/2),h=Array(n/2);for(o=n/2,a=n-1;a!==-1;--a)--o,u[o]=e[a],h[o]=t[a],--a,c[o]=e[a],l[o]=t[a];r(c,l),r(u,h),o=n/2;var d,f=-6.283185307179586/n,p,_;for(a=n-1;a!==-1;--a)--o,o===-1&&(o=n/2-1),d=f*a,p=i(d),_=s(d),e[a]=c[o]+p*u[o]-_*h[o],t[a]=l[o]+p*h[o]+_*u[o]}},numeric._ifftpow2=function r(e,t){var n=e.length;if(n!==1){var i=Math.cos,s=Math.sin,a,o,c=Array(n/2),l=Array(n/2),u=Array(n/2),h=Array(n/2);for(o=n/2,a=n-1;a!==-1;--a)--o,u[o]=e[a],h[o]=t[a],--a,c[o]=e[a],l[o]=t[a];r(c,l),r(u,h),o=n/2;var d,f=6.283185307179586/n,p,_;for(a=n-1;a!==-1;--a)--o,o===-1&&(o=n/2-1),d=f*a,p=i(d),_=s(d),e[a]=c[o]+p*u[o]-_*h[o],t[a]=l[o]+p*h[o]+_*u[o]}},numeric.ifftpow2=function r(e,t){numeric._ifftpow2(e,t),numeric.diveq(e,e.length),numeric.diveq(t,t.length)},numeric.convpow2=function r(e,t,n,i){numeric.fftpow2(e,t),numeric.fftpow2(n,i);var s,a=e.length,o,c,l,u;for(s=a-1;s!==-1;--s)o=e[s],l=t[s],c=n[s],u=i[s],e[s]=o*c-l*u,t[s]=o*u+l*c;numeric.ifftpow2(e,t)},numeric.T.prototype.fft=function r(){var e=this.x,t=this.y,n=e.length,i=Math.log,s=i(2),a=Math.ceil(i(2*n-1)/s),o=Math.pow(2,a),c=numeric.rep([o],0),l=numeric.rep([o],0),u=Math.cos,h=Math.sin,d,f=-3.141592653589793/n,p,_=numeric.rep([o],0),g=numeric.rep([o],0);for(d=0;d<n;d++)_[d]=e[d];if(typeof t<"u")for(d=0;d<n;d++)g[d]=t[d];for(c[0]=1,d=1;d<=o/2;d++)p=f*d*d,c[d]=u(p),l[d]=h(p),c[o-d]=u(p),l[o-d]=h(p);var v=new numeric.T(_,g),F=new numeric.T(c,l);return v=v.mul(F),numeric.convpow2(v.x,v.y,numeric.clone(F.x),numeric.neg(F.y)),v=v.mul(F),v.x.length=n,v.y.length=n,v},numeric.T.prototype.ifft=function r(){var e=this.x,t=this.y,n=e.length,i=Math.log,s=i(2),a=Math.ceil(i(2*n-1)/s),o=Math.pow(2,a),c=numeric.rep([o],0),l=numeric.rep([o],0),u=Math.cos,h=Math.sin,d,f=3.141592653589793/n,p,_=numeric.rep([o],0),g=numeric.rep([o],0);for(d=0;d<n;d++)_[d]=e[d];if(typeof t<"u")for(d=0;d<n;d++)g[d]=t[d];for(c[0]=1,d=1;d<=o/2;d++)p=f*d*d,c[d]=u(p),l[d]=h(p),c[o-d]=u(p),l[o-d]=h(p);var v=new numeric.T(_,g),F=new numeric.T(c,l);return v=v.mul(F),numeric.convpow2(v.x,v.y,numeric.clone(F.x),numeric.neg(F.y)),v=v.mul(F),v.x.length=n,v.y.length=n,v.div(n)},numeric.gradient=function r(e,t){var n=t.length,i=e(t);if(isNaN(i))throw new Error("gradient: f(x) is a NaN!");var h=Math.max,s,a=numeric.clone(t),o,c,l=Array(n);numeric.div,numeric.sub;var u,h=Math.max,d=.001,f=Math.abs,p=Math.min,_,g,v,F=0,y,x,b;for(s=0;s<n;s++)for(var L=h(1e-6*i,1e-8);;){if(++F,F>20)throw new Error("Numerical gradient fails");if(a[s]=t[s]+L,o=e(a),a[s]=t[s]-L,c=e(a),a[s]=t[s],isNaN(o)||isNaN(c)){L/=16;continue}if(l[s]=(o-c)/(2*L),_=t[s]-L,g=t[s],v=t[s]+L,y=(o-i)/L,x=(i-c)/L,b=h(f(l[s]),f(i),f(o),f(c),f(_),f(g),f(v),1e-8),u=p(h(f(y-l[s]),f(x-l[s]),f(y-x))/b,L/b),u>d)L/=16;else break}return l},numeric.uncmin=function r(e,t,n,i,s,a,o){var c=numeric.gradient;typeof o>"u"&&(o={}),typeof n>"u"&&(n=1e-8),typeof i>"u"&&(i=function(re){return c(e,re)}),typeof s>"u"&&(s=1e3),t=numeric.clone(t);var l=t.length,u=e(t),h,d;if(isNaN(u))throw new Error("uncmin: f(x0) is a NaN!");var f=Math.max,p=numeric.norm2;n=f(n,numeric.epsilon);var _,g,v,F=o.Hinv||numeric.identity(l),y=numeric.dot;numeric.inv;var x=numeric.sub,b=numeric.add,L=numeric.tensor,G=numeric.div,M=numeric.mul,S=numeric.all,E=numeric.isFinite,I=numeric.neg,q=0,Y,J,de,fe,pe,X,O,j="";for(g=i(t);q<s;){if(typeof a=="function"&&a(q,t,u,g,F)){j="Callback returned true";break}if(!S(E(g))){j="Gradient has Infinity or NaN";break}if(_=I(y(F,g)),!S(E(_))){j="Search direction has Infinity or NaN";break}if(O=p(_),O<n){j="Newton step smaller than tol";break}for(X=1,d=y(g,_),J=t;q<s&&!(X*O<n);){if(Y=M(_,X),J=b(t,Y),h=e(J),h-u>=.1*X*d||isNaN(h)){X*=.5,++q;continue}break}if(X*O<n){j="Line search step size smaller than tol";break}if(q===s){j="maxit reached during line search";break}v=i(J),de=x(v,g),pe=y(de,Y),fe=y(F,de),F=x(b(F,M((pe+y(de,fe))/(pe*pe),L(Y,Y))),G(b(L(fe,Y),L(Y,fe)),pe)),t=J,u=h,g=v,++q}return{solution:t,f:u,gradient:g,invHessian:F,iterations:q,message:j}},numeric.Dopri=function r(e,t,n,i,s,a,o){this.x=e,this.y=t,this.f=n,this.ymid=i,this.iterations=s,this.events=o,this.message=a},numeric.Dopri.prototype._at=function r(_,t){function n(M){return M*M}var i=this,s=i.x,a=i.y,o=i.f,c=i.ymid;s.length;var l,u,h,d,f,p,_,g,v=.5,F=numeric.add,y=numeric.mul,x=numeric.sub,b,L,G;return l=s[t],u=s[t+1],d=a[t],f=a[t+1],g=u-l,h=l+v*g,p=c[t],b=x(o[t],y(d,1/(l-h)+2/(l-u))),L=x(o[t+1],y(f,1/(u-h)+2/(u-l))),G=[n(_-u)*(_-h)/n(l-u)/(l-h),n(_-l)*n(_-u)/n(l-h)/n(u-h),n(_-l)*(_-h)/n(u-l)/(u-h),(_-l)*n(_-u)*(_-h)/n(l-u)/(l-h),(_-u)*n(_-l)*(_-h)/n(l-u)/(u-h)],F(F(F(F(y(d,G[0]),y(p,G[1])),y(f,G[2])),y(b,G[3])),y(L,G[4]))},numeric.Dopri.prototype.at=function r(e){var t,n,i,s=Math.floor;if(typeof e!="number"){var a=e.length,o=Array(a);for(t=a-1;t!==-1;--t)o[t]=this.at(e[t]);return o}var c=this.x;for(t=0,n=c.length-1;n-t>1;)i=s(.5*(t+n)),c[i]<=e?t=i:n=i;return this._at(e,t)},numeric.dopri=function r(e,t,n,i,s,a,o){typeof s>"u"&&(s=1e-6),typeof a>"u"&&(a=1e3);var c=[e],l=[n],u=[i(e,n)],h,d,f,p,_,g,v=[],F=1/5,y=[3/40,9/40],x=[44/45,-56/15,32/9],b=[19372/6561,-25360/2187,64448/6561,-212/729],L=[9017/3168,-355/33,46732/5247,49/176,-5103/18656],G=[35/384,0,500/1113,125/192,-2187/6784,11/84],M=[.5*6025192743/30085553152,0,.5*51252292925/65400821598,.5*-2691868925/45128329728,.5*187940372067/1594534317056,.5*-1776094331/19743644256,.5*11237099/235043384],S=[1/5,3/10,4/5,8/9,1,1],E=[-71/57600,0,71/16695,-71/1920,17253/339200,-22/525,1/40],I=0,q,Y,J=(t-e)/10,de=0,fe=numeric.add,pe=numeric.mul,X,O,j=Math.min,re=Math.abs,le=numeric.norminf,me=Math.pow,ce=numeric.any,N=numeric.lt,w=numeric.and;numeric.sub;var $,ee,Z,ne=new numeric.Dopri(c,l,u,v,-1,"");for(typeof o=="function"&&($=o(e,n));e<t&&de<a;){if(++de,e+J>t&&(J=t-e),h=i(e+S[0]*J,fe(n,pe(F*J,u[I]))),d=i(e+S[1]*J,fe(fe(n,pe(y[0]*J,u[I])),pe(y[1]*J,h))),f=i(e+S[2]*J,fe(fe(fe(n,pe(x[0]*J,u[I])),pe(x[1]*J,h)),pe(x[2]*J,d))),p=i(e+S[3]*J,fe(fe(fe(fe(n,pe(b[0]*J,u[I])),pe(b[1]*J,h)),pe(b[2]*J,d)),pe(b[3]*J,f))),_=i(e+S[4]*J,fe(fe(fe(fe(fe(n,pe(L[0]*J,u[I])),pe(L[1]*J,h)),pe(L[2]*J,d)),pe(L[3]*J,f)),pe(L[4]*J,p))),X=fe(fe(fe(fe(fe(n,pe(u[I],J*G[0])),pe(d,J*G[2])),pe(f,J*G[3])),pe(p,J*G[4])),pe(_,J*G[5])),g=i(e+J,X),q=fe(fe(fe(fe(fe(pe(u[I],J*E[0]),pe(d,J*E[2])),pe(f,J*E[3])),pe(p,J*E[4])),pe(_,J*E[5])),pe(g,J*E[6])),typeof q=="number"?O=re(q):O=le(q),O>s){if(J=.2*J*me(s/O,.25),e+J===e){ne.msg="Step size became too small";break}continue}if(v[I]=fe(fe(fe(fe(fe(fe(n,pe(u[I],J*M[0])),pe(d,J*M[2])),pe(f,J*M[3])),pe(p,J*M[4])),pe(_,J*M[5])),pe(g,J*M[6])),++I,c[I]=e+J,l[I]=X,u[I]=g,typeof o=="function"){var he,Ce=e,De=e+.5*J,H;if(ee=o(De,v[I-1]),Z=w(N($,0),N(0,ee)),ce(Z)||(Ce=De,De=e+J,$=ee,ee=o(De,X),Z=w(N($,0),N(0,ee))),ce(Z)){for(var ae,ue,Ee=0,ye=1,m=1;;){if(typeof $=="number")H=(m*ee*Ce-ye*$*De)/(m*ee-ye*$);else for(H=De,Y=$.length-1;Y!==-1;--Y)$[Y]<0&&ee[Y]>0&&(H=j(H,(m*ee[Y]*Ce-ye*$[Y]*De)/(m*ee[Y]-ye*$[Y])));if(H<=Ce||H>=De)break;he=ne._at(H,I-1),ue=o(H,he),ae=w(N($,0),N(0,ue)),ce(ae)?(De=H,ee=ue,Z=ae,m=1,Ee===-1?ye*=.5:ye=1,Ee=-1):(Ce=H,$=ue,ye=1,Ee===1?m*=.5:m=1,Ee=1)}return X=ne._at(.5*(e+H),I-1),ne.f[I]=i(H,he),ne.x[I]=H,ne.y[I]=he,ne.ymid[I-1]=X,ne.events=Z,ne.iterations=de,ne}}e+=J,n=X,$=ee,J=j(.8*J*me(s/O,.25),4*J)}return ne.iterations=de,ne},numeric.LU=function(r,e){e=e||!1;var t=Math.abs,n,i,s,a,o,c,l,u,h,d=r.length,f=d-1,p=new Array(d);for(e||(r=numeric.clone(r)),s=0;s<d;++s){for(l=s,c=r[s],h=t(c[s]),i=s+1;i<d;++i)a=t(r[i][s]),h<a&&(h=a,l=i);for(p[s]=l,l!=s&&(r[s]=r[l],r[l]=c,c=r[s]),o=c[s],n=s+1;n<d;++n)r[n][s]/=o;for(n=s+1;n<d;++n){for(u=r[n],i=s+1;i<f;++i)u[i]-=u[s]*c[i],++i,u[i]-=u[s]*c[i];i===f&&(u[i]-=u[s]*c[i])}}return{LU:r,P:p}},numeric.LUsolve=function r(e,t){var n,i,s=e.LU,a=s.length,o=numeric.clone(t),c=e.P,l,u,h;for(n=a-1;n!==-1;--n)o[n]=t[n];for(n=0;n<a;++n)for(l=c[n],c[n]!==n&&(h=o[n],o[n]=o[l],o[l]=h),u=s[n],i=0;i<n;++i)o[n]-=o[i]*u[i];for(n=a-1;n>=0;--n){for(u=s[n],i=n+1;i<a;++i)o[n]-=o[i]*u[i];o[n]/=u[n]}return o},numeric.solve=function r(e,t,n){return numeric.LUsolve(numeric.LU(e,n),t)},numeric.echelonize=function r(e){var t=numeric.dim(e),n=t[0],i=t[1],s=numeric.identity(n),a=Array(n),o,c,l,u,h,d,f,p,_=Math.abs,g=numeric.diveq;for(e=numeric.clone(e),o=0;o<n;++o){for(l=0,h=e[o],d=s[o],c=1;c<i;++c)_(h[l])<_(h[c])&&(l=c);for(a[o]=l,g(d,h[l]),g(h,h[l]),c=0;c<n;++c)if(c!==o){for(f=e[c],p=f[l],u=i-1;u!==-1;--u)f[u]-=h[u]*p;for(f=s[c],u=n-1;u!==-1;--u)f[u]-=d[u]*p}}return{I:s,A:e,P:a}},numeric.__solveLP=function r(e,t,n,i,s,a,o){var c=numeric.sum;numeric.log;var l=numeric.mul,u=numeric.sub,h=numeric.dot,d=numeric.div,f=numeric.add,p=e.length,_=n.length,g,v=!1,F=0,y=1;numeric.transpose(t),numeric.svd;var x=numeric.transpose;numeric.leq;var b=Math.sqrt,L=Math.abs;numeric.muleq,numeric.norminf,numeric.any;var G=Math.min,M=numeric.all,S=numeric.gt,E=Array(p),I=Array(_);numeric.rep([_],1);var q,Y=numeric.solve,J=u(n,h(t,a)),de,fe=h(e,e),pe;for(de=F;de<s;++de){var X,O;for(X=_-1;X!==-1;--X)I[X]=d(t[X],J[X]);var j=x(I);for(X=p-1;X!==-1;--X)E[X]=c(j[X]);y=.25*L(fe/h(e,E));var re=100*b(fe/h(E,E));for((!isFinite(y)||y>re)&&(y=re),pe=f(e,l(y,E)),q=h(j,I),X=p-1;X!==-1;--X)q[X][X]+=1;O=Y(q,d(pe,y),!0);var le=d(J,h(t,O)),me=1;for(X=_-1;X!==-1;--X)le[X]<0&&(me=G(me,-.999*le[X]));if(g=u(a,l(O,me)),J=u(n,h(t,g)),!M(S(J,0)))return{solution:a,message:"",iterations:de};if(a=g,y<i)return{solution:g,message:"",iterations:de};if(o){var ce=h(e,pe),N=h(t,pe);for(v=!0,X=_-1;X!==-1;--X)if(ce*N[X]<0){v=!1;break}}else a[p-1]>=0?v=!1:v=!0;if(v)return{solution:g,message:"Unbounded",iterations:de}}return{solution:a,message:"maximum iteration count exceeded",iterations:de}},numeric._solveLP=function r(e,t,n,i,s){var a=e.length,o=n.length,p;numeric.sum,numeric.log,numeric.mul;var c=numeric.sub,l=numeric.dot;numeric.div,numeric.add;var u=numeric.rep([a],0).concat([1]),h=numeric.rep([o,1],-1),d=numeric.blockMatrix([[t,h]]),f=n,p=numeric.rep([a],0).concat(Math.max(0,numeric.sup(numeric.neg(n)))+1),_=numeric.__solveLP(u,d,f,i,s,p,!1),g=numeric.clone(_.solution);g.length=a;var v=numeric.inf(c(n,l(t,g)));if(v<0)return{solution:NaN,message:"Infeasible",iterations:_.iterations};var F=numeric.__solveLP(e,t,n,i,s-_.iterations,g,!0);return F.iterations+=_.iterations,F},numeric.solveLP=function r(e,t,n,i,s,a,o){if(typeof o>"u"&&(o=1e3),typeof a>"u"&&(a=numeric.epsilon),typeof i>"u")return numeric._solveLP(e,t,n,a,o);var c=i.length,l=i[0].length,u=t.length,h=numeric.echelonize(i),d=numeric.rep([l],0),f=h.P,p=[],_;for(_=f.length-1;_!==-1;--_)d[f[_]]=1;for(_=l-1;_!==-1;--_)d[_]===0&&p.push(_);var g=numeric.getRange,v=numeric.linspace(0,c-1),F=numeric.linspace(0,u-1),y=g(i,v,p),x=g(t,F,f),b=g(t,F,p),L=numeric.dot,G=numeric.sub,M=L(x,h.I),S=G(b,L(M,y)),E=G(n,L(M,s)),I=Array(f.length),q=Array(p.length);for(_=f.length-1;_!==-1;--_)I[_]=e[f[_]];for(_=p.length-1;_!==-1;--_)q[_]=e[p[_]];var Y=G(q,L(I,L(h.I,y))),J=numeric._solveLP(Y,S,E,a,o),de=J.solution;if(de!==de)return J;var fe=L(h.I,G(s,L(y,de))),pe=Array(e.length);for(_=f.length-1;_!==-1;--_)pe[f[_]]=fe[_];for(_=p.length-1;_!==-1;--_)pe[p[_]]=de[_];return{solution:pe,message:J.message,iterations:J.iterations}},numeric.MPStoLP=function r(e){e instanceof String&&e.split(`
`);var t=0,n=["Initial state","NAME","ROWS","COLUMNS","RHS","BOUNDS","ENDATA"],i=e.length,s,a,o,c=0,l={},u=[],h=0,d={},f=0,p,_=[],g=[],v=[];function F(G){throw new Error("MPStoLP: "+G+`
Line `+s+": "+e[s]+`
Current state: `+n[t]+`
`)}for(s=0;s<i;++s){o=e[s];var y=o.match(/\S*/g),x=[];for(a=0;a<y.length;++a)y[a]!==""&&x.push(y[a]);if(x.length!==0){for(a=0;a<n.length&&o.substr(0,n[a].length)!==n[a];++a);if(a<n.length){if(t=a,a===1&&(p=x[1]),a===6)return{name:p,c:_,A:numeric.transpose(g),b:v,rows:l,vars:d};continue}switch(t){case 0:case 1:F("Unexpected line");case 2:switch(x[0]){case"N":c===0?c=x[1]:F("Two or more N rows");break;case"L":l[x[1]]=h,u[h]=1,v[h]=0,++h;break;case"G":l[x[1]]=h,u[h]=-1,v[h]=0,++h;break;case"E":l[x[1]]=h,u[h]=0,v[h]=0,++h;break;default:F("Parse error "+numeric.prettyPrint(x))}break;case 3:d.hasOwnProperty(x[0])||(d[x[0]]=f,_[f]=0,g[f]=numeric.rep([h],0),++f);var b=d[x[0]];for(a=1;a<x.length;a+=2){if(x[a]===c){_[b]=parseFloat(x[a+1]);continue}var L=l[x[a]];g[b][L]=(u[L]<0?-1:1)*parseFloat(x[a+1])}break;case 4:for(a=1;a<x.length;a+=2)v[l[x[a]]]=(u[l[x[a]]]<0?-1:1)*parseFloat(x[a+1]);break;case 5:break;case 6:F("Internal error")}}}F("Reached end of file without ENDATA")},numeric.seedrandom={pow:Math.pow,random:Math.random},function(r,e,t,n,i,s,a){e.seedrandom=function(d,f){var p=[],_;return d=l(c(f?[d,r]:arguments.length?d:[new Date().getTime(),r,window],3),p),_=new o(p),l(_.S,r),e.random=function(){for(var v=_.g(n),F=a,y=0;v<i;)v=(v+y)*t,F*=t,y=_.g(1);for(;v>=s;)v/=2,F/=2,y>>>=1;return(v+y)/F},d};function o(h){var d,f,p=this,_=h.length,g=0,v=p.i=p.j=p.m=0;for(p.S=[],p.c=[],_||(h=[_++]);g<t;)p.S[g]=g++;for(g=0;g<t;g++)d=p.S[g],v=u(v+d+h[g%_]),f=p.S[v],p.S[g]=f,p.S[v]=d;p.g=function(y){var x=p.S,b=u(p.i+1),L=x[b],G=u(p.j+L),M=x[G];x[b]=M,x[G]=L;for(var S=x[u(L+M)];--y;)b=u(b+1),L=x[b],G=u(G+L),M=x[G],x[b]=M,x[G]=L,S=S*t+x[u(L+M)];return p.i=b,p.j=G,S},p.g(t)}function c(h,d,f,p,_){if(f=[],_=typeof h,d&&_=="object"){for(p in h)if(p.indexOf("S")<5)try{f.push(c(h[p],d-1))}catch{}}return f.length?f:h+(_!="string"?"\0":"")}function l(h,d,f,p){for(h+="",f=0,p=0;p<h.length;p++)d[u(p)]=u((f^=d[u(p)]*19)+h.charCodeAt(p));h="";for(p in d)h+=String.fromCharCode(d[p]);return h}function u(h){return h&t-1}a=e.pow(t,n),i=e.pow(2,i),s=i*2,l(e.random(),r)}([],numeric.seedrandom,256,6,52),function(r){function e(c){if(typeof c!="object")return c;var l=[],u,h=c.length;for(u=0;u<h;u++)l[u+1]=e(c[u]);return l}function t(c){if(typeof c!="object")return c;var l=[],u,h=c.length;for(u=1;u<h;u++)l[u-1]=t(c[u]);return l}function n(c,l,u){var h,d,f,p,_;for(f=1;f<=u;f=f+1){for(c[f][f]=1/c[f][f],_=-c[f][f],h=1;h<f;h=h+1)c[h][f]=_*c[h][f];if(p=f+1,u<p)break;for(d=p;d<=u;d=d+1)for(_=c[f][d],c[f][d]=0,h=1;h<=f;h=h+1)c[h][d]=c[h][d]+_*c[h][f]}}function i(c,l,u,h){var d,f,p,_;for(f=1;f<=u;f=f+1){for(_=0,d=1;d<f;d=d+1)_=_+c[d][f]*h[d];h[f]=(h[f]-_)/c[f][f]}for(p=1;p<=u;p=p+1)for(f=u+1-p,h[f]=h[f]/c[f][f],_=-h[f],d=1;d<f;d=d+1)h[d]=h[d]+_*c[d][f]}function s(c,l,u,h){var d,f,p,_,g,v;for(f=1;f<=u;f=f+1){if(h[1]=f,v=0,p=f-1,p<1){if(v=c[f][f]-v,v<=0)break;c[f][f]=Math.sqrt(v)}else{for(_=1;_<=p;_=_+1){for(g=c[_][f],d=1;d<_;d=d+1)g=g-c[d][f]*c[d][_];g=g/c[_][_],c[_][f]=g,v=v+g*g}if(v=c[f][f]-v,v<=0)break;c[f][f]=Math.sqrt(v)}h[1]=0}}function a(c,l,u,h,d,f,p,_,g,v,F,y,x,b,L,G){var M,S,E,I,q,Y,J,de,fe,pe,X,O,j,re,le,me,ce,N,w,$,ee,Z,ne,he,Ce,De,H;j=Math.min(h,v),E=2*h+j*(j+5)/2+2*v+1,he=1e-60;do he=he+he,Ce=1+.1*he,De=1+.2*he;while(Ce<=1||De<=1);for(M=1;M<=h;M=M+1)L[M]=l[M];for(M=h+1;M<=E;M=M+1)L[M]=0;for(M=1;M<=v;M=M+1)y[M]=0;if(q=[],G[1]===0){if(s(c,u,h,q),q[1]!==0){G[1]=2;return}i(c,u,h,l),n(c,u,h)}else{for(S=1;S<=h;S=S+1)for(d[S]=0,M=1;M<=S;M=M+1)d[S]=d[S]+c[M][S]*l[M];for(S=1;S<=h;S=S+1)for(l[S]=0,M=S;M<=h;M=M+1)l[S]=l[S]+c[S][M]*d[M]}for(f[1]=0,S=1;S<=h;S=S+1)for(d[S]=l[S],f[1]=f[1]+L[S]*d[S],L[S]=0,M=S+1;M<=h;M=M+1)c[M][S]=0;for(f[1]=-f[1]/2,G[1]=0,J=h,de=J+h,X=de+j,fe=X+j+1,pe=fe+j*(j+1)/2,re=pe+v,M=1;M<=v;M=M+1){for(me=0,S=1;S<=h;S=S+1)me=me+p[S][M]*p[S][M];L[re+M]=Math.sqrt(me)}x=0,b[1]=0,b[2]=0;function ae(){for(b[1]=b[1]+1,E=pe,M=1;M<=v;M=M+1){for(E=E+1,me=-_[M],S=1;S<=h;S=S+1)me=me+p[S][M]*d[S];if(Math.abs(me)<he&&(me=0),M>F)L[E]=me;else if(L[E]=-Math.abs(me),me>0){for(S=1;S<=h;S=S+1)p[S][M]=-p[S][M];_[M]=-_[M]}}for(M=1;M<=x;M=M+1)L[pe+y[M]]=0;for(O=0,le=0,M=1;M<=v;M=M+1)L[pe+M]<le*L[re+M]&&(O=M,le=L[pe+M]/L[re+M]);return O===0?999:0}function ue(){for(M=1;M<=h;M=M+1){for(me=0,S=1;S<=h;S=S+1)me=me+c[S][M]*p[S][O];L[M]=me}for(I=J,M=1;M<=h;M=M+1)L[I+M]=0;for(S=x+1;S<=h;S=S+1)for(M=1;M<=h;M=M+1)L[I+M]=L[I+M]+c[M][S]*L[S];for(Z=!0,M=x;M>=1;M=M-1){for(me=L[M],E=fe+M*(M+3)/2,I=E-M,S=M+1;S<=x;S=S+1)me=me-L[E]*L[de+S],E=E+S;if(me=me/L[I],L[de+M]=me,y[M]<F||me<0)break;Z=!1,Y=M}if(!Z)for(ce=L[X+Y]/L[de+Y],M=1;M<=x&&!(y[M]<F||L[de+M]<0);M=M+1)le=L[X+M]/L[de+M],le<ce&&(ce=le,Y=M);for(me=0,M=J+1;M<=J+h;M=M+1)me=me+L[M]*L[M];if(Math.abs(me)<=he){if(Z)return G[1]=1,999;for(M=1;M<=x;M=M+1)L[X+M]=L[X+M]-ce*L[de+M];return L[X+x+1]=L[X+x+1]+ce,700}else{for(me=0,M=1;M<=h;M=M+1)me=me+L[J+M]*p[M][O];for(N=-L[pe+O]/me,ne=!0,Z||ce<N&&(N=ce,ne=!1),M=1;M<=h;M=M+1)d[M]=d[M]+N*L[J+M],Math.abs(d[M])<he&&(d[M]=0);for(f[1]=f[1]+N*me*(N/2+L[X+x+1]),M=1;M<=x;M=M+1)L[X+M]=L[X+M]-N*L[de+M];if(L[X+x+1]=L[X+x+1]+N,ne){for(x=x+1,y[x]=O,E=fe+(x-1)*x/2+1,M=1;M<=x-1;M=M+1)L[E]=L[M],E=E+1;if(x===h)L[E]=L[h];else{for(M=h;M>=x+1&&!(L[M]===0||(w=Math.max(Math.abs(L[M-1]),Math.abs(L[M])),$=Math.min(Math.abs(L[M-1]),Math.abs(L[M])),L[M-1]>=0?le=Math.abs(w*Math.sqrt(1+$*$/(w*w))):le=-Math.abs(w*Math.sqrt(1+$*$/(w*w))),w=L[M-1]/le,$=L[M]/le,w===1));M=M-1)if(w===0)for(L[M-1]=$*le,S=1;S<=h;S=S+1)le=c[S][M-1],c[S][M-1]=c[S][M],c[S][M]=le;else for(L[M-1]=le,ee=$/(1+w),S=1;S<=h;S=S+1)le=w*c[S][M-1]+$*c[S][M],c[S][M]=ee*(c[S][M-1]+le)-c[S][M],c[S][M-1]=le;L[E]=L[x]}}else{for(me=-_[O],S=1;S<=h;S=S+1)me=me+d[S]*p[S][O];if(O>F)L[pe+O]=me;else if(L[pe+O]=-Math.abs(me),me>0){for(S=1;S<=h;S=S+1)p[S][O]=-p[S][O];_[O]=-_[O]}return 700}}return 0}function Ee(){if(E=fe+Y*(Y+1)/2+1,I=E+Y,L[I]===0||(w=Math.max(Math.abs(L[I-1]),Math.abs(L[I])),$=Math.min(Math.abs(L[I-1]),Math.abs(L[I])),L[I-1]>=0?le=Math.abs(w*Math.sqrt(1+$*$/(w*w))):le=-Math.abs(w*Math.sqrt(1+$*$/(w*w))),w=L[I-1]/le,$=L[I]/le,w===1))return 798;if(w===0){for(M=Y+1;M<=x;M=M+1)le=L[I-1],L[I-1]=L[I],L[I]=le,I=I+M;for(M=1;M<=h;M=M+1)le=c[M][Y],c[M][Y]=c[M][Y+1],c[M][Y+1]=le}else{for(ee=$/(1+w),M=Y+1;M<=x;M=M+1)le=w*L[I-1]+$*L[I],L[I]=ee*(L[I-1]+le)-L[I],L[I-1]=le,I=I+M;for(M=1;M<=h;M=M+1)le=w*c[M][Y]+$*c[M][Y+1],c[M][Y+1]=ee*(c[M][Y]+le)-c[M][Y+1],c[M][Y]=le}return 0}function ye(){for(I=E-Y,M=1;M<=Y;M=M+1)L[I]=L[E],E=E+1,I=I+1;return L[X+Y]=L[X+Y+1],y[Y]=y[Y+1],Y=Y+1,Y<x?797:0}function m(){return L[X+x]=L[X+x+1],L[X+x+1]=0,y[x]=0,x=x-1,b[2]=b[2]+1,0}for(H=0;;){if(H=ae(),H===999)return;for(;H=ue(),H!==0;){if(H===999)return;if(H===700)if(Y===x)m();else{for(;Ee(),H=ye(),H===797;);m()}}}}function o(c,l,u,h,d,f){c=e(c),l=e(l),u=e(u);var p,_,g,v,F,y=[],x=[],b=[],L=[],G=[],M;if(d=d||0,f=f?e(f):[void 0,0],h=h?e(h):[],_=c.length-1,g=u[1].length-1,!h)for(p=1;p<=g;p=p+1)h[p]=0;for(p=1;p<=g;p=p+1)x[p]=0;for(v=0,F=Math.min(_,g),p=1;p<=_;p=p+1)b[p]=0;for(y[1]=0,p=1;p<=2*_+F*(F+5)/2+2*g+1;p=p+1)L[p]=0;for(p=1;p<=2;p=p+1)G[p]=0;return a(c,l,_,_,b,y,u,h,_,g,d,x,v,G,L,f),M="",f[1]===1&&(M="constraints are inconsistent, no solution!"),f[1]===2&&(M="matrix D in quadratic function is not positive definite!"),{solution:t(b),value:t(y),unconstrained_solution:t(l),iterations:t(G),iact:t(x),message:M}}r.solveQP=o}(numeric),numeric.svd=function r(e){var t,n=numeric.epsilon,i=1e-64/n,s=50,a=0,o=0,c=0,l=0,u=0,h=numeric.clone(e),d=h.length,f=h[0].length;if(d<f)throw"Need more rows than columns";var p=new Array(f),_=new Array(f);for(o=0;o<f;o++)p[o]=_[o]=0;var g=numeric.rep([f,f],0);function v(q,Y){return q=Math.abs(q),Y=Math.abs(Y),q>Y?q*Math.sqrt(1+Y*Y/q/q):Y==0?q:Y*Math.sqrt(1+q*q/Y/Y)}var F=0,y=0,x=0,b=0,L=0,G=0,M=0;for(o=0;o<f;o++){for(p[o]=y,M=0,u=o+1,c=o;c<d;c++)M+=h[c][o]*h[c][o];if(M<=i)y=0;else for(F=h[o][o],y=Math.sqrt(M),F>=0&&(y=-y),x=F*y-M,h[o][o]=F-y,c=u;c<f;c++){for(M=0,l=o;l<d;l++)M+=h[l][o]*h[l][c];for(F=M/x,l=o;l<d;l++)h[l][c]+=F*h[l][o]}for(_[o]=y,M=0,c=u;c<f;c++)M=M+h[o][c]*h[o][c];if(M<=i)y=0;else{for(F=h[o][o+1],y=Math.sqrt(M),F>=0&&(y=-y),x=F*y-M,h[o][o+1]=F-y,c=u;c<f;c++)p[c]=h[o][c]/x;for(c=u;c<d;c++){for(M=0,l=u;l<f;l++)M+=h[c][l]*h[o][l];for(l=u;l<f;l++)h[c][l]+=M*p[l]}}L=Math.abs(_[o])+Math.abs(p[o]),L>b&&(b=L)}for(o=f-1;o!=-1;o+=-1){if(y!=0){for(x=y*h[o][o+1],c=u;c<f;c++)g[c][o]=h[o][c]/x;for(c=u;c<f;c++){for(M=0,l=u;l<f;l++)M+=h[o][l]*g[l][c];for(l=u;l<f;l++)g[l][c]+=M*g[l][o]}}for(c=u;c<f;c++)g[o][c]=0,g[c][o]=0;g[o][o]=1,y=p[o],u=o}for(o=f-1;o!=-1;o+=-1){for(u=o+1,y=_[o],c=u;c<f;c++)h[o][c]=0;if(y!=0){for(x=h[o][o]*y,c=u;c<f;c++){for(M=0,l=u;l<d;l++)M+=h[l][o]*h[l][c];for(F=M/x,l=o;l<d;l++)h[l][c]+=F*h[l][o]}for(c=o;c<d;c++)h[c][o]=h[c][o]/y}else for(c=o;c<d;c++)h[c][o]=0;h[o][o]+=1}for(n=n*b,l=f-1;l!=-1;l+=-1)for(var S=0;S<s;S++){var E=!1;for(u=l;u!=-1;u+=-1){if(Math.abs(p[u])<=n){E=!0;break}if(Math.abs(_[u-1])<=n)break}if(!E){a=0,M=1;var I=u-1;for(o=u;o<l+1&&(F=M*p[o],p[o]=a*p[o],!(Math.abs(F)<=n));o++)for(y=_[o],x=v(F,y),_[o]=x,a=y/x,M=-F/x,c=0;c<d;c++)L=h[c][I],G=h[c][o],h[c][I]=L*a+G*M,h[c][o]=-L*M+G*a}if(G=_[l],u==l){if(G<0)for(_[l]=-G,c=0;c<f;c++)g[c][l]=-g[c][l];break}if(S>=s-1)throw"Error: no convergence.";for(b=_[u],L=_[l-1],y=p[l-1],x=p[l],F=((L-G)*(L+G)+(y-x)*(y+x))/(2*x*L),y=v(F,1),F<0?F=((b-G)*(b+G)+x*(L/(F-y)-x))/b:F=((b-G)*(b+G)+x*(L/(F+y)-x))/b,a=1,M=1,o=u+1;o<l+1;o++){for(y=p[o],L=_[o],x=M*y,y=a*y,G=v(F,x),p[o-1]=G,a=F/G,M=x/G,F=b*a+y*M,y=-b*M+y*a,x=L*M,L=L*a,c=0;c<f;c++)b=g[c][o-1],G=g[c][o],g[c][o-1]=b*a+G*M,g[c][o]=-b*M+G*a;for(G=v(F,x),_[o-1]=G,a=F/G,M=x/G,F=a*y+M*L,b=-M*y+a*L,c=0;c<d;c++)L=h[c][o-1],G=h[c][o],h[c][o-1]=L*a+G*M,h[c][o]=-L*M+G*a}p[u]=0,p[l]=F,_[l]=b}for(o=0;o<_.length;o++)_[o]<n&&(_[o]=0);for(o=0;o<f;o++)for(c=o-1;c>=0;c--)if(_[c]<_[o]){for(a=_[c],_[c]=_[o],_[o]=a,l=0;l<h.length;l++)t=h[l][o],h[l][o]=h[l][c],h[l][c]=t;for(l=0;l<g.length;l++)t=g[l][o],g[l][o]=g[l][c],g[l][c]=t;o=c}return{U:h,S:_,V:g}}})(numeric1_2_6);var numeric$3=numeric1_2_6,forwardSHT=function(r,e,t,n){var i=e.length,s=(r+1)*(r+1),a,o=[,];s>i&&console.log("The SHT degree is too high for the number of data points"),t==0&&(e=convertCart2Sph(e));for(var c=0;c<e.length;c++)o[c]=e[c][2];Y_N=computeRealSH(r,e),n==0?a=numeric$3.mul(1/i,Y_N):a=pinv_direct(numeric$3.transpose(Y_N));var l=numeric$3.dotMV(a,o);return l},inverseSHT=function(r,e){for(var t=e,n=Math.sqrt(r.length)-1,i=computeRealSH(n,e),s=numeric$3.dotVM(r,i),a=0;a<e.length;a++)t[a][2]=s[a];return t},print2Darray=function(r){for(var e=0;e<r.length;e++)console.log(r[e])},convertCart2Sph=function(r,e){for(var t,n,i,s=new Array(r.length),a=0;a<r.length;a++)t=Math.atan2(r[a][1],r[a][0]),n=Math.atan2(r[a][2],Math.sqrt(r[a][0]*r[a][0]+r[a][1]*r[a][1])),e==1?s[a]=[t,n]:(i=Math.sqrt(r[a][0]*r[a][0]+r[a][1]*r[a][1]+r[a][2]*r[a][2]),s[a]=[t,n,i]);return s},convertSph2Cart=function(r){for(var e,t,n,i=new Array(r.length),s=0;s<r.length;s++)e=Math.cos(r[s][0])*Math.cos(r[s][1]),t=Math.sin(r[s][0])*Math.cos(r[s][1]),n=Math.sin(r[s][1]),r[0].length==2?i[s]=[e,t,n]:r[0].length==3&&(i[s]=[r[s][2]*e,r[s][2]*t,r[s][2]*n]);return i},computeRealSH=function(r,e){for(var t=new Array(e.length),n=new Array(e.length),i=0;i<e.length;i++)t[i]=e[i][0],n[i]=e[i][1];var s=new Array(2*r+1);t.length;for(var a=(r+1)*(r+1),o=0,c=0,l,u=numeric$3.sin(n),h=0,d=new Array(a),f,p,_,g,i=0;i<2*r+1;i++)s[i]=factorial(i);for(var v=0;v<r+1;v++){if(v==0){var F=new Array(t.length);F.fill(1),d[v]=F,h=1}else{l=recurseLegendrePoly(v,u,o,c),f=Math.sqrt(2*v+1);for(var y=0;y<v+1;y++)y==0?d[h+v]=numeric$3.mul(f,l[y]):(p=f*Math.sqrt(2*s[v-y]/s[v+y]),_=numeric$3.cos(numeric$3.mul(y,t)),g=numeric$3.sin(numeric$3.mul(y,t)),d[h+v-y]=numeric$3.mul(p,numeric$3.mul(l[y],g)),d[h+v+y]=numeric$3.mul(p,numeric$3.mul(l[y],_)));h=h+2*v+1}c=o,o=l}return d},factorial=function(r){return r===0?1:r*factorial(r-1)},recurseLegendrePoly=function(r,e,t,n){var i=new Array(r+1);switch(r){case 1:var u=numeric$3.mul(e,e),s=e,a=numeric$3.sqrt(numeric$3.sub(1,u));i[0]=s,i[1]=a;break;case 2:var u=numeric$3.mul(e,e),o=numeric$3.mul(3,u);o=numeric$3.sub(o,1),o=numeric$3.div(o,2);var c=numeric$3.sub(1,u);c=numeric$3.sqrt(c),c=numeric$3.mul(3,c),c=numeric$3.mul(c,e);var l=numeric$3.sub(1,u);l=numeric$3.mul(3,l),i[0]=o,i[1]=c,i[2]=l;break;default:var u=numeric$3.mul(e,e),h=numeric$3.sub(1,u),d=2*r-1,f=1;if(d%2==0)for(var p=1;p<d/2+1;p++)f=f*2*p;else for(var p=1;p<(d+1)/2+1;p++)f=f*(2*p-1);i[r]=numeric$3.mul(f,numeric$3.pow(h,r/2)),i[r-1]=numeric$3.mul(2*r-1,numeric$3.mul(e,t[r-1]));for(var _=0;_<r-1;_++){var g=numeric$3.mul(2*r-1,numeric$3.mul(e,t[_])),v=numeric$3.mul(r+_-1,n[_]);i[_]=numeric$3.div(numeric$3.sub(g,v),r-_)}}return i},pinv_svd=function(r){for(var e=numeric$3.svd(r),t=e.S[0],n=e.U,i=e.S,s=e.V,a=r.length,o=r[0].length,c=Math.max(a,o)*numeric$3.epsilon*t,l=i.length,u=new Array(l),h=l-1;h!==-1;h--)i[h]>c?u[h]=1/i[h]:u[h]=0;return numeric$3.dot(numeric$3.dot(s,numeric$3.diag(u)),numeric$3.transpose(n))},pinv_direct=function(r){var e=numeric$3.transpose(r);return numeric$3.dot(numeric$3.inv(numeric$3.dot(e,r)),e)},getSHrotMtx=function(r,e){var t=(e+1)*(e+1),n=numeric$3.rep([t,t],0);n[0][0]=1;var i=numeric$3.rep([3,3],0);i[0][0]=r[1][1],i[0][1]=r[1][2],i[0][2]=r[1][0],i[1][0]=r[2][1],i[1][1]=r[2][2],i[1][2]=r[2][0],i[2][0]=r[0][1],i[2][1]=r[0][2],i[2][2]=r[0][0],n=numeric$3.setBlock(n,[1,1],[3,3],i);for(var s=i,a=3,o=2;o<e+1;o++){for(var c=numeric$3.rep([2*o+1,2*o+1],0),l=-o;l<o+1;l++)for(var u=-o;u<o+1;u++){var h,d,f,p,_;l==0?h=1:h=0,Math.abs(u)==o?d=2*o*(2*o-1):d=o*o-u*u,f=Math.sqrt((o*o-l*l)/d),p=Math.sqrt((1+h)*(o+Math.abs(l)-1)*(o+Math.abs(l))/d)*(1-2*h)*.5,_=Math.sqrt((o-Math.abs(l)-1)*(o-Math.abs(l))/d)*(1-h)*-.5,f!=0&&(f=f*U(o,l,u,i,s)),p!=0&&(p=p*V(o,l,u,i,s)),_!=0&&(_=_*W(o,l,u,i,s)),c[l+o][u+o]=f+p+_}n=numeric$3.setBlock(n,[a+1,a+1],[a+2*o+1,a+2*o+1],c),s=c,a=a+2*o+1}return n};function U(r,e,t,n,i){return P(0,r,e,t,n,i)}function V(r,e,t,n,i){var s,a,o,c;return e==0?(s=P(1,r,1,t,n,i),a=P(-1,r,-1,t,n,i),o=s+a):e>0?(e==1?c=1:c=0,s=P(1,r,e-1,t,n,i),a=P(-1,r,-e+1,t,n,i),o=s*Math.sqrt(1+c)-a*(1-c)):(e==-1?c=1:c=0,s=P(1,r,e+1,t,n,i),a=P(-1,r,-e-1,t,n,i),o=s*(1-c)+a*Math.sqrt(1+c)),o}function W(r,e,t,n,i){var s,a,o;return e==0?console.error("should not be called"):e>0?(s=P(1,r,e+1,t,n,i),a=P(-1,r,-e-1,t,n,i),o=s+a):(s=P(1,r,e-1,t,n,i),a=P(-1,r,-e+1,t,n,i),o=s-a),o}function P(r,e,t,n,i,s){var a,o,c,l;return a=i[r+1][2],o=i[r+1][0],c=i[r+1][1],n==-e?l=a*s[t+e-1][0]+o*s[t+e-1][2*e-2]:n==e?l=a*s[t+e-1][2*e-2]-o*s[t+e-1][0]:l=c*s[t+e-1][n+e-1],l}var yawPitchRoll2Rzyx=function(r,e,t){var n,i,s;t==0?n=[[1,0,0],[0,1,0],[0,0,1]]:n=[[1,0,0],[0,Math.cos(t),Math.sin(t)],[0,-Math.sin(t),Math.cos(t)]],e==0?i=[[1,0,0],[0,1,0],[0,0,1]]:i=[[Math.cos(e),0,-Math.sin(e)],[0,1,0],[Math.sin(e),0,Math.cos(e)]],r==0?s=[[1,0,0],[0,1,0],[0,0,1]]:s=[[Math.cos(r),Math.sin(r),0],[-Math.sin(r),Math.cos(r),0],[0,0,1]];var a=numeric$3.dotMMsmall(i,s);return a=numeric$3.dotMMsmall(n,a),a};src.forwardSHT=forwardSHT;src.inverseSHT=inverseSHT;src.print2Darray=print2Darray;src.convertCart2Sph=convertCart2Sph;src.convertSph2Cart=convertSph2Cart;src.computeRealSH=computeRealSH;src.factorial=factorial;src.recurseLegendrePoly=recurseLegendrePoly;src.pinv_svd=pinv_svd;src.pinv_direct=pinv_direct;src.getSHrotMtx=getSHrotMtx;src.yawPitchRoll2Rzyx=yawPitchRoll2Rzyx;Object.defineProperty(ambiMonoEncoder,"__esModule",{value:!0});var _classCallCheck2$m=classCallCheck,_classCallCheck3$m=_interopRequireDefault$m(_classCallCheck2$m),_createClass2$l=createClass,_createClass3$l=_interopRequireDefault$m(_createClass2$l),_sphericalHarmonicTransform$4=src,jshlib$5=_interopRequireWildcard$5(_sphericalHarmonicTransform$4);function _interopRequireWildcard$5(r){if(r&&r.__esModule)return r;var e={};if(r!=null)for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t]);return e.default=r,e}function _interopRequireDefault$m(r){return r&&r.__esModule?r:{default:r}}var monoEncoder=function(){function r(e,t){(0,_classCallCheck3$m.default)(this,r),this.initialized=!1,this.ctx=e,this.order=t,this.nCh=(t+1)*(t+1),this.azim=0,this.elev=0,this.gains=new Array(this.nCh),this.gainNodes=new Array(this.nCh),this.in=this.ctx.createGain(),this.in.channelCountMode="explicit",this.in.channelCount=1,this.out=this.ctx.createChannelMerger(this.nCh);for(var n=0;n<this.nCh;n++)this.gainNodes[n]=this.ctx.createGain(),this.gainNodes[n].channelCountMode="explicit",this.gainNodes[n].channelCount=1;this.updateGains();for(var n=0;n<this.nCh;n++)this.in.connect(this.gainNodes[n]),this.gainNodes[n].connect(this.out,0,n);this.initialized=!0}return(0,_createClass3$l.default)(r,[{key:"updateGains",value:function(){for(var t=this.order,n=jshlib$5.computeRealSH(t,[[this.azim*Math.PI/180,this.elev*Math.PI/180]]),i=0;i<this.nCh;i++)this.gains[i]=n[i][0],this.gainNodes[i].gain.value=this.gains[i]}}]),r}();ambiMonoEncoder.default=monoEncoder;var ambiMonoEncoder2D={},utils$6={},ch1d=convexHull1d$1;function convexHull1d$1(r){for(var e=0,t=0,n=1;n<r.length;++n)r[n][0]<r[e][0]&&(e=n),r[n][0]>r[t][0]&&(t=n);return e<t?[[e],[t]]:e>t?[[t],[e]]:[[e]]}var orientation={exports:{}},twoProduct_1=twoProduct$1,SPLITTER=+(Math.pow(2,27)+1);function twoProduct$1(r,e,t){var n=r*e,i=SPLITTER*r,s=i-r,a=i-s,o=r-a,c=SPLITTER*e,l=c-e,u=c-l,h=e-u,d=n-a*u,f=d-o*u,p=f-a*h,_=o*h-p;return t?(t[0]=_,t[1]=n,t):[_,n]}var robustSum=linearExpansionSum;function scalarScalar$1(r,e){var t=r+e,n=t-r,i=t-n,s=e-n,a=r-i,o=a+s;return o?[o,t]:[t]}function linearExpansionSum(r,e){var t=r.length|0,n=e.length|0;if(t===1&&n===1)return scalarScalar$1(r[0],e[0]);var i=t+n,s=new Array(i),a=0,o=0,c=0,l=Math.abs,u=r[o],h=l(u),d=e[c],f=l(d),p,_;h<f?(_=u,o+=1,o<t&&(u=r[o],h=l(u))):(_=d,c+=1,c<n&&(d=e[c],f=l(d))),o<t&&h<f||c>=n?(p=u,o+=1,o<t&&(u=r[o],h=l(u))):(p=d,c+=1,c<n&&(d=e[c],f=l(d)));for(var g=p+_,v=g-p,F=_-v,y=F,x=g,b,L,G,M,S;o<t&&c<n;)h<f?(p=u,o+=1,o<t&&(u=r[o],h=l(u))):(p=d,c+=1,c<n&&(d=e[c],f=l(d))),_=y,g=p+_,v=g-p,F=_-v,F&&(s[a++]=F),b=x+g,L=b-x,G=b-L,M=g-L,S=x-G,y=S+M,x=b;for(;o<t;)p=u,_=y,g=p+_,v=g-p,F=_-v,F&&(s[a++]=F),b=x+g,L=b-x,G=b-L,M=g-L,S=x-G,y=S+M,x=b,o+=1,o<t&&(u=r[o]);for(;c<n;)p=d,_=y,g=p+_,v=g-p,F=_-v,F&&(s[a++]=F),b=x+g,L=b-x,G=b-L,M=g-L,S=x-G,y=S+M,x=b,c+=1,c<n&&(d=e[c]);return y&&(s[a++]=y),x&&(s[a++]=x),a||(s[a++]=0),s.length=a,s}var twoSum$1=fastTwoSum;function fastTwoSum(r,e,t){var n=r+e,i=n-r,s=n-i,a=e-i,o=r-s;return t?(t[0]=o+a,t[1]=n,t):[o+a,n]}var twoProduct=twoProduct_1,twoSum=twoSum$1,robustScale=scaleLinearExpansion;function scaleLinearExpansion(r,e){var t=r.length;if(t===1){var n=twoProduct(r[0],e);return n[0]?n:[n[1]]}var i=new Array(2*t),s=[.1,.1],a=[.1,.1],o=0;twoProduct(r[0],e,s),s[0]&&(i[o++]=s[0]);for(var c=1;c<t;++c){twoProduct(r[c],e,a);var l=s[1];twoSum(l,a[0],s),s[0]&&(i[o++]=s[0]);var u=a[1],h=s[1],d=u+h,f=d-u,p=h-f;s[1]=d,p&&(i[o++]=p)}return s[1]&&(i[o++]=s[1]),o===0&&(i[o++]=0),i.length=o,i}var robustDiff=robustSubtract;function scalarScalar(r,e){var t=r+e,n=t-r,i=t-n,s=e-n,a=r-i,o=a+s;return o?[o,t]:[t]}function robustSubtract(r,e){var t=r.length|0,n=e.length|0;if(t===1&&n===1)return scalarScalar(r[0],-e[0]);var i=t+n,s=new Array(i),a=0,o=0,c=0,l=Math.abs,u=r[o],h=l(u),d=-e[c],f=l(d),p,_;h<f?(_=u,o+=1,o<t&&(u=r[o],h=l(u))):(_=d,c+=1,c<n&&(d=-e[c],f=l(d))),o<t&&h<f||c>=n?(p=u,o+=1,o<t&&(u=r[o],h=l(u))):(p=d,c+=1,c<n&&(d=-e[c],f=l(d)));for(var g=p+_,v=g-p,F=_-v,y=F,x=g,b,L,G,M,S;o<t&&c<n;)h<f?(p=u,o+=1,o<t&&(u=r[o],h=l(u))):(p=d,c+=1,c<n&&(d=-e[c],f=l(d))),_=y,g=p+_,v=g-p,F=_-v,F&&(s[a++]=F),b=x+g,L=b-x,G=b-L,M=g-L,S=x-G,y=S+M,x=b;for(;o<t;)p=u,_=y,g=p+_,v=g-p,F=_-v,F&&(s[a++]=F),b=x+g,L=b-x,G=b-L,M=g-L,S=x-G,y=S+M,x=b,o+=1,o<t&&(u=r[o]);for(;c<n;)p=d,_=y,g=p+_,v=g-p,F=_-v,F&&(s[a++]=F),b=x+g,L=b-x,G=b-L,M=g-L,S=x-G,y=S+M,x=b,c+=1,c<n&&(d=-e[c]);return y&&(s[a++]=y),x&&(s[a++]=x),a||(s[a++]=0),s.length=a,s}(function(r){var e=twoProduct_1,t=robustSum,n=robustScale,i=robustDiff,s=5,a=11102230246251565e-32,o=(3+16*a)*a,c=(7+56*a)*a;function l(y,x,b,L){return function(M,S,E){var I=y(y(x(S[1],E[0]),x(-E[1],S[0])),y(x(M[1],S[0]),x(-S[1],M[0]))),q=y(x(M[1],E[0]),x(-E[1],M[0])),Y=L(I,q);return Y[Y.length-1]}}function u(y,x,b,L){return function(M,S,E,I){var q=y(y(b(y(x(E[1],I[0]),x(-I[1],E[0])),S[2]),y(b(y(x(S[1],I[0]),x(-I[1],S[0])),-E[2]),b(y(x(S[1],E[0]),x(-E[1],S[0])),I[2]))),y(b(y(x(S[1],I[0]),x(-I[1],S[0])),M[2]),y(b(y(x(M[1],I[0]),x(-I[1],M[0])),-S[2]),b(y(x(M[1],S[0]),x(-S[1],M[0])),I[2])))),Y=y(y(b(y(x(E[1],I[0]),x(-I[1],E[0])),M[2]),y(b(y(x(M[1],I[0]),x(-I[1],M[0])),-E[2]),b(y(x(M[1],E[0]),x(-E[1],M[0])),I[2]))),y(b(y(x(S[1],E[0]),x(-E[1],S[0])),M[2]),y(b(y(x(M[1],E[0]),x(-E[1],M[0])),-S[2]),b(y(x(M[1],S[0]),x(-S[1],M[0])),E[2])))),J=L(q,Y);return J[J.length-1]}}function h(y,x,b,L){return function(M,S,E,I,q){var Y=y(y(y(b(y(b(y(x(I[1],q[0]),x(-q[1],I[0])),E[2]),y(b(y(x(E[1],q[0]),x(-q[1],E[0])),-I[2]),b(y(x(E[1],I[0]),x(-I[1],E[0])),q[2]))),S[3]),y(b(y(b(y(x(I[1],q[0]),x(-q[1],I[0])),S[2]),y(b(y(x(S[1],q[0]),x(-q[1],S[0])),-I[2]),b(y(x(S[1],I[0]),x(-I[1],S[0])),q[2]))),-E[3]),b(y(b(y(x(E[1],q[0]),x(-q[1],E[0])),S[2]),y(b(y(x(S[1],q[0]),x(-q[1],S[0])),-E[2]),b(y(x(S[1],E[0]),x(-E[1],S[0])),q[2]))),I[3]))),y(b(y(b(y(x(E[1],I[0]),x(-I[1],E[0])),S[2]),y(b(y(x(S[1],I[0]),x(-I[1],S[0])),-E[2]),b(y(x(S[1],E[0]),x(-E[1],S[0])),I[2]))),-q[3]),y(b(y(b(y(x(I[1],q[0]),x(-q[1],I[0])),S[2]),y(b(y(x(S[1],q[0]),x(-q[1],S[0])),-I[2]),b(y(x(S[1],I[0]),x(-I[1],S[0])),q[2]))),M[3]),b(y(b(y(x(I[1],q[0]),x(-q[1],I[0])),M[2]),y(b(y(x(M[1],q[0]),x(-q[1],M[0])),-I[2]),b(y(x(M[1],I[0]),x(-I[1],M[0])),q[2]))),-S[3])))),y(y(b(y(b(y(x(S[1],q[0]),x(-q[1],S[0])),M[2]),y(b(y(x(M[1],q[0]),x(-q[1],M[0])),-S[2]),b(y(x(M[1],S[0]),x(-S[1],M[0])),q[2]))),I[3]),y(b(y(b(y(x(S[1],I[0]),x(-I[1],S[0])),M[2]),y(b(y(x(M[1],I[0]),x(-I[1],M[0])),-S[2]),b(y(x(M[1],S[0]),x(-S[1],M[0])),I[2]))),-q[3]),b(y(b(y(x(E[1],I[0]),x(-I[1],E[0])),S[2]),y(b(y(x(S[1],I[0]),x(-I[1],S[0])),-E[2]),b(y(x(S[1],E[0]),x(-E[1],S[0])),I[2]))),M[3]))),y(b(y(b(y(x(E[1],I[0]),x(-I[1],E[0])),M[2]),y(b(y(x(M[1],I[0]),x(-I[1],M[0])),-E[2]),b(y(x(M[1],E[0]),x(-E[1],M[0])),I[2]))),-S[3]),y(b(y(b(y(x(S[1],I[0]),x(-I[1],S[0])),M[2]),y(b(y(x(M[1],I[0]),x(-I[1],M[0])),-S[2]),b(y(x(M[1],S[0]),x(-S[1],M[0])),I[2]))),E[3]),b(y(b(y(x(S[1],E[0]),x(-E[1],S[0])),M[2]),y(b(y(x(M[1],E[0]),x(-E[1],M[0])),-S[2]),b(y(x(M[1],S[0]),x(-S[1],M[0])),E[2]))),-I[3]))))),J=y(y(y(b(y(b(y(x(I[1],q[0]),x(-q[1],I[0])),E[2]),y(b(y(x(E[1],q[0]),x(-q[1],E[0])),-I[2]),b(y(x(E[1],I[0]),x(-I[1],E[0])),q[2]))),M[3]),b(y(b(y(x(I[1],q[0]),x(-q[1],I[0])),M[2]),y(b(y(x(M[1],q[0]),x(-q[1],M[0])),-I[2]),b(y(x(M[1],I[0]),x(-I[1],M[0])),q[2]))),-E[3])),y(b(y(b(y(x(E[1],q[0]),x(-q[1],E[0])),M[2]),y(b(y(x(M[1],q[0]),x(-q[1],M[0])),-E[2]),b(y(x(M[1],E[0]),x(-E[1],M[0])),q[2]))),I[3]),b(y(b(y(x(E[1],I[0]),x(-I[1],E[0])),M[2]),y(b(y(x(M[1],I[0]),x(-I[1],M[0])),-E[2]),b(y(x(M[1],E[0]),x(-E[1],M[0])),I[2]))),-q[3]))),y(y(b(y(b(y(x(E[1],q[0]),x(-q[1],E[0])),S[2]),y(b(y(x(S[1],q[0]),x(-q[1],S[0])),-E[2]),b(y(x(S[1],E[0]),x(-E[1],S[0])),q[2]))),M[3]),b(y(b(y(x(E[1],q[0]),x(-q[1],E[0])),M[2]),y(b(y(x(M[1],q[0]),x(-q[1],M[0])),-E[2]),b(y(x(M[1],E[0]),x(-E[1],M[0])),q[2]))),-S[3])),y(b(y(b(y(x(S[1],q[0]),x(-q[1],S[0])),M[2]),y(b(y(x(M[1],q[0]),x(-q[1],M[0])),-S[2]),b(y(x(M[1],S[0]),x(-S[1],M[0])),q[2]))),E[3]),b(y(b(y(x(S[1],E[0]),x(-E[1],S[0])),M[2]),y(b(y(x(M[1],E[0]),x(-E[1],M[0])),-S[2]),b(y(x(M[1],S[0]),x(-S[1],M[0])),E[2]))),-q[3])))),de=L(Y,J);return de[de.length-1]}}function d(y){var x=y===3?l:y===4?u:h;return x(t,e,n,i)}var f=d(3),p=d(4),_=[function(){return 0},function(){return 0},function(x,b){return b[0]-x[0]},function(x,b,L){var G=(x[1]-L[1])*(b[0]-L[0]),M=(x[0]-L[0])*(b[1]-L[1]),S=G-M,E;if(G>0){if(M<=0)return S;E=G+M}else if(G<0){if(M>=0)return S;E=-(G+M)}else return S;var I=o*E;return S>=I||S<=-I?S:f(x,b,L)},function(x,b,L,G){var M=x[0]-G[0],S=b[0]-G[0],E=L[0]-G[0],I=x[1]-G[1],q=b[1]-G[1],Y=L[1]-G[1],J=x[2]-G[2],de=b[2]-G[2],fe=L[2]-G[2],pe=S*Y,X=E*q,O=E*I,j=M*Y,re=M*q,le=S*I,me=J*(pe-X)+de*(O-j)+fe*(re-le),ce=(Math.abs(pe)+Math.abs(X))*Math.abs(J)+(Math.abs(O)+Math.abs(j))*Math.abs(de)+(Math.abs(re)+Math.abs(le))*Math.abs(fe),N=c*ce;return me>N||-me>N?me:p(x,b,L,G)}];function g(y){var x=_[y.length];return x||(x=_[y.length]=d(y.length)),x.apply(void 0,y)}function v(y,x,b,L,G,M,S){return function(I,q,Y,J,de){switch(arguments.length){case 0:case 1:return 0;case 2:return L(I,q);case 3:return G(I,q,Y);case 4:return M(I,q,Y,J);case 5:return S(I,q,Y,J,de)}for(var fe=new Array(arguments.length),pe=0;pe<arguments.length;++pe)fe[pe]=arguments[pe];return y(fe)}}function F(){for(;_.length<=s;)_.push(d(_.length));r.exports=v.apply(void 0,[g].concat(_));for(var y=0;y<=s;++y)r.exports[y]=_[y]}F()})(orientation);var orientationExports=orientation.exports,monotoneConvexHull2d=monotoneConvexHull2D,orient$2=orientationExports[3];function monotoneConvexHull2D(r){var e=r.length;if(e<3){for(var l=new Array(e),t=0;t<e;++t)l[t]=t;return e===2&&r[0][0]===r[1][0]&&r[0][1]===r[1][1]?[0]:l}for(var n=new Array(e),t=0;t<e;++t)n[t]=t;n.sort(function(f,p){var _=r[f][0]-r[p][0];return _||r[f][1]-r[p][1]});for(var i=[n[0],n[1]],s=[n[0],n[1]],t=2;t<e;++t){for(var a=n[t],o=r[a],c=i.length;c>1&&orient$2(r[i[c-2]],r[i[c-1]],o)<=0;)c-=1,i.pop();for(i.push(a),c=s.length;c>1&&orient$2(r[s[c-2]],r[s[c-1]],o)>=0;)c-=1,s.pop();s.push(a)}for(var l=new Array(s.length+i.length-2),u=0,t=0,h=i.length;t<h;++t)l[u++]=i[t];for(var d=s.length-2;d>0;--d)l[u++]=s[d];return l}var ch2d=convexHull2D,monotoneHull=monotoneConvexHull2d;function convexHull2D(r){var e=monotoneHull(r),t=e.length;if(t<=2)return[];for(var n=new Array(t),i=e[t-1],s=0;s<t;++s){var a=e[s];n[s]=[i,a],i=a}return n}var topology={},twiddle={},INT_BITS=32;twiddle.INT_BITS=INT_BITS;twiddle.INT_MAX=2147483647;twiddle.INT_MIN=-1<<INT_BITS-1;twiddle.sign=function(r){return(r>0)-(r<0)};twiddle.abs=function(r){var e=r>>INT_BITS-1;return(r^e)-e};twiddle.min=function(r,e){return e^(r^e)&-(r<e)};twiddle.max=function(r,e){return r^(r^e)&-(r<e)};twiddle.isPow2=function(r){return!(r&r-1)&&!!r};twiddle.log2=function(r){var e,t;return e=(r>65535)<<4,r>>>=e,t=(r>255)<<3,r>>>=t,e|=t,t=(r>15)<<2,r>>>=t,e|=t,t=(r>3)<<1,r>>>=t,e|=t,e|r>>1};twiddle.log10=function(r){return r>=1e9?9:r>=1e8?8:r>=1e7?7:r>=1e6?6:r>=1e5?5:r>=1e4?4:r>=1e3?3:r>=100?2:r>=10?1:0};twiddle.popCount=function(r){return r=r-(r>>>1&1431655765),r=(r&858993459)+(r>>>2&858993459),(r+(r>>>4)&252645135)*16843009>>>24};function countTrailingZeros(r){var e=32;return r&=-r,r&&e--,r&65535&&(e-=16),r&16711935&&(e-=8),r&252645135&&(e-=4),r&858993459&&(e-=2),r&1431655765&&(e-=1),e}twiddle.countTrailingZeros=countTrailingZeros;twiddle.nextPow2=function(r){return r+=r===0,--r,r|=r>>>1,r|=r>>>2,r|=r>>>4,r|=r>>>8,r|=r>>>16,r+1};twiddle.prevPow2=function(r){return r|=r>>>1,r|=r>>>2,r|=r>>>4,r|=r>>>8,r|=r>>>16,r-(r>>>1)};twiddle.parity=function(r){return r^=r>>>16,r^=r>>>8,r^=r>>>4,r&=15,27030>>>r&1};var REVERSE_TABLE=new Array(256);(function(r){for(var e=0;e<256;++e){var t=e,n=e,i=7;for(t>>>=1;t;t>>>=1)n<<=1,n|=t&1,--i;r[e]=n<<i&255}})(REVERSE_TABLE);twiddle.reverse=function(r){return REVERSE_TABLE[r&255]<<24|REVERSE_TABLE[r>>>8&255]<<16|REVERSE_TABLE[r>>>16&255]<<8|REVERSE_TABLE[r>>>24&255]};twiddle.interleave2=function(r,e){return r&=65535,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e&=65535,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1};twiddle.deinterleave2=function(r,e){return r=r>>>e&1431655765,r=(r|r>>>1)&858993459,r=(r|r>>>2)&252645135,r=(r|r>>>4)&16711935,r=(r|r>>>16)&65535,r<<16>>16};twiddle.interleave3=function(r,e,t){return r&=1023,r=(r|r<<16)&4278190335,r=(r|r<<8)&251719695,r=(r|r<<4)&3272356035,r=(r|r<<2)&1227133513,e&=1023,e=(e|e<<16)&4278190335,e=(e|e<<8)&251719695,e=(e|e<<4)&3272356035,e=(e|e<<2)&1227133513,r|=e<<1,t&=1023,t=(t|t<<16)&4278190335,t=(t|t<<8)&251719695,t=(t|t<<4)&3272356035,t=(t|t<<2)&1227133513,r|t<<2};twiddle.deinterleave3=function(r,e){return r=r>>>e&1227133513,r=(r|r>>>2)&3272356035,r=(r|r>>>4)&251719695,r=(r|r>>>8)&4278190335,r=(r|r>>>16)&1023,r<<22>>22};twiddle.nextCombination=function(r){var e=r|r-1;return e+1|(~e&-~e)-1>>>countTrailingZeros(r)+1};var unionFind=UnionFind$1;function UnionFind$1(r){this.roots=new Array(r),this.ranks=new Array(r);for(var e=0;e<r;++e)this.roots[e]=e,this.ranks[e]=0}var proto$1=UnionFind$1.prototype;Object.defineProperty(proto$1,"length",{get:function(){return this.roots.length}});proto$1.makeSet=function(){var r=this.roots.length;return this.roots.push(r),this.ranks.push(0),r};proto$1.find=function(r){for(var e=r,t=this.roots;t[r]!==r;)r=t[r];for(;t[e]!==r;){var n=t[e];t[e]=r,e=n}return r};proto$1.link=function(r,e){var t=this.find(r),n=this.find(e);if(t!==n){var i=this.ranks,s=this.roots,a=i[t],o=i[n];a<o?s[t]=n:o<a?s[n]=t:(s[n]=t,++i[t])}};var bits=twiddle,UnionFind=unionFind;function dimension(r){for(var e=0,t=Math.max,n=0,i=r.length;n<i;++n)e=t(e,r[n].length);return e-1}topology.dimension=dimension;function countVertices(r){for(var e=-1,t=Math.max,n=0,i=r.length;n<i;++n)for(var s=r[n],a=0,o=s.length;a<o;++a)e=t(e,s[a]);return e+1}topology.countVertices=countVertices;function cloneCells(r){for(var e=new Array(r.length),t=0,n=r.length;t<n;++t)e[t]=r[t].slice(0);return e}topology.cloneCells=cloneCells;function compareCells(r,e){var t=r.length,n=r.length-e.length,i=Math.min;if(n)return n;switch(t){case 0:return 0;case 1:return r[0]-e[0];case 2:var l=r[0]+r[1]-e[0]-e[1];return l||i(r[0],r[1])-i(e[0],e[1]);case 3:var s=r[0]+r[1],a=e[0]+e[1];if(l=s+r[2]-(a+e[2]),l)return l;var o=i(r[0],r[1]),c=i(e[0],e[1]),l=i(o,r[2])-i(c,e[2]);return l||i(o+r[2],s)-i(c+e[2],a);default:var u=r.slice(0);u.sort();var h=e.slice(0);h.sort();for(var d=0;d<t;++d)if(n=u[d]-h[d],n)return n;return 0}}topology.compareCells=compareCells;function compareZipped(r,e){return compareCells(r[0],e[0])}function normalize(r,e){if(e){for(var t=r.length,n=new Array(t),i=0;i<t;++i)n[i]=[r[i],e[i]];n.sort(compareZipped);for(var i=0;i<t;++i)r[i]=n[i][0],e[i]=n[i][1];return r}else return r.sort(compareCells),r}topology.normalize=normalize;function unique(r){if(r.length===0)return[];for(var e=1,t=r.length,n=1;n<t;++n){var i=r[n];if(compareCells(i,r[n-1])){if(n===e){e++;continue}r[e++]=i}}return r.length=e,r}topology.unique=unique;function findCell(r,e){for(var t=0,n=r.length-1,i=-1;t<=n;){var s=t+n>>1,a=compareCells(r[s],e);a<=0?(a===0&&(i=s),t=s+1):a>0&&(n=s-1)}return i}topology.findCell=findCell;function incidence(r,e){for(var t=new Array(r.length),n=0,i=t.length;n<i;++n)t[n]=[];for(var s=[],n=0,a=e.length;n<a;++n)for(var o=e[n],c=o.length,l=1,u=1<<c;l<u;++l){s.length=bits.popCount(l);for(var h=0,d=0;d<c;++d)l&1<<d&&(s[h++]=o[d]);var f=findCell(r,s);if(!(f<0))for(;t[f++].push(n),!(f>=r.length||compareCells(r[f],s)!==0););}return t}topology.incidence=incidence;function dual(r,e){if(!e)return incidence(unique(skeleton(r,0)),r);for(var t=new Array(e),n=0;n<e;++n)t[n]=[];for(var n=0,i=r.length;n<i;++n)for(var s=r[n],a=0,o=s.length;a<o;++a)t[s[a]].push(n);return t}topology.dual=dual;function explode(r){for(var e=[],t=0,n=r.length;t<n;++t)for(var i=r[t],s=i.length|0,a=1,o=1<<s;a<o;++a){for(var c=[],l=0;l<s;++l)a>>>l&1&&c.push(i[l]);e.push(c)}return normalize(e)}topology.explode=explode;function skeleton(r,e){if(e<0)return[];for(var t=[],n=(1<<e+1)-1,i=0;i<r.length;++i)for(var s=r[i],a=n;a<1<<s.length;a=bits.nextCombination(a)){for(var o=new Array(e+1),c=0,l=0;l<s.length;++l)a&1<<l&&(o[c++]=s[l]);t.push(o)}return normalize(t)}topology.skeleton=skeleton;function boundary(r){for(var e=[],t=0,n=r.length;t<n;++t)for(var i=r[t],s=0,a=i.length;s<a;++s){for(var o=new Array(i.length-1),c=0,l=0;c<a;++c)c!==s&&(o[l++]=i[c]);e.push(o)}return normalize(e)}topology.boundary=boundary;function connectedComponents_dense(r,e){for(var t=new UnionFind(e),n=0;n<r.length;++n)for(var i=r[n],s=0;s<i.length;++s)for(var a=s+1;a<i.length;++a)t.link(i[s],i[a]);for(var o=[],c=t.ranks,n=0;n<c.length;++n)c[n]=-1;for(var n=0;n<r.length;++n){var l=t.find(r[n][0]);c[l]<0?(c[l]=o.length,o.push([r[n].slice(0)])):o[c[l]].push(r[n].slice(0))}return o}function connectedComponents_sparse(r){for(var e=unique(normalize(skeleton(r,0))),t=new UnionFind(e.length),n=0;n<r.length;++n)for(var i=r[n],s=0;s<i.length;++s)for(var a=findCell(e,[i[s]]),o=s+1;o<i.length;++o)t.link(a,findCell(e,[i[o]]));for(var c=[],l=t.ranks,n=0;n<l.length;++n)l[n]=-1;for(var n=0;n<r.length;++n){var u=t.find(findCell(e,[r[n][0]]));l[u]<0?(l[u]=c.length,c.push([r[n].slice(0)])):c[l[u]].push(r[n].slice(0))}return c}function connectedComponents(r,e){return e?connectedComponents_dense(r,e):connectedComponents_sparse(r)}topology.connectedComponents=connectedComponents;var ich$1=incrementalConvexHull,orient$1=orientationExports,compareCell=topology.compareCells;function Simplex(r,e,t){this.vertices=r,this.adjacent=e,this.boundary=t,this.lastVisited=-1}Simplex.prototype.flip=function(){var r=this.vertices[0];this.vertices[0]=this.vertices[1],this.vertices[1]=r;var e=this.adjacent[0];this.adjacent[0]=this.adjacent[1],this.adjacent[1]=e};function GlueFacet(r,e,t){this.vertices=r,this.cell=e,this.index=t}function compareGlue(r,e){return compareCell(r.vertices,e.vertices)}function bakeOrient(r){for(var e=["function orient(){var tuple=this.tuple;return test("],t=0;t<=r;++t)t>0&&e.push(","),e.push("tuple[",t,"]");e.push(")}return orient");var n=new Function("test",e.join("")),i=orient$1[r+1];return i||(i=orient$1),n(i)}var BAKED=[];function Triangulation(r,e,t){this.dimension=r,this.vertices=e,this.simplices=t,this.interior=t.filter(function(s){return!s.boundary}),this.tuple=new Array(r+1);for(var n=0;n<=r;++n)this.tuple[n]=this.vertices[n];var i=BAKED[r];i||(i=BAKED[r]=bakeOrient(r)),this.orient=i}var proto=Triangulation.prototype;proto.handleBoundaryDegeneracy=function(r,e){var t=this.dimension,n=this.vertices.length-1,i=this.tuple,s=this.vertices,a=[r];for(r.lastVisited=-n;a.length>0;){r=a.pop(),r.vertices;for(var o=r.adjacent,c=0;c<=t;++c){var l=o[c];if(!(!l.boundary||l.lastVisited<=-n)){for(var u=l.vertices,h=0;h<=t;++h){var d=u[h];d<0?i[h]=e:i[h]=s[d]}var f=this.orient();if(f>0)return l;l.lastVisited=-n,f===0&&a.push(l)}}}return null};proto.walk=function(r,e){var t=this.vertices.length-1,n=this.dimension,i=this.vertices,s=this.tuple,a=e?this.interior.length*Math.random()|0:this.interior.length-1,o=this.interior[a];e:for(;!o.boundary;){for(var c=o.vertices,l=o.adjacent,u=0;u<=n;++u)s[u]=i[c[u]];o.lastVisited=t;for(var u=0;u<=n;++u){var h=l[u];if(!(h.lastVisited>=t)){var d=s[u];s[u]=r;var f=this.orient();if(s[u]=d,f<0){o=h;continue e}else h.boundary?h.lastVisited=-t:h.lastVisited=t}}return}return o};proto.addPeaks=function(r,e){var t=this.vertices.length-1,n=this.dimension,i=this.vertices,s=this.tuple,a=this.interior,o=this.simplices,c=[e];e.lastVisited=t,e.vertices[e.vertices.indexOf(-1)]=t,e.boundary=!1,a.push(e);for(var l=[];c.length>0;){var e=c.pop(),u=e.vertices,h=e.adjacent,d=u.indexOf(t);if(!(d<0)){for(var f=0;f<=n;++f)if(f!==d){var p=h[f];if(!(!p.boundary||p.lastVisited>=t)){var _=p.vertices;if(p.lastVisited!==-t){for(var g=0,v=0;v<=n;++v)_[v]<0?(g=v,s[v]=r):s[v]=i[_[v]];var F=this.orient();if(F>0){_[g]=t,p.boundary=!1,a.push(p),c.push(p),p.lastVisited=t;continue}else p.lastVisited=-t}var y=p.adjacent,x=u.slice(),b=h.slice(),L=new Simplex(x,b,!0);o.push(L);var G=y.indexOf(e);if(!(G<0)){y[G]=L,b[d]=p,x[f]=-1,b[f]=e,h[f]=L,L.flip();for(var v=0;v<=n;++v){var M=x[v];if(!(M<0||M===t)){for(var S=new Array(n-1),E=0,I=0;I<=n;++I){var q=x[I];q<0||I===v||(S[E++]=q)}l.push(new GlueFacet(S,L,v))}}}}}}}l.sort(compareGlue);for(var f=0;f+1<l.length;f+=2){var Y=l[f],J=l[f+1],de=Y.index,fe=J.index;de<0||fe<0||(Y.cell.adjacent[Y.index]=J.cell,J.cell.adjacent[J.index]=Y.cell)}};proto.insert=function(r,e){var t=this.vertices;t.push(r);var n=this.walk(r,e);if(n){for(var i=this.dimension,s=this.tuple,a=0;a<=i;++a){var o=n.vertices[a];o<0?s[a]=r:s[a]=t[o]}var c=this.orient(s);c<0||c===0&&(n=this.handleBoundaryDegeneracy(n,r),!n)||this.addPeaks(r,n)}};proto.boundary=function(){for(var r=this.dimension,e=[],t=this.simplices,n=t.length,i=0;i<n;++i){var s=t[i];if(s.boundary){for(var a=new Array(r),o=s.vertices,c=0,l=0,u=0;u<=r;++u)o[u]>=0?a[c++]=o[u]:l=u&1;if(l===(r&1)){var h=a[0];a[0]=a[1],a[1]=h}e.push(a)}}return e};function incrementalConvexHull(r,e){var t=r.length;if(t===0)throw new Error("Must have at least d+1 points");var n=r[0].length;if(t<=n)throw new Error("Must input at least d+1 points");var i=r.slice(0,n+1),s=orient$1.apply(void 0,i);if(s===0)throw new Error("Input not in general position");for(var a=new Array(n+1),o=0;o<=n;++o)a[o]=o;s<0&&(a[0]=1,a[1]=0);for(var c=new Simplex(a,new Array(n+1),!1),l=c.adjacent,u=new Array(n+2),o=0;o<=n;++o){for(var h=a.slice(),d=0;d<=n;++d)d===o&&(h[d]=-1);var f=h[0];h[0]=h[1],h[1]=f;var p=new Simplex(h,new Array(n+1),!0);l[o]=p,u[o]=p}u[n+1]=c;for(var o=0;o<=n;++o)for(var h=l[o].vertices,_=l[o].adjacent,d=0;d<=n;++d){var g=h[d];if(g<0){_[d]=c;continue}for(var v=0;v<=n;++v)l[v].vertices.indexOf(g)<0&&(_[d]=l[v])}for(var F=new Triangulation(n,i,u),y=!!e,o=n+1;o<t;++o)F.insert(r[o],y);return F.boundary()}var aff$1=affineHull,orient=orientationExports;function linearlyIndependent(r,e){for(var t=new Array(e+1),n=0;n<r.length;++n)t[n]=r[n];for(var n=0;n<=r.length;++n){for(var i=r.length;i<=e;++i){for(var s=new Array(e),a=0;a<e;++a)s[a]=Math.pow(i+1-n,a);t[i]=s}var o=orient.apply(void 0,t);if(o)return!0}return!1}function affineHull(r){var e=r.length;if(e===0)return[];if(e===1)return[0];for(var t=r[0].length,n=[r[0]],i=[0],s=1;s<e;++s){if(n.push(r[s]),!linearlyIndependent(n,t)){n.pop();continue}if(i.push(s),i.length===t+1)return i}return i}var chnd=convexHullnD,ich=ich$1,aff=aff$1;function permute(r,e){for(var t=r.length,n=new Array(t),i=0;i<e.length;++i)n[i]=r[e[i]];for(var s=e.length,i=0;i<t;++i)e.indexOf(i)<0&&(n[s++]=r[i]);return n}function invPermute(r,e){for(var t=r.length,n=e.length,i=0;i<t;++i)for(var s=r[i],a=0;a<s.length;++a){var o=s[a];if(o<n)s[a]=e[o];else{o=o-n;for(var c=0;c<n;++c)o>=e[c]&&(o+=1);s[a]=o}}return r}function convexHullnD(r,e){try{return ich(r,!0)}catch{var t=aff(r);if(t.length<=e)return[];var n=permute(r,t),i=ich(n,!0);return invPermute(i,t)}}var convexHull1d=ch1d,convexHull2d=ch2d,convexHullnd=chnd,ch=convexHull;function convexHull(r){var e=r.length;if(e===0)return[];if(e===1)return[[0]];var t=r[0].length;return t===0?[]:t===1?convexHull1d(r):t===2?convexHull2d(r):convexHullnd(r,t)}Object.defineProperty(utils$6,"__esModule",{value:!0});utils$6.deg2rad=deg2rad;utils$6.rad2deg=rad2deg;utils$6.getColumn=getColumn;utils$6.sampleCircle=sampleCircle;utils$6.getCircHarmonics=getCircHarmonics;utils$6.getAmbisonicDecMtx=getAmbisonicDecMtx;utils$6.createNearestLookup=createNearestLookup;utils$6.findNearest=findNearest;utils$6.getTdesign=getTdesign;var numeric$2=numeric1_2_6,jshlib$4=src,convexhull=ch;function deg2rad(r){for(var e=[],t=Math.PI/180,n=0;n<r.length;n++)r[0].length==3?e.push([r[n][0]*t,r[n][1]*t,r[n][2]]):r[0].length==2&&e.push([r[n][0]*t,r[n][1]*t]);return e}function rad2deg(r){for(var e=[],t=180/Math.PI,n=0;n<r.length;n++)r[0].length==3?e.push([r[n][0]*t,r[n][1]*t,r[n][2]]):r[0].length==2&&e.push([r[n][0]*t,r[n][1]*t]);return e}function getColumn(r,e){return r.map(function(t){return t[e]})}function sampleCircle(r){for(var e=[],t=360/r,n=0,i=0;i<r;i++)e.push([n,0,1]),n+=t;return e}function getCircHarmonics(r,e){var t=r,n=2*t+1,i=e.length,s=new Array(n),a=new Array(i);e=numeric$2.mul(e,Math.PI/180),a.fill(1/Math.sqrt(2*Math.PI)),s[0]=a;for(var o=0;o<t;o++)s[2*o+1]=numeric$2.div(numeric$2.sin(numeric$2.mul(-(o+1),e)),Math.sqrt(Math.PI)),s[2*o+2]=numeric$2.div(numeric$2.cos(numeric$2.mul(o+1,e)),Math.sqrt(Math.PI));return s}function getAmbisonicDecMtx(r,e){for(var t=deg2rad(r),n=jshlib$4.convertSph2Cart(t),i=convexhull(n),s=i.length,a=t.length,o=new Array(s),c=0;c<s;c++){for(var l=new Array(3),u=0;u<3;u++)l[u]=n[i[c][u]];for(var h=numeric$2.inv(l),d=[],f=0;f<3;f++)for(var p=0;p<3;p++)d.push(h[p][f]);o[c]=d}var _=getTdesign(2*e),g=deg2rad(_),v=vbap3(g,i,o,a);v=numeric$2.transpose(v);var F=jshlib$4.computeRealSH(e,g);F=numeric$2.transpose(F);var y=g.length,x=numeric$2.dotMMsmall(v,F);return x=numeric$2.mul(1/y,x),x}var vbap3=function r(e,t,n,i){var s=e.length,a=i,o=t.length;function c(L){return Math.min.apply(null,L)}for(var l=new Array(s),u=jshlib$4.convertSph2Cart(e),h=0;h<s;h++){var d=u[h],f=new Array(a);f.fill(0);for(var p=0;p<o;p++){var _=[],g=[n[p][0],n[p][1],n[p][2]];if(_[0]=numeric$2.dotVV(g,d),g=[n[p][3],n[p][4],n[p][5]],_[1]=numeric$2.dotVV(g,d),g=[n[p][6],n[p][7],n[p][8]],_[2]=numeric$2.dotVV(g,d),c(_)>-.001){for(var v=Math.sqrt(numeric$2.sum(numeric$2.pow(_,2))),F=numeric$2.div(_,v),y=0;y<3;y++)f[t[p][y]]=F[y];break}}var x=Math.sqrt(numeric$2.sum(numeric$2.pow(f,2))),b=numeric$2.div(f,x);l[h]=b}return l};function createNearestLookup(r,e){var t=r.length,n=jshlib$4.convertSph2Cart(deg2rad(r)),i=Math.round(360/e[0])+1,s=Math.round(180/e[1])+1,a=new Array(i);a[0]=-180;for(var o=1;o<i;o++)a[o]=a[o-1]+e[0];for(var c=i*s,l=new Array(c),u=0;u<c;u++)for(var h=[[u%i*e[0]-180,Math.floor(u/i)*e[1]-90]],d=jshlib$4.convertSph2Cart(deg2rad(h)),f=1e3,p=0;p<t;p++){var _=numeric$2.sum(numeric$2.pow(numeric$2.sub(d[0],n[p]),2));_<f&&(l[u]=p,f=_)}return l}function findNearest(r,e,t){for(var n=r.length,i=[],s=[],a=0;a<n;a++)i.push(r[a][0]+180),s.push(r[a][1]+90);for(var o=Math.round(360/t[0])+1,c=numeric$2.round(numeric$2.div(numeric$2.mod(i,360),t[0])),l=numeric$2.round(numeric$2.div(s,t[1])),u=numeric$2.add(numeric$2.mul(l,o),c,1),h=[],d=0;d<n;d++)h.push(e[u[d]]);return h}function getTdesign(r){if(r>21)throw new Error("Designs of order greater than 21 are not implemented");if(r<1)throw new Error("Order should be at least 1");var e=[[[0,0,1],[180,0,1]],[[45,35.26,1],[-45,-35.26,1],[135,-35.26,1],[-135,35.26,1]],[[0,0,1],[180,0,1],[90,0,1],[-90,0,1],[0,90,1],[0,-90,1]],[[0,-31.72,1],[-58.28,0,1],[-90,58.28,1],[0,31.72,1],[-121.72,0,1],[90,-58.28,1],[180,-31.72,1],[121.72,0,1],[90,58.28,1],[180,31.72,1],[58.28,0,1],[-90,-58.28,1]],[[0,-31.72,1],[-58.28,0,1],[-90,58.28,1],[0,31.72,1],[-121.72,0,1],[90,-58.28,1],[180,-31.72,1],[121.72,0,1],[90,58.28,1],[180,31.72,1],[58.28,0,1],[-90,-58.28,1]],[[26,15.46,1],[-26,-15.46,1],[17.11,-24.99,1],[-17.11,24.99,1],[154,-15.46,1],[-154,15.46,1],[162.89,24.99,1],[-162.89,-24.99,1],[72.89,24.99,1],[107.11,-24.99,1],[116,15.46,1],[64,-15.46,1],[-107.11,24.99,1],[-72.89,-24.99,1],[-64,15.46,1],[-116,-15.46,1],[32.25,60.03,1],[-147.75,60.03,1],[-57.75,60.03,1],[122.25,60.03,1],[-32.25,-60.03,1],[147.75,-60.03,1],[57.75,-60.03,1],[-122.25,-60.03,1]],[[26,15.46,1],[-26,-15.46,1],[17.11,-24.99,1],[-17.11,24.99,1],[154,-15.46,1],[-154,15.46,1],[162.89,24.99,1],[-162.89,-24.99,1],[72.89,24.99,1],[107.11,-24.99,1],[116,15.46,1],[64,-15.46,1],[-107.11,24.99,1],[-72.89,-24.99,1],[-64,15.46,1],[-116,-15.46,1],[32.25,60.03,1],[-147.75,60.03,1],[-57.75,60.03,1],[122.25,60.03,1],[-32.25,-60.03,1],[147.75,-60.03,1],[57.75,-60.03,1],[-122.25,-60.03,1]],[[-31.11,53.65,1],[110.82,30.5,1],[148.89,53.65,1],[32.21,-17.83,1],[69.18,-30.5,1],[-32.21,17.83,1],[-69.18,30.5,1],[-147.79,-17.83,1],[-110.82,-30.5,1],[147.79,17.83,1],[31.11,-53.65,1],[-148.89,-53.65,1],[-21.25,-47.78,1],[-108.2,38.78,1],[158.75,-47.78,1],[139.77,-14.09,1],[-71.8,-38.78,1],[-139.77,14.09,1],[71.8,38.78,1],[-40.23,-14.09,1],[108.2,-38.78,1],[40.23,14.09,1],[21.25,47.78,1],[-158.75,47.78,1],[106.65,-2.55,1],[-2.66,-16.63,1],[-73.35,-2.55,1],[-98.84,73.16,1],[-177.34,16.63,1],[98.84,-73.16,1],[177.34,-16.63,1],[81.16,73.16,1],[2.66,16.63,1],[-81.16,-73.16,1],[-106.65,2.55,1],[73.35,2.55,1]],[[20.75,-3.55,1],[-20.75,3.55,1],[-3.8,-20.7,1],[3.8,20.7,1],[159.25,3.55,1],[-159.25,-3.55,1],[-176.2,20.7,1],[176.2,-20.7,1],[93.8,20.7,1],[86.2,-20.7,1],[110.75,-3.55,1],[69.25,3.55,1],[-86.2,20.7,1],[-93.8,-20.7,1],[-69.25,-3.55,1],[-110.75,3.55,1],[-9.94,68.97,1],[170.06,68.97,1],[-99.94,68.97,1],[80.06,68.97,1],[9.94,-68.97,1],[-170.06,-68.97,1],[99.94,-68.97,1],[-80.06,-68.97,1],[42.15,17.57,1],[-42.15,-17.57,1],[23.12,-39.77,1],[-23.12,39.77,1],[137.85,-17.57,1],[-137.85,17.57,1],[156.88,39.77,1],[-156.88,-39.77,1],[66.88,39.77,1],[113.12,-39.77,1],[132.15,17.57,1],[47.85,-17.57,1],[-113.12,39.77,1],[-66.88,-39.77,1],[-47.85,17.57,1],[-132.15,-17.57,1],[25.26,44.98,1],[-154.74,44.98,1],[-64.74,44.98,1],[115.26,44.98,1],[-25.26,-44.98,1],[154.74,-44.98,1],[64.74,-44.98,1],[-115.26,-44.98,1]],[[144.09,-21.45,1],[-33.81,-48.92,1],[-35.91,-21.45,1],[-115.87,33.09,1],[-146.19,48.92,1],[115.87,-33.09,1],[146.19,-48.92,1],[64.13,33.09,1],[33.81,48.92,1],[-64.13,-33.09,1],[-144.09,21.45,1],[35.91,21.45,1],[-45.53,1.95,1],[177.26,44.44,1],[134.47,1.95,1],[87.21,-45.49,1],[2.74,-44.44,1],[-87.21,45.49,1],[-2.74,44.44,1],[-92.79,-45.49,1],[-177.26,-44.44,1],[92.79,45.49,1],[45.53,-1.95,1],[-134.47,-1.95,1],[15.59,-73.34,1],[-85.4,16.04,1],[-164.41,-73.34,1],[163.92,4.42,1],[-94.6,-16.04,1],[-163.92,-4.42,1],[94.6,16.04,1],[-16.08,4.42,1],[85.4,-16.04,1],[16.08,-4.42,1],[-15.59,73.34,1],[164.41,73.34,1],[-60.02,25.27,1],[151.41,26.86,1],[119.98,25.27,1],[46.63,-51.57,1],[28.59,-26.86,1],[-46.63,51.57,1],[-28.59,26.86,1],[-133.37,-51.57,1],[-151.41,-26.86,1],[133.37,51.57,1],[60.02,-25.27,1],[-119.98,-25.27,1],[-109.94,6.91,1],[172.65,-19.79,1],[70.06,6.91,1],[-70.44,-68.94,1],[7.35,19.79,1],[70.44,68.94,1],[-7.35,-19.79,1],[109.56,-68.94,1],[-172.65,19.79,1],[-109.56,68.94,1],[109.94,-6.91,1],[-70.06,-6.91,1]],[[132.93,7.69,1],[-83.93,-23.73,1],[8.47,23.51,1],[-113.34,70.42,1],[-103.27,-9.9,1],[-33.24,-70.75,1],[21.86,-26.46,1],[-156.54,47.78,1],[-64.26,-7.72,1],[165.78,44.53,1],[-25.2,26.39,1],[-97,-44.66,1],[27.85,9.77,1],[153.21,-47.71,1],[-155.06,7.45,1],[-11.84,-23.59,1],[80.54,23.72,1],[-42.06,70.44,1],[-31.22,-9.84,1],[38.84,-70.5,1],[93.76,-26.29,1],[-84.76,47.61,1],[7.76,-7.52,1],[-122.28,44.29,1],[46.8,26.64,1],[-24.77,-44.57,1],[99.89,9.91,1],[-134.78,-47.96,1],[-83.09,7.3,1],[60.13,-23.34,1],[152.64,23.64,1],[29.76,70.68,1],[40.78,-9.58,1],[110.18,-70.39,1],[165.65,-26.43,1],[-12.99,47.75,1],[79.74,-7.31,1],[-50.52,44.26,1],[118.92,26.71,1],[47.22,-44.31,1],[171.93,9.76,1],[-62.51,-48.04,1],[-11.12,7.44,1],[132.02,-23.33,1],[-135.36,23.39,1],[102.37,70.82,1],[112.74,-9.49,1],[-178.3,-70.58,1],[-122.32,-26.67,1],[59.08,48,1],[151.7,-7.38,1],[21.38,44.5,1],[-169.01,26.5,1],[118.98,-44.25,1],[-116.09,9.52,1],[9.65,-47.83,1],[60.89,7.68,1],[-156.02,-23.57,1],[-63.46,23.31,1],[174.93,70.66,1],[-175.29,-9.68,1],[-105.95,-70.8,1],[-50.19,-26.7,1],[131.36,48.01,1],[-136.3,-7.64,1],[93.56,44.67,1],[-97.08,26.3,1],[-169.16,-44.46,1],[-44.13,9.52,1],[81.48,-47.62,1]],[[-154.47,7.9,1],[162.15,-63.36,1],[25.53,7.9,1],[-81.26,-25.27,1],[17.85,63.36,1],[81.26,25.27,1],[-17.85,-63.36,1],[98.74,-25.27,1],[-162.15,63.36,1],[-98.74,25.27,1],[154.47,-7.9,1],[-25.53,-7.9,1],[1.3,-10.47,1],[-83.01,79.45,1],[-178.7,-10.47,1],[100.48,1.28,1],[-96.99,-79.45,1],[-100.48,-1.28,1],[96.99,79.45,1],[-79.52,1.28,1],[83.01,-79.45,1],[79.52,-1.28,1],[-1.3,10.47,1],[178.7,10.47,1],[157.24,13.15,1],[31.14,-63.89,1],[-22.76,13.15,1],[-75.78,22.13,1],[148.86,63.89,1],[75.78,-22.13,1],[-148.86,-63.89,1],[104.22,22.13,1],[-31.14,63.89,1],[-104.22,-22.13,1],[-157.24,-13.15,1],[22.76,-13.15,1],[110.44,-60.62,1],[-62.18,-9.87,1],[-69.56,-60.62,1],[-168.88,27.37,1],[-117.82,9.87,1],[168.88,-27.37,1],[117.82,-9.87,1],[11.12,27.37,1],[62.18,9.87,1],[-11.12,-27.37,1],[-110.44,60.62,1],[69.56,60.62,1],[-125.93,-47.4,1],[-126.67,-23.4,1],[54.07,-47.4,1],[-151.65,-33.24,1],[-53.33,23.4,1],[151.65,33.24,1],[53.33,-23.4,1],[28.35,-33.24,1],[126.67,23.4,1],[-28.35,33.24,1],[125.93,47.4,1],[-54.07,47.4,1],[61.41,37.54,1],[41.19,22.3,1],[-118.59,37.54,1],[31.92,44.13,1],[138.81,-22.3,1],[-31.92,-44.13,1],[-138.81,22.3,1],[-148.08,44.13,1],[-41.19,-22.3,1],[148.08,-44.13,1],[-61.41,-37.54,1],[118.59,-37.54,1],[132.92,4.73,1],[6.45,-42.74,1],[-47.08,4.73,1],[-83.07,46.87,1],[173.55,42.74,1],[83.07,-46.87,1],[-173.55,-42.74,1],[96.93,46.87,1],[-6.45,42.74,1],[-96.93,-46.87,1],[-132.92,-4.73,1],[47.08,-4.73,1]],[[-40.36,68.7,1],[61.12,65.68,1],[141.73,70.75,1],[-131.25,72.32,1],[-154.88,-12.62,1],[-66.2,-9.78,1],[26.36,-11.97,1],[114.95,-12.58,1],[37.02,51.13,1],[129.77,51.95,1],[-140.63,50.15,1],[-56.5,47.88,1],[-65.05,12.58,1],[25.12,12.62,1],[113.8,9.78,1],[-153.64,11.97,1],[-134.51,-9.73,1],[-46.23,-8.37,1],[47.91,-9.73,1],[141.51,-8.73,1],[-17.84,-44.1,1],[69.37,-43.27,1],[151.22,-42.67,1],[-106.78,-40.18,1],[-50.23,-51.95,1],[39.37,-50.15,1],[123.5,-47.88,1],[-142.98,-51.13,1],[-179.19,-60.75,1],[-84.57,-54.07,1],[5.39,-58.05,1],[89.5,-60.75,1],[-145.98,31.02,1],[-54.39,26.43,1],[28.92,32.51,1],[125.34,30.94,1],[168.71,-7.06,1],[-112.49,-10.38,1],[-21.96,-9.6,1],[73.11,-8.31,1],[95.68,.04,1],[-170.71,2.32,1],[-84.32,-.04,1],[9.29,-2.32,1],[9.19,-34.33,1],[98.21,-37.31,1],[-179.2,-40.48,1],[-77.81,-31.6,1],[-177.08,-21.74,1],[-93.77,-18.83,1],[-2.72,-19.8,1],[90.51,-20.91,1],[-106.89,8.31,1],[-11.29,7.06,1],[67.51,10.38,1],[158.04,9.6,1],[-118.88,-65.68,1],[-38.27,-70.75,1],[48.75,-72.32,1],[139.64,-68.7,1],[-54.66,-30.94,1],[34.02,-31.02,1],[125.61,-26.43,1],[-151.08,-32.51,1],[-170.81,34.33,1],[-81.79,37.31,1],[.8,40.48,1],[102.19,31.6,1],[-28.78,42.67,1],[73.22,40.18,1],[162.16,44.1,1],[-110.63,43.27,1],[-89.49,20.91,1],[2.92,21.74,1],[86.23,18.83,1],[177.28,19.8,1],[133.77,8.37,1],[-132.09,9.73,1],[-38.49,8.73,1],[45.49,9.73,1],[-25.6,24.04,1],[55.12,30.23,1],[149.3,28.05,1],[-118.71,26.06,1],[.81,60.75,1],[95.43,54.07,1],[-174.61,58.05,1],[-90.5,60.75,1],[-124.88,-30.23,1],[-30.7,-28.05,1],[61.29,-26.06,1],[154.4,-24.04,1],[-132.92,-85.6,1],[47.08,85.6,1]],[[-129.19,8.11,1],[169.58,-38.73,1],[50.81,8.12,1],[-77.27,-50.11,1],[10.42,38.73,1],[77.3,50.12,1],[-10.41,-38.72,1],[102.71,-50.11,1],[-169.57,38.72,1],[-102.71,50.11,1],[129.19,-8.11,1],[-50.8,-8.11,1],[-4.59,-56.01,1],[-93.1,33.85,1],[175.39,-56.03,1],[146.11,-2.57,1],[-86.89,-33.86,1],[-146.1,2.56,1],[86.91,33.86,1],[-33.89,-2.57,1],[93.1,-33.85,1],[33.9,2.58,1],[4.6,56.03,1],[-175.38,56.01,1],[106.57,26.1,1],[27.07,-14.82,1],[-73.44,26.09,1],[-30.2,59.41,1],[152.94,14.83,1],[30.2,-59.4,1],[-152.93,-14.84,1],[149.82,59.41,1],[-27.06,14.83,1],[-149.8,-59.42,1],[-106.55,-26.1,1],[73.44,-26.09,1],[-171.42,77.45,1],[91.9,-12.4,1],[8.54,77.46,1],[-12.4,-1.85,1],[88.11,12.41,1],[12.41,1.86,1],[-88.1,-12.41,1],[167.6,-1.86,1],[-91.89,12.4,1],[-167.59,1.84,1],[171.43,-77.46,1],[-8.52,-77.45,1],[-122.73,-10.44,1],[-167.65,-32.13,1],[57.27,-10.43,1],[-108.8,-55.83,1],[-12.35,32.13,1],[108.83,55.83,1],[12.36,-32.12,1],[71.19,-55.82,1],[167.66,32.12,1],[-71.19,55.82,1],[122.74,10.44,1],[-57.27,10.44,1],[-135.84,-23.05,1],[-148.58,-41.32,1],[44.16,-23.04,1],[-120.66,-39.88,1],[-31.41,41.31,1],[120.68,39.87,1],[31.42,-41.3,1],[59.33,-39.86,1],[148.6,41.31,1],[-59.33,39.87,1],[135.85,23.05,1],[-44.16,23.05,1],[-161.55,20.62,1],[130.04,-62.6,1],[18.45,20.64,1],[-68.35,-17.23,1],[49.96,62.61,1],[68.36,17.23,1],[-49.93,-62.6,1],[111.65,-17.22,1],[-130.05,62.59,1],[-111.64,17.22,1],[161.56,-20.63,1],[-18.44,-20.62,1],[-105.23,-3.38,1],[-176.5,-15.21,1],[74.77,-3.37,1],[-102.64,-74.41,1],[-3.5,15.21,1],[102.69,74.41,1],[3.51,-15.2,1],[77.33,-74.4,1],[176.51,15.2,1],[-77.36,74.4,1],[105.24,3.38,1],[-74.76,3.37,1],[-142.39,25.42,1],[142.08,-45.69,1],[37.61,25.43,1],[-59.02,-33.44,1],[37.92,45.69,1],[59.04,33.45,1],[-37.91,-45.68,1],[120.97,-33.44,1],[-142.07,45.68,1],[-120.96,33.44,1],[142.4,-25.43,1],[-37.6,-25.42,1]],[[-30.6,6.94,1],[166.56,58.69,1],[149.4,6.96,1],[81.95,-30.36,1],[13.48,-58.69,1],[-81.93,30.36,1],[-13.46,58.68,1],[-98.06,-30.37,1],[-166.54,-58.68,1],[98.07,30.37,1],[30.62,-6.95,1],[-149.38,-6.95,1],[106.69,-22.68,1],[-23.57,-15.36,1],[-73.31,-22.69,1],[-145.5,62.1,1],[-156.41,15.36,1],[145.53,-62.1,1],[156.43,-15.35,1],[34.47,62.11,1],[23.58,15.36,1],[-34.46,-62.11,1],[-106.67,22.68,1],[73.33,22.69,1],[166.82,1.39,1],[6.09,-76.74,1],[-13.19,1.38,1],[-88.57,13.18,1],[173.99,76.74,1],[88.59,-13.18,1],[-173.97,-76.73,1],[91.43,13.2,1],[-6.07,76.73,1],[-91.42,-13.2,1],[-166.8,-1.38,1],[13.2,-1.39,1],[-74.67,48.11,1],[130.86,10.16,1],[105.32,48.13,1],[13.34,-40.08,1],[49.16,-10.15,1],[-13.32,40.07,1],[-49.14,10.15,1],[-166.67,-40.08,1],[-130.84,-10.16,1],[166.69,40.08,1],[74.7,-48.11,1],[-105.31,-48.13,1],[-126.99,26.55,1],[147.96,-32.57,1],[53,26.56,1],[-50.28,-45.59,1],[32.05,32.58,1],[50.3,45.59,1],[-32.03,-32.58,1],[129.71,-45.58,1],[-147.94,32.57,1],[-129.69,45.58,1],[127.02,-26.55,1],[-52.98,-26.56,1],[-171.93,30.37,1],[103.47,-58.68,1],[8.07,30.36,1],[-59.38,-6.96,1],[76.54,58.69,1],[59.4,6.95,1],[-76.53,-58.69,1],[120.62,-6.94,1],[-103.44,58.68,1],[-120.6,6.95,1],[171.94,-30.36,1],[-8.05,-30.37,1],[40.86,10.16,1],[15.32,48.12,1],[-139.14,10.16,1],[76.68,40.09,1],[164.69,-48.12,1],[-76.67,-40.09,1],[-164.67,48.12,1],[-103.31,40.07,1],[-15.3,-48.13,1],[103.34,-40.07,1],[-40.84,-10.16,1],[139.16,-10.15,1],[103.2,-1.38,1],[-1.41,-13.19,1],[-76.8,-1.39,1],[-96.02,76.73,1],[-178.57,13.19,1],[96.07,-76.73,1],[178.58,-13.19,1],[83.94,76.74,1],[1.43,13.19,1],[-83.95,-76.74,1],[-103.18,1.38,1],[76.81,1.39,1],[37.02,-26.56,1],[-39.7,45.58,1],[-142.99,-26.56,1],[122.05,32.58,1],[-140.29,-45.59,1],[-122.04,-32.58,1],[140.31,45.59,1],[-57.95,32.57,1],[39.72,-45.58,1],[57.97,-32.57,1],[-37,26.55,1],[143,26.56,1],[163.33,22.69,1],[55.55,-62.1,1],[-16.67,22.68,1],[-66.41,15.35,1],[124.49,62.11,1],[66.43,-15.35,1],[-124.48,-62.11,1],[113.58,15.36,1],[-55.52,62.1,1],[-113.57,-15.36,1],[-163.31,-22.68,1],[16.69,-22.69,1]],[[-10.57,-17.35,1],[-120.42,69.76,1],[169.43,-17.35,1],[107.63,-10.08,1],[-59.57,-69.78,1],[-107.63,10.08,1],[59.57,69.78,1],[-72.37,-10.09,1],[120.42,-69.76,1],[72.37,10.09,1],[10.57,17.35,1],[-169.43,17.35,1],[-30.77,68.25,1],[101.53,18.57,1],[149.25,68.26,1],[18.92,-10.92,1],[78.47,-18.56,1],[-18.92,10.92,1],[-78.47,18.56,1],[-161.09,-10.92,1],[-101.53,-18.56,1],[161.09,10.92,1],[30.78,-68.26,1],[-149.26,-68.26,1],[56.46,41.26,1],[46.46,24.54,1],[-123.53,41.26,1],[32.19,38.8,1],[133.53,-24.53,1],[-32.19,-38.8,1],[-133.53,24.53,1],[-147.8,38.8,1],[-46.46,-24.54,1],[147.8,-38.8,1],[-56.46,-41.27,1],[123.53,-41.26,1],[84.74,27.31,1],[27.41,4.68,1],[-95.26,27.3,1],[10.06,62.23,1],[152.59,-4.67,1],[-10.06,-62.23,1],[-152.59,4.67,1],[-169.92,62.23,1],[-27.4,-4.68,1],[169.92,-62.22,1],[-84.74,-27.31,1],[95.26,-27.3,1],[136.27,-.73,1],[-1.05,-46.27,1],[-43.73,-.74,1],[-91.01,43.72,1],[-178.94,46.27,1],[91.01,-43.72,1],[178.94,-46.27,1],[88.99,43.73,1],[1.05,46.27,1],[-88.99,-43.73,1],[-136.27,.73,1],[43.73,.73,1],[55.23,10.82,1],[13.09,34.07,1],[-124.77,10.81,1],[71.48,53.8,1],[166.91,-34.06,1],[-71.48,-53.8,1],[-166.9,34.06,1],[-108.52,53.79,1],[-13.09,-34.06,1],[108.52,-53.79,1],[-55.23,-10.82,1],[124.77,-10.81,1],[-105.49,-68.13,1],[-111.15,-5.71,1],[74.52,-68.12,1],[-173.89,-21.04,1],[-68.85,5.7,1],[173.89,21.04,1],[68.85,-5.7,1],[6.12,-21.04,1],[111.15,5.71,1],[-6.12,21.04,1],[105.49,68.13,1],[-74.52,68.12,1],[35.28,-15.18,1],[-25.17,51.98,1],[-144.72,-15.19,1],[108.39,33.88,1],[-154.84,-51.99,1],[-108.39,-33.88,1],[154.84,51.99,1],[-71.61,33.87,1],[25.17,-51.98,1],[71.61,-33.87,1],[-35.28,15.18,1],[144.72,15.19,1],[-125.28,-28.56,1],[-146.32,-30.49,1],[54.72,-28.55,1],[-133.29,-45.82,1],[-33.69,30.48,1],[133.3,45.82,1],[33.68,-30.48,1],[46.71,-45.81,1],[146.32,30.49,1],[-46.71,45.81,1],[125.28,28.56,1],[-54.72,28.54,1],[-144.4,54.71,1],[112.38,-28.01,1],[35.58,54.72,1],[-29.92,-19.65,1],[67.62,28.02,1],[29.92,19.65,1],[-67.62,-28.02,1],[150.08,-19.64,1],[-112.38,28.01,1],[-150.08,19.64,1],[144.4,-54.71,1],[-35.58,-54.72,1],[68.53,-52.85,1],[-54.82,12.76,1],[-111.46,-52.87,1],[164.51,34.19,1],[-125.18,-12.77,1],[-164.51,-34.19,1],[125.18,12.77,1],[-15.5,34.19,1],[54.82,-12.76,1],[15.49,-34.19,1],[-68.53,52.85,1],[111.47,52.86,1],[91.48,-7.37,1],[-7.38,-1.47,1],[-88.52,-7.38,1],[-168.69,82.47,1],[-172.62,1.47,1],[168.69,-82.47,1],[172.62,-1.46,1],[11.22,82.48,1],[7.38,1.47,1],[-11.21,-82.48,1],[-91.48,7.37,1],[88.52,7.38,1]],[[-110.97,-81.34,1],[-98.09,-3.09,1],[69.03,-81.34,1],[-176.88,-8.08,1],[-81.91,3.09,1],[176.88,8.08,1],[81.91,-3.09,1],[3.12,-8.08,1],[98.09,3.09,1],[-3.12,8.08,1],[110.97,81.34,1],[-69.03,81.34,1],[145.76,30.52,1],[46.33,-45.41,1],[-34.24,30.52,1],[-54.51,28.99,1],[133.67,45.41,1],[54.51,-28.99,1],[-133.67,-45.41,1],[125.49,28.99,1],[-46.33,45.41,1],[-125.49,-28.99,1],[-145.76,-30.52,1],[34.24,-30.52,1],[159.58,41.4,1],[68.4,-44.67,1],[-20.42,41.4,1],[-46.75,15.18,1],[111.6,44.67,1],[46.75,-15.18,1],[-111.6,-44.67,1],[133.25,15.18,1],[-68.4,44.67,1],[-133.25,-15.18,1],[-159.58,-41.4,1],[20.42,-41.4,1],[85.43,-37.93,1],[-38.02,3.6,1],[-94.57,-37.93,1],[174.17,51.83,1],[-141.98,-3.6,1],[-174.17,-51.83,1],[141.98,3.6,1],[-5.83,51.83,1],[38.02,-3.6,1],[5.83,-51.83,1],[-85.43,37.93,1],[94.57,37.93,1],[21.18,27.17,1],[54.86,56.05,1],[-158.82,27.17,1],[61.17,18.75,1],[125.14,-56.05,1],[-61.17,-18.75,1],[-125.14,56.05,1],[-118.83,18.75,1],[-54.86,-56.05,1],[118.83,-18.75,1],[-21.18,-27.17,1],[158.82,-27.17,1],[104.66,-9.56,1],[-9.88,-14.45,1],[-75.34,-9.56,1],[-123.65,72.56,1],[-170.12,14.45,1],[123.65,-72.56,1],[170.12,-14.45,1],[56.35,72.56,1],[9.88,14.45,1],[-56.35,-72.56,1],[-104.66,9.56,1],[75.34,9.56,1],[25.94,-16.83,1],[-34.66,59.4,1],[-154.06,-16.83,1],[108.59,24.75,1],[-145.34,-59.41,1],[-108.59,-24.75,1],[145.34,59.41,1],[-71.41,24.75,1],[34.66,-59.41,1],[71.41,-24.75,1],[-25.94,16.83,1],[154.06,16.83,1],[-100.89,26.49,1],[153.1,-9.74,1],[79.11,26.49,1],[-20.77,-61.51,1],[26.9,9.74,1],[20.77,61.51,1],[-26.9,-9.74,1],[159.23,-61.51,1],[-153.1,9.74,1],[-159.23,61.51,1],[100.89,-26.49,1],[-79.11,-26.49,1],[44.31,12.28,1],[17.3,44.36,1],[-135.69,12.28,1],[73.08,43.05,1],[162.7,-44.36,1],[-73.08,-43.05,1],[-162.7,44.36,1],[-106.92,43.05,1],[-17.3,-44.36,1],[106.92,-43.05,1],[-44.31,-12.28,1],[135.69,-12.28,1],[-169.08,-24.53,1],[-112.54,-63.29,1],[10.92,-24.53,1],[-114.93,-9.92,1],[-67.46,63.28,1],[114.93,9.92,1],[67.46,-63.29,1],[65.07,-9.92,1],[112.54,63.29,1],[-65.07,9.92,1],[169.08,24.53,1],[-10.92,24.53,1],[93.2,-57.39,1],[-57.43,-1.73,1],[-86.8,-57.39,1],[-177.95,32.55,1],[-122.57,1.73,1],[177.95,-32.55,1],[122.57,-1.73,1],[2.05,32.55,1],[57.43,1.73,1],[-2.05,-32.55,1],[-93.2,57.39,1],[86.8,57.39,1],[-17.59,3.04,1],[170.04,72.16,1],[162.41,3.04,1],[86.81,-17.56,1],[9.96,-72.16,1],[-86.81,17.56,1],[-9.96,72.16,1],[-93.19,-17.56,1],[-170.04,-72.16,1],[93.19,17.56,1],[17.59,-3.04,1],[-162.41,-3.04,1],[39.38,44.26,1],[56.93,33.61,1],[-140.62,44.26,1],[38.42,27.03,1],[123.07,-33.61,1],[-38.42,-27.03,1],[-123.07,33.61,1],[-141.58,27.03,1],[-56.93,-33.61,1],[141.58,-27.03,1],[-39.38,-44.26,1],[140.62,-44.26,1]],[[165.52,26.52,1],[63.39,-60.04,1],[-14.48,26.52,1],[-62.74,12.93,1],[116.61,60.04,1],[62.74,-12.93,1],[-116.61,-60.04,1],[117.26,12.93,1],[-63.39,60.04,1],[-117.26,-12.93,1],[-165.52,-26.52,1],[14.48,-26.52,1],[-150.22,-21.62,1],[-141.41,-53.79,1],[29.78,-21.62,1],[-114.55,-27.5,1],[-38.59,53.79,1],[114.55,27.5,1],[38.59,-53.79,1],[65.45,-27.5,1],[141.41,53.79,1],[-65.45,27.5,1],[150.22,21.62,1],[-29.78,21.62,1],[-163.47,81.91,1],[92.31,-7.75,1],[16.53,81.91,1],[-7.76,-2.29,1],[87.69,7.75,1],[7.76,2.29,1],[-87.69,-7.75,1],[172.24,-2.29,1],[-92.31,7.75,1],[-172.24,2.29,1],[163.47,-81.91,1],[-16.53,-81.91,1],[-79.91,-73.49,1],[-106.27,2.85,1],[100.09,-73.49,1],[177.03,-16.24,1],[-73.73,-2.85,1],[-177.03,16.24,1],[73.73,2.85,1],[-2.97,-16.24,1],[106.27,-2.85,1],[2.97,16.24,1],[79.91,73.49,1],[-100.09,73.49,1],[-43.19,73.63,1],[101.37,11.86,1],[136.81,73.63,1],[12.09,-11.12,1],[78.63,-11.86,1],[-12.09,11.12,1],[-78.63,11.86,1],[-167.91,-11.12,1],[-101.37,-11.86,1],[167.91,11.12,1],[43.19,-73.63,1],[-136.81,-73.63,1],[109.86,-34.83,1],[-36.5,-16.19,1],[-70.14,-34.83,1],[-153.97,50.53,1],[-143.5,16.19,1],[153.97,-50.53,1],[143.5,-16.19,1],[26.03,50.53,1],[36.5,16.19,1],[-26.03,-50.53,1],[-109.86,34.83,1],[70.14,34.83,1],[-23.31,-6.54,1],[-163.84,65.83,1],[156.69,-6.54,1],[97.12,-23.15,1],[-16.16,-65.83,1],[-97.12,23.15,1],[16.16,65.83,1],[-82.88,-23.15,1],[163.84,-65.83,1],[82.88,23.15,1],[23.31,6.54,1],[-156.69,6.54,1],[-.87,-31.92,1],[-91.4,58.07,1],[179.13,-31.92,1],[121.93,-.74,1],[-88.6,-58.07,1],[-121.93,.74,1],[88.6,58.07,1],[-58.07,-.74,1],[91.4,-58.07,1],[58.07,.74,1],[.87,31.92,1],[-179.13,31.92,1],[163.12,43.35,1],[72.9,-44.1,1],[-16.88,43.35,1],[-45.39,12.19,1],[107.1,44.1,1],[45.39,-12.19,1],[-107.1,-44.1,1],[134.61,12.19,1],[-72.9,44.1,1],[-134.61,-12.19,1],[-163.12,-43.35,1],[16.88,-43.35,1],[-114.23,50.37,1],[127.06,-15.17,1],[65.77,50.37,1],[-18.77,-35.57,1],[52.94,15.17,1],[18.77,35.57,1],[-52.94,-15.17,1],[161.23,-35.57,1],[-127.06,15.17,1],[-161.23,35.57,1],[114.23,-50.37,1],[-65.77,-50.37,1],[54.17,30.16,1],[35.63,30.41,1],[-125.83,30.16,1],[45.21,44.51,1],[144.37,-30.41,1],[-45.21,-44.51,1],[-144.37,30.41,1],[-134.79,44.51,1],[-35.63,-30.41,1],[134.79,-44.51,1],[-54.17,-30.16,1],[125.83,-30.16,1],[126.2,41.73,1],[47.86,-26.15,1],[-53.8,41.73,1],[-33.51,37.03,1],[132.14,26.15,1],[33.51,-37.03,1],[-132.14,-26.15,1],[146.49,37.03,1],[-47.86,26.15,1],[-146.49,-37.03,1],[-126.2,-41.73,1],[53.8,-41.73,1],[-161.75,20.38,1],[130.12,-62.91,1],[18.25,20.38,1],[-68.63,-17.07,1],[49.88,62.91,1],[68.63,17.07,1],[-49.88,-62.91,1],[111.37,-17.07,1],[-130.12,62.91,1],[-111.37,17.07,1],[161.75,-20.38,1],[-18.25,-20.38,1],[2.71,48.49,1],[87.6,41.45,1],[-177.29,48.49,1],[41.48,1.8,1],[92.4,-41.45,1],[-41.48,-1.8,1],[-92.4,41.45,1],[-138.52,1.8,1],[-87.6,-41.45,1],[138.52,-1.8,1],[-2.71,-48.49,1],[177.29,-48.49,1],[-98.15,-27.54,1],[-152.22,-7.22,1],[81.85,-27.54,1],[-164.79,-61.37,1],[-27.78,7.22,1],[164.79,61.37,1],[27.78,-7.22,1],[15.21,-61.37,1],[152.22,7.22,1],[-15.21,61.37,1],[98.15,27.54,1],[-81.85,27.54,1]],[[-40.48,43.36,1],[124.51,33.58,1],[139.52,43.36,1],[38.85,-28.17,1],[55.49,-33.58,1],[-38.85,28.17,1],[-55.49,33.58,1],[-141.15,-28.17,1],[-124.51,-33.58,1],[141.15,28.17,1],[40.48,-43.36,1],[-139.52,-43.36,1],[56.01,17.18,1],[20.46,32.29,1],[-123.99,17.18,1],[61.05,52.38,1],[159.54,-32.29,1],[-61.05,-52.38,1],[-159.54,32.29,1],[-118.95,52.38,1],[-20.46,-32.29,1],[118.95,-52.38,1],[-56.01,-17.18,1],[123.99,-17.18,1],[-179.51,-8.95,1],[-93.08,-81.04,1],[.49,-8.95,1],[-98.95,-.48,1],[-86.92,81.04,1],[98.95,.48,1],[86.92,-81.04,1],[81.05,-.48,1],[93.08,81.04,1],[-81.05,.48,1],[179.51,8.95,1],[-.49,8.95,1],[12.04,-13.56,1],[-49.15,71.95,1],[-167.96,-13.56,1],[103.85,11.7,1],[-130.85,-71.95,1],[-103.85,-11.7,1],[130.85,71.95,1],[-76.15,11.7,1],[49.15,-71.95,1],[76.15,-11.7,1],[-12.04,13.56,1],[167.96,13.56,1],[-13.62,-58.2,1],[-98.3,30.8,1],[166.38,-58.2,1],[148.93,-7.13,1],[-81.7,-30.8,1],[-148.93,7.13,1],[81.7,30.8,1],[-31.07,-7.13,1],[98.3,-30.8,1],[31.07,7.13,1],[13.62,58.2,1],[-166.38,58.2,1],[65.26,-20.55,1],[-22.43,23.07,1],[-114.74,-20.55,1],[131.85,58.26,1],[-157.57,-23.07,1],[-131.85,-58.26,1],[157.57,23.07,1],[-48.15,58.26,1],[22.43,-23.07,1],[48.15,-58.26,1],[-65.26,20.55,1],[114.74,20.55,1],[-135.39,26.5,1],[144.63,-39.58,1],[44.61,26.5,1],[-55,-38.94,1],[35.37,39.58,1],[55,38.94,1],[-35.37,-39.58,1],[125,-38.94,1],[-144.63,39.58,1],[-125,38.94,1],[135.39,-26.5,1],[-44.61,-26.5,1],[114.95,-4.75,1],[-5.23,-24.86,1],[-65.05,-4.75,1],[-101.14,64.63,1],[-174.77,24.86,1],[101.14,-64.63,1],[174.77,-24.86,1],[78.86,64.63,1],[5.23,24.86,1],[-78.86,-64.63,1],[-114.95,4.75,1],[65.05,4.75,1],[35.85,52.64,1],[65.91,29.46,1],[-144.15,52.64,1],[31.75,20.82,1],[114.09,-29.46,1],[-31.75,-20.82,1],[-114.09,29.46,1],[-148.25,20.82,1],[-65.91,-29.46,1],[148.25,-20.82,1],[-35.85,-52.64,1],[144.15,-52.64,1],[86.45,11.52,1],[11.54,3.48,1],[-93.55,11.52,1],[16.9,77.95,1],[168.46,-3.48,1],[-16.9,-77.95,1],[-168.46,3.48,1],[-163.1,77.95,1],[-11.54,-3.48,1],[163.1,-77.95,1],[-86.45,-11.52,1],[93.55,-11.52,1],[135.24,4.02,1],[5.69,-45.1,1],[-44.76,4.02,1],[-84.35,44.62,1],[174.31,45.1,1],[84.35,-44.62,1],[-174.31,-45.1,1],[95.65,44.62,1],[-5.69,45.1,1],[-95.65,-44.62,1],[-135.24,-4.02,1],[44.76,-4.02,1],[-129.84,-18.16,1],[-156.86,-37.5,1],[50.16,-18.16,1],[-117.12,-46.85,1],[-23.14,37.5,1],[117.12,46.85,1],[23.14,-37.5,1],[62.88,-46.85,1],[156.86,37.5,1],[-62.88,46.85,1],[129.84,18.16,1],[-50.16,18.16,1],[-74.1,32.87,1],[146.1,13.3,1],[105.9,32.87,1],[22.97,-53.88,1],[33.9,-13.3,1],[-22.97,53.88,1],[-33.9,13.3,1],[-157.03,-53.88,1],[-146.1,-13.3,1],[157.03,53.88,1],[74.1,-32.87,1],[-105.9,-32.87,1],[-119.92,-5.64,1],[-173.5,-29.76,1],[60.08,-5.64,1],[-101.2,-59.6,1],[-6.5,29.76,1],[101.2,59.6,1],[6.5,-29.76,1],[78.8,-59.6,1],[173.5,29.76,1],[-78.8,59.6,1],[119.92,5.64,1],[-60.08,5.64,1],[73.14,16.13,1],[16.82,16.18,1],[-106.86,16.13,1],[45.09,66.83,1],[163.18,-16.18,1],[-45.09,-66.83,1],[-163.18,16.18,1],[-134.91,66.83,1],[-16.82,-16.18,1],[134.91,-66.83,1],[-73.14,-16.13,1],[106.86,-16.13,1],[-11.7,-43.38,1],[-102.11,45.38,1],[168.3,-43.38,1],[133.98,-8.47,1],[-77.89,-45.38,1],[-133.98,8.47,1],[77.89,45.38,1],[-46.02,-8.47,1],[102.11,-45.38,1],[46.02,8.47,1],[11.7,43.38,1],[-168.3,43.38,1],[-24.11,3.73,1],[170.94,65.63,1],[155.89,3.73,1],[85.92,-24.05,1],[9.06,-65.63,1],[-85.92,24.05,1],[-9.06,65.63,1],[-94.08,-24.05,1],[-170.94,-65.63,1],[94.08,24.05,1],[24.11,-3.73,1],[-155.89,-3.73,1]],[[104.6,-3.68,1],[-3.81,-14.57,1],[-75.4,-3.68,1],[-104.32,74.95,1],[-176.19,14.57,1],[104.32,-74.95,1],[176.19,-14.57,1],[75.68,74.95,1],[3.81,14.57,1],[-75.68,-74.95,1],[-104.6,3.68,1],[75.4,3.68,1],[153.77,-30.33,1],[-52.93,-50.74,1],[-26.23,-30.33,1],[-123.11,22.43,1],[-127.07,50.74,1],[123.11,-22.43,1],[127.07,-50.74,1],[56.89,22.43,1],[52.93,50.74,1],[-56.89,-22.43,1],[-153.77,30.33,1],[26.23,30.33,1],[35.99,-39.77,1],[-54.77,38.45,1],[-144.01,-39.77,1],[135.81,26.85,1],[-125.23,-38.45,1],[-135.81,-26.85,1],[125.23,38.45,1],[-44.19,26.85,1],[54.77,-38.45,1],[44.19,-26.85,1],[-35.99,39.77,1],[144.01,39.77,1],[71.82,-25.43,1],[-26.58,16.37,1],[-108.18,-25.43,1],[146.72,59.1,1],[-153.42,-16.37,1],[-146.72,-59.1,1],[153.42,16.37,1],[-33.28,59.1,1],[26.58,-16.37,1],[33.28,-59.1,1],[-71.82,25.43,1],[108.18,25.43,1],[-136.55,26.52,1],[144.03,-40.51,1],[43.45,26.52,1],[-55.5,-37.97,1],[35.97,40.51,1],[55.5,37.97,1],[-35.97,-40.51,1],[124.5,-37.97,1],[-144.03,40.51,1],[-124.5,37.97,1],[136.55,-26.52,1],[-43.45,-26.52,1],[-6.52,-1.08,1],[-170.58,83.4,1],[173.48,-1.08,1],[91.09,-6.52,1],[-9.42,-83.4,1],[-91.09,6.52,1],[9.42,83.4,1],[-88.91,-6.52,1],[170.58,-83.4,1],[88.91,6.52,1],[6.52,1.08,1],[-173.48,1.08,1],[-71.13,40.38,1],[138.05,14.26,1],[108.87,40.38,1],[20.82,-46.12,1],[41.95,-14.26,1],[-20.82,46.12,1],[-41.95,14.26,1],[-159.18,-46.12,1],[-138.05,-14.26,1],[159.18,46.12,1],[71.13,-40.38,1],[-108.87,-40.38,1],[-153.97,-27.97,1],[-129.57,-52.52,1],[26.03,-27.97,1],[-120.59,-22.81,1],[-50.43,52.52,1],[120.59,22.81,1],[50.43,-52.52,1],[59.41,-22.81,1],[129.57,52.52,1],[-59.41,22.81,1],[153.97,27.97,1],[-26.03,27.97,1],[-80.23,13.48,1],[166.33,9.49,1],[99.77,13.48,1],[35.29,-73.41,1],[13.67,-9.49,1],[-35.29,73.41,1],[-13.67,9.49,1],[-144.71,-73.41,1],[-166.33,-9.49,1],[144.71,73.41,1],[80.23,-13.48,1],[-99.77,-13.48,1],[55.43,-9,1],[-10.89,34.09,1],[-124.57,-9,1],[105.6,54.41,1],[-169.11,-34.09,1],[-105.6,-54.41,1],[169.11,34.09,1],[-74.4,54.41,1],[10.89,-34.09,1],[74.4,-54.41,1],[-55.43,9,1],[124.57,9,1],[68.32,-7.14,1],[-7.68,21.51,1],[-111.68,-7.14,1],[108.74,67.22,1],[-172.32,-21.51,1],[-108.74,-67.22,1],[172.32,21.51,1],[-71.26,67.22,1],[7.68,-21.51,1],[71.26,-67.22,1],[-68.32,7.14,1],[111.68,7.14,1],[-174.97,36.12,1],[96.85,-53.58,1],[5.03,36.12,1],[-53.77,-4.06,1],[83.15,53.58,1],[53.77,4.06,1],[-83.15,-53.58,1],[126.23,-4.06,1],[-96.85,53.58,1],[-126.23,4.06,1],[174.97,-36.12,1],[-5.03,-36.12,1],[-149.91,16.26,1],[149.81,-56.16,1],[30.09,16.26,1],[-71.37,-28.77,1],[30.19,56.16,1],[71.37,28.77,1],[-30.19,-56.16,1],[108.63,-28.77,1],[-149.81,56.16,1],[-108.63,28.77,1],[149.91,-16.26,1],[-30.09,-16.26,1],[2.52,-51.45,1],[-87.99,38.5,1],[-177.48,-51.45,1],[141.48,1.57,1],[-92.01,-38.5,1],[-141.48,-1.57,1],[92.01,38.5,1],[-38.52,1.57,1],[87.99,-38.5,1],[38.52,-1.57,1],[-2.52,51.45,1],[177.48,51.45,1],[161.12,-9.98,1],[-28.54,-68.73,1],[-18.88,-9.98,1],[-100.54,18.59,1],[-151.46,68.73,1],[100.54,-18.59,1],[151.46,-68.73,1],[79.46,18.59,1],[28.54,68.73,1],[-79.46,-18.59,1],[-161.12,9.98,1],[18.88,9.98,1],[12.84,24.97,1],[64.49,62.11,1],[-167.16,24.97,1],[64.47,11.62,1],[115.51,-62.11,1],[-64.47,-11.62,1],[-115.51,62.11,1],[-115.53,11.62,1],[-64.49,-62.11,1],[115.53,-11.62,1],[-12.84,-24.97,1],[167.16,-24.97,1],[74.13,41.65,1],[42.76,11.79,1],[-105.87,41.65,1],[17.09,45.95,1],[137.24,-11.79,1],[-17.09,-45.95,1],[-137.24,11.79,1],[-162.91,45.95,1],[-42.76,-11.79,1],[162.91,-45.95,1],[-74.13,-41.65,1],[105.87,-41.65,1],[154.04,1.27,1],[2.9,-64.01,1],[-25.96,1.27,1],[-88.59,25.96,1],[177.1,64.01,1],[88.59,-25.96,1],[-177.1,-64.01,1],[91.41,25.96,1],[-2.9,64.01,1],[-91.41,-25.96,1],[-154.04,-1.27,1],[25.96,-1.27,1]],[[24.8,-10.46,1],[-23.76,63.21,1],[-155.2,-10.46,1],[101.5,24.36,1],[-156.24,-63.21,1],[-101.5,-24.36,1],[156.24,63.21,1],[-78.5,24.36,1],[23.76,-63.21,1],[78.5,-24.36,1],[-24.8,10.46,1],[155.2,10.46,1],[-134.64,65.44,1],[108.01,-16.98,1],[45.36,65.44,1],[-17.8,-17.2,1],[71.99,16.98,1],[17.8,17.2,1],[-71.99,-16.98,1],[162.2,-17.2,1],[-108.01,16.98,1],[-162.2,17.2,1],[134.64,-65.44,1],[-45.36,-65.44,1],[177.6,54.85,1],[88.31,-35.12,1],[-2.4,54.85,1],[-35.13,1.38,1],[91.69,35.12,1],[35.13,-1.38,1],[-91.69,-35.12,1],[144.87,1.38,1],[-88.31,35.12,1],[-144.87,-1.38,1],[-177.6,-54.85,1],[2.4,-54.85,1],[157.93,82.01,1],[86.98,-7.4,1],[-22.07,82.01,1],[-7.41,2.99,1],[93.02,7.4,1],[7.41,-2.99,1],[-93.02,-7.4,1],[172.59,2.99,1],[-86.98,7.4,1],[-172.59,-2.99,1],[-157.93,-82.01,1],[22.07,-82.01,1],[42.48,-13.21,1],[-19.17,45.89,1],[-137.52,-13.21,1],[107.66,41.11,1],[-160.83,-45.89,1],[-107.66,-41.11,1],[160.83,45.89,1],[-72.34,41.11,1],[19.17,-45.89,1],[72.34,-41.11,1],[-42.48,13.21,1],[137.52,13.21,1],[28.48,10.9,1],[21.99,59.68,1],[-151.52,10.9,1],[77.65,27.92,1],[158.01,-59.68,1],[-77.65,-27.92,1],[-158.01,59.68,1],[-102.35,27.92,1],[-21.99,-59.68,1],[102.35,-27.92,1],[-28.48,-10.9,1],[151.52,-10.9,1],[-33.79,21.61,1],[144.53,50.59,1],[146.21,21.61,1],[64.51,-31.14,1],[35.47,-50.59,1],[-64.51,31.14,1],[-35.47,50.59,1],[-115.49,-31.14,1],[-144.53,-50.59,1],[115.49,31.14,1],[33.79,-21.61,1],[-146.21,-21.61,1],[-175.53,-31.74,1],[-97.19,-57.98,1],[4.47,-31.74,1],[-121.82,-3.8,1],[-82.81,57.98,1],[121.82,3.8,1],[82.81,-57.98,1],[58.18,-3.8,1],[97.19,57.98,1],[-58.18,3.8,1],[175.53,31.74,1],[-4.47,31.74,1],[89.4,19.43,1],[19.43,.56,1],[-90.6,19.43,1],[1.69,70.56,1],[160.57,-.56,1],[-1.69,-70.56,1],[-160.57,.56,1],[-178.31,70.56,1],[-19.43,-.56,1],[178.31,-70.56,1],[-89.4,-19.43,1],[90.6,-19.43,1],[-27.28,-27.88,1],[-130.91,51.78,1],[152.72,-27.88,1],[120.76,-23.9,1],[-49.09,-51.78,1],[-120.76,23.9,1],[49.09,51.78,1],[-59.24,-23.9,1],[130.91,-51.78,1],[59.24,23.9,1],[27.28,27.88,1],[-152.72,27.88,1],[139.9,-15.44,1],[-23.21,-47.5,1],[-40.1,-15.44,1],[-109.85,38.38,1],[-156.79,47.5,1],[109.85,-38.38,1],[156.79,-47.5,1],[70.15,38.38,1],[23.21,47.5,1],[-70.15,-38.38,1],[-139.9,15.44,1],[40.1,15.44,1],[-2.17,-43.33,1],[-92.29,46.62,1],[177.83,-43.33,1],[133.35,-1.58,1],[-87.71,-46.62,1],[-133.35,1.58,1],[87.71,46.62,1],[-46.65,-1.58,1],[92.29,-46.62,1],[46.65,1.58,1],[2.17,43.33,1],[-177.83,43.33,1],[41.12,27.96,1],[38.91,41.71,1],[-138.88,27.96,1],[54.83,35.51,1],[141.09,-41.71,1],[-54.83,-35.51,1],[-141.09,41.71,1],[-125.17,35.51,1],[-38.91,-41.71,1],[125.17,-35.51,1],[-41.12,-27.96,1],[138.88,-27.96,1],[-126.67,13.75,1],[163.04,-35.46,1],[53.33,13.75,1],[-67.73,-51.18,1],[16.96,35.46,1],[67.73,51.18,1],[-16.96,-35.46,1],[112.27,-51.18,1],[-163.04,35.46,1],[-112.27,51.18,1],[126.67,-13.75,1],[-53.33,-13.75,1],[6.02,-15.42,1],[-69.18,73.47,1],[-173.98,-15.42,1],[105.51,5.8,1],[-110.82,-73.47,1],[-105.51,-5.8,1],[110.82,73.47,1],[-74.49,5.8,1],[69.18,-73.47,1],[74.49,-5.8,1],[-6.02,15.42,1],[173.98,15.42,1],[160.08,33.45,1],[62.71,-51.67,1],[-19.92,33.45,1],[-54.9,16.52,1],[117.29,51.67,1],[54.9,-16.52,1],[-117.29,-51.67,1],[125.1,16.52,1],[-62.71,51.67,1],[-125.1,-16.52,1],[-160.08,-33.45,1],[19.92,-33.45,1],[80.34,6.51,1],[6.61,9.59,1],[-99.66,6.51,1],[55.76,78.37,1],[173.39,-9.59,1],[-55.76,-78.37,1],[-173.39,9.59,1],[-124.24,78.37,1],[-6.61,-9.59,1],[124.24,-78.37,1],[-80.34,-6.51,1],[99.66,-6.51,1],[6.25,24.64,1],[76.64,64.63,1],[-173.75,24.64,1],[65.23,5.68,1],[103.36,-64.63,1],[-65.23,-5.68,1],[-103.36,64.63,1],[-114.77,5.68,1],[-76.64,-64.63,1],[114.77,-5.68,1],[-6.25,-24.64,1],[173.75,-24.64,1],[51.41,-63.45,1],[-68.67,16.19,1],[-128.59,-63.45,1],[162.69,20.45,1],[-111.33,-16.19,1],[-162.69,-20.45,1],[111.33,16.19,1],[-17.31,20.45,1],[68.67,-16.19,1],[17.31,-20.45,1],[-51.41,63.45,1],[128.59,63.45,1],[-50.6,28.85,1],[144.51,33.77,1],[129.4,28.85,1],[49.04,-42.6,1],[35.49,-33.77,1],[-49.04,42.6,1],[-35.49,33.77,1],[-130.96,-42.6,1],[-144.51,-33.77,1],[130.96,42.6,1],[50.6,-28.85,1],[-129.4,-28.85,1]]],t=e[r-1];return t}utils$6.getAmbisonicDecMtx=getAmbisonicDecMtx;utils$6.getTdesign=getTdesign;utils$6.deg2rad=deg2rad;utils$6.rad2deg=rad2deg;utils$6.createNearestLookup=createNearestLookup;utils$6.findNearest=findNearest;Object.defineProperty(ambiMonoEncoder2D,"__esModule",{value:!0});var _classCallCheck2$l=classCallCheck,_classCallCheck3$l=_interopRequireDefault$l(_classCallCheck2$l),_createClass2$k=createClass,_createClass3$k=_interopRequireDefault$l(_createClass2$k);function _interopRequireDefault$l(r){return r&&r.__esModule?r:{default:r}}var utils$5=utils$6,monoEncoder2D=function(){function r(e,t){(0,_classCallCheck3$l.default)(this,r),this.initialized=!1,this.ctx=e,this.order=t,this.nCh=2*t+1,this.azim=0,this.elev=0,this.gains=new Array(this.nCh),this.gainNodes=new Array(this.nCh),this.in=this.ctx.createGain(),this.in.channelCountMode="explicit",this.in.channelCount=1,this.out=this.ctx.createChannelMerger(this.nCh);for(var n=0;n<this.nCh;n++)this.gainNodes[n]=this.ctx.createGain(),this.gainNodes[n].channelCountMode="explicit",this.gainNodes[n].channelCount=1;this.updateGains();for(var n=0;n<this.nCh;n++)this.in.connect(this.gainNodes[n]),this.gainNodes[n].connect(this.out,0,n);this.initialized=!0}return(0,_createClass3$k.default)(r,[{key:"updateGains",value:function(){for(var t=this.order,n=utils$5.getCircHarmonics(t,[this.azim]),i=0;i<this.nCh;i++)this.gainNodes[i].gain.value=n[i][0]}}]),r}();ambiMonoEncoder2D.default=monoEncoder2D;var ambiOrderLimiter={};Object.defineProperty(ambiOrderLimiter,"__esModule",{value:!0});var _classCallCheck2$k=classCallCheck,_classCallCheck3$k=_interopRequireDefault$k(_classCallCheck2$k),_createClass2$j=createClass,_createClass3$j=_interopRequireDefault$k(_createClass2$j);function _interopRequireDefault$k(r){return r&&r.__esModule?r:{default:r}}var orderLimiter=function(){function r(e,t,n){(0,_classCallCheck3$k.default)(this,r),this.ctx=e,this.orderIn=t,n<t?this.orderOut=n:this.orderOut=t,this.nChIn=(this.orderIn+1)*(this.orderIn+1),this.nChOut=(this.orderOut+1)*(this.orderOut+1),this.in=this.ctx.createChannelSplitter(this.nChIn),this.out=this.ctx.createChannelMerger(this.nChOut);for(var i=0;i<this.nChOut;i++)this.in.connect(this.out,i,i)}return(0,_createClass3$j.default)(r,[{key:"updateOrder",value:function(t){if(t<=this.orderIn)this.orderOut=t;else return;this.nChOut=(this.orderOut+1)*(this.orderOut+1),this.out.disconnect(),this.out=this.ctx.createChannelMerger(this.nChOut);for(var n=0;n<this.nChOut;n++)this.in.connect(this.out,n,n)}}]),r}();ambiOrderLimiter.default=orderLimiter;var ambiOrderLimiter2D={};Object.defineProperty(ambiOrderLimiter2D,"__esModule",{value:!0});var _classCallCheck2$j=classCallCheck,_classCallCheck3$j=_interopRequireDefault$j(_classCallCheck2$j),_createClass2$i=createClass,_createClass3$i=_interopRequireDefault$j(_createClass2$i);function _interopRequireDefault$j(r){return r&&r.__esModule?r:{default:r}}var orderLimiter2D=function(){function r(e,t,n){(0,_classCallCheck3$j.default)(this,r),this.ctx=e,this.orderIn=t,n<t?this.orderOut=n:this.orderOut=t,this.nChIn=2*this.orderIn+1,this.nChOut=2*this.orderOut+1,this.in=this.ctx.createChannelSplitter(this.nChIn),this.out=this.ctx.createChannelMerger(this.nChOut);for(var i=0;i<this.nChOut;i++)this.in.connect(this.out,i,i)}return(0,_createClass3$i.default)(r,[{key:"updateOrder",value:function(t){if(t<=this.orderIn)this.orderOut=t;else return;this.nChOut=2*this.orderOut+1,this.out.disconnect(),this.out=this.ctx.createChannelMerger(this.nChOut);for(var n=0;n<this.nChOut;n++)this.in.connect(this.out,n,n)}}]),r}();ambiOrderLimiter2D.default=orderLimiter2D;var ambiOrderWeight={};Object.defineProperty(ambiOrderWeight,"__esModule",{value:!0});var _classCallCheck2$i=classCallCheck,_classCallCheck3$i=_interopRequireDefault$i(_classCallCheck2$i),_createClass2$h=createClass,_createClass3$h=_interopRequireDefault$i(_createClass2$h),_sphericalHarmonicTransform$3=src,jshlib$3=_interopRequireWildcard$4(_sphericalHarmonicTransform$3);function _interopRequireWildcard$4(r){if(r&&r.__esModule)return r;var e={};if(r!=null)for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t]);return e.default=r,e}function _interopRequireDefault$i(r){return r&&r.__esModule?r:{default:r}}var orderWeight=function(){function r(e,t){(0,_classCallCheck3$i.default)(this,r),this.ctx=e,this.order=t,this.nCh=(this.order+1)*(this.order+1),this.in=this.ctx.createChannelSplitter(this.nCh),this.out=this.ctx.createChannelMerger(this.nCh),this.gains=new Array(this.nCh),this.orderGains=new Array(this.order+1),this.orderGains.fill(1);for(var n=0;n<this.nCh;n++)this.gains[n]=this.ctx.createGain(),this.in.connect(this.gains[n],n,0),this.gains[n].connect(this.out,0,n)}return(0,_createClass3$h.default)(r,[{key:"updateOrderGains",value:function(){for(var t,n=0;n<this.nCh;n++)t=Math.floor(Math.sqrt(n)),this.gains[n].gain.value=this.orderGains[t]}},{key:"computeMaxRECoeffs",value:function(){var t=this.order;this.orderGains[0]=1;for(var n=0,i=0,s=0,a=1;a<=t;a++)s=jshlib$3.recurseLegendrePoly(a,[Math.cos(2.406809/(t+1.51))],n,i),this.orderGains[a]=s[0][0],i=n,n=s}}]),r}();ambiOrderWeight.default=orderWeight;var ambiSceneRotator={};Object.defineProperty(ambiSceneRotator,"__esModule",{value:!0});var _classCallCheck2$h=classCallCheck,_classCallCheck3$h=_interopRequireDefault$h(_classCallCheck2$h),_createClass2$g=createClass,_createClass3$g=_interopRequireDefault$h(_createClass2$g),_sphericalHarmonicTransform$2=src,jshlib$2=_interopRequireWildcard$3(_sphericalHarmonicTransform$2);function _interopRequireWildcard$3(r){if(r&&r.__esModule)return r;var e={};if(r!=null)for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t]);return e.default=r,e}function _interopRequireDefault$h(r){return r&&r.__esModule?r:{default:r}}var sceneRotator=function(){function r(e,t){(0,_classCallCheck3$h.default)(this,r),this.ctx=e,this.order=t,this.nCh=(t+1)*(t+1),this.yaw=0,this.pitch=0,this.roll=0,this.rotMtx=numeric.identity(this.nCh),this.rotMtxNodes=new Array(this.order),this.in=this.ctx.createChannelSplitter(this.nCh),this.out=this.ctx.createChannelMerger(this.nCh);for(var n=1;n<=this.order;n++){for(var i=new Array(2*n+1),s=0;s<2*n+1;s++){i[s]=new Array(2*n+1);for(var a=0;a<2*n+1;a++)i[s][a]=this.ctx.createGain(),s==a?i[s][a].gain.value=1:i[s][a].gain.value=0}this.rotMtxNodes[n-1]=i}this.in.connect(this.out,0,0);var o=1;for(n=1;n<=this.order;n++){for(s=0;s<2*n+1;s++)for(a=0;a<2*n+1;a++)this.in.connect(this.rotMtxNodes[n-1][s][a],o+a,0),this.rotMtxNodes[n-1][s][a].connect(this.out,0,o+s);o=o+2*n+1}}return(0,_createClass3$g.default)(r,[{key:"updateRotMtx",value:function(){var t=this.yaw*Math.PI/180,n=this.pitch*Math.PI/180,i=this.roll*Math.PI/180;this.rotMtx=jshlib$2.getSHrotMtx(jshlib$2.yawPitchRoll2Rzyx(t,n,i),this.order);for(var s=1,a=1;a<this.order+1;a++){for(var o=0;o<2*a+1;o++)for(var c=0;c<2*a+1;c++)this.rotMtxNodes[a-1][o][c].gain.value=this.rotMtx[s+o][s+c];s=s+2*a+1}}}]),r}();ambiSceneRotator.default=sceneRotator;var ambiSceneRotator2D={};Object.defineProperty(ambiSceneRotator2D,"__esModule",{value:!0});var _classCallCheck2$g=classCallCheck,_classCallCheck3$g=_interopRequireDefault$g(_classCallCheck2$g),_createClass2$f=createClass,_createClass3$f=_interopRequireDefault$g(_createClass2$f);function _interopRequireDefault$g(r){return r&&r.__esModule?r:{default:r}}var sceneRotator2D=function(){function r(e,t){(0,_classCallCheck3$g.default)(this,r),this.ctx=e,this.order=t,this.nCh=2*t+1,this.yaw=0,this.in=this.ctx.createChannelSplitter(this.nCh),this.out=this.ctx.createChannelMerger(this.nCh),this.rotMtxNodes=new Array(2*this.order),this.in.connect(this.out,0,0);for(var n=0;n<2*this.order;n=n+2){var i=new Array(2);i[0]=this.ctx.createGain(),i[1]=this.ctx.createGain();var s=new Array(2);s[0]=this.ctx.createGain(),s[1]=this.ctx.createGain(),this.rotMtxNodes[n]=i,this.rotMtxNodes[n+1]=s,this.in.connect(this.rotMtxNodes[n][0],n+1,0),this.rotMtxNodes[n][0].connect(this.out,0,n+1),this.in.connect(this.rotMtxNodes[n][1],n+2,0),this.rotMtxNodes[n][1].connect(this.out,0,n+1),this.in.connect(this.rotMtxNodes[n+1][0],n+1,0),this.rotMtxNodes[n+1][0].connect(this.out,0,n+2),this.in.connect(this.rotMtxNodes[n+1][1],n+2,0),this.rotMtxNodes[n+1][1].connect(this.out,0,n+2)}this.updateRotMtx()}return(0,_createClass3$f.default)(r,[{key:"updateRotMtx",value:function(){for(var t=this.yaw*Math.PI/180,n=1,i=0;i<2*this.order;i=i+2)this.rotMtxNodes[i][0].gain.value=Math.cos(n*t),this.rotMtxNodes[i][1].gain.value=Math.sin(n*t),this.rotMtxNodes[i+1][0].gain.value=-Math.sin(n*t),this.rotMtxNodes[i+1][1].gain.value=Math.cos(n*t),n++}}]),r}();ambiSceneRotator2D.default=sceneRotator2D;var ambiSceneMirror={};Object.defineProperty(ambiSceneMirror,"__esModule",{value:!0});var _classCallCheck2$f=classCallCheck,_classCallCheck3$f=_interopRequireDefault$f(_classCallCheck2$f),_createClass2$e=createClass,_createClass3$e=_interopRequireDefault$f(_createClass2$e);function _interopRequireDefault$f(r){return r&&r.__esModule?r:{default:r}}var sceneMirror=function(){function r(e,t){(0,_classCallCheck3$f.default)(this,r),this.ctx=e,this.order=t,this.nCh=(t+1)*(t+1),this.mirrorPlane=0,this.in=this.ctx.createChannelSplitter(this.nCh),this.out=this.ctx.createChannelMerger(this.nCh),this.gains=new Array(this.nCh);for(var n=0;n<this.nCh;n++)this.gains[n]=this.ctx.createGain(),this.gains[n].gain.value=1,this.in.connect(this.gains[n],n,0),this.gains[n].connect(this.out,0,n)}return(0,_createClass3$e.default)(r,[{key:"reset",value:function(){for(var t=0;t<this.nCh;t++)this.gains[t].gain.value=1}},{key:"mirror",value:function(t){switch(t){case 0:this.mirrorPlane=0,this.reset();break;case 1:this.reset(),this.mirrorPlane=1;for(var s,n=0;n<=this.order;n++)for(var i=-n;i<=n;i++)s=n*n+n+i,(i<0&&i%2==0||i>0&&i%2==1)&&(this.gains[s].gain.value=-1);break;case 2:this.reset(),this.mirrorPlane=2;for(var s,n=0;n<=this.order;n++)for(var i=-n;i<=n;i++)s=n*n+n+i,i<0&&(this.gains[s].gain.value=-1);break;case 3:this.reset(),this.mirrorPlane=3;for(var s,n=0;n<=this.order;n++)for(var i=-n;i<=n;i++)s=n*n+n+i,(i+n)%2==1&&(this.gains[s].gain.value=-1);break;default:console.log("The mirroring planes can be either 1 (yz), 2 (xz), 3 (xy), or 0 (no mirroring). Value set to 0."),this.mirrorPlane=0,this.reset()}}}]),r}();ambiSceneMirror.default=sceneMirror;var ambiSceneMirror2D={};Object.defineProperty(ambiSceneMirror2D,"__esModule",{value:!0});var _classCallCheck2$e=classCallCheck,_classCallCheck3$e=_interopRequireDefault$e(_classCallCheck2$e),_createClass2$d=createClass,_createClass3$d=_interopRequireDefault$e(_createClass2$d);function _interopRequireDefault$e(r){return r&&r.__esModule?r:{default:r}}var sceneMirror2D=function(){function r(e,t){(0,_classCallCheck3$e.default)(this,r),this.ctx=e,this.order=t,this.nCh=2*t+1,this.mirrorPlane=0,this.in=this.ctx.createChannelSplitter(this.nCh),this.out=this.ctx.createChannelMerger(this.nCh),this.gains=new Array(this.nCh);for(var n=0;n<this.nCh;n++)this.gains[n]=this.ctx.createGain(),this.gains[n].gain.value=1,this.in.connect(this.gains[n],n,0),this.gains[n].connect(this.out,0,n)}return(0,_createClass3$d.default)(r,[{key:"reset",value:function(){for(var t=0;t<this.nCh;t++)this.gains[t].gain.value=1}},{key:"mirror",value:function(t){switch(t){case 0:this.mirrorPlane=0,this.reset();break;case 1:this.reset(),this.mirrorPlane=1;for(var n=2;n<this.nCh;n++)this.gains[n].gain.value=-1,n%2!=0&&(n=n+2);break;case 2:this.reset(),this.mirrorPlane=2;for(var n=0;n<this.nCh;n++)n%2!=0&&(this.gains[n].gain.value=-1);break;case 3:console.log("up-down mirroring in 2D mode not possible");break;default:console.log("The mirroring planes can be either 1 (yz), 2 (xz) or 0 (no mirroring). Value set to 0."),this.mirrorPlane=0,this.reset()}}}]),r}();ambiSceneMirror2D.default=sceneMirror2D;var ambiBinauralDecoder={};Object.defineProperty(ambiBinauralDecoder,"__esModule",{value:!0});var _classCallCheck2$d=classCallCheck,_classCallCheck3$d=_interopRequireDefault$d(_classCallCheck2$d),_createClass2$c=createClass,_createClass3$c=_interopRequireDefault$d(_createClass2$c);function _interopRequireDefault$d(r){return r&&r.__esModule?r:{default:r}}var binDecoder=function(){function r(e,t){(0,_classCallCheck3$d.default)(this,r),this.initialized=!1,this.ctx=e,this.order=t,this.nCh=(t+1)*(t+1),this.decFilters=new Array(this.nCh),this.decFilterNodes=new Array(this.nCh),this.in=this.ctx.createChannelSplitter(this.nCh),this.out=this.ctx.createChannelMerger(2),this.out.channelCountMode="explicit",this.out.channelCount=1,this.gainMid=this.ctx.createGain(),this.gainSide=this.ctx.createGain(),this.invertSide=this.ctx.createGain(),this.gainMid.gain.value=1,this.gainSide.gain.value=1,this.invertSide.gain.value=-1;for(var n=0;n<this.nCh;n++)this.decFilterNodes[n]=this.ctx.createConvolver(),this.decFilterNodes[n].normalize=!1;this.resetFilters();for(var n=0;n<this.nCh;n++){this.in.connect(this.decFilterNodes[n],n,0);var i=Math.floor(Math.sqrt(n)),s=n-i*i-i;s>=0?this.decFilterNodes[n].connect(this.gainMid):this.decFilterNodes[n].connect(this.gainSide)}this.gainMid.connect(this.out,0,0),this.gainSide.connect(this.out,0,0),this.gainMid.connect(this.out,0,1),this.gainSide.connect(this.invertSide,0,0),this.invertSide.connect(this.out,0,1),this.initialized=!0}return(0,_createClass3$c.default)(r,[{key:"updateFilters",value:function(t){for(var n=0;n<this.nCh;n++)this.decFilters[n]=this.ctx.createBuffer(1,t.length,t.sampleRate),this.decFilters[n].getChannelData(0).set(t.getChannelData(n)),this.decFilterNodes[n].buffer=this.decFilters[n]}},{key:"resetFilters",value:function(){var t=new Array(this.nCh);t.fill(0),t[0]=.5,t[1]=.5/Math.sqrt(3);for(var n=0;n<this.nCh;n++){this.decFilters[n]=this.ctx.createBuffer(1,64,this.ctx.sampleRate);for(var i=0;i<64;i++)this.decFilters[n].getChannelData(0)[i]=0;this.decFilters[n].getChannelData(0)[0]=t[n],this.decFilterNodes[n].buffer=this.decFilters[n]}}}]),r}();ambiBinauralDecoder.default=binDecoder;var ambiBinauralDecoder2D={};Object.defineProperty(ambiBinauralDecoder2D,"__esModule",{value:!0});var _classCallCheck2$c=classCallCheck,_classCallCheck3$c=_interopRequireDefault$c(_classCallCheck2$c),_createClass2$b=createClass,_createClass3$b=_interopRequireDefault$c(_createClass2$b);function _interopRequireDefault$c(r){return r&&r.__esModule?r:{default:r}}var binDecoder2D=function(){function r(e,t){(0,_classCallCheck3$c.default)(this,r),this.initialized=!1,this.ctx=e,this.order=t,this.nCh=2*t+1,this.decFilters=new Array(this.nCh),this.decFilterNodes=new Array(this.nCh),this.in=this.ctx.createChannelSplitter(this.nCh),this.out=this.ctx.createChannelMerger(2),this.out.channelCountMode="explicit",this.out.channelCount=1,this.gainMid=this.ctx.createGain(),this.gainSide=this.ctx.createGain(),this.invertSide=this.ctx.createGain(),this.gainMid.gain.value=1,this.gainSide.gain.value=1,this.invertSide.gain.value=-1;for(var n=0;n<this.nCh;n++)this.decFilterNodes[n]=this.ctx.createConvolver(),this.decFilterNodes[n].normalize=!1;this.resetFilters();for(var n=0;n<this.nCh;n++)this.in.connect(this.decFilterNodes[n],n,0),n%2==0?this.decFilterNodes[n].connect(this.gainMid):this.decFilterNodes[n].connect(this.gainSide);this.gainMid.connect(this.out,0,0),this.gainSide.connect(this.out,0,0),this.gainMid.connect(this.out,0,1),this.gainSide.connect(this.invertSide,0,0),this.invertSide.connect(this.out,0,1),this.initialized=!0}return(0,_createClass3$b.default)(r,[{key:"updateFilters",value:function(t){for(var n=0;n<this.nCh;n++)this.decFilters[n]=this.ctx.createBuffer(1,t.length,t.sampleRate),this.decFilters[n].getChannelData(0).set(t.getChannelData(n)),this.decFilterNodes[n].buffer=this.decFilters[n]}},{key:"resetFilters",value:function(){var t=new Array(this.nCh);t.fill(0),t[0]=.5,t[1]=.5/Math.sqrt(3);for(var n=0;n<this.nCh;n++){this.decFilters[n]=this.ctx.createBuffer(1,64,this.ctx.sampleRate);for(var i=0;i<64;i++)this.decFilters[n].getChannelData(0)[i]=0;this.decFilters[n].getChannelData(0)[0]=t[n],this.decFilterNodes[n].buffer=this.decFilters[n]}}}]),r}();ambiBinauralDecoder2D.default=binDecoder2D;var ambiDecoder={};Object.defineProperty(ambiDecoder,"__esModule",{value:!0});var _classCallCheck2$b=classCallCheck,_classCallCheck3$b=_interopRequireDefault$b(_classCallCheck2$b),_createClass2$a=createClass,_createClass3$a=_interopRequireDefault$b(_createClass2$a);function _interopRequireDefault$b(r){return r&&r.__esModule?r:{default:r}}var utils$4=utils$6,decoder$1=function(){function r(e,t){(0,_classCallCheck3$b.default)(this,r),this.ctx=e,this.order=t,this.nCh=(t+1)*(t+1),this.nSpk=0,this._decodingMatrix=[],this._spkSphPosArray=[],this.in=this.ctx.createChannelSplitter(this.nCh),this.out=this.ctx.createChannelMerger(1),this._spkSphPosArray=this._getDefaultSpkConfig(this.order),this._updateDecodeMtx(this._spkSphPosArray)}return(0,_createClass3$a.default)(r,[{key:"_updateDecodeMtx",value:function(t){this.nSpk=t.length,this.out=this.ctx.createChannelMerger(this.nSpk),this._decodingMatrix=utils$4.getAmbisonicDecMtx(t,this.order),this.mtxGain=new Array(this.nCh);for(var n=0;n<this.nCh;n++){this.mtxGain[n]=new Array(this.nSpk);for(var i=0;i<this.nSpk;i++){var s=this.ctx.createGain();s.gain.value=this._decodingMatrix[i][n],this.in.connect(s,n,0),s.connect(this.out,0,i),this.mtxGain[n][i]=s}}}},{key:"_getDefaultSpkConfig",value:function(t){var n=[];switch(t){case 1:n=[[0,0,1],[90,0,1],[180,0,1],[270,0,1],[0,90,1],[0,-90,1]];break;case 2:n=[[180,-31.7161,.5878],[180,31.7161,.5878],[-121.7161,0,.5878],[121.7161,0,.5878],[-90,-58.2839,.5878],[-90,58.2839,.5878],[90,-58.2839,.5878],[90,58.2839,.5878],[-58.2839,0,.5878],[58.2839,0,.5878],[0,-31.7161,.5878],[0,31.7161,.5878]];break;case 3:n=[[-159.0931,0,.5352],[159.0931,0,.5352],[-135,-35.2644,.5352],[-135,35.2644,.5352],[135,-35.2644,.5352],[135,35.2644,.5352],[180,-69.0931,.5352],[180,69.0931,.5352],[-90,-20.9069,.5352],[-90,20.9069,.5352],[90,-20.9069,.5352],[90,20.9069,.5352],[0,-69.0931,.5352],[0,69.0931,.5352],[-45,-35.2644,.5352],[-45,35.2644,.5352],[45,-35.2644,.5352],[45,35.2644,.5352],[-20.9069,0,.5352],[20.9069,0,.5352]];break;default:console.error("unsupported default order:",t)}return n}},{key:"speakerPos",set:function(t){t===void 0&&(t=this._getDefaultSpkConfig(this.order)),this._spkSphPosArray=t,this.out.disconnect(),this._updateDecodeMtx(t)},get:function(){return this._spkSphPosArray}}]),r}();ambiDecoder.default=decoder$1;var ambiConvolver={};Object.defineProperty(ambiConvolver,"__esModule",{value:!0});var _classCallCheck2$a=classCallCheck,_classCallCheck3$a=_interopRequireDefault$a(_classCallCheck2$a),_createClass2$9=createClass,_createClass3$9=_interopRequireDefault$a(_createClass2$9);function _interopRequireDefault$a(r){return r&&r.__esModule?r:{default:r}}var convolver$1=function(){function r(e,t){(0,_classCallCheck3$a.default)(this,r),this.initialized=!1,this.ctx=e,this.order=t,this.nCh=(t+1)*(t+1),this.encFilters=new Array(this.nCh),this.encFilterNodes=new Array(this.nCh),this.in=this.ctx.createGain(),this.in.channelCountMode="explicit",this.in.channelCount=1,this.out=this.ctx.createChannelMerger(this.nCh);for(var n=0;n<this.nCh;n++)this.encFilterNodes[n]=this.ctx.createConvolver(),this.encFilterNodes[n].normalize=!1;for(var n=0;n<this.nCh;n++)this.in.connect(this.encFilterNodes[n]),this.encFilterNodes[n].connect(this.out,0,n);this.initialized=!0}return(0,_createClass3$9.default)(r,[{key:"updateFilters",value:function(t){for(var n=0;n<this.nCh;n++)this.encFilters[n]=this.ctx.createBuffer(1,t.length,t.sampleRate),this.encFilters[n].getChannelData(0).set(t.getChannelData(n)),this.encFilterNodes[n].buffer=this.encFilters[n]}}]),r}();ambiConvolver.default=convolver$1;var ambiVirtualMic={};Object.defineProperty(ambiVirtualMic,"__esModule",{value:!0});var _classCallCheck2$9=classCallCheck,_classCallCheck3$9=_interopRequireDefault$9(_classCallCheck2$9),_createClass2$8=createClass,_createClass3$8=_interopRequireDefault$9(_createClass2$8),_sphericalHarmonicTransform$1=src,jshlib$1=_interopRequireWildcard$2(_sphericalHarmonicTransform$1);function _interopRequireWildcard$2(r){if(r&&r.__esModule)return r;var e={};if(r!=null)for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t]);return e.default=r,e}function _interopRequireDefault$9(r){return r&&r.__esModule?r:{default:r}}var virtualMic=function(){function r(e,t){(0,_classCallCheck3$9.default)(this,r),this.initialized=!1,this.ctx=e,this.order=t,this.nCh=(t+1)*(t+1),this.azim=0,this.elev=0,this.vmicGains=new Array(this.nCh),this.vmicGainNodes=new Array(this.nCh),this.vmicCoeffs=new Array(this.order+1),this.vmicPattern="hypercardioid",this.in=this.ctx.createChannelSplitter(this.nCh),this.out=this.ctx.createGain();for(var n=0;n<this.nCh;n++)this.vmicGainNodes[n]=this.ctx.createGain();for(this.SHxyz=new Array(this.nCh),this.SHxyz.fill(0),this.updatePattern(),this.updateOrientation(),n=0;n<this.nCh;n++)this.in.connect(this.vmicGainNodes[n],n,0),this.vmicGainNodes[n].connect(this.out);this.initialized=!0}return(0,_createClass3$8.default)(r,[{key:"updatePattern",value:function(){function t(a){for(var o=new Array(a+1),c=0;c<=a;c++)o[c]=jshlib$1.factorial(a)*jshlib$1.factorial(a)/(jshlib$1.factorial(a+c+1)*jshlib$1.factorial(a-c));return o}function n(a){for(var o=new Array(a+1),c=(a+1)*(a+1),l=0;l<=a;l++)o[l]=1/c;return o}function i(a){switch(a){case 1:var o=[.366,.2113];break;case 2:var o=[.2362,.1562,.059];break;case 3:var o=[.1768,.1281,.0633,.0175];break;case 4:var o=[.1414,.1087,.0623,.0247,.0054];break;default:console.error("Orders should be in the range of 1-4 at the moment.");return}return o}function s(a){var o=new Array(a+1);o[0]=1;for(var c=0,l=0,u=0,h=1;h<a+1;h++)u=jshlib$1.recurseLegendrePoly(h,[Math.cos(2.406809/(a+1.51))],c,l),o[h]=u[0][0],l=c,c=u;for(var d=0,h=0;h<=a;h++)d+=o[h]*(2*h+1);for(var h=0;h<=a;h++)o[h]=o[h]/d;return o}switch(this.vmicPattern){case"cardioid":this.vmicCoeffs=t(this.order);break;case"supercardioid":this.vmicCoeffs=i(this.order);break;case"hypercardioid":this.vmicCoeffs=n(this.order);break;case"max_rE":this.vmicCoeffs=s(this.order);break;default:this.vmicPattern="hypercardioid",this.vmicCoeffs=n(this.order)}this.updateGains()}},{key:"updateOrientation",value:function(){for(var t=this.azim*Math.PI/180,n=this.elev*Math.PI/180,i=jshlib$1.computeRealSH(this.order,[[t,n]]),s=0;s<this.nCh;s++)this.SHxyz[s]=i[s][0];this.updateGains()}},{key:"updateGains",value:function(){for(var t,n=0;n<=this.order;n++)for(var i=-n;i<=n;i++)t=n*n+n+i,this.vmicGains[t]=this.vmicCoeffs[n]*this.SHxyz[t];for(var s=0;s<this.nCh;s++)this.vmicGainNodes[s].gain.value=this.vmicGains[s]}}]),r}();ambiVirtualMic.default=virtualMic;var ambiRmsAnalyser={};if(commonjsGlobal.AnalyserNode&&!commonjsGlobal.AnalyserNode.prototype.getFloatTimeDomainData){var uint8=new Uint8Array(2048);commonjsGlobal.AnalyserNode.prototype.getFloatTimeDomainData=function(r){this.getByteTimeDomainData(uint8);for(var e=0,t=r.length;e<t;e++)r[e]=(uint8[e]-128)*.0078125}}Object.defineProperty(ambiRmsAnalyser,"__esModule",{value:!0});var _classCallCheck2$8=classCallCheck,_classCallCheck3$8=_interopRequireDefault$8(_classCallCheck2$8),_createClass2$7=createClass,_createClass3$7=_interopRequireDefault$8(_createClass2$7);function _interopRequireDefault$8(r){return r&&r.__esModule?r:{default:r}}var rmsAnalyser=function(){function r(e,t){(0,_classCallCheck3$8.default)(this,r),this.ctx=e,this.order=t,this.nCh=(t+1)*(t+1),this.fftSize=2048,this.in=this.ctx.createChannelSplitter(this.nCh),this.out=this.ctx.createChannelMerger(this.nCh),this.analysers=new Array(this.nCh),this.analBuffers=new Array(this.nCh);for(var n=0;n<this.nCh;n++)this.analysers[n]=this.ctx.createAnalyser(),this.analysers[n].fftSize=this.fftSize,this.analysers[n].smoothingTimeConstant=0,this.analBuffers[n]=new Float32Array(this.fftSize),this.in.connect(this.analysers[n],n,0),this.analysers[n].connect(this.out,0,n)}return(0,_createClass3$7.default)(r,[{key:"updateBuffers",value:function(){for(var t=0;t<this.nCh;t++)this.analysers[t].getFloatTimeDomainData(this.analBuffers[t])}},{key:"computeRMS",value:function(){var t=new Array(this.nCh);t.fill(0);for(var n=0;n<this.nCh;n++){for(var i=0;i<this.fftSize;i++)t[n]=t[n]+this.analBuffers[n][i]*this.analBuffers[n][i];t[n]=Math.sqrt(t[n]/this.fftSize)}return t}}]),r}();ambiRmsAnalyser.default=rmsAnalyser;var ambiPowermapAnalyser={};Object.defineProperty(ambiPowermapAnalyser,"__esModule",{value:!0});var _classCallCheck2$7=classCallCheck,_classCallCheck3$7=_interopRequireDefault$7(_classCallCheck2$7),_createClass2$6=createClass,_createClass3$6=_interopRequireDefault$7(_createClass2$6),_numeric=numeric1_2_6,numeric$1=_interopRequireWildcard$1(_numeric),_sphericalHarmonicTransform=src,jshlib=_interopRequireWildcard$1(_sphericalHarmonicTransform);function _interopRequireWildcard$1(r){if(r&&r.__esModule)return r;var e={};if(r!=null)for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t]);return e.default=r,e}function _interopRequireDefault$7(r){return r&&r.__esModule?r:{default:r}}var utils$3=utils$6,powermapAnalyser=function(){function r(e,t,n){(0,_classCallCheck3$7.default)(this,r),this.ctx=e,this.order=t,this.nCh=(t+1)*(t+1),this.fftSize=2048,this.analysers=new Array(this.nCh),this.analBuffers=new Array(this.nCh),this.in=this.ctx.createChannelSplitter(this.nCh),this.out=this.ctx.createChannelMerger(this.nCh);for(var i=0;i<this.nCh;i++)this.analysers[i]=this.ctx.createAnalyser(),this.analysers[i].fftSize=this.fftSize,this.analysers[i].smoothingTimeConstant=0,this.analBuffers[i]=new Float32Array(this.fftSize);for(var s=0;s<this.nCh;s++)this.in.connect(this.out,s,s),this.in.connect(this.analysers[s],s,0);var a=utils$3.getTdesign(4*t);this.td_dirs_rad=utils$3.deg2rad(a),this.SHmtx=jshlib.computeRealSH(this.order,this.td_dirs_rad),this.mode=n}return(0,_createClass3$6.default)(r,[{key:"updateBuffers",value:function(){for(var t=0;t<this.nCh;t++)this.analysers[t].getFloatTimeDomainData(this.analBuffers[t])}},{key:"computePowermap",value:function(){for(var t=this.td_dirs_rad.length,n=numeric$1.dot(numeric$1.transpose(this.SHmtx),this.analBuffers),i=new Array(t),s=0;s<t;s++){for(var a=0;a<this.fftSize;a++){var o=0;o=o+n[s][a]*n[s][a]}var o=o/this.fftSize;i[s]=[this.td_dirs_rad[s][0],this.td_dirs_rad[s][1],o]}if(this.mode==0)return i;if(this.mode==1){var c=jshlib.forwardSHT(2*this.order,i);return c}}}]),r}();ambiPowermapAnalyser.default=powermapAnalyser;var ambiIntensityAnalyser={};Object.defineProperty(ambiIntensityAnalyser,"__esModule",{value:!0});var _classCallCheck2$6=classCallCheck,_classCallCheck3$6=_interopRequireDefault$6(_classCallCheck2$6),_createClass2$5=createClass,_createClass3$5=_interopRequireDefault$6(_createClass2$5);function _interopRequireDefault$6(r){return r&&r.__esModule?r:{default:r}}var intensityAnalyser=function(){function r(e){(0,_classCallCheck3$6.default)(this,r),this.ctx=e,this.fftSize=2048,this.in=this.ctx.createChannelSplitter(4),this.out=this.ctx.createChannelMerger(4),this.gains=new Array(3);for(var t=0;t<3;t++)this.gains[t]=this.ctx.createGain(),this.gains[t].gain.value=1/Math.sqrt(3);for(this.analysers=new Array(4),this.analBuffers=new Array(4),t=0;t<4;t++)this.analysers[t]=this.ctx.createAnalyser(),this.analysers[t].fftSize=this.fftSize,this.analysers[t].smoothingTimeConstant=0,this.analBuffers[t]=new Float32Array(this.fftSize);for(this.in.connect(this.out,0,0),this.in.connect(this.analysers[0],0,0),this.in.connect(this.gains[1],1,0),this.in.connect(this.gains[2],2,0),this.in.connect(this.gains[0],3,0),t=0;t<3;t++)this.gains[t].connect(this.analysers[t+1],0,0),this.gains[t].connect(this.out,0,t+1)}return(0,_createClass3$5.default)(r,[{key:"updateBuffers",value:function(){for(var t=0;t<4;t++)this.analysers[t].getFloatTimeDomainData(this.analBuffers[t])}},{key:"computeIntensity",value:function(){for(var t=0,n=0,i=0,s=0,a=0,o=0,c=0,l,u,h,d,f,p,_=0;_<this.fftSize;_++)t=t+this.analBuffers[0][_]*this.analBuffers[1][_],n=n+this.analBuffers[0][_]*this.analBuffers[2][_],i=i+this.analBuffers[0][_]*this.analBuffers[3][_],s=s+this.analBuffers[0][_]*this.analBuffers[0][_],a=a+this.analBuffers[1][_]*this.analBuffers[1][_],o=o+this.analBuffers[2][_]*this.analBuffers[2][_],c=c+this.analBuffers[3][_]*this.analBuffers[3][_];l=[t,n,i],u=Math.sqrt(l[0]*l[0]+l[1]*l[1]+l[2]*l[2]),h=(s+a+o+c)/2,d=1-u/(h+1e-7),f=Math.atan2(n,t)*180/Math.PI,p=Math.atan2(l[2],Math.sqrt(l[0]*l[0]+l[1]*l[1]))*180/Math.PI;var g=[f,p,d,h];return g}}]),r}();ambiIntensityAnalyser.default=intensityAnalyser;var ambiIntensityAnalyser2D={};Object.defineProperty(ambiIntensityAnalyser2D,"__esModule",{value:!0});var _classCallCheck2$5=classCallCheck,_classCallCheck3$5=_interopRequireDefault$5(_classCallCheck2$5),_createClass2$4=createClass,_createClass3$4=_interopRequireDefault$5(_createClass2$4);function _interopRequireDefault$5(r){return r&&r.__esModule?r:{default:r}}var intensityAnalyser2D=function(){function r(e){(0,_classCallCheck3$5.default)(this,r),this.ctx=e,this.fftSize=2048,this.in=this.ctx.createChannelSplitter(3),this.out=this.ctx.createChannelMerger(3),this.gains=new Array(2);for(var t=0;t<2;t++)this.gains[t]=this.ctx.createGain(),this.gains[t].gain.value=1/Math.sqrt(3);for(this.analysers=new Array(3),this.analBuffers=new Array(3),t=0;t<3;t++)this.analysers[t]=this.ctx.createAnalyser(),this.analysers[t].fftSize=this.fftSize,this.analysers[t].smoothingTimeConstant=0,this.analBuffers[t]=new Float32Array(this.fftSize);for(this.in.connect(this.out,0,0),this.in.connect(this.analysers[0],0,0),this.in.connect(this.gains[1],1,0),this.in.connect(this.gains[0],2,0),t=0;t<2;t++)this.gains[t].connect(this.analysers[t+1],0,0),this.gains[t].connect(this.out,0,t+1)}return(0,_createClass3$4.default)(r,[{key:"updateBuffers",value:function(){for(var t=0;t<3;t++)this.analysers[t].getFloatTimeDomainData(this.analBuffers[t])}},{key:"computeIntensity",value:function(){for(var t=0,n=0,i=0,s=0,a=0,o,c,l,u,h,d,f=0;f<this.fftSize;f++)t=t+this.analBuffers[0][f]*this.analBuffers[1][f],n=n+this.analBuffers[0][f]*this.analBuffers[2][f],i=i+this.analBuffers[0][f]*this.analBuffers[0][f],s=s+this.analBuffers[1][f]*this.analBuffers[1][f],a=a+this.analBuffers[2][f]*this.analBuffers[2][f];o=[t,n],c=Math.sqrt(o[0]*o[0]+o[1]*o[1]),l=(i+s+a)/2,u=1-c/(l+1e-7),h=-Math.atan2(n,t)*180/Math.PI,d=0;var p=[h,d,u,l];return p}}]),r}();ambiIntensityAnalyser2D.default=intensityAnalyser2D;var hoaLoader={};Object.defineProperty(hoaLoader,"__esModule",{value:!0});var _classCallCheck2$4=classCallCheck,_classCallCheck3$4=_interopRequireDefault$4(_classCallCheck2$4),_createClass2$3=createClass,_createClass3$3=_interopRequireDefault$4(_createClass2$3);function _interopRequireDefault$4(r){return r&&r.__esModule?r:{default:r}}var HOAloader=function(){function r(e,t,n,i){(0,_classCallCheck3$4.default)(this,r),this.context=e,this.order=t,this.nCh=(t+1)*(t+1),this.nChGroups=Math.ceil(this.nCh/8),this.buffers=new Array,this.loadCount=0,this.loaded=!1,this.onLoad=i,this.urls=new Array(this.nChGroups);var s=n.slice(n.length-3,n.length);this.fileExt=s;for(var a=0;a<this.nChGroups;a++)a==this.nChGroups-1?this.urls[a]=n.slice(0,n.length-4)+"_"+o(a*8+1,2)+"-"+o(this.nCh,2)+"ch."+s:this.urls[a]=n.slice(0,n.length-4)+"_"+o(a*8+1,2)+"-"+o(a*8+8,2)+"ch."+s;function o(c,l){return("000000000"+c).substr(-l)}}return(0,_createClass3$3.default)(r,[{key:"loadBuffers",value:function(t,n){var i=new XMLHttpRequest;i.open("GET",t,!0),i.responseType="arraybuffer";var s=this;i.onload=function(){s.context.decodeAudioData(i.response,function(a){if(!a){alert("error decoding file data: "+t);return}s.buffers[n]=a,s.loadCount++,s.loadCount==s.nChGroups&&(s.loaded=!0,s.concatBuffers(),console.log("HOAloader: all buffers loaded and concatenated"),s.onLoad(s.concatBuffer))},function(a){alert("Browser cannot decode audio data:  "+t+`

Error: `+a+`

(If you re using Safari and get a null error, this is most likely due to Apple's shady plan going on to stop the .ogg format from easing web developer's life :)`)})},i.onerror=function(){alert("HOAloader: XHR error")},i.send()}},{key:"load",value:function(){for(var t=0;t<this.nChGroups;++t)this.loadBuffers(this.urls[t],t)}},{key:"concatBuffers",value:function(){if(this.loaded){var t=this.nCh,n=this.nChGroups,i=this.buffers[0].length;this.buffers.forEach(function(l){i=Math.max(i,l.length)});var s=this.buffers[0].sampleRate,a=[1,2,3,4,5,6,7,8];this.fileExt.toLowerCase()=="ogg"&&(console.log("Loading of 8chan OGG files [Chrome/Firefox]: remap channels to correct order!"),a=[1,3,2,7,8,5,6,4]),this.concatBuffer=this.context.createBuffer(t,i,s);for(var o=0;o<n;o++)for(var c=0;c<this.buffers[o].numberOfChannels;c++)this.concatBuffer.getChannelData(o*8+c).set(this.buffers[o].getChannelData(a[c]-1))}}}]),r}();hoaLoader.default=HOAloader;var hrirLoader_local={};Object.defineProperty(hrirLoader_local,"__esModule",{value:!0});var _classCallCheck2$3=classCallCheck,_classCallCheck3$3=_interopRequireDefault$3(_classCallCheck2$3),_createClass2$2=createClass,_createClass3$2=_interopRequireDefault$3(_createClass2$2);function _interopRequireDefault$3(r){return r&&r.__esModule?r:{default:r}}var utils$2=utils$6,HRIRloader_local=function(){function r(e,t,n){(0,_classCallCheck3$3.default)(this,r),this.context=e,this.order=t,this.nCh=(t+1)*(t+1),this.onLoad=n,this.vls_dirs_deg=utils$2.getTdesign(2*this.order),this.nVLS=this.vls_dirs_deg.length,this.nearestLookupRes=[5,5]}return(0,_createClass3$2.default)(r,[{key:"load",value:function(t){var n=this,i=new XMLHttpRequest;i.open("GET",t,!0),i.responseType="json",i.onload=function(){n.parseHrirFromJSON(i.response),n.nearestLookup=utils$2.createNearestLookup(n.hrir_dirs_deg,n.nearestLookupRes);var s=utils$2.findNearest(n.vls_dirs_deg,n.nearestLookup,n.nearestLookupRes);n.nearest_dirs_deg=n.getClosestDirs(s,n.hrir_dirs_deg),n.vls_hrirs=n.getClosestHrirFilters(s,n.hrirs),n.computeDecFilters()},i.send()}},{key:"parseHrirFromJSON",value:function(t){var n=this;this.fs=t.leaves[6].data[0],this.nHrirs=t.leaves[4].data.length,this.nSamples=t.leaves[8].data[0][1].length,this.hrir_dirs_deg=[],t.leaves[4].data.forEach(function(i){n.hrir_dirs_deg.push([i[0],i[1]])}),this.hrirs=[],t.leaves[8].data.forEach(function(i){var s=new Float64Array(i[0]),a=new Float64Array(i[1]);n.hrirs.push([s,a])})}},{key:"getClosestDirs",value:function(t,n){for(var i=t.length,s=[],a=0;a<i;a++)s.push(n[t[a]]);return s}},{key:"getClosestHrirFilters",value:function(t,n){for(var i=t.length,s=[],a=0;a<i;a++)s.push(n[t[a]]);return s}},{key:"computeDecFilters",value:function(){this.decodingMatrix=utils$2.getAmbiBinauralDecMtx(this.nearest_dirs_deg,this.order),this.hoaBuffer=this.getHoaFilterFromHrirFilter(this.nCh,this.nSamples,this.fs,this.vls_hrirs,this.decodingMatrix),this.onLoad(this.hoaBuffer)}},{key:"getHoaFilterFromHrirFilter",value:function(t,n,i,s,a){n>s[0][0].length&&(n=s[0][0].length);for(var o=this.context.createBuffer(t,n,i),c=0;c<t;c++){for(var l=new Float32Array(n),u=0;u<s.length;u++)for(var h=0;h<n;h++)l[h]+=a[u][c]*s[u][0][h];o.getChannelData(c).set(l)}return o}}]),r}();hrirLoader_local.default=HRIRloader_local;var hrirLoader2D_local={};Object.defineProperty(hrirLoader2D_local,"__esModule",{value:!0});var _classCallCheck2$2=classCallCheck,_classCallCheck3$2=_interopRequireDefault$2(_classCallCheck2$2),_createClass2$1=createClass,_createClass3$1=_interopRequireDefault$2(_createClass2$1);function _interopRequireDefault$2(r){return r&&r.__esModule?r:{default:r}}var utils$1=utils$6,HRIRloader2D_local=function(){function r(e,t,n){(0,_classCallCheck3$2.default)(this,r),this.context=e,this.order=t,this.nCh=2*t+1,this.onLoad=n,this.vls_dirs_deg=utils$1.sampleCircle(2*this.order+2),this.nVLS=this.vls_dirs_deg.length,this.nearestLookupRes=[5,5]}return(0,_createClass3$1.default)(r,[{key:"load",value:function(t){var n=this,i=new XMLHttpRequest;i.open("GET",t,!0),i.responseType="json",i.onload=function(){n.parseHrirFromJSON(i.response),n.nearestLookup=utils$1.createNearestLookup(n.hrir_dirs_deg,n.nearestLookupRes);var s=utils$1.findNearest(n.vls_dirs_deg,n.nearestLookup,n.nearestLookupRes);n.nearest_dirs_deg=n.getClosestDirs(s,n.hrir_dirs_deg),n.vls_hrirs=n.getClosestHrirFilters(s,n.hrirs),n.computeDecFilters()},i.send()}},{key:"parseHrirFromJSON",value:function(t){var n=this;this.fs=t.leaves[6].data[0],this.nHrirs=t.leaves[4].data.length,this.nSamples=t.leaves[8].data[0][1].length,this.hrir_dirs_deg=[],t.leaves[4].data.forEach(function(i){n.hrir_dirs_deg.push([i[0],i[1]])}),this.hrirs=[],t.leaves[8].data.forEach(function(i){var s=new Float64Array(i[0]),a=new Float64Array(i[1]);n.hrirs.push([s,a])})}},{key:"getClosestDirs",value:function(t,n){for(var i=t.length,s=[],a=0;a<i;a++)s.push(n[t[a]]);return s}},{key:"getClosestHrirFilters",value:function(t,n){for(var i=t.length,s=[],a=0;a<i;a++)s.push(n[t[a]]);return s}},{key:"computeDecFilters",value:function(){var t=[];t.push(1);for(var n=1;n<this.order+1;n++)t.push(Math.cos(n*Math.PI/(2*this.order+2))),t.push(Math.cos(n*Math.PI/(2*this.order+2)));var i=numeric.diag(t);this.decodingMatrix=numeric.transpose(utils$1.getCircHarmonics(this.order,utils$1.getColumn(this.vls_dirs_deg,0))),this.decodingMatrix=numeric.dot(this.decodingMatrix,i),this.decodingMatrix=numeric.mul(2*Math.PI/this.vls_dirs_deg.length,this.decodingMatrix),this.hoaBuffer=this.getHoaFilterFromHrirFilter(this.nCh,this.nSamples,this.fs,this.vls_hrirs,this.decodingMatrix),this.onLoad(this.hoaBuffer)}},{key:"getHoaFilterFromHrirFilter",value:function(t,n,i,s,a){n>s[0][0].length&&(n=s[0][0].length);for(var o=this.context.createBuffer(t,n,i),c=0;c<t;c++){for(var l=new Float32Array(n),u=0;u<s.length;u++)for(var h=0;h<n;h++)l[h]+=a[u][c]*s[u][0][h];o.getChannelData(c).set(l)}return o}}]),r}();hrirLoader2D_local.default=HRIRloader2D_local;var hrirLoader_ircam={};function commonjsRequire(r){throw new Error('Could not dynamically require "'+r+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var serveSofaHrir$1={exports:{}};(function(r,e){(function(t){r.exports=t()})(function(){return function t(n,i,s){function a(l,u){if(!i[l]){if(!n[l]){var h=typeof commonjsRequire=="function"&&commonjsRequire;if(!u&&h)return h(l,!0);if(o)return o(l,!0);var d=new Error("Cannot find module '"+l+"'");throw d.code="MODULE_NOT_FOUND",d}var f=i[l]={exports:{}};n[l][0].call(f.exports,function(p){var _=n[l][1][p];return a(_||p)},f,f.exports,t,n,i,s)}return i[l].exports}for(var o=typeof commonjsRequire=="function"&&commonjsRequire,c=0;c<s.length;c++)a(s[c]);return a}({1:[function(t,n,i){n.exports={default:t("core-js/library/fn/object/define-property"),__esModule:!0}},{"core-js/library/fn/object/define-property":4}],2:[function(t,n,i){i.default=function(s,a){if(!(s instanceof a))throw new TypeError("Cannot call a class as a function")},i.__esModule=!0},{}],3:[function(t,n,i){var s=t("babel-runtime/core-js/object/define-property").default;i.default=function(){function a(o,c){for(var l=0;l<c.length;l++){var u=c[l];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),s(o,u.key,u)}}return function(o,c,l){return c&&a(o.prototype,c),l&&a(o,l),o}}(),i.__esModule=!0},{"babel-runtime/core-js/object/define-property":1}],4:[function(t,n,i){var s=t("../../modules/$");n.exports=function(o,c,l){return s.setDesc(o,c,l)}},{"../../modules/$":5}],5:[function(t,n,i){var s=Object;n.exports={create:s.create,getProto:s.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:s.getOwnPropertyDescriptor,setDesc:s.defineProperty,setDescs:s.defineProperties,getKeys:s.keys,getNames:s.getOwnPropertyNames,getSymbols:s.getOwnPropertySymbols,each:[].forEach}},{}],6:[function(t,n,i){var s=t("babel-runtime/helpers/create-class").default,a=t("babel-runtime/helpers/class-call-check").default;Object.defineProperty(i,"__esModule",{value:!0});var o=function(){function c(l,u){a(this,c),this.delayTime=0,this.posRead=0,this.posWrite=0,this.fracXi1=0,this.fracYi1=0,this.intDelay=0,this.fracDelay=0,this.a1=void 0,this.sampleRate=l,this.maxDelayTime=u||1,this.bufferSize=this.maxDelayTime*this.sampleRate,this.bufferSize%1!==0&&(this.bufferSize=parseInt(this.bufferSize)+1),this.buffer=new Float32Array(this.bufferSize)}return s(c,[{key:"setDelay",value:function(u){if(u<this.maxDelayTime){this.delayTime=u;var h=u*this.sampleRate;this.intDelay=parseInt(h),this.fracDelay=h-this.intDelay,this.resample(),this.fracDelay!==0&&this.updateThiranCoefficient()}else throw new Error("delayTime > maxDelayTime")}},{key:"getDelay",value:function(){return this.delayTime}},{key:"process",value:function(u){for(var h=new Float32Array(u.length),d=0;d<u.length;d=d+1)this.buffer[this.posWrite]=u[d],h[d]=this.buffer[this.posRead],this.updatePointers();return this.fracDelay===0||(h=new Float32Array(this.fractionalThiranProcess(h))),h}},{key:"updatePointers",value:function(){this.posWrite===this.buffer.length-1?this.posWrite=0:this.posWrite=this.posWrite+1,this.posRead===this.buffer.length-1?this.posRead=0:this.posRead=this.posRead+1}},{key:"updateThiranCoefficient",value:function(){this.a1=(1-this.fracDelay)/(1+this.fracDelay)}},{key:"resample",value:function(){if(this.posWrite-this.intDelay<0){var u=this.intDelay-this.posWrite;this.posRead=this.buffer.length-u}else this.posRead=this.posWrite-this.intDelay}},{key:"fractionalThiranProcess",value:function(u){for(var h=new Float32Array(u.length),d,f,p=this.fracXi1,_=this.fracYi1,g=0;g<u.length;g=g+1)d=u[g],f=this.a1*d+p-this.a1*_,p=d,_=f,h[g]=f;return this.fracXi1=p,this.fracYi1=_,h}}]),c}();i.default=o,n.exports=i.default},{"babel-runtime/helpers/class-call-check":2,"babel-runtime/helpers/create-class":3}],7:[function(t,n,i){n.exports=t("./dist/fractional-delay")},{"./dist/fractional-delay":6}],8:[function(t,n,i){(function(a,o){if(typeof i=="object"&&typeof n=="object")n.exports=o();else{var c=o();for(var l in c)(typeof i=="object"?i:a)[l]=c[l]}})(this,function(){return function(s){var a={};function o(c){if(a[c])return a[c].exports;var l=a[c]={i:c,l:!1,exports:{}};return s[c].call(l.exports,l,l.exports,o),l.l=!0,l.exports}return o.m=s,o.c=a,o.d=function(c,l,u){o.o(c,l)||Object.defineProperty(c,l,{configurable:!1,enumerable:!0,get:u})},o.n=function(c){var l=c&&c.__esModule?function(){return c.default}:function(){return c};return o.d(l,"a",l),l},o.o=function(c,l){return Object.prototype.hasOwnProperty.call(c,l)},o.p="",o(o.s=4)}([function(s,a,o){Object.defineProperty(a,"__esModule",{value:!0}),a.setMatrixArrayType=l,a.toRadian=h,a.equals=d;var c=a.EPSILON=1e-6;a.ARRAY_TYPE=typeof Float32Array<"u"?Float32Array:Array,a.RANDOM=Math.random;function l(f){a.ARRAY_TYPE=f}var u=Math.PI/180;function h(f){return f*u}function d(f,p){return Math.abs(f-p)<=c*Math.max(1,Math.abs(f),Math.abs(p))}},function(s,a,o){Object.defineProperty(a,"__esModule",{value:!0}),a.sub=a.mul=void 0,a.create=h,a.fromMat4=d,a.clone=f,a.copy=p,a.fromValues=_,a.set=g,a.identity=v,a.transpose=F,a.invert=y,a.adjoint=x,a.determinant=b,a.multiply=L,a.translate=G,a.rotate=M,a.scale=S,a.fromTranslation=E,a.fromRotation=I,a.fromScaling=q,a.fromMat2d=Y,a.fromQuat=J,a.normalFromMat4=de,a.projection=fe,a.str=pe,a.frob=X,a.add=O,a.subtract=j,a.multiplyScalar=re,a.multiplyScalarAndAdd=le,a.exactEquals=me,a.equals=ce;var c=o(0),l=u(c);function u(N){if(N&&N.__esModule)return N;var w={};if(N!=null)for(var $ in N)Object.prototype.hasOwnProperty.call(N,$)&&(w[$]=N[$]);return w.default=N,w}function h(){var N=new l.ARRAY_TYPE(9);return N[0]=1,N[1]=0,N[2]=0,N[3]=0,N[4]=1,N[5]=0,N[6]=0,N[7]=0,N[8]=1,N}function d(N,w){return N[0]=w[0],N[1]=w[1],N[2]=w[2],N[3]=w[4],N[4]=w[5],N[5]=w[6],N[6]=w[8],N[7]=w[9],N[8]=w[10],N}function f(N){var w=new l.ARRAY_TYPE(9);return w[0]=N[0],w[1]=N[1],w[2]=N[2],w[3]=N[3],w[4]=N[4],w[5]=N[5],w[6]=N[6],w[7]=N[7],w[8]=N[8],w}function p(N,w){return N[0]=w[0],N[1]=w[1],N[2]=w[2],N[3]=w[3],N[4]=w[4],N[5]=w[5],N[6]=w[6],N[7]=w[7],N[8]=w[8],N}function _(N,w,$,ee,Z,ne,he,Ce,De){var H=new l.ARRAY_TYPE(9);return H[0]=N,H[1]=w,H[2]=$,H[3]=ee,H[4]=Z,H[5]=ne,H[6]=he,H[7]=Ce,H[8]=De,H}function g(N,w,$,ee,Z,ne,he,Ce,De,H){return N[0]=w,N[1]=$,N[2]=ee,N[3]=Z,N[4]=ne,N[5]=he,N[6]=Ce,N[7]=De,N[8]=H,N}function v(N){return N[0]=1,N[1]=0,N[2]=0,N[3]=0,N[4]=1,N[5]=0,N[6]=0,N[7]=0,N[8]=1,N}function F(N,w){if(N===w){var $=w[1],ee=w[2],Z=w[5];N[1]=w[3],N[2]=w[6],N[3]=$,N[5]=w[7],N[6]=ee,N[7]=Z}else N[0]=w[0],N[1]=w[3],N[2]=w[6],N[3]=w[1],N[4]=w[4],N[5]=w[7],N[6]=w[2],N[7]=w[5],N[8]=w[8];return N}function y(N,w){var $=w[0],ee=w[1],Z=w[2],ne=w[3],he=w[4],Ce=w[5],De=w[6],H=w[7],ae=w[8],ue=ae*he-Ce*H,Ee=-ae*ne+Ce*De,ye=H*ne-he*De,m=$*ue+ee*Ee+Z*ye;return m?(m=1/m,N[0]=ue*m,N[1]=(-ae*ee+Z*H)*m,N[2]=(Ce*ee-Z*he)*m,N[3]=Ee*m,N[4]=(ae*$-Z*De)*m,N[5]=(-Ce*$+Z*ne)*m,N[6]=ye*m,N[7]=(-H*$+ee*De)*m,N[8]=(he*$-ee*ne)*m,N):null}function x(N,w){var $=w[0],ee=w[1],Z=w[2],ne=w[3],he=w[4],Ce=w[5],De=w[6],H=w[7],ae=w[8];return N[0]=he*ae-Ce*H,N[1]=Z*H-ee*ae,N[2]=ee*Ce-Z*he,N[3]=Ce*De-ne*ae,N[4]=$*ae-Z*De,N[5]=Z*ne-$*Ce,N[6]=ne*H-he*De,N[7]=ee*De-$*H,N[8]=$*he-ee*ne,N}function b(N){var w=N[0],$=N[1],ee=N[2],Z=N[3],ne=N[4],he=N[5],Ce=N[6],De=N[7],H=N[8];return w*(H*ne-he*De)+$*(-H*Z+he*Ce)+ee*(De*Z-ne*Ce)}function L(N,w,$){var ee=w[0],Z=w[1],ne=w[2],he=w[3],Ce=w[4],De=w[5],H=w[6],ae=w[7],ue=w[8],Ee=$[0],ye=$[1],m=$[2],R=$[3],z=$[4],D=$[5],K=$[6],te=$[7],se=$[8];return N[0]=Ee*ee+ye*he+m*H,N[1]=Ee*Z+ye*Ce+m*ae,N[2]=Ee*ne+ye*De+m*ue,N[3]=R*ee+z*he+D*H,N[4]=R*Z+z*Ce+D*ae,N[5]=R*ne+z*De+D*ue,N[6]=K*ee+te*he+se*H,N[7]=K*Z+te*Ce+se*ae,N[8]=K*ne+te*De+se*ue,N}function G(N,w,$){var ee=w[0],Z=w[1],ne=w[2],he=w[3],Ce=w[4],De=w[5],H=w[6],ae=w[7],ue=w[8],Ee=$[0],ye=$[1];return N[0]=ee,N[1]=Z,N[2]=ne,N[3]=he,N[4]=Ce,N[5]=De,N[6]=Ee*ee+ye*he+H,N[7]=Ee*Z+ye*Ce+ae,N[8]=Ee*ne+ye*De+ue,N}function M(N,w,$){var ee=w[0],Z=w[1],ne=w[2],he=w[3],Ce=w[4],De=w[5],H=w[6],ae=w[7],ue=w[8],Ee=Math.sin($),ye=Math.cos($);return N[0]=ye*ee+Ee*he,N[1]=ye*Z+Ee*Ce,N[2]=ye*ne+Ee*De,N[3]=ye*he-Ee*ee,N[4]=ye*Ce-Ee*Z,N[5]=ye*De-Ee*ne,N[6]=H,N[7]=ae,N[8]=ue,N}function S(N,w,$){var ee=$[0],Z=$[1];return N[0]=ee*w[0],N[1]=ee*w[1],N[2]=ee*w[2],N[3]=Z*w[3],N[4]=Z*w[4],N[5]=Z*w[5],N[6]=w[6],N[7]=w[7],N[8]=w[8],N}function E(N,w){return N[0]=1,N[1]=0,N[2]=0,N[3]=0,N[4]=1,N[5]=0,N[6]=w[0],N[7]=w[1],N[8]=1,N}function I(N,w){var $=Math.sin(w),ee=Math.cos(w);return N[0]=ee,N[1]=$,N[2]=0,N[3]=-$,N[4]=ee,N[5]=0,N[6]=0,N[7]=0,N[8]=1,N}function q(N,w){return N[0]=w[0],N[1]=0,N[2]=0,N[3]=0,N[4]=w[1],N[5]=0,N[6]=0,N[7]=0,N[8]=1,N}function Y(N,w){return N[0]=w[0],N[1]=w[1],N[2]=0,N[3]=w[2],N[4]=w[3],N[5]=0,N[6]=w[4],N[7]=w[5],N[8]=1,N}function J(N,w){var $=w[0],ee=w[1],Z=w[2],ne=w[3],he=$+$,Ce=ee+ee,De=Z+Z,H=$*he,ae=ee*he,ue=ee*Ce,Ee=Z*he,ye=Z*Ce,m=Z*De,R=ne*he,z=ne*Ce,D=ne*De;return N[0]=1-ue-m,N[3]=ae-D,N[6]=Ee+z,N[1]=ae+D,N[4]=1-H-m,N[7]=ye-R,N[2]=Ee-z,N[5]=ye+R,N[8]=1-H-ue,N}function de(N,w){var $=w[0],ee=w[1],Z=w[2],ne=w[3],he=w[4],Ce=w[5],De=w[6],H=w[7],ae=w[8],ue=w[9],Ee=w[10],ye=w[11],m=w[12],R=w[13],z=w[14],D=w[15],K=$*Ce-ee*he,te=$*De-Z*he,se=$*H-ne*he,ie=ee*De-Z*Ce,Se=ee*H-ne*Ce,ve=Z*H-ne*De,be=ae*R-ue*m,Pe=ae*z-Ee*m,_e=ae*D-ye*m,Ae=ue*z-Ee*R,Ie=ue*D-ye*R,Fe=Ee*D-ye*z,Te=K*Fe-te*Ie+se*Ae+ie*_e-Se*Pe+ve*be;return Te?(Te=1/Te,N[0]=(Ce*Fe-De*Ie+H*Ae)*Te,N[1]=(De*_e-he*Fe-H*Pe)*Te,N[2]=(he*Ie-Ce*_e+H*be)*Te,N[3]=(Z*Ie-ee*Fe-ne*Ae)*Te,N[4]=($*Fe-Z*_e+ne*Pe)*Te,N[5]=(ee*_e-$*Ie-ne*be)*Te,N[6]=(R*ve-z*Se+D*ie)*Te,N[7]=(z*se-m*ve-D*te)*Te,N[8]=(m*Se-R*se+D*K)*Te,N):null}function fe(N,w,$){return N[0]=2/w,N[1]=0,N[2]=0,N[3]=0,N[4]=-2/$,N[5]=0,N[6]=-1,N[7]=1,N[8]=1,N}function pe(N){return"mat3("+N[0]+", "+N[1]+", "+N[2]+", "+N[3]+", "+N[4]+", "+N[5]+", "+N[6]+", "+N[7]+", "+N[8]+")"}function X(N){return Math.sqrt(Math.pow(N[0],2)+Math.pow(N[1],2)+Math.pow(N[2],2)+Math.pow(N[3],2)+Math.pow(N[4],2)+Math.pow(N[5],2)+Math.pow(N[6],2)+Math.pow(N[7],2)+Math.pow(N[8],2))}function O(N,w,$){return N[0]=w[0]+$[0],N[1]=w[1]+$[1],N[2]=w[2]+$[2],N[3]=w[3]+$[3],N[4]=w[4]+$[4],N[5]=w[5]+$[5],N[6]=w[6]+$[6],N[7]=w[7]+$[7],N[8]=w[8]+$[8],N}function j(N,w,$){return N[0]=w[0]-$[0],N[1]=w[1]-$[1],N[2]=w[2]-$[2],N[3]=w[3]-$[3],N[4]=w[4]-$[4],N[5]=w[5]-$[5],N[6]=w[6]-$[6],N[7]=w[7]-$[7],N[8]=w[8]-$[8],N}function re(N,w,$){return N[0]=w[0]*$,N[1]=w[1]*$,N[2]=w[2]*$,N[3]=w[3]*$,N[4]=w[4]*$,N[5]=w[5]*$,N[6]=w[6]*$,N[7]=w[7]*$,N[8]=w[8]*$,N}function le(N,w,$,ee){return N[0]=w[0]+$[0]*ee,N[1]=w[1]+$[1]*ee,N[2]=w[2]+$[2]*ee,N[3]=w[3]+$[3]*ee,N[4]=w[4]+$[4]*ee,N[5]=w[5]+$[5]*ee,N[6]=w[6]+$[6]*ee,N[7]=w[7]+$[7]*ee,N[8]=w[8]+$[8]*ee,N}function me(N,w){return N[0]===w[0]&&N[1]===w[1]&&N[2]===w[2]&&N[3]===w[3]&&N[4]===w[4]&&N[5]===w[5]&&N[6]===w[6]&&N[7]===w[7]&&N[8]===w[8]}function ce(N,w){var $=N[0],ee=N[1],Z=N[2],ne=N[3],he=N[4],Ce=N[5],De=N[6],H=N[7],ae=N[8],ue=w[0],Ee=w[1],ye=w[2],m=w[3],R=w[4],z=w[5],D=w[6],K=w[7],te=w[8];return Math.abs($-ue)<=l.EPSILON*Math.max(1,Math.abs($),Math.abs(ue))&&Math.abs(ee-Ee)<=l.EPSILON*Math.max(1,Math.abs(ee),Math.abs(Ee))&&Math.abs(Z-ye)<=l.EPSILON*Math.max(1,Math.abs(Z),Math.abs(ye))&&Math.abs(ne-m)<=l.EPSILON*Math.max(1,Math.abs(ne),Math.abs(m))&&Math.abs(he-R)<=l.EPSILON*Math.max(1,Math.abs(he),Math.abs(R))&&Math.abs(Ce-z)<=l.EPSILON*Math.max(1,Math.abs(Ce),Math.abs(z))&&Math.abs(De-D)<=l.EPSILON*Math.max(1,Math.abs(De),Math.abs(D))&&Math.abs(H-K)<=l.EPSILON*Math.max(1,Math.abs(H),Math.abs(K))&&Math.abs(ae-te)<=l.EPSILON*Math.max(1,Math.abs(ae),Math.abs(te))}a.mul=L,a.sub=j},function(s,a,o){Object.defineProperty(a,"__esModule",{value:!0}),a.forEach=a.sqrLen=a.len=a.sqrDist=a.dist=a.div=a.mul=a.sub=void 0,a.create=h,a.clone=d,a.length=f,a.fromValues=p,a.copy=_,a.set=g,a.add=v,a.subtract=F,a.multiply=y,a.divide=x,a.ceil=b,a.floor=L,a.min=G,a.max=M,a.round=S,a.scale=E,a.scaleAndAdd=I,a.distance=q,a.squaredDistance=Y,a.squaredLength=J,a.negate=de,a.inverse=fe,a.normalize=pe,a.dot=X,a.cross=O,a.lerp=j,a.hermite=re,a.bezier=le,a.random=me,a.transformMat4=ce,a.transformMat3=N,a.transformQuat=w,a.rotateX=$,a.rotateY=ee,a.rotateZ=Z,a.angle=ne,a.str=he,a.exactEquals=Ce,a.equals=De;var c=o(0),l=u(c);function u(H){if(H&&H.__esModule)return H;var ae={};if(H!=null)for(var ue in H)Object.prototype.hasOwnProperty.call(H,ue)&&(ae[ue]=H[ue]);return ae.default=H,ae}function h(){var H=new l.ARRAY_TYPE(3);return H[0]=0,H[1]=0,H[2]=0,H}function d(H){var ae=new l.ARRAY_TYPE(3);return ae[0]=H[0],ae[1]=H[1],ae[2]=H[2],ae}function f(H){var ae=H[0],ue=H[1],Ee=H[2];return Math.sqrt(ae*ae+ue*ue+Ee*Ee)}function p(H,ae,ue){var Ee=new l.ARRAY_TYPE(3);return Ee[0]=H,Ee[1]=ae,Ee[2]=ue,Ee}function _(H,ae){return H[0]=ae[0],H[1]=ae[1],H[2]=ae[2],H}function g(H,ae,ue,Ee){return H[0]=ae,H[1]=ue,H[2]=Ee,H}function v(H,ae,ue){return H[0]=ae[0]+ue[0],H[1]=ae[1]+ue[1],H[2]=ae[2]+ue[2],H}function F(H,ae,ue){return H[0]=ae[0]-ue[0],H[1]=ae[1]-ue[1],H[2]=ae[2]-ue[2],H}function y(H,ae,ue){return H[0]=ae[0]*ue[0],H[1]=ae[1]*ue[1],H[2]=ae[2]*ue[2],H}function x(H,ae,ue){return H[0]=ae[0]/ue[0],H[1]=ae[1]/ue[1],H[2]=ae[2]/ue[2],H}function b(H,ae){return H[0]=Math.ceil(ae[0]),H[1]=Math.ceil(ae[1]),H[2]=Math.ceil(ae[2]),H}function L(H,ae){return H[0]=Math.floor(ae[0]),H[1]=Math.floor(ae[1]),H[2]=Math.floor(ae[2]),H}function G(H,ae,ue){return H[0]=Math.min(ae[0],ue[0]),H[1]=Math.min(ae[1],ue[1]),H[2]=Math.min(ae[2],ue[2]),H}function M(H,ae,ue){return H[0]=Math.max(ae[0],ue[0]),H[1]=Math.max(ae[1],ue[1]),H[2]=Math.max(ae[2],ue[2]),H}function S(H,ae){return H[0]=Math.round(ae[0]),H[1]=Math.round(ae[1]),H[2]=Math.round(ae[2]),H}function E(H,ae,ue){return H[0]=ae[0]*ue,H[1]=ae[1]*ue,H[2]=ae[2]*ue,H}function I(H,ae,ue,Ee){return H[0]=ae[0]+ue[0]*Ee,H[1]=ae[1]+ue[1]*Ee,H[2]=ae[2]+ue[2]*Ee,H}function q(H,ae){var ue=ae[0]-H[0],Ee=ae[1]-H[1],ye=ae[2]-H[2];return Math.sqrt(ue*ue+Ee*Ee+ye*ye)}function Y(H,ae){var ue=ae[0]-H[0],Ee=ae[1]-H[1],ye=ae[2]-H[2];return ue*ue+Ee*Ee+ye*ye}function J(H){var ae=H[0],ue=H[1],Ee=H[2];return ae*ae+ue*ue+Ee*Ee}function de(H,ae){return H[0]=-ae[0],H[1]=-ae[1],H[2]=-ae[2],H}function fe(H,ae){return H[0]=1/ae[0],H[1]=1/ae[1],H[2]=1/ae[2],H}function pe(H,ae){var ue=ae[0],Ee=ae[1],ye=ae[2],m=ue*ue+Ee*Ee+ye*ye;return m>0&&(m=1/Math.sqrt(m),H[0]=ae[0]*m,H[1]=ae[1]*m,H[2]=ae[2]*m),H}function X(H,ae){return H[0]*ae[0]+H[1]*ae[1]+H[2]*ae[2]}function O(H,ae,ue){var Ee=ae[0],ye=ae[1],m=ae[2],R=ue[0],z=ue[1],D=ue[2];return H[0]=ye*D-m*z,H[1]=m*R-Ee*D,H[2]=Ee*z-ye*R,H}function j(H,ae,ue,Ee){var ye=ae[0],m=ae[1],R=ae[2];return H[0]=ye+Ee*(ue[0]-ye),H[1]=m+Ee*(ue[1]-m),H[2]=R+Ee*(ue[2]-R),H}function re(H,ae,ue,Ee,ye,m){var R=m*m,z=R*(2*m-3)+1,D=R*(m-2)+m,K=R*(m-1),te=R*(3-2*m);return H[0]=ae[0]*z+ue[0]*D+Ee[0]*K+ye[0]*te,H[1]=ae[1]*z+ue[1]*D+Ee[1]*K+ye[1]*te,H[2]=ae[2]*z+ue[2]*D+Ee[2]*K+ye[2]*te,H}function le(H,ae,ue,Ee,ye,m){var R=1-m,z=R*R,D=m*m,K=z*R,te=3*m*z,se=3*D*R,ie=D*m;return H[0]=ae[0]*K+ue[0]*te+Ee[0]*se+ye[0]*ie,H[1]=ae[1]*K+ue[1]*te+Ee[1]*se+ye[1]*ie,H[2]=ae[2]*K+ue[2]*te+Ee[2]*se+ye[2]*ie,H}function me(H,ae){ae=ae||1;var ue=l.RANDOM()*2*Math.PI,Ee=l.RANDOM()*2-1,ye=Math.sqrt(1-Ee*Ee)*ae;return H[0]=Math.cos(ue)*ye,H[1]=Math.sin(ue)*ye,H[2]=Ee*ae,H}function ce(H,ae,ue){var Ee=ae[0],ye=ae[1],m=ae[2],R=ue[3]*Ee+ue[7]*ye+ue[11]*m+ue[15];return R=R||1,H[0]=(ue[0]*Ee+ue[4]*ye+ue[8]*m+ue[12])/R,H[1]=(ue[1]*Ee+ue[5]*ye+ue[9]*m+ue[13])/R,H[2]=(ue[2]*Ee+ue[6]*ye+ue[10]*m+ue[14])/R,H}function N(H,ae,ue){var Ee=ae[0],ye=ae[1],m=ae[2];return H[0]=Ee*ue[0]+ye*ue[3]+m*ue[6],H[1]=Ee*ue[1]+ye*ue[4]+m*ue[7],H[2]=Ee*ue[2]+ye*ue[5]+m*ue[8],H}function w(H,ae,ue){var Ee=ae[0],ye=ae[1],m=ae[2],R=ue[0],z=ue[1],D=ue[2],K=ue[3],te=K*Ee+z*m-D*ye,se=K*ye+D*Ee-R*m,ie=K*m+R*ye-z*Ee,Se=-R*Ee-z*ye-D*m;return H[0]=te*K+Se*-R+se*-D-ie*-z,H[1]=se*K+Se*-z+ie*-R-te*-D,H[2]=ie*K+Se*-D+te*-z-se*-R,H}function $(H,ae,ue,Ee){var ye=[],m=[];return ye[0]=ae[0]-ue[0],ye[1]=ae[1]-ue[1],ye[2]=ae[2]-ue[2],m[0]=ye[0],m[1]=ye[1]*Math.cos(Ee)-ye[2]*Math.sin(Ee),m[2]=ye[1]*Math.sin(Ee)+ye[2]*Math.cos(Ee),H[0]=m[0]+ue[0],H[1]=m[1]+ue[1],H[2]=m[2]+ue[2],H}function ee(H,ae,ue,Ee){var ye=[],m=[];return ye[0]=ae[0]-ue[0],ye[1]=ae[1]-ue[1],ye[2]=ae[2]-ue[2],m[0]=ye[2]*Math.sin(Ee)+ye[0]*Math.cos(Ee),m[1]=ye[1],m[2]=ye[2]*Math.cos(Ee)-ye[0]*Math.sin(Ee),H[0]=m[0]+ue[0],H[1]=m[1]+ue[1],H[2]=m[2]+ue[2],H}function Z(H,ae,ue,Ee){var ye=[],m=[];return ye[0]=ae[0]-ue[0],ye[1]=ae[1]-ue[1],ye[2]=ae[2]-ue[2],m[0]=ye[0]*Math.cos(Ee)-ye[1]*Math.sin(Ee),m[1]=ye[0]*Math.sin(Ee)+ye[1]*Math.cos(Ee),m[2]=ye[2],H[0]=m[0]+ue[0],H[1]=m[1]+ue[1],H[2]=m[2]+ue[2],H}function ne(H,ae){var ue=p(H[0],H[1],H[2]),Ee=p(ae[0],ae[1],ae[2]);pe(ue,ue),pe(Ee,Ee);var ye=X(ue,Ee);return ye>1?0:ye<-1?Math.PI:Math.acos(ye)}function he(H){return"vec3("+H[0]+", "+H[1]+", "+H[2]+")"}function Ce(H,ae){return H[0]===ae[0]&&H[1]===ae[1]&&H[2]===ae[2]}function De(H,ae){var ue=H[0],Ee=H[1],ye=H[2],m=ae[0],R=ae[1],z=ae[2];return Math.abs(ue-m)<=l.EPSILON*Math.max(1,Math.abs(ue),Math.abs(m))&&Math.abs(Ee-R)<=l.EPSILON*Math.max(1,Math.abs(Ee),Math.abs(R))&&Math.abs(ye-z)<=l.EPSILON*Math.max(1,Math.abs(ye),Math.abs(z))}a.sub=F,a.mul=y,a.div=x,a.dist=q,a.sqrDist=Y,a.len=f,a.sqrLen=J,a.forEach=function(){var H=h();return function(ae,ue,Ee,ye,m,R){var z=void 0,D=void 0;for(ue||(ue=3),Ee||(Ee=0),ye?D=Math.min(ye*ue+Ee,ae.length):D=ae.length,z=Ee;z<D;z+=ue)H[0]=ae[z],H[1]=ae[z+1],H[2]=ae[z+2],m(H,H,R),ae[z]=H[0],ae[z+1]=H[1],ae[z+2]=H[2];return ae}}()},function(s,a,o){Object.defineProperty(a,"__esModule",{value:!0}),a.forEach=a.sqrLen=a.len=a.sqrDist=a.dist=a.div=a.mul=a.sub=void 0,a.create=h,a.clone=d,a.fromValues=f,a.copy=p,a.set=_,a.add=g,a.subtract=v,a.multiply=F,a.divide=y,a.ceil=x,a.floor=b,a.min=L,a.max=G,a.round=M,a.scale=S,a.scaleAndAdd=E,a.distance=I,a.squaredDistance=q,a.length=Y,a.squaredLength=J,a.negate=de,a.inverse=fe,a.normalize=pe,a.dot=X,a.lerp=O,a.random=j,a.transformMat4=re,a.transformQuat=le,a.str=me,a.exactEquals=ce,a.equals=N;var c=o(0),l=u(c);function u(w){if(w&&w.__esModule)return w;var $={};if(w!=null)for(var ee in w)Object.prototype.hasOwnProperty.call(w,ee)&&($[ee]=w[ee]);return $.default=w,$}function h(){var w=new l.ARRAY_TYPE(4);return w[0]=0,w[1]=0,w[2]=0,w[3]=0,w}function d(w){var $=new l.ARRAY_TYPE(4);return $[0]=w[0],$[1]=w[1],$[2]=w[2],$[3]=w[3],$}function f(w,$,ee,Z){var ne=new l.ARRAY_TYPE(4);return ne[0]=w,ne[1]=$,ne[2]=ee,ne[3]=Z,ne}function p(w,$){return w[0]=$[0],w[1]=$[1],w[2]=$[2],w[3]=$[3],w}function _(w,$,ee,Z,ne){return w[0]=$,w[1]=ee,w[2]=Z,w[3]=ne,w}function g(w,$,ee){return w[0]=$[0]+ee[0],w[1]=$[1]+ee[1],w[2]=$[2]+ee[2],w[3]=$[3]+ee[3],w}function v(w,$,ee){return w[0]=$[0]-ee[0],w[1]=$[1]-ee[1],w[2]=$[2]-ee[2],w[3]=$[3]-ee[3],w}function F(w,$,ee){return w[0]=$[0]*ee[0],w[1]=$[1]*ee[1],w[2]=$[2]*ee[2],w[3]=$[3]*ee[3],w}function y(w,$,ee){return w[0]=$[0]/ee[0],w[1]=$[1]/ee[1],w[2]=$[2]/ee[2],w[3]=$[3]/ee[3],w}function x(w,$){return w[0]=Math.ceil($[0]),w[1]=Math.ceil($[1]),w[2]=Math.ceil($[2]),w[3]=Math.ceil($[3]),w}function b(w,$){return w[0]=Math.floor($[0]),w[1]=Math.floor($[1]),w[2]=Math.floor($[2]),w[3]=Math.floor($[3]),w}function L(w,$,ee){return w[0]=Math.min($[0],ee[0]),w[1]=Math.min($[1],ee[1]),w[2]=Math.min($[2],ee[2]),w[3]=Math.min($[3],ee[3]),w}function G(w,$,ee){return w[0]=Math.max($[0],ee[0]),w[1]=Math.max($[1],ee[1]),w[2]=Math.max($[2],ee[2]),w[3]=Math.max($[3],ee[3]),w}function M(w,$){return w[0]=Math.round($[0]),w[1]=Math.round($[1]),w[2]=Math.round($[2]),w[3]=Math.round($[3]),w}function S(w,$,ee){return w[0]=$[0]*ee,w[1]=$[1]*ee,w[2]=$[2]*ee,w[3]=$[3]*ee,w}function E(w,$,ee,Z){return w[0]=$[0]+ee[0]*Z,w[1]=$[1]+ee[1]*Z,w[2]=$[2]+ee[2]*Z,w[3]=$[3]+ee[3]*Z,w}function I(w,$){var ee=$[0]-w[0],Z=$[1]-w[1],ne=$[2]-w[2],he=$[3]-w[3];return Math.sqrt(ee*ee+Z*Z+ne*ne+he*he)}function q(w,$){var ee=$[0]-w[0],Z=$[1]-w[1],ne=$[2]-w[2],he=$[3]-w[3];return ee*ee+Z*Z+ne*ne+he*he}function Y(w){var $=w[0],ee=w[1],Z=w[2],ne=w[3];return Math.sqrt($*$+ee*ee+Z*Z+ne*ne)}function J(w){var $=w[0],ee=w[1],Z=w[2],ne=w[3];return $*$+ee*ee+Z*Z+ne*ne}function de(w,$){return w[0]=-$[0],w[1]=-$[1],w[2]=-$[2],w[3]=-$[3],w}function fe(w,$){return w[0]=1/$[0],w[1]=1/$[1],w[2]=1/$[2],w[3]=1/$[3],w}function pe(w,$){var ee=$[0],Z=$[1],ne=$[2],he=$[3],Ce=ee*ee+Z*Z+ne*ne+he*he;return Ce>0&&(Ce=1/Math.sqrt(Ce),w[0]=ee*Ce,w[1]=Z*Ce,w[2]=ne*Ce,w[3]=he*Ce),w}function X(w,$){return w[0]*$[0]+w[1]*$[1]+w[2]*$[2]+w[3]*$[3]}function O(w,$,ee,Z){var ne=$[0],he=$[1],Ce=$[2],De=$[3];return w[0]=ne+Z*(ee[0]-ne),w[1]=he+Z*(ee[1]-he),w[2]=Ce+Z*(ee[2]-Ce),w[3]=De+Z*(ee[3]-De),w}function j(w,$){return $=$||1,w[0]=l.RANDOM(),w[1]=l.RANDOM(),w[2]=l.RANDOM(),w[3]=l.RANDOM(),pe(w,w),S(w,w,$),w}function re(w,$,ee){var Z=$[0],ne=$[1],he=$[2],Ce=$[3];return w[0]=ee[0]*Z+ee[4]*ne+ee[8]*he+ee[12]*Ce,w[1]=ee[1]*Z+ee[5]*ne+ee[9]*he+ee[13]*Ce,w[2]=ee[2]*Z+ee[6]*ne+ee[10]*he+ee[14]*Ce,w[3]=ee[3]*Z+ee[7]*ne+ee[11]*he+ee[15]*Ce,w}function le(w,$,ee){var Z=$[0],ne=$[1],he=$[2],Ce=ee[0],De=ee[1],H=ee[2],ae=ee[3],ue=ae*Z+De*he-H*ne,Ee=ae*ne+H*Z-Ce*he,ye=ae*he+Ce*ne-De*Z,m=-Ce*Z-De*ne-H*he;return w[0]=ue*ae+m*-Ce+Ee*-H-ye*-De,w[1]=Ee*ae+m*-De+ye*-Ce-ue*-H,w[2]=ye*ae+m*-H+ue*-De-Ee*-Ce,w[3]=$[3],w}function me(w){return"vec4("+w[0]+", "+w[1]+", "+w[2]+", "+w[3]+")"}function ce(w,$){return w[0]===$[0]&&w[1]===$[1]&&w[2]===$[2]&&w[3]===$[3]}function N(w,$){var ee=w[0],Z=w[1],ne=w[2],he=w[3],Ce=$[0],De=$[1],H=$[2],ae=$[3];return Math.abs(ee-Ce)<=l.EPSILON*Math.max(1,Math.abs(ee),Math.abs(Ce))&&Math.abs(Z-De)<=l.EPSILON*Math.max(1,Math.abs(Z),Math.abs(De))&&Math.abs(ne-H)<=l.EPSILON*Math.max(1,Math.abs(ne),Math.abs(H))&&Math.abs(he-ae)<=l.EPSILON*Math.max(1,Math.abs(he),Math.abs(ae))}a.sub=v,a.mul=F,a.div=y,a.dist=I,a.sqrDist=q,a.len=Y,a.sqrLen=J,a.forEach=function(){var w=h();return function($,ee,Z,ne,he,Ce){var De=void 0,H=void 0;for(ee||(ee=4),Z||(Z=0),ne?H=Math.min(ne*ee+Z,$.length):H=$.length,De=Z;De<H;De+=ee)w[0]=$[De],w[1]=$[De+1],w[2]=$[De+2],w[3]=$[De+3],he(w,w,Ce),$[De]=w[0],$[De+1]=w[1],$[De+2]=w[2],$[De+3]=w[3];return $}}()},function(s,a,o){Object.defineProperty(a,"__esModule",{value:!0}),a.vec4=a.vec3=a.vec2=a.quat=a.mat4=a.mat3=a.mat2d=a.mat2=a.glMatrix=void 0;var c=o(0),l=E(c),u=o(5),h=E(u),d=o(6),f=E(d),p=o(1),_=E(p),g=o(7),v=E(g),F=o(8),y=E(F),x=o(9),b=E(x),L=o(2),G=E(L),M=o(3),S=E(M);function E(I){if(I&&I.__esModule)return I;var q={};if(I!=null)for(var Y in I)Object.prototype.hasOwnProperty.call(I,Y)&&(q[Y]=I[Y]);return q.default=I,q}a.glMatrix=l,a.mat2=h,a.mat2d=f,a.mat3=_,a.mat4=v,a.quat=y,a.vec2=b,a.vec3=G,a.vec4=S},function(s,a,o){Object.defineProperty(a,"__esModule",{value:!0}),a.sub=a.mul=void 0,a.create=h,a.clone=d,a.copy=f,a.identity=p,a.fromValues=_,a.set=g,a.transpose=v,a.invert=F,a.adjoint=y,a.determinant=x,a.multiply=b,a.rotate=L,a.scale=G,a.fromRotation=M,a.fromScaling=S,a.str=E,a.frob=I,a.LDU=q,a.add=Y,a.subtract=J,a.exactEquals=de,a.equals=fe,a.multiplyScalar=pe,a.multiplyScalarAndAdd=X;var c=o(0),l=u(c);function u(O){if(O&&O.__esModule)return O;var j={};if(O!=null)for(var re in O)Object.prototype.hasOwnProperty.call(O,re)&&(j[re]=O[re]);return j.default=O,j}function h(){var O=new l.ARRAY_TYPE(4);return O[0]=1,O[1]=0,O[2]=0,O[3]=1,O}function d(O){var j=new l.ARRAY_TYPE(4);return j[0]=O[0],j[1]=O[1],j[2]=O[2],j[3]=O[3],j}function f(O,j){return O[0]=j[0],O[1]=j[1],O[2]=j[2],O[3]=j[3],O}function p(O){return O[0]=1,O[1]=0,O[2]=0,O[3]=1,O}function _(O,j,re,le){var me=new l.ARRAY_TYPE(4);return me[0]=O,me[1]=j,me[2]=re,me[3]=le,me}function g(O,j,re,le,me){return O[0]=j,O[1]=re,O[2]=le,O[3]=me,O}function v(O,j){if(O===j){var re=j[1];O[1]=j[2],O[2]=re}else O[0]=j[0],O[1]=j[2],O[2]=j[1],O[3]=j[3];return O}function F(O,j){var re=j[0],le=j[1],me=j[2],ce=j[3],N=re*ce-me*le;return N?(N=1/N,O[0]=ce*N,O[1]=-le*N,O[2]=-me*N,O[3]=re*N,O):null}function y(O,j){var re=j[0];return O[0]=j[3],O[1]=-j[1],O[2]=-j[2],O[3]=re,O}function x(O){return O[0]*O[3]-O[2]*O[1]}function b(O,j,re){var le=j[0],me=j[1],ce=j[2],N=j[3],w=re[0],$=re[1],ee=re[2],Z=re[3];return O[0]=le*w+ce*$,O[1]=me*w+N*$,O[2]=le*ee+ce*Z,O[3]=me*ee+N*Z,O}function L(O,j,re){var le=j[0],me=j[1],ce=j[2],N=j[3],w=Math.sin(re),$=Math.cos(re);return O[0]=le*$+ce*w,O[1]=me*$+N*w,O[2]=le*-w+ce*$,O[3]=me*-w+N*$,O}function G(O,j,re){var le=j[0],me=j[1],ce=j[2],N=j[3],w=re[0],$=re[1];return O[0]=le*w,O[1]=me*w,O[2]=ce*$,O[3]=N*$,O}function M(O,j){var re=Math.sin(j),le=Math.cos(j);return O[0]=le,O[1]=re,O[2]=-re,O[3]=le,O}function S(O,j){return O[0]=j[0],O[1]=0,O[2]=0,O[3]=j[1],O}function E(O){return"mat2("+O[0]+", "+O[1]+", "+O[2]+", "+O[3]+")"}function I(O){return Math.sqrt(Math.pow(O[0],2)+Math.pow(O[1],2)+Math.pow(O[2],2)+Math.pow(O[3],2))}function q(O,j,re,le){return O[2]=le[2]/le[0],re[0]=le[0],re[1]=le[1],re[3]=le[3]-O[2]*re[1],[O,j,re]}function Y(O,j,re){return O[0]=j[0]+re[0],O[1]=j[1]+re[1],O[2]=j[2]+re[2],O[3]=j[3]+re[3],O}function J(O,j,re){return O[0]=j[0]-re[0],O[1]=j[1]-re[1],O[2]=j[2]-re[2],O[3]=j[3]-re[3],O}function de(O,j){return O[0]===j[0]&&O[1]===j[1]&&O[2]===j[2]&&O[3]===j[3]}function fe(O,j){var re=O[0],le=O[1],me=O[2],ce=O[3],N=j[0],w=j[1],$=j[2],ee=j[3];return Math.abs(re-N)<=l.EPSILON*Math.max(1,Math.abs(re),Math.abs(N))&&Math.abs(le-w)<=l.EPSILON*Math.max(1,Math.abs(le),Math.abs(w))&&Math.abs(me-$)<=l.EPSILON*Math.max(1,Math.abs(me),Math.abs($))&&Math.abs(ce-ee)<=l.EPSILON*Math.max(1,Math.abs(ce),Math.abs(ee))}function pe(O,j,re){return O[0]=j[0]*re,O[1]=j[1]*re,O[2]=j[2]*re,O[3]=j[3]*re,O}function X(O,j,re,le){return O[0]=j[0]+re[0]*le,O[1]=j[1]+re[1]*le,O[2]=j[2]+re[2]*le,O[3]=j[3]+re[3]*le,O}a.mul=b,a.sub=J},function(s,a,o){Object.defineProperty(a,"__esModule",{value:!0}),a.sub=a.mul=void 0,a.create=h,a.clone=d,a.copy=f,a.identity=p,a.fromValues=_,a.set=g,a.invert=v,a.determinant=F,a.multiply=y,a.rotate=x,a.scale=b,a.translate=L,a.fromRotation=G,a.fromScaling=M,a.fromTranslation=S,a.str=E,a.frob=I,a.add=q,a.subtract=Y,a.multiplyScalar=J,a.multiplyScalarAndAdd=de,a.exactEquals=fe,a.equals=pe;var c=o(0),l=u(c);function u(X){if(X&&X.__esModule)return X;var O={};if(X!=null)for(var j in X)Object.prototype.hasOwnProperty.call(X,j)&&(O[j]=X[j]);return O.default=X,O}function h(){var X=new l.ARRAY_TYPE(6);return X[0]=1,X[1]=0,X[2]=0,X[3]=1,X[4]=0,X[5]=0,X}function d(X){var O=new l.ARRAY_TYPE(6);return O[0]=X[0],O[1]=X[1],O[2]=X[2],O[3]=X[3],O[4]=X[4],O[5]=X[5],O}function f(X,O){return X[0]=O[0],X[1]=O[1],X[2]=O[2],X[3]=O[3],X[4]=O[4],X[5]=O[5],X}function p(X){return X[0]=1,X[1]=0,X[2]=0,X[3]=1,X[4]=0,X[5]=0,X}function _(X,O,j,re,le,me){var ce=new l.ARRAY_TYPE(6);return ce[0]=X,ce[1]=O,ce[2]=j,ce[3]=re,ce[4]=le,ce[5]=me,ce}function g(X,O,j,re,le,me,ce){return X[0]=O,X[1]=j,X[2]=re,X[3]=le,X[4]=me,X[5]=ce,X}function v(X,O){var j=O[0],re=O[1],le=O[2],me=O[3],ce=O[4],N=O[5],w=j*me-re*le;return w?(w=1/w,X[0]=me*w,X[1]=-re*w,X[2]=-le*w,X[3]=j*w,X[4]=(le*N-me*ce)*w,X[5]=(re*ce-j*N)*w,X):null}function F(X){return X[0]*X[3]-X[1]*X[2]}function y(X,O,j){var re=O[0],le=O[1],me=O[2],ce=O[3],N=O[4],w=O[5],$=j[0],ee=j[1],Z=j[2],ne=j[3],he=j[4],Ce=j[5];return X[0]=re*$+me*ee,X[1]=le*$+ce*ee,X[2]=re*Z+me*ne,X[3]=le*Z+ce*ne,X[4]=re*he+me*Ce+N,X[5]=le*he+ce*Ce+w,X}function x(X,O,j){var re=O[0],le=O[1],me=O[2],ce=O[3],N=O[4],w=O[5],$=Math.sin(j),ee=Math.cos(j);return X[0]=re*ee+me*$,X[1]=le*ee+ce*$,X[2]=re*-$+me*ee,X[3]=le*-$+ce*ee,X[4]=N,X[5]=w,X}function b(X,O,j){var re=O[0],le=O[1],me=O[2],ce=O[3],N=O[4],w=O[5],$=j[0],ee=j[1];return X[0]=re*$,X[1]=le*$,X[2]=me*ee,X[3]=ce*ee,X[4]=N,X[5]=w,X}function L(X,O,j){var re=O[0],le=O[1],me=O[2],ce=O[3],N=O[4],w=O[5],$=j[0],ee=j[1];return X[0]=re,X[1]=le,X[2]=me,X[3]=ce,X[4]=re*$+me*ee+N,X[5]=le*$+ce*ee+w,X}function G(X,O){var j=Math.sin(O),re=Math.cos(O);return X[0]=re,X[1]=j,X[2]=-j,X[3]=re,X[4]=0,X[5]=0,X}function M(X,O){return X[0]=O[0],X[1]=0,X[2]=0,X[3]=O[1],X[4]=0,X[5]=0,X}function S(X,O){return X[0]=1,X[1]=0,X[2]=0,X[3]=1,X[4]=O[0],X[5]=O[1],X}function E(X){return"mat2d("+X[0]+", "+X[1]+", "+X[2]+", "+X[3]+", "+X[4]+", "+X[5]+")"}function I(X){return Math.sqrt(Math.pow(X[0],2)+Math.pow(X[1],2)+Math.pow(X[2],2)+Math.pow(X[3],2)+Math.pow(X[4],2)+Math.pow(X[5],2)+1)}function q(X,O,j){return X[0]=O[0]+j[0],X[1]=O[1]+j[1],X[2]=O[2]+j[2],X[3]=O[3]+j[3],X[4]=O[4]+j[4],X[5]=O[5]+j[5],X}function Y(X,O,j){return X[0]=O[0]-j[0],X[1]=O[1]-j[1],X[2]=O[2]-j[2],X[3]=O[3]-j[3],X[4]=O[4]-j[4],X[5]=O[5]-j[5],X}function J(X,O,j){return X[0]=O[0]*j,X[1]=O[1]*j,X[2]=O[2]*j,X[3]=O[3]*j,X[4]=O[4]*j,X[5]=O[5]*j,X}function de(X,O,j,re){return X[0]=O[0]+j[0]*re,X[1]=O[1]+j[1]*re,X[2]=O[2]+j[2]*re,X[3]=O[3]+j[3]*re,X[4]=O[4]+j[4]*re,X[5]=O[5]+j[5]*re,X}function fe(X,O){return X[0]===O[0]&&X[1]===O[1]&&X[2]===O[2]&&X[3]===O[3]&&X[4]===O[4]&&X[5]===O[5]}function pe(X,O){var j=X[0],re=X[1],le=X[2],me=X[3],ce=X[4],N=X[5],w=O[0],$=O[1],ee=O[2],Z=O[3],ne=O[4],he=O[5];return Math.abs(j-w)<=l.EPSILON*Math.max(1,Math.abs(j),Math.abs(w))&&Math.abs(re-$)<=l.EPSILON*Math.max(1,Math.abs(re),Math.abs($))&&Math.abs(le-ee)<=l.EPSILON*Math.max(1,Math.abs(le),Math.abs(ee))&&Math.abs(me-Z)<=l.EPSILON*Math.max(1,Math.abs(me),Math.abs(Z))&&Math.abs(ce-ne)<=l.EPSILON*Math.max(1,Math.abs(ce),Math.abs(ne))&&Math.abs(N-he)<=l.EPSILON*Math.max(1,Math.abs(N),Math.abs(he))}a.mul=y,a.sub=Y},function(s,a,o){Object.defineProperty(a,"__esModule",{value:!0}),a.sub=a.mul=void 0,a.create=h,a.clone=d,a.copy=f,a.fromValues=p,a.set=_,a.identity=g,a.transpose=v,a.invert=F,a.adjoint=y,a.determinant=x,a.multiply=b,a.translate=L,a.scale=G,a.rotate=M,a.rotateX=S,a.rotateY=E,a.rotateZ=I,a.fromTranslation=q,a.fromScaling=Y,a.fromRotation=J,a.fromXRotation=de,a.fromYRotation=fe,a.fromZRotation=pe,a.fromRotationTranslation=X,a.getTranslation=O,a.getScaling=j,a.getRotation=re,a.fromRotationTranslationScale=le,a.fromRotationTranslationScaleOrigin=me,a.fromQuat=ce,a.frustum=N,a.perspective=w,a.perspectiveFromFieldOfView=$,a.ortho=ee,a.lookAt=Z,a.targetTo=ne,a.str=he,a.frob=Ce,a.add=De,a.subtract=H,a.multiplyScalar=ae,a.multiplyScalarAndAdd=ue,a.exactEquals=Ee,a.equals=ye;var c=o(0),l=u(c);function u(m){if(m&&m.__esModule)return m;var R={};if(m!=null)for(var z in m)Object.prototype.hasOwnProperty.call(m,z)&&(R[z]=m[z]);return R.default=m,R}function h(){var m=new l.ARRAY_TYPE(16);return m[0]=1,m[1]=0,m[2]=0,m[3]=0,m[4]=0,m[5]=1,m[6]=0,m[7]=0,m[8]=0,m[9]=0,m[10]=1,m[11]=0,m[12]=0,m[13]=0,m[14]=0,m[15]=1,m}function d(m){var R=new l.ARRAY_TYPE(16);return R[0]=m[0],R[1]=m[1],R[2]=m[2],R[3]=m[3],R[4]=m[4],R[5]=m[5],R[6]=m[6],R[7]=m[7],R[8]=m[8],R[9]=m[9],R[10]=m[10],R[11]=m[11],R[12]=m[12],R[13]=m[13],R[14]=m[14],R[15]=m[15],R}function f(m,R){return m[0]=R[0],m[1]=R[1],m[2]=R[2],m[3]=R[3],m[4]=R[4],m[5]=R[5],m[6]=R[6],m[7]=R[7],m[8]=R[8],m[9]=R[9],m[10]=R[10],m[11]=R[11],m[12]=R[12],m[13]=R[13],m[14]=R[14],m[15]=R[15],m}function p(m,R,z,D,K,te,se,ie,Se,ve,be,Pe,_e,Ae,Ie,Fe){var Te=new l.ARRAY_TYPE(16);return Te[0]=m,Te[1]=R,Te[2]=z,Te[3]=D,Te[4]=K,Te[5]=te,Te[6]=se,Te[7]=ie,Te[8]=Se,Te[9]=ve,Te[10]=be,Te[11]=Pe,Te[12]=_e,Te[13]=Ae,Te[14]=Ie,Te[15]=Fe,Te}function _(m,R,z,D,K,te,se,ie,Se,ve,be,Pe,_e,Ae,Ie,Fe,Te){return m[0]=R,m[1]=z,m[2]=D,m[3]=K,m[4]=te,m[5]=se,m[6]=ie,m[7]=Se,m[8]=ve,m[9]=be,m[10]=Pe,m[11]=_e,m[12]=Ae,m[13]=Ie,m[14]=Fe,m[15]=Te,m}function g(m){return m[0]=1,m[1]=0,m[2]=0,m[3]=0,m[4]=0,m[5]=1,m[6]=0,m[7]=0,m[8]=0,m[9]=0,m[10]=1,m[11]=0,m[12]=0,m[13]=0,m[14]=0,m[15]=1,m}function v(m,R){if(m===R){var z=R[1],D=R[2],K=R[3],te=R[6],se=R[7],ie=R[11];m[1]=R[4],m[2]=R[8],m[3]=R[12],m[4]=z,m[6]=R[9],m[7]=R[13],m[8]=D,m[9]=te,m[11]=R[14],m[12]=K,m[13]=se,m[14]=ie}else m[0]=R[0],m[1]=R[4],m[2]=R[8],m[3]=R[12],m[4]=R[1],m[5]=R[5],m[6]=R[9],m[7]=R[13],m[8]=R[2],m[9]=R[6],m[10]=R[10],m[11]=R[14],m[12]=R[3],m[13]=R[7],m[14]=R[11],m[15]=R[15];return m}function F(m,R){var z=R[0],D=R[1],K=R[2],te=R[3],se=R[4],ie=R[5],Se=R[6],ve=R[7],be=R[8],Pe=R[9],_e=R[10],Ae=R[11],Ie=R[12],Fe=R[13],Te=R[14],Be=R[15],Ve=z*ie-D*se,Ge=z*Se-K*se,oe=z*ve-te*se,Ue=D*Se-K*ie,xe=D*ve-te*ie,Le=K*ve-te*Se,Oe=be*Fe-Pe*Ie,Ne=be*Te-_e*Ie,He=be*Be-Ae*Ie,Qe=Pe*Te-_e*Fe,Je=Pe*Be-Ae*Fe,Ye=_e*Be-Ae*Te,Ze=Ve*Ye-Ge*Je+oe*Qe+Ue*He-xe*Ne+Le*Oe;return Ze?(Ze=1/Ze,m[0]=(ie*Ye-Se*Je+ve*Qe)*Ze,m[1]=(K*Je-D*Ye-te*Qe)*Ze,m[2]=(Fe*Le-Te*xe+Be*Ue)*Ze,m[3]=(_e*xe-Pe*Le-Ae*Ue)*Ze,m[4]=(Se*He-se*Ye-ve*Ne)*Ze,m[5]=(z*Ye-K*He+te*Ne)*Ze,m[6]=(Te*oe-Ie*Le-Be*Ge)*Ze,m[7]=(be*Le-_e*oe+Ae*Ge)*Ze,m[8]=(se*Je-ie*He+ve*Oe)*Ze,m[9]=(D*He-z*Je-te*Oe)*Ze,m[10]=(Ie*xe-Fe*oe+Be*Ve)*Ze,m[11]=(Pe*oe-be*xe-Ae*Ve)*Ze,m[12]=(ie*Ne-se*Qe-Se*Oe)*Ze,m[13]=(z*Qe-D*Ne+K*Oe)*Ze,m[14]=(Fe*Ge-Ie*Ue-Te*Ve)*Ze,m[15]=(be*Ue-Pe*Ge+_e*Ve)*Ze,m):null}function y(m,R){var z=R[0],D=R[1],K=R[2],te=R[3],se=R[4],ie=R[5],Se=R[6],ve=R[7],be=R[8],Pe=R[9],_e=R[10],Ae=R[11],Ie=R[12],Fe=R[13],Te=R[14],Be=R[15];return m[0]=ie*(_e*Be-Ae*Te)-Pe*(Se*Be-ve*Te)+Fe*(Se*Ae-ve*_e),m[1]=-(D*(_e*Be-Ae*Te)-Pe*(K*Be-te*Te)+Fe*(K*Ae-te*_e)),m[2]=D*(Se*Be-ve*Te)-ie*(K*Be-te*Te)+Fe*(K*ve-te*Se),m[3]=-(D*(Se*Ae-ve*_e)-ie*(K*Ae-te*_e)+Pe*(K*ve-te*Se)),m[4]=-(se*(_e*Be-Ae*Te)-be*(Se*Be-ve*Te)+Ie*(Se*Ae-ve*_e)),m[5]=z*(_e*Be-Ae*Te)-be*(K*Be-te*Te)+Ie*(K*Ae-te*_e),m[6]=-(z*(Se*Be-ve*Te)-se*(K*Be-te*Te)+Ie*(K*ve-te*Se)),m[7]=z*(Se*Ae-ve*_e)-se*(K*Ae-te*_e)+be*(K*ve-te*Se),m[8]=se*(Pe*Be-Ae*Fe)-be*(ie*Be-ve*Fe)+Ie*(ie*Ae-ve*Pe),m[9]=-(z*(Pe*Be-Ae*Fe)-be*(D*Be-te*Fe)+Ie*(D*Ae-te*Pe)),m[10]=z*(ie*Be-ve*Fe)-se*(D*Be-te*Fe)+Ie*(D*ve-te*ie),m[11]=-(z*(ie*Ae-ve*Pe)-se*(D*Ae-te*Pe)+be*(D*ve-te*ie)),m[12]=-(se*(Pe*Te-_e*Fe)-be*(ie*Te-Se*Fe)+Ie*(ie*_e-Se*Pe)),m[13]=z*(Pe*Te-_e*Fe)-be*(D*Te-K*Fe)+Ie*(D*_e-K*Pe),m[14]=-(z*(ie*Te-Se*Fe)-se*(D*Te-K*Fe)+Ie*(D*Se-K*ie)),m[15]=z*(ie*_e-Se*Pe)-se*(D*_e-K*Pe)+be*(D*Se-K*ie),m}function x(m){var R=m[0],z=m[1],D=m[2],K=m[3],te=m[4],se=m[5],ie=m[6],Se=m[7],ve=m[8],be=m[9],Pe=m[10],_e=m[11],Ae=m[12],Ie=m[13],Fe=m[14],Te=m[15],Be=R*se-z*te,Ve=R*ie-D*te,Ge=R*Se-K*te,oe=z*ie-D*se,Ue=z*Se-K*se,xe=D*Se-K*ie,Le=ve*Ie-be*Ae,Oe=ve*Fe-Pe*Ae,Ne=ve*Te-_e*Ae,He=be*Fe-Pe*Ie,Qe=be*Te-_e*Ie,Je=Pe*Te-_e*Fe;return Be*Je-Ve*Qe+Ge*He+oe*Ne-Ue*Oe+xe*Le}function b(m,R,z){var D=R[0],K=R[1],te=R[2],se=R[3],ie=R[4],Se=R[5],ve=R[6],be=R[7],Pe=R[8],_e=R[9],Ae=R[10],Ie=R[11],Fe=R[12],Te=R[13],Be=R[14],Ve=R[15],Ge=z[0],oe=z[1],Ue=z[2],xe=z[3];return m[0]=Ge*D+oe*ie+Ue*Pe+xe*Fe,m[1]=Ge*K+oe*Se+Ue*_e+xe*Te,m[2]=Ge*te+oe*ve+Ue*Ae+xe*Be,m[3]=Ge*se+oe*be+Ue*Ie+xe*Ve,Ge=z[4],oe=z[5],Ue=z[6],xe=z[7],m[4]=Ge*D+oe*ie+Ue*Pe+xe*Fe,m[5]=Ge*K+oe*Se+Ue*_e+xe*Te,m[6]=Ge*te+oe*ve+Ue*Ae+xe*Be,m[7]=Ge*se+oe*be+Ue*Ie+xe*Ve,Ge=z[8],oe=z[9],Ue=z[10],xe=z[11],m[8]=Ge*D+oe*ie+Ue*Pe+xe*Fe,m[9]=Ge*K+oe*Se+Ue*_e+xe*Te,m[10]=Ge*te+oe*ve+Ue*Ae+xe*Be,m[11]=Ge*se+oe*be+Ue*Ie+xe*Ve,Ge=z[12],oe=z[13],Ue=z[14],xe=z[15],m[12]=Ge*D+oe*ie+Ue*Pe+xe*Fe,m[13]=Ge*K+oe*Se+Ue*_e+xe*Te,m[14]=Ge*te+oe*ve+Ue*Ae+xe*Be,m[15]=Ge*se+oe*be+Ue*Ie+xe*Ve,m}function L(m,R,z){var D=z[0],K=z[1],te=z[2],se=void 0,ie=void 0,Se=void 0,ve=void 0,be=void 0,Pe=void 0,_e=void 0,Ae=void 0,Ie=void 0,Fe=void 0,Te=void 0,Be=void 0;return R===m?(m[12]=R[0]*D+R[4]*K+R[8]*te+R[12],m[13]=R[1]*D+R[5]*K+R[9]*te+R[13],m[14]=R[2]*D+R[6]*K+R[10]*te+R[14],m[15]=R[3]*D+R[7]*K+R[11]*te+R[15]):(se=R[0],ie=R[1],Se=R[2],ve=R[3],be=R[4],Pe=R[5],_e=R[6],Ae=R[7],Ie=R[8],Fe=R[9],Te=R[10],Be=R[11],m[0]=se,m[1]=ie,m[2]=Se,m[3]=ve,m[4]=be,m[5]=Pe,m[6]=_e,m[7]=Ae,m[8]=Ie,m[9]=Fe,m[10]=Te,m[11]=Be,m[12]=se*D+be*K+Ie*te+R[12],m[13]=ie*D+Pe*K+Fe*te+R[13],m[14]=Se*D+_e*K+Te*te+R[14],m[15]=ve*D+Ae*K+Be*te+R[15]),m}function G(m,R,z){var D=z[0],K=z[1],te=z[2];return m[0]=R[0]*D,m[1]=R[1]*D,m[2]=R[2]*D,m[3]=R[3]*D,m[4]=R[4]*K,m[5]=R[5]*K,m[6]=R[6]*K,m[7]=R[7]*K,m[8]=R[8]*te,m[9]=R[9]*te,m[10]=R[10]*te,m[11]=R[11]*te,m[12]=R[12],m[13]=R[13],m[14]=R[14],m[15]=R[15],m}function M(m,R,z,D){var K=D[0],te=D[1],se=D[2],ie=Math.sqrt(K*K+te*te+se*se),Se=void 0,ve=void 0,be=void 0,Pe=void 0,_e=void 0,Ae=void 0,Ie=void 0,Fe=void 0,Te=void 0,Be=void 0,Ve=void 0,Ge=void 0,oe=void 0,Ue=void 0,xe=void 0,Le=void 0,Oe=void 0,Ne=void 0,He=void 0,Qe=void 0,Je=void 0,Ye=void 0,Ze=void 0,st=void 0;return Math.abs(ie)<l.EPSILON?null:(ie=1/ie,K*=ie,te*=ie,se*=ie,Se=Math.sin(z),ve=Math.cos(z),be=1-ve,Pe=R[0],_e=R[1],Ae=R[2],Ie=R[3],Fe=R[4],Te=R[5],Be=R[6],Ve=R[7],Ge=R[8],oe=R[9],Ue=R[10],xe=R[11],Le=K*K*be+ve,Oe=te*K*be+se*Se,Ne=se*K*be-te*Se,He=K*te*be-se*Se,Qe=te*te*be+ve,Je=se*te*be+K*Se,Ye=K*se*be+te*Se,Ze=te*se*be-K*Se,st=se*se*be+ve,m[0]=Pe*Le+Fe*Oe+Ge*Ne,m[1]=_e*Le+Te*Oe+oe*Ne,m[2]=Ae*Le+Be*Oe+Ue*Ne,m[3]=Ie*Le+Ve*Oe+xe*Ne,m[4]=Pe*He+Fe*Qe+Ge*Je,m[5]=_e*He+Te*Qe+oe*Je,m[6]=Ae*He+Be*Qe+Ue*Je,m[7]=Ie*He+Ve*Qe+xe*Je,m[8]=Pe*Ye+Fe*Ze+Ge*st,m[9]=_e*Ye+Te*Ze+oe*st,m[10]=Ae*Ye+Be*Ze+Ue*st,m[11]=Ie*Ye+Ve*Ze+xe*st,R!==m&&(m[12]=R[12],m[13]=R[13],m[14]=R[14],m[15]=R[15]),m)}function S(m,R,z){var D=Math.sin(z),K=Math.cos(z),te=R[4],se=R[5],ie=R[6],Se=R[7],ve=R[8],be=R[9],Pe=R[10],_e=R[11];return R!==m&&(m[0]=R[0],m[1]=R[1],m[2]=R[2],m[3]=R[3],m[12]=R[12],m[13]=R[13],m[14]=R[14],m[15]=R[15]),m[4]=te*K+ve*D,m[5]=se*K+be*D,m[6]=ie*K+Pe*D,m[7]=Se*K+_e*D,m[8]=ve*K-te*D,m[9]=be*K-se*D,m[10]=Pe*K-ie*D,m[11]=_e*K-Se*D,m}function E(m,R,z){var D=Math.sin(z),K=Math.cos(z),te=R[0],se=R[1],ie=R[2],Se=R[3],ve=R[8],be=R[9],Pe=R[10],_e=R[11];return R!==m&&(m[4]=R[4],m[5]=R[5],m[6]=R[6],m[7]=R[7],m[12]=R[12],m[13]=R[13],m[14]=R[14],m[15]=R[15]),m[0]=te*K-ve*D,m[1]=se*K-be*D,m[2]=ie*K-Pe*D,m[3]=Se*K-_e*D,m[8]=te*D+ve*K,m[9]=se*D+be*K,m[10]=ie*D+Pe*K,m[11]=Se*D+_e*K,m}function I(m,R,z){var D=Math.sin(z),K=Math.cos(z),te=R[0],se=R[1],ie=R[2],Se=R[3],ve=R[4],be=R[5],Pe=R[6],_e=R[7];return R!==m&&(m[8]=R[8],m[9]=R[9],m[10]=R[10],m[11]=R[11],m[12]=R[12],m[13]=R[13],m[14]=R[14],m[15]=R[15]),m[0]=te*K+ve*D,m[1]=se*K+be*D,m[2]=ie*K+Pe*D,m[3]=Se*K+_e*D,m[4]=ve*K-te*D,m[5]=be*K-se*D,m[6]=Pe*K-ie*D,m[7]=_e*K-Se*D,m}function q(m,R){return m[0]=1,m[1]=0,m[2]=0,m[3]=0,m[4]=0,m[5]=1,m[6]=0,m[7]=0,m[8]=0,m[9]=0,m[10]=1,m[11]=0,m[12]=R[0],m[13]=R[1],m[14]=R[2],m[15]=1,m}function Y(m,R){return m[0]=R[0],m[1]=0,m[2]=0,m[3]=0,m[4]=0,m[5]=R[1],m[6]=0,m[7]=0,m[8]=0,m[9]=0,m[10]=R[2],m[11]=0,m[12]=0,m[13]=0,m[14]=0,m[15]=1,m}function J(m,R,z){var D=z[0],K=z[1],te=z[2],se=Math.sqrt(D*D+K*K+te*te),ie=void 0,Se=void 0,ve=void 0;return Math.abs(se)<l.EPSILON?null:(se=1/se,D*=se,K*=se,te*=se,ie=Math.sin(R),Se=Math.cos(R),ve=1-Se,m[0]=D*D*ve+Se,m[1]=K*D*ve+te*ie,m[2]=te*D*ve-K*ie,m[3]=0,m[4]=D*K*ve-te*ie,m[5]=K*K*ve+Se,m[6]=te*K*ve+D*ie,m[7]=0,m[8]=D*te*ve+K*ie,m[9]=K*te*ve-D*ie,m[10]=te*te*ve+Se,m[11]=0,m[12]=0,m[13]=0,m[14]=0,m[15]=1,m)}function de(m,R){var z=Math.sin(R),D=Math.cos(R);return m[0]=1,m[1]=0,m[2]=0,m[3]=0,m[4]=0,m[5]=D,m[6]=z,m[7]=0,m[8]=0,m[9]=-z,m[10]=D,m[11]=0,m[12]=0,m[13]=0,m[14]=0,m[15]=1,m}function fe(m,R){var z=Math.sin(R),D=Math.cos(R);return m[0]=D,m[1]=0,m[2]=-z,m[3]=0,m[4]=0,m[5]=1,m[6]=0,m[7]=0,m[8]=z,m[9]=0,m[10]=D,m[11]=0,m[12]=0,m[13]=0,m[14]=0,m[15]=1,m}function pe(m,R){var z=Math.sin(R),D=Math.cos(R);return m[0]=D,m[1]=z,m[2]=0,m[3]=0,m[4]=-z,m[5]=D,m[6]=0,m[7]=0,m[8]=0,m[9]=0,m[10]=1,m[11]=0,m[12]=0,m[13]=0,m[14]=0,m[15]=1,m}function X(m,R,z){var D=R[0],K=R[1],te=R[2],se=R[3],ie=D+D,Se=K+K,ve=te+te,be=D*ie,Pe=D*Se,_e=D*ve,Ae=K*Se,Ie=K*ve,Fe=te*ve,Te=se*ie,Be=se*Se,Ve=se*ve;return m[0]=1-(Ae+Fe),m[1]=Pe+Ve,m[2]=_e-Be,m[3]=0,m[4]=Pe-Ve,m[5]=1-(be+Fe),m[6]=Ie+Te,m[7]=0,m[8]=_e+Be,m[9]=Ie-Te,m[10]=1-(be+Ae),m[11]=0,m[12]=z[0],m[13]=z[1],m[14]=z[2],m[15]=1,m}function O(m,R){return m[0]=R[12],m[1]=R[13],m[2]=R[14],m}function j(m,R){var z=R[0],D=R[1],K=R[2],te=R[4],se=R[5],ie=R[6],Se=R[8],ve=R[9],be=R[10];return m[0]=Math.sqrt(z*z+D*D+K*K),m[1]=Math.sqrt(te*te+se*se+ie*ie),m[2]=Math.sqrt(Se*Se+ve*ve+be*be),m}function re(m,R){var z=R[0]+R[5]+R[10],D=0;return z>0?(D=Math.sqrt(z+1)*2,m[3]=.25*D,m[0]=(R[6]-R[9])/D,m[1]=(R[8]-R[2])/D,m[2]=(R[1]-R[4])/D):R[0]>R[5]&R[0]>R[10]?(D=Math.sqrt(1+R[0]-R[5]-R[10])*2,m[3]=(R[6]-R[9])/D,m[0]=.25*D,m[1]=(R[1]+R[4])/D,m[2]=(R[8]+R[2])/D):R[5]>R[10]?(D=Math.sqrt(1+R[5]-R[0]-R[10])*2,m[3]=(R[8]-R[2])/D,m[0]=(R[1]+R[4])/D,m[1]=.25*D,m[2]=(R[6]+R[9])/D):(D=Math.sqrt(1+R[10]-R[0]-R[5])*2,m[3]=(R[1]-R[4])/D,m[0]=(R[8]+R[2])/D,m[1]=(R[6]+R[9])/D,m[2]=.25*D),m}function le(m,R,z,D){var K=R[0],te=R[1],se=R[2],ie=R[3],Se=K+K,ve=te+te,be=se+se,Pe=K*Se,_e=K*ve,Ae=K*be,Ie=te*ve,Fe=te*be,Te=se*be,Be=ie*Se,Ve=ie*ve,Ge=ie*be,oe=D[0],Ue=D[1],xe=D[2];return m[0]=(1-(Ie+Te))*oe,m[1]=(_e+Ge)*oe,m[2]=(Ae-Ve)*oe,m[3]=0,m[4]=(_e-Ge)*Ue,m[5]=(1-(Pe+Te))*Ue,m[6]=(Fe+Be)*Ue,m[7]=0,m[8]=(Ae+Ve)*xe,m[9]=(Fe-Be)*xe,m[10]=(1-(Pe+Ie))*xe,m[11]=0,m[12]=z[0],m[13]=z[1],m[14]=z[2],m[15]=1,m}function me(m,R,z,D,K){var te=R[0],se=R[1],ie=R[2],Se=R[3],ve=te+te,be=se+se,Pe=ie+ie,_e=te*ve,Ae=te*be,Ie=te*Pe,Fe=se*be,Te=se*Pe,Be=ie*Pe,Ve=Se*ve,Ge=Se*be,oe=Se*Pe,Ue=D[0],xe=D[1],Le=D[2],Oe=K[0],Ne=K[1],He=K[2];return m[0]=(1-(Fe+Be))*Ue,m[1]=(Ae+oe)*Ue,m[2]=(Ie-Ge)*Ue,m[3]=0,m[4]=(Ae-oe)*xe,m[5]=(1-(_e+Be))*xe,m[6]=(Te+Ve)*xe,m[7]=0,m[8]=(Ie+Ge)*Le,m[9]=(Te-Ve)*Le,m[10]=(1-(_e+Fe))*Le,m[11]=0,m[12]=z[0]+Oe-(m[0]*Oe+m[4]*Ne+m[8]*He),m[13]=z[1]+Ne-(m[1]*Oe+m[5]*Ne+m[9]*He),m[14]=z[2]+He-(m[2]*Oe+m[6]*Ne+m[10]*He),m[15]=1,m}function ce(m,R){var z=R[0],D=R[1],K=R[2],te=R[3],se=z+z,ie=D+D,Se=K+K,ve=z*se,be=D*se,Pe=D*ie,_e=K*se,Ae=K*ie,Ie=K*Se,Fe=te*se,Te=te*ie,Be=te*Se;return m[0]=1-Pe-Ie,m[1]=be+Be,m[2]=_e-Te,m[3]=0,m[4]=be-Be,m[5]=1-ve-Ie,m[6]=Ae+Fe,m[7]=0,m[8]=_e+Te,m[9]=Ae-Fe,m[10]=1-ve-Pe,m[11]=0,m[12]=0,m[13]=0,m[14]=0,m[15]=1,m}function N(m,R,z,D,K,te,se){var ie=1/(z-R),Se=1/(K-D),ve=1/(te-se);return m[0]=te*2*ie,m[1]=0,m[2]=0,m[3]=0,m[4]=0,m[5]=te*2*Se,m[6]=0,m[7]=0,m[8]=(z+R)*ie,m[9]=(K+D)*Se,m[10]=(se+te)*ve,m[11]=-1,m[12]=0,m[13]=0,m[14]=se*te*2*ve,m[15]=0,m}function w(m,R,z,D,K){var te=1/Math.tan(R/2),se=1/(D-K);return m[0]=te/z,m[1]=0,m[2]=0,m[3]=0,m[4]=0,m[5]=te,m[6]=0,m[7]=0,m[8]=0,m[9]=0,m[10]=(K+D)*se,m[11]=-1,m[12]=0,m[13]=0,m[14]=2*K*D*se,m[15]=0,m}function $(m,R,z,D){var K=Math.tan(R.upDegrees*Math.PI/180),te=Math.tan(R.downDegrees*Math.PI/180),se=Math.tan(R.leftDegrees*Math.PI/180),ie=Math.tan(R.rightDegrees*Math.PI/180),Se=2/(se+ie),ve=2/(K+te);return m[0]=Se,m[1]=0,m[2]=0,m[3]=0,m[4]=0,m[5]=ve,m[6]=0,m[7]=0,m[8]=-((se-ie)*Se*.5),m[9]=(K-te)*ve*.5,m[10]=D/(z-D),m[11]=-1,m[12]=0,m[13]=0,m[14]=D*z/(z-D),m[15]=0,m}function ee(m,R,z,D,K,te,se){var ie=1/(R-z),Se=1/(D-K),ve=1/(te-se);return m[0]=-2*ie,m[1]=0,m[2]=0,m[3]=0,m[4]=0,m[5]=-2*Se,m[6]=0,m[7]=0,m[8]=0,m[9]=0,m[10]=2*ve,m[11]=0,m[12]=(R+z)*ie,m[13]=(K+D)*Se,m[14]=(se+te)*ve,m[15]=1,m}function Z(m,R,z,D){var K=void 0,te=void 0,se=void 0,ie=void 0,Se=void 0,ve=void 0,be=void 0,Pe=void 0,_e=void 0,Ae=void 0,Ie=R[0],Fe=R[1],Te=R[2],Be=D[0],Ve=D[1],Ge=D[2],oe=z[0],Ue=z[1],xe=z[2];return Math.abs(Ie-oe)<l.EPSILON&&Math.abs(Fe-Ue)<l.EPSILON&&Math.abs(Te-xe)<l.EPSILON?mat4.identity(m):(be=Ie-oe,Pe=Fe-Ue,_e=Te-xe,Ae=1/Math.sqrt(be*be+Pe*Pe+_e*_e),be*=Ae,Pe*=Ae,_e*=Ae,K=Ve*_e-Ge*Pe,te=Ge*be-Be*_e,se=Be*Pe-Ve*be,Ae=Math.sqrt(K*K+te*te+se*se),Ae?(Ae=1/Ae,K*=Ae,te*=Ae,se*=Ae):(K=0,te=0,se=0),ie=Pe*se-_e*te,Se=_e*K-be*se,ve=be*te-Pe*K,Ae=Math.sqrt(ie*ie+Se*Se+ve*ve),Ae?(Ae=1/Ae,ie*=Ae,Se*=Ae,ve*=Ae):(ie=0,Se=0,ve=0),m[0]=K,m[1]=ie,m[2]=be,m[3]=0,m[4]=te,m[5]=Se,m[6]=Pe,m[7]=0,m[8]=se,m[9]=ve,m[10]=_e,m[11]=0,m[12]=-(K*Ie+te*Fe+se*Te),m[13]=-(ie*Ie+Se*Fe+ve*Te),m[14]=-(be*Ie+Pe*Fe+_e*Te),m[15]=1,m)}function ne(m,R,z,D){var K=R[0],te=R[1],se=R[2],ie=D[0],Se=D[1],ve=D[2],be=K-z[0],Pe=te-z[1],_e=se-z[2],Ae=be*be+Pe*Pe+_e*_e;Ae>0&&(Ae=1/Math.sqrt(Ae),be*=Ae,Pe*=Ae,_e*=Ae);var Ie=Se*_e-ve*Pe,Fe=ve*be-ie*_e,Te=ie*Pe-Se*be;return m[0]=Ie,m[1]=Fe,m[2]=Te,m[3]=0,m[4]=Pe*Te-_e*Fe,m[5]=_e*Ie-be*Te,m[6]=be*Fe-Pe*Ie,m[7]=0,m[8]=be,m[9]=Pe,m[10]=_e,m[11]=0,m[12]=K,m[13]=te,m[14]=se,m[15]=1,m}function he(m){return"mat4("+m[0]+", "+m[1]+", "+m[2]+", "+m[3]+", "+m[4]+", "+m[5]+", "+m[6]+", "+m[7]+", "+m[8]+", "+m[9]+", "+m[10]+", "+m[11]+", "+m[12]+", "+m[13]+", "+m[14]+", "+m[15]+")"}function Ce(m){return Math.sqrt(Math.pow(m[0],2)+Math.pow(m[1],2)+Math.pow(m[2],2)+Math.pow(m[3],2)+Math.pow(m[4],2)+Math.pow(m[5],2)+Math.pow(m[6],2)+Math.pow(m[7],2)+Math.pow(m[8],2)+Math.pow(m[9],2)+Math.pow(m[10],2)+Math.pow(m[11],2)+Math.pow(m[12],2)+Math.pow(m[13],2)+Math.pow(m[14],2)+Math.pow(m[15],2))}function De(m,R,z){return m[0]=R[0]+z[0],m[1]=R[1]+z[1],m[2]=R[2]+z[2],m[3]=R[3]+z[3],m[4]=R[4]+z[4],m[5]=R[5]+z[5],m[6]=R[6]+z[6],m[7]=R[7]+z[7],m[8]=R[8]+z[8],m[9]=R[9]+z[9],m[10]=R[10]+z[10],m[11]=R[11]+z[11],m[12]=R[12]+z[12],m[13]=R[13]+z[13],m[14]=R[14]+z[14],m[15]=R[15]+z[15],m}function H(m,R,z){return m[0]=R[0]-z[0],m[1]=R[1]-z[1],m[2]=R[2]-z[2],m[3]=R[3]-z[3],m[4]=R[4]-z[4],m[5]=R[5]-z[5],m[6]=R[6]-z[6],m[7]=R[7]-z[7],m[8]=R[8]-z[8],m[9]=R[9]-z[9],m[10]=R[10]-z[10],m[11]=R[11]-z[11],m[12]=R[12]-z[12],m[13]=R[13]-z[13],m[14]=R[14]-z[14],m[15]=R[15]-z[15],m}function ae(m,R,z){return m[0]=R[0]*z,m[1]=R[1]*z,m[2]=R[2]*z,m[3]=R[3]*z,m[4]=R[4]*z,m[5]=R[5]*z,m[6]=R[6]*z,m[7]=R[7]*z,m[8]=R[8]*z,m[9]=R[9]*z,m[10]=R[10]*z,m[11]=R[11]*z,m[12]=R[12]*z,m[13]=R[13]*z,m[14]=R[14]*z,m[15]=R[15]*z,m}function ue(m,R,z,D){return m[0]=R[0]+z[0]*D,m[1]=R[1]+z[1]*D,m[2]=R[2]+z[2]*D,m[3]=R[3]+z[3]*D,m[4]=R[4]+z[4]*D,m[5]=R[5]+z[5]*D,m[6]=R[6]+z[6]*D,m[7]=R[7]+z[7]*D,m[8]=R[8]+z[8]*D,m[9]=R[9]+z[9]*D,m[10]=R[10]+z[10]*D,m[11]=R[11]+z[11]*D,m[12]=R[12]+z[12]*D,m[13]=R[13]+z[13]*D,m[14]=R[14]+z[14]*D,m[15]=R[15]+z[15]*D,m}function Ee(m,R){return m[0]===R[0]&&m[1]===R[1]&&m[2]===R[2]&&m[3]===R[3]&&m[4]===R[4]&&m[5]===R[5]&&m[6]===R[6]&&m[7]===R[7]&&m[8]===R[8]&&m[9]===R[9]&&m[10]===R[10]&&m[11]===R[11]&&m[12]===R[12]&&m[13]===R[13]&&m[14]===R[14]&&m[15]===R[15]}function ye(m,R){var z=m[0],D=m[1],K=m[2],te=m[3],se=m[4],ie=m[5],Se=m[6],ve=m[7],be=m[8],Pe=m[9],_e=m[10],Ae=m[11],Ie=m[12],Fe=m[13],Te=m[14],Be=m[15],Ve=R[0],Ge=R[1],oe=R[2],Ue=R[3],xe=R[4],Le=R[5],Oe=R[6],Ne=R[7],He=R[8],Qe=R[9],Je=R[10],Ye=R[11],Ze=R[12],st=R[13],_t=R[14],gt=R[15];return Math.abs(z-Ve)<=l.EPSILON*Math.max(1,Math.abs(z),Math.abs(Ve))&&Math.abs(D-Ge)<=l.EPSILON*Math.max(1,Math.abs(D),Math.abs(Ge))&&Math.abs(K-oe)<=l.EPSILON*Math.max(1,Math.abs(K),Math.abs(oe))&&Math.abs(te-Ue)<=l.EPSILON*Math.max(1,Math.abs(te),Math.abs(Ue))&&Math.abs(se-xe)<=l.EPSILON*Math.max(1,Math.abs(se),Math.abs(xe))&&Math.abs(ie-Le)<=l.EPSILON*Math.max(1,Math.abs(ie),Math.abs(Le))&&Math.abs(Se-Oe)<=l.EPSILON*Math.max(1,Math.abs(Se),Math.abs(Oe))&&Math.abs(ve-Ne)<=l.EPSILON*Math.max(1,Math.abs(ve),Math.abs(Ne))&&Math.abs(be-He)<=l.EPSILON*Math.max(1,Math.abs(be),Math.abs(He))&&Math.abs(Pe-Qe)<=l.EPSILON*Math.max(1,Math.abs(Pe),Math.abs(Qe))&&Math.abs(_e-Je)<=l.EPSILON*Math.max(1,Math.abs(_e),Math.abs(Je))&&Math.abs(Ae-Ye)<=l.EPSILON*Math.max(1,Math.abs(Ae),Math.abs(Ye))&&Math.abs(Ie-Ze)<=l.EPSILON*Math.max(1,Math.abs(Ie),Math.abs(Ze))&&Math.abs(Fe-st)<=l.EPSILON*Math.max(1,Math.abs(Fe),Math.abs(st))&&Math.abs(Te-_t)<=l.EPSILON*Math.max(1,Math.abs(Te),Math.abs(_t))&&Math.abs(Be-gt)<=l.EPSILON*Math.max(1,Math.abs(Be),Math.abs(gt))}a.mul=b,a.sub=H},function(s,a,o){Object.defineProperty(a,"__esModule",{value:!0}),a.setAxes=a.sqlerp=a.rotationTo=a.equals=a.exactEquals=a.normalize=a.sqrLen=a.squaredLength=a.len=a.length=a.lerp=a.dot=a.scale=a.mul=a.add=a.set=a.copy=a.fromValues=a.clone=void 0,a.create=v,a.identity=F,a.setAxisAngle=y,a.getAxisAngle=x,a.multiply=b,a.rotateX=L,a.rotateY=G,a.rotateZ=M,a.calculateW=S,a.slerp=E,a.invert=I,a.conjugate=q,a.fromMat3=Y,a.fromEuler=J,a.str=de;var c=o(0),l=g(c),u=o(1),h=g(u),d=o(2),f=g(d),p=o(3),_=g(p);function g(O){if(O&&O.__esModule)return O;var j={};if(O!=null)for(var re in O)Object.prototype.hasOwnProperty.call(O,re)&&(j[re]=O[re]);return j.default=O,j}function v(){var O=new l.ARRAY_TYPE(4);return O[0]=0,O[1]=0,O[2]=0,O[3]=1,O}function F(O){return O[0]=0,O[1]=0,O[2]=0,O[3]=1,O}function y(O,j,re){re=re*.5;var le=Math.sin(re);return O[0]=le*j[0],O[1]=le*j[1],O[2]=le*j[2],O[3]=Math.cos(re),O}function x(O,j){var re=Math.acos(j[3])*2,le=Math.sin(re/2);return le!=0?(O[0]=j[0]/le,O[1]=j[1]/le,O[2]=j[2]/le):(O[0]=1,O[1]=0,O[2]=0),re}function b(O,j,re){var le=j[0],me=j[1],ce=j[2],N=j[3],w=re[0],$=re[1],ee=re[2],Z=re[3];return O[0]=le*Z+N*w+me*ee-ce*$,O[1]=me*Z+N*$+ce*w-le*ee,O[2]=ce*Z+N*ee+le*$-me*w,O[3]=N*Z-le*w-me*$-ce*ee,O}function L(O,j,re){re*=.5;var le=j[0],me=j[1],ce=j[2],N=j[3],w=Math.sin(re),$=Math.cos(re);return O[0]=le*$+N*w,O[1]=me*$+ce*w,O[2]=ce*$-me*w,O[3]=N*$-le*w,O}function G(O,j,re){re*=.5;var le=j[0],me=j[1],ce=j[2],N=j[3],w=Math.sin(re),$=Math.cos(re);return O[0]=le*$-ce*w,O[1]=me*$+N*w,O[2]=ce*$+le*w,O[3]=N*$-me*w,O}function M(O,j,re){re*=.5;var le=j[0],me=j[1],ce=j[2],N=j[3],w=Math.sin(re),$=Math.cos(re);return O[0]=le*$+me*w,O[1]=me*$-le*w,O[2]=ce*$+N*w,O[3]=N*$-ce*w,O}function S(O,j){var re=j[0],le=j[1],me=j[2];return O[0]=re,O[1]=le,O[2]=me,O[3]=Math.sqrt(Math.abs(1-re*re-le*le-me*me)),O}function E(O,j,re,le){var me=j[0],ce=j[1],N=j[2],w=j[3],$=re[0],ee=re[1],Z=re[2],ne=re[3],he=void 0,Ce=void 0,De=void 0,H=void 0,ae=void 0;return Ce=me*$+ce*ee+N*Z+w*ne,Ce<0&&(Ce=-Ce,$=-$,ee=-ee,Z=-Z,ne=-ne),1-Ce>1e-6?(he=Math.acos(Ce),De=Math.sin(he),H=Math.sin((1-le)*he)/De,ae=Math.sin(le*he)/De):(H=1-le,ae=le),O[0]=H*me+ae*$,O[1]=H*ce+ae*ee,O[2]=H*N+ae*Z,O[3]=H*w+ae*ne,O}function I(O,j){var re=j[0],le=j[1],me=j[2],ce=j[3],N=re*re+le*le+me*me+ce*ce,w=N?1/N:0;return O[0]=-re*w,O[1]=-le*w,O[2]=-me*w,O[3]=ce*w,O}function q(O,j){return O[0]=-j[0],O[1]=-j[1],O[2]=-j[2],O[3]=j[3],O}function Y(O,j){var re=j[0]+j[4]+j[8],le=void 0;if(re>0)le=Math.sqrt(re+1),O[3]=.5*le,le=.5/le,O[0]=(j[5]-j[7])*le,O[1]=(j[6]-j[2])*le,O[2]=(j[1]-j[3])*le;else{var me=0;j[4]>j[0]&&(me=1),j[8]>j[me*3+me]&&(me=2);var ce=(me+1)%3,N=(me+2)%3;le=Math.sqrt(j[me*3+me]-j[ce*3+ce]-j[N*3+N]+1),O[me]=.5*le,le=.5/le,O[3]=(j[ce*3+N]-j[N*3+ce])*le,O[ce]=(j[ce*3+me]+j[me*3+ce])*le,O[N]=(j[N*3+me]+j[me*3+N])*le}return O}function J(O,j,re,le){var me=.5*Math.PI/180;j*=me,re*=me,le*=me;var ce=Math.sin(j),N=Math.cos(j),w=Math.sin(re),$=Math.cos(re),ee=Math.sin(le),Z=Math.cos(le);return O[0]=ce*$*Z-N*w*ee,O[1]=N*w*Z+ce*$*ee,O[2]=N*$*ee-ce*w*Z,O[3]=N*$*Z+ce*w*ee,O}function de(O){return"quat("+O[0]+", "+O[1]+", "+O[2]+", "+O[3]+")"}a.clone=_.clone,a.fromValues=_.fromValues,a.copy=_.copy,a.set=_.set,a.add=_.add,a.mul=b,a.scale=_.scale,a.dot=_.dot,a.lerp=_.lerp;var fe=a.length=_.length;a.len=fe;var pe=a.squaredLength=_.squaredLength;a.sqrLen=pe;var X=a.normalize=_.normalize;a.exactEquals=_.exactEquals,a.equals=_.equals,a.rotationTo=function(){var O=f.create(),j=f.fromValues(1,0,0),re=f.fromValues(0,1,0);return function(le,me,ce){var N=f.dot(me,ce);return N<-.999999?(f.cross(O,j,me),f.len(O)<1e-6&&f.cross(O,re,me),f.normalize(O,O),y(le,O,Math.PI),le):N>.999999?(le[0]=0,le[1]=0,le[2]=0,le[3]=1,le):(f.cross(O,me,ce),le[0]=O[0],le[1]=O[1],le[2]=O[2],le[3]=1+N,X(le,le))}}(),a.sqlerp=function(){var O=v(),j=v();return function(re,le,me,ce,N,w){return E(O,le,N,w),E(j,me,ce,w),E(re,O,j,2*w*(1-w)),re}}(),a.setAxes=function(){var O=h.create();return function(j,re,le,me){return O[0]=le[0],O[3]=le[1],O[6]=le[2],O[1]=me[0],O[4]=me[1],O[7]=me[2],O[2]=-re[0],O[5]=-re[1],O[8]=-re[2],X(j,Y(j,O))}}()},function(s,a,o){Object.defineProperty(a,"__esModule",{value:!0}),a.forEach=a.sqrLen=a.sqrDist=a.dist=a.div=a.mul=a.sub=a.len=void 0,a.create=h,a.clone=d,a.fromValues=f,a.copy=p,a.set=_,a.add=g,a.subtract=v,a.multiply=F,a.divide=y,a.ceil=x,a.floor=b,a.min=L,a.max=G,a.round=M,a.scale=S,a.scaleAndAdd=E,a.distance=I,a.squaredDistance=q,a.length=Y,a.squaredLength=J,a.negate=de,a.inverse=fe,a.normalize=pe,a.dot=X,a.cross=O,a.lerp=j,a.random=re,a.transformMat2=le,a.transformMat2d=me,a.transformMat3=ce,a.transformMat4=N,a.str=w,a.exactEquals=$,a.equals=ee;var c=o(0),l=u(c);function u(Z){if(Z&&Z.__esModule)return Z;var ne={};if(Z!=null)for(var he in Z)Object.prototype.hasOwnProperty.call(Z,he)&&(ne[he]=Z[he]);return ne.default=Z,ne}function h(){var Z=new l.ARRAY_TYPE(2);return Z[0]=0,Z[1]=0,Z}function d(Z){var ne=new l.ARRAY_TYPE(2);return ne[0]=Z[0],ne[1]=Z[1],ne}function f(Z,ne){var he=new l.ARRAY_TYPE(2);return he[0]=Z,he[1]=ne,he}function p(Z,ne){return Z[0]=ne[0],Z[1]=ne[1],Z}function _(Z,ne,he){return Z[0]=ne,Z[1]=he,Z}function g(Z,ne,he){return Z[0]=ne[0]+he[0],Z[1]=ne[1]+he[1],Z}function v(Z,ne,he){return Z[0]=ne[0]-he[0],Z[1]=ne[1]-he[1],Z}function F(Z,ne,he){return Z[0]=ne[0]*he[0],Z[1]=ne[1]*he[1],Z}function y(Z,ne,he){return Z[0]=ne[0]/he[0],Z[1]=ne[1]/he[1],Z}function x(Z,ne){return Z[0]=Math.ceil(ne[0]),Z[1]=Math.ceil(ne[1]),Z}function b(Z,ne){return Z[0]=Math.floor(ne[0]),Z[1]=Math.floor(ne[1]),Z}function L(Z,ne,he){return Z[0]=Math.min(ne[0],he[0]),Z[1]=Math.min(ne[1],he[1]),Z}function G(Z,ne,he){return Z[0]=Math.max(ne[0],he[0]),Z[1]=Math.max(ne[1],he[1]),Z}function M(Z,ne){return Z[0]=Math.round(ne[0]),Z[1]=Math.round(ne[1]),Z}function S(Z,ne,he){return Z[0]=ne[0]*he,Z[1]=ne[1]*he,Z}function E(Z,ne,he,Ce){return Z[0]=ne[0]+he[0]*Ce,Z[1]=ne[1]+he[1]*Ce,Z}function I(Z,ne){var he=ne[0]-Z[0],Ce=ne[1]-Z[1];return Math.sqrt(he*he+Ce*Ce)}function q(Z,ne){var he=ne[0]-Z[0],Ce=ne[1]-Z[1];return he*he+Ce*Ce}function Y(Z){var ne=Z[0],he=Z[1];return Math.sqrt(ne*ne+he*he)}function J(Z){var ne=Z[0],he=Z[1];return ne*ne+he*he}function de(Z,ne){return Z[0]=-ne[0],Z[1]=-ne[1],Z}function fe(Z,ne){return Z[0]=1/ne[0],Z[1]=1/ne[1],Z}function pe(Z,ne){var he=ne[0],Ce=ne[1],De=he*he+Ce*Ce;return De>0&&(De=1/Math.sqrt(De),Z[0]=ne[0]*De,Z[1]=ne[1]*De),Z}function X(Z,ne){return Z[0]*ne[0]+Z[1]*ne[1]}function O(Z,ne,he){var Ce=ne[0]*he[1]-ne[1]*he[0];return Z[0]=Z[1]=0,Z[2]=Ce,Z}function j(Z,ne,he,Ce){var De=ne[0],H=ne[1];return Z[0]=De+Ce*(he[0]-De),Z[1]=H+Ce*(he[1]-H),Z}function re(Z,ne){ne=ne||1;var he=l.RANDOM()*2*Math.PI;return Z[0]=Math.cos(he)*ne,Z[1]=Math.sin(he)*ne,Z}function le(Z,ne,he){var Ce=ne[0],De=ne[1];return Z[0]=he[0]*Ce+he[2]*De,Z[1]=he[1]*Ce+he[3]*De,Z}function me(Z,ne,he){var Ce=ne[0],De=ne[1];return Z[0]=he[0]*Ce+he[2]*De+he[4],Z[1]=he[1]*Ce+he[3]*De+he[5],Z}function ce(Z,ne,he){var Ce=ne[0],De=ne[1];return Z[0]=he[0]*Ce+he[3]*De+he[6],Z[1]=he[1]*Ce+he[4]*De+he[7],Z}function N(Z,ne,he){var Ce=ne[0],De=ne[1];return Z[0]=he[0]*Ce+he[4]*De+he[12],Z[1]=he[1]*Ce+he[5]*De+he[13],Z}function w(Z){return"vec2("+Z[0]+", "+Z[1]+")"}function $(Z,ne){return Z[0]===ne[0]&&Z[1]===ne[1]}function ee(Z,ne){var he=Z[0],Ce=Z[1],De=ne[0],H=ne[1];return Math.abs(he-De)<=l.EPSILON*Math.max(1,Math.abs(he),Math.abs(De))&&Math.abs(Ce-H)<=l.EPSILON*Math.max(1,Math.abs(Ce),Math.abs(H))}a.len=Y,a.sub=v,a.mul=F,a.div=y,a.dist=I,a.sqrDist=q,a.sqrLen=J,a.forEach=function(){var Z=h();return function(ne,he,Ce,De,H,ae){var ue=void 0,Ee=void 0;for(he||(he=2),Ce||(Ce=0),De?Ee=Math.min(De*he+Ce,ne.length):Ee=ne.length,ue=Ce;ue<Ee;ue+=he)Z[0]=ne[ue],Z[1]=ne[ue+1],H(Z,Z,ae),ne[ue]=Z[0],ne[ue+1]=Z[1];return ne}}()}])})},{}],9:[function(t,n,i){/**
 * AUTHOR OF INITIAL JS LIBRARY
 * k-d Tree JavaScript - V 1.0
 *
 * https://github.com/ubilabs/kd-tree-javascript
 *
 * @author Mircea Pricop <pricop@ubilabs.net>, 2012
 * @author Martin Kleppe <kleppe@ubilabs.net>, 2012
 * @author Ubilabs http://ubilabs.net, 2012
 * @license MIT License <http://www.opensource.org/licenses/mit-license.php>
 */function s(c,l,u){this.obj=c,this.left=null,this.right=null,this.parent=u,this.dimension=l}function a(c,l,u){var h=this;function d(f,p,_){var g=p%u.length,v,F;return f.length===0?null:f.length===1?new s(f[0],g,_):(f.sort(function(y,x){return y[u[g]]-x[u[g]]}),v=Math.floor(f.length/2),F=new s(f[v],g,_),F.left=d(f.slice(0,v),p+1,F),F.right=d(f.slice(v+1),p+1,F),F)}this.root=d(c,0,null),this.insert=function(f){function p(F,y){if(F===null)return y;var x=u[F.dimension];return f[x]<F.obj[x]?p(F.left,F):p(F.right,F)}var _=p(this.root,null),g,v;if(_===null){this.root=new s(f,0,null);return}g=new s(f,(_.dimension+1)%u.length,_),v=u[_.dimension],f[v]<_.obj[v]?_.left=g:_.right=g},this.remove=function(f){var p;function _(v){if(v===null)return null;if(v.obj===f)return v;var F=u[v.dimension];return f[F]<v.obj[F]?_(v.left):_(v.right)}function g(v){var F,y,x;function b(G,M){var S,E,I,q,Y;return G===null?null:(S=u[M],G.dimension===M?G.right!==null?b(G.right,M):G:(E=G.obj[S],I=b(G.left,M),q=b(G.right,M),Y=G,I!==null&&I.obj[S]>E&&(Y=I),q!==null&&q.obj[S]>Y.obj[S]&&(Y=q),Y))}function L(G,M){var S,E,I,q,Y;return G===null?null:(S=u[M],G.dimension===M?G.left!==null?L(G.left,M):G:(E=G.obj[S],I=L(G.left,M),q=L(G.right,M),Y=G,I!==null&&I.obj[S]<E&&(Y=I),q!==null&&q.obj[S]<Y.obj[S]&&(Y=q),Y))}if(v.left===null&&v.right===null){if(v.parent===null){h.root=null;return}x=u[v.parent.dimension],v.obj[x]<v.parent.obj[x]?v.parent.left=null:v.parent.right=null;return}v.left!==null?F=b(v.left,v.dimension):F=L(v.right,v.dimension),y=F.obj,g(F),v.obj=y}p=_(h.root),p!==null&&g(p)},this.nearest=function(f,p,_){var g,v,F;F=new o(function(x){return-x[1]});function y(x){if(!h.root)return[];var b,L=u[x.dimension],G=l(f,x.obj),M={},S,E,I;function q(Y,J){F.push([Y,J]),F.size()>p&&F.pop()}for(I=0;I<u.length;I+=1)I===x.dimension?M[u[I]]=f[u[I]]:M[u[I]]=x.obj[u[I]];if(S=l(M,x.obj),x.right===null&&x.left===null){(F.size()<p||G<F.peek()[1])&&q(x,G);return}x.right===null?b=x.left:x.left===null?b=x.right:f[L]<x.obj[L]?b=x.left:b=x.right,y(b),(F.size()<p||G<F.peek()[1])&&q(x,G),(F.size()<p||Math.abs(S)<F.peek()[1])&&(b===x.left?E=x.right:E=x.left,E!==null&&y(E))}if(_)for(g=0;g<p;g+=1)F.push([null,_]);for(y(h.root),v=[],g=0;g<p&&g<F.content.length;g+=1)F.content[g][0]&&v.push([F.content[g][0].obj,F.content[g][1]]);return v},this.balanceFactor=function(){function f(_){return _===null?0:Math.max(f(_.left),f(_.right))+1}function p(_){return _===null?0:p(_.left)+p(_.right)+1}return f(h.root)/(Math.log(p(h.root))/Math.log(2))}}function o(c){this.content=[],this.scoreFunction=c}o.prototype={push:function(c){this.content.push(c),this.bubbleUp(this.content.length-1)},pop:function(){var c=this.content[0],l=this.content.pop();return this.content.length>0&&(this.content[0]=l,this.sinkDown(0)),c},peek:function(){return this.content[0]},remove:function(c){for(var l=this.content.length,u=0;u<l;u++)if(this.content[u]==c){var h=this.content.pop();u!=l-1&&(this.content[u]=h,this.scoreFunction(h)<this.scoreFunction(c)?this.bubbleUp(u):this.sinkDown(u));return}throw new Error("Node not found.")},size:function(){return this.content.length},bubbleUp:function(c){for(var l=this.content[c];c>0;){var u=Math.floor((c+1)/2)-1,h=this.content[u];if(this.scoreFunction(l)<this.scoreFunction(h))this.content[u]=l,this.content[c]=h,c=u;else break}},sinkDown:function(c){for(var l=this.content.length,u=this.content[c],h=this.scoreFunction(u);;){var d=(c+1)*2,f=d-1,p=null;if(f<l){var _=this.content[f],g=this.scoreFunction(_);g<h&&(p=f)}if(d<l){var v=this.content[d],F=this.scoreFunction(v);F<(p==null?h:g)&&(p=d)}if(p!=null)this.content[c]=this.content[p],this.content[p]=u,c=p;else break}}},n.exports={createKdTree:function(c,l,u){return new a(c,l,u)}}},{}],10:[function(t,n,i){n.exports={name:"serve-sofa-hrir",exports:"serveSofaHrir",version:"0.4.2",description:"Utility to fetch and shape sofa formated HRIR from server",main:"./dist/",standalone:"serveSofaHrir",scripts:{lint:"eslint ./src/ ./test/ && jscs --verbose ./src/ ./test/","lint-examples":"eslint -c examples/.eslintrc ./examples/*.html",compile:"rm -rf ./dist && babel ./src/ --out-dir ./dist/",browserify:"browserify ./src/index.js -t [ babelify ] --standalone serveSofaHrir > serveSofaHrir.js",bundle:"npm run lint && npm run test && npm run doc && npm run compile && npm run browserify",doc:"esdoc -c esdoc.json",test:"browserify test/*/*.js -t [ babelify ] --exclude 'test/*/*_listen.js*' --exclude 'test/*/*_issues.js' | tape-run","test-browser":"browserify test/*/*.js -t [ babelify ] --exclude 'test/*/*_listen.js*' --exclude 'test/*/*_issues.js' | testling -u","test-listen":"browserify test/*/*_listen.js -t [ babelify ] | tape-run","test-issues":"browserify test/*/*_issues.js -t [ babelify ] | tape-run",watch:"watch 'npm run browserify && echo $( date ): browserified' ./src/"},authors:["Jean-Philippe.Lambert@ircam.fr","Arnau Julià <arnau.julia@gmail.com>","Samuel.Goldszmidt@ircam.fr","David.Poirier-Quinot@ircam.fr"],license:"BSD-3-Clause",dependencies:{"fractional-delay":"git://github.com/Ircam-RnD/fractional-delay#gh-pages","gl-matrix":"^2.4.0","kd.tree":"akshaylive/node-kdt#39bc780704a324393bca68a17cf7bc71be8544c6"},repository:{type:"git",url:"https://github.com/Ircam-RnD/serveSofaHrir"},engines:{node:"0.12 || 4",npm:">=1.0.0 <3.0.0"},devDependencies:{"babel-cli":"^6.5.1","babel-eslint":"^4.1.8","babel-preset-es2015":"^6.5.0",babelify:"^7.2.0","blue-tape":"^0.1.11",browserify:"^12.0.2",esdoc:"^0.4.6",eslint:"^1.10.3","eslint-config-airbnb":"^1.0.2","eslint-plugin-html":"^1.4.0",jscs:"2.11.0","jscs-jsdoc":"^1.3.1",tape:"^4.4.0","tape-run":"^2.1.2",testling:"^1.7.1",watch:"^0.17.1"}}},{}],11:[function(t,n,i){Object.defineProperty(i,"__esModule",{value:!0}),i.resampleFloat32Array=c;var s=t("fractional-delay"),a=o(s);function o(l){return l&&l.__esModule?l:{default:l}}function c(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},u=new Promise(function(h,d){var f=l.inputSamples,p=l.inputSampleRate,_=typeof l.inputDelay<"u"?l.inputDelay:0,g=typeof l.outputSampleRate<"u"?l.outputSampleRate:p;if(p===g&&_===0)h(new Float32Array(f));else try{var v=Math.ceil(f.length*g/p),F=new window.OfflineAudioContext(1,v,g),y=F.createBuffer(1,f.length,p),x=1,b=new a.default(p,x);b.setDelay(_/p),y.getChannelData(0).set(b.process(f));var L=F.createBufferSource();L.buffer=y,L.connect(F.destination),L.start(),F.oncomplete=function(G){var M=G.renderedBuffer.getChannelData(0);h(M)},F.startRendering()}catch(G){d(new Error("Unable to re-sample Float32Array. "+G.message))}});return u}/**
 * @fileOverview Audio utilities
 * @author Jean-Philippe.Lambert@ircam.fr
 * @copyright 2016 IRCAM, Paris, France
 * @license BSD-3-Clause
 */i.default={resampleFloat32Array:c}},{"fractional-delay":7}],12:[function(t,n,i){Object.defineProperty(i,"__esModule",{value:!0}),i.tree=void 0,i.distanceSquared=c,i.distance=l;var s=t("kd.tree"),a=o(s);function o(u){return u&&u.__esModule?u:{default:u}}i.tree=a.default;/**
 * @fileOverview Helpers for k-d tree.
 * @author Jean-Philippe.Lambert@ircam.fr
 * @copyright 2015-2016 IRCAM, Paris, France
 * @license BSD-3-Clause
 */function c(u,h){var d=h.x-u.x,f=h.y-u.y,p=h.z-u.z;return d*d+f*f+p*p}function l(u,h){return Math.sqrt(this.distanceSquared(u,h))}i.default={distance:l,distanceSquared:c,tree:a.default}},{"kd.tree":9}],13:[function(t,n,i){Object.defineProperty(i,"__esModule",{value:!0}),i.sofaCartesianToGl=c,i.glToSofaCartesian=l,i.sofaCartesianToSofaSpherical=u,i.sofaSphericalToSofaCartesian=h,i.sofaSphericalToGl=d,i.glToSofaSpherical=f,i.sofaToSofaCartesian=p,i.spat4CartesianToGl=_,i.glToSpat4Cartesian=g,i.spat4CartesianToSpat4Spherical=v,i.spat4SphericalToSpat4Cartesian=F,i.spat4SphericalToGl=y,i.glToSpat4Spherical=x,i.systemType=b,i.systemToGl=L,i.glToSystem=G;var s=t("./degree"),a=o(s);function o(M){return M&&M.__esModule?M:{default:M}}function c(M,S){var E=S[0],I=S[1],q=S[2];return M[0]=0-I,M[1]=q,M[2]=0-E,M}/**
 * @fileOverview Coordinate systems conversions. openGL, SOFA, and Spat4 (Ircam).
 *
 * @author Jean-Philippe.Lambert@ircam.fr
 * @copyright 2015-2016 IRCAM, Paris, France
 * @license BSD-3-Clause
 */function l(M,S){var E=S[0],I=S[1],q=S[2];return M[0]=0-q,M[1]=0-E,M[2]=I,M}function u(M,S){var E=S[0],I=S[1],q=S[2],Y=E*E+I*I;return M[0]=(a.default.atan2(I,E)+360)%360,M[1]=a.default.atan2(q,Math.sqrt(Y)),M[2]=Math.sqrt(Y+q*q),M}function h(M,S){var E=S[0],I=S[1],q=S[2],Y=a.default.cos(I);return M[0]=q*Y*a.default.cos(E),M[1]=q*Y*a.default.sin(E),M[2]=q*a.default.sin(I),M}function d(M,S){var E=S[0],I=S[1],q=S[2],Y=a.default.cos(I);return M[0]=0-q*Y*a.default.sin(E),M[1]=q*a.default.sin(I),M[2]=0-q*Y*a.default.cos(E),M}function f(M,S){var E=0-S[2],I=0-S[0],q=S[1],Y=E*E+I*I;return M[0]=(a.default.atan2(I,E)+360)%360,M[1]=a.default.atan2(q,Math.sqrt(Y)),M[2]=Math.sqrt(Y+q*q),M}function p(M,S,E){switch(E){case"sofaCartesian":M[0]=S[0],M[1]=S[1],M[2]=S[2];break;case"sofaSpherical":h(M,S);break;default:throw new Error("Bad coordinate system")}return M}function _(M,S){var E=S[0],I=S[1],q=S[2];return M[0]=E,M[1]=q,M[2]=0-I,M}function g(M,S){var E=S[0],I=S[1],q=S[2];return M[0]=E,M[1]=0-q,M[2]=I,M}function v(M,S){var E=S[0],I=S[1],q=S[2],Y=E*E+I*I;return M[0]=a.default.atan2(E,I),M[1]=a.default.atan2(q,Math.sqrt(Y)),M[2]=Math.sqrt(Y+q*q),M}function F(M,S){var E=S[0],I=S[1],q=S[2],Y=a.default.cos(I);return M[0]=q*Y*a.default.sin(E),M[1]=q*Y*a.default.cos(E),M[2]=q*a.default.sin(I),M}function y(M,S){var E=S[0],I=S[1],q=S[2],Y=a.default.cos(I);return M[0]=q*Y*a.default.sin(E),M[1]=q*a.default.sin(I),M[2]=0-q*Y*a.default.cos(E),M}function x(M,S){var E=S[0],I=0-S[2],q=S[1],Y=E*E+I*I;return M[0]=a.default.atan2(E,I),M[1]=a.default.atan2(q,Math.sqrt(Y)),M[2]=Math.sqrt(Y+q*q),M}function b(M){var S=void 0;if(M==="sofaCartesian"||M==="spat4Cartesian"||M==="gl")S="cartesian";else if(M==="sofaSpherical"||M==="spat4Spherical")S="spherical";else throw new Error("Unknown coordinate system type "+M);return S}function L(M,S,E){switch(E){case"gl":M[0]=S[0],M[1]=S[1],M[2]=S[2];break;case"sofaCartesian":c(M,S);break;case"sofaSpherical":d(M,S);break;case"spat4Cartesian":_(M,S);break;case"spat4Spherical":y(M,S);break;default:throw new Error("Bad coordinate system")}return M}function G(M,S,E){switch(E){case"gl":M[0]=S[0],M[1]=S[1],M[2]=S[2];break;case"sofaCartesian":l(M,S);break;case"sofaSpherical":f(M,S);break;case"spat4Cartesian":g(M,S);break;case"spat4Spherical":x(M,S);break;default:throw new Error("Bad coordinate system")}return M}i.default={glToSofaCartesian:l,glToSofaSpherical:f,glToSpat4Cartesian:g,glToSpat4Spherical:x,glToSystem:G,sofaCartesianToGl:c,sofaCartesianToSofaSpherical:u,sofaSphericalToGl:d,sofaSphericalToSofaCartesian:h,sofaToSofaCartesian:p,spat4CartesianToGl:_,spat4CartesianToSpat4Spherical:v,spat4SphericalToGl:y,spat4SphericalToSpat4Cartesian:F,systemToGl:L,systemType:b}},{"./degree":14}],14:[function(t,n,i){Object.defineProperty(i,"__esModule",{value:!0}),i.toRadian=o,i.fromRadian=c,i.cos=l,i.sin=u,i.atan2=h;/**
 * @fileOverview Convert to and from degree
 * @author Jean-Philippe.Lambert@ircam.fr
 * @copyright 2015-2016 IRCAM, Paris, France
 * @license BSD-3-Clause
 */var s=i.toRadianFactor=Math.PI/180,a=i.fromRadianFactor=1/s;function o(d){return d*s}function c(d){return d*a}function l(d){return Math.cos(d*s)}function u(d){return Math.sin(d*s)}function h(d,f){return Math.atan2(d,f)*a}i.default={atan2:h,cos:l,fromRadian:c,fromRadianFactor:a,sin:u,toRadian:o,toRadianFactor:s}},{}],15:[function(t,n,i){Object.defineProperty(i,"__esModule",{value:!0}),i.ServerDataBase=i.HrtfSet=void 0;var s=t("./sofa/HrtfSet"),a=l(s),o=t("./sofa/ServerDataBase"),c=l(o);function l(u){return u&&u.__esModule?u:{default:u}}i.HrtfSet=a.default,i.ServerDataBase=c.default,i.default={HrtfSet:a.default,ServerDataBase:c.default}},{"./sofa/HrtfSet":17,"./sofa/ServerDataBase":18}],16:[function(t,n,i){Object.defineProperty(i,"__esModule",{value:!0}),i.version=i.name=i.license=i.description=void 0;var s=t("../package.json"),a=o(s);function o(d){return d&&d.__esModule?d:{default:d}}var c=a.default.description;/**
 * @fileOverview Information on the library, from the `package.json` file.
 *
 * @author Jean-Philippe.Lambert@ircam.fr
 * @copyright 2016 IRCAM, Paris, France
 * @license BSD-3-Clause
 */i.description=c;var l=a.default.license;i.license=l;var u=a.default.name;i.name=u;var h=a.default.version;i.version=h,i.default={description:c,license:l,name:u,version:h}},{"../package.json":10}],17:[function(t,n,i){Object.defineProperty(i,"__esModule",{value:!0}),i.HrtfSet=void 0;var s=function(){function L(G,M){for(var S=0;S<M.length;S++){var E=M[S];E.enumerable=E.enumerable||!1,E.configurable=!0,"value"in E&&(E.writable=!0),Object.defineProperty(G,E.key,E)}}return function(G,M,S){return M&&L(G.prototype,M),S&&L(G,S),G}}();/**
 * @fileOverview Container for HRTF set: load a set from an URL and get
 * filters from corresponding positions.
 *
 * @author Jean-Philippe.Lambert@ircam.fr
 * @copyright 2015-2016 IRCAM, Paris, France
 * @license BSD-3-Clause
 */var a=t("gl-matrix"),o=F(a),c=t("../info"),l=v(c),u=t("./parseDataSet"),h=t("./parseSofa"),d=t("../geometry/coordinates"),f=v(d),p=t("../geometry/KdTree"),_=v(p),g=t("../audio/utilities");function v(L){return L&&L.__esModule?L:{default:L}}function F(L){if(L&&L.__esModule)return L;var G={};if(L!=null)for(var M in L)Object.prototype.hasOwnProperty.call(L,M)&&(G[M]=L[M]);return G.default=L,G}function y(L){if(Array.isArray(L)){for(var G=0,M=Array(L.length);G<L.length;G++)M[G]=L[G];return M}else return Array.from(L)}function x(L,G){if(!(L instanceof G))throw new TypeError("Cannot call a class as a function")}var b=i.HrtfSet=function(){function L(){var G=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};x(this,L),this._audioContext=G.audioContext,this._ready=!1,this.coordinateSystem=G.coordinateSystem,this.filterCoordinateSystem=G.filterCoordinateSystem,this.filterPositions=G.filterPositions,this.filterAfterLoad=G.filterAfterLoad}return s(L,[{key:"applyFilterPositions",value:function(){var M=this,S=this._filterPositions.map(function(E){return M._kdt.nearest({x:E[0],y:E[1],z:E[2]},1).pop()[0]});S=[].concat(y(new Set(S))),this._kdt=_.default.tree.createKdTree(S,_.default.distanceSquared,["x","y","z"])}},{key:"load",value:function(M){var S=this,E=M.split(".").pop(),I=E==="sofa"?M+".json":M,q=void 0,Y=typeof this._filterPositions<"u"&&!this.filterAfterLoad&&E==="sofa";return Y?q=Promise.all([this._loadMetaAndPositions(M),this._loadDataSet(M)]).then(function(J){var de=J[0],fe=J[1];return S._loadSofaPartial(M,de,fe).then(function(){return S._ready=!0,S})}).catch(function(){return S._loadSofaFull(I).then(function(){return S.applyFilterPositions(),S._ready=!0,S})}):q=this._loadSofaFull(I).then(function(){return typeof S._filterPositions<"u"&&S.filterAfterLoad&&S.applyFilterPositions(),S._ready=!0,S}),q}},{key:"export",value:function(){var M=this,S=void 0,E=f.default.systemType(this.filterCoordinateSystem);switch(E){case"cartesian":S=this._sofaSourcePosition.map(function(q){return f.default.glToSofaCartesian([],q)});break;case"spherical":S=this._sofaSourcePosition.map(function(q){return f.default.glToSofaSpherical([],q)});break;default:throw new Error("Bad source position type "+E+" for export.")}var I=this._sofaSourcePosition.map(function(q){for(var Y=M._kdt.nearest({x:q[0],y:q[1],z:q[2]},1).pop()[0].fir,J=[],de=0;de<Y.numberOfChannels;++de)J.push([].concat(y(Y.getChannelData(de))));return J});return(0,h.stringifySofa)({name:this._sofaName,metaData:this._sofaMetaData,ListenerPosition:[0,0,0],ListenerPositionType:"cartesian",ListenerUp:[0,0,1],ListenerUpType:"cartesian",ListenerView:[1,0,0],ListenerViewType:"cartesian",SourcePositionType:E,SourcePosition:S,DataSamplingRate:this._audioContext.sampleRate,DataDelay:this._sofaDelay,DataIR:I,RoomVolume:this._sofaRoomVolume})}},{key:"nearest",value:function(M){var S=f.default.systemToGl([],M,this.coordinateSystem),E=this._kdt.nearest({x:S[0],y:S[1],z:S[2]},1).pop(),I=E[0];return f.default.glToSystem(S,[I.x,I.y,I.z],this.coordinateSystem),{distance:E[1],fir:I.fir,index:I.index,position:S}}},{key:"nearestFir",value:function(M){return this.nearest(M).fir}},{key:"_createKdTree",value:function(M){var S=this,E=M.map(function(I){var q=I[2],Y=S._audioContext.createBuffer(q.length,q[0].length,S._audioContext.sampleRate);return q.forEach(function(J,de){Y.getChannelData(de).set(J)}),{index:I[0],x:I[1][0],y:I[1][1],z:I[1][2],fir:Y}});return this._sofaSourcePosition=E.map(function(I){return[I.x,I.y,I.z]}),this._kdt=_.default.tree.createKdTree(E,_.default.distanceSquared,["x","y","z"]),this}},{key:"_generateIndicesPositionsFirs",value:function(M,S,E,I){var q=this,Y=E.map(function(J,de){var fe=J.length;if(fe!==2)throw new Error("Bad number of channels"+(" for IR index "+M[de])+(" ("+fe+" instead of 2)"));if(I[0].length!==2)throw new Error("Bad delay format"+(" for IR index "+M[de])+(" (first element in Data.Delay is "+I[0])+" instead of [[delayL, delayR]] )");var pe=typeof I[de]<"u"?I[de]:I[0],X=J.map(function(O,j){if(pe[j]<0)throw new Error("Negative delay detected (not handled at the moment):"+(" delay index "+M[de])+(" channel "+j));return(0,g.resampleFloat32Array)({inputSamples:O,inputDelay:pe[j],inputSampleRate:q._sofaSampleRate,outputSampleRate:q._audioContext.sampleRate})});return Promise.all(X).then(function(O){return[M[de],S[de],O]}).catch(function(O){throw new Error("Unable to re-sample impulse response "+de+". "+O.message)})});return Promise.all(Y)}},{key:"_loadDataSet",value:function(M){var S=new Promise(function(E,I){var q=M+".dds",Y=new window.XMLHttpRequest;Y.open("GET",q),Y.onerror=function(){I(new Error("Unable to GET "+q+", status "+Y.status+" "+(""+Y.responseText)))},Y.onload=function(){if(Y.status<200||Y.status>=300){Y.onerror();return}try{var J=(0,u.parseDataSet)(Y.response);E(J)}catch(de){I(new Error("Unable to parse "+q+". "+de.message))}},Y.send()});return S}},{key:"_loadMetaAndPositions",value:function(M){var S=this,E=new Promise(function(I,q){var Y=M+".json?ListenerPosition,ListenerUp,ListenerView,SourcePosition,Data.Delay,Data.SamplingRate,EmitterPosition,ReceiverPosition,RoomVolume",J=new window.XMLHttpRequest;J.open("GET",Y),J.onerror=function(){q(new Error("Unable to GET "+Y+", status "+J.status+" "+(""+J.responseText)))},J.onload=function(){if(J.status<200||J.status>=300){J.onerror();return}try{var de=(0,h.parseSofa)(J.response);S._setMetaData(de,M);var fe=S._sourcePositionsToGl(de),pe=fe.map(function(j,re){return{x:j[0],y:j[1],z:j[2],index:re}}),X=_.default.tree.createKdTree(pe,_.default.distanceSquared,["x","y","z"]),O=S._filterPositions.map(function(j){return X.nearest({x:j[0],y:j[1],z:j[2]},1).pop()[0].index});O=[].concat(y(new Set(O))),S._sofaUrl=M,I(O)}catch(j){q(new Error("Unable to parse "+Y+". "+j.message))}},J.send()});return E}},{key:"_loadSofaFull",value:function(M){var S=this,E=new Promise(function(I,q){var Y=new window.XMLHttpRequest;Y.open("GET",M),Y.onerror=function(){q(new Error("Unable to GET "+M+", status "+Y.status+" "+(""+Y.responseText)))},Y.onload=function(){if(Y.status<200||Y.status>=300){Y.onerror();return}try{var J=(0,h.parseSofa)(Y.response);S._setMetaData(J,M);var de=S._sourcePositionsToGl(J);S._generateIndicesPositionsFirs(de.map(function(fe,pe){return pe}),de,J["Data.IR"].data,J["Data.Delay"].data).then(function(fe){S._createKdTree(fe),S._sofaUrl=M,I(S)})}catch(fe){q(new Error("Unable to parse "+M+". "+fe.message))}},Y.send()});return E}},{key:"_loadSofaPartial",value:function(M,S,E){var I=this,q=S.map(function(Y){var J=new Promise(function(de,fe){var pe=M+".json?"+("SourcePosition["+Y+"][0:1:"+(E.SourcePosition.C-1)+"],")+("Data.IR["+Y+"][0:1:"+(E["Data.IR"].R-1)+"]")+("[0:1:"+(E["Data.IR"].N-1)+"]"),X=new window.XMLHttpRequest;X.open("GET",pe),X.onerror=function(){fe(new Error("Unable to GET "+pe+", status "+X.status+" "+(""+X.responseText)))},X.onload=function(){(X.status<200||X.status>=300)&&X.onerror();try{var O=(0,h.parseSofa)(X.response),j=I._sourcePositionsToGl(O);I._generateIndicesPositionsFirs([Y],j,O["Data.IR"].data,O["Data.Delay"].data).then(function(re){de(re[0])})}catch(re){fe(new Error("Unable to parse "+pe+". "+re.message))}},X.send()});return J});return Promise.all(q).then(function(Y){return I._createKdTree(Y),I})}},{key:"_setMetaData",value:function(M,S){if(typeof M.metaData.DataType<"u"&&M.metaData.DataType!=="FIR")throw new Error("According to meta-data, SOFA data type is not FIR");var E=new Date().toISOString();this._sofaName=typeof M.name<"u"?""+M.name:"HRTF.sofa",this._sofaMetaData=typeof M.metaData<"u"?M.metaData:{},typeof S<"u"&&(this._sofaMetaData.OriginalUrl=S),this._sofaMetaData.Converter="Ircam "+l.default.name+" "+l.default.version+" javascript API ",this._sofaMetaData.DateConverted=E,this._sofaSampleRate=typeof M["Data.SamplingRate"]<"u"?M["Data.SamplingRate"].data[0]:48e3,this._sofaSampleRate!==this._audioContext.sampleRate&&(this._sofaMetaData.OriginalSampleRate=this._sofaSampleRate),this._sofaDelay=typeof M["Data.Delay"]<"u"?M["Data.Delay"].data:[0,0],this._sofaRoomVolume=typeof M.RoomVolume<"u"?M.RoomVolume.data[0]:void 0;var I=f.default.sofaToSofaCartesian([],M.ListenerPosition.data[0],(0,h.conformSofaCoordinateSystem)(M.ListenerPosition.Type||"cartesian")),q=f.default.sofaToSofaCartesian([],M.ListenerView.data[0],(0,h.conformSofaCoordinateSystem)(M.ListenerView.Type||"cartesian")),Y=f.default.sofaToSofaCartesian([],M.ListenerUp.data[0],(0,h.conformSofaCoordinateSystem)(M.ListenerUp.Type||"cartesian"));this._sofaToGl=o.mat4.lookAt([],I,q,Y)}},{key:"_sourcePositionsToGl",value:function(M){var S=this,E=M.SourcePosition.data,I=typeof M.SourcePosition.Type<"u"?M.SourcePosition.Type:"spherical";switch(I){case"cartesian":E.forEach(function(q){o.vec3.transformMat4(q,q,S._sofaToGl)});break;case"spherical":E.forEach(function(q){f.default.sofaSphericalToSofaCartesian(q,q),o.vec3.transformMat4(q,q,S._sofaToGl)});break;default:throw new Error("Bad source position type")}return E}},{key:"coordinateSystem",set:function(M){this._coordinateSystem=typeof M<"u"?M:"gl"},get:function(){return this._coordinateSystem}},{key:"filterCoordinateSystem",set:function(M){this._filterCoordinateSystem=typeof M<"u"?M:this.coordinateSystem},get:function(){return this._filterCoordinateSystem}},{key:"filterPositions",set:function(M){if(typeof M>"u")this._filterPositions=void 0;else switch(this.filterCoordinateSystem){case"gl":this._filterPositions=M.map(function(S){return S.slice(0)});break;case"sofaCartesian":this._filterPositions=M.map(function(S){return f.default.sofaCartesianToGl([],S)});break;case"sofaSpherical":this._filterPositions=M.map(function(S){return f.default.sofaSphericalToGl([],S)});break;default:throw new Error("Bad filter coordinate system")}},get:function(){var M=void 0;if(typeof this._filterPositions<"u")switch(this.filterCoordinateSystem){case"gl":M=this._filterPositions.map(function(S){return S.slice(0)});break;case"sofaCartesian":M=this._filterPositions.map(function(S){return f.default.glToSofaCartesian([],S)});break;case"sofaSpherical":M=this._filterPositions.map(function(S){return f.default.glToSofaSpherical([],S)});break;default:throw new Error("Bad filter coordinate system")}return M}},{key:"filterAfterLoad",set:function(M){this._filterAfterLoad=typeof M<"u"?M:!1},get:function(){return this._filterAfterLoad}},{key:"isReady",get:function(){return this._ready}},{key:"sofaName",get:function(){return this._sofaName}},{key:"sofaUrl",get:function(){return this._sofaUrl}},{key:"sofaSampleRate",get:function(){return this._sofaSampleRate}},{key:"sofaMetaData",get:function(){return this._sofaMetaData}}]),L}();i.default=b},{"../audio/utilities":11,"../geometry/KdTree":12,"../geometry/coordinates":13,"../info":16,"./parseDataSet":19,"./parseSofa":20,"gl-matrix":8}],18:[function(t,n,i){Object.defineProperty(i,"__esModule",{value:!0}),i.ServerDataBase=void 0;var s=function(){function d(f,p){for(var _=0;_<p.length;_++){var g=p[_];g.enumerable=g.enumerable||!1,g.configurable=!0,"value"in g&&(g.writable=!0),Object.defineProperty(f,g.key,g)}}return function(f,p,_){return p&&d(f.prototype,p),_&&d(f,_),f}}();/**
 * @fileOverview Access a remote catalogue from a SOFA server, and get URLs
 * with filtering.
 *
 * @author Jean-Philippe.Lambert@ircam.fr
 * @copyright 2015-2016 IRCAM, Paris, France
 * @license BSD-3-Clause
 */var a=t("./parseXml"),o=l(a),c=t("./parseDataSet");function l(d){return d&&d.__esModule?d:{default:d}}function u(d,f){if(!(d instanceof f))throw new TypeError("Cannot call a class as a function")}var h=i.ServerDataBase=function(){function d(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(u(this,d),this._server=f.serverUrl,typeof this._server>"u"){var p=window.location.protocol==="https:"?"https:":"http:";this._server=p+"//bili2.ircam.fr"}this._catalogue={},this._urls=[]}return s(d,[{key:"loadCatalogue",value:function(){var p=this,_=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this._server+"/catalog.xml",g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this._catalogue,v=new Promise(function(F,y){var x=new window.XMLHttpRequest;x.open("GET",_),x.onerror=function(){y(new Error("Unable to GET "+_+", status "+x.status+" "+(""+x.responseText)))},x.onload=function(){if(x.status<200||x.status>=300){x.onerror();return}var b=(0,o.default)(x.response),L=b.querySelector("dataset"),G=b.querySelectorAll("dataset > catalogRef");if(G.length===0){g.urls=[];for(var M=b.querySelectorAll("dataset > dataset"),S=0;S<M.length;++S){var E=p._server+L.getAttribute("name")+"/"+M[S].getAttribute("name");p._urls.push(E),g.urls.push(E)}F(_)}else{for(var I=[],q=0;q<G.length;++q){var Y=G[q].getAttribute("name"),J=p._server+L.getAttribute("name")+"/"+G[q].getAttribute("xlink:href");g[Y]={},I.push(p.loadCatalogue(J,g[Y]))}Promise.all(I).then(function(){p._urls.sort(),F(_)}).catch(function(de){y(de)})}},x.send()});return v}},{key:"getUrls",value:function(){var p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},_=[p.convention,p.dataBase,p.equalisation,p.sampleRate,p.sosOrder],g=typeof p.freePattern=="number"?p.freePattern.toString():p.freePattern,v=_.reduce(function(b,L){return b+"/"+(typeof L<"u"?"[^/]*(?:"+L+")[^/]*":"[^/]*")},""),F=new RegExp(v,"i"),y=this._urls.filter(function(b){return F.test(b)});if(typeof g<"u"){var x=g.split(/\s+/);x.forEach(function(b){F=new RegExp(b,"i"),y=y.filter(function(L){return F.test(L)})})}return y}},{key:"getDataSetDefinitions",value:function(p){var _=new Promise(function(g,v){var F=p+".dds",y=new window.XMLHttpRequest;y.open("GET",F),y.onerror=function(){v(new Error("Unable to GET "+F+", status "+y.status+" "+(""+y.responseText)))},y.onload=function(){if(y.status<200||y.status>=300){y.onerror();return}g((0,c.parseDataSet)(y.response))},y.send()});return _}},{key:"getSourcePositions",value:function(p){var _=new Promise(function(g,v){var F=p+".json?SourcePosition",y=new window.XMLHttpRequest;y.open("GET",F),y.onerror=function(){v(new Error("Unable to GET "+F+", status "+y.status+" "+(""+y.responseText)))},y.onload=function(){if(y.status<200||y.status>=300){y.onerror();return}try{var x=JSON.parse(y.response);if(x.leaves[0].name!=="SourcePosition")throw new Error("SourcePosition not found");g(x.leaves[0].data)}catch(b){v(new Error("Unable to parse response from "+F+". "+b.message))}},y.send()});return _}}]),d}();i.default=h},{"./parseDataSet":19,"./parseXml":21}],19:[function(t,n,i){Object.defineProperty(i,"__esModule",{value:!0}),i._parseDimension=f,i._parseDefinition=p,i.parseDataSet=_;/**
 * @fileOverview Parser for DDS files
 * @author Jean-Philippe.Lambert@ircam.fr
 * @copyright 2015-2016 IRCAM, Paris, France
 * @license BSD-3-Clause
 */var s="\\[\\s*(\\w+)\\s*=\\s*(\\d+)\\s*\\]",a=new RegExp(s,"g"),o=new RegExp(s),c="\\s*(\\w+)\\s*([\\w.]+)\\s*((?:\\[[^\\]]+\\]\\s*)+);\\s*",l=new RegExp(c,"g"),u=new RegExp(c),h="\\s*Dataset\\s*\\{\\s*((?:[^;]+;\\s*)*)\\s*\\}\\s*[\\w.]+\\s*;\\s*",d=new RegExp(h);function f(g){var v=[],F=g.match(a);return F!==null&&F.forEach(function(y){var x=o.exec(y);x!==null&&x.length>2&&v.push([x[1],Number(x[2])])}),v}function p(g){var v=[],F=g.match(l);return F!==null&&F.forEach(function(y){var x=u.exec(y);if(x!==null&&x.length>3){var b=[];b[0]=x[2],b[1]={},b[1].type=x[1],f(x[3]).forEach(function(L){b[1][L[0]]=L[1]}),v.push(b)}}),v}function _(g){var v={},F=d.exec(g);return F!==null&&F.length>1&&p(F[1]).forEach(function(y){v[y[0]]=y[1]}),v}i.default=_},{}],20:[function(t,n,i){Object.defineProperty(i,"__esModule",{value:!0}),i.parseSofa=s,i.stringifySofa=a,i.conformSofaCoordinateSystem=o;/**
 * @fileOverview Parser functions for SOFA files
 * @author Jean-Philippe.Lambert@ircam.fr
 * @copyright 2015 IRCAM, Paris, France
 * @license BSD-3-Clause
 */function s(c){try{var l=JSON.parse(c),u={};if(u.name=l.name,typeof l.attributes<"u"){u.metaData={};var h=l.attributes.find(function(f){return f.name==="NC_GLOBAL"});typeof h<"u"&&h.attributes.forEach(function(f){u.metaData[f.name]=f.value[0]})}if(typeof l.leaves<"u"){var d=l.leaves;d.forEach(function(f){u[f.name]={},f.attributes.forEach(function(p){u[f.name][p.name]=p.value[0]}),u[f.name].shape=f.shape,u[f.name].data=f.data})}return u}catch(f){throw new Error("Unable to parse SOFA string. "+f.message)}}function a(c){var l={};if(typeof c.name<"u"&&(l.name=c.name),typeof c.metaData<"u"){l.attributes=[];var u={name:"NC_GLOBAL",attributes:[]};for(var h in c.metaData)c.metaData.hasOwnProperty(h)&&u.attributes.push({name:h,value:[c.metaData[h]]});l.attributes.push(u)}var d="Float64",f=void 0;if(l.leaves=[],[["ListenerPosition","ListenerPositionType"],["ListenerUp","ListenerUpType"],["ListenerView","ListenerViewType"]].forEach(function(p){var _=p[0],g=c[_],v=c[p[1]];if(typeof g<"u"){switch(v){case"cartesian":f=[{name:"Type",value:["cartesian"]},{name:"Units",value:["metre, metre, metre"]}];break;case"spherical":f=[{name:"Type",value:["spherical"]},{name:"Units",value:["degree, degree, metre"]}];break;default:throw new Error("Unknown coordinate system type "+(v+" for "+g))}l.leaves.push({name:_,type:d,attributes:f,shape:[1,3],data:[g]})}}),typeof c.SourcePosition<"u"){switch(c.SourcePositionType){case"cartesian":f=[{name:"Type",value:["cartesian"]},{name:"Units",value:["metre, metre, metre"]}];break;case"spherical":f=[{name:"Type",value:["spherical"]},{name:"Units",value:["degree, degree, metre"]}];break;default:throw new Error("Unknown coordinate system type "+(""+c.SourcePositionType))}l.leaves.push({name:"SourcePosition",type:d,attributes:f,shape:[c.SourcePosition.length,c.SourcePosition[0].length],data:c.SourcePosition})}if(typeof c.DataSamplingRate<"u")l.leaves.push({name:"Data.SamplingRate",type:d,attributes:[{name:"Unit",value:"hertz"}],shape:[1],data:[c.DataSamplingRate]});else throw new Error("No data sampling-rate");if(typeof c.DataDelay<"u"&&l.leaves.push({name:"Data.Delay",type:d,attributes:[],shape:[1,c.DataDelay.length],data:c.DataDelay}),typeof c.DataIR<"u")l.leaves.push({name:"Data.IR",type:d,attributes:[],shape:[c.DataIR.length,c.DataIR[0].length,c.DataIR[0][0].length],data:c.DataIR});else throw new Error("No data IR");return typeof c.RoomVolume<"u"&&l.leaves.push({name:"RoomVolume",type:d,attributes:[{name:"Units",value:["cubic metre"]}],shape:[1],data:[c.RoomVolume]}),l.nodes=[],JSON.stringify(l)}function o(c){var l=void 0;switch(c){case"cartesian":l="sofaCartesian";break;case"spherical":l="sofaSpherical";break;default:throw new Error("Bad SOFA type "+c)}return l}i.default={parseSofa:s,conformSofaCoordinateSystem:o}},{}],21:[function(t,n,i){Object.defineProperty(i,"__esModule",{value:!0});/**
 * @fileOverview Simple XML parser, as a DOM parser.
 * @author Jean-Philippe.Lambert@ircam.fr
 * @copyright 2015-2016 IRCAM, Paris, France
 * @license BSD-3-Clause
 */var s=i.parseXml=void 0;if(typeof window.DOMParser<"u")i.parseXml=s=function(o){return new window.DOMParser().parseFromString(o,"text/xml")};else if(typeof window.ActiveXObject<"u"&&new window.ActiveXObject("Microsoft.XMLDOM"))i.parseXml=s=function(o){var c=new window.ActiveXObject("Microsoft.XMLDOM");return c.async="false",c.loadXML(o),c};else throw new Error("No XML parser found");i.default=s},{}]},{},[15])(15)})})(serveSofaHrir$1);var serveSofaHrirExports=serveSofaHrir$1.exports;Object.defineProperty(hrirLoader_ircam,"__esModule",{value:!0});var _classCallCheck2$1=classCallCheck,_classCallCheck3$1=_interopRequireDefault$1(_classCallCheck2$1),_createClass2=createClass,_createClass3=_interopRequireDefault$1(_createClass2),_serveSofaHrir=serveSofaHrirExports,serveSofaHrir=_interopRequireWildcard(_serveSofaHrir);function _interopRequireWildcard(r){if(r&&r.__esModule)return r;var e={};if(r!=null)for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t]);return e.default=r,e}function _interopRequireDefault$1(r){return r&&r.__esModule?r:{default:r}}var utils=utils$6,HRIRloader_ircam=function(){function r(e,t,n){(0,_classCallCheck3$1.default)(this,r),this.context=e,this.order=t,this.nCh=(t+1)*(t+1),this.onLoad=n,this.hrtfSet=new serveSofaHrir.HrtfSet({audioContext:this.context,coordinateSystem:"sofaSpherical"}),this.wishedSpeakerPos=utils.getTdesign(2*this.order)}return(0,_createClass3.default)(r,[{key:"load",value:function(t){var n=this;this.hrtfSet.load(t).then(function(){var i=[];n.hrirBuffer=[];for(var s=0;s<n.wishedSpeakerPos.length;s++)i.push(n.hrtfSet.nearest(n.wishedSpeakerPos[s]).position),n.hrirBuffer.push(n.hrtfSet.nearest(n.wishedSpeakerPos[s]).fir);for(var a=0,o=0;o<n.wishedSpeakerPos.length;o++)n.wishedSpeakerPos[o][0]<0&&(n.wishedSpeakerPos[o][0]+=360),a+=Math.sqrt(Math.pow(n.wishedSpeakerPos[o][0]-i[o][0],2)+Math.pow(n.wishedSpeakerPos[o][1]-i[o][1],2));console.log("summed / average angular dist between asked and present pos:",Math.round(a*100)/100,"deg /",Math.round(a/n.wishedSpeakerPos.length*100)/100,"deg"),n.decodingMatrix=utils.getAmbisonicDecMtx(i,n.order),n.hoaBuffer=n.getHoaFilterFromHrirFilter(),n.onLoad(n.hoaBuffer)})}},{key:"getHoaFilterFromHrirFilter",value:function(){for(var t=this.hrirBuffer[0].length,n=this.hrirBuffer[0].sampleRate,i=this.context.createBuffer(this.nCh,t,n),s=0;s<this.nCh;s++){for(var a=new Float32Array(t),o=0;o<this.hrirBuffer.length;o++)for(var c=0;c<t;c++)a[c]+=this.decodingMatrix[o][s]*this.hrirBuffer[o].getChannelData(0)[c];i.getChannelData(s).set(a)}return i}}]),r}();hrirLoader_ircam.default=HRIRloader_ircam;var ambiConverters={};Object.defineProperty(ambiConverters,"__esModule",{value:!0});ambiConverters.fuma2acn=ambiConverters.n3d2sn3d=ambiConverters.sn3d2n3d=ambiConverters.acn2wxyz=ambiConverters.wxyz2acn=void 0;var _classCallCheck2=classCallCheck,_classCallCheck3=_interopRequireDefault(_classCallCheck2);function _interopRequireDefault(r){return r&&r.__esModule?r:{default:r}}ambiConverters.wxyz2acn=function r(e){(0,_classCallCheck3.default)(this,r),this.ctx=e,this.in=this.ctx.createChannelSplitter(4),this.out=this.ctx.createChannelMerger(4),this.gains=new Array(4);for(var t=0;t<4;t++)this.gains[t]=this.ctx.createGain(),t==0?this.gains[t].gain.value=Math.SQRT2:this.gains[t].gain.value=Math.sqrt(3),this.gains[t].connect(this.out,0,t);this.in.connect(this.gains[0],0,0),this.in.connect(this.gains[3],1,0),this.in.connect(this.gains[1],2,0),this.in.connect(this.gains[2],3,0)};ambiConverters.acn2wxyz=function r(e){(0,_classCallCheck3.default)(this,r),this.ctx=e,this.in=this.ctx.createChannelSplitter(4),this.out=this.ctx.createChannelMerger(4),this.gains=new Array(4);for(var t=0;t<4;t++)this.gains[t]=this.ctx.createGain(),t==0?this.gains[t].gain.value=Math.SQRT1_2:this.gains[t].gain.value=1/Math.sqrt(3),this.gains[t].connect(this.out,0,t);this.in.connect(this.gains[0],0,0),this.in.connect(this.gains[2],1,0),this.in.connect(this.gains[3],2,0),this.in.connect(this.gains[1],3,0)};ambiConverters.sn3d2n3d=function r(e,t){(0,_classCallCheck3.default)(this,r),this.ctx=e,this.order=t,this.nCh=(t+1)*(t+1),this.in=this.ctx.createChannelSplitter(this.nCh),this.out=this.ctx.createChannelMerger(this.nCh),this.gains=new Array(this.nCh);for(var n=0;n<this.nCh;n++){var i=Math.floor(Math.sqrt(n));this.gains[n]=this.ctx.createGain(),this.gains[n].gain.value=Math.sqrt(2*i+1),this.in.connect(this.gains[n],n,0),this.gains[n].connect(this.out,0,n)}};ambiConverters.n3d2sn3d=function r(e,t){(0,_classCallCheck3.default)(this,r),this.ctx=e,this.order=t,this.nCh=(t+1)*(t+1),this.in=this.ctx.createChannelSplitter(this.nCh),this.out=this.ctx.createChannelMerger(this.nCh),this.gains=new Array(this.nCh);for(var n=0;n<this.nCh;n++){var i=Math.floor(Math.sqrt(n));this.gains[n]=this.ctx.createGain(),this.gains[n].gain.value=1/Math.sqrt(2*i+1),this.in.connect(this.gains[n],n,0),this.gains[n].connect(this.out,0,n)}};ambiConverters.fuma2acn=function r(e,t){(0,_classCallCheck3.default)(this,r),t>3&&(console.log("FuMa specifiction is supported up to 3rd order"),t=3);var n=[Math.sqrt(2),Math.sqrt(3),Math.sqrt(3),Math.sqrt(3),Math.sqrt(15)/2,Math.sqrt(15)/2,Math.sqrt(5),Math.sqrt(15)/2,Math.sqrt(15)/2,Math.sqrt(35/8),Math.sqrt(35)/3,Math.sqrt(224/45),Math.sqrt(7),Math.sqrt(224/45),Math.sqrt(35)/3,Math.sqrt(35/8)];if(this.ctx=e,this.order=t,this.nCh=(t+1)*(t+1),this.in=this.ctx.createChannelSplitter(this.nCh),this.out=this.ctx.createChannelMerger(this.nCh),this.gains=[],this.remapArray=[],this.remapArray.push(0,2,3,1),t>1){for(var i=0,s,a=0;a<this.nCh;a++)if(s=[],a>=(i+1)*(i+1)){i+=1;for(var o=(i+1)*(i+1);o<(i+2)*(i+2);o++)(o+i%2)%2==0?s.push(o):s.unshift(o);this.remapArray=this.remapArray.concat(s)}}for(var a=0;a<this.nCh;a++)this.gains[a]=this.ctx.createGain(),this.gains[a].gain.value=n[a],this.in.connect(this.gains[a],this.remapArray[a],0),this.gains[a].connect(this.out,0,a)};(function(r){Object.defineProperty(r,"__esModule",{value:!0}),r.utils=r.converters=r.HRIRloader_ircam=r.HRIRloader2D_local=r.HRIRloader_local=r.HOAloader=r.intensityAnalyser2D=r.intensityAnalyser=r.powermapAnalyser=r.rmsAnalyser=r.virtualMic=r.convolver=r.decoder=r.binDecoder2D=r.binDecoder=r.sceneMirror2D=r.sceneMirror=r.sceneRotator2D=r.sceneRotator=r.orderWeight=r.orderLimiter2D=r.orderLimiter=r.monoEncoder2D=r.monoEncoder=void 0;var e=ambiMonoEncoder;Object.defineProperty(r,"monoEncoder",{enumerable:!0,get:function(){return q(e).default}});var t=ambiMonoEncoder2D;Object.defineProperty(r,"monoEncoder2D",{enumerable:!0,get:function(){return q(t).default}});var n=ambiOrderLimiter;Object.defineProperty(r,"orderLimiter",{enumerable:!0,get:function(){return q(n).default}});var i=ambiOrderLimiter2D;Object.defineProperty(r,"orderLimiter2D",{enumerable:!0,get:function(){return q(i).default}});var s=ambiOrderWeight;Object.defineProperty(r,"orderWeight",{enumerable:!0,get:function(){return q(s).default}});var a=ambiSceneRotator;Object.defineProperty(r,"sceneRotator",{enumerable:!0,get:function(){return q(a).default}});var o=ambiSceneRotator2D;Object.defineProperty(r,"sceneRotator2D",{enumerable:!0,get:function(){return q(o).default}});var c=ambiSceneMirror;Object.defineProperty(r,"sceneMirror",{enumerable:!0,get:function(){return q(c).default}});var l=ambiSceneMirror2D;Object.defineProperty(r,"sceneMirror2D",{enumerable:!0,get:function(){return q(l).default}});var u=ambiBinauralDecoder;Object.defineProperty(r,"binDecoder",{enumerable:!0,get:function(){return q(u).default}});var h=ambiBinauralDecoder2D;Object.defineProperty(r,"binDecoder2D",{enumerable:!0,get:function(){return q(h).default}});var d=ambiDecoder;Object.defineProperty(r,"decoder",{enumerable:!0,get:function(){return q(d).default}});var f=ambiConvolver;Object.defineProperty(r,"convolver",{enumerable:!0,get:function(){return q(f).default}});var p=ambiVirtualMic;Object.defineProperty(r,"virtualMic",{enumerable:!0,get:function(){return q(p).default}});var _=ambiRmsAnalyser;Object.defineProperty(r,"rmsAnalyser",{enumerable:!0,get:function(){return q(_).default}});var g=ambiPowermapAnalyser;Object.defineProperty(r,"powermapAnalyser",{enumerable:!0,get:function(){return q(g).default}});var v=ambiIntensityAnalyser;Object.defineProperty(r,"intensityAnalyser",{enumerable:!0,get:function(){return q(v).default}});var F=ambiIntensityAnalyser2D;Object.defineProperty(r,"intensityAnalyser2D",{enumerable:!0,get:function(){return q(F).default}});var y=hoaLoader;Object.defineProperty(r,"HOAloader",{enumerable:!0,get:function(){return q(y).default}});var x=hrirLoader_local;Object.defineProperty(r,"HRIRloader_local",{enumerable:!0,get:function(){return q(x).default}});var b=hrirLoader2D_local;Object.defineProperty(r,"HRIRloader2D_local",{enumerable:!0,get:function(){return q(b).default}});var L=hrirLoader_ircam;Object.defineProperty(r,"HRIRloader_ircam",{enumerable:!0,get:function(){return q(L).default}});var G=ambiConverters,M=I(G),S=utils$6,E=I(S);function I(Y){if(Y&&Y.__esModule)return Y;var J={};if(Y!=null)for(var de in Y)Object.prototype.hasOwnProperty.call(Y,de)&&(J[de]=Y[de]);return J.default=Y,J}function q(Y){return Y&&Y.__esModule?Y:{default:Y}}r.converters=M,r.utils=E})(dist);const sizes={width:window.innerWidth,height:window.innerHeight},listenerPositions=[new Vector3(0,0,0),new Vector3(0,0,-3),new Vector3(0,0,-6),new Vector3(0,0,-9),new Vector3(0,0,-12)],audioPositions=[new Vector3(-1,0,-4),new Vector3(1,0,-7),new Vector3(-1,0,-7),new Vector3(-1,0,-3)],desktopDescriptions=["This is AllEars, a playable introduction to screenreader-accessible immersive audio on the web.  You can navigate through the experience using the tab key, just like any other accessible website.  Each 3D position is mapped to an HTML list item. If you’ve never used a screen reader before, I challenge you to turn it on, close your eyes, and find out if you can navigate the 3D space.","To look around, use the left and right arrow keys, and spacebar to move forward. You can optionally use the mouse and mouse click to look around, but that tends to be more difficult if your eyes are closed.","This experience i ncorporates a standard 3D virtual space and spatial audio you might incounter in video games, virtual reality, or other kinds of simulations.  To move forward, press spacebar, or hold a single click.","This special kind of spatial audio, however, is called ambisonics, and it allows you to experience * an entire soundfield * without reference to objects in 3D space. All spatial information is contained within the audio file itself, and you need a special player called a binaural decoder to perceive that information. A helpful metaphor, I find, is thinking of it like listening to the sky, since it’s a spherical audio format.","To change settings, navigate to the menu with the escape key.  If you’re using a screenreader, the menu is just after this position. There you can learn more about this project, change control preferences, or connect a game controller."],mobileDescriptions=[" This is AllEars, a playable introduction to screenreader-accessible immersive audio on the web.  If you’re using a screenreader, you can navigate through the experience by swiping left or right, just like any other accessible website.   Each 3D position is mapped to an HTML list item. Otherwise, you can teleport to the next position with a double tap on the top half of the screen.  If you’ve never used a screen reader before, I challenge you to turn it on, close your eyes, and find out if you can navigate the 3D space.","To look around, use a one-finger drag on the top half of the screen. This will also work if you have Direct Touch enabled on iOS.  If you’re using Talkback on Android, a two-finger drag would be the equivalent.","This experience incorporates the standard 3D virtual space you might incounter in video games, virtual reality, or other kinds of simulations.  To move forward, with a single finger, press and hold in the lower half of the screen.  If you’re using Talkback on Android, use a two-finger hold.","This special kind of spatial audio, however, is called ambisonics, and it allows you to experience * an entire soundfield * without reference to objects in 3D space.  * All spatial information is contained within the audio file itself, and you need a special player called a binaural decoder to perceive that information. A helpful metaphor, I find, is thinking of it like listening to the sky, since it’s a spherical audio format.","To change settings, navigate to the menu with a double tap on the bottom half of the screen.  If you’re using a screenreader, the menu is just after this position. There you can learn more about this project, change control preferences, or connect a game controller."];var volumeFragment_default=`varying vec2 vUv;
uniform float volume;

  void main()
  { 

    gl_FragColor = vec4(vec3(1.-volume), 1.0);
  }`,volumeVertex_default=`varying vec2 vUv;

void main()
{   
    vUv = uv;
    gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
}`;const handler={set:function(r,e,t){return r[e]=t,!0}},state=new Proxy({mode:"tab",slide:"welcome",positionIndex:0,mobile:!1,box:-1,ambisonics:null,needsUpdate:!1,pausedAt:0,isPlaying:!1,preferences:{controls:"",joystick:"",sensitivity:.5}},handler);let scene,camera,renderer,canvas,sound,gamepadControls,sounds=[],playerBounds={min:new Vector3(-2,-.5,-15),max:new Vector3(2,2,1)},boxGroup,mirror,decoder,analyser,gainOut,encoder,convolver,converter,rotator,context,soundBuffer;const maxOrder=1,soundUrl="./sounds/sample2.wav",irUrl="./IRs/ambisonic2binaural_filters/aalto2016_N1.wav",ambiIrUrl="./IRs/ambisonicRIRs/room_1_bf.wav";function initScene(){scene=new Scene,camera=new PerspectiveCamera(75,sizes.width/sizes.height,.1,100),camera.position.set(0,0,0),scene.add(camera),canvas=document.querySelector("canvas.webgl"),boxGroup=new Group;const r=new AudioListener;camera.add(r),initScene.mouseControls=new MouseOnlyControls(camera,document.body),initScene.keyboardControls=new KeyboardAccessControls(camera,document.body),initScene.touchControls=new TouchAccessControls(camera,document.body),gamepadControls=new GamepadAccessControls(camera),renderer=new WebGLRenderer({canvas,antialias:!0}),renderer.setSize(sizes.width,sizes.height),renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),initScene.initAmbisonics=b=>{var L=window.AudioContext||window.webkitAudioContext;context=new L,context.onstatechange=function(){context.state==="suspended"&&context.resume()},F.load(soundUrl,e,void 0,i),F.load(irUrl,t,void 0,i),F.load(ambiIrUrl,n,void 0,i),encoder=new dist.monoEncoder(context,1),console.log(encoder),convolver=new dist.convolver(context,maxOrder),console.log(convolver),converter=new dist.converters.wxyz2acn(context),console.log(converter),rotator=new dist.sceneRotator(context,maxOrder),console.log(rotator),mirror=new dist.sceneMirror(context,1),console.log(mirror),decoder=new dist.binDecoder(context,1),console.log(decoder),analyser=new dist.intensityAnalyser(context),console.log(analyser),gainOut=context.createGain(),convolver.out.connect(converter.in),converter.out.connect(mirror.in),mirror.out.connect(analyser.in),mirror.out.connect(rotator.in),rotator.out.connect(decoder.in),decoder.out.connect(gainOut),gainOut.connect(context.destination)},initScene.createAndStartBuffer=()=>{var b=state.pausedAt;sound=context.createBufferSource(),sound.buffer=soundBuffer,sound.loop=!0,sound.connect(convolver.in),console.log(sound),sound.start(0,b),sound.isPlaying=!0,state.playStart=context.currentTime-b,state.pausedAt=0},initScene.pauseBuffer=()=>{sound.isPlaying=!1;var b=context.currentTime-state.playStart;sound.stop(),state.pausedAt=b,document.getElementById("play").disabled=!1};var e=function(b){soundBuffer=b,state.ambisonics="loaded"},t=function(b){decoder.updateFilters(b)},n=function(b){convolver.updateFilters(b)};function i(b){alert(`Browser cannot decode audio data...

Error: `+b+`

(If you re using Safari and get a null error, this is most likely due to Apple's shady plan going on to stop the .ogg format from easing web developer's life :)`)}const s=document.querySelector("#play");setTimeout(()=>{s.innerHTML="Play",s.addEventListener("click",_)},500),initScene.sceneListElement=document.querySelector("#scene-list");let a=new PlaneGeometry(1,1,4,4);const o=new TextureLoader;let c=new BoxGeometry(1,1,1),l=new MeshStandardMaterial({color:new Color(3342421),side:DoubleSide}),u=new Mesh(c,l);u.position.set(0,playerBounds.min.y,(playerBounds.min.z-playerBounds.max.z)/2+playerBounds.max.z),u.scale.set(playerBounds.max.x-playerBounds.min.x,.01,playerBounds.max.z-playerBounds.min.z),scene.add(u);let h=new Mesh(c,l);h.position.set(playerBounds.min.x,(playerBounds.max.y-playerBounds.min.y)/2+playerBounds.min.y,(playerBounds.min.z-playerBounds.max.z)/2+playerBounds.max.z),h.scale.set(.01,playerBounds.max.y-playerBounds.min.y,playerBounds.max.z-playerBounds.min.z),scene.add(h);let d=new Mesh(c,l);d.position.set(playerBounds.max.x,(playerBounds.max.y-playerBounds.min.y)/2+playerBounds.min.y,(playerBounds.min.z-playerBounds.max.z)/2+playerBounds.max.z),d.scale.set(.01,playerBounds.max.y-playerBounds.min.y,playerBounds.max.z-playerBounds.min.z),scene.add(d);let f=new Mesh(c,l);f.position.set((playerBounds.max.x-playerBounds.min.x)/2+playerBounds.min.x,(playerBounds.max.y-playerBounds.min.y)/2+playerBounds.min.y,playerBounds.min.z),f.scale.set(playerBounds.max.x-playerBounds.min.x,playerBounds.max.y-playerBounds.min.y,.01),scene.add(f);let p=new Mesh(c,l);p.position.set((playerBounds.max.x-playerBounds.min.x)/2+playerBounds.min.x,(playerBounds.max.y-playerBounds.min.y)/2+playerBounds.min.y,playerBounds.max.z),p.scale.set(playerBounds.max.x-playerBounds.min.x,playerBounds.max.y-playerBounds.min.y,.01),scene.add(p),listenerPositions.map((b,L)=>{const G=document.createElement("li");G.tabIndex=0,G.setAttribute("data-index",L),G.role="button",G.addEventListener("focus",J=>{state.positionIndex!=-1&&v(L),state.positionIndex=L}),state.mobile?G.innerHTML="Position "+L+mobileDescriptions[L]:G.innerHTML=desktopDescriptions[L],initScene.sceneListElement.appendChild(G);const M=new BoxGeometry(2,2,2.1),S=new MeshBasicMaterial({color:new Color(`rgb(${Math.random()*255}, 255, 255)`),transparent:!0,opacity:.3,side:DoubleSide}),E=new Mesh(M,S);E.geometry.computeBoundingBox(),E.position.set(b.x,b.y+.5,b.z),boxGroup.add(E);const I=o.load(`./textures/allears${L}.png`);I.wrapS=RepeatWrapping,I.wrapT=RepeatWrapping,I.repeat.set(1,1);let q=new MeshBasicMaterial({map:I,side:DoubleSide}),Y=new Mesh(a,q);Y.position.set(b.x,b.y,b.z-1),scene.add(Y)}),scene.add(boxGroup);const _=()=>{state.mobile||(console.log("locking"),initScene.mouseControls.lock()),document.querySelector("#scene").style.display="none",document.querySelector("#scene-list").style.display="block",sounds.length<1&&audioPositions.map((b,L)=>{const G=new PositionalAudio(r);sounds.push(G),new AudioAnalyser(G);const M=new SphereGeometry(10,32,16),S=new ShaderMaterial({vertexShader:volumeVertex_default,fragmentShader:volumeFragment_default,uniforms:{volume:{value:0}},transparent:!0,side:FrontSide}),E=new Mesh(M,S);E.position.set(b.x,b.y,b.z),E.scale.set(.02,.02,.02),scene.add(E);const I=document.getElementById(`sample${L}`);G.setMediaElementSource(I),G.setRefDistance(.5),E.add(G)})};window.addEventListener("keydown",b=>{b.code==="Escape"&&g()});const g=()=>{document.dispatchEvent(new Event("menu"))},v=b=>{camera.position.copy(listenerPositions[b])},F=new AudioLoader,y=new DirectionalLight(16777215,3);y.position.set(0,.5,1).normalize(),scene.add(y);const x=new AmbientLight(16777215,1);scene.add(x)}const renderScene=()=>{state.mobile?(initScene.keyboardControls.update(),initScene.touchControls.update()):(initScene.mouseControls.update(),initScene.keyboardControls.update(),gamepadControls.update()),camera.position.x<playerBounds.min.x&&(camera.position.x=playerBounds.min.x),camera.position.x>playerBounds.max.x&&(camera.position.x=playerBounds.max.x),camera.position.z<playerBounds.min.z&&(camera.position.z=playerBounds.min.z),camera.position.z>playerBounds.max.z&&(camera.position.z=playerBounds.max.z),state.box=-1,boxGroup.children.map((e,t)=>{const n=new Box3;n.copy(e.geometry.boundingBox).applyMatrix4(e.matrixWorld),n.containsPoint(camera.position)&&(state.box=t)}),state.positionIndex!=state.box&&(console.log("mismatch",state.positionIndex,state.box),state.positionIndex==0&&state.box==4||(state.box==-1?(sounds.map((e,t)=>{audioPositions.map((n,i)=>{document.getElementById(`sample${i}`).play()})}),state.positionIndex=-1):(audioPositions.map((t,n)=>{document.getElementById(`sample${n}`).pause()}),initScene.sceneListElement.querySelector(`li[data-index="${state.box}"]`).focus())),state.positionIndex=state.box),state.positionIndex==3?(state.ambisonics==null&&(initScene.initAmbisonics(),state.ambisonics="loading"),state.ambisonics=="loading"&&console.log("loading"),state.ambisonics=="loaded"&&(initScene.createAndStartBuffer(),state.ambisonics="playing"),state.ambisonics=="paused"&&(initScene.createAndStartBuffer(),state.ambisonics="playing")):state.ambisonics=="playing"&&(initScene.pauseBuffer(),state.ambisonics="paused");let r=new Euler(0,0,0,"YXZ");rotator&&(r.setFromQuaternion(camera.quaternion),rotator.yaw=r.y*180/Math.PI,rotator.pitch=r.x*180/Math.PI,rotator.updateRotMtx()),renderer.render(scene,camera),window.requestAnimationFrame(renderScene)},enterButton=document.querySelector("#enter-button"),infoButton=document.querySelector("#info-button"),continueButton=document.querySelector("#continue-button"),backButton=document.querySelector("#back"),playButton=document.querySelector("#play"),menu=document.querySelector("#menu"),menuResumeButton=document.querySelector("#menu-resume"),menuSettingsButton=document.querySelector("#menu-settings"),menuInfoButton=document.querySelector("#menu-info"),settingsBack=document.querySelector("#settings-back");window.mobileCheck=function(){let r=!1;return function(e){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(r=!0)}(navigator.userAgent||navigator.vendor||window.opera),r};state.mobile=window.mobileCheck();const changeSlide=r=>{document.querySelector(`#${state.slide}`).style.display="none",state.slide=r,document.querySelector(`#${state.slide}`).style.display="flex"},enterScene=()=>{changeSlide("scene"),state.inScene=!0,playButton.addEventListener("click",()=>{renderScene(),menu.style.display="flex"}),document.addEventListener("menu",()=>{menu.focus()})};enterButton.addEventListener("click",()=>{initScene(),changeSlide("headphones")});infoButton.addEventListener("click",()=>{changeSlide("info")});backButton.addEventListener("click",()=>{state.inScene?(changeSlide("menu"),menu.focus(),document.querySelector("#scene-list").style.display="block"):changeSlide("welcome")});continueButton.addEventListener("click",enterScene);menuResumeButton.addEventListener("click",()=>{menu.classList.remove("slide"),menu.classList.add("screenreader"),state.mobile||initScene.mouseControls.lock(),document.querySelector(`li[data-index='${state.positionIndex}']`).focus()});menu.addEventListener("focusin",()=>{console.log(state.positionIndex);let r=document.getElementById(`sample${state.positionIndex}`);r!=null&&!r.paused&&r.pause(),menu.classList.remove("screenreader"),menu.classList.add("slide"),changeSlide("menu")});menu.addEventListener("focusout",()=>{menu.classList.remove("slide"),menu.classList.add("screenreader")});menuSettingsButton.addEventListener("click",()=>{changeSlide("settings"),document.querySelector("#scene-list").style.display="none"});menuInfoButton.addEventListener("click",()=>{changeSlide("info"),document.querySelector("#scene-list").style.display="none"});settingsBack.addEventListener("click",()=>{changeSlide("menu"),menu.focus(),document.querySelector("#scene-list").style.display="block"});let pointerRotationSpeed=document.querySelector("#pointerRotationSpeed");pointerRotationSpeed.addEventListener("change",r=>{let e=map(r.target.value,pointerRotationSpeed.min,pointerRotationSpeed.max,.1,5,!0);console.log(e),initScene.mouseControls.rotationSpeed=e});let touchMoveSpeed=document.querySelector("#touchMoveSpeed");touchMoveSpeed.addEventListener("change",r=>{let e=map(r.target.value,touchMoveSpeed.min,touchMoveSpeed.max,0,.1);console.log(e),initScene.touchControls.forwardSpeed=e});let touchRotationSpeed=document.querySelector("#touchRotationSpeed");touchRotationSpeed.addEventListener("change",r=>{let e=map(r.target.value,touchRotationSpeed.min,touchRotationSpeed.max,.001,.015);console.log(e),initScene.touchControls.touchSpeed=e});let elevationCheckbox=document.querySelector("#elevationCheckbox");elevationCheckbox.addEventListener("change",r=>{initScene.touchControls.elevationControls=r.target.value});let inertiaCheckbox=document.querySelector("#elevationCheckbox");inertiaCheckbox.addEventListener("change",r=>{initScene.touchControls.inertia=r.target.value});let spacebarMoveSpeed=document.querySelector("#spacebarMoveSpeed");spacebarMoveSpeed.addEventListener("change",r=>{let e=map(r.target.value,spacebarMoveSpeed.min,spacebarMoveSpeed.max,.003,.1);initScene.keyboardControls.moveSpeed=e});let arrowKeysSpeed=document.querySelector("#arrowKeysSpeed");arrowKeysSpeed.addEventListener("change",r=>{let e=map(r.target.value,arrowKeysSpeed.min,arrowKeysSpeed.max,.003,.1);initScene.keyboardControls.lookSpeed=e});const map=function(r,e,t,n,i,s){const a=(r-e)/(t-e)*(i-n)+n;return s?n<i?constrain(a,n,i):constrain(a,i,n):a},constrain=function(r,e,t){return Math.max(Math.min(r,t),e)};changeSlide("welcome");
//# sourceMappingURL=index-DPqDt2-I.js.map
