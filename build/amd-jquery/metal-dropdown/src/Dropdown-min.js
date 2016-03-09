define(["exports","metal/src/metal","metal-dom/src/all/dom","metal-position/src/all/position","./Dropdown.soy","metal-events/src/events","metal-jquery-adapter/src/JQueryAdapter"],function(e,t,n,o,i,r,s){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(e,"__esModule",{value:!0});var c=l(n),f=l(i),h=l(s),m=function(e){function n(t){p(this,n);var o=d(this,e.call(this,t));return o.eventHandler_=new r.EventHandler,o}return u(n,e),n.prototype.attached=function(){e.prototype.attached.call(this),this.eventHandler_.add(c["default"].on(document,"click",this.handleDocClick_.bind(this)))},n.prototype.detached=function(){e.prototype.detached.call(this),this.eventHandler_.removeAllListeners()},n.prototype.close=function(){this.expanded=!1},n.prototype.isOpen=function(){return this.expanded},n.prototype.handleDocClick_=function(e){this.element.contains(e.target)||this.close()},n.prototype.open=function(){this.expanded=!0},n.prototype.setterClassMapFn_=function(e){return t.object.mixin(this.valueClassMapFn_(),e)},n.prototype.setterPositionFn_=function(e){return t.core.isNumber(e)?e:"up"===e.toLowerCase()?o.Align.TopLeft:o.Align.BottomLeft},n.prototype.syncExpanded=function(e){if(e){if(c["default"].addClasses(this.element,"open"),this.alignElementSelector){var t=this.element.querySelector(this.alignElementSelector);if(t){var n=this.getRenderer().getSurfaceElement("body"),i=o.Align.align(n,t,this.position);this.updatePositionCss_(i)}}}else c["default"].removeClasses(this.element,"open")},n.prototype.syncPosition=function(e){this.updatePositionCss_(e)},n.prototype.toggle=function(){this.expanded=!this.expanded},n.prototype.updatePositionCss_=function(e){var t=this.element;this.positionClassOnMenu&&(t=t.querySelector(".dropdown-menu")),this.alignedPosition_&&c["default"].removeClasses(t,this.classMap[this.alignedPosition_]),c["default"].addClasses(t,this.classMap[e]),this.alignedPosition_=e},n.prototype.validatePosition_=function(e){if(o.Align.isValidPosition(e))return!0;switch(e.toLowerCase()){case"up":case"down":return!0;default:return!1}},n.prototype.valueBodyFn_=function(){var e=this.element&&this.element.querySelector(".dropdown-menu");return e?e.innerHTML:""},n.prototype.valueClassMapFn_=function(){var e;return e={},a(e,o.Align.TopLeft,"dropup"),a(e,o.Align.TopCenter,"dropup"),a(e,o.Align.TopRight,"dropup"),a(e,o.Align.BottomLeft,"dropdown"),a(e,o.Align.BottomCenter,"dropdown"),a(e,o.Align.BottomRight,"dropdown"),a(e,o.Align.RightCenter,"dropright"),a(e,o.Align.LeftCenter,"dropleft"),e},n.prototype.valueHeaderFn_=function(){if(this.element){for(var e=document.createElement("div"),t=0;t<this.element.childNodes.length&&!c["default"].hasClass(this.element.childNodes[t],"dropdown-menu");t++)e.appendChild(this.element.childNodes[t].cloneNode(!0));return e.innerHTML}return""},n}(f["default"]);m.prototype.registerMetalComponent&&m.prototype.registerMetalComponent(m,"Dropdown"),m.ATTRS={alignElementSelector:{validator:t.core.isString},body:{isHtml:!0,valueFn:"valueBodyFn_"},classMap:{setter:"setterClassMapFn_",validator:t.core.isObject,valueFn:"valueClassMapFn_"},header:{isHtml:!0,valueFn:"valueHeaderFn_"},expanded:{value:!1},position:{setter:"setterPositionFn_",value:o.Align.BottomLeft,validator:"validatePosition_"},positionClassOnMenu:{value:!1}},m.ELEMENT_CLASSES="dropdown",e["default"]=m,h["default"].register("dropdown",m)});