var Io=Object.create;var Ur=Object.defineProperty,wo=Object.defineProperties,Eo=Object.getOwnPropertyDescriptor,Bo=Object.getOwnPropertyDescriptors,_o=Object.getOwnPropertyNames,yn=Object.getOwnPropertySymbols,Mo=Object.getPrototypeOf,wn=Object.prototype.hasOwnProperty,Po=Object.prototype.propertyIsEnumerable;var In=(e,t,r)=>t in e?Ur(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,xe=(e,t)=>{for(var r in t||(t={}))wn.call(t,r)&&In(e,r,t[r]);if(yn)for(var r of yn(t))Po.call(t,r)&&In(e,r,t[r]);return e},Ce=(e,t)=>wo(e,Bo(t));var nr=(e=>typeof require!="undefined"?require:typeof Proxy!="undefined"?new Proxy(e,{get:(t,r)=>(typeof require!="undefined"?require:t)[r]}):e)(function(e){if(typeof require!="undefined")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});var Sa=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(r){throw t=0,r}},En=(e,t)=>{for(var r in t)Ur(e,r,{get:t[r],enumerable:!0})},So=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of _o(t))!wn.call(e,o)&&o!==r&&Ur(e,o,{get:()=>t[o],enumerable:!(a=Eo(t,o))||a.enumerable});return e};var Da=(e,t,r)=>(r=e!=null?Io(Mo(e)):{},So(t||!e||!e.__esModule?Ur(r,"default",{value:e,enumerable:!0}):r,e));var Pi=Sa((en,tn)=>{(function(e,t){typeof en=="object"&&typeof tn!="undefined"?tn.exports=t():typeof define=="function"&&define.amd?define(t):(e=typeof globalThis!="undefined"?globalThis:e||self,e.Cropper=t())})(en,(function(){"use strict";function e(h,n){(n==null||n>h.length)&&(n=h.length);for(var s=0,i=Array(n);s<n;s++)i[s]=h[s];return i}function t(h){if(Array.isArray(h))return e(h)}function r(h,n){if(!(h instanceof n))throw new TypeError("Cannot call a class as a function")}function a(h,n){for(var s=0;s<n.length;s++){var i=n[s];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(h,x(i.key),i)}}function o(h,n,s){return n&&a(h.prototype,n),s&&a(h,s),Object.defineProperty(h,"prototype",{writable:!1}),h}function l(h,n,s){return(n=x(n))in h?Object.defineProperty(h,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):h[n]=s,h}function c(h){if(typeof Symbol!="undefined"&&h[Symbol.iterator]!=null||h["@@iterator"]!=null)return Array.from(h)}function u(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function d(h,n){var s=Object.keys(h);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(h);n&&(i=i.filter(function(b){return Object.getOwnPropertyDescriptor(h,b).enumerable})),s.push.apply(s,i)}return s}function p(h){for(var n=1;n<arguments.length;n++){var s=arguments[n]!=null?arguments[n]:{};n%2?d(Object(s),!0).forEach(function(i){l(h,i,s[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(h,Object.getOwnPropertyDescriptors(s)):d(Object(s)).forEach(function(i){Object.defineProperty(h,i,Object.getOwnPropertyDescriptor(s,i))})}return h}function g(h){return t(h)||c(h)||S(h)||u()}function B(h,n){if(typeof h!="object"||!h)return h;var s=h[Symbol.toPrimitive];if(s!==void 0){var i=s.call(h,n||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(h)}function x(h){var n=B(h,"string");return typeof n=="symbol"?n:n+""}function y(h){"@babel/helpers - typeof";return y=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},y(h)}function S(h,n){if(h){if(typeof h=="string")return e(h,n);var s={}.toString.call(h).slice(8,-1);return s==="Object"&&h.constructor&&(s=h.constructor.name),s==="Map"||s==="Set"?Array.from(h):s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?e(h,n):void 0}}var k=typeof window!="undefined"&&typeof window.document!="undefined",R=k?window:{},H=k&&R.document.documentElement?"ontouchstart"in R.document.documentElement:!1,Q=k?"PointerEvent"in R:!1,G="cropper",Z="all",te="crop",U="move",X="zoom",Y="e",W="w",q="s",J="n",ae="ne",se="nw",me="se",Be="sw",Qe="".concat(G,"-crop"),et="".concat(G,"-disabled"),le="".concat(G,"-hidden"),At="".concat(G,"-hide"),tt="".concat(G,"-invisible"),rt="".concat(G,"-modal"),be="".concat(G,"-move"),De="".concat(G,"Action"),at="".concat(G,"Preview"),$t="crop",br="move",xr="none",Xt="crop",Yt="cropend",Wt="cropmove",Vt="cropstart",Cr="dblclick",da=H?"touchstart":"mousedown",ma=H?"touchmove":"mousemove",pa=H?"touchend touchcancel":"mouseup",Oe=Q?"pointerdown":da,vr=Q?"pointermove":ma,zt=Q?"pointerup pointercancel":pa,gt="ready",St="resize",Dt="wheel",bt="zoom",jt="image/jpeg",yr=/^(e|w|s|n|se|sw|ne|nw|all|crop|move|zoom)$/,Ir=/^data:/,wr=/^data:image\/jpeg;base64,/,xt=/\s+/,Er=/^(img|canvas)$/i,qt=200,Kt=100,Zt={viewMode:0,dragMode:$t,initialAspectRatio:NaN,aspectRatio:NaN,data:null,preview:"",responsive:!0,restore:!0,checkCrossOrigin:!0,checkOrientation:!0,modal:!0,guides:!0,center:!0,highlight:!0,background:!0,autoCrop:!0,autoCropArea:.8,movable:!0,rotatable:!0,scalable:!0,zoomable:!0,zoomOnTouch:!0,zoomOnWheel:!0,wheelZoomRatio:.1,cropBoxMovable:!0,cropBoxResizable:!0,toggleDragModeOnDblclick:!0,minCanvasWidth:0,minCanvasHeight:0,minCropBoxWidth:0,minCropBoxHeight:0,minContainerWidth:qt,minContainerHeight:Kt,ready:null,cropstart:null,cropmove:null,cropend:null,crop:null,zoom:null},Br='<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>',_r=Number.isNaN||R.isNaN,Rt=Number.isFinite||R.isFinite;function z(h){return typeof h=="number"&&!_r(h)}var Mr=function(n){return n>0&&n<1/0};function Jt(h){return typeof h=="undefined"}function Re(h){return y(h)==="object"&&h!==null}var Pr=Object.prototype.hasOwnProperty;function nt(h){if(!Re(h))return!1;try{var n=h.constructor,s=n.prototype;return n&&s&&Pr.call(s,"isPrototypeOf")}catch(i){return!1}}function ne(h){return typeof h=="function"}var Aa=Array.prototype.slice;function Sr(h){return Array.from?Array.from(h):Aa.call(h)}function ce(h,n){return h&&ne(n)&&(Array.isArray(h)||z(h.length)?Sr(h).forEach(function(s,i){n.call(h,s,i,h)}):Re(h)&&Object.keys(h).forEach(function(s){n.call(h,h[s],s,h)})),h}var ie=Object.assign||function(n){for(var s=arguments.length,i=new Array(s>1?s-1:0),b=1;b<s;b++)i[b-1]=arguments[b];return Re(n)&&i.length>0&&i.forEach(function(A){Re(A)&&Object.keys(A).forEach(function(C){n[C]=A[C]})}),n},ga=/\.\d*(?:0|9){12}\d*$/;function it(h){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1e11;return ga.test(h)?Math.round(h*n)/n:h}var ba=/^width|height|left|top|marginLeft|marginTop$/;function $e(h,n){var s=h.style;ce(n,function(i,b){ba.test(b)&&z(i)&&(i="".concat(i,"px")),s[b]=i})}function xa(h,n){return h.classList?h.classList.contains(n):h.className.split(xt).indexOf(n)>-1}function fe(h,n){if(n){if(z(h.length)){ce(h,function(i){fe(i,n)});return}if(h.classList){h.classList.add(n);return}var s=h.className.trim();s?s.indexOf(n)<0&&(h.className="".concat(s," ").concat(n)):h.className=n}}function Te(h,n){if(n){if(z(h.length)){ce(h,function(s){Te(s,n)});return}if(h.classList){h.classList.remove(n);return}h.className.indexOf(n)>=0&&(h.className=h.className.split(xt).filter(function(s){return s&&s!==n}).join(" "))}}function ot(h,n,s){if(n){if(z(h.length)){ce(h,function(i){ot(i,n,s)});return}s?fe(h,n):Te(h,n)}}var Ca=/([a-z\d])([A-Z])/g;function Tt(h){return typeof h=="string"?h.replace(Ca,"$1-$2").toLowerCase():""}function er(h,n){return Re(h[n])?h[n]:h.dataset?h.dataset[n]:h.getAttribute("data-".concat(Tt(n)))}function Ct(h,n,s){Re(s)?h[n]=s:h.dataset?h.dataset[n]=s:h.setAttribute("data-".concat(Tt(n)),s)}function va(h,n){if(Re(h[n]))try{delete h[n]}catch(s){h[n]=void 0}else if(h.dataset)try{delete h.dataset[n]}catch(s){h.dataset[n]=void 0}else h.removeAttribute("data-".concat(Tt(n)))}var Dr=(function(){var h=!1;if(k){var n=!1,s=function(){},i=Object.defineProperty({},"once",{get:function(){return h=!0,n},set:function(A){n=A}});R.addEventListener("test",s,i),R.removeEventListener("test",s,i)}return h})();function _e(h,n,s){var i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};if(!(!h||!n||!ne(h.removeEventListener))){var b=s;n.trim().split(xt).forEach(function(A){if(!Dr){var C=h.__cropperListeners__||{};C[A]&&C[A][s]&&(b=C[A][s],delete C[A][s],Object.keys(C[A]).length===0&&delete C[A],Object.keys(C).length===0&&delete h.__cropperListeners__)}h.removeEventListener(A,b,i)})}}function ye(h,n,s){var i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};if(!(!h||!n||!ne(h.addEventListener)||!ne(s))){var b=s;n.trim().split(xt).forEach(function(A){if(i.once&&!Dr){var C=h.__cropperListeners__||{};b=function(){C[A]&&C[A][s]&&delete C[A][s],h.removeEventListener(A,b,i);for(var L=arguments.length,D=new Array(L),M=0;M<L;M++)D[M]=arguments[M];s.apply(h,D)},C[A]||(C[A]={}),C[A][s]&&h.removeEventListener(A,C[A][s],i),C[A][s]=b,h.__cropperListeners__=C}h.addEventListener(A,b,i)})}}function st(h,n,s){if(!h||!n||!ne(h.dispatchEvent))return!1;var i;if(ne(Event)&&ne(CustomEvent))i=new CustomEvent(n,{detail:s,bubbles:!0,cancelable:!0});else if(Re(document)&&ne(document.createEvent))i=document.createEvent("CustomEvent"),i.initCustomEvent(n,!0,!0,s);else return!1;return h.dispatchEvent(i)}function Rr(h){if(!h||!ne(h.getBoundingClientRect))return{left:0,top:0};var n=h.getBoundingClientRect(),s=document||{},i=s.documentElement,b=i===void 0?{}:i,A=R.pageXOffset||0,C=R.pageYOffset||0;return{left:n.left+(A-(b.clientLeft||0)),top:n.top+(C-(b.clientTop||0))}}var tr=R.location,ya=/^(\w+:)\/\/([^:/?#]*):?(\d*)/i;function Tr(h){var n=h.match(ya);return n!==null&&(n[1]!==tr.protocol||n[2]!==tr.hostname||n[3]!==tr.port)}function kr(h){var n=h.indexOf("#"),s=n>=0?h.slice(n):"",i=n>=0?h.slice(0,n):h,b="timestamp=".concat(new Date().getTime());return"".concat(i).concat(i.indexOf("?")===-1?"?":"&").concat(b).concat(s)}function vt(h){var n=h.rotate,s=h.scaleX,i=h.scaleY,b=h.translateX,A=h.translateY,C=[];z(b)&&b!==0&&C.push("translateX(".concat(b,"px)")),z(A)&&A!==0&&C.push("translateY(".concat(A,"px)")),z(n)&&n!==0&&C.push("rotate(".concat(n,"deg)")),z(s)&&s!==1&&C.push("scaleX(".concat(s,")")),z(i)&&i!==1&&C.push("scaleY(".concat(i,")"));var _=C.length?C.join(" "):"none";return{WebkitTransform:_,msTransform:_,transform:_}}function Ia(h){var n=p({},h),s=0;return ce(h,function(i,b){delete n[b],ce(n,function(A){var C=Math.abs(i.startX-A.startX),_=Math.abs(i.startY-A.startY),L=Math.abs(i.endX-A.endX),D=Math.abs(i.endY-A.endY),M=Math.sqrt(C*C+_*_),T=Math.sqrt(L*L+D*D);if(!(!Rt(M)||!Rt(T)||M===0||T===M)){var O=(T-M)/M;Rt(O)&&Math.abs(O)>Math.abs(s)&&(s=O)}})}),s}function kt(h,n){var s=h.pageX,i=h.pageY,b={endX:s,endY:i};return n?b:p({startX:s,startY:i},b)}function Fr(h){var n=0,s=0,i=0;return ce(h,function(b){var A=b.startX,C=b.startY;n+=A,s+=C,i+=1}),n/=i,s/=i,{pageX:n,pageY:s}}function Ie(h){var n=h.aspectRatio,s=h.height,i=h.width,b=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"contain",A=Mr(i),C=Mr(s);if(A&&C){var _=s*n;b==="contain"&&_>i||b==="cover"&&_<i?s=i/n:i=s*n}else A?s=i/n:C&&(i=s*n);return{width:i,height:s}}function Lr(h){var n=h.width,s=h.height,i=h.degree;if(i=Math.abs(i)%180,i===90)return{width:s,height:n};var b=i%90*Math.PI/180,A=Math.sin(b),C=Math.cos(b),_=n*C+s*A,L=n*A+s*C;return i>90?{width:L,height:_}:{width:_,height:L}}function lt(h,n,s,i){var b=n.aspectRatio,A=n.naturalWidth,C=n.naturalHeight,_=n.rotate,L=_===void 0?0:_,D=n.scaleX,M=D===void 0?1:D,T=n.scaleY,O=T===void 0?1:T,K=s.aspectRatio,j=s.naturalWidth,oe=s.naturalHeight,ee=i.fillColor,he=ee===void 0?"transparent":ee,ue=i.imageSmoothingEnabled,de=ue===void 0?!0:ue,qe=i.imageSmoothingQuality,Me=qe===void 0?"low":qe,N=i.maxWidth,re=N===void 0?1/0:N,pe=i.maxHeight,ke=pe===void 0?1/0:pe,Ke=i.minWidth,yt=Ke===void 0?0:Ke,It=i.minHeight,ct=It===void 0?0:It,Xe=document.createElement("canvas"),we=Xe.getContext("2d"),wt=Ie({aspectRatio:K,width:re,height:ke}),Or=Ie({aspectRatio:K,width:yt,height:ct},"cover"),Ma=Math.min(wt.width,Math.max(Or.width,j)),Pa=Math.min(wt.height,Math.max(Or.height,oe)),bn=Ie({aspectRatio:b,width:re,height:ke}),xn=Ie({aspectRatio:b,width:yt,height:ct},"cover"),Cn=Math.min(bn.width,Math.max(xn.width,A)),vn=Math.min(bn.height,Math.max(xn.height,C)),vo=[-Cn/2,-vn/2,Cn,vn];return Xe.width=it(Ma),Xe.height=it(Pa),we.fillStyle=he,we.fillRect(0,0,Ma,Pa),we.save(),we.translate(Ma/2,Pa/2),we.rotate(L*Math.PI/180),we.scale(M,O),we.imageSmoothingEnabled=de,we.imageSmoothingQuality=Me,we.drawImage.apply(we,[h].concat(g(vo.map(function(yo){return Math.floor(it(yo))})))),we.restore(),Xe}var Qr=String.fromCharCode;function Ft(h,n,s){var i="";s+=n;for(var b=n;b<s;b+=1)i+=Qr(h.getUint8(b));return i}var rr=/^data:.*,/;function wa(h){var n=h.replace(rr,""),s=atob(n),i=new ArrayBuffer(s.length),b=new Uint8Array(i);return ce(b,function(A,C){b[C]=s.charCodeAt(C)}),i}function Ea(h,n){for(var s=[],i=8192,b=new Uint8Array(h);b.length>0;)s.push(Qr.apply(null,Sr(b.subarray(0,i)))),b=b.subarray(i);return"data:".concat(n,";base64,").concat(btoa(s.join("")))}function ar(h){var n=new DataView(h),s;try{var i,b,A;if(n.getUint8(0)===255&&n.getUint8(1)===216)for(var C=n.byteLength,_=2;_+1<C;){if(n.getUint8(_)===255&&n.getUint8(_+1)===225){b=_;break}_+=1}if(b){var L=b+4,D=b+10;if(Ft(n,L,4)==="Exif"){var M=n.getUint16(D);if(i=M===18761,(i||M===19789)&&n.getUint16(D+2,i)===42){var T=n.getUint32(D+4,i);T>=8&&(A=D+T)}}}if(A){var O=n.getUint16(A,i),K,j;for(j=0;j<O;j+=1)if(K=A+j*12+2,n.getUint16(K,i)===274){K+=8,s=n.getUint16(K,i),n.setUint16(K,1,i);break}}}catch(oe){s=1}return s}function Ba(h){var n=0,s=1,i=1;switch(h){case 2:s=-1;break;case 3:n=-180;break;case 4:i=-1;break;case 5:n=90,i=-1;break;case 6:n=90;break;case 7:n=90,s=-1;break;case 8:n=-90;break}return{rotate:n,scaleX:s,scaleY:i}}var _a={render:function(){this.initContainer(),this.initCanvas(),this.initCropBox(),this.renderCanvas(),this.cropped&&this.renderCropBox()},initContainer:function(){var n=this.element,s=this.options,i=this.container,b=this.cropper,A=Number(s.minContainerWidth),C=Number(s.minContainerHeight);fe(b,le),Te(n,le);var _={width:Math.max(i.offsetWidth,A>=0?A:qt),height:Math.max(i.offsetHeight,C>=0?C:Kt)};this.containerData=_,$e(b,{width:_.width,height:_.height}),fe(n,le),Te(b,le)},initCanvas:function(){var n=this.containerData,s=this.imageData,i=this.options.viewMode,b=Math.abs(s.rotate)%180===90,A=b?s.naturalHeight:s.naturalWidth,C=b?s.naturalWidth:s.naturalHeight,_=A/C,L=n.width,D=n.height;n.height*_>n.width?i===3?L=n.height*_:D=n.width/_:i===3?D=n.width/_:L=n.height*_;var M={aspectRatio:_,naturalWidth:A,naturalHeight:C,width:L,height:D};this.canvasData=M,this.limited=i===1||i===2,this.limitCanvas(!0,!0),M.width=Math.min(Math.max(M.width,M.minWidth),M.maxWidth),M.height=Math.min(Math.max(M.height,M.minHeight),M.maxHeight),M.left=(n.width-M.width)/2,M.top=(n.height-M.height)/2,M.oldLeft=M.left,M.oldTop=M.top,this.initialCanvasData=ie({},M)},limitCanvas:function(n,s){var i=this.options,b=this.containerData,A=this.canvasData,C=this.cropBoxData,_=i.viewMode,L=A.aspectRatio,D=this.cropped&&C;if(n){var M=Number(i.minCanvasWidth)||0,T=Number(i.minCanvasHeight)||0;_>1?(M=Math.max(M,b.width),T=Math.max(T,b.height),_===3&&(T*L>M?M=T*L:T=M/L)):_>0&&(M?M=Math.max(M,D?C.width:0):T?T=Math.max(T,D?C.height:0):D&&(M=C.width,T=C.height,T*L>M?M=T*L:T=M/L));var O=Ie({aspectRatio:L,width:M,height:T});M=O.width,T=O.height,A.minWidth=M,A.minHeight=T,A.maxWidth=1/0,A.maxHeight=1/0}if(s)if(_>(D?0:1)){var K=b.width-A.width,j=b.height-A.height;A.minLeft=Math.min(0,K),A.minTop=Math.min(0,j),A.maxLeft=Math.max(0,K),A.maxTop=Math.max(0,j),D&&this.limited&&(A.minLeft=Math.min(C.left,C.left+(C.width-A.width)),A.minTop=Math.min(C.top,C.top+(C.height-A.height)),A.maxLeft=C.left,A.maxTop=C.top,_===2&&(A.width>=b.width&&(A.minLeft=Math.min(0,K),A.maxLeft=Math.max(0,K)),A.height>=b.height&&(A.minTop=Math.min(0,j),A.maxTop=Math.max(0,j))))}else A.minLeft=-A.width,A.minTop=-A.height,A.maxLeft=b.width,A.maxTop=b.height},renderCanvas:function(n,s){var i=this.canvasData,b=this.imageData;if(s){var A=Lr({width:b.naturalWidth*Math.abs(b.scaleX||1),height:b.naturalHeight*Math.abs(b.scaleY||1),degree:b.rotate||0}),C=A.width,_=A.height,L=i.width*(C/i.naturalWidth),D=i.height*(_/i.naturalHeight);i.left-=(L-i.width)/2,i.top-=(D-i.height)/2,i.width=L,i.height=D,i.aspectRatio=C/_,i.naturalWidth=C,i.naturalHeight=_,this.limitCanvas(!0,!1)}(i.width>i.maxWidth||i.width<i.minWidth)&&(i.left=i.oldLeft),(i.height>i.maxHeight||i.height<i.minHeight)&&(i.top=i.oldTop),i.width=Math.min(Math.max(i.width,i.minWidth),i.maxWidth),i.height=Math.min(Math.max(i.height,i.minHeight),i.maxHeight),this.limitCanvas(!1,!0),i.left=Math.min(Math.max(i.left,i.minLeft),i.maxLeft),i.top=Math.min(Math.max(i.top,i.minTop),i.maxTop),i.oldLeft=i.left,i.oldTop=i.top,$e(this.canvas,ie({width:i.width,height:i.height},vt({translateX:i.left,translateY:i.top}))),this.renderImage(n),this.cropped&&this.limited&&this.limitCropBox(!0,!0)},renderImage:function(n){var s=this.canvasData,i=this.imageData,b=i.naturalWidth*(s.width/s.naturalWidth),A=i.naturalHeight*(s.height/s.naturalHeight);ie(i,{width:b,height:A,left:(s.width-b)/2,top:(s.height-A)/2}),$e(this.image,ie({width:i.width,height:i.height},vt(ie({translateX:i.left,translateY:i.top},i)))),n&&this.output()},initCropBox:function(){var n=this.options,s=this.canvasData,i=n.aspectRatio||n.initialAspectRatio,b=Number(n.autoCropArea)||.8,A={width:s.width,height:s.height};i&&(s.height*i>s.width?A.height=A.width/i:A.width=A.height*i),this.cropBoxData=A,this.limitCropBox(!0,!0),A.width=Math.min(Math.max(A.width,A.minWidth),A.maxWidth),A.height=Math.min(Math.max(A.height,A.minHeight),A.maxHeight),A.width=Math.max(A.minWidth,A.width*b),A.height=Math.max(A.minHeight,A.height*b),A.left=s.left+(s.width-A.width)/2,A.top=s.top+(s.height-A.height)/2,A.oldLeft=A.left,A.oldTop=A.top,this.initialCropBoxData=ie({},A)},limitCropBox:function(n,s){var i=this.options,b=this.containerData,A=this.canvasData,C=this.cropBoxData,_=this.limited,L=i.aspectRatio;if(n){var D=Number(i.minCropBoxWidth)||0,M=Number(i.minCropBoxHeight)||0,T=_?Math.min(b.width,A.width,A.width+A.left,b.width-A.left):b.width,O=_?Math.min(b.height,A.height,A.height+A.top,b.height-A.top):b.height;D=Math.min(D,b.width),M=Math.min(M,b.height),L&&(D&&M?M*L>D?M=D/L:D=M*L:D?M=D/L:M&&(D=M*L),O*L>T?O=T/L:T=O*L),C.minWidth=Math.min(D,T),C.minHeight=Math.min(M,O),C.maxWidth=T,C.maxHeight=O}s&&(_?(C.minLeft=Math.max(0,A.left),C.minTop=Math.max(0,A.top),C.maxLeft=Math.min(b.width,A.left+A.width)-C.width,C.maxTop=Math.min(b.height,A.top+A.height)-C.height):(C.minLeft=0,C.minTop=0,C.maxLeft=b.width-C.width,C.maxTop=b.height-C.height))},renderCropBox:function(){var n=this.options,s=this.containerData,i=this.cropBoxData;(i.width>i.maxWidth||i.width<i.minWidth)&&(i.left=i.oldLeft),(i.height>i.maxHeight||i.height<i.minHeight)&&(i.top=i.oldTop),i.width=Math.min(Math.max(i.width,i.minWidth),i.maxWidth),i.height=Math.min(Math.max(i.height,i.minHeight),i.maxHeight),this.limitCropBox(!1,!0),i.left=Math.min(Math.max(i.left,i.minLeft),i.maxLeft),i.top=Math.min(Math.max(i.top,i.minTop),i.maxTop),i.oldLeft=i.left,i.oldTop=i.top,n.movable&&n.cropBoxMovable&&Ct(this.face,De,i.width>=s.width&&i.height>=s.height?U:Z),$e(this.cropBox,ie({width:i.width,height:i.height},vt({translateX:i.left,translateY:i.top}))),this.cropped&&this.limited&&this.limitCanvas(!0,!0),this.disabled||this.output()},output:function(){this.preview(),st(this.element,Xt,this.getData())}},f={initPreview:function(){var n=this.element,s=this.crossOrigin,i=this.options.preview,b=s?this.crossOriginUrl:this.url,A=n.alt||"The image to preview",C=document.createElement("img");if(s&&(C.crossOrigin=s),C.src=b,C.alt=A,this.viewBox.appendChild(C),this.viewBoxImage=C,!!i){var _=i;typeof i=="string"?_=n.ownerDocument.querySelectorAll(i):i.querySelector&&(_=[i]),this.previews=_,ce(_,function(L){var D=document.createElement("img");Ct(L,at,{width:L.offsetWidth,height:L.offsetHeight,html:L.innerHTML}),s&&(D.crossOrigin=s),D.src=b,D.alt=A,D.style.cssText="display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;",L.innerHTML="",L.appendChild(D)})}},resetPreview:function(){ce(this.previews,function(n){var s=er(n,at);$e(n,{width:s.width,height:s.height}),n.innerHTML=s.html,va(n,at)})},preview:function(){var n=this.imageData,s=this.canvasData,i=this.cropBoxData,b=i.width,A=i.height,C=n.width,_=n.height,L=i.left-s.left-n.left,D=i.top-s.top-n.top;!this.cropped||this.disabled||($e(this.viewBoxImage,ie({width:C,height:_},vt(ie({translateX:-L,translateY:-D},n)))),ce(this.previews,function(M){var T=er(M,at),O=T.width,K=T.height,j=O,oe=K,ee=1;b&&(ee=O/b,oe=A*ee),A&&oe>K&&(ee=K/A,j=b*ee,oe=K),$e(M,{width:j,height:oe}),$e(M.getElementsByTagName("img")[0],ie({width:C*ee,height:_*ee},vt(ie({translateX:-L*ee,translateY:-D*ee},n))))}))}},v={bind:function(){var n=this.element,s=this.options,i=this.cropper;ne(s.cropstart)&&ye(n,Vt,s.cropstart),ne(s.cropmove)&&ye(n,Wt,s.cropmove),ne(s.cropend)&&ye(n,Yt,s.cropend),ne(s.crop)&&ye(n,Xt,s.crop),ne(s.zoom)&&ye(n,bt,s.zoom),ye(i,Oe,this.onCropStart=this.cropStart.bind(this)),s.zoomable&&s.zoomOnWheel&&ye(i,Dt,this.onWheel=this.wheel.bind(this),{passive:!1,capture:!0}),s.toggleDragModeOnDblclick&&ye(i,Cr,this.onDblclick=this.dblclick.bind(this)),ye(n.ownerDocument,vr,this.onCropMove=this.cropMove.bind(this)),ye(n.ownerDocument,zt,this.onCropEnd=this.cropEnd.bind(this)),s.responsive&&ye(window,St,this.onResize=this.resize.bind(this))},unbind:function(){var n=this.element,s=this.options,i=this.cropper;ne(s.cropstart)&&_e(n,Vt,s.cropstart),ne(s.cropmove)&&_e(n,Wt,s.cropmove),ne(s.cropend)&&_e(n,Yt,s.cropend),ne(s.crop)&&_e(n,Xt,s.crop),ne(s.zoom)&&_e(n,bt,s.zoom),_e(i,Oe,this.onCropStart),s.zoomable&&s.zoomOnWheel&&_e(i,Dt,this.onWheel,{passive:!1,capture:!0}),s.toggleDragModeOnDblclick&&_e(i,Cr,this.onDblclick),_e(n.ownerDocument,vr,this.onCropMove),_e(n.ownerDocument,zt,this.onCropEnd),s.responsive&&_e(window,St,this.onResize)}},m={resize:function(){if(!this.disabled){var n=this.options,s=this.container,i=this.containerData,b=s.offsetWidth/i.width,A=s.offsetHeight/i.height,C=Math.abs(b-1)>Math.abs(A-1)?b:A;if(C!==1){var _,L;n.restore&&(_=this.getCanvasData(),L=this.getCropBoxData()),this.render(),n.restore&&(this.setCanvasData(ce(_,function(D,M){_[M]=D*C})),this.setCropBoxData(ce(L,function(D,M){L[M]=D*C})))}}},dblclick:function(){this.disabled||this.options.dragMode===xr||this.setDragMode(xa(this.dragBox,Qe)?br:$t)},wheel:function(n){var s=this,i=Number(this.options.wheelZoomRatio)||.1,b=1;this.disabled||(n.preventDefault(),!this.wheeling&&(this.wheeling=!0,setTimeout(function(){s.wheeling=!1},50),n.deltaY?b=n.deltaY>0?1:-1:n.wheelDelta?b=-n.wheelDelta/120:n.detail&&(b=n.detail>0?1:-1),this.zoom(-b*i,n)))},cropStart:function(n){var s=n.buttons,i=n.button;if(!(this.disabled||(n.type==="mousedown"||n.type==="pointerdown"&&n.pointerType==="mouse")&&(z(s)&&s!==1||z(i)&&i!==0||n.ctrlKey))){var b=this.options,A=this.pointers,C;n.changedTouches?ce(n.changedTouches,function(_){A[_.identifier]=kt(_)}):A[n.pointerId||0]=kt(n),Object.keys(A).length>1&&b.zoomable&&b.zoomOnTouch?C=X:C=er(n.target,De),yr.test(C)&&st(this.element,Vt,{originalEvent:n,action:C})!==!1&&(n.preventDefault(),this.action=C,this.cropping=!1,C===te&&(this.cropping=!0,fe(this.dragBox,rt)))}},cropMove:function(n){var s=this.action;if(!(this.disabled||!s)){var i=this.pointers;n.preventDefault(),st(this.element,Wt,{originalEvent:n,action:s})!==!1&&(n.changedTouches?ce(n.changedTouches,function(b){ie(i[b.identifier]||{},kt(b,!0))}):ie(i[n.pointerId||0]||{},kt(n,!0)),this.change(n))}},cropEnd:function(n){if(!this.disabled){var s=this.action,i=this.pointers;n.changedTouches?ce(n.changedTouches,function(b){delete i[b.identifier]}):delete i[n.pointerId||0],s&&(n.preventDefault(),Object.keys(i).length||(this.action=""),this.cropping&&(this.cropping=!1,ot(this.dragBox,rt,this.cropped&&this.options.modal)),st(this.element,Yt,{originalEvent:n,action:s}))}}},w={change:function(n){var s=this.options,i=this.canvasData,b=this.containerData,A=this.cropBoxData,C=this.pointers,_=this.action,L=s.aspectRatio,D=A.left,M=A.top,T=A.width,O=A.height,K=D+T,j=M+O,oe=0,ee=0,he=b.width,ue=b.height,de=!0,qe;!L&&n.shiftKey&&(L=T&&O?T/O:1),this.limited&&(oe=A.minLeft,ee=A.minTop,he=oe+Math.min(b.width,i.width,i.left+i.width),ue=ee+Math.min(b.height,i.height,i.top+i.height));var Me=C[Object.keys(C)[0]],N={x:Me.endX-Me.startX,y:Me.endY-Me.startY},re=function(ke){switch(ke){case Y:K+N.x>he&&(N.x=he-K);break;case W:D+N.x<oe&&(N.x=oe-D);break;case J:M+N.y<ee&&(N.y=ee-M);break;case q:j+N.y>ue&&(N.y=ue-j);break}};switch(_){case Z:D+=N.x,M+=N.y;break;case Y:if(N.x>=0&&(K>=he||L&&(M<=ee||j>=ue))){de=!1;break}re(Y),T+=N.x,T<0&&(_=W,T=-T,D-=T),L&&(O=T/L,M+=(A.height-O)/2);break;case J:if(N.y<=0&&(M<=ee||L&&(D<=oe||K>=he))){de=!1;break}re(J),O-=N.y,M+=N.y,O<0&&(_=q,O=-O,M-=O),L&&(T=O*L,D+=(A.width-T)/2);break;case W:if(N.x<=0&&(D<=oe||L&&(M<=ee||j>=ue))){de=!1;break}re(W),T-=N.x,D+=N.x,T<0&&(_=Y,T=-T,D-=T),L&&(O=T/L,M+=(A.height-O)/2);break;case q:if(N.y>=0&&(j>=ue||L&&(D<=oe||K>=he))){de=!1;break}re(q),O+=N.y,O<0&&(_=J,O=-O,M-=O),L&&(T=O*L,D+=(A.width-T)/2);break;case ae:if(L){if(N.y<=0&&(M<=ee||K>=he)){de=!1;break}re(J),O-=N.y,M+=N.y,T=O*L}else re(J),re(Y),N.x>=0?K<he?T+=N.x:N.y<=0&&M<=ee&&(de=!1):T+=N.x,N.y<=0?M>ee&&(O-=N.y,M+=N.y):(O-=N.y,M+=N.y);T<0&&O<0?(_=Be,O=-O,T=-T,M-=O,D-=T):T<0?(_=se,T=-T,D-=T):O<0&&(_=me,O=-O,M-=O);break;case se:if(L){if(N.y<=0&&(M<=ee||D<=oe)){de=!1;break}re(J),O-=N.y,M+=N.y,T=O*L,D+=A.width-T}else re(J),re(W),N.x<=0?D>oe?(T-=N.x,D+=N.x):N.y<=0&&M<=ee&&(de=!1):(T-=N.x,D+=N.x),N.y<=0?M>ee&&(O-=N.y,M+=N.y):(O-=N.y,M+=N.y);T<0&&O<0?(_=me,O=-O,T=-T,M-=O,D-=T):T<0?(_=ae,T=-T,D-=T):O<0&&(_=Be,O=-O,M-=O);break;case Be:if(L){if(N.x<=0&&(D<=oe||j>=ue)){de=!1;break}re(W),T-=N.x,D+=N.x,O=T/L}else re(q),re(W),N.x<=0?D>oe?(T-=N.x,D+=N.x):N.y>=0&&j>=ue&&(de=!1):(T-=N.x,D+=N.x),N.y>=0?j<ue&&(O+=N.y):O+=N.y;T<0&&O<0?(_=ae,O=-O,T=-T,M-=O,D-=T):T<0?(_=me,T=-T,D-=T):O<0&&(_=se,O=-O,M-=O);break;case me:if(L){if(N.x>=0&&(K>=he||j>=ue)){de=!1;break}re(Y),T+=N.x,O=T/L}else re(q),re(Y),N.x>=0?K<he?T+=N.x:N.y>=0&&j>=ue&&(de=!1):T+=N.x,N.y>=0?j<ue&&(O+=N.y):O+=N.y;T<0&&O<0?(_=se,O=-O,T=-T,M-=O,D-=T):T<0?(_=Be,T=-T,D-=T):O<0&&(_=ae,O=-O,M-=O);break;case U:this.move(N.x,N.y),de=!1;break;case X:this.zoom(Ia(C),n),de=!1;break;case te:if(!N.x||!N.y){de=!1;break}qe=Rr(this.cropper),D=Me.startX-qe.left,M=Me.startY-qe.top,T=A.minWidth,O=A.minHeight,N.x>0?_=N.y>0?me:ae:N.x<0&&(D-=T,_=N.y>0?Be:se),N.y<0&&(M-=O),this.cropped||(Te(this.cropBox,le),this.cropped=!0,this.limited&&this.limitCropBox(!0,!0));break}de&&(A.width=T,A.height=O,A.left=D,A.top=M,this.action=_,this.renderCropBox()),ce(C,function(pe){pe.startX=pe.endX,pe.startY=pe.endY})}},E={crop:function(){return this.ready&&!this.cropped&&!this.disabled&&(this.cropped=!0,this.limitCropBox(!0,!0),this.options.modal&&fe(this.dragBox,rt),Te(this.cropBox,le),this.setCropBoxData(this.initialCropBoxData)),this},reset:function(){return this.ready&&!this.disabled&&(this.imageData=ie({},this.initialImageData),this.canvasData=ie({},this.initialCanvasData),this.cropBoxData=ie({},this.initialCropBoxData),this.renderCanvas(),this.cropped&&this.renderCropBox()),this},clear:function(){return this.cropped&&!this.disabled&&(ie(this.cropBoxData,{left:0,top:0,width:0,height:0}),this.cropped=!1,this.renderCropBox(),this.limitCanvas(!0,!0),this.renderCanvas(),Te(this.dragBox,rt),fe(this.cropBox,le)),this},replace:function(n){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return!this.disabled&&n&&(this.isImg&&(this.element.src=n),s?(this.url=n,this.image.src=n,this.ready&&(this.viewBoxImage.src=n,ce(this.previews,function(i){i.getElementsByTagName("img")[0].src=n}))):(this.isImg&&(this.replaced=!0),this.options.data=null,this.uncreate(),this.load(n))),this},enable:function(){return this.ready&&this.disabled&&(this.disabled=!1,Te(this.cropper,et)),this},disable:function(){return this.ready&&!this.disabled&&(this.disabled=!0,fe(this.cropper,et)),this},destroy:function(){var n=this.element;return n[G]?(n[G]=void 0,this.isImg&&this.replaced&&(n.src=this.originalUrl),this.uncreate(),this):this},move:function(n){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:n,i=this.canvasData,b=i.left,A=i.top;return this.moveTo(Jt(n)?n:b+Number(n),Jt(s)?s:A+Number(s))},moveTo:function(n){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:n,i=this.canvasData,b=!1;return n=Number(n),s=Number(s),this.ready&&!this.disabled&&this.options.movable&&(z(n)&&(i.left=n,b=!0),z(s)&&(i.top=s,b=!0),b&&this.renderCanvas(!0)),this},zoom:function(n,s){var i=this.canvasData;return n=Number(n),n<0?n=1/(1-n):n=1+n,this.zoomTo(i.width*n/i.naturalWidth,null,s)},zoomTo:function(n,s,i){var b=this.options,A=this.canvasData,C=A.width,_=A.height,L=A.naturalWidth,D=A.naturalHeight;if(n=Number(n),n>=0&&this.ready&&!this.disabled&&b.zoomable){var M=L*n,T=D*n;if(st(this.element,bt,{ratio:n,oldRatio:C/L,originalEvent:i})===!1)return this;if(i){var O=this.pointers,K=Rr(this.cropper),j=O&&Object.keys(O).length?Fr(O):{pageX:i.pageX,pageY:i.pageY};A.left-=(M-C)*((j.pageX-K.left-A.left)/C),A.top-=(T-_)*((j.pageY-K.top-A.top)/_)}else nt(s)&&z(s.x)&&z(s.y)?(A.left-=(M-C)*((s.x-A.left)/C),A.top-=(T-_)*((s.y-A.top)/_)):(A.left-=(M-C)/2,A.top-=(T-_)/2);A.width=M,A.height=T,this.renderCanvas(!0)}return this},rotate:function(n){return this.rotateTo((this.imageData.rotate||0)+Number(n))},rotateTo:function(n){return n=Number(n),z(n)&&this.ready&&!this.disabled&&this.options.rotatable&&(this.imageData.rotate=n%360,this.renderCanvas(!0,!0)),this},scaleX:function(n){var s=this.imageData.scaleY;return this.scale(n,z(s)?s:1)},scaleY:function(n){var s=this.imageData.scaleX;return this.scale(z(s)?s:1,n)},scale:function(n){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:n,i=this.imageData,b=!1;return n=Number(n),s=Number(s),this.ready&&!this.disabled&&this.options.scalable&&(z(n)&&(i.scaleX=n,b=!0),z(s)&&(i.scaleY=s,b=!0),b&&this.renderCanvas(!0,!0)),this},getData:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,s=this.options,i=this.imageData,b=this.canvasData,A=this.cropBoxData,C;if(this.ready&&this.cropped){C={x:A.left-b.left,y:A.top-b.top,width:A.width,height:A.height};var _=i.width/i.naturalWidth;if(ce(C,function(M,T){C[T]=M/_}),n){var L=Math.round(C.y+C.height),D=Math.round(C.x+C.width);C.x=Math.round(C.x),C.y=Math.round(C.y),C.width=D-C.x,C.height=L-C.y}}else C={x:0,y:0,width:0,height:0};return s.rotatable&&(C.rotate=i.rotate||0),s.scalable&&(C.scaleX=i.scaleX||1,C.scaleY=i.scaleY||1),C},setData:function(n){var s=this.options,i=this.imageData,b=this.canvasData,A={};if(this.ready&&!this.disabled&&nt(n)){var C=!1;s.rotatable&&z(n.rotate)&&n.rotate!==i.rotate&&(i.rotate=n.rotate,C=!0),s.scalable&&(z(n.scaleX)&&n.scaleX!==i.scaleX&&(i.scaleX=n.scaleX,C=!0),z(n.scaleY)&&n.scaleY!==i.scaleY&&(i.scaleY=n.scaleY,C=!0)),C&&this.renderCanvas(!0,!0);var _=i.width/i.naturalWidth;z(n.x)&&(A.left=n.x*_+b.left),z(n.y)&&(A.top=n.y*_+b.top),z(n.width)&&(A.width=n.width*_),z(n.height)&&(A.height=n.height*_),this.setCropBoxData(A)}return this},getContainerData:function(){return this.ready?ie({},this.containerData):{}},getImageData:function(){return this.sized?ie({},this.imageData):{}},getCanvasData:function(){var n=this.canvasData,s={};return this.ready&&ce(["left","top","width","height","naturalWidth","naturalHeight"],function(i){s[i]=n[i]}),s},setCanvasData:function(n){var s=this.canvasData,i=s.aspectRatio;return this.ready&&!this.disabled&&nt(n)&&(z(n.left)&&(s.left=n.left),z(n.top)&&(s.top=n.top),z(n.width)?(s.width=n.width,s.height=n.width/i):z(n.height)&&(s.height=n.height,s.width=n.height*i),this.renderCanvas(!0)),this},getCropBoxData:function(){var n=this.cropBoxData,s;return this.ready&&this.cropped&&(s={left:n.left,top:n.top,width:n.width,height:n.height}),s||{}},setCropBoxData:function(n){var s=this.cropBoxData,i=this.options.aspectRatio,b,A;return this.ready&&this.cropped&&!this.disabled&&nt(n)&&(z(n.left)&&(s.left=n.left),z(n.top)&&(s.top=n.top),z(n.width)&&n.width!==s.width&&(b=!0,s.width=n.width),z(n.height)&&n.height!==s.height&&(A=!0,s.height=n.height),i&&(b?s.height=s.width/i:A&&(s.width=s.height*i)),this.renderCropBox()),this},getCroppedCanvas:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!this.ready||!window.HTMLCanvasElement)return null;var s=this.canvasData,i=lt(this.image,this.imageData,s,n);if(!this.cropped)return i;var b=this.getData(n.rounded),A=b.x,C=b.y,_=b.width,L=b.height,D=i.width/Math.floor(s.naturalWidth);D!==1&&(A*=D,C*=D,_*=D,L*=D);var M=_/L,T=Ie({aspectRatio:M,width:n.maxWidth||1/0,height:n.maxHeight||1/0}),O=Ie({aspectRatio:M,width:n.minWidth||0,height:n.minHeight||0},"cover"),K=Ie({aspectRatio:M,width:n.width||(D!==1?i.width:_),height:n.height||(D!==1?i.height:L)}),j=K.width,oe=K.height;j=Math.min(T.width,Math.max(O.width,j)),oe=Math.min(T.height,Math.max(O.height,oe));var ee=document.createElement("canvas"),he=ee.getContext("2d");ee.width=it(j),ee.height=it(oe),he.fillStyle=n.fillColor||"transparent",he.fillRect(0,0,j,oe);var ue=n.imageSmoothingEnabled,de=ue===void 0?!0:ue,qe=n.imageSmoothingQuality;he.imageSmoothingEnabled=de,qe&&(he.imageSmoothingQuality=qe);var Me=i.width,N=i.height,re=A,pe=C,ke,Ke,yt,It,ct,Xe;re<=-_||re>Me?(re=0,ke=0,yt=0,ct=0):re<=0?(yt=-re,re=0,ke=Math.min(Me,_+re),ct=ke):re<=Me&&(yt=0,ke=Math.min(_,Me-re),ct=ke),ke<=0||pe<=-L||pe>N?(pe=0,Ke=0,It=0,Xe=0):pe<=0?(It=-pe,pe=0,Ke=Math.min(N,L+pe),Xe=Ke):pe<=N&&(It=0,Ke=Math.min(L,N-pe),Xe=Ke);var we=[re,pe,ke,Ke];if(ct>0&&Xe>0){var wt=j/_;we.push(yt*wt,It*wt,ct*wt,Xe*wt)}return he.drawImage.apply(he,[i].concat(g(we.map(function(Or){return Math.floor(it(Or))})))),ee},setAspectRatio:function(n){var s=this.options;return!this.disabled&&!Jt(n)&&(s.aspectRatio=Math.max(0,n)||NaN,this.ready&&(this.initCropBox(),this.cropped&&this.renderCropBox())),this},setDragMode:function(n){var s=this.options,i=this.dragBox,b=this.face;if(this.ready&&!this.disabled){var A=n===$t,C=s.movable&&n===br;n=A||C?n:xr,s.dragMode=n,Ct(i,De,n),ot(i,Qe,A),ot(i,be,C),s.cropBoxMovable||(Ct(b,De,n),ot(b,Qe,A),ot(b,be,C))}return this}},I=R.Cropper,F=(function(){function h(n){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(r(this,h),!n||!Er.test(n.tagName))throw new Error("The first argument is required and must be an <img> or <canvas> element.");this.element=n,this.options=ie({},Zt,nt(s)&&s),this.cropped=!1,this.disabled=!1,this.pointers={},this.ready=!1,this.reloading=!1,this.replaced=!1,this.sized=!1,this.sizing=!1,this.init()}return o(h,[{key:"init",value:function(){var s=this.element,i=s.tagName.toLowerCase(),b;if(!s[G]){if(s[G]=this,i==="img"){if(this.isImg=!0,b=s.getAttribute("src")||"",this.originalUrl=b,!b)return;b=s.src}else i==="canvas"&&window.HTMLCanvasElement&&(b=s.toDataURL());this.load(b)}}},{key:"load",value:function(s){var i=this;if(s){this.url=s,this.imageData={};var b=this.element,A=this.options;if(!A.rotatable&&!A.scalable&&(A.checkOrientation=!1),!A.checkOrientation||!window.ArrayBuffer){this.clone();return}if(Ir.test(s)){wr.test(s)?this.read(wa(s)):this.clone();return}var C=new XMLHttpRequest,_=this.clone.bind(this);this.reloading=!0,this.xhr=C,C.onabort=_,C.onerror=_,C.ontimeout=_,C.onprogress=function(){C.getResponseHeader("content-type")!==jt&&C.abort()},C.onload=function(){i.read(C.response)},C.onloadend=function(){i.reloading=!1,i.xhr=null},A.checkCrossOrigin&&Tr(s)&&b.crossOrigin&&(s=kr(s)),C.open("GET",s,!0),C.responseType="arraybuffer",C.withCredentials=b.crossOrigin==="use-credentials",C.send()}}},{key:"read",value:function(s){var i=this.options,b=this.imageData,A=ar(s),C=0,_=1,L=1;if(A>1){this.url=Ea(s,jt);var D=Ba(A);C=D.rotate,_=D.scaleX,L=D.scaleY}i.rotatable&&(b.rotate=C),i.scalable&&(b.scaleX=_,b.scaleY=L),this.clone()}},{key:"clone",value:function(){var s=this.element,i=this.url,b=s.crossOrigin,A=i;this.options.checkCrossOrigin&&Tr(i)&&(b||(b="anonymous"),A=kr(i)),this.crossOrigin=b,this.crossOriginUrl=A;var C=document.createElement("img");b&&(C.crossOrigin=b),C.src=A||i,C.alt=s.alt||"The image to crop",this.image=C,C.onload=this.start.bind(this),C.onerror=this.stop.bind(this),fe(C,At),s.parentNode.insertBefore(C,s.nextSibling)}},{key:"start",value:function(){var s=this,i=this.image;i.onload=null,i.onerror=null,this.sizing=!0;var b=R.navigator&&/(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(R.navigator.userAgent),A=function(D,M){ie(s.imageData,{naturalWidth:D,naturalHeight:M,aspectRatio:D/M}),s.initialImageData=ie({},s.imageData),s.sizing=!1,s.sized=!0,s.build()};if(i.naturalWidth&&!b){A(i.naturalWidth,i.naturalHeight);return}var C=document.createElement("img"),_=document.body||document.documentElement;this.sizingImage=C,C.onload=function(){A(C.width,C.height),b||_.removeChild(C)},C.src=i.src,b||(C.style.cssText="left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;",_.appendChild(C))}},{key:"stop",value:function(){var s=this.image;s.onload=null,s.onerror=null,s.parentNode.removeChild(s),this.image=null}},{key:"build",value:function(){if(!(!this.sized||this.ready)){var s=this.element,i=this.options,b=this.image,A=s.parentNode,C=document.createElement("div");C.innerHTML=Br;var _=C.querySelector(".".concat(G,"-container")),L=_.querySelector(".".concat(G,"-canvas")),D=_.querySelector(".".concat(G,"-drag-box")),M=_.querySelector(".".concat(G,"-crop-box")),T=M.querySelector(".".concat(G,"-face"));this.container=A,this.cropper=_,this.canvas=L,this.dragBox=D,this.cropBox=M,this.viewBox=_.querySelector(".".concat(G,"-view-box")),this.face=T,L.appendChild(b),fe(s,le),A.insertBefore(_,s.nextSibling),Te(b,At),this.initPreview(),this.bind(),i.initialAspectRatio=Math.max(0,i.initialAspectRatio)||NaN,i.aspectRatio=Math.max(0,i.aspectRatio)||NaN,i.viewMode=Math.max(0,Math.min(3,Math.round(i.viewMode)))||0,fe(M,le),i.guides||fe(M.getElementsByClassName("".concat(G,"-dashed")),le),i.center||fe(M.getElementsByClassName("".concat(G,"-center")),le),i.background&&fe(_,"".concat(G,"-bg")),i.highlight||fe(T,tt),i.cropBoxMovable&&(fe(T,be),Ct(T,De,Z)),i.cropBoxResizable||(fe(M.getElementsByClassName("".concat(G,"-line")),le),fe(M.getElementsByClassName("".concat(G,"-point")),le)),this.render(),this.ready=!0,this.setDragMode(i.dragMode),i.autoCrop&&this.crop(),this.setData(i.data),ne(i.ready)&&ye(s,gt,i.ready,{once:!0}),st(s,gt)}}},{key:"unbuild",value:function(){if(this.ready){this.ready=!1,this.unbind(),this.resetPreview();var s=this.cropper.parentNode;s&&s.removeChild(this.cropper),Te(this.element,le)}}},{key:"uncreate",value:function(){this.ready?(this.unbuild(),this.ready=!1,this.cropped=!1):this.sizing?(this.sizingImage.onload=null,this.sizing=!1,this.sized=!1):this.reloading?(this.xhr.onabort=null,this.xhr.abort()):this.image&&this.stop()}}],[{key:"noConflict",value:function(){return window.Cropper=I,h}},{key:"setDefaults",value:function(s){ie(Zt,nt(s)&&s)}}])})();return ie(F.prototype,_a,f,v,m,w,E),F}))});var ji=Sa((on,sn)=>{(function(e,t){typeof define=="function"&&define.amd?define([],t):typeof on!="undefined"?t():(t(),e.FileSaver={})})(on,function(){"use strict";function e(u,d){return typeof d=="undefined"?d={autoBom:!1}:typeof d!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),d={autoBom:!d}),d.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(u.type)?new Blob(["\uFEFF",u],{type:u.type}):u}function t(u,d,p){var g=new XMLHttpRequest;g.open("GET",u),g.responseType="blob",g.onload=function(){c(g.response,d,p)},g.onerror=function(){console.error("could not download file")},g.send()}function r(u){var d=new XMLHttpRequest;d.open("HEAD",u,!1);try{d.send()}catch(p){}return 200<=d.status&&299>=d.status}function a(u){try{u.dispatchEvent(new MouseEvent("click"))}catch(p){var d=document.createEvent("MouseEvents");d.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),u.dispatchEvent(d)}}var o=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof global=="object"&&global.global===global?global:void 0,l=o.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),c=o.saveAs||(typeof window!="object"||window!==o?function(){}:"download"in HTMLAnchorElement.prototype&&!l?function(u,d,p){var g=o.URL||o.webkitURL,B=document.createElement("a");d=d||u.name||"download",B.download=d,B.rel="noopener",typeof u=="string"?(B.href=u,B.origin===location.origin?a(B):r(B.href)?t(u,d,p):a(B,B.target="_blank")):(B.href=g.createObjectURL(u),setTimeout(function(){g.revokeObjectURL(B.href)},4e4),setTimeout(function(){a(B)},0))}:"msSaveOrOpenBlob"in navigator?function(u,d,p){if(d=d||u.name||"download",typeof u!="string")navigator.msSaveOrOpenBlob(e(u,p),d);else if(r(u))t(u,d,p);else{var g=document.createElement("a");g.href=u,g.target="_blank",setTimeout(function(){a(g)})}}:function(u,d,p,g){if(g=g||open("","_blank"),g&&(g.document.title=g.document.body.innerText="downloading..."),typeof u=="string")return t(u,d,p);var B=u.type==="application/octet-stream",x=/constructor/i.test(o.HTMLElement)||o.safari,y=/CriOS\/[\d]+/.test(navigator.userAgent);if((y||B&&x||l)&&typeof FileReader!="undefined"){var S=new FileReader;S.onloadend=function(){var H=S.result;H=y?H:H.replace(/^data:[^;]*;/,"data:attachment/file;"),g?g.location.href=H:location=H,g=null},S.readAsDataURL(u)}else{var k=o.URL||o.webkitURL,R=k.createObjectURL(u);g?g.location=R:location.href=R,g=null,setTimeout(function(){k.revokeObjectURL(R)},4e4)}});o.saveAs=c.saveAs=c,typeof sn!="undefined"&&(sn.exports=c)})});var Ki=Sa((qi,ln)=>{(function(e){if(typeof qi=="object"&&typeof ln!="undefined")ln.exports=e();else if(typeof define=="function"&&define.amd)define([],e);else{var t;typeof window!="undefined"?t=window:typeof global!="undefined"?t=global:typeof self!="undefined"?t=self:t=this,t.localforage=e()}})(function(){var e,t,r;return(function a(o,l,c){function u(g,B){if(!l[g]){if(!o[g]){var x=typeof nr=="function"&&nr;if(!B&&x)return x(g,!0);if(d)return d(g,!0);var y=new Error("Cannot find module '"+g+"'");throw y.code="MODULE_NOT_FOUND",y}var S=l[g]={exports:{}};o[g][0].call(S.exports,function(k){var R=o[g][1][k];return u(R||k)},S,S.exports,a,o,l,c)}return l[g].exports}for(var d=typeof nr=="function"&&nr,p=0;p<c.length;p++)u(c[p]);return u})({1:[function(a,o,l){(function(c){"use strict";var u=c.MutationObserver||c.WebKitMutationObserver,d;if(u){var p=0,g=new u(k),B=c.document.createTextNode("");g.observe(B,{characterData:!0}),d=function(){B.data=p=++p%2}}else if(!c.setImmediate&&typeof c.MessageChannel!="undefined"){var x=new c.MessageChannel;x.port1.onmessage=k,d=function(){x.port2.postMessage(0)}}else"document"in c&&"onreadystatechange"in c.document.createElement("script")?d=function(){var H=c.document.createElement("script");H.onreadystatechange=function(){k(),H.onreadystatechange=null,H.parentNode.removeChild(H),H=null},c.document.documentElement.appendChild(H)}:d=function(){setTimeout(k,0)};var y,S=[];function k(){y=!0;for(var H,Q,G=S.length;G;){for(Q=S,S=[],H=-1;++H<G;)Q[H]();G=S.length}y=!1}o.exports=R;function R(H){S.push(H)===1&&!y&&d()}}).call(this,typeof global!="undefined"?global:typeof self!="undefined"?self:typeof window!="undefined"?window:{})},{}],2:[function(a,o,l){"use strict";var c=a(1);function u(){}var d={},p=["REJECTED"],g=["FULFILLED"],B=["PENDING"];o.exports=x;function x(U){if(typeof U!="function")throw new TypeError("resolver must be a function");this.state=B,this.queue=[],this.outcome=void 0,U!==u&&R(this,U)}x.prototype.catch=function(U){return this.then(null,U)},x.prototype.then=function(U,X){if(typeof U!="function"&&this.state===g||typeof X!="function"&&this.state===p)return this;var Y=new this.constructor(u);if(this.state!==B){var W=this.state===g?U:X;S(Y,W,this.outcome)}else this.queue.push(new y(Y,U,X));return Y};function y(U,X,Y){this.promise=U,typeof X=="function"&&(this.onFulfilled=X,this.callFulfilled=this.otherCallFulfilled),typeof Y=="function"&&(this.onRejected=Y,this.callRejected=this.otherCallRejected)}y.prototype.callFulfilled=function(U){d.resolve(this.promise,U)},y.prototype.otherCallFulfilled=function(U){S(this.promise,this.onFulfilled,U)},y.prototype.callRejected=function(U){d.reject(this.promise,U)},y.prototype.otherCallRejected=function(U){S(this.promise,this.onRejected,U)};function S(U,X,Y){c(function(){var W;try{W=X(Y)}catch(q){return d.reject(U,q)}W===U?d.reject(U,new TypeError("Cannot resolve promise with itself")):d.resolve(U,W)})}d.resolve=function(U,X){var Y=H(k,X);if(Y.status==="error")return d.reject(U,Y.value);var W=Y.value;if(W)R(U,W);else{U.state=g,U.outcome=X;for(var q=-1,J=U.queue.length;++q<J;)U.queue[q].callFulfilled(X)}return U},d.reject=function(U,X){U.state=p,U.outcome=X;for(var Y=-1,W=U.queue.length;++Y<W;)U.queue[Y].callRejected(X);return U};function k(U){var X=U&&U.then;if(U&&(typeof U=="object"||typeof U=="function")&&typeof X=="function")return function(){X.apply(U,arguments)}}function R(U,X){var Y=!1;function W(se){Y||(Y=!0,d.reject(U,se))}function q(se){Y||(Y=!0,d.resolve(U,se))}function J(){X(q,W)}var ae=H(J);ae.status==="error"&&W(ae.value)}function H(U,X){var Y={};try{Y.value=U(X),Y.status="success"}catch(W){Y.status="error",Y.value=W}return Y}x.resolve=Q;function Q(U){return U instanceof this?U:d.resolve(new this(u),U)}x.reject=G;function G(U){var X=new this(u);return d.reject(X,U)}x.all=Z;function Z(U){var X=this;if(Object.prototype.toString.call(U)!=="[object Array]")return this.reject(new TypeError("must be an array"));var Y=U.length,W=!1;if(!Y)return this.resolve([]);for(var q=new Array(Y),J=0,ae=-1,se=new this(u);++ae<Y;)me(U[ae],ae);return se;function me(Be,Qe){X.resolve(Be).then(et,function(le){W||(W=!0,d.reject(se,le))});function et(le){q[Qe]=le,++J===Y&&!W&&(W=!0,d.resolve(se,q))}}}x.race=te;function te(U){var X=this;if(Object.prototype.toString.call(U)!=="[object Array]")return this.reject(new TypeError("must be an array"));var Y=U.length,W=!1;if(!Y)return this.resolve([]);for(var q=-1,J=new this(u);++q<Y;)ae(U[q]);return J;function ae(se){X.resolve(se).then(function(me){W||(W=!0,d.resolve(J,me))},function(me){W||(W=!0,d.reject(J,me))})}}},{1:1}],3:[function(a,o,l){(function(c){"use strict";typeof c.Promise!="function"&&(c.Promise=a(2))}).call(this,typeof global!="undefined"?global:typeof self!="undefined"?self:typeof window!="undefined"?window:{})},{2:2}],4:[function(a,o,l){"use strict";var c=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(f){return typeof f}:function(f){return f&&typeof Symbol=="function"&&f.constructor===Symbol&&f!==Symbol.prototype?"symbol":typeof f};function u(f,v){if(!(f instanceof v))throw new TypeError("Cannot call a class as a function")}function d(){try{if(typeof indexedDB!="undefined")return indexedDB;if(typeof webkitIndexedDB!="undefined")return webkitIndexedDB;if(typeof mozIndexedDB!="undefined")return mozIndexedDB;if(typeof OIndexedDB!="undefined")return OIndexedDB;if(typeof msIndexedDB!="undefined")return msIndexedDB}catch(f){return}}var p=d();function g(){try{if(!p||!p.open)return!1;var f=typeof openDatabase!="undefined"&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),v=typeof fetch=="function"&&fetch.toString().indexOf("[native code")!==-1;return(!f||v)&&typeof indexedDB!="undefined"&&typeof IDBKeyRange!="undefined"}catch(m){return!1}}function B(f,v){f=f||[],v=v||{};try{return new Blob(f,v)}catch(I){if(I.name!=="TypeError")throw I;for(var m=typeof BlobBuilder!="undefined"?BlobBuilder:typeof MSBlobBuilder!="undefined"?MSBlobBuilder:typeof MozBlobBuilder!="undefined"?MozBlobBuilder:WebKitBlobBuilder,w=new m,E=0;E<f.length;E+=1)w.append(f[E]);return w.getBlob(v.type)}}typeof Promise=="undefined"&&a(3);var x=Promise;function y(f,v){v&&f.then(function(m){v(null,m)},function(m){v(m)})}function S(f,v,m){typeof v=="function"&&f.then(v),typeof m=="function"&&f.catch(m)}function k(f){return typeof f!="string"&&(console.warn(f+" used as a key, but it is not a string."),f=String(f)),f}function R(){if(arguments.length&&typeof arguments[arguments.length-1]=="function")return arguments[arguments.length-1]}var H="local-forage-detect-blob-support",Q=void 0,G={},Z=Object.prototype.toString,te="readonly",U="readwrite";function X(f){for(var v=f.length,m=new ArrayBuffer(v),w=new Uint8Array(m),E=0;E<v;E++)w[E]=f.charCodeAt(E);return m}function Y(f){return new x(function(v){var m=f.transaction(H,U),w=B([""]);m.objectStore(H).put(w,"key"),m.onabort=function(E){E.preventDefault(),E.stopPropagation(),v(!1)},m.oncomplete=function(){var E=navigator.userAgent.match(/Chrome\/(\d+)/),I=navigator.userAgent.match(/Edge\//);v(I||!E||parseInt(E[1],10)>=43)}}).catch(function(){return!1})}function W(f){return typeof Q=="boolean"?x.resolve(Q):Y(f).then(function(v){return Q=v,Q})}function q(f){var v=G[f.name],m={};m.promise=new x(function(w,E){m.resolve=w,m.reject=E}),v.deferredOperations.push(m),v.dbReady?v.dbReady=v.dbReady.then(function(){return m.promise}):v.dbReady=m.promise}function J(f){var v=G[f.name],m=v.deferredOperations.pop();if(m)return m.resolve(),m.promise}function ae(f,v){var m=G[f.name],w=m.deferredOperations.pop();if(w)return w.reject(v),w.promise}function se(f,v){return new x(function(m,w){if(G[f.name]=G[f.name]||De(),f.db)if(v)q(f),f.db.close();else return m(f.db);var E=[f.name];v&&E.push(f.version);var I=p.open.apply(p,E);v&&(I.onupgradeneeded=function(F){var h=I.result;try{h.createObjectStore(f.storeName),F.oldVersion<=1&&h.createObjectStore(H)}catch(n){if(n.name==="ConstraintError")console.warn('The database "'+f.name+'" has been upgraded from version '+F.oldVersion+" to version "+F.newVersion+', but the storage "'+f.storeName+'" already exists.');else throw n}}),I.onerror=function(F){F.preventDefault(),w(I.error)},I.onsuccess=function(){m(I.result),J(f)}})}function me(f){return se(f,!1)}function Be(f){return se(f,!0)}function Qe(f,v){if(!f.db)return!0;var m=!f.db.objectStoreNames.contains(f.storeName),w=f.version<f.db.version,E=f.version>f.db.version;if(w&&(f.version!==v&&console.warn('The database "'+f.name+`" can't be downgraded from version `+f.db.version+" to version "+f.version+"."),f.version=f.db.version),E||m){if(m){var I=f.db.version+1;I>f.version&&(f.version=I)}return!0}return!1}function et(f){return new x(function(v,m){var w=new FileReader;w.onerror=m,w.onloadend=function(E){var I=btoa(E.target.result||"");v({__local_forage_encoded_blob:!0,data:I,type:f.type})},w.readAsBinaryString(f)})}function le(f){var v=X(atob(f.data));return B([v],{type:f.type})}function At(f){return f&&f.__local_forage_encoded_blob}function tt(f){var v=this,m=v._initReady().then(function(){var w=G[v._dbInfo.name];if(w&&w.dbReady)return w.dbReady});return S(m,f,f),m}function rt(f){q(f);for(var v=G[f.name],m=v.forages,w=0;w<m.length;w++){var E=m[w];E._dbInfo.db&&(E._dbInfo.db.close(),E._dbInfo.db=null)}return f.db=null,me(f).then(function(I){return f.db=I,Qe(f)?Be(f):I}).then(function(I){f.db=v.db=I;for(var F=0;F<m.length;F++)m[F]._dbInfo.db=I}).catch(function(I){throw ae(f,I),I})}function be(f,v,m,w){w===void 0&&(w=1);try{var E=f.db.transaction(f.storeName,v);m(null,E)}catch(I){if(w>0&&(!f.db||I.name==="InvalidStateError"||I.name==="NotFoundError"))return x.resolve().then(function(){if(!f.db||I.name==="NotFoundError"&&!f.db.objectStoreNames.contains(f.storeName)&&f.version<=f.db.version)return f.db&&(f.version=f.db.version+1),Be(f)}).then(function(){return rt(f).then(function(){be(f,v,m,w-1)})}).catch(m);m(I)}}function De(){return{forages:[],db:null,dbReady:null,deferredOperations:[]}}function at(f){var v=this,m={db:null};if(f)for(var w in f)m[w]=f[w];var E=G[m.name];E||(E=De(),G[m.name]=E),E.forages.push(v),v._initReady||(v._initReady=v.ready,v.ready=tt);var I=[];function F(){return x.resolve()}for(var h=0;h<E.forages.length;h++){var n=E.forages[h];n!==v&&I.push(n._initReady().catch(F))}var s=E.forages.slice(0);return x.all(I).then(function(){return m.db=E.db,me(m)}).then(function(i){return m.db=i,Qe(m,v._defaultConfig.version)?Be(m):i}).then(function(i){m.db=E.db=i,v._dbInfo=m;for(var b=0;b<s.length;b++){var A=s[b];A!==v&&(A._dbInfo.db=m.db,A._dbInfo.version=m.version)}})}function $t(f,v){var m=this;f=k(f);var w=new x(function(E,I){m.ready().then(function(){be(m._dbInfo,te,function(F,h){if(F)return I(F);try{var n=h.objectStore(m._dbInfo.storeName),s=n.get(f);s.onsuccess=function(){var i=s.result;i===void 0&&(i=null),At(i)&&(i=le(i)),E(i)},s.onerror=function(){I(s.error)}}catch(i){I(i)}})}).catch(I)});return y(w,v),w}function br(f,v){var m=this,w=new x(function(E,I){m.ready().then(function(){be(m._dbInfo,te,function(F,h){if(F)return I(F);try{var n=h.objectStore(m._dbInfo.storeName),s=n.openCursor(),i=1;s.onsuccess=function(){var b=s.result;if(b){var A=b.value;At(A)&&(A=le(A));var C=f(A,b.key,i++);C!==void 0?E(C):b.continue()}else E()},s.onerror=function(){I(s.error)}}catch(b){I(b)}})}).catch(I)});return y(w,v),w}function xr(f,v,m){var w=this;f=k(f);var E=new x(function(I,F){var h;w.ready().then(function(){return h=w._dbInfo,Z.call(v)==="[object Blob]"?W(h.db).then(function(n){return n?v:et(v)}):v}).then(function(n){be(w._dbInfo,U,function(s,i){if(s)return F(s);try{var b=i.objectStore(w._dbInfo.storeName);n===null&&(n=void 0);var A=b.put(n,f);i.oncomplete=function(){n===void 0&&(n=null),I(n)},i.onabort=i.onerror=function(){var C=A.error?A.error:A.transaction.error;F(C)}}catch(C){F(C)}})}).catch(F)});return y(E,m),E}function Xt(f,v){var m=this;f=k(f);var w=new x(function(E,I){m.ready().then(function(){be(m._dbInfo,U,function(F,h){if(F)return I(F);try{var n=h.objectStore(m._dbInfo.storeName),s=n.delete(f);h.oncomplete=function(){E()},h.onerror=function(){I(s.error)},h.onabort=function(){var i=s.error?s.error:s.transaction.error;I(i)}}catch(i){I(i)}})}).catch(I)});return y(w,v),w}function Yt(f){var v=this,m=new x(function(w,E){v.ready().then(function(){be(v._dbInfo,U,function(I,F){if(I)return E(I);try{var h=F.objectStore(v._dbInfo.storeName),n=h.clear();F.oncomplete=function(){w()},F.onabort=F.onerror=function(){var s=n.error?n.error:n.transaction.error;E(s)}}catch(s){E(s)}})}).catch(E)});return y(m,f),m}function Wt(f){var v=this,m=new x(function(w,E){v.ready().then(function(){be(v._dbInfo,te,function(I,F){if(I)return E(I);try{var h=F.objectStore(v._dbInfo.storeName),n=h.count();n.onsuccess=function(){w(n.result)},n.onerror=function(){E(n.error)}}catch(s){E(s)}})}).catch(E)});return y(m,f),m}function Vt(f,v){var m=this,w=new x(function(E,I){if(f<0){E(null);return}m.ready().then(function(){be(m._dbInfo,te,function(F,h){if(F)return I(F);try{var n=h.objectStore(m._dbInfo.storeName),s=!1,i=n.openKeyCursor();i.onsuccess=function(){var b=i.result;if(!b){E(null);return}f===0||s?E(b.key):(s=!0,b.advance(f))},i.onerror=function(){I(i.error)}}catch(b){I(b)}})}).catch(I)});return y(w,v),w}function Cr(f){var v=this,m=new x(function(w,E){v.ready().then(function(){be(v._dbInfo,te,function(I,F){if(I)return E(I);try{var h=F.objectStore(v._dbInfo.storeName),n=h.openKeyCursor(),s=[];n.onsuccess=function(){var i=n.result;if(!i){w(s);return}s.push(i.key),i.continue()},n.onerror=function(){E(n.error)}}catch(i){E(i)}})}).catch(E)});return y(m,f),m}function da(f,v){v=R.apply(this,arguments);var m=this.config();f=typeof f!="function"&&f||{},f.name||(f.name=f.name||m.name,f.storeName=f.storeName||m.storeName);var w=this,E;if(!f.name)E=x.reject("Invalid arguments");else{var I=f.name===m.name&&w._dbInfo.db,F=I?x.resolve(w._dbInfo.db):me(f).then(function(h){var n=G[f.name],s=n.forages;n.db=h;for(var i=0;i<s.length;i++)s[i]._dbInfo.db=h;return h});f.storeName?E=F.then(function(h){if(h.objectStoreNames.contains(f.storeName)){var n=h.version+1;q(f);var s=G[f.name],i=s.forages;h.close();for(var b=0;b<i.length;b++){var A=i[b];A._dbInfo.db=null,A._dbInfo.version=n}var C=new x(function(_,L){var D=p.open(f.name,n);D.onerror=function(M){var T=D.result;T.close(),L(M)},D.onupgradeneeded=function(){var M=D.result;M.deleteObjectStore(f.storeName)},D.onsuccess=function(){var M=D.result;M.close(),_(M)}});return C.then(function(_){s.db=_;for(var L=0;L<i.length;L++){var D=i[L];D._dbInfo.db=_,J(D._dbInfo)}}).catch(function(_){throw(ae(f,_)||x.resolve()).catch(function(){}),_})}}):E=F.then(function(h){q(f);var n=G[f.name],s=n.forages;h.close();for(var i=0;i<s.length;i++){var b=s[i];b._dbInfo.db=null}var A=new x(function(C,_){var L=p.deleteDatabase(f.name);L.onerror=L.onblocked=function(D){var M=L.result;M&&M.close(),_(D)},L.onsuccess=function(){var D=L.result;D&&D.close(),C(D)}});return A.then(function(C){n.db=C;for(var _=0;_<s.length;_++){var L=s[_];J(L._dbInfo)}}).catch(function(C){throw(ae(f,C)||x.resolve()).catch(function(){}),C})})}return y(E,v),E}var ma={_driver:"asyncStorage",_initStorage:at,_support:g(),iterate:br,getItem:$t,setItem:xr,removeItem:Xt,clear:Yt,length:Wt,key:Vt,keys:Cr,dropInstance:da};function pa(){return typeof openDatabase=="function"}var Oe="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",vr="~~local_forage_type~",zt=/^~~local_forage_type~([^~]+)~/,gt="__lfsc__:",St=gt.length,Dt="arbf",bt="blob",jt="si08",yr="ui08",Ir="uic8",wr="si16",xt="si32",Er="ur16",qt="ui32",Kt="fl32",Zt="fl64",Br=St+Dt.length,_r=Object.prototype.toString;function Rt(f){var v=f.length*.75,m=f.length,w,E=0,I,F,h,n;f[f.length-1]==="="&&(v--,f[f.length-2]==="="&&v--);var s=new ArrayBuffer(v),i=new Uint8Array(s);for(w=0;w<m;w+=4)I=Oe.indexOf(f[w]),F=Oe.indexOf(f[w+1]),h=Oe.indexOf(f[w+2]),n=Oe.indexOf(f[w+3]),i[E++]=I<<2|F>>4,i[E++]=(F&15)<<4|h>>2,i[E++]=(h&3)<<6|n&63;return s}function z(f){var v=new Uint8Array(f),m="",w;for(w=0;w<v.length;w+=3)m+=Oe[v[w]>>2],m+=Oe[(v[w]&3)<<4|v[w+1]>>4],m+=Oe[(v[w+1]&15)<<2|v[w+2]>>6],m+=Oe[v[w+2]&63];return v.length%3===2?m=m.substring(0,m.length-1)+"=":v.length%3===1&&(m=m.substring(0,m.length-2)+"=="),m}function Mr(f,v){var m="";if(f&&(m=_r.call(f)),f&&(m==="[object ArrayBuffer]"||f.buffer&&_r.call(f.buffer)==="[object ArrayBuffer]")){var w,E=gt;f instanceof ArrayBuffer?(w=f,E+=Dt):(w=f.buffer,m==="[object Int8Array]"?E+=jt:m==="[object Uint8Array]"?E+=yr:m==="[object Uint8ClampedArray]"?E+=Ir:m==="[object Int16Array]"?E+=wr:m==="[object Uint16Array]"?E+=Er:m==="[object Int32Array]"?E+=xt:m==="[object Uint32Array]"?E+=qt:m==="[object Float32Array]"?E+=Kt:m==="[object Float64Array]"?E+=Zt:v(new Error("Failed to get type for BinaryArray"))),v(E+z(w))}else if(m==="[object Blob]"){var I=new FileReader;I.onload=function(){var F=vr+f.type+"~"+z(this.result);v(gt+bt+F)},I.readAsArrayBuffer(f)}else try{v(JSON.stringify(f))}catch(F){console.error("Couldn't convert value into a JSON string: ",f),v(null,F)}}function Jt(f){if(f.substring(0,St)!==gt)return JSON.parse(f);var v=f.substring(Br),m=f.substring(St,Br),w;if(m===bt&&zt.test(v)){var E=v.match(zt);w=E[1],v=v.substring(E[0].length)}var I=Rt(v);switch(m){case Dt:return I;case bt:return B([I],{type:w});case jt:return new Int8Array(I);case yr:return new Uint8Array(I);case Ir:return new Uint8ClampedArray(I);case wr:return new Int16Array(I);case Er:return new Uint16Array(I);case xt:return new Int32Array(I);case qt:return new Uint32Array(I);case Kt:return new Float32Array(I);case Zt:return new Float64Array(I);default:throw new Error("Unkown type: "+m)}}var Re={serialize:Mr,deserialize:Jt,stringToBuffer:Rt,bufferToString:z};function Pr(f,v,m,w){f.executeSql("CREATE TABLE IF NOT EXISTS "+v.storeName+" (id INTEGER PRIMARY KEY, key unique, value)",[],m,w)}function nt(f){var v=this,m={db:null};if(f)for(var w in f)m[w]=typeof f[w]!="string"?f[w].toString():f[w];var E=new x(function(I,F){try{m.db=openDatabase(m.name,String(m.version),m.description,m.size)}catch(h){return F(h)}m.db.transaction(function(h){Pr(h,m,function(){v._dbInfo=m,I()},function(n,s){F(s)})},F)});return m.serializer=Re,E}function ne(f,v,m,w,E,I){f.executeSql(m,w,E,function(F,h){h.code===h.SYNTAX_ERR?F.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?",[v.storeName],function(n,s){s.rows.length?I(n,h):Pr(n,v,function(){n.executeSql(m,w,E,I)},I)},I):I(F,h)},I)}function Aa(f,v){var m=this;f=k(f);var w=new x(function(E,I){m.ready().then(function(){var F=m._dbInfo;F.db.transaction(function(h){ne(h,F,"SELECT * FROM "+F.storeName+" WHERE key = ? LIMIT 1",[f],function(n,s){var i=s.rows.length?s.rows.item(0).value:null;i&&(i=F.serializer.deserialize(i)),E(i)},function(n,s){I(s)})})}).catch(I)});return y(w,v),w}function Sr(f,v){var m=this,w=new x(function(E,I){m.ready().then(function(){var F=m._dbInfo;F.db.transaction(function(h){ne(h,F,"SELECT * FROM "+F.storeName,[],function(n,s){for(var i=s.rows,b=i.length,A=0;A<b;A++){var C=i.item(A),_=C.value;if(_&&(_=F.serializer.deserialize(_)),_=f(_,C.key,A+1),_!==void 0){E(_);return}}E()},function(n,s){I(s)})})}).catch(I)});return y(w,v),w}function ce(f,v,m,w){var E=this;f=k(f);var I=new x(function(F,h){E.ready().then(function(){v===void 0&&(v=null);var n=v,s=E._dbInfo;s.serializer.serialize(v,function(i,b){b?h(b):s.db.transaction(function(A){ne(A,s,"INSERT OR REPLACE INTO "+s.storeName+" (key, value) VALUES (?, ?)",[f,i],function(){F(n)},function(C,_){h(_)})},function(A){if(A.code===A.QUOTA_ERR){if(w>0){F(ce.apply(E,[f,n,m,w-1]));return}h(A)}})})}).catch(h)});return y(I,m),I}function ie(f,v,m){return ce.apply(this,[f,v,m,1])}function ga(f,v){var m=this;f=k(f);var w=new x(function(E,I){m.ready().then(function(){var F=m._dbInfo;F.db.transaction(function(h){ne(h,F,"DELETE FROM "+F.storeName+" WHERE key = ?",[f],function(){E()},function(n,s){I(s)})})}).catch(I)});return y(w,v),w}function it(f){var v=this,m=new x(function(w,E){v.ready().then(function(){var I=v._dbInfo;I.db.transaction(function(F){ne(F,I,"DELETE FROM "+I.storeName,[],function(){w()},function(h,n){E(n)})})}).catch(E)});return y(m,f),m}function ba(f){var v=this,m=new x(function(w,E){v.ready().then(function(){var I=v._dbInfo;I.db.transaction(function(F){ne(F,I,"SELECT COUNT(key) as c FROM "+I.storeName,[],function(h,n){var s=n.rows.item(0).c;w(s)},function(h,n){E(n)})})}).catch(E)});return y(m,f),m}function $e(f,v){var m=this,w=new x(function(E,I){m.ready().then(function(){var F=m._dbInfo;F.db.transaction(function(h){ne(h,F,"SELECT key FROM "+F.storeName+" WHERE id = ? LIMIT 1",[f+1],function(n,s){var i=s.rows.length?s.rows.item(0).key:null;E(i)},function(n,s){I(s)})})}).catch(I)});return y(w,v),w}function xa(f){var v=this,m=new x(function(w,E){v.ready().then(function(){var I=v._dbInfo;I.db.transaction(function(F){ne(F,I,"SELECT key FROM "+I.storeName,[],function(h,n){for(var s=[],i=0;i<n.rows.length;i++)s.push(n.rows.item(i).key);w(s)},function(h,n){E(n)})})}).catch(E)});return y(m,f),m}function fe(f){return new x(function(v,m){f.transaction(function(w){w.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",[],function(E,I){for(var F=[],h=0;h<I.rows.length;h++)F.push(I.rows.item(h).name);v({db:f,storeNames:F})},function(E,I){m(I)})},function(w){m(w)})})}function Te(f,v){v=R.apply(this,arguments);var m=this.config();f=typeof f!="function"&&f||{},f.name||(f.name=f.name||m.name,f.storeName=f.storeName||m.storeName);var w=this,E;return f.name?E=new x(function(I){var F;f.name===m.name?F=w._dbInfo.db:F=openDatabase(f.name,"","",0),f.storeName?I({db:F,storeNames:[f.storeName]}):I(fe(F))}).then(function(I){return new x(function(F,h){I.db.transaction(function(n){function s(C){return new x(function(_,L){n.executeSql("DROP TABLE IF EXISTS "+C,[],function(){_()},function(D,M){L(M)})})}for(var i=[],b=0,A=I.storeNames.length;b<A;b++)i.push(s(I.storeNames[b]));x.all(i).then(function(){F()}).catch(function(C){h(C)})},function(n){h(n)})})}):E=x.reject("Invalid arguments"),y(E,v),E}var ot={_driver:"webSQLStorage",_initStorage:nt,_support:pa(),iterate:Sr,getItem:Aa,setItem:ie,removeItem:ga,clear:it,length:ba,key:$e,keys:xa,dropInstance:Te};function Ca(){try{return typeof localStorage!="undefined"&&"setItem"in localStorage&&!!localStorage.setItem}catch(f){return!1}}function Tt(f,v){var m=f.name+"/";return f.storeName!==v.storeName&&(m+=f.storeName+"/"),m}function er(){var f="_localforage_support_test";try{return localStorage.setItem(f,!0),localStorage.removeItem(f),!1}catch(v){return!0}}function Ct(){return!er()||localStorage.length>0}function va(f){var v=this,m={};if(f)for(var w in f)m[w]=f[w];return m.keyPrefix=Tt(f,v._defaultConfig),Ct()?(v._dbInfo=m,m.serializer=Re,x.resolve()):x.reject()}function Dr(f){var v=this,m=v.ready().then(function(){for(var w=v._dbInfo.keyPrefix,E=localStorage.length-1;E>=0;E--){var I=localStorage.key(E);I.indexOf(w)===0&&localStorage.removeItem(I)}});return y(m,f),m}function _e(f,v){var m=this;f=k(f);var w=m.ready().then(function(){var E=m._dbInfo,I=localStorage.getItem(E.keyPrefix+f);return I&&(I=E.serializer.deserialize(I)),I});return y(w,v),w}function ye(f,v){var m=this,w=m.ready().then(function(){for(var E=m._dbInfo,I=E.keyPrefix,F=I.length,h=localStorage.length,n=1,s=0;s<h;s++){var i=localStorage.key(s);if(i.indexOf(I)===0){var b=localStorage.getItem(i);if(b&&(b=E.serializer.deserialize(b)),b=f(b,i.substring(F),n++),b!==void 0)return b}}});return y(w,v),w}function st(f,v){var m=this,w=m.ready().then(function(){var E=m._dbInfo,I;try{I=localStorage.key(f)}catch(F){I=null}return I&&(I=I.substring(E.keyPrefix.length)),I});return y(w,v),w}function Rr(f){var v=this,m=v.ready().then(function(){for(var w=v._dbInfo,E=localStorage.length,I=[],F=0;F<E;F++){var h=localStorage.key(F);h.indexOf(w.keyPrefix)===0&&I.push(h.substring(w.keyPrefix.length))}return I});return y(m,f),m}function tr(f){var v=this,m=v.keys().then(function(w){return w.length});return y(m,f),m}function ya(f,v){var m=this;f=k(f);var w=m.ready().then(function(){var E=m._dbInfo;localStorage.removeItem(E.keyPrefix+f)});return y(w,v),w}function Tr(f,v,m){var w=this;f=k(f);var E=w.ready().then(function(){v===void 0&&(v=null);var I=v;return new x(function(F,h){var n=w._dbInfo;n.serializer.serialize(v,function(s,i){if(i)h(i);else try{localStorage.setItem(n.keyPrefix+f,s),F(I)}catch(b){(b.name==="QuotaExceededError"||b.name==="NS_ERROR_DOM_QUOTA_REACHED")&&h(b),h(b)}})})});return y(E,m),E}function kr(f,v){if(v=R.apply(this,arguments),f=typeof f!="function"&&f||{},!f.name){var m=this.config();f.name=f.name||m.name,f.storeName=f.storeName||m.storeName}var w=this,E;return f.name?E=new x(function(I){f.storeName?I(Tt(f,w._defaultConfig)):I(f.name+"/")}).then(function(I){for(var F=localStorage.length-1;F>=0;F--){var h=localStorage.key(F);h.indexOf(I)===0&&localStorage.removeItem(h)}}):E=x.reject("Invalid arguments"),y(E,v),E}var vt={_driver:"localStorageWrapper",_initStorage:va,_support:Ca(),iterate:ye,getItem:_e,setItem:Tr,removeItem:ya,clear:Dr,length:tr,key:st,keys:Rr,dropInstance:kr},Ia=function(v,m){return v===m||typeof v=="number"&&typeof m=="number"&&isNaN(v)&&isNaN(m)},kt=function(v,m){for(var w=v.length,E=0;E<w;){if(Ia(v[E],m))return!0;E++}return!1},Fr=Array.isArray||function(f){return Object.prototype.toString.call(f)==="[object Array]"},Ie={},Lr={},lt={INDEXEDDB:ma,WEBSQL:ot,LOCALSTORAGE:vt},Qr=[lt.INDEXEDDB._driver,lt.WEBSQL._driver,lt.LOCALSTORAGE._driver],Ft=["dropInstance"],rr=["clear","getItem","iterate","key","keys","length","removeItem","setItem"].concat(Ft),wa={description:"",driver:Qr.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1};function Ea(f,v){f[v]=function(){var m=arguments;return f.ready().then(function(){return f[v].apply(f,m)})}}function ar(){for(var f=1;f<arguments.length;f++){var v=arguments[f];if(v)for(var m in v)v.hasOwnProperty(m)&&(Fr(v[m])?arguments[0][m]=v[m].slice():arguments[0][m]=v[m])}return arguments[0]}var Ba=(function(){function f(v){u(this,f);for(var m in lt)if(lt.hasOwnProperty(m)){var w=lt[m],E=w._driver;this[m]=E,Ie[E]||this.defineDriver(w)}this._defaultConfig=ar({},wa),this._config=ar({},this._defaultConfig,v),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver).catch(function(){})}return f.prototype.config=function(m){if((typeof m=="undefined"?"undefined":c(m))==="object"){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(var w in m){if(w==="storeName"&&(m[w]=m[w].replace(/\W/g,"_")),w==="version"&&typeof m[w]!="number")return new Error("Database version must be a number.");this._config[w]=m[w]}return"driver"in m&&m.driver?this.setDriver(this._config.driver):!0}else return typeof m=="string"?this._config[m]:this._config},f.prototype.defineDriver=function(m,w,E){var I=new x(function(F,h){try{var n=m._driver,s=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");if(!m._driver){h(s);return}for(var i=rr.concat("_initStorage"),b=0,A=i.length;b<A;b++){var C=i[b],_=!kt(Ft,C);if((_||m[C])&&typeof m[C]!="function"){h(s);return}}var L=function(){for(var T=function(ee){return function(){var he=new Error("Method "+ee+" is not implemented by the current driver"),ue=x.reject(he);return y(ue,arguments[arguments.length-1]),ue}},O=0,K=Ft.length;O<K;O++){var j=Ft[O];m[j]||(m[j]=T(j))}};L();var D=function(T){Ie[n]&&console.info("Redefining LocalForage driver: "+n),Ie[n]=m,Lr[n]=T,F()};"_support"in m?m._support&&typeof m._support=="function"?m._support().then(D,h):D(!!m._support):D(!0)}catch(M){h(M)}});return S(I,w,E),I},f.prototype.driver=function(){return this._driver||null},f.prototype.getDriver=function(m,w,E){var I=Ie[m]?x.resolve(Ie[m]):x.reject(new Error("Driver not found."));return S(I,w,E),I},f.prototype.getSerializer=function(m){var w=x.resolve(Re);return S(w,m),w},f.prototype.ready=function(m){var w=this,E=w._driverSet.then(function(){return w._ready===null&&(w._ready=w._initDriver()),w._ready});return S(E,m,m),E},f.prototype.setDriver=function(m,w,E){var I=this;Fr(m)||(m=[m]);var F=this._getSupportedDrivers(m);function h(){I._config.driver=I.driver()}function n(b){return I._extend(b),h(),I._ready=I._initStorage(I._config),I._ready}function s(b){return function(){var A=0;function C(){for(;A<b.length;){var _=b[A];return A++,I._dbInfo=null,I._ready=null,I.getDriver(_).then(n).catch(C)}h();var L=new Error("No available storage method found.");return I._driverSet=x.reject(L),I._driverSet}return C()}}var i=this._driverSet!==null?this._driverSet.catch(function(){return x.resolve()}):x.resolve();return this._driverSet=i.then(function(){var b=F[0];return I._dbInfo=null,I._ready=null,I.getDriver(b).then(function(A){I._driver=A._driver,h(),I._wrapLibraryMethodsWithReady(),I._initDriver=s(F)})}).catch(function(){h();var b=new Error("No available storage method found.");return I._driverSet=x.reject(b),I._driverSet}),S(this._driverSet,w,E),this._driverSet},f.prototype.supports=function(m){return!!Lr[m]},f.prototype._extend=function(m){ar(this,m)},f.prototype._getSupportedDrivers=function(m){for(var w=[],E=0,I=m.length;E<I;E++){var F=m[E];this.supports(F)&&w.push(F)}return w},f.prototype._wrapLibraryMethodsWithReady=function(){for(var m=0,w=rr.length;m<w;m++)Ea(this,rr[m])},f.prototype.createInstance=function(m){return new f(m)},f})(),_a=new Ba;o.exports=_a},{3:3}]},{},[4])(4)})});function P(e,t,r){return(e&255)<<0|(t&255)<<8|(r&255)<<16}var Gr=[P(0,0,0),P(255,255,255)],Xc=[P(0,0,0),P(255,128,64),P(64,255,128),P(128,64,255),P(255,255,255)],Yc=[0,16777215,P(163,64,69),P(125,235,228),P(174,70,186),P(94,202,84),P(60,57,200),P(255,255,111),P(174,96,47),P(110,73,0),P(232,122,128),P(92,92,92),P(143,143,143),P(179,255,167),P(129,126,255),P(199,199,199)],Ye=[P(0,0,0),P(255,255,255),P(129,51,56),P(117,206,200),P(142,60,151),P(86,172,77),P(46,44,155),P(237,241,113),P(142,80,41),P(85,56,0),P(196,108,113),P(74,74,74),P(123,123,123),P(169,255,159),P(112,109,235),P(178,178,178)],Ra=[P(0,0,0),P(255,255,255),P(120,41,34),P(135,214,221),P(170,95,182),P(85,160,73),P(64,49,141),P(191,206,114),P(170,116,73),P(234,180,137),P(184,105,98),P(199,255,255),P(234,159,246),P(148,224,137),P(128,113,204),P(255,255,178)],Bn=[P(0,0,0),P(0,0,0),P(33,200,66),P(94,220,120),P(84,85,237),P(125,118,252),P(212,82,77),P(66,235,245),P(252,85,84),P(255,121,120),P(212,193,84),P(230,206,128),P(33,176,59),P(201,91,186),P(204,204,204),P(255,255,255)],Nr=[5395026,11796480,10485760,11599933,7602281,91,95,6208,12048,543240,26368,1196544,7153664,0,0,0,12899815,16728064,14421538,16729963,14090399,6818519,6588,21681,27227,35843,43776,2918400,10777088,0,0,0,16316664,16755516,16742785,16735173,16730354,14633471,4681215,46327,57599,58229,259115,7911470,15065624,7895160,0,0,16777215,16773822,16300216,16300248,16758527,16761855,13095423,10148607,8973816,8650717,12122296,16119980,16777136,16308472,0,0],_n=[P(0,0,0),P(255,68,253),P(20,245,60),P(20,207,253),P(255,106,60),P(255,255,255)],Ta=[P(0,0,0),P(227,30,96),P(96,78,189),P(255,68,253),P(0,163,96),P(156,156,156),P(20,207,253),P(208,195,255),P(96,114,3),P(255,106,60),P(156,156,156),P(255,160,208),P(20,245,60),P(208,221,141),P(114,255,208),P(255,255,255)],Mn=[0,2368548,4737096,7171437,9539985,11974326,14342874,16777215,12255269,14680137,16716142,16725394,16734903,16744155,16753663,16762879,11534409,13959277,16318866,16721334,16730842,16740095,16749311,16758783,10420330,12779662,15138995,16718039,16727291,16736767,16745983,16755199,8847495,11206827,13631696,15994612,16724735,16733951,16743423,16752639,6946975,9306307,11731175,14092287,16461055,16732415,16741631,16751103,4784304,7143637,9568505,11929087,14297599,16731647,16741119,16750335,2425019,4784352,7209215,9570047,12004095,14372863,16741375,16750847,191,2359523,4718847,7146495,9515263,11949311,14318079,16752127,187,224,2294015,4658431,7092735,9461247,11895551,14264063,176,213,249,2367999,4736511,7105279,9539327,11908095,159,195,3303,209151,2577919,4946431,7380735,9749247,135,171,7888,17140,681983,3050495,5484543,7853311,106,3470,12723,22231,31483,1548031,3916799,6285311,73,8557,17810,27318,36570,373759,2742271,5176575,4389,13641,23150,32402,41911,51163,2026495,4456447,9472,18724,27976,37485,46737,56246,1834970,4194303,14080,23296,32803,42055,51564,60816,2031541,4456409,18176,27648,36864,46116,55624,392556,2752401,5177269,21760,30976,40192,49667,58919,1572683,3932016,6291348,24320,33536,43008,52224,716810,3079982,5504851,7864183,25856,35328,44544,250368,2619136,4980503,7405371,9764703,26624,35840,45312,2413824,4782336,7143173,9568041,11927374,26112,35584,2338560,4707328,7141376,9502464,11927326,14286659,24832,2393344,4762112,7196160,9564928,11992832,14352155,16711487,2447360,4815872,7250176,9618688,12052992,14417664,16776990,16777027,4803328,7172096,9606144,11974912,14343424,16776965,16777001,16777038,6962176,9330688,11764992,14133504,16502272,16773655,16777019,16777055,8858112,11226880,13660928,16029440,16759818,16769070,16777043,16777079,10426112,12794624,15163392,16745475,16754727,16764235,16773488,16777108,11534848,13969152,16337664,16740388,16749640,16759148,16768401,16777141,12255232,14684928,16725795,16735047,16744556,16753808,16763317,16772569],Ze=[0,0,4210752,4210752,7105644,7105644,9474192,9474192,11579568,11579568,13158600,13158600,14474460,14474460,16053492,16053492,17476,17476,1074276,1074276,2393220,2393220,3448992,3448992,4241592,4241592,5296336,5296336,6088936,6088936,6880508,6880508,10352,10352,1328260,1328260,2645144,2645144,3963052,3963052,5016764,5016764,6070476,6070476,6862044,6862044,7915756,7915756,6276,6276,1586328,1586328,3166380,3166380,4745408,4745408,6062288,6062288,7378144,7378144,8431852,8431852,9747708,9747708,136,136,2105500,2105500,3947696,3947696,5789888,5789888,7368912,7368912,8947936,8947936,10526956,10526956,11842812,11842812,6029432,6029432,7610508,7610508,8928416,8928416,10246320,10246320,11563200,11563200,12616912,12616912,13671644,13671644,14725356,14725356,7864392,7864392,9445472,9445472,10763384,10763384,12081292,12081292,13398176,13398176,14451892,14451892,15506628,15506628,16560340,16560340,8650772,8650772,9969712,9969712,11287628,11287628,12605544,12605544,13660284,13660284,14715028,14715028,15507624,15507624,16561340,16561340,8912896,8912896,10231836,10231836,11550776,11550776,12606544,12606544,13661288,13661288,14716028,14716028,15508624,15508624,16562340,16562340,8132608,8132608,9451548,9451548,11031608,11031608,12349520,12349520,13404264,13404264,14457980,14457980,15512720,15512720,16566436,16566436,6040576,6040576,7883804,7883804,9463864,9463864,11306064,11306064,12622952,12622952,13939836,13939836,15256720,15256720,16572580,16572580,2898944,2898944,4742172,4742172,6585400,6585400,8428624,8428624,9745512,9745512,11325564,11325564,12641424,12641424,13958308,13958308,15360,15360,2120736,2120736,4226112,4226112,6069340,6069340,7648372,7648372,9228428,9228428,10806436,10806436,12123320,12123320,14356,14356,1858612,1858612,3701840,3701840,5281900,5281900,6861956,6861956,8178844,8178844,9495732,9495732,10812616,10812616,12332,12332,1855564,1855564,3436648,3436648,5016708,5016708,6596764,6596764,7913652,7913652,8967372,8967372,10284256,10284256,10308,10308,1591396,1591396,3172484,3172484,4490400,4490400,5807288,5807288,7124176,7124176,8178920,8178920,9232636,9232636],Pn=[0,11141120,43520,11184640,170,11141290,21930,11184810,5592405,16733525,5635925,16777045,5592575,16733695,5636095,16777215],Sn=[0,43520,170,21930],Dn=[0,11184640,11141290,11184810],Rn=[0,11184640,170,11184810],Tn=[0,5635925,5592575,5636095],kn=[0,16777045,16733695,16777215],Fn=[0,16776960,5592575,16777215],Ln=We(2,2,2),Hr=We(2,2,2),Qn=We(3,3,2),On=We(4,4,4),ka=We(3,3,3),Fa=We(1,1,1),Et=[P(0,0,0),P(1,0,206),P(207,1,0),P(207,1,206),P(0,207,21),P(1,207,207),P(207,207,21),P(207,207,207),P(0,0,0),P(2,0,253),P(255,2,1),P(255,2,253),P(0,255,28),P(2,255,255),P(255,255,29),P(255,255,255)],ht=[P(0,0,0),P(0,117,255),P(255,76,57),P(209,185,81),P(9,185,0),P(48,223,16),P(255,229,1),P(255,255,255),P(140,140,140),P(40,229,192),P(255,160,46),P(100,103,0),P(255,41,255),P(140,143,255),P(124,237,0),P(196,43,252)],La=[0,8388752,16711680,128,8388736,16711808,255,8388863,16711935,32768,8421376,16744448,32896,8421504,16744576,33023,8421631,16744703,65280,8453888,16776960,65408,8454016,16777088,65535,8454143,16777215],Un=[0,1911635,8267091,34641,11227702,6248271,12764103,16773608,16711757,16753408,16772135,58422,2731519,8615580,16742312,16764074],Gn=[1313820,4465716,3159149,5130831,8735792,3433764,13649480,7696737,5864910,13794604,8754593,7186988,13806233,7193290,14341214,14610134],Nn=[16579836,16724307,183389,4931571],$r=[997391,3170864,1027212,1035436];var Do=We(3,3,3),Xr=We(4,4,4),Ro=We(5,5,5),Yr=Ro,ir=Xr,Hn=[P(0,85,170),P(0,0,34),P(255,255,255),P(255,136,0)],$n=[P(170,170,170),P(0,0,0),P(255,255,255),P(102,136,187)],Xn=Xr,Qa=Xr,Yn=Xr,Wr=Do,Bt=To(),Wn=ko(),Vn=We(3,3,3),Vr=[P(48,210,0),P(245,245,128),P(76,58,180),P(154,50,54)],zr=[P(216,216,216),P(65,175,113),P(216,110,240),P(212,127,0)];function We(e,t,r){for(var a=1<<e+t+r,o=255/((1<<e)-1),l=255/((1<<t)-1),c=255/((1<<r)-1),u=new Uint32Array(a),d=0;d<a;d++){var p=d&(1<<e)-1,g=d>>e&(1<<t)-1,B=d>>e+t&(1<<r)-1;u[d]=P(p*o,g*l,B*c)}return u}function To(){let e=new Uint32Array(32768),t=0;for(let r=0;r<32;++r)for(let a=0;a<32;++a)for(let o=0;o<32;++o,++t){let l=r<<3|a<<11|o<<19;l|=(r&28)>>2|(a&28)>>2<<8|(o&28)>>2<<16,e[t]=l}return e}function ko(){let e=new Uint32Array(2048),t=0;for(let r=0;r<16;++r)for(let a=0;a<16;++a)for(let o=0;o<8;++o,++t){let l=r<<4|a<<12|o<<21;e[t]=l}return e}var Lt=[{id:"c64.multi",name:"C-64 Multi",width:160,height:200,scaleX:.936*2,conv:"VICII_Canvas",pal:Ye,block:{w:4,h:8,colors:4,xb:1,yb:2},cell:{w:4,h:8,msbToLsb:!0},paletteChoices:{background:!0},cb:{w:4,h:8,xb:1,yb:2},param:{extra:1},toNative:"exportC64Multi"},{id:"c64.multi.fli",name:"C-64 Multi FLI (w/o bug)",width:160,height:200,scaleX:.936*2,conv:"VICII_Canvas",pal:Ye,block:{w:4,h:1,colors:4,xb:1},paletteChoices:{background:!0},cell:{w:4,h:8,msbToLsb:!0},cb:{w:4,h:8,xb:1,yb:2},param:{extra:1},fli:{bug:!1,blankLeft:!1,blankRight:!1,blankColumns:3},toNative:"exportC64Multi"},{id:"c64.multi.fli.bug",name:"C-64 Multi FLI (with bug)",width:160,height:200,scaleX:.936*2,conv:"VICII_Canvas",pal:Ye,block:{w:4,h:1,colors:4,xb:1},cell:{w:4,h:8,msbToLsb:!0},paletteChoices:{background:!0},cb:{w:4,h:8,xb:1,yb:2},param:{extra:1},fli:{bug:!0,blankLeft:!1,blankRight:!1,blankColumns:3},toNative:"exportC64Multi"},{id:"c64.multi.fli.blank.left",name:"C-64 Multi FLI (Left blank)",width:160,height:200,scaleX:.936*2,conv:"VICII_Canvas",pal:Ye,block:{w:4,h:1,colors:4,xb:1},cell:{w:4,h:8,msbToLsb:!0},paletteChoices:{background:!0},cb:{w:4,h:8,xb:1,yb:2},param:{extra:1},fli:{bug:!1,blankLeft:!0,blankRight:!1,blankColumns:3},toNative:"exportC64Multi"},{id:"c64.multi.fli.blank",name:"C-64 Multi FLI (L/R blank)",width:160,height:200,scaleX:.936*2,conv:"VICII_Canvas",pal:Ye,block:{w:4,h:1,colors:4,xb:1},cell:{w:4,h:8,msbToLsb:!0},paletteChoices:{background:!0},cb:{w:4,h:8,xb:1,yb:2},param:{extra:1},fli:{bug:!1,blankLeft:!0,blankRight:!0,blankColumns:3},toNative:"exportC64Multi"},{id:"c64.hires",name:"C-64 Hires",width:320,height:200,scaleX:.936,conv:"VICII_Canvas",pal:Ye,block:{w:8,h:8,colors:2},cell:{w:8,h:8,msbToLsb:!0},param:{extra:1},toNative:"exportC64Hires"},{id:"c64.hires.fli",name:"C-64 Hires FLI (w/o bug)",width:320,height:200,scaleX:.936,conv:"VICII_Canvas",pal:Ye,block:{w:8,h:1,colors:2},cell:{w:8,h:8,msbToLsb:!0},param:{extra:1},fli:{bug:!1,blankLeft:!1,blankRight:!1,blankColumns:3},toNative:"exportC64Hires"},{id:"c64.hires.fli.bug",name:"C-64 Hires FLI (with bug)",width:320,height:200,scaleX:.936,conv:"VICII_Canvas",pal:Ye,block:{w:8,h:1,colors:2},cell:{w:8,h:8,msbToLsb:!0},param:{extra:1},fli:{bug:!0,blankLeft:!1,blankRight:!1,blankColumns:3},toNative:"exportC64Hires"},{id:"c64.hires.fli.blank",name:"C-64 Hires FLI (L/R blank)",width:320,height:200,scaleX:.936,conv:"VICII_Canvas",pal:Ye,block:{w:8,h:1,colors:2},cell:{w:8,h:8,msbToLsb:!0},param:{extra:1},fli:{bug:!1,blankLeft:!0,blankRight:!0,blankColumns:3},toNative:"exportC64Hires"},{id:"nes",name:"NES (4 color, 240 tiles)",width:160,height:96,scaleX:8/7,conv:"DitheringCanvas",pal:Nr,reduce:4,toNative:"exportNES"},{id:"msx",name:"MSX/Coleco (TMS9918A)",width:256,height:192,conv:"Msx_Canvas",pal:Bn,block:{w:8,h:1,colors:2},cell:{w:8,h:8,msbToLsb:!0},toNative:"exportTMS9918"},{id:"msx2",name:"MSX2 (Screen 2)",width:256,height:192,conv:"Msx_Canvas",pal:Vn,reduce:16,block:{w:8,h:1,colors:2},cell:{w:8,h:8,msbToLsb:!0},toNative:"exportMSX2"},{id:"apple2.hires",name:"Apple ][ (Hires)",width:140,height:192,scaleX:2,conv:"Apple2_Canvas",pal:_n,block:{w:7,h:1,colors:4},toNative:"exportApple2HiresToHGR"},{id:"atari8.d",name:"Atari ANTIC (Mode D)",width:160,height:96,scaleX:.8571,conv:"DitheringCanvas",pal:Ze,reduce:4,toNative:"exportFrameBuffer",exportFormat:{bpp:2,brev:!0}},{id:"atari8.e",name:"Atari ANTIC (Mode E)",width:160,height:192,scaleX:.8571*2,conv:"DitheringCanvas",pal:Ze,reduce:4,toNative:"exportFrameBuffer",exportFormat:{bpp:2,brev:!0}},{id:"atari8.f.10",name:"Atari ANTIC (Mode F/10)",width:80,height:192,scaleX:.8571*4,conv:"DitheringCanvas",pal:Ze,reduce:9,toNative:"exportFrameBuffer",exportFormat:{bpp:4,brev:!0}},{id:"vcs",name:"Atari VCS",width:40,height:192,scaleX:6,conv:"DitheringCanvas",pal:Ze,reduce:2,toNative:"exportVCSPlayfield"},{id:"vcs.color",name:"Atari VCS (Color)",width:40,height:192,scaleX:6,conv:"VCSColorPlayfield_Canvas",pal:Ze,toNative:"exportVCSColorPlayfield"},{id:"astrocade",name:"Bally Astrocade",width:160,height:98,scaleX:1,conv:"DitheringCanvas",pal:Mn,reduce:4,toNative:"exportFrameBuffer",exportFormat:{bpp:2,brev:!0}},{id:"zx",name:"ZX Spectrum",width:256,height:192,conv:"ZXSpectrum_Canvas",pal:Et,block:{w:8,h:8,colors:2},cell:{w:8,h:8,msbToLsb:!0},toNative:"exportZXSpectrum"},{id:"zx.dark",name:"ZX Spectrum (dark only)",width:256,height:192,conv:"ZXSpectrum_Canvas",pal:Et,block:{w:8,h:8,colors:2},cell:{w:8,h:8,msbToLsb:!0},paletteChoices:{colorsRange:{min:0,max:7}},toNative:"exportZXSpectrum"},{id:"zx.bright",name:"ZX Spectrum (bright only)",width:256,height:192,conv:"ZXSpectrum_Canvas",pal:Et,block:{w:8,h:8,colors:2},cell:{w:8,h:8,msbToLsb:!0},paletteChoices:{colorsRange:{min:8,max:15}},toNative:"exportZXSpectrum"},{id:"zx.dark.bright",name:"ZX Spectrum (dark made bright only)",width:256,height:192,conv:"ZXSpectrum_Canvas",pal:Et,block:{w:8,h:8,colors:2},cell:{w:8,h:8,msbToLsb:!0},paletteChoices:{colorsRange:{min:0,max:7}},customize:{flipPalette:!0},toNative:"exportZXSpectrum"},{id:"zx.bright.dark",name:"ZX Spectrum (bright made dark only)",width:256,height:192,conv:"ZXSpectrum_Canvas",pal:Et,block:{w:8,h:8,colors:2},cell:{w:8,h:8,msbToLsb:!0},paletteChoices:{colorsRange:{min:8,max:15}},customize:{flipPalette:!0},toNative:"exportZXSpectrum"},{id:"cpc.mode0",name:"Amstrad CPC (mode 0)",width:160,height:200,scaleX:2,conv:"DitheringCanvas",pal:La,reduce:16,toNative:"exportFrameBuffer",exportFormat:{bpp:4,yremap:[3,80,2048],bitremap:[7,3,5,1,6,2,4,0]}},{id:"cpc.mode1",name:"Amstrad CPC (mode 1)",width:320,height:200,scaleX:1,conv:"DitheringCanvas",pal:La,reduce:4,toNative:"exportFrameBuffer",exportFormat:{bpp:2,yremap:[3,80,2048],bitremap:[7,3,6,2,5,1,4,0]}},{id:"vic20.hires",name:"VIC-20 Hires",width:160,height:160,scaleX:1.5,conv:"VICII_Canvas",pal:Ra,block:{w:8,h:8,colors:2},cell:{w:8,h:8,msbToLsb:!0},paletteChoices:{background:!0,backgroundRange:{min:0,max:7},colorsRange:{min:0,max:7}},toNative:"exportVicHires"},{id:"vic20.multi",name:"VIC-20 Multi",width:80,height:160,scaleX:3,conv:"VICII_Canvas",pal:Ra,block:{w:4,h:8,colors:4},cell:{w:4,h:8,msbToLsb:!0},paletteChoices:{background:!0,backgroundRange:{min:0,max:15},aux:!0,auxRange:{min:0,max:15},border:!0,borderRange:{min:0,max:7},colorsRange:{min:0,max:7}},toNative:"exportVicMulti"},{id:"nes.tiles",name:"NES (full screen, 4 colors, shared tiles)",width:256,height:240,scaleX:8/7,conv:"SNES_Canvas",pal:Nr,block:{w:8,h:8,colors:4},cell:{w:8,h:8,msbToLsb:!0},paletteChoices:{backgroundRange:{min:0,max:3},auxRange:{min:0,max:3},borderRange:{min:0,max:3},colorsRange:{min:0,max:3}},reduce:4,tiles:{max:240},toNative:"exportNESTiles"},{id:"nes.tiles.attr",name:"NES (full screen, 13 colors, shared tiles)",width:256,height:240,scaleX:8/7,conv:"SubPalette_Canvas",pal:Nr,block:{w:8,h:8,colors:4,msbToLsb:!1},cell:{w:8,h:8,msbToLsb:!0},subPalettes:{count:4,colors:4,sharedFirstColor:!0,area:{w:16,h:16},reuseWeight:.8},paletteChoices:{colorsRange:{min:0,max:63}},reduce:64,tiles:{max:240},toNative:"exportNESTiles"},{id:"snes.2bpp",name:"SNES (2bpp)",width:256,height:256,scaleX:8/7,conv:"SNES_Canvas",pal:Bt,block:{w:8,h:8,colors:4,msbToLsb:!1},cell:{w:8,h:8,msbToLsb:!0},paletteChoices:{backgroundRange:{min:0,max:3},auxRange:{min:0,max:3},borderRange:{min:0,max:3},colorsRange:{min:0,max:3}},customize:{outputTileset:!1,outputPalette:!1,planeToMemory:"interleaved"},reduce:4,toNative:"exportSNES"},{id:"snes.3bpp",name:"SNES (3bpp)",width:256,height:256,scaleX:8/7,conv:"SNES_Canvas",pal:Bt,block:{w:8,h:8,colors:8,msbToLsb:!1},cell:{w:8,h:8,msbToLsb:!0},paletteChoices:{backgroundRange:{min:0,max:7},auxRange:{min:0,max:7},borderRange:{min:0,max:7},colorsRange:{min:0,max:7}},reduce:8,customize:{planeToMemory:"interleaved"},toNative:"exportSNES"},{id:"snes.4bpp",name:"SNES (4bpp)",width:256,height:256,scaleX:8/7,conv:"SNES_Canvas",pal:Bt,block:{w:8,h:8,colors:16,msbToLsb:!1},cell:{w:8,h:8,msbToLsb:!0},paletteChoices:{backgroundRange:{min:0,max:15},auxRange:{min:0,max:15},borderRange:{min:0,max:15},colorsRange:{min:0,max:15}},customize:{planeToMemory:"interleaved"},reduce:16,toNative:"exportSNES"},{id:"snes.8bpp",name:"SNES (8bpp)",width:256,height:256,scaleX:8/7,conv:"SNES_Canvas",pal:Bt,block:{w:8,h:8,colors:256,msbToLsb:!1},cell:{w:8,h:8,msbToLsb:!0},paletteChoices:{backgroundRange:{min:0,max:255},auxRange:{min:0,max:255},borderRange:{min:0,max:255},colorsRange:{min:0,max:255}},customize:{planeToMemory:"interleaved"},reduce:256,toNative:"exportSNES"},{id:"snes.mode7",name:"SNES (Mode 7)",width:256,height:256,scaleX:8/7,conv:"SNES_Canvas",pal:Bt,block:{w:8,h:8,colors:256,msbToLsb:!1},cell:{w:8,h:8,msbToLsb:!0},paletteChoices:{backgroundRange:{min:0,max:255},auxRange:{min:0,max:255},borderRange:{min:0,max:255},colorsRange:{min:0,max:255}},customize:{bitsInPlane:8,planes:1},reduce:256,toNative:"exportSNES"},{id:"neo.geopocket",name:"Neo Geo Pocket Color",width:160,height:152,scaleX:1,conv:"SubPalette_Canvas",pal:Yn,block:{w:8,h:8,colors:4,msbToLsb:!1},cell:{w:8,h:8,msbToLsb:!0},subPalettes:{count:16,colors:4},paletteChoices:{colorsRange:{min:0,max:63}},reduce:64,customize:{subPalettePaletteFormat:"rgb444"},toNative:"exportNeoGeoPocketTiles"},{id:"virtualboy",name:"Virtual Boy",width:256,height:256,scaleX:1,conv:"SNES_Canvas",pal:Bt,block:{w:8,h:8,colors:4,msbToLsb:!1},cell:{w:8,h:8,msbToLsb:!0},paletteChoices:{backgroundRange:{min:0,max:3},auxRange:{min:0,max:3},borderRange:{min:0,max:3},colorsRange:{min:0,max:3}},customize:{outputTileset:!1,outputPalette:!1,bitsInPlane:2,planes:1,planeLittleEndian:!0},reduce:4,toNative:"exportSNES"},{id:"genesis",name:"Genesis (4bpp)",width:256,height:256,scaleX:1,conv:"SNES_Canvas",pal:Wr,block:{w:8,h:8,colors:16,msbToLsb:!1},cell:{w:8,h:8,msbToLsb:!0},paletteChoices:{backgroundRange:{min:0,max:15},auxRange:{min:0,max:15},borderRange:{min:0,max:15},colorsRange:{min:0,max:15}},customize:{outputTileset:!1,outputPalette:!1,bitsInPlane:4,planes:1,planeLittleEndian:!0},reduce:16,toNative:"exportSNES"},{id:"genesis.tiles",name:"Genesis (Tile Palettes)",width:320,height:224,scaleX:1,conv:"SubPalette_Canvas",pal:Wr,block:{w:8,h:8,colors:16,msbToLsb:!1},cell:{w:8,h:8,msbToLsb:!0},subPalettes:{count:4,colors:16,sharedFirstColor:!0},paletteChoices:{colorsRange:{min:0,max:63}},reduce:64,customize:{subPalettePaletteFormat:"genesis"},toNative:"exportGenesisTiles"},{id:"genesis.tiles.1pal",name:"Genesis (1 palette)",width:320,height:224,scaleX:1,conv:"SubPalette_Canvas",pal:Wr,block:{w:8,h:8,colors:16,msbToLsb:!1},cell:{w:8,h:8,msbToLsb:!0},subPalettes:{count:1,colors:16},paletteChoices:{colorsRange:{min:0,max:15}},reduce:16,customize:{subPalettePaletteFormat:"genesis"},toNative:"exportGenesisTiles"},{id:"snes.8bpp.direct",name:"SNES (Direct Color)",width:256,height:256,scaleX:8/7,conv:"SNES_Canvas_Direct",pal:Wn,block:{w:8,h:8,colors:2048,msbToLsb:!1},cell:{w:8,h:8,msbToLsb:!0},paletteChoices:{backgroundRange:{min:0,max:2047},auxRange:{min:0,max:2047},borderRange:{min:0,max:2047},colorsRange:{min:0,max:2047}},customize:{outputTileset:!0,outputPalette:!1,transformColor:"bbgggrrr",planes:8},toNative:"exportSNES"},{id:"stic",name:"Intellivision (FGBG)",width:64,height:64,conv:"Stic_Fgbg_Canvas",pal:ht,block:{w:8,h:8,colors:2},cell:{w:8,h:8,msbToLsb:!0},paletteChoices:{backgroundRange:{min:0,max:15},colorsRange:{min:0,max:7}},toNative:"exportSticFgbg"},{id:"stic.stack.grom",name:"Intellivision (Color Stack, GROM)",width:160,height:96,conv:"Stic_ColorStack_Canvas",pal:ht,block:{w:8,h:8,colors:2},cell:{w:8,h:8,msbToLsb:!0},cb:{w:8,h:8,xb:0,yb:0},param:{extra:4},paletteChoices:{colors:1,backgroundRange:{min:0,max:15},colorsRange:{min:0,max:7}},toNative:"exportSticColorStack"},{id:"stic.stack.gram",name:"Intellivision (Color Stack, GRAM)",width:64,height:64,conv:"Stic_ColorStack_Canvas",pal:ht,block:{w:8,h:8,colors:2},cell:{w:8,h:8,msbToLsb:!0},cb:{w:8,h:8},param:{extra:4},paletteChoices:{colors:1,backgroundRange:{min:0,max:15},colorsRange:{min:0,max:15}},toNative:"exportSticColorStack"},{id:"stic.stack.gromram",name:"Intellivision (Color Stack, GROM+GRAM)",width:160,height:96,conv:"Stic_ColorStack_Canvas",pal:ht,block:{w:8,h:8,colors:2},cell:{w:8,h:8,msbToLsb:!0,xb:0,yb:0},cb:{w:8,h:8},param:{cell:!0,extra:4},paletteChoices:{colors:1,backgroundRange:{min:0,max:15},colorsRange:{min:0,max:7}},toNative:"exportSticColorStack"},{id:"stic.stack.grom.single",name:"Intellivision (Single BG, GROM)",width:160,height:96,conv:"Stic_ColorStack_Canvas",pal:ht,block:{w:8,h:8,colors:2},cell:{w:8,h:8,msbToLsb:!0},cb:{w:8,h:8,xb:0,yb:0},param:{extra:4},paletteChoices:{colors:1,backgroundRange:{min:0,max:15},colorsRange:{min:0,max:7}},customize:{singleColor:!0},toNative:"exportSticColorStack"},{id:"stic.stack.gram.single",name:"Intellivision (Single BG, GRAM)",width:64,height:64,conv:"Stic_ColorStack_Canvas",pal:ht,block:{w:8,h:8,colors:2},cell:{w:8,h:8,msbToLsb:!0},cb:{w:8,h:8},param:{extra:4},paletteChoices:{colors:1,backgroundRange:{min:0,max:15},colorsRange:{min:0,max:15}},customize:{singleColor:!0},toNative:"exportSticColorStack"},{id:"stic.stack.gromram.single",name:"Intellivision (Single BG, GROM+GRAM)",width:160,height:96,conv:"Stic_ColorStack_Canvas",pal:ht,block:{w:8,h:8,colors:2},cell:{w:8,h:8,msbToLsb:!0,xb:0,yb:0},cb:{w:8,h:8},param:{cell:!0,extra:4},paletteChoices:{colors:1,backgroundRange:{min:0,max:15},colorsRange:{min:0,max:7}},customize:{singleColor:!0},toNative:"exportSticColorStack"},{id:"sms-gg.tiles",name:"Sega Game Gear (32 colors, shared tiles)",width:160,height:144,scaleX:1,conv:"SubPalette_Canvas",pal:Qa,block:{w:8,h:8,colors:16,msbToLsb:!1},cell:{w:8,h:8,msbToLsb:!0},subPalettes:{count:2,colors:16},paletteChoices:{colorsRange:{min:0,max:31}},reduce:32,customize:{subPalettePaletteFormat:"rgb444"},tiles:{max:448,flipX:!0,flipY:!0},toNative:"exportGameGearTiles"},{id:"sms-gg.tiles.1pal",name:"Sega Game Gear (16 colors, shared tiles)",width:160,height:144,scaleX:1,conv:"SubPalette_Canvas",pal:Qa,block:{w:8,h:8,colors:16,msbToLsb:!1},cell:{w:8,h:8,msbToLsb:!0},subPalettes:{count:1,colors:16},paletteChoices:{colorsRange:{min:0,max:15}},reduce:16,customize:{subPalettePaletteFormat:"rgb444"},tiles:{max:448,flipX:!0,flipY:!0},toNative:"exportGameGearTiles"},{id:"sms.tiles",name:"Sega Master System (32 colors, shared tiles)",width:256,height:192,scaleX:8/7,conv:"SubPalette_Canvas",pal:Hr,block:{w:8,h:8,colors:16,msbToLsb:!1},cell:{w:8,h:8,msbToLsb:!0},subPalettes:{count:2,colors:16},paletteChoices:{colorsRange:{min:0,max:31}},reduce:32,customize:{subPalettePaletteFormat:"rgb222"},tiles:{max:448,flipX:!0,flipY:!0},toNative:"exportMasterSystemTiles"},{id:"sms.tiles.unique",name:"Sega Master System (32 colors, 396 tiles)",width:176,height:144,scaleX:8/7,conv:"SubPalette_Canvas",pal:Hr,block:{w:8,h:8,colors:16,msbToLsb:!1},cell:{w:8,h:8,msbToLsb:!0},subPalettes:{count:2,colors:16},paletteChoices:{colorsRange:{min:0,max:31}},reduce:32,customize:{subPalettePaletteFormat:"rgb222"},toNative:"exportMasterSystemTiles"},{id:"sms.tiles.1pal",name:"Sega Master System (16 colors, shared tiles)",width:256,height:192,scaleX:8/7,conv:"SubPalette_Canvas",pal:Hr,block:{w:8,h:8,colors:16,msbToLsb:!1},cell:{w:8,h:8,msbToLsb:!0},subPalettes:{count:1,colors:16},paletteChoices:{colorsRange:{min:0,max:15}},reduce:16,customize:{subPalettePaletteFormat:"rgb222"},tiles:{max:448,flipX:!0,flipY:!0},toNative:"exportMasterSystemTiles"},{id:"apple2.lores",name:"Apple ][ (Lores)",width:40,height:48,scaleX:1.75,conv:"DitheringCanvas",pal:Ta,toNative:"exportFrameBuffer",exportFormat:{bpp:4}},{id:"x86.cga.04h.1",name:"PC CGA (Mode 04h, palette 1)",width:320,height:200,scaleX:200/320*1.37,conv:"DitheringCanvas",pal:Sn,toNative:"exportFrameBuffer",exportFormat:{bpp:1,np:2}},{id:"x86.cga.04h.1B",name:"PC CGA (Mode 04h, bright 1)",width:320,height:200,scaleX:200/320*1.37,conv:"DitheringCanvas",pal:Tn,toNative:"exportFrameBuffer",exportFormat:{bpp:1,np:2}},{id:"x86.cga.04h.2",name:"PC CGA (Mode 04h, palette 2)",width:320,height:200,scaleX:200/320*1.37,conv:"DitheringCanvas",pal:Dn,toNative:"exportFrameBuffer",exportFormat:{bpp:1,np:2}},{id:"x86.cga.04h.2B",name:"PC CGA (Mode 04h, bright 2)",width:320,height:200,scaleX:200/320*1.37,conv:"DitheringCanvas",pal:kn,toNative:"exportFrameBuffer",exportFormat:{bpp:1,np:2}},{id:"x86.cga.05h",name:"PC CGA (Mode 05h)",width:320,height:200,scaleX:200/320*1.37,conv:"DitheringCanvas",pal:Rn,toNative:"exportFrameBuffer",exportFormat:{bpp:1,np:2}},{id:"x86.cga.05h.B",name:"PC CGA (Mode 05h, bright)",width:320,height:200,scaleX:200/320*1.37,conv:"DitheringCanvas",pal:Fn,toNative:"exportFrameBuffer",exportFormat:{bpp:1,np:2}},{id:"x86.ega.0dh",name:"PC EGA (Mode 0Dh)",width:320,height:200,scaleX:200/320*1.37,conv:"DitheringCanvas",pal:Pn,toNative:"exportFrameBuffer",exportFormat:{bpp:1,np:4}},{id:"x86.ega.10h",name:"PC EGA (Mode 10h)",width:640,height:350,scaleX:350/640*1.37,conv:"DitheringCanvas",pal:Ln,reduce:16,toNative:"exportFrameBuffer",exportFormat:{bpp:1,np:4}},{id:"mcr2",name:"Bally MCR-II",width:256,height:240,scaleX:1,conv:"SNES_Canvas",pal:On,block:{w:16,h:16,colors:4},cell:{w:16,h:16,msbToLsb:!0},reduce:64,toNative:"exportSNES"},{id:"gb.tiles",name:"Game Boy Classic (shared tiles)",width:160,height:144,scaleX:1,conv:"SNES_Canvas",pal:$r,block:{w:8,h:8,colors:4,msbToLsb:!1},cell:{w:8,h:8,msbToLsb:!0},reduce:4,tiles:{max:256},toNative:"exportGBTiles"},{id:"gb.tiles.unique",name:"Game Boy Classic (256 unique tiles)",width:128,height:128,scaleX:1,conv:"SNES_Canvas",pal:$r,block:{w:8,h:8,colors:4,msbToLsb:!1},cell:{w:8,h:8,msbToLsb:!0},reduce:4,toNative:"exportGBTiles"},{id:"gb.color.tiles",name:"Game Boy Color (shared tiles)",width:160,height:144,scaleX:1,conv:"GBC_Canvas",pal:Yr,block:{w:8,h:8,colors:4,msbToLsb:!1},cell:{w:8,h:8,msbToLsb:!0},subPalettes:{count:8,colors:4},paletteChoices:{colorsRange:{min:0,max:31}},reduce:32,tiles:{max:256,flipX:!0,flipY:!0},toNative:"exportGBC"},{id:"gb.color.tiles.unique",name:"Game Boy Color (256 unique tiles)",width:128,height:128,scaleX:1,conv:"GBC_Canvas",pal:Yr,block:{w:8,h:8,colors:4,msbToLsb:!1},cell:{w:8,h:8,msbToLsb:!0},subPalettes:{count:8,colors:4},paletteChoices:{colorsRange:{min:0,max:31}},reduce:32,toNative:"exportGBC"},{id:"gb.color.tiles.1pal",name:"Game Boy Color (4 colors)",width:160,height:144,scaleX:1,conv:"GBC_Canvas",pal:Yr,block:{w:8,h:8,colors:4,msbToLsb:!1},cell:{w:8,h:8,msbToLsb:!0},subPalettes:{count:1,colors:4},paletteChoices:{colorsRange:{min:0,max:3}},reduce:4,tiles:{max:256,flipX:!0,flipY:!0},toNative:"exportGBC"},{id:"MC6847.CG2.palette0",name:"MC6847 (CG2, palette 0)",width:128,height:64,scaleX:2/3,conv:"DitheringCanvas",pal:Vr,reduce:4,toNative:"exportMC6847"},{id:"MC6847.CG2.palette1",name:"MC6847 (CG2, palette 1)",width:128,height:64,scaleX:2/3,conv:"DitheringCanvas",pal:zr,reduce:4,toNative:"exportMC6847"},{id:"MC6847.CG3.palette0",name:"MC6847 (CG3, palette 0)",width:128,height:96,scaleX:1,conv:"DitheringCanvas",pal:Vr,reduce:4,toNative:"exportMC6847"},{id:"MC6847.CG3.palette1",name:"MC6847 (CG3, palette 1)",width:128,height:96,scaleX:1,conv:"DitheringCanvas",pal:zr,reduce:4,toNative:"exportMC6847"},{id:"MC6847.CG6.palette0",name:"MC6847 (CG6, palette 0)",width:128,height:192,scaleX:2,conv:"DitheringCanvas",pal:Vr,reduce:4,toNative:"exportMC6847"},{id:"MC6847.CG6.palette1",name:"MC6847 (CG6, palette 1)",width:128,height:192,scaleX:2,conv:"DitheringCanvas",pal:zr,reduce:4,toNative:"exportMC6847"},{id:"amiga.lores",name:"Amiga (Lores)",width:320,height:256,conv:"DitheringCanvas",pal:ir,reduce:32,toNative:"exportAmiga"},{id:"amiga.lores.ham6",name:"Amiga (Lores, HAM6)",width:320,height:256,conv:"HAM6_Canvas",pal:ir,reduce:16,extraColors:48,toNative:"exportAmigaHAM6"},{id:"amiga.lores.workbench13",name:"Amiga (Workbench 1.3)",width:320,height:256,conv:"DitheringCanvas",pal:Hn,toNative:"exportAmiga4"},{id:"amiga.lores.workbench20",name:"Amiga (Workbench 2.0)",width:320,height:256,conv:"DitheringCanvas",pal:$n,toNative:"exportAmiga4"},null,{id:"atari7800.160a",name:"Atari 7800 (160A)",width:160,height:240,scaleX:2,conv:"DitheringCanvas",pal:Ze,reduce:4},{id:"atari7800.160b",name:"Atari 7800 (160B)",width:160,height:240,scaleX:2,conv:"DitheringCanvas",pal:Ze,reduce:12},{id:"bbcmicro.mode2",name:"BBC Micro (mode 2)",width:160,height:256,scaleX:2,conv:"DitheringCanvas",pal:Fa},{id:"apple2.dblhires",name:"Apple ][ (Double-Hires)",width:140,height:192,scaleX:2,conv:"DitheringCanvas",pal:Ta},{id:"appleiigs.320.16",name:"Apple IIGS (16 colors)",width:320,height:200,conv:"DitheringCanvas",pal:Xn,reduce:16},{id:"channelf",name:"Fairchild Channel F",width:102,height:58,conv:"DitheringCanvas",pal:Nn,reduce:4},{id:"mac",name:"Mac 128K",width:512,height:342,conv:"DitheringCanvas",pal:Gr},{id:"williams",name:"Williams Arcade",width:304,height:256,conv:"DitheringCanvas",pal:Qn,reduce:16},{id:"pico8",name:"PICO-8",width:128,height:128,conv:"DitheringCanvas",pal:Un},{id:"tic80",name:"TIC-80",width:240,height:136,conv:"DitheringCanvas",pal:Gn},{id:"gb",name:"Game Boy Classic (full screen)",width:160,height:144,scaleX:1,conv:"DitheringCanvas",pal:$r},{id:"cx16.lores",name:"Commander X16 (Lores)",width:320,height:240,scaleX:1,conv:"DitheringCanvas",pal:ir,reduce:256},{id:"cx16.hires",name:"Commander X16 (Hires)",width:640,height:480,scaleX:1,conv:"DitheringCanvas",pal:ir,reduce:16},{id:"compucolor",name:"Compucolor",width:160,height:192,scaleX:1.6,conv:"Compucolor_Canvas",pal:Et,block:{w:2,h:4,colors:2}},{id:"teletext",name:"Teletext",width:80,height:72,scaleX:4/3,conv:"Teletext_Canvas",pal:Fa,block:{w:2,h:3,colors:2}},{id:"atarist",name:"Atari ST",width:320,height:200,scaleX:5/6,conv:"DitheringCanvas",pal:ka,reduce:16},{id:"vcs.48",name:"Atari VCS (48x48 bitmap)",width:48,height:48,conv:"DitheringCanvas",pal:Ze,reduce:2},{id:"pce.256x240",name:"PC Engine (256x240)",width:256,height:240,scaleX:5/4,conv:"DitheringCanvas",pal:ka,reduce:16},{id:"phememo-d30.landscape",name:"Phomemo D30 (landscape)",width:288,height:88,conv:"DitheringCanvas",pal:Gr},{id:"phememo-d30.portrait",name:"Phomemo D30 (portrait)",width:88,height:288,conv:"DitheringCanvas",pal:Gr}],jr={};Lt.forEach(e=>{e&&(jr[e.id||e.name]=e)});function Oa(e){var o,l,c;let t=[e.width+" x "+e.height],r=e.subPalettes;if(r){let u=r.count+(r.count===1?" palette":" palettes")+" of "+((l=r.colors)!=null?l:(o=e.block)==null?void 0:o.colors)+" colors";r.area&&(u+=" per "+r.area.w+"x"+r.area.h),r.sharedFirstColor&&(u+=", shared backdrop"),t.push(u),t.push("from "+e.pal.length+" colors")}else e.reduce?t.push(e.reduce+" out of "+e.pal.length+" colors"):e.pal&&t.push(e.pal.length+" colors"),e.block&&t.push(e.block.colors+" colors per block");let a=(c=e.cell)!=null?c:e.block;if(a&&(e.tiles||r)){let u=Math.ceil(e.width/a.w)*Math.ceil(e.height/a.h);e.tiles&&e.tiles.max<u?t.push(e.tiles.max+" shared tiles for "+u+" cells"):t.push(u+" unique tiles")}return t.join(", ")}var Va={};En(Va,{bitOverlayUint8Array:()=>Ot,exportAmiga:()=>gs,exportAmiga4:()=>bs,exportAmigaHAM6:()=>xs,exportApple2HiresToHGR:()=>Ho,exportC64Hires:()=>zo,exportC64Multi:()=>Vo,exportCombinedImageAndColorCellBuffer:()=>Ge,exportFrameBuffer:()=>No,exportGBC:()=>ds,exportGBTiles:()=>us,exportGameGearTiles:()=>ai,exportGenesisTiles:()=>As,exportMC6847:()=>ws,exportMSX2:()=>as,exportMasterSystemTiles:()=>ms,exportNES:()=>Cs,exportNESTiles:()=>vs,exportNeoGeoPocketTiles:()=>ps,exportSNES:()=>cs,exportSticColorStack:()=>ts,exportSticFgbg:()=>Jo,exportTMS9918:()=>rs,exportVCSColorPlayfield:()=>Is,exportVCSPlayfield:()=>ys,exportVicHires:()=>jo,exportVicMulti:()=>qo,exportZXSpectrum:()=>Zo,getSnesBitplanCellMapper:()=>qn,getSnesTilemapMapper:()=>Kn});function ge(e,t){return t||(t=2),Lo(e,t,16)}function Lo(e,t,r){try{for(var a=e.toString(r).toUpperCase();a.length<t;)a="0"+a;return a}catch(o){return e+""}}function Pe(e,t){e||(t==null?console.assert(e):console.assert(e,t))}function Ue(e,t){return e.map(r=>t.indexOf(r&16777215))}function Qt(e,t,r,a){if(t==0)return[];let o=e,l=[];for(;t>0;)l.push(o&r),o>>=a,--t;return l}function Fe(e,t,r){return Qt(e,t,r.paletteBitFilter,r.paletteBits)}function qr(e,t,r,a,o){return r==0?[]:(Pe(e<t.length),Qt(t[e],r,a,o))}function Ua(e,t,r,a){return qr(e,t,r,a.paletteBitFilter,a.paletteBits)}function Uo(e,t){if(!t)return e;for(var r=0,a=0;a<t.length;a++){var o=t[a];o<0&&(o=-o-1,r^=1<<o),e&1<<a&&(r^=1<<o)}return r}function Go(e,t){t.destfmt&&(t=t.destfmt);var r=t.w,a=t.h,o=t.count||1,l=t.bpp||1,c=t.np||1,u=t.bpw||8,d=t.sl||Math.ceil(t.w*l/u),p=(1<<l)-1,g=t.pofs||d*a*o,B=t.skip||0,x;c>0&&t.sl?x=new Uint8Array(d*a*o):t.yremap?x=new Uint8Array(o*((a>>t.yremap[0])*t.yremap[1]+((1<<t.yremap[0])-1)*t.yremap[2])):u<=8?x=new Uint8Array(d*a*o*c):x=new Uint32Array(d*a*o*c);for(var y=0;y<o;y++)for(var S=e[y],k=0,R=0;R<a;R++){var H=t.flip?a-1-R:R,Q=y*d*a+H*d;t.yremap&&(Q=(R>>t.yremap[0])*t.yremap[1]+(R&(1<<t.yremap[0])-1)*t.yremap[2]);for(var G=0,Z=0;Z<r;Z++){var te=S[k++]&255,U=Uo(Q,t.remap);if(t.bitremap)for(var X=0;X<(t.bpp||1);X++)te&1<<X&&(x[U]|=1<<t.bitremap[G+X]);else for(var X=0;X<c;X++){var Y=te>>X*l&p;x[U+X*g+B]|=t.brev?Y<<u-G-l:Y<<G}G+=l,G>=u&&(Q+=1,G=0)}}return x}function Ve(e){var t=0;e.forEach(a=>{t+=a.length});var r=new Uint8Array(t);return t=0,e.forEach(a=>{r.set(a,t),t+=a.length}),r}function No(e,t){var r=t.exportFormat;if(!r)throw"No export format";return r.w=e.width,r.h=e.height,new Uint8Array(Go([e.indexed],r))}function Ho(e,t){for(var r=new Uint8Array(8192),a=0,o=0;o<e.height;o++)for(var l=(o&7)*1024+(o>>3&7)*128+(o>>6)*40,c=0;c<e.width;c+=7){for(var u=0,d=0,p=0;p<7;p++){var g=e.indexed[a++]&255;(g==3||g==4)&&(d|=128),g>=3&&(g-=2),u|=g<<p*2}r[l++]=u&127|d,r[l++]=u>>7&127|d}return r}function Ot(e,t,r,a,o,l){l=l===void 0?!0:l;let c=(1<<o)-1,d=(r&c)<<a;c<<=a,t+=l?0:(o+a-1)/8;let p=l?1:-1;for(let g=o+a;g>0;g-=8,t+=p){let x=(-1^c)&255,y=d&255;Pe(t<e.length),e[t]=e[t]&x|y,d>>=8,c>>=8}}function $o(e,t){if(t===void 0)return;let r=t.fullPaletteMode===void 0?e.fullPaletteMode:t.fullPaletteMode;if(t.prepare===void 0)throw'The "prepare" method is required.';let a,o=()=>(a=t.prepare(),a.littleEndian=a.littleEndian===void 0?!0:a.littleEndian,a),l=t.paramToBitPattern!==void 0?t.paramToBitPattern:(d,p,g)=>{if(r)return p;let B=Qt(d,t.colors===void 0?e.colors:t.colors,t.paletteBitFilter===void 0?e.paletteBitFilter:t.paletteBitFilter,t.paletteBits===void 0?e.paletteBits:t.paletteBits);if(t.globalColorsBitPattern!==void 0){for(let x=0;x<t.globalColorsBitPattern.length;++x)if(p==t.globalColorsBitPattern[x].paletteIndex)return t.globalColorsBitPattern[x].bitPattern}if(t.globalColorToBitPattern!==void 0){let x=t.globalColorToBitPattern(d,p,g);if(x!==void 0)return x}if(t.colorToBitPattern!==void 0){let x=t.colorToBitPattern(d,p,g);if(x!==void 0)return x}for(let x=0;x<B.length&&x<t.colorsBitPattern.length;++x)if(p==B[x])return t.colorsBitPattern[x];return console.log("global nor param color does not contain color from image",e,t,d,p,g),Pe(!1),0},c=t.iterate!==void 0?t.iterate:d=>{let p=t.params===void 0?e.params:t.params,g=t.indexed===void 0?e.indexed:t.indexed;if(t.xyToBitInfo!==void 0){if(g===void 0||p===void 0&&!r)throw'Both "params" and "indexed" must be defined.';for(let B=0,x=0;x<(t.height===void 0?e.height:t.height);++x)for(let y=0;y<(t.width===void 0?e.width:t.width);++y,++B){let S=t.xyToBitInfo(y,x);Pe(p===void 0||S.paramOffset<p.length);let k=l(p===void 0?0:p[S.paramOffset],g[B],S);Ot(d,S.offset,k,S.bitShift,S.bitCount,a.littleEndian)}}};return{prepare:o,prefill:t.prefill,iterate:t.iterate===void 0?c:t.iterate,commit:t.commit,finalize:t.finalize,xyToBitInfo:t.xyToBitInfo,paramToBitPattern:l,globalColorsBitPattern:t.globalColorsBitPattern===void 0?[]:t.globalColorsBitPattern,globalColorToBitPattern:t.globalColorToBitPattern,colorsBitPattern:t.colorsBitPattern,colorToBitPattern:t.colorToBitPattern}}function Xo(e,t){if(t!==void 0){if("prepare"in t)return $o(e,t);if("data"in t)return{prepare(){return{data:t.data()}}};throw'Either "prepare" or "data" on a "CellExporterMapper" or "DataMapper" must be defined.'}}function Yo(e,t,r){if(r===void 0||!e)return;let a;if(r.prepare===void 0)throw'The "prepare" method is required.';let o=()=>(a=r.prepare(),a.littleEndian=a.littleEndian===void 0?!0:a.littleEndian,a),l=()=>{let u=r.params===void 0?t.params:r.params;if(!(r.paramToBitInfo===void 0&&r.paramToBitPattern===void 0)){if(r.paramToBitInfo===void 0||r.paramToBitPattern===void 0||u===void 0)throw'All of "paramToBitInfo" and "paramToBitPattern" and "params" must be defined.';for(let d=0;d<u.length;d++){let p=u[d],g=r.paramToBitInfo(d),B=r.paramToBitPattern(p,g);Ot(a.data,g.offset,B,g.bitShift,g.bitCount,a.littleEndian)}}};return{prepare:o,prefill:r.prefill,iterate:r.iterate===void 0?l:r.iterate,commit:r.commit,finalize:r.finalize,params:r.params===void 0?t.params:r.params,paramToBitInfo:r.paramToBitInfo,paramToBitPattern:r.paramToBitPattern}}function Kr(e,t,r){if(!(!e||r===void 0)){if("prepare"in r)return Yo(e,t,r);if("data"in r)return{prepare(){return{data:r.data()}}};throw'Either "prepare" or "data" on a "ParamExporterMapper" or "DataMapper" must be defined.'}}function Ge(e){let t=Xo({width:e.content.width,height:e.content.height,params:e.content.blockParams,indexed:e.message.indexed,colors:e.content.block.colors,fullPaletteMode:e.content.fullPaletteMode,paletteBitFilter:e.content.paletteBitFilter,paletteBits:e.content.paletteBits},e.cellMapper),r=Kr(e.colorParamMapper!==void 0,{params:e.content.blockParams},e.colorParamMapper),a=Kr(e.content.paramInfo.cb,{params:e.content.cbParams},e.colorBlockParamMapper),o=Kr(e.content.paramInfo.cell,{params:e.content.cellParams},e.cellParamMapper),l=Kr(e.content.paramInfo.extra>0,{params:e.content.extraParams},e.extraParamMapper),c=[t,r,a,o,l],u=c.filter(x=>x!==void 0),d=[],p=[];for(let x=0;x<c.length;++x){let y=c[x];if(y===void 0){p.push(void 0);continue}let S=y.prepare();d.push(S),p.push(S.data)}for(let x=0;x<u.length;++x){let y=u[x];y.prefill!==void 0&&y.prefill(d[x].data)}for(let x=0;x<u.length;++x){let y=u[x];y.iterate!==void 0&&y.iterate(d[x].data)}for(let x=0;x<u.length;++x){let y=u[x];y.commit!==void 0&&y.commit(d[x].data)}let g=!0;for(let x=0;g;++x){g=!1;for(let y=0;y<u.length;++y){let S=u[y];S.finalize!==void 0&&(g=S.finalize(y,p[0],p[1],p[2],p[3],p[4])||g)}}let B=p.filter(x=>x!==void 0);return e.reorderArrays!==void 0&&(B=e.reorderArrays(B)),Ve(B)}function ut(e,t){let r=e.bitsPerColor,a=e.cell.w*r,o=e.cell.h*a,l=Math.ceil(o/8),c=0;return Ce(xe({},t),{prepare(){return c=e.block.columns*l,{data:new Uint8Array(e.width*e.height*r/8)}},xyToBitInfo(d,p){let g=Math.floor(d/e.block.w),B=Math.floor(d/e.cell.w),x=Math.floor(p/e.cell.h),y=Math.floor(p/e.block.h)*e.block.columns+g,S=l*B,k=c*x,R=Math.floor(d%e.cell.w*r/8),H=Math.floor(p%e.cell.h*a/8),Q=e.cell.msbToLsb?a-(d%e.cell.w+1)*r:d%e.cell.w*r;return{offset:k+S+H+R,bitShift:Q,bitCount:r,paramOffset:y}}})}function or(e,t){let r=e.fliMode,a=e.bitsPerColor,o=0;return Ce(xe({},t),{prepare(){let c=e.cell.columns*e.cell.rows;return o=1<<Math.ceil(Math.log2(c)),{data:new Uint8Array(r?o*e.cell.h:e.cell.columns*e.cell.rows)}},paramToBitInfo(c){let u=0;return r?u=(Math.floor(c/e.cell.columns)&e.cell.h-1)*o+Math.floor(c/(a*e.width))*e.cell.columns+c%e.cell.columns:u=c,{offset:u,bitShift:0,bitCount:8,paramOffset:c}}})}function Wo(e,t){return Ce(xe({},t),{prepare(){return{data:new Uint8Array(e.cb.columns*e.cb.rows)}},paramToBitInfo(a){return{offset:a,bitShift:0,bitCount:8,paramOffset:a}}})}function Vo(e,t){let r=e.content;return Ge({message:e,content:r,cellMapper:ut(r,{globalColorsBitPattern:[{paletteIndex:r.backgroundColor&15,bitPattern:0}],colorsBitPattern:[2,1,3]}),colorParamMapper:or(r,{paramToBitPattern(a,o){let l=Fe(a,2,r);return l[0]|l[1]<<4}}),colorBlockParamMapper:Wo(r,{paramToBitPattern(a,o){return Fe(a,1,r)[0]}}),extraParamMapper:{data(){let a=new Uint8Array(2);return a[0]=r.backgroundColor&15|(r.auxColor&15)<<4,a[1]=r.borderColor&15,a}}})}function zo(e,t){let r=e.content;return Ge({message:e,content:r,cellMapper:ut(r,{colorsBitPattern:[1,0]}),colorParamMapper:or(r,{paramToBitPattern(a,o){let l=Fe(a,2,r);return l[0]<<4|l[1]}}),extraParamMapper:{data(){let a=new Uint8Array(2);return a[0]=r.backgroundColor&15|(r.auxColor&15)<<4,a[1]=r.borderColor&15,a}}})}function jo(e,t){let r=e.content;return Ge({message:e,content:r,cellMapper:ut(r,{globalColorsBitPattern:[{paletteIndex:r.backgroundColor,bitPattern:0}],colorsBitPattern:[1]}),colorParamMapper:or(r,{paramToBitPattern(a,o){return Fe(a,1,r)[0]}}),extraParamMapper:{data(){let a=new Uint8Array(3);return a[0]=r.backgroundColor,a[1]=r.borderColor,a[2]=r.auxColor,a}}})}function qo(e,t){let r=e.content;return Ge({message:e,content:r,cellMapper:ut(r,{globalColorsBitPattern:[{paletteIndex:r.backgroundColor,bitPattern:0},{paletteIndex:r.borderColor,bitPattern:1},{paletteIndex:r.auxColor,bitPattern:3}],colorsBitPattern:[2]}),colorParamMapper:or(r,{paramToBitPattern(a,o){return Fe(a,1,r)[0]}}),extraParamMapper:{data(){let a=new Uint8Array(3);return a[0]=r.backgroundColor,a[1]=r.borderColor,a[2]=r.auxColor,a}}})}function Ko(e,t){let r=e.bitsPerColor,a=e.cell.w*r;return Ce(xe({},t),{prepare(){return{data:new Uint8Array(e.width*e.height*e.bitsPerColor/8)}},xyToBitInfo(l,c){let u=Math.floor(l/e.block.w),d=Math.floor(c/e.block.h)*e.block.columns+u,p=Math.floor(l/e.block.w),g=(c&192)>>6<<11|(c&7)>>0<<8|(c&56)>>3<<5|(p&31)>>0<<0,B=e.cell.msbToLsb?a-(l%e.cell.w+1)*r:l%e.cell.w*r;return{offset:g,bitShift:B,bitCount:r,paramOffset:d}}})}function Zo(e,t){let r=e.content;return Ge({message:e,content:r,cellMapper:Ko(r,{colorsBitPattern:[0,1]}),colorParamMapper:or(r,{paramToBitPattern(a,o){let l=Fe(a,2,r);return(l[0]&7)<<3|l[1]&7|(l[0]&8)>>3<<6}})})}function zn(e,t){return Ce(xe({},t),{prepare(){let a=20,o=12;return{data:new Uint8Array(a*o*2),littleEndian:!0}},prefill(a){let o=7,l=0,c=0,u=0,d=o|(l&3)<<9|(l&4)>>2<<13|(l&8)>>3<<12|c<<3<<(u<<11),p=d&255,g=(d&65280)>>8;for(let y=0;y<a.length;++y)y%2==0?a[y]=p:a[y]=g;let B=360,x=[45,65,68,69,0,66,89,0,36,73,84,72,69,82,84,83,79,78];for(let y=0;y<x.length;++y){let S=o|(l&3)<<9|(l&4)>>2<<13|(l&8)>>3<<12|x[y]<<3<<(u<<11),k=S&255,R=(S&65280)>>8;a[B+y*2]=k,a[B+y*2+1]=R}},paramToBitInfo(a){let o=Math.floor(a/Math.floor(e.width/e.block.w)),l=a%Math.floor(e.width/e.block.w);return{offset:(o*20+l)*2,bitShift:0,bitCount:16,paramOffset:a}}})}function Jo(e,t){let r=e.content;return Ge({message:e,content:r,cellMapper:ut(r,{colorsBitPattern:[0,1]}),colorParamMapper:zn(r,{paramToBitPattern(a,o){let l=Fe(a,2,r),c=l[0],u=l[1],d=1,p=o.paramOffset&63;return c|(u&3)<<9|(u&4)>>2<<13|(u&8)>>3<<12|p<<3<<(d<<11)}})})}function es(e,t){return Ce(xe({},t),{prepare(){let o=8,l=8;return{data:new Uint8Array(o*l*8),littleEndian:!0}},finalize(o,l,c,u,d,p){for(let g=0;g<e.cellParams.length;++g){let B=qr(g,e.cellParams,2,255,8);if(B[0]==0)continue;let x=B[1]*8,y=g%e.cell.columns,k=Math.floor(g/e.cell.columns)*e.cell.columns*8+y*8;for(let R=0;R<8;++R)d[x+R]=l[k+R]}return!1}})}function ts(e,t){let r=e.content,a=[0,1],o=ut(r,{paramToBitPattern(l,c,u){let d=Fe(l,r.paletteChoices.colors,r);for(let g=0;g<r.paletteChoices.colors;++g)if(d[g]==c)return a[1+g];let p=Ua(u.paramOffset,r.cbParams,1,r)[0];return p==c?a[0]:(console.log("cb nor param color does not contain color from image",l,c,d,u,p),Pe(!1),0)}});return Ge({message:e,content:r,cellMapper:o,colorParamMapper:zn(r,{paramToBitPattern(l,c){let u=Fe(l,2,r),d=u[0],p=u[1],g=r.block.size=512,B=(d&8)!=0,x=r.paramInfo.cell?qr(c.paramOffset,r.cellParams,2,255,8):[g?1:0,g?c.paramOffset&63:0],y=x[0]!=0;Pe(!B||B&&y);let S=y?1:0,k=y?x[1]&63:c.paramOffset&255;return d&7|(d&8)>>3<<12|(p&1)<<13|k<<3<<(S<<11)}}),cellParamMapper:r.paramInfo.cell?es(r):void 0,extraParamMapper:{data(){let l=new Uint8Array(r.paramInfo.extra);for(let c=0;c<r.paramInfo.extra;++c)l[c]=Ua(c,r.extraParams,1,r)[0];return l}}})}function jn(e,t){return Ce(xe({},t),{prepare(){return{data:new Uint8Array(e.block.size)}},paramToBitInfo(a){let o=a&31,l=a>>5;return{offset:l&7|o<<3|l>>3<<8,bitShift:0,bitCount:8,paramOffset:a}}})}function rs(e,t){let r=e.content;return Ge({message:e,content:r,cellMapper:ut(r,{colorsBitPattern:[0,1]}),colorParamMapper:jn(r,{paramToBitPattern(a,o){let l=Fe(a,2,r);return l[0]=l[0]==0?1:l[0],l[1]=l[1]==0?1:l[1],l[0]|l[1]<<4}})})}function as(e,t){var l;let r=e.content,a=Ge({message:e,content:r,cellMapper:ut(r,{colorsBitPattern:[0,1]}),colorParamMapper:jn(r,{paramToBitPattern(c,u){let d=Fe(c,2,r);return d[0]&15|(d[1]&15)<<4}})}),o=new Uint8Array(32);for(let c=0;c<16;c++){let u=(l=e.pal[c])!=null?l:0,d=Math.round((u>>0&255)*7/255),p=Math.round((u>>8&255)*7/255),g=Math.round((u>>16&255)*7/255);o[c*2+0]=d<<4|g,o[c*2+1]=p}return Ve([a,o])}function ns(e,t,r,a,o,l,c){let u=o*c.block.w,d=Math.floor(u*c.block.h*e+u*a)/8,p=c.cell.msbToLsb?(c.block.w-(r+1))*o:r*o,g=Math.floor(p/8);return g=l?g:Math.floor(u/8)-g-1,p=p%8,Pe((d+g)*8<t*u*c.block.h),{offset:d+g,bitShift:p,bitCount:o}}function is(e,t,r,a,o,l,c){let u=o*c.block.w,d=(a&1)!=0,p=Math.floor(((u*c.block.h*(e>>1)<<1)+u*a*(d?1:0))/8),g=c.cell.msbToLsb?(c.block.w-(r+1))*o:r*o,B=Math.floor(g/8);return B=l?B:Math.floor(u/8)-B-1,g=g%8,Pe((p+B)*8<t*u*c.block.h),{offset:p+B,bitShift:g,bitCount:o}}function os(e,t,r,a,o,l,c){let u=o*c.block.w,d=Math.floor(u*t*a+u*e)/8,p=c.cell.msbToLsb?(c.block.w-(r+1))*o:r*o,g=Math.floor(p/8);return g=l?g:Math.floor(u/8)-g-1,p=p%8,Pe((d+g)*8<t*u*c.block.h),{offset:d+g,bitShift:p,bitCount:o}}var Ga={Default:ns,interleaved:is,linear:os},Na={Default:ss,bbgggrrr:ls};function ss(e,t){return e}function ls(e,t){let r=t[e],a=r&255,o=r>>8&255;return(r>>16&255&192)>>6<<6|(o&224)>>5<<3|(a&224)>>5<<0}function qn(e,t,r,a){let o=e.indexed,l=0,c=0,u=0,d=0,p=32,g=32;return Ce(xe({},a),{prepare(){return l=r.customize===void 0?Math.ceil(Math.log2(t.block.colors)):"planes"in r.customize?r.customize.planes:Math.ceil(Math.log2(t.block.colors)),c=t.block.w*t.block.h,u=t.block.columns*t.block.rows,d=r.customize===void 0?1:"bitsInPlane"in r.customize?r.customize.bitsInPlane:1,{data:new Uint8Array(Math.floor(l*d*c*u/8))}},iterate(x){let y=Math.floor(t.block.columns/p),S=Math.floor(t.block.rows/g),k=Math.floor(l*d*c*p*g/8),R=Math.floor(l*d*c/8),H=R*p,Q=r.customize===void 0?Ga.Default:"planeToMemory"in r.customize?Ga[r.customize.planeToMemory]:Ga.Default,G=r.customize===void 0?Na.Default:"transformColor"in r.customize?Na[r.customize.transformColor]:Na.Default,Z=(1<<d)-1,te=r.customize===void 0?!0:"planeLittleEndian"in r.customize?r.customize.littleEndian:!0,U=t.block.msbToLsb?(X,Y)=>{let W=(l-(X+1))*d,q=Y&Z<<W;return{extractedBits:q>>W,filteredColor:Y^q}}:(X,Y)=>{let W=X*d,q=Y&Z<<W;return{extractedBits:q,filteredColor:Y^q}};for(let X=0;X<o.length;++X){let Y=Math.floor(X/t.block.w)%t.block.columns,W=Math.floor(X/(t.width*t.block.h)),q=Math.floor(Y/p),se=(Math.floor(W/g)*y+q)*k,me=Y%p,Be=W%g,Qe=G(o[X],r.pal),et=X%t.block.w,le=Math.floor(X/t.width)%t.block.h,At=H*Be+R*me;for(let tt=0;tt<l;++tt){let{extractedBits:rt,filteredColor:be}=U(tt,Qe),De=Q(tt,l,et,le,d,te,t);Qe=be;let at=se+At+De.offset;Ot(x,at,rt,De.bitShift,De.bitCount,te)}}}})}function Kn(e,t,r,a){let o=0,l=32,c=32,u=r.customize===void 0?!0:"outputTileset"in r.customize?r.customize.littleEndian:!0,d=r.customize===void 0?!0:"outputPalette"in r.customize?r.customize.littleEndian:!0;return!u&&!d?void 0:Ce(xe({},a),{prepare(){return o=t.block.columns*t.block.rows,{data:new Uint8Array(2*o*(u?1:0)+(d?t.block.colors:0))}},iterate(g){let B=r.customize===void 0?!1:"tilesetLittleEndian"in r.customize?r.customize.littleEndian:!1;if(u){let x=Math.floor(t.block.columns/l),y=Math.floor(t.block.rows/c),S=Math.floor(l*c*2);for(let k=0;k<t.block.rows;++k)for(let R=0;R<t.block.columns;++R){let H=Math.floor(R/l),Z=(Math.floor(k/c)*x+H)*S,te=R%l,U=k%c,X=(U*t.block.columns+te)*2,Y=Z+X,W=Qt(t.blockParams[k*R+R],1,3,2),q=0,J=0,ae=W[0]&7,se=U*l+te&1023,me=q<<15|J<<14|ae<<10|se;Ot(g,Y,me,0,16,B)}}if(d){let x=u?0:Math.floor(2*o/8);for(let y=0;y<t.block.colors;++y){let S=e.pal[y],k=S&255,R=S>>8&255,H=S>>16&255,Q=k>>3&31|(R>>3&31)<<5|(H>>3&31)<<10;Ot(g,x+y*2,Q,0,16,B)}}}})}function cs(e,t){let r=e.content;return Ge({message:e,content:r,cellMapper:qn(e,r,t,{}),colorParamMapper:Kn(e,r,t,{})})}function Zn(e,t,r,a=!1){let o=new Uint8Array(t.block.h*r);for(let l=0;l<t.block.h;++l)for(let c=0;c<t.block.w;++c){let u=t.cell.msbToLsb?t.block.w-c-1:c,d=e(c,l);for(let p=0;p<r;++p)o[a?p*t.block.h+l:l*r+p]|=(d>>p&1)<<u}return o}function hs(e,t,r){let a=t.block.columns,o=a*t.block.rows;return Ve(Array.from({length:o},(l,c)=>{let u=c%a*t.block.w,d=Math.floor(c/a)*t.block.h;return Zn((p,g)=>e.indexed[(d+g)*t.width+u+p],t,r)}))}function Jn(e,t,r,a=!1){let o=t.tileset;if(!o)throw new Error("image was not fitted to a tile set");let l=t.block.columns,{w:c,h:u}=t.block,d=new Map;return o.assign.forEach((p,g)=>{d.has(p)||d.set(p,g)}),Ve(o.tiles.map((p,g)=>{let B=d.get(g),x=o.orient[B],y=B%l*c,S=Math.floor(B/l)*u;return Zn((k,R)=>{let H=x&1?c-1-k:k,Q=x&2?u-1-R:R;return e.indexed[(S+Q)*t.width+y+H]},t,r,a)}))}function Ha(e,t){let r=e.tileset;return r?{tile:r.assign[t],orient:r.orient[t]}:{tile:t,orient:0}}function $a(e,t){if(!t){if(e!==0)throw new Error("this system cannot flip tiles");return 0}return(e&1?1<<t.x:0)|(e&2?1<<t.y:0)}function ei(e,t,r){return t.tileset?Jn(e,t,r):hs(e,t,r)}function ti(e,t){let r=e.block.columns*e.block.rows,a=new Uint8Array(r);for(let o=0;o<r;++o){let{tile:l,orient:c}=Ha(e,o);if(l>255)throw new Error("tile number does not fit in a byte");$a(c,t),a[o]=l}return a}function ri(e,t){return ei(e,t,2)}function us(e,t){let r=e.content;return Ve([ri(e,r),ti(r)])}function Xa(e){var o,l;let t=e.block.columns*e.block.rows,r=(o=e.paletteIndexBits)!=null?o:Math.max(1,Math.ceil(Math.log2(e.palettesCount||1))),a=(l=e.paletteIndexFilter)!=null?l:(1<<r)-1;return Array.from({length:t},(c,u)=>{var d;return(d=Qt(e.blockParams[u],1,a,r)[0])!=null?d:0})}function fs(e,t){return Uint8Array.from(Xa(e),(r,a)=>(r|$a(Ha(e,a).orient,t))&255)}function Zr(e,t,r){var d,p,g,B,x;let a=(d=t.palettesCount)!=null?d:0,o=(p=t.paletteColors)!=null?p:0,l=(B=(g=r.customize)==null?void 0:g.subPalettePaletteFormat)!=null?B:"rgb555",c=l==="rgb222"?1:2,u=new Uint8Array(a*o*c);for(let y=0;y<a;++y)for(let S=0;S<o;++S){let k=(x=e.pal[y*o+S])!=null?x:0,R=k&255,H=k>>8&255,Q=k>>16&255,G;l==="rgb444"?G=R>>4&15|(H>>4&15)<<4|(Q>>4&15)<<8:l==="rgb222"?G=R>>6&3|(H>>6&3)<<2|(Q>>6&3)<<4:l==="genesis"?G=(R>>5&7)<<1|(H>>5&7)<<5|(Q>>5&7)<<9:G=R>>3&31|(H>>3&31)<<5|(Q>>3&31)<<10;let Z=(y*o+S)*c,te=l==="genesis";u[Z+(te?c-1:0)]=G&255,c>1&&(u[Z+(te?0:1)]=G>>8&255)}return u}function ds(e,t){let r=e.content;return Ve([ri(e,r),ti(r,{x:5,y:6}),fs(r,{x:5,y:6}),Zr(e,r,t)])}function Ya(e,t,r=!1,a){let o=Xa(e),l=new Uint8Array(o.length*2);return o.forEach((c,u)=>{let{tile:d,orient:p}=Ha(e,u),g=d|c<<t|$a(p,a);l[u*2+(r?1:0)]=g&255,l[u*2+(r?0:1)]=g>>8&255}),l}function ai(e,t){let r=e.content,a=r.tileset?r.tileset.tiles.length:r.block.columns*r.block.rows;if(a>448)throw new Error("the VDP can address 448 tiles, got "+a);return Ve([ei(e,r,4),Ya(r,11,!1,{x:9,y:10}),Zr(e,r,t)])}var ms=ai;function ps(e,t){let r=e.content,a=r.block.columns,o=a*r.block.rows;Pe(o<=512);let l=new Uint8Array(o*16);for(let c=0;c<r.height;++c)for(let u=0;u<r.width;++u){let d=Math.floor(c/r.block.h)*a+Math.floor(u/r.block.w),p=u%r.block.w,g=d*16+c%r.block.h*2,B=(e.indexed[c*r.width+u]&3)<<(r.block.w-1-p)*2;l[g]|=B&255,l[g+1]|=B>>8&255}return Ve([l,Ya(r,9),Zr(e,r,t)])}function As(e,t){let r=e.content,a=r.block.columns,o=a*r.block.rows;Pe(o<=2048);let l=new Uint8Array(o*32);for(let c=0;c<r.height;++c)for(let u=0;u<r.width;++u){let d=Math.floor(c/r.block.h)*a+Math.floor(u/r.block.w),p=u%r.block.w,g=d*32+c%r.block.h*4+(p>>1),B=e.indexed[c*r.width+u]&15;l[g]|=p&1?B:B<<4}return Ve([l,Ya(r,13,!0),Zr(e,r,t)])}function Wa(e,t,r,a){var c;let o=e.width/8,l=new Uint8Array(t*2+r*o*e.height);for(let u=0;u<t;++u){let d=(c=e.pal[u])!=null?c:0,p=(d&255)>>4<<8|(d>>8&255)>>4<<4|(d>>16&255)>>4;l[u*2]=p>>8,l[u*2+1]=p&255}for(let u=0;u<e.height;++u)for(let d=0;d<e.width;++d){let p=a(e.indexed[u*e.width+d]);for(let g=0;g<r;++g){let B=t*2+g*o*e.height+u*o+(d>>3);l[B]|=(p>>g&1)<<7-(d&7)}}return l}function gs(e,t){return Wa(e,32,5,r=>r)}function bs(e,t){return Wa(e,4,2,r=>r)}function xs(e,t){let r=[0,2,3,1];return Wa(e,16,6,a=>r[a>>4]<<4|a&15)}function Cs(e,t){for(var r=0,a=e.width/8,o=e.height/8,l=new Uint8Array(e.width*e.height*2/8),c=0;c<e.height;c++)for(var u=0;u<e.width;u++){var d=Math.floor(u/8)+Math.floor(c/8)*a,p=d*16+(c&7),g=7-(u&7),B=e.indexed[r]&255;l[p]|=(B&1)<<g,l[p+8]|=(B>>1&1)<<g,r++}return l}function vs(e,t){var p,g;let r=e.content,a=r.tileset;if(!a)throw new Error("image was not fitted to a tile set");if(a.tiles.length>256)throw new Error("a pattern table holds 256 tiles");if(a.orient.some(B=>B!==0))throw new Error("NES background tiles cannot be flipped");if(r.block.columns>32||r.block.rows>30)throw new Error("image is larger than a name table");let o=new Uint8Array(256*16);o.set(Jn(e,r,2,!0));let l=new Uint8Array(1024);for(let B=0;B<a.assign.length;++B){let x=B%r.block.columns,y=Math.floor(B/r.block.columns);l[y*32+x]=a.assign[B]}let c=r,u=(p=c.palettesCount)!=null?p:1;if(u>1){let B=Xa(c);for(let x=0;x<B.length;++x){let y=x%r.block.columns,S=Math.floor(x/r.block.columns),k=(S>>1&1)*4+(y>>1&1)*2,R=960+(S>>2)*8+(y>>2);l[R]=l[R]&~(3<<k)|B[x]<<k}}let d=Uint8Array.from(Ue(e.pal.slice(0,u*((g=c.paletteColors)!=null?g:4)),t.pal));return Ve([o,l,d])}var ni=[3,2,1,0,-1,-1,-1,-1,4,5,6,7,8,9,10,11,19,18,17,16,15,14,13,12,23,22,21,20,-1,-1,-1,-1,24,25,26,27,28,29,30,31,39,38,37,36,35,34,33,32];function ys(e,t){var r=new Uint8Array(6*e.height);let a=ni;for(var o=0;o<e.height;o++)for(var l=0;l<48;l++){var c=a[l];if(c>=0&&(c+=o*e.width,e.indexed[c])){var u=(l>>3)*e.height+e.height-o-1;r[u]|=128>>(l&7)}}return r}function Is(e,t){var B,x;let r=e.content;if(!r||!r.params)throw new Error("VCS color export needs per-scanline params");let a=e.height,o=new Uint8Array(8*a),l=Ue(e.pal,t.pal),c=ni;for(var u=0;u<a;u++){let y=r.params[u],S=y&255,k=y>>8&255,R=a-u-1;o[6*a+R]=(B=l[S])!=null?B:S,o[7*a+R]=(x=l[k])!=null?x:k;for(var d=0;d<48;d++){var p=c[d];if(p>=0&&(p+=u*e.width,e.indexed[p]==k)){var g=(d>>3)*a+R;o[g]|=128>>(d&7)}}}return o}function ws(e,t){var r=new Uint8Array(e.width*e.height/4);let a=0,o=0;for(var l=0;l<e.height;l++)for(var c=0;c<e.width;c+=4,o+=4)r[a++]=((e.indexed[o+0]&3)<<6)+((e.indexed[o+1]&3)<<4)+((e.indexed[o+2]&3)<<2)+((e.indexed[o+3]&3)<<0);return console.log(r),r}var Ja={};En(Ja,{getFileViewerCode_apple2_hires:()=>Ns,getFileViewerCode_astrocade:()=>Vs,getFileViewerCode_atari8_d:()=>Ai,getFileViewerCode_atari8_e:()=>zs,getFileViewerCode_atari8_f_10:()=>js,getFileViewerCode_c64_fli:()=>ft,getFileViewerCode_c64_hires:()=>Gs,getFileViewerCode_c64_hires_fli:()=>rl,getFileViewerCode_c64_hires_fli_blank:()=>nl,getFileViewerCode_c64_hires_fli_bug:()=>al,getFileViewerCode_c64_multi:()=>Us,getFileViewerCode_c64_multi_fli:()=>il,getFileViewerCode_c64_multi_fli_blank:()=>sl,getFileViewerCode_c64_multi_fli_blank_left:()=>ll,getFileViewerCode_c64_multi_fli_bug:()=>ol,getFileViewerCode_cpc:()=>Za,getFileViewerCode_cpc_mode0:()=>el,getFileViewerCode_cpc_mode1:()=>tl,getFileViewerCode_gb_color_tiles:()=>fl,getFileViewerCode_gb_tiles:()=>ul,getFileViewerCode_msx:()=>Xs,getFileViewerCode_nes:()=>Hs,getFileViewerCode_nes_tiles:()=>pi,getFileViewerCode_nes_tiles_attr:()=>$s,getFileViewerCode_sms_gg_tiles:()=>hl,getFileViewerCode_sms_tiles:()=>cl,getFileViewerCode_vcs:()=>Ys,getFileViewerCode_vcs_color:()=>Ws,getFileViewerCode_zx:()=>sr,getFileViewerCode_zx_bright:()=>Ks,getFileViewerCode_zx_bright_dark:()=>Js,getFileViewerCode_zx_dark:()=>qs,getFileViewerCode_zx_dark_bright:()=>Zs});var za=`
    processor 6502
    include "basicheader.dasm"

Src equ $02
Dest equ $04

; This code is extremely similar between multi-color
; graphics mode and hires graphics mode. Setting
; to 1 enables the multi-color graphics code, otherwise
; set to 0 for hires graphics mode.
UseMultiColorGraphics equ $USE_MULTI_MODE

Start:
    lda #$3B   ; 25 rows, on, bitmap
    sta $d011  ; VIC control #1
#if UseMultiColorGraphics
    lda #$18   ; 40 column, multicolor
#else
    lda #$08   ; 40 column, two-color hires
#endif
    sta $d016  ; VIC control #2
    lda #$02
    sta $dd00  ; set VIC bank ($4000-$7FFF)
    lda #$80
    sta $d018  ; set VIC screen to $6000
    lda XtraData+1
    sta $d020  ; border
    lda XtraData+0
    sta $d021  ; background
    lda #0
    sta Dest
; copy char memory
    lda #<CharData
    sta Src
    lda #>CharData
    sta Src+1
    lda #$40
    sta Dest+1
    ldx #$20
    jsr CopyMem
; copy screen memory
    lda #<ScreenData
    sta Src
    lda #>ScreenData
    sta Src+1
    lda #$60
    sta Dest+1
    ldx #$04
    jsr CopyMem

#if UseMultiColorGraphics
; copy color RAM
    lda #<ColorData
    sta Src
    lda #>ColorData
    sta Src+1
    lda #$d8
    sta Dest+1
    ldx #4
    jsr CopyMem
#endif

; infinite loop
    jmp .

; copy data from Src to Dest
; X = number of bytes * 256
CopyMem
    ldy #0
.Loop
    lda (Src),y
    sta (Dest),y
    iny
    bne .Loop
    inc Src+1
    inc Dest+1
    dex
    bne .Loop
    rts

; bitmap data
CharData equ .
ScreenData equ CharData+8000
#if UseMultiColorGraphics
ColorData equ ScreenData+1000
XtraData equ ColorData+1000
#else
XtraData equ ScreenData+1000
#endif

    incbin "$DATAFILE"
`;var ii=`
    processor 6502
    seg Code
    org $803	; start of program
Start:
    sta $c050	; set graphics
    sta $c052	; no mixed mode
    sta $c057	; set hires
    jmp Start	; infinite loop

    org $2000	; start of hires page 1
    incbin "$DATAFILE"
`;var oi=`
    include "nesdefs.dasm"

;;;;; VARIABLES

    seg.u ZEROPAGE
    org $0

;;;;; NES CARTRIDGE HEADER

    NES_HEADER 0,2,1,0 ; mapper 0, 2 PRGs, 1 CHR, horiz. mirror

;;;;; START OF CODE
Start:
; wait for PPU warmup; clear CPU RAM
; byte $02
    NES_INIT	; set up stack pointer, turn off PPU
    jsr WaitSync	; wait for VSYNC
    jsr ClearRAM	; clear RAM
    jsr WaitSync	; wait for VSYNC (and PPU warmup)
; set palette and nametable VRAM
    jsr SetPalette	; set palette colors
    jsr FillVRAM	; print message in name table
; reset PPU address and scroll registers
    lda #0
    sta PPU_ADDR
    sta PPU_ADDR	; PPU addr = $0000
    sta PPU_SCROLL
    sta PPU_SCROLL  ; PPU scroll = $0000
; activate PPU graphics
    lda #MASK_BG
    sta PPU_MASK 	; enable rendering
    lda #CTRL_NMI
    sta PPU_CTRL	; enable NMI
.endless
    jmp .endless	; endless loop

; set palette colors
SetPalette: subroutine
; set PPU address to palette start
    PPU_SETADDR $3f00
    ldy #0
.loop:
    lda Palette,y	; lookup byte in ROM
    sta PPU_DATA	; store byte to PPU data
    iny		; Y = Y + 1
    cpy #4		; is Y equal to max colors?
    bne .loop	; not yet, loop
    rts		; return to caller

; fill video RAM with "Hello World" msg
FillVRAM: subroutine
; set PPU address to name table A
    PPU_SETADDR $2106  ; row 8, col 6
    ldy #12		; # of rows
    lda #1		; first tile index
.nextrow
    ldx #20		; # of columns
.loop:
    sta PPU_DATA	; store+advance PPU
    clc
    adc #1
    dex
    bne .loop
    pha
    lda #$00	; blank
    REPEAT 12	; 32 - 20 = 12 cols/row
    sta PPU_DATA	; store+advance PPU
    REPEND
    pla
    dey
    bne .nextrow
.end
    rts		; return to caller

;;;;; COMMON SUBROUTINES

    include "nesppu.dasm"

;;;;; INTERRUPT HANDLERS

NMIHandler:
    rti		; return from interrupt

;;;;; CONSTANT DATA

Palette:
    hex 1f;screen color
    hex 01112100;background 0

;;;;; CPU VECTORS

    NES_VECTORS

;;;;; TILE SETS

    org $10000
    ds 16	; blanks
    incbin "$DATAFILE"
    ds $2000-.	; pad CHR ROM to 8KB so emulators see a full bank
`;var si=`
    include "nesdefs.dasm"

; NES full-screen tile viewer (nes.tiles, nes.tiles.attr).
; Data file layout: [CHR: 256 tiles x 16 bytes] [name table: 32x30]
; [attribute table: 64] [palette: PAL_BYTES]
; The file is placed in PRG ROM to copy the name/attribute tables and
; palette to the PPU, and again in CHR ROM for the tile patterns.

PAL_BYTES = $PAL_BYTES     ; 4 (one palette) or 16 (four palettes)
NAMETABLE_OFS = 256*16
PALETTE_OFS = NAMETABLE_OFS + 1024

;;;;; VARIABLES

    seg.u ZEROPAGE
    org $0

;;;;; NES CARTRIDGE HEADER

    NES_HEADER 0,2,1,0 ; mapper 0, 2 PRGs, 1 CHR, horiz. mirror

;;;;; START OF CODE
Start:
    NES_INIT	; set up stack pointer, turn off PPU
    jsr WaitSync	; wait for VSYNC
    jsr ClearRAM	; clear RAM
    jsr WaitSync	; wait for VSYNC (and PPU warmup)
    jsr SetPalette
    jsr FillVRAM
; reset PPU address and scroll registers
    lda #0
    sta PPU_ADDR
    sta PPU_ADDR	; PPU addr = $0000
    sta PPU_SCROLL
    sta PPU_SCROLL  ; PPU scroll = $0000
; activate PPU graphics
    lda #MASK_BG | %00000010 ; show BG in leftmost 8 pixels
    sta PPU_MASK 	; enable rendering
    lda #CTRL_NMI
    sta PPU_CTRL	; enable NMI
.endless
    jmp .endless	; endless loop

; copy palette to $3f00
SetPalette: subroutine
    PPU_SETADDR $3f00
    ldx #0
.loop:
    lda ImageData+PALETTE_OFS,x
    sta PPU_DATA
    inx
    cpx #PAL_BYTES
    bne .loop
    rts

; copy name table + attribute table (4 pages) to $2000
    MAC COPYPAGE
    ldx #0
.loop:
    lda ImageData+NAMETABLE_OFS+{1}*256,x
    sta PPU_DATA
    inx
    bne .loop
    ENDM

FillVRAM: subroutine
    PPU_SETADDR $2000
    COPYPAGE 0
    COPYPAGE 1
    COPYPAGE 2
    COPYPAGE 3
    rts

;;;;; COMMON SUBROUTINES

    include "nesppu.dasm"

;;;;; INTERRUPT HANDLERS

NMIHandler:
    rti		; return from interrupt

;;;;; CONSTANT DATA

ImageData:
    incbin "$DATAFILE"

;;;;; CPU VECTORS

    NES_VECTORS

;;;;; TILE SETS

    org $10000
    incbin "$DATAFILE"
    ds $12000-.	; pad CHR ROM to 8KB
`;var li=`
    ORG     04000H

; MSX cartridge header @ 0x4000 - 0x400f
    dw 0x4241
    dw Start
    dw Start
    dw 0,0,0,0,0

CHMOD   EQU   05fh
WRTVRM  EQU   04dh
LDIRVM  EQU   05ch

PATTERN equ 0h
NAME    equ 1800h
COLOR   equ 2000h

Start:
Data:
    ld a,2
    call CHMOD  ; screen mode 2
    ld bc,1800h
    ld hl,ImageData
    ld de,PATTERN
    call LDIRVM ; copy pattern table
    ld bc,1800h
    ld hl,ImageData+1800h
    ld de,COLOR
    call LDIRVM ; copy color table
Infinite:
    jmp Infinite ; loop forever

ImageData:
    incbin "$DATAFILE"
`;var ci=`
    processor 6502
    include "vcs.h"
    include "macro.h"
    include "xmacro.h"

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

    seg.u Variables
    org $80

    seg Code
    org $f000

Start
    CLEAN_START

NextFrame
    VERTICAL_SYNC

    TIMER_SETUP 37
; Set playfield foreground and background
    lda #$F6
    sta COLUBK
    lda #$F7
    sta COLUPF
    TIMER_WAIT

    ldy #192
ScanLoop
; WSYNC and store playfield registers
    sta WSYNC
    lda PFBitmap0,y
    sta PF0		; store first playfield byte
    lda PFBitmap1,y
    sta PF1		; store 2nd byte
    lda PFBitmap2,y
    sta PF2		; store 3rd byte
; Here's the asymmetric part -- by this time the TIA clock
; is far enough that we can rewrite the same PF registers
; and display new data on the right side of the screen
    nop
    nop
    nop		; pause to let playfield finish drawing
    lda PFBitmap3,y
    sta PF0		; store 4th byte
    lda PFBitmap4,y
    sta PF1		; store 5th byte
    lda PFBitmap5,y
    sta PF2		; store 6th byte
    dey 
    bne ScanLoop	; repeat until all scanlines drawn
; Reset playfield
    SLEEP 14	; give time to finish drawing scanline
    lda #0
    sta PF0
    sta PF1
    sta PF2		; clear playfield

    TIMER_SETUP 28
    TIMER_WAIT
    jmp NextFrame

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
; BITMAP DATA

PFBitmap0 equ .+192*0-1
PFBitmap1 equ .+192*1-1
PFBitmap2 equ .+192*2-1
PFBitmap3 equ .+192*3-1
PFBitmap4 equ .+192*4-1
PFBitmap5 equ .+192*5-1
    incbin "$DATAFILE"

; Epilogue
    org $fffc
    .word Start
    .word Start
`;var hi=`
    processor 6502
    include "vcs.h"
    include "macro.h"
    include "xmacro.h"

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

    seg.u Variables
    org $80

    seg Code
    org $f000

Start
    CLEAN_START

NextFrame
    VERTICAL_SYNC

    TIMER_SETUP 37
; Set playfield foreground and background
    lda #$F6
    sta COLUBK
    lda #$F7
    sta COLUPF
    TIMER_WAIT

    ldy #192
ScanLoop
; WSYNC and store playfield registers
    lda PFBitmap0,y
    ldx PFBitmap1,y
    sta WSYNC
    sta PF0		; store first playfield byte
    lda PFColorFg,y
    sta COLUPF
    lda PFColorBg,y
    sta COLUBK
    stx PF1		; store 2nd byte
    lda PFBitmap2,y
    sta PF2		; store 3rd byte
    lda PFBitmap3,y
    sta PF0		; store 4th byte (cyc 28-49)
    nop
    lda PFBitmap4,y
    sta PF1		; store 5th byte (cyc 39-54)
    nop
    lda PFBitmap5,y
    sta PF2		; store 6th byte (cyc 49-65)
    dey 
    bne ScanLoop	; repeat until all scanlines drawn
; Reset playfield
    lda #0
    sta PF0
    sta PF1
    sta PF2		; clear playfield

    TIMER_SETUP 28
    TIMER_WAIT
    jmp NextFrame

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
; BITMAP DATA

PFBitmap0 equ .+192*0-1
PFBitmap1 equ .+192*1-1
PFBitmap2 equ .+192*2-1
PFBitmap3 equ .+192*3-1
PFBitmap4 equ .+192*4-1
PFBitmap5 equ .+192*5-1
PFColorBg equ .+192*6-1
PFColorFg equ .+192*7-1
    incbin "$DATAFILE"

; Epilogue
    org $fffc
    .word Start
    .word Start
`;var ui=`
    INCLUDE "hvglib.h"      ; Include HVGLIB library
    ORG     FIRSTC          ; Initialize at beginning of cartridge ROM area
    DB      $55             ; ... with the code for a normal menued cartridge
    DW      MENUST          ; Initialize menu
    DW      PrgName         ; ... with string at PrgName
    DW      PrgStart        ; ... such that selecting the program enters PrgStart
PrgName:    DB      "BITMAP VIEWER" ; String
    DB      0               ; ... which must be followed by 0
PrgStart:   DI                      ; Disable interrupts
    SYSTEM  INTPC           ; Begin interpreter mode
    DO      SETOUT          ; Set output ports
    DB      98*2            ; ... with VBLANK line set to line 98
    DB      160/4           ; ... with color boundary
    DB      00001000b       ; ... with screen interrupts reenabled 
    DO      COLSET          ; Set color palettes
    DW      Palettes        ; ... with the values at Palettes
    DO      MOVE            ; Move memory
    DW      NORMEM          ; ... destination start of screen
    DW      40*98           ; ... number of bytes
    DW      BitmapData      ; ... source in ROM
    EXIT                    ; Exit interpreter mode
Loop:
    JP      Loop            ; Play infinite loop
Palettes:
    DB      $b3,$b2,$b1,$b0 ; Left color palette (11b, 10b, 01b, 00b)
    DB      $c3,$c2,$c1,$c0 ; Right color palette (11b, 10b, 01b, 00b)
BitmapData:
    incbin "$DATAFILE"
`;var ja=`
    processor 6502    
    include "atari.inc"

ANTICMODE equ $d
DUALBUFFER equ 0
GPIOMODE equ 0

    org     $a000           ;Start of left cartridge area
Start:
 if GPIOMODE
    lda     #$80
    sta     GPRIOR
; set GTIA mode colors
    lda     #$00;PF4
    sta     COLOR0 + 0
    lda     #$00;PF5
    sta     COLOR0 + 1
    lda     #$00;PF6
    sta     COLOR0 + 2
    lda     #$00;PF7
    sta     COLOR0 + 3
    lda     #$00;PF8
    sta     COLOR0 + 4
 endif
; set non-GTIA mode colors
    lda     #$00;PF0
    sta     COLOR0+4
    lda     #$00;PF1
    sta     COLOR0+0
    lda     #$00;PF2
    sta     COLOR0+1
    lda     #$00;PF3
    sta     COLOR0+2
; set display list
    lda     #<dlist            ;Set Display list pointer
    sta     SDLSTL
    lda     #>dlist
    sta     SDLSTH
; enable DMI
    lda     #$22            ;Enable DMA
    sta     SDMCTL
; infinite loop
wait
    nop
    jmp     wait

;Graphics data
    align $100   ; ANTIC can only count to $FFF
ImgData1:
ImgData2 equ ImgData1+40*96
    incbin "$DATAFILE"

;Display list data
dlist
    .byte $70,$70,$70
    .byte (ANTICMODE | $40),#<ImgData1,#>ImgData1
    REPEAT 95
    .byte ANTICMODE
    REPEND
    if DUALBUFFER
    .byte (ANTICMODE | $40),#<ImgData2,#>ImgData2
    REPEAT 95
    .byte ANTICMODE
    REPEND
    endif
    .byte $41,$00,$10
dlistend equ .

;Cartridge footer
    org     CARTCS
    .word 	Start	; cold start address
    .byte	$00	; 0 == cart exists
    .byte	$04	; boot cartridge
    .word	Start	; start
`;var fi=`
    org  0x5ccb     ; start of code

Start
    ld	de,0x4000   ; DE = screen
    ld	hl,ImgData  ; HL = image data
    ld 	bc,0x1b00   ; 6144 bytes bitmap, 768 bytes attributes
    ldir            ; copy
Loop
    jp	loop        ; infinite loop

ImgData             ; data file
    incbin "$DATAFILE"

    org 0xff57
    defb 00h        ; end of ROM
`;var di=`
    org  0x4000     ; start of code
Start:
    ld  a,$MODE		; graphics mode
    call 0xbc0e		; SCR_SET_MODE
; set border color
    ld  hl,PalData
    ld  b,(hl)
    ld  c,b
    call 0xbc38		; SCR_SET_BORDER
    ld  b,0x10		; loop counter
; read palette from memory
    ld  hl,PalData+15
Loop1:
    push hl
    push bc
    ld  a,b
    dec a
    and a,0x0f
    ld  b,(hl)
    ld  c,b
    call 0xbc32		; SCR_SET_INK
    pop bc
    pop hl
    dec hl
    djnz Loop1
; set image bytes
    ld	de,0xc000   ; DE = screen
    ld	hl,ImgData  ; HL = image data
    ld 	bc,0x4000   ; BC = # of bytes   
    ldir            ; copy
Loop:
    jp	loop        ; infinite loop
PalData:
    db $c0,$c1,$c2,$c3,$c4,$c5,$c6,$c7
    db $c8,$c9,$c10,$c11,$c12,$c13,$c14,$c15
ImgData:            ; data file
    incbin "$DATAFILE"
`;var mi=`
    processor 6502
    include "basicheader.dasm"
    
; credit to https://codebase64.org/doku.php?id=base:fli_displayer

; The chips emulator has a VIC graphics timing bug which
; differs from other emulators (such as VICE). Setting
; this value to 1 allows the emulator bug to be worked
; around while 0 allows other systems to work.
Use8BitWorkshopEmulator equ 1

; Use the repeat command to generate the lookup
; tables instead of using a code generator by
; specifying 0. Using 1 will include table generation
; code.
UseInitTables equ 0

; This code is extremely similar between multi-color
; graphics mode and hires graphics mode. Setting
; to 1 enables the multi-color graphics code, otherwise
; set to 0 for hires graphics mode.
UseMultiColorGraphics equ $USE_MULTI_MODE

#if Use8BitWorkshopEmulator
TweakD018 equ -1
TweakD011 equ 7
LastRasterLine equ 201
FinalRowPatch equ 0
#else
TweakD018 equ 1
TweakD011 equ 1
LastRasterLine equ 199
FinalRowPatch equ 1
#endif

Irq0AtRaster equ $2d

    ; temporary CopyMem storage variables in
    ; zero page

Src equ $02
Dest equ $04

Sys2062:
    jmp Start   ; entry point from basic

    ;-------------------------------------------------
    ; Start of code that must be within the
    ; same page boundary $nn00 -> $nnFF
    ; otherwise some instructions may become
    ; cycle inaccurate.
    
    .align $100
    
    ;
    ; Two IRQs are used to create a stable raster
    ; line start point free from issues caused by
    ; interrupts, inconsistent mid-instruction
    ; triggers, or other concerns.
    ;
    ; The first IRQ's job is to setup the second IRQ.
    ; While the first IRQ is triggers based on a
    ; raster line it's timing is not said to be as
    ; accurate because the CPU might be processing
    ; any possible cycle timed 1-7 clock cycle
    ; instructions, whereas the second IRQ is
    ; triggered only during a 2 clock cycle "nop"
    ; instruction ensuring the second IRQ is accurate
    ; within 0 or 1 clock cycle count.
    ; 
    ; The second IRQ further has logic to detect this
    ; 0 or 1 clock cycle count offset and correct the
    ; timing so the entry point into the raster
    ; routine is 100% accurate creating an accurate
    ; and stable raster-timed loop.
    ;
    
Irq0:
    pha
    lda $d019
    sta $d019
    inc $d012
    lda #<Irq1
    sta $fffe   ; set up 2nd IRQ to get a stable IRQ
    cli

    ;
    ; These "nop"s are not an accident, or in need
    ; of optimization. They allow the 2nd IRQ
    ; to be triggered with an off-by 0 or 1 clock
    ; cycle delay resulting in an "almost" stable IRQ.
    ;

    nop
    nop
    nop
    nop
    nop
    nop
    nop
    nop
    nop
    nop
    nop
    nop
    nop
    nop
    nop
    nop
    nop
        
    ; The "rti" of the first Irq0 is not needed as
    ; these "nop" instructions never fall-through.
    ; The stack is re-arranged so that the second Irq1
    ; (which triggers while the first Irq0 is being
    ; serviced) returns to the interrupt point where
    ; the first trigger IRQ happened bypassing the
    ; need for a "rti" from the first Irq0 entirely.

Irq1:
Ntsc1:
    ; PAL raster at 9 or 10/46
    lda #$ea    ; modified to NOP NOP on NTSC
    lda #$80
    sta $d018   ; setup first color RAM address early
    lda #$38
    sta $d011   ; setup first DMA access early
    pla
    pla
    pla
    lda $d019
    sta $d019
    lda #Irq0AtRaster
    sta $d012
    lda #<Irq0
    sta $fffe   ; switch IRQ back to first stabilizer IRQ
    lda $d012   ; PAL raster at 55 or 56/46
    cmp $d012   ; stabilize last jittering cycle
    beq Delay   ; PAL raster at 0 or 1/47; if equal, 2 cycles delay. else 3 cycles delay

Delay:
    stx SaveX+1 ; PAL raster stable at 3/47 (no more fluctuations)
    ldx #$0d

Wait:
    dex
    bne Wait

Ntsc2:
    ; PAL raster at 10/48
    lda #$ea    ; modified to NOP NOP on NTSC
Ntsc3:
    lda #$ea    ; modified to NOP NOP on NTSC

    ;
    ; Following here is the main FLI loop which forces
    ; the VIC-II to read new color data each
    ; rasterline. The loop is exactly 23 clock cycles
    ; long so together with 40 cycles of color DMA this
    ; will result in the 63 clock cycles which is exactly
    ; the length of a PAL C64 rasterline.
    ;

    nop
    nop
L0:
    ; PAL raster at 61/48, 61/49, 61/50, ...
    lda LookupD018+TweakD018,x
    sta $d018   ; set new color RAM address
    lda LookupD011+TweakD011,x
    sta $d011   ; force new color DMA
    inx         ; FLI bug $D800 color = 8 (orange)
    cpx #LastRasterLine    ; last rasterline?
Ntsc4:
    bne L0      ; branches to L0-1 on NTSC for 2 extra cycles per rasterline

    ; lda $d016
    ; eor #$01    ; IFLI: 1 hires pixel shift every 2nd frame
    ; sta $d016
    ; lda $dd00
    ; eor #$02    ; IFLI: flip between banks $4000 and $C000 every frame
    ; sta $dd00

SaveX:
    ldx #$00
    pla
Nmi:
    rti

    ;
    ; End of code that must be within the
    ; same page boundary $nn00 -> $nnFF
    ; otherwise some instructions may become
    ; cycle inaccurate.
    ;-------------------------------------------------

Start:
    sei

    jsr CopyData
    jsr InitGfx
    jsr InitTables
    jsr NtscFix
    
    ; Patch the table as the last line needs to
    ; perform the "open borders" trick. This trick
    ; involves an undocumented "feature" where multi
    ; color mode graphics is enabled with extended
    ; background mode. While documented as not a
    ; legal combination, this combination causes the
    ; borders to be open to writing during the
    ; raster scroll process (otherwise some of the
    ; rows would be shifted an "off"). This patching
    ; needs to be done within the timing of the final
    ; scan line otherwise the normal background is
    ; disturbed and the drawing is not correct. The
    ; screen needs to be turned off to ensure the
    ; background is painted during the final scene.
    ; Unfortunately the final row is cut-off
    ; for a 319 instead of 320 pixel count height.
    ; A fix is welcomed for this issue.

#if FinalRowPatch
    lda LookupD011+LastRasterLine
    and #$07
    ora #$70
    sta LookupD011+LastRasterLine
#endif

    ; The VIC chip doesn't care if ram or rom is
    ; selected (with an exception), but the IRQs
    ; cannot be overridden later unless ram is loaded.
    ; Thus the kernal routines are not available while
    ; the picture is being displayed, and if the
    ; kernal rom is to be used, the IRQs must first be
    ; uninstalled prior to accessing the kernal
    ; functions and rom restored.
    
    lda #$35    ; %x01: RAM visible at $A000-$BFFF and $E000-$FFFF.
                ; %1xx: I/O area visible at $D000-$DFFF. (Except for the value %100, see above.)
    sta $01     ; disable ROMs %xxxxx101 (rest are default values)
    lda #$7f
    sta $dc0d   ; no CIA #1 timer IRQs
    lda $dc0d   ; clear CIA #1 timer IRQ flags

    lda #$2b
    sta $d011   ; %00101011 - neutral scroll, 25 rows, screen off, bitmap mode, raster IRQ high bit zero
    lda #Irq0AtRaster
    sta $d012   ; interrupt at raster line 45

    ; Even though these IRQ values overwrite screen
    ; color choice area of the picture data, this
    ; does not affect the picture in any way
    ; because the color choices end at 1000 bytes,
    ; not 1024 bytes leaving the extra few bytes
    ; unused by the VIC chip, which is fortunately
    ; exactly where IRQ vectors need to be installed.
    ;
    ; However, care must be taken that if a new
    ; picture is loaded into this memory area then the
    ; IRQ table needs to be re-initialized to these
    ; default values and interrupts (including NMIs)
    ; must be disabled during the picture copying
    ; process. NMIs cannot technically be disabled,
    ; but a trick can be used where a NMI can be
    ; intentionally triggered without acknowledgement
    ; thus preventing a second NMI from happening.
    
    lda #<Nmi
    sta $fffa
    lda #>Nmi
    sta $fffb   ; dummy NMI to avoid crashing due to RESTORE
    lda #<Irq0
    sta $fffe
    lda #>Irq0
    sta $ffff   ; Irq0 is the default interrupt handler
    lda #$01
    sta $d01a   ; enable raster IRQs (no other IRQs)

                ; dec op reads the value, writes the value back
                ; "as is" unmodified, then writes the value back
                ; modified guaranteeing bit 0 is cleared
    dec $d019   ; clear raster IRQ flag (so it can trigger)
    cli
    jmp *       ; that's it, no more action needed
    
CopyData:

    ; The VIC always reads the bitmap and screen color
    ; choices from RAM regardless if the ram or roms
    ; are active (with the exception of %xxxxx0xx and
    ; the exception to the exception being %xxxxx000).
    ; The color block data always is read from
    ; I/O $d800 area.
    
                ; %x00: RAM visible in all three areas.
                ; %x00: RAM visible in all three areas.
    lda #$30    ; %00110000
    sta $01     ; enable HIMEM RAM
    
    ; copy char memory
    lda #<CharData
    sta Src
    lda #>CharData
    sta Src+1
    lda #0
    sta Dest
    lda #$c0
    sta Dest+1
    ldx #$20
    jsr CopyMem
    
    ; copy screen memory
    lda #<ScreenData
    sta Src
    lda #>ScreenData
    sta Src+1
    lda #0
    sta Dest
    lda #$e0
    sta Dest+1
    ldx #$20
    jsr CopyMem
    
    lda #$07   ; %x11: BASIC ROM visible at $A000-$BFFF; KERNAL ROM visible at $E000-$FFFF.
               ; %1xx: I/O area visible at $D000-$DFFF.
    sta $01    ; enable ROM and $D000 I/O
    
#if UseMultiColorGraphics
    ; copy color block RAM to the VIC's color block area
    lda #<ColorData
    sta Src
    lda #>ColorData
    sta Src+1
    lda #$d8
    sta Dest+1
    ldx #4
    jsr CopyMem
#endif
    rts

InitGfx:
    lda #$00
    sta $d015   ; disable sprites

    lda XtraData+1
    sta $d020   ; border
    lda XtraData+0
    sta $d021   ; background

#if UseMultiColorGraphics
    lda #$D8    ; multi-color mode on
#else
    lda #$C8    ; multi-color mode off
#endif
    sta $d016   ; %00011000 ; no horizontal scroll, 40 columns, multi-mode on or off, defaulted high bits
    lda #$80
    sta $d018   ; %10000000 ; bitmap data %0xx, 0: +$0000-$1FFF, 0-8191; screen color choices +$2000-$23FF, 8192-9215.
    lda #$00
    sta $dd00   ; %00, 0: Bank #3, $C000-$FFFF, 49152-65535.
    rts

    ; The InitTables routine can be removed if your
    ; assembler supports a .repeat-style macro.
    ; The code is only included as an example of how
    ; to initialize the tables in the event your
    ; assembler does not have a suitable substitute.

InitTables:
#if UseInitTables
    ldx #$00
L2:
    txa
    asl
    asl
    asl
    asl
    and #$70    ; color RAMs at $E000
    ora #$80    ; bitmap data at $C000
    sta LookupD018,x ; calculate $D018 table
    txa
    and #$07
    ora #$38    ; bitmap
    sta LookupD011,x ; calculate $D011 table
    inx
    bne L2
#endif
    rts
        
NtscFix:
    bit $d011
    bmi *-3
    bit $d011   ; wait for rasterline 256
    bpl *-3
    lda #$00
Test:
    cmp $d012
    bcs Nt
    lda $d012   ; get rasterline low byte
Nt:
    bit $d011
    bmi Test
    cmp #$20    ; PAL: $37, NTSC: $05 or $06
    bcs Pal

    ; 
    ; This code self-patches to support NTSC mode
    ; which means this code must be copied to RAM
    ; if the code is originally located in ROM.
    ; If this code must run from ROM then the code
    ; needs to be duplicated with a PAL and an
    ; NTSC version where the test routine installs
    ; one or the other versions for usage.
    ;

    ; 
    ; The value "#$ea" as a literal is the op
    ; code for "nop", so when the instruction
    ; "lda #$ea" is patched, it becomes the values
    ; "$ea $ea" (i.e. "nop" and "nop").
    ;
    ; In such a patch, the clock cycle count
    ; changes from a 2-clock cycle "lda" immediate
    ; mode instruction into a 4-clock cycle timed
    ; instructions
    ;

    lda #$ea
    sta Ntsc1
    sta Ntsc2
    sta Ntsc3
    dec Ntsc4+1
Pal:
    rts

; copy data from Src to Dest
; X = number of bytes * 256 bytes at a time
CopyMem:
    ldy #0
.Loop:
    lda (Src),y
    sta (Dest),y
    iny
    bne .Loop
    inc Src+1
    inc Dest+1
    dex
    bne .Loop
    rts

    .align $100

; lookup table for $d011
LookupD011:
#if UseInitTables
    .ds 256
#else
    .repeat 256/8
    .byte $38,$39,$3a,$3b,$3c,$3d,$3e,$3f
    .repend
#endif
    
; lookup table for $d018
LookupD018:
#if UseInitTables
    .ds 256
#else
    .repeat 256/8
    .byte $80,$90,$a0,$b0,$c0,$d0,$e0,$f0
    .repend
#endif

    .align $100
CharData equ .
ScreenData equ CharData+8000
#if UseMultiColorGraphics
ColorData equ ScreenData+$2000
XtraData equ ColorData+1000
#else
XtraData equ ScreenData+$2000
#endif

    ; link a demo picture
    incbin "$DATAFILE"
`;var qa=`
; Master System / Game Gear tile viewer (shared by both systems).
; Data file layout: [tiles: 32 bytes each, shared between cells]
; [name table: 2 bytes per cell: tile, flips, palette] [CRAM]

IMG_COLS    = $IMG_COLS       ; image size in tiles
IMG_ROWS    = $IMG_ROWS
IMG_COL0    = $IMG_COL0       ; first map column/row used on screen
IMG_ROW0    = $IMG_ROW0
CRAM_BYTES  = $CRAM_BYTES     ; 32 (SMS, 1 byte/color) or 64 (GG, 2 bytes/color)
TILE_BYTES  = $TILE_BYTES     ; size of the tile data

VDPDATA     = 0x0be
VDPCTRL     = 0x0bf
NAMETABLE   = 0x3800
SPRITETABLE = 0x3f00
BLANKTILE   = 0x1ff            ; unused tile (VRAM is cleared) for the margins

    org 0x0000
    di
    im 1
    ld sp,0x0dff0
    jp Start

    org 0x66
    retn                        ; NMI (Game Gear start button)

Start:
    ld hl,VdpRegs
    ld b,VdpRegsEnd-VdpRegs
    ld c,VDPCTRL
    otir                        ; set up VDP registers, display still off

    ; clear all 16K of VRAM
    ld de,0x4000
    call SetAddr
    ld bc,0x4000
ClearLoop:
    xor a
    out (VDPDATA),a
    dec bc
    ld a,b
    or c
    jr nz,ClearLoop

    ; hide all sprites
    ld de,0x4000+SPRITETABLE
    call SetAddr
    ld a,0x0d0
    out (VDPDATA),a

    ; fill name table with the blank tile
    ld de,0x4000+NAMETABLE
    call SetAddr
    ld bc,32*28
FillLoop:
    ld a,BLANKTILE & 0x0ff
    out (VDPDATA),a
    ld a,BLANKTILE >> 8
    out (VDPDATA),a
    dec bc
    ld a,b
    or c
    jr nz,FillLoop

    ; tile patterns at VRAM $0000
    ld hl,ImageData
    ld de,0x4000
    call SetAddr
    ld bc,TILE_BYTES
    call CopyVram

    ; name table: one row of the image at a time (32 entries per map row)
    ld de,0x4000+NAMETABLE+IMG_ROW0*64+IMG_COL0*2
    ld b,IMG_ROWS
RowLoop:
    push bc
    push de
    call SetAddr
    ld bc,IMG_COLS*2
    call CopyVram
    pop de
    push hl
    ld hl,64
    add hl,de
    ex de,hl
    pop hl
    pop bc
    djnz RowLoop

    ; palette (HL now points at the CRAM data)
    ld de,0x0c000
    call SetAddr
    ld bc,CRAM_BYTES
    call CopyVram

    ; display on
    ld a,0x0c0
    out (VDPCTRL),a
    ld a,0x81
    out (VDPCTRL),a
Forever:
    jr Forever

; DE = VDP address with command bits
SetAddr:
    ld a,e
    out (VDPCTRL),a
    ld a,d
    out (VDPCTRL),a
    ret

; copy BC bytes from (HL) to the VDP
CopyVram:
    ld a,(hl)
    out (VDPDATA),a
    inc hl
    dec bc
    ld a,b
    or c
    jr nz,CopyVram
    ret

VdpRegs:
    db 0x04,0x80                  ; mode 4
    db 0x80,0x81                  ; display off for now
    db 0x0ff,0x82                 ; name table at $3800
    db 0x0ff,0x85                 ; sprite table at $3f00
    db 0x0ff,0x86                 ; sprite tiles at $2000
    db 0x00,0x87                  ; backdrop = palette entry 0
    db 0x00,0x88                  ; scroll X
    db 0x00,0x89                  ; scroll Y
    db 0x0ff,0x8a                 ; no line interrupts
VdpRegsEnd:

ImageData:
    incbin "$DATAFILE"

; ROM header (data must end below $7ff0; 32KB ROM)
    org 0x7ff0
    db "TMR SEGA"
    dw 0,0                      ; checksum (unchecked by emulators)
    db 0,0,0                    ; product code, version
    db $REGION                  ; region (high nibble) and ROM size (low nibble)
`;var Ka=`
; Game Boy / Game Boy Color tile viewer (shared by both systems), SDAS syntax.
; Data file layout: [tiles: 16 bytes each, shared between map cells]
; [BG map: 1 tile number byte per cell] and for CGB also
; [BG attributes: 1 byte per cell: palette, flips] [BG palette RAM: 64 bytes]

CGB         = $CGB              ; 1 = Game Boy Color
IMG_COLS    = $IMG_COLS         ; image size in tiles
IMG_ROWS    = $IMG_ROWS
IMG_COL0    = $IMG_COL0         ; first map column/row used on screen
IMG_ROW0    = $IMG_ROW0
TILE_BYTES  = $TILE_BYTES       ; size of the tile data

rLCDC       = 0xff40
rLY         = 0xff44
rBGP        = 0xff47
rVBK        = 0xff4f
rBCPS       = 0xff68
rBCPD       = 0xff69

    .area _ROM (ABS)
    .org 0x100
    nop
    jp Start

; cartridge header
    .org 0x104
    .db 0xce,0xed,0x66,0x66,0xcc,0x0d,0x00,0x0b,0x03,0x73,0x00,0x83,0x00,0x0c,0x00,0x0d
    .db 0x00,0x08,0x11,0x1f,0x88,0x89,0x00,0x0e,0xdc,0xcc,0x6e,0xe6,0xdd,0xdd,0xd9,0x99
    .db 0xbb,0xbb,0x67,0x63,0x6e,0x0e,0xec,0xcc,0xdd,0xdc,0x99,0x9f,0xbb,0xb9,0x33,0x3e
    .ds 15                      ; title
    .db CGB*0x80                ; CGB flag (0x80 = works on DMG and CGB)
    .ds 9                       ; licensee, SGB, cart type, sizes, destination, version
    .db (-(CGB*0x80)-25)&0xff   ; header checksum
    .ds 2                       ; global checksum (unchecked)

    .org 0x150
Start:
    di
    ld sp,#0xfffe
vblank:
    ldh a,(rLY)
    cp #144
    jr c,vblank
    xor a
    ldh (rLCDC),a               ; LCD off so VRAM is writable

    ld a,#0b00011011
    ldh (rBGP),a                ; DMG shade order

    ; tile patterns at $8000 (unsigned indices 0..255)
    ld hl,#0x8000
    ld de,#ImageData
    ld bc,#TILE_BYTES
copytiles:
    ld a,(de)
    inc de
    ld (hl+),a
    dec bc
    ld a,b
    or c
    jr nz,copytiles

    ; BG map: tile numbers (de points at them), one image row per 32-entry map row
    ld hl,#(0x9800+IMG_ROW0*32+IMG_COL0)
    ld c,#IMG_ROWS
maprow:
    ld b,#IMG_COLS
mapcol:
    ld a,(de)
    inc de
    ld (hl+),a
    dec b
    jr nz,mapcol
    ld a,l
    add a,#(32-IMG_COLS)
    ld l,a
    jr nc,mapnc
    inc h
mapnc:
    dec c
    jr nz,maprow

.if CGB
    ; BG attributes (palette number and flips per cell) in VRAM bank 1, same
    ; map layout (de points at them)
    ld a,#1
    ldh (rVBK),a
    ld hl,#(0x9800+IMG_ROW0*32+IMG_COL0)
    ld c,#IMG_ROWS
attrrow:
    ld b,#IMG_COLS
attrcol:
    ld a,(de)
    inc de
    ld (hl+),a
    dec b
    jr nz,attrcol
    ld a,l
    add a,#(32-IMG_COLS)
    ld l,a
    jr nc,attrnc
    inc h
attrnc:
    dec c
    jr nz,attrrow
    xor a
    ldh (rVBK),a

    ; 8 BG palettes x 4 colors x RGB555 (de points at the palette data)
    ld a,#0x80                  ; index 0, auto-increment
    ldh (rBCPS),a
    ld b,#64
palloop:
    ld a,(de)
    inc de
    ldh (rBCPD),a
    dec b
    jr nz,palloop
.endif

    ld a,#0b10010001            ; LCD on, BG on, tiles $8000, map $9800
    ldh (rLCDC),a
forever:
    halt
    nop
    jr forever

ImageData:
    .incbin "$DATAFILE"
`;function Us(){var e=za;return e=e.replace("$USE_MULTI_MODE","1"),e}function Gs(){var e=za;return e=e.replace("$USE_MULTI_MODE","0"),e}function Ns(){return ii}function Hs(){var e=oi,t=Ue(V.lastPixels.pal,V.settings.pal);return e=e.replace("hex 1f;screen color","hex "+ge(t[0])),e=e.replace("hex 01112100;background 0","hex "+ge(t[1])+ge(t[2])+ge(t[3])+ge(0)),e}function pi(){var t,r;let e=(r=(t=V.settings.subPalettes)==null?void 0:t.count)!=null?r:1;return lr(si,{PAL_BYTES:e*4})}function $s(){return pi()}function Xs(){return li}function Ys(){var e=ci,t=Ue(V.lastPixels.pal,V.settings.pal);return e=e.replace("#$F6","#$"+ge(t[0])),e=e.replace("#$F7","#$"+ge(t[1])),e}function Ws(){var c,u;var e=hi,t=V.lastPixels,r=t&&t.content&&t.content.params;if(r&&r.length>0){var a=Ue(t.pal,V.settings.pal),o=r[0]&255,l=r[0]>>8&255;e=e.replace("#$F6","#$"+ge((c=a[o])!=null?c:o)),e=e.replace("#$F7","#$"+ge((u=a[l])!=null?u:l))}return e}function Vs(){var e=ui,t=Ue(V.lastPixels.pal,V.settings.pal);return e=e.replace("$b0","$"+ge(t[0])),e=e.replace("$b1","$"+ge(t[1])),e=e.replace("$b2","$"+ge(t[2])),e=e.replace("$b3","$"+ge(t[3])),e}function Ai(){for(var e=ja,t=Ue(V.lastPixels.pal,V.settings.pal),r=0;r<t.length;r++)e=e.replace("$00;PF"+r,"$"+ge(t[r]));return e}function zs(){for(var e=ja,t=Ue(V.lastPixels.pal,V.settings.pal),r=0;r<t.length;r++)e=e.replace("$00;PF"+r,"$"+ge(t[r]));return e=e.replace("ANTICMODE equ $d","ANTICMODE equ $e"),e=e.replace("DUALBUFFER equ 0","DUALBUFFER equ 1"),e}function js(){let e=Ai();return e=e.replace(".byte $4d",".byte $4f"),e=e.replace(".byte $0d",".byte $0f"),e=e.replace("#$00;PRIOR","#$80"),e=e.replace("COLOR0+4","PCOLR0+0"),e=e.replace("COLOR0+0","PCOLR0+1"),e=e.replace("COLOR0+1","PCOLR0+2"),e=e.replace("COLOR0+2","PCOLR0+3"),e=e.replace("ANTICMODE equ $d","ANTICMODE equ $f"),e=e.replace("DUALBUFFER equ 0","DUALBUFFER equ 1"),e=e.replace("GPIOMODE equ 0","GPIOMODE equ 1"),e}function sr(){var e=fi;return e}function qs(){return sr()}function Ks(){return sr()}function Zs(){return sr()}function Js(){return sr()}function Za(e){var t=di,r=Ue(V.lastPixels.pal,V.settings.pal);t=t.replace("$MODE",e+"");for(var a=0;a<16;a++)t=t.replace("$c"+a,"$"+ge(r[a]||0));return t}function el(e){return Za(0)}function tl(e){return Za(1)}function ft(){var e=mi;return e}function rl(){let e=ft();return e=e.replace("$USE_MULTI_MODE","0"),e}function al(){let e=ft();return e=e.replace("$USE_MULTI_MODE","0"),e}function nl(){let e=ft();return e=e.replace("$USE_MULTI_MODE","0"),e}function il(){let e=ft();return e=e.replace("$USE_MULTI_MODE","1"),e}function ol(){let e=ft();return e=e.replace("$USE_MULTI_MODE","1"),e}function sl(){let e=ft();return e=e.replace("$USE_MULTI_MODE","1"),e}function ll(){let e=ft();return e=e.replace("$USE_MULTI_MODE","1"),e}function lr(e,t){for(let r in t)e=e.split("$"+r).join(String(t[r]));return e}function Jr(e,t,r,a){let o=V.settings.width>>3,l=V.settings.height>>3;return{IMG_COLS:o,IMG_ROWS:l,IMG_COL0:r+(e-o>>1),IMG_ROW0:a+(t-l>>1)}}function ea(e){return V.lastPixels.content.tileset.tiles.length*e}function cl(){return lr(qa,Ce(xe({},Jr(32,24,0,0)),{TILE_BYTES:ea(32),CRAM_BYTES:32,REGION:"0x4c"}))}function hl(){return lr(qa,Ce(xe({},Jr(20,18,6,3)),{TILE_BYTES:ea(32),CRAM_BYTES:64,REGION:"0x6c"}))}function ul(){return lr(Ka,Ce(xe({},Jr(20,18,0,0)),{TILE_BYTES:ea(16),CGB:0}))}function fl(){return lr(Ka,Ce(xe({},Jr(20,18,0,0)),{TILE_BYTES:ea(16),CGB:1}))}var gi=[[1,0,.4375],[-1,1,.1875],[0,1,.3125],[1,1,.0625]],bi=[[1,0,3/8],[0,1,3/8],[1,1,2/8]],xi=[[1,0,1/6],[2,0,1/6],[-1,1,1/6],[0,1,1/6],[1,1,1/6],[0,2,1/6]],Ci=[[1,0,4/16],[2,0,3/16],[-2,1,1/16],[-1,1,2/16],[0,1,3/16],[1,1,2/16],[2,1,1/16]],vi=[[1,0,2/4],[-1,1,1/4],[0,1,1/4]],yi=[[1,0,8/42],[2,0,4/42],[-2,1,2/42],[1,-1,4/42],[0,1,8/42],[1,1,4/42],[2,1,2/42],[-2,2,1/42],[-1,2,2/42],[0,2,4/42],[1,2,2/42],[2,2,1/42]],Ii=[[1,0,.5],[0,1,.5]],wi=[[1,0,1]],Ei=[[0,1,1]],Bi=[[0,1,2/4],[0,2,1/4],[1,2,1/4]],_i=[[1,1,1]],Mi=[[0,1,6/16],[-1,1,3/16],[1,1,3/16],[-2,2,1/16],[0,2,2/16],[2,2,1/16]];var so=Da(Pi(),1);var ml="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function Si(e){let t=e.replace(/[\r\n=]/g,""),r=t.length,a=new Uint8Array(r*3>>2),o=0,l=0;for(let u=0;u<r;u++)u%4===0&&u&&(a[l++]=o>>16&255,a[l++]=o>>8&255,a[l++]=o&255),o=o<<6|ml.indexOf(t.charAt(u));let c=r%4*6;return c===0?(a[l++]=o>>16&255,a[l++]=o>>8&255,a[l++]=o&255):c===18?(a[l++]=o>>10&255,a[l++]=o>>2&255):c===12&&(a[l++]=o>>4&255),a}var _t;function pl(){if(typeof _t!="undefined"||(_t=!1,typeof WebAssembly=="undefined"))return _t;try{let e=new Uint8Array([0,97,115,109,1,0,0,0,1,6,1,96,1,127,1,127,3,2,1,0,5,3,1,0,1,7,8,1,4,116,101,115,116,0,0,10,16,1,14,0,32,0,65,1,54,2,0,32,0,40,2,0,11]),t=new WebAssembly.Module(e);return new WebAssembly.Instance(t,{}).exports.test(4)!==0&&(_t=!0),_t}catch(e){}return _t}var Al={js:!0,wasm:!0},gl=class{constructor(e){let t=Object.assign({},Al,e||{});if(this.options=t,this.__cache={},this.__init_promise=null,this.__modules=t.modules||{},this.__memory=null,this.__wasm={},this.__isLE=new Uint32Array(new Uint8Array([1,0,0,0]).buffer)[0]===1,!this.options.js&&!this.options.wasm)throw new Error('mathlib: at least "js" or "wasm" should be enabled')}has_wasm(){return pl()}use(e){return this.__modules[e.name]=e,this.options.wasm&&this.has_wasm()&&e.wasm_fn?this[e.name]=e.wasm_fn:this[e.name]=e.fn,this}init(){return this.__init_promise?this.__init_promise:!this.options.js&&this.options.wasm&&!this.has_wasm()?Promise.reject(new Error(`mathlib: only "wasm" was enabled, but it's not supported`)):(this.__init_promise=Promise.all(Object.keys(this.__modules).map(e=>{let t=this.__modules[e];return!this.options.wasm||!this.has_wasm()||!t.wasm_fn||this.__wasm[e]?null:WebAssembly.compile(Si(t.wasm_src)).then(r=>{this.__wasm[e]=r})})).then(()=>this),this.__init_promise)}__reallocate(e){if(!this.__memory)return this.__memory=new WebAssembly.Memory({initial:Math.ceil(e/65536)}),this.__memory;let t=this.__memory.buffer.byteLength;return t<e&&this.__memory.grow(Math.ceil((e-t)/65536)),this.__memory}__instance(e,t,r){if(t&&this.__reallocate(t),!this.__wasm[e]){let a=this.__modules[e];this.__wasm[e]=new WebAssembly.Module(Si(a.wasm_src))}if(!this.__cache[e]){let a={memoryBase:0,memory:this.__memory,tableBase:0,table:new WebAssembly.Table({initial:0,element:"anyfunc"})};this.__cache[e]=new WebAssembly.Instance(this.__wasm[e],{env:Object.assign(a,r||{})})}return this.__cache[e]}__align(e,t){t=t||8;let r=e%t;return e+(r?t-r:0)}};function bl(e){e<.5&&(e=.5);let t=Math.exp(.527076)/e,r=Math.exp(-t),a=Math.exp(-2*t),o=(1-r)*(1-r)/(1+2*t*r-a),l=o,c=o*(t-1)*r,u=o*(t+1)*r,d=-o*a,p=2*r,g=-a,B=(l+c)/(1-p-g),x=(u+d)/(1-p-g);return new Float32Array([l,c,u,d,p,g,B,x])}function Di(e,t,r,a,o,l){let c,u,d,p,g,B,x,y,S,k,R,H,Q,G;for(S=0;S<l;S++){for(B=S*o,x=S,y=0,c=e[B],g=c*a[6],p=g,R=a[0],H=a[1],Q=a[4],G=a[5],k=0;k<o;k++)u=e[B],d=u*R+c*H+p*Q+g*G,g=p,p=d,c=u,r[y]=p,y++,B++;for(B--,y--,x+=l*(o-1),c=e[B],g=c*a[7],p=g,u=c,R=a[2],H=a[3],k=o-1;k>=0;k--)d=u*R+c*H+p*Q+g*G,g=p,p=d,c=u,u=e[B],t[x]=r[y]+p,B--,y--,x-=l}}function xl(e,t,r,a){if(!a)return;let o=new Uint16Array(e.length),l=new Float32Array(Math.max(t,r)),c=bl(a);Di(e,o,l,c,t,r,a),Di(o,e,l,c,r,t,a)}function Cl(e,t,r){let a=t*r,o=new Uint16Array(a),l,c,u,d;for(let p=0;p<a;p++)l=e[4*p],c=e[4*p+1],u=e[4*p+2],d=l>=c&&l>=u?l:c>=u&&c>=l?c:u,o[p]=d<<8;return o}function vl(e,t,r,a,o,l){let c,u,d,p,g;if(a===0||o<.5)return;o>2&&(o=2);let B=Cl(e,t,r),x=new Uint16Array(B);xl(x,t,r,o);let y=a/100*4096+.5|0,S=l<<8,k=t*r;for(let R=0;R<k;R++)c=B[R],p=c-x[R],Math.abs(p)>=S&&(u=c+(y*p+2048>>12),u=u>65280?65280:u,u=u<0?0:u,c=c!==0?c:1,d=(u<<12)/c|0,g=R*4,e[g]=e[g]*d+2048>>12,e[g+1]=e[g+1]*d+2048>>12,e[g+2]=e[g+2]*d+2048>>12)}function yl(e,t,r,a,o,l){if(a===0||o<.5)return;o>2&&(o=2);let c=t*r,u=c*4,d=c*2,p=c*2,g=Math.max(t,r)*4,B=32,x=0,y=u,S=y+d,k=S+p,R=k+p,H=R+g,Q=this.__instance("unsharp_mask",u+d+p*2+g+B,{exp:Math.exp}),G=new Uint32Array(e.buffer);new Uint32Array(this.__memory.buffer).set(G);let Z=Q.exports.hsv_v16||Q.exports._hsv_v16;if(!Z)throw new Error("WASM hsv_v16 function is not available");if(Z(x,y,t,r),Z=Q.exports.blurMono16||Q.exports._blurMono16,!Z)throw new Error("WASM blurMono16 function is not available");if(Z(y,S,k,R,H,t,r,o),Z=Q.exports.unsharp||Q.exports._unsharp,!Z)throw new Error("WASM unsharp function is not available");Z(x,x,y,S,t,r,a,l),G.set(new Uint32Array(this.__memory.buffer,0,c))}var Il={name:"unsharp_mask",fn:vl,wasm_fn:yl,wasm_src:"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"},Ri={filter:{box:{win:.5,fn(e){return e<0&&(e=-e),e<.5?1:0}},hamming:{win:1,fn(e){if(e<0&&(e=-e),e>=1)return 0;if(e<11920929e-14)return 1;let t=e*Math.PI;return Math.sin(t)/t*(.54+.46*Math.cos(t/1))}},lanczos2:{win:2,fn(e){if(e<0&&(e=-e),e>=2)return 0;if(e<11920929e-14)return 1;let t=e*Math.PI;return Math.sin(t)/t*Math.sin(t/2)/(t/2)}},lanczos3:{win:3,fn(e){if(e<0&&(e=-e),e>=3)return 0;if(e<11920929e-14)return 1;let t=e*Math.PI;return Math.sin(t)/t*Math.sin(t/3)/(t/3)}},mks2013:{win:2.5,fn(e){return e<0&&(e=-e),e>=2.5?0:e>=1.5?-.125*(e-2.5)*(e-2.5):e>=.5?.25*(4*e*e-11*e+7):1.0625-1.75*e*e}}}};function Ti(e){return Math.round(e*16383)}function ra(e,t,r,a,o){let l=Ri.filter[e].fn,c=1/a,u=Math.min(1,a),d=Ri.filter[e].win/u,p,g,B,x,y,S,k,R,H,Q,G,Z,te,U,X,Y,W,q=Math.floor((d+1)*2),J=new Int16Array((q+2)*r),ae=0,se=!J.subarray||!J.set;for(p=0;p<r;p++){for(g=(p+.5)*c+o,B=Math.max(0,Math.floor(g-d)),x=Math.min(t-1,Math.ceil(g+d)),y=x-B+1,S=new Float32Array(y),k=new Int16Array(y),R=0,H=B,Q=0;H<=x;H++,Q++)G=l((H+.5-g)*u),R+=G,S[Q]=G;for(Z=0,Q=0;Q<S.length;Q++)te=S[Q]/R,Z+=te,k[Q]=Ti(te);for(k[r>>1]+=Ti(1-Z),U=0;U<k.length&&k[U]===0;)U++;if(U<k.length){for(X=k.length-1;X>0&&k[X]===0;)X--;if(Y=B+U,W=X-U+1,J[ae++]=Y,J[ae++]=W,!se)J.set(k.subarray(U,X+1),ae),ae+=W;else for(Q=U;Q<=X;Q++)J[ae++]=k[Q]}else J[ae++]=0,J[ae++]=0}return J}function dt(e){return e<0?0:e>255?255:e}function mt(e){return e>=0?e:0}function wl(e,t,r,a,o,l){let c,u,d,p,g,B,x,y,S,k,R,H=0,Q=0;for(S=0;S<a;S++){for(g=0,k=0;k<o;k++){for(B=l[g++],x=l[g++],y=H+B*4|0,c=u=d=p=0;x>0;x--)R=l[g++],p=p+R*e[y+3]|0,d=d+R*e[y+2]|0,u=u+R*e[y+1]|0,c=c+R*e[y]|0,y=y+4|0;t[Q+3]=mt(p>>7),t[Q+2]=mt(d>>7),t[Q+1]=mt(u>>7),t[Q]=mt(c>>7),Q=Q+a*4|0}Q=(S+1)*4|0,H=(S+1)*r*4|0}}function El(e,t,r,a,o,l){let c,u,d,p,g,B,x,y,S,k,R,H=0,Q=0;for(S=0;S<a;S++){for(g=0,k=0;k<o;k++){for(B=l[g++],x=l[g++],y=H+B*4|0,c=u=d=p=0;x>0;x--)R=l[g++],p=p+R*e[y+3]|0,d=d+R*e[y+2]|0,u=u+R*e[y+1]|0,c=c+R*e[y]|0,y=y+4|0;c>>=7,u>>=7,d>>=7,p>>=7,t[Q+3]=dt(p+8192>>14),t[Q+2]=dt(d+8192>>14),t[Q+1]=dt(u+8192>>14),t[Q]=dt(c+8192>>14),Q=Q+a*4|0}Q=(S+1)*4|0,H=(S+1)*r*4|0}}function Bl(e,t,r,a,o,l){let c,u,d,p,g,B,x,y,S,k,R,H,Q=0,G=0;for(k=0;k<a;k++){for(B=0,R=0;R<o;R++){for(x=l[B++],y=l[B++],S=Q+x*4|0,c=u=d=p=0;y>0;y--)H=l[B++],g=e[S+3],p=p+H*g|0,d=d+H*e[S+2]*g|0,u=u+H*e[S+1]*g|0,c=c+H*e[S]*g|0,S=S+4|0;d=d/255|0,u=u/255|0,c=c/255|0,t[G+3]=mt(p>>7),t[G+2]=mt(d>>7),t[G+1]=mt(u>>7),t[G]=mt(c>>7),G=G+a*4|0}G=(k+1)*4|0,Q=(k+1)*r*4|0}}function _l(e,t,r,a,o,l){let c,u,d,p,g,B,x,y,S,k,R,H=0,Q=0;for(S=0;S<a;S++){for(g=0,k=0;k<o;k++){for(B=l[g++],x=l[g++],y=H+B*4|0,c=u=d=p=0;x>0;x--)R=l[g++],p=p+R*e[y+3]|0,d=d+R*e[y+2]|0,u=u+R*e[y+1]|0,c=c+R*e[y]|0,y=y+4|0;c>>=7,u>>=7,d>>=7,p>>=7,p=dt(p+8192>>14),p>0&&(c=c*255/p|0,u=u*255/p|0,d=d*255/p|0),t[Q+3]=p,t[Q+2]=dt(d+8192>>14),t[Q+1]=dt(u+8192>>14),t[Q]=dt(c+8192>>14),Q=Q+a*4|0}Q=(S+1)*4|0,H=(S+1)*r*4|0}}function Ml(e,t,r){let a=3,o=t*r*4|0;for(;a<o;){if(e[a]!==255)return!0;a=a+4|0}return!1}function Pl(e,t,r){let a=3,o=t*r*4|0;for(;a<o;)e[a]=255,a=a+4|0}function Sl(e){let t=e.src,r=e.width,a=e.height,o=e.toWidth,l=e.toHeight,c=e.scaleX||e.toWidth/e.width,u=e.scaleY||e.toHeight/e.height,d=e.offsetX||0,p=e.offsetY||0,g=e.dest||new Uint8Array(o*l*4),B=typeof e.filter=="undefined"?"mks2013":e.filter,x=ra(B,r,o,c,d),y=ra(B,a,l,u,p),S=new Uint16Array(o*a*4);return Ml(t,r,a)?(Bl(t,S,r,a,o,x),_l(S,g,a,o,l,y)):(wl(t,S,r,a,o,x),El(S,g,a,o,l,y),Pl(g,o,l)),g}function Dl(e,t,r){let a=3,o=t*r*4|0;for(;a<o;){if(e[a]!==255)return!0;a=a+4|0}return!1}function Rl(e,t,r){let a=3,o=t*r*4|0;for(;a<o;)e[a]=255,a=a+4|0}function Tl(e){return new Uint8Array(e.buffer,0,e.byteLength)}var Yi=!0;try{Yi=new Uint32Array(new Uint8Array([1,0,0,0]).buffer)[0]===1}catch(e){}function ki(e,t,r){if(Yi){t.set(Tl(e),r);return}for(let a=r,o=0;o<e.length;o++){let l=e[o];t[a++]=l&255,t[a++]=l>>8&255}}function kl(e){let t=e.src,r=e.width,a=e.height,o=e.toWidth,l=e.toHeight,c=e.scaleX||e.toWidth/e.width,u=e.scaleY||e.toHeight/e.height,d=e.offsetX||0,p=e.offsetY||0,g=e.dest||new Uint8Array(o*l*4),B=typeof e.filter=="undefined"?"mks2013":e.filter,x=ra(B,r,o,c,d),y=ra(B,a,l,u,p),S=0,k=Math.max(t.byteLength,g.byteLength),R=this.__align(S+k),H=a*o*4*2,Q=this.__align(R+H),G=this.__align(Q+x.byteLength),Z=G+y.byteLength,te=this.__instance("resize",Z),U=new Uint8Array(this.__memory.buffer),X=new Uint32Array(this.__memory.buffer),Y=new Uint32Array(t.buffer);X.set(Y),ki(x,U,Q),ki(y,U,G);let W=te.exports.convolveHV||te.exports._convolveHV;if(!W)throw new Error("WASM resize function is not available");return Dl(t,r,a)?W(Q,G,R,r,a,o,l,1):(W(Q,G,R,r,a,o,l,0),Rl(g,o,l)),new Uint32Array(g.buffer).set(new Uint32Array(this.__memory.buffer,0,l*o)),g}var Fl={name:"resize",fn:Sl,wasm_fn:kl,wasm_src:"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"},Ll=class extends gl{constructor(e){let t=e||[],r={js:t.indexOf("js")>=0,wasm:t.indexOf("wasm")>=0};super(r),this.features={js:r.js,wasm:r.wasm&&this.has_wasm()},this.use(Il),this.use(Fl)}resizeAndUnsharp(e){let t=this.resize(e);return e.unsharpAmount&&this.unsharp_mask(t,e.toWidth,e.toHeight,e.unsharpAmount,e.unsharpRadius,e.unsharpThreshold),t}};function hr(e){"@babel/helpers - typeof";return hr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},hr(e)}function Ql(e,t){if(hr(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var a=r.call(e,t||"default");if(hr(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Ol(e){var t=Ql(e,"string");return hr(t)=="symbol"?t:t+""}function ve(e,t,r){return(t=Ol(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Fi(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,a)}return r}function aa(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Fi(Object(r),!0).forEach(function(a){ve(e,a,r[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Fi(Object(r)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))})}return e}var Li=100,Ul=class{constructor(e,t){ve(this,"create",void 0),ve(this,"available",void 0),ve(this,"acquired",void 0),ve(this,"lastId",void 0),ve(this,"timeoutId",void 0),ve(this,"idle",void 0),this.create=e,this.available=[],this.acquired={},this.lastId=1,this.timeoutId=0,this.idle=t||2e3}acquire(){let e;return this.available.length!==0?e=this.available.pop():e=aa(aa({},this.create()),{},{id:this.lastId++,lastUsed:0}),this.acquired[e.id]=e,{value:e.value,release:()=>this.release(e)}}release(e){delete this.acquired[e.id],e.lastUsed=Date.now(),this.available.push(e),this.timeoutId===0&&(this.timeoutId=setTimeout(()=>this.gc(),Li))}gc(){let e=Date.now();this.available=this.available.filter(t=>e-t.lastUsed>this.idle?(t.destroy(),!1):!0),this.available.length!==0?this.timeoutId=setTimeout(()=>this.gc(),Li):this.timeoutId=0}};function an(e){var t,r;return(t=e==null||(r=e.constructor)===null||r===void 0?void 0:r.name)!==null&&t!==void 0?t:""}function Qi(e){let t=an(e);return t==="HTMLCanvasElement"||t==="OffscreenCanvas"||t==="Canvas"||t==="CanvasElement"}function ta(e){return an(e)==="HTMLImageElement"}function Oi(e){return an(e)==="ImageBitmap"}function Gl(e){let t=0,r=[];function a(){if(t<e&&r.length){var o;t++,(o=r.shift())===null||o===void 0||o()}}return function(l){return new Promise((c,u)=>{r.push(()=>{l().then(d=>{c(d),t--,a()},d=>{u(d),t--,a()})}),a()})}}function Nl(e){switch(e){case 0:return"pixelated";case 1:return"low";case 2:return"medium"}return"high"}var nn=["box","hamming","lanczos2","lanczos3"];function Ui(e){return nn[e]}function Gi(e){return nn.indexOf(e)>=0}function Hl(e){let t=nn.indexOf(e);return t>=0?t:void 0}function $l(e,t,r,a,o){let l=r/e,c=a/t,u=9/o;if(u>.5)return[[r,a]];let d=Math.ceil(Math.log(Math.min(l,c))/Math.log(u));if(d<=1)return[[r,a]];let p=[];for(let g=0;g<d;g++){let B=Math.round(Math.pow(Math.pow(e,d-g-1)*Math.pow(r,g+1),1/d)),x=Math.round(Math.pow(Math.pow(t,d-g-1)*Math.pow(a,g+1),1/d));p.push([B,x])}return p}var Wi=1e-5;function Ut(e){let t=Math.round(e);return Math.abs(e-t)<Wi?t:Math.floor(e)}function Ni(e){let t=Math.round(e);return Math.abs(e-t)<Wi?t:Math.ceil(e)}function Xl(e){let t=e.toWidth/e.width,r=e.toHeight/e.height,a=Ut(e.srcTileSize*t)-2*e.destTileBorder,o=Ut(e.srcTileSize*r)-2*e.destTileBorder;if(a<1||o<1)throw new Error("Internal error in pica: target tile width/height is too small.");let l,c,u,d,p,g,B=[],x;for(d=0;d<e.toHeight;d+=o)for(u=0;u<e.toWidth;u+=a)l=u-e.destTileBorder,l<0&&(l=0),p=u+a+e.destTileBorder-l,l+p>=e.toWidth&&(p=e.toWidth-l),c=d-e.destTileBorder,c<0&&(c=0),g=d+o+e.destTileBorder-c,c+g>=e.toHeight&&(g=e.toHeight-c),x={toX:l,toY:c,toWidth:p,toHeight:g,toInnerX:u,toInnerY:d,toInnerWidth:a,toInnerHeight:o,offsetX:l/t-Ut(l/t),offsetY:c/r-Ut(c/r),scaleX:t,scaleY:r,x:Ut(l/t),y:Ut(c/r),width:Ni(p/t),height:Ni(g/r)},B.push(x);return B}var rn="/9j/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAYAAAAAAAD/4AAQskZJRgABAQAAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/wAALCAACAAMBAREA/8QAFAABAAAAAAAAAAAAAAAAAAAACf/EABsQAAMBAQADAAAAAAAAAAAAAAECAwQFABEx/9oACAEBAAA/AC06fW6va0ps7PT179E88MiV02arrCEkjGQZiSEnKc5ovxURVHoADz//2Q==",Ee={canvas:!1,offscreen_canvas:!1,may_be_worker:!1,create_image_bitmap:!1,safari_put_image_data_fix:!1,bug_canvas_orientation_region:!0,bug_image_bitmap_orientation_region:!0,cib_resize:!1},Hi=!1,Gt=null,Nt={willReadFrequently:!0};function na(){if(typeof document=="undefined"||!document.createElement)return!1;try{let e=document.createElement("canvas");e.width=2,e.height=1;let t=e.getContext("2d",Nt),r=t.createImageData(2,1);return r.data[0]=12,r.data[1]=23,r.data[2]=34,r.data[3]=255,r.data[4]=45,r.data[5]=56,r.data[6]=67,r.data[7]=255,t.putImageData(r,0,0),r=t.getImageData(0,0,2,1),r.data[0]===12&&r.data[1]===23&&r.data[2]===34&&r.data[3]===255&&r.data[4]===45&&r.data[5]===56&&r.data[6]===67&&r.data[7]===255}catch(e){return!1}}function ia(){if(typeof OffscreenCanvas=="undefined")return!1;try{let e=new OffscreenCanvas(2,1).getContext("2d",Nt),t=e.createImageData(2,1);return t.data[0]=12,t.data[1]=23,t.data[2]=34,t.data[3]=255,t.data[4]=45,t.data[5]=56,t.data[6]=67,t.data[7]=255,e.putImageData(t,0,0),t=e.getImageData(0,0,2,1),t.data[0]===12&&t.data[1]===23&&t.data[2]===34&&t.data[3]===255&&t.data[4]===45&&t.data[5]===56&&t.data[6]===67&&t.data[7]===255}catch(e){return!1}}function oa(){return typeof createImageBitmap!="undefined"}function Yl(){return typeof Worker!="undefined"&&typeof URL!="undefined"&&!!URL.createObjectURL}function Wl(){try{return!!(typeof navigator!="undefined"&&navigator.userAgent&&navigator.userAgent.indexOf("Safari")>=0&&navigator.userAgent.indexOf("Chrome")<0)}catch(e){return!1}}function Vl(){return Promise.resolve().then(()=>{if(ia()&&oa()&&typeof Blob!="undefined"&&typeof atob!="undefined"){let e=atob(rn),t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return createImageBitmap(new Blob([t],{type:"image/jpeg"})).then(r=>{let a=new OffscreenCanvas(1,1);try{let o=a.getContext("2d",Nt);return o.drawImage(r,1,1,1,1,0,0,1,1),o.getImageData(0,0,1,1).data[0]<240}finally{r.close()}})}return na()&&typeof Image!="undefined"?new Promise(e=>{let t=new Image;t.onload=()=>{try{let r=document.createElement("canvas");r.width=1,r.height=1;let a=r.getContext("2d",Nt);a.drawImage(t,1,1,1,1,0,0,1,1),e(a.getImageData(0,0,1,1).data[0]<240)}catch(r){e(!0)}},t.onerror=()=>e(!0),t.src=`data:image/jpeg;base64,${rn}`}):!0}).catch(()=>!0)}function zl(){return Promise.resolve().then(()=>{if(!Ee.create_image_bitmap&&!oa()||typeof Blob=="undefined"||typeof atob=="undefined")return!0;let e=ia(),t=na();if(!e&&!t)return!0;let r=atob(rn),a=new Uint8Array(r.length);for(let o=0;o<r.length;o++)a[o]=r.charCodeAt(o);return createImageBitmap(new Blob([a],{type:"image/jpeg"})).then(o=>createImageBitmap(o,1,1,1,1).then(l=>{let c;e?c=new OffscreenCanvas(1,1):(c=document.createElement("canvas"),c.width=1,c.height=1);try{let u=c.getContext("2d",Nt);return u.drawImage(l,0,0),l.width!==1||l.height!==1||u.getImageData(0,0,1,1).data[0]<240}finally{o.close(),l.close()}},()=>(o.close(),!0)))}).catch(()=>!0)}function jl(){return Promise.resolve().then(()=>{if(!oa())return!1;let e=20,t=5,r;if(Ee.canvas||na())r=document.createElement("canvas"),r.width=e,r.height=e;else if(Ee.offscreen_canvas||ia())r=new OffscreenCanvas(e,e),r.getContext("2d",Nt).clearRect(0,0,e,e);else return!1;return createImageBitmap(r,0,0,e,e,{resizeWidth:t,resizeHeight:t,resizeQuality:"high"}).then(a=>{let o=a.width===t&&!!a.close;return a.close&&a.close(),r=null,o})}).catch(()=>!1)}function ql(){if(Hi)return Promise.resolve(Object.assign({},Ee));if(Gt)return Gt.then(()=>Object.assign({},Ee));Ee.canvas=na(),Ee.offscreen_canvas=ia(),Ee.may_be_worker=Yl(),Ee.create_image_bitmap=oa(),Ee.safari_put_image_data_fix=Wl();let e=Vl().then(a=>{Ee.bug_canvas_orientation_region=a}).catch(()=>{}),t=zl().then(a=>{Ee.bug_image_bitmap_orientation_region=a}).catch(()=>{}),r=jl().then(a=>{Ee.cib_resize=a}).catch(()=>{});return Gt=Promise.all([e,t,r]).then(()=>(Hi=!0,Gt=null,Object.assign({},Ee)),a=>{throw Gt=null,a}),Gt}function $i(e,t,r,a,o,l,c){try{var u=e[l](c),d=u.value}catch(p){r(p);return}u.done?t(d):Promise.resolve(d).then(a,o)}function Je(e){return function(){var t=this,r=arguments;return new Promise(function(a,o){var l=e.apply(t,r);function c(d){$i(l,a,o,c,u,"next",d)}function u(d){$i(l,a,o,c,u,"throw",d)}c(void 0)})}}var Xi=`/*!

pica
https://github.com/nodeca/pica

*/
!function(){var A;function t(A){const t=A.replace(/[\\r\\n=]/g,""),e=t.length,n=new Uint8Array(3*e>>2);let a=0,i=0;for(let s=0;s<e;s++)s%4==0&&s&&(n[i++]=a>>16&255,n[i++]=a>>8&255,n[i++]=255&a),a=a<<6|"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(t.charAt(s));const r=e%4*6;return 0===r?(n[i++]=a>>16&255,n[i++]=a>>8&255,n[i++]=255&a):18===r?(n[i++]=a>>10&255,n[i++]=a>>2&255):12===r&&(n[i++]=a>>4&255),n}var e={js:!0,wasm:!0},n=class{constructor(A){const t=Object.assign({},e,A||{});if(this.options=t,this.__cache={},this.__init_promise=null,this.__modules=t.modules||{},this.__memory=null,this.__wasm={},this.__isLE=1===new Uint32Array(new Uint8Array([1,0,0,0]).buffer)[0],!this.options.js&&!this.options.wasm)throw new Error('mathlib: at least "js" or "wasm" should be enabled')}has_wasm(){return function(){if(void 0!==A)return A;if(A=!1,"undefined"==typeof WebAssembly)return A;try{const t=new Uint8Array([0,97,115,109,1,0,0,0,1,6,1,96,1,127,1,127,3,2,1,0,5,3,1,0,1,7,8,1,4,116,101,115,116,0,0,10,16,1,14,0,32,0,65,1,54,2,0,32,0,40,2,0,11]),e=new WebAssembly.Module(t);return 0!==new WebAssembly.Instance(e,{}).exports.test(4)&&(A=!0),A}catch(t){}return A}()}use(A){return this.__modules[A.name]=A,this.options.wasm&&this.has_wasm()&&A.wasm_fn?this[A.name]=A.wasm_fn:this[A.name]=A.fn,this}init(){return this.__init_promise?this.__init_promise:this.options.js||!this.options.wasm||this.has_wasm()?(this.__init_promise=Promise.all(Object.keys(this.__modules).map(A=>{const e=this.__modules[A];return this.options.wasm&&this.has_wasm()&&e.wasm_fn?this.__wasm[A]?null:WebAssembly.compile(t(e.wasm_src)).then(t=>{this.__wasm[A]=t}):null})).then(()=>this),this.__init_promise):Promise.reject(new Error('mathlib: only "wasm" was enabled, but it\\'s not supported'))}__reallocate(A){if(!this.__memory)return this.__memory=new WebAssembly.Memory({initial:Math.ceil(A/65536)}),this.__memory;const t=this.__memory.buffer.byteLength;return t<A&&this.__memory.grow(Math.ceil((A-t)/65536)),this.__memory}__instance(A,e,n){if(e&&this.__reallocate(e),!this.__wasm[A]){const e=this.__modules[A];this.__wasm[A]=new WebAssembly.Module(t(e.wasm_src))}if(!this.__cache[A]){const t={memoryBase:0,memory:this.__memory,tableBase:0,table:new WebAssembly.Table({initial:0,element:"anyfunc"})};this.__cache[A]=new WebAssembly.Instance(this.__wasm[A],{env:Object.assign(t,n||{})})}return this.__cache[A]}__align(A,t){const e=A%(t=t||8);return A+(e?t-e:0)}};function a(A,t,e,n,a,i){let r,s,o,g,I,h,B,Q,E,C,f,c,u,d;for(E=0;E<i;E++){for(h=E*a,B=E,Q=0,r=A[h],I=r*n[6],g=I,f=n[0],c=n[1],u=n[4],d=n[5],C=0;C<a;C++)s=A[h],o=s*f+r*c+g*u+I*d,I=g,g=o,r=s,e[Q]=g,Q++,h++;for(h--,Q--,B+=i*(a-1),r=A[h],I=r*n[7],g=I,s=r,f=n[2],c=n[3],C=a-1;C>=0;C--)o=s*f+r*c+g*u+I*d,I=g,g=o,r=s,s=A[h],t[B]=e[Q]+g,h--,Q--,B-=i}}function i(A,t,e,n){if(!n)return;const i=new Uint16Array(A.length),r=new Float32Array(Math.max(t,e)),s=function(A){A<.5&&(A=.5);const t=Math.exp(.527076)/A,e=Math.exp(-t),n=Math.exp(-2*t),a=(1-e)*(1-e)/(1+2*t*e-n),i=a*(t-1)*e,r=a*(t+1)*e,s=-a*n,o=2*e,g=-n;return new Float32Array([a,i,r,s,o,g,(a+i)/(1-o-g),(r+s)/(1-o-g)])}(n);a(A,i,r,s,t,e),a(i,A,r,s,e,t)}var r={name:"unsharp_mask",fn:function(A,t,e,n,a,r){let s,o,g,I,h;if(0===n||a<.5)return;a>2&&(a=2);const B=function(A,t,e){const n=t*e,a=new Uint16Array(n);let i,r,s,o;for(let g=0;g<n;g++)i=A[4*g],r=A[4*g+1],s=A[4*g+2],o=i>=r&&i>=s?i:r>=s&&r>=i?r:s,a[g]=o<<8;return a}(A,t,e),Q=new Uint16Array(B);i(Q,t,e,a);const E=n/100*4096+.5|0,C=r<<8,f=t*e;for(let i=0;i<f;i++)s=B[i],I=s-Q[i],Math.abs(I)>=C&&(o=s+(E*I+2048>>12),o=o>65280?65280:o,o=o<0?0:o,s=0!==s?s:1,g=(o<<12)/s|0,h=4*i,A[h]=A[h]*g+2048>>12,A[h+1]=A[h+1]*g+2048>>12,A[h+2]=A[h+2]*g+2048>>12)},wasm_fn:function(A,t,e,n,a,i){if(0===n||a<.5)return;a>2&&(a=2);const r=t*e,s=4*r,o=2*r,g=2*r,I=4*Math.max(t,e),h=s,B=h+o,Q=B+g,E=Q+g,C=E+I,f=this.__instance("unsharp_mask",s+o+2*g+I+32,{exp:Math.exp}),c=new Uint32Array(A.buffer);new Uint32Array(this.__memory.buffer).set(c);let u=f.exports.hsv_v16||f.exports._hsv_v16;if(!u)throw new Error("WASM hsv_v16 function is not available");if(u(0,h,t,e),u=f.exports.blurMono16||f.exports._blurMono16,!u)throw new Error("WASM blurMono16 function is not available");if(u(h,B,Q,E,C,t,e,a),u=f.exports.unsharp||f.exports._unsharp,!u)throw new Error("WASM unsharp function is not available");u(0,0,h,B,t,e,n,i),c.set(new Uint32Array(this.__memory.buffer,0,r))},wasm_src:"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"},s={filter:{box:{win:.5,fn:A=>(A<0&&(A=-A),A<.5?1:0)},hamming:{win:1,fn(A){if(A<0&&(A=-A),A>=1)return 0;if(A<1.1920929e-7)return 1;const t=A*Math.PI;return Math.sin(t)/t*(.54+.46*Math.cos(t/1))}},lanczos2:{win:2,fn(A){if(A<0&&(A=-A),A>=2)return 0;if(A<1.1920929e-7)return 1;const t=A*Math.PI;return Math.sin(t)/t*Math.sin(t/2)/(t/2)}},lanczos3:{win:3,fn(A){if(A<0&&(A=-A),A>=3)return 0;if(A<1.1920929e-7)return 1;const t=A*Math.PI;return Math.sin(t)/t*Math.sin(t/3)/(t/3)}},mks2013:{win:2.5,fn:A=>(A<0&&(A=-A),A>=2.5?0:A>=1.5?-.125*(A-2.5)*(A-2.5):A>=.5?.25*(4*A*A-11*A+7):1.0625-1.75*A*A)}}};function o(A){return Math.round(16383*A)}function g(A,t,e,n,a){const i=s.filter[A].fn,r=1/n,g=Math.min(1,n),I=s.filter[A].win/g;let h,B,Q,E,C,f,c,u,d,l,w,m,y,_,b,D,M;const p=Math.floor(2*(I+1)),G=new Int16Array((p+2)*e);let U=0;const F=!G.subarray||!G.set;for(h=0;h<e;h++){for(B=(h+.5)*r+a,Q=Math.max(0,Math.floor(B-I)),E=Math.min(t-1,Math.ceil(B+I)),C=E-Q+1,f=new Float32Array(C),c=new Int16Array(C),u=0,d=Q,l=0;d<=E;d++,l++)w=i((d+.5-B)*g),u+=w,f[l]=w;for(m=0,l=0;l<f.length;l++)y=f[l]/u,m+=y,c[l]=o(y);for(c[e>>1]+=o(1-m),_=0;_<c.length&&0===c[_];)_++;if(_<c.length){for(b=c.length-1;b>0&&0===c[b];)b--;if(D=Q+_,M=b-_+1,G[U++]=D,G[U++]=M,F)for(l=_;l<=b;l++)G[U++]=c[l];else G.set(c.subarray(_,b+1),U),U+=M}else G[U++]=0,G[U++]=0}return G}function I(A){return A<0?0:A>255?255:A}function h(A){return A>=0?A:0}var B=!0;try{B=1===new Uint32Array(new Uint8Array([1,0,0,0]).buffer)[0]}catch(G){}function Q(A,t,e){if(B)t.set(function(A){return new Uint8Array(A.buffer,0,A.byteLength)}(A),e);else for(let n=e,a=0;a<A.length;a++){const e=A[a];t[n++]=255&e,t[n++]=e>>8&255}}var E={name:"resize",fn:function(A){const t=A.src,e=A.width,n=A.height,a=A.toWidth,i=A.toHeight,r=A.scaleX||A.toWidth/A.width,s=A.scaleY||A.toHeight/A.height,o=A.offsetX||0,B=A.offsetY||0,Q=A.dest||new Uint8Array(a*i*4),E=void 0===A.filter?"mks2013":A.filter,C=g(E,e,a,r,o),f=g(E,n,i,s,B),c=new Uint16Array(a*n*4);return!function(A,t,e){let n=3;const a=t*e*4|0;for(;n<a;){if(255!==A[n])return!0;n=n+4|0}return!1}(t,e,n)?(function(A,t,e,n,a,i){let r,s,o,g,I,B,Q,E,C,f,c,u=0,d=0;for(C=0;C<n;C++){for(I=0,f=0;f<a;f++){for(B=i[I++],Q=i[I++],E=u+4*B|0,r=s=o=g=0;Q>0;Q--)c=i[I++],g=g+c*A[E+3]|0,o=o+c*A[E+2]|0,s=s+c*A[E+1]|0,r=r+c*A[E]|0,E=E+4|0;t[d+3]=h(g>>7),t[d+2]=h(o>>7),t[d+1]=h(s>>7),t[d]=h(r>>7),d=d+4*n|0}d=4*(C+1)|0,u=(C+1)*e*4|0}}(t,c,e,n,a,C),function(A,t,e,n,a,i){let r,s,o,g,h,B,Q,E,C,f,c,u=0,d=0;for(C=0;C<n;C++){for(h=0,f=0;f<a;f++){for(B=i[h++],Q=i[h++],E=u+4*B|0,r=s=o=g=0;Q>0;Q--)c=i[h++],g=g+c*A[E+3]|0,o=o+c*A[E+2]|0,s=s+c*A[E+1]|0,r=r+c*A[E]|0,E=E+4|0;r>>=7,s>>=7,o>>=7,g>>=7,t[d+3]=I(g+8192>>14),t[d+2]=I(o+8192>>14),t[d+1]=I(s+8192>>14),t[d]=I(r+8192>>14),d=d+4*n|0}d=4*(C+1)|0,u=(C+1)*e*4|0}}(c,Q,n,a,i,f),function(A,t,e){let n=3;const a=t*e*4|0;for(;n<a;)A[n]=255,n=n+4|0}(Q,a,i)):(function(A,t,e,n,a,i){let r,s,o,g,I,B,Q,E,C,f,c,u,d=0,l=0;for(f=0;f<n;f++){for(B=0,c=0;c<a;c++){for(Q=i[B++],E=i[B++],C=d+4*Q|0,r=s=o=g=0;E>0;E--)u=i[B++],I=A[C+3],g=g+u*I|0,o=o+u*A[C+2]*I|0,s=s+u*A[C+1]*I|0,r=r+u*A[C]*I|0,C=C+4|0;o=o/255|0,s=s/255|0,r=r/255|0,t[l+3]=h(g>>7),t[l+2]=h(o>>7),t[l+1]=h(s>>7),t[l]=h(r>>7),l=l+4*n|0}l=4*(f+1)|0,d=(f+1)*e*4|0}}(t,c,e,n,a,C),function(A,t,e,n,a,i){let r,s,o,g,h,B,Q,E,C,f,c,u=0,d=0;for(C=0;C<n;C++){for(h=0,f=0;f<a;f++){for(B=i[h++],Q=i[h++],E=u+4*B|0,r=s=o=g=0;Q>0;Q--)c=i[h++],g=g+c*A[E+3]|0,o=o+c*A[E+2]|0,s=s+c*A[E+1]|0,r=r+c*A[E]|0,E=E+4|0;r>>=7,s>>=7,o>>=7,g>>=7,g=I(g+8192>>14),g>0&&(r=255*r/g|0,s=255*s/g|0,o=255*o/g|0),t[d+3]=g,t[d+2]=I(o+8192>>14),t[d+1]=I(s+8192>>14),t[d]=I(r+8192>>14),d=d+4*n|0}d=4*(C+1)|0,u=(C+1)*e*4|0}}(c,Q,n,a,i,f)),Q},wasm_fn:function(A){const t=A.src,e=A.width,n=A.height,a=A.toWidth,i=A.toHeight,r=A.scaleX||A.toWidth/A.width,s=A.scaleY||A.toHeight/A.height,o=A.offsetX||0,I=A.offsetY||0,h=A.dest||new Uint8Array(a*i*4),B=void 0===A.filter?"mks2013":A.filter,E=g(B,e,a,r,o),C=g(B,n,i,s,I),f=Math.max(t.byteLength,h.byteLength),c=this.__align(0+f),u=n*a*4*2,d=this.__align(c+u),l=this.__align(d+E.byteLength),w=l+C.byteLength,m=this.__instance("resize",w),y=new Uint8Array(this.__memory.buffer),_=new Uint32Array(this.__memory.buffer),b=new Uint32Array(t.buffer);_.set(b),Q(E,y,d),Q(C,y,l);const D=m.exports.convolveHV||m.exports._convolveHV;if(!D)throw new Error("WASM resize function is not available");return!function(A,t,e){let n=3;const a=t*e*4|0;for(;n<a;){if(255!==A[n])return!0;n=n+4|0}return!1}(t,e,n)?(D(d,l,c,e,n,a,i,0),function(A,t,e){let n=3;const a=t*e*4|0;for(;n<a;)A[n]=255,n=n+4|0}(h,a,i)):D(d,l,c,e,n,a,i,1),new Uint32Array(h.buffer).set(new Uint32Array(this.__memory.buffer,0,i*a)),h},wasm_src:"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"},C=class extends n{constructor(A){const t=A||[],e={js:t.indexOf("js")>=0,wasm:t.indexOf("wasm")>=0};super(e),this.features={js:e.js,wasm:e.wasm&&this.has_wasm()},this.use(r),this.use(E)}resizeAndUnsharp(A){const t=this.resize(A);return A.unsharpAmount&&this.unsharp_mask(t,A.toWidth,A.toHeight,A.unsharpAmount,A.unsharpRadius,A.unsharpThreshold),t}},f="/9j/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAYAAAAAAAD/4AAQskZJRgABAQAAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/wAALCAACAAMBAREA/8QAFAABAAAAAAAAAAAAAAAAAAAACf/EABsQAAMBAQADAAAAAAAAAAAAAAECAwQFABEx/9oACAEBAAA/AC06fW6va0ps7PT179E88MiV02arrCEkjGQZiSEnKc5ovxURVHoADz//2Q==",c={canvas:!1,offscreen_canvas:!1,may_be_worker:!1,create_image_bitmap:!1,safari_put_image_data_fix:!1,bug_canvas_orientation_region:!0,bug_image_bitmap_orientation_region:!0,cib_resize:!1},u=!1,d=null,l={willReadFrequently:!0};function w(){if("undefined"==typeof document||!document.createElement)return!1;try{const A=document.createElement("canvas");A.width=2,A.height=1;const t=A.getContext("2d",l);let e=t.createImageData(2,1);return e.data[0]=12,e.data[1]=23,e.data[2]=34,e.data[3]=255,e.data[4]=45,e.data[5]=56,e.data[6]=67,e.data[7]=255,t.putImageData(e,0,0),e=t.getImageData(0,0,2,1),12===e.data[0]&&23===e.data[1]&&34===e.data[2]&&255===e.data[3]&&45===e.data[4]&&56===e.data[5]&&67===e.data[6]&&255===e.data[7]}catch(G){return!1}}function m(){if("undefined"==typeof OffscreenCanvas)return!1;try{const A=new OffscreenCanvas(2,1).getContext("2d",l);let t=A.createImageData(2,1);return t.data[0]=12,t.data[1]=23,t.data[2]=34,t.data[3]=255,t.data[4]=45,t.data[5]=56,t.data[6]=67,t.data[7]=255,A.putImageData(t,0,0),t=A.getImageData(0,0,2,1),12===t.data[0]&&23===t.data[1]&&34===t.data[2]&&255===t.data[3]&&45===t.data[4]&&56===t.data[5]&&67===t.data[6]&&255===t.data[7]}catch(G){return!1}}function y(){return"undefined"!=typeof createImageBitmap}function _(){if(u)return Promise.resolve(Object.assign({},c));if(d)return d.then(()=>Object.assign({},c));c.canvas=w(),c.offscreen_canvas=m(),c.may_be_worker="undefined"!=typeof Worker&&"undefined"!=typeof URL&&!!URL.createObjectURL,c.create_image_bitmap=y(),c.safari_put_image_data_fix=function(){try{return!!("undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.indexOf("Safari")>=0&&navigator.userAgent.indexOf("Chrome")<0)}catch(G){return!1}}();const A=Promise.resolve().then(()=>{if(m()&&y()&&"undefined"!=typeof Blob&&"undefined"!=typeof atob){const A=atob(f),t=new Uint8Array(A.length);for(let e=0;e<A.length;e++)t[e]=A.charCodeAt(e);return createImageBitmap(new Blob([t],{type:"image/jpeg"})).then(A=>{const t=new OffscreenCanvas(1,1);try{const e=t.getContext("2d",l);return e.drawImage(A,1,1,1,1,0,0,1,1),e.getImageData(0,0,1,1).data[0]<240}finally{A.close()}})}return!w()||"undefined"==typeof Image||new Promise(A=>{const t=new Image;t.onload=()=>{try{const e=document.createElement("canvas");e.width=1,e.height=1;const n=e.getContext("2d",l);n.drawImage(t,1,1,1,1,0,0,1,1),A(n.getImageData(0,0,1,1).data[0]<240)}catch(G){A(!0)}},t.onerror=()=>A(!0),t.src=\`data:image/jpeg;base64,\${f}\`})}).catch(()=>!0).then(A=>{c.bug_canvas_orientation_region=A}).catch(()=>{}),t=Promise.resolve().then(()=>{if(!c.create_image_bitmap&&!y())return!0;if("undefined"==typeof Blob||"undefined"==typeof atob)return!0;const A=m(),t=w();if(!A&&!t)return!0;const e=atob(f),n=new Uint8Array(e.length);for(let a=0;a<e.length;a++)n[a]=e.charCodeAt(a);return createImageBitmap(new Blob([n],{type:"image/jpeg"})).then(t=>createImageBitmap(t,1,1,1,1).then(e=>{let n;A?n=new OffscreenCanvas(1,1):(n=document.createElement("canvas"),n.width=1,n.height=1);try{const A=n.getContext("2d",l);return A.drawImage(e,0,0),1!==e.width||1!==e.height||A.getImageData(0,0,1,1).data[0]<240}finally{t.close(),e.close()}},()=>(t.close(),!0)))}).catch(()=>!0).then(A=>{c.bug_image_bitmap_orientation_region=A}).catch(()=>{}),e=Promise.resolve().then(()=>{if(!y())return!1;const A=20;let t;if(c.canvas||w())t=document.createElement("canvas"),t.width=A,t.height=A;else{if(!c.offscreen_canvas&&!m())return!1;t=new OffscreenCanvas(A,A),t.getContext("2d",l).clearRect(0,0,A,A)}return createImageBitmap(t,0,0,A,A,{resizeWidth:5,resizeHeight:5,resizeQuality:"high"}).then(A=>{const e=5===A.width&&!!A.close;return A.close&&A.close(),t=null,e})}).catch(()=>!1).then(A=>{c.cib_resize=A}).catch(()=>{});return d=Promise.all([A,t,e]).then(()=>(u=!0,d=null,Object.assign({},c)),A=>{throw d=null,A})}var b=self,D=null;function M(A,t){return D||(D=new C(A.features)),D.resizeAndUnsharp(t)}function p(A){if("bitmap"===A.job.kind)return void function(A,t){let e=new OffscreenCanvas(t.width,t.height);const n=e.getContext("2d",{willReadFrequently:!0});n.drawImage(t.src,0,0);const a=n.getImageData(0,0,t.width,t.height).data;e.width=e.height=0,e=null,t.src.close();const i=M(A,{src:a,width:t.width,height:t.height,toWidth:t.toWidth,toHeight:t.toHeight,scaleX:t.scaleX,scaleY:t.scaleY,offsetX:t.offsetX,offsetY:t.offsetY,filter:t.filter,unsharpAmount:t.unsharpAmount,unsharpRadius:t.unsharpRadius,unsharpThreshold:t.unsharpThreshold});b.postMessage({kind:"array",data:i},[i.buffer])}(A,A.job);const t=M(A,A.job);b.postMessage({kind:"array",data:t},[t.buffer])}b.onmessage=function(A){Promise.resolve().then(()=>function(A){switch(A.method){case"get_supported_features":return _().then(A=>{b.postMessage({data:A})});case"resize":return p(A),Promise.resolve();default:return Promise.reject(new Error(\`Unknown worker method: \${A.method}\`))}}(A.data)).catch(A=>{b.postMessage({err:A})})}}();
//# sourceURL=pica-inline-worker.js`,Vi=1;typeof navigator!="undefined"&&(Vi=Math.min(navigator.hardwareConcurrency||1,4));var Kl={tile:1024,concurrency:Vi,features:["js","wasm","ww"],idle:2e3},cr={filter:"mks2013",unsharpAmount:0,unsharpRadius:0,unsharpThreshold:0},Mt={willReadFrequently:!0},Zl=class{constructor(e){ve(this,"options",void 0),ve(this,"__limit",void 0),ve(this,"resize_features",void 0),ve(this,"__workersPool",void 0),ve(this,"capabilities",void 0),ve(this,"__requested_features",void 0),ve(this,"__mathlib",void 0),ve(this,"__initPromise",void 0),this.options=Object.assign({},Kl,e||{}),(this.options.features.indexOf("ww")>=0||this.options.features.indexOf("all")>=0)&&this.options.workerURL,this.__limit=Gl(this.options.concurrency),this.resize_features={js:!1,wasm:!1,cib:!1,ww:!1},this.__workersPool=null,this.capabilities={worker:!1,ww_offscreen_canvas:!1,canvas:!1,offscreen_canvas:!1,may_be_worker:!1,create_image_bitmap:!1,safari_put_image_data_fix:!1,bug_canvas_orientation_region:!0,bug_image_bitmap_orientation_region:!0,cib_resize:!1},this.__requested_features=[],this.__mathlib=null}init(){return this.__initPromise?this.__initPromise:(this.__initPromise=this.__init(),this.__initPromise)}__init(){var e=this;return Je(function*(){let t=e.options.features.slice();t.indexOf("all")>=0&&(t=["cib","wasm","js","ww"]),e.__requested_features=t,e.__mathlib=new Ll(t);let r=yield ql();if(Object.assign(e.capabilities,r),e.capabilities.cib_resize&&t.indexOf("cib")>=0&&(e.resize_features.cib=!0),e.capabilities.may_be_worker&&t.indexOf("ww")>=0&&Xi&&(e.__workersPool=new Ul(()=>e.__createWorkerSlot(),e.options.idle)),e.__workersPool)try{let o=yield e.__invokeWorker("get_supported_features"),l=o&&o.data;l&&(e.capabilities.worker=!0,e.resize_features.ww=!0,e.capabilities.ww_offscreen_canvas=!!l.offscreen_canvas)}catch(o){}let a=yield e.__mathlib.init();return Object.assign(e.resize_features,a.features),e})()}createCanvas(e,t,r){if(r&&this.capabilities.offscreen_canvas)return new OffscreenCanvas(e,t);if(this.capabilities.canvas){let a=document.createElement("canvas");return a.width=e,a.height=t,a}if(this.capabilities.ww_offscreen_canvas)return new OffscreenCanvas(e,t);throw new Error("Pica: cannot create canvas")}__createWorkerSlot(){if(this.options.workerURL){let e=new Worker(String(this.options.workerURL));return{value:e,destroy(){e.terminate()}}}{let e=window.URL.createObjectURL(new Blob([Xi],{type:"text/javascript"})),t=new Worker(e);return{value:t,destroy(){if(t.terminate(),typeof window!="undefined"){var r,a;(r=window.URL)===null||r===void 0||(a=r.revokeObjectURL)===null||a===void 0||a.call(r,e)}}}}}__invokeWorker(e,t,r,a){return new Promise((o,l)=>{let c=this.__workersPool.acquire();a&&a.cancelToken&&a.cancelToken.catch(u=>l(u)),c.value.onmessage=u=>{c.release(),u.data.err?l(u.data.err):o(u.data)},c.value.postMessage(Object.assign({method:e},t||{}),r||[])})}__invokeResize(e,t){var r=this;return Je(function*(){if(yield Promise.resolve(),!r.resize_features.ww){if(e.kind!=="array")throw new Error("Pica: resize tile data is missing");let o={src:e.src,width:e.width,height:e.height,toWidth:e.toWidth,toHeight:e.toHeight,scaleX:e.scaleX,scaleY:e.scaleY,offsetX:e.offsetX,offsetY:e.offsetY,filter:e.filter,unsharpAmount:e.unsharpAmount,unsharpRadius:e.unsharpRadius,unsharpThreshold:e.unsharpThreshold};return{kind:"array",data:r.__mathlib.resizeAndUnsharp(o)}}let a=[];return e.kind==="array"?a.push(e.src.buffer):a.push(e.src),r.__invokeWorker("resize",{job:e,features:r.__requested_features},a,t)})()}__extractTileData(e,t,r,a){if(this.resize_features.ww&&this.capabilities.ww_offscreen_canvas){this.debug("Create tile imageBitmap");let u=this.createCanvas(e.width,e.height,{preferOffscreen:!0});if(u.getContext("2d",Mt).drawImage(r.srcImageBitmap||t,e.x,e.y,e.width,e.height,0,0,e.width,e.height),!("transferToImageBitmap"in u))throw new Error("Pica: offscreen canvas is not available for worker transfer");return Object.assign({},a,{kind:"bitmap",src:u.transferToImageBitmap()})}if(Qi(t))return r.srcCtx||(r.srcCtx=t.getContext("2d",Mt)),this.debug("Get tile pixel data"),Object.assign({},a,{kind:"array",src:r.srcCtx.getImageData(e.x,e.y,e.width,e.height).data});this.debug("Draw tile imageBitmap/image to temporary canvas");let o=this.createCanvas(e.width,e.height,{preferOffscreen:!0}),l=o.getContext("2d",Mt);l.globalCompositeOperation="copy",l.drawImage(r.srcImageBitmap||t,e.x,e.y,e.width,e.height,0,0,e.width,e.height),this.debug("Get tile pixel data");let c=l.getImageData(0,0,e.width,e.height).data;return o.width=o.height=0,Object.assign({},a,{kind:"array",src:c})}__landTileData(e,t,r){if(t.kind==="bitmap")return r.toCtx.drawImage(t.data,e.toX,e.toY),t.data.close(),null;this.debug("Draw tile");let a=r.toCtx.createImageData(e.toWidth,e.toHeight);return a.data.set(t.data),this.capabilities.safari_put_image_data_fix?r.toCtx.putImageData(a,e.toX,e.toY,e.toInnerX-e.toX,e.toInnerY-e.toY,e.toInnerWidth+1e-5,e.toInnerHeight+1e-5):r.toCtx.putImageData(a,e.toX,e.toY,e.toInnerX-e.toX,e.toInnerY-e.toY,e.toInnerWidth,e.toInnerHeight),null}__tileAndResize(e,t,r,a){var o=this;return Je(function*(){let l={srcCtx:null,srcImageBitmap:null,isImageBitmapReused:!1,toCtx:null},c=p=>o.__limit(Je(function*(){if(a.canceled)return a.cancelToken;let g={width:p.width,height:p.height,toWidth:p.toWidth,toHeight:p.toHeight,scaleX:p.scaleX,scaleY:p.scaleY,offsetX:p.offsetX,offsetY:p.offsetY,filter:r.filter,unsharpAmount:r.unsharpAmount,unsharpRadius:r.unsharpRadius,unsharpThreshold:r.unsharpThreshold};o.debug("Invoke resize math");let B=yield o.__extractTileData(p,e,l,g);o.debug("Invoke resize math");let x=yield o.__invokeResize(B,a);return a.canceled?a.cancelToken:o.__landTileData(p,x,l)}));if(yield Promise.resolve(),l.toCtx=t.getContext("2d",Mt),!Qi(e))if(Oi(e))l.srcImageBitmap=e,l.isImageBitmapReused=!0;else if(ta(e)){if(o.capabilities.create_image_bitmap){o.debug("Decode image via createImageBitmap");try{l.srcImageBitmap=yield createImageBitmap(e)}catch(p){}}}else throw new Error('Pica: ".from" should be Image, Canvas or ImageBitmap');if(a.canceled)return a.cancelToken;o.debug("Calculate tiles");let u=Xl({width:r.width,height:r.height,srcTileSize:o.options.tile,toWidth:r.toWidth,toHeight:r.toHeight,destTileBorder:Math.ceil(Math.max(3,2.5*r.unsharpRadius|0))}).map(p=>c(p));function d(p){p.srcImageBitmap&&(p.isImageBitmapReused||p.srcImageBitmap.close(),p.srcImageBitmap=null)}o.debug("Process tiles");try{return yield Promise.all(u),o.debug("Finished!"),d(l),t}catch(p){throw d(l),p}})()}__planStagesAndResize(e,t,r,a){var o=this;return Je(function*(){let l=e,c=r.width,u=r.height,d=$l(r.width,r.height,r.toWidth,r.toHeight,o.options.tile);for(;d.length>0;){if(a.canceled)return a.cancelToken;let[p,g]=d.shift(),B=d.length===0,x;B||!Gi(r.filter)?x=r.filter:r.filter==="box"?x="box":x="hamming";let y=aa(aa({},r),{},{filter:x,width:c,height:u,toWidth:p,toHeight:g}),S=B?t:o.createCanvas(p,g,{preferOffscreen:!0}),k=l!==e?l:void 0;try{yield o.__tileAndResize(l,S,y,a)}finally{k&&(k.width=k.height=0)}l=S,c=p,u=g}return t})()}__resizeViaCreateImageBitmap(e,t,r,a){var o=this;return Je(function*(){var l;let c=t.getContext("2d",Mt);o.debug("Resize via createImageBitmap()");let u=yield createImageBitmap(e,{resizeWidth:r.toWidth,resizeHeight:r.toHeight,resizeQuality:Nl((l=Hl(r.filter))!==null&&l!==void 0?l:3)});if(a.canceled)return a.cancelToken;if(!r.unsharpAmount)return c.drawImage(u,0,0),u.close(),c=null,o.debug("Finished!"),t;o.debug("Unsharp result");let d=o.createCanvas(r.toWidth,r.toHeight),p=d.getContext("2d",Mt);p.drawImage(u,0,0),u.close();let g=p.getImageData(0,0,r.toWidth,r.toHeight);return o.__mathlib.unsharp_mask(g.data,r.toWidth,r.toHeight,r.unsharpAmount,r.unsharpRadius,r.unsharpThreshold),c.putImageData(g,0,0),d.width=d.height=0,g=p=d=c=null,o.debug("Finished!"),t})()}resize(e,t,r){var a=this;return Je(function*(){a.debug("Start resize...");let o={};r&&Object.assign(o,r);let l=o.filter||cr.filter;if(Object.prototype.hasOwnProperty.call(o,"quality")){let d=o.quality;if(typeof d!="number"||d<0||d>3)throw new Error(`Pica: .quality should be [0..3], got ${d}`);l=Ui(d)}let c={filter:l,unsharpAmount:o.unsharpAmount||cr.unsharpAmount,unsharpRadius:o.unsharpRadius||cr.unsharpRadius,unsharpThreshold:o.unsharpThreshold||cr.unsharpThreshold,width:ta(e)?e.naturalWidth:e.width,height:ta(e)?e.naturalHeight:e.height,toWidth:t.width,toHeight:t.height};if(c.unsharpRadius>2&&(c.unsharpRadius=2),t.width===0||t.height===0)return Promise.reject(new Error(`Invalid output size: ${t.width}x${t.height}`));let u={cancelToken:o.cancelToken,canceled:!1};if(u.cancelToken&&(u.cancelToken=u.cancelToken.then(d=>{throw u.canceled=!0,d},d=>{throw u.canceled=!0,d})),yield a.init(),u.canceled)return u.cancelToken;if(a.capabilities.bug_image_bitmap_orientation_region&&(ta(e)||Oi(e))){let d=a.createCanvas(c.width,c.height);d.getContext("2d",Mt).drawImage(e,0,0),e=d}if(a.resize_features.cib){if(Gi(c.filter))return a.__resizeViaCreateImageBitmap(e,t,c,u);a.debug("cib is enabled, but not supports provided filter, fallback to manual math")}if(!a.capabilities.canvas&&!a.capabilities.offscreen_canvas){let d=new Error("Pica: cannot use getImageData on canvas, make sure fingerprinting protection isn't enabled");throw d.code="ERR_GET_IMAGE_DATA",d}return a.__planStagesAndResize(e,t,c,u)})()}resizeBuffer(e){var t=this;return Je(function*(){let r=Object.assign({},cr,e);if(Object.prototype.hasOwnProperty.call(r,"quality")){let o=r.quality;if(typeof o!="number"||o<0||o>3)throw new Error(`Pica: .quality should be [0..3], got ${o}`);r.filter=Ui(o)}if(yield t.init(),!t.__mathlib)throw new Error("Pica: math library is not initialized");let a={src:r.src,width:r.width,height:r.height,toWidth:r.toWidth,toHeight:r.toHeight,dest:r.dest,scaleX:r.toWidth/r.width,scaleY:r.toHeight/r.height,offsetX:0,offsetY:0,filter:r.filter,unsharpAmount:r.unsharpAmount,unsharpRadius:r.unsharpRadius,unsharpThreshold:r.unsharpThreshold};return t.__mathlib.resizeAndUnsharp(a)})()}toBlob(e,t,r){return Je(function*(){if(t=t||"image/png","toBlob"in e&&e.toBlob)return new Promise(c=>{e.toBlob(u=>c(u),t,r)});if("convertToBlob"in e&&e.convertToBlob)return e.convertToBlob({type:t,quality:r});let a=atob(e.toDataURL(t,r).split(",")[1]),o=a.length,l=new Uint8Array(o);for(let c=0;c<o;c++)l[c]=a.charCodeAt(c);return new Blob([l],{type:t})})()}debug(...e){}};function zi(e){return new Zl(e)}var pn=Da(ji(),1),lo=Da(Ki(),1);var Zi=["benbenn.jpg","cezanne2.jpg","colorroses.jpg","colorswirls.jpg","coolcar.jpg","darkbrewery.jpg","dhuku.jpg","greentruck.jpg","frida.jpg","homer.jpg","keyssunset.jpg","lobsterpot.jpg","myersflat.jpg","myrtle.jpg","parrot.jpg","redrose.jpg","robert_s_duncanson.jpg","seurat.jpg","vangogh.jpg"];var cn="Press Start 2P",Jl="fonts/press-start-2p-latin-400-normal.woff2";var Ji={textOverlayEnable:"texton",textOverlayInput:"text",textOverlayFont:"font",textOverlaySize:"fsize",textOverlayScaleX:"fsx",textOverlayScaleY:"fsy",textOverlayLineHeight:"flh",textOverlayX:"fx",textOverlayY:"fy",textOverlayFg:"fg",textOverlayBg:"bg",textOverlayBox:"fbox"};function eo(e){return!isFinite(e)||e<=0?1:Math.min(e,16)}function ec(e){return!isFinite(e)||e<=0?1.2:Math.min(Math.max(e,.5),4)}function Se(e){return document.getElementById(e)}function tc(e,t){let r=0;return()=>{clearTimeout(r),r=setTimeout(e,t)}}function to(e){let t=parseInt((e||"").replace("#",""),16);return isNaN(t)?16777215:t>>16&255|t&65280|(t&255)<<16}function ro(e,t){if(!t||t.length==0)return e&16777215;let r=e&255,a=e>>8&255,o=e>>16&255,l=e&16777215,c=1/0;for(let u=0;u<t.length;u++){let d=t[u],p=r-(d&255),g=a-(d>>8&255),B=o-(d>>16&255),x=p*p*.3+g*g*.6+B*B*.1;x<c&&(c=x,l=d&16777215)}return l}var ze=class ze{constructor(t,r){this.onChange=t;this.onURLChange=r;this.enable=Se("textOverlayEnable");this.section=Se("textOverlaySection");this.input=Se("textOverlayInput");this.font=Se("textOverlayFont");this.size=Se("textOverlaySize");this.scaleX=Se("textOverlayScaleX");this.scaleY=Se("textOverlayScaleY");this.lineHeight=Se("textOverlayLineHeight");this.x=Se("textOverlayX");this.y=Se("textOverlayY");this.fg=Se("textOverlayFg");this.bg=Se("textOverlayBg");this.box=Se("textOverlayBox");this.defaults={};this.fontLoads=new Map;this.loadedFont="";for(let a of this.controls())this.defaults[a.id]=ze.value(a);for(let a of this.controls())a!==this.input&&a.addEventListener("change",()=>{this.syncVisibility(),this.requestFont(),this.onChange(),this.onURLChange(!0)});this.input.addEventListener("input",tc(()=>{this.onChange(),this.onURLChange(!0)},400)),this.loadLocalFont(),this.syncVisibility()}controls(){return[this.enable,this.input,this.font,this.size,this.scaleX,this.scaleY,this.lineHeight,this.x,this.y,this.fg,this.bg,this.box]}static value(t){return t instanceof HTMLInputElement&&t.type=="checkbox"?t.checked?"1":"0":t.value}static isFetchable(t){return!!t&&!ze.GENERIC_FONTS.has(t.toLowerCase())&&!ze.LOCAL_FONTS.has(t)}loadLocalFont(){if(typeof FontFace!="undefined")try{new FontFace(cn,"url("+Jl+")").load().then(r=>{document.fonts.add(r),this.enabled&&this.onChange()}).catch(r=>console.warn("Dithertron: could not load pixel font",r))}catch(t){console.warn("Dithertron: FontFace unavailable",t)}}requestFont(){let t=this.font.value;t!=this.loadedFont&&(this.loadedFont=t,ze.isFetchable(t)&&this.loadGoogleFont(t).then(()=>{this.enabled&&this.onChange()}))}loadGoogleFont(t){let r=this.fontLoads.get(t);if(r)return r;let a=new Promise(o=>{let l=document.createElement("link");l.rel="stylesheet",l.crossOrigin="anonymous",l.href="https://fonts.googleapis.com/css2?family="+t.trim().replace(/ /g,"+")+"&display=swap",l.onload=()=>{typeof document.fonts!="undefined"&&document.fonts.load?document.fonts.load('16px "'+t+'"').then(()=>o(),()=>o()):o()},l.onerror=()=>{console.warn("Dithertron: could not load font",t),o()},document.head.appendChild(l)});return this.fontLoads.set(t,a),a}get enabled(){return this.enable.checked}syncVisibility(){this.section.style.display=this.enable.checked?"":"none"}appendQueryParams(t){for(let r of this.controls()){let a=ze.value(r);a!=this.defaults[r.id]&&(t[Ji[r.id]]=a)}}applyQueryParams(t){var a;let r=!1;for(let o of this.controls()){let l=(a=t[Ji[o.id]])!=null?a:this.defaults[o.id];if(o instanceof HTMLSelectElement)o.value!=l&&Array.from(o.options).some(c=>c.value==l)&&(o.value=l,r=!0);else if(o instanceof HTMLInputElement&&o.type=="checkbox"){let c=l=="1"||l=="true";o.checked!=c&&(o.checked=c,r=!0)}else o.value!=l&&(o.value=l,r=!0)}return this.requestFont(),this.syncVisibility(),r}renderMask(t,r){let a=this.input.value;if(!this.enabled||!a||t<=0||r<=0)return null;let o=Math.max(1,Math.round(parseFloat(this.size.value)||8)),l=eo(parseFloat(this.scaleX.value)),c=eo(parseFloat(this.scaleY.value)),u=ec(parseFloat(this.lineHeight.value)),d=Math.round(parseFloat(this.x.value)||0),p=Math.round(parseFloat(this.y.value)||0),g=a.replace(/\r\n?/g,`
`).split(`
`),B=o*u,x=document.createElement("canvas");x.width=t,x.height=r;let y=x.getContext("2d",{willReadFrequently:!0});if(!y)return null;let S=this.font.value||cn,k=ze.GENERIC_FONTS.has(S.toLowerCase())?S:'"'+S+'"';y.font=o+"px "+k+", monospace",y.textBaseline="top",y.fillStyle="#fff";let R=new Uint8Array(t*r);if(this.box.checked){let Q=0;for(let X of g)Q=Math.max(Q,y.measureText(X).width);let G=Math.max(0,d-1),Z=Math.max(0,p-1),te=Math.min(t,d+Math.ceil(Q*l)+1),U=Math.min(r,p+Math.ceil((B*(g.length-1)+o*1.25)*c)+1);for(let X=Z;X<U;X++)for(let Y=G;Y<te;Y++)R[X*t+Y]=1}y.save(),y.scale(l,c);for(let Q=0;Q<g.length;Q++)y.fillText(g[Q],d/l,(p+Q*B)/c);y.restore();let H=y.getImageData(0,0,t,r).data;for(let Q=0;Q<R.length;Q++)H[Q*4+3]>=128&&(R[Q]=2);return R}apply(t,r,a,o){let l=this.renderMask(r,a);if(!l)return;let c=ro(to(this.fg.value),o),u=ro(to(this.bg.value),o),d=new Uint8ClampedArray(t.buffer);for(let p=0;p<l.length;p++){let g=l[p];if(g==0)continue;let B=g==2?c:u,x=p*4;d[x]=B&255,d[x+1]=B>>8&255,d[x+2]=B>>16&255,d[x+3]=255}}};ze.GENERIC_FONTS=new Set(["monospace","sans-serif","serif","cursive","fantasy","system-ui"]),ze.LOCAL_FONTS=new Set([cn]);var sa=ze;var rc=(()=>{let e=new Uint32Array(256);for(let t=0;t<256;t++){let r=t;for(let a=0;a<8;a++)r=r&1?3988292384^r>>>1:r>>>1;e[t]=r>>>0}return e})();function ac(e){let t=4294967295;for(let r=0;r<e.length;r++)t=rc[(t^e[r])&255]^t>>>8;return(t^4294967295)>>>0}function nc(e,t){let r=new Uint8Array(12+t.length),a=new DataView(r.buffer);a.setUint32(0,t.length);for(let o=0;o<4;o++)r[4+o]=e.charCodeAt(o);return r.set(t,8),a.setUint32(8+t.length,ac(r.subarray(4,8+t.length))),r}function ao(e,t){let r=new Uint8Array(e),a=new Uint8Array(9),o=new DataView(a.buffer),l=3779,c=Math.max(1,Math.round(l/(t||1)));o.setUint32(0,c),o.setUint32(4,l),a[8]=1;let u=nc("pHYs",a),d=[r.subarray(0,8)],p=8,g=!1;for(;p+8<=r.length;){let S=new DataView(r.buffer,r.byteOffset+p,4).getUint32(0),k=String.fromCharCode(r[p+4],r[p+5],r[p+6],r[p+7]),R=p+12+S;k==="pHYs"||(!g&&k==="IDAT"&&(d.push(u),g=!0),d.push(r.subarray(p,R))),p=R}g||d.push(u);let B=0;for(let S of d)B+=S.length;let x=new Uint8Array(B),y=0;for(let S of d)x.set(S,y),y+=S.length;return x}var Ae,ic=document.getElementById("brightSlider"),oc=document.getElementById("contrastSlider"),sc=document.getElementById("saturationSlider"),lc=document.getElementById("graySlider"),cc=document.getElementById("serpentineCheckbox"),hc=document.getElementById("noiseSlider"),la=document.getElementById("diffuseSlider"),ca=document.getElementById("orderedSlider"),uc=document.getElementById("diversitySlider"),hn=document.getElementById("imageUpload"),co=document.getElementById("srcimage"),Pt=document.getElementById("resizecanvas"),fr=document.getElementById("destcanvas"),un=class{constructor(){this.newWorker()}newWorker(){this.worker&&(this.worker.onmessage=()=>{}),this.worker=new Worker("./dist/worker.js"),this.worker.onmessage=t=>{var r=t.data;r!=null&&r.img!=null&&this.pixelsAvailable!=null&&(this.pixelsAvailable(r),this.lastPixels=r)}}setSettings(t){this.settings=t,this.worker.postMessage({cmd:"setSettings",data:t})}setSourceImage(t){this.worker.postMessage({cmd:"setSourceImage",data:t})}restart(){this.worker.postMessage({cmd:"restart"})}},V=new un,je=null,mr,pr,Le=null,fn=null,gr=!1,Ne=null,dr=-1,ho=[{name:"Floyd-Steinberg",kernel:gi},{name:"False Floyd",kernel:bi},{name:"Atkinson",kernel:xi},{name:"Sierra 2",kernel:Ci},{name:"Sierra Lite",kernel:vi},{name:"Stucki",kernel:yi},{name:"Two-D",kernel:Ii},{name:"Right",kernel:wi},{name:"Down",kernel:Ei},{name:"Double Down",kernel:Bi},{name:"Diagonal",kernel:_i},{name:"Diamond",kernel:Mi}],fc=[{id:"perceptual",name:"Perceptual"},{id:"hue",name:"Hue-Based"},{id:"dist",name:"Distance"},{id:"max",name:"Maximum"}],no=!1;function An(e){if(no)return;no=!0;let t=(e==null?void 0:e.message)||String(e);console.error("Canvas access error:",e),(t.includes("fingerprint")||t.includes("canvas")||t.includes("getImageData"))&&alert(`\u26A0\uFE0F Canvas Access Blocked

Dithertron cannot access canvas image data. This is usually caused by browser fingerprinting protection.

To fix this:
\u2022 Firefox: Disable 'Enhanced Tracking Protection' for this site (shield icon in address bar)
\u2022 Brave: Disable 'Block fingerprinting' in Shields settings
\u2022 Other browsers: Check privacy/security settings

Technical details: `+t)}function dc(){try{let e=document.createElement("canvas");e.width=e.height=1;let t=e.getContext("2d");return t.fillStyle="rgb(255, 0, 0)",t.fillRect(0,0,1,1),t.getImageData(0,0,1,1),!0}catch(e){return An(e),!1}}function mc(e){try{return new Uint32Array(e.getContext("2d").getImageData(0,0,e.width,e.height).data.buffer)}catch(t){throw An(t),t}}function pc(e,t){var r=e.getContext("2d"),a=r.createImageData(e.width,e.height),o=new Uint32Array(a.data.buffer);o.length==t.length?(o.set(t),r.putImageData(a,0,0)):console.log("drawRGBA(): array length mismatch")}function Ac(e,t,r,a,o){t*=1,r*=1;for(var l=new Uint8ClampedArray(e.buffer),c=0;c<l.length;c+=4){var u=l[c],d=l[c+1],p=l[c+2];if(a!=1){var g=.2989*u+.587*d+.114*p;u=g*(1-a)+u*a,d=g*(1-a)+d*a,p=g*(1-a)+p*a}l[c]=Math.pow(u*t,o)+r,l[c+1]=Math.pow(d*t,o)+r,l[c+2]=Math.pow(p*t,o)+r}}function pt(){var l;var e=mc(Pt);let t=(parseFloat(oc.value)-50)/100+1,r=(parseFloat(ic.value)-t*50)*(128/50),a=(parseFloat(sc.value)-50)/50+1;Ac(e,t,r,a,1),je==null||je.apply(e,Pt.width,Pt.height,(l=V.settings)==null?void 0:l.pal),V.setSourceImage(e),He()}function He(){var e=$("#diffuseTypeSelect")[0].selectedOptions[0];e&&(V.settings.ditherfn=ho[parseInt(e.value)].kernel);var e=$("#errorFuncSelect")[0].selectedOptions[0];e&&(V.settings.errfn=e.value),V.settings.diffuse=parseFloat(la.value)/100,V.settings.ordered=parseFloat(ca.value)/100,V.settings.noise=parseFloat(hc.value),V.settings.paletteDiversity=parseFloat(uc.value)/200+.75,V.settings.grayBias=parseFloat(lc.value)/100*3,V.settings.serpentine=cc.checked,gr&&Le&&(V.settings.pal=Le),V.setSettings(V.settings),V.restart()}function gc(){let e=Ae==null?void 0:Ae.getCroppedCanvas();!(e!=null&&e.width)||!(e!=null&&e.height)||zi().resize(e,Pt,{}).then(()=>{pt()}).catch(t=>{An(t)})}function bc(e){$("#targetFormatInfo").text(Oa(e)+(e.caveat?" *":"")).attr("title",e.caveat||"")}function uo(e){let t=e&255,r=e>>8&255,a=e>>16&255;return"#"+[t,r,a].map(o=>o.toString(16).padStart(2,"0")).join("")}function xc(e){let t=parseInt(e.replace("#",""),16);return t>>16&255|t&65280|(t&255)<<16|4278190080}function Cc(e){!Le||e<0||e>=Le.length||(Ne||(Ne=document.createElement("input"),Ne.type="color",Ne.style.position="fixed",Ne.style.left="-100px",document.body.appendChild(Ne),Ne.addEventListener("change",()=>{!Le||dr<0||!Ne||(Le[dr]=xc(Ne.value),gr=!0,$("#resetPaletteBtn").show(),fo(Le),He())})),dr=e,Ne.value=uo(Le[e]&16777215),Ne.click())}function vc(){gr=!1,dr=-1,fn&&(V.settings.pal=fn),$("#resetPaletteBtn").hide(),He()}function yc(){let e=V.settings;return!e||!e.reduce?!1:e.toNative!=="exportFrameBuffer"}function fo(e){var t=$("#paletteSwatches");t.empty(),(!gr||!Le)&&(Le=new Uint32Array(e));let r=Le;if(r&&r.length<64){let a=yc();r.forEach((o,l)=>{var c="rgb("+(o&255)+","+(o>>8&255)+","+(o>>16&255)+")",u=$('<span style="width:2em">&nbsp;</span>').css("background-color",c);a&&(u.css("cursor","pointer").attr("title","Palette entry "+l+" ("+uo(o)+") - click to change"),u.click(()=>Cc(l))),t.append(u)})}}function Ic(e){let t=document.getElementById("cropSize");if(!t)return;e=e||(Ae==null?void 0:Ae.getData());let r=Math.round(e==null?void 0:e.width)||0,a=Math.round(e==null?void 0:e.height)||0;t.textContent=r+" \xD7 "+a,t.style.display=r&&a?"block":"none"}function wc(e){let t=V.settings;return(e==null?void 0:e.naturalWidth)==t.width&&(e==null?void 0:e.naturalHeight)==t.height}function Ec(){console.log("Width and height exact match!"),Ae.clear(),Ae.disable(),Pt.getContext("2d").drawImage(co,0,0),pt()}function ua(e){Ae&&Ae.destroy();let t=V.settings,r=t.width*(t.scaleX||1)/t.height||4/3;Ae=new so.default(co,{viewMode:1,autoCropArea:1,initialAspectRatio:r,crop(a){Ic(a.detail),wc(Ae.getImageData())?Ec():gc()}}),Ae.replace(e),mo(),Ar()}function mo(){if(!Ae)return;let e=document.getElementById("lockAspect"),t=V.settings;e&&e.checked&&t?Ae.setAspectRatio(t.width*(t.scaleX||1)/t.height):Ae.setAspectRatio(NaN)}var Ht=null;function ur(e,t){$(e).slider("setValue",parseFloat(t)),e.value=t}function Bc(e){e.tiles?(Ht||(Ht={diffuse:la.value,ordered:ca.value}),ur(la,"0"),ur(ca,"50")):Ht&&(ur(la,Ht.diffuse),ur(ca,Ht.ordered),Ht=null)}function po(e){var t=e.conv!="DitheringCanvas";fn=new Uint32Array(e.pal),Le=null,gr=!1,dr=-1,$("#resetPaletteBtn").hide(),Bc(e),V.newWorker(),V.setSettings(e),V.restart(),bc(e),Pt.width=fr.width=e.width,Pt.height=fr.height=e.height;let r=e.scaleX||1;fr.style.aspectRatio=(e.width*r/e.height).toString(),$("#noiseSection").css("display",t?"flex":"none"),$("#diversitySection").css("display",e.reduce?"flex":"none"),$("#downloadNativeBtn").css("display",e.toNative?"inline":"none"),$("#gotoIDE").css("display",go()?"inline":"none"),Ae&&ua(Ae.url),Ar(),Nc(e)}function ha(){var e=mr||"image";try{e=e.split(".").shift()||"image"}catch(t){}return e+"-"+V.settings.id}function Ao(){var e=V.lastPixels;let t=V.settings.toNative;if(!t)return null;var r=Va[t];return e&&r&&r(e,V.settings)}function _c(){var e=Ao();if(e!=null){var t=new Blob([e],{type:"application/octet-stream"});(0,pn.saveAs)(t,ha()+".bin")}}function Mc(){fr.toBlob(e=>{e&&e.arrayBuffer().then(t=>{let r;try{r=ao(t,V.settings.scaleX||1)}catch(a){console.error("could not set PNG pixel aspect",a),r=new Uint8Array(t)}(0,pn.saveAs)(new Blob([r.buffer],{type:"image/png"}),ha()+".png")})},"image/png")}function Pc(e){var t="";if(e!=null){for(var r=new Array,a=0;a<256;++a)r[a]=String.fromCharCode(a);for(var o=e.length,a=0;a<o;a++)t+=r[e[a]]}return t}function go(){var e="getFileViewerCode_"+V.settings.id.replace(/[^a-z0-9]/g,"_"),t=Ja[e];return t}var Sc=8190,io="https://8bitworkshop.com",bo="http://localhost:8000",Zh=bo+"/dithertron/";function Dc(e){return e.split(".")[0]}function Rc(){if(window.location.hostname=="localhost"&&window.location.port=="8189")return bo;var e=$(document.forms.ideForm).attr("action");try{return new URL(e||io,window.location.href).origin}catch(t){return io}}function Tc(e){return e==null?new Uint8Array(0):e instanceof Uint8Array?e:Uint8Array.from(e)}async function kc(e,t){let r=lo.default.createInstance({name:"__"+e,version:2});var a=[];for(let o of t)await r.getItem(o.name)!=null&&a.push(o.name);if(a.length>0&&!confirm(`The following project files already exist in 8bitworkshop and will be replaced:

`+a.join(`
`)+`

Continue?`))return!1;for(let o of t)await r.setItem(o.name,o.data);return!0}function Fc(e){let t=new URLSearchParams;for(let r of e)t.append(r.name,r.value);return t.toString()}async function Lc(){function e(y,S,k){$('<input type="hidden"/>').attr("name",S).val(k).appendTo(y)}if(!confirm("Open code sample with image in 8bitworkshop?"))return;var t=V.settings.id.split(".")[0],r=document.forms.ideForm,a=$(r);a.empty(),t=="atari8"&&(t="atari8-800"),t=="cpc"&&(t="cpc.6128"),t=="sms"&&(t="sms-sms-libcv"),t=="sms-gg"&&(t="sms-gg-libcv");var o=t=="gb"?".sgb":".asm",l="viewer-"+ha()+o,c=ha()+".bin",u=go()();u=u.split("$DATAFILE").join(c);var d=Ao(),p=[{name:"platform",value:t},{name:"file0_name",value:l},{name:"file0_data",value:u},{name:"file0_type",value:"utf8"},{name:"file1_name",value:c},{name:"file1_data",value:btoa(Pc(d))},{name:"file1_type",value:"binary"}],g=(a.attr("action")||"")+"?"+Fc(p);let B=window.location.hostname=="localhost";if(B&&(r.action="http://localhost:8000/"),g.length>Sc&&!B){var x=Rc();if(window.location.origin!=x){if(!confirm("Warning: this image is too large to pass through the URL, so Dithertron would need to save the project files directly into 8bitworkshop's local storage. This only works when Dithertron is served from the same origin as the IDE ("+x+"), but this page is on "+window.location.origin+`.

Try the URL anyway?`))return}else try{if(!await kc(Dc(t),[{name:l,data:u},{name:c,data:Tc(d)}]))return;e(a,"platform",t),e(a,"file",l),a.submit();return}catch(y){console.log(y),console.warn("Could not save project files to 8bitworkshop local storage, falling back to URL.",y),a.empty()}}for(let y of p)e(a,y.name,y.value);a.submit()}function gn(e){$("#sourceName").text(e||"(none)")}function dn(e){e.type.startsWith("image/")&&(mr=e.name||"pasted.png",pr="",hn.value="",gn(mr),ua(URL.createObjectURL(e)))}function Qc(){let e=document.getElementById("dropOverlay"),t=0;["dragover","drop"].forEach(r=>{window.addEventListener(r,a=>{a.preventDefault()})}),window.addEventListener("dragenter",r=>{r.preventDefault(),t++,e.classList.add("dragover")}),window.addEventListener("dragleave",r=>{r.preventDefault(),--t<=0&&(t=0,e.classList.remove("dragover"))}),window.addEventListener("drop",r=>{var o,l;r.preventDefault(),t=0,e.classList.remove("dragover");let a=(l=(o=r.dataTransfer)==null?void 0:o.files)==null?void 0:l[0];a&&dn(a)}),window.addEventListener("paste",r=>{var o;let a=(o=r.clipboardData)==null?void 0:o.items;if(a){for(let l of Array.from(a))if(l.type.startsWith("image/")){let c=l.getAsFile();if(c){dn(c),r.preventDefault();break}}}})}var fa=[{key:"diffuse",id:"diffuseSlider",tileDefault:"0"},{key:"ordered",id:"orderedSlider",tileDefault:"50"},{key:"noise",id:"noiseSlider"},{key:"diversity",id:"diversitySlider"},{key:"bright",id:"brightSlider"},{key:"contrast",id:"contrastSlider"},{key:"saturation",id:"saturationSlider"},{key:"gray",id:"graySlider"},{key:"dither",id:"diffuseTypeSelect"},{key:"errfn",id:"errorFuncSelect"}],xo={};function Oc(){var e,t,r;for(let a of fa){let o=document.getElementById(a.id);xo[a.key]=o instanceof HTMLSelectElement?(t=(e=o.options[0])==null?void 0:e.value)!=null?t:"":(r=o.getAttribute("data-slider-value"))!=null?r:o.value}}function Co(e,t){return t.tiles&&e.tileDefault||xo[e.key]}function Uc(e,t){var a;let r=!1;for(let o of fa){let l=document.getElementById(o.id),c=(a=e[o.key])!=null?a:Co(o,t);l instanceof HTMLSelectElement?l.value!=c&&Array.from(l.options).some(u=>u.value==c)&&(l.value=c,r=!0):parseFloat(l.value)!=parseFloat(c)&&(ur(l,c),r=!0)}return r}var mn=!1;function Ar(e=!1){if(mn)return;let t={sys:V.settings.id,image:pr};for(let a of fa){let o=document.getElementById(a.id),l=Co(a,V.settings);(o instanceof HTMLSelectElement?o.value!=l:parseFloat(o.value)!=parseFloat(l))&&(t[a.key]=o.value)}je==null||je.appendQueryParams(t);let r="#"+$.param(t);r!=window.location.hash&&(e?history.replaceState(null,"",r):window.location.hash=r)}function oo(e=!1){let t=Gc(window.location.hash.substring(1)),r=jr[t.sys||Lt[0].id]||Lt[0],a=e?t.image||"seurat.jpg":t.image,o=!!a&&a!=pr;mn=!0;try{o&&(mr=pr=a,gn(a)),(e||r.id!=V.settings.id)&&po(r);let c=Uc(t,r);je!=null&&je.applyQueryParams(t)&&(c=!0),o?ua("images/"+a):c&&pt()}finally{mn=!1}e&&Ar(!0)}function Gc(e){e.startsWith("?")&&(e=e.substr(1));var t=e.split("&");if(!t||t.length==0)return{};for(var r={},a=0;a<t.length;++a){var o=t[a].split("=",2);o.length==1?r[o[0]]="":r[o[0]]=decodeURIComponent(o[1].replace(/\+/g," "))}return r}function Nc(e){let t=$("#targetFormatSelect");t.empty();let[r,a]=e.name.split(" ("),o=new Set,l=null;Lt.forEach(c=>{if(c==null)t.append($("<option disabled></option>"));else{let[u,d]=c.name.split(" ("),p=$("<option />").text(c.name).val(c.id);if(u==r)l||(l=$("<optgroup />").attr("label",r),t.append(l)),l.append(p);else if(!o.has(u)){let g=$("<option />").text(u).val(c.id);t.append(g)}o.add(u)}}),t.val(e.id)}function Hc(){if(window.addEventListener("load",function(){dc(),document.querySelector('input[type="file"]').addEventListener("change",function(t){var r=t.target,a=r.files&&r.files[0];a&&dn(a)}),Qc(),Zi.forEach(t=>{$('<a class="dropdown-item" href="#"></a>').text(t).appendTo("#examplesMenu")}),$("#examplesMenu").click(t=>{t.preventDefault();var r=$(t.target).text();mr=pr=r,gn(r),ua("images/"+r),hn.value=""}),ho.forEach((t,r)=>{var a=$("<option />").text(t.name).val(r);$("#diffuseTypeSelect").append(a)}),fc.forEach((t,r)=>{var a=$("<option />").text(t.name).val(t.id);$("#errorFuncSelect").append(a)}),V.pixelsAvailable=t=>{pc(fr,t.img),fo(t.pal)},je=new sa(pt,Ar),Oc(),oo(!0),window.addEventListener("hashchange",()=>oo()),$("#diffuseSlider").on("change",He),$("#orderedSlider").on("change",He),$("#noiseSlider").on("change",He),$("#diversitySlider").on("change",pt),$("#brightSlider").on("change",pt),$("#contrastSlider").on("change",pt),$("#saturationSlider").on("change",pt),$("#graySlider").on("change",He),$("#serpentineCheckbox").on("change",He),$("#resetButton").on("click",He),$("#diffuseTypeSelect").on("change",He),$("#targetFormatSelect").change(t=>{var r=t.target.selectedOptions[0];r&&po(jr[r.value])}),$("#errorFuncSelect").on("change",He);for(let t of fa)$("#"+t.id).on("change",()=>Ar(!0));$("#openImageBtn").click(()=>hn.click()),$("#downloadImageBtn").click(Mc),$("#downloadNativeBtn").click(_c),$("#gotoIDE").click(Lc),$("#lockAspect").on("change",mo),$("#resetPaletteBtn").click(vc)}),window.location.search=="?printmeta"){let t=function(){var r="";Lt.forEach(a=>{a&&(r+="* "+a.name+" - "+Oa(a)+`
`)}),console.log(r)};var e=t;t()}}Hc();export{V as dithertron,Hc as startUI};
/*! Bundled license information:

cropperjs/dist/cropper.js:
  (*!
   * Cropper.js v1.6.3
   * https://fengyuanchen.github.io/cropperjs
   *
   * Copyright 2015-present Chen Fengyuan
   * Released under the MIT license
   *
   * Date: 2026-08-23T09:24:57.458Z
   *)

localforage/dist/localforage.js:
  (*!
      localForage -- Offline Storage, Improved
      Version 1.9.0
      https://localforage.github.io/localForage
      (c) 2013-2017 Mozilla, Apache License 2.0
  *)

pica/dist/pica.mjs:
  (*!
  
  pica
  https://github.com/nodeca/pica
  
  *)
*/
//# sourceMappingURL=ui.js.map
