"use strict";var Model={default:{},data:{},set:function(t,e){switch(Object.prototype.toString.call(e)){case"[object Object]":this.default[t]=Object.assign({},e),this.data[t]=Object.assign({},e);break;case"[object Array]":this.default[t]=Object.assign([],e),this.data[t]=Object.assign([],e);break;default:this.default[t]=e,this.data[t]=e}return this},get:function(t){return this.data[t]},watch:function(c,r){var i=this;Object.defineProperty(this.default,c,{set:function(t){var e=Object.prototype.toString.call(t);if(e!==Object.prototype.toString.call(i.data[c]))i.data[c]=t,r(t);else if("[object String]"===e||"[object Number]"===e)t!==i.data[c]&&(i.data[c]=t,r(t));else if("[object Array]"===e||"[object Object]"===e){if(("[object Object]"===e?i.object_length(t):t.length)!==("[object Object]"===e?i.object_length(i.data[c]):i.data[c].length))i.data[c]=t,r(t);else for(var a in t)if(!i.data[c].hasOwnProperty(a)||t[a]!==i.data[c][a]){i.data[c]=t,r(t);break}}}})},object_length:function(t){var e=0;for(var a in t)e++;return e}};