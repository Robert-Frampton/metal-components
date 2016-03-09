define(["exports","metal-component/src/all/component","metal-soy/src/soy"],function(e,t,i){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(e,"__esModule",{value:!0});var a=s(t),l=i.SoyTemplates.get();"undefined"==typeof l.List&&(l.List={}),l.List.render=function(e,t,i){return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="'+soy.$$escapeHtmlAttribute(e.id)+'" class="list component'+soy.$$escapeHtmlAttribute(e.elementClasses?" "+e.elementClasses:"")+'">'+l.List.items(e,null,i)+"</div>")},goog.DEBUG&&(l.List.render.soyTemplateName="Templates.List.render"),l.List.items=function(e,t,i){var s='<ul id="'+soy.$$escapeHtmlAttribute(e.id)+'-items" class="list-group" data-onclick="handleClick">';if(null!=e.itemsHtml)s+=soy.$$escapeHtml(e.itemsHtml);else for(var n=e.items,o=n.length,r=0;o>r;r++){var a=n[r];s+=l.ListItem.render({id:e.id+"-items-"+r,index:r,item:a},null,i)}return s+="</ul>",soydata.VERY_UNSAFE.ordainSanitizedHtml(s)},goog.DEBUG&&(l.List.items.soyTemplateName="Templates.List.items"),l.List.render.params=["id"],l.List.items.params=["id","items","itemsHtml"];var u=function(e){function t(){return n(this,t),o(this,e.apply(this,arguments))}return r(t,e),t}(a["default"]);u.prototype.registerMetalComponent&&u.prototype.registerMetalComponent(u,"List"),u.RENDERER=i.SoyRenderer,i.SoyAop.registerTemplates("List"),e["default"]=u});