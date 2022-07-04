(function(){"use strict";var t={7508:function(t,e,o){var r=o(144),a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",[o("nav-bar"),o("v-main",{staticClass:"pa-16"},[o("router-view")],1),o("footer-comp")],1)},n=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app-bar",{attrs:{app:"",color:"indigo lighten-1",dark:""}},[r("div",{staticClass:"d-flex align-center",on:{click:function(e){return t.$router.push("/")}}},[r("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:o(9900),transition:"scale-transition",width:"40"}}),r("v-app-bar-title",[t._v("Books Editor")])],1),r("v-spacer"),r("v-btn",{attrs:{text:"",small:"",outlined:""},on:{click:function(e){return t.$router.push("/")}}},[r("v-icon",{attrs:{small:""}},[t._v("mdi-home")]),r("span",{staticClass:"mr-2"},[t._v("Home")])],1),r("v-btn",{attrs:{text:"",small:""},on:{click:t.logout}},[r("v-icon",{attrs:{small:""}},[t._v("mdi-download-off")]),r("span",{staticClass:"mr-2"},[t._v("Salir")])],1),r("v-btn",{attrs:{text:"",small:""},on:{click:function(e){return t.$router.push("/register")}}},[r("v-icon",{attrs:{small:""}},[t._v("mdi-account-plus ")]),r("span",{staticClass:"mr-2"},[t._v("Registrarse")])],1)],1)},s=[],l=o(3277),c={name:"navbar-comp",data:function(){return{}},methods:{logout(){const t=(0,l.v0)();(0,l.w7)(t).then((()=>{this.$router.push("/login")})).catch((t=>{console.log(t)}))}}},u=c,d=o(1001),v=o(3453),f=o.n(v),m=o(7666),p=o(8895),h=o(9787),b=o(4456),g=o(5288),k=o(2515),Z=(0,d.Z)(u,i,s,!1,null,"c6942768",null),x=Z.exports;f()(Z,{VAppBar:m.Z,VAppBarTitle:p.Z,VBtn:h.Z,VIcon:b.Z,VImg:g.Z,VSpacer:k.Z});var y=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-footer",{attrs:{padless:"",color:"red lighten-1",dark:"",app:""}},[o("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[t._v(" "+t._s((new Date).getFullYear())+" — "),o("strong",[t._v("Books Editor")])])],1)},V=[],C={name:"footer-comp",data:function(){return{}}},_=C,w=o(7024),E=o(7718),B=(0,d.Z)(_,y,V,!1,null,"22e5d220",null),$=B.exports;f()(B,{VCol:w.Z,VFooter:E.Z});var R={name:"App",data:()=>({}),components:{"nav-bar":x,"footer-comp":$}},O=R,T=o(303),S=o(4021),q=(0,d.Z)(O,a,n,!1,null,null,null),A=q.exports;f()(q,{VApp:T.Z,VMain:S.Z});var j=o(4903),F=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",[o("h1",{staticClass:"text-center titulo text-h4"},[t._v("Colección George R.R. Martin")]),o("v-divider",{staticClass:"my-3"}),o("v-row",{attrs:{justify:"center"}},[t._l(t.books,(function(e){return o("v-col",{key:e.id,staticClass:"cuerpo",attrs:{md:"3"}},[o("v-card",[o("v-img",{attrs:{height:"220",src:e.image}}),o("v-divider",{staticClass:"mt-2"}),o("v-card-text",[o("strong",[t._v(t._s(e.title))])]),o("v-card-actions",[o("v-btn",{attrs:{small:"",block:"",color:"brown lighten-2",dark:""},on:{click:function(o){return t.$router.push("/book/"+e.id)}}},[t._v("VER MAS")])],1)],1)],1)})),o("v-container",{staticClass:"text-center ma-16"},[o("v-sheet",{staticClass:"px-12 pt-12 pb-12 mx-auto text-center d-inline-block",attrs:{color:"brown lighten-4",dark:""}},[o("v-btn",{attrs:{"x-large":"",color:"deep-purple lighten-2",dark:""},on:{click:function(e){return t.$router.push("/book")}}},[o("v-icon",[t._v("mdi-plus-circle")]),o("span",{staticClass:"mr-2"},[t._v("Nuevo Libro")])],1)],1)],1)],2)],1)},D=[],I=o(629),L={name:"home-view",components:{},computed:{...(0,I.rn)(["books"])},methods:{...(0,I.nv)(["fetchBooks"])},created(){this.fetchBooks()}},P=L,J=o(2026),K=o(5255),N=o(1819),M=o(5596),U=o(7894),H=o(801),X=(0,d.Z)(P,F,D,!1,null,"aabbddba",null),Y=X.exports;f()(X,{VBtn:h.Z,VCard:J.Z,VCardActions:K.h7,VCardText:K.ZB,VCol:w.Z,VContainer:N.Z,VDivider:M.Z,VIcon:b.Z,VImg:g.Z,VRow:U.Z,VSheet:H.Z});var z=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h1",{staticClass:"text-center"},[t._v("Registrar nuevo libro")]),o("v-form",{ref:"form",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[o("v-container",[o("v-row",[o("v-col",{attrs:{cols:"12"}},[o("v-text-field",{attrs:{rules:t.requiredRules,counter:35,label:"Nombre Libro",required:""},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),o("v-col",{attrs:{cols:"12"}},[o("v-text-field",{attrs:{rules:t.requiredRules,counter:20,label:"Autor",required:""},model:{value:t.form.author,callback:function(e){t.$set(t.form,"author",e)},expression:"form.author"}})],1),o("v-col",{attrs:{cols:"12"}},[o("v-text-field",{attrs:{rules:t.requiredRules,label:"Src",required:""},model:{value:t.form.image,callback:function(e){t.$set(t.form,"image",e)},expression:"form.image"}})],1),o("v-col",{attrs:{cols:"12"}},[o("v-select",{attrs:{items:t.types,label:"Tipo",rules:t.requiredRules},model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}})],1),o("v-col",{staticClass:"text-center"},[o("v-btn",{staticClass:"btn",attrs:{color:"deep-purple lighten-2",dark:""},on:{click:t.createBook}},[t._v("Registrar")]),o("v-btn",{staticClass:"btn",attrs:{color:"indigo lighten-1",dark:""},on:{click:t.resetForm}},[t._v("Limpiar formulario")])],1)],1)],1)],1)],1)},G=[],Q=o(5503),W=o(5321);const tt={apiKey:"AIzaSyCknAirJxxJ77-VXhonD5WayxHDeCYKKc8",authDomain:"cursobook27profe.firebaseapp.com",projectId:"cursobook27profe",storageBucket:"cursobook27profe.appspot.com",messagingSenderId:"524261606277",appId:"1:524261606277:web:12d77a688c765b27013aec"};(0,Q.ZF)(tt);const et=(0,W.ad)();var ot={name:"register-book",data:function(){return{valid:!0,form:{title:"",author:"",type:"",image:""},requiredRules:[t=>!!t||"Campo es requerido"]}},computed:{...(0,I.rn)(["types"])},methods:{async createBook(){if(this.$refs.form.validate(),this.valid)try{let t=await(0,W.ET)((0,W.hJ)(et,"books"),this.form);console.log(t),this.$router.push("/")}catch(t){console.log(t)}},resetForm(){this.$refs.form.reset()}}},rt=ot,at=o(3240),nt=o(7663),it=o(2660),st=(0,d.Z)(rt,z,G,!1,null,"6cdae995",null),lt=st.exports;f()(st,{VBtn:h.Z,VCol:w.Z,VContainer:N.Z,VForm:at.Z,VRow:U.Z,VSelect:nt.Z,VTextField:it.Z});var ct=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h1",{staticClass:"text-center"},[t._v("Editar libro "+t._s(t.idBook))]),o("v-form",{ref:"form",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[o("v-container",[o("v-row",[o("v-col",[o("v-switch",{attrs:{label:"Editar Libro",color:"deep-purple lighten-2",value:"info","hide-details":""},model:{value:t.allowEdit,callback:function(e){t.allowEdit=e},expression:"allowEdit"}})],1),o("v-col",{attrs:{cols:"12"}},[o("v-text-field",{attrs:{rules:t.requiredRules,counter:35,label:"Nombre Libro",required:"",disabled:!t.allowEdit},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),o("v-col",{attrs:{cols:"12"}},[o("v-text-field",{attrs:{rules:t.requiredRules,counter:20,label:"Autor",required:"",disabled:!t.allowEdit},model:{value:t.form.author,callback:function(e){t.$set(t.form,"author",e)},expression:"form.author"}})],1),o("v-col",{attrs:{cols:"12"}},[o("v-text-field",{attrs:{rules:t.requiredRules,label:"Src",required:"",disabled:!t.allowEdit},model:{value:t.form.image,callback:function(e){t.$set(t.form,"image",e)},expression:"form.image"}})],1),o("v-col",{attrs:{cols:"12"}},[o("v-select",{attrs:{items:t.types,label:"Tipo",rules:t.requiredRules,disabled:!t.allowEdit},model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}})],1),o("v-col",{staticClass:"text-center"},[o("v-btn",{attrs:{color:"deep-purple lighten-2",dark:"",disabled:!t.allowEdit},on:{click:t.editBook}},[t._v("Editar")]),o("v-btn",{staticClass:"btn",attrs:{color:"indigo lighten-1",dark:""},on:{click:t.resetForm}},[t._v("Limpiar formulario")]),o("v-btn",{staticClass:"btn",attrs:{color:"red lighten-1",dark:""},on:{click:function(e){t.dialog=!0}}},[t._v("Eliminar")])],1)],1)],1)],1),o("v-dialog",{attrs:{width:"500"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[o("v-card",[o("v-card-title",{staticClass:"text-h5 grey lighten-2"},[t._v(" ¿Deseas Eliminar el libro? ")]),o("v-divider"),o("v-card-actions",[o("v-btn",{attrs:{color:"red",text:""},on:{click:t.deleteBook}},[t._v(" Eliminar ")]),o("v-spacer"),o("v-btn",{attrs:{color:"info",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" Cerrar ")])],1)],1)],1)],1)},ut=[],dt={name:"book-comp",props:["idBook"],data:function(){return{valid:!0,dialog:!1,form:{title:"",author:"",type:"",image:""},requiredRules:[t=>!!t||"Campo es requerido"],allowEdit:!1}},computed:{...(0,I.rn)(["types"])},methods:{resetForm(){this.$refs.form.reset()},async fetchBookById(){const t=(0,W.JU)(et,"books",this.idBook);let e=await(0,W.QT)(t);console.log(e.data()),this.form=e.data()},async editBook(){try{let t=this.form;t.id=this.idBook,await(0,W.r7)((0,W.JU)(et,"books",t.id),t),this.$router.push("/")}catch(t){console.log(t)}},async deleteBook(){try{await(0,W.oe)((0,W.JU)(et,"books",this.idBook)),this.$router.push("/")}catch(t){console.log(t)}}},created(){this.fetchBookById()}},vt=dt,ft=o(9497),mt=o(474),pt=(0,d.Z)(vt,ct,ut,!1,null,"33f741e2",null),ht=pt.exports;f()(pt,{VBtn:h.Z,VCard:J.Z,VCardActions:K.h7,VCardTitle:K.EB,VCol:w.Z,VContainer:N.Z,VDialog:ft.Z,VDivider:M.Z,VForm:at.Z,VRow:U.Z,VSelect:nt.Z,VSpacer:k.Z,VSwitch:mt.Z,VTextField:it.Z});var bt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",[o("v-row",{attrs:{justify:"center"}},[o("v-col",{attrs:{md:"6"}},[o("h2",[t._v("Ingreso Usuario Registrado")]),o("v-form",[o("v-text-field",{attrs:{type:"email",label:"Correo"},model:{value:t.user,callback:function(e){t.user=e},expression:"user"}}),o("v-text-field",{attrs:{type:"password",label:"Contraseña"},model:{value:t.pass,callback:function(e){t.pass=e},expression:"pass"}}),o("v-btn",{attrs:{color:"indigo lighten-1",dark:"",block:""},on:{click:t.login}},[t._v("Ingresar ")])],1)],1)],1)],1)},gt=[],kt={name:"login-component",data:function(){return{user:"",pass:""}},methods:{login(){const t=(0,l.v0)();(0,l.e5)(t,this.user,this.pass).then((t=>{const e=t.user;console.log(e),this.$router.push("/")})).catch((t=>{const e=t.message;alert(e)}))}}},Zt=kt,xt=(0,d.Z)(Zt,bt,gt,!1,null,"007d019f",null),yt=xt.exports;f()(xt,{VBtn:h.Z,VCol:w.Z,VContainer:N.Z,VForm:at.Z,VRow:U.Z,VTextField:it.Z});var Vt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",[o("v-row",{attrs:{justify:"center"}},[o("v-col",{attrs:{md:"6"}},[o("h2",[t._v("Registro de Nuevo Usuario")]),o("v-form",[o("v-text-field",{attrs:{type:"email",label:"Correo"},model:{value:t.user,callback:function(e){t.user=e},expression:"user"}}),o("v-text-field",{attrs:{type:"password",label:"Contraseña"},model:{value:t.pass,callback:function(e){t.pass=e},expression:"pass"}}),o("v-btn",{attrs:{color:"indigo lighten-1",block:"",dark:""},on:{click:t.register}},[t._v("Registrar ")])],1)],1)],1)],1)},Ct=[],_t={name:"register-component",data:function(){return{user:"",pass:""}},methods:{register(){const t=(0,l.v0)();(0,l.Xb)(t,this.user,this.pass).then((t=>{const e=t.user;console.log(e),this.$router.push("/")})).catch((t=>{const e=t.message;alert(e)}))}}},wt=_t,Et=(0,d.Z)(wt,Vt,Ct,!1,null,"9932705a",null),Bt=Et.exports;f()(Et,{VBtn:h.Z,VCol:w.Z,VContainer:N.Z,VForm:at.Z,VRow:U.Z,VTextField:it.Z}),r.Z.use(j.Z);const $t=[{path:"/",name:"home",component:Y,meta:{privado:!0}},{path:"/book",name:"Register",component:lt,meta:{privado:!0}},{path:"/book/:idBook",name:"Book",component:ht,props:!0,meta:{privado:!0}},{path:"/login",name:"Login",component:yt},{path:"/register",name:"Register",component:Bt},{path:"/about",name:"about",meta:{privado:!0},component:()=>o.e(443).then(o.bind(o,524))}],Rt=new j.Z({mode:"history",base:"/firebase1/",routes:$t});Rt.beforeEach(((t,e,o)=>{const r=(0,l.v0)();console.log(r);let a=r.currentUser;console.log(a);let n=t.meta.privado;n&&!a?o("/login"):void 0==n&&a?o("/"):o()}));var Ot=Rt;r.Z.use(I.ZP);var Tt=new I.ZP.Store({state:{books:[],types:["ciencia ficción","novela"]},mutations:{ADD_BOOK(t,e){t.books.push({id:e.id,title:e.data().title,author:e.data().author,image:e.data().image,type:e.data().type})},RESET_BOOK(t){t.books=[]}},actions:{async fetchBooks({commit:t}){let e=await(0,W.PL)((0,W.hJ)(et,"books"));t("RESET_BOOK"),e.forEach((e=>{t("ADD_BOOK",e),console.log(e.id,"=>",e.data())}))}},modules:{}}),St=o(5121);r.Z.use(St.Z);var qt=new St.Z({});r.Z.config.productionTip=!1;const At=(0,l.v0)();(0,l.Aj)(At,(()=>{new r.Z({router:Ot,store:Tt,vuetify:qt,render:t=>t(A)}).$mount("#app")}))},9900:function(t,e,o){t.exports=o.p+"img/logolibros.254c98af.png"}},e={};function o(r){var a=e[r];if(void 0!==a)return a.exports;var n=e[r]={exports:{}};return t[r](n,n.exports,o),n.exports}o.m=t,function(){var t=[];o.O=function(e,r,a,n){if(!r){var i=1/0;for(u=0;u<t.length;u++){r=t[u][0],a=t[u][1],n=t[u][2];for(var s=!0,l=0;l<r.length;l++)(!1&n||i>=n)&&Object.keys(o.O).every((function(t){return o.O[t](r[l])}))?r.splice(l--,1):(s=!1,n<i&&(i=n));if(s){t.splice(u--,1);var c=a();void 0!==c&&(e=c)}}return e}n=n||0;for(var u=t.length;u>0&&t[u-1][2]>n;u--)t[u]=t[u-1];t[u]=[r,a,n]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var r in e)o.o(e,r)&&!o.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){o.f={},o.e=function(t){return Promise.all(Object.keys(o.f).reduce((function(e,r){return o.f[r](t,e),e}),[]))}}(),function(){o.u=function(t){return"js/about.b0fdb21e.js"}}(),function(){o.miniCssF=function(t){}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="firebase1:";o.l=function(r,a,n,i){if(t[r])t[r].push(a);else{var s,l;if(void 0!==n)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==e+n){s=d;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.setAttribute("data-webpack",e+n),s.src=r),t[r]=[a];var v=function(e,o){s.onerror=s.onload=null,clearTimeout(f);var a=t[r];if(delete t[r],s.parentNode&&s.parentNode.removeChild(s),a&&a.forEach((function(t){return t(o)})),e)return e(o)},f=setTimeout(v.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=v.bind(null,s.onerror),s.onload=v.bind(null,s.onload),l&&document.head.appendChild(s)}}}(),function(){o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){o.p="/firebase1/"}(),function(){var t={143:0};o.f.j=function(e,r){var a=o.o(t,e)?t[e]:void 0;if(0!==a)if(a)r.push(a[2]);else{var n=new Promise((function(o,r){a=t[e]=[o,r]}));r.push(a[2]=n);var i=o.p+o.u(e),s=new Error,l=function(r){if(o.o(t,e)&&(a=t[e],0!==a&&(t[e]=void 0),a)){var n=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;s.message="Loading chunk "+e+" failed.\n("+n+": "+i+")",s.name="ChunkLoadError",s.type=n,s.request=i,a[1](s)}};o.l(i,l,"chunk-"+e,e)}},o.O.j=function(e){return 0===t[e]};var e=function(e,r){var a,n,i=r[0],s=r[1],l=r[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(a in s)o.o(s,a)&&(o.m[a]=s[a]);if(l)var u=l(o)}for(e&&e(r);c<i.length;c++)n=i[c],o.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return o.O(u)},r=self["webpackChunkfirebase1"]=self["webpackChunkfirebase1"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=o.O(void 0,[998],(function(){return o(7508)}));r=o.O(r)})();
//# sourceMappingURL=app.a5334e4a.js.map