define(["exports","metal/src/metal"],function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(e,"__esModule",{value:!0});var s=function(e){function t(){n(this,t);var r=o(this,e.call(this));return r.eventHandles_=[],r}return r(t,e),t.prototype.add=function(){for(var e=0;e<arguments.length;e++)this.eventHandles_.push(arguments[e])},t.prototype.disposeInternal=function(){this.eventHandles_=null},t.prototype.removeAllListeners=function(){for(var e=0;e<this.eventHandles_.length;e++)this.eventHandles_[e].removeListener();this.eventHandles_=[]},t}(t.Disposable);s.prototype.registerMetalComponent&&s.prototype.registerMetalComponent(s,"EventHandler"),e["default"]=s});