!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var r={id:e,exports:{}};return o[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},n.parcelRequired7c6=r);var i=r("6JpON"),u=document.querySelector('[name="delay"]'),c=document.querySelector('[name="step"]'),a=document.querySelector('[name="amount"]'),l=document.querySelector('[type="submit"]'),d=document.querySelector(".form");function f(e,n){return new Promise((function(o,t){setTimeout((function(){Math.random()>.3?o({position:e,delay:n}):t({position:e,delay:n})}),n)}))}l.addEventListener("click",(function(n){n.preventDefault();for(var o=0;o<a.value;o++)f(o+1,Number(u.value)+Number(c.value)*o).then((function(n){var o=n.position,t=n.delay;e(i).Notify.success("💡 Fulfilled promise ".concat(o," in ").concat(t,"ms"))})).catch((function(n){var o=n.position,t=n.delay;e(i).Notify.failure("🐹 Rejected promise ".concat(o," in ").concat(t,"ms"))}));d.reset()}))}();
//# sourceMappingURL=03-promises.cdba9639.js.map
