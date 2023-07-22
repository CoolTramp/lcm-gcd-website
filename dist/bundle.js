(()=>{"use strict";var n={597:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(81),i=t.n(r),o=t(645),a=t.n(o)()(i());a.push([n.id,"#answer-container-top {\n    width: 330px;\n    margin: 25px auto;\n    padding: 5px;\n    display: block;\n    border: 3px solid rgb(211, 210, 210);\n    border-radius: 5px;\n    background-color: rgb(241, 211, 165);\n    overflow: scroll;\n    font-size: 20px;\n}\n\n#answer-container-botton {\n    background-color: rgb(241, 211, 165);\n    font-size: 20px;   \n    border: 1px solid black;\n    border-radius: 3px;\n}\n\n#lcm-answer, #gcd-answer {\n    position: relative;\n    top: -3px;\n    left: -3px;\n    padding-left: 0;\n    font-size: 25px;\n}\n\n#string-named-LCM-in-bottom, \n#string-named-GCD-in-bottom {\n    padding-right: 0;\n    display: none;\n}\n\n",""]);const s=a},519:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(81),i=t.n(r),o=t(645),a=t.n(o)()(i());a.push([n.id,"#canonical-factorizations-process{\n    height: auto;\n    width: auto;\n    display: inline-block;\n    border: 1px solid black;\n    border-radius: 2px;\n    background-color: rgb(241, 211, 165);\n    overflow: scroll;\n    margin: 5px;\n    padding: 0px 5px 5px 5px;\n    font-size: 25px;\n}\n",""]);const s=a},842:(n,e,t)=>{t.d(e,{Z:()=>m});var r=t(81),i=t.n(r),o=t(645),a=t.n(o),s=t(667),c=t.n(s),d=new URL(t(189),t.b),l=a()(i()),u=c()(d);l.push([n.id,'#container-enter {\n    margin: 30 auto;\n    width: 400px;\n    min-height: 0;\n    height: 80px;\n    border-radius: 3px;\n    border: 1px solid rgb(211, 210, 210);\n    display: grid;\n    background-color:  rgba(244, 225, 196, 0.82);\n    grid-template-columns: repeat(12, 1fr);\n    grid-template-rows: 30px 20px;\n    font-size: 25px;\n }\n\ninput[type="checkbox"]:checked {\n    background-color: beige;\n    transform: scale(1.4);\n}\n\n#span-in-container-enter {\n    margin-top: 15px;\n    grid-row: 1/3;\n    grid-column: 1 / 13;\n    text-align: center;\n}\n\n#text-checkbox-lcm {\n    margin-top: 1px;\n    grid-row: 3;\n    grid-column: 2;\n}\n\n#checkbox-lcm {\n    margin-top: -15px;\n    grid-row: 3;\n    grid-column: 3;\n}\n\n\n#text-checkbox-gcd {\n    margin-top: 1px;\n    grid-row: 3;\n    grid-column: 5;\n    text-align: center;\n}\n\n#checkbox-gcd {\n    margin-top: -15px;\n    grid-row: 3;\n    grid-column: 6;\n}\n\n#btn-enter {\n    grid-row: 2 ; \n    grid-column: 9; \n    background-image: url('+u+");\n\n}\n",""]);const m=l},803:(n,e,t)=>{t.d(e,{Z:()=>m});var r=t(81),i=t.n(r),o=t(645),a=t.n(o),s=t(667),c=t.n(s),d=new URL(t(593),t.b),l=a()(i()),u=c()(d);l.push([n.id,"#all-flags {\n    width: 50px;\n    height: 200px;\n    overflow: hidden;\n    position: absolute;\n    z-index: 3;\n\n}\n#container-languages {\n    width: 50px;\n    height: 200px;\n    /* border: 1px solid black; */\n    position: relative;\n    display: flex;\n    flex-direction: column;\n}\n\n@keyframes flags-up {\n    0% {\n        transform: translateY(0);\n    }\n    100% {\n        transform: translateY(-100px);\n        opacity: 0;\n    }\n}\n\n@keyframes flags-down {\n    0% {\n        transform: translateY(-100px);\n    }\n    100% {\n        transform: translateY(0);\n    }\n}\n\n\n#flags-toggle {\n    position: relative;\n    z-index: 1;\n    background-image: url("+u+");\n}\n\n\n#flags-toggle:hover {\n    transform: scale(1.1);\n\n}\n\n.any-flags {\n    position: relative;\n    z-index: 3;\n    width: 50px;\n    height: 30px;\n    background-size: 50px 30px;\n    background-repeat: no-repeat;\n    transition: transform 1s;\n}\n\n",""]);const m=l},138:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(81),i=t.n(r),o=t(645),a=t.n(o)()(i());a.push([n.id,"#heading {\n    position: relative;\n    text-align: center;\n    border-radius: 50px;\n    border: 1px solid rgb(199, 191, 191);\n    text-shadow: 30%;\n    background-color: rgb(241, 211, 165);\n}",""]);const s=a},197:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(81),i=t.n(r),o=t(645),a=t.n(o)()(i());a.push([n.id,".hidden-container {\n    display: grid;\n    grid-template-rows: 0fr;\n    overflow: hidden;\n    transition: grid-template-rows 1s;\n}\n.show-container {\n    grid-template-rows: 1fr;\n}",""]);const s=a},266:(n,e,t)=>{t.d(e,{Z:()=>x});var r=t(81),i=t.n(r),o=t(645),a=t.n(o),s=t(667),c=t.n(s),d=new URL(t(119),t.b),l=new URL(t(522),t.b),u=new URL(t(922),t.b),m=new URL(t(189),t.b),g=a()(i()),p=c()(d),h=c()(l),b=c()(u),f=c()(m);g.push([n.id,'#input-container {\n    width: 600px;\n    margin: 0 auto;\n    display: block;\n    border: 1px solid rgb(249, 200, 200);\n    border-radius: 5px;\n    overflow: hidden;\n}\n\n#input-number {\n    width: 340px;\n    height: 35px;\n    margin: 5px;\n    border-radius: 5px;\n    background-color:  rgba(241, 211, 165, 0.82);\n    font-size: 25px;\n}\n@keyframes drop-prompt {\n    from {\n        transform: translateY(-100%);\n    }\n    to {\n        transform: translateY(0);\n    }\n}\n\n.drop-prompt-animation {\n    animation: drop-prompt;\n    animation-iteration-count: 1;\n    animation-duration: 2s;\n}\n\n@keyframes flash {\n    0% { opacity: 1; } \n    50% { opacity: 0.8; }\n    100% { opacity: 1; }\n  }\n\n.flash-text {\n    /* background-color: rgb(237, 116, 116); */\n    animation-name: flash;\n    animation-duration: 2s;\n    animation-timing-function: ease-in-out;\n    animation-iteration-count: infinite;\n}\n \n/** buttons */\n\n[id|="btn"] {    \n    width: 60px;\n    height: 60px;\n    display: inline-block;\n    position: relative;\n    top: 15px;\n    background-size: 100%;\n    border-radius: 10px;\n    transition: 1s;\n}\n\n#btn-add-number {\n    background-image: url('+p+");\n}\n\n#btn-del-number {\n    background-image: url("+h+");\n}\n\n#btn-trash {\n    background-image: url("+b+');\n}\n  \n\n[id|="btn"]:hover {\n    transform: scale(1.1);\n}\n\n#btn-add-number:hover {\n    background-color: rgba(145, 235, 10, 0.49);\n}\n\n#btn-del-number:hover {\n    background-color: rgb(166, 153, 153);\n}\n\n#btn-trash:hover {\n    background-color: rgb(210, 180, 180);\n}\n\n[id|="btn"]:active {\n  transform: scale(0.8); \n  opacity: 0.8;\n}\n\n.shake-animation {\n    animation: shake 1s ease-in-out;\n}\n\n@keyframes shake {\n    0% { transform: rotate(0); }\n    25% { transform: rotate(10deg); }\n    50% { transform: rotate(-10deg); }\n    75% { transform: rotate(10); }\n    100% { transform: rotate(-10); }\n  }\n\n.fly-number {\n    background-color: rebeccapurple;\n    animation: fly-number-animation;\n    animation-duration: 2s;\n    animation-iteration-count: 1;\n}\n\n@keyframes fly-number-animation {\n    from {\n       transform:  translateY(0);\n    }\n    to {\n        transform: translateY(100px);\n    }\n}\n\n#user-numbers-container  div{\n    border-radius: 2px;\n    border: 1px solid rgb(166, 163, 163);\n    background-color: rgb(241, 211, 165);\n    border-radius: 5px;\n    display: inline-block;\n    margin: 5px 0px 5px 5px;\n    padding: 3px;\n    font-size: 25px\n}\n\n  @keyframes drop-number {\n    from {\n      transform: translate(-100%, -100%);\n    }\n    to {\n      transform: translate(0, 0);\n    }\n  }\n  \n.drop-number-animation {\n    animation: drop-number;    \n    animation-duration: 0.5s;\n    animation-iteration-count: 1;\n}\n\n/*\n    CONTAINER INTER\n*/\n#container-enter {\n    margin: 0 auto;\n    margin-top: 30px;\n    margin-bottom: 30px;\n    width: 400px;\n    height: 80px;\n    border-radius: 3px;\n    border: 1px solid rgb(211, 210, 210);\n    display: grid;\n    background-color:  rgba(244, 225, 196, 0.82);\n    grid-template-columns: repeat(12, 1fr);\n    grid-template-rows: 30px 20px;\n    font-size: 25px;\n\n}\n\ninput[type="checkbox"]:checked {\n    background-color: beige;\n    transform: scale(1.4);\n}\n\n#span-in-container-enter {\n    margin-top: 15px;\n    grid-row: 1/3;\n    grid-column: 1 / 13;\n    text-align: center;\n}\n\n#text-checkbox-lcm {\n    margin-top: 1px;\n    grid-row: 3;\n    grid-column: 2;\n}\n\n#checkbox-lcm {\n    margin-top: -15px;\n    grid-row: 3;\n    grid-column: 3;\n}\n\n\n#text-checkbox-gcd {\n    margin-top: 1px;\n    grid-row: 3;\n    grid-column: 5;\n    text-align: center;\n}\n\n#checkbox-gcd {\n    margin-top: -15px;\n    grid-row: 3;\n    grid-column: 6;\n}\n\n#btn-enter {\n    grid-row: 2 ; \n    grid-column: 9; \n    background-image: url('+f+");\n\n}\n",""]);const x=g},166:(n,e,t)=>{t.d(e,{Z:()=>x});var r=t(81),i=t.n(r),o=t(645),a=t.n(o),s=t(667),c=t.n(s),d=new URL(t(927),t.b),l=new URL(t(170),t.b),u=new URL(t(237),t.b),m=new URL(t(185),t.b),g=a()(i()),p=c()(d),h=c()(l),b=c()(u),f=c()(m);g.push([n.id,"\n/* Menu */\n#menu-contanier {\n    margin: 0px 4px 0px -4px;\n    display: inline-block;\n    vertical-align: top;\n    position: relative;\n    top: 3px;\n    overflow: hidden;\n  }\n  \n  #prime-facrotization-menu, \n  #restore-down,\n  #increase-font-size,\n  #reduce-font-size {\n    width: 20px;\n    height: 20px;\n    border: 1px solid;\n    display: block;\n    margin: -1px 0px 0px 0px;\n    background-size: contain;\n    transition: transform 1s;\n  }\n  #prime-facrotization-menu {\n    border-radius: 0px 0px 4px 4px;\n    vertical-align: top; \n    position: relative;\n    z-index: 2;\n    background-image: url("+p+");\n    background-color: rgb(226, 161, 63);\n  }\n  .hide {\n    transform: translateY(-60px);\n  }\n  #restore-down,\n  #increase-font-size,\n  #reduce-font-size {\n    z-index: 1;\n    border-radius: 2px;\n    background-color: rgb(245, 216, 174);\n  }\n  \n  #restore-down {\n    background-image: url("+h+"); \n  }\n  \n  #increase-font-size {\n    background-image: url("+b+");\n  }\n  \n  #reduce-font-size {\n    background-image: url("+f+");\n  }\n  \n  #reduce-font-size:hover,\n  #increase-font-size:hover,\n  #restore-down:hover {\n    background-color: rgb(246, 194, 123);\n  }\n  \n  .move-down {\n    animation: move-down-animation;\n    animation-duration: 1s;\n  }\n  \n  @keyframes move-down-animation {\n    0%   { transform: translateY(-100px); }\n    100% { transform: translateY(0px); }\n  }\n  \n  .move-up {\n    animation: move-up-animation;\n    animation-duration: 1s;\n  }\n  \n  @keyframes move-up-animation {\n    0% { transform: translateY(0px); }\n    100% { transform: translateY(-100px); }\n  }",""]);const x=g},811:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(81),i=t.n(r),o=t(645),a=t.n(o)()(i());a.push([n.id,"#prime-factorization-container {\n    margin: 5px;\n    height: auto;\n    border: 1px solid black;\n    border-radius: 1px;\n    overflow: scroll;\n    display: inline-block;\n}\n\n#prime-factorization-process { \n   background-color: rgba(231, 225, 252, 0.038);\n   display: inline-block;\n}\n\n/* Styles for the table with ID table-with-factorization,\n * which will be dynamically created\n * using The DivisionProcessLogger class\n*/\n#table-with-factorization th {\n    position: relative;\n    z-index: 3;\n    padding: 5px;\n    margin: 100px;\n    /* border: 1px solid rgb(245, 201, 144); */\n    /* border: 1px solid rgba(128, 128, 128, 0.629); */\n    border-radius: 2px;\n    vertical-align: top; \n    background-color: rgb(250, 208, 147);\n    font-size: 20px;\n}\n#table-with-factorization {\n    border-spacing: 10px 10px;\n}\n  \n",""]);const s=a},265:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(81),i=t.n(r),o=t(645),a=t.n(o)()(i());a.push([n.id,"span {\n    margin: 5px;\n    display: block;\n    text-align: center;\n    border-radius: 4px;\n    background-color: burlywood;\n    font-size: 25px;\n}\n\n\n\n\n",""]);const s=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,i,o){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);r&&a[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var o={},a=[],s=0;s<n.length;s++){var c=n[s],d=r.base?c[0]+r.base:c[0],l=o[d]||0,u="".concat(d," ").concat(l);o[d]=l+1;var m=t(u),g={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)e[m].references++,e[m].updater(g);else{var p=i(g,r);r.byIndex=s,e.splice(s,0,{identifier:u,updater:p,references:1})}a.push(u)}return a}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var o=r(n=n||[],i=i||{});return function(n){n=n||[];for(var a=0;a<o.length;a++){var s=t(o[a]);e[s].references--}for(var c=r(n,i),d=0;d<o.length;d++){var l=t(o[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}o=c}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,i&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},593:(n,e,t)=>{n.exports=t.p+"8f676de035d481825adf.png"},237:(n,e,t)=>{n.exports=t.p+"a982653213ba2a16e6ca.png"},119:(n,e,t)=>{n.exports=t.p+"545fb398303b3b1c0892.png"},522:(n,e,t)=>{n.exports=t.p+"7d57c20444e3800644a1.png"},922:(n,e,t)=>{n.exports=t.p+"384508bde5f3fe6776bf.png"},189:(n,e,t)=>{n.exports=t.p+"9aba1a395215b8f8e24b.png"},927:(n,e,t)=>{n.exports=t.p+"9aa91e76276f89ed8baa.png"},185:(n,e,t)=>{n.exports=t.p+"89cb1099db0518220ce5.png"},170:(n,e,t)=>{n.exports=t.p+"22e2fcfb2a1423c1fbaf.png"}},e={};function t(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={id:r,exports:{}};return n[r](o,o.exports,t),o.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{const n=["en","ru","pl"],e="../img/flags/flag_";let r=0;function i(){return r}const o=document.getElementById("container-languages");function a(n,e){n.id=e}document.getElementById("flags-toggle"),document.addEventListener("DOMContentLoaded",(function(){!function(){for(let i=0;i<n.length;i++){let s=n[i],c=document.createElement("div");a(c,s),r=s,(t=c).classList.add("any-flags"),function(n,t){n.style.backgroundImage=`url(${e+t}.png)`}(t,r),o.appendChild(c)}var t,r}()}));const s=document.getElementById("container-languages"),c=document.getElementById("flags-toggle"),d=document.getElementById("heading"),l=document.getElementById("span-above-prime-factorization"),u=document.getElementById("span-above-canonical-factorizations"),m=document.getElementById("span-answer"),g=document.getElementById("input-number"),p=document.getElementById("btn-add-number"),h=document.getElementById("btn-del-number"),b=document.getElementById("span-prompt-for-user"),f=document.getElementById("btn-trash"),x=document.getElementById("btn-enter"),y=document.getElementById("span-in-container-enter"),v=document.getElementById("text-checkbox-lcm"),w=document.getElementById("text-checkbox-gcd"),_=document.getElementById("string-named-GCD-in-top"),k=document.getElementById("string-named-LCM-in-top"),E=document.getElementById("string-named-GCD-in-bottom"),I=document.getElementById("string-named-LCM-in-bottom"),L=["Here you can compute LCD and GCD","Здесь вы можете вычислить НОК и НОД","Tutaj możesz obliczyć NWW i NWD"],D=["decompose the numbers into prime factors:","разложим числа на простые множители:","rozkładamy liczby na czynniki pierwsze:"],T=["create canonical factorizations for each of the given numbers:","создаем канонические разложения каждого из указанных чисел:","tworzymy rozkłady kanoniczne każdej z podanych liczb:"],S=["answer:","ответ:","odpowiedź:"],z=["type numbers for computing","напиши числа для расчета","napisz liczby do obliczenia"],A=["you can type only integer greater then one","ты можешь вводить только целые числа более единицы","możesz wprowadzić liczbę całkowitą większą niż jedynka"];b.innerText=A[0];const C=["add number","добавить число","dodać liczbę"],M=["delete last number","удалить последнее число","usunąć ostatni numer"],Z=["delete all numbers","удалить все числа","usuń wszystkie liczby"],N=["what do you want to solve?","что хочешь вычислись?","co chcesz obliczyć?"],B=["click to calculate","нажми чтобы вычислить","kliknij aby obliczyć"],O=["LCM","НОK","NWW"],F=["GCD","НОД","NWD"];s.addEventListener("click",(t=>{const o=t.target;if(o.id){const t=(a=o.id,n.indexOf(a));-1!==t&&(r=t,function(){const t=`${e}${n[i()]}.png`;c.style.backgroundImage=`url(${t})`}(),function(){const n=[[L,d],[D,l],[T,u],[S,m],[A,b],[N,y],[O,v],[F,w],[O,I],[F,E],[O,k],[F,_]];for(let[e,t]of n)t.innerText=`${e[i()]}`;const e=[[C,p],[M,h],[Z,f],[B,x]];for(let[n,t]of e)t.title=`${n[i()]}`;g.placeholder=z[i()],g.onblur=()=>{g.placeholder=z[i()]}}())}var a}));let P=!1;c.onclick=()=>{P?(s.style.animation="flags-down 1s 1 forwards",P=!1):(s.style.animation="flags-up 1s 1 forwards",P=!0)};class H{constructor(){this._historyOfNumberDivition=new Map}_recordDivision(n,e){this._historyOfNumberDivition.set(n,e)}_cleanRecord(){this._historyOfNumberDivition.clear()}getHistoryOfDividingNumber(){if(!this._historyOfNumberDivition||!this._historyOfNumberDivition.size)throw new Error("No factorization was performed on the number.");return Array.from(this._historyOfNumberDivition)}}class R{constructor(n){if(n){if(!(n instanceof H))throw new Error("Input must be object of TrackingDivideHistory class");this.store=n}this.allPrimeFactors=[]}calculatePrimeFactors(n){this._isPositiveInteger(n),this.store&&this.store._cleanRecord();let e=[];for(let t=2;t<=n;t++)for(;n%t==0;)this.store&&this.store._recordDivision(n,t),e.push(t),n/=t;return this.allPrimeFactors=e,e}getPrimeFactors(){if(0===this.allPrimeFactors.length)throw new Error("No prime factors have been calculated yet");return this.allPrimeFactors}_isPositiveInteger(n){try{if(!Number.isInteger(n)||n<0)throw new Error("Input must be a positive integer. Like 2520, 20")}catch(n){console.error("ERROR:",n.message)}return!0}}class j{constructor(){this.string="",this.maxValueLength=0}creatStringFrom(n){return this._makeConstructorDefault(),this._isTuple(n),this._getMaxLengthOfDivisible(n),n.forEach((([e,t],r)=>{this.string+=this._formatOutput(e,t)+(n.length-1!==r?"<br>":"")})),this.string}_makeConstructorDefault(){this.string="",this.maxValueLength=0}_getMaxLengthOfDivisible(n){let e=0;n.forEach((n=>{let t=this._getLengthOfDivisible(n[0]);t>e&&(e=t)})),this.maxValueLength=e}_formatOutput(n,e){return`${this._padValue(n,e)} | ${e}`}_padValue(n,e){let t=this.maxValueLength-(n.toString().length-e.toString().length);return"&nbsp;&nbsp;".repeat(t-1)+n.toString()}_getLengthOfDivisible(n){return String(n).length}_isTuple(n){if(0===n.length)throw new Error("no a numbers for printing");return!0}getString(){if(!this.string)throw new Error("the string is not defined");return this.string}}document.getElementById("table-with-factorization");class U{constructor(n){this._logger=n}logTable(n){document.getElementsByClassName("hidden-container")[2].classList.remove("show-container"),this._logger.innerHTML=this._creatTableForLog(n),setTimeout((()=>{document.getElementsByClassName("hidden-container")[2].classList.add("show-container")}),100)}_creatTableForLog(n){this._isArray(n);let e="<table id='table-with-factorization'>\n                            <tr>";return n.forEach((n=>{e+=`   <th>\n                                ${n}\n                              </th> `})),e+="     </tr>\n                          </table>",e}_isArray(n){if(!Array.isArray(n)||0===n.length)throw new Error("value must be an array with history of dividing");return!0}}document.getElementById("table-with-factorization");class ${constructor(...n){this._numbers=this._deleteRepeating(n),this._numbers=this._deleteIsNotPositiveInteger(this._numbers),this._trackingDivideHistory=new H,this._primeFactorization=new R(this._trackingDivideHistory),this._padFormatter=new j,this._paddedStrings=[],this._primeFactors=[],this._getPrimeFactorsAndFormatterStrings(this._numbers)}_getPrimeFactorsAndFormatterStrings(n){n.forEach((n=>{this._addPrimeFactorsToArray(n),this._addDividingHistoryStringToFormattedStringsArray()}))}_addPrimeFactorsToArray(n){const e=this._primeFactorization.calculatePrimeFactors(n);this._primeFactors.push(e)}_addDividingHistoryStringToFormattedStringsArray(){let n=this._trackingDivideHistory.getHistoryOfDividingNumber(),e=this._padFormatter.creatStringFrom(n);this._paddedStrings.push(e)}renderProcessOfDividionOnHTMLElement(n){const e=new U(n),t=this._paddedStrings;e.logTable(t)}_checkInput(n){if(n.length<=1)throw new Error("there must be at least 2 different digits for calculating LCD");n.forEach((n=>{if(!Number.isInteger(n)||n<=0)throw new Error("all number must be positive integer")}))}_deleteRepeating(n){return n.filter(((n,e,t)=>t.indexOf(n)===e))}_deleteIsNotPositiveInteger(n){return n.filter((n=>Number.isInteger(n)&&n>=2))}get primeFactors(){return this._primeFactors}}class Y{constructor(){this.string=""}getPrimeExponentString(n,e){let t=[];for(let[r,i]of Object.entries(n)){let n=this._getStringWithUserNumber(r),o=this._addMultiplicationSignInString(this._primeFactorAndDegree(i,e));t.push(this._concatinatStrings(n,o))}return this._addSpaceInHTMLFormat(t,3)}_getStringWithUserNumber(n){return`${n}= `}_addMultiplicationSignInString(n){return n.join("·")}_concatinatStrings(...n){return n.join(" ")}_primeFactorAndDegree(n,e){let t=[];for(let[r,i]of Object.entries(n))Number.isInteger(+r)&&(i.count!==n.userNumbers?.length&&"minDegree"==e||t.push(this._getStringWithDegrees(r,i[e])));return t}getAnswerString(n,e){let t=this._getFirstString(n.userNumbers),r=this._addMultiplicationSignInString(this._primeFactorAndDegree(n,e)),i=this._addAnswerToAnserString(n.answer);return this._concatinatStrings(t,r,i)}_getFirstString(n){return"("+n.join(",")+")"+this._getHTMLSpaceFormatString(1)}_getStringWithDegrees(n,e){let t=n;return 1!==e&&(t+=`<sup>${e}</sup>`),t}_addAnswerToAnserString(n){return`= ${n}`}_addSpaceInHTMLFormat(n,e){return n.join(this._getHTMLSpaceFormatString(e))}_getHTMLSpaceFormatString(n){return"&nbsp;".repeat(n)}}class G extends ${constructor(...n){super(...n),this.numbers=n,this._countUserNumbers=0,this._canonical={},this._data={},this._addUserNumbers(),this._computeDataAndCanonical()}_addUserNumbers(){this._data.userNumbers=this.numbers}_computeDataAndCanonical(){let n={};this._primeFactors.forEach((e=>{n=this._getDegreesFrom(e),this._initializeCanonical(),this._processTempData(n)}))}_getDegreesFrom(n){return n.reduce(((n,e)=>(n[e]?n[e].degree++:n[e]={count:1,degree:1},n)),{})}_processTempData(n){for(let e in n)this._addDegreesInCanonical(this._countUserNumbers,e,n[e].degree),this._addCountMinAndMaxDegree(e,n);this._countUserNumbers++}_addDegreesInCanonical(n,e,t){this._canonical[this._numbers[n]][e]={degree:t}}_addCountMinAndMaxDegree(n,e){this._data.hasOwnProperty(n)?this._updateData(n,e[n].degree):this._setPrimeNumberData(n,e[n].count,e[n].degree)}_setPrimeNumberData(n,e,t){this._data[n]={count:e,minDegree:t,maxDegree:t}}_updateData(n,e){this._data[n].minDegree=Math.min(e,this._data[n]?.minDegree),this._data[n].maxDegree=Math.max(e,this._data[n]?.maxDegree),this._data[n].count++}_initializeCanonical(){this._canonical[this._numbers[this._countUserNumbers]]={}}renderPrimeExponentOnHTMLElement(n){n.innerHTML=this.getString()}getString(){return(new Y).getPrimeExponentString(this._canonical,"degree")}get degrees(){return this._data}}class W{constructor(n){this._data=Object.assign({},n),this._lcm=0,this._computeLCM(this._data)}getLCM(){return this._lcm?this._lcm:this._computeLCM(this._data)}_computeLCM(n){let e=1;for(let[t,r]of Object.entries(n))Number.isInteger(+t)&&(e*=(+t)**r.maxDegree);return this._lcm=e,this._recordLCMinData(e),e}_recordLCMinData(n){this._data.answer=n}renderDetailedAnswerOnHTMLElement(n){n.innerHTML=this.getString()}getString(){return(new Y).getAnswerString(this._data,"maxDegree")}renderAnswerOnly(n){n.innerHTML=this._data.answer}}class V{constructor(n){this._data=Object.assign({},n),this._gcd=1,this._computeGCD(this._data)}getGCD(){return this._gcd?this.gcd:this._computeGCD(this._data)}_computeGCD(n){let e=1;for(let[t,r]of Object.entries(n))Number.isInteger(+t)&&n[t].count===n.userNumbers.length&&(e*=(+t)**r.minDegree);return this._gcd=e,this._recordLCMinData(e),e}_recordLCMinData(n){this._data.answer=n}renderDetailedAnswerOnHTMLElement(n){n.innerHTML=this.getString()}getString(){return(new Y).getAnswerString(this._data,"minDegree")}renderAnswerOnly(n){n.innerHTML=this._data.answer}}const q=document.getElementById("span-prompt-for-user"),J=document.getElementById("input-number"),K=document.getElementById("btn-add-number"),Q=document.getElementById("btn-del-number"),X=document.getElementById("btn-trash"),nn=document.getElementById("user-numbers-container"),en=(document.getElementById("container-enter"),document.getElementById("checkbox-lcm")),tn=document.getElementById("checkbox-gcd"),rn=document.getElementById("btn-enter");let on=[];K.addEventListener("click",(()=>{dn(),on.length>=2&&sn()})),J.addEventListener("keyup",(n=>{"Enter"===n.key&&dn(),on.length>=2&&sn()}));const an=document.getElementsByClassName("hidden-container")[0];function sn(){an.classList.add("show-container")}function cn(){an.classList.remove("show-container")}function dn(){var n;!function(){const n=+J.value;return!!Number.isInteger(n)&&n>1}()?mn?(q.classList.add("flash-text"),setTimeout((()=>{q.classList.remove("flash-text")}),4e3)):(q.style.visibility="visible",q.classList.add("drop-prompt-animation"),setTimeout((()=>{q.classList.remove("drop-prompt-animation")}),2e3),mn=!0):(on.push(J.value),n=J.value,nn.appendChild(function(n){return function(n,e){return n.textContent=e,n.classList.add("drop-number-animation"),n.draggable=!0,n.style.cursor="grab",n.ondragstart=pn,n}(document.createElement("div"),n)}(n))),ln()}function ln(){J.value=""}let un,mn=!1;function gn(){const n=nn.lastChild;n.classList.remove("drop-number-animation"),n.classList.add("fly-number"),setTimeout((()=>{nn.removeChild(n)}),100)}function pn(){un=event.target}Q.addEventListener("click",(function(){gn(),on.pop(),on.length<2&&cn()})),X.addEventListener("click",(function(){X.classList.add("shake-animation"),setTimeout((()=>{X.classList.remove("shake-animation")}),500),on.splice(0,on.length),function(){for(let n=0;n<nn.childElementCount;n++)setTimeout(gn,110*n)}(),cn()})),X.addEventListener("dragover",(function(){event.preventDefault()})),X.addEventListener("drop",(function(){event.preventDefault(),function(){const n=on.indexOf(un.innerText);n>-1&&on.splice(n,1),on.length<2&&cn()}(),un.remove()}));const hn=document.getElementById("prime-factorization-process"),bn=document.getElementById("canonical-factorizations-process"),fn=document.getElementById("string-named-LCM-in-top"),xn=document.getElementById("string-named-GCD-in-top"),yn=document.getElementById("string-named-LCM-in-bottom"),vn=document.getElementById("string-named-GCD-in-bottom"),wn=document.getElementById("lcm-answer-top"),_n=document.getElementById("lcm-answer"),kn=document.getElementById("gcd-answer-top"),En=document.getElementById("gcd-answer");function In(...n){for(let e of n)e.style.display="block"}const Ln=document.getElementsByClassName("hidden-container")[1];rn.addEventListener("click",(()=>{(function(){ln(),function(){const n=[fn,xn,wn,kn,yn,vn,_n,En];for(let e of n)e.style.display="none"}();const n=(e=on.map((n=>parseInt(n))),Array.from(new Set(e)));var e;const t=new G(...n);if(t.renderProcessOfDividionOnHTMLElement(hn),t.renderPrimeExponentOnHTMLElement(bn),tn.checked||en.checked||(tn.checked=!0,en.checked=!0),en.checked){In(yn,_n,fn,wn);const n=new W(t.degrees);n.renderDetailedAnswerOnHTMLElement(_n),n.renderAnswerOnly(wn)}if(tn.checked){In(vn,En,xn,kn);const n=new V(t.degrees);n.renderDetailedAnswerOnHTMLElement(En),n.renderAnswerOnly(kn)}})(),Ln.classList.add("show-container")}));var Dn=t(379),Tn=t.n(Dn),Sn=t(795),zn=t.n(Sn),An=t(569),Cn=t.n(An),Mn=t(565),Zn=t.n(Mn),Nn=t(216),Bn=t.n(Nn),On=t(589),Fn=t.n(On),Pn=t(138),Hn={};Hn.styleTagTransform=Fn(),Hn.setAttributes=Zn(),Hn.insert=Cn().bind(null,"head"),Hn.domAPI=zn(),Hn.insertStyleElement=Bn(),Tn()(Pn.Z,Hn),Pn.Z&&Pn.Z.locals&&Pn.Z.locals;var Rn=t(803),jn={};jn.styleTagTransform=Fn(),jn.setAttributes=Zn(),jn.insert=Cn().bind(null,"head"),jn.domAPI=zn(),jn.insertStyleElement=Bn(),Tn()(Rn.Z,jn),Rn.Z&&Rn.Z.locals&&Rn.Z.locals;var Un=t(166),$n={};$n.styleTagTransform=Fn(),$n.setAttributes=Zn(),$n.insert=Cn().bind(null,"head"),$n.domAPI=zn(),$n.insertStyleElement=Bn(),Tn()(Un.Z,$n),Un.Z&&Un.Z.locals&&Un.Z.locals;var Yn=t(842),Gn={};Gn.styleTagTransform=Fn(),Gn.setAttributes=Zn(),Gn.insert=Cn().bind(null,"head"),Gn.domAPI=zn(),Gn.insertStyleElement=Bn(),Tn()(Yn.Z,Gn),Yn.Z&&Yn.Z.locals&&Yn.Z.locals;var Wn=t(811),Vn={};Vn.styleTagTransform=Fn(),Vn.setAttributes=Zn(),Vn.insert=Cn().bind(null,"head"),Vn.domAPI=zn(),Vn.insertStyleElement=Bn(),Tn()(Wn.Z,Vn),Wn.Z&&Wn.Z.locals&&Wn.Z.locals;var qn=t(265),Jn={};Jn.styleTagTransform=Fn(),Jn.setAttributes=Zn(),Jn.insert=Cn().bind(null,"head"),Jn.domAPI=zn(),Jn.insertStyleElement=Bn(),Tn()(qn.Z,Jn),qn.Z&&qn.Z.locals&&qn.Z.locals;var Kn=t(266),Qn={};Qn.styleTagTransform=Fn(),Qn.setAttributes=Zn(),Qn.insert=Cn().bind(null,"head"),Qn.domAPI=zn(),Qn.insertStyleElement=Bn(),Tn()(Kn.Z,Qn),Kn.Z&&Kn.Z.locals&&Kn.Z.locals;var Xn=t(519),ne={};ne.styleTagTransform=Fn(),ne.setAttributes=Zn(),ne.insert=Cn().bind(null,"head"),ne.domAPI=zn(),ne.insertStyleElement=Bn(),Tn()(Xn.Z,ne),Xn.Z&&Xn.Z.locals&&Xn.Z.locals;var ee=t(597),te={};te.styleTagTransform=Fn(),te.setAttributes=Zn(),te.insert=Cn().bind(null,"head"),te.domAPI=zn(),te.insertStyleElement=Bn(),Tn()(ee.Z,te),ee.Z&&ee.Z.locals&&ee.Z.locals;var re=t(197),ie={};ie.styleTagTransform=Fn(),ie.setAttributes=Zn(),ie.insert=Cn().bind(null,"head"),ie.domAPI=zn(),ie.insertStyleElement=Bn(),Tn()(re.Z,ie),re.Z&&re.Z.locals&&re.Z.locals})()})();