(window["webpackJsonpsd-tinder"]=window["webpackJsonpsd-tinder"]||[]).push([[0],{34:function(n,e,t){var r={"./Alicia-Vela-Bailey.jpg":56,"./Bobby-Hanton.jpg":57,"./Damien-Bryson.jpg":58,"./Janene-Carleton.jpg":59,"./Katie-Eischen.jpg":60,"./Renae-Moneymaker.jpg":61,"./Richard-Cetrone.jpg":62,"./Rosie-Mac.jpg":63,"./Tanoai-Reed.jpg":64};function i(n){var e=a(n);return t(e)}function a(n){if(!t.o(r,n)){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}return r[n]}i.keys=function(){return Object.keys(r)},i.resolve=a,n.exports=i,i.id=34},40:function(n,e,t){n.exports=t(65)},50:function(n,e,t){n.exports=t.p+"static/media/info.b9fba64e.svg"},51:function(n,e,t){n.exports=t.p+"static/media/liked.5a433b84.svg"},52:function(n,e,t){n.exports=t.p+"static/media/disliked.bedf6174.svg"},53:function(n,e,t){n.exports=t.p+"static/media/superliked.b5e8710b.svg"},54:function(n,e,t){n.exports=t.p+"static/media/menu.ed2d59dc.svg"},56:function(n,e,t){n.exports=t.p+"static/media/Alicia-Vela-Bailey.6fa17d17.jpg"},57:function(n,e,t){n.exports=t.p+"static/media/Bobby-Hanton.1146b079.jpg"},58:function(n,e,t){n.exports=t.p+"static/media/Damien-Bryson.f0f4194a.jpg"},59:function(n,e,t){n.exports=t.p+"static/media/Janene-Carleton.6d62b41b.jpg"},60:function(n,e,t){n.exports=t.p+"static/media/Katie-Eischen.5562cb15.jpg"},61:function(n,e,t){n.exports=t.p+"static/media/Renae-Moneymaker.11f27be6.jpg"},62:function(n,e,t){n.exports=t.p+"static/media/Richard-Cetrone.e05df443.jpg"},63:function(n,e,t){n.exports=t.p+"static/media/Rosie-Mac.c28d9926.jpg"},64:function(n,e,t){n.exports=t.p+"static/media/Tanoai-Reed.9708eb19.jpg"},65:function(n,e,t){"use strict";t.r(e);var r=t(0),i=t.n(r),a=t(19),o=t.n(a),u=t(11),c=t(15),l=[{id:0,name:"Alicia Vela-Bailey",img:"Alicia-Vela-Bailey",age:"28",location:"LA, USA",bio:"Recently finished stunt doubling for the movie 'Alita: Battle Angel' and am looking for a new role! Have stunt doubled for major films such as Wonder Woman (Gal Gadot), 'The Punisher' and 'Marvel's Agents of S.H.I.E.L.D'. If you're interested, swipe right and drop me a message!"},{id:1,name:"Richard Cetrone",img:"Richard-Cetrone",age:"58",location:"Pennsylvania, USA",bio:"Just finished working as a stunt performer in the movie Dhaka and am looking for a new role. I've stunt doubled for many characters in both the Marvel and DC universe. Drop me a message if you're interested"},{id:2,name:"Renae Moneymaker",img:"Renae-Moneymaker",age:"32",location:"LA, USA",bio:"From stunt doubling as the champion of the 74th Hunger Games to multiple superheroines from the Marvel Universe, I'm looking for a new action packed role! Let me know if you're interested!"},{id:3,name:"Bobby Hanton",img:"Bobby-Hanton",age:"33",location:"Portsmouth, UK",bio:"Recently finished stunt doubling for Chris Hemsworth(Thor from Avengers) and am currently working as a stunt performer for the new Marvel 'Black Widow' movie. Looking for a new role early next year after I'm finished. Let me know if you're interested! "},{id:4,name:"Rosie Mac",img:"Rosie-Mac",age:"22",location:"Newcastle, UK",bio:"You may know me as Daenerys Stormborn of the House Targaryen, First of Her Name, the Unburnt, Queen of the Andals and the First Men, Khaleesi of the Great Grass Sea, Breaker of Chains, and Mother of Dragons. Recently finished filming and am looking for a new role. Send me a raven if you're interested!"},{id:5,name:"Tanoai Reed",img:"Tanoai-Reed",age:"45",location:"Honolulu, Hawaii",bio:"Stunt Doubled for Dwayne Johnson for 17 years. I can do a range of stunts but mostly specialise in driving and combat. If you're interested, drop me a message!"},{id:6,name:"Janene Carleton",img:"Janene-Carleton",age:"36",location:"Kelowna, Canada",bio:"Just finished working on a film and am looking for a new role. I've 10 years stunt doubling experience, including stunt doubling for Angelina Jolie(Salt), Jessica Biel (Total Recall) as well as for Nick Thurnston (Caesar in Dawn of the Apes). I can do a range of combat stunts but mostly specialise in horse riding. Swipe right if you're intrested!"},{id:7,name:"Damien-Bryson",img:"Damien-Bryson",age:"40",location:"LA, USA",bio:"Tired of looking for booty and am now looking for a new stunt double role. Recently finished working on the TV Series 'Harrow' and am looking for a role which starts around early next year. Drop me a message if you're interested!"},{id:8,name:"Katie Eischen",img:"Katie-Eischen",age:"30",location:"Georgia, USA",bio:"Currently stunt doubling for the movie 'The Long Night'. Looking for a new role starting around early next year. I have a range of experience, stunt doubling in films such as 'Bourne legacy', 'Pretty Little Liars' and recently 'Triple Frontier'. Let me know if you're interested!"}],s=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"REMOVE_STUNTDOUBLE":return n.filter((function(n){return n.id!==e.stuntDoubleIndex}));default:return n}},d=t(16),f=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_STUNTDOUBLE":if("superliked"===e.actionType){var t=Object(d.a)(n),r=l.find((function(n){return n.id===e.stuntDoubleIndex}));return t.unshift(r),t}return n;default:return n}},b=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_STUNTDOUBLE":if("liked"===e.actionType){var t=Object(d.a)(n),r=l.find((function(n){return n.id===e.stuntDoubleIndex}));return t.unshift(r),t}return n;default:return n}},m=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_STUNTDOUBLE":if("disliked"===e.actionType){var t=Object(d.a)(n),r=l.find((function(n){return n.id===e.stuntDoubleIndex}));return t.unshift(r),t}return n;default:return n}},p=Object(u.b)({stuntDoubles:s,superliked:f,liked:b,disliked:m}),g=t(17),h=t(13),v=t(1),y=t(2);function x(){var n=Object(v.a)(['\nbody {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",\n    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  background: linear-gradient(#ffa59e, #e26650);\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",\n    monospace;\n}\n']);return x=function(){return n},n}var j=Object(y.a)(x()),k=t(12),O=t(8);function E(){var n=Object(v.a)(["\n  background-image: url(",");\n  position: absolute;\n  z-index: 1;\n"]);return E=function(){return n},n}function w(){var n=Object(v.a)(["\n  background-image: url(",");\n"]);return w=function(){return n},n}function D(){var n=Object(v.a)(["\n  background-image: url(",");\n"]);return D=function(){return n},n}function C(){var n=Object(v.a)(["\n  background-image: url(",");\n"]);return C=function(){return n},n}function T(){var n=Object(v.a)(["\n  background-image: url(",");\n\n  height: 25px;\n  width: 25px;\n"]);return T=function(){return n},n}function S(){var n=Object(v.a)(["\n  background-size: cover;\n  height: 50px;\n  width: 50px;\n  margin: 10px;\n  cursor: pointer;\n  outline: 0;\n"]);return S=function(){return n},n}var A=Object(y.c)(O.b.div)(S()),U=Object(y.c)(A)(T(),t(50)),L=Object(y.c)(A)(C(),t(51)),R=Object(y.c)(A)(D(),t(52)),B=Object(y.c)(A)(w(),t(53)),I=Object(y.c)(A)(E(),t(54));function M(){var n=Object(v.a)(["\n  margin: 0;\n  font-weight: 600;\n  font-size: 3rem;\n  color: #ff6d6d;\n"]);return M=function(){return n},n}function _(){var n=Object(v.a)(["\n  color: black;\n"]);return _=function(){return n},n}function z(){var n=Object(v.a)(["\n  font-size: 1rem;\n  margin: 0;\n"]);return z=function(){return n},n}function N(){var n=Object(v.a)(["\n  font-size: 1.5rem;\n"]);return N=function(){return n},n}function H(){var n=Object(v.a)(["\n  margin: 0;\n  font-weight: 400;\n  font-size: 2rem;\n  color: white;\n"]);return H=function(){return n},n}var K=y.c.h1(H()),J=Object(y.c)(K)(N()),V=Object(y.c)(K)(z()),P=Object(y.c)(K)(_()),F=y.c.h1(M()),G={x:0,y:0},X={x:400,opacity:0,pointerEvents:"none"},W={x:-400,opacity:0,pointerEvents:"none"},Y={y:-400,opacity:0,pointerEvents:"none"};function Q(){var n=Object(v.a)(["\n  box-sizing: border-box;\n  padding: 5px;\n"]);return Q=function(){return n},n}function q(){var n=Object(v.a)(["\n  text-decoration: none;\n"]);return q=function(){return n},n}function Z(){var n=Object(v.a)(["\n  box-sizing: border-box;\n\n  padding: 75px 5px 10px 5px;\n"]);return Z=function(){return n},n}function $(){var n=Object(v.a)(["\n      left: 0px;\n    "]);return $=function(){return n},n}function nn(){var n=Object(v.a)(["\n  position: absolute;\n  height: 100vh;\n  width: 320px;\n\n  background-color: rgba(250, 250, 250, 0.9);\n  left: -350px;\n\n  ","\n\n  transition: left 1s;\n"]);return nn=function(){return n},n}function en(){var n=Object(v.a)(["\n      background-color: rgba(250, 250, 250, 0.5);\n      height: 100%;\n      width: 100%;\n    "]);return en=function(){return n},n}function tn(){var n=Object(v.a)(["\n  position: fixed;\n  z-index: 1;\n  background-color: none;\n\n  ","\n"]);return tn=function(){return n},n}var rn=y.c.div(tn(),(function(n){return n.displayMenu&&Object(y.b)(en())})),an=Object(y.c)(O.b.div)(nn(),(function(n){return n.displayMenu&&Object(y.b)($())})),on=y.c.div(Z()),un=Object(y.c)(g.b)(q()),cn=y.c.div(Q()),ln=function(){var n=Object(r.useState)(!1),e=Object(k.a)(n,2),t=e[0],a=e[1];return i.a.createElement(rn,{displayMenu:t},i.a.createElement(I,{onClick:function(){return a(!t)}}),i.a.createElement(an,{displayMenu:t},i.a.createElement(on,null,i.a.createElement(cn,null,i.a.createElement(F,null,"SD-Tinder")),i.a.createElement(cn,null,i.a.createElement(un,{to:"/",onClick:function(){return a(!t)}},i.a.createElement(P,null,"Home"))),i.a.createElement(cn,null,i.a.createElement(un,{to:"/results",onClick:function(){return a(!t)}},i.a.createElement(P,null,"Results"))))))},sn=t(20),dn=t(21),fn=t(23),bn=t(22),mn=t(24),pn=function(n){return{type:"REMOVE_STUNTDOUBLE",stuntDoubleIndex:n}},gn=function(n,e){return{type:"ADD_STUNTDOUBLE",stuntDoubleIndex:n,actionType:e}};function hn(){var n=Object(v.a)(["\n  box-sizing: border-box;\n  padding: 5px;\n"]);return hn=function(){return n},n}function vn(){var n=Object(v.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return vn=function(){return n},n}function yn(){var n=Object(v.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  padding-top: 5px;\n  padding-bottom: 5px;\n"]);return yn=function(){return n},n}function xn(){var n=Object(v.a)(["\n  height: 30%;\n  width: 100%;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-size: 3rem;\n  font-weight: 500;\n"]);return xn=function(){return n},n}function jn(){var n=Object(v.a)(["\n  padding: 10px;\n  box-sizing: border-box;\n  color: #dddddd;\n  background: linear-gradient(\n    rgba(0, 0, 0, 0),\n    rgba(0, 0, 0, 0.7),\n    rgba(0, 0, 0, 0.8),\n    rgba(0, 0, 0, 1)\n  );\n"]);return jn=function(){return n},n}function kn(){var n=Object(v.a)(["\n  width: 100%;\n  height: 100%;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n\n  background-image: ",";\n  background-position: top;\n  background-size: cover;\n\n  transition: box-shadow 0.5s;\n  will-change: transform;\n"]);return kn=function(){return n},n}function On(){var n=Object(v.a)(["\n  position: absolute;\n  border-radius: 10px;\n  overflow: hidden;\n  cursor: pointer;\n\n  width: 320px;\n  height: 480px;\n\n  transition: box-shadow 0.5s, border 0.5s;\n  will-change: transform;\n"]);return On=function(){return n},n}function En(){var n=Object(v.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n  flex: 1;\n"]);return En=function(){return n},n}var wn=Object(y.c)(O.b.div)(En()),Dn=Object(y.c)(O.b.div).attrs((function(n){return{style:{boxShadow:"liked"===n.actionColour?"0px 0px 20px #15ff00":"disliked"===n.actionColour?"0px 0px 20px #ff0000":"superliked"===n.actionColour?"0 0 20px #02fdfd":"0px 0px 10px #080808",border:"liked"===n.actionColour?"1px solid #15ff00":"disliked"===n.actionColour?"1px solid #ff0000":"superliked"===n.actionColour?"1px solid #02fdfd":"none"}}}))(On()),Cn=Object(y.c)(O.b.div)(kn(),(function(n){return"url(".concat(t(34)("./".concat(n.img,".jpg")),")")})),Tn=y.c.div(jn()),Sn=y.c.h1.attrs((function(n){return{style:{color:"LIKED"===n.actionColour?"#15ff00":"DISLIKED"===n.actionColour?"#ff0000":"SUPERLIKED"===n.actionColour?"#02fdfd":"black"}}}))(xn()),An=y.c.div(yn()),Un=y.c.div(vn()),Ln=y.c.div(hn()),Rn=function(n){var e=n.stuntDouble,t=n.animateAction,a=n.action,o=Object(r.useState)(""),u=Object(k.a)(o,2),c=u[0],l=u[1],s=Object(r.useState)(!1),d=Object(k.a)(s,2),f=d[0],b=d[1],m=function(n,e){t(n,e),l(e)},p=c?c.toUpperCase():a.toUpperCase();return i.a.createElement(Cn,{actionColour:p,img:e.img},i.a.createElement(Sn,{actionColour:p},p),i.a.createElement(Tn,null,i.a.createElement(Ln,null,i.a.createElement(K,null,e.name,", ",e.age),i.a.createElement(An,null,i.a.createElement(V,null,e.location),i.a.createElement(U,{onTap:function(){return b(!f)}})),f&&i.a.createElement(V,null,e.bio)),i.a.createElement(Ln,null,i.a.createElement(Un,null,i.a.createElement(R,{onClick:function(){return m(e.id,"disliked")}}),i.a.createElement(B,{onClick:function(){return m(e.id,"superliked")}}),i.a.createElement(L,{onClick:function(){return m(e.id,"liked")}})))))},Bn=function(n){var e=n.stuntDouble,t=n.handleAction,a=Object(r.useState)(""),o=Object(k.a)(a,2),u=o[0],c=o[1],l=Object(r.useState)(G),s=Object(k.a)(l,2),d=s[0],f=s[1],b=function(n,e){var r="liked"===e?X:"disliked"===e?W:"superliked"===e?Y:G;c(e),f(r),t(n,e)};return i.a.createElement(Dn,{drag:!0,dragElastic:.8,dragConstraints:{top:0,right:0,bottom:0,left:0},onDrag:function(n,e){return function(n){var e=n.point.x,t=n.point.y;c(e>40?"liked":e<-40?"disliked":t<-40?"superliked":"")}(e)},onDragEnd:function(n,t){return function(n,e){var t=e.point.x,r=e.point.y;return t>80?b(n,"liked"):t<-80?b(n,"disliked"):r<-80?b(n,"superliked"):c("")}(e.id,t)},initial:{opacity:0},animate:{opacity:1},exit:d,transition:{duration:.5},actionColour:u},i.a.createElement(Rn,{stuntDouble:e,animateAction:b,action:u}))},In=function(n){function e(){var n,t;Object(sn.a)(this,e);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return(t=Object(fn.a)(this,(n=Object(bn.a)(e)).call.apply(n,[this].concat(i)))).handleAction=function(n,e){t.props.addStuntDouble(n,e),t.props.removeStuntDouble(n)},t}return Object(mn.a)(e,n),Object(dn.a)(e,[{key:"render",value:function(){var n=this,e=this.props.stuntDoublesList;return i.a.createElement("div",null,e.length>0?i.a.createElement(wn,null,i.a.createElement(O.a,null,e.map((function(e){return i.a.createElement(Bn,{key:e.id,stuntDouble:e,handleAction:n.handleAction})})))):i.a.createElement(h.a,{to:"/"}))}}]),e}(r.Component),Mn=Object(c.b)((function(n){return{stuntDoublesList:n.stuntDoubles}}),(function(n){return Object(u.a)({removeStuntDouble:pn,addStuntDouble:gn},n)}))(In);function _n(){var n=Object(v.a)(["\n  box-sizing: border-box;\n  padding: 10px;\n"]);return _n=function(){return n},n}function zn(){var n=Object(v.a)(["\n  background-image: ",";\n\n  border-radius: 10px;\n  box-shadow: 1px 1px 8px #333;\n  margin: 10px;\n\n  background-size: cover;\n  background-position: top;\n  overflow: hidden;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n\n  min-width: 250px;\n  min-height: 250px;\n"]);return zn=function(){return n},n}function Nn(){var n=Object(v.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n"]);return Nn=function(){return n},n}function Hn(){var n=Object(v.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n\n  min-height: 100vh;\n\n  text-align: center;\n  box-sizing: border-box;\n  padding: 30px;\n"]);return Hn=function(){return n},n}var Kn=y.c.div(Hn()),Jn=y.c.div(Nn()),Vn=y.c.div(zn(),(function(n){return"linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0), rgba(0,0,0,0.2), rgba(0,0,0,1)),\n            url(".concat(t(34)("./".concat(n.img,".jpg")),")     ")})),Pn=y.c.div(_n());var Fn=function(n){var e=n.img,t=n.name;return i.a.createElement(Vn,{img:e},i.a.createElement(Pn,null,i.a.createElement(J,null,t)))};var Gn=function(n){var e=n.title,t=n.stuntDouble,r=n.subTitle;return i.a.createElement(Pn,null,i.a.createElement(J,null,e),i.a.createElement(Jn,null,t.length>0?t.map((function(n){return i.a.createElement(Fn,{key:n.id,img:n.img,name:n.name})})):i.a.createElement(V,null,r)))},Xn=function(n){function e(){return Object(sn.a)(this,e),Object(fn.a)(this,Object(bn.a)(e).apply(this,arguments))}return Object(mn.a)(e,n),Object(dn.a)(e,[{key:"render",value:function(){var n=this.props,e=n.stuntDoublesList,t=n.superliked,r=n.liked,a=n.disliked;return i.a.createElement(Kn,null,i.a.createElement(Pn,null,e.length>0?i.a.createElement(K,null,"Keep swiping, you never know who you might meet!"):i.a.createElement(K,null,"There's no one new around you")),i.a.createElement(Gn,{title:"People you superliked!",stuntDouble:t,subTitle:"You didn't superlike anyone..."}),i.a.createElement(Gn,{title:"People you liked... let's hope they like you too!",stuntDouble:r,subTitle:"You didn't like anyone..."}),i.a.createElement(Gn,{title:"People you disliked",stuntDouble:a,subTitle:"Cast a wide net they said..."}))}}]),e}(r.Component),Wn=Object(c.b)((function(n){return{stuntDoublesList:n.stuntDoubles,superliked:n.superliked,liked:n.liked,disliked:n.disliked}}))(Xn);var Yn=function(){return i.a.createElement(g.a,{basename:"/SD-Tinder"},i.a.createElement("div",null,i.a.createElement(j,null),i.a.createElement(ln,null),i.a.createElement(h.d,null,i.a.createElement(h.b,{exact:!0,path:"/"},i.a.createElement(Mn,null)),i.a.createElement(h.b,{exact:!0,path:"/results"},i.a.createElement(Wn,null)))))},Qn=Object(u.c)(p,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());o.a.render(i.a.createElement(c.a,{store:Qn},i.a.createElement(Yn,null)),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.bcff9a80.chunk.js.map