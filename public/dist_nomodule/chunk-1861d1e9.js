System.register(["./chunk-1798c4f7.js","./chunk-84d12337.js"],function(e,t){"use strict";var n,r,o,i,u,c,a,s,d,f,l,h,p,y,b,v;return{setters:[function(e){n=e.c,r=e.a,o=e.d,i=e.e,u=e.b,c=e.h,a=e.i,s=e.s},function(e){d=e.f,f=e.g,l=e.h,h=e.i,p=e.j,y=e.k,b=e.l,v=e.m}],execute:function(){e("b",function(e){return function(t){return function(a){function s(){return r(this,s),o(this,i(s).apply(this,arguments))}return n(s,t),u(s,[{key:"connectedCallback",value:function(){var t=this;c(i(s.prototype),"connectedCallback",this)&&c(i(s.prototype),"connectedCallback",this).call(this),this._storeUnsubscribe=e.subscribe(function(){return t.stateChanged(e.getState())}),this.stateChanged(e.getState())}},{key:"disconnectedCallback",value:function(){this._storeUnsubscribe(),c(i(s.prototype),"disconnectedCallback",this)&&c(i(s.prototype),"disconnectedCallback",this).call(this)}},{key:"stateChanged",value:function(e){}}]),s}()}});var w=function(e){var t,n=e.Symbol;return"function"==typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}("undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:void 0!==t?t:Function("return this")()),g=function(){return Math.random().toString(36).substring(7).split("").join(".")},E={INIT:"@@redux/INIT"+g(),REPLACE:"@@redux/REPLACE"+g(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+g()}};function m(e){if("object"!==a(e)||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function O(e){"undefined"!=typeof console&&"function"==typeof console.error&&console.error(e);try{throw new Error(e)}catch(e){}}function k(e,t){var n=t&&t.type;return"Given "+(n&&'action "'+String(n)+'"'||"an action")+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function N(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce(function(e,t){return function(){return e(t.apply(void 0,arguments))}})}function x(){}function S(e){return function(t){var n=t.dispatch,r=t.getState;return function(t){return function(o){return"function"==typeof o?o(n,r,e):t(o)}}}}"production"!==process.env.NODE_ENV&&"string"==typeof x.name&&"isCrushed"!==x.name&&O('You are currently using minified code outside of NODE_ENV === "production". This means that you are running a slower development build of Redux. You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify or setting mode to production in webpack (https://webpack.js.org/concepts/mode/) to ensure you have the correct code for your production build.');var I=S();I.withExtraArgument=S;var T=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||N;e("a",function e(t,n,r){var o;if("function"==typeof n&&"function"==typeof r||"function"==typeof r&&"function"==typeof arguments[3])throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function");if("function"==typeof n&&void 0===r&&(r=n,n=void 0),void 0!==r){if("function"!=typeof r)throw new Error("Expected the enhancer to be a function.");return r(e)(t,n)}if("function"!=typeof t)throw new Error("Expected the reducer to be a function.");var i=t,u=n,c=[],s=c,d=!1;function f(){s===c&&(s=c.slice())}function l(){if(d)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return u}function h(e){if("function"!=typeof e)throw new Error("Expected the listener to be a function.");if(d)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");var t=!0;return f(),s.push(e),function(){if(t){if(d)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");t=!1,f();var n=s.indexOf(e);s.splice(n,1)}}}function p(e){if(!m(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(d)throw new Error("Reducers may not dispatch actions.");try{d=!0,u=i(u,e)}finally{d=!1}for(var t=c=s,n=0;n<t.length;n++)(0,t[n])();return e}return p({type:E.INIT}),(o={dispatch:p,subscribe:h,getState:l,replaceReducer:function(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");i=e,p({type:E.REPLACE})}})[w]=function(){var e,t=h;return(e={subscribe:function(e){if("object"!==a(e)||null===e)throw new TypeError("Expected the observer to be an object.");function n(){e.next&&e.next(l())}return n(),{unsubscribe:t(n)}}})[w]=function(){return this},e},o}(function(e,t){return e},T(function(e){return function(t){return function(n,r){var o={},i=t(n,r);return Object.assign({},i,{addReducers:function(t){var n=Object.assign({},o,t);this.replaceReducer(e(o=n))}})}}}(function(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var o=t[r];"production"!==process.env.NODE_ENV&&void 0===e[o]&&O('No reducer provided for key "'+o+'"'),"function"==typeof e[o]&&(n[o]=e[o])}var i,u,c=Object.keys(n);"production"!==process.env.NODE_ENV&&(i={});try{!function(e){Object.keys(e).forEach(function(t){var n=e[t];if(void 0===n(void 0,{type:E.INIT}))throw new Error('Reducer "'+t+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if(void 0===n(void 0,{type:E.PROBE_UNKNOWN_ACTION()}))throw new Error('Reducer "'+t+"\" returned undefined when probed with a random type. Don't try to handle "+E.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')})}(n)}catch(e){u=e}return function(e,t){if(void 0===e&&(e={}),u)throw u;if("production"!==process.env.NODE_ENV){var r=function(e,t,n,r){var o=Object.keys(t),i=n&&n.type===E.INIT?"preloadedState argument passed to createStore":"previous state received by the reducer";if(0===o.length)return"Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";if(!m(e))return"The "+i+' has unexpected type of "'+{}.toString.call(e).match(/\s([a-z|A-Z]+)/)[1]+'". Expected argument to be an object with the following keys: "'+o.join('", "')+'"';var u=Object.keys(e).filter(function(e){return!t.hasOwnProperty(e)&&!r[e]});return u.forEach(function(e){r[e]=!0}),n&&n.type===E.REPLACE?void 0:u.length>0?"Unexpected "+(u.length>1?"keys":"key")+' "'+u.join('", "')+'" found in '+i+'. Expected to find one of the known reducer keys instead: "'+o.join('", "')+'". Unexpected keys will be ignored.':void 0}(e,n,t,i);r&&O(r)}for(var o=!1,a={},s=0;s<c.length;s++){var d=c[s],f=n[d],l=e[d],h=f(l,t);if(void 0===h){var p=k(d,t);throw new Error(p)}a[d]=h,o=o||h!==l}return o?a:e}}),function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return function(){var n=e.apply(void 0,arguments),r=function(){throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")},o={getState:n.getState,dispatch:function(){return r.apply(void 0,arguments)}},i=t.map(function(e){return e(o)});return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){j(e,t,n[t])})}return e}({},n,{dispatch:r=N.apply(void 0,i)(n.dispatch)})}}}(I)))).addReducers({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{drawerOpened:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:var n=t.page;return s({},e,{page:n,lastVisitedListPage:"blog"===n?n:e.lastVisitedListPage});case f:return s({},e,{announcerLabel:""});case l:return s({},e,{announcerLabel:t.label});case h:return s({},e,{cartModalOpened:!1});case p:return s({},e,{offline:t.offline});case y:return s({},e,{drawerOpened:t.opened});case b:return s({},e,{snackbarOpened:!0});case v:return s({},e,{snackbarOpened:!1});default:return e}}})}}});
