(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{15:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(7),c=n.n(r),i=(n(15),n(2)),s=n(9),u=n(0),o=function(e){var t=e.setCategories,n=Object(a.useState)(""),r=Object(i.a)(n,2),c=r[0],o=r[1];return Object(u.jsx)("form",{onSubmit:function(e){e.preventDefault();var n=c.trim();n.length?(t((function(e){return[n].concat(Object(s.a)(e))})),o("")):alert("Por favor, ingresa un texto")},children:Object(u.jsx)("input",{id:"search",type:"text",placeholder:"Busca tu gif...",value:c,onChange:function(e){var t=e.target.value;o(t)}})})},j=n(10),l=function(e){var t=e.id,n=e.title,a=e.url;return Object(u.jsxs)("figure",{className:"card animate__animated animate__fadeInDown",children:[Object(u.jsx)("img",{src:a,alt:n}),Object(u.jsx)("figcaption",{children:n||"--No existe titulo--"})]},t)},d=n(6),p=n.n(d),f=n(8),h=function(){var e=Object(f.a)(p.a.mark((function e(t){var n,a,r,c,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=").concat("yL1flqG4cUDzYWFWo1bCsElgqQdAWrtg"),e.next=4,fetch(n);case 4:return a=e.sent,e.next=7,a.json();case 7:return r=e.sent,c=r.data,i=c.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}(),b=function(e){var t=e.category,n=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(i.a)(t,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){h(e).then((function(e){return c({data:e,loading:!1})}))}),[e]),r}(t),r=n.data,c=n.loading;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:t}),c?Object(u.jsxs)("p",{className:"animate__animated animate__flash",children:["Cargando ",Object(u.jsx)("span",{className:"animate__animated animate__shakeX",children:"..."})]}):Object(u.jsx)("div",{className:"card-grid",children:(null===r||void 0===r?void 0:r.length)?r.map((function(e){return Object(u.jsx)(l,Object(j.a)({},e),e.id)})):Object(u.jsxs)("h3",{children:["No hay resultados para ",Object(u.jsx)("u",{children:t})]})})]})},m=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(u.jsxs)("main",{children:[Object(u.jsx)("h2",{children:"GifExpertApp"}),Object(u.jsx)(o,{setCategories:r}),Object(u.jsx)("hr",{}),Object(u.jsx)("section",{children:n.map((function(e){return Object(u.jsx)(b,{category:e},e)}))})]})};c.a.render(Object(u.jsx)(m,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.4450e5d6.chunk.js.map