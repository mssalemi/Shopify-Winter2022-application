(this.webpackJsonppolariskitnasa=this.webpackJsonppolariskitnasa||[]).push([[0],{136:function(e,t,n){},139:function(e,t,n){},249:function(e,t,n){"use strict";n.r(t);var i=n(0),c=n(45),a=n.n(c),o=(n(136),n(127)),r=n(9),l=n(5),d=n(52),s=n.n(d),u=n(65),j=n(4),v=n(130),b=(n(138),n(139),n(252)),O=n(129),h=n(258),f=n(262),p=n(259),x=n(15),g=n(261),S=n(257),k=n(256),m=n(67),C=n.n(m),y=n(3);function w(){var e,t=Object(i.useState)({}),n=Object(j.a)(t,2),c=n[0],a=n[1],o=Object(i.useState)([]),r=Object(j.a)(o,2),d=r[0],m=r[1],w=Object(i.useState)("Stars"),_=Object(j.a)(w,2),L=_[0],I=_[1],F=Object(i.useState)(!1),J=Object(j.a)(F,2),R=J[0],U=J[1],A=Object(i.useCallback)((function(){return U((function(e){return!e}))}),[]),N=Object(i.useCallback)((function(e){return I(e)}),[]),D=function(){var e=Object(u.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.get("https://images-api.nasa.gov/search?q=".concat(L,"&media_type=image"));case 2:n=e.sent,console.log(n),a(null===n||void 0===n||null===(t=n.data)||void 0===t?void 0:t.collection);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=R?Object(y.jsx)(b.a,{content:"Link Copided",onDismiss:A}):null,T=function(e){var t=e.description,n=e.date_created;return Object(y.jsxs)(O.a,{children:[Object(y.jsx)("p",{children:t}),Object(y.jsxs)("p",{children:[Object(y.jsx)("b",{children:"Date Created: "}),n]})]})};return Object(i.useEffect)((function(){if(D(),localStorage.getItem("URLS")){var e=JSON.parse(localStorage.getItem("URLS"));m(e.map((function(e){return e.link})))}}),[]),Object(y.jsx)("div",{children:Object(y.jsxs)(h.a,{fullWidth:!0,divider:!0,title:"Nasa App",children:[Object(y.jsxs)(f.a,{children:[Object(y.jsx)(f.a.Section,{oneHalf:!0,children:Object(y.jsx)(p.a,{value:L,onChange:N})}),Object(y.jsx)(f.a.Section,{oneHalf:!0,children:Object(y.jsx)(x.a,{style:{marginTop:"20px"},onClick:D,children:"Search"})}),Object(y.jsx)(f.a.Section,{})]}),(null===c||void 0===c?void 0:c.items)?Object(y.jsxs)(f.a,{children:[null===c||void 0===c||null===(e=c.items)||void 0===e?void 0:e.map((function(e){var t,n,i,c,a={title:null===e||void 0===e?void 0:e.data[0].title,description:(null===e||void 0===e||null===(t=e.data[0])||void 0===t?void 0:t.description_508)||(null===e||void 0===e||null===(n=e.data[0])||void 0===n?void 0:n.description),link:null===e||void 0===e||null===(i=e.links)||void 0===i||null===(c=i.find((function(e){return"image"===e.render})))||void 0===c?void 0:c.href,data:e.data[0],date_created:null===e||void 0===e?void 0:e.data[0].date_created};return console.log(a),Object(y.jsx)(f.a.Section,{children:Object(y.jsx)(g.a,{title:a.title,primaryAction:{content:Object(y.jsx)(v.a,{isClick:-1!==d.indexOf(a.link),onClick:function(){return function(e){if(localStorage.getItem("URLS")){var t,n,i=JSON.parse(localStorage.getItem("URLS"));(null===(t=i)||void 0===t?void 0:t.find((function(t){return t.link==e.link})))?(i=null===(n=i)||void 0===n?void 0:n.filter((function(t){return t.link!==e.link})),i=Object(l.a)(i)):i=[].concat(Object(l.a)(i),[e]),localStorage.setItem("URLS",JSON.stringify(i)),m(i.map((function(e){return e.link})))}else m([e.link]),localStorage.setItem("URLS",JSON.stringify([e]))}(a)}}),onAction:function(){}},description:T(a),popoverActions:[{content:"Copy Shareable Link",onAction:function(){var e;!function(e){navigator.clipboard.writeText(window.location.origin+"/shareable/"+e)}(null===a||void 0===a||null===(e=a.data)||void 0===e?void 0:e.nasa_id),A()}}],size:"large",children:Object(y.jsx)("img",{alt:"",width:"100%",height:"100%",style:{objectFit:"cover",objectPosition:"center"},src:a.link})})})})),Object(y.jsx)(S.a,{children:P})]}):Object(y.jsx)("div",{style:{height:"100px"},children:Object(y.jsx)(S.a,{children:Object(y.jsx)(k.a,{})})})]})})}function _(){var e,t=Object(r.g)(),n=Object(i.useState)({}),c=Object(j.a)(n,2),a=c[0],o=c[1],l=function(){var e=Object(u.a)(s.a.mark((function e(t){var n,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.get("https://images-api.nasa.gov/search?nasa_id=".concat(t));case 2:i=e.sent,console.log(i),o(null===i||void 0===i||null===(n=i.data)||void 0===n?void 0:n.collection);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(e){var t=e.description,n=e.date_created;return Object(y.jsxs)(O.a,{children:[Object(y.jsx)("p",{children:t}),Object(y.jsxs)("p",{children:[Object(y.jsx)("b",{children:"Date Created: "}),n]})]})};return console.log(t),Object(i.useEffect)((function(){(null===t||void 0===t?void 0:t.id)&&l(t.id)}),[]),Object(y.jsx)(h.a,{children:Object(y.jsx)(f.a,{children:null===a||void 0===a||null===(e=a.items)||void 0===e?void 0:e.map((function(e){var t,n,i,c,a={title:null===e||void 0===e?void 0:e.data[0].title,description:(null===e||void 0===e||null===(t=e.data[0])||void 0===t?void 0:t.description_508)||(null===e||void 0===e||null===(n=e.data[0])||void 0===n?void 0:n.description),link:null===e||void 0===e||null===(i=e.links)||void 0===i||null===(c=i.find((function(e){return"image"===e.render})))||void 0===c?void 0:c.href,data:e.data[0],date_created:null===e||void 0===e?void 0:e.data[0].date_created};return console.log(a),Object(y.jsx)(f.a.Section,{children:Object(y.jsx)(g.a,{title:a.title,description:d(a),size:"large",children:Object(y.jsx)("img",{alt:"",width:"100%",height:"100%",style:{objectFit:"cover",objectPosition:"center"},src:a.link})})})}))})})}function L(){return Object(y.jsx)(o.a,{children:Object(y.jsx)("div",{children:Object(y.jsxs)(r.d,{children:[Object(y.jsx)(r.b,{exact:!0,path:"/shareable/:id",children:Object(y.jsx)(_,{})}),Object(y.jsx)(r.b,{exact:!0,path:"/",children:Object(y.jsx)(w,{})}),Object(y.jsx)(r.b,{render:function(){return Object(y.jsx)(r.a,{to:"/"})}})]})})})}var I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,263)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),i(e),c(e),a(e),o(e)}))},F=n(128),J=n(260);a.a.render(Object(y.jsx)(J.a,{i18n:F,children:Object(y.jsx)(L,{})}),document.querySelector("#root")),I()}},[[249,1,2]]]);
//# sourceMappingURL=main.7fbd83f1.chunk.js.map