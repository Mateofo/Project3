(this["webpackJsonpmern-client"]=this["webpackJsonpmern-client"]||[]).push([[0],{82:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var a,c,r,s,o,i,l,d,b,j=n(1),m=n.n(j),u=n(68),h=n.n(u),O=n(32),f=n(72),x=n(97),p=n(98),g=n(95),v=n(21),w=n(6),y=n(71),N=n(100),k=n(26),S=n(96),$=Object(S.a)(a||(a=Object(k.a)(["\n  query  {\n  bodys {\n    _id\n    plan\n    foods {\n      _id\n      name\n      category\n      image\n      calories\n      fats\n      carbs\n      protein\n      isLowCalorie\n    }\n  }\n}\n"]))),I=Object(S.a)(c||(c=Object(k.a)(["\n  query GetSingleBody($bodyId: ID!) {\n    body(_id: $bodyId) {\n      _id\n      plan\n      foods {\n        _id\n        name\n        category\n        image\n        calories\n        fats\n        carbs\n        protein\n      }\n    }\n  }\n"]))),_=(Object(S.a)(r||(r=Object(k.a)(["\nquery  {\n  foods {\n    _id\n    name\n    category\n    image\n    calories\n    fats\n    carbs\n    protein\n    isLowCalorie\n  }\n}\n"]))),Object(S.a)(s||(s=Object(k.a)(["\n  query GetFoodById($foodId: ID!) {\n    food(_id: $foodId) {\n      _id\n      name\n      category\n      image\n      calories\n      fats\n      carbs\n      protein\n      isLowCalorie\n    }\n  }\n"]))),Object(S.a)(o||(o=Object(k.a)(["\n  query GetUser {\n    user {\n      _id\n      firstName\n      lastName\n      email\n    }\n  }\n"]))),n(2)),C=function(e){var t=e.bodys,n=e.title;return t.length?Object(_.jsxs)("div",{children:[Object(_.jsx)("h3",{children:n}),t&&t.map((function(e){return Object(_.jsxs)("div",{className:"card mb-3",children:[Object(_.jsx)("img",{src:"https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Zml0bmVzc3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Zml0bmVzc3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",alt:e.plan}),Object(_.jsx)(v.b,{className:"btn btn-primary btn-block btn-squared",to:"/bodies/".concat(e._id),children:"Join the discussion on this Body Plan."})]},e._id)}))]}):Object(_.jsx)("h3",{children:"No bodys Yet"})},F=function(){var e=Object(N.a)($),t=e.loading,n=e.data,a=(null===n||void 0===n?void 0:n.bodys)||[];return Object(_.jsx)("main",{children:Object(_.jsx)("div",{className:"col-12 col-md-8 mb-3",children:t?Object(_.jsx)("div",{children:"Loading..."}):Object(_.jsx)(C,{bodys:a,title:"Some Feed for Body(s)..."})})})},A=n(13),T=n(8),D=n(14),L=n(9),B=n(91),H=Object(S.a)(i||(i=Object(k.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]))),M=Object(S.a)(l||(l=Object(k.a)(["\nmutation AddUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {\n  addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {\n    token\n    user {\n      _id\n      firstName\n      lastName\n      email\n    }\n  }\n}\n"]))),W=(Object(S.a)(d||(d=Object(k.a)(["\nmutation RemoveFood($_id: ID!) {\n  removeFood(_id: $_id) {\n    _id\n    name\n    category\n    image\n    calories\n    fats\n    carbs\n    protein\n    isLowCalorie\n  }\n}"]))),Object(S.a)(b||(b=Object(k.a)(["\n  mutation AddFood(\n    $bodyId: ID!\n    $name: String!\n    $calories: Int!\n    $fats: Int!\n    $carbs: Int!\n    $protein: Int!\n  ) {\n    addFood(\n      bodyId: $bodyId\n      name: $name\n      calories: $calories\n      fats: $fats\n      carbs: $carbs\n      protein: $protein\n    ) {\n      _id\n      name\n      category\n      image\n      calories\n      fats\n      carbs\n      protein\n      isLowCalorie\n    }\n  }\n"])))),q=n(18),E=n(17),G=n(61),P=n.n(G),U=new(function(){function e(){Object(q.a)(this,e)}return Object(E.a)(e,[{key:"getProfile",value:function(){return P()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return P()(e).exp<Date.now()/1e3}catch(t){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}());var z=function(e){var t=Object(j.useState)({email:"",password:""}),n=Object(L.a)(t,2),a=n[0],c=n[1],r=Object(B.a)(H),s=Object(L.a)(r,2),o=s[0],i=s[1].error,l=function(){var e=Object(D.a)(Object(T.a)().mark((function e(t){var n,c;return Object(T.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,o({variables:{email:a.email,password:a.password}});case 4:n=e.sent,c=n.data.login.token,U.login(c),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),d=function(e){var t=e.target,n=t.name,r=t.value;c(Object(O.a)(Object(O.a)({},a),{},Object(A.a)({},n,r)))};return Object(_.jsxs)("div",{className:"container my-1",children:[Object(_.jsx)(v.b,{to:"/signup",children:"\u2190 Go to Signup"}),Object(_.jsx)("h2",{children:"Login"}),Object(_.jsxs)("form",{onSubmit:l,children:[Object(_.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(_.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(_.jsx)("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:d})]}),Object(_.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(_.jsx)("label",{htmlFor:"pwd",children:"Password:"}),Object(_.jsx)("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:d})]}),i?Object(_.jsx)("div",{children:Object(_.jsx)("p",{className:"error-text",children:"The provided credentials are incorrect"})}):null,Object(_.jsx)("div",{className:"flex-row flex-end",children:Object(_.jsx)("button",{type:"submit",children:"Submit"})})]})]})},R=function(e){var t=e.bodyId,n=Object(j.useState)(""),a=Object(L.a)(n,2),c=a[0],r=a[1],s=Object(j.useState)(""),o=Object(L.a)(s,2),i=o[0],l=o[1],d=Object(j.useState)(""),b=Object(L.a)(d,2),m=b[0],u=b[1],h=Object(j.useState)(""),O=Object(L.a)(h,2),f=O[0],x=O[1],p=Object(j.useState)(""),g=Object(L.a)(p,2),v=g[0],w=g[1],y=Object(B.a)(W),N=Object(L.a)(y,1)[0],k=function(){var e=Object(D.a)(Object(T.a)().mark((function e(n){var a;return Object(T.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,N({variables:{bodyId:t,nameText:c,calorieText:i,fatText:m,carbText:f,proteinText:v}});case 4:a=e.sent,a.data,r(""),l(""),u(""),x(""),w(""),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(_.jsxs)("div",{children:[Object(_.jsx)("h4",{children:"Add your own customized food to the plan"}),Object(_.jsxs)("form",{className:"flex-row justify-center justify-space-between-md align-center",onSubmit:k,children:[Object(_.jsx)("div",{className:"col-12 col-lg-9",children:Object(_.jsx)("textarea",{name:"foodName",placeholder:"Add your food's name...",value:c,className:"form-input w-100",style:{lineHeight:"1.5"},onChange:function(e){var t=e.target,n=t.name,a=t.value;"foodName"===n&&r(a)}})}),Object(_.jsx)("div",{className:"col-12 col-lg-9",children:Object(_.jsx)("textarea",{name:"foodcalories",placeholder:"Add your food's calories...",value:i,className:"form-input w-100",style:{lineHeight:"1.5"},onChange:function(e){var t=e.target,n=t.name,a=t.value;"foodcalories"===n&&l(a)}})}),Object(_.jsx)("div",{className:"col-12 col-lg-9",children:Object(_.jsx)("textarea",{name:"foodfats",placeholder:"Add your food's fats...",value:m,className:"form-input w-100",style:{lineHeight:"1.5"},onChange:function(e){var t=e.target,n=t.name,a=t.value;"foodfats"===n&&u(a)}})}),Object(_.jsx)("div",{className:"col-12 col-lg-9",children:Object(_.jsx)("textarea",{name:"foodcarbs",placeholder:"Add your food's carbs...",value:f,className:"form-input w-100",style:{lineHeight:"1.5"},onChange:function(e){var t=e.target,n=t.name,a=t.value;"foodcarbs"===n&&x(a)}})}),Object(_.jsx)("div",{className:"col-12 col-lg-9",children:Object(_.jsx)("textarea",{name:"foodprotein",placeholder:"Add your food's protein...",value:v,className:"form-input w-100",style:{lineHeight:"1.5"},onChange:function(e){var t=e.target,n=t.name,a=t.value;"foodprotein"===n&&w(a)}})}),Object(_.jsx)("div",{className:"col-12 col-lg-3",children:Object(_.jsx)("button",{className:"btn btn-primary btn-block py-3",type:"submit",children:"Add Food"})})]})]})},Y=function(e){var t=e.foods,n=void 0===t?[]:t;return n.length?Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("h3",{className:"p-5 display-inline-block",style:{borderBottom:"1px dotted #1a1a1a"},children:"Foods"}),Object(_.jsx)("div",{className:"flex-row my-4",children:n&&n.map((function(e){return Object(_.jsx)("div",{className:"col-12 mb-3 pb-3",children:Object(_.jsx)("div",{className:"p-3 bg-dark text-light",children:Object(_.jsxs)("div",{className:"card-body",children:[Object(_.jsx)("img",{alt:e.name,src:"/images/".concat(e.image)}),Object(_.jsxs)("p",{children:["Food: ",e.name]}),Object(_.jsxs)("p",{children:["Category: ",e.category]}),Object(_.jsxs)("p",{children:["Calories: ",e.calories]}),Object(_.jsxs)("p",{children:["Fats: ",e.fats]}),Object(_.jsxs)("p",{children:["Carbs: ",e.carbs]}),Object(_.jsxs)("p",{children:["Protein: ",e.protein]})]})})},e._id)}))})]}):Object(_.jsx)("h3",{children:"No foods Yet"})},Z=function(){var e=Object(w.p)().bodyId,t=Object(N.a)(I,{variables:{bodyId:e}}),n=t.loading,a=t.data,c=(null===a||void 0===a?void 0:a.body)||{};return n?Object(_.jsx)("div",{children:"Loading..."}):Object(_.jsxs)("div",{children:[Object(_.jsx)("div",{className:"my-5",children:Object(_.jsx)(Y,{foods:c.foods})}),Object(_.jsx)("div",{className:"m-3 p-4",style:{border:"1px dotted #1a1a1a"},children:Object(_.jsx)(R,{bodyId:c._id})})]})},J=function(){var e=Object(w.l)(),t=Object(w.n)();return Object(_.jsx)("footer",{className:"w-100 mt-auto bg-secondary p-4",children:Object(_.jsxs)("div",{className:"container text-center mb-5",children:["/"!==e.pathname&&Object(_.jsx)("button",{className:"btn btn-dark mb-3",onClick:function(){return t(-1)},children:"\u2190 Go Back"}),Object(_.jsxs)("h4",{children:["Made with"," ",Object(_.jsx)("span",{className:"emoji",role:"img","aria-label":"heart","aria-hidden":"false",children:"\u2764\ufe0f"})," ","by the Tech Thoughts team."]})]})})},V=function(){return Object(_.jsx)("header",{className:"bg-primary text-light mb-4 py-3 flex-row align-center",children:Object(_.jsxs)("div",{className:"container flex-row justify-space-between-lg justify-center align-center",children:[Object(_.jsx)(v.b,{className:"text-light",to:"/",children:Object(_.jsx)("h1",{className:"m-0",children:"Tech Thoughts"})}),Object(_.jsx)("p",{className:"m-0",children:"Get into the mind of a programmer."})]})})};var X=function(e){var t=Object(j.useState)({email:"",password:""}),n=Object(L.a)(t,2),a=n[0],c=n[1],r=Object(B.a)(M),s=Object(L.a)(r,1)[0],o=function(){var e=Object(D.a)(Object(T.a)().mark((function e(t){var n,c;return Object(T.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,s({variables:{email:a.email,password:a.password,firstName:a.firstName,lastName:a.lastName}});case 3:n=e.sent,c=n.data.addUser.token,U.login(c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i=function(e){var t=e.target,n=t.name,r=t.value;c(Object(O.a)(Object(O.a)({},a),{},Object(A.a)({},n,r)))};return Object(_.jsxs)("div",{className:"container my-1",children:[Object(_.jsx)(v.b,{to:"/login",children:"\u2190 Go to Login"}),Object(_.jsx)("h2",{children:"Signup"}),Object(_.jsxs)("form",{onSubmit:o,children:[Object(_.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(_.jsx)("label",{htmlFor:"firstName",children:"First Name:"}),Object(_.jsx)("input",{placeholder:"First",name:"firstName",type:"firstName",id:"firstName",onChange:i})]}),Object(_.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(_.jsx)("label",{htmlFor:"lastName",children:"Last Name:"}),Object(_.jsx)("input",{placeholder:"Last",name:"lastName",type:"lastName",id:"lastName",onChange:i})]}),Object(_.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(_.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(_.jsx)("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:i})]}),Object(_.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(_.jsx)("label",{htmlFor:"pwd",children:"Password:"}),Object(_.jsx)("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:i})]}),Object(_.jsx)("div",{className:"flex-row flex-end",children:Object(_.jsx)("button",{type:"submit",children:"Submit"})})]})]})},K=Object(f.a)({uri:"/graphql"}),Q=Object(y.a)((function(e,t){var n=t.headers,a=localStorage.getItem("id_token");return{headers:Object(O.a)(Object(O.a)({},n),{},{authorization:a?"Bearer ".concat(a):""})}})),ee=new x.a({link:Q.concat(K),cache:new p.a});var te=function(){return Object(_.jsx)(g.a,{client:ee,children:Object(_.jsx)(v.a,{children:Object(_.jsxs)("div",{className:"flex-column justify-flex-start min-100-vh",children:[Object(_.jsx)(V,{}),Object(_.jsx)("div",{className:"container",children:Object(_.jsxs)(w.c,{children:[Object(_.jsx)(w.a,{path:"/",element:Object(_.jsx)(F,{})}),Object(_.jsx)(w.a,{path:"/login",element:Object(_.jsx)(z,{})}),Object(_.jsx)(w.a,{path:"/signup",element:Object(_.jsx)(X,{})}),Object(_.jsx)(w.a,{path:"/bodies/:bodyId",element:Object(_.jsx)(Z,{})})]})}),Object(_.jsx)(J,{})]})})})},ne=(n(82),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function ae(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}h.a.render(Object(_.jsx)(m.a.StrictMode,{children:Object(_.jsx)(te,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");ne?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ae(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ae(t,e)}))}}()}},[[83,1,2]]]);
//# sourceMappingURL=main.053b5cc5.chunk.js.map