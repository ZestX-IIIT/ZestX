parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Woji":[function(require,module,exports) {
let e,s=document.getElementById("signup"),t=document.getElementById("signin"),a=document.getElementById("signincontainer"),l=document.getElementById("signupcontainer"),n=document.getElementById("sign-up-msg-container-sign-in-up-page"),o=document.getElementById("signupButton"),i=document.getElementById("signinButton"),c=document.getElementById("forgot_password"),r=document.getElementById("preloader_container"),d=document.getElementById("bg1"),g=document.getElementById("bg2"),y=document.getElementById("bg3"),u=document.getElementById("bg4"),p=window.location.hash.substring(1),m=Date.now();const h="https://whispering-ridge-40670.herokuapp.com";function f(){i.addEventListener("click",async s=>{s.preventDefault();const t=document.getElementById("signinemail").value,a=document.getElementById("signinpassword").value;if(!t||!a)return v(2,"Please fill all the details properly!");if(!B(t))return v(2,"Please Enter a valid email!");r.style.display="block";try{const s=await fetch(`${h}/auth/signin`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,password:a})}),n=await s.json();if(400==s.status)v(2,"User does not exists, Please sign up!"),r.style.display="none";else if(404==s.status)v(2,"Please Enter a valid email!"),r.style.display="none";else if(444==s.status)v(2,"PLease Enter valid password!"),r.style.display="none";else if(500==s.status)v(0,"Internal server error please re-try!"),r.style.display="none";else{const{token:s}=n;localStorage.setItem("jwt",s);const t=await fetch(`${h}/user/getdetails`,{method:"GET",headers:{authorization:s}}),a=await t.json();(e=a.data).is_admin?window.location.href="./admin.html":window.location.href="./homepage.html"}}catch(l){v(0,"Internal server error please re-try!"),r.style.display="none"}}),o.addEventListener("click",async e=>{e.preventDefault();const s=document.getElementById("signupemail").value,t=document.getElementById("name").value,a=document.getElementById("signuppassword").value,l=document.getElementById("mobile").value,o=document.getElementById("confirm").value;if(!(s&&a&&t&&l))return v(2,"Please fill all the details properly!");if(!B(s))return v(2,"Please Enter a valid email!");if(10!=l.length)return v(2,"Mobile no. should be of 10 length!");if(a!=o)return v(2,"Passwords not matched with confirm password!");let i=b(a);if(!i[0])return v(2,`${i[1]}`);r.style.display="block";const c=await fetch(`${h}/auth/signup`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user_name:t,email:s,password:a,mobile:l})}),d=await c.json();if(400==c.status)v(2,"User already exists, Please sign in!"),r.style.display="none";else if(404==c.status)v(2,"Please Enter a valid email!"),r.style.display="none";else if(444==c.status)v(2,`${d.error}`),r.style.display="none";else if(500==c.status)v(0,"Internal server error please re-try!"),r.style.display="none";else{const e=d.data;localStorage.setItem("jwt",e),console.log("hehe"),n.style.display="flex"}}),c.addEventListener("click",async()=>{r.style.display="block";const e=document.getElementById("signinemail").value,s=await fetch(`${h}/auth/forgotpasswordsignin`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e})});400==s.status?(r.style.display="none",v(2,"Please enter registered email-id!")):404==s.status?(v(2,"Please Enter a valid email!"),r.style.display="none"):500==s.status?(r.style.display="none",v(0,"Error occured re-try!"),console.log(err)):(r.style.display="none",v(1,"Link to reset password has been sent to your email-id!"))}),"signin"==p&&(a.classList.toggle("display-class"),a.classList.toggle("opacity-class"),l.classList.toggle("opacity-class"),l.classList.toggle("display-class"),d.classList.toggle("opacity-class"),g.classList.toggle("opacity-class"),y.classList.toggle("opacity-class"),u.classList.toggle("opacity-class"),d.classList.toggle("display-class"),g.classList.toggle("display-class"),y.classList.toggle("display-class"),u.classList.toggle("display-class")),t.addEventListener("click",()=>{l.classList.toggle("opacity-class"),a.classList.toggle("opacity-class"),l.classList.toggle("display-class"),a.classList.toggle("display-class"),d.classList.toggle("opacity-class"),g.classList.toggle("opacity-class"),y.classList.toggle("opacity-class"),u.classList.toggle("opacity-class"),d.classList.toggle("display-class"),g.classList.toggle("display-class"),y.classList.toggle("display-class"),u.classList.toggle("display-class")}),s.addEventListener("click",()=>{l.classList.toggle("opacity-class"),a.classList.toggle("opacity-class"),l.classList.toggle("display-class"),a.classList.toggle("display-class"),d.classList.toggle("opacity-class"),g.classList.toggle("opacity-class"),y.classList.toggle("opacity-class"),u.classList.toggle("opacity-class"),d.classList.toggle("display-class"),g.classList.toggle("display-class"),y.classList.toggle("display-class"),u.classList.toggle("display-class")}),r.style.display="none",AOS.init({easing:"ease-in-out",once:!0,duration:600})}setTimeout(()=>{w(0,f)},200);var w=function(e,s){const t=localStorage.getItem("jwt");t&&null!=t?fetch("https://whispering-ridge-40670.herokuapp.com/user/getdetails",{method:"GET",headers:{authorization:t}}).then(e=>e.json()).then(t=>{let a=t.data.is_admin;switch(e){case 0:L(a);break;case 1:E(a,s);break;case 2:I(a,s)}}).catch(e=>{console.log(e)}):e>0?window.location.href="./signupsignin.html#signin":s()};function L(e){window.location.href=e?"./admin.html":"./homepage.html"}function E(e,s){e?s():window.location.href="./homepage.html"}function I(e,s){e?window.location.href="./admin.html":s()}function v(e,s){if(Date.now()-m>5e3){let t=document.getElementById("toastAlertMessage"),a=document.getElementById("toastImage"),l=document.getElementById("toastFrontMessage"),n=document.getElementById("toastDescriptionMessage"),o=s.length+7;document.getElementById("toastAlertMessage").style.setProperty("--foo",`${o}ch`),1==e?(a.src="../assets/_general/success_tick.svg",l.style.backgroundColor="green"):0==e?(a.src="../assets/_general/error_cross.svg",l.style.backgroundColor="red"):(a.src="../assets/_general/neutral_exclamation.svg",l.style.backgroundColor="black"),n.innerText=" ",setTimeout(function(){n.innerText=s},600),setTimeout(function(){n.innerText=" "},4200),t.className="toastPopUp",setTimeout(function(){t.className=t.className.replace("toastPopUp","")},5e3),m=Date.now()}else setTimeout(function(){v(e,s)},5500-(Date.now()-m))}function B(e){return/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)}let P=/^(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/;function b(e){let s;return e.length<6?[!1,s="Password should be minimum of 6 length!"]:e.length>20?[!1,s="Password should be maximum of 20 length!"]:e.search(/[A-Z]/)<0?[!1,s="Password should contain atleast 1 uppercase letter!"]:e.search(/[a-z]/)<0?[!1,s="Password should contain atleast 1 lowercase letter!"]:e.search(/[0-9]/)<0?[!1,s="Password should contain atleast 1 digit!"]:-1!=e.search(" ")?[!1,s="Password should not contain any spaces!"]:P.test(e)?[!0,"Success"]:[!1,s="Password should contain atleast 1 special character!"]}
},{}]},{},["Woji"], null)
//# sourceMappingURL=/signinsignup.c91c709f.js.map