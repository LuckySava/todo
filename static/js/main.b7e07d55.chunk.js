(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],[,,function(e,t,n){e.exports={task:"Todo_task__1Cd-h",task__text:"Todo_task__text__2rgsE",task__number:"Todo_task__number__ifrB9",task__controls:"Todo_task__controls__1dvAj",btns_control:"Todo_btns_control__2K9Ue",task_checked:"Todo_task_checked__2YdP7",delete_btn:"Todo_delete_btn__1104b",done_btn:"Todo_done_btn__2J8G1",save_btn:"Todo_save_btn__3C22Y",edit_btn:"Todo_edit_btn__2q9tL",edit_btn_disabled:"Todo_edit_btn_disabled__1O-Xr",done_btn_disabled:"Todo_done_btn_disabled__Dsgw3",delete_btn_disabled:"Todo_delete_btn_disabled__1cCgE",custom_textarea:"Todo_custom_textarea__12yD0"}},function(e,t,n){e.exports={app:"App_app__1YSJl",container:"App_container__2IgQn",main_header:"App_main_header__3-Mqa",author:"App_author__3v8Fn",main_form:"App_main_form__2ZTSg",tasks:"App_tasks___2uIQ",todo_header:"App_todo_header__3p1yf",todo_title:"App_todo_title__3mK3P",todo_title_empty:"App_todo_title_empty__ESgYg",info_panel:"App_info_panel__AIvzE"}},,,,,function(e,t,n){e.exports={main_btn:"Button_main_btn__CVQgC",main_btn__disabled:"Button_main_btn__disabled__2mGYR",task_count:"Button_task_count__2je3r"}},,function(e,t,n){},,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var l,a,c,r,o,i,d,s,u,b,m,_,h,p,g,v,f,j=n(0),E=n.n(j),O=n(11),y=n.n(O),x=(n(16),n(4)),k=n(6),w=n(3),C=n.n(w),S=(n(17),n(1)),z=function(e){var t=e.value,n=e.type,l=e.placeholder,a=e.onChange;return Object(S.jsx)("input",{value:t,onChange:a,type:n,placeholder:l})},M=n(8),N=n.n(M),T=function(e){var t=e.children,n=e.onClick,l=e.disabled,a=e.taskCount;return Object(S.jsxs)("button",{disabled:l,onClick:n,className:"".concat(N.a.main_btn," ").concat(l?N.a.main_btn__disabled:""),children:[t,a>0&&Object(S.jsx)("span",{className:N.a.task_count,children:a})]})},I=n(2),P=n.n(I),A=["title","titleId"];function V(){return(V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}function B(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},c=Object.keys(e);for(l=0;l<c.length;l++)n=c[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(l=0;l<c.length;l++)n=c[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function H(e,t){var n=e.title,E=e.titleId,O=B(e,A);return j.createElement("svg",V({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512 512",style:{enableBackground:"new 0 0 512 512"},xmlSpace:"preserve",ref:t,"aria-labelledby":E},O),n?j.createElement("title",{id:E},n):null,l||(l=j.createElement("g",null,j.createElement("g",null,j.createElement("path",{d:"M270.807,132.974c-3.235-2.612-7.978-2.109-10.592,1.129L53.444,390.196c-0.031,0.038-0.056,0.08-0.086,0.119 c-0.054,0.069-0.103,0.142-0.156,0.213c-0.131,0.181-0.252,0.366-0.365,0.556c-0.044,0.075-0.09,0.149-0.133,0.226 c-0.143,0.261-0.275,0.527-0.386,0.802c-0.008,0.021-0.014,0.042-0.022,0.063c-0.102,0.26-0.186,0.525-0.259,0.794 c-0.023,0.086-0.043,0.173-0.063,0.26c-0.053,0.231-0.095,0.464-0.128,0.7c-0.007,0.052-0.022,0.101-0.028,0.155l-11.694,103.86 c-0.485,4.313,1.241,8.517,4.62,11.245c2.288,1.847,5.078,2.81,7.918,2.81c1.354,0,2.719-0.219,4.047-0.666l99.063-33.316 c0.048-0.016,0.092-0.041,0.141-0.058c0.227-0.081,0.448-0.173,0.666-0.275c0.079-0.037,0.158-0.073,0.235-0.114 c0.252-0.13,0.498-0.27,0.735-0.428c0.015-0.01,0.031-0.018,0.045-0.028c0.247-0.167,0.481-0.353,0.707-0.549 c0.064-0.056,0.125-0.115,0.189-0.173c0.164-0.152,0.32-0.311,0.471-0.478c0.058-0.065,0.117-0.128,0.174-0.195 c0.032-0.038,0.067-0.072,0.099-0.11l37.945-46.996c2.611-3.236,2.105-7.978-1.131-10.591c-3.237-2.612-7.978-2.109-10.592,1.129 l-33.214,41.135l-41.174-33.244l-41.174-33.245l202.041-250.233C274.548,140.329,274.043,135.587,270.807,132.974z  M101.607,438.764l36.354,29.352l-82.439,27.725l9.731-86.43L101.607,438.764z"})))),a||(a=j.createElement("g",null,j.createElement("g",null,j.createElement("path",{d:"M460.929,54.689L401.34,6.578c-12.737-10.285-31.466-8.289-41.752,4.449l-44.201,54.745l-25.261,31.286 c-2.613,3.237-2.108,7.979,1.129,10.592c3.236,2.612,7.978,2.109,10.592-1.129l20.53-25.427l41.174,33.244l41.174,33.245 l-189.17,234.292c-2.613,3.237-2.108,7.979,1.129,10.592c1.393,1.125,3.065,1.672,4.727,1.672c2.197,0,4.377-0.958,5.865-2.801 l193.901-240.152l44.201-54.745C475.661,83.703,473.666,64.973,460.929,54.689z M453.657,86.978l-39.47,48.884l-41.174-33.244 l-41.174-33.245l39.47-48.884c5.065-6.275,14.294-7.259,20.568-2.191l59.588,48.112C457.74,71.475,458.723,80.703,453.657,86.978z "})))),c||(c=j.createElement("g",null)),r||(r=j.createElement("g",null)),o||(o=j.createElement("g",null)),i||(i=j.createElement("g",null)),d||(d=j.createElement("g",null)),s||(s=j.createElement("g",null)),u||(u=j.createElement("g",null)),b||(b=j.createElement("g",null)),m||(m=j.createElement("g",null)),_||(_=j.createElement("g",null)),h||(h=j.createElement("g",null)),p||(p=j.createElement("g",null)),g||(g=j.createElement("g",null)),v||(v=j.createElement("g",null)),f||(f=j.createElement("g",null)))}var L,D,Y,R,F,J,X,Q,q,G,K,U,Z,W,$,ee,te,ne,le,ae,ce,re,oe=j.forwardRef(H),ie=(n.p,["title","titleId"]);function de(){return(de=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}function se(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},c=Object.keys(e);for(l=0;l<c.length;l++)n=c[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(l=0;l<c.length;l++)n=c[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function ue(e,t){var n=e.title,l=e.titleId,a=se(e,ie);return j.createElement("svg",de({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512 512",style:{enableBackground:"new 0 0 512 512"},xmlSpace:"preserve",ref:t,"aria-labelledby":l},a),n?j.createElement("title",{id:l},n):null,L||(L=j.createElement("g",null,j.createElement("g",null,j.createElement("path",{d:"M508.885,88.448L423.552,3.115C421.547,1.131,418.837,0,416,0H32C14.357,0,0,14.357,0,32v448c0,17.643,14.357,32,32,32 h448c17.643,0,32-14.357,32-32V96C512,93.163,510.869,90.453,508.885,88.448z M490.667,480c0,5.888-4.8,10.667-10.667,10.667H32 c-5.867,0-10.667-4.779-10.667-10.667V32c0-5.888,4.8-10.667,10.667-10.667h379.584l79.083,79.083V480z"})))),D||(D=j.createElement("g",null,j.createElement("g",null,j.createElement("path",{d:"M373.333,0H138.667C132.779,0,128,4.779,128,10.667v128c0,17.643,14.357,32,32,32h192c17.643,0,32-14.357,32-32v-128 C384,4.779,379.221,0,373.333,0z M362.667,138.667c0,5.888-4.8,10.667-10.667,10.667H160c-5.867,0-10.667-4.779-10.667-10.667 V21.333h213.333V138.667z"})))),Y||(Y=j.createElement("g",null,j.createElement("g",null,j.createElement("path",{d:"M394.667,192H117.333C87.915,192,64,215.936,64,245.333v256C64,507.221,68.779,512,74.667,512h362.667 c5.888,0,10.667-4.779,10.667-10.667v-256C448,215.936,424.085,192,394.667,192z M426.667,490.667H85.333V245.333 c0-17.643,14.357-32,32-32h277.333c17.643,0,32,14.357,32,32V490.667z"})))),R||(R=j.createElement("g",null,j.createElement("g",null,j.createElement("path",{d:"M330.667,42.667H288c-5.888,0-10.667,4.779-10.667,10.667v64c0,5.888,4.779,10.667,10.667,10.667h42.667 c5.888,0,10.667-4.779,10.667-10.667v-64C341.333,47.445,336.555,42.667,330.667,42.667z M320,106.667h-21.333V64H320V106.667z"})))),F||(F=j.createElement("g",null,j.createElement("g",null,j.createElement("path",{d:"M373.333,277.333H138.667c-5.888,0-10.667,4.779-10.667,10.667s4.779,10.667,10.667,10.667h234.667 c5.888,0,10.667-4.779,10.667-10.667S379.221,277.333,373.333,277.333z"})))),J||(J=j.createElement("g",null,j.createElement("g",null,j.createElement("path",{d:"M373.333,341.333H138.667c-5.888,0-10.667,4.779-10.667,10.667c0,5.888,4.779,10.667,10.667,10.667h234.667 c5.888,0,10.667-4.779,10.667-10.667C384,346.112,379.221,341.333,373.333,341.333z"})))),X||(X=j.createElement("g",null,j.createElement("g",null,j.createElement("path",{d:"M373.333,405.333H138.667c-5.888,0-10.667,4.779-10.667,10.667c0,5.888,4.779,10.667,10.667,10.667h234.667 c5.888,0,10.667-4.779,10.667-10.667C384,410.112,379.221,405.333,373.333,405.333z"})))),Q||(Q=j.createElement("g",null)),q||(q=j.createElement("g",null)),G||(G=j.createElement("g",null)),K||(K=j.createElement("g",null)),U||(U=j.createElement("g",null)),Z||(Z=j.createElement("g",null)),W||(W=j.createElement("g",null)),$||($=j.createElement("g",null)),ee||(ee=j.createElement("g",null)),te||(te=j.createElement("g",null)),ne||(ne=j.createElement("g",null)),le||(le=j.createElement("g",null)),ae||(ae=j.createElement("g",null)),ce||(ce=j.createElement("g",null)),re||(re=j.createElement("g",null)))}var be,me,_e,he,pe,ge,ve,fe,je,Ee,Oe,ye,xe,ke,we,Ce,Se=j.forwardRef(ue),ze=(n.p,["title","titleId"]);function Me(){return(Me=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}function Ne(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},c=Object.keys(e);for(l=0;l<c.length;l++)n=c[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(l=0;l<c.length;l++)n=c[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function Te(e,t){var n=e.title,l=e.titleId,a=Ne(e,ze);return j.createElement("svg",Me({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 511.992 511.992",style:{enableBackground:"new 0 0 511.992 511.992"},xmlSpace:"preserve",ref:t,"aria-labelledby":l},a),n?j.createElement("title",{id:l},n):null,be||(be=j.createElement("g",null,j.createElement("g",null,j.createElement("path",{d:"M504.219,58.222c-9.13-7.53-22.527-6.186-30.015,2.901L190.483,405.62L36.42,251.579c-8.341-8.341-21.823-8.341-30.164,0 c-8.341,8.341-8.341,21.823,0,30.164l170.66,170.66c3.989,4.032,9.429,6.25,15.082,6.25c0.341,0,0.683,0,1.024-0.021 c6.037-0.277,11.626-3.093,15.445-7.744L507.12,88.236C514.608,79.127,513.328,65.709,504.219,58.222z"})))),me||(me=j.createElement("g",null)),_e||(_e=j.createElement("g",null)),he||(he=j.createElement("g",null)),pe||(pe=j.createElement("g",null)),ge||(ge=j.createElement("g",null)),ve||(ve=j.createElement("g",null)),fe||(fe=j.createElement("g",null)),je||(je=j.createElement("g",null)),Ee||(Ee=j.createElement("g",null)),Oe||(Oe=j.createElement("g",null)),ye||(ye=j.createElement("g",null)),xe||(xe=j.createElement("g",null)),ke||(ke=j.createElement("g",null)),we||(we=j.createElement("g",null)),Ce||(Ce=j.createElement("g",null)))}var Ie,Pe,Ae,Ve,Be,He,Le=j.forwardRef(Te),De=(n.p,["title","titleId"]);function Ye(){return(Ye=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}function Re(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},c=Object.keys(e);for(l=0;l<c.length;l++)n=c[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(l=0;l<c.length;l++)n=c[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function Fe(e,t){var n=e.title,l=e.titleId,a=Re(e,De);return j.createElement("svg",Ye({id:"Layer_1",height:512,viewBox:"0 0 150 150",width:512,xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",ref:t,"aria-labelledby":l},a),n?j.createElement("title",{id:l},n):null,Ie||(Ie=j.createElement("path",{d:"m98.835 139h-47.67a13.048 13.048 0 0 1 -12.965-12.064l-6.275-86.936h86.15l-.075 1.072-6.2 85.864a13.048 13.048 0 0 1 -12.965 12.064zm-58.642-12.208a11.042 11.042 0 0 0 10.972 10.208h47.67a11.042 11.042 0 0 0 10.972-10.208l6.118-84.792h-81.85z"})),Pe||(Pe=j.createElement("path",{d:"m92 25h-34v-9a5.006 5.006 0 0 1 5-5h24a5.006 5.006 0 0 1 5 5zm-32-2h30v-7a3 3 0 0 0 -3-3h-24a3 3 0 0 0 -3 3z"})),Ae||(Ae=j.createElement("path",{d:"m120 42h-90a5.006 5.006 0 0 1 -5-5v-9a5.006 5.006 0 0 1 5-5h90a5.006 5.006 0 0 1 5 5v9a5.006 5.006 0 0 1 -5 5zm-90-17a3 3 0 0 0 -3 3v9a3 3 0 0 0 3 3h90a3 3 0 0 0 3-3v-9a3 3 0 0 0 -3-3z"})),Ve||(Ve=j.createElement("path",{d:"m56 119.5a1 1 0 0 1 -1-1v-58a1 1 0 0 1 2 0v58a1 1 0 0 1 -1 1z"})),Be||(Be=j.createElement("path",{d:"m75 119.5a1 1 0 0 1 -1-1v-58a1 1 0 0 1 2 0v58a1 1 0 0 1 -1 1z"})),He||(He=j.createElement("path",{d:"m94 119.5a1 1 0 0 1 -1-1v-58a1 1 0 0 1 2 0v58a1 1 0 0 1 -1 1z"})))}var Je=j.forwardRef(Fe),Xe=(n.p,function(e){var t=e.body,n=e.number,l=e.del,a=e.done,c=e.edit,r=e.checked,o=e.editMode,i=e.getEditModeValue,d=function(){return c(n-1)},s=Object(j.useState)({id:n-1}),u=Object(k.a)(s,2),b=u[0],m=u[1];return Object(S.jsx)(S.Fragment,{children:Object(S.jsxs)("div",{className:"".concat(P.a.task," ").concat(r?P.a.task_checked:P.a.task_not_checked),children:[Object(S.jsx)("span",{className:P.a.task__number,children:n}),o?Object(S.jsx)("textarea",{onChange:function(e){m({body:e.target.value,id:n-1})},name:"editMode",className:P.a.custom_textarea,defaultValue:t}):Object(S.jsx)("p",{onDoubleClick:d,className:P.a.task__text,children:t}),Object(S.jsxs)("div",{className:P.a.task__controls,children:[o?Object(S.jsx)("div",{onClick:function(){i(b)},className:"".concat(P.a.save_btn," ").concat(P.a.btns_control),children:Object(S.jsx)(Se,{})}):Object(S.jsx)("div",{onClick:d,className:"".concat(P.a.edit_btn," ").concat(P.a.btns_control," ").concat(r?P.a.edit_btn_disabled:""),children:Object(S.jsx)(oe,{})}),Object(S.jsx)("div",{onClick:function(){return a(n-1)},className:"".concat(P.a.done_btn," ").concat(P.a.btns_control," ").concat(o?P.a.done_btn_disabled:""),children:Object(S.jsx)(Le,{})}),Object(S.jsx)("div",{onClick:function(){return l(n)},className:"".concat(P.a.delete_btn," ").concat(P.a.btns_control," ").concat(o?P.a.delete_btn_disabled:""),children:Object(S.jsx)(Je,{})})]})]})})}),Qe=n(10),qe=n.n(Qe),Ge=function(e){var t=e.onChange;return Object(S.jsx)("div",{className:qe.a.info_panel,children:Object(S.jsxs)("select",{onChange:t,className:qe.a.select,children:[Object(S.jsx)("option",{value:"",children:"Please make your choose"}),Object(S.jsx)("option",{value:"id-asc",children:"Sort by Id (ASC)"}),Object(S.jsx)("option",{value:"id-desc",children:"Sort by Id (DESC)"}),Object(S.jsx)("option",{value:"body-asc",children:"Sort by Text (ASC)"}),Object(S.jsx)("option",{value:"body-desc",children:"Sort by Text (DESC)"})]})})};var Ke=function(){var e=Object(j.useState)(""),t=Object(k.a)(e,2),n=t[0],l=t[1],a=Object(j.useState)([]),c=Object(k.a)(a,2),r=c[0],o=c[1],i=function(e){var t=Object(x.a)(r.filter((function(t,n){return n+1!==e})));o(t)};function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=e.slice(0),l=n[t].editmode;return n[t].editmode=!l,n}Object(j.useEffect)((function(){l(n)}),[n]);var s=function(e){var t=function(){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:r).slice(0),n=t[e].checked;return t[e].checked=!n,t}(r,e);o(t)},u=function(e){var t=d(r,e);o(t)},b=function(e){if(e.hasOwnProperty("body")){var t=function(){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=arguments.length>2?arguments[2]:void 0,n=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:r).slice(0),l=n[e].editmode;return n[e].body=t,n[e].editmode=!l,n}(r,e.id,e.body);o(t)}else{var n=d(r,e.id);o(n)}};function m(e,t){return e.body<t.body?-1:e.body>t.body?1:0}function _(e,t){return e.body<t.body?1:e.body>t.body?-1:0}return Object(S.jsx)(S.Fragment,{children:Object(S.jsx)("section",{className:C.a.app,children:Object(S.jsxs)("div",{className:C.a.container,children:[Object(S.jsx)("h2",{className:C.a.main_header,children:"My First Todo App"}),Object(S.jsx)("span",{className:C.a.author,children:"by Savchenko Oleksandr"}),Object(S.jsxs)("form",{className:C.a.main_form,children:[Object(S.jsx)(z,{value:n,onChange:function(e){l(e.target.value)},type:"text",placeholder:"Enter your task here"}),Object(S.jsx)(T,{taskCount:r.length,disabled:!n.length,onClick:function(e){e.preventDefault(),o([].concat(Object(x.a)(r),[{id:r.length,checked:!1,body:n.trim(),editmode:!1}])),l("")},children:"Create Task"})]}),r.length?Object(S.jsx)("h2",{className:"".concat(C.a.todo_title," ").concat(C.a.todo_header),children:"Your Tasks:"}):Object(S.jsx)("h2",{className:"".concat(C.a.todo_title_empty," ").concat(C.a.todo_header),children:"Nothing to do!"}),r.length?Object(S.jsxs)("div",{className:C.a.info_panel,children:[" ",Object(S.jsx)(Ge,{onChange:function(e){var t=e.target.value;if(t)switch(t){case"id-desc":var n=Object(x.a)(r).sort((function(e,t){return t.id-e.id}));o(n);break;case"id-asc":var l=Object(x.a)(r).sort((function(e,t){return e.id-t.id}));o(l);break;case"body-desc":var a=Object(x.a)(r).sort(m);o(a);break;case"body-asc":var c=Object(x.a)(r).sort(_);o(c);break;default:console.log("Sorry, nothing match")}}})]}):"",Object(S.jsx)("div",{className:C.a.tasks,children:r.map((function(e,t){return Object(S.jsx)(Xe,{checked:e.checked,editMode:e.editmode,del:i,done:s,edit:u,getEditModeValue:b,number:t+1,body:e.body},t)}))})]})})})};y.a.render(Object(S.jsx)(E.a.StrictMode,{children:Object(S.jsx)(Ke,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.b7e07d55.chunk.js.map