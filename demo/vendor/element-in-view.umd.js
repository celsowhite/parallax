!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.elementInView=t()}(this,function(){return function(e,t){void 0===t&&(t="top");var o=window.innerHeight,n=e.getBoundingClientRect().top,i=e.offsetHeight,d=n+i/2,f=n+i;return!!(("top"===t.toLowerCase()?n:"middle"===t.toLowerCase()?d:"bottom"===t.toLowerCase()?f:n)<=o&&f>=0)}});
//# sourceMappingURL=element-in-view.umd.js.map
