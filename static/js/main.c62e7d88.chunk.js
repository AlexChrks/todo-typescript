(this["webpackJsonptodo-typescript"]=this["webpackJsonptodo-typescript"]||[]).push([[0],{52:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(5),i=n.n(a),s=n(1),o=function(){return Object(s.jsx)("nav",{children:Object(s.jsx)("div",{className:"nav-wrapper px1",children:Object(s.jsx)("a",{href:"/",className:"brand-logo",children:"Todo Typescript"})})})},l=n(3),d=function(){return Object(l.b)()},u=l.c,p=n(8),j=n.n(p),O=n(19),b=n(20),f=n.n(b);function h(){return(h=Object(O.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("https://jsonplaceholder.typicode.com/todos");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var m=function(){return function(e){(function(){return h.apply(this,arguments)})().then((function(t){var n=t.data.map((function(e){return{id:e.id,title:e.title,completed:e.completed}}));e({type:"SET_INITIAL_TODOS",payload:n})}))}},x=function(){var e=d(),t=Object(c.useRef)(null);return Object(s.jsxs)("div",{className:"input-field mt2",children:[Object(s.jsx)("input",{ref:t,type:"text",id:"title",placeholder:"Type task here",onKeyPress:function(n){"Enter"===n.key&&(!function(t){var n={title:t,id:Date.now(),completed:!1};e({type:"ADD_TODO",payload:n})}(t.current.value),t.current.value="")}}),Object(s.jsx)("label",{htmlFor:"title",className:"active",children:"Type task here"})]})},y=function(e){var t=e.title,n=e.id,c=e.isCompleted,r=e.classes,a=d();return Object(s.jsx)("li",{className:r,children:Object(s.jsxs)("label",{children:[Object(s.jsx)("input",{type:"checkbox",checked:c,onChange:function(e){a({type:"CHANGE_TODO_STATUS",payload:e})}.bind(null,n)}),Object(s.jsx)("span",{children:t}),Object(s.jsx)("i",{className:"material-icons red-text",onClick:function(){return function(e){a({type:"DELETE_TODO",payload:e})}(n)},children:"delete"})]})},n)},v=function(){var e=u((function(e){return e})),t=d();return Object(c.useEffect)((function(){t(m())}),[]),Object(s.jsx)(s.Fragment,{children:e&&Object(s.jsx)("ul",{children:e.map((function(e){var t=["todo"];return e.completed&&t.push("completed"),Object(s.jsx)(y,{title:e.title,id:e.id,isCompleted:e.completed,classes:t.join(" ")},e.id)}))})})},T=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(o,{}),Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)(x,{}),Object(s.jsx)(v,{})]})]})},D=(n(52),n(9)),E=n(4),_=[];var N=n(21),k=Object(D.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_INITIAL_TODOS":return Object(E.a)(t.payload);case"ADD_TODO":return[t.payload].concat(Object(E.a)(e));case"CHANGE_TODO_STATUS":return e.map((function(e){e.id===t.payload&&(e.completed=!e.completed)})),Object(E.a)(e);case"DELETE_TODO":var n=e.filter((function(e){return t.payload!==e.id}));return Object(E.a)(n);default:return e}}),Object(D.a)(N.a));i.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(l.a,{store:k,children:Object(s.jsx)(T,{})})}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.c62e7d88.chunk.js.map