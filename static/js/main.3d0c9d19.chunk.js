(this.webpackJsonpentrega=this.webpackJsonpentrega||[]).push([[0],{174:function(t,e,n){t.exports=n.p+"static/media/logo.27b53ddf.png"},175:function(t,e,n){t.exports=n(471)},180:function(t,e,n){},181:function(t,e,n){},280:function(t,e){},282:function(t,e){},314:function(t,e){},315:function(t,e){},379:function(t,e){},471:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(173),i=n.n(o),c=(n(180),n(27)),l=n(67),u=n(23),s=n(15),f=n(174),m=n.n(f);n(181);function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(n,!0).forEach((function(e){Object(u.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var b=n(182),g=n(265),h=function(t,e){g("https://seujob.herokuapp.com/"+t,e)},j=function(t){h("request",(function(e,n,a){t(a)}))},O=function(t){return"".concat(t,"vmax")},y=function(t){return t.filter((function(t){return!!t})).join("-")},v={sub:.2,small:.5,normal:1,big:1.5,giant:2.5,monumental:5},E={primary:"black",secondary:"white",link:"royalblue",disabled:"#555",transparent:"transparent"},k=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{"":[""]};return Object.assign.apply(Object,[{}].concat(Object(s.a)(Object.keys(t).map((function(a){return Object.assign.apply(Object,[{}].concat(Object(s.a)(e.map((function(e){return Object.assign.apply(Object,[{}].concat(Object(s.a)(Object.keys(n).map((function(r){return Object(u.a)({},y([a,e,r]),Object.assign.apply(Object,[{}].concat(Object(s.a)(n[r].map((function(n){return Object(u.a)({},y([e,n]),t[a])}))))))})))))})))))})))))}(E,["color","backgroundColor"]),w=Object.assign.apply(Object,[{}].concat(Object(s.a)(Object.keys(v).map((function(t){return Object(u.a)({},y([t,"shadow"]),{boxShadow:"0 0 ".concat(O(1*v[t])," #333")})}))))),C=Object.assign.apply(Object,[{italic:{fontStyle:"italic"}}].concat(Object(s.a)(Object.keys(v).map((function(t){return Object(u.a)({},t,{fontSize:O(1*v[t])})}))))),x={full:{flex:1},horizontal:{flexDirection:"row"},vertical:{flexDirection:"column"},justify:function(t){return{justifyContent:t}},align:function(t){return{alignItems:t}}},S={link:{cursor:"pointer"}},P={round:function(t){return{borderRadius:O(t)}}},z={"":[""],top:["top"],left:["left"],right:["right"],bottom:["bottom"],vertical:["top","bottom"],horizontal:["left","right"]},I=Object.assign.apply(Object,[{}].concat(Object(s.a)(Object.keys(v).map((function(t){return Object.assign.apply(Object,[{}].concat(Object(s.a)(["padding","margin"].map((function(e){return Object.assign.apply(Object,[{}].concat(Object(s.a)(Object.keys(z).map((function(n){return Object(u.a)({},y([t,e,n]),Object.assign.apply(Object,[{}].concat(Object(s.a)(z[n].map((function(n){return Object(u.a)({},y([e,n]),O(5*v[t]))}))))))})))))})))))}))))),L=function(t,e){return Object.assign.apply(Object,[{}].concat(Object(s.a)(Object.keys(t).filter((function(t){return e[t]})).map((function(n){return"function"===typeof t[n]?t[n](e[n]):t[n]})))))},U=function(t){var e=t.children,n=t.link,a=t.style,o=Object(l.a)(t,["children","link","style"]);return r.a.createElement("div",{onClick:n,style:d({display:"flex"},a,{},L(w,o),{},L(I,o),{},L(P,o),{},L(k,o),{},L(x,o),{},L(S,{link:n}))},e)},D=function(t){var e=t.Tag,n=void 0===e?"p":e,a=t.children,o=t.style,i=Object(l.a)(t,["Tag","children","style"]);return r.a.createElement(n,Object.assign({},i,{style:d({fontFamily:"Poppins"},L(k,i),{},L(C,i),{},o)}),a)},T=function(t){var e=t.children,n=t.onChange,a=t.style,o=Object(l.a)(t,["children","onChange","style"]);return r.a.createElement("input",Object.assign({placeholder:e,onChange:n},o,{style:d({width:"100%",border:"none",fontFamily:"Poppins"},L(k,o),{},L(C,o),{},a)}))};D.defaultProps={style:{}};var q=function(t){var e=t.scene,n=t.children,a=t.controller;return r.a.createElement(U,{full:!0,style:{display:"block",position:"relative"}},n.map((function(t,n){return r.a.createElement(U,{style:{opacity:"".concat(~~(e===n)),zIndex:~~(e===n),transition:"opacity 400ms",position:"absolute",top:0,left:0,bottom:0,right:0}},r.a.createElement(t.component,a))})))},R=function(t){var e=t.filter,n=Object(a.useState)([]),o=Object(c.a)(n,2),i=o[0],l=o[1];return Object(a.useEffect)((function(){g("https://api.github.com/repos/seujob/hot/issues",(function(t,e,n){l(t?[]:JSON.parse(n))}))}),[]),r.a.createElement(U,{full:!0,style:{overflow:"auto"},justify:"center"},r.a.createElement(U,{style:{flex:.8},vertical:!0},(e&&i.filter((function(t){return-1!==t.title.toLowerCase().indexOf(e.toLowerCase())}))||i).map((function(t,e){var n=t.body,a=t.title;return r.a.createElement(U,{key:a+e,"sub-padding":!0,vertical:!0,style:{filter:"drop-shadow(0 1rem 0.5rem #333)",fontFamily:"Poppins",fontSize:O(2)}},r.a.createElement(b,{source:a}),r.a.createElement(b,{source:n}))}))))},A=function(t){return function(e){var n=e.target;return t(n.value)}},B=function(t){var e=t.string,n=t.length,a=t.minLength,r=void 0===a?5:a;if(!e)return!1;var o=/[A-Za-z\xe1\xe9\xed\xf3\xfa\xc1\xc9\xcd\xd3\xda\xe0\xe8\xec\xf2\xf9\xc0\xc8\xcc\xd2\xd9\xe3\u1ebd\u0129\xf5\u0169\xc3\u1ebc\u0128\xd5\u0168\xd1\xc7\xe70-9$\xa3]/,i=/[AEIOUaeiou\xe1\xe9\xed\xf3\xfa\xc1\xc9\xcd\xd3\xda\xe0\xe8\xec\xf2\xf9\xc0\xc8\xcc\xd2\xd9\xe3\u1ebd\u0129\xf5\u0169\xc3\u1ebc\u0128\xd5\u0168]/,c=/\W/,l=e.split("").filter((function(t){return o.test(t)})).length,u=e.split("").filter((function(t){return c.test(t)&&!o.test(t)})).length,s=e.split(/\s+/).length,f=e.split("").filter((function(t){return i.test(t)})).length,m=s/l,p=u/s,d=f/e.split("").filter((function(t){return o.test(t)&&!i.test(t)})).length;return!!e&&e.length<=n&&e.length>=r&&m<=.6&&m>=.05&&p<=1.5&&p>=.05&&d<=1&&d>=.05&&f&&s>1},M=function(t){var e=t.string,n=t.length,a=t.minLength,r=void 0===a?5:a;return/^(sms|tel|mail|https|whatsapp):\/\/[^ "]+$/.test(e)&&e.length<=n&&e.length>=r},F=["clt","pj"],J=function(t){return t.replace(/\s+/g," ").split(" ").map((function(t){return t.length>3?"".concat(t[0].toUpperCase()).concat(t.substr(1)):-1!==F.indexOf(t.toLowerCase())?t.toUpperCase():t})).join(" ").substr(0,100)},W=[{name:"title",title:"T\xedtulo da vaga",length:20,validate:B,transform:function(t){return t.toUpperCase().substr(0,50)}},{name:"detail1",title:"Remunera\xe7\xe3o / Modalidade",length:25,validate:B,transform:J},{name:"detail2",title:"Localiza\xe7\xe3o",length:25,validate:B,transform:J},{name:"detail3",title:"Modalidade",length:25,validate:B,transform:J},{name:"link1",title:"Link Empresa",length:80,validate:M},{name:"link2",title:"Link Challenge",length:80,validate:M},{name:"link3",title:"Link Contato",length:80,validate:M}],$=function(t){var e=t.submit,n=Object(a.useState)(Object.assign.apply(Object,[{}].concat(Object(s.a)(W.map((function(t){var e=t.name;return Object(u.a)({},e,"")})))))),o=Object(c.a)(n,2),i=o[0],l=o[1],f=Object(a.useState)(!1),m=Object(c.a)(f,2),p=m[0],b=m[1];return Object(a.useEffect)((function(){W.some((function(t){return!t.name}))||b(W.filter((function(t){var e=t.name,n=t.validate,a=t.length;return n({string:i[e],length:a})})).length===W.length)}),[i]),r.a.createElement(U,{full:!0,justify:"center",style:{overflow:"auto"}},r.a.createElement(U,{flex:.6,style:{height:"100%"},"normal-padding":!0,vertical:!0},r.a.createElement(U,{"small-padding":!0,horizontal:!0},r.a.createElement(D,{giant:!0},"Preencha os campos at\xe9 obterem ",r.a.createElement(D,{Tag:"span","link-color":!0},"essa colora\xe7\xe3o"))),W.map((function(t){var e=t.name,n=t.title,a=t.length,o=t.validate,c=t.transform,s=o({string:i[e],length:a});return r.a.createElement(U,{"sub-padding":!0,"sub-margin":!0,round:"6","normal-shadow":!0},r.a.createElement(T,{giant:!0,value:i[e],"link-color":s,italic:!s,"disabled-color":!s,onChange:A((function(t){l(d({},i,Object(u.a)({},e,c&&c(t)||t)))}))},n))})),r.a.createElement(U,{"disabled-backgroundColor":!p,"normal-shadow":p,"link-backgroundColor":p,"sub-padding":!0,"sub-margin":!0,round:"5",link:function(){return p&&e(i)}},r.a.createElement(D,{giant:!0,"secondary-color":!0},"Submeter")),r.a.createElement(U,{"normal-padding":!0})))},N=function(){return r.a.createElement(U,{full:!0},r.a.createElement(U,{vertical:!0,align:"center",justify:"center",full:!0},r.a.createElement("svg",{class:"rotating",xmlns:"http://www.w3.org/2000/svg",width:O(15),height:O(15),viewBox:"0 0 24 24"},r.a.createElement("path",{fill:E.disabled,d:"M9 12l-4.463 4.969-4.537-4.969h3c0-4.97 4.03-9 9-9 2.395 0 4.565.942 6.179 2.468l-2.004 2.231c-1.081-1.05-2.553-1.699-4.175-1.699-3.309 0-6 2.691-6 6h3zm10.463-4.969l-4.463 4.969h3c0 3.309-2.691 6-6 6-1.623 0-3.094-.65-4.175-1.699l-2.004 2.231c1.613 1.526 3.784 2.468 6.179 2.468 4.97 0 9-4.03 9-9h3l-4.537-4.969z"})),r.a.createElement(D,{monumental:!0},"Aguarde")))};var Z=function(){var t=Object(a.useState)(),e=Object(c.a)(t,2),n=e[0],o=e[1],i=Object(a.useState)(""),l=Object(c.a)(i,2),u=l[0],s=l[1],f=Object(a.useState)(0),p=Object(c.a)(f,2),d=p[0],b=p[1],g=Object(a.useState)([]),y=Object(c.a)(g,2),v=y[0],E=y[1],k=Object(a.useState)([{title:"Pesquise",component:R},{title:"Publique",component:$},{title:"Aguarde",component:N}]),w=Object(c.a)(k,2),C=w[0],x=(w[1],function(){return Math.random().toString()}),S=function(t){for(var e=x();v.filter((function(t){return t.id===e})).length;)e=x();E(v.concat({text:t,idNew:e}))};return Object(a.useEffect)((function(){S("Bem vindo!")}),[]),r.a.createElement(U,{vertical:!0,style:{height:"100%"}},r.a.createElement(U,{horizontal:!0,align:"center","normal-shadow":!0,style:{zIndex:99}},r.a.createElement(U,{"sub-padding":!0,"small-padding-horizontal":!0},r.a.createElement("img",{style:{height:O(7),width:O(7)},alt:"",src:m.a})),0===d&&r.a.createElement(U,{justify:"space-between",full:!0},r.a.createElement(U,{"small-padding":!0},r.a.createElement(T,{giant:!0,"disabled-color":!0,value:u,onChange:A(s)},"Pesquise aqui...")),r.a.createElement(U,{"small-padding":!0,link:function(){b(1),j((function(t){return t&&o(t)}))}},r.a.createElement(D,{giant:!0,"link-color":!0},C[1].title))),1===d&&r.a.createElement(U,{full:!0,justify:"end"},r.a.createElement(U,{"small-padding":!0,link:function(){return b(0)}},r.a.createElement(D,{giant:!0,"link-color":!0},C[0].title)))),r.a.createElement(U,{justify:"center",full:!0},r.a.createElement(q,{scene:d,controller:{filter:u,submit:function(t){var e=t.title,a=t.detail1,r=t.detail2,i=t.detail3,c=t.link1,l=t.link2,u=t.link3;b(2);var s=[e,a,r,i,encodeURIComponent(c),encodeURIComponent(l),encodeURIComponent(u)].join("/");!function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5;e||S("fim das tentativas!"),n?(S("tentando agora!"),h("challenge/".concat(n,"/").concat(s),(function(n,a,r){console.log(a),n?setTimeout((function(){return t(e-1)}),5e3):(b(0),S("Submiss\xe3o confirmada!"))}))):(S("nao tem token!"),j((function(n){S(n),n&&o(n),setTimeout((function(){return t(e-1)}),5e3)})))}()}}},C),r.a.createElement(U,{"transparent-backgroundColor":!0,"normal-padding":!0,style:{zIndex:99,position:"absolute",bottom:0,pointerEvents:"none"}},v.map((function(t){var e=t.text,n=t.id;return r.a.createElement(U,{key:n,"secondary-backgroundColor":!0,style:{pointerEvents:"all"},"small-padding":!0,round:"5","normal-shadow":!0,link:function(){return t=n,void E(v.filter((function(e){return e.id!==t})));var t}},r.a.createElement(D,null,e))})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(Z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[175,1,2]]]);
//# sourceMappingURL=main.3d0c9d19.chunk.js.map