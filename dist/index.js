(function(a,b){"object"==typeof exports&&"undefined"!=typeof module?b(exports):"function"==typeof define&&define.amd?define(["exports"],b):(a=a||self,b(a["css-in-js-media"]={}))})(this,function(a){'use strict';function b(){throw"invalid media-query  :("}function c(){throw"invalid breakpoint :("}function d(){return j}function e(a){const b=Object.keys(j),c=Object.keys(a);return c.every(a=>b.includes(a))}function f(a){const b=e(a);return b?void(j={...j,...a}):c()}function g(a){const[b,c]=h(a),d=!!b&&!!j[c];return d}function h(a){const b=a.match(k)?a.match(k)[0].trim():"",c=a.replace(k,"").trim();return[b,c]}function i(a){const[b,c]=h(a),d=b.includes("="),e=d?j[c]:j[c]-1,f="number"==typeof e?"px":"",g=b.includes(">")?"min-width":"max-width";return`(${g}: ${e}${f})`}let j={smallPhone:320,phone:375,tablet:768,desktop:1024,largeDesktop:1440};const k=/^[<=>]+/;a.default=function(a,c){const d=c?[a,c]:[a];return d.every(g)?`@media ${d.map(i).join(" and ")}`:b()},a.getBreakPoints=d,a.setBreakPoints=f,Object.defineProperty(a,"__esModule",{value:!0})});
