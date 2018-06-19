   /*! Hammer.JS - v2.0.8 - 2016-04-23
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
!function(a,b,c,d){"use strict";function e(a,b,c){return setTimeout(j(a,c),b)}function f(a,b,c){return Array.isArray(a)?(g(a,c[b],c),!0):!1}function g(a,b,c){var e;if(a)if(a.forEach)a.forEach(b,c);else if(a.length!==d)for(e=0;e<a.length;)b.call(c,a[e],e,a),e++;else for(e in a)a.hasOwnProperty(e)&&b.call(c,a[e],e,a)}function h(b,c,d){var e="DEPRECATED METHOD: "+c+"\n"+d+" AT \n";return function(){var c=new Error("get-stack-trace"),d=c&&c.stack?c.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",f=a.console&&(a.console.warn||a.console.log);return f&&f.call(a.console,e,d),b.apply(this,arguments)}}function i(a,b,c){var d,e=b.prototype;d=a.prototype=Object.create(e),d.constructor=a,d._super=e,c&&la(d,c)}function j(a,b){return function(){return a.apply(b,arguments)}}function k(a,b){return typeof a==oa?a.apply(b?b[0]||d:d,b):a}function l(a,b){return a===d?b:a}function m(a,b,c){g(q(b),function(b){a.addEventListener(b,c,!1)})}function n(a,b,c){g(q(b),function(b){a.removeEventListener(b,c,!1)})}function o(a,b){for(;a;){if(a==b)return!0;a=a.parentNode}return!1}function p(a,b){return a.indexOf(b)>-1}function q(a){return a.trim().split(/\s+/g)}function r(a,b,c){if(a.indexOf&&!c)return a.indexOf(b);for(var d=0;d<a.length;){if(c&&a[d][c]==b||!c&&a[d]===b)return d;d++}return-1}function s(a){return Array.prototype.slice.call(a,0)}function t(a,b,c){for(var d=[],e=[],f=0;f<a.length;){var g=b?a[f][b]:a[f];r(e,g)<0&&d.push(a[f]),e[f]=g,f++}return c&&(d=b?d.sort(function(a,c){return a[b]>c[b]}):d.sort()),d}function u(a,b){for(var c,e,f=b[0].toUpperCase()+b.slice(1),g=0;g<ma.length;){if(c=ma[g],e=c?c+f:b,e in a)return e;g++}return d}function v(){return ua++}function w(b){var c=b.ownerDocument||b;return c.defaultView||c.parentWindow||a}function x(a,b){var c=this;this.manager=a,this.callback=b,this.element=a.element,this.target=a.options.inputTarget,this.domHandler=function(b){k(a.options.enable,[a])&&c.handler(b)},this.init()}function y(a){var b,c=a.options.inputClass;return new(b=c?c:xa?M:ya?P:wa?R:L)(a,z)}function z(a,b,c){var d=c.pointers.length,e=c.changedPointers.length,f=b&Ea&&d-e===0,g=b&(Ga|Ha)&&d-e===0;c.isFirst=!!f,c.isFinal=!!g,f&&(a.session={}),c.eventType=b,A(a,c),a.emit("hammer.input",c),a.recognize(c),a.session.prevInput=c}function A(a,b){var c=a.session,d=b.pointers,e=d.length;c.firstInput||(c.firstInput=D(b)),e>1&&!c.firstMultiple?c.firstMultiple=D(b):1===e&&(c.firstMultiple=!1);var f=c.firstInput,g=c.firstMultiple,h=g?g.center:f.center,i=b.center=E(d);b.timeStamp=ra(),b.deltaTime=b.timeStamp-f.timeStamp,b.angle=I(h,i),b.distance=H(h,i),B(c,b),b.offsetDirection=G(b.deltaX,b.deltaY);var j=F(b.deltaTime,b.deltaX,b.deltaY);b.overallVelocityX=j.x,b.overallVelocityY=j.y,b.overallVelocity=qa(j.x)>qa(j.y)?j.x:j.y,b.scale=g?K(g.pointers,d):1,b.rotation=g?J(g.pointers,d):0,b.maxPointers=c.prevInput?b.pointers.length>c.prevInput.maxPointers?b.pointers.length:c.prevInput.maxPointers:b.pointers.length,C(c,b);var k=a.element;o(b.srcEvent.target,k)&&(k=b.srcEvent.target),b.target=k}function B(a,b){var c=b.center,d=a.offsetDelta||{},e=a.prevDelta||{},f=a.prevInput||{};b.eventType!==Ea&&f.eventType!==Ga||(e=a.prevDelta={x:f.deltaX||0,y:f.deltaY||0},d=a.offsetDelta={x:c.x,y:c.y}),b.deltaX=e.x+(c.x-d.x),b.deltaY=e.y+(c.y-d.y)}function C(a,b){var c,e,f,g,h=a.lastInterval||b,i=b.timeStamp-h.timeStamp;if(b.eventType!=Ha&&(i>Da||h.velocity===d)){var j=b.deltaX-h.deltaX,k=b.deltaY-h.deltaY,l=F(i,j,k);e=l.x,f=l.y,c=qa(l.x)>qa(l.y)?l.x:l.y,g=G(j,k),a.lastInterval=b}else c=h.velocity,e=h.velocityX,f=h.velocityY,g=h.direction;b.velocity=c,b.velocityX=e,b.velocityY=f,b.direction=g}function D(a){for(var b=[],c=0;c<a.pointers.length;)b[c]={clientX:pa(a.pointers[c].clientX),clientY:pa(a.pointers[c].clientY)},c++;return{timeStamp:ra(),pointers:b,center:E(b),deltaX:a.deltaX,deltaY:a.deltaY}}function E(a){var b=a.length;if(1===b)return{x:pa(a[0].clientX),y:pa(a[0].clientY)};for(var c=0,d=0,e=0;b>e;)c+=a[e].clientX,d+=a[e].clientY,e++;return{x:pa(c/b),y:pa(d/b)}}function F(a,b,c){return{x:b/a||0,y:c/a||0}}function G(a,b){return a===b?Ia:qa(a)>=qa(b)?0>a?Ja:Ka:0>b?La:Ma}function H(a,b,c){c||(c=Qa);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return Math.sqrt(d*d+e*e)}function I(a,b,c){c||(c=Qa);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return 180*Math.atan2(e,d)/Math.PI}function J(a,b){return I(b[1],b[0],Ra)+I(a[1],a[0],Ra)}function K(a,b){return H(b[0],b[1],Ra)/H(a[0],a[1],Ra)}function L(){this.evEl=Ta,this.evWin=Ua,this.pressed=!1,x.apply(this,arguments)}function M(){this.evEl=Xa,this.evWin=Ya,x.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function N(){this.evTarget=$a,this.evWin=_a,this.started=!1,x.apply(this,arguments)}function O(a,b){var c=s(a.touches),d=s(a.changedTouches);return b&(Ga|Ha)&&(c=t(c.concat(d),"identifier",!0)),[c,d]}function P(){this.evTarget=bb,this.targetIds={},x.apply(this,arguments)}function Q(a,b){var c=s(a.touches),d=this.targetIds;if(b&(Ea|Fa)&&1===c.length)return d[c[0].identifier]=!0,[c,c];var e,f,g=s(a.changedTouches),h=[],i=this.target;if(f=c.filter(function(a){return o(a.target,i)}),b===Ea)for(e=0;e<f.length;)d[f[e].identifier]=!0,e++;for(e=0;e<g.length;)d[g[e].identifier]&&h.push(g[e]),b&(Ga|Ha)&&delete d[g[e].identifier],e++;return h.length?[t(f.concat(h),"identifier",!0),h]:void 0}function R(){x.apply(this,arguments);var a=j(this.handler,this);this.touch=new P(this.manager,a),this.mouse=new L(this.manager,a),this.primaryTouch=null,this.lastTouches=[]}function S(a,b){a&Ea?(this.primaryTouch=b.changedPointers[0].identifier,T.call(this,b)):a&(Ga|Ha)&&T.call(this,b)}function T(a){var b=a.changedPointers[0];if(b.identifier===this.primaryTouch){var c={x:b.clientX,y:b.clientY};this.lastTouches.push(c);var d=this.lastTouches,e=function(){var a=d.indexOf(c);a>-1&&d.splice(a,1)};setTimeout(e,cb)}}function U(a){for(var b=a.srcEvent.clientX,c=a.srcEvent.clientY,d=0;d<this.lastTouches.length;d++){var e=this.lastTouches[d],f=Math.abs(b-e.x),g=Math.abs(c-e.y);if(db>=f&&db>=g)return!0}return!1}function V(a,b){this.manager=a,this.set(b)}function W(a){if(p(a,jb))return jb;var b=p(a,kb),c=p(a,lb);return b&&c?jb:b||c?b?kb:lb:p(a,ib)?ib:hb}function X(){if(!fb)return!1;var b={},c=a.CSS&&a.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(d){b[d]=c?a.CSS.supports("touch-action",d):!0}),b}function Y(a){this.options=la({},this.defaults,a||{}),this.id=v(),this.manager=null,this.options.enable=l(this.options.enable,!0),this.state=nb,this.simultaneous={},this.requireFail=[]}function Z(a){return a&sb?"cancel":a&qb?"end":a&pb?"move":a&ob?"start":""}function $(a){return a==Ma?"down":a==La?"up":a==Ja?"left":a==Ka?"right":""}function _(a,b){var c=b.manager;return c?c.get(a):a}function aa(){Y.apply(this,arguments)}function ba(){aa.apply(this,arguments),this.pX=null,this.pY=null}function ca(){aa.apply(this,arguments)}function da(){Y.apply(this,arguments),this._timer=null,this._input=null}function ea(){aa.apply(this,arguments)}function fa(){aa.apply(this,arguments)}function ga(){Y.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function ha(a,b){return b=b||{},b.recognizers=l(b.recognizers,ha.defaults.preset),new ia(a,b)}function ia(a,b){this.options=la({},ha.defaults,b||{}),this.options.inputTarget=this.options.inputTarget||a,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=a,this.input=y(this),this.touchAction=new V(this,this.options.touchAction),ja(this,!0),g(this.options.recognizers,function(a){var b=this.add(new a[0](a[1]));a[2]&&b.recognizeWith(a[2]),a[3]&&b.requireFailure(a[3])},this)}function ja(a,b){var c=a.element;if(c.style){var d;g(a.options.cssProps,function(e,f){d=u(c.style,f),b?(a.oldCssProps[d]=c.style[d],c.style[d]=e):c.style[d]=a.oldCssProps[d]||""}),b||(a.oldCssProps={})}}function ka(a,c){var d=b.createEvent("Event");d.initEvent(a,!0,!0),d.gesture=c,c.target.dispatchEvent(d)}var la,ma=["","webkit","Moz","MS","ms","o"],na=b.createElement("div"),oa="function",pa=Math.round,qa=Math.abs,ra=Date.now;la="function"!=typeof Object.assign?function(a){if(a===d||null===a)throw new TypeError("Cannot convert undefined or null to object");for(var b=Object(a),c=1;c<arguments.length;c++){var e=arguments[c];if(e!==d&&null!==e)for(var f in e)e.hasOwnProperty(f)&&(b[f]=e[f])}return b}:Object.assign;var sa=h(function(a,b,c){for(var e=Object.keys(b),f=0;f<e.length;)(!c||c&&a[e[f]]===d)&&(a[e[f]]=b[e[f]]),f++;return a},"extend","Use `assign`."),ta=h(function(a,b){return sa(a,b,!0)},"merge","Use `assign`."),ua=1,va=/mobile|tablet|ip(ad|hone|od)|android/i,wa="ontouchstart"in a,xa=u(a,"PointerEvent")!==d,ya=wa&&va.test(navigator.userAgent),za="touch",Aa="pen",Ba="mouse",Ca="kinect",Da=25,Ea=1,Fa=2,Ga=4,Ha=8,Ia=1,Ja=2,Ka=4,La=8,Ma=16,Na=Ja|Ka,Oa=La|Ma,Pa=Na|Oa,Qa=["x","y"],Ra=["clientX","clientY"];x.prototype={handler:function(){},init:function(){this.evEl&&m(this.element,this.evEl,this.domHandler),this.evTarget&&m(this.target,this.evTarget,this.domHandler),this.evWin&&m(w(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&n(this.element,this.evEl,this.domHandler),this.evTarget&&n(this.target,this.evTarget,this.domHandler),this.evWin&&n(w(this.element),this.evWin,this.domHandler)}};var Sa={mousedown:Ea,mousemove:Fa,mouseup:Ga},Ta="mousedown",Ua="mousemove mouseup";i(L,x,{handler:function(a){var b=Sa[a.type];b&Ea&&0===a.button&&(this.pressed=!0),b&Fa&&1!==a.which&&(b=Ga),this.pressed&&(b&Ga&&(this.pressed=!1),this.callback(this.manager,b,{pointers:[a],changedPointers:[a],pointerType:Ba,srcEvent:a}))}});var Va={pointerdown:Ea,pointermove:Fa,pointerup:Ga,pointercancel:Ha,pointerout:Ha},Wa={2:za,3:Aa,4:Ba,5:Ca},Xa="pointerdown",Ya="pointermove pointerup pointercancel";a.MSPointerEvent&&!a.PointerEvent&&(Xa="MSPointerDown",Ya="MSPointerMove MSPointerUp MSPointerCancel"),i(M,x,{handler:function(a){var b=this.store,c=!1,d=a.type.toLowerCase().replace("ms",""),e=Va[d],f=Wa[a.pointerType]||a.pointerType,g=f==za,h=r(b,a.pointerId,"pointerId");e&Ea&&(0===a.button||g)?0>h&&(b.push(a),h=b.length-1):e&(Ga|Ha)&&(c=!0),0>h||(b[h]=a,this.callback(this.manager,e,{pointers:b,changedPointers:[a],pointerType:f,srcEvent:a}),c&&b.splice(h,1))}});var Za={touchstart:Ea,touchmove:Fa,touchend:Ga,touchcancel:Ha},$a="touchstart",_a="touchstart touchmove touchend touchcancel";i(N,x,{handler:function(a){var b=Za[a.type];if(b===Ea&&(this.started=!0),this.started){var c=O.call(this,a,b);b&(Ga|Ha)&&c[0].length-c[1].length===0&&(this.started=!1),this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:za,srcEvent:a})}}});var ab={touchstart:Ea,touchmove:Fa,touchend:Ga,touchcancel:Ha},bb="touchstart touchmove touchend touchcancel";i(P,x,{handler:function(a){var b=ab[a.type],c=Q.call(this,a,b);c&&this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:za,srcEvent:a})}});var cb=2500,db=25;i(R,x,{handler:function(a,b,c){var d=c.pointerType==za,e=c.pointerType==Ba;if(!(e&&c.sourceCapabilities&&c.sourceCapabilities.firesTouchEvents)){if(d)S.call(this,b,c);else if(e&&U.call(this,c))return;this.callback(a,b,c)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var eb=u(na.style,"touchAction"),fb=eb!==d,gb="compute",hb="auto",ib="manipulation",jb="none",kb="pan-x",lb="pan-y",mb=X();V.prototype={set:function(a){a==gb&&(a=this.compute()),fb&&this.manager.element.style&&mb[a]&&(this.manager.element.style[eb]=a),this.actions=a.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var a=[];return g(this.manager.recognizers,function(b){k(b.options.enable,[b])&&(a=a.concat(b.getTouchAction()))}),W(a.join(" "))},preventDefaults:function(a){var b=a.srcEvent,c=a.offsetDirection;if(this.manager.session.prevented)return void b.preventDefault();var d=this.actions,e=p(d,jb)&&!mb[jb],f=p(d,lb)&&!mb[lb],g=p(d,kb)&&!mb[kb];if(e){var h=1===a.pointers.length,i=a.distance<2,j=a.deltaTime<250;if(h&&i&&j)return}return g&&f?void 0:e||f&&c&Na||g&&c&Oa?this.preventSrc(b):void 0},preventSrc:function(a){this.manager.session.prevented=!0,a.preventDefault()}};var nb=1,ob=2,pb=4,qb=8,rb=qb,sb=16,tb=32;Y.prototype={defaults:{},set:function(a){return la(this.options,a),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(a){if(f(a,"recognizeWith",this))return this;var b=this.simultaneous;return a=_(a,this),b[a.id]||(b[a.id]=a,a.recognizeWith(this)),this},dropRecognizeWith:function(a){return f(a,"dropRecognizeWith",this)?this:(a=_(a,this),delete this.simultaneous[a.id],this)},requireFailure:function(a){if(f(a,"requireFailure",this))return this;var b=this.requireFail;return a=_(a,this),-1===r(b,a)&&(b.push(a),a.requireFailure(this)),this},dropRequireFailure:function(a){if(f(a,"dropRequireFailure",this))return this;a=_(a,this);var b=r(this.requireFail,a);return b>-1&&this.requireFail.splice(b,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(a){return!!this.simultaneous[a.id]},emit:function(a){function b(b){c.manager.emit(b,a)}var c=this,d=this.state;qb>d&&b(c.options.event+Z(d)),b(c.options.event),a.additionalEvent&&b(a.additionalEvent),d>=qb&&b(c.options.event+Z(d))},tryEmit:function(a){return this.canEmit()?this.emit(a):void(this.state=tb)},canEmit:function(){for(var a=0;a<this.requireFail.length;){if(!(this.requireFail[a].state&(tb|nb)))return!1;a++}return!0},recognize:function(a){var b=la({},a);return k(this.options.enable,[this,b])?(this.state&(rb|sb|tb)&&(this.state=nb),this.state=this.process(b),void(this.state&(ob|pb|qb|sb)&&this.tryEmit(b))):(this.reset(),void(this.state=tb))},process:function(a){},getTouchAction:function(){},reset:function(){}},i(aa,Y,{defaults:{pointers:1},attrTest:function(a){var b=this.options.pointers;return 0===b||a.pointers.length===b},process:function(a){var b=this.state,c=a.eventType,d=b&(ob|pb),e=this.attrTest(a);return d&&(c&Ha||!e)?b|sb:d||e?c&Ga?b|qb:b&ob?b|pb:ob:tb}}),i(ba,aa,{defaults:{event:"pan",threshold:10,pointers:1,direction:Pa},getTouchAction:function(){var a=this.options.direction,b=[];return a&Na&&b.push(lb),a&Oa&&b.push(kb),b},directionTest:function(a){var b=this.options,c=!0,d=a.distance,e=a.direction,f=a.deltaX,g=a.deltaY;return e&b.direction||(b.direction&Na?(e=0===f?Ia:0>f?Ja:Ka,c=f!=this.pX,d=Math.abs(a.deltaX)):(e=0===g?Ia:0>g?La:Ma,c=g!=this.pY,d=Math.abs(a.deltaY))),a.direction=e,c&&d>b.threshold&&e&b.direction},attrTest:function(a){return aa.prototype.attrTest.call(this,a)&&(this.state&ob||!(this.state&ob)&&this.directionTest(a))},emit:function(a){this.pX=a.deltaX,this.pY=a.deltaY;var b=$(a.direction);b&&(a.additionalEvent=this.options.event+b),this._super.emit.call(this,a)}}),i(ca,aa,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[jb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.scale-1)>this.options.threshold||this.state&ob)},emit:function(a){if(1!==a.scale){var b=a.scale<1?"in":"out";a.additionalEvent=this.options.event+b}this._super.emit.call(this,a)}}),i(da,Y,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[hb]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime>b.time;if(this._input=a,!d||!c||a.eventType&(Ga|Ha)&&!f)this.reset();else if(a.eventType&Ea)this.reset(),this._timer=e(function(){this.state=rb,this.tryEmit()},b.time,this);else if(a.eventType&Ga)return rb;return tb},reset:function(){clearTimeout(this._timer)},emit:function(a){this.state===rb&&(a&&a.eventType&Ga?this.manager.emit(this.options.event+"up",a):(this._input.timeStamp=ra(),this.manager.emit(this.options.event,this._input)))}}),i(ea,aa,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[jb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.rotation)>this.options.threshold||this.state&ob)}}),i(fa,aa,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:Na|Oa,pointers:1},getTouchAction:function(){return ba.prototype.getTouchAction.call(this)},attrTest:function(a){var b,c=this.options.direction;return c&(Na|Oa)?b=a.overallVelocity:c&Na?b=a.overallVelocityX:c&Oa&&(b=a.overallVelocityY),this._super.attrTest.call(this,a)&&c&a.offsetDirection&&a.distance>this.options.threshold&&a.maxPointers==this.options.pointers&&qa(b)>this.options.velocity&&a.eventType&Ga},emit:function(a){var b=$(a.offsetDirection);b&&this.manager.emit(this.options.event+b,a),this.manager.emit(this.options.event,a)}}),i(ga,Y,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[ib]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime<b.time;if(this.reset(),a.eventType&Ea&&0===this.count)return this.failTimeout();if(d&&f&&c){if(a.eventType!=Ga)return this.failTimeout();var g=this.pTime?a.timeStamp-this.pTime<b.interval:!0,h=!this.pCenter||H(this.pCenter,a.center)<b.posThreshold;this.pTime=a.timeStamp,this.pCenter=a.center,h&&g?this.count+=1:this.count=1,this._input=a;var i=this.count%b.taps;if(0===i)return this.hasRequireFailures()?(this._timer=e(function(){this.state=rb,this.tryEmit()},b.interval,this),ob):rb}return tb},failTimeout:function(){return this._timer=e(function(){this.state=tb},this.options.interval,this),tb},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==rb&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),ha.VERSION="2.0.8",ha.defaults={domEvents:!1,touchAction:gb,enable:!0,inputTarget:null,inputClass:null,preset:[[ea,{enable:!1}],[ca,{enable:!1},["rotate"]],[fa,{direction:Na}],[ba,{direction:Na},["swipe"]],[ga],[ga,{event:"doubletap",taps:2},["tap"]],[da]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var ub=1,vb=2;ia.prototype={set:function(a){return la(this.options,a),a.touchAction&&this.touchAction.update(),a.inputTarget&&(this.input.destroy(),this.input.target=a.inputTarget,this.input.init()),this},stop:function(a){this.session.stopped=a?vb:ub},recognize:function(a){var b=this.session;if(!b.stopped){this.touchAction.preventDefaults(a);var c,d=this.recognizers,e=b.curRecognizer;(!e||e&&e.state&rb)&&(e=b.curRecognizer=null);for(var f=0;f<d.length;)c=d[f],b.stopped===vb||e&&c!=e&&!c.canRecognizeWith(e)?c.reset():c.recognize(a),!e&&c.state&(ob|pb|qb)&&(e=b.curRecognizer=c),f++}},get:function(a){if(a instanceof Y)return a;for(var b=this.recognizers,c=0;c<b.length;c++)if(b[c].options.event==a)return b[c];return null},add:function(a){if(f(a,"add",this))return this;var b=this.get(a.options.event);return b&&this.remove(b),this.recognizers.push(a),a.manager=this,this.touchAction.update(),a},remove:function(a){if(f(a,"remove",this))return this;if(a=this.get(a)){var b=this.recognizers,c=r(b,a);-1!==c&&(b.splice(c,1),this.touchAction.update())}return this},on:function(a,b){if(a!==d&&b!==d){var c=this.handlers;return g(q(a),function(a){c[a]=c[a]||[],c[a].push(b)}),this}},off:function(a,b){if(a!==d){var c=this.handlers;return g(q(a),function(a){b?c[a]&&c[a].splice(r(c[a],b),1):delete c[a]}),this}},emit:function(a,b){this.options.domEvents&&ka(a,b);var c=this.handlers[a]&&this.handlers[a].slice();if(c&&c.length){b.type=a,b.preventDefault=function(){b.srcEvent.preventDefault()};for(var d=0;d<c.length;)c[d](b),d++}},destroy:function(){this.element&&ja(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},la(ha,{INPUT_START:Ea,INPUT_MOVE:Fa,INPUT_END:Ga,INPUT_CANCEL:Ha,STATE_POSSIBLE:nb,STATE_BEGAN:ob,STATE_CHANGED:pb,STATE_ENDED:qb,STATE_RECOGNIZED:rb,STATE_CANCELLED:sb,STATE_FAILED:tb,DIRECTION_NONE:Ia,DIRECTION_LEFT:Ja,DIRECTION_RIGHT:Ka,DIRECTION_UP:La,DIRECTION_DOWN:Ma,DIRECTION_HORIZONTAL:Na,DIRECTION_VERTICAL:Oa,DIRECTION_ALL:Pa,Manager:ia,Input:x,TouchAction:V,TouchInput:P,MouseInput:L,PointerEventInput:M,TouchMouseInput:R,SingleTouchInput:N,Recognizer:Y,AttrRecognizer:aa,Tap:ga,Pan:ba,Swipe:fa,Pinch:ca,Rotate:ea,Press:da,on:m,off:n,each:g,merge:ta,extend:sa,assign:la,inherit:i,bindFn:j,prefixed:u});var wb="undefined"!=typeof a?a:"undefined"!=typeof self?self:{};wb.Hammer=ha,"function"==typeof define&&define.amd?define(function(){return ha}):"undefined"!=typeof module&&module.exports?module.exports=ha:a[c]=ha}(window,document,"Hammer");
//# sourceMappingURL=hammer.min.js.map

/*
 HELPERS
 */
