(this["webpackJsonpdrum-machine"]=this["webpackJsonpdrum-machine"]||[]).push([[0],{12:function(e,t,c){},13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var d=c(0),a=c(1),n=c.n(a),r=c(5),s=c.n(r),o=(c(12),c(6)),i=c(4),u=(c(13),[{key:"Q",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",id:"Audio 1",code:81},{key:"W",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",id:"Audio 2",code:87},{key:"E",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",id:"Audio 3",code:69},{key:"A",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",id:"Audio 4",code:65},{key:"S",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",id:"Audio 5",code:83},{key:"D",url:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",id:"Audio 6",code:68},{key:"Z",url:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",id:"Audio 7",code:90},{key:"X",url:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",id:"Audio 8",code:88},{key:"C",url:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",id:"Audio 9",code:67}]);function m(e){return Object(d.jsx)("div",{id:"display",children:e.text})}function l(e){function t(t){e.power&&(e.setText(t.target.id),t.target.firstElementChild.play(),t.target.className="pulsed",setTimeout((function(){t.target.className="drum-pad"}),100))}return u.map((function(e){return Object(d.jsxs)("div",{className:"drum-pad",id:e.id,onClick:t,children:[e.key,Object(d.jsx)("audio",{src:e.url,className:"clip",id:e.key})]},e.key)}))}var p=function(){var e=Object(a.useState)("Play!"),t=Object(i.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)(!0),s=Object(i.a)(r,2),u=s[0],p=s[1];return Object(a.useEffect)((function(){var e=function(e){var t=document.getElementById(e.key.toUpperCase());t&&u&&(n(t.parentNode.id),t.play(),t.parentNode.className="pulsed",setTimeout((function(){t.parentNode.className="drum-pad"}),100))};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[u]),Object(d.jsxs)("div",{id:"drum-machine",children:[Object(d.jsx)("div",{id:"sounds-panel",children:Object(d.jsx)(l,{power:u,setText:n})}),Object(d.jsxs)("div",{id:"control-panel",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{children:"Power"}),Object(d.jsx)("div",{id:"power",onClick:function(e){u?(e.target.style.background="#CC0000",p(!1)):(e.target.style.background="darkgreen",p(!0))}})]}),Object(d.jsx)(m,{text:c}),Object(d.jsxs)("div",{className:"volume-control",children:[Object(d.jsx)("div",{children:"Volume"}),Object(d.jsx)("input",{type:"range",min:"0",max:"100",className:"slider",id:"myRange",onChange:function(e){var t=document.getElementById("sounds-panel").children;n("Volume: "+e.target.value);var c,d=Object(o.a)(t);try{for(d.s();!(c=d.n()).done;){c.value.firstElementChild.volume=e.target.value/100}}catch(a){d.e(a)}finally{d.f()}}})]})]})]})},j=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,15)).then((function(t){var c=t.getCLS,d=t.getFID,a=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),d(e),a(e),n(e),r(e)}))};s.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(p,{})}),document.getElementById("root")),j()}},[[14,1,2]]]);
//# sourceMappingURL=main.0c4b0879.chunk.js.map