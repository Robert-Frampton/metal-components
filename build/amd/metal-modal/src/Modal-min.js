define(["exports","metal/src/metal","metal-dom/src/all/dom","metal-events/src/events","./Modal.soy"],function(t,e,o,n,i){"use strict";function s(t){return t&&t.__esModule?t:{"default":t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(t,"__esModule",{value:!0});var u=s(e),c=s(o),d=s(i),p=function(t){function e(o){r(this,e);var i=l(this,t.call(this,o));return i.eventHandler_=new n.EventHandler,i}return a(e,t),e.prototype.attached=function(){this.autoFocus_(this.autoFocus)},e.prototype.autoFocus_=function(t){if(this.inDocument&&this.visible&&t){var e=this.element.querySelector(t);e&&e.focus()}},e.prototype.detached=function(){t.prototype.detached.call(this),this.eventHandler_.removeAllListeners()},e.prototype.disposeInternal=function(){c["default"].exitDocument(this.overlayElement),this.unrestrictFocus_(),t.prototype.disposeInternal.call(this)},e.prototype.handleDocumentFocus_=function(t){this.overlay&&!this.element.contains(t.target)&&this.autoFocus_(".modal-dialog")},e.prototype.handleKeyup_=function(t){27===t.keyCode&&this.hide()},e.prototype.hide=function(){this.visible=!1},e.prototype.restrictFocus_=function(){this.restrictFocusHandle_=c["default"].on(document,"focus",this.handleDocumentFocus_.bind(this),!0)},e.prototype.shiftFocusBack_=function(){this.lastFocusedElement_&&(this.lastFocusedElement_.focus(),this.lastFocusedElement_=null)},e.prototype.show=function(){this.visible=!0},e.prototype.syncHideOnEscape=function(t){t?this.eventHandler_.add(c["default"].on(document,"keyup",this.handleKeyup_.bind(this))):this.eventHandler_.removeAllListeners()},e.prototype.syncOverlay=function(t){var e=t&&this.visible;c["default"][e?"enterDocument":"exitDocument"](this.overlayElement)},e.prototype.syncVisible=function(t){this.element.style.display=t?"block":"",this.syncOverlay(this.overlay),this.visible?(this.lastFocusedElement_=document.activeElement,this.autoFocus_(this.autoFocus),this.restrictFocus_()):(this.unrestrictFocus_(),this.shiftFocusBack_())},e.prototype.unrestrictFocus_=function(){this.restrictFocusHandle_&&this.restrictFocusHandle_.removeListener()},e.prototype.valueOverlayElementFn_=function(){return c["default"].buildFragment('<div class="modal-backdrop fade in"></div>').firstChild},e}(d["default"]);p.prototype.registerMetalComponent&&p.prototype.registerMetalComponent(p,"Modal"),p.ELEMENT_CLASSES="modal",p.ATTRS={autoFocus:{validator:function(t){return t===!1||u["default"].isString(t)},value:".close"},body:{isHtml:!0},footer:{isHtml:!0},header:{isHtml:!0},hideOnEscape:{validator:u["default"].isBoolean,value:!0},overlay:{validator:u["default"].isBoolean,value:!0},overlayElement:{initOnly:!0,valueFn:"valueOverlayElementFn_"},role:{validator:u["default"].isString,value:"dialog"}},t["default"]=p});