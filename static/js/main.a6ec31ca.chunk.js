(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){e.exports=n(21)},20:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(4),c=n.n(o),l=n(1),s=n(5),u=n(2),i=n.n(u),d=n(10),m=n(6),f=n(7),p=n(8),h=n(11),E=n(9),b=n(12),j=function(){return fetch("https://jsonplaceholder.typicode.com/todos").then(function(e){return e.json()})},k=function(){return fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()})};function v(e){return a.a.createElement("span",null," ",e.name," ")}function O(e){return a.a.createElement("tr",{className:"item",key:e.id},a.a.createElement("td",null,a.a.createElement("input",{type:"checkbox",checked:e.completed})),a.a.createElement("td",null,a.a.createElement("label",{className:"label"},e.text)),a.a.createElement("td",null,a.a.createElement(v,{key:e.user.id,name:e.user.name})))}var y={name:"completed",order:!0},S={name:"title",order:!0},g={name:"user",order:!0};function w(e){var t=e.todos,n=e.onSort,r=t.map(function(e){return a.a.createElement(O,{key:e.id,completed:e.completed,id:e.id,text:e.title,user:e.user})});return a.a.createElement("table",null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",{onClick:function(){return n(y)}},"Status"),a.a.createElement("th",{onClick:function(){return n(S)}},"Task"),a.a.createElement("th",{onClick:function(){return n(g)}},"User"))),a.a.createElement("tbody",null,r))}var T=function(e){function t(e){var n;return Object(f.a)(this,t),(n=Object(h.a)(this,Object(E.a)(t).call(this,e))).loadData=Object(m.a)(i.a.mark(function e(){var t,r,a,o,c;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({isLoading:!0}),e.next=3,Promise.all([j(),k()]);case 3:t=e.sent,r=Object(d.a)(t,2),a=r[0],o=r[1],c=n.getTodosWithUsers(a,o),n.setState({todosData:c,isLoading:!1});case 9:case"end":return e.stop()}},e)})),n.getTodosWithUsers=function(e,t){return e.map(function(e){return Object(s.a)({},e,{user:t.find(function(t){return t.id===e.userId})})})},n.state={sortField:S,isLoading:!1,todoData:[]},n.handleSort=function(e){n.setState(function(){return{sortField:e}})},n}return Object(b.a)(t,e),Object(p.a)(t,[{key:"sortTodos",value:function(e,t){var n,r=(n={},Object(l.a)(n,S.name,function(e,t){return e.title.localeCompare(t.title)}),Object(l.a)(n,g.name,function(e,t){return e.user.name.localeCompare(t.user.name)}),Object(l.a)(n,y.name,function(e,t){return e.completed-t.completed}),n),a=r[t.name]||r.SORT_ORDER_TITLE;if(e)return t.order?(t.order=!t.order,e.sort(a)):(t.order=!t.order,e.sort(a).reverse())}},{key:"render",value:function(){var e=this.state,t=e.todosData,n=e.isLoading,r=e.sortField,o=this.sortTodos(t,r);return a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"React dynamic list of todos"),t?a.a.createElement(w,{todos:o,onSort:this.handleSort}):a.a.createElement("button",{onClick:this.loadData,disabled:n},n?"loading":"details"))}}]),t}(a.a.Component);n(20);c.a.render(a.a.createElement(T,null),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.a6ec31ca.chunk.js.map