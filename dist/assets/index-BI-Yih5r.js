(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();window.global||(window.global=window);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const REVISION="163",CullFaceNone=0,CullFaceBack=1,CullFaceFront=2,PCFShadowMap=1,PCFSoftShadowMap=2,VSMShadowMap=3,FrontSide=0,BackSide=1,DoubleSide=2,NoBlending=0,NormalBlending=1,AdditiveBlending=2,SubtractiveBlending=3,MultiplyBlending=4,CustomBlending=5,AddEquation=100,SubtractEquation=101,ReverseSubtractEquation=102,MinEquation=103,MaxEquation=104,ZeroFactor=200,OneFactor=201,SrcColorFactor=202,OneMinusSrcColorFactor=203,SrcAlphaFactor=204,OneMinusSrcAlphaFactor=205,DstAlphaFactor=206,OneMinusDstAlphaFactor=207,DstColorFactor=208,OneMinusDstColorFactor=209,SrcAlphaSaturateFactor=210,ConstantColorFactor=211,OneMinusConstantColorFactor=212,ConstantAlphaFactor=213,OneMinusConstantAlphaFactor=214,NeverDepth=0,AlwaysDepth=1,LessDepth=2,LessEqualDepth=3,EqualDepth=4,GreaterEqualDepth=5,GreaterDepth=6,NotEqualDepth=7,MultiplyOperation=0,MixOperation=1,AddOperation=2,NoToneMapping=0,LinearToneMapping=1,ReinhardToneMapping=2,CineonToneMapping=3,ACESFilmicToneMapping=4,CustomToneMapping=5,AgXToneMapping=6,NeutralToneMapping=7,UVMapping=300,CubeReflectionMapping=301,CubeRefractionMapping=302,EquirectangularReflectionMapping=303,EquirectangularRefractionMapping=304,CubeUVReflectionMapping=306,RepeatWrapping=1e3,ClampToEdgeWrapping=1001,MirroredRepeatWrapping=1002,NearestFilter=1003,NearestMipmapNearestFilter=1004,NearestMipmapLinearFilter=1005,LinearFilter=1006,LinearMipmapNearestFilter=1007,LinearMipmapLinearFilter=1008,UnsignedByteType=1009,ByteType=1010,ShortType=1011,UnsignedShortType=1012,IntType=1013,UnsignedIntType=1014,FloatType=1015,HalfFloatType=1016,UnsignedShort4444Type=1017,UnsignedShort5551Type=1018,UnsignedInt248Type=1020,UnsignedInt5999Type=35902,AlphaFormat=1021,RGBFormat=1022,RGBAFormat=1023,LuminanceFormat=1024,LuminanceAlphaFormat=1025,DepthFormat=1026,DepthStencilFormat=1027,RedFormat=1028,RedIntegerFormat=1029,RGFormat=1030,RGIntegerFormat=1031,RGBAIntegerFormat=1033,RGB_S3TC_DXT1_Format=33776,RGBA_S3TC_DXT1_Format=33777,RGBA_S3TC_DXT3_Format=33778,RGBA_S3TC_DXT5_Format=33779,RGB_PVRTC_4BPPV1_Format=35840,RGB_PVRTC_2BPPV1_Format=35841,RGBA_PVRTC_4BPPV1_Format=35842,RGBA_PVRTC_2BPPV1_Format=35843,RGB_ETC1_Format=36196,RGB_ETC2_Format=37492,RGBA_ETC2_EAC_Format=37496,RGBA_ASTC_4x4_Format=37808,RGBA_ASTC_5x4_Format=37809,RGBA_ASTC_5x5_Format=37810,RGBA_ASTC_6x5_Format=37811,RGBA_ASTC_6x6_Format=37812,RGBA_ASTC_8x5_Format=37813,RGBA_ASTC_8x6_Format=37814,RGBA_ASTC_8x8_Format=37815,RGBA_ASTC_10x5_Format=37816,RGBA_ASTC_10x6_Format=37817,RGBA_ASTC_10x8_Format=37818,RGBA_ASTC_10x10_Format=37819,RGBA_ASTC_12x10_Format=37820,RGBA_ASTC_12x12_Format=37821,RGBA_BPTC_Format=36492,RGB_BPTC_SIGNED_Format=36494,RGB_BPTC_UNSIGNED_Format=36495,RED_RGTC1_Format=36283,SIGNED_RED_RGTC1_Format=36284,RED_GREEN_RGTC2_Format=36285,SIGNED_RED_GREEN_RGTC2_Format=36286,BasicDepthPacking=3200,RGBADepthPacking=3201,TangentSpaceNormalMap=0,ObjectSpaceNormalMap=1,NoColorSpace="",SRGBColorSpace="srgb",LinearSRGBColorSpace="srgb-linear",DisplayP3ColorSpace="display-p3",LinearDisplayP3ColorSpace="display-p3-linear",LinearTransfer="linear",SRGBTransfer="srgb",Rec709Primaries="rec709",P3Primaries="p3",KeepStencilOp=7680,AlwaysStencilFunc=519,NeverCompare=512,LessCompare=513,EqualCompare=514,LessEqualCompare=515,GreaterCompare=516,NotEqualCompare=517,GreaterEqualCompare=518,AlwaysCompare=519,StaticDrawUsage=35044,GLSL3="300 es",WebGLCoordinateSystem=2e3,WebGPUCoordinateSystem=2001;class EventDispatcher{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const _lut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],DEG2RAD=Math.PI/180,RAD2DEG=180/Math.PI;function generateUUID(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(_lut[r&255]+_lut[r>>8&255]+_lut[r>>16&255]+_lut[r>>24&255]+"-"+_lut[e&255]+_lut[e>>8&255]+"-"+_lut[e>>16&15|64]+_lut[e>>24&255]+"-"+_lut[t&63|128]+_lut[t>>8&255]+"-"+_lut[t>>16&255]+_lut[t>>24&255]+_lut[n&255]+_lut[n>>8&255]+_lut[n>>16&255]+_lut[n>>24&255]).toLowerCase()}function clamp(r,e,t){return Math.max(e,Math.min(t,r))}function euclideanModulo(r,e){return(r%e+e)%e}function lerp(r,e,t){return(1-t)*r+t*e}function denormalize(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function normalize$1(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Vector2{constructor(e=0,t=0){Vector2.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(clamp(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Matrix3{constructor(e,t,n,i,s,a,o,c,l){Matrix3.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,l)}set(e,t,n,i,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],p=n[2],f=n[5],m=n[8],g=i[0],v=i[3],_=i[6],L=i[1],x=i[4],M=i[7],R=i[2],D=i[5],I=i[8];return s[0]=a*g+o*L+c*R,s[3]=a*v+o*x+c*D,s[6]=a*_+o*M+c*I,s[1]=l*g+u*L+h*R,s[4]=l*v+u*x+h*D,s[7]=l*_+u*M+h*I,s[2]=p*g+f*L+m*R,s[5]=p*v+f*x+m*D,s[8]=p*_+f*M+m*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*s*u+n*o*c+i*s*l-i*a*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,p=o*c-u*s,f=l*s-a*c,m=t*h+n*p+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/m;return e[0]=h*g,e[1]=(i*l-u*n)*g,e[2]=(o*n-i*a)*g,e[3]=p*g,e[4]=(u*t-i*c)*g,e[5]=(i*s-o*t)*g,e[6]=f*g,e[7]=(n*c-l*t)*g,e[8]=(a*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(_m3.makeScale(e,t)),this}rotate(e){return this.premultiply(_m3.makeRotation(-e)),this}translate(e,t){return this.premultiply(_m3.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _m3=new Matrix3;function arrayNeedsUint32(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function createElementNS(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function createCanvasElement(){const r=createElementNS("canvas");return r.style.display="block",r}const _cache={};function warnOnce(r){r in _cache||(_cache[r]=!0,console.warn(r))}const LINEAR_SRGB_TO_LINEAR_DISPLAY_P3=new Matrix3().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),LINEAR_DISPLAY_P3_TO_LINEAR_SRGB=new Matrix3().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),COLOR_SPACES={[LinearSRGBColorSpace]:{transfer:LinearTransfer,primaries:Rec709Primaries,toReference:r=>r,fromReference:r=>r},[SRGBColorSpace]:{transfer:SRGBTransfer,primaries:Rec709Primaries,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[LinearDisplayP3ColorSpace]:{transfer:LinearTransfer,primaries:P3Primaries,toReference:r=>r.applyMatrix3(LINEAR_DISPLAY_P3_TO_LINEAR_SRGB),fromReference:r=>r.applyMatrix3(LINEAR_SRGB_TO_LINEAR_DISPLAY_P3)},[DisplayP3ColorSpace]:{transfer:SRGBTransfer,primaries:P3Primaries,toReference:r=>r.convertSRGBToLinear().applyMatrix3(LINEAR_DISPLAY_P3_TO_LINEAR_SRGB),fromReference:r=>r.applyMatrix3(LINEAR_SRGB_TO_LINEAR_DISPLAY_P3).convertLinearToSRGB()}},SUPPORTED_WORKING_COLOR_SPACES=new Set([LinearSRGBColorSpace,LinearDisplayP3ColorSpace]),ColorManagement={enabled:!0,_workingColorSpace:LinearSRGBColorSpace,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!SUPPORTED_WORKING_COLOR_SPACES.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=COLOR_SPACES[e].toReference,i=COLOR_SPACES[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return COLOR_SPACES[r].primaries},getTransfer:function(r){return r===NoColorSpace?LinearTransfer:COLOR_SPACES[r].transfer}};function SRGBToLinear(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function LinearToSRGB(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let _canvas;class ImageUtils{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{_canvas===void 0&&(_canvas=createElementNS("canvas")),_canvas.width=e.width,_canvas.height=e.height;const n=_canvas.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=_canvas}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=createElementNS("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=SRGBToLinear(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(SRGBToLinear(t[n]/255)*255):t[n]=SRGBToLinear(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _sourceId=0;class Source{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_sourceId++}),this.uuid=generateUUID(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(serializeImage(i[a].image)):s.push(serializeImage(i[a]))}else s=serializeImage(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function serializeImage(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?ImageUtils.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _textureId=0;class Texture extends EventDispatcher{constructor(e=Texture.DEFAULT_IMAGE,t=Texture.DEFAULT_MAPPING,n=ClampToEdgeWrapping,i=ClampToEdgeWrapping,s=LinearFilter,a=LinearMipmapLinearFilter,o=RGBAFormat,c=UnsignedByteType,l=Texture.DEFAULT_ANISOTROPY,u=NoColorSpace){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_textureId++}),this.uuid=generateUUID(),this.name="",this.source=new Source(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Vector2(0,0),this.repeat=new Vector2(1,1),this.center=new Vector2(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Matrix3,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==UVMapping)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case RepeatWrapping:e.x=e.x-Math.floor(e.x);break;case ClampToEdgeWrapping:e.x=e.x<0?0:1;break;case MirroredRepeatWrapping:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case RepeatWrapping:e.y=e.y-Math.floor(e.y);break;case ClampToEdgeWrapping:e.y=e.y<0?0:1;break;case MirroredRepeatWrapping:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Texture.DEFAULT_IMAGE=null;Texture.DEFAULT_MAPPING=UVMapping;Texture.DEFAULT_ANISOTROPY=1;class Vector4{constructor(e=0,t=0,n=0,i=1){Vector4.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,l=c[0],u=c[4],h=c[8],p=c[1],f=c[5],m=c[9],g=c[2],v=c[6],_=c[10];if(Math.abs(u-p)<.01&&Math.abs(h-g)<.01&&Math.abs(m-v)<.01){if(Math.abs(u+p)<.1&&Math.abs(h+g)<.1&&Math.abs(m+v)<.1&&Math.abs(l+f+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(l+1)/2,M=(f+1)/2,R=(_+1)/2,D=(u+p)/4,I=(h+g)/4,y=(m+v)/4;return x>M&&x>R?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=D/n,s=I/n):M>R?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=D/i,s=y/i):R<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(R),n=I/s,i=y/s),this.set(n,i,s,t),this}let L=Math.sqrt((v-m)*(v-m)+(h-g)*(h-g)+(p-u)*(p-u));return Math.abs(L)<.001&&(L=1),this.x=(v-m)/L,this.y=(h-g)/L,this.z=(p-u)/L,this.w=Math.acos((l+f+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class RenderTarget extends EventDispatcher{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Vector4(0,0,e,t),this.scissorTest=!1,this.viewport=new Vector4(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:LinearFilter,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);const s=new Texture(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Source(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class WebGLRenderTarget extends RenderTarget{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class DataArrayTexture extends Texture{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=NearestFilter,this.minFilter=NearestFilter,this.wrapR=ClampToEdgeWrapping,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Data3DTexture extends Texture{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=NearestFilter,this.minFilter=NearestFilter,this.wrapR=ClampToEdgeWrapping,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Quaternion{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3];const p=s[a+0],f=s[a+1],m=s[a+2],g=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=p,e[t+1]=f,e[t+2]=m,e[t+3]=g;return}if(h!==g||c!==p||l!==f||u!==m){let v=1-o;const _=c*p+l*f+u*m+h*g,L=_>=0?1:-1,x=1-_*_;if(x>Number.EPSILON){const R=Math.sqrt(x),D=Math.atan2(R,_*L);v=Math.sin(v*D)/R,o=Math.sin(o*D)/R}const M=o*L;if(c=c*v+p*M,l=l*v+f*M,u=u*v+m*M,h=h*v+g*M,v===1-o){const R=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=R,l*=R,u*=R,h*=R}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=s[a],p=s[a+1],f=s[a+2],m=s[a+3];return e[t]=o*m+u*h+c*f-l*p,e[t+1]=c*m+u*p+l*h-o*f,e[t+2]=l*m+u*f+o*p-c*h,e[t+3]=u*m-o*h-c*p-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(i/2),h=o(s/2),p=c(n/2),f=c(i/2),m=c(s/2);switch(a){case"XYZ":this._x=p*u*h+l*f*m,this._y=l*f*h-p*u*m,this._z=l*u*m+p*f*h,this._w=l*u*h-p*f*m;break;case"YXZ":this._x=p*u*h+l*f*m,this._y=l*f*h-p*u*m,this._z=l*u*m-p*f*h,this._w=l*u*h+p*f*m;break;case"ZXY":this._x=p*u*h-l*f*m,this._y=l*f*h+p*u*m,this._z=l*u*m+p*f*h,this._w=l*u*h-p*f*m;break;case"ZYX":this._x=p*u*h-l*f*m,this._y=l*f*h+p*u*m,this._z=l*u*m-p*f*h,this._w=l*u*h+p*f*m;break;case"YZX":this._x=p*u*h+l*f*m,this._y=l*f*h+p*u*m,this._z=l*u*m-p*f*h,this._w=l*u*h-p*f*m;break;case"XZY":this._x=p*u*h-l*f*m,this._y=l*f*h-p*u*m,this._z=l*u*m+p*f*h,this._w=l*u*h+p*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],p=n+o+h;if(p>0){const f=.5/Math.sqrt(p+1);this._w=.25/f,this._x=(u-c)*f,this._y=(s-l)*f,this._z=(a-i)*f}else if(n>o&&n>h){const f=2*Math.sqrt(1+n-o-h);this._w=(u-c)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+l)/f}else if(o>h){const f=2*Math.sqrt(1+o-n-h);this._w=(s-l)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-n-o);this._w=(a-i)/f,this._x=(s+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(clamp(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+i*l-s*c,this._y=i*u+a*c+s*o-n*l,this._z=s*u+a*l+n*c-i*o,this._w=a*u-n*o-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-t)*u)/l,p=Math.sin(t*u)/l;return this._w=a*h+this._w*p,this._x=n*h+this._x*p,this._y=i*h+this._y*p,this._z=s*h+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Vector3{constructor(e=0,t=0,n=0){Vector3.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_quaternion$4.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_quaternion$4.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),u=2*(o*t-s*i),h=2*(s*n-a*t);return this.x=t+c*l+a*h-o*u,this.y=n+c*u+o*l-s*h,this.z=i+c*h+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-s*o,this.y=s*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return _vector$c.copy(this).projectOnVector(e),this.sub(_vector$c)}reflect(e){return this.sub(_vector$c.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(clamp(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _vector$c=new Vector3,_quaternion$4=new Quaternion;class Box3{constructor(e=new Vector3(1/0,1/0,1/0),t=new Vector3(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(_vector$b.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(_vector$b.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=_vector$b.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,_vector$b):_vector$b.fromBufferAttribute(s,a),_vector$b.applyMatrix4(e.matrixWorld),this.expandByPoint(_vector$b);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_box$4.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),_box$4.copy(n.boundingBox)),_box$4.applyMatrix4(e.matrixWorld),this.union(_box$4)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,_vector$b),_vector$b.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_center),_extents.subVectors(this.max,_center),_v0$2.subVectors(e.a,_center),_v1$7.subVectors(e.b,_center),_v2$4.subVectors(e.c,_center),_f0.subVectors(_v1$7,_v0$2),_f1.subVectors(_v2$4,_v1$7),_f2.subVectors(_v0$2,_v2$4);let t=[0,-_f0.z,_f0.y,0,-_f1.z,_f1.y,0,-_f2.z,_f2.y,_f0.z,0,-_f0.x,_f1.z,0,-_f1.x,_f2.z,0,-_f2.x,-_f0.y,_f0.x,0,-_f1.y,_f1.x,0,-_f2.y,_f2.x,0];return!satForAxes(t,_v0$2,_v1$7,_v2$4,_extents)||(t=[1,0,0,0,1,0,0,0,1],!satForAxes(t,_v0$2,_v1$7,_v2$4,_extents))?!1:(_triangleNormal.crossVectors(_f0,_f1),t=[_triangleNormal.x,_triangleNormal.y,_triangleNormal.z],satForAxes(t,_v0$2,_v1$7,_v2$4,_extents))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_vector$b).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_vector$b).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_points[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_points[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_points[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_points[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_points[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_points[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_points[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_points[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_points),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const _points=[new Vector3,new Vector3,new Vector3,new Vector3,new Vector3,new Vector3,new Vector3,new Vector3],_vector$b=new Vector3,_box$4=new Box3,_v0$2=new Vector3,_v1$7=new Vector3,_v2$4=new Vector3,_f0=new Vector3,_f1=new Vector3,_f2=new Vector3,_center=new Vector3,_extents=new Vector3,_triangleNormal=new Vector3,_testAxis=new Vector3;function satForAxes(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){_testAxis.fromArray(r,s);const o=i.x*Math.abs(_testAxis.x)+i.y*Math.abs(_testAxis.y)+i.z*Math.abs(_testAxis.z),c=e.dot(_testAxis),l=t.dot(_testAxis),u=n.dot(_testAxis);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const _box$3=new Box3,_v1$6=new Vector3,_v2$3=new Vector3;class Sphere{constructor(e=new Vector3,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):_box$3.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_v1$6.subVectors(e,this.center);const t=_v1$6.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(_v1$6,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_v2$3.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_v1$6.copy(e.center).add(_v2$3)),this.expandByPoint(_v1$6.copy(e.center).sub(_v2$3))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _vector$a=new Vector3,_segCenter=new Vector3,_segDir=new Vector3,_diff=new Vector3,_edge1=new Vector3,_edge2=new Vector3,_normal$1=new Vector3;class Ray{constructor(e=new Vector3,t=new Vector3(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_vector$a)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=_vector$a.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_vector$a.copy(this.origin).addScaledVector(this.direction,t),_vector$a.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){_segCenter.copy(e).add(t).multiplyScalar(.5),_segDir.copy(t).sub(e).normalize(),_diff.copy(this.origin).sub(_segCenter);const s=e.distanceTo(t)*.5,a=-this.direction.dot(_segDir),o=_diff.dot(this.direction),c=-_diff.dot(_segDir),l=_diff.lengthSq(),u=Math.abs(1-a*a);let h,p,f,m;if(u>0)if(h=a*c-o,p=a*o-c,m=s*u,h>=0)if(p>=-m)if(p<=m){const g=1/u;h*=g,p*=g,f=h*(h+a*p+2*o)+p*(a*h+p+2*c)+l}else p=s,h=Math.max(0,-(a*p+o)),f=-h*h+p*(p+2*c)+l;else p=-s,h=Math.max(0,-(a*p+o)),f=-h*h+p*(p+2*c)+l;else p<=-m?(h=Math.max(0,-(-a*s+o)),p=h>0?-s:Math.min(Math.max(-s,-c),s),f=-h*h+p*(p+2*c)+l):p<=m?(h=0,p=Math.min(Math.max(-s,-c),s),f=p*(p+2*c)+l):(h=Math.max(0,-(a*s+o)),p=h>0?s:Math.min(Math.max(-s,-c),s),f=-h*h+p*(p+2*c)+l);else p=a>0?-s:s,h=Math.max(0,-(a*p+o)),f=-h*h+p*(p+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(_segCenter).addScaledVector(_segDir,p),f}intersectSphere(e,t){_vector$a.subVectors(e.center,this.origin);const n=_vector$a.dot(this.direction),i=_vector$a.dot(_vector$a)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,p=this.origin;return l>=0?(n=(e.min.x-p.x)*l,i=(e.max.x-p.x)*l):(n=(e.max.x-p.x)*l,i=(e.min.x-p.x)*l),u>=0?(s=(e.min.y-p.y)*u,a=(e.max.y-p.y)*u):(s=(e.max.y-p.y)*u,a=(e.min.y-p.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-p.z)*h,c=(e.max.z-p.z)*h):(o=(e.max.z-p.z)*h,c=(e.min.z-p.z)*h),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,_vector$a)!==null}intersectTriangle(e,t,n,i,s){_edge1.subVectors(t,e),_edge2.subVectors(n,e),_normal$1.crossVectors(_edge1,_edge2);let a=this.direction.dot(_normal$1),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;_diff.subVectors(this.origin,e);const c=o*this.direction.dot(_edge2.crossVectors(_diff,_edge2));if(c<0)return null;const l=o*this.direction.dot(_edge1.cross(_diff));if(l<0||c+l>a)return null;const u=-o*_diff.dot(_normal$1);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Matrix4{constructor(e,t,n,i,s,a,o,c,l,u,h,p,f,m,g,v){Matrix4.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,l,u,h,p,f,m,g,v)}set(e,t,n,i,s,a,o,c,l,u,h,p,f,m,g,v){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=s,_[5]=a,_[9]=o,_[13]=c,_[2]=l,_[6]=u,_[10]=h,_[14]=p,_[3]=f,_[7]=m,_[11]=g,_[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Matrix4().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/_v1$5.setFromMatrixColumn(e,0).length(),s=1/_v1$5.setFromMatrixColumn(e,1).length(),a=1/_v1$5.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const p=a*u,f=a*h,m=o*u,g=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+m*l,t[5]=p-g*l,t[9]=-o*c,t[2]=g-p*l,t[6]=m+f*l,t[10]=a*c}else if(e.order==="YXZ"){const p=c*u,f=c*h,m=l*u,g=l*h;t[0]=p+g*o,t[4]=m*o-f,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-m,t[6]=g+p*o,t[10]=a*c}else if(e.order==="ZXY"){const p=c*u,f=c*h,m=l*u,g=l*h;t[0]=p-g*o,t[4]=-a*h,t[8]=m+f*o,t[1]=f+m*o,t[5]=a*u,t[9]=g-p*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const p=a*u,f=a*h,m=o*u,g=o*h;t[0]=c*u,t[4]=m*l-f,t[8]=p*l+g,t[1]=c*h,t[5]=g*l+p,t[9]=f*l-m,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const p=a*c,f=a*l,m=o*c,g=o*l;t[0]=c*u,t[4]=g-p*h,t[8]=m*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=f*h+m,t[10]=p-g*h}else if(e.order==="XZY"){const p=a*c,f=a*l,m=o*c,g=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=p*h+g,t[5]=a*u,t[9]=f*h-m,t[2]=m*h-f,t[6]=o*u,t[10]=g*h+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_zero,e,_one)}lookAt(e,t,n){const i=this.elements;return _z.subVectors(e,t),_z.lengthSq()===0&&(_z.z=1),_z.normalize(),_x.crossVectors(n,_z),_x.lengthSq()===0&&(Math.abs(n.z)===1?_z.x+=1e-4:_z.z+=1e-4,_z.normalize(),_x.crossVectors(n,_z)),_x.normalize(),_y.crossVectors(_z,_x),i[0]=_x.x,i[4]=_y.x,i[8]=_z.x,i[1]=_x.y,i[5]=_y.y,i[9]=_z.y,i[2]=_x.z,i[6]=_y.z,i[10]=_z.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],p=n[9],f=n[13],m=n[2],g=n[6],v=n[10],_=n[14],L=n[3],x=n[7],M=n[11],R=n[15],D=i[0],I=i[4],y=i[8],S=i[12],E=i[1],O=i[5],$=i[9],H=i[13],te=i[2],de=i[6],ve=i[10],ge=i[14],q=i[3],F=i[7],j=i[11],ce=i[15];return s[0]=a*D+o*E+c*te+l*q,s[4]=a*I+o*O+c*de+l*F,s[8]=a*y+o*$+c*ve+l*j,s[12]=a*S+o*H+c*ge+l*ce,s[1]=u*D+h*E+p*te+f*q,s[5]=u*I+h*O+p*de+f*F,s[9]=u*y+h*$+p*ve+f*j,s[13]=u*S+h*H+p*ge+f*ce,s[2]=m*D+g*E+v*te+_*q,s[6]=m*I+g*O+v*de+_*F,s[10]=m*y+g*$+v*ve+_*j,s[14]=m*S+g*H+v*ge+_*ce,s[3]=L*D+x*E+M*te+R*q,s[7]=L*I+x*O+M*de+R*F,s[11]=L*y+x*$+M*ve+R*j,s[15]=L*S+x*H+M*ge+R*ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],p=e[10],f=e[14],m=e[3],g=e[7],v=e[11],_=e[15];return m*(+s*c*h-i*l*h-s*o*p+n*l*p+i*o*f-n*c*f)+g*(+t*c*f-t*l*p+s*a*p-i*a*f+i*l*u-s*c*u)+v*(+t*l*h-t*o*f-s*a*h+n*a*f+s*o*u-n*l*u)+_*(-i*o*u-t*c*h+t*o*p+i*a*h-n*a*p+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],p=e[10],f=e[11],m=e[12],g=e[13],v=e[14],_=e[15],L=h*v*l-g*p*l+g*c*f-o*v*f-h*c*_+o*p*_,x=m*p*l-u*v*l-m*c*f+a*v*f+u*c*_-a*p*_,M=u*g*l-m*h*l+m*o*f-a*g*f-u*o*_+a*h*_,R=m*h*c-u*g*c-m*o*p+a*g*p+u*o*v-a*h*v,D=t*L+n*x+i*M+s*R;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/D;return e[0]=L*I,e[1]=(g*p*s-h*v*s-g*i*f+n*v*f+h*i*_-n*p*_)*I,e[2]=(o*v*s-g*c*s+g*i*l-n*v*l-o*i*_+n*c*_)*I,e[3]=(h*c*s-o*p*s-h*i*l+n*p*l+o*i*f-n*c*f)*I,e[4]=x*I,e[5]=(u*v*s-m*p*s+m*i*f-t*v*f-u*i*_+t*p*_)*I,e[6]=(m*c*s-a*v*s-m*i*l+t*v*l+a*i*_-t*c*_)*I,e[7]=(a*p*s-u*c*s+u*i*l-t*p*l-a*i*f+t*c*f)*I,e[8]=M*I,e[9]=(m*h*s-u*g*s-m*n*f+t*g*f+u*n*_-t*h*_)*I,e[10]=(a*g*s-m*o*s+m*n*l-t*g*l-a*n*_+t*o*_)*I,e[11]=(u*o*s-a*h*s-u*n*l+t*h*l+a*n*f-t*o*f)*I,e[12]=R*I,e[13]=(u*g*i-m*h*i+m*n*p-t*g*p-u*n*v+t*h*v)*I,e[14]=(m*o*i-a*g*i-m*n*c+t*g*c+a*n*v-t*o*v)*I,e[15]=(a*h*i-u*o*i+u*n*c-t*h*c-a*n*p+t*o*p)*I,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,u*o+n,u*c-i*a,0,l*c-i*o,u*c+i*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,h=o+o,p=s*l,f=s*u,m=s*h,g=a*u,v=a*h,_=o*h,L=c*l,x=c*u,M=c*h,R=n.x,D=n.y,I=n.z;return i[0]=(1-(g+_))*R,i[1]=(f+M)*R,i[2]=(m-x)*R,i[3]=0,i[4]=(f-M)*D,i[5]=(1-(p+_))*D,i[6]=(v+L)*D,i[7]=0,i[8]=(m+x)*I,i[9]=(v-L)*I,i[10]=(1-(p+g))*I,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=_v1$5.set(i[0],i[1],i[2]).length();const a=_v1$5.set(i[4],i[5],i[6]).length(),o=_v1$5.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],_m1$4.copy(this);const l=1/s,u=1/a,h=1/o;return _m1$4.elements[0]*=l,_m1$4.elements[1]*=l,_m1$4.elements[2]*=l,_m1$4.elements[4]*=u,_m1$4.elements[5]*=u,_m1$4.elements[6]*=u,_m1$4.elements[8]*=h,_m1$4.elements[9]*=h,_m1$4.elements[10]*=h,t.setFromRotationMatrix(_m1$4),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=WebGLCoordinateSystem){const c=this.elements,l=2*s/(t-e),u=2*s/(n-i),h=(t+e)/(t-e),p=(n+i)/(n-i);let f,m;if(o===WebGLCoordinateSystem)f=-(a+s)/(a-s),m=-2*a*s/(a-s);else if(o===WebGPUCoordinateSystem)f=-a/(a-s),m=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=WebGLCoordinateSystem){const c=this.elements,l=1/(t-e),u=1/(n-i),h=1/(a-s),p=(t+e)*l,f=(n+i)*u;let m,g;if(o===WebGLCoordinateSystem)m=(a+s)*h,g=-2*h;else if(o===WebGPUCoordinateSystem)m=s*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=g,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const _v1$5=new Vector3,_m1$4=new Matrix4,_zero=new Vector3(0,0,0),_one=new Vector3(1,1,1),_x=new Vector3,_y=new Vector3,_z=new Vector3,_matrix$2=new Matrix4,_quaternion$3=new Quaternion;class Euler{constructor(e=0,t=0,n=0,i=Euler.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],c=i[1],l=i[5],u=i[9],h=i[2],p=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(clamp(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-clamp(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(clamp(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-clamp(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(p,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(clamp(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-clamp(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return _matrix$2.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_matrix$2,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _quaternion$3.setFromEuler(this),this.setFromQuaternion(_quaternion$3,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Euler.DEFAULT_ORDER="XYZ";class Layers{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _object3DId=0;const _v1$4=new Vector3,_q1=new Quaternion,_m1$3=new Matrix4,_target=new Vector3,_position$3=new Vector3,_scale$2=new Vector3,_quaternion$2=new Quaternion,_xAxis=new Vector3(1,0,0),_yAxis=new Vector3(0,1,0),_zAxis=new Vector3(0,0,1),_addedEvent={type:"added"},_removedEvent={type:"removed"},_childaddedEvent={type:"childadded",child:null},_childremovedEvent={type:"childremoved",child:null};class Object3D extends EventDispatcher{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_object3DId++}),this.uuid=generateUUID(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Object3D.DEFAULT_UP.clone();const e=new Vector3,t=new Euler,n=new Quaternion,i=new Vector3(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Matrix4},normalMatrix:{value:new Matrix3}}),this.matrix=new Matrix4,this.matrixWorld=new Matrix4,this.matrixAutoUpdate=Object3D.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Object3D.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Layers,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _q1.setFromAxisAngle(e,t),this.quaternion.multiply(_q1),this}rotateOnWorldAxis(e,t){return _q1.setFromAxisAngle(e,t),this.quaternion.premultiply(_q1),this}rotateX(e){return this.rotateOnAxis(_xAxis,e)}rotateY(e){return this.rotateOnAxis(_yAxis,e)}rotateZ(e){return this.rotateOnAxis(_zAxis,e)}translateOnAxis(e,t){return _v1$4.copy(e).applyQuaternion(this.quaternion),this.position.add(_v1$4.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_xAxis,e)}translateY(e){return this.translateOnAxis(_yAxis,e)}translateZ(e){return this.translateOnAxis(_zAxis,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_m1$3.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?_target.copy(e):_target.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),_position$3.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_m1$3.lookAt(_position$3,_target,this.up):_m1$3.lookAt(_target,_position$3,this.up),this.quaternion.setFromRotationMatrix(_m1$3),i&&(_m1$3.extractRotation(i.matrixWorld),_q1.setFromRotationMatrix(_m1$3),this.quaternion.premultiply(_q1.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_addedEvent),_childaddedEvent.child=e,this.dispatchEvent(_childaddedEvent),_childaddedEvent.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_removedEvent),_childremovedEvent.child=e,this.dispatchEvent(_childremovedEvent),_childremovedEvent.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_m1$3.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_m1$3.multiply(e.parent.matrixWorld)),e.applyMatrix4(_m1$3),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_addedEvent),_childaddedEvent.child=e,this.dispatchEvent(_childaddedEvent),_childaddedEvent.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_position$3,e,_scale$2),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_position$3,_quaternion$2,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++){const o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),p=a(e.skeletons),f=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),p.length>0&&(n.skeletons=p),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Object3D.DEFAULT_UP=new Vector3(0,1,0);Object3D.DEFAULT_MATRIX_AUTO_UPDATE=!0;Object3D.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _v0$1=new Vector3,_v1$3=new Vector3,_v2$2=new Vector3,_v3$2=new Vector3,_vab=new Vector3,_vac=new Vector3,_vbc=new Vector3,_vap=new Vector3,_vbp=new Vector3,_vcp=new Vector3;class Triangle{constructor(e=new Vector3,t=new Vector3,n=new Vector3){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),_v0$1.subVectors(e,t),i.cross(_v0$1);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){_v0$1.subVectors(i,t),_v1$3.subVectors(n,t),_v2$2.subVectors(e,t);const a=_v0$1.dot(_v0$1),o=_v0$1.dot(_v1$3),c=_v0$1.dot(_v2$2),l=_v1$3.dot(_v1$3),u=_v1$3.dot(_v2$2),h=a*l-o*o;if(h===0)return s.set(0,0,0),null;const p=1/h,f=(l*c-o*u)*p,m=(a*u-o*c)*p;return s.set(1-f-m,m,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,_v3$2)===null?!1:_v3$2.x>=0&&_v3$2.y>=0&&_v3$2.x+_v3$2.y<=1}static getInterpolation(e,t,n,i,s,a,o,c){return this.getBarycoord(e,t,n,i,_v3$2)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,_v3$2.x),c.addScaledVector(a,_v3$2.y),c.addScaledVector(o,_v3$2.z),c)}static isFrontFacing(e,t,n,i){return _v0$1.subVectors(n,t),_v1$3.subVectors(e,t),_v0$1.cross(_v1$3).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _v0$1.subVectors(this.c,this.b),_v1$3.subVectors(this.a,this.b),_v0$1.cross(_v1$3).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Triangle.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Triangle.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Triangle.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Triangle.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Triangle.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;_vab.subVectors(i,n),_vac.subVectors(s,n),_vap.subVectors(e,n);const c=_vab.dot(_vap),l=_vac.dot(_vap);if(c<=0&&l<=0)return t.copy(n);_vbp.subVectors(e,i);const u=_vab.dot(_vbp),h=_vac.dot(_vbp);if(u>=0&&h<=u)return t.copy(i);const p=c*h-u*l;if(p<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(_vab,a);_vcp.subVectors(e,s);const f=_vab.dot(_vcp),m=_vac.dot(_vcp);if(m>=0&&f<=m)return t.copy(s);const g=f*l-c*m;if(g<=0&&l>=0&&m<=0)return o=l/(l-m),t.copy(n).addScaledVector(_vac,o);const v=u*m-f*h;if(v<=0&&h-u>=0&&f-m>=0)return _vbc.subVectors(s,i),o=(h-u)/(h-u+(f-m)),t.copy(i).addScaledVector(_vbc,o);const _=1/(v+g+p);return a=g*_,o=p*_,t.copy(n).addScaledVector(_vab,a).addScaledVector(_vac,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const _colorKeywords={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_hslA={h:0,s:0,l:0},_hslB={h:0,s:0,l:0};function hue2rgb(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Color{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=SRGBColorSpace){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ColorManagement.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=ColorManagement.workingColorSpace){return this.r=e,this.g=t,this.b=n,ColorManagement.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=ColorManagement.workingColorSpace){if(e=euclideanModulo(e,1),t=clamp(t,0,1),n=clamp(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=hue2rgb(a,s,e+1/3),this.g=hue2rgb(a,s,e),this.b=hue2rgb(a,s,e-1/3)}return ColorManagement.toWorkingColorSpace(this,i),this}setStyle(e,t=SRGBColorSpace){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=SRGBColorSpace){const n=_colorKeywords[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=SRGBToLinear(e.r),this.g=SRGBToLinear(e.g),this.b=SRGBToLinear(e.b),this}copyLinearToSRGB(e){return this.r=LinearToSRGB(e.r),this.g=LinearToSRGB(e.g),this.b=LinearToSRGB(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=SRGBColorSpace){return ColorManagement.fromWorkingColorSpace(_color.copy(this),e),Math.round(clamp(_color.r*255,0,255))*65536+Math.round(clamp(_color.g*255,0,255))*256+Math.round(clamp(_color.b*255,0,255))}getHexString(e=SRGBColorSpace){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ColorManagement.workingColorSpace){ColorManagement.fromWorkingColorSpace(_color.copy(this),t);const n=_color.r,i=_color.g,s=_color.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(i-s)/h+(i<s?6:0);break;case i:c=(s-n)/h+2;break;case s:c=(n-i)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=ColorManagement.workingColorSpace){return ColorManagement.fromWorkingColorSpace(_color.copy(this),t),e.r=_color.r,e.g=_color.g,e.b=_color.b,e}getStyle(e=SRGBColorSpace){ColorManagement.fromWorkingColorSpace(_color.copy(this),e);const t=_color.r,n=_color.g,i=_color.b;return e!==SRGBColorSpace?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(_hslA),this.setHSL(_hslA.h+e,_hslA.s+t,_hslA.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(_hslA),e.getHSL(_hslB);const n=lerp(_hslA.h,_hslB.h,t),i=lerp(_hslA.s,_hslB.s,t),s=lerp(_hslA.l,_hslB.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _color=new Color;Color.NAMES=_colorKeywords;let _materialId=0;class Material extends EventDispatcher{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_materialId++}),this.uuid=generateUUID(),this.name="",this.type="Material",this.blending=NormalBlending,this.side=FrontSide,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=SrcAlphaFactor,this.blendDst=OneMinusSrcAlphaFactor,this.blendEquation=AddEquation,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Color(0,0,0),this.blendAlpha=0,this.depthFunc=LessEqualDepth,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=AlwaysStencilFunc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=KeepStencilOp,this.stencilZFail=KeepStencilOp,this.stencilZPass=KeepStencilOp,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==NormalBlending&&(n.blending=this.blending),this.side!==FrontSide&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==SrcAlphaFactor&&(n.blendSrc=this.blendSrc),this.blendDst!==OneMinusSrcAlphaFactor&&(n.blendDst=this.blendDst),this.blendEquation!==AddEquation&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==LessEqualDepth&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==AlwaysStencilFunc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==KeepStencilOp&&(n.stencilFail=this.stencilFail),this.stencilZFail!==KeepStencilOp&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==KeepStencilOp&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class MeshBasicMaterial extends Material{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Color(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Euler,this.combine=MultiplyOperation,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _vector$9=new Vector3,_vector2$1=new Vector2;class BufferAttribute{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=StaticDrawUsage,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=FloatType,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return warnOnce("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)_vector2$1.fromBufferAttribute(this,t),_vector2$1.applyMatrix3(e),this.setXY(t,_vector2$1.x,_vector2$1.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)_vector$9.fromBufferAttribute(this,t),_vector$9.applyMatrix3(e),this.setXYZ(t,_vector$9.x,_vector$9.y,_vector$9.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)_vector$9.fromBufferAttribute(this,t),_vector$9.applyMatrix4(e),this.setXYZ(t,_vector$9.x,_vector$9.y,_vector$9.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_vector$9.fromBufferAttribute(this,t),_vector$9.applyNormalMatrix(e),this.setXYZ(t,_vector$9.x,_vector$9.y,_vector$9.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_vector$9.fromBufferAttribute(this,t),_vector$9.transformDirection(e),this.setXYZ(t,_vector$9.x,_vector$9.y,_vector$9.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=denormalize(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=normalize$1(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=denormalize(t,this.array)),t}setX(e,t){return this.normalized&&(t=normalize$1(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=denormalize(t,this.array)),t}setY(e,t){return this.normalized&&(t=normalize$1(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=denormalize(t,this.array)),t}setZ(e,t){return this.normalized&&(t=normalize$1(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=denormalize(t,this.array)),t}setW(e,t){return this.normalized&&(t=normalize$1(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=normalize$1(t,this.array),n=normalize$1(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=normalize$1(t,this.array),n=normalize$1(n,this.array),i=normalize$1(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=normalize$1(t,this.array),n=normalize$1(n,this.array),i=normalize$1(i,this.array),s=normalize$1(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==StaticDrawUsage&&(e.usage=this.usage),e}}class Uint16BufferAttribute extends BufferAttribute{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Uint32BufferAttribute extends BufferAttribute{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Float32BufferAttribute extends BufferAttribute{constructor(e,t,n){super(new Float32Array(e),t,n)}}let _id$2=0;const _m1$2=new Matrix4,_obj=new Object3D,_offset=new Vector3,_box$2=new Box3,_boxMorphTargets=new Box3,_vector$8=new Vector3;class BufferGeometry extends EventDispatcher{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_id$2++}),this.uuid=generateUUID(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(arrayNeedsUint32(e)?Uint32BufferAttribute:Uint16BufferAttribute)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Matrix3().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _m1$2.makeRotationFromQuaternion(e),this.applyMatrix4(_m1$2),this}rotateX(e){return _m1$2.makeRotationX(e),this.applyMatrix4(_m1$2),this}rotateY(e){return _m1$2.makeRotationY(e),this.applyMatrix4(_m1$2),this}rotateZ(e){return _m1$2.makeRotationZ(e),this.applyMatrix4(_m1$2),this}translate(e,t,n){return _m1$2.makeTranslation(e,t,n),this.applyMatrix4(_m1$2),this}scale(e,t,n){return _m1$2.makeScale(e,t,n),this.applyMatrix4(_m1$2),this}lookAt(e){return _obj.lookAt(e),_obj.updateMatrix(),this.applyMatrix4(_obj.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_offset).negate(),this.translate(_offset.x,_offset.y,_offset.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Float32BufferAttribute(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Box3);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Vector3(-1/0,-1/0,-1/0),new Vector3(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];_box$2.setFromBufferAttribute(s),this.morphTargetsRelative?(_vector$8.addVectors(this.boundingBox.min,_box$2.min),this.boundingBox.expandByPoint(_vector$8),_vector$8.addVectors(this.boundingBox.max,_box$2.max),this.boundingBox.expandByPoint(_vector$8)):(this.boundingBox.expandByPoint(_box$2.min),this.boundingBox.expandByPoint(_box$2.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sphere);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Vector3,1/0);return}if(e){const n=this.boundingSphere.center;if(_box$2.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];_boxMorphTargets.setFromBufferAttribute(o),this.morphTargetsRelative?(_vector$8.addVectors(_box$2.min,_boxMorphTargets.min),_box$2.expandByPoint(_vector$8),_vector$8.addVectors(_box$2.max,_boxMorphTargets.max),_box$2.expandByPoint(_vector$8)):(_box$2.expandByPoint(_boxMorphTargets.min),_box$2.expandByPoint(_boxMorphTargets.max))}_box$2.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)_vector$8.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(_vector$8));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)_vector$8.fromBufferAttribute(o,l),c&&(_offset.fromBufferAttribute(e,l),_vector$8.add(_offset)),i=Math.max(i,n.distanceToSquared(_vector$8))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new BufferAttribute(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let y=0;y<n.count;y++)o[y]=new Vector3,c[y]=new Vector3;const l=new Vector3,u=new Vector3,h=new Vector3,p=new Vector2,f=new Vector2,m=new Vector2,g=new Vector3,v=new Vector3;function _(y,S,E){l.fromBufferAttribute(n,y),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,E),p.fromBufferAttribute(s,y),f.fromBufferAttribute(s,S),m.fromBufferAttribute(s,E),u.sub(l),h.sub(l),f.sub(p),m.sub(p);const O=1/(f.x*m.y-m.x*f.y);isFinite(O)&&(g.copy(u).multiplyScalar(m.y).addScaledVector(h,-f.y).multiplyScalar(O),v.copy(h).multiplyScalar(f.x).addScaledVector(u,-m.x).multiplyScalar(O),o[y].add(g),o[S].add(g),o[E].add(g),c[y].add(v),c[S].add(v),c[E].add(v))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let y=0,S=L.length;y<S;++y){const E=L[y],O=E.start,$=E.count;for(let H=O,te=O+$;H<te;H+=3)_(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const x=new Vector3,M=new Vector3,R=new Vector3,D=new Vector3;function I(y){R.fromBufferAttribute(i,y),D.copy(R);const S=o[y];x.copy(S),x.sub(R.multiplyScalar(R.dot(S))).normalize(),M.crossVectors(D,S);const O=M.dot(c[y])<0?-1:1;a.setXYZW(y,x.x,x.y,x.z,O)}for(let y=0,S=L.length;y<S;++y){const E=L[y],O=E.start,$=E.count;for(let H=O,te=O+$;H<te;H+=3)I(e.getX(H+0)),I(e.getX(H+1)),I(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new BufferAttribute(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,f=n.count;p<f;p++)n.setXYZ(p,0,0,0);const i=new Vector3,s=new Vector3,a=new Vector3,o=new Vector3,c=new Vector3,l=new Vector3,u=new Vector3,h=new Vector3;if(e)for(let p=0,f=e.count;p<f;p+=3){const m=e.getX(p+0),g=e.getX(p+1),v=e.getX(p+2);i.fromBufferAttribute(t,m),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,v),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),o.add(u),c.add(u),l.add(u),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(v,l.x,l.y,l.z)}else for(let p=0,f=t.count;p<f;p+=3)i.fromBufferAttribute(t,p+0),s.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),n.setXYZ(p+0,u.x,u.y,u.z),n.setXYZ(p+1,u.x,u.y,u.z),n.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)_vector$8.fromBufferAttribute(e,t),_vector$8.normalize(),e.setXYZ(t,_vector$8.x,_vector$8.y,_vector$8.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,h=o.normalized,p=new l.constructor(c.length*u);let f=0,m=0;for(let g=0,v=c.length;g<v;g++){o.isInterleavedBufferAttribute?f=c[g]*o.data.stride+o.offset:f=c[g]*u;for(let _=0;_<u;_++)p[m++]=l[f++]}return new BufferAttribute(p,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new BufferGeometry,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,h=l.length;u<h;u++){const p=l[u],f=e(p,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,p=l.length;h<p;h++){const f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(i[c]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],h=s[l];for(let p=0,f=h.length;p<f;p++)u.push(h[p].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _inverseMatrix$3=new Matrix4,_ray$3=new Ray,_sphere$6=new Sphere,_sphereHitAt=new Vector3,_vA$1=new Vector3,_vB$1=new Vector3,_vC$1=new Vector3,_tempA=new Vector3,_morphA=new Vector3,_uvA$1=new Vector2,_uvB$1=new Vector2,_uvC$1=new Vector2,_normalA=new Vector3,_normalB=new Vector3,_normalC=new Vector3,_intersectionPoint=new Vector3,_intersectionPointWorld=new Vector3;class Mesh extends Object3D{constructor(e=new BufferGeometry,t=new MeshBasicMaterial){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){_morphA.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],h=s[c];u!==0&&(_tempA.fromBufferAttribute(h,e),a?_morphA.addScaledVector(_tempA,u):_morphA.addScaledVector(_tempA.sub(t),u))}t.add(_morphA)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_sphere$6.copy(n.boundingSphere),_sphere$6.applyMatrix4(s),_ray$3.copy(e.ray).recast(e.near),!(_sphere$6.containsPoint(_ray$3.origin)===!1&&(_ray$3.intersectSphere(_sphere$6,_sphereHitAt)===null||_ray$3.origin.distanceToSquared(_sphereHitAt)>(e.far-e.near)**2))&&(_inverseMatrix$3.copy(s).invert(),_ray$3.copy(e.ray).applyMatrix4(_inverseMatrix$3),!(n.boundingBox!==null&&_ray$3.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,_ray$3)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,p=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,g=p.length;m<g;m++){const v=p[m],_=a[v.materialIndex],L=Math.max(v.start,f.start),x=Math.min(o.count,Math.min(v.start+v.count,f.start+f.count));for(let M=L,R=x;M<R;M+=3){const D=o.getX(M),I=o.getX(M+1),y=o.getX(M+2);i=checkGeometryIntersection(this,_,e,n,l,u,h,D,I,y),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=v.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let v=m,_=g;v<_;v+=3){const L=o.getX(v),x=o.getX(v+1),M=o.getX(v+2);i=checkGeometryIntersection(this,a,e,n,l,u,h,L,x,M),i&&(i.faceIndex=Math.floor(v/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,g=p.length;m<g;m++){const v=p[m],_=a[v.materialIndex],L=Math.max(v.start,f.start),x=Math.min(c.count,Math.min(v.start+v.count,f.start+f.count));for(let M=L,R=x;M<R;M+=3){const D=M,I=M+1,y=M+2;i=checkGeometryIntersection(this,_,e,n,l,u,h,D,I,y),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=v.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),g=Math.min(c.count,f.start+f.count);for(let v=m,_=g;v<_;v+=3){const L=v,x=v+1,M=v+2;i=checkGeometryIntersection(this,a,e,n,l,u,h,L,x,M),i&&(i.faceIndex=Math.floor(v/3),t.push(i))}}}}function checkIntersection(r,e,t,n,i,s,a,o){let c;if(e.side===BackSide?c=n.intersectTriangle(a,s,i,!0,o):c=n.intersectTriangle(i,s,a,e.side===FrontSide,o),c===null)return null;_intersectionPointWorld.copy(o),_intersectionPointWorld.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(_intersectionPointWorld);return l<t.near||l>t.far?null:{distance:l,point:_intersectionPointWorld.clone(),object:r}}function checkGeometryIntersection(r,e,t,n,i,s,a,o,c,l){r.getVertexPosition(o,_vA$1),r.getVertexPosition(c,_vB$1),r.getVertexPosition(l,_vC$1);const u=checkIntersection(r,e,t,n,_vA$1,_vB$1,_vC$1,_intersectionPoint);if(u){i&&(_uvA$1.fromBufferAttribute(i,o),_uvB$1.fromBufferAttribute(i,c),_uvC$1.fromBufferAttribute(i,l),u.uv=Triangle.getInterpolation(_intersectionPoint,_vA$1,_vB$1,_vC$1,_uvA$1,_uvB$1,_uvC$1,new Vector2)),s&&(_uvA$1.fromBufferAttribute(s,o),_uvB$1.fromBufferAttribute(s,c),_uvC$1.fromBufferAttribute(s,l),u.uv1=Triangle.getInterpolation(_intersectionPoint,_vA$1,_vB$1,_vC$1,_uvA$1,_uvB$1,_uvC$1,new Vector2)),a&&(_normalA.fromBufferAttribute(a,o),_normalB.fromBufferAttribute(a,c),_normalC.fromBufferAttribute(a,l),u.normal=Triangle.getInterpolation(_intersectionPoint,_vA$1,_vB$1,_vC$1,_normalA,_normalB,_normalC,new Vector3),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new Vector3,materialIndex:0};Triangle.getNormal(_vA$1,_vB$1,_vC$1,h.normal),u.face=h}return u}class BoxGeometry extends BufferGeometry{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],h=[];let p=0,f=0;m("z","y","x",-1,-1,n,t,e,a,s,0),m("z","y","x",1,-1,n,t,-e,a,s,1),m("x","z","y",1,1,e,n,t,i,a,2),m("x","z","y",1,-1,e,n,-t,i,a,3),m("x","y","z",1,-1,e,t,n,i,s,4),m("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new Float32BufferAttribute(l,3)),this.setAttribute("normal",new Float32BufferAttribute(u,3)),this.setAttribute("uv",new Float32BufferAttribute(h,2));function m(g,v,_,L,x,M,R,D,I,y,S){const E=M/I,O=R/y,$=M/2,H=R/2,te=D/2,de=I+1,ve=y+1;let ge=0,q=0;const F=new Vector3;for(let j=0;j<ve;j++){const ce=j*O-H;for(let pe=0;pe<de;pe++){const _e=pe*E-$;F[g]=_e*L,F[v]=ce*x,F[_]=te,l.push(F.x,F.y,F.z),F[g]=0,F[v]=0,F[_]=D>0?1:-1,u.push(F.x,F.y,F.z),h.push(pe/I),h.push(1-j/y),ge+=1}}for(let j=0;j<y;j++)for(let ce=0;ce<I;ce++){const pe=p+ce+de*j,_e=p+ce+de*(j+1),he=p+(ce+1)+de*(j+1),N=p+(ce+1)+de*j;c.push(pe,_e,N),c.push(_e,he,N),q+=6}o.addGroup(f,q,S),f+=q,p+=ge}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new BoxGeometry(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function cloneUniforms(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function mergeUniforms(r){const e={};for(let t=0;t<r.length;t++){const n=cloneUniforms(r[t]);for(const i in n)e[i]=n[i]}return e}function cloneUniformsGroups(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function getUnlitUniformColorSpace(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ColorManagement.workingColorSpace}const UniformsUtils={clone:cloneUniforms,merge:mergeUniforms};var default_vertex=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,default_fragment=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ShaderMaterial extends Material{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=default_vertex,this.fragmentShader=default_fragment,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cloneUniforms(e.uniforms),this.uniformsGroups=cloneUniformsGroups(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Camera extends Object3D{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Matrix4,this.projectionMatrix=new Matrix4,this.projectionMatrixInverse=new Matrix4,this.coordinateSystem=WebGLCoordinateSystem}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _v3$1=new Vector3,_minTarget=new Vector2,_maxTarget=new Vector2;class PerspectiveCamera extends Camera{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=RAD2DEG*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(DEG2RAD*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return RAD2DEG*2*Math.atan(Math.tan(DEG2RAD*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){_v3$1.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(_v3$1.x,_v3$1.y).multiplyScalar(-e/_v3$1.z),_v3$1.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_v3$1.x,_v3$1.y).multiplyScalar(-e/_v3$1.z)}getViewSize(e,t){return this.getViewBounds(e,_minTarget,_maxTarget),t.subVectors(_maxTarget,_minTarget)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(DEG2RAD*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const fov=-90,aspect=1;class CubeCamera extends Object3D{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new PerspectiveCamera(fov,aspect,e,t);i.layers=this.layers,this.add(i);const s=new PerspectiveCamera(fov,aspect,e,t);s.layers=this.layers,this.add(s);const a=new PerspectiveCamera(fov,aspect,e,t);a.layers=this.layers,this.add(a);const o=new PerspectiveCamera(fov,aspect,e,t);o.layers=this.layers,this.add(o);const c=new PerspectiveCamera(fov,aspect,e,t);c.layers=this.layers,this.add(c);const l=new PerspectiveCamera(fov,aspect,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===WebGLCoordinateSystem)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===WebGPUCoordinateSystem)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,h=e.getRenderTarget(),p=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,p,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class CubeTexture extends Texture{constructor(e,t,n,i,s,a,o,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:CubeReflectionMapping,super(e,t,n,i,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class WebGLCubeRenderTarget extends WebGLRenderTarget{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new CubeTexture(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:LinearFilter}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new BoxGeometry(5,5,5),s=new ShaderMaterial({name:"CubemapFromEquirect",uniforms:cloneUniforms(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:BackSide,blending:NoBlending});s.uniforms.tEquirect.value=t;const a=new Mesh(i,s),o=t.minFilter;return t.minFilter===LinearMipmapLinearFilter&&(t.minFilter=LinearFilter),new CubeCamera(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}const _vector1=new Vector3,_vector2=new Vector3,_normalMatrix=new Matrix3;class Plane{constructor(e=new Vector3(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=_vector1.subVectors(n,t).cross(_vector2.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(_vector1),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||_normalMatrix.getNormalMatrix(e),i=this.coplanarPoint(_vector1).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _sphere$5=new Sphere,_vector$7=new Vector3;class Frustum{constructor(e=new Plane,t=new Plane,n=new Plane,i=new Plane,s=new Plane,a=new Plane){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=WebGLCoordinateSystem){const n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],c=i[3],l=i[4],u=i[5],h=i[6],p=i[7],f=i[8],m=i[9],g=i[10],v=i[11],_=i[12],L=i[13],x=i[14],M=i[15];if(n[0].setComponents(c-s,p-l,v-f,M-_).normalize(),n[1].setComponents(c+s,p+l,v+f,M+_).normalize(),n[2].setComponents(c+a,p+u,v+m,M+L).normalize(),n[3].setComponents(c-a,p-u,v-m,M-L).normalize(),n[4].setComponents(c-o,p-h,v-g,M-x).normalize(),t===WebGLCoordinateSystem)n[5].setComponents(c+o,p+h,v+g,M+x).normalize();else if(t===WebGPUCoordinateSystem)n[5].setComponents(o,h,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_sphere$5.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_sphere$5.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_sphere$5)}intersectsSprite(e){return _sphere$5.center.set(0,0,0),_sphere$5.radius=.7071067811865476,_sphere$5.applyMatrix4(e.matrixWorld),this.intersectsSphere(_sphere$5)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(_vector$7.x=i.normal.x>0?e.max.x:e.min.x,_vector$7.y=i.normal.y>0?e.max.y:e.min.y,_vector$7.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(_vector$7)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function WebGLAnimation(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function WebGLAttributes(r){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,h=l.byteLength,p=r.createBuffer();r.bindBuffer(c,p),r.bufferData(c,l,u),o.onUploadCallback();let f;if(l instanceof Float32Array)f=r.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=r.SHORT;else if(l instanceof Uint32Array)f=r.UNSIGNED_INT;else if(l instanceof Int32Array)f=r.INT;else if(l instanceof Int8Array)f=r.BYTE;else if(l instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){const u=c.array,h=c._updateRange,p=c.updateRanges;if(r.bindBuffer(l,o),h.count===-1&&p.length===0&&r.bufferSubData(l,0,u),p.length!==0){for(let f=0,m=p.length;f<m;f++){const g=p[f];r.bufferSubData(l,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}c.clearUpdateRanges()}h.count!==-1&&(r.bufferSubData(l,h.offset*u.BYTES_PER_ELEMENT,u,h.offset,h.count),h.count=-1),c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(r.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:s,update:a}}class PlaneGeometry extends BufferGeometry{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,u=c+1,h=e/o,p=t/c,f=[],m=[],g=[],v=[];for(let _=0;_<u;_++){const L=_*p-a;for(let x=0;x<l;x++){const M=x*h-s;m.push(M,-L,0),g.push(0,0,1),v.push(x/o),v.push(1-_/c)}}for(let _=0;_<c;_++)for(let L=0;L<o;L++){const x=L+l*_,M=L+l*(_+1),R=L+1+l*(_+1),D=L+1+l*_;f.push(x,M,D),f.push(M,R,D)}this.setIndex(f),this.setAttribute("position",new Float32BufferAttribute(m,3)),this.setAttribute("normal",new Float32BufferAttribute(g,3)),this.setAttribute("uv",new Float32BufferAttribute(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new PlaneGeometry(e.width,e.height,e.widthSegments,e.heightSegments)}}var alphahash_fragment=`#ifdef USE_ALPHAHASH
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
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,batching_vertex=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
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
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
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
}`,lightmap_fragment=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,lightmap_pars_fragment=`#ifdef USE_LIGHTMAP
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
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
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,morphtarget_pars_vertex=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
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
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,morphtarget_vertex=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
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
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
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
		return shadow;
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, newPeak * vec3(1, 1, 1), g);
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
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
}`,ShaderChunk={alphahash_fragment,alphahash_pars_fragment,alphamap_fragment,alphamap_pars_fragment,alphatest_fragment,alphatest_pars_fragment,aomap_fragment,aomap_pars_fragment,batching_pars_vertex,batching_vertex,begin_vertex,beginnormal_vertex,bsdfs,iridescence_fragment,bumpmap_pars_fragment,clipping_planes_fragment,clipping_planes_pars_fragment,clipping_planes_pars_vertex,clipping_planes_vertex,color_fragment,color_pars_fragment,color_pars_vertex,color_vertex,common,cube_uv_reflection_fragment,defaultnormal_vertex,displacementmap_pars_vertex,displacementmap_vertex,emissivemap_fragment,emissivemap_pars_fragment,colorspace_fragment,colorspace_pars_fragment,envmap_fragment,envmap_common_pars_fragment,envmap_pars_fragment,envmap_pars_vertex,envmap_physical_pars_fragment,envmap_vertex,fog_vertex,fog_pars_vertex,fog_fragment,fog_pars_fragment,gradientmap_pars_fragment,lightmap_fragment,lightmap_pars_fragment,lights_lambert_fragment,lights_lambert_pars_fragment,lights_pars_begin,lights_toon_fragment,lights_toon_pars_fragment,lights_phong_fragment,lights_phong_pars_fragment,lights_physical_fragment,lights_physical_pars_fragment,lights_fragment_begin,lights_fragment_maps,lights_fragment_end,logdepthbuf_fragment,logdepthbuf_pars_fragment,logdepthbuf_pars_vertex,logdepthbuf_vertex,map_fragment,map_pars_fragment,map_particle_fragment,map_particle_pars_fragment,metalnessmap_fragment,metalnessmap_pars_fragment,morphinstance_vertex,morphcolor_vertex,morphnormal_vertex,morphtarget_pars_vertex,morphtarget_vertex,normal_fragment_begin,normal_fragment_maps,normal_pars_fragment,normal_pars_vertex,normal_vertex,normalmap_pars_fragment,clearcoat_normal_fragment_begin,clearcoat_normal_fragment_maps,clearcoat_pars_fragment,iridescence_pars_fragment,opaque_fragment,packing,premultiplied_alpha_fragment,project_vertex,dithering_fragment,dithering_pars_fragment,roughnessmap_fragment,roughnessmap_pars_fragment,shadowmap_pars_fragment,shadowmap_pars_vertex,shadowmap_vertex,shadowmask_pars_fragment,skinbase_vertex,skinning_pars_vertex,skinning_vertex,skinnormal_vertex,specularmap_fragment,specularmap_pars_fragment,tonemapping_fragment,tonemapping_pars_fragment,transmission_fragment,transmission_pars_fragment,uv_pars_fragment,uv_pars_vertex,uv_vertex,worldpos_vertex,background_vert:vertex$h,background_frag:fragment$h,backgroundCube_vert:vertex$g,backgroundCube_frag:fragment$g,cube_vert:vertex$f,cube_frag:fragment$f,depth_vert:vertex$e,depth_frag:fragment$e,distanceRGBA_vert:vertex$d,distanceRGBA_frag:fragment$d,equirect_vert:vertex$c,equirect_frag:fragment$c,linedashed_vert:vertex$b,linedashed_frag:fragment$b,meshbasic_vert:vertex$a,meshbasic_frag:fragment$a,meshlambert_vert:vertex$9,meshlambert_frag:fragment$9,meshmatcap_vert:vertex$8,meshmatcap_frag:fragment$8,meshnormal_vert:vertex$7,meshnormal_frag:fragment$7,meshphong_vert:vertex$6,meshphong_frag:fragment$6,meshphysical_vert:vertex$5,meshphysical_frag:fragment$5,meshtoon_vert:vertex$4,meshtoon_frag:fragment$4,points_vert:vertex$3,points_frag:fragment$3,shadow_vert:vertex$2,shadow_frag:fragment$2,sprite_vert:vertex$1,sprite_frag:fragment$1},UniformsLib={common:{diffuse:{value:new Color(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Matrix3},alphaMap:{value:null},alphaMapTransform:{value:new Matrix3},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Matrix3}},envmap:{envMap:{value:null},envMapRotation:{value:new Matrix3},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Matrix3}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Matrix3}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Matrix3},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Matrix3},normalScale:{value:new Vector2(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Matrix3},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Matrix3}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Matrix3}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Matrix3}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Color(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Color(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Matrix3},alphaTest:{value:0},uvTransform:{value:new Matrix3}},sprite:{diffuse:{value:new Color(16777215)},opacity:{value:1},center:{value:new Vector2(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Matrix3},alphaMap:{value:null},alphaMapTransform:{value:new Matrix3},alphaTest:{value:0}}},ShaderLib={basic:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.specularmap,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.fog]),vertexShader:ShaderChunk.meshbasic_vert,fragmentShader:ShaderChunk.meshbasic_frag},lambert:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.specularmap,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color(0)}}]),vertexShader:ShaderChunk.meshlambert_vert,fragmentShader:ShaderChunk.meshlambert_frag},phong:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.specularmap,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color(0)},specular:{value:new Color(1118481)},shininess:{value:30}}]),vertexShader:ShaderChunk.meshphong_vert,fragmentShader:ShaderChunk.meshphong_frag},standard:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.roughnessmap,UniformsLib.metalnessmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ShaderChunk.meshphysical_vert,fragmentShader:ShaderChunk.meshphysical_frag},toon:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.gradientmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color(0)}}]),vertexShader:ShaderChunk.meshtoon_vert,fragmentShader:ShaderChunk.meshtoon_frag},matcap:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.fog,{matcap:{value:null}}]),vertexShader:ShaderChunk.meshmatcap_vert,fragmentShader:ShaderChunk.meshmatcap_frag},points:{uniforms:mergeUniforms([UniformsLib.points,UniformsLib.fog]),vertexShader:ShaderChunk.points_vert,fragmentShader:ShaderChunk.points_frag},dashed:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ShaderChunk.linedashed_vert,fragmentShader:ShaderChunk.linedashed_frag},depth:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.displacementmap]),vertexShader:ShaderChunk.depth_vert,fragmentShader:ShaderChunk.depth_frag},normal:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,{opacity:{value:1}}]),vertexShader:ShaderChunk.meshnormal_vert,fragmentShader:ShaderChunk.meshnormal_frag},sprite:{uniforms:mergeUniforms([UniformsLib.sprite,UniformsLib.fog]),vertexShader:ShaderChunk.sprite_vert,fragmentShader:ShaderChunk.sprite_frag},background:{uniforms:{uvTransform:{value:new Matrix3},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ShaderChunk.background_vert,fragmentShader:ShaderChunk.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Matrix3}},vertexShader:ShaderChunk.backgroundCube_vert,fragmentShader:ShaderChunk.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ShaderChunk.cube_vert,fragmentShader:ShaderChunk.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ShaderChunk.equirect_vert,fragmentShader:ShaderChunk.equirect_frag},distanceRGBA:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.displacementmap,{referencePosition:{value:new Vector3},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ShaderChunk.distanceRGBA_vert,fragmentShader:ShaderChunk.distanceRGBA_frag},shadow:{uniforms:mergeUniforms([UniformsLib.lights,UniformsLib.fog,{color:{value:new Color(0)},opacity:{value:1}}]),vertexShader:ShaderChunk.shadow_vert,fragmentShader:ShaderChunk.shadow_frag}};ShaderLib.physical={uniforms:mergeUniforms([ShaderLib.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Matrix3},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Matrix3},clearcoatNormalScale:{value:new Vector2(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Matrix3},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Matrix3},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Matrix3},sheen:{value:0},sheenColor:{value:new Color(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Matrix3},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Matrix3},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Matrix3},transmissionSamplerSize:{value:new Vector2},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Matrix3},attenuationDistance:{value:0},attenuationColor:{value:new Color(0)},specularColor:{value:new Color(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Matrix3},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Matrix3},anisotropyVector:{value:new Vector2},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Matrix3}}]),vertexShader:ShaderChunk.meshphysical_vert,fragmentShader:ShaderChunk.meshphysical_frag};const _rgb={r:0,b:0,g:0},_e1$1=new Euler,_m1$1=new Matrix4;function WebGLBackground(r,e,t,n,i,s,a){const o=new Color(0);let c=s===!0?0:1,l,u,h=null,p=0,f=null;function m(v,_){let L=!1,x=_.isScene===!0?_.background:null;x&&x.isTexture&&(x=(_.backgroundBlurriness>0?t:e).get(x)),x===null?g(o,c):x&&x.isColor&&(g(x,1),L=!0);const M=r.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||L)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),x&&(x.isCubeTexture||x.mapping===CubeUVReflectionMapping)?(u===void 0&&(u=new Mesh(new BoxGeometry(1,1,1),new ShaderMaterial({name:"BackgroundCubeMaterial",uniforms:cloneUniforms(ShaderLib.backgroundCube.uniforms),vertexShader:ShaderLib.backgroundCube.vertexShader,fragmentShader:ShaderLib.backgroundCube.fragmentShader,side:BackSide,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,D,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),_e1$1.copy(_.backgroundRotation),_e1$1.x*=-1,_e1$1.y*=-1,_e1$1.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(_e1$1.y*=-1,_e1$1.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(_m1$1.makeRotationFromEuler(_e1$1)),u.material.toneMapped=ColorManagement.getTransfer(x.colorSpace)!==SRGBTransfer,(h!==x||p!==x.version||f!==r.toneMapping)&&(u.material.needsUpdate=!0,h=x,p=x.version,f=r.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Mesh(new PlaneGeometry(2,2),new ShaderMaterial({name:"BackgroundMaterial",uniforms:cloneUniforms(ShaderLib.background.uniforms),vertexShader:ShaderLib.background.vertexShader,fragmentShader:ShaderLib.background.fragmentShader,side:FrontSide,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=ColorManagement.getTransfer(x.colorSpace)!==SRGBTransfer,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||p!==x.version||f!==r.toneMapping)&&(l.material.needsUpdate=!0,h=x,p=x.version,f=r.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function g(v,_){v.getRGB(_rgb,getUnlitUniformColorSpace(r)),n.buffers.color.setClear(_rgb.r,_rgb.g,_rgb.b,_,a)}return{getClearColor:function(){return o},setClearColor:function(v,_=1){o.set(v),c=_,g(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,g(o,c)},render:m}}function WebGLBindingStates(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=p(null);let s=i,a=!1;function o(E,O,$,H,te){let de=!1;const ve=h(H,$,O);s!==ve&&(s=ve,l(s.object)),de=f(E,H,$,te),de&&m(E,H,$,te),te!==null&&e.update(te,r.ELEMENT_ARRAY_BUFFER),(de||a)&&(a=!1,M(E,O,$,H),te!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(te).buffer))}function c(){return r.createVertexArray()}function l(E){return r.bindVertexArray(E)}function u(E){return r.deleteVertexArray(E)}function h(E,O,$){const H=$.wireframe===!0;let te=n[E.id];te===void 0&&(te={},n[E.id]=te);let de=te[O.id];de===void 0&&(de={},te[O.id]=de);let ve=de[H];return ve===void 0&&(ve=p(c()),de[H]=ve),ve}function p(E){const O=[],$=[],H=[];for(let te=0;te<t;te++)O[te]=0,$[te]=0,H[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:$,attributeDivisors:H,object:E,attributes:{},index:null}}function f(E,O,$,H){const te=s.attributes,de=O.attributes;let ve=0;const ge=$.getAttributes();for(const q in ge)if(ge[q].location>=0){const j=te[q];let ce=de[q];if(ce===void 0&&(q==="instanceMatrix"&&E.instanceMatrix&&(ce=E.instanceMatrix),q==="instanceColor"&&E.instanceColor&&(ce=E.instanceColor)),j===void 0||j.attribute!==ce||ce&&j.data!==ce.data)return!0;ve++}return s.attributesNum!==ve||s.index!==H}function m(E,O,$,H){const te={},de=O.attributes;let ve=0;const ge=$.getAttributes();for(const q in ge)if(ge[q].location>=0){let j=de[q];j===void 0&&(q==="instanceMatrix"&&E.instanceMatrix&&(j=E.instanceMatrix),q==="instanceColor"&&E.instanceColor&&(j=E.instanceColor));const ce={};ce.attribute=j,j&&j.data&&(ce.data=j.data),te[q]=ce,ve++}s.attributes=te,s.attributesNum=ve,s.index=H}function g(){const E=s.newAttributes;for(let O=0,$=E.length;O<$;O++)E[O]=0}function v(E){_(E,0)}function _(E,O){const $=s.newAttributes,H=s.enabledAttributes,te=s.attributeDivisors;$[E]=1,H[E]===0&&(r.enableVertexAttribArray(E),H[E]=1),te[E]!==O&&(r.vertexAttribDivisor(E,O),te[E]=O)}function L(){const E=s.newAttributes,O=s.enabledAttributes;for(let $=0,H=O.length;$<H;$++)O[$]!==E[$]&&(r.disableVertexAttribArray($),O[$]=0)}function x(E,O,$,H,te,de,ve){ve===!0?r.vertexAttribIPointer(E,O,$,te,de):r.vertexAttribPointer(E,O,$,H,te,de)}function M(E,O,$,H){g();const te=H.attributes,de=$.getAttributes(),ve=O.defaultAttributeValues;for(const ge in de){const q=de[ge];if(q.location>=0){let F=te[ge];if(F===void 0&&(ge==="instanceMatrix"&&E.instanceMatrix&&(F=E.instanceMatrix),ge==="instanceColor"&&E.instanceColor&&(F=E.instanceColor)),F!==void 0){const j=F.normalized,ce=F.itemSize,pe=e.get(F);if(pe===void 0)continue;const _e=pe.buffer,he=pe.type,N=pe.bytesPerElement,w=he===r.INT||he===r.UNSIGNED_INT||F.gpuType===IntType;if(F.isInterleavedBufferAttribute){const G=F.data,ae=G.stride,Q=F.offset;if(G.isInstancedInterleavedBuffer){for(let ie=0;ie<q.locationSize;ie++)_(q.location+ie,G.meshPerAttribute);E.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let ie=0;ie<q.locationSize;ie++)v(q.location+ie);r.bindBuffer(r.ARRAY_BUFFER,_e);for(let ie=0;ie<q.locationSize;ie++)x(q.location+ie,ce/q.locationSize,he,j,ae*N,(Q+ce/q.locationSize*ie)*N,w)}else{if(F.isInstancedBufferAttribute){for(let G=0;G<q.locationSize;G++)_(q.location+G,F.meshPerAttribute);E.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let G=0;G<q.locationSize;G++)v(q.location+G);r.bindBuffer(r.ARRAY_BUFFER,_e);for(let G=0;G<q.locationSize;G++)x(q.location+G,ce/q.locationSize,he,j,ce*N,ce/q.locationSize*G*N,w)}}else if(ve!==void 0){const j=ve[ge];if(j!==void 0)switch(j.length){case 2:r.vertexAttrib2fv(q.location,j);break;case 3:r.vertexAttrib3fv(q.location,j);break;case 4:r.vertexAttrib4fv(q.location,j);break;default:r.vertexAttrib1fv(q.location,j)}}}}L()}function R(){y();for(const E in n){const O=n[E];for(const $ in O){const H=O[$];for(const te in H)u(H[te].object),delete H[te];delete O[$]}delete n[E]}}function D(E){if(n[E.id]===void 0)return;const O=n[E.id];for(const $ in O){const H=O[$];for(const te in H)u(H[te].object),delete H[te];delete O[$]}delete n[E.id]}function I(E){for(const O in n){const $=n[O];if($[E.id]===void 0)continue;const H=$[E.id];for(const te in H)u(H[te].object),delete H[te];delete $[E.id]}}function y(){S(),a=!0,s!==i&&(s=i,l(s.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:y,resetDefaultState:S,dispose:R,releaseStatesOfGeometry:D,releaseStatesOfProgram:I,initAttributes:g,enableAttribute:v,disableUnusedAttributes:L}}function WebGLBufferRenderer(r,e,t){let n;function i(c){n=c}function s(c,l){r.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,u){u!==0&&(r.drawArraysInstanced(n,c,l,u),t.update(l,n,u))}function o(c,l,u){if(u===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let p=0;p<u;p++)this.render(c[p],l[p]);else{h.multiDrawArraysWEBGL(n,c,0,l,0,u);let p=0;for(let f=0;f<u;f++)p+=l[f];t.update(p,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function WebGLCapabilities(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const x=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(x){if(x==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=t.precision!==void 0?t.precision:"highp";const o=s(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);const c=t.logarithmicDepthBuffer===!0,l=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),u=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),f=r.getParameter(r.MAX_VERTEX_ATTRIBS),m=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),g=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),_=u>0,L=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:l,maxVertexTextures:u,maxTextureSize:h,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:m,maxVaryings:g,maxFragmentUniforms:v,vertexTextures:_,maxSamples:L}}function WebGLClipping(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new Plane,o=new Matrix3,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,p){const f=h.length!==0||p||n!==0||i;return i=p,n=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,p){t=u(h,p,0)},this.setState=function(h,p,f){const m=h.clippingPlanes,g=h.clipIntersection,v=h.clipShadows,_=r.get(h);if(!i||m===null||m.length===0||s&&!v)s?u(null):l();else{const L=s?0:n,x=L*4;let M=_.clippingState||null;c.value=M,M=u(m,p,x,f);for(let R=0;R!==x;++R)M[R]=t[R];_.clippingState=M,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=L}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,p,f,m){const g=h!==null?h.length:0;let v=null;if(g!==0){if(v=c.value,m!==!0||v===null){const _=f+g*4,L=p.matrixWorldInverse;o.getNormalMatrix(L),(v===null||v.length<_)&&(v=new Float32Array(_));for(let x=0,M=f;x!==g;++x,M+=4)a.copy(h[x]).applyMatrix4(L,o),a.normal.toArray(v,M),v[M+3]=a.constant}c.value=v,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,v}}function WebGLCubeMaps(r){let e=new WeakMap;function t(a,o){return o===EquirectangularReflectionMapping?a.mapping=CubeReflectionMapping:o===EquirectangularRefractionMapping&&(a.mapping=CubeRefractionMapping),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===EquirectangularReflectionMapping||o===EquirectangularRefractionMapping)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new WebGLCubeRenderTarget(c.height);return l.fromEquirectangularTexture(r,a),e.set(a,l),a.addEventListener("dispose",i),t(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class OrthographicCamera extends Camera{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const LOD_MIN=4,EXTRA_LOD_SIGMA=[.125,.215,.35,.446,.526,.582],MAX_SAMPLES=20,_flatCamera=new OrthographicCamera,_clearColor=new Color;let _oldTarget=null,_oldActiveCubeFace=0,_oldActiveMipmapLevel=0,_oldXrEnabled=!1;const PHI=(1+Math.sqrt(5))/2,INV_PHI=1/PHI,_axisDirections=[new Vector3(1,1,1),new Vector3(-1,1,1),new Vector3(1,1,-1),new Vector3(-1,1,-1),new Vector3(0,PHI,INV_PHI),new Vector3(0,PHI,-INV_PHI),new Vector3(INV_PHI,0,PHI),new Vector3(-INV_PHI,0,PHI),new Vector3(PHI,INV_PHI,0),new Vector3(-PHI,INV_PHI,0)];class PMREMGenerator{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){_oldTarget=this._renderer.getRenderTarget(),_oldActiveCubeFace=this._renderer.getActiveCubeFace(),_oldActiveMipmapLevel=this._renderer.getActiveMipmapLevel(),_oldXrEnabled=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_getCubemapMaterial(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_getEquirectMaterial(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_oldTarget,_oldActiveCubeFace,_oldActiveMipmapLevel),this._renderer.xr.enabled=_oldXrEnabled,e.scissorTest=!1,_setViewport(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===CubeReflectionMapping||e.mapping===CubeRefractionMapping?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_oldTarget=this._renderer.getRenderTarget(),_oldActiveCubeFace=this._renderer.getActiveCubeFace(),_oldActiveMipmapLevel=this._renderer.getActiveMipmapLevel(),_oldXrEnabled=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:LinearFilter,minFilter:LinearFilter,generateMipmaps:!1,type:HalfFloatType,format:RGBAFormat,colorSpace:LinearSRGBColorSpace,depthBuffer:!1},i=_createRenderTarget(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_createRenderTarget(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_createPlanes(s)),this._blurMaterial=_getBlurShader(s,e,t)}return i}_compileMaterial(e){const t=new Mesh(this._lodPlanes[0],e);this._renderer.compile(t,_flatCamera)}_sceneToCubeUV(e,t,n,i){const o=new PerspectiveCamera(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,p=u.toneMapping;u.getClearColor(_clearColor),u.toneMapping=NoToneMapping,u.autoClear=!1;const f=new MeshBasicMaterial({name:"PMREM.Background",side:BackSide,depthWrite:!1,depthTest:!1}),m=new Mesh(new BoxGeometry,f);let g=!1;const v=e.background;v?v.isColor&&(f.color.copy(v),e.background=null,g=!0):(f.color.copy(_clearColor),g=!0);for(let _=0;_<6;_++){const L=_%3;L===0?(o.up.set(0,c[_],0),o.lookAt(l[_],0,0)):L===1?(o.up.set(0,0,c[_]),o.lookAt(0,l[_],0)):(o.up.set(0,c[_],0),o.lookAt(0,0,l[_]));const x=this._cubeSize;_setViewport(i,L*x,_>2?x:0,x,x),u.setRenderTarget(i),g&&u.render(m,o),u.render(e,o)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=p,u.autoClear=h,e.background=v}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===CubeReflectionMapping||e.mapping===CubeRefractionMapping;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=_getCubemapMaterial()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_getEquirectMaterial());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new Mesh(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;_setViewport(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,_flatCamera)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=_axisDirections[(i-1)%_axisDirections.length];this._blur(e,i-1,i,s,a)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Mesh(this._lodPlanes[i],l),p=l.uniforms,f=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*MAX_SAMPLES-1),g=s/m,v=isFinite(s)?1+Math.floor(u*g):MAX_SAMPLES;v>MAX_SAMPLES&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${MAX_SAMPLES}`);const _=[];let L=0;for(let I=0;I<MAX_SAMPLES;++I){const y=I/g,S=Math.exp(-y*y/2);_.push(S),I===0?L+=S:I<v&&(L+=2*S)}for(let I=0;I<_.length;I++)_[I]=_[I]/L;p.envMap.value=e.texture,p.samples.value=v,p.weights.value=_,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:x}=this;p.dTheta.value=m,p.mipInt.value=x-n;const M=this._sizeLods[i],R=3*M*(i>x-LOD_MIN?i-x+LOD_MIN:0),D=4*(this._cubeSize-M);_setViewport(t,R,D,3*M,2*M),c.setRenderTarget(t),c.render(h,_flatCamera)}}function _createPlanes(r){const e=[],t=[],n=[];let i=r;const s=r-LOD_MIN+1+EXTRA_LOD_SIGMA.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let c=1/o;a>r-LOD_MIN?c=EXTRA_LOD_SIGMA[a-r+LOD_MIN-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),u=-l,h=1+l,p=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,m=6,g=3,v=2,_=1,L=new Float32Array(g*m*f),x=new Float32Array(v*m*f),M=new Float32Array(_*m*f);for(let D=0;D<f;D++){const I=D%3*2/3-1,y=D>2?0:-1,S=[I,y,0,I+2/3,y,0,I+2/3,y+1,0,I,y,0,I+2/3,y+1,0,I,y+1,0];L.set(S,g*m*D),x.set(p,v*m*D);const E=[D,D,D,D,D,D];M.set(E,_*m*D)}const R=new BufferGeometry;R.setAttribute("position",new BufferAttribute(L,g)),R.setAttribute("uv",new BufferAttribute(x,v)),R.setAttribute("faceIndex",new BufferAttribute(M,_)),e.push(R),i>LOD_MIN&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function _createRenderTarget(r,e,t){const n=new WebGLRenderTarget(r,e,t);return n.texture.mapping=CubeUVReflectionMapping,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function _setViewport(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function _getBlurShader(r,e,t){const n=new Float32Array(MAX_SAMPLES),i=new Vector3(0,1,0);return new ShaderMaterial({name:"SphericalGaussianBlur",defines:{n:MAX_SAMPLES,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:_getCommonVertexShader(),fragmentShader:`

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
	`}function WebGLCubeUVMaps(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===EquirectangularReflectionMapping||c===EquirectangularRefractionMapping,u=c===CubeReflectionMapping||c===CubeRefractionMapping;if(l||u){let h=e.get(o);const p=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return t===null&&(t=new PMREMGenerator(r)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const f=o.image;return l&&f&&f.height>0||u&&f&&i(f)?(t===null&&(t=new PMREMGenerator(r)),h=l?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function i(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function WebGLExtensions(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function WebGLGeometries(r,e,t,n){const i={},s=new WeakMap;function a(h){const p=h.target;p.index!==null&&e.remove(p.index);for(const m in p.attributes)e.remove(p.attributes[m]);for(const m in p.morphAttributes){const g=p.morphAttributes[m];for(let v=0,_=g.length;v<_;v++)e.remove(g[v])}p.removeEventListener("dispose",a),delete i[p.id];const f=s.get(p);f&&(e.remove(f),s.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function o(h,p){return i[p.id]===!0||(p.addEventListener("dispose",a),i[p.id]=!0,t.memory.geometries++),p}function c(h){const p=h.attributes;for(const m in p)e.update(p[m],r.ARRAY_BUFFER);const f=h.morphAttributes;for(const m in f){const g=f[m];for(let v=0,_=g.length;v<_;v++)e.update(g[v],r.ARRAY_BUFFER)}}function l(h){const p=[],f=h.index,m=h.attributes.position;let g=0;if(f!==null){const L=f.array;g=f.version;for(let x=0,M=L.length;x<M;x+=3){const R=L[x+0],D=L[x+1],I=L[x+2];p.push(R,D,D,I,I,R)}}else if(m!==void 0){const L=m.array;g=m.version;for(let x=0,M=L.length/3-1;x<M;x+=3){const R=x+0,D=x+1,I=x+2;p.push(R,D,D,I,I,R)}}else return;const v=new(arrayNeedsUint32(p)?Uint32BufferAttribute:Uint16BufferAttribute)(p,1);v.version=g;const _=s.get(h);_&&e.remove(_),s.set(h,v)}function u(h){const p=s.get(h);if(p){const f=h.index;f!==null&&p.version<f.version&&l(h)}else l(h);return s.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function WebGLIndexedBufferRenderer(r,e,t){let n;function i(h){n=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function c(h,p){r.drawElements(n,p,s,h*a),t.update(p,n,1)}function l(h,p,f){f!==0&&(r.drawElementsInstanced(n,p,s,h*a,f),t.update(p,n,f))}function u(h,p,f){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<f;g++)this.render(h[g]/a,p[g]);else{m.multiDrawElementsWEBGL(n,p,0,s,h,0,f);let g=0;for(let v=0;v<f;v++)g+=p[v];t.update(g,n,1)}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function WebGLInfo(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function WebGLMorphtargets(r,e,t){const n=new WeakMap,i=new Vector4;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let p=n.get(o);if(p===void 0||p.count!==h){let E=function(){y.dispose(),n.delete(o),o.removeEventListener("dispose",E)};var f=E;p!==void 0&&p.texture.dispose();const m=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,_=o.morphAttributes.position||[],L=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let M=0;m===!0&&(M=1),g===!0&&(M=2),v===!0&&(M=3);let R=o.attributes.position.count*M,D=1;R>e.maxTextureSize&&(D=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const I=new Float32Array(R*D*4*h),y=new DataArrayTexture(I,R,D,h);y.type=FloatType,y.needsUpdate=!0;const S=M*4;for(let O=0;O<h;O++){const $=_[O],H=L[O],te=x[O],de=R*D*4*O;for(let ve=0;ve<$.count;ve++){const ge=ve*S;m===!0&&(i.fromBufferAttribute($,ve),I[de+ge+0]=i.x,I[de+ge+1]=i.y,I[de+ge+2]=i.z,I[de+ge+3]=0),g===!0&&(i.fromBufferAttribute(H,ve),I[de+ge+4]=i.x,I[de+ge+5]=i.y,I[de+ge+6]=i.z,I[de+ge+7]=0),v===!0&&(i.fromBufferAttribute(te,ve),I[de+ge+8]=i.x,I[de+ge+9]=i.y,I[de+ge+10]=i.z,I[de+ge+11]=te.itemSize===4?i.w:1)}}p={count:h,texture:y,size:new Vector2(R,D)},n.set(o,p),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let m=0;for(let v=0;v<l.length;v++)m+=l[v];const g=o.morphTargetsRelative?1:1-m;c.getUniforms().setValue(r,"morphTargetBaseInfluence",g),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",p.texture,t),c.getUniforms().setValue(r,"morphTargetsTextureSize",p.size)}return{update:s}}function WebGLObjects(r,e,t,n){let i=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(i.get(h)!==l&&(e.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const p=c.skeleton;i.get(p)!==l&&(p.update(),i.set(p,l))}return h}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}class DepthTexture extends Texture{constructor(e,t,n,i,s,a,o,c,l,u){if(u=u!==void 0?u:DepthFormat,u!==DepthFormat&&u!==DepthStencilFormat)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===DepthFormat&&(n=UnsignedIntType),n===void 0&&u===DepthStencilFormat&&(n=UnsignedInt248Type),super(null,i,s,a,o,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:NearestFilter,this.minFilter=c!==void 0?c:NearestFilter,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const emptyTexture=new Texture,emptyShadowTexture=new DepthTexture(1,1);emptyShadowTexture.compareFunction=LessEqualCompare;const emptyArrayTexture=new DataArrayTexture,empty3dTexture=new Data3DTexture,emptyCubeTexture=new CubeTexture,arrayCacheF32=[],arrayCacheI32=[],mat4array=new Float32Array(16),mat3array=new Float32Array(9),mat2array=new Float32Array(4);function flatten(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=arrayCacheF32[i];if(s===void 0&&(s=new Float32Array(i),arrayCacheF32[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function arraysEqual(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function copyArray(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function allocTexUnits(r,e){let t=arrayCacheI32[e];t===void 0&&(t=new Int32Array(e),arrayCacheI32[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function setValueV1f(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function setValueV2f(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(arraysEqual(t,e))return;r.uniform2fv(this.addr,e),copyArray(t,e)}}function setValueV3f(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(arraysEqual(t,e))return;r.uniform3fv(this.addr,e),copyArray(t,e)}}function setValueV4f(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(arraysEqual(t,e))return;r.uniform4fv(this.addr,e),copyArray(t,e)}}function setValueM2(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(arraysEqual(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),copyArray(t,e)}else{if(arraysEqual(t,n))return;mat2array.set(n),r.uniformMatrix2fv(this.addr,!1,mat2array),copyArray(t,n)}}function setValueM3(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(arraysEqual(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),copyArray(t,e)}else{if(arraysEqual(t,n))return;mat3array.set(n),r.uniformMatrix3fv(this.addr,!1,mat3array),copyArray(t,n)}}function setValueM4(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(arraysEqual(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),copyArray(t,e)}else{if(arraysEqual(t,n))return;mat4array.set(n),r.uniformMatrix4fv(this.addr,!1,mat4array),copyArray(t,n)}}function setValueV1i(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function setValueV2i(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(arraysEqual(t,e))return;r.uniform2iv(this.addr,e),copyArray(t,e)}}function setValueV3i(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(arraysEqual(t,e))return;r.uniform3iv(this.addr,e),copyArray(t,e)}}function setValueV4i(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(arraysEqual(t,e))return;r.uniform4iv(this.addr,e),copyArray(t,e)}}function setValueV1ui(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function setValueV2ui(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(arraysEqual(t,e))return;r.uniform2uiv(this.addr,e),copyArray(t,e)}}function setValueV3ui(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(arraysEqual(t,e))return;r.uniform3uiv(this.addr,e),copyArray(t,e)}}function setValueV4ui(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(arraysEqual(t,e))return;r.uniform4uiv(this.addr,e),copyArray(t,e)}}function setValueT1(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const s=this.type===r.SAMPLER_2D_SHADOW?emptyShadowTexture:emptyTexture;t.setTexture2D(e||s,i)}function setValueT3D1(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||empty3dTexture,i)}function setValueT6(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||emptyCubeTexture,i)}function setValueT2DArray1(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||emptyArrayTexture,i)}function getSingularSetter(r){switch(r){case 5126:return setValueV1f;case 35664:return setValueV2f;case 35665:return setValueV3f;case 35666:return setValueV4f;case 35674:return setValueM2;case 35675:return setValueM3;case 35676:return setValueM4;case 5124:case 35670:return setValueV1i;case 35667:case 35671:return setValueV2i;case 35668:case 35672:return setValueV3i;case 35669:case 35673:return setValueV4i;case 5125:return setValueV1ui;case 36294:return setValueV2ui;case 36295:return setValueV3ui;case 36296:return setValueV4ui;case 35678:case 36198:case 36298:case 36306:case 35682:return setValueT1;case 35679:case 36299:case 36307:return setValueT3D1;case 35680:case 36300:case 36308:case 36293:return setValueT6;case 36289:case 36303:case 36311:case 36292:return setValueT2DArray1}}function setValueV1fArray(r,e){r.uniform1fv(this.addr,e)}function setValueV2fArray(r,e){const t=flatten(e,this.size,2);r.uniform2fv(this.addr,t)}function setValueV3fArray(r,e){const t=flatten(e,this.size,3);r.uniform3fv(this.addr,t)}function setValueV4fArray(r,e){const t=flatten(e,this.size,4);r.uniform4fv(this.addr,t)}function setValueM2Array(r,e){const t=flatten(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function setValueM3Array(r,e){const t=flatten(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function setValueM4Array(r,e){const t=flatten(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function setValueV1iArray(r,e){r.uniform1iv(this.addr,e)}function setValueV2iArray(r,e){r.uniform2iv(this.addr,e)}function setValueV3iArray(r,e){r.uniform3iv(this.addr,e)}function setValueV4iArray(r,e){r.uniform4iv(this.addr,e)}function setValueV1uiArray(r,e){r.uniform1uiv(this.addr,e)}function setValueV2uiArray(r,e){r.uniform2uiv(this.addr,e)}function setValueV3uiArray(r,e){r.uniform3uiv(this.addr,e)}function setValueV4uiArray(r,e){r.uniform4uiv(this.addr,e)}function setValueT1Array(r,e,t){const n=this.cache,i=e.length,s=allocTexUnits(t,i);arraysEqual(n,s)||(r.uniform1iv(this.addr,s),copyArray(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||emptyTexture,s[a])}function setValueT3DArray(r,e,t){const n=this.cache,i=e.length,s=allocTexUnits(t,i);arraysEqual(n,s)||(r.uniform1iv(this.addr,s),copyArray(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||empty3dTexture,s[a])}function setValueT6Array(r,e,t){const n=this.cache,i=e.length,s=allocTexUnits(t,i);arraysEqual(n,s)||(r.uniform1iv(this.addr,s),copyArray(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||emptyCubeTexture,s[a])}function setValueT2DArrayArray(r,e,t){const n=this.cache,i=e.length,s=allocTexUnits(t,i);arraysEqual(n,s)||(r.uniform1iv(this.addr,s),copyArray(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||emptyArrayTexture,s[a])}function getPureArraySetter(r){switch(r){case 5126:return setValueV1fArray;case 35664:return setValueV2fArray;case 35665:return setValueV3fArray;case 35666:return setValueV4fArray;case 35674:return setValueM2Array;case 35675:return setValueM3Array;case 35676:return setValueM4Array;case 5124:case 35670:return setValueV1iArray;case 35667:case 35671:return setValueV2iArray;case 35668:case 35672:return setValueV3iArray;case 35669:case 35673:return setValueV4iArray;case 5125:return setValueV1uiArray;case 36294:return setValueV2uiArray;case 36295:return setValueV3uiArray;case 36296:return setValueV4uiArray;case 35678:case 36198:case 36298:case 36306:case 35682:return setValueT1Array;case 35679:case 36299:case 36307:return setValueT3DArray;case 35680:case 36300:case 36308:case 36293:return setValueT6Array;case 36289:case 36303:case 36311:case 36292:return setValueT2DArrayArray}}class SingleUniform{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=getSingularSetter(t.type)}}class PureArrayUniform{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=getPureArraySetter(t.type)}}class StructuredUniform{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const RePathPart=/(\w+)(\])?(\[|\.)?/g;function addUniform(r,e){r.seq.push(e),r.map[e.id]=e}function parseUniform(r,e,t){const n=r.name,i=n.length;for(RePathPart.lastIndex=0;;){const s=RePathPart.exec(n),a=RePathPart.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){addUniform(t,l===void 0?new SingleUniform(o,r,e):new PureArrayUniform(o,r,e));break}else{let h=t.map[o];h===void 0&&(h=new StructuredUniform(o),addUniform(t,h)),t=h}}}class WebGLUniforms{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);parseUniform(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function WebGLShader(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const COMPLETION_STATUS_KHR=37297;let programIdCount=0;function handleSource(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function getEncodingComponents(r){const e=ColorManagement.getPrimaries(ColorManagement.workingColorSpace),t=ColorManagement.getPrimaries(r);let n;switch(e===t?n="":e===P3Primaries&&t===Rec709Primaries?n="LinearDisplayP3ToLinearSRGB":e===Rec709Primaries&&t===P3Primaries&&(n="LinearSRGBToLinearDisplayP3"),r){case LinearSRGBColorSpace:case LinearDisplayP3ColorSpace:return[n,"LinearTransferOETF"];case SRGBColorSpace:case DisplayP3ColorSpace:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function getShaderErrors(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+handleSource(r.getShaderSource(e),a)}else return i}function getTexelEncodingFunction(r,e){const t=getEncodingComponents(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function getToneMappingFunction(r,e){let t;switch(e){case LinearToneMapping:t="Linear";break;case ReinhardToneMapping:t="Reinhard";break;case CineonToneMapping:t="OptimizedCineon";break;case ACESFilmicToneMapping:t="ACESFilmic";break;case AgXToneMapping:t="AgX";break;case NeutralToneMapping:t="Neutral";break;case CustomToneMapping:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function generateVertexExtensions(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(filterEmptyLine).join(`
`)}function generateDefines(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function fetchAttributeLocations(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function filterEmptyLine(r){return r!==""}function replaceLightNums(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function replaceClippingPlaneNums(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const includePattern=/^[ \t]*#include +<([\w\d./]+)>/gm;function resolveIncludes(r){return r.replace(includePattern,includeReplacer)}const shaderChunkMap=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function includeReplacer(r,e){let t=ShaderChunk[e];if(t===void 0){const n=shaderChunkMap.get(e);if(n!==void 0)t=ShaderChunk[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return resolveIncludes(t)}const unrollLoopPattern=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function unrollLoops(r){return r.replace(unrollLoopPattern,loopReplacer)}function loopReplacer(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function generatePrecision(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function generateShadowMapTypeDefine(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===PCFShadowMap?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===PCFSoftShadowMap?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===VSMShadowMap&&(e="SHADOWMAP_TYPE_VSM"),e}function generateEnvMapTypeDefine(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case CubeReflectionMapping:case CubeRefractionMapping:e="ENVMAP_TYPE_CUBE";break;case CubeUVReflectionMapping:e="ENVMAP_TYPE_CUBE_UV";break}return e}function generateEnvMapModeDefine(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case CubeRefractionMapping:e="ENVMAP_MODE_REFRACTION";break}return e}function generateEnvMapBlendingDefine(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case MultiplyOperation:e="ENVMAP_BLENDING_MULTIPLY";break;case MixOperation:e="ENVMAP_BLENDING_MIX";break;case AddOperation:e="ENVMAP_BLENDING_ADD";break}return e}function generateCubeUVSize(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function WebGLProgram(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=generateShadowMapTypeDefine(t),l=generateEnvMapTypeDefine(t),u=generateEnvMapModeDefine(t),h=generateEnvMapBlendingDefine(t),p=generateCubeUVSize(t),f=generateVertexExtensions(t),m=generateDefines(s),g=i.createProgram();let v,_,L=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(filterEmptyLine).join(`
`),v.length>0&&(v+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(filterEmptyLine).join(`
`),_.length>0&&(_+=`
`)):(v=[generatePrecision(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(filterEmptyLine).join(`
`),_=[generatePrecision(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==NoToneMapping?"#define TONE_MAPPING":"",t.toneMapping!==NoToneMapping?ShaderChunk.tonemapping_pars_fragment:"",t.toneMapping!==NoToneMapping?getToneMappingFunction("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ShaderChunk.colorspace_pars_fragment,getTexelEncodingFunction("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(filterEmptyLine).join(`
`)),a=resolveIncludes(a),a=replaceLightNums(a,t),a=replaceClippingPlaneNums(a,t),o=resolveIncludes(o),o=replaceLightNums(o,t),o=replaceClippingPlaneNums(o,t),a=unrollLoops(a),o=unrollLoops(o),t.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,v=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,_=["#define varying in",t.glslVersion===GLSL3?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===GLSL3?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const x=L+v+a,M=L+_+o,R=WebGLShader(i,i.VERTEX_SHADER,x),D=WebGLShader(i,i.FRAGMENT_SHADER,M);i.attachShader(g,R),i.attachShader(g,D),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function I(O){if(r.debug.checkShaderErrors){const $=i.getProgramInfoLog(g).trim(),H=i.getShaderInfoLog(R).trim(),te=i.getShaderInfoLog(D).trim();let de=!0,ve=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(de=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,R,D);else{const ge=getShaderErrors(i,R,"vertex"),q=getShaderErrors(i,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+$+`
`+ge+`
`+q)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(H===""||te==="")&&(ve=!1);ve&&(O.diagnostics={runnable:de,programLog:$,vertexShader:{log:H,prefix:v},fragmentShader:{log:te,prefix:_}})}i.deleteShader(R),i.deleteShader(D),y=new WebGLUniforms(i,g),S=fetchAttributeLocations(i,g)}let y;this.getUniforms=function(){return y===void 0&&I(this),y};let S;this.getAttributes=function(){return S===void 0&&I(this),S};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(g,COMPLETION_STATUS_KHR)),E},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=programIdCount++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=R,this.fragmentShader=D,this}let _id$1=0;class WebGLShaderCache{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new WebGLShaderStage(e),t.set(e,n)),n}}class WebGLShaderStage{constructor(e){this.id=_id$1++,this.code=e,this.usedTimes=0}}function WebGLPrograms(r,e,t,n,i,s,a){const o=new Layers,c=new WebGLShaderCache,l=new Set,u=[],h=i.logarithmicDepthBuffer,p=i.vertexTextures;let f=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return l.add(S),S===0?"uv":`uv${S}`}function v(S,E,O,$,H){const te=$.fog,de=H.geometry,ve=S.isMeshStandardMaterial?$.environment:null,ge=(S.isMeshStandardMaterial?t:e).get(S.envMap||ve),q=ge&&ge.mapping===CubeUVReflectionMapping?ge.image.height:null,F=m[S.type];S.precision!==null&&(f=i.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const j=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,ce=j!==void 0?j.length:0;let pe=0;de.morphAttributes.position!==void 0&&(pe=1),de.morphAttributes.normal!==void 0&&(pe=2),de.morphAttributes.color!==void 0&&(pe=3);let _e,he,N,w;if(F){const Je=ShaderLib[F];_e=Je.vertexShader,he=Je.fragmentShader}else _e=S.vertexShader,he=S.fragmentShader,c.update(S),N=c.getVertexShaderID(S),w=c.getFragmentShaderID(S);const G=r.getRenderTarget(),ae=H.isInstancedMesh===!0,Q=H.isBatchedMesh===!0,ie=!!S.map,K=!!S.matcap,le=!!ge,fe=!!S.aoMap,Y=!!S.lightMap,ee=!!S.bumpMap,se=!!S.normalMap,X=!!S.displacementMap,z=!!S.emissiveMap,d=!!S.metalnessMap,b=!!S.roughnessMap,Z=S.anisotropy>0,J=S.clearcoat>0,ue=S.iridescence>0,oe=S.sheen>0,xe=S.transmission>0,Me=Z&&!!S.anisotropyMap,me=J&&!!S.clearcoatMap,ye=J&&!!S.clearcoatNormalMap,Te=J&&!!S.clearcoatRoughnessMap,Ce=ue&&!!S.iridescenceMap,Ee=ue&&!!S.iridescenceThicknessMap,Pe=oe&&!!S.sheenColorMap,Ue=oe&&!!S.sheenRoughnessMap,Fe=!!S.specularMap,Re=!!S.specularColorMap,Oe=!!S.specularIntensityMap,Ne=xe&&!!S.transmissionMap,re=xe&&!!S.thicknessMap,Le=!!S.gradientMap,De=!!S.alphaMap,Ie=S.alphaTest>0,Be=!!S.alphaHash,ze=!!S.extensions;let He=NoToneMapping;S.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(He=r.toneMapping);const $e={shaderID:F,shaderType:S.type,shaderName:S.name,vertexShader:_e,fragmentShader:he,defines:S.defines,customVertexShaderID:N,customFragmentShaderID:w,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Q,instancing:ae,instancingColor:ae&&H.instanceColor!==null,instancingMorph:ae&&H.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:G===null?r.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:LinearSRGBColorSpace,alphaToCoverage:!!S.alphaToCoverage,map:ie,matcap:K,envMap:le,envMapMode:le&&ge.mapping,envMapCubeUVHeight:q,aoMap:fe,lightMap:Y,bumpMap:ee,normalMap:se,displacementMap:p&&X,emissiveMap:z,normalMapObjectSpace:se&&S.normalMapType===ObjectSpaceNormalMap,normalMapTangentSpace:se&&S.normalMapType===TangentSpaceNormalMap,metalnessMap:d,roughnessMap:b,anisotropy:Z,anisotropyMap:Me,clearcoat:J,clearcoatMap:me,clearcoatNormalMap:ye,clearcoatRoughnessMap:Te,iridescence:ue,iridescenceMap:Ce,iridescenceThicknessMap:Ee,sheen:oe,sheenColorMap:Pe,sheenRoughnessMap:Ue,specularMap:Fe,specularColorMap:Re,specularIntensityMap:Oe,transmission:xe,transmissionMap:Ne,thicknessMap:re,gradientMap:Le,opaque:S.transparent===!1&&S.blending===NormalBlending&&S.alphaToCoverage===!1,alphaMap:De,alphaTest:Ie,alphaHash:Be,combine:S.combine,mapUv:ie&&g(S.map.channel),aoMapUv:fe&&g(S.aoMap.channel),lightMapUv:Y&&g(S.lightMap.channel),bumpMapUv:ee&&g(S.bumpMap.channel),normalMapUv:se&&g(S.normalMap.channel),displacementMapUv:X&&g(S.displacementMap.channel),emissiveMapUv:z&&g(S.emissiveMap.channel),metalnessMapUv:d&&g(S.metalnessMap.channel),roughnessMapUv:b&&g(S.roughnessMap.channel),anisotropyMapUv:Me&&g(S.anisotropyMap.channel),clearcoatMapUv:me&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:ye&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&g(S.sheenRoughnessMap.channel),specularMapUv:Fe&&g(S.specularMap.channel),specularColorMapUv:Re&&g(S.specularColorMap.channel),specularIntensityMapUv:Oe&&g(S.specularIntensityMap.channel),transmissionMapUv:Ne&&g(S.transmissionMap.channel),thicknessMapUv:re&&g(S.thicknessMap.channel),alphaMapUv:De&&g(S.alphaMap.channel),vertexTangents:!!de.attributes.tangent&&(se||Z),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!de.attributes.uv&&(ie||De),fog:!!te,useFog:S.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:H.isSkinnedMesh===!0,morphTargets:de.morphAttributes.position!==void 0,morphNormals:de.morphAttributes.normal!==void 0,morphColors:de.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:pe,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&O.length>0,shadowMapType:r.shadowMap.type,toneMapping:He,useLegacyLights:r._useLegacyLights,decodeVideoTexture:ie&&S.map.isVideoTexture===!0&&ColorManagement.getTransfer(S.map.colorSpace)===SRGBTransfer,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===DoubleSide,flipSided:S.side===BackSide,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:ze&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ze&&S.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return $e.vertexUv1s=l.has(1),$e.vertexUv2s=l.has(2),$e.vertexUv3s=l.has(3),l.clear(),$e}function _(S){const E=[];if(S.shaderID?E.push(S.shaderID):(E.push(S.customVertexShaderID),E.push(S.customFragmentShaderID)),S.defines!==void 0)for(const O in S.defines)E.push(O),E.push(S.defines[O]);return S.isRawShaderMaterial===!1&&(L(E,S),x(E,S),E.push(r.outputColorSpace)),E.push(S.customProgramCacheKey),E.join()}function L(S,E){S.push(E.precision),S.push(E.outputColorSpace),S.push(E.envMapMode),S.push(E.envMapCubeUVHeight),S.push(E.mapUv),S.push(E.alphaMapUv),S.push(E.lightMapUv),S.push(E.aoMapUv),S.push(E.bumpMapUv),S.push(E.normalMapUv),S.push(E.displacementMapUv),S.push(E.emissiveMapUv),S.push(E.metalnessMapUv),S.push(E.roughnessMapUv),S.push(E.anisotropyMapUv),S.push(E.clearcoatMapUv),S.push(E.clearcoatNormalMapUv),S.push(E.clearcoatRoughnessMapUv),S.push(E.iridescenceMapUv),S.push(E.iridescenceThicknessMapUv),S.push(E.sheenColorMapUv),S.push(E.sheenRoughnessMapUv),S.push(E.specularMapUv),S.push(E.specularColorMapUv),S.push(E.specularIntensityMapUv),S.push(E.transmissionMapUv),S.push(E.thicknessMapUv),S.push(E.combine),S.push(E.fogExp2),S.push(E.sizeAttenuation),S.push(E.morphTargetsCount),S.push(E.morphAttributeCount),S.push(E.numDirLights),S.push(E.numPointLights),S.push(E.numSpotLights),S.push(E.numSpotLightMaps),S.push(E.numHemiLights),S.push(E.numRectAreaLights),S.push(E.numDirLightShadows),S.push(E.numPointLightShadows),S.push(E.numSpotLightShadows),S.push(E.numSpotLightShadowsWithMaps),S.push(E.numLightProbes),S.push(E.shadowMapType),S.push(E.toneMapping),S.push(E.numClippingPlanes),S.push(E.numClipIntersection),S.push(E.depthPacking)}function x(S,E){o.disableAll(),E.supportsVertexTextures&&o.enable(0),E.instancing&&o.enable(1),E.instancingColor&&o.enable(2),E.instancingMorph&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),S.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.skinning&&o.enable(4),E.morphTargets&&o.enable(5),E.morphNormals&&o.enable(6),E.morphColors&&o.enable(7),E.premultipliedAlpha&&o.enable(8),E.shadowMapEnabled&&o.enable(9),E.useLegacyLights&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.alphaToCoverage&&o.enable(20),S.push(o.mask)}function M(S){const E=m[S.type];let O;if(E){const $=ShaderLib[E];O=UniformsUtils.clone($.uniforms)}else O=S.uniforms;return O}function R(S,E){let O;for(let $=0,H=u.length;$<H;$++){const te=u[$];if(te.cacheKey===E){O=te,++O.usedTimes;break}}return O===void 0&&(O=new WebGLProgram(r,E,S,s),u.push(O)),O}function D(S){if(--S.usedTimes===0){const E=u.indexOf(S);u[E]=u[u.length-1],u.pop(),S.destroy()}}function I(S){c.remove(S)}function y(){c.dispose()}return{getParameters:v,getProgramCacheKey:_,getUniforms:M,acquireProgram:R,releaseProgram:D,releaseShaderCache:I,programs:u,dispose:y}}function WebGLProperties(){let r=new WeakMap;function e(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function t(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function painterSortStable(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function reversePainterSortStable(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function WebGLRenderList(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(h,p,f,m,g,v){let _=r[e];return _===void 0?(_={id:h.id,object:h,geometry:p,material:f,groupOrder:m,renderOrder:h.renderOrder,z:g,group:v},r[e]=_):(_.id=h.id,_.object=h,_.geometry=p,_.material=f,_.groupOrder=m,_.renderOrder=h.renderOrder,_.z=g,_.group=v),e++,_}function o(h,p,f,m,g,v){const _=a(h,p,f,m,g,v);f.transmission>0?n.push(_):f.transparent===!0?i.push(_):t.push(_)}function c(h,p,f,m,g,v){const _=a(h,p,f,m,g,v);f.transmission>0?n.unshift(_):f.transparent===!0?i.unshift(_):t.unshift(_)}function l(h,p){t.length>1&&t.sort(h||painterSortStable),n.length>1&&n.sort(p||reversePainterSortStable),i.length>1&&i.sort(p||reversePainterSortStable)}function u(){for(let h=e,p=r.length;h<p;h++){const f=r[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:c,finish:u,sort:l}}function WebGLRenderLists(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new WebGLRenderList,r.set(n,[a])):i>=s.length?(a=new WebGLRenderList,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function UniformsCache(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Vector3,color:new Color};break;case"SpotLight":t={position:new Vector3,direction:new Vector3,color:new Color,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Vector3,color:new Color,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Vector3,skyColor:new Color,groundColor:new Color};break;case"RectAreaLight":t={color:new Color,position:new Vector3,halfWidth:new Vector3,halfHeight:new Vector3};break}return r[e.id]=t,t}}}function ShadowUniformsCache(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vector2};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vector2};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vector2,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let nextVersion=0;function shadowCastingAndTexturingLightsFirst(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function WebGLLights(r){const e=new UniformsCache,t=ShadowUniformsCache(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new Vector3);const i=new Vector3,s=new Matrix4,a=new Matrix4;function o(l,u){let h=0,p=0,f=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let m=0,g=0,v=0,_=0,L=0,x=0,M=0,R=0,D=0,I=0,y=0;l.sort(shadowCastingAndTexturingLightsFirst);const S=u===!0?Math.PI:1;for(let O=0,$=l.length;O<$;O++){const H=l[O],te=H.color,de=H.intensity,ve=H.distance,ge=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)h+=te.r*de*S,p+=te.g*de*S,f+=te.b*de*S;else if(H.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(H.sh.coefficients[q],de);y++}else if(H.isDirectionalLight){const q=e.get(H);if(q.color.copy(H.color).multiplyScalar(H.intensity*S),H.castShadow){const F=H.shadow,j=t.get(H);j.shadowBias=F.bias,j.shadowNormalBias=F.normalBias,j.shadowRadius=F.radius,j.shadowMapSize=F.mapSize,n.directionalShadow[m]=j,n.directionalShadowMap[m]=ge,n.directionalShadowMatrix[m]=H.shadow.matrix,x++}n.directional[m]=q,m++}else if(H.isSpotLight){const q=e.get(H);q.position.setFromMatrixPosition(H.matrixWorld),q.color.copy(te).multiplyScalar(de*S),q.distance=ve,q.coneCos=Math.cos(H.angle),q.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),q.decay=H.decay,n.spot[v]=q;const F=H.shadow;if(H.map&&(n.spotLightMap[D]=H.map,D++,F.updateMatrices(H),H.castShadow&&I++),n.spotLightMatrix[v]=F.matrix,H.castShadow){const j=t.get(H);j.shadowBias=F.bias,j.shadowNormalBias=F.normalBias,j.shadowRadius=F.radius,j.shadowMapSize=F.mapSize,n.spotShadow[v]=j,n.spotShadowMap[v]=ge,R++}v++}else if(H.isRectAreaLight){const q=e.get(H);q.color.copy(te).multiplyScalar(de),q.halfWidth.set(H.width*.5,0,0),q.halfHeight.set(0,H.height*.5,0),n.rectArea[_]=q,_++}else if(H.isPointLight){const q=e.get(H);if(q.color.copy(H.color).multiplyScalar(H.intensity*S),q.distance=H.distance,q.decay=H.decay,H.castShadow){const F=H.shadow,j=t.get(H);j.shadowBias=F.bias,j.shadowNormalBias=F.normalBias,j.shadowRadius=F.radius,j.shadowMapSize=F.mapSize,j.shadowCameraNear=F.camera.near,j.shadowCameraFar=F.camera.far,n.pointShadow[g]=j,n.pointShadowMap[g]=ge,n.pointShadowMatrix[g]=H.shadow.matrix,M++}n.point[g]=q,g++}else if(H.isHemisphereLight){const q=e.get(H);q.skyColor.copy(H.color).multiplyScalar(de*S),q.groundColor.copy(H.groundColor).multiplyScalar(de*S),n.hemi[L]=q,L++}}_>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=UniformsLib.LTC_FLOAT_1,n.rectAreaLTC2=UniformsLib.LTC_FLOAT_2):(n.rectAreaLTC1=UniformsLib.LTC_HALF_1,n.rectAreaLTC2=UniformsLib.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=p,n.ambient[2]=f;const E=n.hash;(E.directionalLength!==m||E.pointLength!==g||E.spotLength!==v||E.rectAreaLength!==_||E.hemiLength!==L||E.numDirectionalShadows!==x||E.numPointShadows!==M||E.numSpotShadows!==R||E.numSpotMaps!==D||E.numLightProbes!==y)&&(n.directional.length=m,n.spot.length=v,n.rectArea.length=_,n.point.length=g,n.hemi.length=L,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=R,n.spotShadowMap.length=R,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=R+D-I,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=y,E.directionalLength=m,E.pointLength=g,E.spotLength=v,E.rectAreaLength=_,E.hemiLength=L,E.numDirectionalShadows=x,E.numPointShadows=M,E.numSpotShadows=R,E.numSpotMaps=D,E.numLightProbes=y,n.version=nextVersion++)}function c(l,u){let h=0,p=0,f=0,m=0,g=0;const v=u.matrixWorldInverse;for(let _=0,L=l.length;_<L;_++){const x=l[_];if(x.isDirectionalLight){const M=n.directional[h];M.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(v),h++}else if(x.isSpotLight){const M=n.spot[f];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(v),M.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(v),f++}else if(x.isRectAreaLight){const M=n.rectArea[m];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(v),a.identity(),s.copy(x.matrixWorld),s.premultiply(v),a.extractRotation(s),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),m++}else if(x.isPointLight){const M=n.point[p];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(v),p++}else if(x.isHemisphereLight){const M=n.hemi[g];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(v),g++}}}return{setup:o,setupView:c,state:n}}function WebGLRenderState(r){const e=new WebGLLights(r),t=[],n=[];function i(){t.length=0,n.length=0}function s(u){t.push(u)}function a(u){n.push(u)}function o(u){e.setup(t,u)}function c(u){e.setupView(t,u)}return{init:i,state:{lightsArray:t,shadowsArray:n,lights:e,transmissionRenderTarget:null},setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function WebGLRenderStates(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new WebGLRenderState(r),e.set(i,[o])):s>=a.length?(o=new WebGLRenderState(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class MeshDepthMaterial extends Material{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=BasicDepthPacking,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class MeshDistanceMaterial extends Material{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const vertex=`void main() {
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
}`;function WebGLShadowMap(r,e,t){let n=new Frustum;const i=new Vector2,s=new Vector2,a=new Vector4,o=new MeshDepthMaterial({depthPacking:RGBADepthPacking}),c=new MeshDistanceMaterial,l={},u=t.maxTextureSize,h={[FrontSide]:BackSide,[BackSide]:FrontSide,[DoubleSide]:DoubleSide},p=new ShaderMaterial({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Vector2},radius:{value:4}},vertexShader:vertex,fragmentShader:fragment}),f=p.clone();f.defines.HORIZONTAL_PASS=1;const m=new BufferGeometry;m.setAttribute("position",new BufferAttribute(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Mesh(m,p),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=PCFShadowMap;let _=this.type;this.render=function(D,I,y){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||D.length===0)return;const S=r.getRenderTarget(),E=r.getActiveCubeFace(),O=r.getActiveMipmapLevel(),$=r.state;$.setBlending(NoBlending),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const H=_!==VSMShadowMap&&this.type===VSMShadowMap,te=_===VSMShadowMap&&this.type!==VSMShadowMap;for(let de=0,ve=D.length;de<ve;de++){const ge=D[de],q=ge.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",ge,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;i.copy(q.mapSize);const F=q.getFrameExtents();if(i.multiply(F),s.copy(q.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/F.x),i.x=s.x*F.x,q.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/F.y),i.y=s.y*F.y,q.mapSize.y=s.y)),q.map===null||H===!0||te===!0){const ce=this.type!==VSMShadowMap?{minFilter:NearestFilter,magFilter:NearestFilter}:{};q.map!==null&&q.map.dispose(),q.map=new WebGLRenderTarget(i.x,i.y,ce),q.map.texture.name=ge.name+".shadowMap",q.camera.updateProjectionMatrix()}r.setRenderTarget(q.map),r.clear();const j=q.getViewportCount();for(let ce=0;ce<j;ce++){const pe=q.getViewport(ce);a.set(s.x*pe.x,s.y*pe.y,s.x*pe.z,s.y*pe.w),$.viewport(a),q.updateMatrices(ge,ce),n=q.getFrustum(),M(I,y,q.camera,ge,this.type)}q.isPointLightShadow!==!0&&this.type===VSMShadowMap&&L(q,y),q.needsUpdate=!1}_=this.type,v.needsUpdate=!1,r.setRenderTarget(S,E,O)};function L(D,I){const y=e.update(g);p.defines.VSM_SAMPLES!==D.blurSamples&&(p.defines.VSM_SAMPLES=D.blurSamples,f.defines.VSM_SAMPLES=D.blurSamples,p.needsUpdate=!0,f.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new WebGLRenderTarget(i.x,i.y)),p.uniforms.shadow_pass.value=D.map.texture,p.uniforms.resolution.value=D.mapSize,p.uniforms.radius.value=D.radius,r.setRenderTarget(D.mapPass),r.clear(),r.renderBufferDirect(I,null,y,p,g,null),f.uniforms.shadow_pass.value=D.mapPass.texture,f.uniforms.resolution.value=D.mapSize,f.uniforms.radius.value=D.radius,r.setRenderTarget(D.map),r.clear(),r.renderBufferDirect(I,null,y,f,g,null)}function x(D,I,y,S){let E=null;const O=y.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(O!==void 0)E=O;else if(E=y.isPointLight===!0?c:o,r.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const $=E.uuid,H=I.uuid;let te=l[$];te===void 0&&(te={},l[$]=te);let de=te[H];de===void 0&&(de=E.clone(),te[H]=de,I.addEventListener("dispose",R)),E=de}if(E.visible=I.visible,E.wireframe=I.wireframe,S===VSMShadowMap?E.side=I.shadowSide!==null?I.shadowSide:I.side:E.side=I.shadowSide!==null?I.shadowSide:h[I.side],E.alphaMap=I.alphaMap,E.alphaTest=I.alphaTest,E.map=I.map,E.clipShadows=I.clipShadows,E.clippingPlanes=I.clippingPlanes,E.clipIntersection=I.clipIntersection,E.displacementMap=I.displacementMap,E.displacementScale=I.displacementScale,E.displacementBias=I.displacementBias,E.wireframeLinewidth=I.wireframeLinewidth,E.linewidth=I.linewidth,y.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const $=r.properties.get(E);$.light=y}return E}function M(D,I,y,S,E){if(D.visible===!1)return;if(D.layers.test(I.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&E===VSMShadowMap)&&(!D.frustumCulled||n.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,D.matrixWorld);const H=e.update(D),te=D.material;if(Array.isArray(te)){const de=H.groups;for(let ve=0,ge=de.length;ve<ge;ve++){const q=de[ve],F=te[q.materialIndex];if(F&&F.visible){const j=x(D,F,S,E);D.onBeforeShadow(r,D,I,y,H,j,q),r.renderBufferDirect(y,null,H,j,D,q),D.onAfterShadow(r,D,I,y,H,j,q)}}}else if(te.visible){const de=x(D,te,S,E);D.onBeforeShadow(r,D,I,y,H,de,null),r.renderBufferDirect(y,null,H,de,D,null),D.onAfterShadow(r,D,I,y,H,de,null)}}const $=D.children;for(let H=0,te=$.length;H<te;H++)M($[H],I,y,S,E)}function R(D){D.target.removeEventListener("dispose",R);for(const y in l){const S=l[y],E=D.target.uuid;E in S&&(S[E].dispose(),delete S[E])}}}function WebGLState(r){function e(){let re=!1;const Le=new Vector4;let De=null;const Ie=new Vector4(0,0,0,0);return{setMask:function(Be){De!==Be&&!re&&(r.colorMask(Be,Be,Be,Be),De=Be)},setLocked:function(Be){re=Be},setClear:function(Be,ze,He,$e,Je){Je===!0&&(Be*=$e,ze*=$e,He*=$e),Le.set(Be,ze,He,$e),Ie.equals(Le)===!1&&(r.clearColor(Be,ze,He,$e),Ie.copy(Le))},reset:function(){re=!1,De=null,Ie.set(-1,0,0,0)}}}function t(){let re=!1,Le=null,De=null,Ie=null;return{setTest:function(Be){Be?w(r.DEPTH_TEST):G(r.DEPTH_TEST)},setMask:function(Be){Le!==Be&&!re&&(r.depthMask(Be),Le=Be)},setFunc:function(Be){if(De!==Be){switch(Be){case NeverDepth:r.depthFunc(r.NEVER);break;case AlwaysDepth:r.depthFunc(r.ALWAYS);break;case LessDepth:r.depthFunc(r.LESS);break;case LessEqualDepth:r.depthFunc(r.LEQUAL);break;case EqualDepth:r.depthFunc(r.EQUAL);break;case GreaterEqualDepth:r.depthFunc(r.GEQUAL);break;case GreaterDepth:r.depthFunc(r.GREATER);break;case NotEqualDepth:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}De=Be}},setLocked:function(Be){re=Be},setClear:function(Be){Ie!==Be&&(r.clearDepth(Be),Ie=Be)},reset:function(){re=!1,Le=null,De=null,Ie=null}}}function n(){let re=!1,Le=null,De=null,Ie=null,Be=null,ze=null,He=null,$e=null,Je=null;return{setTest:function(qe){re||(qe?w(r.STENCIL_TEST):G(r.STENCIL_TEST))},setMask:function(qe){Le!==qe&&!re&&(r.stencilMask(qe),Le=qe)},setFunc:function(qe,Qe,Ke){(De!==qe||Ie!==Qe||Be!==Ke)&&(r.stencilFunc(qe,Qe,Ke),De=qe,Ie=Qe,Be=Ke)},setOp:function(qe,Qe,Ke){(ze!==qe||He!==Qe||$e!==Ke)&&(r.stencilOp(qe,Qe,Ke),ze=qe,He=Qe,$e=Ke)},setLocked:function(qe){re=qe},setClear:function(qe){Je!==qe&&(r.clearStencil(qe),Je=qe)},reset:function(){re=!1,Le=null,De=null,Ie=null,Be=null,ze=null,He=null,$e=null,Je=null}}}const i=new e,s=new t,a=new n,o=new WeakMap,c=new WeakMap;let l={},u={},h=new WeakMap,p=[],f=null,m=!1,g=null,v=null,_=null,L=null,x=null,M=null,R=null,D=new Color(0,0,0),I=0,y=!1,S=null,E=null,O=null,$=null,H=null;const te=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let de=!1,ve=0;const ge=r.getParameter(r.VERSION);ge.indexOf("WebGL")!==-1?(ve=parseFloat(/^WebGL (\d)/.exec(ge)[1]),de=ve>=1):ge.indexOf("OpenGL ES")!==-1&&(ve=parseFloat(/^OpenGL ES (\d)/.exec(ge)[1]),de=ve>=2);let q=null,F={};const j=r.getParameter(r.SCISSOR_BOX),ce=r.getParameter(r.VIEWPORT),pe=new Vector4().fromArray(j),_e=new Vector4().fromArray(ce);function he(re,Le,De,Ie){const Be=new Uint8Array(4),ze=r.createTexture();r.bindTexture(re,ze),r.texParameteri(re,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(re,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let He=0;He<De;He++)re===r.TEXTURE_3D||re===r.TEXTURE_2D_ARRAY?r.texImage3D(Le,0,r.RGBA,1,1,Ie,0,r.RGBA,r.UNSIGNED_BYTE,Be):r.texImage2D(Le+He,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Be);return ze}const N={};N[r.TEXTURE_2D]=he(r.TEXTURE_2D,r.TEXTURE_2D,1),N[r.TEXTURE_CUBE_MAP]=he(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),N[r.TEXTURE_2D_ARRAY]=he(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),N[r.TEXTURE_3D]=he(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),a.setClear(0),w(r.DEPTH_TEST),s.setFunc(LessEqualDepth),ee(!1),se(CullFaceBack),w(r.CULL_FACE),fe(NoBlending);function w(re){l[re]!==!0&&(r.enable(re),l[re]=!0)}function G(re){l[re]!==!1&&(r.disable(re),l[re]=!1)}function ae(re,Le){return u[re]!==Le?(r.bindFramebuffer(re,Le),u[re]=Le,re===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=Le),re===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=Le),!0):!1}function Q(re,Le){let De=p,Ie=!1;if(re){De=h.get(Le),De===void 0&&(De=[],h.set(Le,De));const Be=re.textures;if(De.length!==Be.length||De[0]!==r.COLOR_ATTACHMENT0){for(let ze=0,He=Be.length;ze<He;ze++)De[ze]=r.COLOR_ATTACHMENT0+ze;De.length=Be.length,Ie=!0}}else De[0]!==r.BACK&&(De[0]=r.BACK,Ie=!0);Ie&&r.drawBuffers(De)}function ie(re){return f!==re?(r.useProgram(re),f=re,!0):!1}const K={[AddEquation]:r.FUNC_ADD,[SubtractEquation]:r.FUNC_SUBTRACT,[ReverseSubtractEquation]:r.FUNC_REVERSE_SUBTRACT};K[MinEquation]=r.MIN,K[MaxEquation]=r.MAX;const le={[ZeroFactor]:r.ZERO,[OneFactor]:r.ONE,[SrcColorFactor]:r.SRC_COLOR,[SrcAlphaFactor]:r.SRC_ALPHA,[SrcAlphaSaturateFactor]:r.SRC_ALPHA_SATURATE,[DstColorFactor]:r.DST_COLOR,[DstAlphaFactor]:r.DST_ALPHA,[OneMinusSrcColorFactor]:r.ONE_MINUS_SRC_COLOR,[OneMinusSrcAlphaFactor]:r.ONE_MINUS_SRC_ALPHA,[OneMinusDstColorFactor]:r.ONE_MINUS_DST_COLOR,[OneMinusDstAlphaFactor]:r.ONE_MINUS_DST_ALPHA,[ConstantColorFactor]:r.CONSTANT_COLOR,[OneMinusConstantColorFactor]:r.ONE_MINUS_CONSTANT_COLOR,[ConstantAlphaFactor]:r.CONSTANT_ALPHA,[OneMinusConstantAlphaFactor]:r.ONE_MINUS_CONSTANT_ALPHA};function fe(re,Le,De,Ie,Be,ze,He,$e,Je,qe){if(re===NoBlending){m===!0&&(G(r.BLEND),m=!1);return}if(m===!1&&(w(r.BLEND),m=!0),re!==CustomBlending){if(re!==g||qe!==y){if((v!==AddEquation||x!==AddEquation)&&(r.blendEquation(r.FUNC_ADD),v=AddEquation,x=AddEquation),qe)switch(re){case NormalBlending:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case AdditiveBlending:r.blendFunc(r.ONE,r.ONE);break;case SubtractiveBlending:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case MultiplyBlending:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",re);break}else switch(re){case NormalBlending:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case AdditiveBlending:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case SubtractiveBlending:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case MultiplyBlending:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",re);break}_=null,L=null,M=null,R=null,D.set(0,0,0),I=0,g=re,y=qe}return}Be=Be||Le,ze=ze||De,He=He||Ie,(Le!==v||Be!==x)&&(r.blendEquationSeparate(K[Le],K[Be]),v=Le,x=Be),(De!==_||Ie!==L||ze!==M||He!==R)&&(r.blendFuncSeparate(le[De],le[Ie],le[ze],le[He]),_=De,L=Ie,M=ze,R=He),($e.equals(D)===!1||Je!==I)&&(r.blendColor($e.r,$e.g,$e.b,Je),D.copy($e),I=Je),g=re,y=!1}function Y(re,Le){re.side===DoubleSide?G(r.CULL_FACE):w(r.CULL_FACE);let De=re.side===BackSide;Le&&(De=!De),ee(De),re.blending===NormalBlending&&re.transparent===!1?fe(NoBlending):fe(re.blending,re.blendEquation,re.blendSrc,re.blendDst,re.blendEquationAlpha,re.blendSrcAlpha,re.blendDstAlpha,re.blendColor,re.blendAlpha,re.premultipliedAlpha),s.setFunc(re.depthFunc),s.setTest(re.depthTest),s.setMask(re.depthWrite),i.setMask(re.colorWrite);const Ie=re.stencilWrite;a.setTest(Ie),Ie&&(a.setMask(re.stencilWriteMask),a.setFunc(re.stencilFunc,re.stencilRef,re.stencilFuncMask),a.setOp(re.stencilFail,re.stencilZFail,re.stencilZPass)),z(re.polygonOffset,re.polygonOffsetFactor,re.polygonOffsetUnits),re.alphaToCoverage===!0?w(r.SAMPLE_ALPHA_TO_COVERAGE):G(r.SAMPLE_ALPHA_TO_COVERAGE)}function ee(re){S!==re&&(re?r.frontFace(r.CW):r.frontFace(r.CCW),S=re)}function se(re){re!==CullFaceNone?(w(r.CULL_FACE),re!==E&&(re===CullFaceBack?r.cullFace(r.BACK):re===CullFaceFront?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):G(r.CULL_FACE),E=re}function X(re){re!==O&&(de&&r.lineWidth(re),O=re)}function z(re,Le,De){re?(w(r.POLYGON_OFFSET_FILL),($!==Le||H!==De)&&(r.polygonOffset(Le,De),$=Le,H=De)):G(r.POLYGON_OFFSET_FILL)}function d(re){re?w(r.SCISSOR_TEST):G(r.SCISSOR_TEST)}function b(re){re===void 0&&(re=r.TEXTURE0+te-1),q!==re&&(r.activeTexture(re),q=re)}function Z(re,Le,De){De===void 0&&(q===null?De=r.TEXTURE0+te-1:De=q);let Ie=F[De];Ie===void 0&&(Ie={type:void 0,texture:void 0},F[De]=Ie),(Ie.type!==re||Ie.texture!==Le)&&(q!==De&&(r.activeTexture(De),q=De),r.bindTexture(re,Le||N[re]),Ie.type=re,Ie.texture=Le)}function J(){const re=F[q];re!==void 0&&re.type!==void 0&&(r.bindTexture(re.type,null),re.type=void 0,re.texture=void 0)}function ue(){try{r.compressedTexImage2D.apply(r,arguments)}catch(re){console.error("THREE.WebGLState:",re)}}function oe(){try{r.compressedTexImage3D.apply(r,arguments)}catch(re){console.error("THREE.WebGLState:",re)}}function xe(){try{r.texSubImage2D.apply(r,arguments)}catch(re){console.error("THREE.WebGLState:",re)}}function Me(){try{r.texSubImage3D.apply(r,arguments)}catch(re){console.error("THREE.WebGLState:",re)}}function me(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(re){console.error("THREE.WebGLState:",re)}}function ye(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(re){console.error("THREE.WebGLState:",re)}}function Te(){try{r.texStorage2D.apply(r,arguments)}catch(re){console.error("THREE.WebGLState:",re)}}function Ce(){try{r.texStorage3D.apply(r,arguments)}catch(re){console.error("THREE.WebGLState:",re)}}function Ee(){try{r.texImage2D.apply(r,arguments)}catch(re){console.error("THREE.WebGLState:",re)}}function Pe(){try{r.texImage3D.apply(r,arguments)}catch(re){console.error("THREE.WebGLState:",re)}}function Ue(re){pe.equals(re)===!1&&(r.scissor(re.x,re.y,re.z,re.w),pe.copy(re))}function Fe(re){_e.equals(re)===!1&&(r.viewport(re.x,re.y,re.z,re.w),_e.copy(re))}function Re(re,Le){let De=c.get(Le);De===void 0&&(De=new WeakMap,c.set(Le,De));let Ie=De.get(re);Ie===void 0&&(Ie=r.getUniformBlockIndex(Le,re.name),De.set(re,Ie))}function Oe(re,Le){const Ie=c.get(Le).get(re);o.get(Le)!==Ie&&(r.uniformBlockBinding(Le,Ie,re.__bindingPointIndex),o.set(Le,Ie))}function Ne(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),l={},q=null,F={},u={},h=new WeakMap,p=[],f=null,m=!1,g=null,v=null,_=null,L=null,x=null,M=null,R=null,D=new Color(0,0,0),I=0,y=!1,S=null,E=null,O=null,$=null,H=null,pe.set(0,0,r.canvas.width,r.canvas.height),_e.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),a.reset()}return{buffers:{color:i,depth:s,stencil:a},enable:w,disable:G,bindFramebuffer:ae,drawBuffers:Q,useProgram:ie,setBlending:fe,setMaterial:Y,setFlipSided:ee,setCullFace:se,setLineWidth:X,setPolygonOffset:z,setScissorTest:d,activeTexture:b,bindTexture:Z,unbindTexture:J,compressedTexImage2D:ue,compressedTexImage3D:oe,texImage2D:Ee,texImage3D:Pe,updateUBOMapping:Re,uniformBlockBinding:Oe,texStorage2D:Te,texStorage3D:Ce,texSubImage2D:xe,texSubImage3D:Me,compressedTexSubImage2D:me,compressedTexSubImage3D:ye,scissor:Ue,viewport:Fe,reset:Ne}}function WebGLTextures(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Vector2,u=new WeakMap;let h;const p=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(X,z){return f?new OffscreenCanvas(X,z):createElementNS("canvas")}function g(X,z,d){let b=1;const Z=se(X);if((Z.width>d||Z.height>d)&&(b=d/Math.max(Z.width,Z.height)),b<1)if(typeof HTMLImageElement<"u"&&X instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&X instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&X instanceof ImageBitmap||typeof VideoFrame<"u"&&X instanceof VideoFrame){const J=Math.floor(b*Z.width),ue=Math.floor(b*Z.height);h===void 0&&(h=m(J,ue));const oe=z?m(J,ue):h;return oe.width=J,oe.height=ue,oe.getContext("2d").drawImage(X,0,0,J,ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+J+"x"+ue+")."),oe}else return"data"in X&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),X;return X}function v(X){return X.generateMipmaps&&X.minFilter!==NearestFilter&&X.minFilter!==LinearFilter}function _(X){r.generateMipmap(X)}function L(X,z,d,b,Z=!1){if(X!==null){if(r[X]!==void 0)return r[X];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+X+"'")}let J=z;if(z===r.RED&&(d===r.FLOAT&&(J=r.R32F),d===r.HALF_FLOAT&&(J=r.R16F),d===r.UNSIGNED_BYTE&&(J=r.R8)),z===r.RED_INTEGER&&(d===r.UNSIGNED_BYTE&&(J=r.R8UI),d===r.UNSIGNED_SHORT&&(J=r.R16UI),d===r.UNSIGNED_INT&&(J=r.R32UI),d===r.BYTE&&(J=r.R8I),d===r.SHORT&&(J=r.R16I),d===r.INT&&(J=r.R32I)),z===r.RG&&(d===r.FLOAT&&(J=r.RG32F),d===r.HALF_FLOAT&&(J=r.RG16F),d===r.UNSIGNED_BYTE&&(J=r.RG8)),z===r.RG_INTEGER&&(d===r.UNSIGNED_BYTE&&(J=r.RG8UI),d===r.UNSIGNED_SHORT&&(J=r.RG16UI),d===r.UNSIGNED_INT&&(J=r.RG32UI),d===r.BYTE&&(J=r.RG8I),d===r.SHORT&&(J=r.RG16I),d===r.INT&&(J=r.RG32I)),z===r.RGB&&d===r.UNSIGNED_INT_5_9_9_9_REV&&(J=r.RGB9_E5),z===r.RGBA){const ue=Z?LinearTransfer:ColorManagement.getTransfer(b);d===r.FLOAT&&(J=r.RGBA32F),d===r.HALF_FLOAT&&(J=r.RGBA16F),d===r.UNSIGNED_BYTE&&(J=ue===SRGBTransfer?r.SRGB8_ALPHA8:r.RGBA8),d===r.UNSIGNED_SHORT_4_4_4_4&&(J=r.RGBA4),d===r.UNSIGNED_SHORT_5_5_5_1&&(J=r.RGB5_A1)}return(J===r.R16F||J===r.R32F||J===r.RG16F||J===r.RG32F||J===r.RGBA16F||J===r.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function x(X,z){return v(X)===!0||X.isFramebufferTexture&&X.minFilter!==NearestFilter&&X.minFilter!==LinearFilter?Math.log2(Math.max(z.width,z.height))+1:X.mipmaps!==void 0&&X.mipmaps.length>0?X.mipmaps.length:X.isCompressedTexture&&Array.isArray(X.image)?z.mipmaps.length:1}function M(X){const z=X.target;z.removeEventListener("dispose",M),D(z),z.isVideoTexture&&u.delete(z)}function R(X){const z=X.target;z.removeEventListener("dispose",R),y(z)}function D(X){const z=n.get(X);if(z.__webglInit===void 0)return;const d=X.source,b=p.get(d);if(b){const Z=b[z.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&I(X),Object.keys(b).length===0&&p.delete(d)}n.remove(X)}function I(X){const z=n.get(X);r.deleteTexture(z.__webglTexture);const d=X.source,b=p.get(d);delete b[z.__cacheKey],a.memory.textures--}function y(X){const z=n.get(X);if(X.depthTexture&&X.depthTexture.dispose(),X.isWebGLCubeRenderTarget)for(let b=0;b<6;b++){if(Array.isArray(z.__webglFramebuffer[b]))for(let Z=0;Z<z.__webglFramebuffer[b].length;Z++)r.deleteFramebuffer(z.__webglFramebuffer[b][Z]);else r.deleteFramebuffer(z.__webglFramebuffer[b]);z.__webglDepthbuffer&&r.deleteRenderbuffer(z.__webglDepthbuffer[b])}else{if(Array.isArray(z.__webglFramebuffer))for(let b=0;b<z.__webglFramebuffer.length;b++)r.deleteFramebuffer(z.__webglFramebuffer[b]);else r.deleteFramebuffer(z.__webglFramebuffer);if(z.__webglDepthbuffer&&r.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&r.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let b=0;b<z.__webglColorRenderbuffer.length;b++)z.__webglColorRenderbuffer[b]&&r.deleteRenderbuffer(z.__webglColorRenderbuffer[b]);z.__webglDepthRenderbuffer&&r.deleteRenderbuffer(z.__webglDepthRenderbuffer)}const d=X.textures;for(let b=0,Z=d.length;b<Z;b++){const J=n.get(d[b]);J.__webglTexture&&(r.deleteTexture(J.__webglTexture),a.memory.textures--),n.remove(d[b])}n.remove(X)}let S=0;function E(){S=0}function O(){const X=S;return X>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+X+" texture units while this GPU supports only "+i.maxTextures),S+=1,X}function $(X){const z=[];return z.push(X.wrapS),z.push(X.wrapT),z.push(X.wrapR||0),z.push(X.magFilter),z.push(X.minFilter),z.push(X.anisotropy),z.push(X.internalFormat),z.push(X.format),z.push(X.type),z.push(X.generateMipmaps),z.push(X.premultiplyAlpha),z.push(X.flipY),z.push(X.unpackAlignment),z.push(X.colorSpace),z.join()}function H(X,z){const d=n.get(X);if(X.isVideoTexture&&Y(X),X.isRenderTargetTexture===!1&&X.version>0&&d.__version!==X.version){const b=X.image;if(b===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(b.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pe(d,X,z);return}}t.bindTexture(r.TEXTURE_2D,d.__webglTexture,r.TEXTURE0+z)}function te(X,z){const d=n.get(X);if(X.version>0&&d.__version!==X.version){pe(d,X,z);return}t.bindTexture(r.TEXTURE_2D_ARRAY,d.__webglTexture,r.TEXTURE0+z)}function de(X,z){const d=n.get(X);if(X.version>0&&d.__version!==X.version){pe(d,X,z);return}t.bindTexture(r.TEXTURE_3D,d.__webglTexture,r.TEXTURE0+z)}function ve(X,z){const d=n.get(X);if(X.version>0&&d.__version!==X.version){_e(d,X,z);return}t.bindTexture(r.TEXTURE_CUBE_MAP,d.__webglTexture,r.TEXTURE0+z)}const ge={[RepeatWrapping]:r.REPEAT,[ClampToEdgeWrapping]:r.CLAMP_TO_EDGE,[MirroredRepeatWrapping]:r.MIRRORED_REPEAT},q={[NearestFilter]:r.NEAREST,[NearestMipmapNearestFilter]:r.NEAREST_MIPMAP_NEAREST,[NearestMipmapLinearFilter]:r.NEAREST_MIPMAP_LINEAR,[LinearFilter]:r.LINEAR,[LinearMipmapNearestFilter]:r.LINEAR_MIPMAP_NEAREST,[LinearMipmapLinearFilter]:r.LINEAR_MIPMAP_LINEAR},F={[NeverCompare]:r.NEVER,[AlwaysCompare]:r.ALWAYS,[LessCompare]:r.LESS,[LessEqualCompare]:r.LEQUAL,[EqualCompare]:r.EQUAL,[GreaterEqualCompare]:r.GEQUAL,[GreaterCompare]:r.GREATER,[NotEqualCompare]:r.NOTEQUAL};function j(X,z){if(z.type===FloatType&&e.has("OES_texture_float_linear")===!1&&(z.magFilter===LinearFilter||z.magFilter===LinearMipmapNearestFilter||z.magFilter===NearestMipmapLinearFilter||z.magFilter===LinearMipmapLinearFilter||z.minFilter===LinearFilter||z.minFilter===LinearMipmapNearestFilter||z.minFilter===NearestMipmapLinearFilter||z.minFilter===LinearMipmapLinearFilter)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(X,r.TEXTURE_WRAP_S,ge[z.wrapS]),r.texParameteri(X,r.TEXTURE_WRAP_T,ge[z.wrapT]),(X===r.TEXTURE_3D||X===r.TEXTURE_2D_ARRAY)&&r.texParameteri(X,r.TEXTURE_WRAP_R,ge[z.wrapR]),r.texParameteri(X,r.TEXTURE_MAG_FILTER,q[z.magFilter]),r.texParameteri(X,r.TEXTURE_MIN_FILTER,q[z.minFilter]),z.compareFunction&&(r.texParameteri(X,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(X,r.TEXTURE_COMPARE_FUNC,F[z.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(z.magFilter===NearestFilter||z.minFilter!==NearestMipmapLinearFilter&&z.minFilter!==LinearMipmapLinearFilter||z.type===FloatType&&e.has("OES_texture_float_linear")===!1)return;if(z.anisotropy>1||n.get(z).__currentAnisotropy){const d=e.get("EXT_texture_filter_anisotropic");r.texParameterf(X,d.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(z.anisotropy,i.getMaxAnisotropy())),n.get(z).__currentAnisotropy=z.anisotropy}}}function ce(X,z){let d=!1;X.__webglInit===void 0&&(X.__webglInit=!0,z.addEventListener("dispose",M));const b=z.source;let Z=p.get(b);Z===void 0&&(Z={},p.set(b,Z));const J=$(z);if(J!==X.__cacheKey){Z[J]===void 0&&(Z[J]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,d=!0),Z[J].usedTimes++;const ue=Z[X.__cacheKey];ue!==void 0&&(Z[X.__cacheKey].usedTimes--,ue.usedTimes===0&&I(z)),X.__cacheKey=J,X.__webglTexture=Z[J].texture}return d}function pe(X,z,d){let b=r.TEXTURE_2D;(z.isDataArrayTexture||z.isCompressedArrayTexture)&&(b=r.TEXTURE_2D_ARRAY),z.isData3DTexture&&(b=r.TEXTURE_3D);const Z=ce(X,z),J=z.source;t.bindTexture(b,X.__webglTexture,r.TEXTURE0+d);const ue=n.get(J);if(J.version!==ue.__version||Z===!0){t.activeTexture(r.TEXTURE0+d);const oe=ColorManagement.getPrimaries(ColorManagement.workingColorSpace),xe=z.colorSpace===NoColorSpace?null:ColorManagement.getPrimaries(z.colorSpace),Me=z.colorSpace===NoColorSpace||oe===xe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,z.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,z.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);let me=g(z.image,!1,i.maxTextureSize);me=ee(z,me);const ye=s.convert(z.format,z.colorSpace),Te=s.convert(z.type);let Ce=L(z.internalFormat,ye,Te,z.colorSpace,z.isVideoTexture);j(b,z);let Ee;const Pe=z.mipmaps,Ue=z.isVideoTexture!==!0&&Ce!==RGB_ETC1_Format,Fe=ue.__version===void 0||Z===!0,Re=J.dataReady,Oe=x(z,me);if(z.isDepthTexture)Ce=r.DEPTH_COMPONENT16,z.type===FloatType?Ce=r.DEPTH_COMPONENT32F:z.type===UnsignedIntType?Ce=r.DEPTH_COMPONENT24:z.type===UnsignedInt248Type&&(Ce=r.DEPTH24_STENCIL8),Fe&&(Ue?t.texStorage2D(r.TEXTURE_2D,1,Ce,me.width,me.height):t.texImage2D(r.TEXTURE_2D,0,Ce,me.width,me.height,0,ye,Te,null));else if(z.isDataTexture)if(Pe.length>0){Ue&&Fe&&t.texStorage2D(r.TEXTURE_2D,Oe,Ce,Pe[0].width,Pe[0].height);for(let Ne=0,re=Pe.length;Ne<re;Ne++)Ee=Pe[Ne],Ue?Re&&t.texSubImage2D(r.TEXTURE_2D,Ne,0,0,Ee.width,Ee.height,ye,Te,Ee.data):t.texImage2D(r.TEXTURE_2D,Ne,Ce,Ee.width,Ee.height,0,ye,Te,Ee.data);z.generateMipmaps=!1}else Ue?(Fe&&t.texStorage2D(r.TEXTURE_2D,Oe,Ce,me.width,me.height),Re&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,me.width,me.height,ye,Te,me.data)):t.texImage2D(r.TEXTURE_2D,0,Ce,me.width,me.height,0,ye,Te,me.data);else if(z.isCompressedTexture)if(z.isCompressedArrayTexture){Ue&&Fe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Oe,Ce,Pe[0].width,Pe[0].height,me.depth);for(let Ne=0,re=Pe.length;Ne<re;Ne++)Ee=Pe[Ne],z.format!==RGBAFormat?ye!==null?Ue?Re&&t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Ne,0,0,0,Ee.width,Ee.height,me.depth,ye,Ee.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Ne,Ce,Ee.width,Ee.height,me.depth,0,Ee.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?Re&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,Ne,0,0,0,Ee.width,Ee.height,me.depth,ye,Te,Ee.data):t.texImage3D(r.TEXTURE_2D_ARRAY,Ne,Ce,Ee.width,Ee.height,me.depth,0,ye,Te,Ee.data)}else{Ue&&Fe&&t.texStorage2D(r.TEXTURE_2D,Oe,Ce,Pe[0].width,Pe[0].height);for(let Ne=0,re=Pe.length;Ne<re;Ne++)Ee=Pe[Ne],z.format!==RGBAFormat?ye!==null?Ue?Re&&t.compressedTexSubImage2D(r.TEXTURE_2D,Ne,0,0,Ee.width,Ee.height,ye,Ee.data):t.compressedTexImage2D(r.TEXTURE_2D,Ne,Ce,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?Re&&t.texSubImage2D(r.TEXTURE_2D,Ne,0,0,Ee.width,Ee.height,ye,Te,Ee.data):t.texImage2D(r.TEXTURE_2D,Ne,Ce,Ee.width,Ee.height,0,ye,Te,Ee.data)}else if(z.isDataArrayTexture)Ue?(Fe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Oe,Ce,me.width,me.height,me.depth),Re&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,ye,Te,me.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ce,me.width,me.height,me.depth,0,ye,Te,me.data);else if(z.isData3DTexture)Ue?(Fe&&t.texStorage3D(r.TEXTURE_3D,Oe,Ce,me.width,me.height,me.depth),Re&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,ye,Te,me.data)):t.texImage3D(r.TEXTURE_3D,0,Ce,me.width,me.height,me.depth,0,ye,Te,me.data);else if(z.isFramebufferTexture){if(Fe)if(Ue)t.texStorage2D(r.TEXTURE_2D,Oe,Ce,me.width,me.height);else{let Ne=me.width,re=me.height;for(let Le=0;Le<Oe;Le++)t.texImage2D(r.TEXTURE_2D,Le,Ce,Ne,re,0,ye,Te,null),Ne>>=1,re>>=1}}else if(Pe.length>0){if(Ue&&Fe){const Ne=se(Pe[0]);t.texStorage2D(r.TEXTURE_2D,Oe,Ce,Ne.width,Ne.height)}for(let Ne=0,re=Pe.length;Ne<re;Ne++)Ee=Pe[Ne],Ue?Re&&t.texSubImage2D(r.TEXTURE_2D,Ne,0,0,ye,Te,Ee):t.texImage2D(r.TEXTURE_2D,Ne,Ce,ye,Te,Ee);z.generateMipmaps=!1}else if(Ue){if(Fe){const Ne=se(me);t.texStorage2D(r.TEXTURE_2D,Oe,Ce,Ne.width,Ne.height)}Re&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ye,Te,me)}else t.texImage2D(r.TEXTURE_2D,0,Ce,ye,Te,me);v(z)&&_(b),ue.__version=J.version,z.onUpdate&&z.onUpdate(z)}X.__version=z.version}function _e(X,z,d){if(z.image.length!==6)return;const b=ce(X,z),Z=z.source;t.bindTexture(r.TEXTURE_CUBE_MAP,X.__webglTexture,r.TEXTURE0+d);const J=n.get(Z);if(Z.version!==J.__version||b===!0){t.activeTexture(r.TEXTURE0+d);const ue=ColorManagement.getPrimaries(ColorManagement.workingColorSpace),oe=z.colorSpace===NoColorSpace?null:ColorManagement.getPrimaries(z.colorSpace),xe=z.colorSpace===NoColorSpace||ue===oe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,z.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,z.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Me=z.isCompressedTexture||z.image[0].isCompressedTexture,me=z.image[0]&&z.image[0].isDataTexture,ye=[];for(let re=0;re<6;re++)!Me&&!me?ye[re]=g(z.image[re],!0,i.maxCubemapSize):ye[re]=me?z.image[re].image:z.image[re],ye[re]=ee(z,ye[re]);const Te=ye[0],Ce=s.convert(z.format,z.colorSpace),Ee=s.convert(z.type),Pe=L(z.internalFormat,Ce,Ee,z.colorSpace),Ue=z.isVideoTexture!==!0,Fe=J.__version===void 0||b===!0,Re=Z.dataReady;let Oe=x(z,Te);j(r.TEXTURE_CUBE_MAP,z);let Ne;if(Me){Ue&&Fe&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Oe,Pe,Te.width,Te.height);for(let re=0;re<6;re++){Ne=ye[re].mipmaps;for(let Le=0;Le<Ne.length;Le++){const De=Ne[Le];z.format!==RGBAFormat?Ce!==null?Ue?Re&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,Le,0,0,De.width,De.height,Ce,De.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,Le,Pe,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?Re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,Le,0,0,De.width,De.height,Ce,Ee,De.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,Le,Pe,De.width,De.height,0,Ce,Ee,De.data)}}}else{if(Ne=z.mipmaps,Ue&&Fe){Ne.length>0&&Oe++;const re=se(ye[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Oe,Pe,re.width,re.height)}for(let re=0;re<6;re++)if(me){Ue?Re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,ye[re].width,ye[re].height,Ce,Ee,ye[re].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Pe,ye[re].width,ye[re].height,0,Ce,Ee,ye[re].data);for(let Le=0;Le<Ne.length;Le++){const Ie=Ne[Le].image[re].image;Ue?Re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,Le+1,0,0,Ie.width,Ie.height,Ce,Ee,Ie.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,Le+1,Pe,Ie.width,Ie.height,0,Ce,Ee,Ie.data)}}else{Ue?Re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Ce,Ee,ye[re]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Pe,Ce,Ee,ye[re]);for(let Le=0;Le<Ne.length;Le++){const De=Ne[Le];Ue?Re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,Le+1,0,0,Ce,Ee,De.image[re]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,Le+1,Pe,Ce,Ee,De.image[re])}}}v(z)&&_(r.TEXTURE_CUBE_MAP),J.__version=Z.version,z.onUpdate&&z.onUpdate(z)}X.__version=z.version}function he(X,z,d,b,Z,J){const ue=s.convert(d.format,d.colorSpace),oe=s.convert(d.type),xe=L(d.internalFormat,ue,oe,d.colorSpace);if(!n.get(z).__hasExternalTextures){const me=Math.max(1,z.width>>J),ye=Math.max(1,z.height>>J);Z===r.TEXTURE_3D||Z===r.TEXTURE_2D_ARRAY?t.texImage3D(Z,J,xe,me,ye,z.depth,0,ue,oe,null):t.texImage2D(Z,J,xe,me,ye,0,ue,oe,null)}t.bindFramebuffer(r.FRAMEBUFFER,X),fe(z)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,b,Z,n.get(d).__webglTexture,0,le(z)):(Z===r.TEXTURE_2D||Z>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,b,Z,n.get(d).__webglTexture,J),t.bindFramebuffer(r.FRAMEBUFFER,null)}function N(X,z,d){if(r.bindRenderbuffer(r.RENDERBUFFER,X),z.depthBuffer&&!z.stencilBuffer){let b=r.DEPTH_COMPONENT24;if(d||fe(z)){const Z=z.depthTexture;Z&&Z.isDepthTexture&&(Z.type===FloatType?b=r.DEPTH_COMPONENT32F:Z.type===UnsignedIntType&&(b=r.DEPTH_COMPONENT24));const J=le(z);fe(z)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,J,b,z.width,z.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,J,b,z.width,z.height)}else r.renderbufferStorage(r.RENDERBUFFER,b,z.width,z.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,X)}else if(z.depthBuffer&&z.stencilBuffer){const b=le(z);d&&fe(z)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,b,r.DEPTH24_STENCIL8,z.width,z.height):fe(z)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,b,r.DEPTH24_STENCIL8,z.width,z.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,z.width,z.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,X)}else{const b=z.textures;for(let Z=0;Z<b.length;Z++){const J=b[Z],ue=s.convert(J.format,J.colorSpace),oe=s.convert(J.type),xe=L(J.internalFormat,ue,oe,J.colorSpace),Me=le(z);d&&fe(z)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Me,xe,z.width,z.height):fe(z)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Me,xe,z.width,z.height):r.renderbufferStorage(r.RENDERBUFFER,xe,z.width,z.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function w(X,z){if(z&&z.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,X),!(z.depthTexture&&z.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(z.depthTexture).__webglTexture||z.depthTexture.image.width!==z.width||z.depthTexture.image.height!==z.height)&&(z.depthTexture.image.width=z.width,z.depthTexture.image.height=z.height,z.depthTexture.needsUpdate=!0),H(z.depthTexture,0);const b=n.get(z.depthTexture).__webglTexture,Z=le(z);if(z.depthTexture.format===DepthFormat)fe(z)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,b,0,Z):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,b,0);else if(z.depthTexture.format===DepthStencilFormat)fe(z)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,b,0,Z):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,b,0);else throw new Error("Unknown depthTexture format")}function G(X){const z=n.get(X),d=X.isWebGLCubeRenderTarget===!0;if(X.depthTexture&&!z.__autoAllocateDepthBuffer){if(d)throw new Error("target.depthTexture not supported in Cube render targets");w(z.__webglFramebuffer,X)}else if(d){z.__webglDepthbuffer=[];for(let b=0;b<6;b++)t.bindFramebuffer(r.FRAMEBUFFER,z.__webglFramebuffer[b]),z.__webglDepthbuffer[b]=r.createRenderbuffer(),N(z.__webglDepthbuffer[b],X,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,z.__webglFramebuffer),z.__webglDepthbuffer=r.createRenderbuffer(),N(z.__webglDepthbuffer,X,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function ae(X,z,d){const b=n.get(X);z!==void 0&&he(b.__webglFramebuffer,X,X.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),d!==void 0&&G(X)}function Q(X){const z=X.texture,d=n.get(X),b=n.get(z);X.addEventListener("dispose",R);const Z=X.textures,J=X.isWebGLCubeRenderTarget===!0,ue=Z.length>1;if(ue||(b.__webglTexture===void 0&&(b.__webglTexture=r.createTexture()),b.__version=z.version,a.memory.textures++),J){d.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(z.mipmaps&&z.mipmaps.length>0){d.__webglFramebuffer[oe]=[];for(let xe=0;xe<z.mipmaps.length;xe++)d.__webglFramebuffer[oe][xe]=r.createFramebuffer()}else d.__webglFramebuffer[oe]=r.createFramebuffer()}else{if(z.mipmaps&&z.mipmaps.length>0){d.__webglFramebuffer=[];for(let oe=0;oe<z.mipmaps.length;oe++)d.__webglFramebuffer[oe]=r.createFramebuffer()}else d.__webglFramebuffer=r.createFramebuffer();if(ue)for(let oe=0,xe=Z.length;oe<xe;oe++){const Me=n.get(Z[oe]);Me.__webglTexture===void 0&&(Me.__webglTexture=r.createTexture(),a.memory.textures++)}if(X.samples>0&&fe(X)===!1){d.__webglMultisampledFramebuffer=r.createFramebuffer(),d.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,d.__webglMultisampledFramebuffer);for(let oe=0;oe<Z.length;oe++){const xe=Z[oe];d.__webglColorRenderbuffer[oe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,d.__webglColorRenderbuffer[oe]);const Me=s.convert(xe.format,xe.colorSpace),me=s.convert(xe.type),ye=L(xe.internalFormat,Me,me,xe.colorSpace,X.isXRRenderTarget===!0),Te=le(X);r.renderbufferStorageMultisample(r.RENDERBUFFER,Te,ye,X.width,X.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.RENDERBUFFER,d.__webglColorRenderbuffer[oe])}r.bindRenderbuffer(r.RENDERBUFFER,null),X.depthBuffer&&(d.__webglDepthRenderbuffer=r.createRenderbuffer(),N(d.__webglDepthRenderbuffer,X,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(J){t.bindTexture(r.TEXTURE_CUBE_MAP,b.__webglTexture),j(r.TEXTURE_CUBE_MAP,z);for(let oe=0;oe<6;oe++)if(z.mipmaps&&z.mipmaps.length>0)for(let xe=0;xe<z.mipmaps.length;xe++)he(d.__webglFramebuffer[oe][xe],X,z,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,xe);else he(d.__webglFramebuffer[oe],X,z,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);v(z)&&_(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ue){for(let oe=0,xe=Z.length;oe<xe;oe++){const Me=Z[oe],me=n.get(Me);t.bindTexture(r.TEXTURE_2D,me.__webglTexture),j(r.TEXTURE_2D,Me),he(d.__webglFramebuffer,X,Me,r.COLOR_ATTACHMENT0+oe,r.TEXTURE_2D,0),v(Me)&&_(r.TEXTURE_2D)}t.unbindTexture()}else{let oe=r.TEXTURE_2D;if((X.isWebGL3DRenderTarget||X.isWebGLArrayRenderTarget)&&(oe=X.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(oe,b.__webglTexture),j(oe,z),z.mipmaps&&z.mipmaps.length>0)for(let xe=0;xe<z.mipmaps.length;xe++)he(d.__webglFramebuffer[xe],X,z,r.COLOR_ATTACHMENT0,oe,xe);else he(d.__webglFramebuffer,X,z,r.COLOR_ATTACHMENT0,oe,0);v(z)&&_(oe),t.unbindTexture()}X.depthBuffer&&G(X)}function ie(X){const z=X.textures;for(let d=0,b=z.length;d<b;d++){const Z=z[d];if(v(Z)){const J=X.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,ue=n.get(Z).__webglTexture;t.bindTexture(J,ue),_(J),t.unbindTexture()}}}function K(X){if(X.samples>0&&fe(X)===!1){const z=X.textures,d=X.width,b=X.height;let Z=r.COLOR_BUFFER_BIT;const J=[],ue=X.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,oe=n.get(X),xe=z.length>1;if(xe)for(let Me=0;Me<z.length;Me++)t.bindFramebuffer(r.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Me,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,oe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Me,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let Me=0;Me<z.length;Me++){J.push(r.COLOR_ATTACHMENT0+Me),X.depthBuffer&&J.push(ue);const me=oe.__ignoreDepthValues!==void 0?oe.__ignoreDepthValues:!1;if(me===!1&&(X.depthBuffer&&(Z|=r.DEPTH_BUFFER_BIT),X.stencilBuffer&&oe.__isTransmissionRenderTarget!==!0&&(Z|=r.STENCIL_BUFFER_BIT)),xe&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,oe.__webglColorRenderbuffer[Me]),me===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[ue]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[ue])),xe){const ye=n.get(z[Me]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ye,0)}r.blitFramebuffer(0,0,d,b,0,0,d,b,Z,r.NEAREST),c&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,J)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),xe)for(let Me=0;Me<z.length;Me++){t.bindFramebuffer(r.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Me,r.RENDERBUFFER,oe.__webglColorRenderbuffer[Me]);const me=n.get(z[Me]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,oe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Me,r.TEXTURE_2D,me,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}}function le(X){return Math.min(i.maxSamples,X.samples)}function fe(X){const z=n.get(X);return X.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&z.__useRenderToTexture!==!1}function Y(X){const z=a.render.frame;u.get(X)!==z&&(u.set(X,z),X.update())}function ee(X,z){const d=X.colorSpace,b=X.format,Z=X.type;return X.isCompressedTexture===!0||X.isVideoTexture===!0||d!==LinearSRGBColorSpace&&d!==NoColorSpace&&(ColorManagement.getTransfer(d)===SRGBTransfer?(b!==RGBAFormat||Z!==UnsignedByteType)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",d)),z}function se(X){return typeof HTMLImageElement<"u"&&X instanceof HTMLImageElement?(l.width=X.naturalWidth||X.width,l.height=X.naturalHeight||X.height):typeof VideoFrame<"u"&&X instanceof VideoFrame?(l.width=X.displayWidth,l.height=X.displayHeight):(l.width=X.width,l.height=X.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=E,this.setTexture2D=H,this.setTexture2DArray=te,this.setTexture3D=de,this.setTextureCube=ve,this.rebindTextures=ae,this.setupRenderTarget=Q,this.updateRenderTargetMipmap=ie,this.updateMultisampleRenderTarget=K,this.setupDepthRenderbuffer=G,this.setupFrameBufferTexture=he,this.useMultisampledRTT=fe}function WebGLUtils(r,e){function t(n,i=NoColorSpace){let s;const a=ColorManagement.getTransfer(i);if(n===UnsignedByteType)return r.UNSIGNED_BYTE;if(n===UnsignedShort4444Type)return r.UNSIGNED_SHORT_4_4_4_4;if(n===UnsignedShort5551Type)return r.UNSIGNED_SHORT_5_5_5_1;if(n===UnsignedInt5999Type)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===ByteType)return r.BYTE;if(n===ShortType)return r.SHORT;if(n===UnsignedShortType)return r.UNSIGNED_SHORT;if(n===IntType)return r.INT;if(n===UnsignedIntType)return r.UNSIGNED_INT;if(n===FloatType)return r.FLOAT;if(n===HalfFloatType)return r.HALF_FLOAT;if(n===AlphaFormat)return r.ALPHA;if(n===RGBFormat)return r.RGB;if(n===RGBAFormat)return r.RGBA;if(n===LuminanceFormat)return r.LUMINANCE;if(n===LuminanceAlphaFormat)return r.LUMINANCE_ALPHA;if(n===DepthFormat)return r.DEPTH_COMPONENT;if(n===DepthStencilFormat)return r.DEPTH_STENCIL;if(n===RedFormat)return r.RED;if(n===RedIntegerFormat)return r.RED_INTEGER;if(n===RGFormat)return r.RG;if(n===RGIntegerFormat)return r.RG_INTEGER;if(n===RGBAIntegerFormat)return r.RGBA_INTEGER;if(n===RGB_S3TC_DXT1_Format||n===RGBA_S3TC_DXT1_Format||n===RGBA_S3TC_DXT3_Format||n===RGBA_S3TC_DXT5_Format)if(a===SRGBTransfer)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===RGB_S3TC_DXT1_Format)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===RGBA_S3TC_DXT1_Format)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===RGBA_S3TC_DXT3_Format)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===RGBA_S3TC_DXT5_Format)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===RGB_S3TC_DXT1_Format)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===RGBA_S3TC_DXT1_Format)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===RGBA_S3TC_DXT3_Format)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===RGBA_S3TC_DXT5_Format)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===RGB_PVRTC_4BPPV1_Format||n===RGB_PVRTC_2BPPV1_Format||n===RGBA_PVRTC_4BPPV1_Format||n===RGBA_PVRTC_2BPPV1_Format)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===RGB_PVRTC_4BPPV1_Format)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===RGB_PVRTC_2BPPV1_Format)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===RGBA_PVRTC_4BPPV1_Format)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===RGBA_PVRTC_2BPPV1_Format)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===RGB_ETC1_Format)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(n===RGB_ETC2_Format||n===RGBA_ETC2_EAC_Format)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===RGB_ETC2_Format)return a===SRGBTransfer?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===RGBA_ETC2_EAC_Format)return a===SRGBTransfer?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===RGBA_ASTC_4x4_Format||n===RGBA_ASTC_5x4_Format||n===RGBA_ASTC_5x5_Format||n===RGBA_ASTC_6x5_Format||n===RGBA_ASTC_6x6_Format||n===RGBA_ASTC_8x5_Format||n===RGBA_ASTC_8x6_Format||n===RGBA_ASTC_8x8_Format||n===RGBA_ASTC_10x5_Format||n===RGBA_ASTC_10x6_Format||n===RGBA_ASTC_10x8_Format||n===RGBA_ASTC_10x10_Format||n===RGBA_ASTC_12x10_Format||n===RGBA_ASTC_12x12_Format)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===RGBA_ASTC_4x4_Format)return a===SRGBTransfer?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===RGBA_ASTC_5x4_Format)return a===SRGBTransfer?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===RGBA_ASTC_5x5_Format)return a===SRGBTransfer?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===RGBA_ASTC_6x5_Format)return a===SRGBTransfer?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===RGBA_ASTC_6x6_Format)return a===SRGBTransfer?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===RGBA_ASTC_8x5_Format)return a===SRGBTransfer?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===RGBA_ASTC_8x6_Format)return a===SRGBTransfer?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===RGBA_ASTC_8x8_Format)return a===SRGBTransfer?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===RGBA_ASTC_10x5_Format)return a===SRGBTransfer?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===RGBA_ASTC_10x6_Format)return a===SRGBTransfer?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===RGBA_ASTC_10x8_Format)return a===SRGBTransfer?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===RGBA_ASTC_10x10_Format)return a===SRGBTransfer?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===RGBA_ASTC_12x10_Format)return a===SRGBTransfer?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===RGBA_ASTC_12x12_Format)return a===SRGBTransfer?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===RGBA_BPTC_Format||n===RGB_BPTC_SIGNED_Format||n===RGB_BPTC_UNSIGNED_Format)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===RGBA_BPTC_Format)return a===SRGBTransfer?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===RGB_BPTC_SIGNED_Format)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===RGB_BPTC_UNSIGNED_Format)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===RED_RGTC1_Format||n===SIGNED_RED_RGTC1_Format||n===RED_GREEN_RGTC2_Format||n===SIGNED_RED_GREEN_RGTC2_Format)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===RGBA_BPTC_Format)return s.COMPRESSED_RED_RGTC1_EXT;if(n===SIGNED_RED_RGTC1_Format)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===RED_GREEN_RGTC2_Format)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===SIGNED_RED_GREEN_RGTC2_Format)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===UnsignedInt248Type?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}class ArrayCamera extends PerspectiveCamera{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Group extends Object3D{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _moveEvent={type:"move"};class WebXRController{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Group,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Group,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Vector3,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Vector3),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Group,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Vector3,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Vector3),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const g of e.hand.values()){const v=t.getJointPose(g,n),_=this._getHandJoint(l,g);v!==null&&(_.matrix.fromArray(v.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=v.radius),_.visible=v!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],p=u.position.distanceTo(h.position),f=.02,m=.005;l.inputState.pinching&&p>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&p<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(_moveEvent)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Group;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const _occlusion_vertex=`
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

}`;class WebXRDepthSensing{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Texture,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,i=new ShaderMaterial({vertexShader:_occlusion_vertex,fragmentShader:_occlusion_fragment,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Mesh(new PlaneGeometry(20,20),i)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class WebXRManager extends EventDispatcher{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,p=null,f=null,m=null;const g=new WebXRDepthSensing,v=t.getContextAttributes();let _=null,L=null;const x=[],M=[],R=new Vector2;let D=null;const I=new PerspectiveCamera;I.layers.enable(1),I.viewport=new Vector4;const y=new PerspectiveCamera;y.layers.enable(2),y.viewport=new Vector4;const S=[I,y],E=new ArrayCamera;E.layers.enable(1),E.layers.enable(2);let O=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(he){let N=x[he];return N===void 0&&(N=new WebXRController,x[he]=N),N.getTargetRaySpace()},this.getControllerGrip=function(he){let N=x[he];return N===void 0&&(N=new WebXRController,x[he]=N),N.getGripSpace()},this.getHand=function(he){let N=x[he];return N===void 0&&(N=new WebXRController,x[he]=N),N.getHandSpace()};function H(he){const N=M.indexOf(he.inputSource);if(N===-1)return;const w=x[N];w!==void 0&&(w.update(he.inputSource,he.frame,l||a),w.dispatchEvent({type:he.type,data:he.inputSource}))}function te(){i.removeEventListener("select",H),i.removeEventListener("selectstart",H),i.removeEventListener("selectend",H),i.removeEventListener("squeeze",H),i.removeEventListener("squeezestart",H),i.removeEventListener("squeezeend",H),i.removeEventListener("end",te),i.removeEventListener("inputsourceschange",de);for(let he=0;he<x.length;he++){const N=M[he];N!==null&&(M[he]=null,x[he].disconnect(N))}O=null,$=null,g.reset(),e.setRenderTarget(_),f=null,p=null,h=null,i=null,L=null,_e.stop(),n.isPresenting=!1,e.setPixelRatio(D),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(he){s=he,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(he){o=he,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(he){l=he},this.getBaseLayer=function(){return p!==null?p:f},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(he){if(i=he,i!==null){if(_=e.getRenderTarget(),i.addEventListener("select",H),i.addEventListener("selectstart",H),i.addEventListener("selectend",H),i.addEventListener("squeeze",H),i.addEventListener("squeezestart",H),i.addEventListener("squeezeend",H),i.addEventListener("end",te),i.addEventListener("inputsourceschange",de),v.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(R),i.renderState.layers===void 0){const N={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,N),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),L=new WebGLRenderTarget(f.framebufferWidth,f.framebufferHeight,{format:RGBAFormat,type:UnsignedByteType,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let N=null,w=null,G=null;v.depth&&(G=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,N=v.stencil?DepthStencilFormat:DepthFormat,w=v.stencil?UnsignedInt248Type:UnsignedIntType);const ae={colorFormat:t.RGBA8,depthFormat:G,scaleFactor:s};h=new XRWebGLBinding(i,t),p=h.createProjectionLayer(ae),i.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),L=new WebGLRenderTarget(p.textureWidth,p.textureHeight,{format:RGBAFormat,type:UnsignedByteType,depthTexture:new DepthTexture(p.textureWidth,p.textureHeight,w,void 0,void 0,void 0,void 0,void 0,void 0,N),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const Q=e.properties.get(L);Q.__ignoreDepthValues=p.ignoreDepthValues}L.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),_e.setContext(i),_e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function de(he){for(let N=0;N<he.removed.length;N++){const w=he.removed[N],G=M.indexOf(w);G>=0&&(M[G]=null,x[G].disconnect(w))}for(let N=0;N<he.added.length;N++){const w=he.added[N];let G=M.indexOf(w);if(G===-1){for(let Q=0;Q<x.length;Q++)if(Q>=M.length){M.push(w),G=Q;break}else if(M[Q]===null){M[Q]=w,G=Q;break}if(G===-1)break}const ae=x[G];ae&&ae.connect(w)}}const ve=new Vector3,ge=new Vector3;function q(he,N,w){ve.setFromMatrixPosition(N.matrixWorld),ge.setFromMatrixPosition(w.matrixWorld);const G=ve.distanceTo(ge),ae=N.projectionMatrix.elements,Q=w.projectionMatrix.elements,ie=ae[14]/(ae[10]-1),K=ae[14]/(ae[10]+1),le=(ae[9]+1)/ae[5],fe=(ae[9]-1)/ae[5],Y=(ae[8]-1)/ae[0],ee=(Q[8]+1)/Q[0],se=ie*Y,X=ie*ee,z=G/(-Y+ee),d=z*-Y;N.matrixWorld.decompose(he.position,he.quaternion,he.scale),he.translateX(d),he.translateZ(z),he.matrixWorld.compose(he.position,he.quaternion,he.scale),he.matrixWorldInverse.copy(he.matrixWorld).invert();const b=ie+z,Z=K+z,J=se-d,ue=X+(G-d),oe=le*K/Z*b,xe=fe*K/Z*b;he.projectionMatrix.makePerspective(J,ue,oe,xe,b,Z),he.projectionMatrixInverse.copy(he.projectionMatrix).invert()}function F(he,N){N===null?he.matrixWorld.copy(he.matrix):he.matrixWorld.multiplyMatrices(N.matrixWorld,he.matrix),he.matrixWorldInverse.copy(he.matrixWorld).invert()}this.updateCamera=function(he){if(i===null)return;g.texture!==null&&(he.near=g.depthNear,he.far=g.depthFar),E.near=y.near=I.near=he.near,E.far=y.far=I.far=he.far,(O!==E.near||$!==E.far)&&(i.updateRenderState({depthNear:E.near,depthFar:E.far}),O=E.near,$=E.far,I.near=O,I.far=$,y.near=O,y.far=$,I.updateProjectionMatrix(),y.updateProjectionMatrix(),he.updateProjectionMatrix());const N=he.parent,w=E.cameras;F(E,N);for(let G=0;G<w.length;G++)F(w[G],N);w.length===2?q(E,I,y):E.projectionMatrix.copy(I.projectionMatrix),j(he,E,N)};function j(he,N,w){w===null?he.matrix.copy(N.matrixWorld):(he.matrix.copy(w.matrixWorld),he.matrix.invert(),he.matrix.multiply(N.matrixWorld)),he.matrix.decompose(he.position,he.quaternion,he.scale),he.updateMatrixWorld(!0),he.projectionMatrix.copy(N.projectionMatrix),he.projectionMatrixInverse.copy(N.projectionMatrixInverse),he.isPerspectiveCamera&&(he.fov=RAD2DEG*2*Math.atan(1/he.projectionMatrix.elements[5]),he.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(p===null&&f===null))return c},this.setFoveation=function(he){c=he,p!==null&&(p.fixedFoveation=he),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=he)},this.hasDepthSensing=function(){return g.texture!==null};let ce=null;function pe(he,N){if(u=N.getViewerPose(l||a),m=N,u!==null){const w=u.views;f!==null&&(e.setRenderTargetFramebuffer(L,f.framebuffer),e.setRenderTarget(L));let G=!1;w.length!==E.cameras.length&&(E.cameras.length=0,G=!0);for(let Q=0;Q<w.length;Q++){const ie=w[Q];let K=null;if(f!==null)K=f.getViewport(ie);else{const fe=h.getViewSubImage(p,ie);K=fe.viewport,Q===0&&(e.setRenderTargetTextures(L,fe.colorTexture,p.ignoreDepthValues?void 0:fe.depthStencilTexture),e.setRenderTarget(L))}let le=S[Q];le===void 0&&(le=new PerspectiveCamera,le.layers.enable(Q),le.viewport=new Vector4,S[Q]=le),le.matrix.fromArray(ie.transform.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale),le.projectionMatrix.fromArray(ie.projectionMatrix),le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),le.viewport.set(K.x,K.y,K.width,K.height),Q===0&&(E.matrix.copy(le.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),G===!0&&E.cameras.push(le)}const ae=i.enabledFeatures;if(ae&&ae.includes("depth-sensing")){const Q=h.getDepthInformation(w[0]);Q&&Q.isValid&&Q.texture&&g.init(e,Q,i.renderState)}}for(let w=0;w<x.length;w++){const G=M[w],ae=x[w];G!==null&&ae!==void 0&&ae.update(G,N,l||a)}g.render(e,E),ce&&ce(he,N),N.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:N}),m=null}const _e=new WebGLAnimation;_e.setAnimationLoop(pe),this.setAnimationLoop=function(he){ce=he},this.dispose=function(){}}}const _e1=new Euler,_m1=new Matrix4;function WebGLMaterials(r,e){function t(v,_){v.matrixAutoUpdate===!0&&v.updateMatrix(),_.value.copy(v.matrix)}function n(v,_){_.color.getRGB(v.fogColor.value,getUnlitUniformColorSpace(r)),_.isFog?(v.fogNear.value=_.near,v.fogFar.value=_.far):_.isFogExp2&&(v.fogDensity.value=_.density)}function i(v,_,L,x,M){_.isMeshBasicMaterial||_.isMeshLambertMaterial?s(v,_):_.isMeshToonMaterial?(s(v,_),h(v,_)):_.isMeshPhongMaterial?(s(v,_),u(v,_)):_.isMeshStandardMaterial?(s(v,_),p(v,_),_.isMeshPhysicalMaterial&&f(v,_,M)):_.isMeshMatcapMaterial?(s(v,_),m(v,_)):_.isMeshDepthMaterial?s(v,_):_.isMeshDistanceMaterial?(s(v,_),g(v,_)):_.isMeshNormalMaterial?s(v,_):_.isLineBasicMaterial?(a(v,_),_.isLineDashedMaterial&&o(v,_)):_.isPointsMaterial?c(v,_,L,x):_.isSpriteMaterial?l(v,_):_.isShadowMaterial?(v.color.value.copy(_.color),v.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function s(v,_){v.opacity.value=_.opacity,_.color&&v.diffuse.value.copy(_.color),_.emissive&&v.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(v.map.value=_.map,t(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,t(_.alphaMap,v.alphaMapTransform)),_.bumpMap&&(v.bumpMap.value=_.bumpMap,t(_.bumpMap,v.bumpMapTransform),v.bumpScale.value=_.bumpScale,_.side===BackSide&&(v.bumpScale.value*=-1)),_.normalMap&&(v.normalMap.value=_.normalMap,t(_.normalMap,v.normalMapTransform),v.normalScale.value.copy(_.normalScale),_.side===BackSide&&v.normalScale.value.negate()),_.displacementMap&&(v.displacementMap.value=_.displacementMap,t(_.displacementMap,v.displacementMapTransform),v.displacementScale.value=_.displacementScale,v.displacementBias.value=_.displacementBias),_.emissiveMap&&(v.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,v.emissiveMapTransform)),_.specularMap&&(v.specularMap.value=_.specularMap,t(_.specularMap,v.specularMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest);const L=e.get(_),x=L.envMap,M=L.envMapRotation;if(x&&(v.envMap.value=x,_e1.copy(M),_e1.x*=-1,_e1.y*=-1,_e1.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(_e1.y*=-1,_e1.z*=-1),v.envMapRotation.value.setFromMatrix4(_m1.makeRotationFromEuler(_e1)),v.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=_.reflectivity,v.ior.value=_.ior,v.refractionRatio.value=_.refractionRatio),_.lightMap){v.lightMap.value=_.lightMap;const R=r._useLegacyLights===!0?Math.PI:1;v.lightMapIntensity.value=_.lightMapIntensity*R,t(_.lightMap,v.lightMapTransform)}_.aoMap&&(v.aoMap.value=_.aoMap,v.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,v.aoMapTransform))}function a(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,_.map&&(v.map.value=_.map,t(_.map,v.mapTransform))}function o(v,_){v.dashSize.value=_.dashSize,v.totalSize.value=_.dashSize+_.gapSize,v.scale.value=_.scale}function c(v,_,L,x){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.size.value=_.size*L,v.scale.value=x*.5,_.map&&(v.map.value=_.map,t(_.map,v.uvTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,t(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function l(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.rotation.value=_.rotation,_.map&&(v.map.value=_.map,t(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,t(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function u(v,_){v.specular.value.copy(_.specular),v.shininess.value=Math.max(_.shininess,1e-4)}function h(v,_){_.gradientMap&&(v.gradientMap.value=_.gradientMap)}function p(v,_){v.metalness.value=_.metalness,_.metalnessMap&&(v.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,v.metalnessMapTransform)),v.roughness.value=_.roughness,_.roughnessMap&&(v.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,v.roughnessMapTransform)),_.envMap&&(v.envMapIntensity.value=_.envMapIntensity)}function f(v,_,L){v.ior.value=_.ior,_.sheen>0&&(v.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),v.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(v.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,v.sheenColorMapTransform)),_.sheenRoughnessMap&&(v.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,v.sheenRoughnessMapTransform))),_.clearcoat>0&&(v.clearcoat.value=_.clearcoat,v.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(v.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,v.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(v.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===BackSide&&v.clearcoatNormalScale.value.negate())),_.iridescence>0&&(v.iridescence.value=_.iridescence,v.iridescenceIOR.value=_.iridescenceIOR,v.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(v.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,v.iridescenceMapTransform)),_.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),_.transmission>0&&(v.transmission.value=_.transmission,v.transmissionSamplerMap.value=L.texture,v.transmissionSamplerSize.value.set(L.width,L.height),_.transmissionMap&&(v.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,v.transmissionMapTransform)),v.thickness.value=_.thickness,_.thicknessMap&&(v.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=_.attenuationDistance,v.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(v.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(v.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=_.specularIntensity,v.specularColor.value.copy(_.specularColor),_.specularColorMap&&(v.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,v.specularColorMapTransform)),_.specularIntensityMap&&(v.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,v.specularIntensityMapTransform))}function m(v,_){_.matcap&&(v.matcap.value=_.matcap)}function g(v,_){const L=e.get(_).light;v.referencePosition.value.setFromMatrixPosition(L.matrixWorld),v.nearDistance.value=L.shadow.camera.near,v.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function WebGLUniformsGroups(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(L,x){const M=x.program;n.uniformBlockBinding(L,M)}function l(L,x){let M=i[L.id];M===void 0&&(m(L),M=u(L),i[L.id]=M,L.addEventListener("dispose",v));const R=x.program;n.updateUBOMapping(L,R);const D=e.render.frame;s[L.id]!==D&&(p(L),s[L.id]=D)}function u(L){const x=h();L.__bindingPointIndex=x;const M=r.createBuffer(),R=L.__size,D=L.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,R,D),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,M),M}function h(){for(let L=0;L<o;L++)if(a.indexOf(L)===-1)return a.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(L){const x=i[L.id],M=L.uniforms,R=L.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let D=0,I=M.length;D<I;D++){const y=Array.isArray(M[D])?M[D]:[M[D]];for(let S=0,E=y.length;S<E;S++){const O=y[S];if(f(O,D,S,R)===!0){const $=O.__offset,H=Array.isArray(O.value)?O.value:[O.value];let te=0;for(let de=0;de<H.length;de++){const ve=H[de],ge=g(ve);typeof ve=="number"||typeof ve=="boolean"?(O.__data[0]=ve,r.bufferSubData(r.UNIFORM_BUFFER,$+te,O.__data)):ve.isMatrix3?(O.__data[0]=ve.elements[0],O.__data[1]=ve.elements[1],O.__data[2]=ve.elements[2],O.__data[3]=0,O.__data[4]=ve.elements[3],O.__data[5]=ve.elements[4],O.__data[6]=ve.elements[5],O.__data[7]=0,O.__data[8]=ve.elements[6],O.__data[9]=ve.elements[7],O.__data[10]=ve.elements[8],O.__data[11]=0):(ve.toArray(O.__data,te),te+=ge.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,$,O.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(L,x,M,R){const D=L.value,I=x+"_"+M;if(R[I]===void 0)return typeof D=="number"||typeof D=="boolean"?R[I]=D:R[I]=D.clone(),!0;{const y=R[I];if(typeof D=="number"||typeof D=="boolean"){if(y!==D)return R[I]=D,!0}else if(y.equals(D)===!1)return y.copy(D),!0}return!1}function m(L){const x=L.uniforms;let M=0;const R=16;for(let I=0,y=x.length;I<y;I++){const S=Array.isArray(x[I])?x[I]:[x[I]];for(let E=0,O=S.length;E<O;E++){const $=S[E],H=Array.isArray($.value)?$.value:[$.value];for(let te=0,de=H.length;te<de;te++){const ve=H[te],ge=g(ve),q=M%R;q!==0&&R-q<ge.boundary&&(M+=R-q),$.__data=new Float32Array(ge.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=M,M+=ge.storage}}}const D=M%R;return D>0&&(M+=R-D),L.__size=M,L.__cache={},this}function g(L){const x={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(x.boundary=4,x.storage=4):L.isVector2?(x.boundary=8,x.storage=8):L.isVector3||L.isColor?(x.boundary=16,x.storage=12):L.isVector4?(x.boundary=16,x.storage=16):L.isMatrix3?(x.boundary=48,x.storage=48):L.isMatrix4?(x.boundary=64,x.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),x}function v(L){const x=L.target;x.removeEventListener("dispose",v);const M=a.indexOf(x.__bindingPointIndex);a.splice(M,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function _(){for(const L in i)r.deleteBuffer(i[L]);a=[],i={},s={}}return{bind:c,update:l,dispose:_}}class WebGLRenderer{constructor(e={}){const{canvas:t=createCanvasElement(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const f=new Uint32Array(4),m=new Int32Array(4);let g=null,v=null;const _=[],L=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=SRGBColorSpace,this._useLegacyLights=!1,this.toneMapping=NoToneMapping,this.toneMappingExposure=1;const x=this;let M=!1,R=0,D=0,I=null,y=-1,S=null;const E=new Vector4,O=new Vector4;let $=null;const H=new Color(0);let te=0,de=t.width,ve=t.height,ge=1,q=null,F=null;const j=new Vector4(0,0,de,ve),ce=new Vector4(0,0,de,ve);let pe=!1;const _e=new Frustum;let he=!1,N=!1;const w=new Matrix4,G=new Vector2,ae=new Vector3,Q={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ie(){return I===null?ge:1}let K=n;function le(ne,Se){const be=t.getContext(ne,Se);return be!==null?be:null}try{const ne={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${REVISION}`),t.addEventListener("webglcontextlost",Le,!1),t.addEventListener("webglcontextrestored",De,!1),t.addEventListener("webglcontextcreationerror",Ie,!1),K===null){const Se="webgl2";if(K=le(Se,ne),K===null)throw le(Se)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(ne){throw console.error("THREE.WebGLRenderer: "+ne.message),ne}let fe,Y,ee,se,X,z,d,b,Z,J,ue,oe,xe,Me,me,ye,Te,Ce,Ee,Pe,Ue,Fe,Re,Oe;function Ne(){fe=new WebGLExtensions(K),fe.init(),Y=new WebGLCapabilities(K,fe,e),Fe=new WebGLUtils(K,fe),ee=new WebGLState(K),se=new WebGLInfo(K),X=new WebGLProperties,z=new WebGLTextures(K,fe,ee,X,Y,Fe,se),d=new WebGLCubeMaps(x),b=new WebGLCubeUVMaps(x),Z=new WebGLAttributes(K),Re=new WebGLBindingStates(K,Z),J=new WebGLGeometries(K,Z,se,Re),ue=new WebGLObjects(K,J,Z,se),Ee=new WebGLMorphtargets(K,Y,z),ye=new WebGLClipping(X),oe=new WebGLPrograms(x,d,b,fe,Y,Re,ye),xe=new WebGLMaterials(x,X),Me=new WebGLRenderLists,me=new WebGLRenderStates(fe),Ce=new WebGLBackground(x,d,b,ee,ue,p,c),Te=new WebGLShadowMap(x,ue,Y),Oe=new WebGLUniformsGroups(K,se,Y,ee),Pe=new WebGLBufferRenderer(K,fe,se),Ue=new WebGLIndexedBufferRenderer(K,fe,se),se.programs=oe.programs,x.capabilities=Y,x.extensions=fe,x.properties=X,x.renderLists=Me,x.shadowMap=Te,x.state=ee,x.info=se}Ne();const re=new WebXRManager(x,K);this.xr=re,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){const ne=fe.get("WEBGL_lose_context");ne&&ne.loseContext()},this.forceContextRestore=function(){const ne=fe.get("WEBGL_lose_context");ne&&ne.restoreContext()},this.getPixelRatio=function(){return ge},this.setPixelRatio=function(ne){ne!==void 0&&(ge=ne,this.setSize(de,ve,!1))},this.getSize=function(ne){return ne.set(de,ve)},this.setSize=function(ne,Se,be=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}de=ne,ve=Se,t.width=Math.floor(ne*ge),t.height=Math.floor(Se*ge),be===!0&&(t.style.width=ne+"px",t.style.height=Se+"px"),this.setViewport(0,0,ne,Se)},this.getDrawingBufferSize=function(ne){return ne.set(de*ge,ve*ge).floor()},this.setDrawingBufferSize=function(ne,Se,be){de=ne,ve=Se,ge=be,t.width=Math.floor(ne*be),t.height=Math.floor(Se*be),this.setViewport(0,0,ne,Se)},this.getCurrentViewport=function(ne){return ne.copy(E)},this.getViewport=function(ne){return ne.copy(j)},this.setViewport=function(ne,Se,be,we){ne.isVector4?j.set(ne.x,ne.y,ne.z,ne.w):j.set(ne,Se,be,we),ee.viewport(E.copy(j).multiplyScalar(ge).round())},this.getScissor=function(ne){return ne.copy(ce)},this.setScissor=function(ne,Se,be,we){ne.isVector4?ce.set(ne.x,ne.y,ne.z,ne.w):ce.set(ne,Se,be,we),ee.scissor(O.copy(ce).multiplyScalar(ge).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(ne){ee.setScissorTest(pe=ne)},this.setOpaqueSort=function(ne){q=ne},this.setTransparentSort=function(ne){F=ne},this.getClearColor=function(ne){return ne.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor.apply(Ce,arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha.apply(Ce,arguments)},this.clear=function(ne=!0,Se=!0,be=!0){let we=0;if(ne){let Ae=!1;if(I!==null){const Ve=I.texture.format;Ae=Ve===RGBAIntegerFormat||Ve===RGIntegerFormat||Ve===RedIntegerFormat}if(Ae){const Ve=I.texture.type,ke=Ve===UnsignedByteType||Ve===UnsignedIntType||Ve===UnsignedShortType||Ve===UnsignedInt248Type||Ve===UnsignedShort4444Type||Ve===UnsignedShort5551Type,Ge=Ce.getClearColor(),We=Ce.getClearAlpha(),Ye=Ge.r,Xe=Ge.g,je=Ge.b;ke?(f[0]=Ye,f[1]=Xe,f[2]=je,f[3]=We,K.clearBufferuiv(K.COLOR,0,f)):(m[0]=Ye,m[1]=Xe,m[2]=je,m[3]=We,K.clearBufferiv(K.COLOR,0,m))}else we|=K.COLOR_BUFFER_BIT}Se&&(we|=K.DEPTH_BUFFER_BIT),be&&(we|=K.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K.clear(we)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Le,!1),t.removeEventListener("webglcontextrestored",De,!1),t.removeEventListener("webglcontextcreationerror",Ie,!1),Me.dispose(),me.dispose(),X.dispose(),d.dispose(),b.dispose(),ue.dispose(),Re.dispose(),Oe.dispose(),oe.dispose(),re.dispose(),re.removeEventListener("sessionstart",Qe),re.removeEventListener("sessionend",Ke),it.stop()};function Le(ne){ne.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const ne=se.autoReset,Se=Te.enabled,be=Te.autoUpdate,we=Te.needsUpdate,Ae=Te.type;Ne(),se.autoReset=ne,Te.enabled=Se,Te.autoUpdate=be,Te.needsUpdate=we,Te.type=Ae}function Ie(ne){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",ne.statusMessage)}function Be(ne){const Se=ne.target;Se.removeEventListener("dispose",Be),ze(Se)}function ze(ne){He(ne),X.remove(ne)}function He(ne){const Se=X.get(ne).programs;Se!==void 0&&(Se.forEach(function(be){oe.releaseProgram(be)}),ne.isShaderMaterial&&oe.releaseShaderCache(ne))}this.renderBufferDirect=function(ne,Se,be,we,Ae,Ve){Se===null&&(Se=Q);const ke=Ae.isMesh&&Ae.matrixWorld.determinant()<0,Ge=At(ne,Se,be,we,Ae);ee.setMaterial(we,ke);let We=be.index,Ye=1;if(we.wireframe===!0){if(We=J.getWireframeAttribute(be),We===void 0)return;Ye=2}const Xe=be.drawRange,je=be.attributes.position;let nt=Xe.start*Ye,st=(Xe.start+Xe.count)*Ye;Ve!==null&&(nt=Math.max(nt,Ve.start*Ye),st=Math.min(st,(Ve.start+Ve.count)*Ye)),We!==null?(nt=Math.max(nt,0),st=Math.min(st,We.count)):je!=null&&(nt=Math.max(nt,0),st=Math.min(st,je.count));const rt=st-nt;if(rt<0||rt===1/0)return;Re.setup(Ae,we,Ge,be,We);let ct,tt=Pe;if(We!==null&&(ct=Z.get(We),tt=Ue,tt.setIndex(ct)),Ae.isMesh)we.wireframe===!0?(ee.setLineWidth(we.wireframeLinewidth*ie()),tt.setMode(K.LINES)):tt.setMode(K.TRIANGLES);else if(Ae.isLine){let Ze=we.linewidth;Ze===void 0&&(Ze=1),ee.setLineWidth(Ze*ie()),Ae.isLineSegments?tt.setMode(K.LINES):Ae.isLineLoop?tt.setMode(K.LINE_LOOP):tt.setMode(K.LINE_STRIP)}else Ae.isPoints?tt.setMode(K.POINTS):Ae.isSprite&&tt.setMode(K.TRIANGLES);if(Ae.isBatchedMesh)tt.renderMultiDraw(Ae._multiDrawStarts,Ae._multiDrawCounts,Ae._multiDrawCount);else if(Ae.isInstancedMesh)tt.renderInstances(nt,rt,Ae.count);else if(be.isInstancedBufferGeometry){const Ze=be._maxInstanceCount!==void 0?be._maxInstanceCount:1/0,vt=Math.min(be.instanceCount,Ze);tt.renderInstances(nt,rt,vt)}else tt.render(nt,rt)};function $e(ne,Se,be){ne.transparent===!0&&ne.side===DoubleSide&&ne.forceSinglePass===!1?(ne.side=BackSide,ne.needsUpdate=!0,mt(ne,Se,be),ne.side=FrontSide,ne.needsUpdate=!0,mt(ne,Se,be),ne.side=DoubleSide):mt(ne,Se,be)}this.compile=function(ne,Se,be=null){be===null&&(be=ne),v=me.get(be),v.init(),L.push(v),be.traverseVisible(function(Ae){Ae.isLight&&Ae.layers.test(Se.layers)&&(v.pushLight(Ae),Ae.castShadow&&v.pushShadow(Ae))}),ne!==be&&ne.traverseVisible(function(Ae){Ae.isLight&&Ae.layers.test(Se.layers)&&(v.pushLight(Ae),Ae.castShadow&&v.pushShadow(Ae))}),v.setupLights(x._useLegacyLights);const we=new Set;return ne.traverse(function(Ae){const Ve=Ae.material;if(Ve)if(Array.isArray(Ve))for(let ke=0;ke<Ve.length;ke++){const Ge=Ve[ke];$e(Ge,be,Ae),we.add(Ge)}else $e(Ve,be,Ae),we.add(Ve)}),L.pop(),v=null,we},this.compileAsync=function(ne,Se,be=null){const we=this.compile(ne,Se,be);return new Promise(Ae=>{function Ve(){if(we.forEach(function(ke){X.get(ke).currentProgram.isReady()&&we.delete(ke)}),we.size===0){Ae(ne);return}setTimeout(Ve,10)}fe.get("KHR_parallel_shader_compile")!==null?Ve():setTimeout(Ve,10)})};let Je=null;function qe(ne){Je&&Je(ne)}function Qe(){it.stop()}function Ke(){it.start()}const it=new WebGLAnimation;it.setAnimationLoop(qe),typeof self<"u"&&it.setContext(self),this.setAnimationLoop=function(ne){Je=ne,re.setAnimationLoop(ne),ne===null?it.stop():it.start()},re.addEventListener("sessionstart",Qe),re.addEventListener("sessionend",Ke),this.render=function(ne,Se){if(Se!==void 0&&Se.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;ne.matrixWorldAutoUpdate===!0&&ne.updateMatrixWorld(),Se.parent===null&&Se.matrixWorldAutoUpdate===!0&&Se.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(Se),Se=re.getCamera()),ne.isScene===!0&&ne.onBeforeRender(x,ne,Se,I),v=me.get(ne,L.length),v.init(),L.push(v),w.multiplyMatrices(Se.projectionMatrix,Se.matrixWorldInverse),_e.setFromProjectionMatrix(w),N=this.localClippingEnabled,he=ye.init(this.clippingPlanes,N),g=Me.get(ne,_.length),g.init(),_.push(g),ht(ne,Se,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(q,F),this.info.render.frame++,he===!0&&ye.beginShadows();const be=v.state.shadowsArray;if(Te.render(be,ne,Se),he===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset(),(re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1)&&Ce.render(g,ne),v.setupLights(x._useLegacyLights),Se.isArrayCamera){const we=Se.cameras;for(let Ae=0,Ve=we.length;Ae<Ve;Ae++){const ke=we[Ae];ft(g,ne,ke,ke.viewport)}}else ft(g,ne,Se);I!==null&&(z.updateMultisampleRenderTarget(I),z.updateRenderTargetMipmap(I)),ne.isScene===!0&&ne.onAfterRender(x,ne,Se),Re.resetDefaultState(),y=-1,S=null,L.pop(),L.length>0?v=L[L.length-1]:v=null,_.pop(),_.length>0?g=_[_.length-1]:g=null};function ht(ne,Se,be,we){if(ne.visible===!1)return;if(ne.layers.test(Se.layers)){if(ne.isGroup)be=ne.renderOrder;else if(ne.isLOD)ne.autoUpdate===!0&&ne.update(Se);else if(ne.isLight)v.pushLight(ne),ne.castShadow&&v.pushShadow(ne);else if(ne.isSprite){if(!ne.frustumCulled||_e.intersectsSprite(ne)){we&&ae.setFromMatrixPosition(ne.matrixWorld).applyMatrix4(w);const ke=ue.update(ne),Ge=ne.material;Ge.visible&&g.push(ne,ke,Ge,be,ae.z,null)}}else if((ne.isMesh||ne.isLine||ne.isPoints)&&(!ne.frustumCulled||_e.intersectsObject(ne))){const ke=ue.update(ne),Ge=ne.material;if(we&&(ne.boundingSphere!==void 0?(ne.boundingSphere===null&&ne.computeBoundingSphere(),ae.copy(ne.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),ae.copy(ke.boundingSphere.center)),ae.applyMatrix4(ne.matrixWorld).applyMatrix4(w)),Array.isArray(Ge)){const We=ke.groups;for(let Ye=0,Xe=We.length;Ye<Xe;Ye++){const je=We[Ye],nt=Ge[je.materialIndex];nt&&nt.visible&&g.push(ne,ke,nt,be,ae.z,je)}}else Ge.visible&&g.push(ne,ke,Ge,be,ae.z,null)}}const Ve=ne.children;for(let ke=0,Ge=Ve.length;ke<Ge;ke++)ht(Ve[ke],Se,be,we)}function ft(ne,Se,be,we){const Ae=ne.opaque,Ve=ne.transmissive,ke=ne.transparent;v.setupLightsView(be),he===!0&&ye.setGlobalState(x.clippingPlanes,be),Ve.length>0&&Tt(Ae,Ve,Se,be),we&&ee.viewport(E.copy(we)),Ae.length>0&&pt(Ae,Se,be),Ve.length>0&&pt(Ve,Se,be),ke.length>0&&pt(ke,Se,be),ee.buffers.depth.setTest(!0),ee.buffers.depth.setMask(!0),ee.buffers.color.setMask(!0),ee.setPolygonOffset(!1)}function Tt(ne,Se,be,we){if((be.isScene===!0?be.overrideMaterial:null)!==null)return;if(v.state.transmissionRenderTarget===null){v.state.transmissionRenderTarget=new WebGLRenderTarget(1,1,{generateMipmaps:!0,type:fe.has("EXT_color_buffer_half_float")||fe.has("EXT_color_buffer_float")?HalfFloatType:UnsignedByteType,minFilter:LinearMipmapLinearFilter,samples:4,stencilBuffer:s});const Ye=X.get(v.state.transmissionRenderTarget);Ye.__isTransmissionRenderTarget=!0}const Ve=v.state.transmissionRenderTarget;x.getDrawingBufferSize(G),Ve.setSize(G.x,G.y);const ke=x.getRenderTarget();x.setRenderTarget(Ve),x.getClearColor(H),te=x.getClearAlpha(),te<1&&x.setClearColor(16777215,.5),x.clear();const Ge=x.toneMapping;x.toneMapping=NoToneMapping,pt(ne,be,we),z.updateMultisampleRenderTarget(Ve),z.updateRenderTargetMipmap(Ve);let We=!1;for(let Ye=0,Xe=Se.length;Ye<Xe;Ye++){const je=Se[Ye],nt=je.object,st=je.geometry,rt=je.material,ct=je.group;if(rt.side===DoubleSide&&nt.layers.test(we.layers)){const tt=rt.side;rt.side=BackSide,rt.needsUpdate=!0,yt(nt,be,we,st,rt,ct),rt.side=tt,rt.needsUpdate=!0,We=!0}}We===!0&&(z.updateMultisampleRenderTarget(Ve),z.updateRenderTargetMipmap(Ve)),x.setRenderTarget(ke),x.setClearColor(H,te),x.toneMapping=Ge}function pt(ne,Se,be){const we=Se.isScene===!0?Se.overrideMaterial:null;for(let Ae=0,Ve=ne.length;Ae<Ve;Ae++){const ke=ne[Ae],Ge=ke.object,We=ke.geometry,Ye=we===null?ke.material:we,Xe=ke.group;Ge.layers.test(be.layers)&&yt(Ge,Se,be,We,Ye,Xe)}}function yt(ne,Se,be,we,Ae,Ve){ne.onBeforeRender(x,Se,be,we,Ae,Ve),ne.modelViewMatrix.multiplyMatrices(be.matrixWorldInverse,ne.matrixWorld),ne.normalMatrix.getNormalMatrix(ne.modelViewMatrix),Ae.onBeforeRender(x,Se,be,we,ne,Ve),Ae.transparent===!0&&Ae.side===DoubleSide&&Ae.forceSinglePass===!1?(Ae.side=BackSide,Ae.needsUpdate=!0,x.renderBufferDirect(be,Se,we,Ae,ne,Ve),Ae.side=FrontSide,Ae.needsUpdate=!0,x.renderBufferDirect(be,Se,we,Ae,ne,Ve),Ae.side=DoubleSide):x.renderBufferDirect(be,Se,we,Ae,ne,Ve),ne.onAfterRender(x,Se,be,we,Ae,Ve)}function mt(ne,Se,be){Se.isScene!==!0&&(Se=Q);const we=X.get(ne),Ae=v.state.lights,Ve=v.state.shadowsArray,ke=Ae.state.version,Ge=oe.getParameters(ne,Ae.state,Ve,Se,be),We=oe.getProgramCacheKey(Ge);let Ye=we.programs;we.environment=ne.isMeshStandardMaterial?Se.environment:null,we.fog=Se.fog,we.envMap=(ne.isMeshStandardMaterial?b:d).get(ne.envMap||we.environment),we.envMapRotation=we.environment!==null&&ne.envMap===null?Se.environmentRotation:ne.envMapRotation,Ye===void 0&&(ne.addEventListener("dispose",Be),Ye=new Map,we.programs=Ye);let Xe=Ye.get(We);if(Xe!==void 0){if(we.currentProgram===Xe&&we.lightsStateVersion===ke)return St(ne,Ge),Xe}else Ge.uniforms=oe.getUniforms(ne),ne.onBuild(be,Ge,x),ne.onBeforeCompile(Ge,x),Xe=oe.acquireProgram(Ge,We),Ye.set(We,Xe),we.uniforms=Ge.uniforms;const je=we.uniforms;return(!ne.isShaderMaterial&&!ne.isRawShaderMaterial||ne.clipping===!0)&&(je.clippingPlanes=ye.uniform),St(ne,Ge),we.needsLights=wt(ne),we.lightsStateVersion=ke,we.needsLights&&(je.ambientLightColor.value=Ae.state.ambient,je.lightProbe.value=Ae.state.probe,je.directionalLights.value=Ae.state.directional,je.directionalLightShadows.value=Ae.state.directionalShadow,je.spotLights.value=Ae.state.spot,je.spotLightShadows.value=Ae.state.spotShadow,je.rectAreaLights.value=Ae.state.rectArea,je.ltc_1.value=Ae.state.rectAreaLTC1,je.ltc_2.value=Ae.state.rectAreaLTC2,je.pointLights.value=Ae.state.point,je.pointLightShadows.value=Ae.state.pointShadow,je.hemisphereLights.value=Ae.state.hemi,je.directionalShadowMap.value=Ae.state.directionalShadowMap,je.directionalShadowMatrix.value=Ae.state.directionalShadowMatrix,je.spotShadowMap.value=Ae.state.spotShadowMap,je.spotLightMatrix.value=Ae.state.spotLightMatrix,je.spotLightMap.value=Ae.state.spotLightMap,je.pointShadowMap.value=Ae.state.pointShadowMap,je.pointShadowMatrix.value=Ae.state.pointShadowMatrix),we.currentProgram=Xe,we.uniformsList=null,Xe}function Mt(ne){if(ne.uniformsList===null){const Se=ne.currentProgram.getUniforms();ne.uniformsList=WebGLUniforms.seqWithValue(Se.seq,ne.uniforms)}return ne.uniformsList}function St(ne,Se){const be=X.get(ne);be.outputColorSpace=Se.outputColorSpace,be.batching=Se.batching,be.instancing=Se.instancing,be.instancingColor=Se.instancingColor,be.instancingMorph=Se.instancingMorph,be.skinning=Se.skinning,be.morphTargets=Se.morphTargets,be.morphNormals=Se.morphNormals,be.morphColors=Se.morphColors,be.morphTargetsCount=Se.morphTargetsCount,be.numClippingPlanes=Se.numClippingPlanes,be.numIntersection=Se.numClipIntersection,be.vertexAlphas=Se.vertexAlphas,be.vertexTangents=Se.vertexTangents,be.toneMapping=Se.toneMapping}function At(ne,Se,be,we,Ae){Se.isScene!==!0&&(Se=Q),z.resetTextureUnits();const Ve=Se.fog,ke=we.isMeshStandardMaterial?Se.environment:null,Ge=I===null?x.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:LinearSRGBColorSpace,We=(we.isMeshStandardMaterial?b:d).get(we.envMap||ke),Ye=we.vertexColors===!0&&!!be.attributes.color&&be.attributes.color.itemSize===4,Xe=!!be.attributes.tangent&&(!!we.normalMap||we.anisotropy>0),je=!!be.morphAttributes.position,nt=!!be.morphAttributes.normal,st=!!be.morphAttributes.color;let rt=NoToneMapping;we.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(rt=x.toneMapping);const ct=be.morphAttributes.position||be.morphAttributes.normal||be.morphAttributes.color,tt=ct!==void 0?ct.length:0,Ze=X.get(we),vt=v.state.lights;if(he===!0&&(N===!0||ne!==S)){const ot=ne===S&&we.id===y;ye.setState(we,ne,ot)}let et=!1;we.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==vt.state.version||Ze.outputColorSpace!==Ge||Ae.isBatchedMesh&&Ze.batching===!1||!Ae.isBatchedMesh&&Ze.batching===!0||Ae.isInstancedMesh&&Ze.instancing===!1||!Ae.isInstancedMesh&&Ze.instancing===!0||Ae.isSkinnedMesh&&Ze.skinning===!1||!Ae.isSkinnedMesh&&Ze.skinning===!0||Ae.isInstancedMesh&&Ze.instancingColor===!0&&Ae.instanceColor===null||Ae.isInstancedMesh&&Ze.instancingColor===!1&&Ae.instanceColor!==null||Ae.isInstancedMesh&&Ze.instancingMorph===!0&&Ae.morphTexture===null||Ae.isInstancedMesh&&Ze.instancingMorph===!1&&Ae.morphTexture!==null||Ze.envMap!==We||we.fog===!0&&Ze.fog!==Ve||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==ye.numPlanes||Ze.numIntersection!==ye.numIntersection)||Ze.vertexAlphas!==Ye||Ze.vertexTangents!==Xe||Ze.morphTargets!==je||Ze.morphNormals!==nt||Ze.morphColors!==st||Ze.toneMapping!==rt||Ze.morphTargetsCount!==tt)&&(et=!0):(et=!0,Ze.__version=we.version);let ut=Ze.currentProgram;et===!0&&(ut=mt(we,Se,Ae));let Et=!1,dt=!1,gt=!1;const at=ut.getUniforms(),lt=Ze.uniforms;if(ee.useProgram(ut.program)&&(Et=!0,dt=!0,gt=!0),we.id!==y&&(y=we.id,dt=!0),Et||S!==ne){at.setValue(K,"projectionMatrix",ne.projectionMatrix),at.setValue(K,"viewMatrix",ne.matrixWorldInverse);const ot=at.map.cameraPosition;ot!==void 0&&ot.setValue(K,ae.setFromMatrixPosition(ne.matrixWorld)),Y.logarithmicDepthBuffer&&at.setValue(K,"logDepthBufFC",2/(Math.log(ne.far+1)/Math.LN2)),(we.isMeshPhongMaterial||we.isMeshToonMaterial||we.isMeshLambertMaterial||we.isMeshBasicMaterial||we.isMeshStandardMaterial||we.isShaderMaterial)&&at.setValue(K,"isOrthographic",ne.isOrthographicCamera===!0),S!==ne&&(S=ne,dt=!0,gt=!0)}if(Ae.isSkinnedMesh){at.setOptional(K,Ae,"bindMatrix"),at.setOptional(K,Ae,"bindMatrixInverse");const ot=Ae.skeleton;ot&&(ot.boneTexture===null&&ot.computeBoneTexture(),at.setValue(K,"boneTexture",ot.boneTexture,z))}Ae.isBatchedMesh&&(at.setOptional(K,Ae,"batchingTexture"),at.setValue(K,"batchingTexture",Ae._matricesTexture,z));const _t=be.morphAttributes;if((_t.position!==void 0||_t.normal!==void 0||_t.color!==void 0)&&Ee.update(Ae,be,ut),(dt||Ze.receiveShadow!==Ae.receiveShadow)&&(Ze.receiveShadow=Ae.receiveShadow,at.setValue(K,"receiveShadow",Ae.receiveShadow)),we.isMeshGouraudMaterial&&we.envMap!==null&&(lt.envMap.value=We,lt.flipEnvMap.value=We.isCubeTexture&&We.isRenderTargetTexture===!1?-1:1),we.isMeshStandardMaterial&&we.envMap===null&&Se.environment!==null&&(lt.envMapIntensity.value=Se.environmentIntensity),dt&&(at.setValue(K,"toneMappingExposure",x.toneMappingExposure),Ze.needsLights&&bt(lt,gt),Ve&&we.fog===!0&&xe.refreshFogUniforms(lt,Ve),xe.refreshMaterialUniforms(lt,we,ge,ve,v.state.transmissionRenderTarget),WebGLUniforms.upload(K,Mt(Ze),lt,z)),we.isShaderMaterial&&we.uniformsNeedUpdate===!0&&(WebGLUniforms.upload(K,Mt(Ze),lt,z),we.uniformsNeedUpdate=!1),we.isSpriteMaterial&&at.setValue(K,"center",Ae.center),at.setValue(K,"modelViewMatrix",Ae.modelViewMatrix),at.setValue(K,"normalMatrix",Ae.normalMatrix),at.setValue(K,"modelMatrix",Ae.matrixWorld),we.isShaderMaterial||we.isRawShaderMaterial){const ot=we.uniformsGroups;for(let xt=0,Rt=ot.length;xt<Rt;xt++){const Ct=ot[xt];Oe.update(Ct,ut),Oe.bind(Ct,ut)}}return ut}function bt(ne,Se){ne.ambientLightColor.needsUpdate=Se,ne.lightProbe.needsUpdate=Se,ne.directionalLights.needsUpdate=Se,ne.directionalLightShadows.needsUpdate=Se,ne.pointLights.needsUpdate=Se,ne.pointLightShadows.needsUpdate=Se,ne.spotLights.needsUpdate=Se,ne.spotLightShadows.needsUpdate=Se,ne.rectAreaLights.needsUpdate=Se,ne.hemisphereLights.needsUpdate=Se}function wt(ne){return ne.isMeshLambertMaterial||ne.isMeshToonMaterial||ne.isMeshPhongMaterial||ne.isMeshStandardMaterial||ne.isShadowMaterial||ne.isShaderMaterial&&ne.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(ne,Se,be){X.get(ne.texture).__webglTexture=Se,X.get(ne.depthTexture).__webglTexture=be;const we=X.get(ne);we.__hasExternalTextures=!0,we.__autoAllocateDepthBuffer=be===void 0,we.__autoAllocateDepthBuffer||fe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),we.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(ne,Se){const be=X.get(ne);be.__webglFramebuffer=Se,be.__useDefaultFramebuffer=Se===void 0},this.setRenderTarget=function(ne,Se=0,be=0){I=ne,R=Se,D=be;let we=!0,Ae=null,Ve=!1,ke=!1;if(ne){const We=X.get(ne);We.__useDefaultFramebuffer!==void 0?(ee.bindFramebuffer(K.FRAMEBUFFER,null),we=!1):We.__webglFramebuffer===void 0?z.setupRenderTarget(ne):We.__hasExternalTextures&&z.rebindTextures(ne,X.get(ne.texture).__webglTexture,X.get(ne.depthTexture).__webglTexture);const Ye=ne.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(ke=!0);const Xe=X.get(ne).__webglFramebuffer;ne.isWebGLCubeRenderTarget?(Array.isArray(Xe[Se])?Ae=Xe[Se][be]:Ae=Xe[Se],Ve=!0):ne.samples>0&&z.useMultisampledRTT(ne)===!1?Ae=X.get(ne).__webglMultisampledFramebuffer:Array.isArray(Xe)?Ae=Xe[be]:Ae=Xe,E.copy(ne.viewport),O.copy(ne.scissor),$=ne.scissorTest}else E.copy(j).multiplyScalar(ge).floor(),O.copy(ce).multiplyScalar(ge).floor(),$=pe;if(ee.bindFramebuffer(K.FRAMEBUFFER,Ae)&&we&&ee.drawBuffers(ne,Ae),ee.viewport(E),ee.scissor(O),ee.setScissorTest($),Ve){const We=X.get(ne.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_CUBE_MAP_POSITIVE_X+Se,We.__webglTexture,be)}else if(ke){const We=X.get(ne.texture),Ye=Se||0;K.framebufferTextureLayer(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,We.__webglTexture,be||0,Ye)}y=-1},this.readRenderTargetPixels=function(ne,Se,be,we,Ae,Ve,ke){if(!(ne&&ne.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=X.get(ne).__webglFramebuffer;if(ne.isWebGLCubeRenderTarget&&ke!==void 0&&(Ge=Ge[ke]),Ge){ee.bindFramebuffer(K.FRAMEBUFFER,Ge);try{const We=ne.texture,Ye=We.format,Xe=We.type;if(Ye!==RGBAFormat&&Fe.convert(Ye)!==K.getParameter(K.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const je=Xe===HalfFloatType&&(fe.has("EXT_color_buffer_half_float")||fe.has("EXT_color_buffer_float"));if(Xe!==UnsignedByteType&&Fe.convert(Xe)!==K.getParameter(K.IMPLEMENTATION_COLOR_READ_TYPE)&&Xe!==FloatType&&!je){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Se>=0&&Se<=ne.width-we&&be>=0&&be<=ne.height-Ae&&K.readPixels(Se,be,we,Ae,Fe.convert(Ye),Fe.convert(Xe),Ve)}finally{const We=I!==null?X.get(I).__webglFramebuffer:null;ee.bindFramebuffer(K.FRAMEBUFFER,We)}}},this.copyFramebufferToTexture=function(ne,Se,be=0){const we=Math.pow(2,-be),Ae=Math.floor(Se.image.width*we),Ve=Math.floor(Se.image.height*we);z.setTexture2D(Se,0),K.copyTexSubImage2D(K.TEXTURE_2D,be,0,0,ne.x,ne.y,Ae,Ve),ee.unbindTexture()},this.copyTextureToTexture=function(ne,Se,be,we=0){const Ae=Se.image.width,Ve=Se.image.height,ke=Fe.convert(be.format),Ge=Fe.convert(be.type);z.setTexture2D(be,0),K.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,be.flipY),K.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,be.premultiplyAlpha),K.pixelStorei(K.UNPACK_ALIGNMENT,be.unpackAlignment),Se.isDataTexture?K.texSubImage2D(K.TEXTURE_2D,we,ne.x,ne.y,Ae,Ve,ke,Ge,Se.image.data):Se.isCompressedTexture?K.compressedTexSubImage2D(K.TEXTURE_2D,we,ne.x,ne.y,Se.mipmaps[0].width,Se.mipmaps[0].height,ke,Se.mipmaps[0].data):K.texSubImage2D(K.TEXTURE_2D,we,ne.x,ne.y,ke,Ge,Se.image),we===0&&be.generateMipmaps&&K.generateMipmap(K.TEXTURE_2D),ee.unbindTexture()},this.copyTextureToTexture3D=function(ne,Se,be,we,Ae=0){const Ve=Math.round(ne.max.x-ne.min.x),ke=Math.round(ne.max.y-ne.min.y),Ge=ne.max.z-ne.min.z+1,We=Fe.convert(we.format),Ye=Fe.convert(we.type);let Xe;if(we.isData3DTexture)z.setTexture3D(we,0),Xe=K.TEXTURE_3D;else if(we.isDataArrayTexture||we.isCompressedArrayTexture)z.setTexture2DArray(we,0),Xe=K.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}K.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,we.flipY),K.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,we.premultiplyAlpha),K.pixelStorei(K.UNPACK_ALIGNMENT,we.unpackAlignment);const je=K.getParameter(K.UNPACK_ROW_LENGTH),nt=K.getParameter(K.UNPACK_IMAGE_HEIGHT),st=K.getParameter(K.UNPACK_SKIP_PIXELS),rt=K.getParameter(K.UNPACK_SKIP_ROWS),ct=K.getParameter(K.UNPACK_SKIP_IMAGES),tt=be.isCompressedTexture?be.mipmaps[Ae]:be.image;K.pixelStorei(K.UNPACK_ROW_LENGTH,tt.width),K.pixelStorei(K.UNPACK_IMAGE_HEIGHT,tt.height),K.pixelStorei(K.UNPACK_SKIP_PIXELS,ne.min.x),K.pixelStorei(K.UNPACK_SKIP_ROWS,ne.min.y),K.pixelStorei(K.UNPACK_SKIP_IMAGES,ne.min.z),be.isDataTexture||be.isData3DTexture?K.texSubImage3D(Xe,Ae,Se.x,Se.y,Se.z,Ve,ke,Ge,We,Ye,tt.data):we.isCompressedArrayTexture?K.compressedTexSubImage3D(Xe,Ae,Se.x,Se.y,Se.z,Ve,ke,Ge,We,tt.data):K.texSubImage3D(Xe,Ae,Se.x,Se.y,Se.z,Ve,ke,Ge,We,Ye,tt),K.pixelStorei(K.UNPACK_ROW_LENGTH,je),K.pixelStorei(K.UNPACK_IMAGE_HEIGHT,nt),K.pixelStorei(K.UNPACK_SKIP_PIXELS,st),K.pixelStorei(K.UNPACK_SKIP_ROWS,rt),K.pixelStorei(K.UNPACK_SKIP_IMAGES,ct),Ae===0&&we.generateMipmaps&&K.generateMipmap(Xe),ee.unbindTexture()},this.initTexture=function(ne){ne.isCubeTexture?z.setTextureCube(ne,0):ne.isData3DTexture?z.setTexture3D(ne,0):ne.isDataArrayTexture||ne.isCompressedArrayTexture?z.setTexture2DArray(ne,0):z.setTexture2D(ne,0),ee.unbindTexture()},this.resetState=function(){R=0,D=0,I=null,ee.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return WebGLCoordinateSystem}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===DisplayP3ColorSpace?"display-p3":"srgb",t.unpackColorSpace=ColorManagement.workingColorSpace===LinearDisplayP3ColorSpace?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Scene extends Object3D{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Euler,this.environmentIntensity=1,this.environmentRotation=new Euler,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Curve{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,c=s-1,l;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),l=n[i]-a,l<0)o=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===a)return i/(s-1);const u=n[i],p=n[i+1]-u,f=(a-u)/p;return(i+f)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const a=this.getPoint(i),o=this.getPoint(s),c=t||(a.isVector2?new Vector2:new Vector3);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new Vector3,i=[],s=[],a=[],o=new Vector3,c=new Matrix4;for(let f=0;f<=e;f++){const m=f/e;i[f]=this.getTangentAt(m,new Vector3)}s[0]=new Vector3,a[0]=new Vector3;let l=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),p=Math.abs(i[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),p<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(clamp(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(c.makeRotationAxis(o,m))}a[f].crossVectors(i[f],s[f])}if(t===!0){let f=Math.acos(clamp(s[0].dot(s[e]),-1,1));f/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(f=-f);for(let m=1;m<=e;m++)s[m].applyMatrix4(c.makeRotationAxis(i[m],f*m)),a[m].crossVectors(i[m],s[m])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class EllipseCurve extends Curve{constructor(e=0,t=0,n=1,i=1,s=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new Vector2){const n=t,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);const o=this.aStartAngle+e*s;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),p=c-this.aX,f=l-this.aY;c=p*u-f*h+this.aX,l=p*h+f*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class ArcCurve extends EllipseCurve{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function CubicPoly(){let r=0,e=0,t=0,n=0;function i(s,a,o,c){r=s,e=o,t=-3*s+3*a-2*o-c,n=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,l){i(a,o,l*(o-s),l*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,l,u,h){let p=(a-s)/l-(o-s)/(l+u)+(o-a)/u,f=(o-a)/u-(c-a)/(u+h)+(c-o)/h;p*=u,f*=u,i(a,o,p,f)},calc:function(s){const a=s*s,o=a*s;return r+e*s+t*a+n*o}}}const tmp=new Vector3,px=new CubicPoly,py=new CubicPoly,pz=new CubicPoly;class CatmullRomCurve3 extends Curve{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new Vector3){const n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:c===0&&o===s-1&&(o=s-2,c=1);let l,u;this.closed||o>0?l=i[(o-1)%s]:(tmp.subVectors(i[0],i[1]).add(i[0]),l=tmp);const h=i[o%s],p=i[(o+1)%s];if(this.closed||o+2<s?u=i[(o+2)%s]:(tmp.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=tmp),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(l.distanceToSquared(h),f),g=Math.pow(h.distanceToSquared(p),f),v=Math.pow(p.distanceToSquared(u),f);g<1e-4&&(g=1),m<1e-4&&(m=g),v<1e-4&&(v=g),px.initNonuniformCatmullRom(l.x,h.x,p.x,u.x,m,g,v),py.initNonuniformCatmullRom(l.y,h.y,p.y,u.y,m,g,v),pz.initNonuniformCatmullRom(l.z,h.z,p.z,u.z,m,g,v)}else this.curveType==="catmullrom"&&(px.initCatmullRom(l.x,h.x,p.x,u.x,this.tension),py.initCatmullRom(l.y,h.y,p.y,u.y,this.tension),pz.initCatmullRom(l.z,h.z,p.z,u.z,this.tension));return n.set(px.calc(c),py.calc(c),pz.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new Vector3().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function CatmullRom(r,e,t,n,i){const s=(n-e)*.5,a=(i-t)*.5,o=r*r,c=r*o;return(2*t-2*n+s+a)*c+(-3*t+3*n-2*s-a)*o+s*r+t}function QuadraticBezierP0(r,e){const t=1-r;return t*t*e}function QuadraticBezierP1(r,e){return 2*(1-r)*r*e}function QuadraticBezierP2(r,e){return r*r*e}function QuadraticBezier(r,e,t,n){return QuadraticBezierP0(r,e)+QuadraticBezierP1(r,t)+QuadraticBezierP2(r,n)}function CubicBezierP0(r,e){const t=1-r;return t*t*t*e}function CubicBezierP1(r,e){const t=1-r;return 3*t*t*r*e}function CubicBezierP2(r,e){return 3*(1-r)*r*r*e}function CubicBezierP3(r,e){return r*r*r*e}function CubicBezier(r,e,t,n,i){return CubicBezierP0(r,e)+CubicBezierP1(r,t)+CubicBezierP2(r,n)+CubicBezierP3(r,i)}class CubicBezierCurve extends Curve{constructor(e=new Vector2,t=new Vector2,n=new Vector2,i=new Vector2){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Vector2){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(CubicBezier(e,i.x,s.x,a.x,o.x),CubicBezier(e,i.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class CubicBezierCurve3 extends Curve{constructor(e=new Vector3,t=new Vector3,n=new Vector3,i=new Vector3){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Vector3){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(CubicBezier(e,i.x,s.x,a.x,o.x),CubicBezier(e,i.y,s.y,a.y,o.y),CubicBezier(e,i.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class LineCurve extends Curve{constructor(e=new Vector2,t=new Vector2){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Vector2){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Vector2){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class LineCurve3 extends Curve{constructor(e=new Vector3,t=new Vector3){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new Vector3){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Vector3){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class QuadraticBezierCurve extends Curve{constructor(e=new Vector2,t=new Vector2,n=new Vector2){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Vector2){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(QuadraticBezier(e,i.x,s.x,a.x),QuadraticBezier(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class QuadraticBezierCurve3 extends Curve{constructor(e=new Vector3,t=new Vector3,n=new Vector3){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Vector3){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(QuadraticBezier(e,i.x,s.x,a.x),QuadraticBezier(e,i.y,s.y,a.y),QuadraticBezier(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class SplineCurve extends Curve{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Vector2){const n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),o=s-a,c=i[a===0?a:a-1],l=i[a],u=i[a>i.length-2?i.length-1:a+1],h=i[a>i.length-3?i.length-1:a+2];return n.set(CatmullRom(o,c.x,l.x,u.x,h.x),CatmullRom(o,c.y,l.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new Vector2().fromArray(i))}return this}}var Curves=Object.freeze({__proto__:null,ArcCurve,CatmullRomCurve3,CubicBezierCurve,CubicBezierCurve3,EllipseCurve,LineCurve,LineCurve3,QuadraticBezierCurve,QuadraticBezierCurve3,SplineCurve});class CurvePath extends Curve{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Curves[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const a=i[s]-n,o=this.curves[s],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const a=s[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Curves[i.type]().fromJSON(i))}return this}}class Path extends CurvePath{constructor(e){super(),this.type="Path",this.currentPoint=new Vector2,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new LineCurve(this.currentPoint.clone(),new Vector2(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new QuadraticBezierCurve(this.currentPoint.clone(),new Vector2(e,t),new Vector2(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,a){const o=new CubicBezierCurve(this.currentPoint.clone(),new Vector2(e,t),new Vector2(n,i),new Vector2(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new SplineCurve(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,i,s,a),this}absarc(e,t,n,i,s,a){return this.absellipse(e,t,n,n,i,s,a),this}ellipse(e,t,n,i,s,a,o,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,n,i,s,a,o,c),this}absellipse(e,t,n,i,s,a,o,c){const l=new EllipseCurve(e,t,n,i,s,a,o,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Shape extends Path{constructor(e){super(e),this.uuid=generateUUID(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Path().fromJSON(i))}return this}}const Earcut={triangulate:function(r,e,t=2){const n=e&&e.length,i=n?e[0]*t:r.length;let s=linkedList(r,0,i,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,c,l,u,h,p,f;if(n&&(s=eliminateHoles(r,e,s,t)),r.length>80*t){o=l=r[0],c=u=r[1];for(let m=t;m<i;m+=t)h=r[m],p=r[m+1],h<o&&(o=h),p<c&&(c=p),h>l&&(l=h),p>u&&(u=p);f=Math.max(l-o,u-c),f=f!==0?32767/f:0}return earcutLinked(s,a,t,o,c,f,0),a}};function linkedList(r,e,t,n,i){let s,a;if(i===signedArea(r,e,t,n)>0)for(s=e;s<t;s+=n)a=insertNode(s,r[s],r[s+1],a);else for(s=t-n;s>=e;s-=n)a=insertNode(s,r[s],r[s+1],a);return a&&equals(a,a.next)&&(removeNode(a),a=a.next),a}function filterPoints(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(equals(t,t.next)||area(t.prev,t,t.next)===0)){if(removeNode(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function earcutLinked(r,e,t,n,i,s,a){if(!r)return;!a&&s&&indexCurve(r,n,i,s);let o=r,c,l;for(;r.prev!==r.next;){if(c=r.prev,l=r.next,s?isEarHashed(r,n,i,s):isEar(r)){e.push(c.i/t|0),e.push(r.i/t|0),e.push(l.i/t|0),removeNode(r),r=l.next,o=l.next;continue}if(r=l,r===o){a?a===1?(r=cureLocalIntersections(filterPoints(r),e,t),earcutLinked(r,e,t,n,i,s,2)):a===2&&splitEarcut(r,e,t,n,i,s):earcutLinked(filterPoints(r),e,t,n,i,s,1);break}}}function isEar(r){const e=r.prev,t=r,n=r.next;if(area(e,t,n)>=0)return!1;const i=e.x,s=t.x,a=n.x,o=e.y,c=t.y,l=n.y,u=i<s?i<a?i:a:s<a?s:a,h=o<c?o<l?o:l:c<l?c:l,p=i>s?i>a?i:a:s>a?s:a,f=o>c?o>l?o:l:c>l?c:l;let m=n.next;for(;m!==e;){if(m.x>=u&&m.x<=p&&m.y>=h&&m.y<=f&&pointInTriangle(i,o,s,c,a,l,m.x,m.y)&&area(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function isEarHashed(r,e,t,n){const i=r.prev,s=r,a=r.next;if(area(i,s,a)>=0)return!1;const o=i.x,c=s.x,l=a.x,u=i.y,h=s.y,p=a.y,f=o<c?o<l?o:l:c<l?c:l,m=u<h?u<p?u:p:h<p?h:p,g=o>c?o>l?o:l:c>l?c:l,v=u>h?u>p?u:p:h>p?h:p,_=zOrder(f,m,e,t,n),L=zOrder(g,v,e,t,n);let x=r.prevZ,M=r.nextZ;for(;x&&x.z>=_&&M&&M.z<=L;){if(x.x>=f&&x.x<=g&&x.y>=m&&x.y<=v&&x!==i&&x!==a&&pointInTriangle(o,u,c,h,l,p,x.x,x.y)&&area(x.prev,x,x.next)>=0||(x=x.prevZ,M.x>=f&&M.x<=g&&M.y>=m&&M.y<=v&&M!==i&&M!==a&&pointInTriangle(o,u,c,h,l,p,M.x,M.y)&&area(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;x&&x.z>=_;){if(x.x>=f&&x.x<=g&&x.y>=m&&x.y<=v&&x!==i&&x!==a&&pointInTriangle(o,u,c,h,l,p,x.x,x.y)&&area(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;M&&M.z<=L;){if(M.x>=f&&M.x<=g&&M.y>=m&&M.y<=v&&M!==i&&M!==a&&pointInTriangle(o,u,c,h,l,p,M.x,M.y)&&area(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function cureLocalIntersections(r,e,t){let n=r;do{const i=n.prev,s=n.next.next;!equals(i,s)&&intersects(i,n,n.next,s)&&locallyInside(i,s)&&locallyInside(s,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),removeNode(n),removeNode(n.next),n=r=s),n=n.next}while(n!==r);return filterPoints(n)}function splitEarcut(r,e,t,n,i,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&isValidDiagonal(a,o)){let c=splitPolygon(a,o);a=filterPoints(a,a.next),c=filterPoints(c,c.next),earcutLinked(a,e,t,n,i,s,0),earcutLinked(c,e,t,n,i,s,0);return}o=o.next}a=a.next}while(a!==r)}function eliminateHoles(r,e,t,n){const i=[];let s,a,o,c,l;for(s=0,a=e.length;s<a;s++)o=e[s]*n,c=s<a-1?e[s+1]*n:r.length,l=linkedList(r,o,c,n,!1),l===l.next&&(l.steiner=!0),i.push(getLeftmost(l));for(i.sort(compareX),s=0;s<i.length;s++)t=eliminateHole(i[s],t);return t}function compareX(r,e){return r.x-e.x}function eliminateHole(r,e){const t=findHoleBridge(r,e);if(!t)return e;const n=splitPolygon(t,r);return filterPoints(n,n.next),filterPoints(t,t.next)}function findHoleBridge(r,e){let t=e,n=-1/0,i;const s=r.x,a=r.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const p=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(p<=s&&p>n&&(n=p,i=t.x<t.next.x?t:t.next,p===s))return i}t=t.next}while(t!==e);if(!i)return null;const o=i,c=i.x,l=i.y;let u=1/0,h;t=i;do s>=t.x&&t.x>=c&&s!==t.x&&pointInTriangle(a<l?s:n,a,c,l,a<l?n:s,a,t.x,t.y)&&(h=Math.abs(a-t.y)/(s-t.x),locallyInside(t,r)&&(h<u||h===u&&(t.x>i.x||t.x===i.x&&sectorContainsSector(i,t)))&&(i=t,u=h)),t=t.next;while(t!==o);return i}function sectorContainsSector(r,e){return area(r.prev,r,e.prev)<0&&area(e.next,r,r.next)<0}function indexCurve(r,e,t,n){let i=r;do i.z===0&&(i.z=zOrder(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,sortLinked(i)}function sortLinked(r){let e,t,n,i,s,a,o,c,l=1;do{for(t=r,r=null,s=null,a=0;t;){for(a++,n=t,o=0,e=0;e<l&&(o++,n=n.nextZ,!!n);e++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,o--):(i=n,n=n.nextZ,c--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;t=n}s.nextZ=null,l*=2}while(a>1);return r}function zOrder(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function getLeftmost(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function pointInTriangle(r,e,t,n,i,s,a,o){return(i-a)*(e-o)>=(r-a)*(s-o)&&(r-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(i-a)*(n-o)}function isValidDiagonal(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!intersectsPolygon(r,e)&&(locallyInside(r,e)&&locallyInside(e,r)&&middleInside(r,e)&&(area(r.prev,r,e.prev)||area(r,e.prev,e))||equals(r,e)&&area(r.prev,r,r.next)>0&&area(e.prev,e,e.next)>0)}function area(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function equals(r,e){return r.x===e.x&&r.y===e.y}function intersects(r,e,t,n){const i=sign(area(r,e,t)),s=sign(area(r,e,n)),a=sign(area(t,n,r)),o=sign(area(t,n,e));return!!(i!==s&&a!==o||i===0&&onSegment(r,t,e)||s===0&&onSegment(r,n,e)||a===0&&onSegment(t,r,n)||o===0&&onSegment(t,e,n))}function onSegment(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function sign(r){return r>0?1:r<0?-1:0}function intersectsPolygon(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&intersects(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function locallyInside(r,e){return area(r.prev,r,r.next)<0?area(r,e,r.next)>=0&&area(r,r.prev,e)>=0:area(r,e,r.prev)<0||area(r,r.next,e)<0}function middleInside(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function splitPolygon(r,e){const t=new Node(r.i,r.x,r.y),n=new Node(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function insertNode(r,e,t,n){const i=new Node(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function removeNode(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Node(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function signedArea(r,e,t,n){let i=0;for(let s=e,a=t-n;s<t;s+=n)i+=(r[a]-r[s])*(r[s+1]+r[a+1]),a=s;return i}class ShapeUtils{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return ShapeUtils.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];removeDupEndPts(e),addContour(n,e);let a=e.length;t.forEach(removeDupEndPts);for(let c=0;c<t.length;c++)i.push(a),a+=t[c].length,addContour(n,t[c]);const o=Earcut.triangulate(n,i);for(let c=0;c<o.length;c+=3)s.push(o.slice(c,c+3));return s}}function removeDupEndPts(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function addContour(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class ExtrudeGeometry extends BufferGeometry{constructor(e=new Shape([new Vector2(.5,.5),new Vector2(-.5,.5),new Vector2(-.5,-.5),new Vector2(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let o=0,c=e.length;o<c;o++){const l=e[o];a(l)}this.setAttribute("position",new Float32BufferAttribute(i,3)),this.setAttribute("uv",new Float32BufferAttribute(s,2)),this.computeVertexNormals();function a(o){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let p=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:f-.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,v=t.bevelSegments!==void 0?t.bevelSegments:3;const _=t.extrudePath,L=t.UVGenerator!==void 0?t.UVGenerator:WorldUVGenerator;let x,M=!1,R,D,I,y;_&&(x=_.getSpacedPoints(u),M=!0,p=!1,R=_.computeFrenetFrames(u,!1),D=new Vector3,I=new Vector3,y=new Vector3),p||(v=0,f=0,m=0,g=0);const S=o.extractPoints(l);let E=S.shape;const O=S.holes;if(!ShapeUtils.isClockWise(E)){E=E.reverse();for(let le=0,fe=O.length;le<fe;le++){const Y=O[le];ShapeUtils.isClockWise(Y)&&(O[le]=Y.reverse())}}const H=ShapeUtils.triangulateShape(E,O),te=E;for(let le=0,fe=O.length;le<fe;le++){const Y=O[le];E=E.concat(Y)}function de(le,fe,Y){return fe||console.error("THREE.ExtrudeGeometry: vec does not exist"),le.clone().addScaledVector(fe,Y)}const ve=E.length,ge=H.length;function q(le,fe,Y){let ee,se,X;const z=le.x-fe.x,d=le.y-fe.y,b=Y.x-le.x,Z=Y.y-le.y,J=z*z+d*d,ue=z*Z-d*b;if(Math.abs(ue)>Number.EPSILON){const oe=Math.sqrt(J),xe=Math.sqrt(b*b+Z*Z),Me=fe.x-d/oe,me=fe.y+z/oe,ye=Y.x-Z/xe,Te=Y.y+b/xe,Ce=((ye-Me)*Z-(Te-me)*b)/(z*Z-d*b);ee=Me+z*Ce-le.x,se=me+d*Ce-le.y;const Ee=ee*ee+se*se;if(Ee<=2)return new Vector2(ee,se);X=Math.sqrt(Ee/2)}else{let oe=!1;z>Number.EPSILON?b>Number.EPSILON&&(oe=!0):z<-Number.EPSILON?b<-Number.EPSILON&&(oe=!0):Math.sign(d)===Math.sign(Z)&&(oe=!0),oe?(ee=-d,se=z,X=Math.sqrt(J)):(ee=z,se=d,X=Math.sqrt(J/2))}return new Vector2(ee/X,se/X)}const F=[];for(let le=0,fe=te.length,Y=fe-1,ee=le+1;le<fe;le++,Y++,ee++)Y===fe&&(Y=0),ee===fe&&(ee=0),F[le]=q(te[le],te[Y],te[ee]);const j=[];let ce,pe=F.concat();for(let le=0,fe=O.length;le<fe;le++){const Y=O[le];ce=[];for(let ee=0,se=Y.length,X=se-1,z=ee+1;ee<se;ee++,X++,z++)X===se&&(X=0),z===se&&(z=0),ce[ee]=q(Y[ee],Y[X],Y[z]);j.push(ce),pe=pe.concat(ce)}for(let le=0;le<v;le++){const fe=le/v,Y=f*Math.cos(fe*Math.PI/2),ee=m*Math.sin(fe*Math.PI/2)+g;for(let se=0,X=te.length;se<X;se++){const z=de(te[se],F[se],ee);G(z.x,z.y,-Y)}for(let se=0,X=O.length;se<X;se++){const z=O[se];ce=j[se];for(let d=0,b=z.length;d<b;d++){const Z=de(z[d],ce[d],ee);G(Z.x,Z.y,-Y)}}}const _e=m+g;for(let le=0;le<ve;le++){const fe=p?de(E[le],pe[le],_e):E[le];M?(I.copy(R.normals[0]).multiplyScalar(fe.x),D.copy(R.binormals[0]).multiplyScalar(fe.y),y.copy(x[0]).add(I).add(D),G(y.x,y.y,y.z)):G(fe.x,fe.y,0)}for(let le=1;le<=u;le++)for(let fe=0;fe<ve;fe++){const Y=p?de(E[fe],pe[fe],_e):E[fe];M?(I.copy(R.normals[le]).multiplyScalar(Y.x),D.copy(R.binormals[le]).multiplyScalar(Y.y),y.copy(x[le]).add(I).add(D),G(y.x,y.y,y.z)):G(Y.x,Y.y,h/u*le)}for(let le=v-1;le>=0;le--){const fe=le/v,Y=f*Math.cos(fe*Math.PI/2),ee=m*Math.sin(fe*Math.PI/2)+g;for(let se=0,X=te.length;se<X;se++){const z=de(te[se],F[se],ee);G(z.x,z.y,h+Y)}for(let se=0,X=O.length;se<X;se++){const z=O[se];ce=j[se];for(let d=0,b=z.length;d<b;d++){const Z=de(z[d],ce[d],ee);M?G(Z.x,Z.y+x[u-1].y,x[u-1].x+Y):G(Z.x,Z.y,h+Y)}}}he(),N();function he(){const le=i.length/3;if(p){let fe=0,Y=ve*fe;for(let ee=0;ee<ge;ee++){const se=H[ee];ae(se[2]+Y,se[1]+Y,se[0]+Y)}fe=u+v*2,Y=ve*fe;for(let ee=0;ee<ge;ee++){const se=H[ee];ae(se[0]+Y,se[1]+Y,se[2]+Y)}}else{for(let fe=0;fe<ge;fe++){const Y=H[fe];ae(Y[2],Y[1],Y[0])}for(let fe=0;fe<ge;fe++){const Y=H[fe];ae(Y[0]+ve*u,Y[1]+ve*u,Y[2]+ve*u)}}n.addGroup(le,i.length/3-le,0)}function N(){const le=i.length/3;let fe=0;w(te,fe),fe+=te.length;for(let Y=0,ee=O.length;Y<ee;Y++){const se=O[Y];w(se,fe),fe+=se.length}n.addGroup(le,i.length/3-le,1)}function w(le,fe){let Y=le.length;for(;--Y>=0;){const ee=Y;let se=Y-1;se<0&&(se=le.length-1);for(let X=0,z=u+v*2;X<z;X++){const d=ve*X,b=ve*(X+1),Z=fe+ee+d,J=fe+se+d,ue=fe+se+b,oe=fe+ee+b;Q(Z,J,ue,oe)}}}function G(le,fe,Y){c.push(le),c.push(fe),c.push(Y)}function ae(le,fe,Y){ie(le),ie(fe),ie(Y);const ee=i.length/3,se=L.generateTopUV(n,i,ee-3,ee-2,ee-1);K(se[0]),K(se[1]),K(se[2])}function Q(le,fe,Y,ee){ie(le),ie(fe),ie(ee),ie(fe),ie(Y),ie(ee);const se=i.length/3,X=L.generateSideWallUV(n,i,se-6,se-3,se-2,se-1);K(X[0]),K(X[1]),K(X[3]),K(X[1]),K(X[2]),K(X[3])}function ie(le){i.push(c[le*3+0]),i.push(c[le*3+1]),i.push(c[le*3+2])}function K(le){s.push(le.x),s.push(le.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return toJSON$1(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,a=e.shapes.length;s<a;s++){const o=t[e.shapes[s]];n.push(o)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Curves[i.type]().fromJSON(i)),new ExtrudeGeometry(n,e.options)}}const WorldUVGenerator={generateTopUV:function(r,e,t,n,i){const s=e[t*3],a=e[t*3+1],o=e[n*3],c=e[n*3+1],l=e[i*3],u=e[i*3+1];return[new Vector2(s,a),new Vector2(o,c),new Vector2(l,u)]},generateSideWallUV:function(r,e,t,n,i,s){const a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[n*3],u=e[n*3+1],h=e[n*3+2],p=e[i*3],f=e[i*3+1],m=e[i*3+2],g=e[s*3],v=e[s*3+1],_=e[s*3+2];return Math.abs(o-u)<Math.abs(a-l)?[new Vector2(a,1-c),new Vector2(l,1-h),new Vector2(p,1-m),new Vector2(g,1-_)]:[new Vector2(o,1-c),new Vector2(u,1-h),new Vector2(f,1-m),new Vector2(v,1-_)]}};function toJSON$1(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class SphereGeometry extends BufferGeometry{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const u=[],h=new Vector3,p=new Vector3,f=[],m=[],g=[],v=[];for(let _=0;_<=n;_++){const L=[],x=_/n;let M=0;_===0&&a===0?M=.5/t:_===n&&c===Math.PI&&(M=-.5/t);for(let R=0;R<=t;R++){const D=R/t;h.x=-e*Math.cos(i+D*s)*Math.sin(a+x*o),h.y=e*Math.cos(a+x*o),h.z=e*Math.sin(i+D*s)*Math.sin(a+x*o),m.push(h.x,h.y,h.z),p.copy(h).normalize(),g.push(p.x,p.y,p.z),v.push(D+M,1-x),L.push(l++)}u.push(L)}for(let _=0;_<n;_++)for(let L=0;L<t;L++){const x=u[_][L+1],M=u[_][L],R=u[_+1][L],D=u[_+1][L+1];(_!==0||a>0)&&f.push(x,M,D),(_!==n-1||c<Math.PI)&&f.push(M,R,D)}this.setIndex(f),this.setAttribute("position",new Float32BufferAttribute(m,3)),this.setAttribute("normal",new Float32BufferAttribute(g,3)),this.setAttribute("uv",new Float32BufferAttribute(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new SphereGeometry(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class RawShaderMaterial extends ShaderMaterial{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}const Cache={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class LoadingManager{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,s===!1&&i.onStart!==void 0&&i.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,p=l.length;h<p;h+=2){const f=l[h],m=l[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return m}return null}}}const DefaultLoadingManager=new LoadingManager;class Loader{constructor(e){this.manager=e!==void 0?e:DefaultLoadingManager,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Loader.DEFAULT_MATERIAL_NAME="__DEFAULT";const loading={};class HttpError extends Error{constructor(e,t){super(e),this.response=t}}class FileLoader extends Loader{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Cache.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(loading[e]!==void 0){loading[e].push({onLoad:t,onProgress:n,onError:i});return}loading[e]=[],loading[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=loading[e],h=l.body.getReader(),p=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),f=p?parseInt(p):0,m=f!==0;let g=0;const v=new ReadableStream({start(_){L();function L(){h.read().then(({done:x,value:M})=>{if(x)_.close();else{g+=M.byteLength;const R=new ProgressEvent("progress",{lengthComputable:m,loaded:g,total:f});for(let D=0,I=u.length;D<I;D++){const y=u[D];y.onProgress&&y.onProgress(R)}_.enqueue(M),L()}})}}});return new Response(v)}else throw new HttpError(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o===void 0)return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),p=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(p);return l.arrayBuffer().then(m=>f.decode(m))}}}).then(l=>{Cache.add(e,l);const u=loading[e];delete loading[e];for(let h=0,p=u.length;h<p;h++){const f=u[h];f.onLoad&&f.onLoad(l)}}).catch(l=>{const u=loading[e];if(u===void 0)throw this.manager.itemError(e),l;delete loading[e];for(let h=0,p=u.length;h<p;h++){const f=u[h];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}let _context;class AudioContext{static getContext(){return _context===void 0&&(_context=new(window.AudioContext||window.webkitAudioContext)),_context}static setContext(e){_context=e}}class Clock{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function now(){return(typeof performance>"u"?Date:performance).now()}const _position$1=new Vector3,_quaternion$1=new Quaternion,_scale$1=new Vector3,_orientation$1=new Vector3;class AudioListener extends Object3D{constructor(){super(),this.type="AudioListener",this.context=AudioContext.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Clock}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(_position$1,_quaternion$1,_scale$1),_orientation$1.set(0,0,-1).applyQuaternion(_quaternion$1),t.positionX){const i=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(_position$1.x,i),t.positionY.linearRampToValueAtTime(_position$1.y,i),t.positionZ.linearRampToValueAtTime(_position$1.z,i),t.forwardX.linearRampToValueAtTime(_orientation$1.x,i),t.forwardY.linearRampToValueAtTime(_orientation$1.y,i),t.forwardZ.linearRampToValueAtTime(_orientation$1.z,i),t.upX.linearRampToValueAtTime(n.x,i),t.upY.linearRampToValueAtTime(n.y,i),t.upZ.linearRampToValueAtTime(n.z,i)}else t.setPosition(_position$1.x,_position$1.y,_position$1.z),t.setOrientation(_orientation$1.x,_orientation$1.y,_orientation$1.z,n.x,n.y,n.z)}}class Audio extends Object3D{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}class ShapePath{constructor(){this.type="ShapePath",this.color=new Color,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Path,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,s,a){return this.currentPath.bezierCurveTo(e,t,n,i,s,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(_){const L=[];for(let x=0,M=_.length;x<M;x++){const R=_[x],D=new Shape;D.curves=R.curves,L.push(D)}return L}function n(_,L){const x=L.length;let M=!1;for(let R=x-1,D=0;D<x;R=D++){let I=L[R],y=L[D],S=y.x-I.x,E=y.y-I.y;if(Math.abs(E)>Number.EPSILON){if(E<0&&(I=L[D],S=-S,y=L[R],E=-E),_.y<I.y||_.y>y.y)continue;if(_.y===I.y){if(_.x===I.x)return!0}else{const O=E*(_.x-I.x)-S*(_.y-I.y);if(O===0)return!0;if(O<0)continue;M=!M}}else{if(_.y!==I.y)continue;if(y.x<=_.x&&_.x<=I.x||I.x<=_.x&&_.x<=y.x)return!0}}return M}const i=ShapeUtils.isClockWise,s=this.subPaths;if(s.length===0)return[];let a,o,c;const l=[];if(s.length===1)return o=s[0],c=new Shape,c.curves=o.curves,l.push(c),l;let u=!i(s[0].getPoints());u=e?!u:u;const h=[],p=[];let f=[],m=0,g;p[m]=void 0,f[m]=[];for(let _=0,L=s.length;_<L;_++)o=s[_],g=o.getPoints(),a=i(g),a=e?!a:a,a?(!u&&p[m]&&m++,p[m]={s:new Shape,p:g},p[m].s.curves=o.curves,u&&m++,f[m]=[]):f[m].push({h:o,p:g[0]});if(!p[0])return t(s);if(p.length>1){let _=!1,L=0;for(let x=0,M=p.length;x<M;x++)h[x]=[];for(let x=0,M=p.length;x<M;x++){const R=f[x];for(let D=0;D<R.length;D++){const I=R[D];let y=!0;for(let S=0;S<p.length;S++)n(I.p,p[S].p)&&(x!==S&&L++,y?(y=!1,h[S].push(I)):_=!0);y&&h[x].push(I)}}L>0&&_===!1&&(f=h)}let v;for(let _=0,L=p.length;_<L;_++){c=p[_].s,l.push(c),v=f[_];for(let x=0,M=v.length;x<M;x++)c.holes.push(v[x].h)}return l}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:REVISION}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=REVISION);const _euler$4=new Euler(0,0,0,"YXZ"),_vector=new Vector3,_changeEvent={type:"change"},_lockEvent={type:"lock"},_unlockEvent={type:"unlock"},_PI_2=Math.PI/2;class MouseOnlyControls extends EventDispatcher{constructor(e,t){super(),this.camera=e,this.domElement=t,this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1,this.movementEnabled=!0,this.movingForward=!1,this.distance=.05,this._onMouseMove=onMouseMove.bind(this),this._onPointerlockChange=onPointerlockChange.bind(this),this._onPointerlockError=onPointerlockError.bind(this),this._onMouseDown=onMouseDown.bind(this),this._onMouseUp=onMouseUp.bind(this),this.connect()}connect(){this.domElement.ownerDocument.addEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.addEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.addEventListener("pointerlockerror",this._onPointerlockError),this.domElement.ownerDocument.addEventListener("mousedown",this._onMouseDown),this.domElement.ownerDocument.addEventListener("mouseup",this._onMouseUp)}disconnect(){this.domElement.ownerDocument.removeEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.removeEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.removeEventListener("pointerlockerror",this._onPointerlockError),this.domElement.ownerDocument.removeEventListener("mousedown",this._onMouseDown),this.domElement.ownerDocument.removeEventListener("mouseup",this._onMouseUp)}dispose(){this.disconnect()}getObject(){return this.camera}getDirection(e){return e.set(0,0,-1).applyQuaternion(this.camera.quaternion)}moveForward(e){const t=this.camera;_vector.setFromMatrixColumn(t.matrix,0),_vector.crossVectors(t.up,_vector),t.position.addScaledVector(_vector,e)}lock(){this.domElement.requestPointerLock()}unlock(){this.domElement.ownerDocument.exitPointerLock()}update(){this.movingForward&&this.movementEnabled&&this.moveForward(this.distance)}}function onMouseDown(){this.isLocked!==!1&&(this.movingForward=!0,this.dispatchEvent(_changeEvent))}function onMouseUp(){this.isLocked!==!1&&(this.movingForward=!1,this.dispatchEvent(_changeEvent))}function onMouseMove(r){if(this.isLocked===!1)return;const e=r.movementX||r.mozMovementX||r.webkitMovementX||0,t=r.movementY||r.mozMovementY||r.webkitMovementY||0,n=this.camera;_euler$4.setFromQuaternion(n.quaternion),_euler$4.y-=e*.002*this.pointerSpeed,_euler$4.x-=t*.002*this.pointerSpeed,_euler$4.x=Math.max(_PI_2-this.maxPolarAngle,Math.min(_PI_2-this.minPolarAngle,_euler$4.x)),n.quaternion.setFromEuler(_euler$4),this.dispatchEvent(_changeEvent)}function onPointerlockChange(){this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(_lockEvent),this.isLocked=!0):(this.dispatchEvent(_unlockEvent),this.isLocked=!1)}function onPointerlockError(){console.error("THREE.MouseOnlyControls: Unable to use Pointer Lock API")}new Vector3;new Vector3;const _euler$3=new Euler(0,0,0,"YXZ");class KeyboardAccessControls{constructor(e,t){this.camera=e,this.domElement=t,this.lookSpeed=.01,this.moveSpeed=.01,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.moveDown=!1,this.moveForward=!1,this.moveLeft=!1,this.moveRight=!1,this.moveUp=!1,this.tabularMovement=!1,this.discretePositions=[],this.tabIndex=0,this.onKeyDown=function(s){switch(s.code){case"ArrowUp":case"KeyW":this.moveUp=!0;break;case"ArrowLeft":case"KeyA":this.moveLeft=!0;break;case"ArrowDown":case"KeyS":this.moveDown=!0;break;case"ArrowRight":case"KeyD":this.moveRight=!0;break;case"Space":this.moveForward=!0;break;case"Tab":this.nextPosition(s);break}},this.onKeyUp=function(s){switch(s.code){case"ArrowUp":case"KeyW":this.moveUp=!1;break;case"ArrowLeft":case"KeyA":this.moveLeft=!1;break;case"ArrowDown":case"KeyS":this.moveDown=!1;break;case"ArrowRight":case"KeyD":this.moveRight=!1;break;case"Space":this.moveForward=!1;break}},this.update=function(){if(_euler$3.setFromQuaternion(e.quaternion),this.moveUp?(_euler$3.x+=this.lookSpeed,_euler$3.x=Math.max(Math.PI/2-this.maxPolarAngle,Math.min(Math.PI/2-this.minPolarAngle,_euler$3.x))):this.moveDown&&(_euler$3.x-=this.lookSpeed,_euler$3.x=Math.max(Math.PI/2-this.maxPolarAngle,Math.min(Math.PI/2-this.minPolarAngle,_euler$3.x))),this.moveLeft?_euler$3.y+=this.lookSpeed:this.moveRight&&(_euler$3.y-=this.lookSpeed),e.quaternion.setFromEuler(_euler$3),this.moveForward){const s=new Vector3;this.camera.getWorldDirection(s),s.y=0,e.position.add(s.multiplyScalar(this.moveSpeed))}},this.setDiscretePositions=function(s){this.tabularMovement=!0,this.discretePositions=s},this.nextPosition=function(s){this.tabularMovement?(s.preventDefault(),this.tabIndex++,this.tabIndex>this.discretePositions.length-1&&(this.tabIndex=0),e.position.copy(this.discretePositions[this.tabIndex])):console.error("Set Discrete Positions First")},this.dispose=function(){window.removeEventListener("keydown",n),window.removeEventListener("keyup",i)};const n=this.onKeyDown.bind(this),i=this.onKeyUp.bind(this);window.addEventListener("keydown",n),window.addEventListener("keyup",i)}}const _euler$2=new Euler(0,0,0,"YXZ");class GamepadAccessControls{constructor(e){this.supported=navigator.webkitGetGamepads&&navigator.webkitGetGamepads()||!!navigator.webkitGamepads||!!navigator.mozGamepads||!!navigator.msGamepads||!!navigator.gamepads||navigator.getGamepads&&navigator.getGamepads(),this.camera=e,this.gamepadSpeed=.05,this.ticking=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.joystickSelect="left",this.left=new Vector2(0,0),this.right=new Vector2(0,0),this.RIGHT_AXIS_THRESHOLD=7849/32767,this.LEFT_AXIS_THRESHOLD=8689/32767,this.TRIGGER_AXIS_THRESHOLD=30/32767,this.SPACEMOUSE_THRESHOLD=5/32767,this.gamepads=[],this.prevRawGamepadTypes=[],this.prevTimestamps=[],this.init()}init(){this.supported?(window.addEventListener("MozGamepadConnected",e=>this.onGamepadConnect(e),!1),window.addEventListener("MozGamepadDisconnected",e=>this.onGamepadDisconnect(e),!1),window.addEventListener("gamepadconnected",e=>this.onGamepadConnect(e),!1),window.addEventListener("gamepaddisconnected",e=>this.onGamepadDisconnect(e),!1),navigator.webkitGetGamepads&&navigator.webkitGetGamepads()&&this.startPolling()):console.error("Gamepad API not supported or not detected!")}startPolling(){console.log("Controller Connected!"),this.ticking||(this.ticking=!0,this.update())}stopPolling(){console.log("Controller Disconnected!"),this.ticking=!1}update(){this.pollStatus(),this.ticking&&(this.pollJoysticks(),_euler$2.setFromQuaternion(this.camera.quaternion),this.joystickSelect==="left"?(_euler$2.y-=this.left.x*this.gamepadSpeed,_euler$2.x-=this.left.y*this.gamepadSpeed,_euler$2.x=Math.max(Math.PI/2-this.maxPolarAngle,Math.min(Math.PI/2-this.minPolarAngle,_euler$2.x))):this.joystickSelect==="right"&&(_euler$2.y-=this.right.x*this.gamepadSpeed,_euler$2.x-=this.right.y*this.gamepadSpeed,_euler$2.x=Math.max(Math.PI/2-this.maxPolarAngle,Math.min(Math.PI/2-this.minPolarAngle,_euler$2.x))),this.camera.quaternion.setFromEuler(_euler$2))}pollStatus(){this.pollGamepads();for(let e in this.gamepads){let t=this.gamepads[e];t.timestamp&&t.timestamp===this.prevTimestamps[e]||(this.prevTimestamps[e]=t.timestamp)}}pollGamepads(){let e=navigator.webkitGetGamepads&&navigator.webkitGetGamepads()||navigator.webkitGamepads||navigator.mozGamepads||navigator.msGamepads||navigator.gamepads||navigator.getGamepads&&navigator.getGamepads();if(e){this.gamepads=[];for(let t=0,n=e.length;t<n;t++)typeof e[t]!==this.prevRawGamepadTypes[t]&&(this.prevRawGamepadTypes[t]=typeof e[t]),e[t]&&this.gamepads.push(e[t])}}pollJoysticks(){let e=0;if(this.left=new Vector2(0,0),this.right=new Vector2(0,0),this.gamepads[e]){let t=this.gamepads[e].axes[0],n=this.gamepads[e].axes[1],i=this.gamepads[e].axes[2],s=this.gamepads[e].axes[3];(t<-this.SPACEMOUSE_THRESHOLD||t>this.SPACEMOUSE_THRESHOLD)&&(this.left.x=t),(n<-this.SPACEMOUSE_THRESHOLD||n>this.SPACEMOUSE_THRESHOLD)&&(this.left.y=n),(i<-this.SPACEMOUSE_THRESHOLD||i>this.SPACEMOUSE_THRESHOLD)&&(this.right.x=i),(s<-this.SPACEMOUSE_THRESHOLD||s>this.SPACEMOUSE_THRESHOLD)&&(this.right.y=s)}}onGamepadConnect(e){let t=e.gamepad;this.gamepads[e.gamepad.id]=t,this.startPolling()}onGamepadDisconnect(e){this.gamepads[e.gamepad.id]=null,this.gamepads.length===0&&this.stopPolling()}}const _euler$1=new Euler(0,0,0,"YXZ");class TouchAccessControls{constructor(e,t){this.camera=e,this.domElement=t,this.enabled=!1,this.isLocked=!1,this.touchX=0,this.touchY=0,this.previousTouchX=0,this.previousTouchY=0,this.touchIdentifier,this.moveForward=!1,this.touchSpeed=.004,this.forwardSpeed=.08,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this._onTouchStart=this.onTouchStart.bind(this),this._onTouchMove=this.onTouchMove.bind(this),this._onTouchEnd=this.onTouchEnd.bind(this),this._onHitBoxEnd=this.onHitBoxEnd.bind(this),this.domElement.ownerDocument.addEventListener("touchstart",this._onTouchStart),this.createHitBox()}createHitBox(){const e=this.domElement.ownerDocument.createElement("div");e.id="hitbox",this.domElement.ownerDocument.body.appendChild(e)}dispose(){this.domElement.ownerDocument.removeEventListener("touchstart",this._onTouchStart),this.domElement.ownerDocument.removeEventListener("touchmove",this._onTouchMove),this.domElement.ownerDocument.removeEventListener("touchend",this._onTouchEnd)}update(){if(this.moveForward){const e=new Vector3;this.camera.getWorldDirection(e),e.y=0,this.camera.position.add(e.multiplyScalar(this.forwardSpeed))}}onTouchStart(e){this.isLocked&&(e.target.id=="hitbox"?(this.domElement.ownerDocument.addEventListener("touchend",this._onHitBoxEnd),this.moveForward=!0):(this.previousTouchY=e.changedTouches[0].clientY,this.previousTouchX=e.changedTouches[0].clientX,this.touchIdentifier=e.changedTouches[0].identifier,this.domElement.ownerDocument.addEventListener("touchmove",this._onTouchMove),this.domElement.ownerDocument.addEventListener("touchend",this._onTouchEnd)))}onTouchEnd(e){this.previousTouchY=void 0,this.touchX=0,this.touchY=0,this.domElement.ownerDocument.removeEventListener("touchmove",this._onTouchMove),this.domElement.ownerDocument.removeEventListener("touchend",this._onTouchEnd)}onTouchMove(e){for(const t of e.changedTouches)t.identifier==this.touchIdentifier&&(this.touchX=t.clientX-this.previousTouchX,this.previousTouchX=t.clientX,this.touchY=t.clientY-this.previousTouchY,this.previousTouchY=t.clientY);_euler$1.setFromQuaternion(this.camera.quaternion),_euler$1.y+=this.touchX*this.touchSpeed,_euler$1.x+=this.touchY*this.touchSpeed,_euler$1.x=Math.max(Math.PI/2-this.maxPolarAngle,Math.min(Math.PI/2-this.minPolarAngle,_euler$1.x)),this.camera.quaternion.setFromEuler(_euler$1)}onHitBoxEnd(e){this.moveForward=!1,this.domElement.ownerDocument.removeEventListener("touchend",this._onHitBoxEnd)}}var commonjsGlobal=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},dist={},ambiMonoEncoder={},classCallCheck={};classCallCheck.__esModule=!0;classCallCheck.default=function(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")};var createClass={},_global={exports:{}},global$2=_global.exports=typeof window<"u"&&window.Math==Math?window:typeof self<"u"&&self.Math==Math?self:Function("return this")();typeof __g=="number"&&(__g=global$2);var _globalExports=_global.exports,_core={exports:{}},core$1=_core.exports={version:"2.6.12"};typeof __e=="number"&&(__e=core$1);var _coreExports=_core.exports,_aFunction=function(r){if(typeof r!="function")throw TypeError(r+" is not a function!");return r},aFunction=_aFunction,_ctx=function(r,e,t){if(aFunction(r),e===void 0)return r;switch(t){case 1:return function(n){return r.call(e,n)};case 2:return function(n,i){return r.call(e,n,i)};case 3:return function(n,i,s){return r.call(e,n,i,s)}}return function(){return r.apply(e,arguments)}},_objectDp={},_isObject,hasRequired_isObject;function require_isObject(){return hasRequired_isObject||(hasRequired_isObject=1,_isObject=function(r){return typeof r=="object"?r!==null:typeof r=="function"}),_isObject}var _anObject,hasRequired_anObject;function require_anObject(){if(hasRequired_anObject)return _anObject;hasRequired_anObject=1;var r=require_isObject();return _anObject=function(e){if(!r(e))throw TypeError(e+" is not an object!");return e},_anObject}var _fails,hasRequired_fails;function require_fails(){return hasRequired_fails||(hasRequired_fails=1,_fails=function(r){try{return!!r()}catch{return!0}}),_fails}var _descriptors,hasRequired_descriptors;function require_descriptors(){return hasRequired_descriptors||(hasRequired_descriptors=1,_descriptors=!require_fails()(function(){return Object.defineProperty({},"a",{get:function(){return 7}}).a!=7})),_descriptors}var _domCreate,hasRequired_domCreate;function require_domCreate(){if(hasRequired_domCreate)return _domCreate;hasRequired_domCreate=1;var r=require_isObject(),e=_globalExports.document,t=r(e)&&r(e.createElement);return _domCreate=function(n){return t?e.createElement(n):{}},_domCreate}var _ie8DomDefine,hasRequired_ie8DomDefine;function require_ie8DomDefine(){return hasRequired_ie8DomDefine||(hasRequired_ie8DomDefine=1,_ie8DomDefine=!require_descriptors()&&!require_fails()(function(){return Object.defineProperty(require_domCreate()("div"),"a",{get:function(){return 7}}).a!=7})),_ie8DomDefine}var _toPrimitive,hasRequired_toPrimitive;function require_toPrimitive(){if(hasRequired_toPrimitive)return _toPrimitive;hasRequired_toPrimitive=1;var r=require_isObject();return _toPrimitive=function(e,t){if(!r(e))return e;var n,i;if(t&&typeof(n=e.toString)=="function"&&!r(i=n.call(e))||typeof(n=e.valueOf)=="function"&&!r(i=n.call(e))||!t&&typeof(n=e.toString)=="function"&&!r(i=n.call(e)))return i;throw TypeError("Can't convert object to primitive value")},_toPrimitive}var hasRequired_objectDp;function require_objectDp(){if(hasRequired_objectDp)return _objectDp;hasRequired_objectDp=1;var r=require_anObject(),e=require_ie8DomDefine(),t=require_toPrimitive(),n=Object.defineProperty;return _objectDp.f=require_descriptors()?Object.defineProperty:function(s,a,o){if(r(s),a=t(a,!0),r(o),e)try{return n(s,a,o)}catch{}if("get"in o||"set"in o)throw TypeError("Accessors not supported!");return"value"in o&&(s[a]=o.value),s},_objectDp}var _propertyDesc=function(r,e){return{enumerable:!(r&1),configurable:!(r&2),writable:!(r&4),value:e}},dP=require_objectDp(),createDesc=_propertyDesc,_hide=require_descriptors()?function(r,e,t){return dP.f(r,e,createDesc(1,t))}:function(r,e,t){return r[e]=t,r},hasOwnProperty={}.hasOwnProperty,_has=function(r,e){return hasOwnProperty.call(r,e)},global$1=_globalExports,core=_coreExports,ctx=_ctx,hide=_hide,has=_has,PROTOTYPE="prototype",$export$1=function(r,e,t){var n=r&$export$1.F,i=r&$export$1.G,s=r&$export$1.S,a=r&$export$1.P,o=r&$export$1.B,c=r&$export$1.W,l=i?core:core[e]||(core[e]={}),u=l[PROTOTYPE],h=i?global$1:s?global$1[e]:(global$1[e]||{})[PROTOTYPE],p,f,m;i&&(t=e);for(p in t)f=!n&&h&&h[p]!==void 0,!(f&&has(l,p))&&(m=f?h[p]:t[p],l[p]=i&&typeof h[p]!="function"?t[p]:o&&f?ctx(m,global$1):c&&h[p]==m?function(g){var v=function(_,L,x){if(this instanceof g){switch(arguments.length){case 0:return new g;case 1:return new g(_);case 2:return new g(_,L)}return new g(_,L,x)}return g.apply(this,arguments)};return v[PROTOTYPE]=g[PROTOTYPE],v}(m):a&&typeof m=="function"?ctx(Function.call,m):m,a&&((l.virtual||(l.virtual={}))[p]=m,r&$export$1.R&&u&&!u[p]&&hide(u,p,m)))};$export$1.F=1;$export$1.G=2;$export$1.S=4;$export$1.P=8;$export$1.B=16;$export$1.W=32;$export$1.U=64;$export$1.R=128;var _export=$export$1,$export=_export;$export($export.S+$export.F*!require_descriptors(),"Object",{defineProperty:require_objectDp().f});var $Object=_coreExports.Object,defineProperty$1=function(e,t,n){return $Object.defineProperty(e,t,n)},defineProperty={default:defineProperty$1,__esModule:!0};createClass.__esModule=!0;var _defineProperty=defineProperty,_defineProperty2=_interopRequireDefault$n(_defineProperty);function _interopRequireDefault$n(r){return r&&r.__esModule?r:{default:r}}createClass.default=function(){function r(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),(0,_defineProperty2.default)(e,i.key,i)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}();var src={},numeric1_2_6={};(function(exports){var numeric=exports;typeof commonjsGlobal<"u"&&(commonjsGlobal.numeric=numeric),numeric.version="1.2.6",numeric.bench=function(e,t){var n,i,s,a;for(typeof t>"u"&&(t=15),s=.5,n=new Date;;){for(s*=2,a=s;a>3;a-=4)e(),e(),e(),e();for(;a>0;)e(),a--;if(i=new Date,i-n>t)break}for(a=s;a>3;a-=4)e(),e(),e(),e();for(;a>0;)e(),a--;return i=new Date,1e3*(3*s-1)/(i-n)},numeric._myIndexOf=function(e){var t=this.length,n;for(n=0;n<t;++n)if(this[n]===e)return n;return-1},numeric.myIndexOf=Array.prototype.indexOf?Array.prototype.indexOf:numeric._myIndexOf,numeric.Function=Function,numeric.precision=4,numeric.largeArray=50,numeric.prettyPrint=function(e){function t(s){if(s===0)return"0";if(isNaN(s))return"NaN";if(s<0)return"-"+t(-s);if(isFinite(s)){var a=Math.floor(Math.log(s)/Math.log(10)),o=s/Math.pow(10,a),c=o.toPrecision(numeric.precision);return parseFloat(c)===10&&(a++,o=1,c=o.toPrecision(numeric.precision)),parseFloat(c).toString()+"e"+a.toString()}return"Infinity"}var n=[];function i(s){var a;if(typeof s>"u")return n.push(Array(numeric.precision+8).join(" ")),!1;if(typeof s=="string")return n.push('"'+s+'"'),!1;if(typeof s=="boolean")return n.push(s.toString()),!1;if(typeof s=="number"){var o=t(s),c=s.toPrecision(numeric.precision),l=parseFloat(s.toString()).toString(),u=[o,c,l,parseFloat(c).toString(),parseFloat(l).toString()];for(a=1;a<u.length;a++)u[a].length<o.length&&(o=u[a]);return n.push(Array(numeric.precision+8-o.length).join(" ")+o),!1}if(s===null)return n.push("null"),!1;if(typeof s=="function"){n.push(s.toString());var h=!1;for(a in s)s.hasOwnProperty(a)&&(h?n.push(`,
`):n.push(`
{`),h=!0,n.push(a),n.push(`: 
`),i(s[a]));return h&&n.push(`}
`),!0}if(s instanceof Array){if(s.length>numeric.largeArray)return n.push("...Large Array..."),!0;var h=!1;for(n.push("["),a=0;a<s.length;a++)a>0&&(n.push(","),h&&n.push(`
 `)),h=i(s[a]);return n.push("]"),!0}n.push("{");var h=!1;for(a in s)s.hasOwnProperty(a)&&(h&&n.push(`,
`),h=!0,n.push(a),n.push(`: 
`),i(s[a]));return n.push("}"),!0}return i(e),n.join("")},numeric.parseDate=function(e){function t(n){if(typeof n=="string")return Date.parse(n.replace(/-/g,"/"));if(!(n instanceof Array))throw new Error("parseDate: parameter must be arrays of strings");var i=[],s;for(s=0;s<n.length;s++)i[s]=t(n[s]);return i}return t(e)},numeric.parseFloat=function(e){function t(n){if(typeof n=="string")return parseFloat(n);if(!(n instanceof Array))throw new Error("parseFloat: parameter must be arrays of strings");var i=[],s;for(s=0;s<n.length;s++)i[s]=t(n[s]);return i}return t(e)},numeric.parseCSV=function(e){var t=e.split(`
`),n,i,s=[],a=/(([^'",]*)|('[^']*')|("[^"]*")),/g,o=/^\s*(([+-]?[0-9]+(\.[0-9]*)?(e[+-]?[0-9]+)?)|([+-]?[0-9]*(\.[0-9]+)?(e[+-]?[0-9]+)?))\s*$/,c=function(p){return p.substr(0,p.length-1)},l=0;for(i=0;i<t.length;i++){var u=(t[i]+",").match(a),h;if(u.length>0){for(s[l]=[],n=0;n<u.length;n++)h=c(u[n]),o.test(h)?s[l][n]=parseFloat(h):s[l][n]=h;l++}}return s},numeric.toCSV=function(e){var t=numeric.dim(e),n,i,s,a,o;for(s=t[0],t[1],o=[],n=0;n<s;n++){for(a=[],i=0;i<s;i++)a[i]=e[n][i].toString();o[n]=a.join(", ")}return o.join(`
`)+`
`},numeric.getURL=function(e){var t=new XMLHttpRequest;return t.open("GET",e,!1),t.send(),t},numeric.imageURL=function(e){function t(_){var L=_.length,x,M,R,D,I,y,S,E,O="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",$="";for(x=0;x<L;x+=3)M=_[x],R=_[x+1],D=_[x+2],I=M>>2,y=((M&3)<<4)+(R>>4),S=((R&15)<<2)+(D>>6),E=D&63,x+1>=L?S=E=64:x+2>=L&&(E=64),$+=O.charAt(I)+O.charAt(y)+O.charAt(S)+O.charAt(E);return $}function n(_,L,x){typeof L>"u"&&(L=0),typeof x>"u"&&(x=_.length);var M=[0,1996959894,3993919788,2567524794,124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,901097722,1119000684,3686517206,2898065728,853044451,1172266101,3705015759,2882616665,651767980,1373503546,3369554304,3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,4240017532,1658658271,366619977,2362670323,4224994405,1303535960,984961486,2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,225274430,2053790376,3826175755,2466906013,167816743,2097651377,4027552580,2265490386,503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,2998733608,733239954,1555261956,3268935591,3050360625,752459403,1541320221,2607071920,3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,1231636301,1047427035,2932959818,3654703836,1088359270,936918e3,2847714899,3736837829,1202900863,817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117],R=-1,D=0;_.length;var I;for(I=L;I<x;I++)D=(R^_[I])&255,R=R>>>8^M[D];return R^-1}var i=e[0].length,s=e[0][0].length,a,o,c,l,u,h,p,f,m,g,v=[137,80,78,71,13,10,26,10,0,0,0,13,73,72,68,82,s>>24&255,s>>16&255,s>>8&255,s&255,i>>24&255,i>>16&255,i>>8&255,i&255,8,2,0,0,0,-1,-2,-3,-4,-5,-6,-7,-8,73,68,65,84,8,29];for(g=n(v,12,29),v[29]=g>>24&255,v[30]=g>>16&255,v[31]=g>>8&255,v[32]=g&255,a=1,o=0,p=0;p<i;p++){for(p<i-1?v.push(0):v.push(1),u=3*s+1+(p===0)&255,h=3*s+1+(p===0)>>8&255,v.push(u),v.push(h),v.push(~u&255),v.push(~h&255),p===0&&v.push(0),f=0;f<s;f++)for(c=0;c<3;c++)u=e[c][p][f],u>255?u=255:u<0?u=0:u=Math.round(u),a=(a+u)%65521,o=(o+a)%65521,v.push(u);v.push(0)}return m=(o<<16)+a,v.push(m>>24&255),v.push(m>>16&255),v.push(m>>8&255),v.push(m&255),l=v.length-41,v[33]=l>>24&255,v[34]=l>>16&255,v[35]=l>>8&255,v[36]=l&255,g=n(v,37),v.push(g>>24&255),v.push(g>>16&255),v.push(g>>8&255),v.push(g&255),v.push(0),v.push(0),v.push(0),v.push(0),v.push(73),v.push(69),v.push(78),v.push(68),v.push(174),v.push(66),v.push(96),v.push(130),"data:image/png;base64,"+t(v)},numeric._dim=function(e){for(var t=[];typeof e=="object";)t.push(e.length),e=e[0];return t},numeric.dim=function(e){var t,n;return typeof e=="object"?(t=e[0],typeof t=="object"?(n=t[0],typeof n=="object"?numeric._dim(e):[e.length,t.length]):[e.length]):[]},numeric.mapreduce=function(e,t){return Function("x","accum","_s","_k",'if(typeof accum === "undefined") accum = '+t+`;
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
return accum;`)},numeric.same=function r(e,t){var n,i;if(!(e instanceof Array)||!(t instanceof Array)||(i=e.length,i!==t.length))return!1;for(n=0;n<i;n++)if(e[n]!==t[n])if(typeof e[n]=="object"){if(!r(e[n],t[n]))return!1}else return!1;return!0},numeric.rep=function(e,t,n){typeof n>"u"&&(n=0);var i=e[n],s=Array(i),a;if(n===e.length-1){for(a=i-2;a>=0;a-=2)s[a+1]=t,s[a]=t;return a===-1&&(s[0]=t),s}for(a=i-1;a>=0;a--)s[a]=numeric.rep(e,t,n+1);return s},numeric.dotMMsmall=function(e,t){var n,i,s,a,o,c,l,u,h,p,f;for(a=e.length,o=t.length,c=t[0].length,l=Array(a),n=a-1;n>=0;n--){for(u=Array(c),h=e[n],s=c-1;s>=0;s--){for(p=h[o-1]*t[o-1][s],i=o-2;i>=1;i-=2)f=i-1,p+=h[i]*t[i][s]+h[f]*t[f][s];i===0&&(p+=h[0]*t[0][s]),u[s]=p}l[n]=u}return l},numeric._getCol=function(e,t,n){var i=e.length,s;for(s=i-1;s>0;--s)n[s]=e[s][t],--s,n[s]=e[s][t];s===0&&(n[0]=e[0][t])},numeric.dotMMbig=function(e,t){var n=numeric._getCol,i=t.length,s=Array(i),a=e.length,o=t[0].length,c=new Array(a),l,u=numeric.dotVV,h,p;for(--i,--a,h=a;h!==-1;--h)c[h]=Array(o);for(--o,h=o;h!==-1;--h)for(n(t,h,s),p=a;p!==-1;--p)l=e[p],c[p][h]=u(l,s);return c},numeric.dotMV=function(e,t){var n=e.length;t.length;var i,s=Array(n),a=numeric.dotVV;for(i=n-1;i>=0;i--)s[i]=a(e[i],t);return s},numeric.dotVM=function(e,t){var n,i,s,a,o,c,l;for(s=e.length,a=t[0].length,o=Array(a),i=a-1;i>=0;i--){for(c=e[s-1]*t[s-1][i],n=s-2;n>=1;n-=2)l=n-1,c+=e[n]*t[n][i]+e[l]*t[l][i];n===0&&(c+=e[0]*t[0][i]),o[i]=c}return o},numeric.dotVV=function(e,t){var n,i=e.length,s,a=e[i-1]*t[i-1];for(n=i-2;n>=1;n-=2)s=n-1,a+=e[n]*t[n]+e[s]*t[s];return n===0&&(a+=e[0]*t[0]),a},numeric.dot=function(e,t){var n=numeric.dim;switch(n(e).length*1e3+n(t).length){case 2002:return t.length<10?numeric.dotMMsmall(e,t):numeric.dotMMbig(e,t);case 2001:return numeric.dotMV(e,t);case 1002:return numeric.dotVM(e,t);case 1001:return numeric.dotVV(e,t);case 1e3:return numeric.mulVS(e,t);case 1:return numeric.mulSV(e,t);case 0:return e*t;default:throw new Error("numeric.dot only works on vectors and matrices")}},numeric.diag=function(e){var t,n,i,s=e.length,a=Array(s),o;for(t=s-1;t>=0;t--){for(o=Array(s),n=t+2,i=s-1;i>=n;i-=2)o[i]=0,o[i-1]=0;for(i>t&&(o[i]=0),o[t]=e[t],i=t-1;i>=1;i-=2)o[i]=0,o[i-1]=0;i===0&&(o[0]=0),a[t]=o}return a},numeric.getDiag=function(r){var e=Math.min(r.length,r[0].length),t,n=Array(e);for(t=e-1;t>=1;--t)n[t]=r[t][t],--t,n[t]=r[t][t];return t===0&&(n[0]=r[0][0]),n},numeric.identity=function(e){return numeric.diag(numeric.rep([e],1))},numeric.pointwise=function(e,t,n){typeof n>"u"&&(n="");var i=[],s,a=/\[i\]$/,o,c="",l=!1;for(s=0;s<e.length;s++)a.test(e[s])?(o=e[s].substring(0,e[s].length-3),c=o):o=e[s],o==="ret"&&(l=!0),i.push(o);return i[e.length]="_s",i[e.length+1]="_k",i[e.length+2]='if(typeof _s === "undefined") _s = numeric.dim('+c+`);
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
`))}(),numeric.truncVV=numeric.pointwise(["x[i]","y[i]"],"ret[i] = round(x[i]/y[i])*y[i];","var round = Math.round;"),numeric.truncVS=numeric.pointwise(["x[i]","y"],"ret[i] = round(x[i]/y)*y;","var round = Math.round;"),numeric.truncSV=numeric.pointwise(["x","y[i]"],"ret[i] = round(x/y[i])*y[i];","var round = Math.round;"),numeric.trunc=function(e,t){return typeof e=="object"?typeof t=="object"?numeric.truncVV(e,t):numeric.truncVS(e,t):typeof t=="object"?numeric.truncSV(e,t):Math.round(e/t)*t},numeric.inv=function(g){var t=numeric.dim(g),n=Math.abs,i=t[0],s=t[1],a=numeric.clone(g),o,c,l=numeric.identity(i),u,h,p,f,m,g;for(f=0;f<s;++f){var v=-1,_=-1;for(p=f;p!==i;++p)m=n(a[p][f]),m>_&&(v=p,_=m);for(c=a[v],a[v]=a[f],a[f]=c,h=l[v],l[v]=l[f],l[f]=h,g=c[f],m=f;m!==s;++m)c[m]/=g;for(m=s-1;m!==-1;--m)h[m]/=g;for(p=i-1;p!==-1;--p)if(p!==f){for(o=a[p],u=l[p],g=o[f],m=f+1;m!==s;++m)o[m]-=c[m]*g;for(m=s-1;m>0;--m)u[m]-=h[m]*g,--m,u[m]-=h[m]*g;m===0&&(u[0]-=h[0]*g)}}return l},numeric.det=function(e){var t=numeric.dim(e);if(t.length!==2||t[0]!==t[1])throw new Error("numeric: det() only works on square matrices");var n=t[0],i=1,s,a,o,c=numeric.clone(e),l,u,h,p,f;for(a=0;a<n-1;a++){for(o=a,s=a+1;s<n;s++)Math.abs(c[s][a])>Math.abs(c[o][a])&&(o=s);for(o!==a&&(p=c[o],c[o]=c[a],c[a]=p,i*=-1),l=c[a],s=a+1;s<n;s++){for(u=c[s],h=u[a]/l[a],o=a+1;o<n-1;o+=2)f=o+1,u[o]-=l[o]*h,u[f]-=l[f]*h;o!==n&&(u[o]-=l[o]*h)}if(l[a]===0)return 0;i*=l[a]}return i*c[a][a]},numeric.transpose=function(e){var t,n,i=e.length,s=e[0].length,a=Array(s),o,c,l;for(n=0;n<s;n++)a[n]=Array(i);for(t=i-1;t>=1;t-=2){for(c=e[t],o=e[t-1],n=s-1;n>=1;--n)l=a[n],l[t]=c[n],l[t-1]=o[n],--n,l=a[n],l[t]=c[n],l[t-1]=o[n];n===0&&(l=a[0],l[t]=c[0],l[t-1]=o[0])}if(t===0){for(o=e[0],n=s-1;n>=1;--n)a[n][0]=o[n],--n,a[n][0]=o[n];n===0&&(a[0][0]=o[0])}return a},numeric.negtranspose=function(e){var t,n,i=e.length,s=e[0].length,a=Array(s),o,c,l;for(n=0;n<s;n++)a[n]=Array(i);for(t=i-1;t>=1;t-=2){for(c=e[t],o=e[t-1],n=s-1;n>=1;--n)l=a[n],l[t]=-c[n],l[t-1]=-o[n],--n,l=a[n],l[t]=-c[n],l[t-1]=-o[n];n===0&&(l=a[0],l[t]=-c[0],l[t-1]=-o[0])}if(t===0){for(o=e[0],n=s-1;n>=1;--n)a[n][0]=-o[n],--n,a[n][0]=-o[n];n===0&&(a[0][0]=-o[0])}return a},numeric._random=function r(e,t){var n,i=e[t],s=Array(i),a;if(t===e.length-1){for(a=Math.random,n=i-1;n>=1;n-=2)s[n]=a(),s[n-1]=a();return n===0&&(s[0]=a()),s}for(n=i-1;n>=0;n--)s[n]=r(e,t+1);return s},numeric.random=function(e){return numeric._random(e,0)},numeric.norm2=function(e){return Math.sqrt(numeric.norm2Squared(e))},numeric.linspace=function(e,t,n){if(typeof n>"u"&&(n=Math.max(Math.round(t-e)+1,1)),n<2)return n===1?[e]:[];var i,s=Array(n);for(n--,i=n;i>=0;i--)s[i]=(i*t+(n-i)*e)/n;return s},numeric.getBlock=function(e,t,n){var i=numeric.dim(e);function s(a,o){var c,l=t[o],u=n[o]-l,h=Array(u);if(o===i.length-1){for(c=u;c>=0;c--)h[c]=a[c+l];return h}for(c=u;c>=0;c--)h[c]=s(a[c+l],o+1);return h}return s(e,0)},numeric.setBlock=function(e,t,n,i){var s=numeric.dim(e);function a(o,c,l){var u,h=t[l],p=n[l]-h;if(l===s.length-1)for(u=p;u>=0;u--)o[u+h]=c[u];for(u=p;u>=0;u--)a(o[u+h],c[u],l+1)}return a(e,i,0),e},numeric.getRange=function(e,t,n){var i=t.length,s=n.length,a,o,c=Array(i),l,u;for(a=i-1;a!==-1;--a)for(c[a]=Array(s),l=c[a],u=e[t[a]],o=s-1;o!==-1;--o)l[o]=u[n[o]];return c},numeric.blockMatrix=function(e){var t=numeric.dim(e);if(t.length<4)return numeric.blockMatrix([e]);var n=t[0],i=t[1],s,a,o,c,l;for(s=0,a=0,o=0;o<n;++o)s+=e[o][0].length;for(c=0;c<i;++c)a+=e[0][c][0].length;var u=Array(s);for(o=0;o<s;++o)u[o]=Array(a);var h=0,p,f,m,g,v;for(o=0;o<n;++o){for(p=a,c=i-1;c!==-1;--c)for(l=e[o][c],p-=l[0].length,m=l.length-1;m!==-1;--m)for(v=l[m],f=u[h+m],g=v.length-1;g!==-1;--g)f[p+g]=v[g];h+=e[o][0].length}return u},numeric.tensor=function(e,t){if(typeof e=="number"||typeof t=="number")return numeric.mul(e,t);var n=numeric.dim(e),i=numeric.dim(t);if(n.length!==1||i.length!==1)throw new Error("numeric: tensor product is only defined for vectors");var s=n[0],a=i[0],o=Array(s),c,l,u,h;for(l=s-1;l>=0;l--){for(c=Array(a),h=e[l],u=a-1;u>=3;--u)c[u]=h*t[u],--u,c[u]=h*t[u],--u,c[u]=h*t[u],--u,c[u]=h*t[u];for(;u>=0;)c[u]=h*t[u],--u;o[l]=c}return o},numeric.T=function(e,t){this.x=e,this.y=t},numeric.t=function(e,t){return new numeric.T(e,t)},numeric.Tbinop=function(e,t,n,i,s){if(numeric.indexOf,typeof s!="string"){var a;s="";for(a in numeric)numeric.hasOwnProperty(a)&&(e.indexOf(a)>=0||t.indexOf(a)>=0||n.indexOf(a)>=0||i.indexOf(a)>=0)&&a.length>1&&(s+="var "+a+" = numeric."+a+`;
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
return Math.sqrt(f(x.x)+f(x.y));`),numeric.T.prototype.inv=function(){var e=this;if(typeof e.y>"u")return new numeric.T(numeric.inv(e.x));var t=e.x.length,g,v,_,n=numeric.identity(t),i=numeric.rep([t,t],0),s=numeric.clone(e.x),a=numeric.clone(e.y),o,c,l,u,h,p,f,m,g,v,_,L,x,M,R,D,I,y;for(g=0;g<t;g++){for(M=s[g][g],R=a[g][g],L=M*M+R*R,_=g,v=g+1;v<t;v++)M=s[v][g],R=a[v][g],x=M*M+R*R,x>L&&(_=v,L=x);for(_!==g&&(y=s[g],s[g]=s[_],s[_]=y,y=a[g],a[g]=a[_],a[_]=y,y=n[g],n[g]=n[_],n[_]=y,y=i[g],i[g]=i[_],i[_]=y),o=s[g],c=a[g],h=n[g],p=i[g],M=o[g],R=c[g],v=g+1;v<t;v++)D=o[v],I=c[v],o[v]=(D*M+I*R)/L,c[v]=(I*M-D*R)/L;for(v=0;v<t;v++)D=h[v],I=p[v],h[v]=(D*M+I*R)/L,p[v]=(I*M-D*R)/L;for(v=g+1;v<t;v++){for(l=s[v],u=a[v],f=n[v],m=i[v],M=l[g],R=u[g],_=g+1;_<t;_++)D=o[_],I=c[_],l[_]-=D*M-I*R,u[_]-=I*M+D*R;for(_=0;_<t;_++)D=h[_],I=p[_],f[_]-=D*M-I*R,m[_]-=I*M+D*R}}for(g=t-1;g>0;g--)for(h=n[g],p=i[g],v=g-1;v>=0;v--)for(f=n[v],m=i[v],M=s[v][g],R=a[v][g],_=t-1;_>=0;_--)D=h[_],I=p[_],f[_]-=M*D-R*I,m[_]-=M*I+R*D;return new numeric.T(n,i)},numeric.T.prototype.get=function(e){var t=this.x,n=this.y,i=0,s,a=e.length;if(n){for(;i<a;)s=e[i],t=t[s],n=n[s],i++;return new numeric.T(t,n)}for(;i<a;)s=e[i],t=t[s],i++;return new numeric.T(t)},numeric.T.prototype.set=function(e,t){var n=this.x,i=this.y,s=0,a,o=e.length,c=t.x,l=t.y;if(o===0)return l?this.y=l:i&&(this.y=void 0),this.x=n,this;if(l){for(i||(i=numeric.rep(numeric.dim(n),0),this.y=i);s<o-1;)a=e[s],n=n[a],i=i[a],s++;return a=e[s],n[a]=c,i[a]=l,this}if(i){for(;s<o-1;)a=e[s],n=n[a],i=i[a],s++;return a=e[s],n[a]=c,c instanceof Array?i[a]=numeric.rep(numeric.dim(c),0):i[a]=0,this}for(;s<o-1;)a=e[s],n=n[a],s++;return a=e[s],n[a]=c,this},numeric.T.prototype.getRows=function(e,t){var n=t-e+1,i,s=Array(n),a,o=this.x,c=this.y;for(i=e;i<=t;i++)s[i-e]=o[i];if(c){for(a=Array(n),i=e;i<=t;i++)a[i-e]=c[i];return new numeric.T(s,a)}return new numeric.T(s)},numeric.T.prototype.setRows=function(e,t,n){var i,s=this.x,a=this.y,o=n.x,c=n.y;for(i=e;i<=t;i++)s[i]=o[i-e];if(c)for(a||(a=numeric.rep(numeric.dim(s),0),this.y=a),i=e;i<=t;i++)a[i]=c[i-e];else if(a)for(i=e;i<=t;i++)a[i]=numeric.rep([o[i-e].length],0);return this},numeric.T.prototype.getRow=function(e){var t=this.x,n=this.y;return n?new numeric.T(t[e],n[e]):new numeric.T(t[e])},numeric.T.prototype.setRow=function(e,t){var n=this.x,i=this.y,s=t.x,a=t.y;return n[e]=s,a?(i||(i=numeric.rep(numeric.dim(n),0),this.y=i),i[e]=a):i&&(i=numeric.rep([s.length],0)),this},numeric.T.prototype.getBlock=function(e,t){var n=this.x,i=this.y,s=numeric.getBlock;return i?new numeric.T(s(n,e,t),s(i,e,t)):new numeric.T(s(n,e,t))},numeric.T.prototype.setBlock=function(e,t,n){n instanceof numeric.T||(n=new numeric.T(n));var i=this.x,s=this.y,a=numeric.setBlock,o=n.x,c=n.y;if(c)return s||(this.y=numeric.rep(numeric.dim(this),0),s=this.y),a(i,e,t,o),a(s,e,t,c),this;a(i,e,t,o),s&&a(s,e,t,numeric.rep(numeric.dim(o),0))},numeric.T.rep=function(e,t){var n=numeric.T;t instanceof n||(t=new n(t));var i=t.x,s=t.y,a=numeric.rep;return s?new n(a(e,i),a(e,s)):new n(a(e,i))},numeric.T.diag=function(e){e instanceof numeric.T||(e=new numeric.T(e));var t=e.x,n=e.y,i=numeric.diag;return n?new numeric.T(i(t),i(n)):new numeric.T(i(t))},numeric.T.eig=function(){if(this.y)throw new Error("eig: not implemented for complex matrices.");return numeric.eig(this.x)},numeric.T.identity=function(e){return new numeric.T(numeric.identity(e))},numeric.T.prototype.getDiag=function(){var e=numeric,t=this.x,n=this.y;return n?new e.T(e.getDiag(t),e.getDiag(n)):new e.T(e.getDiag(t))},numeric.house=function(e){var t=numeric.clone(e),n=e[0]>=0?1:-1,i=n*numeric.norm2(e);t[0]+=i;var s=numeric.norm2(t);if(s===0)throw new Error("eig: internal error");return numeric.div(t,s)},numeric.toUpperHessenberg=function(e){var t=numeric.dim(e);if(t.length!==2||t[0]!==t[1])throw new Error("numeric: toUpperHessenberg() only works on square matrices");var n=t[0],i,s,a,o,c,l=numeric.clone(e),u,h,p,f,m=numeric.identity(n),g;for(s=0;s<n-2;s++){for(o=Array(n-s-1),i=s+1;i<n;i++)o[i-s-1]=l[i][s];if(numeric.norm2(o)>0){for(c=numeric.house(o),u=numeric.getBlock(l,[s+1,s],[n-1,n-1]),h=numeric.tensor(c,numeric.dot(c,u)),i=s+1;i<n;i++)for(p=l[i],f=h[i-s-1],a=s;a<n;a++)p[a]-=2*f[a-s];for(u=numeric.getBlock(l,[0,s+1],[n-1,n-1]),h=numeric.tensor(numeric.dot(u,c),c),i=0;i<n;i++)for(p=l[i],f=h[i],a=s+1;a<n;a++)p[a]-=2*f[a-s-1];for(u=Array(n-s-1),i=s+1;i<n;i++)u[i-s-1]=m[i];for(h=numeric.tensor(c,numeric.dot(c,u)),i=s+1;i<n;i++)for(g=m[i],f=h[i-s-1],a=0;a<n;a++)g[a]-=2*f[a]}}return{H:l,Q:m}},numeric.epsilon=2220446049250313e-31,numeric.QRFrancis=function(r,e){typeof e>"u"&&(e=1e4),r=numeric.clone(r),numeric.clone(r);var t=numeric.dim(r),n=t[0],i,s,a,o,c,l,u,h,p,f=numeric.identity(n),m,g,v,_,L,x,M,R,D;if(n<3)return{Q:f,B:[[0,n-1]]};var I=numeric.epsilon;for(D=0;D<e;D++){for(M=0;M<n-1;M++)if(Math.abs(r[M+1][M])<I*(Math.abs(r[M][M])+Math.abs(r[M+1][M+1]))){var y=numeric.QRFrancis(numeric.getBlock(r,[0,0],[M,M]),e),S=numeric.QRFrancis(numeric.getBlock(r,[M+1,M+1],[n-1,n-1]),e);for(v=Array(M+1),x=0;x<=M;x++)v[x]=f[x];for(_=numeric.dot(y.Q,v),x=0;x<=M;x++)f[x]=_[x];for(v=Array(n-M-1),x=M+1;x<n;x++)v[x-M-1]=f[x];for(_=numeric.dot(S.Q,v),x=M+1;x<n;x++)f[x]=_[x-M-1];return{Q:f,B:y.B.concat(numeric.add(S.B,M+1))}}if(a=r[n-2][n-2],o=r[n-2][n-1],c=r[n-1][n-2],l=r[n-1][n-1],h=a+l,u=a*l-o*c,p=numeric.getBlock(r,[0,0],[2,2]),h*h>=4*u){var E,O;E=.5*(h+Math.sqrt(h*h-4*u)),O=.5*(h-Math.sqrt(h*h-4*u)),p=numeric.add(numeric.sub(numeric.dot(p,p),numeric.mul(p,E+O)),numeric.diag(numeric.rep([3],E*O)))}else p=numeric.add(numeric.sub(numeric.dot(p,p),numeric.mul(p,h)),numeric.diag(numeric.rep([3],u)));for(i=[p[0][0],p[1][0],p[2][0]],s=numeric.house(i),v=[r[0],r[1],r[2]],_=numeric.tensor(s,numeric.dot(s,v)),x=0;x<3;x++)for(g=r[x],L=_[x],R=0;R<n;R++)g[R]-=2*L[R];for(v=numeric.getBlock(r,[0,0],[n-1,2]),_=numeric.tensor(numeric.dot(v,s),s),x=0;x<n;x++)for(g=r[x],L=_[x],R=0;R<3;R++)g[R]-=2*L[R];for(v=[f[0],f[1],f[2]],_=numeric.tensor(s,numeric.dot(s,v)),x=0;x<3;x++)for(m=f[x],L=_[x],R=0;R<n;R++)m[R]-=2*L[R];var $;for(M=0;M<n-2;M++){for(R=M;R<=M+1;R++)if(Math.abs(r[R+1][R])<I*(Math.abs(r[R][R])+Math.abs(r[R+1][R+1]))){var y=numeric.QRFrancis(numeric.getBlock(r,[0,0],[R,R]),e),S=numeric.QRFrancis(numeric.getBlock(r,[R+1,R+1],[n-1,n-1]),e);for(v=Array(R+1),x=0;x<=R;x++)v[x]=f[x];for(_=numeric.dot(y.Q,v),x=0;x<=R;x++)f[x]=_[x];for(v=Array(n-R-1),x=R+1;x<n;x++)v[x-R-1]=f[x];for(_=numeric.dot(S.Q,v),x=R+1;x<n;x++)f[x]=_[x-R-1];return{Q:f,B:y.B.concat(numeric.add(S.B,R+1))}}for($=Math.min(n-1,M+3),i=Array($-M),x=M+1;x<=$;x++)i[x-M-1]=r[x][M];for(s=numeric.house(i),v=numeric.getBlock(r,[M+1,M],[$,n-1]),_=numeric.tensor(s,numeric.dot(s,v)),x=M+1;x<=$;x++)for(g=r[x],L=_[x-M-1],R=M;R<n;R++)g[R]-=2*L[R-M];for(v=numeric.getBlock(r,[0,M+1],[n-1,$]),_=numeric.tensor(numeric.dot(v,s),s),x=0;x<n;x++)for(g=r[x],L=_[x],R=M+1;R<=$;R++)g[R]-=2*L[R-M-1];for(v=Array($-M),x=M+1;x<=$;x++)v[x-M-1]=f[x];for(_=numeric.tensor(s,numeric.dot(s,v)),x=M+1;x<=$;x++)for(m=f[x],L=_[x-M-1],R=0;R<n;R++)m[R]-=2*L[R]}}throw new Error("numeric: eigenvalue iteration does not converge -- increase maxiter?")},numeric.eig=function(e,t){var n=numeric.toUpperHessenberg(e),i=numeric.QRFrancis(n.H,t),s=numeric.T,H=e.length,a,o,c=i.B,l=numeric.dot(i.Q,numeric.dot(n.H,numeric.transpose(i.Q))),u=new s(numeric.dot(i.Q,n.Q)),h,p=c.length,f,m,g,v,_,L,x,M,R,D,I,y,S,E,O=Math.sqrt;for(o=0;o<p;o++)if(a=c[o][0],a!==c[o][1]){if(f=a+1,m=l[a][a],g=l[a][f],v=l[f][a],_=l[f][f],g===0&&v===0)continue;L=-m-_,x=m*_-g*v,M=L*L-4*x,M>=0?(L<0?R=-.5*(L-O(M)):R=-.5*(L+O(M)),S=(m-R)*(m-R)+g*g,E=v*v+(_-R)*(_-R),S>E?(S=O(S),I=(m-R)/S,y=g/S):(E=O(E),I=v/E,y=(_-R)/E),h=new s([[y,-I],[I,y]]),u.setRows(a,f,h.dot(u.getRows(a,f)))):(R=-.5*L,D=.5*O(-M),S=(m-R)*(m-R)+g*g,E=v*v+(_-R)*(_-R),S>E?(S=O(S+D*D),I=(m-R)/S,y=g/S,R=0,D/=S):(E=O(E+D*D),I=v/E,y=(_-R)/E,R=D/E,D=0),h=new s([[y,-I],[I,y]],[[R,D],[D,-R]]),u.setRows(a,f,h.dot(u.getRows(a,f))))}var $=u.dot(e).dot(u.transjugate()),H=e.length,te=numeric.T.identity(H);for(f=0;f<H;f++)if(f>0)for(o=f-1;o>=0;o--){var de=$.get([o,o]),ve=$.get([f,f]);if(numeric.neq(de.x,ve.x)||numeric.neq(de.y,ve.y))R=$.getRow(o).getBlock([o],[f-1]),D=te.getRow(f).getBlock([o],[f-1]),te.set([f,o],$.get([o,f]).neg().sub(R.dot(D)).div(de.sub(ve)));else{te.setRow(f,te.getRow(o));continue}}for(f=0;f<H;f++)R=te.getRow(f),te.setRow(f,R.div(R.norm2()));return te=te.transpose(),te=u.transjugate().dot(te),{lambda:$.getDiag(),E:te}},numeric.ccsSparse=function(e){var t=e.length,o,n,i,s,a=[];for(i=t-1;i!==-1;--i){n=e[i];for(s in n){for(s=parseInt(s);s>=a.length;)a[a.length]=0;n[s]!==0&&a[s]++}}var o=a.length,c=Array(o+1);for(c[0]=0,i=0;i<o;++i)c[i+1]=c[i]+a[i];var l=Array(c[o]),u=Array(c[o]);for(i=t-1;i!==-1;--i){n=e[i];for(s in n)n[s]!==0&&(a[s]--,l[c[s]+a[s]]=i,u[c[s]+a[s]]=n[s])}return[c,l,u]},numeric.ccsFull=function(e){var t=e[0],n=e[1],i=e[2],s=numeric.ccsDim(e),a=s[0],o=s[1],c,l,u,h,p=numeric.rep([a,o],0);for(c=0;c<o;c++)for(u=t[c],h=t[c+1],l=u;l<h;++l)p[n[l]][c]=i[l];return p},numeric.ccsTSolve=function(e,t,n,i,s){var a=e[0],o=e[1],c=e[2],l=a.length-1,u=Math.max,h=0;typeof i>"u"&&(n=numeric.rep([l],0)),typeof i>"u"&&(i=numeric.linspace(0,n.length-1)),typeof s>"u"&&(s=[]);function p(M){var R;if(n[M]===0){for(n[M]=1,R=a[M];R<a[M+1];++R)p(o[R]);s[h]=M,++h}}var f,m,g,v,_,L,x;for(f=i.length-1;f!==-1;--f)p(i[f]);for(s.length=h,f=s.length-1;f!==-1;--f)n[s[f]]=0;for(f=i.length-1;f!==-1;--f)m=i[f],n[m]=t[m];for(f=s.length-1;f!==-1;--f){for(m=s[f],g=a[m],v=u(a[m+1],g),_=g;_!==v;++_)if(o[_]===m){n[m]/=c[_];break}for(x=n[m],_=g;_!==v;++_)L=o[_],L!==m&&(n[L]-=x*c[_])}return n},numeric.ccsDFS=function(e){this.k=Array(e),this.k1=Array(e),this.j=Array(e)},numeric.ccsDFS.prototype.dfs=function(e,t,n,i,s,a){var o=0,c,l=s.length,u=this.k,h=this.k1,p=this.j,f,m;if(i[e]===0)for(i[e]=1,p[0]=e,u[0]=f=t[e],h[0]=m=t[e+1];;)if(f>=m){if(s[l]=p[o],o===0)return;++l,--o,f=u[o],m=h[o]}else c=a[n[f]],i[c]===0?(i[c]=1,u[o]=f,++o,p[o]=c,f=t[c],h[o]=m=t[c+1]):++f},numeric.ccsLPSolve=function(e,t,n,i,s,a,o){var c=e[0],l=e[1],u=e[2];c.length-1;var h=t[0],p=t[1],f=t[2],m,g,v,_,L,x,M,R,D;for(g=h[s],v=h[s+1],i.length=0,m=g;m<v;++m)o.dfs(a[p[m]],c,l,n,i,a);for(m=i.length-1;m!==-1;--m)n[i[m]]=0;for(m=g;m!==v;++m)_=a[p[m]],n[_]=f[m];for(m=i.length-1;m!==-1;--m){for(_=i[m],L=c[_],x=c[_+1],M=L;M<x;++M)if(a[l[M]]===_){n[_]/=u[M];break}for(D=n[_],M=L;M<x;++M)R=a[l[M]],R!==_&&(n[R]-=D*u[M])}return n},numeric.ccsLUP1=function(e,t){var n=e[0].length-1,i=[numeric.rep([n+1],0),[],[]],s=[numeric.rep([n+1],0),[],[]],a=i[0],o=i[1],c=i[2],l=s[0],u=s[1],h=s[2],p=numeric.rep([n],0),f=numeric.rep([n],0),m,g,v,_,L,x,M,R=numeric.ccsLPSolve,D=Math.abs,I=numeric.linspace(0,n-1),y=numeric.linspace(0,n-1),S=new numeric.ccsDFS(n);for(typeof t>"u"&&(t=1),m=0;m<n;++m){for(R(i,e,p,f,m,y,S),_=-1,L=-1,g=f.length-1;g!==-1;--g)v=f[g],!(v<=m)&&(x=D(p[v]),x>_&&(L=v,_=x));for(D(p[m])<t*_&&(g=I[m],_=I[L],I[m]=_,y[_]=m,I[L]=g,y[g]=L,_=p[m],p[m]=p[L],p[L]=_),_=a[m],L=l[m],M=p[m],o[_]=I[m],c[_]=1,++_,g=f.length-1;g!==-1;--g)v=f[g],x=p[v],f[g]=0,p[v]=0,v<=m?(u[L]=v,h[L]=x,++L):(o[_]=I[v],c[_]=x/M,++_);a[m+1]=_,l[m+1]=L}for(g=o.length-1;g!==-1;--g)o[g]=y[o[g]];return{L:i,U:s,P:I,Pinv:y}},numeric.ccsDFS0=function(e){this.k=Array(e),this.k1=Array(e),this.j=Array(e)},numeric.ccsDFS0.prototype.dfs=function(e,t,n,i,s,a,o){var c=0,l,u=s.length,h=this.k,p=this.k1,f=this.j,m,g;if(i[e]===0)for(i[e]=1,f[0]=e,h[0]=m=t[a[e]],p[0]=g=t[a[e]+1];;){if(isNaN(m))throw new Error("Ow!");if(m>=g){if(s[u]=a[f[c]],c===0)return;++u,--c,m=h[c],g=p[c]}else l=n[m],i[l]===0?(i[l]=1,h[c]=m,++c,f[c]=l,l=a[l],m=t[l],p[c]=g=t[l+1]):++m}},numeric.ccsLPSolve0=function(e,t,n,i,s,a,o,c){var l=e[0],u=e[1],h=e[2];l.length-1;var p=t[0],f=t[1],m=t[2],g,v,_,L,x,M,R,D,I;for(v=p[s],_=p[s+1],i.length=0,g=v;g<_;++g)c.dfs(f[g],l,u,n,i,a,o);for(g=i.length-1;g!==-1;--g)L=i[g],n[o[L]]=0;for(g=v;g!==_;++g)L=f[g],n[L]=m[g];for(g=i.length-1;g!==-1;--g){for(L=i[g],D=o[L],x=l[L],M=l[L+1],R=x;R<M;++R)if(u[R]===D){n[D]/=h[R];break}for(I=n[D],R=x;R<M;++R)n[u[R]]-=I*h[R];n[D]=I}},numeric.ccsLUP0=function(e,t){var n=e[0].length-1,i=[numeric.rep([n+1],0),[],[]],s=[numeric.rep([n+1],0),[],[]],a=i[0],o=i[1],c=i[2],l=s[0],u=s[1],h=s[2],p=numeric.rep([n],0),f=numeric.rep([n],0),m,g,v,_,L,x,M,R=numeric.ccsLPSolve0,D=Math.abs,I=numeric.linspace(0,n-1),y=numeric.linspace(0,n-1),S=new numeric.ccsDFS0(n);for(typeof t>"u"&&(t=1),m=0;m<n;++m){for(R(i,e,p,f,m,y,I,S),_=-1,L=-1,g=f.length-1;g!==-1;--g)v=f[g],!(v<=m)&&(x=D(p[I[v]]),x>_&&(L=v,_=x));for(D(p[I[m]])<t*_&&(g=I[m],_=I[L],I[m]=_,y[_]=m,I[L]=g,y[g]=L),_=a[m],L=l[m],M=p[I[m]],o[_]=I[m],c[_]=1,++_,g=f.length-1;g!==-1;--g)v=f[g],x=p[I[v]],f[g]=0,p[I[v]]=0,v<=m?(u[L]=v,h[L]=x,++L):(o[_]=I[v],c[_]=x/M,++_);a[m+1]=_,l[m+1]=L}for(g=o.length-1;g!==-1;--g)o[g]=y[o[g]];return{L:i,U:s,P:I,Pinv:y}},numeric.ccsLUP=numeric.ccsLUP0,numeric.ccsDim=function(e){return[numeric.sup(e[1])+1,e[0].length-1]},numeric.ccsGetBlock=function(e,t,n){var i=numeric.ccsDim(e),s=i[0],a=i[1];typeof t>"u"?t=numeric.linspace(0,s-1):typeof t=="number"&&(t=[t]),typeof n>"u"?n=numeric.linspace(0,a-1):typeof n=="number"&&(n=[n]);var o,c=t.length,l,u=n.length,h,p,f,m=numeric.rep([a],0),g=[],v=[],_=[m,g,v],L=e[0],x=e[1],M=e[2],R=numeric.rep([s],0),D=0,I=numeric.rep([s],0);for(l=0;l<u;++l){p=n[l];var y=L[p],S=L[p+1];for(o=y;o<S;++o)h=x[o],I[h]=1,R[h]=M[o];for(o=0;o<c;++o)f=t[o],I[f]&&(g[D]=o,v[D]=R[t[o]],++D);for(o=y;o<S;++o)h=x[o],I[h]=0;m[l+1]=D}return _},numeric.ccsDot=function(e,t){var n=e[0],i=e[1],s=e[2],a=t[0],o=t[1],c=t[2],l=numeric.ccsDim(e),u=numeric.ccsDim(t),h=l[0];l[1];var p=u[1],f=numeric.rep([h],0),m=numeric.rep([h],0),g=Array(h),v=numeric.rep([p],0),_=[],L=[],x=[v,_,L],M,R,D,I,y,S,E,O,$,H,te;for(D=0;D!==p;++D){for(I=a[D],y=a[D+1],$=0,R=I;R<y;++R)for(H=o[R],te=c[R],S=n[H],E=n[H+1],M=S;M<E;++M)O=i[M],m[O]===0&&(g[$]=O,m[O]=1,$=$+1),f[O]=f[O]+s[M]*te;for(I=v[D],y=I+$,v[D+1]=y,R=$-1;R!==-1;--R)te=I+R,M=g[R],_[te]=M,L[te]=f[M],m[M]=0,f[M]=0;v[D+1]=v[D]+$}return x},numeric.ccsLUPSolve=function(e,t){var n=e.L,i=e.U;e.P;var s=t[0],a=!1;typeof s!="object"&&(t=[[0,t.length],numeric.linspace(0,t.length-1),t],s=t[0],a=!0);var o=t[1],c=t[2],l=n[0].length-1,u=s.length-1,h=numeric.rep([l],0),p=Array(l),f=numeric.rep([l],0),m=Array(l),g=numeric.rep([u+1],0),v=[],_=[],L=numeric.ccsTSolve,x,M,R,D,I,y,S=0;for(x=0;x<u;++x){for(I=0,R=s[x],D=s[x+1],M=R;M<D;++M)y=e.Pinv[o[M]],m[I]=y,f[y]=c[M],++I;for(m.length=I,L(n,f,h,m,p),M=m.length-1;M!==-1;--M)f[m[M]]=0;if(L(i,h,f,p,m),a)return f;for(M=p.length-1;M!==-1;--M)h[p[M]]=0;for(M=m.length-1;M!==-1;--M)y=m[M],v[S]=y,_[S]=f[y],f[y]=0,++S;g[x+1]=S}return[g,v,_]},numeric.ccsbinop=function(e,t){return typeof t>"u"&&(t=""),Function("X","Y",`var Xi = X[0], Xj = X[1], Xv = X[2];
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
`)}(),numeric.ccsScatter=function r(e){var t=e[0],n=e[1],i=e[2],s=numeric.sup(n)+1,a=t.length,o=numeric.rep([s],0),c=Array(a),l=Array(a),u=numeric.rep([s],0),h;for(h=0;h<a;++h)u[n[h]]++;for(h=0;h<s;++h)o[h+1]=o[h]+u[h];var p=o.slice(0),f,m;for(h=0;h<a;++h)m=n[h],f=p[m],c[f]=t[h],l[f]=i[h],p[m]=p[m]+1;return[o,c,l]},numeric.ccsGather=function r(e){var t=e[0],n=e[1],i=e[2],s=t.length-1,a=n.length,o=Array(a),c=Array(a),l=Array(a),u,h,p,f,m;for(m=0,u=0;u<s;++u)for(p=t[u],f=t[u+1],h=p;h!==f;++h)c[m]=u,o[m]=n[h],l[m]=i[h],++m;return[o,c,l]},numeric.sdim=function r(e,t,n){if(typeof t>"u"&&(t=[]),typeof e!="object")return t;typeof n>"u"&&(n=0),n in t||(t[n]=0),e.length>t[n]&&(t[n]=e.length);var i;for(i in e)e.hasOwnProperty(i)&&r(e[i],t,n+1);return t},numeric.sclone=function r(e,t,n){typeof t>"u"&&(t=0),typeof n>"u"&&(n=numeric.sdim(e).length);var i,s=Array(e.length);if(t===n-1){for(i in e)e.hasOwnProperty(i)&&(s[i]=e[i]);return s}for(i in e)e.hasOwnProperty(i)&&(s[i]=r(e[i],t+1,n));return s},numeric.sdiag=function r(e){var t=e.length,n,i=Array(t),s;for(n=t-1;n>=1;n-=2)s=n-1,i[n]=[],i[n][n]=e[n],i[s]=[],i[s][s]=e[s];return n===0&&(i[0]=[],i[0][0]=e[n]),i},numeric.sidentity=function r(e){return numeric.sdiag(numeric.rep([e],1))},numeric.stranspose=function r(e){var t=[];e.length;var n,i,s;for(n in e)if(e.hasOwnProperty(n)){s=e[n];for(i in s)s.hasOwnProperty(i)&&(typeof t[i]!="object"&&(t[i]=[]),t[i][n]=s[i])}return t},numeric.sLUP=function r(e,t){throw new Error("The function numeric.sLUP had a bug in it and has been removed. Please use the new numeric.ccsLUP function instead.")},numeric.sdotMM=function r(e,t){var n=e.length;t.length;var i=numeric.stranspose(t),s=i.length,a,o,c,l,u,h,p=Array(n),f;for(c=n-1;c>=0;c--){for(f=[],a=e[c],u=s-1;u>=0;u--){h=0,o=i[u];for(l in a)a.hasOwnProperty(l)&&l in o&&(h+=a[l]*o[l]);h&&(f[u]=h)}p[c]=f}return p},numeric.sdotMV=function r(e,t){var n=e.length,i,s,a,o=Array(n),c;for(s=n-1;s>=0;s--){i=e[s],c=0;for(a in i)i.hasOwnProperty(a)&&t[a]&&(c+=i[a]*t[a]);c&&(o[s]=c)}return o},numeric.sdotVM=function r(e,t){var n,i,s,a,o=[];for(n in e)if(e.hasOwnProperty(n)){s=t[n],a=e[n];for(i in s)s.hasOwnProperty(i)&&(o[i]||(o[i]=0),o[i]+=a*s[i])}return o},numeric.sdotVV=function r(e,t){var n,i=0;for(n in e)e[n]&&t[n]&&(i+=e[n]*t[n]);return i},numeric.sdot=function r(e,t){var n=numeric.sdim(e).length,i=numeric.sdim(t).length,s=n*1e3+i;switch(s){case 0:return e*t;case 1001:return numeric.sdotVV(e,t);case 2001:return numeric.sdotMV(e,t);case 1002:return numeric.sdotVM(e,t);case 2002:return numeric.sdotMM(e,t);default:throw new Error("numeric.sdot not implemented for tensors of order "+n+" and "+i)}},numeric.sscatter=function r(e){var t=e[0].length,n,i,s,a=e.length,o=[],c;for(i=t-1;i>=0;--i)if(e[a-1][i]){for(c=o,s=0;s<a-2;s++)n=e[s][i],c[n]||(c[n]=[]),c=c[n];c[e[s][i]]=e[s+1][i]}return o},numeric.sgather=function r(e,t,n){typeof t>"u"&&(t=[]),typeof n>"u"&&(n=[]);var i,s,a;i=n.length;for(s in e)if(e.hasOwnProperty(s))if(n[i]=parseInt(s),a=e[s],typeof a=="number"){if(a){if(t.length===0)for(s=i+1;s>=0;--s)t[s]=[];for(s=i;s>=0;--s)t[s].push(n[s]);t[i+1].push(a)}}else r(a,t,n);return n.length>i&&n.pop(),t},numeric.cLU=function r(e){var t=e[0],n=e[1],i=e[2],S=t.length,s=0,a,o,c,l,u,h;for(a=0;a<S;a++)t[a]>s&&(s=t[a]);s++;var p=Array(s),f=Array(s),m=numeric.rep([s],1/0),g=numeric.rep([s],-1/0),x,M,v;for(c=0;c<S;c++)a=t[c],o=n[c],o<m[a]&&(m[a]=o),o>g[a]&&(g[a]=o);for(a=0;a<s-1;a++)g[a]>g[a+1]&&(g[a+1]=g[a]);for(a=s-1;a>=1;a--)m[a]<m[a-1]&&(m[a-1]=m[a]);var _=0,L=0;for(a=0;a<s;a++)f[a]=numeric.rep([g[a]-m[a]+1],0),p[a]=numeric.rep([a-m[a]],0),_+=a-m[a]+1,L+=g[a]-a+1;for(c=0;c<S;c++)a=t[c],f[a][n[c]-m[a]]=i[c];for(a=0;a<s-1;a++)for(l=a-m[a],x=f[a],o=a+1;m[o]<=a&&o<s;o++)if(u=a-m[o],h=g[a]-a,M=f[o],v=M[u]/x[l],v){for(c=1;c<=h;c++)M[c+u]-=v*x[c+l];p[o][a-m[o]]=v}var x=[],M=[],R=[],D=[],I=[],y=[],S,E,O;for(S=0,E=0,a=0;a<s;a++){for(l=m[a],u=g[a],O=f[a],o=a;o<=u;o++)O[o-l]&&(x[S]=a,M[S]=o,R[S]=O[o-l],S++);for(O=p[a],o=l;o<a;o++)O[o-l]&&(D[E]=a,I[E]=o,y[E]=O[o-l],E++);D[E]=a,I[E]=a,y[E]=1,E++}return{U:[x,M,R],L:[D,I,y]}},numeric.cLUsolve=function r(e,t){var n=e.L,i=e.U,s=numeric.clone(t),a=n[0],o=n[1],c=n[2],l=i[0],u=i[1],h=i[2],p=l.length;a.length;var f=s.length,m,g;for(g=0,m=0;m<f;m++){for(;o[g]<m;)s[m]-=c[g]*s[o[g]],g++;g++}for(g=p-1,m=f-1;m>=0;m--){for(;u[g]>m;)s[m]-=h[g]*s[u[g]],g--;s[m]/=h[g],g--}return s},numeric.cgrid=function r(e,t){typeof e=="number"&&(e=[e,e]);var n=numeric.rep(e,-1),i,s,a;if(typeof t!="function")switch(t){case"L":t=function(o,c){return o>=e[0]/2||c<e[1]/2};break;default:t=function(o,c){return!0};break}for(a=0,i=1;i<e[0]-1;i++)for(s=1;s<e[1]-1;s++)t(i,s)&&(n[i][s]=a,a++);return n},numeric.cdelsq=function r(e){var t=[[-1,0],[0,-1],[0,1],[1,0]],n=numeric.dim(e),i=n[0],s=n[1],a,o,c,l,u,h=[],p=[],f=[];for(a=1;a<i-1;a++)for(o=1;o<s-1;o++)if(!(e[a][o]<0)){for(c=0;c<4;c++)l=a+t[c][0],u=o+t[c][1],!(e[l][u]<0)&&(h.push(e[a][o]),p.push(e[l][u]),f.push(-1));h.push(e[a][o]),p.push(e[a][o]),f.push(4)}return[h,p,f]},numeric.cdotMV=function r(e,t){var n,i=e[0],s=e[1],a=e[2],o,c=i.length,l;for(l=0,o=0;o<c;o++)i[o]>l&&(l=i[o]);for(l++,n=numeric.rep([l],0),o=0;o<c;o++)n[i[o]]+=a[o]*t[s[o]];return n},numeric.Spline=function r(e,t,n,i,s){this.x=e,this.yl=t,this.yr=n,this.kl=i,this.kr=s},numeric.Spline.prototype._at=function r(c,t){var n=this.x,i=this.yl,s=this.yr,a=this.kl,o=this.kr,c,l,u,h,p=numeric.add,f=numeric.sub,m=numeric.mul;l=f(m(a[t],n[t+1]-n[t]),f(s[t+1],i[t])),u=p(m(o[t+1],n[t]-n[t+1]),f(s[t+1],i[t])),h=(c-n[t])/(n[t+1]-n[t]);var g=h*(1-h);return p(p(p(m(1-h,i[t]),m(h,s[t+1])),m(l,g*(1-h))),m(u,g*h))},numeric.Spline.prototype.at=function r(e){if(typeof e=="number"){var t=this.x,o=t.length,n,i,s,a=Math.floor;for(n=0,i=o-1;i-n>1;)s=a((n+i)/2),t[s]<=e?n=s:i=s;return this._at(e,n)}var o=e.length,c,l=Array(o);for(c=o-1;c!==-1;--c)l[c]=this.at(e[c]);return l},numeric.Spline.prototype.diff=function r(){var e=this.x,t=this.yl,n=this.yr,i=this.kl,s=this.kr,a=t.length,o,c,l,u=i,h=s,p=Array(a),f=Array(a),m=numeric.add,g=numeric.mul,v=numeric.div,_=numeric.sub;for(o=a-1;o!==-1;--o)c=e[o+1]-e[o],l=_(n[o+1],t[o]),p[o]=v(m(g(l,6),g(i[o],-4*c),g(s[o+1],-2*c)),c*c),f[o+1]=v(m(g(l,-6),g(i[o],2*c),g(s[o+1],4*c)),c*c);return new numeric.Spline(e,u,h,p,f)},numeric.Spline.prototype.roots=function r(){function e(F){return F*F}var v=[],t=this.x,n=this.yl,i=this.yr,s=this.kl,a=this.kr;typeof n[0]=="number"&&(n=[n],i=[i],s=[s],a=[a]);var o=n.length,c=t.length-1,l,u,h,p,f,m,g,v=Array(o),_,L,x,M,R,D,I,y,S,E,O,$,H,te,de,ve,ge=Math.sqrt;for(l=0;l!==o;++l){for(p=n[l],f=i[l],m=s[l],g=a[l],_=[],u=0;u!==c;u++){for(u>0&&f[u]*p[u]<0&&_.push(t[u]),S=t[u+1]-t[u],t[u],M=p[u],R=f[u+1],L=m[u]/S,x=g[u+1]/S,y=e(L-x+3*(M-R))+12*x*M,D=x+3*M+2*L-3*R,I=3*(x+L+2*(M-R)),y<=0?(O=D/I,O>t[u]&&O<t[u+1]?E=[t[u],O,t[u+1]]:E=[t[u],t[u+1]]):(O=(D-ge(y))/I,$=(D+ge(y))/I,E=[t[u]],O>t[u]&&O<t[u+1]&&E.push(O),$>t[u]&&$<t[u+1]&&E.push($),E.push(t[u+1])),te=E[0],O=this._at(te,u),h=0;h<E.length-1;h++){if(de=E[h+1],$=this._at(de,u),O===0){_.push(te),te=de,O=$;continue}if($===0||O*$>0){te=de,O=$;continue}for(var q=0;ve=(O*de-$*te)/(O-$),!(ve<=te||ve>=de);)if(H=this._at(ve,u),H*$>0)de=ve,$=H,q===-1&&(O*=.5),q=-1;else if(H*O>0)te=ve,O=H,q===1&&($*=.5),q=1;else break;_.push(ve),te=E[h+1],O=this._at(te,u)}$===0&&_.push(de)}v[l]=_}return typeof this.yl[0]=="number"?v[0]:v},numeric.spline=function r(e,t,n,i){var s=e.length,a=[],o=[],c=[],l,u=numeric.sub,h=numeric.mul,p=numeric.add;for(l=s-2;l>=0;l--)o[l]=e[l+1]-e[l],c[l]=u(t[l+1],t[l]);(typeof n=="string"||typeof i=="string")&&(n=i="periodic");var f=[[],[],[]];switch(typeof n){case"undefined":a[0]=h(3/(o[0]*o[0]),c[0]),f[0].push(0,0),f[1].push(0,1),f[2].push(2/o[0],1/o[0]);break;case"string":a[0]=p(h(3/(o[s-2]*o[s-2]),c[s-2]),h(3/(o[0]*o[0]),c[0])),f[0].push(0,0,0),f[1].push(s-2,0,1),f[2].push(1/o[s-2],2/o[s-2]+2/o[0],1/o[0]);break;default:a[0]=n,f[0].push(0),f[1].push(0),f[2].push(1);break}for(l=1;l<s-1;l++)a[l]=p(h(3/(o[l-1]*o[l-1]),c[l-1]),h(3/(o[l]*o[l]),c[l])),f[0].push(l,l,l),f[1].push(l-1,l,l+1),f[2].push(1/o[l-1],2/o[l-1]+2/o[l],1/o[l]);switch(typeof i){case"undefined":a[s-1]=h(3/(o[s-2]*o[s-2]),c[s-2]),f[0].push(s-1,s-1),f[1].push(s-2,s-1),f[2].push(1/o[s-2],2/o[s-2]);break;case"string":f[1][f[1].length-1]=0;break;default:a[s-1]=i,f[0].push(s-1),f[1].push(s-1),f[2].push(1);break}typeof a[0]!="number"?a=numeric.transpose(a):a=[a];var m=Array(a.length);if(typeof n=="string")for(l=m.length-1;l!==-1;--l)m[l]=numeric.ccsLUPSolve(numeric.ccsLUP(numeric.ccsScatter(f)),a[l]),m[l][s-1]=m[l][0];else for(l=m.length-1;l!==-1;--l)m[l]=numeric.cLUsolve(numeric.cLU(f),a[l]);return typeof t[0]=="number"?m=m[0]:m=numeric.transpose(m),new numeric.Spline(e,t,t,m,m)},numeric.fftpow2=function r(e,t){var n=e.length;if(n!==1){var i=Math.cos,s=Math.sin,a,o,c=Array(n/2),l=Array(n/2),u=Array(n/2),h=Array(n/2);for(o=n/2,a=n-1;a!==-1;--a)--o,u[o]=e[a],h[o]=t[a],--a,c[o]=e[a],l[o]=t[a];r(c,l),r(u,h),o=n/2;var p,f=-6.283185307179586/n,m,g;for(a=n-1;a!==-1;--a)--o,o===-1&&(o=n/2-1),p=f*a,m=i(p),g=s(p),e[a]=c[o]+m*u[o]-g*h[o],t[a]=l[o]+m*h[o]+g*u[o]}},numeric._ifftpow2=function r(e,t){var n=e.length;if(n!==1){var i=Math.cos,s=Math.sin,a,o,c=Array(n/2),l=Array(n/2),u=Array(n/2),h=Array(n/2);for(o=n/2,a=n-1;a!==-1;--a)--o,u[o]=e[a],h[o]=t[a],--a,c[o]=e[a],l[o]=t[a];r(c,l),r(u,h),o=n/2;var p,f=6.283185307179586/n,m,g;for(a=n-1;a!==-1;--a)--o,o===-1&&(o=n/2-1),p=f*a,m=i(p),g=s(p),e[a]=c[o]+m*u[o]-g*h[o],t[a]=l[o]+m*h[o]+g*u[o]}},numeric.ifftpow2=function r(e,t){numeric._ifftpow2(e,t),numeric.diveq(e,e.length),numeric.diveq(t,t.length)},numeric.convpow2=function r(e,t,n,i){numeric.fftpow2(e,t),numeric.fftpow2(n,i);var s,a=e.length,o,c,l,u;for(s=a-1;s!==-1;--s)o=e[s],l=t[s],c=n[s],u=i[s],e[s]=o*c-l*u,t[s]=o*u+l*c;numeric.ifftpow2(e,t)},numeric.T.prototype.fft=function r(){var e=this.x,t=this.y,n=e.length,i=Math.log,s=i(2),a=Math.ceil(i(2*n-1)/s),o=Math.pow(2,a),c=numeric.rep([o],0),l=numeric.rep([o],0),u=Math.cos,h=Math.sin,p,f=-3.141592653589793/n,m,g=numeric.rep([o],0),v=numeric.rep([o],0);for(p=0;p<n;p++)g[p]=e[p];if(typeof t<"u")for(p=0;p<n;p++)v[p]=t[p];for(c[0]=1,p=1;p<=o/2;p++)m=f*p*p,c[p]=u(m),l[p]=h(m),c[o-p]=u(m),l[o-p]=h(m);var _=new numeric.T(g,v),L=new numeric.T(c,l);return _=_.mul(L),numeric.convpow2(_.x,_.y,numeric.clone(L.x),numeric.neg(L.y)),_=_.mul(L),_.x.length=n,_.y.length=n,_},numeric.T.prototype.ifft=function r(){var e=this.x,t=this.y,n=e.length,i=Math.log,s=i(2),a=Math.ceil(i(2*n-1)/s),o=Math.pow(2,a),c=numeric.rep([o],0),l=numeric.rep([o],0),u=Math.cos,h=Math.sin,p,f=3.141592653589793/n,m,g=numeric.rep([o],0),v=numeric.rep([o],0);for(p=0;p<n;p++)g[p]=e[p];if(typeof t<"u")for(p=0;p<n;p++)v[p]=t[p];for(c[0]=1,p=1;p<=o/2;p++)m=f*p*p,c[p]=u(m),l[p]=h(m),c[o-p]=u(m),l[o-p]=h(m);var _=new numeric.T(g,v),L=new numeric.T(c,l);return _=_.mul(L),numeric.convpow2(_.x,_.y,numeric.clone(L.x),numeric.neg(L.y)),_=_.mul(L),_.x.length=n,_.y.length=n,_.div(n)},numeric.gradient=function r(e,t){var n=t.length,i=e(t);if(isNaN(i))throw new Error("gradient: f(x) is a NaN!");var h=Math.max,s,a=numeric.clone(t),o,c,l=Array(n);numeric.div,numeric.sub;var u,h=Math.max,p=.001,f=Math.abs,m=Math.min,g,v,_,L=0,x,M,R;for(s=0;s<n;s++)for(var D=h(1e-6*i,1e-8);;){if(++L,L>20)throw new Error("Numerical gradient fails");if(a[s]=t[s]+D,o=e(a),a[s]=t[s]-D,c=e(a),a[s]=t[s],isNaN(o)||isNaN(c)){D/=16;continue}if(l[s]=(o-c)/(2*D),g=t[s]-D,v=t[s],_=t[s]+D,x=(o-i)/D,M=(i-c)/D,R=h(f(l[s]),f(i),f(o),f(c),f(g),f(v),f(_),1e-8),u=m(h(f(x-l[s]),f(M-l[s]),f(x-M))/R,D/R),u>p)D/=16;else break}return l},numeric.uncmin=function r(e,t,n,i,s,a,o){var c=numeric.gradient;typeof o>"u"&&(o={}),typeof n>"u"&&(n=1e-8),typeof i>"u"&&(i=function(ce){return c(e,ce)}),typeof s>"u"&&(s=1e3),t=numeric.clone(t);var l=t.length,u=e(t),h,p;if(isNaN(u))throw new Error("uncmin: f(x0) is a NaN!");var f=Math.max,m=numeric.norm2;n=f(n,numeric.epsilon);var g,v,_,L=o.Hinv||numeric.identity(l),x=numeric.dot;numeric.inv;var M=numeric.sub,R=numeric.add,D=numeric.tensor,I=numeric.div,y=numeric.mul,S=numeric.all,E=numeric.isFinite,O=numeric.neg,$=0,H,te,de,ve,ge,q,F,j="";for(v=i(t);$<s;){if(typeof a=="function"&&a($,t,u,v,L)){j="Callback returned true";break}if(!S(E(v))){j="Gradient has Infinity or NaN";break}if(g=O(x(L,v)),!S(E(g))){j="Search direction has Infinity or NaN";break}if(F=m(g),F<n){j="Newton step smaller than tol";break}for(q=1,p=x(v,g),te=t;$<s&&!(q*F<n);){if(H=y(g,q),te=R(t,H),h=e(te),h-u>=.1*q*p||isNaN(h)){q*=.5,++$;continue}break}if(q*F<n){j="Line search step size smaller than tol";break}if($===s){j="maxit reached during line search";break}_=i(te),de=M(_,v),ge=x(de,H),ve=x(L,de),L=M(R(L,y((ge+x(de,ve))/(ge*ge),D(H,H))),I(R(D(ve,H),D(H,ve)),ge)),t=te,u=h,v=_,++$}return{solution:t,f:u,gradient:v,invHessian:L,iterations:$,message:j}},numeric.Dopri=function r(e,t,n,i,s,a,o){this.x=e,this.y=t,this.f=n,this.ymid=i,this.iterations=s,this.events=o,this.message=a},numeric.Dopri.prototype._at=function r(g,t){function n(y){return y*y}var i=this,s=i.x,a=i.y,o=i.f,c=i.ymid;s.length;var l,u,h,p,f,m,g,v,_=.5,L=numeric.add,x=numeric.mul,M=numeric.sub,R,D,I;return l=s[t],u=s[t+1],p=a[t],f=a[t+1],v=u-l,h=l+_*v,m=c[t],R=M(o[t],x(p,1/(l-h)+2/(l-u))),D=M(o[t+1],x(f,1/(u-h)+2/(u-l))),I=[n(g-u)*(g-h)/n(l-u)/(l-h),n(g-l)*n(g-u)/n(l-h)/n(u-h),n(g-l)*(g-h)/n(u-l)/(u-h),(g-l)*n(g-u)*(g-h)/n(l-u)/(l-h),(g-u)*n(g-l)*(g-h)/n(l-u)/(u-h)],L(L(L(L(x(p,I[0]),x(m,I[1])),x(f,I[2])),x(R,I[3])),x(D,I[4]))},numeric.Dopri.prototype.at=function r(e){var t,n,i,s=Math.floor;if(typeof e!="number"){var a=e.length,o=Array(a);for(t=a-1;t!==-1;--t)o[t]=this.at(e[t]);return o}var c=this.x;for(t=0,n=c.length-1;n-t>1;)i=s(.5*(t+n)),c[i]<=e?t=i:n=i;return this._at(e,t)},numeric.dopri=function r(e,t,n,i,s,a,o){typeof s>"u"&&(s=1e-6),typeof a>"u"&&(a=1e3);var c=[e],l=[n],u=[i(e,n)],h,p,f,m,g,v,_=[],L=1/5,x=[3/40,9/40],M=[44/45,-56/15,32/9],R=[19372/6561,-25360/2187,64448/6561,-212/729],D=[9017/3168,-355/33,46732/5247,49/176,-5103/18656],I=[35/384,0,500/1113,125/192,-2187/6784,11/84],y=[.5*6025192743/30085553152,0,.5*51252292925/65400821598,.5*-2691868925/45128329728,.5*187940372067/1594534317056,.5*-1776094331/19743644256,.5*11237099/235043384],S=[1/5,3/10,4/5,8/9,1,1],E=[-71/57600,0,71/16695,-71/1920,17253/339200,-22/525,1/40],O=0,$,H,te=(t-e)/10,de=0,ve=numeric.add,ge=numeric.mul,q,F,j=Math.min,ce=Math.abs,pe=numeric.norminf,_e=Math.pow,he=numeric.any,N=numeric.lt,w=numeric.and;numeric.sub;var G,ae,Q,ie=new numeric.Dopri(c,l,u,_,-1,"");for(typeof o=="function"&&(G=o(e,n));e<t&&de<a;){if(++de,e+te>t&&(te=t-e),h=i(e+S[0]*te,ve(n,ge(L*te,u[O]))),p=i(e+S[1]*te,ve(ve(n,ge(x[0]*te,u[O])),ge(x[1]*te,h))),f=i(e+S[2]*te,ve(ve(ve(n,ge(M[0]*te,u[O])),ge(M[1]*te,h)),ge(M[2]*te,p))),m=i(e+S[3]*te,ve(ve(ve(ve(n,ge(R[0]*te,u[O])),ge(R[1]*te,h)),ge(R[2]*te,p)),ge(R[3]*te,f))),g=i(e+S[4]*te,ve(ve(ve(ve(ve(n,ge(D[0]*te,u[O])),ge(D[1]*te,h)),ge(D[2]*te,p)),ge(D[3]*te,f)),ge(D[4]*te,m))),q=ve(ve(ve(ve(ve(n,ge(u[O],te*I[0])),ge(p,te*I[2])),ge(f,te*I[3])),ge(m,te*I[4])),ge(g,te*I[5])),v=i(e+te,q),$=ve(ve(ve(ve(ve(ge(u[O],te*E[0]),ge(p,te*E[2])),ge(f,te*E[3])),ge(m,te*E[4])),ge(g,te*E[5])),ge(v,te*E[6])),typeof $=="number"?F=ce($):F=pe($),F>s){if(te=.2*te*_e(s/F,.25),e+te===e){ie.msg="Step size became too small";break}continue}if(_[O]=ve(ve(ve(ve(ve(ve(n,ge(u[O],te*y[0])),ge(p,te*y[2])),ge(f,te*y[3])),ge(m,te*y[4])),ge(g,te*y[5])),ge(v,te*y[6])),++O,c[O]=e+te,l[O]=q,u[O]=v,typeof o=="function"){var K,le=e,fe=e+.5*te,Y;if(ae=o(fe,_[O-1]),Q=w(N(G,0),N(0,ae)),he(Q)||(le=fe,fe=e+te,G=ae,ae=o(fe,q),Q=w(N(G,0),N(0,ae))),he(Q)){for(var ee,se,X=0,z=1,d=1;;){if(typeof G=="number")Y=(d*ae*le-z*G*fe)/(d*ae-z*G);else for(Y=fe,H=G.length-1;H!==-1;--H)G[H]<0&&ae[H]>0&&(Y=j(Y,(d*ae[H]*le-z*G[H]*fe)/(d*ae[H]-z*G[H])));if(Y<=le||Y>=fe)break;K=ie._at(Y,O-1),se=o(Y,K),ee=w(N(G,0),N(0,se)),he(ee)?(fe=Y,ae=se,Q=ee,d=1,X===-1?z*=.5:z=1,X=-1):(le=Y,G=se,z=1,X===1?d*=.5:d=1,X=1)}return q=ie._at(.5*(e+Y),O-1),ie.f[O]=i(Y,K),ie.x[O]=Y,ie.y[O]=K,ie.ymid[O-1]=q,ie.events=Q,ie.iterations=de,ie}}e+=te,n=q,G=ae,te=j(.8*te*_e(s/F,.25),4*te)}return ie.iterations=de,ie},numeric.LU=function(r,e){e=e||!1;var t=Math.abs,n,i,s,a,o,c,l,u,h,p=r.length,f=p-1,m=new Array(p);for(e||(r=numeric.clone(r)),s=0;s<p;++s){for(l=s,c=r[s],h=t(c[s]),i=s+1;i<p;++i)a=t(r[i][s]),h<a&&(h=a,l=i);for(m[s]=l,l!=s&&(r[s]=r[l],r[l]=c,c=r[s]),o=c[s],n=s+1;n<p;++n)r[n][s]/=o;for(n=s+1;n<p;++n){for(u=r[n],i=s+1;i<f;++i)u[i]-=u[s]*c[i],++i,u[i]-=u[s]*c[i];i===f&&(u[i]-=u[s]*c[i])}}return{LU:r,P:m}},numeric.LUsolve=function r(e,t){var n,i,s=e.LU,a=s.length,o=numeric.clone(t),c=e.P,l,u,h;for(n=a-1;n!==-1;--n)o[n]=t[n];for(n=0;n<a;++n)for(l=c[n],c[n]!==n&&(h=o[n],o[n]=o[l],o[l]=h),u=s[n],i=0;i<n;++i)o[n]-=o[i]*u[i];for(n=a-1;n>=0;--n){for(u=s[n],i=n+1;i<a;++i)o[n]-=o[i]*u[i];o[n]/=u[n]}return o},numeric.solve=function r(e,t,n){return numeric.LUsolve(numeric.LU(e,n),t)},numeric.echelonize=function r(e){var t=numeric.dim(e),n=t[0],i=t[1],s=numeric.identity(n),a=Array(n),o,c,l,u,h,p,f,m,g=Math.abs,v=numeric.diveq;for(e=numeric.clone(e),o=0;o<n;++o){for(l=0,h=e[o],p=s[o],c=1;c<i;++c)g(h[l])<g(h[c])&&(l=c);for(a[o]=l,v(p,h[l]),v(h,h[l]),c=0;c<n;++c)if(c!==o){for(f=e[c],m=f[l],u=i-1;u!==-1;--u)f[u]-=h[u]*m;for(f=s[c],u=n-1;u!==-1;--u)f[u]-=p[u]*m}}return{I:s,A:e,P:a}},numeric.__solveLP=function r(e,t,n,i,s,a,o){var c=numeric.sum;numeric.log;var l=numeric.mul,u=numeric.sub,h=numeric.dot,p=numeric.div,f=numeric.add,m=e.length,g=n.length,v,_=!1,L=0,x=1;numeric.transpose(t),numeric.svd;var M=numeric.transpose;numeric.leq;var R=Math.sqrt,D=Math.abs;numeric.muleq,numeric.norminf,numeric.any;var I=Math.min,y=numeric.all,S=numeric.gt,E=Array(m),O=Array(g);numeric.rep([g],1);var $,H=numeric.solve,te=u(n,h(t,a)),de,ve=h(e,e),ge;for(de=L;de<s;++de){var q,F;for(q=g-1;q!==-1;--q)O[q]=p(t[q],te[q]);var j=M(O);for(q=m-1;q!==-1;--q)E[q]=c(j[q]);x=.25*D(ve/h(e,E));var ce=100*R(ve/h(E,E));for((!isFinite(x)||x>ce)&&(x=ce),ge=f(e,l(x,E)),$=h(j,O),q=m-1;q!==-1;--q)$[q][q]+=1;F=H($,p(ge,x),!0);var pe=p(te,h(t,F)),_e=1;for(q=g-1;q!==-1;--q)pe[q]<0&&(_e=I(_e,-.999*pe[q]));if(v=u(a,l(F,_e)),te=u(n,h(t,v)),!y(S(te,0)))return{solution:a,message:"",iterations:de};if(a=v,x<i)return{solution:v,message:"",iterations:de};if(o){var he=h(e,ge),N=h(t,ge);for(_=!0,q=g-1;q!==-1;--q)if(he*N[q]<0){_=!1;break}}else a[m-1]>=0?_=!1:_=!0;if(_)return{solution:v,message:"Unbounded",iterations:de}}return{solution:a,message:"maximum iteration count exceeded",iterations:de}},numeric._solveLP=function r(e,t,n,i,s){var a=e.length,o=n.length,m;numeric.sum,numeric.log,numeric.mul;var c=numeric.sub,l=numeric.dot;numeric.div,numeric.add;var u=numeric.rep([a],0).concat([1]),h=numeric.rep([o,1],-1),p=numeric.blockMatrix([[t,h]]),f=n,m=numeric.rep([a],0).concat(Math.max(0,numeric.sup(numeric.neg(n)))+1),g=numeric.__solveLP(u,p,f,i,s,m,!1),v=numeric.clone(g.solution);v.length=a;var _=numeric.inf(c(n,l(t,v)));if(_<0)return{solution:NaN,message:"Infeasible",iterations:g.iterations};var L=numeric.__solveLP(e,t,n,i,s-g.iterations,v,!0);return L.iterations+=g.iterations,L},numeric.solveLP=function r(e,t,n,i,s,a,o){if(typeof o>"u"&&(o=1e3),typeof a>"u"&&(a=numeric.epsilon),typeof i>"u")return numeric._solveLP(e,t,n,a,o);var c=i.length,l=i[0].length,u=t.length,h=numeric.echelonize(i),p=numeric.rep([l],0),f=h.P,m=[],g;for(g=f.length-1;g!==-1;--g)p[f[g]]=1;for(g=l-1;g!==-1;--g)p[g]===0&&m.push(g);var v=numeric.getRange,_=numeric.linspace(0,c-1),L=numeric.linspace(0,u-1),x=v(i,_,m),M=v(t,L,f),R=v(t,L,m),D=numeric.dot,I=numeric.sub,y=D(M,h.I),S=I(R,D(y,x)),E=I(n,D(y,s)),O=Array(f.length),$=Array(m.length);for(g=f.length-1;g!==-1;--g)O[g]=e[f[g]];for(g=m.length-1;g!==-1;--g)$[g]=e[m[g]];var H=I($,D(O,D(h.I,x))),te=numeric._solveLP(H,S,E,a,o),de=te.solution;if(de!==de)return te;var ve=D(h.I,I(s,D(x,de))),ge=Array(e.length);for(g=f.length-1;g!==-1;--g)ge[f[g]]=ve[g];for(g=m.length-1;g!==-1;--g)ge[m[g]]=de[g];return{solution:ge,message:te.message,iterations:te.iterations}},numeric.MPStoLP=function r(e){e instanceof String&&e.split(`
`);var t=0,n=["Initial state","NAME","ROWS","COLUMNS","RHS","BOUNDS","ENDATA"],i=e.length,s,a,o,c=0,l={},u=[],h=0,p={},f=0,m,g=[],v=[],_=[];function L(I){throw new Error("MPStoLP: "+I+`
Line `+s+": "+e[s]+`
Current state: `+n[t]+`
`)}for(s=0;s<i;++s){o=e[s];var x=o.match(/\S*/g),M=[];for(a=0;a<x.length;++a)x[a]!==""&&M.push(x[a]);if(M.length!==0){for(a=0;a<n.length&&o.substr(0,n[a].length)!==n[a];++a);if(a<n.length){if(t=a,a===1&&(m=M[1]),a===6)return{name:m,c:g,A:numeric.transpose(v),b:_,rows:l,vars:p};continue}switch(t){case 0:case 1:L("Unexpected line");case 2:switch(M[0]){case"N":c===0?c=M[1]:L("Two or more N rows");break;case"L":l[M[1]]=h,u[h]=1,_[h]=0,++h;break;case"G":l[M[1]]=h,u[h]=-1,_[h]=0,++h;break;case"E":l[M[1]]=h,u[h]=0,_[h]=0,++h;break;default:L("Parse error "+numeric.prettyPrint(M))}break;case 3:p.hasOwnProperty(M[0])||(p[M[0]]=f,g[f]=0,v[f]=numeric.rep([h],0),++f);var R=p[M[0]];for(a=1;a<M.length;a+=2){if(M[a]===c){g[R]=parseFloat(M[a+1]);continue}var D=l[M[a]];v[R][D]=(u[D]<0?-1:1)*parseFloat(M[a+1])}break;case 4:for(a=1;a<M.length;a+=2)_[l[M[a]]]=(u[l[M[a]]]<0?-1:1)*parseFloat(M[a+1]);break;case 5:break;case 6:L("Internal error")}}}L("Reached end of file without ENDATA")},numeric.seedrandom={pow:Math.pow,random:Math.random},function(r,e,t,n,i,s,a){e.seedrandom=function(p,f){var m=[],g;return p=l(c(f?[p,r]:arguments.length?p:[new Date().getTime(),r,window],3),m),g=new o(m),l(g.S,r),e.random=function(){for(var _=g.g(n),L=a,x=0;_<i;)_=(_+x)*t,L*=t,x=g.g(1);for(;_>=s;)_/=2,L/=2,x>>>=1;return(_+x)/L},p};function o(h){var p,f,m=this,g=h.length,v=0,_=m.i=m.j=m.m=0;for(m.S=[],m.c=[],g||(h=[g++]);v<t;)m.S[v]=v++;for(v=0;v<t;v++)p=m.S[v],_=u(_+p+h[v%g]),f=m.S[_],m.S[v]=f,m.S[_]=p;m.g=function(x){var M=m.S,R=u(m.i+1),D=M[R],I=u(m.j+D),y=M[I];M[R]=y,M[I]=D;for(var S=M[u(D+y)];--x;)R=u(R+1),D=M[R],I=u(I+D),y=M[I],M[R]=y,M[I]=D,S=S*t+M[u(D+y)];return m.i=R,m.j=I,S},m.g(t)}function c(h,p,f,m,g){if(f=[],g=typeof h,p&&g=="object"){for(m in h)if(m.indexOf("S")<5)try{f.push(c(h[m],p-1))}catch{}}return f.length?f:h+(g!="string"?"\0":"")}function l(h,p,f,m){for(h+="",f=0,m=0;m<h.length;m++)p[u(m)]=u((f^=p[u(m)]*19)+h.charCodeAt(m));h="";for(m in p)h+=String.fromCharCode(p[m]);return h}function u(h){return h&t-1}a=e.pow(t,n),i=e.pow(2,i),s=i*2,l(e.random(),r)}([],numeric.seedrandom,256,6,52),function(r){function e(c){if(typeof c!="object")return c;var l=[],u,h=c.length;for(u=0;u<h;u++)l[u+1]=e(c[u]);return l}function t(c){if(typeof c!="object")return c;var l=[],u,h=c.length;for(u=1;u<h;u++)l[u-1]=t(c[u]);return l}function n(c,l,u){var h,p,f,m,g;for(f=1;f<=u;f=f+1){for(c[f][f]=1/c[f][f],g=-c[f][f],h=1;h<f;h=h+1)c[h][f]=g*c[h][f];if(m=f+1,u<m)break;for(p=m;p<=u;p=p+1)for(g=c[f][p],c[f][p]=0,h=1;h<=f;h=h+1)c[h][p]=c[h][p]+g*c[h][f]}}function i(c,l,u,h){var p,f,m,g;for(f=1;f<=u;f=f+1){for(g=0,p=1;p<f;p=p+1)g=g+c[p][f]*h[p];h[f]=(h[f]-g)/c[f][f]}for(m=1;m<=u;m=m+1)for(f=u+1-m,h[f]=h[f]/c[f][f],g=-h[f],p=1;p<f;p=p+1)h[p]=h[p]+g*c[p][f]}function s(c,l,u,h){var p,f,m,g,v,_;for(f=1;f<=u;f=f+1){if(h[1]=f,_=0,m=f-1,m<1){if(_=c[f][f]-_,_<=0)break;c[f][f]=Math.sqrt(_)}else{for(g=1;g<=m;g=g+1){for(v=c[g][f],p=1;p<g;p=p+1)v=v-c[p][f]*c[p][g];v=v/c[g][g],c[g][f]=v,_=_+v*v}if(_=c[f][f]-_,_<=0)break;c[f][f]=Math.sqrt(_)}h[1]=0}}function a(c,l,u,h,p,f,m,g,v,_,L,x,M,R,D,I){var y,S,E,O,$,H,te,de,ve,ge,q,F,j,ce,pe,_e,he,N,w,G,ae,Q,ie,K,le,fe,Y;j=Math.min(h,_),E=2*h+j*(j+5)/2+2*_+1,K=1e-60;do K=K+K,le=1+.1*K,fe=1+.2*K;while(le<=1||fe<=1);for(y=1;y<=h;y=y+1)D[y]=l[y];for(y=h+1;y<=E;y=y+1)D[y]=0;for(y=1;y<=_;y=y+1)x[y]=0;if($=[],I[1]===0){if(s(c,u,h,$),$[1]!==0){I[1]=2;return}i(c,u,h,l),n(c,u,h)}else{for(S=1;S<=h;S=S+1)for(p[S]=0,y=1;y<=S;y=y+1)p[S]=p[S]+c[y][S]*l[y];for(S=1;S<=h;S=S+1)for(l[S]=0,y=S;y<=h;y=y+1)l[S]=l[S]+c[S][y]*p[y]}for(f[1]=0,S=1;S<=h;S=S+1)for(p[S]=l[S],f[1]=f[1]+D[S]*p[S],D[S]=0,y=S+1;y<=h;y=y+1)c[y][S]=0;for(f[1]=-f[1]/2,I[1]=0,te=h,de=te+h,q=de+j,ve=q+j+1,ge=ve+j*(j+1)/2,ce=ge+_,y=1;y<=_;y=y+1){for(_e=0,S=1;S<=h;S=S+1)_e=_e+m[S][y]*m[S][y];D[ce+y]=Math.sqrt(_e)}M=0,R[1]=0,R[2]=0;function ee(){for(R[1]=R[1]+1,E=ge,y=1;y<=_;y=y+1){for(E=E+1,_e=-g[y],S=1;S<=h;S=S+1)_e=_e+m[S][y]*p[S];if(Math.abs(_e)<K&&(_e=0),y>L)D[E]=_e;else if(D[E]=-Math.abs(_e),_e>0){for(S=1;S<=h;S=S+1)m[S][y]=-m[S][y];g[y]=-g[y]}}for(y=1;y<=M;y=y+1)D[ge+x[y]]=0;for(F=0,pe=0,y=1;y<=_;y=y+1)D[ge+y]<pe*D[ce+y]&&(F=y,pe=D[ge+y]/D[ce+y]);return F===0?999:0}function se(){for(y=1;y<=h;y=y+1){for(_e=0,S=1;S<=h;S=S+1)_e=_e+c[S][y]*m[S][F];D[y]=_e}for(O=te,y=1;y<=h;y=y+1)D[O+y]=0;for(S=M+1;S<=h;S=S+1)for(y=1;y<=h;y=y+1)D[O+y]=D[O+y]+c[y][S]*D[S];for(Q=!0,y=M;y>=1;y=y-1){for(_e=D[y],E=ve+y*(y+3)/2,O=E-y,S=y+1;S<=M;S=S+1)_e=_e-D[E]*D[de+S],E=E+S;if(_e=_e/D[O],D[de+y]=_e,x[y]<L||_e<0)break;Q=!1,H=y}if(!Q)for(he=D[q+H]/D[de+H],y=1;y<=M&&!(x[y]<L||D[de+y]<0);y=y+1)pe=D[q+y]/D[de+y],pe<he&&(he=pe,H=y);for(_e=0,y=te+1;y<=te+h;y=y+1)_e=_e+D[y]*D[y];if(Math.abs(_e)<=K){if(Q)return I[1]=1,999;for(y=1;y<=M;y=y+1)D[q+y]=D[q+y]-he*D[de+y];return D[q+M+1]=D[q+M+1]+he,700}else{for(_e=0,y=1;y<=h;y=y+1)_e=_e+D[te+y]*m[y][F];for(N=-D[ge+F]/_e,ie=!0,Q||he<N&&(N=he,ie=!1),y=1;y<=h;y=y+1)p[y]=p[y]+N*D[te+y],Math.abs(p[y])<K&&(p[y]=0);for(f[1]=f[1]+N*_e*(N/2+D[q+M+1]),y=1;y<=M;y=y+1)D[q+y]=D[q+y]-N*D[de+y];if(D[q+M+1]=D[q+M+1]+N,ie){for(M=M+1,x[M]=F,E=ve+(M-1)*M/2+1,y=1;y<=M-1;y=y+1)D[E]=D[y],E=E+1;if(M===h)D[E]=D[h];else{for(y=h;y>=M+1&&!(D[y]===0||(w=Math.max(Math.abs(D[y-1]),Math.abs(D[y])),G=Math.min(Math.abs(D[y-1]),Math.abs(D[y])),D[y-1]>=0?pe=Math.abs(w*Math.sqrt(1+G*G/(w*w))):pe=-Math.abs(w*Math.sqrt(1+G*G/(w*w))),w=D[y-1]/pe,G=D[y]/pe,w===1));y=y-1)if(w===0)for(D[y-1]=G*pe,S=1;S<=h;S=S+1)pe=c[S][y-1],c[S][y-1]=c[S][y],c[S][y]=pe;else for(D[y-1]=pe,ae=G/(1+w),S=1;S<=h;S=S+1)pe=w*c[S][y-1]+G*c[S][y],c[S][y]=ae*(c[S][y-1]+pe)-c[S][y],c[S][y-1]=pe;D[E]=D[M]}}else{for(_e=-g[F],S=1;S<=h;S=S+1)_e=_e+p[S]*m[S][F];if(F>L)D[ge+F]=_e;else if(D[ge+F]=-Math.abs(_e),_e>0){for(S=1;S<=h;S=S+1)m[S][F]=-m[S][F];g[F]=-g[F]}return 700}}return 0}function X(){if(E=ve+H*(H+1)/2+1,O=E+H,D[O]===0||(w=Math.max(Math.abs(D[O-1]),Math.abs(D[O])),G=Math.min(Math.abs(D[O-1]),Math.abs(D[O])),D[O-1]>=0?pe=Math.abs(w*Math.sqrt(1+G*G/(w*w))):pe=-Math.abs(w*Math.sqrt(1+G*G/(w*w))),w=D[O-1]/pe,G=D[O]/pe,w===1))return 798;if(w===0){for(y=H+1;y<=M;y=y+1)pe=D[O-1],D[O-1]=D[O],D[O]=pe,O=O+y;for(y=1;y<=h;y=y+1)pe=c[y][H],c[y][H]=c[y][H+1],c[y][H+1]=pe}else{for(ae=G/(1+w),y=H+1;y<=M;y=y+1)pe=w*D[O-1]+G*D[O],D[O]=ae*(D[O-1]+pe)-D[O],D[O-1]=pe,O=O+y;for(y=1;y<=h;y=y+1)pe=w*c[y][H]+G*c[y][H+1],c[y][H+1]=ae*(c[y][H]+pe)-c[y][H+1],c[y][H]=pe}return 0}function z(){for(O=E-H,y=1;y<=H;y=y+1)D[O]=D[E],E=E+1,O=O+1;return D[q+H]=D[q+H+1],x[H]=x[H+1],H=H+1,H<M?797:0}function d(){return D[q+M]=D[q+M+1],D[q+M+1]=0,x[M]=0,M=M-1,R[2]=R[2]+1,0}for(Y=0;;){if(Y=ee(),Y===999)return;for(;Y=se(),Y!==0;){if(Y===999)return;if(Y===700)if(H===M)d();else{for(;X(),Y=z(),Y===797;);d()}}}}function o(c,l,u,h,p,f){c=e(c),l=e(l),u=e(u);var m,g,v,_,L,x=[],M=[],R=[],D=[],I=[],y;if(p=p||0,f=f?e(f):[void 0,0],h=h?e(h):[],g=c.length-1,v=u[1].length-1,!h)for(m=1;m<=v;m=m+1)h[m]=0;for(m=1;m<=v;m=m+1)M[m]=0;for(_=0,L=Math.min(g,v),m=1;m<=g;m=m+1)R[m]=0;for(x[1]=0,m=1;m<=2*g+L*(L+5)/2+2*v+1;m=m+1)D[m]=0;for(m=1;m<=2;m=m+1)I[m]=0;return a(c,l,g,g,R,x,u,h,g,v,p,M,_,I,D,f),y="",f[1]===1&&(y="constraints are inconsistent, no solution!"),f[1]===2&&(y="matrix D in quadratic function is not positive definite!"),{solution:t(R),value:t(x),unconstrained_solution:t(l),iterations:t(I),iact:t(M),message:y}}r.solveQP=o}(numeric),numeric.svd=function r(e){var t,n=numeric.epsilon,i=1e-64/n,s=50,a=0,o=0,c=0,l=0,u=0,h=numeric.clone(e),p=h.length,f=h[0].length;if(p<f)throw"Need more rows than columns";var m=new Array(f),g=new Array(f);for(o=0;o<f;o++)m[o]=g[o]=0;var v=numeric.rep([f,f],0);function _($,H){return $=Math.abs($),H=Math.abs(H),$>H?$*Math.sqrt(1+H*H/$/$):H==0?$:H*Math.sqrt(1+$*$/H/H)}var L=0,x=0,M=0,R=0,D=0,I=0,y=0;for(o=0;o<f;o++){for(m[o]=x,y=0,u=o+1,c=o;c<p;c++)y+=h[c][o]*h[c][o];if(y<=i)x=0;else for(L=h[o][o],x=Math.sqrt(y),L>=0&&(x=-x),M=L*x-y,h[o][o]=L-x,c=u;c<f;c++){for(y=0,l=o;l<p;l++)y+=h[l][o]*h[l][c];for(L=y/M,l=o;l<p;l++)h[l][c]+=L*h[l][o]}for(g[o]=x,y=0,c=u;c<f;c++)y=y+h[o][c]*h[o][c];if(y<=i)x=0;else{for(L=h[o][o+1],x=Math.sqrt(y),L>=0&&(x=-x),M=L*x-y,h[o][o+1]=L-x,c=u;c<f;c++)m[c]=h[o][c]/M;for(c=u;c<p;c++){for(y=0,l=u;l<f;l++)y+=h[c][l]*h[o][l];for(l=u;l<f;l++)h[c][l]+=y*m[l]}}D=Math.abs(g[o])+Math.abs(m[o]),D>R&&(R=D)}for(o=f-1;o!=-1;o+=-1){if(x!=0){for(M=x*h[o][o+1],c=u;c<f;c++)v[c][o]=h[o][c]/M;for(c=u;c<f;c++){for(y=0,l=u;l<f;l++)y+=h[o][l]*v[l][c];for(l=u;l<f;l++)v[l][c]+=y*v[l][o]}}for(c=u;c<f;c++)v[o][c]=0,v[c][o]=0;v[o][o]=1,x=m[o],u=o}for(o=f-1;o!=-1;o+=-1){for(u=o+1,x=g[o],c=u;c<f;c++)h[o][c]=0;if(x!=0){for(M=h[o][o]*x,c=u;c<f;c++){for(y=0,l=u;l<p;l++)y+=h[l][o]*h[l][c];for(L=y/M,l=o;l<p;l++)h[l][c]+=L*h[l][o]}for(c=o;c<p;c++)h[c][o]=h[c][o]/x}else for(c=o;c<p;c++)h[c][o]=0;h[o][o]+=1}for(n=n*R,l=f-1;l!=-1;l+=-1)for(var S=0;S<s;S++){var E=!1;for(u=l;u!=-1;u+=-1){if(Math.abs(m[u])<=n){E=!0;break}if(Math.abs(g[u-1])<=n)break}if(!E){a=0,y=1;var O=u-1;for(o=u;o<l+1&&(L=y*m[o],m[o]=a*m[o],!(Math.abs(L)<=n));o++)for(x=g[o],M=_(L,x),g[o]=M,a=x/M,y=-L/M,c=0;c<p;c++)D=h[c][O],I=h[c][o],h[c][O]=D*a+I*y,h[c][o]=-D*y+I*a}if(I=g[l],u==l){if(I<0)for(g[l]=-I,c=0;c<f;c++)v[c][l]=-v[c][l];break}if(S>=s-1)throw"Error: no convergence.";for(R=g[u],D=g[l-1],x=m[l-1],M=m[l],L=((D-I)*(D+I)+(x-M)*(x+M))/(2*M*D),x=_(L,1),L<0?L=((R-I)*(R+I)+M*(D/(L-x)-M))/R:L=((R-I)*(R+I)+M*(D/(L+x)-M))/R,a=1,y=1,o=u+1;o<l+1;o++){for(x=m[o],D=g[o],M=y*x,x=a*x,I=_(L,M),m[o-1]=I,a=L/I,y=M/I,L=R*a+x*y,x=-R*y+x*a,M=D*y,D=D*a,c=0;c<f;c++)R=v[c][o-1],I=v[c][o],v[c][o-1]=R*a+I*y,v[c][o]=-R*y+I*a;for(I=_(L,M),g[o-1]=I,a=L/I,y=M/I,L=a*x+y*D,R=-y*x+a*D,c=0;c<p;c++)D=h[c][o-1],I=h[c][o],h[c][o-1]=D*a+I*y,h[c][o]=-D*y+I*a}m[u]=0,m[l]=L,g[l]=R}for(o=0;o<g.length;o++)g[o]<n&&(g[o]=0);for(o=0;o<f;o++)for(c=o-1;c>=0;c--)if(g[c]<g[o]){for(a=g[c],g[c]=g[o],g[o]=a,l=0;l<h.length;l++)t=h[l][o],h[l][o]=h[l][c],h[l][c]=t;for(l=0;l<v.length;l++)t=v[l][o],v[l][o]=v[l][c],v[l][c]=t;o=c}return{U:h,S:g,V:v}}})(numeric1_2_6);var numeric$3=numeric1_2_6,forwardSHT=function(r,e,t,n){var i=e.length,s=(r+1)*(r+1),a,o=[,];s>i&&console.log("The SHT degree is too high for the number of data points"),t==0&&(e=convertCart2Sph(e));for(var c=0;c<e.length;c++)o[c]=e[c][2];Y_N=computeRealSH(r,e),n==0?a=numeric$3.mul(1/i,Y_N):a=pinv_direct(numeric$3.transpose(Y_N));var l=numeric$3.dotMV(a,o);return l},inverseSHT=function(r,e){for(var t=e,n=Math.sqrt(r.length)-1,i=computeRealSH(n,e),s=numeric$3.dotVM(r,i),a=0;a<e.length;a++)t[a][2]=s[a];return t},print2Darray=function(r){for(var e=0;e<r.length;e++)console.log(r[e])},convertCart2Sph=function(r,e){for(var t,n,i,s=new Array(r.length),a=0;a<r.length;a++)t=Math.atan2(r[a][1],r[a][0]),n=Math.atan2(r[a][2],Math.sqrt(r[a][0]*r[a][0]+r[a][1]*r[a][1])),e==1?s[a]=[t,n]:(i=Math.sqrt(r[a][0]*r[a][0]+r[a][1]*r[a][1]+r[a][2]*r[a][2]),s[a]=[t,n,i]);return s},convertSph2Cart=function(r){for(var e,t,n,i=new Array(r.length),s=0;s<r.length;s++)e=Math.cos(r[s][0])*Math.cos(r[s][1]),t=Math.sin(r[s][0])*Math.cos(r[s][1]),n=Math.sin(r[s][1]),r[0].length==2?i[s]=[e,t,n]:r[0].length==3&&(i[s]=[r[s][2]*e,r[s][2]*t,r[s][2]*n]);return i},computeRealSH=function(r,e){for(var t=new Array(e.length),n=new Array(e.length),i=0;i<e.length;i++)t[i]=e[i][0],n[i]=e[i][1];var s=new Array(2*r+1);t.length;for(var a=(r+1)*(r+1),o=0,c=0,l,u=numeric$3.sin(n),h=0,p=new Array(a),f,m,g,v,i=0;i<2*r+1;i++)s[i]=factorial(i);for(var _=0;_<r+1;_++){if(_==0){var L=new Array(t.length);L.fill(1),p[_]=L,h=1}else{l=recurseLegendrePoly(_,u,o,c),f=Math.sqrt(2*_+1);for(var x=0;x<_+1;x++)x==0?p[h+_]=numeric$3.mul(f,l[x]):(m=f*Math.sqrt(2*s[_-x]/s[_+x]),g=numeric$3.cos(numeric$3.mul(x,t)),v=numeric$3.sin(numeric$3.mul(x,t)),p[h+_-x]=numeric$3.mul(m,numeric$3.mul(l[x],v)),p[h+_+x]=numeric$3.mul(m,numeric$3.mul(l[x],g)));h=h+2*_+1}c=o,o=l}return p},factorial=function(r){return r===0?1:r*factorial(r-1)},recurseLegendrePoly=function(r,e,t,n){var i=new Array(r+1);switch(r){case 1:var u=numeric$3.mul(e,e),s=e,a=numeric$3.sqrt(numeric$3.sub(1,u));i[0]=s,i[1]=a;break;case 2:var u=numeric$3.mul(e,e),o=numeric$3.mul(3,u);o=numeric$3.sub(o,1),o=numeric$3.div(o,2);var c=numeric$3.sub(1,u);c=numeric$3.sqrt(c),c=numeric$3.mul(3,c),c=numeric$3.mul(c,e);var l=numeric$3.sub(1,u);l=numeric$3.mul(3,l),i[0]=o,i[1]=c,i[2]=l;break;default:var u=numeric$3.mul(e,e),h=numeric$3.sub(1,u),p=2*r-1,f=1;if(p%2==0)for(var m=1;m<p/2+1;m++)f=f*2*m;else for(var m=1;m<(p+1)/2+1;m++)f=f*(2*m-1);i[r]=numeric$3.mul(f,numeric$3.pow(h,r/2)),i[r-1]=numeric$3.mul(2*r-1,numeric$3.mul(e,t[r-1]));for(var g=0;g<r-1;g++){var v=numeric$3.mul(2*r-1,numeric$3.mul(e,t[g])),_=numeric$3.mul(r+g-1,n[g]);i[g]=numeric$3.div(numeric$3.sub(v,_),r-g)}}return i},pinv_svd=function(r){for(var e=numeric$3.svd(r),t=e.S[0],n=e.U,i=e.S,s=e.V,a=r.length,o=r[0].length,c=Math.max(a,o)*numeric$3.epsilon*t,l=i.length,u=new Array(l),h=l-1;h!==-1;h--)i[h]>c?u[h]=1/i[h]:u[h]=0;return numeric$3.dot(numeric$3.dot(s,numeric$3.diag(u)),numeric$3.transpose(n))},pinv_direct=function(r){var e=numeric$3.transpose(r);return numeric$3.dot(numeric$3.inv(numeric$3.dot(e,r)),e)},getSHrotMtx=function(r,e){var t=(e+1)*(e+1),n=numeric$3.rep([t,t],0);n[0][0]=1;var i=numeric$3.rep([3,3],0);i[0][0]=r[1][1],i[0][1]=r[1][2],i[0][2]=r[1][0],i[1][0]=r[2][1],i[1][1]=r[2][2],i[1][2]=r[2][0],i[2][0]=r[0][1],i[2][1]=r[0][2],i[2][2]=r[0][0],n=numeric$3.setBlock(n,[1,1],[3,3],i);for(var s=i,a=3,o=2;o<e+1;o++){for(var c=numeric$3.rep([2*o+1,2*o+1],0),l=-o;l<o+1;l++)for(var u=-o;u<o+1;u++){var h,p,f,m,g;l==0?h=1:h=0,Math.abs(u)==o?p=2*o*(2*o-1):p=o*o-u*u,f=Math.sqrt((o*o-l*l)/p),m=Math.sqrt((1+h)*(o+Math.abs(l)-1)*(o+Math.abs(l))/p)*(1-2*h)*.5,g=Math.sqrt((o-Math.abs(l)-1)*(o-Math.abs(l))/p)*(1-h)*-.5,f!=0&&(f=f*U(o,l,u,i,s)),m!=0&&(m=m*V(o,l,u,i,s)),g!=0&&(g=g*W(o,l,u,i,s)),c[l+o][u+o]=f+m+g}n=numeric$3.setBlock(n,[a+1,a+1],[a+2*o+1,a+2*o+1],c),s=c,a=a+2*o+1}return n};function U(r,e,t,n,i){return P(0,r,e,t,n,i)}function V(r,e,t,n,i){var s,a,o,c;return e==0?(s=P(1,r,1,t,n,i),a=P(-1,r,-1,t,n,i),o=s+a):e>0?(e==1?c=1:c=0,s=P(1,r,e-1,t,n,i),a=P(-1,r,-e+1,t,n,i),o=s*Math.sqrt(1+c)-a*(1-c)):(e==-1?c=1:c=0,s=P(1,r,e+1,t,n,i),a=P(-1,r,-e-1,t,n,i),o=s*(1-c)+a*Math.sqrt(1+c)),o}function W(r,e,t,n,i){var s,a,o;return e==0?console.error("should not be called"):e>0?(s=P(1,r,e+1,t,n,i),a=P(-1,r,-e-1,t,n,i),o=s+a):(s=P(1,r,e-1,t,n,i),a=P(-1,r,-e+1,t,n,i),o=s-a),o}function P(r,e,t,n,i,s){var a,o,c,l;return a=i[r+1][2],o=i[r+1][0],c=i[r+1][1],n==-e?l=a*s[t+e-1][0]+o*s[t+e-1][2*e-2]:n==e?l=a*s[t+e-1][2*e-2]-o*s[t+e-1][0]:l=c*s[t+e-1][n+e-1],l}var yawPitchRoll2Rzyx=function(r,e,t){var n,i,s;t==0?n=[[1,0,0],[0,1,0],[0,0,1]]:n=[[1,0,0],[0,Math.cos(t),Math.sin(t)],[0,-Math.sin(t),Math.cos(t)]],e==0?i=[[1,0,0],[0,1,0],[0,0,1]]:i=[[Math.cos(e),0,-Math.sin(e)],[0,1,0],[Math.sin(e),0,Math.cos(e)]],r==0?s=[[1,0,0],[0,1,0],[0,0,1]]:s=[[Math.cos(r),Math.sin(r),0],[-Math.sin(r),Math.cos(r),0],[0,0,1]];var a=numeric$3.dotMMsmall(i,s);return a=numeric$3.dotMMsmall(n,a),a};src.forwardSHT=forwardSHT;src.inverseSHT=inverseSHT;src.print2Darray=print2Darray;src.convertCart2Sph=convertCart2Sph;src.convertSph2Cart=convertSph2Cart;src.computeRealSH=computeRealSH;src.factorial=factorial;src.recurseLegendrePoly=recurseLegendrePoly;src.pinv_svd=pinv_svd;src.pinv_direct=pinv_direct;src.getSHrotMtx=getSHrotMtx;src.yawPitchRoll2Rzyx=yawPitchRoll2Rzyx;Object.defineProperty(ambiMonoEncoder,"__esModule",{value:!0});var _classCallCheck2$m=classCallCheck,_classCallCheck3$m=_interopRequireDefault$m(_classCallCheck2$m),_createClass2$l=createClass,_createClass3$l=_interopRequireDefault$m(_createClass2$l),_sphericalHarmonicTransform$4=src,jshlib$5=_interopRequireWildcard$5(_sphericalHarmonicTransform$4);function _interopRequireWildcard$5(r){if(r&&r.__esModule)return r;var e={};if(r!=null)for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t]);return e.default=r,e}function _interopRequireDefault$m(r){return r&&r.__esModule?r:{default:r}}var monoEncoder=function(){function r(e,t){(0,_classCallCheck3$m.default)(this,r),this.initialized=!1,this.ctx=e,this.order=t,this.nCh=(t+1)*(t+1),this.azim=0,this.elev=0,this.gains=new Array(this.nCh),this.gainNodes=new Array(this.nCh),this.in=this.ctx.createGain(),this.in.channelCountMode="explicit",this.in.channelCount=1,this.out=this.ctx.createChannelMerger(this.nCh);for(var n=0;n<this.nCh;n++)this.gainNodes[n]=this.ctx.createGain(),this.gainNodes[n].channelCountMode="explicit",this.gainNodes[n].channelCount=1;this.updateGains();for(var n=0;n<this.nCh;n++)this.in.connect(this.gainNodes[n]),this.gainNodes[n].connect(this.out,0,n);this.initialized=!0}return(0,_createClass3$l.default)(r,[{key:"updateGains",value:function(){for(var t=this.order,n=jshlib$5.computeRealSH(t,[[this.azim*Math.PI/180,this.elev*Math.PI/180]]),i=0;i<this.nCh;i++)this.gains[i]=n[i][0],this.gainNodes[i].gain.value=this.gains[i]}}]),r}();ambiMonoEncoder.default=monoEncoder;var ambiMonoEncoder2D={},utils$6={},ch1d=convexHull1d$1;function convexHull1d$1(r){for(var e=0,t=0,n=1;n<r.length;++n)r[n][0]<r[e][0]&&(e=n),r[n][0]>r[t][0]&&(t=n);return e<t?[[e],[t]]:e>t?[[t],[e]]:[[e]]}var orientation={exports:{}},twoProduct_1=twoProduct$1,SPLITTER=+(Math.pow(2,27)+1);function twoProduct$1(r,e,t){var n=r*e,i=SPLITTER*r,s=i-r,a=i-s,o=r-a,c=SPLITTER*e,l=c-e,u=c-l,h=e-u,p=n-a*u,f=p-o*u,m=f-a*h,g=o*h-m;return t?(t[0]=g,t[1]=n,t):[g,n]}var robustSum=linearExpansionSum;function scalarScalar$1(r,e){var t=r+e,n=t-r,i=t-n,s=e-n,a=r-i,o=a+s;return o?[o,t]:[t]}function linearExpansionSum(r,e){var t=r.length|0,n=e.length|0;if(t===1&&n===1)return scalarScalar$1(r[0],e[0]);var i=t+n,s=new Array(i),a=0,o=0,c=0,l=Math.abs,u=r[o],h=l(u),p=e[c],f=l(p),m,g;h<f?(g=u,o+=1,o<t&&(u=r[o],h=l(u))):(g=p,c+=1,c<n&&(p=e[c],f=l(p))),o<t&&h<f||c>=n?(m=u,o+=1,o<t&&(u=r[o],h=l(u))):(m=p,c+=1,c<n&&(p=e[c],f=l(p)));for(var v=m+g,_=v-m,L=g-_,x=L,M=v,R,D,I,y,S;o<t&&c<n;)h<f?(m=u,o+=1,o<t&&(u=r[o],h=l(u))):(m=p,c+=1,c<n&&(p=e[c],f=l(p))),g=x,v=m+g,_=v-m,L=g-_,L&&(s[a++]=L),R=M+v,D=R-M,I=R-D,y=v-D,S=M-I,x=S+y,M=R;for(;o<t;)m=u,g=x,v=m+g,_=v-m,L=g-_,L&&(s[a++]=L),R=M+v,D=R-M,I=R-D,y=v-D,S=M-I,x=S+y,M=R,o+=1,o<t&&(u=r[o]);for(;c<n;)m=p,g=x,v=m+g,_=v-m,L=g-_,L&&(s[a++]=L),R=M+v,D=R-M,I=R-D,y=v-D,S=M-I,x=S+y,M=R,c+=1,c<n&&(p=e[c]);return x&&(s[a++]=x),M&&(s[a++]=M),a||(s[a++]=0),s.length=a,s}var twoSum$1=fastTwoSum;function fastTwoSum(r,e,t){var n=r+e,i=n-r,s=n-i,a=e-i,o=r-s;return t?(t[0]=o+a,t[1]=n,t):[o+a,n]}var twoProduct=twoProduct_1,twoSum=twoSum$1,robustScale=scaleLinearExpansion;function scaleLinearExpansion(r,e){var t=r.length;if(t===1){var n=twoProduct(r[0],e);return n[0]?n:[n[1]]}var i=new Array(2*t),s=[.1,.1],a=[.1,.1],o=0;twoProduct(r[0],e,s),s[0]&&(i[o++]=s[0]);for(var c=1;c<t;++c){twoProduct(r[c],e,a);var l=s[1];twoSum(l,a[0],s),s[0]&&(i[o++]=s[0]);var u=a[1],h=s[1],p=u+h,f=p-u,m=h-f;s[1]=p,m&&(i[o++]=m)}return s[1]&&(i[o++]=s[1]),o===0&&(i[o++]=0),i.length=o,i}var robustDiff=robustSubtract;function scalarScalar(r,e){var t=r+e,n=t-r,i=t-n,s=e-n,a=r-i,o=a+s;return o?[o,t]:[t]}function robustSubtract(r,e){var t=r.length|0,n=e.length|0;if(t===1&&n===1)return scalarScalar(r[0],-e[0]);var i=t+n,s=new Array(i),a=0,o=0,c=0,l=Math.abs,u=r[o],h=l(u),p=-e[c],f=l(p),m,g;h<f?(g=u,o+=1,o<t&&(u=r[o],h=l(u))):(g=p,c+=1,c<n&&(p=-e[c],f=l(p))),o<t&&h<f||c>=n?(m=u,o+=1,o<t&&(u=r[o],h=l(u))):(m=p,c+=1,c<n&&(p=-e[c],f=l(p)));for(var v=m+g,_=v-m,L=g-_,x=L,M=v,R,D,I,y,S;o<t&&c<n;)h<f?(m=u,o+=1,o<t&&(u=r[o],h=l(u))):(m=p,c+=1,c<n&&(p=-e[c],f=l(p))),g=x,v=m+g,_=v-m,L=g-_,L&&(s[a++]=L),R=M+v,D=R-M,I=R-D,y=v-D,S=M-I,x=S+y,M=R;for(;o<t;)m=u,g=x,v=m+g,_=v-m,L=g-_,L&&(s[a++]=L),R=M+v,D=R-M,I=R-D,y=v-D,S=M-I,x=S+y,M=R,o+=1,o<t&&(u=r[o]);for(;c<n;)m=p,g=x,v=m+g,_=v-m,L=g-_,L&&(s[a++]=L),R=M+v,D=R-M,I=R-D,y=v-D,S=M-I,x=S+y,M=R,c+=1,c<n&&(p=-e[c]);return x&&(s[a++]=x),M&&(s[a++]=M),a||(s[a++]=0),s.length=a,s}(function(r){var e=twoProduct_1,t=robustSum,n=robustScale,i=robustDiff,s=5,a=11102230246251565e-32,o=(3+16*a)*a,c=(7+56*a)*a;function l(x,M,R,D){return function(y,S,E){var O=x(x(M(S[1],E[0]),M(-E[1],S[0])),x(M(y[1],S[0]),M(-S[1],y[0]))),$=x(M(y[1],E[0]),M(-E[1],y[0])),H=D(O,$);return H[H.length-1]}}function u(x,M,R,D){return function(y,S,E,O){var $=x(x(R(x(M(E[1],O[0]),M(-O[1],E[0])),S[2]),x(R(x(M(S[1],O[0]),M(-O[1],S[0])),-E[2]),R(x(M(S[1],E[0]),M(-E[1],S[0])),O[2]))),x(R(x(M(S[1],O[0]),M(-O[1],S[0])),y[2]),x(R(x(M(y[1],O[0]),M(-O[1],y[0])),-S[2]),R(x(M(y[1],S[0]),M(-S[1],y[0])),O[2])))),H=x(x(R(x(M(E[1],O[0]),M(-O[1],E[0])),y[2]),x(R(x(M(y[1],O[0]),M(-O[1],y[0])),-E[2]),R(x(M(y[1],E[0]),M(-E[1],y[0])),O[2]))),x(R(x(M(S[1],E[0]),M(-E[1],S[0])),y[2]),x(R(x(M(y[1],E[0]),M(-E[1],y[0])),-S[2]),R(x(M(y[1],S[0]),M(-S[1],y[0])),E[2])))),te=D($,H);return te[te.length-1]}}function h(x,M,R,D){return function(y,S,E,O,$){var H=x(x(x(R(x(R(x(M(O[1],$[0]),M(-$[1],O[0])),E[2]),x(R(x(M(E[1],$[0]),M(-$[1],E[0])),-O[2]),R(x(M(E[1],O[0]),M(-O[1],E[0])),$[2]))),S[3]),x(R(x(R(x(M(O[1],$[0]),M(-$[1],O[0])),S[2]),x(R(x(M(S[1],$[0]),M(-$[1],S[0])),-O[2]),R(x(M(S[1],O[0]),M(-O[1],S[0])),$[2]))),-E[3]),R(x(R(x(M(E[1],$[0]),M(-$[1],E[0])),S[2]),x(R(x(M(S[1],$[0]),M(-$[1],S[0])),-E[2]),R(x(M(S[1],E[0]),M(-E[1],S[0])),$[2]))),O[3]))),x(R(x(R(x(M(E[1],O[0]),M(-O[1],E[0])),S[2]),x(R(x(M(S[1],O[0]),M(-O[1],S[0])),-E[2]),R(x(M(S[1],E[0]),M(-E[1],S[0])),O[2]))),-$[3]),x(R(x(R(x(M(O[1],$[0]),M(-$[1],O[0])),S[2]),x(R(x(M(S[1],$[0]),M(-$[1],S[0])),-O[2]),R(x(M(S[1],O[0]),M(-O[1],S[0])),$[2]))),y[3]),R(x(R(x(M(O[1],$[0]),M(-$[1],O[0])),y[2]),x(R(x(M(y[1],$[0]),M(-$[1],y[0])),-O[2]),R(x(M(y[1],O[0]),M(-O[1],y[0])),$[2]))),-S[3])))),x(x(R(x(R(x(M(S[1],$[0]),M(-$[1],S[0])),y[2]),x(R(x(M(y[1],$[0]),M(-$[1],y[0])),-S[2]),R(x(M(y[1],S[0]),M(-S[1],y[0])),$[2]))),O[3]),x(R(x(R(x(M(S[1],O[0]),M(-O[1],S[0])),y[2]),x(R(x(M(y[1],O[0]),M(-O[1],y[0])),-S[2]),R(x(M(y[1],S[0]),M(-S[1],y[0])),O[2]))),-$[3]),R(x(R(x(M(E[1],O[0]),M(-O[1],E[0])),S[2]),x(R(x(M(S[1],O[0]),M(-O[1],S[0])),-E[2]),R(x(M(S[1],E[0]),M(-E[1],S[0])),O[2]))),y[3]))),x(R(x(R(x(M(E[1],O[0]),M(-O[1],E[0])),y[2]),x(R(x(M(y[1],O[0]),M(-O[1],y[0])),-E[2]),R(x(M(y[1],E[0]),M(-E[1],y[0])),O[2]))),-S[3]),x(R(x(R(x(M(S[1],O[0]),M(-O[1],S[0])),y[2]),x(R(x(M(y[1],O[0]),M(-O[1],y[0])),-S[2]),R(x(M(y[1],S[0]),M(-S[1],y[0])),O[2]))),E[3]),R(x(R(x(M(S[1],E[0]),M(-E[1],S[0])),y[2]),x(R(x(M(y[1],E[0]),M(-E[1],y[0])),-S[2]),R(x(M(y[1],S[0]),M(-S[1],y[0])),E[2]))),-O[3]))))),te=x(x(x(R(x(R(x(M(O[1],$[0]),M(-$[1],O[0])),E[2]),x(R(x(M(E[1],$[0]),M(-$[1],E[0])),-O[2]),R(x(M(E[1],O[0]),M(-O[1],E[0])),$[2]))),y[3]),R(x(R(x(M(O[1],$[0]),M(-$[1],O[0])),y[2]),x(R(x(M(y[1],$[0]),M(-$[1],y[0])),-O[2]),R(x(M(y[1],O[0]),M(-O[1],y[0])),$[2]))),-E[3])),x(R(x(R(x(M(E[1],$[0]),M(-$[1],E[0])),y[2]),x(R(x(M(y[1],$[0]),M(-$[1],y[0])),-E[2]),R(x(M(y[1],E[0]),M(-E[1],y[0])),$[2]))),O[3]),R(x(R(x(M(E[1],O[0]),M(-O[1],E[0])),y[2]),x(R(x(M(y[1],O[0]),M(-O[1],y[0])),-E[2]),R(x(M(y[1],E[0]),M(-E[1],y[0])),O[2]))),-$[3]))),x(x(R(x(R(x(M(E[1],$[0]),M(-$[1],E[0])),S[2]),x(R(x(M(S[1],$[0]),M(-$[1],S[0])),-E[2]),R(x(M(S[1],E[0]),M(-E[1],S[0])),$[2]))),y[3]),R(x(R(x(M(E[1],$[0]),M(-$[1],E[0])),y[2]),x(R(x(M(y[1],$[0]),M(-$[1],y[0])),-E[2]),R(x(M(y[1],E[0]),M(-E[1],y[0])),$[2]))),-S[3])),x(R(x(R(x(M(S[1],$[0]),M(-$[1],S[0])),y[2]),x(R(x(M(y[1],$[0]),M(-$[1],y[0])),-S[2]),R(x(M(y[1],S[0]),M(-S[1],y[0])),$[2]))),E[3]),R(x(R(x(M(S[1],E[0]),M(-E[1],S[0])),y[2]),x(R(x(M(y[1],E[0]),M(-E[1],y[0])),-S[2]),R(x(M(y[1],S[0]),M(-S[1],y[0])),E[2]))),-$[3])))),de=D(H,te);return de[de.length-1]}}function p(x){var M=x===3?l:x===4?u:h;return M(t,e,n,i)}var f=p(3),m=p(4),g=[function(){return 0},function(){return 0},function(M,R){return R[0]-M[0]},function(M,R,D){var I=(M[1]-D[1])*(R[0]-D[0]),y=(M[0]-D[0])*(R[1]-D[1]),S=I-y,E;if(I>0){if(y<=0)return S;E=I+y}else if(I<0){if(y>=0)return S;E=-(I+y)}else return S;var O=o*E;return S>=O||S<=-O?S:f(M,R,D)},function(M,R,D,I){var y=M[0]-I[0],S=R[0]-I[0],E=D[0]-I[0],O=M[1]-I[1],$=R[1]-I[1],H=D[1]-I[1],te=M[2]-I[2],de=R[2]-I[2],ve=D[2]-I[2],ge=S*H,q=E*$,F=E*O,j=y*H,ce=y*$,pe=S*O,_e=te*(ge-q)+de*(F-j)+ve*(ce-pe),he=(Math.abs(ge)+Math.abs(q))*Math.abs(te)+(Math.abs(F)+Math.abs(j))*Math.abs(de)+(Math.abs(ce)+Math.abs(pe))*Math.abs(ve),N=c*he;return _e>N||-_e>N?_e:m(M,R,D,I)}];function v(x){var M=g[x.length];return M||(M=g[x.length]=p(x.length)),M.apply(void 0,x)}function _(x,M,R,D,I,y,S){return function(O,$,H,te,de){switch(arguments.length){case 0:case 1:return 0;case 2:return D(O,$);case 3:return I(O,$,H);case 4:return y(O,$,H,te);case 5:return S(O,$,H,te,de)}for(var ve=new Array(arguments.length),ge=0;ge<arguments.length;++ge)ve[ge]=arguments[ge];return x(ve)}}function L(){for(;g.length<=s;)g.push(p(g.length));r.exports=_.apply(void 0,[v].concat(g));for(var x=0;x<=s;++x)r.exports[x]=g[x]}L()})(orientation);var orientationExports=orientation.exports,monotoneConvexHull2d=monotoneConvexHull2D,orient$2=orientationExports[3];function monotoneConvexHull2D(r){var e=r.length;if(e<3){for(var l=new Array(e),t=0;t<e;++t)l[t]=t;return e===2&&r[0][0]===r[1][0]&&r[0][1]===r[1][1]?[0]:l}for(var n=new Array(e),t=0;t<e;++t)n[t]=t;n.sort(function(f,m){var g=r[f][0]-r[m][0];return g||r[f][1]-r[m][1]});for(var i=[n[0],n[1]],s=[n[0],n[1]],t=2;t<e;++t){for(var a=n[t],o=r[a],c=i.length;c>1&&orient$2(r[i[c-2]],r[i[c-1]],o)<=0;)c-=1,i.pop();for(i.push(a),c=s.length;c>1&&orient$2(r[s[c-2]],r[s[c-1]],o)>=0;)c-=1,s.pop();s.push(a)}for(var l=new Array(s.length+i.length-2),u=0,t=0,h=i.length;t<h;++t)l[u++]=i[t];for(var p=s.length-2;p>0;--p)l[u++]=s[p];return l}var ch2d=convexHull2D,monotoneHull=monotoneConvexHull2d;function convexHull2D(r){var e=monotoneHull(r),t=e.length;if(t<=2)return[];for(var n=new Array(t),i=e[t-1],s=0;s<t;++s){var a=e[s];n[s]=[i,a],i=a}return n}var topology={},twiddle={},INT_BITS=32;twiddle.INT_BITS=INT_BITS;twiddle.INT_MAX=2147483647;twiddle.INT_MIN=-1<<INT_BITS-1;twiddle.sign=function(r){return(r>0)-(r<0)};twiddle.abs=function(r){var e=r>>INT_BITS-1;return(r^e)-e};twiddle.min=function(r,e){return e^(r^e)&-(r<e)};twiddle.max=function(r,e){return r^(r^e)&-(r<e)};twiddle.isPow2=function(r){return!(r&r-1)&&!!r};twiddle.log2=function(r){var e,t;return e=(r>65535)<<4,r>>>=e,t=(r>255)<<3,r>>>=t,e|=t,t=(r>15)<<2,r>>>=t,e|=t,t=(r>3)<<1,r>>>=t,e|=t,e|r>>1};twiddle.log10=function(r){return r>=1e9?9:r>=1e8?8:r>=1e7?7:r>=1e6?6:r>=1e5?5:r>=1e4?4:r>=1e3?3:r>=100?2:r>=10?1:0};twiddle.popCount=function(r){return r=r-(r>>>1&1431655765),r=(r&858993459)+(r>>>2&858993459),(r+(r>>>4)&252645135)*16843009>>>24};function countTrailingZeros(r){var e=32;return r&=-r,r&&e--,r&65535&&(e-=16),r&16711935&&(e-=8),r&252645135&&(e-=4),r&858993459&&(e-=2),r&1431655765&&(e-=1),e}twiddle.countTrailingZeros=countTrailingZeros;twiddle.nextPow2=function(r){return r+=r===0,--r,r|=r>>>1,r|=r>>>2,r|=r>>>4,r|=r>>>8,r|=r>>>16,r+1};twiddle.prevPow2=function(r){return r|=r>>>1,r|=r>>>2,r|=r>>>4,r|=r>>>8,r|=r>>>16,r-(r>>>1)};twiddle.parity=function(r){return r^=r>>>16,r^=r>>>8,r^=r>>>4,r&=15,27030>>>r&1};var REVERSE_TABLE=new Array(256);(function(r){for(var e=0;e<256;++e){var t=e,n=e,i=7;for(t>>>=1;t;t>>>=1)n<<=1,n|=t&1,--i;r[e]=n<<i&255}})(REVERSE_TABLE);twiddle.reverse=function(r){return REVERSE_TABLE[r&255]<<24|REVERSE_TABLE[r>>>8&255]<<16|REVERSE_TABLE[r>>>16&255]<<8|REVERSE_TABLE[r>>>24&255]};twiddle.interleave2=function(r,e){return r&=65535,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e&=65535,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1};twiddle.deinterleave2=function(r,e){return r=r>>>e&1431655765,r=(r|r>>>1)&858993459,r=(r|r>>>2)&252645135,r=(r|r>>>4)&16711935,r=(r|r>>>16)&65535,r<<16>>16};twiddle.interleave3=function(r,e,t){return r&=1023,r=(r|r<<16)&4278190335,r=(r|r<<8)&251719695,r=(r|r<<4)&3272356035,r=(r|r<<2)&1227133513,e&=1023,e=(e|e<<16)&4278190335,e=(e|e<<8)&251719695,e=(e|e<<4)&3272356035,e=(e|e<<2)&1227133513,r|=e<<1,t&=1023,t=(t|t<<16)&4278190335,t=(t|t<<8)&251719695,t=(t|t<<4)&3272356035,t=(t|t<<2)&1227133513,r|t<<2};twiddle.deinterleave3=function(r,e){return r=r>>>e&1227133513,r=(r|r>>>2)&3272356035,r=(r|r>>>4)&251719695,r=(r|r>>>8)&4278190335,r=(r|r>>>16)&1023,r<<22>>22};twiddle.nextCombination=function(r){var e=r|r-1;return e+1|(~e&-~e)-1>>>countTrailingZeros(r)+1};var unionFind=UnionFind$1;function UnionFind$1(r){this.roots=new Array(r),this.ranks=new Array(r);for(var e=0;e<r;++e)this.roots[e]=e,this.ranks[e]=0}var proto$1=UnionFind$1.prototype;Object.defineProperty(proto$1,"length",{get:function(){return this.roots.length}});proto$1.makeSet=function(){var r=this.roots.length;return this.roots.push(r),this.ranks.push(0),r};proto$1.find=function(r){for(var e=r,t=this.roots;t[r]!==r;)r=t[r];for(;t[e]!==r;){var n=t[e];t[e]=r,e=n}return r};proto$1.link=function(r,e){var t=this.find(r),n=this.find(e);if(t!==n){var i=this.ranks,s=this.roots,a=i[t],o=i[n];a<o?s[t]=n:o<a?s[n]=t:(s[n]=t,++i[t])}};var bits=twiddle,UnionFind=unionFind;function dimension(r){for(var e=0,t=Math.max,n=0,i=r.length;n<i;++n)e=t(e,r[n].length);return e-1}topology.dimension=dimension;function countVertices(r){for(var e=-1,t=Math.max,n=0,i=r.length;n<i;++n)for(var s=r[n],a=0,o=s.length;a<o;++a)e=t(e,s[a]);return e+1}topology.countVertices=countVertices;function cloneCells(r){for(var e=new Array(r.length),t=0,n=r.length;t<n;++t)e[t]=r[t].slice(0);return e}topology.cloneCells=cloneCells;function compareCells(r,e){var t=r.length,n=r.length-e.length,i=Math.min;if(n)return n;switch(t){case 0:return 0;case 1:return r[0]-e[0];case 2:var l=r[0]+r[1]-e[0]-e[1];return l||i(r[0],r[1])-i(e[0],e[1]);case 3:var s=r[0]+r[1],a=e[0]+e[1];if(l=s+r[2]-(a+e[2]),l)return l;var o=i(r[0],r[1]),c=i(e[0],e[1]),l=i(o,r[2])-i(c,e[2]);return l||i(o+r[2],s)-i(c+e[2],a);default:var u=r.slice(0);u.sort();var h=e.slice(0);h.sort();for(var p=0;p<t;++p)if(n=u[p]-h[p],n)return n;return 0}}topology.compareCells=compareCells;function compareZipped(r,e){return compareCells(r[0],e[0])}function normalize(r,e){if(e){for(var t=r.length,n=new Array(t),i=0;i<t;++i)n[i]=[r[i],e[i]];n.sort(compareZipped);for(var i=0;i<t;++i)r[i]=n[i][0],e[i]=n[i][1];return r}else return r.sort(compareCells),r}topology.normalize=normalize;function unique(r){if(r.length===0)return[];for(var e=1,t=r.length,n=1;n<t;++n){var i=r[n];if(compareCells(i,r[n-1])){if(n===e){e++;continue}r[e++]=i}}return r.length=e,r}topology.unique=unique;function findCell(r,e){for(var t=0,n=r.length-1,i=-1;t<=n;){var s=t+n>>1,a=compareCells(r[s],e);a<=0?(a===0&&(i=s),t=s+1):a>0&&(n=s-1)}return i}topology.findCell=findCell;function incidence(r,e){for(var t=new Array(r.length),n=0,i=t.length;n<i;++n)t[n]=[];for(var s=[],n=0,a=e.length;n<a;++n)for(var o=e[n],c=o.length,l=1,u=1<<c;l<u;++l){s.length=bits.popCount(l);for(var h=0,p=0;p<c;++p)l&1<<p&&(s[h++]=o[p]);var f=findCell(r,s);if(!(f<0))for(;t[f++].push(n),!(f>=r.length||compareCells(r[f],s)!==0););}return t}topology.incidence=incidence;function dual(r,e){if(!e)return incidence(unique(skeleton(r,0)),r);for(var t=new Array(e),n=0;n<e;++n)t[n]=[];for(var n=0,i=r.length;n<i;++n)for(var s=r[n],a=0,o=s.length;a<o;++a)t[s[a]].push(n);return t}topology.dual=dual;function explode(r){for(var e=[],t=0,n=r.length;t<n;++t)for(var i=r[t],s=i.length|0,a=1,o=1<<s;a<o;++a){for(var c=[],l=0;l<s;++l)a>>>l&1&&c.push(i[l]);e.push(c)}return normalize(e)}topology.explode=explode;function skeleton(r,e){if(e<0)return[];for(var t=[],n=(1<<e+1)-1,i=0;i<r.length;++i)for(var s=r[i],a=n;a<1<<s.length;a=bits.nextCombination(a)){for(var o=new Array(e+1),c=0,l=0;l<s.length;++l)a&1<<l&&(o[c++]=s[l]);t.push(o)}return normalize(t)}topology.skeleton=skeleton;function boundary(r){for(var e=[],t=0,n=r.length;t<n;++t)for(var i=r[t],s=0,a=i.length;s<a;++s){for(var o=new Array(i.length-1),c=0,l=0;c<a;++c)c!==s&&(o[l++]=i[c]);e.push(o)}return normalize(e)}topology.boundary=boundary;function connectedComponents_dense(r,e){for(var t=new UnionFind(e),n=0;n<r.length;++n)for(var i=r[n],s=0;s<i.length;++s)for(var a=s+1;a<i.length;++a)t.link(i[s],i[a]);for(var o=[],c=t.ranks,n=0;n<c.length;++n)c[n]=-1;for(var n=0;n<r.length;++n){var l=t.find(r[n][0]);c[l]<0?(c[l]=o.length,o.push([r[n].slice(0)])):o[c[l]].push(r[n].slice(0))}return o}function connectedComponents_sparse(r){for(var e=unique(normalize(skeleton(r,0))),t=new UnionFind(e.length),n=0;n<r.length;++n)for(var i=r[n],s=0;s<i.length;++s)for(var a=findCell(e,[i[s]]),o=s+1;o<i.length;++o)t.link(a,findCell(e,[i[o]]));for(var c=[],l=t.ranks,n=0;n<l.length;++n)l[n]=-1;for(var n=0;n<r.length;++n){var u=t.find(findCell(e,[r[n][0]]));l[u]<0?(l[u]=c.length,c.push([r[n].slice(0)])):c[l[u]].push(r[n].slice(0))}return c}function connectedComponents(r,e){return e?connectedComponents_dense(r,e):connectedComponents_sparse(r)}topology.connectedComponents=connectedComponents;var ich$1=incrementalConvexHull,orient$1=orientationExports,compareCell=topology.compareCells;function Simplex(r,e,t){this.vertices=r,this.adjacent=e,this.boundary=t,this.lastVisited=-1}Simplex.prototype.flip=function(){var r=this.vertices[0];this.vertices[0]=this.vertices[1],this.vertices[1]=r;var e=this.adjacent[0];this.adjacent[0]=this.adjacent[1],this.adjacent[1]=e};function GlueFacet(r,e,t){this.vertices=r,this.cell=e,this.index=t}function compareGlue(r,e){return compareCell(r.vertices,e.vertices)}function bakeOrient(r){for(var e=["function orient(){var tuple=this.tuple;return test("],t=0;t<=r;++t)t>0&&e.push(","),e.push("tuple[",t,"]");e.push(")}return orient");var n=new Function("test",e.join("")),i=orient$1[r+1];return i||(i=orient$1),n(i)}var BAKED=[];function Triangulation(r,e,t){this.dimension=r,this.vertices=e,this.simplices=t,this.interior=t.filter(function(s){return!s.boundary}),this.tuple=new Array(r+1);for(var n=0;n<=r;++n)this.tuple[n]=this.vertices[n];var i=BAKED[r];i||(i=BAKED[r]=bakeOrient(r)),this.orient=i}var proto=Triangulation.prototype;proto.handleBoundaryDegeneracy=function(r,e){var t=this.dimension,n=this.vertices.length-1,i=this.tuple,s=this.vertices,a=[r];for(r.lastVisited=-n;a.length>0;){r=a.pop(),r.vertices;for(var o=r.adjacent,c=0;c<=t;++c){var l=o[c];if(!(!l.boundary||l.lastVisited<=-n)){for(var u=l.vertices,h=0;h<=t;++h){var p=u[h];p<0?i[h]=e:i[h]=s[p]}var f=this.orient();if(f>0)return l;l.lastVisited=-n,f===0&&a.push(l)}}}return null};proto.walk=function(r,e){var t=this.vertices.length-1,n=this.dimension,i=this.vertices,s=this.tuple,a=e?this.interior.length*Math.random()|0:this.interior.length-1,o=this.interior[a];e:for(;!o.boundary;){for(var c=o.vertices,l=o.adjacent,u=0;u<=n;++u)s[u]=i[c[u]];o.lastVisited=t;for(var u=0;u<=n;++u){var h=l[u];if(!(h.lastVisited>=t)){var p=s[u];s[u]=r;var f=this.orient();if(s[u]=p,f<0){o=h;continue e}else h.boundary?h.lastVisited=-t:h.lastVisited=t}}return}return o};proto.addPeaks=function(r,e){var t=this.vertices.length-1,n=this.dimension,i=this.vertices,s=this.tuple,a=this.interior,o=this.simplices,c=[e];e.lastVisited=t,e.vertices[e.vertices.indexOf(-1)]=t,e.boundary=!1,a.push(e);for(var l=[];c.length>0;){var e=c.pop(),u=e.vertices,h=e.adjacent,p=u.indexOf(t);if(!(p<0)){for(var f=0;f<=n;++f)if(f!==p){var m=h[f];if(!(!m.boundary||m.lastVisited>=t)){var g=m.vertices;if(m.lastVisited!==-t){for(var v=0,_=0;_<=n;++_)g[_]<0?(v=_,s[_]=r):s[_]=i[g[_]];var L=this.orient();if(L>0){g[v]=t,m.boundary=!1,a.push(m),c.push(m),m.lastVisited=t;continue}else m.lastVisited=-t}var x=m.adjacent,M=u.slice(),R=h.slice(),D=new Simplex(M,R,!0);o.push(D);var I=x.indexOf(e);if(!(I<0)){x[I]=D,R[p]=m,M[f]=-1,R[f]=e,h[f]=D,D.flip();for(var _=0;_<=n;++_){var y=M[_];if(!(y<0||y===t)){for(var S=new Array(n-1),E=0,O=0;O<=n;++O){var $=M[O];$<0||O===_||(S[E++]=$)}l.push(new GlueFacet(S,D,_))}}}}}}}l.sort(compareGlue);for(var f=0;f+1<l.length;f+=2){var H=l[f],te=l[f+1],de=H.index,ve=te.index;de<0||ve<0||(H.cell.adjacent[H.index]=te.cell,te.cell.adjacent[te.index]=H.cell)}};proto.insert=function(r,e){var t=this.vertices;t.push(r);var n=this.walk(r,e);if(n){for(var i=this.dimension,s=this.tuple,a=0;a<=i;++a){var o=n.vertices[a];o<0?s[a]=r:s[a]=t[o]}var c=this.orient(s);c<0||c===0&&(n=this.handleBoundaryDegeneracy(n,r),!n)||this.addPeaks(r,n)}};proto.boundary=function(){for(var r=this.dimension,e=[],t=this.simplices,n=t.length,i=0;i<n;++i){var s=t[i];if(s.boundary){for(var a=new Array(r),o=s.vertices,c=0,l=0,u=0;u<=r;++u)o[u]>=0?a[c++]=o[u]:l=u&1;if(l===(r&1)){var h=a[0];a[0]=a[1],a[1]=h}e.push(a)}}return e};function incrementalConvexHull(r,e){var t=r.length;if(t===0)throw new Error("Must have at least d+1 points");var n=r[0].length;if(t<=n)throw new Error("Must input at least d+1 points");var i=r.slice(0,n+1),s=orient$1.apply(void 0,i);if(s===0)throw new Error("Input not in general position");for(var a=new Array(n+1),o=0;o<=n;++o)a[o]=o;s<0&&(a[0]=1,a[1]=0);for(var c=new Simplex(a,new Array(n+1),!1),l=c.adjacent,u=new Array(n+2),o=0;o<=n;++o){for(var h=a.slice(),p=0;p<=n;++p)p===o&&(h[p]=-1);var f=h[0];h[0]=h[1],h[1]=f;var m=new Simplex(h,new Array(n+1),!0);l[o]=m,u[o]=m}u[n+1]=c;for(var o=0;o<=n;++o)for(var h=l[o].vertices,g=l[o].adjacent,p=0;p<=n;++p){var v=h[p];if(v<0){g[p]=c;continue}for(var _=0;_<=n;++_)l[_].vertices.indexOf(v)<0&&(g[p]=l[_])}for(var L=new Triangulation(n,i,u),x=!!e,o=n+1;o<t;++o)L.insert(r[o],x);return L.boundary()}var aff$1=affineHull,orient=orientationExports;function linearlyIndependent(r,e){for(var t=new Array(e+1),n=0;n<r.length;++n)t[n]=r[n];for(var n=0;n<=r.length;++n){for(var i=r.length;i<=e;++i){for(var s=new Array(e),a=0;a<e;++a)s[a]=Math.pow(i+1-n,a);t[i]=s}var o=orient.apply(void 0,t);if(o)return!0}return!1}function affineHull(r){var e=r.length;if(e===0)return[];if(e===1)return[0];for(var t=r[0].length,n=[r[0]],i=[0],s=1;s<e;++s){if(n.push(r[s]),!linearlyIndependent(n,t)){n.pop();continue}if(i.push(s),i.length===t+1)return i}return i}var chnd=convexHullnD,ich=ich$1,aff=aff$1;function permute(r,e){for(var t=r.length,n=new Array(t),i=0;i<e.length;++i)n[i]=r[e[i]];for(var s=e.length,i=0;i<t;++i)e.indexOf(i)<0&&(n[s++]=r[i]);return n}function invPermute(r,e){for(var t=r.length,n=e.length,i=0;i<t;++i)for(var s=r[i],a=0;a<s.length;++a){var o=s[a];if(o<n)s[a]=e[o];else{o=o-n;for(var c=0;c<n;++c)o>=e[c]&&(o+=1);s[a]=o}}return r}function convexHullnD(r,e){try{return ich(r,!0)}catch{var t=aff(r);if(t.length<=e)return[];var n=permute(r,t),i=ich(n,!0);return invPermute(i,t)}}var convexHull1d=ch1d,convexHull2d=ch2d,convexHullnd=chnd,ch=convexHull;function convexHull(r){var e=r.length;if(e===0)return[];if(e===1)return[[0]];var t=r[0].length;return t===0?[]:t===1?convexHull1d(r):t===2?convexHull2d(r):convexHullnd(r,t)}Object.defineProperty(utils$6,"__esModule",{value:!0});utils$6.deg2rad=deg2rad;utils$6.rad2deg=rad2deg;utils$6.getColumn=getColumn;utils$6.sampleCircle=sampleCircle;utils$6.getCircHarmonics=getCircHarmonics;utils$6.getAmbisonicDecMtx=getAmbisonicDecMtx;utils$6.createNearestLookup=createNearestLookup;utils$6.findNearest=findNearest;utils$6.getTdesign=getTdesign;var numeric$2=numeric1_2_6,jshlib$4=src,convexhull=ch;function deg2rad(r){for(var e=[],t=Math.PI/180,n=0;n<r.length;n++)r[0].length==3?e.push([r[n][0]*t,r[n][1]*t,r[n][2]]):r[0].length==2&&e.push([r[n][0]*t,r[n][1]*t]);return e}function rad2deg(r){for(var e=[],t=180/Math.PI,n=0;n<r.length;n++)r[0].length==3?e.push([r[n][0]*t,r[n][1]*t,r[n][2]]):r[0].length==2&&e.push([r[n][0]*t,r[n][1]*t]);return e}function getColumn(r,e){return r.map(function(t){return t[e]})}function sampleCircle(r){for(var e=[],t=360/r,n=0,i=0;i<r;i++)e.push([n,0,1]),n+=t;return e}function getCircHarmonics(r,e){var t=r,n=2*t+1,i=e.length,s=new Array(n),a=new Array(i);e=numeric$2.mul(e,Math.PI/180),a.fill(1/Math.sqrt(2*Math.PI)),s[0]=a;for(var o=0;o<t;o++)s[2*o+1]=numeric$2.div(numeric$2.sin(numeric$2.mul(-(o+1),e)),Math.sqrt(Math.PI)),s[2*o+2]=numeric$2.div(numeric$2.cos(numeric$2.mul(o+1,e)),Math.sqrt(Math.PI));return s}function getAmbisonicDecMtx(r,e){for(var t=deg2rad(r),n=jshlib$4.convertSph2Cart(t),i=convexhull(n),s=i.length,a=t.length,o=new Array(s),c=0;c<s;c++){for(var l=new Array(3),u=0;u<3;u++)l[u]=n[i[c][u]];for(var h=numeric$2.inv(l),p=[],f=0;f<3;f++)for(var m=0;m<3;m++)p.push(h[m][f]);o[c]=p}var g=getTdesign(2*e),v=deg2rad(g),_=vbap3(v,i,o,a);_=numeric$2.transpose(_);var L=jshlib$4.computeRealSH(e,v);L=numeric$2.transpose(L);var x=v.length,M=numeric$2.dotMMsmall(_,L);return M=numeric$2.mul(1/x,M),M}var vbap3=function r(e,t,n,i){var s=e.length,a=i,o=t.length;function c(D){return Math.min.apply(null,D)}for(var l=new Array(s),u=jshlib$4.convertSph2Cart(e),h=0;h<s;h++){var p=u[h],f=new Array(a);f.fill(0);for(var m=0;m<o;m++){var g=[],v=[n[m][0],n[m][1],n[m][2]];if(g[0]=numeric$2.dotVV(v,p),v=[n[m][3],n[m][4],n[m][5]],g[1]=numeric$2.dotVV(v,p),v=[n[m][6],n[m][7],n[m][8]],g[2]=numeric$2.dotVV(v,p),c(g)>-.001){for(var _=Math.sqrt(numeric$2.sum(numeric$2.pow(g,2))),L=numeric$2.div(g,_),x=0;x<3;x++)f[t[m][x]]=L[x];break}}var M=Math.sqrt(numeric$2.sum(numeric$2.pow(f,2))),R=numeric$2.div(f,M);l[h]=R}return l};function createNearestLookup(r,e){var t=r.length,n=jshlib$4.convertSph2Cart(deg2rad(r)),i=Math.round(360/e[0])+1,s=Math.round(180/e[1])+1,a=new Array(i);a[0]=-180;for(var o=1;o<i;o++)a[o]=a[o-1]+e[0];for(var c=i*s,l=new Array(c),u=0;u<c;u++)for(var h=[[u%i*e[0]-180,Math.floor(u/i)*e[1]-90]],p=jshlib$4.convertSph2Cart(deg2rad(h)),f=1e3,m=0;m<t;m++){var g=numeric$2.sum(numeric$2.pow(numeric$2.sub(p[0],n[m]),2));g<f&&(l[u]=m,f=g)}return l}function findNearest(r,e,t){for(var n=r.length,i=[],s=[],a=0;a<n;a++)i.push(r[a][0]+180),s.push(r[a][1]+90);for(var o=Math.round(360/t[0])+1,c=numeric$2.round(numeric$2.div(numeric$2.mod(i,360),t[0])),l=numeric$2.round(numeric$2.div(s,t[1])),u=numeric$2.add(numeric$2.mul(l,o),c,1),h=[],p=0;p<n;p++)h.push(e[u[p]]);return h}function getTdesign(r){if(r>21)throw new Error("Designs of order greater than 21 are not implemented");if(r<1)throw new Error("Order should be at least 1");var e=[[[0,0,1],[180,0,1]],[[45,35.26,1],[-45,-35.26,1],[135,-35.26,1],[-135,35.26,1]],[[0,0,1],[180,0,1],[90,0,1],[-90,0,1],[0,90,1],[0,-90,1]],[[0,-31.72,1],[-58.28,0,1],[-90,58.28,1],[0,31.72,1],[-121.72,0,1],[90,-58.28,1],[180,-31.72,1],[121.72,0,1],[90,58.28,1],[180,31.72,1],[58.28,0,1],[-90,-58.28,1]],[[0,-31.72,1],[-58.28,0,1],[-90,58.28,1],[0,31.72,1],[-121.72,0,1],[90,-58.28,1],[180,-31.72,1],[121.72,0,1],[90,58.28,1],[180,31.72,1],[58.28,0,1],[-90,-58.28,1]],[[26,15.46,1],[-26,-15.46,1],[17.11,-24.99,1],[-17.11,24.99,1],[154,-15.46,1],[-154,15.46,1],[162.89,24.99,1],[-162.89,-24.99,1],[72.89,24.99,1],[107.11,-24.99,1],[116,15.46,1],[64,-15.46,1],[-107.11,24.99,1],[-72.89,-24.99,1],[-64,15.46,1],[-116,-15.46,1],[32.25,60.03,1],[-147.75,60.03,1],[-57.75,60.03,1],[122.25,60.03,1],[-32.25,-60.03,1],[147.75,-60.03,1],[57.75,-60.03,1],[-122.25,-60.03,1]],[[26,15.46,1],[-26,-15.46,1],[17.11,-24.99,1],[-17.11,24.99,1],[154,-15.46,1],[-154,15.46,1],[162.89,24.99,1],[-162.89,-24.99,1],[72.89,24.99,1],[107.11,-24.99,1],[116,15.46,1],[64,-15.46,1],[-107.11,24.99,1],[-72.89,-24.99,1],[-64,15.46,1],[-116,-15.46,1],[32.25,60.03,1],[-147.75,60.03,1],[-57.75,60.03,1],[122.25,60.03,1],[-32.25,-60.03,1],[147.75,-60.03,1],[57.75,-60.03,1],[-122.25,-60.03,1]],[[-31.11,53.65,1],[110.82,30.5,1],[148.89,53.65,1],[32.21,-17.83,1],[69.18,-30.5,1],[-32.21,17.83,1],[-69.18,30.5,1],[-147.79,-17.83,1],[-110.82,-30.5,1],[147.79,17.83,1],[31.11,-53.65,1],[-148.89,-53.65,1],[-21.25,-47.78,1],[-108.2,38.78,1],[158.75,-47.78,1],[139.77,-14.09,1],[-71.8,-38.78,1],[-139.77,14.09,1],[71.8,38.78,1],[-40.23,-14.09,1],[108.2,-38.78,1],[40.23,14.09,1],[21.25,47.78,1],[-158.75,47.78,1],[106.65,-2.55,1],[-2.66,-16.63,1],[-73.35,-2.55,1],[-98.84,73.16,1],[-177.34,16.63,1],[98.84,-73.16,1],[177.34,-16.63,1],[81.16,73.16,1],[2.66,16.63,1],[-81.16,-73.16,1],[-106.65,2.55,1],[73.35,2.55,1]],[[20.75,-3.55,1],[-20.75,3.55,1],[-3.8,-20.7,1],[3.8,20.7,1],[159.25,3.55,1],[-159.25,-3.55,1],[-176.2,20.7,1],[176.2,-20.7,1],[93.8,20.7,1],[86.2,-20.7,1],[110.75,-3.55,1],[69.25,3.55,1],[-86.2,20.7,1],[-93.8,-20.7,1],[-69.25,-3.55,1],[-110.75,3.55,1],[-9.94,68.97,1],[170.06,68.97,1],[-99.94,68.97,1],[80.06,68.97,1],[9.94,-68.97,1],[-170.06,-68.97,1],[99.94,-68.97,1],[-80.06,-68.97,1],[42.15,17.57,1],[-42.15,-17.57,1],[23.12,-39.77,1],[-23.12,39.77,1],[137.85,-17.57,1],[-137.85,17.57,1],[156.88,39.77,1],[-156.88,-39.77,1],[66.88,39.77,1],[113.12,-39.77,1],[132.15,17.57,1],[47.85,-17.57,1],[-113.12,39.77,1],[-66.88,-39.77,1],[-47.85,17.57,1],[-132.15,-17.57,1],[25.26,44.98,1],[-154.74,44.98,1],[-64.74,44.98,1],[115.26,44.98,1],[-25.26,-44.98,1],[154.74,-44.98,1],[64.74,-44.98,1],[-115.26,-44.98,1]],[[144.09,-21.45,1],[-33.81,-48.92,1],[-35.91,-21.45,1],[-115.87,33.09,1],[-146.19,48.92,1],[115.87,-33.09,1],[146.19,-48.92,1],[64.13,33.09,1],[33.81,48.92,1],[-64.13,-33.09,1],[-144.09,21.45,1],[35.91,21.45,1],[-45.53,1.95,1],[177.26,44.44,1],[134.47,1.95,1],[87.21,-45.49,1],[2.74,-44.44,1],[-87.21,45.49,1],[-2.74,44.44,1],[-92.79,-45.49,1],[-177.26,-44.44,1],[92.79,45.49,1],[45.53,-1.95,1],[-134.47,-1.95,1],[15.59,-73.34,1],[-85.4,16.04,1],[-164.41,-73.34,1],[163.92,4.42,1],[-94.6,-16.04,1],[-163.92,-4.42,1],[94.6,16.04,1],[-16.08,4.42,1],[85.4,-16.04,1],[16.08,-4.42,1],[-15.59,73.34,1],[164.41,73.34,1],[-60.02,25.27,1],[151.41,26.86,1],[119.98,25.27,1],[46.63,-51.57,1],[28.59,-26.86,1],[-46.63,51.57,1],[-28.59,26.86,1],[-133.37,-51.57,1],[-151.41,-26.86,1],[133.37,51.57,1],[60.02,-25.27,1],[-119.98,-25.27,1],[-109.94,6.91,1],[172.65,-19.79,1],[70.06,6.91,1],[-70.44,-68.94,1],[7.35,19.79,1],[70.44,68.94,1],[-7.35,-19.79,1],[109.56,-68.94,1],[-172.65,19.79,1],[-109.56,68.94,1],[109.94,-6.91,1],[-70.06,-6.91,1]],[[132.93,7.69,1],[-83.93,-23.73,1],[8.47,23.51,1],[-113.34,70.42,1],[-103.27,-9.9,1],[-33.24,-70.75,1],[21.86,-26.46,1],[-156.54,47.78,1],[-64.26,-7.72,1],[165.78,44.53,1],[-25.2,26.39,1],[-97,-44.66,1],[27.85,9.77,1],[153.21,-47.71,1],[-155.06,7.45,1],[-11.84,-23.59,1],[80.54,23.72,1],[-42.06,70.44,1],[-31.22,-9.84,1],[38.84,-70.5,1],[93.76,-26.29,1],[-84.76,47.61,1],[7.76,-7.52,1],[-122.28,44.29,1],[46.8,26.64,1],[-24.77,-44.57,1],[99.89,9.91,1],[-134.78,-47.96,1],[-83.09,7.3,1],[60.13,-23.34,1],[152.64,23.64,1],[29.76,70.68,1],[40.78,-9.58,1],[110.18,-70.39,1],[165.65,-26.43,1],[-12.99,47.75,1],[79.74,-7.31,1],[-50.52,44.26,1],[118.92,26.71,1],[47.22,-44.31,1],[171.93,9.76,1],[-62.51,-48.04,1],[-11.12,7.44,1],[132.02,-23.33,1],[-135.36,23.39,1],[102.37,70.82,1],[112.74,-9.49,1],[-178.3,-70.58,1],[-122.32,-26.67,1],[59.08,48,1],[151.7,-7.38,1],[21.38,44.5,1],[-169.01,26.5,1],[118.98,-44.25,1],[-116.09,9.52,1],[9.65,-47.83,1],[60.89,7.68,1],[-156.02,-23.57,1],[-63.46,23.31,1],[174.93,70.66,1],[-175.29,-9.68,1],[-105.95,-70.8,1],[-50.19,-26.7,1],[131.36,48.01,1],[-136.3,-7.64,1],[93.56,44.67,1],[-97.08,26.3,1],[-169.16,-44.46,1],[-44.13,9.52,1],[81.48,-47.62,1]],[[-154.47,7.9,1],[162.15,-63.36,1],[25.53,7.9,1],[-81.26,-25.27,1],[17.85,63.36,1],[81.26,25.27,1],[-17.85,-63.36,1],[98.74,-25.27,1],[-162.15,63.36,1],[-98.74,25.27,1],[154.47,-7.9,1],[-25.53,-7.9,1],[1.3,-10.47,1],[-83.01,79.45,1],[-178.7,-10.47,1],[100.48,1.28,1],[-96.99,-79.45,1],[-100.48,-1.28,1],[96.99,79.45,1],[-79.52,1.28,1],[83.01,-79.45,1],[79.52,-1.28,1],[-1.3,10.47,1],[178.7,10.47,1],[157.24,13.15,1],[31.14,-63.89,1],[-22.76,13.15,1],[-75.78,22.13,1],[148.86,63.89,1],[75.78,-22.13,1],[-148.86,-63.89,1],[104.22,22.13,1],[-31.14,63.89,1],[-104.22,-22.13,1],[-157.24,-13.15,1],[22.76,-13.15,1],[110.44,-60.62,1],[-62.18,-9.87,1],[-69.56,-60.62,1],[-168.88,27.37,1],[-117.82,9.87,1],[168.88,-27.37,1],[117.82,-9.87,1],[11.12,27.37,1],[62.18,9.87,1],[-11.12,-27.37,1],[-110.44,60.62,1],[69.56,60.62,1],[-125.93,-47.4,1],[-126.67,-23.4,1],[54.07,-47.4,1],[-151.65,-33.24,1],[-53.33,23.4,1],[151.65,33.24,1],[53.33,-23.4,1],[28.35,-33.24,1],[126.67,23.4,1],[-28.35,33.24,1],[125.93,47.4,1],[-54.07,47.4,1],[61.41,37.54,1],[41.19,22.3,1],[-118.59,37.54,1],[31.92,44.13,1],[138.81,-22.3,1],[-31.92,-44.13,1],[-138.81,22.3,1],[-148.08,44.13,1],[-41.19,-22.3,1],[148.08,-44.13,1],[-61.41,-37.54,1],[118.59,-37.54,1],[132.92,4.73,1],[6.45,-42.74,1],[-47.08,4.73,1],[-83.07,46.87,1],[173.55,42.74,1],[83.07,-46.87,1],[-173.55,-42.74,1],[96.93,46.87,1],[-6.45,42.74,1],[-96.93,-46.87,1],[-132.92,-4.73,1],[47.08,-4.73,1]],[[-40.36,68.7,1],[61.12,65.68,1],[141.73,70.75,1],[-131.25,72.32,1],[-154.88,-12.62,1],[-66.2,-9.78,1],[26.36,-11.97,1],[114.95,-12.58,1],[37.02,51.13,1],[129.77,51.95,1],[-140.63,50.15,1],[-56.5,47.88,1],[-65.05,12.58,1],[25.12,12.62,1],[113.8,9.78,1],[-153.64,11.97,1],[-134.51,-9.73,1],[-46.23,-8.37,1],[47.91,-9.73,1],[141.51,-8.73,1],[-17.84,-44.1,1],[69.37,-43.27,1],[151.22,-42.67,1],[-106.78,-40.18,1],[-50.23,-51.95,1],[39.37,-50.15,1],[123.5,-47.88,1],[-142.98,-51.13,1],[-179.19,-60.75,1],[-84.57,-54.07,1],[5.39,-58.05,1],[89.5,-60.75,1],[-145.98,31.02,1],[-54.39,26.43,1],[28.92,32.51,1],[125.34,30.94,1],[168.71,-7.06,1],[-112.49,-10.38,1],[-21.96,-9.6,1],[73.11,-8.31,1],[95.68,.04,1],[-170.71,2.32,1],[-84.32,-.04,1],[9.29,-2.32,1],[9.19,-34.33,1],[98.21,-37.31,1],[-179.2,-40.48,1],[-77.81,-31.6,1],[-177.08,-21.74,1],[-93.77,-18.83,1],[-2.72,-19.8,1],[90.51,-20.91,1],[-106.89,8.31,1],[-11.29,7.06,1],[67.51,10.38,1],[158.04,9.6,1],[-118.88,-65.68,1],[-38.27,-70.75,1],[48.75,-72.32,1],[139.64,-68.7,1],[-54.66,-30.94,1],[34.02,-31.02,1],[125.61,-26.43,1],[-151.08,-32.51,1],[-170.81,34.33,1],[-81.79,37.31,1],[.8,40.48,1],[102.19,31.6,1],[-28.78,42.67,1],[73.22,40.18,1],[162.16,44.1,1],[-110.63,43.27,1],[-89.49,20.91,1],[2.92,21.74,1],[86.23,18.83,1],[177.28,19.8,1],[133.77,8.37,1],[-132.09,9.73,1],[-38.49,8.73,1],[45.49,9.73,1],[-25.6,24.04,1],[55.12,30.23,1],[149.3,28.05,1],[-118.71,26.06,1],[.81,60.75,1],[95.43,54.07,1],[-174.61,58.05,1],[-90.5,60.75,1],[-124.88,-30.23,1],[-30.7,-28.05,1],[61.29,-26.06,1],[154.4,-24.04,1],[-132.92,-85.6,1],[47.08,85.6,1]],[[-129.19,8.11,1],[169.58,-38.73,1],[50.81,8.12,1],[-77.27,-50.11,1],[10.42,38.73,1],[77.3,50.12,1],[-10.41,-38.72,1],[102.71,-50.11,1],[-169.57,38.72,1],[-102.71,50.11,1],[129.19,-8.11,1],[-50.8,-8.11,1],[-4.59,-56.01,1],[-93.1,33.85,1],[175.39,-56.03,1],[146.11,-2.57,1],[-86.89,-33.86,1],[-146.1,2.56,1],[86.91,33.86,1],[-33.89,-2.57,1],[93.1,-33.85,1],[33.9,2.58,1],[4.6,56.03,1],[-175.38,56.01,1],[106.57,26.1,1],[27.07,-14.82,1],[-73.44,26.09,1],[-30.2,59.41,1],[152.94,14.83,1],[30.2,-59.4,1],[-152.93,-14.84,1],[149.82,59.41,1],[-27.06,14.83,1],[-149.8,-59.42,1],[-106.55,-26.1,1],[73.44,-26.09,1],[-171.42,77.45,1],[91.9,-12.4,1],[8.54,77.46,1],[-12.4,-1.85,1],[88.11,12.41,1],[12.41,1.86,1],[-88.1,-12.41,1],[167.6,-1.86,1],[-91.89,12.4,1],[-167.59,1.84,1],[171.43,-77.46,1],[-8.52,-77.45,1],[-122.73,-10.44,1],[-167.65,-32.13,1],[57.27,-10.43,1],[-108.8,-55.83,1],[-12.35,32.13,1],[108.83,55.83,1],[12.36,-32.12,1],[71.19,-55.82,1],[167.66,32.12,1],[-71.19,55.82,1],[122.74,10.44,1],[-57.27,10.44,1],[-135.84,-23.05,1],[-148.58,-41.32,1],[44.16,-23.04,1],[-120.66,-39.88,1],[-31.41,41.31,1],[120.68,39.87,1],[31.42,-41.3,1],[59.33,-39.86,1],[148.6,41.31,1],[-59.33,39.87,1],[135.85,23.05,1],[-44.16,23.05,1],[-161.55,20.62,1],[130.04,-62.6,1],[18.45,20.64,1],[-68.35,-17.23,1],[49.96,62.61,1],[68.36,17.23,1],[-49.93,-62.6,1],[111.65,-17.22,1],[-130.05,62.59,1],[-111.64,17.22,1],[161.56,-20.63,1],[-18.44,-20.62,1],[-105.23,-3.38,1],[-176.5,-15.21,1],[74.77,-3.37,1],[-102.64,-74.41,1],[-3.5,15.21,1],[102.69,74.41,1],[3.51,-15.2,1],[77.33,-74.4,1],[176.51,15.2,1],[-77.36,74.4,1],[105.24,3.38,1],[-74.76,3.37,1],[-142.39,25.42,1],[142.08,-45.69,1],[37.61,25.43,1],[-59.02,-33.44,1],[37.92,45.69,1],[59.04,33.45,1],[-37.91,-45.68,1],[120.97,-33.44,1],[-142.07,45.68,1],[-120.96,33.44,1],[142.4,-25.43,1],[-37.6,-25.42,1]],[[-30.6,6.94,1],[166.56,58.69,1],[149.4,6.96,1],[81.95,-30.36,1],[13.48,-58.69,1],[-81.93,30.36,1],[-13.46,58.68,1],[-98.06,-30.37,1],[-166.54,-58.68,1],[98.07,30.37,1],[30.62,-6.95,1],[-149.38,-6.95,1],[106.69,-22.68,1],[-23.57,-15.36,1],[-73.31,-22.69,1],[-145.5,62.1,1],[-156.41,15.36,1],[145.53,-62.1,1],[156.43,-15.35,1],[34.47,62.11,1],[23.58,15.36,1],[-34.46,-62.11,1],[-106.67,22.68,1],[73.33,22.69,1],[166.82,1.39,1],[6.09,-76.74,1],[-13.19,1.38,1],[-88.57,13.18,1],[173.99,76.74,1],[88.59,-13.18,1],[-173.97,-76.73,1],[91.43,13.2,1],[-6.07,76.73,1],[-91.42,-13.2,1],[-166.8,-1.38,1],[13.2,-1.39,1],[-74.67,48.11,1],[130.86,10.16,1],[105.32,48.13,1],[13.34,-40.08,1],[49.16,-10.15,1],[-13.32,40.07,1],[-49.14,10.15,1],[-166.67,-40.08,1],[-130.84,-10.16,1],[166.69,40.08,1],[74.7,-48.11,1],[-105.31,-48.13,1],[-126.99,26.55,1],[147.96,-32.57,1],[53,26.56,1],[-50.28,-45.59,1],[32.05,32.58,1],[50.3,45.59,1],[-32.03,-32.58,1],[129.71,-45.58,1],[-147.94,32.57,1],[-129.69,45.58,1],[127.02,-26.55,1],[-52.98,-26.56,1],[-171.93,30.37,1],[103.47,-58.68,1],[8.07,30.36,1],[-59.38,-6.96,1],[76.54,58.69,1],[59.4,6.95,1],[-76.53,-58.69,1],[120.62,-6.94,1],[-103.44,58.68,1],[-120.6,6.95,1],[171.94,-30.36,1],[-8.05,-30.37,1],[40.86,10.16,1],[15.32,48.12,1],[-139.14,10.16,1],[76.68,40.09,1],[164.69,-48.12,1],[-76.67,-40.09,1],[-164.67,48.12,1],[-103.31,40.07,1],[-15.3,-48.13,1],[103.34,-40.07,1],[-40.84,-10.16,1],[139.16,-10.15,1],[103.2,-1.38,1],[-1.41,-13.19,1],[-76.8,-1.39,1],[-96.02,76.73,1],[-178.57,13.19,1],[96.07,-76.73,1],[178.58,-13.19,1],[83.94,76.74,1],[1.43,13.19,1],[-83.95,-76.74,1],[-103.18,1.38,1],[76.81,1.39,1],[37.02,-26.56,1],[-39.7,45.58,1],[-142.99,-26.56,1],[122.05,32.58,1],[-140.29,-45.59,1],[-122.04,-32.58,1],[140.31,45.59,1],[-57.95,32.57,1],[39.72,-45.58,1],[57.97,-32.57,1],[-37,26.55,1],[143,26.56,1],[163.33,22.69,1],[55.55,-62.1,1],[-16.67,22.68,1],[-66.41,15.35,1],[124.49,62.11,1],[66.43,-15.35,1],[-124.48,-62.11,1],[113.58,15.36,1],[-55.52,62.1,1],[-113.57,-15.36,1],[-163.31,-22.68,1],[16.69,-22.69,1]],[[-10.57,-17.35,1],[-120.42,69.76,1],[169.43,-17.35,1],[107.63,-10.08,1],[-59.57,-69.78,1],[-107.63,10.08,1],[59.57,69.78,1],[-72.37,-10.09,1],[120.42,-69.76,1],[72.37,10.09,1],[10.57,17.35,1],[-169.43,17.35,1],[-30.77,68.25,1],[101.53,18.57,1],[149.25,68.26,1],[18.92,-10.92,1],[78.47,-18.56,1],[-18.92,10.92,1],[-78.47,18.56,1],[-161.09,-10.92,1],[-101.53,-18.56,1],[161.09,10.92,1],[30.78,-68.26,1],[-149.26,-68.26,1],[56.46,41.26,1],[46.46,24.54,1],[-123.53,41.26,1],[32.19,38.8,1],[133.53,-24.53,1],[-32.19,-38.8,1],[-133.53,24.53,1],[-147.8,38.8,1],[-46.46,-24.54,1],[147.8,-38.8,1],[-56.46,-41.27,1],[123.53,-41.26,1],[84.74,27.31,1],[27.41,4.68,1],[-95.26,27.3,1],[10.06,62.23,1],[152.59,-4.67,1],[-10.06,-62.23,1],[-152.59,4.67,1],[-169.92,62.23,1],[-27.4,-4.68,1],[169.92,-62.22,1],[-84.74,-27.31,1],[95.26,-27.3,1],[136.27,-.73,1],[-1.05,-46.27,1],[-43.73,-.74,1],[-91.01,43.72,1],[-178.94,46.27,1],[91.01,-43.72,1],[178.94,-46.27,1],[88.99,43.73,1],[1.05,46.27,1],[-88.99,-43.73,1],[-136.27,.73,1],[43.73,.73,1],[55.23,10.82,1],[13.09,34.07,1],[-124.77,10.81,1],[71.48,53.8,1],[166.91,-34.06,1],[-71.48,-53.8,1],[-166.9,34.06,1],[-108.52,53.79,1],[-13.09,-34.06,1],[108.52,-53.79,1],[-55.23,-10.82,1],[124.77,-10.81,1],[-105.49,-68.13,1],[-111.15,-5.71,1],[74.52,-68.12,1],[-173.89,-21.04,1],[-68.85,5.7,1],[173.89,21.04,1],[68.85,-5.7,1],[6.12,-21.04,1],[111.15,5.71,1],[-6.12,21.04,1],[105.49,68.13,1],[-74.52,68.12,1],[35.28,-15.18,1],[-25.17,51.98,1],[-144.72,-15.19,1],[108.39,33.88,1],[-154.84,-51.99,1],[-108.39,-33.88,1],[154.84,51.99,1],[-71.61,33.87,1],[25.17,-51.98,1],[71.61,-33.87,1],[-35.28,15.18,1],[144.72,15.19,1],[-125.28,-28.56,1],[-146.32,-30.49,1],[54.72,-28.55,1],[-133.29,-45.82,1],[-33.69,30.48,1],[133.3,45.82,1],[33.68,-30.48,1],[46.71,-45.81,1],[146.32,30.49,1],[-46.71,45.81,1],[125.28,28.56,1],[-54.72,28.54,1],[-144.4,54.71,1],[112.38,-28.01,1],[35.58,54.72,1],[-29.92,-19.65,1],[67.62,28.02,1],[29.92,19.65,1],[-67.62,-28.02,1],[150.08,-19.64,1],[-112.38,28.01,1],[-150.08,19.64,1],[144.4,-54.71,1],[-35.58,-54.72,1],[68.53,-52.85,1],[-54.82,12.76,1],[-111.46,-52.87,1],[164.51,34.19,1],[-125.18,-12.77,1],[-164.51,-34.19,1],[125.18,12.77,1],[-15.5,34.19,1],[54.82,-12.76,1],[15.49,-34.19,1],[-68.53,52.85,1],[111.47,52.86,1],[91.48,-7.37,1],[-7.38,-1.47,1],[-88.52,-7.38,1],[-168.69,82.47,1],[-172.62,1.47,1],[168.69,-82.47,1],[172.62,-1.46,1],[11.22,82.48,1],[7.38,1.47,1],[-11.21,-82.48,1],[-91.48,7.37,1],[88.52,7.38,1]],[[-110.97,-81.34,1],[-98.09,-3.09,1],[69.03,-81.34,1],[-176.88,-8.08,1],[-81.91,3.09,1],[176.88,8.08,1],[81.91,-3.09,1],[3.12,-8.08,1],[98.09,3.09,1],[-3.12,8.08,1],[110.97,81.34,1],[-69.03,81.34,1],[145.76,30.52,1],[46.33,-45.41,1],[-34.24,30.52,1],[-54.51,28.99,1],[133.67,45.41,1],[54.51,-28.99,1],[-133.67,-45.41,1],[125.49,28.99,1],[-46.33,45.41,1],[-125.49,-28.99,1],[-145.76,-30.52,1],[34.24,-30.52,1],[159.58,41.4,1],[68.4,-44.67,1],[-20.42,41.4,1],[-46.75,15.18,1],[111.6,44.67,1],[46.75,-15.18,1],[-111.6,-44.67,1],[133.25,15.18,1],[-68.4,44.67,1],[-133.25,-15.18,1],[-159.58,-41.4,1],[20.42,-41.4,1],[85.43,-37.93,1],[-38.02,3.6,1],[-94.57,-37.93,1],[174.17,51.83,1],[-141.98,-3.6,1],[-174.17,-51.83,1],[141.98,3.6,1],[-5.83,51.83,1],[38.02,-3.6,1],[5.83,-51.83,1],[-85.43,37.93,1],[94.57,37.93,1],[21.18,27.17,1],[54.86,56.05,1],[-158.82,27.17,1],[61.17,18.75,1],[125.14,-56.05,1],[-61.17,-18.75,1],[-125.14,56.05,1],[-118.83,18.75,1],[-54.86,-56.05,1],[118.83,-18.75,1],[-21.18,-27.17,1],[158.82,-27.17,1],[104.66,-9.56,1],[-9.88,-14.45,1],[-75.34,-9.56,1],[-123.65,72.56,1],[-170.12,14.45,1],[123.65,-72.56,1],[170.12,-14.45,1],[56.35,72.56,1],[9.88,14.45,1],[-56.35,-72.56,1],[-104.66,9.56,1],[75.34,9.56,1],[25.94,-16.83,1],[-34.66,59.4,1],[-154.06,-16.83,1],[108.59,24.75,1],[-145.34,-59.41,1],[-108.59,-24.75,1],[145.34,59.41,1],[-71.41,24.75,1],[34.66,-59.41,1],[71.41,-24.75,1],[-25.94,16.83,1],[154.06,16.83,1],[-100.89,26.49,1],[153.1,-9.74,1],[79.11,26.49,1],[-20.77,-61.51,1],[26.9,9.74,1],[20.77,61.51,1],[-26.9,-9.74,1],[159.23,-61.51,1],[-153.1,9.74,1],[-159.23,61.51,1],[100.89,-26.49,1],[-79.11,-26.49,1],[44.31,12.28,1],[17.3,44.36,1],[-135.69,12.28,1],[73.08,43.05,1],[162.7,-44.36,1],[-73.08,-43.05,1],[-162.7,44.36,1],[-106.92,43.05,1],[-17.3,-44.36,1],[106.92,-43.05,1],[-44.31,-12.28,1],[135.69,-12.28,1],[-169.08,-24.53,1],[-112.54,-63.29,1],[10.92,-24.53,1],[-114.93,-9.92,1],[-67.46,63.28,1],[114.93,9.92,1],[67.46,-63.29,1],[65.07,-9.92,1],[112.54,63.29,1],[-65.07,9.92,1],[169.08,24.53,1],[-10.92,24.53,1],[93.2,-57.39,1],[-57.43,-1.73,1],[-86.8,-57.39,1],[-177.95,32.55,1],[-122.57,1.73,1],[177.95,-32.55,1],[122.57,-1.73,1],[2.05,32.55,1],[57.43,1.73,1],[-2.05,-32.55,1],[-93.2,57.39,1],[86.8,57.39,1],[-17.59,3.04,1],[170.04,72.16,1],[162.41,3.04,1],[86.81,-17.56,1],[9.96,-72.16,1],[-86.81,17.56,1],[-9.96,72.16,1],[-93.19,-17.56,1],[-170.04,-72.16,1],[93.19,17.56,1],[17.59,-3.04,1],[-162.41,-3.04,1],[39.38,44.26,1],[56.93,33.61,1],[-140.62,44.26,1],[38.42,27.03,1],[123.07,-33.61,1],[-38.42,-27.03,1],[-123.07,33.61,1],[-141.58,27.03,1],[-56.93,-33.61,1],[141.58,-27.03,1],[-39.38,-44.26,1],[140.62,-44.26,1]],[[165.52,26.52,1],[63.39,-60.04,1],[-14.48,26.52,1],[-62.74,12.93,1],[116.61,60.04,1],[62.74,-12.93,1],[-116.61,-60.04,1],[117.26,12.93,1],[-63.39,60.04,1],[-117.26,-12.93,1],[-165.52,-26.52,1],[14.48,-26.52,1],[-150.22,-21.62,1],[-141.41,-53.79,1],[29.78,-21.62,1],[-114.55,-27.5,1],[-38.59,53.79,1],[114.55,27.5,1],[38.59,-53.79,1],[65.45,-27.5,1],[141.41,53.79,1],[-65.45,27.5,1],[150.22,21.62,1],[-29.78,21.62,1],[-163.47,81.91,1],[92.31,-7.75,1],[16.53,81.91,1],[-7.76,-2.29,1],[87.69,7.75,1],[7.76,2.29,1],[-87.69,-7.75,1],[172.24,-2.29,1],[-92.31,7.75,1],[-172.24,2.29,1],[163.47,-81.91,1],[-16.53,-81.91,1],[-79.91,-73.49,1],[-106.27,2.85,1],[100.09,-73.49,1],[177.03,-16.24,1],[-73.73,-2.85,1],[-177.03,16.24,1],[73.73,2.85,1],[-2.97,-16.24,1],[106.27,-2.85,1],[2.97,16.24,1],[79.91,73.49,1],[-100.09,73.49,1],[-43.19,73.63,1],[101.37,11.86,1],[136.81,73.63,1],[12.09,-11.12,1],[78.63,-11.86,1],[-12.09,11.12,1],[-78.63,11.86,1],[-167.91,-11.12,1],[-101.37,-11.86,1],[167.91,11.12,1],[43.19,-73.63,1],[-136.81,-73.63,1],[109.86,-34.83,1],[-36.5,-16.19,1],[-70.14,-34.83,1],[-153.97,50.53,1],[-143.5,16.19,1],[153.97,-50.53,1],[143.5,-16.19,1],[26.03,50.53,1],[36.5,16.19,1],[-26.03,-50.53,1],[-109.86,34.83,1],[70.14,34.83,1],[-23.31,-6.54,1],[-163.84,65.83,1],[156.69,-6.54,1],[97.12,-23.15,1],[-16.16,-65.83,1],[-97.12,23.15,1],[16.16,65.83,1],[-82.88,-23.15,1],[163.84,-65.83,1],[82.88,23.15,1],[23.31,6.54,1],[-156.69,6.54,1],[-.87,-31.92,1],[-91.4,58.07,1],[179.13,-31.92,1],[121.93,-.74,1],[-88.6,-58.07,1],[-121.93,.74,1],[88.6,58.07,1],[-58.07,-.74,1],[91.4,-58.07,1],[58.07,.74,1],[.87,31.92,1],[-179.13,31.92,1],[163.12,43.35,1],[72.9,-44.1,1],[-16.88,43.35,1],[-45.39,12.19,1],[107.1,44.1,1],[45.39,-12.19,1],[-107.1,-44.1,1],[134.61,12.19,1],[-72.9,44.1,1],[-134.61,-12.19,1],[-163.12,-43.35,1],[16.88,-43.35,1],[-114.23,50.37,1],[127.06,-15.17,1],[65.77,50.37,1],[-18.77,-35.57,1],[52.94,15.17,1],[18.77,35.57,1],[-52.94,-15.17,1],[161.23,-35.57,1],[-127.06,15.17,1],[-161.23,35.57,1],[114.23,-50.37,1],[-65.77,-50.37,1],[54.17,30.16,1],[35.63,30.41,1],[-125.83,30.16,1],[45.21,44.51,1],[144.37,-30.41,1],[-45.21,-44.51,1],[-144.37,30.41,1],[-134.79,44.51,1],[-35.63,-30.41,1],[134.79,-44.51,1],[-54.17,-30.16,1],[125.83,-30.16,1],[126.2,41.73,1],[47.86,-26.15,1],[-53.8,41.73,1],[-33.51,37.03,1],[132.14,26.15,1],[33.51,-37.03,1],[-132.14,-26.15,1],[146.49,37.03,1],[-47.86,26.15,1],[-146.49,-37.03,1],[-126.2,-41.73,1],[53.8,-41.73,1],[-161.75,20.38,1],[130.12,-62.91,1],[18.25,20.38,1],[-68.63,-17.07,1],[49.88,62.91,1],[68.63,17.07,1],[-49.88,-62.91,1],[111.37,-17.07,1],[-130.12,62.91,1],[-111.37,17.07,1],[161.75,-20.38,1],[-18.25,-20.38,1],[2.71,48.49,1],[87.6,41.45,1],[-177.29,48.49,1],[41.48,1.8,1],[92.4,-41.45,1],[-41.48,-1.8,1],[-92.4,41.45,1],[-138.52,1.8,1],[-87.6,-41.45,1],[138.52,-1.8,1],[-2.71,-48.49,1],[177.29,-48.49,1],[-98.15,-27.54,1],[-152.22,-7.22,1],[81.85,-27.54,1],[-164.79,-61.37,1],[-27.78,7.22,1],[164.79,61.37,1],[27.78,-7.22,1],[15.21,-61.37,1],[152.22,7.22,1],[-15.21,61.37,1],[98.15,27.54,1],[-81.85,27.54,1]],[[-40.48,43.36,1],[124.51,33.58,1],[139.52,43.36,1],[38.85,-28.17,1],[55.49,-33.58,1],[-38.85,28.17,1],[-55.49,33.58,1],[-141.15,-28.17,1],[-124.51,-33.58,1],[141.15,28.17,1],[40.48,-43.36,1],[-139.52,-43.36,1],[56.01,17.18,1],[20.46,32.29,1],[-123.99,17.18,1],[61.05,52.38,1],[159.54,-32.29,1],[-61.05,-52.38,1],[-159.54,32.29,1],[-118.95,52.38,1],[-20.46,-32.29,1],[118.95,-52.38,1],[-56.01,-17.18,1],[123.99,-17.18,1],[-179.51,-8.95,1],[-93.08,-81.04,1],[.49,-8.95,1],[-98.95,-.48,1],[-86.92,81.04,1],[98.95,.48,1],[86.92,-81.04,1],[81.05,-.48,1],[93.08,81.04,1],[-81.05,.48,1],[179.51,8.95,1],[-.49,8.95,1],[12.04,-13.56,1],[-49.15,71.95,1],[-167.96,-13.56,1],[103.85,11.7,1],[-130.85,-71.95,1],[-103.85,-11.7,1],[130.85,71.95,1],[-76.15,11.7,1],[49.15,-71.95,1],[76.15,-11.7,1],[-12.04,13.56,1],[167.96,13.56,1],[-13.62,-58.2,1],[-98.3,30.8,1],[166.38,-58.2,1],[148.93,-7.13,1],[-81.7,-30.8,1],[-148.93,7.13,1],[81.7,30.8,1],[-31.07,-7.13,1],[98.3,-30.8,1],[31.07,7.13,1],[13.62,58.2,1],[-166.38,58.2,1],[65.26,-20.55,1],[-22.43,23.07,1],[-114.74,-20.55,1],[131.85,58.26,1],[-157.57,-23.07,1],[-131.85,-58.26,1],[157.57,23.07,1],[-48.15,58.26,1],[22.43,-23.07,1],[48.15,-58.26,1],[-65.26,20.55,1],[114.74,20.55,1],[-135.39,26.5,1],[144.63,-39.58,1],[44.61,26.5,1],[-55,-38.94,1],[35.37,39.58,1],[55,38.94,1],[-35.37,-39.58,1],[125,-38.94,1],[-144.63,39.58,1],[-125,38.94,1],[135.39,-26.5,1],[-44.61,-26.5,1],[114.95,-4.75,1],[-5.23,-24.86,1],[-65.05,-4.75,1],[-101.14,64.63,1],[-174.77,24.86,1],[101.14,-64.63,1],[174.77,-24.86,1],[78.86,64.63,1],[5.23,24.86,1],[-78.86,-64.63,1],[-114.95,4.75,1],[65.05,4.75,1],[35.85,52.64,1],[65.91,29.46,1],[-144.15,52.64,1],[31.75,20.82,1],[114.09,-29.46,1],[-31.75,-20.82,1],[-114.09,29.46,1],[-148.25,20.82,1],[-65.91,-29.46,1],[148.25,-20.82,1],[-35.85,-52.64,1],[144.15,-52.64,1],[86.45,11.52,1],[11.54,3.48,1],[-93.55,11.52,1],[16.9,77.95,1],[168.46,-3.48,1],[-16.9,-77.95,1],[-168.46,3.48,1],[-163.1,77.95,1],[-11.54,-3.48,1],[163.1,-77.95,1],[-86.45,-11.52,1],[93.55,-11.52,1],[135.24,4.02,1],[5.69,-45.1,1],[-44.76,4.02,1],[-84.35,44.62,1],[174.31,45.1,1],[84.35,-44.62,1],[-174.31,-45.1,1],[95.65,44.62,1],[-5.69,45.1,1],[-95.65,-44.62,1],[-135.24,-4.02,1],[44.76,-4.02,1],[-129.84,-18.16,1],[-156.86,-37.5,1],[50.16,-18.16,1],[-117.12,-46.85,1],[-23.14,37.5,1],[117.12,46.85,1],[23.14,-37.5,1],[62.88,-46.85,1],[156.86,37.5,1],[-62.88,46.85,1],[129.84,18.16,1],[-50.16,18.16,1],[-74.1,32.87,1],[146.1,13.3,1],[105.9,32.87,1],[22.97,-53.88,1],[33.9,-13.3,1],[-22.97,53.88,1],[-33.9,13.3,1],[-157.03,-53.88,1],[-146.1,-13.3,1],[157.03,53.88,1],[74.1,-32.87,1],[-105.9,-32.87,1],[-119.92,-5.64,1],[-173.5,-29.76,1],[60.08,-5.64,1],[-101.2,-59.6,1],[-6.5,29.76,1],[101.2,59.6,1],[6.5,-29.76,1],[78.8,-59.6,1],[173.5,29.76,1],[-78.8,59.6,1],[119.92,5.64,1],[-60.08,5.64,1],[73.14,16.13,1],[16.82,16.18,1],[-106.86,16.13,1],[45.09,66.83,1],[163.18,-16.18,1],[-45.09,-66.83,1],[-163.18,16.18,1],[-134.91,66.83,1],[-16.82,-16.18,1],[134.91,-66.83,1],[-73.14,-16.13,1],[106.86,-16.13,1],[-11.7,-43.38,1],[-102.11,45.38,1],[168.3,-43.38,1],[133.98,-8.47,1],[-77.89,-45.38,1],[-133.98,8.47,1],[77.89,45.38,1],[-46.02,-8.47,1],[102.11,-45.38,1],[46.02,8.47,1],[11.7,43.38,1],[-168.3,43.38,1],[-24.11,3.73,1],[170.94,65.63,1],[155.89,3.73,1],[85.92,-24.05,1],[9.06,-65.63,1],[-85.92,24.05,1],[-9.06,65.63,1],[-94.08,-24.05,1],[-170.94,-65.63,1],[94.08,24.05,1],[24.11,-3.73,1],[-155.89,-3.73,1]],[[104.6,-3.68,1],[-3.81,-14.57,1],[-75.4,-3.68,1],[-104.32,74.95,1],[-176.19,14.57,1],[104.32,-74.95,1],[176.19,-14.57,1],[75.68,74.95,1],[3.81,14.57,1],[-75.68,-74.95,1],[-104.6,3.68,1],[75.4,3.68,1],[153.77,-30.33,1],[-52.93,-50.74,1],[-26.23,-30.33,1],[-123.11,22.43,1],[-127.07,50.74,1],[123.11,-22.43,1],[127.07,-50.74,1],[56.89,22.43,1],[52.93,50.74,1],[-56.89,-22.43,1],[-153.77,30.33,1],[26.23,30.33,1],[35.99,-39.77,1],[-54.77,38.45,1],[-144.01,-39.77,1],[135.81,26.85,1],[-125.23,-38.45,1],[-135.81,-26.85,1],[125.23,38.45,1],[-44.19,26.85,1],[54.77,-38.45,1],[44.19,-26.85,1],[-35.99,39.77,1],[144.01,39.77,1],[71.82,-25.43,1],[-26.58,16.37,1],[-108.18,-25.43,1],[146.72,59.1,1],[-153.42,-16.37,1],[-146.72,-59.1,1],[153.42,16.37,1],[-33.28,59.1,1],[26.58,-16.37,1],[33.28,-59.1,1],[-71.82,25.43,1],[108.18,25.43,1],[-136.55,26.52,1],[144.03,-40.51,1],[43.45,26.52,1],[-55.5,-37.97,1],[35.97,40.51,1],[55.5,37.97,1],[-35.97,-40.51,1],[124.5,-37.97,1],[-144.03,40.51,1],[-124.5,37.97,1],[136.55,-26.52,1],[-43.45,-26.52,1],[-6.52,-1.08,1],[-170.58,83.4,1],[173.48,-1.08,1],[91.09,-6.52,1],[-9.42,-83.4,1],[-91.09,6.52,1],[9.42,83.4,1],[-88.91,-6.52,1],[170.58,-83.4,1],[88.91,6.52,1],[6.52,1.08,1],[-173.48,1.08,1],[-71.13,40.38,1],[138.05,14.26,1],[108.87,40.38,1],[20.82,-46.12,1],[41.95,-14.26,1],[-20.82,46.12,1],[-41.95,14.26,1],[-159.18,-46.12,1],[-138.05,-14.26,1],[159.18,46.12,1],[71.13,-40.38,1],[-108.87,-40.38,1],[-153.97,-27.97,1],[-129.57,-52.52,1],[26.03,-27.97,1],[-120.59,-22.81,1],[-50.43,52.52,1],[120.59,22.81,1],[50.43,-52.52,1],[59.41,-22.81,1],[129.57,52.52,1],[-59.41,22.81,1],[153.97,27.97,1],[-26.03,27.97,1],[-80.23,13.48,1],[166.33,9.49,1],[99.77,13.48,1],[35.29,-73.41,1],[13.67,-9.49,1],[-35.29,73.41,1],[-13.67,9.49,1],[-144.71,-73.41,1],[-166.33,-9.49,1],[144.71,73.41,1],[80.23,-13.48,1],[-99.77,-13.48,1],[55.43,-9,1],[-10.89,34.09,1],[-124.57,-9,1],[105.6,54.41,1],[-169.11,-34.09,1],[-105.6,-54.41,1],[169.11,34.09,1],[-74.4,54.41,1],[10.89,-34.09,1],[74.4,-54.41,1],[-55.43,9,1],[124.57,9,1],[68.32,-7.14,1],[-7.68,21.51,1],[-111.68,-7.14,1],[108.74,67.22,1],[-172.32,-21.51,1],[-108.74,-67.22,1],[172.32,21.51,1],[-71.26,67.22,1],[7.68,-21.51,1],[71.26,-67.22,1],[-68.32,7.14,1],[111.68,7.14,1],[-174.97,36.12,1],[96.85,-53.58,1],[5.03,36.12,1],[-53.77,-4.06,1],[83.15,53.58,1],[53.77,4.06,1],[-83.15,-53.58,1],[126.23,-4.06,1],[-96.85,53.58,1],[-126.23,4.06,1],[174.97,-36.12,1],[-5.03,-36.12,1],[-149.91,16.26,1],[149.81,-56.16,1],[30.09,16.26,1],[-71.37,-28.77,1],[30.19,56.16,1],[71.37,28.77,1],[-30.19,-56.16,1],[108.63,-28.77,1],[-149.81,56.16,1],[-108.63,28.77,1],[149.91,-16.26,1],[-30.09,-16.26,1],[2.52,-51.45,1],[-87.99,38.5,1],[-177.48,-51.45,1],[141.48,1.57,1],[-92.01,-38.5,1],[-141.48,-1.57,1],[92.01,38.5,1],[-38.52,1.57,1],[87.99,-38.5,1],[38.52,-1.57,1],[-2.52,51.45,1],[177.48,51.45,1],[161.12,-9.98,1],[-28.54,-68.73,1],[-18.88,-9.98,1],[-100.54,18.59,1],[-151.46,68.73,1],[100.54,-18.59,1],[151.46,-68.73,1],[79.46,18.59,1],[28.54,68.73,1],[-79.46,-18.59,1],[-161.12,9.98,1],[18.88,9.98,1],[12.84,24.97,1],[64.49,62.11,1],[-167.16,24.97,1],[64.47,11.62,1],[115.51,-62.11,1],[-64.47,-11.62,1],[-115.51,62.11,1],[-115.53,11.62,1],[-64.49,-62.11,1],[115.53,-11.62,1],[-12.84,-24.97,1],[167.16,-24.97,1],[74.13,41.65,1],[42.76,11.79,1],[-105.87,41.65,1],[17.09,45.95,1],[137.24,-11.79,1],[-17.09,-45.95,1],[-137.24,11.79,1],[-162.91,45.95,1],[-42.76,-11.79,1],[162.91,-45.95,1],[-74.13,-41.65,1],[105.87,-41.65,1],[154.04,1.27,1],[2.9,-64.01,1],[-25.96,1.27,1],[-88.59,25.96,1],[177.1,64.01,1],[88.59,-25.96,1],[-177.1,-64.01,1],[91.41,25.96,1],[-2.9,64.01,1],[-91.41,-25.96,1],[-154.04,-1.27,1],[25.96,-1.27,1]],[[24.8,-10.46,1],[-23.76,63.21,1],[-155.2,-10.46,1],[101.5,24.36,1],[-156.24,-63.21,1],[-101.5,-24.36,1],[156.24,63.21,1],[-78.5,24.36,1],[23.76,-63.21,1],[78.5,-24.36,1],[-24.8,10.46,1],[155.2,10.46,1],[-134.64,65.44,1],[108.01,-16.98,1],[45.36,65.44,1],[-17.8,-17.2,1],[71.99,16.98,1],[17.8,17.2,1],[-71.99,-16.98,1],[162.2,-17.2,1],[-108.01,16.98,1],[-162.2,17.2,1],[134.64,-65.44,1],[-45.36,-65.44,1],[177.6,54.85,1],[88.31,-35.12,1],[-2.4,54.85,1],[-35.13,1.38,1],[91.69,35.12,1],[35.13,-1.38,1],[-91.69,-35.12,1],[144.87,1.38,1],[-88.31,35.12,1],[-144.87,-1.38,1],[-177.6,-54.85,1],[2.4,-54.85,1],[157.93,82.01,1],[86.98,-7.4,1],[-22.07,82.01,1],[-7.41,2.99,1],[93.02,7.4,1],[7.41,-2.99,1],[-93.02,-7.4,1],[172.59,2.99,1],[-86.98,7.4,1],[-172.59,-2.99,1],[-157.93,-82.01,1],[22.07,-82.01,1],[42.48,-13.21,1],[-19.17,45.89,1],[-137.52,-13.21,1],[107.66,41.11,1],[-160.83,-45.89,1],[-107.66,-41.11,1],[160.83,45.89,1],[-72.34,41.11,1],[19.17,-45.89,1],[72.34,-41.11,1],[-42.48,13.21,1],[137.52,13.21,1],[28.48,10.9,1],[21.99,59.68,1],[-151.52,10.9,1],[77.65,27.92,1],[158.01,-59.68,1],[-77.65,-27.92,1],[-158.01,59.68,1],[-102.35,27.92,1],[-21.99,-59.68,1],[102.35,-27.92,1],[-28.48,-10.9,1],[151.52,-10.9,1],[-33.79,21.61,1],[144.53,50.59,1],[146.21,21.61,1],[64.51,-31.14,1],[35.47,-50.59,1],[-64.51,31.14,1],[-35.47,50.59,1],[-115.49,-31.14,1],[-144.53,-50.59,1],[115.49,31.14,1],[33.79,-21.61,1],[-146.21,-21.61,1],[-175.53,-31.74,1],[-97.19,-57.98,1],[4.47,-31.74,1],[-121.82,-3.8,1],[-82.81,57.98,1],[121.82,3.8,1],[82.81,-57.98,1],[58.18,-3.8,1],[97.19,57.98,1],[-58.18,3.8,1],[175.53,31.74,1],[-4.47,31.74,1],[89.4,19.43,1],[19.43,.56,1],[-90.6,19.43,1],[1.69,70.56,1],[160.57,-.56,1],[-1.69,-70.56,1],[-160.57,.56,1],[-178.31,70.56,1],[-19.43,-.56,1],[178.31,-70.56,1],[-89.4,-19.43,1],[90.6,-19.43,1],[-27.28,-27.88,1],[-130.91,51.78,1],[152.72,-27.88,1],[120.76,-23.9,1],[-49.09,-51.78,1],[-120.76,23.9,1],[49.09,51.78,1],[-59.24,-23.9,1],[130.91,-51.78,1],[59.24,23.9,1],[27.28,27.88,1],[-152.72,27.88,1],[139.9,-15.44,1],[-23.21,-47.5,1],[-40.1,-15.44,1],[-109.85,38.38,1],[-156.79,47.5,1],[109.85,-38.38,1],[156.79,-47.5,1],[70.15,38.38,1],[23.21,47.5,1],[-70.15,-38.38,1],[-139.9,15.44,1],[40.1,15.44,1],[-2.17,-43.33,1],[-92.29,46.62,1],[177.83,-43.33,1],[133.35,-1.58,1],[-87.71,-46.62,1],[-133.35,1.58,1],[87.71,46.62,1],[-46.65,-1.58,1],[92.29,-46.62,1],[46.65,1.58,1],[2.17,43.33,1],[-177.83,43.33,1],[41.12,27.96,1],[38.91,41.71,1],[-138.88,27.96,1],[54.83,35.51,1],[141.09,-41.71,1],[-54.83,-35.51,1],[-141.09,41.71,1],[-125.17,35.51,1],[-38.91,-41.71,1],[125.17,-35.51,1],[-41.12,-27.96,1],[138.88,-27.96,1],[-126.67,13.75,1],[163.04,-35.46,1],[53.33,13.75,1],[-67.73,-51.18,1],[16.96,35.46,1],[67.73,51.18,1],[-16.96,-35.46,1],[112.27,-51.18,1],[-163.04,35.46,1],[-112.27,51.18,1],[126.67,-13.75,1],[-53.33,-13.75,1],[6.02,-15.42,1],[-69.18,73.47,1],[-173.98,-15.42,1],[105.51,5.8,1],[-110.82,-73.47,1],[-105.51,-5.8,1],[110.82,73.47,1],[-74.49,5.8,1],[69.18,-73.47,1],[74.49,-5.8,1],[-6.02,15.42,1],[173.98,15.42,1],[160.08,33.45,1],[62.71,-51.67,1],[-19.92,33.45,1],[-54.9,16.52,1],[117.29,51.67,1],[54.9,-16.52,1],[-117.29,-51.67,1],[125.1,16.52,1],[-62.71,51.67,1],[-125.1,-16.52,1],[-160.08,-33.45,1],[19.92,-33.45,1],[80.34,6.51,1],[6.61,9.59,1],[-99.66,6.51,1],[55.76,78.37,1],[173.39,-9.59,1],[-55.76,-78.37,1],[-173.39,9.59,1],[-124.24,78.37,1],[-6.61,-9.59,1],[124.24,-78.37,1],[-80.34,-6.51,1],[99.66,-6.51,1],[6.25,24.64,1],[76.64,64.63,1],[-173.75,24.64,1],[65.23,5.68,1],[103.36,-64.63,1],[-65.23,-5.68,1],[-103.36,64.63,1],[-114.77,5.68,1],[-76.64,-64.63,1],[114.77,-5.68,1],[-6.25,-24.64,1],[173.75,-24.64,1],[51.41,-63.45,1],[-68.67,16.19,1],[-128.59,-63.45,1],[162.69,20.45,1],[-111.33,-16.19,1],[-162.69,-20.45,1],[111.33,16.19,1],[-17.31,20.45,1],[68.67,-16.19,1],[17.31,-20.45,1],[-51.41,63.45,1],[128.59,63.45,1],[-50.6,28.85,1],[144.51,33.77,1],[129.4,28.85,1],[49.04,-42.6,1],[35.49,-33.77,1],[-49.04,42.6,1],[-35.49,33.77,1],[-130.96,-42.6,1],[-144.51,-33.77,1],[130.96,42.6,1],[50.6,-28.85,1],[-129.4,-28.85,1]]],t=e[r-1];return t}utils$6.getAmbisonicDecMtx=getAmbisonicDecMtx;utils$6.getTdesign=getTdesign;utils$6.deg2rad=deg2rad;utils$6.rad2deg=rad2deg;utils$6.createNearestLookup=createNearestLookup;utils$6.findNearest=findNearest;Object.defineProperty(ambiMonoEncoder2D,"__esModule",{value:!0});var _classCallCheck2$l=classCallCheck,_classCallCheck3$l=_interopRequireDefault$l(_classCallCheck2$l),_createClass2$k=createClass,_createClass3$k=_interopRequireDefault$l(_createClass2$k);function _interopRequireDefault$l(r){return r&&r.__esModule?r:{default:r}}var utils$5=utils$6,monoEncoder2D=function(){function r(e,t){(0,_classCallCheck3$l.default)(this,r),this.initialized=!1,this.ctx=e,this.order=t,this.nCh=2*t+1,this.azim=0,this.elev=0,this.gains=new Array(this.nCh),this.gainNodes=new Array(this.nCh),this.in=this.ctx.createGain(),this.in.channelCountMode="explicit",this.in.channelCount=1,this.out=this.ctx.createChannelMerger(this.nCh);for(var n=0;n<this.nCh;n++)this.gainNodes[n]=this.ctx.createGain(),this.gainNodes[n].channelCountMode="explicit",this.gainNodes[n].channelCount=1;this.updateGains();for(var n=0;n<this.nCh;n++)this.in.connect(this.gainNodes[n]),this.gainNodes[n].connect(this.out,0,n);this.initialized=!0}return(0,_createClass3$k.default)(r,[{key:"updateGains",value:function(){for(var t=this.order,n=utils$5.getCircHarmonics(t,[this.azim]),i=0;i<this.nCh;i++)this.gainNodes[i].gain.value=n[i][0]}}]),r}();ambiMonoEncoder2D.default=monoEncoder2D;var ambiOrderLimiter={};Object.defineProperty(ambiOrderLimiter,"__esModule",{value:!0});var _classCallCheck2$k=classCallCheck,_classCallCheck3$k=_interopRequireDefault$k(_classCallCheck2$k),_createClass2$j=createClass,_createClass3$j=_interopRequireDefault$k(_createClass2$j);function _interopRequireDefault$k(r){return r&&r.__esModule?r:{default:r}}var orderLimiter=function(){function r(e,t,n){(0,_classCallCheck3$k.default)(this,r),this.ctx=e,this.orderIn=t,n<t?this.orderOut=n:this.orderOut=t,this.nChIn=(this.orderIn+1)*(this.orderIn+1),this.nChOut=(this.orderOut+1)*(this.orderOut+1),this.in=this.ctx.createChannelSplitter(this.nChIn),this.out=this.ctx.createChannelMerger(this.nChOut);for(var i=0;i<this.nChOut;i++)this.in.connect(this.out,i,i)}return(0,_createClass3$j.default)(r,[{key:"updateOrder",value:function(t){if(t<=this.orderIn)this.orderOut=t;else return;this.nChOut=(this.orderOut+1)*(this.orderOut+1),this.out.disconnect(),this.out=this.ctx.createChannelMerger(this.nChOut);for(var n=0;n<this.nChOut;n++)this.in.connect(this.out,n,n)}}]),r}();ambiOrderLimiter.default=orderLimiter;var ambiOrderLimiter2D={};Object.defineProperty(ambiOrderLimiter2D,"__esModule",{value:!0});var _classCallCheck2$j=classCallCheck,_classCallCheck3$j=_interopRequireDefault$j(_classCallCheck2$j),_createClass2$i=createClass,_createClass3$i=_interopRequireDefault$j(_createClass2$i);function _interopRequireDefault$j(r){return r&&r.__esModule?r:{default:r}}var orderLimiter2D=function(){function r(e,t,n){(0,_classCallCheck3$j.default)(this,r),this.ctx=e,this.orderIn=t,n<t?this.orderOut=n:this.orderOut=t,this.nChIn=2*this.orderIn+1,this.nChOut=2*this.orderOut+1,this.in=this.ctx.createChannelSplitter(this.nChIn),this.out=this.ctx.createChannelMerger(this.nChOut);for(var i=0;i<this.nChOut;i++)this.in.connect(this.out,i,i)}return(0,_createClass3$i.default)(r,[{key:"updateOrder",value:function(t){if(t<=this.orderIn)this.orderOut=t;else return;this.nChOut=2*this.orderOut+1,this.out.disconnect(),this.out=this.ctx.createChannelMerger(this.nChOut);for(var n=0;n<this.nChOut;n++)this.in.connect(this.out,n,n)}}]),r}();ambiOrderLimiter2D.default=orderLimiter2D;var ambiOrderWeight={};Object.defineProperty(ambiOrderWeight,"__esModule",{value:!0});var _classCallCheck2$i=classCallCheck,_classCallCheck3$i=_interopRequireDefault$i(_classCallCheck2$i),_createClass2$h=createClass,_createClass3$h=_interopRequireDefault$i(_createClass2$h),_sphericalHarmonicTransform$3=src,jshlib$3=_interopRequireWildcard$4(_sphericalHarmonicTransform$3);function _interopRequireWildcard$4(r){if(r&&r.__esModule)return r;var e={};if(r!=null)for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t]);return e.default=r,e}function _interopRequireDefault$i(r){return r&&r.__esModule?r:{default:r}}var orderWeight=function(){function r(e,t){(0,_classCallCheck3$i.default)(this,r),this.ctx=e,this.order=t,this.nCh=(this.order+1)*(this.order+1),this.in=this.ctx.createChannelSplitter(this.nCh),this.out=this.ctx.createChannelMerger(this.nCh),this.gains=new Array(this.nCh),this.orderGains=new Array(this.order+1),this.orderGains.fill(1);for(var n=0;n<this.nCh;n++)this.gains[n]=this.ctx.createGain(),this.in.connect(this.gains[n],n,0),this.gains[n].connect(this.out,0,n)}return(0,_createClass3$h.default)(r,[{key:"updateOrderGains",value:function(){for(var t,n=0;n<this.nCh;n++)t=Math.floor(Math.sqrt(n)),this.gains[n].gain.value=this.orderGains[t]}},{key:"computeMaxRECoeffs",value:function(){var t=this.order;this.orderGains[0]=1;for(var n=0,i=0,s=0,a=1;a<=t;a++)s=jshlib$3.recurseLegendrePoly(a,[Math.cos(2.406809/(t+1.51))],n,i),this.orderGains[a]=s[0][0],i=n,n=s}}]),r}();ambiOrderWeight.default=orderWeight;var ambiSceneRotator={};Object.defineProperty(ambiSceneRotator,"__esModule",{value:!0});var _classCallCheck2$h=classCallCheck,_classCallCheck3$h=_interopRequireDefault$h(_classCallCheck2$h),_createClass2$g=createClass,_createClass3$g=_interopRequireDefault$h(_createClass2$g),_sphericalHarmonicTransform$2=src,jshlib$2=_interopRequireWildcard$3(_sphericalHarmonicTransform$2);function _interopRequireWildcard$3(r){if(r&&r.__esModule)return r;var e={};if(r!=null)for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t]);return e.default=r,e}function _interopRequireDefault$h(r){return r&&r.__esModule?r:{default:r}}var sceneRotator=function(){function r(e,t){(0,_classCallCheck3$h.default)(this,r),this.ctx=e,this.order=t,this.nCh=(t+1)*(t+1),this.yaw=0,this.pitch=0,this.roll=0,this.rotMtx=numeric.identity(this.nCh),this.rotMtxNodes=new Array(this.order),this.in=this.ctx.createChannelSplitter(this.nCh),this.out=this.ctx.createChannelMerger(this.nCh);for(var n=1;n<=this.order;n++){for(var i=new Array(2*n+1),s=0;s<2*n+1;s++){i[s]=new Array(2*n+1);for(var a=0;a<2*n+1;a++)i[s][a]=this.ctx.createGain(),s==a?i[s][a].gain.value=1:i[s][a].gain.value=0}this.rotMtxNodes[n-1]=i}this.in.connect(this.out,0,0);var o=1;for(n=1;n<=this.order;n++){for(s=0;s<2*n+1;s++)for(a=0;a<2*n+1;a++)this.in.connect(this.rotMtxNodes[n-1][s][a],o+a,0),this.rotMtxNodes[n-1][s][a].connect(this.out,0,o+s);o=o+2*n+1}}return(0,_createClass3$g.default)(r,[{key:"updateRotMtx",value:function(){var t=this.yaw*Math.PI/180,n=this.pitch*Math.PI/180,i=this.roll*Math.PI/180;this.rotMtx=jshlib$2.getSHrotMtx(jshlib$2.yawPitchRoll2Rzyx(t,n,i),this.order);for(var s=1,a=1;a<this.order+1;a++){for(var o=0;o<2*a+1;o++)for(var c=0;c<2*a+1;c++)this.rotMtxNodes[a-1][o][c].gain.value=this.rotMtx[s+o][s+c];s=s+2*a+1}}}]),r}();ambiSceneRotator.default=sceneRotator;var ambiSceneRotator2D={};Object.defineProperty(ambiSceneRotator2D,"__esModule",{value:!0});var _classCallCheck2$g=classCallCheck,_classCallCheck3$g=_interopRequireDefault$g(_classCallCheck2$g),_createClass2$f=createClass,_createClass3$f=_interopRequireDefault$g(_createClass2$f);function _interopRequireDefault$g(r){return r&&r.__esModule?r:{default:r}}var sceneRotator2D=function(){function r(e,t){(0,_classCallCheck3$g.default)(this,r),this.ctx=e,this.order=t,this.nCh=2*t+1,this.yaw=0,this.in=this.ctx.createChannelSplitter(this.nCh),this.out=this.ctx.createChannelMerger(this.nCh),this.rotMtxNodes=new Array(2*this.order),this.in.connect(this.out,0,0);for(var n=0;n<2*this.order;n=n+2){var i=new Array(2);i[0]=this.ctx.createGain(),i[1]=this.ctx.createGain();var s=new Array(2);s[0]=this.ctx.createGain(),s[1]=this.ctx.createGain(),this.rotMtxNodes[n]=i,this.rotMtxNodes[n+1]=s,this.in.connect(this.rotMtxNodes[n][0],n+1,0),this.rotMtxNodes[n][0].connect(this.out,0,n+1),this.in.connect(this.rotMtxNodes[n][1],n+2,0),this.rotMtxNodes[n][1].connect(this.out,0,n+1),this.in.connect(this.rotMtxNodes[n+1][0],n+1,0),this.rotMtxNodes[n+1][0].connect(this.out,0,n+2),this.in.connect(this.rotMtxNodes[n+1][1],n+2,0),this.rotMtxNodes[n+1][1].connect(this.out,0,n+2)}this.updateRotMtx()}return(0,_createClass3$f.default)(r,[{key:"updateRotMtx",value:function(){for(var t=this.yaw*Math.PI/180,n=1,i=0;i<2*this.order;i=i+2)this.rotMtxNodes[i][0].gain.value=Math.cos(n*t),this.rotMtxNodes[i][1].gain.value=Math.sin(n*t),this.rotMtxNodes[i+1][0].gain.value=-Math.sin(n*t),this.rotMtxNodes[i+1][1].gain.value=Math.cos(n*t),n++}}]),r}();ambiSceneRotator2D.default=sceneRotator2D;var ambiSceneMirror={};Object.defineProperty(ambiSceneMirror,"__esModule",{value:!0});var _classCallCheck2$f=classCallCheck,_classCallCheck3$f=_interopRequireDefault$f(_classCallCheck2$f),_createClass2$e=createClass,_createClass3$e=_interopRequireDefault$f(_createClass2$e);function _interopRequireDefault$f(r){return r&&r.__esModule?r:{default:r}}var sceneMirror=function(){function r(e,t){(0,_classCallCheck3$f.default)(this,r),this.ctx=e,this.order=t,this.nCh=(t+1)*(t+1),this.mirrorPlane=0,this.in=this.ctx.createChannelSplitter(this.nCh),this.out=this.ctx.createChannelMerger(this.nCh),this.gains=new Array(this.nCh);for(var n=0;n<this.nCh;n++)this.gains[n]=this.ctx.createGain(),this.gains[n].gain.value=1,this.in.connect(this.gains[n],n,0),this.gains[n].connect(this.out,0,n)}return(0,_createClass3$e.default)(r,[{key:"reset",value:function(){for(var t=0;t<this.nCh;t++)this.gains[t].gain.value=1}},{key:"mirror",value:function(t){switch(t){case 0:this.mirrorPlane=0,this.reset();break;case 1:this.reset(),this.mirrorPlane=1;for(var s,n=0;n<=this.order;n++)for(var i=-n;i<=n;i++)s=n*n+n+i,(i<0&&i%2==0||i>0&&i%2==1)&&(this.gains[s].gain.value=-1);break;case 2:this.reset(),this.mirrorPlane=2;for(var s,n=0;n<=this.order;n++)for(var i=-n;i<=n;i++)s=n*n+n+i,i<0&&(this.gains[s].gain.value=-1);break;case 3:this.reset(),this.mirrorPlane=3;for(var s,n=0;n<=this.order;n++)for(var i=-n;i<=n;i++)s=n*n+n+i,(i+n)%2==1&&(this.gains[s].gain.value=-1);break;default:console.log("The mirroring planes can be either 1 (yz), 2 (xz), 3 (xy), or 0 (no mirroring). Value set to 0."),this.mirrorPlane=0,this.reset()}}}]),r}();ambiSceneMirror.default=sceneMirror;var ambiSceneMirror2D={};Object.defineProperty(ambiSceneMirror2D,"__esModule",{value:!0});var _classCallCheck2$e=classCallCheck,_classCallCheck3$e=_interopRequireDefault$e(_classCallCheck2$e),_createClass2$d=createClass,_createClass3$d=_interopRequireDefault$e(_createClass2$d);function _interopRequireDefault$e(r){return r&&r.__esModule?r:{default:r}}var sceneMirror2D=function(){function r(e,t){(0,_classCallCheck3$e.default)(this,r),this.ctx=e,this.order=t,this.nCh=2*t+1,this.mirrorPlane=0,this.in=this.ctx.createChannelSplitter(this.nCh),this.out=this.ctx.createChannelMerger(this.nCh),this.gains=new Array(this.nCh);for(var n=0;n<this.nCh;n++)this.gains[n]=this.ctx.createGain(),this.gains[n].gain.value=1,this.in.connect(this.gains[n],n,0),this.gains[n].connect(this.out,0,n)}return(0,_createClass3$d.default)(r,[{key:"reset",value:function(){for(var t=0;t<this.nCh;t++)this.gains[t].gain.value=1}},{key:"mirror",value:function(t){switch(t){case 0:this.mirrorPlane=0,this.reset();break;case 1:this.reset(),this.mirrorPlane=1;for(var n=2;n<this.nCh;n++)this.gains[n].gain.value=-1,n%2!=0&&(n=n+2);break;case 2:this.reset(),this.mirrorPlane=2;for(var n=0;n<this.nCh;n++)n%2!=0&&(this.gains[n].gain.value=-1);break;case 3:console.log("up-down mirroring in 2D mode not possible");break;default:console.log("The mirroring planes can be either 1 (yz), 2 (xz) or 0 (no mirroring). Value set to 0."),this.mirrorPlane=0,this.reset()}}}]),r}();ambiSceneMirror2D.default=sceneMirror2D;var ambiBinauralDecoder={};Object.defineProperty(ambiBinauralDecoder,"__esModule",{value:!0});var _classCallCheck2$d=classCallCheck,_classCallCheck3$d=_interopRequireDefault$d(_classCallCheck2$d),_createClass2$c=createClass,_createClass3$c=_interopRequireDefault$d(_createClass2$c);function _interopRequireDefault$d(r){return r&&r.__esModule?r:{default:r}}var binDecoder=function(){function r(e,t){(0,_classCallCheck3$d.default)(this,r),this.initialized=!1,this.ctx=e,this.order=t,this.nCh=(t+1)*(t+1),this.decFilters=new Array(this.nCh),this.decFilterNodes=new Array(this.nCh),this.in=this.ctx.createChannelSplitter(this.nCh),this.out=this.ctx.createChannelMerger(2),this.out.channelCountMode="explicit",this.out.channelCount=1,this.gainMid=this.ctx.createGain(),this.gainSide=this.ctx.createGain(),this.invertSide=this.ctx.createGain(),this.gainMid.gain.value=1,this.gainSide.gain.value=1,this.invertSide.gain.value=-1;for(var n=0;n<this.nCh;n++)this.decFilterNodes[n]=this.ctx.createConvolver(),this.decFilterNodes[n].normalize=!1;this.resetFilters();for(var n=0;n<this.nCh;n++){this.in.connect(this.decFilterNodes[n],n,0);var i=Math.floor(Math.sqrt(n)),s=n-i*i-i;s>=0?this.decFilterNodes[n].connect(this.gainMid):this.decFilterNodes[n].connect(this.gainSide)}this.gainMid.connect(this.out,0,0),this.gainSide.connect(this.out,0,0),this.gainMid.connect(this.out,0,1),this.gainSide.connect(this.invertSide,0,0),this.invertSide.connect(this.out,0,1),this.initialized=!0}return(0,_createClass3$c.default)(r,[{key:"updateFilters",value:function(t){for(var n=0;n<this.nCh;n++)this.decFilters[n]=this.ctx.createBuffer(1,t.length,t.sampleRate),this.decFilters[n].getChannelData(0).set(t.getChannelData(n)),this.decFilterNodes[n].buffer=this.decFilters[n]}},{key:"resetFilters",value:function(){var t=new Array(this.nCh);t.fill(0),t[0]=.5,t[1]=.5/Math.sqrt(3);for(var n=0;n<this.nCh;n++){this.decFilters[n]=this.ctx.createBuffer(1,64,this.ctx.sampleRate);for(var i=0;i<64;i++)this.decFilters[n].getChannelData(0)[i]=0;this.decFilters[n].getChannelData(0)[0]=t[n],this.decFilterNodes[n].buffer=this.decFilters[n]}}}]),r}();ambiBinauralDecoder.default=binDecoder;var ambiBinauralDecoder2D={};Object.defineProperty(ambiBinauralDecoder2D,"__esModule",{value:!0});var _classCallCheck2$c=classCallCheck,_classCallCheck3$c=_interopRequireDefault$c(_classCallCheck2$c),_createClass2$b=createClass,_createClass3$b=_interopRequireDefault$c(_createClass2$b);function _interopRequireDefault$c(r){return r&&r.__esModule?r:{default:r}}var binDecoder2D=function(){function r(e,t){(0,_classCallCheck3$c.default)(this,r),this.initialized=!1,this.ctx=e,this.order=t,this.nCh=2*t+1,this.decFilters=new Array(this.nCh),this.decFilterNodes=new Array(this.nCh),this.in=this.ctx.createChannelSplitter(this.nCh),this.out=this.ctx.createChannelMerger(2),this.out.channelCountMode="explicit",this.out.channelCount=1,this.gainMid=this.ctx.createGain(),this.gainSide=this.ctx.createGain(),this.invertSide=this.ctx.createGain(),this.gainMid.gain.value=1,this.gainSide.gain.value=1,this.invertSide.gain.value=-1;for(var n=0;n<this.nCh;n++)this.decFilterNodes[n]=this.ctx.createConvolver(),this.decFilterNodes[n].normalize=!1;this.resetFilters();for(var n=0;n<this.nCh;n++)this.in.connect(this.decFilterNodes[n],n,0),n%2==0?this.decFilterNodes[n].connect(this.gainMid):this.decFilterNodes[n].connect(this.gainSide);this.gainMid.connect(this.out,0,0),this.gainSide.connect(this.out,0,0),this.gainMid.connect(this.out,0,1),this.gainSide.connect(this.invertSide,0,0),this.invertSide.connect(this.out,0,1),this.initialized=!0}return(0,_createClass3$b.default)(r,[{key:"updateFilters",value:function(t){for(var n=0;n<this.nCh;n++)this.decFilters[n]=this.ctx.createBuffer(1,t.length,t.sampleRate),this.decFilters[n].getChannelData(0).set(t.getChannelData(n)),this.decFilterNodes[n].buffer=this.decFilters[n]}},{key:"resetFilters",value:function(){var t=new Array(this.nCh);t.fill(0),t[0]=.5,t[1]=.5/Math.sqrt(3);for(var n=0;n<this.nCh;n++){this.decFilters[n]=this.ctx.createBuffer(1,64,this.ctx.sampleRate);for(var i=0;i<64;i++)this.decFilters[n].getChannelData(0)[i]=0;this.decFilters[n].getChannelData(0)[0]=t[n],this.decFilterNodes[n].buffer=this.decFilters[n]}}}]),r}();ambiBinauralDecoder2D.default=binDecoder2D;var ambiDecoder={};Object.defineProperty(ambiDecoder,"__esModule",{value:!0});var _classCallCheck2$b=classCallCheck,_classCallCheck3$b=_interopRequireDefault$b(_classCallCheck2$b),_createClass2$a=createClass,_createClass3$a=_interopRequireDefault$b(_createClass2$a);function _interopRequireDefault$b(r){return r&&r.__esModule?r:{default:r}}var utils$4=utils$6,decoder$1=function(){function r(e,t){(0,_classCallCheck3$b.default)(this,r),this.ctx=e,this.order=t,this.nCh=(t+1)*(t+1),this.nSpk=0,this._decodingMatrix=[],this._spkSphPosArray=[],this.in=this.ctx.createChannelSplitter(this.nCh),this.out=this.ctx.createChannelMerger(1),this._spkSphPosArray=this._getDefaultSpkConfig(this.order),this._updateDecodeMtx(this._spkSphPosArray)}return(0,_createClass3$a.default)(r,[{key:"_updateDecodeMtx",value:function(t){this.nSpk=t.length,this.out=this.ctx.createChannelMerger(this.nSpk),this._decodingMatrix=utils$4.getAmbisonicDecMtx(t,this.order),this.mtxGain=new Array(this.nCh);for(var n=0;n<this.nCh;n++){this.mtxGain[n]=new Array(this.nSpk);for(var i=0;i<this.nSpk;i++){var s=this.ctx.createGain();s.gain.value=this._decodingMatrix[i][n],this.in.connect(s,n,0),s.connect(this.out,0,i),this.mtxGain[n][i]=s}}}},{key:"_getDefaultSpkConfig",value:function(t){var n=[];switch(t){case 1:n=[[0,0,1],[90,0,1],[180,0,1],[270,0,1],[0,90,1],[0,-90,1]];break;case 2:n=[[180,-31.7161,.5878],[180,31.7161,.5878],[-121.7161,0,.5878],[121.7161,0,.5878],[-90,-58.2839,.5878],[-90,58.2839,.5878],[90,-58.2839,.5878],[90,58.2839,.5878],[-58.2839,0,.5878],[58.2839,0,.5878],[0,-31.7161,.5878],[0,31.7161,.5878]];break;case 3:n=[[-159.0931,0,.5352],[159.0931,0,.5352],[-135,-35.2644,.5352],[-135,35.2644,.5352],[135,-35.2644,.5352],[135,35.2644,.5352],[180,-69.0931,.5352],[180,69.0931,.5352],[-90,-20.9069,.5352],[-90,20.9069,.5352],[90,-20.9069,.5352],[90,20.9069,.5352],[0,-69.0931,.5352],[0,69.0931,.5352],[-45,-35.2644,.5352],[-45,35.2644,.5352],[45,-35.2644,.5352],[45,35.2644,.5352],[-20.9069,0,.5352],[20.9069,0,.5352]];break;default:console.error("unsupported default order:",t)}return n}},{key:"speakerPos",set:function(t){t===void 0&&(t=this._getDefaultSpkConfig(this.order)),this._spkSphPosArray=t,this.out.disconnect(),this._updateDecodeMtx(t)},get:function(){return this._spkSphPosArray}}]),r}();ambiDecoder.default=decoder$1;var ambiConvolver={};Object.defineProperty(ambiConvolver,"__esModule",{value:!0});var _classCallCheck2$a=classCallCheck,_classCallCheck3$a=_interopRequireDefault$a(_classCallCheck2$a),_createClass2$9=createClass,_createClass3$9=_interopRequireDefault$a(_createClass2$9);function _interopRequireDefault$a(r){return r&&r.__esModule?r:{default:r}}var convolver$1=function(){function r(e,t){(0,_classCallCheck3$a.default)(this,r),this.initialized=!1,this.ctx=e,this.order=t,this.nCh=(t+1)*(t+1),this.encFilters=new Array(this.nCh),this.encFilterNodes=new Array(this.nCh),this.in=this.ctx.createGain(),this.in.channelCountMode="explicit",this.in.channelCount=1,this.out=this.ctx.createChannelMerger(this.nCh);for(var n=0;n<this.nCh;n++)this.encFilterNodes[n]=this.ctx.createConvolver(),this.encFilterNodes[n].normalize=!1;for(var n=0;n<this.nCh;n++)this.in.connect(this.encFilterNodes[n]),this.encFilterNodes[n].connect(this.out,0,n);this.initialized=!0}return(0,_createClass3$9.default)(r,[{key:"updateFilters",value:function(t){for(var n=0;n<this.nCh;n++)this.encFilters[n]=this.ctx.createBuffer(1,t.length,t.sampleRate),this.encFilters[n].getChannelData(0).set(t.getChannelData(n)),this.encFilterNodes[n].buffer=this.encFilters[n]}}]),r}();ambiConvolver.default=convolver$1;var ambiVirtualMic={};Object.defineProperty(ambiVirtualMic,"__esModule",{value:!0});var _classCallCheck2$9=classCallCheck,_classCallCheck3$9=_interopRequireDefault$9(_classCallCheck2$9),_createClass2$8=createClass,_createClass3$8=_interopRequireDefault$9(_createClass2$8),_sphericalHarmonicTransform$1=src,jshlib$1=_interopRequireWildcard$2(_sphericalHarmonicTransform$1);function _interopRequireWildcard$2(r){if(r&&r.__esModule)return r;var e={};if(r!=null)for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t]);return e.default=r,e}function _interopRequireDefault$9(r){return r&&r.__esModule?r:{default:r}}var virtualMic=function(){function r(e,t){(0,_classCallCheck3$9.default)(this,r),this.initialized=!1,this.ctx=e,this.order=t,this.nCh=(t+1)*(t+1),this.azim=0,this.elev=0,this.vmicGains=new Array(this.nCh),this.vmicGainNodes=new Array(this.nCh),this.vmicCoeffs=new Array(this.order+1),this.vmicPattern="hypercardioid",this.in=this.ctx.createChannelSplitter(this.nCh),this.out=this.ctx.createGain();for(var n=0;n<this.nCh;n++)this.vmicGainNodes[n]=this.ctx.createGain();for(this.SHxyz=new Array(this.nCh),this.SHxyz.fill(0),this.updatePattern(),this.updateOrientation(),n=0;n<this.nCh;n++)this.in.connect(this.vmicGainNodes[n],n,0),this.vmicGainNodes[n].connect(this.out);this.initialized=!0}return(0,_createClass3$8.default)(r,[{key:"updatePattern",value:function(){function t(a){for(var o=new Array(a+1),c=0;c<=a;c++)o[c]=jshlib$1.factorial(a)*jshlib$1.factorial(a)/(jshlib$1.factorial(a+c+1)*jshlib$1.factorial(a-c));return o}function n(a){for(var o=new Array(a+1),c=(a+1)*(a+1),l=0;l<=a;l++)o[l]=1/c;return o}function i(a){switch(a){case 1:var o=[.366,.2113];break;case 2:var o=[.2362,.1562,.059];break;case 3:var o=[.1768,.1281,.0633,.0175];break;case 4:var o=[.1414,.1087,.0623,.0247,.0054];break;default:console.error("Orders should be in the range of 1-4 at the moment.");return}return o}function s(a){var o=new Array(a+1);o[0]=1;for(var c=0,l=0,u=0,h=1;h<a+1;h++)u=jshlib$1.recurseLegendrePoly(h,[Math.cos(2.406809/(a+1.51))],c,l),o[h]=u[0][0],l=c,c=u;for(var p=0,h=0;h<=a;h++)p+=o[h]*(2*h+1);for(var h=0;h<=a;h++)o[h]=o[h]/p;return o}switch(this.vmicPattern){case"cardioid":this.vmicCoeffs=t(this.order);break;case"supercardioid":this.vmicCoeffs=i(this.order);break;case"hypercardioid":this.vmicCoeffs=n(this.order);break;case"max_rE":this.vmicCoeffs=s(this.order);break;default:this.vmicPattern="hypercardioid",this.vmicCoeffs=n(this.order)}this.updateGains()}},{key:"updateOrientation",value:function(){for(var t=this.azim*Math.PI/180,n=this.elev*Math.PI/180,i=jshlib$1.computeRealSH(this.order,[[t,n]]),s=0;s<this.nCh;s++)this.SHxyz[s]=i[s][0];this.updateGains()}},{key:"updateGains",value:function(){for(var t,n=0;n<=this.order;n++)for(var i=-n;i<=n;i++)t=n*n+n+i,this.vmicGains[t]=this.vmicCoeffs[n]*this.SHxyz[t];for(var s=0;s<this.nCh;s++)this.vmicGainNodes[s].gain.value=this.vmicGains[s]}}]),r}();ambiVirtualMic.default=virtualMic;var ambiRmsAnalyser={};if(commonjsGlobal.AnalyserNode&&!commonjsGlobal.AnalyserNode.prototype.getFloatTimeDomainData){var uint8=new Uint8Array(2048);commonjsGlobal.AnalyserNode.prototype.getFloatTimeDomainData=function(r){this.getByteTimeDomainData(uint8);for(var e=0,t=r.length;e<t;e++)r[e]=(uint8[e]-128)*.0078125}}Object.defineProperty(ambiRmsAnalyser,"__esModule",{value:!0});var _classCallCheck2$8=classCallCheck,_classCallCheck3$8=_interopRequireDefault$8(_classCallCheck2$8),_createClass2$7=createClass,_createClass3$7=_interopRequireDefault$8(_createClass2$7);function _interopRequireDefault$8(r){return r&&r.__esModule?r:{default:r}}var rmsAnalyser=function(){function r(e,t){(0,_classCallCheck3$8.default)(this,r),this.ctx=e,this.order=t,this.nCh=(t+1)*(t+1),this.fftSize=2048,this.in=this.ctx.createChannelSplitter(this.nCh),this.out=this.ctx.createChannelMerger(this.nCh),this.analysers=new Array(this.nCh),this.analBuffers=new Array(this.nCh);for(var n=0;n<this.nCh;n++)this.analysers[n]=this.ctx.createAnalyser(),this.analysers[n].fftSize=this.fftSize,this.analysers[n].smoothingTimeConstant=0,this.analBuffers[n]=new Float32Array(this.fftSize),this.in.connect(this.analysers[n],n,0),this.analysers[n].connect(this.out,0,n)}return(0,_createClass3$7.default)(r,[{key:"updateBuffers",value:function(){for(var t=0;t<this.nCh;t++)this.analysers[t].getFloatTimeDomainData(this.analBuffers[t])}},{key:"computeRMS",value:function(){var t=new Array(this.nCh);t.fill(0);for(var n=0;n<this.nCh;n++){for(var i=0;i<this.fftSize;i++)t[n]=t[n]+this.analBuffers[n][i]*this.analBuffers[n][i];t[n]=Math.sqrt(t[n]/this.fftSize)}return t}}]),r}();ambiRmsAnalyser.default=rmsAnalyser;var ambiPowermapAnalyser={};Object.defineProperty(ambiPowermapAnalyser,"__esModule",{value:!0});var _classCallCheck2$7=classCallCheck,_classCallCheck3$7=_interopRequireDefault$7(_classCallCheck2$7),_createClass2$6=createClass,_createClass3$6=_interopRequireDefault$7(_createClass2$6),_numeric=numeric1_2_6,numeric$1=_interopRequireWildcard$1(_numeric),_sphericalHarmonicTransform=src,jshlib=_interopRequireWildcard$1(_sphericalHarmonicTransform);function _interopRequireWildcard$1(r){if(r&&r.__esModule)return r;var e={};if(r!=null)for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t]);return e.default=r,e}function _interopRequireDefault$7(r){return r&&r.__esModule?r:{default:r}}var utils$3=utils$6,powermapAnalyser=function(){function r(e,t,n){(0,_classCallCheck3$7.default)(this,r),this.ctx=e,this.order=t,this.nCh=(t+1)*(t+1),this.fftSize=2048,this.analysers=new Array(this.nCh),this.analBuffers=new Array(this.nCh),this.in=this.ctx.createChannelSplitter(this.nCh),this.out=this.ctx.createChannelMerger(this.nCh);for(var i=0;i<this.nCh;i++)this.analysers[i]=this.ctx.createAnalyser(),this.analysers[i].fftSize=this.fftSize,this.analysers[i].smoothingTimeConstant=0,this.analBuffers[i]=new Float32Array(this.fftSize);for(var s=0;s<this.nCh;s++)this.in.connect(this.out,s,s),this.in.connect(this.analysers[s],s,0);var a=utils$3.getTdesign(4*t);this.td_dirs_rad=utils$3.deg2rad(a),this.SHmtx=jshlib.computeRealSH(this.order,this.td_dirs_rad),this.mode=n}return(0,_createClass3$6.default)(r,[{key:"updateBuffers",value:function(){for(var t=0;t<this.nCh;t++)this.analysers[t].getFloatTimeDomainData(this.analBuffers[t])}},{key:"computePowermap",value:function(){for(var t=this.td_dirs_rad.length,n=numeric$1.dot(numeric$1.transpose(this.SHmtx),this.analBuffers),i=new Array(t),s=0;s<t;s++){for(var a=0;a<this.fftSize;a++){var o=0;o=o+n[s][a]*n[s][a]}var o=o/this.fftSize;i[s]=[this.td_dirs_rad[s][0],this.td_dirs_rad[s][1],o]}if(this.mode==0)return i;if(this.mode==1){var c=jshlib.forwardSHT(2*this.order,i);return c}}}]),r}();ambiPowermapAnalyser.default=powermapAnalyser;var ambiIntensityAnalyser={};Object.defineProperty(ambiIntensityAnalyser,"__esModule",{value:!0});var _classCallCheck2$6=classCallCheck,_classCallCheck3$6=_interopRequireDefault$6(_classCallCheck2$6),_createClass2$5=createClass,_createClass3$5=_interopRequireDefault$6(_createClass2$5);function _interopRequireDefault$6(r){return r&&r.__esModule?r:{default:r}}var intensityAnalyser=function(){function r(e){(0,_classCallCheck3$6.default)(this,r),this.ctx=e,this.fftSize=2048,this.in=this.ctx.createChannelSplitter(4),this.out=this.ctx.createChannelMerger(4),this.gains=new Array(3);for(var t=0;t<3;t++)this.gains[t]=this.ctx.createGain(),this.gains[t].gain.value=1/Math.sqrt(3);for(this.analysers=new Array(4),this.analBuffers=new Array(4),t=0;t<4;t++)this.analysers[t]=this.ctx.createAnalyser(),this.analysers[t].fftSize=this.fftSize,this.analysers[t].smoothingTimeConstant=0,this.analBuffers[t]=new Float32Array(this.fftSize);for(this.in.connect(this.out,0,0),this.in.connect(this.analysers[0],0,0),this.in.connect(this.gains[1],1,0),this.in.connect(this.gains[2],2,0),this.in.connect(this.gains[0],3,0),t=0;t<3;t++)this.gains[t].connect(this.analysers[t+1],0,0),this.gains[t].connect(this.out,0,t+1)}return(0,_createClass3$5.default)(r,[{key:"updateBuffers",value:function(){for(var t=0;t<4;t++)this.analysers[t].getFloatTimeDomainData(this.analBuffers[t])}},{key:"computeIntensity",value:function(){for(var t=0,n=0,i=0,s=0,a=0,o=0,c=0,l,u,h,p,f,m,g=0;g<this.fftSize;g++)t=t+this.analBuffers[0][g]*this.analBuffers[1][g],n=n+this.analBuffers[0][g]*this.analBuffers[2][g],i=i+this.analBuffers[0][g]*this.analBuffers[3][g],s=s+this.analBuffers[0][g]*this.analBuffers[0][g],a=a+this.analBuffers[1][g]*this.analBuffers[1][g],o=o+this.analBuffers[2][g]*this.analBuffers[2][g],c=c+this.analBuffers[3][g]*this.analBuffers[3][g];l=[t,n,i],u=Math.sqrt(l[0]*l[0]+l[1]*l[1]+l[2]*l[2]),h=(s+a+o+c)/2,p=1-u/(h+1e-7),f=Math.atan2(n,t)*180/Math.PI,m=Math.atan2(l[2],Math.sqrt(l[0]*l[0]+l[1]*l[1]))*180/Math.PI;var v=[f,m,p,h];return v}}]),r}();ambiIntensityAnalyser.default=intensityAnalyser;var ambiIntensityAnalyser2D={};Object.defineProperty(ambiIntensityAnalyser2D,"__esModule",{value:!0});var _classCallCheck2$5=classCallCheck,_classCallCheck3$5=_interopRequireDefault$5(_classCallCheck2$5),_createClass2$4=createClass,_createClass3$4=_interopRequireDefault$5(_createClass2$4);function _interopRequireDefault$5(r){return r&&r.__esModule?r:{default:r}}var intensityAnalyser2D=function(){function r(e){(0,_classCallCheck3$5.default)(this,r),this.ctx=e,this.fftSize=2048,this.in=this.ctx.createChannelSplitter(3),this.out=this.ctx.createChannelMerger(3),this.gains=new Array(2);for(var t=0;t<2;t++)this.gains[t]=this.ctx.createGain(),this.gains[t].gain.value=1/Math.sqrt(3);for(this.analysers=new Array(3),this.analBuffers=new Array(3),t=0;t<3;t++)this.analysers[t]=this.ctx.createAnalyser(),this.analysers[t].fftSize=this.fftSize,this.analysers[t].smoothingTimeConstant=0,this.analBuffers[t]=new Float32Array(this.fftSize);for(this.in.connect(this.out,0,0),this.in.connect(this.analysers[0],0,0),this.in.connect(this.gains[1],1,0),this.in.connect(this.gains[0],2,0),t=0;t<2;t++)this.gains[t].connect(this.analysers[t+1],0,0),this.gains[t].connect(this.out,0,t+1)}return(0,_createClass3$4.default)(r,[{key:"updateBuffers",value:function(){for(var t=0;t<3;t++)this.analysers[t].getFloatTimeDomainData(this.analBuffers[t])}},{key:"computeIntensity",value:function(){for(var t=0,n=0,i=0,s=0,a=0,o,c,l,u,h,p,f=0;f<this.fftSize;f++)t=t+this.analBuffers[0][f]*this.analBuffers[1][f],n=n+this.analBuffers[0][f]*this.analBuffers[2][f],i=i+this.analBuffers[0][f]*this.analBuffers[0][f],s=s+this.analBuffers[1][f]*this.analBuffers[1][f],a=a+this.analBuffers[2][f]*this.analBuffers[2][f];o=[t,n],c=Math.sqrt(o[0]*o[0]+o[1]*o[1]),l=(i+s+a)/2,u=1-c/(l+1e-7),h=-Math.atan2(n,t)*180/Math.PI,p=0;var m=[h,p,u,l];return m}}]),r}();ambiIntensityAnalyser2D.default=intensityAnalyser2D;var hoaLoader={};Object.defineProperty(hoaLoader,"__esModule",{value:!0});var _classCallCheck2$4=classCallCheck,_classCallCheck3$4=_interopRequireDefault$4(_classCallCheck2$4),_createClass2$3=createClass,_createClass3$3=_interopRequireDefault$4(_createClass2$3);function _interopRequireDefault$4(r){return r&&r.__esModule?r:{default:r}}var HOAloader=function(){function r(e,t,n,i){(0,_classCallCheck3$4.default)(this,r),this.context=e,this.order=t,this.nCh=(t+1)*(t+1),this.nChGroups=Math.ceil(this.nCh/8),this.buffers=new Array,this.loadCount=0,this.loaded=!1,this.onLoad=i,this.urls=new Array(this.nChGroups);var s=n.slice(n.length-3,n.length);this.fileExt=s;for(var a=0;a<this.nChGroups;a++)a==this.nChGroups-1?this.urls[a]=n.slice(0,n.length-4)+"_"+o(a*8+1,2)+"-"+o(this.nCh,2)+"ch."+s:this.urls[a]=n.slice(0,n.length-4)+"_"+o(a*8+1,2)+"-"+o(a*8+8,2)+"ch."+s;function o(c,l){return("000000000"+c).substr(-l)}}return(0,_createClass3$3.default)(r,[{key:"loadBuffers",value:function(t,n){var i=new XMLHttpRequest;i.open("GET",t,!0),i.responseType="arraybuffer";var s=this;i.onload=function(){s.context.decodeAudioData(i.response,function(a){if(!a){alert("error decoding file data: "+t);return}s.buffers[n]=a,s.loadCount++,s.loadCount==s.nChGroups&&(s.loaded=!0,s.concatBuffers(),console.log("HOAloader: all buffers loaded and concatenated"),s.onLoad(s.concatBuffer))},function(a){alert("Browser cannot decode audio data:  "+t+`

Error: `+a+`

(If you re using Safari and get a null error, this is most likely due to Apple's shady plan going on to stop the .ogg format from easing web developer's life :)`)})},i.onerror=function(){alert("HOAloader: XHR error")},i.send()}},{key:"load",value:function(){for(var t=0;t<this.nChGroups;++t)this.loadBuffers(this.urls[t],t)}},{key:"concatBuffers",value:function(){if(this.loaded){var t=this.nCh,n=this.nChGroups,i=this.buffers[0].length;this.buffers.forEach(function(l){i=Math.max(i,l.length)});var s=this.buffers[0].sampleRate,a=[1,2,3,4,5,6,7,8];this.fileExt.toLowerCase()=="ogg"&&(console.log("Loading of 8chan OGG files [Chrome/Firefox]: remap channels to correct order!"),a=[1,3,2,7,8,5,6,4]),this.concatBuffer=this.context.createBuffer(t,i,s);for(var o=0;o<n;o++)for(var c=0;c<this.buffers[o].numberOfChannels;c++)this.concatBuffer.getChannelData(o*8+c).set(this.buffers[o].getChannelData(a[c]-1))}}}]),r}();hoaLoader.default=HOAloader;var hrirLoader_local={};Object.defineProperty(hrirLoader_local,"__esModule",{value:!0});var _classCallCheck2$3=classCallCheck,_classCallCheck3$3=_interopRequireDefault$3(_classCallCheck2$3),_createClass2$2=createClass,_createClass3$2=_interopRequireDefault$3(_createClass2$2);function _interopRequireDefault$3(r){return r&&r.__esModule?r:{default:r}}var utils$2=utils$6,HRIRloader_local=function(){function r(e,t,n){(0,_classCallCheck3$3.default)(this,r),this.context=e,this.order=t,this.nCh=(t+1)*(t+1),this.onLoad=n,this.vls_dirs_deg=utils$2.getTdesign(2*this.order),this.nVLS=this.vls_dirs_deg.length,this.nearestLookupRes=[5,5]}return(0,_createClass3$2.default)(r,[{key:"load",value:function(t){var n=this,i=new XMLHttpRequest;i.open("GET",t,!0),i.responseType="json",i.onload=function(){n.parseHrirFromJSON(i.response),n.nearestLookup=utils$2.createNearestLookup(n.hrir_dirs_deg,n.nearestLookupRes);var s=utils$2.findNearest(n.vls_dirs_deg,n.nearestLookup,n.nearestLookupRes);n.nearest_dirs_deg=n.getClosestDirs(s,n.hrir_dirs_deg),n.vls_hrirs=n.getClosestHrirFilters(s,n.hrirs),n.computeDecFilters()},i.send()}},{key:"parseHrirFromJSON",value:function(t){var n=this;this.fs=t.leaves[6].data[0],this.nHrirs=t.leaves[4].data.length,this.nSamples=t.leaves[8].data[0][1].length,this.hrir_dirs_deg=[],t.leaves[4].data.forEach(function(i){n.hrir_dirs_deg.push([i[0],i[1]])}),this.hrirs=[],t.leaves[8].data.forEach(function(i){var s=new Float64Array(i[0]),a=new Float64Array(i[1]);n.hrirs.push([s,a])})}},{key:"getClosestDirs",value:function(t,n){for(var i=t.length,s=[],a=0;a<i;a++)s.push(n[t[a]]);return s}},{key:"getClosestHrirFilters",value:function(t,n){for(var i=t.length,s=[],a=0;a<i;a++)s.push(n[t[a]]);return s}},{key:"computeDecFilters",value:function(){this.decodingMatrix=utils$2.getAmbiBinauralDecMtx(this.nearest_dirs_deg,this.order),this.hoaBuffer=this.getHoaFilterFromHrirFilter(this.nCh,this.nSamples,this.fs,this.vls_hrirs,this.decodingMatrix),this.onLoad(this.hoaBuffer)}},{key:"getHoaFilterFromHrirFilter",value:function(t,n,i,s,a){n>s[0][0].length&&(n=s[0][0].length);for(var o=this.context.createBuffer(t,n,i),c=0;c<t;c++){for(var l=new Float32Array(n),u=0;u<s.length;u++)for(var h=0;h<n;h++)l[h]+=a[u][c]*s[u][0][h];o.getChannelData(c).set(l)}return o}}]),r}();hrirLoader_local.default=HRIRloader_local;var hrirLoader2D_local={};Object.defineProperty(hrirLoader2D_local,"__esModule",{value:!0});var _classCallCheck2$2=classCallCheck,_classCallCheck3$2=_interopRequireDefault$2(_classCallCheck2$2),_createClass2$1=createClass,_createClass3$1=_interopRequireDefault$2(_createClass2$1);function _interopRequireDefault$2(r){return r&&r.__esModule?r:{default:r}}var utils$1=utils$6,HRIRloader2D_local=function(){function r(e,t,n){(0,_classCallCheck3$2.default)(this,r),this.context=e,this.order=t,this.nCh=2*t+1,this.onLoad=n,this.vls_dirs_deg=utils$1.sampleCircle(2*this.order+2),this.nVLS=this.vls_dirs_deg.length,this.nearestLookupRes=[5,5]}return(0,_createClass3$1.default)(r,[{key:"load",value:function(t){var n=this,i=new XMLHttpRequest;i.open("GET",t,!0),i.responseType="json",i.onload=function(){n.parseHrirFromJSON(i.response),n.nearestLookup=utils$1.createNearestLookup(n.hrir_dirs_deg,n.nearestLookupRes);var s=utils$1.findNearest(n.vls_dirs_deg,n.nearestLookup,n.nearestLookupRes);n.nearest_dirs_deg=n.getClosestDirs(s,n.hrir_dirs_deg),n.vls_hrirs=n.getClosestHrirFilters(s,n.hrirs),n.computeDecFilters()},i.send()}},{key:"parseHrirFromJSON",value:function(t){var n=this;this.fs=t.leaves[6].data[0],this.nHrirs=t.leaves[4].data.length,this.nSamples=t.leaves[8].data[0][1].length,this.hrir_dirs_deg=[],t.leaves[4].data.forEach(function(i){n.hrir_dirs_deg.push([i[0],i[1]])}),this.hrirs=[],t.leaves[8].data.forEach(function(i){var s=new Float64Array(i[0]),a=new Float64Array(i[1]);n.hrirs.push([s,a])})}},{key:"getClosestDirs",value:function(t,n){for(var i=t.length,s=[],a=0;a<i;a++)s.push(n[t[a]]);return s}},{key:"getClosestHrirFilters",value:function(t,n){for(var i=t.length,s=[],a=0;a<i;a++)s.push(n[t[a]]);return s}},{key:"computeDecFilters",value:function(){var t=[];t.push(1);for(var n=1;n<this.order+1;n++)t.push(Math.cos(n*Math.PI/(2*this.order+2))),t.push(Math.cos(n*Math.PI/(2*this.order+2)));var i=numeric.diag(t);this.decodingMatrix=numeric.transpose(utils$1.getCircHarmonics(this.order,utils$1.getColumn(this.vls_dirs_deg,0))),this.decodingMatrix=numeric.dot(this.decodingMatrix,i),this.decodingMatrix=numeric.mul(2*Math.PI/this.vls_dirs_deg.length,this.decodingMatrix),this.hoaBuffer=this.getHoaFilterFromHrirFilter(this.nCh,this.nSamples,this.fs,this.vls_hrirs,this.decodingMatrix),this.onLoad(this.hoaBuffer)}},{key:"getHoaFilterFromHrirFilter",value:function(t,n,i,s,a){n>s[0][0].length&&(n=s[0][0].length);for(var o=this.context.createBuffer(t,n,i),c=0;c<t;c++){for(var l=new Float32Array(n),u=0;u<s.length;u++)for(var h=0;h<n;h++)l[h]+=a[u][c]*s[u][0][h];o.getChannelData(c).set(l)}return o}}]),r}();hrirLoader2D_local.default=HRIRloader2D_local;var hrirLoader_ircam={};function commonjsRequire(r){throw new Error('Could not dynamically require "'+r+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var serveSofaHrir$1={exports:{}};(function(r,e){(function(t){r.exports=t()})(function(){return function t(n,i,s){function a(l,u){if(!i[l]){if(!n[l]){var h=typeof commonjsRequire=="function"&&commonjsRequire;if(!u&&h)return h(l,!0);if(o)return o(l,!0);var p=new Error("Cannot find module '"+l+"'");throw p.code="MODULE_NOT_FOUND",p}var f=i[l]={exports:{}};n[l][0].call(f.exports,function(m){var g=n[l][1][m];return a(g||m)},f,f.exports,t,n,i,s)}return i[l].exports}for(var o=typeof commonjsRequire=="function"&&commonjsRequire,c=0;c<s.length;c++)a(s[c]);return a}({1:[function(t,n,i){n.exports={default:t("core-js/library/fn/object/define-property"),__esModule:!0}},{"core-js/library/fn/object/define-property":4}],2:[function(t,n,i){i.default=function(s,a){if(!(s instanceof a))throw new TypeError("Cannot call a class as a function")},i.__esModule=!0},{}],3:[function(t,n,i){var s=t("babel-runtime/core-js/object/define-property").default;i.default=function(){function a(o,c){for(var l=0;l<c.length;l++){var u=c[l];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),s(o,u.key,u)}}return function(o,c,l){return c&&a(o.prototype,c),l&&a(o,l),o}}(),i.__esModule=!0},{"babel-runtime/core-js/object/define-property":1}],4:[function(t,n,i){var s=t("../../modules/$");n.exports=function(o,c,l){return s.setDesc(o,c,l)}},{"../../modules/$":5}],5:[function(t,n,i){var s=Object;n.exports={create:s.create,getProto:s.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:s.getOwnPropertyDescriptor,setDesc:s.defineProperty,setDescs:s.defineProperties,getKeys:s.keys,getNames:s.getOwnPropertyNames,getSymbols:s.getOwnPropertySymbols,each:[].forEach}},{}],6:[function(t,n,i){var s=t("babel-runtime/helpers/create-class").default,a=t("babel-runtime/helpers/class-call-check").default;Object.defineProperty(i,"__esModule",{value:!0});var o=function(){function c(l,u){a(this,c),this.delayTime=0,this.posRead=0,this.posWrite=0,this.fracXi1=0,this.fracYi1=0,this.intDelay=0,this.fracDelay=0,this.a1=void 0,this.sampleRate=l,this.maxDelayTime=u||1,this.bufferSize=this.maxDelayTime*this.sampleRate,this.bufferSize%1!==0&&(this.bufferSize=parseInt(this.bufferSize)+1),this.buffer=new Float32Array(this.bufferSize)}return s(c,[{key:"setDelay",value:function(u){if(u<this.maxDelayTime){this.delayTime=u;var h=u*this.sampleRate;this.intDelay=parseInt(h),this.fracDelay=h-this.intDelay,this.resample(),this.fracDelay!==0&&this.updateThiranCoefficient()}else throw new Error("delayTime > maxDelayTime")}},{key:"getDelay",value:function(){return this.delayTime}},{key:"process",value:function(u){for(var h=new Float32Array(u.length),p=0;p<u.length;p=p+1)this.buffer[this.posWrite]=u[p],h[p]=this.buffer[this.posRead],this.updatePointers();return this.fracDelay===0||(h=new Float32Array(this.fractionalThiranProcess(h))),h}},{key:"updatePointers",value:function(){this.posWrite===this.buffer.length-1?this.posWrite=0:this.posWrite=this.posWrite+1,this.posRead===this.buffer.length-1?this.posRead=0:this.posRead=this.posRead+1}},{key:"updateThiranCoefficient",value:function(){this.a1=(1-this.fracDelay)/(1+this.fracDelay)}},{key:"resample",value:function(){if(this.posWrite-this.intDelay<0){var u=this.intDelay-this.posWrite;this.posRead=this.buffer.length-u}else this.posRead=this.posWrite-this.intDelay}},{key:"fractionalThiranProcess",value:function(u){for(var h=new Float32Array(u.length),p,f,m=this.fracXi1,g=this.fracYi1,v=0;v<u.length;v=v+1)p=u[v],f=this.a1*p+m-this.a1*g,m=p,g=f,h[v]=f;return this.fracXi1=m,this.fracYi1=g,h}}]),c}();i.default=o,n.exports=i.default},{"babel-runtime/helpers/class-call-check":2,"babel-runtime/helpers/create-class":3}],7:[function(t,n,i){n.exports=t("./dist/fractional-delay")},{"./dist/fractional-delay":6}],8:[function(t,n,i){(function(a,o){if(typeof i=="object"&&typeof n=="object")n.exports=o();else{var c=o();for(var l in c)(typeof i=="object"?i:a)[l]=c[l]}})(this,function(){return function(s){var a={};function o(c){if(a[c])return a[c].exports;var l=a[c]={i:c,l:!1,exports:{}};return s[c].call(l.exports,l,l.exports,o),l.l=!0,l.exports}return o.m=s,o.c=a,o.d=function(c,l,u){o.o(c,l)||Object.defineProperty(c,l,{configurable:!1,enumerable:!0,get:u})},o.n=function(c){var l=c&&c.__esModule?function(){return c.default}:function(){return c};return o.d(l,"a",l),l},o.o=function(c,l){return Object.prototype.hasOwnProperty.call(c,l)},o.p="",o(o.s=4)}([function(s,a,o){Object.defineProperty(a,"__esModule",{value:!0}),a.setMatrixArrayType=l,a.toRadian=h,a.equals=p;var c=a.EPSILON=1e-6;a.ARRAY_TYPE=typeof Float32Array<"u"?Float32Array:Array,a.RANDOM=Math.random;function l(f){a.ARRAY_TYPE=f}var u=Math.PI/180;function h(f){return f*u}function p(f,m){return Math.abs(f-m)<=c*Math.max(1,Math.abs(f),Math.abs(m))}},function(s,a,o){Object.defineProperty(a,"__esModule",{value:!0}),a.sub=a.mul=void 0,a.create=h,a.fromMat4=p,a.clone=f,a.copy=m,a.fromValues=g,a.set=v,a.identity=_,a.transpose=L,a.invert=x,a.adjoint=M,a.determinant=R,a.multiply=D,a.translate=I,a.rotate=y,a.scale=S,a.fromTranslation=E,a.fromRotation=O,a.fromScaling=$,a.fromMat2d=H,a.fromQuat=te,a.normalFromMat4=de,a.projection=ve,a.str=ge,a.frob=q,a.add=F,a.subtract=j,a.multiplyScalar=ce,a.multiplyScalarAndAdd=pe,a.exactEquals=_e,a.equals=he;var c=o(0),l=u(c);function u(N){if(N&&N.__esModule)return N;var w={};if(N!=null)for(var G in N)Object.prototype.hasOwnProperty.call(N,G)&&(w[G]=N[G]);return w.default=N,w}function h(){var N=new l.ARRAY_TYPE(9);return N[0]=1,N[1]=0,N[2]=0,N[3]=0,N[4]=1,N[5]=0,N[6]=0,N[7]=0,N[8]=1,N}function p(N,w){return N[0]=w[0],N[1]=w[1],N[2]=w[2],N[3]=w[4],N[4]=w[5],N[5]=w[6],N[6]=w[8],N[7]=w[9],N[8]=w[10],N}function f(N){var w=new l.ARRAY_TYPE(9);return w[0]=N[0],w[1]=N[1],w[2]=N[2],w[3]=N[3],w[4]=N[4],w[5]=N[5],w[6]=N[6],w[7]=N[7],w[8]=N[8],w}function m(N,w){return N[0]=w[0],N[1]=w[1],N[2]=w[2],N[3]=w[3],N[4]=w[4],N[5]=w[5],N[6]=w[6],N[7]=w[7],N[8]=w[8],N}function g(N,w,G,ae,Q,ie,K,le,fe){var Y=new l.ARRAY_TYPE(9);return Y[0]=N,Y[1]=w,Y[2]=G,Y[3]=ae,Y[4]=Q,Y[5]=ie,Y[6]=K,Y[7]=le,Y[8]=fe,Y}function v(N,w,G,ae,Q,ie,K,le,fe,Y){return N[0]=w,N[1]=G,N[2]=ae,N[3]=Q,N[4]=ie,N[5]=K,N[6]=le,N[7]=fe,N[8]=Y,N}function _(N){return N[0]=1,N[1]=0,N[2]=0,N[3]=0,N[4]=1,N[5]=0,N[6]=0,N[7]=0,N[8]=1,N}function L(N,w){if(N===w){var G=w[1],ae=w[2],Q=w[5];N[1]=w[3],N[2]=w[6],N[3]=G,N[5]=w[7],N[6]=ae,N[7]=Q}else N[0]=w[0],N[1]=w[3],N[2]=w[6],N[3]=w[1],N[4]=w[4],N[5]=w[7],N[6]=w[2],N[7]=w[5],N[8]=w[8];return N}function x(N,w){var G=w[0],ae=w[1],Q=w[2],ie=w[3],K=w[4],le=w[5],fe=w[6],Y=w[7],ee=w[8],se=ee*K-le*Y,X=-ee*ie+le*fe,z=Y*ie-K*fe,d=G*se+ae*X+Q*z;return d?(d=1/d,N[0]=se*d,N[1]=(-ee*ae+Q*Y)*d,N[2]=(le*ae-Q*K)*d,N[3]=X*d,N[4]=(ee*G-Q*fe)*d,N[5]=(-le*G+Q*ie)*d,N[6]=z*d,N[7]=(-Y*G+ae*fe)*d,N[8]=(K*G-ae*ie)*d,N):null}function M(N,w){var G=w[0],ae=w[1],Q=w[2],ie=w[3],K=w[4],le=w[5],fe=w[6],Y=w[7],ee=w[8];return N[0]=K*ee-le*Y,N[1]=Q*Y-ae*ee,N[2]=ae*le-Q*K,N[3]=le*fe-ie*ee,N[4]=G*ee-Q*fe,N[5]=Q*ie-G*le,N[6]=ie*Y-K*fe,N[7]=ae*fe-G*Y,N[8]=G*K-ae*ie,N}function R(N){var w=N[0],G=N[1],ae=N[2],Q=N[3],ie=N[4],K=N[5],le=N[6],fe=N[7],Y=N[8];return w*(Y*ie-K*fe)+G*(-Y*Q+K*le)+ae*(fe*Q-ie*le)}function D(N,w,G){var ae=w[0],Q=w[1],ie=w[2],K=w[3],le=w[4],fe=w[5],Y=w[6],ee=w[7],se=w[8],X=G[0],z=G[1],d=G[2],b=G[3],Z=G[4],J=G[5],ue=G[6],oe=G[7],xe=G[8];return N[0]=X*ae+z*K+d*Y,N[1]=X*Q+z*le+d*ee,N[2]=X*ie+z*fe+d*se,N[3]=b*ae+Z*K+J*Y,N[4]=b*Q+Z*le+J*ee,N[5]=b*ie+Z*fe+J*se,N[6]=ue*ae+oe*K+xe*Y,N[7]=ue*Q+oe*le+xe*ee,N[8]=ue*ie+oe*fe+xe*se,N}function I(N,w,G){var ae=w[0],Q=w[1],ie=w[2],K=w[3],le=w[4],fe=w[5],Y=w[6],ee=w[7],se=w[8],X=G[0],z=G[1];return N[0]=ae,N[1]=Q,N[2]=ie,N[3]=K,N[4]=le,N[5]=fe,N[6]=X*ae+z*K+Y,N[7]=X*Q+z*le+ee,N[8]=X*ie+z*fe+se,N}function y(N,w,G){var ae=w[0],Q=w[1],ie=w[2],K=w[3],le=w[4],fe=w[5],Y=w[6],ee=w[7],se=w[8],X=Math.sin(G),z=Math.cos(G);return N[0]=z*ae+X*K,N[1]=z*Q+X*le,N[2]=z*ie+X*fe,N[3]=z*K-X*ae,N[4]=z*le-X*Q,N[5]=z*fe-X*ie,N[6]=Y,N[7]=ee,N[8]=se,N}function S(N,w,G){var ae=G[0],Q=G[1];return N[0]=ae*w[0],N[1]=ae*w[1],N[2]=ae*w[2],N[3]=Q*w[3],N[4]=Q*w[4],N[5]=Q*w[5],N[6]=w[6],N[7]=w[7],N[8]=w[8],N}function E(N,w){return N[0]=1,N[1]=0,N[2]=0,N[3]=0,N[4]=1,N[5]=0,N[6]=w[0],N[7]=w[1],N[8]=1,N}function O(N,w){var G=Math.sin(w),ae=Math.cos(w);return N[0]=ae,N[1]=G,N[2]=0,N[3]=-G,N[4]=ae,N[5]=0,N[6]=0,N[7]=0,N[8]=1,N}function $(N,w){return N[0]=w[0],N[1]=0,N[2]=0,N[3]=0,N[4]=w[1],N[5]=0,N[6]=0,N[7]=0,N[8]=1,N}function H(N,w){return N[0]=w[0],N[1]=w[1],N[2]=0,N[3]=w[2],N[4]=w[3],N[5]=0,N[6]=w[4],N[7]=w[5],N[8]=1,N}function te(N,w){var G=w[0],ae=w[1],Q=w[2],ie=w[3],K=G+G,le=ae+ae,fe=Q+Q,Y=G*K,ee=ae*K,se=ae*le,X=Q*K,z=Q*le,d=Q*fe,b=ie*K,Z=ie*le,J=ie*fe;return N[0]=1-se-d,N[3]=ee-J,N[6]=X+Z,N[1]=ee+J,N[4]=1-Y-d,N[7]=z-b,N[2]=X-Z,N[5]=z+b,N[8]=1-Y-se,N}function de(N,w){var G=w[0],ae=w[1],Q=w[2],ie=w[3],K=w[4],le=w[5],fe=w[6],Y=w[7],ee=w[8],se=w[9],X=w[10],z=w[11],d=w[12],b=w[13],Z=w[14],J=w[15],ue=G*le-ae*K,oe=G*fe-Q*K,xe=G*Y-ie*K,Me=ae*fe-Q*le,me=ae*Y-ie*le,ye=Q*Y-ie*fe,Te=ee*b-se*d,Ce=ee*Z-X*d,Ee=ee*J-z*d,Pe=se*Z-X*b,Ue=se*J-z*b,Fe=X*J-z*Z,Re=ue*Fe-oe*Ue+xe*Pe+Me*Ee-me*Ce+ye*Te;return Re?(Re=1/Re,N[0]=(le*Fe-fe*Ue+Y*Pe)*Re,N[1]=(fe*Ee-K*Fe-Y*Ce)*Re,N[2]=(K*Ue-le*Ee+Y*Te)*Re,N[3]=(Q*Ue-ae*Fe-ie*Pe)*Re,N[4]=(G*Fe-Q*Ee+ie*Ce)*Re,N[5]=(ae*Ee-G*Ue-ie*Te)*Re,N[6]=(b*ye-Z*me+J*Me)*Re,N[7]=(Z*xe-d*ye-J*oe)*Re,N[8]=(d*me-b*xe+J*ue)*Re,N):null}function ve(N,w,G){return N[0]=2/w,N[1]=0,N[2]=0,N[3]=0,N[4]=-2/G,N[5]=0,N[6]=-1,N[7]=1,N[8]=1,N}function ge(N){return"mat3("+N[0]+", "+N[1]+", "+N[2]+", "+N[3]+", "+N[4]+", "+N[5]+", "+N[6]+", "+N[7]+", "+N[8]+")"}function q(N){return Math.sqrt(Math.pow(N[0],2)+Math.pow(N[1],2)+Math.pow(N[2],2)+Math.pow(N[3],2)+Math.pow(N[4],2)+Math.pow(N[5],2)+Math.pow(N[6],2)+Math.pow(N[7],2)+Math.pow(N[8],2))}function F(N,w,G){return N[0]=w[0]+G[0],N[1]=w[1]+G[1],N[2]=w[2]+G[2],N[3]=w[3]+G[3],N[4]=w[4]+G[4],N[5]=w[5]+G[5],N[6]=w[6]+G[6],N[7]=w[7]+G[7],N[8]=w[8]+G[8],N}function j(N,w,G){return N[0]=w[0]-G[0],N[1]=w[1]-G[1],N[2]=w[2]-G[2],N[3]=w[3]-G[3],N[4]=w[4]-G[4],N[5]=w[5]-G[5],N[6]=w[6]-G[6],N[7]=w[7]-G[7],N[8]=w[8]-G[8],N}function ce(N,w,G){return N[0]=w[0]*G,N[1]=w[1]*G,N[2]=w[2]*G,N[3]=w[3]*G,N[4]=w[4]*G,N[5]=w[5]*G,N[6]=w[6]*G,N[7]=w[7]*G,N[8]=w[8]*G,N}function pe(N,w,G,ae){return N[0]=w[0]+G[0]*ae,N[1]=w[1]+G[1]*ae,N[2]=w[2]+G[2]*ae,N[3]=w[3]+G[3]*ae,N[4]=w[4]+G[4]*ae,N[5]=w[5]+G[5]*ae,N[6]=w[6]+G[6]*ae,N[7]=w[7]+G[7]*ae,N[8]=w[8]+G[8]*ae,N}function _e(N,w){return N[0]===w[0]&&N[1]===w[1]&&N[2]===w[2]&&N[3]===w[3]&&N[4]===w[4]&&N[5]===w[5]&&N[6]===w[6]&&N[7]===w[7]&&N[8]===w[8]}function he(N,w){var G=N[0],ae=N[1],Q=N[2],ie=N[3],K=N[4],le=N[5],fe=N[6],Y=N[7],ee=N[8],se=w[0],X=w[1],z=w[2],d=w[3],b=w[4],Z=w[5],J=w[6],ue=w[7],oe=w[8];return Math.abs(G-se)<=l.EPSILON*Math.max(1,Math.abs(G),Math.abs(se))&&Math.abs(ae-X)<=l.EPSILON*Math.max(1,Math.abs(ae),Math.abs(X))&&Math.abs(Q-z)<=l.EPSILON*Math.max(1,Math.abs(Q),Math.abs(z))&&Math.abs(ie-d)<=l.EPSILON*Math.max(1,Math.abs(ie),Math.abs(d))&&Math.abs(K-b)<=l.EPSILON*Math.max(1,Math.abs(K),Math.abs(b))&&Math.abs(le-Z)<=l.EPSILON*Math.max(1,Math.abs(le),Math.abs(Z))&&Math.abs(fe-J)<=l.EPSILON*Math.max(1,Math.abs(fe),Math.abs(J))&&Math.abs(Y-ue)<=l.EPSILON*Math.max(1,Math.abs(Y),Math.abs(ue))&&Math.abs(ee-oe)<=l.EPSILON*Math.max(1,Math.abs(ee),Math.abs(oe))}a.mul=D,a.sub=j},function(s,a,o){Object.defineProperty(a,"__esModule",{value:!0}),a.forEach=a.sqrLen=a.len=a.sqrDist=a.dist=a.div=a.mul=a.sub=void 0,a.create=h,a.clone=p,a.length=f,a.fromValues=m,a.copy=g,a.set=v,a.add=_,a.subtract=L,a.multiply=x,a.divide=M,a.ceil=R,a.floor=D,a.min=I,a.max=y,a.round=S,a.scale=E,a.scaleAndAdd=O,a.distance=$,a.squaredDistance=H,a.squaredLength=te,a.negate=de,a.inverse=ve,a.normalize=ge,a.dot=q,a.cross=F,a.lerp=j,a.hermite=ce,a.bezier=pe,a.random=_e,a.transformMat4=he,a.transformMat3=N,a.transformQuat=w,a.rotateX=G,a.rotateY=ae,a.rotateZ=Q,a.angle=ie,a.str=K,a.exactEquals=le,a.equals=fe;var c=o(0),l=u(c);function u(Y){if(Y&&Y.__esModule)return Y;var ee={};if(Y!=null)for(var se in Y)Object.prototype.hasOwnProperty.call(Y,se)&&(ee[se]=Y[se]);return ee.default=Y,ee}function h(){var Y=new l.ARRAY_TYPE(3);return Y[0]=0,Y[1]=0,Y[2]=0,Y}function p(Y){var ee=new l.ARRAY_TYPE(3);return ee[0]=Y[0],ee[1]=Y[1],ee[2]=Y[2],ee}function f(Y){var ee=Y[0],se=Y[1],X=Y[2];return Math.sqrt(ee*ee+se*se+X*X)}function m(Y,ee,se){var X=new l.ARRAY_TYPE(3);return X[0]=Y,X[1]=ee,X[2]=se,X}function g(Y,ee){return Y[0]=ee[0],Y[1]=ee[1],Y[2]=ee[2],Y}function v(Y,ee,se,X){return Y[0]=ee,Y[1]=se,Y[2]=X,Y}function _(Y,ee,se){return Y[0]=ee[0]+se[0],Y[1]=ee[1]+se[1],Y[2]=ee[2]+se[2],Y}function L(Y,ee,se){return Y[0]=ee[0]-se[0],Y[1]=ee[1]-se[1],Y[2]=ee[2]-se[2],Y}function x(Y,ee,se){return Y[0]=ee[0]*se[0],Y[1]=ee[1]*se[1],Y[2]=ee[2]*se[2],Y}function M(Y,ee,se){return Y[0]=ee[0]/se[0],Y[1]=ee[1]/se[1],Y[2]=ee[2]/se[2],Y}function R(Y,ee){return Y[0]=Math.ceil(ee[0]),Y[1]=Math.ceil(ee[1]),Y[2]=Math.ceil(ee[2]),Y}function D(Y,ee){return Y[0]=Math.floor(ee[0]),Y[1]=Math.floor(ee[1]),Y[2]=Math.floor(ee[2]),Y}function I(Y,ee,se){return Y[0]=Math.min(ee[0],se[0]),Y[1]=Math.min(ee[1],se[1]),Y[2]=Math.min(ee[2],se[2]),Y}function y(Y,ee,se){return Y[0]=Math.max(ee[0],se[0]),Y[1]=Math.max(ee[1],se[1]),Y[2]=Math.max(ee[2],se[2]),Y}function S(Y,ee){return Y[0]=Math.round(ee[0]),Y[1]=Math.round(ee[1]),Y[2]=Math.round(ee[2]),Y}function E(Y,ee,se){return Y[0]=ee[0]*se,Y[1]=ee[1]*se,Y[2]=ee[2]*se,Y}function O(Y,ee,se,X){return Y[0]=ee[0]+se[0]*X,Y[1]=ee[1]+se[1]*X,Y[2]=ee[2]+se[2]*X,Y}function $(Y,ee){var se=ee[0]-Y[0],X=ee[1]-Y[1],z=ee[2]-Y[2];return Math.sqrt(se*se+X*X+z*z)}function H(Y,ee){var se=ee[0]-Y[0],X=ee[1]-Y[1],z=ee[2]-Y[2];return se*se+X*X+z*z}function te(Y){var ee=Y[0],se=Y[1],X=Y[2];return ee*ee+se*se+X*X}function de(Y,ee){return Y[0]=-ee[0],Y[1]=-ee[1],Y[2]=-ee[2],Y}function ve(Y,ee){return Y[0]=1/ee[0],Y[1]=1/ee[1],Y[2]=1/ee[2],Y}function ge(Y,ee){var se=ee[0],X=ee[1],z=ee[2],d=se*se+X*X+z*z;return d>0&&(d=1/Math.sqrt(d),Y[0]=ee[0]*d,Y[1]=ee[1]*d,Y[2]=ee[2]*d),Y}function q(Y,ee){return Y[0]*ee[0]+Y[1]*ee[1]+Y[2]*ee[2]}function F(Y,ee,se){var X=ee[0],z=ee[1],d=ee[2],b=se[0],Z=se[1],J=se[2];return Y[0]=z*J-d*Z,Y[1]=d*b-X*J,Y[2]=X*Z-z*b,Y}function j(Y,ee,se,X){var z=ee[0],d=ee[1],b=ee[2];return Y[0]=z+X*(se[0]-z),Y[1]=d+X*(se[1]-d),Y[2]=b+X*(se[2]-b),Y}function ce(Y,ee,se,X,z,d){var b=d*d,Z=b*(2*d-3)+1,J=b*(d-2)+d,ue=b*(d-1),oe=b*(3-2*d);return Y[0]=ee[0]*Z+se[0]*J+X[0]*ue+z[0]*oe,Y[1]=ee[1]*Z+se[1]*J+X[1]*ue+z[1]*oe,Y[2]=ee[2]*Z+se[2]*J+X[2]*ue+z[2]*oe,Y}function pe(Y,ee,se,X,z,d){var b=1-d,Z=b*b,J=d*d,ue=Z*b,oe=3*d*Z,xe=3*J*b,Me=J*d;return Y[0]=ee[0]*ue+se[0]*oe+X[0]*xe+z[0]*Me,Y[1]=ee[1]*ue+se[1]*oe+X[1]*xe+z[1]*Me,Y[2]=ee[2]*ue+se[2]*oe+X[2]*xe+z[2]*Me,Y}function _e(Y,ee){ee=ee||1;var se=l.RANDOM()*2*Math.PI,X=l.RANDOM()*2-1,z=Math.sqrt(1-X*X)*ee;return Y[0]=Math.cos(se)*z,Y[1]=Math.sin(se)*z,Y[2]=X*ee,Y}function he(Y,ee,se){var X=ee[0],z=ee[1],d=ee[2],b=se[3]*X+se[7]*z+se[11]*d+se[15];return b=b||1,Y[0]=(se[0]*X+se[4]*z+se[8]*d+se[12])/b,Y[1]=(se[1]*X+se[5]*z+se[9]*d+se[13])/b,Y[2]=(se[2]*X+se[6]*z+se[10]*d+se[14])/b,Y}function N(Y,ee,se){var X=ee[0],z=ee[1],d=ee[2];return Y[0]=X*se[0]+z*se[3]+d*se[6],Y[1]=X*se[1]+z*se[4]+d*se[7],Y[2]=X*se[2]+z*se[5]+d*se[8],Y}function w(Y,ee,se){var X=ee[0],z=ee[1],d=ee[2],b=se[0],Z=se[1],J=se[2],ue=se[3],oe=ue*X+Z*d-J*z,xe=ue*z+J*X-b*d,Me=ue*d+b*z-Z*X,me=-b*X-Z*z-J*d;return Y[0]=oe*ue+me*-b+xe*-J-Me*-Z,Y[1]=xe*ue+me*-Z+Me*-b-oe*-J,Y[2]=Me*ue+me*-J+oe*-Z-xe*-b,Y}function G(Y,ee,se,X){var z=[],d=[];return z[0]=ee[0]-se[0],z[1]=ee[1]-se[1],z[2]=ee[2]-se[2],d[0]=z[0],d[1]=z[1]*Math.cos(X)-z[2]*Math.sin(X),d[2]=z[1]*Math.sin(X)+z[2]*Math.cos(X),Y[0]=d[0]+se[0],Y[1]=d[1]+se[1],Y[2]=d[2]+se[2],Y}function ae(Y,ee,se,X){var z=[],d=[];return z[0]=ee[0]-se[0],z[1]=ee[1]-se[1],z[2]=ee[2]-se[2],d[0]=z[2]*Math.sin(X)+z[0]*Math.cos(X),d[1]=z[1],d[2]=z[2]*Math.cos(X)-z[0]*Math.sin(X),Y[0]=d[0]+se[0],Y[1]=d[1]+se[1],Y[2]=d[2]+se[2],Y}function Q(Y,ee,se,X){var z=[],d=[];return z[0]=ee[0]-se[0],z[1]=ee[1]-se[1],z[2]=ee[2]-se[2],d[0]=z[0]*Math.cos(X)-z[1]*Math.sin(X),d[1]=z[0]*Math.sin(X)+z[1]*Math.cos(X),d[2]=z[2],Y[0]=d[0]+se[0],Y[1]=d[1]+se[1],Y[2]=d[2]+se[2],Y}function ie(Y,ee){var se=m(Y[0],Y[1],Y[2]),X=m(ee[0],ee[1],ee[2]);ge(se,se),ge(X,X);var z=q(se,X);return z>1?0:z<-1?Math.PI:Math.acos(z)}function K(Y){return"vec3("+Y[0]+", "+Y[1]+", "+Y[2]+")"}function le(Y,ee){return Y[0]===ee[0]&&Y[1]===ee[1]&&Y[2]===ee[2]}function fe(Y,ee){var se=Y[0],X=Y[1],z=Y[2],d=ee[0],b=ee[1],Z=ee[2];return Math.abs(se-d)<=l.EPSILON*Math.max(1,Math.abs(se),Math.abs(d))&&Math.abs(X-b)<=l.EPSILON*Math.max(1,Math.abs(X),Math.abs(b))&&Math.abs(z-Z)<=l.EPSILON*Math.max(1,Math.abs(z),Math.abs(Z))}a.sub=L,a.mul=x,a.div=M,a.dist=$,a.sqrDist=H,a.len=f,a.sqrLen=te,a.forEach=function(){var Y=h();return function(ee,se,X,z,d,b){var Z=void 0,J=void 0;for(se||(se=3),X||(X=0),z?J=Math.min(z*se+X,ee.length):J=ee.length,Z=X;Z<J;Z+=se)Y[0]=ee[Z],Y[1]=ee[Z+1],Y[2]=ee[Z+2],d(Y,Y,b),ee[Z]=Y[0],ee[Z+1]=Y[1],ee[Z+2]=Y[2];return ee}}()},function(s,a,o){Object.defineProperty(a,"__esModule",{value:!0}),a.forEach=a.sqrLen=a.len=a.sqrDist=a.dist=a.div=a.mul=a.sub=void 0,a.create=h,a.clone=p,a.fromValues=f,a.copy=m,a.set=g,a.add=v,a.subtract=_,a.multiply=L,a.divide=x,a.ceil=M,a.floor=R,a.min=D,a.max=I,a.round=y,a.scale=S,a.scaleAndAdd=E,a.distance=O,a.squaredDistance=$,a.length=H,a.squaredLength=te,a.negate=de,a.inverse=ve,a.normalize=ge,a.dot=q,a.lerp=F,a.random=j,a.transformMat4=ce,a.transformQuat=pe,a.str=_e,a.exactEquals=he,a.equals=N;var c=o(0),l=u(c);function u(w){if(w&&w.__esModule)return w;var G={};if(w!=null)for(var ae in w)Object.prototype.hasOwnProperty.call(w,ae)&&(G[ae]=w[ae]);return G.default=w,G}function h(){var w=new l.ARRAY_TYPE(4);return w[0]=0,w[1]=0,w[2]=0,w[3]=0,w}function p(w){var G=new l.ARRAY_TYPE(4);return G[0]=w[0],G[1]=w[1],G[2]=w[2],G[3]=w[3],G}function f(w,G,ae,Q){var ie=new l.ARRAY_TYPE(4);return ie[0]=w,ie[1]=G,ie[2]=ae,ie[3]=Q,ie}function m(w,G){return w[0]=G[0],w[1]=G[1],w[2]=G[2],w[3]=G[3],w}function g(w,G,ae,Q,ie){return w[0]=G,w[1]=ae,w[2]=Q,w[3]=ie,w}function v(w,G,ae){return w[0]=G[0]+ae[0],w[1]=G[1]+ae[1],w[2]=G[2]+ae[2],w[3]=G[3]+ae[3],w}function _(w,G,ae){return w[0]=G[0]-ae[0],w[1]=G[1]-ae[1],w[2]=G[2]-ae[2],w[3]=G[3]-ae[3],w}function L(w,G,ae){return w[0]=G[0]*ae[0],w[1]=G[1]*ae[1],w[2]=G[2]*ae[2],w[3]=G[3]*ae[3],w}function x(w,G,ae){return w[0]=G[0]/ae[0],w[1]=G[1]/ae[1],w[2]=G[2]/ae[2],w[3]=G[3]/ae[3],w}function M(w,G){return w[0]=Math.ceil(G[0]),w[1]=Math.ceil(G[1]),w[2]=Math.ceil(G[2]),w[3]=Math.ceil(G[3]),w}function R(w,G){return w[0]=Math.floor(G[0]),w[1]=Math.floor(G[1]),w[2]=Math.floor(G[2]),w[3]=Math.floor(G[3]),w}function D(w,G,ae){return w[0]=Math.min(G[0],ae[0]),w[1]=Math.min(G[1],ae[1]),w[2]=Math.min(G[2],ae[2]),w[3]=Math.min(G[3],ae[3]),w}function I(w,G,ae){return w[0]=Math.max(G[0],ae[0]),w[1]=Math.max(G[1],ae[1]),w[2]=Math.max(G[2],ae[2]),w[3]=Math.max(G[3],ae[3]),w}function y(w,G){return w[0]=Math.round(G[0]),w[1]=Math.round(G[1]),w[2]=Math.round(G[2]),w[3]=Math.round(G[3]),w}function S(w,G,ae){return w[0]=G[0]*ae,w[1]=G[1]*ae,w[2]=G[2]*ae,w[3]=G[3]*ae,w}function E(w,G,ae,Q){return w[0]=G[0]+ae[0]*Q,w[1]=G[1]+ae[1]*Q,w[2]=G[2]+ae[2]*Q,w[3]=G[3]+ae[3]*Q,w}function O(w,G){var ae=G[0]-w[0],Q=G[1]-w[1],ie=G[2]-w[2],K=G[3]-w[3];return Math.sqrt(ae*ae+Q*Q+ie*ie+K*K)}function $(w,G){var ae=G[0]-w[0],Q=G[1]-w[1],ie=G[2]-w[2],K=G[3]-w[3];return ae*ae+Q*Q+ie*ie+K*K}function H(w){var G=w[0],ae=w[1],Q=w[2],ie=w[3];return Math.sqrt(G*G+ae*ae+Q*Q+ie*ie)}function te(w){var G=w[0],ae=w[1],Q=w[2],ie=w[3];return G*G+ae*ae+Q*Q+ie*ie}function de(w,G){return w[0]=-G[0],w[1]=-G[1],w[2]=-G[2],w[3]=-G[3],w}function ve(w,G){return w[0]=1/G[0],w[1]=1/G[1],w[2]=1/G[2],w[3]=1/G[3],w}function ge(w,G){var ae=G[0],Q=G[1],ie=G[2],K=G[3],le=ae*ae+Q*Q+ie*ie+K*K;return le>0&&(le=1/Math.sqrt(le),w[0]=ae*le,w[1]=Q*le,w[2]=ie*le,w[3]=K*le),w}function q(w,G){return w[0]*G[0]+w[1]*G[1]+w[2]*G[2]+w[3]*G[3]}function F(w,G,ae,Q){var ie=G[0],K=G[1],le=G[2],fe=G[3];return w[0]=ie+Q*(ae[0]-ie),w[1]=K+Q*(ae[1]-K),w[2]=le+Q*(ae[2]-le),w[3]=fe+Q*(ae[3]-fe),w}function j(w,G){return G=G||1,w[0]=l.RANDOM(),w[1]=l.RANDOM(),w[2]=l.RANDOM(),w[3]=l.RANDOM(),ge(w,w),S(w,w,G),w}function ce(w,G,ae){var Q=G[0],ie=G[1],K=G[2],le=G[3];return w[0]=ae[0]*Q+ae[4]*ie+ae[8]*K+ae[12]*le,w[1]=ae[1]*Q+ae[5]*ie+ae[9]*K+ae[13]*le,w[2]=ae[2]*Q+ae[6]*ie+ae[10]*K+ae[14]*le,w[3]=ae[3]*Q+ae[7]*ie+ae[11]*K+ae[15]*le,w}function pe(w,G,ae){var Q=G[0],ie=G[1],K=G[2],le=ae[0],fe=ae[1],Y=ae[2],ee=ae[3],se=ee*Q+fe*K-Y*ie,X=ee*ie+Y*Q-le*K,z=ee*K+le*ie-fe*Q,d=-le*Q-fe*ie-Y*K;return w[0]=se*ee+d*-le+X*-Y-z*-fe,w[1]=X*ee+d*-fe+z*-le-se*-Y,w[2]=z*ee+d*-Y+se*-fe-X*-le,w[3]=G[3],w}function _e(w){return"vec4("+w[0]+", "+w[1]+", "+w[2]+", "+w[3]+")"}function he(w,G){return w[0]===G[0]&&w[1]===G[1]&&w[2]===G[2]&&w[3]===G[3]}function N(w,G){var ae=w[0],Q=w[1],ie=w[2],K=w[3],le=G[0],fe=G[1],Y=G[2],ee=G[3];return Math.abs(ae-le)<=l.EPSILON*Math.max(1,Math.abs(ae),Math.abs(le))&&Math.abs(Q-fe)<=l.EPSILON*Math.max(1,Math.abs(Q),Math.abs(fe))&&Math.abs(ie-Y)<=l.EPSILON*Math.max(1,Math.abs(ie),Math.abs(Y))&&Math.abs(K-ee)<=l.EPSILON*Math.max(1,Math.abs(K),Math.abs(ee))}a.sub=_,a.mul=L,a.div=x,a.dist=O,a.sqrDist=$,a.len=H,a.sqrLen=te,a.forEach=function(){var w=h();return function(G,ae,Q,ie,K,le){var fe=void 0,Y=void 0;for(ae||(ae=4),Q||(Q=0),ie?Y=Math.min(ie*ae+Q,G.length):Y=G.length,fe=Q;fe<Y;fe+=ae)w[0]=G[fe],w[1]=G[fe+1],w[2]=G[fe+2],w[3]=G[fe+3],K(w,w,le),G[fe]=w[0],G[fe+1]=w[1],G[fe+2]=w[2],G[fe+3]=w[3];return G}}()},function(s,a,o){Object.defineProperty(a,"__esModule",{value:!0}),a.vec4=a.vec3=a.vec2=a.quat=a.mat4=a.mat3=a.mat2d=a.mat2=a.glMatrix=void 0;var c=o(0),l=E(c),u=o(5),h=E(u),p=o(6),f=E(p),m=o(1),g=E(m),v=o(7),_=E(v),L=o(8),x=E(L),M=o(9),R=E(M),D=o(2),I=E(D),y=o(3),S=E(y);function E(O){if(O&&O.__esModule)return O;var $={};if(O!=null)for(var H in O)Object.prototype.hasOwnProperty.call(O,H)&&($[H]=O[H]);return $.default=O,$}a.glMatrix=l,a.mat2=h,a.mat2d=f,a.mat3=g,a.mat4=_,a.quat=x,a.vec2=R,a.vec3=I,a.vec4=S},function(s,a,o){Object.defineProperty(a,"__esModule",{value:!0}),a.sub=a.mul=void 0,a.create=h,a.clone=p,a.copy=f,a.identity=m,a.fromValues=g,a.set=v,a.transpose=_,a.invert=L,a.adjoint=x,a.determinant=M,a.multiply=R,a.rotate=D,a.scale=I,a.fromRotation=y,a.fromScaling=S,a.str=E,a.frob=O,a.LDU=$,a.add=H,a.subtract=te,a.exactEquals=de,a.equals=ve,a.multiplyScalar=ge,a.multiplyScalarAndAdd=q;var c=o(0),l=u(c);function u(F){if(F&&F.__esModule)return F;var j={};if(F!=null)for(var ce in F)Object.prototype.hasOwnProperty.call(F,ce)&&(j[ce]=F[ce]);return j.default=F,j}function h(){var F=new l.ARRAY_TYPE(4);return F[0]=1,F[1]=0,F[2]=0,F[3]=1,F}function p(F){var j=new l.ARRAY_TYPE(4);return j[0]=F[0],j[1]=F[1],j[2]=F[2],j[3]=F[3],j}function f(F,j){return F[0]=j[0],F[1]=j[1],F[2]=j[2],F[3]=j[3],F}function m(F){return F[0]=1,F[1]=0,F[2]=0,F[3]=1,F}function g(F,j,ce,pe){var _e=new l.ARRAY_TYPE(4);return _e[0]=F,_e[1]=j,_e[2]=ce,_e[3]=pe,_e}function v(F,j,ce,pe,_e){return F[0]=j,F[1]=ce,F[2]=pe,F[3]=_e,F}function _(F,j){if(F===j){var ce=j[1];F[1]=j[2],F[2]=ce}else F[0]=j[0],F[1]=j[2],F[2]=j[1],F[3]=j[3];return F}function L(F,j){var ce=j[0],pe=j[1],_e=j[2],he=j[3],N=ce*he-_e*pe;return N?(N=1/N,F[0]=he*N,F[1]=-pe*N,F[2]=-_e*N,F[3]=ce*N,F):null}function x(F,j){var ce=j[0];return F[0]=j[3],F[1]=-j[1],F[2]=-j[2],F[3]=ce,F}function M(F){return F[0]*F[3]-F[2]*F[1]}function R(F,j,ce){var pe=j[0],_e=j[1],he=j[2],N=j[3],w=ce[0],G=ce[1],ae=ce[2],Q=ce[3];return F[0]=pe*w+he*G,F[1]=_e*w+N*G,F[2]=pe*ae+he*Q,F[3]=_e*ae+N*Q,F}function D(F,j,ce){var pe=j[0],_e=j[1],he=j[2],N=j[3],w=Math.sin(ce),G=Math.cos(ce);return F[0]=pe*G+he*w,F[1]=_e*G+N*w,F[2]=pe*-w+he*G,F[3]=_e*-w+N*G,F}function I(F,j,ce){var pe=j[0],_e=j[1],he=j[2],N=j[3],w=ce[0],G=ce[1];return F[0]=pe*w,F[1]=_e*w,F[2]=he*G,F[3]=N*G,F}function y(F,j){var ce=Math.sin(j),pe=Math.cos(j);return F[0]=pe,F[1]=ce,F[2]=-ce,F[3]=pe,F}function S(F,j){return F[0]=j[0],F[1]=0,F[2]=0,F[3]=j[1],F}function E(F){return"mat2("+F[0]+", "+F[1]+", "+F[2]+", "+F[3]+")"}function O(F){return Math.sqrt(Math.pow(F[0],2)+Math.pow(F[1],2)+Math.pow(F[2],2)+Math.pow(F[3],2))}function $(F,j,ce,pe){return F[2]=pe[2]/pe[0],ce[0]=pe[0],ce[1]=pe[1],ce[3]=pe[3]-F[2]*ce[1],[F,j,ce]}function H(F,j,ce){return F[0]=j[0]+ce[0],F[1]=j[1]+ce[1],F[2]=j[2]+ce[2],F[3]=j[3]+ce[3],F}function te(F,j,ce){return F[0]=j[0]-ce[0],F[1]=j[1]-ce[1],F[2]=j[2]-ce[2],F[3]=j[3]-ce[3],F}function de(F,j){return F[0]===j[0]&&F[1]===j[1]&&F[2]===j[2]&&F[3]===j[3]}function ve(F,j){var ce=F[0],pe=F[1],_e=F[2],he=F[3],N=j[0],w=j[1],G=j[2],ae=j[3];return Math.abs(ce-N)<=l.EPSILON*Math.max(1,Math.abs(ce),Math.abs(N))&&Math.abs(pe-w)<=l.EPSILON*Math.max(1,Math.abs(pe),Math.abs(w))&&Math.abs(_e-G)<=l.EPSILON*Math.max(1,Math.abs(_e),Math.abs(G))&&Math.abs(he-ae)<=l.EPSILON*Math.max(1,Math.abs(he),Math.abs(ae))}function ge(F,j,ce){return F[0]=j[0]*ce,F[1]=j[1]*ce,F[2]=j[2]*ce,F[3]=j[3]*ce,F}function q(F,j,ce,pe){return F[0]=j[0]+ce[0]*pe,F[1]=j[1]+ce[1]*pe,F[2]=j[2]+ce[2]*pe,F[3]=j[3]+ce[3]*pe,F}a.mul=R,a.sub=te},function(s,a,o){Object.defineProperty(a,"__esModule",{value:!0}),a.sub=a.mul=void 0,a.create=h,a.clone=p,a.copy=f,a.identity=m,a.fromValues=g,a.set=v,a.invert=_,a.determinant=L,a.multiply=x,a.rotate=M,a.scale=R,a.translate=D,a.fromRotation=I,a.fromScaling=y,a.fromTranslation=S,a.str=E,a.frob=O,a.add=$,a.subtract=H,a.multiplyScalar=te,a.multiplyScalarAndAdd=de,a.exactEquals=ve,a.equals=ge;var c=o(0),l=u(c);function u(q){if(q&&q.__esModule)return q;var F={};if(q!=null)for(var j in q)Object.prototype.hasOwnProperty.call(q,j)&&(F[j]=q[j]);return F.default=q,F}function h(){var q=new l.ARRAY_TYPE(6);return q[0]=1,q[1]=0,q[2]=0,q[3]=1,q[4]=0,q[5]=0,q}function p(q){var F=new l.ARRAY_TYPE(6);return F[0]=q[0],F[1]=q[1],F[2]=q[2],F[3]=q[3],F[4]=q[4],F[5]=q[5],F}function f(q,F){return q[0]=F[0],q[1]=F[1],q[2]=F[2],q[3]=F[3],q[4]=F[4],q[5]=F[5],q}function m(q){return q[0]=1,q[1]=0,q[2]=0,q[3]=1,q[4]=0,q[5]=0,q}function g(q,F,j,ce,pe,_e){var he=new l.ARRAY_TYPE(6);return he[0]=q,he[1]=F,he[2]=j,he[3]=ce,he[4]=pe,he[5]=_e,he}function v(q,F,j,ce,pe,_e,he){return q[0]=F,q[1]=j,q[2]=ce,q[3]=pe,q[4]=_e,q[5]=he,q}function _(q,F){var j=F[0],ce=F[1],pe=F[2],_e=F[3],he=F[4],N=F[5],w=j*_e-ce*pe;return w?(w=1/w,q[0]=_e*w,q[1]=-ce*w,q[2]=-pe*w,q[3]=j*w,q[4]=(pe*N-_e*he)*w,q[5]=(ce*he-j*N)*w,q):null}function L(q){return q[0]*q[3]-q[1]*q[2]}function x(q,F,j){var ce=F[0],pe=F[1],_e=F[2],he=F[3],N=F[4],w=F[5],G=j[0],ae=j[1],Q=j[2],ie=j[3],K=j[4],le=j[5];return q[0]=ce*G+_e*ae,q[1]=pe*G+he*ae,q[2]=ce*Q+_e*ie,q[3]=pe*Q+he*ie,q[4]=ce*K+_e*le+N,q[5]=pe*K+he*le+w,q}function M(q,F,j){var ce=F[0],pe=F[1],_e=F[2],he=F[3],N=F[4],w=F[5],G=Math.sin(j),ae=Math.cos(j);return q[0]=ce*ae+_e*G,q[1]=pe*ae+he*G,q[2]=ce*-G+_e*ae,q[3]=pe*-G+he*ae,q[4]=N,q[5]=w,q}function R(q,F,j){var ce=F[0],pe=F[1],_e=F[2],he=F[3],N=F[4],w=F[5],G=j[0],ae=j[1];return q[0]=ce*G,q[1]=pe*G,q[2]=_e*ae,q[3]=he*ae,q[4]=N,q[5]=w,q}function D(q,F,j){var ce=F[0],pe=F[1],_e=F[2],he=F[3],N=F[4],w=F[5],G=j[0],ae=j[1];return q[0]=ce,q[1]=pe,q[2]=_e,q[3]=he,q[4]=ce*G+_e*ae+N,q[5]=pe*G+he*ae+w,q}function I(q,F){var j=Math.sin(F),ce=Math.cos(F);return q[0]=ce,q[1]=j,q[2]=-j,q[3]=ce,q[4]=0,q[5]=0,q}function y(q,F){return q[0]=F[0],q[1]=0,q[2]=0,q[3]=F[1],q[4]=0,q[5]=0,q}function S(q,F){return q[0]=1,q[1]=0,q[2]=0,q[3]=1,q[4]=F[0],q[5]=F[1],q}function E(q){return"mat2d("+q[0]+", "+q[1]+", "+q[2]+", "+q[3]+", "+q[4]+", "+q[5]+")"}function O(q){return Math.sqrt(Math.pow(q[0],2)+Math.pow(q[1],2)+Math.pow(q[2],2)+Math.pow(q[3],2)+Math.pow(q[4],2)+Math.pow(q[5],2)+1)}function $(q,F,j){return q[0]=F[0]+j[0],q[1]=F[1]+j[1],q[2]=F[2]+j[2],q[3]=F[3]+j[3],q[4]=F[4]+j[4],q[5]=F[5]+j[5],q}function H(q,F,j){return q[0]=F[0]-j[0],q[1]=F[1]-j[1],q[2]=F[2]-j[2],q[3]=F[3]-j[3],q[4]=F[4]-j[4],q[5]=F[5]-j[5],q}function te(q,F,j){return q[0]=F[0]*j,q[1]=F[1]*j,q[2]=F[2]*j,q[3]=F[3]*j,q[4]=F[4]*j,q[5]=F[5]*j,q}function de(q,F,j,ce){return q[0]=F[0]+j[0]*ce,q[1]=F[1]+j[1]*ce,q[2]=F[2]+j[2]*ce,q[3]=F[3]+j[3]*ce,q[4]=F[4]+j[4]*ce,q[5]=F[5]+j[5]*ce,q}function ve(q,F){return q[0]===F[0]&&q[1]===F[1]&&q[2]===F[2]&&q[3]===F[3]&&q[4]===F[4]&&q[5]===F[5]}function ge(q,F){var j=q[0],ce=q[1],pe=q[2],_e=q[3],he=q[4],N=q[5],w=F[0],G=F[1],ae=F[2],Q=F[3],ie=F[4],K=F[5];return Math.abs(j-w)<=l.EPSILON*Math.max(1,Math.abs(j),Math.abs(w))&&Math.abs(ce-G)<=l.EPSILON*Math.max(1,Math.abs(ce),Math.abs(G))&&Math.abs(pe-ae)<=l.EPSILON*Math.max(1,Math.abs(pe),Math.abs(ae))&&Math.abs(_e-Q)<=l.EPSILON*Math.max(1,Math.abs(_e),Math.abs(Q))&&Math.abs(he-ie)<=l.EPSILON*Math.max(1,Math.abs(he),Math.abs(ie))&&Math.abs(N-K)<=l.EPSILON*Math.max(1,Math.abs(N),Math.abs(K))}a.mul=x,a.sub=H},function(s,a,o){Object.defineProperty(a,"__esModule",{value:!0}),a.sub=a.mul=void 0,a.create=h,a.clone=p,a.copy=f,a.fromValues=m,a.set=g,a.identity=v,a.transpose=_,a.invert=L,a.adjoint=x,a.determinant=M,a.multiply=R,a.translate=D,a.scale=I,a.rotate=y,a.rotateX=S,a.rotateY=E,a.rotateZ=O,a.fromTranslation=$,a.fromScaling=H,a.fromRotation=te,a.fromXRotation=de,a.fromYRotation=ve,a.fromZRotation=ge,a.fromRotationTranslation=q,a.getTranslation=F,a.getScaling=j,a.getRotation=ce,a.fromRotationTranslationScale=pe,a.fromRotationTranslationScaleOrigin=_e,a.fromQuat=he,a.frustum=N,a.perspective=w,a.perspectiveFromFieldOfView=G,a.ortho=ae,a.lookAt=Q,a.targetTo=ie,a.str=K,a.frob=le,a.add=fe,a.subtract=Y,a.multiplyScalar=ee,a.multiplyScalarAndAdd=se,a.exactEquals=X,a.equals=z;var c=o(0),l=u(c);function u(d){if(d&&d.__esModule)return d;var b={};if(d!=null)for(var Z in d)Object.prototype.hasOwnProperty.call(d,Z)&&(b[Z]=d[Z]);return b.default=d,b}function h(){var d=new l.ARRAY_TYPE(16);return d[0]=1,d[1]=0,d[2]=0,d[3]=0,d[4]=0,d[5]=1,d[6]=0,d[7]=0,d[8]=0,d[9]=0,d[10]=1,d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function p(d){var b=new l.ARRAY_TYPE(16);return b[0]=d[0],b[1]=d[1],b[2]=d[2],b[3]=d[3],b[4]=d[4],b[5]=d[5],b[6]=d[6],b[7]=d[7],b[8]=d[8],b[9]=d[9],b[10]=d[10],b[11]=d[11],b[12]=d[12],b[13]=d[13],b[14]=d[14],b[15]=d[15],b}function f(d,b){return d[0]=b[0],d[1]=b[1],d[2]=b[2],d[3]=b[3],d[4]=b[4],d[5]=b[5],d[6]=b[6],d[7]=b[7],d[8]=b[8],d[9]=b[9],d[10]=b[10],d[11]=b[11],d[12]=b[12],d[13]=b[13],d[14]=b[14],d[15]=b[15],d}function m(d,b,Z,J,ue,oe,xe,Me,me,ye,Te,Ce,Ee,Pe,Ue,Fe){var Re=new l.ARRAY_TYPE(16);return Re[0]=d,Re[1]=b,Re[2]=Z,Re[3]=J,Re[4]=ue,Re[5]=oe,Re[6]=xe,Re[7]=Me,Re[8]=me,Re[9]=ye,Re[10]=Te,Re[11]=Ce,Re[12]=Ee,Re[13]=Pe,Re[14]=Ue,Re[15]=Fe,Re}function g(d,b,Z,J,ue,oe,xe,Me,me,ye,Te,Ce,Ee,Pe,Ue,Fe,Re){return d[0]=b,d[1]=Z,d[2]=J,d[3]=ue,d[4]=oe,d[5]=xe,d[6]=Me,d[7]=me,d[8]=ye,d[9]=Te,d[10]=Ce,d[11]=Ee,d[12]=Pe,d[13]=Ue,d[14]=Fe,d[15]=Re,d}function v(d){return d[0]=1,d[1]=0,d[2]=0,d[3]=0,d[4]=0,d[5]=1,d[6]=0,d[7]=0,d[8]=0,d[9]=0,d[10]=1,d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function _(d,b){if(d===b){var Z=b[1],J=b[2],ue=b[3],oe=b[6],xe=b[7],Me=b[11];d[1]=b[4],d[2]=b[8],d[3]=b[12],d[4]=Z,d[6]=b[9],d[7]=b[13],d[8]=J,d[9]=oe,d[11]=b[14],d[12]=ue,d[13]=xe,d[14]=Me}else d[0]=b[0],d[1]=b[4],d[2]=b[8],d[3]=b[12],d[4]=b[1],d[5]=b[5],d[6]=b[9],d[7]=b[13],d[8]=b[2],d[9]=b[6],d[10]=b[10],d[11]=b[14],d[12]=b[3],d[13]=b[7],d[14]=b[11],d[15]=b[15];return d}function L(d,b){var Z=b[0],J=b[1],ue=b[2],oe=b[3],xe=b[4],Me=b[5],me=b[6],ye=b[7],Te=b[8],Ce=b[9],Ee=b[10],Pe=b[11],Ue=b[12],Fe=b[13],Re=b[14],Oe=b[15],Ne=Z*Me-J*xe,re=Z*me-ue*xe,Le=Z*ye-oe*xe,De=J*me-ue*Me,Ie=J*ye-oe*Me,Be=ue*ye-oe*me,ze=Te*Fe-Ce*Ue,He=Te*Re-Ee*Ue,$e=Te*Oe-Pe*Ue,Je=Ce*Re-Ee*Fe,qe=Ce*Oe-Pe*Fe,Qe=Ee*Oe-Pe*Re,Ke=Ne*Qe-re*qe+Le*Je+De*$e-Ie*He+Be*ze;return Ke?(Ke=1/Ke,d[0]=(Me*Qe-me*qe+ye*Je)*Ke,d[1]=(ue*qe-J*Qe-oe*Je)*Ke,d[2]=(Fe*Be-Re*Ie+Oe*De)*Ke,d[3]=(Ee*Ie-Ce*Be-Pe*De)*Ke,d[4]=(me*$e-xe*Qe-ye*He)*Ke,d[5]=(Z*Qe-ue*$e+oe*He)*Ke,d[6]=(Re*Le-Ue*Be-Oe*re)*Ke,d[7]=(Te*Be-Ee*Le+Pe*re)*Ke,d[8]=(xe*qe-Me*$e+ye*ze)*Ke,d[9]=(J*$e-Z*qe-oe*ze)*Ke,d[10]=(Ue*Ie-Fe*Le+Oe*Ne)*Ke,d[11]=(Ce*Le-Te*Ie-Pe*Ne)*Ke,d[12]=(Me*He-xe*Je-me*ze)*Ke,d[13]=(Z*Je-J*He+ue*ze)*Ke,d[14]=(Fe*re-Ue*De-Re*Ne)*Ke,d[15]=(Te*De-Ce*re+Ee*Ne)*Ke,d):null}function x(d,b){var Z=b[0],J=b[1],ue=b[2],oe=b[3],xe=b[4],Me=b[5],me=b[6],ye=b[7],Te=b[8],Ce=b[9],Ee=b[10],Pe=b[11],Ue=b[12],Fe=b[13],Re=b[14],Oe=b[15];return d[0]=Me*(Ee*Oe-Pe*Re)-Ce*(me*Oe-ye*Re)+Fe*(me*Pe-ye*Ee),d[1]=-(J*(Ee*Oe-Pe*Re)-Ce*(ue*Oe-oe*Re)+Fe*(ue*Pe-oe*Ee)),d[2]=J*(me*Oe-ye*Re)-Me*(ue*Oe-oe*Re)+Fe*(ue*ye-oe*me),d[3]=-(J*(me*Pe-ye*Ee)-Me*(ue*Pe-oe*Ee)+Ce*(ue*ye-oe*me)),d[4]=-(xe*(Ee*Oe-Pe*Re)-Te*(me*Oe-ye*Re)+Ue*(me*Pe-ye*Ee)),d[5]=Z*(Ee*Oe-Pe*Re)-Te*(ue*Oe-oe*Re)+Ue*(ue*Pe-oe*Ee),d[6]=-(Z*(me*Oe-ye*Re)-xe*(ue*Oe-oe*Re)+Ue*(ue*ye-oe*me)),d[7]=Z*(me*Pe-ye*Ee)-xe*(ue*Pe-oe*Ee)+Te*(ue*ye-oe*me),d[8]=xe*(Ce*Oe-Pe*Fe)-Te*(Me*Oe-ye*Fe)+Ue*(Me*Pe-ye*Ce),d[9]=-(Z*(Ce*Oe-Pe*Fe)-Te*(J*Oe-oe*Fe)+Ue*(J*Pe-oe*Ce)),d[10]=Z*(Me*Oe-ye*Fe)-xe*(J*Oe-oe*Fe)+Ue*(J*ye-oe*Me),d[11]=-(Z*(Me*Pe-ye*Ce)-xe*(J*Pe-oe*Ce)+Te*(J*ye-oe*Me)),d[12]=-(xe*(Ce*Re-Ee*Fe)-Te*(Me*Re-me*Fe)+Ue*(Me*Ee-me*Ce)),d[13]=Z*(Ce*Re-Ee*Fe)-Te*(J*Re-ue*Fe)+Ue*(J*Ee-ue*Ce),d[14]=-(Z*(Me*Re-me*Fe)-xe*(J*Re-ue*Fe)+Ue*(J*me-ue*Me)),d[15]=Z*(Me*Ee-me*Ce)-xe*(J*Ee-ue*Ce)+Te*(J*me-ue*Me),d}function M(d){var b=d[0],Z=d[1],J=d[2],ue=d[3],oe=d[4],xe=d[5],Me=d[6],me=d[7],ye=d[8],Te=d[9],Ce=d[10],Ee=d[11],Pe=d[12],Ue=d[13],Fe=d[14],Re=d[15],Oe=b*xe-Z*oe,Ne=b*Me-J*oe,re=b*me-ue*oe,Le=Z*Me-J*xe,De=Z*me-ue*xe,Ie=J*me-ue*Me,Be=ye*Ue-Te*Pe,ze=ye*Fe-Ce*Pe,He=ye*Re-Ee*Pe,$e=Te*Fe-Ce*Ue,Je=Te*Re-Ee*Ue,qe=Ce*Re-Ee*Fe;return Oe*qe-Ne*Je+re*$e+Le*He-De*ze+Ie*Be}function R(d,b,Z){var J=b[0],ue=b[1],oe=b[2],xe=b[3],Me=b[4],me=b[5],ye=b[6],Te=b[7],Ce=b[8],Ee=b[9],Pe=b[10],Ue=b[11],Fe=b[12],Re=b[13],Oe=b[14],Ne=b[15],re=Z[0],Le=Z[1],De=Z[2],Ie=Z[3];return d[0]=re*J+Le*Me+De*Ce+Ie*Fe,d[1]=re*ue+Le*me+De*Ee+Ie*Re,d[2]=re*oe+Le*ye+De*Pe+Ie*Oe,d[3]=re*xe+Le*Te+De*Ue+Ie*Ne,re=Z[4],Le=Z[5],De=Z[6],Ie=Z[7],d[4]=re*J+Le*Me+De*Ce+Ie*Fe,d[5]=re*ue+Le*me+De*Ee+Ie*Re,d[6]=re*oe+Le*ye+De*Pe+Ie*Oe,d[7]=re*xe+Le*Te+De*Ue+Ie*Ne,re=Z[8],Le=Z[9],De=Z[10],Ie=Z[11],d[8]=re*J+Le*Me+De*Ce+Ie*Fe,d[9]=re*ue+Le*me+De*Ee+Ie*Re,d[10]=re*oe+Le*ye+De*Pe+Ie*Oe,d[11]=re*xe+Le*Te+De*Ue+Ie*Ne,re=Z[12],Le=Z[13],De=Z[14],Ie=Z[15],d[12]=re*J+Le*Me+De*Ce+Ie*Fe,d[13]=re*ue+Le*me+De*Ee+Ie*Re,d[14]=re*oe+Le*ye+De*Pe+Ie*Oe,d[15]=re*xe+Le*Te+De*Ue+Ie*Ne,d}function D(d,b,Z){var J=Z[0],ue=Z[1],oe=Z[2],xe=void 0,Me=void 0,me=void 0,ye=void 0,Te=void 0,Ce=void 0,Ee=void 0,Pe=void 0,Ue=void 0,Fe=void 0,Re=void 0,Oe=void 0;return b===d?(d[12]=b[0]*J+b[4]*ue+b[8]*oe+b[12],d[13]=b[1]*J+b[5]*ue+b[9]*oe+b[13],d[14]=b[2]*J+b[6]*ue+b[10]*oe+b[14],d[15]=b[3]*J+b[7]*ue+b[11]*oe+b[15]):(xe=b[0],Me=b[1],me=b[2],ye=b[3],Te=b[4],Ce=b[5],Ee=b[6],Pe=b[7],Ue=b[8],Fe=b[9],Re=b[10],Oe=b[11],d[0]=xe,d[1]=Me,d[2]=me,d[3]=ye,d[4]=Te,d[5]=Ce,d[6]=Ee,d[7]=Pe,d[8]=Ue,d[9]=Fe,d[10]=Re,d[11]=Oe,d[12]=xe*J+Te*ue+Ue*oe+b[12],d[13]=Me*J+Ce*ue+Fe*oe+b[13],d[14]=me*J+Ee*ue+Re*oe+b[14],d[15]=ye*J+Pe*ue+Oe*oe+b[15]),d}function I(d,b,Z){var J=Z[0],ue=Z[1],oe=Z[2];return d[0]=b[0]*J,d[1]=b[1]*J,d[2]=b[2]*J,d[3]=b[3]*J,d[4]=b[4]*ue,d[5]=b[5]*ue,d[6]=b[6]*ue,d[7]=b[7]*ue,d[8]=b[8]*oe,d[9]=b[9]*oe,d[10]=b[10]*oe,d[11]=b[11]*oe,d[12]=b[12],d[13]=b[13],d[14]=b[14],d[15]=b[15],d}function y(d,b,Z,J){var ue=J[0],oe=J[1],xe=J[2],Me=Math.sqrt(ue*ue+oe*oe+xe*xe),me=void 0,ye=void 0,Te=void 0,Ce=void 0,Ee=void 0,Pe=void 0,Ue=void 0,Fe=void 0,Re=void 0,Oe=void 0,Ne=void 0,re=void 0,Le=void 0,De=void 0,Ie=void 0,Be=void 0,ze=void 0,He=void 0,$e=void 0,Je=void 0,qe=void 0,Qe=void 0,Ke=void 0,it=void 0;return Math.abs(Me)<l.EPSILON?null:(Me=1/Me,ue*=Me,oe*=Me,xe*=Me,me=Math.sin(Z),ye=Math.cos(Z),Te=1-ye,Ce=b[0],Ee=b[1],Pe=b[2],Ue=b[3],Fe=b[4],Re=b[5],Oe=b[6],Ne=b[7],re=b[8],Le=b[9],De=b[10],Ie=b[11],Be=ue*ue*Te+ye,ze=oe*ue*Te+xe*me,He=xe*ue*Te-oe*me,$e=ue*oe*Te-xe*me,Je=oe*oe*Te+ye,qe=xe*oe*Te+ue*me,Qe=ue*xe*Te+oe*me,Ke=oe*xe*Te-ue*me,it=xe*xe*Te+ye,d[0]=Ce*Be+Fe*ze+re*He,d[1]=Ee*Be+Re*ze+Le*He,d[2]=Pe*Be+Oe*ze+De*He,d[3]=Ue*Be+Ne*ze+Ie*He,d[4]=Ce*$e+Fe*Je+re*qe,d[5]=Ee*$e+Re*Je+Le*qe,d[6]=Pe*$e+Oe*Je+De*qe,d[7]=Ue*$e+Ne*Je+Ie*qe,d[8]=Ce*Qe+Fe*Ke+re*it,d[9]=Ee*Qe+Re*Ke+Le*it,d[10]=Pe*Qe+Oe*Ke+De*it,d[11]=Ue*Qe+Ne*Ke+Ie*it,b!==d&&(d[12]=b[12],d[13]=b[13],d[14]=b[14],d[15]=b[15]),d)}function S(d,b,Z){var J=Math.sin(Z),ue=Math.cos(Z),oe=b[4],xe=b[5],Me=b[6],me=b[7],ye=b[8],Te=b[9],Ce=b[10],Ee=b[11];return b!==d&&(d[0]=b[0],d[1]=b[1],d[2]=b[2],d[3]=b[3],d[12]=b[12],d[13]=b[13],d[14]=b[14],d[15]=b[15]),d[4]=oe*ue+ye*J,d[5]=xe*ue+Te*J,d[6]=Me*ue+Ce*J,d[7]=me*ue+Ee*J,d[8]=ye*ue-oe*J,d[9]=Te*ue-xe*J,d[10]=Ce*ue-Me*J,d[11]=Ee*ue-me*J,d}function E(d,b,Z){var J=Math.sin(Z),ue=Math.cos(Z),oe=b[0],xe=b[1],Me=b[2],me=b[3],ye=b[8],Te=b[9],Ce=b[10],Ee=b[11];return b!==d&&(d[4]=b[4],d[5]=b[5],d[6]=b[6],d[7]=b[7],d[12]=b[12],d[13]=b[13],d[14]=b[14],d[15]=b[15]),d[0]=oe*ue-ye*J,d[1]=xe*ue-Te*J,d[2]=Me*ue-Ce*J,d[3]=me*ue-Ee*J,d[8]=oe*J+ye*ue,d[9]=xe*J+Te*ue,d[10]=Me*J+Ce*ue,d[11]=me*J+Ee*ue,d}function O(d,b,Z){var J=Math.sin(Z),ue=Math.cos(Z),oe=b[0],xe=b[1],Me=b[2],me=b[3],ye=b[4],Te=b[5],Ce=b[6],Ee=b[7];return b!==d&&(d[8]=b[8],d[9]=b[9],d[10]=b[10],d[11]=b[11],d[12]=b[12],d[13]=b[13],d[14]=b[14],d[15]=b[15]),d[0]=oe*ue+ye*J,d[1]=xe*ue+Te*J,d[2]=Me*ue+Ce*J,d[3]=me*ue+Ee*J,d[4]=ye*ue-oe*J,d[5]=Te*ue-xe*J,d[6]=Ce*ue-Me*J,d[7]=Ee*ue-me*J,d}function $(d,b){return d[0]=1,d[1]=0,d[2]=0,d[3]=0,d[4]=0,d[5]=1,d[6]=0,d[7]=0,d[8]=0,d[9]=0,d[10]=1,d[11]=0,d[12]=b[0],d[13]=b[1],d[14]=b[2],d[15]=1,d}function H(d,b){return d[0]=b[0],d[1]=0,d[2]=0,d[3]=0,d[4]=0,d[5]=b[1],d[6]=0,d[7]=0,d[8]=0,d[9]=0,d[10]=b[2],d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function te(d,b,Z){var J=Z[0],ue=Z[1],oe=Z[2],xe=Math.sqrt(J*J+ue*ue+oe*oe),Me=void 0,me=void 0,ye=void 0;return Math.abs(xe)<l.EPSILON?null:(xe=1/xe,J*=xe,ue*=xe,oe*=xe,Me=Math.sin(b),me=Math.cos(b),ye=1-me,d[0]=J*J*ye+me,d[1]=ue*J*ye+oe*Me,d[2]=oe*J*ye-ue*Me,d[3]=0,d[4]=J*ue*ye-oe*Me,d[5]=ue*ue*ye+me,d[6]=oe*ue*ye+J*Me,d[7]=0,d[8]=J*oe*ye+ue*Me,d[9]=ue*oe*ye-J*Me,d[10]=oe*oe*ye+me,d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d)}function de(d,b){var Z=Math.sin(b),J=Math.cos(b);return d[0]=1,d[1]=0,d[2]=0,d[3]=0,d[4]=0,d[5]=J,d[6]=Z,d[7]=0,d[8]=0,d[9]=-Z,d[10]=J,d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function ve(d,b){var Z=Math.sin(b),J=Math.cos(b);return d[0]=J,d[1]=0,d[2]=-Z,d[3]=0,d[4]=0,d[5]=1,d[6]=0,d[7]=0,d[8]=Z,d[9]=0,d[10]=J,d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function ge(d,b){var Z=Math.sin(b),J=Math.cos(b);return d[0]=J,d[1]=Z,d[2]=0,d[3]=0,d[4]=-Z,d[5]=J,d[6]=0,d[7]=0,d[8]=0,d[9]=0,d[10]=1,d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function q(d,b,Z){var J=b[0],ue=b[1],oe=b[2],xe=b[3],Me=J+J,me=ue+ue,ye=oe+oe,Te=J*Me,Ce=J*me,Ee=J*ye,Pe=ue*me,Ue=ue*ye,Fe=oe*ye,Re=xe*Me,Oe=xe*me,Ne=xe*ye;return d[0]=1-(Pe+Fe),d[1]=Ce+Ne,d[2]=Ee-Oe,d[3]=0,d[4]=Ce-Ne,d[5]=1-(Te+Fe),d[6]=Ue+Re,d[7]=0,d[8]=Ee+Oe,d[9]=Ue-Re,d[10]=1-(Te+Pe),d[11]=0,d[12]=Z[0],d[13]=Z[1],d[14]=Z[2],d[15]=1,d}function F(d,b){return d[0]=b[12],d[1]=b[13],d[2]=b[14],d}function j(d,b){var Z=b[0],J=b[1],ue=b[2],oe=b[4],xe=b[5],Me=b[6],me=b[8],ye=b[9],Te=b[10];return d[0]=Math.sqrt(Z*Z+J*J+ue*ue),d[1]=Math.sqrt(oe*oe+xe*xe+Me*Me),d[2]=Math.sqrt(me*me+ye*ye+Te*Te),d}function ce(d,b){var Z=b[0]+b[5]+b[10],J=0;return Z>0?(J=Math.sqrt(Z+1)*2,d[3]=.25*J,d[0]=(b[6]-b[9])/J,d[1]=(b[8]-b[2])/J,d[2]=(b[1]-b[4])/J):b[0]>b[5]&b[0]>b[10]?(J=Math.sqrt(1+b[0]-b[5]-b[10])*2,d[3]=(b[6]-b[9])/J,d[0]=.25*J,d[1]=(b[1]+b[4])/J,d[2]=(b[8]+b[2])/J):b[5]>b[10]?(J=Math.sqrt(1+b[5]-b[0]-b[10])*2,d[3]=(b[8]-b[2])/J,d[0]=(b[1]+b[4])/J,d[1]=.25*J,d[2]=(b[6]+b[9])/J):(J=Math.sqrt(1+b[10]-b[0]-b[5])*2,d[3]=(b[1]-b[4])/J,d[0]=(b[8]+b[2])/J,d[1]=(b[6]+b[9])/J,d[2]=.25*J),d}function pe(d,b,Z,J){var ue=b[0],oe=b[1],xe=b[2],Me=b[3],me=ue+ue,ye=oe+oe,Te=xe+xe,Ce=ue*me,Ee=ue*ye,Pe=ue*Te,Ue=oe*ye,Fe=oe*Te,Re=xe*Te,Oe=Me*me,Ne=Me*ye,re=Me*Te,Le=J[0],De=J[1],Ie=J[2];return d[0]=(1-(Ue+Re))*Le,d[1]=(Ee+re)*Le,d[2]=(Pe-Ne)*Le,d[3]=0,d[4]=(Ee-re)*De,d[5]=(1-(Ce+Re))*De,d[6]=(Fe+Oe)*De,d[7]=0,d[8]=(Pe+Ne)*Ie,d[9]=(Fe-Oe)*Ie,d[10]=(1-(Ce+Ue))*Ie,d[11]=0,d[12]=Z[0],d[13]=Z[1],d[14]=Z[2],d[15]=1,d}function _e(d,b,Z,J,ue){var oe=b[0],xe=b[1],Me=b[2],me=b[3],ye=oe+oe,Te=xe+xe,Ce=Me+Me,Ee=oe*ye,Pe=oe*Te,Ue=oe*Ce,Fe=xe*Te,Re=xe*Ce,Oe=Me*Ce,Ne=me*ye,re=me*Te,Le=me*Ce,De=J[0],Ie=J[1],Be=J[2],ze=ue[0],He=ue[1],$e=ue[2];return d[0]=(1-(Fe+Oe))*De,d[1]=(Pe+Le)*De,d[2]=(Ue-re)*De,d[3]=0,d[4]=(Pe-Le)*Ie,d[5]=(1-(Ee+Oe))*Ie,d[6]=(Re+Ne)*Ie,d[7]=0,d[8]=(Ue+re)*Be,d[9]=(Re-Ne)*Be,d[10]=(1-(Ee+Fe))*Be,d[11]=0,d[12]=Z[0]+ze-(d[0]*ze+d[4]*He+d[8]*$e),d[13]=Z[1]+He-(d[1]*ze+d[5]*He+d[9]*$e),d[14]=Z[2]+$e-(d[2]*ze+d[6]*He+d[10]*$e),d[15]=1,d}function he(d,b){var Z=b[0],J=b[1],ue=b[2],oe=b[3],xe=Z+Z,Me=J+J,me=ue+ue,ye=Z*xe,Te=J*xe,Ce=J*Me,Ee=ue*xe,Pe=ue*Me,Ue=ue*me,Fe=oe*xe,Re=oe*Me,Oe=oe*me;return d[0]=1-Ce-Ue,d[1]=Te+Oe,d[2]=Ee-Re,d[3]=0,d[4]=Te-Oe,d[5]=1-ye-Ue,d[6]=Pe+Fe,d[7]=0,d[8]=Ee+Re,d[9]=Pe-Fe,d[10]=1-ye-Ce,d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,d}function N(d,b,Z,J,ue,oe,xe){var Me=1/(Z-b),me=1/(ue-J),ye=1/(oe-xe);return d[0]=oe*2*Me,d[1]=0,d[2]=0,d[3]=0,d[4]=0,d[5]=oe*2*me,d[6]=0,d[7]=0,d[8]=(Z+b)*Me,d[9]=(ue+J)*me,d[10]=(xe+oe)*ye,d[11]=-1,d[12]=0,d[13]=0,d[14]=xe*oe*2*ye,d[15]=0,d}function w(d,b,Z,J,ue){var oe=1/Math.tan(b/2),xe=1/(J-ue);return d[0]=oe/Z,d[1]=0,d[2]=0,d[3]=0,d[4]=0,d[5]=oe,d[6]=0,d[7]=0,d[8]=0,d[9]=0,d[10]=(ue+J)*xe,d[11]=-1,d[12]=0,d[13]=0,d[14]=2*ue*J*xe,d[15]=0,d}function G(d,b,Z,J){var ue=Math.tan(b.upDegrees*Math.PI/180),oe=Math.tan(b.downDegrees*Math.PI/180),xe=Math.tan(b.leftDegrees*Math.PI/180),Me=Math.tan(b.rightDegrees*Math.PI/180),me=2/(xe+Me),ye=2/(ue+oe);return d[0]=me,d[1]=0,d[2]=0,d[3]=0,d[4]=0,d[5]=ye,d[6]=0,d[7]=0,d[8]=-((xe-Me)*me*.5),d[9]=(ue-oe)*ye*.5,d[10]=J/(Z-J),d[11]=-1,d[12]=0,d[13]=0,d[14]=J*Z/(Z-J),d[15]=0,d}function ae(d,b,Z,J,ue,oe,xe){var Me=1/(b-Z),me=1/(J-ue),ye=1/(oe-xe);return d[0]=-2*Me,d[1]=0,d[2]=0,d[3]=0,d[4]=0,d[5]=-2*me,d[6]=0,d[7]=0,d[8]=0,d[9]=0,d[10]=2*ye,d[11]=0,d[12]=(b+Z)*Me,d[13]=(ue+J)*me,d[14]=(xe+oe)*ye,d[15]=1,d}function Q(d,b,Z,J){var ue=void 0,oe=void 0,xe=void 0,Me=void 0,me=void 0,ye=void 0,Te=void 0,Ce=void 0,Ee=void 0,Pe=void 0,Ue=b[0],Fe=b[1],Re=b[2],Oe=J[0],Ne=J[1],re=J[2],Le=Z[0],De=Z[1],Ie=Z[2];return Math.abs(Ue-Le)<l.EPSILON&&Math.abs(Fe-De)<l.EPSILON&&Math.abs(Re-Ie)<l.EPSILON?mat4.identity(d):(Te=Ue-Le,Ce=Fe-De,Ee=Re-Ie,Pe=1/Math.sqrt(Te*Te+Ce*Ce+Ee*Ee),Te*=Pe,Ce*=Pe,Ee*=Pe,ue=Ne*Ee-re*Ce,oe=re*Te-Oe*Ee,xe=Oe*Ce-Ne*Te,Pe=Math.sqrt(ue*ue+oe*oe+xe*xe),Pe?(Pe=1/Pe,ue*=Pe,oe*=Pe,xe*=Pe):(ue=0,oe=0,xe=0),Me=Ce*xe-Ee*oe,me=Ee*ue-Te*xe,ye=Te*oe-Ce*ue,Pe=Math.sqrt(Me*Me+me*me+ye*ye),Pe?(Pe=1/Pe,Me*=Pe,me*=Pe,ye*=Pe):(Me=0,me=0,ye=0),d[0]=ue,d[1]=Me,d[2]=Te,d[3]=0,d[4]=oe,d[5]=me,d[6]=Ce,d[7]=0,d[8]=xe,d[9]=ye,d[10]=Ee,d[11]=0,d[12]=-(ue*Ue+oe*Fe+xe*Re),d[13]=-(Me*Ue+me*Fe+ye*Re),d[14]=-(Te*Ue+Ce*Fe+Ee*Re),d[15]=1,d)}function ie(d,b,Z,J){var ue=b[0],oe=b[1],xe=b[2],Me=J[0],me=J[1],ye=J[2],Te=ue-Z[0],Ce=oe-Z[1],Ee=xe-Z[2],Pe=Te*Te+Ce*Ce+Ee*Ee;Pe>0&&(Pe=1/Math.sqrt(Pe),Te*=Pe,Ce*=Pe,Ee*=Pe);var Ue=me*Ee-ye*Ce,Fe=ye*Te-Me*Ee,Re=Me*Ce-me*Te;return d[0]=Ue,d[1]=Fe,d[2]=Re,d[3]=0,d[4]=Ce*Re-Ee*Fe,d[5]=Ee*Ue-Te*Re,d[6]=Te*Fe-Ce*Ue,d[7]=0,d[8]=Te,d[9]=Ce,d[10]=Ee,d[11]=0,d[12]=ue,d[13]=oe,d[14]=xe,d[15]=1,d}function K(d){return"mat4("+d[0]+", "+d[1]+", "+d[2]+", "+d[3]+", "+d[4]+", "+d[5]+", "+d[6]+", "+d[7]+", "+d[8]+", "+d[9]+", "+d[10]+", "+d[11]+", "+d[12]+", "+d[13]+", "+d[14]+", "+d[15]+")"}function le(d){return Math.sqrt(Math.pow(d[0],2)+Math.pow(d[1],2)+Math.pow(d[2],2)+Math.pow(d[3],2)+Math.pow(d[4],2)+Math.pow(d[5],2)+Math.pow(d[6],2)+Math.pow(d[7],2)+Math.pow(d[8],2)+Math.pow(d[9],2)+Math.pow(d[10],2)+Math.pow(d[11],2)+Math.pow(d[12],2)+Math.pow(d[13],2)+Math.pow(d[14],2)+Math.pow(d[15],2))}function fe(d,b,Z){return d[0]=b[0]+Z[0],d[1]=b[1]+Z[1],d[2]=b[2]+Z[2],d[3]=b[3]+Z[3],d[4]=b[4]+Z[4],d[5]=b[5]+Z[5],d[6]=b[6]+Z[6],d[7]=b[7]+Z[7],d[8]=b[8]+Z[8],d[9]=b[9]+Z[9],d[10]=b[10]+Z[10],d[11]=b[11]+Z[11],d[12]=b[12]+Z[12],d[13]=b[13]+Z[13],d[14]=b[14]+Z[14],d[15]=b[15]+Z[15],d}function Y(d,b,Z){return d[0]=b[0]-Z[0],d[1]=b[1]-Z[1],d[2]=b[2]-Z[2],d[3]=b[3]-Z[3],d[4]=b[4]-Z[4],d[5]=b[5]-Z[5],d[6]=b[6]-Z[6],d[7]=b[7]-Z[7],d[8]=b[8]-Z[8],d[9]=b[9]-Z[9],d[10]=b[10]-Z[10],d[11]=b[11]-Z[11],d[12]=b[12]-Z[12],d[13]=b[13]-Z[13],d[14]=b[14]-Z[14],d[15]=b[15]-Z[15],d}function ee(d,b,Z){return d[0]=b[0]*Z,d[1]=b[1]*Z,d[2]=b[2]*Z,d[3]=b[3]*Z,d[4]=b[4]*Z,d[5]=b[5]*Z,d[6]=b[6]*Z,d[7]=b[7]*Z,d[8]=b[8]*Z,d[9]=b[9]*Z,d[10]=b[10]*Z,d[11]=b[11]*Z,d[12]=b[12]*Z,d[13]=b[13]*Z,d[14]=b[14]*Z,d[15]=b[15]*Z,d}function se(d,b,Z,J){return d[0]=b[0]+Z[0]*J,d[1]=b[1]+Z[1]*J,d[2]=b[2]+Z[2]*J,d[3]=b[3]+Z[3]*J,d[4]=b[4]+Z[4]*J,d[5]=b[5]+Z[5]*J,d[6]=b[6]+Z[6]*J,d[7]=b[7]+Z[7]*J,d[8]=b[8]+Z[8]*J,d[9]=b[9]+Z[9]*J,d[10]=b[10]+Z[10]*J,d[11]=b[11]+Z[11]*J,d[12]=b[12]+Z[12]*J,d[13]=b[13]+Z[13]*J,d[14]=b[14]+Z[14]*J,d[15]=b[15]+Z[15]*J,d}function X(d,b){return d[0]===b[0]&&d[1]===b[1]&&d[2]===b[2]&&d[3]===b[3]&&d[4]===b[4]&&d[5]===b[5]&&d[6]===b[6]&&d[7]===b[7]&&d[8]===b[8]&&d[9]===b[9]&&d[10]===b[10]&&d[11]===b[11]&&d[12]===b[12]&&d[13]===b[13]&&d[14]===b[14]&&d[15]===b[15]}function z(d,b){var Z=d[0],J=d[1],ue=d[2],oe=d[3],xe=d[4],Me=d[5],me=d[6],ye=d[7],Te=d[8],Ce=d[9],Ee=d[10],Pe=d[11],Ue=d[12],Fe=d[13],Re=d[14],Oe=d[15],Ne=b[0],re=b[1],Le=b[2],De=b[3],Ie=b[4],Be=b[5],ze=b[6],He=b[7],$e=b[8],Je=b[9],qe=b[10],Qe=b[11],Ke=b[12],it=b[13],ht=b[14],ft=b[15];return Math.abs(Z-Ne)<=l.EPSILON*Math.max(1,Math.abs(Z),Math.abs(Ne))&&Math.abs(J-re)<=l.EPSILON*Math.max(1,Math.abs(J),Math.abs(re))&&Math.abs(ue-Le)<=l.EPSILON*Math.max(1,Math.abs(ue),Math.abs(Le))&&Math.abs(oe-De)<=l.EPSILON*Math.max(1,Math.abs(oe),Math.abs(De))&&Math.abs(xe-Ie)<=l.EPSILON*Math.max(1,Math.abs(xe),Math.abs(Ie))&&Math.abs(Me-Be)<=l.EPSILON*Math.max(1,Math.abs(Me),Math.abs(Be))&&Math.abs(me-ze)<=l.EPSILON*Math.max(1,Math.abs(me),Math.abs(ze))&&Math.abs(ye-He)<=l.EPSILON*Math.max(1,Math.abs(ye),Math.abs(He))&&Math.abs(Te-$e)<=l.EPSILON*Math.max(1,Math.abs(Te),Math.abs($e))&&Math.abs(Ce-Je)<=l.EPSILON*Math.max(1,Math.abs(Ce),Math.abs(Je))&&Math.abs(Ee-qe)<=l.EPSILON*Math.max(1,Math.abs(Ee),Math.abs(qe))&&Math.abs(Pe-Qe)<=l.EPSILON*Math.max(1,Math.abs(Pe),Math.abs(Qe))&&Math.abs(Ue-Ke)<=l.EPSILON*Math.max(1,Math.abs(Ue),Math.abs(Ke))&&Math.abs(Fe-it)<=l.EPSILON*Math.max(1,Math.abs(Fe),Math.abs(it))&&Math.abs(Re-ht)<=l.EPSILON*Math.max(1,Math.abs(Re),Math.abs(ht))&&Math.abs(Oe-ft)<=l.EPSILON*Math.max(1,Math.abs(Oe),Math.abs(ft))}a.mul=R,a.sub=Y},function(s,a,o){Object.defineProperty(a,"__esModule",{value:!0}),a.setAxes=a.sqlerp=a.rotationTo=a.equals=a.exactEquals=a.normalize=a.sqrLen=a.squaredLength=a.len=a.length=a.lerp=a.dot=a.scale=a.mul=a.add=a.set=a.copy=a.fromValues=a.clone=void 0,a.create=_,a.identity=L,a.setAxisAngle=x,a.getAxisAngle=M,a.multiply=R,a.rotateX=D,a.rotateY=I,a.rotateZ=y,a.calculateW=S,a.slerp=E,a.invert=O,a.conjugate=$,a.fromMat3=H,a.fromEuler=te,a.str=de;var c=o(0),l=v(c),u=o(1),h=v(u),p=o(2),f=v(p),m=o(3),g=v(m);function v(F){if(F&&F.__esModule)return F;var j={};if(F!=null)for(var ce in F)Object.prototype.hasOwnProperty.call(F,ce)&&(j[ce]=F[ce]);return j.default=F,j}function _(){var F=new l.ARRAY_TYPE(4);return F[0]=0,F[1]=0,F[2]=0,F[3]=1,F}function L(F){return F[0]=0,F[1]=0,F[2]=0,F[3]=1,F}function x(F,j,ce){ce=ce*.5;var pe=Math.sin(ce);return F[0]=pe*j[0],F[1]=pe*j[1],F[2]=pe*j[2],F[3]=Math.cos(ce),F}function M(F,j){var ce=Math.acos(j[3])*2,pe=Math.sin(ce/2);return pe!=0?(F[0]=j[0]/pe,F[1]=j[1]/pe,F[2]=j[2]/pe):(F[0]=1,F[1]=0,F[2]=0),ce}function R(F,j,ce){var pe=j[0],_e=j[1],he=j[2],N=j[3],w=ce[0],G=ce[1],ae=ce[2],Q=ce[3];return F[0]=pe*Q+N*w+_e*ae-he*G,F[1]=_e*Q+N*G+he*w-pe*ae,F[2]=he*Q+N*ae+pe*G-_e*w,F[3]=N*Q-pe*w-_e*G-he*ae,F}function D(F,j,ce){ce*=.5;var pe=j[0],_e=j[1],he=j[2],N=j[3],w=Math.sin(ce),G=Math.cos(ce);return F[0]=pe*G+N*w,F[1]=_e*G+he*w,F[2]=he*G-_e*w,F[3]=N*G-pe*w,F}function I(F,j,ce){ce*=.5;var pe=j[0],_e=j[1],he=j[2],N=j[3],w=Math.sin(ce),G=Math.cos(ce);return F[0]=pe*G-he*w,F[1]=_e*G+N*w,F[2]=he*G+pe*w,F[3]=N*G-_e*w,F}function y(F,j,ce){ce*=.5;var pe=j[0],_e=j[1],he=j[2],N=j[3],w=Math.sin(ce),G=Math.cos(ce);return F[0]=pe*G+_e*w,F[1]=_e*G-pe*w,F[2]=he*G+N*w,F[3]=N*G-he*w,F}function S(F,j){var ce=j[0],pe=j[1],_e=j[2];return F[0]=ce,F[1]=pe,F[2]=_e,F[3]=Math.sqrt(Math.abs(1-ce*ce-pe*pe-_e*_e)),F}function E(F,j,ce,pe){var _e=j[0],he=j[1],N=j[2],w=j[3],G=ce[0],ae=ce[1],Q=ce[2],ie=ce[3],K=void 0,le=void 0,fe=void 0,Y=void 0,ee=void 0;return le=_e*G+he*ae+N*Q+w*ie,le<0&&(le=-le,G=-G,ae=-ae,Q=-Q,ie=-ie),1-le>1e-6?(K=Math.acos(le),fe=Math.sin(K),Y=Math.sin((1-pe)*K)/fe,ee=Math.sin(pe*K)/fe):(Y=1-pe,ee=pe),F[0]=Y*_e+ee*G,F[1]=Y*he+ee*ae,F[2]=Y*N+ee*Q,F[3]=Y*w+ee*ie,F}function O(F,j){var ce=j[0],pe=j[1],_e=j[2],he=j[3],N=ce*ce+pe*pe+_e*_e+he*he,w=N?1/N:0;return F[0]=-ce*w,F[1]=-pe*w,F[2]=-_e*w,F[3]=he*w,F}function $(F,j){return F[0]=-j[0],F[1]=-j[1],F[2]=-j[2],F[3]=j[3],F}function H(F,j){var ce=j[0]+j[4]+j[8],pe=void 0;if(ce>0)pe=Math.sqrt(ce+1),F[3]=.5*pe,pe=.5/pe,F[0]=(j[5]-j[7])*pe,F[1]=(j[6]-j[2])*pe,F[2]=(j[1]-j[3])*pe;else{var _e=0;j[4]>j[0]&&(_e=1),j[8]>j[_e*3+_e]&&(_e=2);var he=(_e+1)%3,N=(_e+2)%3;pe=Math.sqrt(j[_e*3+_e]-j[he*3+he]-j[N*3+N]+1),F[_e]=.5*pe,pe=.5/pe,F[3]=(j[he*3+N]-j[N*3+he])*pe,F[he]=(j[he*3+_e]+j[_e*3+he])*pe,F[N]=(j[N*3+_e]+j[_e*3+N])*pe}return F}function te(F,j,ce,pe){var _e=.5*Math.PI/180;j*=_e,ce*=_e,pe*=_e;var he=Math.sin(j),N=Math.cos(j),w=Math.sin(ce),G=Math.cos(ce),ae=Math.sin(pe),Q=Math.cos(pe);return F[0]=he*G*Q-N*w*ae,F[1]=N*w*Q+he*G*ae,F[2]=N*G*ae-he*w*Q,F[3]=N*G*Q+he*w*ae,F}function de(F){return"quat("+F[0]+", "+F[1]+", "+F[2]+", "+F[3]+")"}a.clone=g.clone,a.fromValues=g.fromValues,a.copy=g.copy,a.set=g.set,a.add=g.add,a.mul=R,a.scale=g.scale,a.dot=g.dot,a.lerp=g.lerp;var ve=a.length=g.length;a.len=ve;var ge=a.squaredLength=g.squaredLength;a.sqrLen=ge;var q=a.normalize=g.normalize;a.exactEquals=g.exactEquals,a.equals=g.equals,a.rotationTo=function(){var F=f.create(),j=f.fromValues(1,0,0),ce=f.fromValues(0,1,0);return function(pe,_e,he){var N=f.dot(_e,he);return N<-.999999?(f.cross(F,j,_e),f.len(F)<1e-6&&f.cross(F,ce,_e),f.normalize(F,F),x(pe,F,Math.PI),pe):N>.999999?(pe[0]=0,pe[1]=0,pe[2]=0,pe[3]=1,pe):(f.cross(F,_e,he),pe[0]=F[0],pe[1]=F[1],pe[2]=F[2],pe[3]=1+N,q(pe,pe))}}(),a.sqlerp=function(){var F=_(),j=_();return function(ce,pe,_e,he,N,w){return E(F,pe,N,w),E(j,_e,he,w),E(ce,F,j,2*w*(1-w)),ce}}(),a.setAxes=function(){var F=h.create();return function(j,ce,pe,_e){return F[0]=pe[0],F[3]=pe[1],F[6]=pe[2],F[1]=_e[0],F[4]=_e[1],F[7]=_e[2],F[2]=-ce[0],F[5]=-ce[1],F[8]=-ce[2],q(j,H(j,F))}}()},function(s,a,o){Object.defineProperty(a,"__esModule",{value:!0}),a.forEach=a.sqrLen=a.sqrDist=a.dist=a.div=a.mul=a.sub=a.len=void 0,a.create=h,a.clone=p,a.fromValues=f,a.copy=m,a.set=g,a.add=v,a.subtract=_,a.multiply=L,a.divide=x,a.ceil=M,a.floor=R,a.min=D,a.max=I,a.round=y,a.scale=S,a.scaleAndAdd=E,a.distance=O,a.squaredDistance=$,a.length=H,a.squaredLength=te,a.negate=de,a.inverse=ve,a.normalize=ge,a.dot=q,a.cross=F,a.lerp=j,a.random=ce,a.transformMat2=pe,a.transformMat2d=_e,a.transformMat3=he,a.transformMat4=N,a.str=w,a.exactEquals=G,a.equals=ae;var c=o(0),l=u(c);function u(Q){if(Q&&Q.__esModule)return Q;var ie={};if(Q!=null)for(var K in Q)Object.prototype.hasOwnProperty.call(Q,K)&&(ie[K]=Q[K]);return ie.default=Q,ie}function h(){var Q=new l.ARRAY_TYPE(2);return Q[0]=0,Q[1]=0,Q}function p(Q){var ie=new l.ARRAY_TYPE(2);return ie[0]=Q[0],ie[1]=Q[1],ie}function f(Q,ie){var K=new l.ARRAY_TYPE(2);return K[0]=Q,K[1]=ie,K}function m(Q,ie){return Q[0]=ie[0],Q[1]=ie[1],Q}function g(Q,ie,K){return Q[0]=ie,Q[1]=K,Q}function v(Q,ie,K){return Q[0]=ie[0]+K[0],Q[1]=ie[1]+K[1],Q}function _(Q,ie,K){return Q[0]=ie[0]-K[0],Q[1]=ie[1]-K[1],Q}function L(Q,ie,K){return Q[0]=ie[0]*K[0],Q[1]=ie[1]*K[1],Q}function x(Q,ie,K){return Q[0]=ie[0]/K[0],Q[1]=ie[1]/K[1],Q}function M(Q,ie){return Q[0]=Math.ceil(ie[0]),Q[1]=Math.ceil(ie[1]),Q}function R(Q,ie){return Q[0]=Math.floor(ie[0]),Q[1]=Math.floor(ie[1]),Q}function D(Q,ie,K){return Q[0]=Math.min(ie[0],K[0]),Q[1]=Math.min(ie[1],K[1]),Q}function I(Q,ie,K){return Q[0]=Math.max(ie[0],K[0]),Q[1]=Math.max(ie[1],K[1]),Q}function y(Q,ie){return Q[0]=Math.round(ie[0]),Q[1]=Math.round(ie[1]),Q}function S(Q,ie,K){return Q[0]=ie[0]*K,Q[1]=ie[1]*K,Q}function E(Q,ie,K,le){return Q[0]=ie[0]+K[0]*le,Q[1]=ie[1]+K[1]*le,Q}function O(Q,ie){var K=ie[0]-Q[0],le=ie[1]-Q[1];return Math.sqrt(K*K+le*le)}function $(Q,ie){var K=ie[0]-Q[0],le=ie[1]-Q[1];return K*K+le*le}function H(Q){var ie=Q[0],K=Q[1];return Math.sqrt(ie*ie+K*K)}function te(Q){var ie=Q[0],K=Q[1];return ie*ie+K*K}function de(Q,ie){return Q[0]=-ie[0],Q[1]=-ie[1],Q}function ve(Q,ie){return Q[0]=1/ie[0],Q[1]=1/ie[1],Q}function ge(Q,ie){var K=ie[0],le=ie[1],fe=K*K+le*le;return fe>0&&(fe=1/Math.sqrt(fe),Q[0]=ie[0]*fe,Q[1]=ie[1]*fe),Q}function q(Q,ie){return Q[0]*ie[0]+Q[1]*ie[1]}function F(Q,ie,K){var le=ie[0]*K[1]-ie[1]*K[0];return Q[0]=Q[1]=0,Q[2]=le,Q}function j(Q,ie,K,le){var fe=ie[0],Y=ie[1];return Q[0]=fe+le*(K[0]-fe),Q[1]=Y+le*(K[1]-Y),Q}function ce(Q,ie){ie=ie||1;var K=l.RANDOM()*2*Math.PI;return Q[0]=Math.cos(K)*ie,Q[1]=Math.sin(K)*ie,Q}function pe(Q,ie,K){var le=ie[0],fe=ie[1];return Q[0]=K[0]*le+K[2]*fe,Q[1]=K[1]*le+K[3]*fe,Q}function _e(Q,ie,K){var le=ie[0],fe=ie[1];return Q[0]=K[0]*le+K[2]*fe+K[4],Q[1]=K[1]*le+K[3]*fe+K[5],Q}function he(Q,ie,K){var le=ie[0],fe=ie[1];return Q[0]=K[0]*le+K[3]*fe+K[6],Q[1]=K[1]*le+K[4]*fe+K[7],Q}function N(Q,ie,K){var le=ie[0],fe=ie[1];return Q[0]=K[0]*le+K[4]*fe+K[12],Q[1]=K[1]*le+K[5]*fe+K[13],Q}function w(Q){return"vec2("+Q[0]+", "+Q[1]+")"}function G(Q,ie){return Q[0]===ie[0]&&Q[1]===ie[1]}function ae(Q,ie){var K=Q[0],le=Q[1],fe=ie[0],Y=ie[1];return Math.abs(K-fe)<=l.EPSILON*Math.max(1,Math.abs(K),Math.abs(fe))&&Math.abs(le-Y)<=l.EPSILON*Math.max(1,Math.abs(le),Math.abs(Y))}a.len=H,a.sub=_,a.mul=L,a.div=x,a.dist=O,a.sqrDist=$,a.sqrLen=te,a.forEach=function(){var Q=h();return function(ie,K,le,fe,Y,ee){var se=void 0,X=void 0;for(K||(K=2),le||(le=0),fe?X=Math.min(fe*K+le,ie.length):X=ie.length,se=le;se<X;se+=K)Q[0]=ie[se],Q[1]=ie[se+1],Y(Q,Q,ee),ie[se]=Q[0],ie[se+1]=Q[1];return ie}}()}])})},{}],9:[function(t,n,i){/**
 * AUTHOR OF INITIAL JS LIBRARY
 * k-d Tree JavaScript - V 1.0
 *
 * https://github.com/ubilabs/kd-tree-javascript
 *
 * @author Mircea Pricop <pricop@ubilabs.net>, 2012
 * @author Martin Kleppe <kleppe@ubilabs.net>, 2012
 * @author Ubilabs http://ubilabs.net, 2012
 * @license MIT License <http://www.opensource.org/licenses/mit-license.php>
 */function s(c,l,u){this.obj=c,this.left=null,this.right=null,this.parent=u,this.dimension=l}function a(c,l,u){var h=this;function p(f,m,g){var v=m%u.length,_,L;return f.length===0?null:f.length===1?new s(f[0],v,g):(f.sort(function(x,M){return x[u[v]]-M[u[v]]}),_=Math.floor(f.length/2),L=new s(f[_],v,g),L.left=p(f.slice(0,_),m+1,L),L.right=p(f.slice(_+1),m+1,L),L)}this.root=p(c,0,null),this.insert=function(f){function m(L,x){if(L===null)return x;var M=u[L.dimension];return f[M]<L.obj[M]?m(L.left,L):m(L.right,L)}var g=m(this.root,null),v,_;if(g===null){this.root=new s(f,0,null);return}v=new s(f,(g.dimension+1)%u.length,g),_=u[g.dimension],f[_]<g.obj[_]?g.left=v:g.right=v},this.remove=function(f){var m;function g(_){if(_===null)return null;if(_.obj===f)return _;var L=u[_.dimension];return f[L]<_.obj[L]?g(_.left):g(_.right)}function v(_){var L,x,M;function R(I,y){var S,E,O,$,H;return I===null?null:(S=u[y],I.dimension===y?I.right!==null?R(I.right,y):I:(E=I.obj[S],O=R(I.left,y),$=R(I.right,y),H=I,O!==null&&O.obj[S]>E&&(H=O),$!==null&&$.obj[S]>H.obj[S]&&(H=$),H))}function D(I,y){var S,E,O,$,H;return I===null?null:(S=u[y],I.dimension===y?I.left!==null?D(I.left,y):I:(E=I.obj[S],O=D(I.left,y),$=D(I.right,y),H=I,O!==null&&O.obj[S]<E&&(H=O),$!==null&&$.obj[S]<H.obj[S]&&(H=$),H))}if(_.left===null&&_.right===null){if(_.parent===null){h.root=null;return}M=u[_.parent.dimension],_.obj[M]<_.parent.obj[M]?_.parent.left=null:_.parent.right=null;return}_.left!==null?L=R(_.left,_.dimension):L=D(_.right,_.dimension),x=L.obj,v(L),_.obj=x}m=g(h.root),m!==null&&v(m)},this.nearest=function(f,m,g){var v,_,L;L=new o(function(M){return-M[1]});function x(M){if(!h.root)return[];var R,D=u[M.dimension],I=l(f,M.obj),y={},S,E,O;function $(H,te){L.push([H,te]),L.size()>m&&L.pop()}for(O=0;O<u.length;O+=1)O===M.dimension?y[u[O]]=f[u[O]]:y[u[O]]=M.obj[u[O]];if(S=l(y,M.obj),M.right===null&&M.left===null){(L.size()<m||I<L.peek()[1])&&$(M,I);return}M.right===null?R=M.left:M.left===null?R=M.right:f[D]<M.obj[D]?R=M.left:R=M.right,x(R),(L.size()<m||I<L.peek()[1])&&$(M,I),(L.size()<m||Math.abs(S)<L.peek()[1])&&(R===M.left?E=M.right:E=M.left,E!==null&&x(E))}if(g)for(v=0;v<m;v+=1)L.push([null,g]);for(x(h.root),_=[],v=0;v<m&&v<L.content.length;v+=1)L.content[v][0]&&_.push([L.content[v][0].obj,L.content[v][1]]);return _},this.balanceFactor=function(){function f(g){return g===null?0:Math.max(f(g.left),f(g.right))+1}function m(g){return g===null?0:m(g.left)+m(g.right)+1}return f(h.root)/(Math.log(m(h.root))/Math.log(2))}}function o(c){this.content=[],this.scoreFunction=c}o.prototype={push:function(c){this.content.push(c),this.bubbleUp(this.content.length-1)},pop:function(){var c=this.content[0],l=this.content.pop();return this.content.length>0&&(this.content[0]=l,this.sinkDown(0)),c},peek:function(){return this.content[0]},remove:function(c){for(var l=this.content.length,u=0;u<l;u++)if(this.content[u]==c){var h=this.content.pop();u!=l-1&&(this.content[u]=h,this.scoreFunction(h)<this.scoreFunction(c)?this.bubbleUp(u):this.sinkDown(u));return}throw new Error("Node not found.")},size:function(){return this.content.length},bubbleUp:function(c){for(var l=this.content[c];c>0;){var u=Math.floor((c+1)/2)-1,h=this.content[u];if(this.scoreFunction(l)<this.scoreFunction(h))this.content[u]=l,this.content[c]=h,c=u;else break}},sinkDown:function(c){for(var l=this.content.length,u=this.content[c],h=this.scoreFunction(u);;){var p=(c+1)*2,f=p-1,m=null;if(f<l){var g=this.content[f],v=this.scoreFunction(g);v<h&&(m=f)}if(p<l){var _=this.content[p],L=this.scoreFunction(_);L<(m==null?h:v)&&(m=p)}if(m!=null)this.content[c]=this.content[m],this.content[m]=u,c=m;else break}}},n.exports={createKdTree:function(c,l,u){return new a(c,l,u)}}},{}],10:[function(t,n,i){n.exports={name:"serve-sofa-hrir",exports:"serveSofaHrir",version:"0.4.2",description:"Utility to fetch and shape sofa formated HRIR from server",main:"./dist/",standalone:"serveSofaHrir",scripts:{lint:"eslint ./src/ ./test/ && jscs --verbose ./src/ ./test/","lint-examples":"eslint -c examples/.eslintrc ./examples/*.html",compile:"rm -rf ./dist && babel ./src/ --out-dir ./dist/",browserify:"browserify ./src/index.js -t [ babelify ] --standalone serveSofaHrir > serveSofaHrir.js",bundle:"npm run lint && npm run test && npm run doc && npm run compile && npm run browserify",doc:"esdoc -c esdoc.json",test:"browserify test/*/*.js -t [ babelify ] --exclude 'test/*/*_listen.js*' --exclude 'test/*/*_issues.js' | tape-run","test-browser":"browserify test/*/*.js -t [ babelify ] --exclude 'test/*/*_listen.js*' --exclude 'test/*/*_issues.js' | testling -u","test-listen":"browserify test/*/*_listen.js -t [ babelify ] | tape-run","test-issues":"browserify test/*/*_issues.js -t [ babelify ] | tape-run",watch:"watch 'npm run browserify && echo $( date ): browserified' ./src/"},authors:["Jean-Philippe.Lambert@ircam.fr","Arnau Julià <arnau.julia@gmail.com>","Samuel.Goldszmidt@ircam.fr","David.Poirier-Quinot@ircam.fr"],license:"BSD-3-Clause",dependencies:{"fractional-delay":"git://github.com/Ircam-RnD/fractional-delay#gh-pages","gl-matrix":"^2.4.0","kd.tree":"akshaylive/node-kdt#39bc780704a324393bca68a17cf7bc71be8544c6"},repository:{type:"git",url:"https://github.com/Ircam-RnD/serveSofaHrir"},engines:{node:"0.12 || 4",npm:">=1.0.0 <3.0.0"},devDependencies:{"babel-cli":"^6.5.1","babel-eslint":"^4.1.8","babel-preset-es2015":"^6.5.0",babelify:"^7.2.0","blue-tape":"^0.1.11",browserify:"^12.0.2",esdoc:"^0.4.6",eslint:"^1.10.3","eslint-config-airbnb":"^1.0.2","eslint-plugin-html":"^1.4.0",jscs:"2.11.0","jscs-jsdoc":"^1.3.1",tape:"^4.4.0","tape-run":"^2.1.2",testling:"^1.7.1",watch:"^0.17.1"}}},{}],11:[function(t,n,i){Object.defineProperty(i,"__esModule",{value:!0}),i.resampleFloat32Array=c;var s=t("fractional-delay"),a=o(s);function o(l){return l&&l.__esModule?l:{default:l}}function c(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},u=new Promise(function(h,p){var f=l.inputSamples,m=l.inputSampleRate,g=typeof l.inputDelay<"u"?l.inputDelay:0,v=typeof l.outputSampleRate<"u"?l.outputSampleRate:m;if(m===v&&g===0)h(new Float32Array(f));else try{var _=Math.ceil(f.length*v/m),L=new window.OfflineAudioContext(1,_,v),x=L.createBuffer(1,f.length,m),M=1,R=new a.default(m,M);R.setDelay(g/m),x.getChannelData(0).set(R.process(f));var D=L.createBufferSource();D.buffer=x,D.connect(L.destination),D.start(),L.oncomplete=function(I){var y=I.renderedBuffer.getChannelData(0);h(y)},L.startRendering()}catch(I){p(new Error("Unable to re-sample Float32Array. "+I.message))}});return u}/**
 * @fileOverview Audio utilities
 * @author Jean-Philippe.Lambert@ircam.fr
 * @copyright 2016 IRCAM, Paris, France
 * @license BSD-3-Clause
 */i.default={resampleFloat32Array:c}},{"fractional-delay":7}],12:[function(t,n,i){Object.defineProperty(i,"__esModule",{value:!0}),i.tree=void 0,i.distanceSquared=c,i.distance=l;var s=t("kd.tree"),a=o(s);function o(u){return u&&u.__esModule?u:{default:u}}i.tree=a.default;/**
 * @fileOverview Helpers for k-d tree.
 * @author Jean-Philippe.Lambert@ircam.fr
 * @copyright 2015-2016 IRCAM, Paris, France
 * @license BSD-3-Clause
 */function c(u,h){var p=h.x-u.x,f=h.y-u.y,m=h.z-u.z;return p*p+f*f+m*m}function l(u,h){return Math.sqrt(this.distanceSquared(u,h))}i.default={distance:l,distanceSquared:c,tree:a.default}},{"kd.tree":9}],13:[function(t,n,i){Object.defineProperty(i,"__esModule",{value:!0}),i.sofaCartesianToGl=c,i.glToSofaCartesian=l,i.sofaCartesianToSofaSpherical=u,i.sofaSphericalToSofaCartesian=h,i.sofaSphericalToGl=p,i.glToSofaSpherical=f,i.sofaToSofaCartesian=m,i.spat4CartesianToGl=g,i.glToSpat4Cartesian=v,i.spat4CartesianToSpat4Spherical=_,i.spat4SphericalToSpat4Cartesian=L,i.spat4SphericalToGl=x,i.glToSpat4Spherical=M,i.systemType=R,i.systemToGl=D,i.glToSystem=I;var s=t("./degree"),a=o(s);function o(y){return y&&y.__esModule?y:{default:y}}function c(y,S){var E=S[0],O=S[1],$=S[2];return y[0]=0-O,y[1]=$,y[2]=0-E,y}/**
 * @fileOverview Coordinate systems conversions. openGL, SOFA, and Spat4 (Ircam).
 *
 * @author Jean-Philippe.Lambert@ircam.fr
 * @copyright 2015-2016 IRCAM, Paris, France
 * @license BSD-3-Clause
 */function l(y,S){var E=S[0],O=S[1],$=S[2];return y[0]=0-$,y[1]=0-E,y[2]=O,y}function u(y,S){var E=S[0],O=S[1],$=S[2],H=E*E+O*O;return y[0]=(a.default.atan2(O,E)+360)%360,y[1]=a.default.atan2($,Math.sqrt(H)),y[2]=Math.sqrt(H+$*$),y}function h(y,S){var E=S[0],O=S[1],$=S[2],H=a.default.cos(O);return y[0]=$*H*a.default.cos(E),y[1]=$*H*a.default.sin(E),y[2]=$*a.default.sin(O),y}function p(y,S){var E=S[0],O=S[1],$=S[2],H=a.default.cos(O);return y[0]=0-$*H*a.default.sin(E),y[1]=$*a.default.sin(O),y[2]=0-$*H*a.default.cos(E),y}function f(y,S){var E=0-S[2],O=0-S[0],$=S[1],H=E*E+O*O;return y[0]=(a.default.atan2(O,E)+360)%360,y[1]=a.default.atan2($,Math.sqrt(H)),y[2]=Math.sqrt(H+$*$),y}function m(y,S,E){switch(E){case"sofaCartesian":y[0]=S[0],y[1]=S[1],y[2]=S[2];break;case"sofaSpherical":h(y,S);break;default:throw new Error("Bad coordinate system")}return y}function g(y,S){var E=S[0],O=S[1],$=S[2];return y[0]=E,y[1]=$,y[2]=0-O,y}function v(y,S){var E=S[0],O=S[1],$=S[2];return y[0]=E,y[1]=0-$,y[2]=O,y}function _(y,S){var E=S[0],O=S[1],$=S[2],H=E*E+O*O;return y[0]=a.default.atan2(E,O),y[1]=a.default.atan2($,Math.sqrt(H)),y[2]=Math.sqrt(H+$*$),y}function L(y,S){var E=S[0],O=S[1],$=S[2],H=a.default.cos(O);return y[0]=$*H*a.default.sin(E),y[1]=$*H*a.default.cos(E),y[2]=$*a.default.sin(O),y}function x(y,S){var E=S[0],O=S[1],$=S[2],H=a.default.cos(O);return y[0]=$*H*a.default.sin(E),y[1]=$*a.default.sin(O),y[2]=0-$*H*a.default.cos(E),y}function M(y,S){var E=S[0],O=0-S[2],$=S[1],H=E*E+O*O;return y[0]=a.default.atan2(E,O),y[1]=a.default.atan2($,Math.sqrt(H)),y[2]=Math.sqrt(H+$*$),y}function R(y){var S=void 0;if(y==="sofaCartesian"||y==="spat4Cartesian"||y==="gl")S="cartesian";else if(y==="sofaSpherical"||y==="spat4Spherical")S="spherical";else throw new Error("Unknown coordinate system type "+y);return S}function D(y,S,E){switch(E){case"gl":y[0]=S[0],y[1]=S[1],y[2]=S[2];break;case"sofaCartesian":c(y,S);break;case"sofaSpherical":p(y,S);break;case"spat4Cartesian":g(y,S);break;case"spat4Spherical":x(y,S);break;default:throw new Error("Bad coordinate system")}return y}function I(y,S,E){switch(E){case"gl":y[0]=S[0],y[1]=S[1],y[2]=S[2];break;case"sofaCartesian":l(y,S);break;case"sofaSpherical":f(y,S);break;case"spat4Cartesian":v(y,S);break;case"spat4Spherical":M(y,S);break;default:throw new Error("Bad coordinate system")}return y}i.default={glToSofaCartesian:l,glToSofaSpherical:f,glToSpat4Cartesian:v,glToSpat4Spherical:M,glToSystem:I,sofaCartesianToGl:c,sofaCartesianToSofaSpherical:u,sofaSphericalToGl:p,sofaSphericalToSofaCartesian:h,sofaToSofaCartesian:m,spat4CartesianToGl:g,spat4CartesianToSpat4Spherical:_,spat4SphericalToGl:x,spat4SphericalToSpat4Cartesian:L,systemToGl:D,systemType:R}},{"./degree":14}],14:[function(t,n,i){Object.defineProperty(i,"__esModule",{value:!0}),i.toRadian=o,i.fromRadian=c,i.cos=l,i.sin=u,i.atan2=h;/**
 * @fileOverview Convert to and from degree
 * @author Jean-Philippe.Lambert@ircam.fr
 * @copyright 2015-2016 IRCAM, Paris, France
 * @license BSD-3-Clause
 */var s=i.toRadianFactor=Math.PI/180,a=i.fromRadianFactor=1/s;function o(p){return p*s}function c(p){return p*a}function l(p){return Math.cos(p*s)}function u(p){return Math.sin(p*s)}function h(p,f){return Math.atan2(p,f)*a}i.default={atan2:h,cos:l,fromRadian:c,fromRadianFactor:a,sin:u,toRadian:o,toRadianFactor:s}},{}],15:[function(t,n,i){Object.defineProperty(i,"__esModule",{value:!0}),i.ServerDataBase=i.HrtfSet=void 0;var s=t("./sofa/HrtfSet"),a=l(s),o=t("./sofa/ServerDataBase"),c=l(o);function l(u){return u&&u.__esModule?u:{default:u}}i.HrtfSet=a.default,i.ServerDataBase=c.default,i.default={HrtfSet:a.default,ServerDataBase:c.default}},{"./sofa/HrtfSet":17,"./sofa/ServerDataBase":18}],16:[function(t,n,i){Object.defineProperty(i,"__esModule",{value:!0}),i.version=i.name=i.license=i.description=void 0;var s=t("../package.json"),a=o(s);function o(p){return p&&p.__esModule?p:{default:p}}var c=a.default.description;/**
 * @fileOverview Information on the library, from the `package.json` file.
 *
 * @author Jean-Philippe.Lambert@ircam.fr
 * @copyright 2016 IRCAM, Paris, France
 * @license BSD-3-Clause
 */i.description=c;var l=a.default.license;i.license=l;var u=a.default.name;i.name=u;var h=a.default.version;i.version=h,i.default={description:c,license:l,name:u,version:h}},{"../package.json":10}],17:[function(t,n,i){Object.defineProperty(i,"__esModule",{value:!0}),i.HrtfSet=void 0;var s=function(){function D(I,y){for(var S=0;S<y.length;S++){var E=y[S];E.enumerable=E.enumerable||!1,E.configurable=!0,"value"in E&&(E.writable=!0),Object.defineProperty(I,E.key,E)}}return function(I,y,S){return y&&D(I.prototype,y),S&&D(I,S),I}}();/**
 * @fileOverview Container for HRTF set: load a set from an URL and get
 * filters from corresponding positions.
 *
 * @author Jean-Philippe.Lambert@ircam.fr
 * @copyright 2015-2016 IRCAM, Paris, France
 * @license BSD-3-Clause
 */var a=t("gl-matrix"),o=L(a),c=t("../info"),l=_(c),u=t("./parseDataSet"),h=t("./parseSofa"),p=t("../geometry/coordinates"),f=_(p),m=t("../geometry/KdTree"),g=_(m),v=t("../audio/utilities");function _(D){return D&&D.__esModule?D:{default:D}}function L(D){if(D&&D.__esModule)return D;var I={};if(D!=null)for(var y in D)Object.prototype.hasOwnProperty.call(D,y)&&(I[y]=D[y]);return I.default=D,I}function x(D){if(Array.isArray(D)){for(var I=0,y=Array(D.length);I<D.length;I++)y[I]=D[I];return y}else return Array.from(D)}function M(D,I){if(!(D instanceof I))throw new TypeError("Cannot call a class as a function")}var R=i.HrtfSet=function(){function D(){var I=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};M(this,D),this._audioContext=I.audioContext,this._ready=!1,this.coordinateSystem=I.coordinateSystem,this.filterCoordinateSystem=I.filterCoordinateSystem,this.filterPositions=I.filterPositions,this.filterAfterLoad=I.filterAfterLoad}return s(D,[{key:"applyFilterPositions",value:function(){var y=this,S=this._filterPositions.map(function(E){return y._kdt.nearest({x:E[0],y:E[1],z:E[2]},1).pop()[0]});S=[].concat(x(new Set(S))),this._kdt=g.default.tree.createKdTree(S,g.default.distanceSquared,["x","y","z"])}},{key:"load",value:function(y){var S=this,E=y.split(".").pop(),O=E==="sofa"?y+".json":y,$=void 0,H=typeof this._filterPositions<"u"&&!this.filterAfterLoad&&E==="sofa";return H?$=Promise.all([this._loadMetaAndPositions(y),this._loadDataSet(y)]).then(function(te){var de=te[0],ve=te[1];return S._loadSofaPartial(y,de,ve).then(function(){return S._ready=!0,S})}).catch(function(){return S._loadSofaFull(O).then(function(){return S.applyFilterPositions(),S._ready=!0,S})}):$=this._loadSofaFull(O).then(function(){return typeof S._filterPositions<"u"&&S.filterAfterLoad&&S.applyFilterPositions(),S._ready=!0,S}),$}},{key:"export",value:function(){var y=this,S=void 0,E=f.default.systemType(this.filterCoordinateSystem);switch(E){case"cartesian":S=this._sofaSourcePosition.map(function($){return f.default.glToSofaCartesian([],$)});break;case"spherical":S=this._sofaSourcePosition.map(function($){return f.default.glToSofaSpherical([],$)});break;default:throw new Error("Bad source position type "+E+" for export.")}var O=this._sofaSourcePosition.map(function($){for(var H=y._kdt.nearest({x:$[0],y:$[1],z:$[2]},1).pop()[0].fir,te=[],de=0;de<H.numberOfChannels;++de)te.push([].concat(x(H.getChannelData(de))));return te});return(0,h.stringifySofa)({name:this._sofaName,metaData:this._sofaMetaData,ListenerPosition:[0,0,0],ListenerPositionType:"cartesian",ListenerUp:[0,0,1],ListenerUpType:"cartesian",ListenerView:[1,0,0],ListenerViewType:"cartesian",SourcePositionType:E,SourcePosition:S,DataSamplingRate:this._audioContext.sampleRate,DataDelay:this._sofaDelay,DataIR:O,RoomVolume:this._sofaRoomVolume})}},{key:"nearest",value:function(y){var S=f.default.systemToGl([],y,this.coordinateSystem),E=this._kdt.nearest({x:S[0],y:S[1],z:S[2]},1).pop(),O=E[0];return f.default.glToSystem(S,[O.x,O.y,O.z],this.coordinateSystem),{distance:E[1],fir:O.fir,index:O.index,position:S}}},{key:"nearestFir",value:function(y){return this.nearest(y).fir}},{key:"_createKdTree",value:function(y){var S=this,E=y.map(function(O){var $=O[2],H=S._audioContext.createBuffer($.length,$[0].length,S._audioContext.sampleRate);return $.forEach(function(te,de){H.getChannelData(de).set(te)}),{index:O[0],x:O[1][0],y:O[1][1],z:O[1][2],fir:H}});return this._sofaSourcePosition=E.map(function(O){return[O.x,O.y,O.z]}),this._kdt=g.default.tree.createKdTree(E,g.default.distanceSquared,["x","y","z"]),this}},{key:"_generateIndicesPositionsFirs",value:function(y,S,E,O){var $=this,H=E.map(function(te,de){var ve=te.length;if(ve!==2)throw new Error("Bad number of channels"+(" for IR index "+y[de])+(" ("+ve+" instead of 2)"));if(O[0].length!==2)throw new Error("Bad delay format"+(" for IR index "+y[de])+(" (first element in Data.Delay is "+O[0])+" instead of [[delayL, delayR]] )");var ge=typeof O[de]<"u"?O[de]:O[0],q=te.map(function(F,j){if(ge[j]<0)throw new Error("Negative delay detected (not handled at the moment):"+(" delay index "+y[de])+(" channel "+j));return(0,v.resampleFloat32Array)({inputSamples:F,inputDelay:ge[j],inputSampleRate:$._sofaSampleRate,outputSampleRate:$._audioContext.sampleRate})});return Promise.all(q).then(function(F){return[y[de],S[de],F]}).catch(function(F){throw new Error("Unable to re-sample impulse response "+de+". "+F.message)})});return Promise.all(H)}},{key:"_loadDataSet",value:function(y){var S=new Promise(function(E,O){var $=y+".dds",H=new window.XMLHttpRequest;H.open("GET",$),H.onerror=function(){O(new Error("Unable to GET "+$+", status "+H.status+" "+(""+H.responseText)))},H.onload=function(){if(H.status<200||H.status>=300){H.onerror();return}try{var te=(0,u.parseDataSet)(H.response);E(te)}catch(de){O(new Error("Unable to parse "+$+". "+de.message))}},H.send()});return S}},{key:"_loadMetaAndPositions",value:function(y){var S=this,E=new Promise(function(O,$){var H=y+".json?ListenerPosition,ListenerUp,ListenerView,SourcePosition,Data.Delay,Data.SamplingRate,EmitterPosition,ReceiverPosition,RoomVolume",te=new window.XMLHttpRequest;te.open("GET",H),te.onerror=function(){$(new Error("Unable to GET "+H+", status "+te.status+" "+(""+te.responseText)))},te.onload=function(){if(te.status<200||te.status>=300){te.onerror();return}try{var de=(0,h.parseSofa)(te.response);S._setMetaData(de,y);var ve=S._sourcePositionsToGl(de),ge=ve.map(function(j,ce){return{x:j[0],y:j[1],z:j[2],index:ce}}),q=g.default.tree.createKdTree(ge,g.default.distanceSquared,["x","y","z"]),F=S._filterPositions.map(function(j){return q.nearest({x:j[0],y:j[1],z:j[2]},1).pop()[0].index});F=[].concat(x(new Set(F))),S._sofaUrl=y,O(F)}catch(j){$(new Error("Unable to parse "+H+". "+j.message))}},te.send()});return E}},{key:"_loadSofaFull",value:function(y){var S=this,E=new Promise(function(O,$){var H=new window.XMLHttpRequest;H.open("GET",y),H.onerror=function(){$(new Error("Unable to GET "+y+", status "+H.status+" "+(""+H.responseText)))},H.onload=function(){if(H.status<200||H.status>=300){H.onerror();return}try{var te=(0,h.parseSofa)(H.response);S._setMetaData(te,y);var de=S._sourcePositionsToGl(te);S._generateIndicesPositionsFirs(de.map(function(ve,ge){return ge}),de,te["Data.IR"].data,te["Data.Delay"].data).then(function(ve){S._createKdTree(ve),S._sofaUrl=y,O(S)})}catch(ve){$(new Error("Unable to parse "+y+". "+ve.message))}},H.send()});return E}},{key:"_loadSofaPartial",value:function(y,S,E){var O=this,$=S.map(function(H){var te=new Promise(function(de,ve){var ge=y+".json?"+("SourcePosition["+H+"][0:1:"+(E.SourcePosition.C-1)+"],")+("Data.IR["+H+"][0:1:"+(E["Data.IR"].R-1)+"]")+("[0:1:"+(E["Data.IR"].N-1)+"]"),q=new window.XMLHttpRequest;q.open("GET",ge),q.onerror=function(){ve(new Error("Unable to GET "+ge+", status "+q.status+" "+(""+q.responseText)))},q.onload=function(){(q.status<200||q.status>=300)&&q.onerror();try{var F=(0,h.parseSofa)(q.response),j=O._sourcePositionsToGl(F);O._generateIndicesPositionsFirs([H],j,F["Data.IR"].data,F["Data.Delay"].data).then(function(ce){de(ce[0])})}catch(ce){ve(new Error("Unable to parse "+ge+". "+ce.message))}},q.send()});return te});return Promise.all($).then(function(H){return O._createKdTree(H),O})}},{key:"_setMetaData",value:function(y,S){if(typeof y.metaData.DataType<"u"&&y.metaData.DataType!=="FIR")throw new Error("According to meta-data, SOFA data type is not FIR");var E=new Date().toISOString();this._sofaName=typeof y.name<"u"?""+y.name:"HRTF.sofa",this._sofaMetaData=typeof y.metaData<"u"?y.metaData:{},typeof S<"u"&&(this._sofaMetaData.OriginalUrl=S),this._sofaMetaData.Converter="Ircam "+l.default.name+" "+l.default.version+" javascript API ",this._sofaMetaData.DateConverted=E,this._sofaSampleRate=typeof y["Data.SamplingRate"]<"u"?y["Data.SamplingRate"].data[0]:48e3,this._sofaSampleRate!==this._audioContext.sampleRate&&(this._sofaMetaData.OriginalSampleRate=this._sofaSampleRate),this._sofaDelay=typeof y["Data.Delay"]<"u"?y["Data.Delay"].data:[0,0],this._sofaRoomVolume=typeof y.RoomVolume<"u"?y.RoomVolume.data[0]:void 0;var O=f.default.sofaToSofaCartesian([],y.ListenerPosition.data[0],(0,h.conformSofaCoordinateSystem)(y.ListenerPosition.Type||"cartesian")),$=f.default.sofaToSofaCartesian([],y.ListenerView.data[0],(0,h.conformSofaCoordinateSystem)(y.ListenerView.Type||"cartesian")),H=f.default.sofaToSofaCartesian([],y.ListenerUp.data[0],(0,h.conformSofaCoordinateSystem)(y.ListenerUp.Type||"cartesian"));this._sofaToGl=o.mat4.lookAt([],O,$,H)}},{key:"_sourcePositionsToGl",value:function(y){var S=this,E=y.SourcePosition.data,O=typeof y.SourcePosition.Type<"u"?y.SourcePosition.Type:"spherical";switch(O){case"cartesian":E.forEach(function($){o.vec3.transformMat4($,$,S._sofaToGl)});break;case"spherical":E.forEach(function($){f.default.sofaSphericalToSofaCartesian($,$),o.vec3.transformMat4($,$,S._sofaToGl)});break;default:throw new Error("Bad source position type")}return E}},{key:"coordinateSystem",set:function(y){this._coordinateSystem=typeof y<"u"?y:"gl"},get:function(){return this._coordinateSystem}},{key:"filterCoordinateSystem",set:function(y){this._filterCoordinateSystem=typeof y<"u"?y:this.coordinateSystem},get:function(){return this._filterCoordinateSystem}},{key:"filterPositions",set:function(y){if(typeof y>"u")this._filterPositions=void 0;else switch(this.filterCoordinateSystem){case"gl":this._filterPositions=y.map(function(S){return S.slice(0)});break;case"sofaCartesian":this._filterPositions=y.map(function(S){return f.default.sofaCartesianToGl([],S)});break;case"sofaSpherical":this._filterPositions=y.map(function(S){return f.default.sofaSphericalToGl([],S)});break;default:throw new Error("Bad filter coordinate system")}},get:function(){var y=void 0;if(typeof this._filterPositions<"u")switch(this.filterCoordinateSystem){case"gl":y=this._filterPositions.map(function(S){return S.slice(0)});break;case"sofaCartesian":y=this._filterPositions.map(function(S){return f.default.glToSofaCartesian([],S)});break;case"sofaSpherical":y=this._filterPositions.map(function(S){return f.default.glToSofaSpherical([],S)});break;default:throw new Error("Bad filter coordinate system")}return y}},{key:"filterAfterLoad",set:function(y){this._filterAfterLoad=typeof y<"u"?y:!1},get:function(){return this._filterAfterLoad}},{key:"isReady",get:function(){return this._ready}},{key:"sofaName",get:function(){return this._sofaName}},{key:"sofaUrl",get:function(){return this._sofaUrl}},{key:"sofaSampleRate",get:function(){return this._sofaSampleRate}},{key:"sofaMetaData",get:function(){return this._sofaMetaData}}]),D}();i.default=R},{"../audio/utilities":11,"../geometry/KdTree":12,"../geometry/coordinates":13,"../info":16,"./parseDataSet":19,"./parseSofa":20,"gl-matrix":8}],18:[function(t,n,i){Object.defineProperty(i,"__esModule",{value:!0}),i.ServerDataBase=void 0;var s=function(){function p(f,m){for(var g=0;g<m.length;g++){var v=m[g];v.enumerable=v.enumerable||!1,v.configurable=!0,"value"in v&&(v.writable=!0),Object.defineProperty(f,v.key,v)}}return function(f,m,g){return m&&p(f.prototype,m),g&&p(f,g),f}}();/**
 * @fileOverview Access a remote catalogue from a SOFA server, and get URLs
 * with filtering.
 *
 * @author Jean-Philippe.Lambert@ircam.fr
 * @copyright 2015-2016 IRCAM, Paris, France
 * @license BSD-3-Clause
 */var a=t("./parseXml"),o=l(a),c=t("./parseDataSet");function l(p){return p&&p.__esModule?p:{default:p}}function u(p,f){if(!(p instanceof f))throw new TypeError("Cannot call a class as a function")}var h=i.ServerDataBase=function(){function p(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(u(this,p),this._server=f.serverUrl,typeof this._server>"u"){var m=window.location.protocol==="https:"?"https:":"http:";this._server=m+"//bili2.ircam.fr"}this._catalogue={},this._urls=[]}return s(p,[{key:"loadCatalogue",value:function(){var m=this,g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this._server+"/catalog.xml",v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this._catalogue,_=new Promise(function(L,x){var M=new window.XMLHttpRequest;M.open("GET",g),M.onerror=function(){x(new Error("Unable to GET "+g+", status "+M.status+" "+(""+M.responseText)))},M.onload=function(){if(M.status<200||M.status>=300){M.onerror();return}var R=(0,o.default)(M.response),D=R.querySelector("dataset"),I=R.querySelectorAll("dataset > catalogRef");if(I.length===0){v.urls=[];for(var y=R.querySelectorAll("dataset > dataset"),S=0;S<y.length;++S){var E=m._server+D.getAttribute("name")+"/"+y[S].getAttribute("name");m._urls.push(E),v.urls.push(E)}L(g)}else{for(var O=[],$=0;$<I.length;++$){var H=I[$].getAttribute("name"),te=m._server+D.getAttribute("name")+"/"+I[$].getAttribute("xlink:href");v[H]={},O.push(m.loadCatalogue(te,v[H]))}Promise.all(O).then(function(){m._urls.sort(),L(g)}).catch(function(de){x(de)})}},M.send()});return _}},{key:"getUrls",value:function(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},g=[m.convention,m.dataBase,m.equalisation,m.sampleRate,m.sosOrder],v=typeof m.freePattern=="number"?m.freePattern.toString():m.freePattern,_=g.reduce(function(R,D){return R+"/"+(typeof D<"u"?"[^/]*(?:"+D+")[^/]*":"[^/]*")},""),L=new RegExp(_,"i"),x=this._urls.filter(function(R){return L.test(R)});if(typeof v<"u"){var M=v.split(/\s+/);M.forEach(function(R){L=new RegExp(R,"i"),x=x.filter(function(D){return L.test(D)})})}return x}},{key:"getDataSetDefinitions",value:function(m){var g=new Promise(function(v,_){var L=m+".dds",x=new window.XMLHttpRequest;x.open("GET",L),x.onerror=function(){_(new Error("Unable to GET "+L+", status "+x.status+" "+(""+x.responseText)))},x.onload=function(){if(x.status<200||x.status>=300){x.onerror();return}v((0,c.parseDataSet)(x.response))},x.send()});return g}},{key:"getSourcePositions",value:function(m){var g=new Promise(function(v,_){var L=m+".json?SourcePosition",x=new window.XMLHttpRequest;x.open("GET",L),x.onerror=function(){_(new Error("Unable to GET "+L+", status "+x.status+" "+(""+x.responseText)))},x.onload=function(){if(x.status<200||x.status>=300){x.onerror();return}try{var M=JSON.parse(x.response);if(M.leaves[0].name!=="SourcePosition")throw new Error("SourcePosition not found");v(M.leaves[0].data)}catch(R){_(new Error("Unable to parse response from "+L+". "+R.message))}},x.send()});return g}}]),p}();i.default=h},{"./parseDataSet":19,"./parseXml":21}],19:[function(t,n,i){Object.defineProperty(i,"__esModule",{value:!0}),i._parseDimension=f,i._parseDefinition=m,i.parseDataSet=g;/**
 * @fileOverview Parser for DDS files
 * @author Jean-Philippe.Lambert@ircam.fr
 * @copyright 2015-2016 IRCAM, Paris, France
 * @license BSD-3-Clause
 */var s="\\[\\s*(\\w+)\\s*=\\s*(\\d+)\\s*\\]",a=new RegExp(s,"g"),o=new RegExp(s),c="\\s*(\\w+)\\s*([\\w.]+)\\s*((?:\\[[^\\]]+\\]\\s*)+);\\s*",l=new RegExp(c,"g"),u=new RegExp(c),h="\\s*Dataset\\s*\\{\\s*((?:[^;]+;\\s*)*)\\s*\\}\\s*[\\w.]+\\s*;\\s*",p=new RegExp(h);function f(v){var _=[],L=v.match(a);return L!==null&&L.forEach(function(x){var M=o.exec(x);M!==null&&M.length>2&&_.push([M[1],Number(M[2])])}),_}function m(v){var _=[],L=v.match(l);return L!==null&&L.forEach(function(x){var M=u.exec(x);if(M!==null&&M.length>3){var R=[];R[0]=M[2],R[1]={},R[1].type=M[1],f(M[3]).forEach(function(D){R[1][D[0]]=D[1]}),_.push(R)}}),_}function g(v){var _={},L=p.exec(v);return L!==null&&L.length>1&&m(L[1]).forEach(function(x){_[x[0]]=x[1]}),_}i.default=g},{}],20:[function(t,n,i){Object.defineProperty(i,"__esModule",{value:!0}),i.parseSofa=s,i.stringifySofa=a,i.conformSofaCoordinateSystem=o;/**
 * @fileOverview Parser functions for SOFA files
 * @author Jean-Philippe.Lambert@ircam.fr
 * @copyright 2015 IRCAM, Paris, France
 * @license BSD-3-Clause
 */function s(c){try{var l=JSON.parse(c),u={};if(u.name=l.name,typeof l.attributes<"u"){u.metaData={};var h=l.attributes.find(function(f){return f.name==="NC_GLOBAL"});typeof h<"u"&&h.attributes.forEach(function(f){u.metaData[f.name]=f.value[0]})}if(typeof l.leaves<"u"){var p=l.leaves;p.forEach(function(f){u[f.name]={},f.attributes.forEach(function(m){u[f.name][m.name]=m.value[0]}),u[f.name].shape=f.shape,u[f.name].data=f.data})}return u}catch(f){throw new Error("Unable to parse SOFA string. "+f.message)}}function a(c){var l={};if(typeof c.name<"u"&&(l.name=c.name),typeof c.metaData<"u"){l.attributes=[];var u={name:"NC_GLOBAL",attributes:[]};for(var h in c.metaData)c.metaData.hasOwnProperty(h)&&u.attributes.push({name:h,value:[c.metaData[h]]});l.attributes.push(u)}var p="Float64",f=void 0;if(l.leaves=[],[["ListenerPosition","ListenerPositionType"],["ListenerUp","ListenerUpType"],["ListenerView","ListenerViewType"]].forEach(function(m){var g=m[0],v=c[g],_=c[m[1]];if(typeof v<"u"){switch(_){case"cartesian":f=[{name:"Type",value:["cartesian"]},{name:"Units",value:["metre, metre, metre"]}];break;case"spherical":f=[{name:"Type",value:["spherical"]},{name:"Units",value:["degree, degree, metre"]}];break;default:throw new Error("Unknown coordinate system type "+(_+" for "+v))}l.leaves.push({name:g,type:p,attributes:f,shape:[1,3],data:[v]})}}),typeof c.SourcePosition<"u"){switch(c.SourcePositionType){case"cartesian":f=[{name:"Type",value:["cartesian"]},{name:"Units",value:["metre, metre, metre"]}];break;case"spherical":f=[{name:"Type",value:["spherical"]},{name:"Units",value:["degree, degree, metre"]}];break;default:throw new Error("Unknown coordinate system type "+(""+c.SourcePositionType))}l.leaves.push({name:"SourcePosition",type:p,attributes:f,shape:[c.SourcePosition.length,c.SourcePosition[0].length],data:c.SourcePosition})}if(typeof c.DataSamplingRate<"u")l.leaves.push({name:"Data.SamplingRate",type:p,attributes:[{name:"Unit",value:"hertz"}],shape:[1],data:[c.DataSamplingRate]});else throw new Error("No data sampling-rate");if(typeof c.DataDelay<"u"&&l.leaves.push({name:"Data.Delay",type:p,attributes:[],shape:[1,c.DataDelay.length],data:c.DataDelay}),typeof c.DataIR<"u")l.leaves.push({name:"Data.IR",type:p,attributes:[],shape:[c.DataIR.length,c.DataIR[0].length,c.DataIR[0][0].length],data:c.DataIR});else throw new Error("No data IR");return typeof c.RoomVolume<"u"&&l.leaves.push({name:"RoomVolume",type:p,attributes:[{name:"Units",value:["cubic metre"]}],shape:[1],data:[c.RoomVolume]}),l.nodes=[],JSON.stringify(l)}function o(c){var l=void 0;switch(c){case"cartesian":l="sofaCartesian";break;case"spherical":l="sofaSpherical";break;default:throw new Error("Bad SOFA type "+c)}return l}i.default={parseSofa:s,conformSofaCoordinateSystem:o}},{}],21:[function(t,n,i){Object.defineProperty(i,"__esModule",{value:!0});/**
 * @fileOverview Simple XML parser, as a DOM parser.
 * @author Jean-Philippe.Lambert@ircam.fr
 * @copyright 2015-2016 IRCAM, Paris, France
 * @license BSD-3-Clause
 */var s=i.parseXml=void 0;if(typeof window.DOMParser<"u")i.parseXml=s=function(o){return new window.DOMParser().parseFromString(o,"text/xml")};else if(typeof window.ActiveXObject<"u"&&new window.ActiveXObject("Microsoft.XMLDOM"))i.parseXml=s=function(o){var c=new window.ActiveXObject("Microsoft.XMLDOM");return c.async="false",c.loadXML(o),c};else throw new Error("No XML parser found");i.default=s},{}]},{},[15])(15)})})(serveSofaHrir$1);var serveSofaHrirExports=serveSofaHrir$1.exports;Object.defineProperty(hrirLoader_ircam,"__esModule",{value:!0});var _classCallCheck2$1=classCallCheck,_classCallCheck3$1=_interopRequireDefault$1(_classCallCheck2$1),_createClass2=createClass,_createClass3=_interopRequireDefault$1(_createClass2),_serveSofaHrir=serveSofaHrirExports,serveSofaHrir=_interopRequireWildcard(_serveSofaHrir);function _interopRequireWildcard(r){if(r&&r.__esModule)return r;var e={};if(r!=null)for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t]);return e.default=r,e}function _interopRequireDefault$1(r){return r&&r.__esModule?r:{default:r}}var utils=utils$6,HRIRloader_ircam=function(){function r(e,t,n){(0,_classCallCheck3$1.default)(this,r),this.context=e,this.order=t,this.nCh=(t+1)*(t+1),this.onLoad=n,this.hrtfSet=new serveSofaHrir.HrtfSet({audioContext:this.context,coordinateSystem:"sofaSpherical"}),this.wishedSpeakerPos=utils.getTdesign(2*this.order)}return(0,_createClass3.default)(r,[{key:"load",value:function(t){var n=this;this.hrtfSet.load(t).then(function(){var i=[];n.hrirBuffer=[];for(var s=0;s<n.wishedSpeakerPos.length;s++)i.push(n.hrtfSet.nearest(n.wishedSpeakerPos[s]).position),n.hrirBuffer.push(n.hrtfSet.nearest(n.wishedSpeakerPos[s]).fir);for(var a=0,o=0;o<n.wishedSpeakerPos.length;o++)n.wishedSpeakerPos[o][0]<0&&(n.wishedSpeakerPos[o][0]+=360),a+=Math.sqrt(Math.pow(n.wishedSpeakerPos[o][0]-i[o][0],2)+Math.pow(n.wishedSpeakerPos[o][1]-i[o][1],2));console.log("summed / average angular dist between asked and present pos:",Math.round(a*100)/100,"deg /",Math.round(a/n.wishedSpeakerPos.length*100)/100,"deg"),n.decodingMatrix=utils.getAmbisonicDecMtx(i,n.order),n.hoaBuffer=n.getHoaFilterFromHrirFilter(),n.onLoad(n.hoaBuffer)})}},{key:"getHoaFilterFromHrirFilter",value:function(){for(var t=this.hrirBuffer[0].length,n=this.hrirBuffer[0].sampleRate,i=this.context.createBuffer(this.nCh,t,n),s=0;s<this.nCh;s++){for(var a=new Float32Array(t),o=0;o<this.hrirBuffer.length;o++)for(var c=0;c<t;c++)a[c]+=this.decodingMatrix[o][s]*this.hrirBuffer[o].getChannelData(0)[c];i.getChannelData(s).set(a)}return i}}]),r}();hrirLoader_ircam.default=HRIRloader_ircam;var ambiConverters={};Object.defineProperty(ambiConverters,"__esModule",{value:!0});ambiConverters.fuma2acn=ambiConverters.n3d2sn3d=ambiConverters.sn3d2n3d=ambiConverters.acn2wxyz=ambiConverters.wxyz2acn=void 0;var _classCallCheck2=classCallCheck,_classCallCheck3=_interopRequireDefault(_classCallCheck2);function _interopRequireDefault(r){return r&&r.__esModule?r:{default:r}}ambiConverters.wxyz2acn=function r(e){(0,_classCallCheck3.default)(this,r),this.ctx=e,this.in=this.ctx.createChannelSplitter(4),this.out=this.ctx.createChannelMerger(4),this.gains=new Array(4);for(var t=0;t<4;t++)this.gains[t]=this.ctx.createGain(),t==0?this.gains[t].gain.value=Math.SQRT2:this.gains[t].gain.value=Math.sqrt(3),this.gains[t].connect(this.out,0,t);this.in.connect(this.gains[0],0,0),this.in.connect(this.gains[3],1,0),this.in.connect(this.gains[1],2,0),this.in.connect(this.gains[2],3,0)};ambiConverters.acn2wxyz=function r(e){(0,_classCallCheck3.default)(this,r),this.ctx=e,this.in=this.ctx.createChannelSplitter(4),this.out=this.ctx.createChannelMerger(4),this.gains=new Array(4);for(var t=0;t<4;t++)this.gains[t]=this.ctx.createGain(),t==0?this.gains[t].gain.value=Math.SQRT1_2:this.gains[t].gain.value=1/Math.sqrt(3),this.gains[t].connect(this.out,0,t);this.in.connect(this.gains[0],0,0),this.in.connect(this.gains[2],1,0),this.in.connect(this.gains[3],2,0),this.in.connect(this.gains[1],3,0)};ambiConverters.sn3d2n3d=function r(e,t){(0,_classCallCheck3.default)(this,r),this.ctx=e,this.order=t,this.nCh=(t+1)*(t+1),this.in=this.ctx.createChannelSplitter(this.nCh),this.out=this.ctx.createChannelMerger(this.nCh),this.gains=new Array(this.nCh);for(var n=0;n<this.nCh;n++){var i=Math.floor(Math.sqrt(n));this.gains[n]=this.ctx.createGain(),this.gains[n].gain.value=Math.sqrt(2*i+1),this.in.connect(this.gains[n],n,0),this.gains[n].connect(this.out,0,n)}};ambiConverters.n3d2sn3d=function r(e,t){(0,_classCallCheck3.default)(this,r),this.ctx=e,this.order=t,this.nCh=(t+1)*(t+1),this.in=this.ctx.createChannelSplitter(this.nCh),this.out=this.ctx.createChannelMerger(this.nCh),this.gains=new Array(this.nCh);for(var n=0;n<this.nCh;n++){var i=Math.floor(Math.sqrt(n));this.gains[n]=this.ctx.createGain(),this.gains[n].gain.value=1/Math.sqrt(2*i+1),this.in.connect(this.gains[n],n,0),this.gains[n].connect(this.out,0,n)}};ambiConverters.fuma2acn=function r(e,t){(0,_classCallCheck3.default)(this,r),t>3&&(console.log("FuMa specifiction is supported up to 3rd order"),t=3);var n=[Math.sqrt(2),Math.sqrt(3),Math.sqrt(3),Math.sqrt(3),Math.sqrt(15)/2,Math.sqrt(15)/2,Math.sqrt(5),Math.sqrt(15)/2,Math.sqrt(15)/2,Math.sqrt(35/8),Math.sqrt(35)/3,Math.sqrt(224/45),Math.sqrt(7),Math.sqrt(224/45),Math.sqrt(35)/3,Math.sqrt(35/8)];if(this.ctx=e,this.order=t,this.nCh=(t+1)*(t+1),this.in=this.ctx.createChannelSplitter(this.nCh),this.out=this.ctx.createChannelMerger(this.nCh),this.gains=[],this.remapArray=[],this.remapArray.push(0,2,3,1),t>1){for(var i=0,s,a=0;a<this.nCh;a++)if(s=[],a>=(i+1)*(i+1)){i+=1;for(var o=(i+1)*(i+1);o<(i+2)*(i+2);o++)(o+i%2)%2==0?s.push(o):s.unshift(o);this.remapArray=this.remapArray.concat(s)}}for(var a=0;a<this.nCh;a++)this.gains[a]=this.ctx.createGain(),this.gains[a].gain.value=n[a],this.in.connect(this.gains[a],this.remapArray[a],0),this.gains[a].connect(this.out,0,a)};(function(r){Object.defineProperty(r,"__esModule",{value:!0}),r.utils=r.converters=r.HRIRloader_ircam=r.HRIRloader2D_local=r.HRIRloader_local=r.HOAloader=r.intensityAnalyser2D=r.intensityAnalyser=r.powermapAnalyser=r.rmsAnalyser=r.virtualMic=r.convolver=r.decoder=r.binDecoder2D=r.binDecoder=r.sceneMirror2D=r.sceneMirror=r.sceneRotator2D=r.sceneRotator=r.orderWeight=r.orderLimiter2D=r.orderLimiter=r.monoEncoder2D=r.monoEncoder=void 0;var e=ambiMonoEncoder;Object.defineProperty(r,"monoEncoder",{enumerable:!0,get:function(){return $(e).default}});var t=ambiMonoEncoder2D;Object.defineProperty(r,"monoEncoder2D",{enumerable:!0,get:function(){return $(t).default}});var n=ambiOrderLimiter;Object.defineProperty(r,"orderLimiter",{enumerable:!0,get:function(){return $(n).default}});var i=ambiOrderLimiter2D;Object.defineProperty(r,"orderLimiter2D",{enumerable:!0,get:function(){return $(i).default}});var s=ambiOrderWeight;Object.defineProperty(r,"orderWeight",{enumerable:!0,get:function(){return $(s).default}});var a=ambiSceneRotator;Object.defineProperty(r,"sceneRotator",{enumerable:!0,get:function(){return $(a).default}});var o=ambiSceneRotator2D;Object.defineProperty(r,"sceneRotator2D",{enumerable:!0,get:function(){return $(o).default}});var c=ambiSceneMirror;Object.defineProperty(r,"sceneMirror",{enumerable:!0,get:function(){return $(c).default}});var l=ambiSceneMirror2D;Object.defineProperty(r,"sceneMirror2D",{enumerable:!0,get:function(){return $(l).default}});var u=ambiBinauralDecoder;Object.defineProperty(r,"binDecoder",{enumerable:!0,get:function(){return $(u).default}});var h=ambiBinauralDecoder2D;Object.defineProperty(r,"binDecoder2D",{enumerable:!0,get:function(){return $(h).default}});var p=ambiDecoder;Object.defineProperty(r,"decoder",{enumerable:!0,get:function(){return $(p).default}});var f=ambiConvolver;Object.defineProperty(r,"convolver",{enumerable:!0,get:function(){return $(f).default}});var m=ambiVirtualMic;Object.defineProperty(r,"virtualMic",{enumerable:!0,get:function(){return $(m).default}});var g=ambiRmsAnalyser;Object.defineProperty(r,"rmsAnalyser",{enumerable:!0,get:function(){return $(g).default}});var v=ambiPowermapAnalyser;Object.defineProperty(r,"powermapAnalyser",{enumerable:!0,get:function(){return $(v).default}});var _=ambiIntensityAnalyser;Object.defineProperty(r,"intensityAnalyser",{enumerable:!0,get:function(){return $(_).default}});var L=ambiIntensityAnalyser2D;Object.defineProperty(r,"intensityAnalyser2D",{enumerable:!0,get:function(){return $(L).default}});var x=hoaLoader;Object.defineProperty(r,"HOAloader",{enumerable:!0,get:function(){return $(x).default}});var M=hrirLoader_local;Object.defineProperty(r,"HRIRloader_local",{enumerable:!0,get:function(){return $(M).default}});var R=hrirLoader2D_local;Object.defineProperty(r,"HRIRloader2D_local",{enumerable:!0,get:function(){return $(R).default}});var D=hrirLoader_ircam;Object.defineProperty(r,"HRIRloader_ircam",{enumerable:!0,get:function(){return $(D).default}});var I=ambiConverters,y=O(I),S=utils$6,E=O(S);function O(H){if(H&&H.__esModule)return H;var te={};if(H!=null)for(var de in H)Object.prototype.hasOwnProperty.call(H,de)&&(te[de]=H[de]);return te.default=H,te}function $(H){return H&&H.__esModule?H:{default:H}}r.converters=y,r.utils=E})(dist);const _euler=new Euler(0,0,0,"YXZ");class AmbisonicAudio extends Audio{constructor(e,t){super(e),this.listener=e,this.camera=t,this.context=this.listener.context,this.encoder=new dist.monoEncoder(this.context,1),this.panner="Encoder",console.log(this.gain)}update(){this.panner==="Encoder"?(this.encoder.azim=-_euler.y*180/Math.PI,this.encoder.elev=_euler.x*180/Math.PI,this.encoder.updateGains()):this.panner==="Rotator"&&(this.rotator.yaw=-angleXY[0],this.rotator.pitch=angleXY[1],this.rotator.updateRotMtx())}}const handler={set:function(r,e,t){return r[e]=t,!0}},state=new Proxy({azimuth:0,elevation:0,pausedAt:0,playStart:0,positionIndex:0,mode:"tab",slide:"welcome",preferences:{controls:"",joystick:"",sensitivity:.5}},handler);class FontLoader extends Loader{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new FileLoader(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){const c=s.parse(JSON.parse(o));t&&t(c)},n,i)}parse(e){return new Font(e)}}class Font{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const n=[],i=createPaths(e,t,this.data);for(let s=0,a=i.length;s<a;s++)n.push(...i[s].toShapes());return n}}function createPaths(r,e,t){const n=Array.from(r),i=e/t.resolution,s=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*i,a=[];let o=0,c=0;for(let l=0;l<n.length;l++){const u=n[l];if(u===`
`)o=0,c-=s;else{const h=createPath(u,i,o,c,t);o+=h.offsetX,a.push(h.path)}}return a}function createPath(r,e,t,n,i){const s=i.glyphs[r]||i.glyphs["?"];if(!s){console.error('THREE.Font: character "'+r+'" does not exists in font family '+i.familyName+".");return}const a=new ShapePath;let o,c,l,u,h,p,f,m;if(s.o){const g=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let v=0,_=g.length;v<_;)switch(g[v++]){case"m":o=g[v++]*e+t,c=g[v++]*e+n,a.moveTo(o,c);break;case"l":o=g[v++]*e+t,c=g[v++]*e+n,a.lineTo(o,c);break;case"q":l=g[v++]*e+t,u=g[v++]*e+n,h=g[v++]*e+t,p=g[v++]*e+n,a.quadraticCurveTo(h,p,l,u);break;case"b":l=g[v++]*e+t,u=g[v++]*e+n,h=g[v++]*e+t,p=g[v++]*e+n,f=g[v++]*e+t,m=g[v++]*e+n,a.bezierCurveTo(h,p,f,m,l,u);break}}return{offsetX:s.ha*e,path:a}}class TextGeometry extends ExtrudeGeometry{constructor(e,t={}){const n=t.font;if(n===void 0)super();else{const i=n.generateShapes(e,t.size);t.depth===void 0&&t.height!==void 0&&console.warn("THREE.TextGeometry: .height is now depreciated. Please use .depth instead"),t.depth=t.depth!==void 0?t.depth:t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(i,t)}this.type="TextGeometry"}}var intensityVertex_default=`precision mediump float;
uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat4 modelMatrix;

attribute vec3 position;

uniform float uTime;

attribute vec2 uv;

varying vec2 vUv;

void main()
{   
    vUv = uv;
    gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
}`,intensityFragment_default=`#define numPoints 30

precision mediump float;
varying float uFragIntensity;

varying vec2 vUv;
uniform vec2 uCircle[numPoints];
uniform float uIntensity[numPoints];

  void main()
  { 
    float strength = 0.;
    for(int i = 0; i<numPoints; ++i) {
        strength = strength + 0.01 * uIntensity[i] / (distance(vUv, uCircle[i]));
    }
    gl_FragColor = vec4(vec3(strength), 1.0);
  }`;const sizes={width:window.innerWidth,height:window.innerHeight},soundUrl="../public/sounds/sample2.wav",irUrl="../public/IRs/ambisonic2binaural_filters/aalto2016_N1.wav",ambiIrUrl="../public/IRs/ambisonicRIRs/room_1_bf.wav",maxOrder=1;let soundBuffer,sound,context,mirror,decoder,analyser,gainOut,encoder,convolver,converter,rotator;const canvas=document.querySelector("canvas.webgl"),scene=new Scene,camera=new PerspectiveCamera(75,sizes.width/sizes.height,.1,100);camera.position.set(0,5,0);scene.add(camera);const controls=new MouseOnlyControls(camera,document.body),keyboardControls=new KeyboardAccessControls(camera,document.body),touchControls=new TouchAccessControls(camera,document.body),splash=document.querySelector("#play"),listener=new AudioListener;camera.add(listener);new AmbisonicAudio(listener,camera);const initAmbisonics=r=>{r.stopPropagation();var e=window.AudioContext||window.webkitAudioContext;context=new e,context.onstatechange=function(){context.state==="suspended"&&context.resume()},loadSample(soundUrl,assignSample2SoundBuffer),loadSample(irUrl,assignSample2Filters),loadSample(ambiIrUrl,assignSample2Convolver),encoder=new dist.monoEncoder(context,1),console.log(encoder),convolver=new dist.convolver(context,maxOrder),console.log(convolver),converter=new dist.converters.wxyz2acn(context),console.log(converter),rotator=new dist.sceneRotator(context,maxOrder),console.log(rotator),mirror=new dist.sceneMirror(context,1),console.log(mirror),decoder=new dist.binDecoder(context,1),console.log(decoder),analyser=new dist.intensityAnalyser(context),console.log(analyser),gainOut=context.createGain(),convolver.out.connect(converter.in),converter.out.connect(mirror.in),mirror.out.connect(rotator.in),rotator.out.connect(decoder.in),rotator.out.connect(analyser.in),decoder.out.connect(gainOut),gainOut.connect(context.destination)},createAndStartBuffer=()=>{var r=state.pausedAt;sound=context.createBufferSource(),sound.buffer=soundBuffer,sound.loop=!0,sound.connect(convolver.in),sound.start(0,r),sound.isPlaying=!0,state.playStart=context.currentTime-r,state.pausedAt=0,document.getElementById("play").disabled=!0},pauseBuffer=()=>{sound.isPlaying=!1;var r=context.currentTime-state.playStart;sound.stop(),state.pausedAt=r,document.getElementById("play").disabled=!1},loadButton=document.querySelector("#load");loadButton.addEventListener("click",initAmbisonics);const enterScene$1=()=>{createAndStartBuffer()},exitScene=()=>{pauseBuffer()};splash.addEventListener("click",()=>{touchControls.enabled?(enterScene$1(),touchControls.isLocked=!0):(controls.lock(),controls.addEventListener("lock",enterScene$1),controls.addEventListener("unlock",exitScene),scene.add(controls.getObject()))});let circleArray=new Array(30).fill(new Vector2(0,0)),intensityArray=new Array(30).fill(0);const sphereGeom=new SphereGeometry(50,100,50),sphereMat=new RawShaderMaterial({vertexShader:intensityVertex_default,fragmentShader:intensityFragment_default,transparent:!0,uniforms:{uIntensity:{value:intensityArray},uTime:{value:0},uCircle:{value:circleArray}},side:BackSide}),intensityMesh=new Mesh(sphereGeom,sphereMat);scene.add(intensityMesh);const fontLoader=new FontLoader;fontLoader.load("./fonts/Mukta_Bold.json",r=>{const e=new Group,t={font:r,size:.5,depth:.2,curveSegments:12,bevelEnabled:!0,bevelThickness:.03,bevelSize:.02,bevelOffset:0,bevelSegments:5},n=new TextGeometry("0°",t).center(),i=new TextGeometry("90°",t).center(),s=new TextGeometry("180°",t).center(),a=new TextGeometry("270°",t).center(),o=new MeshBasicMaterial,c=new Mesh(n,o),l=new Mesh(i,o),u=new Mesh(s,o),h=new Mesh(a,o);c.position.set(0,5,-5),l.position.set(-5,5,0),l.rotation.y=Math.PI/2,u.position.set(0,5,5),u.rotation.y=Math.PI,h.position.set(5,5,0),h.rotation.y=-Math.PI/2,e.add(c),e.add(l),e.add(u),e.add(h),scene.add(e)});const xbox=new GamepadAccessControls(camera),gamepadElement=document.querySelector("#gamepads"),updateUI=()=>{gamepadElement.innerHTML=xbox.gamepads,console.log(xbox.gamepads)};window.addEventListener("gamepadconnected",updateUI);function loadSample(r,e){var t=new XMLHttpRequest;t.open("GET",r,!0),t.responseType="arraybuffer",t.onload=function(){console.log("loaded"+r),context.decodeAudioData(t.response,e,onDecodeAudioDataError)},t.send()}var assignSample2SoundBuffer=function(r){soundBuffer=r,document.getElementById("play").disabled=!1},assignSample2Filters=function(r){decoder.updateFilters(r)},assignSample2Convolver=function(r){convolver.updateFilters(r)};function onDecodeAudioDataError(r){alert(`Browser cannot decode audio data...

Error: `+r+`

(If you re using Safari and get a null error, this is most likely due to Apple's shady plan going on to stop the .ogg format from easing web developer's life :)`)}const planarGeometry=new PlaneGeometry(100,100,10,10),planarMaterial=new MeshBasicMaterial({color:"white"}),planarMesh=new Mesh(planarGeometry,planarMaterial);planarMesh.position.set(0,0,2);planarMesh.rotation.x=-Math.PI/2;window.addEventListener("resize",()=>{camera.aspect=1,renderer.setSize(sizes.width,sizes.height),renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))});const renderer=new WebGLRenderer({canvas,antialias:!0});renderer.setSize(sizes.width,sizes.height);renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));const clock=new Clock,tick=()=>{const r=clock.getElapsedTime();sphereMat.uniforms.uTime.value=r;const e=new Euler(0,0,0,"YXZ");if(keyboardControls.update(),xbox.update(),touchControls.update(),controls.isLocked&&(e.setFromQuaternion(camera.quaternion),rotator.yaw=-e.y*180/Math.PI,rotator.pitch=e.x*180/Math.PI,rotator.updateRotMtx()),analyser!=null){analyser.updateBuffers();const t=analyser.computeIntensity();intensityArray.shift(),intensityArray.push(Math.log(t[2])/-20),sphereMat.uniforms.uIntensity.value=intensityArray,circleArray.shift(),circleArray.push(new Vector2(-t[0]/360+.5,-t[1]/180+.5)),sphereMat.uniforms.uCircle.value=circleArray}renderer.render(scene,camera),window.requestAnimationFrame(tick)};tick();document.querySelector("#welcome");const enterButton=document.querySelector("#enter-button"),infoButton=document.querySelector("#info-button");document.querySelector("#info");document.querySelector("#headphones");const continueButton=document.querySelector("#continue-button"),mouseButton=document.querySelector("#mouse-button"),keyboardButton=document.querySelector("#keyboard-button"),controllerButton=document.querySelector("#controller-button"),settingsIcon=document.querySelector("#settings-icon"),exitSettings=document.querySelector("#exit-settings"),changeSlide=r=>{document.querySelector(`#${state.slide}`).style.display="none",state.slide=r,document.querySelector(`#${state.slide}`).style.display="flex"},enterScene=()=>{document.querySelector(`#${state.slide}`).style.display="none"};changeSlide("welcome");enterButton.addEventListener("click",()=>{changeSlide("headphones")});infoButton.addEventListener("click",()=>{changeSlide("info")});continueButton.addEventListener("click",()=>{changeSlide("controls")});settingsIcon.addEventListener("click",()=>{changeSlide("HOD")});mouseButton.addEventListener("click",enterScene);keyboardButton.addEventListener("click",enterScene);controllerButton.addEventListener("click",enterScene);exitSettings.addEventListener("click",enterScene);
//# sourceMappingURL=index-BI-Yih5r.js.map
