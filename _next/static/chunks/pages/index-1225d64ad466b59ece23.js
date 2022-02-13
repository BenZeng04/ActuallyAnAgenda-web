(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{6124:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var r=n(3817),a=n(6427),s=n(5234),i=(n(7294),n(6827)),c=n(381),o=n.n(c),u=n(5893),l=(0,i.Zt)(o());function d(){var e=(0,r.ZP)();if(e.loading!==r._H)return null;if(null==e.authUser)return window.location.href="/login",null;var t=e.userData.schedule,n=void 0!==t,c=[];for(var o in t){var d=t[o];c.push({title:d.name,start:new Date(d.start),end:new Date(d.end)})}for(var f in e.userData.events){var h=e.userData.events[f];c.push({title:h.name,start:new Date(h.start),end:new Date(h.end)})}var m=n?(0,u.jsx)(i.f,{localizer:l,events:c,style:{marginTop:"10px",width:"100%",height:"100vh"},startAccessor:"start",endAccessor:"end"}):(0,u.jsx)(u.Fragment,{});return(0,u.jsxs)("div",{className:"fullscreen",children:[(0,u.jsx)("title",{children:"Home"}),(0,u.jsx)(s.ZP,{authInfo:e}),(0,u.jsxs)("div",{className:"content",children:[(0,u.jsx)(a.Dx,{name:"Home"}),(0,u.jsx)(a.iz,{}),(0,u.jsxs)("div",{className:"box",children:[(0,u.jsx)("h3",{children:"Welcome to ActuallyAnAgenda!"}),(0,u.jsx)("div",{className:"box-content",children:(0,u.jsx)("p",{children:"Most of us would like to be more productive with our time but have a long list of tasks we need to complete. Our project; ActuallyAnAgendaAgain aims to solve this by automatically turning a to-do list of your tasks into a fully-fledged schedule using dynamic programming with your events and breaks to optimize your productivity. This is all done in our easy to use web app that provides a GUI for our algorithm. Personal preferences can be set like break durations, work times, and meal times so our algorithm can create a schedule just for you."})})]}),m]})]})}},5234:function(e,t,n){"use strict";n.d(t,{ZP:function(){return i}});var r=n(2593),a=(n(7294),n(5893));function s(){return(0,a.jsx)("div",{className:"divider-vertical"})}var i=function(e){return null==e.authInfo.authUser?(0,a.jsxs)("div",{className:"header",children:[(0,a.jsx)("a",{className:"item",href:"/",children:"Home"}),(0,a.jsx)(s,{}),(0,a.jsx)("a",{className:"item right",href:"/login",children:"Login"}),(0,a.jsx)("p",{className:"item",children:"or"}),(0,a.jsx)("a",{className:"item",href:"/signup",children:"Sign Up"})]}):(0,a.jsxs)("div",{className:"header",children:[(0,a.jsx)("a",{className:"item",href:"/",style:{padding:0},children:(0,a.jsx)("img",{src:"/images/logo.png"})}),(0,a.jsx)(s,{}),(0,a.jsx)("a",{className:"item",href:"/create",children:"Create A Task"}),(0,a.jsx)(s,{}),(0,a.jsxs)("div",{className:"profile right",children:[(0,a.jsx)("a",{className:"item",href:"/user",children:"My Tasks"}),(0,a.jsx)("a",{className:"dropdown-item",href:"/logout",onClick:function(e){r.I8.signOut();return!0},children:"Log Out"})]})]})}},6427:function(e,t,n){"use strict";n.d(t,{qO:function(){return a},Dx:function(){return s},iz:function(){return i},jj:function(){return c}});n(7294),n(2593);var r=n(5893);function a(e){var t=e.buttons.map((function(e){var t=e.name,n=e.description,a=e.href;return(0,r.jsxs)("a",{className:"button",href:a,children:[(0,r.jsx)("span",{className:"event-name",children:t}),(0,r.jsx)("span",{className:"description",children:n})]},t)}));return(0,r.jsx)("div",{className:"main-task-menu",children:t})}function s(e){return(0,r.jsx)("h1",{className:"title",children:e.name})}function i(){return(0,r.jsx)("hr",{className:"divider"})}function c(e){return(0,r.jsx)("div",{className:"error",children:e.error})}},3817:function(e,t,n){"use strict";n.d(t,{_H:function(){return d},ZP:function(){return f}});var r=n(2809),a=n(266),s=n(809),i=n.n(s),c=n(7294),o=n(2593);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d=!1;function f(){var e=(0,c.useState)(null),t=e[0],n=e[1],r=(0,c.useState)(true),s=r[0],u=r[1],f=(0,c.useState)(null),h=f[0],m=f[1];return(0,c.useEffect)((function(){var e=o.I8.onAuthStateChanged((function(t){(function(){var e=(0,a.Z)(i().mark((function e(t){var r,a,s;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=4;break}return n(null),u(d),e.abrupt("return");case 4:return e.next=6,o.db.collection("users").doc(t.uid).get();case 6:return r=e.sent.data(),e.next=9,o.db.collection("users").doc(t.uid).collection("projects");case 9:return a=e.sent,e.next=12,a.get().then((function(e){var t={};e.forEach((function(e){t[e.id]=l({},e.data())})),r.projects=t}));case 12:return e.next=14,o.db.collection("users").doc(t.uid).collection("events");case 14:return s=e.sent,e.next=17,s.get().then((function(e){var t={};e.forEach((function(e){t[e.id]=l({},e.data())})),r.events=t}));case 17:n(t),m(r),u(d);case 20:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}})()(t).then((function(){return e()}))}))}),[]),{authUser:t,loading:s,userData:h}}},2593:function(e,t,n){"use strict";n.d(t,{db:function(){return a},I8:function(){return s}});var r=n(5503);n(3759),n(6690),n(3935);r.Z.apps.length||r.Z.initializeApp({apiKey:"AIzaSyBm2m4FM61C-VrKC3lRLT_8Cq0GxgblrGg",authDomain:"classified-bfa24.firebaseapp.com",databaseURL:"https://classified-bfa24-default-rtdb.firebaseio.com",projectId:"classified-bfa24",storageBucket:"classified-bfa24.appspot.com",messagingSenderId:"685388058525",appId:"1:685388058525:web:77dafea83b88b620e9a974",measurementId:"G-8C5N4Z77YP"});var a=r.Z.firestore(),s=r.Z.auth()},8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(6124)}])}},function(e){e.O(0,[774,972,834,770,885,751,838,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);