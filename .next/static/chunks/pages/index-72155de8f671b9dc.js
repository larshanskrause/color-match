(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(6777)}])},6777:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return x}});var t=n(5893),o=n(8670),i=n.n(o),c=n(7294),s=function(e){var r=e.color,n=e.answer;return(0,t.jsx)("div",{onClick:n,className:"w-40 h-40 bg-blue-500 mx-6",style:{backgroundColor:r}})},u=function(e){var r=e.color,n=e.correct,o=void 0!==n&&n;return(0,t.jsx)("div",{className:"w-4 h-4 mr-1 mb-1 "+(o?"border-2 border-green-500":""),style:{backgroundColor:r}})},l=function(e){var r=e.history;return(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"mb-2",children:"History"}),r.map((function(e,r){var n=e.colors,o=e.correctAnswer,i=e.myAnswer;return(0,t.jsxs)("div",{className:"flex",children:[(0,t.jsx)("p",{className:"text-black w-4 h-4 mr-1 -mt-1",children:i&&o?"\u2713":i||o?"\ud800\udd02":"\u2713"}),(0,t.jsx)(u,{color:n[0],correct:o}),(0,t.jsx)(u,{color:n[1],correct:!o})]},r)}))]})};function a(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function d(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(!e)return;if("string"===typeof e)return a(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(e,r)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var f=function(){var e=(0,c.useState)([]),r=e[0],n=e[1],o=(0,c.useState)([]),u=o[0],a=o[1],f=(0,c.useState)(0),x=f[0],m=f[1],h=(0,c.useState)(0),p=h[0],b=h[1],v=(0,c.useState)(0),y=v[0],w=v[1],j=function(){var e=i().random(),r=i().random().luminance(function(e,r){for(var n=0;0===n;)n=Math.round(2*(Math.random()-.5));return e-.2/(r+1)*n}(e.luminance(),y));a([e,r])},g=function(e){var t=u[1].luminance()>u[0].luminance();(t&&e||!t&&!e)&&m(x+1),b(p+1),n([{colors:u,correctAnswer:t,myAnswer:e}].concat(d(r))),j()},N=function(){n([]),m(0),b(0),j()},k=function(e){w(e),N()};(0,c.useEffect)((function(){j()}),[]);var _=function(e){var r=e.key;"1"!==r?"2"!==r||g(1):g(0)};return(0,c.useEffect)((function(){return window.addEventListener("keypress",_),function(){window.removeEventListener("keypress",_)}})),(0,t.jsxs)("div",{className:"p-6",children:[(0,t.jsx)("h1",{children:"Which color has more luminance?"}),(0,t.jsxs)("p",{children:["Score: ",x]}),(0,t.jsxs)("p",{children:["Tries: ",p]}),(0,t.jsxs)("div",{className:"flex",children:[(0,t.jsx)(s,{answer:function(){return g(0)},color:u[0]}),(0,t.jsx)(s,{answer:function(){return g(1)},color:u[1]}),(0,t.jsx)(l,{history:r})]}),(0,t.jsxs)("div",{className:"mt-4",children:[(0,t.jsx)("div",{onClick:j,title:"refresh",className:"bg-blue-500 rounded-lg mx-6 px-4 py-2 text-white text uppercase inline-flex cursor-pointer",children:"Randomize"}),(0,t.jsx)("div",{onClick:N,title:"refresh",className:"bg-blue-500 rounded-lg mx-6 px-4 py-2 text-white text uppercase inline-flex cursor-pointer",children:"Reset"}),(0,t.jsx)("div",{onClick:function(){return k(0)},title:"refresh",className:"bg-blue-500 rounded-lg mx-6 px-4 py-2 text-white text uppercase inline-flex cursor-pointer"+(0===y?"border border-2 border-blue-900":""),children:"Easy"}),(0,t.jsx)("div",{onClick:function(){return k(1)},title:"refresh",className:"bg-blue-500 rounded-lg mx-6 px-4 py-2 text-white text uppercase inline-flex cursor-pointer"+(1===y?"border border-2 border-blue-900":""),children:"Medium"}),(0,t.jsx)("div",{onClick:function(){return k(2)},title:"refresh",className:"bg-blue-500 rounded-lg mx-6 px-4 py-2 text-white text uppercase inline-flex cursor-pointer"+(2===y?"border border-2 border-blue-900":""),children:"Hard"})]})]})},x=function(){return(0,t.jsx)("div",{children:(0,t.jsx)(f,{})})}}},function(e){e.O(0,[670,774,888,179],(function(){return r=5301,e(e.s=r);var r}));var r=e.O();_N_E=r}]);