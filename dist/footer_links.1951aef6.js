parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"mwh7":[function(require,module,exports) {
setTimeout(function(){let e=document.getElementById("slider");"https://zestx.netlify.app/general/slider_event.html"==location.href&&(e.style.marginTop="12vh");var t=document.getElementsByClassName("slide");let a=0;for(var n=!0,i=0;i<t.length;i++)t[i].addEventListener("change",function(){for(let e=0;e<t.length;e++)if(t[e].checked){a=e;break}});setInterval(()=>{n&&(t[a].checked=!0,a++,a%=5)},4e3);var s=document.getElementById("slider");s.addEventListener("mouseover",()=>{n=!1}),s.addEventListener("mouseout",()=>{n=!0})},500),setTimeout(()=>{let e=document.getElementsByClassName("imageHolder"),t=document.getElementsByClassName("outerContainer"),a=document.getElementsByClassName("team_section_github"),n=document.getElementsByClassName("team_section_linkedin"),i=document.getElementsByClassName("team_section_mail"),s=document.getElementsByClassName("teamMembers"),o=document.getElementsByClassName("teamContent");for(let l=1;l<a.length;l+=2)a[l].addEventListener("click",()=>{switch(l){case 1:window.open("https://github.com/kunaljain0212","_blank");break;case 3:case 11:window.open("https://github.com/manishprivet","_blank");break;case 5:window.open("https://github.com/TheNinza","_blank");break;case 7:window.open("https://github.com/hs2361","_blank");break;case 9:window.open("https://github.com/parthlaw","_blank");break;case 13:case 23:window.open("https://github.com/akashgupta1909","_blank");break;case 15:case 21:window.open("https://github.com/HarshilMendpara","_blank");break;case 17:case 19:window.open("https://github.com/RajVarsani","_blank")}});for(let l=1;l<n.length;l+=2)n[l].addEventListener("click",()=>{switch(l){case 1:window.open("https://www.linkedin.com/in/kunaljain0212/","_blank");break;case 3:case 11:window.open("https://www.linkedin.com/in/manishprivet/","_blank");break;case 5:window.open("https://www.linkedin.com/in/theninza/","_blank");break;case 7:window.open("https://www.linkedin.com/in/sharmaharsh23/","_blank");break;case 9:window.open("https://www.linkedin.com/in/parthlaw/","_blank");break;case 13:case 23:window.open("https://www.linkedin.com/in/akash-gupta-ab03721b8/","_blank");break;case 15:case 21:window.open("https://www.linkedin.com/in/harshil-mendpara/","_blank");break;case 17:case 19:window.open("https://www.linkedin.com/in/raj-varsani-404/","_blank")}});for(let l=1;l<i.length;l+=2)i[l].addEventListener("click",()=>{switch(l){case 1:window.open("mailto:jainkunal209@gmail.com","_blank");break;case 3:case 11:window.open("mailto:manishprivet808@gmail.com","_blank");break;case 5:window.open("mailto:niks.a3198@gmail.com","_blank");break;case 7:window.open("mailto:harshhsharma23@gmail.com","_blank");break;case 9:window.open("mailto:parthlaw24@gmail.com","_blank");break;case 13:case 23:window.open("mailto:akash.gupta.anup@gmail.com","_blank");break;case 15:case 21:window.open("mailto:hsmendpara2003@gmail.com","_blank");break;case 17:case 19:window.open("mailto:varasaniraj5@gmail.com","_blank")}});for(let l=0;l<e.length;l++)t[l].addEventListener("mouseenter",()=>{e[l].classList.add("imageHolder_toggle"),i[2*l].style.opacity=1,a[2*l].style.opacity=1,n[2*l].style.opacity=1}),t[l].addEventListener("mouseleave",()=>{e[l].classList.remove("imageHolder_toggle"),i[2*l].style.opacity=0,a[2*l].style.opacity=0,n[2*l].style.opacity=0});for(let l=0;l<a.length;l+=2)a[l+1].addEventListener("mouseenter",()=>{a[l+1].style.opacity=1,a[l].style.opacity=0}),a[l+1].addEventListener("mouseleave",()=>{a[l+1].style.opacity=0,a[l].style.opacity=1}),i[l+1].addEventListener("mouseenter",()=>{i[l+1].style.opacity=1,i[l].style.opacity=0}),i[l+1].addEventListener("mouseleave",()=>{i[l+1].style.opacity=0,i[l].style.opacity=1}),n[l+1].addEventListener("mouseenter",()=>{n[l+1].style.opacity=1,n[l].style.opacity=0}),n[l+1].addEventListener("mouseleave",()=>{n[l+1].style.opacity=0,n[l].style.opacity=1});for(let l=0;l<s.length;l++)o[l].addEventListener("click",()=>{for(let e=0;e<s.length;e++)e==l?(s[e].classList.add("teamMembers_active"),o[e].classList.add("teamContentActive")):(s[e].classList.remove("teamMembers_active"),o[e].classList.remove("teamContentActive"))})},200),setTimeout(function(){var e=document.getElementsByClassName("FAQQuestion"),t=document.getElementsByClassName("FAQArrowDown");const a=[];for(let n=0;n<e.length;n++)a[n]=!0,e[n].addEventListener("click",function(){this.classList.toggle("active");var e=this.nextElementSibling;e.style.maxHeight?e.style.maxHeight=null:e.style.maxHeight=e.scrollHeight+"px",a[n]?(t[n].classList.remove("ArrowRotate2"),t[n].classList.add("ArrowRotate"),a[n]=!1):(t[n].classList.remove("ArrowRotate"),t[n].classList.add("ArrowRotate2"),a[n]=!0)})},500),function(e){var t=function(e,t,a){"use strict";var n,i;if(function(){var t,a={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",fastLoadedClass:"ls-is-cached",iframeLoadMode:0,srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};for(t in i=e.lazySizesConfig||e.lazysizesConfig||{},a)t in i||(i[t]=a[t])}(),!t||!t.getElementsByClassName)return{init:function(){},cfg:i,noSupport:!0};var s=t.documentElement,o=e.HTMLPictureElement,l="addEventListener",r="getAttribute",c=e[l].bind(e),d=e.setTimeout,u=e.requestAnimationFrame||d,m=e.requestIdleCallback,f=/^picture$/i,h=["load","error","lazyincluded","_lazyloaded"],p={},y=Array.prototype.forEach,g=function(e,t){return p[t]||(p[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),p[t].test(e[r]("class")||"")&&p[t]},w=function(e,t){g(e,t)||e.setAttribute("class",(e[r]("class")||"").trim()+" "+t)},v=function(e,t){var a;(a=g(e,t))&&e.setAttribute("class",(e[r]("class")||"").replace(a," "))},b=function(e,t,a){var n=a?l:"removeEventListener";a&&b(e,t),h.forEach(function(a){e[n](a,t)})},k=function(e,a,i,s,o){var l=t.createEvent("Event");return i||(i={}),i.instance=n,l.initEvent(a,!s,!o),l.detail=i,e.dispatchEvent(l),l},z=function(t,a){var n;!o&&(n=e.picturefill||i.pf)?(a&&a.src&&!t[r]("srcset")&&t.setAttribute("srcset",a.src),n({reevaluate:!0,elements:[t]})):a&&a.src&&(t.src=a.src)},_=function(e,t){return(getComputedStyle(e,null)||{})[t]},E=function(e,t,a){for(a=a||e.offsetWidth;a<i.minSize&&t&&!e._lazysizesWidth;)a=t.offsetWidth,t=t.parentNode;return a},C=function(){var e,a,n=[],i=[],s=n,o=function(){var t=s;for(s=n.length?i:n,e=!0,a=!1;t.length;)t.shift()();e=!1},l=function(n,i){e&&!i?n.apply(this,arguments):(s.push(n),a||(a=!0,(t.hidden?d:u)(o)))};return l._lsFlush=o,l}(),L=function(e,t){return t?function(){C(e)}:function(){var t=this,a=arguments;C(function(){e.apply(t,a)})}},A=function(e){var t,n=0,s=i.throttleDelay,o=i.ricTimeout,l=function(){t=!1,n=a.now(),e()},r=m&&o>49?function(){m(l,{timeout:o}),o!==i.ricTimeout&&(o=i.ricTimeout)}:L(function(){d(l)},!0);return function(e){var i;(e=!0===e)&&(o=33),t||(t=!0,(i=s-(a.now()-n))<0&&(i=0),e||i<9?r():d(r,i))}},N=function(e){var t,n,i=function(){t=null,e()},s=function(){var e=a.now()-n;e<99?d(s,99-e):(m||i)(i)};return function(){n=a.now(),t||(t=d(s,99))}},B=function(){var o,m,h,p,E,B,x,T,H,R,S,W,F=/^img$/i,j=/^iframe$/i,D="onscroll"in e&&!/(gle|ing)bot/.test(navigator.userAgent),I=0,O=0,P=-1,$=function(e){O--,(!e||O<0||!e.target)&&(O=0)},q=function(e){return null==W&&(W="hidden"==_(t.body,"visibility")),W||!("hidden"==_(e.parentNode,"visibility")&&"hidden"==_(e,"visibility"))},Q=function(e,a){var n,i=e,o=q(e);for(T-=a,S+=a,H-=a,R+=a;o&&(i=i.offsetParent)&&i!=t.body&&i!=s;)(o=(_(i,"opacity")||1)>0)&&"visible"!=_(i,"overflow")&&(n=i.getBoundingClientRect(),o=R>n.left&&H<n.right&&S>n.top-1&&T<n.bottom+1);return o},U=function(){var e,a,l,c,d,u,f,h,y,g,w,v,b=n.elements;if((p=i.loadMode)&&O<8&&(e=b.length)){for(a=0,P++;a<e;a++)if(b[a]&&!b[a]._lazyRace)if(!D||n.prematureUnveil&&n.prematureUnveil(b[a]))Z(b[a]);else if((h=b[a][r]("data-expand"))&&(u=1*h)||(u=I),g||(g=!i.expand||i.expand<1?s.clientHeight>500&&s.clientWidth>500?500:370:i.expand,n._defEx=g,w=g*i.expFactor,v=i.hFac,W=null,I<w&&O<1&&P>2&&p>2&&!t.hidden?(I=w,P=0):I=p>1&&P>1&&O<6?g:0),y!==u&&(B=innerWidth+u*v,x=innerHeight+u,f=-1*u,y=u),l=b[a].getBoundingClientRect(),(S=l.bottom)>=f&&(T=l.top)<=x&&(R=l.right)>=f*v&&(H=l.left)<=B&&(S||R||H||T)&&(i.loadHidden||q(b[a]))&&(m&&O<3&&!h&&(p<3||P<4)||Q(b[a],u))){if(Z(b[a]),d=!0,O>9)break}else!d&&m&&!c&&O<4&&P<4&&p>2&&(o[0]||i.preloadAfterLoad)&&(o[0]||!h&&(S||R||H||T||"auto"!=b[a][r](i.sizesAttr)))&&(c=o[0]||b[a]);c&&!d&&Z(c)}},V=A(U),G=function(e){var t=e.target;t._lazyCache?delete t._lazyCache:($(e),w(t,i.loadedClass),v(t,i.loadingClass),b(t,K),k(t,"lazyloaded"))},J=L(G),K=function(e){J({target:e.target})},X=function(e){var t,a=e[r](i.srcsetAttr);(t=i.customMedia[e[r]("data-media")||e[r]("media")])&&e.setAttribute("media",t),a&&e.setAttribute("srcset",a)},Y=L(function(e,t,a,n,s){var o,l,c,u,m,p;(m=k(e,"lazybeforeunveil",t)).defaultPrevented||(n&&(a?w(e,i.autosizesClass):e.setAttribute("sizes",n)),l=e[r](i.srcsetAttr),o=e[r](i.srcAttr),s&&(u=(c=e.parentNode)&&f.test(c.nodeName||"")),p=t.firesLoad||"src"in e&&(l||o||u),m={target:e},w(e,i.loadingClass),p&&(clearTimeout(h),h=d($,2500),b(e,K,!0)),u&&y.call(c.getElementsByTagName("source"),X),l?e.setAttribute("srcset",l):o&&!u&&(j.test(e.nodeName)?function(e,t){var a=e.getAttribute("data-load-mode")||i.iframeLoadMode;0==a?e.contentWindow.location.replace(t):1==a&&(e.src=t)}(e,o):e.src=o),s&&(l||u)&&z(e,{src:o})),e._lazyRace&&delete e._lazyRace,v(e,i.lazyClass),C(function(){var t=e.complete&&e.naturalWidth>1;p&&!t||(t&&w(e,i.fastLoadedClass),G(m),e._lazyCache=!0,d(function(){"_lazyCache"in e&&delete e._lazyCache},9)),"lazy"==e.loading&&O--},!0)}),Z=function(e){if(!e._lazyRace){var t,a=F.test(e.nodeName),n=a&&(e[r](i.sizesAttr)||e[r]("sizes")),s="auto"==n;(!s&&m||!a||!e[r]("src")&&!e.srcset||e.complete||g(e,i.errorClass)||!g(e,i.lazyClass))&&(t=k(e,"lazyunveilread").detail,s&&M.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,O++,Y(e,t,s,n,a))}},ee=N(function(){i.loadMode=3,V()}),te=function(){3==i.loadMode&&(i.loadMode=2),ee()},ae=function(){m||(a.now()-E<999?d(ae,999):(m=!0,i.loadMode=3,V(),c("scroll",te,!0)))};return{_:function(){E=a.now(),n.elements=t.getElementsByClassName(i.lazyClass),o=t.getElementsByClassName(i.lazyClass+" "+i.preloadClass),c("scroll",V,!0),c("resize",V,!0),c("pageshow",function(e){if(e.persisted){var a=t.querySelectorAll("."+i.loadingClass);a.length&&a.forEach&&u(function(){a.forEach(function(e){e.complete&&Z(e)})})}}),e.MutationObserver?new MutationObserver(V).observe(s,{childList:!0,subtree:!0,attributes:!0}):(s[l]("DOMNodeInserted",V,!0),s[l]("DOMAttrModified",V,!0),setInterval(V,999)),c("hashchange",V,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach(function(e){t[l](e,V,!0)}),/d$|^c/.test(t.readyState)?ae():(c("load",ae),t[l]("DOMContentLoaded",V),d(ae,2e4)),n.elements.length?(U(),C._lsFlush()):V()},checkElems:V,unveil:Z,_aLSL:te}}(),M=function(){var e,a=L(function(e,t,a,n){var i,s,o;if(e._lazysizesWidth=n,n+="px",e.setAttribute("sizes",n),f.test(t.nodeName||""))for(s=0,o=(i=t.getElementsByTagName("source")).length;s<o;s++)i[s].setAttribute("sizes",n);a.detail.dataAttr||z(e,a.detail)}),n=function(e,t,n){var i,s=e.parentNode;s&&(n=E(e,s,n),(i=k(e,"lazybeforesizes",{width:n,dataAttr:!!t})).defaultPrevented||(n=i.detail.width)&&n!==e._lazysizesWidth&&a(e,s,i,n))},s=N(function(){var t,a=e.length;if(a)for(t=0;t<a;t++)n(e[t])});return{_:function(){e=t.getElementsByClassName(i.autosizesClass),c("resize",s)},checkElems:s,updateElem:n}}(),x=function(){!x.i&&t.getElementsByClassName&&(x.i=!0,M._(),B._())};return d(function(){i.init&&x()}),n={cfg:i,autoSizer:M,loader:B,init:x,uP:z,aC:w,rC:v,hC:g,fire:k,gW:E,rAF:C}}(e,e.document,Date);e.lazySizes=t,"object"==typeof module&&module.exports&&(module.exports=t)}("undefined"!=typeof window?window:{});
},{}]},{},["mwh7"], null)
//# sourceMappingURL=/footer_links.1951aef6.js.map