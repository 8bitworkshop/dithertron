var lo=Object.create;var kr=Object.defineProperty,co=Object.defineProperties,ho=Object.getOwnPropertyDescriptor,uo=Object.getOwnPropertyDescriptors,fo=Object.getOwnPropertyNames,gn=Object.getOwnPropertySymbols,mo=Object.getPrototypeOf,xn=Object.prototype.hasOwnProperty,po=Object.prototype.propertyIsEnumerable;var bn=(e,t,r)=>t in e?kr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,be=(e,t)=>{for(var r in t||(t={}))xn.call(t,r)&&bn(e,r,t[r]);if(gn)for(var r of gn(t))po.call(t,r)&&bn(e,r,t[r]);return e},xe=(e,t)=>co(e,uo(t));var rr=(e=>typeof require!="undefined"?require:typeof Proxy!="undefined"?new Proxy(e,{get:(t,r)=>(typeof require!="undefined"?require:t)[r]}):e)(function(e){if(typeof require!="undefined")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});var Ba=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(r){throw t=0,r}},Cn=(e,t)=>{for(var r in t)kr(e,r,{get:t[r],enumerable:!0})},Ao=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of fo(t))!xn.call(e,s)&&s!==r&&kr(e,s,{get:()=>t[s],enumerable:!(a=ho(t,s))||a.enumerable});return e};var _a=(e,t,r)=>(r=e!=null?lo(mo(e)):{},Ao(t||!e||!e.__esModule?kr(r,"default",{value:e,enumerable:!0}):r,e));var xi=Ba((qa,Ka)=>{(function(e,t){typeof qa=="object"&&typeof Ka!="undefined"?Ka.exports=t():typeof define=="function"&&define.amd?define(t):(e=typeof globalThis!="undefined"?globalThis:e||self,e.Cropper=t())})(qa,(function(){"use strict";function e(c,n){(n==null||n>c.length)&&(n=c.length);for(var o=0,i=Array(n);o<n;o++)i[o]=c[o];return i}function t(c){if(Array.isArray(c))return e(c)}function r(c,n){if(!(c instanceof n))throw new TypeError("Cannot call a class as a function")}function a(c,n){for(var o=0;o<n.length;o++){var i=n[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(c,x(i.key),i)}}function s(c,n,o){return n&&a(c.prototype,n),o&&a(c,o),Object.defineProperty(c,"prototype",{writable:!1}),c}function l(c,n,o){return(n=x(n))in c?Object.defineProperty(c,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):c[n]=o,c}function h(c){if(typeof Symbol!="undefined"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function u(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function d(c,n){var o=Object.keys(c);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(c);n&&(i=i.filter(function(b){return Object.getOwnPropertyDescriptor(c,b).enumerable})),o.push.apply(o,i)}return o}function A(c){for(var n=1;n<arguments.length;n++){var o=arguments[n]!=null?arguments[n]:{};n%2?d(Object(o),!0).forEach(function(i){l(c,i,o[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(o)):d(Object(o)).forEach(function(i){Object.defineProperty(c,i,Object.getOwnPropertyDescriptor(o,i))})}return c}function g(c){return t(c)||h(c)||P(c)||u()}function B(c,n){if(typeof c!="object"||!c)return c;var o=c[Symbol.toPrimitive];if(o!==void 0){var i=o.call(c,n||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(c)}function x(c){var n=B(c,"string");return typeof n=="symbol"?n:n+""}function I(c){"@babel/helpers - typeof";return I=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},I(c)}function P(c,n){if(c){if(typeof c=="string")return e(c,n);var o={}.toString.call(c).slice(8,-1);return o==="Object"&&c.constructor&&(o=c.constructor.name),o==="Map"||o==="Set"?Array.from(c):o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?e(c,n):void 0}}var k=typeof window!="undefined"&&typeof window.document!="undefined",T=k?window:{},H=k&&T.document.documentElement?"ontouchstart"in T.document.documentElement:!1,Q=k?"PointerEvent"in T:!1,G="cropper",Z="all",te="crop",U="move",X="zoom",Y="e",W="w",q="s",J="n",ae="ne",se="nw",me="se",Be="sw",ke="".concat(G,"-crop"),qe="".concat(G,"-disabled"),le="".concat(G,"-hidden"),ft="".concat(G,"-hide"),Ke="".concat(G,"-invisible"),Ze="".concat(G,"-modal"),ge="".concat(G,"-move"),De="".concat(G,"Action"),Je="".concat(G,"Preview"),Nt="crop",mr="move",pr="none",Ht="crop",$t="cropend",Xt="cropmove",Yt="cropstart",Ar="dblclick",ca=H?"touchstart":"mousedown",ha=H?"touchmove":"mousemove",ua=H?"touchend touchcancel":"mouseup",Le=Q?"pointerdown":ca,gr=Q?"pointermove":ha,Wt=Q?"pointerup pointercancel":ua,dt="ready",Mt="resize",St="wheel",mt="zoom",Vt="image/jpeg",br=/^(e|w|s|n|se|sw|ne|nw|all|crop|move|zoom)$/,xr=/^data:/,Cr=/^data:image\/jpeg;base64,/,pt=/\s+/,vr=/^(img|canvas)$/i,zt=200,jt=100,qt={viewMode:0,dragMode:Nt,initialAspectRatio:NaN,aspectRatio:NaN,data:null,preview:"",responsive:!0,restore:!0,checkCrossOrigin:!0,checkOrientation:!0,modal:!0,guides:!0,center:!0,highlight:!0,background:!0,autoCrop:!0,autoCropArea:.8,movable:!0,rotatable:!0,scalable:!0,zoomable:!0,zoomOnTouch:!0,zoomOnWheel:!0,wheelZoomRatio:.1,cropBoxMovable:!0,cropBoxResizable:!0,toggleDragModeOnDblclick:!0,minCanvasWidth:0,minCanvasHeight:0,minCropBoxWidth:0,minCropBoxHeight:0,minContainerWidth:zt,minContainerHeight:jt,ready:null,cropstart:null,cropmove:null,cropend:null,crop:null,zoom:null},Ir='<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>',yr=Number.isNaN||T.isNaN,Pt=Number.isFinite||T.isFinite;function z(c){return typeof c=="number"&&!yr(c)}var wr=function(n){return n>0&&n<1/0};function Kt(c){return typeof c=="undefined"}function Re(c){return I(c)==="object"&&c!==null}var Er=Object.prototype.hasOwnProperty;function et(c){if(!Re(c))return!1;try{var n=c.constructor,o=n.prototype;return n&&o&&Er.call(o,"isPrototypeOf")}catch(i){return!1}}function ne(c){return typeof c=="function"}var fa=Array.prototype.slice;function Br(c){return Array.from?Array.from(c):fa.call(c)}function ce(c,n){return c&&ne(n)&&(Array.isArray(c)||z(c.length)?Br(c).forEach(function(o,i){n.call(c,o,i,c)}):Re(c)&&Object.keys(c).forEach(function(o){n.call(c,c[o],o,c)})),c}var ie=Object.assign||function(n){for(var o=arguments.length,i=new Array(o>1?o-1:0),b=1;b<o;b++)i[b-1]=arguments[b];return Re(n)&&i.length>0&&i.forEach(function(p){Re(p)&&Object.keys(p).forEach(function(C){n[C]=p[C]})}),n},da=/\.\d*(?:0|9){12}\d*$/;function tt(c){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1e11;return da.test(c)?Math.round(c*n)/n:c}var ma=/^width|height|left|top|marginLeft|marginTop$/;function Ue(c,n){var o=c.style;ce(n,function(i,b){ma.test(b)&&z(i)&&(i="".concat(i,"px")),o[b]=i})}function pa(c,n){return c.classList?c.classList.contains(n):c.className.split(pt).indexOf(n)>-1}function fe(c,n){if(n){if(z(c.length)){ce(c,function(i){fe(i,n)});return}if(c.classList){c.classList.add(n);return}var o=c.className.trim();o?o.indexOf(n)<0&&(c.className="".concat(o," ").concat(n)):c.className=n}}function Te(c,n){if(n){if(z(c.length)){ce(c,function(o){Te(o,n)});return}if(c.classList){c.classList.remove(n);return}c.className.indexOf(n)>=0&&(c.className=c.className.split(pt).filter(function(o){return o&&o!==n}).join(" "))}}function rt(c,n,o){if(n){if(z(c.length)){ce(c,function(i){rt(i,n,o)});return}o?fe(c,n):Te(c,n)}}var Aa=/([a-z\d])([A-Z])/g;function Dt(c){return typeof c=="string"?c.replace(Aa,"$1-$2").toLowerCase():""}function Zt(c,n){return Re(c[n])?c[n]:c.dataset?c.dataset[n]:c.getAttribute("data-".concat(Dt(n)))}function At(c,n,o){Re(o)?c[n]=o:c.dataset?c.dataset[n]=o:c.setAttribute("data-".concat(Dt(n)),o)}function ga(c,n){if(Re(c[n]))try{delete c[n]}catch(o){c[n]=void 0}else if(c.dataset)try{delete c.dataset[n]}catch(o){c.dataset[n]=void 0}else c.removeAttribute("data-".concat(Dt(n)))}var _r=(function(){var c=!1;if(k){var n=!1,o=function(){},i=Object.defineProperty({},"once",{get:function(){return c=!0,n},set:function(p){n=p}});T.addEventListener("test",o,i),T.removeEventListener("test",o,i)}return c})();function _e(c,n,o){var i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};if(!(!c||!n||!ne(c.removeEventListener))){var b=o;n.trim().split(pt).forEach(function(p){if(!_r){var C=c.__cropperListeners__||{};C[p]&&C[p][o]&&(b=C[p][o],delete C[p][o],Object.keys(C[p]).length===0&&delete C[p],Object.keys(C).length===0&&delete c.__cropperListeners__)}c.removeEventListener(p,b,i)})}}function Ie(c,n,o){var i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};if(!(!c||!n||!ne(c.addEventListener)||!ne(o))){var b=o;n.trim().split(pt).forEach(function(p){if(i.once&&!_r){var C=c.__cropperListeners__||{};b=function(){C[p]&&C[p][o]&&delete C[p][o],c.removeEventListener(p,b,i);for(var L=arguments.length,D=new Array(L),M=0;M<L;M++)D[M]=arguments[M];o.apply(c,D)},C[p]||(C[p]={}),C[p][o]&&c.removeEventListener(p,C[p][o],i),C[p][o]=b,c.__cropperListeners__=C}c.addEventListener(p,b,i)})}}function at(c,n,o){if(!c||!n||!ne(c.dispatchEvent))return!1;var i;if(ne(Event)&&ne(CustomEvent))i=new CustomEvent(n,{detail:o,bubbles:!0,cancelable:!0});else if(Re(document)&&ne(document.createEvent))i=document.createEvent("CustomEvent"),i.initCustomEvent(n,!0,!0,o);else return!1;return c.dispatchEvent(i)}function Mr(c){if(!c||!ne(c.getBoundingClientRect))return{left:0,top:0};var n=c.getBoundingClientRect(),o=document||{},i=o.documentElement,b=i===void 0?{}:i,p=T.pageXOffset||0,C=T.pageYOffset||0;return{left:n.left+(p-(b.clientLeft||0)),top:n.top+(C-(b.clientTop||0))}}var Jt=T.location,ba=/^(\w+:)\/\/([^:/?#]*):?(\d*)/i;function Sr(c){var n=c.match(ba);return n!==null&&(n[1]!==Jt.protocol||n[2]!==Jt.hostname||n[3]!==Jt.port)}function Pr(c){var n=c.indexOf("#"),o=n>=0?c.slice(n):"",i=n>=0?c.slice(0,n):c,b="timestamp=".concat(new Date().getTime());return"".concat(i).concat(i.indexOf("?")===-1?"?":"&").concat(b).concat(o)}function gt(c){var n=c.rotate,o=c.scaleX,i=c.scaleY,b=c.translateX,p=c.translateY,C=[];z(b)&&b!==0&&C.push("translateX(".concat(b,"px)")),z(p)&&p!==0&&C.push("translateY(".concat(p,"px)")),z(n)&&n!==0&&C.push("rotate(".concat(n,"deg)")),z(o)&&o!==1&&C.push("scaleX(".concat(o,")")),z(i)&&i!==1&&C.push("scaleY(".concat(i,")"));var _=C.length?C.join(" "):"none";return{WebkitTransform:_,msTransform:_,transform:_}}function xa(c){var n=A({},c),o=0;return ce(c,function(i,b){delete n[b],ce(n,function(p){var C=Math.abs(i.startX-p.startX),_=Math.abs(i.startY-p.startY),L=Math.abs(i.endX-p.endX),D=Math.abs(i.endY-p.endY),M=Math.sqrt(C*C+_*_),R=Math.sqrt(L*L+D*D);if(!(!Pt(M)||!Pt(R)||M===0||R===M)){var O=(R-M)/M;Pt(O)&&Math.abs(O)>Math.abs(o)&&(o=O)}})}),o}function Rt(c,n){var o=c.pageX,i=c.pageY,b={endX:o,endY:i};return n?b:A({startX:o,startY:i},b)}function Dr(c){var n=0,o=0,i=0;return ce(c,function(b){var p=b.startX,C=b.startY;n+=p,o+=C,i+=1}),n/=i,o/=i,{pageX:n,pageY:o}}function ye(c){var n=c.aspectRatio,o=c.height,i=c.width,b=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"contain",p=wr(i),C=wr(o);if(p&&C){var _=o*n;b==="contain"&&_>i||b==="cover"&&_<i?o=i/n:i=o*n}else p?o=i/n:C&&(i=o*n);return{width:i,height:o}}function Rr(c){var n=c.width,o=c.height,i=c.degree;if(i=Math.abs(i)%180,i===90)return{width:o,height:n};var b=i%90*Math.PI/180,p=Math.sin(b),C=Math.cos(b),_=n*C+o*p,L=n*p+o*C;return i>90?{width:L,height:_}:{width:_,height:L}}function nt(c,n,o,i){var b=n.aspectRatio,p=n.naturalWidth,C=n.naturalHeight,_=n.rotate,L=_===void 0?0:_,D=n.scaleX,M=D===void 0?1:D,R=n.scaleY,O=R===void 0?1:R,K=o.aspectRatio,j=o.naturalWidth,oe=o.naturalHeight,ee=i.fillColor,he=ee===void 0?"transparent":ee,ue=i.imageSmoothingEnabled,de=ue===void 0?!0:ue,Ye=i.imageSmoothingQuality,Me=Ye===void 0?"low":Ye,N=i.maxWidth,re=N===void 0?1/0:N,pe=i.maxHeight,Fe=pe===void 0?1/0:pe,We=i.minWidth,bt=We===void 0?0:We,xt=i.minHeight,it=xt===void 0?0:xt,Ge=document.createElement("canvas"),we=Ge.getContext("2d"),Ct=ye({aspectRatio:K,width:re,height:Fe}),Fr=ye({aspectRatio:K,width:bt,height:it},"cover"),wa=Math.min(Ct.width,Math.max(Fr.width,j)),Ea=Math.min(Ct.height,Math.max(Fr.height,oe)),dn=ye({aspectRatio:b,width:re,height:Fe}),mn=ye({aspectRatio:b,width:bt,height:it},"cover"),pn=Math.min(dn.width,Math.max(mn.width,p)),An=Math.min(dn.height,Math.max(mn.height,C)),oo=[-pn/2,-An/2,pn,An];return Ge.width=tt(wa),Ge.height=tt(Ea),we.fillStyle=he,we.fillRect(0,0,wa,Ea),we.save(),we.translate(wa/2,Ea/2),we.rotate(L*Math.PI/180),we.scale(M,O),we.imageSmoothingEnabled=de,we.imageSmoothingQuality=Me,we.drawImage.apply(we,[c].concat(g(oo.map(function(so){return Math.floor(tt(so))})))),we.restore(),Ge}var Tr=String.fromCharCode;function Tt(c,n,o){var i="";o+=n;for(var b=n;b<o;b+=1)i+=Tr(c.getUint8(b));return i}var er=/^data:.*,/;function Ca(c){var n=c.replace(er,""),o=atob(n),i=new ArrayBuffer(o.length),b=new Uint8Array(i);return ce(b,function(p,C){b[C]=o.charCodeAt(C)}),i}function va(c,n){for(var o=[],i=8192,b=new Uint8Array(c);b.length>0;)o.push(Tr.apply(null,Br(b.subarray(0,i)))),b=b.subarray(i);return"data:".concat(n,";base64,").concat(btoa(o.join("")))}function tr(c){var n=new DataView(c),o;try{var i,b,p;if(n.getUint8(0)===255&&n.getUint8(1)===216)for(var C=n.byteLength,_=2;_+1<C;){if(n.getUint8(_)===255&&n.getUint8(_+1)===225){b=_;break}_+=1}if(b){var L=b+4,D=b+10;if(Tt(n,L,4)==="Exif"){var M=n.getUint16(D);if(i=M===18761,(i||M===19789)&&n.getUint16(D+2,i)===42){var R=n.getUint32(D+4,i);R>=8&&(p=D+R)}}}if(p){var O=n.getUint16(p,i),K,j;for(j=0;j<O;j+=1)if(K=p+j*12+2,n.getUint16(K,i)===274){K+=8,o=n.getUint16(K,i),n.setUint16(K,1,i);break}}}catch(oe){o=1}return o}function Ia(c){var n=0,o=1,i=1;switch(c){case 2:o=-1;break;case 3:n=-180;break;case 4:i=-1;break;case 5:n=90,i=-1;break;case 6:n=90;break;case 7:n=90,o=-1;break;case 8:n=-90;break}return{rotate:n,scaleX:o,scaleY:i}}var ya={render:function(){this.initContainer(),this.initCanvas(),this.initCropBox(),this.renderCanvas(),this.cropped&&this.renderCropBox()},initContainer:function(){var n=this.element,o=this.options,i=this.container,b=this.cropper,p=Number(o.minContainerWidth),C=Number(o.minContainerHeight);fe(b,le),Te(n,le);var _={width:Math.max(i.offsetWidth,p>=0?p:zt),height:Math.max(i.offsetHeight,C>=0?C:jt)};this.containerData=_,Ue(b,{width:_.width,height:_.height}),fe(n,le),Te(b,le)},initCanvas:function(){var n=this.containerData,o=this.imageData,i=this.options.viewMode,b=Math.abs(o.rotate)%180===90,p=b?o.naturalHeight:o.naturalWidth,C=b?o.naturalWidth:o.naturalHeight,_=p/C,L=n.width,D=n.height;n.height*_>n.width?i===3?L=n.height*_:D=n.width/_:i===3?D=n.width/_:L=n.height*_;var M={aspectRatio:_,naturalWidth:p,naturalHeight:C,width:L,height:D};this.canvasData=M,this.limited=i===1||i===2,this.limitCanvas(!0,!0),M.width=Math.min(Math.max(M.width,M.minWidth),M.maxWidth),M.height=Math.min(Math.max(M.height,M.minHeight),M.maxHeight),M.left=(n.width-M.width)/2,M.top=(n.height-M.height)/2,M.oldLeft=M.left,M.oldTop=M.top,this.initialCanvasData=ie({},M)},limitCanvas:function(n,o){var i=this.options,b=this.containerData,p=this.canvasData,C=this.cropBoxData,_=i.viewMode,L=p.aspectRatio,D=this.cropped&&C;if(n){var M=Number(i.minCanvasWidth)||0,R=Number(i.minCanvasHeight)||0;_>1?(M=Math.max(M,b.width),R=Math.max(R,b.height),_===3&&(R*L>M?M=R*L:R=M/L)):_>0&&(M?M=Math.max(M,D?C.width:0):R?R=Math.max(R,D?C.height:0):D&&(M=C.width,R=C.height,R*L>M?M=R*L:R=M/L));var O=ye({aspectRatio:L,width:M,height:R});M=O.width,R=O.height,p.minWidth=M,p.minHeight=R,p.maxWidth=1/0,p.maxHeight=1/0}if(o)if(_>(D?0:1)){var K=b.width-p.width,j=b.height-p.height;p.minLeft=Math.min(0,K),p.minTop=Math.min(0,j),p.maxLeft=Math.max(0,K),p.maxTop=Math.max(0,j),D&&this.limited&&(p.minLeft=Math.min(C.left,C.left+(C.width-p.width)),p.minTop=Math.min(C.top,C.top+(C.height-p.height)),p.maxLeft=C.left,p.maxTop=C.top,_===2&&(p.width>=b.width&&(p.minLeft=Math.min(0,K),p.maxLeft=Math.max(0,K)),p.height>=b.height&&(p.minTop=Math.min(0,j),p.maxTop=Math.max(0,j))))}else p.minLeft=-p.width,p.minTop=-p.height,p.maxLeft=b.width,p.maxTop=b.height},renderCanvas:function(n,o){var i=this.canvasData,b=this.imageData;if(o){var p=Rr({width:b.naturalWidth*Math.abs(b.scaleX||1),height:b.naturalHeight*Math.abs(b.scaleY||1),degree:b.rotate||0}),C=p.width,_=p.height,L=i.width*(C/i.naturalWidth),D=i.height*(_/i.naturalHeight);i.left-=(L-i.width)/2,i.top-=(D-i.height)/2,i.width=L,i.height=D,i.aspectRatio=C/_,i.naturalWidth=C,i.naturalHeight=_,this.limitCanvas(!0,!1)}(i.width>i.maxWidth||i.width<i.minWidth)&&(i.left=i.oldLeft),(i.height>i.maxHeight||i.height<i.minHeight)&&(i.top=i.oldTop),i.width=Math.min(Math.max(i.width,i.minWidth),i.maxWidth),i.height=Math.min(Math.max(i.height,i.minHeight),i.maxHeight),this.limitCanvas(!1,!0),i.left=Math.min(Math.max(i.left,i.minLeft),i.maxLeft),i.top=Math.min(Math.max(i.top,i.minTop),i.maxTop),i.oldLeft=i.left,i.oldTop=i.top,Ue(this.canvas,ie({width:i.width,height:i.height},gt({translateX:i.left,translateY:i.top}))),this.renderImage(n),this.cropped&&this.limited&&this.limitCropBox(!0,!0)},renderImage:function(n){var o=this.canvasData,i=this.imageData,b=i.naturalWidth*(o.width/o.naturalWidth),p=i.naturalHeight*(o.height/o.naturalHeight);ie(i,{width:b,height:p,left:(o.width-b)/2,top:(o.height-p)/2}),Ue(this.image,ie({width:i.width,height:i.height},gt(ie({translateX:i.left,translateY:i.top},i)))),n&&this.output()},initCropBox:function(){var n=this.options,o=this.canvasData,i=n.aspectRatio||n.initialAspectRatio,b=Number(n.autoCropArea)||.8,p={width:o.width,height:o.height};i&&(o.height*i>o.width?p.height=p.width/i:p.width=p.height*i),this.cropBoxData=p,this.limitCropBox(!0,!0),p.width=Math.min(Math.max(p.width,p.minWidth),p.maxWidth),p.height=Math.min(Math.max(p.height,p.minHeight),p.maxHeight),p.width=Math.max(p.minWidth,p.width*b),p.height=Math.max(p.minHeight,p.height*b),p.left=o.left+(o.width-p.width)/2,p.top=o.top+(o.height-p.height)/2,p.oldLeft=p.left,p.oldTop=p.top,this.initialCropBoxData=ie({},p)},limitCropBox:function(n,o){var i=this.options,b=this.containerData,p=this.canvasData,C=this.cropBoxData,_=this.limited,L=i.aspectRatio;if(n){var D=Number(i.minCropBoxWidth)||0,M=Number(i.minCropBoxHeight)||0,R=_?Math.min(b.width,p.width,p.width+p.left,b.width-p.left):b.width,O=_?Math.min(b.height,p.height,p.height+p.top,b.height-p.top):b.height;D=Math.min(D,b.width),M=Math.min(M,b.height),L&&(D&&M?M*L>D?M=D/L:D=M*L:D?M=D/L:M&&(D=M*L),O*L>R?O=R/L:R=O*L),C.minWidth=Math.min(D,R),C.minHeight=Math.min(M,O),C.maxWidth=R,C.maxHeight=O}o&&(_?(C.minLeft=Math.max(0,p.left),C.minTop=Math.max(0,p.top),C.maxLeft=Math.min(b.width,p.left+p.width)-C.width,C.maxTop=Math.min(b.height,p.top+p.height)-C.height):(C.minLeft=0,C.minTop=0,C.maxLeft=b.width-C.width,C.maxTop=b.height-C.height))},renderCropBox:function(){var n=this.options,o=this.containerData,i=this.cropBoxData;(i.width>i.maxWidth||i.width<i.minWidth)&&(i.left=i.oldLeft),(i.height>i.maxHeight||i.height<i.minHeight)&&(i.top=i.oldTop),i.width=Math.min(Math.max(i.width,i.minWidth),i.maxWidth),i.height=Math.min(Math.max(i.height,i.minHeight),i.maxHeight),this.limitCropBox(!1,!0),i.left=Math.min(Math.max(i.left,i.minLeft),i.maxLeft),i.top=Math.min(Math.max(i.top,i.minTop),i.maxTop),i.oldLeft=i.left,i.oldTop=i.top,n.movable&&n.cropBoxMovable&&At(this.face,De,i.width>=o.width&&i.height>=o.height?U:Z),Ue(this.cropBox,ie({width:i.width,height:i.height},gt({translateX:i.left,translateY:i.top}))),this.cropped&&this.limited&&this.limitCanvas(!0,!0),this.disabled||this.output()},output:function(){this.preview(),at(this.element,Ht,this.getData())}},f={initPreview:function(){var n=this.element,o=this.crossOrigin,i=this.options.preview,b=o?this.crossOriginUrl:this.url,p=n.alt||"The image to preview",C=document.createElement("img");if(o&&(C.crossOrigin=o),C.src=b,C.alt=p,this.viewBox.appendChild(C),this.viewBoxImage=C,!!i){var _=i;typeof i=="string"?_=n.ownerDocument.querySelectorAll(i):i.querySelector&&(_=[i]),this.previews=_,ce(_,function(L){var D=document.createElement("img");At(L,Je,{width:L.offsetWidth,height:L.offsetHeight,html:L.innerHTML}),o&&(D.crossOrigin=o),D.src=b,D.alt=p,D.style.cssText="display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;",L.innerHTML="",L.appendChild(D)})}},resetPreview:function(){ce(this.previews,function(n){var o=Zt(n,Je);Ue(n,{width:o.width,height:o.height}),n.innerHTML=o.html,ga(n,Je)})},preview:function(){var n=this.imageData,o=this.canvasData,i=this.cropBoxData,b=i.width,p=i.height,C=n.width,_=n.height,L=i.left-o.left-n.left,D=i.top-o.top-n.top;!this.cropped||this.disabled||(Ue(this.viewBoxImage,ie({width:C,height:_},gt(ie({translateX:-L,translateY:-D},n)))),ce(this.previews,function(M){var R=Zt(M,Je),O=R.width,K=R.height,j=O,oe=K,ee=1;b&&(ee=O/b,oe=p*ee),p&&oe>K&&(ee=K/p,j=b*ee,oe=K),Ue(M,{width:j,height:oe}),Ue(M.getElementsByTagName("img")[0],ie({width:C*ee,height:_*ee},gt(ie({translateX:-L*ee,translateY:-D*ee},n))))}))}},v={bind:function(){var n=this.element,o=this.options,i=this.cropper;ne(o.cropstart)&&Ie(n,Yt,o.cropstart),ne(o.cropmove)&&Ie(n,Xt,o.cropmove),ne(o.cropend)&&Ie(n,$t,o.cropend),ne(o.crop)&&Ie(n,Ht,o.crop),ne(o.zoom)&&Ie(n,mt,o.zoom),Ie(i,Le,this.onCropStart=this.cropStart.bind(this)),o.zoomable&&o.zoomOnWheel&&Ie(i,St,this.onWheel=this.wheel.bind(this),{passive:!1,capture:!0}),o.toggleDragModeOnDblclick&&Ie(i,Ar,this.onDblclick=this.dblclick.bind(this)),Ie(n.ownerDocument,gr,this.onCropMove=this.cropMove.bind(this)),Ie(n.ownerDocument,Wt,this.onCropEnd=this.cropEnd.bind(this)),o.responsive&&Ie(window,Mt,this.onResize=this.resize.bind(this))},unbind:function(){var n=this.element,o=this.options,i=this.cropper;ne(o.cropstart)&&_e(n,Yt,o.cropstart),ne(o.cropmove)&&_e(n,Xt,o.cropmove),ne(o.cropend)&&_e(n,$t,o.cropend),ne(o.crop)&&_e(n,Ht,o.crop),ne(o.zoom)&&_e(n,mt,o.zoom),_e(i,Le,this.onCropStart),o.zoomable&&o.zoomOnWheel&&_e(i,St,this.onWheel,{passive:!1,capture:!0}),o.toggleDragModeOnDblclick&&_e(i,Ar,this.onDblclick),_e(n.ownerDocument,gr,this.onCropMove),_e(n.ownerDocument,Wt,this.onCropEnd),o.responsive&&_e(window,Mt,this.onResize)}},m={resize:function(){if(!this.disabled){var n=this.options,o=this.container,i=this.containerData,b=o.offsetWidth/i.width,p=o.offsetHeight/i.height,C=Math.abs(b-1)>Math.abs(p-1)?b:p;if(C!==1){var _,L;n.restore&&(_=this.getCanvasData(),L=this.getCropBoxData()),this.render(),n.restore&&(this.setCanvasData(ce(_,function(D,M){_[M]=D*C})),this.setCropBoxData(ce(L,function(D,M){L[M]=D*C})))}}},dblclick:function(){this.disabled||this.options.dragMode===pr||this.setDragMode(pa(this.dragBox,ke)?mr:Nt)},wheel:function(n){var o=this,i=Number(this.options.wheelZoomRatio)||.1,b=1;this.disabled||(n.preventDefault(),!this.wheeling&&(this.wheeling=!0,setTimeout(function(){o.wheeling=!1},50),n.deltaY?b=n.deltaY>0?1:-1:n.wheelDelta?b=-n.wheelDelta/120:n.detail&&(b=n.detail>0?1:-1),this.zoom(-b*i,n)))},cropStart:function(n){var o=n.buttons,i=n.button;if(!(this.disabled||(n.type==="mousedown"||n.type==="pointerdown"&&n.pointerType==="mouse")&&(z(o)&&o!==1||z(i)&&i!==0||n.ctrlKey))){var b=this.options,p=this.pointers,C;n.changedTouches?ce(n.changedTouches,function(_){p[_.identifier]=Rt(_)}):p[n.pointerId||0]=Rt(n),Object.keys(p).length>1&&b.zoomable&&b.zoomOnTouch?C=X:C=Zt(n.target,De),br.test(C)&&at(this.element,Yt,{originalEvent:n,action:C})!==!1&&(n.preventDefault(),this.action=C,this.cropping=!1,C===te&&(this.cropping=!0,fe(this.dragBox,Ze)))}},cropMove:function(n){var o=this.action;if(!(this.disabled||!o)){var i=this.pointers;n.preventDefault(),at(this.element,Xt,{originalEvent:n,action:o})!==!1&&(n.changedTouches?ce(n.changedTouches,function(b){ie(i[b.identifier]||{},Rt(b,!0))}):ie(i[n.pointerId||0]||{},Rt(n,!0)),this.change(n))}},cropEnd:function(n){if(!this.disabled){var o=this.action,i=this.pointers;n.changedTouches?ce(n.changedTouches,function(b){delete i[b.identifier]}):delete i[n.pointerId||0],o&&(n.preventDefault(),Object.keys(i).length||(this.action=""),this.cropping&&(this.cropping=!1,rt(this.dragBox,Ze,this.cropped&&this.options.modal)),at(this.element,$t,{originalEvent:n,action:o}))}}},w={change:function(n){var o=this.options,i=this.canvasData,b=this.containerData,p=this.cropBoxData,C=this.pointers,_=this.action,L=o.aspectRatio,D=p.left,M=p.top,R=p.width,O=p.height,K=D+R,j=M+O,oe=0,ee=0,he=b.width,ue=b.height,de=!0,Ye;!L&&n.shiftKey&&(L=R&&O?R/O:1),this.limited&&(oe=p.minLeft,ee=p.minTop,he=oe+Math.min(b.width,i.width,i.left+i.width),ue=ee+Math.min(b.height,i.height,i.top+i.height));var Me=C[Object.keys(C)[0]],N={x:Me.endX-Me.startX,y:Me.endY-Me.startY},re=function(Fe){switch(Fe){case Y:K+N.x>he&&(N.x=he-K);break;case W:D+N.x<oe&&(N.x=oe-D);break;case J:M+N.y<ee&&(N.y=ee-M);break;case q:j+N.y>ue&&(N.y=ue-j);break}};switch(_){case Z:D+=N.x,M+=N.y;break;case Y:if(N.x>=0&&(K>=he||L&&(M<=ee||j>=ue))){de=!1;break}re(Y),R+=N.x,R<0&&(_=W,R=-R,D-=R),L&&(O=R/L,M+=(p.height-O)/2);break;case J:if(N.y<=0&&(M<=ee||L&&(D<=oe||K>=he))){de=!1;break}re(J),O-=N.y,M+=N.y,O<0&&(_=q,O=-O,M-=O),L&&(R=O*L,D+=(p.width-R)/2);break;case W:if(N.x<=0&&(D<=oe||L&&(M<=ee||j>=ue))){de=!1;break}re(W),R-=N.x,D+=N.x,R<0&&(_=Y,R=-R,D-=R),L&&(O=R/L,M+=(p.height-O)/2);break;case q:if(N.y>=0&&(j>=ue||L&&(D<=oe||K>=he))){de=!1;break}re(q),O+=N.y,O<0&&(_=J,O=-O,M-=O),L&&(R=O*L,D+=(p.width-R)/2);break;case ae:if(L){if(N.y<=0&&(M<=ee||K>=he)){de=!1;break}re(J),O-=N.y,M+=N.y,R=O*L}else re(J),re(Y),N.x>=0?K<he?R+=N.x:N.y<=0&&M<=ee&&(de=!1):R+=N.x,N.y<=0?M>ee&&(O-=N.y,M+=N.y):(O-=N.y,M+=N.y);R<0&&O<0?(_=Be,O=-O,R=-R,M-=O,D-=R):R<0?(_=se,R=-R,D-=R):O<0&&(_=me,O=-O,M-=O);break;case se:if(L){if(N.y<=0&&(M<=ee||D<=oe)){de=!1;break}re(J),O-=N.y,M+=N.y,R=O*L,D+=p.width-R}else re(J),re(W),N.x<=0?D>oe?(R-=N.x,D+=N.x):N.y<=0&&M<=ee&&(de=!1):(R-=N.x,D+=N.x),N.y<=0?M>ee&&(O-=N.y,M+=N.y):(O-=N.y,M+=N.y);R<0&&O<0?(_=me,O=-O,R=-R,M-=O,D-=R):R<0?(_=ae,R=-R,D-=R):O<0&&(_=Be,O=-O,M-=O);break;case Be:if(L){if(N.x<=0&&(D<=oe||j>=ue)){de=!1;break}re(W),R-=N.x,D+=N.x,O=R/L}else re(q),re(W),N.x<=0?D>oe?(R-=N.x,D+=N.x):N.y>=0&&j>=ue&&(de=!1):(R-=N.x,D+=N.x),N.y>=0?j<ue&&(O+=N.y):O+=N.y;R<0&&O<0?(_=ae,O=-O,R=-R,M-=O,D-=R):R<0?(_=me,R=-R,D-=R):O<0&&(_=se,O=-O,M-=O);break;case me:if(L){if(N.x>=0&&(K>=he||j>=ue)){de=!1;break}re(Y),R+=N.x,O=R/L}else re(q),re(Y),N.x>=0?K<he?R+=N.x:N.y>=0&&j>=ue&&(de=!1):R+=N.x,N.y>=0?j<ue&&(O+=N.y):O+=N.y;R<0&&O<0?(_=se,O=-O,R=-R,M-=O,D-=R):R<0?(_=Be,R=-R,D-=R):O<0&&(_=ae,O=-O,M-=O);break;case U:this.move(N.x,N.y),de=!1;break;case X:this.zoom(xa(C),n),de=!1;break;case te:if(!N.x||!N.y){de=!1;break}Ye=Mr(this.cropper),D=Me.startX-Ye.left,M=Me.startY-Ye.top,R=p.minWidth,O=p.minHeight,N.x>0?_=N.y>0?me:ae:N.x<0&&(D-=R,_=N.y>0?Be:se),N.y<0&&(M-=O),this.cropped||(Te(this.cropBox,le),this.cropped=!0,this.limited&&this.limitCropBox(!0,!0));break}de&&(p.width=R,p.height=O,p.left=D,p.top=M,this.action=_,this.renderCropBox()),ce(C,function(pe){pe.startX=pe.endX,pe.startY=pe.endY})}},E={crop:function(){return this.ready&&!this.cropped&&!this.disabled&&(this.cropped=!0,this.limitCropBox(!0,!0),this.options.modal&&fe(this.dragBox,Ze),Te(this.cropBox,le),this.setCropBoxData(this.initialCropBoxData)),this},reset:function(){return this.ready&&!this.disabled&&(this.imageData=ie({},this.initialImageData),this.canvasData=ie({},this.initialCanvasData),this.cropBoxData=ie({},this.initialCropBoxData),this.renderCanvas(),this.cropped&&this.renderCropBox()),this},clear:function(){return this.cropped&&!this.disabled&&(ie(this.cropBoxData,{left:0,top:0,width:0,height:0}),this.cropped=!1,this.renderCropBox(),this.limitCanvas(!0,!0),this.renderCanvas(),Te(this.dragBox,Ze),fe(this.cropBox,le)),this},replace:function(n){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return!this.disabled&&n&&(this.isImg&&(this.element.src=n),o?(this.url=n,this.image.src=n,this.ready&&(this.viewBoxImage.src=n,ce(this.previews,function(i){i.getElementsByTagName("img")[0].src=n}))):(this.isImg&&(this.replaced=!0),this.options.data=null,this.uncreate(),this.load(n))),this},enable:function(){return this.ready&&this.disabled&&(this.disabled=!1,Te(this.cropper,qe)),this},disable:function(){return this.ready&&!this.disabled&&(this.disabled=!0,fe(this.cropper,qe)),this},destroy:function(){var n=this.element;return n[G]?(n[G]=void 0,this.isImg&&this.replaced&&(n.src=this.originalUrl),this.uncreate(),this):this},move:function(n){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:n,i=this.canvasData,b=i.left,p=i.top;return this.moveTo(Kt(n)?n:b+Number(n),Kt(o)?o:p+Number(o))},moveTo:function(n){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:n,i=this.canvasData,b=!1;return n=Number(n),o=Number(o),this.ready&&!this.disabled&&this.options.movable&&(z(n)&&(i.left=n,b=!0),z(o)&&(i.top=o,b=!0),b&&this.renderCanvas(!0)),this},zoom:function(n,o){var i=this.canvasData;return n=Number(n),n<0?n=1/(1-n):n=1+n,this.zoomTo(i.width*n/i.naturalWidth,null,o)},zoomTo:function(n,o,i){var b=this.options,p=this.canvasData,C=p.width,_=p.height,L=p.naturalWidth,D=p.naturalHeight;if(n=Number(n),n>=0&&this.ready&&!this.disabled&&b.zoomable){var M=L*n,R=D*n;if(at(this.element,mt,{ratio:n,oldRatio:C/L,originalEvent:i})===!1)return this;if(i){var O=this.pointers,K=Mr(this.cropper),j=O&&Object.keys(O).length?Dr(O):{pageX:i.pageX,pageY:i.pageY};p.left-=(M-C)*((j.pageX-K.left-p.left)/C),p.top-=(R-_)*((j.pageY-K.top-p.top)/_)}else et(o)&&z(o.x)&&z(o.y)?(p.left-=(M-C)*((o.x-p.left)/C),p.top-=(R-_)*((o.y-p.top)/_)):(p.left-=(M-C)/2,p.top-=(R-_)/2);p.width=M,p.height=R,this.renderCanvas(!0)}return this},rotate:function(n){return this.rotateTo((this.imageData.rotate||0)+Number(n))},rotateTo:function(n){return n=Number(n),z(n)&&this.ready&&!this.disabled&&this.options.rotatable&&(this.imageData.rotate=n%360,this.renderCanvas(!0,!0)),this},scaleX:function(n){var o=this.imageData.scaleY;return this.scale(n,z(o)?o:1)},scaleY:function(n){var o=this.imageData.scaleX;return this.scale(z(o)?o:1,n)},scale:function(n){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:n,i=this.imageData,b=!1;return n=Number(n),o=Number(o),this.ready&&!this.disabled&&this.options.scalable&&(z(n)&&(i.scaleX=n,b=!0),z(o)&&(i.scaleY=o,b=!0),b&&this.renderCanvas(!0,!0)),this},getData:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,o=this.options,i=this.imageData,b=this.canvasData,p=this.cropBoxData,C;if(this.ready&&this.cropped){C={x:p.left-b.left,y:p.top-b.top,width:p.width,height:p.height};var _=i.width/i.naturalWidth;if(ce(C,function(M,R){C[R]=M/_}),n){var L=Math.round(C.y+C.height),D=Math.round(C.x+C.width);C.x=Math.round(C.x),C.y=Math.round(C.y),C.width=D-C.x,C.height=L-C.y}}else C={x:0,y:0,width:0,height:0};return o.rotatable&&(C.rotate=i.rotate||0),o.scalable&&(C.scaleX=i.scaleX||1,C.scaleY=i.scaleY||1),C},setData:function(n){var o=this.options,i=this.imageData,b=this.canvasData,p={};if(this.ready&&!this.disabled&&et(n)){var C=!1;o.rotatable&&z(n.rotate)&&n.rotate!==i.rotate&&(i.rotate=n.rotate,C=!0),o.scalable&&(z(n.scaleX)&&n.scaleX!==i.scaleX&&(i.scaleX=n.scaleX,C=!0),z(n.scaleY)&&n.scaleY!==i.scaleY&&(i.scaleY=n.scaleY,C=!0)),C&&this.renderCanvas(!0,!0);var _=i.width/i.naturalWidth;z(n.x)&&(p.left=n.x*_+b.left),z(n.y)&&(p.top=n.y*_+b.top),z(n.width)&&(p.width=n.width*_),z(n.height)&&(p.height=n.height*_),this.setCropBoxData(p)}return this},getContainerData:function(){return this.ready?ie({},this.containerData):{}},getImageData:function(){return this.sized?ie({},this.imageData):{}},getCanvasData:function(){var n=this.canvasData,o={};return this.ready&&ce(["left","top","width","height","naturalWidth","naturalHeight"],function(i){o[i]=n[i]}),o},setCanvasData:function(n){var o=this.canvasData,i=o.aspectRatio;return this.ready&&!this.disabled&&et(n)&&(z(n.left)&&(o.left=n.left),z(n.top)&&(o.top=n.top),z(n.width)?(o.width=n.width,o.height=n.width/i):z(n.height)&&(o.height=n.height,o.width=n.height*i),this.renderCanvas(!0)),this},getCropBoxData:function(){var n=this.cropBoxData,o;return this.ready&&this.cropped&&(o={left:n.left,top:n.top,width:n.width,height:n.height}),o||{}},setCropBoxData:function(n){var o=this.cropBoxData,i=this.options.aspectRatio,b,p;return this.ready&&this.cropped&&!this.disabled&&et(n)&&(z(n.left)&&(o.left=n.left),z(n.top)&&(o.top=n.top),z(n.width)&&n.width!==o.width&&(b=!0,o.width=n.width),z(n.height)&&n.height!==o.height&&(p=!0,o.height=n.height),i&&(b?o.height=o.width/i:p&&(o.width=o.height*i)),this.renderCropBox()),this},getCroppedCanvas:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!this.ready||!window.HTMLCanvasElement)return null;var o=this.canvasData,i=nt(this.image,this.imageData,o,n);if(!this.cropped)return i;var b=this.getData(n.rounded),p=b.x,C=b.y,_=b.width,L=b.height,D=i.width/Math.floor(o.naturalWidth);D!==1&&(p*=D,C*=D,_*=D,L*=D);var M=_/L,R=ye({aspectRatio:M,width:n.maxWidth||1/0,height:n.maxHeight||1/0}),O=ye({aspectRatio:M,width:n.minWidth||0,height:n.minHeight||0},"cover"),K=ye({aspectRatio:M,width:n.width||(D!==1?i.width:_),height:n.height||(D!==1?i.height:L)}),j=K.width,oe=K.height;j=Math.min(R.width,Math.max(O.width,j)),oe=Math.min(R.height,Math.max(O.height,oe));var ee=document.createElement("canvas"),he=ee.getContext("2d");ee.width=tt(j),ee.height=tt(oe),he.fillStyle=n.fillColor||"transparent",he.fillRect(0,0,j,oe);var ue=n.imageSmoothingEnabled,de=ue===void 0?!0:ue,Ye=n.imageSmoothingQuality;he.imageSmoothingEnabled=de,Ye&&(he.imageSmoothingQuality=Ye);var Me=i.width,N=i.height,re=p,pe=C,Fe,We,bt,xt,it,Ge;re<=-_||re>Me?(re=0,Fe=0,bt=0,it=0):re<=0?(bt=-re,re=0,Fe=Math.min(Me,_+re),it=Fe):re<=Me&&(bt=0,Fe=Math.min(_,Me-re),it=Fe),Fe<=0||pe<=-L||pe>N?(pe=0,We=0,xt=0,Ge=0):pe<=0?(xt=-pe,pe=0,We=Math.min(N,L+pe),Ge=We):pe<=N&&(xt=0,We=Math.min(L,N-pe),Ge=We);var we=[re,pe,Fe,We];if(it>0&&Ge>0){var Ct=j/_;we.push(bt*Ct,xt*Ct,it*Ct,Ge*Ct)}return he.drawImage.apply(he,[i].concat(g(we.map(function(Fr){return Math.floor(tt(Fr))})))),ee},setAspectRatio:function(n){var o=this.options;return!this.disabled&&!Kt(n)&&(o.aspectRatio=Math.max(0,n)||NaN,this.ready&&(this.initCropBox(),this.cropped&&this.renderCropBox())),this},setDragMode:function(n){var o=this.options,i=this.dragBox,b=this.face;if(this.ready&&!this.disabled){var p=n===Nt,C=o.movable&&n===mr;n=p||C?n:pr,o.dragMode=n,At(i,De,n),rt(i,ke,p),rt(i,ge,C),o.cropBoxMovable||(At(b,De,n),rt(b,ke,p),rt(b,ge,C))}return this}},y=T.Cropper,F=(function(){function c(n){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(r(this,c),!n||!vr.test(n.tagName))throw new Error("The first argument is required and must be an <img> or <canvas> element.");this.element=n,this.options=ie({},qt,et(o)&&o),this.cropped=!1,this.disabled=!1,this.pointers={},this.ready=!1,this.reloading=!1,this.replaced=!1,this.sized=!1,this.sizing=!1,this.init()}return s(c,[{key:"init",value:function(){var o=this.element,i=o.tagName.toLowerCase(),b;if(!o[G]){if(o[G]=this,i==="img"){if(this.isImg=!0,b=o.getAttribute("src")||"",this.originalUrl=b,!b)return;b=o.src}else i==="canvas"&&window.HTMLCanvasElement&&(b=o.toDataURL());this.load(b)}}},{key:"load",value:function(o){var i=this;if(o){this.url=o,this.imageData={};var b=this.element,p=this.options;if(!p.rotatable&&!p.scalable&&(p.checkOrientation=!1),!p.checkOrientation||!window.ArrayBuffer){this.clone();return}if(xr.test(o)){Cr.test(o)?this.read(Ca(o)):this.clone();return}var C=new XMLHttpRequest,_=this.clone.bind(this);this.reloading=!0,this.xhr=C,C.onabort=_,C.onerror=_,C.ontimeout=_,C.onprogress=function(){C.getResponseHeader("content-type")!==Vt&&C.abort()},C.onload=function(){i.read(C.response)},C.onloadend=function(){i.reloading=!1,i.xhr=null},p.checkCrossOrigin&&Sr(o)&&b.crossOrigin&&(o=Pr(o)),C.open("GET",o,!0),C.responseType="arraybuffer",C.withCredentials=b.crossOrigin==="use-credentials",C.send()}}},{key:"read",value:function(o){var i=this.options,b=this.imageData,p=tr(o),C=0,_=1,L=1;if(p>1){this.url=va(o,Vt);var D=Ia(p);C=D.rotate,_=D.scaleX,L=D.scaleY}i.rotatable&&(b.rotate=C),i.scalable&&(b.scaleX=_,b.scaleY=L),this.clone()}},{key:"clone",value:function(){var o=this.element,i=this.url,b=o.crossOrigin,p=i;this.options.checkCrossOrigin&&Sr(i)&&(b||(b="anonymous"),p=Pr(i)),this.crossOrigin=b,this.crossOriginUrl=p;var C=document.createElement("img");b&&(C.crossOrigin=b),C.src=p||i,C.alt=o.alt||"The image to crop",this.image=C,C.onload=this.start.bind(this),C.onerror=this.stop.bind(this),fe(C,ft),o.parentNode.insertBefore(C,o.nextSibling)}},{key:"start",value:function(){var o=this,i=this.image;i.onload=null,i.onerror=null,this.sizing=!0;var b=T.navigator&&/(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(T.navigator.userAgent),p=function(D,M){ie(o.imageData,{naturalWidth:D,naturalHeight:M,aspectRatio:D/M}),o.initialImageData=ie({},o.imageData),o.sizing=!1,o.sized=!0,o.build()};if(i.naturalWidth&&!b){p(i.naturalWidth,i.naturalHeight);return}var C=document.createElement("img"),_=document.body||document.documentElement;this.sizingImage=C,C.onload=function(){p(C.width,C.height),b||_.removeChild(C)},C.src=i.src,b||(C.style.cssText="left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;",_.appendChild(C))}},{key:"stop",value:function(){var o=this.image;o.onload=null,o.onerror=null,o.parentNode.removeChild(o),this.image=null}},{key:"build",value:function(){if(!(!this.sized||this.ready)){var o=this.element,i=this.options,b=this.image,p=o.parentNode,C=document.createElement("div");C.innerHTML=Ir;var _=C.querySelector(".".concat(G,"-container")),L=_.querySelector(".".concat(G,"-canvas")),D=_.querySelector(".".concat(G,"-drag-box")),M=_.querySelector(".".concat(G,"-crop-box")),R=M.querySelector(".".concat(G,"-face"));this.container=p,this.cropper=_,this.canvas=L,this.dragBox=D,this.cropBox=M,this.viewBox=_.querySelector(".".concat(G,"-view-box")),this.face=R,L.appendChild(b),fe(o,le),p.insertBefore(_,o.nextSibling),Te(b,ft),this.initPreview(),this.bind(),i.initialAspectRatio=Math.max(0,i.initialAspectRatio)||NaN,i.aspectRatio=Math.max(0,i.aspectRatio)||NaN,i.viewMode=Math.max(0,Math.min(3,Math.round(i.viewMode)))||0,fe(M,le),i.guides||fe(M.getElementsByClassName("".concat(G,"-dashed")),le),i.center||fe(M.getElementsByClassName("".concat(G,"-center")),le),i.background&&fe(_,"".concat(G,"-bg")),i.highlight||fe(R,Ke),i.cropBoxMovable&&(fe(R,ge),At(R,De,Z)),i.cropBoxResizable||(fe(M.getElementsByClassName("".concat(G,"-line")),le),fe(M.getElementsByClassName("".concat(G,"-point")),le)),this.render(),this.ready=!0,this.setDragMode(i.dragMode),i.autoCrop&&this.crop(),this.setData(i.data),ne(i.ready)&&Ie(o,dt,i.ready,{once:!0}),at(o,dt)}}},{key:"unbuild",value:function(){if(this.ready){this.ready=!1,this.unbind(),this.resetPreview();var o=this.cropper.parentNode;o&&o.removeChild(this.cropper),Te(this.element,le)}}},{key:"uncreate",value:function(){this.ready?(this.unbuild(),this.ready=!1,this.cropped=!1):this.sizing?(this.sizingImage.onload=null,this.sizing=!1,this.sized=!1):this.reloading?(this.xhr.onabort=null,this.xhr.abort()):this.image&&this.stop()}}],[{key:"noConflict",value:function(){return window.Cropper=y,c}},{key:"setDefaults",value:function(o){ie(qt,et(o)&&o)}}])})();return ie(F.prototype,ya,f,v,m,w,E),F}))});var Ui=Ba((tn,rn)=>{(function(e,t){typeof define=="function"&&define.amd?define([],t):typeof tn!="undefined"?t():(t(),e.FileSaver={})})(tn,function(){"use strict";function e(u,d){return typeof d=="undefined"?d={autoBom:!1}:typeof d!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),d={autoBom:!d}),d.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(u.type)?new Blob(["\uFEFF",u],{type:u.type}):u}function t(u,d,A){var g=new XMLHttpRequest;g.open("GET",u),g.responseType="blob",g.onload=function(){h(g.response,d,A)},g.onerror=function(){console.error("could not download file")},g.send()}function r(u){var d=new XMLHttpRequest;d.open("HEAD",u,!1);try{d.send()}catch(A){}return 200<=d.status&&299>=d.status}function a(u){try{u.dispatchEvent(new MouseEvent("click"))}catch(A){var d=document.createEvent("MouseEvents");d.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),u.dispatchEvent(d)}}var s=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof global=="object"&&global.global===global?global:void 0,l=s.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),h=s.saveAs||(typeof window!="object"||window!==s?function(){}:"download"in HTMLAnchorElement.prototype&&!l?function(u,d,A){var g=s.URL||s.webkitURL,B=document.createElement("a");d=d||u.name||"download",B.download=d,B.rel="noopener",typeof u=="string"?(B.href=u,B.origin===location.origin?a(B):r(B.href)?t(u,d,A):a(B,B.target="_blank")):(B.href=g.createObjectURL(u),setTimeout(function(){g.revokeObjectURL(B.href)},4e4),setTimeout(function(){a(B)},0))}:"msSaveOrOpenBlob"in navigator?function(u,d,A){if(d=d||u.name||"download",typeof u!="string")navigator.msSaveOrOpenBlob(e(u,A),d);else if(r(u))t(u,d,A);else{var g=document.createElement("a");g.href=u,g.target="_blank",setTimeout(function(){a(g)})}}:function(u,d,A,g){if(g=g||open("","_blank"),g&&(g.document.title=g.document.body.innerText="downloading..."),typeof u=="string")return t(u,d,A);var B=u.type==="application/octet-stream",x=/constructor/i.test(s.HTMLElement)||s.safari,I=/CriOS\/[\d]+/.test(navigator.userAgent);if((I||B&&x||l)&&typeof FileReader!="undefined"){var P=new FileReader;P.onloadend=function(){var H=P.result;H=I?H:H.replace(/^data:[^;]*;/,"data:attachment/file;"),g?g.location.href=H:location=H,g=null},P.readAsDataURL(u)}else{var k=s.URL||s.webkitURL,T=k.createObjectURL(u);g?g.location=T:location.href=T,g=null,setTimeout(function(){k.revokeObjectURL(T)},4e4)}});s.saveAs=h.saveAs=h,typeof rn!="undefined"&&(rn.exports=h)})});var Ni=Ba((Gi,an)=>{(function(e){if(typeof Gi=="object"&&typeof an!="undefined")an.exports=e();else if(typeof define=="function"&&define.amd)define([],e);else{var t;typeof window!="undefined"?t=window:typeof global!="undefined"?t=global:typeof self!="undefined"?t=self:t=this,t.localforage=e()}})(function(){var e,t,r;return(function a(s,l,h){function u(g,B){if(!l[g]){if(!s[g]){var x=typeof rr=="function"&&rr;if(!B&&x)return x(g,!0);if(d)return d(g,!0);var I=new Error("Cannot find module '"+g+"'");throw I.code="MODULE_NOT_FOUND",I}var P=l[g]={exports:{}};s[g][0].call(P.exports,function(k){var T=s[g][1][k];return u(T||k)},P,P.exports,a,s,l,h)}return l[g].exports}for(var d=typeof rr=="function"&&rr,A=0;A<h.length;A++)u(h[A]);return u})({1:[function(a,s,l){(function(h){"use strict";var u=h.MutationObserver||h.WebKitMutationObserver,d;if(u){var A=0,g=new u(k),B=h.document.createTextNode("");g.observe(B,{characterData:!0}),d=function(){B.data=A=++A%2}}else if(!h.setImmediate&&typeof h.MessageChannel!="undefined"){var x=new h.MessageChannel;x.port1.onmessage=k,d=function(){x.port2.postMessage(0)}}else"document"in h&&"onreadystatechange"in h.document.createElement("script")?d=function(){var H=h.document.createElement("script");H.onreadystatechange=function(){k(),H.onreadystatechange=null,H.parentNode.removeChild(H),H=null},h.document.documentElement.appendChild(H)}:d=function(){setTimeout(k,0)};var I,P=[];function k(){I=!0;for(var H,Q,G=P.length;G;){for(Q=P,P=[],H=-1;++H<G;)Q[H]();G=P.length}I=!1}s.exports=T;function T(H){P.push(H)===1&&!I&&d()}}).call(this,typeof global!="undefined"?global:typeof self!="undefined"?self:typeof window!="undefined"?window:{})},{}],2:[function(a,s,l){"use strict";var h=a(1);function u(){}var d={},A=["REJECTED"],g=["FULFILLED"],B=["PENDING"];s.exports=x;function x(U){if(typeof U!="function")throw new TypeError("resolver must be a function");this.state=B,this.queue=[],this.outcome=void 0,U!==u&&T(this,U)}x.prototype.catch=function(U){return this.then(null,U)},x.prototype.then=function(U,X){if(typeof U!="function"&&this.state===g||typeof X!="function"&&this.state===A)return this;var Y=new this.constructor(u);if(this.state!==B){var W=this.state===g?U:X;P(Y,W,this.outcome)}else this.queue.push(new I(Y,U,X));return Y};function I(U,X,Y){this.promise=U,typeof X=="function"&&(this.onFulfilled=X,this.callFulfilled=this.otherCallFulfilled),typeof Y=="function"&&(this.onRejected=Y,this.callRejected=this.otherCallRejected)}I.prototype.callFulfilled=function(U){d.resolve(this.promise,U)},I.prototype.otherCallFulfilled=function(U){P(this.promise,this.onFulfilled,U)},I.prototype.callRejected=function(U){d.reject(this.promise,U)},I.prototype.otherCallRejected=function(U){P(this.promise,this.onRejected,U)};function P(U,X,Y){h(function(){var W;try{W=X(Y)}catch(q){return d.reject(U,q)}W===U?d.reject(U,new TypeError("Cannot resolve promise with itself")):d.resolve(U,W)})}d.resolve=function(U,X){var Y=H(k,X);if(Y.status==="error")return d.reject(U,Y.value);var W=Y.value;if(W)T(U,W);else{U.state=g,U.outcome=X;for(var q=-1,J=U.queue.length;++q<J;)U.queue[q].callFulfilled(X)}return U},d.reject=function(U,X){U.state=A,U.outcome=X;for(var Y=-1,W=U.queue.length;++Y<W;)U.queue[Y].callRejected(X);return U};function k(U){var X=U&&U.then;if(U&&(typeof U=="object"||typeof U=="function")&&typeof X=="function")return function(){X.apply(U,arguments)}}function T(U,X){var Y=!1;function W(se){Y||(Y=!0,d.reject(U,se))}function q(se){Y||(Y=!0,d.resolve(U,se))}function J(){X(q,W)}var ae=H(J);ae.status==="error"&&W(ae.value)}function H(U,X){var Y={};try{Y.value=U(X),Y.status="success"}catch(W){Y.status="error",Y.value=W}return Y}x.resolve=Q;function Q(U){return U instanceof this?U:d.resolve(new this(u),U)}x.reject=G;function G(U){var X=new this(u);return d.reject(X,U)}x.all=Z;function Z(U){var X=this;if(Object.prototype.toString.call(U)!=="[object Array]")return this.reject(new TypeError("must be an array"));var Y=U.length,W=!1;if(!Y)return this.resolve([]);for(var q=new Array(Y),J=0,ae=-1,se=new this(u);++ae<Y;)me(U[ae],ae);return se;function me(Be,ke){X.resolve(Be).then(qe,function(le){W||(W=!0,d.reject(se,le))});function qe(le){q[ke]=le,++J===Y&&!W&&(W=!0,d.resolve(se,q))}}}x.race=te;function te(U){var X=this;if(Object.prototype.toString.call(U)!=="[object Array]")return this.reject(new TypeError("must be an array"));var Y=U.length,W=!1;if(!Y)return this.resolve([]);for(var q=-1,J=new this(u);++q<Y;)ae(U[q]);return J;function ae(se){X.resolve(se).then(function(me){W||(W=!0,d.resolve(J,me))},function(me){W||(W=!0,d.reject(J,me))})}}},{1:1}],3:[function(a,s,l){(function(h){"use strict";typeof h.Promise!="function"&&(h.Promise=a(2))}).call(this,typeof global!="undefined"?global:typeof self!="undefined"?self:typeof window!="undefined"?window:{})},{2:2}],4:[function(a,s,l){"use strict";var h=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(f){return typeof f}:function(f){return f&&typeof Symbol=="function"&&f.constructor===Symbol&&f!==Symbol.prototype?"symbol":typeof f};function u(f,v){if(!(f instanceof v))throw new TypeError("Cannot call a class as a function")}function d(){try{if(typeof indexedDB!="undefined")return indexedDB;if(typeof webkitIndexedDB!="undefined")return webkitIndexedDB;if(typeof mozIndexedDB!="undefined")return mozIndexedDB;if(typeof OIndexedDB!="undefined")return OIndexedDB;if(typeof msIndexedDB!="undefined")return msIndexedDB}catch(f){return}}var A=d();function g(){try{if(!A||!A.open)return!1;var f=typeof openDatabase!="undefined"&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),v=typeof fetch=="function"&&fetch.toString().indexOf("[native code")!==-1;return(!f||v)&&typeof indexedDB!="undefined"&&typeof IDBKeyRange!="undefined"}catch(m){return!1}}function B(f,v){f=f||[],v=v||{};try{return new Blob(f,v)}catch(y){if(y.name!=="TypeError")throw y;for(var m=typeof BlobBuilder!="undefined"?BlobBuilder:typeof MSBlobBuilder!="undefined"?MSBlobBuilder:typeof MozBlobBuilder!="undefined"?MozBlobBuilder:WebKitBlobBuilder,w=new m,E=0;E<f.length;E+=1)w.append(f[E]);return w.getBlob(v.type)}}typeof Promise=="undefined"&&a(3);var x=Promise;function I(f,v){v&&f.then(function(m){v(null,m)},function(m){v(m)})}function P(f,v,m){typeof v=="function"&&f.then(v),typeof m=="function"&&f.catch(m)}function k(f){return typeof f!="string"&&(console.warn(f+" used as a key, but it is not a string."),f=String(f)),f}function T(){if(arguments.length&&typeof arguments[arguments.length-1]=="function")return arguments[arguments.length-1]}var H="local-forage-detect-blob-support",Q=void 0,G={},Z=Object.prototype.toString,te="readonly",U="readwrite";function X(f){for(var v=f.length,m=new ArrayBuffer(v),w=new Uint8Array(m),E=0;E<v;E++)w[E]=f.charCodeAt(E);return m}function Y(f){return new x(function(v){var m=f.transaction(H,U),w=B([""]);m.objectStore(H).put(w,"key"),m.onabort=function(E){E.preventDefault(),E.stopPropagation(),v(!1)},m.oncomplete=function(){var E=navigator.userAgent.match(/Chrome\/(\d+)/),y=navigator.userAgent.match(/Edge\//);v(y||!E||parseInt(E[1],10)>=43)}}).catch(function(){return!1})}function W(f){return typeof Q=="boolean"?x.resolve(Q):Y(f).then(function(v){return Q=v,Q})}function q(f){var v=G[f.name],m={};m.promise=new x(function(w,E){m.resolve=w,m.reject=E}),v.deferredOperations.push(m),v.dbReady?v.dbReady=v.dbReady.then(function(){return m.promise}):v.dbReady=m.promise}function J(f){var v=G[f.name],m=v.deferredOperations.pop();if(m)return m.resolve(),m.promise}function ae(f,v){var m=G[f.name],w=m.deferredOperations.pop();if(w)return w.reject(v),w.promise}function se(f,v){return new x(function(m,w){if(G[f.name]=G[f.name]||De(),f.db)if(v)q(f),f.db.close();else return m(f.db);var E=[f.name];v&&E.push(f.version);var y=A.open.apply(A,E);v&&(y.onupgradeneeded=function(F){var c=y.result;try{c.createObjectStore(f.storeName),F.oldVersion<=1&&c.createObjectStore(H)}catch(n){if(n.name==="ConstraintError")console.warn('The database "'+f.name+'" has been upgraded from version '+F.oldVersion+" to version "+F.newVersion+', but the storage "'+f.storeName+'" already exists.');else throw n}}),y.onerror=function(F){F.preventDefault(),w(y.error)},y.onsuccess=function(){m(y.result),J(f)}})}function me(f){return se(f,!1)}function Be(f){return se(f,!0)}function ke(f,v){if(!f.db)return!0;var m=!f.db.objectStoreNames.contains(f.storeName),w=f.version<f.db.version,E=f.version>f.db.version;if(w&&(f.version!==v&&console.warn('The database "'+f.name+`" can't be downgraded from version `+f.db.version+" to version "+f.version+"."),f.version=f.db.version),E||m){if(m){var y=f.db.version+1;y>f.version&&(f.version=y)}return!0}return!1}function qe(f){return new x(function(v,m){var w=new FileReader;w.onerror=m,w.onloadend=function(E){var y=btoa(E.target.result||"");v({__local_forage_encoded_blob:!0,data:y,type:f.type})},w.readAsBinaryString(f)})}function le(f){var v=X(atob(f.data));return B([v],{type:f.type})}function ft(f){return f&&f.__local_forage_encoded_blob}function Ke(f){var v=this,m=v._initReady().then(function(){var w=G[v._dbInfo.name];if(w&&w.dbReady)return w.dbReady});return P(m,f,f),m}function Ze(f){q(f);for(var v=G[f.name],m=v.forages,w=0;w<m.length;w++){var E=m[w];E._dbInfo.db&&(E._dbInfo.db.close(),E._dbInfo.db=null)}return f.db=null,me(f).then(function(y){return f.db=y,ke(f)?Be(f):y}).then(function(y){f.db=v.db=y;for(var F=0;F<m.length;F++)m[F]._dbInfo.db=y}).catch(function(y){throw ae(f,y),y})}function ge(f,v,m,w){w===void 0&&(w=1);try{var E=f.db.transaction(f.storeName,v);m(null,E)}catch(y){if(w>0&&(!f.db||y.name==="InvalidStateError"||y.name==="NotFoundError"))return x.resolve().then(function(){if(!f.db||y.name==="NotFoundError"&&!f.db.objectStoreNames.contains(f.storeName)&&f.version<=f.db.version)return f.db&&(f.version=f.db.version+1),Be(f)}).then(function(){return Ze(f).then(function(){ge(f,v,m,w-1)})}).catch(m);m(y)}}function De(){return{forages:[],db:null,dbReady:null,deferredOperations:[]}}function Je(f){var v=this,m={db:null};if(f)for(var w in f)m[w]=f[w];var E=G[m.name];E||(E=De(),G[m.name]=E),E.forages.push(v),v._initReady||(v._initReady=v.ready,v.ready=Ke);var y=[];function F(){return x.resolve()}for(var c=0;c<E.forages.length;c++){var n=E.forages[c];n!==v&&y.push(n._initReady().catch(F))}var o=E.forages.slice(0);return x.all(y).then(function(){return m.db=E.db,me(m)}).then(function(i){return m.db=i,ke(m,v._defaultConfig.version)?Be(m):i}).then(function(i){m.db=E.db=i,v._dbInfo=m;for(var b=0;b<o.length;b++){var p=o[b];p!==v&&(p._dbInfo.db=m.db,p._dbInfo.version=m.version)}})}function Nt(f,v){var m=this;f=k(f);var w=new x(function(E,y){m.ready().then(function(){ge(m._dbInfo,te,function(F,c){if(F)return y(F);try{var n=c.objectStore(m._dbInfo.storeName),o=n.get(f);o.onsuccess=function(){var i=o.result;i===void 0&&(i=null),ft(i)&&(i=le(i)),E(i)},o.onerror=function(){y(o.error)}}catch(i){y(i)}})}).catch(y)});return I(w,v),w}function mr(f,v){var m=this,w=new x(function(E,y){m.ready().then(function(){ge(m._dbInfo,te,function(F,c){if(F)return y(F);try{var n=c.objectStore(m._dbInfo.storeName),o=n.openCursor(),i=1;o.onsuccess=function(){var b=o.result;if(b){var p=b.value;ft(p)&&(p=le(p));var C=f(p,b.key,i++);C!==void 0?E(C):b.continue()}else E()},o.onerror=function(){y(o.error)}}catch(b){y(b)}})}).catch(y)});return I(w,v),w}function pr(f,v,m){var w=this;f=k(f);var E=new x(function(y,F){var c;w.ready().then(function(){return c=w._dbInfo,Z.call(v)==="[object Blob]"?W(c.db).then(function(n){return n?v:qe(v)}):v}).then(function(n){ge(w._dbInfo,U,function(o,i){if(o)return F(o);try{var b=i.objectStore(w._dbInfo.storeName);n===null&&(n=void 0);var p=b.put(n,f);i.oncomplete=function(){n===void 0&&(n=null),y(n)},i.onabort=i.onerror=function(){var C=p.error?p.error:p.transaction.error;F(C)}}catch(C){F(C)}})}).catch(F)});return I(E,m),E}function Ht(f,v){var m=this;f=k(f);var w=new x(function(E,y){m.ready().then(function(){ge(m._dbInfo,U,function(F,c){if(F)return y(F);try{var n=c.objectStore(m._dbInfo.storeName),o=n.delete(f);c.oncomplete=function(){E()},c.onerror=function(){y(o.error)},c.onabort=function(){var i=o.error?o.error:o.transaction.error;y(i)}}catch(i){y(i)}})}).catch(y)});return I(w,v),w}function $t(f){var v=this,m=new x(function(w,E){v.ready().then(function(){ge(v._dbInfo,U,function(y,F){if(y)return E(y);try{var c=F.objectStore(v._dbInfo.storeName),n=c.clear();F.oncomplete=function(){w()},F.onabort=F.onerror=function(){var o=n.error?n.error:n.transaction.error;E(o)}}catch(o){E(o)}})}).catch(E)});return I(m,f),m}function Xt(f){var v=this,m=new x(function(w,E){v.ready().then(function(){ge(v._dbInfo,te,function(y,F){if(y)return E(y);try{var c=F.objectStore(v._dbInfo.storeName),n=c.count();n.onsuccess=function(){w(n.result)},n.onerror=function(){E(n.error)}}catch(o){E(o)}})}).catch(E)});return I(m,f),m}function Yt(f,v){var m=this,w=new x(function(E,y){if(f<0){E(null);return}m.ready().then(function(){ge(m._dbInfo,te,function(F,c){if(F)return y(F);try{var n=c.objectStore(m._dbInfo.storeName),o=!1,i=n.openKeyCursor();i.onsuccess=function(){var b=i.result;if(!b){E(null);return}f===0||o?E(b.key):(o=!0,b.advance(f))},i.onerror=function(){y(i.error)}}catch(b){y(b)}})}).catch(y)});return I(w,v),w}function Ar(f){var v=this,m=new x(function(w,E){v.ready().then(function(){ge(v._dbInfo,te,function(y,F){if(y)return E(y);try{var c=F.objectStore(v._dbInfo.storeName),n=c.openKeyCursor(),o=[];n.onsuccess=function(){var i=n.result;if(!i){w(o);return}o.push(i.key),i.continue()},n.onerror=function(){E(n.error)}}catch(i){E(i)}})}).catch(E)});return I(m,f),m}function ca(f,v){v=T.apply(this,arguments);var m=this.config();f=typeof f!="function"&&f||{},f.name||(f.name=f.name||m.name,f.storeName=f.storeName||m.storeName);var w=this,E;if(!f.name)E=x.reject("Invalid arguments");else{var y=f.name===m.name&&w._dbInfo.db,F=y?x.resolve(w._dbInfo.db):me(f).then(function(c){var n=G[f.name],o=n.forages;n.db=c;for(var i=0;i<o.length;i++)o[i]._dbInfo.db=c;return c});f.storeName?E=F.then(function(c){if(c.objectStoreNames.contains(f.storeName)){var n=c.version+1;q(f);var o=G[f.name],i=o.forages;c.close();for(var b=0;b<i.length;b++){var p=i[b];p._dbInfo.db=null,p._dbInfo.version=n}var C=new x(function(_,L){var D=A.open(f.name,n);D.onerror=function(M){var R=D.result;R.close(),L(M)},D.onupgradeneeded=function(){var M=D.result;M.deleteObjectStore(f.storeName)},D.onsuccess=function(){var M=D.result;M.close(),_(M)}});return C.then(function(_){o.db=_;for(var L=0;L<i.length;L++){var D=i[L];D._dbInfo.db=_,J(D._dbInfo)}}).catch(function(_){throw(ae(f,_)||x.resolve()).catch(function(){}),_})}}):E=F.then(function(c){q(f);var n=G[f.name],o=n.forages;c.close();for(var i=0;i<o.length;i++){var b=o[i];b._dbInfo.db=null}var p=new x(function(C,_){var L=A.deleteDatabase(f.name);L.onerror=L.onblocked=function(D){var M=L.result;M&&M.close(),_(D)},L.onsuccess=function(){var D=L.result;D&&D.close(),C(D)}});return p.then(function(C){n.db=C;for(var _=0;_<o.length;_++){var L=o[_];J(L._dbInfo)}}).catch(function(C){throw(ae(f,C)||x.resolve()).catch(function(){}),C})})}return I(E,v),E}var ha={_driver:"asyncStorage",_initStorage:Je,_support:g(),iterate:mr,getItem:Nt,setItem:pr,removeItem:Ht,clear:$t,length:Xt,key:Yt,keys:Ar,dropInstance:ca};function ua(){return typeof openDatabase=="function"}var Le="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",gr="~~local_forage_type~",Wt=/^~~local_forage_type~([^~]+)~/,dt="__lfsc__:",Mt=dt.length,St="arbf",mt="blob",Vt="si08",br="ui08",xr="uic8",Cr="si16",pt="si32",vr="ur16",zt="ui32",jt="fl32",qt="fl64",Ir=Mt+St.length,yr=Object.prototype.toString;function Pt(f){var v=f.length*.75,m=f.length,w,E=0,y,F,c,n;f[f.length-1]==="="&&(v--,f[f.length-2]==="="&&v--);var o=new ArrayBuffer(v),i=new Uint8Array(o);for(w=0;w<m;w+=4)y=Le.indexOf(f[w]),F=Le.indexOf(f[w+1]),c=Le.indexOf(f[w+2]),n=Le.indexOf(f[w+3]),i[E++]=y<<2|F>>4,i[E++]=(F&15)<<4|c>>2,i[E++]=(c&3)<<6|n&63;return o}function z(f){var v=new Uint8Array(f),m="",w;for(w=0;w<v.length;w+=3)m+=Le[v[w]>>2],m+=Le[(v[w]&3)<<4|v[w+1]>>4],m+=Le[(v[w+1]&15)<<2|v[w+2]>>6],m+=Le[v[w+2]&63];return v.length%3===2?m=m.substring(0,m.length-1)+"=":v.length%3===1&&(m=m.substring(0,m.length-2)+"=="),m}function wr(f,v){var m="";if(f&&(m=yr.call(f)),f&&(m==="[object ArrayBuffer]"||f.buffer&&yr.call(f.buffer)==="[object ArrayBuffer]")){var w,E=dt;f instanceof ArrayBuffer?(w=f,E+=St):(w=f.buffer,m==="[object Int8Array]"?E+=Vt:m==="[object Uint8Array]"?E+=br:m==="[object Uint8ClampedArray]"?E+=xr:m==="[object Int16Array]"?E+=Cr:m==="[object Uint16Array]"?E+=vr:m==="[object Int32Array]"?E+=pt:m==="[object Uint32Array]"?E+=zt:m==="[object Float32Array]"?E+=jt:m==="[object Float64Array]"?E+=qt:v(new Error("Failed to get type for BinaryArray"))),v(E+z(w))}else if(m==="[object Blob]"){var y=new FileReader;y.onload=function(){var F=gr+f.type+"~"+z(this.result);v(dt+mt+F)},y.readAsArrayBuffer(f)}else try{v(JSON.stringify(f))}catch(F){console.error("Couldn't convert value into a JSON string: ",f),v(null,F)}}function Kt(f){if(f.substring(0,Mt)!==dt)return JSON.parse(f);var v=f.substring(Ir),m=f.substring(Mt,Ir),w;if(m===mt&&Wt.test(v)){var E=v.match(Wt);w=E[1],v=v.substring(E[0].length)}var y=Pt(v);switch(m){case St:return y;case mt:return B([y],{type:w});case Vt:return new Int8Array(y);case br:return new Uint8Array(y);case xr:return new Uint8ClampedArray(y);case Cr:return new Int16Array(y);case vr:return new Uint16Array(y);case pt:return new Int32Array(y);case zt:return new Uint32Array(y);case jt:return new Float32Array(y);case qt:return new Float64Array(y);default:throw new Error("Unkown type: "+m)}}var Re={serialize:wr,deserialize:Kt,stringToBuffer:Pt,bufferToString:z};function Er(f,v,m,w){f.executeSql("CREATE TABLE IF NOT EXISTS "+v.storeName+" (id INTEGER PRIMARY KEY, key unique, value)",[],m,w)}function et(f){var v=this,m={db:null};if(f)for(var w in f)m[w]=typeof f[w]!="string"?f[w].toString():f[w];var E=new x(function(y,F){try{m.db=openDatabase(m.name,String(m.version),m.description,m.size)}catch(c){return F(c)}m.db.transaction(function(c){Er(c,m,function(){v._dbInfo=m,y()},function(n,o){F(o)})},F)});return m.serializer=Re,E}function ne(f,v,m,w,E,y){f.executeSql(m,w,E,function(F,c){c.code===c.SYNTAX_ERR?F.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?",[v.storeName],function(n,o){o.rows.length?y(n,c):Er(n,v,function(){n.executeSql(m,w,E,y)},y)},y):y(F,c)},y)}function fa(f,v){var m=this;f=k(f);var w=new x(function(E,y){m.ready().then(function(){var F=m._dbInfo;F.db.transaction(function(c){ne(c,F,"SELECT * FROM "+F.storeName+" WHERE key = ? LIMIT 1",[f],function(n,o){var i=o.rows.length?o.rows.item(0).value:null;i&&(i=F.serializer.deserialize(i)),E(i)},function(n,o){y(o)})})}).catch(y)});return I(w,v),w}function Br(f,v){var m=this,w=new x(function(E,y){m.ready().then(function(){var F=m._dbInfo;F.db.transaction(function(c){ne(c,F,"SELECT * FROM "+F.storeName,[],function(n,o){for(var i=o.rows,b=i.length,p=0;p<b;p++){var C=i.item(p),_=C.value;if(_&&(_=F.serializer.deserialize(_)),_=f(_,C.key,p+1),_!==void 0){E(_);return}}E()},function(n,o){y(o)})})}).catch(y)});return I(w,v),w}function ce(f,v,m,w){var E=this;f=k(f);var y=new x(function(F,c){E.ready().then(function(){v===void 0&&(v=null);var n=v,o=E._dbInfo;o.serializer.serialize(v,function(i,b){b?c(b):o.db.transaction(function(p){ne(p,o,"INSERT OR REPLACE INTO "+o.storeName+" (key, value) VALUES (?, ?)",[f,i],function(){F(n)},function(C,_){c(_)})},function(p){if(p.code===p.QUOTA_ERR){if(w>0){F(ce.apply(E,[f,n,m,w-1]));return}c(p)}})})}).catch(c)});return I(y,m),y}function ie(f,v,m){return ce.apply(this,[f,v,m,1])}function da(f,v){var m=this;f=k(f);var w=new x(function(E,y){m.ready().then(function(){var F=m._dbInfo;F.db.transaction(function(c){ne(c,F,"DELETE FROM "+F.storeName+" WHERE key = ?",[f],function(){E()},function(n,o){y(o)})})}).catch(y)});return I(w,v),w}function tt(f){var v=this,m=new x(function(w,E){v.ready().then(function(){var y=v._dbInfo;y.db.transaction(function(F){ne(F,y,"DELETE FROM "+y.storeName,[],function(){w()},function(c,n){E(n)})})}).catch(E)});return I(m,f),m}function ma(f){var v=this,m=new x(function(w,E){v.ready().then(function(){var y=v._dbInfo;y.db.transaction(function(F){ne(F,y,"SELECT COUNT(key) as c FROM "+y.storeName,[],function(c,n){var o=n.rows.item(0).c;w(o)},function(c,n){E(n)})})}).catch(E)});return I(m,f),m}function Ue(f,v){var m=this,w=new x(function(E,y){m.ready().then(function(){var F=m._dbInfo;F.db.transaction(function(c){ne(c,F,"SELECT key FROM "+F.storeName+" WHERE id = ? LIMIT 1",[f+1],function(n,o){var i=o.rows.length?o.rows.item(0).key:null;E(i)},function(n,o){y(o)})})}).catch(y)});return I(w,v),w}function pa(f){var v=this,m=new x(function(w,E){v.ready().then(function(){var y=v._dbInfo;y.db.transaction(function(F){ne(F,y,"SELECT key FROM "+y.storeName,[],function(c,n){for(var o=[],i=0;i<n.rows.length;i++)o.push(n.rows.item(i).key);w(o)},function(c,n){E(n)})})}).catch(E)});return I(m,f),m}function fe(f){return new x(function(v,m){f.transaction(function(w){w.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",[],function(E,y){for(var F=[],c=0;c<y.rows.length;c++)F.push(y.rows.item(c).name);v({db:f,storeNames:F})},function(E,y){m(y)})},function(w){m(w)})})}function Te(f,v){v=T.apply(this,arguments);var m=this.config();f=typeof f!="function"&&f||{},f.name||(f.name=f.name||m.name,f.storeName=f.storeName||m.storeName);var w=this,E;return f.name?E=new x(function(y){var F;f.name===m.name?F=w._dbInfo.db:F=openDatabase(f.name,"","",0),f.storeName?y({db:F,storeNames:[f.storeName]}):y(fe(F))}).then(function(y){return new x(function(F,c){y.db.transaction(function(n){function o(C){return new x(function(_,L){n.executeSql("DROP TABLE IF EXISTS "+C,[],function(){_()},function(D,M){L(M)})})}for(var i=[],b=0,p=y.storeNames.length;b<p;b++)i.push(o(y.storeNames[b]));x.all(i).then(function(){F()}).catch(function(C){c(C)})},function(n){c(n)})})}):E=x.reject("Invalid arguments"),I(E,v),E}var rt={_driver:"webSQLStorage",_initStorage:et,_support:ua(),iterate:Br,getItem:fa,setItem:ie,removeItem:da,clear:tt,length:ma,key:Ue,keys:pa,dropInstance:Te};function Aa(){try{return typeof localStorage!="undefined"&&"setItem"in localStorage&&!!localStorage.setItem}catch(f){return!1}}function Dt(f,v){var m=f.name+"/";return f.storeName!==v.storeName&&(m+=f.storeName+"/"),m}function Zt(){var f="_localforage_support_test";try{return localStorage.setItem(f,!0),localStorage.removeItem(f),!1}catch(v){return!0}}function At(){return!Zt()||localStorage.length>0}function ga(f){var v=this,m={};if(f)for(var w in f)m[w]=f[w];return m.keyPrefix=Dt(f,v._defaultConfig),At()?(v._dbInfo=m,m.serializer=Re,x.resolve()):x.reject()}function _r(f){var v=this,m=v.ready().then(function(){for(var w=v._dbInfo.keyPrefix,E=localStorage.length-1;E>=0;E--){var y=localStorage.key(E);y.indexOf(w)===0&&localStorage.removeItem(y)}});return I(m,f),m}function _e(f,v){var m=this;f=k(f);var w=m.ready().then(function(){var E=m._dbInfo,y=localStorage.getItem(E.keyPrefix+f);return y&&(y=E.serializer.deserialize(y)),y});return I(w,v),w}function Ie(f,v){var m=this,w=m.ready().then(function(){for(var E=m._dbInfo,y=E.keyPrefix,F=y.length,c=localStorage.length,n=1,o=0;o<c;o++){var i=localStorage.key(o);if(i.indexOf(y)===0){var b=localStorage.getItem(i);if(b&&(b=E.serializer.deserialize(b)),b=f(b,i.substring(F),n++),b!==void 0)return b}}});return I(w,v),w}function at(f,v){var m=this,w=m.ready().then(function(){var E=m._dbInfo,y;try{y=localStorage.key(f)}catch(F){y=null}return y&&(y=y.substring(E.keyPrefix.length)),y});return I(w,v),w}function Mr(f){var v=this,m=v.ready().then(function(){for(var w=v._dbInfo,E=localStorage.length,y=[],F=0;F<E;F++){var c=localStorage.key(F);c.indexOf(w.keyPrefix)===0&&y.push(c.substring(w.keyPrefix.length))}return y});return I(m,f),m}function Jt(f){var v=this,m=v.keys().then(function(w){return w.length});return I(m,f),m}function ba(f,v){var m=this;f=k(f);var w=m.ready().then(function(){var E=m._dbInfo;localStorage.removeItem(E.keyPrefix+f)});return I(w,v),w}function Sr(f,v,m){var w=this;f=k(f);var E=w.ready().then(function(){v===void 0&&(v=null);var y=v;return new x(function(F,c){var n=w._dbInfo;n.serializer.serialize(v,function(o,i){if(i)c(i);else try{localStorage.setItem(n.keyPrefix+f,o),F(y)}catch(b){(b.name==="QuotaExceededError"||b.name==="NS_ERROR_DOM_QUOTA_REACHED")&&c(b),c(b)}})})});return I(E,m),E}function Pr(f,v){if(v=T.apply(this,arguments),f=typeof f!="function"&&f||{},!f.name){var m=this.config();f.name=f.name||m.name,f.storeName=f.storeName||m.storeName}var w=this,E;return f.name?E=new x(function(y){f.storeName?y(Dt(f,w._defaultConfig)):y(f.name+"/")}).then(function(y){for(var F=localStorage.length-1;F>=0;F--){var c=localStorage.key(F);c.indexOf(y)===0&&localStorage.removeItem(c)}}):E=x.reject("Invalid arguments"),I(E,v),E}var gt={_driver:"localStorageWrapper",_initStorage:ga,_support:Aa(),iterate:Ie,getItem:_e,setItem:Sr,removeItem:ba,clear:_r,length:Jt,key:at,keys:Mr,dropInstance:Pr},xa=function(v,m){return v===m||typeof v=="number"&&typeof m=="number"&&isNaN(v)&&isNaN(m)},Rt=function(v,m){for(var w=v.length,E=0;E<w;){if(xa(v[E],m))return!0;E++}return!1},Dr=Array.isArray||function(f){return Object.prototype.toString.call(f)==="[object Array]"},ye={},Rr={},nt={INDEXEDDB:ha,WEBSQL:rt,LOCALSTORAGE:gt},Tr=[nt.INDEXEDDB._driver,nt.WEBSQL._driver,nt.LOCALSTORAGE._driver],Tt=["dropInstance"],er=["clear","getItem","iterate","key","keys","length","removeItem","setItem"].concat(Tt),Ca={description:"",driver:Tr.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1};function va(f,v){f[v]=function(){var m=arguments;return f.ready().then(function(){return f[v].apply(f,m)})}}function tr(){for(var f=1;f<arguments.length;f++){var v=arguments[f];if(v)for(var m in v)v.hasOwnProperty(m)&&(Dr(v[m])?arguments[0][m]=v[m].slice():arguments[0][m]=v[m])}return arguments[0]}var Ia=(function(){function f(v){u(this,f);for(var m in nt)if(nt.hasOwnProperty(m)){var w=nt[m],E=w._driver;this[m]=E,ye[E]||this.defineDriver(w)}this._defaultConfig=tr({},Ca),this._config=tr({},this._defaultConfig,v),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver).catch(function(){})}return f.prototype.config=function(m){if((typeof m=="undefined"?"undefined":h(m))==="object"){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(var w in m){if(w==="storeName"&&(m[w]=m[w].replace(/\W/g,"_")),w==="version"&&typeof m[w]!="number")return new Error("Database version must be a number.");this._config[w]=m[w]}return"driver"in m&&m.driver?this.setDriver(this._config.driver):!0}else return typeof m=="string"?this._config[m]:this._config},f.prototype.defineDriver=function(m,w,E){var y=new x(function(F,c){try{var n=m._driver,o=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");if(!m._driver){c(o);return}for(var i=er.concat("_initStorage"),b=0,p=i.length;b<p;b++){var C=i[b],_=!Rt(Tt,C);if((_||m[C])&&typeof m[C]!="function"){c(o);return}}var L=function(){for(var R=function(ee){return function(){var he=new Error("Method "+ee+" is not implemented by the current driver"),ue=x.reject(he);return I(ue,arguments[arguments.length-1]),ue}},O=0,K=Tt.length;O<K;O++){var j=Tt[O];m[j]||(m[j]=R(j))}};L();var D=function(R){ye[n]&&console.info("Redefining LocalForage driver: "+n),ye[n]=m,Rr[n]=R,F()};"_support"in m?m._support&&typeof m._support=="function"?m._support().then(D,c):D(!!m._support):D(!0)}catch(M){c(M)}});return P(y,w,E),y},f.prototype.driver=function(){return this._driver||null},f.prototype.getDriver=function(m,w,E){var y=ye[m]?x.resolve(ye[m]):x.reject(new Error("Driver not found."));return P(y,w,E),y},f.prototype.getSerializer=function(m){var w=x.resolve(Re);return P(w,m),w},f.prototype.ready=function(m){var w=this,E=w._driverSet.then(function(){return w._ready===null&&(w._ready=w._initDriver()),w._ready});return P(E,m,m),E},f.prototype.setDriver=function(m,w,E){var y=this;Dr(m)||(m=[m]);var F=this._getSupportedDrivers(m);function c(){y._config.driver=y.driver()}function n(b){return y._extend(b),c(),y._ready=y._initStorage(y._config),y._ready}function o(b){return function(){var p=0;function C(){for(;p<b.length;){var _=b[p];return p++,y._dbInfo=null,y._ready=null,y.getDriver(_).then(n).catch(C)}c();var L=new Error("No available storage method found.");return y._driverSet=x.reject(L),y._driverSet}return C()}}var i=this._driverSet!==null?this._driverSet.catch(function(){return x.resolve()}):x.resolve();return this._driverSet=i.then(function(){var b=F[0];return y._dbInfo=null,y._ready=null,y.getDriver(b).then(function(p){y._driver=p._driver,c(),y._wrapLibraryMethodsWithReady(),y._initDriver=o(F)})}).catch(function(){c();var b=new Error("No available storage method found.");return y._driverSet=x.reject(b),y._driverSet}),P(this._driverSet,w,E),this._driverSet},f.prototype.supports=function(m){return!!Rr[m]},f.prototype._extend=function(m){tr(this,m)},f.prototype._getSupportedDrivers=function(m){for(var w=[],E=0,y=m.length;E<y;E++){var F=m[E];this.supports(F)&&w.push(F)}return w},f.prototype._wrapLibraryMethodsWithReady=function(){for(var m=0,w=er.length;m<w;m++)va(this,er[m])},f.prototype.createInstance=function(m){return new f(m)},f})(),ya=new Ia;s.exports=ya},{3:3}]},{},[4])(4)})});function S(e,t,r){return(e&255)<<0|(t&255)<<8|(r&255)<<16}var Lr=[S(0,0,0),S(255,255,255)],vc=[S(0,0,0),S(255,128,64),S(64,255,128),S(128,64,255),S(255,255,255)],Ic=[0,16777215,S(163,64,69),S(125,235,228),S(174,70,186),S(94,202,84),S(60,57,200),S(255,255,111),S(174,96,47),S(110,73,0),S(232,122,128),S(92,92,92),S(143,143,143),S(179,255,167),S(129,126,255),S(199,199,199)],Ne=[S(0,0,0),S(255,255,255),S(129,51,56),S(117,206,200),S(142,60,151),S(86,172,77),S(46,44,155),S(237,241,113),S(142,80,41),S(85,56,0),S(196,108,113),S(74,74,74),S(123,123,123),S(169,255,159),S(112,109,235),S(178,178,178)],Ma=[S(0,0,0),S(255,255,255),S(120,41,34),S(135,214,221),S(170,95,182),S(85,160,73),S(64,49,141),S(191,206,114),S(170,116,73),S(234,180,137),S(184,105,98),S(199,255,255),S(234,159,246),S(148,224,137),S(128,113,204),S(255,255,178)],vn=[S(0,0,0),S(0,0,0),S(33,200,66),S(94,220,120),S(84,85,237),S(125,118,252),S(212,82,77),S(66,235,245),S(252,85,84),S(255,121,120),S(212,193,84),S(230,206,128),S(33,176,59),S(201,91,186),S(204,204,204),S(255,255,255)],Qr=[5395026,11796480,10485760,11599933,7602281,91,95,6208,12048,543240,26368,1196544,7153664,0,0,0,12899815,16728064,14421538,16729963,14090399,6818519,6588,21681,27227,35843,43776,2918400,10777088,0,0,0,16316664,16755516,16742785,16735173,16730354,14633471,4681215,46327,57599,58229,259115,7911470,15065624,7895160,0,0,16777215,16773822,16300216,16300248,16758527,16761855,13095423,10148607,8973816,8650717,12122296,16119980,16777136,16308472,0,0],In=[S(0,0,0),S(255,68,253),S(20,245,60),S(20,207,253),S(255,106,60),S(255,255,255)],Sa=[S(0,0,0),S(227,30,96),S(96,78,189),S(255,68,253),S(0,163,96),S(156,156,156),S(20,207,253),S(208,195,255),S(96,114,3),S(255,106,60),S(156,156,156),S(255,160,208),S(20,245,60),S(208,221,141),S(114,255,208),S(255,255,255)],yn=[0,2368548,4737096,7171437,9539985,11974326,14342874,16777215,12255269,14680137,16716142,16725394,16734903,16744155,16753663,16762879,11534409,13959277,16318866,16721334,16730842,16740095,16749311,16758783,10420330,12779662,15138995,16718039,16727291,16736767,16745983,16755199,8847495,11206827,13631696,15994612,16724735,16733951,16743423,16752639,6946975,9306307,11731175,14092287,16461055,16732415,16741631,16751103,4784304,7143637,9568505,11929087,14297599,16731647,16741119,16750335,2425019,4784352,7209215,9570047,12004095,14372863,16741375,16750847,191,2359523,4718847,7146495,9515263,11949311,14318079,16752127,187,224,2294015,4658431,7092735,9461247,11895551,14264063,176,213,249,2367999,4736511,7105279,9539327,11908095,159,195,3303,209151,2577919,4946431,7380735,9749247,135,171,7888,17140,681983,3050495,5484543,7853311,106,3470,12723,22231,31483,1548031,3916799,6285311,73,8557,17810,27318,36570,373759,2742271,5176575,4389,13641,23150,32402,41911,51163,2026495,4456447,9472,18724,27976,37485,46737,56246,1834970,4194303,14080,23296,32803,42055,51564,60816,2031541,4456409,18176,27648,36864,46116,55624,392556,2752401,5177269,21760,30976,40192,49667,58919,1572683,3932016,6291348,24320,33536,43008,52224,716810,3079982,5504851,7864183,25856,35328,44544,250368,2619136,4980503,7405371,9764703,26624,35840,45312,2413824,4782336,7143173,9568041,11927374,26112,35584,2338560,4707328,7141376,9502464,11927326,14286659,24832,2393344,4762112,7196160,9564928,11992832,14352155,16711487,2447360,4815872,7250176,9618688,12052992,14417664,16776990,16777027,4803328,7172096,9606144,11974912,14343424,16776965,16777001,16777038,6962176,9330688,11764992,14133504,16502272,16773655,16777019,16777055,8858112,11226880,13660928,16029440,16759818,16769070,16777043,16777079,10426112,12794624,15163392,16745475,16754727,16764235,16773488,16777108,11534848,13969152,16337664,16740388,16749640,16759148,16768401,16777141,12255232,14684928,16725795,16735047,16744556,16753808,16763317,16772569],Ve=[0,0,4210752,4210752,7105644,7105644,9474192,9474192,11579568,11579568,13158600,13158600,14474460,14474460,16053492,16053492,17476,17476,1074276,1074276,2393220,2393220,3448992,3448992,4241592,4241592,5296336,5296336,6088936,6088936,6880508,6880508,10352,10352,1328260,1328260,2645144,2645144,3963052,3963052,5016764,5016764,6070476,6070476,6862044,6862044,7915756,7915756,6276,6276,1586328,1586328,3166380,3166380,4745408,4745408,6062288,6062288,7378144,7378144,8431852,8431852,9747708,9747708,136,136,2105500,2105500,3947696,3947696,5789888,5789888,7368912,7368912,8947936,8947936,10526956,10526956,11842812,11842812,6029432,6029432,7610508,7610508,8928416,8928416,10246320,10246320,11563200,11563200,12616912,12616912,13671644,13671644,14725356,14725356,7864392,7864392,9445472,9445472,10763384,10763384,12081292,12081292,13398176,13398176,14451892,14451892,15506628,15506628,16560340,16560340,8650772,8650772,9969712,9969712,11287628,11287628,12605544,12605544,13660284,13660284,14715028,14715028,15507624,15507624,16561340,16561340,8912896,8912896,10231836,10231836,11550776,11550776,12606544,12606544,13661288,13661288,14716028,14716028,15508624,15508624,16562340,16562340,8132608,8132608,9451548,9451548,11031608,11031608,12349520,12349520,13404264,13404264,14457980,14457980,15512720,15512720,16566436,16566436,6040576,6040576,7883804,7883804,9463864,9463864,11306064,11306064,12622952,12622952,13939836,13939836,15256720,15256720,16572580,16572580,2898944,2898944,4742172,4742172,6585400,6585400,8428624,8428624,9745512,9745512,11325564,11325564,12641424,12641424,13958308,13958308,15360,15360,2120736,2120736,4226112,4226112,6069340,6069340,7648372,7648372,9228428,9228428,10806436,10806436,12123320,12123320,14356,14356,1858612,1858612,3701840,3701840,5281900,5281900,6861956,6861956,8178844,8178844,9495732,9495732,10812616,10812616,12332,12332,1855564,1855564,3436648,3436648,5016708,5016708,6596764,6596764,7913652,7913652,8967372,8967372,10284256,10284256,10308,10308,1591396,1591396,3172484,3172484,4490400,4490400,5807288,5807288,7124176,7124176,8178920,8178920,9232636,9232636],Pa=[0,11141120,43520,11184640,170,11141290,21930,11184810,5592405,16733525,5635925,16777045,5592575,16733695,5636095,16777215],wn=[0,43520,170,21930],En=[0,11184640,11141290,11184810],Bn=[0,11184640,170,11184810],_n=[0,5635925,5592575,5636095],Mn=[0,16777045,16733695,16777215],Sn=[0,16776960,5592575,16777215],Or=st(2,2,2),Pn=st(3,3,2),Dn=st(4,4,4),Da=st(3,3,3),Ra=st(1,1,1),vt=[S(0,0,0),S(1,0,206),S(207,1,0),S(207,1,206),S(0,207,21),S(1,207,207),S(207,207,21),S(207,207,207),S(0,0,0),S(2,0,253),S(255,2,1),S(255,2,253),S(0,255,28),S(2,255,255),S(255,255,29),S(255,255,255)],ot=[S(0,0,0),S(0,117,255),S(255,76,57),S(209,185,81),S(9,185,0),S(48,223,16),S(255,229,1),S(255,255,255),S(140,140,140),S(40,229,192),S(255,160,46),S(100,103,0),S(255,41,255),S(140,143,255),S(124,237,0),S(196,43,252)],Ta=[0,8388752,16711680,128,8388736,16711808,255,8388863,16711935,32768,8421376,16744448,32896,8421504,16744576,33023,8421631,16744703,65280,8453888,16776960,65408,8454016,16777088,65535,8454143,16777215],Rn=[0,1911635,8267091,34641,11227702,6248271,12764103,16773608,16711757,16753408,16772135,58422,2731519,8615580,16742312,16764074],Tn=[1313820,4465716,3159149,5130831,8735792,3433764,13649480,7696737,5864910,13794604,8754593,7186988,13806233,7193290,14341214,14610134],Fn=[16579836,16724307,183389,4931571],Ur=[997391,3170864,1027212,1035436];var go=st(3,3,3),Gr=st(4,4,4),bo=st(5,5,5),Nr=bo,ar=Gr,kn=Gr,Fa=Gr,Ln=Gr,Hr=go,It=xo(),Qn=Co(),$r=[S(48,210,0),S(245,245,128),S(76,58,180),S(154,50,54)],Xr=[S(216,216,216),S(65,175,113),S(216,110,240),S(212,127,0)];function st(e,t,r){for(var a=1<<e+t+r,s=255/((1<<e)-1),l=255/((1<<t)-1),h=255/((1<<r)-1),u=new Uint32Array(a),d=0;d<a;d++){var A=d&(1<<e)-1,g=d>>e&(1<<t)-1,B=d>>e+t&(1<<r)-1;u[d]=S(A*s,g*l,B*h)}return u}function xo(){let e=new Uint32Array(32768),t=0;for(let r=0;r<32;++r)for(let a=0;a<32;++a)for(let s=0;s<32;++s,++t){let l=r<<3|a<<11|s<<19;l|=(r&28)>>2|(a&28)>>2<<8|(s&28)>>2<<16,e[t]=l}return e}function Co(){let e=new Uint32Array(2048),t=0;for(let r=0;r<16;++r)for(let a=0;a<16;++a)for(let s=0;s<8;++s,++t){let l=r<<4|a<<12|s<<21;e[t]=l}return e}var Ft=[{id:"c64.multi",name:"C-64 Multi",width:160,height:200,scaleX:.936*2,conv:"VICII_Canvas",pal:Ne,block:{w:4,h:8,colors:4,xb:1,yb:2},cell:{w:4,h:8,msbToLsb:!0},paletteChoices:{background:!0},cb:{w:4,h:8,xb:1,yb:2},param:{extra:1},toNative:"exportC64Multi"},{id:"c64.multi.fli",name:"C-64 Multi FLI (w/o bug)",width:160,height:200,scaleX:.936*2,conv:"VICII_Canvas",pal:Ne,block:{w:4,h:1,colors:4,xb:1},paletteChoices:{background:!0},cell:{w:4,h:8,msbToLsb:!0},cb:{w:4,h:8,xb:1,yb:2},param:{extra:1},fli:{bug:!1,blankLeft:!1,blankRight:!1,blankColumns:3},toNative:"exportC64Multi"},{id:"c64.multi.fli.bug",name:"C-64 Multi FLI (with bug)",width:160,height:200,scaleX:.936*2,conv:"VICII_Canvas",pal:Ne,block:{w:4,h:1,colors:4,xb:1},cell:{w:4,h:8,msbToLsb:!0},paletteChoices:{background:!0},cb:{w:4,h:8,xb:1,yb:2},param:{extra:1},fli:{bug:!0,blankLeft:!1,blankRight:!1,blankColumns:3},toNative:"exportC64Multi"},{id:"c64.multi.fli.blank.left",name:"C-64 Multi FLI (Left blank)",width:160,height:200,scaleX:.936*2,conv:"VICII_Canvas",pal:Ne,block:{w:4,h:1,colors:4,xb:1},cell:{w:4,h:8,msbToLsb:!0},paletteChoices:{background:!0},cb:{w:4,h:8,xb:1,yb:2},param:{extra:1},fli:{bug:!1,blankLeft:!0,blankRight:!1,blankColumns:3},toNative:"exportC64Multi"},{id:"c64.multi.fli.blank",name:"C-64 Multi FLI (L/R blank)",width:160,height:200,scaleX:.936*2,conv:"VICII_Canvas",pal:Ne,block:{w:4,h:1,colors:4,xb:1},cell:{w:4,h:8,msbToLsb:!0},paletteChoices:{background:!0},cb:{w:4,h:8,xb:1,yb:2},param:{extra:1},fli:{bug:!1,blankLeft:!0,blankRight:!0,blankColumns:3},toNative:"exportC64Multi"},{id:"c64.hires",name:"C-64 Hires",width:320,height:200,scaleX:.936,conv:"VICII_Canvas",pal:Ne,block:{w:8,h:8,colors:2},cell:{w:8,h:8,msbToLsb:!0},param:{extra:1},toNative:"exportC64Hires"},{id:"c64.hires.fli",name:"C-64 Hires FLI (w/o bug)",width:320,height:200,scaleX:.936,conv:"VICII_Canvas",pal:Ne,block:{w:8,h:1,colors:2},cell:{w:8,h:8,msbToLsb:!0},param:{extra:1},fli:{bug:!1,blankLeft:!1,blankRight:!1,blankColumns:3},toNative:"exportC64Hires"},{id:"c64.hires.fli.bug",name:"C-64 Hires FLI (with bug)",width:320,height:200,scaleX:.936,conv:"VICII_Canvas",pal:Ne,block:{w:8,h:1,colors:2},cell:{w:8,h:8,msbToLsb:!0},param:{extra:1},fli:{bug:!0,blankLeft:!1,blankRight:!1,blankColumns:3},toNative:"exportC64Hires"},{id:"c64.hires.fli.blank",name:"C-64 Hires FLI (L/R blank)",width:320,height:200,scaleX:.936,conv:"VICII_Canvas",pal:Ne,block:{w:8,h:1,colors:2},cell:{w:8,h:8,msbToLsb:!0},param:{extra:1},fli:{bug:!1,blankLeft:!0,blankRight:!0,blankColumns:3},toNative:"exportC64Hires"},{id:"nes",name:"NES (4 color, 240 tiles)",width:160,height:96,scaleX:8/7,conv:"DitheringCanvas",pal:Qr,reduce:4,toNative:"exportNES"},{id:"msx",name:"MSX/Coleco (TMS9918A)",width:256,height:192,conv:"Msx_Canvas",pal:vn,block:{w:8,h:1,colors:2},cell:{w:8,h:8,msbToLsb:!0},toNative:"exportTMS9918"},{id:"apple2.hires",name:"Apple ][ (Hires)",width:140,height:192,scaleX:2,conv:"Apple2_Canvas",pal:In,block:{w:7,h:1,colors:4},toNative:"exportApple2HiresToHGR"},{id:"atari8.d",name:"Atari ANTIC (Mode D)",width:160,height:96,scaleX:.8571,conv:"DitheringCanvas",pal:Ve,reduce:4,toNative:"exportFrameBuffer",exportFormat:{bpp:2,brev:!0}},{id:"atari8.e",name:"Atari ANTIC (Mode E)",width:160,height:192,scaleX:.8571*2,conv:"DitheringCanvas",pal:Ve,reduce:4,toNative:"exportFrameBuffer",exportFormat:{bpp:2,brev:!0}},{id:"atari8.f.10",name:"Atari ANTIC (Mode F/10)",width:80,height:192,scaleX:.8571*4,conv:"DitheringCanvas",pal:Ve,reduce:9,toNative:"exportFrameBuffer",exportFormat:{bpp:4,brev:!0}},{id:"vcs",name:"Atari VCS",width:40,height:192,scaleX:6,conv:"DitheringCanvas",pal:Ve,reduce:2,toNative:"exportVCSPlayfield"},{id:"vcs.color",name:"Atari VCS (Color)",width:40,height:192,scaleX:6,conv:"VCSColorPlayfield_Canvas",pal:Ve,toNative:"exportVCSColorPlayfield"},{id:"astrocade",name:"Bally Astrocade",width:160,height:98,scaleX:1,conv:"DitheringCanvas",pal:yn,reduce:4,toNative:"exportFrameBuffer",exportFormat:{bpp:2,brev:!0}},{id:"zx",name:"ZX Spectrum",width:256,height:192,conv:"ZXSpectrum_Canvas",pal:vt,block:{w:8,h:8,colors:2},cell:{w:8,h:8,msbToLsb:!0},toNative:"exportZXSpectrum"},{id:"zx.dark",name:"ZX Spectrum (dark only)",width:256,height:192,conv:"ZXSpectrum_Canvas",pal:vt,block:{w:8,h:8,colors:2},cell:{w:8,h:8,msbToLsb:!0},paletteChoices:{colorsRange:{min:0,max:7}},toNative:"exportZXSpectrum"},{id:"zx.bright",name:"ZX Spectrum (bright only)",width:256,height:192,conv:"ZXSpectrum_Canvas",pal:vt,block:{w:8,h:8,colors:2},cell:{w:8,h:8,msbToLsb:!0},paletteChoices:{colorsRange:{min:8,max:15}},toNative:"exportZXSpectrum"},{id:"zx.dark.bright",name:"ZX Spectrum (dark made bright only)",width:256,height:192,conv:"ZXSpectrum_Canvas",pal:vt,block:{w:8,h:8,colors:2},cell:{w:8,h:8,msbToLsb:!0},paletteChoices:{colorsRange:{min:0,max:7}},customize:{flipPalette:!0},toNative:"exportZXSpectrum"},{id:"zx.bright.dark",name:"ZX Spectrum (bright made dark only)",width:256,height:192,conv:"ZXSpectrum_Canvas",pal:vt,block:{w:8,h:8,colors:2},cell:{w:8,h:8,msbToLsb:!0},paletteChoices:{colorsRange:{min:8,max:15}},customize:{flipPalette:!0},toNative:"exportZXSpectrum"},{id:"cpc.mode0",name:"Amstrad CPC (mode 0)",width:160,height:200,scaleX:2,conv:"DitheringCanvas",pal:Ta,reduce:16,toNative:"exportFrameBuffer",exportFormat:{bpp:4,yremap:[3,80,2048],bitremap:[7,3,5,1,6,2,4,0]}},{id:"cpc.mode1",name:"Amstrad CPC (mode 1)",width:320,height:200,scaleX:1,conv:"DitheringCanvas",pal:Ta,reduce:4,toNative:"exportFrameBuffer",exportFormat:{bpp:2,yremap:[3,80,2048],bitremap:[7,3,6,2,5,1,4,0]}},{id:"vic20.hires",name:"VIC-20 Hires",width:160,height:160,scaleX:1.5,conv:"VICII_Canvas",pal:Ma,block:{w:8,h:8,colors:2},cell:{w:8,h:8,msbToLsb:!0},paletteChoices:{background:!0,backgroundRange:{min:0,max:7},colorsRange:{min:0,max:7}},toNative:"exportVicHires"},{id:"vic20.multi",name:"VIC-20 Multi",width:80,height:160,scaleX:3,conv:"VICII_Canvas",pal:Ma,block:{w:4,h:8,colors:4},cell:{w:4,h:8,msbToLsb:!0},paletteChoices:{background:!0,backgroundRange:{min:0,max:15},aux:!0,auxRange:{min:0,max:15},border:!0,borderRange:{min:0,max:7},colorsRange:{min:0,max:7}},toNative:"exportVicMulti"},{id:"nes.tiles",name:"NES (full screen, 4 colors, shared tiles)",width:256,height:240,scaleX:8/7,conv:"SNES_Canvas",pal:Qr,block:{w:8,h:8,colors:4},cell:{w:8,h:8,msbToLsb:!0},paletteChoices:{backgroundRange:{min:0,max:3},auxRange:{min:0,max:3},borderRange:{min:0,max:3},colorsRange:{min:0,max:3}},reduce:4,tiles:{max:240},toNative:"exportNESTiles"},{id:"nes.tiles.attr",name:"NES (full screen, 13 colors, shared tiles)",width:256,height:240,scaleX:8/7,conv:"SubPalette_Canvas",pal:Qr,block:{w:8,h:8,colors:4,msbToLsb:!1},cell:{w:8,h:8,msbToLsb:!0},subPalettes:{count:4,colors:4,sharedFirstColor:!0,area:{w:16,h:16},reuseWeight:.8},paletteChoices:{colorsRange:{min:0,max:63}},reduce:64,tiles:{max:240},toNative:"exportNESTiles"},{id:"snes.2bpp",name:"SNES (2bpp)",width:256,height:256,scaleX:8/7,conv:"SNES_Canvas",pal:It,block:{w:8,h:8,colors:4,msbToLsb:!1},cell:{w:8,h:8,msbToLsb:!0},paletteChoices:{backgroundRange:{min:0,max:3},auxRange:{min:0,max:3},borderRange:{min:0,max:3},colorsRange:{min:0,max:3}},customize:{outputTileset:!1,outputPalette:!1,planeToMemory:"interleaved"},reduce:4,toNative:"exportSNES"},{id:"snes.3bpp",name:"SNES (3bpp)",width:256,height:256,scaleX:8/7,conv:"SNES_Canvas",pal:It,block:{w:8,h:8,colors:8,msbToLsb:!1},cell:{w:8,h:8,msbToLsb:!0},paletteChoices:{backgroundRange:{min:0,max:7},auxRange:{min:0,max:7},borderRange:{min:0,max:7},colorsRange:{min:0,max:7}},reduce:8,customize:{planeToMemory:"interleaved"},toNative:"exportSNES"},{id:"snes.4bpp",name:"SNES (4bpp)",width:256,height:256,scaleX:8/7,conv:"SNES_Canvas",pal:It,block:{w:8,h:8,colors:16,msbToLsb:!1},cell:{w:8,h:8,msbToLsb:!0},paletteChoices:{backgroundRange:{min:0,max:15},auxRange:{min:0,max:15},borderRange:{min:0,max:15},colorsRange:{min:0,max:15}},customize:{planeToMemory:"interleaved"},reduce:16,toNative:"exportSNES"},{id:"snes.8bpp",name:"SNES (8bpp)",width:256,height:256,scaleX:8/7,conv:"SNES_Canvas",pal:It,block:{w:8,h:8,colors:256,msbToLsb:!1},cell:{w:8,h:8,msbToLsb:!0},paletteChoices:{backgroundRange:{min:0,max:255},auxRange:{min:0,max:255},borderRange:{min:0,max:255},colorsRange:{min:0,max:255}},customize:{planeToMemory:"interleaved"},reduce:256,toNative:"exportSNES"},{id:"snes.mode7",name:"SNES (Mode 7)",width:256,height:256,scaleX:8/7,conv:"SNES_Canvas",pal:It,block:{w:8,h:8,colors:256,msbToLsb:!1},cell:{w:8,h:8,msbToLsb:!0},paletteChoices:{backgroundRange:{min:0,max:255},auxRange:{min:0,max:255},borderRange:{min:0,max:255},colorsRange:{min:0,max:255}},customize:{bitsInPlane:8,planes:1},reduce:256,toNative:"exportSNES"},{id:"neo.geopocket",name:"Neo Geo Pocket Color",width:160,height:152,scaleX:1,conv:"SubPalette_Canvas",pal:Ln,block:{w:8,h:8,colors:4,msbToLsb:!1},cell:{w:8,h:8,msbToLsb:!0},subPalettes:{count:16,colors:4},paletteChoices:{colorsRange:{min:0,max:63}},reduce:64,customize:{subPalettePaletteFormat:"rgb444"},toNative:"exportNeoGeoPocketTiles"},{id:"virtualboy",name:"Virtual Boy",width:256,height:256,scaleX:1,conv:"SNES_Canvas",pal:It,block:{w:8,h:8,colors:4,msbToLsb:!1},cell:{w:8,h:8,msbToLsb:!0},paletteChoices:{backgroundRange:{min:0,max:3},auxRange:{min:0,max:3},borderRange:{min:0,max:3},colorsRange:{min:0,max:3}},customize:{outputTileset:!1,outputPalette:!1,bitsInPlane:2,planes:1,planeLittleEndian:!0},reduce:4,toNative:"exportSNES"},{id:"genesis",name:"Genesis (4bpp)",width:256,height:256,scaleX:1,conv:"SNES_Canvas",pal:Hr,block:{w:8,h:8,colors:16,msbToLsb:!1},cell:{w:8,h:8,msbToLsb:!0},paletteChoices:{backgroundRange:{min:0,max:15},auxRange:{min:0,max:15},borderRange:{min:0,max:15},colorsRange:{min:0,max:15}},customize:{outputTileset:!1,outputPalette:!1,bitsInPlane:4,planes:1,planeLittleEndian:!0},reduce:16,toNative:"exportSNES"},{id:"genesis.tiles",name:"Genesis (Tile Palettes)",width:320,height:224,scaleX:1,conv:"SubPalette_Canvas",pal:Hr,block:{w:8,h:8,colors:16,msbToLsb:!1},cell:{w:8,h:8,msbToLsb:!0},subPalettes:{count:4,colors:16,sharedFirstColor:!0},paletteChoices:{colorsRange:{min:0,max:63}},reduce:64,customize:{subPalettePaletteFormat:"genesis"},toNative:"exportGenesisTiles"},{id:"genesis.tiles.1pal",name:"Genesis (1 palette)",width:320,height:224,scaleX:1,conv:"SubPalette_Canvas",pal:Hr,block:{w:8,h:8,colors:16,msbToLsb:!1},cell:{w:8,h:8,msbToLsb:!0},subPalettes:{count:1,colors:16},paletteChoices:{colorsRange:{min:0,max:15}},reduce:16,customize:{subPalettePaletteFormat:"genesis"},toNative:"exportGenesisTiles"},{id:"snes.8bpp.direct",name:"SNES (Direct Color)",width:256,height:256,scaleX:8/7,conv:"SNES_Canvas_Direct",pal:Qn,block:{w:8,h:8,colors:2048,msbToLsb:!1},cell:{w:8,h:8,msbToLsb:!0},paletteChoices:{backgroundRange:{min:0,max:2047},auxRange:{min:0,max:2047},borderRange:{min:0,max:2047},colorsRange:{min:0,max:2047}},customize:{outputTileset:!0,outputPalette:!1,transformColor:"bbgggrrr",planes:8},toNative:"exportSNES"},{id:"stic",name:"Intellivision (FGBG)",width:64,height:64,conv:"Stic_Fgbg_Canvas",pal:ot,block:{w:8,h:8,colors:2},cell:{w:8,h:8,msbToLsb:!0},paletteChoices:{backgroundRange:{min:0,max:15},colorsRange:{min:0,max:7}},toNative:"exportSticFgbg"},{id:"stic.stack.grom",name:"Intellivision (Color Stack, GROM)",width:160,height:96,conv:"Stic_ColorStack_Canvas",pal:ot,block:{w:8,h:8,colors:2},cell:{w:8,h:8,msbToLsb:!0},cb:{w:8,h:8,xb:0,yb:0},param:{extra:4},paletteChoices:{colors:1,backgroundRange:{min:0,max:15},colorsRange:{min:0,max:7}},toNative:"exportSticColorStack"},{id:"stic.stack.gram",name:"Intellivision (Color Stack, GRAM)",width:64,height:64,conv:"Stic_ColorStack_Canvas",pal:ot,block:{w:8,h:8,colors:2},cell:{w:8,h:8,msbToLsb:!0},cb:{w:8,h:8},param:{extra:4},paletteChoices:{colors:1,backgroundRange:{min:0,max:15},colorsRange:{min:0,max:15}},toNative:"exportSticColorStack"},{id:"stic.stack.gromram",name:"Intellivision (Color Stack, GROM+GRAM)",width:160,height:96,conv:"Stic_ColorStack_Canvas",pal:ot,block:{w:8,h:8,colors:2},cell:{w:8,h:8,msbToLsb:!0,xb:0,yb:0},cb:{w:8,h:8},param:{cell:!0,extra:4},paletteChoices:{colors:1,backgroundRange:{min:0,max:15},colorsRange:{min:0,max:7}},toNative:"exportSticColorStack"},{id:"stic.stack.grom.single",name:"Intellivision (Single BG, GROM)",width:160,height:96,conv:"Stic_ColorStack_Canvas",pal:ot,block:{w:8,h:8,colors:2},cell:{w:8,h:8,msbToLsb:!0},cb:{w:8,h:8,xb:0,yb:0},param:{extra:4},paletteChoices:{colors:1,backgroundRange:{min:0,max:15},colorsRange:{min:0,max:7}},customize:{singleColor:!0},toNative:"exportSticColorStack"},{id:"stic.stack.gram.single",name:"Intellivision (Single BG, GRAM)",width:64,height:64,conv:"Stic_ColorStack_Canvas",pal:ot,block:{w:8,h:8,colors:2},cell:{w:8,h:8,msbToLsb:!0},cb:{w:8,h:8},param:{extra:4},paletteChoices:{colors:1,backgroundRange:{min:0,max:15},colorsRange:{min:0,max:15}},customize:{singleColor:!0},toNative:"exportSticColorStack"},{id:"stic.stack.gromram.single",name:"Intellivision (Single BG, GROM+GRAM)",width:160,height:96,conv:"Stic_ColorStack_Canvas",pal:ot,block:{w:8,h:8,colors:2},cell:{w:8,h:8,msbToLsb:!0,xb:0,yb:0},cb:{w:8,h:8},param:{cell:!0,extra:4},paletteChoices:{colors:1,backgroundRange:{min:0,max:15},colorsRange:{min:0,max:7}},customize:{singleColor:!0},toNative:"exportSticColorStack"},{id:"sms-gg.tiles",name:"Sega Game Gear (32 colors, shared tiles)",width:160,height:144,scaleX:1,conv:"SubPalette_Canvas",pal:Fa,block:{w:8,h:8,colors:16,msbToLsb:!1},cell:{w:8,h:8,msbToLsb:!0},subPalettes:{count:2,colors:16},paletteChoices:{colorsRange:{min:0,max:31}},reduce:32,customize:{subPalettePaletteFormat:"rgb444"},tiles:{max:448,flipX:!0,flipY:!0},toNative:"exportGameGearTiles"},{id:"sms-gg.tiles.1pal",name:"Sega Game Gear (16 colors, shared tiles)",width:160,height:144,scaleX:1,conv:"SubPalette_Canvas",pal:Fa,block:{w:8,h:8,colors:16,msbToLsb:!1},cell:{w:8,h:8,msbToLsb:!0},subPalettes:{count:1,colors:16},paletteChoices:{colorsRange:{min:0,max:15}},reduce:16,customize:{subPalettePaletteFormat:"rgb444"},tiles:{max:448,flipX:!0,flipY:!0},toNative:"exportGameGearTiles"},{id:"sms.tiles",name:"Sega Master System (32 colors, shared tiles)",width:256,height:192,scaleX:8/7,conv:"SubPalette_Canvas",pal:Or,block:{w:8,h:8,colors:16,msbToLsb:!1},cell:{w:8,h:8,msbToLsb:!0},subPalettes:{count:2,colors:16},paletteChoices:{colorsRange:{min:0,max:31}},reduce:32,customize:{subPalettePaletteFormat:"rgb222"},tiles:{max:448,flipX:!0,flipY:!0},toNative:"exportMasterSystemTiles"},{id:"sms.tiles.unique",name:"Sega Master System (32 colors, 396 tiles)",width:176,height:144,scaleX:8/7,conv:"SubPalette_Canvas",pal:Or,block:{w:8,h:8,colors:16,msbToLsb:!1},cell:{w:8,h:8,msbToLsb:!0},subPalettes:{count:2,colors:16},paletteChoices:{colorsRange:{min:0,max:31}},reduce:32,customize:{subPalettePaletteFormat:"rgb222"},toNative:"exportMasterSystemTiles"},{id:"sms.tiles.1pal",name:"Sega Master System (16 colors, shared tiles)",width:256,height:192,scaleX:8/7,conv:"SubPalette_Canvas",pal:Or,block:{w:8,h:8,colors:16,msbToLsb:!1},cell:{w:8,h:8,msbToLsb:!0},subPalettes:{count:1,colors:16},paletteChoices:{colorsRange:{min:0,max:15}},reduce:16,customize:{subPalettePaletteFormat:"rgb222"},tiles:{max:448,flipX:!0,flipY:!0},toNative:"exportMasterSystemTiles"},{id:"apple2.lores",name:"Apple ][ (Lores)",width:40,height:48,scaleX:1.75,conv:"DitheringCanvas",pal:Sa,toNative:"exportFrameBuffer",exportFormat:{bpp:4}},{id:"x86.cga.04h.1",name:"PC CGA (Mode 04h, palette 1)",width:320,height:200,scaleX:200/320*1.37,conv:"DitheringCanvas",pal:wn,toNative:"exportFrameBuffer",exportFormat:{bpp:1,np:2}},{id:"x86.cga.04h.1B",name:"PC CGA (Mode 04h, bright 1)",width:320,height:200,scaleX:200/320*1.37,conv:"DitheringCanvas",pal:_n,toNative:"exportFrameBuffer",exportFormat:{bpp:1,np:2}},{id:"x86.cga.04h.2",name:"PC CGA (Mode 04h, palette 2)",width:320,height:200,scaleX:200/320*1.37,conv:"DitheringCanvas",pal:En,toNative:"exportFrameBuffer",exportFormat:{bpp:1,np:2}},{id:"x86.cga.04h.2B",name:"PC CGA (Mode 04h, bright 2)",width:320,height:200,scaleX:200/320*1.37,conv:"DitheringCanvas",pal:Mn,toNative:"exportFrameBuffer",exportFormat:{bpp:1,np:2}},{id:"x86.cga.05h",name:"PC CGA (Mode 05h)",width:320,height:200,scaleX:200/320*1.37,conv:"DitheringCanvas",pal:Bn,toNative:"exportFrameBuffer",exportFormat:{bpp:1,np:2}},{id:"x86.cga.05h.B",name:"PC CGA (Mode 05h, bright)",width:320,height:200,scaleX:200/320*1.37,conv:"DitheringCanvas",pal:Sn,toNative:"exportFrameBuffer",exportFormat:{bpp:1,np:2}},{id:"x86.ega.0dh",name:"PC EGA (Mode 0Dh)",width:320,height:200,scaleX:200/320*1.37,conv:"DitheringCanvas",pal:Pa,toNative:"exportFrameBuffer",exportFormat:{bpp:1,np:4}},{id:"x86.ega.10h",name:"PC EGA (Mode 10h)",width:640,height:350,scaleX:350/640*1.37,conv:"DitheringCanvas",pal:Pa,toNative:"exportFrameBuffer",exportFormat:{bpp:1,np:4}},{id:"mcr2",name:"Bally MCR-II",width:256,height:240,scaleX:1,conv:"SNES_Canvas",pal:Dn,block:{w:16,h:16,colors:4},cell:{w:16,h:16,msbToLsb:!0},reduce:64,toNative:"exportSNES"},{id:"gb.tiles",name:"Game Boy Classic (shared tiles)",width:160,height:144,scaleX:1,conv:"SNES_Canvas",pal:Ur,block:{w:8,h:8,colors:4,msbToLsb:!1},cell:{w:8,h:8,msbToLsb:!0},reduce:4,tiles:{max:256},toNative:"exportGBTiles"},{id:"gb.tiles.unique",name:"Game Boy Classic (256 unique tiles)",width:128,height:128,scaleX:1,conv:"SNES_Canvas",pal:Ur,block:{w:8,h:8,colors:4,msbToLsb:!1},cell:{w:8,h:8,msbToLsb:!0},reduce:4,toNative:"exportGBTiles"},{id:"gb.color.tiles",name:"Game Boy Color (shared tiles)",width:160,height:144,scaleX:1,conv:"GBC_Canvas",pal:Nr,block:{w:8,h:8,colors:4,msbToLsb:!1},cell:{w:8,h:8,msbToLsb:!0},subPalettes:{count:8,colors:4},paletteChoices:{colorsRange:{min:0,max:31}},reduce:32,tiles:{max:256,flipX:!0,flipY:!0},toNative:"exportGBC"},{id:"gb.color.tiles.unique",name:"Game Boy Color (256 unique tiles)",width:128,height:128,scaleX:1,conv:"GBC_Canvas",pal:Nr,block:{w:8,h:8,colors:4,msbToLsb:!1},cell:{w:8,h:8,msbToLsb:!0},subPalettes:{count:8,colors:4},paletteChoices:{colorsRange:{min:0,max:31}},reduce:32,toNative:"exportGBC"},{id:"gb.color.tiles.1pal",name:"Game Boy Color (4 colors)",width:160,height:144,scaleX:1,conv:"GBC_Canvas",pal:Nr,block:{w:8,h:8,colors:4,msbToLsb:!1},cell:{w:8,h:8,msbToLsb:!0},subPalettes:{count:1,colors:4},paletteChoices:{colorsRange:{min:0,max:3}},reduce:4,tiles:{max:256,flipX:!0,flipY:!0},toNative:"exportGBC"},{id:"MC6847.CG2.palette0",name:"MC6847 (CG2, palette 0)",width:128,height:64,scaleX:2/3,conv:"DitheringCanvas",pal:$r,reduce:4,toNative:"exportMC6847"},{id:"MC6847.CG2.palette1",name:"MC6847 (CG2, palette 1)",width:128,height:64,scaleX:2/3,conv:"DitheringCanvas",pal:Xr,reduce:4,toNative:"exportMC6847"},{id:"MC6847.CG3.palette0",name:"MC6847 (CG3, palette 0)",width:128,height:96,scaleX:1,conv:"DitheringCanvas",pal:$r,reduce:4,toNative:"exportMC6847"},{id:"MC6847.CG3.palette1",name:"MC6847 (CG3, palette 1)",width:128,height:96,scaleX:1,conv:"DitheringCanvas",pal:Xr,reduce:4,toNative:"exportMC6847"},{id:"MC6847.CG6.palette0",name:"MC6847 (CG6, palette 0)",width:128,height:192,scaleX:2,conv:"DitheringCanvas",pal:$r,reduce:4,toNative:"exportMC6847"},{id:"MC6847.CG6.palette1",name:"MC6847 (CG6, palette 1)",width:128,height:192,scaleX:2,conv:"DitheringCanvas",pal:Xr,reduce:4,toNative:"exportMC6847"},{id:"amiga.lores",name:"Amiga (Lores)",width:320,height:256,conv:"DitheringCanvas",pal:ar,reduce:32,toNative:"exportAmiga"},{id:"amiga.lores.ham6",name:"Amiga (Lores, HAM6)",width:320,height:256,conv:"HAM6_Canvas",pal:ar,reduce:16,extraColors:48,toNative:"exportAmigaHAM6"},null,{id:"atari7800.160a",name:"Atari 7800 (160A)",width:160,height:240,scaleX:2,conv:"DitheringCanvas",pal:Ve,reduce:4},{id:"atari7800.160b",name:"Atari 7800 (160B)",width:160,height:240,scaleX:2,conv:"DitheringCanvas",pal:Ve,reduce:12},{id:"bbcmicro.mode2",name:"BBC Micro (mode 2)",width:160,height:256,scaleX:2,conv:"DitheringCanvas",pal:Ra},{id:"apple2.dblhires",name:"Apple ][ (Double-Hires)",width:140,height:192,scaleX:2,conv:"DitheringCanvas",pal:Sa},{id:"appleiigs.320.16",name:"Apple IIGS (16 colors)",width:320,height:200,conv:"DitheringCanvas",pal:kn,reduce:16},{id:"channelf",name:"Fairchild Channel F",width:102,height:58,conv:"DitheringCanvas",pal:Fn,reduce:4},{id:"mac",name:"Mac 128K",width:512,height:342,conv:"DitheringCanvas",pal:Lr},{id:"williams",name:"Williams Arcade",width:304,height:256,conv:"DitheringCanvas",pal:Pn,reduce:16},{id:"pico8",name:"PICO-8",width:128,height:128,conv:"DitheringCanvas",pal:Rn},{id:"tic80",name:"TIC-80",width:240,height:136,conv:"DitheringCanvas",pal:Tn},{id:"gb",name:"Game Boy Classic (full screen)",width:160,height:144,scaleX:1,conv:"DitheringCanvas",pal:Ur},{id:"cx16.lores",name:"Commander X16 (Lores)",width:320,height:240,scaleX:1,conv:"DitheringCanvas",pal:ar,reduce:256},{id:"cx16.hires",name:"Commander X16 (Hires)",width:640,height:480,scaleX:1,conv:"DitheringCanvas",pal:ar,reduce:16},{id:"compucolor",name:"Compucolor",width:160,height:192,scaleX:1.6,conv:"Compucolor_Canvas",pal:vt,block:{w:2,h:4,colors:2}},{id:"teletext",name:"Teletext",width:80,height:72,scaleX:4/3,conv:"Teletext_Canvas",pal:Ra,block:{w:2,h:3,colors:2}},{id:"atarist",name:"Atari ST",width:320,height:200,scaleX:5/6,conv:"DitheringCanvas",pal:Da,reduce:16},{id:"vcs.48",name:"Atari VCS (48x48 bitmap)",width:48,height:48,conv:"DitheringCanvas",pal:Ve,reduce:2},{id:"pce.256x240",name:"PC Engine (256x240)",width:256,height:240,scaleX:5/4,conv:"DitheringCanvas",pal:Da,reduce:16},{id:"phememo-d30.landscape",name:"Phomemo D30 (landscape)",width:288,height:88,conv:"DitheringCanvas",pal:Lr},{id:"phememo-d30.portrait",name:"Phomemo D30 (portrait)",width:88,height:288,conv:"DitheringCanvas",pal:Lr}],Yr={};Ft.forEach(e=>{e&&(Yr[e.id||e.name]=e)});function ka(e){var s,l,h;let t=[e.width+" x "+e.height],r=e.subPalettes;if(r){let u=r.count+(r.count===1?" palette":" palettes")+" of "+((l=r.colors)!=null?l:(s=e.block)==null?void 0:s.colors)+" colors";r.area&&(u+=" per "+r.area.w+"x"+r.area.h),r.sharedFirstColor&&(u+=", shared backdrop"),t.push(u),t.push("from "+e.pal.length+" colors")}else e.reduce?t.push(e.reduce+" out of "+e.pal.length+" colors"):e.pal&&t.push(e.pal.length+" colors"),e.block&&t.push(e.block.colors+" colors per block");let a=(h=e.cell)!=null?h:e.block;if(a&&(e.tiles||r)){let u=Math.ceil(e.width/a.w)*Math.ceil(e.height/a.h);e.tiles&&e.tiles.max<u?t.push(e.tiles.max+" shared tiles for "+u+" cells"):t.push(u+" unique tiles")}return t.join(", ")}var $a={};Cn($a,{bitOverlayUint8Array:()=>Lt,exportAmiga:()=>as,exportAmigaHAM6:()=>ns,exportApple2HiresToHGR:()=>Mo,exportC64Hires:()=>Fo,exportC64Multi:()=>To,exportCombinedImageAndColorCellBuffer:()=>He,exportFrameBuffer:()=>_o,exportGBC:()=>Jo,exportGBTiles:()=>Ko,exportGameGearTiles:()=>Wn,exportGenesisTiles:()=>rs,exportMC6847:()=>cs,exportMasterSystemTiles:()=>es,exportNES:()=>is,exportNESTiles:()=>os,exportNeoGeoPocketTiles:()=>ts,exportSNES:()=>jo,exportSticColorStack:()=>No,exportSticFgbg:()=>Uo,exportTMS9918:()=>$o,exportVCSColorPlayfield:()=>ls,exportVCSPlayfield:()=>ss,exportVicHires:()=>ko,exportVicMulti:()=>Lo,exportZXSpectrum:()=>Oo,getSnesBitplanCellMapper:()=>Un,getSnesTilemapMapper:()=>Gn});function Ae(e,t){return t||(t=2),Io(e,t,16)}function Io(e,t,r){try{for(var a=e.toString(r).toUpperCase();a.length<t;)a="0"+a;return a}catch(s){return e+""}}function Se(e,t){e||(t==null?console.assert(e):console.assert(e,t))}function Qe(e,t){return e.map(r=>t.indexOf(r&16777215))}function kt(e,t,r,a){if(t==0)return[];let s=e,l=[];for(;t>0;)l.push(s&r),s>>=a,--t;return l}function Oe(e,t,r){return kt(e,t,r.paletteBitFilter,r.paletteBits)}function Wr(e,t,r,a,s){return r==0?[]:(Se(e<t.length),kt(t[e],r,a,s))}function La(e,t,r,a){return Wr(e,t,r,a.paletteBitFilter,a.paletteBits)}function Eo(e,t){if(!t)return e;for(var r=0,a=0;a<t.length;a++){var s=t[a];s<0&&(s=-s-1,r^=1<<s),e&1<<a&&(r^=1<<s)}return r}function Bo(e,t){t.destfmt&&(t=t.destfmt);var r=t.w,a=t.h,s=t.count||1,l=t.bpp||1,h=t.np||1,u=t.bpw||8,d=t.sl||Math.ceil(t.w*l/u),A=(1<<l)-1,g=t.pofs||d*a*s,B=t.skip||0,x;h>0&&t.sl?x=new Uint8Array(d*a*s):t.yremap?x=new Uint8Array(s*((a>>t.yremap[0])*t.yremap[1]+((1<<t.yremap[0])-1)*t.yremap[2])):u<=8?x=new Uint8Array(d*a*s*h):x=new Uint32Array(d*a*s*h);for(var I=0;I<s;I++)for(var P=e[I],k=0,T=0;T<a;T++){var H=t.flip?a-1-T:T,Q=I*d*a+H*d;t.yremap&&(Q=(T>>t.yremap[0])*t.yremap[1]+(T&(1<<t.yremap[0])-1)*t.yremap[2]);for(var G=0,Z=0;Z<r;Z++){var te=P[k++]&255,U=Eo(Q,t.remap);if(t.bitremap)for(var X=0;X<(t.bpp||1);X++)te&1<<X&&(x[U]|=1<<t.bitremap[G+X]);else for(var X=0;X<h;X++){var Y=te>>X*l&A;x[U+X*g+B]|=t.brev?Y<<u-G-l:Y<<G}G+=l,G>=u&&(Q+=1,G=0)}}return x}function ze(e){var t=0;e.forEach(a=>{t+=a.length});var r=new Uint8Array(t);return t=0,e.forEach(a=>{r.set(a,t),t+=a.length}),r}function _o(e,t){var r=t.exportFormat;if(!r)throw"No export format";return r.w=e.width,r.h=e.height,new Uint8Array(Bo([e.indexed],r))}function Mo(e,t){for(var r=new Uint8Array(8192),a=0,s=0;s<e.height;s++)for(var l=(s&7)*1024+(s>>3&7)*128+(s>>6)*40,h=0;h<e.width;h+=7){for(var u=0,d=0,A=0;A<7;A++){var g=e.indexed[a++]&255;(g==3||g==4)&&(d|=128),g>=3&&(g-=2),u|=g<<A*2}r[l++]=u&127|d,r[l++]=u>>7&127|d}return r}function Lt(e,t,r,a,s,l){l=l===void 0?!0:l;let h=(1<<s)-1,d=(r&h)<<a;h<<=a,t+=l?0:(s+a-1)/8;let A=l?1:-1;for(let g=s+a;g>0;g-=8,t+=A){let x=(-1^h)&255,I=d&255;Se(t<e.length),e[t]=e[t]&x|I,d>>=8,h>>=8}}function So(e,t){if(t===void 0)return;let r=t.fullPaletteMode===void 0?e.fullPaletteMode:t.fullPaletteMode;if(t.prepare===void 0)throw'The "prepare" method is required.';let a,s=()=>(a=t.prepare(),a.littleEndian=a.littleEndian===void 0?!0:a.littleEndian,a),l=t.paramToBitPattern!==void 0?t.paramToBitPattern:(d,A,g)=>{if(r)return A;let B=kt(d,t.colors===void 0?e.colors:t.colors,t.paletteBitFilter===void 0?e.paletteBitFilter:t.paletteBitFilter,t.paletteBits===void 0?e.paletteBits:t.paletteBits);if(t.globalColorsBitPattern!==void 0){for(let x=0;x<t.globalColorsBitPattern.length;++x)if(A==t.globalColorsBitPattern[x].paletteIndex)return t.globalColorsBitPattern[x].bitPattern}if(t.globalColorToBitPattern!==void 0){let x=t.globalColorToBitPattern(d,A,g);if(x!==void 0)return x}if(t.colorToBitPattern!==void 0){let x=t.colorToBitPattern(d,A,g);if(x!==void 0)return x}for(let x=0;x<B.length&&x<t.colorsBitPattern.length;++x)if(A==B[x])return t.colorsBitPattern[x];return console.log("global nor param color does not contain color from image",e,t,d,A,g),Se(!1),0},h=t.iterate!==void 0?t.iterate:d=>{let A=t.params===void 0?e.params:t.params,g=t.indexed===void 0?e.indexed:t.indexed;if(t.xyToBitInfo!==void 0){if(g===void 0||A===void 0&&!r)throw'Both "params" and "indexed" must be defined.';for(let B=0,x=0;x<(t.height===void 0?e.height:t.height);++x)for(let I=0;I<(t.width===void 0?e.width:t.width);++I,++B){let P=t.xyToBitInfo(I,x);Se(A===void 0||P.paramOffset<A.length);let k=l(A===void 0?0:A[P.paramOffset],g[B],P);Lt(d,P.offset,k,P.bitShift,P.bitCount,a.littleEndian)}}};return{prepare:s,prefill:t.prefill,iterate:t.iterate===void 0?h:t.iterate,commit:t.commit,finalize:t.finalize,xyToBitInfo:t.xyToBitInfo,paramToBitPattern:l,globalColorsBitPattern:t.globalColorsBitPattern===void 0?[]:t.globalColorsBitPattern,globalColorToBitPattern:t.globalColorToBitPattern,colorsBitPattern:t.colorsBitPattern,colorToBitPattern:t.colorToBitPattern}}function Po(e,t){if(t!==void 0){if("prepare"in t)return So(e,t);if("data"in t)return{prepare(){return{data:t.data()}}};throw'Either "prepare" or "data" on a "CellExporterMapper" or "DataMapper" must be defined.'}}function Do(e,t,r){if(r===void 0||!e)return;let a;if(r.prepare===void 0)throw'The "prepare" method is required.';let s=()=>(a=r.prepare(),a.littleEndian=a.littleEndian===void 0?!0:a.littleEndian,a),l=()=>{let u=r.params===void 0?t.params:r.params;if(!(r.paramToBitInfo===void 0&&r.paramToBitPattern===void 0)){if(r.paramToBitInfo===void 0||r.paramToBitPattern===void 0||u===void 0)throw'All of "paramToBitInfo" and "paramToBitPattern" and "params" must be defined.';for(let d=0;d<u.length;d++){let A=u[d],g=r.paramToBitInfo(d),B=r.paramToBitPattern(A,g);Lt(a.data,g.offset,B,g.bitShift,g.bitCount,a.littleEndian)}}};return{prepare:s,prefill:r.prefill,iterate:r.iterate===void 0?l:r.iterate,commit:r.commit,finalize:r.finalize,params:r.params===void 0?t.params:r.params,paramToBitInfo:r.paramToBitInfo,paramToBitPattern:r.paramToBitPattern}}function Vr(e,t,r){if(!(!e||r===void 0)){if("prepare"in r)return Do(e,t,r);if("data"in r)return{prepare(){return{data:r.data()}}};throw'Either "prepare" or "data" on a "ParamExporterMapper" or "DataMapper" must be defined.'}}function He(e){let t=Po({width:e.content.width,height:e.content.height,params:e.content.blockParams,indexed:e.message.indexed,colors:e.content.block.colors,fullPaletteMode:e.content.fullPaletteMode,paletteBitFilter:e.content.paletteBitFilter,paletteBits:e.content.paletteBits},e.cellMapper),r=Vr(e.colorParamMapper!==void 0,{params:e.content.blockParams},e.colorParamMapper),a=Vr(e.content.paramInfo.cb,{params:e.content.cbParams},e.colorBlockParamMapper),s=Vr(e.content.paramInfo.cell,{params:e.content.cellParams},e.cellParamMapper),l=Vr(e.content.paramInfo.extra>0,{params:e.content.extraParams},e.extraParamMapper),h=[t,r,a,s,l],u=h.filter(x=>x!==void 0),d=[],A=[];for(let x=0;x<h.length;++x){let I=h[x];if(I===void 0){A.push(void 0);continue}let P=I.prepare();d.push(P),A.push(P.data)}for(let x=0;x<u.length;++x){let I=u[x];I.prefill!==void 0&&I.prefill(d[x].data)}for(let x=0;x<u.length;++x){let I=u[x];I.iterate!==void 0&&I.iterate(d[x].data)}for(let x=0;x<u.length;++x){let I=u[x];I.commit!==void 0&&I.commit(d[x].data)}let g=!0;for(let x=0;g;++x){g=!1;for(let I=0;I<u.length;++I){let P=u[I];P.finalize!==void 0&&(g=P.finalize(I,A[0],A[1],A[2],A[3],A[4])||g)}}let B=A.filter(x=>x!==void 0);return e.reorderArrays!==void 0&&(B=e.reorderArrays(B)),ze(B)}function yt(e,t){let r=e.bitsPerColor,a=e.cell.w*r,s=e.cell.h*a,l=Math.ceil(s/8),h=0;return xe(be({},t),{prepare(){return h=e.block.columns*l,{data:new Uint8Array(e.width*e.height*r/8)}},xyToBitInfo(d,A){let g=Math.floor(d/e.block.w),B=Math.floor(d/e.cell.w),x=Math.floor(A/e.cell.h),I=Math.floor(A/e.block.h)*e.block.columns+g,P=l*B,k=h*x,T=Math.floor(d%e.cell.w*r/8),H=Math.floor(A%e.cell.h*a/8),Q=e.cell.msbToLsb?a-(d%e.cell.w+1)*r:d%e.cell.w*r;return{offset:k+P+H+T,bitShift:Q,bitCount:r,paramOffset:I}}})}function nr(e,t){let r=e.fliMode,a=e.bitsPerColor,s=0;return xe(be({},t),{prepare(){let h=e.cell.columns*e.cell.rows;return s=1<<Math.ceil(Math.log2(h)),{data:new Uint8Array(r?s*e.cell.h:e.cell.columns*e.cell.rows)}},paramToBitInfo(h){let u=0;return r?u=(Math.floor(h/e.cell.columns)&e.cell.h-1)*s+Math.floor(h/(a*e.width))*e.cell.columns+h%e.cell.columns:u=h,{offset:u,bitShift:0,bitCount:8,paramOffset:h}}})}function Ro(e,t){return xe(be({},t),{prepare(){return{data:new Uint8Array(e.cb.columns*e.cb.rows)}},paramToBitInfo(a){return{offset:a,bitShift:0,bitCount:8,paramOffset:a}}})}function To(e,t){let r=e.content;return He({message:e,content:r,cellMapper:yt(r,{globalColorsBitPattern:[{paletteIndex:r.backgroundColor&15,bitPattern:0}],colorsBitPattern:[2,1,3]}),colorParamMapper:nr(r,{paramToBitPattern(a,s){let l=Oe(a,2,r);return l[0]|l[1]<<4}}),colorBlockParamMapper:Ro(r,{paramToBitPattern(a,s){return Oe(a,1,r)[0]}}),extraParamMapper:{data(){let a=new Uint8Array(2);return a[0]=r.backgroundColor&15|(r.auxColor&15)<<4,a[1]=r.borderColor&15,a}}})}function Fo(e,t){let r=e.content;return He({message:e,content:r,cellMapper:yt(r,{colorsBitPattern:[1,0]}),colorParamMapper:nr(r,{paramToBitPattern(a,s){let l=Oe(a,2,r);return l[0]<<4|l[1]}}),extraParamMapper:{data(){let a=new Uint8Array(2);return a[0]=r.backgroundColor&15|(r.auxColor&15)<<4,a[1]=r.borderColor&15,a}}})}function ko(e,t){let r=e.content;return He({message:e,content:r,cellMapper:yt(r,{globalColorsBitPattern:[{paletteIndex:r.backgroundColor,bitPattern:0}],colorsBitPattern:[1]}),colorParamMapper:nr(r,{paramToBitPattern(a,s){return Oe(a,1,r)[0]}}),extraParamMapper:{data(){let a=new Uint8Array(3);return a[0]=r.backgroundColor,a[1]=r.borderColor,a[2]=r.auxColor,a}}})}function Lo(e,t){let r=e.content;return He({message:e,content:r,cellMapper:yt(r,{globalColorsBitPattern:[{paletteIndex:r.backgroundColor,bitPattern:0},{paletteIndex:r.borderColor,bitPattern:1},{paletteIndex:r.auxColor,bitPattern:3}],colorsBitPattern:[2]}),colorParamMapper:nr(r,{paramToBitPattern(a,s){return Oe(a,1,r)[0]}}),extraParamMapper:{data(){let a=new Uint8Array(3);return a[0]=r.backgroundColor,a[1]=r.borderColor,a[2]=r.auxColor,a}}})}function Qo(e,t){let r=e.bitsPerColor,a=e.cell.w*r;return xe(be({},t),{prepare(){return{data:new Uint8Array(e.width*e.height*e.bitsPerColor/8)}},xyToBitInfo(l,h){let u=Math.floor(l/e.block.w),d=Math.floor(h/e.block.h)*e.block.columns+u,A=Math.floor(l/e.block.w),g=(h&192)>>6<<11|(h&7)>>0<<8|(h&56)>>3<<5|(A&31)>>0<<0,B=e.cell.msbToLsb?a-(l%e.cell.w+1)*r:l%e.cell.w*r;return{offset:g,bitShift:B,bitCount:r,paramOffset:d}}})}function Oo(e,t){let r=e.content;return He({message:e,content:r,cellMapper:Qo(r,{colorsBitPattern:[0,1]}),colorParamMapper:nr(r,{paramToBitPattern(a,s){let l=Oe(a,2,r);return(l[0]&7)<<3|l[1]&7|(l[0]&8)>>3<<6}})})}function On(e,t){return xe(be({},t),{prepare(){let a=20,s=12;return{data:new Uint8Array(a*s*2),littleEndian:!0}},prefill(a){let s=7,l=0,h=0,u=0,d=s|(l&3)<<9|(l&4)>>2<<13|(l&8)>>3<<12|h<<3<<(u<<11),A=d&255,g=(d&65280)>>8;for(let I=0;I<a.length;++I)I%2==0?a[I]=A:a[I]=g;let B=360,x=[45,65,68,69,0,66,89,0,36,73,84,72,69,82,84,83,79,78];for(let I=0;I<x.length;++I){let P=s|(l&3)<<9|(l&4)>>2<<13|(l&8)>>3<<12|x[I]<<3<<(u<<11),k=P&255,T=(P&65280)>>8;a[B+I*2]=k,a[B+I*2+1]=T}},paramToBitInfo(a){let s=Math.floor(a/Math.floor(e.width/e.block.w)),l=a%Math.floor(e.width/e.block.w);return{offset:(s*20+l)*2,bitShift:0,bitCount:16,paramOffset:a}}})}function Uo(e,t){let r=e.content;return He({message:e,content:r,cellMapper:yt(r,{colorsBitPattern:[0,1]}),colorParamMapper:On(r,{paramToBitPattern(a,s){let l=Oe(a,2,r),h=l[0],u=l[1],d=1,A=s.paramOffset&63;return h|(u&3)<<9|(u&4)>>2<<13|(u&8)>>3<<12|A<<3<<(d<<11)}})})}function Go(e,t){return xe(be({},t),{prepare(){let s=8,l=8;return{data:new Uint8Array(s*l*8),littleEndian:!0}},finalize(s,l,h,u,d,A){for(let g=0;g<e.cellParams.length;++g){let B=Wr(g,e.cellParams,2,255,8);if(B[0]==0)continue;let x=B[1]*8,I=g%e.cell.columns,k=Math.floor(g/e.cell.columns)*e.cell.columns*8+I*8;for(let T=0;T<8;++T)d[x+T]=l[k+T]}return!1}})}function No(e,t){let r=e.content,a=[0,1],s=yt(r,{paramToBitPattern(l,h,u){let d=Oe(l,r.paletteChoices.colors,r);for(let g=0;g<r.paletteChoices.colors;++g)if(d[g]==h)return a[1+g];let A=La(u.paramOffset,r.cbParams,1,r)[0];return A==h?a[0]:(console.log("cb nor param color does not contain color from image",l,h,d,u,A),Se(!1),0)}});return He({message:e,content:r,cellMapper:s,colorParamMapper:On(r,{paramToBitPattern(l,h){let u=Oe(l,2,r),d=u[0],A=u[1],g=r.block.size=512,B=(d&8)!=0,x=r.paramInfo.cell?Wr(h.paramOffset,r.cellParams,2,255,8):[g?1:0,g?h.paramOffset&63:0],I=x[0]!=0;Se(!B||B&&I);let P=I?1:0,k=I?x[1]&63:h.paramOffset&255;return d&7|(d&8)>>3<<12|(A&1)<<13|k<<3<<(P<<11)}}),cellParamMapper:r.paramInfo.cell?Go(r):void 0,extraParamMapper:{data(){let l=new Uint8Array(r.paramInfo.extra);for(let h=0;h<r.paramInfo.extra;++h)l[h]=La(h,r.extraParams,1,r)[0];return l}}})}function Ho(e,t){return xe(be({},t),{prepare(){return{data:new Uint8Array(e.block.size)}},paramToBitInfo(a){let s=a&31,l=a>>5;return{offset:l&7|s<<3|l>>3<<8,bitShift:0,bitCount:8,paramOffset:a}}})}function $o(e,t){let r=e.content;return He({message:e,content:r,cellMapper:yt(r,{colorsBitPattern:[0,1]}),colorParamMapper:Ho(r,{paramToBitPattern(a,s){let l=Oe(a,2,r);return l[0]=l[0]==0?1:l[0],l[1]=l[1]==0?1:l[1],l[0]|l[1]<<4}})})}function Xo(e,t,r,a,s,l,h){let u=s*h.block.w,d=Math.floor(u*h.block.h*e+u*a)/8,A=h.cell.msbToLsb?(h.block.w-(r+1))*s:r*s,g=Math.floor(A/8);return g=l?g:Math.floor(u/8)-g-1,A=A%8,Se((d+g)*8<t*u*h.block.h),{offset:d+g,bitShift:A,bitCount:s}}function Yo(e,t,r,a,s,l,h){let u=s*h.block.w,d=(a&1)!=0,A=Math.floor(((u*h.block.h*(e>>1)<<1)+u*a*(d?1:0))/8),g=h.cell.msbToLsb?(h.block.w-(r+1))*s:r*s,B=Math.floor(g/8);return B=l?B:Math.floor(u/8)-B-1,g=g%8,Se((A+B)*8<t*u*h.block.h),{offset:A+B,bitShift:g,bitCount:s}}function Wo(e,t,r,a,s,l,h){let u=s*h.block.w,d=Math.floor(u*t*a+u*e)/8,A=h.cell.msbToLsb?(h.block.w-(r+1))*s:r*s,g=Math.floor(A/8);return g=l?g:Math.floor(u/8)-g-1,A=A%8,Se((d+g)*8<t*u*h.block.h),{offset:d+g,bitShift:A,bitCount:s}}var Qa={Default:Xo,interleaved:Yo,linear:Wo},Oa={Default:Vo,bbgggrrr:zo};function Vo(e,t){return e}function zo(e,t){let r=t[e],a=r&255,s=r>>8&255;return(r>>16&255&192)>>6<<6|(s&224)>>5<<3|(a&224)>>5<<0}function Un(e,t,r,a){let s=e.indexed,l=0,h=0,u=0,d=0,A=32,g=32;return xe(be({},a),{prepare(){return l=r.customize===void 0?Math.ceil(Math.log2(t.block.colors)):"planes"in r.customize?r.customize.planes:Math.ceil(Math.log2(t.block.colors)),h=t.block.w*t.block.h,u=t.block.columns*t.block.rows,d=r.customize===void 0?1:"bitsInPlane"in r.customize?r.customize.bitsInPlane:1,{data:new Uint8Array(Math.floor(l*d*h*u/8))}},iterate(x){let I=Math.floor(t.block.columns/A),P=Math.floor(t.block.rows/g),k=Math.floor(l*d*h*A*g/8),T=Math.floor(l*d*h/8),H=T*A,Q=r.customize===void 0?Qa.Default:"planeToMemory"in r.customize?Qa[r.customize.planeToMemory]:Qa.Default,G=r.customize===void 0?Oa.Default:"transformColor"in r.customize?Oa[r.customize.transformColor]:Oa.Default,Z=(1<<d)-1,te=r.customize===void 0?!0:"planeLittleEndian"in r.customize?r.customize.littleEndian:!0,U=t.block.msbToLsb?(X,Y)=>{let W=(l-(X+1))*d,q=Y&Z<<W;return{extractedBits:q>>W,filteredColor:Y^q}}:(X,Y)=>{let W=X*d,q=Y&Z<<W;return{extractedBits:q,filteredColor:Y^q}};for(let X=0;X<s.length;++X){let Y=Math.floor(X/t.block.w)%t.block.columns,W=Math.floor(X/(t.width*t.block.h)),q=Math.floor(Y/A),se=(Math.floor(W/g)*I+q)*k,me=Y%A,Be=W%g,ke=G(s[X],r.pal),qe=X%t.block.w,le=Math.floor(X/t.width)%t.block.h,ft=H*Be+T*me;for(let Ke=0;Ke<l;++Ke){let{extractedBits:Ze,filteredColor:ge}=U(Ke,ke),De=Q(Ke,l,qe,le,d,te,t);ke=ge;let Je=se+ft+De.offset;Lt(x,Je,Ze,De.bitShift,De.bitCount,te)}}}})}function Gn(e,t,r,a){let s=0,l=32,h=32,u=r.customize===void 0?!0:"outputTileset"in r.customize?r.customize.littleEndian:!0,d=r.customize===void 0?!0:"outputPalette"in r.customize?r.customize.littleEndian:!0;return!u&&!d?void 0:xe(be({},a),{prepare(){return s=t.block.columns*t.block.rows,{data:new Uint8Array(2*s*(u?1:0)+(d?t.block.colors:0))}},iterate(g){let B=r.customize===void 0?!1:"tilesetLittleEndian"in r.customize?r.customize.littleEndian:!1;if(u){let x=Math.floor(t.block.columns/l),I=Math.floor(t.block.rows/h),P=Math.floor(l*h*2);for(let k=0;k<t.block.rows;++k)for(let T=0;T<t.block.columns;++T){let H=Math.floor(T/l),Z=(Math.floor(k/h)*x+H)*P,te=T%l,U=k%h,X=(U*t.block.columns+te)*2,Y=Z+X,W=kt(t.blockParams[k*T+T],1,3,2),q=0,J=0,ae=W[0]&7,se=U*l+te&1023,me=q<<15|J<<14|ae<<10|se;Lt(g,Y,me,0,16,B)}}if(d){let x=u?0:Math.floor(2*s/8);for(let I=0;I<t.block.colors;++I){let P=e.pal[I],k=P&255,T=P>>8&255,H=P>>16&255,Q=k>>3&31|(T>>3&31)<<5|(H>>3&31)<<10;Lt(g,x+I*2,Q,0,16,B)}}}})}function jo(e,t){let r=e.content;return He({message:e,content:r,cellMapper:Un(e,r,t,{}),colorParamMapper:Gn(e,r,t,{})})}function Nn(e,t,r,a=!1){let s=new Uint8Array(t.block.h*r);for(let l=0;l<t.block.h;++l)for(let h=0;h<t.block.w;++h){let u=t.cell.msbToLsb?t.block.w-h-1:h,d=e(h,l);for(let A=0;A<r;++A)s[a?A*t.block.h+l:l*r+A]|=(d>>A&1)<<u}return s}function qo(e,t,r){let a=t.block.columns,s=a*t.block.rows;return ze(Array.from({length:s},(l,h)=>{let u=h%a*t.block.w,d=Math.floor(h/a)*t.block.h;return Nn((A,g)=>e.indexed[(d+g)*t.width+u+A],t,r)}))}function Hn(e,t,r,a=!1){let s=t.tileset;if(!s)throw new Error("image was not fitted to a tile set");let l=t.block.columns,{w:h,h:u}=t.block,d=new Map;return s.assign.forEach((A,g)=>{d.has(A)||d.set(A,g)}),ze(s.tiles.map((A,g)=>{let B=d.get(g),x=s.orient[B],I=B%l*h,P=Math.floor(B/l)*u;return Nn((k,T)=>{let H=x&1?h-1-k:k,Q=x&2?u-1-T:T;return e.indexed[(P+Q)*t.width+I+H]},t,r,a)}))}function Ua(e,t){let r=e.tileset;return r?{tile:r.assign[t],orient:r.orient[t]}:{tile:t,orient:0}}function Ga(e,t){if(!t){if(e!==0)throw new Error("this system cannot flip tiles");return 0}return(e&1?1<<t.x:0)|(e&2?1<<t.y:0)}function $n(e,t,r){return t.tileset?Hn(e,t,r):qo(e,t,r)}function Xn(e,t){let r=e.block.columns*e.block.rows,a=new Uint8Array(r);for(let s=0;s<r;++s){let{tile:l,orient:h}=Ua(e,s);if(l>255)throw new Error("tile number does not fit in a byte");Ga(h,t),a[s]=l}return a}function Yn(e,t){return $n(e,t,2)}function Ko(e,t){let r=e.content;return ze([Yn(e,r),Xn(r)])}function Na(e){var s,l;let t=e.block.columns*e.block.rows,r=(s=e.paletteIndexBits)!=null?s:Math.max(1,Math.ceil(Math.log2(e.palettesCount||1))),a=(l=e.paletteIndexFilter)!=null?l:(1<<r)-1;return Array.from({length:t},(h,u)=>{var d;return(d=kt(e.blockParams[u],1,a,r)[0])!=null?d:0})}function Zo(e,t){return Uint8Array.from(Na(e),(r,a)=>(r|Ga(Ua(e,a).orient,t))&255)}function zr(e,t,r){var d,A,g,B,x;let a=(d=t.palettesCount)!=null?d:0,s=(A=t.paletteColors)!=null?A:0,l=(B=(g=r.customize)==null?void 0:g.subPalettePaletteFormat)!=null?B:"rgb555",h=l==="rgb222"?1:2,u=new Uint8Array(a*s*h);for(let I=0;I<a;++I)for(let P=0;P<s;++P){let k=(x=e.pal[I*s+P])!=null?x:0,T=k&255,H=k>>8&255,Q=k>>16&255,G;l==="rgb444"?G=T>>4&15|(H>>4&15)<<4|(Q>>4&15)<<8:l==="rgb222"?G=T>>6&3|(H>>6&3)<<2|(Q>>6&3)<<4:l==="genesis"?G=(T>>5&7)<<1|(H>>5&7)<<5|(Q>>5&7)<<9:G=T>>3&31|(H>>3&31)<<5|(Q>>3&31)<<10;let Z=(I*s+P)*h,te=l==="genesis";u[Z+(te?h-1:0)]=G&255,h>1&&(u[Z+(te?0:1)]=G>>8&255)}return u}function Jo(e,t){let r=e.content;return ze([Yn(e,r),Xn(r,{x:5,y:6}),Zo(r,{x:5,y:6}),zr(e,r,t)])}function Ha(e,t,r=!1,a){let s=Na(e),l=new Uint8Array(s.length*2);return s.forEach((h,u)=>{let{tile:d,orient:A}=Ua(e,u),g=d|h<<t|Ga(A,a);l[u*2+(r?1:0)]=g&255,l[u*2+(r?0:1)]=g>>8&255}),l}function Wn(e,t){let r=e.content,a=r.tileset?r.tileset.tiles.length:r.block.columns*r.block.rows;if(a>448)throw new Error("the VDP can address 448 tiles, got "+a);return ze([$n(e,r,4),Ha(r,11,!1,{x:9,y:10}),zr(e,r,t)])}var es=Wn;function ts(e,t){let r=e.content,a=r.block.columns,s=a*r.block.rows;Se(s<=512);let l=new Uint8Array(s*16);for(let h=0;h<r.height;++h)for(let u=0;u<r.width;++u){let d=Math.floor(h/r.block.h)*a+Math.floor(u/r.block.w),A=u%r.block.w,g=d*16+h%r.block.h*2,B=(e.indexed[h*r.width+u]&3)<<(r.block.w-1-A)*2;l[g]|=B&255,l[g+1]|=B>>8&255}return ze([l,Ha(r,9),zr(e,r,t)])}function rs(e,t){let r=e.content,a=r.block.columns,s=a*r.block.rows;Se(s<=2048);let l=new Uint8Array(s*32);for(let h=0;h<r.height;++h)for(let u=0;u<r.width;++u){let d=Math.floor(h/r.block.h)*a+Math.floor(u/r.block.w),A=u%r.block.w,g=d*32+h%r.block.h*4+(A>>1),B=e.indexed[h*r.width+u]&15;l[g]|=A&1?B:B<<4}return ze([l,Ha(r,13,!0),zr(e,r,t)])}function Vn(e,t,r,a){var h;let s=e.width/8,l=new Uint8Array(t*2+r*s*e.height);for(let u=0;u<t;++u){let d=(h=e.pal[u])!=null?h:0,A=(d&255)>>4<<8|(d>>8&255)>>4<<4|(d>>16&255)>>4;l[u*2]=A>>8,l[u*2+1]=A&255}for(let u=0;u<e.height;++u)for(let d=0;d<e.width;++d){let A=a(e.indexed[u*e.width+d]);for(let g=0;g<r;++g){let B=t*2+g*s*e.height+u*s+(d>>3);l[B]|=(A>>g&1)<<7-(d&7)}}return l}function as(e,t){return Vn(e,32,5,r=>r)}function ns(e,t){let r=[0,2,3,1];return Vn(e,16,6,a=>r[a>>4]<<4|a&15)}function is(e,t){for(var r=0,a=e.width/8,s=e.height/8,l=new Uint8Array(e.width*e.height*2/8),h=0;h<e.height;h++)for(var u=0;u<e.width;u++){var d=Math.floor(u/8)+Math.floor(h/8)*a,A=d*16+(h&7),g=7-(u&7),B=e.indexed[r]&255;l[A]|=(B&1)<<g,l[A+8]|=(B>>1&1)<<g,r++}return l}function os(e,t){var A,g;let r=e.content,a=r.tileset;if(!a)throw new Error("image was not fitted to a tile set");if(a.tiles.length>256)throw new Error("a pattern table holds 256 tiles");if(a.orient.some(B=>B!==0))throw new Error("NES background tiles cannot be flipped");if(r.block.columns>32||r.block.rows>30)throw new Error("image is larger than a name table");let s=new Uint8Array(256*16);s.set(Hn(e,r,2,!0));let l=new Uint8Array(1024);for(let B=0;B<a.assign.length;++B){let x=B%r.block.columns,I=Math.floor(B/r.block.columns);l[I*32+x]=a.assign[B]}let h=r,u=(A=h.palettesCount)!=null?A:1;if(u>1){let B=Na(h);for(let x=0;x<B.length;++x){let I=x%r.block.columns,P=Math.floor(x/r.block.columns),k=(P>>1&1)*4+(I>>1&1)*2,T=960+(P>>2)*8+(I>>2);l[T]=l[T]&~(3<<k)|B[x]<<k}}let d=Uint8Array.from(Qe(e.pal.slice(0,u*((g=h.paletteColors)!=null?g:4)),t.pal));return ze([s,l,d])}var zn=[3,2,1,0,-1,-1,-1,-1,4,5,6,7,8,9,10,11,19,18,17,16,15,14,13,12,23,22,21,20,-1,-1,-1,-1,24,25,26,27,28,29,30,31,39,38,37,36,35,34,33,32];function ss(e,t){var r=new Uint8Array(6*e.height);let a=zn;for(var s=0;s<e.height;s++)for(var l=0;l<48;l++){var h=a[l];if(h>=0&&(h+=s*e.width,e.indexed[h])){var u=(l>>3)*e.height+e.height-s-1;r[u]|=128>>(l&7)}}return r}function ls(e,t){var B,x;let r=e.content;if(!r||!r.params)throw new Error("VCS color export needs per-scanline params");let a=e.height,s=new Uint8Array(8*a),l=Qe(e.pal,t.pal),h=zn;for(var u=0;u<a;u++){let I=r.params[u],P=I&255,k=I>>8&255,T=a-u-1;s[6*a+T]=(B=l[P])!=null?B:P,s[7*a+T]=(x=l[k])!=null?x:k;for(var d=0;d<48;d++){var A=h[d];if(A>=0&&(A+=u*e.width,e.indexed[A]==k)){var g=(d>>3)*a+T;s[g]|=128>>(d&7)}}}return s}function cs(e,t){var r=new Uint8Array(e.width*e.height/4);let a=0,s=0;for(var l=0;l<e.height;l++)for(var h=0;h<e.width;h+=4,s+=4)r[a++]=((e.indexed[s+0]&3)<<6)+((e.indexed[s+1]&3)<<4)+((e.indexed[s+2]&3)<<2)+((e.indexed[s+3]&3)<<0);return console.log(r),r}var ja={};Cn(ja,{getFileViewerCode_apple2_hires:()=>Bs,getFileViewerCode_astrocade:()=>Rs,getFileViewerCode_atari8_d:()=>oi,getFileViewerCode_atari8_e:()=>Ts,getFileViewerCode_atari8_f_10:()=>Fs,getFileViewerCode_c64_fli:()=>lt,getFileViewerCode_c64_hires:()=>Es,getFileViewerCode_c64_hires_fli:()=>Ns,getFileViewerCode_c64_hires_fli_blank:()=>$s,getFileViewerCode_c64_hires_fli_bug:()=>Hs,getFileViewerCode_c64_multi:()=>ws,getFileViewerCode_c64_multi_fli:()=>Xs,getFileViewerCode_c64_multi_fli_blank:()=>Ws,getFileViewerCode_c64_multi_fli_blank_left:()=>Vs,getFileViewerCode_c64_multi_fli_bug:()=>Ys,getFileViewerCode_cpc:()=>za,getFileViewerCode_cpc_mode0:()=>Us,getFileViewerCode_cpc_mode1:()=>Gs,getFileViewerCode_gb_color_tiles:()=>Ks,getFileViewerCode_gb_tiles:()=>qs,getFileViewerCode_msx:()=>Ss,getFileViewerCode_nes:()=>_s,getFileViewerCode_nes_tiles:()=>ii,getFileViewerCode_nes_tiles_attr:()=>Ms,getFileViewerCode_sms_gg_tiles:()=>js,getFileViewerCode_sms_tiles:()=>zs,getFileViewerCode_vcs:()=>Ps,getFileViewerCode_vcs_color:()=>Ds,getFileViewerCode_zx:()=>ir,getFileViewerCode_zx_bright:()=>Ls,getFileViewerCode_zx_bright_dark:()=>Os,getFileViewerCode_zx_dark:()=>ks,getFileViewerCode_zx_dark_bright:()=>Qs});var Xa=`
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
`;var jn=`
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
`;var qn=`
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
`;var Kn=`
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
`;var Zn=`
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
`;var Jn=`
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
`;var ei=`
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
`;var ti=`
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
`;var Ya=`
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
`;var ri=`
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
`;var ai=`
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
`;var ni=`
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
`;var Wa=`
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
`;var Va=`
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
`;function ws(){var e=Xa;return e=e.replace("$USE_MULTI_MODE","1"),e}function Es(){var e=Xa;return e=e.replace("$USE_MULTI_MODE","0"),e}function Bs(){return jn}function _s(){var e=qn,t=Qe(V.lastPixels.pal,V.settings.pal);return e=e.replace("hex 1f;screen color","hex "+Ae(t[0])),e=e.replace("hex 01112100;background 0","hex "+Ae(t[1])+Ae(t[2])+Ae(t[3])+Ae(0)),e}function ii(){var t,r;let e=(r=(t=V.settings.subPalettes)==null?void 0:t.count)!=null?r:1;return or(Kn,{PAL_BYTES:e*4})}function Ms(){return ii()}function Ss(){return Zn}function Ps(){var e=Jn,t=Qe(V.lastPixels.pal,V.settings.pal);return e=e.replace("#$F6","#$"+Ae(t[0])),e=e.replace("#$F7","#$"+Ae(t[1])),e}function Ds(){var h,u;var e=ei,t=V.lastPixels,r=t&&t.content&&t.content.params;if(r&&r.length>0){var a=Qe(t.pal,V.settings.pal),s=r[0]&255,l=r[0]>>8&255;e=e.replace("#$F6","#$"+Ae((h=a[s])!=null?h:s)),e=e.replace("#$F7","#$"+Ae((u=a[l])!=null?u:l))}return e}function Rs(){var e=ti,t=Qe(V.lastPixels.pal,V.settings.pal);return e=e.replace("$b0","$"+Ae(t[0])),e=e.replace("$b1","$"+Ae(t[1])),e=e.replace("$b2","$"+Ae(t[2])),e=e.replace("$b3","$"+Ae(t[3])),e}function oi(){for(var e=Ya,t=Qe(V.lastPixels.pal,V.settings.pal),r=0;r<t.length;r++)e=e.replace("$00;PF"+r,"$"+Ae(t[r]));return e}function Ts(){for(var e=Ya,t=Qe(V.lastPixels.pal,V.settings.pal),r=0;r<t.length;r++)e=e.replace("$00;PF"+r,"$"+Ae(t[r]));return e=e.replace("ANTICMODE equ $d","ANTICMODE equ $e"),e=e.replace("DUALBUFFER equ 0","DUALBUFFER equ 1"),e}function Fs(){let e=oi();return e=e.replace(".byte $4d",".byte $4f"),e=e.replace(".byte $0d",".byte $0f"),e=e.replace("#$00;PRIOR","#$80"),e=e.replace("COLOR0+4","PCOLR0+0"),e=e.replace("COLOR0+0","PCOLR0+1"),e=e.replace("COLOR0+1","PCOLR0+2"),e=e.replace("COLOR0+2","PCOLR0+3"),e=e.replace("ANTICMODE equ $d","ANTICMODE equ $f"),e=e.replace("DUALBUFFER equ 0","DUALBUFFER equ 1"),e=e.replace("GPIOMODE equ 0","GPIOMODE equ 1"),e}function ir(){var e=ri;return e}function ks(){return ir()}function Ls(){return ir()}function Qs(){return ir()}function Os(){return ir()}function za(e){var t=ai,r=Qe(V.lastPixels.pal,V.settings.pal);t=t.replace("$MODE",e+"");for(var a=0;a<16;a++)t=t.replace("$c"+a,"$"+Ae(r[a]||0));return t}function Us(e){return za(0)}function Gs(e){return za(1)}function lt(){var e=ni;return e}function Ns(){let e=lt();return e=e.replace("$USE_MULTI_MODE","0"),e}function Hs(){let e=lt();return e=e.replace("$USE_MULTI_MODE","0"),e}function $s(){let e=lt();return e=e.replace("$USE_MULTI_MODE","0"),e}function Xs(){let e=lt();return e=e.replace("$USE_MULTI_MODE","1"),e}function Ys(){let e=lt();return e=e.replace("$USE_MULTI_MODE","1"),e}function Ws(){let e=lt();return e=e.replace("$USE_MULTI_MODE","1"),e}function Vs(){let e=lt();return e=e.replace("$USE_MULTI_MODE","1"),e}function or(e,t){for(let r in t)e=e.split("$"+r).join(String(t[r]));return e}function jr(e,t,r,a){let s=V.settings.width>>3,l=V.settings.height>>3;return{IMG_COLS:s,IMG_ROWS:l,IMG_COL0:r+(e-s>>1),IMG_ROW0:a+(t-l>>1)}}function qr(e){return V.lastPixels.content.tileset.tiles.length*e}function zs(){return or(Wa,xe(be({},jr(32,24,0,0)),{TILE_BYTES:qr(32),CRAM_BYTES:32,REGION:"0x4c"}))}function js(){return or(Wa,xe(be({},jr(20,18,6,3)),{TILE_BYTES:qr(32),CRAM_BYTES:64,REGION:"0x6c"}))}function qs(){return or(Va,xe(be({},jr(20,18,0,0)),{TILE_BYTES:qr(16),CGB:0}))}function Ks(){return or(Va,xe(be({},jr(20,18,0,0)),{TILE_BYTES:qr(16),CGB:1}))}var si=[[1,0,.4375],[-1,1,.1875],[0,1,.3125],[1,1,.0625]],li=[[1,0,3/8],[0,1,3/8],[1,1,2/8]],ci=[[1,0,1/6],[2,0,1/6],[-1,1,1/6],[0,1,1/6],[1,1,1/6],[0,2,1/6]],hi=[[1,0,4/16],[2,0,3/16],[-2,1,1/16],[-1,1,2/16],[0,1,3/16],[1,1,2/16],[2,1,1/16]],ui=[[1,0,2/4],[-1,1,1/4],[0,1,1/4]],fi=[[1,0,8/42],[2,0,4/42],[-2,1,2/42],[1,-1,4/42],[0,1,8/42],[1,1,4/42],[2,1,2/42],[-2,2,1/42],[-1,2,2/42],[0,2,4/42],[1,2,2/42],[2,2,1/42]],di=[[1,0,.5],[0,1,.5]],mi=[[1,0,1]],pi=[[0,1,1]],Ai=[[0,1,2/4],[0,2,1/4],[1,2,1/4]],gi=[[1,1,1]],bi=[[0,1,6/16],[-1,1,3/16],[1,1,3/16],[-2,2,1/16],[0,2,2/16],[2,2,1/16]];var qi=_a(xi(),1);var Js="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function Ci(e){let t=e.replace(/[\r\n=]/g,""),r=t.length,a=new Uint8Array(r*3>>2),s=0,l=0;for(let u=0;u<r;u++)u%4===0&&u&&(a[l++]=s>>16&255,a[l++]=s>>8&255,a[l++]=s&255),s=s<<6|Js.indexOf(t.charAt(u));let h=r%4*6;return h===0?(a[l++]=s>>16&255,a[l++]=s>>8&255,a[l++]=s&255):h===18?(a[l++]=s>>10&255,a[l++]=s>>2&255):h===12&&(a[l++]=s>>4&255),a}var wt;function el(){if(typeof wt!="undefined"||(wt=!1,typeof WebAssembly=="undefined"))return wt;try{let e=new Uint8Array([0,97,115,109,1,0,0,0,1,6,1,96,1,127,1,127,3,2,1,0,5,3,1,0,1,7,8,1,4,116,101,115,116,0,0,10,16,1,14,0,32,0,65,1,54,2,0,32,0,40,2,0,11]),t=new WebAssembly.Module(e);return new WebAssembly.Instance(t,{}).exports.test(4)!==0&&(wt=!0),wt}catch(e){}return wt}var tl={js:!0,wasm:!0},rl=class{constructor(e){let t=Object.assign({},tl,e||{});if(this.options=t,this.__cache={},this.__init_promise=null,this.__modules=t.modules||{},this.__memory=null,this.__wasm={},this.__isLE=new Uint32Array(new Uint8Array([1,0,0,0]).buffer)[0]===1,!this.options.js&&!this.options.wasm)throw new Error('mathlib: at least "js" or "wasm" should be enabled')}has_wasm(){return el()}use(e){return this.__modules[e.name]=e,this.options.wasm&&this.has_wasm()&&e.wasm_fn?this[e.name]=e.wasm_fn:this[e.name]=e.fn,this}init(){return this.__init_promise?this.__init_promise:!this.options.js&&this.options.wasm&&!this.has_wasm()?Promise.reject(new Error(`mathlib: only "wasm" was enabled, but it's not supported`)):(this.__init_promise=Promise.all(Object.keys(this.__modules).map(e=>{let t=this.__modules[e];return!this.options.wasm||!this.has_wasm()||!t.wasm_fn||this.__wasm[e]?null:WebAssembly.compile(Ci(t.wasm_src)).then(r=>{this.__wasm[e]=r})})).then(()=>this),this.__init_promise)}__reallocate(e){if(!this.__memory)return this.__memory=new WebAssembly.Memory({initial:Math.ceil(e/65536)}),this.__memory;let t=this.__memory.buffer.byteLength;return t<e&&this.__memory.grow(Math.ceil((e-t)/65536)),this.__memory}__instance(e,t,r){if(t&&this.__reallocate(t),!this.__wasm[e]){let a=this.__modules[e];this.__wasm[e]=new WebAssembly.Module(Ci(a.wasm_src))}if(!this.__cache[e]){let a={memoryBase:0,memory:this.__memory,tableBase:0,table:new WebAssembly.Table({initial:0,element:"anyfunc"})};this.__cache[e]=new WebAssembly.Instance(this.__wasm[e],{env:Object.assign(a,r||{})})}return this.__cache[e]}__align(e,t){t=t||8;let r=e%t;return e+(r?t-r:0)}};function al(e){e<.5&&(e=.5);let t=Math.exp(.527076)/e,r=Math.exp(-t),a=Math.exp(-2*t),s=(1-r)*(1-r)/(1+2*t*r-a),l=s,h=s*(t-1)*r,u=s*(t+1)*r,d=-s*a,A=2*r,g=-a,B=(l+h)/(1-A-g),x=(u+d)/(1-A-g);return new Float32Array([l,h,u,d,A,g,B,x])}function vi(e,t,r,a,s,l){let h,u,d,A,g,B,x,I,P,k,T,H,Q,G;for(P=0;P<l;P++){for(B=P*s,x=P,I=0,h=e[B],g=h*a[6],A=g,T=a[0],H=a[1],Q=a[4],G=a[5],k=0;k<s;k++)u=e[B],d=u*T+h*H+A*Q+g*G,g=A,A=d,h=u,r[I]=A,I++,B++;for(B--,I--,x+=l*(s-1),h=e[B],g=h*a[7],A=g,u=h,T=a[2],H=a[3],k=s-1;k>=0;k--)d=u*T+h*H+A*Q+g*G,g=A,A=d,h=u,u=e[B],t[x]=r[I]+A,B--,I--,x-=l}}function nl(e,t,r,a){if(!a)return;let s=new Uint16Array(e.length),l=new Float32Array(Math.max(t,r)),h=al(a);vi(e,s,l,h,t,r,a),vi(s,e,l,h,r,t,a)}function il(e,t,r){let a=t*r,s=new Uint16Array(a),l,h,u,d;for(let A=0;A<a;A++)l=e[4*A],h=e[4*A+1],u=e[4*A+2],d=l>=h&&l>=u?l:h>=u&&h>=l?h:u,s[A]=d<<8;return s}function ol(e,t,r,a,s,l){let h,u,d,A,g;if(a===0||s<.5)return;s>2&&(s=2);let B=il(e,t,r),x=new Uint16Array(B);nl(x,t,r,s);let I=a/100*4096+.5|0,P=l<<8,k=t*r;for(let T=0;T<k;T++)h=B[T],A=h-x[T],Math.abs(A)>=P&&(u=h+(I*A+2048>>12),u=u>65280?65280:u,u=u<0?0:u,h=h!==0?h:1,d=(u<<12)/h|0,g=T*4,e[g]=e[g]*d+2048>>12,e[g+1]=e[g+1]*d+2048>>12,e[g+2]=e[g+2]*d+2048>>12)}function sl(e,t,r,a,s,l){if(a===0||s<.5)return;s>2&&(s=2);let h=t*r,u=h*4,d=h*2,A=h*2,g=Math.max(t,r)*4,B=32,x=0,I=u,P=I+d,k=P+A,T=k+A,H=T+g,Q=this.__instance("unsharp_mask",u+d+A*2+g+B,{exp:Math.exp}),G=new Uint32Array(e.buffer);new Uint32Array(this.__memory.buffer).set(G);let Z=Q.exports.hsv_v16||Q.exports._hsv_v16;if(!Z)throw new Error("WASM hsv_v16 function is not available");if(Z(x,I,t,r),Z=Q.exports.blurMono16||Q.exports._blurMono16,!Z)throw new Error("WASM blurMono16 function is not available");if(Z(I,P,k,T,H,t,r,s),Z=Q.exports.unsharp||Q.exports._unsharp,!Z)throw new Error("WASM unsharp function is not available");Z(x,x,I,P,t,r,a,l),G.set(new Uint32Array(this.__memory.buffer,0,h))}var ll={name:"unsharp_mask",fn:ol,wasm_fn:sl,wasm_src:"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"},Ii={filter:{box:{win:.5,fn(e){return e<0&&(e=-e),e<.5?1:0}},hamming:{win:1,fn(e){if(e<0&&(e=-e),e>=1)return 0;if(e<11920929e-14)return 1;let t=e*Math.PI;return Math.sin(t)/t*(.54+.46*Math.cos(t/1))}},lanczos2:{win:2,fn(e){if(e<0&&(e=-e),e>=2)return 0;if(e<11920929e-14)return 1;let t=e*Math.PI;return Math.sin(t)/t*Math.sin(t/2)/(t/2)}},lanczos3:{win:3,fn(e){if(e<0&&(e=-e),e>=3)return 0;if(e<11920929e-14)return 1;let t=e*Math.PI;return Math.sin(t)/t*Math.sin(t/3)/(t/3)}},mks2013:{win:2.5,fn(e){return e<0&&(e=-e),e>=2.5?0:e>=1.5?-.125*(e-2.5)*(e-2.5):e>=.5?.25*(4*e*e-11*e+7):1.0625-1.75*e*e}}}};function yi(e){return Math.round(e*16383)}function Zr(e,t,r,a,s){let l=Ii.filter[e].fn,h=1/a,u=Math.min(1,a),d=Ii.filter[e].win/u,A,g,B,x,I,P,k,T,H,Q,G,Z,te,U,X,Y,W,q=Math.floor((d+1)*2),J=new Int16Array((q+2)*r),ae=0,se=!J.subarray||!J.set;for(A=0;A<r;A++){for(g=(A+.5)*h+s,B=Math.max(0,Math.floor(g-d)),x=Math.min(t-1,Math.ceil(g+d)),I=x-B+1,P=new Float32Array(I),k=new Int16Array(I),T=0,H=B,Q=0;H<=x;H++,Q++)G=l((H+.5-g)*u),T+=G,P[Q]=G;for(Z=0,Q=0;Q<P.length;Q++)te=P[Q]/T,Z+=te,k[Q]=yi(te);for(k[r>>1]+=yi(1-Z),U=0;U<k.length&&k[U]===0;)U++;if(U<k.length){for(X=k.length-1;X>0&&k[X]===0;)X--;if(Y=B+U,W=X-U+1,J[ae++]=Y,J[ae++]=W,!se)J.set(k.subarray(U,X+1),ae),ae+=W;else for(Q=U;Q<=X;Q++)J[ae++]=k[Q]}else J[ae++]=0,J[ae++]=0}return J}function ct(e){return e<0?0:e>255?255:e}function ht(e){return e>=0?e:0}function cl(e,t,r,a,s,l){let h,u,d,A,g,B,x,I,P,k,T,H=0,Q=0;for(P=0;P<a;P++){for(g=0,k=0;k<s;k++){for(B=l[g++],x=l[g++],I=H+B*4|0,h=u=d=A=0;x>0;x--)T=l[g++],A=A+T*e[I+3]|0,d=d+T*e[I+2]|0,u=u+T*e[I+1]|0,h=h+T*e[I]|0,I=I+4|0;t[Q+3]=ht(A>>7),t[Q+2]=ht(d>>7),t[Q+1]=ht(u>>7),t[Q]=ht(h>>7),Q=Q+a*4|0}Q=(P+1)*4|0,H=(P+1)*r*4|0}}function hl(e,t,r,a,s,l){let h,u,d,A,g,B,x,I,P,k,T,H=0,Q=0;for(P=0;P<a;P++){for(g=0,k=0;k<s;k++){for(B=l[g++],x=l[g++],I=H+B*4|0,h=u=d=A=0;x>0;x--)T=l[g++],A=A+T*e[I+3]|0,d=d+T*e[I+2]|0,u=u+T*e[I+1]|0,h=h+T*e[I]|0,I=I+4|0;h>>=7,u>>=7,d>>=7,A>>=7,t[Q+3]=ct(A+8192>>14),t[Q+2]=ct(d+8192>>14),t[Q+1]=ct(u+8192>>14),t[Q]=ct(h+8192>>14),Q=Q+a*4|0}Q=(P+1)*4|0,H=(P+1)*r*4|0}}function ul(e,t,r,a,s,l){let h,u,d,A,g,B,x,I,P,k,T,H,Q=0,G=0;for(k=0;k<a;k++){for(B=0,T=0;T<s;T++){for(x=l[B++],I=l[B++],P=Q+x*4|0,h=u=d=A=0;I>0;I--)H=l[B++],g=e[P+3],A=A+H*g|0,d=d+H*e[P+2]*g|0,u=u+H*e[P+1]*g|0,h=h+H*e[P]*g|0,P=P+4|0;d=d/255|0,u=u/255|0,h=h/255|0,t[G+3]=ht(A>>7),t[G+2]=ht(d>>7),t[G+1]=ht(u>>7),t[G]=ht(h>>7),G=G+a*4|0}G=(k+1)*4|0,Q=(k+1)*r*4|0}}function fl(e,t,r,a,s,l){let h,u,d,A,g,B,x,I,P,k,T,H=0,Q=0;for(P=0;P<a;P++){for(g=0,k=0;k<s;k++){for(B=l[g++],x=l[g++],I=H+B*4|0,h=u=d=A=0;x>0;x--)T=l[g++],A=A+T*e[I+3]|0,d=d+T*e[I+2]|0,u=u+T*e[I+1]|0,h=h+T*e[I]|0,I=I+4|0;h>>=7,u>>=7,d>>=7,A>>=7,A=ct(A+8192>>14),A>0&&(h=h*255/A|0,u=u*255/A|0,d=d*255/A|0),t[Q+3]=A,t[Q+2]=ct(d+8192>>14),t[Q+1]=ct(u+8192>>14),t[Q]=ct(h+8192>>14),Q=Q+a*4|0}Q=(P+1)*4|0,H=(P+1)*r*4|0}}function dl(e,t,r){let a=3,s=t*r*4|0;for(;a<s;){if(e[a]!==255)return!0;a=a+4|0}return!1}function ml(e,t,r){let a=3,s=t*r*4|0;for(;a<s;)e[a]=255,a=a+4|0}function pl(e){let t=e.src,r=e.width,a=e.height,s=e.toWidth,l=e.toHeight,h=e.scaleX||e.toWidth/e.width,u=e.scaleY||e.toHeight/e.height,d=e.offsetX||0,A=e.offsetY||0,g=e.dest||new Uint8Array(s*l*4),B=typeof e.filter=="undefined"?"mks2013":e.filter,x=Zr(B,r,s,h,d),I=Zr(B,a,l,u,A),P=new Uint16Array(s*a*4);return dl(t,r,a)?(ul(t,P,r,a,s,x),fl(P,g,a,s,l,I)):(cl(t,P,r,a,s,x),hl(P,g,a,s,l,I),ml(g,s,l)),g}function Al(e,t,r){let a=3,s=t*r*4|0;for(;a<s;){if(e[a]!==255)return!0;a=a+4|0}return!1}function gl(e,t,r){let a=3,s=t*r*4|0;for(;a<s;)e[a]=255,a=a+4|0}function bl(e){return new Uint8Array(e.buffer,0,e.byteLength)}var ki=!0;try{ki=new Uint32Array(new Uint8Array([1,0,0,0]).buffer)[0]===1}catch(e){}function wi(e,t,r){if(ki){t.set(bl(e),r);return}for(let a=r,s=0;s<e.length;s++){let l=e[s];t[a++]=l&255,t[a++]=l>>8&255}}function xl(e){let t=e.src,r=e.width,a=e.height,s=e.toWidth,l=e.toHeight,h=e.scaleX||e.toWidth/e.width,u=e.scaleY||e.toHeight/e.height,d=e.offsetX||0,A=e.offsetY||0,g=e.dest||new Uint8Array(s*l*4),B=typeof e.filter=="undefined"?"mks2013":e.filter,x=Zr(B,r,s,h,d),I=Zr(B,a,l,u,A),P=0,k=Math.max(t.byteLength,g.byteLength),T=this.__align(P+k),H=a*s*4*2,Q=this.__align(T+H),G=this.__align(Q+x.byteLength),Z=G+I.byteLength,te=this.__instance("resize",Z),U=new Uint8Array(this.__memory.buffer),X=new Uint32Array(this.__memory.buffer),Y=new Uint32Array(t.buffer);X.set(Y),wi(x,U,Q),wi(I,U,G);let W=te.exports.convolveHV||te.exports._convolveHV;if(!W)throw new Error("WASM resize function is not available");return Al(t,r,a)?W(Q,G,T,r,a,s,l,1):(W(Q,G,T,r,a,s,l,0),gl(g,s,l)),new Uint32Array(g.buffer).set(new Uint32Array(this.__memory.buffer,0,l*s)),g}var Cl={name:"resize",fn:pl,wasm_fn:xl,wasm_src:"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"},vl=class extends rl{constructor(e){let t=e||[],r={js:t.indexOf("js")>=0,wasm:t.indexOf("wasm")>=0};super(r),this.features={js:r.js,wasm:r.wasm&&this.has_wasm()},this.use(ll),this.use(Cl)}resizeAndUnsharp(e){let t=this.resize(e);return e.unsharpAmount&&this.unsharp_mask(t,e.toWidth,e.toHeight,e.unsharpAmount,e.unsharpRadius,e.unsharpThreshold),t}};function lr(e){"@babel/helpers - typeof";return lr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},lr(e)}function Il(e,t){if(lr(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var a=r.call(e,t||"default");if(lr(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function yl(e){var t=Il(e,"string");return lr(t)=="symbol"?t:t+""}function Ce(e,t,r){return(t=yl(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Ei(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),r.push.apply(r,a)}return r}function Jr(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Ei(Object(r),!0).forEach(function(a){Ce(e,a,r[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ei(Object(r)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))})}return e}var Bi=100,wl=class{constructor(e,t){Ce(this,"create",void 0),Ce(this,"available",void 0),Ce(this,"acquired",void 0),Ce(this,"lastId",void 0),Ce(this,"timeoutId",void 0),Ce(this,"idle",void 0),this.create=e,this.available=[],this.acquired={},this.lastId=1,this.timeoutId=0,this.idle=t||2e3}acquire(){let e;return this.available.length!==0?e=this.available.pop():e=Jr(Jr({},this.create()),{},{id:this.lastId++,lastUsed:0}),this.acquired[e.id]=e,{value:e.value,release:()=>this.release(e)}}release(e){delete this.acquired[e.id],e.lastUsed=Date.now(),this.available.push(e),this.timeoutId===0&&(this.timeoutId=setTimeout(()=>this.gc(),Bi))}gc(){let e=Date.now();this.available=this.available.filter(t=>e-t.lastUsed>this.idle?(t.destroy(),!1):!0),this.available.length!==0?this.timeoutId=setTimeout(()=>this.gc(),Bi):this.timeoutId=0}};function Ja(e){var t,r;return(t=e==null||(r=e.constructor)===null||r===void 0?void 0:r.name)!==null&&t!==void 0?t:""}function _i(e){let t=Ja(e);return t==="HTMLCanvasElement"||t==="OffscreenCanvas"||t==="Canvas"||t==="CanvasElement"}function Kr(e){return Ja(e)==="HTMLImageElement"}function Mi(e){return Ja(e)==="ImageBitmap"}function El(e){let t=0,r=[];function a(){if(t<e&&r.length){var s;t++,(s=r.shift())===null||s===void 0||s()}}return function(l){return new Promise((h,u)=>{r.push(()=>{l().then(d=>{h(d),t--,a()},d=>{u(d),t--,a()})}),a()})}}function Bl(e){switch(e){case 0:return"pixelated";case 1:return"low";case 2:return"medium"}return"high"}var en=["box","hamming","lanczos2","lanczos3"];function Si(e){return en[e]}function Pi(e){return en.indexOf(e)>=0}function _l(e){let t=en.indexOf(e);return t>=0?t:void 0}function Ml(e,t,r,a,s){let l=r/e,h=a/t,u=9/s;if(u>.5)return[[r,a]];let d=Math.ceil(Math.log(Math.min(l,h))/Math.log(u));if(d<=1)return[[r,a]];let A=[];for(let g=0;g<d;g++){let B=Math.round(Math.pow(Math.pow(e,d-g-1)*Math.pow(r,g+1),1/d)),x=Math.round(Math.pow(Math.pow(t,d-g-1)*Math.pow(a,g+1),1/d));A.push([B,x])}return A}var Li=1e-5;function Qt(e){let t=Math.round(e);return Math.abs(e-t)<Li?t:Math.floor(e)}function Di(e){let t=Math.round(e);return Math.abs(e-t)<Li?t:Math.ceil(e)}function Sl(e){let t=e.toWidth/e.width,r=e.toHeight/e.height,a=Qt(e.srcTileSize*t)-2*e.destTileBorder,s=Qt(e.srcTileSize*r)-2*e.destTileBorder;if(a<1||s<1)throw new Error("Internal error in pica: target tile width/height is too small.");let l,h,u,d,A,g,B=[],x;for(d=0;d<e.toHeight;d+=s)for(u=0;u<e.toWidth;u+=a)l=u-e.destTileBorder,l<0&&(l=0),A=u+a+e.destTileBorder-l,l+A>=e.toWidth&&(A=e.toWidth-l),h=d-e.destTileBorder,h<0&&(h=0),g=d+s+e.destTileBorder-h,h+g>=e.toHeight&&(g=e.toHeight-h),x={toX:l,toY:h,toWidth:A,toHeight:g,toInnerX:u,toInnerY:d,toInnerWidth:a,toInnerHeight:s,offsetX:l/t-Qt(l/t),offsetY:h/r-Qt(h/r),scaleX:t,scaleY:r,x:Qt(l/t),y:Qt(h/r),width:Di(A/t),height:Di(g/r)},B.push(x);return B}var Za="/9j/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAYAAAAAAAD/4AAQskZJRgABAQAAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/wAALCAACAAMBAREA/8QAFAABAAAAAAAAAAAAAAAAAAAACf/EABsQAAMBAQADAAAAAAAAAAAAAAECAwQFABEx/9oACAEBAAA/AC06fW6va0ps7PT179E88MiV02arrCEkjGQZiSEnKc5ovxURVHoADz//2Q==",Ee={canvas:!1,offscreen_canvas:!1,may_be_worker:!1,create_image_bitmap:!1,safari_put_image_data_fix:!1,bug_canvas_orientation_region:!0,bug_image_bitmap_orientation_region:!0,cib_resize:!1},Ri=!1,Ot=null,Ut={willReadFrequently:!0};function ea(){if(typeof document=="undefined"||!document.createElement)return!1;try{let e=document.createElement("canvas");e.width=2,e.height=1;let t=e.getContext("2d",Ut),r=t.createImageData(2,1);return r.data[0]=12,r.data[1]=23,r.data[2]=34,r.data[3]=255,r.data[4]=45,r.data[5]=56,r.data[6]=67,r.data[7]=255,t.putImageData(r,0,0),r=t.getImageData(0,0,2,1),r.data[0]===12&&r.data[1]===23&&r.data[2]===34&&r.data[3]===255&&r.data[4]===45&&r.data[5]===56&&r.data[6]===67&&r.data[7]===255}catch(e){return!1}}function ta(){if(typeof OffscreenCanvas=="undefined")return!1;try{let e=new OffscreenCanvas(2,1).getContext("2d",Ut),t=e.createImageData(2,1);return t.data[0]=12,t.data[1]=23,t.data[2]=34,t.data[3]=255,t.data[4]=45,t.data[5]=56,t.data[6]=67,t.data[7]=255,e.putImageData(t,0,0),t=e.getImageData(0,0,2,1),t.data[0]===12&&t.data[1]===23&&t.data[2]===34&&t.data[3]===255&&t.data[4]===45&&t.data[5]===56&&t.data[6]===67&&t.data[7]===255}catch(e){return!1}}function ra(){return typeof createImageBitmap!="undefined"}function Pl(){return typeof Worker!="undefined"&&typeof URL!="undefined"&&!!URL.createObjectURL}function Dl(){try{return!!(typeof navigator!="undefined"&&navigator.userAgent&&navigator.userAgent.indexOf("Safari")>=0&&navigator.userAgent.indexOf("Chrome")<0)}catch(e){return!1}}function Rl(){return Promise.resolve().then(()=>{if(ta()&&ra()&&typeof Blob!="undefined"&&typeof atob!="undefined"){let e=atob(Za),t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return createImageBitmap(new Blob([t],{type:"image/jpeg"})).then(r=>{let a=new OffscreenCanvas(1,1);try{let s=a.getContext("2d",Ut);return s.drawImage(r,1,1,1,1,0,0,1,1),s.getImageData(0,0,1,1).data[0]<240}finally{r.close()}})}return ea()&&typeof Image!="undefined"?new Promise(e=>{let t=new Image;t.onload=()=>{try{let r=document.createElement("canvas");r.width=1,r.height=1;let a=r.getContext("2d",Ut);a.drawImage(t,1,1,1,1,0,0,1,1),e(a.getImageData(0,0,1,1).data[0]<240)}catch(r){e(!0)}},t.onerror=()=>e(!0),t.src=`data:image/jpeg;base64,${Za}`}):!0}).catch(()=>!0)}function Tl(){return Promise.resolve().then(()=>{if(!Ee.create_image_bitmap&&!ra()||typeof Blob=="undefined"||typeof atob=="undefined")return!0;let e=ta(),t=ea();if(!e&&!t)return!0;let r=atob(Za),a=new Uint8Array(r.length);for(let s=0;s<r.length;s++)a[s]=r.charCodeAt(s);return createImageBitmap(new Blob([a],{type:"image/jpeg"})).then(s=>createImageBitmap(s,1,1,1,1).then(l=>{let h;e?h=new OffscreenCanvas(1,1):(h=document.createElement("canvas"),h.width=1,h.height=1);try{let u=h.getContext("2d",Ut);return u.drawImage(l,0,0),l.width!==1||l.height!==1||u.getImageData(0,0,1,1).data[0]<240}finally{s.close(),l.close()}},()=>(s.close(),!0)))}).catch(()=>!0)}function Fl(){return Promise.resolve().then(()=>{if(!ra())return!1;let e=20,t=5,r;if(Ee.canvas||ea())r=document.createElement("canvas"),r.width=e,r.height=e;else if(Ee.offscreen_canvas||ta())r=new OffscreenCanvas(e,e),r.getContext("2d",Ut).clearRect(0,0,e,e);else return!1;return createImageBitmap(r,0,0,e,e,{resizeWidth:t,resizeHeight:t,resizeQuality:"high"}).then(a=>{let s=a.width===t&&!!a.close;return a.close&&a.close(),r=null,s})}).catch(()=>!1)}function kl(){if(Ri)return Promise.resolve(Object.assign({},Ee));if(Ot)return Ot.then(()=>Object.assign({},Ee));Ee.canvas=ea(),Ee.offscreen_canvas=ta(),Ee.may_be_worker=Pl(),Ee.create_image_bitmap=ra(),Ee.safari_put_image_data_fix=Dl();let e=Rl().then(a=>{Ee.bug_canvas_orientation_region=a}).catch(()=>{}),t=Tl().then(a=>{Ee.bug_image_bitmap_orientation_region=a}).catch(()=>{}),r=Fl().then(a=>{Ee.cib_resize=a}).catch(()=>{});return Ot=Promise.all([e,t,r]).then(()=>(Ri=!0,Ot=null,Object.assign({},Ee)),a=>{throw Ot=null,a}),Ot}function Ti(e,t,r,a,s,l,h){try{var u=e[l](h),d=u.value}catch(A){r(A);return}u.done?t(d):Promise.resolve(d).then(a,s)}function je(e){return function(){var t=this,r=arguments;return new Promise(function(a,s){var l=e.apply(t,r);function h(d){Ti(l,a,s,h,u,"next",d)}function u(d){Ti(l,a,s,h,u,"throw",d)}h(void 0)})}}var Fi=`/*!

pica
https://github.com/nodeca/pica

*/
!function(){var A;function t(A){const t=A.replace(/[\\r\\n=]/g,""),e=t.length,n=new Uint8Array(3*e>>2);let a=0,i=0;for(let s=0;s<e;s++)s%4==0&&s&&(n[i++]=a>>16&255,n[i++]=a>>8&255,n[i++]=255&a),a=a<<6|"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(t.charAt(s));const r=e%4*6;return 0===r?(n[i++]=a>>16&255,n[i++]=a>>8&255,n[i++]=255&a):18===r?(n[i++]=a>>10&255,n[i++]=a>>2&255):12===r&&(n[i++]=a>>4&255),n}var e={js:!0,wasm:!0},n=class{constructor(A){const t=Object.assign({},e,A||{});if(this.options=t,this.__cache={},this.__init_promise=null,this.__modules=t.modules||{},this.__memory=null,this.__wasm={},this.__isLE=1===new Uint32Array(new Uint8Array([1,0,0,0]).buffer)[0],!this.options.js&&!this.options.wasm)throw new Error('mathlib: at least "js" or "wasm" should be enabled')}has_wasm(){return function(){if(void 0!==A)return A;if(A=!1,"undefined"==typeof WebAssembly)return A;try{const t=new Uint8Array([0,97,115,109,1,0,0,0,1,6,1,96,1,127,1,127,3,2,1,0,5,3,1,0,1,7,8,1,4,116,101,115,116,0,0,10,16,1,14,0,32,0,65,1,54,2,0,32,0,40,2,0,11]),e=new WebAssembly.Module(t);return 0!==new WebAssembly.Instance(e,{}).exports.test(4)&&(A=!0),A}catch(t){}return A}()}use(A){return this.__modules[A.name]=A,this.options.wasm&&this.has_wasm()&&A.wasm_fn?this[A.name]=A.wasm_fn:this[A.name]=A.fn,this}init(){return this.__init_promise?this.__init_promise:this.options.js||!this.options.wasm||this.has_wasm()?(this.__init_promise=Promise.all(Object.keys(this.__modules).map(A=>{const e=this.__modules[A];return this.options.wasm&&this.has_wasm()&&e.wasm_fn?this.__wasm[A]?null:WebAssembly.compile(t(e.wasm_src)).then(t=>{this.__wasm[A]=t}):null})).then(()=>this),this.__init_promise):Promise.reject(new Error('mathlib: only "wasm" was enabled, but it\\'s not supported'))}__reallocate(A){if(!this.__memory)return this.__memory=new WebAssembly.Memory({initial:Math.ceil(A/65536)}),this.__memory;const t=this.__memory.buffer.byteLength;return t<A&&this.__memory.grow(Math.ceil((A-t)/65536)),this.__memory}__instance(A,e,n){if(e&&this.__reallocate(e),!this.__wasm[A]){const e=this.__modules[A];this.__wasm[A]=new WebAssembly.Module(t(e.wasm_src))}if(!this.__cache[A]){const t={memoryBase:0,memory:this.__memory,tableBase:0,table:new WebAssembly.Table({initial:0,element:"anyfunc"})};this.__cache[A]=new WebAssembly.Instance(this.__wasm[A],{env:Object.assign(t,n||{})})}return this.__cache[A]}__align(A,t){const e=A%(t=t||8);return A+(e?t-e:0)}};function a(A,t,e,n,a,i){let r,s,o,g,I,h,B,Q,E,C,f,c,u,d;for(E=0;E<i;E++){for(h=E*a,B=E,Q=0,r=A[h],I=r*n[6],g=I,f=n[0],c=n[1],u=n[4],d=n[5],C=0;C<a;C++)s=A[h],o=s*f+r*c+g*u+I*d,I=g,g=o,r=s,e[Q]=g,Q++,h++;for(h--,Q--,B+=i*(a-1),r=A[h],I=r*n[7],g=I,s=r,f=n[2],c=n[3],C=a-1;C>=0;C--)o=s*f+r*c+g*u+I*d,I=g,g=o,r=s,s=A[h],t[B]=e[Q]+g,h--,Q--,B-=i}}function i(A,t,e,n){if(!n)return;const i=new Uint16Array(A.length),r=new Float32Array(Math.max(t,e)),s=function(A){A<.5&&(A=.5);const t=Math.exp(.527076)/A,e=Math.exp(-t),n=Math.exp(-2*t),a=(1-e)*(1-e)/(1+2*t*e-n),i=a*(t-1)*e,r=a*(t+1)*e,s=-a*n,o=2*e,g=-n;return new Float32Array([a,i,r,s,o,g,(a+i)/(1-o-g),(r+s)/(1-o-g)])}(n);a(A,i,r,s,t,e),a(i,A,r,s,e,t)}var r={name:"unsharp_mask",fn:function(A,t,e,n,a,r){let s,o,g,I,h;if(0===n||a<.5)return;a>2&&(a=2);const B=function(A,t,e){const n=t*e,a=new Uint16Array(n);let i,r,s,o;for(let g=0;g<n;g++)i=A[4*g],r=A[4*g+1],s=A[4*g+2],o=i>=r&&i>=s?i:r>=s&&r>=i?r:s,a[g]=o<<8;return a}(A,t,e),Q=new Uint16Array(B);i(Q,t,e,a);const E=n/100*4096+.5|0,C=r<<8,f=t*e;for(let i=0;i<f;i++)s=B[i],I=s-Q[i],Math.abs(I)>=C&&(o=s+(E*I+2048>>12),o=o>65280?65280:o,o=o<0?0:o,s=0!==s?s:1,g=(o<<12)/s|0,h=4*i,A[h]=A[h]*g+2048>>12,A[h+1]=A[h+1]*g+2048>>12,A[h+2]=A[h+2]*g+2048>>12)},wasm_fn:function(A,t,e,n,a,i){if(0===n||a<.5)return;a>2&&(a=2);const r=t*e,s=4*r,o=2*r,g=2*r,I=4*Math.max(t,e),h=s,B=h+o,Q=B+g,E=Q+g,C=E+I,f=this.__instance("unsharp_mask",s+o+2*g+I+32,{exp:Math.exp}),c=new Uint32Array(A.buffer);new Uint32Array(this.__memory.buffer).set(c);let u=f.exports.hsv_v16||f.exports._hsv_v16;if(!u)throw new Error("WASM hsv_v16 function is not available");if(u(0,h,t,e),u=f.exports.blurMono16||f.exports._blurMono16,!u)throw new Error("WASM blurMono16 function is not available");if(u(h,B,Q,E,C,t,e,a),u=f.exports.unsharp||f.exports._unsharp,!u)throw new Error("WASM unsharp function is not available");u(0,0,h,B,t,e,n,i),c.set(new Uint32Array(this.__memory.buffer,0,r))},wasm_src:"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"},s={filter:{box:{win:.5,fn:A=>(A<0&&(A=-A),A<.5?1:0)},hamming:{win:1,fn(A){if(A<0&&(A=-A),A>=1)return 0;if(A<1.1920929e-7)return 1;const t=A*Math.PI;return Math.sin(t)/t*(.54+.46*Math.cos(t/1))}},lanczos2:{win:2,fn(A){if(A<0&&(A=-A),A>=2)return 0;if(A<1.1920929e-7)return 1;const t=A*Math.PI;return Math.sin(t)/t*Math.sin(t/2)/(t/2)}},lanczos3:{win:3,fn(A){if(A<0&&(A=-A),A>=3)return 0;if(A<1.1920929e-7)return 1;const t=A*Math.PI;return Math.sin(t)/t*Math.sin(t/3)/(t/3)}},mks2013:{win:2.5,fn:A=>(A<0&&(A=-A),A>=2.5?0:A>=1.5?-.125*(A-2.5)*(A-2.5):A>=.5?.25*(4*A*A-11*A+7):1.0625-1.75*A*A)}}};function o(A){return Math.round(16383*A)}function g(A,t,e,n,a){const i=s.filter[A].fn,r=1/n,g=Math.min(1,n),I=s.filter[A].win/g;let h,B,Q,E,C,f,c,u,d,l,w,m,y,_,b,D,M;const p=Math.floor(2*(I+1)),G=new Int16Array((p+2)*e);let U=0;const F=!G.subarray||!G.set;for(h=0;h<e;h++){for(B=(h+.5)*r+a,Q=Math.max(0,Math.floor(B-I)),E=Math.min(t-1,Math.ceil(B+I)),C=E-Q+1,f=new Float32Array(C),c=new Int16Array(C),u=0,d=Q,l=0;d<=E;d++,l++)w=i((d+.5-B)*g),u+=w,f[l]=w;for(m=0,l=0;l<f.length;l++)y=f[l]/u,m+=y,c[l]=o(y);for(c[e>>1]+=o(1-m),_=0;_<c.length&&0===c[_];)_++;if(_<c.length){for(b=c.length-1;b>0&&0===c[b];)b--;if(D=Q+_,M=b-_+1,G[U++]=D,G[U++]=M,F)for(l=_;l<=b;l++)G[U++]=c[l];else G.set(c.subarray(_,b+1),U),U+=M}else G[U++]=0,G[U++]=0}return G}function I(A){return A<0?0:A>255?255:A}function h(A){return A>=0?A:0}var B=!0;try{B=1===new Uint32Array(new Uint8Array([1,0,0,0]).buffer)[0]}catch(G){}function Q(A,t,e){if(B)t.set(function(A){return new Uint8Array(A.buffer,0,A.byteLength)}(A),e);else for(let n=e,a=0;a<A.length;a++){const e=A[a];t[n++]=255&e,t[n++]=e>>8&255}}var E={name:"resize",fn:function(A){const t=A.src,e=A.width,n=A.height,a=A.toWidth,i=A.toHeight,r=A.scaleX||A.toWidth/A.width,s=A.scaleY||A.toHeight/A.height,o=A.offsetX||0,B=A.offsetY||0,Q=A.dest||new Uint8Array(a*i*4),E=void 0===A.filter?"mks2013":A.filter,C=g(E,e,a,r,o),f=g(E,n,i,s,B),c=new Uint16Array(a*n*4);return!function(A,t,e){let n=3;const a=t*e*4|0;for(;n<a;){if(255!==A[n])return!0;n=n+4|0}return!1}(t,e,n)?(function(A,t,e,n,a,i){let r,s,o,g,I,B,Q,E,C,f,c,u=0,d=0;for(C=0;C<n;C++){for(I=0,f=0;f<a;f++){for(B=i[I++],Q=i[I++],E=u+4*B|0,r=s=o=g=0;Q>0;Q--)c=i[I++],g=g+c*A[E+3]|0,o=o+c*A[E+2]|0,s=s+c*A[E+1]|0,r=r+c*A[E]|0,E=E+4|0;t[d+3]=h(g>>7),t[d+2]=h(o>>7),t[d+1]=h(s>>7),t[d]=h(r>>7),d=d+4*n|0}d=4*(C+1)|0,u=(C+1)*e*4|0}}(t,c,e,n,a,C),function(A,t,e,n,a,i){let r,s,o,g,h,B,Q,E,C,f,c,u=0,d=0;for(C=0;C<n;C++){for(h=0,f=0;f<a;f++){for(B=i[h++],Q=i[h++],E=u+4*B|0,r=s=o=g=0;Q>0;Q--)c=i[h++],g=g+c*A[E+3]|0,o=o+c*A[E+2]|0,s=s+c*A[E+1]|0,r=r+c*A[E]|0,E=E+4|0;r>>=7,s>>=7,o>>=7,g>>=7,t[d+3]=I(g+8192>>14),t[d+2]=I(o+8192>>14),t[d+1]=I(s+8192>>14),t[d]=I(r+8192>>14),d=d+4*n|0}d=4*(C+1)|0,u=(C+1)*e*4|0}}(c,Q,n,a,i,f),function(A,t,e){let n=3;const a=t*e*4|0;for(;n<a;)A[n]=255,n=n+4|0}(Q,a,i)):(function(A,t,e,n,a,i){let r,s,o,g,I,B,Q,E,C,f,c,u,d=0,l=0;for(f=0;f<n;f++){for(B=0,c=0;c<a;c++){for(Q=i[B++],E=i[B++],C=d+4*Q|0,r=s=o=g=0;E>0;E--)u=i[B++],I=A[C+3],g=g+u*I|0,o=o+u*A[C+2]*I|0,s=s+u*A[C+1]*I|0,r=r+u*A[C]*I|0,C=C+4|0;o=o/255|0,s=s/255|0,r=r/255|0,t[l+3]=h(g>>7),t[l+2]=h(o>>7),t[l+1]=h(s>>7),t[l]=h(r>>7),l=l+4*n|0}l=4*(f+1)|0,d=(f+1)*e*4|0}}(t,c,e,n,a,C),function(A,t,e,n,a,i){let r,s,o,g,h,B,Q,E,C,f,c,u=0,d=0;for(C=0;C<n;C++){for(h=0,f=0;f<a;f++){for(B=i[h++],Q=i[h++],E=u+4*B|0,r=s=o=g=0;Q>0;Q--)c=i[h++],g=g+c*A[E+3]|0,o=o+c*A[E+2]|0,s=s+c*A[E+1]|0,r=r+c*A[E]|0,E=E+4|0;r>>=7,s>>=7,o>>=7,g>>=7,g=I(g+8192>>14),g>0&&(r=255*r/g|0,s=255*s/g|0,o=255*o/g|0),t[d+3]=g,t[d+2]=I(o+8192>>14),t[d+1]=I(s+8192>>14),t[d]=I(r+8192>>14),d=d+4*n|0}d=4*(C+1)|0,u=(C+1)*e*4|0}}(c,Q,n,a,i,f)),Q},wasm_fn:function(A){const t=A.src,e=A.width,n=A.height,a=A.toWidth,i=A.toHeight,r=A.scaleX||A.toWidth/A.width,s=A.scaleY||A.toHeight/A.height,o=A.offsetX||0,I=A.offsetY||0,h=A.dest||new Uint8Array(a*i*4),B=void 0===A.filter?"mks2013":A.filter,E=g(B,e,a,r,o),C=g(B,n,i,s,I),f=Math.max(t.byteLength,h.byteLength),c=this.__align(0+f),u=n*a*4*2,d=this.__align(c+u),l=this.__align(d+E.byteLength),w=l+C.byteLength,m=this.__instance("resize",w),y=new Uint8Array(this.__memory.buffer),_=new Uint32Array(this.__memory.buffer),b=new Uint32Array(t.buffer);_.set(b),Q(E,y,d),Q(C,y,l);const D=m.exports.convolveHV||m.exports._convolveHV;if(!D)throw new Error("WASM resize function is not available");return!function(A,t,e){let n=3;const a=t*e*4|0;for(;n<a;){if(255!==A[n])return!0;n=n+4|0}return!1}(t,e,n)?(D(d,l,c,e,n,a,i,0),function(A,t,e){let n=3;const a=t*e*4|0;for(;n<a;)A[n]=255,n=n+4|0}(h,a,i)):D(d,l,c,e,n,a,i,1),new Uint32Array(h.buffer).set(new Uint32Array(this.__memory.buffer,0,i*a)),h},wasm_src:"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"},C=class extends n{constructor(A){const t=A||[],e={js:t.indexOf("js")>=0,wasm:t.indexOf("wasm")>=0};super(e),this.features={js:e.js,wasm:e.wasm&&this.has_wasm()},this.use(r),this.use(E)}resizeAndUnsharp(A){const t=this.resize(A);return A.unsharpAmount&&this.unsharp_mask(t,A.toWidth,A.toHeight,A.unsharpAmount,A.unsharpRadius,A.unsharpThreshold),t}},f="/9j/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAYAAAAAAAD/4AAQskZJRgABAQAAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/wAALCAACAAMBAREA/8QAFAABAAAAAAAAAAAAAAAAAAAACf/EABsQAAMBAQADAAAAAAAAAAAAAAECAwQFABEx/9oACAEBAAA/AC06fW6va0ps7PT179E88MiV02arrCEkjGQZiSEnKc5ovxURVHoADz//2Q==",c={canvas:!1,offscreen_canvas:!1,may_be_worker:!1,create_image_bitmap:!1,safari_put_image_data_fix:!1,bug_canvas_orientation_region:!0,bug_image_bitmap_orientation_region:!0,cib_resize:!1},u=!1,d=null,l={willReadFrequently:!0};function w(){if("undefined"==typeof document||!document.createElement)return!1;try{const A=document.createElement("canvas");A.width=2,A.height=1;const t=A.getContext("2d",l);let e=t.createImageData(2,1);return e.data[0]=12,e.data[1]=23,e.data[2]=34,e.data[3]=255,e.data[4]=45,e.data[5]=56,e.data[6]=67,e.data[7]=255,t.putImageData(e,0,0),e=t.getImageData(0,0,2,1),12===e.data[0]&&23===e.data[1]&&34===e.data[2]&&255===e.data[3]&&45===e.data[4]&&56===e.data[5]&&67===e.data[6]&&255===e.data[7]}catch(G){return!1}}function m(){if("undefined"==typeof OffscreenCanvas)return!1;try{const A=new OffscreenCanvas(2,1).getContext("2d",l);let t=A.createImageData(2,1);return t.data[0]=12,t.data[1]=23,t.data[2]=34,t.data[3]=255,t.data[4]=45,t.data[5]=56,t.data[6]=67,t.data[7]=255,A.putImageData(t,0,0),t=A.getImageData(0,0,2,1),12===t.data[0]&&23===t.data[1]&&34===t.data[2]&&255===t.data[3]&&45===t.data[4]&&56===t.data[5]&&67===t.data[6]&&255===t.data[7]}catch(G){return!1}}function y(){return"undefined"!=typeof createImageBitmap}function _(){if(u)return Promise.resolve(Object.assign({},c));if(d)return d.then(()=>Object.assign({},c));c.canvas=w(),c.offscreen_canvas=m(),c.may_be_worker="undefined"!=typeof Worker&&"undefined"!=typeof URL&&!!URL.createObjectURL,c.create_image_bitmap=y(),c.safari_put_image_data_fix=function(){try{return!!("undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.indexOf("Safari")>=0&&navigator.userAgent.indexOf("Chrome")<0)}catch(G){return!1}}();const A=Promise.resolve().then(()=>{if(m()&&y()&&"undefined"!=typeof Blob&&"undefined"!=typeof atob){const A=atob(f),t=new Uint8Array(A.length);for(let e=0;e<A.length;e++)t[e]=A.charCodeAt(e);return createImageBitmap(new Blob([t],{type:"image/jpeg"})).then(A=>{const t=new OffscreenCanvas(1,1);try{const e=t.getContext("2d",l);return e.drawImage(A,1,1,1,1,0,0,1,1),e.getImageData(0,0,1,1).data[0]<240}finally{A.close()}})}return!w()||"undefined"==typeof Image||new Promise(A=>{const t=new Image;t.onload=()=>{try{const e=document.createElement("canvas");e.width=1,e.height=1;const n=e.getContext("2d",l);n.drawImage(t,1,1,1,1,0,0,1,1),A(n.getImageData(0,0,1,1).data[0]<240)}catch(G){A(!0)}},t.onerror=()=>A(!0),t.src=\`data:image/jpeg;base64,\${f}\`})}).catch(()=>!0).then(A=>{c.bug_canvas_orientation_region=A}).catch(()=>{}),t=Promise.resolve().then(()=>{if(!c.create_image_bitmap&&!y())return!0;if("undefined"==typeof Blob||"undefined"==typeof atob)return!0;const A=m(),t=w();if(!A&&!t)return!0;const e=atob(f),n=new Uint8Array(e.length);for(let a=0;a<e.length;a++)n[a]=e.charCodeAt(a);return createImageBitmap(new Blob([n],{type:"image/jpeg"})).then(t=>createImageBitmap(t,1,1,1,1).then(e=>{let n;A?n=new OffscreenCanvas(1,1):(n=document.createElement("canvas"),n.width=1,n.height=1);try{const A=n.getContext("2d",l);return A.drawImage(e,0,0),1!==e.width||1!==e.height||A.getImageData(0,0,1,1).data[0]<240}finally{t.close(),e.close()}},()=>(t.close(),!0)))}).catch(()=>!0).then(A=>{c.bug_image_bitmap_orientation_region=A}).catch(()=>{}),e=Promise.resolve().then(()=>{if(!y())return!1;const A=20;let t;if(c.canvas||w())t=document.createElement("canvas"),t.width=A,t.height=A;else{if(!c.offscreen_canvas&&!m())return!1;t=new OffscreenCanvas(A,A),t.getContext("2d",l).clearRect(0,0,A,A)}return createImageBitmap(t,0,0,A,A,{resizeWidth:5,resizeHeight:5,resizeQuality:"high"}).then(A=>{const e=5===A.width&&!!A.close;return A.close&&A.close(),t=null,e})}).catch(()=>!1).then(A=>{c.cib_resize=A}).catch(()=>{});return d=Promise.all([A,t,e]).then(()=>(u=!0,d=null,Object.assign({},c)),A=>{throw d=null,A})}var b=self,D=null;function M(A,t){return D||(D=new C(A.features)),D.resizeAndUnsharp(t)}function p(A){if("bitmap"===A.job.kind)return void function(A,t){let e=new OffscreenCanvas(t.width,t.height);const n=e.getContext("2d",{willReadFrequently:!0});n.drawImage(t.src,0,0);const a=n.getImageData(0,0,t.width,t.height).data;e.width=e.height=0,e=null,t.src.close();const i=M(A,{src:a,width:t.width,height:t.height,toWidth:t.toWidth,toHeight:t.toHeight,scaleX:t.scaleX,scaleY:t.scaleY,offsetX:t.offsetX,offsetY:t.offsetY,filter:t.filter,unsharpAmount:t.unsharpAmount,unsharpRadius:t.unsharpRadius,unsharpThreshold:t.unsharpThreshold});b.postMessage({kind:"array",data:i},[i.buffer])}(A,A.job);const t=M(A,A.job);b.postMessage({kind:"array",data:t},[t.buffer])}b.onmessage=function(A){Promise.resolve().then(()=>function(A){switch(A.method){case"get_supported_features":return _().then(A=>{b.postMessage({data:A})});case"resize":return p(A),Promise.resolve();default:return Promise.reject(new Error(\`Unknown worker method: \${A.method}\`))}}(A.data)).catch(A=>{b.postMessage({err:A})})}}();
//# sourceURL=pica-inline-worker.js`,Qi=1;typeof navigator!="undefined"&&(Qi=Math.min(navigator.hardwareConcurrency||1,4));var Ll={tile:1024,concurrency:Qi,features:["js","wasm","ww"],idle:2e3},sr={filter:"mks2013",unsharpAmount:0,unsharpRadius:0,unsharpThreshold:0},Et={willReadFrequently:!0},Ql=class{constructor(e){Ce(this,"options",void 0),Ce(this,"__limit",void 0),Ce(this,"resize_features",void 0),Ce(this,"__workersPool",void 0),Ce(this,"capabilities",void 0),Ce(this,"__requested_features",void 0),Ce(this,"__mathlib",void 0),Ce(this,"__initPromise",void 0),this.options=Object.assign({},Ll,e||{}),(this.options.features.indexOf("ww")>=0||this.options.features.indexOf("all")>=0)&&this.options.workerURL,this.__limit=El(this.options.concurrency),this.resize_features={js:!1,wasm:!1,cib:!1,ww:!1},this.__workersPool=null,this.capabilities={worker:!1,ww_offscreen_canvas:!1,canvas:!1,offscreen_canvas:!1,may_be_worker:!1,create_image_bitmap:!1,safari_put_image_data_fix:!1,bug_canvas_orientation_region:!0,bug_image_bitmap_orientation_region:!0,cib_resize:!1},this.__requested_features=[],this.__mathlib=null}init(){return this.__initPromise?this.__initPromise:(this.__initPromise=this.__init(),this.__initPromise)}__init(){var e=this;return je(function*(){let t=e.options.features.slice();t.indexOf("all")>=0&&(t=["cib","wasm","js","ww"]),e.__requested_features=t,e.__mathlib=new vl(t);let r=yield kl();if(Object.assign(e.capabilities,r),e.capabilities.cib_resize&&t.indexOf("cib")>=0&&(e.resize_features.cib=!0),e.capabilities.may_be_worker&&t.indexOf("ww")>=0&&Fi&&(e.__workersPool=new wl(()=>e.__createWorkerSlot(),e.options.idle)),e.__workersPool)try{let s=yield e.__invokeWorker("get_supported_features"),l=s&&s.data;l&&(e.capabilities.worker=!0,e.resize_features.ww=!0,e.capabilities.ww_offscreen_canvas=!!l.offscreen_canvas)}catch(s){}let a=yield e.__mathlib.init();return Object.assign(e.resize_features,a.features),e})()}createCanvas(e,t,r){if(r&&this.capabilities.offscreen_canvas)return new OffscreenCanvas(e,t);if(this.capabilities.canvas){let a=document.createElement("canvas");return a.width=e,a.height=t,a}if(this.capabilities.ww_offscreen_canvas)return new OffscreenCanvas(e,t);throw new Error("Pica: cannot create canvas")}__createWorkerSlot(){if(this.options.workerURL){let e=new Worker(String(this.options.workerURL));return{value:e,destroy(){e.terminate()}}}{let e=window.URL.createObjectURL(new Blob([Fi],{type:"text/javascript"})),t=new Worker(e);return{value:t,destroy(){if(t.terminate(),typeof window!="undefined"){var r,a;(r=window.URL)===null||r===void 0||(a=r.revokeObjectURL)===null||a===void 0||a.call(r,e)}}}}}__invokeWorker(e,t,r,a){return new Promise((s,l)=>{let h=this.__workersPool.acquire();a&&a.cancelToken&&a.cancelToken.catch(u=>l(u)),h.value.onmessage=u=>{h.release(),u.data.err?l(u.data.err):s(u.data)},h.value.postMessage(Object.assign({method:e},t||{}),r||[])})}__invokeResize(e,t){var r=this;return je(function*(){if(yield Promise.resolve(),!r.resize_features.ww){if(e.kind!=="array")throw new Error("Pica: resize tile data is missing");let s={src:e.src,width:e.width,height:e.height,toWidth:e.toWidth,toHeight:e.toHeight,scaleX:e.scaleX,scaleY:e.scaleY,offsetX:e.offsetX,offsetY:e.offsetY,filter:e.filter,unsharpAmount:e.unsharpAmount,unsharpRadius:e.unsharpRadius,unsharpThreshold:e.unsharpThreshold};return{kind:"array",data:r.__mathlib.resizeAndUnsharp(s)}}let a=[];return e.kind==="array"?a.push(e.src.buffer):a.push(e.src),r.__invokeWorker("resize",{job:e,features:r.__requested_features},a,t)})()}__extractTileData(e,t,r,a){if(this.resize_features.ww&&this.capabilities.ww_offscreen_canvas){this.debug("Create tile imageBitmap");let u=this.createCanvas(e.width,e.height,{preferOffscreen:!0});if(u.getContext("2d",Et).drawImage(r.srcImageBitmap||t,e.x,e.y,e.width,e.height,0,0,e.width,e.height),!("transferToImageBitmap"in u))throw new Error("Pica: offscreen canvas is not available for worker transfer");return Object.assign({},a,{kind:"bitmap",src:u.transferToImageBitmap()})}if(_i(t))return r.srcCtx||(r.srcCtx=t.getContext("2d",Et)),this.debug("Get tile pixel data"),Object.assign({},a,{kind:"array",src:r.srcCtx.getImageData(e.x,e.y,e.width,e.height).data});this.debug("Draw tile imageBitmap/image to temporary canvas");let s=this.createCanvas(e.width,e.height,{preferOffscreen:!0}),l=s.getContext("2d",Et);l.globalCompositeOperation="copy",l.drawImage(r.srcImageBitmap||t,e.x,e.y,e.width,e.height,0,0,e.width,e.height),this.debug("Get tile pixel data");let h=l.getImageData(0,0,e.width,e.height).data;return s.width=s.height=0,Object.assign({},a,{kind:"array",src:h})}__landTileData(e,t,r){if(t.kind==="bitmap")return r.toCtx.drawImage(t.data,e.toX,e.toY),t.data.close(),null;this.debug("Draw tile");let a=r.toCtx.createImageData(e.toWidth,e.toHeight);return a.data.set(t.data),this.capabilities.safari_put_image_data_fix?r.toCtx.putImageData(a,e.toX,e.toY,e.toInnerX-e.toX,e.toInnerY-e.toY,e.toInnerWidth+1e-5,e.toInnerHeight+1e-5):r.toCtx.putImageData(a,e.toX,e.toY,e.toInnerX-e.toX,e.toInnerY-e.toY,e.toInnerWidth,e.toInnerHeight),null}__tileAndResize(e,t,r,a){var s=this;return je(function*(){let l={srcCtx:null,srcImageBitmap:null,isImageBitmapReused:!1,toCtx:null},h=A=>s.__limit(je(function*(){if(a.canceled)return a.cancelToken;let g={width:A.width,height:A.height,toWidth:A.toWidth,toHeight:A.toHeight,scaleX:A.scaleX,scaleY:A.scaleY,offsetX:A.offsetX,offsetY:A.offsetY,filter:r.filter,unsharpAmount:r.unsharpAmount,unsharpRadius:r.unsharpRadius,unsharpThreshold:r.unsharpThreshold};s.debug("Invoke resize math");let B=yield s.__extractTileData(A,e,l,g);s.debug("Invoke resize math");let x=yield s.__invokeResize(B,a);return a.canceled?a.cancelToken:s.__landTileData(A,x,l)}));if(yield Promise.resolve(),l.toCtx=t.getContext("2d",Et),!_i(e))if(Mi(e))l.srcImageBitmap=e,l.isImageBitmapReused=!0;else if(Kr(e)){if(s.capabilities.create_image_bitmap){s.debug("Decode image via createImageBitmap");try{l.srcImageBitmap=yield createImageBitmap(e)}catch(A){}}}else throw new Error('Pica: ".from" should be Image, Canvas or ImageBitmap');if(a.canceled)return a.cancelToken;s.debug("Calculate tiles");let u=Sl({width:r.width,height:r.height,srcTileSize:s.options.tile,toWidth:r.toWidth,toHeight:r.toHeight,destTileBorder:Math.ceil(Math.max(3,2.5*r.unsharpRadius|0))}).map(A=>h(A));function d(A){A.srcImageBitmap&&(A.isImageBitmapReused||A.srcImageBitmap.close(),A.srcImageBitmap=null)}s.debug("Process tiles");try{return yield Promise.all(u),s.debug("Finished!"),d(l),t}catch(A){throw d(l),A}})()}__planStagesAndResize(e,t,r,a){var s=this;return je(function*(){let l=e,h=r.width,u=r.height,d=Ml(r.width,r.height,r.toWidth,r.toHeight,s.options.tile);for(;d.length>0;){if(a.canceled)return a.cancelToken;let[A,g]=d.shift(),B=d.length===0,x;B||!Pi(r.filter)?x=r.filter:r.filter==="box"?x="box":x="hamming";let I=Jr(Jr({},r),{},{filter:x,width:h,height:u,toWidth:A,toHeight:g}),P=B?t:s.createCanvas(A,g,{preferOffscreen:!0}),k=l!==e?l:void 0;try{yield s.__tileAndResize(l,P,I,a)}finally{k&&(k.width=k.height=0)}l=P,h=A,u=g}return t})()}__resizeViaCreateImageBitmap(e,t,r,a){var s=this;return je(function*(){var l;let h=t.getContext("2d",Et);s.debug("Resize via createImageBitmap()");let u=yield createImageBitmap(e,{resizeWidth:r.toWidth,resizeHeight:r.toHeight,resizeQuality:Bl((l=_l(r.filter))!==null&&l!==void 0?l:3)});if(a.canceled)return a.cancelToken;if(!r.unsharpAmount)return h.drawImage(u,0,0),u.close(),h=null,s.debug("Finished!"),t;s.debug("Unsharp result");let d=s.createCanvas(r.toWidth,r.toHeight),A=d.getContext("2d",Et);A.drawImage(u,0,0),u.close();let g=A.getImageData(0,0,r.toWidth,r.toHeight);return s.__mathlib.unsharp_mask(g.data,r.toWidth,r.toHeight,r.unsharpAmount,r.unsharpRadius,r.unsharpThreshold),h.putImageData(g,0,0),d.width=d.height=0,g=A=d=h=null,s.debug("Finished!"),t})()}resize(e,t,r){var a=this;return je(function*(){a.debug("Start resize...");let s={};r&&Object.assign(s,r);let l=s.filter||sr.filter;if(Object.prototype.hasOwnProperty.call(s,"quality")){let d=s.quality;if(typeof d!="number"||d<0||d>3)throw new Error(`Pica: .quality should be [0..3], got ${d}`);l=Si(d)}let h={filter:l,unsharpAmount:s.unsharpAmount||sr.unsharpAmount,unsharpRadius:s.unsharpRadius||sr.unsharpRadius,unsharpThreshold:s.unsharpThreshold||sr.unsharpThreshold,width:Kr(e)?e.naturalWidth:e.width,height:Kr(e)?e.naturalHeight:e.height,toWidth:t.width,toHeight:t.height};if(h.unsharpRadius>2&&(h.unsharpRadius=2),t.width===0||t.height===0)return Promise.reject(new Error(`Invalid output size: ${t.width}x${t.height}`));let u={cancelToken:s.cancelToken,canceled:!1};if(u.cancelToken&&(u.cancelToken=u.cancelToken.then(d=>{throw u.canceled=!0,d},d=>{throw u.canceled=!0,d})),yield a.init(),u.canceled)return u.cancelToken;if(a.capabilities.bug_image_bitmap_orientation_region&&(Kr(e)||Mi(e))){let d=a.createCanvas(h.width,h.height);d.getContext("2d",Et).drawImage(e,0,0),e=d}if(a.resize_features.cib){if(Pi(h.filter))return a.__resizeViaCreateImageBitmap(e,t,h,u);a.debug("cib is enabled, but not supports provided filter, fallback to manual math")}if(!a.capabilities.canvas&&!a.capabilities.offscreen_canvas){let d=new Error("Pica: cannot use getImageData on canvas, make sure fingerprinting protection isn't enabled");throw d.code="ERR_GET_IMAGE_DATA",d}return a.__planStagesAndResize(e,t,h,u)})()}resizeBuffer(e){var t=this;return je(function*(){let r=Object.assign({},sr,e);if(Object.prototype.hasOwnProperty.call(r,"quality")){let s=r.quality;if(typeof s!="number"||s<0||s>3)throw new Error(`Pica: .quality should be [0..3], got ${s}`);r.filter=Si(s)}if(yield t.init(),!t.__mathlib)throw new Error("Pica: math library is not initialized");let a={src:r.src,width:r.width,height:r.height,toWidth:r.toWidth,toHeight:r.toHeight,dest:r.dest,scaleX:r.toWidth/r.width,scaleY:r.toHeight/r.height,offsetX:0,offsetY:0,filter:r.filter,unsharpAmount:r.unsharpAmount,unsharpRadius:r.unsharpRadius,unsharpThreshold:r.unsharpThreshold};return t.__mathlib.resizeAndUnsharp(a)})()}toBlob(e,t,r){return je(function*(){if(t=t||"image/png","toBlob"in e&&e.toBlob)return new Promise(h=>{e.toBlob(u=>h(u),t,r)});if("convertToBlob"in e&&e.convertToBlob)return e.convertToBlob({type:t,quality:r});let a=atob(e.toDataURL(t,r).split(",")[1]),s=a.length,l=new Uint8Array(s);for(let h=0;h<s;h++)l[h]=a.charCodeAt(h);return new Blob([l],{type:t})})()}debug(...e){}};function Oi(e){return new Ql(e)}var hn=_a(Ui(),1),Ki=_a(Ni(),1);var Hi=["benbenn.jpg","cezanne2.jpg","colorroses.jpg","colorswirls.jpg","coolcar.jpg","darkbrewery.jpg","dhuku.jpg","greentruck.jpg","frida.jpg","homer.jpg","keyssunset.jpg","lobsterpot.jpg","myersflat.jpg","myrtle.jpg","parrot.jpg","redrose.jpg","robert_s_duncanson.jpg","seurat.jpg","vangogh.jpg"];var nn="Press Start 2P",Ol="fonts/press-start-2p-latin-400-normal.woff2";var $i={textOverlayEnable:"texton",textOverlayInput:"text",textOverlayFont:"font",textOverlaySize:"fsize",textOverlayScaleX:"fsx",textOverlayScaleY:"fsy",textOverlayLineHeight:"flh",textOverlayX:"fx",textOverlayY:"fy",textOverlayFg:"fg",textOverlayBg:"bg",textOverlayBox:"fbox"};function Xi(e){return!isFinite(e)||e<=0?1:Math.min(e,16)}function Ul(e){return!isFinite(e)||e<=0?1.2:Math.min(Math.max(e,.5),4)}function Pe(e){return document.getElementById(e)}function Gl(e,t){let r=0;return()=>{clearTimeout(r),r=setTimeout(e,t)}}function Yi(e){let t=parseInt((e||"").replace("#",""),16);return isNaN(t)?16777215:t>>16&255|t&65280|(t&255)<<16}function Wi(e,t){if(!t||t.length==0)return e&16777215;let r=e&255,a=e>>8&255,s=e>>16&255,l=e&16777215,h=1/0;for(let u=0;u<t.length;u++){let d=t[u],A=r-(d&255),g=a-(d>>8&255),B=s-(d>>16&255),x=A*A*.3+g*g*.6+B*B*.1;x<h&&(h=x,l=d&16777215)}return l}var $e=class $e{constructor(t,r){this.onChange=t;this.onURLChange=r;this.enable=Pe("textOverlayEnable");this.section=Pe("textOverlaySection");this.input=Pe("textOverlayInput");this.font=Pe("textOverlayFont");this.size=Pe("textOverlaySize");this.scaleX=Pe("textOverlayScaleX");this.scaleY=Pe("textOverlayScaleY");this.lineHeight=Pe("textOverlayLineHeight");this.x=Pe("textOverlayX");this.y=Pe("textOverlayY");this.fg=Pe("textOverlayFg");this.bg=Pe("textOverlayBg");this.box=Pe("textOverlayBox");this.defaults={};this.fontLoads=new Map;this.loadedFont="";for(let a of this.controls())this.defaults[a.id]=$e.value(a);for(let a of this.controls())a!==this.input&&a.addEventListener("change",()=>{this.syncVisibility(),this.requestFont(),this.onChange(),this.onURLChange(!0)});this.input.addEventListener("input",Gl(()=>{this.onChange(),this.onURLChange(!0)},400)),this.loadLocalFont(),this.syncVisibility()}controls(){return[this.enable,this.input,this.font,this.size,this.scaleX,this.scaleY,this.lineHeight,this.x,this.y,this.fg,this.bg,this.box]}static value(t){return t instanceof HTMLInputElement&&t.type=="checkbox"?t.checked?"1":"0":t.value}static isFetchable(t){return!!t&&!$e.GENERIC_FONTS.has(t.toLowerCase())&&!$e.LOCAL_FONTS.has(t)}loadLocalFont(){if(typeof FontFace!="undefined")try{new FontFace(nn,"url("+Ol+")").load().then(r=>{document.fonts.add(r),this.enabled&&this.onChange()}).catch(r=>console.warn("Dithertron: could not load pixel font",r))}catch(t){console.warn("Dithertron: FontFace unavailable",t)}}requestFont(){let t=this.font.value;t!=this.loadedFont&&(this.loadedFont=t,$e.isFetchable(t)&&this.loadGoogleFont(t).then(()=>{this.enabled&&this.onChange()}))}loadGoogleFont(t){let r=this.fontLoads.get(t);if(r)return r;let a=new Promise(s=>{let l=document.createElement("link");l.rel="stylesheet",l.crossOrigin="anonymous",l.href="https://fonts.googleapis.com/css2?family="+t.trim().replace(/ /g,"+")+"&display=swap",l.onload=()=>{typeof document.fonts!="undefined"&&document.fonts.load?document.fonts.load('16px "'+t+'"').then(()=>s(),()=>s()):s()},l.onerror=()=>{console.warn("Dithertron: could not load font",t),s()},document.head.appendChild(l)});return this.fontLoads.set(t,a),a}get enabled(){return this.enable.checked}syncVisibility(){this.section.style.display=this.enable.checked?"":"none"}appendQueryParams(t){for(let r of this.controls()){let a=$e.value(r);a!=this.defaults[r.id]&&(t[$i[r.id]]=a)}}applyQueryParams(t){var a;let r=!1;for(let s of this.controls()){let l=(a=t[$i[s.id]])!=null?a:this.defaults[s.id];if(s instanceof HTMLSelectElement)s.value!=l&&Array.from(s.options).some(h=>h.value==l)&&(s.value=l,r=!0);else if(s instanceof HTMLInputElement&&s.type=="checkbox"){let h=l=="1"||l=="true";s.checked!=h&&(s.checked=h,r=!0)}else s.value!=l&&(s.value=l,r=!0)}return this.requestFont(),this.syncVisibility(),r}renderMask(t,r){let a=this.input.value;if(!this.enabled||!a||t<=0||r<=0)return null;let s=Math.max(1,Math.round(parseFloat(this.size.value)||8)),l=Xi(parseFloat(this.scaleX.value)),h=Xi(parseFloat(this.scaleY.value)),u=Ul(parseFloat(this.lineHeight.value)),d=Math.round(parseFloat(this.x.value)||0),A=Math.round(parseFloat(this.y.value)||0),g=a.replace(/\r\n?/g,`
`).split(`
`),B=s*u,x=document.createElement("canvas");x.width=t,x.height=r;let I=x.getContext("2d",{willReadFrequently:!0});if(!I)return null;let P=this.font.value||nn,k=$e.GENERIC_FONTS.has(P.toLowerCase())?P:'"'+P+'"';I.font=s+"px "+k+", monospace",I.textBaseline="top",I.fillStyle="#fff";let T=new Uint8Array(t*r);if(this.box.checked){let Q=0;for(let X of g)Q=Math.max(Q,I.measureText(X).width);let G=Math.max(0,d-1),Z=Math.max(0,A-1),te=Math.min(t,d+Math.ceil(Q*l)+1),U=Math.min(r,A+Math.ceil((B*(g.length-1)+s*1.25)*h)+1);for(let X=Z;X<U;X++)for(let Y=G;Y<te;Y++)T[X*t+Y]=1}I.save(),I.scale(l,h);for(let Q=0;Q<g.length;Q++)I.fillText(g[Q],d/l,(A+Q*B)/h);I.restore();let H=I.getImageData(0,0,t,r).data;for(let Q=0;Q<T.length;Q++)H[Q*4+3]>=128&&(T[Q]=2);return T}apply(t,r,a,s){let l=this.renderMask(r,a);if(!l)return;let h=Wi(Yi(this.fg.value),s),u=Wi(Yi(this.bg.value),s),d=new Uint8ClampedArray(t.buffer);for(let A=0;A<l.length;A++){let g=l[A];if(g==0)continue;let B=g==2?h:u,x=A*4;d[x]=B&255,d[x+1]=B>>8&255,d[x+2]=B>>16&255,d[x+3]=255}}};$e.GENERIC_FONTS=new Set(["monospace","sans-serif","serif","cursive","fantasy","system-ui"]),$e.LOCAL_FONTS=new Set([nn]);var aa=$e;var ve,Nl=document.getElementById("brightSlider"),Hl=document.getElementById("contrastSlider"),$l=document.getElementById("saturationSlider"),Xl=document.getElementById("noiseSlider"),na=document.getElementById("diffuseSlider"),ia=document.getElementById("orderedSlider"),Yl=document.getElementById("diversitySlider"),on=document.getElementById("imageUpload"),Zi=document.getElementById("srcimage"),_t=document.getElementById("resizecanvas"),hr=document.getElementById("destcanvas"),sn=class{constructor(){this.newWorker()}newWorker(){this.worker&&(this.worker.onmessage=()=>{}),this.worker=new Worker("./dist/worker.js"),this.worker.onmessage=t=>{var r=t.data;r!=null&&r.img!=null&&this.pixelsAvailable!=null&&(this.pixelsAvailable(r),this.lastPixels=r)}}setSettings(t){this.settings=t,this.worker.postMessage({cmd:"setSettings",data:t})}setSourceImage(t){this.worker.postMessage({cmd:"setSourceImage",data:t})}restart(){this.worker.postMessage({cmd:"restart"})}},V=new sn,Xe=null,ur,fr,Ji=[{name:"Floyd-Steinberg",kernel:si},{name:"False Floyd",kernel:li},{name:"Atkinson",kernel:ci},{name:"Sierra 2",kernel:hi},{name:"Sierra Lite",kernel:ui},{name:"Stucki",kernel:fi},{name:"Two-D",kernel:di},{name:"Right",kernel:mi},{name:"Down",kernel:pi},{name:"Double Down",kernel:Ai},{name:"Diagonal",kernel:gi},{name:"Diamond",kernel:bi}],Wl=[{id:"perceptual",name:"Perceptual"},{id:"hue",name:"Hue-Based"},{id:"dist",name:"Distance"},{id:"max",name:"Maximum"}],Vi=!1;function un(e){if(Vi)return;Vi=!0;let t=(e==null?void 0:e.message)||String(e);console.error("Canvas access error:",e),(t.includes("fingerprint")||t.includes("canvas")||t.includes("getImageData"))&&alert(`\u26A0\uFE0F Canvas Access Blocked

Dithertron cannot access canvas image data. This is usually caused by browser fingerprinting protection.

To fix this:
\u2022 Firefox: Disable 'Enhanced Tracking Protection' for this site (shield icon in address bar)
\u2022 Brave: Disable 'Block fingerprinting' in Shields settings
\u2022 Other browsers: Check privacy/security settings

Technical details: `+t)}function Vl(){try{let e=document.createElement("canvas");e.width=e.height=1;let t=e.getContext("2d");return t.fillStyle="rgb(255, 0, 0)",t.fillRect(0,0,1,1),t.getImageData(0,0,1,1),!0}catch(e){return un(e),!1}}function zl(e){try{return new Uint32Array(e.getContext("2d").getImageData(0,0,e.width,e.height).data.buffer)}catch(t){throw un(t),t}}function jl(e,t){var r=e.getContext("2d"),a=r.createImageData(e.width,e.height),s=new Uint32Array(a.data.buffer);s.length==t.length?(s.set(t),r.putImageData(a,0,0)):console.log("drawRGBA(): array length mismatch")}function ql(e,t,r,a,s){t*=1,r*=1;for(var l=new Uint8ClampedArray(e.buffer),h=0;h<l.length;h+=4){var u=l[h],d=l[h+1],A=l[h+2];if(a!=1){var g=.2989*u+.587*d+.114*A;u=g*(1-a)+u*a,d=g*(1-a)+d*a,A=g*(1-a)+A*a}l[h]=Math.pow(u*t,s)+r,l[h+1]=Math.pow(d*t,s)+r,l[h+2]=Math.pow(A*t,s)+r}}function ut(){var l;var e=zl(_t);let t=(parseFloat(Hl.value)-50)/100+1,r=(parseFloat(Nl.value)-t*50)*(128/50),a=(parseFloat($l.value)-50)/50+1;ql(e,t,r,a,1),Xe==null||Xe.apply(e,_t.width,_t.height,(l=V.settings)==null?void 0:l.pal),V.setSourceImage(e),Bt()}function Bt(){var e=$("#diffuseTypeSelect")[0].selectedOptions[0];e&&(V.settings.ditherfn=Ji[parseInt(e.value)].kernel);var e=$("#errorFuncSelect")[0].selectedOptions[0];e&&(V.settings.errfn=e.value),V.settings.diffuse=parseFloat(na.value)/100,V.settings.ordered=parseFloat(ia.value)/100,V.settings.noise=parseFloat(Xl.value),V.settings.paletteDiversity=parseFloat(Yl.value)/200+.75,V.setSettings(V.settings),V.restart()}function Kl(){let e=ve==null?void 0:ve.getCroppedCanvas();!(e!=null&&e.width)||!(e!=null&&e.height)||Oi().resize(e,_t,{}).then(()=>{ut()}).catch(t=>{un(t)})}function Zl(e){$("#targetFormatInfo").text(ka(e)+(e.caveat?" *":"")).attr("title",e.caveat||"")}function Jl(e){var t=$("#paletteSwatches");t.empty(),e&&e.length<64&&e.forEach((r,a)=>{var s="rgb("+(r&255)+","+(r>>8&255)+","+(r>>16&255)+")",l=$('<span style="width:2em">&nbsp;</span>').css("background-color",s);t.append(l)})}function ec(e){let t=document.getElementById("cropSize");if(!t)return;e=e||(ve==null?void 0:ve.getData());let r=Math.round(e==null?void 0:e.width)||0,a=Math.round(e==null?void 0:e.height)||0;t.textContent=r+" \xD7 "+a,t.style.display=r&&a?"block":"none"}function tc(e){let t=V.settings;return(e==null?void 0:e.naturalWidth)==t.width&&(e==null?void 0:e.naturalHeight)==t.height}function rc(){console.log("Width and height exact match!"),ve.clear(),ve.disable(),_t.getContext("2d").drawImage(Zi,0,0),ut()}function sa(e){ve&&ve.destroy();let t=V.settings,r=t.width*(t.scaleX||1)/t.height||4/3;ve=new qi.default(Zi,{viewMode:1,autoCropArea:1,initialAspectRatio:r,crop(a){ec(a.detail),tc(ve.getImageData())?rc():Kl()}}),ve.replace(e),dr()}var Gt=null;function cr(e,t){$(e).slider("setValue",parseFloat(t)),e.value=t}function ac(e){e.tiles?(Gt||(Gt={diffuse:na.value,ordered:ia.value}),cr(na,"0"),cr(ia,"50")):Gt&&(cr(na,Gt.diffuse),cr(ia,Gt.ordered),Gt=null)}function eo(e){var t=e.conv!="DitheringCanvas";ac(e),V.newWorker(),V.setSettings(e),V.restart(),Zl(e),_t.width=hr.width=e.width,_t.height=hr.height=e.height;let r=e.scaleX||1;hr.style.aspectRatio=(e.width*r/e.height).toString(),$("#noiseSection").css("display",t?"flex":"none"),$("#diversitySection").css("display",e.reduce?"flex":"none"),$("#downloadNativeBtn").css("display",e.toNative?"inline":"none"),$("#gotoIDE").css("display",ro()?"inline":"none"),ve&&sa(ve.url),dr(),bc(e)}function oa(){var e=ur||"image";try{e=e.split(".").shift()||"image"}catch(t){}return e+"-"+V.settings.id}function to(){var e=V.lastPixels;let t=V.settings.toNative;if(!t)return null;var r=$a[t];return e&&r&&r(e,V.settings)}function nc(){var e=to();if(e!=null){var t=new Blob([e],{type:"application/octet-stream"});(0,hn.saveAs)(t,oa()+".bin")}}function ic(){hr.toBlob(e=>{(0,hn.saveAs)(e,oa()+".png")},"image/png")}function oc(e){var t="";if(e!=null){for(var r=new Array,a=0;a<256;++a)r[a]=String.fromCharCode(a);for(var s=e.length,a=0;a<s;a++)t+=r[e[a]]}return t}function ro(){var e="getFileViewerCode_"+V.settings.id.replace(/[^a-z0-9]/g,"_"),t=ja[e];return t}var sc=8190,zi="https://8bitworkshop.com",ao="http://localhost:8000",_h=ao+"/dithertron/";function lc(e){return e.split(".")[0]}function cc(){if(window.location.hostname=="localhost"&&window.location.port=="8189")return ao;var e=$(document.forms.ideForm).attr("action");try{return new URL(e||zi,window.location.href).origin}catch(t){return zi}}function hc(e){return e==null?new Uint8Array(0):e instanceof Uint8Array?e:Uint8Array.from(e)}async function uc(e,t){let r=Ki.default.createInstance({name:"__"+e,version:2});var a=[];for(let s of t)await r.getItem(s.name)!=null&&a.push(s.name);if(a.length>0&&!confirm(`The following project files already exist in 8bitworkshop and will be replaced:

`+a.join(`
`)+`

Continue?`))return!1;for(let s of t)await r.setItem(s.name,s.data);return!0}function fc(e){let t=new URLSearchParams;for(let r of e)t.append(r.name,r.value);return t.toString()}async function dc(){function e(I,P,k){$('<input type="hidden"/>').attr("name",P).val(k).appendTo(I)}if(!confirm("Open code sample with image in 8bitworkshop?"))return;var t=V.settings.id.split(".")[0],r=document.forms.ideForm,a=$(r);a.empty(),t=="atari8"&&(t="atari8-800"),t=="cpc"&&(t="cpc.6128"),t=="sms"&&(t="sms-sms-libcv"),t=="sms-gg"&&(t="sms-gg-libcv");var s=t=="gb"?".sgb":".asm",l="viewer-"+oa()+s,h=oa()+".bin",u=ro()();u=u.split("$DATAFILE").join(h);var d=to(),A=[{name:"platform",value:t},{name:"file0_name",value:l},{name:"file0_data",value:u},{name:"file0_type",value:"utf8"},{name:"file1_name",value:h},{name:"file1_data",value:btoa(oc(d))},{name:"file1_type",value:"binary"}],g=(a.attr("action")||"")+"?"+fc(A);let B=window.location.hostname=="localhost";if(B&&(r.action="http://localhost:8000/"),g.length>sc&&!B){var x=cc();if(window.location.origin!=x){if(!confirm("Warning: this image is too large to pass through the URL, so Dithertron would need to save the project files directly into 8bitworkshop's local storage. This only works when Dithertron is served from the same origin as the IDE ("+x+"), but this page is on "+window.location.origin+`.

Try the URL anyway?`))return}else try{if(!await uc(lc(t),[{name:l,data:u},{name:h,data:hc(d)}]))return;e(a,"platform",t),e(a,"file",l),a.submit();return}catch(I){console.log(I),console.warn("Could not save project files to 8bitworkshop local storage, falling back to URL.",I),a.empty()}}for(let I of A)e(a,I.name,I.value);a.submit()}function fn(e){$("#sourceName").text(e||"(none)")}function ln(e){e.type.startsWith("image/")&&(ur=e.name||"pasted.png",fr="",on.value="",fn(ur),sa(URL.createObjectURL(e)))}function mc(){let e=document.getElementById("dropOverlay"),t=0;["dragover","drop"].forEach(r=>{window.addEventListener(r,a=>{a.preventDefault()})}),window.addEventListener("dragenter",r=>{r.preventDefault(),t++,e.classList.add("dragover")}),window.addEventListener("dragleave",r=>{r.preventDefault(),--t<=0&&(t=0,e.classList.remove("dragover"))}),window.addEventListener("drop",r=>{var s,l;r.preventDefault(),t=0,e.classList.remove("dragover");let a=(l=(s=r.dataTransfer)==null?void 0:s.files)==null?void 0:l[0];a&&ln(a)}),window.addEventListener("paste",r=>{var s;let a=(s=r.clipboardData)==null?void 0:s.items;if(a){for(let l of Array.from(a))if(l.type.startsWith("image/")){let h=l.getAsFile();if(h){ln(h),r.preventDefault();break}}}})}var la=[{key:"diffuse",id:"diffuseSlider",tileDefault:"0"},{key:"ordered",id:"orderedSlider",tileDefault:"50"},{key:"noise",id:"noiseSlider"},{key:"diversity",id:"diversitySlider"},{key:"bright",id:"brightSlider"},{key:"contrast",id:"contrastSlider"},{key:"saturation",id:"saturationSlider"},{key:"dither",id:"diffuseTypeSelect"},{key:"errfn",id:"errorFuncSelect"}],no={};function pc(){var e,t,r;for(let a of la){let s=document.getElementById(a.id);no[a.key]=s instanceof HTMLSelectElement?(t=(e=s.options[0])==null?void 0:e.value)!=null?t:"":(r=s.getAttribute("data-slider-value"))!=null?r:s.value}}function io(e,t){return t.tiles&&e.tileDefault||no[e.key]}function Ac(e,t){var a;let r=!1;for(let s of la){let l=document.getElementById(s.id),h=(a=e[s.key])!=null?a:io(s,t);l instanceof HTMLSelectElement?l.value!=h&&Array.from(l.options).some(u=>u.value==h)&&(l.value=h,r=!0):parseFloat(l.value)!=parseFloat(h)&&(cr(l,h),r=!0)}return r}var cn=!1;function dr(e=!1){if(cn)return;let t={sys:V.settings.id,image:fr};for(let a of la){let s=document.getElementById(a.id),l=io(a,V.settings);(s instanceof HTMLSelectElement?s.value!=l:parseFloat(s.value)!=parseFloat(l))&&(t[a.key]=s.value)}Xe==null||Xe.appendQueryParams(t);let r="#"+$.param(t);r!=window.location.hash&&(e?history.replaceState(null,"",r):window.location.hash=r)}function ji(e=!1){let t=gc(window.location.hash.substring(1)),r=Yr[t.sys||Ft[0].id]||Ft[0],a=e?t.image||"seurat.jpg":t.image,s=!!a&&a!=fr;cn=!0;try{s&&(ur=fr=a,fn(a)),(e||r.id!=V.settings.id)&&eo(r);let h=Ac(t,r);Xe!=null&&Xe.applyQueryParams(t)&&(h=!0),s?sa("images/"+a):h&&ut()}finally{cn=!1}e&&dr(!0)}function gc(e){e.startsWith("?")&&(e=e.substr(1));var t=e.split("&");if(!t||t.length==0)return{};for(var r={},a=0;a<t.length;++a){var s=t[a].split("=",2);s.length==1?r[s[0]]="":r[s[0]]=decodeURIComponent(s[1].replace(/\+/g," "))}return r}function bc(e){let t=$("#targetFormatSelect");t.empty();let[r,a]=e.name.split(" ("),s=new Set,l=null;Ft.forEach(h=>{if(h==null)t.append($("<option disabled></option>"));else{let[u,d]=h.name.split(" ("),A=$("<option />").text(h.name).val(h.id);if(u==r)l||(l=$("<optgroup />").attr("label",r),t.append(l)),l.append(A);else if(!s.has(u)){let g=$("<option />").text(u).val(h.id);t.append(g)}s.add(u)}}),t.val(e.id)}function xc(){if(window.addEventListener("load",function(){Vl(),document.querySelector('input[type="file"]').addEventListener("change",function(t){var r=t.target,a=r.files&&r.files[0];a&&ln(a)}),mc(),Hi.forEach(t=>{$('<a class="dropdown-item" href="#"></a>').text(t).appendTo("#examplesMenu")}),$("#examplesMenu").click(t=>{t.preventDefault();var r=$(t.target).text();ur=fr=r,fn(r),sa("images/"+r),on.value=""}),Ji.forEach((t,r)=>{var a=$("<option />").text(t.name).val(r);$("#diffuseTypeSelect").append(a)}),Wl.forEach((t,r)=>{var a=$("<option />").text(t.name).val(t.id);$("#errorFuncSelect").append(a)}),V.pixelsAvailable=t=>{jl(hr,t.img),Jl(t.pal)},Xe=new aa(ut,dr),pc(),ji(!0),window.addEventListener("hashchange",()=>ji()),$("#diffuseSlider").on("change",Bt),$("#orderedSlider").on("change",Bt),$("#noiseSlider").on("change",Bt),$("#diversitySlider").on("change",ut),$("#brightSlider").on("change",ut),$("#contrastSlider").on("change",ut),$("#saturationSlider").on("change",ut),$("#resetButton").on("click",Bt),$("#diffuseTypeSelect").on("change",Bt),$("#targetFormatSelect").change(t=>{var r=t.target.selectedOptions[0];r&&eo(Yr[r.value])}),$("#errorFuncSelect").on("change",Bt);for(let t of la)$("#"+t.id).on("change",()=>dr(!0));$("#openImageBtn").click(()=>on.click()),$("#downloadImageBtn").click(ic),$("#downloadNativeBtn").click(nc),$("#gotoIDE").click(dc)}),window.location.search=="?printmeta"){let t=function(){var r="";Ft.forEach(a=>{a&&(r+="* "+a.name+" - "+ka(a)+`
`)}),console.log(r)};var e=t;t()}}xc();export{V as dithertron,xc as startUI};
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
