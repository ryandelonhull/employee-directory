(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{26:function(e,t,r){},44:function(e,t,r){},45:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r(1),s=r.n(n),c=r(13),i=r.n(c),o=(r(26),r(14)),l=r(15),d=r(3),u=r(20),j=r(18),h=r(16),b=r.n(h),m=function(){return b.a.get("https://randomuser.me/api/?results=15")};var f=function(e){var t=e.searchRandos;return Object(a.jsxs)("div",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(a.jsx)("a",{className:"navbar-brand",href:"#",children:"Rando Commandos"}),Object(a.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(a.jsx)("span",{className:"navbar-toggler-icon"})}),Object(a.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(a.jsx)("form",{className:"form-inline my-2 my-lg-0",children:Object(a.jsx)("input",{className:"form-control mr-sm-2",onChange:function(e){return t(e)},type:"search",placeholder:"Search","aria-label":"Search"})})})]})};var v=function(e){function t(e){var t=e.split("-"),r=t[0];return[t[1],t[2].split("T")[0],r].join("-")}return console.log(e),Object(a.jsx)("tbody",{children:void 0!==e.users[0]&&void 0!==e.users[0].name?e.users.map((function(e){var r=e.login,n=e.name,s=e.picture,c=e.phone,i=e.email,o=e.dob;return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{"data-th":"Image",className:"align-middle",children:Object(a.jsx)("img",{src:s.medium,alt:"profile image for "+n.first+" "+n.last,className:"img-responsive"})}),Object(a.jsxs)("td",{"data-th":"Name",className:"name-cell align-middle",children:[n.first," ",n.last]}),Object(a.jsx)("td",{"data-th":"Phone",className:"align-middle",children:c}),Object(a.jsx)("td",{"data-th":"Email",className:"align-middle",children:Object(a.jsx)("a",{href:"mailto:"+i,target:"__blank",children:i})}),Object(a.jsx)("td",{"data-th":"DOB",className:"align-middle",children:t(o.date)})]},r.uuid)})):Object(a.jsx)(a.Fragment,{})})},O=r(19);var g=function(e){var t=e.users,r=e.sortColumn;return console.log(t),console.log(r),Object(a.jsxs)(O.a,{striped:!0,bordered:!0,hover:!0,variant:"dark",children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"Profile Picture"}),Object(a.jsx)("th",{onClick:function(){r("name")},children:"Name"}),Object(a.jsx)("th",{children:"Phone"}),Object(a.jsx)("th",{children:"Email"}),Object(a.jsx)("th",{children:"Date of Birth"})]})}),Object(a.jsx)(v,{users:t})]})},p=function(e){Object(u.a)(r,e);var t=Object(j.a)(r);function r(e){var a;return Object(o.a)(this,r),(a=t.call(this,e)).state={users:[{}],filteredUsers:[{}],order:"descent"},a.sortColumn=function(e){"descent"===a.state.order?a.setState({order:"ascent"},(function(){var e=a.state.filteredUsers.sort(r);a.setState({filteredUsers:e})})):a.setState({order:"descent"},(function(){var e=a.state.filteredUsers.sort(r);a.setState({filteredUsers:e})}));var t=Object(d.a)(a);function r(r,a){return"ascent"===t.state.order?"name"===e?r[e].first.localeCompare(a[e].first):r[e]-a[e]:"name"===e?a[e].first.localeCompare(r[e].first):a[e]-r[e]}},a.searchRandos=function(e){var t=e.target.value,r=a.state.users.filter((function(e){return-1!==Object.values(e).join("").toLowerCase().indexOf(t.toLowerCase())}));a.setState({filteredUsers:r})},a.sortColumnX=a.sortColumn.bind(Object(d.a)(a)),a}return Object(l.a)(r,[{key:"componentDidMount",value:function(){var e=this;m().then((function(t){e.setState({users:t.data.results,filteredUsers:t.data.results})}))}},{key:"render",value:function(){var e=this.sortColumn;return Object(a.jsxs)("div",{children:[Object(a.jsx)(f,{searchRandos:this.searchRandos}),Object(a.jsx)("div",{children:Object(a.jsx)(g,{users:this.state.filteredUsers,sortColumn:function(t){return e(t)}})})]})}}]),r}(n.Component);r(44);var x=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(p,{})})},C=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,46)).then((function(t){var r=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,c=t.getTTFB;r(e),a(e),n(e),s(e),c(e)}))};i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(x,{})}),document.getElementById("root")),C()}},[[45,1,2]]]);
//# sourceMappingURL=main.d7e2c490.chunk.js.map