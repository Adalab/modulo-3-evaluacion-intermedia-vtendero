(this["webpackJsonpejercicio-1"]=this["webpackJsonpejercicio-1"]||[]).push([[0],[,,,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"bulbasaur","types":["poison","grass"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"},{"id":2,"name":"ivysaur","types":["poison","grass"],"evolution":"bulbasaur","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"},{"id":3,"name":"venusaur","types":["poison","grass"],"evolution":"ivysaur","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"},{"id":4,"name":"charmander","types":["fire"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"},{"id":5,"name":"charmeleon","types":["fire"],"evolution":"charmander","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"},{"id":6,"name":"charizard","types":["flying","fire"],"evolution":"charmeleon","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"},{"id":7,"name":"squirtle","types":["water"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"},{"id":8,"name":"wartortle","types":["water"],"evolution":"squirtle","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png"},{"id":9,"name":"blastoise","types":["water"],"evolution":"wartortle","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"},{"id":10,"name":"caterpie","types":["bug"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png"}]')},,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(1),o=n.n(s),r=n(7),i=n.n(r),a=(n(13),n(2)),p=n(3),c=n(5),m=n(4),u=(n(14),n(0)),l=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("header",{className:"header",children:[Object(u.jsx)("h1",{className:"header__title",children:"Mi lista de"}),Object(u.jsx)("img",{className:"header__img",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png",alt:"Logo de pokemon"})]})})},h=n(8),b=(n(16),function(e){var t=e.pokemonProp.types.map((function(e,t){return Object(u.jsx)("li",{className:"pokemonList__item--listTypes_item",children:e},t)}));return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("img",{className:"pokemonList__item--image",src:e.pokemonProp.url,alt:"imagen de ".concat(e.pokemonProp.name)}),Object(u.jsx)("h3",{className:"pokemonList__item--name",children:e.pokemonProp.name}),Object(u.jsx)("ul",{className:"pokemonList__item--listTypes",children:t})]})}),j=(n(17),function(e){Object(c.a)(n,e);var t=Object(m.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){var e=this.props.pokemones.map((function(e){return Object(u.jsx)("li",{className:"pokemonList__item",children:Object(u.jsx)(b,{pokemonProp:e})},e.id)}));return Object(u.jsx)("ul",{className:"pokemonList",children:e})}}]),n}(o.a.Component)),k=function(e){Object(c.a)(n,e);var t=Object(m.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(l,{}),Object(u.jsx)(j,{pokemones:h})]})}}]),n}(o.a.Component);i.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(k,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.eaac2b81.chunk.js.map