!function(e){var n={};function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(r,i,function(n){return e[n]}.bind(null,i));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){const r=new(0,t(1).default),i=document.querySelector(".section-inner").cloneNode(!0),o=i.querySelectorAll(".graf--pre",".graf-after--p");for(let e of o)"pre"!==e.previousSibling.localName&&(e.innerHTML=`\`\`\`<br/>${e.innerHTML}`),"pre"!==e.nextSibling.localName&&(e.innerHTML=`${e.innerHTML}<br/>\`\`\``);const a=i.querySelectorAll(".markup--anchor");for(let e of a){const n=decodeURIComponent(e.href).replace("https://medium.com/r/?url=","");e.href=n}const l=i.querySelectorAll(".markup--code");for(let e of l)"a"===e.firstChild.localName&&(e.firstChild.innerHTML=`<code>${e.firstChild.innerHTML}</code>`,e.outerHTML=e.innerHTML);const u=r.turndown(i.innerHTML);chrome.storage.local.set({mediumToMarkdown:u})},function(e,n,t){"use strict";function r(e,n){return Array(n+1).join(e)}t.r(n);var i=["address","article","aside","audio","blockquote","body","canvas","center","dd","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frameset","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","isindex","li","main","menu","nav","noframes","noscript","ol","output","p","pre","section","table","tbody","td","tfoot","th","thead","tr","ul"];function o(e){return-1!==i.indexOf(e.nodeName.toLowerCase())}var a=["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"];function l(e){return-1!==a.indexOf(e.nodeName.toLowerCase())}var u=a.join();var c={};function f(e){for(var n in this.options=e,this._keep=[],this._remove=[],this.blankRule={replacement:e.blankReplacement},this.keepReplacement=e.keepReplacement,this.defaultRule={replacement:e.defaultReplacement},this.array=[],e.rules)this.array.push(e.rules[n])}function s(e,n,t){for(var r=0;r<e.length;r++){var i=e[r];if(d(i,n,t))return i}}function d(e,n,t){var r=e.filter;if("string"==typeof r){if(r===n.nodeName.toLowerCase())return!0}else if(Array.isArray(r)){if(r.indexOf(n.nodeName.toLowerCase())>-1)return!0}else{if("function"!=typeof r)throw new TypeError("`filter` needs to be a string, array, or function");if(r.call(e,n,t))return!0}}function p(e){var n=e.nextSibling||e.parentNode;return e.parentNode.removeChild(e),n}function h(e,n,t){return e&&e.parentNode===n||t(n)?n.nextSibling||n.parentNode:n.firstChild||n.nextSibling||n.parentNode}c.paragraph={filter:"p",replacement:function(e){return"\n\n"+e+"\n\n"}},c.lineBreak={filter:"br",replacement:function(e,n,t){return t.br+"\n"}},c.heading={filter:["h1","h2","h3","h4","h5","h6"],replacement:function(e,n,t){var i=Number(n.nodeName.charAt(1));return"setext"===t.headingStyle&&i<3?"\n\n"+e+"\n"+r(1===i?"=":"-",e.length)+"\n\n":"\n\n"+r("#",i)+" "+e+"\n\n"}},c.blockquote={filter:"blockquote",replacement:function(e){return"\n\n"+(e=(e=e.replace(/^\n+|\n+$/g,"")).replace(/^/gm,"> "))+"\n\n"}},c.list={filter:["ul","ol"],replacement:function(e,n){var t=n.parentNode;return"LI"===t.nodeName&&t.lastElementChild===n?"\n"+e:"\n\n"+e+"\n\n"}},c.listItem={filter:"li",replacement:function(e,n,t){e=e.replace(/^\n+/,"").replace(/\n+$/,"\n").replace(/\n/gm,"\n    ");var r=t.bulletListMarker+"   ",i=n.parentNode;if("OL"===i.nodeName){var o=i.getAttribute("start"),a=Array.prototype.indexOf.call(i.children,n);r=(o?Number(o)+a:a+1)+".  "}return r+e+(n.nextSibling&&!/\n$/.test(e)?"\n":"")}},c.indentedCodeBlock={filter:function(e,n){return"indented"===n.codeBlockStyle&&"PRE"===e.nodeName&&e.firstChild&&"CODE"===e.firstChild.nodeName},replacement:function(e,n,t){return"\n\n    "+n.firstChild.textContent.replace(/\n/g,"\n    ")+"\n\n"}},c.fencedCodeBlock={filter:function(e,n){return"fenced"===n.codeBlockStyle&&"PRE"===e.nodeName&&e.firstChild&&"CODE"===e.firstChild.nodeName},replacement:function(e,n,t){var r=((n.firstChild.className||"").match(/language-(\S+)/)||[null,""])[1];return"\n\n"+t.fence+r+"\n"+n.firstChild.textContent+"\n"+t.fence+"\n\n"}},c.horizontalRule={filter:"hr",replacement:function(e,n,t){return"\n\n"+t.hr+"\n\n"}},c.inlineLink={filter:function(e,n){return"inlined"===n.linkStyle&&"A"===e.nodeName&&e.getAttribute("href")},replacement:function(e,n){return"["+e+"]("+n.getAttribute("href")+(n.title?' "'+n.title+'"':"")+")"}},c.referenceLink={filter:function(e,n){return"referenced"===n.linkStyle&&"A"===e.nodeName&&e.getAttribute("href")},replacement:function(e,n,t){var r,i,o=n.getAttribute("href"),a=n.title?' "'+n.title+'"':"";switch(t.linkReferenceStyle){case"collapsed":r="["+e+"][]",i="["+e+"]: "+o+a;break;case"shortcut":r="["+e+"]",i="["+e+"]: "+o+a;break;default:var l=this.references.length+1;r="["+e+"]["+l+"]",i="["+l+"]: "+o+a}return this.references.push(i),r},references:[],append:function(e){var n="";return this.references.length&&(n="\n\n"+this.references.join("\n")+"\n\n",this.references=[]),n}},c.emphasis={filter:["em","i"],replacement:function(e,n,t){return e.trim()?t.emDelimiter+e+t.emDelimiter:""}},c.strong={filter:["strong","b"],replacement:function(e,n,t){return e.trim()?t.strongDelimiter+e+t.strongDelimiter:""}},c.code={filter:function(e){var n=e.previousSibling||e.nextSibling,t="PRE"===e.parentNode.nodeName&&!n;return"CODE"===e.nodeName&&!t},replacement:function(e){if(!e.trim())return"";var n="`",t="",r="",i=e.match(/`+/gm);if(i)for(/^`/.test(e)&&(t=" "),/`$/.test(e)&&(r=" ");-1!==i.indexOf(n);)n+="`";return n+t+e+r+n}},c.image={filter:"img",replacement:function(e,n){var t=n.alt||"",r=n.getAttribute("src")||"",i=n.title||"";return r?"!["+t+"]("+r+(i?' "'+i+'"':"")+")":""}},f.prototype={add:function(e,n){this.array.unshift(n)},keep:function(e){this._keep.unshift({filter:e,replacement:this.keepReplacement})},remove:function(e){this._remove.unshift({filter:e,replacement:function(){return""}})},forNode:function(e){return e.isBlank?this.blankRule:(n=s(this.array,e,this.options))?n:(n=s(this._keep,e,this.options))?n:(n=s(this._remove,e,this.options))?n:this.defaultRule;var n},forEach:function(e){for(var n=0;n<this.array.length;n++)e(this.array[n],n)}};var m="undefined"!=typeof window?window:{};var g,y=function(){var e=m.DOMParser,n=!1;try{(new e).parseFromString("","text/html")&&(n=!0)}catch(e){}return n}()?m.DOMParser:function(){var e=function(){},n=t(2).JSDOM;return e.prototype.parseFromString=function(e){return new n(e).window.document},e}();function v(e){var n;"string"==typeof e?n=(g=g||new y).parseFromString('<x-turndown id="turndown-root">'+e+"</x-turndown>","text/html").getElementById("turndown-root"):n=e.cloneNode(!0);return function(e){var n=e.element,t=e.isBlock,r=e.isVoid,i=e.isPre||function(e){return"PRE"===e.nodeName};if(n.firstChild&&!i(n)){for(var o=null,a=!1,l=null,u=h(l,n,i);u!==n;){if(3===u.nodeType||4===u.nodeType){var c=u.data.replace(/[ \r\n\t]+/g," ");if(o&&!/ $/.test(o.data)||a||" "!==c[0]||(c=c.substr(1)),!c){u=p(u);continue}u.data=c,o=u}else{if(1!==u.nodeType){u=p(u);continue}t(u)||"BR"===u.nodeName?(o&&(o.data=o.data.replace(/ $/,"")),o=null,a=!1):r(u)&&(o=null,a=!0)}var f=h(l,u,i);l=u,u=f}o&&(o.data=o.data.replace(/ $/,""),o.data||p(o))}}({element:n,isBlock:o,isVoid:l}),n}function b(e){return e.isBlock=o(e),e.isCode="code"===e.nodeName.toLowerCase()||e.parentNode.isCode,e.isBlank=function(e){return-1===["A","TH","TD"].indexOf(e.nodeName)&&/^\s*$/i.test(e.textContent)&&!l(e)&&!function(e){return e.querySelector&&e.querySelector(u)}(e)}(e),e.flankingWhitespace=function(e){var n="",t="";if(!e.isBlock){var r=/^[ \r\n\t]/.test(e.textContent),i=/[ \r\n\t]$/.test(e.textContent);r&&!k("left",e)&&(n=" "),i&&!k("right",e)&&(t=" ")}return{leading:n,trailing:t}}(e),e}function k(e,n){var t,r,i;return"left"===e?(t=n.previousSibling,r=/ $/):(t=n.nextSibling,r=/^ /),t&&(3===t.nodeType?i=r.test(t.nodeValue):1!==t.nodeType||o(t)||(i=r.test(t.textContent))),i}var N=Array.prototype.reduce,w=/^\n*/,S=/\n*$/;function C(e){if(!(this instanceof C))return new C(e);var n={rules:c,headingStyle:"setext",hr:"* * *",bulletListMarker:"*",codeBlockStyle:"indented",fence:"```",emDelimiter:"_",strongDelimiter:"**",linkStyle:"inlined",linkReferenceStyle:"full",br:"  ",blankReplacement:function(e,n){return n.isBlock?"\n\n":""},keepReplacement:function(e,n){return n.isBlock?"\n\n"+n.outerHTML+"\n\n":n.outerHTML},defaultReplacement:function(e,n){return n.isBlock?"\n\n"+e+"\n\n":e}};this.options=function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])}return e}({},n,e),this.rules=new f(this.options)}function x(e){var n=this;return N.call(e.childNodes,function(e,t){var r="";return 3===(t=new b(t)).nodeType?r=t.isCode?t.nodeValue:n.escape(t.nodeValue):1===t.nodeType&&(r=function(e){var n=this.rules.forNode(e),t=x.call(this,e),r=e.flankingWhitespace;(r.leading||r.trailing)&&(t=t.trim());return r.leading+n.replacement(t,e,this.options)+r.trailing}.call(n,t)),T(e,r)},"")}function T(e,n){var t=function(e,n){var t=[e.match(S)[0],n.match(w)[0]].sort(),r=t[t.length-1];return r.length<2?r:"\n\n"}(e,n);return(e=e.replace(S,""))+t+(n=n.replace(w,""))}C.prototype={turndown:function(e){if(!function(e){return null!=e&&("string"==typeof e||e.nodeType&&(1===e.nodeType||9===e.nodeType||11===e.nodeType))}(e))throw new TypeError(e+" is not a string, or an element/document/fragment node.");if(""===e)return"";var n=x.call(this,new v(e));return function(e){var n=this;return this.rules.forEach(function(t){"function"==typeof t.append&&(e=T(e,t.append(n.options)))}),e.replace(/^[\t\r\n]+/,"").replace(/[\t\r\n\s]+$/,"")}.call(this,n)},use:function(e){if(Array.isArray(e))for(var n=0;n<e.length;n++)this.use(e[n]);else{if("function"!=typeof e)throw new TypeError("plugin must be a Function or an Array of Functions");e(this)}return this},addRule:function(e,n){return this.rules.add(e,n),this},keep:function(e){return this.rules.keep(e),this},remove:function(e){return this.rules.remove(e),this},escape:function(e){return e.replace(/\\(\S)/g,"\\\\$1").replace(/^(#{1,6} )/gm,"\\$1").replace(/^([-*_] *){3,}$/gm,function(e,n){return e.split(n).join("\\"+n)}).replace(/^(\W* {0,3})(\d+)\. /gm,"$1$2\\. ").replace(/^([^\\\w]*)[*+-] /gm,function(e){return e.replace(/([*+-])/g,"\\$1")}).replace(/^(\W* {0,3})> /gm,"$1\\> ").replace(/\*+(?![*\s\W]).+?\*+/g,function(e){return e.replace(/\*/g,"\\*")}).replace(/_+(?![_\s\W]).+?_+/g,function(e){return e.replace(/_/g,"\\_")}).replace(/`+(?![`\s\W]).+?`+/g,function(e){return e.replace(/`/g,"\\`")}).replace(/[\[\]]/g,"\\$&")}},n.default=C},function(e,n){}]);