(this.webpackJsonpbattleship=this.webpackJsonpbattleship||[]).push([[0],{11:function(A,e,t){},38:function(A,e){A.exports=function(A,e,t){var r=[],n=0,a=function(){var r=[];if(t)for(var n=e.y,a=1;a<=A;n++,a++)r.push([e.x,n]);else for(var s=e.x,c=1;c<=A;s++,c++)r.push([s,e.y]);return r},s=function(){var e=a();if(r.sort(),r.length===e.length){for(var t=0;t<A;t++)if(r[t][0]!==e[t][0]&&r[t][1]!==e[t][0])return"err";return"ship sunk"}return"err"};return{getDetails:function(){return{shipLen:A,startCoord:e,isHorizontal:t,pos:a()}},findAllPos:a,hit:function(e){for(var t=a(),c=0;c<A;c++)if(e.x===t[c][0]&&e.y===t[c][1])return r.push([e.x,e.y]),++n===A?s():"ship hit";return"ship miss"}}}},42:function(A,e,t){"use strict";t.r(e);var r=t(2),n=t(23),a=t.n(n),s=(t(11),t(8)),c=t(0);var i=function(A){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:A.name}),Object(c.jsx)("table",{children:Object(c.jsx)("tbody",{children:A.arr.map((function(e,t){return 0===t?Object(c.jsx)("tr",{children:e.map((function(A,e){return 0===e?Object(c.jsx)("td",{className:"coordinates"},e):Object(c.jsx)("td",{className:"coordinates",children:String.fromCharCode(e+64)},e)}))},t):Object(c.jsx)("tr",{children:e.map((function(e,t){return 0===t?Object(c.jsx)("td",{className:"coordinates",children:e[0]+1},t):Object(c.jsx)("td",{id:"".concat(e[0]).concat(e[1]," ").concat(A.name),onClick:A.handler},t)}))},t)}))})}),Object(c.jsx)("div",{className:"btn-area",children:Object(c.jsx)(s.b,{to:"/battleship/start",children:Object(c.jsx)("button",{className:"btn",children:"Restart"})})})]})};var o=function(A){return Object(c.jsxs)("div",{className:"board",children:[Object(c.jsx)("h2",{children:"Computer"}),Object(c.jsx)("table",{className:"computer-board",children:Object(c.jsx)("tbody",{children:A.arr.map((function(A,e){return 0===e?Object(c.jsx)("tr",{children:A.map((function(A,e){return 0===e?Object(c.jsx)("td",{className:"coordinates"},e):Object(c.jsx)("td",{className:"coordinates",children:String.fromCharCode(e+64)},e)}))},e):Object(c.jsx)("tr",{children:A.map((function(A,e){return 0===e?Object(c.jsx)("td",{className:"coordinates",children:A[0]+1},e):Object(c.jsx)("td",{id:"".concat(A[0]).concat(A[1]," Computer")},e)}))},e)}))})})]})},l=t(9),h=function(A){return{play:function(){for(;;){var e={};e.x=Math.floor(10*Math.random()),e.y=Math.floor(10*Math.random());var t=A.play(e);if(!/duplicate shot/.test(t)&&"err"!==t)return t}}}},d=function(A,e,t){return{getDetails:function(){return{name:A,ships:e.getallShips(),hits:t.getHitShots(),misses:t.getMissShots()}},play:function(e){var r=t.receiveAttack(e);return"all ships sunk"===r&&"all ships sunk"===t.checkAllSunk()?"".concat(A," won!"):"".concat(A," played: ").concat(r)}}},u=t(38),b=function(){var A=[],e=[],t=[],r={},n=0,a=function(e){if(e[1].x>9||e[1].y>9)return!1;for(var t=0;t<A.length;t++)if(A[t][0]===e[1].x&&A[t][1]===e[1].y)return!1;for(var r=u.apply(void 0,Object(l.a)(e)).getDetails().pos,n=0;n<r.length;n++){for(var a=0;a<A.length;a++)if(A[a][0]===r[n][0]&&A[a][1]===r[n][1])return!1;if(r[n][0]>9||r[n][1]>9)return!1}return!0},s=function(A){for(var r=0;r<e.length;r++)if(A.x===e[r][0]&&A.y===e[r][1])return!0;for(var n=0;n<t.length;n++)if(A.x===t[n][0]&&A.y===t[n][1])return!0;return!1},c=function(A){for(var e in r)for(var t=r[e].findAllPos(),n=0;n<t.length;n++)if(t[n][0]===A.x&&t[n][1]===A.y)return e;return"err"},i=function(){if(t.sort(),A.sort(),t.length!==A.length)return"no";for(var e=0;e<A.length;e++)if(t[e][0]!==A[e][0]||t[e][1]!==A[e][1])return"no";return"all ships sunk"};return{setShip:function(e,t){if(a(e)){var n;r[t]=u.apply(void 0,Object(l.a)(e));var s=r[t].getDetails().pos;return(n=A).push.apply(n,Object(l.a)(s)),s}return"err"},getallShips:function(){return A.sort()},receiveAttack:function(a){if(s(a))return"duplicate shot";if(a.x>9||a.y>9)return"err";for(var o=0;o<A.length;o++)if(a.x===A[o][0]&&a.y===A[o][1]){t.push([a.x,a.y]);var l=c(a),h=r[l].hit(a);return"ship sunk"===h?++n===Object.keys(r).length?i():"".concat(h," ").concat(l):"".concat(h)}return e.push([a.x,a.y]),"miss"},checkAllSunk:i,canPlaceShip:a,getHitShots:function(){return t.sort()},getMissShots:function(){return e.sort()},removeAllShips:function(){A=[]},ships:r}},p=function(A){var e=b(),t=b(),r=d(A,e,t),n=d("Computer",t,e),a=h(n),s=[],c=function(A){var e={},t={Carrier:5,Battleship:4,Destroyer:3,Cruiser:2,Patrol:1};for(var r in t)for(;;){var n={};n.x=Math.floor(10*Math.random()),n.y=Math.floor(10*Math.random());var a=0===Math.floor(2*Math.random());if(A.canPlaceShip([t[r],n,a],r)){A.setShip([t[r],n,a],r),e[r]=[t[r],n,a];break}}return e};c(t);var i=function(A){o(r),o(n);var e=document.querySelector("h1");e.innerHTML="".concat(A," won!"),e.classList.add("won");for(var t=0;t<10;t++)for(var a=0;a<10;a++){document.getElementById("".concat(t).concat(a," ").concat(r.getDetails().name)).classList.add("won")}},o=function(A){for(var e=A.getDetails().hits,t=A.getDetails().name,r=0;r<e.length;r++){document.getElementById("".concat(e[r][0]).concat(e[r][1]," ").concat(t)).classList.add("hit")}for(var n=A.getDetails().misses,a=0;a<n.length;a++){document.getElementById("".concat(n[a][0]).concat(n[a][1]," ").concat(t)).classList.add("miss")}document.querySelector("h1").innerHTML=s[s.length-1]},u=function(A){for(var e=r.getDetails().name,t=0;t<10;t++)for(var n=0;n<10;n++){var a=document.getElementById("".concat(t).concat(n," ").concat(e));A?a.classList.add("wait"):a.classList.remove("wait")}};return{displayShip:function(A,e){for(var t=A.getDetails().ships,r=e.getDetails().name,n=0;n<t.length;n++){document.getElementById("".concat(t[n][0]).concat(t[n][1]," ").concat(r)).classList.add("ship")}},updateGameBoard:o,mkArr:function(){for(var A=[],e=-1;e<10;e++){for(var t=[],r=-1;r<10;r++)t.push([e,r]);A.push(t)}return A},winner:i,handleClick:function(A){var e={x:Number(A.target.id[0]),y:Number(A.target.id[1])},t=r.play(e);/won!/.test(t)?i(r.getDetails().name):(s.push(t),u(!0),o(r),setTimeout((function(){t=a.play(),/won!/.test(t)?i(n.getDetails().name):(s.push(t),u(!1),o(n))}),1e3))},userShips:function(A){for(var t in A)e.setShip(Object(l.a)(A[t]),t)},randShips:c,Player:r,Computer:n}};var m=function(A){void 0===A.location.ships&&window.location.replace("/battleship/start"),""===A.location.name&&(A.location.name="A Shy Person");var e=p(A.location.name),t=e.mkArr();return e.userShips(A.location.ships),window.onbeforeunload=function(){window.location="/"},Object(r.useEffect)((function(){e.displayShip(e.Player,e.Computer)}),[]),Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Start!"}),Object(c.jsxs)("div",{className:"play-area",children:[Object(c.jsx)(i,{handler:e.handleClick,arr:t,name:A.location.name}),Object(c.jsx)(o,{arr:t})]})]})},g=t(16);var j=function(A){var e=A.gb,t=A.shipsData;for(var r in t)e.setShip(t[r]);var n=function(r){r.preventDefault();var n=Number(r.dataTransfer.getData("ship_id")),a=document.getElementById(n);a.style.display="block";var s=r.target.id,c={x:Number(s[0]),y:Number(s[1])};e.canPlaceShip([n,c,A.isHor])&&(e.setShip([n,c,A.isHor]),A.displayShips(),a.style.display="none",5===n&&(t.Carrier=[n,c,A.isHor]),4===n&&(t.Battleship=[n,c,A.isHor]),3===n&&(t.Destroyer=[n,c,A.isHor]),2===n&&(t.Cruiser=[n,c,A.isHor]),1===n&&(t.Patrol=[n,c,A.isHor]),A.setShipsData(t))},a=function(A){A.preventDefault()};return Object(c.jsx)("div",{children:Object(c.jsx)("table",{className:"place-board",children:Object(c.jsx)("tbody",{children:A.arr.map((function(A,e){return 0===e?Object(c.jsx)("tr",{children:A.map((function(A,e){return 0===e?Object(c.jsx)("td",{className:"coordinates"},e):Object(c.jsx)("td",{className:"coordinates",children:String.fromCharCode(e+64)},e)}))},e):Object(c.jsx)("tr",{children:A.map((function(A,e){return 0===e?Object(c.jsx)("td",{className:"coordinates",children:A[0]+1},e):Object(c.jsx)("td",{id:"".concat(A[0]).concat(A[1]),onDrop:n,onDragOver:a},e)}))},e)}))})})})};var f=function(A){var e=Object(l.a)(Array(A.length));return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{children:A.name}),Object(c.jsx)("table",{className:"place-ships",id:e.length,draggable:"true",onDragStart:function(A){A.dataTransfer.setData("ship_id",A.target.id),setTimeout((function(){A.target.classList.add("invisible")}),0)},onDragOver:function(A){A.preventDefault()},onDragEnd:function(A){A.target.classList.remove("invisible")},children:Object(c.jsx)("tbody",{children:A.isHor?Object(c.jsx)("tr",{children:e.map((function(A,e){return Object(c.jsx)("td",{className:"ship"},e)}))}):e.map((function(A,e){return Object(c.jsx)("tr",{children:Object(c.jsx)("td",{className:"ship"})},e)}))})})]})},C=t(13),I=t(14);var B=function(){var A=p(),e=A.mkArr(),t=b(),n=Object(r.useState)("XX_destr0yer_XX"),a=Object(g.a)(n,2),i=a[0],o=a[1],l=Object(r.useState)(!0),h=Object(g.a)(l,2),d=h[0],u=h[1],m=Object(r.useState)({}),B=Object(g.a)(m,2),Q=B[0],v=B[1],x=Object(r.useState)(!0),y=Object(g.a)(x,2),O=y[0],E=y[1];Object(r.useEffect)((function(){"XX_destr0yer_XX"!==i&&localStorage.setItem("name",i)}),[i]),Object(r.useEffect)((function(){localStorage.name?o(localStorage.name):o("XX_destr0yer_XX")}),[]),window.onbeforeunload=function(){window.location="/"};var k=function(){for(var A=t.getallShips(),e=0;e<A.length;e++){document.getElementById("".concat(A[e][0]).concat(A[e][1])).classList.add("ship")}15===t.getallShips().length&&(document.getElementById("play").disabled=!1)},S=function(){t.removeAllShips(),v({});for(var A=0;A<10;A++)for(var e=0;e<10;e++){document.getElementById("".concat(A).concat(e)).classList.remove("ship")}for(var r=document.querySelectorAll(".place-ships"),n=0;n<r.length;n++)r[n].style.display=null},J=function(A){for(var e=document.querySelectorAll(".place-ships"),t=0;t<e.length;t++)A?(e[t].classList.remove("no-drag"),e[t].draggable=!0,e[t].addEventListener("click",(function(){document.getElementById("reset").classList.remove("reset-highlight")}))):(e[t].classList.add("no-drag"),e[t].draggable=!1,e[t].addEventListener("click",(function(){document.getElementById("reset").classList.add("reset-highlight")})))};return Object(c.jsxs)("div",{children:[d?Object(c.jsxs)("div",{className:"name-container",children:[Object(c.jsx)("div",{className:"name",children:" Enter player name: "}),Object(c.jsxs)("div",{children:[Object(c.jsx)("input",{value:i,onChange:function(A){o(A.target.value)},className:"name-input"}),Object(c.jsx)("span",{className:"but",onClick:function(){var A=document.getElementsByClassName("name-container"),e=document.querySelector(".place-area"),t=document.querySelector(".ftr"),r=document.querySelector(".info");A[0].classList.add("remove-name-container"),e.classList.add("move-up"),t.classList.add("move-up"),r.classList.add("move-up"),setTimeout((function(){u(!1),e.classList.remove("move-up"),t.classList.remove("move-up"),r.classList.remove("move-up")}),1e3)},children:Object(c.jsx)(C.a,{icon:I.a})})]})]}):null,Object(c.jsxs)("div",{className:"place-area",children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Place Your Ships"}),Object(c.jsx)(j,{arr:e,setShipsData:v,shipsData:Q,isHor:O,gb:t,displayShips:k}),Object(c.jsxs)("div",{className:"btn-area",children:[Object(c.jsx)(s.b,{to:{pathname:"/battleship/play",ships:Q,name:i},children:Object(c.jsx)("button",{className:"btn play-btn",id:"play",disabled:!0,children:"Play"})}),Object(c.jsx)("button",{className:"btn",onClick:function(){S(),J(!1),v(A.randShips(t)),k()},children:"Randomize"}),Object(c.jsx)("button",{className:"btn",id:"reset",onClick:function(){S(),J(!0),document.getElementById("play").disabled=!0},children:"Reset"})]})]}),Object(c.jsxs)("div",{className:"ship-container",children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"Ships:"}),Object(c.jsx)(C.a,{className:"rotate",icon:I.c,onClick:function(){E(!O)}})]}),Object(c.jsx)("div",{className:"ship-box",style:O?{flexDirection:"column"}:{flexDirection:"row"},children:[["Carrier",5],["Battleship",4],["Destroyer",3],["Cruiser",2],["Patrol",1]].map((function(A,e){return Object(c.jsx)(f,{length:A[1],name:A[0],isHor:O},e)}))})]})]})]})};var Q=function(){return Object(c.jsxs)("div",{className:"ftr",children:[Object(c.jsxs)("div",{children:["made with ",Object(c.jsx)("img",{src:"data:image/png;base64,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",alt:"love"})]}),Object(c.jsx)("div",{children:Object(c.jsxs)("a",{href:"https://github.com/Kn0wn-Un/battleship",target:"_blank",rel:"noreferrer",children:["view source ",Object(c.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RERCMUIwOUY4NkNFMTFFM0FBNTJFRTMzNTJEMUJDNDYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RERCMUIwOUU4NkNFMTFFM0FBNTJFRTMzNTJEMUJDNDYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTJBOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTJCOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+jUqS1wAAApVJREFUeNq0l89rE1EQx3e3gVJoSPzZeNEWPKgHoa0HBak0iHiy/4C3WvDmoZ56qJ7txVsPQu8qlqqHIhRKJZceesmhioQEfxTEtsoSpdJg1u/ABJ7Pmc1m8zLwgWTmzcw3L+/te+tHUeQltONgCkyCi2AEDHLsJ6iBMlgHL8FeoqokoA2j4CloRMmtwTmj7erHBXPgCWhG6a3JNXKdCiDl1cidVbXZkJoXQRi5t5BrxwoY71FzU8S4JuAIqFkJ2+BFSlEh525b/hr3+k/AklDkNsf6wTT4yv46KIMNpsy+iMdMc47HNWxbsgVcUn7FmLAzzoFAWDsBx+wVP6bUpp5ewI+DOeUx0Wd9D8F70BTGNjkWtqnhmT1JQAHcUgZd8Lo3rQb1LAT8eJVUfgGvHQigGp+V2Z0iAUUl8QH47kAA1XioxIo+bRN8OG8F/oBjwv+Z1nJgX5jpdzQDw0LCjsPmrcW7I/iHScCAEDj03FtD8A0EyuChHgg4KTlJQF3wZ7WELppnBX+dBFSVpJsOBWi1qiRgSwnOgoyD5hmuJdkWCVhTgnTvW3AgYIFrSbZGh0UW/Io5Vp+DQoK7o80pztWMemZbgxeNwCNwDbw1fIfgGZjhU6xPaJgBV8BdsMw5cbZoHsenwYFxkZzl83xTSKTiviCAfCsJLysH3POfC8m8NegyGAGfLP/VmGmfSChgXroR0RSWjEFv2J/nG84cuKFMf4sTCZqXuJd4KaXFVjEG3+tw4eXbNK/YC9oXXs3O8NY8y99L4BXY5cvLY/Bb2VZ58EOJVcB18DHJq9lRsKr8inyKGVjlmh29mtHs3AHfuhCwy1vXT/Nu2GKQt+UHsGdctyX6eQyNvc+5sfX9Dl7Pe2J/BRgAl2CpwmrsHR0AAAAASUVORK5CYII=",alt:"on github"})]})})]})};var v=function(){return Object(c.jsxs)("div",{className:"rule",children:[Object(c.jsx)("h1",{children:"Rules for BattleShip"}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"Game Objective:"}),Object(c.jsx)("p",{children:"The object of Battleship is to try and sink all of the other player(computer) before they sink all of your ships. All of the other player's ships are somewhere on his/her board. You try and hit them by clicking the coordinates of one of the squares on the board. The other player also tries to hit your ships. Neither you nor the other player can see the other's board so you must try to guess where they are. The game has two boards: the right (smaller) board for the player's ships and the left (larger) for recording the player's guesses."})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"Starting a New Game:"}),Object(c.jsx)("p",{children:"Each player places the 5 ships somewhere on their board. The ships can only be placed vertically or horizontally. Diagonal placement is not allowed. No part of a ship may hang off the edge of the board. Ships may not overlap each other. No ships may be placed on another ship. Once the guessing begins, the players may not move the ships. The 5 ships are: Carrier (occupies 5 spaces), Battleship (4), Destroyer (3), Cruiser (2), and Patrol (1)."})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"Playing the Game:"}),Object(c.jsx)("p",{children:'Player take turn guessing by clicking the coordinates. The game responds with "hit" or "miss" as appropriate. The board is marked with colors: green for hit, red for miss. For example, if you click F6 and your opponent does not have any ship located at F6, game would respond with "miss". The board records the miss F6 by coloring it red. When all of the squares that one your ships occupies have been hit, the ship will be sunk. As soon as all of one player\'s ships have been sunk, the game ends.'})]}),Object(c.jsx)(s.b,{to:"/battleship/start",children:Object(c.jsx)("button",{className:"btn play-btn",children:"Start Game!"})})]})},x=t(25),y=t(3);a.a.render(Object(c.jsxs)(s.a,{children:[Object(c.jsxs)(y.d,{children:[Object(c.jsx)(y.b,{exact:!0,path:"/battleship/play",component:m}),Object(c.jsx)(y.b,{exact:!0,path:"/battleship/start",children:Object(c.jsx)(B,{})}),Object(c.jsx)(y.b,{exact:!0,path:"/battleship/rules",children:Object(c.jsx)(v,{})}),Object(c.jsx)(y.a,{from:"/",to:"/battleship/start"})]}),Object(c.jsx)("div",{className:"info","data-tip":!0,"data-for":"registerTip",href:"/",children:Object(c.jsx)(s.b,{to:"/battleship/rules",children:Object(c.jsx)(C.a,{icon:I.b})})}),Object(c.jsx)(x.a,{id:"registerTip",place:"bottom",effect:"solid",children:"How to play?"}),Object(c.jsx)(Q,{})]}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.ea0136b9.chunk.js.map