(this["webpackJsonpgerenciador-de-caixa"]=this["webpackJsonpgerenciador-de-caixa"]||[]).push([[0],{100:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(27),r=n.n(c),s=(n(59),n(3)),i=n.n(s),o=n(5),u=n(6),l=n(23),d=n(8),j=n(7),p=n(21),b=n(11),m=n.n(b),O="http://192.168.0.31:3100",h=function(){var e=Object(o.a)(i.a.mark((function e(t,n,a){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.post("".concat(O,"/user/new-account"),{data:{user:t,account:n}},{headers:{Authorization:"Bearer ".concat(a)}});case 3:return c=e.sent,e.abrupt("return",c);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n,a){return e.apply(this,arguments)}}(),f=function(){var e=Object(o.a)(i.a.mark((function e(t,n){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.get("".concat(O,"/user/get-accounts"),{params:{email:t},headers:{Authorization:"Bearer ".concat(n)}});case 3:return a=e.sent,e.abrupt("return",a);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}(),x=function(){var e=Object(o.a)(i.a.mark((function e(t,n,a){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.get("".concat(O,"/user/get-account"),{params:{email:t,id:a},headers:{Authorization:"Bearer ".concat(n)}});case 3:return c=e.sent,e.abrupt("return",c);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n,a){return e.apply(this,arguments)}}(),v=function(){var e=Object(o.a)(i.a.mark((function e(t,n){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.get("".concat(O,"/user/get-accounts-details"),{params:{email:t},headers:{Authorization:"Bearer ".concat(n)}});case 3:return a=e.sent,e.abrupt("return",a);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}(),g=function(){var e=Object(o.a)(i.a.mark((function e(t,n,a,c){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.post("".concat(O,"/user/new-transaction"),{data:{account:{id:t},transaction:n,user:a}},{headers:{Authorization:"Bearer ".concat(c)}});case 3:return r=e.sent,e.abrupt("return",r);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n,a,c){return e.apply(this,arguments)}}(),N=function(){var e=Object(o.a)(i.a.mark((function e(t,n,a,c){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.get("".concat(O,"/user/get-transactions"),{params:{account_id:a,email:t,pagination:n},headers:{Authorization:"Bearer ".concat(c)}});case 3:return r=e.sent,e.abrupt("return",r);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n,a,c){return e.apply(this,arguments)}}(),y=function(){var e=Object(o.a)(i.a.mark((function e(t,n,a){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.delete("".concat(O,"/user/delete-transaction"),{params:{id:n,email:t},headers:{Authorization:"Bearer ".concat(a)}});case 3:return c=e.sent,e.abrupt("return",c);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n,a){return e.apply(this,arguments)}}(),S=function(){var e=Object(o.a)(i.a.mark((function e(t,n,a){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.delete("".concat(O,"/user/delete-account"),{params:{id:n,email:t},headers:{Authorization:"Bearer ".concat(a)}});case 3:return c=e.sent,e.abrupt("return",c);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n,a){return e.apply(this,arguments)}}(),T=function(){var e=Object(o.a)(i.a.mark((function e(t,n,a,c){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.post("".concat(O,"/user/new-tag"),{data:{user:n,tag:{title:t},transaction:a}},{headers:{Authorization:"Bearer ".concat(c)}});case 3:return r=e.sent,e.abrupt("return",r);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n,a,c){return e.apply(this,arguments)}}(),w=function(){var e=Object(o.a)(i.a.mark((function e(t,n,a){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.delete("".concat(O,"/user/delete-tag"),{params:{id:n,email:t},headers:{Authorization:"Bearer ".concat(a)}});case 3:return c=e.sent,e.abrupt("return",c);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n,a){return e.apply(this,arguments)}}(),I=function(){var e=Object(o.a)(i.a.mark((function e(t,n,a){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.post("".concat(O,"/user/update-transaction"),{data:{transaction:t,user:n}},{headers:{Authorization:"Bearer ".concat(a)}});case 3:return c=e.sent,e.abrupt("return",c);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n,a){return e.apply(this,arguments)}}(),C=n(4),E=n(26),k=function(e){return{type:"SIGN_IN",payload:e}},D=function(e){return{type:"PUT_POST",payload:e}},_=function(e){return{type:"PUT_NOTIFICATION",payload:e}},M=function(e){return{type:"PUT_CONTEXT",payload:e}},A=n(15),L=n(44),R=n.n(L),F=(n(82),n(0)),U=function(e){var t=e.tag,n=e.handleRemoveTag,c=Object(a.useState)(null),r=Object(u.a)(c,2),s=r[0],i=r[1];return Object(a.useEffect)((function(){i(t)}),[]),Object(F.jsx)(F.Fragment,{children:Object(F.jsxs)("div",{className:"mainTag",children:[Object(F.jsx)("span",{children:t.title}),Object(F.jsx)(R.a,{onClick:function(){n(s)},className:"tagIcon",style:{cursor:"pointer",fontSize:15,color:"#000"}})]})})},V=(n(85),function(e){var t=e.handleNewItem,n=e.account_id,c=Object(a.useState)({id:0,title:"",description:"",modality:"Manual",type:"Entrada",value:0,date:null,tags:[]}),r=Object(u.a)(c,2),s=r[0],l=r[1],d=Object(a.useState)([]),b=Object(u.a)(d,2),m=b[0],O=b[1],h=Object(C.c)((function(e){return e.user})),f=Object(C.b)(),x=function(){var e=Object(o.a)(i.a.mark((function e(a){var c,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),(c=s).tags=m,e.next=5,g(n,c,h,localStorage.getItem("authToken"));case 5:r=e.sent;try{void 0!==r.data.account?(f(_(r.data.status)),t(r.data.account)):f(_(r.data.status))}catch(i){f(_(r.data.status))}case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(e){O(m.filter((function(t){return t!==e})))},N=function(e){if("data"===e.target.id){var t=new Date(e.target.value).toISOString().slice(0,19).replace("T"," ");l(Object(j.a)(Object(j.a)({},s),{},Object(A.a)({},e.target.id,new Date(t.getTime()+6e4*t.getTimezoneOffset()))))}else l(Object(j.a)(Object(j.a)({},s),{},Object(A.a)({},e.target.id,e.target.value)))};return Object(F.jsxs)("div",{className:"mainNewItem",children:[Object(F.jsx)("span",{children:"Nova transa\xe7\xe3o:"}),Object(F.jsx)("form",{onSubmit:x,children:Object(F.jsxs)("div",{className:"mainNewItemContents",children:[Object(F.jsxs)("div",{className:"mainNewItemSection",children:[Object(F.jsxs)("div",{className:"mainNewItemSectionItem",children:[Object(F.jsx)("span",{children:"Titulo:"}),Object(F.jsx)("input",{id:"title",onChange:N,type:"text",required:!0})]}),Object(F.jsxs)("div",{className:"mainNewItemSectionItem",children:[Object(F.jsx)("span",{children:"Descri\xe7\xe3o:"}),Object(F.jsx)("input",{id:"description",onChange:N,type:"text",required:!0})]})]}),Object(F.jsx)("div",{className:"mainNewItemSection",children:Object(F.jsxs)("div",{className:"mainNewItemsTagDiv",children:[m.map((function(e){return Object(F.jsx)(U,{handleRemoveTag:v,tag:e},e.id)})),Object(F.jsx)("input",{placeholder:"Ex: comida",onKeyDown:function(e){!function(e){"Tab"!==e.key&&"Enter"!==e.key||(e.preventDefault(),""!==e.target.value&&(O([].concat(Object(p.a)(m),[{title:e.target.value.toLowerCase()}])),e.target.value=""))}(e)},className:"mainNewItemsTagInput"})]})}),Object(F.jsxs)("div",{className:"mainNewItemSection",children:[Object(F.jsxs)("div",{className:"mainNewItemSectionItem",children:[Object(F.jsx)("span",{children:"Modalidade:"}),Object(F.jsxs)("select",{id:"modality",onChange:N,name:"modalide",children:[Object(F.jsx)("option",{value:"Manual",children:"Manual"}),Object(F.jsx)("option",{value:"Recorrente",children:"Recorrente"})]})]}),Object(F.jsxs)("div",{className:"mainNewItemSectionItem",children:[Object(F.jsx)("span",{children:"Tipo:"}),Object(F.jsxs)("select",{id:"type",onChange:N,name:"tipo",children:[Object(F.jsx)("option",{value:"Entrada",children:"Entrada"}),Object(F.jsx)("option",{value:"Saida",children:"Saida"})]})]}),Object(F.jsxs)("div",{className:"mainNewItemSectionItem",children:[Object(F.jsx)("span",{children:"Valor:"}),Object(F.jsx)("input",{id:"value",onChange:N,min:0,step:"0.01",type:"number",required:!0})]}),Object(F.jsxs)("div",{className:"mainNewItemSectionItem",children:[Object(F.jsx)("span",{children:"Data:"}),Object(F.jsx)("input",{id:"date",onChange:N,type:"date",required:!0})]}),Object(F.jsxs)("div",{className:"mainNewItemSectionItem",children:[Object(F.jsx)("span",{}),Object(F.jsx)("button",{type:"submit",className:"mainNewItemSectionItemConfirm",children:"Confirmar"})]})]})]})})]})}),z=(n(86),function(e){var t=e.item,n=e.handleUpdate,a=e.handleDelete,c=Object(C.b)(),r=Object(C.c)((function(e){return e.context})),s=function(){c(D({id:"EDIT_TRAN",props:{item:t,handleUpdate:n}}))},i=function(){c(D({id:"CONFIRM_DELETE",props:{handleDelete:function(){a(t.id)}}}))};return Object(F.jsx)(F.Fragment,{children:void 0===t.special?Object(F.jsx)(F.Fragment,{children:Object(F.jsxs)("tr",{onContextMenu:function(e){e.preventDefault(),c(r?{type:"REMOVE_CONTEXT"}:M({options:[{title:"Editar",function:s},{title:"Deletar",function:i}],position:{x:e.pageX,y:e.pageY}}))},className:t.type,children:[Object(F.jsx)("td",{children:t.id}),Object(F.jsx)("td",{children:t.title}),Object(F.jsx)("td",{children:t.description}),Object(F.jsx)("td",{children:t.modality}),Object(F.jsx)("td",{children:t.type}),Object(F.jsxs)("td",{children:["R$",t.value]}),Object(F.jsx)("td",{children:function(e){var t=new Date(e),n=""+(t.getMonth()+1),a=""+t.getDate(),c=t.getFullYear();return n.length<2&&(n="0"+n),a.length<2&&(a="0"+a),[a,n,c].join("-")}(t.date)})]})}):Object(F.jsx)(F.Fragment,{children:Object(F.jsxs)("tr",{className:"trEspecial",children:[Object(F.jsx)("td",{children:"#"}),Object(F.jsx)("td",{children:"#"}),Object(F.jsx)("td",{children:"#"}),Object(F.jsx)("td",{children:"#"}),Object(F.jsx)("td",{children:"#"}),Object(F.jsx)("td",{children:"#"}),Object(F.jsx)("td",{children:["Janeiro","Fevereiro","Mar\xe7o","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"][t.special]})]})})})}),B=function(e){var t=e.pages,n=e.pagination,a=e.handlePagination,c=[];return function(){for(var e=function(e){c.push(Object(F.jsx)("span",{onClick:function(){a(e)},className:"".concat(n===e?"mainItemsTablePaginationActive":null),children:e}))},r=1;r<t+1;r++)e(r)}(),Object(F.jsx)(F.Fragment,{children:c})},P=function(e){var t=Object(C.c)((function(e){return e.user})),n=Object(a.useState)([]),c=Object(u.a)(n,2),r=c[0],s=c[1],l=Object(a.useState)([]),b=Object(u.a)(l,2),m=b[0],O=b[1],h=Object(a.useState)(0),f=Object(u.a)(h,2),v=f[0],g=f[1],S=Object(a.useState)(1),T=Object(u.a)(S,2),w=T[0],I=T[1],k=Object(d.g)(),D=Object(C.b)(),M=function(e){s(r.map((function(t){if(t.id!==e.id)return t;for(var n=0,a=Object.entries(e);n<a.length;n++){var c=Object(u.a)(a[n],1)[0];t[c]=e[c]}return t})))},A=function(){var e=Object(o.a)(i.a.mark((function e(n){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(t.email,n,localStorage.getItem("authToken"));case 2:a=e.sent;try{"DELETE_TRANSACTION_SUCCESS"===a.data.status.code?(D(_(a.data.status)),D({type:"REMOVE_POST"}),s(r.filter((function(e){return e.id!==n})))):D(_(a.data.status))}catch(c){}case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(){var n=Object(o.a)(i.a.mark((function n(a){var c;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a===w){n.next=9;break}return n.next=3,N(t.email,a,e.match.params.accountId,localStorage.getItem("authToken"));case 3:return(c=n.sent)&&(s(c.data.transactions),I(a)),n.next=7,x(t.email,localStorage.getItem("authToken"),e.match.params.accountId);case 7:(c=n.sent)&&(void 0!==c.data.accounts[0]?O(Object(j.a)(Object(j.a)({},c.data.accounts[0]),{},{total_transactions:c.data.accounts[0].total_transactions/25})):k.push("/"));case 9:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(a.useEffect)((function(){var n=function(){var n=Object(o.a)(i.a.mark((function n(a){var c;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,N(t.email,a,e.match.params.accountId,localStorage.getItem("authToken"));case 2:(c=n.sent)&&s(c.data.transactions);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),a=function(){var n=Object(o.a)(i.a.mark((function n(){var a;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,x(t.email,localStorage.getItem("authToken"),e.match.params.accountId);case 2:(a=n.sent)&&(void 0!==a.data.accounts[0]?O(Object(j.a)(Object(j.a)({},a.data.accounts[0]),{},{total_transactions:a.data.accounts[0].total_transactions/25})):k.push("/"));case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();void 0===e.match.params.accountId?k.push("/"):(n(1),a())}),[]),Object(a.useEffect)((function(){var e=0;r.map((function(t,n){"Saida"===t.type?e-=t.value:e+=t.value;var a=new Date(t.date);return r[n].date=a})),g(e),s(r.sort((function(e,t){return t.date-e.date})))}),[r]),Object(F.jsx)("div",{className:"mainDashboard",children:Object(F.jsxs)("div",{className:"mainDashboardContents",children:[Object(F.jsxs)("div",{className:"mainDashboardContentsInfos",children:[Object(F.jsxs)("h1",{children:["Conta: ",m.title]}),Object(F.jsxs)("small",{children:["Descri\xe7\xe3o: ",m.description]}),Object(F.jsx)("button",{onClick:function(){k.push("/")},children:"Voltar"})]}),Object(F.jsx)(V,{account_id:m.id,handleNewItem:function(e){s([].concat(Object(p.a)(r),[e]))}}),Object(F.jsx)("div",{className:"mainItemsTable",children:Object(F.jsxs)("div",{className:"mainItemsTableContents",children:[Object(F.jsx)("table",{children:Object(F.jsxs)("tbody",{children:[Object(F.jsxs)("tr",{children:[Object(F.jsx)("th",{children:"Numero"}),Object(F.jsx)("th",{children:"Titulo"}),Object(F.jsx)("th",{children:"Descri\xe7\xe3o"}),Object(F.jsx)("th",{children:"Modalidade"}),Object(F.jsx)("th",{children:"Tipo"}),Object(F.jsx)("th",{children:"Valor"}),Object(F.jsx)("th",{children:"Data"})]},Object(E.a)()),r.map((function(e,t){return Object(F.jsxs)(F.Fragment,{children:[function(){try{return 0!==t?r[t].date.getMonth()!==r[t-1].date.getMonth()?Object(F.jsx)(z,{item:{special:r[t].date.getMonth()},items:r,handleUpdate:function(){},handleDelete:function(){}},Object(E.a)()):null:Object(F.jsx)(z,{item:{special:r[t].date.getMonth()},items:r,handleUpdate:function(){},handleDelete:function(){}},Object(E.a)())}catch(e){}}(),Object(F.jsx)(z,{item:e,items:r,handleUpdate:M,handleDelete:A},Object(E.a)())]})}))]})}),Object(F.jsx)("div",{className:"mainItemsTableContentsFooter",children:Object(F.jsxs)("span",{children:["Total em caixa: R$",v.toFixed(2)]})})]})}),Object(F.jsx)("div",{className:"mainItemsTablePagination",children:Object(F.jsx)(B,{handlePagination:L,pagination:w,pages:m.total_transactions})})]})})},q="http://192.168.0.31:3100",H=function(){var e=Object(o.a)(i.a.mark((function e(t){var n,a,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.email,a=t.password,e.prev=1,e.next=4,m.a.post("".concat(q,"/user/login"),{data:{email:n,password:a}});case 4:return c=e.sent,e.abrupt("return",c);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),X=function(){var e=Object(o.a)(i.a.mark((function e(t){var n,a,c,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.email,a=t.password,c=t.name,e.prev=1,e.next=4,m.a.post("".concat(q,"/user/register"),{data:{email:n,password:a,name:c}});case 4:return r=e.sent,e.abrupt("return",r);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",null);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),G=function(){var e=Object(o.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.post("".concat(q,"/user/verify"),{},{headers:{Authorization:"Bearer ".concat(t)}});case 3:return n=e.sent,e.abrupt("return",n);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),J=(n(89),function(e){var t=e.handleChange,n=e.changeScreen;return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)("h3",{children:"Entre na sua conta"}),Object(F.jsxs)("div",{className:"formLoginDiv",children:[Object(F.jsxs)("div",{className:"formLoginDivInput",children:[Object(F.jsx)("span",{children:"email"}),Object(F.jsx)("input",{id:"email",onChange:t,type:"text",required:!0})]}),Object(F.jsxs)("div",{className:"formLoginDivInput",children:[Object(F.jsx)("span",{children:"Senha"}),Object(F.jsx)("input",{id:"password",onChange:t,type:"password",required:!0})]}),Object(F.jsxs)("div",{className:"formLoginDivForgot",children:[Object(F.jsx)("small",{}),Object(F.jsx)("small",{onClick:function(){n(!1)},children:"Criar uma conta!"})]}),Object(F.jsx)("div",{className:"formLoginDivButton",children:Object(F.jsx)("button",{type:"submit",children:"Log in"})})]})]})}),Y=function(e){var t=e.handleChange,n=e.changeScreen;return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)("h3",{children:"Crie uma conta"}),Object(F.jsxs)("div",{className:"formLoginDiv",children:[Object(F.jsxs)("div",{className:"formLoginDivInput",children:[Object(F.jsx)("span",{children:"Nome completo"}),Object(F.jsx)("input",{id:"name",onChange:t,type:"text",required:!0})]}),Object(F.jsxs)("div",{className:"formLoginDivInput",children:[Object(F.jsx)("span",{children:"Email"}),Object(F.jsx)("input",{id:"email",onChange:t,type:"email",required:!0})]}),Object(F.jsxs)("div",{className:"formLoginDivInput",children:[Object(F.jsx)("span",{children:"Senha"}),Object(F.jsx)("input",{id:"password",onChange:t,type:"password",required:!0})]}),Object(F.jsxs)("div",{className:"formLoginDivInput",children:[Object(F.jsx)("span",{children:"Confirme a senha"}),Object(F.jsx)("input",{id:"passwordAgain",onChange:t,type:"password",required:!0})]}),Object(F.jsxs)("div",{className:"formLoginDivForgot",children:[Object(F.jsx)("small",{}),Object(F.jsx)("small",{onClick:function(){n(!0)},children:"Faca login!"})]}),Object(F.jsx)("div",{className:"formLoginDivButton",children:Object(F.jsx)("button",{type:"submit",children:"Register"})})]})]})};function $(){var e=Object(a.useState)(!0),t=Object(u.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)({email:"",password:"",passwordAgain:"",name:""}),s=Object(u.a)(r,2),l=s[0],p=s[1],b=Object(C.b)(),m=Object(d.g)(),O=function(){var e=Object(o.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!n){e.next=7;break}return e.next=4,H(l);case 4:a=e.sent,e.next=10;break;case 7:return e.next=9,X(l);case 9:a=e.sent;case 10:try{a.data.token?(b(k(a.data.user)),b(_(a.data.status)),localStorage.setItem("authToken",a.data.token),m.push("/")):b(_(a.data.status))}catch(t){}case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(e){p(Object(j.a)(Object(j.a)({},l),{},Object(A.a)({},e.target.id,e.target.value)))};return Object(F.jsx)(F.Fragment,{children:Object(F.jsx)("div",{className:"mainLogin",children:Object(F.jsx)("form",{onSubmit:O,className:"formLogin",children:n?Object(F.jsx)(J,{handleChange:h,changeScreen:c}):Object(F.jsx)(Y,{handleChange:h,changeScreen:c})})})})}var K=n(46),W=n.n(K),Q=n(49),Z=n.n(Q),ee=n(50),te=n.n(ee),ne=n(51),ae=n.n(ne),ce=n(45),re=n.n(ce),se=n(47),ie=n.n(se),oe=n(48),ue=n.n(oe),le=(n(90),function(e){var t=e.account,n=e.handleDelete,a=Object(C.c)((function(e){return e.context})),c=Object(C.b)(),r=function(){c(D({id:"CONFIRM_DELETE",props:{handleDelete:function(){n(t.id)}}}))};return Object(F.jsxs)("div",{className:"mainHomeContentsAccountsItems",children:[Object(F.jsx)(l.b,{style:{textDecoration:"none",color:"#000",width:"100%",height:"100%"},to:{pathname:"/dashboard/".concat(t.id)},children:Object(F.jsxs)("div",{className:"mainHomeAccountsItemsInfos",children:[Object(F.jsx)("img",{alt:"money",src:"".concat("","/images/logo.png")}),Object(F.jsxs)("div",{className:"mainHomeAccountsItemsInfosText",children:[Object(F.jsx)("span",{children:t.title}),Object(F.jsx)("small",{children:t.description})]}),Object(F.jsxs)("strong",{children:["#",t.id]})]})}),Object(F.jsx)("div",{className:"mainHomeContentsAccountsItemsEditIcon",children:Object(F.jsx)(re.a,{onClick:function(e){e.preventDefault(),c(a?{type:"REMOVE_CONTEXT"}:M({options:[{title:"Editar",function:function(){}},{title:"Deletar",function:r}],position:{x:e.pageX,y:e.pageY}}))}})})]})}),de=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(null),s=Object(u.a)(r,2),l=s[0],d=s[1],j=Object(a.useState)(!0),b=Object(u.a)(j,2),m=b[0],O=b[1],h=Object(C.c)((function(e){return e.user})),x=Object(C.b)(),g=function(){var e=Object(o.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S(h.email,t,localStorage.getItem("authToken"));case 2:a=e.sent;try{"DELETE_ACCOUNT_SUCCESS"===a.data.status.code?(x(_(a.data.status)),x({type:"REMOVE_POST"}),y(),c(n.filter((function(e){return e.id!==t})))):x(_(a.data.status))}catch(r){}case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(h.email,localStorage.getItem("authToken"));case 2:t=e.sent;try{c(t.data.accounts)}catch(n){}case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(h.email,localStorage.getItem("authToken"));case 2:t=e.sent;try{d(t.data.accounts[0])}catch(n){}case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){N(),y()}),[]),Object(F.jsx)("div",{className:"mainHome",children:Object(F.jsxs)("div",{className:"mainHomeContents",children:[Object(F.jsxs)("div",{className:"mainHomeContentsLanding",children:[Object(F.jsxs)("div",{className:"mainHomeContentsLandingItem mainHomeLanding",children:[Object(F.jsx)("span",{children:"Bem vindo"}),Object(F.jsx)("img",{alt:"cartoon workers",src:"".concat("","/images/4457.jpg")})]}),Object(F.jsx)("div",{className:"mainHomeContentsLandingItem",children:Object(F.jsxs)("div",{className:"mainHomeLandingSub",children:[Object(F.jsx)(W.a,{style:{fontSize:40}}),Object(F.jsx)("span",{children:"Dinheiro total *"}),Object(F.jsxs)("strong",{onClick:function(){O(!m)},children:["R$",l?m?l.total_money.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,"):l.total_money.toFixed(2).replace(/\d/g,"*"):"?",m?Object(F.jsx)(ie.a,{}):Object(F.jsx)(ue.a,{})]})]})}),Object(F.jsx)("div",{className:"mainHomeContentsLandingItem",children:Object(F.jsxs)("div",{className:"mainHomeLandingSub",children:[Object(F.jsx)(Z.a,{style:{fontSize:40}}),Object(F.jsx)("span",{children:"Transa\xe7\xf5es totais *"}),Object(F.jsx)("strong",{children:l?l.total_transactions:"?"})]})}),Object(F.jsx)("div",{className:"mainHomeContentsLandingItem",children:Object(F.jsxs)("div",{className:"mainHomeLandingSub",children:[Object(F.jsx)(te.a,{style:{fontSize:40}}),Object(F.jsx)("span",{children:"Contas monitoradas *"}),Object(F.jsx)("strong",{children:n?n.length:"?"})]})})]}),Object(F.jsxs)("div",{className:"mainHomeContentsAccounts",children:[Object(F.jsxs)("div",{className:"mainHomeContentsAccountsConfigs",children:[Object(F.jsx)("h3",{children:"Contas"}),Object(F.jsx)(ae.a,{}),Object(F.jsx)("button",{onClick:function(){x(D({id:"NEW_POST",props:{handleUpdate:function(e){c([].concat(Object(p.a)(n),[e]))}}}))},children:"Nova conta"})]}),n.map((function(e,t){return Object(F.jsx)(le,{handleDelete:g,account:e},t)}))]})]})})},je=(n(91),function(){var e=Object(C.c)((function(e){return e.user})),t=Object(a.useState)(null),n=Object(u.a)(t,2),c=n[0],r=n[1],s=Object(C.b)(),i=Object(d.g)();Object(a.useEffect)((function(){r(e)}),[e]);return Object(F.jsx)("div",{className:"mainNavbar",children:Object(F.jsxs)("div",{className:"mainNavbarContents",children:[Object(F.jsx)("h2",{onClick:function(){i.push("/")},children:"Gerenciador de caixa"}),c?Object(F.jsx)("span",{onClick:function(){s({type:"SIGN_OUT"}),s(_({title:"Conta desconectada!",description:"Conta desconectada com sucesso",status:"success",code:"SIGN_OUT"})),i.push("/login"),localStorage.removeItem("authToken")},children:"Sair"}):null]})})}),pe=n(28),be=n.n(pe),me=(n(92),function(e){var t=e.props,n=Object(a.useState)({title:"",description:""}),c=Object(u.a)(n,2),r=c[0],s=c[1],l=Object(C.c)((function(e){return e.user})),d=Object(C.b)(),p=function(){d({type:"REMOVE_POST"})},b=function(e){s(Object(j.a)(Object(j.a)({},r),{},Object(A.a)({},e.target.id,e.target.value)))},m=function(){var e=Object(o.a)(i.a.mark((function e(n){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,h(l,r,localStorage.getItem("authToken"));case 3:void 0!==(a=e.sent).data.account?(t.handleUpdate(a.data.account),p(),d(_(a.data.status))):d(_(a.data.status));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(F.jsxs)("div",{className:"mainModalNewAccount",children:[Object(F.jsx)(be.a,{onClick:function(){p()},style:{fontSize:50},className:"closeIcon"}),Object(F.jsx)("form",{onSubmit:m,className:"mainModalNewAccountBox",children:Object(F.jsxs)("div",{className:"mainModalNewAccountContents",children:[Object(F.jsx)("h2",{children:"Nova conta:"}),Object(F.jsxs)("div",{className:"mainModalNewAccountContentsInput",children:[Object(F.jsx)("span",{children:"Titulo"}),Object(F.jsx)("input",{onChange:function(e){b(e)},id:"title",type:"text",required:!0})]}),Object(F.jsxs)("div",{className:"mainModalNewAccountContentsInput",children:[Object(F.jsx)("span",{children:"Descricao"}),Object(F.jsx)("input",{onChange:function(e){b(e)},id:"description",type:"text",required:!0})]}),Object(F.jsx)("div",{className:"mainModalNewAccountContentsButton",children:Object(F.jsx)("button",{type:"submit",children:"Criar"})})]})})]})}),Oe=(n(93),function(e){var t=e.props,n=Object(a.useState)({id:t.item.id,title:t.item.title,description:t.item.description,modality:t.item.modality,type:t.item.type,value:t.item.value}),c=Object(u.a)(n,2),r=c[0],s=c[1],l=Object(a.useState)([]),d=Object(u.a)(l,2),b=d[0],m=d[1],O=Object(C.c)((function(e){return e.user})),h=Object(C.b)(),f=function(e){s(Object(j.a)(Object(j.a)({},r),{},Object(A.a)({},e.target.id,e.target.value)))},x=function(e){var t=function(){var t=Object(o.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w(O.email,e.id,localStorage.getItem("authToken"));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t().then((function(e){try{null!==e.data.tag&&m(b.filter((function(t){return t.id!=e.data.tag.id})))}catch(n){h(_(t.data.status))}}))},v=function(){var e=Object(o.a)(i.a.mark((function e(n){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,I(r,O,localStorage.getItem("authToken"));case 3:a=e.sent;try{"EDIT_TRANSACTION_SUCCESS"===a.data.status.code?(t.handleUpdate(r),h(_(a.data.status)),h({type:"REMOVE_POST"})):h(_(a.data.status))}catch(c){}case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){m(t.item.tags)}),[]),Object(F.jsxs)("div",{className:"mainModalEditTransaction",children:[Object(F.jsx)(be.a,{onClick:function(){h({type:"REMOVE_POST"})},style:{fontSize:50},className:"closeIcon"}),Object(F.jsx)("form",{onSubmit:v,className:"mainModalEditTransactionBox",children:Object(F.jsxs)("div",{className:"mainModalEditTransactionContents",children:[Object(F.jsxs)("span",{children:["Editar transa\xe7\xe3o #",t.item.id]}),Object(F.jsxs)("div",{className:"mainModalEditTransactionSection",children:[Object(F.jsxs)("div",{className:"mainModalEditTransactionSectionItem",children:[Object(F.jsx)("span",{children:"Titulo:"}),Object(F.jsx)("input",{onChange:function(e){f(e)},defaultValue:t.item.title,id:"title",type:"text",required:!0})]}),Object(F.jsxs)("div",{className:"mainModalEditTransactionSectionItem",children:[Object(F.jsx)("span",{children:"Descri\xe7\xe3o:"}),Object(F.jsx)("input",{onChange:function(e){f(e)},defaultValue:t.item.description,id:"description",type:"text",required:!0})]})]}),Object(F.jsx)("div",{className:"mainModalEditTransactionSection",children:Object(F.jsxs)("div",{className:"mainNewItemsTagDiv",children:[b.map((function(e){return Object(F.jsx)(U,{handleRemoveTag:x,tag:e},e.id)})),Object(F.jsx)("input",{placeholder:"Ex: comida",onKeyDown:function(e){!function(e){"Tab"!==e.key&&"Enter"!==e.key||(e.preventDefault(),""!==e.target.value&&(function(){var n=Object(o.a)(i.a.mark((function n(){return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,T(e.target.value.toLowerCase(),O,t.item,localStorage.getItem("authToken"));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()().then((function(e){m([].concat(Object(p.a)(b),[e.data.tag]))})),e.target.value=""))}(e)},className:"mainNewItemsTagInput"})]})}),Object(F.jsxs)("div",{className:"mainModalEditTransactionSection",children:[Object(F.jsxs)("div",{className:"mainModalEditTransactionSectionItem",children:[Object(F.jsx)("span",{children:"Modalidade:"}),Object(F.jsxs)("select",{onChange:function(e){f(e)},defaultValue:t.item.modality,id:"modality",name:"modalide",children:[Object(F.jsx)("option",{value:"Manual",children:"Manual"}),Object(F.jsx)("option",{value:"Recorrente",children:"Recorrente"})]})]}),Object(F.jsxs)("div",{className:"mainModalEditTransactionSectionItem",children:[Object(F.jsx)("span",{children:"Tipo:"}),Object(F.jsxs)("select",{onChange:function(e){f(e)},defaultValue:t.item.type,id:"type",name:"tipo",children:[Object(F.jsx)("option",{value:"Entrada",children:"Entrada"}),Object(F.jsx)("option",{value:"Saida",children:"Saida"})]})]}),Object(F.jsxs)("div",{className:"mainModalEditTransactionSectionItem",children:[Object(F.jsx)("span",{children:"Valor:"}),Object(F.jsx)("input",{onChange:function(e){f(e)},defaultValue:t.item.value,id:"value",min:0,step:"0.01",type:"number",required:!0})]}),Object(F.jsxs)("div",{className:"mainModalEditTransactionSectionItem",children:[Object(F.jsx)("span",{children:"Data:"}),Object(F.jsx)("input",{onChange:function(){},style:{cursor:"not-allowed"},onClick:function(e){e.preventDefault()},value:function(e){var t=new Date(e),n=""+(t.getMonth()+1),a=""+t.getDate(),c=t.getFullYear();return n.length<2&&(n="0"+n),a.length<2&&(a="0"+a),[c,n,a].join("-")}(t.item.date),id:"data",type:"date",required:!0})]}),Object(F.jsxs)("div",{className:"mainModalEditTransactionSectionItem",children:[Object(F.jsx)("span",{}),Object(F.jsx)("button",{className:"mainModalEditTransactionConfirm",children:"Confirmar"})]})]})]})})]})}),he=(n(94),function(e){var t=e.props,n=Object(C.b)(),a=function(){n({type:"REMOVE_POST"})};return Object(F.jsxs)("div",{className:"mainModalDeleteOperation",children:[Object(F.jsx)(be.a,{onClick:a,style:{fontSize:50},className:"closeIcon"}),Object(F.jsx)("form",{onSubmit:function(e){e.preventDefault()},className:"mainModalDeleteOperationBox",children:Object(F.jsxs)("div",{className:"mainModalDeleteOperationContent",children:[Object(F.jsx)("span",{children:"Tem certeza que deseja excluir?"}),Object(F.jsxs)("div",{className:"mainModalDeleteOperationContentButtons",children:[Object(F.jsx)("button",{onClick:t.handleDelete,children:"Confirmar"}),Object(F.jsx)("button",{onClick:a,children:"Cancelar"})]})]})})]})}),fe=(n(95),function(e){var t=e.component,n={CONFIRM_DELETE:Object(F.jsx)(he,{props:t.props}),NEW_POST:Object(F.jsx)(me,{props:t.props}),EDIT_TRAN:Object(F.jsx)(Oe,{props:t.props})};return Object(F.jsx)(F.Fragment,{children:n[t.id]})}),xe=n(52),ve=n.n(xe),ge=(n(96),function(e){var t=e.props,n=e.id,a=Object(C.b)(),c=function(){a(function(e){return{type:"REMOVE_NOTIFICATION",payload:e}}({id:n}))};return Object(F.jsxs)("div",{onClick:c,onAnimationEnd:c,className:"mainNotification ".concat(t.status),children:[Object(F.jsx)(ve.a,{style:{fontSize:30}}),Object(F.jsxs)("div",{className:"mainNotificationContent",children:[Object(F.jsx)("strong",{children:t.title}),Object(F.jsx)("span",{children:t.description})]}),Object(F.jsx)("span",{className:"mainNotificationLoader"})]})}),Ne=n(53),ye=function(e){var t=e.component,n=Object(Ne.a)(e,["component"]),c=Object(C.c)((function(e){return e.user})),r=Object(a.useState)(!1),s=Object(u.a)(r,2),i=s[0],o=s[1];return Object(a.useEffect)((function(){o(c)}),[]),!1===i?Object(F.jsx)(F.Fragment,{}):Object(F.jsx)(d.b,Object(j.a)(Object(j.a)({},n),{},{render:function(e){return i?Object(F.jsx)(t,Object(j.a)({},e)):Object(F.jsx)(d.a,{to:{pathname:"/login",state:{path:n.path}}})}}))},Se=(n(97),function(e){var t=e.props;return Object(F.jsx)("div",{className:"mainContext",style:{left:"".concat(t.position.x,"px"),top:"".concat(t.position.y,"px")},children:t.options.map((function(e){return Object(F.jsx)("span",{onClick:e.function,children:e.title},e.title)}))})});n(98);var Te=function(){var e=Object(C.c)((function(e){return e.post})),t=Object(C.c)((function(e){return e.user})),n=Object(C.c)((function(e){return e.notifications})),c=Object(C.c)((function(e){return e.context})),r=Object(a.useState)(!1),s=Object(u.a)(r,2),j=s[0],p=s[1],b=Object(C.b)();return Object(a.useEffect)((function(){var e=function(){var e=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G(localStorage.getItem("authToken"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(function(){var n=Object(o.a)(i.a.mark((function n(){return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(null===localStorage.getItem("authToken")){n.next=8;break}return n.prev=1,n.next=4,e().then((function(e){"TOKEN_SUCCESS"===e.data.status.code?b(k(e.data.user)):localStorage.removeItem("authToken")}));case 4:n.next=8;break;case 6:n.prev=6,n.t0=n.catch(1);case 8:p(t);case 9:case"end":return n.stop()}}),n,null,[[1,6]])})));return function(){return n.apply(this,arguments)}})()()}),[]),!1===j?Object(F.jsx)(F.Fragment,{}):Object(F.jsxs)("div",{onClick:function(){c&&b({type:"REMOVE_CONTEXT"})},className:"App",children:[Object(F.jsx)("div",{className:"AppNotifications",children:n.map((function(e){return Object(F.jsx)(ge,{id:e.id,props:e.props},e.id)}))}),c?Object(F.jsx)(Se,{props:c}):null,Object(F.jsxs)(l.a,{children:[Object(F.jsx)(je,{}),Object(F.jsxs)(d.d,{children:[Object(F.jsx)(ye,{path:"/dashboard/:accountId",exact:!0,component:P}),Object(F.jsx)(ye,{path:"/",exact:!0,component:de}),Object(F.jsx)(d.b,{path:"/login",exact:!0,component:$})]})]}),e?Object(F.jsx)(fe,{component:e}):null]})},we=n(32),Ie=Object(we.a)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_OUT":return null;case"SIGN_IN":return t.payload;default:return e}},post:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PUT_POST":return t.payload;case"REMOVE_POST":return null;default:return e}},notifications:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PUT_NOTIFICATION":return[].concat(Object(p.a)(e),[{props:t.payload,id:Object(E.a)()}]);case"REMOVE_NOTIFICATION":return e.filter((function(e){return e.id!==t.payload.id}));default:return e}},context:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PUT_CONTEXT":return t.payload;case"REMOVE_CONTEXT":return null;default:return e}}}),Ce=Object(we.b)(Ie,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());r.a.render(Object(F.jsx)(C.a,{store:Ce,children:Object(F.jsx)(Te,{})}),document.getElementById("root"))},59:function(e,t,n){},82:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){},98:function(e,t,n){}},[[100,1,2]]]);
//# sourceMappingURL=main.6638029c.chunk.js.map