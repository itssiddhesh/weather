(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(4),a=c.n(s),i=(c(9),c(2)),j=(c(10),c(0));var r=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)({}),r=Object(i.a)(a,2),h=r[0],d=r[1],l=Object(n.useState)(!1),b=Object(i.a)(l,2),o=b[0],O=b[1],u=Object(n.useState)(""),p=Object(i.a)(u,2),x=p[0],m=p[1];return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)("div",{className:"weather",children:[Object(j.jsx)("section",{id:"current",children:o?Object(j.jsxs)("div",{className:"forecast",children:[Object(j.jsxs)("h3",{children:[Math.floor(h.main.temp),Object(j.jsx)("span",{children:"\xb0"}),"C"]}),Object(j.jsx)("h3",{children:h.weather[0].main}),Object(j.jsx)("h5",{children:h.weather[0].description}),Object(j.jsx)("img",{src:"https://openweathermap.org/img/w/".concat(h.weather[0].icon,".png")})]}):null}),Object(j.jsxs)("div",{id:"search",children:[Object(j.jsx)("input",{name:"searchBar",id:"searchBar",value:c,onChange:function(e){s(e.target.value),m(""),O(!1)}}),Object(j.jsx)("br",{}),Object(j.jsxs)("button",{id:"search-btn",onClick:function(){fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(c,"&units=metric&appid=6e26b1ef92a1ad9aa5322fa1d65f358d")).then((function(e){return e.json()})).then((function(e){console.log(e),"404"===e.cod||"400"===e.cod?m("Location Not Found"):(d(e),O(!0),s(""))}))},children:["Search Weather",Object(j.jsx)("span",{children:"\xa0\xa0\xa0"}),Object(j.jsx)("i",{className:"fas fa-search"})]})]}),Object(j.jsxs)("section",{id:"weekly",children:[o?Object(j.jsxs)("h2",{children:[h.name,",",h.sys.country]}):Object(j.jsx)("h2",{children:x}),o?Object(j.jsxs)("div",{className:"highlow",children:[Object(j.jsxs)("h4",{children:["Min:",Object(j.jsx)("span",{children:"\xa0"}),h.main.temp_min,Object(j.jsx)("span",{children:"\xb0"}),"C"]}),Object(j.jsxs)("h4",{children:["Max:",Object(j.jsx)("span",{children:"\xa0"}),h.main.temp_min,Object(j.jsx)("span",{children:"\xb0"}),"C"]})]}):null,o?Object(j.jsxs)("h4",{children:["Humidity: ",Object(j.jsx)("span",{children:"\xa0"}),h.main.humidity]}):null]})]})})};a.a.render(Object(j.jsx)(r,{}),document.getElementById("root"))},9:function(e,t,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.5c648b9a.chunk.js.map