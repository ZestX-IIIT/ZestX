parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"fAO6":[function(require,module,exports) {
let e,t,n=document.getElementById("nabar_container"),a=document.getElementById("primary_container_for_home_page_content"),s=document.getElementById("primnary_event_details_container"),o=document.getElementById("primnary_profile_details_container"),i=document.getElementById("primnary_edit_profile_container"),r=document.getElementById("primnary_change_password_container"),l=document.getElementsByClassName("event_poster_image"),d=document.getElementById("preloader_container"),c=document.getElementById("poster1"),m=document.getElementById("poster2"),u=document.getElementById("poster3");const g="https://whispering-ridge-40670.herokuapp.com";let f,h,p,y,v,_,w,E,b,k,L,I,B,z,C,T,M=localStorage.getItem("jwt"),A=document.getElementById("home"),$=document.getElementById("events"),N=document.getElementById("sponsers"),P=document.getElementById("team"),H=document.getElementById("faq"),D=document.getElementById("dot"),S=document.getElementById("homesec"),x=document.getElementById("eventssec"),j=document.getElementById("teamsec"),O=document.getElementById("sponser_container"),F=document.getElementById("faqsec"),R=document.getElementById("Progressbar"),Y=document.getElementById("scrollPath"),V=0,W=0,U=[8,9,7,6,10],q=document.getElementById("profile_button"),G=Date.now(),J=0;function Z(){Q(),X()}async function Q(){try{if(M){const e=await fetch(`${g}/fest/getlist`,{method:"GET",headers:{authorization:M}}),t=await e.json();f=t.data;const n=await fetch(`${g}/user/getdetails`,{method:"GET",headers:{authorization:M}}),a=await n.json();h=a.data,q.innerHTML=`${h.user_name[0]}`}}catch(e){le(0,"Error occured re-try!"),console.log(e)}}function X(){setTimeout(function(){p=document.getElementById("back_btn_from_festival_details_page"),y=document.getElementById("back_btn_from_profile_details_page"),v=document.getElementById("back_btn_from_edit_profile_page"),_=document.getElementById("back_btn_from_change_password_page"),w=document.getElementById("forgot_password_at_change_password_page"),E=document.getElementById("forgot_password_at_edit_profile_page"),z=document.getElementById("OngoingEventsList"),C=document.getElementById("PastEventsList"),q.addEventListener("click",()=>{M?he():(le(2,"Please sign-in first!"),window.location.href="/signin")}),K(T=[document.getElementById("home_hamburger_menu"),document.getElementById("events_hamburger_menu"),document.getElementById("team_hamburger_menu"),document.getElementById("sponsers_hamburger_menu"),document.getElementById("faq_hamburger_menu")]),ee(0),b=document.getElementById("EditButton"),k=document.getElementById("SaveButton"),L=document.getElementById("UpdateButton"),B=document.getElementById("ChangePasswordButton"),I=document.getElementById("LogoutButton");let l=document.getElementById("EventRegister"),c=0;e=document.getElementsByClassName("slide"),t=document.getElementsByClassName("event_poster_image");try{l.addEventListener("click",async()=>{if(ue(),se(c)){const e=await fetch(`${g}/fest/unregister`,{method:"POST",headers:{"Content-Type":"application/json",authorization:M},body:JSON.stringify({id:c})});if(400==e.status)return ge(),void le(2,"Please verify your email!");if(404==e.status)return ge(),void le(2,"User not registered please refresh!");if(500==e.status)return ge(),void le(0,"Error occured Please re-try!");ge();let t=f.find(e=>e.fest_id==c).user_id;const n=t.indexOf(h.user_id),a=h.fest_id.indexOf(`${c}`);n>-1&&t.splice(n,1),a>-1&&h.fest_id.splice(a,1),le(1,"User unregistered successfully!"),ae(c)}else{const e=await fetch(`${g}/fest/register`,{method:"POST",headers:{"Content-Type":"application/json",authorization:M},body:JSON.stringify({id:c})});if(400==e.status)return ge(),void le(2,"Please verify your email!");if(404==e.status)return ge(),void le(2,"User already registered please refresh!");if(500==e.status)return ge(),void le(0,"Error occured Please re-try!");ge(),le(1,"User registered successfully!");let t=f.find(e=>e.fest_id==c).user_id;null==t?t=[h.user_id]:t[t.length]=h.user_id,null==h.fest_id?h.fest_id=[`${c}`]:h.fest_id[h.fest_id.length]=`${c}`,l.innerHTML="Unregister",l.style.animation="none"}});for(let n=0;n<5;n++)t[n].addEventListener("click",()=>{1==e[n].checked&&(M?(c=U[n],ce(U[n]),ge()):(window.location.href="/signup",le(2,"Please sign-in first!")))});p.addEventListener("click",()=>{me(),ne(0),te(1),te(3),te(4),te(2)}),y.addEventListener("click",()=>{me(),ne(0),te(2),te(3),te(4),te(1),q.innerHTML=`${h.user_name[0]}`}),_.addEventListener("click",()=>{he()}),v.addEventListener("click",()=>{he()}),b.addEventListener("click",()=>{ve(d),setTimeout(()=>{ve(i)},200),ye(r),ye(a),ye(s),ye(o),ye(n),ye(Y),ye(R),setTimeout(()=>{ye(d)},1500),de(h)}),B.addEventListener("click",()=>{fe(),re()}),w.addEventListener("click",async()=>{ue(),500==(await fetch(`${g}/auth/forgotpasswordhomepage`,{method:"GET",headers:{authorization:M}})).status?(le(0,"Error occured re-try!"),fe()):(le(1,"Link to reset password has been sent to your email-id!"),fe())}),E.addEventListener("click",async()=>{if(ue(),500==(await fetch(`${g}/auth/forgotpasswordhomepage`,{method:"GET",headers:{authorization:M}})).status)return le(0,"Error occured re-try!"),void pe();le(1,"Link to reset password has been sent to your email-id!!"),pe()}),I.addEventListener("click",()=>{localStorage.removeItem("jwt"),location.href="/"}),L.addEventListener("click",async()=>{let e=document.getElementById("current_password").value,t=document.getElementById("new_password").value,n=document.getElementById("confirm_new_password").value,a=Ie(t);if(t!=n)return le(2,"Both passwords should be same!");if(!a[0])return le(2,`${a[1]}`);if(!(e&&t&&n))return le(2,"Please fill all details properly!");ue();const s=await fetch(`${g}/user/changepassword`,{method:"POST",headers:{"Content-Type":"application/json",authorization:localStorage.getItem("jwt")},body:JSON.stringify({oldPassword:e,newPassword:t})}),o=s.json();return 400==s.status?(fe(),void le(2,"Incorrect current password!")):444==s.status?(fe(),void le(2,`${o.error}`)):500==s.status?(fe(),void le(0,"Internal server error please re-try!")):(le(1,"Your password updated successfully!"),void he())}),k.addEventListener("click",async()=>{let e=document.getElementById("edit_email").value,t=document.getElementById("edit_name").value,n=document.getElementById("edit_phone_number").value,a=document.getElementById("password").value;if(!(a&&e&&n&&t))return le(2,"Please enter all details properly!");if(!ke(e))return le(2,"Please Enter a valid email!");ue();const s=await fetch(`${g}/user/updatedetails`,{method:"POST",headers:{"Content-Type":"application/json",authorization:localStorage.getItem("jwt")},body:JSON.stringify({user_name:t,email:e,password:a,mobile:n})});if(400==s.status)return pe(),void le(2,"Incorrect Password!");if(404==s.status)return le(2,"Please Enter a valid email!"),void(d.style.display="none");if(500==s.status)return pe(),void le(0,"Internal server error please re-try!");if(200==s.status)return le(1,"Your details updated successfully!"),h.user_name=t,h.mobile=n,void he();le(1,"Your details updated successfully! Please verify your updated email-id!"),h.user_name=t,h.email=e,h.mobile=n,he();const o=await s.json();o.token&&localStorage.setItem("jwt",o.token)}),me(),AOS.init({easing:"ease-in-out",once:!0})}catch(m){le(0,"Error occured re-try!"),console.log(m)}},500),window.addEventListener("scroll",()=>{let e=window.innerHeight;window.pageYOffset<=x.offsetTop-e/2?0!=W&&(W=0,ne(0),te(1),te(2)):window.pageYOffset<=j.offsetTop-e/2?1!=W&&(ne(W=1),te(0),te(2)):window.pageYOffset<=O.offsetTop-e/2?2!=W&&(ne(W=2),te(1),te(3)):window.pageYOffset<=F.offsetTop-e/2?3!=W&&(ne(W=3),te(2),te(4)):4!=W&&(ne(W=4),te(3))}),setInterval(()=>{0==V?(c.classList.add("fade-class"),m.classList.remove("fade-class")):1==V?(m.classList.add("fade-class"),u.classList.remove("fade-class")):(u.classList.add("fade-class"),c.classList.remove("fade-class")),V++,V%=3},4e3),A.addEventListener("click",()=>{S.scrollIntoView({behavior:"smooth"})}),$.addEventListener("click",()=>{x.scrollIntoView({behavior:"smooth"})}),P.addEventListener("click",()=>{j.scrollIntoView({behavior:"smooth"})}),N.addEventListener("click",()=>{O.scrollIntoView({behavior:"smooth"})}),H.addEventListener("click",()=>{F.scrollIntoView({behavior:"smooth"})})}function K(e){e[0].addEventListener("click",()=>{ee(0),S.scrollIntoView({behavior:"smooth"})}),e[1].addEventListener("click",()=>{ee(1),x.scrollIntoView({behavior:"smooth"})}),e[2].addEventListener("click",()=>{ee(2),j.scrollIntoView({behavior:"smooth"})}),e[3].addEventListener("click",()=>{ee(3),O.scrollIntoView({behavior:"smooth"})}),e[4].addEventListener("click",()=>{ee(4),F.scrollIntoView({behavior:"smooth"})})}function ee(e){T[J].style.color="white",J=e,T[e].style.color="pink"}function te(e){switch(e){case 0:D.classList.remove("dothome"),A.classList.remove("navactive");break;case 1:D.classList.remove("dotevents"),$.classList.remove("navactive");break;case 2:D.classList.remove("dotteam"),P.classList.remove("navactive");break;case 3:D.classList.remove("dotsponsers"),N.classList.remove("navactive");break;case 4:D.classList.remove("dotfaq"),H.classList.remove("navactive")}}function ne(e){switch(e){case 0:A.classList.add("navactive"),D.classList.add("dothome");break;case 1:$.classList.add("navactive"),D.classList.add("dotevents");break;case 2:P.classList.add("navactive"),D.classList.add("dotteam");break;case 3:N.classList.add("navactive"),D.classList.add("dotsponsers");break;case 4:H.classList.add("navactive"),D.classList.add("dotfaq")}}function ae(e){const t=f.find(t=>t.fest_id==e);let n=document.getElementById("EventRegister");n.style.animation="bg_transition 0.4s ease-in-out alternate infinite",0==t.price?n.innerHTML="register(free)":n.innerHTML=`register(${t.price})`}function se(e){const t=f.find(t=>t.fest_id==e).user_id;return!(null==t||!t.includes(h.user_id))}function oe(e){let t=document.getElementById("name"),n=document.getElementById("phone_number"),a=document.getElementById("email");t.value=`${e.user_name}`,n.value=`${e.mobile}`,a.value=`${e.email}`;let s=[],o=[];null!=e.fest_id&&(f.forEach(t=>{e.fest_id.includes(`${t.fest_id}`)&&(Date.now()<parseInt(t.end_date)?s[s.length]=t:o[o.length]=t)}),ie(s,o))}function ie(e,t){z.innerHTML="",C.innerHTML="",e.forEach(e=>{const{fest_name:t,start_date:n,end_date:a}=e;var s=new Date(parseInt(n)),o=new Date(parseInt(a));let i=s.getDate()+"-"+(s.getMonth()+1)+"-"+s.getFullYear(),r=o.getDate()+"-"+(o.getMonth()+1)+"-"+o.getFullYear();const l=document.createElement("div");l.classList.add("EventList"),l.id="Event_1";const d=`<h2>${t}</h2>\n    <h4>${i} - ${r}</h4>\n    \n    `;l.innerHTML=d,z.appendChild(l)}),t.forEach(e=>{const{fest_name:t,description:n,start_date:a,end_date:s}=e;var o=new Date(parseInt(a)),i=new Date(parseInt(s));let r=o.getDate()+"-"+(o.getMonth()+1)+"-"+o.getFullYear(),l=i.getDate()+"-"+(i.getMonth()+1)+"-"+i.getFullYear();const d=document.createElement("div");d.classList.add("EventList"),d.id="Event_1";const c=`<h2>${t}</h2>\n    <h4>${r} - ${l}</h4>\n    \n    `;d.innerHTML=c,C.appendChild(d)})}function re(){document.getElementById("current_password").value="",document.getElementById("new_password").value="",document.getElementById("confirm_new_password").value=""}function le(e,t){if(Date.now()-G>5e3){let n=document.getElementById("toastAlertMessage"),a=document.getElementById("toastImage"),s=document.getElementById("toastFrontMessage"),o=document.getElementById("toastDescriptionMessage"),i=t.length+7;document.getElementById("toastAlertMessage").style.setProperty("--foo",`${i}ch`),1==e?(a.src="./assets/_general/success_tick.svg",s.style.backgroundColor="green"):0==e?(a.src="./assets/_general/error_cross.svg",s.style.backgroundColor="red"):(a.src="./assets/_general/neutral_exclamation.svg",s.style.backgroundColor="black"),o.innerText=" ",setTimeout(function(){o.innerText=t},600),setTimeout(function(){o.innerText=" "},4200),n.className="toastPopUp",setTimeout(function(){n.className=n.className.replace("toastPopUp","")},5e3),G=Date.now()}else setTimeout(function(){le(e,t)},5500-(Date.now()-G))}function de(e){document.getElementById("edit_name").value=`${e.user_name}`,document.getElementById("edit_phone_number").value=`${e.mobile}`,document.getElementById("edit_email").value=`${e.email}`,document.getElementById("password").value=""}function ce(e){const t=f.find(t=>t.fest_id==e);let n=document.getElementById("EventDetailsContainer"),a=document.getElementById("EventName"),s=document.getElementById("EventDate"),o=document.getElementById("EventRulesContent"),i=document.getElementById("EventDescription"),r=document.getElementById("EventPrizesContent"),l=document.getElementById("EventRegister"),d=t.user_id;var c=new Date(parseInt(t.start_date)),m=new Date(parseInt(t.end_date));let u=c.getDate()+"-"+(c.getMonth()+1)+"-"+c.getFullYear(),g=m.getDate()+"-"+(m.getMonth()+1)+"-"+m.getFullYear();switch(e){case 8:n.style.backgroundImage="url('./assets/home_page/events_details/compressed_event_details_webp/hot_stepper_bg.webp'), linear-gradient(180deg, #0e1391 0%, #0e0045 100%)";break;case 7:n.style.background="url('./assets/home_page/events_details/compressed_event_details_webp/raise_your_mic_bg.webp'), linear-gradient(180deg, #0e1391 0%, #0e0045 100%)";break;case 6:n.style.background="url('./assets/home_page/events_details/compressed_event_details_webp/rangshala_bg.webp'), linear-gradient(180deg, #0e1391 0%, #0e0045 100%)";break;case 9:n.style.background="url('./assets/home_page/events_details/compressed_event_details_webp/one_mic_stand_bg.webp'), linear-gradient(180deg, #0e1391 0%, #0e0045 100%)";break;case 10:n.style.background="url('./assets/home_page/events_details/compressed_event_details_webp/strokes_bg.webp'), linear-gradient(180deg, #0e1391 0%, #0e0045 100%)"}a.innerHTML=`${t.fest_name}`,o.innerHTML=`${t.rules}`,i.innerHTML=`${t.description}`,r.innerHTML=`${t.prize}`,s.innerHTML=`${u} - ${g}`,null!=d&&d.includes(h.user_id)?(l.style.animation="none",l.innerHTML="unregister"):(l.style.animation="bg_transition 0.4s ease-in-out alternate infinite",0==t.price?l.innerHTML="register(free)":l.innerHTML=`register(${t.price})`)}function me(){ve(a),ve(Y),ve(R),ve(n),ye(s),ye(d),ye(o),ye(r),ye(i)}function ue(){ve(d),ye(s),ye(a),ye(o),ye(i),ye(r),ye(n),ye(Y),ye(R)}function ge(){ve(s),ye(a),ye(d),ye(o),ye(i),ye(r),ye(n),ye(Y),ye(R)}function fe(){ve(r),ye(s),ye(a),ye(d),ye(o),ye(i),ye(n),ye(Y),ye(R)}function he(){oe(h),ve(o),ye(r),ye(a),ye(d),ye(s),ye(i),ye(n),ye(Y),ye(R)}function pe(){ve(i),ye(r),ye(a),ye(d),ye(s),ye(o),ye(n),ye(Y),ye(R)}function ye(e){e.classList.contains("display_to_block")&&e.classList.remove("display_to_block"),e.classList.add("display_to_none"),"none"!=e.style.display&&(e.classList.add("display_to_none"),setTimeout(function(){e.style.display="none",e.style.opacity=0},500))}function ve(e){e.style.display=e==a?"grid":e==n?"flex":"block",e.style.opacity=1,e.classList.contains("display_to_none")&&e.classList.remove("display_to_none"),e.classList.add("display_to_block")}window.addEventListener("load",()=>{setTimeout(()=>{_e(2,Z)},200)});var _e=function(e,t){const n=localStorage.getItem("jwt");n&&null!=n?fetch("https://whispering-ridge-40670.herokuapp.com/user/getdetails",{method:"GET",headers:{authorization:n}}).then(e=>e.json()).then(n=>{let a=n.data.is_admin;switch(e){case 0:we(a);break;case 1:Ee(a,t);break;case 2:be(a,t)}}).catch(e=>{console.log(e)}):e>0?window.location.href="/signup":t()};function we(e){window.location.href=e?"/admin":"/home"}function Ee(e,t){e?t():window.location.href="/home"}function be(e,t){e?window.location.href="/admin":t()}function ke(e){return/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)}setTimeout(function(){let e=document.getElementById("slider");"https://zestx.netlify.app/general/slider_event.html"==location.href&&(e.style.marginTop="12vh");var t=document.getElementsByClassName("slide");let n=0;var a=!0;let s=document.getElementsByClassName("image-container"),o=document.getElementById("poster1"),i=document.getElementById("poster2"),r=document.getElementById("poster3");s[0].addEventListener("click",()=>{x.scrollIntoView({behavior:"smooth"}),o.addEventListener("click",()=>{t[0].checked=!0,a=!1}),i.addEventListener("click",()=>{t[2].checked=!0,a=!1}),r.addEventListener("click",()=>{t[3].checked=!0,a=!1})});for(var l=0;l<t.length;l++)t[l].addEventListener("change",function(){for(let e=0;e<t.length;e++)if(t[e].checked){n=e;break}});setInterval(()=>{a&&(t[n].checked=!0,n++,n%=5)},4e3);var d=document.getElementById("slider");d.addEventListener("mouseover",()=>{a=!1}),d.addEventListener("mouseout",()=>{a=!0})},500),function(e){var t=function(e,t,n){"use strict";var a,s;if(function(){var t,n={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",fastLoadedClass:"ls-is-cached",iframeLoadMode:0,srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};for(t in s=e.lazySizesConfig||e.lazysizesConfig||{},n)t in s||(s[t]=n[t])}(),!t||!t.getElementsByClassName)return{init:function(){},cfg:s,noSupport:!0};var o=t.documentElement,i=e.HTMLPictureElement,r="addEventListener",l="getAttribute",d=e[r].bind(e),c=e.setTimeout,m=e.requestAnimationFrame||c,u=e.requestIdleCallback,g=/^picture$/i,f=["load","error","lazyincluded","_lazyloaded"],h={},p=Array.prototype.forEach,y=function(e,t){return h[t]||(h[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),h[t].test(e[l]("class")||"")&&h[t]},v=function(e,t){y(e,t)||e.setAttribute("class",(e[l]("class")||"").trim()+" "+t)},_=function(e,t){var n;(n=y(e,t))&&e.setAttribute("class",(e[l]("class")||"").replace(n," "))},w=function(e,t,n){var a=n?r:"removeEventListener";n&&w(e,t),f.forEach(function(n){e[a](n,t)})},E=function(e,n,s,o,i){var r=t.createEvent("Event");return s||(s={}),s.instance=a,r.initEvent(n,!o,!i),r.detail=s,e.dispatchEvent(r),r},b=function(t,n){var a;!i&&(a=e.picturefill||s.pf)?(n&&n.src&&!t[l]("srcset")&&t.setAttribute("srcset",n.src),a({reevaluate:!0,elements:[t]})):n&&n.src&&(t.src=n.src)},k=function(e,t){return(getComputedStyle(e,null)||{})[t]},L=function(e,t,n){for(n=n||e.offsetWidth;n<s.minSize&&t&&!e._lazysizesWidth;)n=t.offsetWidth,t=t.parentNode;return n},I=function(){var e,n,a=[],s=[],o=a,i=function(){var t=o;for(o=a.length?s:a,e=!0,n=!1;t.length;)t.shift()();e=!1},r=function(a,s){e&&!s?a.apply(this,arguments):(o.push(a),n||(n=!0,(t.hidden?c:m)(i)))};return r._lsFlush=i,r}(),B=function(e,t){return t?function(){I(e)}:function(){var t=this,n=arguments;I(function(){e.apply(t,n)})}},z=function(e){var t,a=0,o=s.throttleDelay,i=s.ricTimeout,r=function(){t=!1,a=n.now(),e()},l=u&&i>49?function(){u(r,{timeout:i}),i!==s.ricTimeout&&(i=s.ricTimeout)}:B(function(){c(r)},!0);return function(e){var s;(e=!0===e)&&(i=33),t||(t=!0,(s=o-(n.now()-a))<0&&(s=0),e||s<9?l():c(l,s))}},C=function(e){var t,a,s=function(){t=null,e()},o=function(){var e=n.now()-a;e<99?c(o,99-e):(u||s)(s)};return function(){a=n.now(),t||(t=c(o,99))}},T=function(){var i,u,f,h,L,T,A,$,N,P,H,D,S=/^img$/i,x=/^iframe$/i,j="onscroll"in e&&!/(gle|ing)bot/.test(navigator.userAgent),O=0,F=0,R=-1,Y=function(e){F--,(!e||F<0||!e.target)&&(F=0)},V=function(e){return null==D&&(D="hidden"==k(t.body,"visibility")),D||!("hidden"==k(e.parentNode,"visibility")&&"hidden"==k(e,"visibility"))},W=function(e,n){var a,s=e,i=V(e);for($-=n,H+=n,N-=n,P+=n;i&&(s=s.offsetParent)&&s!=t.body&&s!=o;)(i=(k(s,"opacity")||1)>0)&&"visible"!=k(s,"overflow")&&(a=s.getBoundingClientRect(),i=P>a.left&&N<a.right&&H>a.top-1&&$<a.bottom+1);return i},U=function(){var e,n,r,d,c,m,g,f,p,y,v,_,w=a.elements;if((h=s.loadMode)&&F<8&&(e=w.length)){for(n=0,R++;n<e;n++)if(w[n]&&!w[n]._lazyRace)if(!j||a.prematureUnveil&&a.prematureUnveil(w[n]))K(w[n]);else if((f=w[n][l]("data-expand"))&&(m=1*f)||(m=O),y||(y=!s.expand||s.expand<1?o.clientHeight>500&&o.clientWidth>500?500:370:s.expand,a._defEx=y,v=y*s.expFactor,_=s.hFac,D=null,O<v&&F<1&&R>2&&h>2&&!t.hidden?(O=v,R=0):O=h>1&&R>1&&F<6?y:0),p!==m&&(T=innerWidth+m*_,A=innerHeight+m,g=-1*m,p=m),r=w[n].getBoundingClientRect(),(H=r.bottom)>=g&&($=r.top)<=A&&(P=r.right)>=g*_&&(N=r.left)<=T&&(H||P||N||$)&&(s.loadHidden||V(w[n]))&&(u&&F<3&&!f&&(h<3||R<4)||W(w[n],m))){if(K(w[n]),c=!0,F>9)break}else!c&&u&&!d&&F<4&&R<4&&h>2&&(i[0]||s.preloadAfterLoad)&&(i[0]||!f&&(H||P||N||$||"auto"!=w[n][l](s.sizesAttr)))&&(d=i[0]||w[n]);d&&!c&&K(d)}},q=z(U),G=function(e){var t=e.target;t._lazyCache?delete t._lazyCache:(Y(e),v(t,s.loadedClass),_(t,s.loadingClass),w(t,Z),E(t,"lazyloaded"))},J=B(G),Z=function(e){J({target:e.target})},Q=function(e){var t,n=e[l](s.srcsetAttr);(t=s.customMedia[e[l]("data-media")||e[l]("media")])&&e.setAttribute("media",t),n&&e.setAttribute("srcset",n)},X=B(function(e,t,n,a,o){var i,r,d,m,u,h;(u=E(e,"lazybeforeunveil",t)).defaultPrevented||(a&&(n?v(e,s.autosizesClass):e.setAttribute("sizes",a)),r=e[l](s.srcsetAttr),i=e[l](s.srcAttr),o&&(m=(d=e.parentNode)&&g.test(d.nodeName||"")),h=t.firesLoad||"src"in e&&(r||i||m),u={target:e},v(e,s.loadingClass),h&&(clearTimeout(f),f=c(Y,2500),w(e,Z,!0)),m&&p.call(d.getElementsByTagName("source"),Q),r?e.setAttribute("srcset",r):i&&!m&&(x.test(e.nodeName)?function(e,t){var n=e.getAttribute("data-load-mode")||s.iframeLoadMode;0==n?e.contentWindow.location.replace(t):1==n&&(e.src=t)}(e,i):e.src=i),o&&(r||m)&&b(e,{src:i})),e._lazyRace&&delete e._lazyRace,_(e,s.lazyClass),I(function(){var t=e.complete&&e.naturalWidth>1;h&&!t||(t&&v(e,s.fastLoadedClass),G(u),e._lazyCache=!0,c(function(){"_lazyCache"in e&&delete e._lazyCache},9)),"lazy"==e.loading&&F--},!0)}),K=function(e){if(!e._lazyRace){var t,n=S.test(e.nodeName),a=n&&(e[l](s.sizesAttr)||e[l]("sizes")),o="auto"==a;(!o&&u||!n||!e[l]("src")&&!e.srcset||e.complete||y(e,s.errorClass)||!y(e,s.lazyClass))&&(t=E(e,"lazyunveilread").detail,o&&M.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,F++,X(e,t,o,a,n))}},ee=C(function(){s.loadMode=3,q()}),te=function(){3==s.loadMode&&(s.loadMode=2),ee()},ne=function(){u||(n.now()-L<999?c(ne,999):(u=!0,s.loadMode=3,q(),d("scroll",te,!0)))};return{_:function(){L=n.now(),a.elements=t.getElementsByClassName(s.lazyClass),i=t.getElementsByClassName(s.lazyClass+" "+s.preloadClass),d("scroll",q,!0),d("resize",q,!0),d("pageshow",function(e){if(e.persisted){var n=t.querySelectorAll("."+s.loadingClass);n.length&&n.forEach&&m(function(){n.forEach(function(e){e.complete&&K(e)})})}}),e.MutationObserver?new MutationObserver(q).observe(o,{childList:!0,subtree:!0,attributes:!0}):(o[r]("DOMNodeInserted",q,!0),o[r]("DOMAttrModified",q,!0),setInterval(q,999)),d("hashchange",q,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach(function(e){t[r](e,q,!0)}),/d$|^c/.test(t.readyState)?ne():(d("load",ne),t[r]("DOMContentLoaded",q),c(ne,2e4)),a.elements.length?(U(),I._lsFlush()):q()},checkElems:q,unveil:K,_aLSL:te}}(),M=function(){var e,n=B(function(e,t,n,a){var s,o,i;if(e._lazysizesWidth=a,a+="px",e.setAttribute("sizes",a),g.test(t.nodeName||""))for(o=0,i=(s=t.getElementsByTagName("source")).length;o<i;o++)s[o].setAttribute("sizes",a);n.detail.dataAttr||b(e,n.detail)}),a=function(e,t,a){var s,o=e.parentNode;o&&(a=L(e,o,a),(s=E(e,"lazybeforesizes",{width:a,dataAttr:!!t})).defaultPrevented||(a=s.detail.width)&&a!==e._lazysizesWidth&&n(e,o,s,a))},o=C(function(){var t,n=e.length;if(n)for(t=0;t<n;t++)a(e[t])});return{_:function(){e=t.getElementsByClassName(s.autosizesClass),d("resize",o)},checkElems:o,updateElem:a}}(),A=function(){!A.i&&t.getElementsByClassName&&(A.i=!0,M._(),T._())};return c(function(){s.init&&A()}),a={cfg:s,autoSizer:M,loader:T,init:A,uP:b,aC:v,rC:_,hC:y,fire:E,gW:L,rAF:I}}(e,e.document,Date);e.lazySizes=t,"object"==typeof module&&module.exports&&(module.exports=t)}("undefined"!=typeof window?window:{}),setTimeout(()=>{let e=document.getElementsByClassName("imageHolder"),t=document.getElementsByClassName("outerContainer"),n=document.getElementsByClassName("team_section_github"),a=document.getElementsByClassName("team_section_linkedin"),s=document.getElementsByClassName("team_section_mail"),o=document.getElementsByClassName("teamMembers"),i=document.getElementsByClassName("teamContent");for(let r=1;r<n.length;r+=2)n[r].addEventListener("click",()=>{switch(r){case 1:window.open("https://github.com/kunaljain0212","_blank");break;case 3:case 11:window.open("https://github.com/manishprivet","_blank");break;case 5:window.open("https://github.com/TheNinza","_blank");break;case 7:window.open("https://github.com/hs2361","_blank");break;case 9:window.open("https://github.com/parthlaw","_blank");break;case 13:case 23:window.open("https://github.com/akashgupta1909","_blank");break;case 15:case 21:window.open("https://github.com/HarshilMendpara","_blank");break;case 17:case 19:window.open("https://github.com/RajVarsani","_blank")}});for(let r=1;r<a.length;r+=2)a[r].addEventListener("click",()=>{switch(r){case 1:window.open("https://www.linkedin.com/in/kunaljain0212/","_blank");break;case 3:case 11:window.open("https://www.linkedin.com/in/manishprivet/","_blank");break;case 5:window.open("https://www.linkedin.com/in/theninza/","_blank");break;case 7:window.open("https://www.linkedin.com/in/sharmaharsh23/","_blank");break;case 9:window.open("https://www.linkedin.com/in/parthlaw/","_blank");break;case 13:case 23:window.open("https://www.linkedin.com/in/akash-gupta-ab03721b8/","_blank");break;case 15:case 21:window.open("https://www.linkedin.com/in/harshil-mendpara/","_blank");break;case 17:case 19:window.open("https://www.linkedin.com/in/raj-varsani-404/","_blank")}});for(let r=1;r<s.length;r+=2)s[r].addEventListener("click",()=>{switch(r){case 1:window.open("mailto:jainkunal209@gmail.com","_blank");break;case 3:case 11:window.open("mailto:manishprivet808@gmail.com","_blank");break;case 5:window.open("mailto:niks.a3198@gmail.com","_blank");break;case 7:window.open("mailto:harshhsharma23@gmail.com","_blank");break;case 9:window.open("mailto:parthlaw24@gmail.com","_blank");break;case 13:case 23:window.open("mailto:akash.gupta.anup@gmail.com","_blank");break;case 15:case 21:window.open("mailto:hsmendpara2003@gmail.com","_blank");break;case 17:case 19:window.open("mailto:varasaniraj5@gmail.com","_blank")}});for(let r=0;r<e.length;r++)t[r].addEventListener("mouseenter",()=>{e[r].classList.add("imageHolder_toggle"),s[2*r].style.opacity=1,n[2*r].style.opacity=1,a[2*r].style.opacity=1}),t[r].addEventListener("mouseleave",()=>{e[r].classList.remove("imageHolder_toggle"),s[2*r].style.opacity=0,n[2*r].style.opacity=0,a[2*r].style.opacity=0});for(let r=0;r<n.length;r+=2)n[r+1].addEventListener("mouseenter",()=>{n[r+1].style.opacity=1,n[r].style.opacity=0}),n[r+1].addEventListener("mouseleave",()=>{n[r+1].style.opacity=0,n[r].style.opacity=1}),s[r+1].addEventListener("mouseenter",()=>{s[r+1].style.opacity=1,s[r].style.opacity=0}),s[r+1].addEventListener("mouseleave",()=>{s[r+1].style.opacity=0,s[r].style.opacity=1}),a[r+1].addEventListener("mouseenter",()=>{a[r+1].style.opacity=1,a[r].style.opacity=0}),a[r+1].addEventListener("mouseleave",()=>{a[r+1].style.opacity=0,a[r].style.opacity=1});for(let r=0;r<o.length;r++)i[r].addEventListener("click",()=>{for(let e=0;e<o.length;e++)e==r?(o[e].classList.add("teamMembers_active"),i[e].classList.add("teamContentActive")):(o[e].classList.remove("teamMembers_active"),i[e].classList.remove("teamContentActive"))})},200),setTimeout(function(){var e=document.getElementsByClassName("FAQQuestion"),t=document.getElementsByClassName("FAQArrowDown");const n=[];for(let a=0;a<e.length;a++)n[a]=!0,e[a].addEventListener("click",function(){this.classList.toggle("active");var e=this.nextElementSibling;e.style.maxHeight?e.style.maxHeight=null:e.style.maxHeight=e.scrollHeight+"px",n[a]?(t[a].classList.remove("ArrowRotate2"),t[a].classList.add("ArrowRotate"),n[a]=!1):(t[a].classList.remove("ArrowRotate"),t[a].classList.add("ArrowRotate2"),n[a]=!0)})},500),setTimeout(function(){let e=document.getElementById("hamburgermenuMainContainer"),t=document.getElementById("HamburgerMenuNavList"),n=document.getElementById("HBMBackground"),a=document.getElementById("hamburgerMenuBars"),s=!1;a.addEventListener("click",function(){s?(t.classList.toggle("Toggle_class_anim"),s=!1):(setTimeout(function(){t.classList.toggle("Toggle_class_anim")},300),s=!0);e.classList.toggle("Toggle_class"),n.classList.toggle("Toggle_class_background")})},500),setTimeout(function(){let e,t=document.getElementById("Progressbar"),n=window.innerWidth,a=n-100,s=n-20,o=[50,15,60],i=[50,15,60],r=[250,155,160];function l(){e=document.body.scrollHeight-window.innerHeight;let n=window.pageYOffset/e*100;t.style.height=n+"%",function(e){for(let t=0;t<o.length;t++)o[t]=i[t]+e*r[t]}(window.pageYOffset/e)}l(),window.onscroll=function(){l()};var d=0;let c=!1;function m(e){a=n-200,s=n-20,e.clientX>s&&(c=!0,g(e))}function u(e){c=!1}function g(t){c&&t.clientX>a&&(d=t.clientY,window.scrollBy(0,(d*e/window.innerHeight-window.pageYOffset)/10))}document.addEventListener("mousedown",m),document.addEventListener("touchstart",m),document.addEventListener("mousemove",g),document.addEventListener("touchmove",g),document.addEventListener("mouseleave",u),document.addEventListener("mouseup",u),document.addEventListener("touchend",u)},200);let Le=/^(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/;function Ie(e){let t;return e.length<6?[!1,t="Password should be minimum of 6 length!"]:e.length>20?[!1,t="Password should be maximum of 20 length!"]:e.search(/[A-Z]/)<0?[!1,t="Password should contain atleast 1 uppercase letter!"]:e.search(/[a-z]/)<0?[!1,t="Password should contain atleast 1 lowercase letter!"]:e.search(/[0-9]/)<0?[!1,t="Password should contain atleast 1 digit!"]:-1!=e.search(" ")?[!1,t="Password should not contain any spaces!"]:Le.test(e)?[!0,"Success"]:[!1,t="Password should contain atleast 1 special character!"]}setTimeout(()=>{bodymovin.loadAnimation({container:document.getElementById("user_edit_profile_anim_container"),renderer:"svg",loop:!0,autoplay:!0,path:"/user_edit_profile_page_anim/high_res/user_edit_profile_page_anim.json"}),bodymovin.loadAnimation({container:document.getElementById("change_user_password_page_anim_container"),renderer:"svg",loop:!0,autoplay:!0,path:"/security_anim_edit_password_page/high-res/security_anim_data.json"})},500);
},{}]},{},["fAO6"], null)
//# sourceMappingURL=/homepage.4edb87b5.js.map