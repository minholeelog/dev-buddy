(function(e){function t(t){for(var r,o,u=t[0],i=t[1],s=t[2],l=0,f=[];l<u.length;l++)o=u[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(f.length)f.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a={app:0},c=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-0bd8a4dc":"4363a37b","chunk-2d0e95df":"fe48b49d","chunk-41cf269a":"2fdff848","chunk-4482ef3e":"f7a3882f","chunk-7e23cf72":"0e50f45c","chunk-7f93e252":"cd5b7b61","chunk-9ea88b36":"ba646391"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-0bd8a4dc":1,"chunk-41cf269a":1,"chunk-4482ef3e":1,"chunk-7e23cf72":1,"chunk-7f93e252":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-0bd8a4dc":"3af970ad","chunk-2d0e95df":"31d6cfe0","chunk-41cf269a":"b3245939","chunk-4482ef3e":"2e7b5097","chunk-7e23cf72":"9c899633","chunk-7f93e252":"62264c76","chunk-9ea88b36":"31d6cfe0"}[e]+".css",a=i.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var s=c[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===a))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){s=f[u],l=s.getAttribute("data-href");if(l===r||l===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],d.parentNode.removeChild(d),n(c)},d.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var d=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2164:function(e,t,n){"use strict";n("6098")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("app-header"),n("weather-info"),n("router-view",{staticClass:"view"}),n("app-footer")],1)},a=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[n("vs-navbar",{staticClass:"navbar",attrs:{color:e.colorx,"text-color":"rgba(255,255,255,.6)","active-text-color":"rgba(255,255,255,1)"},model:{value:e.indexActive,callback:function(t){e.indexActive=t},expression:"indexActive"}},[n("div",{attrs:{slot:"title"},slot:"title"},[n("vs-navbar-title",[n("router-link",{attrs:{to:"/"}},[e._v("DevBuddy")])],1)],1),n("vs-navbar-item",{attrs:{index:"1"}}),n("vs-navbar-item",{attrs:{index:"2"}},[e.loggedIn?n("router-link",{attrs:{to:"/dash-board"}},[e._v(" "+e._s(e.userName)+" 님 대시보드 ")]):n("router-link",{attrs:{to:"/signup"}},[e._v("회원가입")])],1),n("vs-navbar-item",{attrs:{index:"3"}},[e.loggedIn?n("router-link",{attrs:{to:"/"},nativeOn:{click:function(t){return e.logout.apply(null,arguments)}}},[e._v("로그아웃")]):n("router-link",{attrs:{to:"/login"}},[e._v("로그인")])],1),n("vs-navbar-item",{attrs:{index:"4"}},[e.loggedIn?n("router-link",{attrs:{to:"/new-post"}},[e._v("스터디 모집")]):e._e()],1),n("vs-navbar-item",{attrs:{index:"5"}},[e.loggedIn?n("router-link",{attrs:{to:"/posts"}},[e._v("둘러보기")]):e._e()],1)],1)],1)},u=[],i={name:"AppHeader",data:function(){return{colorx:"#1B57A6",indexActive:0}},methods:{logout:function(){this.$store.commit("logout")}},computed:{loggedIn:function(){return this.$store.getters.getLoggedIn},userName:function(){return this.$store.getters.getUserName}}},s=i,l=(n("2164"),n("2877")),f=Object(l["a"])(s,c,u,!1,null,"69ba6c2d",null),d=f.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticClass:"app-footer"},[n("div",[e._v(e._s(e.user.name)+" All rights reserved. "+e._s(e.currentYear))]),n("ul",[n("li",[n("a",{attrs:{href:e.githubLink}},[n("i",{staticClass:"fab fa-github fa-2x"})])]),n("li",[n("a",{attrs:{href:e.mailTo}},[n("i",{staticClass:"fas fa-at fa-2x"})])])])])},p=[],g=(n("b0c0"),{name:"AppFooter",data:function(){return{currentYear:null,user:{name:"Minho Lee",github:"minholeelog",email:"91aiden.lee@gmail.com"}}},methods:{getCurrentYear:function(){this.currentYear=(new Date).getFullYear()}},computed:{githubLink:function(){return"https://github.com/".concat(this.user.name)},mailTo:function(){return"mailto:".concat(this.user.email)}},mounted:function(){this.getCurrentYear()}}),m=g,v=(n("d3a0"),Object(l["a"])(m,h,p,!1,null,"664508d8",null)),b=v.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"weather"},[n("i",{staticClass:"fas fa-location-arrow",on:{click:e.loadLocation}},[n("span",[e._v(e._s(e.currentWeather))])])])},y=[],_=(n("99af"),n("a4d3"),n("e01a"),{data:function(){return{city:null,country:null,weather:{desc:null,icon:null,temp:null},loading:!1}},methods:{fetchWeather:function(e,t){var n=this;this.loading=!0,this.$vs.loading(),this.$axios.get("https://api.openweathermap.org/data/2.5/weather?lat=".concat(e,"&lon=").concat(t,"&appid=").concat("9fad971fc1d3dda623de94b37ff07168","&units=metric")).then((function(e){var t=e.data;n.loading=!1,setTimeout((function(){n.$vs.loading.close()}),500);var r=t;n.city=r.name,n.country=r.sys.country,n.weather.desc=r.weather[0].description,n.weather.icon=r.weather[0].icon,n.weather.temp=r.main.temp})).catch((function(e){n.loading=!1,n.$vs.loading.close(),n.$vs.notify({title:"401 에러 발생",text:"API 호출 권한이 없습니다.",color:"danger"}),console.log(e)}))},loadLocation:function(){var e=JSON.parse(localStorage.getItem("coords"));null===e&&this.getCurrentLocation(),this.fetchWeather(e.lat,e.lon)},saveLocation:function(e,t){var n={lat:e,lon:t};localStorage.setItem("coords",JSON.stringify(n))},geoSuccess:function(e){var t=e.coords.latitude,n=e.coords.longitude;this.saveLocation(t,n)},geoError:function(e){console.log(e);var t="경도, 위도 값을 불러오지 못했습니다.";this.$vs.notify({title:"위치 정보 오류",text:t,color:"danger"})},getCurrentLocation:function(){console.log("왜왜왜왜왜왜왜오."),navigator.geolocation.getCurrentPosition(this.geoSuccess,this.geoError)}},computed:{currentTemp:function(){return Math.ceil(this.weather.temp)},currentWeather:function(){return this.country?"".concat(this.currentTemp,"° ").concat(this.weather.desc," @ ").concat(this.city,", ").concat(this.country):"날씨 불러오기"}}}),w=_,x=(n("5860"),Object(l["a"])(w,k,y,!1,null,"77e110be",null)),E=x.exports,O={name:"App",components:{AppHeader:d,AppFooter:b,WeatherInfo:E}},S=O,I=(n("5c0b"),Object(l["a"])(S,o,a,!1,null,null,null)),C=I.exports,N=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),A=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("h1",[e._v("DevBuddy")]),r("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),e.userName?r("h2",[e._v(e._s(e.userName)+"님 환영합니다 :)")]):e._e()])},L=[],j={name:"Home",computed:{userName:function(){return this.$store.getters.getUserName}}},$=j,P=Object(l["a"])($,A,L,!1,null,null,null),T=P.exports;r["default"].use(N["a"]);var B=function(){return function(e,t,n){var r=JSON.parse(localStorage.getItem("vuex"));return r.loggedIn?(console.log("라우팅 성공: ".concat(e.path)),n()):(console.log("라우팅 실패: 페이지 접근 권한이 없습니다."),n("/login"))}},J=function(){return function(e,t,n){var r=JSON.parse(localStorage.getItem("vuex"));return null===r?n():r.loggedIn?(console.log("라우팅 실패: 로그인 상태입니다."),n("/")):(console.log("라우팅 성공: ".concat(e.path)),n())}},D=function(){return function(e,t,n){var r=JSON.parse(localStorage.getItem("vuex"));return null===r?(console.log("첫 방문을 환영합니다."),n("/login")):(console.log("라우팅 성공: ".concat(e.path)),n())}},M=[{path:"/",name:"Home",component:T,beforeEnter:D()},{path:"/login",name:"Login",component:function(){return n.e("chunk-7f93e252").then(n.bind(null,"a55b"))},beforeEnter:J()},{path:"/logout",name:"Logout",beforeEnter:B()},{path:"/dash-board",name:"DashBoard",component:function(){return n.e("chunk-41cf269a").then(n.bind(null,"7e48"))},beforeEnter:B()},{path:"/signup",name:"Signup",component:function(){return n.e("chunk-0bd8a4dc").then(n.bind(null,"34c3"))},beforeEnter:J()},{path:"/posts",name:"Posts",component:function(){return n.e("chunk-7e23cf72").then(n.bind(null,"17c3"))},beforeEnter:B()},{path:"/posts/:id",name:"Post",component:function(){return n.e("chunk-9ea88b36").then(n.bind(null,"37d3"))},beforeEnter:B()},{path:"/new-post",name:"NewPost",component:function(){return n.e("chunk-4482ef3e").then(n.bind(null,"6e73"))},beforeEnter:B()},{path:"*",name:"404",component:function(){return n.e("chunk-2d0e95df").then(n.bind(null,"8cdb"))}}],U=new N["a"]({mode:"history",base:"/",routes:M}),Y=U,H=n("bc3a"),W=n.n(H),F=n("fb9a"),q=n.n(F),K=n("00e7"),V=n.n(K),z=n("2f62"),G=n("0e44");r["default"].use(z["a"]);var Q=new z["a"].Store({state:{user:{id:null,email:null,name:null,token:null},loggedIn:!1},mutations:{login:function(e,t){e.loggedIn=!0,e.user.token=t.token,e.user.id=t.user.id,e.user.email=t.user.email,e.user.name=t.user.name},logout:function(e){e.loggedIn=!1,e.user.token=null,e.user.id=null,e.user.email=null,e.user.name=null}},getters:{getLoggedIn:function(e){return e.loggedIn},getUser:function(e){return e.user},getUserName:function(e){return e.user.name},getUserId:function(e){return e.user.id}},actions:{},plugins:[Object(G["a"])()]});n("04f2"),n("c789");r["default"].use(V.a),r["default"].use(q.a),r["default"].prototype.$axios=W.a,r["default"].config.productionTip=!1,new r["default"]({store:Q,router:Y,render:function(e){return e(C)}}).$mount("#app")},5860:function(e,t,n){"use strict";n("bc55")},"5c0b":function(e,t,n){"use strict";n("9c0c")},6098:function(e,t,n){},"85c2":function(e,t,n){},"9c0c":function(e,t,n){},bc55:function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},d3a0:function(e,t,n){"use strict";n("85c2")}});
//# sourceMappingURL=app.1dcbc029.js.map