parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"QGqB":[function(require,module,exports) {
let e=document.getElementById("secs"),t=5;const o="https://whispering-ridge-40670.herokuapp.com/user/verifyuser";let n=new URLSearchParams(location.search);const r=n.get("token"),c=localStorage.getItem("jwt");async function a(){e.innerHTML=String(t)+" sec",t>0&&setTimeout(a,1e3),0==t&&i(),t--}async function i(){localStorage.setItem("jwt",r),200==(await fetch(`${o}/${r}`,{method:"GET"})).status?window.location.href="../homepage.html":e.innerHTML='Not redirected? <a href="" id="re_try">click here</a>'}setTimeout(a,1e3);
},{}]},{},["QGqB"], null)
//# sourceMappingURL=/user_verification.da193ed3.js.map