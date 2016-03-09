define(["exports","metal/src/metal","metal-dom/src/all/dom","metal-attribute/src/Attribute","metal-events/src/events","metal-position/src/all/position","metal-jquery-adapter/src/JQueryAdapter"],function(t,e,o,i,n,s,r){"use strict";function l(t){return t&&t.__esModule?t:{"default":t}}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function f(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(t,"__esModule",{value:!0});var u=l(e),p=l(i),m=l(n),d=l(s),h=l(r),y=function(t){function e(i){a(this,e);var n=f(this,t.call(this,i));return e.emitter_||(e.emitter_=new m["default"],e.proxy_=new o.DomEventEmitterProxy(document,e.emitter_,null,{scroll:!0})),n.lastPosition_=null,n.scrollHandle_=e.emitter_.on("scroll",n.checkPosition.bind(n)),n.on("elementChanged",n.checkPosition),n.on("offsetTopChanged",n.checkPosition),n.on("offsetBottomChanged",n.checkPosition),n.checkPosition(),n}return c(e,t),e.prototype.disposeInternal=function(){o.dom.removeClasses(this.element,e.Position.Bottom+" "+e.Position.Default+" "+e.Position.Top),this.scrollHandle_.dispose(),t.prototype.disposeInternal.call(this)},e.prototype.checkPosition=function(){this.intersectTopRegion()?this.syncPosition(e.Position.Top):this.intersectBottomRegion()?this.syncPosition(e.Position.Bottom):this.syncPosition(e.Position.Default)},e.prototype.intersectBottomRegion=function(){if(!u["default"].isDef(this.offsetBottom))return!1;var t=d["default"].getHeight(this.scrollElement),e=d["default"].getClientHeight(this.scrollElement);return d["default"].getScrollTop(this.scrollElement)+e>=t-this.offsetBottom},e.prototype.intersectTopRegion=function(){return u["default"].isDef(this.offsetTop)?d["default"].getScrollTop(this.scrollElement)<=this.offsetTop:!1},e.prototype.syncPosition=function(t){this.lastPosition_!==t&&(o.dom.addClasses(this.element,t),o.dom.removeClasses(this.element,this.lastPosition_),this.lastPosition_=t)},e}(p["default"]);y.prototype.registerMetalComponent&&y.prototype.registerMetalComponent(y,"Affix"),y.Position={Top:"affix-top",Bottom:"affix-bottom",Default:"affix"},y.ATTRS={scrollElement:{setter:o.dom.toElement,value:document},offsetTop:{validator:u["default"].isNumber},offsetBottom:{validator:u["default"].isNumber},element:{setter:o.dom.toElement}},t["default"]=y,h["default"].register("affix",y)});