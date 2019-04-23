(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,n){e.exports=n(56)},27:function(e,t,n){e.exports=n(59)},56:function(e,t,n){"use strict";n.r(t),n.d(t,"FirebaseConfig",function(){return a});var a={apiKey:"AIzaSyCqKO3-1aVdQDCw2vhZDeUmW9-doec2F90",authDomain:"todo-pwa-2afa9.firebaseapp.com",databaseURL:"https://todo-pwa-2afa9.firebaseio.com",projectId:"todo-pwa-2afa9",storageBucket:"todo-pwa-2afa9.appspot.com",messagingSenderId:"264367764837"}},57:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"addToDo",function(){return D}),n.d(a,"completeToDo",function(){return C}),n.d(a,"fetchToDos",function(){return N});n(28),n(30);var o=n(1),r=n.n(o),c=n(23),i=n.n(c),s=n(10),l=n(3),u=n(25),f=Object(l.c)({data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_TODOS":return t.payload;default:return e}}}),d=n(6),m=n(7),p=n(11),h=n(8),v=n(12),b=n(18),w=n.n(b),g=n(5),y=n.n(g),k=n(14),O=n(19),E=n(26);O.initializeApp(E.FirebaseConfig);var j=O.database().ref().child("todos"),D=function(e){return function(){var t=Object(k.a)(y.a.mark(function t(n){return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:j.push().set(e);case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},C=function(e){return function(){var t=Object(k.a)(y.a.mark(function t(n){return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:j.child(e).remove();case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},N=function(){return function(){var e=Object(k.a)(y.a.mark(function e(t){return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:j.on("value",function(e){t({type:"FETCH_TODOS",payload:e.val()})});case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},T=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).completeClick=function(e){(0,n.props.completeToDo)(e)},n}return Object(v.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.todoId,a=t.todo;return r.a.createElement("div",{key:"toDoName",className:"col s10 offset-s1 to-do-list-item black"},r.a.createElement("h4",null,a.title,r.a.createElement("span",{onClick:function(){return e.completeClick(n)},className:"complete-todo-item waves-effect waves-light blue lighten-5 blue-text text-darken-4 btn"},r.a.createElement("i",{className:"large material-icons"},"Done"))))}}]),t}(o.Component),x=Object(s.b)(null,{completeToDo:C})(T),S=(n(57),function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={showForm:!1,formValue:""},n.inputChange=function(e){n.setState({formValue:e.target.value})},n.formSubmit=function(e){var t=n.state.formValue,a=n.props.addToDo;e.preventDefault(),a({title:t}),n.setState({formValue:""})},n.renderForm=function(){var e=n.state,t=e.showForm,a=e.formValue;if(t)return r.a.createElement("div",{id:"todo-add-form",className:"col s10 offset-s1"},r.a.createElement("form",{onSubmit:n.formSubmit},r.a.createElement("div",{className:"input-field"},r.a.createElement("input",{value:a,onChange:n.inputChange,id:"toDoNext",type:"text"}),r.a.createElement("label",{htmlFor:"toDoNext"},"What Next?"))))},n}return Object(v.a)(t,e),Object(m.a)(t,[{key:"renderToDo",value:function(){var e=this.props.data,t=w.a.map(e,function(e,t){return r.a.createElement(x,{key:t,todoId:t,todo:e})});return w.a.isEmpty(t)?r.a.createElement("div",{className:"col s10 offset-s1 center-align"},r.a.createElement("h4",null,"You have no more things ToDo!")):t}},{key:"componentWillMount",value:function(){this.props.fetchToDos()}},{key:"render",value:function(){var e=this,t=this.state.showForm;return r.a.createElement("div",{className:"to-do-list-container"},r.a.createElement("div",{className:"row"},this.renderForm(),this.renderToDo()),r.a.createElement("div",{className:"fixed-action-btn"},r.a.createElement("button",{onClick:function(){return e.setState({showForm:!t})},className:"btn-floating btn-large black darken-4"},t?r.a.createElement("i",{className:"large material-icons"},"-"):r.a.createElement("i",{className:"large material-icons"},"+"))))}}]),t}(o.Component)),F=Object(s.b)(function(e){return{data:e.data}},a)(S),W=function(e){function t(){return Object(d.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(F,null))}}]),t}(o.Component),A=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function I(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var V=Object(l.d)(f,{},Object(l.a)(u.a));i.a.render(r.a.createElement(s.a,{store:V},r.a.createElement(W,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");A?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):I(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):I(t,e)})}}()}},[[27,2,1]]]);
//# sourceMappingURL=main.d3c013dc.chunk.js.map