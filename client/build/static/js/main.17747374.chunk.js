(this["webpackJsonpgerenciador-de-caixa"]=this["webpackJsonpgerenciador-de-caixa"]||[]).push([[0],{49:function(e){e.exports=JSON.parse('{"LOGIN_SUCCESS":{"title":"Logado com sucesso!","description":"Agora voce tem acesso ao sistema","status":"success"},"LOGIN_ERROR":{"title":"Falha no login!","description":"Senha ou email incorrentos","status":"error"},"SIGN_OUT":{"title":"Conta desconectada!","description":"Conta desconectada com sucesso","status":"success"},"NEW_ACCOUNT_SUCCESS":{"title":"Conta criada com sucesso!","description":"Conta criada e liberada para o uso","status":"success"},"NEW_ACCOUNT_ERROR":{"title":"Falha na cri\xe7\xe3o!","description":"A conta nao foi criada, erro interno","status":"error"},"DELETE_ACCOUNT_SUCCESS":{"title":"Conta deletada com sucesso!","description":"Conta deletada e retirada de uso","status":"success"},"DELETE_ACCOUNT_ERROR":{"title":"Falha no delete!","description":"A conta nao foi deletada, erro interno","status":"error"},"NEW_TRANSACTION_SUCCESS":{"title":"Transa\xe7\xe3o criada com sucesso!","description":"A transa\xe7\xe3o foi criada com sucesso","status":"success"},"NEW_TRANSACTION_ERROR":{"title":"Falha na cria\xe7\xe3o!","description":"A transa\xe7\xe3o nao foi criada, erro interno","status":"error"},"DELETE_TRANSACTION_SUCCESS":{"title":"Delete feito com sucesso!","description":"Transa\xe7\xe3o deletada da sua conta","status":"success"},"DELETE_TRANSACTION_ERROR":{"title":"Falha no delete!","description":"A transa\xe7\xe3o nao foi deletada da sua conta","status":"error"},"EDIT_TRANSACTION_SUCCESS":{"title":"Edi\xe7\xe3o feita com sucesso!","description":"A transa\xe7\xe3o foi editada e atualizada","status":"success"},"EDIT_TRANSACTION_ERROR":{"title":"Falha na edi\xe7\xe3o!","description":"A transa\xe7\xe3o nao foi editada","status":"error"},"SERVER_ERROR":{"title":"Erro interno!","description":"Servidor offline ou erro de conexao","status":"error"}}')},56:function(e,t,n){},79:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){},96:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(26),r=n.n(c),s=(n(56),n(3)),i=n.n(s),o=n(5),u=n(6),l=n(20),d=n(7),j=n(18),p=n(11),O=n.n(p),b="http://192.168.0.30:3100",m=function(){var e=Object(o.a)(i.a.mark((function e(t,n,a){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.post("".concat(b,"/user/new-account"),{data:{user:t,account:n,token:a}});case 3:return c=e.sent,e.abrupt("return",c);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n,a){return e.apply(this,arguments)}}(),h=function(){var e=Object(o.a)(i.a.mark((function e(t,n){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("".concat(b,"/user/get-accounts"),{params:{email:t,token:n}});case 3:return a=e.sent,e.abrupt("return",a);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}(),f=function(){var e=Object(o.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.post("".concat(b,"/user/new-transaction"),t);case 3:return n=e.sent,e.abrupt("return",n);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(o.a)(i.a.mark((function e(t,n,a){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("".concat(b,"/user/get-transactions"),{params:{account_id:n,email:t,token:a}});case 3:return c=e.sent,e.abrupt("return",c);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n,a){return e.apply(this,arguments)}}(),v=function(){var e=Object(o.a)(i.a.mark((function e(t,n,a){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.delete("".concat(b,"/user/delete-transaction"),{params:{id:n,email:t,token:a}});case 3:return c=e.sent,e.abrupt("return",c);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n,a){return e.apply(this,arguments)}}(),N=function(){var e=Object(o.a)(i.a.mark((function e(t,n,a){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.delete("".concat(b,"/user/delete-account"),{params:{id:n,email:t,token:a}});case 3:return c=e.sent,e.abrupt("return",c);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n,a){return e.apply(this,arguments)}}(),g=function(){var e=Object(o.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.post("".concat(b,"/user/new-tag"),t);case 3:return n=e.sent,e.abrupt("return",n);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(o.a)(i.a.mark((function e(t,n,a){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.delete("".concat(b,"/user/delete-tag"),{params:{id:n,email:t,token:a}});case 3:return c=e.sent,e.abrupt("return",c);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n,a){return e.apply(this,arguments)}}(),E=function(){var e=Object(o.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.post("".concat(b,"/user/update-transaction"),t);case 3:return n=e.sent,e.abrupt("return",n);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),T=n(15),C=n(9),I=n(4),R=function(e){return{type:"SIGN_IN",payload:e}},w=function(e){return{type:"PUT_POST",payload:e}},y=function(e){return{type:"PUT_NOTIFICATION",payload:e}},_=n(44),k=n.n(_),D=(n(79),n(0)),A=function(e){var t=e.tag,n=e.handleRemoveTag,c=Object(a.useState)(null),r=Object(u.a)(c,2),s=r[0],i=r[1];return Object(a.useEffect)((function(){i(t)}),[]),Object(D.jsx)(D.Fragment,{children:Object(D.jsxs)("div",{className:"mainTag",children:[Object(D.jsx)("span",{children:t.titulo}),Object(D.jsx)(k.a,{onClick:function(){n(s)},className:"tagIcon",style:{cursor:"pointer",fontSize:15,color:"#000"}})]})})},M=(n(82),function(e){var t=e.handleNewItem,n=e.accountId,c=Object(a.useState)({id:0,title:"",description:"",model:"Manual",type:"Entrada",value:0,date:null,tags:[]}),r=Object(u.a)(c,2),s=r[0],l=r[1],d=Object(a.useState)([]),p=Object(u.a)(d,2),O=p[0],b=p[1],m=Object(I.c)((function(e){return e.user})),h=Object(I.b)(),x=function(){var e=Object(o.a)(i.a.mark((function e(a){var c,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),(c=s).tags=O,e.next=5,f({data:{account:{id:n},transaction:c,user:m,token:localStorage.getItem("authToken")}});case 5:r=e.sent;try{void 0!==r.data.account?(h(y("NEW_TRANSACTION_SUCCESS")),t(r.data.account)):h(y("NEW_TRANSACTION_ERROR"))}catch(i){h(y("SERVER_ERROR"))}case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(e){b(O.filter((function(t){return t!==e})))},N=function(e){if("data"===e.target.id){var t=new Date(e.target.value).toISOString().slice(0,19).replace("T"," ");l(Object(C.a)(Object(C.a)({},s),{},Object(T.a)({},e.target.id,new Date(t.getTime()+6e4*t.getTimezoneOffset()))))}else l(Object(C.a)(Object(C.a)({},s),{},Object(T.a)({},e.target.id,e.target.value)))};return Object(D.jsxs)("div",{className:"mainNewItem",children:[Object(D.jsx)("span",{children:"Nova transa\xe7\xe3o:"}),Object(D.jsx)("form",{onSubmit:x,children:Object(D.jsxs)("div",{className:"mainNewItemContents",children:[Object(D.jsxs)("div",{className:"mainNewItemSection",children:[Object(D.jsxs)("div",{className:"mainNewItemSectionItem",children:[Object(D.jsx)("span",{children:"Titulo:"}),Object(D.jsx)("input",{id:"title",onChange:N,type:"text",required:!0})]}),Object(D.jsxs)("div",{className:"mainNewItemSectionItem",children:[Object(D.jsx)("span",{children:"Descri\xe7\xe3o:"}),Object(D.jsx)("input",{id:"description",onChange:N,type:"text",required:!0})]})]}),Object(D.jsx)("div",{className:"mainNewItemSection",children:Object(D.jsxs)("div",{className:"mainNewItemsTagDiv",children:[O.map((function(e){return Object(D.jsx)(A,{handleRemoveTag:v,tag:e},e.id)})),Object(D.jsx)("input",{placeholder:"Ex: comida",onKeyDown:function(e){!function(e){"Tab"!==e.key&&"Enter"!==e.key||(e.preventDefault(),""!==e.target.value&&(b([].concat(Object(j.a)(O),[{titulo:e.target.value.toLowerCase()}])),e.target.value=""))}(e)},className:"mainNewItemsTagInput"})]})}),Object(D.jsxs)("div",{className:"mainNewItemSection",children:[Object(D.jsxs)("div",{className:"mainNewItemSectionItem",children:[Object(D.jsx)("span",{children:"Modalidade:"}),Object(D.jsxs)("select",{id:"model",onChange:N,name:"modalide",children:[Object(D.jsx)("option",{value:"Manual",children:"Manual"}),Object(D.jsx)("option",{value:"Recorrente",children:"Recorrente"})]})]}),Object(D.jsxs)("div",{className:"mainNewItemSectionItem",children:[Object(D.jsx)("span",{children:"Tipo:"}),Object(D.jsxs)("select",{id:"type",onChange:N,name:"tipo",children:[Object(D.jsx)("option",{value:"Entrada",children:"Entrada"}),Object(D.jsx)("option",{value:"Saida",children:"Saida"})]})]}),Object(D.jsxs)("div",{className:"mainNewItemSectionItem",children:[Object(D.jsx)("span",{children:"Valor:"}),Object(D.jsx)("input",{id:"value",onChange:N,min:0,step:"0.01",type:"number",required:!0})]}),Object(D.jsxs)("div",{className:"mainNewItemSectionItem",children:[Object(D.jsx)("span",{children:"Data:"}),Object(D.jsx)("input",{id:"date",onChange:N,type:"date",required:!0})]}),Object(D.jsxs)("div",{className:"mainNewItemSectionItem",children:[Object(D.jsx)("span",{}),Object(D.jsx)("button",{type:"submit",className:"mainNewItemSectionItemConfirm",children:"Confirmar"})]})]})]})})]})}),U=n(45),L=n.n(U),V=n(46),F=n.n(V),q=n(28),P=(n(83),function(e){var t=e.item,n=e.setItems,a=e.handleUpdate,c=e.handleDelete,r=Object(I.b)();return Object(D.jsxs)("tr",{className:t.tipo,children:[Object(D.jsx)("td",{children:t.id}),Object(D.jsx)("td",{children:t.titulo}),Object(D.jsx)("td",{children:t.descricao}),Object(D.jsx)("td",{children:t.modalidade}),Object(D.jsx)("td",{children:t.tipo}),Object(D.jsxs)("td",{children:["R$",t.valor]}),Object(D.jsx)("td",{children:function(e){var t=new Date(e),n=""+(t.getMonth()+1),a=""+t.getDate(),c=t.getFullYear();return n.length<2&&(n="0"+n),a.length<2&&(a="0"+a),[a,n,c].join("-")}(t.dataMomento)}),Object(D.jsxs)("td",{children:[Object(D.jsx)(L.a,{onClick:function(){r(w({id:"EDIT_TRAN",props:{item:t,setItems:n,handleUpdate:a}}))},className:"cursor"}),Object(D.jsx)(F.a,{onClick:function(){c(t.id)},className:"cursor"})]})]})}),B=function(e){var t=e.items,n=e.handleDelete,c=e.handleUpdate,r=Object(a.useState)([]),s=Object(u.a)(r,2),i=s[0],o=s[1];return Object(a.useEffect)((function(){t.map((function(e,n){var a=new Date(e.dataMomento);return t[n].dataMomento=a})),o(t.sort((function(e,t){return t.dataMomento-e.dataMomento})))}),[t]),Object(D.jsx)("div",{className:"mainItemsTable",children:Object(D.jsx)("div",{className:"mainItemsTableContents",children:Object(D.jsx)("table",{children:Object(D.jsxs)("tbody",{children:[Object(D.jsxs)("tr",{children:[Object(D.jsx)("th",{children:"Numero"}),Object(D.jsx)("th",{children:"Titulo"}),Object(D.jsx)("th",{children:"Descri\xe7\xe3o"}),Object(D.jsx)("th",{children:"Modalidade"}),Object(D.jsx)("th",{children:"Tipo"}),Object(D.jsx)("th",{children:"Valor"}),Object(D.jsx)("th",{children:"Data"}),Object(D.jsx)("th",{children:"Edi\xe7\xe3o"})]},Object(q.a)()),i.map((function(e){return Object(D.jsx)(P,{item:e,items:t,handleUpdate:c,handleDelete:n},Object(q.a)())}))]})})})})},G=(n(84),function(e){var t=Object(I.c)((function(e){return e.user})),n=Object(a.useState)([]),c=Object(u.a)(n,2),r=c[0],s=c[1],l=Object(d.g)(),p=Object(I.b)(),O=function(){var e=Object(o.a)(i.a.mark((function e(n){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(t.email,n,localStorage.getItem("authToken"));case 2:a=e.sent;try{"Delete feito com sucesso!"===a.data.message?(p(y("DELETE_TRANSACTION_SUCCESS")),s(r.filter((function(e){return e.id!==n})))):p(y("DELETE_TRANSACTION_ERROR"))}catch(c){p(y("SERVER_ERROR"))}case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){var n=function(){var n=Object(o.a)(i.a.mark((function n(){var a;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,x(t.email,e.location.state.id,localStorage.getItem("authToken"));case 2:(a=n.sent)&&s(a.data.transactions);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();void 0===e.location.state?l.push("/"):n()}),[]),void 0===e.location.state?Object(D.jsx)(D.Fragment,{}):Object(D.jsx)("div",{className:"mainDashboard",children:Object(D.jsxs)("div",{className:"mainDashboardContents",children:[Object(D.jsxs)("h1",{children:["Conta: ",e.location.state.nome]}),Object(D.jsxs)("small",{children:["Descri\xe7\xe3o: ",e.location.state.descricao]}),Object(D.jsx)(M,{accountId:e.location.state.id,handleNewItem:function(e){s([].concat(Object(j.a)(r),[e]))}}),Object(D.jsx)(B,{handleUpdate:function(e){s(r.map((function(t){if(t.id!==e.id)return t;for(var n=0,a=Object.entries(e);n<a.length;n++){var c=Object(u.a)(a[n],1)[0];t[c]=e[c]}return t})))},handleDelete:O,items:r})]})})}),W="http://192.168.0.30:3100",H=function(){var e=Object(o.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.post("".concat(W,"/user/login"),t);case 3:return n=e.sent,e.abrupt("return",n);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=Object(o.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.post("".concat(W,"/user/register"),t);case 3:return n=e.sent,e.abrupt("return",n);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),X=function(){var e=Object(o.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.post("".concat(W,"/user/verify"),t);case 3:return n=e.sent,e.abrupt("return",n);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),J=(n(87),function(e){var t=e.handleChange,n=e.changeScreen;return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)("h3",{children:"Entre na sua conta"}),Object(D.jsxs)("div",{className:"formLoginDiv",children:[Object(D.jsxs)("div",{className:"formLoginDivInput",children:[Object(D.jsx)("span",{children:"email"}),Object(D.jsx)("input",{id:"email",onChange:t,type:"text",required:!0})]}),Object(D.jsxs)("div",{className:"formLoginDivInput",children:[Object(D.jsx)("span",{children:"Senha"}),Object(D.jsx)("input",{id:"senha",onChange:t,type:"password",required:!0})]}),Object(D.jsxs)("div",{className:"formLoginDivForgot",children:[Object(D.jsx)("small",{}),Object(D.jsx)("small",{onClick:function(){n(!1)},children:"Criar uma conta!"})]}),Object(D.jsx)("div",{className:"formLoginDivButton",children:Object(D.jsx)("button",{type:"submit",children:"Log in"})})]})]})}),Y=function(e){var t=e.handleChange,n=e.changeScreen;return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)("h3",{children:"Crie uma conta"}),Object(D.jsxs)("div",{className:"formLoginDiv",children:[Object(D.jsxs)("div",{className:"formLoginDivInput",children:[Object(D.jsx)("span",{children:"Nome completo"}),Object(D.jsx)("input",{id:"nome",onChange:t,type:"text",required:!0})]}),Object(D.jsxs)("div",{className:"formLoginDivInput",children:[Object(D.jsx)("span",{children:"Email"}),Object(D.jsx)("input",{id:"email",onChange:t,type:"email",required:!0})]}),Object(D.jsxs)("div",{className:"formLoginDivInput",children:[Object(D.jsx)("span",{children:"Senha"}),Object(D.jsx)("input",{id:"senha",onChange:t,type:"password",required:!0})]}),Object(D.jsxs)("div",{className:"formLoginDivInput",children:[Object(D.jsx)("span",{children:"Confirme a senha"}),Object(D.jsx)("input",{id:"senhaDenovo",onChange:t,type:"password",required:!0})]}),Object(D.jsxs)("div",{className:"formLoginDivForgot",children:[Object(D.jsx)("small",{}),Object(D.jsx)("small",{onClick:function(){n(!0)},children:"Faca login!"})]}),Object(D.jsx)("div",{className:"formLoginDivButton",children:Object(D.jsx)("button",{type:"submit",children:"Register"})})]})]})};function K(){var e=Object(a.useState)(!0),t=Object(u.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)({email:"",senha:"",senhaDenovo:"",nome:""}),s=Object(u.a)(r,2),l=s[0],j=s[1],p=Object(I.b)(),O=Object(d.g)(),b=function(){var e=Object(o.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!n){e.next=7;break}return e.next=4,H({data:{email:l.email,senha:l.senha}});case 4:a=e.sent,e.next=10;break;case 7:return e.next=9,z({data:{nome:l.nome,email:l.email,senha:l.senha}});case 9:a=e.sent;case 10:try{a.data.token?(p(R(a.data.user)),p(y("LOGIN_SUCCESS")),localStorage.setItem("authToken",a.data.token),O.push("/")):p(y("LOGIN_ERROR"))}catch(t){window.alert(a),p(y("SERVER_ERROR"))}case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(e){j(Object(C.a)(Object(C.a)({},l),{},Object(T.a)({},e.target.id,e.target.value)))};return Object(D.jsx)(D.Fragment,{children:Object(D.jsx)("div",{className:"mainLogin",children:Object(D.jsx)("form",{onSubmit:b,className:"formLogin",children:n?Object(D.jsx)(J,{handleChange:m,changeScreen:c}):Object(D.jsx)(Y,{handleChange:m,changeScreen:c})})})})}var $=n(47),Q=n.n($),Z=(n(88),function(e){var t=e.conta,n=e.handleDelete,c=Object(a.useRef)(null);return Object(D.jsxs)("div",{onContextMenu:function(e){!function(e){e.preventDefault(),c.current.style.transform?c.current.style="":c.current.style.transform="translateY(-35px)";try{setTimeout((function(){null!==c.current&&(c.current.style="")}),5e3)}catch(t){}}(e)},className:"mainHomeContentsItems",children:[Object(D.jsx)("div",{className:"mainHomeContentsBoxButton",children:Object(D.jsx)("button",{onClick:function(){n(t.id)},children:"Deletar"})}),Object(D.jsx)(l.b,{style:{color:"#000"},to:{pathname:"/dashboard",state:t},children:Object(D.jsxs)("div",{ref:c,className:"mainHomeContentsBox",children:[Object(D.jsx)("h4",{children:t.nome}),Object(D.jsx)("small",{children:t.descricao}),Object(D.jsx)("span",{children:t.id})]})})]})}),ee=function(e){var t=e.handleUpdate,n=Object(I.b)();return Object(D.jsx)("div",{onClick:function(){n(w({id:"NEW_POST",props:{handleUpdate:t}}))},className:"mainHomeContentsItems",children:Object(D.jsxs)("div",{className:"mainHomeContentsBox",children:[Object(D.jsx)(Q.a,{style:{fontSize:45}}),Object(D.jsx)("h4",{children:"Nova conta"})]})})},te=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],r=Object(I.c)((function(e){return e.user})),s=Object(I.b)(),l=function(){var e=Object(o.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N(r.email,t,localStorage.getItem("authToken"));case 2:a=e.sent;try{"Delete feito com sucesso!"===a.data.message?(s(y("DELETE_ACCOUNT_SUCCESS")),c(n.filter((function(e){return e.id!==t})))):s(y("DELETE_ACCOUNT_ERROR"))}catch(i){s(y("SERVER_ERROR"))}case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(r.email,localStorage.getItem("authToken"));case 2:t=e.sent;try{c(t.data.accounts)}catch(n){s(y("SERVER_ERROR"))}case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){d()}),[]),Object(D.jsx)("div",{className:"mainHome",children:Object(D.jsxs)("div",{className:"mainHomeContents",children:[Object(D.jsx)("h3",{children:"Suas contas:"}),Object(D.jsxs)("div",{className:"mainHomeContentsItemsBox",children:[n.map((function(e,t){return Object(D.jsx)(Z,{handleDelete:l,conta:e},t)})),Object(D.jsx)(ee,{handleUpdate:function(e){c([].concat(Object(j.a)(n),[e]))}})]})]})})},ne=(n(89),function(){var e=Object(I.c)((function(e){return e.user})),t=Object(a.useState)(null),n=Object(u.a)(t,2),c=n[0],r=n[1],s=Object(I.b)(),i=Object(d.g)();Object(a.useEffect)((function(){r(e)}),[e]);return Object(D.jsx)("div",{className:"mainNavbar",children:Object(D.jsxs)("div",{className:"mainNavbarContents",children:[Object(D.jsx)("h2",{onClick:function(){i.push("/")},children:"Gerenciador de caixa"}),c?Object(D.jsx)("span",{onClick:function(){s({type:"SIGN_OUT"}),s(y("SIGN_OUT")),i.push("/login"),localStorage.removeItem("authToken")},children:"Sair"}):null]})})}),ae=n(31),ce=n.n(ae),re=(n(90),function(e){var t=e.props,n=Object(a.useState)({title:"",description:""}),c=Object(u.a)(n,2),r=c[0],s=c[1],l=Object(I.c)((function(e){return e.user})),d=Object(I.b)(),j=function(){d({type:"REMOVE_POST"})},p=function(e){s(Object(C.a)(Object(C.a)({},r),{},Object(T.a)({},e.target.id,e.target.value)))},O=function(){var e=Object(o.a)(i.a.mark((function e(n){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,m(l,r,localStorage.getItem("authToken"));case 3:void 0!==(a=e.sent).data.account?(t.handleUpdate(a.data.account),j(),d(y("NEW_ACCOUNT_SUCCESS"))):d(y("NEW_ACCOUNT_ERROR"));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(D.jsxs)("div",{className:"mainModalNewAccount",children:[Object(D.jsx)(ce.a,{onClick:function(){j()},style:{fontSize:50},className:"closeIcon"}),Object(D.jsx)("form",{onSubmit:O,className:"mainModalNewAccountBox",children:Object(D.jsxs)("div",{className:"mainModalNewAccountContents",children:[Object(D.jsx)("h2",{children:"Nova conta:"}),Object(D.jsxs)("div",{className:"mainModalNewAccountContentsInput",children:[Object(D.jsx)("span",{children:"Titulo"}),Object(D.jsx)("input",{onChange:function(e){p(e)},id:"title",type:"text",required:!0})]}),Object(D.jsxs)("div",{className:"mainModalNewAccountContentsInput",children:[Object(D.jsx)("span",{children:"Descricao"}),Object(D.jsx)("input",{onChange:function(e){p(e)},id:"description",type:"text",required:!0})]}),Object(D.jsx)("div",{className:"mainModalNewAccountContentsButton",children:Object(D.jsx)("button",{type:"submit",children:"Criar"})})]})})]})}),se=(n(91),function(e){var t=e.props,n=Object(a.useState)({id:t.item.id,titulo:t.item.titulo,descricao:t.item.descricao,modalidade:t.item.modalidade,tipo:t.item.tipo,valor:t.item.valor}),c=Object(u.a)(n,2),r=c[0],s=c[1],l=Object(a.useState)([]),d=Object(u.a)(l,2),p=d[0],O=d[1],b=Object(I.c)((function(e){return e.user})),m=Object(I.b)(),h=function(e){s(Object(C.a)(Object(C.a)({},r),{},Object(T.a)({},e.target.id,e.target.value)))},f=function(e){(function(){var t=Object(o.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S(b.email,e.id,localStorage.getItem("authToken"));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()().then((function(e){try{null!==e.data.tag&&O(p.filter((function(t){return t.id!=e.data.tag.id})))}catch(t){m(y("SERVER_ERROR"))}}))},x=function(){var e=Object(o.a)(i.a.mark((function e(n){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,E({data:{transaction:r,user:b,token:localStorage.getItem("authToken")}});case 3:a=e.sent;try{"Update feito com sucesso!"===a.data.message?(t.handleUpdate(r),m(y("EDIT_TRANSACTION_SUCCESS")),m({type:"REMOVE_POST"})):m(y("EDIT_TRANSACTION_ERROR"))}catch(c){m(y("SERVER_ERROR"))}case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){O(t.item.tags)}),[]),Object(D.jsxs)("div",{className:"mainModalEditTransaction",children:[Object(D.jsx)(ce.a,{onClick:function(){m({type:"REMOVE_POST"})},style:{fontSize:50},className:"closeIcon"}),Object(D.jsx)("form",{onSubmit:x,className:"mainModalEditTransactionBox",children:Object(D.jsxs)("div",{className:"mainModalEditTransactionContents",children:[Object(D.jsxs)("span",{children:["Editar transa\xe7\xe3o #",t.item.id]}),Object(D.jsxs)("div",{className:"mainModalEditTransactionSection",children:[Object(D.jsxs)("div",{className:"mainModalEditTransactionSectionItem",children:[Object(D.jsx)("span",{children:"Titulo:"}),Object(D.jsx)("input",{onChange:function(e){h(e)},defaultValue:t.item.titulo,id:"titulo",type:"text",required:!0})]}),Object(D.jsxs)("div",{className:"mainModalEditTransactionSectionItem",children:[Object(D.jsx)("span",{children:"Descri\xe7\xe3o:"}),Object(D.jsx)("input",{onChange:function(e){h(e)},defaultValue:t.item.descricao,id:"descricao",type:"text",required:!0})]})]}),Object(D.jsx)("div",{className:"mainModalEditTransactionSection",children:Object(D.jsxs)("div",{className:"mainNewItemsTagDiv",children:[p.map((function(e){return Object(D.jsx)(A,{handleRemoveTag:f,tag:e},e.id)})),Object(D.jsx)("input",{placeholder:"Ex: comida",onKeyDown:function(e){!function(e){"Tab"!==e.key&&"Enter"!==e.key||(e.preventDefault(),""!==e.target.value&&(function(){var n=Object(o.a)(i.a.mark((function n(){return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,g({data:{tag:{titulo:e.target.value.toLowerCase()},user:b,transaction:t.item,token:localStorage.getItem("authToken")}});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()().then((function(e){O([].concat(Object(j.a)(p),[e.data.tag]))})),e.target.value=""))}(e)},className:"mainNewItemsTagInput"})]})}),Object(D.jsxs)("div",{className:"mainModalEditTransactionSection",children:[Object(D.jsxs)("div",{className:"mainModalEditTransactionSectionItem",children:[Object(D.jsx)("span",{children:"Modalidade:"}),Object(D.jsxs)("select",{onChange:function(e){h(e)},defaultValue:t.item.modalidade,id:"modalidade",name:"modalide",children:[Object(D.jsx)("option",{value:"Manual",children:"Manual"}),Object(D.jsx)("option",{value:"Recorrente",children:"Recorrente"})]})]}),Object(D.jsxs)("div",{className:"mainModalEditTransactionSectionItem",children:[Object(D.jsx)("span",{children:"Tipo:"}),Object(D.jsxs)("select",{onChange:function(e){h(e)},defaultValue:t.item.tipo,id:"tipo",name:"tipo",children:[Object(D.jsx)("option",{value:"Entrada",children:"Entrada"}),Object(D.jsx)("option",{value:"Saida",children:"Saida"})]})]}),Object(D.jsxs)("div",{className:"mainModalEditTransactionSectionItem",children:[Object(D.jsx)("span",{children:"Valor:"}),Object(D.jsx)("input",{onChange:function(e){h(e)},defaultValue:t.item.valor,id:"valor",min:0,step:"0.01",type:"number",required:!0})]}),Object(D.jsxs)("div",{className:"mainModalEditTransactionSectionItem",children:[Object(D.jsx)("span",{children:"Data:"}),Object(D.jsx)("input",{onChange:function(){},style:{cursor:"not-allowed"},onClick:function(e){e.preventDefault()},value:function(e){var t=new Date(e),n=""+(t.getMonth()+1),a=""+t.getDate(),c=t.getFullYear();return n.length<2&&(n="0"+n),a.length<2&&(a="0"+a),[c,n,a].join("-")}(t.item.dataMomento),id:"data",type:"date",required:!0})]}),Object(D.jsxs)("div",{className:"mainModalEditTransactionSectionItem",children:[Object(D.jsx)("span",{}),Object(D.jsx)("button",{className:"mainModalEditTransactionConfirm",children:"Confirmar"})]})]})]})})]})}),ie=(n(92),function(e){var t=e.component,n={NEW_POST:Object(D.jsx)(re,{props:t.props}),EDIT_TRAN:Object(D.jsx)(se,{props:t.props})};return Object(D.jsx)(D.Fragment,{children:n[t.id]})}),oe=n(48),ue=n.n(oe),le=(n(93),function(e){var t=e.props,n=e.id,a=Object(I.b)(),c=function(){a(function(e){return{type:"REMOVE_NOTIFICATION",payload:e}}({id:n}))};return Object(D.jsxs)("div",{onClick:c,onAnimationEnd:c,className:"mainNotification ".concat(t.status),children:[Object(D.jsx)(ue.a,{style:{fontSize:30}}),Object(D.jsxs)("div",{className:"mainNotificationContent",children:[Object(D.jsx)("strong",{children:t.title}),Object(D.jsx)("span",{children:t.description})]}),Object(D.jsx)("span",{className:"mainNotificationLoader"})]})}),de=n(50),je=function(e){var t=e.component,n=Object(de.a)(e,["component"]),c=Object(I.c)((function(e){return e.user})),r=Object(a.useState)(!1),s=Object(u.a)(r,2),i=s[0],o=s[1];return Object(a.useEffect)((function(){o(c)}),[]),!1===i?Object(D.jsx)(D.Fragment,{}):Object(D.jsx)(d.b,Object(C.a)(Object(C.a)({},n),{},{render:function(e){return i?Object(D.jsx)(t,Object(C.a)({},e)):Object(D.jsx)(d.a,{to:{pathname:"/login",state:{path:n.path}}})}}))};n(94);var pe=function(){var e=Object(I.c)((function(e){return e.post})),t=Object(I.c)((function(e){return e.user})),n=Object(I.c)((function(e){return e.notifications})),c=Object(a.useState)(!1),r=Object(u.a)(c,2),s=r[0],j=r[1],p=Object(I.b)();return Object(a.useEffect)((function(){var e=function(){var e=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X({data:{token:localStorage.getItem("authToken")}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(function(){var n=Object(o.a)(i.a.mark((function n(){return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(null===localStorage.getItem("authToken")){n.next=8;break}return n.prev=1,n.next=4,e().then((function(e){"Token verificado!"===e.data.message?p(R(e.data.user)):localStorage.removeItem("authToken")}));case 4:n.next=8;break;case 6:n.prev=6,n.t0=n.catch(1);case 8:j(t);case 9:case"end":return n.stop()}}),n,null,[[1,6]])})));return function(){return n.apply(this,arguments)}})()()}),[]),!1===s?Object(D.jsx)(D.Fragment,{}):Object(D.jsxs)("div",{className:"App",children:[Object(D.jsx)("div",{className:"AppNotifications",children:n.map((function(e){return Object(D.jsx)(le,{id:e.id,props:e.props},e.id)}))}),Object(D.jsxs)(l.a,{children:[Object(D.jsx)(ne,{}),Object(D.jsxs)(d.d,{children:[Object(D.jsx)(je,{path:"/dashboard",exact:!0,component:G}),Object(D.jsx)(je,{path:"/",exact:!0,component:te}),Object(D.jsx)(d.b,{path:"/login",exact:!0,component:K})]})]}),e?Object(D.jsx)(ie,{component:e}):null]})},Oe=n(32),be=n(49),me=Object(Oe.a)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_OUT":return null;case"SIGN_IN":return t.payload;default:return e}},post:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PUT_POST":return t.payload;case"REMOVE_POST":return null;default:return e}},notifications:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PUT_NOTIFICATION":return[].concat(Object(j.a)(e),[{props:be[t.payload],id:Object(q.a)()}]);case"REMOVE_NOTIFICATION":return e.filter((function(e){return e.id!==t.payload.id}));default:return e}}}),he=Object(Oe.b)(me,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());r.a.render(Object(D.jsx)(I.a,{store:he,children:Object(D.jsx)(pe,{})}),document.getElementById("root"))}},[[96,1,2]]]);
//# sourceMappingURL=main.17747374.chunk.js.map