(function(e){function t(t){for(var o,a,s=t[0],c=t[1],l=t[2],u=0,m=[];u<s.length;u++)a=s[u],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&m.push(r[a][0]),r[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);d&&d(t);while(m.length)m.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,a=1;a<n.length;a++){var s=n[a];0!==r[s]&&(o=!1)}o&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},a={app:0},r={app:0},i=[];function s(e){return c.p+"js/"+({actividad:"actividad",intro:"intro",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4",tema5:"tema5"}[e]||e)+"."+{actividad:"e43211db",intro:"20fd9baf",sintesis:"b5a5dcf1",tema1:"6e097308",tema2:"dcebe5ff",tema3:"24c0b47c",tema4:"20b90e9e",tema5:"4c25632f"}[e]+".js"}function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={actividad:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var o="css/"+({actividad:"actividad",intro:"intro",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4",tema5:"tema5"}[e]||e)+"."+{actividad:"9e7f8156",intro:"31d6cfe0",sintesis:"31d6cfe0",tema1:"31d6cfe0",tema2:"31d6cfe0",tema3:"31d6cfe0",tema4:"31d6cfe0",tema5:"31d6cfe0"}[e]+".css",r=c.p+o,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===o||u===r))return t()}var m=document.getElementsByTagName("style");for(s=0;s<m.length;s++){l=m[s],u=l.getAttribute("data-href");if(u===o||u===r)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var o=t&&t.target&&t.target.src||r,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete a[e],d.parentNode.removeChild(d),n(i)},d.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){a[e]=0})));var o=r[e];if(0!==o)if(o)t.push(o[2]);else{var i=new Promise((function(t,n){o=r[e]=[t,n]}));t.push(o[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(e);var m=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(d);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;m.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",m.name="ChunkLoadError",m.type=o,m.request=a,n[1](m)}r[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var m=0;m<l.length;m++)t(l[m]);var d=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1430:function(e,t,n){e.exports=n.p+"img/cc.58a75e32.svg"},"56d7":function(e,t,n){"use strict";n.r(t);var o=n("2b0e"),a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"app",attrs:{id:"app"}},[t("Header"),t("div",{staticClass:"contenedor-principal"},[t("AsideMenu"),t("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[t("router-view")],1)],1),t("BarraAvance"),t("Accesibilidad")],1)},r=[],i={name:"App",data:()=>({menuOpen:!1}),computed:{menuState(){return this.$store.getters.isMenuOpen}},mounted(){this.$aos.init({offset:100})}},s=i,c=n("2877"),l=Object(c["a"])(s,a,r,!1,null,null,null),u=l.exports,m=n("8c4f"),d=n("8237"),p=n("e844"),f=n("32d3"),g=n("b154"),b=n("0a9a"),v=n("58f7");o["a"].use(m["a"]);const h=new m["a"]({routes:[{path:"/",name:"inicio",component:d["a"]},{path:"/introduccion",name:"introduccion",component:()=>n.e("intro").then(n.bind(null,"5167"))},{path:"/curso",name:"curso",component:p["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:()=>n.e("tema1").then(n.bind(null,"02c8"))},{path:"tema2",name:"tema2",component:()=>n.e("tema2").then(n.bind(null,"fd11"))},{path:"tema3",name:"tema3",component:()=>n.e("tema3").then(n.bind(null,"eb46"))},{path:"tema4",name:"tema4",component:()=>n.e("tema4").then(n.bind(null,"3eb5"))},{path:"tema5",name:"tema5",component:()=>n.e("tema5").then(n.bind(null,"5029"))}]},{path:"/actividad",name:"actividad",component:()=>n.e("actividad").then(n.bind(null,"4298"))},{path:"/glosario",name:"glosario",component:f["a"]},{path:"/complementario",name:"complementario",component:v["a"]},{path:"/referencias",name:"referencias",component:g["a"]},{path:"/sintesis",name:"sintesis",component:()=>n.e("sintesis").then(n.bind(null,"15a3"))},{path:"/creditos",name:"creditos",component:b["a"]}],scrollBehavior(e,t){if(e.hash){const n={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===t.name?n:new Promise(e=>{setTimeout(()=>{e(n)},500)})}setTimeout(()=>{window.scrollTo({left:0,top:0,behavior:"auto"})},100)}});var w=h,C=n("2f62");o["a"].use(C["a"]);var y=new C["a"].Store({state:{loading:0,menuOpen:!1},getters:{isLoading:e=>!!e.loading,isMenuOpen:e=>e.menuOpen},mutations:{toggleMenu(e,t){e.menuOpen=t},increment(e){e.loading++},decrease(e){e.loading--}},actions:{toggleMenu({commit:e},t){e("toggleMenu",t)},increment({commit:e}){e("increment")},decrease({commit:e}){e("decrease")}}}),O=n("9ea5"),S={global:{Name:"Nombre del recurso educativo",Description:"Descripción del RED",imagenBannerPrincipal:n("d756"),fondoBannerPrincipal:n("ce7c"),imagenesDecorativasBanner:[{clases:["banner-principal-decorativo-1","d-none","d-lg-block"],imagen:n("71f8")},{clases:["banner-principal-decorativo-2"],imagen:n("8f04")}]},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info-circle",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",numero:"1",titulo:"Tema 1",desarrolloContenidos:!0,subMenu:[{numero:"1.1",titulo:"Subtema 1",hash:"t_1_1"}]},{nombreRuta:"tema2",numero:"2",titulo:"Tema 2",desarrolloContenidos:!0},{nombreRuta:"tema3",numero:"3",titulo:"Tema 3",desarrolloContenidos:!0}],subMenu:[{icono:"fas fa-sitemap",titulo:"Síntesis",nombreRuta:"sintesis",desarrolloContenidos:!0},{nombreRuta:"actividad",icono:"far fa-question-circle",titulo:"Actividad didáctica",desarrolloContenidos:!0},{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-file-pdf",titulo:"Descargar PDF",download:"downloads/dist.pdf"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},complementario:[{tema:"",referencia:"",tipo:"Sitio web",link:""}],glosario:[{termino:"Término",significado:"Definición"}],referencias:[{referencia:"",link:""}],creditos:[{titulo:"ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Nombre completo",cargo:"Responsable del ecosistema",centro:"Dirección General"},{nombre:"Nombre completo",cargo:"Responsable de línea de producción",centro:"Centro XYZ - Regional XYZ"}]},{titulo:"CONTENIDO INSTRUCCIONAL",autores:[{nombre:"Nombre responsable",cargo:"Nombre del rol",centro:"Centro XYZ - Regional XYZ"}]},{titulo:"DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Nombre responsable",cargo:"Diseñador de contenidos",centro:"Centro XYZ - Regional XYZ"},{nombre:"Nombre responsable",cargo:"Desarrollador <i>full stack</i>",centro:"Centro XYZ - Regional XYZ"},{nombre:"Nombre responsable",cargo:"Animador y productor audiovisual",centro:"Centro XYZ - Regional XYZ"}]},{titulo:"VALIDACIÓN RECURSO EDUCATIVO DIGITAL",autores:[{nombre:"Nombre responsable",cargo:"Validador y vinculador de recursos educativos digitales",centro:"Centro XYZ - Regional XYZ"},{nombre:"Nombre responsable",cargo:"Evaluador de contenidos inclusivos y accesibles",centro:"Centro XYZ - Regional XYZ"}]}],creditosAdicionales:{imagenes:'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',creativeCommons:'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>'}};n("a3a0");const R=n("9224");o["a"].use(O["a"],{config:S,packageJson:R}),new o["a"]({router:w,store:y,render:e=>e(u)}).$mount("#app")},"5ccd":function(e,t,n){e.exports=n.p+"img/audio.058779f0.svg"},"71f8":function(e,t,n){e.exports=n.p+"img/banner-principal-decorativo-1.24b21704.svg"},"7a82":function(e,t,n){e.exports=n.p+"img/aumentar.4890ae42.svg"},"8f04":function(e,t,n){e.exports=n.p+"img/banner-principal-decorativo-2.335b0c53.svg"},9224:function(e){e.exports=JSON.parse('{"name":"SENA-2025","version":"1.0.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"@fortawesome/fontawesome-free":"^6.5.1","@popperjs/core":"^2.11.8","aos":"^2.3.4","bootstrap":"^5.3.2","font-awesome":"^4.7.0","ecored-pkg-fliz":"0.0.5","vue":"^2.7.14","vue-router":"^3.6.5","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.19","@vue/cli-plugin-eslint":"^4.5.19","@vue/cli-plugin-router":"^4.5.19","@vue/cli-plugin-vuex":"^4.5.19","@vue/cli-service":"^4.5.19","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.4.1","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.7.14"}}')},a3a0:function(e,t,n){},a724:function(e,t,n){e.exports=n.p+"img/reducir.68fb49e8.svg"},ce7c:function(e,t,n){e.exports=n.p+"img/fondo-banner-principal.2beabdce.png"},d756:function(e,t,n){e.exports=n.p+"img/banner-principal.eb54df05.svg"},e1f5:function(e,t,n){e.exports=n.p+"img/creditos-cc.4836eb56.svg"},ef52:function(e,t,n){e.exports=n.p+"img/creditos-img.689712e2.svg"},f034:function(e,t,n){e.exports=n.p+"img/pause.8df843e4.svg"},f5ad:function(e,t,n){e.exports=n.p+"img/logo-sena.47d29d11.svg"}});
//# sourceMappingURL=app.1905d396.js.map