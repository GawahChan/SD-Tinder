(window["webpackJsonpsd-tinder"]=window["webpackJsonpsd-tinder"]||[]).push([[0],{33:function(n,e,t){var r={"./Alicia-Vela-Bailey.jpg":63,"./Bobby-Hanton.jpg":64,"./Damien-Bryson.jpg":65,"./Janene-Carleton.jpg":66,"./Katie-Eischen.jpg":67,"./Renae-Moneymaker.jpg":68,"./Richard-Cetrone.jpg":69,"./Rosie-Mac.jpg":70,"./Tanoai-Reed.jpg":71};function i(n){var e=o(n);return t(e)}function o(n){if(!t.o(r,n)){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}return r[n]}i.keys=function(){return Object.keys(r)},i.resolve=o,n.exports=i,i.id=33},41:function(n,e,t){n.exports=t(72)},55:function(n,e,t){n.exports=t.p+"static/media/info.b9fba64e.svg"},56:function(n,e,t){n.exports=t.p+"static/media/liked.5a433b84.svg"},57:function(n,e,t){n.exports=t.p+"static/media/disliked.bedf6174.svg"},58:function(n,e,t){n.exports=t.p+"static/media/superliked.b5e8710b.svg"},59:function(n,e,t){n.exports=t.p+"static/media/menu.ed2d59dc.svg"},63:function(n,e,t){n.exports=t.p+"static/media/Alicia-Vela-Bailey.6fa17d17.jpg"},64:function(n,e,t){n.exports=t.p+"static/media/Bobby-Hanton.1146b079.jpg"},65:function(n,e,t){n.exports=t.p+"static/media/Damien-Bryson.f0f4194a.jpg"},66:function(n,e,t){n.exports=t.p+"static/media/Janene-Carleton.6d62b41b.jpg"},67:function(n,e,t){n.exports=t.p+"static/media/Katie-Eischen.5562cb15.jpg"},68:function(n,e,t){n.exports=t.p+"static/media/Renae-Moneymaker.11f27be6.jpg"},69:function(n,e,t){n.exports=t.p+"static/media/Richard-Cetrone.e05df443.jpg"},70:function(n,e,t){n.exports=t.p+"static/media/Rosie-Mac.c28d9926.jpg"},71:function(n,e,t){n.exports=t.p+"static/media/Tanoai-Reed.9708eb19.jpg"},72:function(n,e,t){"use strict";t.r(e);var r=t(0),i=t.n(r),o=t(17),a=t.n(o),u=t(7),c=t(14),l=[{id:0,name:"Alicia Vela-Bailey",img:"Alicia-Vela-Bailey",age:"28",location:"LA, USA",bio:"Recently finished stunt doubling for the movie 'Alita: Battle Angel' and am looking for a new role! Have stunt doubled for major films such as Wonder Woman (Gal Gadot), 'The Punisher' and 'Marvel's Agents of S.H.I.E.L.D'. If you're interested, swipe right and drop me a message!"},{id:1,name:"Richard Cetrone",img:"Richard-Cetrone",age:"58",location:"Pennsylvania, USA",bio:"Just finished working as a stunt performer in the movie Dhaka and am looking for a new role. I've stunt doubled for many characters in both the Marvel and DC universe. Drop me a message if you're interested"},{id:2,name:"Renae Moneymaker",img:"Renae-Moneymaker",age:"32",location:"LA, USA",bio:"From stunt doubling as the champion of the 74th Hunger Games to multiple superheroines from the Marvel Universe, I'm looking for a new action packed role! Let me know if you're interested!"},{id:3,name:"Bobby Hanton",img:"Bobby-Hanton",age:"33",location:"Portsmouth, UK",bio:"Recently finished stunt doubling for Chris Hemsworth(Thor from Avengers) and am currently working as a stunt performer for the new Marvel 'Black Widow' movie. Looking for a new role early next year after I'm finished. Let me know if you're interested! "},{id:4,name:"Rosie Mac",img:"Rosie-Mac",age:"22",location:"Newcastle, UK",bio:"You may know me as Daenerys Stormborn of the House Targaryen, First of Her Name, the Unburnt, Queen of the Andals and the First Men, Khaleesi of the Great Grass Sea, Breaker of Chains, and Mother of Dragons. Recently finished filming and am looking for a new role. Send me a raven if you're interested!"},{id:5,name:"Tanoai Reed",img:"Tanoai-Reed",age:"45",location:"Honolulu, Hawaii",bio:"Stunt Doubled for Dwayne Johnson for 17 years. I can do a range of stunts but mostly specialise in driving and combat. If you're interested, drop me a message!"},{id:6,name:"Janene Carleton",img:"Janene-Carleton",age:"36",location:"Kelowna, Canada",bio:"Just finished working on a film and am looking for a new role. I've 10 years stunt doubling experience, including stunt doubling for Angelina Jolie(Salt), Jessica Biel (Total Recall) as well as for Nick Thurnston (Caesar in Dawn of the Apes). I can do a range of combat stunts but mostly specialise in horse riding. Swipe right if you're intrested!"},{id:7,name:"Damien-Bryson",img:"Damien-Bryson",age:"40",location:"LA, USA",bio:"Tired of looking for booty and am now looking for a new stunt double role. Recently finished working on the TV Series 'Harrow' and am looking for a role which starts around early next year. Drop me a message if you're interested!"},{id:8,name:"Katie Eischen",img:"Katie-Eischen",age:"30",location:"Georgia, USA",bio:"Currently stunt doubling for the movie 'The Long Night'. Looking for a new role starting around early next year. I have a range of experience, stunt doubling in films such as 'Bourne legacy', 'Pretty Little Liars' and recently 'Triple Frontier'. Let me know if you're interested!"}],d=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"REMOVE_STUNTDOUBLE":return n.filter((function(n){return n.id!==e.stuntDoubleIndex}));case"RESET_ALLSTUNTDOUBLES":return l;default:return n}},s=t(15),f=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_STUNTDOUBLE":if("superliked"===e.actionType){var t=Object(s.a)(n),r=l.find((function(n){return n.id===e.stuntDoubleIndex}));return t.unshift(r),t}return n;case"RESET_ALLSTUNTDOUBLES":return[];default:return n}},b=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_STUNTDOUBLE":if("liked"===e.actionType){var t=Object(s.a)(n),r=l.find((function(n){return n.id===e.stuntDoubleIndex}));return t.unshift(r),t}return n;case"RESET_ALLSTUNTDOUBLES":return[];default:return n}},p=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_STUNTDOUBLE":if("disliked"===e.actionType){var t=Object(s.a)(n),r=l.find((function(n){return n.id===e.stuntDoubleIndex}));return t.unshift(r),t}return n;case"RESET_ALLSTUNTDOUBLES":return[];default:return n}},m=Object(u.b)({stuntDoubles:d,superliked:f,liked:b,disliked:p}),g=t(13),h=t(11),x="/SD-Tinder",v="/discover",y={x:0,y:0},E={x:400,opacity:0,pointerEvents:"none"},j={x:-400,opacity:0,pointerEvents:"none"},k={y:-400,opacity:0,pointerEvents:"none"},O=t(2),w=t(1);function D(){var n=Object(O.a)(['\nbody {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",\n    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  background: linear-gradient(#ffa59e, #e26650);\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",\n    monospace;\n}\n']);return D=function(){return n},n}var S=Object(w.b)(D()),T=t(10),C=t(8);function L(){var n=Object(O.a)(["\n  background-image: url(",");\n  position: absolute;\n  z-index: 1;\n"]);return L=function(){return n},n}function U(){var n=Object(O.a)(["\n  background-image: url(",");\n"]);return U=function(){return n},n}function A(){var n=Object(O.a)(["\n  background-image: url(",");\n"]);return A=function(){return n},n}function R(){var n=Object(O.a)(["\n  background-image: url(",");\n"]);return R=function(){return n},n}function B(){var n=Object(O.a)(["\n  background-image: url(",");\n\n  height: 25px;\n  width: 25px;\n"]);return B=function(){return n},n}function _(){var n=Object(O.a)(["\n  background-size: cover;\n  height: 50px;\n  width: 50px;\n  margin: 10px;\n  cursor: pointer;\n  outline: 0;\n"]);return _=function(){return n},n}var I=Object(w.d)(C.b.div)(_()),M=Object(w.d)(I)(B(),t(55)),N=Object(w.d)(I)(R(),t(56)),z=Object(w.d)(I)(A(),t(57)),H=Object(w.d)(I)(U(),t(58)),J=Object(w.d)(I)(L(),t(59));function K(){var n=Object(O.a)(["\n  margin: 0;\n  font-weight: 600;\n  font-size: 3rem;\n  color: #ff6d6d;\n"]);return K=function(){return n},n}function V(){var n=Object(O.a)(["\n  color: black;\n"]);return V=function(){return n},n}function P(){var n=Object(O.a)(["\n  font-weight: 400;\n  font-size: 1rem;\n  margin: 0;\n"]);return P=function(){return n},n}function F(){var n=Object(O.a)(["\n  font-weight: 400;\n  font-size: 1.5rem;\n"]);return F=function(){return n},n}function G(){var n=Object(O.a)(["\n  margin: 0;\n  font-weight: 600;\n  font-size: 2rem;\n  color: white;\n"]);return G=function(){return n},n}var X=w.d.h1(G()),Y=Object(w.d)(X)(F()),W=Object(w.d)(X)(P()),Q=Object(w.d)(X)(V()),q=w.d.h1(K());function Z(){var n=Object(O.a)(["\n  box-sizing: border-box;\n  padding: 5px;\n"]);return Z=function(){return n},n}function $(){var n=Object(O.a)(["\n  text-decoration: none;\n"]);return $=function(){return n},n}function nn(){var n=Object(O.a)(["\n  box-sizing: border-box;\n\n  padding: 75px 5px 10px 5px;\n"]);return nn=function(){return n},n}function en(){var n=Object(O.a)(["\n      left: 0px;\n    "]);return en=function(){return n},n}function tn(){var n=Object(O.a)(["\n  position: absolute;\n  height: 100vh;\n  width: 320px;\n\n  background-color: rgba(250, 250, 250, 0.9);\n  left: -350px;\n\n  ","\n\n  transition: left 1s;\n"]);return tn=function(){return n},n}function rn(){var n=Object(O.a)(["\n      background-color: rgba(250, 250, 250, 0.5);\n      height: 100%;\n      width: 100%;\n    "]);return rn=function(){return n},n}function on(){var n=Object(O.a)(["\n  position: fixed;\n  z-index: 1;\n  background-color: none;\n\n  ","\n"]);return on=function(){return n},n}var an=w.d.div(on(),(function(n){return n.displayMenu&&Object(w.c)(rn())})),un=Object(w.d)(C.b.div)(tn(),(function(n){return n.displayMenu&&Object(w.c)(en())})),cn=w.d.div(nn()),ln=Object(w.d)(g.b)($()),dn=w.d.div(Z()),sn=function(){var n=Object(r.useState)(!1),e=Object(T.a)(n,2),t=e[0],o=e[1];return i.a.createElement(an,{displayMenu:t},i.a.createElement(J,{onClick:function(){return o(!t)}}),i.a.createElement(un,{displayMenu:t},i.a.createElement(cn,null,i.a.createElement(dn,null,i.a.createElement(q,null,"SD-Tinder")),i.a.createElement(dn,null,i.a.createElement(ln,{to:x,onClick:function(){return o(!t)}},i.a.createElement(Q,null,"Home"))),i.a.createElement(dn,null,i.a.createElement(ln,{to:v,onClick:function(){return o(!t)}},i.a.createElement(Q,null,"Discover"))))))},fn=t(19),bn=t(20),pn=t(22),mn=t(21),gn=t(23),hn=function(n){return{type:"REMOVE_STUNTDOUBLE",stuntDoubleIndex:n}},xn=function(n,e){return{type:"ADD_STUNTDOUBLE",stuntDoubleIndex:n,actionType:e}},vn=function(){return{type:"RESET_ALLSTUNTDOUBLES"}};function yn(){var n=Object(O.a)(["\n  box-sizing: border-box;\n  padding: 5px;\n"]);return yn=function(){return n},n}function En(){var n=Object(O.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return En=function(){return n},n}function jn(){var n=Object(O.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  padding-top: 5px;\n  padding-bottom: 5px;\n"]);return jn=function(){return n},n}function kn(){var n=Object(O.a)(["\n  height: 30%;\n  width: 100%;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-size: 3rem;\n  font-weight: 500;\n"]);return kn=function(){return n},n}function On(){var n=Object(O.a)(["\n  padding: 10px;\n  box-sizing: border-box;\n  color: #dddddd;\n  background: linear-gradient(\n    rgba(0, 0, 0, 0),\n    rgba(0, 0, 0, 0.7),\n    rgba(0, 0, 0, 0.8),\n    rgba(0, 0, 0, 1)\n  );\n"]);return On=function(){return n},n}function wn(){var n=Object(O.a)(["\n  width: 100%;\n  height: 100%;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n\n  background-image: ",";\n  background-position: top;\n  background-size: cover;\n\n  transition: box-shadow 0.5s;\n  will-change: transform;\n"]);return wn=function(){return n},n}function Dn(){var n=Object(O.a)(["\n  position: absolute;\n  border-radius: 10px;\n  overflow: hidden;\n  cursor: pointer;\n\n  width: 320px;\n  height: 480px;\n\n  transition: box-shadow 0.5s, border 0.5s;\n  will-change: transform;\n"]);return Dn=function(){return n},n}function Sn(){var n=Object(O.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n  flex: 1;\n"]);return Sn=function(){return n},n}var Tn=Object(w.d)(C.b.div)(Sn()),Cn=Object(w.d)(C.b.div).attrs((function(n){return{style:{boxShadow:"liked"===n.actionColour?"0px 0px 20px #15ff00":"disliked"===n.actionColour?"0px 0px 20px #ff0000":"superliked"===n.actionColour?"0 0 20px #02fdfd":"0px 0px 10px #080808",border:"liked"===n.actionColour?"1px solid #15ff00":"disliked"===n.actionColour?"1px solid #ff0000":"superliked"===n.actionColour?"1px solid #02fdfd":"none"}}}))(Dn()),Ln=Object(w.d)(C.b.div)(wn(),(function(n){return"url(".concat(t(33)("./".concat(n.img,".jpg")),")")})),Un=w.d.div(On()),An=w.d.h1.attrs((function(n){return{style:{color:"LIKED"===n.actionColour?"#15ff00":"DISLIKED"===n.actionColour?"#ff0000":"SUPERLIKED"===n.actionColour?"#02fdfd":"black"}}}))(kn()),Rn=w.d.div(jn()),Bn=w.d.div(En()),_n=w.d.div(yn()),In=function(n){var e=n.stuntDouble,t=n.animateAction,o=n.action,a=Object(r.useState)(""),u=Object(T.a)(a,2),c=u[0],l=u[1],d=Object(r.useState)(!1),s=Object(T.a)(d,2),f=s[0],b=s[1],p=function(n,e){t(n,e),l(e)},m=c?c.toUpperCase():o.toUpperCase();return i.a.createElement(Ln,{actionColour:m,img:e.img},i.a.createElement(An,{actionColour:m},m),i.a.createElement(Un,null,i.a.createElement(_n,null,i.a.createElement(X,null,e.name,", ",e.age),i.a.createElement(Rn,null,i.a.createElement(W,null,e.location),i.a.createElement(M,{onTap:function(){return b(!f)}})),f&&i.a.createElement(W,null,e.bio)),i.a.createElement(_n,null,i.a.createElement(Bn,null,i.a.createElement(z,{onClick:function(){return p(e.id,"disliked")}}),i.a.createElement(H,{onClick:function(){return p(e.id,"superliked")}}),i.a.createElement(N,{onClick:function(){return p(e.id,"liked")}})))))},Mn=function(n){var e=n.stuntDouble,t=n.handleAction,o=Object(r.useState)(""),a=Object(T.a)(o,2),u=a[0],c=a[1],l=Object(r.useState)(y),d=Object(T.a)(l,2),s=d[0],f=d[1],b=function(n,e){var r="liked"===e?E:"disliked"===e?j:"superliked"===e?k:y;c(e),f(r),t(n,e)};return i.a.createElement(Cn,{drag:!0,dragElastic:.8,dragConstraints:{top:0,right:0,bottom:0,left:0},onDrag:function(n,e){return function(n){var e=n.point.x,t=n.point.y;c(e>40?"liked":e<-40?"disliked":t<-40?"superliked":"")}(e)},onDragEnd:function(n,t){return function(n,e){var t=e.point.x,r=e.point.y;return t>80?b(n,"liked"):t<-80?b(n,"disliked"):r<-80?b(n,"superliked"):c("")}(e.id,t)},initial:{opacity:0},animate:{opacity:1},positionTransition:!0,exit:s,transition:{duration:.5},actionColour:u},i.a.createElement(In,{stuntDouble:e,animateAction:b,action:u}))},Nn=function(n){function e(){var n,t;Object(fn.a)(this,e);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(t=Object(pn.a)(this,(n=Object(mn.a)(e)).call.apply(n,[this].concat(i)))).handleAction=function(n,e){t.props.addStuntDouble(n,e),t.props.removeStuntDouble(n)},t}return Object(gn.a)(e,n),Object(bn.a)(e,[{key:"render",value:function(){var n=this,e=this.props.stuntDoublesList;return i.a.createElement("div",null,e.length>0?i.a.createElement(Tn,null,i.a.createElement(C.a,null,e.map((function(e){return i.a.createElement(Mn,{key:e.id,stuntDouble:e,handleAction:n.handleAction})})))):i.a.createElement(h.a,{to:x}))}}]),e}(r.Component),zn=Object(c.b)((function(n){return{stuntDoublesList:n.stuntDoubles}}),(function(n){return Object(u.a)({removeStuntDouble:hn,addStuntDouble:xn},n)}))(Nn),Hn={superliked:{color:"#02fdfd",border:"2px solid #02fdfd",shadow:"0px 0px 10px #02fdfd"},liked:{color:"#15ff00",border:"2px solid #15ff00",shadow:"0px 0px 10px #15ff00"},disliked:{color:"#ff0000",border:"2px solid #ff0000",shadow:"0px 0px 10px #ff0000"}};function Jn(){var n=Object(O.a)(["\n  box-sizing: border-box;\n  padding: 10px;\n"]);return Jn=function(){return n},n}function Kn(){var n=Object(O.a)(["\n  background-image: ",";\n\n  border-radius: 10px;\n  border: ",";\n  box-shadow: ",";\n  margin: 10px;\n\n  background-size: cover;\n  background-position: top;\n  overflow: hidden;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n\n  min-width: 250px;\n  min-height: 250px;\n"]);return Kn=function(){return n},n}function Vn(){var n=Object(O.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n  align-items: center;\n  flex: 1;\n"]);return Vn=function(){return n},n}function Pn(){var n=Object(O.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  box-sizing: border-box;\n  padding: 10px;\n  flex: 1;\n"]);return Pn=function(){return n},n}function Fn(){var n=Object(O.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  box-sizing: border-box;\n  padding: 20px;\n  flex: 1;\n"]);return Fn=function(){return n},n}function Gn(){var n=Object(O.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n\n  min-height: 100vh;\n\n  text-align: center;\n  box-sizing: border-box;\n  padding: 30px;\n"]);return Gn=function(){return n},n}var Xn=w.d.div(Gn()),Yn=w.d.div(Fn()),Wn=w.d.div(Pn()),Qn=w.d.div(Vn()),qn=w.d.div(Kn(),(function(n){return"linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0), rgba(0,0,0,0.2), rgba(0,0,0,1)),\n            url(".concat(t(33)("./".concat(n.img,".jpg")),")     ")}),(function(n){return n.theme.border}),(function(n){return n.theme.shadow})),Zn=w.d.div(Jn());var $n=function(n){var e=n.img,t=n.name;return i.a.createElement(qn,{img:e},i.a.createElement(Zn,null,i.a.createElement(Y,null,t)))};var ne=function(n){var e=n.id,t=n.title,r=n.stuntDouble,o=n.subTitle;return i.a.createElement(w.a,{theme:Hn[e]},i.a.createElement(Wn,null,i.a.createElement(Y,null,t),i.a.createElement(Qn,null,r.length>0?r.map((function(n){return i.a.createElement($n,{key:n.id,img:n.img,name:n.name})})):i.a.createElement(W,null,o))))};function ee(){var n=Object(O.a)(["\n  font-size: 1.5rem;\n\n  box-sizing: border-box;\n  padding: 10px 30px 10px 30px;\n\n  border: 3px solid #f8ff9e;\n  border-radius: 30px;\n  color: #f8ff9e;\n  background-color: transparent;\n  cursor: pointer;\n"]);return ee=function(){return n},n}function te(){var n=Object(O.a)(["\n  text-decoration: none;\n"]);return te=function(){return n},n}var re=Object(w.d)(g.b)(te()),ie=w.d.button(ee()),oe=function(n){function e(){return Object(fn.a)(this,e),Object(pn.a)(this,Object(mn.a)(e).apply(this,arguments))}return Object(gn.a)(e,n),Object(bn.a)(e,[{key:"render",value:function(){var n=this.props,e=n.stuntDoublesList,t=n.superliked,r=n.liked,o=n.disliked,a=n.resetAllStuntDoubles,u=t.length>0||r.length>0||o.length>0,c=e.length>0?"You never know who you might meet...":"There's no one new around you",l=0===e.length?"Reset all profiles":u?"Carry on swiping":"Start swiping now!";return i.a.createElement(Xn,null,i.a.createElement(Zn,null,i.a.createElement(X,null,c),i.a.createElement(Zn,null,e.length>0?i.a.createElement(re,{to:v},i.a.createElement(ie,null,l)):i.a.createElement(re,{to:v,onClick:function(){return a()}},i.a.createElement(ie,null,l)))),u&&i.a.createElement(Yn,null,i.a.createElement(ne,{id:"superliked",title:"People you superliked!",stuntDouble:t,subTitle:"You didn't superlike anyone..."}),i.a.createElement(ne,{id:"liked",title:"People you liked... let's hope they like you too!",stuntDouble:r,subTitle:"You didn't like anyone..."}),i.a.createElement(ne,{id:"disliked",title:"People you disliked",stuntDouble:o,subTitle:"Cast a wide net they said..."})))}}]),e}(r.Component),ae=Object(c.b)((function(n){return{stuntDoublesList:n.stuntDoubles,superliked:n.superliked,liked:n.liked,disliked:n.disliked}}),(function(n){return Object(u.a)({resetAllStuntDoubles:vn},n)}))(oe);var ue=function(){return i.a.createElement(g.a,null,i.a.createElement("div",null,i.a.createElement(S,null),i.a.createElement(sn,null),i.a.createElement(h.d,null,i.a.createElement(h.b,{exact:!0,path:x},i.a.createElement(ae,null)),i.a.createElement(h.b,{exact:!0,path:v},i.a.createElement(zn,null)))))},ce=Object(u.c)(m,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());a.a.render(i.a.createElement(c.a,{store:ce},i.a.createElement(ue,null)),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.53faa338.chunk.js.map