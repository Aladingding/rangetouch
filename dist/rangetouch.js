!function(t,e){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e(t,document):"function"==typeof define&&define.amd?define(null,function(){e(t,document)}):t.rangetouch=e(t,document)}("undefined"!=typeof window?window:this,function(t,e){"use strict";function n(t,e,n){t.addEventListener(e,n,!1)}function o(t){var e=(""+t).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);return e?Math.max(0,(e[1]?e[1].length:0)-(e[2]?+e[2]:0)):0}function r(t,e){if(1>e){var n=o(parseInt(e));return parseFloat(t.toFixed(n))}return Math.round(t/e)*e}function u(t){var e,n=t.target,o=t.changedTouches[0],u=parseFloat(n.getAttribute("min"))||0,a=parseFloat(n.getAttribute("max"))||100,i=parseFloat(n.getAttribute("step"))||1,d=a-u,s=n.getBoundingClientRect(),f=100/s.width*(c.thumbWidth/2)/100;return e=100/s.width*(o.pageX-s.left),0>e?e=0:e>100&&(e=100),50>e?e-=(100-2*e)*f:e>50&&(e+=2*(e-50)*f),u+r(d*(e/100),i)}function a(t){c.enabled&&"range"===t.target.type&&(t.preventDefault(),t.target.value=u(t))}function i(){n(e.body,c.events.start,a),n(e.body,c.events.move,a)}var c={enabled:!0,selectors:{range:'[type="range"]'},thumbWidth:15,events:{start:"touchstart",move:"touchmove"}};return function(){if("ontouchstart"in e.documentElement){for(var t=e.querySelectorAll(c.selectors.range),n=t.length-1;n>=0;n--)t[n].style.touchAction="manipulation";i()}}(),{set:function(t,e){c[t]=e}}});