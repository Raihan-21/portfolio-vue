(function(e){function t(t){for(var a,s,r=t[0],o=t[1],l=t[2],d=0,f=[];d<r.length;d++)s=r[d],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&f.push(n[s][0]),n[s]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);b&&b(t);while(f.length)f.shift()();return i.push.apply(i,l||[]),c()}function c(){for(var e,t=0;t<i.length;t++){for(var c=i[t],a=!0,s=1;s<c.length;s++){var o=c[s];0!==n[o]&&(a=!1)}a&&(i.splice(t--,1),e=r(r.s=c[0]))}return e}var a={},n={app:0},i=[];function s(e){return r.p+"js/"+({about:"about"}[e]||e)+"."+{about:"36820732"}[e]+".js"}function r(t){if(a[t])return a[t].exports;var c=a[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,r),c.l=!0,c.exports}r.e=function(e){var t=[],c=n[e];if(0!==c)if(c)t.push(c[2]);else{var a=new Promise((function(t,a){c=n[e]=[t,a]}));t.push(c[2]=a);var i,o=document.createElement("script");o.charset="utf-8",o.timeout=120,r.nc&&o.setAttribute("nonce",r.nc),o.src=s(e);var l=new Error;i=function(t){o.onerror=o.onload=null,clearTimeout(d);var c=n[e];if(0!==c){if(c){var a=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,c[1](l)}n[e]=void 0}};var d=setTimeout((function(){i({type:"timeout",target:o})}),12e4);o.onerror=o.onload=i,document.head.appendChild(o)}return Promise.all(t)},r.m=e,r.c=a,r.d=function(e,t,c){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(r.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(c,a,function(t){return e[t]}.bind(null,a));return c},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r.oe=function(e){throw console.error(e),e};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var d=0;d<o.length;d++)t(o[d]);var b=l;i.push([0,"chunk-vendors"]),c()})({0:function(e,t,c){e.exports=c("56d7")},"1a59":function(e,t,c){},"1adc":function(e,t,c){},2585:function(e,t,c){e.exports=c.p+"img/innoraine-cake.3e1e5bde.png"},"2fb4":function(e,t,c){},"312f":function(e,t,c){e.exports=c.p+"img/todo.c8d8caf8.png"},"56d7":function(e,t,c){"use strict";c.r(t);var a=c("7a23");function n(e,t,c,n,i,s){const r=Object(a["z"])("Header"),o=Object(a["z"])("router-view");return Object(a["t"])(),Object(a["e"])(a["a"],null,[Object(a["i"])(r),Object(a["i"])(o)],64)}const i=Object(a["g"])('<div class="container flex" data-v-0eb927c5><div class="menu space-x-6" data-v-0eb927c5><a href="#home" class="text-primary hover:text-white" data-v-0eb927c5>Home</a><a href="#about" class="text-primary hover:text-white" data-v-0eb927c5>About</a><a href="#experience" class="text-primary hover:text-white" data-v-0eb927c5>Experience</a><a href="#contact" class="text-primary hover:text-white" data-v-0eb927c5>Contact</a></div></div>',1),s=[i];function r(e,t,c,n,i,r){return Object(a["t"])(),Object(a["e"])("nav",{class:Object(a["p"])(["site-header py-6 font-semibold",i.isScrolled?"scrolled":""])},s,2)}var o={name:"Header",created(){window.addEventListener("scroll",this.handleScroll)},unmounted(){window.removeEventListener("scroll",this.handleScroll)},data(){return{isScrolled:!1,isMenuOpen:!1}},methods:{handleScroll(){if(window.scrollY>0)return this.isScrolled=!0;this.isScrolled=!1},menuHandler(){this.isMenuOpen=!this.isMenuOpen}}},l=(c("9504"),c("6b0d")),d=c.n(l);const b=d()(o,[["render",r],["__scopeId","data-v-0eb927c5"]]);var f=b,p={components:{Header:f}};c("b2e3");const u=d()(p,[["render",n]]);var h=u,j=c("6605"),m=c("690a"),O=c.n(m),g=c("312f"),v=c.n(g),x=c("8ab4"),y=c.n(x),w=c("2585"),k=c.n(w);const S=e=>(Object(a["w"])("data-v-d5fc6398"),e=e(),Object(a["u"])(),e),_={class:"home pb-28"},E={class:"section-1 pt-16 bg-green-light",id:"home"},C={class:"container flex"},F={class:"flex flex-col items-start"},M={class:"text-left jumbotron"},T={class:"text-white"},A={class:"text-white"},I={class:"text-primary"},P={class:"text-left mb-6 text-primary jumbotron"},R=S(()=>Object(a["f"])("span",{class:"text-white"},"A",-1)),H={class:"desc text-left text-primary font-semibold leading-normal mb-10"},D={href:"#contact"},J={class:"contact animated-btn rounded font-semibold py-4 px-6 focus:outline-none"},N={src:O.a,alt:"",class:"desktop-only"},L={class:"section-2 bg-white",id:"about",ref:"section2"},B={class:"mb-20 heading"},U={class:"container"},$=S(()=>Object(a["f"])("div",{class:"profile text-left font-semibold leading-loose"},[Object(a["f"])("p",{class:"mb-2"}," Hi, my name is Muhammad Raihan, a fresh graduate who have interest in Front End Web Developing. Although i recently graduated, i have some experiences that you can check on "),Object(a["f"])("p",{class:"mb-2"}," I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills then don't hesitate to contact me. ")],-1)),q=S(()=>Object(a["f"])("div",null,[Object(a["f"])("h2",{class:"mb-6 text-left"},"My Skills"),Object(a["f"])("div",{class:"flex flex-wrap space-x-4 space-y-4"},[Object(a["f"])("div",{class:"skill cursor-pointer text-white bg-primary-light py-2 px-4 rounded-lg"}," HTML "),Object(a["f"])("div",{class:"skill cursor-pointer text-white bg-primary-light py-2 px-4 rounded-lg"}," CSS "),Object(a["f"])("div",{class:"skill cursor-pointer text-white bg-primary-light py-2 px-4 rounded-lg"}," SASS "),Object(a["f"])("div",{class:"skill cursor-pointer text-white bg-primary-light py-2 px-4 rounded-lg"}," Javascript "),Object(a["f"])("div",{class:"skill cursor-pointer text-white bg-primary-light py-2 px-4 rounded-lg"}," React.js "),Object(a["f"])("div",{class:"skill cursor-pointer text-white bg-primary-light py-2 px-4 rounded-lg"}," Vue.js "),Object(a["f"])("div",{class:"skill cursor-pointer text-white bg-primary-light py-2 px-4 rounded-lg"}," Nuxt.js ")])],-1)),z=[$,q],W={class:"section-3",id:"experience",ref:"section3"},K={class:"container"},V={class:"mb-16 heading"},X={class:"flex justify-center"},Y=S(()=>Object(a["f"])("div",{class:"timeline flex space-y-12 gap-x-18"},[Object(a["f"])("div",{class:"year mt-32 desktop-only"},[Object(a["f"])("h2",{class:"text-primary-light"},"2022")]),Object(a["f"])("div",{class:"space-y-12"},[Object(a["f"])("div",{class:"step flex items-center relative space-x-12"},[Object(a["f"])("div",{class:"line-container desktop-only"},[Object(a["f"])("div",{class:"circle"})]),Object(a["f"])("div",{class:"content py-8 px-8 rounded shadow-md shadow-primary space-y-2"},[Object(a["f"])("h2",{class:"text-left"},"Frontend Developer"),Object(a["f"])("p",{class:"text-left"},"PT Suitmedia Kreasi Indonesia"),Object(a["f"])("p",{class:"text-left text-primary-light"}," Jul 2022 - Sep 2022 "),Object(a["f"])("ul",{class:"text-left"},[Object(a["f"])("li",null,"Develop corporate website using Nuxt.js and SASS"),Object(a["f"])("li",null," Maintained running website by handling bug fixes reported from client "),Object(a["f"])("li",null," Worked alongside Back End Developer and Analyst to fulfill client requests ")])])]),Object(a["f"])("div",{class:"step flex items-center relative space-x-12"},[Object(a["f"])("div",{class:"line-container desktop-only"},[Object(a["f"])("div",{class:"circle"})]),Object(a["f"])("div",{class:"content py-8 px-8 rounded shadow-md shadow-primary space-y-2"},[Object(a["f"])("h2",{class:"text-left"},"Frontend Developer Intern"),Object(a["f"])("p",{class:"text-left"},"PT Suitmedia Kreasi Indonesia"),Object(a["f"])("p",{class:"text-left text-primary-light"}," Feb 2022 - Jul 2022 "),Object(a["f"])("ul",{class:"text-left"},[Object(a["f"])("li",null,"Build a custom CMS using Nuxt.js and SASS"),Object(a["f"])("li",null," Translate designs created by the UI/UX Designers into effective code "),Object(a["f"])("li",null," Worked alongside Back End Developer and Analyst to fulfill client requests ")])])])])],-1)),G=[Y],Q={class:"section-4",id:"project",ref:"section4"},Z={class:"container"},ee={class:"heading mb-12"},te={class:"cards"},ce=S(()=>Object(a["f"])("div",{class:"card relative rounded-lg"},[Object(a["f"])("div",{class:"h-full overflow-hidden flex items-end"},[Object(a["f"])("img",{src:v.a,alt:""}),Object(a["f"])("div",{class:"card-content text-left space-y-4"},[Object(a["f"])("p",{class:"card-heading font-semibold"},"Todo App"),Object(a["f"])("p",{class:"card-desc"}," A responsive basic todo list app created using React "),Object(a["f"])("div",{class:"card-tools space-x-2"},[Object(a["f"])("span",{class:"bg-primary-light py-1 px-3 rounded-lg"},"Javascript"),Object(a["f"])("span",{class:"bg-primary-light py-1 px-3 rounded-lg"},"React")])]),Object(a["f"])("div",{class:"card-links space-x-2"},[Object(a["f"])("a",{href:"https://github.com/Raihan-21/todo-app",target:"_blank",class:"card-link circle"},[Object(a["f"])("i",{class:"icon-github"})]),Object(a["f"])("a",{href:"https://raihan-21.github.io/todo-app/",target:"_blank",class:"card-link circle"},[Object(a["f"])("i",{class:"icon-arrow-up-right"})])])])],-1)),ae=S(()=>Object(a["f"])("div",{class:"card relative rounded-lg"},[Object(a["f"])("div",{class:"h-full overflow-hidden flex items-end"},[Object(a["f"])("img",{src:y.a,alt:""}),Object(a["f"])("div",{class:"card-content text-left space-y-4"},[Object(a["f"])("p",{class:"card-heading font-semibold"},"Be Smart"),Object(a["f"])("p",{class:"card-desc"}," Tutoring companion website build with Node.js and React "),Object(a["f"])("div",{class:"card-tools space-x-2"},[Object(a["f"])("span",{class:"bg-primary-light py-1 px-3 rounded-lg"},"Javascript"),Object(a["f"])("span",{class:"bg-primary-light py-1 px-3 rounded-lg"},"React"),Object(a["f"])("span",{class:"bg-primary-light py-1 px-3 rounded-lg"},"SASS")])]),Object(a["f"])("div",{class:"card-links space-x-2"},[Object(a["f"])("a",{href:"https://bimbel-be-smart.herokuapp.com//",target:"_blank",class:"card-link circle"},[Object(a["f"])("i",{class:"icon-arrow-up-right"})])])])],-1)),ne=S(()=>Object(a["f"])("div",{class:"card relative rounded-lg"},[Object(a["f"])("div",{class:"h-full overflow-hidden flex items-end"},[Object(a["f"])("img",{src:k.a,alt:""}),Object(a["f"])("div",{class:"card-content text-left space-y-4"},[Object(a["f"])("p",{class:"card-heading font-semibold"},"Innoraine Cake"),Object(a["f"])("p",{class:"card-desc"}," An ecommerce to order cake products created using Node.js and MongoDB "),Object(a["f"])("div",{class:"card-tools space-x-2"},[Object(a["f"])("span",{class:"bg-primary-light py-1 px-3 rounded-lg"},"HTML"),Object(a["f"])("span",{class:"bg-primary-light py-1 px-3 rounded-lg"},"CSS"),Object(a["f"])("span",{class:"bg-primary-light py-1 px-3 rounded-lg"},"Javascript"),Object(a["f"])("span",{class:"bg-primary-light py-1 px-3 rounded-lg"},"Node.js")])]),Object(a["f"])("div",{class:"card-links space-x-2"},[Object(a["f"])("a",{href:"https://github.com/Raihan-21/ecommerce",target:"_blank",class:"card-link circle"},[Object(a["f"])("i",{class:"icon-github"})]),Object(a["f"])("a",{href:"https://innoraine-cake.herokuapp.com/",target:"_blank",class:"card-link circle"},[Object(a["f"])("i",{class:"icon-arrow-up-right"})])])])],-1)),ie=[ce,ae,ne],se={class:"section-5",id:"contact",ref:"section5"},re={class:"container"},oe={class:"heading mb-12"},le=S(()=>Object(a["f"])("p",{class:"font-semibold mb-12"}," Feel free to reach out to me, I will text you back as soon as i can ",-1)),de=S(()=>Object(a["f"])("div",{class:"links flex justify-center space-x-4 mb-8"},[Object(a["f"])("a",{href:"mailto:muhammadraihan118@gmail.com",class:"flex justify-center items-center"},[Object(a["f"])("i",{class:"icon-mail text-white"})]),Object(a["f"])("a",{href:"https://www.linkedin.com/in/muhammad-raihan-21198b203/",class:"flex justify-center items-center"},[Object(a["f"])("i",{class:"icon-linkedin text-white"})]),Object(a["f"])("a",{href:"https://www.instagram.com/murai45/",class:"flex justify-center items-center"},[Object(a["f"])("i",{class:"icon-instagram text-white"})]),Object(a["f"])("a",{href:"https://github.com/Raihan-21",class:"flex justify-center items-center"},[Object(a["f"])("i",{class:"icon-github text-white"})]),Object(a["f"])("a",{href:"https://gitlab.com/Raihan-21",class:"flex justify-center items-center"},[Object(a["f"])("i",{class:"icon-gitlab text-white"})])],-1)),be=S(()=>Object(a["f"])("a",{href:"CV_Muhammad Raihan.pdf",download:""},[Object(a["f"])("button",{class:"contact animated-btn rounded font-semibold py-3 px-6 focus:outline-none"}," Resume ")],-1)),fe=[le,de,be];function pe(e,t,c,n,i,s){return Object(a["t"])(),Object(a["e"])("div",_,[Object(a["f"])("section",E,[Object(a["f"])("div",C,[Object(a["f"])("div",F,[Object(a["f"])("h1",M,[Object(a["i"])(a["b"],{name:"hi"},{default:Object(a["E"])(()=>[Object(a["F"])(Object(a["f"])("span",T,"Hi There,",512),[[a["C"],i.transition.headings.intro.hi]])]),_:1}),Object(a["i"])(a["b"],{name:"myName"},{default:Object(a["E"])(()=>[Object(a["F"])(Object(a["f"])("span",A," I'm ",512),[[a["C"],i.transition.headings.intro.myName]])]),_:1}),Object(a["i"])(a["b"],{name:"name"},{default:Object(a["E"])(()=>[Object(a["F"])(Object(a["f"])("span",I,"Muhammad Raihan",512),[[a["C"],i.transition.headings.intro.name]])]),_:1})]),Object(a["i"])(a["b"],{name:"role"},{default:Object(a["E"])(()=>[Object(a["F"])(Object(a["f"])("h1",P,[R,Object(a["h"])(" Front End Developer ")],512),[[a["C"],i.transition.headings.role]])]),_:1}),Object(a["i"])(a["b"],{name:"desc"},{default:Object(a["E"])(()=>[Object(a["F"])(Object(a["f"])("p",H," I am an enthusiatstic web developer specializing on the Front End side. Currently i am a fresh graduate who's still looking for any opportunity, so if you have something you can click this button below! ",512),[[a["C"],i.transition.headings.desc]])]),_:1}),Object(a["i"])(a["b"],{name:"contact"},{default:Object(a["E"])(()=>[Object(a["f"])("a",D,[Object(a["F"])(Object(a["f"])("button",J," Contact me ",512),[[a["C"],i.transition.headings.contact]])])]),_:1})]),Object(a["i"])(a["b"],{name:"avatar"},{default:Object(a["E"])(()=>[Object(a["F"])(Object(a["f"])("img",N,null,512),[[a["C"],i.transition.headings.avatar]])]),_:1})])]),Object(a["f"])("section",L,[Object(a["f"])("div",null,[Object(a["i"])(a["b"],{name:"about"},{default:Object(a["E"])(()=>[Object(a["F"])(Object(a["f"])("h1",B," About Me ",512),[[a["C"],i.transition.about.heading]])]),_:1}),Object(a["i"])(a["b"],{name:"content"},{default:Object(a["E"])(()=>[Object(a["F"])(Object(a["f"])("div",U,z,512),[[a["C"],i.transition.about.content]])]),_:1})])],512),Object(a["f"])("section",W,[Object(a["f"])("div",K,[Object(a["i"])(a["b"],{name:"heading"},{default:Object(a["E"])(()=>[Object(a["F"])(Object(a["f"])("h1",V," Experience ",512),[[a["C"],i.transition.experience.heading]])]),_:1}),Object(a["i"])(a["b"],{name:"content"},{default:Object(a["E"])(()=>[Object(a["F"])(Object(a["f"])("div",X,G,512),[[a["C"],i.transition.experience.content]])]),_:1})])],512),Object(a["f"])("section",Q,[Object(a["f"])("div",Z,[Object(a["i"])(a["b"],{name:"heading"},{default:Object(a["E"])(()=>[Object(a["F"])(Object(a["f"])("h1",ee," Personal Projects ",512),[[a["C"],i.transition.project.heading]])]),_:1}),Object(a["i"])(a["b"],{name:"content"},{default:Object(a["E"])(()=>[Object(a["F"])(Object(a["f"])("div",te,ie,512),[[a["C"],i.transition.project.content]])]),_:1})])],512),Object(a["f"])("section",se,[Object(a["f"])("div",re,[Object(a["i"])(a["b"],{name:"heading"},{default:Object(a["E"])(()=>[Object(a["F"])(Object(a["f"])("h1",oe," Contact ",512),[[a["C"],i.transition.contact.heading]])]),_:1}),Object(a["i"])(a["b"],{name:"content"},{default:Object(a["E"])(()=>[Object(a["F"])(Object(a["f"])("div",null,fe,512),[[a["C"],i.transition.contact.content]])]),_:1})])],512)])}var ue={name:"Home",data(){return{transition:{headings:{intro:{hi:!1,myName:!1,name:!1},role:!1,desc:!1,contact:!1,avatar:!1},about:{heading:!1,content:!1},experience:{heading:!1,content:!1},project:{heading:!1,content:!1},contact:{heading:!1,content:!1}}}},mounted(){const e=[this.$refs.section2,this.$refs.section3,this.$refs.section4,this.$refs.section5];let t=0;Object.keys(this.transition.headings.intro).forEach((e,c)=>{t+=500,0!==c&&(t+=250),setTimeout(()=>{this.transition.headings.intro[e]=!0},t)}),setTimeout(()=>{this.transition.headings.role=!0,this.transition.headings.avatar=!0},2800),setTimeout(()=>{this.transition.headings.desc=!0},3500),setTimeout(()=>{this.transition.headings.contact=!0},4200);const c=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(this.transition[e.target.id].heading=!0,setTimeout(()=>{this.transition[e.target.id].content=!0},300))})},{threshold:.5});e.forEach(e=>{c.observe(e)})}};c("b42c");const he=d()(ue,[["render",pe],["__scopeId","data-v-d5fc6398"]]);var je=he;const me=[{path:"/",name:"Home",component:je},{path:"/about",name:"About",component:()=>c.e("about").then(c.bind(null,"f820"))}],Oe=Object(j["a"])({history:Object(j["b"])("/"),routes:me});var ge=Oe,ve=(c("2fb4"),c("5502")),xe=Object(ve["a"])({state:{count:0,profile:{name:""}},mutations:{decrement(e){e.count--},increment(e){e.count++},updateUser(e,t){e.profile=t}},actions:{decrement(e){e.commit("decrement")},increment(e){e.commit("increment")},updateUser(e,t){console.log(t),e.commit("updateUser",t)}},modules:{}});Object(a["d"])(h).use(xe).use(ge).mount("#app")},"690a":function(e,t,c){e.exports=c.p+"img/avatar.b6440a44.png"},"8ab4":function(e,t,c){e.exports=c.p+"img/be-smart.bbd2d9ba.png"},9504:function(e,t,c){"use strict";c("1adc")},b2e3:function(e,t,c){"use strict";c("1a59")},b42c:function(e,t,c){"use strict";c("e196")},e196:function(e,t,c){}});
//# sourceMappingURL=app.29626930.js.map