(this["webpackJsonpyalantis-task"]=this["webpackJsonpyalantis-task"]||[]).push([[0],{23:function(e,t,n){e.exports={employee:"employee_employee__3z4zt"}},49:function(e,t,n){},50:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var s={};n.r(s),n.d(s,"employees",(function(){return P}));var a=n(1),c=n(0),r=n.n(c),o=n(19),l=n.n(o),i=(n(49),n(50),n(3)),u=n(41),b=n(12),d=n(15),p=n(22),m=["January","February","March","April","May","June","July","August","September","October","November","December"],j=function(e){return e.employees},h=Object(p.a)([j],(function(e){return e.users})),_=Object(p.a)([j],(function(e){return e.selectedUsers})),y=Object(p.a)([j,_],(function(e,t){var n=new Map;return e.users.filter((function(e){return t.includes(e.id)})).map((function(e){var t=m[new Date(e.dob).getMonth()];n.has(t)?n.set(t,[].concat(Object(d.a)(n.get(t)),[e])):n.set(t,[Object(b.a)({},e)])})),new Map(Object(d.a)(n.entries()).sort((function(e,t){return e[0]>t[0]?1:-1})))})),O=n(14),f=n(43),g=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],S=n(23),x=n.n(S),v=function(e){return Object(a.jsxs)("div",{className:x.a.employee,children:[Object(a.jsx)("div",{className:x.a.employee_name,children:"".concat(e.lastName," ").concat(e.firstName)}),Object(a.jsx)("input",{className:x.a.employee_input,type:"checkbox",value:e.id,onChange:e.onSelectingUsers,checked:e.selectedUsers.includes(e.id)})]})},E=n(13);function N(e){var t=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:e,payload:t}};return t.type=e,t}var U=n(40),k=n.n(U),w={getUsersData:N("SET_USERS START"),setUsersData:N("SET_USERS SUCCESS"),setSelectedUsers:N("SET_SELECTED_USERS")},T=Object(E.d)(Object(O.c)((function(e){return{selectedUsers:_(e)}}),(function(e){return{onSelectingUsers:function(t){return e((n=t.target.value,function(e,t){e(w.setSelectedUsers(n))}));var n}}})))(r.a.memo(v)),D=n(8),C=n.n(D),M=function(e){Object(c.useEffect)((function(){e.fetchUsersData()}),[]);var t=function(t){return e.users.filter((function(e){return e.lastName.startsWith(t)}))};return Object(a.jsxs)("div",{className:C.a["page-employees"],children:[Object(a.jsxs)("div",{className:C.a["page-employees__alphabet"],children:[Object(a.jsx)("div",{className:C.a.title,children:"Employees"}),Object(a.jsx)("div",{className:C.a["alphabet-block"],children:g.map((function(e,n){return Object(a.jsxs)("div",{className:C.a["letter-block"],children:[Object(a.jsx)("div",{className:C.a.letter,children:e}),t(e).length?t(e).map((function(e){return Object(a.jsx)(T,{lastName:e.lastName,firstName:e.firstName,id:e.id},e.id)})):"-"]},n)}))})]}),Object(a.jsxs)("div",{className:C.a["page-employees__birthdays"],children:[Object(a.jsx)("div",{className:C.a.title,children:"Employees birthday"}),Object(a.jsx)("div",{className:C.a["birthday-block"],children:e.selectedUsers.length?Object(d.a)(e.selectedByMonth.entries()).map((function(e){var t=Object(f.a)(e,2),n=t[0],s=t[1];return Object(a.jsxs)("div",{className:C.a["month-block"],children:[Object(a.jsx)("div",{className:C.a.month,children:n}),Object(a.jsx)("ul",{className:C.a["persons-block"],children:s.map((function(e,t){var n=new Date(e.dob);return Object(a.jsxs)("li",{className:C.a["person-birthday"],children:[e.lastName," ",e.firstName," - ",n.getDate()," ",m[n.getMonth()],", ",n.getFullYear()," year"," "]},e.lastName)}))})]},n)})):Object(a.jsx)("div",{children:"'No selected employees'"})})]})]})},R=Object(O.c)((function(e){return{users:h(e),selectedUsers:_(e),selectedByMonth:y(e)}}),(function(e){return{fetchUsersData:function(){return e((function(e,t){e(w.getUsersData()),k.a.get("https://yalantis-react-school-api.yalantis.com/api/task0/users").then((function(e){return e.data})).then((function(t){return e(w.setUsersData(t))})).catch((function(e){return console.log(e)}))}))}}}))(r.a.memo(M));var F,J=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(i.c,{children:[Object(a.jsx)(i.a,{path:"/",exact:!0,render:function(){return Object(a.jsx)("div",{style:{textAlign:"center"},children:Object(a.jsx)(u.a,{to:"/employees",children:Object(a.jsx)("button",{style:{padding:"10px"},children:"go to employees page"})})})}}),Object(a.jsx)(i.a,{path:"/employees",exact:!0,component:R})]})})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,74)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),s(e),a(e),c(e),r(e)}))},A=n(42),L=n(16),P=function(e,t){return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,s=arguments.length>1?arguments[1]:void 0,a=t[s.type];return a?a(n,s):n}}({users:[],selectedUsers:[],isFetching:!1},{"SET_USERS START":function(e,t){return Object(b.a)(Object(b.a)({},e),{},{isFetching:!0})},"SET_USERS SUCCESS":function(e,t){return Object(b.a)(Object(b.a)({},e),{},{users:Object(d.a)(t.payload),isFetching:!1})},SET_SELECTED_USERS:function(e,t){return Object(b.a)(Object(b.a)({},e),{},{selectedUsers:e.selectedUsers.includes(t.payload)?e.selectedUsers.filter((function(e){return e!==t.payload})):[].concat(Object(d.a)(e.selectedUsers),[t.payload])})}}),X=n(7),B=n(38),Y=Object(X.a)({basename:"/Yalantis-task/"}),z=function(){try{var e=window.localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(t){return}}(),V=("object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):E.d)(Object(E.a)(Object(B.a)(Y),A.a)),G=Object(E.e)((F=Y,Object(E.c)(Object(b.a)({router:Object(L.b)(F)},s))),z,V);window.store=G,G.subscribe((function(){!function(e){try{var t=JSON.stringify(e);window.localStorage.setItem("state",t)}catch(n){}}(G.getState())})),l.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(O.a,{store:G,children:Object(a.jsx)(L.a,{history:Y,children:Object(a.jsx)(J,{})})})}),document.getElementById("root")),I()},8:function(e,t,n){e.exports={"page-employees":"employees_page-employees__3f3nc",title:"employees_title__19Rfw","page-employees__alphabet":"employees_page-employees__alphabet__3xnHy","alphabet-block":"employees_alphabet-block__3M6Xk","letter-block":"employees_letter-block__3ioqK",letter:"employees_letter__1AeG2","page-employees__birthdays":"employees_page-employees__birthdays__spaw7","birthday-block":"employees_birthday-block__I92TE",month:"employees_month__1Yhsx","month-block":"employees_month-block__28zDJ","persons-block":"employees_persons-block__PwrRx","person-birthday":"employees_person-birthday___Ph4Q"}}},[[73,1,2]]]);
//# sourceMappingURL=main.db001fdc.chunk.js.map