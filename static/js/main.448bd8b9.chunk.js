(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(3),s=n.n(c),o=(n(9),n(4)),i=(n(10),n(0)),l=function(e){return Object(i.jsx)("div",{className:"tablet",children:Object(i.jsxs)("span",{className:e.value===e.maxValue?"text-red":"text",children:[e.value," "]})})},u=function(e){return Object(i.jsx)("div",{children:Object(i.jsx)("button",{className:"button",onClick:e.onClick,disabled:e.isDisabled,children:e.title})})},r=function(e){var t=e.maxValue<0||e.maxValue<=e.startValue||e.startValue<0;return Object(i.jsx)("div",{className:"block",children:Object(i.jsxs)("div",{className:"buttons-block",children:[Object(i.jsx)(u,{onClick:function(){e.onIncCount()},title:"Inc",isDisabled:e.value===e.maxValue||t}),Object(i.jsx)(u,{onClick:function(){e.onResetCount()},title:"Reset",isDisabled:e.value===e.startValue||t})]})})},j=function(){var e=Object(a.useState)(0),t=Object(o.a)(e,2),n=t[0],c=t[1];return Object(i.jsx)("div",{children:Object(i.jsxs)("div",{className:"counter",children:[Object(i.jsx)(l,{maxValue:5,value:n,startValue:0}),Object(i.jsx)(r,{onIncCount:function(){c(n+1)},onResetCount:function(){c(0)},value:n,maxValue:5,startValue:0})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(i.jsx)(j,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.448bd8b9.chunk.js.map