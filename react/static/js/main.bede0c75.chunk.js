(this["webpackJsonppokemon-catalog"]=this["webpackJsonppokemon-catalog"]||[]).push([[0],{19:function(e,t,n){},20:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),o=n(8),a=n.n(o),s=(n(19),n(7),n(2)),i=n(4),u=n(10),j=n(9),p=Object(u.a)((function e(){var t=this;Object(j.a)(this,e),this.baseUrl="https://pokeapi.co/api/v2/pokemon",this.getPokemon=function(){var e=Object(i.a)(Object(s.a)().mark((function e(t){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return e.next=4,e.sent.json();case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getPokemonByOffset=Object(i.a)(Object(s.a)().mark((function e(){var n,r,c=arguments;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URLSearchParams({limit:"1",offset:c.length>0&&void 0!==c[0]?c[0]:"0"}),(r=new URL(t.baseUrl)).search=n.toString(),e.abrupt("return",t.getPokemon(r));case 5:case"end":return e.stop()}}),e)})))})),b=Object(r.createContext)(void 0),d=n(5),f=(n(20),n(0)),l=function(e){var t=e.pokemonIndex,n=Object(r.useState)(!1),c=Object(d.a)(n,2),o=c[0],a=c[1];Object(r.useEffect)((function(){return a(!1)}),[t]);return Object(f.jsx)("div",{children:o?Object(f.jsx)("img",{"data-cy":"pokemon-fallback-image",src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(t,".png"),alt:"pokemon"}):Object(f.jsx)("img",{"data-cy":"pokemon-image",src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/".concat(t,".gif"),className:"pokemon",alt:"pokemon",onError:function(e){a(!0)}})})},v=function(e){var t=e.onNext,n=e.onPrev,c=Object(r.useState)(),o=Object(d.a)(c,2),a=o[0],u=o[1],j=Object(r.useContext)(b),p=function(){var e=Object(i.a)(Object(s.a)().mark((function e(){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=a&&a.next,!e.t0){e.next=7;break}return e.t1=u,e.next=5,null===j||void 0===j?void 0:j.getPokemon(a.next);case 5:e.t2=e.sent,(0,e.t1)(e.t2);case 7:t&&t();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(i.a)(Object(s.a)().mark((function e(){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=a&&a.previous,!e.t0){e.next=7;break}return e.t1=u,e.next=5,null===j||void 0===j?void 0:j.getPokemon(a.previous);case 5:e.t2=e.sent,(0,e.t1)(e.t2);case 7:n&&n();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){var e=function(){var e=Object(i.a)(Object(s.a)().mark((function e(){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=u,e.next=3,null===j||void 0===j?void 0:j.getPokemonByOffset();case 3:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[j]);var h=function(){return Number(null===a||void 0===a?void 0:a.results[0].url.split("/").filter((function(e){return e})).pop())};return Object(f.jsxs)("div",{children:[Object(f.jsx)("header",{children:a&&Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(l,{pokemonIndex:h()}),Object(f.jsx)("h2",{"data-cy":"pokemon-name",children:null===a||void 0===a?void 0:a.results[0].name}),Object(f.jsx)("div",{"data-cy":"count",children:"".concat(h()," of ").concat(a.count)}),Object(f.jsxs)("div",{children:[Object(f.jsx)("button",{"data-cy":"prev",onClick:v,disabled:!(a&&a.previous),children:"Prev"}),Object(f.jsx)("button",{"data-cy":"next",onClick:p,disabled:!(a&&a.next),children:"Next"})]})]})}),Object(f.jsx)("h3",{children:"Pok\xe9mon and Pok\xe9mon character names are trademarks of Nintendo."})]})},h=function(e){var t=e.onNext,n=e.onPrev,r=e.service||new p;return Object(f.jsx)(b.Provider,{value:r,children:Object(f.jsx)(v,{onNext:t,onPrev:n})})};var m=function(){return Object(f.jsx)("div",{className:"App",children:Object(f.jsx)("header",{className:"App-header",children:Object(f.jsx)(h,{})})})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),o(e),a(e)}))};a.a.createRoot(document.getElementById("root")).render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(m,{})})),O()},7:function(e,t,n){}},[[22,1,2]]]);
//# sourceMappingURL=main.bede0c75.chunk.js.map