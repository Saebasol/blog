_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[16],{0:function(e,t,n){n("tRiz"),e.exports=n("+v/6")},C7TM:function(e,t,n){},M1Cj:function(e,t,n){},YNMu:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"addTrackers",(function(){return te})),n.d(r,"initialize",(function(){return ne})),n.d(r,"ga",(function(){return re})),n.d(r,"set",(function(){return oe})),n.d(r,"send",(function(){return ae})),n.d(r,"pageview",(function(){return ie})),n.d(r,"modalview",(function(){return ce})),n.d(r,"timing",(function(){return le})),n.d(r,"event",(function(){return ue})),n.d(r,"exception",(function(){return se})),n.d(r,"plugin",(function(){return fe})),n.d(r,"outboundLink",(function(){return pe})),n.d(r,"testModeAPI",(function(){return be})),n.d(r,"default",(function(){return ge}));var o=n("NRgD"),a=n("KDdl"),i=n("Uu+x"),c=n.n(i),l=n("5DC4"),u=n.n(l),s=n("JMeT"),f=n("aEzk"),p=n("dX2r"),b=n("tOEL"),g=n("xRJz"),y=n.n(g);function d(e){console.warn("[react-ga]",e)}function O(e){return(O="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){A(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function j(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(e,t){return(k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function P(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=S(e);if(t){var o=S(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return x(this,n)}}function x(e,t){return!t||"object"!==O(t)&&"function"!==typeof t?E(e):t}function E(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function A(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var C="_blank",N=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(a,e);var t,n,r,o=P(a);function a(){var e;j(this,a);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return A(E(e=o.call.apply(o,[this].concat(n))),"handleClick",(function(t){var n=e.props,r=n.target,o=n.eventLabel,i=n.to,c=n.onClick,l=n.trackerNames,u={label:o},s=r!==C,f=!(t.ctrlKey||t.shiftKey||t.metaKey||1===t.button);s&&f?(t.preventDefault(),a.trackLink(u,(function(){window.location.href=i}),l)):a.trackLink(u,(function(){}),l),c&&c(t)})),e}return t=a,(n=[{key:"render",value:function(){var e=this.props,t=e.to,n=e.target,r=v(v({},m(e,["to","target"])),{},{target:n,href:t,onClick:this.handleClick});return n===C&&(r.rel="".concat(r.rel?r.rel:""," noopener noreferrer").trim()),delete r.eventLabel,delete r.trackerNames,c.a.createElement("a",r)}}])&&w(t.prototype,n),r&&w(t,r),a}(i.Component);A(N,"trackLink",(function(){d("ga tracking not enabled")})),N.propTypes={eventLabel:y.a.string.isRequired,target:y.a.string,to:y.a.string,onClick:y.a.func,trackerNames:y.a.arrayOf(y.a.string)},N.defaultProps={target:null,to:null,onClick:null,trackerNames:null};function D(e){return"string"===typeof(t=e)&&-1!==t.indexOf("@")?(d("This arg looks like an email address, redacting."),"REDACTED (Potential Email Address)"):e;var t}function _(e){return e&&e.toString().replace(/^\s+|\s+$/g,"")}var T=/^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;function q(e){return _(e).replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g,(function(e,t,n){return t>0&&t+e.length!==n.length&&e.search(T)>-1&&":"!==n.charAt(t-2)&&("-"!==n.charAt(t+e.length)||"-"===n.charAt(t-1))&&n.charAt(t-1).search(/[^\s-]/)<0?e.toLowerCase():e.substr(1).search(/[A-Z]|\../)>-1?e:e.charAt(0).toUpperCase()+e.substr(1)}))}var I=!1;function L(e){console.info("[react-ga]",e)}var R=[],z={calls:R,ga:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];R.push([].concat(t))},resetCalls:function(){R.length=0}};function M(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function J(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function K(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function G(e){return(G="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function U(e){return function(e){if(Array.isArray(e))return B(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return B(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return B(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function B(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var F="undefined"===typeof window||"undefined"===typeof document,V=!1,X=!0,Y=!1,Z=!0,$=!0,H=function(){var e;return Y?z.ga.apply(z,arguments):!F&&(window.ga?(e=window).ga.apply(e,arguments):d("ReactGA.initialize must be called first or GoogleAnalytics should be loaded manually"))};function W(e){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=e||"";return(arguments.length>1?arguments[1]:void 0)&&(n=q(e)),t&&(n=D(n)),n}(e,X,$)}function Q(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=n[0];"string"===typeof o?(!Z&&Array.isArray(e)||H.apply(void 0,n),Array.isArray(e)&&e.forEach((function(e){H.apply(void 0,U(["".concat(e,".").concat(o)].concat(n.slice(1))))}))):d("ga command must be a string")}function ee(e,t){e?t&&(t.debug&&!0===t.debug&&(V=!0),!1===t.titleCase&&(X=!1),!1===t.redactEmail&&($=!1),t.useExistingGa)||(t&&t.gaOptions?H("create",e,t.gaOptions):H("create",e,"auto")):d("gaTrackingID is required in initialize()")}function te(e,t){return Array.isArray(e)?e.forEach((function(e){"object"===G(e)?ee(e.trackingId,e):d("All configs must be an object")})):ee(e,t),!0}function ne(e,t){if(t&&!0===t.testMode)Y=!0;else{if(F)return;t&&!0===t.standardImplementation||function(e){if(!I){I=!0;var t="https://www.google-analytics.com/analytics.js";e&&e.gaAddress?t=e.gaAddress:e&&e.debug&&(t="https://www.google-analytics.com/analytics_debug.js");var n,r,o,a,i,c,l,u=e&&e.onerror;n=window,r=document,o="script",a=t,i="ga",n.GoogleAnalyticsObject=i,n.ga=n.ga||function(){(n.ga.q=n.ga.q||[]).push(arguments)},n.ga.l=1*new Date,c=r.createElement(o),l=r.getElementsByTagName(o)[0],c.async=1,c.src=a,c.onerror=u,l.parentNode.insertBefore(c,l)}}(t)}Z=!t||"boolean"!==typeof t.alwaysSendToDefaultTracker||t.alwaysSendToDefaultTracker,te(e,t)}function re(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length>0&&(H.apply(void 0,t),V&&(L("called ga('arguments');"),L("with arguments: ".concat(JSON.stringify(t))))),window.ga}function oe(e,t){e?"object"===G(e)?(0===Object.keys(e).length&&d("empty `fieldsObject` given to .set()"),Q(t,"set",e),V&&(L("called ga('set', fieldsObject);"),L("with fieldsObject: ".concat(JSON.stringify(e))))):d("Expected `fieldsObject` arg to be an Object"):d("`fieldsObject` is required in .set()")}function ae(e,t){Q(t,"send",e),V&&(L("called ga('send', fieldObject);"),L("with fieldObject: ".concat(JSON.stringify(e))),L("with trackers: ".concat(JSON.stringify(t))))}function ie(e,t,n){if(e){var r=_(e);if(""!==r){var o={};if(n&&(o.title=n),Q(t,"send",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?J(Object(n),!0).forEach((function(t){K(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):J(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({hitType:"pageview",page:r},o)),V){L("called ga('send', 'pageview', path);");var a="";n&&(a=" and title: ".concat(n)),L("with path: ".concat(r).concat(a))}}else d("path cannot be an empty string in .pageview()")}else d("path is required in .pageview()")}function ce(e,t){if(e){var n,r="/"===(n=_(e)).substring(0,1)?n.substring(1):n;if(""!==r){var o="/modal/".concat(r);Q(t,"send","pageview",o),V&&(L("called ga('send', 'pageview', path);"),L("with path: ".concat(o)))}else d("modalName cannot be an empty string or a single / in .modalview()")}else d("modalName is required in .modalview(modalName)")}function le(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.category,n=e.variable,r=e.value,o=e.label,a=arguments.length>1?arguments[1]:void 0;if(t&&n&&"number"===typeof r){var i={hitType:"timing",timingCategory:W(t),timingVar:W(n),timingValue:r};o&&(i.timingLabel=W(o)),ae(i,a)}else d("args.category, args.variable AND args.value are required in timing() AND args.value has to be a number")}function ue(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.category,n=e.action,r=e.label,o=e.value,a=e.nonInteraction,i=e.transport,c=M(e,["category","action","label","value","nonInteraction","transport"]),l=arguments.length>1?arguments[1]:void 0;if(t&&n){var u={hitType:"event",eventCategory:W(t),eventAction:W(n)};r&&(u.eventLabel=W(r)),"undefined"!==typeof o&&("number"!==typeof o?d("Expected `args.value` arg to be a Number."):u.eventValue=o),"undefined"!==typeof a&&("boolean"!==typeof a?d("`args.nonInteraction` must be a boolean."):u.nonInteraction=a),"undefined"!==typeof i&&("string"!==typeof i?d("`args.transport` must be a string."):(-1===["beacon","xhr","image"].indexOf(i)&&d("`args.transport` must be either one of these values: `beacon`, `xhr` or `image`"),u.transport=i)),Object.keys(c).filter((function(e){return"dimension"===e.substr(0,"dimension".length)})).forEach((function(e){u[e]=c[e]})),Object.keys(c).filter((function(e){return"metric"===e.substr(0,"metric".length)})).forEach((function(e){u[e]=c[e]})),ae(u,l)}else d("args.category AND args.action are required in event()")}function se(e,t){var n=e.description,r=e.fatal,o={hitType:"exception"};n&&(o.exDescription=W(n)),"undefined"!==typeof r&&("boolean"!==typeof r?d("`args.fatal` must be a boolean."):o.exFatal=r),ae(o,t)}var fe={require:function(e,t,n){if(e){var r=_(e);if(""!==r){var o=n?"".concat(n,".require"):"require";if(t){if("object"!==G(t))return void d("Expected `options` arg to be an Object");0===Object.keys(t).length&&d("Empty `options` given to .require()"),re(o,r,t),V&&L("called ga('require', '".concat(r,"', ").concat(JSON.stringify(t)))}else re(o,r),V&&L("called ga('require', '".concat(r,"');"))}else d("`name` cannot be an empty string in .require()")}else d("`name` is required in .require()")},execute:function(e,t){for(var n,r,o=arguments.length,a=new Array(o>2?o-2:0),i=2;i<o;i++)a[i-2]=arguments[i];if(1===a.length?n=a[0]:(r=a[0],n=a[1]),"string"!==typeof e)d("Expected `pluginName` arg to be a String.");else if("string"!==typeof t)d("Expected `action` arg to be a String.");else{var c="".concat(e,":").concat(t);n=n||null,r&&n?(re(c,r,n),V&&(L("called ga('".concat(c,"');")),L('actionType: "'.concat(r,'" with payload: ').concat(JSON.stringify(n))))):n?(re(c,n),V&&(L("called ga('".concat(c,"');")),L("with payload: ".concat(JSON.stringify(n))))):(re(c),V&&L("called ga('".concat(c,"');")))}}};function pe(e,t,n){if("function"===typeof t)if(e&&e.label){var r={hitType:"event",eventCategory:"Outbound",eventAction:"Click",eventLabel:W(e.label)},o=!1,a=setTimeout((function(){o=!0,t()}),250);r.hitCallback=function(){clearTimeout(a),o||t()},ae(r,n)}else d("args.label is required in outboundLink()");else d("hitCallback function is required")}var be=z,ge={initialize:ne,ga:re,set:oe,send:ae,pageview:ie,modalview:ce,timing:le,event:ue,exception:se,plugin:fe,outboundLink:pe,testModeAPI:z};function ye(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function de(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ye(Object(n),!0).forEach((function(t){Oe(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ye(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Oe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}N.origTrackLink=N.trackLink,N.trackLink=pe;var he=N,ve=de(de({},r),{},{OutboundLink:he}),me=n("Kpam"),je=n("0kKT"),we=n.n(je),ke=n("CVov"),Pe=n("dRFC"),xe=n("HmUp"),Ee=n("GgN4"),Se=n("geb+"),Ae=n("cqdE"),Ce=n("4aw/"),Ne=n("A5sE"),De=n("rOcY"),_e=n("sPBk"),Te=function(e){var t=Object(ke.e)(),n=t.colorMode,r=t.toggleColorMode,a={backgroundColor:"gray.800"};return Object(o.jsxs)(Pe.a,{padding:"9px 0",align:"center",children:[De.b.map((function(e,t){return Object(o.jsx)(xe.a,{size:"xs",paddingRight:"16px",fontWeight:"bold",color:"gray.200",children:Object(o.jsx)(Ee.a,{as:we.a,href:e.href||"#",children:e.name})},t)})),Object(o.jsx)(Se.a,{}),Object(o.jsxs)(Ae.a,{size:"sm",variant:"ghost",color:"gray.200",background:"black",spacing:"0.2rem",children:[Object(o.jsx)(Ce.a,{icon:"light"===n?Object(o.jsx)(Ne.f,{}):Object(o.jsx)(Ne.d,{}),onClick:r,_hover:a}),Object(o.jsx)(Ce.a,{icon:Object(o.jsx)(Ne.g,{}),onClick:function(){return window.open("https://twitter.com/".concat(_e.twitter),"_blank")},_hover:a})]})]})},qe=n("MmsZ"),Ie=Object(qe.a)({fonts:{heading:"Inter, Noto Sans KR",body:"Inter, Noto Sans KR"},initialColorMode:"dark"});n("C7TM"),n("M1Cj");function Le(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Re(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Le(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Le(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.default=function(e){var t=e.Component,n=e.pageProps,r=Object(s.useRouter)();return i.useEffect((function(){window.__typedsh_analytics||(ve.initialize(_e.analytics),window.__typedsh_analytics=1),ve.pageview(window.location.pathname),r.events.on("beforeHistoryChange",(function(e){ve.pageview(e)}))}),[]),Object(o.jsxs)(p.a,{theme:Ie,children:[Object(o.jsx)(f.a,{title:_e.name,description:"Could you call us gentlemen?"}),Object(o.jsx)(u.a,{children:Object(o.jsx)("link",{rel:"shortcut icon",href:"/static/saebasol.icon.png"})}),Object(o.jsx)(b.a,{background:"black",marginBottom:"25px",children:Object(o.jsx)(me.a,{children:Object(o.jsx)(Te,{})})}),Object(o.jsx)(t,Re({},n))]})}},"h/I+":function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("Uu+x"),o=n.n(r),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=o.a.createContext&&o.a.createContext(a),c=function(){return(c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function u(e){return e&&e.map((function(e,t){return o.a.createElement(e.tag,c({key:t},e.attr),u(e.child))}))}function s(e){return function(t){return o.a.createElement(f,c({attr:c({},e.attr)},t),u(e.child))}}function f(e){var t=function(t){var n,r=e.attr,a=e.size,i=e.title,u=l(e,["attr","size","title"]),s=a||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),o.a.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,u,{className:n,style:c(c({color:e.color||t.color},t.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),i&&o.a.createElement("title",null,i),e.children)};return void 0!==i?o.a.createElement(i.Consumer,null,(function(e){return t(e)})):t(a)}},tRiz:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("YNMu")}])}},[[0,0,1,6,2,4,3,5,7,10]]]);