Number.prototype.lpad = function ( padString, length ) {
	var str = this.toString ();
	while ( str.length < length )
		str = padString + str;
	return str;
};

Array.prototype.move = function(from, to) {
    this.splice(to, 0, this.splice(from, 1)[0]);
};

function isArray ( myArray ) {
    return myArray.constructor.toString().indexOf("Array") > -1;
}

var simulatedWinner = '';
var shareBucket = "https://www.fifa.com/worldcup/teams/";
var teams, scrollPositions, instructions, groupLabels, rounds = [ [], [], [], [] ];
var imgBucket = "assets/wcflags/";
var winnersBucket = "https://www.fifa.com/worldcup/teams/";

scrollPositions = [ 0, 0, 0, 0, 0];
groupLabels = [ "A", "B", "C", "D", "E", "F", "G", "H" ];
instructions = [
    [
        [ 'Group A 1st place', 'Group B 2nd place' ],
        [ 'Group B 1st place', 'Group A 2nd place' ],
        [ 'Group C 1st place', 'Group D 2nd place' ],
        [ 'Group D 1st place', 'Group C 2nd place' ],
        [ 'Group E 1st place', 'Group F 2nd place' ],
        [ 'Group F 1st place', 'Group E 2nd place' ],
        [ 'Group G 1st place', 'Group H 2nd place' ],
        [ 'Group H 1st place', 'Group G 2nd place' ]
    ],
    [
        [ 'RO16 Match one', 'RO16 Match two' ],
        [ 'RO16 Match three', 'RO16 Match four' ],
        [ 'RO16 Match five', 'RO16 Match six' ],
        [ 'RO16 Match seven', 'RO16 Match eight' ]
    ],
    [
        [ 'QF Match one', 'QF Match two' ],
        [ 'QF Match three', 'QF Match four' ]
    ],
    [
        [ 'SF Match one', 'SF Match two' ]
    ]
];



