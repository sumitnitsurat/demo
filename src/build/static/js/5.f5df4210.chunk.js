(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[5],{120:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=(a(72),a(14)),o=a(40),l=a(38),s=function(){var e=n.useState(""),t=Object(i.a)(e,2),a=t[0],r=t[1];return n.createElement(n.Fragment,null,n.createElement("p",null,"Create instant session for anyone to share and join via link"),n.createElement(l.a,{className:"bg-app",size:"lg",style:{width:"100%"},onClick:function(e){e.preventDefault();var t=Object(o.b)();r(t)}},"Create New Session"),a&&n.createElement("div",{className:"mt-2"},"Click ",n.createElement("a",{href:a},"here")," to enter the room. Share ",a," with your collegues and friends to interact."))},c=function(){return r.a.createElement("section",{className:"bg-app p-5"},r.a.createElement("div",{className:"container mt-4"},r.a.createElement("p",{className:"text-center mb-5"},r.a.createElement("h3",{className:"text-white"},"Namaste Features")),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4 col-12 text-center mt-2"},r.a.createElement("div",{className:"col-md-6 d-block ml-auto mr-auto"},r.a.createElement("i",{className:"fa fa-video fa-3x text-white p-5",style:{border:"1px solid #fff",borderRadius:"50%"}})),r.a.createElement("div",{className:"text-white p-2"},"Video Calls")),r.a.createElement("div",{className:"col-md-4 col-12 text-center mt-2"},r.a.createElement("div",{className:"col-md-6 d-block ml-auto mr-auto"},r.a.createElement("i",{className:"fas fa-microphone-alt fa-3x text-white p-5",style:{border:"1px solid #fff",borderRadius:"50%"}})),r.a.createElement("div",{className:"text-white p-2"},"Audio Calls")),r.a.createElement("div",{className:"col-md-4 col-12 text-center mt-2"},r.a.createElement("div",{className:"col-md-6 d-block ml-auto mr-auto"},r.a.createElement("i",{className:"fa fa-desktop fa-3x text-white p-5",style:{border:"1px solid #fff",borderRadius:"50%"}})),r.a.createElement("div",{className:"text-white p-2"},"Share Screen"))),r.a.createElement("div",{className:"row mt-0 mt-sm-5"},r.a.createElement("div",{className:"clearfix col-md-1 d-none d-sm-block"}),r.a.createElement("div",{className:"col-md-5 col-12 text-center mt-2"},r.a.createElement("div",{className:"col-md-6 d-block ml-auto mr-auto"},r.a.createElement("i",{className:"fa fa-compact-disc fa-3x text-white p-5",style:{border:"1px solid #fff",borderRadius:"50%"}})),r.a.createElement("div",{className:"text-white p-2"},"Record Video/Record Screen")),r.a.createElement("div",{className:"col-md-4 col-12 text-center mt-2"},r.a.createElement("div",{className:"col-md-6 d-block ml-auto mr-auto"},r.a.createElement("i",{className:"fa fa-comment fa-3x text-white p-5",style:{border:"1px solid #fff",borderRadius:"50%"}})),r.a.createElement("div",{className:"text-white p-2"},"Chat Coversation")))))},m=a(37),u=a(44),h=function(){var e=n.useState(""),t=Object(i.a)(e,2),a=t[0],r=t[1],s=n.useState(""),c=Object(i.a)(s,2),m=c[0],u=c[1],h=n.useState(void 0),d=Object(i.a)(h,2),f=d[0],p=d[1],g="".concat(window.location.origin,"/private/").concat(a,"/").concat(f," }");return n.createElement(n.Fragment,null,n.createElement("p",null,"Create secure meeting to talk with your family, friends and collegues."),n.createElement("div",{className:"text-center"},n.createElement("span",{className:"form-text small text-danger",id:"err-msg"})),n.createElement("div",{className:"mb-3"},n.createElement("label",{for:"room-name"},"Room Name"),n.createElement("input",{type:"text",onChange:function(e){return r(e.target.value)},className:"form-control rounded-0",placeholder:"Room Name"})),n.createElement("div",{className:"mb-3"},n.createElement("label",{for:"your-name"},"Enter As"),n.createElement("input",{type:"text",onChange:function(e){return u(e.target.value)},className:"form-control rounded-0",placeholder:"Your Name"})),n.createElement("div",{className:"mb-3"},n.createElement(l.a,{className:"bg-app",size:"lg",style:{width:"100%"},onClick:function(e){e.preventDefault();var t=Object(o.a)(a);console.log("makign room",a,m,t),p(t)}},"Create Secure Session")),!!a&&!!f&&n.createElement("div",{className:"mt-2 text-center"},n.createElement("p",null,"Hello ",m," !!! Click ",n.createElement("a",{href:g},"here")," to enter the room."),n.createElement("p",null,"Share ",n.createElement("b",null,"Room Name:")," ",a," and ",n.createElement("b",null,"Code:"),f," with your collegues and friends to interact.")))},d=a(2);t.default=function(e){var t=Object(d.f)();return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,null,r.a.createElement(l.a,{variant:"outline-info",onClick:function(){return t.push("/private")}},"Join Secure Meeting")),r.a.createElement("div",{className:"container mt-5",id:"room-create"},r.a.createElement("div",{className:"col-12 h2 mt-5 text-center"},r.a.createElement("img",{width:"100",src:"/assets/logo.png"})),r.a.createElement("div",{className:"row mt-2"},r.a.createElement("div",{className:"col-12 col-md-5 mt-5 col-sm-12 mb-3 p-5"},r.a.createElement(s,null)),r.a.createElement("div",{className:"vl col-md-2 d-none d-sm-none d-md-block mt-4 mb-4 offset-md-1"}),r.a.createElement("div",{className:"col-12 col-md-4 col-sm-12 mt-4"},r.a.createElement(h,null)))),r.a.createElement(c,null),r.a.createElement("div",{className:"container-fluid",id:"username-set",hidden:!0},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 h4 mt-5 text-center"},"Your Name")),r.a.createElement("div",{className:"row mt-2"},r.a.createElement("div",{className:"col-12 text-center"},r.a.createElement("span",{className:"form-text small text-danger",id:"err-msg-username"})),r.a.createElement("div",{className:"col-12 col-md-4 offset-md-4 mb-3"},r.a.createElement("label",{for:"username"},"Your Name"),r.a.createElement("input",{type:"text",id:"username",className:"form-control rounded-0",placeholder:"Your Name"})),r.a.createElement("div",{className:"col-12 col-md-4 offset-md-4 mb-3"},r.a.createElement("button",{id:"enter-room",className:"btn btn-block rounded-0 btn-info"},"Enter Room")))),"/"===e.location.pathname&&!e.location.search&&r.a.createElement(u.a,null))}},37:function(e,t,a){"use strict";var n=a(0),r=a(118);t.a=function(e){var t=e.children;return n.createElement(r.a,{className:"justify-content-between bg-app",expand:"lg",sticky:"top",variant:"light"},n.createElement(r.a.Brand,{href:"/"},n.createElement("span",{style:{color:"#fff",fontWeight:600}},"Namaste Talk")),t||null)}},40:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return l})),a.d(t,"c",(function(){return s}));var n=a(43),r=a.n(n),i=function(){return Math.random().toString(16).slice(2).substring(0,8)},o=function(){var e=i();return sessionStorage.setItem("username","Anonymous"),"".concat(window.location.origin,"/").concat(e.trim().replace(" ","_"),"_").concat(i())},l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Anonymous";try{var a="".concat(i().trim().replace(" ","_")).concat(i());sessionStorage.setItem("username",t),console.log(a,"room");var n=new r.a(e);console.log(n);var o=n.encodeHex(a);return console.log(o),o}catch(l){console.log("in erorr",l)}},s=function(e,t){console.log(e,t);var a=new r.a(e).decodeHex(t);return console.log(a,"roomcod"),a}},43:function(e,t,a){var n,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[t],void 0===(i="function"===typeof(n=function(e){"use strict";function t(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}e.__esModule=!0,e.onlyChars=e.withoutChars=e.keepUnique=e.default=void 0;var a=function(){function e(e,a,c,m){if(void 0===e&&(e=""),void 0===a&&(a=0),void 0===c&&(c="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"),void 0===m&&(m="cfhistuCFHISTU"),this.minLength=a,"number"!=typeof a)throw new TypeError("Hashids: Provided 'minLength' has to be a number (is "+typeof a+")");if("string"!=typeof e)throw new TypeError("Hashids: Provided 'salt' has to be a string (is "+typeof e+")");if("string"!=typeof c)throw new TypeError("Hashids: Provided alphabet has to be a string (is "+typeof c+")");var h=Array.from(e),d=Array.from(c),f=Array.from(m);this.salt=h;var p=o(d);if(p.length<n)throw new Error("Hashids: alphabet must contain at least "+n+" unique characters, provided: "+p);this.alphabet=l(p,f);var g,E,N,y=s(f,p);this.seps=u(y,h),(0===this.seps.length||this.alphabet.length/this.seps.length>r)&&(g=Math.ceil(this.alphabet.length/r))>this.seps.length&&(E=g-this.seps.length,(N=this.seps).push.apply(N,t(this.alphabet.slice(0,E))),this.alphabet=this.alphabet.slice(E)),this.alphabet=u(this.alphabet,h);var w=Math.ceil(this.alphabet.length/i);this.alphabet.length<3?(this.guards=this.seps.slice(0,w),this.seps=this.seps.slice(w)):(this.guards=this.alphabet.slice(0,w),this.alphabet=this.alphabet.slice(w)),this.guardsRegExp=v(this.guards),this.sepsRegExp=v(this.seps),this.allowedCharsRegExp=b([].concat(t(this.alphabet),t(this.guards),t(this.seps)))}var a=e.prototype;return a.encode=function(e){for(var a=arguments.length,n=new Array(a>1?a-1:0),r=1;r<a;r++)n[r-1]=arguments[r];var i="";return(n=Array.isArray(e)?e:[].concat(t(null!=e?[e]:[]),t(n))).length?(n.every(c)||(n=n.map((function(e){return"bigint"==typeof e||"number"==typeof e?e:p(String(e))}))),n.every(m)?this._encode(n).join(""):i):i},a.decode=function(e){return e&&"string"==typeof e&&0!==e.length?this._decode(e):[]},a.encodeHex=function(e){switch(typeof e){case"bigint":e=e.toString(16);break;case"string":if(!/^[0-9a-fA-F]+$/.test(e))return"";break;default:throw new Error("Hashids: The provided value is neither a string, nor a BigInt (got: "+typeof e+")")}var t=g(e,12,(function(e){return parseInt("1"+e,16)}));return this.encode(t)},a.decodeHex=function(e){return this.decode(e).map((function(e){return e.toString(16).slice(1)})).join("")},a._encode=function(e){var a=this,n=this.alphabet,r=e.reduce((function(e,t,a){return e+("bigint"==typeof t?Number(t%BigInt(a+100)):t%(a+100))}),0),i=[n[r%n.length]],o=i.slice(),l=this.seps,s=this.guards;if(e.forEach((function(r,s){var c,m=o.concat(a.salt,n);n=u(n,m);var d=h(r,n);if((c=i).push.apply(c,t(d)),s+1<e.length){var f=d[0].codePointAt(0)+s,p="bigint"==typeof r?Number(r%BigInt(f)):r%f;i.push(l[p%l.length])}})),i.length<this.minLength){var c=(r+i[0].codePointAt(0))%s.length;if(i.unshift(s[c]),i.length<this.minLength){var m=(r+i[2].codePointAt(0))%s.length;i.push(s[m])}}for(var d=Math.floor(n.length/2);i.length<this.minLength;){var f,p;n=u(n,n),(f=i).unshift.apply(f,t(n.slice(d))),(p=i).push.apply(p,t(n.slice(0,d)));var g=i.length-this.minLength;if(g>0){var v=g/2;i=i.slice(v,v+this.minLength)}}return i},a.isValidId=function(e){return this.allowedCharsRegExp.test(e)},a._decode=function(e){if(!this.isValidId(e))throw new Error("The provided ID ("+e+") is invalid, as it contains characters that do not exist in the alphabet ("+this.guards.join("")+this.seps.join("")+this.alphabet.join("")+")");var a=e.split(this.guardsRegExp),n=a[3===a.length||2===a.length?1:0];if(0===n.length)return[];var r=n[Symbol.iterator]().next().value,i=n.slice(r.length).split(this.sepsRegExp),o=this.alphabet,l=[],s=i,c=Array.isArray(s),m=0;for(s=c?s:s[Symbol.iterator]();;){var h;if(c){if(m>=s.length)break;h=s[m++]}else{if((m=s.next()).done)break;h=m.value}var f=h,p=u(o,[r].concat(t(this.salt),t(o)).slice(0,o.length));l.push(d(Array.from(f),p)),o=p}return this._encode(l).join("")!==e?[]:l},e}();e.default=a;var n=16,r=3.5,i=12,o=function(e){return Array.from(new Set(e))};e.keepUnique=o;var l=function(e,t){return e.filter((function(e){return!t.includes(e)}))};e.withoutChars=l;var s=function(e,t){return e.filter((function(e){return t.includes(e)}))};e.onlyChars=s;var c=function(e){return"bigint"==typeof e||!Number.isNaN(Number(e))&&Math.floor(Number(e))===e},m=function(e){return"bigint"==typeof e||e>=0&&Number.isSafeInteger(e)};function u(e,t){if(0===t.length)return e;for(var a,n=e.slice(),r=n.length-1,i=0,o=0;r>0;r--,i++){o+=a=t[i%=t.length].codePointAt(0);var l=(a+i+o)%r,s=n[r],c=n[l];n[l]=s,n[r]=c}return n}var h=function(e,t){var a=[];if("bigint"==typeof e){var n=BigInt(t.length);do{a.unshift(t[Number(e%n)]),e/=n}while(e>BigInt(0))}else do{a.unshift(t[e%t.length]),e=Math.floor(e/t.length)}while(e>0);return a},d=function(e,t){return e.reduce((function(a,n){var r=t.indexOf(n);if(-1===r)throw new Error("The provided ID ("+e.join("")+") is invalid, as it contains characters that do not exist in the alphabet ("+t.join("")+")");if("bigint"==typeof a)return a*BigInt(t.length)+BigInt(r);var i=a*t.length+r;if(Number.isSafeInteger(i))return i;if("function"==typeof BigInt)return BigInt(a)*BigInt(t.length)+BigInt(r);throw new Error("Unable to decode the provided string, due to lack of support for BigInt numbers in the current environment")}),0)},f=/^\+?[0-9]+$/,p=function(e){return f.test(e)?parseInt(e,10):NaN},g=function(e,t,a){return Array.from({length:Math.ceil(e.length/t)},(function(n,r){return a(e.slice(r*t,(r+1)*t))}))},v=function(e){return new RegExp(e.map((function(e){return E(e)})).sort((function(e,t){return t.length-e.length})).join("|"))},b=function(e){return new RegExp("^["+e.map((function(e){return E(e)})).sort((function(e,t){return t.length-e.length})).join("")+"]+$")},E=function(e){return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")}})?n.apply(t,r):n)||(e.exports=i)},44:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(0),r=a(118),i=function(){return n.createElement(r.a,{className:"justify-content-around align-items-center",expand:"lg",sticky:"bottom",bg:"dark",variant:"dark"},n.createElement("div",{className:"h6",style:{color:"#fff",fontWeight:600}},"\xa9 Namaste Talk 2020"),n.createElement("div",{className:"mr-3 text-white d-inline-block"},n.createElement("span",{className:"h6"},"Join us on Telegram: "),n.createElement("a",{href:"https://t.me/joinchat/HT7EphxPod6Qnz2GzzRSKg",target:"_blank"},n.createElement("i",{className:"fab fa-telegram-plane h5 text-white ml-2","aria-hidden":"true"}))),n.createElement("span",{className:"h6",style:{color:"#fff",fontWeight:600}},"Contact: ",n.createElement("a",{className:"text-white",href:"mailto:admin@namaste.ind.in"},"admin@namaste.ind.in")))}},72:function(e,t,a){}}]);
//# sourceMappingURL=5.f5df4210.chunk.js.map