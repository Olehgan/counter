(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a(4),c=a.n(n),l=(a(9),a(2)),r=(a(10),a(0)),u=function(e){return Object(r.jsx)("div",{className:"tablet-block",children:Object(r.jsx)("div",{className:"tablet",children:Object(r.jsxs)("span",{className:e.value===e.maxValue||e.errorsValue?"text-red":"text",children:[e.errorsValue?"Error":e.value," "]})})})},i=function(e){return Object(r.jsx)("div",{className:"buttons",children:Object(r.jsx)("button",{className:"button",onClick:e.onClick,disabled:e.isDisabled,children:e.title})})},o=function(e){var t=e.maxValue<0||e.maxValue<=e.startValue||e.startValue<0;return Object(r.jsx)("div",{className:"block",children:Object(r.jsxs)("div",{className:"buttons-block",children:[Object(r.jsx)(i,{onClick:function(){e.onIncCount()},title:"Inc",isDisabled:e.value===e.maxValue||t}),Object(r.jsx)(i,{onClick:function(){e.onResetCount()},title:"Reset",isDisabled:e.value===e.startValue||t})]})})},b=function(e){return Object(r.jsxs)("div",{className:"inputs-block",children:[Object(r.jsxs)("div",{className:"inputs-max",children:[Object(r.jsx)("label",{className:"maxValue",children:" maxValue : "}),Object(r.jsx)("input",{className:e.errorsValue?"inputs-red":"inputs",type:"number",value:e.maxValue,onChange:function(t){e.setMaxValue(Number(t.currentTarget.value))},width:"min-width: 1em"})]}),Object(r.jsxs)("div",{className:"inputs-start",children:[Object(r.jsx)("label",{className:"startValue",children:" startValue : "}),Object(r.jsx)("input",{className:e.errorsValue?"inputs-red":"inputs",type:"number",value:e.startValue,onChange:function(t){e.setStartValue(Number(t.currentTarget.value))}})]})]})},j=function(e){return Object(r.jsx)("div",{className:"set-button",children:Object(r.jsx)(i,{onClick:function(){e.setNumberHandler()},isDisabled:e.errorsValue,title:"Set"})})},m=function(){var e=Object(s.useState)(0),t=Object(l.a)(e,2),a=t[0],n=t[1],c=Object(s.useState)(5),i=Object(l.a)(c,2),m=i[0],d=i[1],x=Object(s.useState)(0),O=Object(l.a)(x,2),V=O[0],v=O[1],h=m<0||m<=V||V<0;Object(s.useEffect)((function(){var e=localStorage.getItem("maxValue");if(e){var t=JSON.parse(e);d(t)}}),[]),Object(s.useEffect)((function(){var e=localStorage.getItem("startValue");if(e){var t=JSON.parse(e);v(t)}}),[]);return Object(r.jsxs)("div",{className:"common-block",children:[Object(r.jsxs)("div",{className:"counter",children:[Object(r.jsx)(u,{errorsValue:h,maxValue:m,value:a,startValue:V}),Object(r.jsx)(o,{onIncCount:function(){n(a+1)},onResetCount:function(){n(V)},value:a,maxValue:m,startValue:V})]}),Object(r.jsxs)("div",{className:"settings-block",children:[Object(r.jsx)(b,{maxValue:m,startValue:V,setMaxValue:d,setStartValue:v,errorsValue:h}),Object(r.jsx)(j,{setNumberHandler:function(){localStorage.setItem("maxValue",JSON.stringify(m)),localStorage.setItem("startValue",JSON.stringify(V))},maxValue:m,startValue:V,errorsValue:h})]})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(r.jsx)(m,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.9c816830.chunk.js.map