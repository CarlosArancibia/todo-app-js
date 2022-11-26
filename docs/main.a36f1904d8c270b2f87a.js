(()=>{"use strict";var e={662:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([e.id,"h1 {\n  color: rgb(103, 65, 129);\n}\n",""]);const c=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(i[l]=!0)}for(var s=0;s<e.length;s++){var u=[].concat(e[s]);r&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),t.push(u))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var l=e[c],s=r.base?l[0]+r.base:l[0],u=a[s]||0,d="".concat(s," ").concat(u);a[s]=u+1;var f=n(d),p={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==f)t[f].references++,t[f].updater(p);else{var v=o(p,r);r.byIndex=c,t.splice(c,0,{identifier:d,updater:v,references:1})}i.push(d)}return i}function o(e,t){var n=t.domAPI(t);n.update(e);return function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var l=r(e,o),s=0;s<a.length;s++){var u=n(a[s]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}a=l}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0;var r={};(()=>{function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.d(r,{L:()=>j});var t=function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.task=e,this.id=(new Date).getTime(),this.completed=!1,this.date=new Date}var n,r,o;return n=t,o=[{key:"fromJSON",value:function(e){var n=e.id,r=e.task,o=e.completed,a=e.date,i=new t(r);return i.id=n,i.completed=o,i.date=a,i}}],(r=[{key:"printId",value:function(){console.log("Id ".concat(this.id))}}])&&e(n.prototype,r),o&&e(n,o),Object.defineProperty(n,"prototype",{writable:!1}),t}();function o(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){l=!0,i=e},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw i}}}}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.loadLocalStorage()}var n,r,a;return n=e,(r=[{key:"newTodo",value:function(e){this.todos.push(e),this.saveLocalStorage()}},{key:"deleteTodo",value:function(e){this.todos=this.todos.filter((function(t){return t.id!=e})),this.saveLocalStorage()}},{key:"toggleTodo",value:function(e){var t,n=o(this.todos);try{for(n.s();!(t=n.n()).done;){var r=t.value;if(r.id==e){r.completed=!r.completed;break}}}catch(e){n.e(e)}finally{n.f()}this.saveLocalStorage()}},{key:"deleteCompleted",value:function(){this.todos=this.todos.filter((function(e){return!e.completed})),this.saveLocalStorage()}},{key:"saveLocalStorage",value:function(){localStorage.setItem("todos",JSON.stringify(this.todos))}},{key:"loadLocalStorage",value:function(){var e;this.todos=null!==(e=JSON.parse(localStorage.getItem("todos")))&&void 0!==e?e:[],this.todos=this.todos.map(t.fromJSON)}}])&&i(n.prototype,r),a&&i(n,a),Object.defineProperty(n,"prototype",{writable:!1}),e}(),l=n(379),s=n.n(l),u=n(795),d=n.n(u),f=n(569),p=n.n(f),v=n(565),h=n.n(v),m=n(216),y=n.n(m),g=n(589),b=n.n(g),w=n(662),S={};S.styleTagTransform=b(),S.setAttributes=h(),S.insert=p().bind(null,"head"),S.domAPI=d(),S.insertStyleElement=y();s()(w.Z,S);w.Z&&w.Z.locals&&w.Z.locals;function L(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return k(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return k(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){c=!0,a=e},f:function(){try{i||null==n.return||n.return()}finally{if(c)throw a}}}}function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var E=document,T=E.querySelector(".todo-list"),C=E.querySelector(".new-todo"),x=E.querySelector(".clear-completed"),A=E.querySelector(".filters"),I=E.querySelectorAll(".filtro"),O=function(e){var t=e.task,n=e.completed,r=e.id,o='\n  <li class="'.concat(n?"completed":"",'" data-id="').concat(r,'">\n    <div class="view">\n      <input class="toggle" type="checkbox" ').concat(n?"checked":"",">\n      <label>").concat(t,'</label>\n      <button class="destroy"></button>\n    </div>\n    <input class="edit" value="Create a TodoMVC template">\n  </li>'),a=E.createElement("div");return a.innerHTML=o,T.append(a.firstElementChild),a.firstElementChild};C.addEventListener("keyup",(function(e){if("Enter"===e.key&&C.value.length>0){var n=new t(C.value);j.newTodo(n),O(n),C.value="",console.log(j)}})),T.addEventListener("click",(function(e){var t=e.target.parentElement.parentElement,n=t.getAttribute("data-id");e.target.matches("input")&&(j.toggleTodo(n),t.classList.toggle("completed")),e.target.matches("button")&&(j.deleteTodo(n),T.removeChild(t))})),x.addEventListener("click",(function(e){j.deleteCompleted();for(var t=T.children.length-1;t>=0;t--){var n=T.children[t];n.classList.contains("completed")&&T.removeChild(n)}})),A.addEventListener("click",(function(e){var t=e.target.text;I.forEach((function(e){return e.classList.remove("selected")})),e.target.classList.add("selected");var n,r=L(T.children);try{for(r.s();!(n=r.n()).done;){var o=n.value,a=o.classList.contains("completed");switch(o.classList.remove("hidden"),t){case"Pendientes":a&&o.classList.add("hidden");break;case"Completados":!a&&o.classList.add("hidden")}}}catch(e){r.e(e)}finally{r.f()}}));var j=new c;j.todos.forEach(O)})()})();