$ ( document ).ready ( function () {

    function init () {

            $.get ( "https://api.myjson.com/bins/1fm0i6", function ( data ) {

                var groupsArray = data.Teams.slice ();

                groupsArray.sort ( function ( a, b ) {
                    if ( a.group < b.group ) return -1;
                    if ( a.group > b.group ) return 1;
                    if ( a.group === b.group ) {
                        if ( a.groupPosition < b.groupPosition ) return -1;
                        if ( a.groupPosition > b.groupPosition ) return 1;
                    }
                    return 0;
                } );

                teams = groupsArray;
                populateParticle ( groupsArray );
            } );

        
    }


    $( '.swiper' ).each ( function ( i, el ) {
        var mc = new Hammer ( el );
        mc.on("swipe", function ( ev ) {
            var index = parseInt ( $ ( ev.target ).parents ( '.round' ).attr ( 'data-index' ), 10 );
            if ( ev.deltaX > 0 ) {
                if ( scrollPositions [ index ] > 0 ) animateRoundStep ( index, scrollPositions [ index ] - 1 );
            } else {
                if ( scrollPositions [ index ] < $( '.round' ).eq ( index ).find ( '.scroller span' ).length - 1 ) animateRoundStepBack ( index, scrollPositions [ index ] + 1 );
            }
        });
    } );


    function chunks ( array, size ) {
        var results = [];
        var origArray = array.slice ();
        while ( origArray.length ) {
            results.push ( origArray.splice ( 0, size ) );
        }
        return results;
    }

    function populateParticle ( data ) {
        var groups = data.length > 8 ? chunks ( data, 4 ) : data;
        var groupParent = $ ( '.round.prefill .group-parent .swiper' );
        var i = 0, j = 0;

        groups.forEach ( function ( group ) {
            var groupEl = $ ( '<ul data-index="' + i + '"></ul>' );
            var instructionsHtml = '<div class="instructions">' +
                    '<h3 class="group-title">Group ' + groupLabels [ i ] + '</h3>' +
                    '<p class="group-instruction">Select 1st place</p>' +
                '</div>';
            groupEl.append ( instructionsHtml );
            groupParent.append ( groupEl );
            i++;

            group.forEach ( function ( team ) {
                var teamdata = $.extend ( true, {}, team );
                delete teamdata.cssClasses;
                var li = $ ( "<li data-team='" + JSON.stringify ( teamdata ) + "'></li>" );
                li.append ( '<img src="' + imgBucket + team.qualifiedTeam.toLowerCase () + '.svg" />' );
                li.append ( '<div class="team-name">' + team.displayName + '</div>' );
                li.append ( '<div class="button ' + team.cssClasses + '" data-index="' + j + '"></div>' );
                groupEl.append ( li );
                j++;

            } );
        } );

        window.dispatchEvent ( new Event ( 'resize' ) );
        $( window ).trigger ( 'resize' );
    }

    $ ( '.round.prefill .group-parent .swiper' ).on ( 'click', '.button', function ( ev ) {

        var $el = $ ( ev.currentTarget );
        var groupIndex = parseInt ( $el.parents ( 'ul' ).attr ( 'data-index' ), 10 );
        var teamData = JSON.parse ( $el.parents ( 'li' ).attr ( 'data-team' ) );
        var $groupInstruction = $el.parents ( 'ul' ).find ( '.group-instruction' );
        var thisRound = rounds [ 0 ];
        var $thisUl = $el.parents ( 'ul' );
        var arrPos = groupIndex === 0 ? $thisUl.find ( '.selected' ).length : ( ( groupIndex ) * 2 ) + $thisUl.find ( '.selected' ).length;

        // toggle instructions as long as not disabled
        if ( !$el.hasClass ( 'disabled' ) ) $groupInstruction.html ( $groupInstruction.html () === 'Done' ? 'Select 2nd place' : $groupInstruction.html () === 'Select 1st place' ? 'Select 2nd place' : 'Select 1st place' )

        // add team to next round respecting limits
        // if already selected
        if ( $el.hasClass ( 'selected' ) ) {
            console.log ( 'selected' );
           
            $el.removeClass ( 'selected first second' );
            // if after removing we still have one selected, make sure it shows first rather than second
            if ( $thisUl.find ( '.selected' ).length === 1 && $thisUl.find ( '.second' ).length > 0 ) {
                var thisIndex = parseInt ( $thisUl.find ( '.second' ).attr ( 'data-index' ), 10 );
                $thisUl.find ( '.second' ).removeClass ( 'second' ).addClass ( 'first' );
                thisRound.move ( thisIndex, thisIndex - 1 );
            }
            // put all remaining items in disabled state so no more selections can happen
            $thisUl.find ( '.disabled' ).removeClass ( 'disabled' );
            propagateRemoval ( 0, teamData );
            unsetWinner ();
        } else { // else if not already selected
            console.log ( 'not selected' );
            // add the team to the array of the next round
            thisRound [ arrPos ] = teamData ;
            // add first or second class to the item as well as selected class
            $el.addClass ( $thisUl.find ( '.selected' ).length === 0 ? 'first' : 'second' ).addClass ( 'selected' );
            // add disabled state to all the rest if with this one, the total selected items are 2
            if ( $thisUl.find ( '.selected' ).length === 2 ) $thisUl.find ( '.button' ).not ( '.selected' ).addClass ( 'disabled' );
        }

        // populate next round
        populateRound ( 1, rounds [ 0 ] );
        // if this group is complete and only if we have not reached the last page, scroll to the next
        if ( $thisUl.find ( '.selected' ).length === 2 && groupIndex <= 6 ) {
            animateRoundStep ( 0, groupIndex + 1 );
            $groupInstruction.html ( 'Done' );
        }
        // but hide the instructions anymore!
        if ( $thisUl.find ( '.selected' ).length === 2 && groupIndex === 7 ) $groupInstruction.html ( 'Group stage complete!' );
    } );



    function populateParticleFromPrefill ( data ) {
        $( '.swiper' ).each ( function () {
            $( this ).html ( '' );
        } );

        var clonedData = data.slice ();
        var serialisedData = [];
        var roundData = [ [], [], [], [] ];

        // put in the right order...
        roundData [ 0 ] [ 0 ] = serialisedData [ 0 ] [ 0 ];
        roundData [ 0 ] [ 3 ] = serialisedData [ 0 ] [ 1 ];
        roundData [ 0 ] [ 2 ] = serialisedData [ 0 ] [ 2 ];
        roundData [ 0 ] [ 1 ] = serialisedData [ 0 ] [ 3 ];
        roundData [ 0 ] [ 4 ] = serialisedData [ 0 ] [ 4 ];
        roundData [ 0 ] [ 7 ] = serialisedData [ 0 ] [ 4 ];
        roundData [ 0 ] [ 6 ] = serialisedData [ 0 ] [ 6 ];
        roundData [ 0 ] [ 5 ] = serialisedData [ 0 ] [ 7 ];
        roundData [ 0 ] [ 8 ] = serialisedData [ 0 ] [ 8 ];
        roundData [ 0 ] [ 11 ] = serialisedData [ 0 ] [ 9 ];
        roundData [ 0 ] [ 10 ] = serialisedData [ 0 ] [ 10 ];
        roundData [ 0 ] [ 9 ] = serialisedData [ 0 ] [ 11 ];
        roundData [ 0 ] [ 12 ] = serialisedData [ 0 ] [ 12 ];
        roundData [ 0 ] [ 15 ] = serialisedData [ 0 ] [ 13 ];
        roundData [ 0 ] [ 14 ] = serialisedData [ 0 ] [ 14 ];
        roundData [ 0 ] [ 13 ] = serialisedData [ 0 ] [ 15 ];

        roundData [ 1 ] [ 0 ] = serialisedData [ 1 ] [ 0 ];
        roundData [ 1 ] [ 2 ] = serialisedData [ 1 ] [ 1 ];
        roundData [ 1 ] [ 1 ] = serialisedData [ 1 ] [ 2 ];
        roundData [ 1 ] [ 3 ] = serialisedData [ 1 ] [ 3 ];
        roundData [ 1 ] [ 4 ] = serialisedData [ 1 ] [ 4 ];
        roundData [ 1 ] [ 6 ] = serialisedData [ 1 ] [ 5 ];
        roundData [ 1 ] [ 5 ] = serialisedData [ 1 ] [ 6 ];
        roundData [ 1 ] [ 7 ] = serialisedData [ 1 ] [ 7 ];

        roundData [ 2 ] [ 0 ] = serialisedData [ 2 ] [ 0 ];
        roundData [ 2 ] [ 2 ] = serialisedData [ 2 ] [ 1 ];
        roundData [ 2 ] [ 1 ] = serialisedData [ 2 ] [ 2 ];
        roundData [ 2 ] [ 3 ] = serialisedData [ 2 ] [ 3 ];

        roundData [ 3 ] [ 0 ] = serialisedData [ 3 ] [ 0 ];
        roundData [ 3 ] [ 1 ] = serialisedData [ 3 ] [ 1 ];

        // assign it to the global object for changes
        rounds = roundData.slice ();

        prefillData = [];

        window.dispatchEvent ( new Event ( 'resize' ) );
        $( window ).trigger ( 'resize' );
    }

    function populateRound ( index, data ) {
        var index = parseInt ( index, 10 );
        var groupParent = $( '.round' ).eq ( index ).find ( '.group-parent .swiper' );
        var instructionsArray = instructions [ index - 1 ];
        var i = 0, j = 0, k = 0;
        var currentSelection = [];
        var groups;

        if ( !isArray ( data [ 0 ] ) ) {

            var serialisedData = data;
            var fifaArray = [];

            // match data to FIFA 
            if ( index === 1 ) {
                if ( typeof serialisedData [ 0 ] !== 'undefined' ) fifaArray [ 0 ] = serialisedData [ 0 ];
                if ( typeof serialisedData [ 3 ] !== 'undefined' ) fifaArray [ 1 ] = serialisedData [ 3 ];
                if ( typeof serialisedData [ 2 ] !== 'undefined' ) fifaArray [ 2 ] = serialisedData [ 2 ];
                if ( typeof serialisedData [ 1 ] !== 'undefined' ) fifaArray [ 3 ] = serialisedData [ 1 ];
                if ( typeof serialisedData [ 4 ] !== 'undefined' ) fifaArray [ 4 ] = serialisedData [ 4 ];
                if ( typeof serialisedData [ 7 ] !== 'undefined' ) fifaArray [ 5 ] = serialisedData [ 7 ];
                if ( typeof serialisedData [ 6 ] !== 'undefined' ) fifaArray [ 6 ] = serialisedData [ 6 ];
                if ( typeof serialisedData [ 5 ] !== 'undefined' ) fifaArray [ 7 ] = serialisedData [ 5 ];
                if ( typeof serialisedData [ 8 ] !== 'undefined' ) fifaArray [ 8 ] = serialisedData [ 8 ];
                if ( typeof serialisedData [ 11 ] !== 'undefined' ) fifaArray [ 9 ] = serialisedData [ 11 ];
                if ( typeof serialisedData [ 10 ] !== 'undefined' ) fifaArray [ 10 ] = serialisedData [ 10 ];
                if ( typeof serialisedData [ 9 ] !== 'undefined' ) fifaArray [ 11 ] = serialisedData [ 9 ];
                if ( typeof serialisedData [ 12 ] !== 'undefined' ) fifaArray [ 12 ] = serialisedData [ 12 ];
                if ( typeof serialisedData [ 15 ] !== 'undefined' ) fifaArray [ 13 ] = serialisedData [ 15 ];
                if ( typeof serialisedData [ 14 ] !== 'undefined' ) fifaArray [ 14 ] = serialisedData [ 14 ];
                if ( typeof serialisedData [ 13 ] !== 'undefined' ) fifaArray [ 15 ] = serialisedData [ 13 ];
            } else if ( index === 2 ) {
                if ( typeof serialisedData [ 0 ] !== 'undefined' ) fifaArray [ 0 ] = serialisedData [ 0 ];
                if ( typeof serialisedData [ 2 ] !== 'undefined' ) fifaArray [ 1 ] = serialisedData [ 2 ];
                if ( typeof serialisedData [ 1 ] !== 'undefined' ) fifaArray [ 2 ] = serialisedData [ 1 ];
                if ( typeof serialisedData [ 3 ] !== 'undefined' ) fifaArray [ 3 ] = serialisedData [ 3 ];
                if ( typeof serialisedData [ 4 ] !== 'undefined' ) fifaArray [ 4 ] = serialisedData [ 4 ];
                if ( typeof serialisedData [ 6 ] !== 'undefined' ) fifaArray [ 5 ] = serialisedData [ 6 ];
                if ( typeof serialisedData [ 5 ] !== 'undefined' ) fifaArray [ 6 ] = serialisedData [ 5 ];
                if ( typeof serialisedData [ 7 ] !== 'undefined' ) fifaArray [ 7 ] = serialisedData [ 7 ];
            } else if ( index === 3 ) {
                if ( typeof serialisedData [ 0 ] !== 'undefined' ) fifaArray [ 0 ] = serialisedData [ 0 ];
                if ( typeof serialisedData [ 2 ] !== 'undefined' ) fifaArray [ 1 ] = serialisedData [ 2 ];
                if ( typeof serialisedData [ 1 ] !== 'undefined' ) fifaArray [ 2 ] = serialisedData [ 1 ];
                if ( typeof serialisedData [ 3 ] !== 'undefined' ) fifaArray [ 3 ] = serialisedData [ 3 ];
            } else if ( index === 4 ) {
                fifaArray = data;
            }

            // keep state of selected items!!!
            groupParent.find ( 'li' ).each ( function ( i, item ) {
                if ( typeof fifaArray [ i ] !== 'undefined' ) {
                    if ( ( JSON.parse ( $ ( item ).attr ( 'data-team' ) ).displayName === fifaArray [ i ].displayName) && $ ( item ).find ( '.button' ).hasClass ( 'selected' ) ) {
                        currentSelection [ i ] = 'selected win';
                    } else if ( ( JSON.parse ( $ ( item ).attr ( 'data-team' ) ).displayName === fifaArray [ i ].displayName) && $ ( item ).find ( '.button' ).hasClass ( 'disabled' ) ) {
                        currentSelection [ i ] = 'disabled';
                    }
                }
            } );

            groups = fifaArray.length >= 2 ? chunks ( fifaArray, 2 ) : [ fifaArray ];

            if ( serialisedData.length >= 4 || ( index === 4 && serialisedData.length >= 2 ) ) $( '.round' ).eq ( index ).slideDown ( function () {
                window.dispatchEvent ( new Event ( 'resize' ) );
                $( window ).trigger ( 'resize' );
            } );
        } else {
            groups = data;
        }

        groupParent.html ( '' );

        groups.forEach ( function ( group ) {
            var groupEl = $ ( '<ul data-index="' + i + '"></ul>' );
            var instructionsHtml = '<div class="instructions float">' +
                                        '<h3 class="group-title">' + instructionsArray [ i ] [ 0 ] + '</h3>' +
                                        '<h3 class="group-title">' + instructionsArray [ i ] [ 1 ] + '</h3>' +
                                        '<p class="group-instruction">Select winner</p>' +
                                    '</div>';
            groupEl.append ( instructionsHtml );
            groupParent.append ( groupEl );
            i++;

            group.forEach ( function ( team ) {
                var teamdata = $.extend ( true, {}, team );
                delete teamdata.cssClasses;
                var li = $ ( "<li data-team='" + JSON.stringify ( teamdata ) + "'></li>" );
                if ( 'displayName' in team ) {
                    li.append ( '<img src="' + imgBucket + team.qualifiedTeam.toLowerCase () + '.svg" />' );
                    li.append ( '<div class="team-name">' + team.displayName + '</div>' );
                    li.append ( '<div class="button ' + currentSelection [ j ] + ' ' + team.cssClasses + '" data-index="' + j + '"></div>' );
                }
                groupEl.append ( li );
                j++;

            } );

            if ( groupEl.find ( '.selected' ).length === 1 && groupEl.find ( '.disabled' ).length === 0 ) {
                var teamSelected = JSON.parse ( groupEl.find ( '.selected' ).parents ( 'li').eq ( 0 ).attr ( 'data-team' ) );
                //propagateRemoval ( index, teamSelected );
                groupEl.find ( '.selected' ).removeClass ( 'selected win' );
            }

            if ( groupEl.find ( '.disabled' ).length === 1 && groupEl.find ( '.selected' ).length === 0 ) {
                var teamDisabled = JSON.parse ( groupEl.find ( '.disabled' ).parents ( 'li').eq ( 0 ).attr ( 'data-team' ) );
                //propagateRemoval ( index, teamDisabled );
                groupEl.find ( '.disabled' ).removeClass ( 'disabled' );
            }

        } );

        if ( index < 4 && rounds [ index ].length > 0 ) populateRound ( index + 1, rounds [ index ] );

        window.dispatchEvent ( new Event ( 'resize' ) );
        $( window ).trigger ( 'resize' );
    }

    $( '.round' ).not ( '.prefill' ).on ( 'click', '.button', function ( ev ) {
        var $el = $ ( ev.currentTarget );
        var roundIndex = parseInt ( $el.parents ( '.round' ).attr ( 'data-index' ), 10 );
        var groupIndex = parseInt ( $el.parents ( 'ul' ).attr ( 'data-index' ), 10 );
        var teamData = JSON.parse ( $el.parents ( 'li' ).attr ( 'data-team' ) );
        var thisRound =  rounds [ roundIndex ];
        var $thisUl = $el.parents ( 'ul' );
        var slides = $el.parents ( '.round' ).find ( '.scroller span' ).length;
        var arrPos = groupIndex;

        if ( $el.hasClass ( 'selected' ) ) {


            $el.removeClass ( 'selected win' );
  
            $thisUl.find ( '.disabled' ).removeClass ( 'disabled' );
            unsetWinner ();
            if ( roundIndex !== 4 ) propagateRemoval ( roundIndex, teamData );
        } else {
            if ( roundIndex !== 4 ) thisRound [ arrPos ] = teamData;
            else chooseWinner ( teamData, true );
            $el.addClass ( 'selected win' );
            if ( $thisUl.find ( '.selected' ).length === 1 ) $thisUl.find ( '.button' ).not ( '.selected' ).addClass ( 'disabled' );
        }

        if ( roundIndex !== 4 ) {
            populateRound ( roundIndex + 1, thisRound );
            //if this group is complete and only if we have not reached the last page, scroll to the next
            if ( $thisUl.find ( '.selected' ).length === 1 && groupIndex <= slides - 2 ) animateRoundStep ( roundIndex, groupIndex + 1 );
        }
    } );

    function animateRoundStep ( index, dx ) {
        var index = parseInt ( index, 10 );
        var dx = parseInt ( dx, 10 );
        var $target = $( '.round' ).eq ( index );

        scrollPositions [ index ] = dx;

        $target.find ( '.group-parent .swiper' ).css ( { 'left': '-' + 100 * dx + 'vw' } );
        $target.find ( '.scroller span' ).removeClass ( 'active' );
        $target.find ( '.scroller span' ).eq ( dx ).addClass ( 'active' );
    }

    function animateRoundStepBack ( index, dx ) {
        var index = parseInt ( index, 10 );
        var dx = parseInt ( dx, 10 );
        var $target = $( '.round' ).eq ( index );

        scrollPositions [ index ] = dx;

        if ( index === 0 ) {
            $target.find ( '.group-title' ).html ( 'Group ' + groupLabels [ dx ] );
        }

        $target.find ( '.group-parent .swiper' ).css ( { 'left': '-' + 100 * dx + 'vw' } );
        $target.find ( '.scroller span' ).removeClass ( 'active' );
        $target.find ( '.scroller span' ).eq ( dx ).addClass ( 'active' );
    }

    function chooseWinner ( team, save ) {
        var $winner = $( '.winner' );
        var teamName = team.qualifiedTeam.replace ( ' ', '_' ).toLowerCase();
        $winner.find ( '.wrapper' ).attr ( 'class', 'wrapper' ).addClass ( teamName );
        $winner.find ( 'h2' ).html ( team.qualifiedTeam );
        $winner.find ( '.graphic img' ).attr ( 'src', winnersBucket + teamName + '.svg' );
        $winner.slideDown ( function () {
            window.dispatchEvent ( new Event ( 'resize' ) );
            $( window ).trigger ( 'resize' );
        } );

        simulatedWinner = teamName;

        UUID = generateUUID ();

        var jsonData = [];

        $( '.swiper' ).each ( function ( i, el ) {

            jsonData [ i ] = [];

            if ( save ) {
                setTimeout ( function () {
                    $ ( el ).find ( 'ul' ).each ( function ( j, ul ) {

                        jsonData [ i ] [ j ] = [];

                        $ ( ul ).find ( 'li' ).each ( function ( k, li ) {

                            var classes = $ ( li ).find ( '.button' ).attr ( 'class' ).replace ( 'button', '' ).replace ( 'undefined', '' ).trim ();
                            var item = JSON.parse ( $ ( li ).attr ( 'data-team' ) );

                            item.cssClasses = classes;
                            jsonData [ i ] [ j ].push ( item );

                        } );

                    } );

                }, 2000 );
            }

        } );

        window.dispatchEvent ( new Event ( 'resize' ) );
        $( window ).trigger ( 'resize' );

        setTimeout ( function () {
            window.dispatchEvent ( new Event ( 'resize' ) );
            $( window ).trigger ( 'resize' );
        }, 2000 );
    }

    function unsetWinner ( team ) {
        var $winner = $( '.winner' );
        $winner.find ( 'h2' ).html ();
        $winner.slideUp ();
    }


    init ();

    resizeParticle ();

} );

// UUID Generator
function generateUUID () {
    var d = new Date().getTime();
    if (typeof performance !== 'undefined' && typeof performance.now === 'function'){
        d += performance.now();
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}

/////////////////// PostMessage Resizer ///////////////////
function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
            tmp = item.split("=");
            if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}


var widgetHeight = 0;
var resizeTimer = 0;
var wrapper = document.getElementById("particle");
var events = ["resize", "orientationchange", "load"];

function resizer() {
    var wh = wrapper.offsetHeight;
    var prefill = findGetParameter('prefill')
    widgetHeight = wh;
    window.parent.postMessage(JSON.stringify({
        prefill: prefill,
        height: widgetHeight,
        id: document.querySelector("html").getAttribute('data-widget-id'),
    }), '*')
}

events.forEach(function(e){
    window.addEventListener(e,function(){
        resizer ();
    },false);
});

resizer();