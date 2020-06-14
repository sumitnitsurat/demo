(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[7],{117:function(e,t,n){"use strict";n.r(t);var r=n(14),a=n(0),i=n.n(a),o=n(37),s=n(44),l=n(38),c=n(40);t.default=function(){var e=Object(a.useState)(""),t=Object(r.a)(e,2),n=t[0],h=t[1],u=Object(a.useState)(""),f=Object(r.a)(u,2),d=f[0],g=f[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.a,null),i.a.createElement("div",{className:"container-fluid",id:"username-set"},i.a.createElement("div",{className:"row mt-5"},i.a.createElement("div",{className:"col-12 col-md-4 offset-md-4 mb-3"},i.a.createElement("p",null,"Enter room name and meeting code shared to you to join the meeting.")),i.a.createElement("div",{className:"col-12 text-center"},i.a.createElement("span",{className:"form-text small text-danger",id:"err-msg-username"})),i.a.createElement("div",{className:"col-12 col-md-4 offset-md-4 mb-3"},i.a.createElement("label",{for:"username"},"Room Name"),i.a.createElement("input",{type:"text",id:"username",onChange:function(e){return g(e.target.value)},className:"form-control rounded-0",placeholder:"Your Name"})),i.a.createElement("div",{className:"col-12 col-md-4 offset-md-4 mb-3"},i.a.createElement("label",{for:"username"},"Meeting Code"),i.a.createElement("input",{type:"text",id:"username",onChange:function(e){return h(e.target.value)},className:"form-control rounded-0",placeholder:"Your Name"})),i.a.createElement("div",{className:"col-12 col-md-4 offset-md-4 mb-3"},i.a.createElement(l.a,{variant:"primary",size:"lg",style:{width:"100%"},onClick:function(){Object(c.c)(d,n)}},"Join Meeting")))),i.a.createElement(s.a,null))}},37:function(e,t,n){"use strict";var r=n(0),a=n(118);t.a=function(e){var t=e.children;return r.createElement(a.a,{className:"justify-content-between bg-app",expand:"lg",sticky:"top",variant:"light"},r.createElement(a.a.Brand,{href:"/"},r.createElement("span",{style:{color:"#fff",fontWeight:600}},"Namaste Talk")),t||null)}},40:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return l}));var r=n(43),a=n.n(r),i=function(){return Math.random().toString(16).slice(2).substring(0,8)},o=function(){var e=i();return sessionStorage.setItem("username","Anonymous"),"".concat(window.location.origin,"/").concat(e.trim().replace(" ","_"),"_").concat(i())},s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Anonymous";try{var n="".concat(i().trim().replace(" ","_")).concat(i());sessionStorage.setItem("username",t),console.log(n,"room");var r=new a.a(e);console.log(r);var o=r.encodeHex(n);return console.log(o),o}catch(s){console.log("in erorr",s)}},l=function(e,t){console.log(e,t);var n=new a.a(e).decodeHex(t);return console.log(n,"roomcod"),n}},43:function(e,t,n){var r,a,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,a=[t],void 0===(i="function"===typeof(r=function(e){"use strict";function t(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}e.__esModule=!0,e.onlyChars=e.withoutChars=e.keepUnique=e.default=void 0;var n=function(){function e(e,n,c,h){if(void 0===e&&(e=""),void 0===n&&(n=0),void 0===c&&(c="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"),void 0===h&&(h="cfhistuCFHISTU"),this.minLength=n,"number"!=typeof n)throw new TypeError("Hashids: Provided 'minLength' has to be a number (is "+typeof n+")");if("string"!=typeof e)throw new TypeError("Hashids: Provided 'salt' has to be a string (is "+typeof e+")");if("string"!=typeof c)throw new TypeError("Hashids: Provided alphabet has to be a string (is "+typeof c+")");var f=Array.from(e),d=Array.from(c),g=Array.from(h);this.salt=f;var m=o(d);if(m.length<r)throw new Error("Hashids: alphabet must contain at least "+r+" unique characters, provided: "+m);this.alphabet=s(m,g);var p,y,E,w=l(g,m);this.seps=u(w,f),(0===this.seps.length||this.alphabet.length/this.seps.length>a)&&(p=Math.ceil(this.alphabet.length/a))>this.seps.length&&(y=p-this.seps.length,(E=this.seps).push.apply(E,t(this.alphabet.slice(0,y))),this.alphabet=this.alphabet.slice(y)),this.alphabet=u(this.alphabet,f);var N=Math.ceil(this.alphabet.length/i);this.alphabet.length<3?(this.guards=this.seps.slice(0,N),this.seps=this.seps.slice(N)):(this.guards=this.alphabet.slice(0,N),this.alphabet=this.alphabet.slice(N)),this.guardsRegExp=v(this.guards),this.sepsRegExp=v(this.seps),this.allowedCharsRegExp=b([].concat(t(this.alphabet),t(this.guards),t(this.seps)))}var n=e.prototype;return n.encode=function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];var i="";return(r=Array.isArray(e)?e:[].concat(t(null!=e?[e]:[]),t(r))).length?(r.every(c)||(r=r.map((function(e){return"bigint"==typeof e||"number"==typeof e?e:m(String(e))}))),r.every(h)?this._encode(r).join(""):i):i},n.decode=function(e){return e&&"string"==typeof e&&0!==e.length?this._decode(e):[]},n.encodeHex=function(e){switch(typeof e){case"bigint":e=e.toString(16);break;case"string":if(!/^[0-9a-fA-F]+$/.test(e))return"";break;default:throw new Error("Hashids: The provided value is neither a string, nor a BigInt (got: "+typeof e+")")}var t=p(e,12,(function(e){return parseInt("1"+e,16)}));return this.encode(t)},n.decodeHex=function(e){return this.decode(e).map((function(e){return e.toString(16).slice(1)})).join("")},n._encode=function(e){var n=this,r=this.alphabet,a=e.reduce((function(e,t,n){return e+("bigint"==typeof t?Number(t%BigInt(n+100)):t%(n+100))}),0),i=[r[a%r.length]],o=i.slice(),s=this.seps,l=this.guards;if(e.forEach((function(a,l){var c,h=o.concat(n.salt,r);r=u(r,h);var d=f(a,r);if((c=i).push.apply(c,t(d)),l+1<e.length){var g=d[0].codePointAt(0)+l,m="bigint"==typeof a?Number(a%BigInt(g)):a%g;i.push(s[m%s.length])}})),i.length<this.minLength){var c=(a+i[0].codePointAt(0))%l.length;if(i.unshift(l[c]),i.length<this.minLength){var h=(a+i[2].codePointAt(0))%l.length;i.push(l[h])}}for(var d=Math.floor(r.length/2);i.length<this.minLength;){var g,m;r=u(r,r),(g=i).unshift.apply(g,t(r.slice(d))),(m=i).push.apply(m,t(r.slice(0,d)));var p=i.length-this.minLength;if(p>0){var v=p/2;i=i.slice(v,v+this.minLength)}}return i},n.isValidId=function(e){return this.allowedCharsRegExp.test(e)},n._decode=function(e){if(!this.isValidId(e))throw new Error("The provided ID ("+e+") is invalid, as it contains characters that do not exist in the alphabet ("+this.guards.join("")+this.seps.join("")+this.alphabet.join("")+")");var n=e.split(this.guardsRegExp),r=n[3===n.length||2===n.length?1:0];if(0===r.length)return[];var a=r[Symbol.iterator]().next().value,i=r.slice(a.length).split(this.sepsRegExp),o=this.alphabet,s=[],l=i,c=Array.isArray(l),h=0;for(l=c?l:l[Symbol.iterator]();;){var f;if(c){if(h>=l.length)break;f=l[h++]}else{if((h=l.next()).done)break;f=h.value}var g=f,m=u(o,[a].concat(t(this.salt),t(o)).slice(0,o.length));s.push(d(Array.from(g),m)),o=m}return this._encode(s).join("")!==e?[]:s},e}();e.default=n;var r=16,a=3.5,i=12,o=function(e){return Array.from(new Set(e))};e.keepUnique=o;var s=function(e,t){return e.filter((function(e){return!t.includes(e)}))};e.withoutChars=s;var l=function(e,t){return e.filter((function(e){return t.includes(e)}))};e.onlyChars=l;var c=function(e){return"bigint"==typeof e||!Number.isNaN(Number(e))&&Math.floor(Number(e))===e},h=function(e){return"bigint"==typeof e||e>=0&&Number.isSafeInteger(e)};function u(e,t){if(0===t.length)return e;for(var n,r=e.slice(),a=r.length-1,i=0,o=0;a>0;a--,i++){o+=n=t[i%=t.length].codePointAt(0);var s=(n+i+o)%a,l=r[a],c=r[s];r[s]=l,r[a]=c}return r}var f=function(e,t){var n=[];if("bigint"==typeof e){var r=BigInt(t.length);do{n.unshift(t[Number(e%r)]),e/=r}while(e>BigInt(0))}else do{n.unshift(t[e%t.length]),e=Math.floor(e/t.length)}while(e>0);return n},d=function(e,t){return e.reduce((function(n,r){var a=t.indexOf(r);if(-1===a)throw new Error("The provided ID ("+e.join("")+") is invalid, as it contains characters that do not exist in the alphabet ("+t.join("")+")");if("bigint"==typeof n)return n*BigInt(t.length)+BigInt(a);var i=n*t.length+a;if(Number.isSafeInteger(i))return i;if("function"==typeof BigInt)return BigInt(n)*BigInt(t.length)+BigInt(a);throw new Error("Unable to decode the provided string, due to lack of support for BigInt numbers in the current environment")}),0)},g=/^\+?[0-9]+$/,m=function(e){return g.test(e)?parseInt(e,10):NaN},p=function(e,t,n){return Array.from({length:Math.ceil(e.length/t)},(function(r,a){return n(e.slice(a*t,(a+1)*t))}))},v=function(e){return new RegExp(e.map((function(e){return y(e)})).sort((function(e,t){return t.length-e.length})).join("|"))},b=function(e){return new RegExp("^["+e.map((function(e){return y(e)})).sort((function(e,t){return t.length-e.length})).join("")+"]+$")},y=function(e){return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")}})?r.apply(t,a):r)||(e.exports=i)},44:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(0),a=n(118),i=function(){return r.createElement(a.a,{className:"justify-content-around align-items-center",expand:"lg",sticky:"bottom",bg:"dark",variant:"dark"},r.createElement("div",{className:"h6",style:{color:"#fff",fontWeight:600}},"\xa9 Namaste Talk 2020"),r.createElement("div",{className:"mr-3 text-white d-inline-block"},r.createElement("span",{className:"h6"},"Join us on Telegram: "),r.createElement("a",{href:"https://t.me/joinchat/HT7EphxPod6Qnz2GzzRSKg",target:"_blank"},r.createElement("i",{className:"fab fa-telegram-plane h5 text-white ml-2","aria-hidden":"true"}))),r.createElement("span",{className:"h6",style:{color:"#fff",fontWeight:600}},"Contact: ",r.createElement("a",{className:"text-white",href:"mailto:admin@namaste.ind.in"},"admin@namaste.ind.in")))}}}]);
//# sourceMappingURL=7.4016f458.chunk.js.map